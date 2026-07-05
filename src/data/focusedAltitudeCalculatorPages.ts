import type { RightTriangleFormula } from 'src/data/rightTriangleFormulas';
import { localizeFocusedAltitudeCalculatorPage } from 'src/data/focusedAltitudeCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

export type FocusedAltitudeCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  badge?: string;
  parentBreadcrumbLabel?: string;
  howItWorksHeading?: string;
  relatedHeading?: string;
  faqHeading?: string;
  faqDescription?: string;
  calculatorMessages?: {
    positive?: string;
    invalid?: string;
    hypotenuseLongest?: string;
    invalidTriangle?: string;
  };
  runtimeTranslations?: Record<string, unknown>;
  calculatorHeading: string;
  formula: RightTriangleFormula;
  toolPurpose: string;
  intro: string;
  quickSummary?: {
    h2: string;
    intro: string;
    cards: {
      label: string;
      value: string;
    }[];
  };
  diagram?: {
    h2: string;
    intro: string;
    caption: string;
    formulaLabel: string;
    keyLabel: string;
    sides: {
      a: { label: string; description: string };
      b: { label: string; description: string };
      c: { label: string; description: string };
    };
    result: { label: string; description: string };
    notes: string[];
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
    answer: string;
  };
  extraSections: {
    h2: string;
    paragraphs: string[];
    listTitle?: string;
    listItems?: string[];
  }[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const FOCUSED_ALTITUDE_CALCULATOR_PAGES: FocusedAltitudeCalculatorPage[] = [
  // =========================================================================
  // PAGE 1: ALTITUDE FROM SIDES
  // =========================================================================
  {
    slug: 'right-triangle-altitude-from-sides-calculator',
    url: '/right-triangle-altitude-from-sides-calculator/',
    h1: 'Right Triangle Altitude From Sides Calculator',
    metaTitle: 'Right Triangle Altitude From Sides Calculator | Find h = (a \u00D7 b) / c',
    metaDescription:
      'Use this right triangle <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> from sides calculator to find altitude h from leg a, leg b, and hypotenuse c with formula, steps, and examples.',
    calculatorHeading: 'Calculate Altitude h From Sides',
    formula: {
      slug: 'right-triangle-altitude-from-sides',
      title: 'Altitude From Sides',
      category: 'Advanced Relations',
      expression: 'h = \\frac{a \\times b}{c}',
      description: 'Find <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h from leg a, leg b, and hypotenuse c.',
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
    toolPurpose:
      'Enter leg a, leg b, and hypotenuse c to find the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> drawn from the right-angle vertex to the hypotenuse. The calculator shows the formula, substitution, and result so you can follow every step.',
    intro:
      'If you already know all three sides of a right triangle, finding the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> takes one quick calculation. This page handles that exact scenario\u2014type in the two legs and the hypotenuse, and the altitude appears instantly.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This calculator is designed for the case where you know leg a, leg b, and hypotenuse c and need the perpendicular distance from the right-angle vertex to the hypotenuse. No angles or projections required.',
      cards: [
        {
          label: 'Known values',
          value: 'Leg a, leg b, and hypotenuse c'
        },
        {
          label: 'Finds',
          value: 'Altitude h to the hypotenuse'
        },
        {
          label: 'Main formula',
          value: 'h = (a \u00D7 b) / c'
        },
        {
          label: 'Best for',
          value:
            'Geometry homework, <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> proofs, <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> cross-checks, and construction calculations'
        }
      ]
    },
    diagram: {
      h2: 'Triangle Diagram: Altitude From Sides',
      intro:
        'The diagram shows a right triangle with legs a and b forming the 90\u00B0 angle and hypotenuse c opposite it. The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h drops from the right-angle vertex perpendicular to the hypotenuse, splitting it into two segments.',
      caption:
        'Right triangle diagram showing leg a, leg b, hypotenuse c, and <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h drawn perpendicular from the right-angle vertex to the hypotenuse.',
      formulaLabel: 'h = (a \u00D7 b) / c',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description:
            'One of the two sides forming the right angle. Used as a factor in the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude formula</a>.'
        },
        b: {
          label: 'b = second leg',
          description:
            'The other side forming the right angle. Multiplied with leg a in the formula.'
        },
        c: {
          label: 'c = hypotenuse',
          description:
            'The longest side, opposite the right angle. The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is drawn to this side, and c appears in the denominator of the formula.'
        }
      },
      result: {
        label: 'h = altitude to the hypotenuse',
        description:
          'The perpendicular segment from the right-angle vertex to the hypotenuse. Calculated as (a \u00D7 b) / c.'
      },
      notes: [
        'All three sides must use the same unit before you calculate.',
        'The hypotenuse c must be the longest side. If c is shorter than a or b, the triangle is not valid.',
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h will always be shorter than either leg individually.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Altitude From Sides Formula',
      paragraphs: [
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> connects the right-angle vertex to the hypotenuse at a perfect 90\u00B0 angle. Its length comes from a simple relationship between the triangle\u2019s <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> and its sides.',
        'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area of a right triangle</a> can be written two ways. First, using the legs: Area = (a \u00D7 b) / 2. Second, using the hypotenuse as the base and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> as the height: Area = (c \u00D7 h) / 2. Setting these equal and solving for h gives the formula.',
        'Because both expressions describe the same <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>, they must be equal: (a \u00D7 b) / 2 = (c \u00D7 h) / 2. Cancel the 2 from both sides, then divide by c to isolate h. The result is h = (a \u00D7 b) / c.'
      ],
      formulas: ['h = \\frac{a \\times b}{c}']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the two legs of your right triangle. These are the sides that form the 90\u00B0 angle. Label them a and b.',
        'Identify the hypotenuse c. This is the longest side, opposite the right angle.',
        'Make sure all three measurements are in the same unit. Convert if needed.',
        'Enter leg a into the first field.',
        'Enter leg b into the second field.',
        'Enter hypotenuse c into the third field.',
        'Click Calculate. The tool multiplies a and b, divides by c, and shows the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h with step-by-step work.'
      ]
    },
    example: {
      h2: 'Worked Example: Altitude of a 6-8-10 Right Triangle',
      intro:
        'Suppose you have a right triangle with leg a = 6, leg b = 8, and hypotenuse c = 10.',
      lines: [
        'h = \\frac{a \\times b}{c}',
        'h = \\frac{6 \\times 8}{10}',
        'h = \\frac{48}{10}',
        'h = 4.8'
      ],
      answer:
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> is 4.8 units. You can verify this: <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (6 \u00D7 8) / 2 = 24, and also Area = (10 \u00D7 4.8) / 2 = 24. Both area calculations agree, confirming the altitude is correct.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is the shortest distance from the right-angle vertex to the hypotenuse. Think of it as the \u201Cheight\u201D of the triangle when the hypotenuse is laid flat as the base.',
          'This value is always positive, always shorter than either leg, and always shorter than the hypotenuse. If your answer is larger than one of the legs, double-check your inputs\u2014something is likely entered incorrectly.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is ideal whenever you already have all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> and need the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>. It avoids trigonometry and square roots entirely.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'A geometry problem gives all three sides and asks for the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a>.',
          'You need the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> to compute the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> using Area = (c \u00D7 h) / 2 as a cross-check.',
          'A construction plan shows the span and rise of a triangular brace, and you need the perpendicular height to the longest member.',
          'You are proving the geometric mean relationships and need the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> value first.',
          'You want to verify that a measured <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> matches the calculated value for quality control.'
        ]
      },
      {
        h2: 'Why This Formula Works',
        paragraphs: [
          'The formula h = (a \u00D7 b) / c is a direct consequence of the equal-<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> principle. Every triangle has exactly one area, but you can compute it using different base-height pairs.',
          'Using the legs as base and height gives <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (a \u00D7 b) / 2. Using the hypotenuse as the base gives Area = (c \u00D7 h) / 2. Since both equal the same area, you can set them equal and solve for h. The factor of 2 cancels from both sides, leaving h = (a \u00D7 b) / c.',
          'This relationship holds for every right triangle, regardless of size or proportions. It is one of the most useful identities in elementary geometry.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The formula is simple, but entering the wrong values is surprisingly common. Watch out for these.'
        ],
        listItems: [
          'Using the hypotenuse c as a leg \u2014 If you accidentally put c in the numerator and a leg in the denominator, the result will be too large and incorrect.',
          'Entering a hypotenuse shorter than a leg \u2014 The hypotenuse must be the longest side. If c < a or c < b, your side labels are wrong or the triangle is not a right triangle.',
          'Forgetting to divide by c \u2014 The product a \u00D7 b alone is not the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>. You must divide by the hypotenuse.',
          'Mixing different units \u2014 If leg a is in centimeters and leg b is in meters, the result is meaningless. Convert to the same unit first.',
          'Confusing <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h with leg a or leg b \u2014 The altitude is a separate segment inside the triangle, not one of the original sides. It is always shorter than either leg.'
        ]
      },
      {
        h2: 'Additional Example: The 5-12-13 Triangle',
        paragraphs: [
          'The 5-12-13 right triangle is another common <a href="/pythagorean-triples-calculator/" class="text-primary hover:underline">Pythagorean triple</a>. Let\u2019s find its <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a>.'
        ],
        listItems: [
          'h = (a \u00D7 b) / c',
          'h = (5 \u00D7 12) / 13',
          'h = 60 / 13',
          'h \u2248 4.615 units',
          'Cross-check: <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (5 \u00D7 12) / 2 = 30. Also Area = (13 \u00D7 4.615) / 2 \u2248 30 \u2713'
        ]
      }
    ],
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
      },
      {
        href: '/right-triangle-area-calculator/',
        label: 'Right Triangle Area Calculator'
      }
    ],
    faqs: [
      {
        question: 'What is the formula for the altitude from sides?',
        answer:
          'The formula is h = (a \u00D7 b) / c, where a and b are the two legs and c is the hypotenuse.'
      },
      {
        question: 'Why does the formula use the product of the legs?',
        answer:
          'Because the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the triangle equals (a \u00D7 b) / 2 using the legs and also equals (c \u00D7 h) / 2 using the hypotenuse and <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>. Setting them equal and solving for h gives h = (a \u00D7 b) / c.'
      },
      {
        question: 'What does the altitude result represent?',
        answer:
          'It is the perpendicular distance from the right-angle vertex to the hypotenuse. It is always shorter than either leg and always lies inside the triangle.'
      },
      {
        question: 'Do I need to know the angles to find the altitude?',
        answer:
          'No. This formula uses only the three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>. No angle measurements are needed.'
      },
      {
        question: 'Can the altitude ever be longer than a leg?',
        answer:
          'No. The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> is always shorter than both legs. If your calculated h is larger than a or b, check that c is correctly identified as the longest side.'
      }
    ]
  },

  // =========================================================================
  // PAGE 2: ALTITUDE FROM PROJECTIONS
  // =========================================================================
  {
    slug: 'right-triangle-altitude-from-projections-calculator',
    url: '/right-triangle-altitude-from-projections-calculator/',
    h1: 'Right Triangle Altitude From Projections Calculator',
    metaTitle:
      'Right Triangle <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">Altitude</a> From Projections Calculator | Find h = \u221A(p \u00D7 q)',
    metaDescription:
      'Use this right triangle <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> from projections calculator to find altitude h from hypotenuse projections p and q with formula, steps, and examples.',
    calculatorHeading: 'Calculate Altitude h From Projections',
    formula: {
      slug: 'right-triangle-altitude-from-projections',
      title: 'Altitude From Projections',
      category: 'Advanced Relations',
      expression:
        'h = \\sqrt{p \\times q}\\quad\\left(h^2 = p \\times q\\right)',
      description: 'Find <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h from hypotenuse projections p and q.',
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
    toolPurpose:
      'Enter the two hypotenuse projections p and q, and this calculator finds the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h to the hypotenuse using the geometric mean relation. It shows the formula, squared intermediate step, and the final square root result.',
    intro:
      'When the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> drops from the right-angle vertex to the hypotenuse, it splits the hypotenuse into two segments called projections. If you know those two projections, the altitude is just one square root away. This calculator does that math for you.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This page handles the geometric mean scenario: you know the two segments p and q that the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> creates on the hypotenuse, and you need the altitude itself. No <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> or angles required.',
      cards: [
        {
          label: 'Known values',
          value: 'Projection p and projection q (the two hypotenuse segments)'
        },
        {
          label: 'Finds',
          value: 'Altitude h to the hypotenuse'
        },
        {
          label: 'Main formula',
          value: 'h = \u221A(p \u00D7 q)'
        },
        {
          label: 'Best for',
          value:
            'Geometric mean problems, projection exercises, similarity proofs, and advanced geometry homework'
        }
      ]
    },
    diagram: {
      h2: 'Triangle Diagram: Altitude From Projections',
      intro:
        'The diagram shows the right triangle with the hypotenuse split into two segments. Projection p sits on one side of the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>\u2019s foot, and projection q sits on the other. The altitude h connects the right-angle vertex to the point where p and q meet.',
      caption:
        'Right triangle diagram showing hypotenuse c divided into projections p and q by the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h, with the formula h = \u221A(p \u00D7 q).',
      formulaLabel: 'h = \u221A(p \u00D7 q)',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description:
            'One of the two sides forming the right angle. Not directly used in this formula, but leg a is related to projection p by a\u00B2 = p \u00D7 c.'
        },
        b: {
          label: 'b = second leg',
          description:
            'The other side forming the right angle. Related to projection q by b\u00B2 = q \u00D7 c.'
        },
        c: {
          label: 'c = hypotenuse (= p + q)',
          description:
            'The longest side, opposite the right angle. It equals the sum of the two projections: c = p + q.'
        }
      },
      result: {
        label: 'h = geometric mean of p and q',
        description:
          'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> is the square root of the product of the two projections. This is the geometric mean relationship.'
      },
      notes: [
        'p and q must both be positive. If either is zero, the triangle is degenerate.',
        'The sum p + q equals the hypotenuse c. You can use this to verify your projection values.',
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h will always be less than or equal to (p + q) / 2. It equals that value only when p = q (an <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">isosceles right triangle</a>).'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Altitude From Projections Formula',
      paragraphs: [
        'When the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h drops from the right-angle vertex to the hypotenuse, it creates two smaller right triangles inside the original one. Both of these smaller triangles are similar to the original triangle and to each other.',
        'Because the triangles are similar, their corresponding sides are proportional. This proportionality leads to the relation h\u00B2 = p \u00D7 q, which means the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> is the geometric mean of the two projections.',
        'Taking the square root of both sides gives the working formula: h = \u221A(p \u00D7 q). This is one of the most elegant results in right triangle geometry and appears frequently in proofs and competition problems.'
      ],
      formulas: [
        'h^2 = p \\times q',
        'h = \\sqrt{p \\times q}'
      ]
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the two projections on the hypotenuse. These are the segments created when the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> from the right-angle vertex meets the hypotenuse.',
        'Label the shorter segment p and the longer segment q (or vice versa\u2014order does not matter since multiplication is commutative).',
        'Make sure both values are in the same unit.',
        'Enter projection p into the first field.',
        'Enter projection q into the second field.',
        'Click Calculate. The tool multiplies p and q, takes the square root, and displays the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h with step-by-step work.'
      ]
    },
    example: {
      h2: 'Worked Example: Altitude From Projections p = 3.6 and q = 6.4',
      intro:
        'Suppose the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> splits the hypotenuse into p = 3.6 and q = 6.4. These correspond to a 6-8-10 right triangle.',
      lines: [
        'h = \\sqrt{p \\times q}',
        'h = \\sqrt{3.6 \\times 6.4}',
        'h = \\sqrt{23.04}',
        'h = 4.8'
      ],
      answer:
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> is 4.8 units. You can verify: the hypotenuse c = p + q = 3.6 + 6.4 = 10, and using the sides formula for a 6-8-10 triangle, h = (6 \u00D7 8) / 10 = 4.8. Both methods agree.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is the perpendicular distance from the right-angle vertex to the hypotenuse. It tells you how \u201Ctall\u201D the triangle is when the hypotenuse is used as the base.',
          'In practical terms, if you were building a triangular truss and the hypotenuse was the bottom chord, h is the maximum height of the truss at its peak. It determines the clearance or depth of the structure.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This calculator is useful whenever you have the two hypotenuse segments but not all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>. That scenario shows up more often than you might expect.'
        ],
        listTitle: 'Typical situations:',
        listItems: [
          'A geometry worksheet provides p and q directly and asks for the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>.',
          'You are working through a geometric mean proof and need the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> as an intermediate step.',
          'A surveying measurement gives you two distances along a baseline from the foot of a perpendicular.',
          'You need to find the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> without first computing the full <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> of the triangle.'
        ]
      },
      {
        h2: 'Why This Formula Works: The Geometric Mean',
        paragraphs: [
          'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> creates two smaller right triangles inside the original. Triangle 1 has legs h and p, while Triangle 2 has legs h and q. Both are similar to the original right triangle.',
          'Because Triangle 1 and Triangle 2 are similar to each other, the ratio of corresponding sides must be equal. Specifically, h/p = q/h. Cross-multiplying gives h\u00B2 = p \u00D7 q.',
          'This is why h is called the geometric mean of p and q. The geometric mean of two numbers is the square root of their product, and that is exactly what this formula computes.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The formula is compact, but students frequently trip on the details. Here are the most common errors.'
        ],
        listItems: [
          'Adding p and q instead of multiplying \u2014 The formula requires the product p \u00D7 q, not the sum p + q. The sum gives you the hypotenuse c, not the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>.',
          'Forgetting the square root \u2014 The product p \u00D7 q gives h\u00B2, not h. You must take the square root to get the actual <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>.',
          'Confusing projections with legs \u2014 The projections p and q are the two segments of the hypotenuse, not the triangle\u2019s legs. They are always smaller than the corresponding legs.',
          'Using zero or negative values \u2014 Both projections must be positive. A zero projection means no triangle exists.',
          'Thinking h\u00B2 is the final answer \u2014 The intermediate result h\u00B2 = p \u00D7 q is a squared value. The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> itself is the square root of that number.'
        ]
      },
      {
        h2: 'Additional Example: Equal Projections (Isosceles Right Triangle)',
        paragraphs: [
          'In a <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90 triangle</a> with hypotenuse c = 10, the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> splits the hypotenuse into two equal segments: p = 5 and q = 5.'
        ],
        listItems: [
          'h\u00B2 = p \u00D7 q = 5 \u00D7 5 = 25',
          'h = \u221A25 = 5 units',
          'In an <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">isosceles right triangle</a>, the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> always equals half the hypotenuse.',
          'This is the only case where p = q, and it gives the maximum possible <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> for a given hypotenuse length.'
        ]
      },
      {
        h2: 'Connection to the Full Triangle',
        paragraphs: [
          'If you know p and q, you can reconstruct the full triangle without any other measurements. The hypotenuse is c = p + q. The legs are a = \u221A(p \u00D7 c) and b = \u221A(q \u00D7 c). And the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> is h = \u221A(p \u00D7 q).',
          'These three geometric mean relations\u2014one for each of h, a, and b\u2014are a complete description of the right triangle. They are all consequences of the similarity between the original triangle and the two sub-triangles created by the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>.'
        ]
      }
    ],
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
      },
      {
        href: '/right-triangle-side-calculator/',
        label: 'Right Triangle Side Calculator'
      }
    ],
    faqs: [
      {
        question:
          'What is the formula for the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> from projections?',
        answer:
          'The formula is h = \u221A(p \u00D7 q), where p and q are the two segments created when the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> meets the hypotenuse. Equivalently, h\u00B2 = p \u00D7 q.'
      },
      {
        question: 'What are projections in a right triangle?',
        answer:
          'Projections p and q are the two segments of the hypotenuse created by the foot of the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>. Together they add up to the full hypotenuse: p + q = c.'
      },
      {
        question:
          'What does the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> value represent?',
        answer:
          'It is the perpendicular distance from the right-angle vertex to the hypotenuse. It is the height of the triangle when the hypotenuse is the base.'
      },
      {
        question:
          'Why is the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> called the geometric mean of p and q?',
        answer:
          'Because h = \u221A(p \u00D7 q), which is the definition of the geometric mean of two numbers. This relationship comes from the similarity of the two sub-triangles formed by the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>.'
      },
      {
        question:
          'Can I find the legs from p and q alone?',
        answer:
          'Yes. First find c = p + q. Then leg a = \u221A(p \u00D7 c) and leg b = \u221A(q \u00D7 c). These are additional geometric mean relations.'
      }
    ]
  }
];

export const FOCUSED_ALTITUDE_CALCULATOR_PAGE_SLUGS =
  FOCUSED_ALTITUDE_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedAltitudeCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): FocusedAltitudeCalculatorPage | undefined {
  const page = FOCUSED_ALTITUDE_CALCULATOR_PAGES.find((item) => item.slug === slug);

  if (!page) {
    return undefined;
  }

  return locale === DEFAULT_LOCALE
    ? page
    : localizeFocusedAltitudeCalculatorPage(page, locale);
}
