import {
  RIGHT_TRIANGLE_FORMULAS,
  type RightTriangleFormula
} from 'src/data/rightTriangleFormulas';

export type GroupedCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  h2: [string, string];
  includedToolIds: number[];
  intent: string;
  relatedSlugs: string[];
};

export type GroupedCalculatorHubPage = {
  slug: string;
  url: string;
  h1: string;
  h2: [string, string];
  purpose: string;
};

export const TOOL_ID_TO_SLUG: Record<number, string> = {
  1: 'pythagorean-theorem',
  2: 'leg-from-hypotenuse-and-other-leg',
  3: 'other-leg-from-hypotenuse-and-leg',
  4: 'area-from-legs',
  5: 'perimeter',
  6: 'semiperimeter',
  7: 'sine-ratio',
  8: 'cosine-ratio',
  9: 'tangent-ratio',
  10: 'angle-from-sine',
  11: 'angle-from-cosine',
  12: 'angle-from-tangent',
  13: 'altitude-to-hypotenuse',
  14: 'projection-of-a-on-hypotenuse',
  15: 'projection-of-b-on-hypotenuse',
  16: 'inradius',
  17: 'circumradius',
  18: 'cotangent-exact',
  19: 'secant-exact',
  20: 'cosecant-exact',
  21: 'a-c-sin',
  22: 'b-c-cos',
  23: 'a-b-tan',
  24: 'b-a-tan',
  25: 'angle-sum-exact',
  26: 'angle-b-exact',
  27: 'area-sin-a',
  28: 'area-sin-b',
  29: 'area-rs',
  30: 'alt-rel-h',
  31: 'area-ch',
  32: 'h-sq-pq',
  33: 'a-sq-cp',
  34: 'b-sq-cq',
  35: 'pq-c',
  36: 'radius-r',
  37: 'sin2-cos2',
  38: 'tan-sin-cos',
  39: 'c-a-rt2',
  40: 'a-c-rt2',
  41: 'long-a-rt3',
  42: 'c-2a',
  43: 'radius-R-cap'
};

