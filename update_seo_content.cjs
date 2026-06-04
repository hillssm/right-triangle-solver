const fs = require('fs');

let content = fs.readFileSync('src/data/focusedMeasurementCalculatorPages.ts', 'utf8');

// ============================================================================
// Page 1: RIGHT TRIANGLE AREA FROM LEGS CALCULATOR
// ============================================================================
const legsPageOld = `    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area From Legs Calculator',
    metaTitle: 'Right Triangle Area From Legs Calculator | Find Area = (a \\u00D7 b) / 2',
    metaDescription: 'Use this right triangle area from legs calculator to find area from leg a and leg b.',
    formulaSlug: 'area-from-legs',\r
    toolPurpose: 'Content will be added soon.',\r
    intro: 'Content will be added soon.',\r
    calculator: {\r
      outputLabel: 'Area',\r
      fields: [\r
        { key: 'a', label: 'Leg a', min: 0 },\r
        { key: 'b', label: 'Leg b', min: 0 }\r
      ]\r
    },\r
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\\\text{Area} = (a \\\\times b) / 2']
    },\r
    howTo: {\r
      h2: 'How to Use This Calculator',\r
      steps: ['Content will be added soon.']\r
    },\r
    example: {\r
      h2: 'Example',\r
      intro: 'Content will be added soon.',\r
      lines: ['Content will be added soon.'],\r
      answer: 'Content will be added soon.'\r
    },\r
    extraSections: [\r
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
    faqs: [\r
      {\r
        question: 'Content will be added soon?',\r
        answer: 'Content will be added soon.'\r
      }\r
    ]`;

