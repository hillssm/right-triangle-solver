import type {
  FocusedTriplesCalculatorMode,
  FocusedTriplesCalculatorPage,
  FocusedTriplesCalculatorUi
} from './focusedTriplesCalculatorPages';
import type { Locale } from 'theme/i18n/locales';
import { TRIPLES_GAP_FILLS } from 'src/data/focusedTriplesGapTranslations';

function setGapPath(target: unknown, path: string, value: unknown, mode: 'fill' | 'set'): void {
  const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let cur = target as Record<string, unknown>;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (cur[key] === undefined || cur[key] === null) {
      cur[key] = /^\d+$/.test(parts[i + 1]) ? [] : {};
    }
    cur = cur[key] as Record<string, unknown>;
  }
  const last = parts[parts.length - 1];
  if (mode === 'set' || cur[last] === undefined) {
    cur[last] = value;
  }
}

function applyTriplesGapFills(
  page: FocusedTriplesCalculatorPage,
  locale: Locale
): FocusedTriplesCalculatorPage {
  const fills = TRIPLES_GAP_FILLS[locale]?.[page.slug];
  if (!fills || fills.length === 0) {
    return page;
  }
  const next = structuredClone(page) as FocusedTriplesCalculatorPage;
  for (const fill of fills) {
    setGapPath(next, fill.path, structuredClone(fill.value), fill.mode);
  }
  return next;
}

type TriplesPageKey = 'pythagorean' | 'triangle345' | 'triangle51213' | 'similar';
type TriplesPageSlug =
  | 'pythagorean-triples-calculator'
  | '3-4-5-triangle-calculator'
  | '5-12-13-triangle-calculator'
  | 'similar-right-triangles-calculator';

export type FocusedTriplesHomeUi = {
  coreHeading: string;
  supportHeading: string;
  viewAllPythagoreanTriples: string;
  chartRows: {
    triangle345: string;
    triangle51213: string;
    triangle81517: string;
    triangle91215: string;
  };
  tools: Array<{
    title: string;
    href: string;
    description: string;
  }>;
};

type CommonText = {
  openTool: string;
  calculate: string;
  reset: string;
  result: string;
  formula: string;
  calculatorMode: string;
  diagramKey: string;
  diagramScaleFactor: string;
  faqDescription: string;
  example: string;
  sideA: string;
  sideB: string;
  hypotenuseC: string;
  scaleFactorK: string;
  area: string;
  perimeter: string;
  originalSide: string;
  similarSide: string;
  scaleFactorResult: string;
  checkTriple: string;
  generateTriple: string;
  scale345: string;
  scale51213: string;
  findScaleFactor: string;
  findSimilarSide: string;
  findOriginalSide: string;
  validTriple: string;
  notTriple: string;
  positiveValues: string;
  hypotenuseLongest: string;
  positiveIntegers: string;
  mGreaterThanN: string;
  positiveScaleFactor: string;
  originalAndScalePositive: string;
  similarAndScalePositive: string;
  unableToCalculate: string;
  knownValues: string;
  finds: string;
  mainFormula: string;
  bestFor: string;
  rightTriangleSideCalculator: string;
  pythagoreanTheoremCalculator: string;
  specialRightTriangleCalculator: string;
  rightTriangleAreaCalculator: string;
  rightTriangleAngleCalculator: string;
  rightTriangleProjectionCalculator: string;
};

type LocaleText = {
  titles: Record<TriplesPageKey, string>;
  introLines: Record<TriplesPageKey, string>;
  common: CommonText;
  headings: {
    formula: string;
    diagram: string;
    howTo: string;
    examples: string;
    result: string;
    sideRatio: string;
    useCases: string;
    commonMistakes: string;
    related: string;
    faqs: string;
  };
  genericHeadings?: FocusedTriplesCalculatorUi['sectionHeadings'];
  templates: {
    metaTitle: string;
    introDetail: string;
    calculatorNote: string;
    summaryHeading: string;
    summaryIntro: string;
    formulaPythagorean: string;
    formulaScale: string;
    formulaSimilar: string;
    diagramIntro: string;
    diagramCaption: string;
    resultPythagorean: string;
    resultScale: string;
    resultSimilar: string;
    ratioPythagorean: string;
    ratioScale: string;
    ratioSimilar: string;
    faqPurposeQuestion: string;
    faqPurposeAnswer: string;
    faqFormulaQuestion: string;
    faqFormulaAnswer: string;
    faqValuesQuestion: string;
    faqValuesAnswer: string;
  };
  howTo: {
    pythagorean: string[];
    scale: string[];
    similar: string[];
  };
  diagramNotes: {
    pythagorean: string[];
    scale345: string[];
    scale51213: string[];
    similar: string[];
  };
  useCases: {
    pythagorean: string[];
    scale: string[];
    similar: string[];
  };
  mistakes: {
    pythagorean: string[];
    scale: string[];
    similar: string[];
  };
  home: {
    coreHeading: string;
    supportHeading: string;
    viewAllPythagoreanTriples: string;
    chartRows: FocusedTriplesHomeUi['chartRows'];
  };
};

const SLUG_TO_KEY: Record<TriplesPageSlug, TriplesPageKey> = {
  'pythagorean-triples-calculator': 'pythagorean',
  '3-4-5-triangle-calculator': 'triangle345',
  '5-12-13-triangle-calculator': 'triangle51213',
  'similar-right-triangles-calculator': 'similar'
};

const PRIMARY_FORMULA: Record<TriplesPageKey, string> = {
  pythagorean: 'a^2 + b^2 = c^2',
  triangle345: 'a = 3k, b = 4k, c = 5k',
  triangle51213: 'a = 5k, b = 12k, c = 13k',
  similar: 'k = similar side / original side'
};

const HOME_TOOL_HREFS: Record<TriplesPageKey, string> = {
  pythagorean: '/pythagorean-triples-calculator/',
  triangle345: '/3-4-5-triangle-calculator/',
  triangle51213: '/5-12-13-triangle-calculator/',
  similar: '/similar-right-triangles-calculator/'
};

const fill = (text: string, values: Record<string, string>) =>
  Object.entries(values).reduce(
    (output, [key, value]) => output.split(`{${key}}`).join(value),
    text
  );

const EN_TEXT: LocaleText = {
  titles: {
    pythagorean: 'Pythagorean Triples Calculator',
    triangle345: '3 4 5 Triangle Calculator',
    triangle51213: '5 12 13 Triangle Calculator',
    similar: 'Similar Right Triangles Calculator'
  },
  introLines: {
    pythagorean: 'Check or generate whole-number right triangle triples.',
    triangle345: 'Solve the most common Pythagorean triple and scale its sides.',
    triangle51213: 'Scale a 5 12 13 right triangle and find sides, area, and perimeter.',
    similar: 'Find scale factor and missing matching sides in similar right triangles.'
  },
  common: {
    openTool: 'Open Tool',
    calculate: 'Calculate',
    reset: 'Reset',
    result: 'Result',
    formula: 'Formula',
    calculatorMode: 'Calculator Mode',
    diagramKey: 'Triangle Diagram Key',
    diagramScaleFactor: 'k = scale factor',
    faqDescription: 'Answers to the most common right-triangle solving questions.',
    example: 'Example',
    sideA: 'Side a',
    sideB: 'Side b',
    hypotenuseC: 'Hypotenuse c',
    scaleFactorK: 'Scale factor k',
    area: 'Area',
    perimeter: 'Perimeter',
    originalSide: 'Original side',
    similarSide: 'Similar side',
    scaleFactorResult: 'Scale factor k',
    checkTriple: 'Check a Pythagorean triple',
    generateTriple: 'Generate a Pythagorean triple',
    scale345: 'Scale 3-4-5 Triangle',
    scale51213: 'Scale 5-12-13 Triangle',
    findScaleFactor: 'Find scale factor',
    findSimilarSide: 'Find missing similar side',
    findOriginalSide: 'Find original side',
    validTriple: 'Valid Pythagorean triple',
    notTriple: 'Not a Pythagorean triple',
    positiveValues: 'Please enter positive values.',
    hypotenuseLongest: 'The hypotenuse c should be the longest side.',
    positiveIntegers: 'Enter positive whole numbers.',
    mGreaterThanN: 'm must be greater than n.',
    positiveScaleFactor: 'Please enter a positive scale factor.',
    originalAndScalePositive: 'Original side and k must be greater than 0.',
    similarAndScalePositive: 'Similar side and k must be greater than 0.',
    unableToCalculate: 'Unable to calculate.',
    knownValues: 'Known values',
    finds: 'Finds',
    mainFormula: 'Main formula',
    bestFor: 'Best for',
    rightTriangleSideCalculator: 'Right Triangle Side Calculator',
    pythagoreanTheoremCalculator: 'Pythagorean Theorem Calculator',
    specialRightTriangleCalculator: 'Special Right Triangle Calculator',
    rightTriangleAreaCalculator: 'Right Triangle Area Calculator',
    rightTriangleAngleCalculator: 'Right Triangle Angle Calculator',
    rightTriangleProjectionCalculator: 'Right Triangle Projection Calculator'
  },
  headings: {
    formula: '{title} Formula',
    diagram: '{title} Diagram',
    howTo: 'How to Use {title}',
    examples: '{title} Step-by-Step Examples',
    result: 'What the {title} Result Means',
    sideRatio: '{title} Side Ratio',
    useCases: 'When to Use {title}',
    commonMistakes: '{title} Common Mistakes',
    related: 'Related Calculators for {title}',
    faqs: '{title} FAQs'
  },
  genericHeadings: {
    formula: 'Formula',
    diagram: 'Triangle Diagram',
    howTo: 'How to Use This Calculator',
    examples: 'Step-by-Step Examples',
    result: 'What the Result Means',
    sideRatio: 'Side Ratio',
    useCases: 'When to Use This Calculator',
    commonMistakes: 'Common Mistakes',
    related: 'Related Calculators',
    faqs: 'FAQs'
  },
  templates: {
    metaTitle: '{title} | Right Triangle Solver',
    introDetail: '{title} keeps the side labels and variables clear so the calculation is easy to follow.',
    calculatorNote: 'Enter the known values, choose the matching mode, and calculate the result.',
    summaryHeading: 'What {title} Solves',
    summaryIntro: 'Use {title} when you need a focused right-triangle pattern calculation.',
    formulaPythagorean: 'A Pythagorean triple satisfies the equation a^2 + b^2 = c^2 with whole-number side lengths.',
    formulaScale: 'A scaled triple multiplies every side by the same scale factor k while keeping the right angle.',
    formulaSimilar: 'Similar right triangles keep equal angles, so matching sides share one scale factor k.',
    diagramIntro: 'The diagram shows the side labels used by {title}.',
    diagramCaption: 'Right triangle diagram for {title}.',
    resultPythagorean: 'The result tells whether the values form a whole-number right triangle or gives a generated triple.',
    resultScale: 'The result shows the scaled sides, area, and perimeter.',
    resultSimilar: 'The result shows the scale factor or the missing matching side.',
    ratioPythagorean: 'Every valid triple keeps a : b : c with c as the hypotenuse.',
    ratioScale: 'The side ratio stays fixed while k changes the size.',
    ratioSimilar: 'Corresponding sides keep the same ratio across both right triangles.',
    faqPurposeQuestion: 'What does {title} do?',
    faqPurposeAnswer: '{intro}',
    faqFormulaQuestion: 'Which formula does {title} use?',
    faqFormulaAnswer: 'The main formula is {formula}.',
    faqValuesQuestion: 'What values should I enter?',
    faqValuesAnswer: 'Enter positive values that match the selected calculator mode.'
  },
  howTo: {
    pythagorean: [
      'Choose check mode or generate mode.',
      'Enter positive values for the required fields.',
      'Select Calculate to view the result.',
      'Use Reset to clear the fields.'
    ],
    scale: [
      'Enter a positive scale factor k.',
      'Select Calculate to find the sides, area, and perimeter.',
      'Read the result and formula display.',
      'Use Reset for a new value.'
    ],
    similar: [
      'Choose the mode that matches the missing value.',
      'Enter the known corresponding side values or k.',
      'Select Calculate to get the result.',
      'Use Reset to start again.'
    ]
  },
  diagramNotes: {
    pythagorean: [
      'a and b are the two legs.',
      'c is the hypotenuse and the longest side.',
      'Whole-number values can form a Pythagorean triple.',
      'The right angle is between a and b.'
    ],
    scale345: [
      'The base ratio is 3 : 4 : 5.',
      'Each side is multiplied by k.',
      'c = 5k is the hypotenuse.',
      'The right angle stays unchanged.'
    ],
    scale51213: [
      'The base ratio is 5 : 12 : 13.',
      'Each side is multiplied by k.',
      'c = 13k is the hypotenuse.',
      'Area and perimeter come from the scaled sides.'
    ],
    similar: [
      'Both triangles have matching angles.',
      'Corresponding sides use the same scale factor k.',
      'k must be positive.',
      'The formulas can find k or a missing side.'
    ]
  },
  useCases: {
    pythagorean: [
      'Checking whole-number right triangle side lengths.',
      'Generating triples for practice problems.',
      'Confirming common measurement patterns.'
    ],
    scale: [
      'Scaling a known right-triangle triple.',
      'Finding area and perimeter after scaling.',
      'Checking right-angle layout measurements.'
    ],
    similar: [
      'Finding a scale factor between matching triangles.',
      'Solving missing corresponding sides.',
      'Working with maps, drawings, and proportional models.'
    ]
  },
  mistakes: {
    pythagorean: [
      'Using c as a leg instead of the hypotenuse.',
      'Entering decimal values when a whole-number triple is needed.',
      'Using m less than or equal to n.'
    ],
    scale: [
      'Using zero or a negative k.',
      'Multiplying only one side instead of all sides.',
      'Forgetting to include the hypotenuse in perimeter.'
    ],
    similar: [
      'Matching sides that do not correspond.',
      'Using a zero or negative scale factor.',
      'Dividing in the wrong direction when finding k.'
    ]
  },
  home: {
    coreHeading: 'Core Right Triangle Calculators',
    supportHeading: 'Right Triangle Patterns and Triples',
    viewAllPythagoreanTriples: 'View all Pythagorean triples',
    chartRows: {
      triangle345: '3-4-5 triangle',
      triangle51213: '5-12-13 triangle',
      triangle81517: '8-15-17 triangle',
      triangle91215: '9-12-15 triangle'
    }
  }
};

type SimpleLocaleSeed = {
  titles: Record<TriplesPageKey, string>;
  introLines: Record<TriplesPageKey, string>;
  common: CommonText;
  words: {
    formula: string;
    diagram: string;
    howTo: string;
    examples: string;
    result: string;
    sideRatio: string;
    useCases: string;
    commonMistakes: string;
    related: string;
    faqs: string;
  };
  sentences: {
    metaTitle: string;
    introDetail: string;
    calculatorNote: string;
    summaryHeading: string;
    summaryIntro: string;
    formulaPythagorean: string;
    formulaScale: string;
    formulaSimilar: string;
    diagramIntro: string;
    diagramCaption: string;
    resultPythagorean: string;
    resultScale: string;
    resultSimilar: string;
    ratioPythagorean: string;
    ratioScale: string;
    ratioSimilar: string;
    faqPurposeQuestion: string;
    faqFormulaQuestion: string;
    faqValuesQuestion: string;
    faqValuesAnswer: string;
    chooseMode: string;
    enterValues: string;
    calculateResult: string;
    resetFields: string;
    enterScale: string;
    findScaled: string;
    chooseSimilar: string;
    enterSimilar: string;
    usePythagorean: string;
    useScale: string;
    useSimilar: string;
    mistakePythagorean: string;
    mistakeScale: string;
    mistakeSimilar: string;
  };
  home: LocaleText['home'];
};

const makeSimpleLocaleText = (seed: SimpleLocaleSeed): LocaleText => ({
  titles: seed.titles,
  introLines: seed.introLines,
  common: seed.common,
  headings: {
    formula: `{title} ${seed.words.formula}`,
    diagram: `{title} ${seed.words.diagram}`,
    howTo: `${seed.words.howTo} {title}`,
    examples: `{title} ${seed.words.examples}`,
    result: `{title} ${seed.words.result}`,
    sideRatio: `{title} ${seed.words.sideRatio}`,
    useCases: `${seed.words.useCases} {title}`,
    commonMistakes: `{title} ${seed.words.commonMistakes}`,
    related: `${seed.words.related} {title}`,
    faqs: `{title} ${seed.words.faqs}`
  },
  genericHeadings: {
    formula: seed.words.formula,
    diagram: seed.words.diagram,
    howTo: seed.words.howTo,
    examples: seed.words.examples,
    result: seed.words.result,
    sideRatio: seed.words.sideRatio,
    useCases: seed.words.useCases,
    commonMistakes: seed.words.commonMistakes,
    related: seed.words.related,
    faqs: seed.words.faqs
  },
  templates: {
    metaTitle: seed.sentences.metaTitle,
    introDetail: seed.sentences.introDetail,
    calculatorNote: seed.sentences.calculatorNote,
    summaryHeading: seed.sentences.summaryHeading,
    summaryIntro: seed.sentences.summaryIntro,
    formulaPythagorean: seed.sentences.formulaPythagorean,
    formulaScale: seed.sentences.formulaScale,
    formulaSimilar: seed.sentences.formulaSimilar,
    diagramIntro: seed.sentences.diagramIntro,
    diagramCaption: seed.sentences.diagramCaption,
    resultPythagorean: seed.sentences.resultPythagorean,
    resultScale: seed.sentences.resultScale,
    resultSimilar: seed.sentences.resultSimilar,
    ratioPythagorean: seed.sentences.ratioPythagorean,
    ratioScale: seed.sentences.ratioScale,
    ratioSimilar: seed.sentences.ratioSimilar,
    faqPurposeQuestion: seed.sentences.faqPurposeQuestion,
    faqPurposeAnswer: '{intro}',
    faqFormulaQuestion: seed.sentences.faqFormulaQuestion,
    faqFormulaAnswer: `${seed.common.mainFormula}: {formula}.`,
    faqValuesQuestion: seed.sentences.faqValuesQuestion,
    faqValuesAnswer: seed.sentences.faqValuesAnswer
  },
  howTo: {
    pythagorean: [
      seed.sentences.chooseMode,
      seed.sentences.enterValues,
      seed.sentences.calculateResult,
      seed.sentences.resetFields
    ],
    scale: [
      seed.sentences.enterScale,
      seed.sentences.findScaled,
      seed.sentences.calculateResult,
      seed.sentences.resetFields
    ],
    similar: [
      seed.sentences.chooseSimilar,
      seed.sentences.enterSimilar,
      seed.sentences.calculateResult,
      seed.sentences.resetFields
    ]
  },
  diagramNotes: {
    pythagorean: [
      `${seed.common.sideA} / ${seed.common.sideB}`,
      seed.common.hypotenuseC,
      seed.common.validTriple,
      PRIMARY_FORMULA.pythagorean
    ],
    scale345: [
      '3 : 4 : 5',
      seed.common.scaleFactorK,
      seed.common.hypotenuseC,
      `${seed.common.area} / ${seed.common.perimeter}`
    ],
    scale51213: [
      '5 : 12 : 13',
      seed.common.scaleFactorK,
      seed.common.hypotenuseC,
      `${seed.common.area} / ${seed.common.perimeter}`
    ],
    similar: [
      seed.common.originalSide,
      seed.common.similarSide,
      seed.common.scaleFactorK,
      PRIMARY_FORMULA.similar
    ]
  },
  useCases: {
    pythagorean: [seed.sentences.usePythagorean],
    scale: [seed.sentences.useScale],
    similar: [seed.sentences.useSimilar]
  },
  mistakes: {
    pythagorean: [seed.sentences.mistakePythagorean],
    scale: [seed.sentences.mistakeScale],
    similar: [seed.sentences.mistakeSimilar]
  },
  home: seed.home
});

