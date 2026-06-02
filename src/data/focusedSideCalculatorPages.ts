import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';

export type FocusedSideCalculatorPage = {
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
  };
  extraSection: {
    h2: string;
    paragraphs: string[];
  };
  relatedLinks: {
    href: string;
    label: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const FOCUSED_SIDE_CALCULATOR_PAGES: FocusedSideCalculatorPage[] = [
  {
    slug: 'pythagorean-theorem-calculator',
    url: '/pythagorean-theorem-calculator/',
    h1: 'Pythagorean Theorem Calculator',
    metaTitle: 'Pythagorean Theorem Calculator | Find the Hypotenuse',
    metaDescription:
      'Use this Pythagorean theorem calculator to find the hypotenuse of a right triangle from legs a and b with formula, steps, and examples.',
    formulaSlug: 'pythagorean-theorem',
    toolPurpose: 'Find hypotenuse c when leg a and leg b are known.',
    intro:
      'Use this Pythagorean theorem calculator to find the hypotenuse of a right triangle. Enter the two legs, a and b, and the calculator will solve side c with formula and steps.',
    calculator: {
      outputLabel: 'Hypotenuse c',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Pythagorean Theorem Formula',
      paragraphs: [
        'The Pythagorean theorem is used in right triangles. It states that the square of the hypotenuse equals the sum of the squares of the two legs.'
      ],
      formulas: ['c^2 = a^2 + b^2', 'c = \\sqrt{a^2 + b^2}']
    },
    howTo: {
      h2: 'How to Find the Hypotenuse',
      steps: [
        'Square leg a.',
        'Square leg b.',
        'Add both squared values.',
        'Take the square root.',
        'The answer is hypotenuse c.'
      ]
    },
    example: {
      h2: 'Example',
      intro: 'Find c when a = 6 and b = 8.',
      lines: [
        'c = \\sqrt{6^2 + 8^2}',
        'c = \\sqrt{36 + 64}',
        'c = \\sqrt{100}',
        'c = 10'
      ]
    },
    extraSection: {
      h2: 'When to Use This Calculator',
      paragraphs: [
        'Use this calculator when you know both legs of a right triangle and need to find the longest side, called the hypotenuse.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      }
    ],
    faqs: [
      {
        question: 'What is the Pythagorean theorem?',
        answer: 'The Pythagorean theorem is c^2 = a^2 + b^2 for a right triangle.'
      },
      {
        question: 'What is c in the Pythagorean theorem?',
        answer: 'c is the hypotenuse, the side opposite the 90 degree angle.'
      },
      {
        question: 'Can I use this formula for any triangle?',
        answer: 'No. It works only for right triangles.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-a-calculator',
    url: '/missing-leg-from-c-and-a-calculator/',
    h1: 'Missing Leg From c and a Calculator',
    metaTitle: 'Missing Leg From c and a Calculator | Find Leg b',
    metaDescription:
      'Find missing leg b of a right triangle when you know hypotenuse c and leg a. Use formula b = √(c² − a²) with steps.',
    formulaSlug: 'leg-from-hypotenuse-and-other-leg',
    toolPurpose: 'Find leg b when hypotenuse c and leg a are known.',
    intro:
      'Use this missing leg calculator to find leg b of a right triangle when you know hypotenuse c and leg a. The calculator shows the formula, steps, and final answer.',
    calculator: {
      outputLabel: 'Missing leg b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'a', label: 'Leg a', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Missing Leg b Formula',
      paragraphs: [
        'Use this formula when c is the hypotenuse and a is the known leg. The result is the other leg, b.'
      ],
      formulas: ['b = \\sqrt{c^2 - a^2}']
    },
    howTo: {
      h2: 'How to Find Leg b From c and a',
      steps: [
        'Square hypotenuse c.',
        'Square leg a.',
        'Subtract a^2 from c^2.',
        'Take the square root.',
        'The answer is leg b.'
      ]
    },
    example: {
      h2: 'Example',
      intro: 'Find b when c = 13 and a = 5.',
      lines: [
        'b = \\sqrt{13^2 - 5^2}',
        'b = \\sqrt{169 - 25}',
        'b = \\sqrt{144}',
        'b = 12'
      ]
    },
    extraSection: {
      h2: 'Important Check',
      paragraphs: [
        'The hypotenuse c must be greater than leg a. If c is equal to or smaller than a, the triangle is invalid.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      }
    ],
    faqs: [
      {
        question: 'What does c mean?',
        answer: 'c means the hypotenuse of the right triangle.'
      },
      {
        question: 'What does a mean?',
        answer: 'a is one leg of the right triangle.'
      },
      {
        question: 'What does this calculator find?',
        answer: 'It finds the missing leg b.'
      },
      {
        question: 'Can c be smaller than a?',
        answer: 'No. The hypotenuse must be the longest side.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-b-calculator',
    url: '/missing-leg-from-c-and-b-calculator/',
    h1: 'Missing Leg From c and b Calculator',
    metaTitle: 'Missing Leg From c and b Calculator | Find Leg a',
    metaDescription:
      'Find missing leg a of a right triangle when you know hypotenuse c and leg b. Use formula a = √(c² − b²) with steps.',
    formulaSlug: 'other-leg-from-hypotenuse-and-leg',
    toolPurpose: 'Find leg a when hypotenuse c and leg b are known.',
    intro:
      'Use this missing leg calculator to find leg a of a right triangle when you know hypotenuse c and leg b. The calculator gives the formula, steps, and final answer.',
    calculator: {
      outputLabel: 'Missing leg a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Missing Leg a Formula',
      paragraphs: [
        'Use this formula when c is the hypotenuse and b is the known leg. The result is the other leg, a.'
      ],
      formulas: ['a = \\sqrt{c^2 - b^2}']
    },
    howTo: {
      h2: 'How to Find Leg a From c and b',
      steps: [
        'Square hypotenuse c.',
        'Square leg b.',
        'Subtract b^2 from c^2.',
        'Take the square root.',
        'The answer is leg a.'
      ]
    },
    example: {
      h2: 'Example',
      intro: 'Find a when c = 10 and b = 6.',
      lines: [
        'a = \\sqrt{10^2 - 6^2}',
        'a = \\sqrt{100 - 36}',
        'a = \\sqrt{64}',
        'a = 8'
      ]
    },
    extraSection: {
      h2: 'Important Check',
      paragraphs: [
        'The hypotenuse c must be greater than leg b. If c is equal to or smaller than b, the triangle is invalid.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      }
    ],
    faqs: [
      {
        question: 'What does c mean?',
        answer: 'c means the hypotenuse of the right triangle.'
      },
      {
        question: 'What does b mean?',
        answer: 'b is one leg of the right triangle.'
      },
      {
        question: 'What does this calculator find?',
        answer: 'It finds the missing leg a.'
      },
      {
        question: 'Can c be smaller than b?',
        answer: 'No. The hypotenuse must be the longest side.'
      }
    ]
  }
];

export function getFocusedSideCalculatorPage(slug: string) {
  return FOCUSED_SIDE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