const legsPageNew = `    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area From Legs Calculator',
    metaTitle: 'Right Triangle Area From Legs Calculator | Find Area = (a \\u00D7 b) / 2',
    metaDescription: 'Use this right triangle area from legs calculator to find area from leg a and leg b with formula, steps, and examples.',
    formulaSlug: 'area-from-legs',
    toolPurpose: 'Enter the two legs of a right triangle and this calculator instantly computes the area. It shows the formula used, a full step-by-step breakdown, and a live diagram so you can double-check every value before copying the result.',
    intro: 'Need the area of a right triangle when you already know both legs? This is the fastest method. Just type in leg a and leg b, and the calculator does the rest.',
    quickSummary: {
      h2: 'What This Area From Legs Calculator Solves',
      intro: 'This page is built for the simplest and most common area scenario: you know both perpendicular sides of a right triangle and want the enclosed area. No angles, no hypotenuse, no extra steps.',
      cards: [
        { label: 'Known values', value: 'Leg a and leg b (the two sides forming the right angle)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = (a \\u00D7 b) / 2' },
        { label: 'Best for', value: 'Geometry homework, flooring estimates, land plots, and quick area checks' }
      ]
    },
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    diagram: {
      h2: 'Triangle Diagram: Area From Two Legs',
      intro: 'The diagram below highlights the two legs that form the 90\\u00B0 angle. In this method, one leg serves as the base and the other as the height. The area is exactly half the rectangle those two legs would form.',
      caption: 'Right triangle area diagram showing leg a as the base, leg b as the height, the right angle marker, and the formula Area = (a \\u00D7 b) / 2.',
      formulaLabel: 'Area = (a \\u00D7 b) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg (base)',
          description: 'Leg a is one of the two sides that form the right angle. In this formula it acts as the base of the triangle.'
        },
        b: {
          label: 'b = second leg (height)',
          description: 'Leg b is the other side of the 90\\u00B0 corner. It acts as the perpendicular height for the area calculation.'
        },
        c: {
          label: 'c = hypotenuse (not needed)',
          description: 'The hypotenuse is the longest side, opposite the right angle. It is not used in this area formula.'
        }
      },
      result: {
        label: 'Area = half the product of both legs',
        description: 'Multiply leg a by leg b, then divide by 2. The result is the area in square units of whatever unit the legs use.'
      },
      notes: [
        'Both legs must use the same unit. Convert first if one is in centimeters and the other in meters.',
        'The area result is in square units. If the legs are in feet, the area is in square feet.',
        'It does not matter which leg you call a and which you call b. The product is the same either way.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Legs Formula',
      paragraphs: [
        'The two legs of a right triangle meet at a perfect 90\\u00B0 angle. That means one leg is automatically perpendicular to the other. In any triangle, area equals half the base times the height. Since the legs are already base and height, no extra geometry is needed.',
        'This is why the legs formula is the simplest way to find a right triangle\\u2019s area. You skip finding angles, the hypotenuse, or any trigonometric ratios. Just multiply and divide by two.'
      ],
      formulas: ['\\\\text{Area} = \\\\frac{a \\\\times b}{2}']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the two legs of your right triangle. These are the sides that form the 90\\u00B0 angle. Do not use the hypotenuse here.',
        'Make sure both legs are measured in the same unit. If one leg is 3 feet and the other is 24 inches, convert one so both match.',
        'Enter leg a into the first input field.',
        'Enter leg b into the second input field.',
        'Click Calculate. The tool multiplies the two legs, divides by 2, and displays the area along with step-by-step work.',
        'Check the diagram to visually confirm that the sides match your triangle.'
      ]
    },
    example: {
      h2: 'Worked Example: Area of a 6-8-10 Right Triangle',
      intro: 'Suppose you have a right triangle with leg a = 6 and leg b = 8. The hypotenuse would be 10, but you do not need it for this formula.',
      lines: [
        '\\\\text{Area} = \\\\frac{a \\\\times b}{2}',
        '\\\\text{Area} = \\\\frac{6 \\\\times 8}{2}',
        '\\\\text{Area} = \\\\frac{48}{2}',
        '\\\\text{Area} = 24'
      ],
      answer: 'The area is 24 square units. You can verify this: a 6 \\u00D7 8 rectangle has area 48, and the right triangle is exactly half of that rectangle.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The number you get is the flat surface enclosed by the three sides of the triangle. It is measured in square units. If your legs are in centimeters, the area is in square centimeters. If your legs are in meters, the area is in square meters.',
          'Think of it this way: if you drew the right triangle on a piece of grid paper, the area tells you how many unit squares fit inside it. A larger area means a bigger triangle.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is ideal whenever you already know both legs. That happens more often than you might think.'
        ],
        listTitle: 'Common situations where this calculator helps:',
        listItems: [
          'You measured two walls that meet at a right angle and want the floor area of the triangular corner.',
          'A geometry textbook gives you both legs and asks for the area.',
          'You are cutting a triangular piece from a rectangular sheet and need to know how much material the cutoff uses.',
          'You are estimating paint, tile, or fabric for a right-angled triangular section.'
        ]
      },
      {
        h2: 'Why This Formula Works',
        paragraphs: [
          'Imagine placing two identical right triangles together, with their hypotenuses touching. They form a perfect rectangle. The rectangle has width a and height b, so its area is a \\u00D7 b. Each triangle is exactly half of that rectangle. That is why you divide by 2.',
          'This geometric reasoning is the foundation of the half-base-times-height rule taught in every geometry class. For right triangles, the rule is especially clean because the two perpendicular legs are already the base and the height.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Even a simple formula can trip you up if you are not careful. Here are the errors students and professionals make most often with this method.'
        ],
        listItems: [
          'Using the hypotenuse instead of a leg \\u2014 The hypotenuse c is the longest side, opposite the right angle. It is not a leg. Plugging c into this formula gives a wrong, inflated area.',
          'Forgetting to divide by 2 \\u2014 Multiplying a \\u00D7 b gives the area of the rectangle, not the triangle. You must halve it.',
          'Mixing units \\u2014 If one leg is in centimeters and the other in meters, your answer will be nonsense. Convert to the same unit before calculating.',
          'Using only one leg \\u2014 You need both legs. If you only know one leg and the hypotenuse, use the Pythagorean theorem first to find the missing leg.',
          'Reporting area in linear units \\u2014 Area is always in square units (cm\\u00B2, m\\u00B2, ft\\u00B2), not plain centimeters or meters.'
        ]
      },
      {
        h2: 'Additional Example: Decimal Sides',
        paragraphs: [
          'Not every triangle has neat whole numbers. Suppose leg a = 3.5 and leg b = 9.2.'
        ],
        listItems: [
          'Area = (3.5 \\u00D7 9.2) / 2',
          'Area = 32.2 / 2',
          'Area = 16.1 square units',
          'The calculator handles decimals the same way it handles whole numbers.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for the area of a right triangle from its legs?',
        answer: 'The formula is Area = (a \\u00D7 b) / 2, where a and b are the two legs that form the right angle.'
      },
      {
        question: 'Do I need the hypotenuse to find the area from legs?',
        answer: 'No. This formula only needs the two legs. The hypotenuse is not part of the calculation.'
      },
      {
        question: 'What does the result represent?',
        answer: 'The result is the flat surface area enclosed by the triangle, measured in square units. For example, if the legs are in meters, the area is in square meters.'
      },
      {
        question: 'Can I swap leg a and leg b?',
        answer: 'Yes. Multiplication is commutative, so a \\u00D7 b equals b \\u00D7 a. The area is the same regardless of which leg you call a or b.'
      },
      {
        question: 'Why do I divide by 2?',
        answer: 'Two identical right triangles placed together form a rectangle with area a \\u00D7 b. Each triangle is half that rectangle, so you divide by 2.'
      }
    ]`;

// ============================================================================
// Page 2: RIGHT TRIANGLE AREA FROM ANGLE CALCULATOR
// ============================================================================
const anglePageOld = `    slug: 'right-triangle-area-from-angle-calculator',
    url: '/right-triangle-area-from-angle-calculator/',
    h1: 'Right Triangle Area From Angle Calculator',
    metaTitle: 'Right Triangle Area From Angle Calculator | Find Area Using Angle',
    metaDescription: 'Use this right triangle area from angle calculator to find area using a side, hypotenuse, and an acute angle.',
    formulaSlug: 'area-sin-a',\r
    toolPurpose: 'Content will be added soon.',\r
    intro: 'Content will be added soon.',\r
    calculator: {\r
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
        '\\\\text{Area} = (b \\\\times c \\\\times \\\\sin(A)) / 2',
        '\\\\text{Area} = (a \\\\times c \\\\times \\\\sin(B)) / 2'
      ]
    },\r
    howTo: {\r
      h2: 'How to Use This Calculator',\r
      steps: ['Content will be added soon.']\r
    },\r
    example: {\r
      h2: 'Example',\r
      intro: 'Content will be added soon.',\r
      lines: ['Content will be added soon.'],\r
      answer: 'Content will be added soon.'\r
    },\r
    extraSections: [\r
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
    faqs: [\r
      {\r
        question: 'Content will be added soon?',\r
        answer: 'Content will be added soon.'\r
      }\r
    ]`;

