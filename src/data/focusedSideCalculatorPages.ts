import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import {
  isFocusedSideAngleCalculatorSlug,
  localizeFocusedSideAngleCalculatorPage
} from 'src/data/focusedSideAngleCalculatorTranslations';
import { FOCUSED_SIDE_CALCULATOR_TRANSLATIONS } from 'src/data/focusedSideCalculatorTranslations';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type DiagramSideStatus = 'known' | 'unknown';

export type FocusedSideCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  tagline?: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  toolPurpose: string;
  intro: string;
  quickSummary: {
    h2: string;
    intro: string;
    cards: {
      label: string;
      value: string;
    }[];
  };
  diagram: {
    h2: string;
    intro: string;
    caption: string;
    sides: {
      a: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
      b: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
      c: {
        label: string;
        description: string;
        status: DiagramSideStatus;
      };
    };
    notes: string[];
  };
  calculator: {
    outputLabel: string;
    fields: FormulaCalculatorField[];
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
  };
  extraSections: {
    h2: string;
    paragraphs: string[];
    customHtml?: string;
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

export const FOCUSED_SIDE_CALCULATOR_PAGES: FocusedSideCalculatorPage[] = [
  {
    slug: 'pythagorean-theorem-calculator',
    url: '/pythagorean-theorem-calculator/',
    h1: 'Pythagorean Theorem Calculator: Find the Hypotenuse',
    tagline: 'Enter the two legs a and b to calculate the hypotenuse c instantly.',
    metaTitle: 'Pythagorean Theorem Calculator | Find the Hypotenuse',
    metaDescription:
      'Calculate the hypotenuse of a right triangle using two known legs. Learn the Pythagorean theorem, follow worked examples, and verify your answer.',
    formulaSlug: 'pythagorean-theorem',
    toolPurpose:
      'Whether you\u2019re solving a homework problem or measuring a diagonal in real life, this tool gives you the answer in seconds \u2014 with the full solution shown step by step.',
    intro:
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the hypotenuse c of a right triangle when you know both perpendicular legs a and b. The hypotenuse sits opposite the 90&deg; angle and is always the longest side of a valid right triangle. Enter your two leg values above to get the result instantly with a full step-by-step solution.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when the two sides that meet at the 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> are known and the diagonal <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is missing. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> focuses on the classic hypotenuse case, so the inputs stay simple and the result is easy to check.',
      cards: [
        { label: 'Known values', value: 'Leg a and leg b' },
        { label: 'Finds', value: 'Hypotenuse c' },
        { label: 'Main formula', value: 'c = sqrt(a^2 + b^2)' },
        { label: 'Best for', value: 'Diagonals, ladders, ramps, screens, and geometry homework' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Finding the Hypotenuse',
      intro:
        'The diagram shows the exact <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> relationship used by the tool. The two legs are the known input values, and the slanted side c is the hypotenuse that the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds.',
      caption:
        'Right triangle diagram with known legs a and b and unknown hypotenuse c.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Leg a is one of the two sides that forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          status: 'known'
        },
        b: {
          label: 'b = known',
          description: 'Leg b is the other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> that forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          status: 'known'
        },
        c: {
          label: 'c = find',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and sits opposite the 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          status: 'unknown'
        }
      },
      notes: [
        'a and b can be swapped; the hypotenuse result will be the same.',
        'Use the same unit for both legs before calculating.',
        'The answer c will always be greater than either leg in a valid right triangle.'
      ]
    },
    calculator: {
      outputLabel: 'Hypotenuse c',
      fields: [
        { key: 'a', label: 'Leg a', min: 0, placeholder: 'e.g. 6' },
        { key: 'b', label: 'Leg b', min: 0, placeholder: 'e.g. 8' }
      ]
    },
    formulaSection: {
      h2: 'Pythagorean Theorem Formula',
      paragraphs: [
        'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs. To solve for the hypotenuse, take the square root of both sides.',
        'In this formula, a and b are the two legs of the right triangle \u2014 the sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. c is the hypotenuse, the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right angle. This formula only works for right triangles.'
      ],
      formulas: ['a^2 + b^2 = c^2', 'c^2 = a^2 + b^2', 'c = \\\\sqrt{a^2 + b^2}']
    },
    howTo: {
      h2: 'How to Calculate the Hypotenuse',
      steps: [
        'Confirm that the triangle contains a 90&deg; angle. The theorem does not apply to other triangles.',
        'Identify the two legs that form that right angle. These are your a and b.',
        'Enter the length of leg a in the first input field.',
        'Enter the length of leg b in the second input field.',
        'Confirm both measurements use the same unit.',
        'Click Calculate to find the hypotenuse.',
        'Review the result and the step-by-step solution shown below the calculator.',
        'Verify the answer by checking that a&sup2; + b&sup2; equals c&sup2;.'
      ]
    },
    example: {
      h2: 'Quick Example',
      intro: 'Given a = 6 cm and b = 8 cm, the hypotenuse is 10 cm. See the detailed examples below for full step-by-step solutions.',
      lines: [
        'c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10'
      ]
    },
    extraSections: [
      {
        h2: 'Pythagorean Theorem Examples with Solutions',
        paragraphs: [],
        customHtml: `<article>
<h3>Example 1: The 6-8-10 Triangle</h3>
<p><strong>Problem:</strong> Find the hypotenuse of a right triangle with legs a = 6 cm and b = 8 cm.</p>
<p><strong>Given:</strong> a = 6 cm, b = 8 cm. <strong>Find:</strong> c.</p>
<p><strong>Formula:</strong> c = &radic;(a&sup2; + b&sup2;)</p>
<p><strong>Substitution:</strong> c = &radic;(6&sup2; + 8&sup2;) = &radic;(36 + 64) = &radic;100</p>
<p><strong>Answer:</strong> <strong>c = 10 cm</strong></p>
<p><strong>Verification:</strong> 6&sup2; + 8&sup2; = 36 + 64 = 100 = 10&sup2;.</p>
</article>
<article>
<h3>Example 2: The 5-12-13 Triangle</h3>
<p><strong>Problem:</strong> A right triangle has legs a = 5 m and b = 12 m. Find the hypotenuse.</p>
<p><strong>Given:</strong> a = 5 m, b = 12 m. <strong>Find:</strong> c.</p>
<p><strong>Calculation:</strong> c = &radic;(5&sup2; + 12&sup2;) = &radic;(25 + 144) = &radic;169 = 13 m</p>
<p><strong>Answer:</strong> <strong>c = 13 m</strong></p>
<p><strong>Verification:</strong> 5&sup2; + 12&sup2; = 25 + 144 = 169 = 13&sup2;.</p>
<p>The numbers 5, 12, and 13 form a Pythagorean triple: three positive integers satisfying a&sup2; + b&sup2; = c&sup2;.</p>
</article>
<article>
<h3>Example 3: Rectangular Room Diagonal</h3>
<p><strong>Problem:</strong> A rectangular room measures 9 ft by 12 ft. Find the diagonal distance between opposite corners.</p>
<p><strong>Given:</strong> a = 9 ft, b = 12 ft. <strong>Find:</strong> c (diagonal).</p>
<p><strong>Calculation:</strong> c = &radic;(9&sup2; + 12&sup2;) = &radic;(81 + 144) = &radic;225 = 15 ft</p>
<p><strong>Answer:</strong> <strong>The diagonal is 15 ft.</strong></p>
<p><strong>Why this works:</strong> The diagonal divides the rectangle into two congruent right triangles. The two sides become the legs, and the diagonal becomes the hypotenuse.</p>
<img src="/images/missing-leg/missing-leg-b-room.svg" alt="Room floor plan diagram showing how a diagonal forms the hypotenuse of a right triangle" class="mx-auto mt-4 h-auto w-full max-w-xl rounded-lg" />
<p class="text-sm text-on-surface-variant"><em>Figure: A rectangle's diagonal always forms the hypotenuse of the two right triangles it creates.</em></p>
</article>
<article>
<h3>Example 4: Ladder Against a Wall</h3>
<p><strong>Problem:</strong> A ladder reaches a point 12 ft above the ground. Its base is 5 ft from the wall. Find the ladder length.</p>
<p><strong>Given:</strong> a = 5 ft (ground distance), b = 12 ft (wall height). <strong>Find:</strong> c (ladder).</p>
<p><strong>Calculation:</strong> c = &radic;(5&sup2; + 12&sup2;) = &radic;(25 + 144) = &radic;169 = 13 ft</p>
<p><strong>Answer:</strong> <strong>The ladder length is 13 ft.</strong></p>
<p><strong>Note:</strong> This is an idealized geometric model assuming a perfectly vertical wall and flat ground. It does not establish ladder safety.</p>
</article>
<article>
<h3>Example 5: A Non-Integer Result</h3>
<p><strong>Problem:</strong> Given a = 7 m and b = 9 m, find the hypotenuse.</p>
<p><strong>Calculation:</strong> c = &radic;(7&sup2; + 9&sup2;) = &radic;(49 + 81) = &radic;130 &asymp; 11.401754 m</p>
<p><strong>Answer:</strong> <strong>c &asymp; 11.40 m</strong>, rounded to two decimal places.</p>
<p><strong>Verification:</strong> 7&sup2; + 9&sup2; = 130 = (&radic;130)&sup2;.</p>
<p>The exact result is &radic;130 m. Round only at the final display step; rounding intermediate values introduces errors.</p>
</article>`
      },
      {
        h2: 'Where Is the Pythagorean Theorem Used?',
        paragraphs: [
          'The theorem applies whenever two perpendicular distances combine into one diagonal distance. For each application below, the two perpendicular measurements are the legs a and b, and the diagonal or sloped distance is the hypotenuse c.',
          '<strong>Room and building diagonals.</strong> A rectangular room 9 ft by 12 ft has a 15 ft diagonal (Example 3). Builders use this to check that corners are square: if the measured diagonal matches the calculated one, the corner is a true right angle.',
          '<strong>Ladder length and wall height.</strong> Given the height a ladder must reach and how far its base sits from the wall, the required ladder length follows directly (Example 4).',
          '<strong>Ramp length from rise and run.</strong> A ramp rising 7 m over a 24 m horizontal run has a sloped length of c = &radic;(7&sup2; + 24&sup2;) = &radic;(49 + 576) = &radic;625 = 25 m.',
          '<strong>Screen and rectangular object diagonals.</strong> A 16:9 screen measuring 32 inches wide and 18 inches tall has a diagonal of c = &radic;(32&sup2; + 18&sup2;) = &radic;(1024 + 324) = &radic;1348 &asymp; 36.7 inches.',
          '<strong>Geometry homework and technical drawings.</strong> Any problem giving the two sides around a right angle and asking for the side across from it is a hypotenuse problem.',
          'Real-world measurements include measurement error, so treat results as estimates. Do not use these calculations to certify building-code compliance or engineering safety.'
        ]
      },
      {
        h2: 'What Are Pythagorean Triples?',
        paragraphs: [
          'Pythagorean triples are sets of three positive integers a, b, and c satisfying a&sup2; + b&sup2; = c&sup2;. When a problem uses a triple, the hypotenuse comes out as a whole number with no rounding needed.',
          'Multiplying all three sides of a valid triple by the same positive factor produces another valid right triangle. For example, doubling 3-4-5 gives 6-8-10, and tripling it gives 9-12-15.'
        ],
        listTitle: 'Common Pythagorean triples:',
        listItems: [
          '3, 4, 5',
          '5, 12, 13',
          '8, 15, 17',
          '7, 24, 25',
          '9, 12, 15'
        ]
      },
      {
        h2: 'Input Requirements and Common Checks',
        paragraphs: [
          'Both legs must be positive numbers. Decimals are valid inputs, and the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> keeps enough precision for the step-by-step work to be useful.',
          'The two inputs must use the same unit. If a is in feet and b is in inches, convert one measurement first so the result is meaningful.',
          'The theorem only applies when the included angle is 90&deg;. If your triangle has no right angle, this formula will not give a correct answer.'
        ],
        listTitle: 'Before you calculate, check that:',
        listItems: [
          'a and b are the sides that touch the 90&deg; <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Neither input is zero or negative.',
          'Both values are measured in the same unit.',
          'You are solving for the hypotenuse, not a missing leg.'
        ]
      },
      {
        h2: 'How to Check Your Hypotenuse Calculation',
        paragraphs: [
          'Verify each result before using it. For the 6-8-10 example: 6&sup2; + 8&sup2; = 36 + 64 = 100 = 10&sup2;.',
          'A valid hypotenuse is always longer than either leg but shorter than their sum. If your answer violates either bound, re-check the inputs.'
        ],
        listTitle: 'A quick reasonableness check:',
        listItems: [
          'c should be greater than a.',
          'c should be greater than b.',
          'c should be less than a + b.',
          'a&sup2; + b&sup2; should equal c&sup2;, allowing for floating-point precision and displayed rounding.',
          'For common triples like 3-4-5 or 5-12-13, the result should match the known triple.'
        ]
      },
      {
        h2: 'Common Pythagorean Theorem Mistakes',
        paragraphs: [
          'Most wrong hypotenuse answers come from using the right formula on the wrong sides. The legs must be the two sides that make the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>; the hypotenuse is never an input on this page.',
          'Another common issue is stopping at a&sup2; + b&sup2;. That value is c&sup2;, not c. The square root step is what turns the squared value back into the actual <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> length.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          '<strong>Applying the theorem without a right angle.</strong> The formula only works when the triangle has a 90&deg; angle. Verify this first.',
          '<strong>Confusing a leg with the hypotenuse.</strong> Wrong: entering the diagonal as a or b. Correct: a and b are the sides forming the right angle.',
          '<strong>Adding the sides instead of their squares.</strong> Wrong: c = a + b. Correct: c = &radic;(a&sup2; + b&sup2;).',
          '<strong>Forgetting the square root.</strong> Wrong: c = a&sup2; + b&sup2;. Correct: take the square root of the sum.',
          '<strong>Treating a&sup2; + b&sup2; as the answer.</strong> That sum is c&sup2;, the square of the hypotenuse. Take the square root to get c.',
          '<strong>Mixing incompatible units.</strong> Wrong: a = 6 ft, b = 8 inches. Correct: convert to the same unit first.',
          '<strong>Rounding too early.</strong> Wrong: rounding &radic;130 to 11.4 mid-calculation. Correct: keep full precision until the final answer.'
        ]
      }    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/missing-leg-from-c-and-a-calculator/', label: 'Missing Leg From c and a Calculator' },
      { href: '/missing-leg-from-c-and-b-calculator/', label: 'Missing Leg From c and b Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' }
    ],
    faqs: [
      {
        question: 'What is the Pythagorean theorem?',
        answer:
          'The Pythagorean theorem is a formula that relates the three sides of a right triangle: a\u00b2 + b\u00b2 = c\u00b2. It says that the square of the hypotenuse equals the sum of the squares of the two legs. It only applies to right triangles.'
      },
      {
        question: 'How do I calculate the hypotenuse?',
        answer:
          'Square both legs (a\u00b2 and b\u00b2), add them together, and take the square root of the sum. The formula is c = \u221a(a\u00b2 + b\u00b2). Or just enter your values above and let the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> do it.'
      },
      {
        question: 'Why does the formula use a square root?',
        answer:
          'The theorem gives you c\u00b2, the square of the hypotenuse. Taking the square root converts that squared value back into the actual side length c. Without this step you would have the area-like quantity c\u00b2 instead of the length.'
      },
      {
        question: 'Can the theorem be used for any triangle?',
        answer:
          'No. The Pythagorean theorem only works for right triangles \u2014 triangles with a 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. If your triangle has no right angle, use the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">general triangle calculators</a> instead.'
      },
      {
        question: 'What are Pythagorean triples?',
        answer:
          'Pythagorean triples are sets of three positive integers satisfying a\u00b2 + b\u00b2 = c\u00b2, such as 3-4-5, 5-12-13, and 8-15-17. Problems using triples give whole-number answers with no rounding needed.'
      },
      {
        question: 'Can I use decimal measurements?',
        answer:
          'Yes. Decimals are valid inputs. For example, a = 2.5 and b = 6 gives c = \u221a(6.25 + 36) = \u221a42.25 = 6.5. Keep full precision during calculation and round only the final displayed answer.'
      },
      {
        question: 'How do I calculate a rectangle\u2019s diagonal?',
        answer:
          'A rectangle\u2019s diagonal divides it into two right triangles. Treat the two sides as legs a and b, then apply c = \u221a(a\u00b2 + b\u00b2). For a 9 ft by 12 ft room, the diagonal is \u221a(81 + 144) = 15 ft.'
      },
      {
        question: 'How can I check whether my answer is correct?',
        answer:
          'Verify that a\u00b2 + b\u00b2 = c\u00b2. For 6-8-10: 36 + 64 = 100. Also check that c > a, c > b, and c < a + b. If any check fails, re-examine which sides you entered as legs.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-a-calculator',
    url: '/missing-leg-from-c-and-a-calculator/',
    h1: 'Missing Leg Calculator: Find Leg b from Hypotenuse c and Leg a',
    metaTitle: 'Missing Leg Calculator: Find b from c and a',
    metaDescription:
      'Find the missing leg of a right triangle using the hypotenuse and one known leg. Calculate side b, follow the formula, and check worked examples.',
    formulaSlug: 'leg-from-hypotenuse-and-other-leg',
    toolPurpose:
      'Remember: c is always the hypotenuse \u2014 the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It is not a leg. If you have two legs and need the hypotenuse instead, use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean Theorem</a> Calculator.',
    intro:
      'Find the missing leg b of a right triangle from the hypotenuse c and known leg a. Enter both values to calculate b instantly.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when the hypotenuse and leg a are known, but the other leg is missing. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> rearranges the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> to subtract the known leg from the hypotenuse before taking the square root.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and leg a' },
        { label: 'Finds', value: 'Missing leg b' },
        { label: 'Main formula', value: 'b = sqrt(c^2 - a^2)' },
        { label: 'Required check', value: 'c must be greater than a' }
      ]
    },
    diagram: {
      h2: 'Identify the Hypotenuse and Missing Leg',
      intro:
        'The diagram marks c and a as the values you already know. The vertical leg b is highlighted as the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">missing side</a> that this calculator solves.',
      caption:
        'Right triangle diagram with known hypotenuse c, known leg a, and unknown leg b.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Leg a is the known leg along the base of the right triangle.',
          status: 'known'
        },
        b: {
          label: 'b = find',
          description: 'Leg b is the unknown leg solved by subtracting a^2 from c^2.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the known longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          status: 'known'
        }
      },
      notes: [
        'c must be the hypotenuse, not one of the legs.',
        'If c is less than or equal to a, the inputs do not form a valid right triangle.',
        'The result b uses the same unit as c and a.'
      ]
    },
    calculator: {
      outputLabel: 'Missing leg b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0, placeholder: 'e.g. 13' },
        { key: 'a', label: 'Known leg a', min: 0, placeholder: 'e.g. 5' }
      ]
    },
    formulaSection: {
      h2: 'Formula to Find a Missing Leg',
      paragraphs: [
        'The calculation uses the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>, which relates the squares of the two legs to the square of the hypotenuse. To isolate the missing leg, rearrange the equation step by step.',
        '<strong>Step 1: Start with the Pythagorean theorem.</strong> The squares of the two legs add up to the square of the hypotenuse.',
        '<strong>Step 2: Subtract a² from both sides.</strong> This isolates the square of the missing leg.',
        '<strong>Step 3: Take the positive square root.</strong> Side lengths are positive, so use the principal root. The entire expression c² − a² stays inside the radical.',
        'Where <strong>a</strong> is the known leg, <strong>b</strong> is the missing leg, and <strong>c</strong> is the hypotenuse. The hypotenuse sits opposite the right angle and is always the longest side.',
        '<strong>Why subtract?</strong> The original equation adds both leg squares to get the hypotenuse square. When the hypotenuse and one leg are already known, subtract the known leg’s square from the hypotenuse’s square to isolate the unknown leg’s square. Then take the square root. Never subtract the leg from the hypotenuse directly — always subtract their squares.'
      ],
      formulas: ['a^2 + b^2 = c^2', 'b^2 = c^2 - a^2', 'b = \\sqrt{c^2 - a^2}']
    },
    howTo: {
      h2: 'How to Find Leg b from c and a',
      steps: [
        'Identify the hypotenuse, which lies opposite the 90° angle. It is always the longest side.',
        'Enter the hypotenuse c into the first input field.',
        'Enter the known leg a into the second input field.',
        'Check that both measurements use the same unit.',
        'Click Calculate to find the missing leg b.',
        'Review the result and the step-by-step solution shown below the calculator.',
        'Verify the answer by checking that a² + b² equals c².'
      ]
    },
    example: {
      h2: 'Quick Example',
      intro:
        'A quick preview: with c = 13 and a = 5, the missing leg is b = 12. See the detailed worked examples below for five complete solutions with diagrams.',
      lines: [
        'b = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12'
      ]
    },
    extraSections: [
      {
        h2: 'Detailed Worked Examples',
        paragraphs: [],
        customHtml: `<article class="mb-8">
          <h3>Example 1: Standard 5–12–13 Triangle</h3>
          <p><strong>Problem:</strong> Find the missing leg of a right triangle with hypotenuse c = 13 cm and known leg a = 5 cm.</p>
          <p><strong>Given:</strong> c = 13 cm, a = 5 cm. <strong>Find:</strong> b.</p>
          <p><strong>Formula:</strong> b = √(c² − a²)</p>
          <p><strong>Substitution:</strong> b = √(13² − 5²) = √(169 − 25) = √144</p>
          <p><strong>Answer:</strong> <strong>b = 12 cm</strong></p>
          <p><strong>Verification:</strong> 5² + 12² = 25 + 144 = 169 = 13². The known leg, missing leg, and hypotenuse form a valid right triangle.</p>
        </article>
        <article class="mb-8">
          <h3>Example 2: Ladder Against a Wall</h3>
          <p><strong>Problem:</strong> A 5 m ladder rests against a vertical wall. Its base is 3 m from the wall. Find the height reached by the ladder.</p>
          <p><strong>Given:</strong> c = 5 m (ladder), a = 3 m (ground distance). <strong>Find:</strong> b (wall height).</p>
          <p><strong>Calculation:</strong> b = √(5² − 3²) = √(25 − 9) = √16 = 4 m</p>
          <p><strong>Answer:</strong> <strong>The ladder reaches 4 m up the wall.</strong></p>
          <figure class="my-4">
            <img src="/images/missing-leg/missing-leg-ladder.svg" alt="Ladder diagram: 5 m ladder as hypotenuse, 3 m ground distance as leg a, 4 m wall height as missing leg b" class="mx-auto h-auto w-full max-w-xl rounded-lg" />
            <figcaption class="mt-2 text-center text-sm text-on-surface-variant"><em>Figure: The vertical wall (b = 4 m), horizontal ground distance (a = 3 m), and ladder (c = 5 m). This is a geometric model assuming a vertical wall and level ground, not a ladder-safety assessment.</em></figcaption>
          </figure>
        </article>
        <article class="mb-8">
          <h3>Example 3: Rectangular Room Diagonal</h3>
          <p><strong>Problem:</strong> A rectangular room has a diagonal of 17 ft and one side measuring 8 ft. Find the other side.</p>
          <p><strong>Given:</strong> c = 17 ft (diagonal), a = 8 ft. <strong>Find:</strong> b.</p>
          <p><strong>Calculation:</strong> b = √(17² − 8²) = √(289 − 64) = √225 = 15 ft</p>
          <p><strong>Answer:</strong> <strong>The other side is 15 ft.</strong></p>
          <figure class="my-4">
            <img src="/images/missing-leg/missing-leg-room.svg" alt="Room diagram: 17 ft diagonal as hypotenuse, 8 ft known side as leg a, 15 ft missing side as leg b" class="mx-auto h-auto w-full max-w-xl rounded-lg" />
            <figcaption class="mt-2 text-center text-sm text-on-surface-variant"><em>Figure: Top-down view. The diagonal (c = 17 ft) divides the rectangle into two right triangles. The known side (a = 8 ft) and missing side (b = 15 ft) form the right angle.</em></figcaption>
          </figure>
        </article>
        <article class="mb-8">
          <h3>Example 4: A Result That Requires Rounding</h3>
          <p><strong>Problem:</strong> Given c = 10 m and a = 7 m, find b.</p>
          <p><strong>Calculation:</strong> b = √(10² − 7²) = √(100 − 49) = √51 ≈ 7.141428 m</p>
          <p><strong>Answer:</strong> <strong>b ≈ 7.14 m</strong>, rounded to two decimal places.</p>
          <p><strong>Verification:</strong> 7² + (√51)² = 49 + 51 = 100 = 10².</p>
          <p>Keep the exact value (√51) during intermediate calculations and round only at the final step. Rounding early introduces errors that compound in multi-step problems.</p>
        </article>
        <article>
          <h3>Example 5: Ramp Geometry</h3>
          <p><strong>Problem:</strong> A straight ramp has a length of 13 m and a horizontal run of 12 m. Find its vertical rise.</p>
          <p><strong>Given:</strong> c = 13 m (ramp), a = 12 m (run). <strong>Find:</strong> b (rise).</p>
          <p><strong>Calculation:</strong> b = √(13² − 12²) = √(169 − 144) = √25 = 5 m</p>
          <p><strong>Answer:</strong> <strong>The vertical rise is 5 m.</strong></p>
          <figure class="my-4">
            <img src="/images/missing-leg/missing-leg-ramp.svg" alt="Ramp diagram: 13 m ramp as hypotenuse, 12 m horizontal run as leg a, 5 m vertical rise as missing leg b" class="mx-auto h-auto w-full max-w-xl rounded-lg" />
            <figcaption class="mt-2 text-center text-sm text-on-surface-variant"><em>Figure: The ramp (c = 13 m) as hypotenuse, horizontal run (a = 12 m), and vertical rise (b = 5 m). This calculation does not establish compliance with accessibility or building regulations.</em></figcaption>
          </figure>
        </article>`,
      },
      {
        h2: 'When Can You Calculate a Missing Leg?',
        paragraphs: [
          'For a valid non-degenerate right triangle, the measurements must satisfy three conditions: c > 0, a > 0, and c > a. The missing leg is then b = √(c² − a²).',
          '<strong>Case 1: Hypotenuse smaller than the known leg.</strong> If c = 4 and a = 5, then b = √(16 − 25) = √(−9). The expression under the square root is negative, so these inputs cannot form a real right triangle with c as the hypotenuse.',
          '<strong>Case 2: Hypotenuse equal to the known leg.</strong> If c = 5 and a = 5, then b = √(25 − 25) = 0. This is a degenerate case, not a valid triangle.',
          '<strong>Case 3: Zero or negative measurements.</strong> Side lengths must be positive. The calculator rejects zero and negative inputs.',
          '<strong>Case 4: Inconsistent units.</strong> Both measurements must use the same unit. If c is in meters and a is in centimeters, convert one before calculating.'
        ],
        listTitle: 'Use these checks first:',
        listItems: [
          'c is opposite the 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'c is greater than a.',
          'Both values are positive.',
          'c and a use the same unit.'
        ]
      },
      {
        h2: 'Where Is the Missing Leg Formula Used?',
        paragraphs: [
          'The general pattern: when a straight-line diagonal or sloped length and one perpendicular distance are known, the other perpendicular distance follows from the Pythagorean theorem. This works only when the geometry forms a right triangle.',
          '<strong>Construction and framing.</strong> Carpenters check square corners by measuring the diagonal of a rectangular frame. If the diagonal (c) and one side (a) are known, the missing side (b) confirms the layout before cutting lumber.',
          '<strong>Room and floor-plan measurements.</strong> When planning furniture or flooring, the diagonal of a room and one wall length give the other wall length without moving obstacles.',
          '<strong>Ladder and wall geometry.</strong> Given a ladder length and its distance from the wall, the height it reaches follows directly. This is a geometric model, not a safety assessment.',
          '<strong>Ramp and slope calculations.</strong> From the slope length and horizontal run, the vertical rise is determined. This does not establish code compliance.'
        ]
      },
      {
        h2: 'How to Check Your Missing Leg Calculation',
        paragraphs: [
          'Verify every result before using it. For the 5–12–13 example: 5² + 12² = 25 + 144 = 169 = 13².',
          'The output labeled Missing leg b is the length of the other leg that forms the right angle with a. It is not the hypotenuse and should be shorter than c.'
        ],
        listTitle: 'A valid result must satisfy:',
        listItems: [
          'b is greater than zero.',
          'b is shorter than c.',
          'a² + b² equals c², allowing for rounding in the displayed value.',
          'The result uses the correct unit.'
        ]
      },
      {
        h2: 'Common Mistakes When Finding a Missing Leg',
        paragraphs: [
          'The most common error is treating c as a leg. Here c must be the hypotenuse: the longest side, opposite the right angle.',
          'Another frequent mistake is adding the squares instead of subtracting. Addition (a² + b²) finds a hypotenuse; subtraction (c² − a²) finds a missing leg from the hypotenuse.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          '<strong>Confusing the hypotenuse with a leg.</strong> If you put the leg value in the c field, the formula solves the wrong problem. Correct: c is always the longest side.',
          '<strong>Adding squares instead of subtracting.</strong> Wrong: b = √(c² + a²). Correct: b = √(c² − a²).',
          '<strong>Forgetting the square root.</strong> Wrong: b = c² − a². Correct: take the square root of the difference.',
          '<strong>Wrong square-root grouping.</strong> Wrong: √c² − a² (which equals c − a). Correct: √(c² − a²), with the entire difference inside the radical.',
          '<strong>Entering a ≥ c.</strong> The known leg cannot equal or exceed the hypotenuse. Correct: verify c > a before calculating.',
          '<strong>Mixing units.</strong> Wrong: c = 5 m, a = 30 cm. Correct: convert to the same unit first (c = 500 cm, a = 30 cm).',
          '<strong>Rounding too early.</strong> Wrong: rounding √51 to 7.14 mid-calculation. Correct: keep full precision until the final answer.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' }
    ],
    faqs: [
      {
        question: 'How do I find the missing leg from the hypotenuse and one leg?',
        answer:
          'Square the hypotenuse (c²), square the known leg (a²), subtract, and take the square root: b = √(c² − a²). Enter both values in the calculator above for an instant result with steps.'
      },
      {
        question: 'Why do I subtract instead of add?',
        answer:
          'The Pythagorean theorem adds the leg squares to get the hypotenuse square (a² + b² = c²). When you already know the hypotenuse, rearrange: subtract the known leg square from the hypotenuse square to isolate the missing leg square, then take the root.'
      },
      {
        question: 'How do I know which side is the hypotenuse?',
        answer:
          'The hypotenuse is always the longest side and sits opposite the 90° angle. If your three measurements are 5, 12, and 13, the hypotenuse is 13.'
      },
      {
        question: 'What happens if the known leg is equal to or longer than the hypotenuse?',
        answer:
          'If a = c, the result is b = 0 (degenerate, not a triangle). If a > c, the square root of a negative number has no real solution. Both cases are rejected as invalid.'
      },
      {
        question: 'Can the missing leg be a decimal?',
        answer:
          'Yes. For example, c = 10 and a = 7 gives b = √51 ≈ 7.14. Keep full precision during calculations and round only the final answer.'
      },
      {
        question: 'How can I check whether the answer is correct?',
        answer:
          'Verify that a² + b² = c². For the 5–12–13 example: 25 + 144 = 169. Also confirm b > 0, b < c, and the unit matches your inputs.'
      },
      {
        question: 'Can I use different measurement units?',
        answer:
          'Both inputs must use the same unit. If c is in meters and a is in centimeters, convert one first. The result uses the input unit.'
      },
      {
        question: 'Can this calculator also find an unknown angle?',
        answer:
          'No, this mode finds only the missing leg b. To find angles, use the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">Right Triangle Angle Calculator</a>.'
      }
    ]
  },
  {
    slug: 'missing-leg-from-c-and-b-calculator',
    url: '/missing-leg-from-c-and-b-calculator/',
    h1: 'Missing Leg Calculator: Find Leg a from Hypotenuse c and Leg b',
    metaTitle: 'Missing Leg Calculator: Find a from c and b',
    metaDescription:
      'Find missing leg a when hypotenuse c and leg b are known. Use the Pythagorean theorem, follow worked examples, and verify your right triangle calculation.',
    formulaSlug: 'other-leg-from-hypotenuse-and-leg',
    toolPurpose:
      'Keep in mind: c is the hypotenuse, not a leg. It\u2019s the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the triangle and sits opposite the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. If you have both legs and need the hypotenuse, use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean Theorem</a> Calculator instead.',
    intro:
      'Find the missing leg a of a right triangle from the hypotenuse c and known leg b. Enter both values to calculate a instantly.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when you know the hypotenuse and leg b, but need leg a. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> rearranges the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> to subtract the square of the known leg from the square of the hypotenuse, then takes the square root. It keeps the known <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b separate from the unknown side a so the formula and result match the labels on your triangle.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and leg b' },
        { label: 'Finds', value: 'Missing leg a' },
        { label: 'Main formula', value: 'a = sqrt(c^2 - b^2)' },
        { label: 'Required check', value: 'c must be greater than b' }
      ]
    },
    diagram: {
      h2: 'Identify the Hypotenuse and Missing Leg',
      intro:
        'The diagram shows c as the known hypotenuse and b as the known leg. The base leg a is highlighted as the missing value returned by the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
      caption:
        'Right triangle diagram with known hypotenuse c, known leg b, and unknown leg a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Leg a is the unknown base leg solved from c and b.',
          status: 'unknown'
        },
        b: {
          label: 'b = known',
          description: 'Leg b is the known leg that forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> with a.',
          status: 'known'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the known longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right triangle.',
          status: 'known'
        }
      },
      notes: [
        'The hypotenuse c must be the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in the input pair.',
        'If c is less than or equal to b, re-check which value is the hypotenuse.',
        'The calculated a has the same unit as the values you entered.'
      ]
    },
    calculator: {
      outputLabel: 'Missing leg a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0, placeholder: 'e.g. 10' },
        { key: 'b', label: 'Known leg b', min: 0, placeholder: 'e.g. 6' }
      ]
    },
    formulaSection: {
      h2: 'Formula to Find Leg a from c and b',
      paragraphs: [
        'The calculation uses the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>, which relates the squares of the two legs to the square of the hypotenuse. To isolate the missing leg, rearrange the equation step by step.',
        '<strong>Step 1: Start with the Pythagorean theorem.</strong> The squares of the two legs add up to the square of the hypotenuse.',
        '<strong>Step 2: Subtract b\u00b2 from both sides.</strong> This isolates the square of the missing leg.',
        '<strong>Step 3: Take the positive square root.</strong> Side lengths are positive, so use the principal root. The entire expression c\u00b2 \u2212 b\u00b2 stays inside the radical.',
        'Where <strong>a</strong> is the missing leg, <strong>b</strong> is the known leg, and <strong>c</strong> is the hypotenuse. The hypotenuse is opposite the right angle and is always the longest side.',
        '<strong>Why subtract?</strong> The original equation adds the squares of both legs to make the square of the hypotenuse. When the hypotenuse and one leg are already known, subtract the square of the known leg from the square of the hypotenuse to isolate the square of the unknown leg. Then take the positive square root. Never subtract the leg from the hypotenuse directly, always subtract their squares.'
      ],
      formulas: ['a^2 + b^2 = c^2', 'a^2 = c^2 - b^2', 'a = \\sqrt{c^2 - b^2}']
    },
    howTo: {
      h2: 'How to Find Leg a from c and b',
      steps: [
        'Identify the hypotenuse, which sits opposite the 90\u00b0 angle. It is always the longest side.',
        'Enter the hypotenuse c in the first input field.',
        'Enter the known leg b in the second input field.',
        'Check that both measurements use the same unit.',
        'Click Calculate to find the missing leg a.',
        'Review the result and the step-by-step solution shown below the calculator.',
        'Verify the answer by checking that a\u00b2 + b\u00b2 equals c\u00b2.'
      ]
    },
    example: {
      h2: 'Example: Find Leg a',
      intro:
        'Given: c = 10, b = 6. The missing leg of a right triangle with hypotenuse 10 and leg 6 is 8.',
      lines: [
        'a = \\sqrt{10^2 - 6^2}',
        'a = \\sqrt{100 - 36}',
        'a = \\sqrt{64}',
        'a = 8'
      ]
    },
    extraSections: [
      {
        h2: 'Missing Leg Examples with Step-by-Step Solutions',
        paragraphs: [],
        customHtml: `<article>
<h3>Example 1: Standard 6-8-10 Triangle</h3>
<p><strong>Problem:</strong> Find the missing leg of a right triangle with hypotenuse c = 10 cm and known leg b = 6 cm.</p>
<p><strong>Given:</strong> c = 10 cm, b = 6 cm. <strong>Find:</strong> a.</p>
<p><strong>Formula:</strong> a = &radic;(c&sup2; &minus; b&sup2;)</p>
<p><strong>Substitution:</strong> a = &radic;(10&sup2; &minus; 6&sup2;) = &radic;(100 &minus; 36) = &radic;64</p>
<p><strong>Answer:</strong> <strong>a = 8 cm</strong></p>
<p><strong>Verification:</strong> 8&sup2; + 6&sup2; = 64 + 36 = 100 = 10&sup2;. The known leg, missing leg, and hypotenuse form a valid right triangle.</p>
</article>
<article>
<h3>Example 2: Find the Missing Leg in a 5-12-13 Triangle</h3>
<p><strong>Problem:</strong> A right triangle has hypotenuse c = 13 m and known leg b = 5 m. Find the missing leg.</p>
<p><strong>Given:</strong> c = 13 m, b = 5 m. <strong>Find:</strong> a.</p>
<p><strong>Calculation:</strong> a = &radic;(13&sup2; &minus; 5&sup2;) = &radic;(169 &minus; 25) = &radic;144 = 12 m</p>
<p><strong>Answer:</strong> <strong>a = 12 m</strong></p>
<p><strong>Verification:</strong> 12&sup2; + 5&sup2; = 144 + 25 = 169 = 13&sup2;.</p>
</article>
<article>
<h3>Example 3: Rectangular Room Diagonal</h3>
<p><strong>Problem:</strong> A rectangular room has a diagonal of 17 ft and one side measuring 15 ft. Find the other side.</p>
<p><strong>Given:</strong> c = 17 ft (diagonal), b = 15 ft. <strong>Find:</strong> a.</p>
<p><strong>Calculation:</strong> a = &radic;(17&sup2; &minus; 15&sup2;) = &radic;(289 &minus; 225) = &radic;64 = 8 ft</p>
<p><strong>Answer:</strong> <strong>The missing room dimension is 8 ft.</strong></p>
<img src="/images/missing-leg/missing-leg-b-room.svg" alt="Room floor plan diagram: 17 ft diagonal as hypotenuse, 15 ft known side as leg b, 8 ft missing side as leg a" class="mx-auto mt-4 h-auto w-full max-w-xl rounded-lg" />
<p class="text-sm text-on-surface-variant"><em>Figure: Top-down view. The diagonal (c = 17 ft) splits the rectangle into two right triangles. The known side (b = 15 ft) and the missing side (a = 8 ft) form the right angle.</em></p>
<p><strong>Why this works:</strong> A rectangle's diagonal divides it into two congruent right triangles. The diagonal becomes the hypotenuse, and the two sides become the legs. This is why the same formula that solves abstract triangles also solves room layouts, floor tiles, and screen dimensions.</p>
</article>
<article>
<h3>Example 4: A Decimal Result</h3>
<p><strong>Problem:</strong> Given c = 10 m and b = 7 m, find a.</p>
<p><strong>Calculation:</strong> a = &radic;(10&sup2; &minus; 7&sup2;) = &radic;(100 &minus; 49) = &radic;51 &asymp; 7.141428 m</p>
<p><strong>Answer:</strong> <strong>a &asymp; 7.14 m</strong>, rounded to two decimal places.</p>
<p><strong>Verification:</strong> 7&sup2; + (&radic;51)&sup2; = 49 + 51 = 100 = 10&sup2;.</p>
<p>Keep the exact value (&radic;51) during intermediate calculations and round only at the final step. Rounding too early introduces errors that compound in multi-step problems.</p>
</article>`
      },
      {
        h2: 'Where Is the Missing Leg Formula Used?',
        paragraphs: [
          'The general pattern: when a straight-line diagonal or slope length and one perpendicular distance are known, the other perpendicular distance follows from the Pythagorean theorem. This only works when the geometry forms a right triangle.',
          '<strong>Ramp geometry.</strong> A straight ramp is 25 m long and rises 7 m vertically. The horizontal run is the missing leg: a = &radic;(25&sup2; &minus; 7&sup2;) = &radic;(625 &minus; 49) = &radic;576 = 24 m. Here the ramp itself is the hypotenuse because it is the longest side, sloping from ground to platform. The vertical rise is the known leg b, and the ground distance you need is the missing leg a.<img src="/images/missing-leg/missing-leg-b-ramp.svg" alt="Ramp diagram: 25 m ramp as hypotenuse, 7 m vertical rise as leg b, 24 m horizontal run as missing leg a" class="mx-auto mt-4 h-auto w-full max-w-xl rounded-lg" /><p class="text-sm text-on-surface-variant"><em>Figure: The ramp (c = 25 m) as hypotenuse, the vertical rise (b = 7 m), and the horizontal run (a = 24 m). This is a geometric model, not a building-code compliance check.</em></p>This is a geometric calculation, not a determination of building-code or accessibility compliance.',
          '<strong>Roof slope.</strong> A roof cross-section forms a right triangle: the sloped surface is the hypotenuse (13 ft), the vertical rise from eave to ridge is the known leg (5 ft), and the horizontal distance the roof covers is the missing leg. Calculate: a = &radic;(13&sup2; &minus; 5&sup2;) = &radic;(169 &minus; 25) = &radic;144 = 12 ft. Roofers use this to find the horizontal span a roof covers, which determines rafter spacing and material estimates.<img src="/images/missing-leg/missing-leg-b-roof.svg" alt="Roof cross-section diagram: 13 ft slope as hypotenuse, 5 ft vertical rise as leg b, 12 ft horizontal run as missing leg a" class="mx-auto mt-4 h-auto w-full max-w-xl rounded-lg" /><p class="text-sm text-on-surface-variant"><em>Figure: The roof slope (c = 13 ft) as hypotenuse, the vertical rise (b = 5 ft), and the horizontal run (a = 12 ft).</em></p>',
          '<strong>Floor plan measurements.</strong> When planning furniture or flooring, a room diagonal and one wall length give the other wall length without moving obstacles, as shown in Example 3 above.',
          '<strong>Construction and layout.</strong> The formula helps estimate a perpendicular distance when the straight-line diagonal and one perpendicular dimension are known. Field measurements and real-world geometry may include measurement error, so treat results as estimates rather than exact engineering values.'
        ]
      },
      {
        h2: 'Conditions for a Valid Missing Leg Calculation',
        paragraphs: [
          'For a valid non-degenerate right triangle, the measurements must satisfy: c > b > 0. The missing leg is then a = &radic;(c&sup2; &minus; b&sup2;).',
          '<strong>Case 1: c > b > 0.</strong> The expression under the square root is positive and a valid missing leg can be calculated.',
          '<strong>Case 2: c = b.</strong> The result is a = 0, which describes a degenerate case rather than a valid triangle.',
          '<strong>Case 3: c < b.</strong> The expression c&sup2; &minus; b&sup2; is negative. These inputs cannot describe a right triangle with c as the hypotenuse.',
          '<strong>Case 4: Zero or negative measurements.</strong> Side lengths must be positive. The calculator rejects zero and negative values.',
          '<strong>Case 5: Incompatible units.</strong> Both measurements must use the same unit. If c is in meters and b is in centimeters, convert one of them before calculating.'
        ],
        listTitle: 'Use these checks first:',
        listItems: [
          'c is the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'c is greater than b.',
          'Both inputs are positive numbers.',
          'c and b use the same measurement unit.'
        ]
      },
      {
        h2: 'Check Your Missing Leg Calculation',
        paragraphs: [
          'Verify each result before using it. For the 6-8-10 example: 8&sup2; + 6&sup2; = 64 + 36 = 100 = 10&sup2;. For the decimal example: 7&sup2; + (&radic;51)&sup2; = 49 + 51 = 100 = 10&sup2;, confirming the exact form before rounding.',
          'The result labeled "Missing leg a" is the length of the other side forming the right angle with b. It is not the hypotenuse and should be shorter than c. If your answer comes out longer than c, you have swapped the hypotenuse with a leg.'
        ],
        listTitle: 'A valid result should satisfy:',
        listItems: [
          'a is greater than zero.',
          'a is less than c.',
          'a&sup2; + b&sup2; is approximately equal to c&sup2;, allowing for floating-point precision.',
          'The output unit matches the unit used for c and b.'
        ]
      },
      {
        h2: 'Common Mistakes When Finding Leg a',
        paragraphs: [
          'The most common error is treating c as a leg. Here, c must be the hypotenuse: the longest side, opposite the right angle.',
          'Another frequent mistake is adding the squares instead of subtracting. Addition (b&sup2; + a&sup2;) finds a hypotenuse; subtraction (c&sup2; &minus; b&sup2;) finds a missing leg from the hypotenuse.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          '<strong>Confusing the hypotenuse with a leg.</strong> Wrong: putting the leg value in the c field. Correct: c is always the longest side.',
          '<strong>Adding squares instead of subtracting.</strong> Wrong: a = &radic;(c&sup2; + b&sup2;). Correct: a = &radic;(c&sup2; &minus; b&sup2;).',
          '<strong>Forgetting the square root.</strong> Wrong: a = c&sup2; &minus; b&sup2;. Correct: take the square root of the difference.',
          '<strong>Wrong grouping under the square root.</strong> Wrong: &radic;c&sup2; &minus; b&sup2; (which equals c &minus; b). Correct: &radic;(c&sup2; &minus; b&sup2;), with the entire difference inside the radical.',
          '<strong>Entering b greater than or equal to c.</strong> The known leg cannot equal or exceed the hypotenuse. Correct: verify c > b before calculating.',
          '<strong>Mixing units.</strong> Wrong: c = 10 m, b = 60 cm. Correct: convert to the same unit first (c = 1000 cm, b = 60 cm).',
          '<strong>Rounding too early.</strong> Wrong: rounding &radic;51 to 7.14 mid-calculation. Correct: keep full precision until the final answer.'
        ]
      }    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      { href: '/right-triangle-angle-calculator/', label: 'Right Triangle Angle Calculator' },
      { href: '/right-triangle-measurements-calculator/', label: 'Right Triangle Measurements Calculator' },
      { href: '/missing-leg-from-c-and-a-calculator/', label: 'Missing Leg From c and a Calculator' }
    ],
    faqs: [
      {
        question: 'What does c mean in this calculator?',
        answer:
          'c is the hypotenuse \u2014 the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right triangle, opposite the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. In this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>, you enter c as one of your two known values.'
      },
      {
        question: 'What does b mean in this calculator?',
        answer:
          'b is one of the two legs of the right triangle. It\u2019s a <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> that forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Here, b is the leg you already know, and the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> uses it along with c to find the missing leg a.'
      },
      {
        question: 'How do I calculate a from c and b?',
        answer:
          'Square the hypotenuse (c\u00b2), square the known leg (b\u00b2), subtract b\u00b2 from c\u00b2, and take the square root of the result. The formula is a = \u221a(c\u00b2 \u2212 b\u00b2). You can also just enter your values into this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to get the answer automatically.'
      },
      {
        question: 'Why must c be greater than b?',
        answer:
          'The hypotenuse is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle. If c were smaller than b, then b would be the longest side, contradicting the definition. The calculator rejects such inputs as invalid.'
      },
      {
        question: 'What happens if c equals b?',
        answer:
          'If c = b, the formula gives a = \u221a(c\u00b2 \u2212 c\u00b2) = 0. This is a degenerate case, not a valid triangle. The calculator treats it as invalid input.'
      },
      {
        question: 'Can the missing leg be a decimal?',
        answer:
          'Yes. For example, c = 10 and b = 7 give a = \u221a51 \u2248 7.14. Keep full precision during calculations and round only the final answer.'
      },
      {
        question: 'How can I check whether my answer is correct?',
        answer:
          'Verify that a\u00b2 + b\u00b2 = c\u00b2. For the 6-8-10 example: 64 + 36 = 100. Also check that a > 0, a < c, and the unit matches your inputs.'
      },
      {
        question: 'Can this calculator find an unknown angle?',
        answer:
          'No, this calculator only finds the missing leg a. To find angles, use the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">Right Triangle Angle Calculator</a>.'
      }
    ]
  },
  {
    slug: 'right-triangle-side-from-sine-calculator',
    url: '/right-triangle-side-from-sine-calculator/',
    h1: 'Right Triangle Side From Sine Calculator',
    metaTitle: 'Right Triangle Side From Sine Calculator | Find a = c \u00d7 sin(A)',
    metaDescription: 'Use this right triangle side from sine calculator to find opposite side a from angle A and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'a-c-sin',
    toolPurpose:
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is built for one job: finding opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a when you already know an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and the hypotenuse. Enter your two values and the result appears instantly with step-by-step work.',
    intro: 'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and hypotenuse c.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This page focuses on finding the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> from an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and hypotenuse pair. The <a href="/sine-ratio-calculator/" class="text-primary hover:underline">sine function</a> connects these three values directly, so no extra steps or rearranging are needed.',
      cards: [
        { label: 'Known values', value: 'Angle A and hypotenuse c' },
        { label: 'Finds', value: 'Opposite side a' },
        { label: 'Main formula', value: 'a = c \u00d7 sin(A)' },
        { label: 'Best for', value: 'Finding height, rise, or vertical reach from a slope angle' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side a from Sine',
      intro:
        'In this diagram, <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A sits at the bottom-right corner. The <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> directly across from angle A is the opposite side a, which is the value this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds. Side c, the hypotenuse, is the longest side and runs from angle A up to the top vertex.',
      caption:
        'Right triangle showing <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, known hypotenuse c, and unknown opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is the unknown value.',
          status: 'unknown'
        },
        b: {
          label: 'b',
          description: 'Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b sits along the base next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It is not used in this calculation.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the 90-degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. You enter this value.',
          status: 'known'
        }
      },
      notes: [
        'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'The hypotenuse is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle.',
        'The result a will always be shorter than c.'
      ]
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Sine Formula',
      paragraphs: [
        'The sine of an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in a right triangle equals the length of the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the hypotenuse. Written as a ratio: sin(A) = a / c. Rearranging this gives the formula used by the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
        'In this formula, c is the hypotenuse (the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>), A is the acute angle you know, and a is the opposite side you want to find. The <a href="/sine-ratio-calculator/" class="text-primary hover:underline">sine function</a> handles the conversion from angle to side ratio automatically.'
      ],
      formulas: ['a = c \\times \\sin(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the hypotenuse c in your triangle. It is always the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the 90-degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and the longest side.',
        'Identify your known acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. Make sure it is measured in degrees.',
        'Enter the hypotenuse c into the first input field.',
        'Enter <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A into the second input field.',
        'Click Calculate to find the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a with step-by-step work.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Opposite Side a',
      intro: 'Given: A = 36.87 degrees, c = 5. Find opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a using the sine formula.',
      lines: [
        'a = c \\times \\sin(A)',
        'a = 5 \\times \\sin(36.87)',
        'a = 5 \\times 0.6',
        'a = 3'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is the length of the side that sits directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. In practical terms, this is often the vertical height or rise in a slope problem.',
          'The result will always be a positive number smaller than the hypotenuse. If a equals c, the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> would be 90 degrees, which means the triangle has collapsed into a straight line. If a is very small, the angle is close to zero.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'Use this tool whenever you have the hypotenuse and an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and need the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. This comes up more often than you might expect.',
          'It is the right choice when the sloped distance is known (like a rope, ramp, or ladder length) and you need the vertical component.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the height a ladder reaches on a wall when you know the ladder length and lean <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Calculating the vertical rise of a ramp from the ramp length and incline <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Determining the <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> of a kite or drone from the string length and elevation <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Solving physics problems where a force vector is broken into a vertical component.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Most errors happen when the wrong <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is identified as the hypotenuse or when the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is entered in the wrong unit. A few minutes of checking your triangle setup can save a wrong answer.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the hypotenuse as your known side.',
          'Using cosine instead of sine. Cosine finds the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, not the opposite.',
          'Entering <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in radians when the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> expects degrees.',
          'Forgetting that c is always the hypotenuse, not <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a or side b.',
          'Expecting a result larger than c. The opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is always shorter than the hypotenuse.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-sine-calculator/', label: 'Right Triangle Angle From Sine Calculator' },
      { href: '/sine-ratio-calculator/', label: 'Sine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does a = c \u00d7 sin(A) calculate?',
        answer:
          'It calculates the length of the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a in a right triangle. You need the hypotenuse c and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A to use this formula.'
      },
      {
        question: 'Why do I use sine instead of cosine here?',
        answer:
          'Sine relates the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> to the hypotenuse. Cosine relates the adjacent side to the hypotenuse. Since this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the opposite side, sine is the correct function.'
      },
      {
        question: 'Can the result be larger than the hypotenuse?',
        answer:
          'No. The opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is always shorter than the hypotenuse in a right triangle. If your result is larger, one of the inputs is wrong.'
      },
      {
        question: 'What if my angle is exactly 90 degrees?',
        answer:
          'A 90-degree input is not valid here. In a right triangle, the two acute angles must each be between 0 and 90 degrees. The 90-degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is already fixed at the right angle vertex.'
      },
      {
        question: 'Does the angle need to be in degrees?',
        answer:
          'Yes. This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> expects <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A in degrees. If your angle is in radians, convert it to degrees first by multiplying by 180 and dividing by pi.'
      }
    ]
  },
  {
    slug: 'right-triangle-side-from-cosine-calculator',
    url: '/right-triangle-side-from-cosine-calculator/',
    h1: 'Right Triangle Side From Cosine Calculator',
    metaTitle: 'Right Triangle Side From Cosine Calculator | Find b = c \u00d7 cos(A)',
    metaDescription: 'Use this right triangle side from cosine calculator to find adjacent side b from angle A and hypotenuse c with formula, steps, and examples.',
    formulaSlug: 'b-c-cos',
    toolPurpose:
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> solves for the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b when you already have <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and the hypotenuse c. It handles the cosine computation and shows the full solution path so you can follow or verify each step.',
    intro: 'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and hypotenuse c.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> takes <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and hypotenuse c as inputs and returns the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b. Cosine is the ratio that links these three values, so the formula needs no rearranging.',
      cards: [
        { label: 'Known values', value: 'Angle A and hypotenuse c' },
        { label: 'Finds', value: 'Adjacent side b' },
        { label: 'Main formula', value: 'b = c \u00d7 cos(A)' },
        { label: 'Best for', value: 'Finding horizontal run, base distance, or ground projection' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side b from Cosine',
      intro:
        'In this layout, <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is at the bottom-right. The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b runs along the base, sitting right next to angle A. The hypotenuse c stretches from angle A up to the top vertex. The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> uses these two known values to find b.',
      caption:
        'Right triangle showing <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, known hypotenuse c, and unknown adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b.',
      sides: {
        a: {
          label: 'a',
          description: 'Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It is not needed for this calculation.',
          status: 'unknown'
        },
        b: {
          label: 'b = find',
          description: 'Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b runs along the base next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is the value the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> returns.',
          status: 'unknown'
        },
        c: {
          label: 'c = known',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. You provide this as input.',
          status: 'known'
        }
      },
      notes: [
        'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is always the side that touches <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and the right angle.',
        'The result b will always be shorter than c.'
      ]
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Cosine Formula',
      paragraphs: [
        'The cosine of an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in a right triangle equals the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the hypotenuse. Written as a ratio: cos(A) = b / c. Multiplying both sides by c gives the direct formula below.',
        'Here, c is the hypotenuse (the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the 90-degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>), A is the acute angle, and b is the adjacent side you want. The <a href="/cosine-ratio-calculator/" class="text-primary hover:underline">cosine function</a> converts the angle into the exact fraction of the hypotenuse that equals the adjacent side.'
      ],
      formulas: ['b = c \\times \\cos(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Find the hypotenuse c in your right triangle. It is the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> across from the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and always the longest side.',
        'Identify your known acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. Confirm the value is in degrees.',
        'Type the hypotenuse c into the first field.',
        'Type <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A into the second field.',
        'Press Calculate to see the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and the step-by-step solution.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Adjacent Side b',
      intro: 'Given: A = 36.87 degrees, c = 5. Find adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b using the cosine formula.',
      lines: [
        'b = c \\times \\cos(A)',
        'b = 5 \\times \\cos(36.87)',
        'b = 5 \\times 0.8',
        'b = 4'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b is the side that sits next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and also touches the right angle. In real-world problems, this is often the horizontal distance, ground run, or base measurement.',
          'Like the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, the adjacent side is always shorter than the hypotenuse. If the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is small, b will be close to c. If the angle is large (near 90 degrees), b shrinks toward zero.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'Choose this tool when you have the hypotenuse and an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and need the horizontal or base component. This pattern appears in slope calculations, shadow problems, and structural layout tasks.',
          'It pairs naturally with the sine <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>. Together, they let you split the hypotenuse into its opposite and adjacent components from the same <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the horizontal distance a ladder covers on the ground from ladder length and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Calculating the ground run of a ramp when the ramp length and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> are known.',
          'Determining the shadow length cast by a pole when the sun <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and pole-to-tip distance are given.',
          'Breaking a force vector into its horizontal component in physics problems.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The most frequent error is mixing up which trig function to use. Sine and cosine both use the hypotenuse, but they return different sides. Cosine gives the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, sine gives the opposite.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using sine instead of cosine. Sine returns the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, not the adjacent.',
          'Entering the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> instead of the hypotenuse.',
          'Confusing <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b with side a. Side b is adjacent to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, side a is opposite.',
          'Forgetting that c is the hypotenuse and never <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a or side b.',
          'Using an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in radians when the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> expects degrees.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-cosine-calculator/', label: 'Right Triangle Angle From Cosine Calculator' },
      { href: '/cosine-ratio-calculator/', label: 'Cosine Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does b = c \u00d7 cos(A) calculate?',
        answer:
          'It calculates the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b of a right triangle when you know the hypotenuse c and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. The <a href="/cosine-ratio-calculator/" class="text-primary hover:underline">cosine function</a> converts the angle into the correct ratio.'
      },
      {
        question: 'How is this different from the sine calculator?',
        answer:
          'The sine <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a. This cosine calculator finds the adjacent side b. Both use the hypotenuse, but they return different sides of the triangle.'
      },
      {
        question: 'What does adjacent side mean?',
        answer:
          'The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is the side that touches the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> you are using and also touches the right angle. For angle A, the adjacent side is b.'
      },
      {
        question: 'Can b be larger than the hypotenuse?',
        answer:
          'No. In a right triangle, both non-hypotenuse sides are always shorter than the hypotenuse. If your result is larger than c, check your inputs.'
      },
      {
        question: 'What happens if I enter a very small angle?',
        answer:
          'As <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A gets closer to 0 degrees, cos(A) approaches 1, so b gets closer to c. The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is nearly the full length of the hypotenuse at very small angles.'
      }
    ]
  },
  {
    slug: 'right-triangle-side-from-tangent-calculator',
    url: '/right-triangle-side-from-tangent-calculator/',
    h1: 'Right Triangle Side From Tangent Calculator',
    metaTitle: 'Right Triangle Side From Tangent Calculator | Find a = b \u00d7 tan(A)',
    metaDescription: 'Use this right triangle side from tangent calculator to find opposite side a from angle A and adjacent side b with formula, steps, and examples.',
    formulaSlug: 'a-b-tan',
    toolPurpose:
      'This tool finds the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a when you know the adjacent side b and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It uses the <a href="/tangent-ratio-calculator/" class="text-primary hover:underline">tangent ratio</a>, which links the opposite and adjacent sides directly without needing the hypotenuse.',
    intro: 'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and adjacent side b.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Unlike sine and cosine, the <a href="/tangent-ratio-calculator/" class="text-primary hover:underline">tangent ratio</a> works with sides a and b instead of involving the hypotenuse. This makes it ideal when the hypotenuse is unknown or not needed.',
      cards: [
        { label: 'Known values', value: 'Angle A and adjacent side b' },
        { label: 'Finds', value: 'Opposite side a' },
        { label: 'Main formula', value: 'a = b \u00d7 tan(A)' },
        { label: 'Best for', value: 'Finding height or rise from a base distance and angle' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Side a from Tangent',
      intro:
        '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">Angle</a> A sits at the bottom-right. The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b is the horizontal base, right next to angle A. The opposite side a is directly across from angle A. Tangent connects these two sides directly.',
      caption:
        'Right triangle showing <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, known adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b, and unknown opposite side a.',
      sides: {
        a: {
          label: 'a = find',
          description: 'Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is the value the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> returns.',
          status: 'unknown'
        },
        b: {
          label: 'b = known',
          description: 'Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b runs along the base next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. You enter this value.',
          status: 'known'
        },
        c: {
          label: 'c',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. It is not required for this calculation.',
          status: 'unknown'
        }
      },
      notes: [
        'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'Tangent uses only sides a and b; the hypotenuse is not needed.',
        'As <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A grows larger, the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a increases relative to b.'
      ]
    },
    calculator: {
      outputLabel: 'Opposite side a',
      fields: [
        { key: 'b', label: 'Adjacent side b', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Side From Tangent Formula',
      paragraphs: [
        'Tangent of an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> equals the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> divided by the adjacent side: tan(A) = a / b. Multiplying both sides by b isolates the opposite side a.',
        'In this formula, b is the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> (the side next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A that also touches the right angle), A is the known acute angle in degrees, and a is the opposite side you want to find. No hypotenuse is involved.'
      ],
      formulas: ['a = b \\times \\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b. This is the side that sits next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and also connects to the right angle.',
        'Confirm the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is in degrees and is between 0 and 90.',
        'Enter adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b into the first input field.',
        'Enter <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A into the second input field.',
        'Click Calculate to see opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a and the full solution steps.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Opposite Side a',
      intro: 'Given: A = 36.87 degrees, b = 4. Find opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a using the tangent formula.',
      lines: [
        'a = b \\times \\tan(A)',
        'a = 4 \\times \\tan(36.87)',
        'a = 4 \\times 0.75',
        'a = 3'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is the side across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It tells you the vertical distance, height, or rise that corresponds to the base distance and angle you entered.',
          'Unlike sine and cosine results, the tangent result is not limited to being smaller than any particular input. If the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is large (close to 90 degrees), tan(A) becomes very large, and a can exceed b significantly.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This is the right tool when you have a base measurement and an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of elevation or depression and need to find the height or vertical distance. It skips the hypotenuse entirely.',
          'Tangent is especially useful in surveying, construction, and field measurement problems where the horizontal distance is known from a map or tape measure and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is read from an inclinometer or clinometer.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding the height of a building when you know your distance from the base and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of elevation.',
          'Calculating the rise of a hill from the horizontal run and slope <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Determining the depth of a trench from the edge distance and the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of descent.',
          'Converting a roof pitch <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> into the actual rise per unit of horizontal run.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Tangent problems often go wrong when the hypotenuse is used where the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> should be, or when sides a and b are swapped. Double-check which side sits next to the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and which one is across from it.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Using the hypotenuse instead of the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b. Tangent does not use the hypotenuse.',
          'Switching a and b. The adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is the input, the opposite side is the output.',
          'Using division instead of multiplication. To find a from b, you multiply by tan(A).',
          'Using an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of exactly 90 degrees. Tangent of 90 degrees is not defined, so the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> will show an error.',
          'Entering the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in radians rather than degrees.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-adjacent-side-from-tangent-calculator/', label: 'Right Triangle Adjacent Side From Tangent Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does a = b \u00d7 tan(A) calculate?',
        answer:
          'It calculates the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a of a right triangle when you know the adjacent side b and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. Tangent is the ratio that connects the opposite and adjacent sides.'
      },
      {
        question: 'Why does this calculator not need the hypotenuse?',
        answer:
          'The <a href="/tangent-ratio-calculator/" class="text-primary hover:underline">tangent ratio</a> is defined as opposite over adjacent (a / b). It only involves sides a and b, so the hypotenuse is not part of the formula.'
      },
      {
        question: 'What happens when the angle is close to 90 degrees?',
        answer:
          'Tangent values grow extremely large as the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> approaches 90 degrees. The opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> becomes much longer than the adjacent side, and at exactly 90 degrees the tangent is not defined.'
      },
      {
        question: 'Can I use this to find the adjacent side instead?',
        answer:
          'No. This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> from the adjacent side. To find the adjacent side from the opposite side, use the <a href="/right-triangle-adjacent-side-from-tangent-calculator/" class="text-primary hover:underline">adjacent side from tangent</a> calculator with the formula b = a / tan(A).'
      },
      {
        question: 'Is there a difference between tan and tangent?',
        answer:
          'No. They are the same function. "tan" is the standard abbreviation used in calculators and math notation. Both refer to the tangent trigonometric function.'
      }
    ]
  },
  {
    slug: 'right-triangle-adjacent-side-from-tangent-calculator',
    url: '/right-triangle-adjacent-side-from-tangent-calculator/',
    h1: 'Adjacent Side Calculator: Find b from Opposite Side a and Angle A',
    tagline: 'Enter the opposite side a and angle A to find the adjacent side b.',
    metaTitle: 'Adjacent Side Calculator: Find b Using Tangent',
    metaDescription: 'Find the adjacent side of a right triangle using the opposite side and angle. Learn the tangent formula, follow worked examples, and calculate horizontal distances.',
    formulaSlug: 'b-a-tan',
    toolPurpose:
      'This tool finds the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b when you have the opposite side a and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It reverses the tangent formula, dividing instead of multiplying, so you get the base length directly.',
    intro: 'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the adjacent side b of a right triangle when you know the opposite side a and the acute angle A. The method uses the tangent ratio: since tan(A) = a / b, dividing the known side by the tangent gives the side next to the angle. Enter your values above to calculate b instantly with a full step-by-step solution.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'This is the reverse of the standard tangent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>. Instead of multiplying by tangent to find the opposite side, you divide by tangent to find the adjacent side. The hypotenuse is not involved.',
      cards: [
        { label: 'Known values', value: 'Angle A and opposite side a' },
        { label: 'Finds', value: 'Adjacent side b' },
        { label: 'Main formula', value: 'b = a / tan(A)' },
        { label: 'Best for', value: 'Finding base distance, horizontal run, or ground offset from height and angle' }
      ]
    },
    diagram: {
      h2: 'Understand the Right Triangle',
      intro:
        '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">Angle</a> A is at the bottom-right corner. The opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is directly across from it, which you already know. The adjacent side b is the horizontal base next to angle A, and this is what the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds by dividing a by tan(A).',
      caption:
        'Right triangle showing <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, known opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a, and unknown adjacent side b.',
      sides: {
        a: {
          label: 'a = known',
          description: 'Opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is directly across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. You enter this value.',
          status: 'known'
        },
        b: {
          label: 'b = find',
          description: 'Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b runs along the base next to <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. This is the value the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> returns.',
          status: 'unknown'
        },
        c: {
          label: 'c = hypotenuse',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right angle. It appears for geometric context but is not an input here.',
          status: 'known'
        }
      },
      notes: [
        'For <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is opposite, side b is adjacent, and side c is the hypotenuse.',
        'This calculation uses division, not multiplication.',
        'As <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A increases, the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b decreases for the same opposite side a.'
      ]
    },
    calculator: {
      outputLabel: 'Adjacent side b',
      fields: [
        { key: 'a', label: 'Opposite side a', min: 0, placeholder: 'e.g. 3' },
        { key: 'A', label: 'Angle A (degrees)', min: 0, placeholder: 'e.g. 36.87' }
      ]
    },
    formulaSection: {
      h2: 'Adjacent Side From Tangent Formula',
      paragraphs: [
        'Start with the <a href="/tangent-ratio-calculator/" class="text-primary hover:underline">tangent ratio</a>: tan(A) = opposite / adjacent. Substituting the side notation gives tan(A) = a / b.',
        '<strong>Step 1: Start with the tangent ratio.</strong> The tangent of angle A equals the opposite side divided by the adjacent side.',
        '<strong>Step 2: Multiply both sides by b.</strong> This gives b \u00d7 tan(A) = a.',
        '<strong>Step 3: Divide both sides by tan(A).</strong> This isolates the adjacent side: b = a / tan(A).',
        'Where <strong>a</strong> is the known opposite side (across from angle A), <strong>A</strong> is the acute angle in degrees, and <strong>b</strong> is the adjacent side you want to find (next to angle A, not the hypotenuse).',
        '<strong>Why division?</strong> In the original ratio, b sits in the denominator. Multiplying both sides by b moves it to the left, then dividing by tan(A) isolates it. This is the reverse of the usual tangent calculation, which multiplies by tan(A) to find the opposite side from a known adjacent side.'
      ],
      formulas: ['\\tan(A) = \\frac{a}{b}', 'b \\times \\tan(A) = a', 'b = \\frac{a}{\\tan(A)}']
    },
    howTo: {
      h2: 'How to Calculate the Adjacent Side',
      steps: [
        'Identify the right angle in the triangle. The tangent ratio only applies to right triangles.',
        'Identify the opposite side a relative to angle A. This is the side across from the angle, often a vertical height.',
        'Confirm that angle A is measured in degrees. This calculator uses degrees, not radians.',
        'Enter the known opposite-side length a.',
        'Enter the acute angle A (must satisfy 0&deg; &lt; A &lt; 90&deg;).',
        'Click Calculate to find the adjacent side b.',
        'Review the result and the step-by-step solution shown below the calculator.',
        'Verify the answer using the tangent ratio: tan(A) should approximately equal a / b.'
      ]
    },
    example: {
      h2: 'Quick Example',
      intro: 'Given a = 3 m and A = 36.87&deg;, the adjacent side is b &asymp; 4 m. See the detailed examples below for full step-by-step solutions.',
      lines: [
        'b = a / \\tan(A)',
        'b = 3 / \\tan(36.87^\\circ)',
        'b \\approx 3 / 0.75',
        'b \\approx 4'
      ]
    },
    extraSections: [
      {
        h2: 'Adjacent Side Examples With Step-by-Step Solutions',
        paragraphs: [],
        customHtml: `<article>
<h3>Example 1: The 3-4-5 Triangle</h3>
<p><strong>Problem:</strong> A right triangle has opposite side a = 3 m and angle A &asymp; 36.87&deg;. Find the adjacent side b.</p>
<p><strong>Given:</strong> a = 3 m, A = 36.87&deg;. <strong>Find:</strong> b.</p>
<p><strong>Formula:</strong> b = a / tan(A)</p>
<p><strong>Substitution:</strong> b = 3 / tan(36.87&deg;) &asymp; 3 / 0.75</p>
<p><strong>Answer:</strong> <strong>b &asymp; 4 m</strong></p>
<p><strong>Verification:</strong> tan(A) &asymp; 3 / 4 = 0.75. The angle 36.87&deg; is the rounded angle for the 3-4-5 triangle.</p>
</article>
<article>
<h3>Example 2: A 45-Degree Angle</h3>
<p><strong>Problem:</strong> Given opposite side a = 5 cm and angle A = 45&deg;, find the adjacent side.</p>
<p><strong>Given:</strong> a = 5 cm, A = 45&deg;. <strong>Find:</strong> b.</p>
<p><strong>Calculation:</strong> Since tan(45&deg;) = 1: b = 5 / 1 = 5 cm</p>
<p><strong>Answer:</strong> <strong>b = 5 cm</strong></p>
<p><strong>Why this works:</strong> The two legs of a right triangle are equal when either acute angle is 45&deg;. At 45&deg;, the triangle is isosceles.</p>
</article>
<article>
<h3>Example 3: Calculate a Longer Horizontal Distance</h3>
<p><strong>Problem:</strong> A surveyor measures a vertical height of a = 6 m and an angle of elevation A = 30&deg;. Find the horizontal distance.</p>
<p><strong>Given:</strong> a = 6 m, A = 30&deg;. <strong>Find:</strong> b.</p>
<p><strong>Calculation:</strong> b = 6 / tan(30&deg;) &asymp; 6 / 0.577350 &asymp; 10.3923 m</p>
<p><strong>Answer:</strong> <strong>b &asymp; 10.39 m</strong></p>
<p><strong>Why b &gt; a here:</strong> When angle A is less than 45&deg;, the adjacent side is longer than the opposite side. A shallow angle stretches the base out.</p>
</article>
<article>
<h3>Example 4: Decimal Measurement</h3>
<p><strong>Problem:</strong> Given opposite side a = 2.4 m and angle A = 15&deg;, find the adjacent side.</p>
<p><strong>Calculation:</strong> b = 2.4 / tan(15&deg;) &asymp; 2.4 / 0.267949 &asymp; 8.9569 m</p>
<p><strong>Answer:</strong> <strong>b &asymp; 8.96 m</strong></p>
<p><strong>Verification:</strong> tan(15&deg;) &asymp; 2.4 / 8.9569 &asymp; 0.2679.</p>
<p>Use the full available precision during calculation and round only the final displayed result.</p>
</article>`
      },
      {
        h2: 'How Angle A Affects the Adjacent Side',
        paragraphs: [
          'When the opposite side a is held constant, increasing angle A decreases the adjacent side b. This is because tan(A) grows as A approaches 90&deg;, and b = a / tan(A) shrinks accordingly.',
          'Three landmark cases: at A = 45&deg;, b = a (the legs are equal). For 0&deg; &lt; A &lt; 45&deg;, b &gt; a (shallow angle, long base). For 45&deg; &lt; A &lt; 90&deg;, b &lt; a (steep angle, short base).',
          'As the angle approaches 0&deg;, the calculated horizontal distance grows very large. As the angle approaches 90&deg;, the adjacent side approaches zero. Neither boundary angle is a valid input for this calculator.'
        ],
        listTitle: 'Example values (a = 5 m):',
        listItems: [
          'A = 30&deg;: b &asymp; 8.66 m',
          'A = 45&deg;: b = 5.00 m',
          'A = 60&deg;: b &asymp; 2.89 m'
        ]
      },
      {
        h2: 'Where Is the Adjacent Side From Tangent Formula Used?',
        paragraphs: [
          '<strong>Estimating horizontal distance from height and angle.</strong> When the vertical height difference is known and the angle of elevation is measured from the horizontal, the horizontal distance follows from the tangent ratio. Example: vertical height a = 6 m, angle of elevation A = 30&deg;, horizontal distance b = 6 / tan(30&deg;) &asymp; 10.39 m. This assumes a level horizontal baseline and a correctly defined angle.',
          '<strong>Ramp geometry.</strong> A known vertical rise and slope angle measured from the horizontal give the horizontal run. Example: rise a = 1.2 m, slope angle A = 10&deg;, run b = 1.2 / tan(10&deg;) &asymp; 6.81 m. This is a geometric calculation, not proof of compliance with accessibility, construction, or building regulations.',
          '<strong>Roof pitch and building measurements.</strong> A known vertical rise and roof angle measured relative to the horizontal determine the horizontal run. Be careful with the angle convention: roof pitch is sometimes given as a ratio (e.g. 4:12) rather than degrees, and must be converted first.',
          '<strong>Surveying and site measurements.</strong> The formula helps calculate a horizontal distance when the vertical difference and angle are known. Practical surveying requires corrections, calibrated instruments, and professional procedures; this basic calculator is not a substitute for professional surveying or engineering.'
        ]
      },
      {
        h2: 'Valid Inputs and Common Calculation Checks',
        paragraphs: [
          'The opposite side a must be a positive number. The angle A must satisfy 0&deg; &lt; A &lt; 90&deg;: it must be acute.',
          '<strong>Empty fields:</strong> provide both the side length and the angle before calculating.',
          '<strong>Zero or negative side length:</strong> rejected. Side lengths must be positive.',
          '<strong>Angle equal to 0&deg;:</strong> rejected, because tan(0&deg;) = 0 makes the division undefined.',
          '<strong>Angle equal to 90&deg;:</strong> rejected, because the angle is not acute and the required triangle geometry does not apply.',
          '<strong>Angle outside the valid range:</strong> a clear validation error is displayed.',
          '<strong>Very small angles:</strong> the result grows very large as A approaches 0&deg;. Check that the answer is physically reasonable for your situation.'
        ],
        listTitle: 'Requirements:',
        listItems: [
          'Opposite side a &gt; 0.',
          'Angle A &gt; 0&deg; and A &lt; 90&deg;.',
          'Angle measured in degrees, not radians.',
          'Numeric, finite input values.'
        ]
      },
      {
        h2: 'How to Check Your Adjacent Side Result',
        paragraphs: [
          'The result is the length of the leg next to angle A, excluding the hypotenuse. Verify it with the original tangent ratio: tan(A) should approximately equal a / b.',
          'For the 3-4-5 example: tan(36.87&deg;) &asymp; 3 / 4 &asymp; 0.75. Small differences may occur because the displayed angle and result are rounded; use an appropriate floating-point tolerance when checking programmatically.'
        ],
        listTitle: 'A valid result should satisfy:',
        listItems: [
          'b &gt; 0.',
          'tan(A) &asymp; a / b.',
          'If A = 45&deg;, b should equal a.',
          'If A &lt; 45&deg;, b should be greater than a; if A &gt; 45&deg;, b should be less than a.'
        ]
      },
      {
        h2: 'Common Mistakes When Finding the Adjacent Side',
        paragraphs: [
          'The most common error is multiplying by tan(A) instead of dividing. The standard tangent formula multiplies to find the opposite side; this reversed version divides to find the adjacent side. Mixing them up gives the reciprocal of the correct answer.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          '<strong>Multiplying by tan(A) instead of dividing.</strong> Wrong: b = a &times; tan(A). Correct: b = a / tan(A).',
          '<strong>Confusing opposite and adjacent sides.</strong> Side a is across from angle A; side b is next to it. Swapping them inverts the result.',
          '<strong>Treating the hypotenuse as the adjacent side.</strong> The hypotenuse c is never an input here; b is the leg beside angle A.',
          '<strong>Entering the angle in radians.</strong> This calculator expects degrees. 0.64 radians is not 0.64 degrees.',
          '<strong>Entering 0&deg; or 90&deg;.</strong> Both are rejected: tan(0&deg;) = 0 causes division by zero, and 90&deg; is not acute.',
          '<strong>Mixing incompatible units.</strong> The result uses the same unit as the input side; keep them consistent.',
          '<strong>Rounding too early.</strong> Keep full precision through the division and round only the final answer.',
          '<strong>Measuring the angle from the vertical.</strong> The formula assumes angle A is measured from the horizontal (between the adjacent side and the hypotenuse).'
        ]
      }    ],
    relatedLinks: [
      { href: '/right-triangle-side-from-angle-calculator/', label: 'Right Triangle Side From Angle Calculator' },
      { href: '/right-triangle-side-from-tangent-calculator/', label: 'Right Triangle Side From Tangent Calculator' },
      { href: '/right-triangle-side-from-sine-calculator/', label: 'Right Triangle Side From Sine Calculator' },
      { href: '/right-triangle-side-from-cosine-calculator/', label: 'Right Triangle Side From Cosine Calculator' },
      { href: '/right-triangle-angle-from-tangent-calculator/', label: 'Right Triangle Angle From Tangent Calculator' },
      { href: '/tangent-ratio-calculator/', label: 'Tangent Ratio Calculator' }
    ],
    faqs: [
      {
        question: 'What does b = a / tan(A) calculate?',
        answer:
          'It calculates the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b when you know the opposite side a and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It is the rearranged version of the tangent formula tan(A) = a / b.'
      },
      {
        question: 'Why does the formula use division?',
        answer:
          'In the tangent ratio tan(A) = a / b, the adjacent side b is in the denominator. To isolate b, multiply both sides by b and then divide by tan(A). Division is required because you are solving for the denominator of the original ratio.'
      },
      {
        question: 'How do I identify the adjacent side?',
        answer:
          'The adjacent side is the leg that forms <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A together with the hypotenuse. It is the side next to the angle, not across from it. The opposite side a is across from angle A.'
      },
      {
        question: 'What happens when angle A is 45\u00b0?',
        answer:
          'When A = 45\u00b0, tan(A) = 1, so b = a / 1 = a. The two legs are equal and the triangle is isosceles. This is the only angle where the adjacent and opposite sides match exactly.'
      },
      {
        question: 'Can the adjacent side be longer than the opposite side?',
        answer:
          'Yes. When angle A is less than 45\u00b0, tan(A) &lt; 1, so dividing by it gives b &gt; a. A shallow angle produces a long base relative to the height.'
      },
      {
        question: 'Why is an angle of 0\u00b0 invalid?',
        answer:
          'Because tan(0\u00b0) = 0, and dividing by zero is undefined. Geometrically, a 0\u00b0 angle means there is no triangle at all \u2014 just a flat line.'
      },
      {
        question: 'Can I calculate horizontal distance from height and angle?',
        answer:
          'Yes, that is one of the main uses. If a = 6 m is the vertical height and A = 30\u00b0 is the angle of elevation measured from the horizontal, the horizontal distance is b = 6 / tan(30\u00b0) \u2248 10.39 m.'
      },
      {
        question: 'What is the difference between this calculator and a standard tangent side calculator?',
        answer:
          'A standard tangent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> multiplies: a = b \u00d7 tan(A), finding the opposite side from a known adjacent side. This calculator divides: b = a / tan(A), finding the adjacent side from a known opposite side. They are inverse operations.'
      }
    ]
  }
];

export const FOCUSED_SIDE_CALCULATOR_PAGE_SLUGS = FOCUSED_SIDE_CALCULATOR_PAGES.map(
  (page) => page.slug
);

export function getFocusedSideCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
) {
  const page = FOCUSED_SIDE_CALCULATOR_PAGES.find((item) => item.slug === slug);

  if (!page) {
    return undefined;
  }

  if (locale !== DEFAULT_LOCALE) {
    if (isFocusedSideAngleCalculatorSlug(slug)) {
      return localizeFocusedSideAngleCalculatorPage(page, locale);
    }

    const translationsByLocale = FOCUSED_SIDE_CALCULATOR_TRANSLATIONS as unknown as Record<
      string,
      Record<string, FocusedSideCalculatorPage>
    >;
    const localizedPage = translationsByLocale[locale]?.[slug];

    if (localizedPage) {
      return localizedPage;
    }
  }

  return page;
}
