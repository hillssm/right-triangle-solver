const fs = require('fs');

const pages = [
  {
    slug: 'right-triangle-angle-from-sine-calculator',
    url: '/right-triangle-angle-from-sine-calculator/',
    h1: 'Right Triangle Angle From Sine Calculator',
    metaTitle: 'Right Triangle Angle From Sine Calculator | Find A = arcsin(a / c)',
    metaDescription: 'Use this right triangle angle from sine calculator to find angle A from opposite side a and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'angle-from-sine',
    headerSummary: 'When you know the length of the opposite side and the hypotenuse, you can easily find the missing angle using the sine ratio. This method takes the two sides and runs them through the inverse sine function to tell you exactly how wide the angle opens.',
    calculator: {
      heading: 'Calculate Angle From Sine',
      outputLabel: 'Angle A',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How to Use This Calculator',
      paragraphs: [
        'Whether you are solving a geometry homework problem or checking measurements for a construction project, the sine ratio is a reliable way to find your angle. You don\'t need to know the third side to get a perfect result.',
        'The calculator finds angle A when you enter opposite side a and hypotenuse c. Just make sure your hypotenuse is the longest side.'
      ],
      cards: [
        { label: 'Known values', value: 'Opposite side a and hypotenuse c' },
        { label: 'Finds', value: 'Angle A' },
        { label: 'Formula', value: 'A = arcsin(a / c)' },
        { label: 'Rule', value: 'c must be greater than a' }
      ]
    },
    formula: {
      h2: 'Formula',
      display: 'A = \\arcsin\\left(\\frac{a}{c}\\right)',
      paragraphs: [
        'To find your angle, you need the inverse sine function, which is also called arcsin. You simply divide the opposite side by the hypotenuse and find the arcsin of that number.'
      ]
    },
    diagram: {
      h2: 'Triangle Diagram',
      intro: 'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
      activeSides: ['a', 'c'],
      activeAngles: ['A'],
      focusLabel: 'A = arcsin(a / c)',
      focusDetail: 'This method uses the sine ratio because sine compares the opposite side to the hypotenuse.',
      notes: [
        'c is always the hypotenuse.',
        'Never call c a leg.',
        'a is the opposite side.'
      ]
    },
    howToSteps: [
      'Measure or identify your opposite side (a).',
      'Measure or identify your hypotenuse (c), which must be the longest side.',
      'Enter both values into the tool.',
      'Click calculate to instantly see the exact measurement of angle A.'
    ],
    example: {
      h2: 'Step-by-Step Example',
      intro: 'Let\'s say you have a triangle where opposite side a is 3 and hypotenuse c is 5.',
      steps: [
        'A = arcsin(a / c)',
        'A = arcsin(3 / 5)',
        'A = arcsin(0.6)',
        'A ≈ 36.87°'
      ],
      answer: 'The final result tells you the exact degree measurement of angle A. In our example, the angle opens to roughly 36.87 degrees.'
    },
    resultMeaning: [
      'The final result tells you the exact degree measurement of angle A.',
      'This means if you were drawing the triangle on paper, you would set your protractor to 36.87° at the corner where the hypotenuse meets the adjacent side.'
    ],
    whenToUse: {
      intro: 'This specific method is perfect when you only have measurements for the opposite side and the hypotenuse.',
      items: [
        'Heavily used in physics to find launch angles.',
        'In carpentry for cutting roof pitches.',
        'In standard trigonometry exams where the adjacent side is left completely blank.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these common mistakes:',
      items: [
        'Using the adjacent side instead of the opposite side.',
        'Forgetting that side c must always be the hypotenuse.',
        'Entering a hypotenuse that is shorter than the opposite side.',
        'Using sin instead of arcsin on a keypad.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Right Triangle Angle From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/right-triangle-missing-angle-calculator/', label: 'Right Triangle Missing Angle Calculator' },
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' }
    ],
    faqs: [
      { question: 'What does the arcsin formula actually do?', answer: 'Arcsin takes a ratio of two sides and reverses the math to tell you the specific angle that created that ratio.' },
      { question: 'What does the final result mean?', answer: 'The result gives you the exact degree measurement of angle A. This tells you how sharply the hypotenuse angles away from the base.' },
      { question: 'Why do I get an error if my opposite side is bigger than my hypotenuse?', answer: 'In a right triangle, the hypotenuse must always be the longest side. If side a is larger than side c, the triangle is physically impossible to draw.' },
      { question: 'Do I need to know the adjacent side to use this method?', answer: 'No, you only need the opposite side and the hypotenuse. The adjacent side is completely ignored here.' },
      { question: 'Is inverse sine the same thing as arcsin?', answer: 'Yes, they are two different names for the exact same mathematical operation. You might see it written as sin⁻¹ on a handheld calculator.' }
    ]
  },
  {
    slug: 'right-triangle-angle-from-cosine-calculator',
    url: '/right-triangle-angle-from-cosine-calculator/',
    h1: 'Right Triangle Angle From Cosine Calculator',
    metaTitle: 'Right Triangle Angle From Cosine Calculator | Find A = arccos(b / c)',
    metaDescription: 'Use this right triangle angle from cosine calculator to find angle A from adjacent side b and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'angle-from-cosine',
    headerSummary: 'Finding an angle is simple when you have the adjacent side and the hypotenuse. By using the inverse cosine function, you can determine exactly how sharp or wide the corner of your triangle is.',
    calculator: {
      heading: 'Calculate Angle From Cosine',
      outputLabel: 'Angle A',
      fields: [
        { key: 'b', label: 'Adjacent leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How to Use This Calculator',
      paragraphs: [
        'This specific approach skips the need for the opposite side entirely. It is a fantastic shortcut for surveying, navigation, and everyday math problems where you only know how far along the base you\'ve traveled and the direct diagonal path.',
        'The calculator finds angle A when you enter adjacent side b and hypotenuse c. The hypotenuse must always be larger than the adjacent side.'
      ],
      cards: [
        { label: 'Known values', value: 'Adjacent side b and hypotenuse c' },
        { label: 'Finds', value: 'Angle A' },
        { label: 'Formula', value: 'A = arccos(b / c)' },
        { label: 'Rule', value: 'c must be greater than b' }
      ]
    },
    formula: {
      h2: 'Formula',
      display: 'A = \\arccos\\left(\\frac{b}{c}\\right)',
      paragraphs: [
        'To figure out your angle, you will use the inverse cosine function, often called arccos. You divide the adjacent side by the hypotenuse, then apply arccos to the result.'
      ]
    },
    diagram: {
      h2: 'Triangle Diagram',
      intro: 'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
      activeSides: ['b', 'c'],
      activeAngles: ['A'],
      focusLabel: 'A = arccos(b / c)',
      focusDetail: 'This method uses the cosine ratio because cosine compares the adjacent side to the hypotenuse.',
      notes: [
        'c is always the hypotenuse.',
        'Never call c a leg.',
        'b is the adjacent side.'
      ]
    },
    howToSteps: [
      'Locate your adjacent side (b), which is the leg touching your target angle.',
      'Locate the hypotenuse (c), which is the long diagonal side.',
      'Type these two numbers into the input boxes.',
      'Hit calculate to instantly reveal the degree measurement of angle A.'
    ],
    example: {
      h2: 'Step-by-Step Example',
      intro: 'Imagine you are working with an adjacent side b of 4 and a hypotenuse c of 5.',
      steps: [
        'A = arccos(b / c)',
        'A = arccos(4 / 5)',
        'A = arccos(0.8)',
        'A ≈ 36.87°'
      ],
      answer: 'Angle A is approximately 36.87 degrees.'
    },
    resultMeaning: [
      'The number you get at the end is the actual physical angle, measured in degrees, between the adjacent side and the hypotenuse.',
      'If the result is 36.87°, that is exactly how much you would need to pivot from the baseline to point straight down the hypotenuse.'
    ],
    whenToUse: {
      intro: 'You should rely on this tool whenever a problem provides you with the base (or the side touching your angle) and the long diagonal.',
      items: [
        'Incredibly useful for calculating ground slopes.',
        'Determining shadow angles.',
        'Solving standard trig homework without needing the Pythagorean theorem first.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these common mistakes:',
      items: [
        'Using the opposite side instead of the adjacent side.',
        'Using arccos with the wrong side ratio.',
        'Entering b greater than c.',
        'Confusing arccos with regular cosine on a calculator keypad.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Right Triangle Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/right-triangle-missing-angle-calculator/', label: 'Right Triangle Missing Angle Calculator' },
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      { question: 'What does the formula A = arccos(b / c) actually mean?', answer: 'It means you are taking the length of the adjacent side, dividing it by the hypotenuse, and working backward from that decimal to find the original angle.' },
      { question: 'What does the degree result mean in real life?', answer: 'The result is the actual angle you would measure with a protractor. It defines the exact tilt or slope where the adjacent side meets the hypotenuse.' },
      { question: 'Why am I getting a math error?', answer: 'You likely entered a value for b that is larger than c. The adjacent side can never be longer than the hypotenuse in a right triangle.' },
      { question: 'Can I use this if I don\'t know the opposite side?', answer: 'Absolutely. This calculation is designed specifically to work without needing the opposite side at all.' },
      { question: 'What happens if the adjacent side is exactly half the hypotenuse?', answer: 'If b is exactly half of c, your ratio is 0.5. The arccos of 0.5 is exactly 60°, which is a very common special triangle.' }
    ]
  },
  {
    slug: 'right-triangle-angle-from-tangent-calculator',
    url: '/right-triangle-angle-from-tangent-calculator/',
    h1: 'Right Triangle Angle From Tangent Calculator',
    metaTitle: 'Right Triangle Angle From Tangent Calculator | Find A = arctan(a / b)',
    metaDescription: 'Use this right triangle angle from tangent calculator to find angle A from opposite side a and adjacent side b with formula, steps, and examples.',
    formulaSlug: 'angle-from-tangent',
    headerSummary: 'When you know the two perpendicular legs of a right triangle, you can quickly find the missing angle using the tangent ratio. This approach is highly practical because it completely ignores the long diagonal hypotenuse.',
    calculator: {
      heading: 'Calculate Angle From Tangent',
      outputLabel: 'Angle A',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'b', label: 'Adjacent leg b', min: 0 }
      ]
    },
    howItWorks: {
      h2: 'How to Use This Calculator',
      paragraphs: [
        'Using the inverse tangent function lets you translate a simple rise-over-run ratio into a precise angle. It is one of the most common ways to calculate slopes, stairs, and roof pitches in the real world.',
        'The calculator finds angle A when you enter opposite side a and adjacent side b. Neither number can be zero or negative.'
      ],
      cards: [
        { label: 'Known values', value: 'Opposite side a and adjacent side b' },
        { label: 'Finds', value: 'Angle A' },
        { label: 'Formula', value: 'A = arctan(a / b)' },
        { label: 'Rule', value: 'a and b must be positive' }
      ]
    },
    formula: {
      h2: 'Formula',
      display: 'A = \\arctan\\left(\\frac{a}{b}\\right)',
      paragraphs: [
        'To find the angle, you divide the opposite side by the adjacent side, and then apply the inverse tangent function, also known as arctan.'
      ]
    },
    diagram: {
      h2: 'Triangle Diagram',
      intro: 'For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.',
      activeSides: ['a', 'b'],
      activeAngles: ['A'],
      focusLabel: 'A = arctan(a / b)',
      focusDetail: 'This method uses the tangent ratio because tangent compares the opposite side to the adjacent side.',
      notes: [
        'c is always the hypotenuse.',
        'Never call c a leg.',
        'The hypotenuse is not needed for this calculation.'
      ]
    },
    howToSteps: [
      'Find your opposite side (a), which is the leg across from your target angle.',
      'Find your adjacent side (b), which is the leg touching your target angle.',
      'Enter both lengths into the calculator inputs.',
      'Click calculate to find the exact angle in degrees.'
    ],
    example: {
      h2: 'Step-by-Step Example',
      intro: 'Let\'s assume your opposite side a is 3 and your adjacent side b is 4.',
      steps: [
        'A = arctan(a / b)',
        'A = arctan(3 / 4)',
        'A = arctan(0.75)',
        'A ≈ 36.87°'
      ],
      answer: 'Angle A is approximately 36.87 degrees.'
    },
    resultMeaning: [
      'Your answer is the specific degree angle formed where the adjacent side meets the hypotenuse.',
      'A result of 36.87° means the slope is rising at a moderately steep pace. In construction, this tells you exactly what angle to cut your materials.'
    ],
    whenToUse: {
      intro: 'Use this tool whenever you only have measurements for the two straight legs.',
      items: [
        'Extremely popular in woodworking.',
        'Architecture and graphic design.',
        'Mimics the classic "rise over run" calculation for finding a pitch or gradient.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these common mistakes:',
      items: [
        'Using hypotenuse in the ratio.',
        'Switching a and b.',
        'Using tan instead of arctan.',
        'Trying to calculate with a side length of zero.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Right Triangle Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Right Triangle Angle From Cosine Calculator' },
      { href: '/right-triangle-missing-angle-calculator/', label: 'Right Triangle Missing Angle Calculator' },
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      { question: 'How does the arctan formula work?', answer: 'The arctan formula takes the raw decimal ratio of your opposite side divided by your adjacent side and translates it back into a precise degree angle.' },
      { question: 'What does the calculated angle mean?', answer: 'The result tells you exactly how steep the angle is in degrees. A larger number means a steeper slope, while a smaller number means a gentler rise.' },
      { question: 'Does it matter which leg is a and which is b?', answer: 'Yes, it is critical. Side a must be the leg completely opposite your angle, and side b must be the leg touching it. If you swap them, you will find angle B instead.' },
      { question: 'Can the opposite side be larger than the adjacent side?', answer: 'Absolutely. If the opposite side is larger, the resulting angle will simply be greater than 45 degrees.' },
      { question: 'Why don\'t I need the hypotenuse for this?', answer: 'The tangent ratio is specifically defined by the two perpendicular legs. The hypotenuse is locked in place once the legs are set, so you don\'t need its measurement.' }
    ]
  },
  {
    slug: 'right-triangle-missing-angle-calculator',
    url: '/right-triangle-missing-angle-calculator/',
    h1: 'Right Triangle Missing Angle Calculator',
    metaTitle: 'Right Triangle Missing Angle Calculator | Find the Missing Acute Angle',
    metaDescription: 'Use this right triangle missing angle calculator to find the other acute angle using A + B = 90° with formula, steps, and examples.',
    formulaSlug: 'angle-sum-exact',
    headerSummary: 'Finding a missing angle in a right triangle is the easiest calculation in geometry. Because the corner angle is permanently locked at 90 degrees, the other two acute angles must perfectly balance each other out.',
    calculator: {
      heading: 'Calculate Missing Angle',
      outputLabel: 'Angle B',
      fields: [
        { key: 'A', label: 'Angle A (deg)', min: 0, unit: 'deg' }
      ]
    },
    howItWorks: {
      h2: 'How to Use This Calculator',
      paragraphs: [
        'This means you never need complex trigonometry or side lengths to solve for the missing piece. If you know one of the small angles, simple subtraction is all it takes to reveal the other.',
        'The calculator finds the missing acute angle when you enter the other acute angle. The input must be greater than 0° and less than 90°.'
      ],
      cards: [
        { label: 'Known values', value: 'One acute angle' },
        { label: 'Finds', value: 'The missing acute angle' },
        { label: 'Formula', value: 'B = 90° - A' },
        { label: 'Rule', value: 'Input must be strictly between 0° and 90°' }
      ]
    },
    formula: {
      h2: 'Formulas',
      display: 'B = 90^\\circ - A',
      paragraphs: [
        'In every right triangle, the two smaller angles always add up to exactly 90 degrees. You can flip this rule around depending on which angle you need to find.',
        'A + B = 90°',
        'A = 90° - B'
      ]
    },
    diagram: {
      h2: 'Triangle Diagram',
      intro: 'Angle A and Angle B are the two acute angles. Together, they add up to the 90° angle at corner C, which means A + B = 90°.',
      activeSides: [],
      activeAngles: ['A', 'B'],
      focusLabel: 'A + B = 90°',
      focusDetail: 'In every right triangle, the two acute angles always add up to 90° because the third angle is already 90°.',
      notes: [
        'The 90° angle is at corner C.',
        'Both acute angles must be less than 90°.'
      ]
    },
    howToSteps: [
      'Identify the one acute angle you already know.',
      'Enter that angle in degrees into the calculator.',
      'Click calculate to instantly find the remaining missing angle.',
      'There is no need to enter side lengths or the 90° corner.'
    ],
    example: {
      h2: 'Step-by-Step Example',
      intro: 'Let\'s assume you know that angle A is exactly 36.87°.',
      steps: [
        'B = 90° − A',
        'B = 90° − 36.87°',
        'B = 53.13°'
      ],
      answer: 'The missing angle B is 53.13 degrees.'
    },
    resultMeaning: [
      'The result represents the exact degree measurement of the final empty corner in your triangle.',
      'Because all three corners must total exactly 180°, and the right angle takes up 90°, your result ensures the remaining 90° is perfectly split between the two acute corners.'
    ],
    whenToUse: {
      intro: 'This calculation is the go-to final step for nearly every geometry problem.',
      items: [
        'Once you\'ve used trigonometry to find your first angle, you should instantly use this method to find the second one.',
        'Completes the triangle without having to do complex math all over again.'
      ]
    },
    commonMistakes: {
      intro: 'Avoid these common mistakes:',
      items: [
        'Subtracting from 180° instead of 90°.',
        'Entering the 90° angle.',
        'Using an angle bigger than 90°.',
        'Forgetting that only the two acute angles add to 90°.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Right Triangle Angle From Sine Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Right Triangle Angle From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' }
    ],
    faqs: [
      { question: 'What does the formula B = 90° - A actually do?', answer: 'This simple subtraction formula takes the total available 90 degrees shared by the acute corners and removes the angle you already know, leaving exactly what is left for the missing corner.' },
      { question: 'What does the final missing angle result mean?', answer: 'It represents the exact degree measurement of the final empty corner in your right triangle. Finding this number completes the triangle so all three corners add perfectly to 180 degrees.' },
      { question: 'Why do the two angles always add up to 90 degrees?', answer: 'Every triangle holds exactly 180 degrees. Since a right triangle always has one 90-degree corner, that leaves exactly 90 degrees left over to be shared between the remaining two corners.' },
      { question: 'Can one of the acute angles be exactly 90 degrees?', answer: 'No. If one of them was 90 degrees, the other would have to be 0 degrees, which means the triangle would flatten into a single straight line.' },
      { question: 'Do I need to know the lengths of the sides to find the missing angle?', answer: 'Not at all. As long as you know one of the acute angles, the sides don\'t matter for this specific calculation.' }
    ]
  }
];

const code = fs.readFileSync('src/data/focusedAngleCalculatorPages.ts', 'utf8');

const targetStr = 'export const FOCUSED_ANGLE_CALCULATOR_PAGES: FocusedAngleCalculatorPage[] = ';
const idx = code.indexOf(targetStr);
const before = code.substring(0, idx + targetStr.length);
const afterSemi = code.indexOf(';', idx);
const after = code.substring(afterSemi);

let str = pages.map(p => JSON.stringify(p, null, 2)).join(',\\n  ');
str = str.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

const finalCode = before + '[\\n  ' + str + '\\n]' + after;
fs.writeFileSync('src/data/focusedAngleCalculatorPages.ts', finalCode);
console.log("SUCCESS!");
