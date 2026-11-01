# Trig Ratios Guide — Translation Schema (Page 15 of 45)

Translators produce the 18-locale content for `theme/components/TrigRatiosGuideLocalized.astro`
(the English page is the hardcoded `theme/components/TrigRatiosGuide.astro`).

## Deliverables

- `src/data/trigRatiosGuideTranslations.batch1.ts` → `export const TRIG_RATIOS_TRANSLATIONS_BATCH1 = { hi, es, ru, fr, de, it }`
- `src/data/trigRatiosGuideTranslations.batch2.ts` → `export const TRIG_RATIOS_TRANSLATIONS_BATCH2 = { pt, bn, ja, ko, ms, pl }`
- `src/data/trigRatiosGuideTranslations.batch3.ts` → `export const TRIG_RATIOS_TRANSLATIONS_BATCH3 = { id, ar, bg, tr, sv, zh }`
- `src/data/trigRatiosGuideTranslations.ts` → merges the three batches:
  `export const TRIG_RATIOS_GUIDE_TRANSLATIONS = { ...TRIG_RATIOS_TRANSLATIONS_BATCH1, ...TRIG_RATIOS_TRANSLATIONS_BATCH2, ...TRIG_RATIOS_TRANSLATIONS_BATCH3 };`

Each batch value maps locale code → G, where G is one locale's translation object.

## Schema of G

```ts
G = {
  tocHeading: string,              // translated "In This Guide"
  tocItems: { [id]: string },      // 17 labels, one per id in tocOrder below
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
  relatedItems?: string[],         // 9 translated calculator names, fixed URL order below
}
```

Empty arrays are allowed where a section has none.

## Section ids (DO NOT translate these)

Content sections (15): `sec-intro`, `sec-triangle`, `sec-ratios`, `sec-six`,
`sec-choose`, `sec-howto`, `sec-foundations`, `sec-applications`, `sec-relate`,
`sec-angles`, `sec-missing-side`, `sec-inverse`, `sec-mistakes`, `sec-verify`,
`sec-conclusion`.

TOC order (17 = 15 sections + related + faq): the 15 above with `sec-related` and
`sec-faq` inserted after `sec-verify` and before `sec-conclusion`.

Section content shapes:
- `sec-intro`: blocks only (3 paragraphs)
- `sec-triangle`: blocks (1 intro paragraph, 5 h3s, 5 paragraphs)
- `sec-ratios`: blocks (1 intro paragraph, 3 h3s, 3 paragraphs)
- `sec-six`: blocks (1 intro, 6 h3s, 6 paragraphs, 1 closing paragraph "All six calculations refer to the same reference angle A.") + `table` (4 columns: Ratio | Formula | Side relationship | 3-4-5 example; 6 rows)
- `sec-choose`: blocks (1 intro paragraph, 6 h3s, 6 paragraphs) + `table` (3 columns: Known sides | Direct ratio | Reciprocal ratio; 3 rows)
- `sec-howto`: blocks (1 intro paragraph, 1 paragraph "Correct side identification matters...") + `steps` (12 numbered steps) + `closingParagraphs` (2 paragraphs: walkthrough intro "Given opposite side 3..." and "The ratios are unitless..." closing; the 6-item walkthrough list itself: fold into ONE closing paragraph or 6 short numbered steps appended as a second steps list via `tables`? NO. Put the 6 walkthrough items as `steps` in a nested way is NOT supported. APPROVED approach: append the 6 walkthrough items as plain paragraphs inside `closingParagraphs`, each starting with its mode name in bold markers is not supported; write them as six separate paragraphs "1. Sine mode: ..." through "6. Cosecant mode: ...".)
- `sec-foundations`: blocks (1 intro, 4 h3s "Example 1: ..." through "Example 4: ...", 4 paragraphs)
- `sec-applications`: blocks (1 intro, 12 h3s "Example 5: ..." through "Example 16: ...", 12 paragraphs, 1 h3 "Practical Example Comparison", 1 paragraph-less intro) + `table` (5 columns: Situation | Known measurements | Primary ratio | Value | Interpretation; 12 rows)
- `sec-relate`: blocks (1 intro, 5 h3s, 5 paragraphs)
- `sec-angles`: blocks (2 paragraphs) + `table` (4 columns: Angle | Sine | Cosine | Tangent; 3 rows) + 1 closing paragraph
- `sec-missing-side`: blocks (1 intro, 3 h3s, 3 paragraphs)
- `sec-inverse`: blocks (1 intro, 3 h3s, 3 paragraphs, 1 closing paragraph)
- `sec-mistakes`: blocks (20 h3s + 20 paragraphs, then 1 h3 "Wrong Versus Correct: A Concrete Example" + 1 paragraph)
- `sec-verify`: blocks (1 intro, 4 h3s, 4 paragraphs)
- `sec-conclusion`: blocks (h2 as section title, 1 paragraph)

Example headings: translate to "Example N: <translated title>" format, never em dashes.

## Images (fixed per section; translate only alt + caption)

