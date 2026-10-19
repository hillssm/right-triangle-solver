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
  plainExpression?: string;
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
    plainExpression: 'c = √(a² + b²)',
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
    plainExpression: 'b = √(c² - a²)',
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
    plainExpression: 'a = √(c² - b²)',
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
    expression: '\\text{Area} = (a \\times b) / 2',
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
    slug: 'perimeter',
    title: 'Perimeter',
    category: 'Area & Geometry',
    expression: 'P = a + b + c',
    plainExpression: 'P = a + b + c',
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
    plainExpression: 's = (a + b + c) / 2',
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
  // ============================
  // TRIGONOMETRY (Originals & Inverse)
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
    slug: 'angle-from-sine',
    title: 'Angle From Sine',
    category: 'Trigonometry',
    expression: 'A = \\arcsin\\left(\\frac{a}{c}\\right)',
    description: 'Recover acute angle A when opposite side and hypotenuse are known.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: ['Output is in degrees here.', 'Ratio a/c must be in (0, 1).'],
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
    category: 'Trigonometry',
    expression: 'A = \\arccos\\left(\\frac{b}{c}\\right)',
    description: 'Recover acute angle A when adjacent side and hypotenuse are known.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: ['Output is in degrees.', 'Ratio b/c must be in (0, 1).'],
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
    category: 'Trigonometry',
    expression: 'A = \\arctan\\left(\\frac{a}{b}\\right)',
    description: 'Recover acute angle A from opposite and adjacent legs.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: ['Output is in degrees.', 'Require b > 0.'],
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
  // ============================
  // ADVANCED RELATIONS (Original)
  // ============================
  {
    slug: 'altitude-to-hypotenuse',
    title: 'Altitude to Hypotenuse',
    category: 'Advanced Relations',
    expression: 'h = \\frac{a \\times b}{c}',
    plainExpression: 'h = (a × b) / c',
    description: 'Compute altitude h from the right-angle vertex to the hypotenuse.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'h = altitude'],
    notes: ['Equivalent identity: h² = p * q where p and q are hypotenuse segments.'],
    calculator: {
      kind: 'altitude_strict',
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
    category: 'Advanced Relations',
    expression: 'p = \\frac{a^2}{c}',
    plainExpression: 'p = a² / c',
    description: 'Projection of leg a onto hypotenuse c.',
    variables: ['a = leg', 'c = hypotenuse', 'p = projection segment'],
    notes: ['Together with q, satisfies p + q = c.', 'Requires c > 0.'],
    calculator: {
      kind: 'projection_p_strict',
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
    category: 'Advanced Relations',
    expression: 'q = \\frac{b^2}{c}',
    plainExpression: 'q = b² / c',
    description: 'Projection of leg b onto hypotenuse c.',
    variables: ['b = leg', 'c = hypotenuse', 'q = projection segment'],
    notes: ['Together with p, satisfies p + q = c.', 'Requires c > 0.'],
    calculator: {
      kind: 'projection_q_strict',
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
    category: 'Advanced Relations',
    expression: 'r = \\frac{a + b - c}{2}',
    plainExpression: 'r = (a + b − c) / 2',
    description: 'Radius of the inscribed circle in a right triangle.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'r = inradius'],
    notes: ['For valid right triangles, r is always positive.'],
    calculator: {
      kind: 'inradius_strict',
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
    plainExpression: 'R = c / 2',
    description: 'Radius of the circumscribed circle in a right triangle.',
    variables: ['c = hypotenuse', 'R = circumradius'],
    notes: ['The hypotenuse is the diameter of the circumcircle.'],
    calculator: {
      kind: 'circumradius', outputLabel: 'Circumradius R', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },

  // ============================
  // USER'S 26 EXACT NEW FORMULAS
  // ============================

  // TRIG EXPANSIONS
  {
    slug: 'cotangent-exact',
    title: 'Cotangent Ratio',
    category: 'Trigonometry',
    expression: '\\cot(A) = \\frac{b}{a}',
    description: 'Cotangent is the reciprocal of tangent. Adjacent over opposite.',
    variables: ['A = acute angle', 'a = opposite leg', 'b = adjacent leg'],
    notes: ['Require a > 0.'],
    calculator: {
      kind: 'cotangent', outputLabel: 'cot(A)',
      fields: [{ key: 'b', label: 'Adjacent b', min: 0 }, { key: 'a', label: 'Opposite a', min: 0 }]
    }
  },
  {
    slug: 'secant-exact',
    title: 'Secant Ratio',
    category: 'Trigonometry',
    expression: '\\sec(A) = \\frac{c}{b}',
    description: 'Secant is the reciprocal of cosine. Hypotenuse over adjacent.',
    variables: ['A = acute angle', 'b = adjacent leg', 'c = hypotenuse'],
    notes: ['Require b > 0.'],
    calculator: {
      kind: 'secant', outputLabel: 'sec(A)',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'b', label: 'Adjacent b', min: 0 }]
    }
  },
  {
    slug: 'cosecant-exact',
    title: 'Cosecant Ratio',
    category: 'Trigonometry',
    expression: '\\csc(A) = \\frac{c}{a}',
    description: 'Cosecant is the reciprocal of sine. Hypotenuse over opposite.',
    variables: ['A = acute angle', 'a = opposite leg', 'c = hypotenuse'],
    notes: ['Require a > 0.'],
    calculator: {
      kind: 'cosecant', outputLabel: 'csc(A)',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'a', label: 'Opposite a', min: 0 }]
    }
  },

  // TRIG → SIDE
  {
    slug: 'a-c-sin',
    title: 'Leg a from Sine',
    category: 'Trigonometry',
    expression: 'a = c \\cdot \\sin(A)',
    description: 'Find leg a using hypotenuse and the sine of A.',
    variables: ['a = leg', 'c = hypotenuse', 'A = acute angle'],
    notes: [],
    calculator: {
      kind: 'leg_from_hc_sin', outputLabel: 'Leg a', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'A', label: 'Angle A', min: 0 }]
    }
  },
  {
    slug: 'b-c-cos',
    title: 'Leg b from Cosine',
    category: 'Trigonometry',
    expression: 'b = c \\cdot \\cos(A)',
    description: 'Find leg b using hypotenuse and the cosine of A.',
    variables: ['b = leg', 'c = hypotenuse', 'A = acute angle'],
    notes: [],
    calculator: {
      kind: 'leg_from_hc_cos', outputLabel: 'Leg b', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'A', label: 'Angle A (deg)', min: 0 }]
    }
  },
  {
    slug: 'a-b-tan',
    title: 'Leg a from Tangent',
    category: 'Trigonometry',
    expression: 'a = b \\cdot \\tan(A)',
    description: 'Find leg a using leg b and the tangent of A.',
    variables: ['a = opposite leg', 'b = adjacent leg', 'A = acute angle'],
    notes: [],
    calculator: {
      kind: 'leg_from_leg_tan', outputLabel: 'Leg a', outputUnit: 'units',
      fields: [{ key: 'b', label: 'Leg b', min: 0 }, { key: 'A', label: 'Angle A (deg)', min: 0 }]
    }
  },
  {
    slug: 'b-a-tan',
    title: 'Leg b from Tangent',
    category: 'Trigonometry',
    expression: 'b = a / \\tan(A)',
    description: 'Find leg b using leg a and the tangent of A.',
    variables: ['a = opposite leg', 'b = adjacent leg', 'A = acute angle'],
    notes: [],
    calculator: {
      kind: 'leg_from_leg_tan_div', outputLabel: 'Leg b', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }, { key: 'A', label: 'Angle A (deg)', min: 0 }]
    }
  },

  // ANGLE RELATIONS
  {
    slug: 'angle-sum-exact',
    title: 'Angle Sum',
    category: 'Trigonometry',
    expression: 'A + B = 90^\\circ',
    description: 'Acute angles sum to 90 degrees.',
    variables: ['A = acute angle', 'B = acute angle'],
    notes: [],
    calculator: {
      kind: 'angle_b_from_a', outputLabel: 'Angle B', outputUnit: 'degrees',
      fields: [{ key: 'A', label: 'Angle A (deg)', min: 0, unit: '°' }]
    }
  },
  {
    slug: 'angle-b-exact',
    title: 'Angle B',
    category: 'Trigonometry',
    expression: 'B = 90^\\circ - A',
    plainExpression: 'B = 90° - A',
    description: 'Finding angle B from angle A.',
    variables: ['A = acute angle', 'B = acute angle'],
    notes: [],
    calculator: {
      kind: 'angle_a_from_b', outputLabel: 'Angle A', outputUnit: 'degrees',
      fields: [{ key: 'B', label: 'Angle B (deg)', min: 0, unit: '°' }]
    }
  },

  // AREA VARIATIONS
  {
    slug: 'area-sin-a',
    title: 'Area Variation (Angle A)',
    category: 'Area & Geometry',
    expression: '\\text{Area} = (b \\times c \\times \\sin(A)) / 2',
    description: 'Calculate area using two sides and the included angle A.',
    variables: ['b = leg', 'c = hypotenuse', 'A = included angle'],
    notes: [],
    calculator: {
      kind: 'area_sin_a', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'b', label: 'Leg b', min: 0 }, { key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'A', label: 'Angle A', min: 0 }]
    }
  },
  {
    slug: 'area-sin-b',
    title: 'Area Variation (Angle B)',
    category: 'Area & Geometry',
    expression: '\\text{Area} = (a \\times c \\times \\sin(B)) / 2',
    description: 'Calculate area using two sides and the included angle B.',
    variables: ['a = leg', 'c = hypotenuse', 'B = included angle'],
    notes: [],
    calculator: {
      kind: 'area_sin_b', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }, { key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'B', label: 'Angle B', min: 0 }]
    }
  },

  // SEMIPERIMETER
  {
    slug: 'area-rs',
    title: 'Area from Semiperimeter',
    category: 'Area & Geometry',
    expression: '\\text{Area} = r \\times s',
    plainExpression: 'Area = r × s',
    description: 'Area using inradius and semiperimeter.',
    variables: ['r = inradius', 's = semiperimeter'],
    notes: [],
    calculator: {
      kind: 'area_rs', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'r', label: 'Inradius r', min: 0 }, { key: 's', label: 'Semiperimeter s', min: 0 }]
    }
  },

  // ALTITUDE RELATIONS
  {
    slug: 'alt-rel-h',
    title: 'Altitude Relation h',
    category: 'Advanced Relations',
    expression: 'h = \\frac{a \\times b}{c}',
    description: 'Altitude using legs and hypotenuse.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'h = altitude'],
    notes: [],
    calculator: {
      kind: 'altitude', outputLabel: 'Altitude h', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }, { key: 'b', label: 'Leg b', min: 0 }, { key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },
  {
    slug: 'area-ch',
    title: 'Area Variation (Altitude)',
    category: 'Area & Geometry',
    expression: '\\text{Area} = (c \\times h) / 2',
    description: 'Area using hypotenuse and altitude.',
    variables: ['c = hypotenuse', 'h = altitude'],
    notes: [],
    calculator: {
      kind: 'area_ch', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'h', label: 'Altitude h', min: 0 }]
    }
  },
  {
    slug: 'h-sq-pq',
    title: 'Altitude squared',
    category: 'Advanced Relations',
    expression: 'h = \\sqrt{p \\times q}\\quad\\left(h^2 = p \\times q\\right)',
    description: 'Altitude geometric mean theorem.',
    variables: ['h = altitude', 'p = projection', 'q = projection'],
    notes: [],
    calculator: {
      kind: 'altitude_pq', outputLabel: 'Altitude h', outputUnit: 'units',
      fields: [{ key: 'p', label: 'Projection p', min: 0 }, { key: 'q', label: 'Projection q', min: 0 }]
    }
  },

  // HYPOTENUSE PROJECTIONS
  {
    slug: 'a-sq-cp',
    title: 'Leg a squared projection',
    category: 'Advanced Relations',
    expression: 'a^2 = c \\times p',
    plainExpression: 'a² = c × p',
    description: 'Leg a projection theorem.',
    variables: ['a = leg', 'c = hypotenuse', 'p = projection p'],
    notes: [],
    calculator: {
      kind: 'leg_from_cp_strict', outputLabel: 'Leg a', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'p', label: 'Projection p', min: 0 }]
    }
  },
  {
    slug: 'b-sq-cq',
    title: 'Leg b squared projection',
    category: 'Advanced Relations',
    expression: 'b^2 = c \\times q',
    plainExpression: 'b² = c × q',
    description: 'Leg b projection theorem.',
    variables: ['b = leg', 'c = hypotenuse', 'q = projection q'],
    notes: [],
    calculator: {
      kind: 'leg_from_cq_strict', outputLabel: 'Leg b', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }, { key: 'q', label: 'Projection q', min: 0 }]
    }
  },
  {
    slug: 'pq-c',
    title: 'Projections sum to c',
    category: 'Advanced Relations',
    expression: 'p + q = c',
    plainExpression: 'p + q = c',
    description: 'The sum of the projections equals the hypotenuse.',
    variables: ['p = projection p', 'q = projection q', 'c = hypotenuse'],
    notes: [],
    calculator: {
      kind: 'hyp_from_pq', outputLabel: 'Hypotenuse c', outputUnit: 'units',
      fields: [{ key: 'p', label: 'Projection p', min: 0 }, { key: 'q', label: 'Projection q', min: 0 }]
    }
  },

  // RADIUS RELATIONS
  {
    slug: 'radius-r',
    title: 'Radius Relation r',
    category: 'Advanced Relations',
    expression: 'r = \\frac{a + b - c}{2}',
    plainExpression: 'r = (a + b − c) / 2',
    description: 'Inradius of a right triangle.',
    variables: ['a, b = legs', 'c = hypotenuse', 'r = inradius'],
    notes: [],
    calculator: {
      kind: 'inradius', outputLabel: 'Inradius r', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }, { key: 'b', label: 'Leg b', min: 0 }, { key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },


  // TRIG IDENTITIES
  {
    slug: 'sin2-cos2',
    title: 'Pythagorean Identity',
    category: 'Trigonometry',
    expression: '\\sin^2(A) + \\cos^2(A) = 1',
    description: 'Fundamental trigonometric identity.',
    variables: ['A = angle'],
    notes: [],
    calculator: {
      kind: 'identity_cos_from_sin', outputLabel: 'cos(A)',
      fields: [{ key: 'sinA', label: 'sin(A) value', min: 0 }]
    }
  },
  {
    slug: 'tan-sin-cos',
    title: 'Tangent Identity',
    category: 'Trigonometry',
    expression: '\\tan(A) = \\frac{\\sin(A)}{\\cos(A)}',
    description: 'Tangent as the ratio of sine to cosine.',
    variables: ['A = angle'],
    notes: [],
    calculator: {
      kind: 'tan_from_sin_cos', outputLabel: 'tan(A)',
      fields: [{ key: 'sinA', label: 'sin(A) value' }, { key: 'cosA', label: 'cos(A) value' }]
    }
  },

  // SPECIAL TRIANGLES
  {
    slug: 'c-a-rt2',
    title: '45-45-90: c',
    category: 'Special Triangles',
    expression: 'c = a \\sqrt{2}',
    plainExpression: 'c = a × √2',
    description: 'Hypotenuse of a 45-45-90 triangle.',
    variables: ['a = leg', 'c = hypotenuse'],
    notes: [],
    calculator: {
      kind: 'c_from_a_45', outputLabel: 'Hypotenuse c', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }]
    }
  },
  {
    slug: 'a-c-rt2',
    title: '45-45-90: a',
    category: 'Special Triangles',
    expression: 'a = \\frac{c}{\\sqrt{2}}',
    plainExpression: 'a = c / √2',
    description: 'Leg of a 45-45-90 triangle.',
    variables: ['c = hypotenuse', 'a = leg'],
    notes: [],
    calculator: {
      kind: 'a_from_c_45', outputLabel: 'Leg a', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },
  {
    slug: 'area-45-leg',
    title: '45-45-90: Area',
    category: 'Special Triangles',
    expression: '\\text{Area} = \\frac{a^2}{2}',
    plainExpression: 'Area = a² / 2',
    description: 'Area of a 45-45-90 triangle from one leg.',
    variables: ['a = leg'],
    notes: [],
    calculator: {
      kind: 'area_from_leg_45', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }]
    }
  },
  {
    slug: 'perimeter-45-leg',
    title: '45-45-90: Perimeter',
    category: 'Special Triangles',
    expression: 'P = 2a + a\\sqrt{2}',
    plainExpression: 'P = 2a + a√2',
    description: 'Perimeter of a 45-45-90 triangle from one leg.',
    variables: ['a = leg', 'P = perimeter'],
    notes: [],
    calculator: {
      kind: 'perimeter_from_leg_45', outputLabel: 'Perimeter P', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Leg a', min: 0 }]
    }
  },
  {
    slug: 'long-a-rt3',
    title: '30-60-90: Long Leg',
    category: 'Special Triangles',
    expression: '\\text{long leg} = a \\sqrt{3}',
    plainExpression: 'long leg = a × √3',
    description: 'Longer leg in a 30-60-90 triangle.',
    variables: ['a = short leg'],
    notes: [],
    calculator: {
      kind: 'long_from_short_30', outputLabel: 'Long Leg', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Short leg a', min: 0 }]
    }
  },
  {
    slug: 'c-2a',
    title: '30-60-90: c',
    category: 'Special Triangles',
    expression: 'c = 2a',
    plainExpression: 'c = 2a',
    description: 'Hypotenuse in a 30-60-90 triangle is twice the short leg.',
    variables: ['a = short leg', 'c = hypotenuse'],
    notes: [],
    calculator: {
      kind: 'c_from_a_30', outputLabel: 'Hypotenuse c', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Short leg a', min: 0 }]
    }
  },
  {
    slug: 'short-c-30',
    title: '30-60-90: Short Leg from Hypotenuse',
    category: 'Special Triangles',
    expression: 'a = \\frac{c}{2}',
    plainExpression: 'a = c / 2',
    description: 'Short leg of a 30-60-90 triangle from the hypotenuse.',
    variables: ['c = hypotenuse', 'a = short leg'],
    notes: [],
    calculator: {
      kind: 'short_from_c_30', outputLabel: 'Short leg a', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },
  {
    slug: 'short-long-30',
    title: '30-60-90: Short Leg from Long Leg',
    category: 'Special Triangles',
    expression: 'a = \\frac{\\text{long leg}}{\\sqrt{3}}',
    plainExpression: 'a = long leg / √3',
    description: 'Short leg of a 30-60-90 triangle from the long leg.',
    variables: ['long leg = longer leg', 'a = short leg'],
    notes: [],
    calculator: {
      kind: 'short_from_long_30', outputLabel: 'Short leg a', outputUnit: 'units',
      fields: [{ key: 'b', label: 'Long leg', min: 0 }]
    }
  },
  {
    slug: 'long-c-30',
    title: '30-60-90: Long Leg from Hypotenuse',
    category: 'Special Triangles',
    expression: '\\text{long leg} = \\frac{c\\sqrt{3}}{2}',
    plainExpression: 'long leg = (c × √3) / 2',
    description: 'Long leg of a 30-60-90 triangle from the hypotenuse.',
    variables: ['c = hypotenuse', 'long leg = longer leg'],
    notes: [],
    calculator: {
      kind: 'long_from_c_30', outputLabel: 'Long leg', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },
  {
    slug: 'area-short-30',
    title: '30-60-90: Area',
    category: 'Special Triangles',
    expression: '\\text{Area} = \\frac{a \\cdot a\\sqrt{3}}{2}',
    plainExpression: 'Area = (short leg × long leg) / 2',
    description: 'Area of a 30-60-90 triangle from the short leg.',
    variables: ['a = short leg'],
    notes: [],
    calculator: {
      kind: 'area_from_short_30', outputLabel: 'Area', outputUnit: 'sq units',
      fields: [{ key: 'a', label: 'Short leg a', min: 0 }]
    }
  },
  {
    slug: 'perimeter-short-30',
    title: '30-60-90: Perimeter',
    category: 'Special Triangles',
    expression: 'P = a + a\\sqrt{3} + 2a',
    plainExpression: 'P = a + a√3 + 2a',
    description: 'Perimeter of a 30-60-90 triangle from the short leg.',
    variables: ['a = short leg', 'P = perimeter'],
    notes: [],
    calculator: {
      kind: 'perimeter_from_short_30', outputLabel: 'Perimeter P', outputUnit: 'units',
      fields: [{ key: 'a', label: 'Short leg a', min: 0 }]
    }
  },
  {
    slug: 'radius-R-cap',
    title: 'Radius Relation R',
    category: 'Advanced Relations',
    expression: 'R = \\frac{c}{2}',
    plainExpression: 'R = c / 2',
    description: 'Circumradius of a right triangle.',
    variables: ['c = hypotenuse', 'R = circumradius'],
    notes: [],
    calculator: {
      kind: 'circumradius', outputLabel: 'Circumradius R', outputUnit: 'units',
      fields: [{ key: 'c', label: 'Hypotenuse c', min: 0 }]
    }
  },
  {
    slug: 'general-right-triangle-solver',
    title: 'General Right Triangle Solver',
    category: 'Side Calculations',
    expression: 'a^2 + b^2 = c^2',
    plainExpression: 'a² + b² = c²',
    description: 'Enter any two values (at least one side) to solve the full triangle.',
    variables: ['a = leg', 'b = leg', 'c = hypotenuse', 'A = angle', 'B = angle'],
    notes: ['At least one of the two known values must be a side length.'],
    calculator: {
      kind: 'general_solver', outputLabel: 'Solved triangle', outputUnit: '',
      fields: [
        { key: 'a', label: 'Leg a', min: 0 },
        { key: 'b', label: 'Leg b', min: 0 },
        { key: 'c', label: 'Hypotenuse c', min: 0 },
        { key: 'A', label: 'Angle A (deg)', min: 0 },
        { key: 'B', label: 'Angle B (deg)', min: 0 }
      ]
    }
  }
];

export function getFormulaBySlug(slug: string) {
  return RIGHT_TRIANGLE_FORMULAS.find((item) => item.slug === slug);
}
