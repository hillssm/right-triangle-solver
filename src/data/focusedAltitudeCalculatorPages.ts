import type { RightTriangleFormula } from 'src/data/rightTriangleFormulas';

export type FocusedAltitudeCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  calculatorHeading: string;
  formula: RightTriangleFormula;
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

export const FOCUSED_ALTITUDE_CALCULATOR_PAGES: FocusedAltitudeCalculatorPage[] = [
  {
    slug: 'right-triangle-altitude-from-sides-calculator',
    url: '/right-triangle-altitude-from-sides-calculator/',
    h1: 'Right Triangle Altitude From Sides Calculator',
    metaTitle: 'Right Triangle Altitude From Sides Calculator | Find h = (a \u00D7 b) / c',
    metaDescription:
      'Use this right triangle altitude from sides calculator to find altitude h from leg a, leg b, and hypotenuse c.',
    calculatorHeading: 'Calculate Altitude h From Sides',
    formula: {
      slug: 'right-triangle-altitude-from-sides',
      title: 'Altitude From Sides',
      category: 'Advanced Relations',
      expression: 'h = \\frac{a \\times b}{c}',
      description: 'Find altitude h from leg a, leg b, and hypotenuse c.',
      variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'h = altitude'],
      notes: [],
      calculator: {
        kind: 'altitude_strict',
        outputLabel: 'Altitude h',
        outputUnit: 'units',
        fields: [
          { key: 'a', label: 'Leg a', min: 0 },
          { key: 'b', label: 'Leg b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ]
      }
    },
    relatedLinks: [
      {
        href: '/right-triangle-altitude-calculator/',
        label: 'Right Triangle Altitude Calculator'
      },
      {
        href: '/right-triangle-altitude-from-projections-calculator/',
        label: 'Right Triangle Altitude From Projections Calculator'
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator'
      },
      {
        href: '/right-triangle-area-from-altitude-calculator/',
        label: 'Right Triangle Area From Altitude Calculator'
      }
    ]
  },
  {
    slug: 'right-triangle-altitude-from-projections-calculator',
    url: '/right-triangle-altitude-from-projections-calculator/',
    h1: 'Right Triangle Altitude From Projections Calculator',
    metaTitle: 'Right Triangle Altitude From Projections Calculator | Find h = \u221A(p \u00D7 q)',
    metaDescription:
      'Use this right triangle altitude from projections calculator to find altitude h from hypotenuse projections p and q.',
    calculatorHeading: 'Calculate Altitude h From Projections',
    formula: {
      slug: 'right-triangle-altitude-from-projections',
      title: 'Altitude From Projections',
      category: 'Advanced Relations',
      expression: 'h = \\sqrt{p \\times q}\\quad\\left(h^2 = p \\times q\\right)',
      description: 'Find altitude h from hypotenuse projections p and q.',
      variables: ['p = projection', 'q = projection', 'h = altitude'],
      notes: [],
      calculator: {
        kind: 'altitude_pq',
        outputLabel: 'Altitude h',
        outputUnit: 'units',
        fields: [
          { key: 'p', label: 'Projection p', min: 0 },
          { key: 'q', label: 'Projection q', min: 0 }
        ]
      }
    },
    relatedLinks: [
      {
        href: '/right-triangle-altitude-calculator/',
        label: 'Right Triangle Altitude Calculator'
      },
      {
        href: '/right-triangle-altitude-from-sides-calculator/',
        label: 'Right Triangle Altitude From Sides Calculator'
      },
      {
        href: '/right-triangle-projection-calculator/',
        label: 'Right Triangle Projection Calculator'
      },
      {
        href: '/right-triangle-area-from-altitude-calculator/',
        label: 'Right Triangle Area From Altitude Calculator'
      }
    ]
  }
];

export const FOCUSED_ALTITUDE_CALCULATOR_PAGE_SLUGS =
  FOCUSED_ALTITUDE_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedAltitudeCalculatorPage(
  slug: string
): FocusedAltitudeCalculatorPage | undefined {
  return FOCUSED_ALTITUDE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