const TEXT_BY_LOCALE: Record<Locale, LocaleText> = {
  en: EN_TEXT,
  hi: {
    titles: {
      pythagorean: 'पाइथागोरस त्रिक कैलकुलेटर',
      triangle345: '3 4 5 त्रिभुज कैलकुलेटर',
      triangle51213: '5 12 13 त्रिभुज कैलकुलेटर',
      similar: 'समान समकोण त्रिभुज कैलकुलेटर'
    },
    introLines: {
      pythagorean: 'पूर्ण संख्या वाले समकोण त्रिभुज त्रिक जांचें या बनाएं।',
      triangle345: 'सबसे सामान्य पाइथागोरस त्रिक हल करें और उसकी भुजाएं स्केल करें।',
      triangle51213: '5 12 13 समकोण त्रिभुज को स्केल करें और भुजाएं, क्षेत्रफल तथा परिमाप पाएं।',
      similar: 'समान समकोण त्रिभुजों में स्केल फैक्टर और मिलती हुई गायब भुजाएं पाएं।'
    },
    common: {
      openTool: 'टूल खोलें',
      calculate: 'गणना करें',
      reset: 'रीसेट करें',
      result: 'परिणाम',
      formula: 'सूत्र',
      calculatorMode: 'कैलकुलेटर मोड',
      diagramKey: 'त्रिभुज आरेख संकेत',
      diagramScaleFactor: 'k = स्केल फैक्टर',
      faqDescription: 'समकोण त्रिभुज हल करने से जुड़े सामान्य प्रश्नों के उत्तर।',
      example: 'उदाहरण',
      sideA: 'भुजा a',
      sideB: 'भुजा b',
      hypotenuseC: 'कर्ण c',
      scaleFactorK: 'स्केल फैक्टर k',
      area: 'क्षेत्रफल',
      perimeter: 'परिमाप',
      originalSide: 'मूल भुजा',
      similarSide: 'समान भुजा',
      scaleFactorResult: 'स्केल फैक्टर k',
      checkTriple: 'पाइथागोरस त्रिक जांचें',
      generateTriple: 'पाइथागोरस त्रिक बनाएं',
      scale345: '3-4-5 त्रिभुज स्केल करें',
      scale51213: '5-12-13 त्रिभुज स्केल करें',
      findScaleFactor: 'स्केल फैक्टर पाएं',
      findSimilarSide: 'गायब समान भुजा पाएं',
      findOriginalSide: 'मूल भुजा पाएं',
      validTriple: 'मान्य पाइथागोरस त्रिक',
      notTriple: 'पाइथागोरस त्रिक नहीं है',
      positiveValues: 'कृपया धनात्मक मान दर्ज करें।',
      hypotenuseLongest: 'कर्ण c सबसे लंबी भुजा होना चाहिए।',
      positiveIntegers: 'धनात्मक पूर्ण संख्याएं दर्ज करें।',
      mGreaterThanN: 'm, n से बड़ा होना चाहिए।',
      positiveScaleFactor: 'कृपया धनात्मक स्केल फैक्टर दर्ज करें।',
      originalAndScalePositive: 'मूल भुजा और k, 0 से बड़े होने चाहिए।',
      similarAndScalePositive: 'समान भुजा और k, 0 से बड़े होने चाहिए।',
      unableToCalculate: 'गणना नहीं हो सकी।',
      knownValues: 'ज्ञात मान',
      finds: 'निकालता है',
      mainFormula: 'मुख्य सूत्र',
      bestFor: 'इसके लिए उपयोगी',
      rightTriangleSideCalculator: 'समकोण त्रिभुज भुजा कैलकुलेटर',
      pythagoreanTheoremCalculator: 'पाइथागोरस प्रमेय कैलकुलेटर',
      specialRightTriangleCalculator: 'विशेष समकोण त्रिभुज कैलकुलेटर',
      rightTriangleAreaCalculator: 'समकोण त्रिभुज क्षेत्रफल कैलकुलेटर',
      rightTriangleAngleCalculator: 'समकोण त्रिभुज कोण कैलकुलेटर',
      rightTriangleProjectionCalculator: 'समकोण त्रिभुज प्रक्षेप कैलकुलेटर'
    },
    headings: {
      formula: '{title} का सूत्र',
      diagram: '{title} का आरेख',
      howTo: '{title} का उपयोग कैसे करें',
      examples: '{title} के चरणबद्ध उदाहरण',
      result: '{title} का परिणाम क्या बताता है',
      sideRatio: '{title} भुजा अनुपात',
      useCases: '{title} कब उपयोग करें',
      commonMistakes: '{title} में सामान्य गलतियां',
      related: '{title} से जुड़े कैलकुलेटर',
      faqs: '{title} प्रश्नोत्तर'
    },
    genericHeadings: {
      formula: 'सूत्र',
      diagram: 'त्रिभुज आरेख',
      howTo: 'इस कैलकुलेटर का उपयोग कैसे करें',
      examples: 'चरणबद्ध उदाहरण',
      result: 'परिणाम का अर्थ',
      sideRatio: 'भुजा अनुपात',
      useCases: 'इस कैलकुलेटर का उपयोग कब करें',
      commonMistakes: 'सामान्य गलतियां',
      related: 'संबंधित कैलकुलेटर',
      faqs: 'प्रश्नोत्तर'
    },
    templates: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} भुजा लेबल और चर स्पष्ट रखता है ताकि गणना आसानी से समझ आए।',
      calculatorNote: 'ज्ञात मान दर्ज करें, सही मोड चुनें और परिणाम की गणना करें।',
      summaryHeading: '{title} क्या हल करता है',
      summaryIntro: 'जब आपको केंद्रित समकोण त्रिभुज पैटर्न गणना चाहिए, तब {title} का उपयोग करें।',
      formulaPythagorean: 'पाइथागोरस त्रिक पूर्ण संख्या वाली भुजाओं के साथ a^2 + b^2 = c^2 को पूरा करता है।',
      formulaScale: 'स्केल किया गया त्रिक हर भुजा को समान k से गुणा करता है और समकोण बनाए रखता है।',
      formulaSimilar: 'समान समकोण त्रिभुजों में कोण समान रहते हैं, इसलिए मिलती भुजाएं एक ही स्केल फैक्टर k साझा करती हैं।',
      diagramIntro: 'आरेख {title} में उपयोग किए गए भुजा लेबल दिखाता है।',
      diagramCaption: '{title} के लिए समकोण त्रिभुज आरेख।',
      resultPythagorean: 'परिणाम बताता है कि मान पूर्ण संख्या वाला समकोण त्रिभुज बनाते हैं या बनाया गया त्रिक देता है।',
      resultScale: 'परिणाम स्केल की गई भुजाएं, क्षेत्रफल और परिमाप दिखाता है।',
      resultSimilar: 'परिणाम स्केल फैक्टर या गायब मिलती भुजा दिखाता है।',
      ratioPythagorean: 'हर मान्य त्रिक a : b : c रखता है, जहां c कर्ण है।',
      ratioScale: 'भुजा अनुपात स्थिर रहता है और k आकार बदलता है।',
      ratioSimilar: 'दोनों समकोण त्रिभुजों में संगत भुजाएं समान अनुपात रखती हैं।',
      faqPurposeQuestion: '{title} क्या करता है?',
      faqPurposeAnswer: '{intro}',
      faqFormulaQuestion: '{title} कौन सा सूत्र उपयोग करता है?',
      faqFormulaAnswer: 'मुख्य सूत्र {formula} है।',
      faqValuesQuestion: 'मुझे कौन से मान दर्ज करने चाहिए?',
      faqValuesAnswer: 'चुने गए कैलकुलेटर मोड के अनुसार धनात्मक मान दर्ज करें।'
    },
    howTo: {
      pythagorean: ['जांच मोड या बनाने का मोड चुनें।', 'आवश्यक खानों में धनात्मक मान दर्ज करें।', 'परिणाम देखने के लिए गणना करें चुनें।', 'खानों को साफ करने के लिए रीसेट करें।'],
      scale: ['धनात्मक स्केल फैक्टर k दर्ज करें।', 'भुजाएं, क्षेत्रफल और परिमाप पाने के लिए गणना करें चुनें।', 'परिणाम और सूत्र देखें।', 'नए मान के लिए रीसेट करें।'],
      similar: ['गायब मान से मेल खाता मोड चुनें।', 'ज्ञात संगत भुजाएं या k दर्ज करें।', 'परिणाम पाने के लिए गणना करें चुनें।', 'फिर से शुरू करने के लिए रीसेट करें।']
    },
    diagramNotes: {
      pythagorean: ['a और b दोनों भुजाएं हैं।', 'c कर्ण और सबसे लंबी भुजा है।', 'पूर्ण संख्या वाले मान पाइथागोरस त्रिक बना सकते हैं।', 'समकोण a और b के बीच है।'],
      scale345: ['मूल अनुपात 3 : 4 : 5 है।', 'हर भुजा k से गुणा होती है।', 'c = 5k कर्ण है।', 'समकोण समान रहता है।'],
      scale51213: ['मूल अनुपात 5 : 12 : 13 है।', 'हर भुजा k से गुणा होती है।', 'c = 13k कर्ण है।', 'क्षेत्रफल और परिमाप स्केल की गई भुजाओं से मिलते हैं।'],
      similar: ['दोनों त्रिभुजों के कोण मेल खाते हैं।', 'संगत भुजाएं समान स्केल फैक्टर k उपयोग करती हैं।', 'k धनात्मक होना चाहिए।', 'सूत्र k या गायब भुजा निकाल सकते हैं।']
    },
    useCases: {
      pythagorean: ['पूर्ण संख्या वाली समकोण त्रिभुज भुजाएं जांचना।', 'अभ्यास प्रश्नों के लिए त्रिक बनाना।', 'सामान्य माप पैटर्न की पुष्टि करना।'],
      scale: ['ज्ञात समकोण त्रिभुज त्रिक को स्केल करना।', 'स्केल के बाद क्षेत्रफल और परिमाप पाना।', 'समकोण लेआउट माप जांचना।'],
      similar: ['मिलते त्रिभुजों के बीच स्केल फैक्टर पाना।', 'गायब संगत भुजाएं हल करना।', 'नक्शों, चित्रों और अनुपाती मॉडलों पर काम करना।']
    },
    mistakes: {
      pythagorean: ['c को कर्ण के बजाय भुजा मानना।', 'पूर्ण संख्या त्रिक चाहिए होने पर दशमलव मान डालना।', 'm को n से कम या बराबर रखना।'],
      scale: ['शून्य या ऋणात्मक k उपयोग करना।', 'सभी भुजाओं के बजाय केवल एक भुजा गुणा करना।', 'परिमाप में कर्ण जोड़ना भूलना।'],
      similar: ['ऐसी भुजाएं मिलाना जो संगत नहीं हैं।', 'शून्य या ऋणात्मक स्केल फैक्टर उपयोग करना।', 'k निकालते समय गलत दिशा में भाग देना।']
    },
    home: {
      coreHeading: 'मुख्य समकोण त्रिभुज कैलकुलेटर',
      supportHeading: 'समकोण त्रिभुज पैटर्न और त्रिक',
      viewAllPythagoreanTriples: 'सभी पाइथागोरस त्रिक देखें',
      chartRows: {
        triangle345: '3-4-5 त्रिभुज',
        triangle51213: '5-12-13 त्रिभुज',
        triangle81517: '8-15-17 त्रिभुज',
        triangle91215: '9-12-15 त्रिभुज'
      }
    }
  },
  es: {
    titles: {
      pythagorean: 'Calculadora de ternas pitagóricas',
      triangle345: 'Calculadora de triángulo 3 4 5',
      triangle51213: 'Calculadora de triángulo 5 12 13',
      similar: 'Calculadora de triángulos rectángulos semejantes'
    },
    introLines: {
      pythagorean: 'Comprueba o genera ternas de triángulos rectángulos con números enteros.',
      triangle345: 'Resuelve la terna pitagórica más común y escala sus lados.',
      triangle51213: 'Escala un triángulo rectángulo 5 12 13 y encuentra lados, área y perímetro.',
      similar: 'Encuentra el factor de escala y lados correspondientes faltantes en triángulos rectángulos semejantes.'
    },
    common: {
      openTool: 'Abrir herramienta',
      calculate: 'Calcular',
      reset: 'Restablecer',
      result: 'Resultado',
      formula: 'Fórmula',
      calculatorMode: 'Modo de calculadora',
      diagramKey: 'Clave del diagrama del triángulo',
      diagramScaleFactor: 'k = factor de escala',
      faqDescription: 'Respuestas a preguntas comunes sobre triángulos rectángulos.',
      example: 'Ejemplo',
      sideA: 'Lado a',
      sideB: 'Lado b',
      hypotenuseC: 'Hipotenusa c',
      scaleFactorK: 'Factor de escala k',
      area: 'Área',
      perimeter: 'Perímetro',
      originalSide: 'Lado original',
      similarSide: 'Lado semejante',
      scaleFactorResult: 'Factor de escala k',
      checkTriple: 'Comprobar una terna pitagórica',
      generateTriple: 'Generar una terna pitagórica',
      scale345: 'Escalar triángulo 3-4-5',
      scale51213: 'Escalar triángulo 5-12-13',
      findScaleFactor: 'Encontrar factor de escala',
      findSimilarSide: 'Encontrar lado semejante faltante',
      findOriginalSide: 'Encontrar lado original',
      validTriple: 'Terna pitagórica válida',
      notTriple: 'No es una terna pitagórica',
      positiveValues: 'Introduce valores positivos.',
      hypotenuseLongest: 'La hipotenusa c debe ser el lado más largo.',
      positiveIntegers: 'Introduce números enteros positivos.',
      mGreaterThanN: 'm debe ser mayor que n.',
      positiveScaleFactor: 'Introduce un factor de escala positivo.',
      originalAndScalePositive: 'El lado original y k deben ser mayores que 0.',
      similarAndScalePositive: 'El lado semejante y k deben ser mayores que 0.',
      unableToCalculate: 'No se pudo calcular.',
      knownValues: 'Valores conocidos',
      finds: 'Encuentra',
      mainFormula: 'Fórmula principal',
      bestFor: 'Mejor para',
      rightTriangleSideCalculator: 'Calculadora de lados de triángulo rectángulo',
      pythagoreanTheoremCalculator: 'Calculadora del teorema de Pitágoras',
      specialRightTriangleCalculator: 'Calculadora de triángulos rectángulos especiales',
      rightTriangleAreaCalculator: 'Calculadora de área de triángulo rectángulo',
      rightTriangleAngleCalculator: 'Calculadora de ángulos de triángulo rectángulo',
      rightTriangleProjectionCalculator: 'Calculadora de proyecciones de triángulo rectángulo'
    },
    headings: {
      formula: 'Fórmula de {title}',
      diagram: 'Diagrama de {title}',
      howTo: 'Cómo usar {title}',
      examples: 'Ejemplos paso a paso de {title}',
      result: 'Qué significa el resultado de {title}',
      sideRatio: 'Razón de lados en {title}',
      useCases: 'Cuándo usar {title}',
      commonMistakes: 'Errores comunes en {title}',
      related: 'Calculadoras relacionadas con {title}',
      faqs: 'Preguntas frecuentes de {title}'
    },
    genericHeadings: {
      formula: 'Fórmula',
      diagram: 'Diagrama del triángulo',
      howTo: 'Cómo usar esta calculadora',
      examples: 'Ejemplos paso a paso',
      result: 'Qué significa el resultado',
      sideRatio: 'Razón de lados',
      useCases: 'Cuándo usar esta calculadora',
      commonMistakes: 'Errores comunes',
      related: 'Calculadoras relacionadas',
      faqs: 'Preguntas frecuentes'
    },
    templates: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} mantiene claros los lados y variables para seguir la operación.',
      calculatorNote: 'Introduce los valores conocidos, elige el modo adecuado y calcula el resultado.',
      summaryHeading: 'Qué resuelve {title}',
      summaryIntro: 'Usa {title} cuando necesites una cuenta enfocada de patrones de triángulos rectángulos.',
      formulaPythagorean: 'Una terna pitagórica cumple a^2 + b^2 = c^2 con longitudes enteras.',
      formulaScale: 'Una terna escalada multiplica cada lado por el mismo factor k y conserva el ángulo recto.',
      formulaSimilar: 'Los triángulos rectángulos semejantes tienen ángulos iguales, por eso sus lados correspondientes comparten k.',
      diagramIntro: 'El diagrama muestra las etiquetas de lados usadas por {title}.',
      diagramCaption: 'Diagrama de triángulo rectángulo para {title}.',
      resultPythagorean: 'El resultado indica si los valores forman una terna entera o entrega una terna generada.',
      resultScale: 'El resultado muestra lados escalados, área y perímetro.',
      resultSimilar: 'El resultado muestra el factor de escala o el lado correspondiente faltante.',
      ratioPythagorean: 'Toda terna válida conserva a : b : c con c como hipotenusa.',
      ratioScale: 'La razón de lados permanece fija mientras k cambia el tamaño.',
      ratioSimilar: 'Los lados correspondientes mantienen la misma razón en ambos triángulos rectángulos.',
      faqPurposeQuestion: '¿Qué hace {title}?',
      faqPurposeAnswer: '{intro}',
      faqFormulaQuestion: '¿Qué fórmula usa {title}?',
      faqFormulaAnswer: 'La fórmula principal es {formula}.',
      faqValuesQuestion: '¿Qué valores debo introducir?',
      faqValuesAnswer: 'Introduce valores positivos que coincidan con el modo seleccionado.'
    },
    howTo: {
      pythagorean: ['Elige comprobar o generar.', 'Introduce valores positivos en los campos requeridos.', 'Pulsa Calcular para ver el resultado.', 'Usa Restablecer para limpiar los campos.'],
      scale: ['Introduce un factor de escala positivo k.', 'Pulsa Calcular para encontrar lados, área y perímetro.', 'Revisa el resultado y la fórmula.', 'Usa Restablecer para otro valor.'],
      similar: ['Elige el modo que coincide con el valor faltante.', 'Introduce los lados correspondientes conocidos o k.', 'Pulsa Calcular para obtener el resultado.', 'Usa Restablecer para empezar de nuevo.']
    },
    diagramNotes: {
      pythagorean: ['a y b son los catetos.', 'c es la hipotenusa y el lado más largo.', 'Los valores enteros pueden formar una terna pitagórica.', 'El ángulo recto está entre a y b.'],
      scale345: ['La razón base es 3 : 4 : 5.', 'Cada lado se multiplica por k.', 'c = 5k es la hipotenusa.', 'El ángulo recto se conserva.'],
      scale51213: ['La razón base es 5 : 12 : 13.', 'Cada lado se multiplica por k.', 'c = 13k es la hipotenusa.', 'Área y perímetro salen de los lados escalados.'],
      similar: ['Ambos triángulos tienen ángulos correspondientes.', 'Los lados correspondientes usan el mismo k.', 'k debe ser positivo.', 'Las fórmulas encuentran k o un lado faltante.']
    },
    useCases: {
      pythagorean: ['Comprobar lados enteros de triángulos rectángulos.', 'Generar ternas para ejercicios.', 'Confirmar patrones de medición comunes.'],
      scale: ['Escalar una terna rectángula conocida.', 'Encontrar área y perímetro después de escalar.', 'Comprobar medidas de diseño con ángulo recto.'],
      similar: ['Encontrar un factor de escala entre triángulos correspondientes.', 'Resolver lados correspondientes faltantes.', 'Trabajar con mapas, dibujos y modelos proporcionales.']
    },
    mistakes: {
      pythagorean: ['Usar c como cateto en lugar de hipotenusa.', 'Introducir decimales cuando se necesita una terna entera.', 'Usar m menor o igual que n.'],
      scale: ['Usar k cero o negativo.', 'Multiplicar solo un lado en vez de todos.', 'Olvidar incluir la hipotenusa en el perímetro.'],
      similar: ['Emparejar lados que no corresponden.', 'Usar un factor de escala cero o negativo.', 'Dividir en la dirección incorrecta al hallar k.']
    },
    home: {
      coreHeading: 'Calculadoras principales de triángulo rectángulo',
      supportHeading: 'Patrones y ternas de triángulos rectángulos',
      viewAllPythagoreanTriples: 'Ver todas las ternas pitagóricas',
      chartRows: {
        triangle345: 'Triángulo 3-4-5',
        triangle51213: 'Triángulo 5-12-13',
        triangle81517: 'Triángulo 8-15-17',
        triangle91215: 'Triángulo 9-12-15'
      }
    }
  },
  ru: {
    titles: {
      pythagorean: 'Калькулятор пифагоровых троек',
      triangle345: 'Калькулятор треугольника 3 4 5',
      triangle51213: 'Калькулятор треугольника 5 12 13',
      similar: 'Калькулятор подобных прямоугольных треугольников'
    },
    introLines: {
      pythagorean: 'Проверяйте или создавайте целочисленные тройки прямоугольного треугольника.',
      triangle345: 'Решайте самую распространенную пифагорову тройку и масштабируйте ее стороны.',
      triangle51213: 'Масштабируйте прямоугольный треугольник 5 12 13 и находите стороны, площадь и периметр.',
      similar: 'Находите коэффициент масштаба и недостающие соответствующие стороны подобных прямоугольных треугольников.'
    },
    common: {
      openTool: 'Открыть инструмент',
      calculate: 'Вычислить',
      reset: 'Сбросить',
      result: 'Результат',
      formula: 'Формула',
      calculatorMode: 'Режим калькулятора',
      diagramKey: 'Пояснение к схеме треугольника',
      diagramScaleFactor: 'k = коэффициент масштаба',
      faqDescription: 'Ответы на частые вопросы о решении прямоугольных треугольников.',
      example: 'Пример',
      sideA: 'Сторона a',
      sideB: 'Сторона b',
      hypotenuseC: 'Гипотенуза c',
      scaleFactorK: 'Коэффициент масштаба k',
      area: 'Площадь',
      perimeter: 'Периметр',
      originalSide: 'Исходная сторона',
      similarSide: 'Подобная сторона',
      scaleFactorResult: 'Коэффициент масштаба k',
      checkTriple: 'Проверить пифагорову тройку',
      generateTriple: 'Создать пифагорову тройку',
      scale345: 'Масштабировать треугольник 3-4-5',
      scale51213: 'Масштабировать треугольник 5-12-13',
      findScaleFactor: 'Найти коэффициент масштаба',
      findSimilarSide: 'Найти недостающую подобную сторону',
      findOriginalSide: 'Найти исходную сторону',
      validTriple: 'Верная пифагорова тройка',
      notTriple: 'Не пифагорова тройка',
      positiveValues: 'Введите положительные значения.',
      hypotenuseLongest: 'Гипотенуза c должна быть самой длинной стороной.',
      positiveIntegers: 'Введите положительные целые числа.',
      mGreaterThanN: 'm должно быть больше n.',
      positiveScaleFactor: 'Введите положительный коэффициент масштаба.',
      originalAndScalePositive: 'Исходная сторона и k должны быть больше 0.',
      similarAndScalePositive: 'Подобная сторона и k должны быть больше 0.',
      unableToCalculate: 'Не удалось вычислить.',
      knownValues: 'Известные значения',
      finds: 'Находит',
      mainFormula: 'Главная формула',
      bestFor: 'Подходит для',
      rightTriangleSideCalculator: 'Калькулятор сторон прямоугольного треугольника',
      pythagoreanTheoremCalculator: 'Калькулятор теоремы Пифагора',
      specialRightTriangleCalculator: 'Калькулятор специальных прямоугольных треугольников',
      rightTriangleAreaCalculator: 'Калькулятор площади прямоугольного треугольника',
      rightTriangleAngleCalculator: 'Калькулятор углов прямоугольного треугольника',
      rightTriangleProjectionCalculator: 'Калькулятор проекций прямоугольного треугольника'
    },
    headings: {
      formula: 'Формула для {title}',
      diagram: 'Схема для {title}',
      howTo: 'Как использовать {title}',
      examples: 'Пошаговые примеры для {title}',
      result: 'Что означает результат {title}',
      sideRatio: 'Отношение сторон в {title}',
      useCases: 'Когда использовать {title}',
      commonMistakes: 'Частые ошибки в {title}',
      related: 'Связанные калькуляторы для {title}',
      faqs: 'Вопросы и ответы по {title}'
    },
    genericHeadings: {
      formula: 'Формула',
      diagram: 'Схема треугольника',
      howTo: 'Как использовать этот калькулятор',
      examples: 'Пошаговые примеры',
      result: 'Что означает результат',
      sideRatio: 'Отношение сторон',
      useCases: 'Когда использовать этот калькулятор',
      commonMistakes: 'Частые ошибки',
      related: 'Связанные калькуляторы',
      faqs: 'Вопросы и ответы'
    },
    templates: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} сохраняет ясные обозначения сторон и переменных, чтобы расчет было легко проверить.',
      calculatorNote: 'Введите известные значения, выберите подходящий режим и вычислите результат.',
      summaryHeading: 'Что решает {title}',
      summaryIntro: 'Используйте {title}, когда нужен точный расчет шаблона прямоугольного треугольника.',
      formulaPythagorean: 'Пифагорова тройка удовлетворяет a^2 + b^2 = c^2 при целых длинах сторон.',
      formulaScale: 'Масштабированная тройка умножает каждую сторону на один и тот же k и сохраняет прямой угол.',
      formulaSimilar: 'У подобных прямоугольных треугольников равные углы, поэтому соответствующие стороны имеют один k.',
      diagramIntro: 'Схема показывает обозначения сторон, используемые в {title}.',
      diagramCaption: 'Схема прямоугольного треугольника для {title}.',
      resultPythagorean: 'Результат показывает, образуют ли значения целочисленный прямоугольный треугольник, или дает созданную тройку.',
      resultScale: 'Результат показывает масштабированные стороны, площадь и периметр.',
      resultSimilar: 'Результат показывает коэффициент масштаба или недостающую соответствующую сторону.',
      ratioPythagorean: 'Каждая верная тройка сохраняет a : b : c, где c является гипотенузой.',
      ratioScale: 'Отношение сторон остается фиксированным, а k меняет размер.',
      ratioSimilar: 'Соответствующие стороны сохраняют одно отношение в обоих прямоугольных треугольниках.',
      faqPurposeQuestion: 'Что делает {title}?',
      faqPurposeAnswer: '{intro}',
      faqFormulaQuestion: 'Какую формулу использует {title}?',
      faqFormulaAnswer: 'Главная формула: {formula}.',
      faqValuesQuestion: 'Какие значения нужно ввести?',
      faqValuesAnswer: 'Введите положительные значения, соответствующие выбранному режиму.'
    },
    howTo: {
      pythagorean: ['Выберите проверку или создание.', 'Введите положительные значения в нужные поля.', 'Нажмите Вычислить, чтобы увидеть результат.', 'Используйте Сбросить для очистки полей.'],
      scale: ['Введите положительный коэффициент масштаба k.', 'Нажмите Вычислить, чтобы найти стороны, площадь и периметр.', 'Проверьте результат и формулу.', 'Используйте Сбросить для нового значения.'],
      similar: ['Выберите режим по недостающему значению.', 'Введите известные соответствующие стороны или k.', 'Нажмите Вычислить, чтобы получить результат.', 'Используйте Сбросить, чтобы начать заново.']
    },
    diagramNotes: {
      pythagorean: ['a и b — катеты.', 'c — гипотенуза и самая длинная сторона.', 'Целые значения могут образовать пифагорову тройку.', 'Прямой угол находится между a и b.'],
      scale345: ['Базовое отношение равно 3 : 4 : 5.', 'Каждая сторона умножается на k.', 'c = 5k — гипотенуза.', 'Прямой угол сохраняется.'],
      scale51213: ['Базовое отношение равно 5 : 12 : 13.', 'Каждая сторона умножается на k.', 'c = 13k — гипотенуза.', 'Площадь и периметр берутся из масштабированных сторон.'],
      similar: ['Оба треугольника имеют соответствующие углы.', 'Соответствующие стороны используют один k.', 'k должен быть положительным.', 'Формулы находят k или недостающую сторону.']
    },
    useCases: {
      pythagorean: ['Проверка целых сторон прямоугольного треугольника.', 'Создание троек для практических задач.', 'Проверка распространенных измерительных схем.'],
      scale: ['Масштабирование известной прямоугольной тройки.', 'Поиск площади и периметра после масштабирования.', 'Проверка размеров с прямым углом.'],
      similar: ['Поиск коэффициента масштаба между соответствующими треугольниками.', 'Решение недостающих соответствующих сторон.', 'Работа с картами, чертежами и пропорциональными моделями.']
    },
    mistakes: {
      pythagorean: ['Использовать c как катет вместо гипотенузы.', 'Вводить десятичные числа, когда нужна целая тройка.', 'Брать m меньше или равным n.'],
      scale: ['Использовать нулевой или отрицательный k.', 'Умножать только одну сторону вместо всех.', 'Забывать включить гипотенузу в периметр.'],
      similar: ['Сопоставлять несоответствующие стороны.', 'Использовать нулевой или отрицательный коэффициент.', 'Делить в неверном направлении при поиске k.']
    },
    home: {
      coreHeading: 'Основные калькуляторы прямоугольного треугольника',
      supportHeading: 'Шаблоны и пифагоровы тройки',
      viewAllPythagoreanTriples: 'Посмотреть все пифагоровы тройки',
      chartRows: {
        triangle345: 'Треугольник 3-4-5',
        triangle51213: 'Треугольник 5-12-13',
        triangle81517: 'Треугольник 8-15-17',
        triangle91215: 'Треугольник 9-12-15'
      }
    }
  },
  fr: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Calculateur de triplets pythagoriciens',
      triangle345: 'Calculateur de triangle 3 4 5',
      triangle51213: 'Calculateur de triangle 5 12 13',
      similar: 'Calculateur de triangles rectangles semblables'
    },
    introLines: {
      pythagorean: 'Vérifiez ou générez des triplets de triangles rectangles en nombres entiers.',
      triangle345: 'Résolvez le triplet pythagoricien le plus courant et mettez ses côtés à l’échelle.',
      triangle51213: 'Mettez à l’échelle un triangle rectangle 5 12 13 et trouvez les côtés, l’aire et le périmètre.',
      similar: 'Trouvez le facteur d’échelle et les côtés correspondants manquants dans des triangles rectangles semblables.'
    },
    common: {
      openTool: 'Ouvrir l’outil',
      calculate: 'Calculer',
      reset: 'Réinitialiser',
      result: 'Résultat',
      formula: 'Formule',
      calculatorMode: 'Mode de calcul',
      diagramKey: 'Légende du schéma du triangle',
      diagramScaleFactor: 'k = facteur d’échelle',
      faqDescription: 'Réponses aux questions courantes sur les triangles rectangles.',
      example: 'Exemple',
      sideA: 'Côté a',
      sideB: 'Côté b',
      hypotenuseC: 'Hypoténuse c',
      scaleFactorK: 'Facteur d’échelle k',
      area: 'Aire',
      perimeter: 'Périmètre',
      originalSide: 'Côté original',
      similarSide: 'Côté semblable',
      scaleFactorResult: 'Facteur d’échelle k',
      checkTriple: 'Vérifier un triplet pythagoricien',
      generateTriple: 'Générer un triplet pythagoricien',
      scale345: 'Mettre à l’échelle le triangle 3-4-5',
      scale51213: 'Mettre à l’échelle le triangle 5-12-13',
      findScaleFactor: 'Trouver le facteur d’échelle',
      findSimilarSide: 'Trouver le côté semblable manquant',
      findOriginalSide: 'Trouver le côté original',
      validTriple: 'Triplet pythagoricien valide',
      notTriple: 'Ce n’est pas un triplet pythagoricien',
      positiveValues: 'Veuillez saisir des valeurs positives.',
      hypotenuseLongest: 'L’hypoténuse c doit être le côté le plus long.',
      positiveIntegers: 'Saisissez des nombres entiers positifs.',
      mGreaterThanN: 'm doit être supérieur à n.',
      positiveScaleFactor: 'Veuillez saisir un facteur d’échelle positif.',
      originalAndScalePositive: 'Le côté original et k doivent être supérieurs à 0.',
      similarAndScalePositive: 'Le côté semblable et k doivent être supérieurs à 0.',
      unableToCalculate: 'Impossible de calculer.',
      knownValues: 'Valeurs connues',
      finds: 'Trouve',
      mainFormula: 'Formule principale',
      bestFor: 'Idéal pour',
      rightTriangleSideCalculator: 'Calculateur de côtés de triangle rectangle',
      pythagoreanTheoremCalculator: 'Calculateur du théorème de Pythagore',
      specialRightTriangleCalculator: 'Calculateur de triangles rectangles spéciaux',
      rightTriangleAreaCalculator: 'Calculateur d’aire de triangle rectangle',
      rightTriangleAngleCalculator: 'Calculateur d’angles de triangle rectangle',
      rightTriangleProjectionCalculator: 'Calculateur de projections de triangle rectangle'
    },
    words: {
      formula: 'formule',
      diagram: 'schéma',
      howTo: 'Comment utiliser',
      examples: 'exemples étape par étape',
      result: 'signification du résultat',
      sideRatio: 'rapport des côtés',
      useCases: 'Quand utiliser',
      commonMistakes: 'erreurs courantes',
      related: 'Calculatrices liées à',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} garde les variables et les côtés faciles à suivre.',
      calculatorNote: 'Saisissez les valeurs connues, choisissez le bon mode et calculez.',
      summaryHeading: 'Ce que résout {title}',
      summaryIntro: 'Utilisez {title} pour un calcul ciblé de triangle rectangle.',
      formulaPythagorean: 'Un triplet pythagoricien vérifie a^2 + b^2 = c^2 avec des longueurs entières.',
      formulaScale: 'Une mise à l’échelle multiplie chaque côté par le même k.',
      formulaSimilar: 'Des triangles rectangles semblables gardent les mêmes angles et un même facteur k.',
      diagramIntro: 'Le schéma montre les côtés utilisés par {title}.',
      diagramCaption: 'Schéma de triangle rectangle pour {title}.',
      resultPythagorean: 'Le résultat indique si les valeurs forment un triplet entier ou donne un triplet généré.',
      resultScale: 'Le résultat donne les côtés mis à l’échelle, l’aire et le périmètre.',
      resultSimilar: 'Le résultat donne le facteur d’échelle ou le côté correspondant manquant.',
      ratioPythagorean: 'Tout triplet valide garde a : b : c avec c comme hypoténuse.',
      ratioScale: 'Le rapport des côtés reste fixe pendant que k change la taille.',
      ratioSimilar: 'Les côtés correspondants gardent le même rapport.',
      faqPurposeQuestion: 'À quoi sert {title} ?',
      faqFormulaQuestion: 'Quelle formule utilise {title} ?',
      faqValuesQuestion: 'Quelles valeurs saisir ?',
      faqValuesAnswer: 'Saisissez des valeurs positives qui correspondent au mode choisi.',
      chooseMode: 'Choisissez le mode de vérification ou de génération.',
      enterValues: 'Saisissez des valeurs positives.',
      calculateResult: 'Cliquez sur Calculer pour afficher le résultat.',
      resetFields: 'Utilisez Réinitialiser pour vider les champs.',
      enterScale: 'Saisissez un facteur d’échelle k positif.',
      findScaled: 'Calculez les côtés, l’aire et le périmètre.',
      chooseSimilar: 'Choisissez le mode correspondant à la valeur manquante.',
      enterSimilar: 'Saisissez les côtés correspondants connus ou k.',
      usePythagorean: 'Utile pour vérifier ou créer des triplets entiers.',
      useScale: 'Utile pour mettre à l’échelle un triplet connu.',
      useSimilar: 'Utile pour les proportions et les côtés correspondants.',
      mistakePythagorean: 'Vérifiez que c est l’hypoténuse et que les valeurs sont entières.',
      mistakeScale: 'Utilisez toujours un k positif et multipliez tous les côtés.',
      mistakeSimilar: 'Associez seulement les côtés correspondants.'
    },
    home: {
      coreHeading: 'Calculateurs principaux de triangle rectangle',
      supportHeading: 'Motifs et triplets de triangles rectangles',
      viewAllPythagoreanTriples: 'Voir tous les triplets pythagoriciens',
      chartRows: {
        triangle345: 'Triangle 3-4-5',
        triangle51213: 'Triangle 5-12-13',
        triangle81517: 'Triangle 8-15-17',
        triangle91215: 'Triangle 9-12-15'
      }
    }
  }),
  de: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Rechner für pythagoreische Tripel',
      triangle345: '3 4 5 Dreieck Rechner',
      triangle51213: '5 12 13 Dreieck Rechner',
      similar: 'Rechner für ähnliche rechtwinklige Dreiecke'
    },
    introLines: {
      pythagorean: 'Prüfen oder erzeugen Sie ganzzahlige Tripel für rechtwinklige Dreiecke.',
      triangle345: 'Lösen Sie das bekannteste pythagoreische Tripel und skalieren Sie seine Seiten.',
      triangle51213: 'Skalieren Sie ein rechtwinkliges 5 12 13 Dreieck und finden Sie Seiten, Fläche und Umfang.',
      similar: 'Finden Sie den Skalierungsfaktor und fehlende passende Seiten in ähnlichen rechtwinkligen Dreiecken.'
    },
    common: {
      openTool: 'Tool öffnen',
      calculate: 'Berechnen',
      reset: 'Zurücksetzen',
      result: 'Ergebnis',
      formula: 'Formel',
      calculatorMode: 'Rechnermodus',
      diagramKey: 'Legende zum Dreiecksdiagramm',
      diagramScaleFactor: 'k = Skalierungsfaktor',
      faqDescription: 'Antworten auf häufige Fragen zu rechtwinkligen Dreiecken.',
      example: 'Beispiel',
      sideA: 'Seite a',
      sideB: 'Seite b',
      hypotenuseC: 'Hypotenuse c',
      scaleFactorK: 'Skalierungsfaktor k',
      area: 'Fläche',
      perimeter: 'Umfang',
      originalSide: 'Ursprüngliche Seite',
      similarSide: 'Ähnliche Seite',
      scaleFactorResult: 'Skalierungsfaktor k',
      checkTriple: 'Pythagoreisches Tripel prüfen',
      generateTriple: 'Pythagoreisches Tripel erzeugen',
      scale345: '3-4-5 Dreieck skalieren',
      scale51213: '5-12-13 Dreieck skalieren',
      findScaleFactor: 'Skalierungsfaktor finden',
      findSimilarSide: 'Fehlende ähnliche Seite finden',
      findOriginalSide: 'Ursprüngliche Seite finden',
      validTriple: 'Gültiges pythagoreisches Tripel',
      notTriple: 'Kein pythagoreisches Tripel',
      positiveValues: 'Bitte positive Werte eingeben.',
      hypotenuseLongest: 'Die Hypotenuse c muss die längste Seite sein.',
      positiveIntegers: 'Geben Sie positive ganze Zahlen ein.',
      mGreaterThanN: 'm muss größer als n sein.',
      positiveScaleFactor: 'Bitte einen positiven Skalierungsfaktor eingeben.',
      originalAndScalePositive: 'Ursprüngliche Seite und k müssen größer als 0 sein.',
      similarAndScalePositive: 'Ähnliche Seite und k müssen größer als 0 sein.',
      unableToCalculate: 'Berechnung nicht möglich.',
      knownValues: 'Bekannte Werte',
      finds: 'Findet',
      mainFormula: 'Hauptformel',
      bestFor: 'Geeignet für',
      rightTriangleSideCalculator: 'Rechner für Seiten rechtwinkliger Dreiecke',
      pythagoreanTheoremCalculator: 'Rechner zum Satz des Pythagoras',
      specialRightTriangleCalculator: 'Rechner für besondere rechtwinklige Dreiecke',
      rightTriangleAreaCalculator: 'Flächenrechner für rechtwinklige Dreiecke',
      rightTriangleAngleCalculator: 'Winkelrechner für rechtwinklige Dreiecke',
      rightTriangleProjectionCalculator: 'Projektionsrechner für rechtwinklige Dreiecke'
    },
    words: {
      formula: 'Formel',
      diagram: 'Diagramm',
      howTo: 'So verwenden Sie',
      examples: 'Schritt-für-Schritt-Beispiele',
      result: 'Bedeutung des Ergebnisses',
      sideRatio: 'Seitenverhältnis',
      useCases: 'Wann verwenden',
      commonMistakes: 'häufige Fehler',
      related: 'Verwandte Rechner für',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} hält Variablen und Seitenbezeichnungen klar nachvollziehbar.',
      calculatorNote: 'Geben Sie die bekannten Werte ein, wählen Sie den passenden Modus und berechnen Sie.',
      summaryHeading: 'Was {title} löst',
      summaryIntro: 'Nutzen Sie {title} für eine gezielte Rechnung zu rechtwinkligen Dreiecksmustern.',
      formulaPythagorean: 'Ein pythagoreisches Tripel erfüllt a^2 + b^2 = c^2 mit ganzzahligen Seitenlängen.',
      formulaScale: 'Beim Skalieren wird jede Seite mit demselben k multipliziert.',
      formulaSimilar: 'Ähnliche rechtwinklige Dreiecke behalten gleiche Winkel und denselben Faktor k.',
      diagramIntro: 'Das Diagramm zeigt die Seitenbezeichnungen für {title}.',
      diagramCaption: 'Diagramm eines rechtwinkligen Dreiecks für {title}.',
      resultPythagorean: 'Das Ergebnis zeigt, ob die Werte ein ganzzahliges Tripel bilden, oder gibt ein erzeugtes Tripel aus.',
      resultScale: 'Das Ergebnis zeigt skalierte Seiten, Fläche und Umfang.',
      resultSimilar: 'Das Ergebnis zeigt den Skalierungsfaktor oder die fehlende passende Seite.',
      ratioPythagorean: 'Jedes gültige Tripel behält a : b : c mit c als Hypotenuse.',
      ratioScale: 'Das Seitenverhältnis bleibt fest, während k die Größe ändert.',
      ratioSimilar: 'Entsprechende Seiten behalten dasselbe Verhältnis.',
      faqPurposeQuestion: 'Was macht {title}?',
      faqFormulaQuestion: 'Welche Formel verwendet {title}?',
      faqValuesQuestion: 'Welche Werte soll ich eingeben?',
      faqValuesAnswer: 'Geben Sie positive Werte passend zum ausgewählten Modus ein.',
      chooseMode: 'Wählen Sie Prüfen oder Erzeugen.',
      enterValues: 'Geben Sie positive Werte ein.',
      calculateResult: 'Klicken Sie auf Berechnen, um das Ergebnis zu sehen.',
      resetFields: 'Mit Zurücksetzen leeren Sie die Felder.',
      enterScale: 'Geben Sie einen positiven Skalierungsfaktor k ein.',
      findScaled: 'Berechnen Sie Seiten, Fläche und Umfang.',
      chooseSimilar: 'Wählen Sie den Modus zur fehlenden Größe.',
      enterSimilar: 'Geben Sie bekannte passende Seiten oder k ein.',
      usePythagorean: 'Nützlich zum Prüfen oder Erzeugen ganzer Tripel.',
      useScale: 'Nützlich zum Skalieren eines bekannten Tripels.',
      useSimilar: 'Nützlich für Proportionen und entsprechende Seiten.',
      mistakePythagorean: 'Achten Sie darauf, dass c die Hypotenuse ist und die Werte ganzzahlig sind.',
      mistakeScale: 'Verwenden Sie ein positives k und skalieren Sie alle Seiten.',
      mistakeSimilar: 'Vergleichen Sie nur entsprechende Seiten.'
    },
    home: {
      coreHeading: 'Kernrechner für rechtwinklige Dreiecke',
      supportHeading: 'Muster und pythagoreische Tripel',
      viewAllPythagoreanTriples: 'Alle pythagoreischen Tripel ansehen',
      chartRows: {
        triangle345: '3-4-5 Dreieck',
        triangle51213: '5-12-13 Dreieck',
        triangle81517: '8-15-17 Dreieck',
        triangle91215: '9-12-15 Dreieck'
      }
    }
  }),
  it: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Calcolatore di terne pitagoriche',
      triangle345: 'Calcolatore del triangolo 3 4 5',
      triangle51213: 'Calcolatore del triangolo 5 12 13',
      similar: 'Calcolatore di triangoli rettangoli simili'
    },
    introLines: {
      pythagorean: 'Verifica o genera terne di triangoli rettangoli con numeri interi.',
      triangle345: 'Risolvi la terna pitagorica più comune e scala i suoi lati.',
      triangle51213: 'Scala un triangolo rettangolo 5 12 13 e trova lati, area e perimetro.',
      similar: 'Trova il fattore di scala e i lati corrispondenti mancanti in triangoli rettangoli simili.'
    },
    common: {
      openTool: 'Apri strumento',
      calculate: 'Calcola',
      reset: 'Reimposta',
      result: 'Risultato',
      formula: 'Formula',
      calculatorMode: 'Modalità calcolatore',
      diagramKey: 'Legenda del diagramma del triangolo',
      diagramScaleFactor: 'k = fattore di scala',
      faqDescription: 'Risposte alle domande comuni sui triangoli rettangoli.',
      example: 'Esempio',
      sideA: 'Lato a',
      sideB: 'Lato b',
      hypotenuseC: 'Ipotenusa c',
      scaleFactorK: 'Fattore di scala k',
      area: 'Area',
      perimeter: 'Perimetro',
      originalSide: 'Lato originale',
      similarSide: 'Lato simile',
      scaleFactorResult: 'Fattore di scala k',
      checkTriple: 'Verifica una terna pitagorica',
      generateTriple: 'Genera una terna pitagorica',
      scale345: 'Scala il triangolo 3-4-5',
      scale51213: 'Scala il triangolo 5-12-13',
      findScaleFactor: 'Trova il fattore di scala',
      findSimilarSide: 'Trova il lato simile mancante',
      findOriginalSide: 'Trova il lato originale',
      validTriple: 'Terna pitagorica valida',
      notTriple: 'Non è una terna pitagorica',
      positiveValues: 'Inserisci valori positivi.',
      hypotenuseLongest: 'L’ipotenusa c deve essere il lato più lungo.',
      positiveIntegers: 'Inserisci numeri interi positivi.',
      mGreaterThanN: 'm deve essere maggiore di n.',
      positiveScaleFactor: 'Inserisci un fattore di scala positivo.',
      originalAndScalePositive: 'Il lato originale e k devono essere maggiori di 0.',
      similarAndScalePositive: 'Il lato simile e k devono essere maggiori di 0.',
      unableToCalculate: 'Impossibile calcolare.',
      knownValues: 'Valori noti',
      finds: 'Trova',
      mainFormula: 'Formula principale',
      bestFor: 'Ideale per',
      rightTriangleSideCalculator: 'Calcolatore dei lati del triangolo rettangolo',
      pythagoreanTheoremCalculator: 'Calcolatore del teorema di Pitagora',
      specialRightTriangleCalculator: 'Calcolatore dei triangoli rettangoli speciali',
      rightTriangleAreaCalculator: 'Calcolatore area del triangolo rettangolo',
      rightTriangleAngleCalculator: 'Calcolatore angoli del triangolo rettangolo',
      rightTriangleProjectionCalculator: 'Calcolatore proiezioni del triangolo rettangolo'
    },
    words: {
      formula: 'formula',
      diagram: 'diagramma',
      howTo: 'Come usare',
      examples: 'esempi passo passo',
      result: 'significato del risultato',
      sideRatio: 'rapporto dei lati',
      useCases: 'Quando usare',
      commonMistakes: 'errori comuni',
      related: 'Calcolatori correlati per',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} mantiene chiari lati e variabili per seguire il calcolo.',
      calculatorNote: 'Inserisci i valori noti, scegli la modalità adatta e calcola.',
      summaryHeading: 'Cosa risolve {title}',
      summaryIntro: 'Usa {title} per un calcolo mirato sui triangoli rettangoli.',
      formulaPythagorean: 'Una terna pitagorica soddisfa a^2 + b^2 = c^2 con lati interi.',
      formulaScale: 'Una terna scalata moltiplica ogni lato per lo stesso k.',
      formulaSimilar: 'Triangoli rettangoli simili conservano gli angoli e lo stesso fattore k.',
      diagramIntro: 'Il diagramma mostra le etichette dei lati usate da {title}.',
      diagramCaption: 'Diagramma del triangolo rettangolo per {title}.',
      resultPythagorean: 'Il risultato indica se i valori formano una terna intera oppure mostra una terna generata.',
      resultScale: 'Il risultato mostra lati scalati, area e perimetro.',
      resultSimilar: 'Il risultato mostra il fattore di scala o il lato corrispondente mancante.',
      ratioPythagorean: 'Ogni terna valida mantiene a : b : c con c come ipotenusa.',
      ratioScale: 'Il rapporto dei lati resta fisso mentre k cambia la dimensione.',
      ratioSimilar: 'I lati corrispondenti mantengono lo stesso rapporto.',
      faqPurposeQuestion: 'A cosa serve {title}?',
      faqFormulaQuestion: 'Quale formula usa {title}?',
      faqValuesQuestion: 'Quali valori devo inserire?',
      faqValuesAnswer: 'Inserisci valori positivi coerenti con la modalità scelta.',
      chooseMode: 'Scegli la modalità verifica o generazione.',
      enterValues: 'Inserisci valori positivi.',
      calculateResult: 'Premi Calcola per vedere il risultato.',
      resetFields: 'Usa Reimposta per svuotare i campi.',
      enterScale: 'Inserisci un fattore di scala k positivo.',
      findScaled: 'Calcola lati, area e perimetro.',
      chooseSimilar: 'Scegli la modalità adatta al valore mancante.',
      enterSimilar: 'Inserisci i lati corrispondenti noti oppure k.',
      usePythagorean: 'Utile per verificare o generare terne intere.',
      useScale: 'Utile per scalare una terna nota.',
      useSimilar: 'Utile per proporzioni e lati corrispondenti.',
      mistakePythagorean: 'Controlla che c sia l’ipotenusa e che i valori siano interi.',
      mistakeScale: 'Usa sempre k positivo e scala tutti i lati.',
      mistakeSimilar: 'Confronta solo lati corrispondenti.'
    },
    home: {
      coreHeading: 'Calcolatori principali per triangoli rettangoli',
      supportHeading: 'Pattern e terne di triangoli rettangoli',
      viewAllPythagoreanTriples: 'Vedi tutte le terne pitagoriche',
      chartRows: {
        triangle345: 'Triangolo 3-4-5',
        triangle51213: 'Triangolo 5-12-13',
        triangle81517: 'Triangolo 8-15-17',
        triangle91215: 'Triangolo 9-12-15'
      }
    }
  }),
  pt: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Calculadora de ternos pitagóricos',
      triangle345: 'Calculadora do triângulo 3 4 5',
      triangle51213: 'Calculadora do triângulo 5 12 13',
      similar: 'Calculadora de triângulos retângulos semelhantes'
    },
    introLines: {
      pythagorean: 'Verifique ou gere ternos de triângulos retângulos com números inteiros.',
      triangle345: 'Resolva o terno pitagórico mais comum e escale seus lados.',
      triangle51213: 'Escale um triângulo retângulo 5 12 13 e encontre lados, área e perímetro.',
      similar: 'Encontre o fator de escala e lados correspondentes ausentes em triângulos retângulos semelhantes.'
    },
    common: {
      openTool: 'Abrir ferramenta',
      calculate: 'Calcular',
      reset: 'Redefinir',
      result: 'Resultado',
      formula: 'Fórmula',
      calculatorMode: 'Modo da calculadora',
      diagramKey: 'Legenda do diagrama do triângulo',
      diagramScaleFactor: 'k = fator de escala',
      faqDescription: 'Respostas para perguntas comuns sobre triângulos retângulos.',
      example: 'Exemplo',
      sideA: 'Lado a',
      sideB: 'Lado b',
      hypotenuseC: 'Hipotenusa c',
      scaleFactorK: 'Fator de escala k',
      area: 'Área',
      perimeter: 'Perímetro',
      originalSide: 'Lado original',
      similarSide: 'Lado semelhante',
      scaleFactorResult: 'Fator de escala k',
      checkTriple: 'Verificar um terno pitagórico',
      generateTriple: 'Gerar um terno pitagórico',
      scale345: 'Escalar triângulo 3-4-5',
      scale51213: 'Escalar triângulo 5-12-13',
      findScaleFactor: 'Encontrar fator de escala',
      findSimilarSide: 'Encontrar lado semelhante ausente',
      findOriginalSide: 'Encontrar lado original',
      validTriple: 'Terno pitagórico válido',
      notTriple: 'Não é um terno pitagórico',
      positiveValues: 'Insira valores positivos.',
      hypotenuseLongest: 'A hipotenusa c deve ser o lado mais longo.',
      positiveIntegers: 'Insira números inteiros positivos.',
      mGreaterThanN: 'm deve ser maior que n.',
      positiveScaleFactor: 'Insira um fator de escala positivo.',
      originalAndScalePositive: 'O lado original e k devem ser maiores que 0.',
      similarAndScalePositive: 'O lado semelhante e k devem ser maiores que 0.',
      unableToCalculate: 'Não foi possível calcular.',
      knownValues: 'Valores conhecidos',
      finds: 'Encontra',
      mainFormula: 'Fórmula principal',
      bestFor: 'Melhor para',
      rightTriangleSideCalculator: 'Calculadora de lados do triângulo retângulo',
      pythagoreanTheoremCalculator: 'Calculadora do teorema de Pitágoras',
      specialRightTriangleCalculator: 'Calculadora de triângulos retângulos especiais',
      rightTriangleAreaCalculator: 'Calculadora de área do triângulo retângulo',
      rightTriangleAngleCalculator: 'Calculadora de ângulos do triângulo retângulo',
      rightTriangleProjectionCalculator: 'Calculadora de projeções do triângulo retângulo'
    },
    words: {
      formula: 'fórmula',
      diagram: 'diagrama',
      howTo: 'Como usar',
      examples: 'exemplos passo a passo',
      result: 'significado do resultado',
      sideRatio: 'razão dos lados',
      useCases: 'Quando usar',
      commonMistakes: 'erros comuns',
      related: 'Calculadoras relacionadas para',
      faqs: 'perguntas frequentes'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} mantém lados e variáveis claros para acompanhar o cálculo.',
      calculatorNote: 'Insira os valores conhecidos, escolha o modo correto e calcule.',
      summaryHeading: 'O que {title} resolve',
      summaryIntro: 'Use {title} para um cálculo focado de padrões de triângulos retângulos.',
      formulaPythagorean: 'Um terno pitagórico satisfaz a^2 + b^2 = c^2 com lados inteiros.',
      formulaScale: 'Um terno escalado multiplica cada lado pelo mesmo k.',
      formulaSimilar: 'Triângulos retângulos semelhantes mantêm ângulos iguais e o mesmo fator k.',
      diagramIntro: 'O diagrama mostra os rótulos de lados usados por {title}.',
      diagramCaption: 'Diagrama de triângulo retângulo para {title}.',
      resultPythagorean: 'O resultado indica se os valores formam um terno inteiro ou mostra um terno gerado.',
      resultScale: 'O resultado mostra lados escalados, área e perímetro.',
      resultSimilar: 'O resultado mostra o fator de escala ou o lado correspondente ausente.',
      ratioPythagorean: 'Todo terno válido mantém a : b : c com c como hipotenusa.',
      ratioScale: 'A razão dos lados fica fixa enquanto k muda o tamanho.',
      ratioSimilar: 'Lados correspondentes mantêm a mesma razão.',
      faqPurposeQuestion: 'Para que serve {title}?',
      faqFormulaQuestion: 'Qual fórmula {title} usa?',
      faqValuesQuestion: 'Quais valores devo inserir?',
      faqValuesAnswer: 'Insira valores positivos que correspondam ao modo escolhido.',
      chooseMode: 'Escolha verificar ou gerar.',
      enterValues: 'Insira valores positivos.',
      calculateResult: 'Clique em Calcular para ver o resultado.',
      resetFields: 'Use Redefinir para limpar os campos.',
      enterScale: 'Insira um fator de escala k positivo.',
      findScaled: 'Calcule lados, área e perímetro.',
      chooseSimilar: 'Escolha o modo que combina com o valor ausente.',
      enterSimilar: 'Insira lados correspondentes conhecidos ou k.',
      usePythagorean: 'Útil para verificar ou gerar ternos inteiros.',
      useScale: 'Útil para escalar um terno conhecido.',
      useSimilar: 'Útil para proporções e lados correspondentes.',
      mistakePythagorean: 'Confirme que c é a hipotenusa e que os valores são inteiros.',
      mistakeScale: 'Use sempre k positivo e escale todos os lados.',
      mistakeSimilar: 'Compare apenas lados correspondentes.'
    },
    home: {
      coreHeading: 'Calculadoras principais de triângulo retângulo',
      supportHeading: 'Padrões e ternos de triângulos retângulos',
      viewAllPythagoreanTriples: 'Ver todos os ternos pitagóricos',
      chartRows: {
        triangle345: 'Triângulo 3-4-5',
        triangle51213: 'Triângulo 5-12-13',
        triangle81517: 'Triângulo 8-15-17',
        triangle91215: 'Triângulo 9-12-15'
      }
    }
  }),
  bn: makeSimpleLocaleText({
    titles: {
      pythagorean: 'পাইথাগোরীয় ত্রয়ী ক্যালকুলেটর',
      triangle345: '3 4 5 ত্রিভুজ ক্যালকুলেটর',
      triangle51213: '5 12 13 ত্রিভুজ ক্যালকুলেটর',
      similar: 'সদৃশ সমকোণী ত্রিভুজ ক্যালকুলেটর'
    },
    introLines: {
      pythagorean: 'পূর্ণসংখ্যার সমকোণী ত্রিভুজ ত্রয়ী যাচাই বা তৈরি করুন।',
      triangle345: 'সবচেয়ে পরিচিত পাইথাগোরীয় ত্রয়ী সমাধান করুন এবং তার বাহু স্কেল করুন।',
      triangle51213: '5 12 13 সমকোণী ত্রিভুজ স্কেল করে বাহু, ক্ষেত্রফল ও পরিসীমা বের করুন।',
      similar: 'সদৃশ সমকোণী ত্রিভুজে স্কেল ফ্যাক্টর ও অনুপস্থিত মিল বাহু বের করুন।'
    },
    common: {
      openTool: 'টুল খুলুন',
      calculate: 'গণনা করুন',
      reset: 'রিসেট করুন',
      result: 'ফলাফল',
      formula: 'সূত্র',
      calculatorMode: 'ক্যালকুলেটর মোড',
      diagramKey: 'ত্রিভুজ চিত্রের সংকেত',
      diagramScaleFactor: 'k = স্কেল ফ্যাক্টর',
      faqDescription: 'সমকোণী ত্রিভুজ সমাধান সম্পর্কে সাধারণ প্রশ্নের উত্তর।',
      example: 'উদাহরণ',
      sideA: 'বাহু a',
      sideB: 'বাহু b',
      hypotenuseC: 'অতিভুজ c',
      scaleFactorK: 'স্কেল ফ্যাক্টর k',
      area: 'ক্ষেত্রফল',
      perimeter: 'পরিসীমা',
      originalSide: 'মূল বাহু',
      similarSide: 'সদৃশ বাহু',
      scaleFactorResult: 'স্কেল ফ্যাক্টর k',
      checkTriple: 'পাইথাগোরীয় ত্রয়ী যাচাই করুন',
      generateTriple: 'পাইথাগোরীয় ত্রয়ী তৈরি করুন',
      scale345: '3-4-5 ত্রিভুজ স্কেল করুন',
      scale51213: '5-12-13 ত্রিভুজ স্কেল করুন',
      findScaleFactor: 'স্কেল ফ্যাক্টর বের করুন',
      findSimilarSide: 'অনুপস্থিত সদৃশ বাহু বের করুন',
      findOriginalSide: 'মূল বাহু বের করুন',
      validTriple: 'সঠিক পাইথাগোরীয় ত্রয়ী',
      notTriple: 'পাইথাগোরীয় ত্রয়ী নয়',
      positiveValues: 'ধনাত্মক মান লিখুন।',
      hypotenuseLongest: 'অতিভুজ c সবচেয়ে বড় বাহু হওয়া উচিত।',
      positiveIntegers: 'ধনাত্মক পূর্ণসংখ্যা লিখুন।',
      mGreaterThanN: 'm অবশ্যই n থেকে বড় হতে হবে।',
      positiveScaleFactor: 'ধনাত্মক স্কেল ফ্যাক্টর লিখুন।',
      originalAndScalePositive: 'মূল বাহু এবং k, 0 থেকে বড় হতে হবে।',
      similarAndScalePositive: 'সদৃশ বাহু এবং k, 0 থেকে বড় হতে হবে।',
      unableToCalculate: 'গণনা করা যায়নি।',
      knownValues: 'জানা মান',
      finds: 'বের করে',
      mainFormula: 'মূল সূত্র',
      bestFor: 'এর জন্য ভালো',
      rightTriangleSideCalculator: 'সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর',
      pythagoreanTheoremCalculator: 'পাইথাগোরাস উপপাদ্য ক্যালকুলেটর',
      specialRightTriangleCalculator: 'বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর',
      rightTriangleAreaCalculator: 'সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর',
      rightTriangleAngleCalculator: 'সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর',
      rightTriangleProjectionCalculator: 'সমকোণী ত্রিভুজ প্রক্ষেপ ক্যালকুলেটর'
    },
    words: {
      formula: 'সূত্র',
      diagram: 'চিত্র',
      howTo: 'কীভাবে ব্যবহার করবেন',
      examples: 'ধাপে ধাপে উদাহরণ',
      result: 'ফলাফলের অর্থ',
      sideRatio: 'বাহুর অনুপাত',
      useCases: 'কখন ব্যবহার করবেন',
      commonMistakes: 'সাধারণ ভুল',
      related: 'সম্পর্কিত ক্যালকুলেটর',
      faqs: 'প্রশ্নোত্তর'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} বাহু ও চলক পরিষ্কার রাখে যাতে গণনা বোঝা সহজ হয়।',
      calculatorNote: 'জানা মান লিখুন, সঠিক মোড বেছে নিন এবং গণনা করুন।',
      summaryHeading: '{title} কী সমাধান করে',
      summaryIntro: '{title} ব্যবহার করুন যখন নির্দিষ্ট সমকোণী ত্রিভুজ প্যাটার্ন দরকার।',
      formulaPythagorean: 'পাইথাগোরীয় ত্রয়ী পূর্ণসংখ্যা বাহু দিয়ে a^2 + b^2 = c^2 পূরণ করে।',
      formulaScale: 'স্কেল করলে প্রতিটি বাহু একই k দ্বারা গুণ হয়।',
      formulaSimilar: 'সদৃশ সমকোণী ত্রিভুজে কোণ সমান থাকে এবং একই k ব্যবহৃত হয়।',
      diagramIntro: 'চিত্রটি {title}-এ ব্যবহৃত বাহুর লেবেল দেখায়।',
      diagramCaption: '{title}-এর জন্য সমকোণী ত্রিভুজ চিত্র।',
      resultPythagorean: 'ফলাফল জানায় মানগুলো পূর্ণসংখ্যার ত্রয়ী কি না, অথবা তৈরি ত্রয়ী দেখায়।',
      resultScale: 'ফলাফল স্কেল করা বাহু, ক্ষেত্রফল ও পরিসীমা দেখায়।',
      resultSimilar: 'ফলাফল স্কেল ফ্যাক্টর বা অনুপস্থিত মিল বাহু দেখায়।',
      ratioPythagorean: 'প্রতিটি সঠিক ত্রয়ীতে c অতিভুজসহ a : b : c থাকে।',
      ratioScale: 'k আকার বদলায়, কিন্তু বাহুর অনুপাত একই থাকে।',
      ratioSimilar: 'সংশ্লিষ্ট বাহুগুলোর অনুপাত একই থাকে।',
      faqPurposeQuestion: '{title} কী করে?',
      faqFormulaQuestion: '{title} কোন সূত্র ব্যবহার করে?',
      faqValuesQuestion: 'কোন মান লিখব?',
      faqValuesAnswer: 'নির্বাচিত মোড অনুযায়ী ধনাত্মক মান লিখুন।',
      chooseMode: 'যাচাই বা তৈরি করার মোড বেছে নিন।',
      enterValues: 'ধনাত্মক মান লিখুন।',
      calculateResult: 'ফলাফল দেখতে গণনা করুন।',
      resetFields: 'ক্ষেত্র পরিষ্কার করতে রিসেট করুন।',
      enterScale: 'ধনাত্মক স্কেল ফ্যাক্টর k লিখুন।',
      findScaled: 'বাহু, ক্ষেত্রফল ও পরিসীমা গণনা করুন।',
      chooseSimilar: 'অনুপস্থিত মান অনুযায়ী মোড বেছে নিন।',
      enterSimilar: 'জানা মিল বাহু বা k লিখুন।',
      usePythagorean: 'পূর্ণসংখ্যার ত্রয়ী যাচাই বা তৈরিতে উপযোগী।',
      useScale: 'পরিচিত ত্রয়ী স্কেল করতে উপযোগী।',
      useSimilar: 'অনুপাত ও মিল বাহুতে উপযোগী।',
      mistakePythagorean: 'c অতিভুজ এবং মান পূর্ণসংখ্যা কি না যাচাই করুন।',
      mistakeScale: 'সবসময় ধনাত্মক k ব্যবহার করুন এবং সব বাহু স্কেল করুন।',
      mistakeSimilar: 'শুধু সংশ্লিষ্ট বাহু তুলনা করুন।'
    },
    home: {
      coreHeading: 'মূল সমকোণী ত্রিভুজ ক্যালকুলেটর',
      supportHeading: 'সমকোণী ত্রিভুজ প্যাটার্ন ও ত্রয়ী',
      viewAllPythagoreanTriples: 'সব পাইথাগোরীয় ত্রয়ী দেখুন',
      chartRows: {
        triangle345: '3-4-5 ত্রিভুজ',
        triangle51213: '5-12-13 ত্রিভুজ',
        triangle81517: '8-15-17 ত্রিভুজ',
        triangle91215: '9-12-15 ত্রিভুজ'
      }
    }
  }),
  ja: makeSimpleLocaleText({
    titles: {
      pythagorean: 'ピタゴラス数トリプル計算機',
      triangle345: '3 4 5 三角形計算機',
      triangle51213: '5 12 13 三角形計算機',
      similar: '相似な直角三角形計算機'
    },
    introLines: {
      pythagorean: '整数の直角三角形トリプルを確認または生成します。',
      triangle345: '最もよく使われるピタゴラス数トリプルを解き、辺を拡大縮小します。',
      triangle51213: '5 12 13 の直角三角形を拡大縮小し、辺、面積、周長を求めます。',
      similar: '相似な直角三角形の倍率と対応する不足辺を求めます。'
    },
    common: {
      openTool: 'ツールを開く',
      calculate: '計算',
      reset: 'リセット',
      result: '結果',
      formula: '公式',
      calculatorMode: '計算モード',
      diagramKey: '三角形図の説明',
      diagramScaleFactor: 'k = 倍率',
      faqDescription: '直角三角形の計算に関するよくある質問への回答です。',
      example: '例',
      sideA: '辺 a',
      sideB: '辺 b',
      hypotenuseC: '斜辺 c',
      scaleFactorK: '倍率 k',
      area: '面積',
      perimeter: '周長',
      originalSide: '元の辺',
      similarSide: '相似な辺',
      scaleFactorResult: '倍率 k',
      checkTriple: 'ピタゴラス数トリプルを確認',
      generateTriple: 'ピタゴラス数トリプルを生成',
      scale345: '3-4-5 三角形を拡大縮小',
      scale51213: '5-12-13 三角形を拡大縮小',
      findScaleFactor: '倍率を求める',
      findSimilarSide: '不足する相似な辺を求める',
      findOriginalSide: '元の辺を求める',
      validTriple: '有効なピタゴラス数トリプル',
      notTriple: 'ピタゴラス数トリプルではありません',
      positiveValues: '正の値を入力してください。',
      hypotenuseLongest: '斜辺 c は最も長い辺である必要があります。',
      positiveIntegers: '正の整数を入力してください。',
      mGreaterThanN: 'm は n より大きい必要があります。',
      positiveScaleFactor: '正の倍率を入力してください。',
      originalAndScalePositive: '元の辺と k は 0 より大きい必要があります。',
      similarAndScalePositive: '相似な辺と k は 0 より大きい必要があります。',
      unableToCalculate: '計算できませんでした。',
      knownValues: '既知の値',
      finds: '求める値',
      mainFormula: '主な公式',
      bestFor: '適した用途',
      rightTriangleSideCalculator: '直角三角形の辺計算機',
      pythagoreanTheoremCalculator: 'ピタゴラスの定理計算機',
      specialRightTriangleCalculator: '特殊直角三角形計算機',
      rightTriangleAreaCalculator: '直角三角形の面積計算機',
      rightTriangleAngleCalculator: '直角三角形の角度計算機',
      rightTriangleProjectionCalculator: '直角三角形の射影計算機'
    },
    words: {
      formula: '公式',
      diagram: '図',
      howTo: '使い方',
      examples: '手順例',
      result: '結果の意味',
      sideRatio: '辺の比',
      useCases: '使う場面',
      commonMistakes: 'よくある間違い',
      related: '関連計算機',
      faqs: 'よくある質問'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} は辺の記号と変数をわかりやすく保ちます。',
      calculatorNote: '既知の値を入力し、適切なモードを選んで計算します。',
      summaryHeading: '{title} で求められること',
      summaryIntro: '{title} は直角三角形の特定パターンを集中して計算します。',
      formulaPythagorean: 'ピタゴラス数トリプルは整数の辺で a^2 + b^2 = c^2 を満たします。',
      formulaScale: '拡大縮小では各辺を同じ k で掛けます。',
      formulaSimilar: '相似な直角三角形では角が同じで、対応する辺は同じ k を使います。',
      diagramIntro: '図は {title} で使う辺のラベルを示します。',
      diagramCaption: '{title} の直角三角形図。',
      resultPythagorean: '結果は整数トリプルかどうか、または生成されたトリプルを示します。',
      resultScale: '結果は拡大縮小後の辺、面積、周長を示します。',
      resultSimilar: '結果は倍率または不足する対応辺を示します。',
      ratioPythagorean: '有効なトリプルは c を斜辺として a : b : c を保ちます。',
      ratioScale: 'k が大きさを変え、辺の比は一定です。',
      ratioSimilar: '対応する辺は同じ比を保ちます。',
      faqPurposeQuestion: '{title} は何をしますか？',
      faqFormulaQuestion: '{title} はどの公式を使いますか？',
      faqValuesQuestion: 'どの値を入力しますか？',
      faqValuesAnswer: '選択したモードに合う正の値を入力してください。',
      chooseMode: '確認モードまたは生成モードを選びます。',
      enterValues: '正の値を入力します。',
      calculateResult: '計算を押して結果を表示します。',
      resetFields: 'リセットで入力を消します。',
      enterScale: '正の倍率 k を入力します。',
      findScaled: '辺、面積、周長を計算します。',
      chooseSimilar: '不足している値に合うモードを選びます。',
      enterSimilar: '既知の対応辺または k を入力します。',
      usePythagorean: '整数トリプルの確認や生成に便利です。',
      useScale: '既知のトリプルを拡大縮小する時に便利です。',
      useSimilar: '比例と対応辺の計算に便利です。',
      mistakePythagorean: 'c が斜辺で、値が整数であることを確認してください。',
      mistakeScale: '正の k を使い、すべての辺を同じように拡大縮小してください。',
      mistakeSimilar: '対応する辺だけを比較してください。'
    },
    home: {
      coreHeading: '主要な直角三角形計算機',
      supportHeading: '直角三角形のパターンとトリプル',
      viewAllPythagoreanTriples: 'すべてのピタゴラス数トリプルを見る',
      chartRows: {
        triangle345: '3-4-5 三角形',
        triangle51213: '5-12-13 三角形',
        triangle81517: '8-15-17 三角形',
        triangle91215: '9-12-15 三角形'
      }
    }
  }),
  ko: makeSimpleLocaleText({
    titles: {
      pythagorean: '피타고라스 세 수 계산기',
      triangle345: '3 4 5 삼각형 계산기',
      triangle51213: '5 12 13 삼각형 계산기',
      similar: '닮은 직각삼각형 계산기'
    },
    introLines: {
      pythagorean: '정수 직각삼각형 세 수를 확인하거나 생성합니다.',
      triangle345: '가장 흔한 피타고라스 세 수를 풀고 변을 스케일합니다.',
      triangle51213: '5 12 13 직각삼각형을 스케일하고 변, 넓이, 둘레를 구합니다.',
      similar: '닮은 직각삼각형에서 배율과 빠진 대응변을 찾습니다.'
    },
    common: {
      openTool: '도구 열기',
      calculate: '계산',
      reset: '초기화',
      result: '결과',
      formula: '공식',
      calculatorMode: '계산 모드',
      diagramKey: '삼각형 그림 설명',
      diagramScaleFactor: 'k = 배율',
      faqDescription: '직각삼각형 풀이에 대한 자주 묻는 질문입니다.',
      example: '예',
      sideA: '변 a',
      sideB: '변 b',
      hypotenuseC: '빗변 c',
      scaleFactorK: '배율 k',
      area: '넓이',
      perimeter: '둘레',
      originalSide: '원래 변',
      similarSide: '닮은 변',
      scaleFactorResult: '배율 k',
      checkTriple: '피타고라스 세 수 확인',
      generateTriple: '피타고라스 세 수 생성',
      scale345: '3-4-5 삼각형 스케일',
      scale51213: '5-12-13 삼각형 스케일',
      findScaleFactor: '배율 찾기',
      findSimilarSide: '빠진 닮은 변 찾기',
      findOriginalSide: '원래 변 찾기',
      validTriple: '올바른 피타고라스 세 수',
      notTriple: '피타고라스 세 수가 아닙니다',
      positiveValues: '양수 값을 입력하세요.',
      hypotenuseLongest: '빗변 c는 가장 긴 변이어야 합니다.',
      positiveIntegers: '양의 정수를 입력하세요.',
      mGreaterThanN: 'm은 n보다 커야 합니다.',
      positiveScaleFactor: '양수 배율을 입력하세요.',
      originalAndScalePositive: '원래 변과 k는 0보다 커야 합니다.',
      similarAndScalePositive: '닮은 변과 k는 0보다 커야 합니다.',
      unableToCalculate: '계산할 수 없습니다.',
      knownValues: '알려진 값',
      finds: '구하는 값',
      mainFormula: '주요 공식',
      bestFor: '적합한 경우',
      rightTriangleSideCalculator: '직각삼각형 변 계산기',
      pythagoreanTheoremCalculator: '피타고라스 정리 계산기',
      specialRightTriangleCalculator: '특수 직각삼각형 계산기',
      rightTriangleAreaCalculator: '직각삼각형 넓이 계산기',
      rightTriangleAngleCalculator: '직각삼각형 각도 계산기',
      rightTriangleProjectionCalculator: '직각삼각형 사영 계산기'
    },
    words: {
      formula: '공식',
      diagram: '그림',
      howTo: '사용 방법',
      examples: '단계별 예제',
      result: '결과 의미',
      sideRatio: '변의 비',
      useCases: '사용할 때',
      commonMistakes: '흔한 실수',
      related: '관련 계산기',
      faqs: '자주 묻는 질문'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title}는 변 이름과 변수를 명확하게 보여 줍니다.',
      calculatorNote: '알려진 값을 입력하고 알맞은 모드를 선택한 뒤 계산하세요.',
      summaryHeading: '{title}가 푸는 것',
      summaryIntro: '{title}는 직각삼각형 패턴을 집중적으로 계산합니다.',
      formulaPythagorean: '피타고라스 세 수는 정수 변으로 a^2 + b^2 = c^2를 만족합니다.',
      formulaScale: '스케일할 때 모든 변에 같은 k를 곱합니다.',
      formulaSimilar: '닮은 직각삼각형은 각이 같고 대응변은 같은 k를 사용합니다.',
      diagramIntro: '그림은 {title}에서 쓰는 변 표시를 보여 줍니다.',
      diagramCaption: '{title}의 직각삼각형 그림.',
      resultPythagorean: '결과는 값이 정수 세 수인지 또는 생성된 세 수를 보여 줍니다.',
      resultScale: '결과는 스케일된 변, 넓이, 둘레를 보여 줍니다.',
      resultSimilar: '결과는 배율 또는 빠진 대응변을 보여 줍니다.',
      ratioPythagorean: '올바른 세 수는 c를 빗변으로 하여 a : b : c를 유지합니다.',
      ratioScale: 'k가 크기를 바꾸고 변의 비는 그대로입니다.',
      ratioSimilar: '대응변은 같은 비를 유지합니다.',
      faqPurposeQuestion: '{title}는 무엇을 하나요?',
      faqFormulaQuestion: '{title}는 어떤 공식을 쓰나요?',
      faqValuesQuestion: '어떤 값을 입력해야 하나요?',
      faqValuesAnswer: '선택한 모드에 맞는 양수 값을 입력하세요.',
      chooseMode: '확인 또는 생성 모드를 선택하세요.',
      enterValues: '양수 값을 입력하세요.',
      calculateResult: '계산을 눌러 결과를 확인하세요.',
      resetFields: '초기화로 입력을 지우세요.',
      enterScale: '양수 배율 k를 입력하세요.',
      findScaled: '변, 넓이, 둘레를 계산하세요.',
      chooseSimilar: '빠진 값에 맞는 모드를 선택하세요.',
      enterSimilar: '알려진 대응변 또는 k를 입력하세요.',
      usePythagorean: '정수 세 수 확인과 생성에 유용합니다.',
      useScale: '알려진 세 수를 스케일할 때 유용합니다.',
      useSimilar: '비례와 대응변 계산에 유용합니다.',
      mistakePythagorean: 'c가 빗변이고 값이 정수인지 확인하세요.',
      mistakeScale: '항상 양수 k를 사용하고 모든 변을 스케일하세요.',
      mistakeSimilar: '대응하는 변끼리만 비교하세요.'
    },
    home: {
      coreHeading: '핵심 직각삼각형 계산기',
      supportHeading: '직각삼각형 패턴과 세 수',
      viewAllPythagoreanTriples: '모든 피타고라스 세 수 보기',
      chartRows: {
        triangle345: '3-4-5 삼각형',
        triangle51213: '5-12-13 삼각형',
        triangle81517: '8-15-17 삼각형',
        triangle91215: '9-12-15 삼각형'
      }
    }
  }),
  ms: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Kalkulator Tripel Pythagoras',
      triangle345: 'Kalkulator Segi Tiga 3 4 5',
      triangle51213: 'Kalkulator Segi Tiga 5 12 13',
      similar: 'Kalkulator Segi Tiga Tepat Serupa'
    },
    introLines: {
      pythagorean: 'Semak atau jana tripel segi tiga tepat bernombor bulat.',
      triangle345: 'Selesaikan tripel Pythagoras paling biasa dan skalakan sisinya.',
      triangle51213: 'Skalakan segi tiga tepat 5 12 13 dan cari sisi, luas, serta perimeter.',
      similar: 'Cari faktor skala dan sisi sepadan yang hilang dalam segi tiga tepat serupa.'
    },
    common: {
      openTool: 'Buka alat',
      calculate: 'Kira',
      reset: 'Tetapkan semula',
      result: 'Keputusan',
      formula: 'Formula',
      calculatorMode: 'Mod kalkulator',
      diagramKey: 'Kunci rajah segi tiga',
      diagramScaleFactor: 'k = faktor skala',
      faqDescription: 'Jawapan kepada soalan lazim tentang segi tiga tepat.',
      example: 'Contoh',
      sideA: 'Sisi a',
      sideB: 'Sisi b',
      hypotenuseC: 'Hipotenus c',
      scaleFactorK: 'Faktor skala k',
      area: 'Luas',
      perimeter: 'Perimeter',
      originalSide: 'Sisi asal',
      similarSide: 'Sisi serupa',
      scaleFactorResult: 'Faktor skala k',
      checkTriple: 'Semak tripel Pythagoras',
      generateTriple: 'Jana tripel Pythagoras',
      scale345: 'Skalakan segi tiga 3-4-5',
      scale51213: 'Skalakan segi tiga 5-12-13',
      findScaleFactor: 'Cari faktor skala',
      findSimilarSide: 'Cari sisi serupa yang hilang',
      findOriginalSide: 'Cari sisi asal',
      validTriple: 'Tripel Pythagoras sah',
      notTriple: 'Bukan tripel Pythagoras',
      positiveValues: 'Sila masukkan nilai positif.',
      hypotenuseLongest: 'Hipotenus c mestilah sisi paling panjang.',
      positiveIntegers: 'Masukkan nombor bulat positif.',
      mGreaterThanN: 'm mesti lebih besar daripada n.',
      positiveScaleFactor: 'Masukkan faktor skala positif.',
      originalAndScalePositive: 'Sisi asal dan k mesti lebih besar daripada 0.',
      similarAndScalePositive: 'Sisi serupa dan k mesti lebih besar daripada 0.',
      unableToCalculate: 'Tidak dapat mengira.',
      knownValues: 'Nilai diketahui',
      finds: 'Mencari',
      mainFormula: 'Formula utama',
      bestFor: 'Sesuai untuk',
      rightTriangleSideCalculator: 'Kalkulator sisi segi tiga tepat',
      pythagoreanTheoremCalculator: 'Kalkulator teorem Pythagoras',
      specialRightTriangleCalculator: 'Kalkulator segi tiga tepat khas',
      rightTriangleAreaCalculator: 'Kalkulator luas segi tiga tepat',
      rightTriangleAngleCalculator: 'Kalkulator sudut segi tiga tepat',
      rightTriangleProjectionCalculator: 'Kalkulator unjuran segi tiga tepat'
    },
    words: {
      formula: 'formula',
      diagram: 'rajah',
      howTo: 'Cara menggunakan',
      examples: 'contoh langkah demi langkah',
      result: 'maksud keputusan',
      sideRatio: 'nisbah sisi',
      useCases: 'Bila menggunakan',
      commonMistakes: 'kesilapan lazim',
      related: 'Kalkulator berkaitan untuk',
      faqs: 'soalan lazim'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} memastikan label sisi dan pemboleh ubah mudah diikuti.',
      calculatorNote: 'Masukkan nilai diketahui, pilih mod yang betul, kemudian kira.',
      summaryHeading: 'Perkara yang diselesaikan oleh {title}',
      summaryIntro: 'Gunakan {title} untuk kiraan pola segi tiga tepat yang khusus.',
      formulaPythagorean: 'Tripel Pythagoras memenuhi a^2 + b^2 = c^2 dengan panjang sisi integer.',
      formulaScale: 'Tripel berskala mendarab setiap sisi dengan k yang sama.',
      formulaSimilar: 'Segi tiga tepat serupa mengekalkan sudut yang sama dan faktor k yang sama.',
      diagramIntro: 'Rajah menunjukkan label sisi yang digunakan oleh {title}.',
      diagramCaption: 'Rajah segi tiga tepat untuk {title}.',
      resultPythagorean: 'Keputusan menunjukkan sama ada nilai membentuk tripel integer atau memaparkan tripel yang dijana.',
      resultScale: 'Keputusan menunjukkan sisi berskala, luas dan perimeter.',
      resultSimilar: 'Keputusan menunjukkan faktor skala atau sisi sepadan yang hilang.',
      ratioPythagorean: 'Setiap tripel sah mengekalkan a : b : c dengan c sebagai hipotenus.',
      ratioScale: 'Nisbah sisi kekal tetap sementara k mengubah saiz.',
      ratioSimilar: 'Sisi sepadan mengekalkan nisbah yang sama.',
      faqPurposeQuestion: 'Apakah fungsi {title}?',
      faqFormulaQuestion: 'Formula apakah yang digunakan oleh {title}?',
      faqValuesQuestion: 'Nilai apakah yang perlu dimasukkan?',
      faqValuesAnswer: 'Masukkan nilai positif yang sepadan dengan mod pilihan.',
      chooseMode: 'Pilih mod semak atau jana.',
      enterValues: 'Masukkan nilai positif.',
      calculateResult: 'Tekan Kira untuk melihat keputusan.',
      resetFields: 'Gunakan Tetapkan semula untuk mengosongkan medan.',
      enterScale: 'Masukkan faktor skala k yang positif.',
      findScaled: 'Kira sisi, luas dan perimeter.',
      chooseSimilar: 'Pilih mod yang sepadan dengan nilai hilang.',
      enterSimilar: 'Masukkan sisi sepadan diketahui atau k.',
      usePythagorean: 'Berguna untuk menyemak atau menjana tripel integer.',
      useScale: 'Berguna untuk menskalakan tripel yang diketahui.',
      useSimilar: 'Berguna untuk nisbah dan sisi sepadan.',
      mistakePythagorean: 'Pastikan c ialah hipotenus dan nilai ialah integer.',
      mistakeScale: 'Gunakan k positif dan skalakan semua sisi.',
      mistakeSimilar: 'Bandingkan hanya sisi yang sepadan.'
    },
    home: {
      coreHeading: 'Kalkulator utama segi tiga tepat',
      supportHeading: 'Pola dan tripel segi tiga tepat',
      viewAllPythagoreanTriples: 'Lihat semua tripel Pythagoras',
      chartRows: {
        triangle345: 'Segi tiga 3-4-5',
        triangle51213: 'Segi tiga 5-12-13',
        triangle81517: 'Segi tiga 8-15-17',
        triangle91215: 'Segi tiga 9-12-15'
      }
    }
  }),
  pl: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Kalkulator trójek pitagorejskich',
      triangle345: 'Kalkulator trójkąta 3 4 5',
      triangle51213: 'Kalkulator trójkąta 5 12 13',
      similar: 'Kalkulator podobnych trójkątów prostokątnych'
    },
    introLines: {
      pythagorean: 'Sprawdzaj lub generuj całkowitoliczbowe trójki dla trójkątów prostokątnych.',
      triangle345: 'Rozwiąż najczęstszą trójkę pitagorejską i skaluj jej boki.',
      triangle51213: 'Skaluj trójkąt prostokątny 5 12 13 i znajdź boki, pole oraz obwód.',
      similar: 'Znajdź współczynnik skali i brakujące odpowiadające boki w podobnych trójkątach prostokątnych.'
    },
    common: {
      openTool: 'Otwórz narzędzie',
      calculate: 'Oblicz',
      reset: 'Resetuj',
      result: 'Wynik',
      formula: 'Wzór',
      calculatorMode: 'Tryb kalkulatora',
      diagramKey: 'Legenda diagramu trójkąta',
      diagramScaleFactor: 'k = współczynnik skali',
      faqDescription: 'Odpowiedzi na częste pytania o trójkąty prostokątne.',
      example: 'Przykład',
      sideA: 'Bok a',
      sideB: 'Bok b',
      hypotenuseC: 'Przeciwprostokątna c',
      scaleFactorK: 'Współczynnik skali k',
      area: 'Pole',
      perimeter: 'Obwód',
      originalSide: 'Bok oryginalny',
      similarSide: 'Bok podobny',
      scaleFactorResult: 'Współczynnik skali k',
      checkTriple: 'Sprawdź trójkę pitagorejską',
      generateTriple: 'Wygeneruj trójkę pitagorejską',
      scale345: 'Skaluj trójkąt 3-4-5',
      scale51213: 'Skaluj trójkąt 5-12-13',
      findScaleFactor: 'Znajdź współczynnik skali',
      findSimilarSide: 'Znajdź brakujący bok podobny',
      findOriginalSide: 'Znajdź bok oryginalny',
      validTriple: 'Poprawna trójka pitagorejska',
      notTriple: 'To nie jest trójka pitagorejska',
      positiveValues: 'Wpisz wartości dodatnie.',
      hypotenuseLongest: 'Przeciwprostokątna c powinna być najdłuższym bokiem.',
      positiveIntegers: 'Wpisz dodatnie liczby całkowite.',
      mGreaterThanN: 'm musi być większe niż n.',
      positiveScaleFactor: 'Wpisz dodatni współczynnik skali.',
      originalAndScalePositive: 'Bok oryginalny i k muszą być większe od 0.',
      similarAndScalePositive: 'Bok podobny i k muszą być większe od 0.',
      unableToCalculate: 'Nie można obliczyć.',
      knownValues: 'Znane wartości',
      finds: 'Znajduje',
      mainFormula: 'Główny wzór',
      bestFor: 'Najlepsze dla',
      rightTriangleSideCalculator: 'Kalkulator boków trójkąta prostokątnego',
      pythagoreanTheoremCalculator: 'Kalkulator twierdzenia Pitagorasa',
      specialRightTriangleCalculator: 'Kalkulator specjalnych trójkątów prostokątnych',
      rightTriangleAreaCalculator: 'Kalkulator pola trójkąta prostokątnego',
      rightTriangleAngleCalculator: 'Kalkulator kątów trójkąta prostokątnego',
      rightTriangleProjectionCalculator: 'Kalkulator rzutów trójkąta prostokątnego'
    },
    words: {
      formula: 'wzór',
      diagram: 'diagram',
      howTo: 'Jak używać',
      examples: 'przykłady krok po kroku',
      result: 'znaczenie wyniku',
      sideRatio: 'stosunek boków',
      useCases: 'Kiedy używać',
      commonMistakes: 'częste błędy',
      related: 'Powiązane kalkulatory dla',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} zachowuje jasne oznaczenia boków i zmiennych.',
      calculatorNote: 'Wpisz znane wartości, wybierz właściwy tryb i oblicz.',
      summaryHeading: 'Co rozwiązuje {title}',
      summaryIntro: 'Użyj {title} do ukierunkowanych obliczeń wzorów trójkątów prostokątnych.',
      formulaPythagorean: 'Trójka pitagorejska spełnia a^2 + b^2 = c^2 dla całkowitych boków.',
      formulaScale: 'Skalowana trójka mnoży każdy bok przez ten sam k.',
      formulaSimilar: 'Podobne trójkąty prostokątne mają równe kąty i ten sam współczynnik k.',
      diagramIntro: 'Diagram pokazuje oznaczenia boków używane przez {title}.',
      diagramCaption: 'Diagram trójkąta prostokątnego dla {title}.',
      resultPythagorean: 'Wynik pokazuje, czy wartości tworzą trójkę całkowitą, albo podaje wygenerowaną trójkę.',
      resultScale: 'Wynik pokazuje przeskalowane boki, pole i obwód.',
      resultSimilar: 'Wynik pokazuje współczynnik skali lub brakujący bok odpowiadający.',
      ratioPythagorean: 'Każda poprawna trójka zachowuje a : b : c z c jako przeciwprostokątną.',
      ratioScale: 'Stosunek boków pozostaje stały, a k zmienia rozmiar.',
      ratioSimilar: 'Odpowiadające boki zachowują ten sam stosunek.',
      faqPurposeQuestion: 'Co robi {title}?',
      faqFormulaQuestion: 'Jakiego wzoru używa {title}?',
      faqValuesQuestion: 'Jakie wartości wpisać?',
      faqValuesAnswer: 'Wpisz wartości dodatnie zgodne z wybranym trybem.',
      chooseMode: 'Wybierz tryb sprawdzania lub generowania.',
      enterValues: 'Wpisz wartości dodatnie.',
      calculateResult: 'Kliknij Oblicz, aby zobaczyć wynik.',
      resetFields: 'Użyj Resetuj, aby wyczyścić pola.',
      enterScale: 'Wpisz dodatni współczynnik skali k.',
      findScaled: 'Oblicz boki, pole i obwód.',
      chooseSimilar: 'Wybierz tryb zgodny z brakującą wartością.',
      enterSimilar: 'Wpisz znane odpowiadające boki lub k.',
      usePythagorean: 'Przydatne do sprawdzania lub generowania trójek całkowitych.',
      useScale: 'Przydatne do skalowania znanej trójki.',
      useSimilar: 'Przydatne przy proporcjach i bokach odpowiadających.',
      mistakePythagorean: 'Upewnij się, że c jest przeciwprostokątną, a wartości są całkowite.',
      mistakeScale: 'Używaj dodatniego k i skaluj wszystkie boki.',
      mistakeSimilar: 'Porównuj tylko odpowiadające boki.'
    },
    home: {
      coreHeading: 'Główne kalkulatory trójkątów prostokątnych',
      supportHeading: 'Wzory i trójki trójkątów prostokątnych',
      viewAllPythagoreanTriples: 'Zobacz wszystkie trójki pitagorejskie',
      chartRows: {
        triangle345: 'Trójkąt 3-4-5',
        triangle51213: 'Trójkąt 5-12-13',
        triangle81517: 'Trójkąt 8-15-17',
        triangle91215: 'Trójkąt 9-12-15'
      }
    }
  }),
  id: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Kalkulator Tripel Pythagoras',
      triangle345: 'Kalkulator Segitiga 3 4 5',
      triangle51213: 'Kalkulator Segitiga 5 12 13',
      similar: 'Kalkulator Segitiga Siku-siku Sebangun'
    },
    introLines: {
      pythagorean: 'Periksa atau buat tripel segitiga siku-siku bilangan bulat.',
      triangle345: 'Selesaikan tripel Pythagoras paling umum dan skalakan sisinya.',
      triangle51213: 'Skalakan segitiga siku-siku 5 12 13 dan temukan sisi, luas, serta keliling.',
      similar: 'Temukan faktor skala dan sisi pasangan yang hilang pada segitiga siku-siku sebangun.'
    },
    common: {
      openTool: 'Buka alat',
      calculate: 'Hitung',
      reset: 'Atur ulang',
      result: 'Hasil',
      formula: 'Rumus',
      calculatorMode: 'Mode kalkulator',
      diagramKey: 'Kunci diagram segitiga',
      diagramScaleFactor: 'k = faktor skala',
      faqDescription: 'Jawaban untuk pertanyaan umum tentang segitiga siku-siku.',
      example: 'Contoh',
      sideA: 'Sisi a',
      sideB: 'Sisi b',
      hypotenuseC: 'Hipotenusa c',
      scaleFactorK: 'Faktor skala k',
      area: 'Luas',
      perimeter: 'Keliling',
      originalSide: 'Sisi asal',
      similarSide: 'Sisi sebangun',
      scaleFactorResult: 'Faktor skala k',
      checkTriple: 'Periksa tripel Pythagoras',
      generateTriple: 'Buat tripel Pythagoras',
      scale345: 'Skalakan segitiga 3-4-5',
      scale51213: 'Skalakan segitiga 5-12-13',
      findScaleFactor: 'Temukan faktor skala',
      findSimilarSide: 'Temukan sisi sebangun yang hilang',
      findOriginalSide: 'Temukan sisi asal',
      validTriple: 'Tripel Pythagoras valid',
      notTriple: 'Bukan tripel Pythagoras',
      positiveValues: 'Masukkan nilai positif.',
      hypotenuseLongest: 'Hipotenusa c harus menjadi sisi terpanjang.',
      positiveIntegers: 'Masukkan bilangan bulat positif.',
      mGreaterThanN: 'm harus lebih besar dari n.',
      positiveScaleFactor: 'Masukkan faktor skala positif.',
      originalAndScalePositive: 'Sisi asal dan k harus lebih besar dari 0.',
      similarAndScalePositive: 'Sisi sebangun dan k harus lebih besar dari 0.',
      unableToCalculate: 'Tidak dapat menghitung.',
      knownValues: 'Nilai diketahui',
      finds: 'Menemukan',
      mainFormula: 'Rumus utama',
      bestFor: 'Terbaik untuk',
      rightTriangleSideCalculator: 'Kalkulator sisi segitiga siku-siku',
      pythagoreanTheoremCalculator: 'Kalkulator teorema Pythagoras',
      specialRightTriangleCalculator: 'Kalkulator segitiga siku-siku khusus',
      rightTriangleAreaCalculator: 'Kalkulator luas segitiga siku-siku',
      rightTriangleAngleCalculator: 'Kalkulator sudut segitiga siku-siku',
      rightTriangleProjectionCalculator: 'Kalkulator proyeksi segitiga siku-siku'
    },
    words: {
      formula: 'rumus',
      diagram: 'diagram',
      howTo: 'Cara menggunakan',
      examples: 'contoh langkah demi langkah',
      result: 'arti hasil',
      sideRatio: 'rasio sisi',
      useCases: 'Kapan menggunakan',
      commonMistakes: 'kesalahan umum',
      related: 'Kalkulator terkait untuk',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} menjaga label sisi dan variabel tetap mudah diikuti.',
      calculatorNote: 'Masukkan nilai yang diketahui, pilih mode yang sesuai, lalu hitung.',
      summaryHeading: 'Apa yang diselesaikan {title}',
      summaryIntro: 'Gunakan {title} untuk perhitungan pola segitiga siku-siku yang fokus.',
      formulaPythagorean: 'Tripel Pythagoras memenuhi a^2 + b^2 = c^2 dengan panjang sisi bilangan bulat.',
      formulaScale: 'Tripel berskala mengalikan setiap sisi dengan k yang sama.',
      formulaSimilar: 'Segitiga siku-siku sebangun mempertahankan sudut yang sama dan faktor k yang sama.',
      diagramIntro: 'Diagram menunjukkan label sisi yang digunakan oleh {title}.',
      diagramCaption: 'Diagram segitiga siku-siku untuk {title}.',
      resultPythagorean: 'Hasil menunjukkan apakah nilai membentuk tripel bilangan bulat atau menampilkan tripel yang dibuat.',
      resultScale: 'Hasil menunjukkan sisi berskala, luas, dan keliling.',
      resultSimilar: 'Hasil menunjukkan faktor skala atau sisi pasangan yang hilang.',
      ratioPythagorean: 'Setiap tripel valid mempertahankan a : b : c dengan c sebagai hipotenusa.',
      ratioScale: 'Rasio sisi tetap sama saat k mengubah ukuran.',
      ratioSimilar: 'Sisi pasangan mempertahankan rasio yang sama.',
      faqPurposeQuestion: 'Apa fungsi {title}?',
      faqFormulaQuestion: 'Rumus apa yang digunakan {title}?',
      faqValuesQuestion: 'Nilai apa yang harus dimasukkan?',
      faqValuesAnswer: 'Masukkan nilai positif yang cocok dengan mode pilihan.',
      chooseMode: 'Pilih mode periksa atau buat.',
      enterValues: 'Masukkan nilai positif.',
      calculateResult: 'Klik Hitung untuk melihat hasil.',
      resetFields: 'Gunakan Atur ulang untuk mengosongkan kolom.',
      enterScale: 'Masukkan faktor skala k positif.',
      findScaled: 'Hitung sisi, luas, dan keliling.',
      chooseSimilar: 'Pilih mode yang sesuai dengan nilai hilang.',
      enterSimilar: 'Masukkan sisi pasangan yang diketahui atau k.',
      usePythagorean: 'Berguna untuk memeriksa atau membuat tripel bilangan bulat.',
      useScale: 'Berguna untuk menskalakan tripel yang diketahui.',
      useSimilar: 'Berguna untuk proporsi dan sisi pasangan.',
      mistakePythagorean: 'Pastikan c adalah hipotenusa dan nilainya bilangan bulat.',
      mistakeScale: 'Gunakan k positif dan skalakan semua sisi.',
      mistakeSimilar: 'Bandingkan hanya sisi yang berpasangan.'
    },
    home: {
      coreHeading: 'Kalkulator inti segitiga siku-siku',
      supportHeading: 'Pola dan tripel segitiga siku-siku',
      viewAllPythagoreanTriples: 'Lihat semua tripel Pythagoras',
      chartRows: {
        triangle345: 'Segitiga 3-4-5',
        triangle51213: 'Segitiga 5-12-13',
        triangle81517: 'Segitiga 8-15-17',
        triangle91215: 'Segitiga 9-12-15'
      }
    }
  }),
  ar: makeSimpleLocaleText({
    titles: {
      pythagorean: 'حاسبة الثلاثيات الفيثاغورية',
      triangle345: 'حاسبة مثلث 3 4 5',
      triangle51213: 'حاسبة مثلث 5 12 13',
      similar: 'حاسبة المثلثات القائمة المتشابهة'
    },
    introLines: {
      pythagorean: 'تحقق من ثلاثيات المثلث القائم ذات الأعداد الصحيحة أو أنشئها.',
      triangle345: 'حل أشهر ثلاثية فيثاغورية وقم بتكبير أو تصغير أضلاعها.',
      triangle51213: 'قم بتكبير أو تصغير مثلث قائم 5 12 13 وابحث عن الأضلاع والمساحة والمحيط.',
      similar: 'ابحث عن عامل القياس والأضلاع المتناظرة المفقودة في المثلثات القائمة المتشابهة.'
    },
    common: {
      openTool: 'افتح الأداة',
      calculate: 'احسب',
      reset: 'إعادة تعيين',
      result: 'النتيجة',
      formula: 'الصيغة',
      calculatorMode: 'وضع الحاسبة',
      diagramKey: 'مفتاح مخطط المثلث',
      diagramScaleFactor: 'k = عامل القياس',
      faqDescription: 'إجابات عن الأسئلة الشائعة حول حل المثلثات القائمة.',
      example: 'مثال',
      sideA: 'الضلع a',
      sideB: 'الضلع b',
      hypotenuseC: 'الوتر c',
      scaleFactorK: 'عامل القياس k',
      area: 'المساحة',
      perimeter: 'المحيط',
      originalSide: 'الضلع الأصلي',
      similarSide: 'الضلع المتشابه',
      scaleFactorResult: 'عامل القياس k',
      checkTriple: 'تحقق من ثلاثية فيثاغورية',
      generateTriple: 'أنشئ ثلاثية فيثاغورية',
      scale345: 'تكبير أو تصغير مثلث 3-4-5',
      scale51213: 'تكبير أو تصغير مثلث 5-12-13',
      findScaleFactor: 'ابحث عن عامل القياس',
      findSimilarSide: 'ابحث عن الضلع المتشابه المفقود',
      findOriginalSide: 'ابحث عن الضلع الأصلي',
      validTriple: 'ثلاثية فيثاغورية صحيحة',
      notTriple: 'ليست ثلاثية فيثاغورية',
      positiveValues: 'يرجى إدخال قيم موجبة.',
      hypotenuseLongest: 'يجب أن يكون الوتر c هو الضلع الأطول.',
      positiveIntegers: 'أدخل أعدادا صحيحة موجبة.',
      mGreaterThanN: 'يجب أن يكون m أكبر من n.',
      positiveScaleFactor: 'يرجى إدخال عامل قياس موجب.',
      originalAndScalePositive: 'يجب أن يكون الضلع الأصلي و k أكبر من 0.',
      similarAndScalePositive: 'يجب أن يكون الضلع المتشابه و k أكبر من 0.',
      unableToCalculate: 'تعذر الحساب.',
      knownValues: 'القيم المعروفة',
      finds: 'يعثر على',
      mainFormula: 'الصيغة الرئيسية',
      bestFor: 'مناسب لـ',
      rightTriangleSideCalculator: 'حاسبة أضلاع المثلث القائم',
      pythagoreanTheoremCalculator: 'حاسبة نظرية فيثاغورس',
      specialRightTriangleCalculator: 'حاسبة المثلثات القائمة الخاصة',
      rightTriangleAreaCalculator: 'حاسبة مساحة المثلث القائم',
      rightTriangleAngleCalculator: 'حاسبة زوايا المثلث القائم',
      rightTriangleProjectionCalculator: 'حاسبة إسقاطات المثلث القائم'
    },
    words: {
      formula: 'الصيغة',
      diagram: 'المخطط',
      howTo: 'كيفية استخدام',
      examples: 'أمثلة خطوة بخطوة',
      result: 'معنى النتيجة',
      sideRatio: 'نسبة الأضلاع',
      useCases: 'متى تستخدم',
      commonMistakes: 'أخطاء شائعة',
      related: 'حاسبات مرتبطة بـ',
      faqs: 'أسئلة شائعة'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: 'يحافظ {title} على وضوح تسميات الأضلاع والمتغيرات.',
      calculatorNote: 'أدخل القيم المعروفة، واختر الوضع المناسب، ثم احسب.',
      summaryHeading: 'ما الذي يحله {title}',
      summaryIntro: 'استخدم {title} لحساب مخصص لأنماط المثلثات القائمة.',
      formulaPythagorean: 'الثلاثية الفيثاغورية تحقق a^2 + b^2 = c^2 بأطوال أضلاع صحيحة.',
      formulaScale: 'عند القياس يتم ضرب كل ضلع في عامل k نفسه.',
      formulaSimilar: 'المثلثات القائمة المتشابهة لها الزوايا نفسها وتستخدم عامل k نفسه.',
      diagramIntro: 'يعرض المخطط تسميات الأضلاع المستخدمة في {title}.',
      diagramCaption: 'مخطط مثلث قائم لـ {title}.',
      resultPythagorean: 'توضح النتيجة إن كانت القيم تشكل ثلاثية صحيحة أو تعرض ثلاثية منشأة.',
      resultScale: 'تعرض النتيجة الأضلاع بعد القياس والمساحة والمحيط.',
      resultSimilar: 'تعرض النتيجة عامل القياس أو الضلع المتناظر المفقود.',
      ratioPythagorean: 'كل ثلاثية صحيحة تحفظ a : b : c حيث c هو الوتر.',
      ratioScale: 'تبقى نسبة الأضلاع ثابتة بينما يغير k الحجم.',
      ratioSimilar: 'الأضلاع المتناظرة تحفظ النسبة نفسها.',
      faqPurposeQuestion: 'ماذا يفعل {title}؟',
      faqFormulaQuestion: 'ما الصيغة التي يستخدمها {title}؟',
      faqValuesQuestion: 'ما القيم التي يجب إدخالها؟',
      faqValuesAnswer: 'أدخل قيما موجبة تناسب الوضع المحدد.',
      chooseMode: 'اختر وضع التحقق أو الإنشاء.',
      enterValues: 'أدخل قيما موجبة.',
      calculateResult: 'اضغط احسب لعرض النتيجة.',
      resetFields: 'استخدم إعادة تعيين لمسح الحقول.',
      enterScale: 'أدخل عامل قياس موجب k.',
      findScaled: 'احسب الأضلاع والمساحة والمحيط.',
      chooseSimilar: 'اختر الوضع المناسب للقيمة المفقودة.',
      enterSimilar: 'أدخل الأضلاع المتناظرة المعروفة أو k.',
      usePythagorean: 'مفيد للتحقق من الثلاثيات الصحيحة أو إنشائها.',
      useScale: 'مفيد لتكبير أو تصغير ثلاثية معروفة.',
      useSimilar: 'مفيد للنسب والأضلاع المتناظرة.',
      mistakePythagorean: 'تأكد من أن c هو الوتر وأن القيم أعداد صحيحة.',
      mistakeScale: 'استخدم k موجبا وطبق القياس على كل الأضلاع.',
      mistakeSimilar: 'قارن الأضلاع المتناظرة فقط.'
    },
    home: {
      coreHeading: 'حاسبات المثلث القائم الأساسية',
      supportHeading: 'أنماط وثلاثيات المثلث القائم',
      viewAllPythagoreanTriples: 'عرض كل الثلاثيات الفيثاغورية',
      chartRows: {
        triangle345: 'مثلث 3-4-5',
        triangle51213: 'مثلث 5-12-13',
        triangle81517: 'مثلث 8-15-17',
        triangle91215: 'مثلث 9-12-15'
      }
    }
  }),
  bg: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Калкулатор за питагорови тройки',
      triangle345: 'Калкулатор за триъгълник 3 4 5',
      triangle51213: 'Калкулатор за триъгълник 5 12 13',
      similar: 'Калкулатор за подобни правоъгълни триъгълници'
    },
    introLines: {
      pythagorean: 'Проверявайте или генерирайте целочислени тройки за правоъгълни триъгълници.',
      triangle345: 'Решете най-честата питагорова тройка и мащабирайте страните ѝ.',
      triangle51213: 'Мащабирайте правоъгълен триъгълник 5 12 13 и намерете страни, лице и периметър.',
      similar: 'Намерете мащабен фактор и липсващи съответни страни в подобни правоъгълни триъгълници.'
    },
    common: {
      openTool: 'Отвори инструмента',
      calculate: 'Изчисли',
      reset: 'Нулирай',
      result: 'Резултат',
      formula: 'Формула',
      calculatorMode: 'Режим на калкулатора',
      diagramKey: 'Легенда на схемата на триъгълника',
      diagramScaleFactor: 'k = мащабен фактор',
      faqDescription: 'Отговори на чести въпроси за правоъгълни триъгълници.',
      example: 'Пример',
      sideA: 'Страна a',
      sideB: 'Страна b',
      hypotenuseC: 'Хипотенуза c',
      scaleFactorK: 'Мащабен фактор k',
      area: 'Лице',
      perimeter: 'Периметър',
      originalSide: 'Оригинална страна',
      similarSide: 'Подобна страна',
      scaleFactorResult: 'Мащабен фактор k',
      checkTriple: 'Проверка на питагорова тройка',
      generateTriple: 'Генериране на питагорова тройка',
      scale345: 'Мащабирай триъгълник 3-4-5',
      scale51213: 'Мащабирай триъгълник 5-12-13',
      findScaleFactor: 'Намери мащабен фактор',
      findSimilarSide: 'Намери липсваща подобна страна',
      findOriginalSide: 'Намери оригинална страна',
      validTriple: 'Валидна питагорова тройка',
      notTriple: 'Не е питагорова тройка',
      positiveValues: 'Въведете положителни стойности.',
      hypotenuseLongest: 'Хипотенузата c трябва да е най-дългата страна.',
      positiveIntegers: 'Въведете положителни цели числа.',
      mGreaterThanN: 'm трябва да е по-голямо от n.',
      positiveScaleFactor: 'Въведете положителен мащабен фактор.',
      originalAndScalePositive: 'Оригиналната страна и k трябва да са по-големи от 0.',
      similarAndScalePositive: 'Подобната страна и k трябва да са по-големи от 0.',
      unableToCalculate: 'Изчислението е невъзможно.',
      knownValues: 'Известни стойности',
      finds: 'Намира',
      mainFormula: 'Основна формула',
      bestFor: 'Подходящо за',
      rightTriangleSideCalculator: 'Калкулатор за страни на правоъгълен триъгълник',
      pythagoreanTheoremCalculator: 'Калкулатор за теоремата на Питагор',
      specialRightTriangleCalculator: 'Калкулатор за специални правоъгълни триъгълници',
      rightTriangleAreaCalculator: 'Калкулатор за лице на правоъгълен триъгълник',
      rightTriangleAngleCalculator: 'Калкулатор за ъгли на правоъгълен триъгълник',
      rightTriangleProjectionCalculator: 'Калкулатор за проекции на правоъгълен триъгълник'
    },
    words: {
      formula: 'формула',
      diagram: 'схема',
      howTo: 'Как да използвате',
      examples: 'примери стъпка по стъпка',
      result: 'значение на резултата',
      sideRatio: 'отношение на страните',
      useCases: 'Кога да използвате',
      commonMistakes: 'чести грешки',
      related: 'Свързани калкулатори за',
      faqs: 'Въпроси и отговори'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} запазва ясни означенията на страните и променливите.',
      calculatorNote: 'Въведете известните стойности, изберете правилния режим и изчислете.',
      summaryHeading: 'Какво решава {title}',
      summaryIntro: 'Използвайте {title} за насочено изчисление на правоъгълен триъгълник.',
      formulaPythagorean: 'Питагорова тройка удовлетворява a^2 + b^2 = c^2 с цели дължини на страните.',
      formulaScale: 'При мащабиране всяка страна се умножава по един и същ k.',
      formulaSimilar: 'Подобните правоъгълни триъгълници запазват равни ъгли и един и същ k.',
      diagramIntro: 'Схемата показва означенията на страните в {title}.',
      diagramCaption: 'Схема на правоъгълен триъгълник за {title}.',
      resultPythagorean: 'Резултатът показва дали стойностите образуват целочислена тройка или показва генерирана тройка.',
      resultScale: 'Резултатът показва мащабирани страни, лице и периметър.',
      resultSimilar: 'Резултатът показва мащабния фактор или липсваща съответна страна.',
      ratioPythagorean: 'Всяка валидна тройка запазва a : b : c, където c е хипотенузата.',
      ratioScale: 'Отношението на страните остава постоянно, а k променя размера.',
      ratioSimilar: 'Съответните страни запазват едно и също отношение.',
      faqPurposeQuestion: 'Какво прави {title}?',
      faqFormulaQuestion: 'Коя формула използва {title}?',
      faqValuesQuestion: 'Какви стойности да въведа?',
      faqValuesAnswer: 'Въведете положителни стойности според избрания режим.',
      chooseMode: 'Изберете режим за проверка или генериране.',
      enterValues: 'Въведете положителни стойности.',
      calculateResult: 'Натиснете Изчисли, за да видите резултата.',
      resetFields: 'Използвайте Нулирай, за да изчистите полетата.',
      enterScale: 'Въведете положителен мащабен фактор k.',
      findScaled: 'Изчислете страни, лице и периметър.',
      chooseSimilar: 'Изберете режим според липсващата стойност.',
      enterSimilar: 'Въведете известни съответни страни или k.',
      usePythagorean: 'Полезно за проверка или генериране на целочислени тройки.',
      useScale: 'Полезно за мащабиране на известна тройка.',
      useSimilar: 'Полезно за пропорции и съответни страни.',
      mistakePythagorean: 'Уверете се, че c е хипотенуза и стойностите са цели числа.',
      mistakeScale: 'Използвайте положителен k и мащабирайте всички страни.',
      mistakeSimilar: 'Сравнявайте само съответни страни.'
    },
    home: {
      coreHeading: 'Основни калкулатори за правоъгълни триъгълници',
      supportHeading: 'Модели и питагорови тройки',
      viewAllPythagoreanTriples: 'Вижте всички питагорови тройки',
      chartRows: {
        triangle345: 'Триъгълник 3-4-5',
        triangle51213: 'Триъгълник 5-12-13',
        triangle81517: 'Триъгълник 8-15-17',
        triangle91215: 'Триъгълник 9-12-15'
      }
    }
  }),
  tr: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Pisagor Üçlüleri Hesaplayıcı',
      triangle345: '3 4 5 Üçgen Hesaplayıcı',
      triangle51213: '5 12 13 Üçgen Hesaplayıcı',
      similar: 'Benzer Dik Üçgenler Hesaplayıcı'
    },
    introLines: {
      pythagorean: 'Tam sayılı dik üçgen üçlülerini kontrol edin veya üretin.',
      triangle345: 'En yaygın Pisagor üçlüsünü çözün ve kenarlarını ölçekleyin.',
      triangle51213: '5 12 13 dik üçgenini ölçekleyin; kenarları, alanı ve çevreyi bulun.',
      similar: 'Benzer dik üçgenlerde ölçek faktörünü ve eksik eşleşen kenarları bulun.'
    },
    common: {
      openTool: 'Aracı aç',
      calculate: 'Hesapla',
      reset: 'Sıfırla',
      result: 'Sonuç',
      formula: 'Formül',
      calculatorMode: 'Hesaplayıcı modu',
      diagramKey: 'Üçgen diyagram anahtarı',
      diagramScaleFactor: 'k = ölçek faktörü',
      faqDescription: 'Dik üçgen çözümüyle ilgili yaygın soruların yanıtları.',
      example: 'Örnek',
      sideA: 'Kenar a',
      sideB: 'Kenar b',
      hypotenuseC: 'Hipotenüs c',
      scaleFactorK: 'Ölçek faktörü k',
      area: 'Alan',
      perimeter: 'Çevre',
      originalSide: 'Orijinal kenar',
      similarSide: 'Benzer kenar',
      scaleFactorResult: 'Ölçek faktörü k',
      checkTriple: 'Pisagor üçlüsünü kontrol et',
      generateTriple: 'Pisagor üçlüsü üret',
      scale345: '3-4-5 üçgenini ölçekle',
      scale51213: '5-12-13 üçgenini ölçekle',
      findScaleFactor: 'Ölçek faktörünü bul',
      findSimilarSide: 'Eksik benzer kenarı bul',
      findOriginalSide: 'Orijinal kenarı bul',
      validTriple: 'Geçerli Pisagor üçlüsü',
      notTriple: 'Pisagor üçlüsü değil',
      positiveValues: 'Lütfen pozitif değerler girin.',
      hypotenuseLongest: 'Hipotenüs c en uzun kenar olmalıdır.',
      positiveIntegers: 'Pozitif tam sayılar girin.',
      mGreaterThanN: 'm, n değerinden büyük olmalıdır.',
      positiveScaleFactor: 'Lütfen pozitif bir ölçek faktörü girin.',
      originalAndScalePositive: 'Orijinal kenar ve k 0’dan büyük olmalıdır.',
      similarAndScalePositive: 'Benzer kenar ve k 0’dan büyük olmalıdır.',
      unableToCalculate: 'Hesaplanamadı.',
      knownValues: 'Bilinen değerler',
      finds: 'Bulur',
      mainFormula: 'Ana formül',
      bestFor: 'En uygun',
      rightTriangleSideCalculator: 'Dik üçgen kenar hesaplayıcı',
      pythagoreanTheoremCalculator: 'Pisagor teoremi hesaplayıcı',
      specialRightTriangleCalculator: 'Özel dik üçgen hesaplayıcı',
      rightTriangleAreaCalculator: 'Dik üçgen alan hesaplayıcı',
      rightTriangleAngleCalculator: 'Dik üçgen açı hesaplayıcı',
      rightTriangleProjectionCalculator: 'Dik üçgen izdüşüm hesaplayıcı'
    },
    words: {
      formula: 'formülü',
      diagram: 'diyagramı',
      howTo: 'Nasıl kullanılır',
      examples: 'adım adım örnekler',
      result: 'sonucun anlamı',
      sideRatio: 'kenar oranı',
      useCases: 'Ne zaman kullanılır',
      commonMistakes: 'yaygın hatalar',
      related: 'İlgili hesaplayıcılar',
      faqs: 'SSS'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title}, kenar etiketlerini ve değişkenleri takip etmeyi kolaylaştırır.',
      calculatorNote: 'Bilinen değerleri girin, uygun modu seçin ve hesaplayın.',
      summaryHeading: '{title} ne çözer',
      summaryIntro: '{title}, dik üçgen desenleri için odaklanmış hesaplama yapar.',
      formulaPythagorean: 'Bir Pisagor üçlüsü tam sayı kenarlarla a^2 + b^2 = c^2 sağlar.',
      formulaScale: 'Ölçekleme, her kenarı aynı k ile çarpar.',
      formulaSimilar: 'Benzer dik üçgenler aynı açıları ve aynı k faktörünü korur.',
      diagramIntro: 'Diyagram, {title} için kullanılan kenar etiketlerini gösterir.',
      diagramCaption: '{title} için dik üçgen diyagramı.',
      resultPythagorean: 'Sonuç, değerlerin tam sayılı bir üçlü oluşturup oluşturmadığını veya üretilen üçlüyü gösterir.',
      resultScale: 'Sonuç ölçeklenmiş kenarları, alanı ve çevreyi gösterir.',
      resultSimilar: 'Sonuç ölçek faktörünü veya eksik karşılık gelen kenarı gösterir.',
      ratioPythagorean: 'Her geçerli üçlü, c hipotenüs olacak şekilde a : b : c oranını korur.',
      ratioScale: 'Kenar oranı sabit kalır, k boyutu değiştirir.',
      ratioSimilar: 'Karşılık gelen kenarlar aynı oranı korur.',
      faqPurposeQuestion: '{title} ne işe yarar?',
      faqFormulaQuestion: '{title} hangi formülü kullanır?',
      faqValuesQuestion: 'Hangi değerleri girmeliyim?',
      faqValuesAnswer: 'Seçilen moda uygun pozitif değerler girin.',
      chooseMode: 'Kontrol veya üretme modunu seçin.',
      enterValues: 'Pozitif değerler girin.',
      calculateResult: 'Sonucu görmek için Hesapla seçin.',
      resetFields: 'Alanları temizlemek için Sıfırla kullanın.',
      enterScale: 'Pozitif ölçek faktörü k girin.',
      findScaled: 'Kenarları, alanı ve çevreyi hesaplayın.',
      chooseSimilar: 'Eksik değere uygun modu seçin.',
      enterSimilar: 'Bilinen karşılık gelen kenarları veya k değerini girin.',
      usePythagorean: 'Tam sayı üçlülerini kontrol etmek veya üretmek için yararlıdır.',
      useScale: 'Bilinen bir üçlüyü ölçeklemek için yararlıdır.',
      useSimilar: 'Oranlar ve karşılık gelen kenarlar için yararlıdır.',
      mistakePythagorean: 'c değerinin hipotenüs ve değerlerin tam sayı olduğundan emin olun.',
      mistakeScale: 'Pozitif k kullanın ve tüm kenarları ölçekleyin.',
      mistakeSimilar: 'Yalnızca karşılık gelen kenarları karşılaştırın.'
    },
    home: {
      coreHeading: 'Temel dik üçgen hesaplayıcıları',
      supportHeading: 'Dik üçgen desenleri ve üçlüleri',
      viewAllPythagoreanTriples: 'Tüm Pisagor üçlülerini görüntüle',
      chartRows: {
        triangle345: '3-4-5 üçgeni',
        triangle51213: '5-12-13 üçgeni',
        triangle81517: '8-15-17 üçgeni',
        triangle91215: '9-12-15 üçgeni'
      }
    }
  }),
  sv: makeSimpleLocaleText({
    titles: {
      pythagorean: 'Kalkylator för pythagoreiska tripplar',
      triangle345: '3 4 5 triangelkalkylator',
      triangle51213: '5 12 13 triangelkalkylator',
      similar: 'Kalkylator för likformiga rätvinkliga trianglar'
    },
    introLines: {
      pythagorean: 'Kontrollera eller skapa heltalstripplar för rätvinkliga trianglar.',
      triangle345: 'Lös den vanligaste pythagoreiska trippeln och skala dess sidor.',
      triangle51213: 'Skala en rätvinklig 5 12 13 triangel och hitta sidor, area och omkrets.',
      similar: 'Hitta skalfaktor och saknade motsvarande sidor i likformiga rätvinkliga trianglar.'
    },
    common: {
      openTool: 'Öppna verktyg',
      calculate: 'Beräkna',
      reset: 'Återställ',
      result: 'Resultat',
      formula: 'Formel',
      calculatorMode: 'Kalkylatorläge',
      diagramKey: 'Förklaring till triangeldiagram',
      diagramScaleFactor: 'k = skalfaktor',
      faqDescription: 'Svar på vanliga frågor om rätvinkliga trianglar.',
      example: 'Exempel',
      sideA: 'Sida a',
      sideB: 'Sida b',
      hypotenuseC: 'Hypotenusa c',
      scaleFactorK: 'Skalfaktor k',
      area: 'Area',
      perimeter: 'Omkrets',
      originalSide: 'Ursprunglig sida',
      similarSide: 'Likformig sida',
      scaleFactorResult: 'Skalfaktor k',
      checkTriple: 'Kontrollera pythagoreisk trippel',
      generateTriple: 'Skapa pythagoreisk trippel',
      scale345: 'Skala 3-4-5 triangel',
      scale51213: 'Skala 5-12-13 triangel',
      findScaleFactor: 'Hitta skalfaktor',
      findSimilarSide: 'Hitta saknad likformig sida',
      findOriginalSide: 'Hitta ursprunglig sida',
      validTriple: 'Giltig pythagoreisk trippel',
      notTriple: 'Inte en pythagoreisk trippel',
      positiveValues: 'Ange positiva värden.',
      hypotenuseLongest: 'Hypotenusan c ska vara den längsta sidan.',
      positiveIntegers: 'Ange positiva heltal.',
      mGreaterThanN: 'm måste vara större än n.',
      positiveScaleFactor: 'Ange en positiv skalfaktor.',
      originalAndScalePositive: 'Ursprunglig sida och k måste vara större än 0.',
      similarAndScalePositive: 'Likformig sida och k måste vara större än 0.',
      unableToCalculate: 'Kunde inte beräkna.',
      knownValues: 'Kända värden',
      finds: 'Hittar',
      mainFormula: 'Huvudformel',
      bestFor: 'Bäst för',
      rightTriangleSideCalculator: 'Kalkylator för sidor i rätvinklig triangel',
      pythagoreanTheoremCalculator: 'Kalkylator för Pythagoras sats',
      specialRightTriangleCalculator: 'Kalkylator för speciella rätvinkliga trianglar',
      rightTriangleAreaCalculator: 'Arealkalkylator för rätvinklig triangel',
      rightTriangleAngleCalculator: 'Vinkelkalkylator för rätvinklig triangel',
      rightTriangleProjectionCalculator: 'Projektionskalkylator för rätvinklig triangel'
    },
    words: {
      formula: 'formel',
      diagram: 'diagram',
      howTo: 'Så använder du',
      examples: 'stegvisa exempel',
      result: 'resultatets betydelse',
      sideRatio: 'sidförhållande',
      useCases: 'När du använder',
      commonMistakes: 'vanliga misstag',
      related: 'Relaterade kalkylatorer för',
      faqs: 'FAQ'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} håller sidetiketter och variabler enkla att följa.',
      calculatorNote: 'Ange kända värden, välj rätt läge och beräkna.',
      summaryHeading: 'Vad {title} löser',
      summaryIntro: 'Använd {title} för en fokuserad beräkning av rätvinkliga triangelmönster.',
      formulaPythagorean: 'En pythagoreisk trippel uppfyller a^2 + b^2 = c^2 med heltalssidor.',
      formulaScale: 'En skalad trippel multiplicerar varje sida med samma k.',
      formulaSimilar: 'Likformiga rätvinkliga trianglar behåller lika vinklar och samma k.',
      diagramIntro: 'Diagrammet visar sidetiketterna som används av {title}.',
      diagramCaption: 'Diagram över rätvinklig triangel för {title}.',
      resultPythagorean: 'Resultatet visar om värdena bildar en heltalstrippel eller visar en skapad trippel.',
      resultScale: 'Resultatet visar skalade sidor, area och omkrets.',
      resultSimilar: 'Resultatet visar skalfaktorn eller den saknade motsvarande sidan.',
      ratioPythagorean: 'Varje giltig trippel behåller a : b : c med c som hypotenusa.',
      ratioScale: 'Sidförhållandet är fast medan k ändrar storleken.',
      ratioSimilar: 'Motsvarande sidor behåller samma förhållande.',
      faqPurposeQuestion: 'Vad gör {title}?',
      faqFormulaQuestion: 'Vilken formel använder {title}?',
      faqValuesQuestion: 'Vilka värden ska jag ange?',
      faqValuesAnswer: 'Ange positiva värden som passar valt läge.',
      chooseMode: 'Välj kontrollera eller skapa.',
      enterValues: 'Ange positiva värden.',
      calculateResult: 'Tryck på Beräkna för att visa resultatet.',
      resetFields: 'Använd Återställ för att tömma fälten.',
      enterScale: 'Ange en positiv skalfaktor k.',
      findScaled: 'Beräkna sidor, area och omkrets.',
      chooseSimilar: 'Välj läget som matchar det saknade värdet.',
      enterSimilar: 'Ange kända motsvarande sidor eller k.',
      usePythagorean: 'Användbart för att kontrollera eller skapa heltalstripplar.',
      useScale: 'Användbart för att skala en känd trippel.',
      useSimilar: 'Användbart för proportioner och motsvarande sidor.',
      mistakePythagorean: 'Kontrollera att c är hypotenusan och att värdena är heltal.',
      mistakeScale: 'Använd positivt k och skala alla sidor.',
      mistakeSimilar: 'Jämför bara motsvarande sidor.'
    },
    home: {
      coreHeading: 'Huvudkalkylatorer för rätvinkliga trianglar',
      supportHeading: 'Mönster och tripplar för rätvinkliga trianglar',
      viewAllPythagoreanTriples: 'Visa alla pythagoreiska tripplar',
      chartRows: {
        triangle345: '3-4-5 triangel',
        triangle51213: '5-12-13 triangel',
        triangle81517: '8-15-17 triangel',
        triangle91215: '9-12-15 triangel'
      }
    }
  }),
  zh: makeSimpleLocaleText({
    titles: {
      pythagorean: '勾股数计算器',
      triangle345: '3 4 5 三角形计算器',
      triangle51213: '5 12 13 三角形计算器',
      similar: '相似直角三角形计算器'
    },
    introLines: {
      pythagorean: '检查或生成整数直角三角形勾股数。',
      triangle345: '求解最常见的勾股数组，并按比例缩放其边长。',
      triangle51213: '缩放 5 12 13 直角三角形，并求边长、面积和周长。',
      similar: '在相似直角三角形中求比例因子和缺失的对应边。'
    },
    common: {
      openTool: '打开工具',
      calculate: '计算',
      reset: '重置',
      result: '结果',
      formula: '公式',
      calculatorMode: '计算模式',
      diagramKey: '三角形示意图说明',
      diagramScaleFactor: 'k = 比例因子',
      faqDescription: '关于直角三角形计算的常见问题解答。',
      example: '示例',
      sideA: '边 a',
      sideB: '边 b',
      hypotenuseC: '斜边 c',
      scaleFactorK: '比例因子 k',
      area: '面积',
      perimeter: '周长',
      originalSide: '原始边',
      similarSide: '相似边',
      scaleFactorResult: '比例因子 k',
      checkTriple: '检查勾股数',
      generateTriple: '生成勾股数',
      scale345: '缩放 3-4-5 三角形',
      scale51213: '缩放 5-12-13 三角形',
      findScaleFactor: '求比例因子',
      findSimilarSide: '求缺失相似边',
      findOriginalSide: '求原始边',
      validTriple: '有效勾股数',
      notTriple: '不是勾股数',
      positiveValues: '请输入正值。',
      hypotenuseLongest: '斜边 c 应为最长边。',
      positiveIntegers: '请输入正整数。',
      mGreaterThanN: 'm 必须大于 n。',
      positiveScaleFactor: '请输入正比例因子。',
      originalAndScalePositive: '原始边和 k 必须大于 0。',
      similarAndScalePositive: '相似边和 k 必须大于 0。',
      unableToCalculate: '无法计算。',
      knownValues: '已知值',
      finds: '求得',
      mainFormula: '主要公式',
      bestFor: '适用于',
      rightTriangleSideCalculator: '直角三角形边长计算器',
      pythagoreanTheoremCalculator: '勾股定理计算器',
      specialRightTriangleCalculator: '特殊直角三角形计算器',
      rightTriangleAreaCalculator: '直角三角形面积计算器',
      rightTriangleAngleCalculator: '直角三角形角度计算器',
      rightTriangleProjectionCalculator: '直角三角形投影计算器'
    },
    words: {
      formula: '公式',
      diagram: '示意图',
      howTo: '如何使用',
      examples: '分步示例',
      result: '结果含义',
      sideRatio: '边长比',
      useCases: '何时使用',
      commonMistakes: '常见错误',
      related: '相关计算器',
      faqs: '常见问题'
    },
    sentences: {
      metaTitle: '{title} | Right Triangle Solver',
      introDetail: '{title} 保持边标签和变量清晰，便于跟随计算。',
      calculatorNote: '输入已知值，选择合适模式，然后计算。',
      summaryHeading: '{title} 可求解的内容',
      summaryIntro: '使用 {title} 进行有针对性的直角三角形模式计算。',
      formulaPythagorean: '勾股数用整数边长满足 a^2 + b^2 = c^2。',
      formulaScale: '缩放时每条边都乘以同一个 k。',
      formulaSimilar: '相似直角三角形保持相同角度，并使用相同的 k。',
      diagramIntro: '示意图显示 {title} 使用的边标签。',
      diagramCaption: '{title} 的直角三角形示意图。',
      resultPythagorean: '结果显示这些值是否构成整数勾股数，或显示生成的勾股数。',
      resultScale: '结果显示缩放后的边长、面积和周长。',
      resultSimilar: '结果显示比例因子或缺失的对应边。',
      ratioPythagorean: '每个有效勾股数都保持 a : b : c，其中 c 为斜边。',
      ratioScale: '边长比保持不变，k 改变大小。',
      ratioSimilar: '对应边保持相同的比例。',
      faqPurposeQuestion: '{title} 有什么作用？',
      faqFormulaQuestion: '{title} 使用哪个公式？',
      faqValuesQuestion: '应该输入哪些值？',
      faqValuesAnswer: '请输入与所选模式匹配的正值。',
      chooseMode: '选择检查模式或生成模式。',
      enterValues: '输入正值。',
      calculateResult: '点击计算查看结果。',
      resetFields: '使用重置清空输入。',
      enterScale: '输入正比例因子 k。',
      findScaled: '计算边长、面积和周长。',
      chooseSimilar: '选择与缺失值匹配的模式。',
      enterSimilar: '输入已知对应边或 k。',
      usePythagorean: '适合检查或生成整数勾股数。',
      useScale: '适合缩放已知勾股数组。',
      useSimilar: '适合比例和对应边计算。',
      mistakePythagorean: '确认 c 是斜边，并且数值为整数。',
      mistakeScale: '使用正的 k，并缩放所有边。',
      mistakeSimilar: '只比较对应边。'
    },
    home: {
      coreHeading: '核心直角三角形计算器',
      supportHeading: '直角三角形模式和勾股数',
      viewAllPythagoreanTriples: '查看所有勾股数',
      chartRows: {
        triangle345: '3-4-5 三角形',
        triangle51213: '5-12-13 三角形',
        triangle81517: '8-15-17 三角形',
        triangle91215: '9-12-15 三角形'
      }
    }
  })
};