const anglePageNew = `    slug: 'right-triangle-area-from-angle-calculator',
    url: '/right-triangle-area-from-angle-calculator/',
    h1: 'Right Triangle Area From Angle Calculator',
    metaTitle: 'Right Triangle Area From Angle Calculator | Find Area Using Angle',
    metaDescription: 'Use this right triangle area from angle calculator to find area using a side, hypotenuse, and an acute angle with formula and steps.',
    formulaSlug: 'area-sin-a',
    toolPurpose: 'Enter one leg, the hypotenuse, and an acute angle to find the area of a right triangle. The calculator supports two modes\\u2014one for angle A with side b, and one for angle B with side a\\u2014so you can use whichever values you already have.',
    intro: 'Don\\u2019t know both legs? No problem. If you have one leg, the hypotenuse, and an acute angle, you can still find the area. This calculator uses the sine-based area rule to get you there.',
    quickSummary: {
      h2: 'What This Area From Angle Calculator Solves',
      intro: 'This page handles the scenario where you know one side, the hypotenuse c, and one acute angle. Instead of finding the missing leg first, the sine area formula jumps straight to the answer.',
      cards: [
        { label: 'Known values', value: 'One leg, hypotenuse c, and one acute angle (A or B)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Mode 1 formula', value: 'Area = (b \\u00D7 c \\u00D7 sin(A)) / 2' },
        { label: 'Mode 2 formula', value: 'Area = (a \\u00D7 c \\u00D7 sin(B)) / 2' }
      ]
    },
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
    diagram: {
      h2: 'Triangle Diagram: Area Using Angle and Sine',
      intro: 'This diagram labels both acute angles (A and B), the two legs (a and b), and the hypotenuse (c). In Mode 1, the calculator uses side b, hypotenuse c, and angle A. In Mode 2, it uses side a, hypotenuse c, and angle B.',
      caption: 'Right triangle diagram showing legs a and b, hypotenuse c, acute angles A and B, and the sine area formulas.',
      formulaLabel: 'Area = (b \\u00D7 c \\u00D7 sin A) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = leg opposite angle A',
          description: 'Leg a is opposite angle A and adjacent to angle B. It is used in Mode 2 with angle B.'
        },
        b: {
          label: 'b = leg opposite angle B',
          description: 'Leg b is opposite angle B and adjacent to angle A. It is used in Mode 1 with angle A.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The hypotenuse is the longest side, opposite the 90\\u00B0 angle. It appears in both area formulas.'
        }
      },
      result: {
        label: 'Area = half the product of side, hypotenuse, and sine of included angle',
        description: 'The sine function extracts the effective height from the known angle, so the formula computes area without needing the missing leg directly.'
      },
      notes: [
        'Make sure the angle corresponds to the correct side. Angle A pairs with side b; angle B pairs with side a.',
        'The angle must be in degrees for this calculator. Convert radians to degrees first if needed.',
        'The hypotenuse c must be longer than either leg, or the triangle is not valid.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Angle Formulas',
      paragraphs: [
        'The general triangle area rule says Area = (1/2) \\u00D7 side \\u00D7 side \\u00D7 sin(included angle). In a right triangle, you can apply this using either acute angle together with the hypotenuse and the leg adjacent to that angle.',
        'Mode 1 uses leg b (adjacent to angle A) and hypotenuse c. Mode 2 uses leg a (adjacent to angle B) and hypotenuse c. Both modes give the same area because they describe the same triangle\\u2014just from different angle perspectives.',
        'This approach is especially handy in surveying and physics where angle measurements are easier to take than direct side measurements.'
      ],
      formulas: [
        '\\\\text{Area} = \\\\frac{b \\\\times c \\\\times \\\\sin(A)}{2}',
        '\\\\text{Area} = \\\\frac{a \\\\times c \\\\times \\\\sin(B)}{2}'
      ]
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Decide which values you know. If you have leg b, hypotenuse c, and angle A, use Mode 1. If you have leg a, hypotenuse c, and angle B, switch to Mode 2.',
        'Select the correct mode using the tabs or dropdown at the top of the calculator.',
        'Enter the known leg value into the side field.',
        'Enter the hypotenuse c. Remember, c must be the longest side.',
        'Enter the acute angle in degrees. The angle must be between 0\\u00B0 and 90\\u00B0 (exclusive).',
        'Click Calculate. The result appears with step-by-step substitution so you can follow the math.',
        'Verify the answer makes sense: the area should be a positive number smaller than (leg \\u00D7 hypotenuse) / 2.'
      ]
    },
    example: {
      h2: 'Worked Example: Mode 1 \\u2014 Using Side b, Hypotenuse c, and Angle A',
      intro: 'Given b = 4, c = 5, and angle A = 36.87\\u00B0:',
      lines: [
        '\\\\text{Area} = \\\\frac{b \\\\times c \\\\times \\\\sin(A)}{2}',
        '\\\\text{Area} = \\\\frac{4 \\\\times 5 \\\\times \\\\sin(36.87^\\\\circ)}{2}',
        '\\\\text{Area} = \\\\frac{20 \\\\times 0.6}{2}',
        '\\\\text{Area} = \\\\frac{12}{2}',
        '\\\\text{Area} = 6'
      ],
      answer: 'The area is 6 square units. This matches the 3-4-5 triangle (since sin(36.87\\u00B0) \\u2248 0.6, and the area of a 3-4-5 triangle is (3 \\u00D7 4) / 2 = 6).'
    },
    extraSections: [
      {
        h2: 'Second Example: Mode 2 \\u2014 Using Side a, Hypotenuse c, and Angle B',
        paragraphs: [
          'Given a = 3, c = 5, and angle B = 53.13\\u00B0:'
        ],
        listItems: [
          'Area = (a \\u00D7 c \\u00D7 sin(B)) / 2',
          'Area = (3 \\u00D7 5 \\u00D7 sin(53.13\\u00B0)) / 2',
          'Area = (15 \\u00D7 0.8) / 2',
          'Area = 12 / 2',
          'Area = 6 square units',
          'Same triangle, same area, different inputs. This confirms both modes are consistent.'
        ]
      },
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The area tells you the flat space inside the triangle, measured in square units. If your side lengths are in meters and the angle is in degrees, the area is in square meters.',
          'A larger angle (closer to 90\\u00B0) with the same sides produces a larger area. A smaller angle produces a smaller area. At exactly 0\\u00B0 or 90\\u00B0, the formula breaks down because sin(0) = 0 and sin(90) = 1 would make this a degenerate case or reduce to the legs formula.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This calculator saves time when you have partial measurements. Instead of finding the missing leg first and then using the legs formula, you jump straight to the area.'
        ],
        listTitle: 'Typical scenarios:',
        listItems: [
          'A surveyor knows the distance to two points and the angle between sightlines.',
          'A physics problem gives you a force vector magnitude (hypotenuse), a component (leg), and the angle.',
          'A roofing contractor knows the rafter length (hypotenuse), the run (leg), and the roof pitch angle.',
          'You measured one wall, the diagonal, and the corner angle in a room layout.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The angle-based area formula has more moving parts than the legs method, so mistakes happen more often. Watch out for these.'
        ],
        listItems: [
          'Using degrees when the calculator expects radians, or vice versa \\u2014 This calculator expects degrees. If your angle is in radians, convert it first (multiply by 180/\\u03C0).',
          'Pairing the wrong angle with the wrong side \\u2014 Angle A must go with side b (adjacent to A). Angle B must go with side a (adjacent to B). Swapping them gives a wrong answer.',
          'Using the wrong side with the hypotenuse \\u2014 The formula needs one leg and the hypotenuse. Do not enter two legs or two angles.',
          'Forgetting to divide by 2 \\u2014 The product b \\u00D7 c \\u00D7 sin(A) is double the area. You must halve it.',
          'Entering an angle of 0\\u00B0 or 90\\u00B0 \\u2014 An angle of 0\\u00B0 gives zero area. An angle of 90\\u00B0 is the right angle itself, not an acute angle. Both are invalid inputs.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' }
    ],
    faqs: [
      {
        question: 'What formulas does this calculator use?',
        answer: 'Mode 1 uses Area = (b \\u00D7 c \\u00D7 sin(A)) / 2. Mode 2 uses Area = (a \\u00D7 c \\u00D7 sin(B)) / 2. Both give the same result for the same triangle.'
      },
      {
        question: 'Why does the formula use the sine function?',
        answer: 'The sine of the included angle converts the hypotenuse and adjacent leg into an effective base-times-height product. It extracts the perpendicular height without measuring it directly.'
      },
      {
        question: 'What does the area result actually tell me?',
        answer: 'It tells you the total flat space enclosed by the three sides of the right triangle, measured in square units.'
      },
      {
        question: 'Can I use this if I know both legs?',
        answer: 'You can, but the legs formula Area = (a \\u00D7 b) / 2 is simpler and does not need an angle. Use the right triangle area from legs calculator instead.'
      },
      {
        question: 'Does the angle need to be in degrees or radians?',
        answer: 'This calculator expects degrees. If your angle is in radians, multiply by 180/\\u03C0 to convert it before entering.'
      }
    ]`;

