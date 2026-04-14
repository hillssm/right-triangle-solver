export type AngleMode = 'deg' | 'rad';
export type SolverInputKey = 'a' | 'b' | 'c' | 'alpha' | 'beta';

type RawNumericInputs = Partial<Record<SolverInputKey, number>>;

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
  ratioA: number;
  ratioB: number;
  tangentAlpha: number;
  combination: SupportedCombination;
  formulas: string[];
  steps: string[];
};

export const SOLVER_INPUT_KEYS: SolverInputKey[] = ['a', 'b', 'c', 'alpha', 'beta'];
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

const toRadians = (value: number, mode: AngleMode): number => (mode === 'deg' ? (value * Math.PI) / 180 : value);
const toDegrees = (value: number): number => (value * 180) / Math.PI;
const sanitizeNearZero = (value: number): number => (Math.abs(value) < EPSILON ? 0 : value);
const clampTrigInput = (value: number): number => Math.min(1, Math.max(-1, value));

const normalizeProvidedInputs = (inputs: RawNumericInputs): RawNumericInputs => {
  const normalized: RawNumericInputs = {};
  for (const key of SOLVER_INPUT_KEYS) {
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
    throw new Error('Angles must satisfy alpha + beta = 90 deg (pi/2 radians).');
  }

  const area = 0.5 * a * b;
  const perimeter = a + b + c;
  const h = (a * b) / c;

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
    ratioA: a / c,
    ratioB: b / c,
    tangentAlpha: a / b,
    combination: payload.combination,
    formulas: payload.formulas,
    steps: payload.steps
  };
};

export const parseMathExpression = (raw: string): number => {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error('Enter a value.');
  }

  const normalized = trimmed.toLowerCase().replace(/\u03c0/g, 'pi').replace(/\s+/g, '');
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

