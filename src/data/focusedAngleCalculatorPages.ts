import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type TriangleSide = 'a' | 'b' | 'c';
type TriangleAngle = 'A' | 'B';

export type FocusedAngleCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  headerSummary: string;
  calculator: {
    heading: string;
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  howItWorks: {
    h2: string;
    paragraphs: string[];
    cards: {
      label: string;
      value: string;
    }[];
  };
  formula: {
    h2: string;
    display: string;
    paragraphs: string[];
  };
  diagram: {
    h2: string;
    intro: string;
    activeSides: TriangleSide[];
    activeAngles: TriangleAngle[];
    focusLabel: string;
    focusDetail: string;
    notes: string[];
  };
  howToSteps: string[];
  example: {
    h2: string;
    intro: string;
    steps: string[];
    answer: string;
  };
  resultMeaning: string[];
  whenToUse: {
    intro: string;
    items: string[];
  };
  commonMistakes: {
    intro: string;
    items: string[];
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

export const FOCUSED_ANGLE_CALCULATOR_PAGES: FocusedAngleCalculatorPage[] = [
  {
    slug: 'right-triangle-angle-from-sine-calculator',
    url: '/right-triangle-angle-from-sine-calculator/',
    h1: 'Right Triangle Angle From Sine Calculator',
    metaTitle: 'Right Triangle Angle From Sine Calculator | Find Angle A',
    metaDescription:
      'Find angle A in a right triangle from opposite side a and hypotenuse c using inverse sine, with formula, diagram, example, and input checks.',
    formulaSlug: 'angle-from-sine',
    headerSummary:
      'Calculate angle A from the sine ratio when you know the opposite side and the hypotenuse.',
    calculator: {
      heading: 'Calculate Angle From Sine',
      outputLabel: 'Angle A',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How This Angle From Sine Calculator Works',
      paragraphs: [
        'This calculator uses inverse sine to recover angle A from a right-triangle side ratio. Enter the side across from angle A as a and the hypotenuse as c, then the tool computes A = sin^-1(a / c).',
        'The sine method is best when your known sides are the opposite leg and hypotenuse. The calculator returns the angle in degrees and shows the substitution so you can check the ratio before using the answer.'
      ],
      cards: [
        { label: 'Known values', value: 'Opposite leg a and hypotenuse c' },
        { label: 'Finds', value: 'Angle A in degrees' },
        { label: 'Formula', value: 'A = sin^-1(a / c)' },
        { label: 'Valid input', value: 'a must be positive and smaller than c' }
      ]
    },
    formula: {
      h2: 'Angle From Sine Formula',
      display: 'A = \\sin^{-1}\\left(\\frac{a}{c}\\right)',
      paragraphs: [
        'Sine compares the opposite side to the hypotenuse. To reverse that relationship, divide a by c first, then apply inverse sine.',
        'Because c is the hypotenuse, it must be the longest side. If a is equal to or larger than c, the ratio is not valid for an acute right-triangle angle.'
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram for Inverse Sine',
      intro:
        'The highlighted sides show the exact ratio used by inverse sine. Side a is opposite angle A, and side c is the hypotenuse.',
      activeSides: ['a', 'c'],
      activeAngles: ['A'],
      focusLabel: 'sin(A) = a / c',
      focusDetail:
        'First calculate the ratio a / c, then use inverse sine to convert that ratio into angle A.',
      notes: [
        'Side a sits across from angle A.',
        'Side c is opposite the 90 degree angle and must be longest.',
        'The answer is an acute angle between 0 and 90 degrees.'
      ]
    },
    howToSteps: [
      'Identify angle A, the acute angle you want to find.',
      'Measure the side opposite angle A and enter it as a.',
      'Measure the hypotenuse and enter it as c.',
      'Make sure c is larger than a.',
      'Click Calculate to get angle A in degrees.'
    ],
    example: {
      h2: 'Example: Find Angle A From Sine',
      intro: 'Suppose a = 3 and c = 5.',
      steps: [
        'A = sin^-1(a / c)',
        'A = sin^-1(3 / 5)',
        'A = sin^-1(0.6)',
        'A = 36.87 degrees'
      ],
      answer:
        'Angle A is approximately 36.87 degrees. The complementary acute angle is about 53.13 degrees.'
    },
    resultMeaning: [
      'The result is the angle whose sine equals a / c. A larger opposite side relative to the hypotenuse creates a larger angle A.',
      'For example, if a is half of c, then sin(A) = 0.5 and angle A is 30 degrees.'
    ],
    whenToUse: {
      intro: 'Use this inverse sine calculator when:',
      items: [
        'You know the opposite leg and hypotenuse.',
        'You need the incline, pitch, or direction angle from height and diagonal length.',
        'You want to check an arcsin step in a right-triangle problem.',
        'You already calculated sin(A) and want the angle in degrees.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these inverse sine mistakes:',
      items: [
        'Entering the adjacent leg instead of the opposite leg.',
        'Using c / a instead of a / c.',
        'Entering a hypotenuse that is not longer than the opposite side.',
        'Mixing units before forming the ratio.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Angle From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Angle From Tangent Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula to find angle A from sine?',
        answer:
          'Use A = sin^-1(a / c), where a is opposite angle A and c is the hypotenuse.'
      },
      {
        question: 'Can the opposite side be equal to the hypotenuse?',
        answer:
          'No. In a real right triangle with an acute angle A, the hypotenuse must be longer than the opposite leg.'
      },
      {
        question: 'Is the answer shown in degrees?',
        answer:
          'Yes. The calculator converts the inverse sine result to degrees.'
      }
    ]
  },
  {
    slug: 'right-triangle-angle-from-cosine-calculator',
    url: '/right-triangle-angle-from-cosine-calculator/',
    h1: 'Right Triangle Angle From Cosine Calculator',
    metaTitle: 'Right Triangle Angle From Cosine Calculator | Find Angle A',
    metaDescription:
      'Find angle A in a right triangle from adjacent side b and hypotenuse c using inverse cosine, with formula, diagram, example, and clear steps.',
    formulaSlug: 'angle-from-cosine',
    headerSummary:
      'Calculate angle A from the cosine ratio when you know the adjacent side and hypotenuse.',
    calculator: {
      heading: 'Calculate Angle From Cosine',
      outputLabel: 'Angle A',
      fields: [
        { key: 'b', label: 'Adjacent leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How This Angle From Cosine Calculator Works',
      paragraphs: [
        'This calculator uses inverse cosine to find angle A from the adjacent side and hypotenuse. Enter b as the side next to angle A and c as the hypotenuse, then the tool computes A = cos^-1(b / c).',
        'Cosine is useful when the known leg touches angle A. The result is shown in degrees, with the ratio and inverse-trig step displayed in the solution.'
      ],
      cards: [
        { label: 'Known values', value: 'Adjacent leg b and hypotenuse c' },
        { label: 'Finds', value: 'Angle A in degrees' },
        { label: 'Formula', value: 'A = cos^-1(b / c)' },
        { label: 'Valid input', value: 'b must be positive and smaller than c' }
      ]
    },
    formula: {
      h2: 'Angle From Cosine Formula',
      display: 'A = \\cos^{-1}\\left(\\frac{b}{c}\\right)',
      paragraphs: [
        'Cosine compares the adjacent side to the hypotenuse. To solve backward for the angle, divide b by c and apply inverse cosine.',
        'As angle A grows, the adjacent side becomes smaller compared with the hypotenuse. That is why cosine decreases as the acute angle gets larger.'
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram for Inverse Cosine',
      intro:
        'The highlighted sides show the cosine relationship around angle A: adjacent leg b over hypotenuse c.',
      activeSides: ['b', 'c'],
      activeAngles: ['A'],
      focusLabel: 'cos(A) = b / c',
      focusDetail:
        'First calculate b / c, then use inverse cosine to convert that ratio into angle A.',
      notes: [
        'Side b is next to angle A.',
        'Side c is the hypotenuse and must be longest.',
        'The output is an acute angle measured in degrees.'
      ]
    },
    howToSteps: [
      'Locate angle A in the right triangle.',
      'Enter the side adjacent to angle A as b.',
      'Enter the hypotenuse as c.',
      'Confirm that c is larger than b.',
      'Click Calculate to find angle A.'
    ],
    example: {
      h2: 'Example: Find Angle A From Cosine',
      intro: 'Suppose b = 4 and c = 5.',
      steps: [
        'A = cos^-1(b / c)',
        'A = cos^-1(4 / 5)',
        'A = cos^-1(0.8)',
        'A = 36.87 degrees'
      ],
      answer:
        'Angle A is approximately 36.87 degrees. This matches the same 3-4-5 triangle angle found by sine.'
    },
    resultMeaning: [
      'The result is the angle whose cosine equals b / c. A longer adjacent leg relative to the hypotenuse means angle A is smaller.',
      'If b / c equals 0.5, angle A is 60 degrees. If b / c is close to 1, angle A is small.'
    ],
    whenToUse: {
      intro: 'Use this inverse cosine calculator when:',
      items: [
        'You know the adjacent leg and hypotenuse.',
        'You need to recover an angle from base length and diagonal length.',
        'You are checking a cos^-1 step from a textbook or worksheet.',
        'You want a second method to verify an angle found from sine.'
      ]
    },
    commonMistakes: {
      intro: 'Watch for these inverse cosine errors:',
      items: [
        'Using the opposite side instead of the adjacent side.',
        'Putting c over b instead of b over c.',
        'Using a value of b that is equal to or larger than c.',
        'Forgetting that the calculator returns degrees, not radians.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Angle From Tangent Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula to find angle A from cosine?',
        answer:
          'Use A = cos^-1(b / c), where b is adjacent to angle A and c is the hypotenuse.'
      },
      {
        question: 'Why does the hypotenuse need to be larger than b?',
        answer:
          'The hypotenuse is always the longest side in a right triangle, so b / c must be less than 1 for an acute angle.'
      },
      {
        question: 'When should I use cosine instead of sine?',
        answer:
          'Use cosine when your known leg is adjacent to angle A. Use sine when your known leg is opposite angle A.'
      }
    ]
  },
  {
    slug: 'right-triangle-angle-from-tangent-calculator',
    url: '/right-triangle-angle-from-tangent-calculator/',
    h1: 'Right Triangle Angle From Tangent Calculator',
    metaTitle: 'Right Triangle Angle From Tangent Calculator | Find Angle A',
    metaDescription:
      'Find angle A in a right triangle from opposite side a and adjacent side b using inverse tangent, with formula, diagram, example, and usage tips.',
    formulaSlug: 'angle-from-tangent',
    headerSummary:
      'Calculate angle A from the tangent ratio when you know both legs of the right triangle.',
    calculator: {
      heading: 'Calculate Angle From Tangent',
      outputLabel: 'Angle A',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'b', label: 'Adjacent leg b', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How This Angle From Tangent Calculator Works',
      paragraphs: [
        'This calculator uses inverse tangent to find angle A from the two legs of a right triangle. Enter a as the opposite leg and b as the adjacent leg, then the calculator computes A = tan^-1(a / b).',
        'Tangent is often the most practical angle method when you know rise and run. It does not require the hypotenuse, so it works well for slopes, ramps, pitches, and layout checks.'
      ],
      cards: [
        { label: 'Known values', value: 'Opposite leg a and adjacent leg b' },
        { label: 'Finds', value: 'Angle A in degrees' },
        { label: 'Formula', value: 'A = tan^-1(a / b)' },
        { label: 'Best for', value: 'Rise-run problems, slopes, and angle checks from two legs' }
      ]
    },
    formula: {
      h2: 'Angle From Tangent Formula',
      display: 'A = \\tan^{-1}\\left(\\frac{a}{b}\\right)',
      paragraphs: [
        'Tangent compares the opposite leg to the adjacent leg. To find the angle, divide a by b and apply inverse tangent.',
        'Unlike sine and cosine, the tangent ratio does not use the hypotenuse. That makes it a strong choice when your measurements are vertical rise and horizontal run.'
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram for Inverse Tangent',
      intro:
        'The highlighted legs show the tangent relationship around angle A: opposite leg a over adjacent leg b.',
      activeSides: ['a', 'b'],
      activeAngles: ['A'],
      focusLabel: 'tan(A) = a / b',
      focusDetail:
        'First calculate a / b, then use inverse tangent to convert that ratio into angle A.',
      notes: [
        'Side a is opposite angle A.',
        'Side b is adjacent to angle A.',
        'The hypotenuse is not needed for this angle method.'
      ]
    },
    howToSteps: [
      'Find the angle A you want to solve.',
      'Enter the side opposite angle A as a.',
      'Enter the side adjacent to angle A as b.',
      'Keep both leg inputs positive and in the same unit.',
      'Click Calculate to get angle A in degrees.'
    ],
    example: {
      h2: 'Example: Find Angle A From Tangent',
      intro: 'Suppose a = 3 and b = 4.',
      steps: [
        'A = tan^-1(a / b)',
        'A = tan^-1(3 / 4)',
        'A = tan^-1(0.75)',
        'A = 36.87 degrees'
      ],
      answer:
        'Angle A is approximately 36.87 degrees. This is the same acute angle in a 3-4-5 right triangle.'
    },
    resultMeaning: [
      'The result is the angle whose tangent equals a / b. A larger opposite leg compared with the adjacent leg gives a larger angle.',
      'If a and b are equal, tan(A) = 1 and angle A is 45 degrees.'
    ],
    whenToUse: {
      intro: 'Use this inverse tangent calculator when:',
      items: [
        'You know both legs but not the hypotenuse.',
        'You are calculating slope angle from rise and run.',
        'You need a quick angle check from horizontal and vertical measurements.',
        'You want to avoid solving the hypotenuse first.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these inverse tangent mistakes:',
      items: [
        'Swapping opposite and adjacent sides.',
        'Using the hypotenuse in the tangent ratio.',
        'Entering sides with different units.',
        'Reading the answer as radians when the tool shows degrees.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Angle From Cosine Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula to find angle A from tangent?',
        answer:
          'Use A = tan^-1(a / b), where a is opposite angle A and b is adjacent to angle A.'
      },
      {
        question: 'Do I need the hypotenuse for inverse tangent?',
        answer:
          'No. Inverse tangent only needs the two legs: opposite over adjacent.'
      },
      {
        question: 'What angle do I get if a and b are equal?',
        answer:
          'If the legs are equal, a / b = 1 and angle A is 45 degrees.'
      }
    ]
  },
  {
    slug: 'right-triangle-missing-angle-calculator',
    url: '/right-triangle-missing-angle-calculator/',
    h1: 'Right Triangle Missing Angle Calculator',
    metaTitle: 'Right Triangle Missing Angle Calculator | Find the Other Acute Angle',
    metaDescription:
      'Find the missing acute angle in a right triangle from the known acute angle using A + B = 90 degrees, with formula, diagram, example, and checks.',
    formulaSlug: 'angle-sum-exact',
    headerSummary:
      'Find the other acute angle in a right triangle when one acute angle is already known.',
    calculator: {
      heading: 'Calculate Missing Angle',
      outputLabel: 'Angle B',
      fields: [{ key: 'A', label: 'Angle A (deg)', min: 0, unit: 'deg' }]
    },
    howItWorks: {
      h2: 'How This Missing Angle Calculator Works',
      paragraphs: [
        'Every right triangle has one 90 degree angle, so the two remaining acute angles must add to 90 degrees. If angle A is known, the calculator subtracts it from 90 to find angle B.',
        'This is the fastest angle method when you already have one acute angle. It is also a useful check after solving angle A from sine, cosine, or tangent.'
      ],
      cards: [
        { label: 'Known value', value: 'Angle A in degrees' },
        { label: 'Finds', value: 'Angle B in degrees' },
        { label: 'Formula', value: 'B = 90 - A' },
        { label: 'Valid input', value: 'Angle A must be greater than 0 and less than 90' }
      ]
    },
    formula: {
      h2: 'Missing Angle Formula',
      display: 'B = 90^\\circ - A',
      paragraphs: [
        'A triangle always contains 180 degrees total. In a right triangle, one angle is already 90 degrees, leaving 90 degrees to be shared by the two acute angles.',
        'That means A + B = 90 degrees. Rearranging gives B = 90 degrees - A.'
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram for Missing Angles',
      intro:
        'The diagram highlights the two acute angles. When one acute angle is known, the other is its complement to 90 degrees.',
      activeSides: [],
      activeAngles: ['A', 'B'],
      focusLabel: 'A + B = 90 degrees',
      focusDetail:
        'Subtract the known acute angle from 90 degrees to find the other acute angle.',
      notes: [
        'Angle B is at the top-left vertex in this diagram.',
        'Angle A is at the bottom-right vertex.',
        'Both acute angles must be greater than 0 and less than 90 degrees.'
      ]
    },
    howToSteps: [
      'Enter the known acute angle as angle A.',
      'Confirm that the value is greater than 0 and less than 90 degrees.',
      'Click Calculate.',
      'Read the missing angle B in degrees.',
      'Check that A + B equals 90 degrees.'
    ],
    example: {
      h2: 'Example: Find the Missing Acute Angle',
      intro: 'Suppose angle A = 36.87 degrees.',
      steps: [
        'B = 90 - A',
        'B = 90 - 36.87',
        'B = 53.13 degrees'
      ],
      answer:
        'The missing acute angle B is approximately 53.13 degrees, and the two acute angles sum to 90 degrees.'
    },
    resultMeaning: [
      'The output is the other acute angle in the same right triangle. It is not the right angle, because the right angle is fixed at 90 degrees.',
      'A smaller known angle gives a larger missing angle, and a larger known angle gives a smaller missing angle.'
    ],
    whenToUse: {
      intro: 'Use this missing angle calculator when:',
      items: [
        'One acute angle is already known.',
        'You want to check that two acute angles add to 90 degrees.',
        'You solved angle A from a side ratio and need angle B.',
        'You are completing a right-triangle diagram for homework, drafting, or layout.'
      ]
    },
    commonMistakes: {
      intro: 'Watch for these missing-angle mistakes:',
      items: [
        'Subtracting from 180 instead of 90 after the right angle is already accounted for.',
        'Entering the 90 degree angle as angle A.',
        'Using an acute angle value that is 90 or greater.',
        'Rounding angle A too early before finding angle B.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Angle From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Angle From Tangent Calculator' }
    ],
    faqs: [
      {
        question: 'How do I find the missing angle in a right triangle?',
        answer:
          'Subtract the known acute angle from 90 degrees. The two acute angles in a right triangle always add to 90 degrees.'
      },
      {
        question: 'Why do I subtract from 90 instead of 180?',
        answer:
          'A right triangle already has one 90 degree angle. Since all triangle angles total 180 degrees, the two acute angles share the remaining 90 degrees.'
      },
      {
        question: 'Can angle A be 90 degrees?',
        answer:
          'No. Angle A on this calculator is one of the acute angles, so it must be greater than 0 and less than 90 degrees.'
      }
    ]
  }
];

export const FOCUSED_ANGLE_CALCULATOR_PAGE_SLUGS =
  FOCUSED_ANGLE_CALCULATOR_PAGES.map((page) => page.slug);

export const FOCUSED_ANGLE_LEGACY_REDIRECTS: Record<string, string> = {
  'angle-from-sine': '/right-triangle-angle-from-sine-calculator/',
  'angle-from-cosine': '/right-triangle-angle-from-cosine-calculator/',
  'angle-from-tangent': '/right-triangle-angle-from-tangent-calculator/',
  'angle-sum-exact': '/right-triangle-missing-angle-calculator/',
  'angle-b-exact': '/right-triangle-missing-angle-calculator/'
};

export const FOCUSED_ANGLE_LEGACY_REDIRECT_SLUGS = Object.keys(
  FOCUSED_ANGLE_LEGACY_REDIRECTS
);

export function getFocusedAngleLegacyRedirect(slug: string): string | undefined {
  return FOCUSED_ANGLE_LEGACY_REDIRECTS[slug];
}

export function getFocusedAngleCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): FocusedAngleCalculatorPage | undefined {
  void locale;
  return FOCUSED_ANGLE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
