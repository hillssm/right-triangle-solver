# Cotangent Ratio Guide — Translation Schema (Page 11 of 45)

Translators produce the 18-locale content for `theme/components/CotangentRatioGuideLocalized.astro`
(the English page is the hardcoded `theme/components/CotangentRatioGuide.astro`).

## Deliverables

- `src/data/cotangentGuideTranslations.batch1.ts` → `export const COTANGENT_TRANSLATIONS_BATCH1 = { hi, es, ru, fr, de, it }`
- `src/data/cotangentGuideTranslations.batch2.ts` → `export const COTANGENT_TRANSLATIONS_BATCH2 = { pt, bn, ja, ko, ms, pl }`
- `src/data/cotangentGuideTranslations.batch3.ts` → `export const COTANGENT_TRANSLATIONS_BATCH3 = { id, ar, bg, tr, sv, zh }`
- `src/data/cotangentGuideTranslations.ts` → merges the three batches:
  `export const COTANGENT_GUIDE_TRANSLATIONS = { ...COTANGENT_TRANSLATIONS_BATCH1, ...COTANGENT_TRANSLATIONS_BATCH2, ...COTANGENT_TRANSLATIONS_BATCH3 };`

Each batch value maps locale code → G, where G is one locale's translation object.

## Schema of G

```ts
G = {
  tocHeading: string,              // translated "In This Guide"
  tocItems: { [id]: string },      // 14 labels, one per id in tocOrder below
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
      imgAlt?: string,             // legacy flat alt (under 125 chars)
      figcaption?: string,         // legacy flat caption
      related?: Array<{ name: string, desc?: string }>  // only on 'cot-related'
    }
  },
  faqs: Array<{ question: string, answer: string }>,  // exactly 12 (q/a aliases also work)
  faqHeading: string,              // translated "Frequently Asked Questions"
  relatedHeading: string,          // translated "Explore Related Trigonometric Calculators"
  relatedIntro?: string,           // optional intro under the related heading
  relatedItems?: string[],         // fallback names if sections['cot-related'].related is absent
  conclusion?: { h2: string, paragraphs: string[] }   // optional conclusion
}
```

Empty arrays (`"steps": []`, `"tables": []`, `"figures": []`) are allowed where a section
has none, matching the cosecant batch convention.

## Section ids (DO NOT translate these)

Content sections (12): `cot-intro`, `cot-triangle`, `cot-whatis`, `cot-formula`,
`cot-howto`, `cot-examples`, `cot-applications`, `cot-angle`, `cot-recover`,
`cot-mistakes`, `cot-verify`, `cot-vs`

TOC order (14 = 12 sections + related + faq): the 12 above, then `cot-related`, `cot-faq`.

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/cotangent/`) | English alt (≤125 chars) |
|---|---|---|
| `cot-triangle`      | `cotangent-anatomy.svg`      | Right triangle with angle A bottom-left, gold adjacent side b, green opposite side a, cot(A)=b/a |
| `cot-whatis`        | `cotangent-reciprocal.svg`   | Three stages: 3-4-5 triangle labeled, tangent tan(A)=3/4=0.75, cotangent cot(A)=4/3=1.3333, the reciprocal relationship |
| `cot-applications`  | `cotangent-applications.svg` | Four panels: ladder ratio 0.75, roof 1.3333, ramp 12, surveying 1.3333, each with a labeled right triangle |
| `cot-angle`         | `cotangent-angle-change.svg` | Three triangles at 30, 45, 60 degrees with cotangent values 1.7321, 1, 0.5774; cotangent falls as the angle grows |

English captions:
- `cot-triangle`: "Angle A sits at the bottom-left; cotangent uses the gold adjacent side b and the green opposite side a, not the hypotenuse c."
- `cot-whatis`: "Three stages: label the 3-4-5 triangle, compute tangent tan(A) = 3/4, then flip the fraction to get cot(A) = 4/3."
- `cot-applications`: "Four practical calculations: ladder, roof, ramp, and surveying, each with its triangle, formula, and ratio."
- `cot-angle`: "As angle A grows, the opposite side becomes a larger share of the adjacent side, so cot(A) falls."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/sine-ratio-calculator/`
2. `/cosine-ratio-calculator/`
3. `/tangent-ratio-calculator/`
4. `/secant-ratio-calculator/`
5. `/cosecant-ratio-calculator/`
6. `/right-triangle-angle-calculator/`

Related calculator names in English order: Sine Ratio Calculator, Cosine Ratio Calculator,
Tangent Ratio Calculator, Secant Ratio Calculator, Cosecant Ratio Calculator,
Right Triangle Angle Calculator.

## Translator rules

- Keep all section ids, variable symbols (`A`, `B`, `a`, `b`, `c`), numbers, and degree
  values exactly as in English; translate only surrounding prose.
- Math markup `[[...]]` (inline) and `[[[...]]]` (display) is passed through KaTeX:
  keep it intact, e.g. `[[\\cot(A)=b/a]]`.
- Internal links written as `href="/..."` are auto-prefixed with the locale; never
  translate URLs.
- Alt texts must stay under 125 characters.
- No em dashes anywhere; no decorative unicode (§, ✦, ★).
- No AI-tell words (delve, moreover, furthermore, seamless, unlock, elevate, tapestry,
  landscape as metaphor, embark, nestled, cutting-edge, robust, vibrant, crucial,
  pivotal, testament, weapon as metaphor, "in today's…").
- German uses formal "Sie"; French uses formal "vous".
- Match the English section order and keep all 12 FAQs.
