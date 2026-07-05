import {
  RIGHT_TRIANGLE_FORMULAS,
  type RightTriangleFormula
} from 'src/data/rightTriangleFormulas';

export type GroupedCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  h2: [string, string];
  includedToolIds: number[];
  intent: string;
  relatedSlugs: string[];
  content: {
    intro: string;
    method: string;
    useCases: string[];
    inputTips: string[];
    proTip: string;
  };
};

export type GroupedCalculatorHubPage = {
  slug: string;
  url: string;
  h1: string;
  h2: [string, string];
  purpose: string;
};

export const TOOL_ID_TO_SLUG: Record<number, string> = {
  1: 'pythagorean-theorem',
  2: 'leg-from-hypotenuse-and-other-leg',
  3: 'other-leg-from-hypotenuse-and-leg',
  4: 'area-from-legs',
  5: 'perimeter',
  6: 'semiperimeter',
  7: 'sine-ratio',
  8: 'cosine-ratio',
  9: 'tangent-ratio',
  10: 'angle-from-sine',
  11: 'angle-from-cosine',
  12: 'angle-from-tangent',
  13: 'altitude-to-hypotenuse',
  14: 'projection-of-a-on-hypotenuse',
  15: 'projection-of-b-on-hypotenuse',
  16: 'inradius',
  17: 'circumradius',
  18: 'cotangent-exact',
  19: 'secant-exact',
  20: 'cosecant-exact',
  21: 'a-c-sin',
  22: 'b-c-cos',
  23: 'a-b-tan',
  24: 'b-a-tan',
  25: 'angle-sum-exact',
  26: 'angle-b-exact',
  27: 'area-sin-a',
  28: 'area-sin-b',
  29: 'area-rs',
  30: 'alt-rel-h',
  31: 'area-ch',
  32: 'h-sq-pq',
  33: 'a-sq-cp',
  34: 'b-sq-cq',
  35: 'pq-c',
  36: 'radius-r',
  37: 'sin2-cos2',
  38: 'tan-sin-cos',
  39: 'c-a-rt2',
  40: 'a-c-rt2',
  41: 'long-a-rt3',
  42: 'c-2a',
  43: 'radius-R-cap'
};

