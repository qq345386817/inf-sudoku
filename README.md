# Infinity Sudoku website

The production website is https://inf-sudoku.luopeike.com, hosted by the existing
Cloudflare Pages project `inf-sudoku` on branch `main`.

## Website design

`style/refresh.css` is the shared Focus design layer, loaded after the original
base/game styles. It defines light and dark tokens, responsive layouts, readable
action colors, keyboard focus, the home preview, article styles, and game controls.
Keep the existing cyan/ink app identity and real icon assets. The website remains
a static site; no runtime framework or external font download is required.

The browser game is free and uses an in-memory board. Do not imply that web games
are saved or synchronized with the Apple app. Preserve the native download entry
for daily challenges, history, themes, printing, and other app features.

## Generate pages

```sh
node scripts/generate-play-pages.mjs
```

This regenerates all 11 localized play pages and their supporting content, then
applies the shared design and complete language navigation. To apply just the
visual/navigation refresh to existing content:

```sh
node scripts/refresh-site.mjs
```

The refresh is idempotent. It updates localized home headlines, existing guide
links, skip links, active navigation, 11-language selectors, RTL direction, and
the shared stylesheet reference. It preserves canonical URLs, alternate links,
structured data, descriptions, and policy text.

## Validate and release

Check desktop and mobile layouts in light and dark appearance, including long
translated words and Arabic RTL. Exercise cell input, Notes, Undo, Hint,
difficulty selection, new puzzles, the FAQ, and language switching before release.
Keep browser screenshots, traces, and temporary QA reports outside this repository.

Publish static public files through the existing Cloudflare Pages project. The
repository's scripts and documentation are development sources, not web pages.
