# Tangent Ratio Guide — Translation Schema (Page 14 of 45)

Translators produce the 18-locale content for `theme/components/TangentRatioGuideLocalized.astro`
(the English page is the hardcoded `theme/components/TangentRatioGuide.astro`).

## Deliverables

- `src/data/tangentGuideTranslations.batch1.ts` → `export const TANGENT_TRANSLATIONS_BATCH1 = { hi, es, ru, fr, de, it }`
- `src/data/tangentGuideTranslations.batch2.ts` → `export const TANGENT_TRANSLATIONS_BATCH2 = { pt, bn, ja, ko, ms, pl }`
- `src/data/tangentGuideTranslations.batch3.ts` → `export const TANGENT_TRANSLATIONS_BATCH3 = { id, ar, bg, tr, sv, zh }`
- `src/data/tangentGuideTranslations.ts` → merges the three batches:
  `export const TANGENT_GUIDE_TRANSLATIONS = { ...TANGENT_TRANSLATIONS_BATCH1, ...TANGENT_TRANSLATIONS_BATCH2, ...TANGENT_TRANSLATIONS_BATCH3 };`

Each batch value maps locale code → G, where G is one locale's translation object.

## Schema of G

```ts
G = {
  tocHeading: string,              // translated "In This Guide"
  tocItems: { [id]: string },      // 15 labels, one per id in tocOrder below
  sections: {
    [id]: {
      h2: string,
      blocks?: Array<{ kind: 'h3' | 'p', text: string }>,  // PREFERRED: ordered content
      // legacy fallbacks (also supported by the renderer):
      paragraphs?: string[],
      h3s?: string[],
      steps?: string[],            // ordered list (walkthrough, mistakes); aliases: list, listItems
      closingParagraphs?: string[],
      tables?: Array<{ headers: string[], rows: string[][] }>,  // first table rendered
      figures?: Array<{ alt: string, caption: string }>,        // first figure rendered
      imgAlt?: string,                 // alt text (under 125 chars)
      figcaption?: string,             // figure caption
      related?: Array<{ name: string, desc?: string }>  // only on 'sec-related'
    }
  },
  faqs: Array<{ question: string, answer: string }>,  // exactly 12 (q/a aliases also work)
  faqHeading: string,              // translated "Frequently Asked Questions"
  relatedHeading: string,          // translated "Explore Related Trigonometric Calculators"
  relatedIntro?: string,           // optional intro under the related heading
  relatedItems?: string[],         // fallback names if sections['sec-related'].related is absent
  conclusion?: { h2: string, paragraphs: string[] }   // optional conclusion
}
```

Empty arrays (`"steps": []`, `"tables": []`, `"figures": []`) are allowed where a section
has none, matching the cotangent batch convention.

## Section ids (DO NOT translate these)

Content sections (13): `sec-intro`, `sec-triangle`, `sec-whatis`, `sec-formula`,
`sec-howto`, `sec-examples`, `sec-applications`, `sec-angle`, `sec-side`,
`sec-recover`, `sec-mistakes`, `sec-verify`, `sec-vs`

TOC order (15 = 13 sections + related + faq): the 13 above, then `sec-related`, `sec-faq`.

Conclusion: top-level `conclusion` with `h2` and `paragraphs` (also supported: `sections['sec-conclusion']`).

Sections with ordered lists: `sec-howto` (12 steps), `sec-mistakes` (15 steps) → use `steps`.
Sections with tables: `sec-applications` (7-col comparison), `sec-angle` (4-col), `sec-vs` (3-col) → use `tables`.

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/tangent-ratio/`) | English alt (≤125 chars) |
|---|---|---|
| `sec-triangle`      | `tangent-anatomy.svg`      | Right triangle with angle A bottom-left, gold opposite side a, blue adjacent side b, tan(A)=a/b |
| `sec-whatis`        | `tangent-formula.svg`      | Three stages: 3-4-5 triangle, tangent formula tan(A)=a/b, result 0.75, opposite is 75 percent of adjacent |
| `sec-applications`  | `tangent-practical.svg`    | Four panels: ramp 0.075, roof pitch 0.75, ladder 1.3333, surveying 0.75, each with a labeled triangle |
| `sec-angle`         | `tangent-angle-change.svg` | Three triangles at 30, 45, 60 degrees with tangent values 0.5774, 1, 1.7321; tangent rises with angle |

English captions:
- `sec-triangle`: "Angle A sits at the bottom-left; tangent uses the gold opposite side a and the blue adjacent side b, not the hypotenuse c."
- `sec-whatis`: "Three stages: label the 3-4-5 triangle, write tan(A) = a/b, then divide 3 by 4 to get 0.75."
- `sec-applications`: "Four practical calculations: ramp, roof pitch, ladder, and surveying, each with its triangle, formula, and ratio."
- `sec-angle`: "As angle A grows, the opposite side becomes a longer share of the adjacent side, so tan(A) rises."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/sine-ratio-calculator/` — Sine Ratio Calculator
2. `/cosine-ratio-calculator/` — Cosine Ratio Calculator
3. `/cotangent-ratio-calculator/` — Cotangent Ratio Calculator
4. `/secant-ratio-calculator/` — Secant Ratio Calculator
5. `/cosecant-ratio-calculator/` — Cosecant Ratio Calculator
6. `/right-triangle-angle-calculator/` — Right Triangle Angle Calculator
7. `/right-triangle-side-calculator/` — Right Triangle Side Calculator

For `sec-related`, provide `related: [{name, desc}]` with a translated name and one-line
translated description per calculator, in the fixed order above. URLs are NOT translated;
the renderer builds them from the fixed list.

## KaTeX / escaping rules (critical)

- Math stays inside `[[...]]` (inline) and `[[[...]]]` (display) markers. Translate only the
  surrounding prose; keep variable symbols (A, B, C, a, b, c), function names (tan, sin, cos),
  and formulas byte-identical to the English.
- In the `.ts` source, strings are double-quoted. Write TWO backslash characters for each
  KaTeX backslash: `"[[\\tan(A)=a/b]]"`, `"[[[\\boxed{\\tan(A)=\\frac{a}{b}}]]]"`.
  (In the file you write `\\tan`; it becomes `\tan` at runtime. Never write a single `\t`,
  `\n`, `\s` etc. in the source: always double the backslash.)
- Escape embedded double quotes as `\"`. Never use em dashes or decorative unicode (§, ✦, ★).
- Degree markup `[[30^\\circ]]`, approximations `[[\\approx]]`, fractions `[[\\frac{a}{b}]]`
  follow the same doubling rule.

## Quality rules

- Native-quality prose, correct mathematical terminology per locale; Arabic is RTL
  (the renderer handles direction; just translate naturally).
- Follow the locked standard in `TRANSLATION_PROMPT.md` (2026-10-30).
- No em dashes anywhere. No AI-tell words in English-adjacent strings.
