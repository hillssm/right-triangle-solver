import type { RightTriangleFormula } from 'src/data/rightTriangleFormulas';

type FaqItem = {
  question: string;
  answer: string;
};

export type FocusedProjectionCalculatorPage = {
  slug: string;
  url: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  calculatorHeading: string;
  formula: RightTriangleFormula;
  intro: string[];
  calculatorNote: string;
  formulaSection: {
    paragraphs: string[];
    formulas: string[];
    validation: string[];
  };
  diagram: {
    intro: string;
    caption: string;
    notes: string[];
  };
  howTo: string[];
  example: {
    intro: string;
    lines: string[];
    explanation: string;
  };
  resultMeaning: string[];
  whenUse: string[];
  commonMistakes: string[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
  faqs: FaqItem[];
};

export const FOCUSED_PROJECTION_CALCULATOR_PAGES: FocusedProjectionCalculatorPage[] = [
  {
    slug: 'right-triangle-projection-p-calculator',
    url: '/right-triangle-projection-p-calculator/',
    primaryKeyword: 'Right Triangle Projection p Calculator',
    secondaryKeywords: [
      'projection p calculator',
      'right triangle projection calculator',
      'hypotenuse segment p calculator',
      'find p from a and c',
      'p = a² / c calculator',
      'right triangle hypotenuse projection p'
    ],
    h1: 'Right Triangle Projection p Calculator',
    metaTitle: 'Right Triangle Projection p Calculator | Find p = a² / c',
    metaDescription:
      'Use this right triangle projection p calculator to find projection p on the hypotenuse from leg a and hypotenuse c with formula and steps.',
    calculatorHeading: 'Right Triangle Projection p Calculator',
    formula: {
      slug: 'right-triangle-projection-p',
      title: 'Projection p',
      category: 'Advanced Relations',
      expression: 'p = \\frac{a^2}{c}',
      description: 'Find projection p from leg a and hypotenuse c.',
      variables: ['a = leg', 'c = hypotenuse', 'p = projection'],
      notes: ['a must be greater than 0.', 'c must be greater than 0.', 'c must be greater than a.'],
      calculator: {
        kind: 'projection_p_strict',
        outputLabel: 'Projection p',
        outputUnit: 'units',
        fields: [
          { key: 'a', label: 'Leg a', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ]
      }
    },
    intro: [
      'Use this calculator when you know leg a and the hypotenuse c, and you need the projection segment p on the hypotenuse. It focuses on one projection theorem only, so the inputs stay simple.',
      'Projection p is the part of the hypotenuse connected with leg a. In many geometry problems, this small segment is the missing piece needed before finding altitude, the other projection, or checking similar-triangle work.'
    ],
    calculatorNote:
      'Enter positive values for leg a and hypotenuse c. Since c is always the hypotenuse, c must be greater than a.',
    formulaSection: {
      paragraphs: [
        'The projection p is found by squaring leg a and dividing by the full hypotenuse c. This comes from the right-triangle projection theorem.',
        'Use this formula only when a is the leg connected to projection p. If your known leg is b, use the projection q calculator instead.'
      ],
      formulas: ['p = \\frac{a^2}{c}'],
      validation: [
        'a must be greater than 0.',
        'c must be greater than 0.',
        'c must be greater than a.'
      ]
    },
    diagram: {
      intro:
        'The diagram marks the altitude h dropped to the hypotenuse c. That altitude divides c into projection p beside leg a and projection q beside leg b.',
      caption:
        'Right triangle with leg a, leg b, hypotenuse c, altitude h, and hypotenuse projections p and q.',
      notes: [
        'Projection p lies on the hypotenuse, not on leg a.',
        'The full hypotenuse is c, and the two pieces satisfy c = p + q.',
        'For this calculator, leg a and hypotenuse c are the known values.'
      ]
    },
    howTo: [
      'Identify leg a, the leg connected with projection p.',
      'Find the hypotenuse c, which is the longest side of the right triangle.',
      'Enter leg a in the first field.',
      'Enter hypotenuse c in the second field.',
      'Calculate the result and read projection p in the output box.',
      'Check that p is smaller than c, because p is only one part of the hypotenuse.'
    ],
    example: {
      intro: 'Suppose leg a = 6 and hypotenuse c = 10.',
      lines: ['p = a² / c', 'p = 6² / 10', 'p = 36 / 10', 'p = 3.6'],
      explanation:
        'Projection p is 3.6 units. That means the altitude touches the hypotenuse at a point 3.6 units along the side associated with leg a.'
    },
    resultMeaning: [
      'The result is a length on the hypotenuse, not a new side outside the triangle.',
      'A smaller p means the foot of the altitude is closer to the end of the hypotenuse near leg a. A larger p means that endpoint takes up more of the hypotenuse.',
      'If you also know q, the two projection segments should add to c.'
    ],
    whenUse: [
      'You know leg a and hypotenuse c, but not projection p.',
      'You are working through a projection theorem problem in geometry.',
      'You need p before using h² = p × q or c = p + q.',
      'You want to check whether a triangle diagram has the projection labels placed correctly.'
    ],
    commonMistakes: [
      'Using leg b instead of leg a.',
      'Forgetting to square a before dividing.',
      'Dividing c by a² instead of dividing a² by c.',
      'Treating c as a leg even though c is the hypotenuse.',
      'Entering a value for a that is greater than or equal to c.'
    ],
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'right triangle projection calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'right triangle projection q calculator' },
      { href: '/right-triangle-leg-a-from-projection-calculator/', label: 'right triangle leg a from projection calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'right triangle altitude from projections calculator' },
      { href: '/right-triangle-side-calculator/', label: 'right triangle side calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for projection p?',
        answer: 'The formula is p = a² / c. Square leg a, then divide by the hypotenuse c.'
      },
      {
        question: 'What does projection p mean in a right triangle?',
        answer: 'Projection p is the part of the hypotenuse associated with leg a. It is created when the altitude from the right angle meets the hypotenuse.'
      },
      {
        question: 'Can projection p be longer than the hypotenuse?',
        answer: 'No. Projection p is only one segment of the hypotenuse, so it must be smaller than c.'
      },
      {
        question: 'Should I use a or b to find p?',
        answer: 'Use leg a to find p. If you know leg b instead, use q = b² / c.'
      },
      {
        question: 'Why does the calculator require c to be greater than a?',
        answer: 'Because c is the hypotenuse and must be longer than either leg in a valid right triangle.'
      }
    ]
  },
  {
    slug: 'right-triangle-projection-q-calculator',
    url: '/right-triangle-projection-q-calculator/',
    primaryKeyword: 'Right Triangle Projection q Calculator',
    secondaryKeywords: [
      'projection q calculator',
      'right triangle projection calculator',
      'hypotenuse segment q calculator',
      'find q from b and c',
      'q = b² / c calculator',
      'right triangle hypotenuse projection q'
    ],
    h1: 'Right Triangle Projection q Calculator',
    metaTitle: 'Right Triangle Projection q Calculator | Find q = b² / c',
    metaDescription:
      'Use this right triangle projection q calculator to find projection q on the hypotenuse from leg b and hypotenuse c with formula and steps.',
    calculatorHeading: 'Right Triangle Projection q Calculator',
    formula: {
      slug: 'right-triangle-projection-q',
      title: 'Projection q',
      category: 'Advanced Relations',
      expression: 'q = \\frac{b^2}{c}',
      description: 'Find projection q from leg b and hypotenuse c.',
      variables: ['b = leg', 'c = hypotenuse', 'q = projection'],
      notes: ['b must be greater than 0.', 'c must be greater than 0.', 'c must be greater than b.'],
      calculator: {
        kind: 'projection_q_strict',
        outputLabel: 'Projection q',
        outputUnit: 'units',
        fields: [
          { key: 'b', label: 'Leg b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 }
        ]
      }
    },
    intro: [
      'This calculator finds projection q when leg b and hypotenuse c are known. It is the matching projection case for the leg b side of the triangle.',
      'Projection q sits on the hypotenuse next to the part of the triangle related to leg b. If your diagram gives b and c, this is the direct way to find that segment without solving the whole triangle first.'
    ],
    calculatorNote:
      'Enter positive values for leg b and hypotenuse c. The hypotenuse c must be greater than b.',
    formulaSection: {
      paragraphs: [
        'Projection q is calculated from leg b using the same projection theorem used for p, but with the other leg.',
        'The square belongs on b. After b is squared, divide by c to get the length of q along the hypotenuse.'
      ],
      formulas: ['q = \\frac{b^2}{c}'],
      validation: [
        'b must be greater than 0.',
        'c must be greater than 0.',
        'c must be greater than b.'
      ]
    },
    diagram: {
      intro:
        'In the diagram, altitude h splits the hypotenuse c into p and q. Projection q is the hypotenuse segment associated with leg b.',
      caption:
        'Right triangle diagram showing leg a, leg b, hypotenuse c, altitude h, projection p, and projection q.',
      notes: [
        'q is measured along the hypotenuse.',
        'q is paired with leg b in the formula q = b² / c.',
        'The other projection, p, belongs to the leg a side of the triangle.'
      ]
    },
    howTo: [
      'Locate leg b in your right triangle.',
      'Locate the hypotenuse c, the side opposite the right angle.',
      'Enter leg b into the first input.',
      'Enter hypotenuse c into the second input.',
      'Run the calculator to find projection q.',
      'Use q with p later if you need the full hypotenuse relation c = p + q.'
    ],
    example: {
      intro: 'Suppose leg b = 8 and hypotenuse c = 10.',
      lines: ['q = b² / c', 'q = 8² / 10', 'q = 64 / 10', 'q = 6.4'],
      explanation:
        'Projection q is 6.4 units. This is the part of the hypotenuse connected with leg b.'
    },
    resultMeaning: [
      'The output q is one segment of the hypotenuse. It is not leg b and it is not the full hypotenuse.',
      'Because q belongs to the hypotenuse, it uses the same unit as b and c.',
      'When p is also known, p + q should equal the total hypotenuse c.'
    ],
    whenUse: [
      'You know leg b and hypotenuse c.',
      'A geometry problem asks for the projection of leg b on the hypotenuse.',
      'You need q before finding altitude h from h² = p × q.',
      'You want to compare the two hypotenuse segments p and q.'
    ],
    commonMistakes: [
      'Using leg a instead of leg b.',
      'Forgetting to square b.',
      'Using q = c / b², which reverses the formula.',
      'Entering b greater than c.',
      'Calling q the hypotenuse instead of a segment of the hypotenuse.'
    ],
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'right triangle projection calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'right triangle projection p calculator' },
      { href: '/right-triangle-leg-b-from-projection-calculator/', label: 'right triangle leg b from projection calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'right triangle altitude from projections calculator' },
      { href: '/right-triangle-side-calculator/', label: 'right triangle side calculator' }
    ],
    faqs: [
      {
        question: 'What formula does the projection q calculator use?',
        answer: 'It uses q = b² / c. Leg b is squared first, then divided by the hypotenuse c.'
      },
      {
        question: 'What does q represent?',
        answer: 'q is the projection segment on the hypotenuse that corresponds to leg b. It is one of the two pieces created by the altitude.'
      },
      {
        question: 'Is q the same as leg b?',
        answer: 'No. Leg b is a side of the triangle, while q is a segment on the hypotenuse.'
      },
      {
        question: 'Why must c be greater than b?',
        answer: 'c is the hypotenuse, so it must be the longest side of the right triangle.'
      },
      {
        question: 'Can I find p if I already found q?',
        answer: 'Yes, if you also know c. Since c = p + q, you can rearrange it to p = c - q.'
      }
    ]
  },
  {
    slug: 'right-triangle-leg-a-from-projection-calculator',
    url: '/right-triangle-leg-a-from-projection-calculator/',
    primaryKeyword: 'Right Triangle Leg a From Projection Calculator',
    secondaryKeywords: [
      'leg a from projection calculator',
      'right triangle leg from projection',
      'find a from c and p',
      'a = square root of c p calculator',
      'right triangle projection formula',
      'right triangle side from projection'
    ],
    h1: 'Right Triangle Leg a From Projection Calculator',
    metaTitle: 'Right Triangle Leg a From Projection Calculator | Find a = √(c × p)',
    metaDescription:
      'Use this right triangle leg a from projection calculator to find leg a from hypotenuse c and projection p with formula and steps.',
    calculatorHeading: 'Right Triangle Leg a From Projection Calculator',
    formula: {
      slug: 'right-triangle-leg-a-from-projection',
      title: 'Leg a From Projection',
      category: 'Advanced Relations',
      expression: 'a^2 = c \\times p\\quad a = \\sqrt{c \\times p}',
      description: 'Find leg a from hypotenuse c and projection p.',
      variables: ['c = hypotenuse', 'p = projection', 'a = leg'],
      notes: ['c must be greater than 0.', 'p must be greater than 0.', 'p must be less than c.'],
      calculator: {
        kind: 'leg_from_cp_strict',
        outputLabel: 'Leg a',
        outputUnit: 'units',
        fields: [
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'p', label: 'Projection p', min: 0 }
        ]
      }
    },
    intro: [
      'Use this calculator when you know the full hypotenuse c and projection p, and you want to recover leg a. This is a common reverse projection-theorem problem.',
      'Instead of starting with a leg and finding its projection, this page works backward. It multiplies c and p, then takes the square root to return the actual side length a.'
    ],
    calculatorNote:
      'Enter positive values for c and p. Projection p must be less than hypotenuse c because p is only part of c.',
    formulaSection: {
      paragraphs: [
        'The squared relation is a² = c × p. That product gives a², not a itself.',
        'To find the leg length a, take the square root of the product c × p. This step is where many mistakes happen.'
      ],
      formulas: ['a^2 = c \\times p', 'a = \\sqrt{c \\times p}'],
      validation: [
        'c must be greater than 0.',
        'p must be greater than 0.',
        'p must be less than c.'
      ]
    },
    diagram: {
      intro:
        'The diagram shows projection p on the hypotenuse beside leg a. When c and p are known, leg a is found from the product c × p.',
      caption:
        'Right triangle with labeled leg a, leg b, hypotenuse c, altitude h, and projections p and q.',
      notes: [
        'Projection p is paired with leg a.',
        'The value c is the whole hypotenuse, not the other leg.',
        'After calculating c × p, take the square root to get leg a.'
      ]
    },
    howTo: [
      'Find the full hypotenuse c.',
      'Find projection p, the hypotenuse segment associated with leg a.',
      'Enter c in the hypotenuse field.',
      'Enter p in the projection field.',
      'Calculate to get leg a.',
      'Confirm that p is less than c before trusting the result.'
    ],
    example: {
      intro: 'Suppose hypotenuse c = 10 and projection p = 3.6.',
      lines: ['a = √(c × p)', 'a = √(10 × 3.6)', 'a = √36', 'a = 6'],
      explanation:
        'Leg a is 6 units. The product 10 × 3.6 gives a², and the square root turns that squared value into the side length.'
    },
    resultMeaning: [
      'The result is the length of leg a, one of the two sides that meet at the right angle.',
      'This value should be shorter than c, because c is the hypotenuse.',
      'If the result is equal to or larger than c, the projection value was likely entered incorrectly.'
    ],
    whenUse: [
      'You know the hypotenuse and projection p, but leg a is missing.',
      'You are solving a right triangle from hypotenuse segments.',
      'You want to check a projection theorem proof.',
      'You need leg a before using the side calculator for the remaining side.'
    ],
    commonMistakes: [
      'Forgetting the square root after multiplying c and p.',
      'Using projection q instead of projection p.',
      'Thinking a² is the final answer.',
      'Using a projection p that is greater than c.',
      'Treating c as a leg instead of the hypotenuse.'
    ],
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'right triangle projection calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'right triangle projection p calculator' },
      { href: '/right-triangle-leg-b-from-projection-calculator/', label: 'right triangle leg b from projection calculator' },
      { href: '/right-triangle-side-calculator/', label: 'right triangle side calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'right triangle altitude from projections calculator' }
    ],
    faqs: [
      {
        question: 'What formula finds leg a from projection p?',
        answer: 'Use a² = c × p first, then a = √(c × p). The square root gives the actual leg length.'
      },
      {
        question: 'What does the result a mean?',
        answer: 'The result is leg a, one side of the right angle. It is not a projection segment.'
      },
      {
        question: 'Why is there a square root in the formula?',
        answer: 'Because c × p equals a². Taking the square root changes a² into a.'
      },
      {
        question: 'Can p be equal to c?',
        answer: 'No. Projection p is only part of the hypotenuse, so p must be less than c.'
      },
      {
        question: 'Should I use p or q to find leg a?',
        answer: 'Use p to find leg a. Projection q is paired with leg b.'
      }
    ]
  },
  {
    slug: 'right-triangle-leg-b-from-projection-calculator',
    url: '/right-triangle-leg-b-from-projection-calculator/',
    primaryKeyword: 'Right Triangle Leg b From Projection Calculator',
    secondaryKeywords: [
      'leg b from projection calculator',
      'right triangle leg from projection',
      'find b from c and q',
      'b = square root of c q calculator',
      'right triangle projection formula',
      'right triangle side from projection'
    ],
    h1: 'Right Triangle Leg b From Projection Calculator',
    metaTitle: 'Right Triangle Leg b From Projection Calculator | Find b = √(c × q)',
    metaDescription:
      'Use this right triangle leg b from projection calculator to find leg b from hypotenuse c and projection q with formula and steps.',
    calculatorHeading: 'Right Triangle Leg b From Projection Calculator',
    formula: {
      slug: 'right-triangle-leg-b-from-projection',
      title: 'Leg b From Projection',
      category: 'Advanced Relations',
      expression: 'b^2 = c \\times q\\quad b = \\sqrt{c \\times q}',
      description: 'Find leg b from hypotenuse c and projection q.',
      variables: ['c = hypotenuse', 'q = projection', 'b = leg'],
      notes: ['c must be greater than 0.', 'q must be greater than 0.', 'q must be less than c.'],
      calculator: {
        kind: 'leg_from_cq_strict',
        outputLabel: 'Leg b',
        outputUnit: 'units',
        fields: [
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'q', label: 'Projection q', min: 0 }
        ]
      }
    },
    intro: [
      'This calculator finds leg b when you know hypotenuse c and projection q. It is built for the projection segment on the leg b side of the triangle.',
      'The calculation is short, but the square root matters. The product c × q gives b², and the final answer comes from taking the square root.'
    ],
    calculatorNote:
      'Use positive values only. Projection q must be smaller than the hypotenuse c.',
    formulaSection: {
      paragraphs: [
        'Leg b is related to projection q by the squared projection theorem b² = c × q.',
        'After multiplying c by q, take the square root to turn b² into the actual leg length b.'
      ],
      formulas: ['b^2 = c \\times q', 'b = \\sqrt{c \\times q}'],
      validation: [
        'c must be greater than 0.',
        'q must be greater than 0.',
        'q must be less than c.'
      ]
    },
    diagram: {
      intro:
        'The diagram places q on the hypotenuse near leg b. That pairing is why q appears in the formula for leg b.',
      caption:
        'Right triangle diagram with leg a, leg b, hypotenuse c, altitude h, projection p, and projection q.',
      notes: [
        'Projection q is the segment connected with leg b.',
        'Projection p belongs to leg a, so it is not used here.',
        'The hypotenuse c is the full base made from p and q.'
      ]
    },
    howTo: [
      'Identify the hypotenuse c.',
      'Identify projection q on the hypotenuse.',
      'Enter c in the first field.',
      'Enter q in the second field.',
      'Calculate to find leg b.',
      'Check that the answer is less than c.'
    ],
    example: {
      intro: 'Suppose hypotenuse c = 10 and projection q = 6.4.',
      lines: ['b = √(c × q)', 'b = √(10 × 6.4)', 'b = √64', 'b = 8'],
      explanation:
        'Leg b is 8 units. The projection q tells how much of the hypotenuse belongs to the leg b side of the triangle.'
    },
    resultMeaning: [
      'The output is the length of leg b, not the projection q.',
      'Leg b should be shorter than the hypotenuse c in any valid right triangle.',
      'This result can be used with leg a and c to check the Pythagorean relationship.'
    ],
    whenUse: [
      'You have c and q from a diagram or word problem.',
      'You need leg b without first solving for angles.',
      'You are working with similar triangles formed by the altitude.',
      'You want to verify that q was labeled on the correct side.'
    ],
    commonMistakes: [
      'Forgetting the square root.',
      'Using projection p instead of q.',
      'Stopping at b² and not finding b.',
      'Using q greater than c.',
      'Mixing units between c and q.'
    ],
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'right triangle projection calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'right triangle projection q calculator' },
      { href: '/right-triangle-leg-a-from-projection-calculator/', label: 'right triangle leg a from projection calculator' },
      { href: '/right-triangle-side-calculator/', label: 'right triangle side calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'right triangle altitude from projections calculator' }
    ],
    faqs: [
      {
        question: 'What formula finds leg b from projection q?',
        answer: 'Use b² = c × q, then b = √(c × q). The square root gives the leg length.'
      },
      {
        question: 'What does the result b represent?',
        answer: 'It represents leg b of the right triangle. It is one of the two sides that form the right angle.'
      },
      {
        question: 'Why do I use q instead of p?',
        answer: 'Projection q is paired with leg b. Projection p is paired with leg a.'
      },
      {
        question: 'Can q be larger than c?',
        answer: 'No. q is only a segment of hypotenuse c, so it must be smaller than c.'
      },
      {
        question: 'Is b² the same as b?',
        answer: 'No. b² is the squared value. You still need the square root to get b.'
      }
    ]
  },
  {
    slug: 'right-triangle-hypotenuse-from-projections-calculator',
    url: '/right-triangle-hypotenuse-from-projections-calculator/',
    primaryKeyword: 'Right Triangle Hypotenuse From Projections Calculator',
    secondaryKeywords: [
      'hypotenuse from projections calculator',
      'find c from p and q',
      'right triangle projection sum calculator',
      'c = p + q calculator',
      'hypotenuse segment calculator',
      'right triangle hypotenuse projection calculator'
    ],
    h1: 'Right Triangle Hypotenuse From Projections Calculator',
    metaTitle: 'Right Triangle Hypotenuse From Projections Calculator | Find c = p + q',
    metaDescription:
      'Use this right triangle hypotenuse from projections calculator to find hypotenuse c from projection segments p and q with formula and steps.',
    calculatorHeading: 'Right Triangle Hypotenuse From Projections Calculator',
    formula: {
      slug: 'right-triangle-hypotenuse-from-projections',
      title: 'Hypotenuse From Projections',
      category: 'Advanced Relations',
      expression: 'c = p + q',
      description: 'Find hypotenuse c from projection p and projection q.',
      variables: ['p = projection', 'q = projection', 'c = hypotenuse'],
      notes: ['p must be greater than 0.', 'q must be greater than 0.'],
      calculator: {
        kind: 'hyp_from_pq',
        outputLabel: 'Hypotenuse c',
        outputUnit: 'units',
        fields: [
          { key: 'p', label: 'Projection p', min: 0 },
          { key: 'q', label: 'Projection q', min: 0 }
        ]
      }
    },
    intro: [
      'Use this calculator when the two hypotenuse projection segments p and q are known and the full hypotenuse c is missing.',
      'The altitude from the right angle divides the hypotenuse into two pieces. Add those two pieces together, and you get the whole hypotenuse.'
    ],
    calculatorNote:
      'Enter positive values for projection p and projection q. Both values are lengths along the hypotenuse.',
    formulaSection: {
      paragraphs: [
        'The formula is the simplest projection relation: the full hypotenuse equals the sum of its two parts.',
        'Use p for the segment associated with leg a and q for the segment associated with leg b. Both segments lie on c.'
      ],
      formulas: ['c = p + q'],
      validation: [
        'p must be greater than 0.',
        'q must be greater than 0.'
      ]
    },
    diagram: {
      intro:
        'The diagram shows c as the whole hypotenuse. The altitude h touches c at a point that separates it into p and q.',
      caption:
        'Right triangle with hypotenuse c split into projection p and projection q by altitude h.',
      notes: [
        'Projection p and projection q are measured on the same straight hypotenuse.',
        'The two projection segments do not overlap.',
        'Adding p and q gives the full length c.'
      ]
    },
    howTo: [
      'Identify projection p on the hypotenuse.',
      'Identify projection q on the hypotenuse.',
      'Enter p in the first field.',
      'Enter q in the second field.',
      'Calculate to find hypotenuse c.',
      'Use c with other projection formulas if you need leg a, leg b, or altitude h.'
    ],
    example: {
      intro: 'Suppose projection p = 3.6 and projection q = 6.4.',
      lines: ['c = p + q', 'c = 3.6 + 6.4', 'c = 10'],
      explanation:
        'The hypotenuse c is 10 units. The two projection segments combine to make the full hypotenuse.'
    },
    resultMeaning: [
      'The result is the total hypotenuse length c.',
      'It is not a leg, and it is not the altitude. It is the side opposite the right angle.',
      'If p and q came from the same triangle, the output should match the hypotenuse shown in the diagram.'
    ],
    whenUse: [
      'You know both hypotenuse projection segments.',
      'A diagram shows p and q but not c.',
      'You need c before finding leg a from a = √(c × p).',
      'You need c before finding leg b from b = √(c × q).'
    ],
    commonMistakes: [
      'Multiplying p and q instead of adding them.',
      'Forgetting that p and q are parts of c.',
      'Using negative projection values.',
      'Confusing projection segments with legs.',
      'Adding values measured in different units.'
    ],
    relatedLinks: [
      { href: '/right-triangle-projection-calculator/', label: 'right triangle projection calculator' },
      { href: '/right-triangle-projection-p-calculator/', label: 'right triangle projection p calculator' },
      { href: '/right-triangle-projection-q-calculator/', label: 'right triangle projection q calculator' },
      { href: '/right-triangle-altitude-from-projections-calculator/', label: 'right triangle altitude from projections calculator' },
      { href: '/right-triangle-side-calculator/', label: 'right triangle side calculator' }
    ],
    faqs: [
      {
        question: 'What formula finds the hypotenuse from projections?',
        answer: 'Use c = p + q. Add the two projection segments to get the full hypotenuse.'
      },
      {
        question: 'What does the result c mean?',
        answer: 'c is the hypotenuse of the right triangle. It is the full side made from p and q.'
      },
      {
        question: 'Are p and q legs of the triangle?',
        answer: 'No. p and q are projection segments on the hypotenuse, not the legs.'
      },
      {
        question: 'Can I use c after finding it?',
        answer: 'Yes. You can use c with p to find leg a or with q to find leg b.'
      },
      {
        question: 'Why are p and q added instead of multiplied?',
        answer: 'They are two adjacent parts of the same straight hypotenuse. Adjacent segment lengths add to the whole length.'
      }
    ]
  }
];

export const FOCUSED_PROJECTION_CALCULATOR_PAGE_SLUGS =
  FOCUSED_PROJECTION_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedProjectionCalculatorPage(
  slug: string
): FocusedProjectionCalculatorPage | undefined {
  return FOCUSED_PROJECTION_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