// ============================================================================
// Page 3: RIGHT TRIANGLE AREA FROM SEMIPERIMETER CALCULATOR
// ============================================================================
const semiPageOld = `    slug: 'right-triangle-area-from-semiperimeter-calculator',
    url: '/right-triangle-area-from-semiperimeter-calculator/',
    h1: 'Right Triangle Area From Semiperimeter Calculator',
    metaTitle: 'Right Triangle Area From Semiperimeter Calculator | Find Area = r \\u00D7 s',
    metaDescription: 'Use this right triangle area from semiperimeter calculator to find area from inradius r and semiperimeter s.',
    formulaSlug: 'area-rs',\r
    toolPurpose: 'Content will be added soon.',\r
    intro: 'Content will be added soon.',\r
    calculator: {\r
      outputLabel: 'Area',\r
      fields: [\r
        { key: 'r', label: 'Inradius r', min: 0 },\r
        { key: 's', label: 'Semiperimeter s', min: 0 }\r
      ]\r
    },\r
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\\\text{Area} = r \\\\times s']
    },\r
    howTo: {\r
      h2: 'How to Use This Calculator',\r
      steps: ['Content will be added soon.']\r
    },\r
    example: {\r
      h2: 'Example',\r
      intro: 'Content will be added soon.',\r
      lines: ['Content will be added soon.'],\r
      answer: 'Content will be added soon.'\r
    },\r
    extraSections: [\r
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
    faqs: [\r
      {\r
        question: 'Content will be added soon?',\r
        answer: 'Content will be added soon.'\r
      }\r
    ]`;