export const RIGHT_TRIANGLE_GROUPED_PAGES: GroupedCalculatorPage[] = [
  {
    slug: 'right-triangle-side-calculator',
    url: '/right-triangle-side-calculator/',
    h1: 'Right Triangle Side Calculator',
    h2: [
      'Find Hypotenuse or Missing Side',
      'Using the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean Theorem</a>'
    ],
    includedToolIds: [1, 2, 3],
    intent: 'Find any missing side (a, b, or c).',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-side-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>-calculator'
    ],
    content: {
      intro:
        'Use this page when you know any two sides of a right triangle and need the third side quickly. It combines hypotenuse and missing-leg modes in one place so you can solve a, b, or c without switching pages.',
      method:
        'All side modes are based on the <a href="/pythagorean-theorem-calculator/" class="text-primary hover:underline">Pythagorean theorem</a>. The calculator applies c^2 = a^2 + b^2 for hypotenuse problems and rearranges it to c^2 - leg^2 for missing-leg problems.',
      useCases: [
        'Checking field <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> for construction, framing, and layout diagonals.',
        'Validating math homework and exam answers for right triangle side problems.',
        'Confirming CAD or drawing dimensions before cutting material.'
      ],
      inputTips: [
        'Keep all side inputs in the same unit before calculating.',
        'For missing-leg modes, the hypotenuse must be larger than the known leg.',
        'Round only at the final step to avoid accumulated precision errors.'
      ],
      proTip:
        'If your triangle is close to a known triple like 3-4-5 or 5-12-13, compare results as a quick sanity check.'
    }
  },
  {
    slug: 'right-triangle-measurements-calculator',
    url: '/right-triangle-measurements-calculator/',
    h1: 'Right Triangle Perimeter and Semiperimeter Calculator',
    h2: [
      'Calculate <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a> and <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">Semiperimeter</a>',
      'Right Triangle Measurement Formulas'
    ],
    includedToolIds: [5, 6],
    intent: 'Calculate right triangle perimeter and semiperimeter.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-calculator',
      'right-triangle-<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This page focuses on boundary-length measurements for right triangles. It helps you calculate <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a> and <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> for planning, estimation, and geometry workflows.',
      method:
        '<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">Perimeter</a> adds all three sides, while <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> is exactly half of that total. These measurements are especially useful as foundation values for advanced triangle formulas.',
      useCases: [
        'Estimating trim, edging, wiring, or border material around triangular shapes.',
        'Preparing <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> values for formulas that require s in later calculations.',
        'Comparing triangle sizes quickly when multiple design options are available.'
      ],
      inputTips: [
        'Enter all three <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a> in the same unit for reliable totals.',
        'If one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> is missing, solve it first in the side <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>, then return here.',
        '<a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">Semiperimeter</a> should always be exactly half of the computed <a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>.'
      ],
      proTip:
        'Use <a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a> as a checkpoint value before moving into <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-by-<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a> methods.'
    }
  },
  {
    slug: 'right-triangle-trig-ratios-calculator',
    url: '/right-triangle-trig-ratios-calculator/',
    h1: 'Trigonometric Ratios Calculator (Sin, Cos, Tan, Sec, Csc, Cot)',
    h2: [
      'Calculate All Trigonometric Ratios',
      'Right Triangle Trigonometry Formulas'
    ],
    includedToolIds: [7, 8, 9, 18, 19, 20],
    intent: 'Calculate trig ratios.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      '<a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a>-right-triangle-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'Use this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to get sine, cosine, tangent, secant, cosecant, and cotangent from right triangle <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> values. It is designed for quick ratio lookup and verification.',
      method:
        'Each ratio is computed from opposite, adjacent, and hypotenuse relationships around a selected acute <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>. Reciprocal ratios are included so you can move between direct and inverse forms easily.',
      useCases: [
        'Converting slope-style <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> information into trig ratio values.',
        'Checking trigonometry assignments without manually reworking each fraction.',
        'Preparing ratio values for <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-finding or <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-angle calculations.'
      ],
      inputTips: [
        'Make sure opposite and adjacent sides are assigned correctly for the chosen <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Ratios are unitless, so units cancel out as long as input units are consistent.',
        'For sine and cosine, the leg used in the numerator must be smaller than the hypotenuse.'
      ],
      proTip:
        'Compare tan(A) with sin(A)/cos(A) as a fast consistency check when debugging inputs.'
    }
  },
  {
    slug: 'right-triangle-angle-calculator',
    url: '/right-triangle-angle-calculator/',
    h1: 'Right Triangle Angle Calculator',
    h2: [
      'Find Angle A or Angle B',
      'Using Sine, Cosine and Tangent'
    ],
    includedToolIds: [10, 11, 12, 25, 26],
    intent: 'Find triangle angles.',
    relatedSlugs: [
      'right-triangle-trig-ratios-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-angle-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This page helps you find acute angles in a right triangle from <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> ratios or from the angle-sum rule. It is ideal when dimensions are known but direction or pitch is not.',
      method:
        'Inverse trigonometric functions (arcsin, arccos, arctan) return angle A from <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> relationships, while angle-sum modes convert between A and B with A + B = 90 degrees.',
      useCases: [
        'Finding roof pitch and incline angles from measured <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side lengths</a>.',
        'Solving geometry and trigonometry problems that require angle recovery.',
        'Converting <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-based <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> into directional values for design and drafting.'
      ],
      inputTips: [
        'Ensure the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> ratio is valid before applying inverse trig (for example, a/c must be between 0 and 1).',
        'Angles are output in degrees for practical interpretation.',
        'If one acute angle is known, compute the other directly using 90 degrees minus that value.'
      ],
      proTip:
        'When possible, compute the same angle with two ratio methods to confirm measurement quality.'
    }
  },
  {
    slug: 'right-triangle-side-from-angle-calculator',
    url: '/right-triangle-side-from-angle-calculator/',
    h1: 'Right Triangle Side Calculator Using Angle',
    h2: [
      'Find <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">Missing Side</a> Using Angles',
      'Trigonometric <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">Side</a> Formulas'
    ],
    includedToolIds: [21, 22, 23, 24],
    intent: 'Find side using angle.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-trig-ratios-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'Use this page when you know an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> and at least one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and need a <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">missing side</a>. It combines sine, cosine, and tangent side-solvers in one practical workflow.',
      method:
        'The <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> applies direct trig <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> formulas such as a = c * sin(A), b = c * cos(A), and tangent-based conversions between opposite and adjacent legs.',
      useCases: [
        'Estimating ladder reach, ramp rise, or run from a known <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>.',
        'Solving field sketches where only one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> and an <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> were captured.',
        'Converting angular design constraints into exact <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> dimensions.'
      ],
      inputTips: [
        'Enter <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> values in degrees, not radians.',
        'Pick the mode that matches the <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> you already know (hypotenuse vs leg).',
        'Avoid near-90-degree <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> inputs in tangent modes when precision is critical.'
      ],
      proTip:
        'After solving one <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>, use the side <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> to cross-check the full triangle.'
    }
  },
  {
    slug: 'right-triangle-area-calculator',
    url: '/right-triangle-area-calculator/',
    h1: 'Right Triangle Area Calculator',
    h2: [
      'Calculate Area Using Different Methods',
      'Area Formulas for Right Triangles'
    ],
    includedToolIds: [4, 27, 28, 29, 31],
    intent: 'Find area using any method.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>-calculator',
      'right-triangle-<a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-calculator',
      'right-triangle-<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This page lets you calculate right triangle area using whichever inputs you already have. It supports <a href="/right-triangle-area-from-legs-calculator/" class="text-primary hover:underline">area from legs</a>, <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-based area forms, <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>-<a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a>, and <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-based formulas.',
      method:
        'Multiple area identities are available so you can solve from different known values without rewriting the triangle manually. This is useful when data comes from mixed sources.',
      useCases: [
        'Estimating floor, panel, or coverage area for triangular sections.',
        'Comparing area outputs from different known inputs in engineering calculations.',
        'Validating area values from drawings, classroom problems, or site <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>.'
      ],
      inputTips: [
        'Use the mode that matches your known values instead of forcing conversions first.',
        'Area outputs are squared units, so verify your unit interpretation.',
        'If using <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-based area, ensure the angle is the included angle for that formula mode.'
      ],
      proTip:
        'For high confidence, compute area with two different modes and compare the results.'
    }
  },
  {
    slug: 'right-triangle-altitude-calculator',
    url: '/right-triangle-altitude-calculator/',
    h1: 'Right Triangle Height (Altitude) Calculator',
    h2: [
      'Find Altitude from Different Inputs',
      'Altitude Formulas and Relations'
    ],
    includedToolIds: [13, 30, 32],
    intent: 'Find triangle height.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-calculator',
      'right-triangle-<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-calculator',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> focuses on the altitude drawn from the right <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> to the hypotenuse. It is useful when you need the internal height rather than an outer <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> length.',
      method:
        'You can solve <a href="/right-triangle-altitude-from-sides-calculator/" class="text-primary hover:underline">altitude from sides</a> using h = ab/c or from <a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a> segments using h = sqrt(pq). Both are implemented as separate modes for different input scenarios.',
      useCases: [
        'Breaking a triangle into smaller geometric parts for analysis.',
        'Deriving perpendicular distances in layout and surveying tasks.',
        'Supporting <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> calculations that require hypotenuse-altitude form.'
      ],
      inputTips: [
        'If entering sides, verify the hypotenuse is the largest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.',
        'If entering projections, keep p and q non-negative and geometrically valid.',
        'Altitude in a right triangle should be less than both leg lengths.'
      ],
      proTip:
        'If you know p and q, also compute c = p + q to validate segment consistency.'
    }
  },
  {
    slug: 'right-triangle-projection-calculator',
    url: '/right-triangle-projection-calculator/',
    h1: 'Right Triangle Projection and Segment Calculator',
    h2: [
      'Find Hypotenuse Segments and Projections',
      'Projection Theorems'
    ],
    includedToolIds: [14, 15, 33, 34, 35],
    intent: 'Find projections and segment relations.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-calculator',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-calculator'
    ],
    content: {
      intro:
        'Use this page to solve hypotenuse segment and projection relationships (p and q). It is designed for projection theorems used in geometric proofs and derived-dimension problems.',
      method:
        'The modes apply projection identities such as a^2 = cp, b^2 = cq, and p + q = c, allowing you to move between legs, segments, and hypotenuse values efficiently.',
      useCases: [
        'Reconstructing missing dimensions when only diagonal segments are known.',
        'Checking projection-theorem steps in geometry coursework.',
        'Solving constrained design problems that are defined along a hypotenuse.'
      ],
      inputTips: [
        'Projection segments p and q should be measured along the same hypotenuse.',
        'Use non-negative values and check that segment totals make geometric sense.',
        'After solving a leg from projection, verify with Pythagorean <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> relations.'
      ],
      proTip:
        'Pair this <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> with <a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a> mode to verify h^2 = pq on the same triangle.'
    }
  },
  {
    slug: 'right-triangle-radius-calculator',
    url: '/right-triangle-radius-calculator/',
    h1: 'Right Triangle Inradius and Circumradius Calculator',
    h2: [
      'Calculate <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> and <a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">Circumradius</a>',
      'Circle Relations in Right Triangles'
    ],
    includedToolIds: [16, 17, 36, 43],
    intent: 'Find triangle radii.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>-calculator',
      'right-triangle-<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-calculator',
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This page calculates <a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a> and <a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">circumradius</a> values for right triangles. It is useful for circle-based geometry tasks and clearance or fit calculations.',
      method:
        '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> is solved from <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> relations (r = (a + b - c)/2), while <a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">circumradius</a> follows directly from the right-triangle rule R = c/2.',
      useCases: [
        'Designing inscribed or circumscribed circular features around triangular parts.',
        'Checking geometry solutions involving triangle-circle relationships.',
        'Deriving radius values needed for advanced <a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a> and construction formulas.'
      ],
      inputTips: [
        'Ensure the triangle is valid and the hypotenuse is the longest <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>.',
        '<a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">Circumradius</a> depends only on hypotenuse, so c accuracy is critical.',
        '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">Inradius</a> should always return a positive value for a valid right triangle.'
      ],
      proTip:
        'If radius values look unusual, re-check <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> validity with the side <a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a> first.'
    }
  },
  {
    slug: 'special-right-triangle-calculator',
    url: '/special-right-triangle-calculator/',
    h1: 'Special Right Triangle Calculator',
    h2: [
      '<a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90</a> and <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90 Triangle</a> Solver',
      'Quick <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">Side</a> Relationships'
    ],
    includedToolIds: [39, 40, 41, 42],
    intent: 'Solve special right triangles quickly.',
    relatedSlugs: [
      'right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-trig-ratios-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>',
      'right-triangle-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-<a href="/right-triangle-calculator/" class="text-primary hover:underline">calculator</a>'
    ],
    content: {
      intro:
        'This page is optimized for <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90</a> and <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90</a> triangles, where <a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a> ratios are fixed. It gives instant results without full general-triangle solving.',
      method:
        'Each mode applies special-triangle identities like c = a * sqrt(2), a = c / sqrt(2), long leg = short leg * sqrt(3), and c = 2a, depending on the triangle type.',
      useCases: [
        'Fast exam solving when triangle type is known from the <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> pattern.',
        'Quick sanity checks before using full trigonometric workflows.',
        'Drafting and fabrication tasks that commonly use standard <a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a> triangles.'
      ],
      inputTips: [
        'Confirm whether your triangle is <a href="/45-45-90-triangle-calculator/" class="text-primary hover:underline">45-45-90</a> or <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90</a> before selecting a mode.',
        'In <a href="/30-60-90-triangle-calculator/" class="text-primary hover:underline">30-60-90</a> problems, identify the short leg first to avoid ratio mistakes.',
        'Keep radicals exact during intermediate steps, then round at the end if needed.'
      ],
      proTip:
        'Use special-triangle output as a benchmark to check <a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a> from field data.'
    }
  }
];

