const fs = require('fs');
const path = 'src/data/focusedMeasurementCalculatorPages.ts';
let content = fs.readFileSync(path, 'utf8');

const newLegs = `  {
    slug: 'right-triangle-area-from-legs-calculator',
    url: '/right-triangle-area-from-legs-calculator/',
    h1: 'Right Triangle Area From Legs Calculator',
    metaTitle: 'Right Triangle Area From Legs Calculator',
    metaDescription: 'Content will be added soon.',
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
      formulas: ['A = (a \\\\times b) / 2']
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
        h2: 'Related Area Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },`;

const newAngle = `  {
    slug: 'right-triangle-area-from-angle-calculator',
    url: '/right-triangle-area-from-angle-calculator/',
    h1: 'Right Triangle Area From Angle Calculator',
    metaTitle: 'Right Triangle Area From Angle Calculator',
    metaDescription: 'Content will be added soon.',
    formulaSlug: 'area-sin-a',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    calculator: {
      outputLabel: 'Area',
      fields: [
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['A = (b \\\\times c \\\\times \\\\sin(A)) / 2']
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
        h2: 'Related Area Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },`;

const newSemiperimeter = `  {
    slug: 'right-triangle-area-from-semiperimeter-calculator',
    url: '/right-triangle-area-from-semiperimeter-calculator/',
    h1: 'Right Triangle Area From Semiperimeter Calculator',
    metaTitle: 'Right Triangle Area From Semiperimeter Calculator',
    metaDescription: 'Content will be added soon.',
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
      formulas: ['A = r \\\\times s']
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
        h2: 'Related Area Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-altitude-calculator/', label: 'Right Triangle Area From Altitude Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  },`;

const newAltitude = `  {
    slug: 'right-triangle-area-from-altitude-calculator',
    url: '/right-triangle-area-from-altitude-calculator/',
    h1: 'Right Triangle Area From Altitude Calculator',
    metaTitle: 'Right Triangle Area From Altitude Calculator',
    metaDescription: 'Content will be added soon.',
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
      formulas: ['A = (c \\\\times h) / 2']
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
        h2: 'Related Area Calculators',
        paragraphs: ['Content will be added soon.']
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-area-calculator/', label: 'Right Triangle Area Calculator' },
      { href: '/right-triangle-area-from-legs-calculator/', label: 'Right Triangle Area From Legs Calculator' },
      { href: '/right-triangle-area-from-angle-calculator/', label: 'Right Triangle Area From Angle Calculator' },
      { href: '/right-triangle-area-from-semiperimeter-calculator/', label: 'Right Triangle Area From Semiperimeter Calculator' }
    ],
    faqs: [
      {
        question: 'Content will be added soon?',
        answer: 'Content will be added soon.'
      }
    ]
  }`;

const regex = /\{\s*slug:\s*(['"]?)right-triangle-area-from-legs-calculator\1.*?^\s*\},?/ms;
content = content.replace(regex, newLegs + '\n' + newAngle + '\n' + newSemiperimeter + '\n' + newAltitude + ',');

fs.writeFileSync(path, content);
console.log('Pages updated successfully.');
