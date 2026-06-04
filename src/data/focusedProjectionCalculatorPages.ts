import type { RightTriangleFormula } from 'src/data/rightTriangleFormulas';

export type FocusedProjectionCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  calculatorHeading: string;
  formula: RightTriangleFormula;
  placeholderSections: string[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

const PLACEHOLDER_TEXT = 'Content will be added soon.';

const placeholderSections = [
  'Formula',
  'How to Use This Calculator',
  'Example',
  'Related Calculators',
  'FAQs'
];

export const FOCUSED_PROJECTION_CALCULATOR_PAGES: FocusedProjectionCalculatorPage[] = [
  {
    slug: 'right-triangle-projection-p-calculator',
    url: '/right-triangle-projection-p-calculator/',
    h1: 'Right Triangle Projection p Calculator',
    metaTitle: 'Right Triangle Projection p Calculator | Find p = a² / c',
    metaDescription:
      'Use this right triangle projection p calculator to find projection p on the hypotenuse from leg a and hypotenuse c.',
    calculatorHeading: 'Right Triangle Projection p Calculator',
    formula: {
      slug: 'right-triangle-projection-p',
      title: 'Projection p',
      category: 'Advanced Relations',
      expression: 'p = \\frac{a^2}{c}',
      description: 'Find projection p from leg a and hypotenuse c.',
      variables: ['a = leg', 'c = hypotenuse', 'p = projection'],
      notes: ['a must be greater than 0.', 'c must be greater than 0.', 'c must be greater than a.'],
      calculator: {
        kind: 'projection_p_strict',
        outputLabel: 'Projection p',
        outputUnit: 'units',
        fields: [
          { key: 'a', label: 'Leg a', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ]
      }
    },
    placeholderSections,
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'Right Triangle Projection Calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'Right Triangle Projection q Calculator' },
      { href: '/right-triangle-leg-a-from-projection-calculator/', label: 'Right Triangle Leg a From Projection Calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'Right Triangle Altitude From Projections Calculator' }
    ]
  },
  {
    slug: 'right-triangle-projection-q-calculator',
    url: '/right-triangle-projection-q-calculator/',
    h1: 'Right Triangle Projection q Calculator',
    metaTitle: 'Right Triangle Projection q Calculator | Find q = b² / c',
    metaDescription:
      'Use this right triangle projection q calculator to find projection q on the hypotenuse from leg b and hypotenuse c.',
    calculatorHeading: 'Right Triangle Projection q Calculator',
    formula: {
      slug: 'right-triangle-projection-q',
      title: 'Projection q',
      category: 'Advanced Relations',
      expression: 'q = \\frac{b^2}{c}',
      description: 'Find projection q from leg b and hypotenuse c.',
      variables: ['b = leg', 'c = hypotenuse', 'q = projection'],
      notes: ['b must be greater than 0.', 'c must be greater than 0.', 'c must be greater than b.'],
      calculator: {
        kind: 'projection_q_strict',
        outputLabel: 'Projection q',
        outputUnit: 'units',
        fields: [
          { key: 'b', label: 'Leg b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ]
      }
    },
    placeholderSections,
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'Right Triangle Projection Calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'Right Triangle Projection p Calculator' },
      { href: '/right-triangle-leg-b-from-projection-calculator/', label: 'Right Triangle Leg b From Projection Calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'Right Triangle Altitude From Projections Calculator' }
    ]
  },
  {
    slug: 'right-triangle-leg-a-from-projection-calculator',
    url: '/right-triangle-leg-a-from-projection-calculator/',
    h1: 'Right Triangle Leg a From Projection Calculator',
    metaTitle: 'Right Triangle Leg a From Projection Calculator | Find a = √(c × p)',
    metaDescription:
      'Use this right triangle leg a from projection calculator to find leg a from hypotenuse c and projection p.',
    calculatorHeading: 'Right Triangle Leg a From Projection Calculator',
    formula: {
      slug: 'right-triangle-leg-a-from-projection',
      title: 'Leg a From Projection',
      category: 'Advanced Relations',
      expression: 'a^2 = c \\times p\\quad a = \\sqrt{c \\times p}',
      description: 'Find leg a from hypotenuse c and projection p.',
      variables: ['c = hypotenuse', 'p = projection', 'a = leg'],
      notes: ['c must be greater than 0.', 'p must be greater than 0.', 'p must be less than c.'],
      calculator: {
        kind: 'leg_from_cp_strict',
        outputLabel: 'Leg a',
        outputUnit: 'units',
        fields: [
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'p', label: 'Projection p', min: 0 }
        ]
      }
    },
    placeholderSections,
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'Right Triangle Projection Calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'Right Triangle Projection p Calculator' },
      { href: '/right-triangle-leg-b-from-projection-calculator/', label: 'Right Triangle Leg b From Projection Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ]
  },
  {
    slug: 'right-triangle-leg-b-from-projection-calculator',
    url: '/right-triangle-leg-b-from-projection-calculator/',
    h1: 'Right Triangle Leg b From Projection Calculator',
    metaTitle: 'Right Triangle Leg b From Projection Calculator | Find b = √(c × q)',
    metaDescription:
      'Use this right triangle leg b from projection calculator to find leg b from hypotenuse c and projection q.',
    calculatorHeading: 'Right Triangle Leg b From Projection Calculator',
    formula: {
      slug: 'right-triangle-leg-b-from-projection',
      title: 'Leg b From Projection',
      category: 'Advanced Relations',
      expression: 'b^2 = c \\times q\\quad b = \\sqrt{c \\times q}',
      description: 'Find leg b from hypotenuse c and projection q.',
      variables: ['c = hypotenuse', 'q = projection', 'b = leg'],
      notes: ['c must be greater than 0.', 'q must be greater than 0.', 'q must be less than c.'],
      calculator: {
        kind: 'leg_from_cq_strict',
        outputLabel: 'Leg b',
        outputUnit: 'units',
        fields: [
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'q', label: 'Projection q', min: 0 }
        ]
      }
    },
    placeholderSections,
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'Right Triangle Projection Calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'Right Triangle Projection q Calculator' },
      { href: '/right-triangle-leg-a-from-projection-calculator/', label: 'Right Triangle Leg a From Projection Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ]
  },
  {
    slug: 'right-triangle-hypotenuse-from-projections-calculator',
    url: '/right-triangle-hypotenuse-from-projections-calculator/',
    h1: 'Right Triangle Hypotenuse From Projections Calculator',
    metaTitle: 'Right Triangle Hypotenuse From Projections Calculator | Find c = p + q',
    metaDescription:
      'Use this right triangle hypotenuse from projections calculator to find hypotenuse c from projection segments p and q.',
    calculatorHeading: 'Right Triangle Hypotenuse From Projections Calculator',
    formula: {
      slug: 'right-triangle-hypotenuse-from-projections',
      title: 'Hypotenuse From Projections',
      category: 'Advanced Relations',
      expression: 'c = p + q',
      description: 'Find hypotenuse c from projection p and projection q.',
      variables: ['p = projection', 'q = projection', 'c = hypotenuse'],
      notes: ['p must be greater than 0.', 'q must be greater than 0.'],
      calculator: {
        kind: 'hyp_from_pq',
        outputLabel: 'Hypotenuse c',
        outputUnit: 'units',
        fields: [
          { key: 'p', label: 'Projection p', min: 0 },
          { key: 'q', label: 'Projection q', min: 0 }
        ]
      }
    },
    placeholderSections,
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'Right Triangle Projection Calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'Right Triangle Projection p Calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'Right Triangle Projection q Calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'Right Triangle Altitude From Projections Calculator' }
    ]
  }
];

export const FOCUSED_PROJECTION_CALCULATOR_PAGE_SLUGS =
  FOCUSED_PROJECTION_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedProjectionCalculatorPage(
  slug: string
): FocusedProjectionCalculatorPage | undefined {
  return FOCUSED_PROJECTION_CALCULATOR_PAGES.find((page) => page.slug === slug);
}

export { PLACEHOLDER_TEXT as FOCUSED_PROJECTION_PLACEHOLDER_TEXT };
