import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';

export type FocusedSideCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  toolPurpose: string;
  intro: string;
  calculator: {
    outputLabel: string;
    fields: FormulaCalculatorField[];
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
  };
  extraSections: {
    h2: string;
    paragraphs: string[];
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

export const FOCUSED_SIDE_CALCULATOR_PAGES: FocusedSideCalculatorPage[] = [
  {
    slug: 'pythagorean-theorem-calculator',
    url: '/pythagorean-theorem-calculator/',
    h1: 'Pythagorean Theorem Calculator',
    metaTitle: 'Pythagorean Theorem Calculator | Find the Hypotenuse',
    metaDescription:
      'Use this Pythagorean theorem calculator to find the hypotenuse of a right triangle from legs a and b with formula, steps, and examples.',
    formulaSlug: 'pythagorean-theorem',
    toolPurpose:
      'Whether you\u2019re solving a homework problem or measuring a diagonal in real life, this tool gives you the answer in seconds \u2014 with the full solution shown step by step.',
    intro:
      'This calculator finds the hypotenuse (c) of a right triangle when you know both legs (a and b). Enter your two leg values and get the result instantly.',
    calculator: {
      outputLabel: 'Hypotenuse c',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Pythagorean Theorem Formula',
      paragraphs: [
        'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs. To solve for the hypotenuse, take the square root of both sides.',
        'In this formula, a and b are the two legs of the right triangle \u2014 the sides that form the right angle. c is the hypotenuse, the longest side, opposite the right angle. This formula only works for right triangles.'
      ],
      formulas: ['c^2 = a^2 + b^2', 'c = \\sqrt{a^2 + b^2}']
    },
    howTo: {
      h2: 'How to Use the Pythagorean Theorem Calculator',
      steps: [
        'Identify the two legs of your right triangle. These are the sides that form the right angle.',
        'Enter leg a into the first input field.',
        'Enter leg b into the second input field.',
        'Click Calculate to find the hypotenuse.',
        'Read the result for c, along with the step-by-step solution.'
      ]
    },
    example: {
      h2: 'Example: Find the Hypotenuse',
      intro: 'Given: a = 6, b = 8. The hypotenuse of a right triangle with legs 6 and 8 is 10.',
      lines: [
        'c = \\sqrt{6^2 + 8^2}',
        'c = \\sqrt{36 + 64}',
        'c = \\sqrt{100}',
        'c = 10'
      ]
    },
    extraSections: [
      {
        h2: 'When Should You Use This Calculator?',
        paragraphs: [
          'This calculator is useful whenever you know two legs of a right triangle and need the hypotenuse. Common situations include finding a diagonal distance such as the diagonal of a rectangular room or screen, ladder problems where you calculate how far a ladder reaches when leaned against a wall, and ramp measurements for finding the length of a ramp given horizontal and vertical distances.',
          'It\u2019s also helpful for right triangle homework when you want to solve textbook problems quickly and check your work, and for construction measurements like verifying diagonal bracing, fence lines, or layout dimensions.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Using this formula for non-right triangles. The Pythagorean theorem only applies to triangles with a 90\u00b0 angle. For other triangles, you need the law of cosines.',
          'Mixing up legs and hypotenuse. The hypotenuse is always the longest side and sits opposite the right angle. If you accidentally enter the hypotenuse as a leg, your answer will be wrong.',
          'Forgetting the square root. After adding a\u00b2 + b\u00b2, you must take the square root to get c. Without it, you\u2019ll end up with c\u00b2 instead of c.',
          'Using different units. Both legs must be in the same unit. If a is in centimeters and b is in meters, convert one before calculating.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      }
    ],
    faqs: [
      {
        question: 'What is the Pythagorean theorem?',
        answer:
          'The Pythagorean theorem is a formula that relates the three sides of a right triangle: a\u00b2 + b\u00b2 = c\u00b2. It says that the square of the hypotenuse equals the sum of the squares of the two legs. It only applies to right triangles.'
      },
      {
        question: 'What does c mean in the formula?',
        answer:
          'In the formula c\u00b2 = a\u00b2 + b\u00b2, c is the hypotenuse \u2014 the longest side of the right triangle. It\u2019s the side directly across from the 90\u00b0 angle.'
      },
      {
        question: 'Can I use this calculator for any triangle?',
        answer:
          'No. This calculator uses the Pythagorean theorem, which only works for right triangles. If your triangle doesn\u2019t have a 90\u00b0 angle, the formula won\u2019t give a correct result.'
      },
      {
        question: 'How do I find the hypotenuse?',
        answer:
          'To find the hypotenuse, square both legs (a\u00b2 and b\u00b2), add them together, and take the square root of the sum. The formula is c = \u221a(a\u00b2 + b\u00b2). Or just enter your values above and let the calculator do it.'
      },
      {
        question: 'What are a and b in a right triangle?',
        answer:
          'a and b are the two legs \u2014 the sides that form the right angle. They can be any positive length, and it doesn\u2019t matter which one you call a or b. The hypotenuse (c) is always the remaining side.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-a-calculator',
    url: '/missing-leg-from-c-and-a-calculator/',
    h1: 'Missing Leg From c and a Calculator',
    metaTitle: 'Missing Leg From c and a Calculator | Find Leg b',
    metaDescription:
      'Find missing leg b of a right triangle when you know hypotenuse c and leg a. Use b = \u221a(c\u00b2 \u2212 a\u00b2) with steps and examples.',
    formulaSlug: 'leg-from-hypotenuse-and-other-leg',
    toolPurpose:
      'Remember: c is always the hypotenuse \u2014 the longest side, opposite the right angle. It is not a leg. If you have two legs and need the hypotenuse instead, use the Pythagorean Theorem Calculator.',
    intro:
      'This calculator finds the missing leg b of a right triangle when you already know the hypotenuse c and one leg a. Just enter your two known values and get leg b instantly.',
    calculator: {
      outputLabel: 'Missing leg b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'a', label: 'Leg a', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Missing Leg b Formula',
      paragraphs: [
        'The formula to find leg b is derived from the Pythagorean theorem (a\u00b2 + b\u00b2 = c\u00b2). Rearranging for b gives the formula below.',
        'Where c is the hypotenuse (longest side of the right triangle), a is the known leg, and b is the missing leg you\u2019re solving for. Notice the subtraction: you subtract the square of the known leg from the square of the hypotenuse, then take the square root.'
      ],
      formulas: ['b = \\sqrt{c^2 - a^2}']
    },
    howTo: {
      h2: 'How to Find Leg b From c and a',
      steps: [
        'Confirm that c is the hypotenuse and a is a leg. The hypotenuse is always the longest side.',
        'Enter the hypotenuse c into the first input field.',
        'Enter the known leg a into the second input field.',
        'Click Calculate to find the missing leg.',
        'Read the result for b, along with the full step-by-step solution.'
      ]
    },
    example: {
      h2: 'Example: Find Leg b',
      intro:
        'Given: c = 13, a = 5. The missing leg of a right triangle with hypotenuse 13 and leg 5 is 12.',
      lines: [
        'b = \\sqrt{13^2 - 5^2}',
        'b = \\sqrt{169 - 25}',
        'b = \\sqrt{144}',
        'b = 12'
      ]
    },
    extraSections: [
      {
        h2: 'Important Check Before Calculating',
        paragraphs: [
          'Before you use this formula, make sure c is greater than a. The hypotenuse is always the longest side of a right triangle. If c equals a, you\u2019d get b = 0, which means no triangle exists. If c is less than a, you\u2019d be taking the square root of a negative number \u2014 which is impossible for a real triangle.',
          'If your value of a is larger than c, double-check which side is the hypotenuse. The hypotenuse is always opposite the 90\u00b0 angle.'
        ]
      },
      {
        h2: 'When Should You Use This Calculator?',
        paragraphs: [
          'Use this calculator when you know the hypotenuse and one leg, and need to find the other leg. Practical examples include finding a height, such as how high a ladder reaches on a wall when you know the ladder length and ground distance, and finding a width, like the horizontal distance of a slope when you know the slope length and vertical rise.',
          'It\u2019s also useful for checking a triangle measurement to verify that a third side is correct, solving right triangle homework problems that give you c and a and ask for b, and calculating distances in real-world layouts for construction, landscaping, or floor plans.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Treating c as a leg. The most common error. If you enter the hypotenuse in the wrong field, the formula gives a wrong answer. Always confirm which side is opposite the right angle.',
          'Using addition instead of subtraction. This formula uses c\u00b2 minus a\u00b2. If you add instead of subtract, you\u2019re calculating the hypotenuse \u2014 a completely different problem.',
          'Entering a value for a that\u2019s larger than c. That makes c\u00b2 \u2212 a\u00b2 negative, and you can\u2019t take the square root of a negative number. If this happens, check which value is the hypotenuse.',
          'Forgetting the square root. After computing c\u00b2 \u2212 a\u00b2, you must take the square root to get b. Without it, you have b\u00b2 \u2014 not b.',
          'Mixing units. If c is in inches and a is in feet, your result will be meaningless. Convert both values to the same unit first.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      }
    ],
    faqs: [
      {
        question: 'What does c mean in this calculator?',
        answer:
          'c is the hypotenuse of the right triangle \u2014 the longest side, located opposite the 90\u00b0 angle. It is not a leg. You enter c as one of the two known values in this calculator.'
      },
      {
        question: 'What does a mean in this calculator?',
        answer:
          'a is one of the two legs of the right triangle. It\u2019s one of the sides that forms the right angle. In this calculator, a is the leg you already know.'
      },
      {
        question: 'What does this calculator find?',
        answer:
          'This calculator finds the missing leg b. Given hypotenuse c and leg a, it computes b = \u221a(c\u00b2 \u2212 a\u00b2) and shows you the step-by-step solution.'
      },
      {
        question: 'Can c be smaller than a?',
        answer:
          'No. In a right triangle, the hypotenuse is always the longest side. If c is smaller than a, the values don\u2019t form a valid right triangle. Check which measurement is the hypotenuse before calculating.'
      },
      {
        question: 'How do I find b from c and a?',
        answer:
          'Square the hypotenuse (c\u00b2), square the known leg (a\u00b2), subtract a\u00b2 from c\u00b2, and take the square root. The formula is b = \u221a(c\u00b2 \u2212 a\u00b2). Or enter your values into this calculator for an instant answer.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-b-calculator',
    url: '/missing-leg-from-c-and-b-calculator/',
    h1: 'Missing Leg From c and b Calculator',
    metaTitle: 'Missing Leg From c and b Calculator | Find Leg a',
    metaDescription:
      'Find missing leg a of a right triangle when you know hypotenuse c and leg b. Use a = \u221a(c\u00b2 \u2212 b\u00b2) with steps and examples.',
    formulaSlug: 'other-leg-from-hypotenuse-and-leg',
    toolPurpose:
      'Keep in mind: c is the hypotenuse, not a leg. It\u2019s the longest side of the triangle and sits opposite the 90\u00b0 angle. If you have both legs and need the hypotenuse, use the Pythagorean Theorem Calculator instead.',
    intro:
      'This calculator finds the missing leg a of a right triangle when you know the hypotenuse c and the other leg b. Enter your values above to get the result with a full step-by-step breakdown.',
    calculator: {
      outputLabel: 'Missing leg a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Missing Leg a Formula',
      paragraphs: [
        'Starting from the Pythagorean theorem (a\u00b2 + b\u00b2 = c\u00b2), solve for a to get the formula below.',
        'Where c is the hypotenuse (the longest side, opposite the right angle), b is the known leg, and a is the missing leg you want to find. The key operation is subtraction: square the hypotenuse, subtract the square of the known leg, then take the square root of what\u2019s left.'
      ],
      formulas: ['a = \\sqrt{c^2 - b^2}']
    },
    howTo: {
      h2: 'How to Find Leg a From c and b',
      steps: [
        'Make sure you\u2019ve correctly identified the hypotenuse (c) and the known leg (b). The hypotenuse is always across from the 90\u00b0 angle.',
        'Enter the hypotenuse c into the first input field.',
        'Enter the known leg b into the second input field.',
        'Click Calculate to find leg a.',
        'Review the result for a and the step-by-step work shown below.'
      ]
    },
    example: {
      h2: 'Example: Find Leg a',
      intro:
        'Given: c = 10, b = 6. The missing leg of a right triangle with hypotenuse 10 and leg 6 is 8.',
      lines: [
        'a = \\sqrt{10^2 - 6^2}',
        'a = \\sqrt{100 - 36}',
        'a = \\sqrt{64}',
        'a = 8'
      ]
    },
    extraSections: [
      {
        h2: 'Important Check Before Calculating',
        paragraphs: [
          'The hypotenuse c must be greater than b for the calculation to work. In every right triangle, the hypotenuse is the longest side. If c equals b, the formula gives a = 0, which means no triangle can be formed. If c is less than b, the expression under the square root becomes negative \u2014 and that has no real solution.',
          'If you\u2019re getting an error or an impossible result, go back and verify which side is the hypotenuse. It\u2019s the one opposite the right angle, and it\u2019s always longer than either leg.'
        ]
      },
      {
        h2: 'When Should You Use This Calculator?',
        paragraphs: [
          'This calculator is the right tool when you know the hypotenuse and leg b and need to find leg a. Common scenarios include finding the base of a right triangle when you know the hypotenuse and the height, and finding the height when you know the slope length and horizontal run.',
          'It\u2019s also useful for checking a right triangle to verify that a set of measurements actually forms a valid triangle, solving school problems in geometry and trigonometry that give c and b and ask for a, and calculating construction or layout measurements for unknown distances on a job site or in a floor plan.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Treating c as a leg. If you swap the hypotenuse with a leg, the formula will produce an incorrect result \u2014 or fail entirely. Always identify the hypotenuse first.',
          'Using addition instead of subtraction. The formula is c\u00b2 minus b\u00b2, not plus. Adding the squares would give you the hypotenuse formula, which solves a different problem.',
          'Entering b greater than c. This produces a negative number under the square root, which has no real answer. It means your inputs don\u2019t describe a valid right triangle.',
          'Forgetting the square root. After computing c\u00b2 \u2212 b\u00b2, you need the square root to get the actual side length. Without it, you\u2019ve found a\u00b2, not a.',
          'Mixing units. Both c and b must share the same unit of measurement. A calculation with c in meters and b in centimeters will give a wrong answer.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      }
    ],
    faqs: [
      {
        question: 'What does c mean in this calculator?',
        answer:
          'c is the hypotenuse \u2014 the longest side of the right triangle, opposite the 90\u00b0 angle. In this calculator, you enter c as one of your two known values.'
      },
      {
        question: 'What does b mean in this calculator?',
        answer:
          'b is one of the two legs of the right triangle. It\u2019s a side that forms the right angle. Here, b is the leg you already know, and the calculator uses it along with c to find the missing leg a.'
      },
      {
        question: 'What does this calculator find?',
        answer:
          'It finds the missing leg a. You provide the hypotenuse (c) and one leg (b), and the calculator applies the formula a = \u221a(c\u00b2 \u2212 b\u00b2) to give you the unknown leg with a step-by-step solution.'
      },
      {
        question: 'Can c be smaller than b?',
        answer:
          'No. The hypotenuse is always the longest side in a right triangle. If your value for c is smaller than b, the inputs don\u2019t represent a valid right triangle. Re-check which measurement corresponds to the hypotenuse.'
      },
      {
        question: 'How do I find a from c and b?',
        answer:
          'Square the hypotenuse (c\u00b2), square the known leg (b\u00b2), subtract b\u00b2 from c\u00b2, and take the square root of the result. The formula is a = \u221a(c\u00b2 \u2212 b\u00b2). You can also just enter your values into this calculator to get the answer automatically.'
      }
    ]
  }
];

export function getFocusedSideCalculatorPage(slug: string) {
  return FOCUSED_SIDE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