const semiPageNew = `    slug: 'right-triangle-area-from-semiperimeter-calculator',
    url: '/right-triangle-area-from-semiperimeter-calculator/',
    h1: 'Right Triangle Area From Semiperimeter Calculator',
    metaTitle: 'Right Triangle Area From Semiperimeter Calculator | Find Area = r \\u00D7 s',
    metaDescription: 'Use this right triangle area from semiperimeter calculator to find area from inradius r and semiperimeter s with formula and steps.',
    formulaSlug: 'area-rs',
    toolPurpose: 'Enter the inradius and semiperimeter of a right triangle and this calculator gives you the area instantly. It displays the formula, the substitution, and the final answer so you can verify the math at every step.',
    intro: 'Already know the inradius and semiperimeter of your right triangle? Then finding the area is just one multiplication away. This calculator handles that specific case.',
    quickSummary: {
      h2: 'What This Area From Semiperimeter Calculator Solves',
      intro: 'This page covers a less common but powerful area method: using the incircle radius (r) and the semiperimeter (s). It is most useful in advanced geometry problems and competition math where these values are already computed.',
      cards: [
        { label: 'Known values', value: 'Inradius r and semiperimeter s' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = r \\u00D7 s' },
        { label: 'Best for', value: 'Advanced geometry, math competitions, problems involving incircles, and cross-checking area from other methods' }
      ]
    },
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'r', label: 'Inradius r', min: 0 },
        { key: 's', label: 'Semiperimeter s', min: 0 }
      ]
    },
    diagram: {
      h2: 'Triangle Diagram: Area From Inradius and Semiperimeter',
      intro: 'The diagram shows a right triangle with its inscribed circle (incircle). The incircle touches all three sides. Its radius is r, and the semiperimeter s is half the sum of all three sides.',
      caption: 'Right triangle diagram showing the incircle with radius r, the three sides a, b, and c, and the semiperimeter relationship s = (a + b + c) / 2.',
      formulaLabel: 'Area = r \\u00D7 s',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'One of the two sides forming the right angle. It is tangent to the inscribed circle.'
        },
        b: {
          label: 'b = second leg',
          description: 'The other side forming the right angle. Also tangent to the inscribed circle.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The longest side, opposite the right angle. The incircle touches it at one tangent point.'
        }
      },
      result: {
        label: 'Area = product of inradius and semiperimeter',
        description: 'The inradius r times the semiperimeter s gives the triangle area directly. This works for any triangle, not just right triangles.'
      },
      notes: [
        'The semiperimeter s = (a + b + c) / 2. It is half the perimeter, not the full perimeter.',
        'For a right triangle, the inradius can also be calculated as r = (a + b \\u2013 c) / 2.',
        'If you only know the three sides, compute r and s from them, then use this formula as a cross-check.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Semiperimeter Formula',
      paragraphs: [
        'Every triangle has an inscribed circle (incircle) that touches all three sides. The radius of this circle is called the inradius, labeled r. The semiperimeter s is half the total perimeter: s = (a + b + c) / 2.',
        'The beautiful identity Area = r \\u00D7 s connects these two values directly to the area. It works because the incircle divides the triangle into three smaller triangles, each with the same height r and bases equal to the three sides. Their combined area equals r \\u00D7 s.',
        'For right triangles specifically, there is a handy shortcut: r = (a + b \\u2013 c) / 2. So if you know the three sides, you can find r and s quickly and then multiply.'
      ],
      formulas: ['\\\\text{Area} = r \\\\times s']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Find the inradius r of your right triangle. If you know all three sides, use r = (a + b \\u2013 c) / 2.',
        'Find the semiperimeter s. Add all three sides and divide by 2: s = (a + b + c) / 2.',
        'Enter r into the first input field.',
        'Enter s into the second input field.',
        'Click Calculate. The tool multiplies r and s and displays the area with step-by-step work.',
        'Compare the result with other area methods if you want to cross-check your answer.'
      ]
    },
    example: {
      h2: 'Worked Example: Area From Inradius and Semiperimeter',
      intro: 'Consider a 3-4-5 right triangle. First, find r and s:',
      lines: [
        's = \\\\frac{a + b + c}{2} = \\\\frac{3 + 4 + 5}{2} = 6',
        'r = \\\\frac{a + b - c}{2} = \\\\frac{3 + 4 - 5}{2} = 1',
        '\\\\text{Area} = r \\\\times s = 1 \\\\times 6 = 6'
      ],
      answer: 'The area is 6 square units. This matches the legs formula: (3 \\u00D7 4) / 2 = 6. The two methods agree, confirming the result.'
    },
    extraSections: [
      {
        h2: 'Second Example: Larger Triangle',
        paragraphs: [
          'Take a right triangle with legs a = 5, b = 12, and hypotenuse c = 13.'
        ],
        listItems: [
          's = (5 + 12 + 13) / 2 = 15',
          'r = (5 + 12 \\u2013 13) / 2 = 2',
          'Area = r \\u00D7 s = 2 \\u00D7 15 = 30 square units',
          'Cross-check with legs: (5 \\u00D7 12) / 2 = 30 \\u2713'
        ]
      },
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The result is the enclosed flat area of the right triangle, just like any other area method. The units are square units based on whatever units r and s use.',
          'This formula is especially valued in proofs and competition problems because it connects circle geometry (the incircle) with basic triangle measurement. It shows that the area depends only on how big the incircle is and how long the boundary is.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is not the first one most people reach for. But it shines in specific situations.'
        ],
        listTitle: 'Best use cases:',
        listItems: [
          'A math competition problem gives you r and s directly and asks for the area.',
          'You are working on a proof that involves the incircle and need to express area in terms of r and s.',
          'You already computed the perimeter and inradius for another purpose and want the area without redoing the calculation from scratch.',
          'You want to cross-check an area result obtained from the legs formula or the altitude formula.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The formula itself is simple, but the inputs can be tricky. Here are the most frequent errors.'
        ],
        listItems: [
          'Confusing semiperimeter s with perimeter P \\u2014 The semiperimeter is half the perimeter. If you enter the full perimeter instead of s, your area will be doubled.',
          'Using the circumradius instead of the inradius \\u2014 The circumradius R is the radius of the circle around the triangle, not the one inside it. For a right triangle, R = c / 2. The inradius r is always smaller.',
          'Forgetting the formula is Area = r \\u00D7 s \\u2014 Some students try to divide by 2 again, but that is already built into the semiperimeter. Just multiply r and s directly.',
          'Entering zero or negative values \\u2014 Both r and s must be positive. A zero or negative inradius means your triangle data is incorrect.'
        ]
      },
      {
        h2: 'How to Find r and s From the Three Sides',
        paragraphs: [
          'If you know legs a and b and hypotenuse c, you can compute r and s yourself before using this calculator.'
        ],
        listItems: [
          'Semiperimeter: s = (a + b + c) / 2',
          'Inradius for any right triangle: r = (a + b \\u2013 c) / 2',
          'Example: For a 5-12-13 triangle, s = 15 and r = 2',
          'You can also find r using the semiperimeter calculator and the radius calculator on this site.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-semiperimeter-calculator/', label: 'Right Triangle Semiperimeter Calculator' },
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for area using inradius and semiperimeter?',
        answer: 'The formula is Area = r \\u00D7 s, where r is the inradius (radius of the inscribed circle) and s is the semiperimeter (half the perimeter).'
      },
      {
        question: 'How do I find the inradius of a right triangle?',
        answer: 'For a right triangle with legs a and b and hypotenuse c, the inradius is r = (a + b \\u2013 c) / 2.'
      },
      {
        question: 'What does the result represent?',
        answer: 'It represents the enclosed flat area of the triangle in square units, identical to what any other area formula would give for the same triangle.'
      },
      {
        question: 'Is this the same as Heron\\u2019s formula?',
        answer: 'No. Heron\\u2019s formula uses only the three sides: Area = \\u221A(s(s\\u2013a)(s\\u2013b)(s\\u2013c)). The r \\u00D7 s formula is simpler but requires the inradius.'
      },
      {
        question: 'Does this formula work for all triangles?',
        answer: 'Yes. Area = r \\u00D7 s works for any triangle, not just right triangles. But the shortcut r = (a + b \\u2013 c) / 2 only applies to right triangles.'
      }
    ]`;

