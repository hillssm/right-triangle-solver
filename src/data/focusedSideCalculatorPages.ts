import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import {
  isFocusedSideAngleCalculatorSlug,
  localizeFocusedSideAngleCalculatorPage
} from 'src/data/focusedSideAngleCalculatorTranslations';
import { FOCUSED_SIDE_CALCULATOR_TRANSLATIONS } from 'src/data/focusedSideCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type DiagramSideStatus = 'known' | 'unknown';

export type FocusedSideCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  toolPurpose: string;
  intro: string;
  quickSummary: {
    h2: string;
    intro: string;
    cards: {
      label: string;
      value: string;
    }[];
  };
  diagram: {
    h2: string;
    intro: string;
    caption: string;
    sides: {
      a: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
      b: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
      c: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
    };
    notes: string[];
  };
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

export const FOCUSED_SIDE_CALCULATOR_PAGES: FocusedSideCalculatorPage[] = [
  {
    slug: 'pythagorean-theorem-calculator',
    url: '/pythagorean-theorem-calculator/',
    h1: 'Pythagorean Theorem Calculator',
    metaTitle: 'Pythagorean Theorem Calculator | Find the Hypotenuse',
    metaDescription:
      'Find hypotenuse c from legs a and b with a Pythagorean theorem calculator, diagram, formula, examples, validation tips, and step-by-step work.',
    formulaSlug: 'pythagorean-theorem',
    toolPurpose:
      'Whether you\u2019re solving a homework problem or measuring a diagonal in real life, this tool gives you the answer in seconds \u2014 with the full solution shown step by step.',
    intro:
      'This calculator finds the hypotenuse (c) of a right triangle when you know both legs (a and b). Enter your two leg values and get the result instantly.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when the two sides that meet at the 90° angle are known and the diagonal side is missing. The calculator focuses on the classic hypotenuse case, so the inputs stay simple and the result is easy to check.',
      cards: [
        { label: 'Known values', value: 'Leg a and leg b' },
        { label: 'Finds', value: 'Hypotenuse c' },
        { label: 'Main formula', value: 'c = sqrt(a^2 + b^2)' },
        { label: 'Best for', value: 'Diagonals, ladders, ramps, screens, and geometry homework' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Finding the Hypotenuse',
      intro:
        'The diagram shows the exact side relationship used by the tool. The two legs are the known input values, and the slanted side c is the hypotenuse that the calculator finds.',
      caption:
        'Right triangle diagram with known legs a and b and unknown hypotenuse c.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Leg a is one of the two sides that forms the right angle.',
          status: 'known'
        },
        b: {
          label: 'b = known',
          description: 'Leg b is the other side that forms the right angle.',
          status: 'known'
        },
        c: {
          label: 'c = find',
          description: 'Hypotenuse c is the longest side and sits opposite the 90° angle.',
          status: 'unknown'
        }
      },
      notes: [
        'a and b can be swapped; the hypotenuse result will be the same.',
        'Use the same unit for both legs before calculating.',
        'The answer c will always be greater than either leg in a valid right triangle.'
      ]
    },
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
      h2: 'How to Use This Tool',
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
        h2: 'Where This Calculator Is Useful',
        paragraphs: [
          'The hypotenuse calculator is useful whenever two perpendicular distances combine into one diagonal distance. It is especially helpful when a drawing, floor plan, or homework problem gives the horizontal and vertical sides but leaves the diagonal side blank.',
          'Because this page only solves for c, it avoids the confusion of switching between side modes. If your known values are the two legs, this is the focused Pythagorean theorem tool to use.'
        ],
        listTitle: 'Common examples include:',
        listItems: [
          'Finding the diagonal of a rectangle, screen, tile layout, or room.',
          'Calculating a ladder length from wall height and ground distance.',
          'Estimating the sloped length of a ramp from rise and run.',
          'Checking right triangle homework before submitting the final answer.'
        ]
      },
      {
        h2: 'Input Tips for Better Results',
        paragraphs: [
          'Enter both leg lengths as positive numbers. Decimals are fine, and the calculator will keep enough precision to make the step-by-step work useful.',
          'The two inputs must use the same unit. If a is measured in feet and b is measured in inches, convert one measurement first so the result is meaningful.'
        ],
        listTitle: 'Before you calculate, check that:',
        listItems: [
          'a and b are the sides that touch the 90° angle.',
          'Neither input is zero or negative.',
          'Both values are measured in the same unit.',
          'You are solving for the hypotenuse, not a missing leg.'
        ]
      },
      {
        h2: 'How to Read the Answer',
        paragraphs: [
          'The output labeled Hypotenuse c is the side opposite the right angle. It is the diagonal side in the diagram and should be longer than both input legs.',
          'If your result looks smaller than a or b, that is a sign that one of the inputs was mislabeled or that the triangle is not actually a right triangle.'
        ],
        listTitle: 'A quick reasonableness check:',
        listItems: [
          'c should be greater than a.',
          'c should be greater than b.',
          'c should be less than a + b.',
          'For common triples like 3-4-5 or 5-12-13, the result should match the known triple.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Most wrong hypotenuse answers come from using the right formula on the wrong sides. The legs must be the two sides that make the right angle; the hypotenuse is never an input on this page.',
          'Another common issue is stopping at a² + b². That value is c², not c. The square root step is what turns the squared value back into the actual side length.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          'Using the formula on a triangle that does not have a 90° angle.',
          'Entering the diagonal side as a or b.',
          'Forgetting to take the square root at the end.',
          'Mixing units such as inches and feet in the same calculation.'
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
      'Find missing leg b when hypotenuse c and leg a are known. Includes diagram, formula b = sqrt(c^2 - a^2), input checks, and examples.',
    formulaSlug: 'leg-from-hypotenuse-and-other-leg',
    toolPurpose:
      'Remember: c is always the hypotenuse \u2014 the longest side, opposite the right angle. It is not a leg. If you have two legs and need the hypotenuse instead, use the Pythagorean Theorem Calculator.',
    intro:
      'This calculator finds the missing leg b of a right triangle when you already know the hypotenuse c and one leg a. Just enter your two known values and get leg b instantly.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when the hypotenuse and leg a are known, but the other leg is missing. The calculator rearranges the Pythagorean theorem to subtract the known leg from the hypotenuse before taking the square root.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and leg a' },
        { label: 'Finds', value: 'Missing leg b' },
        { label: 'Main formula', value: 'b = sqrt(c^2 - a^2)' },
        { label: 'Required check', value: 'c must be greater than a' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Finding Leg b',
      intro:
        'The diagram marks c and a as the values you already know. The vertical leg b is highlighted as the missing side that this calculator solves.',
      caption:
        'Right triangle diagram with known hypotenuse c, known leg a, and unknown leg b.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Leg a is the known leg along the base of the right triangle.',
          status: 'known'
        },
        b: {
          label: 'b = find',
          description: 'Leg b is the unknown leg solved by subtracting a^2 from c^2.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the known longest side opposite the right angle.',
          status: 'known'
        }
      },
      notes: [
        'c must be the hypotenuse, not one of the legs.',
        'If c is less than or equal to a, the inputs do not form a valid right triangle.',
        'The result b uses the same unit as c and a.'
      ]
    },
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
          'Before you use this formula, make sure c is greater than a. The hypotenuse is always the longest side of a right triangle. If c equals a, you would get b = 0, which means no triangle exists.',
          'If c is less than a, the expression under the square root becomes negative. That means the two input values cannot describe a real right triangle with c as the hypotenuse.'
        ],
        listTitle: 'Use these checks first:',
        listItems: [
          'c is opposite the 90° angle.',
          'c is greater than a.',
          'Both values are positive.',
          'c and a use the same unit.'
        ]
      },
      {
        h2: 'Where This Calculator Is Useful',
        paragraphs: [
          'This calculator is useful when a diagonal or sloped measurement is known, one perpendicular side is known, and the other perpendicular side is missing. It is the focused tool for the c-and-a case, so every explanation on the page points toward finding b.',
          'It can also help verify measurements. If a measured value for b does not match the calculator result, the triangle may not be right, the hypotenuse may be mislabeled, or one measurement may use a different unit.'
        ],
        listTitle: 'Common examples include:',
        listItems: [
          'Finding wall height when ladder length c and ground distance a are known.',
          'Finding the vertical rise of a slope when the slope length and horizontal run are known.',
          'Checking a right triangle homework problem that gives c and a.',
          'Confirming layout measurements for framing, landscaping, ramps, or floor plans.'
        ]
      },
      {
        h2: 'How to Read the Answer',
        paragraphs: [
          'The output labeled Missing leg b is the length of the other leg that forms the right angle with a. It is not the hypotenuse and should be shorter than c.',
          'If the calculated b is extremely small, your known leg a is very close to the hypotenuse c. That can be valid, but it is worth checking the diagram and the units before using the value.'
        ],
        listTitle: 'A valid result should satisfy:',
        listItems: [
          'b is greater than zero.',
          'b is less than c.',
          'a² + b² is approximately equal to c².',
          'The output unit matches the input unit.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The most common error is treating c as a leg. In this calculator, c must be the hypotenuse, which is the longest side and the side opposite the right angle.',
          'Another frequent mistake is adding the squares instead of subtracting. Addition finds a hypotenuse; subtraction finds a missing leg from the hypotenuse.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          'Putting the known leg into the hypotenuse field.',
          'Using c² + a² instead of c² - a².',
          'Entering a greater than or equal to c.',
          'Stopping at b² instead of taking the square root.',
          'Mixing units such as meters and centimeters.'
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
      'Find missing leg a when hypotenuse c and leg b are known. Includes diagram, formula a = sqrt(c^2 - b^2), input checks, and examples.',
    formulaSlug: 'other-leg-from-hypotenuse-and-leg',
    toolPurpose:
      'Keep in mind: c is the hypotenuse, not a leg. It\u2019s the longest side of the triangle and sits opposite the 90\u00b0 angle. If you have both legs and need the hypotenuse, use the Pythagorean Theorem Calculator instead.',
    intro:
      'This calculator finds the missing leg a of a right triangle when you know the hypotenuse c and the other leg b. Enter your values above to get the result with a full step-by-step breakdown.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when you know the hypotenuse and leg b, but need leg a. It keeps the known side b separate from the unknown side a so the formula and result match the labels on your triangle.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and leg b' },
        { label: 'Finds', value: 'Missing leg a' },
        { label: 'Main formula', value: 'a = sqrt(c^2 - b^2)' },
        { label: 'Required check', value: 'c must be greater than b' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Finding Leg a',
      intro:
        'The diagram shows c as the known hypotenuse and b as the known leg. The base leg a is highlighted as the missing value returned by the calculator.',
      caption:
        'Right triangle diagram with known hypotenuse c, known leg b, and unknown leg a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Leg a is the unknown base leg solved from c and b.',
          status: 'unknown'
        },
        b: {
          label: 'b = known',
          description: 'Leg b is the known leg that forms the right angle with a.',
          status: 'known'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the known longest side of the right triangle.',
          status: 'known'
        }
      },
      notes: [
        'The hypotenuse c must be the longest side in the input pair.',
        'If c is less than or equal to b, re-check which value is the hypotenuse.',
        'The calculated a has the same unit as the values you entered.'
      ]
    },
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
          'The hypotenuse c must be greater than b for the calculation to work. In every right triangle, the hypotenuse is the longest side. If c equals b, the formula gives a = 0, which means no triangle can be formed.',
          'If c is less than b, the expression under the square root becomes negative and there is no real side length for a. In that case, re-check which side is opposite the 90° angle.'
        ],
        listTitle: 'Use these checks first:',
        listItems: [
          'c is the side opposite the right angle.',
          'c is greater than b.',
          'Both inputs are positive numbers.',
          'c and b use the same measurement unit.'
        ]
      },
      {
        h2: 'Where This Calculator Is Useful',
        paragraphs: [
          'This calculator is the right tool when you know the hypotenuse and leg b and need to find leg a. It is especially helpful when your diagram labels the known leg as b and the unknown base or height as a.',
          'The page also works as a measurement check. If the calculated side a is very different from a measured side, the triangle may not include a true 90° angle or one of the known values may have been copied incorrectly.'
        ],
        listTitle: 'Common examples include:',
        listItems: [
          'Finding a base distance when the slope length c and height b are known.',
          'Finding a vertical height when the hypotenuse and horizontal distance are known.',
          'Solving geometry problems that give c and b and ask for a.',
          'Checking construction, mapping, or floor-plan measurements that form a right triangle.'
        ]
      },
      {
        h2: 'How to Read the Answer',
        paragraphs: [
          'The output labeled Missing leg a is the other side that forms the right angle with b. It should be shorter than the hypotenuse c and greater than zero.',
          'If the result is close to c, the known leg b is relatively small. If the result is close to zero, b is almost as long as c. Both can happen, but the input labels should be checked before using the answer.'
        ],
        listTitle: 'A valid result should satisfy:',
        listItems: [
          'a is greater than zero.',
          'a is less than c.',
          'a² + b² is approximately equal to c².',
          'The output unit matches the unit used for c and b.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The biggest risk is swapping the hypotenuse with a leg. This calculator assumes c is already the longest side, so a mislabeled c value will make the result incorrect.',
          'A second common issue is using the hypotenuse formula by mistake. To find a missing leg, you subtract the known leg square from the hypotenuse square, then take the square root.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          'Entering leg b as the hypotenuse c.',
          'Using c² + b² instead of c² - b².',
          'Entering b greater than or equal to c.',
          'Forgetting the square root after subtracting.',
          'Combining measurements that use different units.'
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
  },
  {
    slug: 'right-triangle-side-from-sine-calculator',
    url: '/right-triangle-side-from-sine-calculator/',
    h1: 'Right Triangle Side From Sine Calculator',
    metaTitle: 'Right Triangle Side From Sine Calculator | Find a = c \u00d7 sin(A)',
    metaDescription: 'Use this right triangle side from sine calculator to find opposite side a from angle A and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'a-c-sin',
    toolPurpose:
      'This calculator is built for one job: finding opposite side a when you already know an acute angle and the hypotenuse. Enter your two values and the result appears instantly with step-by-step work.',
    intro: 'Use this calculator to find opposite side a from angle A and hypotenuse c.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This page focuses on finding the opposite side from an angle and hypotenuse pair. The sine function connects these three values directly, so no extra steps or rearranging are needed.',
      cards: [
        { label: 'Known values', value: 'Angle A and hypotenuse c' },
        { label: 'Finds', value: 'Opposite side a' },
        { label: 'Main formula', value: 'a = c \u00d7 sin(A)' },
        { label: 'Best for', value: 'Finding height, rise, or vertical reach from a slope angle' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side a from Sine',
      intro:
        'In this diagram, angle A sits at the bottom-right corner. The side directly across from angle A is the opposite side a, which is the value this calculator finds. Side c, the hypotenuse, is the longest side and runs from angle A up to the top vertex.',
      caption:
        'Right triangle showing angle A, known hypotenuse c, and unknown opposite side a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Opposite side a is directly across from angle A. This is the unknown value.',
          status: 'unknown'
        },
        b: {
          label: 'b',
          description: 'Adjacent side b sits along the base next to angle A. It is not used in this calculation.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the longest side, opposite the 90-degree angle. You enter this value.',
          status: 'known'
        }
      },
      notes: [
        'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'The hypotenuse is always the longest side in a right triangle.',
        'The result a will always be shorter than c.'
      ]
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Sine Formula',
      paragraphs: [
        'The sine of an angle in a right triangle equals the length of the opposite side divided by the hypotenuse. Written as a ratio: sin(A) = a / c. Rearranging this gives the formula used by the calculator.',
        'In this formula, c is the hypotenuse (the longest side, opposite the right angle), A is the acute angle you know, and a is the opposite side you want to find. The sine function handles the conversion from angle to side ratio automatically.'
      ],
      formulas: ['a = c \\times \\sin(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the hypotenuse c in your triangle. It is always the side opposite the 90-degree angle and the longest side.',
        'Identify your known acute angle A. Make sure it is measured in degrees.',
        'Enter the hypotenuse c into the first input field.',
        'Enter angle A into the second input field.',
        'Click Calculate to find the opposite side a with step-by-step work.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Opposite Side a',
      intro: 'Given: A = 36.87 degrees, c = 5. Find opposite side a using the sine formula.',
      lines: [
        'a = c \\times \\sin(A)',
        'a = 5 \\times \\sin(36.87)',
        'a = 5 \\times 0.6',
        'a = 3'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Opposite side a is the length of the side that sits directly across from angle A. In practical terms, this is often the vertical height or rise in a slope problem.',
          'The result will always be a positive number smaller than the hypotenuse. If a equals c, the angle would be 90 degrees, which means the triangle has collapsed into a straight line. If a is very small, the angle is close to zero.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'Use this tool whenever you have the hypotenuse and an angle and need the opposite side. This comes up more often than you might expect.',
          'It is the right choice when the sloped distance is known (like a rope, ramp, or ladder length) and you need the vertical component.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the height a ladder reaches on a wall when you know the ladder length and lean angle.',
          'Calculating the vertical rise of a ramp from the ramp length and incline angle.',
          'Determining the altitude of a kite or drone from the string length and elevation angle.',
          'Solving physics problems where a force vector is broken into a vertical component.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Most errors happen when the wrong side is identified as the hypotenuse or when the angle is entered in the wrong unit. A few minutes of checking your triangle setup can save a wrong answer.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using the adjacent side instead of the hypotenuse as your known side.',
          'Using cosine instead of sine. Cosine finds the adjacent side, not the opposite.',
          'Entering angle A in radians when the calculator expects degrees.',
          'Forgetting that c is always the hypotenuse, not side a or side b.',
          'Expecting a result larger than c. The opposite side is always shorter than the hypotenuse.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Right Triangle Angle From Sine Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does a = c \u00d7 sin(A) calculate?',
        answer:
          'It calculates the length of the opposite side a in a right triangle. You need the hypotenuse c and an acute angle A to use this formula.'
      },
      {
        question: 'Why do I use sine instead of cosine here?',
        answer:
          'Sine relates the opposite side to the hypotenuse. Cosine relates the adjacent side to the hypotenuse. Since this calculator finds the opposite side, sine is the correct function.'
      },
      {
        question: 'Can the result be larger than the hypotenuse?',
        answer:
          'No. The opposite side is always shorter than the hypotenuse in a right triangle. If your result is larger, one of the inputs is wrong.'
      },
      {
        question: 'What if my angle is exactly 90 degrees?',
        answer:
          'A 90-degree input is not valid here. In a right triangle, the two acute angles must each be between 0 and 90 degrees. The 90-degree angle is already fixed at the right angle vertex.'
      },
      {
        question: 'Does the angle need to be in degrees?',
        answer:
          'Yes. This calculator expects angle A in degrees. If your angle is in radians, convert it to degrees first by multiplying by 180 and dividing by pi.'
      }
    ]
  },
  {
    slug: 'right-triangle-side-from-cosine-calculator',
    url: '/right-triangle-side-from-cosine-calculator/',
    h1: 'Right Triangle Side From Cosine Calculator',
    metaTitle: 'Right Triangle Side From Cosine Calculator | Find b = c \u00d7 cos(A)',
    metaDescription: 'Use this right triangle side from cosine calculator to find adjacent side b from angle A and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'b-c-cos',
    toolPurpose:
      'This calculator solves for the adjacent side b when you already have angle A and the hypotenuse c. It handles the cosine computation and shows the full solution path so you can follow or verify each step.',
    intro: 'Use this calculator to find adjacent side b from angle A and hypotenuse c.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This calculator takes angle A and hypotenuse c as inputs and returns the adjacent side b. Cosine is the ratio that links these three values, so the formula needs no rearranging.',
      cards: [
        { label: 'Known values', value: 'Angle A and hypotenuse c' },
        { label: 'Finds', value: 'Adjacent side b' },
        { label: 'Main formula', value: 'b = c \u00d7 cos(A)' },
        { label: 'Best for', value: 'Finding horizontal run, base distance, or ground projection' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side b from Cosine',
      intro:
        'In this layout, angle A is at the bottom-right. The adjacent side b runs along the base, sitting right next to angle A. The hypotenuse c stretches from angle A up to the top vertex. The calculator uses these two known values to find b.',
      caption:
        'Right triangle showing angle A, known hypotenuse c, and unknown adjacent side b.',
      sides: {
        a: {
          label: 'a',
          description: 'Opposite side a is directly across from angle A. It is not needed for this calculation.',
          status: 'unknown'
        },
        b: {
          label: 'b = find',
          description: 'Adjacent side b runs along the base next to angle A. This is the value the calculator returns.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the longest side, opposite the right angle. You provide this as input.',
          status: 'known'
        }
      },
      notes: [
        'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'The adjacent side is always the side that touches angle A and the right angle.',
        'The result b will always be shorter than c.'
      ]
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Cosine Formula',
      paragraphs: [
        'The cosine of an angle in a right triangle equals the adjacent side divided by the hypotenuse. Written as a ratio: cos(A) = b / c. Multiplying both sides by c gives the direct formula below.',
        'Here, c is the hypotenuse (the longest side, opposite the 90-degree angle), A is the acute angle, and b is the adjacent side you want. The cosine function converts the angle into the exact fraction of the hypotenuse that equals the adjacent side.'
      ],
      formulas: ['b = c \\times \\cos(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Find the hypotenuse c in your right triangle. It is the side across from the right angle and always the longest side.',
        'Identify your known acute angle A. Confirm the value is in degrees.',
        'Type the hypotenuse c into the first field.',
        'Type angle A into the second field.',
        'Press Calculate to see the adjacent side b and the step-by-step solution.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Adjacent Side b',
      intro: 'Given: A = 36.87 degrees, c = 5. Find adjacent side b using the cosine formula.',
      lines: [
        'b = c \\times \\cos(A)',
        'b = 5 \\times \\cos(36.87)',
        'b = 5 \\times 0.8',
        'b = 4'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Adjacent side b is the side that sits next to angle A and also touches the right angle. In real-world problems, this is often the horizontal distance, ground run, or base measurement.',
          'Like the opposite side, the adjacent side is always shorter than the hypotenuse. If the angle is small, b will be close to c. If the angle is large (near 90 degrees), b shrinks toward zero.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'Choose this tool when you have the hypotenuse and an angle and need the horizontal or base component. This pattern appears in slope calculations, shadow problems, and structural layout tasks.',
          'It pairs naturally with the sine calculator. Together, they let you split the hypotenuse into its opposite and adjacent components from the same angle.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the horizontal distance a ladder covers on the ground from ladder length and angle.',
          'Calculating the ground run of a ramp when the ramp length and angle are known.',
          'Determining the shadow length cast by a pole when the sun angle and pole-to-tip distance are given.',
          'Breaking a force vector into its horizontal component in physics problems.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The most frequent error is mixing up which trig function to use. Sine and cosine both use the hypotenuse, but they return different sides. Cosine gives the adjacent side, sine gives the opposite.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using sine instead of cosine. Sine returns the opposite side, not the adjacent.',
          'Entering the opposite side instead of the hypotenuse.',
          'Confusing side b with side a. Side b is adjacent to angle A, side a is opposite.',
          'Forgetting that c is the hypotenuse and never side a or side b.',
          'Using an angle in radians when the calculator expects degrees.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Right Triangle Angle From Cosine Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does b = c \u00d7 cos(A) calculate?',
        answer:
          'It calculates the adjacent side b of a right triangle when you know the hypotenuse c and an acute angle A. The cosine function converts the angle into the correct ratio.'
      },
      {
        question: 'How is this different from the sine calculator?',
        answer:
          'The sine calculator finds the opposite side a. This cosine calculator finds the adjacent side b. Both use the hypotenuse, but they return different sides of the triangle.'
      },
      {
        question: 'What does adjacent side mean?',
        answer:
          'The adjacent side is the side that touches the angle you are using and also touches the right angle. For angle A, the adjacent side is b.'
      },
      {
        question: 'Can b be larger than the hypotenuse?',
        answer:
          'No. In a right triangle, both non-hypotenuse sides are always shorter than the hypotenuse. If your result is larger than c, check your inputs.'
      },
      {
        question: 'What happens if I enter a very small angle?',
        answer:
          'As angle A gets closer to 0 degrees, cos(A) approaches 1, so b gets closer to c. The adjacent side is nearly the full length of the hypotenuse at very small angles.'
      }
    ]
  },
  {
    slug: 'right-triangle-side-from-tangent-calculator',
    url: '/right-triangle-side-from-tangent-calculator/',
    h1: 'Right Triangle Side From Tangent Calculator',
    metaTitle: 'Right Triangle Side From Tangent Calculator | Find a = b \u00d7 tan(A)',
    metaDescription: 'Use this right triangle side from tangent calculator to find opposite side a from angle A and adjacent side b with formula, steps, and examples.',
    formulaSlug: 'a-b-tan',
    toolPurpose:
      'This tool finds the opposite side a when you know the adjacent side b and an acute angle A. It uses the tangent ratio, which links the opposite and adjacent sides directly without needing the hypotenuse.',
    intro: 'Use this calculator to find opposite side a from angle A and adjacent side b.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Unlike sine and cosine, the tangent ratio works with sides a and b instead of involving the hypotenuse. This makes it ideal when the hypotenuse is unknown or not needed.',
      cards: [
        { label: 'Known values', value: 'Angle A and adjacent side b' },
        { label: 'Finds', value: 'Opposite side a' },
        { label: 'Main formula', value: 'a = b \u00d7 tan(A)' },
        { label: 'Best for', value: 'Finding height or rise from a base distance and angle' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side a from Tangent',
      intro:
        'Angle A sits at the bottom-right. The adjacent side b is the horizontal base, right next to angle A. The opposite side a is directly across from angle A. Tangent connects these two sides directly.',
      caption:
        'Right triangle showing angle A, known adjacent side b, and unknown opposite side a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Opposite side a is directly across from angle A. This is the value the calculator returns.',
          status: 'unknown'
        },
        b: {
          label: 'b = known',
          description: 'Adjacent side b runs along the base next to angle A. You enter this value.',
          status: 'known'
        },
        c: {
          label: 'c',
          description: 'Hypotenuse c is the longest side. It is not required for this calculation.',
          status: 'unknown'
        }
      },
      notes: [
        'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'Tangent uses only sides a and b; the hypotenuse is not needed.',
        'As angle A grows larger, the opposite side a increases relative to b.'
      ]
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Tangent Formula',
      paragraphs: [
        'Tangent of an angle equals the opposite side divided by the adjacent side: tan(A) = a / b. Multiplying both sides by b isolates the opposite side a.',
        'In this formula, b is the adjacent side (the side next to angle A that also touches the right angle), A is the known acute angle in degrees, and a is the opposite side you want to find. No hypotenuse is involved.'
      ],
      formulas: ['a = b \\times \\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the adjacent side b. This is the side that sits next to angle A and also connects to the right angle.',
        'Confirm the angle A is in degrees and is between 0 and 90.',
        'Enter adjacent side b into the first input field.',
        'Enter angle A into the second input field.',
        'Click Calculate to see opposite side a and the full solution steps.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Opposite Side a',
      intro: 'Given: A = 36.87 degrees, b = 4. Find opposite side a using the tangent formula.',
      lines: [
        'a = b \\times \\tan(A)',
        'a = 4 \\times \\tan(36.87)',
        'a = 4 \\times 0.75',
        'a = 3'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Opposite side a is the side across from angle A. It tells you the vertical distance, height, or rise that corresponds to the base distance and angle you entered.',
          'Unlike sine and cosine results, the tangent result is not limited to being smaller than any particular input. If the angle is large (close to 90 degrees), tan(A) becomes very large, and a can exceed b significantly.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This is the right tool when you have a base measurement and an angle of elevation or depression and need to find the height or vertical distance. It skips the hypotenuse entirely.',
          'Tangent is especially useful in surveying, construction, and field measurement problems where the horizontal distance is known from a map or tape measure and the angle is read from an inclinometer or clinometer.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the height of a building when you know your distance from the base and the angle of elevation.',
          'Calculating the rise of a hill from the horizontal run and slope angle.',
          'Determining the depth of a trench from the edge distance and the angle of descent.',
          'Converting a roof pitch angle into the actual rise per unit of horizontal run.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Tangent problems often go wrong when the hypotenuse is used where the adjacent side should be, or when sides a and b are swapped. Double-check which side sits next to the angle and which one is across from it.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using the hypotenuse instead of the adjacent side b. Tangent does not use the hypotenuse.',
          'Switching a and b. The adjacent side is the input, the opposite side is the output.',
          'Using division instead of multiplication. To find a from b, you multiply by tan(A).',
          'Using an angle of exactly 90 degrees. Tangent of 90 is undefined and will produce an error.',
          'Entering the angle in radians rather than degrees.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-adjacent-side-from-tangent-calculator/', label: 'Right Triangle Adjacent Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does a = b \u00d7 tan(A) calculate?',
        answer:
          'It calculates the opposite side a of a right triangle when you know the adjacent side b and an acute angle A. Tangent is the ratio that connects the opposite and adjacent sides.'
      },
      {
        question: 'Why does this calculator not need the hypotenuse?',
        answer:
          'The tangent ratio is defined as opposite over adjacent (a / b). It only involves sides a and b, so the hypotenuse is not part of the formula.'
      },
      {
        question: 'What happens when the angle is close to 90 degrees?',
        answer:
          'Tangent values grow extremely large as the angle approaches 90 degrees. The opposite side becomes much longer than the adjacent side, and at exactly 90 degrees the tangent is undefined.'
      },
      {
        question: 'Can I use this to find the adjacent side instead?',
        answer:
          'No. This calculator finds the opposite side from the adjacent side. To find the adjacent side from the opposite side, use the adjacent side from tangent calculator with the formula b = a / tan(A).'
      },
      {
        question: 'Is there a difference between tan and tangent?',
        answer:
          'No. They are the same function. "tan" is the standard abbreviation used in calculators and math notation. Both refer to the tangent trigonometric function.'
      }
    ]
  },
  {
    slug: 'right-triangle-adjacent-side-from-tangent-calculator',
    url: '/right-triangle-adjacent-side-from-tangent-calculator/',
    h1: 'Right Triangle Adjacent Side From Tangent Calculator',
    metaTitle: 'Right Triangle Adjacent Side From Tangent Calculator | Find b = a / tan(A)',
    metaDescription: 'Use this right triangle adjacent side from tangent calculator to find adjacent side b from angle A and opposite side a with formula, steps, and examples.',
    formulaSlug: 'b-a-tan',
    toolPurpose:
      'This tool finds the adjacent side b when you have the opposite side a and an acute angle A. It reverses the tangent formula, dividing instead of multiplying, so you get the base length directly.',
    intro: 'Use this calculator to find adjacent side b from angle A and opposite side a.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This is the reverse of the standard tangent side calculator. Instead of multiplying by tangent to find the opposite side, you divide by tangent to find the adjacent side. The hypotenuse is not involved.',
      cards: [
        { label: 'Known values', value: 'Angle A and opposite side a' },
        { label: 'Finds', value: 'Adjacent side b' },
        { label: 'Main formula', value: 'b = a / tan(A)' },
        { label: 'Best for', value: 'Finding base distance, horizontal run, or ground offset from height and angle' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side b from Tangent',
      intro:
        'Angle A is at the bottom-right corner. The opposite side a is directly across from it, which you already know. The adjacent side b is the horizontal base next to angle A, and this is what the calculator finds by dividing a by tan(A).',
      caption:
        'Right triangle showing angle A, known opposite side a, and unknown adjacent side b.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Opposite side a is directly across from angle A. You enter this value.',
          status: 'known'
        },
        b: {
          label: 'b = find',
          description: 'Adjacent side b runs along the base next to angle A. This is the value the calculator returns.',
          status: 'unknown'
        },
        c: {
          label: 'c',
          description: 'Hypotenuse c is the longest side. It is not part of this calculation.',
          status: 'unknown'
        }
      },
      notes: [
        'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'This calculation uses division, not multiplication.',
        'As angle A increases, the adjacent side b decreases for the same opposite side a.'
      ]
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'a', label: 'Opposite side a', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Adjacent Side From Tangent Formula',
      paragraphs: [
        'The tangent ratio states that tan(A) = a / b, where a is the opposite side and b is the adjacent side. Rearranging to solve for b gives the formula below.',
        'In this formula, a is the opposite side (the side across from angle A), A is the acute angle in degrees, and b is the adjacent side you want to find. The division by tan(A) converts the known height and angle into the corresponding base length.'
      ],
      formulas: ['b = a / \\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the opposite side a. This is the side across from angle A, often the vertical height or rise.',
        'Confirm the angle A is in degrees and falls between 0 and 90.',
        'Enter opposite side a into the first input field.',
        'Enter angle A into the second input field.',
        'Click Calculate to see adjacent side b and the complete solution.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Adjacent Side b',
      intro: 'Given: A = 36.87 degrees, a = 3. Find adjacent side b using the tangent division formula.',
      lines: [
        'b = a / \\tan(A)',
        'b = 3 / \\tan(36.87)',
        'b = 3 / 0.75',
        'b = 4'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Adjacent side b is the horizontal base of the triangle. It represents the ground distance, run, or offset that corresponds to the height and angle you provided.',
          'When the angle is small, the base will be much longer than the height, because a gentle slope covers a lot of horizontal distance. When the angle is steep (close to 90 degrees), the base shrinks because the triangle is nearly vertical.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This tool is ideal when you know a vertical measurement and a slope angle and want to find how far out the base extends. It flips the usual tangent problem around.',
          'It comes up in building setbacks, foundation offsets, and situations where height restrictions or clearance distances determine how far back something must be placed.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding how far from a wall you need to stand based on wall height and viewing angle.',
          'Calculating the horizontal run needed for a staircase from the total rise and stair angle.',
          'Determining the setback distance for a retaining wall from the wall height and soil angle of repose.',
          'Solving surveying problems where elevation and angle are measured and horizontal distance is needed.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The biggest mistake with this calculator is using multiplication instead of division. The standard tangent formula multiplies to find the opposite side. This reversed version divides to find the adjacent side. Mixing them up swaps the answer completely.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Multiplying a by tan(A) instead of dividing. That formula finds the opposite side, not the adjacent.',
          'Using b = a \u00d7 tan(A), which is the wrong formula for this calculator.',
          'Switching opposite and adjacent sides. Side a is across from angle A; side b is next to it.',
          'Using an angle outside the valid range. Angle A must be greater than 0 and less than 90 degrees.',
          'Entering the angle in radians instead of degrees.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does b = a / tan(A) calculate?',
        answer:
          'It calculates the adjacent side b when you know the opposite side a and an acute angle A. It is the rearranged version of the tangent formula tan(A) = a / b.'
      },
      {
        question: 'Why does this formula use division instead of multiplication?',
        answer:
          'The standard tangent formula multiplies b by tan(A) to find a. This calculator does the reverse: it divides a by tan(A) to find b. Division is needed because b is in the denominator of the original ratio.'
      },
      {
        question: 'What is the difference between this and the tangent side calculator?',
        answer:
          'The tangent side calculator finds the opposite side a from the adjacent side b. This calculator does the opposite: it finds the adjacent side b from the opposite side a. They are inverse operations.'
      },
      {
        question: 'Can the result be larger than the opposite side?',
        answer:
          'Yes. When the angle is less than 45 degrees, the adjacent side is longer than the opposite side. The two sides are equal only when the angle is exactly 45 degrees.'
      },
      {
        question: 'What happens if I divide by a very small tangent value?',
        answer:
          'When the angle is very close to 0 degrees, tan(A) is nearly zero, and dividing by it produces a very large result. This means the base is extremely long compared to the height, which makes geometric sense for a nearly flat triangle.'
      }
    ]
  }
];

export const FOCUSED_SIDE_CALCULATOR_PAGE_SLUGS = FOCUSED_SIDE_CALCULATOR_PAGES.map(
  (page) => page.slug
);

export function getFocusedSideCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
) {
  const page = FOCUSED_SIDE_CALCULATOR_PAGES.find((item) => item.slug === slug);

  if (!page) {
    return undefined;
  }

  if (locale !== DEFAULT_LOCALE) {
    if (isFocusedSideAngleCalculatorSlug(slug)) {
      return localizeFocusedSideAngleCalculatorPage(page, locale);
    }

    const translationsByLocale = FOCUSED_SIDE_CALCULATOR_TRANSLATIONS as unknown as Record<
      string,
      Record<string, FocusedSideCalculatorPage>
    >;
    const localizedPage = translationsByLocale[locale]?.[slug];

    if (localizedPage) {
      return localizedPage;
    }
  }

  return page;
}
