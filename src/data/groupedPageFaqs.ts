import type { GroupedCalculatorPage } from 'src/data/rightTriangleGroupedPages';

export type GroupedPageFaqItem = {
  question: string;
  answer: string;
};

const createFaqs = (
  items: GroupedPageFaqItem[]
): GroupedPageFaqItem[] => items;

export const GROUPED_PAGE_FAQS: Record<GroupedCalculatorPage['slug'], GroupedPageFaqItem[]> = {
  'right-triangle-side-calculator': createFaqs([
    {
      question: 'When should I use the Right Triangle Side Calculator?',
      answer:
        'Use it when you know any two side lengths in a right triangle and need the third side. It is ideal for quickly finding a missing leg or the hypotenuse.'
    },
    {
      question: 'Can this page solve both missing leg and hypotenuse problems?',
      answer:
        'Yes. This grouped page includes dedicated modes for hypotenuse from two legs and for each missing-leg case when hypotenuse and one leg are known.'
    },
    {
      question: 'Why does the calculator reject some missing-leg inputs?',
      answer:
        'For a valid right triangle, the hypotenuse must be longer than any leg. If the known leg is greater than or equal to the hypotenuse, no real missing leg exists.'
    },
    {
      question: 'Should I round side values before entering them?',
      answer:
        'No. Enter the most precise measurements you have, then round only the final result. Early rounding can produce noticeable error in follow-up calculations.'
    },
    {
      question: 'What is the best next page after solving a missing side?',
      answer:
        'Most users continue to the Right Triangle Angle Calculator or Right Triangle Area Calculator to complete the rest of the triangle analysis.'
    }
  ]),
  'right-triangle-measurements-calculator': createFaqs([
    {
      question: 'What does the Right Triangle Measurements Calculator compute?',
      answer:
        'This page computes perimeter and semiperimeter for right triangles. It focuses on boundary-length values used in geometry, drafting, and quantity planning.'
    },
    {
      question: 'What is semiperimeter and why is it useful?',
      answer:
        'Semiperimeter is half of the perimeter. It is commonly used as an input for area and radius relations in advanced triangle formulas.'
    },
    {
      question: 'Can I use this page if one side is missing?',
      answer:
        'You should first solve the missing side using the Right Triangle Side Calculator. Then return here with all three sides to get exact perimeter and semiperimeter.'
    },
    {
      question: 'Do units matter for perimeter and semiperimeter?',
      answer:
        'Yes. Keep all side inputs in the same unit. The output will use that same linear unit, and semiperimeter will be exactly half of the perimeter.'
    },
    {
      question: 'What is a common practical use of this page?',
      answer:
        'It is frequently used for estimating edge length for trims, borders, wiring runs, and other material planning around triangular shapes.'
    }
  ]),
  'right-triangle-trig-ratios-calculator': createFaqs([
    {
      question: 'Which trigonometric ratios are included on this page?',
      answer:
        'This page covers sine, cosine, tangent, secant, cosecant, and cotangent in one interface so you can switch between direct and reciprocal ratios quickly.'
    },
    {
      question: 'Do I need angle input to calculate trig ratios here?',
      answer:
        'No. The modes use side relationships in a right triangle. You only need to assign opposite, adjacent, and hypotenuse correctly for the selected angle reference.'
    },
    {
      question: 'Why are trigonometric ratios unitless?',
      answer:
        'Each ratio divides one side length by another side length, so units cancel. That is why trig ratios are pure numeric values.'
    },
    {
      question: 'How can I verify that my ratio inputs are correct?',
      answer:
        'A good check is tan(A) = sin(A) / cos(A). If this relationship is far off, side labeling or input values may be incorrect.'
    },
    {
      question: 'What should I open after finding ratios?',
      answer:
        'Use the Right Triangle Angle Calculator to recover angles or the Side-from-Angle Calculator to solve missing side lengths from angle relationships.'
    }
  ]),
  'right-triangle-angle-calculator': createFaqs([
    {
      question: 'How do you find an angle in a right triangle?',
      answer:
        'Use an inverse trigonometric function on a side ratio. With opposite and hypotenuse, compute arcsin(opposite/hypotenuse). With adjacent and hypotenuse, use arccos(adjacent/hypotenuse). With both legs, use arctan(opposite/adjacent). The result is the angle in degrees.'
    },
    {
      question: 'What is the difference between sin and arcsin?',
      answer:
        'Sine takes an angle and returns a ratio: sin(30 degrees) = 0.5. Arcsin reverses this: it takes a ratio and returns the angle, so arcsin(0.5) = 30 degrees. Use sine when you know the angle and need a side; use arcsin when you know the sides and need the angle.'
    },
    {
      question: 'When should I use arctan instead of arcsin?',
      answer:
        'Use arctan when you know both legs (opposite and adjacent) but not the hypotenuse. Arctan skips the hypotenuse entirely, which saves a step in field measurements like roof pitch where rise and run are measured directly. Use arcsin when the hypotenuse is one of your known sides.'
    },
    {
      question: 'Why do the two acute angles add up to 90 degrees?',
      answer:
        'Triangle angles always sum to 180 degrees. The right angle takes 90 of those, leaving 90 for the other two combined. This means A + B = 90 degrees, so finding one acute angle immediately gives the other by subtraction.'
    },
    {
      question: 'Can the angle be 90 degrees?',
      answer:
        'No. The 90-degree angle is the right angle at vertex C, which is given. The calculator finds the two acute angles A and B, each strictly between 0 and 90 degrees. If your result hits 0 or 90 degrees, the inputs describe a degenerate triangle, not a valid one.'
    },
    {
      question: 'What if my side ratio is greater than 1?',
      answer:
        'For arcsin and arccos, a ratio above 1 is impossible and signals mislabeled sides. The hypotenuse must be the longest side and the denominator. Reassign the longest measurement as the hypotenuse (c) and recompute. Arctan ratios can exceed 1 legitimately.'
    },
    {
      question: 'How do I know which side is opposite and which is adjacent?',
      answer:
        'Pick your reference angle first. The opposite side sits across from that angle (not touching its vertex). The adjacent side touches the angle vertex but is not the hypotenuse. The same physical side is opposite for one acute angle and adjacent for the other.'
    },
    {
      question: 'Why do arcsin, arccos, and arctan give the same answer?',
      answer:
        'Because they describe the same geometric angle through different side pairs. In a 3-4-5 triangle, arcsin(3/5), arccos(4/5), and arctan(3/4) all equal 36.87 degrees. This agreement is a powerful verification: if two methods disagree, a side is mislabeled.'
    },
    {
      question: 'Should angles be in degrees or radians?',
      answer:
        'This calculator uses degrees, the standard for construction, navigation, and classroom geometry. If you compute by hand on a scientific calculator, check it is in degree mode. A radian-mode result like 0.64 for a 3-4-5 triangle converts to 36.87 degrees by multiplying by 180/pi.'
    },
    {
      question: 'How precise should my angle answer be?',
      answer:
        'Match your input precision. If sides are measured to the nearest centimeter, two decimal places (36.87 degrees) is appropriate. For rough field estimates, whole degrees suffice. Keep full precision during calculation and round only the final answer.'
    },
    {
      question: 'Can I find an angle with only one side known?',
      answer:
        'No. One side is not enough; infinitely many right triangles share a single side length. You need two sides (for inverse trig) or one side plus one acute angle (for the complement rule). The calculator requires exactly two inputs.'
    },
    {
      question: 'How can I check that my angle is correct?',
      answer:
        'Three checks: both angles must fall between 0 and 90 degrees, they must sum to exactly 90 degrees, and recomputing with a different inverse function should give the same result. For a 3-4-5 triangle, arcsin(3/5) = 36.87 degrees and arctan(3/4) = 36.87 degrees confirm each other.'
    }
  ]),
  'right-triangle-side-from-angle-calculator': createFaqs([
    {
      question: 'When is this calculator better than a basic side calculator?',
      answer:
        'Use this page when an angle is known along with one side. It is optimized for trig-based side recovery rather than purely side-to-side Pythagorean solving.'
    },
    {
      question: 'What formulas does this grouped page use?',
      answer:
        'It applies side formulas based on sine, cosine, and tangent, such as a = c * sin(A), b = c * cos(A), and tangent conversions between opposite and adjacent.'
    },
    {
      question: 'Should I enter the angle in degrees or radians?',
      answer:
        'Use degrees on this page. Entering radians by mistake is a common reason for unrealistic side outputs.'
    },
    {
      question: 'Why do tangent-based results become unstable near 90 degrees?',
      answer:
        'Tangent grows very large as angle values approach 90 degrees, so tiny input variation can cause large output changes.'
    },
    {
      question: 'What is the recommended validation step after solving a side?',
      answer:
        'Open the Right Triangle Side Calculator and verify the full triangle with Pythagorean consistency before finalizing your result.'
    }
  ]),
  'right-triangle-area-calculator': createFaqs([
    {
      question: 'What area methods are included on this page?',
      answer:
        'This page combines area from legs, angle-based area forms, semiperimeter-radius style area, and altitude-based area modes in one place.'
    },
    {
      question: 'How do I choose the correct area mode?',
      answer:
        'Pick the mode that matches the values you already know. This reduces conversion errors and speeds up solving.'
    },
    {
      question: 'What units does the area output use?',
      answer:
        'Area is always returned in square units. If your side unit is meters, output area is square meters.'
    },
    {
      question: 'Can I cross-check area with two different formulas?',
      answer:
        'Yes. This page is designed for that. Solving area from two independent input sets is one of the best ways to catch mistakes.'
    },
    {
      question: 'Which page pairs best with area calculations?',
      answer:
        'The Altitude Calculator and Measurements Calculator are strong companions for validating height-based and boundary-based geometry.'
    }
  ]),
  'right-triangle-altitude-calculator': createFaqs([
    {
      question: 'What altitude does this page compute?',
      answer:
        'It computes the altitude drawn from the right-angle vertex to the hypotenuse, often denoted h in right-triangle geometry.'
    },
    {
      question: 'Which inputs can I use to find altitude?',
      answer:
        'You can solve altitude using side-based relations like h = ab/c or using hypotenuse segment relations like h = sqrt(pq), depending on known values.'
    },
    {
      question: 'How do I know if my altitude result is reasonable?',
      answer:
        'In a valid right triangle, altitude to the hypotenuse should be smaller than both legs. If not, inputs likely need review.'
    },
    {
      question: 'Can altitude be used to verify area?',
      answer:
        'Yes. You can compute area with hypotenuse and altitude and compare it with area from legs for a strong consistency check.'
    },
    {
      question: 'What page should I use with this one for segment checks?',
      answer:
        'Use the Right Triangle Projection and Segment Calculator to validate p, q, c, and h relationships on the same triangle.'
    }
  ]),
  'right-triangle-projection-calculator': createFaqs([
    {
      question: 'What are projections p and q in a right triangle?',
      answer:
        'They are hypotenuse segments created by the altitude from the right angle. This page helps solve those segments and related leg-projection identities.'
    },
    {
      question: 'Which projection identities are used here?',
      answer:
        'Common identities include a^2 = cp, b^2 = cq, and p + q = c. These connect legs, segments, and hypotenuse in a consistent theorem set.'
    },
    {
      question: 'Can I recover a missing leg from projection values?',
      answer:
        'Yes. Use the dedicated projection modes to derive leg values from hypotenuse and segment data.'
    },
    {
      question: 'What is a quick consistency check for segment inputs?',
      answer:
        'Verify that p + q equals c and all values are non-negative. Then cross-check with Pythagorean side relations when possible.'
    },
    {
      question: 'When should I use this page instead of basic side solving?',
      answer:
        'Use it when your data is segment-based or proof-based, especially in geometry tasks focused on altitude-projection theorems.'
    }
  ]),
  'right-triangle-radius-calculator': createFaqs([
    {
      question: 'What radius values does this page provide?',
      answer:
        'It provides inradius and circumradius for right triangles, including related radius relations used in geometry and construction contexts.'
    },
    {
      question: 'What is the right-triangle circumradius shortcut?',
      answer:
        'For any right triangle, circumradius is half the hypotenuse, so R = c/2.'
    },
    {
      question: 'How is inradius computed on this page?',
      answer:
        'A common right-triangle relation used is r = (a + b - c)/2, derived from side geometry and area relations.'
    },
    {
      question: 'Why might my inradius result look too small or negative?',
      answer:
        'That usually indicates invalid triangle inputs or a side assignment issue. Verify the triangle with side-solving first.'
    },
    {
      question: 'Where are radius values useful in practice?',
      answer:
        'Radius values are useful for inscribed or circumscribed design checks, circle-fit constraints, and derived geometry workflows.'
    }
  ]),
  'special-right-triangle-calculator': createFaqs([
    {
      question: 'Which special triangles are covered on this page?',
      answer:
        'This page focuses on 45-45-90 and 30-60-90 triangles, where side ratios are fixed and solving is faster than general-triangle methods.'
    },
    {
      question: 'What is the key ratio for 45-45-90 triangles?',
      answer:
        'If a is a leg, then hypotenuse c = a * sqrt(2). Conversely, a = c / sqrt(2). Both are available as dedicated quick modes.'
    },
    {
      question: 'What is the key ratio for 30-60-90 triangles?',
      answer:
        'If the short leg is a, then long leg = a * sqrt(3) and hypotenuse c = 2a.'
    },
    {
      question: 'When should I use special-triangle solving instead of trig?',
      answer:
        'Use special-triangle modes whenever the angle pattern is known. It is faster, cleaner, and often more exact than full trig workflows.'
    },
    {
      question: 'How can I verify special-triangle outputs?',
      answer:
        'After solving with ratio rules, you can validate with the Side Calculator or Trig Ratios Calculator as a second check.'
    }
  ])
};
