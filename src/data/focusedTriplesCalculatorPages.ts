export type FocusedTriplesCalculatorMode = {
  id: string;
  label: string;
  heading: string;
  fields: { key: string; label: string; min?: number }[];
  outputLabels: string[];
  formulas: string[];
  validation: string;
};

export type FocusedTriplesCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  modes: FocusedTriplesCalculatorMode[];
  placeholderSections: {
    h2: string;
    text: string;
  }[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

export const focusedTriplesCalculatorPages: FocusedTriplesCalculatorPage[] = [
  {
    slug: 'pythagorean-triples-calculator',
    url: '/pythagorean-triples-calculator/',
    h1: 'Pythagorean Triples Calculator',
    metaTitle: 'Pythagorean Triples Calculator | Check and Generate Right Triangle Triples',
    metaDescription: 'Use this Pythagorean triples calculator to check or generate whole-number right triangle side lengths.',
    modes: [
      {
        id: 'check-triple',
        label: 'Check a Pythagorean triple',
        heading: 'Check a Pythagorean triple',
        fields: [
          { key: 'a', label: 'Side a', min: 0 },
          { key: 'b', label: 'Side b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ],
        outputLabels: ['Result'],
        formulas: ['a^2 + b^2 = c^2'],
        validation: 'a, b, and c must be positive numbers. c should be the largest side.'
      },
      {
        id: 'generate-triple',
        label: 'Generate Pythagorean triples',
        heading: 'Generate Pythagorean triples',
        fields: [
          { key: 'm', label: 'm', min: 1 },
          { key: 'n', label: 'n', min: 1 }
        ],
        outputLabels: ['a', 'b', 'c'],
        formulas: ['a = m^2 - n^2', 'b = 2mn', 'c = m^2 + n^2'],
        validation: 'm must be greater than n. m and n must be positive integers.'
      }
    ],
    placeholderSections: [
      { h2: 'Formula', text: 'Content will be added soon.' },
      { h2: 'How to Use This Calculator', text: 'Content will be added soon.' },
      { h2: 'Example', text: 'Content will be added soon.' },
      { h2: 'Related Calculators', text: 'Content will be added soon.' },
      { h2: 'FAQs', text: 'Content will be added soon.' }
    ],
    relatedLinks: [
      { href: '/3-4-5-triangle-calculator/', label: '3 4 5 Triangle Calculator' },
      { href: '/5-12-13-triangle-calculator/', label: '5 12 13 Triangle Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' }
    ]
  },
  {
    slug: '3-4-5-triangle-calculator',
    url: '/3-4-5-triangle-calculator/',
    h1: '3 4 5 Triangle Calculator',
    metaTitle: '3 4 5 Triangle Calculator | Solve the 3 4 5 Right Triangle',
    metaDescription: 'Use this 3 4 5 triangle calculator to scale a 3 4 5 right triangle and find sides, area, and perimeter.',
    modes: [
      {
        id: 'scale-3-4-5',
        label: 'Scale 3-4-5 Triangle',
        heading: 'Scale 3-4-5 Triangle',
        fields: [
          { key: 'k', label: 'Scale factor k', min: 0 }
        ],
        outputLabels: ['Side a', 'Side b', 'Hypotenuse c', 'Area', 'Perimeter'],
        formulas: ['a = 3k', 'b = 4k', 'c = 5k', 'Area = (a \\times b) / 2', 'P = a + b + c'],
        validation: 'k must be greater than 0.'
      }
    ],
    placeholderSections: [
      { h2: 'Formula', text: 'Content will be added soon.' },
      { h2: 'How to Use This Calculator', text: 'Content will be added soon.' },
      { h2: 'Example', text: 'Content will be added soon.' },
      { h2: 'Related Calculators', text: 'Content will be added soon.' },
      { h2: 'FAQs', text: 'Content will be added soon.' }
    ],
    relatedLinks: [
      { href: '/pythagorean-triples-calculator/', label: 'Pythagorean Triples Calculator' },
      { href: '/5-12-13-triangle-calculator/', label: '5 12 13 Triangle Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' }
    ]
  },
  {
    slug: '5-12-13-triangle-calculator',
    url: '/5-12-13-triangle-calculator/',
    h1: '5 12 13 Triangle Calculator',
    metaTitle: '5 12 13 Triangle Calculator | Solve the 5 12 13 Right Triangle',
    metaDescription: 'Use this 5 12 13 triangle calculator to scale a 5 12 13 right triangle and find sides, area, and perimeter.',
    modes: [
      {
        id: 'scale-5-12-13',
        label: 'Scale 5-12-13 Triangle',
        heading: 'Scale 5-12-13 Triangle',
        fields: [
          { key: 'k', label: 'Scale factor k', min: 0 }
        ],
        outputLabels: ['Side a', 'Side b', 'Hypotenuse c', 'Area', 'Perimeter'],
        formulas: ['a = 5k', 'b = 12k', 'c = 13k', 'Area = (a \\times b) / 2', 'P = a + b + c'],
        validation: 'k must be greater than 0.'
      }
    ],
    placeholderSections: [
      { h2: 'Formula', text: 'Content will be added soon.' },
      { h2: 'How to Use This Calculator', text: 'Content will be added soon.' },
      { h2: 'Example', text: 'Content will be added soon.' },
      { h2: 'Related Calculators', text: 'Content will be added soon.' },
      { h2: 'FAQs', text: 'Content will be added soon.' }
    ],
    relatedLinks: [
      { href: '/pythagorean-triples-calculator/', label: 'Pythagorean Triples Calculator' },
      { href: '/3-4-5-triangle-calculator/', label: '3 4 5 Triangle Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' }
    ]
  },
  {
    slug: 'similar-right-triangles-calculator',
    url: '/similar-right-triangles-calculator/',
    h1: 'Similar Right Triangles Calculator',
    metaTitle: 'Similar Right Triangles Calculator | Find Missing Sides and Scale Factor',
    metaDescription: 'Use this similar right triangles calculator to find missing sides, matching side ratios, and scale factor.',
    modes: [
      {
        id: 'find-scale-factor',
        label: 'Find scale factor',
        heading: 'Find scale factor',
        fields: [
          { key: 'original_side', label: 'Original side', min: 0 },
          { key: 'similar_side', label: 'Similar side', min: 0 }
        ],
        outputLabels: ['Scale factor k'],
        formulas: ['k = \\text{similar side} / \\text{original side}'],
        validation: 'Both values must be greater than 0.'
      },
      {
        id: 'find-similar-side',
        label: 'Find missing similar side',
        heading: 'Find missing similar side',
        fields: [
          { key: 'original_side', label: 'Original side', min: 0 },
          { key: 'k', label: 'Scale factor k', min: 0 }
        ],
        outputLabels: ['Similar side'],
        formulas: ['\\text{similar side} = \\text{original side} \\times k'],
        validation: 'Original side and k must be greater than 0.'
      },
      {
        id: 'find-original-side',
        label: 'Find original side',
        heading: 'Find original side',
        fields: [
          { key: 'similar_side', label: 'Similar side', min: 0 },
          { key: 'k', label: 'Scale factor k', min: 0 }
        ],
        outputLabels: ['Original side'],
        formulas: ['\\text{original side} = \\text{similar side} / k'],
        validation: 'Similar side and k must be greater than 0.'
      }
    ],
    placeholderSections: [
      { h2: 'Formula', text: 'Content will be added soon.' },
      { h2: 'How to Use This Calculator', text: 'Content will be added soon.' },
      { h2: 'Example', text: 'Content will be added soon.' },
      { h2: 'Related Calculators', text: 'Content will be added soon.' },
      { h2: 'FAQs', text: 'Content will be added soon.' }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/pythagorean-triples-calculator/', label: 'Pythagorean Triples Calculator' },
      { href: '/special-right-triangle-calculator/', label: 'Special Right Triangle Calculator' }
    ]
  }
];

export const FOCUSED_TRIPLES_CALCULATOR_PAGE_SLUGS = focusedTriplesCalculatorPages.map((page) => page.slug);

export function getFocusedTriplesCalculatorPage(slug: string) {
  return focusedTriplesCalculatorPages.find((page) => page.slug === slug);
}