export const RIGHT_TRIANGLE_GROUPED_PAGES: GroupedCalculatorPage[] = [
  {
    slug: 'right-triangle-side-calculator',
    url: '/right-triangle-side-calculator/',
    h1: 'Right Triangle Side Calculator',
    h2: [
      'Find Hypotenuse or Missing Side',
      'Using the Pythagorean Theorem'
    ],
    includedToolIds: [1, 2, 3],
    intent: 'Find any missing side (a, b, or c).',
    relatedSlugs: [
      'right-triangle-angle-calculator',
      'right-triangle-side-from-angle-calculator',
      'right-triangle-measurements-calculator'
    ]
  },
  {
    slug: 'right-triangle-measurements-calculator',
    url: '/right-triangle-measurements-calculator/',
    h1: 'Right Triangle Area, Perimeter and Semiperimeter Calculator',
    h2: [
      'Calculate Area, Perimeter and Semiperimeter',
      'Right Triangle Measurement Formulas'
    ],
    includedToolIds: [4, 5, 6],
    intent: 'Calculate basic triangle properties.',
    relatedSlugs: [
      'right-triangle-area-calculator',
      'right-triangle-radius-calculator',
      'right-triangle-side-calculator'
    ]
  },
  {
    slug: 'right-triangle-trig-ratios-calculator',
    url: '/right-triangle-trig-ratios-calculator/',
    h1: 'Trigonometric Ratios Calculator (Sin, Cos, Tan, Sec, Csc, Cot)',
    h2: [
      'Calculate All Trigonometric Ratios',
      'Right Triangle Trigonometry Formulas'
    ],
    includedToolIds: [7, 8, 9, 18, 19, 20],
    intent: 'Calculate trig ratios.',
    relatedSlugs: [
      'right-triangle-angle-calculator',
      'right-triangle-side-from-angle-calculator',
      'special-right-triangle-calculator'
    ]
  },
  {
    slug: 'right-triangle-angle-calculator',
    url: '/right-triangle-angle-calculator/',
    h1: 'Right Triangle Angle Calculator',
    h2: [
      'Find Angle A or Angle B',
      'Using Sine, Cosine and Tangent'
    ],
    includedToolIds: [10, 11, 12, 25, 26],
    intent: 'Find triangle angles.',
    relatedSlugs: [
      'right-triangle-trig-ratios-calculator',
      'right-triangle-side-from-angle-calculator',
      'right-triangle-side-calculator'
    ]
  },
  {
    slug: 'right-triangle-side-from-angle-calculator',
    url: '/right-triangle-side-from-angle-calculator/',
    h1: 'Right Triangle Side Calculator Using Angle',
    h2: [
      'Find Missing Side Using Angles',
      'Trigonometric Side Formulas'
    ],
    includedToolIds: [21, 22, 23, 24],
    intent: 'Find side using angle.',
    relatedSlugs: [
      'right-triangle-angle-calculator',
      'right-triangle-trig-ratios-calculator',
      'right-triangle-side-calculator'
    ]
  },
  {
    slug: 'right-triangle-area-calculator',
    url: '/right-triangle-area-calculator/',
    h1: 'Right Triangle Area Calculator',
    h2: [
      'Calculate Area Using Different Methods',
      'Area Formulas for Right Triangles'
    ],
    includedToolIds: [4, 27, 28, 29, 31],
    intent: 'Find area using any method.',
    relatedSlugs: [
      'right-triangle-measurements-calculator',
      'right-triangle-altitude-calculator',
      'right-triangle-radius-calculator'
    ]
  },
  {
    slug: 'right-triangle-altitude-calculator',
    url: '/right-triangle-altitude-calculator/',
    h1: 'Right Triangle Height (Altitude) Calculator',
    h2: [
      'Find Altitude from Different Inputs',
      'Altitude Formulas and Relations'
    ],
    includedToolIds: [13, 30, 32],
    intent: 'Find triangle height.',
    relatedSlugs: [
      'right-triangle-area-calculator',
      'right-triangle-projection-calculator',
      'right-triangle-side-calculator'
    ]
  },
  {
    slug: 'right-triangle-projection-calculator',
    url: '/right-triangle-projection-calculator/',
    h1: 'Right Triangle Projection and Segment Calculator',
    h2: [
      'Find Hypotenuse Segments and Projections',
      'Projection Theorems'
    ],
    includedToolIds: [14, 15, 33, 34, 35],
    intent: 'Find projections and segment relations.',
    relatedSlugs: [
      'right-triangle-altitude-calculator',
      'right-triangle-side-calculator',
      'right-triangle-area-calculator'
    ]
  },
  {
    slug: 'right-triangle-radius-calculator',
    url: '/right-triangle-radius-calculator/',
    h1: 'Right Triangle Inradius and Circumradius Calculator',
    h2: [
      'Calculate Inradius and Circumradius',
      'Circle Relations in Right Triangles'
    ],
    includedToolIds: [16, 17, 36, 43],
    intent: 'Find triangle radii.',
    relatedSlugs: [
      'right-triangle-measurements-calculator',
      'right-triangle-area-calculator',
      'right-triangle-side-calculator'
    ]
  },
  {
    slug: 'special-right-triangle-calculator',
    url: '/special-right-triangle-calculator/',
    h1: 'Special Right Triangle Calculator',
    h2: [
      '30-60-90 and 45-45-90 Triangle Solver',
      'Quick Side Relationships'
    ],
    includedToolIds: [39, 40, 41, 42],
    intent: 'Solve special right triangles quickly.',
    relatedSlugs: [
      'right-triangle-side-calculator',
      'right-triangle-trig-ratios-calculator',
      'right-triangle-angle-calculator'
    ]
  }
];

export const RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE: GroupedCalculatorHubPage = {
  slug: 'right-triangle-calculator',
  url: '/right-triangle-calculator/',
  h1: 'Right Triangle Calculator',
  h2: [
    'Solve Any Right Triangle',
    'All-in-One Triangle Solver'
  ],
  purpose: 'Hub page linking to all grouped calculator pages.'
};

const FORMULA_BY_SLUG = new Map(
  RIGHT_TRIANGLE_FORMULAS.map((formula) => [formula.slug, formula])
);