const pageKeyForSlug = (slug: string): TriplesPageKey | undefined =>
  SLUG_TO_KEY[slug as TriplesPageSlug];

const contentKindForPage = (key: TriplesPageKey): 'pythagorean' | 'scale' | 'similar' =>
  key === 'pythagorean' ? 'pythagorean' : key === 'similar' ? 'similar' : 'scale';

const diagramNotesForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'triangle345') return text.diagramNotes.scale345;
  if (key === 'triangle51213') return text.diagramNotes.scale51213;
  if (key === 'similar') return text.diagramNotes.similar;
  return text.diagramNotes.pythagorean;
};

const formulaParagraphForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'pythagorean') return text.templates.formulaPythagorean;
  if (key === 'similar') return text.templates.formulaSimilar;
  return text.templates.formulaScale;
};

const resultMeaningForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'pythagorean') return text.templates.resultPythagorean;
  if (key === 'similar') return text.templates.resultSimilar;
  return text.templates.resultScale;
};

const ratioTextForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'pythagorean') return text.templates.ratioPythagorean;
  if (key === 'similar') return text.templates.ratioSimilar;
  return text.templates.ratioScale;
};

const summaryValuesForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'pythagorean') {
    return {
      known: `${text.common.sideA}, ${text.common.sideB}, ${text.common.hypotenuseC} / m, n`,
      finds: `${text.common.result} / a, b, c`,
      bestFor: text.introLines.pythagorean
    };
  }

  if (key === 'similar') {
    return {
      known: `${text.common.originalSide}, ${text.common.similarSide}, k`,
      finds: `${text.common.scaleFactorResult} / ${text.common.similarSide} / ${text.common.originalSide}`,
      bestFor: text.introLines.similar
    };
  }

  return {
    known: text.common.scaleFactorK,
    finds: `${text.common.sideA}, ${text.common.sideB}, ${text.common.hypotenuseC}, ${text.common.area}, ${text.common.perimeter}`,
    bestFor: text.introLines[key]
  };
};

