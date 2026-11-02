import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';
import {
  FOCUSED_MEASUREMENT_AREA_CALCULATOR_TRANSLATIONS,
  FOCUSED_MEASUREMENT_CALCULATOR_TRANSLATIONS
} from 'src/data/focusedMeasurementCalculatorTranslations';

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
      h2: 'What This Tool Solves',
      intro: 'Use this page when you already know all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> of a right triangle and need the total boundary length. It is designed for quick arithmetic, unit-aware inputs, and easy visual checking.',
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
          description: 'Leg a is one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the 90 degree corner and is included once in the perimeter.'
        },
        b: {
          label: 'b = second leg',
          description: 'Leg b is the other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and is added together with a and c.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, and completes the boundary.'
        }
      },
      result: {
        label: 'P = total boundary length',
        description: 'The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> adds a + b + c and returns the perimeter in the selected linear unit.'
      },
      notes: [
        'All three sides should use the same unit before you compare or reuse the answer.',
        'If one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is missing, solve that side first with the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>, then return to perimeter.',
        'The perimeter result is a length, not a square-unit <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Perimeter Formula',
      paragraphs: [
        'The perimeter of any polygon is the total length of its boundary. For a right triangle, the boundary consists of exactly three straight sides: two legs (a and b) that form the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, and one hypotenuse (c) that stretches across from the right angle to the opposite vertex.',
        'Because a right triangle has only three sides, the perimeter formula is the simplest possible sum. No trigonometry, square roots, or exponents are needed \u2014 just addition.'
      ],
      formulas: ['P = a + b + c']
    },
    howTo: {
      h2: 'How to Find the Perimeter of a Right Triangle',
      steps: [
        'Identify all three sides of the right triangle. Label the two shorter sides as leg a and leg b, and the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> as hypotenuse c.',
        'Make sure all three <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> use the same unit. Convert if necessary before entering values.',
        'Enter leg a into the first input field of the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
        'Enter leg b into the second input field.',
        'Enter hypotenuse c into the third input field.',
        'Click Calculate. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> adds the three values and displays the perimeter P along with step-by-step work.',
        'Review the result in the diagram to visually confirm the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> match your triangle.'
      ]
    },
    example: {
      h2: 'Worked Example: Find the Perimeter of a 3-4-5 Right Triangle',
      intro: 'The 3-4-5 triangle is one of the most common <a href="/pythagorean-triples-calculator/" class="text-primary hover:underline">Pythagorean triples</a>. Given a = 3, b = 4, c = 5:',
      lines: [
        'P = a + b + c',
        'P = 3 + 4 + 5',
        'P = 12'
      ],
      answer: 'The perimeter of this right triangle is 12 units. Since 3\u00b2 + 4\u00b2 = 9 + 16 = 25 = 5\u00b2, the sides satisfy the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> and confirm a valid right triangle.'
    },
    extraSections: [
      {
        h2: 'What Is the Perimeter of a Right Triangle?',
        paragraphs: [
          'The perimeter of a right triangle is the total distance you would travel if you walked along all three edges of the triangle, starting at one vertex and returning to the same vertex. It represents the outer boundary of the triangular shape.',
          'Every right triangle has three sides: two legs that meet at the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> (90\u00b0) and one hypotenuse opposite the right angle. The hypotenuse is always the longest of the three sides. When you add the lengths of all three sides together, you get the perimeter.',
          'The perimeter is a one-dimensional measurement expressed in linear units (such as centimeters, meters, feet, or inches). This is different from the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>, which measures the two-dimensional space inside the triangle and is expressed in square units.'
        ]
      },
      {
        h2: 'Understanding the Sides of a Right Triangle',
        paragraphs: [
          'Before calculating the perimeter, it helps to clearly identify each <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right triangle. Mislabeling a side is the most common source of errors.',
          'In the standard labeling convention, the two sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> are called legs. The <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right angle is called the hypotenuse. The hypotenuse is always longer than either leg individually, but it is always shorter than the sum of the two legs.'
        ],
        listTitle: 'The three sides at a glance:',
        listItems: [
          'Leg a \u2014 One of the two sides that forms the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It can be the vertical or horizontal <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, depending on orientation.',
          'Leg b \u2014 The other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> that forms the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Together with leg a, it defines the right angle.',
          'Hypotenuse c \u2014 The longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, stretching from one acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the other, directly opposite the right angle.',
          'The Pythagorean relationship holds: a\u00b2 + b\u00b2 = c\u00b2. This lets you verify that your three values actually form a right triangle.'
        ]
      },
      {
        h2: 'How the Perimeter Formula Is Derived',
        paragraphs: [
          'The perimeter formula P = a + b + c is a direct application of the general polygon perimeter definition: add the lengths of all sides. For a triangle, there are exactly three sides, so the perimeter is the sum of three lengths.',
          'No derivation or rearrangement is needed because the formula is the simplest possible case of perimeter measurement. However, the formula becomes more interesting when only two sides are known, because you can use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> to find the missing third <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and then compute the perimeter.'
        ]
      },
      {
        h2: 'Finding Perimeter When One Side Is Missing',
        paragraphs: [
          'If you know only two of the three sides of a right triangle, you can still find the perimeter. Use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> (a\u00b2 + b\u00b2 = c\u00b2) to calculate the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">missing side</a> first, then add all three to get the perimeter.',
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
          'Practicing with different triangles helps build confidence. Below are three more worked examples using common <a href="/pythagorean-triples-calculator/" class="text-primary hover:underline">Pythagorean triples</a> and decimal values.'
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
          'Given: a = 8, b = 15, c = 17. This is another <a href="/pythagorean-triples-calculator/" class="text-primary hover:underline">Pythagorean triple</a> where all sides are whole numbers.'
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
          'Perimeter and <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> both describe a triangle, but they measure different things. The perimeter measures the total edge length around the outside (a linear measurement), while the area measures the enclosed space inside the triangle (a square measurement).',
          'For a right triangle with legs a and b and hypotenuse c, the two formulas are: P = a + b + c for perimeter, and A = (a \u00d7 b) / 2 for <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. Notice that the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a> uses only the two legs (because they are perpendicular), while the perimeter formula uses all three sides.',
          'A common mistake is confusing the two. If a problem asks for the distance of fencing around a triangular plot, you need the perimeter. If it asks for the surface coverage (like painting or tiling), you need the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.'
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
          'Jogging and walking paths \u2014 A triangular running track or walking path around a right-angled park <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> has a total distance equal to the perimeter.',
          'Construction layout \u2014 Builders use the 3-4-5 rule to check if a corner is square. Knowing the perimeter helps verify <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>.',
          'Craft and sewing \u2014 Binding, piping, or lace around a triangular cushion or pennant requires perimeter-length material.',
          'Map and survey calculations \u2014 Surveyors measure triangular land plots and need the perimeter for boundary descriptions and property records.'
        ]
      },
      {
        h2: 'Relationship Between Perimeter and Semiperimeter',
        paragraphs: [
          'The <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> (s) is exactly <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">half the perimeter</a>: s = P / 2 = (a + b + c) / 2. While the perimeter gives you the total boundary length, the semiperimeter is a convenience value used in more advanced formulas.',
          'The <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> appears in Heron\u2019s formula for <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">triangle area</a>: A = \u221a[s(s\u2013a)(s\u2013b)(s\u2013c)]. It is also used to calculate the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> (the <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> of the inscribed circle): r = A / s. So the perimeter is the starting point for several important triangle calculations.',
          'If you have already calculated the perimeter using this tool, you can find the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> by simply dividing the result by 2, or use our dedicated semiperimeter calculator.'
        ]
      },
      {
        h2: 'Unit Conversion Tips',
        paragraphs: [
          'The perimeter result is only meaningful when all three input sides use the same unit. If your <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> are in different units, convert them first. The calculator includes a unit selector for each input field to handle conversions automatically.',
          'Remember that the perimeter is a linear measurement, so conversions follow standard length ratios \u2014 not <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> ratios. For example, to convert from feet to meters, multiply by 0.3048 (not by 0.3048\u00b2).'
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
          'Confusing perimeter with <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> \u2014 Perimeter is a length (measured in units), while area is a surface (measured in square units). Make sure you know which one the problem is asking for.',
          'Using sides that don\u2019t form a right triangle \u2014 Check that a\u00b2 + b\u00b2 = c\u00b2. If this equation doesn\u2019t hold, the triangle isn\u2019t a right triangle and c is not a true hypotenuse.',
          'Rounding too early \u2014 If one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is irrational (like \u221a2), keep full precision until the final addition to avoid accumulating rounding error.',
          'Entering the hypotenuse as a leg \u2014 The hypotenuse must be the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. If you place a shorter value in the hypotenuse field, the diagram will look wrong and the Pythagorean check will fail.'
        ]
      },
      {
        h2: 'Perimeter Properties of a Right Triangle',
        paragraphs: [
          'Right triangles have <a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a> perimeter properties that set them apart from other triangles. Understanding these properties can help you verify your calculations and catch errors.',
          'In any right triangle, the hypotenuse c is always less than the sum of the two legs (a + b) but greater than either leg alone. This means the perimeter P is always greater than 2c (since a + b > c) and less than 2(a + b), which equals 2a + 2b.'
        ],
        listTitle: 'Key perimeter properties:',
        listItems: [
          'P is always greater than 2 \u00d7 (longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>) because the other two sides add additional length.',
          'P is always less than 3 \u00d7 (longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>) because c > a and c > b, so a + b < 2c.',
          'For a <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90 triangle</a> with legs of length k, P = k + k + k\u221a2 = k(2 + \u221a2) \u2248 3.414k.',
          'For a <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90 triangle</a> with shortest leg k, P = k + k\u221a3 + 2k = k(3 + \u221a3) \u2248 4.732k.',
          'Among all right triangles with the same hypotenuse, the <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">isosceles right triangle</a> (45-45-90) has the largest perimeter.'
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
        answer: 'The perimeter formula is P = a + b + c, where a and b are the two legs (the sides forming the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>) and c is the hypotenuse (the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right angle). Simply add all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> together.'
      },
      {
        question: 'What does each variable mean in P = a + b + c?',
        answer: 'P is the perimeter (total boundary length). a is one leg of the right triangle. b is the other leg. c is the hypotenuse \u2014 the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> that sits opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. The two legs form the 90\u00b0 corner.'
      },
      {
        question: 'Can I find the perimeter with only two sides?',
        answer: 'Yes, but you must first calculate the missing third <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> using the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>: c = \u221a(a\u00b2 + b\u00b2) if the hypotenuse is missing, or a missing leg = \u221a(c\u00b2 \u2013 known leg\u00b2). Then add all three sides to get the perimeter.'
      },
      {
        question: 'Is perimeter the same as area?',
        answer: 'No. Perimeter (P = a + b + c) measures the total distance around the triangle in linear units (cm, m, ft). <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> (A = a\u00d7b/2) measures the enclosed space inside the triangle in square units (cm\u00b2, m\u00b2, ft\u00b2). They are fundamentally different <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>.'
      },
      {
        question: 'Do all three sides need to be in the same unit?',
        answer: 'Yes. All three sides must be expressed in the same unit before adding. If one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is in inches and another in centimeters, convert them to a common unit first. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> includes unit selectors on each input to handle this automatically.'
      },
      {
        question: 'What is the perimeter of a 3-4-5 right triangle?',
        answer: 'The perimeter is 3 + 4 + 5 = 12 units. The 3-4-5 triangle is the smallest <a href="/pythagorean-triples-calculator/" class="text-primary hover:underline">Pythagorean triple</a> with integer sides. Any scaled version (like 6-8-10 or 9-12-15) maintains the same ratio with the perimeter scaling proportionally.'
      },
      {
        question: 'How do I verify my triangle is actually a right triangle?',
        answer: 'Check that a\u00b2 + b\u00b2 = c\u00b2, where c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. If this equation holds true, the triangle has a 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and is a right triangle. If it doesn\u2019t hold, the perimeter formula still works but the triangle is not right-angled.'
      },
      {
        question: 'What is the relationship between perimeter and semiperimeter?',
        answer: 'The <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> is exactly <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">half the perimeter</a>: s = P/2. If the perimeter P = 12, then the semiperimeter s = 6. The semiperimeter is used in Heron\u2019s formula and <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> calculations.'
      },
      {
        question: 'Can the perimeter of a right triangle be an odd number?',
        answer: 'Yes. The perimeter can be any positive number \u2014 integer, decimal, or irrational. For example, a right triangle with legs 1 and 1 has hypotenuse \u221a2 \u2248 1.414, giving perimeter \u2248 3.414, which is neither an integer nor rational.'
      },
      {
        question: 'Why is the hypotenuse always the longest side?',
        answer: 'In a right triangle, the hypotenuse is opposite the largest <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> (90\u00b0). A fundamental rule in geometry is that the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is always opposite the largest angle. Since no angle in a triangle can exceed the right angle, c is always the longest side.'
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
      h2: 'What This Tool Solves',
      intro: 'Use this page when you need the half-<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> value s for a right triangle. It is especially helpful before using Heron-style <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> formulas, <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> formulas, or geometry identities that reference s.',
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
      intro: 'The diagram shows the same three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> used for <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>, but the result is divided by 2. Semiperimeter is still based on the outside edge of the triangle, not the interior <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.',
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
          description: 'Leg b forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> with a and contributes to both <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> and semiperimeter.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and must be included before the total is halved.'
        }
      },
      result: {
        label: 's = half of the boundary total',
        description: 'The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> first adds a + b + c, then divides that <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> by 2.'
      },
      notes: [
        'Semiperimeter is a linear measurement, so it uses the same unit as the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>.',
        'If P is already known, use s = P / 2; if P is not known, use s = (a + b + c) / 2.',
        'For a valid right triangle, c should be the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and should satisfy a^2 + b^2 = c^2.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Semiperimeter Formula',
      paragraphs: [
        'The semiperimeter of a triangle is one-half of its <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>. For a right triangle, the perimeter is P = a + b + c, so the semiperimeter is s = (a + b + c) / 2.',
        'The letter s is commonly used because semiperimeter appears in many compact geometry formulas. Even when the triangle is right-angled, s is useful as a bridge between <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>, <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>, and circle <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> such as the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>.',
        'Like <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>, semiperimeter is measured in linear units. If the sides are in meters, s is in meters. If the sides are in inches, s is in inches.'
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
        'Identify the two legs of the right triangle. These are the sides that meet at the 90 degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Identify the hypotenuse c. It is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and sits opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Make sure a, b, and c all use the same measurement unit.',
        'Enter leg a, leg b, and hypotenuse c into the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
        'Click Calculate to add the three sides and divide the total by 2.',
        'Check the displayed steps. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> should show the <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> total first, then the semiperimeter result.',
        'Use s in any later formula that asks for semiperimeter, such as <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> or Heron-style <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> relationships.'
      ]
    },
    example: {
      h2: 'Worked Example: Find the Semiperimeter of a 3-4-5 Right Triangle',
      intro: 'Given a = 3, b = 4, and c = 5, first add the three sides to get the <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>, then divide by 2:',
      lines: [
        's = \\frac{a + b + c}{2}',
        's = \\frac{3 + 4 + 5}{2}',
        's = \\frac{12}{2}',
        's = 6'
      ],
      answer: 'The semiperimeter is 6 units. The full <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> is 12 units, and s is exactly half of that total.'
    },
    extraSections: [
      {
        h2: 'What Does Semiperimeter Mean?',
        paragraphs: [
          'Semiperimeter literally means half of the <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>. Instead of repeatedly writing (a + b + c) / 2 in longer formulas, geometry often uses the shorter symbol s.',
          'For a right triangle, this value is especially convenient because the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> labels are already standardized: a and b are the legs, and c is the hypotenuse. Once those three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> are known, s is a single compact number that summarizes half the boundary length.'
        ]
      },
      {
        h2: 'Semiperimeter vs. Perimeter',
        paragraphs: [
          '<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a> P measures the full distance around the outside of the triangle. Semiperimeter s measures half of that distance. The two values are directly connected: s = P / 2 and P = 2s.',
          'Use <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> when a problem asks for the total boundary length, such as trim, fencing, or edge distance. Use semiperimeter when a formula specifically asks for s, or when you are preparing values for <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> and <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> relationships.'
        ],
        listTitle: 'Quick comparison:',
        listItems: [
          '<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a>: P = a + b + c',
          'Semiperimeter: s = (a + b + c) / 2',
          'If P = 30, then s = 15',
          'If s = 15, then P = 30'
        ]
      },
      {
        h2: 'Why Semiperimeter Matters in Right Triangle Geometry',
        paragraphs: [
          'Semiperimeter is more than a shortcut. It is a standard helper value used in formulas that connect <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> to <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> and circle <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>.',
          'For any triangle, Heron\u2019s formula uses s to calculate <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> from three sides: A = sqrt(s(s-a)(s-b)(s-c)). For a right triangle you often use A = (a x b) / 2, but Heron\u2019s formula is still useful for verification.',
          'Semiperimeter also connects to the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>. In many triangle formulas, <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> equals inradius times semiperimeter: A = r x s. Once s is known, it becomes easier to solve for r or verify an inradius result.'
        ],
        listTitle: 'Common formulas that use s:',
        listItems: [
          'Heron-style <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>: A = sqrt(s(s-a)(s-b)(s-c))',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>-<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> relation: A = r x s',
          '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> rearrangement: r = A / s',
          '<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a> recovery: P = 2s'
        ]
      },
      {
        h2: 'Additional Semiperimeter Examples',
        paragraphs: [
          'These examples show how the same formula works for whole-number triples and decimal <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>. The key is to add all three sides before dividing.'
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
          'For a = 8, b = 15, and c = 17, the full <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> is 40 units.'
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
        h2: 'When to Use This Tool',
        paragraphs: [
          'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> when a geometry problem gives all three right-triangle <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> and asks for s, half-<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>, or a formula that depends on semiperimeter.',
          'It is also useful as a quick check after solving a <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">missing side</a>. Once you know a, b, and c, the semiperimeter should be simple and exact: add the sides, then divide by 2.'
        ],
        listTitle: 'Good use cases include:',
        listItems: [
          'Preparing Heron\u2019s formula inputs from three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>.',
          'Checking <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> calculations with r = A / s.',
          'Reducing repeated arithmetic in geometry homework or proofs.',
          'Comparing triangle sizes using half-boundary values.',
          'Verifying that <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> and semiperimeter results match: P should always equal 2s.'
        ]
      },
      {
        h2: 'Unit Tips for Semiperimeter',
        paragraphs: [
          'Semiperimeter is a length, so it follows ordinary length-unit conversion rules. It is not measured in square units.',
          'If the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> inputs use different units, convert them first or use the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>\u2019s unit selectors consistently. Adding feet, inches, and centimeters directly would produce a meaningless result.'
        ],
        listTitle: 'Keep these unit rules in mind:',
        listItems: [
          'All <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> should represent the same unit system before comparing results.',
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
          'Dividing each <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> by 2 first, then losing track of the total.',
          'Using only the two legs and leaving out the hypotenuse.',
          'Confusing s with <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> P. Remember that P = 2s.',
          'Using <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> that do not form a right triangle.',
          'Mixing different units in the same calculation.'
        ]
      },
      {
        h2: 'How Semiperimeter Connects to Area and Inradius',
        paragraphs: [
          'In a right triangle, <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> can be calculated directly with A = (a x b) / 2 because the legs are perpendicular. Once area and semiperimeter are known, the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> can be checked with r = A / s.',
          'This makes semiperimeter a useful middle value. It does not replace the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a>, but it helps connect <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> to circle <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> inside the triangle.'
        ],
        listTitle: 'Example with a 3-4-5 triangle:',
        listItems: [
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>: A = (3 x 4) / 2 = 6',
          'Semiperimeter: s = (3 + 4 + 5) / 2 = 6',
          '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> check: r = A / s = 6 / 6 = 1'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' },
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      { href: '/right-triangle-area-from-inradius-and-semiperimeter-calculator/', label: 'Right Triangle Area from Inradius and Semiperimeter Calculator' },
    ],
    faqs: [
      {
        question: 'What is the formula for right triangle semiperimeter?',
        answer: 'The formula is s = (a + b + c) / 2, where a and b are the legs of the right triangle and c is the hypotenuse. Add all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>, then divide the total by 2.'
      },
      {
        question: 'What does semiperimeter mean?',
        answer: 'Semiperimeter means half of the triangle\u2019s <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>. If the full perimeter is P, then s = P / 2. If the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> are known directly, s = (a + b + c) / 2.'
      },
      {
        question: 'Is semiperimeter the same as perimeter?',
        answer: 'No. <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a> is the full boundary length around the triangle, while semiperimeter is half of that boundary length. They are related by P = 2s.'
      },
      {
        question: 'Why is semiperimeter used?',
        answer: 'Semiperimeter is used because it makes longer formulas easier to write and calculate. It appears in Heron\u2019s formula, the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> relation A = r x s, and the inradius rearrangement r = A / s.'
      },
      {
        question: 'Do I need all three sides?',
        answer: 'Yes. To calculate semiperimeter directly, you need leg a, leg b, and hypotenuse c. If one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is missing, solve it first with the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>, then calculate s.'
      },
      {
        question: 'What is the semiperimeter of a 3-4-5 right triangle?',
        answer: 'For a 3-4-5 right triangle, s = (3 + 4 + 5) / 2 = 12 / 2 = 6 units.'
      },
      {
        question: 'Does semiperimeter use square units?',
        answer: 'No. Semiperimeter is a length, so it uses linear units such as cm, m, in, or ft. <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> uses square units, but semiperimeter does not.'
      },
      {
        question: 'How can I check that my semiperimeter answer is correct?',
        answer: 'Double the semiperimeter. The result should equal the full <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>. For example, if s = 15, then P should be 30.'
      }
    ]
  },
    {
    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area From Legs Calculator',
    metaTitle: 'Right Triangle Area From Legs Calculator | Find Area = (a \u00D7 b) / 2',
    metaDescription: 'Use this right triangle area from legs calculator to find area from leg a and leg b with formula, steps, and examples.',
    formulaSlug: 'area-from-legs',
    toolPurpose: 'Enter the two legs of a right triangle and this calculator instantly computes the area. It shows the formula used, a full step-by-step breakdown, and a live diagram so you can double-check every value before copying the result.',
    intro: 'Need the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area of a right triangle</a> when you already know both legs? This is the fastest method. Just type in leg a and leg b, and the calculator does the rest.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro: 'This page is built for the simplest and most common <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> scenario: you know both perpendicular sides of a right triangle and want the enclosed area. No angles, no hypotenuse, no extra steps.',
      cards: [
        { label: 'Known values', value: 'Leg a and leg b (the two sides forming the right angle)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = (a \u00D7 b) / 2' },
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
      intro: 'The diagram below highlights the two legs that form the 90\u00B0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. In this method, one leg serves as the base and the other as the height. The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is exactly half the rectangle those two legs would form.',
      caption: 'Right triangle area diagram showing leg a as the base, leg b as the height, the right angle marker, and the formula Area = (a \u00D7 b) / 2.',
      formulaLabel: 'Area = (a \u00D7 b) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg (base)',
          description: 'Leg a is one of the two sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. In this formula it acts as the base of the triangle.'
        },
        b: {
          label: 'b = second leg (height)',
          description: 'Leg b is the other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the 90\u00B0 corner. It acts as the perpendicular height for the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> calculation.'
        },
        c: {
          label: 'c = hypotenuse (not needed)',
          description: 'The hypotenuse is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It is not used in this <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a>.'
        }
      },
      result: {
        label: 'Area = half the product of both legs',
        description: 'Multiply leg a by leg b, then divide by 2. The result is the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> in square units of whatever unit the legs use.'
      },
      notes: [
        'Both legs must use the same unit. Convert first if one is in centimeters and the other in meters.',
        'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> result is in square units. If the legs are in feet, the area is in square feet.',
        'It does not matter which leg you call a and which you call b. The product is the same either way.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Legs Formula',
      paragraphs: [
        'The two legs of a right triangle meet at a perfect 90\u00B0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. That means one leg is automatically perpendicular to the other. In any triangle, <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> equals half the base times the height. Since the legs are already base and height, no extra geometry is needed.',
        'This is why the legs formula is the simplest way to find a right triangle\u2019s <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. You skip finding angles, the hypotenuse, or any <a href="/right-triangle-trig-ratios-calculator/" class="text-primary hover:underline">trigonometric ratios</a>. Just multiply and divide by two.'
      ],
      formulas: ['\\text{Area} = (a \\times b) / 2']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the two legs of your right triangle. These are the sides that form the 90\u00B0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Do not use the hypotenuse here.',
        'Make sure both legs are measured in the same unit. If one leg is 3 feet and the other is 24 inches, convert one so both match.',
        'Enter leg a into the first input field.',
        'Enter leg b into the second input field.',
        'Click Calculate. The tool multiplies the two legs, divides by 2, and displays the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> along with step-by-step work.',
        'Check the diagram to visually confirm that the sides match your triangle.'
      ]
    },
    example: {
      h2: 'Worked Example: Area of a 6-8-10 Right Triangle',
      intro: 'Suppose you have a right triangle with leg a = 6 and leg b = 8. The hypotenuse would be 10, but you do not need it for this formula.',
      lines: [
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (a \\times b) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (6 \\times 8) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 48 / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 24'
      ],
      answer: 'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is 24 square units. You can verify this: a 6 \u00D7 8 rectangle has area 48, and the right triangle is exactly half of that rectangle.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The number you get is the flat surface enclosed by the three sides of the triangle. It is measured in square units. If your legs are in centimeters, the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is in square centimeters. If your legs are in meters, the area is in square meters.',
          'Think of it this way: if you drew the right triangle on a piece of grid paper, the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> tells you how many unit squares fit inside it. A larger area means a bigger triangle.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is ideal whenever you already know both legs. That happens more often than you might think.'
        ],
        listTitle: 'Common situations where this calculator helps:',
        listItems: [
          'You measured two walls that meet at a right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and want the floor <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the triangular corner.',
          'A geometry textbook gives you both legs and asks for the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.',
          'You are cutting a triangular piece from a rectangular sheet and need to know how much material the cutoff uses.',
          'You are estimating paint, tile, or fabric for a right-angled triangular section.'
        ]
      },
      {
        h2: 'Why This Formula Works',
        paragraphs: [
          'Imagine placing two identical right triangles together, with their hypotenuses touching. They form a perfect rectangle. The rectangle has width a and height b, so its <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is a \u00D7 b. Each triangle is exactly half of that rectangle. That is why you divide by 2.',
          'This geometric reasoning is the foundation of the half-base-times-height rule taught in every geometry class. For right triangles, the rule is especially clean because the two perpendicular legs are already the base and the height.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Even a simple formula can trip you up if you are not careful. Here are the errors students and professionals make most often with this method.'
        ],
        listItems: [
          'Using the hypotenuse instead of a leg \u2014 The hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It is not a leg. Plugging c into this formula gives a wrong, inflated <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.',
          'Forgetting to divide by 2 \u2014 Multiplying a \u00D7 b gives the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the rectangle, not the triangle. You must halve it.',
          'Mixing units \u2014 If one leg is in centimeters and the other in meters, your answer will be nonsense. Convert to the same unit before calculating.',
          'Using only one leg \u2014 You need both legs. If you only know one leg and the hypotenuse, use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> first to find the missing leg.',
          'Reporting <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> in linear units \u2014 Area is always in square units (cm\u00B2, m\u00B2, ft\u00B2), not plain centimeters or meters.'
        ]
      },
      {
        h2: 'Additional Example: Decimal Sides',
        paragraphs: [
          'Not every triangle has neat whole numbers. Suppose leg a = 3.5 and leg b = 9.2.'
        ],
        listItems: [
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (3.5 \u00D7 9.2) / 2',
          'Area = 32.2 / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = 16.1 square units',
          'The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> handles decimals the same way it handles whole numbers.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-perimeter-calculator/', label: 'Right Triangle Perimeter Calculator' },
      { href: '/right-triangle-area-from-leg-and-angle-calculator/', label: 'Right Triangle Area from Leg and Angle Calculator' },
      { href: '/right-triangle-area-from-hypotenuse-and-altitude-calculator/', label: 'Right Triangle Area from Hypotenuse and Altitude Calculator' },
    ],
    faqs: [
      {
        question: 'What is the formula for the area of a right triangle from its legs?',
        answer: 'The formula is <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (a \u00D7 b) / 2, where a and b are the two legs that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.'
      },
      {
        question: 'Do I need the hypotenuse to find the area from legs?',
        answer: 'No. This formula only needs the two legs. The hypotenuse is not part of the calculation.'
      },
      {
        question: 'What does the result represent?',
        answer: 'The result is the flat surface <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> enclosed by the triangle, measured in square units. For example, if the legs are in meters, the area is in square meters.'
      },
      {
        question: 'Can I swap leg a and leg b?',
        answer: 'Yes. Multiplication is commutative, so a \u00D7 b equals b \u00D7 a. The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is the same regardless of which leg you call a or b.'
      },
      {
        question: 'Why do I divide by 2?',
        answer: 'Two identical right triangles placed together form a rectangle with <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> a \u00D7 b. Each triangle is half that rectangle, so you divide by 2.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-angle-calculator',
    url: '/right-triangle-area-from-angle-calculator/',
    h1: 'Right Triangle Area From Angle Calculator',
    metaTitle: 'Right Triangle Area From Angle Calculator | Find Area Using Angle',
    metaDescription: 'Use this right triangle area from angle calculator to find area using a side, hypotenuse, and an acute angle with formula and steps.',
    formulaSlug: 'area-sin-a',
    toolPurpose: 'Enter one leg, the hypotenuse, and an acute angle to find the area of a right triangle. The calculator supports two modes\u2014one for angle A with side b, and one for angle B with side a\u2014so you can use whichever values you already have.',
    intro: 'Don\u2019t know both legs? No problem. If you have one leg, the hypotenuse, and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, you can still find the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. This calculator uses the sine-based area rule to get you there.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro: 'This page handles the scenario where you know one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, the hypotenuse c, and one acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Instead of finding the missing leg first, the sine <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a> jumps straight to the answer.',
      cards: [
        { label: 'Known values', value: 'One leg, hypotenuse c, and one acute angle (A or B)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Mode 1 formula', value: 'Area = (b \u00D7 c \u00D7 sin(A)) / 2' },
        { label: 'Mode 2 formula', value: 'Area = (a \u00D7 c \u00D7 sin(B)) / 2' }
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
    diagram: {
      h2: 'Triangle Diagram: Area Using Angle and Sine',
      intro: 'This diagram labels both acute angles (A and B), the two legs (a and b), and the hypotenuse (c). In Mode 1, the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> uses <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, hypotenuse c, and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. In Mode 2, it uses side a, hypotenuse c, and angle B.',
      caption: 'Right triangle diagram showing legs a and b, hypotenuse c, acute angles A and B, and the sine area formulas.',
      formulaLabel: 'Area = (b \u00D7 c \u00D7 sin(A)) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = leg opposite angle A',
          description: 'Leg a is opposite <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and adjacent to angle B. It is used in Mode 2 with angle B.'
        },
        b: {
          label: 'b = leg opposite angle B',
          description: 'Leg b is opposite <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> B and adjacent to angle A. It is used in Mode 1 with angle A.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The hypotenuse is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the 90\u00B0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It appears in both <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> formulas.'
        }
      },
      result: {
        label: 'Area = half the product of side, hypotenuse, and sine of included angle',
        description: 'The <a href="/sine-ratio-calculator/" class="text-primary hover:underline">sine function</a> extracts the effective height from the known <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, so the formula computes <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> without needing the missing leg directly.'
      },
      notes: [
        'Make sure the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> corresponds to the correct <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. Angle A pairs with side b; angle B pairs with side a.',
        'The <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> must be in degrees for this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>. Convert radians to degrees first if needed.',
        'The hypotenuse c must be longer than either leg, or the triangle is not valid.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Angle Formulas',
      paragraphs: [
        'The general <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">triangle area</a> rule says Area = (1/2) \u00D7 <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> \u00D7 side \u00D7 sin(included <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>). In a right triangle, you can apply this using either acute angle together with the hypotenuse and the leg adjacent to that angle.',
        'Mode 1 uses leg b (adjacent to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A) and hypotenuse c. Mode 2 uses leg a (adjacent to angle B) and hypotenuse c. Both modes give the same <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> because they describe the same triangle\u2014just from different angle perspectives.',
        'This approach is especially handy in surveying and physics where <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> are easier to take than direct <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> measurements.'
      ],
      formulas: [
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (b \\times c \\times \\sin(A)) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (a \\times c \\times \\sin(B)) / 2'
      ]
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Decide which values you know. If you have leg b, hypotenuse c, and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, use Mode 1. If you have leg a, hypotenuse c, and angle B, switch to Mode 2.',
        'Select the correct mode using the tabs or dropdown at the top of the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
        'Enter the known leg value into the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> field.',
        'Enter the hypotenuse c. Remember, c must be the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.',
        'Enter the acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in degrees. The angle must be between 0\u00B0 and 90\u00B0 (exclusive).',
        'Click Calculate. The result appears with step-by-step substitution so you can follow the math.',
        'Verify the answer makes sense: the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> should be a positive number smaller than (leg \u00D7 hypotenuse) / 2.'
      ]
    },
    example: {
      h2: 'Worked Example: Mode 1 \u2014 Using Side b, Hypotenuse c, and Angle A',
      intro: 'Given b = 4, c = 5, and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A = 36.87\u00B0:',
      lines: [
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (b \\times c \\times \\sin(A)) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (4 \\times 5 \\times \\sin(36.87^\\circ)) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (20 \\times 0.6) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 12 / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 6'
      ],
      answer: 'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is 6 square units. This matches the 3-4-5 triangle (since sin(36.87\u00B0) \u2248 0.6, and the area of a 3-4-5 triangle is (3 \u00D7 4) / 2 = 6).'
    },
    extraSections: [
      {
        h2: 'Second Example: Mode 2 \u2014 Using Side a, Hypotenuse c, and Angle B',
        paragraphs: [
          'Given a = 3, c = 5, and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> B = 53.13\u00B0:'
        ],
        listItems: [
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (a \u00D7 c \u00D7 sin(B)) / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (3 \u00D7 5 \u00D7 sin(53.13\u00B0)) / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (15 \u00D7 0.8) / 2',
          'Area = 12 / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = 6 square units',
          'Same triangle, same <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>, different inputs. This confirms both modes are consistent.'
        ]
      },
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> tells you the flat space inside the triangle, measured in square units. If your <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> are in meters and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is in degrees, the area is in square meters.',
          'A larger <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> (closer to 90\u00B0) with the same sides produces a larger <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. A smaller angle produces a smaller area. At exactly 0\u00B0 or 90\u00B0, the formula breaks down because sin(0) = 0 and sin(90) = 1 would make this a degenerate case or reduce to the legs formula.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> saves time when you have partial <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>. Instead of finding the missing leg first and then using the legs formula, you jump straight to the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.'
        ],
        listTitle: 'Typical scenarios:',
        listItems: [
          'A surveyor knows the distance to two points and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> between sightlines.',
          'A physics problem gives you a force vector magnitude (hypotenuse), a component (leg), and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'A roofing contractor knows the rafter length (hypotenuse), the run (leg), and the roof pitch <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'You measured one wall, the diagonal, and the corner <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in a room layout.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-based <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a> has more moving parts than the legs method, so mistakes happen more often. Watch out for these.'
        ],
        listItems: [
          'Using degrees when the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> expects radians, or vice versa \u2014 This calculator expects degrees. If your <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is in radians, convert it first (multiply by 180/\u03C0).',
          'Pairing the wrong <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> with the wrong <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> \u2014 Angle A must go with side b (adjacent to A). Angle B must go with side a (adjacent to B). Swapping them gives a wrong answer.',
          'Using the wrong <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> with the hypotenuse \u2014 The formula needs one leg and the hypotenuse. Do not enter two legs or two angles.',
          'Forgetting to divide by 2 \u2014 The product b \u00D7 c \u00D7 sin(A) is double the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. You must halve it.',
          'Entering an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of 0\u00B0 or 90\u00B0 \u2014 An angle of 0\u00B0 gives zero <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>. An angle of 90\u00B0 is the right angle itself, not an acute angle. Both are invalid inputs.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/right-triangle-area-from-leg-and-angle-calculator/', label: 'Right Triangle Area from Leg and Angle Calculator' },
    ],
    faqs: [
      {
        question: 'What formulas does this calculator use?',
        answer: 'Mode 1 uses <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (b \u00D7 c \u00D7 sin(A)) / 2. Mode 2 uses Area = (a \u00D7 c \u00D7 sin(B)) / 2. Both give the same result for the same triangle.'
      },
      {
        question: 'Why does the formula use the sine function?',
        answer: 'The sine of the included <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> converts the hypotenuse and adjacent leg into an effective base-times-height product. It extracts the perpendicular height without measuring it directly.'
      },
      {
        question: 'What does the area result actually tell me?',
        answer: 'It tells you the total flat space enclosed by the three sides of the right triangle, measured in square units.'
      },
      {
        question: 'Can I use this if I know both legs?',
        answer: 'You can, but the legs formula <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (a \u00D7 b) / 2 is simpler and does not need an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Use the right <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">triangle area</a> from legs calculator instead.'
      },
      {
        question: 'Does the angle need to be in degrees or radians?',
        answer: 'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> expects degrees. If your <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is in radians, multiply by 180/\u03C0 to convert it before entering.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-semiperimeter-calculator',
    url: '/right-triangle-area-from-semiperimeter-calculator/',
    h1: 'Right Triangle Area From Semiperimeter Calculator',
    metaTitle: 'Right Triangle Area From Semiperimeter Calculator | Find Area = r \u00D7 s',
    metaDescription: 'Use this right triangle area from semiperimeter calculator to find area from inradius r and semiperimeter s with formula and steps.',
    formulaSlug: 'area-rs',
    toolPurpose: 'Enter the inradius and semiperimeter of a right triangle and this calculator gives you the area instantly. It displays the formula, the substitution, and the final answer so you can verify the math at every step.',
    intro: 'Already know the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> and <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> of your right triangle? Then finding the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is just one multiplication away. This calculator handles that specific case.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro: 'This page covers a less common but powerful <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> method: using the incircle <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> (r) and the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> (s). It is most useful in advanced geometry problems and competition math where these values are already computed.',
      cards: [
        { label: 'Known values', value: 'Inradius r and semiperimeter s' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = r \u00D7 s' },
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
      intro: 'The diagram shows a right triangle with its inscribed circle (incircle). The incircle touches all three sides. Its <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> is r, and the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s is half the sum of all three sides.',
      caption: 'Right triangle diagram showing the incircle with radius r, the three sides a, b, and c, and the semiperimeter relationship s = (a + b + c) / 2.',
      formulaLabel: 'Area = r \u00D7 s',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'One of the two sides forming the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It is tangent to the inscribed circle.'
        },
        b: {
          label: 'b = second leg',
          description: 'The other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> forming the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Also tangent to the inscribed circle.'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'The longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. The incircle touches it at one tangent point.'
        }
      },
      result: {
        label: 'Area = product of inradius and semiperimeter',
        description: 'The <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> r times the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s gives the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">triangle area</a> directly. This works for any triangle, not just right triangles.'
      },
      notes: [
        'The <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s = (a + b + c) / 2. It is <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">half the perimeter</a>, not the full perimeter.',
        'For a right triangle, the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> can also be calculated as r = (a + b \u2013 c) / 2.',
        'If you only know the three sides, compute r and s from them, then use this formula as a cross-check.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Semiperimeter Formula',
      paragraphs: [
        'Every triangle has an inscribed circle (incircle) that touches all three sides. The <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> of this circle is called the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>, labeled r. The <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s is half the total <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>: s = (a + b + c) / 2.',
        'The beautiful identity <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = r \u00D7 s connects these two values directly to the area. It works because the incircle divides the triangle into three smaller triangles, each with the same height r and bases equal to the three sides. Their combined area equals r \u00D7 s.',
        'For right triangles specifically, there is a handy shortcut: r = (a + b \u2013 c) / 2. So if you know the three sides, you can find r and s quickly and then multiply.'
      ],
      formulas: ['\\text{Area} = r \\times s']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Find the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> r of your right triangle. If you know all three sides, use r = (a + b \u2013 c) / 2.',
        'Find the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s. Add all three sides and divide by 2: s = (a + b + c) / 2.',
        'Enter r into the first input field.',
        'Enter s into the second input field.',
        'Click Calculate. The tool multiplies r and s and displays the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> with step-by-step work.',
        'Compare the result with other <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> methods if you want to cross-check your answer.'
      ]
    },
    example: {
      h2: 'Worked Example: Area From Inradius and Semiperimeter',
      intro: 'Consider a 3-4-5 right triangle. First, find r and s:',
      lines: [
        's = \\frac{a + b + c}{2} = \\frac{3 + 4 + 5}{2} = 6',
        'r = \\frac{a + b - c}{2} = \\frac{3 + 4 - 5}{2} = 1',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = r \\times s = 1 \\times 6 = 6'
      ],
      answer: 'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is 6 square units. This matches the legs formula: (3 \u00D7 4) / 2 = 6. The two methods agree, confirming the result.'
    },
    extraSections: [
      {
        h2: 'Second Example: Larger Triangle',
        paragraphs: [
          'Take a right triangle with legs a = 5, b = 12, and hypotenuse c = 13.'
        ],
        listItems: [
          's = (5 + 12 + 13) / 2 = 15',
          'r = (5 + 12 \u2013 13) / 2 = 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = r \u00D7 s = 2 \u00D7 15 = 30 square units',
          'Cross-check with legs: (5 \u00D7 12) / 2 = 30 \u2713'
        ]
      },
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The result is the enclosed flat <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the right triangle, just like any other area method. The units are square units based on whatever units r and s use.',
          'This formula is especially valued in proofs and competition problems because it connects circle geometry (the incircle) with basic triangle measurement. It shows that the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> depends only on how big the incircle is and how long the boundary is.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is not the first one most people reach for. But it shines in specific situations.'
        ],
        listTitle: 'Best use cases:',
        listItems: [
          'A math competition problem gives you r and s directly and asks for the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.',
          'You are working on a proof that involves the incircle and need to express <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> in terms of r and s.',
          'You already computed the <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> and <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> for another purpose and want the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> without redoing the calculation from scratch.',
          'You want to cross-check an <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> result obtained from the legs formula or the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude formula</a>.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The formula itself is simple, but the inputs can be tricky. Here are the most frequent errors.'
        ],
        listItems: [
          'Confusing <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> s with <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> P \u2014 The semiperimeter is <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">half the perimeter</a>. If you enter the full perimeter instead of s, your <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> will be doubled.',
          'Using the <a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">circumradius</a> instead of the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> \u2014 The circumradius R is the <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> of the circle around the triangle, not the one inside it. For a right triangle, R = c / 2. The inradius r is always smaller.',
          'Forgetting the formula is <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = r \u00D7 s \u2014 Some students try to divide by 2 again, but that is already built into the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a>. Just multiply r and s directly.',
          'Entering zero or negative values \u2014 Both r and s must be positive. A zero or negative <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> means your triangle data is incorrect.'
        ]
      },
      {
        h2: 'How to Find r and s From the Three Sides',
        paragraphs: [
          'If you know legs a and b and hypotenuse c, you can compute r and s yourself before using this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.'
        ],
        listItems: [
          '<a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">Semiperimeter</a>: s = (a + b + c) / 2',
          '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> for any right triangle: r = (a + b \u2013 c) / 2',
          'Example: For a 5-12-13 triangle, s = 15 and r = 2',
          'You can also find r using the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> calculator and the <a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> calculator on this site.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-semiperimeter-calculator/', label: 'Right Triangle Semiperimeter Calculator' },
      { href: '/right-triangle-radius-calculator/', label: 'Right Triangle Radius Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' },
{ href: '/right-triangle-area-from-inradius-and-semiperimeter-calculator/', label: 'Right Triangle Area from Inradius and Semiperimeter Calculator' },
    ],
    faqs: [
      {
        question: 'What is the formula for area using inradius and semiperimeter?',
        answer: 'The formula is <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = r \u00D7 s, where r is the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> (<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> of the inscribed circle) and s is the <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> (<a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">half the perimeter</a>).'
      },
      {
        question: 'How do I find the inradius of a right triangle?',
        answer: 'For a right triangle with legs a and b and hypotenuse c, the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> is r = (a + b \u2013 c) / 2.'
      },
      {
        question: 'What does the result represent?',
        answer: 'It represents the enclosed flat <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the triangle in square units, identical to what any other <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a> would give for the same triangle.'
      },
      {
        question: 'Is this the same as Heron\u2019s formula?',
        answer: 'No. Heron\u2019s formula uses only the three sides: <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = \u221A(s(s\u2013a)(s\u2013b)(s\u2013c)). The r \u00D7 s formula is simpler but requires the <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>.'
      },
      {
        question: 'Does this formula work for all triangles?',
        answer: 'Yes. <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = r \u00D7 s works for any triangle, not just right triangles. But the shortcut r = (a + b \u2013 c) / 2 only applies to right triangles.'
      }
    ]
  },
  {
    slug: 'right-triangle-area-from-altitude-calculator',
    url: '/right-triangle-area-from-altitude-calculator/',
    h1: 'Right Triangle Area From Altitude Calculator',
    metaTitle: 'Right Triangle Area From Altitude Calculator | Find Area = (c \u00D7 h) / 2',
    metaDescription: 'Use this right triangle area from altitude calculator to find area from hypotenuse c and altitude h with formula, steps, and examples.',
    formulaSlug: 'area-ch',
    toolPurpose: 'Enter the hypotenuse and the altitude drawn to it, and this calculator computes the area of the right triangle. It shows the formula, step-by-step substitution, and a diagram that makes the geometry easy to visualize.',
    intro: 'When you know the hypotenuse and the perpendicular distance from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the hypotenuse, you can find the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> in one step. This calculator handles that case.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro: 'This page covers the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-based <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> method. The altitude h is the perpendicular line segment from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the hypotenuse. Combined with the hypotenuse length, it gives the area directly.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and altitude h (drawn to the hypotenuse)' },
        { label: 'Finds', value: 'Area of the right triangle in square units' },
        { label: 'Main formula', value: 'Area = (c \u00D7 h) / 2' },
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
      intro: 'The diagram shows the right triangle with the hypotenuse c as the base and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h drawn perpendicular from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex down to c. This altitude splits the hypotenuse into two segments.',
      caption: 'Right triangle diagram showing hypotenuse c as the base, altitude h drawn from the right-angle vertex perpendicular to c, and the formula Area = (c \u00D7 h) / 2.',
      formulaLabel: 'Area = (c \u00D7 h) / 2',
      keyLabel: 'Diagram Key',
      sides: {
        a: {
          label: 'a = first leg',
          description: 'One of the two sides forming the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Not directly used in this formula, but the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is derived from both legs and the hypotenuse.'
        },
        b: {
          label: 'b = second leg',
          description: 'The other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> forming the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Together with leg a, it determines the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>: h = (a \u00D7 b) / c.'
        },
        c: {
          label: 'c = hypotenuse (base in this method)',
          description: 'The longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right triangle. In this formula, c acts as the base of the triangle.'
        }
      },
      result: {
        label: 'h = altitude to the hypotenuse',
        description: 'The perpendicular distance from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the hypotenuse. Multiplied by c and divided by 2, it gives the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>.'
      },
      notes: [
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is NOT the same as leg a or leg b. It is the perpendicular dropped from the 90\u00B0 vertex to the hypotenuse.',
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> always falls inside the triangle for a right triangle.',
        'If you know both legs, you can find h = (a \u00D7 b) / c and then verify the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> using this method.'
      ]
    },
    formulaSection: {
      h2: 'Right Triangle Area From Altitude Formula',
      paragraphs: [
        'The standard <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area formula</a> for any triangle is Area = (base \u00D7 height) / 2. In this method, the hypotenuse c is the base, and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is the corresponding height\u2014the perpendicular distance from the opposite vertex to that base.',
        'For a right triangle, this <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h drops from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex straight down to the hypotenuse. It creates two smaller right triangles inside the original one, each similar to the whole triangle. This relationship is the foundation of the geometric mean theorem.',
        'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is related to the legs by h = (a \u00D7 b) / c. So even though this formula uses h and c instead of a and b, it produces the same <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> as the legs formula. They are algebraically equivalent.'
      ],
      formulas: ['\\text{Area} = (c \\times h) / 2']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the hypotenuse c of your right triangle. This is the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and always the longest side.',
        'Identify the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h. This is the perpendicular line from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the hypotenuse. It is not the same as either leg.',
        'Enter c into the Hypotenuse field.',
        'Enter h into the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">Altitude</a> field.',
        'Click Calculate. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> multiplies c by h, divides by 2, and shows the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> with step-by-step work.',
        'Check the diagram to make sure you used the correct <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>, not a leg.'
      ]
    },
    example: {
      h2: 'Worked Example: Area of a Right Triangle With c = 10 and h = 4.8',
      intro: 'Suppose the hypotenuse is 10 and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> is 4.8:',
      lines: [
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (c \\times h) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = (10 \\times 4.8) / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 48 / 2',
        '\\text{<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a>} = 24'
      ],
      answer: 'The <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is 24 square units. This matches a 6-8-10 right triangle where the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a> is h = (6 \u00D7 8) / 10 = 4.8.'
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The number you get is the enclosed flat <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of the right triangle, measured in square units. If c and h are in meters, the area is in square meters.',
          'Think of the hypotenuse as the base of the triangle laid flat on a table. The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is the height of the triangle measured perpendicular to that base. Half of base times height gives the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>\u2014the same logic behind every <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">triangle area</a> calculation.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This method is ideal when you happen to know the hypotenuse and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> but not both legs. That comes up in several situations.'
        ],
        listTitle: 'Common scenarios:',
        listItems: [
          'A geometry problem gives you the hypotenuse and the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> and asks for the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> directly.',
          'You are studying the geometric mean theorem and need to verify <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> relationships.',
          'A construction drawing shows the span (hypotenuse) and the perpendicular height of a triangular brace.',
          'You calculated h from other <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> and want a quick <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> check without reconstructing both legs.'
        ]
      },
      {
        h2: 'The Connection Between Altitude and Legs',
        paragraphs: [
          'If you know both legs a and b and the hypotenuse c, you can always compute the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>: h = (a \u00D7 b) / c. This means the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude formula</a> and the legs formula are two views of the same underlying math.',
          'Plugging h = (a \u00D7 b) / c into <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (c \u00D7 h) / 2 gives Area = (c \u00D7 (a \u00D7 b) / c) / 2 = (a \u00D7 b) / 2. The c values cancel, and you get back the legs formula. This confirms both methods always agree.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude formula</a> is straightforward, but confusing h with other <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> is the top source of wrong answers.'
        ],
        listItems: [
          'Using a leg instead of the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> \u2014 Leg a or leg b is not the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a>. The altitude h is a separate segment drawn inside the triangle, perpendicular to c.',
          'Forgetting to divide by 2 \u2014 Multiplying c \u00D7 h gives the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> of a parallelogram, not the triangle. Always divide by 2.',
          'Confusing h with the hypotenuse c \u2014 The variable h stands for <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> (height), not hypotenuse. They are completely different <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>.',
          'Using an <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> that belongs to a different base \u2014 This formula specifically uses the altitude drawn to the hypotenuse. The altitude from a different vertex to a different <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is a different length.',
          'Entering the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> of a different triangle \u2014 Make sure h actually belongs to the triangle with hypotenuse c. If h was measured for a different triangle, the result is meaningless.'
        ]
      },
      {
        h2: 'Additional Example: Decimal Values',
        paragraphs: [
          'Let c = 13 and h = 4.615 (approximately the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> of a 5-12-13 triangle where h = (5 \u00D7 12) / 13).'
        ],
        listItems: [
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (c \u00D7 h) / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (13 \u00D7 4.615) / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = 59.995 / 2',
          '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> \u2248 30 square units',
          'Cross-check with legs: (5 \u00D7 12) / 2 = 30 \u2713'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-altitude-calculator/', label: 'Right Triangle Altitude Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/right-triangle-area-from-hypotenuse-and-altitude-calculator/', label: 'Right Triangle Area from Hypotenuse and Altitude Calculator' },
      { href: '/right-triangle-area-from-leg-and-angle-calculator/', label: 'Right Triangle Area from Leg and Angle Calculator' },
    ],
    faqs: [
      {
        question: 'What is the altitude h in a right triangle?',
        answer: 'The <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> h is the perpendicular line segment drawn from the right-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> vertex to the hypotenuse. It is not the same as either leg.'
      },
      {
        question: 'What is the formula for area using the altitude?',
        answer: 'The formula is <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (c \u00D7 h) / 2, where c is the hypotenuse and h is the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> drawn to it.'
      },
      {
        question: 'How do I find the altitude if I know both legs?',
        answer: 'Use h = (a \u00D7 b) / c, where a and b are the legs and c is the hypotenuse.'
      },
      {
        question: 'What does the area result represent?',
        answer: 'It is the flat space enclosed by the triangle, measured in square units. If c and h are in feet, the <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> is in square feet.'
      },
      {
        question: 'Can I use a leg as the height in this formula?',
        answer: 'No. This formula specifically requires the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude to the hypotenuse</a>. If you want to use a leg as the height, use the legs formula <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">Area</a> = (a \u00D7 b) / 2 instead.'
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
    h2: 'What This Tool Solves',
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
    },
    {
      href: "/right-triangle-area-from-hypotenuse-and-altitude-calculator/",
      label: "Right Triangle Area from Hypotenuse and Altitude Calculator"
    },
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
    },
    {
      href: "/right-triangle-area-from-inradius-and-semiperimeter-calculator/",
      label: "Right Triangle Area from Inradius and Semiperimeter Calculator"
    },
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
    const areaTranslationsByLocale = FOCUSED_MEASUREMENT_AREA_CALCULATOR_TRANSLATIONS as unknown as Record<
      string,
      Record<string, FocusedMeasurementCalculatorPage>
    >;
    const localizedAreaPage = areaTranslationsByLocale[locale]?.[slug];

    if (localizedAreaPage) {
      return localizedAreaPage;
    }

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