export function getFormulaByToolId(toolId: number): RightTriangleFormula | undefined {
  const slug = TOOL_ID_TO_SLUG[toolId];
  if (!slug) return undefined;
  return FORMULA_BY_SLUG.get(slug);
}

export function getGroupedPageBySlug(slug: string): GroupedCalculatorPage | undefined {
  return RIGHT_TRIANGLE_GROUPED_PAGES.find((page) => page.slug === slug);
}

export function getGroupedPageFormulas(
  page: GroupedCalculatorPage
): RightTriangleFormula[] {
  return page.includedToolIds
    .map((toolId) => getFormulaByToolId(toolId))
    .filter((formula): formula is RightTriangleFormula => Boolean(formula));
}

export const GROUPED_PAGE_SLUGS = [
  RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.slug,
  ...RIGHT_TRIANGLE_GROUPED_PAGES.map((page) => page.slug)
];

export const LEGACY_FORMULA_REDIRECTS: Record<string, string> = {
  'pythagorean-theorem': '/right-triangle-side-calculator/',
  'leg-from-hypotenuse-and-other-leg': '/right-triangle-side-calculator/',
  'other-leg-from-hypotenuse-and-leg': '/right-triangle-side-calculator/',
  'area-from-legs': '/right-triangle-area-calculator/',
  'perimeter': '/right-triangle-measurements-calculator/',
  'semiperimeter': '/right-triangle-measurements-calculator/',
  'sine-ratio': '/right-triangle-trig-ratios-calculator/',
  'cosine-ratio': '/right-triangle-trig-ratios-calculator/',
  'tangent-ratio': '/right-triangle-trig-ratios-calculator/',
  'angle-from-sine': '/right-triangle-angle-calculator/',
  'angle-from-cosine': '/right-triangle-angle-calculator/',
  'angle-from-tangent': '/right-triangle-angle-calculator/',
  'altitude-to-hypotenuse': '/right-triangle-altitude-calculator/',
  'projection-of-a-on-hypotenuse': '/right-triangle-projection-calculator/',
  'projection-of-b-on-hypotenuse': '/right-triangle-projection-calculator/',
  'inradius': '/right-triangle-radius-calculator/',
  'circumradius': '/right-triangle-radius-calculator/',
  'cotangent-exact': '/right-triangle-trig-ratios-calculator/',
  'secant-exact': '/right-triangle-trig-ratios-calculator/',
  'cosecant-exact': '/right-triangle-trig-ratios-calculator/',
  'a-c-sin': '/right-triangle-side-from-angle-calculator/',
  'b-c-cos': '/right-triangle-side-from-angle-calculator/',
  'a-b-tan': '/right-triangle-side-from-angle-calculator/',
  'b-a-tan': '/right-triangle-side-from-angle-calculator/',
  'angle-sum-exact': '/right-triangle-angle-calculator/',
  'angle-b-exact': '/right-triangle-angle-calculator/',
  'area-sin-a': '/right-triangle-area-calculator/',
  'area-sin-b': '/right-triangle-area-calculator/',
  'area-rs': '/right-triangle-area-calculator/',
  'alt-rel-h': '/right-triangle-altitude-calculator/',
  'area-ch': '/right-triangle-area-calculator/',
  'h-sq-pq': '/right-triangle-altitude-calculator/',
  'a-sq-cp': '/right-triangle-projection-calculator/',
  'b-sq-cq': '/right-triangle-projection-calculator/',
  'pq-c': '/right-triangle-projection-calculator/',
  'radius-r': '/right-triangle-radius-calculator/',
  'sin2-cos2': '/right-triangle-trig-ratios-calculator/',
  'tan-sin-cos': '/right-triangle-trig-ratios-calculator/',
  'c-a-rt2': '/special-right-triangle-calculator/',
  'a-c-rt2': '/special-right-triangle-calculator/',
  'long-a-rt3': '/special-right-triangle-calculator/',
  'c-2a': '/special-right-triangle-calculator/',
  'radius-R-cap': '/right-triangle-radius-calculator/'
};

export function getLegacyRedirectUrlBySlug(slug: string): string | undefined {
  return LEGACY_FORMULA_REDIRECTS[slug];
}