const localizeModes = (
  modes: FocusedTriplesCalculatorMode[],
  text: LocaleText
): FocusedTriplesCalculatorMode[] =>
  modes.map((mode) => {
    if (mode.id === 'check-triple') {
      return {
        ...mode,
        label: text.common.checkTriple,
        heading: text.common.checkTriple,
        fields: [
          { key: 'a', label: text.common.sideA, min: 0 },
          { key: 'b', label: text.common.sideB, min: 0 },
          { key: 'c', label: text.common.hypotenuseC, min: 0 }
        ],
        outputLabels: [text.common.result],
        validation: `${text.common.positiveIntegers} ${text.common.hypotenuseLongest}`
      };
    }

    if (mode.id === 'generate-triple') {
      return {
        ...mode,
        label: text.common.generateTriple,
        heading: text.common.generateTriple,
        fields: [
          { key: 'm', label: 'm', min: 1 },
          { key: 'n', label: 'n', min: 1 }
        ],
        outputLabels: ['a', 'b', 'c'],
        validation: `${text.common.positiveIntegers} ${text.common.mGreaterThanN}`
      };
    }

    if (mode.id === 'scale-3-4-5' || mode.id === 'scale-5-12-13') {
      const label = mode.id === 'scale-3-4-5' ? text.common.scale345 : text.common.scale51213;
      return {
        ...mode,
        label,
        heading: label,
        fields: [{ key: 'k', label: text.common.scaleFactorK, min: 0 }],
        outputLabels: [
          text.common.sideA,
          text.common.sideB,
          text.common.hypotenuseC,
          text.common.area,
          text.common.perimeter
        ],
        validation: text.common.positiveScaleFactor
      };
    }

    if (mode.id === 'find-scale-factor') {
      return {
        ...mode,
        label: text.common.findScaleFactor,
        heading: text.common.findScaleFactor,
        fields: [
          { key: 'original_side', label: text.common.originalSide, min: 0 },
          { key: 'similar_side', label: text.common.similarSide, min: 0 }
        ],
        outputLabels: [text.common.scaleFactorResult],
        validation: text.common.positiveValues
      };
    }

    if (mode.id === 'find-similar-side') {
      return {
        ...mode,
        label: text.common.findSimilarSide,
        heading: text.common.findSimilarSide,
        fields: [
          { key: 'original_side', label: text.common.originalSide, min: 0 },
          { key: 'k', label: text.common.scaleFactorK, min: 0 }
        ],
        outputLabels: [text.common.similarSide],
        validation: text.common.originalAndScalePositive
      };
    }

    if (mode.id === 'find-original-side') {
      return {
        ...mode,
        label: text.common.findOriginalSide,
        heading: text.common.findOriginalSide,
        fields: [
          { key: 'similar_side', label: text.common.similarSide, min: 0 },
          { key: 'k', label: text.common.scaleFactorK, min: 0 }
        ],
        outputLabels: [text.common.originalSide],
        validation: text.common.similarAndScalePositive
      };
    }

    return mode;
  });

