import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';
import { FOCUSED_MEASUREMENT_CALCULATOR_TRANSLATIONS } from 'src/data/focusedMeasurementCalculatorTranslations';

export type FocusedMeasurementCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
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
  calculator: {
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  calculatorModes?: {
    formulaSlug: string;
    label: string;
    heading: string;
    outputLabel: string;
    fields: FormulaCalculatorField[];
  }[];
  diagram?: {
    h2: string;
    intro: string;
    caption: string;
    formulaLabel: string;
    keyLabel: string;
    sides: {
      a: {
        label: string;
        description: string;
      };
      b: {
        label: string;
        description: string;
      };
      c: {
        label: string;
        description: string;
      };
    };
    result: {
      label: string;
      description: string;
    };
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

export const FOCUSED_MEASUREMENT_CALCULATOR_PAGES: FocusedMeasurementCalculatorPage[] = [
  {
    slug: 'right-triangle-perimeter-calculator',
    url: '/right-triangle-perimeter-calculator/',
    h1: 'Right Triangle Perimeter Calculator',
    metaTitle: 'Right Triangle Perimeter Calculator | Find Perimeter of a Right Triangle Instantly',
    metaDescription: 'Calculate the perimeter of a right triangle from leg a, leg b, and hypotenuse c. Includes formula, step-by-step solution, diagram, worked examples, and real-world applications.',
    formulaSlug: 'perimeter',
    toolPurpose: 'Enter all three sides of a right triangle to instantly compute the total distance around it. The calculator shows the formula, step-by-step work, and a live diagram so you can verify every value before using the result.',
    intro: 'Enter leg a, leg b, and hypotenuse c to calculate the total perimeter of a right triangle.',
    quickSummary: {
      h2: 'What This Perimeter Calculator Solves',
      intro: 'Use this page when you already know all three side lengths of a right triangle and need the total boundary length. It is designed for quick arithmetic, unit-aware inputs, and easy visual checking.',
      cards: [
        { label: 'Known values', value: 'Leg a, leg b, and hypotenuse c' },
        { label: 'Finds', value: 'Perimeter P, the total distance around the triangle' },
        { label: 'Main formula', value: 'P = a + b + c' },
        { label: 'Best for', value: 'Fencing, trim, layout checks, geometry homework, and edge-length planning' }
      ]
    },
    calculator: {
      outputLabel: 'Perimeter P',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Perimeter Uses All Three Sides',
      intro: 'The diagram highlights the full outside path of the right triangle. Perimeter is not an inside measurement; it is the sum of the two legs and the hypotenuse.',
      caption: 'Right triangle perimeter diagram showing side a, side b, hypotenuse c, and formula P = a + b + c.',
      formulaLabel: 'P = a + b + c',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'Leg a is one side of the 90 degree corner and is included once in the perimeter.'
        },
        b: {
          label: 'b = second leg',
          description: 'Leg b is the other side of the right angle and is added together with a and c.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'Hypotenuse c is the longest side, opposite the right angle, and completes the boundary.'
        }
      },
      result: {
        label: 'P = total boundary length',
        description: 'The calculator adds a + b + c and returns the perimeter in the selected linear unit.'
      },
      notes: [
        'All three sides should use the same unit before you compare or reuse the answer.',
        'If one side is missing, solve that side first with the Pythagorean theorem, then return to perimeter.',
        'The perimeter result is a length, not a square-unit area.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Perimeter Formula',
      paragraphs: [
        'The perimeter of any polygon is the total length of its boundary. For a right triangle, the boundary consists of exactly three straight sides: two legs (a and b) that form the 90\u00b0 angle, and one hypotenuse (c) that stretches across from the right angle to the opposite vertex.',
        'Because a right triangle has only three sides, the perimeter formula is the simplest possible sum. No trigonometry, square roots, or exponents are needed \u2014 just addition.'
      ],
      formulas: ['P = a + b + c']
    },
    howTo: {
      h2: 'How to Find the Perimeter of a Right Triangle',
      steps: [
        'Identify all three sides of the right triangle. Label the two shorter sides as leg a and leg b, and the longest side as hypotenuse c.',
        'Make sure all three measurements use the same unit. Convert if necessary before entering values.',
        'Enter leg a into the first input field of the calculator.',
        'Enter leg b into the second input field.',
        'Enter hypotenuse c into the third input field.',
        'Click Calculate. The calculator adds the three values and displays the perimeter P along with step-by-step work.',
        'Review the result in the diagram to visually confirm the side lengths match your triangle.'
      ]
    },
    example: {
      h2: 'Worked Example: Find the Perimeter of a 3-4-5 Right Triangle',
      intro: 'The 3-4-5 triangle is one of the most common Pythagorean triples. Given a = 3, b = 4, c = 5:',
      lines: [
        'P = a + b + c',
        'P = 3 + 4 + 5',
        'P = 12'
      ],
      answer: 'The perimeter of this right triangle is 12 units. Since 3\u00b2 + 4\u00b2 = 9 + 16 = 25 = 5\u00b2, the sides satisfy the Pythagorean theorem and confirm a valid right triangle.'
    },
    extraSections: [
      {
        h2: 'What Is the Perimeter of a Right Triangle?',
        paragraphs: [
          'The perimeter of a right triangle is the total distance you would travel if you walked along all three edges of the triangle, starting at one vertex and returning to the same vertex. It represents the outer boundary of the triangular shape.',
          'Every right triangle has three sides: two legs that meet at the right angle (90\u00b0) and one hypotenuse opposite the right angle. The hypotenuse is always the longest of the three sides. When you add the lengths of all three sides together, you get the perimeter.',
          'The perimeter is a one-dimensional measurement expressed in linear units (such as centimeters, meters, feet, or inches). This is different from the area, which measures the two-dimensional space inside the triangle and is expressed in square units.'
        ]
      },
      {
        h2: 'Understanding the Sides of a Right Triangle',
        paragraphs: [
          'Before calculating the perimeter, it helps to clearly identify each side of the right triangle. Mislabeling a side is the most common source of errors.',
          'In the standard labeling convention, the two sides that form the right angle are called legs. The side opposite the right angle is called the hypotenuse. The hypotenuse is always longer than either leg individually, but it is always shorter than the sum of the two legs.'
        ],
        listTitle: 'The three sides at a glance:',
        listItems: [
          'Leg a \u2014 One of the two sides that forms the 90\u00b0 angle. It can be the vertical or horizontal side, depending on orientation.',
          'Leg b \u2014 The other side that forms the 90\u00b0 angle. Together with leg a, it defines the right angle.',
          'Hypotenuse c \u2014 The longest side, stretching from one acute angle vertex to the other, directly opposite the right angle.',
          'The Pythagorean relationship holds: a\u00b2 + b\u00b2 = c\u00b2. This lets you verify that your three values actually form a right triangle.'
        ]
      },
      {
        h2: 'How the Perimeter Formula Is Derived',
        paragraphs: [
          'The perimeter formula P = a + b + c is a direct application of the general polygon perimeter definition: add the lengths of all sides. For a triangle, there are exactly three sides, so the perimeter is the sum of three lengths.',
          'No derivation or rearrangement is needed because the formula is the simplest possible case of perimeter measurement. However, the formula becomes more interesting when only two sides are known, because you can use the Pythagorean theorem to find the missing third side and then compute the perimeter.'
        ]
      },
      {
        h2: 'Finding Perimeter When One Side Is Missing',
        paragraphs: [
          'If you know only two of the three sides of a right triangle, you can still find the perimeter. Use the Pythagorean theorem (a\u00b2 + b\u00b2 = c\u00b2) to calculate the missing side first, then add all three to get the perimeter.',
          'This approach lets you work with the two most common scenarios: knowing both legs but not the hypotenuse, or knowing the hypotenuse and one leg but not the other.'
        ],
        listTitle: 'Formulas for each missing-side case:',
        listItems: [
          'If c is missing: c = \u221a(a\u00b2 + b\u00b2), then P = a + b + \u221a(a\u00b2 + b\u00b2)',
          'If b is missing: b = \u221a(c\u00b2 \u2013 a\u00b2), then P = a + \u221a(c\u00b2 \u2013 a\u00b2) + c',
          'If a is missing: a = \u221a(c\u00b2 \u2013 b\u00b2), then P = \u221a(c\u00b2 \u2013 b\u00b2) + b + c',
          'Always verify that c > a and c > b when using the subtraction form, otherwise the values do not form a valid right triangle.'
        ]
      },
      {
        h2: 'Additional Worked Examples',
        paragraphs: [
          'Practicing with different triangles helps build confidence. Below are three more worked examples using common Pythagorean triples and decimal values.'
        ],
        listTitle: 'Example 1 \u2014 The 5-12-13 triangle:',
        listItems: [
          'Given: a = 5, b = 12, c = 13',
          'P = 5 + 12 + 13 = 30 units',
          'Verification: 5\u00b2 + 12\u00b2 = 25 + 144 = 169 = 13\u00b2 \u2713'
        ]
      },
      {
        h2: 'Example 2 \u2014 The 8-15-17 Triangle',
        paragraphs: [
          'Given: a = 8, b = 15, c = 17. This is another Pythagorean triple where all sides are whole numbers.'
        ],
        listItems: [
          'P = 8 + 15 + 17 = 40 units',
          'Verification: 8\u00b2 + 15\u00b2 = 64 + 225 = 289 = 17\u00b2 \u2713',
          'This triple is useful in construction layouts where 40-unit fence or trim lengths are needed.'
        ]
      },
      {
        h2: 'Example 3 \u2014 Decimal Sides',
        paragraphs: [
          'Not all right triangles have neat whole-number sides. Given: a = 2.5, b = 6, c = 6.5.'
        ],
        listItems: [
          'P = 2.5 + 6 + 6.5 = 15 units',
          'Verification: 2.5\u00b2 + 6\u00b2 = 6.25 + 36 = 42.25 = 6.5\u00b2 \u2713',
          'Decimal values work the same way \u2014 just add them directly.'
        ]
      },
      {
        h2: 'Perimeter vs. Area: What Is the Difference?',
        paragraphs: [
          'Perimeter and area both describe a triangle, but they measure different things. The perimeter measures the total edge length around the outside (a linear measurement), while the area measures the enclosed space inside the triangle (a square measurement).',
          'For a right triangle with legs a and b and hypotenuse c, the two formulas are: P = a + b + c for perimeter, and A = (a \u00d7 b) / 2 for area. Notice that the area formula uses only the two legs (because they are perpendicular), while the perimeter formula uses all three sides.',
          'A common mistake is confusing the two. If a problem asks for the distance of fencing around a triangular plot, you need the perimeter. If it asks for the surface coverage (like painting or tiling), you need the area.'
        ]
      },
      {
        h2: 'Real-World Applications of Right Triangle Perimeter',
        paragraphs: [
          'Knowing the perimeter of a right triangle is essential in many practical situations. Whenever you need to measure, cut, or purchase material that goes around the edges of a right-angled triangular shape, the perimeter tells you exactly how much material is required.'
        ],
        listTitle: 'Common real-world uses:',
        listItems: [
          'Fencing \u2014 A triangular garden bed or corner lot requires fencing around all three sides. The perimeter tells you how many linear feet of fencing to buy.',
          'Trim and molding \u2014 A triangular architectural feature (like a gable end) needs trim along its edges. The perimeter gives the total trim length.',
          'Wire and rope \u2014 Framing a right-angled display, banner, or sail requires rope, wire, or edging equal to the perimeter.',
          'Jogging and walking paths \u2014 A triangular running track or walking path around a right-angled park area has a total distance equal to the perimeter.',
          'Construction layout \u2014 Builders use the 3-4-5 rule to check if a corner is square. Knowing the perimeter helps verify measurements.',
          'Craft and sewing \u2014 Binding, piping, or lace around a triangular cushion or pennant requires perimeter-length material.',
          'Map and survey calculations \u2014 Surveyors measure triangular land plots and need the perimeter for boundary descriptions and property records.'
        ]
      },
      {
        h2: 'Relationship Between Perimeter and Semiperimeter',
        paragraphs: [
          'The semiperimeter (s) is exactly half the perimeter: s = P / 2 = (a + b + c) / 2. While the perimeter gives you the total boundary length, the semiperimeter is a convenience value used in more advanced formulas.',
          'The semiperimeter appears in Heron\u2019s formula for triangle area: A = \u221a[s(s\u2013a)(s\u2013b)(s\u2013c)]. It is also used to calculate the inradius (the radius of the inscribed circle): r = A / s. So the perimeter is the starting point for several important triangle calculations.',
          'If you have already calculated the perimeter using this tool, you can find the semiperimeter by simply dividing the result by 2, or use our dedicated semiperimeter calculator.'
        ]
      },
      {
        h2: 'Unit Conversion Tips',
        paragraphs: [
          'The perimeter result is only meaningful when all three input sides use the same unit. If your measurements are in different units, convert them first. The calculator includes a unit selector for each input field to handle conversions automatically.',
          'Remember that the perimeter is a linear measurement, so conversions follow standard length ratios \u2014 not area ratios. For example, to convert from feet to meters, multiply by 0.3048 (not by 0.3048\u00b2).'
        ],
        listTitle: 'Quick conversion reminders:',
        listItems: [
          '1 inch = 2.54 cm',
          '1 foot = 12 inches = 0.3048 m',
          '1 yard = 3 feet = 0.9144 m',
          '1 meter = 100 cm = 3.2808 feet',
          '1 kilometer = 1000 m = 0.6214 miles',
          '1 mile = 5280 feet = 1.6093 km'
        ]
      },
      {
        h2: 'Common Mistakes When Calculating Perimeter',
        paragraphs: [
          'The perimeter formula is simple, but mistakes still happen. Most errors come from incorrect inputs rather than wrong arithmetic. Catching these issues before you calculate saves time and prevents wrong answers.'
        ],
        listTitle: 'Watch out for these pitfalls:',
        listItems: [
          'Using only two sides \u2014 The perimeter requires all three sides. Forgetting the hypotenuse or one leg gives an incomplete answer.',
          'Mixing units \u2014 If leg a is in inches and leg b is in centimeters, the sum has no meaning. Convert to a single unit first.',
          'Confusing perimeter with area \u2014 Perimeter is a length (measured in units), while area is a surface (measured in square units). Make sure you know which one the problem is asking for.',
          'Using sides that don\u2019t form a right triangle \u2014 Check that a\u00b2 + b\u00b2 = c\u00b2. If this equation doesn\u2019t hold, the triangle isn\u2019t a right triangle and c is not a true hypotenuse.',
          'Rounding too early \u2014 If one side is irrational (like \u221a2), keep full precision until the final addition to avoid accumulating rounding error.',
          'Entering the hypotenuse as a leg \u2014 The hypotenuse must be the longest side. If you place a shorter value in the hypotenuse field, the diagram will look wrong and the Pythagorean check will fail.'
        ]
      },
      {
        h2: 'Perimeter Properties of a Right Triangle',
        paragraphs: [
          'Right triangles have special perimeter properties that set them apart from other triangles. Understanding these properties can help you verify your calculations and catch errors.',
          'In any right triangle, the hypotenuse c is always less than the sum of the two legs (a + b) but greater than either leg alone. This means the perimeter P is always greater than 2c (since a + b > c) and less than 2(a + b), which equals 2a + 2b.'
        ],
        listTitle: 'Key perimeter properties:',
        listItems: [
          'P is always greater than 2 \u00d7 (longest side) because the other two sides add additional length.',
          'P is always less than 3 \u00d7 (longest side) because c > a and c > b, so a + b < 2c.',
          'For a 45-45-90 triangle with legs of length k, P = k + k + k\u221a2 = k(2 + \u221a2) \u2248 3.414k.',
          'For a 30-60-90 triangle with shortest leg k, P = k + k\u221a3 + 2k = k(3 + \u221a3) \u2248 4.732k.',
          'Among all right triangles with the same hypotenuse, the isosceles right triangle (45-45-90) has the largest perimeter.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/right-triangle-semiperimeter-calculator/', label: 'Right Triangle Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for the perimeter of a right triangle?',
        answer: 'The perimeter formula is P = a + b + c, where a and b are the two legs (the sides forming the 90\u00b0 angle) and c is the hypotenuse (the longest side, opposite the right angle). Simply add all three side lengths together.'
      },
      {
        question: 'What does each variable mean in P = a + b + c?',
        answer: 'P is the perimeter (total boundary length). a is one leg of the right triangle. b is the other leg. c is the hypotenuse \u2014 the longest side that sits opposite the right angle. The two legs form the 90\u00b0 corner.'
      },
      {
        question: 'Can I find the perimeter with only two sides?',
        answer: 'Yes, but you must first calculate the missing third side using the Pythagorean theorem: c = \u221a(a\u00b2 + b\u00b2) if the hypotenuse is missing, or a missing leg = \u221a(c\u00b2 \u2013 known leg\u00b2). Then add all three sides to get the perimeter.'
      },
      {
        question: 'Is perimeter the same as area?',
        answer: 'No. Perimeter (P = a + b + c) measures the total distance around the triangle in linear units (cm, m, ft). Area (A = a\u00d7b/2) measures the enclosed space inside the triangle in square units (cm\u00b2, m\u00b2, ft\u00b2). They are fundamentally different measurements.'
      },
      {
        question: 'Do all three sides need to be in the same unit?',
        answer: 'Yes. All three sides must be expressed in the same unit before adding. If one side is in inches and another in centimeters, convert them to a common unit first. The calculator includes unit selectors on each input to handle this automatically.'
      },
      {
        question: 'What is the perimeter of a 3-4-5 right triangle?',
        answer: 'The perimeter is 3 + 4 + 5 = 12 units. The 3-4-5 triangle is the smallest Pythagorean triple with integer sides. Any scaled version (like 6-8-10 or 9-12-15) maintains the same ratio with the perimeter scaling proportionally.'
      },
      {
        question: 'How do I verify my triangle is actually a right triangle?',
        answer: 'Check that a\u00b2 + b\u00b2 = c\u00b2, where c is the longest side. If this equation holds true, the triangle has a 90\u00b0 angle and is a right triangle. If it doesn\u2019t hold, the perimeter formula still works but the triangle is not right-angled.'
      },
      {
        question: 'What is the relationship between perimeter and semiperimeter?',
        answer: 'The semiperimeter is exactly half the perimeter: s = P/2. If the perimeter P = 12, then the semiperimeter s = 6. The semiperimeter is used in Heron\u2019s formula and inradius calculations.'
      },
      {
        question: 'Can the perimeter of a right triangle be an odd number?',
        answer: 'Yes. The perimeter can be any positive number \u2014 integer, decimal, or irrational. For example, a right triangle with legs 1 and 1 has hypotenuse \u221a2 \u2248 1.414, giving perimeter \u2248 3.414, which is neither an integer nor rational.'
      },
      {
        question: 'Why is the hypotenuse always the longest side?',
        answer: 'In a right triangle, the hypotenuse is opposite the largest angle (90\u00b0). A fundamental rule in geometry is that the longest side is always opposite the largest angle. Since no angle in a triangle can exceed the right angle, c is always the longest side.'
      }
    ]
  },
  {
    slug: 'right-triangle-semiperimeter-calculator',
    url: '/right-triangle-semiperimeter-calculator/',
    h1: 'Right Triangle Semiperimeter Calculator',
    metaTitle: 'Right Triangle Semiperimeter Calculator | Find s from a, b, and c',
    metaDescription: 'Calculate right triangle semiperimeter s from leg a, leg b, and hypotenuse c. Includes formula, diagram, step-by-step work, examples, uses, and mistake checks.',
    formulaSlug: 'semiperimeter',
    toolPurpose: 'Find the semiperimeter s of a right triangle from all three side lengths, then use it as a clean checkpoint for area, inradius, and geometry formulas that depend on half the perimeter.',
    intro: 'Enter leg a, leg b, and hypotenuse c to calculate the right triangle semiperimeter s.',
    quickSummary: {
      h2: 'What This Semiperimeter Calculator Solves',
      intro: 'Use this page when you need the half-perimeter value s for a right triangle. It is especially helpful before using Heron-style area formulas, inradius formulas, or geometry identities that reference s.',
      cards: [
        { label: 'Known values', value: 'Leg a, leg b, and hypotenuse c' },
        { label: 'Finds', value: 'Semiperimeter s, exactly half of P' },
        { label: 'Main formula', value: 's = (a + b + c) / 2' },
        { label: 'Best for', value: 'Heron checks, inradius work, geometry proofs, and compact triangle notation' }
      ]
    },
    calculator: {
      outputLabel: 'Semiperimeter s',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Semiperimeter Is Half the Boundary',
      intro: 'The diagram shows the same three side lengths used for perimeter, but the result is divided by 2. Semiperimeter is still based on the outside edge of the triangle, not the interior area.',
      caption: 'Right triangle semiperimeter diagram showing side a, side b, hypotenuse c, and formula s = (a + b + c) / 2.',
      formulaLabel: 's = (a + b + c) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'Leg a is one of the two perpendicular sides included in the total before dividing by 2.'
        },
        b: {
          label: 'b = second leg',
          description: 'Leg b forms the right angle with a and contributes to both perimeter and semiperimeter.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'Hypotenuse c is the longest side and must be included before the total is halved.'
        }
      },
      result: {
        label: 's = half of the boundary total',
        description: 'The calculator first adds a + b + c, then divides that perimeter by 2.'
      },
      notes: [
        'Semiperimeter is a linear measurement, so it uses the same unit as the side lengths.',
        'If P is already known, use s = P / 2; if P is not known, use s = (a + b + c) / 2.',
        'For a valid right triangle, c should be the longest side and should satisfy a^2 + b^2 = c^2.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Semiperimeter Formula',
      paragraphs: [
        'The semiperimeter of a triangle is one-half of its perimeter. For a right triangle, the perimeter is P = a + b + c, so the semiperimeter is s = (a + b + c) / 2.',
        'The letter s is commonly used because semiperimeter appears in many compact geometry formulas. Even when the triangle is right-angled, s is useful as a bridge between side lengths, area, and circle measurements such as the inradius.',
        'Like perimeter, semiperimeter is measured in linear units. If the sides are in meters, s is in meters. If the sides are in inches, s is in inches.'
      ],
      formulas: [
        'P = a + b + c',
        's = \\frac{P}{2}',
        's = \\frac{a + b + c}{2}'
      ]
    },
    howTo: {
      h2: 'How to Find the Semiperimeter of a Right Triangle',
      steps: [
        'Identify the two legs of the right triangle. These are the sides that meet at the 90 degree angle.',
        'Identify the hypotenuse c. It is the longest side and sits opposite the right angle.',
        'Make sure a, b, and c all use the same measurement unit.',
        'Enter leg a, leg b, and hypotenuse c into the calculator.',
        'Click Calculate to add the three sides and divide the total by 2.',
        'Check the displayed steps. The calculator should show the perimeter total first, then the semiperimeter result.',
        'Use s in any later formula that asks for semiperimeter, such as inradius or Heron-style area relationships.'
      ]
    },
    example: {
      h2: 'Worked Example: Find the Semiperimeter of a 3-4-5 Right Triangle',
      intro: 'Given a = 3, b = 4, and c = 5, first add the three sides to get the perimeter, then divide by 2:',
      lines: [
        's = \\frac{a + b + c}{2}',
        's = \\frac{3 + 4 + 5}{2}',
        's = \\frac{12}{2}',
        's = 6'
      ],
      answer: 'The semiperimeter is 6 units. The full perimeter is 12 units, and s is exactly half of that total.'
    },
    extraSections: [
      {
        h2: 'What Does Semiperimeter Mean?',
        paragraphs: [
          'Semiperimeter literally means half of the perimeter. Instead of repeatedly writing (a + b + c) / 2 in longer formulas, geometry often uses the shorter symbol s.',
          'For a right triangle, this value is especially convenient because the side labels are already standardized: a and b are the legs, and c is the hypotenuse. Once those three side lengths are known, s is a single compact number that summarizes half the boundary length.'
        ]
      },
      {
        h2: 'Semiperimeter vs. Perimeter',
        paragraphs: [
          'Perimeter P measures the full distance around the outside of the triangle. Semiperimeter s measures half of that distance. The two values are directly connected: s = P / 2 and P = 2s.',
          'Use perimeter when a problem asks for the total boundary length, such as trim, fencing, or edge distance. Use semiperimeter when a formula specifically asks for s, or when you are preparing values for area and radius relationships.'
        ],
        listTitle: 'Quick comparison:',
        listItems: [
          'Perimeter: P = a + b + c',
          'Semiperimeter: s = (a + b + c) / 2',
          'If P = 30, then s = 15',
          'If s = 15, then P = 30'
        ]
      },
      {
        h2: 'Why Semiperimeter Matters in Right Triangle Geometry',
        paragraphs: [
          'Semiperimeter is more than a shortcut. It is a standard helper value used in formulas that connect side lengths to area and circle measurements.',
          'For any triangle, Heron\u2019s formula uses s to calculate area from three sides: A = sqrt(s(s-a)(s-b)(s-c)). For a right triangle you often use A = (a x b) / 2, but Heron\u2019s formula is still useful for verification.',
          'Semiperimeter also connects to the inradius. In many triangle formulas, area equals inradius times semiperimeter: A = r x s. Once s is known, it becomes easier to solve for r or verify an inradius result.'
        ],
        listTitle: 'Common formulas that use s:',
        listItems: [
          'Heron-style area: A = sqrt(s(s-a)(s-b)(s-c))',
          'Area-inradius relation: A = r x s',
          'Inradius rearrangement: r = A / s',
          'Perimeter recovery: P = 2s'
        ]
      },
      {
        h2: 'Additional Semiperimeter Examples',
        paragraphs: [
          'These examples show how the same formula works for whole-number triples and decimal side lengths. The key is to add all three sides before dividing.'
        ],
        listTitle: 'Example 1 - 5-12-13 triangle:',
        listItems: [
          'Given: a = 5, b = 12, c = 13',
          's = (5 + 12 + 13) / 2',
          's = 30 / 2 = 15 units'
        ]
      },
      {
        h2: 'Example 2 - 8-15-17 Triangle',
        paragraphs: [
          'For a = 8, b = 15, and c = 17, the full perimeter is 40 units.'
        ],
        listItems: [
          's = (8 + 15 + 17) / 2',
          's = 40 / 2',
          's = 20 units'
        ]
      },
      {
        h2: 'Example 3 - Decimal Side Lengths',
        paragraphs: [
          'Decimals work the same way as whole numbers. Given a = 2.5, b = 6, and c = 6.5:'
        ],
        listItems: [
          's = (2.5 + 6 + 6.5) / 2',
          's = 15 / 2',
          's = 7.5 units'
        ]
      },
      {
        h2: 'When to Use This Semiperimeter Calculator',
        paragraphs: [
          'Use this calculator when a geometry problem gives all three right-triangle side lengths and asks for s, half-perimeter, or a formula that depends on semiperimeter.',
          'It is also useful as a quick check after solving a missing side. Once you know a, b, and c, the semiperimeter should be simple and exact: add the sides, then divide by 2.'
        ],
        listTitle: 'Good use cases include:',
        listItems: [
          'Preparing Heron\u2019s formula inputs from three side lengths.',
          'Checking inradius calculations with r = A / s.',
          'Reducing repeated arithmetic in geometry homework or proofs.',
          'Comparing triangle sizes using half-boundary values.',
          'Verifying that perimeter and semiperimeter results match: P should always equal 2s.'
        ]
      },
      {
        h2: 'Unit Tips for Semiperimeter',
        paragraphs: [
          'Semiperimeter is a length, so it follows ordinary length-unit conversion rules. It is not measured in square units.',
          'If the side inputs use different units, convert them first or use the calculator\u2019s unit selectors consistently. Adding feet, inches, and centimeters directly would produce a meaningless result.'
        ],
        listTitle: 'Keep these unit rules in mind:',
        listItems: [
          'All side lengths should represent the same unit system before comparing results.',
          'The output s uses a linear unit such as cm, m, in, or ft.',
          'Do not square units when calculating semiperimeter.',
          'If you convert the sides after calculating, convert s by the same linear conversion factor.'
        ]
      },
      {
        h2: 'Common Semiperimeter Mistakes',
        paragraphs: [
          'Most semiperimeter mistakes happen because the formula looks simple. The arithmetic is easy, but the setup still matters.'
        ],
        listTitle: 'Watch out for these errors:',
        listItems: [
          'Forgetting to divide by 2 after adding the sides.',
          'Dividing each side by 2 first, then losing track of the total.',
          'Using only the two legs and leaving out the hypotenuse.',
          'Confusing s with perimeter P. Remember that P = 2s.',
          'Using side lengths that do not form a right triangle.',
          'Mixing different units in the same calculation.'
        ]
      },
      {
        h2: 'How Semiperimeter Connects to Area and Inradius',
        paragraphs: [
          'In a right triangle, area can be calculated directly with A = (a x b) / 2 because the legs are perpendicular. Once area and semiperimeter are known, the inradius can be checked with r = A / s.',
          'This makes semiperimeter a useful middle value. It does not replace the area formula, but it helps connect side lengths to circle measurements inside the triangle.'
        ],
        listTitle: 'Example with a 3-4-5 triangle:',
        listItems: [
          'Area: A = (3 x 4) / 2 = 6',
          'Semiperimeter: s = (3 + 4 + 5) / 2 = 6',
          'Inradius check: r = A / s = 6 / 6 = 1'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for right triangle semiperimeter?',
        answer: 'The formula is s = (a + b + c) / 2, where a and b are the legs of the right triangle and c is the hypotenuse. Add all three side lengths, then divide the total by 2.'
      },
      {
        question: 'What does semiperimeter mean?',
        answer: 'Semiperimeter means half of the triangle\u2019s perimeter. If the full perimeter is P, then s = P / 2. If the side lengths are known directly, s = (a + b + c) / 2.'
      },
      {
        question: 'Is semiperimeter the same as perimeter?',
        answer: 'No. Perimeter is the full boundary length around the triangle, while semiperimeter is half of that boundary length. They are related by P = 2s.'
      },
      {
        question: 'Why is semiperimeter used?',
        answer: 'Semiperimeter is used because it makes longer formulas easier to write and calculate. It appears in Heron\u2019s formula, the area-inradius relation A = r x s, and the inradius rearrangement r = A / s.'
      },
      {
        question: 'Do I need all three sides?',
        answer: 'Yes. To calculate semiperimeter directly, you need leg a, leg b, and hypotenuse c. If one side is missing, solve it first with the Pythagorean theorem, then calculate s.'
      },
      {
        question: 'What is the semiperimeter of a 3-4-5 right triangle?',
        answer: 'For a 3-4-5 right triangle, s = (3 + 4 + 5) / 2 = 12 / 2 = 6 units.'
      },
      {
        question: 'Does semiperimeter use square units?',
        answer: 'No. Semiperimeter is a length, so it uses linear units such as cm, m, in, or ft. Area uses square units, but semiperimeter does not.'
      },
      {
        question: 'How can I check that my semiperimeter answer is correct?',
        answer: 'Double the semiperimeter. The result should equal the full perimeter. For example, if s = 15, then P should be 30.'
      }
    ]
  },
    {
    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area From Legs Calculator',
    metaTitle: 'Right Triangle Area From Legs Calculator | Find Area = (a \u00D7 b) / 2',
    metaDescription: 'Use this right triangle area from legs calculator to find area from leg a and leg b.',
    formulaSlug: 'area-from-legs',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\text{Area} = (a \\times b) / 2']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.'],
      answer: 'Content will be added soon.'
    },
    extraSections: [
      {
        h2: 'Related Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-angle-calculator',
    url: '/right-triangle-area-from-angle-calculator/',
    h1: 'Right Triangle Area From Angle Calculator',
    metaTitle: 'Right Triangle Area From Angle Calculator | Find Area Using Angle',
    metaDescription: 'Use this right triangle area from angle calculator to find area using a side, hypotenuse, and an acute angle.',
    formulaSlug: 'area-sin-a',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    calculatorModes: [
      {
        formulaSlug: 'area-sin-a',
        label: 'Adjacent side b, hypotenuse c, angle A',
        heading: 'Find Area From Adjacent Side b, Hypotenuse c, and Angle A',
        outputLabel: 'Area',
        fields: [
          { key: 'b', label: 'Adjacent side b', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'A', label: 'Angle A', min: 0 }
        ]
      },
      {
        formulaSlug: 'area-sin-b',
        label: 'Opposite side a, hypotenuse c, angle B',
        heading: 'Find Area From Opposite Side a, Hypotenuse c, and Angle B',
        outputLabel: 'Area',
        fields: [
          { key: 'a', label: 'Opposite side a', min: 0 },
          { key: 'c', label: 'Hypotenuse c', min: 0 },
          { key: 'B', label: 'Angle B', min: 0 }
        ]
      }
    ],
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: [
        '\\text{Area} = (b \\times c \\times \\sin(A)) / 2',
        '\\text{Area} = (a \\times c \\times \\sin(B)) / 2'
      ]
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.'],
      answer: 'Content will be added soon.'
    },
    extraSections: [
      {
        h2: 'Related Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-semiperimeter-calculator',
    url: '/right-triangle-area-from-semiperimeter-calculator/',
    h1: 'Right Triangle Area From Semiperimeter Calculator',
    metaTitle: 'Right Triangle Area From Semiperimeter Calculator | Find Area = r \u00D7 s',
    metaDescription: 'Use this right triangle area from semiperimeter calculator to find area from inradius r and semiperimeter s.',
    formulaSlug: 'area-rs',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'r', label: 'Inradius r', min: 0 },
        { key: 's', label: 'Semiperimeter s', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\text{Area} = r \\times s']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.'],
      answer: 'Content will be added soon.'
    },
    extraSections: [
      {
        h2: 'Related Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-semiperimeter-calculator/', label: 'Right Triangle Semiperimeter Calculator' },
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-altitude-calculator',
    url: '/right-triangle-area-from-altitude-calculator/',
    h1: 'Right Triangle Area From Altitude Calculator',
    metaTitle: 'Right Triangle Area From Altitude Calculator | Find Area = (c \u00D7 h) / 2',
    metaDescription: 'Use this right triangle area from altitude calculator to find area from hypotenuse c and altitude h.',
    formulaSlug: 'area-ch',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'h', label: 'Altitude h', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\text{Area} = (c \\times h) / 2']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.'],
      answer: 'Content will be added soon.'
    },
    extraSections: [
      {
        h2: 'Related Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-altitude-calculator/', label: 'Right Triangle Altitude Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },
  {
  slug: "right-triangle-area-from-leg-and-angle-calculator",
  url: "/right-triangle-area-from-leg-and-angle-calculator/",
  h1: "Right Triangle Area from Leg and Angle",
  metaTitle: "Right Triangle Area from Leg and Angle Calculator | Find Area",
  metaDescription: "Calculate the right triangle area from one side and an angle. Uses sine and cosine area formulas with step-by-step solutions.",
  formulaSlug: "area-sin-a",
  toolPurpose: "Enter one leg, the hypotenuse, and the included angle to calculate area using trigonometric formulas.",
  intro: "Enter leg b, hypotenuse c, and angle A to find the exact area of your right triangle.",
  quickSummary: {
    h2: "What This Area Calculator Solves",
    intro: "Use this calculator when you only know two sides and the included angle. This method uses trigonometry to find the exact area without needing the third side.",
    cards: [
      {
        label: "Known values",
        value: "Leg b, hypotenuse c, and Angle A"
      },
      {
        label: "Finds",
        value: "Area (A)"
      },
      {
        label: "Main formula",
        value: "A = (b × c × sin(A)) / 2"
      },
      {
        label: "Best for",
        value: "Trigonometry problems, surveying, and cases missing the third side"
      }
    ]
  },
  calculator: {
    outputLabel: "Area",
    fields: [
      {
        key: "b",
        label: "Leg b",
        min: 0
      },
      {
        key: "c",
        label: "Hypotenuse c",
        min: 0
      },
      {
        key: "A",
        label: "Angle A",
        min: 0
      }
    ]
  },
  diagram: {
    h2: "Right Triangle Diagram: Area from Sine",
    intro: "The diagram shows the triangle with sides b and c forming the included angle A.",
    caption: "Right triangle area using the sine formula.",
    formulaLabel: "A = 0.5 × b × c × sin(A)",
    keyLabel: "Diagram Key",
    sides: {
      a: {
        label: "a = opposite leg",
        description: "Not required for this calculation."
      },
      b: {
        label: "b = adjacent leg",
        description: "One of the known sides forming the angle."
      },
      c: {
        label: "c = hypotenuse",
        description: "The other known side forming the angle."
      }
    },
    result: {
      label: "A = Area",
      description: "The area computed using trigonometric sine."
    },
    notes: [
      "Ensure the angle is entered in degrees.",
      "The formula A = 1/2 * ab * sin(C) applies to all triangles."
    ]
  },
  formulaSection: {
    h2: "Area Formula Using Sine",
    paragraphs: [
      "When you know two sides of any triangle and the angle between them, you can find the area using the sine rule for area: A = (1/2) * side1 * side2 * sin(angle).",
      "In a right triangle where you know a leg, the hypotenuse, and the angle between them, this becomes A = (1/2) * b * c * sin(A)."
    ],
    formulas: [
      "A = \\frac{1}{2} b c \\sin(A)"
    ]
  },
  howTo: {
    h2: "How to Calculate Area Using Sine",
    steps: [
      "Identify the leg, hypotenuse, and included angle.",
      "Enter leg b into the first input.",
      "Enter hypotenuse c into the second input.",
      "Enter angle A in degrees into the third input.",
      "Click Calculate to see the area."
    ]
  },
  example: {
    h2: "Worked Example: Area Using Angle",
    intro: "If leg b is 4, hypotenuse c is 5, and angle A is 36.87°:",
    lines: [
      "A = 0.5 \\times b \\times c \\times \\sin(A)",
      "A = 0.5 \\times 4 \\times 5 \\times \\sin(36.87^\\circ)",
      "A = 10 \\times 0.6",
      "A = 6"
    ],
    answer: "The area is 6 square units."
  },
  extraSections: [
    {
      h2: "Why Use Trigonometry for Area?",
      paragraphs: [
        "Sometimes you cannot easily measure all three sides of a triangle, but measuring two sides and their included angle is possible (such as in land surveying).",
        "This trigonometric approach gives the precise area without first having to solve the missing side using the Pythagorean theorem."
      ]
    }
  ],
  relatedLinks: [
    {
      href: "/right-triangle-area-from-legs-calculator/",
      label: "Right Triangle Area from Legs Calculator"
    },
    {
      href: "/right-triangle-area-calculator/",
      label: "Right Triangle Area Calculator"
    }
  ],
  faqs: [
    {
      question: "What if I know the other angle?",
      answer: "You can use A = (1/2) * a * c * sin(B) if you know leg a and angle B instead."
    }
  ]
},
  {
  slug: "right-triangle-area-from-inradius-and-semiperimeter-calculator",
  url: "/right-triangle-area-from-inradius-and-semiperimeter-calculator/",
  h1: "Right Triangle Area from Inradius & Semiperimeter",
  metaTitle: "Right Triangle Area from Inradius Calculator",
  metaDescription: "Calculate area from inradius (r) and semiperimeter (s) using A = r × s.",
  formulaSlug: "area-rs",
  toolPurpose: "Calculate the total area of a right triangle when the inradius and semiperimeter are known.",
  intro: "Enter the inradius r and semiperimeter s to calculate the right triangle area.",
  quickSummary: {
    h2: "What This Calculator Solves",
    intro: "This tool uses the elegant relationship between a triangle's inscribed circle and its semiperimeter to find the area instantly.",
    cards: [
      {
        label: "Known values",
        value: "Inradius r and Semiperimeter s"
      },
      {
        label: "Finds",
        value: "Area (A)"
      },
      {
        label: "Main formula",
        value: "A = r × s"
      },
      {
        label: "Best for",
        value: "Advanced geometry and circle theorems"
      }
    ]
  },
  calculator: {
    outputLabel: "Area",
    fields: [
      {
        key: "r",
        label: "Inradius r",
        min: 0
      },
      {
        key: "s",
        label: "Semiperimeter s",
        min: 0
      }
    ]
  },
  diagram: {
    h2: "Diagram: Inradius and Semiperimeter",
    intro: "The diagram illustrates the inscribed circle with radius r. The area of the full triangle is exactly r multiplied by the semiperimeter s.",
    caption: "Area formula A = r × s.",
    formulaLabel: "A = r × s",
    keyLabel: "Diagram Key",
    sides: {
      a: {
        label: "r = inradius",
        description: "Radius of inscribed circle."
      },
      b: {
        label: "s = semiperimeter",
        description: "Half the boundary distance."
      },
      c: {
        label: "A = area",
        description: "Total enclosed space."
      }
    },
    result: {
      label: "A = Area",
      description: "Computed as r × s."
    },
    notes: [
      "Both r and s must be positive lengths."
    ]
  },
  formulaSection: {
    h2: "Area Formula",
    paragraphs: [
      "For any triangle, the area can be found by multiplying the inradius (r) by the semiperimeter (s).",
      "This formula (A = r × s) is universally true for all triangles, not just right triangles."
    ],
    formulas: [
      "A = r \\times s"
    ]
  },
  howTo: {
    h2: "How to Calculate",
    steps: [
      "Identify inradius r and semiperimeter s.",
      "Enter r into the first field.",
      "Enter s into the second field.",
      "Multiply them to get the Area."
    ]
  },
  example: {
    h2: "Worked Example",
    intro: "If inradius is 2 and semiperimeter is 12 (as in a 6-8-10 triangle):",
    lines: [
      "A = r \\times s",
      "A = 2 \\times 12",
      "A = 24"
    ],
    answer: "The area is 24 square units."
  },
  extraSections: [
    {
      h2: "Where does this come from?",
      paragraphs: [
        "By splitting the triangle into three smaller triangles, each with height r and bases a, b, and c, their total area is 0.5*a*r + 0.5*b*r + 0.5*c*r = r*(a+b+c)/2 = r*s."
      ]
    }
  ],
  relatedLinks: [
    {
      href: "/right-triangle-area-calculator/",
      label: "Area Calculator"
    }
  ],
  faqs: [
    {
      question: "Does this work for non-right triangles?",
      answer: "Yes, A = rs works for any triangle."
    }
  ]
},
  {
  slug: "right-triangle-area-from-hypotenuse-and-altitude-calculator",
  url: "/right-triangle-area-from-hypotenuse-and-altitude-calculator/",
  h1: "Right Triangle Area from Hypotenuse & Altitude",
  metaTitle: "Right Triangle Area from Hypotenuse and Altitude",
  metaDescription: "Calculate area using the hypotenuse as the base and the altitude to the hypotenuse as the height.",
  formulaSlug: "area-ch",
  toolPurpose: "Calculate the total area when the hypotenuse and the altitude drawn to the hypotenuse are known.",
  intro: "Enter hypotenuse c and altitude h to calculate the area.",
  quickSummary: {
    h2: "What This Calculator Solves",
    intro: "Finds area by using the hypotenuse as the base of the triangle.",
    cards: [
      {
        label: "Known values",
        value: "Hypotenuse c and altitude h"
      },
      {
        label: "Finds",
        value: "Area (A)"
      },
      {
        label: "Main formula",
        value: "A = (c × h) / 2"
      },
      {
        label: "Best for",
        value: "Projection problems and alternate base perspectives"
      }
    ]
  },
  calculator: {
    outputLabel: "Area",
    fields: [
      {
        key: "c",
        label: "Hypotenuse c",
        min: 0
      },
      {
        key: "h",
        label: "Altitude h",
        min: 0
      }
    ]
  },
  diagram: {
    h2: "Diagram: Altitude to Hypotenuse",
    intro: "The diagram shows the right triangle rotated so the hypotenuse lies flat as the base.",
    caption: "Area formula A = (c × h) / 2.",
    formulaLabel: "A = (c × h) / 2",
    keyLabel: "Diagram Key",
    sides: {
      a: {
        label: "c = hypotenuse (base)",
        description: "The long side used as base."
      },
      b: {
        label: "h = altitude (height)",
        description: "Perpendicular height to hypotenuse."
      },
      c: {
        label: "A = area",
        description: "Total square units."
      }
    },
    result: {
      label: "A = Area",
      description: "Computed as (c × h) / 2."
    },
    notes: [
      "Altitude h must be less than or equal to c/2."
    ]
  },
  formulaSection: {
    h2: "Area Formula",
    paragraphs: [
      "A triangle's area is 1/2 × base × height. If you use the hypotenuse (c) as the base, the corresponding height is the altitude to the hypotenuse (h)."
    ],
    formulas: [
      "A = \\frac{1}{2} c h"
    ]
  },
  howTo: {
    h2: "How to Calculate",
    steps: [
      "Enter hypotenuse c.",
      "Enter altitude h.",
      "Click Calculate."
    ]
  },
  example: {
    h2: "Worked Example",
    intro: "If hypotenuse is 10 and altitude is 4.8:",
    lines: [
      "A = \\frac{1}{2} c h",
      "A = 0.5 \\times 10 \\times 4.8",
      "A = 24"
    ],
    answer: "The area is 24 square units."
  },
  extraSections: [
    {
      h2: "Altitude limits",
      paragraphs: [
        "In any right triangle, the maximum possible altitude to the hypotenuse is exactly half the length of the hypotenuse. If h > c/2, no such right triangle exists."
      ]
    }
  ],
  relatedLinks: [
    {
      href: "/right-triangle-area-calculator/",
      label: "Area Calculator"
    },
    {
      href: "/right-triangle-altitude-calculator/",
      label: "Altitude Calculator"
    }
  ],
  faqs: [
    {
      question: "Is this the same area as using the legs?",
      answer: "Yes. (a × b) / 2 always exactly equals (c × h) / 2."
    }
  ]
}
];

export const FOCUSED_MEASUREMENT_CALCULATOR_PAGE_SLUGS = FOCUSED_MEASUREMENT_CALCULATOR_PAGES.map(
  (page) => page.slug
);

export function getFocusedMeasurementCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
) {
  if (locale !== DEFAULT_LOCALE) {
    const translationsByLocale = FOCUSED_MEASUREMENT_CALCULATOR_TRANSLATIONS as unknown as Record<
      string,
      Record<string, FocusedMeasurementCalculatorPage>
    >;
    const localizedPage = translationsByLocale[locale]?.[slug];

    if (localizedPage) {
      return localizedPage;
    }
  }

  return FOCUSED_MEASUREMENT_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
