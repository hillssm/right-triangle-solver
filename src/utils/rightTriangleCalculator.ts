export type AngleMode = 'deg' | 'rad';
export type CalculatorInputKey = 'a' | 'b' | 'c' | 'alpha' | 'beta';

type RawNumericInputs = Partial<Record<CalculatorInputKey, number>>;

export type SupportedCombination =
  | 'a+b'
  | 'a+c'
  | 'b+c'
  | 'a+alpha'
  | 'a+beta'
  | 'b+alpha'
  | 'b+beta'
  | 'c+alpha'
  | 'c+beta';

export type RightTriangleSolution = {
  a: number;
  b: number;
  c: number;
  alphaRad: number;
  betaRad: number;
  alphaDeg: number;
  betaDeg: number;
  h: number;
  area: number;
  perimeter: number;
  semiperimeter: number;
  inradius: number;
  circumradius: number;
  segmentP: number;
  segmentQ: number;
  ratioA: number;
  ratioB: number;
  tangentAlpha: number;
  providedKeys: CalculatorInputKey[];
  combination: SupportedCombination;
  formulas: string[];
  steps: string[];
};

export const CALCULATOR_INPUT_KEYS: CalculatorInputKey[] = ['a', 'b', 'c', 'alpha', 'beta'];
export const VALID_COMBINATIONS: SupportedCombination[] = [
  'a+b',
  'a+c',
  'b+c',
  'a+alpha',
  'a+beta',
  'b+alpha',
  'b+beta',
  'c+alpha',
  'c+beta'
];

const EPSILON = 1e-10;
const HALF_PI = Math.PI / 2;
const PYTHAGOREAN_TOLERANCE = 1e-8;
const ANGLE_TOLERANCE = 1e-8;
const COMMON_DERIVED_FORMULAS = [
  'h = (a * b) / c',
  'A = (a * b) / 2',
  'P = a + b + c',
  's = P / 2',
  'r = A / s = (a + b - c) / 2',
  'R = c / 2',
  'p = a² / c',
  'q = b² / c'
];

const toRadians = (value: number, mode: AngleMode): number => (mode === 'deg' ? (value * Math.PI) / 180 : value);
const toDegrees = (value: number): number => (value * 180) / Math.PI;
const sanitizeNearZero = (value: number): number => (Math.abs(value) < EPSILON ? 0 : value);
const clampTrigInput = (value: number): number => Math.min(1, Math.max(-1, value));

const normalizeProvidedInputs = (inputs: RawNumericInputs): RawNumericInputs => {
  const normalized: RawNumericInputs = {};
  for (const key of CALCULATOR_INPUT_KEYS) {
    const value = inputs[key];
    if (typeof value === 'number' && Number.isFinite(value)) {
      normalized[key] = value;
    }
  }
  return normalized;
};