const buildCalculatorUi = (text: LocaleText): FocusedTriplesCalculatorUi => ({
  calculatorModeHeading: text.common.calculatorMode,
  resultLabel: text.common.result,
  formulaLabel: text.common.formula,
  calculateLabel: text.common.calculate,
  resetLabel: text.common.reset,
  openToolLabel: text.common.openTool,
  diagramKeyLabel: text.common.diagramKey,
  diagramScaleFactorLabel: text.common.diagramScaleFactor,
  faqDescription: text.common.faqDescription,
  sectionHeadings: text.genericHeadings,
  errors: {
    positiveValues: text.common.positiveValues,
    hypotenuseLongest: text.common.hypotenuseLongest,
    notTriple: text.common.notTriple,
    positiveIntegers: text.common.positiveIntegers,
    mGreaterThanN: text.common.mGreaterThanN,
    positiveScaleFactor: text.common.positiveScaleFactor,
    originalAndScalePositive: text.common.originalAndScalePositive,
    similarAndScalePositive: text.common.similarAndScalePositive,
    unableToCalculate: text.common.unableToCalculate
  },
  results: {
    validTriple: text.common.validTriple,
    notTriple: text.common.notTriple
  }
});

const relatedLabelForHref = (href: string, text: LocaleText) => {
  const labels: Record<string, string> = {
    '/pythagorean-triples-calculator/': text.titles.pythagorean,
    '/3-4-5-triangle-calculator/': text.titles.triangle345,
    '/5-12-13-triangle-calculator/': text.titles.triangle51213,
    '/similar-right-triangles-calculator/': text.titles.similar,
    '/right-triangle-side-calculator/': text.common.rightTriangleSideCalculator,
    '/pythagorean-theorem-calculator/': text.common.pythagoreanTheoremCalculator,
    '/special-right-triangle-calculator/': text.common.specialRightTriangleCalculator,
    '/right-triangle-area-calculator/': text.common.rightTriangleAreaCalculator,
    '/right-triangle-angle-calculator/': text.common.rightTriangleAngleCalculator,
    '/right-triangle-projection-calculator/': text.common.rightTriangleProjectionCalculator
  };

  return labels[href];
};

