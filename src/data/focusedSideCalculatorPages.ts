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
    h1: 'Pythagorean Theorem Calculator',
    metaTitle: 'Pythagorean Theorem Calculator | Find the Hypotenuse',
    metaDescription:
      'Find hypotenuse c from legs a and b with a Pythagorean theorem <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>, diagram, formula, examples, validation tips, and step-by-step work.',
    formulaSlug: 'pythagorean-theorem',
    toolPurpose:
      'Whether you\u2019re solving a homework problem or measuring a diagonal in real life, this tool gives you the answer in seconds \u2014 with the full solution shown step by step.',
    intro:
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the hypotenuse (c) of a right triangle when you know both legs (a and b). Enter your two leg values and get the result instantly.',
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
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Pythagorean Theorem Formula',
      paragraphs: [
        'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs. To solve for the hypotenuse, take the square root of both sides.',
        'In this formula, a and b are the two legs of the right triangle \u2014 the sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. c is the hypotenuse, the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right angle. This formula only works for right triangles.'
      ],
      formulas: ['c^2 = a^2 + b^2', 'c = \\sqrt{a^2 + b^2}']
    },
    howTo: {
      h2: 'How to Use This Tool',
      steps: [
        'Identify the two legs of your right triangle. These are the sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Enter leg a into the first input field.',
        'Enter leg b into the second input field.',
        'Click Calculate to find the hypotenuse.',
        'Read the result for c, along with the step-by-step solution.'
      ]
    },
    example: {
      h2: 'Example: Find the Hypotenuse',
      intro: 'Given: a = 6, b = 8. The hypotenuse of a right triangle with legs 6 and 8 is 10.',
      lines: [
        'c = \\sqrt{6^2 + 8^2}',
        'c = \\sqrt{36 + 64}',
        'c = \\sqrt{100}',
        'c = 10'
      ]
    },
    extraSections: [
      {
        h2: 'Where This Calculator Is Useful',
        paragraphs: [
          'The hypotenuse <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is useful whenever two perpendicular distances combine into one diagonal distance. It is especially helpful when a drawing, floor plan, or homework problem gives the horizontal and vertical sides but leaves the diagonal <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> blank.',
          'Because this page only solves for c, it avoids the confusion of switching between <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> modes. If your known values are the two legs, this is the focused Pythagorean theorem tool to use.'
        ],
        listTitle: 'Common examples include:',
        listItems: [
          'Finding the diagonal of a rectangle, screen, tile layout, or room.',
          'Calculating a ladder length from wall height and ground distance.',
          'Estimating the sloped length of a ramp from rise and run.',
          'Checking right triangle homework before submitting the final answer.'
        ]
      },
      {
        h2: 'Input Tips for Better Results',
        paragraphs: [
          'Enter both leg lengths as positive numbers. Decimals are fine, and the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> will keep enough precision to make the step-by-step work useful.',
          'The two inputs must use the same unit. If a is measured in feet and b is measured in inches, convert one measurement first so the result is meaningful.'
        ],
        listTitle: 'Before you calculate, check that:',
        listItems: [
          'a and b are the sides that touch the 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Neither input is zero or negative.',
          'Both values are measured in the same unit.',
          'You are solving for the hypotenuse, not a missing leg.'
        ]
      },
      {
        h2: 'How to Read the Answer',
        paragraphs: [
          'The output labeled Hypotenuse c is the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. It is the diagonal side in the diagram and should be longer than both input legs.',
          'If your result looks smaller than a or b, that is a sign that one of the inputs was mislabeled or that the triangle is not actually a right triangle.'
        ],
        listTitle: 'A quick reasonableness check:',
        listItems: [
          'c should be greater than a.',
          'c should be greater than b.',
          'c should be less than a + b.',
          'For common triples like 3-4-5 or 5-12-13, the result should match the known triple.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'Most wrong hypotenuse answers come from using the right formula on the wrong sides. The legs must be the two sides that make the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>; the hypotenuse is never an input on this page.',
          'Another common issue is stopping at a² + b². That value is c², not c. The square root step is what turns the squared value back into the actual <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> length.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          'Using the formula on a triangle that does not have a 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Entering the diagonal <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> as a or b.',
          'Forgetting to take the square root at the end.',
          'Mixing units such as inches and feet in the same calculation.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      },
      {
        href: '/missing-leg-from-c-and-b-calculator/',
        label: 'Missing Leg From c and b Calculator'
      }
    ],
    faqs: [
      {
        question: 'What is the Pythagorean theorem?',
        answer:
          'The Pythagorean theorem is a formula that relates the three sides of a right triangle: a\u00b2 + b\u00b2 = c\u00b2. It says that the square of the hypotenuse equals the sum of the squares of the two legs. It only applies to right triangles.'
      },
      {
        question: 'What does c mean in the formula?',
        answer:
          'In the formula c\u00b2 = a\u00b2 + b\u00b2, c is the hypotenuse \u2014 the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the right triangle. It\u2019s the side directly across from the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.'
      },
      {
        question: 'Can I use this calculator for any triangle?',
        answer:
          'No. This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> uses the Pythagorean theorem, which only works for right triangles. If your triangle doesn\u2019t have a 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>, the formula won\u2019t give a correct result.'
      },
      {
        question: 'How do I find the hypotenuse?',
        answer:
          'To find the hypotenuse, square both legs (a\u00b2 and b\u00b2), add them together, and take the square root of the sum. The formula is c = \u221a(a\u00b2 + b\u00b2). Or just enter your values above and let the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> do it.'
      },
      {
        question: 'What are a and b in a right triangle?',
        answer:
          'a and b are the two legs \u2014 the sides that form the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. They can be any positive length, and it doesn\u2019t matter which one you call a or b. The hypotenuse (c) is always the remaining <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.'
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
    h1: 'Missing Leg From c and b Calculator',
    metaTitle: 'Missing Leg From c and b Calculator | Find Leg a',
    metaDescription:
      'Find missing leg a when hypotenuse c and leg b are known. Includes diagram, formula a = sqrt(c^2 - b^2), input checks, and examples.',
    formulaSlug: 'other-leg-from-hypotenuse-and-leg',
    toolPurpose:
      'Keep in mind: c is the hypotenuse, not a leg. It\u2019s the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> of the triangle and sits opposite the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. If you have both legs and need the hypotenuse, use the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean Theorem</a> Calculator instead.',
    intro:
      'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the missing leg a of a right triangle when you know the hypotenuse c and the other leg b. Enter your values above to get the result with a full step-by-step breakdown.',
    quickSummary: {
      h2: 'What This Tool Solves',
      intro:
        'Use this page when you know the hypotenuse and leg b, but need leg a. It keeps the known <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b separate from the unknown side a so the formula and result match the labels on your triangle.',
      cards: [
        { label: 'Known values', value: 'Hypotenuse c and leg b' },
        { label: 'Finds', value: 'Missing leg a' },
        { label: 'Main formula', value: 'a = sqrt(c^2 - b^2)' },
        { label: 'Required check', value: 'c must be greater than b' }
      ]
    },
    diagram: {
      h2: 'Right Triangle Diagram: Finding Leg a',
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
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Missing Leg a Formula',
      paragraphs: [
        'Starting from the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a> (a\u00b2 + b\u00b2 = c\u00b2), solve for a to get the formula below.',
        'Where c is the hypotenuse (the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, opposite the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>), b is the known leg, and a is the missing leg you want to find. The key operation is subtraction: square the hypotenuse, subtract the square of the known leg, then take the square root of what\u2019s left.'
      ],
      formulas: ['a = \\sqrt{c^2 - b^2}']
    },
    howTo: {
      h2: 'How to Find Leg a From c and b',
      steps: [
        'Make sure you\u2019ve correctly identified the hypotenuse (c) and the known leg (b). The hypotenuse is always across from the 90\u00b0 <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Enter the hypotenuse c into the first input field.',
        'Enter the known leg b into the second input field.',
        'Click Calculate to find leg a.',
        'Review the result for a and the step-by-step work shown below.'
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
        h2: 'Important Check Before Calculating',
        paragraphs: [
          'The hypotenuse c must be greater than b for the calculation to work. In every right triangle, the hypotenuse is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. If c equals b, the formula gives a = 0, which means no triangle can be formed.',
          'If c is less than b, the expression under the square root becomes negative and there is no real <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> length for a. In that case, re-check which side is opposite the 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.'
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
        h2: 'Where This Calculator Is Useful',
        paragraphs: [
          'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is the right tool when you know the hypotenuse and leg b and need to find leg a. It is especially helpful when your diagram labels the known leg as b and the unknown base or height as a.',
          'The page also works as a measurement check. If the calculated <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a is very different from a measured side, the triangle may not include a true 90° <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> or one of the known values may have been copied incorrectly.'
        ],
        listTitle: 'Common examples include:',
        listItems: [
          'Finding a base distance when the slope length c and height b are known.',
          'Finding a vertical height when the hypotenuse and horizontal distance are known.',
          'Solving geometry problems that give c and b and ask for a.',
          'Checking construction, mapping, or floor-plan <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> that form a right triangle.'
        ]
      },
      {
        h2: 'How to Read the Answer',
        paragraphs: [
          'The output labeled Missing leg a is the other <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> that forms the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> with b. It should be shorter than the hypotenuse c and greater than zero.',
          'If the result is close to c, the known leg b is relatively small. If the result is close to zero, b is almost as long as c. Both can happen, but the input labels should be checked before using the answer.'
        ],
        listTitle: 'A valid result should satisfy:',
        listItems: [
          'a is greater than zero.',
          'a is less than c.',
          'a² + b² is approximately equal to c².',
          'The output unit matches the unit used for c and b.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The biggest risk is swapping the hypotenuse with a leg. This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> assumes c is already the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, so a mislabeled c value will make the result incorrect.',
          'A second common issue is using the hypotenuse formula by mistake. To find a missing leg, you subtract the known leg square from the hypotenuse square, then take the square root.'
        ],
        listTitle: 'Avoid these mistakes:',
        listItems: [
          'Entering leg b as the hypotenuse c.',
          'Using c² + b² instead of c² - b².',
          'Entering b greater than or equal to c.',
          'Forgetting the square root after subtracting.',
          'Combining <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> that use different units.'
        ]
      }
    ],
    relatedLinks: [
      { href: '/right-triangle-side-calculator/', label: 'Right Triangle Side Calculator' },
      { href: '/pythagorean-theorem-calculator/', label: 'Pythagorean Theorem Calculator' },
      {
        href: '/missing-leg-from-c-and-a-calculator/',
        label: 'Missing Leg From c and a Calculator'
      }
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
        question: 'What does this calculator find?',
        answer:
          'It finds the missing leg a. You provide the hypotenuse (c) and one leg (b), and the <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> applies the formula a = \u221a(c\u00b2 \u2212 b\u00b2) to give you the unknown leg with a step-by-step solution.'
      },
      {
        question: 'Can c be smaller than b?',
        answer:
          'No. The hypotenuse is always the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> in a right triangle. If your value for c is smaller than b, the inputs don\u2019t represent a valid right triangle. Re-check which measurement corresponds to the hypotenuse.'
      },
      {
        question: 'How do I find a from c and b?',
        answer:
          'Square the hypotenuse (c\u00b2), square the known leg (b\u00b2), subtract b\u00b2 from c\u00b2, and take the square root of the result. The formula is a = \u221a(c\u00b2 \u2212 b\u00b2). You can also just enter your values into this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to get the answer automatically.'
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
    h1: 'Right Triangle Adjacent Side From Tangent Calculator',
    metaTitle: 'Right Triangle Adjacent Side From Tangent Calculator | Find b = a / tan(A)',
    metaDescription: 'Use this right triangle adjacent side from tangent calculator to find adjacent side b from angle A and opposite side a with formula, steps, and examples.',
    formulaSlug: 'b-a-tan',
    toolPurpose:
      'This tool finds the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b when you have the opposite side a and an acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A. It reverses the tangent formula, dividing instead of multiplying, so you get the base length directly.',
    intro: 'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to find adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A and opposite side a.',
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
      h2: 'Right Triangle Diagram: Side b from Tangent',
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
          label: 'c',
          description: 'Hypotenuse c is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. It is not part of this calculation.',
          status: 'unknown'
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
        { key: 'a', label: 'Opposite side a', min: 0 },
        { key: 'A', label: 'Angle A', min: 0 }
      ]
    },
    formulaSection: {
      h2: 'Adjacent Side From Tangent Formula',
      paragraphs: [
        'The <a href="/tangent-ratio-calculator/" class="text-primary hover:underline">tangent ratio</a> states that tan(A) = a / b, where a is the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and b is the adjacent side. Rearranging to solve for b gives the formula below.',
        'In this formula, a is the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> (the side across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A), A is the acute angle in degrees, and b is the adjacent side you want to find. The division by tan(A) converts the known height and angle into the corresponding base length.'
      ],
      formulas: ['b = a / \\tan(A)']
    },
    howTo: {
      h2: 'How to Use This Calculator',
      steps: [
        'Identify the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a. This is the side across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A, often the vertical height or rise.',
        'Confirm the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A is in degrees and falls between 0 and 90.',
        'Enter opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> a into the first input field.',
        'Enter <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A into the second input field.',
        'Click Calculate to see adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b and the complete solution.'
      ]
    },
    example: {
      h2: 'Step-by-Step Example: Find Adjacent Side b',
      intro: 'Given: A = 36.87 degrees, a = 3. Find adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b using the tangent division formula.',
      lines: [
        'b = a / \\tan(A)',
        'b = 3 / \\tan(36.87)',
        'b = 3 / 0.75',
        'b = 4'
      ]
    },
    extraSections: [
      {
        h2: 'What the Result Means',
        paragraphs: [
          'The output labeled Adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> b is the horizontal base of the triangle. It represents the ground distance, run, or offset that corresponds to the height and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> you provided.',
          'When the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is small, the base will be much longer than the height, because a gentle slope covers a lot of horizontal distance. When the angle is steep (close to 90 degrees), the base shrinks because the triangle is nearly vertical.'
        ]
      },
      {
        h2: 'When to Use This Calculator',
        paragraphs: [
          'This tool is ideal when you know a vertical measurement and a slope <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and want to find how far out the base extends. It flips the usual tangent problem around.',
          'It comes up in building setbacks, foundation offsets, and situations where height restrictions or clearance distances determine how far back something must be placed.'
        ],
        listTitle: 'Common situations:',
        listItems: [
          'Finding how far from a wall you need to stand based on wall height and viewing <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Calculating the horizontal run needed for a staircase from the total rise and stair <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
          'Determining the setback distance for a retaining wall from the wall height and soil <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> of repose.',
          'Solving surveying problems where elevation and <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> are measured and horizontal distance is needed.'
        ]
      },
      {
        h2: 'Common Mistakes',
        paragraphs: [
          'The biggest mistake with this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> is using multiplication instead of division. The standard tangent formula multiplies to find the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>. This reversed version divides to find the adjacent side. Mixing them up swaps the answer completely.'
        ],
        listTitle: 'Watch out for:',
        listItems: [
          'Multiplying a by tan(A) instead of dividing. That formula finds the opposite <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, not the adjacent.',
          'Using b = a \u00d7 tan(A), which is the wrong formula for this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>.',
          'Switching opposite and adjacent sides. <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">Side</a> a is across from <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> A; side b is next to it.',
          'Using an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> outside the valid range. Angle A must be greater than 0 and less than 90 degrees.',
          'Entering the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> in radians instead of degrees.'
        ]
      }
    ],
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
        question: 'Why does this formula use division instead of multiplication?',
        answer:
          'The standard tangent formula multiplies b by tan(A) to find a. This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> does the reverse: it divides a by tan(A) to find b. Division is needed because b is in the denominator of the original ratio.'
      },
      {
        question: 'What is the difference between this and the tangent side calculator?',
        answer:
          'The tangent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> finds the opposite side a from the adjacent side b. This calculator does the opposite: it finds the adjacent side b from the opposite side a. They are inverse operations.'
      },
      {
        question: 'Can the result be larger than the opposite side?',
        answer:
          'Yes. When the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is less than 45 degrees, the adjacent <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is longer than the opposite side. The two sides are equal only when the angle is exactly 45 degrees.'
      },
      {
        question: 'What happens if I divide by a very small tangent value?',
        answer:
          'When the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> is very close to 0 degrees, tan(A) is nearly zero, and dividing by it produces a very large result. This means the base is extremely long compared to the height, which makes geometric sense for a nearly flat triangle.'
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
