import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { localizeFocusedTrigRatioCalculatorPage } from 'src/data/focusedTrigRatioCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

export type FocusedTrigRatioCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  headerSummary: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  calculator: {
    heading: string;
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  introHeading: string;
  intro: string[];
  calculatorNote: string;
  formula: {
    display: string;
    paragraphs: string[];
  };
  diagramExplanation: string[];
  howToSteps: string[];
  example: {
    intro: string;
    steps: string[];
    conclusion: string;
  };
  whatResultMeans: string[];
  whenToUse: {
    intro: string;
    items: string[];
  };
  commonMistakes: {
    intro: string;
    items: string[];
  };
  relatedLinks: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const FOCUSED_TRIG_RATIO_CALCULATOR_PAGES: FocusedTrigRatioCalculatorPage[] = [
  // ================================================================
  // PAGE 1 - SINE RATIO CALCULATOR
  // ================================================================
  {
    slug: 'sine-ratio-calculator',
    url: '/sine-ratio-calculator/',
    h1: 'Sine Ratio Calculator',
    headerSummary:
      'Find sin(A) from the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and hypotenuse c in a right triangle.',
    metaTitle: 'Sine Ratio Calculator | Right Triangle sin(A)',
    metaDescription:
      'Use this sine ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find sin(A) in a right triangle using opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'sine-ratio',
    calculator: {
      heading: 'Calculate Sine Ratio',
      outputLabel: 'sin(A)',
      fields: [
        { key: 'a', label: 'Opposite side a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    introHeading: 'How This Sine Ratio Calculator Works',
    intro: [
      'The sine ratio is one of the first trigonometric functions you learn in geometry. It connects a specific <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in a right triangle to two of its sides \u2014 the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and the hypotenuse. If you know these two <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>, this calculator gives you sin(A) instantly.',
      'Whether you are working through a homework problem, checking an exam-style answer, or solving a real measurement task, this tool removes the manual division step. Enter your values and get the result with the formula shown.'
    ],
    calculatorNote:
      'Enter the length of the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and the hypotenuse c into the fields above. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> divides a by c and returns sin(A). Both values must be positive, and c must be larger than a.',
    formula: {
      display: 'sin(A) = a / c',
      paragraphs: [
        'The sine of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the length of the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the length of the hypotenuse. This is often remembered with the SOH part of SOH-CAH-TOA.',
        'In a right triangle, the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is the one directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. The hypotenuse is always the longest side \u2014 the one facing the 90\u00b0 angle. Since the hypotenuse is always longer than any leg, sin(A) always falls between 0 and 1 for acute angles.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'The sine ratio only uses two of these three sides: the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a (directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A) and the hypotenuse c (the longest side, opposite the right angle at B).'
    ],
    howToSteps: [
      'Identify <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in your right triangle. It must be one of the two acute angles, not the 90\u00b0 angle.',
      'Find the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is side a.',
      'Find the hypotenuse. This is <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> c, the longest side, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
      'Enter the value of a in the first input field.',
      'Enter the value of c in the second input field.',
      'Click Calculate to see sin(A).',
      'Review the result. It should be a decimal between 0 and 1.'
    ],
    example: {
      intro:
        'Suppose you have a right triangle where the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a = 3 and the hypotenuse c = 5.',
      steps: [
        'sin(A) = a / c',
        'sin(A) = 3 / 5',
        'sin(A) = 0.6'
      ],
      conclusion:
        'The sine of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is 0.6. This means the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is 60% of the hypotenuse length. If you need the actual angle, take the inverse sine: A = arcsin(0.6) \u2248 36.87\u00b0.'
    },
    whatResultMeans: [
      'The output is a unitless ratio. It tells you how the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> compares to the hypotenuse in size. A result of 0.5 means the opposite side is exactly half the hypotenuse \u2014 which happens in a <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90 triangle</a> where A = 30\u00b0.',
      'Small values (close to 0) mean <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is small and the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is short relative to the hypotenuse. Values closer to 1 mean angle A is large (approaching 90\u00b0) and the opposite side is nearly as long as the hypotenuse.',
      'Since sin(A) is a ratio of two lengths, it has no units. Whether your triangle is measured in centimeters, inches, or meters, the sine value stays the same as long as both sides use the same unit.'
    ],
    whenToUse: {
      intro:
        'Use this sine ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> in any of these situations:',
      items: [
        'You know the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and hypotenuse and want the sine value.',
        'You are preparing to find <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A using the inverse sine function.',
        'You need to verify a textbook answer or check your own trigonometry work.',
        'You are solving physics problems involving vertical components, like the height of a ramp or the vertical force on an incline.',
        'You are breaking a vector into its vertical and horizontal parts.'
      ]
    },
    commonMistakes: {
      intro:
        'Watch out for these common errors when calculating sine:',
      items: [
        'Using the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the opposite side. Sine uses the side across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, not the side next to it.',
        'Swapping a and c in the formula. The opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> goes in the numerator, and the hypotenuse goes in the denominator. Writing c / a gives the cosecant, not the sine.',
        'Using sides measured in different units. If a is in centimeters and c is in inches, the ratio is meaningless. Convert to the same unit first.',
        'Forgetting that c must be greater than a. In a valid right triangle, the hypotenuse is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.',
        'Entering the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> (90\u00b0) as angle A. Sine applies to the acute angles only. The 90\u00b0 angle is at vertex B.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' }
    ],
    faqs: [
      {
        question: 'What is the formula for sin(A) in a right triangle?',
        answer:
          'The formula is sin(A) = a / c, where a is the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and c is the hypotenuse. You divide the opposite side by the hypotenuse.'
      },
      {
        question: 'Why is sin(A) always less than 1 in a right triangle?',
        answer:
          'Because the hypotenuse c is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. Since a is shorter than c, the fraction a / c is always less than 1.'
      },
      {
        question: 'Can I use this calculator to find the angle itself?',
        answer:
          'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> gives you the sine value. To find the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, use the inverse sine function: A = arcsin(sin(A)). You can do this with our right triangle angle calculator.'
      },
      {
        question: 'What does a sin(A) result of 0.5 mean?',
        answer:
          'It means the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is exactly half the length of the hypotenuse. This corresponds to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A being 30\u00b0.'
      },
      {
        question: 'Do I need to enter the adjacent side to calculate sine?',
        answer:
          'No. Sine only uses the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and the hypotenuse c. The adjacent side b is not part of the sine formula.'
      }
    ]
  },

  // ================================================================
  // PAGE 2 - COSINE RATIO CALCULATOR
  // ================================================================
  {
    slug: 'cosine-ratio-calculator',
    url: '/cosine-ratio-calculator/',
    h1: 'Cosine Ratio Calculator',
    headerSummary:
      'Calculate cos(A) from the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and hypotenuse c with clear right-triangle steps.',
    metaTitle: 'Cosine Ratio Calculator | Right Triangle cos(A)',
    metaDescription:
      'Use this cosine ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find cos(A) in a right triangle using adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'cosine-ratio',
    calculator: {
      heading: 'Calculate Cosine Ratio',
      outputLabel: 'cos(A)',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    },
    introHeading: 'How This Cosine Ratio Calculator Works',
    intro: [
      'The cosine ratio measures how the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of a right triangle compares to the hypotenuse. It is the second part of SOH-CAH-TOA and one of the most commonly used trig functions in geometry, physics, and engineering.',
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> takes two inputs, the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and the hypotenuse c, and returns cos(A). It handles the division for you and shows the result immediately, so you can focus on understanding the geometry instead of the arithmetic.'
    ],
    calculatorNote:
      'Type the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and hypotenuse c into the input fields above. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> computes cos(A) = b / c. Both values must be positive, and c must be larger than b.',
    formula: {
      display: 'cos(A) = b / c',
      paragraphs: [
        'The cosine of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the hypotenuse. This is the CAH in SOH-CAH-TOA.',
        'The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b is the leg that touches <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and the right angle. The hypotenuse c sits across from the right angle and is always the longest side. Because the hypotenuse is longer than any leg, cos(A) always produces a value between 0 and 1 for acute angles.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'The cosine ratio uses the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b (the leg that forms <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A along with the hypotenuse) and the hypotenuse c. Side a is not part of the cosine calculation.'
    ],
    howToSteps: [
      'Locate <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in your right triangle. It is one of the two acute angles.',
      'Identify the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. This is side b, the leg that forms <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A together with the hypotenuse.',
      'Identify the hypotenuse c, the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
      'Enter the value of b in the first field.',
      'Enter the value of c in the second field.',
      'Press Calculate to see cos(A).',
      'Check that the result is between 0 and 1.'
    ],
    example: {
      intro:
        'A right triangle has adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b = 4 and hypotenuse c = 5.',
      steps: [
        'cos(A) = b / c',
        'cos(A) = 4 / 5',
        'cos(A) = 0.8'
      ],
      conclusion:
        'Cosine of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is 0.8. The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is 80% of the hypotenuse length. To find the angle: A = arccos(0.8) \u2248 36.87\u00b0.'
    },
    whatResultMeans: [
      'Cosine tells you how much of the hypotenuse length is covered by the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. A cosine of 0.8 means the adjacent side stretches 80% as far as the hypotenuse does.',
      'When <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is small, the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is nearly as long as the hypotenuse, so cos(A) is close to 1. When angle A is large (near 90\u00b0), the adjacent side shrinks relative to the hypotenuse, pushing cos(A) toward 0.',
      'The result is dimensionless. It does not matter whether your <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> are in feet, meters, or any other unit: cosine is a pure ratio.'
    ],
    whenToUse: {
      intro:
        'Reach for this cosine ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> when:',
      items: [
        'You know the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and hypotenuse and need the cosine value.',
        'You are finding the horizontal component of a force, velocity, or displacement vector.',
        'You want to verify a trig value from a textbook or problem set.',
        'You are working on navigation or surveying problems that involve horizontal distances.',
        'You need cos(A) before computing another derived quantity, like secant or tangent.'
      ]
    },
    commonMistakes: {
      intro:
        'These are the most frequent cosine errors students make:',
      items: [
        'Using the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the adjacent side. Cosine uses the leg next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, not the one across from it.',
        'Entering b larger than c. In a valid right triangle, the hypotenuse is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. If b exceeds c, your values do not form a right triangle.',
        'Reversing the fraction. Writing c / b gives the secant, not the cosine.',
        'Mixing the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> with the hypotenuse label. Double-check which side is opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> (that is the hypotenuse) and which forms part of angle A (that is the adjacent side).',
        'Using <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> measured in different units without converting first.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' }
    ],
    faqs: [
      {
        question: 'What is the cosine ratio formula for a right triangle?',
        answer:
          'It is cos(A) = b / c, where b is the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and c is the hypotenuse. Adjacent means the leg that touches <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.'
      },
      {
        question: 'How is cosine different from sine?',
        answer:
          'Sine uses the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> over the hypotenuse (a / c). Cosine uses the adjacent side over the hypotenuse (b / c). They measure different sides relative to the same <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.'
      },
      {
        question: 'What does it mean if cos(A) = 0.5?',
        answer:
          'It means the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is exactly half the hypotenuse. This happens when <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is 60\u00b0.'
      },
      {
        question: 'Can cosine be greater than 1?',
        answer:
          'No. In a right triangle, the hypotenuse is always longer than the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, so b / c is always less than 1.'
      },
      {
        question: 'Why do I only need two sides for cosine?',
        answer:
          'The cosine formula only involves the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and the hypotenuse. The opposite side is not part of the calculation.'
      }
    ]
  },

  // ================================================================
  // PAGE 3 - TANGENT RATIO CALCULATOR
  // ================================================================
  {
    slug: 'tangent-ratio-calculator',
    url: '/tangent-ratio-calculator/',
    h1: 'Tangent Ratio Calculator',
    headerSummary:
      'Find tan(A) from opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and adjacent side b for slope, rise, and run problems.',
    metaTitle: 'Tangent Ratio Calculator | Right Triangle tan(A)',
    metaDescription:
      'Use this tangent ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find tan(A) in a right triangle using opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and adjacent side b with formula, steps, and examples.',
    formulaSlug: 'tangent-ratio',
    calculator: {
      heading: 'Calculate Tangent Ratio',
      outputLabel: 'tan(A)',
      fields: [
        { key: 'a', label: 'Opposite side a', min: 0 },
        { key: 'b', label: 'Adjacent side b', min: 0 }
      ]
    },
    introHeading: 'How This Tangent Ratio Calculator Works',
    intro: [
      'Tangent is the third of the primary <a href="/right-triangle-trig-ratios-calculator/" class="text-primary hover:underline">trig ratios</a>, and it works a little differently from sine and cosine. Instead of comparing a leg to the hypotenuse, tangent compares one leg to the other \u2014 specifically, the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> to the adjacent side. This makes it especially useful in slope and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-of-elevation problems.',
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> divides the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a by the adjacent side b and gives you tan(A). No need to pull out a calculator app \u2014 just enter your two leg lengths and get the answer.'
    ],
    calculatorNote:
      'Enter opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and adjacent side b in the input fields above. The tool computes tan(A) = a / b. Both values must be positive.',
    formula: {
      display: 'tan(A) = a / b',
      paragraphs: [
        'Tangent of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the adjacent side. This is the TOA part of SOH-CAH-TOA.',
        'Unlike sine and cosine, tangent does not involve the hypotenuse. It only uses the two legs. This also means tangent is not capped at 1 \u2014 it can be any positive number for acute angles, and it grows without limit as <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A approaches 90\u00b0.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'Tangent uses only the two legs: the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and the adjacent side b. The hypotenuse c does not appear in the tangent formula.'
    ],
    howToSteps: [
      'Find <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in the right triangle.',
      'Identify <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a, the leg directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.',
      'Identify <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, the leg that forms <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A alongside the hypotenuse.',
      'Enter the value of a in the first field.',
      'Enter the value of b in the second field.',
      'Click Calculate to get tan(A).',
      'The result can be less than 1, equal to 1, or greater than 1.'
    ],
    example: {
      intro:
        'A right triangle has opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a = 3 and adjacent side b = 4.',
      steps: [
        'tan(A) = a / b',
        'tan(A) = 3 / 4',
        'tan(A) = 0.75'
      ],
      conclusion:
        'The tangent of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is 0.75. To find the angle: A = arctan(0.75) \u2248 36.87\u00b0.'
    },
    whatResultMeans: [
      'Tangent tells you the steepness of the triangle from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A\u2019s perspective. Think of it as a rise-over-run calculation.',
      'A tangent of 1 means the opposite and adjacent sides are equal, which happens in a <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90 triangle</a>. Values below 1 mean the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is shorter than the adjacent side \u2014 the triangle is wider than it is tall. Values above 1 mean the opposite side is longer \u2014 the triangle is taller than it is wide.',
      'In practical terms, tangent is the slope of the hypotenuse line when you stand at <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.'
    ],
    whenToUse: {
      intro:
        'This tangent ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is most helpful when:',
      items: [
        'You have both legs of the triangle and want the tangent ratio.',
        'You are solving slope, grade, or pitch problems (rise over run).',
        'You need to find the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of elevation or depression.',
        'You want to determine how steep a ramp, roof, or incline is.',
        'You are converting between leg lengths and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> measures without using the hypotenuse.'
      ]
    },
    commonMistakes: {
      intro:
        'Avoid these common tangent mistakes:',
      items: [
        'Including the hypotenuse in the tangent formula. Tangent only uses the two legs \u2014 no hypotenuse involved.',
        'Putting the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in the numerator. The formula is a / b (opposite over adjacent), not b / a. Reversing it gives cotangent.',
        'Expecting the result to always be less than 1. Unlike sine and cosine, tangent can be any positive number.',
        'Confusing which leg is opposite and which is adjacent. Always identify them relative to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, not the right angle.',
        'Using the formula for the wrong <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. If you labeled angle B instead of angle A, the opposite and adjacent sides swap.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' }
    ],
    faqs: [
      {
        question: 'What is the tangent ratio formula?',
        answer:
          'It is tan(A) = a / b, where a is the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and b is the adjacent side. You divide opposite by adjacent.'
      },
      {
        question: 'Can tan(A) be greater than 1?',
        answer:
          'Yes. When the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is longer than the adjacent side, tangent exceeds 1. For example, tan(60\u00b0) \u2248 1.732.'
      },
      {
        question: 'How is tangent related to slope?',
        answer:
          'Tangent is essentially the slope of the hypotenuse when the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is the horizontal run and the opposite side is the vertical rise. tan(A) = rise / run.'
      },
      {
        question: 'Why doesn\u2019t tangent use the hypotenuse?',
        answer:
          'Tangent measures the ratio between the two legs directly. The hypotenuse is not needed because tangent describes the shape (steepness) of the triangle, not the scale.'
      },
      {
        question: 'What happens when a = b?',
        answer:
          'When both legs are equal, tan(A) = 1, and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is exactly 45\u00b0.'
      }
    ]
  },

  // ================================================================
  // PAGE 4 - COTANGENT RATIO CALCULATOR
  // ================================================================
  {
    slug: 'cotangent-ratio-calculator',
    url: '/cotangent-ratio-calculator/',
    h1: 'Cotangent Ratio Calculator',
    headerSummary:
      'Calculate cot(A) from adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b over opposite side a in a right triangle.',
    metaTitle: 'Cotangent Ratio Calculator | Right Triangle cot(A)',
    metaDescription:
      'Use this cotangent ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find cot(A) in a right triangle using adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and opposite side a with formula, steps, and examples.',
    formulaSlug: 'cotangent-exact',
    calculator: {
      heading: 'Calculate Cotangent Ratio',
      outputLabel: 'cot(A)',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'a', label: 'Opposite side a', min: 0 }
      ]
    },
    introHeading: 'How This Cotangent Ratio Calculator Works',
    intro: [
      'Cotangent is the reciprocal of tangent. While tangent divides the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> by the adjacent side, cotangent flips that fraction \u2014 it divides the adjacent side by the opposite side. It shows up less often in basic geometry classes, but it plays an important role in advanced trigonometry and calculus.',
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> takes the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and the opposite side a, then returns cot(A) = b / a. If you are used to working with tangent, cotangent is simply the inverse fraction.'
    ],
    calculatorNote:
      'Enter adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and opposite side a in the fields above. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> returns cot(A) = b / a. Both values must be positive.',
    formula: {
      display: 'cot(A) = b / a',
      paragraphs: [
        'Cotangent of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the opposite side. It is the reciprocal of tangent: cot(A) = 1 / tan(A).',
        'Like tangent, cotangent uses only the two legs of the right triangle. The hypotenuse is not involved. Cotangent can take any positive value for acute angles.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'Cotangent uses the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b (the leg next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A) as the numerator and the opposite side a (across from angle A) as the denominator. The hypotenuse c is not used.'
    ],
    howToSteps: [
      'Identify <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in your right triangle.',
      'Find <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, the adjacent leg \u2014 the one next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and the right angle.',
      'Find <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a, the opposite leg \u2014 the one across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.',
      'Enter b in the first input field.',
      'Enter a in the second input field.',
      'Click Calculate.',
      'The result is cot(A), which can be any positive number.'
    ],
    example: {
      intro:
        'A right triangle has adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b = 4 and opposite side a = 3.',
      steps: [
        'cot(A) = b / a',
        'cot(A) = 4 / 3',
        'cot(A) \u2248 1.3333'
      ],
      conclusion:
        'The cotangent of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is approximately 1.3333. You can verify this: tan(A) = 3 / 4 = 0.75, and 1 / 0.75 = 1.3333.'
    },
    whatResultMeans: [
      'Cotangent tells you how many times the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> fits relative to the opposite side. It is the run-over-rise version of the steepness ratio.',
      'A cotangent of 1 means both legs are equal (a 45\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>). Values greater than 1 mean the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is longer than the opposite side \u2014 the triangle is wider and the angle is smaller. Values less than 1 mean the opposite side is longer \u2014 the angle is larger and the triangle is steeper.',
      'Since cotangent is the reciprocal of tangent, you can always convert between them: cot(A) = 1 / tan(A) and tan(A) = 1 / cot(A).'
    ],
    whenToUse: {
      intro:
        'Pick this cotangent ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> when:',
      items: [
        'You need the reciprocal of tangent without manually computing 1 / tan(A).',
        'You are working with formulas that specifically call for cotangent, such as certain calculus identities.',
        'You prefer to think in terms of run-over-rise rather than rise-over-run.',
        'You are solving problems in surveying, construction, or trigonometric proofs.'
      ]
    },
    commonMistakes: {
      intro:
        'Keep an eye out for these cotangent pitfalls:',
      items: [
        'Writing a / b instead of b / a. Cotangent puts the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> on top, not the opposite side. Swapping them gives you tangent.',
        'Confusing cotangent with cosine. Cotangent is b / a (adjacent over opposite). Cosine is b / c (adjacent over hypotenuse). They are different ratios.',
        'Using the hypotenuse in the calculation. Cotangent only involves the two legs.',
        'Forgetting it is the reciprocal of tangent. If you already know tan(A), just take 1 / tan(A) to get cot(A).',
        'Mixing up which <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is adjacent and which is opposite. Always identify sides relative to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the cotangent formula for a right triangle?',
        answer:
          'It is cot(A) = b / a, where b is the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and a is the opposite side of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is the reverse of the tangent fraction.'
      },
      {
        question: 'How does cotangent relate to tangent?',
        answer:
          'Cotangent is the reciprocal of tangent. If tan(A) = 0.75, then cot(A) = 1 / 0.75 \u2248 1.3333.'
      },
      {
        question: 'When would I use cotangent instead of tangent?',
        answer:
          'Use cotangent when a formula specifically requires it, or when you want the adjacent-to-opposite ratio directly. In many calculus and physics contexts, cotangent appears in identities and derivative formulas.'
      },
      {
        question: 'Can cot(A) equal zero in a right triangle?',
        answer:
          'In a right triangle with acute angles only, cot(A) is always positive. Cotangent approaches zero as <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A approaches 90\u00b0, but the 90\u00b0 angle is the right angle itself, not an acute angle you would measure.'
      },
      {
        question: 'Is cotangent the same as 1 divided by tangent?',
        answer:
          'Yes. cot(A) = 1 / tan(A) = b / a. Both expressions give the same result.'
      }
    ]
  },

  // ================================================================
  // PAGE 5 - SECANT RATIO CALCULATOR
  // ================================================================
  {
    slug: 'secant-ratio-calculator',
    url: '/secant-ratio-calculator/',
    h1: 'Secant Ratio Calculator',
    headerSummary:
      'Find sec(A) by comparing hypotenuse c with adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, the reciprocal of cosine.',
    metaTitle: 'Secant Ratio Calculator | Right Triangle sec(A)',
    metaDescription:
      'Use this secant ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find sec(A) in a right triangle using hypotenuse c and adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b with formula, steps, and examples.',
    formulaSlug: 'secant-exact',
    calculator: {
      heading: 'Calculate Secant Ratio',
      outputLabel: 'sec(A)',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'b', label: 'Adjacent side b', min: 0 }
      ]
    },
    introHeading: 'How This Secant Ratio Calculator Works',
    intro: [
      'Secant is the reciprocal of cosine. Where cosine divides the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> by the hypotenuse, secant flips that \u2014 it divides the hypotenuse by the adjacent side. The result is always greater than or equal to 1 because the hypotenuse is always the longest side in a right triangle.',
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> takes two inputs \u2014 hypotenuse c and adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b \u2014 and returns sec(A). It is a quick way to get this reciprocal ratio without doing the division by hand or computing cosine first.'
    ],
    calculatorNote:
      'Enter the hypotenuse c and adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b in the fields above. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> computes sec(A) = c / b. Both values must be positive, and c must be greater than b.',
    formula: {
      display: 'sec(A) = c / b',
      paragraphs: [
        'Secant of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the hypotenuse divided by the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. This is the reciprocal of cosine: sec(A) = 1 / cos(A).',
        'Because the hypotenuse is always longer than the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle, sec(A) is always greater than 1. As <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A gets larger, the adjacent side shrinks relative to the hypotenuse, so secant increases.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'Secant uses the hypotenuse c as the numerator and the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b as the denominator. The opposite side a is not part of the secant calculation.'
    ],
    howToSteps: [
      'Identify <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in your right triangle.',
      'Find <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> c, the hypotenuse \u2014 the longest side, across from the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
      'Find <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, the adjacent leg \u2014 the side that touches both <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and the right angle.',
      'Enter c in the first input field.',
      'Enter b in the second input field.',
      'Click Calculate.',
      'The result is sec(A), which is always greater than or equal to 1.'
    ],
    example: {
      intro:
        'A right triangle has hypotenuse c = 5 and adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b = 4.',
      steps: [
        'sec(A) = c / b',
        'sec(A) = 5 / 4',
        'sec(A) = 1.25'
      ],
      conclusion:
        'The secant of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is 1.25. To verify: cos(A) = 4 / 5 = 0.8, and 1 / 0.8 = 1.25.'
    },
    whatResultMeans: [
      'Secant tells you how many times longer the hypotenuse is compared to the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. A secant of 1.25 means the hypotenuse is 25% longer than the adjacent side.',
      'The minimum value of secant in a right triangle is slightly above 1, which occurs when <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is very small and the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is nearly as long as the hypotenuse. As angle A increases, the adjacent side shortens relative to the hypotenuse, and secant grows larger.',
      'Secant is useful whenever you need to scale from the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> to the hypotenuse, or when a formula calls for 1 / cos(A).'
    ],
    whenToUse: {
      intro:
        'This secant ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is the right choice when:',
      items: [
        'A formula requires secant or 1 / cos(A) and you want the value directly.',
        'You need to find how much longer the hypotenuse is compared to the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.',
        'You are working with calculus problems that involve secant in derivatives or integrals.',
        'You are checking structural calculations where the hypotenuse represents the actual length and the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> represents the horizontal <a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>.'
      ]
    },
    commonMistakes: {
      intro:
        'These secant errors trip up students most often:',
      items: [
        'Confusing secant with cosine. Cosine is b / c (adjacent over hypotenuse). Secant is the reciprocal: c / b (hypotenuse over adjacent).',
        'Getting a result less than 1. If your answer is below 1, you likely reversed the fraction. In a valid right triangle, sec(A) is always greater than or equal to 1.',
        'Using the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the adjacent side. Secant pairs the hypotenuse with the adjacent side, not the opposite side.',
        'Mixing up secant and cosecant. Secant is the reciprocal of cosine. Cosecant is the reciprocal of sine. They use different sides.',
        'Entering b larger than c. The hypotenuse must always be longer than the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' },
      { href: '/cosecant-ratio-calculator/', label: 'Cosecant Ratio Calculator' },
      { href: '/cotangent-ratio-calculator/', label: 'Cotangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the secant ratio in a right triangle?',
        answer:
          'Secant is defined as sec(A) = c / b, where c is the hypotenuse and b is the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. It is the reciprocal of cosine.'
      },
      {
        question: 'Why is secant always greater than 1?',
        answer:
          'Because the hypotenuse c is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle. Dividing a larger number (c) by a smaller one (b) always gives a result greater than 1.'
      },
      {
        question: 'How do I convert between secant and cosine?',
        answer:
          'sec(A) = 1 / cos(A), and cos(A) = 1 / sec(A). If you know one, you can find the other by taking the reciprocal.'
      },
      {
        question: 'What is sec(45\u00b0)?',
        answer:
          'In a <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90 triangle</a>, the hypotenuse is \u221a2 times the leg. So sec(45\u00b0) = \u221a2 \u2248 1.4142.'
      },
      {
        question: 'Is secant used in real-world applications?',
        answer:
          'Yes. Secant appears in physics formulas, engineering calculations, and calculus. It is used when you need to scale a horizontal distance to the actual path length along an incline.'
      }
    ]
  },

  // ================================================================
  // PAGE 6 - COSECANT RATIO CALCULATOR
  // ================================================================
  {
    slug: 'cosecant-ratio-calculator',
    url: '/cosecant-ratio-calculator/',
    h1: 'Cosecant Ratio Calculator',
    headerSummary:
      'Calculate csc(A) from hypotenuse c and opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a, the reciprocal of sine.',
    metaTitle: 'Cosecant Ratio Calculator | Right Triangle csc(A)',
    metaDescription:
      'Use this cosecant ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find csc(A) in a right triangle using hypotenuse c and opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a with formula, steps, and examples.',
    formulaSlug: 'cosecant-exact',
    calculator: {
      heading: 'Calculate Cosecant Ratio',
      outputLabel: 'csc(A)',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'a', label: 'Opposite side a', min: 0 }
      ]
    },
    introHeading: 'How This Cosecant Ratio Calculator Works',
    intro: [
      'Cosecant is the reciprocal of sine. It divides the hypotenuse by the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, giving you a ratio that is always greater than 1 in a right triangle. You might not see it as often as sine or cosine in basic courses, but it is essential in more advanced math and certain physics applications.',
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> makes it simple. Enter the hypotenuse c and the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a, and it returns csc(A) immediately. No need to calculate sine first and then flip the fraction.'
    ],
    calculatorNote:
      'Enter hypotenuse c and opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a in the fields above. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> computes csc(A) = c / a. Both values must be positive, and c must be greater than a.',
    formula: {
      display: 'csc(A) = c / a',
      paragraphs: [
        'Cosecant of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A equals the hypotenuse divided by the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. It is the reciprocal of sine: csc(A) = 1 / sin(A).',
        'The hypotenuse is always longer than the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, so csc(A) always produces a value greater than 1 for acute angles. As <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A decreases, the opposite side gets shorter relative to the hypotenuse, and cosecant increases.'
      ]
    },
    diagramExplanation: [
      'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
      'Cosecant uses the hypotenuse c as the numerator and the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a as the denominator. The adjacent side b plays no role in the cosecant formula.'
    ],
    howToSteps: [
      'Identify <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in your right triangle.',
      'Locate the hypotenuse c \u2014 the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and the longest side.',
      'Locate the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a \u2014 the leg directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A.',
      'Type c into the first input field.',
      'Type a into the second input field.',
      'Click Calculate.',
      'The result is csc(A), always greater than 1.'
    ],
    example: {
      intro:
        'A right triangle has hypotenuse c = 5 and opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a = 3.',
      steps: [
        'csc(A) = c / a',
        'csc(A) = 5 / 3',
        'csc(A) \u2248 1.6667'
      ],
      conclusion:
        'The cosecant of <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is approximately 1.6667. Verification: sin(A) = 3 / 5 = 0.6, and 1 / 0.6 \u2248 1.6667.'
    },
    whatResultMeans: [
      'Cosecant tells you how many times longer the hypotenuse is compared to the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. A cosecant of 1.6667 means the hypotenuse is about 67% longer than the opposite side.',
      'When <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is large (close to 90\u00b0), the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is nearly as long as the hypotenuse, so csc(A) is close to 1. When angle A is small, the opposite side is much shorter, and cosecant grows large.',
      'Think of it this way: if you know the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and want to find the hypotenuse, multiply the opposite side by csc(A). That gives you c = a \u00d7 csc(A).'
    ],
    whenToUse: {
      intro:
        'Reach for this cosecant ratio <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> when:',
      items: [
        'You need the reciprocal of sine without computing sin(A) first.',
        'A formula specifically calls for cosecant, which appears in certain trigonometric identities.',
        'You are scaling the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> up to the full hypotenuse length.',
        'You are working on physics or engineering problems involving forces, wave functions, or oscillation formulas that use cosecant.'
      ]
    },
    commonMistakes: {
      intro:
        'Watch out for these cosecant errors:',
      items: [
        'Confusing cosecant with sine. Sine is a / c (opposite over hypotenuse). Cosecant is the reciprocal: c / a (hypotenuse over opposite).',
        'Confusing cosecant with secant. Cosecant is based on the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> (reciprocal of sine). Secant is based on the adjacent side (reciprocal of cosine). They use different legs.',
        'Getting a result less than 1. If your answer is below 1, you may have entered the values in the wrong order. csc(A) is always greater than 1.',
        'Using the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the opposite side. Cosecant pairs the hypotenuse with the opposite side only.',
        'Expecting cosecant and cosine to be related by name. Despite the co- prefix, cosecant is the reciprocal of sine, not cosine.'
      ]
    },
    relatedLinks: [
      { href: '/right-triangle-trig-ratios-calculator/', label: 'Right Triangle Trig Ratios Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' },
      { href: '/secant-ratio-calculator/', label: 'Secant Ratio Calculator' },
      { href: '/cotangent-ratio-calculator/', label: 'Cotangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What is the cosecant formula in a right triangle?',
        answer:
          'It is csc(A) = c / a, where c is the hypotenuse and a is the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. Cosecant is the reciprocal of sine.'
      },
      {
        question: 'How is cosecant related to sine?',
        answer:
          'csc(A) = 1 / sin(A). If sin(A) = 0.6, then csc(A) = 1 / 0.6 \u2248 1.6667.'
      },
      {
        question: 'Why is cosecant always greater than 1?',
        answer:
          'Because the hypotenuse is always longer than the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle. The fraction c / a always exceeds 1.'
      },
      {
        question: 'What is csc(30\u00b0)?',
        answer:
          'In a <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90 triangle</a>, sin(30\u00b0) = 0.5, so csc(30\u00b0) = 1 / 0.5 = 2. The hypotenuse is exactly twice the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.'
      },
      {
        question: 'When would I use cosecant instead of sine?',
        answer:
          'Use cosecant when a formula requires it directly, or when you want to find the hypotenuse from the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>: c = a \u00d7 csc(A). It saves the step of dividing by sine.'
      }
    ]
  }
];

export const FOCUSED_TRIG_RATIO_CALCULATOR_PAGE_SLUGS =
  FOCUSED_TRIG_RATIO_CALCULATOR_PAGES.map((page) => page.slug);

export function getFocusedTrigRatioCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): FocusedTrigRatioCalculatorPage | undefined {
  const englishPage = FOCUSED_TRIG_RATIO_CALCULATOR_PAGES.find((page) => page.slug === slug);
  if (!englishPage) return undefined;

  return locale === DEFAULT_LOCALE
    ? englishPage
    : localizeFocusedTrigRatioCalculatorPage(englishPage, locale);
}
