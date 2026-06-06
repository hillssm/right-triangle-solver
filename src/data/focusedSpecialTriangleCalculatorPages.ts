import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { localizeFocusedSpecialTriangleCalculatorPage } from 'src/data/focusedSpecialTriangleCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

export type FocusedSpecialTriangleCalculatorMode = {
  formulaSlug: string;
  label: string;
  heading: string;
  calculator?: {
    outputLabel?: string;
    outputUnit?: string;
    fields?: FormulaCalculatorField[];
  };
};

export type FocusedSpecialTriangleRelatedLink = {
  href: string;
  label: string;
};

export type FocusedSpecialTriangleCalculatorPage = {
  slug: string;
  url: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  parentLabel: string;
  parentPath: string;
  modes: FocusedSpecialTriangleCalculatorMode[];
  intro: string[];
  calculatorNote: string;
  formulaSection: {
    formulas: string[];
  };
  diagram: {
    kind: '45-45-90' | '30-60-90';
    keyLabel: string;
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
  relatedLinks: FocusedSpecialTriangleRelatedLink[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  ui?: FocusedSpecialTriangleCalculatorUi;
};

export type FocusedSpecialTriangleCalculatorUi = {
  modeTitle: string;
  modeSelectLabel: string;
  formulaHeading: string;
  diagramHeading: string;
  howToUseHeading: string;
  examplesHeading: string;
  resultMeaningHeading: string;
  sideRatioHeading: string;
  useCasesHeading: string;
  commonMistakesHeading: string;
  relatedHeading: string;
  faqHeading: string;
  faqDescription: string;
  diagramAriaLabel45: string;
  diagramAriaLabel30: string;
  calculatorMessages: {
    positive: string;
    invalid: string;
  };
};

export const focusedSpecialTriangleCalculatorPages: FocusedSpecialTriangleCalculatorPage[] = [
  {
    slug: '45-45-90-triangle-calculator',
    url: '/45-45-90-triangle-calculator/',
    primaryKeyword: '45 45 90 Triangle Calculator',
    secondaryKeywords: [
      '45-45-90 triangle calculator',
      '45 45 90 calculator',
      '45 45 90 triangle formula',
      '45 45 90 triangle ratio',
      '45 45 90 triangle sides',
      '45 45 90 hypotenuse calculator',
      '45 45 90 leg calculator',
      '45 45 90 missing side calculator',
      '45 45 90 area calculator',
      '45 45 90 perimeter calculator',
      'isosceles right triangle calculator',
      'isosceles right triangle formula',
      'isosceles right triangle hypotenuse',
    ],
    h1: '45 45 90 Triangle Calculator',
    metaTitle: '45 45 90 Triangle Calculator | Find Sides, Area and Perimeter',
    metaDescription:
      'Use this 45 45 90 triangle calculator to find the hypotenuse, leg, area, and perimeter of an isosceles right triangle with formulas and steps.',
    badge: 'Special Right Triangle Calculator',
    parentLabel: 'Special Right Triangle Calculator',
    parentPath: '/special-right-triangle-calculator/',
    modes: [
      {
        formulaSlug: 'c-a-rt2',
        label: 'Find hypotenuse from leg',
        heading: 'Find hypotenuse from leg',
      },
      {
        formulaSlug: 'a-c-rt2',
        label: 'Find leg from hypotenuse',
        heading: 'Find leg from hypotenuse',
      },
      {
        formulaSlug: 'area-45-leg',
        label: 'Find area from leg',
        heading: 'Find area from leg',
      },
      {
        formulaSlug: 'perimeter-45-leg',
        label: 'Find perimeter from leg',
        heading: 'Find perimeter from leg',
      },
    ],
    intro: [
      'Use this 45-45-90 triangle calculator to quickly find the hypotenuse, leg, area, and perimeter of any isosceles right triangle using standard 45 45 90 triangle formulas and ratios.',
    ],
    calculatorNote: 'All input values must be greater than 0.',
    formulaSection: {
      formulas: [
        'c = a \\times \\sqrt{2}',
        'a = \\frac{c}{\\sqrt{2}}',
        '\\text{Area} = \\frac{a^2}{2}',
        'P = 2a + a\\sqrt{2}',
      ],
    },
    diagram: {
      kind: '45-45-90',
      keyLabel: 'Triangle Diagram Key',
      notes: [
        'Leg a represents the two equal sides of the isosceles right triangle.',
        'Hypotenuse c is the longest side opposite the 90° angle.',
        'Both acute angles are exactly 45 degrees.'
      ],
    },
    howToUse: [
      'Choose the 45 45 90 calculator mode based on what you already know.',
      'Enter the known value (either the leg or the hypotenuse).',
      'Ensure your input is greater than 0.',
      'Read the calculated result directly from the isosceles right triangle calculator output field.',
    ],
    example: [
      {
        title: 'Example 1: Find hypotenuse when a = 5.',
        steps: ['c = a \\times \\sqrt{2}', 'c = 5 \\times \\sqrt{2}', 'c \\approx 7.071'],
      },
      {
        title: 'Example 2: Find leg when c = 10.',
        steps: ['a = \\frac{c}{\\sqrt{2}}', 'a = \\frac{10}{\\sqrt{2}}', 'a \\approx 7.071'],
      },
      {
        title: 'Example 3: Find area when a = 6.',
        steps: ['\\text{Area} = \\frac{a^2}{2}', '\\text{Area} = \\frac{6^2}{2}', '\\text{Area} = \\frac{36}{2}', '\\text{Area} = 18'],
      },
    ],
    resultMeaning: [
      'The results you get represent the physical dimensions of your triangle. A calculated leg or hypotenuse is the exact side length needed to maintain the 45-degree angles.',
      'Using our 45 45 90 area calculator and 45 45 90 perimeter calculator features helps you understand the total 2D space inside the triangle and the total distance around its edges.',
    ],
    sideRatio: [
      'The side ratio for every 45 45 90 triangle is a : a : a√2.',
      'This means both legs are always exactly the same length, and the hypotenuse is always the leg length multiplied by the square root of 2.',
    ],
    useCases: [
      'Solving geometry and trigonometry homework problems as a 45 45 90 missing side calculator.',
      'Calculating dimensions for square-based constructions or diagonal cuts with the isosceles right triangle formula.',
      'Designing isometric grids and drafting standard angles.',
      'Finding the shortest distance across a square diagonal using the 45 45 90 hypotenuse calculator.',
    ],
    commonMistakes: [
      'Using 30 60 90 ratios by mistake.',
      'Forgetting that both legs are equal.',
      'Using c = 2a instead of c = a × √2.',
      'Dividing by 2 instead of √2 when finding the leg.',
      'Forgetting to square the leg when calculating area.',
    ],
    relatedLinks: [
      {
        href: '/special-right-triangle-calculator/',
        label: 'special right triangle calculator',
      },
      {
        href: '/30-60-90-triangle-calculator/',
        label: '30 60 90 triangle calculator',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'right triangle side calculator',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'right triangle area calculator',
      },
      {
        href: '/right-triangle-perimeter-calculator/',
        label: 'right triangle perimeter calculator',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'pythagorean theorem calculator',
      },
    ],
    faqs: [
      {
        question: 'What is a 45 45 90 triangle calculator?',
        answer: 'It is a specific tool designed to solve an isosceles right triangle by finding the hypotenuse, leg, area, or perimeter based on the fixed side ratios.',
      },
      {
        question: 'What is an isosceles right triangle?',
        answer: 'An isosceles right triangle is a right triangle where both legs are identical in length, and both non-right angles are exactly 45 degrees.',
      },
      {
        question: 'What is the formula for the hypotenuse of a 45 45 90 triangle?',
        answer: 'The formula to find the hypotenuse is c = a × √2, where a is the length of one leg.',
      },
      {
        question: 'What does the calculated area mean?',
        answer: 'The area result means the total amount of flat space contained inside the three sides of the triangle.',
      },
      {
        question: 'Can I find the leg if I only know the hypotenuse?',
        answer: 'Yes, you can easily find the leg by taking the hypotenuse and dividing it by the square root of 2.',
      },
      {
        question: 'Why are the legs always equal?',
        answer: 'Because the opposite angles are both 45 degrees, the sides opposite those angles must also be equal to each other.',
      },
    ],
  },
  {
    slug: '30-60-90-triangle-calculator',
    url: '/30-60-90-triangle-calculator/',
    primaryKeyword: '30 60 90 Triangle Calculator',
    secondaryKeywords: [
      '30-60-90 triangle calculator',
      '30 60 90 calculator',
      '30 60 90 triangle formula',
      '30 60 90 triangle ratio',
      '30 60 90 triangle sides',
      '30 60 90 hypotenuse calculator',
      '30 60 90 short leg calculator',
      '30 60 90 long leg calculator',
      '30 60 90 missing side calculator',
      '30 60 90 area calculator',
      '30 60 90 perimeter calculator',
      '30 60 90 triangle solver',
      '30 60 90 side length calculator',
      '30 60 90 given hypotenuse',
      '30 60 90 given short leg',
      '30 60 90 given long leg',
    ],
    h1: '30 60 90 Triangle Calculator',
    metaTitle: '30 60 90 Triangle Calculator | Find Short Leg, Long Leg and Hypotenuse',
    metaDescription:
      'Use this 30 60 90 triangle calculator to find the short leg, long leg, hypotenuse, area, and perimeter with formulas and steps.',
    badge: 'Special Right Triangle Calculator',
    parentLabel: 'Special Right Triangle Calculator',
    parentPath: '/special-right-triangle-calculator/',
    modes: [
      {
        formulaSlug: 'long-a-rt3',
        label: 'Find long leg from short leg',
        heading: 'Find long leg from short leg',
      },
      {
        formulaSlug: 'c-2a',
        label: 'Find hypotenuse from short leg',
        heading: 'Find hypotenuse from short leg',
      },
      {
        formulaSlug: 'short-c-30',
        label: 'Find short leg from hypotenuse',
        heading: 'Find short leg from hypotenuse',
      },
      {
        formulaSlug: 'short-long-30',
        label: 'Find short leg from long leg',
        heading: 'Find short leg from long leg',
      },
      {
        formulaSlug: 'long-c-30',
        label: 'Find long leg from hypotenuse',
        heading: 'Find long leg from hypotenuse',
      },
      {
        formulaSlug: 'area-short-30',
        label: 'Find area from short leg',
        heading: 'Find area from short leg',
      },
      {
        formulaSlug: 'perimeter-short-30',
        label: 'Find perimeter from short leg',
        heading: 'Find perimeter from short leg',
      },
    ],
    intro: [
      'Use this 30-60-90 triangle calculator to easily find the short leg, long leg, hypotenuse, area, and perimeter using the exact 30 60 90 triangle formula and ratio.',
    ],
    calculatorNote: 'All input values must be greater than 0.',
    formulaSection: {
      formulas: [
        '\\text{long leg} = a \\times \\sqrt{3}',
        'c = 2a',
        'a = \\frac{c}{2}',
        'a = \\frac{\\text{long leg}}{\\sqrt{3}}',
        '\\text{long leg} = \\frac{c \\times \\sqrt{3}}{2}',
        '\\text{Area} = \\frac{\\text{short leg} \\times \\text{long leg}}{2}',
        'P = \\text{short leg} + \\text{long leg} + c',
      ],
    },
    diagram: {
      kind: '30-60-90',
      keyLabel: 'Triangle Diagram Key',
      notes: [
        'Short leg a is opposite the 30-degree angle.',
        'Long leg a√3 is opposite the 60-degree angle.',
        'Hypotenuse c is exactly twice the length of the short leg a.'
      ],
    },
    howToUse: [
      'Select what you want to find from the 30 60 90 calculator modes.',
      'Enter your known side length (short leg, long leg, or hypotenuse).',
      'Verify the number is positive and greater than zero.',
      'Check the result box for your perfectly scaled answer from our 30 60 90 triangle solver.',
    ],
    example: [
      {
        title: 'Example 1: Find long leg and hypotenuse when short leg a = 5.',
        steps: [
          '\\text{long leg} = a \\times \\sqrt{3}',
          '\\text{long leg} = 5 \\times \\sqrt{3}',
          '\\text{long leg} \\approx 8.660',
          'c = 2a',
          'c = 2 \\times 5',
          'c = 10',
        ],
      },
      {
        title: 'Example 2: Find short leg when c = 14.',
        steps: ['a = \\frac{c}{2}', 'a = \\frac{14}{2}', 'a = 7'],
      },
      {
        title: 'Example 3: Find long leg from hypotenuse c = 10.',
        steps: [
          '\\text{long leg} = \\frac{c \\times \\sqrt{3}}{2}',
          '\\text{long leg} = \\frac{10 \\times \\sqrt{3}}{2}',
          '\\text{long leg} = 5\\sqrt{3}',
          '\\text{long leg} \\approx 8.660',
        ],
      },
    ],
    resultMeaning: [
      'The calculated 30 60 90 triangle sides show exactly how long each part of the triangle needs to be to maintain the 30 and 60 degree angles. They are perfectly proportional.',
      'The 30 60 90 area calculator and 30 60 90 perimeter calculator results give you the exact bounded 2D size and the total outline length of your triangle.',
    ],
    sideRatio: [
      'The standard side ratio for a 30 60 90 triangle is a : a√3 : 2a.',
      'The short leg is a, the long leg is a times the square root of 3, and the hypotenuse is exactly twice the short leg.',
    ],
    useCases: [
      'Checking trigonometry assignments involving special right triangles as a 30 60 90 missing side calculator.',
      'Determining the height of an equilateral triangle using the 30 60 90 long leg calculator.',
      'Drafting angles and structural supports in engineering or architecture.',
      'Solving complex vector problems in physics with the 30 60 90 hypotenuse calculator.',
    ],
    commonMistakes: [
      'Mixing up the short leg and the long leg.',
      'Using √2 instead of √3 for the long leg calculation.',
      'Thinking the hypotenuse equals a√3 instead of 2a.',
      'Using the long leg value as the short leg by accident.',
      'Forgetting that the hypotenuse is exactly double the short leg.',
    ],
    relatedLinks: [
      {
        href: '/special-right-triangle-calculator/',
        label: 'special right triangle calculator',
      },
      {
        href: '/45-45-90-triangle-calculator/',
        label: '45 45 90 triangle calculator',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'right triangle side calculator',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'right triangle area calculator',
      },
      {
        href: '/right-triangle-perimeter-calculator/',
        label: 'right triangle perimeter calculator',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'pythagorean theorem calculator',
      },
    ],
    faqs: [
      {
        question: 'How do I use this 30 60 90 triangle calculator?',
        answer: 'Simply choose the value you want to calculate, enter the side you already know, and the tool will use the correct ratio to find the answer.',
      },
      {
        question: 'Which side is the short leg and the long leg?',
        answer: 'The short leg is always opposite the 30-degree angle, while the long leg is always opposite the 60-degree angle.',
      },
      {
        question: 'What is the formula to find the hypotenuse from the short leg?',
        answer: 'The formula is c = 2a, meaning the hypotenuse is exactly double the length of the short leg.',
      },
      {
        question: 'What does the long leg result mean?',
        answer: 'The long leg result tells you the exact height or base required to match the other sides while keeping the 30 and 60 degree angles intact.',
      },
      {
        question: 'Can I find the short leg from the long leg?',
        answer: 'Yes, you can find the short leg by dividing the long leg by the square root of 3.',
      },
      {
        question: 'Why do we multiply by the square root of 3?',
        answer: 'Multiplying by the square root of 3 is a fixed geometric rule for this triangle type, linking the short leg to the long leg mathematically.',
      },
    ],
  },
];

export const FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGES = focusedSpecialTriangleCalculatorPages;

export const FOCUSED_SPECIAL_TRIANGLE_CALCULATOR_PAGE_SLUGS =
  focusedSpecialTriangleCalculatorPages.map((page) => page.slug);

export function getFocusedSpecialTriangleCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
) {
  const page = focusedSpecialTriangleCalculatorPages.find((item) => item.slug === slug);

  if (!page) return undefined;

  return locale === DEFAULT_LOCALE
    ? page
    : localizeFocusedSpecialTriangleCalculatorPage(page, locale);
}
