import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';

export type FocusedMeasurementCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  toolPurpose: string;
  intro: string;
  calculator: {
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  formulaSection: {
    h2: string;
    paragraphs: string[];
    formulas: string[];
  };
  howTo: {
    h2: string;
    steps: string[];
  };
  example: {
    h2: string;
    intro: string;
    lines: string[];
    answer: string;
  };
  extraSections: {
    h2: string;
    paragraphs: string[];
    listTitle?: string;
    listItems?: string[];
  }[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const FOCUSED_MEASUREMENT_CALCULATOR_PAGES: FocusedMeasurementCalculatorPage[] = [
  {
    slug: 'right-triangle-perimeter-calculator',
    url: '/right-triangle-perimeter-calculator/',
    h1: 'Right Triangle Perimeter Calculator',
    metaTitle: 'Right Triangle Perimeter Calculator | Find Perimeter of a Right Triangle',
    metaDescription: 'Use this right triangle perimeter calculator to find the perimeter of a right triangle from leg a, leg b, and hypotenuse c with formula and steps.',
    formulaSlug: 'perimeter',
    toolPurpose: 'Find the perimeter P of a right triangle.',
    intro: 'Use this right triangle perimeter calculator to find the total distance around a right triangle. Enter leg a, leg b, and hypotenuse c to calculate the perimeter with formula and step-by-step solution.',
    calculator: {
      outputLabel: 'Perimeter P',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Perimeter Formula',
      paragraphs: [
        'The perimeter of a right triangle is the sum of all three sides. The two shorter sides are legs a and b. The longest side is the hypotenuse c.'
      ],
      formulas: ['P = a + b + c']
    },
    howTo: {
      h2: 'How to Find the Perimeter of a Right Triangle',
      steps: [
        'Enter leg a.',
        'Enter leg b.',
        'Enter hypotenuse c.',
        'Add the three side lengths.',
        'The result is the perimeter P.'
      ]
    },
    example: {
      h2: 'Example: Find Right Triangle Perimeter',
      intro: 'Given a = 3, b = 4, c = 5:',
      lines: [
        'P = a + b + c',
        'P = 3 + 4 + 5',
        'P = 12'
      ],
      answer: 'The perimeter is 12.'
    },
    extraSections: [
      {
        h2: 'What Is the Perimeter of a Right Triangle?',
        paragraphs: [
          'The perimeter is the total length around the outside of the triangle. For a right triangle, you add both legs and the hypotenuse.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [],
        listItems: [
          'Using only two sides',
          'Forgetting to include the hypotenuse',
          'Using different units in the same calculation',
          'Confusing area with perimeter',
          'Entering a hypotenuse that does not match the two legs'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/right-triangle-semiperimeter-calculator/', label: 'Right Triangle Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for right triangle perimeter?',
        answer: 'The formula is P = a + b + c.'
      },
      {
        question: 'What does c mean in the formula?',
        answer: 'c is the hypotenuse, the longest side of the right triangle.'
      },
      {
        question: 'Can I find perimeter with only two sides?',
        answer: 'Only if you first find the missing third side. Use the side calculator if one side is missing.'
      },
      {
        question: 'Is perimeter the same as area?',
        answer: 'No. Perimeter measures distance around the triangle. Area measures the space inside the triangle.'
      },
      {
        question: 'Do all sides need the same unit?',
        answer: 'Yes. Use the same unit for a, b, and c before calculating.'
      }
    ]
  },
  {
    slug: 'right-triangle-semiperimeter-calculator',
    url: '/right-triangle-semiperimeter-calculator/',
    h1: 'Right Triangle Semiperimeter Calculator',
    metaTitle: 'Right Triangle Semiperimeter Calculator | Find s = (a + b + c) / 2',
    metaDescription: 'Use this right triangle semiperimeter calculator to find half the perimeter from leg a, leg b, and hypotenuse c with formula and steps.',
    formulaSlug: 'semiperimeter',
    toolPurpose: 'Find the semiperimeter s of a right triangle.',
    intro: 'Use this right triangle semiperimeter calculator to find half of the triangle\u2019s perimeter. Enter leg a, leg b, and hypotenuse c to calculate semiperimeter s with formula and steps.',
    calculator: {
      outputLabel: 'Semiperimeter s',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Semiperimeter Formula',
      paragraphs: [
        'The semiperimeter is half of the perimeter. First add all three sides, then divide the total by 2.'
      ],
      formulas: ['s = \\frac{a + b + c}{2}']
    },
    howTo: {
      h2: 'How to Find the Semiperimeter of a Right Triangle',
      steps: [
        'Enter leg a.',
        'Enter leg b.',
        'Enter hypotenuse c.',
        'Add a, b, and c.',
        'Divide the result by 2.'
      ]
    },
    example: {
      h2: 'Example: Find Right Triangle Semiperimeter',
      intro: 'Given a = 3, b = 4, c = 5:',
      lines: [
        's = \\frac{a + b + c}{2}',
        's = \\frac{3 + 4 + 5}{2}',
        's = \\frac{12}{2}',
        's = 6'
      ],
      answer: 'The semiperimeter is 6.'
    },
    extraSections: [
      {
        h2: 'Why Semiperimeter Matters',
        paragraphs: [
          'Semiperimeter is used in triangle formulas such as Heron\u2019s formula and inradius calculations. It helps connect side lengths with area and circle-related measurements inside a triangle.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [],
        listItems: [
          'Forgetting to divide by 2',
          'Using only two sides',
          'Confusing perimeter with semiperimeter',
          'Mixing different units',
          'Using a hypotenuse that does not match the legs'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-inradius-and-circumradius-calculator/', label: 'Right Triangle Inradius and Circumradius Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for right triangle semiperimeter?',
        answer: 'The formula is s = (a + b + c) / 2.'
      },
      {
        question: 'What does semiperimeter mean?',
        answer: 'Semiperimeter means half of the triangle\u2019s perimeter.'
      },
      {
        question: 'Is semiperimeter the same as perimeter?',
        answer: 'No. Semiperimeter is half of the perimeter.'
      },
      {
        question: 'Why is semiperimeter used?',
        answer: 'It is used in formulas such as Heron\u2019s formula and inradius calculations.'
      },
      {
        question: 'Do I need all three sides?',
        answer: 'Yes. You need leg a, leg b, and hypotenuse c.'
      }
    ]
  }
];

export function getFocusedMeasurementCalculatorPage(slug: string) {
  return FOCUSED_MEASUREMENT_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
