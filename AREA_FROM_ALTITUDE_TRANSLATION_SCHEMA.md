# Area From Altitude Guide — Translation Schema (Page 17 of 45)

Translators produce the 18-locale content for `theme/components/AreaFromAltitudeGuideLocalized.astro`
(the English page is the hardcoded `theme/components/AreaFromAltitudeGuide.astro`).

## Deliverables

Nine 2-locale partial files (split because a single 6-locale worker exceeds its output token budget):

- `src/data/areaFromAltitudeGuideTranslations.batch1a.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1A = { hi, es }`
- `src/data/areaFromAltitudeGuideTranslations.batch1b.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1B = { ru, fr }`
- `src/data/areaFromAltitudeGuideTranslations.batch1c.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1C = { de, it }`
- `src/data/areaFromAltitudeGuideTranslations.batch2a.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2A = { pt, bn }`
- `src/data/areaFromAltitudeGuideTranslations.batch2b.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2B = { ja, ko }`
- `src/data/areaFromAltitudeGuideTranslations.batch2c.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2C = { ms, pl }`
- `src/data/areaFromAltitudeGuideTranslations.batch3a.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3A = { id, ar }`
- `src/data/areaFromAltitudeGuideTranslations.batch3b.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3B = { bg, tr }`
- `src/data/areaFromAltitudeGuideTranslations.batch3c.ts` → `export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3C = { sv, zh }`

Three batch indexes (written by the coordinator, not translators):

- `src/data/areaFromAltitudeGuideTranslations.batch1.ts` → merges 1a+1b+1c → `AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1`
- `src/data/areaFromAltitudeGuideTranslations.batch2.ts` → merges 2a+2b+2c → `AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2`
- `src/data/areaFromAltitudeGuideTranslations.batch3.ts` → merges 3a+3b+3c → `AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH3`

Final merger (written by the coordinator):

- `src/data/areaFromAltitudeGuideTranslations.ts` → `export const AREA_FROM_ALTITUDE_GUIDE_TRANSLATIONS = { ...BATCH1, ...BATCH2, ...BATCH3 };`

Each partial value maps locale code → G, where G is one locale's translation object.

## Schema of G

```ts
G = {
  tocHeading: string,              // translated "In This Guide"
  tocItems: { [id]: string },      // 19 labels, one per id in tocOrder below
  sections: {
    [id]: {
      h2: string,
      blocks?: Array<{ kind: 'h3' | 'p', text: string }>,  // PREFERRED: ordered content
      // legacy fallbacks (also supported by the renderer):
      paragraphs?: string[],
      h3s?: string[],
      steps?: string[],            // ordered list; aliases: list, listItems
      closingParagraphs?: string[],
      table?: { headers: string[], rows: string[][] },   // first/only table
      tables?: Array<{ headers: string[], rows: string[][] }>,  // additional tables
      imgAlt?: string,                 // alt text (under 125 chars)
      figcaption?: string,             // figure caption
    }
  },
  faqs: Array<{ question: string, answer: string }>,  // exactly 12 (q/a aliases also work)
  faqHeading: string,              // translated "Frequently Asked Questions"
  relatedHeading: string,          // translated "Explore Related Right Triangle Calculators"
  relatedIntro?: string,           // optional intro under the related heading
  relatedItems?: string[],         // 7 translated calculator names, fixed URL order below
}
```

Empty arrays are allowed where a section has none.

## Section ids (DO NOT translate these)

Content sections (16): `sec-intro`, `sec-understand`, `sec-formula`, `sec-steps`,
`sec-howto`, `sec-examples`, `sec-applications`, `sec-equal`, `sec-geomean`,
`sec-max`, `sec-find-altitude`, `sec-units`, `sec-mistakes`, `sec-verify`,
`sec-compare`, `sec-conclusion`.

TOC order (19 = 16 sections + related + faq + conclusion placed at end): the 16
above with `sec-related` and `sec-faq` inserted after `sec-compare` and before
`sec-conclusion`.