const finalizeSolution = (payload: {
  a: number;
  b: number;
  c: number;
  alphaRad: number;
  betaRad: number;
  providedKeys: CalculatorInputKey[];
  providedValues: RawNumericInputs;
  angleMode: AngleMode;
  combination: SupportedCombination;
  formulas: string[];
  steps: string[];
}): RightTriangleSolution => {
  const a = sanitizeNearZero(payload.a);
  const b = sanitizeNearZero(payload.b);
  const c = sanitizeNearZero(payload.c);
  const alphaRad = sanitizeNearZero(payload.alphaRad);
  const betaRad = sanitizeNearZero(payload.betaRad);

  if (!(a > 0) || !(b > 0) || !(c > 0)) {
    throw new Error('Computed values are invalid. Please check your inputs.');
  }

  if (!(c > a + EPSILON) || !(c > b + EPSILON)) {
    throw new Error('Hypotenuse c must be the largest side.');
  }

  const pythagoreanGap = Math.abs(a * a + b * b - c * c);
  const pythagoreanScale = Math.max(c * c, 1);
  if (pythagoreanGap > PYTHAGOREAN_TOLERANCE * pythagoreanScale) {
    throw new Error('Inputs do not form a valid right triangle.');
  }

  if (Math.abs(alphaRad + betaRad - HALF_PI) > ANGLE_TOLERANCE) {
    throw new Error('Angles must satisfy A + B = 90 deg (pi/2 radians).');
  }

  // Final consistency check for all provided values
  for (const key of payload.providedKeys) {
    const provided = payload.providedValues[key]!;
    let computed = 0;
    let tolerance = 1e-7;

    switch (key) {
      case 'a': computed = a; break;
      case 'b': computed = b; break;
      case 'c': computed = c; break;
      case 'alpha': 
        computed = toDegrees(alphaRad); 
        if (payload.angleMode === 'rad') computed = alphaRad;
        tolerance = 1e-5; 
        break;
      case 'beta': 
        computed = toDegrees(betaRad);
        if (payload.angleMode === 'rad') computed = betaRad;
        tolerance = 1e-5;
        break;
    }

    if (Math.abs(computed - provided) > tolerance) {
      const name = key === 'alpha' ? 'Angle A' : key === 'beta' ? 'Angle B' : `Side ${key}`;
      throw new Error(`${name} is inconsistent with other inputs.`);
    }
  }

  const area = 0.5 * a * b;
  const perimeter = a + b + c;
  const semiperimeter = perimeter / 2;
  const h = (a * b) / c;
  const inradius = area / semiperimeter;
  const circumradius = c / 2;
  const segmentP = (a * a) / c;
  const segmentQ = (b * b) / c;

  const fmt = (v: number) => Number(v.toFixed(4));
  const sArea = fmt(area);
  const sPeri = fmt(perimeter);
  const sSemi = fmt(semiperimeter);
  const sH = fmt(h);
  const sP = fmt(segmentP);
  const sQ = fmt(segmentQ);

  const derivedSteps = [
    `**Calculate Area**<br/>Multiply base by height and divide by two.<br/>Use Area = (a × b) / 2<br/>Area = (${a} × ${b}) / 2 = ${fmt(a * b)} / 2 = ${sArea}`,
    `**Calculate Perimeter**<br/>Sum all sides of the triangle.<br/>Use P = a + b + c<br/>P = ${a} + ${b} + ${c} = ${sPeri}`,
    `**Find Altitude h**<br/>The height dropped to the hypotenuse.<br/>Use Altitude = (a × b) / c<br/>Altitude = (${a} × ${b}) / ${c} = ${sH}`,
    `**Determine Semiperimeter**<br/>Half of the total perimeter.<br/>Use s = P / 2<br/>s = ${sPeri} / 2 = ${sSemi}`,
    `**Calculate Inradius r**<br/>Radius of the inscribed circle.<br/>Use r = (a + b - c) / 2<br/>r = (${a} + ${b} - ${c}) / 2 = ${fmt(inradius)}`,
    `**Calculate Circumradius R**<br/>Radius of the circumscribed circle.<br/>Use R = c / 2<br/>R = ${c} / 2 = ${fmt(circumradius)}`,
    `**Segment p**<br/>Hypotenuse segment adjacent to leg a.<br/>Use p = a² / c<br/>p = ${a}² / ${c} = ${sP}`,
    `**Segment q**<br/>Hypotenuse segment adjacent to leg b.<br/>Use q = b² / c<br/>q = ${b}² / ${c} = ${sQ}`
  ];

  return {
    a,
    b,
    c,
    alphaRad,
    betaRad,
    alphaDeg: toDegrees(alphaRad),
    betaDeg: toDegrees(betaRad),
    h,
    area,
    perimeter,
    semiperimeter,
    inradius,
    circumradius,
    segmentP,
    segmentQ,
    ratioA: a / c,
    ratioB: b / c,
    tangentAlpha: a / b,
    providedKeys: payload.providedKeys,
    combination: payload.combination,
    formulas: [...payload.formulas, ...COMMON_DERIVED_FORMULAS],
    steps: [...payload.steps, ...derivedSteps]
  };
};

export const parseMathExpression = (raw: string): number => {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error('Enter a value.');
  }

  const normalized = trimmed.toLowerCase()
    .replace(/\u03c0/g, 'pi')
    .replace(/,/g, '.') // Support comma decimal separators
    .replace(/\s+/g, '');

  if (!/^[0-9pi+\-*/().]+$/.test(normalized)) {
    throw new Error('Only numbers, parentheses, + - * /, and pi are allowed.');
  }

  const expression = normalized.replace(/pi/g, `(${Math.PI})`);

  let evaluated: unknown;
  try {
    evaluated = Function(`"use strict"; return (${expression});`)();
  } catch {
    throw new Error('Invalid numeric expression.');
  }

  const value = Number(evaluated);
  if (!Number.isFinite(value)) {
    throw new Error('Expression must evaluate to a finite number.');
  }

  return value;
};