// ============================================================================
// Page 4: RIGHT TRIANGLE AREA FROM ALTITUDE CALCULATOR
// ============================================================================
const altPageOld = `    slug: 'right-triangle-area-from-altitude-calculator',
    url: '/right-triangle-area-from-altitude-calculator/',
    h1: 'Right Triangle Area From Altitude Calculator',
    metaTitle: 'Right Triangle Area From Altitude Calculator | Find Area = (c \\u00D7 h) / 2',
    metaDescription: 'Use this right triangle area from altitude calculator to find area from hypotenuse c and altitude h.',
    formulaSlug: 'area-ch',\r
    toolPurpose: 'Content will be added soon.',\r
    intro: 'Content will be added soon.',\r
    calculator: {\r
      outputLabel: 'Area',\r
      fields: [\r
        { key: 'c', label: 'Hypotenuse c', min: 0 },\r
        { key: 'h', label: 'Altitude h', min: 0 }\r
      ]\r
    },\r
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['\\\\text{Area} = (c \\\\times h) / 2']
    },\r
    howTo: {\r
      h2: 'How to Use This Calculator',\r
      steps: ['Content will be added soon.']\r
    },\r
    example: {\r
      h2: 'Example',\r
      intro: 'Content will be added soon.',\r
      lines: ['Content will be added soon.'],\r
      answer: 'Content will be added soon.'\r
    },\r
    extraSections: [\r
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
    faqs: [\r
      {\r
        question: 'Content will be added soon?',\r
        answer: 'Content will be added soon.'\r
      }\r
    ]`;

