export interface HubGuideFaq {
  question: string;
  answer: string;
}

export const HUB_GUIDE_FAQS: HubGuideFaq[] = [
  {
    question: 'How do I solve a right triangle with two sides?',
    answer:
      'Enter the two known sides into their matching fields, for example legs a and b, or the hypotenuse c with one leg. The calculator applies the Pythagorean theorem to find the missing side, then uses inverse trigonometric ratios to find the two acute angles. Area, perimeter, altitude, projections, inradius, and circumradius are computed from the completed triangle.'
  },
  {
    question: 'Can I solve a right triangle with one side and one angle?',
    answer:
      'Yes, as long as the angle is acute (strictly between 0 and 90 degrees). Enter the known side and the known angle; the calculator uses sine, cosine, or tangent to find the remaining sides and subtracts the known angle from 90 degrees to find the other acute angle. Two angles alone are not enough, because angles fix the shape but not the size.'
  },
  {
    question: 'How do I find the hypotenuse?',
    answer:
      'If you know both legs, use c = √(a² + b²). If you know one leg and an acute angle, divide or multiply with a trigonometric ratio: with leg a and angle A, c = a / sin(A); with leg b and angle A, c = b / cos(A). The hypotenuse is always the longest side, so check that your answer is longer than either leg.'
  },
  {
    question: 'How do I find a missing leg?',
    answer:
      'Rearrange the Pythagorean theorem: a = √(c² − b²) or b = √(c² − a²), using whichever leg you know. If you know the hypotenuse and an acute angle instead, use a = c × sin(A) and b = c × cos(A). If the value under the square root is negative, the hypotenuse you entered is not longer than the leg, and the inputs cannot form a right triangle.'
  },
  {
    question: 'How do I calculate an unknown angle?',
    answer:
      'Use an inverse trigonometric ratio with the sides relative to that angle. For angle A: A = arctan(a / b), A = arcsin(a / c), or A = arccos(b / c), whichever matches the sides you know. Then B = 90° − A. Make sure your calculator is in degree mode; in radian mode the same inputs return values near 0.64 instead of 36.87.'
  },
  {
    question: 'Can I solve a right triangle using only two angles?',
    answer:
      'No. Two angles determine the shape of the triangle but not its size: a 3-4-5 triangle and a 6-8-10 triangle have identical angles. You need at least one side length to fix the scale. Any side works: enter it together with one angle, or enter two sides, and the triangle is fully determined.'
  },
  {
    question: 'Why does my calculator show invalid measurements?',
    answer:
      'The most common causes are a leg entered as the hypotenuse (c must be longer than both a and b), a zero or negative side length, an angle of 0° or 90° (acute angles must lie strictly between), two angles with no side, or angles A and B that do not add to 90°. Correct the inconsistent value and the calculation will run.'
  },
  {
    question: 'What is the difference between the opposite and adjacent sides?',
    answer:
      'Opposite and adjacent are always defined relative to one chosen acute angle. For angle A, the opposite side is the leg across from A (side a) and the adjacent side is the leg touching A (side b). Switch to angle B and the labels swap: side b becomes opposite and side a becomes adjacent. The hypotenuse is never opposite or adjacent; it is always c.'
  },
  {
    question: 'How do I calculate the area of a right triangle?',
    answer:
      'Multiply the two legs and divide by two: K = (a × b) / 2. The legs are perpendicular, so they serve directly as base and height with no extra altitude step. For a 3-4-5 triangle the area is (3 × 4) / 2 = 6 square units. Equivalently, K = (h × c) / 2 using the altitude to the hypotenuse.'
  },
  {
    question: 'What is the altitude to the hypotenuse?',
    answer:
      'It is the perpendicular segment from the right-angle vertex C to the hypotenuse, with length h = (a × b) / c. It splits the hypotenuse into projections p = a² / c and q = b² / c, and it divides the triangle into two smaller triangles that are both similar to the original. In a 3-4-5 triangle, h = 12 / 5 = 2.4.'
  },
  {
    question: 'What is the difference between degrees and radians?',
    answer:
      'Both measure angles; 180° equals π radians (about 3.1416). This calculator accepts angles in degrees only, which is the standard for construction, navigation, and school geometry. If you have a radian value, convert it first: degrees = radians × 180 / π. Entering 0.64 where you meant 36.87° is a classic source of wrong answers.'
  },
  {
    question: 'How do I check that my final answer is correct?',
    answer:
      'Run five quick checks: the hypotenuse is the longest side; A + B = 90°; a² + b² = c² within rounding tolerance; area equals (a × b) / 2 and also (h × c) / 2; and p + q = c. If every check passes, the solution is geometrically consistent. See the verification checklist above for the full procedure.'
  }
];
