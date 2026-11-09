# Website design reference

Use the existing Infinity Sudoku identity: quiet 9×9 logic, cyan ink, and clear decisions. Keep copy concrete: “Play”, difficulty, notes, hints, and the App Store. Do not invent ratings, user counts, medical claims, or account synchronization.

Use `text` and `muted` on `bg` or `surface`. Use `action` for the main play action and `on-action` for its text. Keep the original `primary`, `primary-dark`, `cream`, and `gold` for identity and decoration. Do not put small white text on `primary`; the semantic `action` token provides accessible contrast. Decorative `border` is not a focus indicator: use `focus` for keyboard interaction. Use `error` on `error-bg` with a visible underline.

Use the `sans` family and the six Interface text styles. Avenir Next is a system font; use the documented fallback stack when it is unavailable. No font download is required. Keep headings balanced, controls at least 44px high, and mobile descriptions and primary actions before previews. Use `space-1` through `space-6` for rhythm; use `radius-sm` on controls and `radius-lg` only on the large board and preview. Keep page backgrounds solid. Limit `shadow` to those two large surfaces.

Keep the browser game distinct from the native app: the web puzzle is free, requires no account, and keeps its board only in the current page. Daily challenges, history, themes, and printing belong to the Apple app. Preserve the App Store link next to browser play.

Use the real source icon from the website's `favicon/apple-touch-icon.png` and the real store glyph in `images/app-store-icon.svg` in production. Use inline stroke SVG for utility icons. Do not reconstruct the brush icon, add emoji, or import another brand's identity. The design canvas uses the plain wordmark because the asset import tool is unavailable.

Production CSS is the source of truth in [`style/refresh.css`](../../style/refresh.css). This system is its design export. It contains 23 colors in two themes, six type styles, six spacing levels, three radii, and one shadow. Read `tokens.json` for exact values. The design system declares no component bundle; use semantic HTML with those values. The existing website has no exported JavaScript component library.

Not synced: source PNG/SVG identity assets remain in the production website; the current environment has no design-system asset importer. No font binary is missing: the family uses system fonts.


The obsolete canvas prototypes and plugin state are not part of this source. The live HTML and CSS implement the design. Update this token reference when changing the production palette or typography. Printing in the Apple app is available on iPhone, iPad, and Mac.