const altPageNew = `    slug: 'right-triangle-area-from-altitude-calculator',
    url: '/right-triangle-area-from-altitude-calculator/',
    h1: 'Right Triangle Area From Altitude Calculator',
    metaTitle: 'Right Triangle Area From Altitude Calculator | Find Area = (c \\u00D7 h) / 2',
    metaDescription: 'Use this right triangle area from altitude calculator to find area from hypotenuse c and altitude h with formula, steps, and examples.',
    formulaSlug: 'area-ch',
    toolPurpose: 'Enter the hypotenuse and the altitude drawn to it, and this calculator computes the area of the right triangle. It shows the formula, step-by-step substitution, and a diagram that makes the geometry easy to visualize.',
    intro: 'When you know the hypotenuse and the perpendicular distance from the right-angle vertex to the hypotenuse, you can find the area in one step. This calculator handles that case.',
    quickSummary: {
      h2: 'What This Area From Altitude Calculator Solves',
      intro: 'This page covers the altitude-based area method. The altitude h is the perpendicular line segment from the right-angle vertex to the hypotenuse. Combined with the hypotenuse length, it gives the area directly.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and altitude h (drawn to the hypotenuse)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = (c \\u00D7 h) / 2' },
        { label: 'Best for', value: 'Altitude problems, geometric mean exercises, and cases where legs are unknown' }
      ]
    },
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'h', label: 'Altitude h', min: 0 }
      ]
    },
    diagram: {
      h2: 'Triangle Diagram: Area From Hypotenuse and Altitude',
      intro: 'The diagram shows the right triangle with the hypotenuse c as the base and the altitude h drawn perpendicular from the right-angle vertex down to c. This altitude splits the hypotenuse into two segments.',
      caption: 'Right triangle diagram showing hypotenuse c as the base, altitude h drawn from the right-angle vertex perpendicular to c, and the formula Area = (c \\u00D7 h) / 2.',
      formulaLabel: 'Area = (c \\u00D7 h) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'One of the two sides forming the right angle. Not directly used in this formula, but the altitude h is derived from both legs and the hypotenuse.'
        },
        b: {
          label: 'b = second leg',
          description: 'The other side forming the right angle. Together with leg a, it determines the altitude: h = (a \\u00D7 b) / c.'
        },
        c: {
          label: 'c = hypotenuse (base in this method)',
          description: 'The longest side of the right triangle. In this formula, c acts as the base of the triangle.'
        }
      },
      result: {
        label: 'h = altitude to the hypotenuse',
        description: 'The perpendicular distance from the right-angle vertex to the hypotenuse. Multiplied by c and divided by 2, it gives the area.'
      },
      notes: [
        'The altitude h is NOT the same as leg a or leg b. It is the perpendicular dropped from the 90\\u00B0 vertex to the hypotenuse.',
        'The altitude always falls inside the triangle for a right triangle.',
        'If you know both legs, you can find h = (a \\u00D7 b) / c and then verify the area using this method.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Altitude Formula',
      paragraphs: [
        'The standard area formula for any triangle is Area = (base \\u00D7 height) / 2. In this method, the hypotenuse c is the base, and the altitude h is the corresponding height\\u2014the perpendicular distance from the opposite vertex to that base.',
        'For a right triangle, this altitude h drops from the right-angle vertex straight down to the hypotenuse. It creates two smaller right triangles inside the original one, each similar to the whole triangle. This relationship is the foundation of the geometric mean theorem.',
        'The altitude h is related to the legs by h = (a \\u00D7 b) / c. So even though this formula uses h and c instead of a and b, it produces the same area as the legs formula. They are algebraically equivalent.'
      ],
      formulas: ['\\\\text{Area} = \\\\frac{c \\\\times h}{2}']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the hypotenuse c of your right triangle. This is the side opposite the right angle and always the longest side.',
        'Identify the altitude h. This is the perpendicular line from the right-angle vertex to the hypotenuse. It is not the same as either leg.',
        'Enter c into the Hypotenuse field.',
        'Enter h into the Altitude field.',
        'Click Calculate. The calculator multiplies c by h, divides by 2, and shows the area with step-by-step work.',
        'Check the diagram to make sure you used the correct altitude, not a leg.'
      ]
    },
    example: {
      h2: 'Worked Example: Area of a Right Triangle With c = 10 and h = 4.8',
      intro: 'Suppose the hypotenuse is 10 and the altitude to the hypotenuse is 4.8:',
      lines: [
        '\\\\text{Area} = \\\\frac{c \\\\times h}{2}',
        '\\\\text{Area} = \\\\frac{10 \\\\times 4.8}{2}',
        '\\\\text{Area} = \\\\frac{48}{2}',
        '\\\\text{Area} = 24'
      ],
      answer: 'The area is 24 square units. This matches a 6-8-10 right triangle where the altitude to the hypotenuse is h = (6 \\u00D7 8) / 10 = 4.8.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The number you get is the enclosed flat area of the right triangle, measured in square units. If c and h are in meters, the area is in square meters.',
          'Think of the hypotenuse as the base of the triangle laid flat on a table. The altitude h is the height of the triangle measured perpendicular to that base. Half of base times height gives the area\\u2014the same logic behind every triangle area calculation.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is ideal when you happen to know the hypotenuse and the altitude but not both legs. That comes up in several situations.'
        ],
        listTitle: 'Common scenarios:',
        listItems: [
          'A geometry problem gives you the hypotenuse and the altitude and asks for the area directly.',
          'You are studying the geometric mean theorem and need to verify area relationships.',
          'A construction drawing shows the span (hypotenuse) and the perpendicular height of a triangular brace.',
          'You calculated h from other measurements and want a quick area check without reconstructing both legs.'
        ]
      },
      {
        h2: 'The Connection Between Altitude and Legs',
        paragraphs: [
          'If you know both legs a and b and the hypotenuse c, you can always compute the altitude: h = (a \\u00D7 b) / c. This means the altitude formula and the legs formula are two views of the same underlying math.',
          'Plugging h = (a \\u00D7 b) / c into Area = (c \\u00D7 h) / 2 gives Area = (c \\u00D7 (a \\u00D7 b) / c) / 2 = (a \\u00D7 b) / 2. The c values cancel, and you get back the legs formula. This confirms both methods always agree.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The altitude formula is straightforward, but confusing h with other measurements is the top source of wrong answers.'
        ],
        listItems: [
          'Using a leg instead of the altitude \\u2014 Leg a or leg b is not the altitude to the hypotenuse. The altitude h is a separate segment drawn inside the triangle, perpendicular to c.',
          'Forgetting to divide by 2 \\u2014 Multiplying c \\u00D7 h gives the area of a parallelogram, not the triangle. Always divide by 2.',
          'Confusing h with the hypotenuse c \\u2014 The variable h stands for altitude (height), not hypotenuse. They are completely different measurements.',
          'Using an altitude that belongs to a different base \\u2014 This formula specifically uses the altitude drawn to the hypotenuse. The altitude from a different vertex to a different side is a different length.',
          'Entering the altitude of a different triangle \\u2014 Make sure h actually belongs to the triangle with hypotenuse c. If h was measured for a different triangle, the result is meaningless.'
        ]
      },
      {
        h2: 'Additional Example: Decimal Values',
        paragraphs: [
          'Let c = 13 and h = 4.615 (approximately the altitude of a 5-12-13 triangle where h = (5 \\u00D7 12) / 13).'
        ],
        listItems: [
          'Area = (c \\u00D7 h) / 2',
          'Area = (13 \\u00D7 4.615) / 2',
          'Area = 59.995 / 2',
          'Area \\u2248 30 square units',
          'Cross-check with legs: (5 \\u00D7 12) / 2 = 30 \\u2713'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-altitude-calculator/', label: 'Right Triangle Altitude Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ],
    faqs: [
      {
        question: 'What is the altitude h in a right triangle?',
        answer: 'The altitude h is the perpendicular line segment drawn from the right-angle vertex to the hypotenuse. It is not the same as either leg.'
      },
      {
        question: 'What is the formula for area using the altitude?',
        answer: 'The formula is Area = (c \\u00D7 h) / 2, where c is the hypotenuse and h is the altitude drawn to it.'
      },
      {
        question: 'How do I find the altitude if I know both legs?',
        answer: 'Use h = (a \\u00D7 b) / c, where a and b are the legs and c is the hypotenuse.'
      },
      {
        question: 'What does the area result represent?',
        answer: 'It is the flat space enclosed by the triangle, measured in square units. If c and h are in feet, the area is in square feet.'
      },
      {
        question: 'Can I use a leg as the height in this formula?',
        answer: 'No. This formula specifically requires the altitude to the hypotenuse. If you want to use a leg as the height, use the legs formula Area = (a \\u00D7 b) / 2 instead.'
      }
    ]`;

// Perform replacements
content = content.replace(legsPageOld, legsPageNew);
content = content.replace(anglePageOld, anglePageNew);
content = content.replace(semiPageOld, semiPageNew);
content = content.replace(altPageOld, altPageNew);

fs.writeFileSync('src/data/focusedMeasurementCalculatorPages.ts', content);

// Verify
const result = fs.readFileSync('src/data/focusedMeasurementCalculatorPages.ts', 'utf8');
const checks = [
  'Enter the two legs of a right triangle',
  'Don\\u2019t know both legs',
  'Already know the inradius and semiperimeter',
  'When you know the hypotenuse and the perpendicular'
];
checks.forEach(check => {
  console.log(check.substring(0, 30) + '...', result.includes(check) ? 'FOUND' : 'MISSING');
});
