import { localizeFocusedTriplesCalculatorPage } from './focusedTriplesCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

export type FocusedTriplesCalculatorMode = {
  id: string;
  label: string;
  heading: string;
  fields: { key: string; label: string; min?: number }[];
  outputLabels: string[];
  formulas: string[];
  validation: string;
};

export type FocusedTriplesCalculatorUi = {
  calculatorModeHeading?: string;
  resultLabel?: string;
  formulaLabel?: string;
  calculateLabel?: string;
  resetLabel?: string;
  openToolLabel?: string;
  diagramKeyLabel?: string;
  diagramScaleFactorLabel?: string;
  faqDescription?: string;
  sectionHeadings?: {
    formula?: string;
    diagram?: string;
    howTo?: string;
    examples?: string;
    result?: string;
    sideRatio?: string;
    useCases?: string;
    commonMistakes?: string;
    related?: string;
    faqs?: string;
  };
  errors?: {
    positiveValues?: string;
    hypotenuseLongest?: string;
    notTriple?: string;
    positiveIntegers?: string;
    mGreaterThanN?: string;
    positiveScaleFactor?: string;
    originalAndScalePositive?: string;
    similarAndScalePositive?: string;
    unableToCalculate?: string;
  };
  results?: {
    validTriple?: string;
    notTriple?: string;
  };
};

export type FocusedTriplesCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  introLine: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  badge: string;
  breadcrumbParent?: {
    href: string;
    label: string;
  };
  intro: string[];
  calculatorNote: string;
  modes: FocusedTriplesCalculatorMode[];
  quickSummary: {
    h2: string;
    intro: string;
    cards: {
      label: string;
      value: string;
    }[];
  };
  formulaSection: {
    paragraphs: string[];
    formulas: string[];
  };
  diagram: {
    kind: 'general' | '3-4-5' | '5-12-13' | 'similar';
    h2: string;
    intro: string;
    caption: string;
    notes: string[];
  };
  howToUse: string[];
  example: {
    title: string;
    steps: string[];
  }[];
  resultMeaning: string[];
  sideRatio: string[];
  useCases: string[];
  commonMistakes: string[];
  relatedLinks: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
  calculatorUi?: FocusedTriplesCalculatorUi;
};