export const RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE: GroupedCalculatorHubPage = {
  slug: 'right-triangle-calculator',
  url: '/right-triangle-calculator/',
  h1: 'Right Triangle Calculator',
  h2: [
    'Solve Any Right Triangle',
    'All-in-One Triangle Solver'
  ],
  purpose: 'Hub page linking to all grouped calculator pages.'
};

const FORMULA_BY_SLUG = new Map(
  RIGHT_TRIANGLE_FORMULAS.map((formula) => [formula.slug, formula])
);

export function getFormulaByToolId(toolId: number): RightTriangleFormula | undefined {
  const slug = TOOL_ID_TO_SLUG[toolId];
  if (!slug) return undefined;
  return FORMULA_BY_SLUG.get(slug);
}

export function getGroupedPageBySlug(slug: string): GroupedCalculatorPage | undefined {
  return RIGHT_TRIANGLE_GROUPED_PAGES.find((page) => page.slug === slug);
}

export function getGroupedPageFormulas(
  page: GroupedCalculatorPage
): RightTriangleFormula[] {
  return page.includedToolIds
    .map((toolId) => getFormulaByToolId(toolId))
    .filter((formula): formula is RightTriangleFormula => Boolean(formula));
}

export const GROUPED_PAGE_SLUGS = [
  RIGHT_TRIANGLE_CALCULATOR_HUB_PAGE.slug,
  ...RIGHT_TRIANGLE_GROUPED_PAGES.map((page) => page.slug)
];

