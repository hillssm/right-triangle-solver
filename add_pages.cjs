const fs = require('fs');
let content = fs.readFileSync('src/data/focusedMeasurementCalculatorPages.ts', 'utf8');

const target = '}\n];\n\nexport const FOCUSED_MEASUREMENT_CALCULATOR_PAGE_SLUGS';

const newPages = `},
  {
    slug: 'right-triangle-area-from-hypotenuse-calculator',
    url: '/right-triangle-area-from-hypotenuse-calculator/',
    h1: 'Right Triangle Area From Hypotenuse Calculator',
    metaTitle: 'Right Triangle Area From Hypotenuse Calculator | Area Formula',
    metaDescription: 'Calculate the area of a right triangle from its hypotenuse and altitude. See the formula and step-by-step math.',
    formulaSlug: 'area-ch',
    toolPurpose: 'Compute the right triangle area using the hypotenuse and altitude.',
    intro: 'Enter the hypotenuse and altitude to calculate the area.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'c', label: 'Hypotenuse c' },
        { key: 'h', label: 'Altitude h' }
      ]
    },
    formulaSection: {
      h2: 'Area Formula',
      paragraphs: ['The area can be calculated using the hypotenuse and altitude.'],
      formulas: ['Area = (c \\\\times h) / 2']
    },
    howTo: {
      h2: 'How to Calculate Area',
      steps: ['Identify the hypotenuse.', 'Identify the altitude.', 'Multiply and divide by 2.']
    },
    example: {
      h2: 'Example',
      intro: 'Given a hypotenuse of 10 and altitude of 4:',
      lines: ['c = 10', 'h = 4'],
      answer: 'Area = 20'
    },
    extraSections: [],
    relatedLinks: [],
    faqs: []
  },
  {
    slug: 'right-triangle-area-from-perimeter-calculator',
    url: '/right-triangle-area-from-perimeter-calculator/',
    h1: 'Right Triangle Area From Perimeter Calculator',
    metaTitle: 'Right Triangle Area From Perimeter Calculator | Area Formula',
    metaDescription: 'Calculate the area of a right triangle related to its perimeter using semiperimeter and inradius.',
    formulaSlug: 'area-rs',
    toolPurpose: 'Compute the right triangle area using semiperimeter and inradius.',
    intro: 'Enter the semiperimeter and inradius to calculate the area.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'r', label: 'Inradius r' },
        { key: 's', label: 'Semiperimeter s' }
      ]
    },
    formulaSection: {
      h2: 'Area Formula',
      paragraphs: ['The area can be calculated using semiperimeter (half the perimeter) and inradius.'],
      formulas: ['Area = r \\\\times s']
    },
    howTo: {
      h2: 'How to Calculate Area',
      steps: ['Find the semiperimeter.', 'Find the inradius.', 'Multiply them.']
    },
    example: {
      h2: 'Example',
      intro: 'Given a semiperimeter of 12 and inradius of 2:',
      lines: ['s = 12', 'r = 2'],
      answer: 'Area = 24'
    },
    extraSections: [],
    relatedLinks: [],
    faqs: []
  }
];

export const FOCUSED_MEASUREMENT_CALCULATOR_PAGE_SLUGS`;

content = content.replace(target, newPages);
fs.writeFileSync('src/data/focusedMeasurementCalculatorPages.ts', content);
