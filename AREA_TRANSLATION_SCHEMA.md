# Area Guide — Translation Schema (Page 16 of 45)

Translators produce the 18-locale content for `theme/components/AreaGuideLocalized.astro`
(the English page is the hardcoded `theme/components/AreaGuide.astro`).

## Deliverables

Nine 2-locale partial files (split because a single 6-locale worker exceeds its output token budget):

- `src/data/areaGuideTranslations.batch1a.ts` → `export const AREA_TRANSLATIONS_BATCH1A = { hi, es }`
- `src/data/areaGuideTranslations.batch1b.ts` → `export const AREA_TRANSLATIONS_BATCH1B = { ru, fr }`
- `src/data/areaGuideTranslations.batch1c.ts` → `export const AREA_TRANSLATIONS_BATCH1C = { de, it }`
- `src/data/areaGuideTranslations.batch2a.ts` → `export const AREA_TRANSLATIONS_BATCH2A = { pt, bn }`
- `src/data/areaGuideTranslations.batch2b.ts` → `export const AREA_TRANSLATIONS_BATCH2B = { ja, ko }`
- `src/data/areaGuideTranslations.batch2c.ts` → `export const AREA_TRANSLATIONS_BATCH2C = { ms, pl }`
- `src/data/areaGuideTranslations.batch3a.ts` → `export const AREA_TRANSLATIONS_BATCH3A = { id, ar }`
- `src/data/areaGuideTranslations.batch3b.ts` → `export const AREA_TRANSLATIONS_BATCH3B = { bg, tr }`
- `src/data/areaGuideTranslations.batch3c.ts` → `export const AREA_TRANSLATIONS_BATCH3C = { sv, zh }`

Three batch indexes (written by the coordinator, not translators):

- `src/data/areaGuideTranslations.batch1.ts` → merges 1a+1b+1c → `AREA_TRANSLATIONS_BATCH1`
- `src/data/areaGuideTranslations.batch2.ts` → merges 2a+2b+2c → `AREA_TRANSLATIONS_BATCH2`
- `src/data/areaGuideTranslations.batch3.ts` → merges 3a+3b+3c → `AREA_TRANSLATIONS_BATCH3`

Final merger (written by the coordinator):

- `src/data/areaGuideTranslations.ts` → `export const AREA_GUIDE_TRANSLATIONS = { ...BATCH1, ...BATCH2, ...BATCH3 };`

Each partial value maps locale code → G, where G is one locale's translation object.

## Schema of G

```ts
G = {
  tocHeading: string,              // translated "In This Guide"
  tocItems: { [id]: string },      // 16 labels, one per id in tocOrder below
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

Content sections (14): `sec-intro`, `sec-triangle`, `sec-legs`, `sec-angle-a`,
`sec-angle-b`, `sec-inradius`, `sec-altitude`, `sec-choose`, `sec-howto`,
`sec-applications`, `sec-verify`, `sec-mistakes`, `sec-validate`, `sec-conclusion`.

TOC order (16 = 14 sections + related + faq): the 14 above with `sec-related` and
`sec-faq` inserted after `sec-validate` and before `sec-conclusion`.

Section content shapes:
- `sec-intro`: blocks only (3 paragraphs)
- `sec-triangle`: blocks (1 intro paragraph, 4 h3s, 4 paragraphs: "What Is a Right Triangle?", "What Does Area Mean?", "Why Is the Area Divided by Two?", "Why Can the Same Triangle Have Five Area Formulas?") + imgAlt + figcaption
- `sec-legs`: blocks (1 intro, 6 h3s, 6 paragraphs)
- `sec-angle-a`: blocks (1 intro, 4 h3s, 4 paragraphs)
- `sec-angle-b`: blocks (1 intro, 4 h3s, 4 paragraphs)
- `sec-inradius`: blocks (1 intro, 5 h3s, 5 paragraphs)
- `sec-altitude`: blocks (1 intro, 4 h3s, 4 paragraphs)
- `sec-choose`: blocks (1 intro paragraph, 4 h3s, 4 paragraphs) + `table` (3 columns: Known measurements | Recommended method | Formula; 5 rows) + imgAlt + figcaption
- `sec-howto`: blocks (1 intro paragraph, 1 paragraph "Follow these steps..." is NOT present; actual: 1 intro paragraph "Follow these steps for any of the five modes...", then 1 h3 "Complete Walkthrough: All Five Modes on a 3-4-5 Triangle", then 1 paragraph "Given a=3...") + `steps` (13 numbered steps, keep <strong> tags) + `closingParagraphs` (6 walkthrough paragraphs "1. Area from Legs: ..." through "5. Area Variation (Altitude): ...", then 1 closing paragraph "Each mode uses a different set...")
- `sec-applications`: blocks (1 intro, 12 h3s "Example 1: ..." through "Example 12: ...", 12 paragraphs, 1 h3 "Practical Example Comparison") + `table` (6 columns: Situation | Known values | Calculator mode | Formula | Final area | Interpretation; 12 rows) + imgAlt + figcaption
- `sec-verify`: blocks (1 intro paragraph "One 3-4-5 triangle...", 1 paragraph with the five methods in <strong> labels, 1 closing paragraph "These are five mathematical routes...") + imgAlt + figcaption
- `sec-mistakes`: blocks (1 intro, 18 h3s "1. ..." through "18. ...", 18 paragraphs, then 1 h3 "Wrong Versus Correct: A Concrete Example" + 1 paragraph)
- `sec-validate`: blocks (1 intro, 6 h3s "Check 1: ..." through "Check 6: ...", 6 paragraphs)
- `sec-conclusion`: blocks (h2 as section title, 1 paragraph)

Example headings: translate to "Example N: <translated title>" format, never em dashes.
Mistake headings: translate to "N. <translated title>" format (keep the numbering).
Validation check headings: translate to "Check N: <translated title>".

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/area/`) | English alt (≤125 chars) |
|---|---|---|
| `sec-triangle`      | `area-anatomy.svg`      | Right triangle anatomy: legs a and b, hypotenuse c, right angle C, altitude h to the hypotenuse, formula K = ab/2 |
| `sec-choose`        | `area-formulas.svg`     | Five panels showing the area formulas K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs, and K=ch/2 |
| `sec-applications`  | `area-practical.svg`    | Four panels: garden 24 sq m, roof gable 24 sq m, truss 30 sq m, and panel 24 sq m, each with its triangle |
| `sec-verify`        | `area-five-methods.svg` | 3-4-5 triangle with five panels: legs, angle A, angle B, inradius-semiperimeter, altitude, all giving area 6 |

