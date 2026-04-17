export type FormulaCalculatorField = {
  key: string;
  label: string;
  unit?: string;
  min?: number;
};

export type FormulaCalculatorConfig = {
  kind: string;
  outputLabel: string;
  outputUnit?: string;
  fields: FormulaCalculatorField[];
};

export type RightTriangleFormula = {
  slug: string;
  title: string;
  category:
    | 'Trigonometry'
    | 'Side Calculations'
    | 'Area & Geometry'
    | 'Advanced Relations'
    | 'Special Triangles';
  expression: string;
  description: string;
  variables: string[];
  notes: string[];
  calculator?: FormulaCalculatorConfig;
};

export const RIGHT_TRIANGLE_FORMULAS: RightTriangleFormula[] = [
  // ============================
  // SIDE CALCULATIONS
  // ============================
  {
    slug: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    category: 'Side Calculations',
    expression: 'c = \\sqrt{a^2 + b^2}',
    description: 'Find the hypotenuse when both legs are known. This is the primary identity for every right triangle.',
    variables: ['a = leg opposite angle A', 'b = leg opposite angle B', 'c = hypotenuse'],
    notes: ['Works only for right triangles.', 'Equivalent base identity: a² + b² = c².'],
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
    category: 'Side Calculations',
    expression: 'b = \\sqrt{c^2 - a^2}',
    description: 'Find leg b when hypotenuse c and the other leg a are known.',
    variables: ['a = known leg', 'b = unknown leg', 'c = hypotenuse'],
    notes: ['Require c > a.', 'If c <= a, the triangle is invalid.'],
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
    category: 'Side Calculations',
    expression: 'a = \\sqrt{c^2 - b^2}',
    description: 'Find leg a when hypotenuse c and leg b are known.',
    variables: ['a = unknown leg', 'b = known leg', 'c = hypotenuse'],
    notes: ['Require c > b.', 'If c <= b, there is no valid right triangle.'],
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

  // ============================
  // AREA & GEOMETRY
  // ============================
  {
    slug: 'area-from-legs',
    title: 'Area from Legs',
    category: 'Area & Geometry',
    expression: '\\text{Area} = \\frac{a \\times b}{2}',
    description: 'Compute the area of a right triangle using its perpendicular legs.',
    variables: ['a = leg', 'b = leg'],
    notes: ['This works because legs are perpendicular.', 'Units are squared.'],
    calculator: {
      kind: 'area_legs',
      outputLabel: 'Area',
      outputUnit: 'sq units',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 }
      ]
    }
  },
  {
    slug: 'area-from-hypotenuse-and-altitude',
    title: 'Area from Base & Height',
    category: 'Area & Geometry',
    expression: '\\text{Area} = \\frac{1}{2} \\times c \\times h',
    description: 'Calculate the area using the hypotenuse as the base and the corresponding altitude as the height.',
    variables: ['c = hypotenuse (base)', 'h = altitude (height)'],
    notes: ['Standard triangle area formula: base × height / 2.']
  },
  {
    slug: 'area-angle-a',
    title: 'Area from Angle A',
    category: 'Area & Geometry',
    expression: '\\text{Area} = \\frac{1}{2} b c \\sin(A)',
    description: 'Calculate area using two sides and the included angle (A).',
    variables: ['b = leg', 'c = hypotenuse', 'A = included angle'],
    notes: ['Works for any triangle, specifying angle A in this context.']
  },
  {
    slug: 'area-angle-b',
    title: 'Area from Angle B',
    category: 'Area & Geometry',
    expression: '\\text{Area} = \\frac{1}{2} a c \\sin(B)',
    description: 'Calculate area using two sides and the included angle (B).',
    variables: ['a = leg', 'c = hypotenuse', 'B = included angle'],
    notes: ['Works for any triangle, specifying angle B in this context.']
  },
  {
    slug: 'perimeter',
    title: 'Perimeter',
    category: 'Area & Geometry',
    expression: 'P = a + b + c',
    description: 'Sum all three sides to get the total boundary length.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse'],
    notes: ['All sides must be positive.', 'For right triangles, c is always the longest side.'],
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
    category: 'Area & Geometry',
    expression: 's = \\frac{a + b + c}{2}',
    description: 'Half of the perimeter. Useful in many geometric identities.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 's = semiperimeter'],
    notes: ['Often used in triangle geometry proofs.'],
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
    slug: 'area-semiperimeter',
    title: 'Area from Semiperimeter',
    category: 'Area & Geometry',
    expression: '\\text{Area} = r \\times s',
    description: 'Calculate the area of a triangle by multiplying its inradius and semiperimeter.',
    variables: ['r = inradius', 's = semiperimeter'],
    notes: ['This identity applies to all polygons that have an inscribed circle.']
  },

  // ============================
  // TRIGONOMETRY
  // ============================
  {
    slug: 'sine-ratio',
    title: 'Sine Ratio',
    category: 'Trigonometry',
    expression: '\\sin(A) = \\frac{a}{c}',
    description: 'For angle A, sine equals opposite over hypotenuse.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: ['Valid range for right triangles: 0 < sin(A) < 1.'],
    calculator: {
      kind: 'sine',
      outputLabel: 'sin(A)',
      fields: [
        { key: 'a', label: 'Opposite a', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'cosine-ratio',
    title: 'Cosine Ratio',
    category: 'Trigonometry',
    expression: '\\cos(A) = \\frac{b}{c}',
    description: 'For angle A, cosine equals adjacent over hypotenuse.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: ['Require c > b > 0.'],
    calculator: {
      kind: 'cosine',
      outputLabel: 'cos(A)',
      fields: [
        { key: 'b', label: 'Adjacent b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 }
      ]
    }
  },
  {
    slug: 'tangent-ratio',
    title: 'Tangent Ratio',
    category: 'Trigonometry',
    expression: '\\tan(A) = \\frac{a}{b}',
    description: 'For angle A, tangent equals opposite over adjacent.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: ['Require b > 0.'],
    calculator: {
      kind: 'tangent',
      outputLabel: 'tan(A)',
      fields: [
        { key: 'a', label: 'Opposite a', min: 0 },
        { key: 'b', label: 'Adjacent b', min: 0 }
      ]
    }
  },
  {
    slug: 'cotangent-ratio',
    title: 'Cotangent Ratio',
    category: 'Trigonometry',
    expression: '\\cot(A) = \\frac{b}{a}',
    description: 'Cotangent is the reciprocal of tangent. Adjacent over opposite.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: ['Require a > 0.']
  },
  {
    slug: 'secant-ratio',
    title: 'Secant Ratio',
    category: 'Trigonometry',
    expression: '\\sec(A) = \\frac{c}{b}',
    description: 'Secant is the reciprocal of cosine. Hypotenuse over adjacent.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: ['Require b > 0.']
  },
  {
    slug: 'cosecant-ratio',
    title: 'Cosecant Ratio',
    category: 'Trigonometry',
    expression: '\\csc(A) = \\frac{c}{a}',
    description: 'Cosecant is the reciprocal of sine. Hypotenuse over opposite.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: ['Require a > 0.']
  },
  {
    slug: 'leg-a-sine',
    title: 'Leg a from Sine',
    category: 'Trigonometry',
    expression: 'a = c \\sin(A)',
    description: 'Find leg a using the hypotenuse and the sine of angle A.',
    variables: ['a = leg', 'c = hypotenuse', 'A = acute angle'],
    notes: ['Useful when working with vectors or generic trigonometry.']
  },
  {
    slug: 'leg-b-cosine',
    title: 'Leg b from Cosine',
    category: 'Trigonometry',
    expression: 'b = c \\cos(A)',
    description: 'Find leg b using the hypotenuse and the cosine of angle A.',
    variables: ['b = leg', 'c = hypotenuse', 'A = acute angle'],
    notes: ['Useful when projecting the hypotenuse.']
  },
  {
    slug: 'leg-a-tangent',
    title: 'Leg a from Tangent',
    category: 'Trigonometry',
    expression: 'a = b \\tan(A)',
    description: 'Find leg a using leg b and the tangent of angle A.',
    variables: ['a = opposite leg', 'b = adjacent leg', 'A = acute angle'],
    notes: ['Often used in height measurements from shadows.']
  },
  {
    slug: 'leg-b-tangent',
    title: 'Leg b from Tangent',
    category: 'Trigonometry',
    expression: 'b = \\frac{a}{\\tan(A)}',
    description: 'Find leg b using leg a and the tangent of angle A.',
    variables: ['a = opposite leg', 'b = adjacent leg', 'A = acute angle'],
    notes: ['Alternative form: b = a * cot(A).']
  },
  {
    slug: 'pythagorean-identity',
    title: 'Pythagorean Identity',
    category: 'Trigonometry',
    expression: '\\sin^2(A) + \\cos^2(A) = 1',
    description: 'The fundamental trigonometric identity relating sine and cosine.',
    variables: ['A = angle'],
    notes: ['Works for any angle, derived directly from the Pythagorean theorem on the unit circle.']
  },
  {
    slug: 'tangent-identity',
    title: 'Tangent Identity',
    category: 'Trigonometry',
    expression: '\\tan(A) = \\frac{\\sin(A)}{\\cos(A)}',
    description: 'Tangent expressed as the ratio of sine to cosine.',
    variables: ['A = angle'],
    notes: ['Fundamental identity linking the three primary trigonometric functions.']
  },
  {
    slug: 'complementary-angles-sum',
    title: 'Complementary Angles Sum',
    category: 'Trigonometry',
    expression: 'A + B = 90^\\circ',
    description: 'The two acute angles in a right triangle sum to 90 degrees.',
    variables: ['A = acute angle', 'B = acute angle'],
    notes: ['The third angle is exactly 90°.']
  },
  {
    slug: 'find-angle-b',
    title: 'Find Angle B',
    category: 'Trigonometry',
    expression: 'B = 90^\\circ - A',
    description: 'Solve for angle B knowing angle A.',
    variables: ['A = known acute angle', 'B = remaining acute angle'],
    notes: ['If A is in radians, use B = (π / 2) - A.']
  },

  // ============================
  // ADVANCED RELATIONS
  // ============================
  {
    slug: 'altitude-to-hypotenuse',
    title: 'Altitude to Hypotenuse',
    category: 'Advanced Relations',
    expression: 'h = \\frac{a \\times b}{c}',
    description: 'Compute altitude h from the right-angle vertex to the hypotenuse.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'h = altitude'],
    notes: ['Equivalent identity: h² = p * q where p and q are hypotenuse segments.'],
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
    slug: 'altitude-geometric-mean',
    title: 'Altitude Geometric Mean',
    category: 'Advanced Relations',
    expression: 'h^2 = p \\times q',
    description: 'The altitude is the geometric mean of the two hypotenuse segments.',
    variables: ['h = altitude', 'p = hypotenuse segment', 'q = hypotenuse segment'],
    notes: ['Derived from similar right triangles formed by the altitude.']
  },
  {
    slug: 'leg-a-projection',
    title: 'Leg a Projection',
    category: 'Advanced Relations',
    expression: 'a^2 = c \\times p',
    description: 'Leg a squared is the product of the hypotenuse and the adjacent segment p.',
    variables: ['a = leg', 'c = hypotenuse', 'p = projection segment'],
    notes: ['Derived from geometric mean theorems.']
  },
  {
    slug: 'leg-b-projection',
    title: 'Leg b Projection',
    category: 'Advanced Relations',
    expression: 'b^2 = c \\times q',
    description: 'Leg b squared is the product of the hypotenuse and the adjacent segment q.',
    variables: ['b = leg', 'c = hypotenuse', 'q = projection segment'],
    notes: ['Derived from geometric mean theorems.']
  },
  {
    slug: 'hypotenuse-segments-sum',
    title: 'Hypotenuse Segments Sum',
    category: 'Advanced Relations',
    expression: 'p + q = c',
    description: 'The hypotenuse is exactly the sum of its two projections p and q.',
    variables: ['p = segment of hypotenuse', 'q = segment of hypotenuse', 'c = total hypotenuse'],
    notes: ['Segments p and q are created by drawing the altitude to the hypotenuse.']
  },
  {
    slug: 'inradius',
    title: 'Inradius',
    category: 'Advanced Relations',
    expression: 'r = \\frac{a + b - c}{2}',
    description: 'Radius of the inscribed circle in a right triangle.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'r = inradius'],
    notes: ['For valid right triangles, r is always positive.'],
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
    category: 'Advanced Relations',
    expression: 'R = \\frac{c}{2}',
    description: 'Radius of the circumscribed circle in a right triangle.',
    variables: ['c = hypotenuse', 'R = circumradius'],
    notes: ['The hypotenuse is the diameter of the circumcircle.']
  },

  // ============================
  // SPECIAL TRIANGLES
  // ============================
  {
    slug: '45-45-90-hypotenuse',
    title: '45-45-90: Hypotenuse',
    category: 'Special Triangles',
    expression: 'c = a \\sqrt{2}',
    description: 'In an isosceles right triangle, the hypotenuse is √2 times the leg.',
    variables: ['a = leg', 'c = hypotenuse'],
    notes: ['Legs are equal (a = b).']
  },
  {
    slug: '45-45-90-leg',
    title: '45-45-90: Leg',
    category: 'Special Triangles',
    expression: 'a = \\frac{c}{\\sqrt{2}}',
    description: 'In an isosceles right triangle, a leg is hypotenuse divided by √2.',
    variables: ['c = hypotenuse', 'a = leg'],
    notes: ['Or equivalently, a = (c * √2) / 2.']
  },
  {
    slug: '30-60-90-long-leg',
    title: '30-60-90: Long Leg',
    category: 'Special Triangles',
    expression: '\\text{long leg} = a \\sqrt{3}',
    description: 'In a 30-60-90 triangle, the longer leg is √3 times the shorter leg a.',
    variables: ['a = shorter leg (opposite 30°)', 'long leg = opposite 60°'],
    notes: ['a is always the shortest side.']
  },
  {
    slug: '30-60-90-hypotenuse',
    title: '30-60-90: Hypotenuse',
    category: 'Special Triangles',
    expression: 'c = 2a',
    description: 'In a 30-60-90 triangle, the hypotenuse is twice the shorter leg.',
    variables: ['a = shorter leg (opposite 30°)', 'c = hypotenuse'],
    notes: ['The triangle is half of an equilateral triangle.']
  }
];

export function getFormulaBySlug(slug: string) {
  return RIGHT_TRIANGLE_FORMULAS.find((item) => item.slug === slug);
}
