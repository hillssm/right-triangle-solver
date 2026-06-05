import type { FocusedRadiusCalculatorPage, FocusedRadiusRelatedLink } from './focusedRadiusCalculatorPages';
import type { FormulaCalculatorConfig } from './rightTriangleFormulas';
import type { Locale } from 'theme/i18n/locales';

type RadiusPageSlug =
  | 'right-triangle-inradius-calculator'
  | 'right-triangle-circumradius-calculator';

type RadiusPageTranslation = Omit<
  FocusedRadiusCalculatorPage,
  'slug' | 'url' | 'calculatorKind' | 'formulaSlug' | 'diagram'
> & {
  diagram: Omit<FocusedRadiusCalculatorPage['diagram'], 'kind'>;
};

export type FocusedRadiusCalculatorUi = {
  badge: string;
  parentBreadcrumbLabel: string;
  openTool: string;
  sectionHeadings: {
    formula: string;
    diagram: string;
    howToUse: string;
    example: string;
    given: string;
    resultMeaning: string;
    radiusRelation: string;
    useCases: string;
    commonMistakes: string;
    relatedCalculators: string;
    faqs: string;
  };
  diagram: {
    inradiusTitle: string;
    inradiusDescription: string;
    circumradiusTitle: string;
    circumradiusDescription: string;
    legA: string;
    legB: string;
    hypotenuseC: string;
    inradiusR: string;
    incircle: string;
    circumradiusR: string;
    circumcenter: string;
    circumcircle: string;
    rightAngle: string;
  };
  fields: {
    legA: string;
    legB: string;
    hypotenuseC: string;
    inradiusR: string;
    circumradiusR: string;
  };
  calculatorHeadings: {
    inradius: string;
    circumradius: string;
  };
  messages: {
    positive: string;
    invalid: string;
    hypotenuseKnownLeg: string;
    hypotenuseLongest: string;
    invalidTriangle: string;
  };
  runtime: {
    calculationComplete: string;
    unableToCalculate: string;
    fixErrors: string;
    errorPrefix: string;
    stepLabels: {
      formula: string;
      substitution: string;
      answer: string;
      explanation: string;
      detail: string;
    };
  };
  stepDescriptions: {
    inradius: string;
    circumradius: string;
  };
};

type RadiusLinks = {
  radius: FocusedRadiusRelatedLink;
  inradius: FocusedRadiusRelatedLink;
  circumradius: FocusedRadiusRelatedLink;
  area: FocusedRadiusRelatedLink;
  semiperimeter: FocusedRadiusRelatedLink;
  side: FocusedRadiusRelatedLink;
  hypotenuse: FocusedRadiusRelatedLink;
};

type RadiusPageCopy = Omit<RadiusPageTranslation, 'calculator' | 'formulaSection' | 'diagram' | 'example' | 'relatedLinks'> & {
  formulaParagraphs: string[];
  formulaPoints: string[];
  diagramParagraphs: string[];
  diagramNotes: string[];
  exampleGiven: string[];
  exampleResult: string;
};

type RadiusLanguagePack = {
  ui: FocusedRadiusCalculatorUi;
  links: RadiusLinks;
  inradius: RadiusPageCopy;
  circumradius: RadiusPageCopy;
};

type RadiusTranslationBundle = {
  ui: FocusedRadiusCalculatorUi;
  pages: Record<RadiusPageSlug, RadiusPageTranslation>;
};

const INRADIUS_FORMULA = 'r = (a + b − c) / 2';
const CIRCUMRADIUS_FORMULA = 'R = c / 2';
const INRADIUS_EXAMPLE_STEPS = [
  INRADIUS_FORMULA,
  'r = (6 + 8 − 10) / 2',
  'r = 4 / 2',
  'r = 2'
];
const CIRCUMRADIUS_EXAMPLE_STEPS = [CIRCUMRADIUS_FORMULA, 'R = 10 / 2', 'R = 5'];

const EN_UI: FocusedRadiusCalculatorUi = {
  badge: 'Radius Calculator',
  parentBreadcrumbLabel: 'Right Triangle Radius Calculator',
  openTool: 'Open Tool',
  sectionHeadings: {
    formula: 'Formula',
    diagram: 'Triangle Diagram',
    howToUse: 'How to Use This Calculator',
    example: 'Step-by-Step Example',
    given: 'Given:',
    resultMeaning: 'What the Result Means',
    radiusRelation: 'Radius Relation',
    useCases: 'When to Use This Calculator',
    commonMistakes: 'Common Mistakes',
    relatedCalculators: 'Related Calculators',
    faqs: 'FAQs'
  },
  diagram: {
    inradiusTitle: 'Right triangle inradius diagram',
    inradiusDescription:
      'A right triangle with leg a, leg b, hypotenuse c, incircle, inradius r, and a right angle.',
    circumradiusTitle: 'Right triangle circumradius diagram',
    circumradiusDescription:
      'A right triangle with hypotenuse c, circumcircle, circumradius R, right angle, and circumcenter at the midpoint of the hypotenuse.',
    legA: 'leg a',
    legB: 'leg b',
    hypotenuseC: 'hypotenuse c',
    inradiusR: 'inradius r',
    incircle: 'incircle',
    circumradiusR: 'circumradius R',
    circumcenter: 'circumcenter',
    circumcircle: 'circumcircle',
    rightAngle: 'right angle'
  },
  fields: {
    legA: 'Leg a',
    legB: 'Leg b',
    hypotenuseC: 'Hypotenuse c',
    inradiusR: 'Inradius r',
    circumradiusR: 'Circumradius R'
  },
  calculatorHeadings: {
    inradius: 'Calculate Inradius r',
    circumradius: 'Calculate Circumradius R'
  },
  messages: {
    positive: 'Please enter positive values.',
    invalid: 'Please enter positive values.',
    hypotenuseKnownLeg: 'The hypotenuse c should be the longest side.',
    hypotenuseLongest: 'The hypotenuse c should be the longest side.',
    invalidTriangle: 'These side lengths may not form a valid right triangle.'
  },
  runtime: {
    calculationComplete: 'Calculation complete.',
    unableToCalculate: 'Unable to calculate.',
    fixErrors: 'Please fix the errors in the fields above.',
    errorPrefix: 'Error',
    stepLabels: {
      formula: 'Formula',
      substitution: 'Substitution',
      answer: 'Answer',
      explanation: 'Explanation',
      detail: 'Detail'
    }
  },
  stepDescriptions: {
    inradius: 'Find the radius of the largest circle that fits inside the triangle.',
    circumradius: 'The circumradius is simply half of the hypotenuse.'
  }
};

const makeCalculator = (
  kind: 'inradius_strict' | 'circumradius',
  ui: FocusedRadiusCalculatorUi
): FormulaCalculatorConfig =>
  kind === 'inradius_strict'
    ? {
        kind,
        outputLabel: ui.fields.inradiusR,
        outputUnit: 'units',
        fields: [
          { key: 'a', label: ui.fields.legA, min: 0 },
          { key: 'b', label: ui.fields.legB, min: 0 },
          { key: 'c', label: ui.fields.hypotenuseC, min: 0 }
        ]
      }
    : {
        kind,
        outputLabel: ui.fields.circumradiusR,
        outputUnit: 'units',
        fields: [{ key: 'c', label: ui.fields.hypotenuseC, min: 0 }]
      };

const makeBundle = (pack: RadiusLanguagePack): RadiusTranslationBundle => ({
  ui: pack.ui,
  pages: {
    'right-triangle-inradius-calculator': {
      ...pack.inradius,
      calculator: makeCalculator('inradius_strict', pack.ui),
      formulaSection: {
        formula: INRADIUS_FORMULA,
        paragraphs: pack.inradius.formulaParagraphs,
        points: pack.inradius.formulaPoints
      },
      diagram: {
        paragraphs: pack.inradius.diagramParagraphs,
        notes: pack.inradius.diagramNotes
      },
      example: {
        given: pack.inradius.exampleGiven,
        steps: INRADIUS_EXAMPLE_STEPS,
        result: pack.inradius.exampleResult
      },
      relatedLinks: [
        pack.links.radius,
        pack.links.circumradius,
        pack.links.area,
        pack.links.semiperimeter,
        pack.links.side
      ]
    },
    'right-triangle-circumradius-calculator': {
      ...pack.circumradius,
      calculator: makeCalculator('circumradius', pack.ui),
      formulaSection: {
        formula: CIRCUMRADIUS_FORMULA,
        paragraphs: pack.circumradius.formulaParagraphs,
        points: pack.circumradius.formulaPoints
      },
      diagram: {
        paragraphs: pack.circumradius.diagramParagraphs,
        notes: pack.circumradius.diagramNotes
      },
      example: {
        given: pack.circumradius.exampleGiven,
        steps: CIRCUMRADIUS_EXAMPLE_STEPS,
        result: pack.circumradius.exampleResult
      },
      relatedLinks: [
        pack.links.radius,
        pack.links.inradius,
        pack.links.side,
        pack.links.area,
        pack.links.hypotenuse
      ]
    }
  }
});