export const focusedTriplesCalculatorPages: FocusedTriplesCalculatorPage[] = [
  // ─── PAGE 1: Pythagorean Triples Calculator ───────────────────────────
  {
    slug: 'pythagorean-triples-calculator',
    url: '/pythagorean-triples-calculator/',
    h1: 'Pythagorean Triples Calculator',
    introLine:
      'Check or generate whole-number right triangle triples with step-by-step results.',
    secondaryKeywords: [
      'pythagorean triples calculator',
      'pythagorean triple formula',
      'whole number right triangle triples',
      'generate pythagorean triples',
      'check pythagorean triple',
    ],
    metaTitle:
      'Pythagorean Triples Calculator | Check and Generate Right Triangle Triples',
    metaDescription:
      'Use this Pythagorean triples calculator to check or generate whole-number right triangle side lengths with formulas, steps, and examples.',
    badge: 'Pythagorean Triples',
    breadcrumbParent: {
      href: '/right-triangle-side-calculator/',
      label: 'Right Triangle Side Calculator',
    },

    intro: [
      'A Pythagorean triple is a set of three whole numbers that perfectly fit the rule a\u00B2 + b\u00B2 = c\u00B2. When three numbers satisfy this equation, they can always form the sides of a right triangle. The most familiar example is 3, 4, 5 \u2014 but there are infinitely many others.',
      'This calculator gives you two ways to work with Pythagorean triples. You can check whether any three numbers form a valid triple, or you can generate a new triple using the m and n formula. Both modes show full step-by-step solutions so you can follow the math.',
    ],

    calculatorNote:
      'Enter three side lengths to check a triple, or use m and n values to generate one. The calculator validates your inputs and shows detailed solution steps.',

    modes: [
      {
        id: 'check-triple',
        label: 'Check a Pythagorean triple',
        heading: 'Check a Pythagorean triple',
        fields: [
          { key: 'a', label: 'Side a', min: 0 },
          { key: 'b', label: 'Side b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 },
        ],
        outputLabels: ['Result'],
        formulas: ['a\u00B2 + b\u00B2 = c\u00B2'],
        validation:
          'a, b, and c must be positive numbers. c should be the largest side.',
      },
      {
        id: 'generate-triple',
        label: 'Generate Pythagorean triples',
        heading: 'Generate Pythagorean triples',
        fields: [
          { key: 'm', label: 'm', min: 1 },
          { key: 'n', label: 'n', min: 1 },
        ],
        outputLabels: ['a', 'b', 'c'],
        formulas: [
          'a = m\u00B2 \u2212 n\u00B2',
          'b = 2mn',
          'c = m\u00B2 + n\u00B2',
        ],
        validation:
          'm must be greater than n. m and n must be positive integers.',
      },
    ],

    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when you want to check whether whole-number side lengths form a right triangle or generate a new Pythagorean triple from two integer values.',
      cards: [
        { label: 'Known values', value: 'Sides a, b, c or integers m and n' },
        { label: 'Finds', value: 'Triple status or generated sides a, b, c' },
        { label: 'Main formula', value: 'a^2 + b^2 = c^2' },
        { label: 'Best for', value: 'Whole-number right triangle patterns' },
      ],
    },

    formulaSection: {
      paragraphs: [
        'Every Pythagorean triple satisfies the equation a\u00B2 + b\u00B2 = c\u00B2, where c is the hypotenuse and a and b are the two legs. If all three values are whole numbers and the equation holds true, you have a valid Pythagorean triple.',
        'You can also generate triples using two positive integers m and n, where m is greater than n. The formulas a = m\u00B2 \u2212 n\u00B2, b = 2mn, and c = m\u00B2 + n\u00B2 will always produce a valid triple. When m and n share no common factors and are not both odd, the result is called a primitive triple.',
      ],
      formulas: [
        'a^2 + b^2 = c^2',
        'a = m^2 - n^2',
        'b = 2mn',
        'c = m^2 + n^2',
      ],
    },

    diagram: {
      kind: 'general',
      h2: 'Right Triangle Diagram: Pythagorean Triples',
      intro:
        'The diagram shows the standard side labels used when checking or generating triples. The two legs are a and b, and c is the hypotenuse opposite the right angle.',
      caption:
        'Right triangle diagram showing legs a and b, hypotenuse c, and the right angle.',
      notes: [
        'a and b are the two legs of the right triangle.',
        'c is always the hypotenuse \u2014 the longest side, opposite the right angle.',
        'In a Pythagorean triple, all three values are whole numbers.',
        'The right angle is between sides a and b.',
      ],
    },

    howToUse: [
      'Select a mode: Check a triple or Generate a triple.',
      'For checking: enter three side values with c as the largest.',
      'For generating: enter two positive integers m and n where m is greater than n.',
      'Click Calculate to see the result and step-by-step solution.',
      'Click Reset to clear all fields and start over.',
    ],

    example: [
      {
        title: 'Example 1: Check whether 3, 4, 5 is a Pythagorean triple',
        steps: [
          'a^2 + b^2 = c^2',
          '3^2 + 4^2 = 5^2',
          '9 + 16 = 25',
          '25 = 25 \\quad \\checkmark',
          '\\text{Result: 3, 4, 5 is a valid Pythagorean triple.}',
        ],
      },
      {
        title: 'Example 2: Generate a triple using m = 2, n = 1',
        steps: [
          'a = m^2 - n^2 = 2^2 - 1^2 = 4 - 1 = 3',
          'b = 2mn = 2 \\times 2 \\times 1 = 4',
          'c = m^2 + n^2 = 2^2 + 1^2 = 4 + 1 = 5',
          '\\text{Result: 3, 4, 5}',
        ],
      },
      {
        title: 'Example 3: Check whether 7, 24, 25 is a Pythagorean triple',
        steps: [
          'a^2 + b^2 = c^2',
          '7^2 + 24^2 = 25^2',
          '49 + 576 = 625',
          '625 = 625 \\quad \\checkmark',
          '\\text{Result: 7, 24, 25 is a valid Pythagorean triple.}',
        ],
      },
    ],

    resultMeaning: [
      'When checking a triple, the calculator tells you whether the three numbers satisfy a\u00B2 + b\u00B2 = c\u00B2. If the left side equals the right side, the numbers form a valid Pythagorean triple and can be the sides of a right triangle.',
      'When generating a triple, the calculator produces three whole numbers using the m and n formulas. These numbers are guaranteed to form a right triangle. If m and n share no common factor and are not both odd, the triple is primitive \u2014 meaning it cannot be simplified further.',
    ],

    sideRatio: [
      'A Pythagorean triple has whole-number side lengths in the form a : b : c.',
      'The exact ratio changes from one triple to another, but every valid triple satisfies a\u00B2 + b\u00B2 = c\u00B2 with c as the hypotenuse.',
    ],

    useCases: [
      'Checking homework answers involving right triangle side lengths.',
      'Verifying whether measured side lengths form a true right angle.',
      'Generating triples for math competitions and practice problems.',
      'Building a reference list of Pythagorean triples for study.',
      'Confirming construction measurements that rely on the 3-4-5 rule or similar patterns.',
    ],

    commonMistakes: [
      'Placing c as a smaller side instead of the largest \u2014 c must always be the hypotenuse.',
      'Forgetting to square each side before adding \u2014 checking a + b = c instead of a\u00B2 + b\u00B2 = c\u00B2.',
      'Writing the equation as a\u00B2 + c\u00B2 = b\u00B2 instead of a\u00B2 + b\u00B2 = c\u00B2.',
      'Using non-integer values and expecting a Pythagorean triple \u2014 triples must be whole numbers.',
      'Setting m less than or equal to n when generating \u2014 m must be strictly greater than n.',
    ],

    relatedLinks: [
      { href: '/3-4-5-triangle-calculator/', label: '3 4 5 Triangle Calculator' },
      {
        href: '/5-12-13-triangle-calculator/',
        label: '5 12 13 Triangle Calculator',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'Pythagorean Theorem Calculator',
      },
      {
        href: '/special-right-triangle-calculator/',
        label: 'Special Right Triangle Calculator',
      },
    ],

    faqs: [
      {
        question: 'What is a Pythagorean triple?',
        answer:
          'A Pythagorean triple is a set of three whole numbers a, b, and c that satisfy the equation a\u00B2 + b\u00B2 = c\u00B2. These three numbers can always be the side lengths of a right triangle.',
      },
      {
        question:
          'How do I use the m and n formula to generate a Pythagorean triple?',
        answer:
          'Pick two positive integers where m is greater than n. Then calculate a = m\u00B2 \u2212 n\u00B2, b = 2mn, and c = m\u00B2 + n\u00B2. The result is always a valid Pythagorean triple.',
      },
      {
        question: 'What is a primitive Pythagorean triple?',
        answer:
          'A primitive Pythagorean triple is one where a, b, and c share no common factor other than 1. For example, 3, 4, 5 is primitive, but 6, 8, 10 is not because all three are divisible by 2.',
      },
      {
        question: 'Can decimal numbers form a Pythagorean triple?',
        answer:
          'No. Pythagorean triples are defined as sets of whole numbers only. Decimal values may satisfy a\u00B2 + b\u00B2 = c\u00B2, but they are not considered triples.',
      },
      {
        question: 'Is 5, 12, 13 a Pythagorean triple?',
        answer:
          'Yes. Checking: 5\u00B2 + 12\u00B2 = 25 + 144 = 169 = 13\u00B2. Since all three are whole numbers and the equation holds, it is a valid Pythagorean triple.',
      },
      {
        question:
          'Why does the calculator say my values are not a triple?',
        answer:
          'The calculator checks whether a\u00B2 + b\u00B2 equals c\u00B2 exactly. If there is any difference \u2014 even a small one from rounding \u2014 the values do not form a Pythagorean triple. Make sure c is the largest value.',
      },
    ],
  },

  // ─── PAGE 2: 3 4 5 Triangle Calculator ────────────────────────────────
  {
    slug: '3-4-5-triangle-calculator',
    url: '/3-4-5-triangle-calculator/',
    h1: '3 4 5 Triangle Calculator',
    introLine:
      'Scale a 3 4 5 right triangle and find sides, area, and perimeter.',
    secondaryKeywords: [
      '3 4 5 triangle calculator',
      '3 4 5 triangle formula',
      '3 4 5 triangle ratio',
      '3 4 5 right triangle',
      '3 4 5 scale factor',
    ],
    metaTitle:
      '3 4 5 Triangle Calculator | Solve the 3 4 5 Right Triangle',
    metaDescription:
      'Use this 3 4 5 triangle calculator to scale a 3 4 5 right triangle and find sides, area, and perimeter with formulas and steps.',
    badge: '3 4 5 Triangle',
    breadcrumbParent: {
      href: '/pythagorean-triples-calculator/',
      label: 'Pythagorean Triples Calculator',
    },

    intro: [
      'The 3 4 5 triangle is the smallest and most well-known Pythagorean triple. Its sides follow the ratio 3 : 4 : 5, and it always forms a perfect right angle. Builders, carpenters, and surveyors have relied on this pattern for centuries to create square corners without any special tools.',
      'This calculator lets you scale the 3 4 5 triangle by any factor you choose. Enter a scale factor k, and the calculator will multiply each side by that value. It also computes the area and perimeter of the scaled triangle with full step-by-step math.',
    ],

    calculatorNote:
      'Enter a positive scale factor k. The calculator multiplies 3, 4, and 5 by that factor and computes the resulting area and perimeter.',

    modes: [
      {
        id: 'scale-3-4-5',
        label: 'Scale 3-4-5 Triangle',
        heading: 'Scale 3-4-5 Triangle',
        fields: [{ key: 'k', label: 'Scale factor k', min: 0 }],
        outputLabels: [
          'Side a',
          'Side b',
          'Hypotenuse c',
          'Area',
          'Perimeter',
        ],
        formulas: [
          'a = 3k',
          'b = 4k',
          'c = 5k',
          'Area = (a \u00D7 b) / 2',
          'P = a + b + c',
        ],
        validation: 'k must be greater than 0.',
      },
    ],

    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when a right triangle follows the 3 : 4 : 5 ratio and you want to scale its sides, area, and perimeter from one scale factor.',
      cards: [
        { label: 'Known value', value: 'Scale factor k' },
        { label: 'Finds', value: 'Sides 3k, 4k, 5k, area, and perimeter' },
        { label: 'Main formula', value: 'a = 3k, b = 4k, c = 5k' },
        { label: 'Best for', value: '3-4-5 right angle checks and scaled triples' },
      ],
    },

    formulaSection: {
      paragraphs: [
        'The 3 4 5 triangle uses the simplest Pythagorean triple. You can scale every side by the same factor k to create a larger or smaller version that is still a right triangle. The ratio between the sides stays the same no matter what value of k you use.',
        'After scaling, the area is half the product of the two legs, and the perimeter is the sum of all three sides. Because the ratio never changes, a 3 4 5 triangle at any scale always has the same angles.',
      ],
      formulas: [
        'a = 3k',
        'b = 4k',
        'c = 5k',
        '\\text{Area} = \\frac{a \\times b}{2}',
        'P = a + b + c',
      ],
    },

    diagram: {
      kind: '3-4-5',
      h2: 'Right Triangle Diagram: 3 4 5 Triangle',
      intro:
        'The diagram marks the 3 : 4 : 5 relationship with the scale factor k. Multiplying all three sides by k keeps the right angle and preserves the triangle shape.',
      caption:
        'Right triangle diagram showing a 3 4 5 triangle scaled by factor k.',
      notes: [
        'The base ratio is 3 : 4 : 5.',
        'Side a = 3k is the shorter leg.',
        'Side b = 4k is the longer leg.',
        'Side c = 5k is the hypotenuse \u2014 always the longest side.',
        'Multiply all three sides by the same k to keep the right angle.',
      ],
    },

    howToUse: [
      'Enter a scale factor k in the input field.',
      'Click Calculate to see the scaled side lengths, area, and perimeter.',
      'Review the step-by-step solution below the result.',
      'Try different values of k to compare triangle sizes.',
      'Click Reset to clear the input and start fresh.',
    ],

    example: [
      {
        title: 'Example 1: Scale factor k = 2',
        steps: [
          'a = 3k = 3 \\times 2 = 6',
          'b = 4k = 4 \\times 2 = 8',
          'c = 5k = 5 \\times 2 = 10',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{6 \\times 8}{2} = \\frac{48}{2} = 24',
          'P = a + b + c = 6 + 8 + 10 = 24',
        ],
      },
      {
        title: 'Example 2: Scale factor k = 5',
        steps: [
          'a = 3k = 3 \\times 5 = 15',
          'b = 4k = 4 \\times 5 = 20',
          'c = 5k = 5 \\times 5 = 25',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{15 \\times 20}{2} = \\frac{300}{2} = 150',
          'P = a + b + c = 15 + 20 + 25 = 60',
        ],
      },
      {
        title: 'Example 3: Scale factor k = 0.5',
        steps: [
          'a = 3k = 3 \\times 0.5 = 1.5',
          'b = 4k = 4 \\times 0.5 = 2',
          'c = 5k = 5 \\times 0.5 = 2.5',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{1.5 \\times 2}{2} = \\frac{3}{2} = 1.5',
          'P = a + b + c = 1.5 + 2 + 2.5 = 6',
        ],
      },
    ],

    resultMeaning: [
      'The calculator gives you five values: the three scaled sides, the area, and the perimeter. Side a is always the shorter leg (3k), side b is the longer leg (4k), and c is the hypotenuse (5k).',
      'The area tells you the space inside the triangle in square units. The perimeter gives you the total length around the outside. Both values grow as you increase k, but the triangle always keeps its right angle.',
    ],

    sideRatio: [
      'The side ratio for every 3 4 5 triangle is 3 : 4 : 5.',
      'A scaled version keeps the same ratio as 3k : 4k : 5k, so the hypotenuse is always the side matched with 5k.',
    ],

    useCases: [
      'Checking a right angle in construction by measuring 3, 6, or 9 feet along one side and 4, 8, or 12 feet along another.',
      'Solving geometry homework that involves 3 4 5 triangle scaling.',
      'Designing layouts or floor plans that require exact 90-degree corners.',
      'Quickly estimating areas and perimeters without a full right triangle solver.',
      'Teaching students how scaling preserves angles in similar triangles.',
    ],

    commonMistakes: [
      'Scaling only one or two sides instead of all three \u2014 all sides must be multiplied by the same k.',
      'Treating 5 as a leg instead of the hypotenuse \u2014 5 is always the longest side.',
      'Thinking only exact values of 3, 4, 5 work \u2014 any multiple like 6, 8, 10 or 15, 20, 25 is also valid.',
      'Mixing up area and perimeter formulas \u2014 area uses multiplication and division by 2, perimeter uses addition.',
      'Using a negative or zero scale factor \u2014 k must be greater than 0.',
    ],

    relatedLinks: [
      {
        href: '/pythagorean-triples-calculator/',
        label: 'Pythagorean Triples Calculator',
      },
      {
        href: '/5-12-13-triangle-calculator/',
        label: '5 12 13 Triangle Calculator',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'Pythagorean Theorem Calculator',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator',
      },
    ],

    faqs: [
      {
        question: 'What is the 3 4 5 triangle rule?',
        answer:
          'The 3 4 5 rule states that a triangle with sides in the ratio 3 : 4 : 5 always forms a right angle. This works because 3\u00B2 + 4\u00B2 = 9 + 16 = 25 = 5\u00B2, satisfying the Pythagorean theorem.',
      },
      {
        question: 'How do I scale a 3 4 5 triangle?',
        answer:
          'Multiply all three sides by the same factor k. For example, with k = 3, the sides become 9, 12, and 15. The triangle stays a right triangle as long as you scale every side equally.',
      },
      {
        question: 'What is the area of a 3 4 5 triangle?',
        answer:
          'The base 3 4 5 triangle has an area of (3 \u00D7 4) / 2 = 6 square units. For a scaled version, use Area = (3k \u00D7 4k) / 2.',
      },
      {
        question: 'Is 6, 8, 10 a 3 4 5 triangle?',
        answer:
          'Yes. Dividing each side by 2 gives 3, 4, 5. So 6, 8, 10 is a 3 4 5 triangle scaled by k = 2.',
      },
      {
        question: 'Can I use the 3 4 5 rule to check a right angle?',
        answer:
          'Yes. Measure 3 units along one side and 4 units along the other. If the diagonal between those endpoints measures exactly 5 units, the corner is a right angle.',
      },
      {
        question: 'What is the perimeter of a 3 4 5 triangle?',
        answer:
          'The base perimeter is 3 + 4 + 5 = 12 units. For any scaled version, the perimeter is 12k, where k is the scale factor.',
      },
    ],
  },

  // ─── PAGE 3: 5 12 13 Triangle Calculator ──────────────────────────────
  {
    slug: '5-12-13-triangle-calculator',
    url: '/5-12-13-triangle-calculator/',
    h1: '5 12 13 Triangle Calculator',
    introLine:
      'Scale a 5 12 13 right triangle and find sides, area, and perimeter.',
    secondaryKeywords: [
      '5 12 13 triangle calculator',
      '5 12 13 triangle formula',
      '5 12 13 triangle ratio',
      '5 12 13 right triangle',
      '5 12 13 scale factor',
    ],
    metaTitle:
      '5 12 13 Triangle Calculator | Solve the 5 12 13 Right Triangle',
    metaDescription:
      'Use this 5 12 13 triangle calculator to scale a 5 12 13 right triangle and find sides, area, and perimeter with formulas and steps.',
    badge: '5 12 13 Triangle',
    breadcrumbParent: {
      href: '/pythagorean-triples-calculator/',
      label: 'Pythagorean Triples Calculator',
    },

    intro: [
      'The 5 12 13 triangle is one of the most commonly used Pythagorean triples beyond the classic 3 4 5. Its sides satisfy 5\u00B2 + 12\u00B2 = 13\u00B2, making it a guaranteed right triangle. You will see this triple in math courses, standardized tests, and real-world measurement problems.',
      'This calculator scales the 5 12 13 triangle by any factor you provide. Enter a value for k, and the tool calculates the new side lengths along with the area and perimeter. Each calculation includes a full breakdown of the math so you can verify every step.',
    ],

    calculatorNote:
      'Type in a positive scale factor k. The calculator multiplies 5, 12, and 13 by that value, then computes area and perimeter automatically.',

    modes: [
      {
        id: 'scale-5-12-13',
        label: 'Scale 5-12-13 Triangle',
        heading: 'Scale 5-12-13 Triangle',
        fields: [{ key: 'k', label: 'Scale factor k', min: 0 }],
        outputLabels: [
          'Side a',
          'Side b',
          'Hypotenuse c',
          'Area',
          'Perimeter',
        ],
        formulas: [
          'a = 5k',
          'b = 12k',
          'c = 13k',
          'Area = (a \u00D7 b) / 2',
          'P = a + b + c',
        ],
        validation: 'k must be greater than 0.',
      },
    ],

    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when a right triangle follows the 5 : 12 : 13 ratio and you want the scaled side lengths, area, and perimeter from one scale factor.',
      cards: [
        { label: 'Known value', value: 'Scale factor k' },
        { label: 'Finds', value: 'Sides 5k, 12k, 13k, area, and perimeter' },
        { label: 'Main formula', value: 'a = 5k, b = 12k, c = 13k' },
        { label: 'Best for', value: '5-12-13 triples, multiples, and right angle checks' },
      ],
    },

    formulaSection: {
      paragraphs: [
        'The 5 12 13 triple satisfies a\u00B2 + b\u00B2 = c\u00B2 because 25 + 144 = 169. Multiplying each side by the same factor k preserves the ratio, so the scaled triangle is always a right triangle.',
        'Once you find the scaled sides, the area equals half the product of the two legs. The perimeter is simply the sum of all three sides. The shape stays the same \u2014 only the size changes.',
      ],
      formulas: [
        'a = 5k',
        'b = 12k',
        'c = 13k',
        '\\text{Area} = \\frac{a \\times b}{2}',
        'P = a + b + c',
      ],
    },

    diagram: {
      kind: '5-12-13',
      h2: 'Right Triangle Diagram: 5 12 13 Triangle',
      intro:
        'The diagram shows the 5 : 12 : 13 side relationship after scaling. The hypotenuse is 13k, and the two legs are 5k and 12k.',
      caption:
        'Right triangle diagram showing a 5 12 13 triangle scaled by factor k.',
      notes: [
        'The base ratio is 5 : 12 : 13.',
        'Side a = 5k is the shorter leg.',
        'Side b = 12k is the longer leg.',
        'Side c = 13k is the hypotenuse \u2014 opposite the right angle.',
        'Every scaled version keeps the same angles and right angle.',
      ],
    },

    howToUse: [
      'Enter a positive number for the scale factor k.',
      'Press Calculate to get the scaled sides, area, and perimeter.',
      'Read through the step-by-step breakdown below the results.',
      'Change k to see how different scale factors affect the triangle.',
      'Press Reset to start a new calculation.',
    ],

    example: [
      {
        title: 'Example 1: Scale factor k = 2',
        steps: [
          'a = 5k = 5 \\times 2 = 10',
          'b = 12k = 12 \\times 2 = 24',
          'c = 13k = 13 \\times 2 = 26',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{10 \\times 24}{2} = \\frac{240}{2} = 120',
          'P = a + b + c = 10 + 24 + 26 = 60',
        ],
      },
      {
        title: 'Example 2: Scale factor k = 3',
        steps: [
          'a = 5k = 5 \\times 3 = 15',
          'b = 12k = 12 \\times 3 = 36',
          'c = 13k = 13 \\times 3 = 39',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{15 \\times 36}{2} = \\frac{540}{2} = 270',
          'P = a + b + c = 15 + 36 + 39 = 90',
        ],
      },
      {
        title: 'Example 3: Scale factor k = 10',
        steps: [
          'a = 5k = 5 \\times 10 = 50',
          'b = 12k = 12 \\times 10 = 120',
          'c = 13k = 13 \\times 10 = 130',
          '\\text{Area} = \\frac{a \\times b}{2} = \\frac{50 \\times 120}{2} = \\frac{6000}{2} = 3000',
          'P = a + b + c = 50 + 120 + 130 = 300',
        ],
      },
    ],

    resultMeaning: [
      'The output gives you the three scaled sides, the enclosed area, and the outer perimeter. Side a is the shorter leg, side b is the longer leg, and c is the hypotenuse.',
      'A larger k stretches the triangle while keeping the same proportions. Doubling k quadruples the area but only doubles the perimeter. This relationship holds for all scaled triangles.',
    ],

    sideRatio: [
      'The side ratio for every 5 12 13 triangle is 5 : 12 : 13.',
      'A scaled version keeps the same ratio as 5k : 12k : 13k, so each side is multiplied by the same scale factor k.',
    ],

    useCases: [
      'Solving practice problems that reference the 5 12 13 triple or its multiples.',
      'Double-checking right angle measurements when sides are multiples of 5, 12, and 13.',
      'Calculating areas and perimeters for geometry assignments involving Pythagorean triples.',
      'Planning construction layouts that use the 5 12 13 ratio for accuracy.',
      'Exploring how scaling a triangle changes its area and perimeter.',
    ],

    commonMistakes: [
      'Treating 13 as a leg \u2014 13 is always the hypotenuse because it is the largest side.',
      'Scaling only one or two sides instead of all three \u2014 every side must be multiplied by k.',
      'Forgetting that 5, 12, 13 is a Pythagorean triple \u2014 some students do not recognize it as one.',
      'Writing sides in the wrong order like 5, 13, 12 and placing the hypotenuse in the middle.',
      'Using only the legs for perimeter \u2014 the perimeter includes all three sides, not just the two legs.',
    ],

    relatedLinks: [
      {
        href: '/pythagorean-triples-calculator/',
        label: 'Pythagorean Triples Calculator',
      },
      {
        href: '/3-4-5-triangle-calculator/',
        label: '3 4 5 Triangle Calculator',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'Pythagorean Theorem Calculator',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator',
      },
    ],

    faqs: [
      {
        question: 'Is 5, 12, 13 a right triangle?',
        answer:
          'Yes. Since 5\u00B2 + 12\u00B2 = 25 + 144 = 169 = 13\u00B2, the three sides satisfy the Pythagorean theorem and form a right triangle.',
      },
      {
        question: 'How do I scale a 5 12 13 triangle?',
        answer:
          'Multiply each side by the same factor k. For instance, with k = 4, the new sides are 20, 48, and 52.',
      },
      {
        question: 'What is the area of a 5 12 13 triangle?',
        answer:
          'The base area is (5 \u00D7 12) / 2 = 30 square units. For a scaled version, use Area = (5k \u00D7 12k) / 2.',
      },
      {
        question: 'Is 10, 24, 26 a 5 12 13 triangle?',
        answer:
          'Yes. Each side is exactly twice the base triple, so 10, 24, 26 is a 5 12 13 triangle with scale factor k = 2.',
      },
      {
        question:
          'What is the difference between a 3 4 5 and a 5 12 13 triangle?',
        answer:
          'Both are Pythagorean triples, but they have different side ratios and angles. A 3 4 5 triangle has a steeper shape, while a 5 12 13 triangle is flatter because the longer leg is much larger relative to the shorter leg.',
      },
      {
        question:
          'Can the 5 12 13 triple be generated with the m and n formula?',
        answer:
          'Yes. Using m = 3 and n = 2 gives a = 9 \u2212 4 = 5, b = 2 \u00D7 3 \u00D7 2 = 12, and c = 9 + 4 = 13.',
      },
    ],
  },

  // ─── PAGE 4: Similar Right Triangles Calculator ───────────────────────
  {
    slug: 'similar-right-triangles-calculator',
    url: '/similar-right-triangles-calculator/',
    h1: 'Similar Right Triangles Calculator',
    introLine:
      'Find scale factor and missing matching sides in similar right triangles.',
    secondaryKeywords: [
      'similar right triangles calculator',
      'similar right triangles formula',
      'similar right triangles scale factor',
      'matching sides in similar triangles',
      'right triangle similarity calculator',
    ],
    metaTitle:
      'Similar Right Triangles Calculator | Find Missing Sides and Scale Factor',
    metaDescription:
      'Use this similar right triangles calculator to find missing sides, matching side ratios, and scale factor with formulas and examples.',
    badge: 'Similar Right Triangles',
    breadcrumbParent: {
      href: '/right-triangle-side-calculator/',
      label: 'Right Triangle Side Calculator',
    },

    intro: [
      'Two right triangles are similar when they share the same angle measurements. Their sides may differ in length, but the ratios between corresponding sides are always equal. This constant ratio is called the scale factor.',
      'This calculator helps you work with similar right triangles in three ways. You can find the scale factor between two triangles, calculate a missing side on the similar triangle, or reverse the process to find the original side. Each mode walks you through the formula step by step.',
    ],

    calculatorNote:
      'Choose a mode, enter the known values, and click Calculate. The calculator handles scale factor, missing similar side, and original side calculations.',

    modes: [
      {
        id: 'find-scale-factor',
        label: 'Find scale factor',
        heading: 'Find scale factor',
        fields: [
          { key: 'original_side', label: 'Original side', min: 0 },
          { key: 'similar_side', label: 'Similar side', min: 0 },
        ],
        outputLabels: ['Scale factor k'],
        formulas: ['k = similar side / original side'],
        validation: 'Both values must be greater than 0.',
      },
      {
        id: 'find-similar-side',
        label: 'Find missing similar side',
        heading: 'Find missing similar side',
        fields: [
          { key: 'original_side', label: 'Original side', min: 0 },
          { key: 'k', label: 'Scale factor k', min: 0 },
        ],
        outputLabels: ['Similar side'],
        formulas: ['similar side = original side \u00D7 k'],
        validation: 'Original side and k must be greater than 0.',
      },
      {
        id: 'find-original-side',
        label: 'Find original side',
        heading: 'Find original side',
        fields: [
          { key: 'similar_side', label: 'Similar side', min: 0 },
          { key: 'k', label: 'Scale factor k', min: 0 },
        ],
        outputLabels: ['Original side'],
        formulas: ['original side = similar side / k'],
        validation: 'Similar side and k must be greater than 0.',
      },
    ],

    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when two right triangles have matching angles and you need to find the scale factor or a missing corresponding side.',
      cards: [
        { label: 'Known values', value: 'One matching side pair, or one side and k' },
        { label: 'Finds', value: 'Scale factor, similar side, or original side' },
        { label: 'Main formula', value: 'k = similar side / original side' },
        { label: 'Best for', value: 'Proportions, scale models, and matching sides' },
      ],
    },

    formulaSection: {
      paragraphs: [
        'Similar right triangles have equal angles, so every pair of matching sides shares the same ratio. If you know one pair of corresponding sides, you can find the scale factor k. Once you have k, you can calculate any missing side on either triangle.',
        'The scale factor works in one direction. If k = 2, the similar triangle is twice as large. To go the other way, divide by k instead of multiplying. The formulas cover all three situations: finding k, finding a scaled side, and finding the original side.',
      ],
      formulas: [
        'k = \\frac{\\text{similar side}}{\\text{original side}}',
        '\\text{similar side} = \\text{original side} \\times k',
        '\\text{original side} = \\frac{\\text{similar side}}{k}',
      ],
    },

    diagram: {
      kind: 'similar',
      h2: 'Right Triangle Diagram: Similar Right Triangles',
      intro:
        'The diagram compares two right triangles with the same angles. Matching sides stay proportional, and the ratio between each matching pair is the same scale factor k.',
      caption:
        'Two similar right triangles showing corresponding sides and scale factor k.',
      notes: [
        'Both triangles have the same angle measures.',
        'Corresponding sides share the same ratio k.',
        'The smaller triangle is the original; the larger one is the similar triangle.',
        'If k is greater than 1, the similar triangle is larger. If k is less than 1, it is smaller.',
        'All three pairs of sides must have the same scale factor.',
      ],
    },

    howToUse: [
      'Pick the mode that matches your problem: find k, find a similar side, or find an original side.',
      'Enter the known values in the input fields.',
      'Click Calculate to see the result with the formula applied.',
      'Switch modes using the tabs at the top if you need a different calculation.',
      'Click Reset to clear all fields.',
    ],

    example: [
      {
        title: 'Example 1: Find the scale factor',
        steps: [
          'k = \\frac{\\text{similar side}}{\\text{original side}} = \\frac{18}{6} = 3',
          '\\text{The similar triangle is 3 times the size of the original.}',
        ],
      },
      {
        title: 'Example 2: Find a missing similar side',
        steps: [
          '\\text{similar side} = \\text{original side} \\times k = 8 \\times 2.5 = 20',
          '\\text{The corresponding side on the similar triangle is 20 units.}',
        ],
      },
      {
        title: 'Example 3: Find the original side',
        steps: [
          '\\text{original side} = \\frac{\\text{similar side}}{k} = \\frac{15}{3} = 5',
          '\\text{The matching side on the original triangle is 5 units.}',
        ],
      },
    ],

    resultMeaning: [
      'The scale factor k tells you how many times larger or smaller the similar triangle is compared to the original. A scale factor of 2 means every side on the similar triangle is twice as long.',
      'When you find a missing side, the result is the length of the corresponding side on the other triangle. This works because similar triangles maintain constant proportions across all pairs of matching sides.',
    ],

    sideRatio: [
      'Similar right triangles keep the same matching-side ratios across both triangles.',
      'If the scale factor is k, each side on the similar triangle equals its corresponding original side multiplied by k.',
    ],

    useCases: [
      'Finding unknown side lengths in geometry problems involving similar triangles.',
      'Calculating dimensions for scale models or architectural drawings.',
      'Solving proportion problems on standardized math tests.',
      'Comparing shadow measurements to estimate the height of tall objects.',
      'Converting between blueprint measurements and actual building dimensions.',
    ],

    commonMistakes: [
      'Matching the wrong sides \u2014 always compare corresponding sides that are opposite the same angle.',
      'Using different scale factors for different side pairs \u2014 all pairs must share the same k.',
      'Dividing in the wrong direction \u2014 k equals similar side divided by original side, not the reverse.',
      'Assuming all right triangles are similar \u2014 two right triangles are only similar if they share a second angle.',
      'Forgetting that the right angle counts as a shared angle \u2014 if two right triangles have one more equal acute angle, they are similar.',
    ],

    relatedLinks: [
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator',
      },
      {
        href: '/right-triangle-angle-calculator/',
        label: 'Right Triangle Angle Calculator',
      },
      {
        href: '/pythagorean-triples-calculator/',
        label: 'Pythagorean Triples Calculator',
      },
      {
        href: '/special-right-triangle-calculator/',
        label: 'Special Right Triangle Calculator',
      },
      {
        href: '/right-triangle-projection-calculator/',
        label: 'Right Triangle Projection Calculator',
      },
    ],

    faqs: [
      {
        question: 'What makes two right triangles similar?',
        answer:
          'Two right triangles are similar when they have the same angle measures. Since both already have a 90-degree angle, they only need one more matching acute angle to be similar.',
      },
      {
        question:
          'How do I find the scale factor between two similar right triangles?',
        answer:
          'Divide any side of the similar triangle by the corresponding side of the original triangle. The result is the scale factor k, and it should be the same for every pair of matching sides.',
      },
      {
        question: 'What does a scale factor of 1 mean?',
        answer:
          'A scale factor of 1 means the two triangles are the same size. Every corresponding side has equal length, making the triangles congruent.',
      },
      {
        question: 'Can the scale factor be a decimal?',
        answer:
          'Yes. A scale factor like 0.5 means the similar triangle is half the size of the original. Any positive number works as a scale factor.',
      },
      {
        question: 'Are all right triangles similar to each other?',
        answer:
          'No. Two right triangles are similar only if they share at least one acute angle in addition to the right angle. Different acute angles mean different proportions.',
      },
      {
        question: 'How do I find a missing side using the scale factor?',
        answer:
          'Multiply the corresponding original side by k to get the similar side. Or divide the similar side by k to find the original. The formula depends on which side you are solving for.',
      },
    ],
  },
];

export const FOCUSED_TRIPLES_CALCULATOR_PAGE_SLUGS =
  focusedTriplesCalculatorPages.map((page) => page.slug);

export function getFocusedTriplesCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
) {
  const page = focusedTriplesCalculatorPages.find((item) => item.slug === slug);

  if (!page) return undefined;

  return locale === DEFAULT_LOCALE
    ? page
    : localizeFocusedTriplesCalculatorPage(page, locale);
}
