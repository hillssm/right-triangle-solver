import json
import os

locales = ['hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv', 'zh']

output_data = {}

for lang in locales:
    json_path = f"scratch/trans_{lang}.json"
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            # Fix slugs and URLs
            for page_key, page_data in data.items():
                page_data['slug'] = page_key
                page_data['url'] = f"/{lang}/{page_key}/"
            output_data[lang] = data
    else:
        print(f"Warning: Missing {json_path}")

ts_content = f"""// Generated localized copy for focused trig ratio calculator pages.
// Partial translations fallback to English in the getter.

export const FOCUSED_TRIG_RATIO_CALCULATOR_TRANSLATIONS: any = {json.dumps(output_data, ensure_ascii=False, indent=2)};

import type {{ FocusedTrigRatioCalculatorPage }} from './focusedTrigRatioCalculatorPages';
import type {{ Locale }} from 'theme/i18n/locales';

export function localizeFocusedTrigRatioCalculatorPage(
  page: FocusedTrigRatioCalculatorPage,
  locale: Locale
): FocusedTrigRatioCalculatorPage {{
  const translations: any = FOCUSED_TRIG_RATIO_CALCULATOR_TRANSLATIONS;
  const translation = translations[locale]?.[page.slug];
  if (!translation) return page;
  return {{ ...page, ...translation }};
}}


export const EN_FOCUSED_TRIG_RATIO_UI = {{
  home: 'Home',
  parentPageLabel: 'Right Triangle Trig Ratios Calculator',
  badge: 'Focused Calculator',
  formula: 'Formula',
  triangleDiagram: 'Triangle Diagram',
  howToUse: 'How to Use',
  stepByStepExample: 'Step-by-Step Example',
  whatResultMeans: 'What the Result Means',
  whenToUse: 'When to Use This Ratio',
  commonMistakes: 'Common Mistakes',
  faqHeading: 'Frequently Asked Questions',
  relatedCalculators: 'Related Trig Calculators',
  openTool: 'Open Tool',
  ratioHighlight: 'Ratio Highlight',
  numerator: 'Numerator',
  denominator: 'Denominator',
  sideKey: 'Side Key',
  usedIn: (ratio: string) => `Used in ${{ratio}}`,
  notUsedIn: (ratio: string) => `Not used in ${{ratio}}`,
  sideRoles: {{
    a: {{
      label: 'opposite side a',
      role: 'Opposite',
      description: 'height across from angle A',
      short: 'opp'
    }},
    b: {{
      label: 'adjacent side b',
      role: 'Adjacent',
      description: 'base next to angle A',
      short: 'adj'
    }},
    c: {{
      label: 'hypotenuse c',
      role: 'Hypotenuse',
      description: 'slanted side',
      short: 'hyp'
    }}
  }},
  runtime: {{
    entered: 'Entered',
    computed: 'Computed',
    solvedFrom: 'Solved from',
    statusDefault: 'Enter two values to solve',
    solutionStepsDefault: 'Solution steps will appear here.',
    fixErrors: 'Please fix the errors above.',
    solveFirst: 'Please solve the triangle first.',
    copySuccess: 'Results copied to clipboard.',
    resultsTitle: 'Right Triangle Trig Ratio Results',
    formulaLabel: 'Formula',
    substitutionLabel: 'Substitution',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    detailLabel: 'Detail',
    sideA: 'Side a',
    sideB: 'Side b',
    hypotenuseC: 'Hypotenuse c',
    angleA: 'Angle A',
    angleB: 'Angle B',
    area: 'Area',
    perimeter: 'Perimeter',
    altitude: 'Altitude h',
    semiperimeter: 'Semiperimeter s',
    inradius: 'Inradius r',
    circumradius: 'Circumradius R',
    segmentP: 'Segment p',
    segmentQ: 'Segment q'
  }}
}};

export function getFocusedTrigRatioUi(locale: Locale) {{
  // We can just return English for now
  return EN_FOCUSED_TRIG_RATIO_UI;
}}

export function getFocusedTrigRatioRuntimeTranslations(page: any, locale: Locale) {{
  const ui = getFocusedTrigRatioUi(locale);
  const calculationSteps: Record<string, {{ title: string; description: string }}> = {{}};
  
  if (page.slug === 'sine-ratio-calculator') {{
    calculationSteps.ratioSine = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }} else if (page.slug === 'cosine-ratio-calculator') {{
    calculationSteps.ratioCosine = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }} else if (page.slug === 'tangent-ratio-calculator') {{
    calculationSteps.ratioTangent = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }} else if (page.slug === 'cotangent-ratio-calculator') {{
    calculationSteps.ratioCotangent = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }} else if (page.slug === 'secant-ratio-calculator') {{
    calculationSteps.ratioSecant = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }} else if (page.slug === 'cosecant-ratio-calculator') {{
    calculationSteps.ratioCosecant = {{ title: page.calculator.heading, description: page.formula.paragraphs[0] || '' }};
  }}

  return {{ ...ui.runtime, calculationSteps }};
}}
"""

out_path = 'src/data/focusedTrigRatioCalculatorTranslations.ts'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated translations file at {{out_path}}")
