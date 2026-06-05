import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';

export type FocusedRadiusCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  calculatorKind: string;
  calculator: {
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  modes: {
    formulaSlug: string;
    label: string;
    heading: string;
  }[];
  placeholderSections: string[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

export const RADIUS_PLACEHOLDER_TEXT = 'Content will be added soon.';

export const FOCUSED_RADIUS_CALCULATOR_PAGES: FocusedRadiusCalculatorPage[] = [
  {
    slug: 'right-triangle-inradius-calculator',
    url: '/right-triangle-inradius-calculator/',
    h1: 'Right Triangle Inradius Calculator',
    metaTitle: 'Right Triangle Inradius Calculator | Find r = (a + b − c) / 2',
    metaDescription:
      'Use this right triangle inradius calculator to find inradius r from leg a, leg b, and hypotenuse c.',
    calculatorKind: 'inradius_strict',
    calculator: {
      outputLabel: 'Inradius r',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    modes: [
      {
        formulaSlug: 'inradius',
        label: 'Inradius',
        heading: 'Calculate Inradius r'
      },
      {
        formulaSlug: 'radius-r',
        label: 'Radius Relation r',
        heading: 'Calculate Radius Relation r'
      }
    ],
    placeholderSections: [
      'Formula',
      'How to Use This Calculator',
      'Example',
      'Radius Relation r',
      'Related Calculators',
      'FAQs'
    ],
    relatedLinks: [
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      {
        href: '/right-triangle-circumradius-calculator/',
        label: 'Right Triangle Circumradius Calculator'
      },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'Right Triangle Semiperimeter Calculator'
      },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ]
  },
  {
    slug: 'right-triangle-circumradius-calculator',
    url: '/right-triangle-circumradius-calculator/',
    h1: 'Right Triangle Circumradius Calculator',
    metaTitle: 'Right Triangle Circumradius Calculator | Find R = c / 2',
    metaDescription:
      'Use this right triangle circumradius calculator to find circumradius R from hypotenuse c.',
    calculatorKind: 'circumradius',
    calculator: {
      outputLabel: 'Circumradius R',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    },
    modes: [
      {
        formulaSlug: 'circumradius',
        label: 'Circumradius',
        heading: 'Calculate Circumradius R'
      },
      {
        formulaSlug: 'radius-R-cap',
        label: 'Radius Relation R',
        heading: 'Calculate Radius Relation R'
      }
    ],
    placeholderSections: [
      'Formula',
      'How to Use This Calculator',
      'Example',
      'Radius Relation R',
      'Related Calculators',
      'FAQs'
    ],
    relatedLinks: [
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      {
        href: '/right-triangle-inradius-calculator/',
        label: 'Right Triangle Inradius Calculator'
      },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' }
    ]
  }
];

export const FOCUSED_RADIUS_CALCULATOR_PAGE_SLUGS =
  FOCUSED_RADIUS_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedRadiusCalculatorPage(slug: string) {
  return FOCUSED_RADIUS_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
