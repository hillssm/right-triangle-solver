export type FormulaCalculatorField = {
  key: string;
  label: string;
  unit?: string;
  min?: number;
};

export type FormulaCalculatorConfig = {
  kind:
    | 'pythagorean_c'
    | 'leg_from_ac'
    | 'leg_from_bc'
    | 'area_legs'
    | 'perimeter'
    | 'semiperimeter'
    | 'sine'
    | 'cosine'
    | 'tangent'
    | 'angle_asin'
    | 'angle_acos'
    | 'angle_atan'
    | 'altitude'
    | 'projection_p'
    | 'projection_q'
    | 'inradius'
    | 'circumradius';
  outputLabel: string;
  outputUnit?: string;
  fields: FormulaCalculatorField[];
};

export type RightTriangleFormula = {
  slug: string;
  title: string;
  category:
    | 'Core Side Relations'
    | 'Area and Perimeter'
    | 'Trigonometric Ratios'
    | 'Inverse Angle Formulas'
    | 'Derived Geometry';
  expression: string;
  description: string;
  variables: string[];
  notes: string[];
  calculator: FormulaCalculatorConfig;
};

export const RIGHT_TRIANGLE_FORMULAS: RightTriangleFormula[] = [
  {
    slug: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    category: 'Core Side Relations',
    expression: 'c = sqrt(a² + b²)',
    description:
      'Find the hypotenuse when both legs are known. This is the primary identity for every right triangle.',
    variables: ['a = leg opposite angle A', 'b = leg opposite angle B', 'c = hypotenuse'],
    notes: [
      'Works only for right triangles.',
      'Equivalent base identity: a² + b² = c².'
    ],
    calculator: {
      kind: 'pythagorean_c',
      outputLabel: 'Hypotenuse c',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    }
  },
  {
    slug: 'leg-from-hypotenuse-and-other-leg',
    title: 'Missing Leg From c and a',
    category: 'Core Side Relations',
    expression: 'b = sqrt(c² - a²)',
    description:
      'Find leg b when hypotenuse c and the other leg a are known.',
    variables: ['a = known leg', 'b = unknown leg', 'c = hypotenuse'],
    notes: [
      'Require c > a.',
      'If c <= a, the triangle is invalid.'
    ],
    calculator: {
      kind: 'leg_from_ac',
      outputLabel: 'Leg b',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'other-leg-from-hypotenuse-and-leg',
    title: 'Missing Leg From c and b',
    category: 'Core Side Relations',
    expression: 'a = sqrt(c² - b²)',
    description:
      'Find leg a when hypotenuse c and leg b are known.',
    variables: ['a = unknown leg', 'b = known leg', 'c = hypotenuse'],
    notes: [
      'Require c > b.',
      'If c <= b, there is no valid right triangle.'
    ],
    calculator: {
      kind: 'leg_from_bc',
      outputLabel: 'Leg a',
      outputUnit: 'units',
      fields: [
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'area-from-legs',
    title: 'Area Formula',
    category: 'Area and Perimeter',
    expression: 'Area = (a * b) / 2',
    description:
      'Compute the area of a right triangle using its perpendicular legs.',
    variables: ['a = leg', 'b = leg'],
    notes: [
      'This works because legs are perpendicular.',
      'Units are squared.'
    ],
    calculator: {
      kind: 'area_legs',
      outputLabel: 'Area',
      outputUnit: 'square units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    }
  },
  {
    slug: 'perimeter',
    title: 'Perimeter Formula',
    category: 'Area and Perimeter',
    expression: 'P = a + b + c',
    description:
      'Sum all three sides to get the total boundary length.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse'],
    notes: [
      'All sides must be positive.',
      'For right triangles, c is always the longest side.'
    ],
    calculator: {
      kind: 'perimeter',
      outputLabel: 'Perimeter P',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'semiperimeter',
    title: 'Semiperimeter',
    category: 'Area and Perimeter',
    expression: 's = (a + b + c) / 2',
    description:
      'Half of the perimeter. Useful in many geometric identities.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 's = semiperimeter'],
    notes: [
      'Used in inradius relation: Area = r * s.',
      'Often used in triangle geometry proofs.'
    ],
    calculator: {
      kind: 'semiperimeter',
      outputLabel: 'Semiperimeter s',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'sine-ratio',
    title: 'Sine Ratio',
    category: 'Trigonometric Ratios',
    expression: 'sin(A) = a / c',
    description:
      'For angle A, sine equals opposite over hypotenuse.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: [
      'Output is dimensionless.',
      'Valid range for right triangles: 0 < sin(A) < 1.'
    ],
    calculator: {
      kind: 'sine',
      outputLabel: 'sin(A)',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'cosine-ratio',
    title: 'Cosine Ratio',
    category: 'Trigonometric Ratios',
    expression: 'cos(A) = b / c',
    description:
      'For angle A, cosine equals adjacent over hypotenuse.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: [
      'Output is dimensionless.',
      'Require c > b > 0.'
    ],
    calculator: {
      kind: 'cosine',
      outputLabel: 'cos(A)',
      fields: [
        { key: 'b', label: 'Adjacent leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'tangent-ratio',
    title: 'Tangent Ratio',
    category: 'Trigonometric Ratios',
    expression: 'tan(A) = a / b',
    description:
      'For angle A, tangent equals opposite over adjacent.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: [
      'Output is dimensionless.',
      'Require b > 0.'
    ],
    calculator: {
      kind: 'tangent',
      outputLabel: 'tan(A)',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'b', label: 'Adjacent leg b', min: 0 }
      ]
    }
  },
  {
    slug: 'angle-from-sine',
    title: 'Angle From Sine',
    category: 'Inverse Angle Formulas',
    expression: 'A = asin(a / c)',
    description:
      'Recover acute angle A when opposite side and hypotenuse are known.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: [
      'Output is in degrees here.',
      'Ratio a/c must be in (0, 1).'
    ],
    calculator: {
      kind: 'angle_asin',
      outputLabel: 'Angle A',
      outputUnit: 'degrees',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'angle-from-cosine',
    title: 'Angle From Cosine',
    category: 'Inverse Angle Formulas',
    expression: 'A = acos(b / c)',
    description:
      'Recover acute angle A when adjacent side and hypotenuse are known.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: [
      'Output is in degrees.',
      'Ratio b/c must be in (0, 1).'
    ],
    calculator: {
      kind: 'angle_acos',
      outputLabel: 'Angle A',
      outputUnit: 'degrees',
      fields: [
        { key: 'b', label: 'Adjacent leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'angle-from-tangent',
    title: 'Angle From Tangent',
    category: 'Inverse Angle Formulas',
    expression: 'A = atan(a / b)',
    description:
      'Recover acute angle A from opposite and adjacent legs.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: [
      'Output is in degrees.',
      'Require b > 0.'
    ],
    calculator: {
      kind: 'angle_atan',
      outputLabel: 'Angle A',
      outputUnit: 'degrees',
      fields: [
        { key: 'a', label: 'Opposite leg a', min: 0 },
        { key: 'b', label: 'Adjacent leg b', min: 0 }
      ]
    }
  },
  {
    slug: 'altitude-to-hypotenuse',
    title: 'Altitude to Hypotenuse',
    category: 'Derived Geometry',
    expression: 'h = (a * b) / c',
    description:
      'Compute altitude from the right-angle vertex to the hypotenuse.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'h = altitude'],
    notes: [
      'Equivalent identity: h² = p * q where p and q are hypotenuse segments.',
      'Use c = sqrt(a² + b²) when needed.'
    ],
    calculator: {
      kind: 'altitude',
      outputLabel: 'Altitude h',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'projection-of-a-on-hypotenuse',
    title: 'Hypotenuse Segment p',
    category: 'Derived Geometry',
    expression: 'p = a² / c',
    description:
      'Projection of leg a onto hypotenuse c.',
    variables: ['a = leg', 'c = hypotenuse', 'p = projection segment'],
    notes: [
      'Together with q, satisfies p + q = c.',
      'Requires c > 0.'
    ],
    calculator: {
      kind: 'projection_p',
      outputLabel: 'Projection p',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'projection-of-b-on-hypotenuse',
    title: 'Hypotenuse Segment q',
    category: 'Derived Geometry',
    expression: 'q = b² / c',
    description:
      'Projection of leg b onto hypotenuse c.',
    variables: ['b = leg', 'c = hypotenuse', 'q = projection segment'],
    notes: [
      'Together with p, satisfies p + q = c.',
      'Requires c > 0.'
    ],
    calculator: {
      kind: 'projection_q',
      outputLabel: 'Projection q',
      outputUnit: 'units',
      fields: [
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'inradius',
    title: 'Inradius',
    category: 'Derived Geometry',
    expression: 'r = (a + b - c) / 2',
    description:
      'Radius of the inscribed circle in a right triangle.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'r = inradius'],
    notes: [
      'Equivalent relation: Area = r * s.',
      'For valid right triangles, r is always positive.'
    ],
    calculator: {
      kind: 'inradius',
      outputLabel: 'Inradius r',
      outputUnit: 'units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'circumradius',
    title: 'Circumradius',
    category: 'Derived Geometry',
    expression: 'R = c / 2',
    description:
      'Radius of the circumscribed circle in a right triangle.',
    variables: ['c = hypotenuse', 'R = circumradius'],
    notes: [
      'The hypotenuse is the diameter of the circumcircle.',
      'This is one of the simplest right-triangle identities.'
    ],
    calculator: {
      kind: 'circumradius',
      outputLabel: 'Circumradius R',
      outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  }
];

export function getFormulaBySlug(slug: string) {
  return RIGHT_TRIANGLE_FORMULAS.find((item) => item.slug === slug);
}