| Section id          | File (in `/images/trig-ratios/`) | English alt (≤125 chars) |
|---|---|---|
| `sec-triangle`      | `trig-ratios-anatomy.svg`      | Right triangle with angle A bottom-left highlighted, gold opposite side a, blue adjacent side b, gray hypotenuse c, right angle at B |
| `sec-six`           | `trig-ratios-six.svg`          | 3-4-5 triangle with six panels showing sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667 |
| `sec-applications`  | `trig-ratios-practical.svg`    | Four panels: roof pitch 0.75, ladder sin 0.8, surveying sin 0.6, ramp tan 0.075 with labeled triangles |
| `sec-angles`        | `trig-ratios-flowchart.svg`    | Flowchart: pick sine or cosecant for opposite and hypotenuse, cosine or secant for adjacent and hypotenuse, tangent or cotangent for the two legs |

English captions:
- `sec-triangle`: "Anatomy of a right triangle: A is the reference angle, B is the 90-degree angle, and opposite and adjacent are defined relative to A."
- `sec-six`: "One 3-4-5 triangle produces all six ratios: three primary ratios and their three reciprocals."
- `sec-applications`: "Four real-world problems: roof pitch, ladder, surveying, and ramp, each with its triangle and key ratio."
- `sec-angles`: "Choose your calculator mode from the side pair you know: each pair gives a direct ratio and its reciprocal."

## Related calculator URLs (fixed order; renderer locale-prefixes them)

1. `/sine-ratio-calculator/` — Sine Ratio Calculator
2. `/cosine-ratio-calculator/` — Cosine Ratio Calculator
3. `/tangent-ratio-calculator/` — Tangent Ratio Calculator
4. `/cotangent-ratio-calculator/` — Cotangent Ratio Calculator
5. `/secant-ratio-calculator/` — Secant Ratio Calculator
6. `/cosecant-ratio-calculator/` — Cosecant Ratio Calculator
7. `/right-triangle-angle-calculator/` — Right Triangle Angle Calculator
8. `/right-triangle-side-from-angle-calculator/` — Right Triangle Side Calculator Using Angle
9. `/special-right-triangle-calculator/` — Special Right Triangle Calculator

Provide `relatedItems` as 9 translated names in this fixed order.

## Calculator button labels (GROUND TRUTH, verified from the calculator UI)

Button text = localized "Calculate" word + output label (sin(A), cos(A), tan(A), cot(A), sec(A), csc(A)).
Output labels are NOT translated; only the Calculate/Reset words are.

| Locale | Calculate | Reset | Sine button example |
|---|---|---|---|
| hi | गणना करें | रीसेट | गणना करें sin(A) |
| es | Calcular | Restablecer | Calcular sin(A) |
| ru | Рассчитать | Сброс | Рассчитать sin(A) |
| fr | Calculer | Réinitialiser | Calculer sin(A) |
| de | Berechnen | Zurücksetzen | Berechnen sin(A) |
| it | Calcola | Reimposta | Calcola sin(A) |
| pt | Calcular | Redefinir | Calcular sin(A) |
| bn | হিসাব করুন | রিসেট করুন | হিসাব করুন sin(A) |
| ja | 計算する | リセット | 計算する sin(A) |
| ko | 계산하기 | 초기화 | 계산하기 sin(A) |
| ms | Kira | Tetapkan semula | Kira sin(A) |
| pl | Oblicz | Resetuj | Oblicz sin(A) |
| id | Hitung | Atur Ulang | Hitung sin(A) |
| ar | احسب | إعادة تعيين | احسب sin(A) |
| bg | Изчислете | Нулиране | Изчислете sin(A) |
| tr | Hesapla | Sıfırla | Hesapla sin(A) |
| sv | Beräkna | Återställ | Beräkna sin(A) |
| zh | 计算 | 重置 | 计算 sin(A) |

Input field labels stay English on all locales ("Opposite a", "Adjacent b", "Hypotenuse c").
Reference these exact localized button labels in the translated `sec-howto` steps.

## KaTeX / escaping rules (critical)

- Math stays inside `[[...]]` (inline) and `[[[...]]]` (display) markers. Translate only the
  surrounding prose; keep variable symbols (A, B, C, a, b, c), function names
  (sin, cos, tan, cot, sec, csc), and formulas byte-identical to the English.
- In the `.ts` source, strings are double-quoted. Write TWO backslash characters for each
  KaTeX backslash: `"[[\\sin(A)=a/c]]"`, `"[[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]"`.
  (In the file you write `\\sin`; it becomes `\sin` at runtime. Never write a single `\t`,
  `\n`, `\s` etc. in the source: always double the backslash.)
- Validate every expression: balanced braces, no stray brackets.
- Escape embedded double quotes as `\"`. Never use em dashes or decorative unicode (§, ✦, ★).
- Degree markup `[[30^\\circ]]`, approximations `[[\\approx]]`, fractions `[[\\frac{a}{b}]]`
  follow the same doubling rule.

## Quality rules

- Native-quality prose, correct mathematical terminology per locale; Arabic is RTL
  (the renderer handles direction; just translate naturally).
- Follow the locked standard in `TRANSLATION_PROMPT.md` (2026-10-30).
- No em dashes anywhere. No AI-tell words in English-adjacent strings.