const exampleStepsForPage = (key: TriplesPageKey, text: LocaleText) => {
  if (key === 'pythagorean') {
    return [
      {
        title: `${text.common.example} 1: 3, 4, 5`,
        steps: ['a^2 + b^2 = c^2', '3^2 + 4^2 = 5^2', '9 + 16 = 25', '25 = 25']
      },
      {
        title: `${text.common.example} 2: m = 2, n = 1`,
        steps: [
          'a = m^2 - n^2 = 2^2 - 1^2 = 3',
          'b = 2mn = 2 \\times 2 \\times 1 = 4',
          'c = m^2 + n^2 = 2^2 + 1^2 = 5'
        ]
      }
    ];
  }

  if (key === 'triangle345') {
    return [
      {
        title: `${text.common.example}: k = 2`,
        steps: [
          'a = 3k = 3 \\times 2 = 6',
          'b = 4k = 4 \\times 2 = 8',
          'c = 5k = 5 \\times 2 = 10',
          '\\text{Area} = \\frac{6 \\times 8}{2} = 24',
          'P = 6 + 8 + 10 = 24'
        ]
      }
    ];
  }

  if (key === 'triangle51213') {
    return [
      {
        title: `${text.common.example}: k = 2`,
        steps: [
          'a = 5k = 5 \\times 2 = 10',
          'b = 12k = 12 \\times 2 = 24',
          'c = 13k = 13 \\times 2 = 26',
          '\\text{Area} = \\frac{10 \\times 24}{2} = 120',
          'P = 10 + 24 + 26 = 60'
        ]
      }
    ];
  }

  return [
    {
      title: `${text.common.example}: k = 3`,
      steps: ['k = 18 / 6 = 3', 'x = 8 \\times 2.5 = 20', 'x = 15 / 3 = 5']
    }
  ];
};

