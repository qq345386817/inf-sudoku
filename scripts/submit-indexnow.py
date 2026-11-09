#!/usr/bin/env python3
"""Notify IndexNow after changed pages are deployed; dry-run by default."""

import argparse
import datetime
import json
from pathlib import Path
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://inf-sudoku.luopeike.com"
ENDPOINT = "https://api.indexnow.org/indexnow"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--since", required=True, type=datetime.date.fromisoformat,
                        help="Only include sitemap pages changed on or after YYYY-MM-DD")
    parser.add_argument("--submit", action="store_true", help="Send the notification after checking the live key")
    args = parser.parse_args()
    key = (ROOT / "indexnow-key.txt").read_text().strip()
    if not re.fullmatch(r"[A-Za-z0-9-]{8,128}", key):
        parser.error("Invalid IndexNow key")

    urls = []
    for entry in ET.parse(ROOT / "sitemap.xml").findall("s:url", NS):
        url = entry.findtext("s:loc", namespaces=NS)
        modified = entry.findtext("s:lastmod", namespaces=NS)
        if not modified or datetime.date.fromisoformat(modified[:10]) < args.since:
            continue
        parsed = urllib.parse.urlsplit(url or "")
        if parsed.scheme != "https" or parsed.netloc != urllib.parse.urlsplit(ORIGIN).netloc or parsed.query or parsed.fragment:
            parser.error(f"Invalid canonical URL: {url}")
        urls.append(url)
    urls = list(dict.fromkeys(urls))
    if not 1 <= len(urls) <= 10000:
        parser.error(f"Expected 1-10000 recently changed URLs, found {len(urls)}")
    print(json.dumps({"mode": "submit" if args.submit else "dry-run", "since": str(args.since),
                      "urlCount": len(urls), "urls": urls}, ensure_ascii=False))
    if not args.submit:
        return

    key_location = f"{ORIGIN}/indexnow-key.txt"
    with urllib.request.urlopen(key_location, timeout=30) as response:
        if response.status != 200 or response.read().decode().strip() != key:
            raise ValueError("The production key does not match; deploy before submitting")
    payload = {"host": urllib.parse.urlsplit(ORIGIN).netloc, "key": key,
               "keyLocation": key_location, "urlList": urls}
    request = urllib.request.Request(ENDPOINT, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json; charset=utf-8"})
    with urllib.request.urlopen(request, timeout=30) as response:
        status = response.status
        if status not in (200, 202):
            raise ValueError(f"Unexpected IndexNow HTTP status: {status}")
        print(json.dumps({"httpStatus": status, "urlCount": len(urls),
                          "result": "received; key validation pending" if status == 202 else "received",
                          "indexed": "not confirmed"}))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, urllib.error.URLError) as error:
        print(f"IndexNow failed: {error}", file=sys.stderr)
        sys.exit(1)