export const LEGACY_FORMULA_REDIRECTS: Record<string, string> = {
  'pythagorean-theorem': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-calculator/',
  'leg-from-hypotenuse-and-other-leg': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-calculator/',
  'other-leg-from-hypotenuse-and-leg': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-calculator/',
  '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-from-legs': '/right-triangle-area-calculator/',
  '<a href="/right-triangle-perimeter-calculator/" class="text-primary hover:underline">perimeter</a>': '/right-triangle-<a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>-calculator/',
  '<a href="/right-triangle-semiperimeter-calculator/" class="text-primary hover:underline">semiperimeter</a>': '/right-triangle-<a href="/right-triangle-measurements-calculator/" class="text-primary hover:underline">measurements</a>-calculator/',
  'sine-ratio': '/right-triangle-trig-ratios-calculator/',
  'cosine-ratio': '/right-triangle-trig-ratios-calculator/',
  'tangent-ratio': '/right-triangle-trig-ratios-calculator/',
  '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-from-sine': '/right-triangle-angle-from-sine-calculator/',
  '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-from-cosine': '/right-triangle-angle-from-cosine-calculator/',
  '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-from-tangent': '/right-triangle-angle-from-tangent-calculator/',
  '<a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-to-hypotenuse': '/right-triangle-altitude-calculator/',
  '<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-of-a-on-hypotenuse': '/right-triangle-projection-calculator/',
  '<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-of-b-on-hypotenuse': '/right-triangle-projection-calculator/',
  '<a href="/right-triangle-inradius-calculator/" class="text-primary hover:underline">inradius</a>': '/right-triangle-<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-calculator/',
  '<a href="/right-triangle-circumradius-calculator/" class="text-primary hover:underline">circumradius</a>': '/right-triangle-<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-calculator/',
  'cotangent-exact': '/right-triangle-trig-ratios-calculator/',
  'secant-exact': '/right-triangle-trig-ratios-calculator/',
  'cosecant-exact': '/right-triangle-trig-ratios-calculator/',
  'a-c-sin': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-calculator/',
  'b-c-cos': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-calculator/',
  'a-b-tan': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-calculator/',
  'b-a-tan': '/right-triangle-<a href="/right-triangle-side-calculator/" class="text-primary hover:underline">side</a>-from-<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-calculator/',
  '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-sum-exact': '/right-triangle-missing-angle-calculator/',
  '<a href="/right-triangle-angle-calculator/" class="text-primary hover:underline">angle</a>-b-exact': '/right-triangle-missing-angle-calculator/',
  '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-sin-a': '/right-triangle-area-calculator/',
  '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-sin-b': '/right-triangle-area-calculator/',
  '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-rs': '/right-triangle-area-calculator/',
  'alt-rel-h': '/right-triangle-<a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-calculator/',
  '<a href="/right-triangle-area-calculator/" class="text-primary hover:underline">area</a>-ch': '/right-triangle-area-calculator/',
  'h-sq-pq': '/right-triangle-<a href="/right-triangle-altitude-calculator/" class="text-primary hover:underline">altitude</a>-calculator/',
  'a-sq-cp': '/right-triangle-<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-calculator/',
  'b-sq-cq': '/right-triangle-<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-calculator/',
  'pq-c': '/right-triangle-<a href="/right-triangle-projection-calculator/" class="text-primary hover:underline">projection</a>-calculator/',
  '<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-r': '/right-triangle-radius-calculator/',
  'sin2-cos2': '/right-triangle-trig-ratios-calculator/',
  'tan-sin-cos': '/right-triangle-trig-ratios-calculator/',
  'c-a-rt2': '/<a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a>-right-triangle-calculator/',
  'a-c-rt2': '/<a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a>-right-triangle-calculator/',
  'long-a-rt3': '/<a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a>-right-triangle-calculator/',
  'c-2a': '/<a href="/special-right-triangle-calculator/" class="text-primary hover:underline">special</a>-right-triangle-calculator/',
  '<a href="/right-triangle-radius-calculator/" class="text-primary hover:underline">radius</a>-R-cap': '/right-triangle-radius-calculator/'
};

export function getLegacyRedirectUrlBySlug(slug: string): string | undefined {
  return LEGACY_FORMULA_REDIRECTS[slug];
}