function buildLocalizedTriplesPage(
  page: FocusedTriplesCalculatorPage,
  locale: Locale
): FocusedTriplesCalculatorPage {
  const key = pageKeyForSlug(page.slug);
  const text = TEXT_BY_LOCALE[locale];

  if (!key || !text) return page;

  const title = text.titles[key];
  const kind = contentKindForPage(key);
  const summaryValues = summaryValuesForPage(key, text);
  const primaryFormula = PRIMARY_FORMULA[key];

  return {
    ...page,
    h1: title,
    introLine: text.introLines[key],
    secondaryKeywords: [title, text.introLines[key], primaryFormula],
    metaTitle: fill(text.templates.metaTitle, { title }),
    metaDescription: text.introLines[key],
    badge: title,
    breadcrumbParent: page.breadcrumbParent
      ? {
          href: page.breadcrumbParent.href,
          label:
            page.breadcrumbParent.href === '/pythagorean-triples-calculator/'
              ? text.titles.pythagorean
              : text.common.rightTriangleSideCalculator
        }
      : undefined,
    intro: [
      text.introLines[key],
      fill(text.templates.introDetail, { title })
    ],
    calculatorNote: fill(text.templates.calculatorNote, { title }),
    modes: localizeModes(page.modes, text),
    quickSummary: {
      h2: fill(text.templates.summaryHeading, { title }),
      intro: fill(text.templates.summaryIntro, { title }),
      cards: [
        { label: text.common.knownValues, value: summaryValues.known },
        { label: text.common.finds, value: summaryValues.finds },
        { label: text.common.mainFormula, value: primaryFormula },
        { label: text.common.bestFor, value: summaryValues.bestFor }
      ]
    },
    formulaSection: {
      ...page.formulaSection,
      paragraphs: [formulaParagraphForPage(key, text)]
    },
    diagram: {
      ...page.diagram,
      h2: fill(text.headings.diagram, { title }),
      intro: fill(text.templates.diagramIntro, { title }),
      caption: fill(text.templates.diagramCaption, { title }),
      notes: diagramNotesForPage(key, text)
    },
    howToUse: text.howTo[kind],
    example: exampleStepsForPage(key, text),
    resultMeaning: [resultMeaningForPage(key, text)],
    sideRatio: [ratioTextForPage(key, text)],
    useCases: text.useCases[kind],
    commonMistakes: text.mistakes[kind],
    relatedLinks: page.relatedLinks.map((link) => ({
      ...link,
      label: relatedLabelForHref(link.href, text) ?? link.label
    })),
    faqs: [
      {
        question: fill(text.templates.faqPurposeQuestion, { title }),
        answer: fill(text.templates.faqPurposeAnswer, {
          intro: text.introLines[key],
          title,
          formula: primaryFormula
        })
      },
      {
        question: fill(text.templates.faqFormulaQuestion, { title }),
        answer: fill(text.templates.faqFormulaAnswer, {
          intro: text.introLines[key],
          title,
          formula: primaryFormula
        })
      },
      {
        question: text.templates.faqValuesQuestion,
        answer: text.templates.faqValuesAnswer
      }
    ],
    calculatorUi: buildCalculatorUi(text)
  };
}

export function getFocusedTriplesHomeUi(locale: Locale): FocusedTriplesHomeUi {
  const text = TEXT_BY_LOCALE[locale] ?? EN_TEXT;

  return {
    coreHeading: text.home.coreHeading,
    supportHeading: text.home.supportHeading,
    viewAllPythagoreanTriples: text.home.viewAllPythagoreanTriples,
    chartRows: text.home.chartRows,
    tools: (['pythagorean', 'triangle345', 'triangle51213', 'similar'] as TriplesPageKey[]).map((key) => ({
      title: text.titles[key],
      href: HOME_TOOL_HREFS[key],
      description: text.introLines[key]
    }))
  };
}

export function localizeFocusedTriplesCalculatorPage(
  page: FocusedTriplesCalculatorPage,
  locale: Locale
): FocusedTriplesCalculatorPage {
  return applyTriplesGapFills(buildLocalizedTriplesPage(page, locale), locale);
}
