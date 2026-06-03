const fs = require('fs');

const pages = [
  {
    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area from Legs Calculator',
    metaTitle: 'Right Triangle Area from Legs Calculator | Calculate Area Instantly',
    metaDescription: 'Calculate the area of a right triangle directly from leg a and leg b. Includes the formula A = (a × b) / 2, step-by-step solution, diagrams, and examples.',
    formulaSlug: 'area-from-legs',
    toolPurpose: 'Enter the two perpendicular legs of a right triangle to calculate the total enclosed area. The calculator shows the exact formula, step-by-step arithmetic, and a diagram to verify your inputs.',
    intro: 'Enter leg a and leg b to calculate the exact area of your right triangle.',
    quickSummary: {
      h2: 'What This Area Calculator Solves',
      intro: 'Use this calculator when you know the lengths of the two perpendicular legs (the sides that form the 90° angle) and need the internal area. This is the most common and direct way to find right triangle area.',
      cards: [
        { label: 'Known values', value: 'Leg a and leg b' },
        { label: 'Finds', value: 'Area (A), the total enclosed surface' },
        { label: 'Main formula', value: 'A = (a × b) / 2' },
        { label: 'Best for', value: 'Surface calculations, material estimation, and basic geometry problems' }
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
      h2: 'Right Triangle Diagram: Area from Legs',
      intro: 'The diagram shows the two legs forming the right angle, and the shaded interior representing the area. Because right triangles are exactly half of a rectangle, the area is simply half the base times the height.',
      caption: 'Right triangle area diagram showing leg a (base) and leg b (height) with the formula A = (a × b) / 2.',
      formulaLabel: 'A = (a × b) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg (base)',
          description: 'Leg a is one side of the 90 degree corner. It acts as the base of the triangle.'
        },
        b: {
          label: 'b = second leg (height)',
          description: 'Leg b is the other side of the right angle. Since it is perpendicular to the base, it acts as the exact height.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The hypotenuse is not needed when calculating area directly from the two legs.'
        }
      },
      result: {
        label: 'A = Area',
        description: 'The calculator multiplies the two legs and divides by 2 to find the total square units inside.'
      },
      notes: [
        'Both legs must use the same unit. The result will be in the corresponding square unit (e.g., cm²).',
        'If you have the hypotenuse instead of a leg, use the Pythagorean theorem first to find the missing leg.',
        'It does not matter which leg you call the base and which you call the height.'
      ]
    },
    formulaSection: {
      h2: 'Area Formula Using Legs',
      paragraphs: [
        'The area of any triangle is calculated as half the base times the height. In a right triangle, the two legs (a and b) meet at a perfect 90° angle, meaning one leg naturally serves as the base and the other as the height.',
        'This makes the right triangle area formula incredibly simple: multiply the two legs together, then divide by two. You do not need to calculate altitudes or use complex trigonometry if both legs are known.'
      ],
      formulas: ['A = \\frac{a \\times b}{2}']
    },
    howTo: {
      h2: 'How to Calculate Right Triangle Area from Legs',
      steps: [
        'Identify the two legs of the right triangle. These are the two sides that form the 90° right angle.',
        'Ensure both legs are measured in the same unit. If they are different, convert them to match.',
        'Enter leg a into the first input field.',
        'Enter leg b into the second input field.',
        'Click Calculate. The calculator multiplies the two lengths and divides by 2 to return the area.',
        'Remember that the output is in square units (for example, if you entered inches, the area is in square inches).'
      ]
    },
    example: {
      h2: 'Worked Example: Area of a 6x8 Right Triangle',
      intro: 'Suppose you have a right triangle where one leg is 6 meters and the other leg is 8 meters:',
      lines: [
        'A = \\frac{a \\times b}{2}',
        'A = \\frac{6 \\times 8}{2}',
        'A = \\frac{48}{2}',
        'A = 24'
      ],
      answer: 'The area of the right triangle is 24 square meters. Notice that we did not need to know the hypotenuse (which would be 10 meters) to find the area.'
    },
    extraSections: [
      {
        h2: 'Why Are the Legs Used for Area?',
        paragraphs: [
          'In geometry, the standard area formula for a triangle is A = (base × height) / 2. The height must always be perfectly perpendicular to the base. In a right triangle, the 90° angle between the legs guarantees that they are perpendicular to each other.',
          'Therefore, if you choose leg a as the base, leg b is automatically the true height. This unique property means you never have to drop an altitude line or use complex trigonometry to find the area when the legs are known.'
        ]
      },
      {
        h2: 'What If I Only Have One Leg?',
        paragraphs: [
          'If you only know one leg but you know the hypotenuse, you cannot calculate the area directly. You must first find the missing leg using the Pythagorean theorem.',
          'For example, if you know leg a and hypotenuse c, use b = √(c² - a²) to find leg b. Once you have both legs, you can multiply them and divide by 2 to find the area.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for area from legs?',
        answer: 'The formula is A = (a × b) / 2, where a and b are the two legs that form the right angle.'
      },
      {
        question: 'Do I need the hypotenuse to find the area?',
        answer: 'No. The hypotenuse is the longest side, but the area only depends on the two perpendicular legs.'
      },
      {
        question: 'Does it matter which leg is a and which is b?',
        answer: 'No. Multiplication is commutative, meaning (a × b) gives the exact same result as (b × a). You can enter either leg into either input field.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-leg-and-angle-calculator',
    url: '/right-triangle-area-from-leg-and-angle-calculator/',
    h1: 'Right Triangle Area from Leg and Angle',
    metaTitle: 'Right Triangle Area from Leg and Angle Calculator | Find Area',
    metaDescription: 'Calculate the right triangle area from one side and an angle. Uses sine and cosine area formulas with step-by-step solutions.',
    formulaSlug: 'area-sin-a',
    toolPurpose: 'Enter one leg, the hypotenuse, and the included angle to calculate area using trigonometric formulas.',
    intro: 'Enter leg b, hypotenuse c, and angle A to find the exact area of your right triangle.',
    quickSummary: {
      h2: 'What This Area Calculator Solves',
      intro: 'Use this calculator when you only know two sides and the included angle. This method uses trigonometry to find the exact area without needing the third side.',
      cards: [
        { label: 'Known values', value: 'Leg b, hypotenuse c, and Angle A' },
        { label: 'Finds', value: 'Area (A)' },
        { label: 'Main formula', value: 'A = (b × c × sin(A)) / 2' },
        { label: 'Best for', value: 'Trigonometry problems, surveying, and cases missing the third side' }
      ]
    },
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Area from Sine',
      intro: 'The diagram shows the triangle with sides b and c forming the included angle A.',
      caption: 'Right triangle area using the sine formula.',
      formulaLabel: 'A = 0.5 × b × c × sin(A)',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = opposite leg',
          description: 'Not required for this calculation.'
        },
        b: {
          label: 'b = adjacent leg',
          description: 'One of the known sides forming the angle.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The other known side forming the angle.'
        }
      },
      result: {
        label: 'A = Area',
        description: 'The area computed using trigonometric sine.'
      },
      notes: [
        'Ensure the angle is entered in degrees.',
        'The formula A = 1/2 * ab * sin(C) applies to all triangles.'
      ]
    },
    formulaSection: {
      h2: 'Area Formula Using Sine',
      paragraphs: [
        'When you know two sides of any triangle and the angle between them, you can find the area using the sine rule for area: A = (1/2) * side1 * side2 * sin(angle).',
        'In a right triangle where you know a leg, the hypotenuse, and the angle between them, this becomes A = (1/2) * b * c * sin(A).'
      ],
      formulas: ['A = \\frac{1}{2} b c \\sin(A)']
    },
    howTo: {
      h2: 'How to Calculate Area Using Sine',
      steps: [
        'Identify the leg, hypotenuse, and included angle.',
        'Enter leg b into the first input.',
        'Enter hypotenuse c into the second input.',
        'Enter angle A in degrees into the third input.',
        'Click Calculate to see the area.'
      ]
    },
    example: {
      h2: 'Worked Example: Area Using Angle',
      intro: 'If leg b is 4, hypotenuse c is 5, and angle A is 36.87°:',
      lines: [
        'A = 0.5 \\times b \\times c \\times \\sin(A)',
        'A = 0.5 \\times 4 \\times 5 \\times \\sin(36.87^\\circ)',
        'A = 10 \\times 0.6',
        'A = 6'
      ],
      answer: 'The area is 6 square units.'
    },
    extraSections: [
      {
        h2: 'Why Use Trigonometry for Area?',
        paragraphs: [
          'Sometimes you cannot easily measure all three sides of a triangle, but measuring two sides and their included angle is possible (such as in land surveying).',
          'This trigonometric approach gives the precise area without first having to solve the missing side using the Pythagorean theorem.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area from Legs Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' }
    ],
    faqs: [
      {
        question: 'What if I know the other angle?',
        answer: 'You can use A = (1/2) * a * c * sin(B) if you know leg a and angle B instead.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-inradius-and-semiperimeter-calculator',
    url: '/right-triangle-area-from-inradius-and-semiperimeter-calculator/',
    h1: 'Right Triangle Area from Inradius & Semiperimeter',
    metaTitle: 'Right Triangle Area from Inradius Calculator',
    metaDescription: 'Calculate area from inradius (r) and semiperimeter (s) using A = r × s.',
    formulaSlug: 'area-rs',
    toolPurpose: 'Calculate the total area of a right triangle when the inradius and semiperimeter are known.',
    intro: 'Enter the inradius r and semiperimeter s to calculate the right triangle area.',
    quickSummary: {
      h2: 'What This Calculator Solves',
      intro: 'This tool uses the elegant relationship between a triangle\'s inscribed circle and its semiperimeter to find the area instantly.',
      cards: [
        { label: 'Known values', value: 'Inradius r and Semiperimeter s' },
        { label: 'Finds', value: 'Area (A)' },
        { label: 'Main formula', value: 'A = r × s' },
        { label: 'Best for', value: 'Advanced geometry and circle theorems' }
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
      h2: 'Diagram: Inradius and Semiperimeter',
      intro: 'The diagram illustrates the inscribed circle with radius r. The area of the full triangle is exactly r multiplied by the semiperimeter s.',
      caption: 'Area formula A = r × s.',
      formulaLabel: 'A = r × s',
      keyLabel: 'Diagram Key',
      sides: {
        a: { label: 'r = inradius', description: 'Radius of inscribed circle.' },
        b: { label: 's = semiperimeter', description: 'Half the boundary distance.' },
        c: { label: 'A = area', description: 'Total enclosed space.' }
      },
      result: {
        label: 'A = Area',
        description: 'Computed as r × s.'
      },
      notes: [
        'Both r and s must be positive lengths.'
      ]
    },
    formulaSection: {
      h2: 'Area Formula',
      paragraphs: [
        'For any triangle, the area can be found by multiplying the inradius (r) by the semiperimeter (s).',
        'This formula (A = r × s) is universally true for all triangles, not just right triangles.'
      ],
      formulas: ['A = r \\times s']
    },
    howTo: {
      h2: 'How to Calculate',
      steps: [
        'Identify inradius r and semiperimeter s.',
        'Enter r into the first field.',
        'Enter s into the second field.',
        'Multiply them to get the Area.'
      ]
    },
    example: {
      h2: 'Worked Example',
      intro: 'If inradius is 2 and semiperimeter is 12 (as in a 6-8-10 triangle):',
      lines: [
        'A = r \\times s',
        'A = 2 \\times 12',
        'A = 24'
      ],
      answer: 'The area is 24 square units.'
    },
    extraSections: [
      {
        h2: 'Where does this come from?',
        paragraphs: [
          'By splitting the triangle into three smaller triangles, each with height r and bases a, b, and c, their total area is 0.5*a*r + 0.5*b*r + 0.5*c*r = r*(a+b+c)/2 = r*s.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Area Calculator' }
    ],
    faqs: [
      {
        question: 'Does this work for non-right triangles?',
        answer: 'Yes, A = rs works for any triangle.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-hypotenuse-and-altitude-calculator',
    url: '/right-triangle-area-from-hypotenuse-and-altitude-calculator/',
    h1: 'Right Triangle Area from Hypotenuse & Altitude',
    metaTitle: 'Right Triangle Area from Hypotenuse and Altitude',
    metaDescription: 'Calculate area using the hypotenuse as the base and the altitude to the hypotenuse as the height.',
    formulaSlug: 'area-ch',
    toolPurpose: 'Calculate the total area when the hypotenuse and the altitude drawn to the hypotenuse are known.',
    intro: 'Enter hypotenuse c and altitude h to calculate the area.',
    quickSummary: {
      h2: 'What This Calculator Solves',
      intro: 'Finds area by using the hypotenuse as the base of the triangle.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and altitude h' },
        { label: 'Finds', value: 'Area (A)' },
        { label: 'Main formula', value: 'A = (c × h) / 2' },
        { label: 'Best for', value: 'Projection problems and alternate base perspectives' }
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
      h2: 'Diagram: Altitude to Hypotenuse',
      intro: 'The diagram shows the right triangle rotated so the hypotenuse lies flat as the base.',
      caption: 'Area formula A = (c × h) / 2.',
      formulaLabel: 'A = (c × h) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: { label: 'c = hypotenuse (base)', description: 'The long side used as base.' },
        b: { label: 'h = altitude (height)', description: 'Perpendicular height to hypotenuse.' },
        c: { label: 'A = area', description: 'Total square units.' }
      },
      result: {
        label: 'A = Area',
        description: 'Computed as (c × h) / 2.'
      },
      notes: [
        'Altitude h must be less than or equal to c/2.'
      ]
    },
    formulaSection: {
      h2: 'Area Formula',
      paragraphs: [
        'A triangle\'s area is 1/2 × base × height. If you use the hypotenuse (c) as the base, the corresponding height is the altitude to the hypotenuse (h).'
      ],
      formulas: ['A = \\frac{1}{2} c h']
    },
    howTo: {
      h2: 'How to Calculate',
      steps: [
        'Enter hypotenuse c.',
        'Enter altitude h.',
        'Click Calculate.'
      ]
    },
    example: {
      h2: 'Worked Example',
      intro: 'If hypotenuse is 10 and altitude is 4.8:',
      lines: [
        'A = \\frac{1}{2} c h',
        'A = 0.5 \\times 10 \\times 4.8',
        'A = 24'
      ],
      answer: 'The area is 24 square units.'
    },
    extraSections: [
      {
        h2: 'Altitude limits',
        paragraphs: [
          'In any right triangle, the maximum possible altitude to the hypotenuse is exactly half the length of the hypotenuse. If h > c/2, no such right triangle exists.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Area Calculator' },
      { href: '/right-triangle-altitude-calculator/', label: 'Altitude Calculator' }
    ],
    faqs: [
      {
        question: 'Is this the same area as using the legs?',
        answer: 'Yes. (a × b) / 2 always exactly equals (c × h) / 2.'
      }
    ]
  }
];

let content = fs.readFileSync('src/data/focusedMeasurementCalculatorPages.ts', 'utf8');
let pagesStr = pages.map(p => JSON.stringify(p, null, 2)).join(',\\n  ');
pagesStr = pagesStr.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

const lines = content.split('\\n');
const lastBracketIndex = lines.findIndex(l => l.trim() === '];');

if(lastBracketIndex !== -1) {
  lines[lastBracketIndex - 1] += ','; // Add comma to the last item
  
  const insertLines = pagesStr.split('\\n');
  lines.splice(lastBracketIndex, 0, ...insertLines);
  
  fs.writeFileSync('src/data/focusedMeasurementCalculatorPages.ts', lines.join('\\n'));
  console.log("Success with lines splice");
} else {
  console.log("Could not find ];");
}
