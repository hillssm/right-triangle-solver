import fs from 'fs';
import { FOCUSED_TRIG_RATIO_CALCULATOR_PAGES } from '../src/data/focusedTrigRatioCalculatorPages';

const locales = ['hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv', 'zh'];

const outputData: Record<string, any> = {};

for (const lang of locales) {
    outputData[lang] = {};
    const transPath = `./scratch/trans_${lang}.json`;
    if (!fs.existsSync(transPath)) continue;
    
    const transData = JSON.parse(fs.readFileSync(transPath, 'utf8'));
    
    for (const page of FOCUSED_TRIG_RATIO_CALCULATOR_PAGES) {
        const tr = transData[page.slug];
        if (!tr) continue;
        
        outputData[lang][page.slug] = {
            slug: page.slug,
            url: `/${lang}${page.url}`,
            h1: tr.h1,
            metaTitle: tr.metaTitle,
            metaDescription: tr.metaDescription,
            introHeading: tr.introHeading,
            intro: tr.intro,
            headerSummary: tr.headerSummary,
            calculatorNote: tr.calculatorNote,
            diagramExplanation: tr.diagramExplanation,
            howToSteps: tr.howToSteps,
            whatResultMeans: tr.whatResultMeans,
            whenToUse: {
                intro: tr.whenToUse_intro || page.whenToUse.intro,
                items: tr.whenToUse_items || page.whenToUse.items,
            },
            commonMistakes: {
                intro: tr.commonMistakes_intro || page.commonMistakes.intro,
                items: tr.commonMistakes_items || page.commonMistakes.items,
            },
            calculator: {
                heading: tr.calculator_heading || page.calculator.heading,
                outputLabel: tr.calculator_outputLabel || page.calculator.outputLabel,
                fields: page.calculator.fields.map((f, i) => ({
                    ...f,
                    label: tr.calculator_fields?.[i] || f.label
                }))
            },
            formula: {
                display: tr.formula_display || page.formula.display,
                paragraphs: tr.formula_paragraphs || page.formula.paragraphs,
            },
            example: {
                intro: tr.example_intro || page.example.intro,
                steps: tr.example_steps || page.example.steps,
                conclusion: tr.example_conclusion || page.example.conclusion,
            },
            relatedLinks: page.relatedLinks.map((l, i) => ({
                ...l,
                label: tr.relatedLinks?.[i] || l.label
            })),
            faqs: page.faqs.map((f, i) => ({
                question: tr.faqs?.[i]?.question || f.question,
                answer: tr.faqs?.[i]?.answer || f.answer
            }))
        };
    }
}

const tsContent = `// Generated localized copy for focused trig ratio calculator pages.
// Partial translations fallback to English in the getter.

export const FOCUSED_TRIG_RATIO_CALCULATOR_TRANSLATIONS: any = ${JSON.stringify(outputData, null, 2)};

import type { FocusedTrigRatioCalculatorPage } from './focusedTrigRatioCalculatorPages';
import type { Locale } from '../theme/i18n/locales';

export function localizeFocusedTrigRatioCalculatorPage(
  page: FocusedTrigRatioCalculatorPage,
  locale: Locale
): FocusedTrigRatioCalculatorPage {
  const translations: any = FOCUSED_TRIG_RATIO_CALCULATOR_TRANSLATIONS;
  const translation = translations[locale]?.[page.slug];
  if (!translation) return page;
  return { ...page, ...translation };
}

export const EN_FOCUSED_TRIG_RATIO_UI = {
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
  usedIn: (ratio: string) => \`Used in \${ratio}\`,
  notUsedIn: (ratio: string) => \`Not used in \${ratio}\`,
  sideRoles: {
    a: {
      label: 'opposite side a',
      role: 'Opposite',
      description: 'height across from angle A',
      short: 'opp'
    },
    b: {
      label: 'adjacent side b',
      role: 'Adjacent',
      description: 'base next to angle A',
      short: 'adj'
    },
    c: {
      label: 'hypotenuse c',
      role: 'Hypotenuse',
      description: 'slanted side',
      short: 'hyp'
    }
  },
  runtime: {
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
  }
};

export function getFocusedTrigRatioUi(locale: Locale) {
  return EN_FOCUSED_TRIG_RATIO_UI;
}

export function getFocusedTrigRatioRuntimeTranslations(page: any, locale: Locale) {
  const ui = getFocusedTrigRatioUi(locale);
  const calculationSteps: Record<string, { title: string; description: string }> = {};
  
  if (page.slug === 'sine-ratio-calculator') {
    calculationSteps.ratioSine = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cosine-ratio-calculator') {
    calculationSteps.ratioCosine = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'tangent-ratio-calculator') {
    calculationSteps.ratioTangent = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cotangent-ratio-calculator') {
    calculationSteps.ratioCotangent = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'secant-ratio-calculator') {
    calculationSteps.ratioSecant = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  } else if (page.slug === 'cosecant-ratio-calculator') {
    calculationSteps.ratioCosecant = { title: page.calculator.heading, description: page.formula.paragraphs[0] || '' };
  }

  return { ...ui.runtime, calculationSteps };
}
`;

fs.writeFileSync('./src/data/focusedTrigRatioCalculatorTranslations.ts', tsContent);
console.log('Successfully generated correct translation file.');