export const solveRightTriangle = (
  inputs: RawNumericInputs,
  angleMode: AngleMode = 'deg'
): RightTriangleSolution => {
  const values = normalizeProvidedInputs(inputs);
  const providedKeys = SOLVER_INPUT_KEYS.filter((key) => values[key] !== undefined);

  if (providedKeys.length !== 2) {
    throw new Error('Enter exactly two known values to solve the triangle.');
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
    throw new Error('Angle alpha must be between 0 and 90 deg (0 and pi/2 radians).');
  }

  if (beta !== undefined && !(beta > 0 && beta < HALF_PI)) {
    throw new Error('Angle beta must be between 0 and 90 deg (0 and pi/2 radians).');
  }

  if (alpha !== undefined && beta !== undefined) {
    if (Math.abs(alpha + beta - HALF_PI) > ANGLE_TOLERANCE) {
      throw new Error('Angles must satisfy alpha + beta = 90 deg (pi/2 radians).');
    }
    throw new Error('Angles alpha and beta alone are not enough. Provide one side and one angle.');
  }

  if (values.c !== undefined && values.a !== undefined && values.c <= values.a + EPSILON) {
    throw new Error('Hypotenuse c must be larger than side a.');
  }

  if (values.c !== undefined && values.b !== undefined && values.c <= values.b + EPSILON) {
    throw new Error('Hypotenuse c must be larger than side b.');
  }

  const has = (key: SolverInputKey): boolean => values[key] !== undefined;

  if (has('a') && has('b')) {
    const a = values.a as number;
    const b = values.b as number;
    const c = Math.hypot(a, b);
    const alphaRad = Math.atan2(a, b);
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'a+b',
      formulas: ['c = sqrt(a^2 + b^2)', 'alpha = atan(a / b)', 'beta = 90 deg - alpha'],
      steps: [
        'Use both legs with the Pythagorean theorem.',
        'Find alpha from the opposite/adjacent ratio.',
        'Compute beta from complementarity.'
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
      combination: 'a+c',
      formulas: ['b = sqrt(c^2 - a^2)', 'alpha = asin(a / c)', 'beta = 90 deg - alpha'],
      steps: [
        'Recover side b by rearranging the Pythagorean identity.',
        'Use sine to obtain alpha.',
        'Compute beta as the complementary angle.'
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
      combination: 'b+c',
      formulas: ['a = sqrt(c^2 - b^2)', 'alpha = acos(b / c)', 'beta = 90 deg - alpha'],
      steps: [
        'Recover side a by rearranging the Pythagorean identity.',
        'Use cosine to obtain alpha.',
        'Compute beta as the complementary angle.'
      ]
    });
  }

  if (has('a') && has('alpha')) {
    const a = values.a as number;
    const alphaRad = alpha as number;
    const sine = Math.sin(alphaRad);
    const tangent = Math.tan(alphaRad);
    if (Math.abs(sine) < EPSILON || Math.abs(tangent) < EPSILON) {
      throw new Error('Angle alpha is too small for stable computation.');
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
      combination: 'a+alpha',
      formulas: ['c = a / sin(alpha)', 'b = a / tan(alpha)', 'beta = 90 deg - alpha'],
      steps: [
        'Use side a with angle alpha via sine to recover c.',
        'Use tangent to recover b.',
        'Compute beta from complementarity.'
      ]
    });
  }

  if (has('a') && has('beta')) {
    const a = values.a as number;
    const betaRad = beta as number;
    const cosine = Math.cos(betaRad);
    const tangent = Math.tan(betaRad);
    if (Math.abs(cosine) < EPSILON) {
      throw new Error('Angle beta is too close to 90 deg for stable computation.');
    }
    const c = a / cosine;
    const b = a * tangent;
    const alphaRad = HALF_PI - betaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'a+beta',
      formulas: ['c = a / cos(beta)', 'b = a * tan(beta)', 'alpha = 90 deg - beta'],
      steps: [
        'Use side a with angle beta via cosine to recover c.',
        'Use tangent to recover side b.',
        'Compute alpha from complementarity.'
      ]
    });
  }

  if (has('b') && has('alpha')) {
    const b = values.b as number;
    const alphaRad = alpha as number;
    const cosine = Math.cos(alphaRad);
    const tangent = Math.tan(alphaRad);
    if (Math.abs(cosine) < EPSILON) {
      throw new Error('Angle alpha is too close to 90 deg for stable computation.');
    }
    const c = b / cosine;
    const a = b * tangent;
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'b+alpha',
      formulas: ['c = b / cos(alpha)', 'a = b * tan(alpha)', 'beta = 90 deg - alpha'],
      steps: [
        'Use side b with angle alpha via cosine to recover c.',
        'Use tangent to recover side a.',
        'Compute beta from complementarity.'
      ]
    });
  }

  if (has('b') && has('beta')) {
    const b = values.b as number;
    const betaRad = beta as number;
    const sine = Math.sin(betaRad);
    const tangent = Math.tan(betaRad);
    if (Math.abs(sine) < EPSILON || Math.abs(tangent) < EPSILON) {
      throw new Error('Angle beta is too small for stable computation.');
    }
    const c = b / sine;
    const a = b / tangent;
    const alphaRad = HALF_PI - betaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'b+beta',
      formulas: ['c = b / sin(beta)', 'a = b / tan(beta)', 'alpha = 90 deg - beta'],
      steps: [
        'Use side b with angle beta via sine to recover c.',
        'Use tangent to recover side a.',
        'Compute alpha from complementarity.'
      ]
    });
  }

  if (has('c') && has('alpha')) {
    const c = values.c as number;
    const alphaRad = alpha as number;
    const a = c * Math.sin(alphaRad);
    const b = c * Math.cos(alphaRad);
    const betaRad = HALF_PI - alphaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'c+alpha',
      formulas: ['a = c * sin(alpha)', 'b = c * cos(alpha)', 'beta = 90 deg - alpha'],
      steps: [
        'Project c onto side a using sine.',
        'Project c onto side b using cosine.',
        'Compute beta as the complementary angle.'
      ]
    });
  }

  if (has('c') && has('beta')) {
    const c = values.c as number;
    const betaRad = beta as number;
    const b = c * Math.sin(betaRad);
    const a = c * Math.cos(betaRad);
    const alphaRad = HALF_PI - betaRad;
    return finalizeSolution({
      a,
      b,
      c,
      alphaRad,
      betaRad,
      combination: 'c+beta',
      formulas: ['b = c * sin(beta)', 'a = c * cos(beta)', 'alpha = 90 deg - beta'],
      steps: [
        'Project c onto side b using sine.',
        'Project c onto side a using cosine.',
        'Compute alpha as the complementary angle.'
      ]
    });
  }

  const chosen = providedKeys.join(' + ');
  throw new Error(`The combination "${chosen}" is not supported for right-triangle solving.`);
};
