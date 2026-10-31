# Cosine Ratio Guide — Translation Schema (Page 10 of 45)

Translators produce the 18-locale content for `theme/components/CosineRatioGuideLocalized.astro`
(the English page is the hardcoded `theme/components/CosineRatioGuide.astro`).

## Deliverables

- `src/data/cosineGuideTranslations.batch1.ts` → `export const COSINE_TRANSLATIONS_BATCH1 = { hi, es, ru, fr, de, it }`
- `src/data/cosineGuideTranslations.batch2.ts` → `export const COSINE_TRANSLATIONS_BATCH2 = { pt, bn, ja, ko, ms, pl }`
- `src/data/cosineGuideTranslations.batch3.ts` → `export const COSINE_TRANSLATIONS_BATCH3 = { id, ar, bg, tr, sv, zh }`
- `src/data/cosineGuideTranslations.ts` → merges the three batches:
  `export const COSINE_GUIDE_TRANSLATIONS = { ...COSINE_TRANSLATIONS_BATCH1, ...COSINE_TRANSLATIONS_BATCH2, ...COSINE_TRANSLATIONS_BATCH3 };`

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
      related?: Array<{ name: string, desc?: string }>  // only on 'cos-related'
    }
  },
  faqs: Array<{ question: string, answer: string }>,  // exactly 12 (q/a aliases also work)
  faqHeading: string,              // translated "Frequently Asked Questions"
  relatedHeading: string,          // translated "Explore Related Trigonometric Calculators"
  relatedIntro?: string,           // optional intro under the related heading
  relatedItems?: string[],         // fallback names if sections['cos-related'].related is absent
  conclusion?: { h2: string, paragraphs: string[] }   // optional conclusion
}
```

Empty arrays (`"steps": []`, `"tables": []`, `"figures": []`) are allowed where a section
has none, matching the cosecant batch convention.

## Section ids (DO NOT translate these)

Content sections (12): `cos-intro`, `cos-triangle`, `cos-whatis`, `cos-formula`,
`cos-howto`, `cos-examples`, `cos-applications`, `cos-angle`, `cos-recover`,
`cos-mistakes`, `cos-verify`, `cos-vs`

TOC order (14 = 12 sections + related + faq): the 12 above, then `cos-related`, `cos-faq`.

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/cosine/`) | English alt (≤125 chars) |
|---|---|---|
| `cos-triangle`      | `cosine-anatomy.svg`      | Right triangle with angle A bottom-left, gold adjacent side b, blue hypotenuse c, neutral opposite side a, cos(A)=b/c |
| `cos-whatis`        | `cosine-ratio.svg`        | Three stages: 3-4-5 triangle labeled, cosine formula cos(A)=b/c, result 4/5=0.8, the adjacent side is 80 percent |
| `cos-applications`  | `cosine-applications.svg` | Four panels: ladder ratio 0.6, rafter 0.8, surveying 0.8, crane boom 0.6, each with a labeled right triangle |
| `cos-angle`         | `cosine-steps.svg`        | Three triangles at 30, 45, 60 degrees with cosine values 0.8660, 0.7071, 0.5; cosine falls as angle grows |

English captions:
- `cos-triangle`: "Angle A sits at the bottom-left; cosine uses the adjacent side b and the hypotenuse c, not the opposite side a."
- `cos-whatis`: "Three stages: identify the sides, apply cos(A) = b/c, and divide. The adjacent side is 80 percent of the hypotenuse."
- `cos-applications`: "Four practical calculations: ladder, roof rafter, surveying, and crane boom, each with its triangle, formula, and ratio."
- `cos-angle`: "As angle A grows, the adjacent side becomes a smaller share of the hypotenuse, so cos(A) falls."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/sine-ratio-calculator/`
2. `/tangent-ratio-calculator/`
3. `/secant-ratio-calculator/`
4. `/cosecant-ratio-calculator/`
5. `/right-triangle-angle-calculator/`
6. `/right-triangle-side-calculator/`

## Translator rules

- Keep all section ids, variable symbols (`A`, `B`, `a`, `b`, `c`), numbers, and degree
  values exactly as in English; translate only surrounding prose.
- Math markup `[[...]]` (inline) and `[[[...]]]` (display) is passed through KaTeX:
  keep it intact, e.g. `[[\\cos(A)=b/c]]`.
- Internal links written as `href="/..."` are auto-prefixed with the locale; never
  translate URLs.
- Alt texts must stay under 125 characters.
- No em dashes anywhere; no decorative unicode (§, ✦, ★).
- No AI-tell words (delve, moreover, furthermore, seamless, unlock, elevate, tapestry,
  landscape as metaphor, embark, nestled, cutting-edge, robust, vibrant, crucial,
  pivotal, testament, weapon as metaphor, "in today's…").
- German uses formal "Sie"; French uses formal "vous".
- Match the English section order and keep all 12 FAQs.
