const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'focusedSideCalculatorPages.ts');

const newPages = `
  ,
  {
    slug: 'right-triangle-side-from-sine-calculator',
    url: '/right-triangle-side-from-sine-calculator/',
    h1: 'Right Triangle Side From Sine Calculator',
    metaTitle: 'Right Triangle Side From Sine Calculator | Find a = c × sin(A)',
    metaDescription: 'Use this right triangle side from sine calculator to find opposite side a from angle A and hypotenuse c.',
    formulaSlug: 'a-c-sin',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    quickSummary: {
      h2: 'How to Use This Calculator',
      intro: 'Content will be added soon.',
      cards: []
    },
    diagram: {
      h2: 'Formula',
      intro: 'Content will be added soon.',
      caption: 'Content will be added soon.',
      sides: {
        a: { label: 'a', description: 'Content will be added soon.', status: 'unknown' },
        b: { label: 'b', description: 'Content will be added soon.', status: 'unknown' },
        c: { label: 'c', description: 'Content will be added soon.', status: 'known' }
      },
      notes: []
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['a = c \\\\times \\\\sin(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.']
    },
    extraSections: [],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' }
    ],
    faqs: [
      { question: 'FAQs', answer: 'Content will be added soon.' }
    ]
  },
  {
    slug: 'right-triangle-side-from-cosine-calculator',
    url: '/right-triangle-side-from-cosine-calculator/',
    h1: 'Right Triangle Side From Cosine Calculator',
    metaTitle: 'Right Triangle Side From Cosine Calculator | Find b = c × cos(A)',
    metaDescription: 'Use this right triangle side from cosine calculator to find adjacent side b from angle A and hypotenuse c.',
    formulaSlug: 'b-c-cos',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    quickSummary: {
      h2: 'How to Use This Calculator',
      intro: 'Content will be added soon.',
      cards: []
    },
    diagram: {
      h2: 'Formula',
      intro: 'Content will be added soon.',
      caption: 'Content will be added soon.',
      sides: {
        a: { label: 'a', description: 'Content will be added soon.', status: 'unknown' },
        b: { label: 'b', description: 'Content will be added soon.', status: 'unknown' },
        c: { label: 'c', description: 'Content will be added soon.', status: 'known' }
      },
      notes: []
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['b = c \\\\times \\\\cos(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.']
    },
    extraSections: [],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      { question: 'FAQs', answer: 'Content will be added soon.' }
    ]
  },
  {
    slug: 'right-triangle-side-from-tangent-calculator',
    url: '/right-triangle-side-from-tangent-calculator/',
    h1: 'Right Triangle Side From Tangent Calculator',
    metaTitle: 'Right Triangle Side From Tangent Calculator | Find a = b × tan(A)',
    metaDescription: 'Use this right triangle side from tangent calculator to find opposite side a from angle A and adjacent side b.',
    formulaSlug: 'a-b-tan',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    quickSummary: {
      h2: 'How to Use This Calculator',
      intro: 'Content will be added soon.',
      cards: []
    },
    diagram: {
      h2: 'Formula',
      intro: 'Content will be added soon.',
      caption: 'Content will be added soon.',
      sides: {
        a: { label: 'a', description: 'Content will be added soon.', status: 'unknown' },
        b: { label: 'b', description: 'Content will be added soon.', status: 'known' },
        c: { label: 'c', description: 'Content will be added soon.', status: 'unknown' }
      },
      notes: []
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['a = b \\\\times \\\\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.']
    },
    extraSections: [],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-adjacent-side-from-tangent-calculator/', label: 'Right Triangle Adjacent Side From Tangent Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      { question: 'FAQs', answer: 'Content will be added soon.' }
    ]
  },
  {
    slug: 'right-triangle-adjacent-side-from-tangent-calculator',
    url: '/right-triangle-adjacent-side-from-tangent-calculator/',
    h1: 'Right Triangle Adjacent Side From Tangent Calculator',
    metaTitle: 'Right Triangle Adjacent Side From Tangent Calculator | Find b = a / tan(A)',
    metaDescription: 'Use this right triangle adjacent side from tangent calculator to find adjacent side b from angle A and opposite side a.',
    formulaSlug: 'b-a-tan',
    toolPurpose: 'Content will be added soon.',
    intro: 'Content will be added soon.',
    quickSummary: {
      h2: 'How to Use This Calculator',
      intro: 'Content will be added soon.',
      cards: []
    },
    diagram: {
      h2: 'Formula',
      intro: 'Content will be added soon.',
      caption: 'Content will be added soon.',
      sides: {
        a: { label: 'a', description: 'Content will be added soon.', status: 'known' },
        b: { label: 'b', description: 'Content will be added soon.', status: 'unknown' },
        c: { label: 'c', description: 'Content will be added soon.', status: 'unknown' }
      },
      notes: []
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'a', label: 'Opposite side a', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Formula',
      paragraphs: ['Content will be added soon.'],
      formulas: ['b = a / \\\\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: ['Content will be added soon.']
    },
    example: {
      h2: 'Example',
      intro: 'Content will be added soon.',
      lines: ['Content will be added soon.']
    },
    extraSections: [],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      { question: 'FAQs', answer: 'Content will be added soon.' }
    ]
  }
];`;

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('];\n\nexport const FOCUSED_SIDE_CALCULATOR_PAGE_SLUGS', newPages + '\n\nexport const FOCUSED_SIDE_CALCULATOR_PAGE_SLUGS');
fs.writeFileSync(filePath, content, 'utf8');

// Also create the astro pages
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const template = (slug) => `---
import { getFocusedSideCalculatorPage } from 'src/data/focusedSideCalculatorPages';
import FocusedSideCalculatorPage from 'theme/templates/FocusedSideCalculatorPage.astro';

const page = getFocusedSideCalculatorPage('${slug}');

if (!page) {
  throw new Error('Missing page data for ${slug}');
}
---

<FocusedSideCalculatorPage page={page} />
`;

const slugs = [
  'right-triangle-side-from-sine-calculator',
  'right-triangle-side-from-cosine-calculator',
  'right-triangle-side-from-tangent-calculator',
  'right-triangle-adjacent-side-from-tangent-calculator'
];

for (const slug of slugs) {
  fs.writeFileSync(path.join(pagesDir, slug + '.astro'), template(slug), 'utf8');
}

console.log('Done');
