import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';

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
      h2: 'What This Pythagorean Calculator Solves',
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
      h2: 'What This Missing Leg Calculator Solves',
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
      h2: 'What This Missing Leg Calculator Solves',
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
  }
];

export function getFocusedSideCalculatorPage(slug: string) {
  return FOCUSED_SIDE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
