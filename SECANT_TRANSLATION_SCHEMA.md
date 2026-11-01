# Secant Ratio Guide — Translation Schema (Page 12 of 45)

Translators produce the 18-locale content for `theme/components/SecantRatioGuideLocalized.astro`
(the English page is the hardcoded `theme/components/SecantRatioGuide.astro`).

## Deliverables

- `src/data/secantGuideTranslations.batch1.ts` → `export const SECANT_TRANSLATIONS_BATCH1 = { hi, es, ru, fr, de, it }`
- `src/data/secantGuideTranslations.batch2.ts` → `export const SECANT_TRANSLATIONS_BATCH2 = { pt, bn, ja, ko, ms, pl }`
- `src/data/secantGuideTranslations.batch3.ts` → `export const SECANT_TRANSLATIONS_BATCH3 = { id, ar, bg, tr, sv, zh }`
- `src/data/secantGuideTranslations.ts` → merges the three batches:
  `export const SECANT_GUIDE_TRANSLATIONS = { ...SECANT_TRANSLATIONS_BATCH1, ...SECANT_TRANSLATIONS_BATCH2, ...SECANT_TRANSLATIONS_BATCH3 };`

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
`sec-howto`, `sec-examples`, `sec-applications`, `sec-angle`, `sec-hypotenuse`,
`sec-recover`, `sec-mistakes`, `sec-verify`, `sec-vs`

TOC order (15 = 13 sections + related + faq): the 13 above, then `sec-related`, `sec-faq`.

Conclusion: `sections['sec-conclusion']` with `h2` and `blocks` (also supported as top-level `conclusion`).

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/secant-ratio/`) | English alt (≤125 chars) |
|---|---|---|
| `sec-triangle`      | `secant-anatomy.svg`      | Right triangle with angle A bottom-left, gold hypotenuse c, blue adjacent side b, sec(A)=c/b |
| `sec-whatis`        | `secant-reciprocal.svg`   | Three stages: 3-4-5 triangle, cosine cos(A)=4/5=0.8, secant sec(A)=5/4=1.25, the reciprocal relationship |
| `sec-applications`  | `secant-applications.svg` | Four panels: ladder ratio 1.25, ramp 1.0556, surveying 1.25, crane boom 1.6667, each with a labeled right triangle |
| `sec-angle`         | `secant-angle-change.svg` | Three triangles at 30, 45, 60 degrees with secant values 1.1547, 1.4142, 2; secant rises as the angle grows |

English captions:
- `sec-triangle`: "Angle A sits at the bottom-left; secant uses the gold hypotenuse c and the blue adjacent side b, not the opposite side a."
- `sec-whatis`: "Three stages: label the 3-4-5 triangle, compute cosine cos(A) = 4/5, then flip the fraction to get sec(A) = 5/4."
- `sec-applications`: "Four practical calculations: ladder, ramp, surveying, and crane boom, each with its triangle, formula, and ratio."
- `sec-angle`: "As angle A grows, the adjacent side becomes a smaller share of the hypotenuse, so sec(A) rises."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/sine-ratio-calculator/`
2. `/cosine-ratio-calculator/`
3. `/tangent-ratio-calculator/`
4. `/cosecant-ratio-calculator/`
5. `/cotangent-ratio-calculator/`
6. `/right-triangle-angle-calculator/`

Related calculator names in English order: Sine Ratio Calculator, Cosine Ratio Calculator,
Tangent Ratio Calculator, Cosecant Ratio Calculator, Cotangent Ratio Calculator,
Right Triangle Angle Calculator.

## Translator rules

- Keep all section ids, variable symbols (`A`, `B`, `a`, `b`, `c`), numbers, and degree
  values exactly as in English; translate only surrounding prose.
- Math markup `[[...]]` (inline) and `[[[...]]]` (display) is passed through KaTeX:
  keep it intact, e.g. `[[\\sec(A)=c/b]]`.
- Internal links written as `href="/..."` are auto-prefixed with the locale; never
  translate URLs.
- Alt texts must stay under 125 characters.
- No em dashes anywhere; no decorative unicode (§, ✦, ★).
- No AI-tell words (delve, moreover, furthermore, seamless, unlock, elevate, tapestry,
  landscape as metaphor, embark, nestled, cutting-edge, robust, vibrant, crucial,
  pivotal, testament, weapon as metaphor, "in today's…").
- German uses formal "Sie"; French uses formal "vous".
- Match the English section order and keep all 12 FAQs.
