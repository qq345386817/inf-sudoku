# Infinity Sudoku website

The production website is https://inf-sudoku.luopeike.com, hosted by the existing
Cloudflare Pages project `inf-sudoku` on branch `main`.

## Website design

`style/refresh.css` is the shared Focus design layer, loaded after the original
base/game styles. It defines light and dark tokens, responsive layouts, readable
action colors, keyboard focus, the home preview, article styles, and game controls.
Keep the existing cyan/ink app identity and real icon assets. The website remains
a static site; no runtime framework or external font download is required.

The browser game is free and uses an in-memory board, with notes, undo, erase,
and a hint that reveals one correct number. It has no account or saved games.
The Apple app adds daily challenges and local completion history (no cloud sync),
themes, and optional candidate help (5 games per day for free; unlimited with Pro).
Printing is available on iPhone, iPad, and Mac, not Apple TV. Core puzzles work
offline; remote themes and Game Center need a network connection.

`scripts/product-content.json` is the 11-language website product fact source.
Its descriptions, promotional text, subtitles, and platform paragraphs were
reviewed against the native Fastlane metadata snapshot dated 2026-11-09. Keep
this standalone repository self-contained: review and update this snapshot when
app behavior or metadata changes, then run the generator. Do not automatically
import a neighboring app checkout or imply that local metadata is already live
on the App Store. `scripts/product-copy.js` is generated for the game's native
promotion so JavaScript cannot restore outdated claims after page load.

## Generate pages

```sh
node scripts/generate-play-pages.mjs
```

This regenerates all 11 localized play pages and their supporting content, then
applies product content, SEO metadata, FAQ structured data, the shared design,
and complete language navigation. It also updates `llms.txt` as an optional
machine-readable summary, not a search-engine requirement or ranking signal.
To refresh product pages and visual/navigation content without regenerating play:

```sh
node scripts/refresh-site.mjs
```

The refresh is idempotent. It updates localized home headlines, existing guide
links, skip links, active navigation, 11-language selectors, RTL direction, and
the shared stylesheet reference. It preserves canonical URLs, alternate links,
policy text. Product pages derive descriptions, structured data, and FAQ from
the shared product source. The sitemap keeps all 88 existing URLs and marks
only the 66 changed product/game pages with the snapshot's `lastmod` date.

## Validate and release

Check desktop and mobile layouts in light and dark appearance, including long
translated words and Arabic RTL. Exercise cell input, Notes, Undo, Hint,
difficulty selection, new puzzles, the FAQ, and language switching before release.
Keep browser screenshots, traces, and temporary QA reports outside this repository.

Publish static public files through the existing Cloudflare Pages project. The
repository's scripts and documentation are development sources, not web pages.

Keep the root `404.html`: it disables Cloudflare Pages' implicit SPA fallback, so
unknown paths return HTTP 404 instead of duplicating the homepage with HTTP 200.
The error page uses root-relative assets and links so it also works for missing
localized or deeply nested URLs. It is excluded from the sitemap and generators.
After deployment, verify both real pages (200) and unknown paths (404) on the
custom domain; a local static server alone cannot confirm Pages routing behavior.

## Search-engine update notifications

After publishing changed content, notify IndexNow once for the relevant sitemap
`lastmod` dates. Preview the batch, then send it only after production is ready:

```sh
python3 scripts/submit-indexnow.py --since 2026-11-09
python3 scripts/submit-indexnow.py --since 2026-11-09 --submit
```

Use the actual update date, not a permanently fixed date. Keep `lastmod` accurate;
do not notify unchanged pages repeatedly. The script validates the canonical
host and checks the production key before sending. `indexnow-key.txt` is the
public ownership file required by this protocol, not a Google/Bing account token.
HTTP 200 means received; 202 means received with key validation pending. Neither
confirms indexing, and IndexNow does not replace Google Search Console.