English captions:
- `sec-triangle`: "Anatomy of a right triangle: C is the right angle, a and b are the legs, c is the hypotenuse, and h is the altitude to the hypotenuse."
- `sec-choose`: "The five area formulas and the measurements each one needs."
- `sec-applications`: "Four real-world calculations: garden, roof gable, truss, and panel, each with its triangle and final area."
- `sec-verify`: "Different inputs, different formulas, the same triangle area."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/right-triangle-area-from-legs-calculator/` — Right Triangle Area From Legs Calculator
2. `/right-triangle-area-from-angle-calculator/` — Right Triangle Area From Angle Calculator
3. `/right-triangle-area-from-semiperimeter-calculator/` — Right Triangle Area From Semiperimeter Calculator
4. `/right-triangle-area-from-altitude-calculator/` — Right Triangle Area From Altitude Calculator
5. `/right-triangle-perimeter-calculator/` — Right Triangle Perimeter and Semiperimeter Calculator
6. `/right-triangle-radius-calculator/` — Right Triangle Inradius and Circumradius Calculator
7. `/right-triangle-side-calculator/` — Right Triangle Side Calculator

Provide `relatedItems` as 7 translated names in this fixed order.

## Calculator button labels (GROUND TRUTH, same translation system as Page 15)

Button text = localized "Calculate" word + output label "Area".
The Calculate/Reset words below are verified from the calculator UI translation system.

| Locale | Calculate | Reset | Area button example |
|---|---|---|---|
| hi | गणना करें | रीसेट | गणना करें Area |
| es | Calcular | Restablecer | Calcular Area |
| ru | Рассчитать | Сброс | Рассчитать Area |
| fr | Calculer | Réinitialiser | Calculer Area |
| de | Berechnen | Zurücksetzen | Berechnen Area |
| it | Calcola | Reimposta | Calcola Area |
| pt | Calcular | Redefinir | Calcular Area |
| bn | হিসাব করুন | রিসেট করুন | হিসাব করুন Area |
| ja | 計算する | リセット | 計算する Area |
| ko | 계산하기 | 초기화 | 계산하기 Area |
| ms | Kira | Tetapkan semula | Kira Area |
| pl | Oblicz | Resetuj | Oblicz Area |
| id | Hitung | Atur Ulang | Hitung Area |
| ar | احسب | إعادة تعيين | احسب Area |
| bg | Изчислете | Нулиране | Изчислете Area |
| tr | Hesapla | Sıfırla | Hesapla Area |
| sv | Beräkna | Återställ | Beräkna Area |
| zh | 计算 | 重置 | 计算 Area |

Input field labels stay English on all locales ("Leg a", "Leg b", "Hypotenuse c",
"Angle A", "Angle B", "Inradius r", "Semiperimeter s", "Altitude h").
Reference these exact labels and button forms in the translated `sec-howto` steps.

## KaTeX / escaping rules (critical)

- Math stays inside `[[...]]` (inline) and `[[[...]]]` (display) markers. Translate only the
  surrounding prose; keep variable symbols (A, B, C, a, b, c, h, r, s, K), function names
  (sin), and formulas byte-identical to the English.
- In the `.ts` source, strings are double-quoted. Write TWO backslash characters for each
  KaTeX backslash: `"[[K=ab/2]]"`, `"[[[\\boxed{K=\\frac{ab}{2}}]]]"`.
  (In the file you write `\\sin`; it becomes `\sin` at runtime. Never write a single `\t`,
  `\n`, `\s` etc. in the source: always double the backslash.)
- Validate every expression: balanced braces, no stray brackets.
- Escape embedded double quotes as `\"`. Never use em dashes or decorative unicode (§, ✦, ★).
- Degree markup `[[36.87^\\circ]]`, approximations `[[\\approx]]`, fractions `[[\\frac{a}{b}]]`
  follow the same doubling rule.
- Keep `<strong>...</strong>` HTML tags where the English has them (steps, walkthrough items,
  verification methods); translate the text inside the tags.

## Quality rules

- Native-quality prose, correct mathematical terminology per locale; Arabic is RTL
  (the renderer handles direction; just translate naturally).
- Follow the locked standard in `TRANSLATION_PROMPT.md` (2026-10-30).
- No em dashes anywhere. No AI-tell words in English-adjacent strings.
- Translate ALL content: headings, TOC labels, paragraphs, table cells, image alts,
  figcaptions, FAQ questions and answers. Formulas and variable symbols stay in Latin notation.
