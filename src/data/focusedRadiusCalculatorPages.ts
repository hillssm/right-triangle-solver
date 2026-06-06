import type { FormulaCalculatorConfig } from './rightTriangleFormulas';

export type FocusedRadiusRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type FocusedRadiusCalculatorPage = {
  slug: string;
  url: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  calculatorKind: 'inradius' | 'circumradius';
  formulaSlug: 'inradius' | 'circumradius';
  calculator: FormulaCalculatorConfig;
  modes: string[];
  intro: string[];
  calculatorNote: string;
  formulaSection: {
    formula: string;
    paragraphs: string[];
    points: string[];
  };
  diagram: {
    kind: 'inradius' | 'circumradius';
    paragraphs: string[];
    notes: string[];
  };
  howToUse: string[];
  example: {
    given: string[];
    steps: string[];
    result: string;
  };
  resultMeaning: string[];
  radiusRelation: string[];
  useCases: string[];
  commonMistakes: string[];
  relatedLinks: FocusedRadiusRelatedLink[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const inradiusCalculator: FormulaCalculatorConfig = {
  kind: 'inradius_strict',
  outputLabel: 'Inradius r',
  outputUnit: 'units',
  fields: [
    {
      key: 'a',
      label: 'Leg a',
      min: 0,
    },
    {
      key: 'b',
      label: 'Leg b',
      min: 0,
    },
    {
      key: 'c',
      label: 'Hypotenuse c',
      min: 0,
    },
  ],
};

const circumradiusCalculator: FormulaCalculatorConfig = {
  kind: 'circumradius',
  outputLabel: 'Circumradius R',
  outputUnit: 'units',
  fields: [
    {
      key: 'c',
      label: 'Hypotenuse c',
      min: 0,
    },
  ],
};

export const focusedRadiusCalculatorPages: FocusedRadiusCalculatorPage[] = [
  {
    slug: 'right-triangle-inradius-calculator',
    url: '/right-triangle-inradius-calculator/',
    primaryKeyword: 'right triangle inradius calculator',
    secondaryKeywords: [
      'right triangle inradius',
      'inradius of right triangle',
      'right triangle incircle radius',
      'find r in a right triangle',
      'r = (a + b − c) / 2 calculator',
    ],
    h1: 'Right Triangle Inradius Calculator',
    metaTitle: 'Right Triangle Inradius Calculator | Find r = (a + b − c) / 2',
    metaDescription:
      'Use this right triangle inradius calculator to find inradius r from leg a, leg b, and hypotenuse c.',
    calculatorKind: 'inradius',
    formulaSlug: 'inradius',
    calculator: inradiusCalculator,
    modes: ['Inradius', 'Radius Relation r'],
    intro: [
      'Use this right triangle inradius calculator when you know leg a, leg b, and hypotenuse c and want to find the inradius r. The inradius is the radius of the incircle, the circle that fits inside the right triangle and touches all three sides.',
      'This focused calculator is helpful when a geometry problem gives all three side lengths and asks for the circle inside the triangle. It uses the standard right triangle inradius formula, so the side labeled c must be the hypotenuse.',
    ],
    calculatorNote:
      'Enter positive values for a, b, and c. The hypotenuse c should be the longest side, and the three side lengths should form a valid right triangle.',
    formulaSection: {
      formula: 'r = (a + b − c) / 2',
      paragraphs: [
        'For a right triangle, the inradius can be found directly from the two legs and the hypotenuse.',
        'Here, a and b are the legs of the right triangle, c is the hypotenuse, and r is the inradius.',
      ],
      points: [
        'Add the two legs: a + b.',
        'Subtract the hypotenuse: a + b − c.',
        'Divide the result by 2 to get the inradius r.',
      ],
    },
    diagram: {
      kind: 'inradius',
      paragraphs: [
        'The diagram shows the incircle inside a right triangle. The circle touches leg a, leg b, and hypotenuse c.',
      ],
      notes: [
        'The segment marked r is the inradius.',
        'The small square marks the right angle.',
        'The hypotenuse c is opposite the right angle and is the longest side.',
      ],
    },
    howToUse: [
      'Enter the length of leg a.',
      'Enter the length of leg b.',
      'Enter the length of hypotenuse c.',
      'Check that c is the longest side and that the side lengths describe a right triangle.',
      'Select Calculate Inradius to get r.',
    ],
    example: {
      given: ['Leg a = 6', 'Leg b = 8', 'Hypotenuse c = 10'],
      steps: ['r = (a + b − c) / 2', 'r = (6 + 8 − 10) / 2', 'r = 4 / 2', 'r = 2'],
      result: 'For a 6-8-10 right triangle, the inradius is 2 units.',
    },
    resultMeaning: [
      'The result r is the radius of the incircle. If r = 2, then a circle with radius 2 units can fit inside the right triangle while touching all three sides.',
      'The inradius is useful when you need the size of the inscribed circle, the distance from the incenter to each side, or a quick way to connect side lengths with area and semiperimeter.',
    ],
    radiusRelation: [
      'On the main right triangle radius calculator, this same calculation appears as the Inradius and Radius Relation r mode.',
      'The relation uses the same formula, r = (a + b − c) / 2, so this page is the focused version when you only need inradius r.',
    ],
    useCases: [
      'Finding the radius of the incircle in a right triangle.',
      'Checking homework problems that give all three side lengths.',
      'Using area and semiperimeter relationships with right triangles.',
      'Comparing the inradius r with the circumradius R.',
      'Solving geometry problems where an inner circle touches all three sides.',
    ],
    commonMistakes: [
      'Using c as a leg instead of the hypotenuse.',
      'Forgetting to divide a + b − c by 2.',
      'Using the circumradius formula R = c / 2 when the question asks for inradius r.',
      'Entering side lengths that do not form a valid right triangle.',
      'Mixing units, such as entering two sides in inches and one side in centimeters.',
    ],
    relatedLinks: [
      {
        href: '/right-triangle-radius-calculator/',
        label: 'right triangle radius calculator',
        description: 'Use the parent calculator for inradius, circumradius, and radius relation modes.',
      },
      {
        href: '/right-triangle-circumradius-calculator/',
        label: 'right triangle circumradius calculator',
        description: 'Find circumradius R from the hypotenuse c.',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'right triangle area calculator',
        description: 'Calculate area from the right triangle side lengths.',
      },
      {
        href: '/right-triangle-semiperimeter-calculator/',
        label: 'right triangle semiperimeter calculator',
        description: 'Find semiperimeter before using formulas that involve s.',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'right triangle side calculator',
        description: 'Find a missing side before calculating the inradius.',
      },
    ],
    faqs: [
      {
        question: 'What is the formula for the inradius of a right triangle?',
        answer:
          'The formula is r = (a + b − c) / 2, where a and b are the legs, c is the hypotenuse, and r is the inradius.',
      },
      {
        question: 'What does the inradius result mean?',
        answer:
          'The result is the radius of the circle that fits inside the right triangle and touches all three sides.',
      },
      {
        question: 'Why does c have to be the hypotenuse?',
        answer:
          'This formula assumes c is the side opposite the right angle. In a right triangle, that side is the hypotenuse and it is the longest side.',
      },
      {
        question: 'Can I find the inradius if I only know the two legs?',
        answer:
          'Yes, but first find the hypotenuse c using the Pythagorean theorem or a right triangle side calculator, then use r = (a + b − c) / 2.',
      },
      {
        question: 'Is the inradius the same as the circumradius?',
        answer:
          'No. The inradius r belongs to the circle inside the triangle, while the circumradius R belongs to the circle passing through the three vertices.',
      },
    ],
  },
  {
    slug: 'right-triangle-circumradius-calculator',
    url: '/right-triangle-circumradius-calculator/',
    primaryKeyword: 'right triangle circumradius calculator',
    secondaryKeywords: [
      'right triangle circumradius',
      'circumradius of right triangle',
      'right triangle circumcircle radius',
      'find R in a right triangle',
      'R = c / 2 calculator',
    ],
    h1: 'Right Triangle Circumradius Calculator',
    metaTitle: 'Right Triangle Circumradius Calculator | Find R = c / 2',
    metaDescription:
      'Use this right triangle circumradius calculator to find circumradius R from hypotenuse c.',
    calculatorKind: 'circumradius',
    formulaSlug: 'circumradius',
    calculator: circumradiusCalculator,
    modes: ['Circumradius', 'Radius Relation R'],
    intro: [
      'Use this right triangle circumradius calculator when you know the hypotenuse c and want to find the circumradius R. The circumradius is the radius of the circle that passes through all three vertices of the right triangle.',
      'In a right triangle, the hypotenuse is the diameter of the circumcircle. That makes the circumradius especially simple: it is one half of the hypotenuse.',
    ],
    calculatorNote:
      'Enter a positive value for hypotenuse c. This calculator assumes c is the side opposite the right angle.',
    formulaSection: {
      formula: 'R = c / 2',
      paragraphs: [
        'For every right triangle, the hypotenuse is the diameter of the circumcircle.',
        'Here, c is the hypotenuse and R is the circumradius.',
      ],
      points: [
        'Start with the hypotenuse c.',
        'Divide c by 2.',
        'The result is the circumradius R.',
      ],
    },
    diagram: {
      kind: 'circumradius',
      paragraphs: [
        'The diagram shows the circumcircle around a right triangle. The hypotenuse c acts as the diameter of the circle.',
      ],
      notes: [
        'The circumcenter is the midpoint of the hypotenuse.',
        'The segment marked R is the circumradius.',
        'The circle passes through all three triangle vertices.',
      ],
    },
    howToUse: [
      'Enter the length of hypotenuse c.',
      'Make sure c is greater than 0.',
      'Select Calculate Circumradius.',
      'Read the result as the circumradius R.',
    ],
    example: {
      given: ['Hypotenuse c = 10'],
      steps: ['R = c / 2', 'R = 10 / 2', 'R = 5'],
      result: 'For a right triangle with hypotenuse 10, the circumradius is 5 units.',
    },
    resultMeaning: [
      'The result R is the radius of the circumcircle. If R = 5, then the circle passing through the three vertices has radius 5 units.',
      'Because the hypotenuse is the diameter of the circumcircle, the full diameter is c and the radius is half of c.',
    ],
    radiusRelation: [
      'On the main right triangle radius calculator, this same calculation appears as the Circumradius and Radius Relation R mode.',
      'The relation uses the same formula, R = c / 2, so this page is the focused version when you only need circumradius R.',
    ],
    useCases: [
      'Finding the radius of the circle through all three vertices of a right triangle.',
      'Using a known hypotenuse to work with circumcircle geometry.',
      'Checking whether a radius or diameter value matches a right triangle diagram.',
      'Comparing circumradius R with inradius r.',
      'Solving problems that mention the midpoint of the hypotenuse.',
    ],
    commonMistakes: [
      'Entering a leg length instead of the hypotenuse c.',
      'Forgetting that R is half of c, not the full hypotenuse.',
      'Confusing circumradius R with inradius r.',
      'Calling the hypotenuse c a leg.',
      'Using zero or a negative value for c.',
    ],
    relatedLinks: [
      {
        href: '/right-triangle-radius-calculator/',
        label: 'right triangle radius calculator',
        description: 'Use the parent calculator for inradius, circumradius, and radius relation modes.',
      },
      {
        href: '/right-triangle-inradius-calculator/',
        label: 'right triangle inradius calculator',
        description: 'Find inradius r from both legs and the hypotenuse.',
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'right triangle side calculator',
        description: 'Find a missing side before using radius formulas.',
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'right triangle area calculator',
        description: 'Calculate the area of a right triangle from side lengths.',
      },
      {
        href: '/pythagorean-theorem-calculator/',
        label: 'pythagorean theorem calculator',
        description: 'Find the hypotenuse from the two legs when c is not known yet.',
      },
    ],
    faqs: [
      {
        question: 'What is the formula for the circumradius of a right triangle?',
        answer:
          'The formula is R = c / 2, where c is the hypotenuse and R is the circumradius.',
      },
      {
        question: 'What does the circumradius result mean?',
        answer:
          'The result is the radius of the circle that passes through all three vertices of the right triangle.',
      },
      {
        question: 'Why is the circumcenter at the midpoint of the hypotenuse?',
        answer:
          'In a right triangle, the hypotenuse is the diameter of the circumcircle, so its midpoint is the center of that circle.',
      },
      {
        question: 'Do I need leg a or leg b to find the circumradius?',
        answer:
          'No. If you already know the hypotenuse c, the circumradius is simply R = c / 2.',
      },
      {
        question: 'Is the circumradius the same as the diameter?',
        answer:
          'No. The hypotenuse c is the diameter of the circumcircle, and the circumradius R is half of that diameter.',
      },
    ],
  },
];

export const FOCUSED_RADIUS_CALCULATOR_PAGES = focusedRadiusCalculatorPages;

export const focusedRadiusCalculatorPageBySlug = new Map(
  focusedRadiusCalculatorPages.map((page) => [page.slug, page])
);

export const FOCUSED_RADIUS_CALCULATOR_PAGE_SLUGS = focusedRadiusCalculatorPages.map(
  (page) => page.slug
);

export function getFocusedRadiusCalculatorPage(slug: string) {
  return focusedRadiusCalculatorPageBySlug.get(slug);
}
