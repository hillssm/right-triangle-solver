import type { FormulaCalculatorField } from 'src/data/rightTriangleFormulas';
import { DEFAULT_LOCALE, type Locale } from 'theme/i18n/locales';

type TriangleSide = 'a' | 'b' | 'c';
type TriangleAngle = 'A' | 'B';

export type FocusedAngleCalculatorPage = {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  formulaSlug: string;
  headerSummary: string;
  calculator: {
    heading: string;
    outputLabel: string;
    fields: FormulaCalculatorField[];
  };
  howItWorks: {
    h2: string;
    paragraphs: string[];
    cards: {
      label: string;
      value: string;
    }[];
  };
  formula: {
    h2: string;
    display: string;
    paragraphs: string[];
  };
  diagram: {
    h2: string;
    intro: string;
    activeSides: TriangleSide[];
    activeAngles: TriangleAngle[];
    focusLabel: string;
    focusDetail: string;
    notes: string[];
  };
  howToSteps: string[];
  example: {
    h2: string;
    intro: string;
    steps: string[];
    answer: string;
  };
  resultMeaning: string[];
  whenToUse: {
    intro: string;
    items: string[];
  };
  commonMistakes: {
    intro: string;
    items: string[];
  };
  relatedLinks: {
    href: string;
    label: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const FOCUSED_ANGLE_CALCULATOR_PAGES: FocusedAngleCalculatorPage[] = [
  {
  slug: "right-triangle-angle-from-sine-calculator",
  url: "/right-triangle-angle-from-sine-calculator/",
  h1: "Right Triangle Angle From Sine Calculator",
  metaTitle: "Right Triangle Angle From Sine Calculator | Find A = arcsin(a / c)",
  metaDescription: "Use this right triangle angle from sine calculator to find angle A from opposite side a and hypotenuse c with formula, steps, and examples.",
  formulaSlug: "angle-from-sine",
  headerSummary: "Find angle A instantly by entering the opposite side and hypotenuse — this calculator applies the inverse sine formula for you.",
  calculator: {
    heading: "Calculate Angle From Sine",
    outputLabel: "Angle A",
    fields: [
      {
        key: "a",
        label: "Opposite leg a",
        min: 0
      },
      {
        key: "c",
        label: "Hypotenuse c",
        min: 0
      }
    ]
  },
  howItWorks: {
    h2: "What This Inverse Sine Calculator Does",
    paragraphs: [
      "The sine ratio compares the opposite side to the hypotenuse. This calculator reverses that ratio using arcsin to give you the exact angle in degrees.",
      "Just enter opposite side a and hypotenuse c. The hypotenuse must be the longest side — if it is shorter than a, the triangle cannot exist."
    ],
    cards: [
      {
        label: "Known values",
        value: "Opposite side a and hypotenuse c"
      },
      {
        label: "Finds",
        value: "Angle A in degrees"
      },
      {
        label: "Formula",
        value: "A = arcsin(a / c)"
      },
      {
        label: "Validation",
        value: "c must be greater than a (hypotenuse is always longest)"
      }
    ]
  },
  formula: {
    h2: "Angle From Sine Formula",
    display: "A = \\arcsin\\left(\\frac{a}{c}\\right)",
    paragraphs: [
      "Divide the opposite side by the hypotenuse to get a decimal between 0 and 1. Then apply the inverse sine function (arcsin) to convert that decimal into the angle in degrees."
    ]
  },
  diagram: {
    h2: "Triangle Diagram",
    intro: "For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.",
    activeSides: [
      "a",
      "c"
    ],
    activeAngles: [
      "A"
    ],
    focusLabel: "A = arcsin(a / c)",
    focusDetail: "This method uses the sine ratio because sine compares the opposite side to the hypotenuse.",
    notes: [
      "c is always the hypotenuse.",
      "Never call c a leg.",
      "a is the opposite side."
    ]
  },
  howToSteps: [
    "Identify the side directly across from angle A — that is your opposite side a.",
    "Identify the hypotenuse c, the longest side opposite the 90° corner.",
    "Enter both values into the fields above.",
    "Press Calculate to see angle A in degrees.",
    "Verify that a / c is less than 1 — otherwise the inputs are invalid."
  ],
  example: {
    h2: "Step-by-Step Example",
    intro: "Let's say you have a triangle where opposite side a is 3 and hypotenuse c is 5.",
    steps: [
      "A = arcsin(a / c)",
      "A = arcsin(3 / 5)",
      "A = arcsin(0.6)",
      "A ≈ 36.87°"
    ],
    answer: "The final result tells you the exact degree measurement of angle A. In our example, the angle opens to roughly 36.87 degrees."
  },
  resultMeaning: [
    "The output is the acute angle whose sine equals a / c. A larger opposite side relative to the hypotenuse produces a larger angle.",
    "For example, if a is exactly half of c, then sin(A) = 0.5 and angle A is 30° — one of the most common special-triangle values."
  ],
  whenToUse: {
    intro: "Choose the sine method whenever you know the opposite side and hypotenuse but not the adjacent side.",
    items: [
      "Physics problems — finding launch angles or incline angles from height and slant distance.",
      "Carpentry and roofing — calculating pitch angle from rafter rise and rafter length.",
      "Trig homework — solving right-triangle problems where only a and c are given.",
      "Navigation — determining bearing angles from vertical displacement and straight-line distance."
    ]
  },
  commonMistakes: {
    intro: "Avoid these common mistakes:",
    items: [
      "Using the adjacent side instead of the opposite side.",
      "Forgetting that side c must always be the hypotenuse.",
      "Entering a hypotenuse that is shorter than the opposite side.",
      "Using sin instead of arcsin on a keypad."
    ]
  },
  relatedLinks: [
    {
      href: "/right-triangle-angle-calculator/",
      label: "Right Triangle Angle Calculator"
    },
    {
      href: "/right-triangle-angle-from-cosine-calculator/",
      label: "Right Triangle Angle From Cosine Calculator"
    },
    {
      href: "/right-triangle-angle-from-tangent-calculator/",
      label: "Right Triangle Angle From Tangent Calculator"
    },
    {
      href: "/right-triangle-missing-angle-calculator/",
      label: "Right Triangle Missing Angle Calculator"
    },
    {
      href: "/right-triangle-trig-ratios-calculator/",
      label: "Right Triangle Trig Ratios Calculator"
    },
    {
      href: "/sine-ratio-calculator/",
      label: "Sine Ratio Calculator"
    }
  ],
  faqs: [
    {
      question: "What does the arcsin formula actually do?",
      answer: "Arcsin takes a ratio of two sides and reverses the math to tell you the specific angle that created that ratio."
    },
    {
      question: "What does the final result mean?",
      answer: "The result gives you the exact degree measurement of angle A. This tells you how sharply the hypotenuse angles away from the base."
    },
    {
      question: "Why do I get an error if my opposite side is bigger than my hypotenuse?",
      answer: "In a right triangle, the hypotenuse must always be the longest side. If side a is larger than side c, the triangle is physically impossible to draw."
    },
    {
      question: "Do I need to know the adjacent side to use this method?",
      answer: "No, you only need the opposite side and the hypotenuse. The adjacent side is completely ignored here."
    },
    {
      question: "Is inverse sine the same thing as arcsin?",
      answer: "Yes, they are two different names for the exact same mathematical operation. You might see it written as sin⁻¹ on a handheld calculator."
    }
  ]
},
  {
  slug: "right-triangle-angle-from-cosine-calculator",
  url: "/right-triangle-angle-from-cosine-calculator/",
  h1: "Right Triangle Angle From Cosine Calculator",
  metaTitle: "Right Triangle Angle From Cosine Calculator | Find A = arccos(b / c)",
  metaDescription: "Use this right triangle angle from cosine calculator to find angle A from adjacent side b and hypotenuse c with formula, steps, and examples.",
  formulaSlug: "angle-from-cosine",
  headerSummary: "Enter the adjacent side and hypotenuse to find angle A using the inverse cosine (arccos) formula.",
  calculator: {
    heading: "Calculate Angle From Cosine",
    outputLabel: "Angle A",
    fields: [
      {
        key: "b",
        label: "Adjacent leg b",
        min: 0
      },
      {
        key: "c",
        label: "Hypotenuse c",
        min: 0
      }
    ]
  },
  howItWorks: {
    h2: "What This Inverse Cosine Calculator Does",
    paragraphs: [
      "Cosine links the adjacent side to the hypotenuse. This calculator reverses that link using arccos so you get the angle without needing the opposite side at all.",
      "Type in adjacent side b and hypotenuse c. The tool divides b by c, applies inverse cosine, and returns angle A in degrees."
    ],
    cards: [
      {
        label: "Known values",
        value: "Adjacent side b and hypotenuse c"
      },
      {
        label: "Finds",
        value: "Angle A in degrees"
      },
      {
        label: "Formula",
        value: "A = arccos(b / c)"
      },
      {
        label: "Validation",
        value: "c must be greater than b (hypotenuse is always longest)"
      }
    ]
  },
  formula: {
    h2: "Angle From Cosine Formula",
    display: "A = \\arccos\\left(\\frac{b}{c}\\right)",
    paragraphs: [
      "Divide the adjacent side by the hypotenuse to get a decimal between 0 and 1. Apply inverse cosine (arccos) to convert that decimal into the angle. As the ratio gets closer to 1, angle A gets closer to 0°."
    ]
  },
  diagram: {
    h2: "Triangle Diagram",
    intro: "For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.",
    activeSides: [
      "b",
      "c"
    ],
    activeAngles: [
      "A"
    ],
    focusLabel: "A = arccos(b / c)",
    focusDetail: "This method uses the cosine ratio because cosine compares the adjacent side to the hypotenuse.",
    notes: [
      "c is always the hypotenuse.",
      "Never call c a leg.",
      "b is the adjacent side."
    ]
  },
  howToSteps: [
    "Identify the adjacent side b — the leg that physically touches angle A.",
    "Identify the hypotenuse c — the longest side, directly across from the right angle.",
    "Enter both values in the fields above.",
    "Press Calculate to find angle A in degrees.",
    "Double-check that b is shorter than c before submitting."
  ],
  example: {
    h2: "Step-by-Step Example",
    intro: "Imagine you are working with an adjacent side b of 4 and a hypotenuse c of 5.",
    steps: [
      "A = arccos(b / c)",
      "A = arccos(4 / 5)",
      "A = arccos(0.8)",
      "A ≈ 36.87°"
    ],
    answer: "Angle A is approximately 36.87 degrees."
  },
  resultMeaning: [
    "The output is the acute angle whose cosine equals b / c. A shorter adjacent side compared to the hypotenuse means a wider angle.",
    "If b is exactly half of c, the ratio is 0.5 and angle A is 60° — a well-known value from the 30-60-90 special triangle."
  ],
  whenToUse: {
    intro: "Pick the cosine method when you have the adjacent leg and the hypotenuse but the opposite side is unknown.",
    items: [
      "Surveying — finding the angle of a ground slope from horizontal distance and slant distance.",
      "Shadow problems — calculating the sun elevation angle from shadow length and light-ray distance.",
      "Trig homework — solving for an angle when only b and c appear in the problem.",
      "Engineering — determining deflection angles from base measurements and diagonal bracing."
    ]
  },
  commonMistakes: {
    intro: "Avoid these common mistakes:",
    items: [
      "Using the opposite side instead of the adjacent side.",
      "Using arccos with the wrong side ratio.",
      "Entering b greater than c.",
      "Confusing arccos with regular cosine on a calculator keypad."
    ]
  },
  relatedLinks: [
    {
      href: "/right-triangle-angle-calculator/",
      label: "Right Triangle Angle Calculator"
    },
    {
      href: "/right-triangle-angle-from-sine-calculator/",
      label: "Right Triangle Angle From Sine Calculator"
    },
    {
      href: "/right-triangle-angle-from-tangent-calculator/",
      label: "Right Triangle Angle From Tangent Calculator"
    },
    {
      href: "/right-triangle-missing-angle-calculator/",
      label: "Right Triangle Missing Angle Calculator"
    },
    {
      href: "/right-triangle-trig-ratios-calculator/",
      label: "Right Triangle Trig Ratios Calculator"
    },
    {
      href: "/cosine-ratio-calculator/",
      label: "Cosine Ratio Calculator"
    }
  ],
  faqs: [
    {
      question: "What does the formula A = arccos(b / c) actually mean?",
      answer: "It means you are taking the length of the adjacent side, dividing it by the hypotenuse, and working backward from that decimal to find the original angle."
    },
    {
      question: "What does the degree result mean in real life?",
      answer: "The result is the actual angle you would measure with a protractor. It defines the exact tilt or slope where the adjacent side meets the hypotenuse."
    },
    {
      question: "Why am I getting a math error?",
      answer: "You likely entered a value for b that is larger than c. The adjacent side can never be longer than the hypotenuse in a right triangle."
    },
    {
      question: "Can I use this if I don't know the opposite side?",
      answer: "Absolutely. This calculation is designed specifically to work without needing the opposite side at all."
    },
    {
      question: "What happens if the adjacent side is exactly half the hypotenuse?",
      answer: "If b is exactly half of c, your ratio is 0.5. The arccos of 0.5 is exactly 60°, which is a very common special triangle."
    }
  ]
},
  {
  slug: "right-triangle-angle-from-tangent-calculator",
  url: "/right-triangle-angle-from-tangent-calculator/",
  h1: "Right Triangle Angle From Tangent Calculator",
  metaTitle: "Right Triangle Angle From Tangent Calculator | Find A = arctan(a / b)",
  metaDescription: "Use this right triangle angle from tangent calculator to find angle A from opposite side a and adjacent side b with formula, steps, and examples.",
  formulaSlug: "angle-from-tangent",
  headerSummary: "Enter both legs of a right triangle to find angle A using the inverse tangent (arctan) formula — no hypotenuse needed.",
  calculator: {
    heading: "Calculate Angle From Tangent",
    outputLabel: "Angle A",
    fields: [
      {
        key: "a",
        label: "Opposite leg a",
        min: 0
      },
      {
        key: "b",
        label: "Adjacent leg b",
        min: 0
      }
    ]
  },
  howItWorks: {
    h2: "What This Inverse Tangent Calculator Does",
    paragraphs: [
      "Tangent is the ratio of the opposite leg to the adjacent leg. This calculator reverses that ratio using arctan to find the exact angle — no hypotenuse measurement required.",
      "Enter opposite side a and adjacent side b. The tool divides a by b, applies inverse tangent, and returns angle A in degrees."
    ],
    cards: [
      {
        label: "Known values",
        value: "Opposite side a and adjacent side b"
      },
      {
        label: "Finds",
        value: "Angle A in degrees"
      },
      {
        label: "Formula",
        value: "A = arctan(a / b)"
      },
      {
        label: "Validation",
        value: "Both a and b must be positive (no zeros)"
      }
    ]
  },
  formula: {
    h2: "Angle From Tangent Formula",
    display: "A = \\arctan\\left(\\frac{a}{b}\\right)",
    paragraphs: [
      "Divide the opposite leg by the adjacent leg. The result can be any positive number (it is not limited to 0–1 like sine or cosine). Apply inverse tangent (arctan) to convert that ratio into angle A."
    ]
  },
  diagram: {
    h2: "Triangle Diagram",
    intro: "For angle A, side a is opposite, side b is adjacent, and side c is the hypotenuse.",
    activeSides: [
      "a",
      "b"
    ],
    activeAngles: [
      "A"
    ],
    focusLabel: "A = arctan(a / b)",
    focusDetail: "This method uses the tangent ratio because tangent compares the opposite side to the adjacent side.",
    notes: [
      "c is always the hypotenuse.",
      "Never call c a leg.",
      "The hypotenuse is not needed for this calculation."
    ]
  },
  howToSteps: [
    "Identify the opposite side a — the leg directly across from angle A.",
    "Identify the adjacent side b — the leg that touches angle A at its vertex.",
    "Enter both leg lengths in the fields above.",
    "Press Calculate to see angle A in degrees.",
    "If a equals b, the angle should be exactly 45° — a quick sanity check."
  ],
  example: {
    h2: "Step-by-Step Example",
    intro: "Let's assume your opposite side a is 3 and your adjacent side b is 4.",
    steps: [
      "A = arctan(a / b)",
      "A = arctan(3 / 4)",
      "A = arctan(0.75)",
      "A ≈ 36.87°"
    ],
    answer: "Angle A is approximately 36.87 degrees."
  },
  resultMeaning: [
    "The output is the acute angle whose tangent equals a / b. When the opposite leg is longer than the adjacent leg, angle A exceeds 45°.",
    "When the two legs are equal, tan(A) = 1 and angle A is exactly 45° — the hallmark of an isosceles right triangle."
  ],
  whenToUse: {
    intro: "Choose the tangent method when you know both legs but have no hypotenuse measurement.",
    items: [
      "Slope and grade — calculating road or ramp angle from rise and run.",
      "Woodworking — finding miter or bevel angles from vertical and horizontal cuts.",
      "Architecture — determining pitch angle from wall height and floor depth.",
      "Quick field checks — verifying angle values when only the two legs are accessible."
    ]
  },
  commonMistakes: {
    intro: "Avoid these common mistakes:",
    items: [
      "Using hypotenuse in the ratio.",
      "Switching a and b.",
      "Using tan instead of arctan.",
      "Trying to calculate with a side length of zero."
    ]
  },
  relatedLinks: [
    {
      href: "/right-triangle-angle-calculator/",
      label: "Right Triangle Angle Calculator"
    },
    {
      href: "/right-triangle-angle-from-sine-calculator/",
      label: "Right Triangle Angle From Sine Calculator"
    },
    {
      href: "/right-triangle-angle-from-cosine-calculator/",
      label: "Right Triangle Angle From Cosine Calculator"
    },
    {
      href: "/right-triangle-missing-angle-calculator/",
      label: "Right Triangle Missing Angle Calculator"
    },
    {
      href: "/right-triangle-trig-ratios-calculator/",
      label: "Right Triangle Trig Ratios Calculator"
    },
    {
      href: "/tangent-ratio-calculator/",
      label: "Tangent Ratio Calculator"
    }
  ],
  faqs: [
    {
      question: "How does the arctan formula work?",
      answer: "The arctan formula takes the raw decimal ratio of your opposite side divided by your adjacent side and translates it back into a precise degree angle."
    },
    {
      question: "What does the calculated angle mean?",
      answer: "The result tells you exactly how steep the angle is in degrees. A larger number means a steeper slope, while a smaller number means a gentler rise."
    },
    {
      question: "Does it matter which leg is a and which is b?",
      answer: "Yes, it is critical. Side a must be the leg completely opposite your angle, and side b must be the leg touching it. If you swap them, you will find angle B instead."
    },
    {
      question: "Can the opposite side be larger than the adjacent side?",
      answer: "Absolutely. If the opposite side is larger, the resulting angle will simply be greater than 45 degrees."
    },
    {
      question: "Why don't I need the hypotenuse for this?",
      answer: "The tangent ratio is specifically defined by the two perpendicular legs. The hypotenuse is locked in place once the legs are set, so you don't need its measurement."
    }
  ]
},
  {
  slug: "right-triangle-missing-angle-calculator",
  url: "/right-triangle-missing-angle-calculator/",
  h1: "Right Triangle Missing Angle Calculator",
  metaTitle: "Right Triangle Missing Angle Calculator | Find the Missing Acute Angle",
  metaDescription: "Use this right triangle missing angle calculator to find the other acute angle using A + B = 90° with formula, steps, and examples.",
  formulaSlug: "angle-sum-exact",
  headerSummary: "Enter one acute angle and instantly find the other — the two acute angles in every right triangle always add up to 90°.",
  calculator: {
    heading: "Calculate Missing Angle",
    outputLabel: "Angle B",
    fields: [
      {
        key: "A",
        label: "Angle A (deg)",
        min: 0,
        unit: "deg"
      }
    ]
  },
  howItWorks: {
    h2: "What This Missing Angle Calculator Does",
    paragraphs: [
      "Every right triangle has one fixed 90° angle, so the two remaining acute angles must share exactly 90°. This calculator subtracts the angle you know from 90° to reveal the one you don't.",
      "No side lengths are needed — just type in the known acute angle (between 0° and 90°) and the complementary angle appears instantly."
    ],
    cards: [
      {
        label: "Known values",
        value: "One acute angle (A or B)"
      },
      {
        label: "Finds",
        value: "The other acute angle in degrees"
      },
      {
        label: "Formula",
        value: "B = 90° − A"
      },
      {
        label: "Validation",
        value: "Input must be between 0° and 90° (exclusive)"
      }
    ]
  },
  formula: {
    h2: "Complementary Angle Formulas",
    display: "B = 90^\\circ - A",
    paragraphs: [
      "A right triangle’s three angles total 180°. One is fixed at 90°, so the remaining two acute angles share 90°. Knowing either one instantly gives the other.",
      "A + B = 90°",
      "A = 90° − B"
    ]
  },
  diagram: {
    h2: "Triangle Diagram",
    intro: "Angle A and Angle B are the two acute angles. Together, they add up to the 90° angle at corner C, which means A + B = 90°.",
    activeSides: [],
    activeAngles: [
      "A",
      "B"
    ],
    focusLabel: "A + B = 90°",
    focusDetail: "In every right triangle, the two acute angles always add up to 90° because the third angle is already 90°.",
    notes: [
      "The 90° angle is at corner C.",
      "Both acute angles must be less than 90°."
    ]
  },
  howToSteps: [
    "Enter the acute angle you already know (must be between 0° and 90°).",
    "Press Calculate.",
    "Read the complementary acute angle from the result.",
    "Verify by adding both angles — they must equal exactly 90°."
  ],
  example: {
    h2: "Step-by-Step Example",
    intro: "Let's assume you know that angle A is exactly 36.87°.",
    steps: [
      "B = 90° − A",
      "B = 90° − 36.87°",
      "B = 53.13°"
    ],
    answer: "The missing angle B is 53.13 degrees."
  },
  resultMeaning: [
    "The output is the other acute angle in the same right triangle. A small input produces a large complement, and vice versa.",
    "Both acute angles together always account for the 90° that the right angle leaves over. Neither one can equal 0° or 90°."
  ],
  whenToUse: {
    intro: "Use this calculator as the final step after finding one angle through sine, cosine, or tangent.",
    items: [
      "Completing a triangle diagram for homework, drafting, or CAD layouts.",
      "Checking that your trig-calculated angle and its complement add to 90°.",
      "Finding the second angle for construction cuts where both miter angles matter."
    ]
  },
  commonMistakes: {
    intro: "Avoid these common mistakes:",
    items: [
      "Subtracting from 180° instead of 90°.",
      "Entering the 90° angle.",
      "Using an angle bigger than 90°.",
      "Forgetting that only the two acute angles add to 90°."
    ]
  },
  relatedLinks: [
    {
      href: "/right-triangle-angle-calculator/",
      label: "Right Triangle Angle Calculator"
    },
    {
      href: "/right-triangle-angle-from-sine-calculator/",
      label: "Right Triangle Angle From Sine Calculator"
    },
    {
      href: "/right-triangle-angle-from-cosine-calculator/",
      label: "Right Triangle Angle From Cosine Calculator"
    },
    {
      href: "/right-triangle-angle-from-tangent-calculator/",
      label: "Right Triangle Angle From Tangent Calculator"
    }
  ],
  faqs: [
    {
      question: "What does the formula B = 90° - A actually do?",
      answer: "This simple subtraction formula takes the total available 90 degrees shared by the acute corners and removes the angle you already know, leaving exactly what is left for the missing corner."
    },
    {
      question: "What does the final missing angle result mean?",
      answer: "It represents the exact degree measurement of the final empty corner in your right triangle. Finding this number completes the triangle so all three corners add perfectly to 180 degrees."
    },
    {
      question: "Why do the two angles always add up to 90 degrees?",
      answer: "Every triangle holds exactly 180 degrees. Since a right triangle always has one 90-degree corner, that leaves exactly 90 degrees left over to be shared between the remaining two corners."
    },
    {
      question: "Can one of the acute angles be exactly 90 degrees?",
      answer: "No. If one of them was 90 degrees, the other would have to be 0 degrees, which means the triangle would flatten into a single straight line."
    },
    {
      question: "Do I need to know the lengths of the sides to find the missing angle?",
      answer: "Not at all. As long as you know one of the acute angles, the sides don't matter for this specific calculation."
    }
  ]
}
];

export const FOCUSED_ANGLE_CALCULATOR_PAGE_SLUGS =
  FOCUSED_ANGLE_CALCULATOR_PAGES.map((page) => page.slug);

export const FOCUSED_ANGLE_LEGACY_REDIRECTS: Record<string, string> = {
  'angle-from-sine': '/right-triangle-angle-from-sine-calculator/',
  'angle-from-cosine': '/right-triangle-angle-from-cosine-calculator/',
  'angle-from-tangent': '/right-triangle-angle-from-tangent-calculator/',
  'angle-sum-exact': '/right-triangle-missing-angle-calculator/',
  'angle-b-exact': '/right-triangle-missing-angle-calculator/'
};

export const FOCUSED_ANGLE_LEGACY_REDIRECT_SLUGS = Object.keys(
  FOCUSED_ANGLE_LEGACY_REDIRECTS
);

export function getFocusedAngleLegacyRedirect(slug: string): string | undefined {
  return FOCUSED_ANGLE_LEGACY_REDIRECTS[slug];
}

export function getFocusedAngleCalculatorPage(
  slug: string,
  locale: Locale = DEFAULT_LOCALE
): FocusedAngleCalculatorPage | undefined {
  void locale;
  return FOCUSED_ANGLE_CALCULATOR_PAGES.find((page) => page.slug === slug);
}