export const formatAngleForMode = (angleInRadians: number, mode: AngleMode, digits = 4): string => {
  const value = mode === 'deg' ? toDegrees(angleInRadians) : angleInRadians;
  return Number(value).toFixed(digits);
};

export const calculateRightTriangle = (
  inputs: RawNumericInputs,
  angleMode: AngleMode = 'deg'
): RightTriangleSolution => {
  const values = normalizeProvidedInputs(inputs);
  const providedKeys = CALCULATOR_INPUT_KEYS.filter((key) => values[key] !== undefined);
  const providedSideCount = (['a', 'b', 'c'] as const).filter((key) => values[key] !== undefined).length;

  if (providedKeys.length < 2) {
    throw new Error('Enter at least two known values to solve the triangle.');
  }

  if (providedSideCount < 1) {
    throw new Error('At least one side (a, b, or c) is required. Angles alone cannot solve a triangle.');
  }

  for (const sideKey of ['a', 'b', 'c'] as const) {
    const side = values[sideKey];
    if (side !== undefined && !(side > 0)) {
      throw new Error(`Side ${sideKey} must be a positive number.`);
    }
  }

  const alphaInput = values.alpha;
  const betaInput = values.beta;

  const alpha = alphaInput === undefined ? undefined : toRadians(alphaInput, angleMode);
  const beta = betaInput === undefined ? undefined : toRadians(betaInput, angleMode);

  if (alpha !== undefined && !(alpha > 0 && alpha < HALF_PI)) {
    throw new Error('Angle A must be between 0 and 90 deg (0 and pi/2 radians).');
  }

  if (beta !== undefined && !(beta > 0 && beta < HALF_PI)) {
    throw new Error('Angle B must be between 0 and 90 deg (0 and pi/2 radians).');
  }

  if (alpha !== undefined && beta !== undefined) {
    if (Math.abs(alpha + beta - HALF_PI) > ANGLE_TOLERANCE) {
      throw new Error('Angles must satisfy A + B = 90 deg (pi/2 radians).');
    }
    throw new Error('Angles A and B alone are not enough. Provide one side and one angle.');
  }

  if (values.c !== undefined && values.a !== undefined && values.c <= values.a + EPSILON) {
    throw new Error('Hypotenuse c must be larger than side a.');
  }

  if (values.c !== undefined && values.b !== undefined && values.c <= values.b + EPSILON) {
    throw new Error('Hypotenuse c must be larger than side b.');
  }

  const has = (key: CalculatorInputKey): boolean => values[key] !== undefined;

  const fmtValue = (v: number) => Number(v.toFixed(4));

  const isDeg = angleMode === 'deg';
  const fullAngle = isDeg ? 90 : 1.5708; // Roughly pi/2 for the step text
  const fullAngleSymbol = isDeg ? '90°' : 'π/2';
  const unitSymbol = isDeg ? '°' : ' rad';

  const fmtAngle = (rad: number) => {
    const val = isDeg ? toDegrees(rad) : rad;
    return fmtValue(val) + unitSymbol;
  };

  if (has('a') && has('b')) {
    const a = values.a as number;
    const b = values.b as number;
    const c = Math.hypot(a, b);
    const alphaRad = Math.atan2(a, b);
    const betaRad = HALF_PI - alphaRad;
    const a2 = a * a;
    const b2 = b * b;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'a+b',
      formulas: ['c = sqrt(a² + b²)', `α = atan(a / b)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Hypotenuse c**<br/>Use the squares of both legs to find the diagonal.<br/>Use c = √(a² + b²)<br/>c = √(${a}² + ${b}²) = √(${fmtValue(a2)} + ${fmtValue(b2)}) = ${fmtValue(c)}`,
        `**Find Angle A**<br/>Calculate the incline using the ratio of legs.<br/>Use tan(A) = a / b<br/>A = tan⁻¹(${a} / ${b}) = ${fmtAngle(alphaRad)}`,
        `**Determine Angle B**<br/>Subtract angle A from the triangle's 90-degree constant.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('a') && has('c')) {
    const a = values.a as number;
    const c = values.c as number;
    const b = Math.sqrt(Math.max(c * c - a * a, 0));
    const alphaRad = Math.asin(clampTrigInput(a / c));
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'a+c',
      formulas: ['b = sqrt(c² - a²)', `α = asin(a / c)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Leg b**<br/>Calculate the missing leg using the square of the hypotenuse.<br/>Use b = √(c² - a²)<br/>b = √(${c}² - ${a}²) = √(${fmtValue(c * c)} - ${fmtValue(a * a)}) = ${fmtValue(b)}`,
        `**Find Angle A**<br/>Use the ratio of opposite side to hypotenuse.<br/>Use sin(A) = a / c<br/>A = sin⁻¹(${a} / ${c}) = ${fmtAngle(alphaRad)}`,
        `**Determine Angle B**<br/>Subtract A from 90 degrees to find the secondary angle.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('b') && has('c')) {
    const b = values.b as number;
    const c = values.c as number;
    const a = Math.sqrt(Math.max(c * c - b * b, 0));
    const alphaRad = Math.acos(clampTrigInput(b / c));
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'b+c',
      formulas: ['a = sqrt(c² - b²)', `α = acos(b / c)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Leg a**<br/>Derive the missing leg from the hypotenuse and leg b.<br/>Use a = √(c² - b²)<br/>a = √(${c}² - ${b}²) = √(${fmtValue(c * c)} - ${fmtValue(b * b)}) = ${fmtValue(a)}`,
        `**Find Angle A**<br/>Calculate A from adjacent side and hypotenuse.<br/>Use cos(A) = b / c<br/>A = cos⁻¹(${b} / ${c}) = ${fmtAngle(alphaRad)}`,
        `**Determine Angle B**<br/>Apply the complementary angle property.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('a') && has('alpha')) {
    const a = values.a as number;
    const alphaRad = alpha as number;
    const sine = Math.sin(alphaRad);
    const tangent = Math.tan(alphaRad);
    if (Math.abs(sine) < EPSILON || Math.abs(tangent) < EPSILON) {
      throw new Error('Angle A is too small for stable computation.');
    }
    const c = a / sine;
    const b = a / tangent;
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'a+alpha',
      formulas: [`c = a / sin(α)`, `b = a / tan(α)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Hypotenuse c**<br/>Divide the opposite side by the sine of its angle.<br/>Use c = a / sin(A)<br/>c = ${a} / sin(${fmtAngle(alphaRad)}) = ${fmtValue(c)}`,
        `**Solve for Leg b**<br/>Calculate the adjacent side using the tangent ratio.<br/>Use b = a / tan(A)<br/>b = ${a} / tan(${fmtAngle(alphaRad)}) = ${fmtValue(b)}`,
        `**Determine Angle B**<br/>Calculate the second acute angle via subtraction.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('a') && has('beta')) {
    const a = values.a as number;
    const betaRad = beta as number;
    const alphaRad = HALF_PI - betaRad;
    const cosine = Math.cos(betaRad);
    const tangent = Math.tan(betaRad);
    if (Math.abs(cosine) < EPSILON) {
      throw new Error('Angle B is too close to 90 deg for stable computation.');
    }
    const c = a / cosine;
    const b = a * tangent;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'a+beta',
      formulas: [`c = a / cos(β)`, `b = a * tan(β)`, `α = ${fullAngleSymbol} - β`],
      steps: [
        `**Solve for Hypotenuse c**<br/>Divide side a by the cosine of the adjacent angle B.<br/>Use c = a / cos(B)<br/>c = ${a} / cos(${fmtAngle(betaRad)}) = ${fmtValue(c)}`,
        `**Solve for Leg b**<br/>Derive side b from angle B's tangent scaling.<br/>Use b = a × tan(B)<br/>b = ${a} × tan(${fmtAngle(betaRad)}) = ${fmtValue(b)}`,
        `**Determine Angle A**<br/>Solve for the first acute angle via subtraction.<br/>Use A = ${fullAngleSymbol} - B<br/>A = ${fullAngleSymbol} - ${fmtAngle(betaRad)} = ${fmtAngle(alphaRad)}`
      ]
    });
  }

  if (has('b') && has('alpha')) {
    const b = values.b as number;
    const alphaRad = alpha as number;
    const betaRad = HALF_PI - alphaRad;
    const cosine = Math.cos(alphaRad);
    const tangent = Math.tan(alphaRad);
    if (Math.abs(cosine) < EPSILON) {
      throw new Error('Angle A is too close to 90 deg for stable computation.');
    }
    const c = b / cosine;
    const a = b * tangent;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'b+alpha',
      formulas: [`c = b / cos(α)`, `a = b * tan(α)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Hypotenuse c**<br/>Identify c using leg b and its adjacent angle A.<br/>Use c = b / cos(A)<br/>c = ${b} / cos(${fmtAngle(alphaRad)}) = ${fmtValue(c)}`,
        `**Solve for Leg a**<br/>Derive the opposite side a using tangent.<br/>Use a = b × tan(A)<br/>a = ${b} × tan(${fmtAngle(alphaRad)}) = ${fmtValue(a)}`,
        `**Determine Angle B**<br/>Apply the 90-degree complementary property.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('b') && has('beta')) {
    const b = values.b as number;
    const betaRad = beta as number;
    const alphaRad = HALF_PI - betaRad;
    const sine = Math.sin(betaRad);
    const tangent = Math.tan(betaRad);
    if (Math.abs(sine) < EPSILON || Math.abs(tangent) < EPSILON) {
      throw new Error('Angle B is too small for stable computation.');
    }
    const c = b / sine;
    const a = b / tangent;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'b+beta',
      formulas: [`c = b / sin(β)`, `a = b / tan(β)`, `α = ${fullAngleSymbol} - β`],
      steps: [
        `**Solve for Hypotenuse c**<br/>Identify c using its opposite angle B and leg b.<br/>Use c = b / sin(B)<br/>c = ${b} / sin(${fmtAngle(betaRad)}) = ${fmtValue(c)}`,
        `**Solve for Leg a**<br/>Calculate the adjacent leg relative to angle B.<br/>Use a = b / tan(B)<br/>a = ${b} / tan(${fmtAngle(betaRad)}) = ${fmtValue(a)}`,
        `**Determine Angle A**<br/>Complete the triangle by finding angle A.<br/>Use A = ${fullAngleSymbol} - B<br/>A = ${fullAngleSymbol} - ${fmtAngle(betaRad)} = ${fmtAngle(alphaRad)}`
      ]
    });
  }

  if (has('c') && has('alpha')) {
    const c = values.c as number;
    const alphaRad = alpha as number;
    const betaRad = HALF_PI - alphaRad;
    const a = c * Math.sin(alphaRad);
    const b = c * Math.cos(alphaRad);
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'c+alpha',
      formulas: [`a = c * sin(α)`, `b = c * cos(α)`, `β = ${fullAngleSymbol} - α`],
      steps: [
        `**Solve for Leg a**<br/>Multiple hypotenuse by sine of opposite angle A.<br/>Use a = c × sin(A)<br/>a = ${c} × sin(${fmtAngle(alphaRad)}) = ${fmtValue(a)}`,
        `**Solve for Leg b**<br/>Multiply hypotenuse by cosine of adjacent angle A.<br/>Use b = c × cos(A)<br/>b = ${c} × cos(${fmtAngle(alphaRad)}) = ${fmtValue(b)}`,
        `**Determine Angle B**<br/>Angle B is complementary to angle A.<br/>Use B = ${fullAngleSymbol} - A<br/>B = ${fullAngleSymbol} - ${fmtAngle(alphaRad)} = ${fmtAngle(betaRad)}`
      ]
    });
  }

  if (has('c') && has('beta')) {
    const c = values.c as number;
    const betaRad = beta as number;
    const alphaRad = HALF_PI - betaRad;
    const b = c * Math.sin(betaRad);
    const a = c * Math.cos(betaRad);
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      providedKeys,
      providedValues: values,
      angleMode,
      combination: 'c+beta',
      formulas: [`b = c * sin(β)`, `a = c * cos(β)`, `α = ${fullAngleSymbol} - β`],
      steps: [
        `**Solve for Leg b**<br/>Multiple hypotenuse by sine of opposite angle B.<br/>Use b = c × sin(B)<br/>b = ${c} × sin(${fmtAngle(betaRad)}) = ${fmtValue(b)}`,
        `**Solve for Leg a**<br/>Multiply hypotenuse by cosine of adjacent angle B.<br/>Use a = c × cos(B)<br/>a = ${c} × cos(${fmtAngle(betaRad)}) = ${fmtValue(a)}`,
        `**Determine Angle A**<br/>Angle A is complementary to angle B.<br/>Use A = ${fullAngleSymbol} - B<br/>A = ${fullAngleSymbol} - ${fmtAngle(betaRad)} = ${fmtAngle(alphaRad)}`
      ]
    });
  }

  const chosen = providedKeys.join(' + ');
  throw new Error(`The combination "${chosen}" is not supported for right-triangle calculations.`);
};