Section content shapes:
- `sec-intro`: blocks (4 paragraphs: intro with 10m/4.8m example) — no image
- `sec-understand`: blocks (1 intro paragraph, 5 h3s, 5 paragraphs: "What Is a Right Triangle?", "What Is the Hypotenuse?", "What Is the Altitude?", "Is the Altitude the Same as a Leg?", "Why the Altitude Falls Inside the Triangle") + imgAlt + figcaption
- `sec-formula`: blocks (1 intro paragraph, 4 h3s, 4 paragraphs: "Why Do We Multiply the Hypotenuse by the Altitude?", "Why Is the Result Divided by Two?", "Does This Formula Work for Every Triangle?", "Why the Formula Does Not Need the Two Legs") + imgAlt + figcaption
- `sec-steps`: steps (8 numbered steps: identify, write formula, substitute, multiply, divide, interpret, check feasibility, verify with legs)
- `sec-howto`: blocks (1 intro paragraph) + steps (14 walkthrough steps)
- `sec-examples`: blocks (1 intro paragraph, 4 h3s, 4 paragraphs: 3-4-5, 5-12-13, 6-8-10, isosceles 10/5) — no image
- `sec-applications`: blocks (1 intro paragraph) + steps or paragraphs per practical example (12 fully worked: garden 10m/4.8m, plywood 1m/0.48m, glass 1.3m/0.6m, survey 13m/60-13m, tile 25cm/6.72cm, steel panel 1.7m/12-17m, ramp 5m/2.4m, roof gable 6.5m/30-13m, land plot 50m/24m, survey plot 100m/48m, sail 15ft/7.2ft, bracket 250mm/120mm) + `table` (6 columns: Practical situation | Hypotenuse c | Altitude h | Formula | Calculated area | Practical interpretation; 12 rows) + imgAlt + figcaption
- `sec-equal`: blocks (2-3 paragraphs: derivation ab/2 = ch/2 → h = ab/c; numerical verification with 6-8-10; "what if only c and h known") — no image
- `sec-geomean`: blocks (1 intro paragraph, 3 h3s, 3 paragraphs: "Two Smaller Similar Right Triangles", "The Altitude Geometric Mean Theorem", "Relationship Between the Segments and Legs") — no image
- `sec-max`: blocks (1 intro paragraph, 4 h3s, 4 paragraphs: "Why the Altitude Cannot Exceed Half the Hypotenuse", "Maximum Area for a Fixed Hypotenuse", "What Happens If the Altitude Is Too Large?", "Can the Altitude Equal Half the Hypotenuse?") + imgAlt + figcaption
- `sec-find-altitude`: blocks (1 intro paragraph, 3 h3s, 3 paragraphs: Method 1 h=ab/c, Method 2 h=sqrt(pq), Method 3 h=2K/c) — no image
- `sec-units`: blocks (1 intro paragraph, 5 h3s, 5 paragraphs: square metres, square centimetres, square millimetres, converting area units, different input units) — no image
- `sec-mistakes`: blocks (1 intro paragraph) + steps (18 numbered mistakes, each 1-2 sentences) — no image
- `sec-verify`: blocks (1 intro paragraph, 7 h3s, 7 paragraphs: positive inputs, altitude limit, confirm right angle, square units, cross-check with legs, geometric mean, max area comparison) — no image
- `sec-compare`: blocks (2-3 paragraphs) + `table` (3 columns: Method | Required measurements | Main advantage; 4 rows: legs, altitude, angle, inradius) — no image
- `sec-conclusion`: blocks (2-3 closing paragraphs) — no image

## Images (fixed per section; translate only alt + caption)

| Section id        | File (in `/images/area-from-altitude/`) | English alt (<=125 chars) |
|---|---|---|
| `sec-understand`  | `altitude-anatomy.svg`  | Right triangle ABC with legs a and b, hypotenuse c as base, altitude h from right-angle vertex C to point D, formula K = ch/2 |
| `sec-formula`     | `altitude-area-half.svg` | Diagram showing why triangle area is half of base times height: c = 10, h = 4.8, 10 x 4.8 = 48, divided by 2 gives 24 square units |
| `sec-applications`| `altitude-practical.svg` | Four real-world examples: garden, glass panel, land plot, and bracket, each showing hypotenuse c, altitude h, and calculated area |
| `sec-max`         | `altitude-geomean-max.svg` | Two-part diagram: 6-8-10 triangle with altitude dividing hypotenuse into p = 6.4 and q = 3.6, and isosceles triangle showing maximum altitude c/2 |

## Math markup rules (CRITICAL)

- Inline math: `[[...]]` e.g. `[[K=\\frac{ch}{2}]]`, `[[h=4.8]]`, `[[c=10\\text{ m}]]`
- Display math: `[[[...]]]` e.g. `[[[\\boxed{K=24\\text{ m}^2}]]]`
- KaTeX only: single backslash in .ts source means the literal string contains `\` (write `\\\\` in TS source? NO — TS template strings: a single backslash written in the file stays single; in TS source files translators write `\\frac` as `\\\\frac` ONLY if the string is in double quotes with escaping). FOLLOW THE EXACT CONVENTION OF THE EXISTING ENGLISH SOURCE FILE (`theme/components/AreaFromAltitudeGuide.astro`): there, `set:html={rich('[[K=\\\\frac{ch}{2}]]')}` — the Astro source writes `\\\\frac` so the runtime string has `\\frac`... no wait. Study the English file: in `.astro` source, the literal text `rich('[[K=\\\\frac{ch}{2}]]')` evaluates to the string `[[K=\\frac{ch}{2}]]`. In a `.ts` translation file, strings written with backticks or quotes must produce THE IDENTICAL runtime string. Existing batch files (e.g. `src/data/areaGuideTranslations.batch1a.ts`) show the correct escaping — copy that convention exactly.
- NEVER over-escape: Hindi KaTeX broke on 2026-11-01 because backslashes were doubled beyond the runtime single-backslash form. Verify by comparing runtime strings.
- Variable symbols a, b, c, h, K, p, q, D stay untranslated. Numbers stay. Degree symbol stays.
- Internal links: keep `href="/..."` paths exactly; the renderer rewrites them to `/<locale>/...` automatically.
- NO em dashes (—), NO AI-tell words, NO decorative unicode.

## Related calculator URLs (fixed order; translate only the names)

1. `/right-triangle-area-calculator/`
2. `/right-triangle-area-from-legs-calculator/`
3. `/right-triangle-altitude-from-sides-calculator/`
4. `/right-triangle-area-from-semiperimeter-calculator/`
5. `/right-triangle-area-from-angle-calculator/`
6. `/right-triangle-perimeter-calculator/`
7. `/right-triangle-side-calculator/`

## Copy rules (user-locked, all locales)

- No em dashes anywhere. Use commas, colons, or periods.
- No AI-tell words (delve, moreover, furthermore, seamless, unlock, elevate, tapestry, landscape as metaphor, embark, nestled, cutting-edge, robust, vibrant, crucial, pivotal, testament, weapon as metaphor, "in today's…").
- No decorative unicode (§, ✦, ★).
- FAQ answers: 40-75 words each, self-contained, no copied paragraphs.