const RADIUS_TRANSLATIONS: Partial<Record<Locale, RadiusTranslationBundle>> = {
  hi: makeBundle({
    ui: {
      badge: 'त्रिज्या कैलकुलेटर',
      parentBreadcrumbLabel: 'समकोण त्रिभुज त्रिज्या कैलकुलेटर',
      openTool: 'टूल खोलें',
      sectionHeadings: {
        formula: 'सूत्र',
        diagram: 'त्रिभुज आरेख',
        howToUse: 'इस कैलकुलेटर का उपयोग कैसे करें',
        example: 'चरण-दर-चरण उदाहरण',
        given: 'दिया गया:',
        resultMeaning: 'परिणाम का अर्थ',
        radiusRelation: 'त्रिज्या संबंध',
        useCases: 'इस कैलकुलेटर का उपयोग कब करें',
        commonMistakes: 'सामान्य गलतियां',
        relatedCalculators: 'संबंधित कैलकुलेटर',
        faqs: 'अक्सर पूछे जाने वाले प्रश्न'
      },
      diagram: {
        inradiusTitle: 'समकोण त्रिभुज अंतःत्रिज्या आरेख',
        inradiusDescription:
          'भुजा a, भुजा b, कर्ण c, अंतःवृत्त, अंतःत्रिज्या r और समकोण वाला समकोण त्रिभुज।',
        circumradiusTitle: 'समकोण त्रिभुज परिवृत्त त्रिज्या आरेख',
        circumradiusDescription:
          'कर्ण c, परिवृत्त, परिवृत्त त्रिज्या R, समकोण और कर्ण के मध्यबिंदु पर केंद्र वाला समकोण त्रिभुज।',
        legA: 'भुजा a',
        legB: 'भुजा b',
        hypotenuseC: 'कर्ण c',
        inradiusR: 'अंतःत्रिज्या r',
        incircle: 'अंतःवृत्त',
        circumradiusR: 'परिवृत्त त्रिज्या R',
        circumcenter: 'परिकेंद्र',
        circumcircle: 'परिवृत्त',
        rightAngle: 'समकोण'
      },
      fields: {
        legA: 'भुजा a',
        legB: 'भुजा b',
        hypotenuseC: 'कर्ण c',
        inradiusR: 'अंतःत्रिज्या r',
        circumradiusR: 'परिवृत्त त्रिज्या R'
      },
      calculatorHeadings: {
        inradius: 'अंतःत्रिज्या r निकालें',
        circumradius: 'परिवृत्त त्रिज्या R निकालें'
      },
      messages: {
        positive: 'कृपया धनात्मक मान दर्ज करें।',
        invalid: 'कृपया धनात्मक मान दर्ज करें।',
        hypotenuseKnownLeg: 'कर्ण c सबसे लंबी भुजा होना चाहिए।',
        hypotenuseLongest: 'कर्ण c सबसे लंबी भुजा होना चाहिए।',
        invalidTriangle: 'ये भुजाएं मान्य समकोण त्रिभुज नहीं बना सकतीं।'
      },
      runtime: {
        calculationComplete: 'गणना पूरी हुई।',
        unableToCalculate: 'गणना नहीं हो सकी।',
        fixErrors: 'कृपया ऊपर दिए गए फ़ील्ड की त्रुटियां ठीक करें।',
        errorPrefix: 'त्रुटि',
        stepLabels: {
          formula: 'सूत्र',
          substitution: 'प्रतिस्थापन',
          answer: 'उत्तर',
          explanation: 'व्याख्या',
          detail: 'विवरण'
        }
      },
      stepDescriptions: {
        inradius: 'त्रिभुज के अंदर फिट होने वाले सबसे बड़े वृत्त की त्रिज्या निकालें।',
        circumradius: 'परिवृत्त त्रिज्या कर्ण का आधा होती है।'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'समकोण त्रिभुज त्रिज्या कैलकुलेटर',
        description: 'अंतःत्रिज्या, परिवृत्त त्रिज्या और त्रिज्या संबंध मोड के लिए मुख्य कैलकुलेटर।'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'समकोण त्रिभुज अंतःत्रिज्या कैलकुलेटर',
        description: 'दोनों भुजाओं और कर्ण से अंतःत्रिज्या r निकालें।'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'समकोण त्रिभुज परिवृत्त त्रिज्या कैलकुलेटर',
        description: 'कर्ण c से परिवृत्त त्रिज्या R निकालें।'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'समकोण त्रिभुज क्षेत्रफल कैलकुलेटर',
        description: 'समकोण त्रिभुज की भुजाओं से क्षेत्रफल निकालें।'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'समकोण त्रिभुज अर्धपरिमाप कैलकुलेटर',
        description: 's वाले सूत्रों से पहले अर्धपरिमाप निकालें।'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'समकोण त्रिभुज भुजा कैलकुलेटर',
        description: 'त्रिज्या निकालने से पहले अज्ञात भुजा खोजें।'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'समकोण त्रिभुज कर्ण कैलकुलेटर',
        description: 'जब c ज्ञात न हो, तो दो भुजाओं से कर्ण निकालें।'
      }
    },
    inradius: {
      primaryKeyword: 'समकोण त्रिभुज अंतःत्रिज्या कैलकुलेटर',
      secondaryKeywords: [
        'समकोण त्रिभुज अंतःत्रिज्या',
        'समकोण त्रिभुज की अंतःत्रिज्या',
        'समकोण त्रिभुज अंतःवृत्त त्रिज्या',
        'समकोण त्रिभुज में r निकालें',
        'r = (a + b − c) / 2 कैलकुलेटर'
      ],
      h1: 'समकोण त्रिभुज अंतःत्रिज्या कैलकुलेटर',
      metaTitle: 'समकोण त्रिभुज अंतःत्रिज्या कैलकुलेटर | r = (a + b − c) / 2',
      metaDescription:
        'भुजा a, भुजा b और कर्ण c से अंतःत्रिज्या r निकालने के लिए यह समकोण त्रिभुज अंतःत्रिज्या कैलकुलेटर उपयोग करें।',
      modes: ['अंतःत्रिज्या', 'त्रिज्या संबंध r'],
      intro: [
        'जब आपके पास भुजा a, भुजा b और कर्ण c हो और अंतःत्रिज्या r चाहिए, तब इस कैलकुलेटर का उपयोग करें।',
        'अंतःत्रिज्या उस अंतःवृत्त की त्रिज्या है जो समकोण त्रिभुज के अंदर फिट होता है और तीनों भुजाओं को छूता है।'
      ],
      calculatorNote:
        'a, b और c के लिए धनात्मक मान दर्ज करें। कर्ण c सबसे लंबी भुजा होना चाहिए और तीनों भुजाएं मान्य समकोण त्रिभुज बनानी चाहिए।',
      formulaParagraphs: [
        'समकोण त्रिभुज में अंतःत्रिज्या सीधे दोनों भुजाओं और कर्ण से मिलती है।',
        'यहां a और b भुजाएं हैं, c कर्ण है, और r अंतःत्रिज्या है।'
      ],
      formulaPoints: [
        'दोनों भुजाएं जोड़ें: a + b.',
        'कर्ण घटाएं: a + b − c.',
        'अंतःत्रिज्या r पाने के लिए परिणाम को 2 से भाग दें।'
      ],
      diagramParagraphs: [
        'आरेख समकोण त्रिभुज के अंदर अंतःवृत्त दिखाता है। वृत्त भुजा a, भुजा b और कर्ण c को छूता है।'
      ],
      diagramNotes: [
        'r से चिह्नित रेखाखंड अंतःत्रिज्या है।',
        'छोटा वर्ग समकोण दिखाता है।',
        'कर्ण c समकोण के सामने है और सबसे लंबी भुजा है।'
      ],
      howToUse: [
        'भुजा a की लंबाई दर्ज करें।',
        'भुजा b की लंबाई दर्ज करें।',
        'कर्ण c की लंबाई दर्ज करें।',
        'जांचें कि c सबसे लंबी भुजा है और फिर अंतःत्रिज्या r निकालें।'
      ],
      exampleGiven: ['भुजा a = 6', 'भुजा b = 8', 'कर्ण c = 10'],
      exampleResult: '6-8-10 समकोण त्रिभुज के लिए अंतःत्रिज्या 2 units है।',
      resultMeaning: [
        'परिणाम r अंतःवृत्त की त्रिज्या है। यदि r = 2 है, तो 2 units त्रिज्या वाला वृत्त त्रिभुज के अंदर तीनों भुजाओं को छू सकता है।'
      ],
      radiusRelation: [
        'मुख्य त्रिज्या कैलकुलेटर में यही गणना अंतःत्रिज्या और त्रिज्या संबंध r मोड के रूप में उपलब्ध है।'
      ],
      useCases: [
        'समकोण त्रिभुज में अंतःवृत्त की त्रिज्या निकालना।',
        'तीनों भुजाएं दिए हुए ज्यामिति प्रश्न जांचना।',
        'अंतःत्रिज्या r की तुलना परिवृत्त त्रिज्या R से करना।'
      ],
      commonMistakes: [
        'c को कर्ण के बजाय भुजा मान लेना।',
        'a + b − c को 2 से भाग देना भूल जाना।',
        'अमान्य समकोण त्रिभुज की भुजाएं दर्ज करना।'
      ],
      faqs: [
        {
          question: 'समकोण त्रिभुज की अंतःत्रिज्या का सूत्र क्या है?',
          answer: 'सूत्र r = (a + b − c) / 2 है, जहां a और b भुजाएं हैं, c कर्ण है, और r अंतःत्रिज्या है।'
        },
        {
          question: 'अंतःत्रिज्या परिणाम का क्या अर्थ है?',
          answer: 'यह उस वृत्त की त्रिज्या है जो समकोण त्रिभुज के अंदर फिट होकर तीनों भुजाओं को छूता है।'
        },
        {
          question: 'c को कर्ण क्यों होना चाहिए?',
          answer: 'यह सूत्र मानता है कि c समकोण के सामने वाली भुजा है। समकोण त्रिभुज में वही कर्ण और सबसे लंबी भुजा होती है।'
        },
        {
          question: 'क्या केवल दो भुजाओं से अंतःत्रिज्या मिल सकती है?',
          answer: 'हां, पहले पाइथागोरस प्रमेय से कर्ण c निकालें, फिर r = (a + b − c) / 2 उपयोग करें।'
        },
        {
          question: 'क्या अंतःत्रिज्या और परिवृत्त त्रिज्या समान हैं?',
          answer: 'नहीं। r त्रिभुज के अंदर वाले वृत्त की त्रिज्या है, जबकि R तीनों शीर्षों से गुजरने वाले वृत्त की त्रिज्या है।'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'समकोण त्रिभुज परिवृत्त त्रिज्या कैलकुलेटर',
      secondaryKeywords: [
        'समकोण त्रिभुज परिवृत्त त्रिज्या',
        'समकोण त्रिभुज की परिवृत्त त्रिज्या',
        'समकोण त्रिभुज परिवृत्त',
        'समकोण त्रिभुज में R निकालें',
        'R = c / 2 कैलकुलेटर'
      ],
      h1: 'समकोण त्रिभुज परिवृत्त त्रिज्या कैलकुलेटर',
      metaTitle: 'समकोण त्रिभुज परिवृत्त त्रिज्या कैलकुलेटर | R = c / 2',
      metaDescription:
        'कर्ण c से परिवृत्त त्रिज्या R निकालने के लिए यह समकोण त्रिभुज परिवृत्त त्रिज्या कैलकुलेटर उपयोग करें।',
      modes: ['परिवृत्त त्रिज्या', 'त्रिज्या संबंध R'],
      intro: [
        'जब कर्ण c ज्ञात हो और परिवृत्त त्रिज्या R चाहिए, तब इस कैलकुलेटर का उपयोग करें।',
        'समकोण त्रिभुज में कर्ण परिवृत्त का व्यास होता है, इसलिए परिवृत्त त्रिज्या कर्ण का आधा होती है।'
      ],
      calculatorNote:
        'कर्ण c के लिए धनात्मक मान दर्ज करें। यह कैलकुलेटर मानता है कि c समकोण के सामने वाली भुजा है।',
      formulaParagraphs: [
        'हर समकोण त्रिभुज में कर्ण परिवृत्त का व्यास होता है।',
        'यहां c कर्ण है और R परिवृत्त त्रिज्या है।'
      ],
      formulaPoints: ['कर्ण c से शुरू करें।', 'c को 2 से भाग दें।', 'परिणाम परिवृत्त त्रिज्या R है।'],
      diagramParagraphs: [
        'आरेख समकोण त्रिभुज के चारों ओर परिवृत्त दिखाता है। कर्ण c वृत्त का व्यास बनता है।'
      ],
      diagramNotes: [
        'परिकेंद्र कर्ण का मध्यबिंदु है।',
        'R से चिह्नित रेखाखंड परिवृत्त त्रिज्या है।',
        'वृत्त त्रिभुज के तीनों शीर्षों से गुजरता है।'
      ],
      howToUse: [
        'कर्ण c की लंबाई दर्ज करें।',
        'सुनिश्चित करें कि c 0 से बड़ा है।',
        'परिवृत्त त्रिज्या R निकालें।',
        'परिणाम को R के रूप में पढ़ें।'
      ],
      exampleGiven: ['कर्ण c = 10'],
      exampleResult: 'कर्ण 10 वाले समकोण त्रिभुज के लिए परिवृत्त त्रिज्या 5 units है।',
      resultMeaning: [
        'परिणाम R परिवृत्त की त्रिज्या है। यदि R = 5 है, तो तीनों शीर्षों से गुजरने वाले वृत्त की त्रिज्या 5 units है।'
      ],
      radiusRelation: [
        'मुख्य त्रिज्या कैलकुलेटर में यही गणना परिवृत्त त्रिज्या और त्रिज्या संबंध R मोड के रूप में उपलब्ध है।'
      ],
      useCases: [
        'तीनों शीर्षों से गुजरने वाले वृत्त की त्रिज्या निकालना।',
        'ज्ञात कर्ण से परिवृत्त ज्यामिति पर काम करना।',
        'परिवृत्त त्रिज्या R की तुलना अंतःत्रिज्या r से करना।'
      ],
      commonMistakes: [
        'कर्ण c के बजाय किसी भुजा की लंबाई दर्ज करना।',
        'यह भूलना कि R, c का आधा है।',
        'परिवृत्त त्रिज्या R और अंतःत्रिज्या r को मिलाना।'
      ],
      faqs: [
        {
          question: 'समकोण त्रिभुज की परिवृत्त त्रिज्या का सूत्र क्या है?',
          answer: 'सूत्र R = c / 2 है, जहां c कर्ण है और R परिवृत्त त्रिज्या है।'
        },
        {
          question: 'परिवृत्त त्रिज्या परिणाम का क्या अर्थ है?',
          answer: 'यह उस वृत्त की त्रिज्या है जो समकोण त्रिभुज के तीनों शीर्षों से गुजरता है।'
        },
        {
          question: 'परिकेंद्र कर्ण के मध्यबिंदु पर क्यों होता है?',
          answer: 'समकोण त्रिभुज में कर्ण परिवृत्त का व्यास होता है, इसलिए उसका मध्यबिंदु वृत्त का केंद्र होता है।'
        },
        {
          question: 'क्या R निकालने के लिए भुजा a या b चाहिए?',
          answer: 'नहीं। यदि कर्ण c ज्ञात है, तो परिवृत्त त्रिज्या सीधे R = c / 2 है।'
        },
        {
          question: 'क्या परिवृत्त त्रिज्या व्यास के समान है?',
          answer: 'नहीं। कर्ण c परिवृत्त का व्यास है, और R उस व्यास का आधा है।'
        }
      ]
    }
  }),
  zh: makeBundle({
    ui: {
      badge: '半径计算器',
      parentBreadcrumbLabel: '直角三角形半径计算器',
      openTool: '打开工具',
      sectionHeadings: {
        formula: '公式',
        diagram: '三角形示意图',
        howToUse: '如何使用此计算器',
        example: '分步示例',
        given: '已知:',
        resultMeaning: '结果含义',
        radiusRelation: '半径关系',
        useCases: '何时使用此计算器',
        commonMistakes: '常见错误',
        relatedCalculators: '相关计算器',
        faqs: '常见问题'
      },
      diagram: {
        inradiusTitle: '直角三角形内切圆半径示意图',
        inradiusDescription:
          '包含边 a、边 b、斜边 c、内切圆、内切圆半径 r 和直角的直角三角形。',
        circumradiusTitle: '直角三角形外接圆半径示意图',
        circumradiusDescription:
          '包含斜边 c、外接圆、外接圆半径 R、直角以及位于斜边中点的圆心的直角三角形。',
        legA: '边 a',
        legB: '边 b',
        hypotenuseC: '斜边 c',
        inradiusR: '内切圆半径 r',
        incircle: '内切圆',
        circumradiusR: '外接圆半径 R',
        circumcenter: '外心',
        circumcircle: '外接圆',
        rightAngle: '直角'
      },
      fields: {
        legA: '边 a',
        legB: '边 b',
        hypotenuseC: '斜边 c',
        inradiusR: '内切圆半径 r',
        circumradiusR: '外接圆半径 R'
      },
      calculatorHeadings: {
        inradius: '计算内切圆半径 r',
        circumradius: '计算外接圆半径 R'
      },
      messages: {
        positive: '请输入正数。',
        invalid: '请输入正数。',
        hypotenuseKnownLeg: '斜边 c 应为最长边。',
        hypotenuseLongest: '斜边 c 应为最长边。',
        invalidTriangle: '这些边长可能无法组成有效的直角三角形。'
      },
      runtime: {
        calculationComplete: '计算完成。',
        unableToCalculate: '无法计算。',
        fixErrors: '请修正上方字段中的错误。',
        errorPrefix: '错误',
        stepLabels: {
          formula: '公式',
          substitution: '代入',
          answer: '答案',
          explanation: '说明',
          detail: '详情'
        }
      },
      stepDescriptions: {
        inradius: '求能放入三角形内部的最大圆的半径。',
        circumradius: '外接圆半径等于斜边的一半。'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: '直角三角形半径计算器',
        description: '使用父级计算器处理内切圆半径、外接圆半径和半径关系。'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: '直角三角形内切圆半径计算器',
        description: '由两条直角边和斜边求 r。'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: '直角三角形外接圆半径计算器',
        description: '由斜边 c 求 R。'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: '直角三角形面积计算器',
        description: '由直角三角形边长计算面积。'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: '直角三角形半周长计算器',
        description: '在使用含 s 的公式前求半周长。'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: '直角三角形边长计算器',
        description: '在计算半径前求缺失边。'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: '直角三角形斜边计算器',
        description: '当 c 未知时，由两条边求斜边。'
      }
    },
    inradius: {
      primaryKeyword: '直角三角形内切圆半径计算器',
      secondaryKeywords: ['直角三角形内切圆半径', '内切圆半径', 'r = (a + b − c) / 2 计算器'],
      h1: '直角三角形内切圆半径计算器',
      metaTitle: '直角三角形内切圆半径计算器 | r = (a + b − c) / 2',
      metaDescription:
        '使用此计算器，由边 a、边 b 和斜边 c 求内切圆半径 r。',
      modes: ['内切圆半径', '半径关系 r'],
      intro: [
        '当已知 a、b 和斜边 c，并需要求 r 时使用此页面。',
        'r 是内切圆的半径，该圆与直角三角形的三条边相切。'
      ],
      calculatorNote:
        '请输入 a、b、c 的正值。斜边 c 必须是最长边，并且这些边长应组成有效直角三角形。',
      formulaParagraphs: ['在直角三角形中，内切圆半径可直接由两条边和斜边求出。'],
      formulaPoints: ['相加两边: a + b.', '减去斜边: a + b − c.', '再除以 2 得到 r。'],
      diagramParagraphs: ['示意图显示直角三角形内部的内切圆。'],
      diagramNotes: ['r 是内切圆半径。', 'c 是斜边，也是最长边。'],
      howToUse: ['输入 a。', '输入 b。', '输入斜边 c。', '检查三角形并计算 r。'],
      exampleGiven: ['边 a = 6', '边 b = 8', '斜边 c = 10'],
      exampleResult: '对于 6-8-10 直角三角形，内切圆半径为 2 units。',
      resultMeaning: ['结果 r 是三角形内部内切圆的半径。'],
      radiusRelation: ['在父级计算器中，同一计算显示为内切圆半径和半径关系 r。'],
      useCases: ['求内切圆半径。', '检查已知三边的问题。', '比较 r 与 R。'],
      commonMistakes: ['把 c 当作普通边。', '忘记除以 2。', '输入无效边长。'],
      faqs: [
        {
          question: '内切圆半径公式是什么？',
          answer: '公式为 r = (a + b − c) / 2，其中 a 和 b 是边，c 是斜边。'
        },
        {
          question: 'r 表示什么？',
          answer: 'r 是三角形内部与三条边相切的圆的半径。'
        },
        {
          question: '为什么 c 必须是斜边？',
          answer: '因为该公式把 c 作为直角对边来使用。'
        }
      ]
    },
    circumradius: {
      primaryKeyword: '直角三角形外接圆半径计算器',
      secondaryKeywords: ['直角三角形外接圆半径', '外接圆半径', 'R = c / 2 计算器'],
      h1: '直角三角形外接圆半径计算器',
      metaTitle: '直角三角形外接圆半径计算器 | R = c / 2',
      metaDescription:
        '使用此计算器，由斜边 c 求外接圆半径 R。',
      modes: ['外接圆半径', '半径关系 R'],
      intro: [
        '当已知斜边 c，并需要求 R 时使用此页面。',
        '在直角三角形中，斜边是外接圆的直径。'
      ],
      calculatorNote: '请输入斜边 c 的正值。c 是直角的对边。',
      formulaParagraphs: ['外接圆的直径是 c，因此半径是 c / 2。'],
      formulaPoints: ['从斜边 c 开始。', '将 c 除以 2。', '结果为 R。'],
      diagramParagraphs: ['示意图显示包围直角三角形的外接圆。'],
      diagramNotes: ['外心位于斜边中点。', 'R 是外接圆半径。'],
      howToUse: ['输入 c。', '确认 c > 0。', '计算 R。', '将结果读作 R。'],
      exampleGiven: ['斜边 c = 10'],
      exampleResult: '若斜边为 10，则外接圆半径为 5 units。',
      resultMeaning: ['结果 R 是经过三个顶点的圆的半径。'],
      radiusRelation: ['在父级计算器中，同一计算显示为外接圆半径和半径关系 R。'],
      useCases: ['求外接圆半径。', '使用已知斜边。', '比较 R 与 r。'],
      commonMistakes: ['输入 c 以外的边。', '忘记 R 是 c 的一半。', '混淆 R 和 r。'],
      faqs: [
        {
          question: '外接圆半径公式是什么？',
          answer: '公式为 R = c / 2，其中 c 是斜边。'
        },
        {
          question: 'R 表示什么？',
          answer: 'R 是经过三个顶点的圆的半径。'
        },
        {
          question: '需要 a 或 b 吗？',
          answer: '不需要。已知 c 时，R = c / 2 即可。'
        }
      ]
    }
  }),
  sv: makeBundle({
    ui: {
      badge: 'Radiekalkylator',
      parentBreadcrumbLabel: 'Radiekalkylator för rätvinkliga trianglar',
      openTool: 'Öppna verktyg',
      sectionHeadings: {
        formula: 'Formel',
        diagram: 'Triangeldiagram',
        howToUse: 'Så använder du kalkylatorn',
        example: 'Stegvis exempel',
        given: 'Givet:',
        resultMeaning: 'Vad resultatet betyder',
        radiusRelation: 'Radierelation',
        useCases: 'När kalkylatorn används',
        commonMistakes: 'Vanliga misstag',
        relatedCalculators: 'Relaterade kalkylatorer',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: 'Diagram för inradie i rätvinklig triangel',
        inradiusDescription:
          'Rätvinklig triangel med sida a, sida b, hypotenusa c, incirkel, inradie r och rät vinkel.',
        circumradiusTitle: 'Diagram för omskriven radie i rätvinklig triangel',
        circumradiusDescription:
          'Rätvinklig triangel med hypotenusa c, omskriven cirkel, radie R, rät vinkel och centrum i hypotenusans mittpunkt.',
        legA: 'sida a',
        legB: 'sida b',
        hypotenuseC: 'hypotenusa c',
        inradiusR: 'inradie r',
        incircle: 'incirkel',
        circumradiusR: 'omskriven radie R',
        circumcenter: 'centrum',
        circumcircle: 'omskriven cirkel',
        rightAngle: 'rät vinkel'
      },
      fields: {
        legA: 'Sida a',
        legB: 'Sida b',
        hypotenuseC: 'Hypotenusa c',
        inradiusR: 'Inradie r',
        circumradiusR: 'Omskriven radie R'
      },
      calculatorHeadings: {
        inradius: 'Beräkna inradie r',
        circumradius: 'Beräkna omskriven radie R'
      },
      messages: {
        positive: 'Ange positiva värden.',
        invalid: 'Ange positiva värden.',
        hypotenuseKnownLeg: 'Hypotenusan c ska vara den längsta sidan.',
        hypotenuseLongest: 'Hypotenusan c ska vara den längsta sidan.',
        invalidTriangle: 'Dessa sidlängder kanske inte bildar en giltig rätvinklig triangel.'
      },
      runtime: {
        calculationComplete: 'Beräkningen är klar.',
        unableToCalculate: 'Kan inte beräkna.',
        fixErrors: 'Rätta felen i fälten ovan.',
        errorPrefix: 'Fel',
        stepLabels: {
          formula: 'Formel',
          substitution: 'Insättning',
          answer: 'Svar',
          explanation: 'Förklaring',
          detail: 'Detalj'
        }
      },
      stepDescriptions: {
        inradius: 'Hitta radien för den största cirkeln som ryms i triangeln.',
        circumradius: 'Den omskrivna radien är hälften av hypotenusan.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'radiekalkylator för rätvinklig triangel',
        description: 'Använd huvudkalkylatorn för inradie, omskriven radie och radierelationer.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'inradiekalkylator för rätvinklig triangel',
        description: 'Hitta r från två sidor och hypotenusan.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'kalkylator för omskriven radie i rätvinklig triangel',
        description: 'Hitta R från hypotenusan c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'areakalkylator för rätvinklig triangel',
        description: 'Beräkna arean från triangelns sidlängder.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'halvomkretskalkylator för rätvinklig triangel',
        description: 'Hitta halv omkrets före formler med s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'sidokalkylator för rätvinklig triangel',
        description: 'Hitta en saknad sida före radieberäkning.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'hypotenusakalkylator för rätvinklig triangel',
        description: 'Hitta hypotenusan från två sidor när c saknas.'
      }
    },
    inradius: {
      primaryKeyword: 'inradiekalkylator för rätvinklig triangel',
      secondaryKeywords: ['inradie rätvinklig triangel', 'incirkelns radie', 'r = (a + b − c) / 2 kalkylator'],
      h1: 'Inradiekalkylator för rätvinklig triangel',
      metaTitle: 'Inradiekalkylator för rätvinklig triangel | r = (a + b − c) / 2',
      metaDescription:
        'Använd kalkylatorn för att hitta inradien r från sida a, sida b och hypotenusan c.',
      modes: ['Inradie', 'Radierelation r'],
      intro: [
        'Använd sidan när a, b och hypotenusan c är kända och du vill hitta r.',
        'r är radien för incirkeln som tangerar triangelns tre sidor.'
      ],
      calculatorNote:
        'Ange positiva värden för a, b och c. Hypotenusan c måste vara längst och bilda en giltig rätvinklig triangel.',
      formulaParagraphs: ['I en rätvinklig triangel kan inradien beräknas direkt från två sidor och hypotenusan.'],
      formulaPoints: ['Addera sidorna: a + b.', 'Subtrahera hypotenusan: a + b − c.', 'Dela med 2 för att få r.'],
      diagramParagraphs: ['Diagrammet visar incirkeln inuti den rätvinkliga triangeln.'],
      diagramNotes: ['r är inradien.', 'c är hypotenusan och den längsta sidan.'],
      howToUse: ['Ange a.', 'Ange b.', 'Ange hypotenusan c.', 'Kontrollera triangeln och beräkna r.'],
      exampleGiven: ['Sida a = 6', 'Sida b = 8', 'Hypotenusa c = 10'],
      exampleResult: 'För en rätvinklig 6-8-10-triangel är inradien 2 units.',
      resultMeaning: ['Resultatet r är radien för cirkeln inuti triangeln.'],
      radiusRelation: ['I huvudkalkylatorn visas samma beräkning som Inradie och Radierelation r.'],
      useCases: ['Hitta incirkelns radie.', 'Kontrollera uppgifter med tre sidor.', 'Jämföra r med R.'],
      commonMistakes: ['Använda c som vanlig sida.', 'Glömma att dela med 2.', 'Ange ogiltiga sidor.'],
      faqs: [
        {
          question: 'Vad är formeln för inradien?',
          answer: 'Formeln är r = (a + b − c) / 2, där a och b är sidor och c är hypotenusan.'
        },
        {
          question: 'Vad betyder r?',
          answer: 'r är radien för cirkeln som tangerar de tre sidorna inuti triangeln.'
        },
        {
          question: 'Varför måste c vara hypotenusan?',
          answer: 'Formeln använder c som sidan mittemot den räta vinkeln.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'kalkylator för omskriven radie i rätvinklig triangel',
      secondaryKeywords: ['omskriven radie rätvinklig triangel', 'omskrivna cirkelns radie', 'R = c / 2 kalkylator'],
      h1: 'Kalkylator för omskriven radie i rätvinklig triangel',
      metaTitle: 'Kalkylator för omskriven radie i rätvinklig triangel | R = c / 2',
      metaDescription:
        'Använd kalkylatorn för att hitta den omskrivna radien R från hypotenusan c.',
      modes: ['Omskriven radie', 'Radierelation R'],
      intro: [
        'Använd sidan när hypotenusan c är känd och du vill hitta R.',
        'I en rätvinklig triangel är hypotenusan diametern i den omskrivna cirkeln.'
      ],
      calculatorNote: 'Ange ett positivt värde för hypotenusan c. c är sidan mittemot den räta vinkeln.',
      formulaParagraphs: ['Den omskrivna cirkelns diameter är c, så radien är c / 2.'],
      formulaPoints: ['Börja med hypotenusan c.', 'Dela c med 2.', 'Resultatet är R.'],
      diagramParagraphs: ['Diagrammet visar den omskrivna cirkeln runt den rätvinkliga triangeln.'],
      diagramNotes: ['Centrum ligger i hypotenusans mittpunkt.', 'R är den omskrivna radien.'],
      howToUse: ['Ange c.', 'Kontrollera att c > 0.', 'Beräkna R.', 'Läs resultatet som R.'],
      exampleGiven: ['Hypotenusa c = 10'],
      exampleResult: 'Om hypotenusan är 10 är den omskrivna radien 5 units.',
      resultMeaning: ['Resultatet R är radien för cirkeln genom de tre hörnen.'],
      radiusRelation: ['I huvudkalkylatorn visas samma beräkning som Omskriven radie och Radierelation R.'],
      useCases: ['Hitta den omskrivna cirkelns radie.', 'Använda en känd hypotenusa.', 'Jämföra R med r.'],
      commonMistakes: ['Ange en annan sida än c.', 'Glömma att R är hälften av c.', 'Blanda ihop R och r.'],
      faqs: [
        {
          question: 'Vad är formeln för den omskrivna radien?',
          answer: 'Formeln är R = c / 2, där c är hypotenusan.'
        },
        {
          question: 'Vad betyder R?',
          answer: 'R är radien för cirkeln som går genom de tre hörnen.'
        },
        {
          question: 'Behöver jag a eller b?',
          answer: 'Nej. Om c är känd räcker R = c / 2.'
        }
      ]
    }
  }),
  tr: makeBundle({
    ui: {
      badge: 'Yarıçap hesaplayıcı',
      parentBreadcrumbLabel: 'Dik Üçgen Yarıçap Hesaplayıcı',
      openTool: 'Aracı aç',
      sectionHeadings: {
        formula: 'Formül',
        diagram: 'Üçgen diyagramı',
        howToUse: 'Bu hesaplayıcı nasıl kullanılır',
        example: 'Adım adım örnek',
        given: 'Verilen:',
        resultMeaning: 'Sonucun anlamı',
        radiusRelation: 'Yarıçap ilişkisi',
        useCases: 'Bu hesaplayıcı ne zaman kullanılır',
        commonMistakes: 'Yaygın hatalar',
        relatedCalculators: 'İlgili hesaplayıcılar',
        faqs: 'SSS'
      },
      diagram: {
        inradiusTitle: 'Dik üçgen içteğet yarıçapı diyagramı',
        inradiusDescription:
          'Kenar a, kenar b, hipotenüs c, içteğet çember, içteğet yarıçapı r ve dik açı gösterilen dik üçgen.',
        circumradiusTitle: 'Dik üçgen çevrel yarıçap diyagramı',
        circumradiusDescription:
          'Hipotenüs c, çevrel çember, çevrel yarıçap R, dik açı ve hipotenüsün orta noktasındaki merkez gösterilen dik üçgen.',
        legA: 'kenar a',
        legB: 'kenar b',
        hypotenuseC: 'hipotenüs c',
        inradiusR: 'içteğet yarıçapı r',
        incircle: 'içteğet çember',
        circumradiusR: 'çevrel yarıçap R',
        circumcenter: 'çevrel merkez',
        circumcircle: 'çevrel çember',
        rightAngle: 'dik açı'
      },
      fields: {
        legA: 'Kenar a',
        legB: 'Kenar b',
        hypotenuseC: 'Hipotenüs c',
        inradiusR: 'İçteğet yarıçapı r',
        circumradiusR: 'Çevrel yarıçap R'
      },
      calculatorHeadings: {
        inradius: 'İçteğet yarıçapı r hesapla',
        circumradius: 'Çevrel yarıçap R hesapla'
      },
      messages: {
        positive: 'Lütfen pozitif değerler girin.',
        invalid: 'Lütfen pozitif değerler girin.',
        hypotenuseKnownLeg: 'Hipotenüs c en uzun kenar olmalıdır.',
        hypotenuseLongest: 'Hipotenüs c en uzun kenar olmalıdır.',
        invalidTriangle: 'Bu kenar uzunlukları geçerli bir dik üçgen oluşturmayabilir.'
      },
      runtime: {
        calculationComplete: 'Hesaplama tamamlandı.',
        unableToCalculate: 'Hesaplanamadı.',
        fixErrors: 'Yukarıdaki alanlardaki hataları düzeltin.',
        errorPrefix: 'Hata',
        stepLabels: {
          formula: 'Formül',
          substitution: 'Yerine koyma',
          answer: 'Cevap',
          explanation: 'Açıklama',
          detail: 'Ayrıntı'
        }
      },
      stepDescriptions: {
        inradius: 'Üçgenin içine sığan en büyük çemberin yarıçapını bulun.',
        circumradius: 'Çevrel yarıçap hipotenüsün yarısıdır.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'dik üçgen yarıçap hesaplayıcı',
        description: 'İçteğet yarıçapı, çevrel yarıçap ve yarıçap ilişkileri için ana hesaplayıcı.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'dik üçgen içteğet yarıçapı hesaplayıcı',
        description: 'İki kenar ve hipotenüsten r bulun.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'dik üçgen çevrel yarıçap hesaplayıcı',
        description: 'Hipotenüs c ile R bulun.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'dik üçgen alan hesaplayıcı',
        description: 'Dik üçgenin kenar uzunluklarından alanı hesaplayın.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'dik üçgen yarı çevre hesaplayıcı',
        description: 's kullanılan formüllerden önce yarı çevreyi bulun.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'dik üçgen kenar hesaplayıcı',
        description: 'Yarıçap hesaplamadan önce eksik kenarı bulun.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'dik üçgen hipotenüs hesaplayıcı',
        description: 'c bilinmiyorsa iki kenardan hipotenüsü bulun.'
      }
    },
    inradius: {
      primaryKeyword: 'dik üçgen içteğet yarıçapı hesaplayıcı',
      secondaryKeywords: ['dik üçgen içteğet yarıçapı', 'içteğet çember yarıçapı', 'r = (a + b − c) / 2 hesaplayıcı'],
      h1: 'Dik Üçgen İçteğet Yarıçapı Hesaplayıcı',
      metaTitle: 'Dik Üçgen İçteğet Yarıçapı Hesaplayıcı | r = (a + b − c) / 2',
      metaDescription:
        'Kenar a, kenar b ve hipotenüs c ile içteğet yarıçapı r değerini bulun.',
      modes: ['İçteğet yarıçapı', 'Yarıçap ilişkisi r'],
      intro: [
        'a, b ve hipotenüs c biliniyorsa ve r gerekiyorsa bu sayfayı kullanın.',
        'r, üç kenara temas eden içteğet çemberin yarıçapıdır.'
      ],
      calculatorNote:
        'a, b ve c için pozitif değerler girin. Hipotenüs c en uzun kenar olmalı ve geçerli bir dik üçgen oluşturmalıdır.',
      formulaParagraphs: ['Dik üçgende içteğet yarıçapı iki kenar ve hipotenüsten doğrudan hesaplanır.'],
      formulaPoints: ['Kenarları toplayın: a + b.', 'Hipotenüsü çıkarın: a + b − c.', 'r için 2’ye bölün.'],
      diagramParagraphs: ['Diyagram, dik üçgenin içindeki içteğet çemberi gösterir.'],
      diagramNotes: ['r içteğet yarıçapıdır.', 'c hipotenüs ve en uzun kenardır.'],
      howToUse: ['a girin.', 'b girin.', 'Hipotenüs c girin.', 'Üçgeni kontrol edip r hesaplayın.'],
      exampleGiven: ['Kenar a = 6', 'Kenar b = 8', 'Hipotenüs c = 10'],
      exampleResult: '6-8-10 dik üçgeninde içteğet yarıçapı 2 units olur.',
      resultMeaning: ['Sonuç r, üçgenin içindeki çemberin yarıçapıdır.'],
      radiusRelation: ['Ana hesaplayıcıda aynı işlem İçteğet yarıçapı ve Yarıçap ilişkisi r olarak görünür.'],
      useCases: ['İçteğet çember yarıçapını bulmak.', 'Üç kenarlı soruları kontrol etmek.', 'r ile R karşılaştırmak.'],
      commonMistakes: ['c değerini hipotenüs yerine kenar sanmak.', '2’ye bölmeyi unutmak.', 'Geçersiz kenarlar girmek.'],
      faqs: [
        {
          question: 'İçteğet yarıçapı formülü nedir?',
          answer: 'Formül r = (a + b − c) / 2 şeklindedir; a ve b kenarlar, c hipotenüstür.'
        },
        {
          question: 'r neyi ifade eder?',
          answer: 'r, üçgenin içinde üç kenara temas eden çemberin yarıçapıdır.'
        },
        {
          question: 'c neden hipotenüs olmalıdır?',
          answer: 'Çünkü formül c değerini dik açının karşısındaki kenar olarak kullanır.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'dik üçgen çevrel yarıçap hesaplayıcı',
      secondaryKeywords: ['dik üçgen çevrel yarıçap', 'çevrel çember yarıçapı', 'R = c / 2 hesaplayıcı'],
      h1: 'Dik Üçgen Çevrel Yarıçap Hesaplayıcı',
      metaTitle: 'Dik Üçgen Çevrel Yarıçap Hesaplayıcı | R = c / 2',
      metaDescription:
        'Hipotenüs c ile çevrel yarıçap R değerini bulun.',
      modes: ['Çevrel yarıçap', 'Yarıçap ilişkisi R'],
      intro: [
        'Hipotenüs c biliniyorsa ve R gerekiyorsa bu sayfayı kullanın.',
        'Dik üçgende hipotenüs çevrel çemberin çapıdır.'
      ],
      calculatorNote: 'Hipotenüs c için pozitif bir değer girin. c dik açının karşısındaki kenardır.',
      formulaParagraphs: ['Çevrel çemberin çapı c olduğundan yarıçap c / 2 olur.'],
      formulaPoints: ['Hipotenüs c ile başlayın.', 'c değerini 2’ye bölün.', 'Sonuç R olur.'],
      diagramParagraphs: ['Diyagram, dik üçgenin çevresindeki çevrel çemberi gösterir.'],
      diagramNotes: ['Çevrel merkez hipotenüsün orta noktasıdır.', 'R çevrel yarıçaptır.'],
      howToUse: ['c girin.', 'c > 0 olduğundan emin olun.', 'R hesaplayın.', 'Sonucu R olarak okuyun.'],
      exampleGiven: ['Hipotenüs c = 10'],
      exampleResult: 'Hipotenüs 10 ise çevrel yarıçap 5 units olur.',
      resultMeaning: ['Sonuç R, üç köşeden geçen çemberin yarıçapıdır.'],
      radiusRelation: ['Ana hesaplayıcıda aynı işlem Çevrel yarıçap ve Yarıçap ilişkisi R olarak görünür.'],
      useCases: ['Çevrel çember yarıçapını bulmak.', 'Bilinen hipotenüsü kullanmak.', 'R ile r karşılaştırmak.'],
      commonMistakes: ['c yerine başka kenar girmek.', 'R’nin c’nin yarısı olduğunu unutmak.', 'R ve r değerlerini karıştırmak.'],
      faqs: [
        {
          question: 'Çevrel yarıçap formülü nedir?',
          answer: 'Formül R = c / 2 şeklindedir; c hipotenüstür.'
        },
        {
          question: 'R neyi ifade eder?',
          answer: 'R, üç köşeden geçen çemberin yarıçapıdır.'
        },
        {
          question: 'a veya b gerekir mi?',
          answer: 'Hayır. c biliniyorsa R = c / 2 yeterlidir.'
        }
      ]
    }
  }),
  bg: makeBundle({
    ui: {
      badge: 'Калкулатор за радиус',
      parentBreadcrumbLabel: 'Калкулатор за радиуси на правоъгълен триъгълник',
      openTool: 'Отворете инструмента',
      sectionHeadings: {
        formula: 'Формула',
        diagram: 'Диаграма на триъгълника',
        howToUse: 'Как да използвате този калкулатор',
        example: 'Пример стъпка по стъпка',
        given: 'Дадено:',
        resultMeaning: 'Какво означава резултатът',
        radiusRelation: 'Връзка на радиуса',
        useCases: 'Кога да използвате този калкулатор',
        commonMistakes: 'Чести грешки',
        relatedCalculators: 'Свързани калкулатори',
        faqs: 'ЧЗВ'
      },
      diagram: {
        inradiusTitle: 'Диаграма на вписания радиус на правоъгълен триъгълник',
        inradiusDescription:
          'Правоъгълен триъгълник със страна a, страна b, хипотенуза c, вписана окръжност, радиус r и прав ъгъл.',
        circumradiusTitle: 'Диаграма на описания радиус на правоъгълен триъгълник',
        circumradiusDescription:
          'Правоъгълен триъгълник с хипотенуза c, описана окръжност, радиус R, прав ъгъл и център в средата на хипотенузата.',
        legA: 'страна a',
        legB: 'страна b',
        hypotenuseC: 'хипотенуза c',
        inradiusR: 'вписан радиус r',
        incircle: 'вписана окръжност',
        circumradiusR: 'описан радиус R',
        circumcenter: 'център',
        circumcircle: 'описана окръжност',
        rightAngle: 'прав ъгъл'
      },
      fields: {
        legA: 'Страна a',
        legB: 'Страна b',
        hypotenuseC: 'Хипотенуза c',
        inradiusR: 'Вписан радиус r',
        circumradiusR: 'Описан радиус R'
      },
      calculatorHeadings: {
        inradius: 'Изчислете вписан радиус r',
        circumradius: 'Изчислете описан радиус R'
      },
      messages: {
        positive: 'Моля, въведете положителни стойности.',
        invalid: 'Моля, въведете положителни стойности.',
        hypotenuseKnownLeg: 'Хипотенузата c трябва да бъде най-дългата страна.',
        hypotenuseLongest: 'Хипотенузата c трябва да бъде най-дългата страна.',
        invalidTriangle: 'Тези дължини може да не образуват валиден правоъгълен триъгълник.'
      },
      runtime: {
        calculationComplete: 'Изчислението завърши.',
        unableToCalculate: 'Не може да се изчисли.',
        fixErrors: 'Поправете грешките в полетата по-горе.',
        errorPrefix: 'Грешка',
        stepLabels: {
          formula: 'Формула',
          substitution: 'Замяна',
          answer: 'Отговор',
          explanation: 'Обяснение',
          detail: 'Детайл'
        }
      },
      stepDescriptions: {
        inradius: 'Намерете радиуса на най-голямата окръжност, която се побира в триъгълника.',
        circumradius: 'Описаният радиус е половината от хипотенузата.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'калкулатор за радиуси на правоъгълен триъгълник',
        description: 'Използвайте основния калкулатор за вписан радиус, описан радиус и връзки на радиуса.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'калкулатор за вписан радиус на правоъгълен триъгълник',
        description: 'Намерете r от двете страни и хипотенузата.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'калкулатор за описан радиус на правоъгълен триъгълник',
        description: 'Намерете R от хипотенузата c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'калкулатор за лице на правоъгълен триъгълник',
        description: 'Изчислете лицето от страните на триъгълника.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'калкулатор за полупериметър на правоъгълен триъгълник',
        description: 'Намерете полупериметъра преди формули със s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'калкулатор за страна на правоъгълен триъгълник',
        description: 'Намерете липсваща страна преди радиуса.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'калкулатор за хипотенуза на правоъгълен триъгълник',
        description: 'Намерете хипотенузата от двете страни, когато c не е известна.'
      }
    },
    inradius: {
      primaryKeyword: 'калкулатор за вписан радиус на правоъгълен триъгълник',
      secondaryKeywords: ['вписан радиус правоъгълен триъгълник', 'радиус на вписана окръжност', 'калкулатор r = (a + b − c) / 2'],
      h1: 'Калкулатор за вписан радиус на правоъгълен триъгълник',
      metaTitle: 'Калкулатор за вписан радиус на правоъгълен триъгълник | r = (a + b − c) / 2',
      metaDescription:
        'Използвайте този калкулатор, за да намерите вписан радиус r от страна a, страна b и хипотенуза c.',
      modes: ['Вписан радиус', 'Връзка на радиуса r'],
      intro: [
        'Използвайте тази страница, когато знаете a, b и хипотенуза c и искате r.',
        'r е радиусът на вписаната окръжност, която докосва трите страни.'
      ],
      calculatorNote:
        'Въведете положителни стойности за a, b и c. Хипотенузата c трябва да е най-дългата страна и да образува валиден правоъгълен триъгълник.',
      formulaParagraphs: ['В правоъгълен триъгълник вписаният радиус се намира директно от двете страни и хипотенузата.'],
      formulaPoints: ['Съберете страните: a + b.', 'Извадете хипотенузата: a + b − c.', 'Разделете на 2, за да получите r.'],
      diagramParagraphs: ['Диаграмата показва вписаната окръжност в правоъгълния триъгълник.'],
      diagramNotes: ['r е вписаният радиус.', 'c е хипотенузата и най-дългата страна.'],
      howToUse: ['Въведете a.', 'Въведете b.', 'Въведете хипотенуза c.', 'Проверете триъгълника и изчислете r.'],
      exampleGiven: ['Страна a = 6', 'Страна b = 8', 'Хипотенуза c = 10'],
      exampleResult: 'За правоъгълен триъгълник 6-8-10 вписаният радиус е 2 units.',
      resultMeaning: ['Резултатът r е радиусът на вписаната окръжност.'],
      radiusRelation: ['В основния калкулатор същото изчисление е Вписан радиус и Връзка на радиуса r.'],
      useCases: ['Намиране на вписан радиус.', 'Проверка на задачи с три страни.', 'Сравняване на r с R.'],
      commonMistakes: ['Използване на c като обикновена страна.', 'Пропускане на делението на 2.', 'Въвеждане на невалидни страни.'],
      faqs: [
        {
          question: 'Каква е формулата за вписан радиус?',
          answer: 'Формулата е r = (a + b − c) / 2, където a и b са страни, а c е хипотенузата.'
        },
        {
          question: 'Какво означава r?',
          answer: 'r е радиусът на окръжността, която докосва трите страни вътре в триъгълника.'
        },
        {
          question: 'Защо c трябва да е хипотенуза?',
          answer: 'Защото формулата използва c като страна срещу правия ъгъл.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'калкулатор за описан радиус на правоъгълен триъгълник',
      secondaryKeywords: ['описан радиус правоъгълен триъгълник', 'радиус на описана окръжност', 'калкулатор R = c / 2'],
      h1: 'Калкулатор за описан радиус на правоъгълен триъгълник',
      metaTitle: 'Калкулатор за описан радиус на правоъгълен триъгълник | R = c / 2',
      metaDescription:
        'Използвайте този калкулатор, за да намерите описан радиус R от хипотенуза c.',
      modes: ['Описан радиус', 'Връзка на радиуса R'],
      intro: [
        'Използвайте тази страница, когато хипотенузата c е известна и искате R.',
        'В правоъгълен триъгълник хипотенузата е диаметърът на описаната окръжност.'
      ],
      calculatorNote: 'Въведете положителна стойност за хипотенуза c. c е страната срещу правия ъгъл.',
      formulaParagraphs: ['Диаметърът на описаната окръжност е c, затова радиусът е c / 2.'],
      formulaPoints: ['Започнете с c.', 'Разделете c на 2.', 'Резултатът е R.'],
      diagramParagraphs: ['Диаграмата показва описаната окръжност около правоъгълния триъгълник.'],
      diagramNotes: ['Центърът е средата на хипотенузата.', 'R е описаният радиус.'],
      howToUse: ['Въведете c.', 'Уверете се, че c > 0.', 'Изчислете R.', 'Прочетете резултата като R.'],
      exampleGiven: ['Хипотенуза c = 10'],
      exampleResult: 'При хипотенуза 10 описаният радиус е 5 units.',
      resultMeaning: ['Резултатът R е радиусът на окръжността през трите върха.'],
      radiusRelation: ['В основния калкулатор същото изчисление е Описан радиус и Връзка на радиуса R.'],
      useCases: ['Намиране на описан радиус.', 'Използване на известна хипотенуза.', 'Сравняване на R с r.'],
      commonMistakes: ['Въвеждане на друга страна вместо c.', 'Забравяне, че R е половината от c.', 'Объркване на R и r.'],
      faqs: [
        {
          question: 'Каква е формулата за описан радиус?',
          answer: 'Формулата е R = c / 2, където c е хипотенузата.'
        },
        {
          question: 'Какво означава R?',
          answer: 'R е радиусът на окръжността през трите върха.'
        },
        {
          question: 'Нужни ли са a или b?',
          answer: 'Не. Ако c е известна, R = c / 2 е достатъчно.'
        }
      ]
    }
  }),
  ar: makeBundle({
    ui: {
      badge: 'حاسبة نصف القطر',
      parentBreadcrumbLabel: 'حاسبة أنصاف أقطار المثلث القائم',
      openTool: 'افتح الأداة',
      sectionHeadings: {
        formula: 'الصيغة',
        diagram: 'رسم المثلث',
        howToUse: 'كيفية استخدام هذه الحاسبة',
        example: 'مثال خطوة بخطوة',
        given: 'المعطيات:',
        resultMeaning: 'معنى النتيجة',
        radiusRelation: 'علاقة نصف القطر',
        useCases: 'متى تستخدم هذه الحاسبة',
        commonMistakes: 'أخطاء شائعة',
        relatedCalculators: 'حاسبات مرتبطة',
        faqs: 'الأسئلة الشائعة'
      },
      diagram: {
        inradiusTitle: 'رسم نصف قطر الدائرة الداخلية للمثلث القائم',
        inradiusDescription:
          'مثلث قائم فيه الضلع a والضلع b والوتر c والدائرة الداخلية ونصف قطرها r والزاوية القائمة.',
        circumradiusTitle: 'رسم نصف قطر الدائرة المحيطة للمثلث القائم',
        circumradiusDescription:
          'مثلث قائم فيه الوتر c والدائرة المحيطة ونصف قطرها R والزاوية القائمة والمركز عند منتصف الوتر.',
        legA: 'الضلع a',
        legB: 'الضلع b',
        hypotenuseC: 'الوتر c',
        inradiusR: 'نصف القطر الداخلي r',
        incircle: 'الدائرة الداخلية',
        circumradiusR: 'نصف القطر المحيط R',
        circumcenter: 'المركز المحيط',
        circumcircle: 'الدائرة المحيطة',
        rightAngle: 'زاوية قائمة'
      },
      fields: {
        legA: 'الضلع a',
        legB: 'الضلع b',
        hypotenuseC: 'الوتر c',
        inradiusR: 'نصف القطر الداخلي r',
        circumradiusR: 'نصف القطر المحيط R'
      },
      calculatorHeadings: {
        inradius: 'احسب نصف القطر الداخلي r',
        circumradius: 'احسب نصف القطر المحيط R'
      },
      messages: {
        positive: 'يرجى إدخال قيم موجبة.',
        invalid: 'يرجى إدخال قيم موجبة.',
        hypotenuseKnownLeg: 'يجب أن يكون الوتر c هو الضلع الأطول.',
        hypotenuseLongest: 'يجب أن يكون الوتر c هو الضلع الأطول.',
        invalidTriangle: 'قد لا تكوّن هذه الأطوال مثلثًا قائمًا صالحًا.'
      },
      runtime: {
        calculationComplete: 'اكتمل الحساب.',
        unableToCalculate: 'تعذر الحساب.',
        fixErrors: 'يرجى تصحيح الأخطاء في الحقول أعلاه.',
        errorPrefix: 'خطأ',
        stepLabels: {
          formula: 'الصيغة',
          substitution: 'التعويض',
          answer: 'الإجابة',
          explanation: 'الشرح',
          detail: 'تفصيل'
        }
      },
      stepDescriptions: {
        inradius: 'أوجد نصف قطر أكبر دائرة يمكن أن تقع داخل المثلث.',
        circumradius: 'نصف القطر المحيط يساوي نصف الوتر.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'حاسبة أنصاف أقطار المثلث القائم',
        description: 'استخدم الحاسبة الأصلية لنصف القطر الداخلي والمحيط وعلاقات نصف القطر.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'حاسبة نصف القطر الداخلي للمثلث القائم',
        description: 'أوجد r من الضلعين والوتر.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'حاسبة نصف القطر المحيط للمثلث القائم',
        description: 'أوجد R من الوتر c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'حاسبة مساحة المثلث القائم',
        description: 'احسب المساحة من أطوال أضلاع المثلث القائم.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'حاسبة نصف محيط المثلث القائم',
        description: 'أوجد نصف المحيط قبل الصيغ التي تستخدم s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'حاسبة ضلع المثلث القائم',
        description: 'أوجد ضلعًا مفقودًا قبل حساب نصف القطر.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'حاسبة وتر المثلث القائم',
        description: 'أوجد الوتر من الضلعين عندما لا تكون c معروفة.'
      }
    },
    inradius: {
      primaryKeyword: 'حاسبة نصف القطر الداخلي للمثلث القائم',
      secondaryKeywords: ['نصف القطر الداخلي للمثلث القائم', 'نصف قطر الدائرة الداخلية', 'حاسبة r = (a + b − c) / 2'],
      h1: 'حاسبة نصف القطر الداخلي للمثلث القائم',
      metaTitle: 'حاسبة نصف القطر الداخلي للمثلث القائم | r = (a + b − c) / 2',
      metaDescription:
        'استخدم هذه الحاسبة لإيجاد نصف القطر الداخلي r من الضلع a والضلع b والوتر c.',
      modes: ['نصف القطر الداخلي', 'علاقة نصف القطر r'],
      intro: [
        'استخدم هذه الصفحة عندما تعرف a و b والوتر c وتريد إيجاد r.',
        'r هو نصف قطر الدائرة الداخلية التي تلامس أضلاع المثلث القائم الثلاثة.'
      ],
      calculatorNote:
        'أدخل قيمًا موجبة لـ a و b و c. يجب أن يكون الوتر c هو الضلع الأطول وأن تكوّن القيم مثلثًا قائمًا صالحًا.',
      formulaParagraphs: ['في المثلث القائم، يمكن إيجاد نصف القطر الداخلي مباشرة من الضلعين والوتر.'],
      formulaPoints: ['اجمع الضلعين: a + b.', 'اطرح الوتر: a + b − c.', 'اقسم على 2 للحصول على r.'],
      diagramParagraphs: ['يوضح الرسم الدائرة الداخلية داخل المثلث القائم.'],
      diagramNotes: ['r هو نصف القطر الداخلي.', 'c هو الوتر والضلع الأطول.'],
      howToUse: ['أدخل a.', 'أدخل b.', 'أدخل الوتر c.', 'تحقق من المثلث ثم احسب r.'],
      exampleGiven: ['الضلع a = 6', 'الضلع b = 8', 'الوتر c = 10'],
      exampleResult: 'للمثلث القائم 6-8-10، نصف القطر الداخلي هو 2 units.',
      resultMeaning: ['النتيجة r هي نصف قطر الدائرة الداخلية للمثلث.'],
      radiusRelation: ['في الحاسبة الأصلية، يظهر الحساب نفسه باسم نصف القطر الداخلي وعلاقة نصف القطر r.'],
      useCases: ['إيجاد نصف قطر الدائرة الداخلية.', 'مراجعة مسائل بثلاثة أضلاع.', 'مقارنة r مع R.'],
      commonMistakes: ['استخدام c كضلع عادي.', 'نسيان القسمة على 2.', 'إدخال أضلاع غير صالحة.'],
      faqs: [
        {
          question: 'ما صيغة نصف القطر الداخلي؟',
          answer: 'الصيغة هي r = (a + b − c) / 2، حيث a و b ضلعان و c هو الوتر.'
        },
        {
          question: 'ماذا يعني r؟',
          answer: 'r هو نصف قطر الدائرة التي تلامس الأضلاع الثلاثة داخل المثلث.'
        },
        {
          question: 'لماذا يجب أن يكون c هو الوتر؟',
          answer: 'لأن الصيغة تستخدم c بوصفه الضلع المقابل للزاوية القائمة.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'حاسبة نصف القطر المحيط للمثلث القائم',
      secondaryKeywords: ['نصف القطر المحيط للمثلث القائم', 'نصف قطر الدائرة المحيطة', 'حاسبة R = c / 2'],
      h1: 'حاسبة نصف القطر المحيط للمثلث القائم',
      metaTitle: 'حاسبة نصف القطر المحيط للمثلث القائم | R = c / 2',
      metaDescription:
        'استخدم هذه الحاسبة لإيجاد نصف القطر المحيط R من الوتر c.',
      modes: ['نصف القطر المحيط', 'علاقة نصف القطر R'],
      intro: [
        'استخدم هذه الصفحة عندما يكون الوتر c معروفًا وتريد إيجاد R.',
        'في المثلث القائم، يكون الوتر قطر الدائرة المحيطة، لذلك R يساوي نصف c.'
      ],
      calculatorNote: 'أدخل قيمة موجبة للوتر c. c هو دائمًا الضلع المقابل للزاوية القائمة.',
      formulaParagraphs: ['قطر الدائرة المحيطة هو c، لذلك نصف القطر هو c / 2.'],
      formulaPoints: ['ابدأ بالوتر c.', 'اقسم c على 2.', 'النتيجة هي R.'],
      diagramParagraphs: ['يوضح الرسم الدائرة المحيطة حول المثلث القائم.'],
      diagramNotes: ['المركز المحيط هو منتصف الوتر.', 'R هو نصف القطر المحيط.'],
      howToUse: ['أدخل c.', 'تأكد أن c أكبر من 0.', 'احسب R.', 'اقرأ النتيجة على أنها R.'],
      exampleGiven: ['الوتر c = 10'],
      exampleResult: 'إذا كان الوتر 10، فإن نصف القطر المحيط هو 5 units.',
      resultMeaning: ['النتيجة R هي نصف قطر الدائرة التي تمر بالرؤوس الثلاثة.'],
      radiusRelation: ['في الحاسبة الأصلية، يظهر الحساب نفسه باسم نصف القطر المحيط وعلاقة نصف القطر R.'],
      useCases: ['إيجاد نصف قطر الدائرة المحيطة.', 'استخدام وتر معروف.', 'مقارنة R مع r.'],
      commonMistakes: ['إدخال ضلع عادي بدلًا من c.', 'نسيان أن R نصف c.', 'الخلط بين R و r.'],
      faqs: [
        {
          question: 'ما صيغة نصف القطر المحيط؟',
          answer: 'الصيغة هي R = c / 2، حيث c هو الوتر.'
        },
        {
          question: 'ماذا يعني R؟',
          answer: 'R هو نصف قطر الدائرة التي تمر بالرؤوس الثلاثة.'
        },
        {
          question: 'هل أحتاج إلى a أو b؟',
          answer: 'لا. إذا كان c معروفًا، فإن R = c / 2 يكفي.'
        }
      ]
    }
  }),
  id: makeBundle({
    ui: {
      badge: 'Kalkulator jari-jari',
      parentBreadcrumbLabel: 'Kalkulator Jari-jari Segitiga Siku-siku',
      openTool: 'Buka alat',
      sectionHeadings: {
        formula: 'Rumus',
        diagram: 'Diagram segitiga',
        howToUse: 'Cara menggunakan kalkulator ini',
        example: 'Contoh langkah demi langkah',
        given: 'Diketahui:',
        resultMeaning: 'Arti hasil',
        radiusRelation: 'Relasi jari-jari',
        useCases: 'Kapan menggunakan kalkulator ini',
        commonMistakes: 'Kesalahan umum',
        relatedCalculators: 'Kalkulator terkait',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: 'Diagram jari-jari dalam segitiga siku-siku',
        inradiusDescription:
          'Segitiga siku-siku dengan sisi a, sisi b, hipotenusa c, lingkaran dalam, jari-jari dalam r, dan sudut siku-siku.',
        circumradiusTitle: 'Diagram jari-jari luar segitiga siku-siku',
        circumradiusDescription:
          'Segitiga siku-siku dengan hipotenusa c, lingkaran luar, jari-jari luar R, sudut siku-siku, dan pusat di titik tengah hipotenusa.',
        legA: 'sisi a',
        legB: 'sisi b',
        hypotenuseC: 'hipotenusa c',
        inradiusR: 'jari-jari dalam r',
        incircle: 'lingkaran dalam',
        circumradiusR: 'jari-jari luar R',
        circumcenter: 'pusat luar',
        circumcircle: 'lingkaran luar',
        rightAngle: 'sudut siku-siku'
      },
      fields: {
        legA: 'Sisi a',
        legB: 'Sisi b',
        hypotenuseC: 'Hipotenusa c',
        inradiusR: 'Jari-jari dalam r',
        circumradiusR: 'Jari-jari luar R'
      },
      calculatorHeadings: {
        inradius: 'Hitung jari-jari dalam r',
        circumradius: 'Hitung jari-jari luar R'
      },
      messages: {
        positive: 'Masukkan nilai positif.',
        invalid: 'Masukkan nilai positif.',
        hypotenuseKnownLeg: 'Hipotenusa c harus menjadi sisi terpanjang.',
        hypotenuseLongest: 'Hipotenusa c harus menjadi sisi terpanjang.',
        invalidTriangle: 'Panjang sisi ini mungkin tidak membentuk segitiga siku-siku yang valid.'
      },
      runtime: {
        calculationComplete: 'Perhitungan selesai.',
        unableToCalculate: 'Tidak dapat menghitung.',
        fixErrors: 'Perbaiki kesalahan pada kolom di atas.',
        errorPrefix: 'Kesalahan',
        stepLabels: {
          formula: 'Rumus',
          substitution: 'Substitusi',
          answer: 'Jawaban',
          explanation: 'Penjelasan',
          detail: 'Detail'
        }
      },
      stepDescriptions: {
        inradius: 'Cari jari-jari lingkaran terbesar yang muat di dalam segitiga.',
        circumradius: 'Jari-jari luar adalah setengah dari hipotenusa.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'kalkulator jari-jari segitiga siku-siku',
        description: 'Gunakan kalkulator induk untuk jari-jari dalam, luar, dan relasi jari-jari.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'kalkulator jari-jari dalam segitiga siku-siku',
        description: 'Temukan r dari dua sisi dan hipotenusa.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'kalkulator jari-jari luar segitiga siku-siku',
        description: 'Temukan R dari hipotenusa c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'kalkulator luas segitiga siku-siku',
        description: 'Hitung luas dari panjang sisi segitiga.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'kalkulator semiperimeter segitiga siku-siku',
        description: 'Temukan semiperimeter sebelum rumus yang memakai s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'kalkulator sisi segitiga siku-siku',
        description: 'Temukan sisi yang hilang sebelum menghitung jari-jari.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'kalkulator hipotenusa segitiga siku-siku',
        description: 'Temukan hipotenusa dari dua sisi jika c belum diketahui.'
      }
    },
    inradius: {
      primaryKeyword: 'kalkulator jari-jari dalam segitiga siku-siku',
      secondaryKeywords: ['jari-jari dalam segitiga siku-siku', 'jari-jari lingkaran dalam', 'kalkulator r = (a + b − c) / 2'],
      h1: 'Kalkulator Jari-jari Dalam Segitiga Siku-siku',
      metaTitle: 'Kalkulator Jari-jari Dalam Segitiga Siku-siku | r = (a + b − c) / 2',
      metaDescription:
        'Gunakan kalkulator ini untuk menemukan jari-jari dalam r dari sisi a, sisi b, dan hipotenusa c.',
      modes: ['Jari-jari dalam', 'Relasi jari-jari r'],
      intro: [
        'Gunakan halaman ini saat a, b, dan hipotenusa c diketahui dan Anda ingin menemukan r.',
        'r adalah jari-jari lingkaran dalam yang menyentuh ketiga sisi.'
      ],
      calculatorNote:
        'Masukkan nilai positif untuk a, b, dan c. Hipotenusa c harus sisi terpanjang dan membentuk segitiga siku-siku yang valid.',
      formulaParagraphs: ['Dalam segitiga siku-siku, jari-jari dalam dapat dihitung langsung dari dua sisi dan hipotenusa.'],
      formulaPoints: ['Jumlahkan sisi: a + b.', 'Kurangi hipotenusa: a + b − c.', 'Bagi 2 untuk mendapatkan r.'],
      diagramParagraphs: ['Diagram menampilkan lingkaran dalam pada segitiga siku-siku.'],
      diagramNotes: ['r adalah jari-jari dalam.', 'c adalah hipotenusa dan sisi terpanjang.'],
      howToUse: ['Masukkan a.', 'Masukkan b.', 'Masukkan hipotenusa c.', 'Periksa segitiga lalu hitung r.'],
      exampleGiven: ['Sisi a = 6', 'Sisi b = 8', 'Hipotenusa c = 10'],
      exampleResult: 'Untuk segitiga siku-siku 6-8-10, jari-jari dalam adalah 2 units.',
      resultMeaning: ['Hasil r adalah jari-jari lingkaran dalam segitiga.'],
      radiusRelation: ['Di kalkulator induk, perhitungan ini muncul sebagai Jari-jari dalam dan Relasi jari-jari r.'],
      useCases: ['Mencari jari-jari lingkaran dalam.', 'Memeriksa soal dengan tiga sisi.', 'Membandingkan r dengan R.'],
      commonMistakes: ['Menggunakan c sebagai sisi biasa.', 'Lupa membagi 2.', 'Memasukkan sisi yang tidak valid.'],
      faqs: [
        {
          question: 'Apa rumus jari-jari dalam?',
          answer: 'Rumusnya r = (a + b − c) / 2, dengan a dan b sebagai sisi dan c sebagai hipotenusa.'
        },
        {
          question: 'Apa arti r?',
          answer: 'r adalah jari-jari lingkaran yang menyentuh tiga sisi di dalam segitiga.'
        },
        {
          question: 'Mengapa c harus hipotenusa?',
          answer: 'Karena rumus memakai c sebagai sisi yang berhadapan dengan sudut siku-siku.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'kalkulator jari-jari luar segitiga siku-siku',
      secondaryKeywords: ['jari-jari luar segitiga siku-siku', 'jari-jari lingkaran luar', 'kalkulator R = c / 2'],
      h1: 'Kalkulator Jari-jari Luar Segitiga Siku-siku',
      metaTitle: 'Kalkulator Jari-jari Luar Segitiga Siku-siku | R = c / 2',
      metaDescription:
        'Gunakan kalkulator ini untuk menemukan jari-jari luar R dari hipotenusa c.',
      modes: ['Jari-jari luar', 'Relasi jari-jari R'],
      intro: [
        'Gunakan halaman ini saat hipotenusa c diketahui dan Anda ingin menemukan R.',
        'Dalam segitiga siku-siku, hipotenusa adalah diameter lingkaran luar.'
      ],
      calculatorNote: 'Masukkan nilai positif untuk hipotenusa c. c adalah sisi yang berhadapan dengan sudut siku-siku.',
      formulaParagraphs: ['Diameter lingkaran luar adalah c, jadi jari-jarinya c / 2.'],
      formulaPoints: ['Mulai dari hipotenusa c.', 'Bagi c dengan 2.', 'Hasilnya adalah R.'],
      diagramParagraphs: ['Diagram menampilkan lingkaran luar di sekitar segitiga siku-siku.'],
      diagramNotes: ['Pusat luar berada di titik tengah hipotenusa.', 'R adalah jari-jari luar.'],
      howToUse: ['Masukkan c.', 'Pastikan c lebih besar dari 0.', 'Hitung R.', 'Baca hasil sebagai R.'],
      exampleGiven: ['Hipotenusa c = 10'],
      exampleResult: 'Jika hipotenusa 10, jari-jari luar adalah 5 units.',
      resultMeaning: ['Hasil R adalah jari-jari lingkaran yang melalui tiga titik sudut.'],
      radiusRelation: ['Di kalkulator induk, perhitungan ini muncul sebagai Jari-jari luar dan Relasi jari-jari R.'],
      useCases: ['Mencari jari-jari lingkaran luar.', 'Menggunakan hipotenusa yang diketahui.', 'Membandingkan R dengan r.'],
      commonMistakes: ['Memasukkan sisi biasa, bukan c.', 'Lupa bahwa R adalah setengah c.', 'Mencampur R dengan r.'],
      faqs: [
        {
          question: 'Apa rumus jari-jari luar?',
          answer: 'Rumusnya R = c / 2, dengan c sebagai hipotenusa.'
        },
        {
          question: 'Apa arti R?',
          answer: 'R adalah jari-jari lingkaran yang melalui ketiga titik sudut.'
        },
        {
          question: 'Apakah a atau b diperlukan?',
          answer: 'Tidak. Jika c diketahui, R = c / 2 sudah cukup.'
        }
      ]
    }
  }),
  pl: makeBundle({
    ui: {
      badge: 'Kalkulator promienia',
      parentBreadcrumbLabel: 'Kalkulator promieni trójkąta prostokątnego',
      openTool: 'Otwórz narzędzie',
      sectionHeadings: {
        formula: 'Wzór',
        diagram: 'Diagram trójkąta',
        howToUse: 'Jak używać tego kalkulatora',
        example: 'Przykład krok po kroku',
        given: 'Dane:',
        resultMeaning: 'Co oznacza wynik',
        radiusRelation: 'Zależność promienia',
        useCases: 'Kiedy używać tego kalkulatora',
        commonMistakes: 'Częste błędy',
        relatedCalculators: 'Powiązane kalkulatory',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: 'Diagram promienia okręgu wpisanego w trójkąt prostokątny',
        inradiusDescription:
          'Trójkąt prostokątny z bokiem a, bokiem b, przeciwprostokątną c, okręgiem wpisanym, promieniem r i kątem prostym.',
        circumradiusTitle: 'Diagram promienia okręgu opisanego na trójkącie prostokątnym',
        circumradiusDescription:
          'Trójkąt prostokątny z przeciwprostokątną c, okręgiem opisanym, promieniem R, kątem prostym i środkiem w połowie przeciwprostokątnej.',
        legA: 'bok a',
        legB: 'bok b',
        hypotenuseC: 'przeciwprostokątna c',
        inradiusR: 'promień wpisany r',
        incircle: 'okrąg wpisany',
        circumradiusR: 'promień opisany R',
        circumcenter: 'środek okręgu',
        circumcircle: 'okrąg opisany',
        rightAngle: 'kąt prosty'
      },
      fields: {
        legA: 'Bok a',
        legB: 'Bok b',
        hypotenuseC: 'Przeciwprostokątna c',
        inradiusR: 'Promień wpisany r',
        circumradiusR: 'Promień opisany R'
      },
      calculatorHeadings: {
        inradius: 'Oblicz promień wpisany r',
        circumradius: 'Oblicz promień opisany R'
      },
      messages: {
        positive: 'Wprowadź wartości dodatnie.',
        invalid: 'Wprowadź wartości dodatnie.',
        hypotenuseKnownLeg: 'Przeciwprostokątna c powinna być najdłuższym bokiem.',
        hypotenuseLongest: 'Przeciwprostokątna c powinna być najdłuższym bokiem.',
        invalidTriangle: 'Te długości mogą nie tworzyć poprawnego trójkąta prostokątnego.'
      },
      runtime: {
        calculationComplete: 'Obliczenie zakończone.',
        unableToCalculate: 'Nie można obliczyć.',
        fixErrors: 'Popraw błędy w polach powyżej.',
        errorPrefix: 'Błąd',
        stepLabels: {
          formula: 'Wzór',
          substitution: 'Podstawienie',
          answer: 'Odpowiedź',
          explanation: 'Wyjaśnienie',
          detail: 'Szczegół'
        }
      },
      stepDescriptions: {
        inradius: 'Znajdź promień największego okręgu mieszczącego się w trójkącie.',
        circumradius: 'Promień opisany jest połową przeciwprostokątnej.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'kalkulator promieni trójkąta prostokątnego',
        description: 'Użyj kalkulatora nadrzędnego dla promienia wpisanego, opisanego i zależności promieni.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'kalkulator promienia wpisanego trójkąta prostokątnego',
        description: 'Znajdź r z dwóch boków i przeciwprostokątnej.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'kalkulator promienia opisanego trójkąta prostokątnego',
        description: 'Znajdź R z przeciwprostokątnej c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'kalkulator pola trójkąta prostokątnego',
        description: 'Oblicz pole z długości boków trójkąta prostokątnego.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'kalkulator półobwodu trójkąta prostokątnego',
        description: 'Znajdź półobwód przed wzorami z s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'kalkulator boku trójkąta prostokątnego',
        description: 'Znajdź brakujący bok przed obliczeniem promienia.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'kalkulator przeciwprostokątnej trójkąta prostokątnego',
        description: 'Znajdź przeciwprostokątną z dwóch boków, gdy c nie jest znane.'
      }
    },
    inradius: {
      primaryKeyword: 'kalkulator promienia wpisanego trójkąta prostokątnego',
      secondaryKeywords: ['promień wpisany trójkąta prostokątnego', 'promień okręgu wpisanego', 'kalkulator r = (a + b − c) / 2'],
      h1: 'Kalkulator promienia wpisanego trójkąta prostokątnego',
      metaTitle: 'Kalkulator promienia wpisanego trójkąta prostokątnego | r = (a + b − c) / 2',
      metaDescription:
        'Użyj tego kalkulatora, aby znaleźć promień wpisany r z boku a, boku b i przeciwprostokątnej c.',
      modes: ['Promień wpisany', 'Zależność promienia r'],
      intro: [
        'Użyj tej strony, gdy znasz a, b i przeciwprostokątną c oraz chcesz znaleźć r.',
        'r to promień okręgu wpisanego, który dotyka trzech boków trójkąta prostokątnego.'
      ],
      calculatorNote:
        'Wprowadź dodatnie wartości a, b i c. Przeciwprostokątna c musi być najdłuższym bokiem i tworzyć poprawny trójkąt prostokątny.',
      formulaParagraphs: ['W trójkącie prostokątnym promień wpisany można obliczyć bezpośrednio z dwóch boków i przeciwprostokątnej.'],
      formulaPoints: ['Dodaj boki: a + b.', 'Odejmij przeciwprostokątną: a + b − c.', 'Podziel przez 2, aby otrzymać r.'],
      diagramParagraphs: ['Diagram pokazuje okrąg wpisany wewnątrz trójkąta prostokątnego.'],
      diagramNotes: ['r to promień wpisany.', 'c to przeciwprostokątna i najdłuższy bok.'],
      howToUse: ['Wpisz a.', 'Wpisz b.', 'Wpisz przeciwprostokątną c.', 'Sprawdź trójkąt i oblicz r.'],
      exampleGiven: ['Bok a = 6', 'Bok b = 8', 'Przeciwprostokątna c = 10'],
      exampleResult: 'Dla trójkąta prostokątnego 6-8-10 promień wpisany wynosi 2 units.',
      resultMeaning: ['Wynik r jest promieniem okręgu wpisanego w trójkąt.'],
      radiusRelation: ['W kalkulatorze nadrzędnym ten sam wynik występuje jako Promień wpisany i Zależność promienia r.'],
      useCases: ['Wyznaczanie promienia okręgu wpisanego.', 'Sprawdzanie zadań z trzema bokami.', 'Porównanie r z R.'],
      commonMistakes: ['Traktowanie c jako boku przyprostokątnego.', 'Pominięcie dzielenia przez 2.', 'Wpisanie niepoprawnych boków.'],
      faqs: [
        {
          question: 'Jaki jest wzór na promień wpisany?',
          answer: 'Wzór to r = (a + b − c) / 2, gdzie a i b są bokami, a c jest przeciwprostokątną.'
        },
        {
          question: 'Co oznacza r?',
          answer: 'r to promień okręgu dotykającego trzech boków wewnątrz trójkąta.'
        },
        {
          question: 'Dlaczego c musi być przeciwprostokątną?',
          answer: 'Wzór używa c jako boku leżącego naprzeciw kąta prostego.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'kalkulator promienia opisanego trójkąta prostokątnego',
      secondaryKeywords: ['promień opisany trójkąta prostokątnego', 'promień okręgu opisanego', 'kalkulator R = c / 2'],
      h1: 'Kalkulator promienia opisanego trójkąta prostokątnego',
      metaTitle: 'Kalkulator promienia opisanego trójkąta prostokątnego | R = c / 2',
      metaDescription:
        'Użyj tego kalkulatora, aby znaleźć promień opisany R z przeciwprostokątnej c.',
      modes: ['Promień opisany', 'Zależność promienia R'],
      intro: [
        'Użyj tej strony, gdy znasz przeciwprostokątną c i chcesz znaleźć R.',
        'W trójkącie prostokątnym przeciwprostokątna jest średnicą okręgu opisanego.'
      ],
      calculatorNote: 'Wprowadź dodatnią wartość przeciwprostokątnej c. c jest bokiem naprzeciw kąta prostego.',
      formulaParagraphs: ['Średnicą okręgu opisanego jest c, więc promień to c / 2.'],
      formulaPoints: ['Zacznij od c.', 'Podziel c przez 2.', 'Wynikiem jest R.'],
      diagramParagraphs: ['Diagram pokazuje okrąg opisany wokół trójkąta prostokątnego.'],
      diagramNotes: ['Środek okręgu leży w połowie przeciwprostokątnej.', 'R to promień opisany.'],
      howToUse: ['Wpisz c.', 'Upewnij się, że c > 0.', 'Oblicz R.', 'Odczytaj wynik jako R.'],
      exampleGiven: ['Przeciwprostokątna c = 10'],
      exampleResult: 'Dla przeciwprostokątnej 10 promień opisany wynosi 5 units.',
      resultMeaning: ['Wynik R jest promieniem okręgu przechodzącego przez trzy wierzchołki.'],
      radiusRelation: ['W kalkulatorze nadrzędnym ten sam wynik występuje jako Promień opisany i Zależność promienia R.'],
      useCases: ['Wyznaczanie promienia okręgu opisanego.', 'Używanie znanej przeciwprostokątnej.', 'Porównanie R z r.'],
      commonMistakes: ['Wpisanie przyprostokątnej zamiast c.', 'Zapomnienie, że R to połowa c.', 'Mylenie R z r.'],
      faqs: [
        {
          question: 'Jaki jest wzór na promień opisany?',
          answer: 'Wzór to R = c / 2, gdzie c jest przeciwprostokątną.'
        },
        {
          question: 'Co oznacza R?',
          answer: 'R to promień okręgu przechodzącego przez trzy wierzchołki.'
        },
        {
          question: 'Czy potrzebuję a lub b?',
          answer: 'Nie. Jeśli c jest znane, wystarczy R = c / 2.'
        }
      ]
    }
  }),
  ms: makeBundle({
    ui: {
      badge: 'Kalkulator jejari',
      parentBreadcrumbLabel: 'Kalkulator Jejari Segi Tiga Bersudut Tegak',
      openTool: 'Buka alat',
      sectionHeadings: {
        formula: 'Formula',
        diagram: 'Rajah segi tiga',
        howToUse: 'Cara menggunakan kalkulator ini',
        example: 'Contoh langkah demi langkah',
        given: 'Diberi:',
        resultMeaning: 'Maksud keputusan',
        radiusRelation: 'Hubungan jejari',
        useCases: 'Bila menggunakan kalkulator ini',
        commonMistakes: 'Kesilapan biasa',
        relatedCalculators: 'Kalkulator berkaitan',
        faqs: 'Soalan lazim'
      },
      diagram: {
        inradiusTitle: 'Rajah jejari dalam segi tiga bersudut tegak',
        inradiusDescription:
          'Segi tiga bersudut tegak dengan sisi a, sisi b, hipotenus c, bulatan dalam, jejari dalam r dan sudut tegak.',
        circumradiusTitle: 'Rajah jejari luar segi tiga bersudut tegak',
        circumradiusDescription:
          'Segi tiga bersudut tegak dengan hipotenus c, bulatan luar, jejari luar R, sudut tegak dan pusat di titik tengah hipotenus.',
        legA: 'sisi a',
        legB: 'sisi b',
        hypotenuseC: 'hipotenus c',
        inradiusR: 'jejari dalam r',
        incircle: 'bulatan dalam',
        circumradiusR: 'jejari luar R',
        circumcenter: 'pusat luar',
        circumcircle: 'bulatan luar',
        rightAngle: 'sudut tegak'
      },
      fields: {
        legA: 'Sisi a',
        legB: 'Sisi b',
        hypotenuseC: 'Hipotenus c',
        inradiusR: 'Jejari dalam r',
        circumradiusR: 'Jejari luar R'
      },
      calculatorHeadings: {
        inradius: 'Kira jejari dalam r',
        circumradius: 'Kira jejari luar R'
      },
      messages: {
        positive: 'Sila masukkan nilai positif.',
        invalid: 'Sila masukkan nilai positif.',
        hypotenuseKnownLeg: 'Hipotenus c sepatutnya sisi paling panjang.',
        hypotenuseLongest: 'Hipotenus c sepatutnya sisi paling panjang.',
        invalidTriangle: 'Panjang sisi ini mungkin tidak membentuk segi tiga bersudut tegak yang sah.'
      },
      runtime: {
        calculationComplete: 'Pengiraan selesai.',
        unableToCalculate: 'Tidak dapat mengira.',
        fixErrors: 'Betulkan ralat pada medan di atas.',
        errorPrefix: 'Ralat',
        stepLabels: {
          formula: 'Formula',
          substitution: 'Gantian',
          answer: 'Jawapan',
          explanation: 'Penerangan',
          detail: 'Butiran'
        }
      },
      stepDescriptions: {
        inradius: 'Cari jejari bulatan terbesar yang muat di dalam segi tiga.',
        circumradius: 'Jejari luar ialah separuh daripada hipotenus.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'kalkulator jejari segi tiga bersudut tegak',
        description: 'Gunakan kalkulator induk untuk jejari dalam, jejari luar dan hubungan jejari.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'kalkulator jejari dalam segi tiga bersudut tegak',
        description: 'Cari r daripada dua sisi dan hipotenus.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'kalkulator jejari luar segi tiga bersudut tegak',
        description: 'Cari R daripada hipotenus c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'kalkulator luas segi tiga bersudut tegak',
        description: 'Kira luas daripada panjang sisi segi tiga.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'kalkulator semiperimeter segi tiga bersudut tegak',
        description: 'Cari semiperimeter sebelum formula yang menggunakan s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'kalkulator sisi segi tiga bersudut tegak',
        description: 'Cari sisi yang hilang sebelum mengira jejari.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'kalkulator hipotenus segi tiga bersudut tegak',
        description: 'Cari hipotenus daripada dua sisi apabila c belum diketahui.'
      }
    },
    inradius: {
      primaryKeyword: 'kalkulator jejari dalam segi tiga bersudut tegak',
      secondaryKeywords: ['jejari dalam segi tiga bersudut tegak', 'jejari bulatan dalam', 'kalkulator r = (a + b − c) / 2'],
      h1: 'Kalkulator Jejari Dalam Segi Tiga Bersudut Tegak',
      metaTitle: 'Kalkulator Jejari Dalam Segi Tiga Bersudut Tegak | r = (a + b − c) / 2',
      metaDescription:
        'Gunakan kalkulator ini untuk mencari jejari dalam r daripada sisi a, sisi b dan hipotenus c.',
      modes: ['Jejari dalam', 'Hubungan jejari r'],
      intro: [
        'Gunakan halaman ini apabila a, b dan hipotenus c diketahui dan anda mahu mencari r.',
        'r ialah jejari bulatan dalam yang menyentuh ketiga-tiga sisi.'
      ],
      calculatorNote:
        'Masukkan nilai positif untuk a, b dan c. Hipotenus c mesti sisi paling panjang dan sisi-sisi itu mesti membentuk segi tiga bersudut tegak yang sah.',
      formulaParagraphs: ['Dalam segi tiga bersudut tegak, jejari dalam boleh dikira terus daripada dua sisi dan hipotenus.'],
      formulaPoints: ['Tambah sisi: a + b.', 'Tolak hipotenus: a + b − c.', 'Bahagi dengan 2 untuk mendapatkan r.'],
      diagramParagraphs: ['Rajah menunjukkan bulatan dalam di dalam segi tiga bersudut tegak.'],
      diagramNotes: ['r ialah jejari dalam.', 'c ialah hipotenus dan sisi paling panjang.'],
      howToUse: ['Masukkan a.', 'Masukkan b.', 'Masukkan hipotenus c.', 'Sahkan segi tiga dan kira r.'],
      exampleGiven: ['Sisi a = 6', 'Sisi b = 8', 'Hipotenus c = 10'],
      exampleResult: 'Untuk segi tiga 6-8-10, jejari dalam ialah 2 units.',
      resultMeaning: ['Keputusan r ialah jejari bulatan dalam segi tiga.'],
      radiusRelation: ['Dalam kalkulator induk, kiraan ini muncul sebagai Jejari dalam dan Hubungan jejari r.'],
      useCases: ['Mencari jejari bulatan dalam.', 'Menyemak masalah dengan tiga sisi.', 'Membandingkan r dengan R.'],
      commonMistakes: ['Menggunakan c sebagai sisi biasa.', 'Terlupa bahagi dengan 2.', 'Memasukkan sisi yang tidak sah.'],
      faqs: [
        {
          question: 'Apakah formula jejari dalam?',
          answer: 'Formulanya ialah r = (a + b − c) / 2, dengan a dan b sebagai sisi serta c sebagai hipotenus.'
        },
        {
          question: 'Apakah maksud r?',
          answer: 'r ialah jejari bulatan yang menyentuh tiga sisi di dalam segi tiga.'
        },
        {
          question: 'Mengapa c mesti hipotenus?',
          answer: 'Formula ini menggunakan c sebagai sisi bertentangan dengan sudut tegak.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'kalkulator jejari luar segi tiga bersudut tegak',
      secondaryKeywords: ['jejari luar segi tiga bersudut tegak', 'jejari bulatan luar', 'kalkulator R = c / 2'],
      h1: 'Kalkulator Jejari Luar Segi Tiga Bersudut Tegak',
      metaTitle: 'Kalkulator Jejari Luar Segi Tiga Bersudut Tegak | R = c / 2',
      metaDescription:
        'Gunakan kalkulator ini untuk mencari jejari luar R daripada hipotenus c.',
      modes: ['Jejari luar', 'Hubungan jejari R'],
      intro: [
        'Gunakan halaman ini apabila hipotenus c diketahui dan anda mahu mencari R.',
        'Dalam segi tiga bersudut tegak, hipotenus ialah diameter bulatan luar.'
      ],
      calculatorNote: 'Masukkan nilai positif untuk hipotenus c. c ialah sisi bertentangan dengan sudut tegak.',
      formulaParagraphs: ['Diameter bulatan luar ialah c, jadi jejarinya ialah c / 2.'],
      formulaPoints: ['Mula dengan hipotenus c.', 'Bahagi c dengan 2.', 'Keputusannya ialah R.'],
      diagramParagraphs: ['Rajah menunjukkan bulatan luar di sekeliling segi tiga bersudut tegak.'],
      diagramNotes: ['Pusat luar ialah titik tengah hipotenus.', 'R ialah jejari luar.'],
      howToUse: ['Masukkan c.', 'Pastikan c lebih besar daripada 0.', 'Kira R.', 'Baca keputusan sebagai R.'],
      exampleGiven: ['Hipotenus c = 10'],
      exampleResult: 'Jika hipotenus 10, jejari luar ialah 5 units.',
      resultMeaning: ['Keputusan R ialah jejari bulatan yang melalui tiga bucu.'],
      radiusRelation: ['Dalam kalkulator induk, kiraan ini muncul sebagai Jejari luar dan Hubungan jejari R.'],
      useCases: ['Mencari jejari bulatan luar.', 'Menggunakan hipotenus yang diketahui.', 'Membandingkan R dengan r.'],
      commonMistakes: ['Memasukkan sisi biasa bukannya c.', 'Terlupa R ialah separuh c.', 'Mengelirukan R dengan r.'],
      faqs: [
        {
          question: 'Apakah formula jejari luar?',
          answer: 'Formulanya ialah R = c / 2, dengan c sebagai hipotenus.'
        },
        {
          question: 'Apakah maksud R?',
          answer: 'R ialah jejari bulatan yang melalui ketiga-tiga bucu.'
        },
        {
          question: 'Perlukah a atau b?',
          answer: 'Tidak. Jika c diketahui, R = c / 2 sudah mencukupi.'
        }
      ]
    }
  }),
  ko: makeBundle({
    ui: {
      badge: '반지름 계산기',
      parentBreadcrumbLabel: '직각삼각형 반지름 계산기',
      openTool: '도구 열기',
      sectionHeadings: {
        formula: '공식',
        diagram: '삼각형 도식',
        howToUse: '이 계산기 사용 방법',
        example: '단계별 예제',
        given: '주어진 값:',
        resultMeaning: '결과의 의미',
        radiusRelation: '반지름 관계',
        useCases: '이 계산기를 사용할 때',
        commonMistakes: '흔한 실수',
        relatedCalculators: '관련 계산기',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: '직각삼각형 내접반지름 도식',
        inradiusDescription:
          '변 a, 변 b, 빗변 c, 내접원, 내접반지름 r, 직각이 표시된 직각삼각형.',
        circumradiusTitle: '직각삼각형 외접반지름 도식',
        circumradiusDescription:
          '빗변 c, 외접원, 외접반지름 R, 직각, 빗변의 중점에 있는 외심이 표시된 직각삼각형.',
        legA: '변 a',
        legB: '변 b',
        hypotenuseC: '빗변 c',
        inradiusR: '내접반지름 r',
        incircle: '내접원',
        circumradiusR: '외접반지름 R',
        circumcenter: '외심',
        circumcircle: '외접원',
        rightAngle: '직각'
      },
      fields: {
        legA: '변 a',
        legB: '변 b',
        hypotenuseC: '빗변 c',
        inradiusR: '내접반지름 r',
        circumradiusR: '외접반지름 R'
      },
      calculatorHeadings: {
        inradius: '내접반지름 r 계산',
        circumradius: '외접반지름 R 계산'
      },
      messages: {
        positive: '양수 값을 입력하세요.',
        invalid: '양수 값을 입력하세요.',
        hypotenuseKnownLeg: '빗변 c는 가장 긴 변이어야 합니다.',
        hypotenuseLongest: '빗변 c는 가장 긴 변이어야 합니다.',
        invalidTriangle: '이 변의 길이들은 유효한 직각삼각형을 만들지 않을 수 있습니다.'
      },
      runtime: {
        calculationComplete: '계산이 완료되었습니다.',
        unableToCalculate: '계산할 수 없습니다.',
        fixErrors: '위 입력란의 오류를 수정하세요.',
        errorPrefix: '오류',
        stepLabels: {
          formula: '공식',
          substitution: '대입',
          answer: '답',
          explanation: '설명',
          detail: '세부 내용'
        }
      },
      stepDescriptions: {
        inradius: '삼각형 안에 들어가는 가장 큰 원의 반지름을 구합니다.',
        circumradius: '외접반지름은 빗변의 절반입니다.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: '직각삼각형 반지름 계산기',
        description: '내접반지름, 외접반지름, 반지름 관계를 다루는 상위 계산기입니다.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: '직각삼각형 내접반지름 계산기',
        description: '두 변과 빗변에서 r을 구합니다.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: '직각삼각형 외접반지름 계산기',
        description: '빗변 c에서 R을 구합니다.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: '직각삼각형 넓이 계산기',
        description: '직각삼각형의 변 길이로 넓이를 계산합니다.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: '직각삼각형 반둘레 계산기',
        description: 's가 들어가는 공식 전에 반둘레를 구합니다.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: '직각삼각형 변 계산기',
        description: '반지름 계산 전에 빠진 변을 구합니다.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: '직각삼각형 빗변 계산기',
        description: 'c를 모를 때 두 변으로 빗변을 구합니다.'
      }
    },
    inradius: {
      primaryKeyword: '직각삼각형 내접반지름 계산기',
      secondaryKeywords: ['직각삼각형 내접반지름', '내접원 반지름', 'r = (a + b − c) / 2 계산기'],
      h1: '직각삼각형 내접반지름 계산기',
      metaTitle: '직각삼각형 내접반지름 계산기 | r = (a + b − c) / 2',
      metaDescription:
        '변 a, 변 b, 빗변 c에서 내접반지름 r을 구하는 직각삼각형 계산기입니다.',
      modes: ['내접반지름', '반지름 관계 r'],
      intro: [
        'a, b, 빗변 c를 알고 r을 구해야 할 때 사용하세요.',
        'r은 직각삼각형의 세 변에 닿는 내접원의 반지름입니다.'
      ],
      calculatorNote:
        'a, b, c에는 양수를 입력하세요. 빗변 c는 가장 긴 변이어야 하며 유효한 직각삼각형이어야 합니다.',
      formulaParagraphs: ['직각삼각형의 내접반지름은 두 변과 빗변으로 바로 계산할 수 있습니다.'],
      formulaPoints: ['두 변을 더합니다: a + b.', '빗변을 뺍니다: a + b − c.', '2로 나누면 r입니다.'],
      diagramParagraphs: ['도식은 직각삼각형 안의 내접원을 보여 줍니다.'],
      diagramNotes: ['r은 내접반지름입니다.', 'c는 빗변이며 가장 긴 변입니다.'],
      howToUse: ['a를 입력합니다.', 'b를 입력합니다.', '빗변 c를 입력합니다.', '삼각형을 확인하고 r을 계산합니다.'],
      exampleGiven: ['변 a = 6', '변 b = 8', '빗변 c = 10'],
      exampleResult: '6-8-10 직각삼각형의 내접반지름은 2 units입니다.',
      resultMeaning: ['결과 r은 삼각형 안쪽 내접원의 반지름입니다.'],
      radiusRelation: ['상위 계산기에서는 같은 계산이 내접반지름과 반지름 관계 r로 표시됩니다.'],
      useCases: ['내접원의 반지름 구하기.', '세 변이 주어진 문제 확인하기.', 'r과 R 비교하기.'],
      commonMistakes: ['c를 빗변이 아닌 변으로 쓰기.', '2로 나누는 것을 잊기.', '유효하지 않은 변 입력하기.'],
      faqs: [
        {
          question: '내접반지름 공식은 무엇인가요?',
          answer: '공식은 r = (a + b − c) / 2이며, a와 b는 변이고 c는 빗변입니다.'
        },
        {
          question: 'r은 무엇을 뜻하나요?',
          answer: 'r은 삼각형 안에서 세 변에 닿는 원의 반지름입니다.'
        },
        {
          question: '왜 c가 빗변이어야 하나요?',
          answer: '이 공식은 c를 직각의 반대편 변으로 사용하기 때문입니다.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: '직각삼각형 외접반지름 계산기',
      secondaryKeywords: ['직각삼각형 외접반지름', '외접원 반지름', 'R = c / 2 계산기'],
      h1: '직각삼각형 외접반지름 계산기',
      metaTitle: '직각삼각형 외접반지름 계산기 | R = c / 2',
      metaDescription:
        '빗변 c에서 외접반지름 R을 구하는 직각삼각형 계산기입니다.',
      modes: ['외접반지름', '반지름 관계 R'],
      intro: [
        '빗변 c를 알고 R을 구해야 할 때 사용하세요.',
        '직각삼각형에서는 빗변이 외접원의 지름이므로 R은 c의 절반입니다.'
      ],
      calculatorNote: '빗변 c에는 양수를 입력하세요. c는 항상 직각의 반대편 변입니다.',
      formulaParagraphs: ['외접원의 지름은 c이므로 반지름은 c / 2입니다.'],
      formulaPoints: ['빗변 c에서 시작합니다.', 'c를 2로 나눕니다.', '결과가 R입니다.'],
      diagramParagraphs: ['도식은 직각삼각형을 둘러싼 외접원을 보여 줍니다.'],
      diagramNotes: ['외심은 빗변의 중점입니다.', 'R은 외접반지름입니다.'],
      howToUse: ['c를 입력합니다.', 'c가 0보다 큰지 확인합니다.', 'R을 계산합니다.', '결과를 R로 읽습니다.'],
      exampleGiven: ['빗변 c = 10'],
      exampleResult: '빗변이 10이면 외접반지름은 5 units입니다.',
      resultMeaning: ['결과 R은 세 꼭짓점을 지나는 원의 반지름입니다.'],
      radiusRelation: ['상위 계산기에서는 같은 계산이 외접반지름과 반지름 관계 R로 표시됩니다.'],
      useCases: ['외접원의 반지름 구하기.', '알고 있는 빗변 사용하기.', 'R과 r 비교하기.'],
      commonMistakes: ['c 대신 다른 변 입력하기.', 'R이 c의 절반임을 잊기.', 'R과 r 혼동하기.'],
      faqs: [
        {
          question: '외접반지름 공식은 무엇인가요?',
          answer: '공식은 R = c / 2이며, c는 빗변입니다.'
        },
        {
          question: 'R은 무엇을 뜻하나요?',
          answer: 'R은 세 꼭짓점을 지나는 원의 반지름입니다.'
        },
        {
          question: 'a나 b가 필요한가요?',
          answer: '아니요. c를 알면 R = c / 2로 충분합니다.'
        }
      ]
    }
  }),
  ja: makeBundle({
    ui: {
      badge: '半径計算機',
      parentBreadcrumbLabel: '直角三角形の半径計算機',
      openTool: 'ツールを開く',
      sectionHeadings: {
        formula: '公式',
        diagram: '三角形の図',
        howToUse: 'この計算機の使い方',
        example: '手順付きの例',
        given: '与えられた値:',
        resultMeaning: '結果の意味',
        radiusRelation: '半径の関係',
        useCases: 'この計算機を使う場面',
        commonMistakes: 'よくある間違い',
        relatedCalculators: '関連する計算機',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: '直角三角形の内接円半径の図',
        inradiusDescription:
          '辺 a、辺 b、斜辺 c、内接円、内接円半径 r、直角を示す直角三角形。',
        circumradiusTitle: '直角三角形の外接円半径の図',
        circumradiusDescription:
          '斜辺 c、外接円、外接円半径 R、直角、斜辺の中点にある外心を示す直角三角形。',
        legA: '辺 a',
        legB: '辺 b',
        hypotenuseC: '斜辺 c',
        inradiusR: '内接円半径 r',
        incircle: '内接円',
        circumradiusR: '外接円半径 R',
        circumcenter: '外心',
        circumcircle: '外接円',
        rightAngle: '直角'
      },
      fields: {
        legA: '辺 a',
        legB: '辺 b',
        hypotenuseC: '斜辺 c',
        inradiusR: '内接円半径 r',
        circumradiusR: '外接円半径 R'
      },
      calculatorHeadings: {
        inradius: '内接円半径 r を計算',
        circumradius: '外接円半径 R を計算'
      },
      messages: {
        positive: '正の値を入力してください。',
        invalid: '正の値を入力してください。',
        hypotenuseKnownLeg: '斜辺 c は最も長い辺である必要があります。',
        hypotenuseLongest: '斜辺 c は最も長い辺である必要があります。',
        invalidTriangle: 'これらの辺の長さは有効な直角三角形にならない可能性があります。'
      },
      runtime: {
        calculationComplete: '計算が完了しました。',
        unableToCalculate: '計算できません。',
        fixErrors: '上の入力欄のエラーを修正してください。',
        errorPrefix: 'エラー',
        stepLabels: {
          formula: '公式',
          substitution: '代入',
          answer: '答え',
          explanation: '説明',
          detail: '詳細'
        }
      },
      stepDescriptions: {
        inradius: '三角形の中に入る最大の円の半径を求めます。',
        circumradius: '外接円半径は斜辺の半分です。'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: '直角三角形の半径計算機',
        description: '内接円半径、外接円半径、半径の関係を扱う親計算機です。'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: '直角三角形の内接円半径計算機',
        description: '2つの辺と斜辺から r を求めます。'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: '直角三角形の外接円半径計算機',
        description: '斜辺 c から R を求めます。'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: '直角三角形の面積計算機',
        description: '直角三角形の辺から面積を計算します。'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: '直角三角形の半周長計算機',
        description: 's を使う公式の前に半周長を求めます。'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: '直角三角形の辺計算機',
        description: '半径を求める前に不足している辺を計算します。'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: '直角三角形の斜辺計算機',
        description: 'c が不明なとき、2つの辺から斜辺を求めます。'
      }
    },
    inradius: {
      primaryKeyword: '直角三角形の内接円半径計算機',
      secondaryKeywords: ['直角三角形 内接円半径', '内接円の半径', 'r = (a + b − c) / 2 計算機'],
      h1: '直角三角形の内接円半径計算機',
      metaTitle: '直角三角形の内接円半径計算機 | r = (a + b − c) / 2',
      metaDescription:
        '辺 a、辺 b、斜辺 c から内接円半径 r を求める直角三角形計算機です。',
      modes: ['内接円半径', '半径の関係 r'],
      intro: [
        'a、b、斜辺 c が分かっていて r を求めたいときに使います。',
        'r は三角形の3辺に接する内接円の半径です。'
      ],
      calculatorNote:
        'a、b、c は正の値を入力してください。斜辺 c は最も長い辺で、有効な直角三角形である必要があります。',
      formulaParagraphs: ['直角三角形では、内接円半径は2つの辺と斜辺から直接求められます。'],
      formulaPoints: ['辺を足します: a + b.', '斜辺を引きます: a + b − c.', '2で割ると r です。'],
      diagramParagraphs: ['図は直角三角形の中の内接円を示しています。'],
      diagramNotes: ['r は内接円半径です。', 'c は斜辺で最も長い辺です。'],
      howToUse: ['a を入力します。', 'b を入力します。', '斜辺 c を入力します。', '三角形を確認して r を計算します。'],
      exampleGiven: ['辺 a = 6', '辺 b = 8', '斜辺 c = 10'],
      exampleResult: '6-8-10 の直角三角形では、内接円半径は 2 units です。',
      resultMeaning: ['結果 r は三角形の内側にある内接円の半径です。'],
      radiusRelation: ['親計算機では、同じ計算が内接円半径と半径の関係 r として表示されます。'],
      useCases: ['内接円の半径を求める。', '3辺が与えられた問題を確認する。', 'r と R を比較する。'],
      commonMistakes: ['c を斜辺ではなく辺として使う。', '2で割るのを忘れる。', '無効な辺を入力する。'],
      faqs: [
        {
          question: '内接円半径の公式は何ですか？',
          answer: '公式は r = (a + b − c) / 2 です。a と b は辺、c は斜辺です。'
        },
        {
          question: 'r は何を表しますか？',
          answer: 'r は直角三角形の3辺に接する内接円の半径です。'
        },
        {
          question: 'なぜ c は斜辺なのですか？',
          answer: 'この公式は c を直角の向かい側の辺として使うためです。'
        }
      ]
    },
    circumradius: {
      primaryKeyword: '直角三角形の外接円半径計算機',
      secondaryKeywords: ['直角三角形 外接円半径', '外接円の半径', 'R = c / 2 計算機'],
      h1: '直角三角形の外接円半径計算機',
      metaTitle: '直角三角形の外接円半径計算機 | R = c / 2',
      metaDescription:
        '斜辺 c から外接円半径 R を求める直角三角形計算機です。',
      modes: ['外接円半径', '半径の関係 R'],
      intro: [
        '斜辺 c が分かっていて R を求めたいときに使います。',
        '直角三角形では斜辺が外接円の直径になるため、R は c の半分です。'
      ],
      calculatorNote: '斜辺 c に正の値を入力してください。c は常に直角の向かい側です。',
      formulaParagraphs: ['外接円の直径は c なので、半径は c / 2 です。'],
      formulaPoints: ['斜辺 c から始めます。', 'c を 2 で割ります。', '結果が R です。'],
      diagramParagraphs: ['図は直角三角形を囲む外接円を示しています。'],
      diagramNotes: ['外心は斜辺の中点です。', 'R は外接円半径です。'],
      howToUse: ['c を入力します。', 'c が 0 より大きいことを確認します。', 'R を計算します。', '結果を R として読みます。'],
      exampleGiven: ['斜辺 c = 10'],
      exampleResult: '斜辺が 10 のとき、外接円半径は 5 units です。',
      resultMeaning: ['結果 R は3つの頂点を通る円の半径です。'],
      radiusRelation: ['親計算機では、同じ計算が外接円半径と半径の関係 R として表示されます。'],
      useCases: ['外接円の半径を求める。', '既知の斜辺を使う。', 'R と r を比較する。'],
      commonMistakes: ['c の代わりに別の辺を入力する。', 'R が c の半分であることを忘れる。', 'R と r を混同する。'],
      faqs: [
        {
          question: '外接円半径の公式は何ですか？',
          answer: '公式は R = c / 2 です。c は斜辺です。'
        },
        {
          question: 'R は何を表しますか？',
          answer: 'R は3つの頂点を通る円の半径です。'
        },
        {
          question: 'a や b は必要ですか？',
          answer: 'いいえ。c が分かれば R = c / 2 だけで求められます。'
        }
      ]
    }
  }),
  bn: makeBundle({
    ui: {
      badge: 'ব্যাসার্ধ ক্যালকুলেটর',
      parentBreadcrumbLabel: 'সমকোণী ত্রিভুজ ব্যাসার্ধ ক্যালকুলেটর',
      openTool: 'টুল খুলুন',
      sectionHeadings: {
        formula: 'সূত্র',
        diagram: 'ত্রিভুজ চিত্র',
        howToUse: 'এই ক্যালকুলেটর কীভাবে ব্যবহার করবেন',
        example: 'ধাপে ধাপে উদাহরণ',
        given: 'দেওয়া আছে:',
        resultMeaning: 'ফলাফলের অর্থ',
        radiusRelation: 'ব্যাসার্ধ সম্পর্ক',
        useCases: 'কখন ব্যবহার করবেন',
        commonMistakes: 'সাধারণ ভুল',
        relatedCalculators: 'সম্পর্কিত ক্যালকুলেটর',
        faqs: 'প্রশ্নোত্তর'
      },
      diagram: {
        inradiusTitle: 'সমকোণী ত্রিভুজের অন্তঃব্যাসার্ধ চিত্র',
        inradiusDescription:
          'বাহু a, বাহু b, অতিভুজ c, অন্তঃবৃত্ত, অন্তঃব্যাসার্ধ r এবং সমকোণসহ একটি সমকোণী ত্রিভুজ।',
        circumradiusTitle: 'সমকোণী ত্রিভুজের পরিবৃত্ত ব্যাসার্ধ চিত্র',
        circumradiusDescription:
          'অতিভুজ c, পরিবৃত্ত, পরিবৃত্ত ব্যাসার্ধ R, সমকোণ এবং অতিভুজের মধ্যবিন্দুতে কেন্দ্রসহ একটি সমকোণী ত্রিভুজ।',
        legA: 'বাহু a',
        legB: 'বাহু b',
        hypotenuseC: 'অতিভুজ c',
        inradiusR: 'অন্তঃব্যাসার্ধ r',
        incircle: 'অন্তঃবৃত্ত',
        circumradiusR: 'পরিবৃত্ত ব্যাসার্ধ R',
        circumcenter: 'পরিকেন্দ্র',
        circumcircle: 'পরিবৃত্ত',
        rightAngle: 'সমকোণ'
      },
      fields: {
        legA: 'বাহু a',
        legB: 'বাহু b',
        hypotenuseC: 'অতিভুজ c',
        inradiusR: 'অন্তঃব্যাসার্ধ r',
        circumradiusR: 'পরিবৃত্ত ব্যাসার্ধ R'
      },
      calculatorHeadings: {
        inradius: 'অন্তঃব্যাসার্ধ r গণনা করুন',
        circumradius: 'পরিবৃত্ত ব্যাসার্ধ R গণনা করুন'
      },
      messages: {
        positive: 'অনুগ্রহ করে ধনাত্মক মান লিখুন।',
        invalid: 'অনুগ্রহ করে ধনাত্মক মান লিখুন।',
        hypotenuseKnownLeg: 'অতিভুজ c সবচেয়ে দীর্ঘ বাহু হওয়া উচিত।',
        hypotenuseLongest: 'অতিভুজ c সবচেয়ে দীর্ঘ বাহু হওয়া উচিত।',
        invalidTriangle: 'এই বাহুগুলো বৈধ সমকোণী ত্রিভুজ নাও গঠন করতে পারে।'
      },
      runtime: {
        calculationComplete: 'গণনা সম্পন্ন হয়েছে।',
        unableToCalculate: 'গণনা করা যাচ্ছে না।',
        fixErrors: 'উপরের ক্ষেত্রগুলোর ভুল ঠিক করুন।',
        errorPrefix: 'ত্রুটি',
        stepLabels: {
          formula: 'সূত্র',
          substitution: 'প্রতিস্থাপন',
          answer: 'উত্তর',
          explanation: 'ব্যাখ্যা',
          detail: 'বিস্তারিত'
        }
      },
      stepDescriptions: {
        inradius: 'ত্রিভুজের ভিতরে ফিট হওয়া সবচেয়ে বড় বৃত্তের ব্যাসার্ধ বের করুন।',
        circumradius: 'পরিবৃত্ত ব্যাসার্ধ অতিভুজের অর্ধেক।'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'সমকোণী ত্রিভুজ ব্যাসার্ধ ক্যালকুলেটর',
        description: 'অন্তঃব্যাসার্ধ, পরিবৃত্ত ব্যাসার্ধ এবং ব্যাসার্ধ সম্পর্কের জন্য প্রধান ক্যালকুলেটর।'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'সমকোণী ত্রিভুজ অন্তঃব্যাসার্ধ ক্যালকুলেটর',
        description: 'দুই বাহু ও অতিভুজ থেকে r বের করুন।'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'সমকোণী ত্রিভুজ পরিবৃত্ত ব্যাসার্ধ ক্যালকুলেটর',
        description: 'অতিভুজ c থেকে R বের করুন।'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর',
        description: 'সমকোণী ত্রিভুজের বাহু থেকে ক্ষেত্রফল বের করুন।'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'সমকোণী ত্রিভুজ অর্ধপরিসীমা ক্যালকুলেটর',
        description: 's যুক্ত সূত্রের আগে অর্ধপরিসীমা বের করুন।'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'সমকোণী ত্রিভুজ বাহু ক্যালকুলেটর',
        description: 'ব্যাসার্ধ গণনার আগে অনুপস্থিত বাহু বের করুন।'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'সমকোণী ত্রিভুজ অতিভুজ ক্যালকুলেটর',
        description: 'c জানা না থাকলে দুই বাহু থেকে অতিভুজ বের করুন।'
      }
    },
    inradius: {
      primaryKeyword: 'সমকোণী ত্রিভুজ অন্তঃব্যাসার্ধ ক্যালকুলেটর',
      secondaryKeywords: ['সমকোণী ত্রিভুজ অন্তঃব্যাসার্ধ', 'অন্তঃবৃত্তের ব্যাসার্ধ', 'r = (a + b − c) / 2 ক্যালকুলেটর'],
      h1: 'সমকোণী ত্রিভুজ অন্তঃব্যাসার্ধ ক্যালকুলেটর',
      metaTitle: 'সমকোণী ত্রিভুজ অন্তঃব্যাসার্ধ ক্যালকুলেটর | r = (a + b − c) / 2',
      metaDescription:
        'বাহু a, বাহু b এবং অতিভুজ c থেকে অন্তঃব্যাসার্ধ r বের করতে এই ক্যালকুলেটর ব্যবহার করুন।',
      modes: ['অন্তঃব্যাসার্ধ', 'ব্যাসার্ধ সম্পর্ক r'],
      intro: [
        'a, b এবং অতিভুজ c জানা থাকলে r বের করতে এই পৃষ্ঠা ব্যবহার করুন।',
        'অন্তঃব্যাসার্ধ হলো ত্রিভুজের ভিতরের অন্তঃবৃত্তের ব্যাসার্ধ, যা তিনটি বাহুকে স্পর্শ করে।'
      ],
      calculatorNote:
        'a, b এবং c এর জন্য ধনাত্মক মান লিখুন। অতিভুজ c সবচেয়ে দীর্ঘ বাহু হতে হবে এবং মানগুলো বৈধ সমকোণী ত্রিভুজ গঠন করতে হবে।',
      formulaParagraphs: ['সমকোণী ত্রিভুজে অন্তঃব্যাসার্ধ সরাসরি দুই বাহু ও অতিভুজ থেকে পাওয়া যায়।'],
      formulaPoints: ['বাহুগুলো যোগ করুন: a + b.', 'অতিভুজ বিয়োগ করুন: a + b − c.', 'r পেতে 2 দিয়ে ভাগ করুন।'],
      diagramParagraphs: ['চিত্রে সমকোণী ত্রিভুজের ভিতরের অন্তঃবৃত্ত দেখানো হয়েছে।'],
      diagramNotes: ['r হলো অন্তঃব্যাসার্ধ।', 'c হলো অতিভুজ এবং সবচেয়ে দীর্ঘ বাহু।'],
      howToUse: ['a লিখুন।', 'b লিখুন।', 'অতিভুজ c লিখুন।', 'ত্রিভুজ যাচাই করে r গণনা করুন।'],
      exampleGiven: ['বাহু a = 6', 'বাহু b = 8', 'অতিভুজ c = 10'],
      exampleResult: '6-8-10 সমকোণী ত্রিভুজের জন্য অন্তঃব্যাসার্ধ 2 units।',
      resultMeaning: ['ফলাফল r হলো ত্রিভুজের ভিতরের বৃত্তের ব্যাসার্ধ।'],
      radiusRelation: ['প্রধান ক্যালকুলেটরে একই হিসাব অন্তঃব্যাসার্ধ এবং ব্যাসার্ধ সম্পর্ক r নামে আছে।'],
      useCases: ['অন্তঃবৃত্তের ব্যাসার্ধ বের করা।', 'তিন বাহু দেওয়া সমস্যা যাচাই করা।', 'r ও R তুলনা করা।'],
      commonMistakes: ['c কে বাহু ধরে নেওয়া।', '2 দিয়ে ভাগ করতে ভুলে যাওয়া।', 'অবৈধ বাহু লেখা।'],
      faqs: [
        {
          question: 'অন্তঃব্যাসার্ধের সূত্র কী?',
          answer: 'সূত্র r = (a + b − c) / 2, যেখানে a ও b বাহু এবং c অতিভুজ।'
        },
        {
          question: 'r কী বোঝায়?',
          answer: 'r হলো ত্রিভুজের ভিতরে তিন বাহুকে স্পর্শ করা বৃত্তের ব্যাসার্ধ।'
        },
        {
          question: 'c কেন অতিভুজ?',
          answer: 'কারণ সূত্রে c সমকোণের বিপরীত বাহু হিসেবে ব্যবহৃত হয়।'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'সমকোণী ত্রিভুজ পরিবৃত্ত ব্যাসার্ধ ক্যালকুলেটর',
      secondaryKeywords: ['সমকোণী ত্রিভুজ পরিবৃত্ত ব্যাসার্ধ', 'পরিবৃত্তের ব্যাসার্ধ', 'R = c / 2 ক্যালকুলেটর'],
      h1: 'সমকোণী ত্রিভুজ পরিবৃত্ত ব্যাসার্ধ ক্যালকুলেটর',
      metaTitle: 'সমকোণী ত্রিভুজ পরিবৃত্ত ব্যাসার্ধ ক্যালকুলেটর | R = c / 2',
      metaDescription:
        'অতিভুজ c থেকে পরিবৃত্ত ব্যাসার্ধ R বের করতে এই ক্যালকুলেটর ব্যবহার করুন।',
      modes: ['পরিবৃত্ত ব্যাসার্ধ', 'ব্যাসার্ধ সম্পর্ক R'],
      intro: [
        'অতিভুজ c জানা থাকলে R বের করতে এই পৃষ্ঠা ব্যবহার করুন।',
        'সমকোণী ত্রিভুজে অতিভুজ পরিবৃত্তের ব্যাস, তাই R হলো c এর অর্ধেক।'
      ],
      calculatorNote:
        'অতিভুজ c এর জন্য ধনাত্মক মান লিখুন। c সবসময় সমকোণের বিপরীত বাহু।',
      formulaParagraphs: ['পরিবৃত্তের ব্যাস হলো c, তাই ব্যাসার্ধ c / 2।'],
      formulaPoints: ['অতিভুজ c নিন।', 'c কে 2 দিয়ে ভাগ করুন।', 'ফলাফল R।'],
      diagramParagraphs: ['চিত্রে ত্রিভুজের চারপাশের পরিবৃত্ত দেখানো হয়েছে।'],
      diagramNotes: ['পরিকেন্দ্র অতিভুজের মধ্যবিন্দু।', 'R হলো পরিবৃত্ত ব্যাসার্ধ।'],
      howToUse: ['c লিখুন।', 'c 0-এর বেশি কিনা দেখুন।', 'R গণনা করুন।', 'ফলাফল R হিসেবে পড়ুন।'],
      exampleGiven: ['অতিভুজ c = 10'],
      exampleResult: 'অতিভুজ 10 হলে পরিবৃত্ত ব্যাসার্ধ 5 units।',
      resultMeaning: ['ফলাফল R হলো তিনটি শীর্ষ দিয়ে যাওয়া বৃত্তের ব্যাসার্ধ।'],
      radiusRelation: ['প্রধান ক্যালকুলেটরে একই হিসাব পরিবৃত্ত ব্যাসার্ধ এবং ব্যাসার্ধ সম্পর্ক R নামে আছে।'],
      useCases: ['পরিবৃত্তের ব্যাসার্ধ বের করা।', 'জানা অতিভুজ ব্যবহার করা।', 'R ও r তুলনা করা।'],
      commonMistakes: ['c এর বদলে বাহু লেখা।', 'R যে c-এর অর্ধেক তা ভুলে যাওয়া।', 'R ও r মিশিয়ে ফেলা।'],
      faqs: [
        {
          question: 'পরিবৃত্ত ব্যাসার্ধের সূত্র কী?',
          answer: 'সূত্র R = c / 2, যেখানে c অতিভুজ।'
        },
        {
          question: 'R কী বোঝায়?',
          answer: 'R হলো তিনটি শীর্ষ দিয়ে যাওয়া বৃত্তের ব্যাসার্ধ।'
        },
        {
          question: 'a বা b দরকার কি?',
          answer: 'না। c জানা থাকলে R = c / 2 যথেষ্ট।'
        }
      ]
    }
  }),
  pt: makeBundle({
    ui: {
      badge: 'Calculadora de raio',
      parentBreadcrumbLabel: 'Calculadora de raios de triângulo retângulo',
      openTool: 'Abrir ferramenta',
      sectionHeadings: {
        formula: 'Fórmula',
        diagram: 'Diagrama do triângulo',
        howToUse: 'Como usar esta calculadora',
        example: 'Exemplo passo a passo',
        given: 'Dados:',
        resultMeaning: 'O que o resultado significa',
        radiusRelation: 'Relação do raio',
        useCases: 'Quando usar esta calculadora',
        commonMistakes: 'Erros comuns',
        relatedCalculators: 'Calculadoras relacionadas',
        faqs: 'Perguntas frequentes'
      },
      diagram: {
        inradiusTitle: 'Diagrama do inraio de um triângulo retângulo',
        inradiusDescription:
          'Triângulo retângulo com cateto a, cateto b, hipotenusa c, incírculo, inraio r e ângulo reto.',
        circumradiusTitle: 'Diagrama do circunraio de um triângulo retângulo',
        circumradiusDescription:
          'Triângulo retângulo com hipotenusa c, circuncírculo, circunraio R, ângulo reto e centro no ponto médio da hipotenusa.',
        legA: 'cateto a',
        legB: 'cateto b',
        hypotenuseC: 'hipotenusa c',
        inradiusR: 'inraio r',
        incircle: 'incírculo',
        circumradiusR: 'circunraio R',
        circumcenter: 'circuncentro',
        circumcircle: 'circuncírculo',
        rightAngle: 'ângulo reto'
      },
      fields: {
        legA: 'Cateto a',
        legB: 'Cateto b',
        hypotenuseC: 'Hipotenusa c',
        inradiusR: 'Inraio r',
        circumradiusR: 'Circunraio R'
      },
      calculatorHeadings: {
        inradius: 'Calcular inraio r',
        circumradius: 'Calcular circunraio R'
      },
      messages: {
        positive: 'Insira valores positivos.',
        invalid: 'Insira valores positivos.',
        hypotenuseKnownLeg: 'A hipotenusa c deve ser o lado mais longo.',
        hypotenuseLongest: 'A hipotenusa c deve ser o lado mais longo.',
        invalidTriangle: 'Esses comprimentos podem não formar um triângulo retângulo válido.'
      },
      runtime: {
        calculationComplete: 'Cálculo concluído.',
        unableToCalculate: 'Não foi possível calcular.',
        fixErrors: 'Corrija os erros nos campos acima.',
        errorPrefix: 'Erro',
        stepLabels: {
          formula: 'Fórmula',
          substitution: 'Substituição',
          answer: 'Resposta',
          explanation: 'Explicação',
          detail: 'Detalhe'
        }
      },
      stepDescriptions: {
        inradius: 'Encontre o raio do maior círculo que cabe dentro do triângulo.',
        circumradius: 'O circunraio é metade da hipotenusa.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'calculadora de raios de triângulo retângulo',
        description: 'Use a calculadora principal para inraio, circunraio e relações de raio.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'calculadora de inraio de triângulo retângulo',
        description: 'Encontre r a partir dos dois catetos e da hipotenusa.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'calculadora de circunraio de triângulo retângulo',
        description: 'Encontre R a partir da hipotenusa c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'calculadora de área de triângulo retângulo',
        description: 'Calcule a área a partir dos lados do triângulo retângulo.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'calculadora de semiperímetro de triângulo retângulo',
        description: 'Encontre o semiperímetro antes de fórmulas com s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'calculadora de lados de triângulo retângulo',
        description: 'Encontre um lado ausente antes de calcular o raio.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'calculadora de hipotenusa de triângulo retângulo',
        description: 'Encontre a hipotenusa pelos dois catetos quando c ainda não for conhecido.'
      }
    },
    inradius: {
      primaryKeyword: 'calculadora de inraio de triângulo retângulo',
      secondaryKeywords: ['inraio de triângulo retângulo', 'raio do incírculo', 'calculadora r = (a + b − c) / 2'],
      h1: 'Calculadora de inraio de triângulo retângulo',
      metaTitle: 'Calculadora de inraio de triângulo retângulo | r = (a + b − c) / 2',
      metaDescription:
        'Use esta calculadora para encontrar o inraio r com cateto a, cateto b e hipotenusa c.',
      modes: ['Inraio', 'Relação do raio r'],
      intro: [
        'Use esta página quando você conhece a, b e a hipotenusa c e precisa encontrar o inraio r.',
        'O inraio é o raio do incírculo que toca os três lados do triângulo retângulo.'
      ],
      calculatorNote:
        'Insira valores positivos para a, b e c. A hipotenusa c deve ser o lado mais longo e as medidas devem formar um triângulo retângulo válido.',
      formulaParagraphs: ['Em um triângulo retângulo, o inraio vem diretamente dos dois catetos e da hipotenusa.'],
      formulaPoints: ['Some os catetos: a + b.', 'Subtraia a hipotenusa: a + b − c.', 'Divida por 2 para obter r.'],
      diagramParagraphs: ['O diagrama mostra o incírculo dentro do triângulo retângulo.'],
      diagramNotes: ['r é o inraio.', 'c é a hipotenusa e o lado mais longo.'],
      howToUse: ['Digite a.', 'Digite b.', 'Digite a hipotenusa c.', 'Verifique o triângulo e calcule r.'],
      exampleGiven: ['Cateto a = 6', 'Cateto b = 8', 'Hipotenusa c = 10'],
      exampleResult: 'Para um triângulo retângulo 6-8-10, o inraio é 2 units.',
      resultMeaning: ['O resultado r é o raio do círculo inscrito no triângulo.'],
      radiusRelation: ['Na calculadora principal, esse cálculo aparece como Inraio e Relação do raio r.'],
      useCases: ['Encontrar o raio do incírculo.', 'Conferir problemas com três lados.', 'Comparar r com R.'],
      commonMistakes: ['Usar c como cateto.', 'Esquecer de dividir por 2.', 'Inserir lados inválidos.'],
      faqs: [
        {
          question: 'Qual é a fórmula do inraio?',
          answer: 'A fórmula é r = (a + b − c) / 2, onde a e b são catetos e c é a hipotenusa.'
        },
        {
          question: 'O que r representa?',
          answer: 'r é o raio do círculo que toca os três lados dentro do triângulo.'
        },
        {
          question: 'Por que c deve ser a hipotenusa?',
          answer: 'Porque a fórmula usa c como o lado oposto ao ângulo reto.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'calculadora de circunraio de triângulo retângulo',
      secondaryKeywords: ['circunraio de triângulo retângulo', 'raio do circuncírculo', 'calculadora R = c / 2'],
      h1: 'Calculadora de circunraio de triângulo retângulo',
      metaTitle: 'Calculadora de circunraio de triângulo retângulo | R = c / 2',
      metaDescription:
        'Use esta calculadora para encontrar o circunraio R a partir da hipotenusa c.',
      modes: ['Circunraio', 'Relação do raio R'],
      intro: [
        'Use esta página quando a hipotenusa c é conhecida e você precisa encontrar o circunraio R.',
        'Em um triângulo retângulo, a hipotenusa é o diâmetro do circuncírculo.'
      ],
      calculatorNote:
        'Insira um valor positivo para a hipotenusa c. Esta calculadora assume que c é o lado oposto ao ângulo reto.',
      formulaParagraphs: ['O circuncírculo tem diâmetro c, então o raio é c dividido por 2.'],
      formulaPoints: ['Comece com a hipotenusa c.', 'Divida c por 2.', 'O resultado é R.'],
      diagramParagraphs: ['O diagrama mostra o circuncírculo ao redor do triângulo retângulo.'],
      diagramNotes: ['O circuncentro é o ponto médio da hipotenusa.', 'R é o circunraio.'],
      howToUse: ['Digite c.', 'Confira que c é maior que 0.', 'Calcule R.', 'Leia o resultado como R.'],
      exampleGiven: ['Hipotenusa c = 10'],
      exampleResult: 'Para hipotenusa 10, o circunraio é 5 units.',
      resultMeaning: ['O resultado R é o raio do círculo que passa pelos três vértices.'],
      radiusRelation: ['Na calculadora principal, esse cálculo aparece como Circunraio e Relação do raio R.'],
      useCases: ['Encontrar o raio do circuncírculo.', 'Usar uma hipotenusa conhecida.', 'Comparar R com r.'],
      commonMistakes: ['Digitar um cateto em vez de c.', 'Esquecer que R é metade de c.', 'Confundir R com r.'],
      faqs: [
        {
          question: 'Qual é a fórmula do circunraio?',
          answer: 'A fórmula é R = c / 2, onde c é a hipotenusa.'
        },
        {
          question: 'O que R representa?',
          answer: 'R é o raio do círculo que passa pelos três vértices.'
        },
        {
          question: 'Preciso de a ou b?',
          answer: 'Não. Se c é conhecida, use R = c / 2.'
        }
      ]
    }
  }),
  it: makeBundle({
    ui: {
      badge: 'Calcolatrice del raggio',
      parentBreadcrumbLabel: 'Calcolatrice dei raggi del triangolo rettangolo',
      openTool: 'Apri strumento',
      sectionHeadings: {
        formula: 'Formula',
        diagram: 'Diagramma del triangolo',
        howToUse: 'Come usare questa calcolatrice',
        example: 'Esempio passo dopo passo',
        given: 'Dati:',
        resultMeaning: 'Significato del risultato',
        radiusRelation: 'Relazione del raggio',
        useCases: 'Quando usare questa calcolatrice',
        commonMistakes: 'Errori comuni',
        relatedCalculators: 'Calcolatrici correlate',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: 'Diagramma dell’inraggio di un triangolo rettangolo',
        inradiusDescription:
          'Triangolo rettangolo con cateto a, cateto b, ipotenusa c, incirconferenza, inraggio r e angolo retto.',
        circumradiusTitle: 'Diagramma del circonraggio di un triangolo rettangolo',
        circumradiusDescription:
          'Triangolo rettangolo con ipotenusa c, circonferenza circoscritta, circonraggio R, angolo retto e centro a metà dell’ipotenusa.',
        legA: 'cateto a',
        legB: 'cateto b',
        hypotenuseC: 'ipotenusa c',
        inradiusR: 'inraggio r',
        incircle: 'incirconferenza',
        circumradiusR: 'circonraggio R',
        circumcenter: 'circocentro',
        circumcircle: 'circonferenza circoscritta',
        rightAngle: 'angolo retto'
      },
      fields: {
        legA: 'Cateto a',
        legB: 'Cateto b',
        hypotenuseC: 'Ipotenusa c',
        inradiusR: 'Inraggio r',
        circumradiusR: 'Circonraggio R'
      },
      calculatorHeadings: {
        inradius: 'Calcola inraggio r',
        circumradius: 'Calcola circonraggio R'
      },
      messages: {
        positive: 'Inserisci valori positivi.',
        invalid: 'Inserisci valori positivi.',
        hypotenuseKnownLeg: 'L’ipotenusa c deve essere il lato più lungo.',
        hypotenuseLongest: 'L’ipotenusa c deve essere il lato più lungo.',
        invalidTriangle: 'Queste lunghezze potrebbero non formare un triangolo rettangolo valido.'
      },
      runtime: {
        calculationComplete: 'Calcolo completato.',
        unableToCalculate: 'Impossibile calcolare.',
        fixErrors: 'Correggi gli errori nei campi sopra.',
        errorPrefix: 'Errore',
        stepLabels: {
          formula: 'Formula',
          substitution: 'Sostituzione',
          answer: 'Risposta',
          explanation: 'Spiegazione',
          detail: 'Dettaglio'
        }
      },
      stepDescriptions: {
        inradius: 'Trova il raggio del cerchio più grande che entra nel triangolo.',
        circumradius: 'Il circonraggio è metà dell’ipotenusa.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'calcolatrice dei raggi del triangolo rettangolo',
        description: 'Usa la calcolatrice principale per inraggio, circonraggio e relazioni dei raggi.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'calcolatrice dell’inraggio del triangolo rettangolo',
        description: 'Trova r dai due cateti e dall’ipotenusa.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'calcolatrice del circonraggio del triangolo rettangolo',
        description: 'Trova R dall’ipotenusa c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'calcolatrice dell’area del triangolo rettangolo',
        description: 'Calcola l’area dalle lunghezze del triangolo rettangolo.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'calcolatrice del semiperimetro del triangolo rettangolo',
        description: 'Trova il semiperimetro prima delle formule con s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'calcolatrice dei lati del triangolo rettangolo',
        description: 'Trova un lato mancante prima del raggio.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'calcolatrice dell’ipotenusa del triangolo rettangolo',
        description: 'Trova l’ipotenusa dai due cateti quando c non è nota.'
      }
    },
    inradius: {
      primaryKeyword: 'calcolatrice dell’inraggio del triangolo rettangolo',
      secondaryKeywords: ['inraggio triangolo rettangolo', 'raggio dell’incirconferenza', 'calcolatrice r = (a + b − c) / 2'],
      h1: 'Calcolatrice dell’inraggio del triangolo rettangolo',
      metaTitle: 'Calcolatrice dell’inraggio del triangolo rettangolo | r = (a + b − c) / 2',
      metaDescription:
        'Usa questa calcolatrice per trovare l’inraggio r da cateto a, cateto b e ipotenusa c.',
      modes: ['Inraggio', 'Relazione del raggio r'],
      intro: [
        'Usa questa pagina quando conosci a, b e l’ipotenusa c e vuoi trovare l’inraggio r.',
        'L’inraggio è il raggio dell’incirconferenza che tocca tutti e tre i lati del triangolo rettangolo.'
      ],
      calculatorNote:
        'Inserisci valori positivi per a, b e c. L’ipotenusa c deve essere il lato più lungo e le lunghezze devono formare un triangolo rettangolo valido.',
      formulaParagraphs: ['Per un triangolo rettangolo, l’inraggio si trova direttamente dai due cateti e dall’ipotenusa.'],
      formulaPoints: ['Somma i cateti: a + b.', 'Sottrai l’ipotenusa: a + b − c.', 'Dividi per 2 per ottenere r.'],
      diagramParagraphs: ['Il diagramma mostra l’incirconferenza dentro il triangolo rettangolo.'],
      diagramNotes: ['r è l’inraggio.', 'c è l’ipotenusa e il lato più lungo.'],
      howToUse: ['Inserisci a.', 'Inserisci b.', 'Inserisci l’ipotenusa c.', 'Verifica il triangolo e calcola r.'],
      exampleGiven: ['Cateto a = 6', 'Cateto b = 8', 'Ipotenusa c = 10'],
      exampleResult: 'Per un triangolo rettangolo 6-8-10, l’inraggio è 2 units.',
      resultMeaning: ['Il risultato r è il raggio del cerchio inscritto nel triangolo.'],
      radiusRelation: ['Nel calcolatore principale, lo stesso calcolo appare come Inraggio e Relazione del raggio r.'],
      useCases: ['Trovare il raggio dell’incirconferenza.', 'Controllare problemi con tre lati dati.', 'Confrontare r con R.'],
      commonMistakes: ['Usare c come cateto.', 'Dimenticare la divisione per 2.', 'Inserire lati non validi.'],
      faqs: [
        {
          question: 'Qual è la formula dell’inraggio?',
          answer: 'La formula è r = (a + b − c) / 2, dove a e b sono i cateti e c è l’ipotenusa.'
        },
        {
          question: 'Che cosa indica r?',
          answer: 'r è il raggio del cerchio che tocca i tre lati all’interno del triangolo.'
        },
        {
          question: 'Perché c deve essere l’ipotenusa?',
          answer: 'Perché la formula vale quando c è il lato opposto all’angolo retto.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'calcolatrice del circonraggio del triangolo rettangolo',
      secondaryKeywords: ['circonraggio triangolo rettangolo', 'raggio della circonferenza circoscritta', 'calcolatrice R = c / 2'],
      h1: 'Calcolatrice del circonraggio del triangolo rettangolo',
      metaTitle: 'Calcolatrice del circonraggio del triangolo rettangolo | R = c / 2',
      metaDescription:
        'Usa questa calcolatrice per trovare il circonraggio R dall’ipotenusa c.',
      modes: ['Circonraggio', 'Relazione del raggio R'],
      intro: [
        'Usa questa pagina quando conosci l’ipotenusa c e vuoi trovare il circonraggio R.',
        'In un triangolo rettangolo, l’ipotenusa è il diametro della circonferenza circoscritta.'
      ],
      calculatorNote:
        'Inserisci un valore positivo per l’ipotenusa c. Questa calcolatrice assume che c sia il lato opposto all’angolo retto.',
      formulaParagraphs: ['La circonferenza circoscritta ha diametro c, quindi il raggio è c diviso 2.'],
      formulaPoints: ['Parti dall’ipotenusa c.', 'Dividi c per 2.', 'Il risultato è R.'],
      diagramParagraphs: ['Il diagramma mostra la circonferenza circoscritta attorno al triangolo rettangolo.'],
      diagramNotes: ['Il circocentro è il punto medio dell’ipotenusa.', 'R è il circonraggio.'],
      howToUse: ['Inserisci c.', 'Controlla che c sia maggiore di 0.', 'Calcola R.', 'Leggi il risultato come R.'],
      exampleGiven: ['Ipotenusa c = 10'],
      exampleResult: 'Per ipotenusa 10, il circonraggio è 5 units.',
      resultMeaning: ['Il risultato R è il raggio del cerchio che passa per i tre vertici.'],
      radiusRelation: ['Nel calcolatore principale, lo stesso calcolo appare come Circonraggio e Relazione del raggio R.'],
      useCases: ['Trovare il raggio del cerchio circoscritto.', 'Usare una ipotenusa nota.', 'Confrontare R con r.'],
      commonMistakes: ['Inserire un cateto invece di c.', 'Dimenticare che R è metà di c.', 'Confondere R con r.'],
      faqs: [
        {
          question: 'Qual è la formula del circonraggio?',
          answer: 'La formula è R = c / 2, dove c è l’ipotenusa.'
        },
        {
          question: 'Che cosa indica R?',
          answer: 'R è il raggio del cerchio che passa per tutti e tre i vertici.'
        },
        {
          question: 'Servono a o b?',
          answer: 'No. Se c è nota, basta usare R = c / 2.'
        }
      ]
    }
  }),
  de: makeBundle({
    ui: {
      badge: 'Radiusrechner',
      parentBreadcrumbLabel: 'Radiusrechner für rechtwinklige Dreiecke',
      openTool: 'Tool öffnen',
      sectionHeadings: {
        formula: 'Formel',
        diagram: 'Dreiecksdiagramm',
        howToUse: 'So verwendest du diesen Rechner',
        example: 'Schritt-für-Schritt-Beispiel',
        given: 'Gegeben:',
        resultMeaning: 'Was das Ergebnis bedeutet',
        radiusRelation: 'Radiusbeziehung',
        useCases: 'Wann dieser Rechner nützlich ist',
        commonMistakes: 'Häufige Fehler',
        relatedCalculators: 'Verwandte Rechner',
        faqs: 'FAQs'
      },
      diagram: {
        inradiusTitle: 'Diagramm zum Inkreisradius eines rechtwinkligen Dreiecks',
        inradiusDescription:
          'Rechtwinkliges Dreieck mit Kathete a, Kathete b, Hypotenuse c, Inkreis, Inkreisradius r und rechtem Winkel.',
        circumradiusTitle: 'Diagramm zum Umkreisradius eines rechtwinkligen Dreiecks',
        circumradiusDescription:
          'Rechtwinkliges Dreieck mit Hypotenuse c, Umkreis, Umkreisradius R, rechtem Winkel und Mittelpunkt der Hypotenuse als Umkreismittelpunkt.',
        legA: 'Kathete a',
        legB: 'Kathete b',
        hypotenuseC: 'Hypotenuse c',
        inradiusR: 'Inkreisradius r',
        incircle: 'Inkreis',
        circumradiusR: 'Umkreisradius R',
        circumcenter: 'Umkreismittelpunkt',
        circumcircle: 'Umkreis',
        rightAngle: 'rechter Winkel'
      },
      fields: {
        legA: 'Kathete a',
        legB: 'Kathete b',
        hypotenuseC: 'Hypotenuse c',
        inradiusR: 'Inkreisradius r',
        circumradiusR: 'Umkreisradius R'
      },
      calculatorHeadings: {
        inradius: 'Inkreisradius r berechnen',
        circumradius: 'Umkreisradius R berechnen'
      },
      messages: {
        positive: 'Bitte positive Werte eingeben.',
        invalid: 'Bitte positive Werte eingeben.',
        hypotenuseKnownLeg: 'Die Hypotenuse c sollte die längste Seite sein.',
        hypotenuseLongest: 'Die Hypotenuse c sollte die längste Seite sein.',
        invalidTriangle: 'Diese Seitenlängen bilden möglicherweise kein gültiges rechtwinkliges Dreieck.'
      },
      runtime: {
        calculationComplete: 'Berechnung abgeschlossen.',
        unableToCalculate: 'Berechnung nicht möglich.',
        fixErrors: 'Bitte korrigiere die Fehler in den Feldern oben.',
        errorPrefix: 'Fehler',
        stepLabels: {
          formula: 'Formel',
          substitution: 'Einsetzen',
          answer: 'Antwort',
          explanation: 'Erklärung',
          detail: 'Detail'
        }
      },
      stepDescriptions: {
        inradius: 'Bestimme den Radius des größten Kreises, der in das Dreieck passt.',
        circumradius: 'Der Umkreisradius ist die Hälfte der Hypotenuse.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'Radiusrechner für rechtwinklige Dreiecke',
        description: 'Nutze den Hauptrechner für Inkreisradius, Umkreisradius und Radiusbeziehungen.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'Inkreisradius-Rechner für rechtwinklige Dreiecke',
        description: 'Berechne r aus beiden Katheten und der Hypotenuse.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'Umkreisradius-Rechner für rechtwinklige Dreiecke',
        description: 'Berechne R aus der Hypotenuse c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'Flächenrechner für rechtwinklige Dreiecke',
        description: 'Berechne die Fläche aus Seitenlängen des rechtwinkligen Dreiecks.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'Halbumfang-Rechner für rechtwinklige Dreiecke',
        description: 'Bestimme den Halbumfang vor Formeln mit s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'Seitenrechner für rechtwinklige Dreiecke',
        description: 'Finde eine fehlende Seite vor der Radiusberechnung.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'Hypotenusenrechner für rechtwinklige Dreiecke',
        description: 'Berechne die Hypotenuse aus beiden Katheten, wenn c noch fehlt.'
      }
    },
    inradius: {
      primaryKeyword: 'Inkreisradius-Rechner für rechtwinklige Dreiecke',
      secondaryKeywords: [
        'Inkreisradius rechtwinkliges Dreieck',
        'Radius des Inkreises',
        'r im rechtwinkligen Dreieck berechnen',
        'r = (a + b − c) / 2 Rechner'
      ],
      h1: 'Inkreisradius-Rechner für rechtwinklige Dreiecke',
      metaTitle: 'Inkreisradius-Rechner für rechtwinklige Dreiecke | r = (a + b − c) / 2',
      metaDescription:
        'Berechne den Inkreisradius r aus Kathete a, Kathete b und Hypotenuse c.',
      modes: ['Inkreisradius', 'Radiusbeziehung r'],
      intro: [
        'Nutze diesen Rechner, wenn Kathete a, Kathete b und Hypotenuse c bekannt sind und du den Inkreisradius r brauchst.',
        'Der Inkreisradius ist der Radius des Kreises, der im rechtwinkligen Dreieck liegt und alle drei Seiten berührt.'
      ],
      calculatorNote:
        'Gib positive Werte für a, b und c ein. Die Hypotenuse c muss die längste Seite sein und die Seiten müssen ein gültiges rechtwinkliges Dreieck bilden.',
      formulaParagraphs: [
        'Im rechtwinkligen Dreieck lässt sich der Inkreisradius direkt aus den beiden Katheten und der Hypotenuse berechnen.',
        'Dabei sind a und b die Katheten, c ist die Hypotenuse und r der Inkreisradius.'
      ],
      formulaPoints: ['Addiere die Katheten: a + b.', 'Subtrahiere die Hypotenuse: a + b − c.', 'Teile durch 2, um r zu erhalten.'],
      diagramParagraphs: [
        'Das Diagramm zeigt den Inkreis im rechtwinkligen Dreieck. Er berührt Kathete a, Kathete b und Hypotenuse c.'
      ],
      diagramNotes: [
        'Der Abschnitt r ist der Inkreisradius.',
        'Das kleine Quadrat markiert den rechten Winkel.',
        'Die Hypotenuse c liegt gegenüber dem rechten Winkel und ist die längste Seite.'
      ],
      howToUse: [
        'Gib die Länge von Kathete a ein.',
        'Gib die Länge von Kathete b ein.',
        'Gib die Länge der Hypotenuse c ein.',
        'Prüfe, dass c die längste Seite ist, und berechne r.'
      ],
      exampleGiven: ['Kathete a = 6', 'Kathete b = 8', 'Hypotenuse c = 10'],
      exampleResult: 'Für ein rechtwinkliges 6-8-10-Dreieck beträgt der Inkreisradius 2 units.',
      resultMeaning: [
        'Das Ergebnis r ist der Radius des Inkreises. Wenn r = 2 ist, berührt ein Kreis mit Radius 2 units alle drei Seiten im Dreieck.'
      ],
      radiusRelation: [
        'Im Hauptrechner für Radien erscheint dieselbe Berechnung als Inkreisradius und Radiusbeziehung r.'
      ],
      useCases: [
        'Den Radius des Inkreises bestimmen.',
        'Aufgaben mit drei gegebenen Seiten prüfen.',
        'Inkreisradius r mit Umkreisradius R vergleichen.'
      ],
      commonMistakes: [
        'c als Kathete statt als Hypotenuse verwenden.',
        'Vergessen, a + b − c durch 2 zu teilen.',
        'Seiten eingeben, die kein rechtwinkliges Dreieck bilden.'
      ],
      faqs: [
        {
          question: 'Wie lautet die Formel für den Inkreisradius?',
          answer: 'Die Formel lautet r = (a + b − c) / 2, wobei a und b Katheten, c die Hypotenuse und r der Inkreisradius ist.'
        },
        {
          question: 'Was bedeutet r?',
          answer: 'r ist der Radius des Kreises, der in das rechtwinklige Dreieck passt und alle drei Seiten berührt.'
        },
        {
          question: 'Warum muss c die Hypotenuse sein?',
          answer: 'Die Formel setzt voraus, dass c dem rechten Winkel gegenüberliegt. Diese Seite ist die Hypotenuse.'
        },
        {
          question: 'Kann ich r nur mit den zwei Katheten finden?',
          answer: 'Ja. Bestimme zuerst c mit dem Satz des Pythagoras und verwende dann r = (a + b − c) / 2.'
        },
        {
          question: 'Ist der Inkreisradius gleich dem Umkreisradius?',
          answer: 'Nein. r gehört zum inneren Kreis, R zum Kreis durch die drei Eckpunkte.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'Umkreisradius-Rechner für rechtwinklige Dreiecke',
      secondaryKeywords: [
        'Umkreisradius rechtwinkliges Dreieck',
        'Radius des Umkreises',
        'R im rechtwinkligen Dreieck berechnen',
        'R = c / 2 Rechner'
      ],
      h1: 'Umkreisradius-Rechner für rechtwinklige Dreiecke',
      metaTitle: 'Umkreisradius-Rechner für rechtwinklige Dreiecke | R = c / 2',
      metaDescription:
        'Berechne den Umkreisradius R eines rechtwinkligen Dreiecks aus der Hypotenuse c.',
      modes: ['Umkreisradius', 'Radiusbeziehung R'],
      intro: [
        'Nutze diesen Rechner, wenn die Hypotenuse c bekannt ist und du den Umkreisradius R brauchst.',
        'Im rechtwinkligen Dreieck ist die Hypotenuse der Durchmesser des Umkreises, daher ist R die Hälfte von c.'
      ],
      calculatorNote:
        'Gib einen positiven Wert für die Hypotenuse c ein. Dieser Rechner setzt voraus, dass c dem rechten Winkel gegenüberliegt.',
      formulaParagraphs: [
        'Bei jedem rechtwinkligen Dreieck ist die Hypotenuse der Durchmesser des Umkreises.',
        'Hier ist c die Hypotenuse und R der Umkreisradius.'
      ],
      formulaPoints: ['Beginne mit Hypotenuse c.', 'Teile c durch 2.', 'Das Ergebnis ist der Umkreisradius R.'],
      diagramParagraphs: [
        'Das Diagramm zeigt den Umkreis um das rechtwinklige Dreieck. Die Hypotenuse c wirkt als Durchmesser.'
      ],
      diagramNotes: [
        'Der Umkreismittelpunkt liegt in der Mitte der Hypotenuse.',
        'Der Abschnitt R ist der Umkreisradius.',
        'Der Kreis geht durch alle drei Eckpunkte.'
      ],
      howToUse: [
        'Gib die Länge der Hypotenuse c ein.',
        'Stelle sicher, dass c größer als 0 ist.',
        'Berechne den Umkreisradius R.',
        'Lies das Ergebnis als R.'
      ],
      exampleGiven: ['Hypotenuse c = 10'],
      exampleResult: 'Für ein rechtwinkliges Dreieck mit Hypotenuse 10 beträgt der Umkreisradius 5 units.',
      resultMeaning: [
        'Das Ergebnis R ist der Radius des Umkreises. Wenn R = 5 ist, hat der Kreis durch die drei Eckpunkte den Radius 5 units.'
      ],
      radiusRelation: [
        'Im Hauptrechner für Radien erscheint dieselbe Berechnung als Umkreisradius und Radiusbeziehung R.'
      ],
      useCases: [
        'Den Radius des Kreises durch drei Eckpunkte bestimmen.',
        'Mit Umkreisgeometrie und bekannter Hypotenuse arbeiten.',
        'Umkreisradius R mit Inkreisradius r vergleichen.'
      ],
      commonMistakes: [
        'Eine Kathete statt der Hypotenuse c eingeben.',
        'Vergessen, dass R die Hälfte von c ist.',
        'Umkreisradius R mit Inkreisradius r verwechseln.'
      ],
      faqs: [
        {
          question: 'Wie lautet die Formel für den Umkreisradius?',
          answer: 'Die Formel lautet R = c / 2, wobei c die Hypotenuse und R der Umkreisradius ist.'
        },
        {
          question: 'Was bedeutet R?',
          answer: 'R ist der Radius des Kreises, der durch alle drei Eckpunkte des rechtwinkligen Dreiecks geht.'
        },
        {
          question: 'Warum liegt der Mittelpunkt auf der Hypotenuse?',
          answer: 'Weil die Hypotenuse im rechtwinkligen Dreieck der Durchmesser des Umkreises ist.'
        },
        {
          question: 'Brauche ich a oder b, um R zu finden?',
          answer: 'Nein. Wenn c bekannt ist, gilt direkt R = c / 2.'
        },
        {
          question: 'Ist der Umkreisradius der Durchmesser?',
          answer: 'Nein. Die Hypotenuse c ist der Durchmesser, R ist die Hälfte davon.'
        }
      ]
    }
  }),
  fr: makeBundle({
    ui: {
      badge: 'Calculateur de rayon',
      parentBreadcrumbLabel: 'Calculateur de rayons de triangle rectangle',
      openTool: 'Ouvrir l’outil',
      sectionHeadings: {
        formula: 'Formule',
        diagram: 'Schéma du triangle',
        howToUse: 'Comment utiliser ce calculateur',
        example: 'Exemple étape par étape',
        given: 'Données :',
        resultMeaning: 'Ce que signifie le résultat',
        radiusRelation: 'Relation de rayon',
        useCases: 'Quand utiliser ce calculateur',
        commonMistakes: 'Erreurs courantes',
        relatedCalculators: 'Calculateurs associés',
        faqs: 'FAQ'
      },
      diagram: {
        inradiusTitle: 'Schéma de l’inrayon d’un triangle rectangle',
        inradiusDescription:
          'Triangle rectangle avec côté a, côté b, hypoténuse c, cercle inscrit, inrayon r et angle droit.',
        circumradiusTitle: 'Schéma du rayon circonscrit d’un triangle rectangle',
        circumradiusDescription:
          'Triangle rectangle avec hypoténuse c, cercle circonscrit, rayon R, angle droit et centre au milieu de l’hypoténuse.',
        legA: 'côté a',
        legB: 'côté b',
        hypotenuseC: 'hypoténuse c',
        inradiusR: 'inrayon r',
        incircle: 'cercle inscrit',
        circumradiusR: 'rayon circonscrit R',
        circumcenter: 'centre',
        circumcircle: 'cercle circonscrit',
        rightAngle: 'angle droit'
      },
      fields: {
        legA: 'Côté a',
        legB: 'Côté b',
        hypotenuseC: 'Hypoténuse c',
        inradiusR: 'Inrayon r',
        circumradiusR: 'Rayon circonscrit R'
      },
      calculatorHeadings: {
        inradius: 'Calculer l’inrayon r',
        circumradius: 'Calculer le rayon circonscrit R'
      },
      messages: {
        positive: 'Veuillez saisir des valeurs positives.',
        invalid: 'Veuillez saisir des valeurs positives.',
        hypotenuseKnownLeg: 'L’hypoténuse c doit être le côté le plus long.',
        hypotenuseLongest: 'L’hypoténuse c doit être le côté le plus long.',
        invalidTriangle: 'Ces longueurs peuvent ne pas former un triangle rectangle valide.'
      },
      runtime: {
        calculationComplete: 'Calcul terminé.',
        unableToCalculate: 'Impossible de calculer.',
        fixErrors: 'Corrigez les erreurs dans les champs ci-dessus.',
        errorPrefix: 'Erreur',
        stepLabels: {
          formula: 'Formule',
          substitution: 'Substitution',
          answer: 'Réponse',
          explanation: 'Explication',
          detail: 'Détail'
        }
      },
      stepDescriptions: {
        inradius: 'Trouvez le rayon du plus grand cercle inscrit dans le triangle.',
        circumradius: 'Le rayon circonscrit est la moitié de l’hypoténuse.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'calculateur de rayons de triangle rectangle',
        description: 'Utilisez le calculateur principal pour l’inrayon, le rayon circonscrit et les relations de rayon.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'calculateur d’inrayon de triangle rectangle',
        description: 'Trouvez r à partir des deux côtés et de l’hypoténuse.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'calculateur de rayon circonscrit de triangle rectangle',
        description: 'Trouvez R à partir de l’hypoténuse c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'calculateur d’aire de triangle rectangle',
        description: 'Calculez l’aire à partir des longueurs du triangle rectangle.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'calculateur de demi-périmètre de triangle rectangle',
        description: 'Trouvez le demi-périmètre avant les formules qui utilisent s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'calculateur de côté de triangle rectangle',
        description: 'Trouvez un côté manquant avant de calculer un rayon.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'calculateur d’hypoténuse de triangle rectangle',
        description: 'Trouvez l’hypoténuse avec les deux côtés lorsque c n’est pas encore connu.'
      }
    },
    inradius: {
      primaryKeyword: 'calculateur d’inrayon de triangle rectangle',
      secondaryKeywords: [
        'inrayon de triangle rectangle',
        'rayon du cercle inscrit',
        'trouver r dans un triangle rectangle',
        'calculateur r = (a + b − c) / 2'
      ],
      h1: 'Calculateur d’inrayon de triangle rectangle',
      metaTitle: 'Calculateur d’inrayon de triangle rectangle | r = (a + b − c) / 2',
      metaDescription:
        'Utilisez ce calculateur d’inrayon de triangle rectangle pour trouver r avec le côté a, le côté b et l’hypoténuse c.',
      modes: ['Inrayon', 'Relation de rayon r'],
      intro: [
        'Utilisez ce calculateur lorsque vous connaissez a, b et l’hypoténuse c, et que vous voulez trouver l’inrayon r.',
        'L’inrayon est le rayon du cercle inscrit qui touche les trois côtés du triangle rectangle.'
      ],
      calculatorNote:
        'Saisissez des valeurs positives pour a, b et c. L’hypoténuse c doit être le côté le plus long et les trois longueurs doivent former un triangle rectangle valide.',
      formulaParagraphs: [
        'Dans un triangle rectangle, l’inrayon se calcule directement à partir des deux côtés et de l’hypoténuse.',
        'Ici, a et b sont les côtés, c est l’hypoténuse et r est l’inrayon.'
      ],
      formulaPoints: ['Additionnez les côtés: a + b.', 'Soustrayez l’hypoténuse: a + b − c.', 'Divisez par 2 pour obtenir r.'],
      diagramParagraphs: [
        'Le schéma montre le cercle inscrit dans le triangle rectangle. Il touche le côté a, le côté b et l’hypoténuse c.'
      ],
      diagramNotes: [
        'Le segment r est l’inrayon.',
        'Le petit carré marque l’angle droit.',
        'L’hypoténuse c est opposée à l’angle droit et c’est le côté le plus long.'
      ],
      howToUse: [
        'Saisissez la longueur du côté a.',
        'Saisissez la longueur du côté b.',
        'Saisissez la longueur de l’hypoténuse c.',
        'Vérifiez que c est le côté le plus long, puis calculez r.'
      ],
      exampleGiven: ['Côté a = 6', 'Côté b = 8', 'Hypoténuse c = 10'],
      exampleResult: 'Pour un triangle rectangle 6-8-10, l’inrayon est 2 units.',
      resultMeaning: [
        'Le résultat r est le rayon du cercle inscrit. Si r = 2, un cercle de rayon 2 units peut toucher les trois côtés à l’intérieur du triangle.'
      ],
      radiusRelation: [
        'Dans le calculateur principal de rayons, ce calcul apparaît dans les modes Inrayon et Relation de rayon r.'
      ],
      useCases: [
        'Trouver le rayon du cercle inscrit.',
        'Vérifier un exercice avec les trois côtés donnés.',
        'Comparer l’inrayon r avec le rayon circonscrit R.'
      ],
      commonMistakes: [
        'Utiliser c comme côté au lieu de l’hypoténuse.',
        'Oublier de diviser a + b − c par 2.',
        'Saisir des longueurs qui ne forment pas un triangle rectangle valide.'
      ],
      faqs: [
        {
          question: 'Quelle est la formule de l’inrayon d’un triangle rectangle ?',
          answer: 'La formule est r = (a + b − c) / 2, où a et b sont les côtés, c est l’hypoténuse et r est l’inrayon.'
        },
        {
          question: 'Que signifie le résultat r ?',
          answer: 'C’est le rayon du cercle qui tient dans le triangle rectangle et touche les trois côtés.'
        },
        {
          question: 'Pourquoi c doit-il être l’hypoténuse ?',
          answer: 'La formule suppose que c est le côté opposé à l’angle droit; dans un triangle rectangle, c’est l’hypoténuse.'
        },
        {
          question: 'Puis-je trouver r avec seulement les deux côtés ?',
          answer: 'Oui. Trouvez d’abord c avec le théorème de Pythagore, puis utilisez r = (a + b − c) / 2.'
        },
        {
          question: 'L’inrayon est-il identique au rayon circonscrit ?',
          answer: 'Non. r appartient au cercle intérieur, tandis que R appartient au cercle passant par les trois sommets.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'calculateur de rayon circonscrit de triangle rectangle',
      secondaryKeywords: [
        'rayon circonscrit de triangle rectangle',
        'rayon du cercle circonscrit',
        'trouver R dans un triangle rectangle',
        'calculateur R = c / 2'
      ],
      h1: 'Calculateur de rayon circonscrit de triangle rectangle',
      metaTitle: 'Calculateur de rayon circonscrit de triangle rectangle | R = c / 2',
      metaDescription:
        'Utilisez ce calculateur de rayon circonscrit de triangle rectangle pour trouver R à partir de l’hypoténuse c.',
      modes: ['Rayon circonscrit', 'Relation de rayon R'],
      intro: [
        'Utilisez ce calculateur lorsque vous connaissez l’hypoténuse c et que vous voulez trouver R.',
        'Dans un triangle rectangle, l’hypoténuse est le diamètre du cercle circonscrit; R vaut donc la moitié de c.'
      ],
      calculatorNote:
        'Saisissez une valeur positive pour l’hypoténuse c. Ce calculateur suppose que c est le côté opposé à l’angle droit.',
      formulaParagraphs: [
        'Dans tout triangle rectangle, l’hypoténuse est le diamètre du cercle circonscrit.',
        'Ici, c est l’hypoténuse et R est le rayon circonscrit.'
      ],
      formulaPoints: ['Commencez avec l’hypoténuse c.', 'Divisez c par 2.', 'Le résultat est le rayon circonscrit R.'],
      diagramParagraphs: [
        'Le schéma montre le cercle circonscrit autour du triangle rectangle. L’hypoténuse c sert de diamètre.'
      ],
      diagramNotes: [
        'Le centre est le milieu de l’hypoténuse.',
        'Le segment R est le rayon circonscrit.',
        'Le cercle passe par les trois sommets.'
      ],
      howToUse: [
        'Saisissez la longueur de l’hypoténuse c.',
        'Assurez-vous que c est supérieur à 0.',
        'Calculez le rayon circonscrit R.',
        'Lisez le résultat comme R.'
      ],
      exampleGiven: ['Hypoténuse c = 10'],
      exampleResult: 'Pour un triangle rectangle avec hypoténuse 10, le rayon circonscrit est 5 units.',
      resultMeaning: [
        'Le résultat R est le rayon du cercle circonscrit. Si R = 5, le cercle passant par les trois sommets a un rayon de 5 units.'
      ],
      radiusRelation: [
        'Dans le calculateur principal de rayons, ce calcul apparaît dans les modes Rayon circonscrit et Relation de rayon R.'
      ],
      useCases: [
        'Trouver le rayon du cercle passant par les trois sommets.',
        'Travailler avec un cercle circonscrit lorsque l’hypoténuse est connue.',
        'Comparer le rayon circonscrit R avec l’inrayon r.'
      ],
      commonMistakes: [
        'Saisir un côté au lieu de l’hypoténuse c.',
        'Oublier que R est la moitié de c.',
        'Confondre le rayon circonscrit R avec l’inrayon r.'
      ],
      faqs: [
        {
          question: 'Quelle est la formule du rayon circonscrit ?',
          answer: 'La formule est R = c / 2, où c est l’hypoténuse et R est le rayon circonscrit.'
        },
        {
          question: 'Que signifie le résultat R ?',
          answer: 'C’est le rayon du cercle qui passe par les trois sommets du triangle rectangle.'
        },
        {
          question: 'Pourquoi le centre est-il au milieu de l’hypoténuse ?',
          answer: 'Parce que, dans un triangle rectangle, l’hypoténuse est le diamètre du cercle circonscrit.'
        },
        {
          question: 'Faut-il connaître a ou b pour trouver R ?',
          answer: 'Non. Si l’hypoténuse c est connue, R = c / 2.'
        },
        {
          question: 'Le rayon circonscrit est-il le diamètre ?',
          answer: 'Non. L’hypoténuse c est le diamètre et R en est la moitié.'
        }
      ]
    }
  }),
  ru: makeBundle({
    ui: {
      badge: 'Калькулятор радиуса',
      parentBreadcrumbLabel: 'Калькулятор радиусов прямоугольного треугольника',
      openTool: 'Открыть инструмент',
      sectionHeadings: {
        formula: 'Формула',
        diagram: 'Схема треугольника',
        howToUse: 'Как пользоваться калькулятором',
        example: 'Пошаговый пример',
        given: 'Дано:',
        resultMeaning: 'Что означает результат',
        radiusRelation: 'Связь радиуса',
        useCases: 'Когда использовать этот калькулятор',
        commonMistakes: 'Частые ошибки',
        relatedCalculators: 'Связанные калькуляторы',
        faqs: 'Вопросы и ответы'
      },
      diagram: {
        inradiusTitle: 'Схема вписанного радиуса прямоугольного треугольника',
        inradiusDescription:
          'Прямоугольный треугольник с катетом a, катетом b, гипотенузой c, вписанной окружностью, радиусом r и прямым углом.',
        circumradiusTitle: 'Схема описанного радиуса прямоугольного треугольника',
        circumradiusDescription:
          'Прямоугольный треугольник с гипотенузой c, описанной окружностью, радиусом R, прямым углом и центром в середине гипотенузы.',
        legA: 'катет a',
        legB: 'катет b',
        hypotenuseC: 'гипотенуза c',
        inradiusR: 'вписанный радиус r',
        incircle: 'вписанная окружность',
        circumradiusR: 'описанный радиус R',
        circumcenter: 'центр окружности',
        circumcircle: 'описанная окружность',
        rightAngle: 'прямой угол'
      },
      fields: {
        legA: 'Катет a',
        legB: 'Катет b',
        hypotenuseC: 'Гипотенуза c',
        inradiusR: 'Вписанный радиус r',
        circumradiusR: 'Описанный радиус R'
      },
      calculatorHeadings: {
        inradius: 'Рассчитать вписанный радиус r',
        circumradius: 'Рассчитать описанный радиус R'
      },
      messages: {
        positive: 'Введите положительные значения.',
        invalid: 'Введите положительные значения.',
        hypotenuseKnownLeg: 'Гипотенуза c должна быть самой длинной стороной.',
        hypotenuseLongest: 'Гипотенуза c должна быть самой длинной стороной.',
        invalidTriangle: 'Эти длины могут не образовывать правильный прямоугольный треугольник.'
      },
      runtime: {
        calculationComplete: 'Расчет завершен.',
        unableToCalculate: 'Не удалось рассчитать.',
        fixErrors: 'Исправьте ошибки в полях выше.',
        errorPrefix: 'Ошибка',
        stepLabels: {
          formula: 'Формула',
          substitution: 'Подстановка',
          answer: 'Ответ',
          explanation: 'Пояснение',
          detail: 'Деталь'
        }
      },
      stepDescriptions: {
        inradius: 'Найдите радиус наибольшей окружности, которая помещается внутри треугольника.',
        circumradius: 'Описанный радиус равен половине гипотенузы.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'калькулятор радиусов прямоугольного треугольника',
        description: 'Основной калькулятор для вписанного радиуса, описанного радиуса и связей радиусов.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'калькулятор вписанного радиуса прямоугольного треугольника',
        description: 'Найдите r по двум катетам и гипотенузе.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'калькулятор описанного радиуса прямоугольного треугольника',
        description: 'Найдите R по гипотенузе c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'калькулятор площади прямоугольного треугольника',
        description: 'Рассчитайте площадь по сторонам прямоугольного треугольника.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'калькулятор полупериметра прямоугольного треугольника',
        description: 'Найдите полупериметр перед формулами с s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'калькулятор сторон прямоугольного треугольника',
        description: 'Найдите недостающую сторону перед расчетом радиуса.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'калькулятор гипотенузы прямоугольного треугольника',
        description: 'Найдите гипотенузу по двум катетам, если c еще неизвестна.'
      }
    },
    inradius: {
      primaryKeyword: 'калькулятор вписанного радиуса прямоугольного треугольника',
      secondaryKeywords: [
        'вписанный радиус прямоугольного треугольника',
        'радиус вписанной окружности прямоугольного треугольника',
        'найти r в прямоугольном треугольнике',
        'калькулятор r = (a + b − c) / 2'
      ],
      h1: 'Калькулятор вписанного радиуса прямоугольного треугольника',
      metaTitle: 'Калькулятор вписанного радиуса прямоугольного треугольника | r = (a + b − c) / 2',
      metaDescription:
        'Используйте этот калькулятор, чтобы найти вписанный радиус r по катету a, катету b и гипотенузе c.',
      modes: ['Вписанный радиус', 'Связь радиуса r'],
      intro: [
        'Используйте этот калькулятор, когда известны катет a, катет b и гипотенуза c, а нужно найти r.',
        'Вписанный радиус — это радиус окружности внутри прямоугольного треугольника, касающейся всех трех сторон.'
      ],
      calculatorNote:
        'Введите положительные значения a, b и c. Гипотенуза c должна быть самой длинной стороной, а длины должны образовывать прямоугольный треугольник.',
      formulaParagraphs: [
        'В прямоугольном треугольнике вписанный радиус можно найти прямо по двум катетам и гипотенузе.',
        'Здесь a и b — катеты, c — гипотенуза, а r — вписанный радиус.'
      ],
      formulaPoints: ['Сложите катеты: a + b.', 'Вычтите гипотенузу: a + b − c.', 'Разделите результат на 2, чтобы получить r.'],
      diagramParagraphs: [
        'На схеме показана вписанная окружность внутри прямоугольного треугольника. Она касается катета a, катета b и гипотенузы c.'
      ],
      diagramNotes: [
        'Отрезок r — это вписанный радиус.',
        'Малый квадрат отмечает прямой угол.',
        'Гипотенуза c лежит напротив прямого угла и является самой длинной стороной.'
      ],
      howToUse: [
        'Введите длину катета a.',
        'Введите длину катета b.',
        'Введите длину гипотенузы c.',
        'Проверьте, что c — самая длинная сторона, затем рассчитайте r.'
      ],
      exampleGiven: ['Катет a = 6', 'Катет b = 8', 'Гипотенуза c = 10'],
      exampleResult: 'Для прямоугольного треугольника 6-8-10 вписанный радиус равен 2 units.',
      resultMeaning: [
        'Результат r — радиус вписанной окружности. Если r = 2, окружность радиуса 2 units касается всех трех сторон внутри треугольника.'
      ],
      radiusRelation: [
        'В основном калькуляторе радиусов этот расчет находится в режимах Вписанный радиус и Связь радиуса r.'
      ],
      useCases: [
        'Найти радиус вписанной окружности.',
        'Проверить задачи, где даны все три стороны.',
        'Сравнить вписанный радиус r с описанным радиусом R.'
      ],
      commonMistakes: [
        'Принимать c за катет вместо гипотенузы.',
        'Забывать делить a + b − c на 2.',
        'Вводить стороны, которые не образуют прямоугольный треугольник.'
      ],
      faqs: [
        {
          question: 'Какая формула для вписанного радиуса прямоугольного треугольника?',
          answer: 'Формула: r = (a + b − c) / 2, где a и b — катеты, c — гипотенуза, а r — вписанный радиус.'
        },
        {
          question: 'Что означает результат r?',
          answer: 'Это радиус окружности, которая помещается внутри прямоугольного треугольника и касается всех трех сторон.'
        },
        {
          question: 'Почему c должна быть гипотенузой?',
          answer: 'Формула предполагает, что c находится напротив прямого угла. В прямоугольном треугольнике это гипотенуза.'
        },
        {
          question: 'Можно ли найти r, если известны только два катета?',
          answer: 'Да. Сначала найдите гипотенузу c по теореме Пифагора, затем используйте r = (a + b − c) / 2.'
        },
        {
          question: 'Вписанный радиус равен описанному?',
          answer: 'Нет. r относится к внутренней окружности, а R — к окружности через три вершины.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'калькулятор описанного радиуса прямоугольного треугольника',
      secondaryKeywords: [
        'описанный радиус прямоугольного треугольника',
        'радиус описанной окружности прямоугольного треугольника',
        'найти R в прямоугольном треугольнике',
        'калькулятор R = c / 2'
      ],
      h1: 'Калькулятор описанного радиуса прямоугольного треугольника',
      metaTitle: 'Калькулятор описанного радиуса прямоугольного треугольника | R = c / 2',
      metaDescription:
        'Используйте этот калькулятор, чтобы найти описанный радиус R по гипотенузе c.',
      modes: ['Описанный радиус', 'Связь радиуса R'],
      intro: [
        'Используйте этот калькулятор, когда известна гипотенуза c и нужно найти описанный радиус R.',
        'В прямоугольном треугольнике гипотенуза является диаметром описанной окружности, поэтому R равен половине c.'
      ],
      calculatorNote:
        'Введите положительное значение гипотенузы c. Калькулятор предполагает, что c — сторона напротив прямого угла.',
      formulaParagraphs: [
        'В каждом прямоугольном треугольнике гипотенуза является диаметром описанной окружности.',
        'Здесь c — гипотенуза, а R — описанный радиус.'
      ],
      formulaPoints: ['Начните с гипотенузы c.', 'Разделите c на 2.', 'Результат — описанный радиус R.'],
      diagramParagraphs: [
        'На схеме показана описанная окружность вокруг прямоугольного треугольника. Гипотенуза c играет роль диаметра.'
      ],
      diagramNotes: [
        'Центр окружности — середина гипотенузы.',
        'Отрезок R — описанный радиус.',
        'Окружность проходит через все три вершины.'
      ],
      howToUse: [
        'Введите длину гипотенузы c.',
        'Убедитесь, что c больше 0.',
        'Рассчитайте описанный радиус R.',
        'Прочитайте результат как R.'
      ],
      exampleGiven: ['Гипотенуза c = 10'],
      exampleResult: 'Для прямоугольного треугольника с гипотенузой 10 описанный радиус равен 5 units.',
      resultMeaning: [
        'Результат R — радиус описанной окружности. Если R = 5, окружность через три вершины имеет радиус 5 units.'
      ],
      radiusRelation: [
        'В основном калькуляторе радиусов этот расчет находится в режимах Описанный радиус и Связь радиуса R.'
      ],
      useCases: [
        'Найти радиус окружности через три вершины.',
        'Работать с описанной окружностью по известной гипотенузе.',
        'Сравнить описанный радиус R с вписанным радиусом r.'
      ],
      commonMistakes: [
        'Вводить катет вместо гипотенузы c.',
        'Забывать, что R — половина c.',
        'Путать описанный радиус R с вписанным радиусом r.'
      ],
      faqs: [
        {
          question: 'Какая формула для описанного радиуса прямоугольного треугольника?',
          answer: 'Формула: R = c / 2, где c — гипотенуза, а R — описанный радиус.'
        },
        {
          question: 'Что означает результат R?',
          answer: 'Это радиус окружности, проходящей через все три вершины прямоугольного треугольника.'
        },
        {
          question: 'Почему центр окружности лежит в середине гипотенузы?',
          answer: 'Потому что в прямоугольном треугольнике гипотенуза является диаметром описанной окружности.'
        },
        {
          question: 'Нужны ли катеты a или b для R?',
          answer: 'Нет. Если гипотенуза c уже известна, R = c / 2.'
        },
        {
          question: 'Описанный радиус — это диаметр?',
          answer: 'Нет. Гипотенуза c — диаметр, а R равен половине этого диаметра.'
        }
      ]
    }
  }),
  es: makeBundle({
    ui: {
      badge: 'Calculadora de radio',
      parentBreadcrumbLabel: 'Calculadora de radios de triángulo rectángulo',
      openTool: 'Abrir herramienta',
      sectionHeadings: {
        formula: 'Fórmula',
        diagram: 'Diagrama del triángulo',
        howToUse: 'Cómo usar esta calculadora',
        example: 'Ejemplo paso a paso',
        given: 'Datos:',
        resultMeaning: 'Qué significa el resultado',
        radiusRelation: 'Relación del radio',
        useCases: 'Cuándo usar esta calculadora',
        commonMistakes: 'Errores comunes',
        relatedCalculators: 'Calculadoras relacionadas',
        faqs: 'Preguntas frecuentes'
      },
      diagram: {
        inradiusTitle: 'Diagrama del inradio de un triángulo rectángulo',
        inradiusDescription:
          'Un triángulo rectángulo con cateto a, cateto b, hipotenusa c, incírculo, inradio r y ángulo recto.',
        circumradiusTitle: 'Diagrama del circunradio de un triángulo rectángulo',
        circumradiusDescription:
          'Un triángulo rectángulo con hipotenusa c, circuncírculo, circunradio R, ángulo recto y circuncentro en el punto medio de la hipotenusa.',
        legA: 'cateto a',
        legB: 'cateto b',
        hypotenuseC: 'hipotenusa c',
        inradiusR: 'inradio r',
        incircle: 'incírculo',
        circumradiusR: 'circunradio R',
        circumcenter: 'circuncentro',
        circumcircle: 'circuncírculo',
        rightAngle: 'ángulo recto'
      },
      fields: {
        legA: 'Cateto a',
        legB: 'Cateto b',
        hypotenuseC: 'Hipotenusa c',
        inradiusR: 'Inradio r',
        circumradiusR: 'Circunradio R'
      },
      calculatorHeadings: {
        inradius: 'Calcular inradio r',
        circumradius: 'Calcular circunradio R'
      },
      messages: {
        positive: 'Ingrese valores positivos.',
        invalid: 'Ingrese valores positivos.',
        hypotenuseKnownLeg: 'La hipotenusa c debe ser el lado más largo.',
        hypotenuseLongest: 'La hipotenusa c debe ser el lado más largo.',
        invalidTriangle: 'Estas longitudes quizá no formen un triángulo rectángulo válido.'
      },
      runtime: {
        calculationComplete: 'Cálculo completo.',
        unableToCalculate: 'No se puede calcular.',
        fixErrors: 'Corrija los errores de los campos anteriores.',
        errorPrefix: 'Error',
        stepLabels: {
          formula: 'Fórmula',
          substitution: 'Sustitución',
          answer: 'Respuesta',
          explanation: 'Explicación',
          detail: 'Detalle'
        }
      },
      stepDescriptions: {
        inradius: 'Encuentra el radio del círculo más grande que cabe dentro del triángulo.',
        circumradius: 'El circunradio es simplemente la mitad de la hipotenusa.'
      }
    },
    links: {
      radius: {
        href: '/right-triangle-radius-calculator/',
        label: 'calculadora de radios de triángulo rectángulo',
        description: 'Use la calculadora principal para inradio, circunradio y relaciones de radio.'
      },
      inradius: {
        href: '/right-triangle-inradius-calculator/',
        label: 'calculadora de inradio de triángulo rectángulo',
        description: 'Encuentre el inradio r a partir de ambos catetos y la hipotenusa.'
      },
      circumradius: {
        href: '/right-triangle-circumradius-calculator/',
        label: 'calculadora de circunradio de triángulo rectángulo',
        description: 'Encuentre el circunradio R a partir de la hipotenusa c.'
      },
      area: {
        href: '/right-triangle-area-calculator/',
        label: 'calculadora de área de triángulo rectángulo',
        description: 'Calcule el área a partir de las longitudes del triángulo rectángulo.'
      },
      semiperimeter: {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'calculadora de semiperímetro de triángulo rectángulo',
        description: 'Encuentre el semiperímetro antes de usar fórmulas con s.'
      },
      side: {
        href: '/right-triangle-side-calculator/',
        label: 'calculadora de lados de triángulo rectángulo',
        description: 'Encuentre un lado faltante antes de calcular el radio.'
      },
      hypotenuse: {
        href: '/pythagorean-theorem-calculator/',
        label: 'calculadora de hipotenusa de triángulo rectángulo',
        description: 'Encuentre la hipotenusa con los dos catetos cuando c aún no se conoce.'
      }
    },
    inradius: {
      primaryKeyword: 'calculadora de inradio de triángulo rectángulo',
      secondaryKeywords: [
        'inradio de triángulo rectángulo',
        'radio del incírculo de triángulo rectángulo',
        'encontrar r en un triángulo rectángulo',
        'calculadora r = (a + b − c) / 2'
      ],
      h1: 'Calculadora de inradio de triángulo rectángulo',
      metaTitle: 'Calculadora de inradio de triángulo rectángulo | r = (a + b − c) / 2',
      metaDescription:
        'Use esta calculadora de inradio de triángulo rectángulo para encontrar r con el cateto a, el cateto b y la hipotenusa c.',
      modes: ['Inradio', 'Relación del radio r'],
      intro: [
        'Use esta calculadora cuando conozca el cateto a, el cateto b y la hipotenusa c, y necesite el inradio r.',
        'El inradio es el radio del incírculo que cabe dentro del triángulo rectángulo y toca sus tres lados.'
      ],
      calculatorNote:
        'Ingrese valores positivos para a, b y c. La hipotenusa c debe ser el lado más largo y las tres longitudes deben formar un triángulo rectángulo válido.',
      formulaParagraphs: [
        'En un triángulo rectángulo, el inradio se obtiene directamente con los dos catetos y la hipotenusa.',
        'Aquí a y b son los catetos, c es la hipotenusa y r es el inradio.'
      ],
      formulaPoints: [
        'Sume los dos catetos: a + b.',
        'Reste la hipotenusa: a + b − c.',
        'Divida el resultado entre 2 para obtener r.'
      ],
      diagramParagraphs: [
        'El diagrama muestra el incírculo dentro del triángulo rectángulo. El círculo toca el cateto a, el cateto b y la hipotenusa c.'
      ],
      diagramNotes: [
        'El segmento marcado r es el inradio.',
        'El cuadrado pequeño marca el ángulo recto.',
        'La hipotenusa c está frente al ángulo recto y es el lado más largo.'
      ],
      howToUse: [
        'Ingrese la longitud del cateto a.',
        'Ingrese la longitud del cateto b.',
        'Ingrese la longitud de la hipotenusa c.',
        'Compruebe que c sea el lado más largo y calcule r.'
      ],
      exampleGiven: ['Cateto a = 6', 'Cateto b = 8', 'Hipotenusa c = 10'],
      exampleResult: 'Para un triángulo rectángulo 6-8-10, el inradio es 2 units.',
      resultMeaning: [
        'El resultado r es el radio del incírculo. Si r = 2, un círculo de radio 2 units puede tocar los tres lados dentro del triángulo.'
      ],
      radiusRelation: [
        'En la calculadora principal de radios, este mismo cálculo aparece como Inradio y Relación del radio r.'
      ],
      useCases: [
        'Encontrar el radio del incírculo en un triángulo rectángulo.',
        'Revisar problemas con los tres lados dados.',
        'Comparar el inradio r con el circunradio R.'
      ],
      commonMistakes: [
        'Usar c como cateto en lugar de hipotenusa.',
        'Olvidar dividir a + b − c entre 2.',
        'Ingresar lados que no forman un triángulo rectángulo válido.'
      ],
      faqs: [
        {
          question: '¿Cuál es la fórmula del inradio de un triángulo rectángulo?',
          answer: 'La fórmula es r = (a + b − c) / 2, donde a y b son los catetos, c es la hipotenusa y r es el inradio.'
        },
        {
          question: '¿Qué significa el resultado del inradio?',
          answer: 'Es el radio del círculo que cabe dentro del triángulo rectángulo y toca los tres lados.'
        },
        {
          question: '¿Por qué c debe ser la hipotenusa?',
          answer: 'La fórmula supone que c está frente al ángulo recto; en un triángulo rectángulo, ese lado es la hipotenusa.'
        },
        {
          question: '¿Puedo encontrar r si solo conozco los dos catetos?',
          answer: 'Sí. Primero calcule la hipotenusa c con el teorema de Pitágoras y luego use r = (a + b − c) / 2.'
        },
        {
          question: '¿El inradio es igual al circunradio?',
          answer: 'No. r pertenece al círculo interior y R al círculo que pasa por los tres vértices.'
        }
      ]
    },
    circumradius: {
      primaryKeyword: 'calculadora de circunradio de triángulo rectángulo',
      secondaryKeywords: [
        'circunradio de triángulo rectángulo',
        'radio del circuncírculo de triángulo rectángulo',
        'encontrar R en un triángulo rectángulo',
        'calculadora R = c / 2'
      ],
      h1: 'Calculadora de circunradio de triángulo rectángulo',
      metaTitle: 'Calculadora de circunradio de triángulo rectángulo | R = c / 2',
      metaDescription:
        'Use esta calculadora de circunradio de triángulo rectángulo para encontrar R a partir de la hipotenusa c.',
      modes: ['Circunradio', 'Relación del radio R'],
      intro: [
        'Use esta calculadora cuando conozca la hipotenusa c y necesite el circunradio R.',
        'En un triángulo rectángulo, la hipotenusa es el diámetro del circuncírculo, por eso R es la mitad de c.'
      ],
      calculatorNote:
        'Ingrese un valor positivo para la hipotenusa c. Esta calculadora supone que c es el lado opuesto al ángulo recto.',
      formulaParagraphs: [
        'En todo triángulo rectángulo, la hipotenusa es el diámetro del circuncírculo.',
        'Aquí c es la hipotenusa y R es el circunradio.'
      ],
      formulaPoints: ['Empiece con la hipotenusa c.', 'Divida c entre 2.', 'El resultado es el circunradio R.'],
      diagramParagraphs: [
        'El diagrama muestra el circuncírculo alrededor del triángulo rectángulo. La hipotenusa c actúa como diámetro.'
      ],
      diagramNotes: [
        'El circuncentro es el punto medio de la hipotenusa.',
        'El segmento marcado R es el circunradio.',
        'El círculo pasa por los tres vértices del triángulo.'
      ],
      howToUse: [
        'Ingrese la longitud de la hipotenusa c.',
        'Asegúrese de que c sea mayor que 0.',
        'Calcule el circunradio R.',
        'Lea el resultado como R.'
      ],
      exampleGiven: ['Hipotenusa c = 10'],
      exampleResult: 'Para un triángulo rectángulo con hipotenusa 10, el circunradio es 5 units.',
      resultMeaning: [
        'El resultado R es el radio del circuncírculo. Si R = 5, el círculo que pasa por los tres vértices tiene radio 5 units.'
      ],
      radiusRelation: [
        'En la calculadora principal de radios, este mismo cálculo aparece como Circunradio y Relación del radio R.'
      ],
      useCases: [
        'Encontrar el radio del círculo que pasa por los tres vértices.',
        'Trabajar con geometría de circuncírculos usando una hipotenusa conocida.',
        'Comparar el circunradio R con el inradio r.'
      ],
      commonMistakes: [
        'Ingresar un cateto en lugar de la hipotenusa c.',
        'Olvidar que R es la mitad de c.',
        'Confundir el circunradio R con el inradio r.'
      ],
      faqs: [
        {
          question: '¿Cuál es la fórmula del circunradio de un triángulo rectángulo?',
          answer: 'La fórmula es R = c / 2, donde c es la hipotenusa y R es el circunradio.'
        },
        {
          question: '¿Qué significa el resultado del circunradio?',
          answer: 'Es el radio del círculo que pasa por los tres vértices del triángulo rectángulo.'
        },
        {
          question: '¿Por qué el circuncentro está en el punto medio de la hipotenusa?',
          answer: 'Porque en un triángulo rectángulo la hipotenusa es el diámetro del circuncírculo.'
        },
        {
          question: '¿Necesito el cateto a o b para encontrar R?',
          answer: 'No. Si ya conoce la hipotenusa c, R = c / 2.'
        },
        {
          question: '¿El circunradio es lo mismo que el diámetro?',
          answer: 'No. La hipotenusa c es el diámetro y R es la mitad de ese diámetro.'
        }
      ]
    }
  }),
};

export function localizeFocusedRadiusCalculatorPage(
  page: FocusedRadiusCalculatorPage,
  locale: Locale
): FocusedRadiusCalculatorPage {
  const localizedPage = RADIUS_TRANSLATIONS[locale]?.pages[page.slug as RadiusPageSlug];

  if (!localizedPage) return page;

  return {
    ...page,
    ...localizedPage,
    diagram: {
      ...page.diagram,
      ...localizedPage.diagram
    }
  };
}

export function getFocusedRadiusCalculatorUi(locale: Locale): FocusedRadiusCalculatorUi {
  return RADIUS_TRANSLATIONS[locale]?.ui ?? EN_UI;
}

export function getFocusedRadiusCalculatorRuntimeTranslations(
  page: FocusedRadiusCalculatorPage,
  locale: Locale
) {
  const ui = getFocusedRadiusCalculatorUi(locale);
  const calculationSteps =
    page.calculatorKind === 'inradius'
      ? {
          inradius: {
            title: ui.calculatorHeadings.inradius,
            description: ui.stepDescriptions.inradius
          },
          inradiusStrict: {
            title: ui.calculatorHeadings.inradius,
            description: ui.stepDescriptions.inradius
          }
        }
      : {
          circumradius: {
            title: ui.calculatorHeadings.circumradius,
            description: ui.stepDescriptions.circumradius
          }
        };

  return {
    ...ui.runtime,
    calculationSteps
  };
}
