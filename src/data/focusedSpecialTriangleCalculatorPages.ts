export type FocusedSpecialTriangleCalculatorMode = {
  formulaSlug: string;
  label: string;
  heading: string;
};

export type FocusedSpecialTriangleRelatedLink = {
  href: string;
  label: string;
};

export type FocusedSpecialTriangleCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  parentLabel: string;
  parentPath: string;
  modes: FocusedSpecialTriangleCalculatorMode[];
  placeholderSections: string[];
  relatedLinks: FocusedSpecialTriangleRelatedLink[];
};

export const SPECIAL_TRIANGLE_PLACEHOLDER_TEXT = 'Content will be added soon.';

export const focusedSpecialTriangleCalculatorPages: FocusedSpecialTriangleCalculatorPage[] = [
  {
    slug: '45-45-90-triangle-calculator',
    url: '/45-45-90-triangle-calculator/',
    h1: '45 45 90 Triangle Calculator',
    metaTitle: '45 45 90 Triangle Calculator | Find Sides, Area and Perimeter',
    metaDescription:
      'Use this 45 45 90 triangle calculator to find the hypotenuse, leg, area, and perimeter of an isosceles right triangle.',
    badge: 'Special Right Triangle Calculator',
    parentLabel: 'Special Right Triangle Calculator',
    parentPath: '/special-right-triangle-calculator/',
    modes: [
      {
        formulaSlug: 'c-a-rt2',
        label: 'Find hypotenuse from leg',
        heading: 'Find hypotenuse from leg'
      },
      {
        formulaSlug: 'a-c-rt2',
        label: 'Find leg from hypotenuse',
        heading: 'Find leg from hypotenuse'
      },
      {
        formulaSlug: 'area-45-leg',
        label: 'Find area from leg',
        heading: 'Find area from leg'
      },
      {
        formulaSlug: 'perimeter-45-leg',
        label: 'Find perimeter from leg',
        heading: 'Find perimeter from leg'
      }
    ],
    placeholderSections: [
      'Formula',
      'How to Use This Calculator',
      'Example',
      'Related Calculators',
      'FAQs'
    ],
    relatedLinks: [
      {
        href: '/special-right-triangle-calculator/',
        label: 'Special Right Triangle Calculator'
      },
      {
        href: '/30-60-90-triangle-calculator/',
        label: '30 60 90 Triangle Calculator'
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator'
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator'
      },
      {
        href: '/right-triangle-perimeter-calculator/',
        label: 'Right Triangle Perimeter Calculator'
      }
    ]
  },
  {
    slug: '30-60-90-triangle-calculator',
    url: '/30-60-90-triangle-calculator/',
    h1: '30 60 90 Triangle Calculator',
    metaTitle: '30 60 90 Triangle Calculator | Find Short Leg, Long Leg and Hypotenuse',
    metaDescription:
      'Use this 30 60 90 triangle calculator to find the short leg, long leg, hypotenuse, area, and perimeter with formulas.',
    badge: 'Special Right Triangle Calculator',
    parentLabel: 'Special Right Triangle Calculator',
    parentPath: '/special-right-triangle-calculator/',
    modes: [
      {
        formulaSlug: 'long-a-rt3',
        label: 'Find long leg from short leg',
        heading: 'Find long leg from short leg'
      },
      {
        formulaSlug: 'c-2a',
        label: 'Find hypotenuse from short leg',
        heading: 'Find hypotenuse from short leg'
      },
      {
        formulaSlug: 'short-c-30',
        label: 'Find short leg from hypotenuse',
        heading: 'Find short leg from hypotenuse'
      },
      {
        formulaSlug: 'short-long-30',
        label: 'Find short leg from long leg',
        heading: 'Find short leg from long leg'
      },
      {
        formulaSlug: 'long-c-30',
        label: 'Find long leg from hypotenuse',
        heading: 'Find long leg from hypotenuse'
      },
      {
        formulaSlug: 'area-short-30',
        label: 'Find area from short leg',
        heading: 'Find area from short leg'
      },
      {
        formulaSlug: 'perimeter-short-30',
        label: 'Find perimeter from short leg',
        heading: 'Find perimeter from short leg'
      }
    ],
    placeholderSections: [
      'Formula',
      'How to Use This Calculator',
      'Example',
      'Related Calculators',
      'FAQs'
    ],
    relatedLinks: [
      {
        href: '/special-right-triangle-calculator/',
        label: 'Special Right Triangle Calculator'
      },
      {
        href: '/45-45-90-triangle-calculator/',
        label: '45 45 90 Triangle Calculator'
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator'
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator'
      },
      {
        href: '/right-triangle-perimeter-calculator/',
        label: 'Right Triangle Perimeter Calculator'
      }
    ]
  }
];

export const FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGES = focusedSpecialTriangleCalculatorPages;

export const FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGE_SLUGS =
  focusedSpecialTriangleCalculatorPages.map((page) => page.slug);

export function getFocusedSpecialTriangleCalculatorPage(slug: string) {
  return focusedSpecialTriangleCalculatorPages.find((page) => page.slug === slug);
}
