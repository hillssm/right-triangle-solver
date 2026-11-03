// areaFromInradiusSemiperimeterGuideTranslations.batch4.ts: Right Triangle Area From
// Inradius and Semiperimeter Guide (Page 20 of 45) translations for Korean (ko),
// Malay (ms), and Polish (pl).
//
// Math-marker conventions (verified against KaTeX):
// - Inline formulas use [[...]], display formulas use [[[......]]], copied from EN.
// - Exactly 2 backslashes for KaTeX commands in .ts source (\\boxed, \\frac, ...).
// - Every \boxed{...} display formula is brace-balanced so it renders (several EN
//   source markers carried a stray extra "}" which KaTeX rejects; those are fixed here).
// - Canonical variable names (r, s, K, a, b, c, I, R, P, x, y, z) stay unlocalized.
// - Calculator button labels stay English ("Calculate Area", "Reset") since the
//   calculator UI buttons are EN-only.
export const AREA_FROM_INRADIUS_SEMIPERIMETER_TRANSLATIONS_BATCH4 = {
  "ko": {
    "faqs": [
      {
        "question": "내접원 반지름과 반둘레를 이용한 넓이 공식은 무엇인가요?",
        "answer": "내접원 반지름 r에 반둘레 s를 곱하세요: K = rs. 예를 들어 r = 2, s = 12이면 K = 24 제곱단위가 됩니다. 이 공식은 직각삼각형뿐 아니라 모든 퇴화되지 않은 삼각형에 성립합니다. 반지름이 세 작은 삼각형의 공통 높이가 되기 때문입니다."
      },
      {
        "question": "직각삼각형에서 내접원 반지름이란 무엇인가요?",
        "answer": "삼각형 안에 내접한 원의 반지름으로, 내심에서 한 변까지의 수직 거리입니다. 3-4-5 삼각형에서는 내접원 반지름이 1이고, 6-8-10 삼각형에서는 2입니다. 내심은 세 내각의 이등분선이 만나는 점이며, 그 거리는 세 변 모두에 동일합니다."
      },
      {
        "question": "직각삼각형의 내접원 반지름은 어떻게 구하나요?",
        "answer": "세 변을 알 때는 r = (a + b - c) / 2 단축 공식을 사용하세요. 여기서 a와 b는 두 직각변, c는 빗변입니다. 5-12-13 삼각형에 적용하면 r = 2가 됩니다. 빗변이 아닌 변을 빼면 잘못된 결과가 나오므로 주의하세요."
      },
      {
        "question": "반둘레는 어떻게 구하나요?",
        "answer": "세 변을 모두 더한 뒤 절반으로 나누세요: s = (a + b + c) / 2. 5-12-13 삼각형에서는 s = 15가 됩니다. 반둘레는 항상 각 변보다 큽니다. 전체 둘레를 그대로 쓰면 넓이가 두 배가 되므로 반드시 절반으로 나누어야 합니다."
      },
      {
        "question": "넓이가 내접원 반지름 곱하기 반둘레와 같은 이유는 무엇인가요?",
        "answer": "내심과 세 꼭짓점을 이으면 삼각형이 높이가 r이고 밑변이 a, b, c인 세 작은 삼각형으로 나뉩니다. 세 넓이 ar/2 + br/2 + cr/2를 묶으면 r(a+b+c)/2가 되고, s = (a+b+c)/2이므로 전체 넓이는 rs가 됩니다."
      },
      {
        "question": "이 공식은 직각삼각형이 아닌 삼각형에도 적용되나요?",
        "answer": "네. K = rs는 모든 퇴화되지 않은 삼각형에 성립합니다. 직각삼각형에만 해당하는 것은 r = (a+b-c)/2 단축 공식뿐인데, 이는 직각에서 생기는 작은 정사각형에 의존하기 때문입니다. 넓이 공식 자체는 완전히 일반적입니다."
      },
      {
        "question": "내접원 반지름과 외접원 반지름의 차이는 무엇인가요?",
        "answer": "내접원 반지름 r은 삼각형 안에 들어 세 변에 접하는 원의 반지름이고, 외접원 반지름 R은 세 꼭짓점을 모두 지나는 원의 반지름입니다. 직각삼각형에서는 외심이 빗변의 중점이므로 R = c/2가 됩니다. 두 원은 완전히 다르므로 혼동하지 마세요."
      },
      {
        "question": "세 변을 모두 모르는데 넓이를 구할 수 있나요?",
        "answer": "네. 내접원 반지름과 반둘레를 이미 알고 있다면 K = rs로 한 번의 곱셈만으로 넓이를 바로 구할 수 있으며, 변의 길이는 전혀 필요 없습니다. 계산기는 이 두 입력만으로 동작하도록 설계되었습니다."
      },
      {
        "question": "반둘레는 둘레의 절반과 같은가요?",
        "answer": "네, 정확히 같습니다: s = P/2 = (a+b+c)/2. 공식에 필요한 것은 절반 값이라는 점이 중요합니다. 전체 둘레를 그대로 곱하면 답이 두 배가 되므로, 곱하기 전에 반드시 절반으로 나누어야 합니다."
      },
      {
        "question": "내접원 반지름은 세 변과 어떤 관계가 있나요?",
        "answer": "직각삼각형에서는 r = (a+b-c)/2입니다. 여기서 a와 b는 직각변, c는 빗변입니다. 또한 s + r = a + b, s - r = c를 만족하므로, r과 s만 알면 세 변을 모두 복원할 수 있습니다. 합과 곱으로 두 직각변을 구합니다."
      },
      {
        "question": "헤론의 공식과 내접원 공식의 차이는 무엇인가요?",
        "answer": "헤론의 공식 K = sqrt(s(s-a)(s-b)(s-c))은 세 변이 모두 필요하고, 내접원 공식 K = rs는 r과 s만 필요합니다. 변을 알면 헤론의 공식을, r과 s를 알면 K = rs를 사용하세요. 입력이 일관되면 두 공식은 같은 넓이를 줍니다."
      },
      {
        "question": "계산한 넓이를 어떻게 검증하나요?",
        "answer": "독립적인 방법으로 확인하세요: 직각변 공식 K = ab/2, 피타고라스 정리, 내접원 반지름 단축 공식, 반둘레 정의, 헤론의 공식입니다. 서로 다른 공식에서 같은 답이 나오면 입력과 계산이 모두 올바르다는 뜻입니다."
      }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 살펴보기",
    "relatedItems": [
      "직각변으로 구하는 직각삼각형 넓이 계산기",
      "빗변과 높이로 구하는 직각삼각형 넓이 계산기",
      "각도로 구하는 직각삼각형 넓이 계산기",
      "높이로 구하는 직각삼각형 넓이 계산기",
      "직각삼각형 내접원 반지름 계산기",
      "직각삼각형 반둘레 계산기"
    ],
    "relatedIntro": "측정값에 따라 필요한 계산기가 다릅니다.",
    "faqHeading": "자주 묻는 질문",
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "sec-intro": "내접원 반지름과 반둘레로 직각삼각형 넓이 구하는 방법",
      "sec-incircle": "기하학에서 내접원이란 무엇인가요?",
      "sec-semiperimeter": "삼각형의 반둘레란 무엇인가요?",
      "sec-formula": "넓이가 내접원 반지름 곱하기 반둘레인 이유",
      "sec-inradius": "직각삼각형의 내접원 반지름 구하는 방법",
      "sec-howto": "내접원 반지름과 반둘레 넓이 계산기 사용 방법",
      "sec-examples": "단계별 풀이 예제",
      "sec-applications": "실생활 응용",
      "sec-relationship": "내접원 반지름과 반둘레가 세 변과 갖는 관계",
      "sec-valid": "측정값이 유효한지 확인하는 방법",
      "sec-heron": "내접원 공식과 헤론의 공식 비교",
      "sec-legs": "내접원 공식이 직각변 공식과 일치하는 이유",
      "sec-mistakes": "흔한 실수",
      "sec-verify": "넓이를 검증하는 방법",
      "sec-units": "측정 단위와 반올림",
      "sec-related": "관련 직각삼각형 계산기 살펴보기",
      "sec-faq": "자주 묻는 질문",
      "sec-conclusion": "결론"
    },
    "sections": {
      "sec-intro": {
        "h2": "내접원 반지름과 반둘레로 직각삼각형의 넓이 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "직각삼각형의 내접원 반지름이 [[r=2]]이고 반둘레가 [[s=12]]입니다. [[K=r\\times s]]를 적용하세요: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. 이 삼각형은 24제곱단위의 평평한 넓이를 차지합니다. 이것이 계산기가 자동화하는 완전한 방법입니다: 두 개의 측정값, 한 번의 곱셈, 하나의 답." },
          { "kind": "p", "text": "내접원 반지름은 삼각형 안에 꼭 맞게 들어가 세 변에 모두 닿는 원의 반지름입니다. 반둘레는 삼각형 둘레의 절반입니다. 이 두 값만으로 넓이를 구할 수 있는 이유는, 원의 반지름이 밑변이 삼각형의 변인 세 작은 삼각형의 높이가 되기 때문입니다. 이 항등식은 직각삼각형뿐 아니라 모든 퇴화되지 않은 삼각형에 성립합니다. 직각삼각형이 특별한 이유는 내접원 반지름 자체를 세 변으로부터 빠르게 구할 수 있기 때문입니다. 내접원이 직접 측정되었거나, 내접원 반지름과 반둘레를 이미 알고 있을 때 가장 유용합니다." }
        ]
      },
      "sec-incircle": {
        "h2": "기하학에서 내접원이란 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "이 가이드 전체의 표기법은 다음과 같습니다: [[A]], [[B]], [[C]]는 꼭짓점과 각이며 [[C=90^\\circ]]입니다. [[a]]와 [[b]]는 두 직각변, [[c]]는 [[C]]의 맞은편 빗변, [[r]]은 내접원 반지름, [[I]]는 내심, [[s]]는 반둘레, [[P]]는 둘레, [[K]]는 넓이이며, 각 [[A]]와 혼동되지 않도록 모든 곳에서 넓이를 [[K]]로 표기합니다." },
          { "kind": "h3", "text": "내접원의 정의" },
          { "kind": "p", "text": "내접원은 삼각형 안에 들어가 세 변에 모두 접하는 가장 큰 원입니다. 삼각형의 각 변이 원의 접선이 되기 때문에 완전히 안에 들어갑니다: 원이 변에 정확히 한 점에서 닿고 그 안쪽에 머무릅니다. 변 근처에 있을 뿐인 원은 해당하지 않습니다. 내접원은 각 변에 접해야 하며, 한 점에서 닿은 뒤 내부로 되돌아갑니다. 모든 퇴화되지 않은 삼각형은 정확히 하나의 내접원을 가지며, 세 직선이 평행하지 않아 기하학적으로 원이 완전히 고정되므로 중심도 유일합니다." },
          { "kind": "h3", "text": "내접원 반지름이란 무엇인가요?" },
          { "kind": "p", "text": "내접원 반지름은 내심에서 삼각형의 한 변까지의 거리입니다. [[I]]가 내심이고 [[D]]가 내접원이 변에 닿는 점이라면 [[r=ID]]입니다. 원의 반지름은 중심에서 접선인 변까지의 최단 거리이며, 그 최단 거리는 세 변 모두에 동일합니다. 그래서 원이 세 변 모두에 접하는 것이지, 그저 가까이 있을 뿐이 아닙니다." },
          { "kind": "h3", "text": "내접원 반지름이 각 변에 수직인 이유는 무엇인가요?" },
          { "kind": "p", "text": "원의 기본 성질에 따르면, 직선이 원에 닿는 모든 점에서 그 점으로 그은 반지름은 직선과 직각을 이룹니다. 따라서 [[D]]가 변 [[AB]] 위의 접점이라면 [[ID\\perp AB]]입니다. 나머지 두 변도 마찬가지입니다. 이 수직성은 장식이 아닙니다. 넓이 공식을 유도할 때 각 반지름이 작은 삼각형의 높이가 되도록 하는 성질이며, 삼각형의 높이는 밑변에 수직이어야 하기 때문입니다." },
          { "kind": "h3", "text": "내심 이해하기" },
          { "kind": "p", "text": "내심 [[I]]는 삼각형의 세 내각 이등분선이 만나는 점입니다. 각 이등분선은 그 각을 이루는 두 변으로부터 같은 거리에 있는 점들의 집합이므로, 세 이등분선 위에 있는 점은 세 변으로부터 모두 같은 거리에 있고 삼각형 안에 있어야 합니다. 그 공통 거리가 바로 내접원 반지름이며, [[I]]를 중심으로 반지름 [[r]]인 원이 각 변에 한 번씩 닿습니다. 그것이 내접원입니다." },
          { "kind": "h3", "text": "내접원 반지름과 외접원 반지름은 같은가요?" },
          { "kind": "p", "text": "아닙니다. 내접원 반지름 [[r]]은 삼각형 안의 원의 반지름이고, 외접원 반지름 [[R]]은 세 꼭짓점을 모두 지나는 원, 즉 외접원의 반지름입니다. 직각삼각형에서는 외접원의 중심이 빗변의 중점이므로 [[[\\boxed{R=\\frac{c}{2}}]]]입니다. 두 반지름은 완전히 다른 원을 나타냅니다: 하나는 삼각형 안에 내접하고, 다른 하나는 삼각형 둘레에 그려집니다. 이 둘을 혼동하는 것은 이 주제에서 가장 흔한 실수이므로 구분하세요: 안쪽은 [[r]], 바깥은 [[R]]입니다." }
        ],
        "imgAlt": "내접원, 내심 I, 내접원 반지름 r, 세 접점, 수직 표시, 외접원 비교가 표시된 직각삼각형 ABC",
        "figcaption": "삼각형 ABC와 그 내접원: 내심 I, 내접원 반지름 r = ID이며 ID는 각 변에 수직이고, 비교를 위한 외접원도 표시."
      },
      "sec-semiperimeter": {
        "h2": "삼각형의 반둘레란 무엇인가요?",
        "blocks": [
          { "kind": "h3", "text": "반둘레의 정의" },
          { "kind": "p", "text": "반둘레는 삼각형 전체 둘레의 절반입니다: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. 여기서 [[a]]와 [[b]]는 직각변, [[c]]는 빗변입니다. 반둘레는 한 변처럼 길이이며, 세 변을 하나의 수로 합치기 때문에 넓이 공식에서 자리를 차지합니다." },
          { "kind": "h3", "text": "둘레와 반둘레의 차이" },
          { "kind": "p", "text": "둘레는 삼각형 둘레의 전체 거리 [[P=a+b+c]]이고, 반둘레는 그 절반 [[s=\\frac{P}{2}]]입니다. 3-4-5 삼각형에서는 [[P=3+4+5=12]]이고 [[s=\\frac{12}{2}=6]]입니다. 반둘레는 경계의 길이가 아니라 그 절반이며, [[K=rs]]에 전체 둘레를 넣으면 실제 넓이의 두 배가 됩니다." },
          { "kind": "h3", "text": "넓이 공식에 반둘레가 쓰이는 이유" },
          { "kind": "p", "text": "내심과 세 꼭짓점을 이으면 삼각형이 세 작은 삼각형으로 나뉘고, 각 작은 삼각형의 수직 높이는 [[r]]입니다. 밑변은 [[a]], [[b]], [[c]]이므로 합친 넓이는 [[K=\\frac12r(a+b+c)]]입니다. [[s=\\frac{a+b+c}{2}]]이므로 절반 둘레는 이미 [[s]] 안에 들어 있어 [[K=rs]]가 됩니다. 다음 절에서 이를 완전히 유도합니다." },
          { "kind": "h3", "text": "반둘레가 한 변보다 작을 수 있나요?" },
          { "kind": "p", "text": "아닙니다. 삼각형 부등식에 따르면 모든 삼각형에서 [[a+b>c]]이므로 [[s=\\frac{a+b+c}{2}>c]]입니다. 나머지 두 변에도 같은 논증이 적용됩니다: [[s>a]]이고 [[s>b]]입니다. 반둘레는 항상 각 변보다 큽니다. 이는 입력값에 대한 빠른 정상성 검사입니다: 주장된 반둘레가 어느 변보다 작다면 그 수들은 실제 삼각형을 나타낼 수 없습니다." }
        ]
      },
      "sec-formula": {
        "h2": "삼각형의 넓이가 내접원 반지름 곱하기 반둘레인 이유는 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "표준 삼각형 넓이 규칙에서 시작합니다: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. 내심 [[I]]에서 세 꼭짓점으로 선분을 그으면 원래 삼각형이 세 작은 삼각형으로 나뉩니다. 각 작은 삼각형은 밑변이 원래 삼각형의 한 변과 같고, 반지름이 각 변에 직각으로 만나므로 수직 높이가 내접원 반지름 [[r]]과 같습니다. 이는 모든 퇴화되지 않은 삼각형에 성립합니다. 이 계산기의 삼각형은 직각삼각형이지만, 넓이 항등식 자체는 완전히 일반적입니다." },
          { "kind": "h3", "text": "첫 번째 작은 삼각형의 넓이" },
          { "kind": "p", "text": "변 [[a]] 위에 선 작은 삼각형은 밑변이 [[a]], 높이가 [[r]]입니다: [[[\\boxed{K_1=\\frac{ar}{2}}]]]." },
          { "kind": "h3", "text": "두 번째 작은 삼각형의 넓이" },
          { "kind": "p", "text": "변 [[b]] 위에 선 작은 삼각형은 밑변이 [[b]], 높이가 [[r]]입니다: [[[\\boxed{K_2=\\frac{br}{2}}]]]." },
          { "kind": "h3", "text": "세 번째 작은 삼각형의 넓이" },
          { "kind": "p", "text": "변 [[c]] 위에 선 작은 삼각형은 밑변이 [[c]], 높이가 [[r]]입니다: [[[\\boxed{K_3=\\frac{cr}{2}}]]]." },
          { "kind": "h3", "text": "세 넓이를 더하기" },
          { "kind": "p", "text": "세 작은 삼각형은 겹치지 않고 원래 삼각형을 채우므로 [[K=K_1+K_2+K_3]]입니다. 대입하면 [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]가 됩니다. [[\\frac{r}{2}]]로 묶으면 [[K=\\frac{r(a+b+c)}{2}]]가 됩니다. [[s=\\frac{a+b+c}{2}]]임을 떠올리면 [[[\\boxed{K=r\\times s}]]]가 됩니다. 모든 전환이 정당합니다: 채우기가 정확하고, 높이 [[r]]이 공통이며, 반둘레가 2로 나누는 것을 흡수합니다." },
          { "kind": "h3", "text": "이 공식에 2로 나누는 과정이 또 필요 없는 이유" },
          { "kind": "p", "text": "2분의 1이 이미 반둘레 안에 접혀 있기 때문입니다. 세 개의 절반이 합쳐져 [[\\frac{r(a+b+c)}{2}]]가 되고, [[s]]는 정확히 둘레의 절반이므로 한 번 더 2로 나누면 올바른 식의 4분의 1이 됩니다. [[r\\times s]]를 계산하고 거기서 멈추세요. 추가로 절반을 나누는 것은 수정이 아니라 실수입니다." }
        ],
        "imgAlt": "내접원이 삼각형 ABC를 높이가 r이고 밑변이 a, b, c인 세 작은 삼각형으로 나누는 그림",
        "figcaption": "공통 높이 r과 밑변 a, b, c를 가진 세 작은 삼각형: 넓이 ar/2 + br/2 + cr/2를 더하면 rs가 됩니다."
      },
      "sec-inradius": {
        "h2": "세 변의 길이로 내접원 반지름 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "세 변을 알 때 직각삼각형의 내접원 반지름은 내접원을 그릴 필요 없이 구하는 단축 공식이 있습니다: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. 여기서 [[a]]와 [[b]]는 서로 수직인 직각변, [[c]]는 빗변입니다. 이는 직각삼각형 기하학에서 가장 유용한 사실 중 하나입니다." },
          { "kind": "h3", "text": "직각삼각형 내접원 반지름 공식 유도" },
          { "kind": "p", "text": "유도는 접선 길이 정리를 사용합니다: 외부 한 점에서 원에 그은 두 접선 구간의 길이는 같습니다. 세 꼭짓점에서의 접선 길이를 [[A]]에서 [[x]], [[B]]에서 [[y]], [[C]]에서 [[z]]라 하세요. 직각 [[C]]에서는 내접원의 두 접선이 수직인 직각변을 따라 뻗으며 각각 길이가 [[r]]이어서 두 반지름과 함께 작은 정사각형을 이루므로 [[z=r]]입니다. 그러면 변은 [[a=y+r]], [[b=x+r]], [[c=x+y]]가 됩니다. 빼면 [[a+b-c=(y+r)+(x+r)-(x+y)]]이므로 [[a+b-c=2r]]이 되어 [[[\\boxed{r=\\frac{a+b-c}{2}}]]]를 얻습니다. 직각에서 생기는 정사각형이 이 단축 공식을 직각삼각형만의 것으로 만드는 이유입니다." },
          { "kind": "h3", "text": "3-4-5 삼각형을 이용한 예제" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]]가 주어졌습니다: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]]. 작도 없이 내접원의 반지름이 정확히 1이 됩니다." },
          { "kind": "h3", "text": "5-12-13 삼각형을 이용한 예제" },
          { "kind": "p", "text": "[[a=5]], [[b=12]], [[c=13]]이 주어졌습니다: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]]. 역시 내접원 반지름이 변의 길이에서 바로 나옵니다." },
          { "kind": "h3", "text": "반둘레를 함께 구하기" },
          { "kind": "p", "text": "같은 세 변으로 [[r]]과 함께 [[s=\\frac{a+b+c}{2}]]를 계산하세요. 5-12-13 삼각형에서는 [[s=\\frac{5+12+13}{2}=15]]이고, 그다음 [[K=rs=2\\times15=30]]입니다. 세 변을 한 번 훑으면 계산기의 두 입력과 넓이 자체를 모두 얻을 수 있습니다." },
          { "kind": "h3", "text": "이 단축 공식은 언제 사용해야 하나요?" },
          { "kind": "p", "text": "세 변을 알지만 내접원을 측정하거나 그리지 않았을 때 사용하세요. 교과서 연습 문제, 시공 치수, 측량 자료는 보통 내접원 반지름이 아니라 변의 길이를 줍니다. 단축 공식은 이를 한 줄로 [[r]]로 바꿔줍니다. 측정된 값이 내접원 반지름이라면 직접 입력하고 이 변환은 건너뛰세요." }
        ],
        "imgAlt": "3-4-5 삼각형의 같은 접선 구간과 내접원 반지름 단축 공식 r = (a+b-c)/2 = 1",
        "figcaption": "3-4-5 삼각형의 접선 구간: 각 꼭짓점에서 같은 길이가 나와 r = (3 + 4 - 5)/2 = 1이 됩니다."
      },
      "sec-howto": {
        "h2": "내접원 반지름과 반둘레로 구하는 직각삼각형 넓이 계산기 사용 방법",
        "blocks": [
          { "kind": "p", "text": "계산기는 정확히 두 개의 입력이 필요합니다. 아래 안내는 알려진 측정값에서 검증된 결과까지 화면 순서대로 따라갑니다." }
        ],
        "steps": [
          "<strong>내접원 반지름 r을 확인하세요.</strong> 내접원의 반지름으로, 내심에서 한 변까지의 수직 거리입니다.",
          "<strong>반둘레 s를 확인하세요.</strong> 삼각형 전체 둘레의 절반입니다.",
          "<strong>세 변을 안다면 [[r=\\frac{a+b-c}{2}]]로 r을 구하세요.</strong> 여기서 [[a]]와 [[b]]는 직각변, [[c]]는 빗변입니다.",
          "<strong>[[s=\\frac{a+b+c}{2}]]로 s를 구하세요.</strong>",
          "<strong>첫 번째 입력란에 내접원 반지름을 입력하세요.</strong>",
          "<strong>두 번째 입력란에 반둘레를 입력하세요.</strong>",
          "<strong>호환되는 길이 단위를 선택하세요.</strong> 두 측정값 모두 같은 단위를 사용해야 합니다.",
          "<strong>두 값이 모두 양수인지 확인하세요.</strong> 0이나 음수 길이는 어떤 삼각형도 나타내지 않습니다.",
          "<strong>Calculate Area를 클릭하세요.</strong>",
          "<strong>결과를 검토하세요.</strong> 넓이는 입력값에 맞는 제곱단위로 나타납니다.",
          "<strong>답이 제곱단위로 표시되는지 확인하세요.</strong> 미터는 제곱미터, 센티미터는 제곱센티미터가 됩니다.",
          "<strong>풀이 과정을 검토하세요.</strong> 대입과 계산 과정이 표시됩니다.",
          "<strong>새 계산을 시작할 때는 Reset을 사용하세요.</strong> 두 입력란이 모두 지워져 다음 계산을 깨끗이 시작할 수 있습니다."
        ],
        "closingParagraphs": [
          "계산기는 세 변의 길이를 묻지 않습니다. 내접원 반지름과 반둘레에는 공식 [[K=rs]]에 필요한 모든 것이 이미 들어 있습니다."
        ]
      },
      "sec-examples": {
        "h2": "내접원 반지름과 반둘레를 이용한 넓이 계산의 단계별 예제",
        "blocks": [
          { "kind": "p", "text": "네 개의 풀이 예제가 친숙한 것부터 차근차근 방법을 쌓아 올립니다. 각 예제는 세 변으로부터 반둘레와 내접원 반지름을 구하고, [[K=rs]]를 모든 대입 과정을 보여주며 적용한 뒤, 직각변 공식으로 검증합니다." },
          { "kind": "h3", "text": "예제 1: 3-4-5 직각삼각형" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]]가 주어졌습니다. 1단계: 반둘레, [[s=\\frac{3+4+5}{2}=6]]. 2단계: 내접원 반지름, [[r=\\frac{3+4-5}{2}=1]]. 3단계: 공식 적용, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. 검증: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "예제 2: 6-8-10 직각삼각형" },
          { "kind": "p", "text": "[[a=6]], [[b=8]], [[c=10]]이 주어졌습니다. 그러면 [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]]이고, [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. 검증: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "예제 3: 5-12-13 직각삼각형" },
          { "kind": "p", "text": "[[a=5]], [[b=12]], [[c=13]]이 주어졌습니다. 그러면 [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]]이고, [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. 검증: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "예제 4: 8-15-17 직각삼각형" },
          { "kind": "p", "text": "[[a=8]], [[b=15]], [[c=17]]이 주어졌습니다. 그러면 [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]]이고, [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. 검증: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "기초 예제 비교" }
        ],
        "table": {
          "headers": ["삼각형", "반둘레 s", "내접원 반지름 r", "넓이 K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "내접원 반지름과 반둘레를 이용한 직각삼각형 넓이의 실생활 응용",
        "blocks": [
          { "kind": "p", "text": "열두 가지 풀이 상황은 다양한 규모와 단위에서 공식을 보여줍니다. 각 예제는 삼각형 물체의 이름을 밝히고, 세 변의 측정값을 주고, 내접원 반지름과 반둘레를 구한 뒤, 주요 공식을 단계별로 적용하고, 그 뒤에 숨은 가정을 밝힙니다. 모든 예제는 직각삼각형 패널, 단면, 프로파일, 또는 단순화된 기하 모델이며, 실제 물체가 곡선이거나 불규칙할 때는 계산이 모델링된 삼각형에만 적용됩니다." },
          { "kind": "h3", "text": "예제 1: 삼각형 유리창" },
          { "kind": "p", "text": "직각삼각형 유리창의 [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]입니다. 내접원 반지름: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. 반둘레: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. 넓이: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. 이는 프레임 치수를 고려하기 전의 평평한 유리 넓이입니다." },
          { "kind": "h3", "text": "예제 2: 강철 지지 브래킷" },
          { "kind": "p", "text": "삼각형 강철 지지판의 [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]입니다. 그러면 [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]]. 넓이만으로는 판의 하중 지지 능력을 알 수 없습니다." },
          { "kind": "h3", "text": "예제 3: 삼각형 경사로 측면 프로파일" },
          { "kind": "p", "text": "단순화된 직각삼각형 경사로 프로파일의 [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]입니다. 그러면 [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]]. 이는 경사진 보행면이 아니라 측면 프로파일을 나타냅니다." },
          { "kind": "h3", "text": "예제 4: 삼각형 지붕 지지 패널" },
          { "kind": "p", "text": "직각삼각형 지붕 지지 패널의 [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]입니다. 그러면 [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]]. 결과는 추정된 평평한 삼각형 패널 넓이입니다." },
          { "kind": "h3", "text": "예제 5: 측량된 정원 구역" },
          { "kind": "p", "text": "직각삼각형 정원 구역의 [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]입니다. 그러면 [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]]. 이 공식은 세 경계 측정값에서 삼각형 구역의 넓이를 직접 구해줍니다." },
          { "kind": "h3", "text": "예제 6: 삼각형 천 돛" },
          { "kind": "p", "text": "직각삼각형 천 패널의 [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]입니다. 그러면 [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]]. 이 평평한 패널 수치에는 솔기와 천 여유분이 제외됩니다." },
          { "kind": "h3", "text": "예제 7: 넓은 삼각형 토지 구역" },
          { "kind": "p", "text": "직각삼각형으로 모델링된 측량 토지 구역의 [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]입니다. 그러면 [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]]. 단순화된 직각삼각형 모델은 평평한 지면 위의 직선 경계를 가정합니다." },
          { "kind": "h3", "text": "예제 8: 합판 절단 템플릿" },
          { "kind": "p", "text": "삼각형 합판 템플릿의 [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]입니다. 그러면 [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]]. 이 넓이는 절단 손실 전에 재료 소요량을 추정하는 데 도움이 됩니다." },
          { "kind": "h3", "text": "예제 9: 대형 삼각형 간판 패널" },
          { "kind": "p", "text": "직각삼각형 간판 패널의 [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]입니다. 그러면 [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]]. 결과는 보는 사람을 향한 평평한 삼각형 표면을 나타냅니다." },
          { "kind": "h3", "text": "예제 10: 삼각형 어닝 지지대" },
          { "kind": "p", "text": "직각삼각형 어닝 지지 구역의 [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]입니다. 그러면 [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]]. 이는 모델링된 삼각형 구역의 계산된 넓이입니다." },
          { "kind": "h3", "text": "예제 11: 산업용 지지 패널" },
          { "kind": "p", "text": "직각삼각형 산업용 지지 패널의 [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]입니다. 그러면 [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]]. 이 기하 계산은 패널의 평평한 넓이를 나타내며, 구조적 성능이 아닙니다." },
          { "kind": "h3", "text": "예제 12: 대형 삼각형 지붕 끝단 구역" },
          { "kind": "p", "text": "직각삼각형 지붕 끝단 구역의 [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]입니다. 그러면 [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]]. 계산된 넓이는 평평한 삼각형 적용 범위를 추정하는 데 도움이 됩니다." },
          { "kind": "h3", "text": "실용 예제 비교" }
        ],
        "table": {
          "headers": ["응용", "변 a", "변 b", "빗변 c", "내접원 반지름 r", "반둘레 s", "넓이"],
          "rows": [
            ["유리창", "3", "4", "5", "1", "6", "6 m²"],
            ["강철 브래킷", "5", "12", "13", "2", "15", "30 cm²"],
            ["경사로 프로파일", "6", "8", "10", "2", "12", "24 m²"],
            ["지붕 패널", "8", "15", "17", "3", "20", "60 ft²"],
            ["정원 구역", "7", "24", "25", "3", "28", "84 m²"],
            ["천 돛", "9", "12", "15", "3", "18", "54 ft²"],
            ["토지 구역", "9", "40", "41", "4", "45", "180 m²"],
            ["합판 템플릿", "12", "16", "20", "4", "24", "96 cm²"],
            ["간판 패널", "20", "21", "29", "6", "35", "210 m²"],
            ["어닝 지지대", "15", "20", "25", "5", "30", "150 ft²"],
            ["산업용 패널", "11", "60", "61", "5", "66", "330 m²"],
            ["지붕 끝단 구역", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "내접원 반지름과 반둘레가 세 변과 갖는 관계는 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "직각삼각형에서 내접원 반지름과 반둘레는 변과 무관하지 않습니다. 변으로부터 만들어집니다. [[r=\\frac{a+b-c}{2}]]와 [[s=\\frac{a+b+c}{2}]]에서 출발해 두 식을 더하고 빼면, 더하면 [[[\\boxed{s+r=a+b}]]]가 되고 빼면 [[[\\boxed{s-r=c}]]]가 됩니다. 이 두 항등식은 주어진 표기법 아래 직각삼각형에만 해당하며, 계산기의 두 입력을 삼각형 자체에 대한 놀라울 만큼 많은 정보로 바꿔줍니다." },
          { "kind": "h3", "text": "빗변 복원하기" },
          { "kind": "p", "text": "[[s-r=c]]에서 [[r]]과 [[s]]를 알면 빗변을 복원할 수 있습니다. [[r=2]], [[s=12]]인 경우: [[c=12-2]], [[[\\boxed{c=10}]]]. 두 입력만으로 추가 측정 없이 가장 긴 변이 드러납니다." },
          { "kind": "h3", "text": "두 직각변의 합 복원하기" },
          { "kind": "p", "text": "[[a+b=s+r]]에서 직각변의 합이 바로 나옵니다. [[r=2]], [[s=12]]인 경우: [[a+b=14]]입니다. 합만으로는 각 직각변을 따로 알 수 없습니다. 개별 길이를 알려면 정보가 하나 더 필요합니다." },
          { "kind": "h3", "text": "두 직각변의 곱 복원하기" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]이고 [[K=rs]]이므로 [[[\\boxed{ab=2rs}]]]가 됩니다. [[r=2]], [[s=12]]인 경우: [[ab=48]]입니다. [[a+b=14]]이고 [[ab=48]]이므로 두 직각변은 6과 8입니다: [[6+8=14]]이고 [[6\\times8=48]]입니다. 두 직각변을 서로 바꿔도 삼각형의 넓이는 변하지 않습니다." },
          { "kind": "h3", "text": "두 직각변의 길이 복원하기" },
          { "kind": "p", "text": "합과 곱으로 [[a]]와 [[b]]는 [[t^2-(s+r)t+2rs=0]]의 두 근이 되어 [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]]를 얻습니다. 두 부호는 두 직각변 배정의 두 경우에 해당합니다. [[r=2]], [[s=12]]인 경우: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]]이므로 [[a,b=\\frac{14\\pm2}{2}]]가 되어 직각변 6과 8이 됩니다. 이는 고급 수학적 추론이며, 추가 계산기 기능이 아닙니다." }
        ]
      },
      "sec-valid": {
        "h2": "내접원 반지름과 반둘레가 유효한 직각삼각형을 이루는지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "계산기는 두 입력을 곱하지만, 양수인 길이 쌍이 모두 직각삼각형을 나타내는 것은 아닙니다. 아래 검사는 산술과 기하를 구분합니다." },
          { "kind": "h3", "text": "기본 입력 조건" },
          { "kind": "p", "text": "입력은 [[r>0]]과 [[s>0]]을 만족해야 합니다. 직각삼각형에서는 [[s>r]]도 필요한데, [[c=s-r]]이고 빗변은 양수여야 하기 때문입니다. 이 세 조건은 필요조건이지만 충분조건은 아닙니다." },
          { "kind": "h3", "text": "고급 직각삼각형 일관성 검사" },
          { "kind": "p", "text": "[[a+b=s+r]]와 [[ab=2rs]]에서 두 직각변은 판별식 [[\\Delta=(s+r)^2-8rs]]가 0 이상일 때 정확히 실수가 됩니다. 간단히 하면 [[[\\boxed{\\Delta=s^2-6rs+r^2}]]]입니다. 직각변 길이가 실수이려면 [[\\Delta\\geq0]]입니다. [[s]]가 [[r]]을 초과해야 하므로 동등한 직각삼각형 조건은 [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]] 또는 [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]]입니다. 등호는 직각이등변삼각형에서 성립하며, 가장 빡빡한 경우입니다. 이는 위의 기본 검사와는 명확히 구분되는 고급 수학적 호환성 검사입니다." },
          { "kind": "h3", "text": "유효한 예제" },
          { "kind": "p", "text": "[[r=2]], [[s=12]]가 주어지면 비율은 [[\\frac{s}{r}=6]]입니다. [[6>3+2\\sqrt2]](약 5.83)이므로 이 값들은 유효한 직각삼각형을 나타낼 수 있으며, 대응하는 변은 6, 8, 10입니다." },
          { "kind": "h3", "text": "호환되지 않는 예제" },
          { "kind": "p", "text": "[[r=2]], [[s=10]]이 주어지면 비율은 [[\\frac{s}{r}=5]]로, 필요한 임계값 약 5.83보다 낮습니다. 이 쌍은 직각삼각형을 나타낼 수 없으며, 입력을 곱하면 수치 결과는 나옵니다. [[rs]]를 계산하는 것과 측정값이 직각삼각형을 나타내는지 확인하는 것은 서로 다른 작업입니다. 이 가이드는 계산기가 이 검사를 자동으로 수행한다고 주장하지 않습니다." }
        ]
      },
      "sec-heron": {
        "h2": "내접원 공식은 헤론의 공식과 어떻게 비교되나요?",
        "blocks": [
          { "kind": "p", "text": "헤론의 공식은 세 변 모두에서 넓이를 구합니다: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. 세 변의 길이와 반둘레를 사용하고, 모든 퇴화되지 않은 삼각형에 성립하며, 별도 입력으로 내접원 반지름이 필요 없습니다. [[[\\boxed{K=rs}]]]와 비교해 보세요. 둘은 가까운 친척입니다. 반둘레 [[s]]가 둘 다에 등장하며, 둘이 일치함을 증명하는 것은 [[K=rs]]가 옳다는 것을 보는 가장 깔끔한 방법 중 하나입니다." },
          { "kind": "h3", "text": "내접원 공식이 더 쉬운 경우" },
          { "kind": "p", "text": "내접원 반지름과 반둘레를 이미 알고 있을 때 [[K=rs]]가 특히 편리합니다. 한 번의 곱셈만으로 끝나며, 제곱근도, 변 차이의 인수분해도 필요 없습니다. 내접원이 측정되었거나, 앞선 단계에서 이미 [[r]]과 [[s]]가 나왔다면 이것이 넓이로 가는 가장 짧은 길입니다." },
          { "kind": "h3", "text": "헤론의 공식이 더 유용한 경우" },
          { "kind": "p", "text": "헤론의 공식은 세 변의 길이를 알지만 내접원 반지름을 구하지 않았을 때 더 나은 선택입니다. [[r]]을 거치는 우회 없이 [[a]], [[b]], [[c]]에서 직접 넓이에 도달합니다. 어느 공식도 보편적으로 더 정확한 것은 아닙니다. 일관된 입력에서는 정확하며, 둘이 다르게 나오는 경우는 입력이 일관되지 않을 때뿐입니다." },
          { "kind": "h3", "text": "3-4-5 삼각형으로 두 공식 검증하기" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]]가 주어지고 [[s=6]], [[r=1]]입니다. 내접원으로: [[K=1\\times6=6]]. 헤론의 공식으로: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]이므로 [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. 두 결과가 일치하는 것은 두 공식이 같은 영역을 재기 때문입니다. 하나의 넓이를 두 식으로 표현한 것이며, 둘 사이의 일치는 계산이 옳다는 강한 신호입니다." }
        ]
      },
      "sec-legs": {
        "h2": "내접원 공식이 직각변 공식과 같은 넓이를 내는 이유는 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "두 공식이 같은 넓이를 주장합니다: [[K=\\frac{ab}{2}]]와 [[K=rs]]. [[r]]과 [[s]]를 변으로 쓰면 [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]]가 되므로 [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]입니다. 분자는 제곱의 차입니다: [[rs=\\frac{(a+b)^2-c^2}{4}]]. 피타고라스 정리 [[c^2=a^2+b^2]]를 적용하면 [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]]이 되므로 [[[\\boxed{rs=\\frac{ab}{2}}]]]입니다. 두 공식은 모든 직각삼각형에서 동일합니다. 일관된 입력에서는 서로 다를 수 없습니다." },
          { "kind": "p", "text": "3-4-5 삼각형으로 확인: [[r=1]], [[s=6]], [[rs=6]]이고 [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]입니다. 6-8-10 삼각형으로는: [[r=2]], [[s=12]], [[rs=24]]이고 [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]입니다. 친숙한 직각변 공식과 내접원 공식은 옷만 다를 뿐 같은 양입니다." }
        ]
      },
      "sec-mistakes": {
        "h2": "내접원 반지름과 반둘레로 넓이를 구할 때의 흔한 실수",
        "blocks": [
          { "kind": "p", "text": "대부분의 틀린 답은 잘못된 계산이 아니라 잘못 표기된 입력에서 옵니다. 아래 열다섯 가지 실수가 거의 모든 경우를 다룹니다." },
          { "kind": "h3", "text": "1. 내접원 반지름을 외접원 반지름과 혼동하기" },
          { "kind": "p", "text": "내접원 반지름은 안의 원, 외접원 반지름은 바깥의 원입니다. 6-8-10 삼각형에서 [[r=2]]이지만 [[R=\\frac{c}{2}=5]]입니다. [[r]] 자리에 5를 쓰면 24 대신 [[K=5\\times12=60]]이 됩니다. 수정: 원이 삼각형 안에 있는지 꼭짓점을 지나는지 물어보세요." },
          { "kind": "h3", "text": "2. 반둘레 대신 전체 둘레 사용하기" },
          { "kind": "p", "text": "공식에는 [[s]], 즉 둘레의 절반이 필요합니다. [[r=2]]에 [[s=12]] 대신 전체 둘레 24를 쓰면 [[K=2\\times24=48]]이 되어 올바른 24의 두 배가 됩니다. 수정: 곱하기 전에 둘레를 절반으로 나누세요." },
          { "kind": "h3", "text": "3. 최종 답을 다시 2로 나누기" },
          { "kind": "p", "text": "절반 나누기는 이미 [[s]] 안에 들어 있습니다. [[2\\times12=24]]를 다시 2로 나누면 12가 되어 실제 넓이의 절반이 됩니다. 수정: [[rs]]를 계산하고 멈추세요." },
          { "kind": "h3", "text": "4. 내심을 외심과 혼동하기" },
          { "kind": "p", "text": "내심은 각의 이등분선이 만나는 점이고, 외심은 변의 수직이등분선이 만나는 점으로, 직각삼각형에서는 빗변의 중점에 있습니다. 서로 다른 점입니다. 수정: 필요한 원에 맞는 작도를 따라가세요." },
          { "kind": "h3", "text": "5. 내접원 반지름을 삼각형의 변으로 취급하기" },
          { "kind": "p", "text": "내접원 반지름은 삼각형 안의 거리이지 세 변 중 하나가 아닙니다. [[a+b+c]]에 들어갈 자리가 없습니다. 수정: [[r]]을 모든 변 길이 식에서 빼두세요." },
          { "kind": "h3", "text": "6. 잘못된 직각삼각형 내접원 반지름 공식 사용하기" },
          { "kind": "p", "text": "직각삼각형 단축 공식은 [[r=\\frac{a+b-c}{2}]]이며, 부호가 틀리거나 잘못된 변을 절반으로 나눈 변형이 아닙니다. 흔한 실수는 [[r=\\frac{a+c-b}{2}]]를 쓰는 것인데, 삼각형이 이등변이 아닌 한 다른 수가 나옵니다. 수정: 빼는 변은 항상 빗변 [[c]]입니다." },
          { "kind": "h3", "text": "7. c가 빗변임을 잊기" },
          { "kind": "p", "text": "단축 공식에서 [[c]]는 빗변을 뜻합니다. 수정: 공식을 적용하기 전에 가장 긴 변을 [[c]]로 표기하세요." },
          { "kind": "h3", "text": "8. 빗변이 아닌 변을 빗변으로 쓰기" },
          { "kind": "p", "text": "[[c]] 자리에 직각변을 고르면 [[r]]과 [[s]]가 모두 망가집니다. 수정: 빗변은 직각의 맞은편 변으로, 항상 가장 깁니다." },
          { "kind": "h3", "text": "9. 서로 다른 측정 단위 섞기" },
          { "kind": "p", "text": "내접원 반지름 20cm와 반둘레 1m는 변환 없이는 의미 있는 수가 나오지 않습니다. 수정: 먼저 하나의 단위로 바꾼 뒤 곱하세요." },
          { "kind": "h3", "text": "10. 0이나 음수 길이 입력하기" },
          { "kind": "p", "text": "0과 음수 길이는 어떤 삼각형도 나타내지 않습니다. 수정: 입력한 모든 길이가 양수인지 확인하세요." },
          { "kind": "h3", "text": "11. 모든 양수 r, s 쌍이 직각삼각형을 나타낸다고 가정하기" },
          { "kind": "p", "text": "앞서 보았듯 [[r=2]]와 [[s=10]]은 20이라는 수는 내지만 직각삼각형은 없습니다. 수정: 기하가 중요할 때는 [[s/r\\geq3+2\\sqrt2]] 검사를 실행하세요." },
          { "kind": "h3", "text": "12. 넓이를 길이 단위로 보고하기" },
          { "kind": "p", "text": "넓이 24 m²는 24 m가 아닙니다. 수정: 수와 함께 제곱단위를 쓰세요." },
          { "kind": "h3", "text": "13. 내접원 반지름을 너무 일찍 반올림하기" },
          { "kind": "p", "text": "곱하기 전에 [[r]]을 반올림하면 전체 넓이가 어긋납니다. 수정: 중간 단계에서는 완전한 정밀도를 유지하고 최종 답에서만 반올림하세요." },
          { "kind": "h3", "text": "14. 반둘레를 두 변의 합과 혼동하기" },
          { "kind": "p", "text": "반둘레는 세 변 모두의 합의 절반이지, 두 변의 합이 아닙니다. 수정: 세 변을 모두 더한 뒤 절반으로 나누세요." },
          { "kind": "h3", "text": "15. 공식이 직각삼각형에만 성립한다고 가정하기" },
          { "kind": "p", "text": "[[K=rs]]는 모든 퇴화되지 않은 삼각형에 성립합니다. 직각삼각형에만 해당하는 것은 단축 공식 [[r=\\frac{a+b-c}{2}]]뿐입니다. 수정: 넓이 공식은 자유롭게 적용하되, 직각이 아닌 삼각형의 내접원 반지름은 일반 유도를 사용하세요." },
          { "kind": "h3", "text": "틀린 경우와 올바른 경우: 구체적인 예제" },
          { "kind": "p", "text": "6-8-10 삼각형을 사용하세요. 올바른 경우: [[r=2]], [[s=12]], [[K=2\\times12=24]]. 전체 둘레를 잘못 쓴 경우: [[K=2\\times24=48]]로 넓이가 두 배가 됩니다. 올바른 답을 다시 2로 잘못 나눈 경우: [[K=\\frac{24}{2}=12]]로 절반이 됩니다. 두 오류 모두 [[s]] 안에 있는 2분의 1을 잘못 다룬 데서 옵니다." }
        ]
      },
      "sec-verify": {
        "h2": "직각삼각형 넓이가 맞는지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "여러 독립적인 검사가 흔한 오류를 잡아냅니다. 3-4-5 삼각형이 대부분을 보여줍니다." },
          { "kind": "h3", "text": "방법 1: 내접원 반지름과 반둘레" },
          { "kind": "p", "text": "입력한 값으로 [[K=rs]]를 다시 계산하세요. [[r=1]], [[s=6]]인 경우 [[K=1\\times6=6]]입니다. 두 번째 계산이 오타를 잡아냅니다." },
          { "kind": "h3", "text": "방법 2: 두 수직 직각변" },
          { "kind": "p", "text": "직각변을 알거나 복원했다면 [[K=\\frac{ab}{2}]]가 일치해야 합니다. 여기서는 [[\\frac{3\\times4}{2}=6]]이 [[1\\times6=6]]과 일치합니다. 두 방법, 하나의 삼각형, 하나의 답입니다." },
          { "kind": "h3", "text": "방법 3: 피타고라스 정리" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]]를 확인하세요: [[9+16=25]]. 변이 이를 만족하지 않으면 삼각형 식별이 잘못된 것입니다." },
          { "kind": "h3", "text": "방법 4: 직각삼각형 내접원 반지름" },
          { "kind": "p", "text": "[[r=\\frac{a+b-c}{2}]]를 확인하세요: [[\\frac{3+4-5}{2}=1]]. 불일치는 입력한 내접원 반지름이 이 삼각형의 것이 아님을 의미합니다." },
          { "kind": "h3", "text": "방법 5: 반둘레" },
          { "kind": "p", "text": "[[s=\\frac{a+b+c}{2}]]를 확인하세요: [[\\frac{3+4+5}{2}=6]]. 이는 둘레와 반둘레의 혼동을 잡아냅니다." },
          { "kind": "h3", "text": "방법 6: 헤론의 공식" },
          { "kind": "p", "text": "[[K=\\sqrt{s(s-a)(s-b)(s-c)}]]를 확인하세요: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. 독립적인 공식 사이의 일치는 가장 강력한 검사입니다." },
          { "kind": "p", "text": "독립적인 공식 사이의 일치가 유용한 수학적 검사인 이유: 한 경로의 실수가 다른 경로에서 그대로 재현되는 일은 드물므로, 서로 다른 두 공식에서 같은 답이 나온다는 것은 입력과 계산이 모두 건전하다는 뜻입니다." }
        ],
        "imgAlt": "K = rs, K = ab/2, 헤론의 공식으로 비교한 3-4-5 삼각형의 넓이",
        "figcaption": "세 방법, 하나의 답: K = rs, K = ab/2, 헤론의 공식 모두 3-4-5 삼각형에서 6을 줍니다."
      },
      "sec-units": {
        "h2": "내접원 반지름과 반둘레 계산의 측정 단위 이해하기",
        "blocks": [
          { "kind": "p", "text": "넓이는 2차원이므로 단위는 길이 단위의 제곱입니다. 기호로는 [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]입니다. 미터와 제곱미터, 밀리미터와 제곱밀리미터, 피트와 제곱피트, 인치와 제곱인치도 마찬가지입니다. 단위 선택기는 결과가 올바르게 표기되도록 존재합니다." },
          { "kind": "h3", "text": "두 입력 모두 호환되는 단위를 써야 하는 이유" },
          { "kind": "p", "text": "공식을 적용하기 전에 내접원 반지름과 반둘레는 같은 단위로 나타내야 합니다. [[r=20\\text{ cm}]]이고 [[s=1\\text{ m}]]이라면 먼저 변환하세요: [[1\\text{ m}=100\\text{ cm}]]. 그러면 [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]] 또는 동등하게 [[[\\boxed{K=0.2\\text{ m}^2}]]]입니다. 서로 다른 단위의 측정값을 곱하면 깔끔한 단위가 없는 수가 나오므로, 먼저 변환하고 나중에 계산하세요." },
          { "kind": "h3", "text": "이른 반올림을 피해야 하는 이유" },
          { "kind": "p", "text": "[[r]]이나 [[s]]의 반올림된 값은 내접원 반지름이 넓이에 직접 곱해지므로 최종 넓이에 약간 영향을 줄 수 있습니다. 중간 계산에서는 충분한 정밀도를 유지하고 최종 답에서만 반올림하세요. 이 가이드는 인터페이스에 표시되는 것 외에 계산기의 내부 정밀도에 대해 주장하지 않습니다." },
          { "kind": "h3", "text": "정확한 측정 대 실제 측정" },
          { "kind": "p", "text": "3-4-5 삼각형의 내접원 반지름 1 같은 정확한 수학적 치수는 물리 기구로 잰 측정값과 다르게 행동합니다. 기구의 불확실성이 넓이로 흘러들어가므로, 마지막 자릿수는 입력만큼만 신뢰할 수 있습니다. 줄자로 잰 내접원 반지름 2cm는 실제로 1.9나 2.1일 수 있으며, 넓이는 그 불확실성을 함께 안고 갑니다." }
        ]
      },
      "sec-related": {
        "h2": "관련 직각삼각형 계산기 살펴보기",
        "blocks": [
          { "kind": "p", "text": "측정값에 따라 필요한 계산기가 다릅니다." }
        ]
      },
      "sec-faq": {
        "h2": "자주 묻는 질문",
        "blocks": [
          { "kind": "p", "text": "아래는 내접원 반지름과 반둘레로 구하는 넓이에 대한 가장 흔한 질문과 답변입니다." }
        ]
      },
      "sec-conclusion": {
        "h2": "두 측정값이 전체 넓이를 담고 있습니다",
        "blocks": [
          { "kind": "p", "text": "내접원 반지름과 반둘레는 소박한 입력처럼 보이지만, 함께 삼각형의 전체 크기를 담고 있습니다. 세 작은 삼각형을 통한 유도는 곱이 정확한 이유를 보여주고, 접선 구간 논증은 직각삼각형 단축 공식이 어디서 오는지 보여주며, 직각변 공식 및 헤론의 공식과의 비교는 결과가 기하학의 나머지 부분과 항상 일치함을 보여줍니다." },
          { "kind": "p", "text": "작업 습관은 간단합니다: r과 s가 실제로 무엇인지 확인하고, 단위를 일관되게 유지하며, 독립적인 공식으로 답을 검증하세요. 이 습관이 지켜지면 K = rs는 삼각형 기하학에서 가장 믿을 수 있는 넓이 계산 중 하나입니다." }
        ]
      }
    }
  },
  "ms": {
    "faqs": [
      {
        "question": "Apakah formula untuk luas menggunakan jejari dalam dan separuh perimeter?",
        "answer": "Darabkan jejari dalam r dengan separuh perimeter s: K = rs. Sebagai contoh, r = 2 dan s = 12 memberi K = 24 unit persegi. Formula ini sah untuk setiap segi tiga tak merosot, bukan hanya segi tiga bersudut tepat."
      },
      {
        "question": "Apakah jejari dalam bagi segi tiga bersudut tepat?",
        "answer": "Ia ialah jejari bulatan yang terterap dalam segi tiga itu, iaitu jarak serenjang dari pusat bulatan dalam ke mana-mana sisi. Dalam segi tiga 3-4-5, jejari dalamnya ialah 1; dalam segi tiga 6-8-10, ia ialah 2."
      },
      {
        "question": "Bagaimana mengira jejari dalam segi tiga bersudut tepat?",
        "answer": "Daripada ketiga-tiga sisi, gunakan jalan pintas r = (a + b - c) / 2, dengan a dan b ialah kaki-kaki dan c ialah hipotenus. Untuk segi tiga 5-12-13, ini memberi r = 2."
      },
      {
        "question": "Bagaimana mengira separuh perimeter?",
        "answer": "Tambahkan ketiga-tiga sisi dan bahagikan jumlahnya dengan dua: s = (a + b + c) / 2. Untuk segi tiga 5-12-13, s = 15. Ia sentiasa lebih besar daripada setiap sisi."
      },
      {
        "question": "Mengapakah luas sama dengan jejari dalam darab separuh perimeter?",
        "answer": "Menyambungkan pusat bulatan dalam ke ketiga-tiga bucu membahagikan segi tiga kepada tiga segi tiga kecil berketinggian sepunya r dan bertapak a, b, dan c. Luasnya ar/2 + br/2 + cr/2 difaktorkan menjadi r(a+b+c)/2, dan kerana s = (a+b+c)/2, jumlahnya ialah rs."
      },
      {
        "question": "Adakah formula ini berfungsi untuk segi tiga bukan bersudut tepat?",
        "answer": "Ya. K = rs sah untuk setiap segi tiga tak merosot. Hanya jalan pintas r = (a+b-c)/2 yang khusus untuk segi tiga bersudut tepat, kerana ia bergantung pada segi empat sama yang terbentuk pada sudut tepat."
      },
      {
        "question": "Apakah perbezaan antara jejari dalam dan jejari luar?",
        "answer": "Jejari dalam r ialah jejari bulatan di dalam segi tiga yang menyentuh ketiga-tiga sisi; jejari luar R ialah jejari bulatan yang melalui ketiga-tiga bucu. Untuk segi tiga bersudut tepat, R = c/2."
      },
      {
        "question": "Bolehkah saya mengira luas tanpa mengetahui ketiga-tiga sisi?",
        "answer": "Ya. Jika jejari dalam dan separuh perimeter sudah diketahui, K = rs memberi luas secara langsung dengan sekali darab, tanpa memerlukan panjang sisi."
      },
      {
        "question": "Adakah separuh perimeter sama dengan separuh daripada perimeter?",
        "answer": "Ya, tepat sekali: s = P/2 = (a+b+c)/2. Perbezaannya penting kerana formula memerlukan nilai yang telah dibahagi dua; menggunakan perimeter penuh menggandakan jawapan."
      },
      {
        "question": "Bagaimanakah jejari dalam berkaitan dengan ketiga-tiga sisi?",
        "answer": "Dalam segi tiga bersudut tepat, r = (a+b-c)/2, dengan a dan b ialah kaki-kaki dan c ialah hipotenus. Ia juga memenuhi s + r = a + b dan s - r = c, jadi sisi-sisi boleh dipulihkan daripada r dan s."
      },
      {
        "question": "Apakah perbezaan antara formula Heron dan formula jejari dalam?",
        "answer": "Formula Heron, K = sqrt(s(s-a)(s-b)(s-c)), memerlukan ketiga-tiga sisi; formula jejari dalam, K = rs, hanya memerlukan r dan s. Gunakan Heron apabila anda ada sisi, dan K = rs apabila r dan s sudah ada. Kedua-duanya memberi luas yang sama pada input yang konsisten."
      },
      {
        "question": "Bagaimana saya boleh mengesahkan luas yang dikira?",
        "answer": "Semak dengan kaedah bebas: formula kaki K = ab/2, teorem Pythagoras, jalan pintas jejari dalam, takrifan separuh perimeter, dan formula Heron. Persetujuan merentas kaedah bermakna input dan aritmetik adalah betul."
      }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Kaki",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Hipotenus dan Tinggi",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Tinggi",
      "Kalkulator Jejari Dalam Segi Tiga Bersudut Tepat",
      "Kalkulator Separuh Perimeter Segi Tiga Bersudut Tepat"
    ],
    "relatedIntro": "Pengukuran yang berbeza memerlukan kalkulator yang berbeza.",
    "faqHeading": "Soalan Lazim",
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Bersudut Tepat Menggunakan Jejari Dalam dan Separuh Perimeter",
      "sec-incircle": "Apakah Bulatan Dalam dalam Geometri?",
      "sec-semiperimeter": "Apakah Separuh Perimeter Segi Tiga?",
      "sec-formula": "Mengapa Luas Sama dengan Jejari Dalam Darab Separuh Perimeter",
      "sec-inradius": "Cara Mencari Jejari Dalam Segi Tiga Bersudut Tepat",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Jejari Dalam dan Separuh Perimeter",
      "sec-examples": "Contoh Kerja Langkah demi Langkah",
      "sec-applications": "Aplikasi Kehidupan Sebenar",
      "sec-relationship": "Bagaimana Jejari Dalam dan Separuh Perimeter Berkait dengan Tiga Sisi",
      "sec-valid": "Memeriksa Sama Ada Ukuran Anda Sah",
      "sec-heron": "Bagaimana Formula Jejari Dalam Berbanding dengan Formula Heron",
      "sec-legs": "Mengapa Formula Jejari Dalam Sehaluan dengan Formula Kaki",
      "sec-mistakes": "Kesilapan Biasa",
      "sec-verify": "Cara Mengesahkan Luas Anda",
      "sec-units": "Unit Ukuran dan Pembundaran",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Bersudut Tepat Menggunakan Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Sebuah segi tiga bersudut tepat mempunyai jejari dalam [[r=2]] dan separuh perimeter [[s=12]]. Gunakan [[K=r\\times s]]: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. Segi tiga ini meliputi 24 unit persegi luas rata. Ini ialah kaedah lengkap yang diautomasikan oleh kalkulator: dua ukuran, sekali darab, satu jawapan." },
          { "kind": "p", "text": "Jejari dalam ialah jejari bulatan yang muat kemas di dalam segi tiga sambil menyentuh ketiga-tiga sisinya. Separuh perimeter ialah separuh jarak mengelilingi segi tiga. Bersama-sama ia mencukupi untuk menentukan luas kerana jejari bulatan bertindak sebagai tinggi bagi tiga segi tiga kecil yang bertapak pada sisi-sisi segi tiga itu. Identiti ini sah untuk setiap segi tiga tak merosot, bukan hanya segi tiga bersudut tepat; yang istimewa tentang segi tiga bersudut tepat ialah cara pantas jejari dalam itu sendiri boleh dikira daripada ketiga-tiga sisi. Ia paling berguna apabila bulatan dalam telah diukur secara langsung, atau apabila jejari dalam dan separuh perimeter sudah diketahui daripada kerja terdahulu." }
        ]
      },
      "sec-incircle": {
        "h2": "Apakah Bulatan Dalam dalam Geometri?",
        "blocks": [
          { "kind": "p", "text": "Tatatanda yang digunakan ialah: [[A]], [[B]], dan [[C]] ialah bucu dan sudut dengan [[C=90^\\circ]]; [[a]] dan [[b]] ialah dua kaki; [[c]] ialah hipotenus bertentangan dengan [[C]]; [[r]] ialah jejari dalam; [[I]] ialah pusat bulatan dalam; [[s]] ialah separuh perimeter; [[P]] ialah perimeter; dan [[K]] ialah luas, digunakan di mana-mana supaya tidak dikelirukan dengan sudut [[A]]." },
          { "kind": "h3", "text": "Takrifan Bulatan Dalam" },
          { "kind": "p", "text": "Bulatan dalam ialah bulatan terbesar yang muat di dalam segi tiga sambil menyentuh ketiga-tiga sisinya. Ia terletak sepenuhnya di dalam kerana setiap sisi segi tiga ialah garis tangen kepada bulatan: bulatan mencapai sisi pada tepat satu titik dan kekal di bahagian dalamnya. Bulatan yang hanya terletak berhampiran sisi tidak dikira; bulatan dalam mesti menjadi tangen kepada setiap sisi, menyentuhnya pada satu titik lalu berpatah balik ke bahagian dalam. Setiap segi tiga tak merosot mempunyai tepat satu bulatan sedemikian, dan ia mempunyai pusat yang unik, kerana ketiga-tiga garis itu tidak selari dan geometrinya menetapkan bulatan itu sepenuhnya." },
          { "kind": "h3", "text": "Apakah Jejari Dalam?" },
          { "kind": "p", "text": "Jejari dalam ialah jarak dari pusat bulatan dalam ke mana-mana sisi segi tiga. Jika [[I]] ialah pusat bulatan dalam dan [[D]] ialah titik di mana bulatan dalam menyentuh sisi, maka [[r=ID]]. Jejari bulatan ialah jarak terpendek dari pusatnya ke sisi tangen, dan jarak terpendek itu sama untuk ketiga-tiga sisi, itulah sebabnya bulatan itu menjadi tangen kepada ketiga-tiganya dan bukan sekadar berhampiran." },
          { "kind": "h3", "text": "Mengapa Jejari Dalam Serenjang dengan Setiap Sisi?" },
          { "kind": "p", "text": "Sifat asas bulatan menyatakan bahawa pada setiap titik di mana garis menyentuh bulatan, jejari yang dilukis ke titik itu bertemu garis pada sudut tepat. Jadi jika [[D]] ialah titik sentuhan pada sisi [[AB]], maka [[ID\\perp AB]]. Begitu juga untuk dua sisi yang lain. Keserenjangan ini bukan hiasan: inilah yang membolehkan setiap jejari bertindak sebagai tinggi segi tiga kecil apabila formula luas diterbitkan, kerana tinggi segi tiga mesti serenjang dengan tapaknya." },
          { "kind": "h3", "text": "Memahami Pusat Bulatan Dalam" },
          { "kind": "p", "text": "Pusat bulatan dalam [[I]] ialah titik di mana tiga pembahagi dua sama sudut dalaman segi tiga bertemu. Setiap pembahagi dua sama sudut ialah set titik yang sama jarak dari dua sisi yang membentuk sudut itu, jadi titik yang terletak pada ketiga-tiga pembahagi dua sama jarak dari ketiga-tiga sisi, dan ia mesti terletak di dalam segi tiga. Jarak sepunya itu ialah tepat jejari dalam, dan bulatan berpusat di [[I]] dengan jejari [[r]] menyentuh setiap sisi sekali: bulatan dalam." },
          { "kind": "h3", "text": "Adakah Jejari Dalam Sama dengan Jejari Luar?" },
          { "kind": "p", "text": "Tidak. Jejari dalam [[r]] ialah jejari bulatan di dalam segi tiga, manakala jejari luar [[R]] ialah jejari bulatan yang melalui ketiga-tiga bucu, iaitu bulatan luar. Untuk segi tiga bersudut tepat, pusat bulatan luar ialah titik tengah hipotenus, jadi [[[\\boxed{R=\\frac{c}{2}}]]]. Kedua-dua jejari itu memerihalkan bulatan yang berbeza sama sekali: satu terterap dalam segi tiga, satu lagi dilukis mengelilinginya. Mencampuradukkannya ialah antara kesilapan paling biasa dalam topik ini, jadi asingkan: [[r]] untuk dalam, [[R]] untuk luar." }
        ],
        "imgAlt": "Segi tiga ABC dengan bulatan dalam, pusat I, jejari dalam r, titik sentuhan dan bulatan luar",
        "figcaption": "Segi tiga ABC dan bulatan dalamnya: pusat I, jejari dalam r = ID dengan ID serenjang dengan setiap sisi, serta bulatan luar untuk perbandingan."
      },
      "sec-semiperimeter": {
        "h2": "Apakah Separuh Perimeter Segi Tiga?",
        "blocks": [
          { "kind": "h3", "text": "Takrifan Separuh Perimeter" },
          { "kind": "p", "text": "Separuh perimeter ialah separuh daripada jumlah perimeter segi tiga: [[[\\boxed{s=\\frac{a+b+c}{2}}]]], dengan [[a]] dan [[b]] ialah kaki-kaki dan [[c]] ialah hipotenus. Ia ialah panjang, seperti mana-mana sisi, dan ia mendapat tempat dalam formula luas kerana ia menggabungkan ketiga-tiga sisi menjadi satu nombor." },
          { "kind": "h3", "text": "Perbezaan antara Perimeter dan Separuh Perimeter" },
          { "kind": "p", "text": "Perimeter ialah jarak penuh mengelilingi segi tiga, [[P=a+b+c]], manakala separuh perimeter ialah separuh daripadanya, [[s=\\frac{P}{2}]]. Untuk segi tiga 3-4-5: [[P=3+4+5=12]] dan [[s=\\frac{12}{2}=6]]. Separuh perimeter bukanlah panjang sempadan; ia separuh daripadanya, dan memasukkan perimeter penuh ke dalam [[K=rs]] akan menggandakan luas sebenar." },
          { "kind": "h3", "text": "Mengapa Separuh Perimeter Digunakan dalam Formula Luas?" },
          { "kind": "p", "text": "Menyambungkan pusat bulatan dalam ke tiga bucu membahagikan segi tiga kepada tiga segi tiga kecil, setiap satunya berketinggian serenjang [[r]]. Tapaknya ialah [[a]], [[b]], dan [[c]], jadi luas gabungannya ialah [[K=\\frac12r(a+b+c)]]. Oleh kerana [[s=\\frac{a+b+c}{2}]], separuh perimeter sudah terbina dalam [[s]], memberi [[K=rs]]. Bahagian seterusnya menerbitkannya sepenuhnya." },
          { "kind": "h3", "text": "Bolehkah Separuh Perimeter Lebih Kecil daripada Satu Sisi?" },
          { "kind": "p", "text": "Tidak. Ketaksamaan segi tiga menyatakan bahawa untuk mana-mana segi tiga, [[a+b>c]], jadi [[s=\\frac{a+b+c}{2}>c]]. Hujah yang sama terpakai pada dua sisi yang lain: [[s>a]] dan [[s>b]]. Separuh perimeter sentiasa lebih besar daripada setiap sisi individu. Ini ialah semakan kewarasan pantas pada input: jika separuh perimeter yang didakwa lebih kecil daripada mana-mana sisi, nombor-nombor itu tidak boleh memerihalkan segi tiga sebenar." }
        ]
      },
      "sec-formula": {
        "h2": "Mengapa Luas Segi Tiga Sama dengan Jejari Dalam Darab Separuh Perimeter?",
        "blocks": [
          { "kind": "p", "text": "Mulakan daripada peraturan luas segi tiga piawai: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Melukis segmen dari pusat bulatan dalam [[I]] ke tiga bucu membahagikan segi tiga asal kepada tiga segi tiga kecil. Setiap segi tiga kecil mempunyai tapak sama dengan satu sisi segi tiga asal dan ketinggian serenjang sama dengan jejari dalam [[r]], kerana jejari bertemu setiap sisi pada sudut tepat. Ini berfungsi untuk setiap segi tiga tak merosot; untuk kalkulator ini segi tiganya bersudut tepat, tetapi identiti luas itu sendiri adalah umum sepenuhnya." },
          { "kind": "h3", "text": "Luas Segi Tiga Kecil Pertama" },
          { "kind": "p", "text": "Segi tiga kecil yang berdiri pada sisi [[a]] mempunyai tapak [[a]] dan tinggi [[r]]: [[[\\boxed{K_1=\\frac{ar}{2}}]]]." },
          { "kind": "h3", "text": "Luas Segi Tiga Kecil Kedua" },
          { "kind": "p", "text": "Segi tiga kecil yang berdiri pada sisi [[b]] mempunyai tapak [[b]] dan tinggi [[r]]: [[[\\boxed{K_2=\\frac{br}{2}}]]]." },
          { "kind": "h3", "text": "Luas Segi Tiga Kecil Ketiga" },
          { "kind": "p", "text": "Segi tiga kecil yang berdiri pada sisi [[c]] mempunyai tapak [[c]] dan tinggi [[r]]: [[[\\boxed{K_3=\\frac{cr}{2}}]]]." },
          { "kind": "h3", "text": "Tambahkan Ketiga-tiga Luas" },
          { "kind": "p", "text": "Ketiga-tiga segi tiga kecil menjubin yang asal tanpa bertindih, jadi [[K=K_1+K_2+K_3]]. Gantikan: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Faktorkan [[\\frac{r}{2}]]: [[K=\\frac{r(a+b+c)}{2}]]. Ingat [[s=\\frac{a+b+c}{2}]], maka [[[\\boxed{K=r\\times s}]]]. Setiap peralihan adalah berasas: jubinannya tepat, tinggi [[r]] adalah sepunya, dan separuh perimeter menyerap pembahagian dengan dua." },
          { "kind": "h3", "text": "Mengapa Formula Ini Tidak Perlu Dibahagi Dua Lagi?" },
          { "kind": "p", "text": "Kerana satu perdua sudah dilipat ke dalam separuh perimeter. Ketiga-tiga perdua bergabung menjadi [[\\frac{r(a+b+c)}{2}]], dan [[s]] ialah tepat separuh perimeter, jadi membahagi dua buat kali kedua akan menjadikan ungkapan yang betul itu suku. Kira [[r\\times s]] dan berhenti di situ; pembahagian separuh lagi ialah kesilapan, bukan pembetulan." }
        ],
        "imgAlt": "Bulatan dalam membahagikan segi tiga ABC kepada tiga segi tiga kecil berketinggian r dan bertapak a, b, c",
        "figcaption": "Tiga segi tiga kecil berketinggian sepunya r dan bertapak a, b, c: luasnya ar/2 + br/2 + cr/2 berjumlah rs."
      },
      "sec-inradius": {
        "h2": "Cara Mengira Jejari Dalam Menggunakan Tiga Panjang Sisi",
        "blocks": [
          { "kind": "p", "text": "Apabila ketiga-tiga sisi diketahui, jejari dalam segi tiga bersudut tepat mengikut jalan pintas yang mengelakkan melukis bulatan dalam sama sekali: [[[\\boxed{r=\\frac{a+b-c}{2}}]]], dengan [[a]] dan [[b]] ialah kaki-kaki yang berserenjang dan [[c]] ialah hipotenus. Ini ialah antara fakta paling berguna dalam geometri segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Menerbitkan Formula Jejari Dalam Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Penerbitan menggunakan teorem segmen tangen sama: dari satu titik luaran yang sepunya, dua segmen tangen yang dilukis ke bulatan mempunyai panjang yang sama. Biarkan panjang tangen dari tiga bucu ialah [[x]] dari bucu [[A]], [[y]] dari bucu [[B]], dan [[z]] dari bucu [[C]]. Pada sudut tepat [[C]], dua tangen bulatan dalam berjalan sepanjang kaki-kaki yang berserenjang dan masing-masing berpanjang [[r]], membentuk segi empat sama kecil dengan dua jejari, jadi [[z=r]]. Sisi-sisinya pula ialah [[a=y+r]], [[b=x+r]], dan [[c=x+y]]. Tolak: [[a+b-c=(y+r)+(x+r)-(x+y)]], jadi [[a+b-c=2r]], memberi [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Segi empat sama pada sudut tepat inilah sebabnya jalan pintas ini hanya milik segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Contoh Menggunakan Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]]. Jejari bulatan dalam ialah tepat 1, tanpa pembinaan diperlukan." },
          { "kind": "h3", "text": "Contoh Menggunakan Segi Tiga 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]]. Sekali lagi, jejari dalam terbit terus daripada panjang sisi." },
          { "kind": "h3", "text": "Mencari Separuh Perimeter Serentak" },
          { "kind": "p", "text": "Dengan tiga sisi yang sama, kira [[s=\\frac{a+b+c}{2}]] serentak dengan [[r]]. Untuk segi tiga 5-12-13: [[s=\\frac{5+12+13}{2}=15]], dan kemudian [[K=rs=2\\times15=30]]. Sekali lalu pada tiga sisi membekalkan kedua-dua input kalkulator dan luas itu sendiri." },
          { "kind": "h3", "text": "Bilakah Anda Patut Menggunakan Jalan Pintas Ini?" },
          { "kind": "p", "text": "Gunakannya apabila ketiga-tiga sisi diketahui tetapi bulatan dalam belum diukur atau dilukis: latihan buku teks, dimensi pembinaan, dan data ukur biasanya memberi panjang sisi, bukan jejari dalam. Jalan pintas menukarkannya kepada [[r]] dalam satu baris. Apabila jejari dalam ialah kuantiti yang diukur, masukkannya terus dan langkau penukaran." }
        ],
        "imgAlt": "Segi tiga 3-4-5 menunjukkan segmen tangen sama dan jalan pintas jejari dalam r = (a+b-c)/2 = 1",
        "figcaption": "Segmen tangen pada segi tiga 3-4-5: panjang sama dari setiap bucu memberi r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat daripada Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Kalkulator memerlukan tepat dua input. Panduan di bawah mengikut susunan pada skrin, dari ukuran yang diketahui hingga hasil yang disahkan." }
        ],
        "steps": [
          "<strong>Kenal pasti jejari dalam r.</strong> Jejari bulatan terterap, iaitu jarak serenjang dari pusat bulatan dalam ke mana-mana sisi.",
          "<strong>Kenal pasti separuh perimeter s.</strong> Separuh daripada jumlah perimeter segi tiga.",
          "<strong>Jika ketiga-tiga sisi diketahui, kira r menggunakan [[r=\\frac{a+b-c}{2}]].</strong> Di sini [[a]] dan [[b]] ialah kaki-kaki dan [[c]] ialah hipotenus.",
          "<strong>Kira s menggunakan [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Masukkan jejari dalam dalam medan pertama.</strong>",
          "<strong>Masukkan separuh perimeter dalam medan kedua.</strong>",
          "<strong>Pilih unit panjang yang serasi.</strong> Kedua-dua ukuran mesti menggunakan unit yang sama.",
          "<strong>Pastikan kedua-dua nilai positif.</strong> Panjang sifar atau negatif tidak memerihalkan sebarang segi tiga.",
          "<strong>Klik Calculate Area.</strong>",
          "<strong>Semak hasilnya.</strong> Luas muncul dalam unit persegi yang sepadan dengan input.",
          "<strong>Pastikan jawapan dinyatakan dalam unit persegi.</strong> Meter memberi meter persegi; sentimeter memberi sentimeter persegi.",
          "<strong>Semak penyelesaian matematik.</strong> Ia menunjukkan penggantian dan aritmetik.",
          "<strong>Gunakan Reset apabila memulakan pengiraan baharu.</strong> Ia mengosongkan kedua-dua medan supaya pengiraan seterusnya bermula bersih."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta tiga panjang sisi: jejari dalam dan separuh perimeter sudah mengandungi semua yang diperlukan oleh formula [[K=rs]]."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Pengiraan Luas Menggunakan Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Empat contoh kerja membina kaedah dari yang biasa ke atas. Setiap satunya mengira separuh perimeter dan jejari dalam daripada tiga sisi, menggunakan [[K=rs]] dengan setiap penggantian ditunjukkan, dan mengesahkan dengan formula kaki." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tepat 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Langkah 1: separuh perimeter, [[s=\\frac{3+4+5}{2}=6]]. Langkah 2: jejari dalam, [[r=\\frac{3+4-5}{2}=1]]. Langkah 3: gunakan formula, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Sahkan: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tepat 6-8-10" },
          { "kind": "p", "text": "Diberi [[a=6]], [[b=8]], [[c=10]]. Maka [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]], dan [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. Sahkan: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tepat 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]], [[c=13]]. Maka [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]], dan [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Sahkan: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga Bersudut Tepat 8-15-17" },
          { "kind": "p", "text": "Diberi [[a=8]], [[b=15]], [[c=17]]. Maka [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]], dan [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Sahkan: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Perbandingan Contoh Asas" }
        ],
        "table": {
          "headers": ["Segi tiga", "Separuh perimeter s", "Jejari dalam r", "Luas K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Luas Segi Tiga Bersudut Tepat Menggunakan Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi kerja menunjukkan formula pada skala dan unit yang berbeza. Setiap satunya menamakan objek segi tiga, memberi tiga ukuran sisi, mengira jejari dalam dan separuh perimeter, menggunakan formula utama langkah demi langkah, dan menyatakan andaian di sebaliknya. Setiap contoh ialah panel, keratan, profil, atau model geometri ringkas berbentuk segi tiga bersudut tepat; apabila objek sebenar melengkung atau tidak sekata, pengiraan hanya meliputi segi tiga yang dimodelkan." },
          { "kind": "h3", "text": "Contoh 1: Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Tingkap kaca segi tiga bersudut tepat mempunyai [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Jejari dalam: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Separuh perimeter: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Luas: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. Ini ialah luas kaca rata sebelum mengambil kira dimensi bingkai." },
          { "kind": "h3", "text": "Contoh 2: Pendakap Sokongan Keluli" },
          { "kind": "p", "text": "Plat sokongan keluli segi tiga mempunyai [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Maka [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Luas sahaja tidak menentukan kapasiti menanggung beban plat." },
          { "kind": "h3", "text": "Contoh 3: Profil Sisi Tanjakan Segi Tiga" },
          { "kind": "p", "text": "Profil tanjakan segi tiga bersudut tepat yang dipermudahkan mempunyai [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Maka [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]]. Ini mewakili profil sisi dan bukan permukaan berjalan yang condong." },
          { "kind": "h3", "text": "Contoh 4: Panel Sokongan Bumbung Segi Tiga" },
          { "kind": "p", "text": "Panel sokongan bumbung segi tiga bersudut tepat mempunyai [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Maka [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]]. Hasilnya ialah anggaran luas panel segi tiga rata." },
          { "kind": "h3", "text": "Contoh 5: Seksyen Taman yang Diukur" },
          { "kind": "p", "text": "Seksyen taman segi tiga bersudut tepat mempunyai [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Maka [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]]. Formula memberi luas seksyen segi tiga terus daripada tiga ukuran sempadannya." },
          { "kind": "h3", "text": "Contoh 6: Layar Kain Segi Tiga" },
          { "kind": "p", "text": "Panel kain segi tiga bersudut tepat mempunyai [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Maka [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Jahitan dan elaun kain dikecualikan daripada angka panel rata ini." },
          { "kind": "h3", "text": "Contoh 7: Seksyen Tanah Segi Tiga yang Besar" },
          { "kind": "p", "text": "Seksyen tanah yang diukur yang dimodelkan sebagai segi tiga bersudut tepat mempunyai [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Maka [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]]. Model segi tiga bersudut tepat yang dipermudahkan mengandaikan sempadan lurus di atas tanah rata." },
          { "kind": "h3", "text": "Contoh 8: Templat Potongan Papan Lapis" },
          { "kind": "p", "text": "Templat papan lapis segi tiga mempunyai [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Maka [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Luas membantu menganggar keperluan bahan sebelum sisa potongan." },
          { "kind": "h3", "text": "Contoh 9: Panel Papan Tanda Segi Tiga yang Besar" },
          { "kind": "p", "text": "Panel papan tanda segi tiga bersudut tepat mempunyai [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Maka [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]]. Hasilnya mewakili permukaan segi tiga rata yang menghadap penonton." },
          { "kind": "h3", "text": "Contoh 10: Sokongan Awning Segi Tiga" },
          { "kind": "p", "text": "Seksyen sokongan awning segi tiga bersudut tepat mempunyai [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Maka [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]]. Ini ialah luas yang dikira bagi seksyen segi tiga yang dimodelkan." },
          { "kind": "h3", "text": "Contoh 11: Panel Sokongan Perindustrian" },
          { "kind": "p", "text": "Panel sokongan perindustrian segi tiga bersudut tepat mempunyai [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Maka [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]]. Pengiraan geometri ini memerihalkan luas rata panel, bukan prestasi strukturnya." },
          { "kind": "h3", "text": "Contoh 12: Seksyen Hujung Bumbung Segi Tiga yang Besar" },
          { "kind": "p", "text": "Seksyen hujung bumbung segi tiga bersudut tepat mempunyai [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Maka [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Luas yang dikira membantu menganggar liputan segi tiga rata." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Aplikasi", "Sisi a", "Sisi b", "Hipotenus c", "Jejari dalam r", "Separuh perimeter s", "Luas"],
          "rows": [
            ["Tingkap kaca", "3", "4", "5", "1", "6", "6 m²"],
            ["Pendakap keluli", "5", "12", "13", "2", "15", "30 cm²"],
            ["Profil tanjakan", "6", "8", "10", "2", "12", "24 m²"],
            ["Panel bumbung", "8", "15", "17", "3", "20", "60 ft²"],
            ["Seksyen taman", "7", "24", "25", "3", "28", "84 m²"],
            ["Layar kain", "9", "12", "15", "3", "18", "54 ft²"],
            ["Seksyen tanah", "9", "40", "41", "4", "45", "180 m²"],
            ["Templat papan lapis", "12", "16", "20", "4", "24", "96 cm²"],
            ["Panel papan tanda", "20", "21", "29", "6", "35", "210 m²"],
            ["Sokongan awning", "15", "20", "25", "5", "30", "150 ft²"],
            ["Panel perindustrian", "11", "60", "61", "5", "66", "330 m²"],
            ["Seksyen hujung bumbung", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Bagaimana Jejari Dalam dan Separuh Perimeter Berkait dengan Tiga Sisi?",
        "blocks": [
          { "kind": "p", "text": "Dalam segi tiga bersudut tepat, jejari dalam dan separuh perimeter tidak bebas daripada sisi; ia dibina daripadanya. Bermula daripada [[r=\\frac{a+b-c}{2}]] dan [[s=\\frac{a+b+c}{2}]], tambahkan dan tolakkan kedua-dua ungkapan. Menambah memberi [[[\\boxed{s+r=a+b}]]], dan menolak memberi [[[\\boxed{s-r=c}]]]. Kedua-dua identiti ini khusus untuk segi tiga bersudut tepat di bawah tatatanda yang diberi, dan ia menukarkan dua input kalkulator menjadi maklumat yang mengejutkan banyaknya tentang segi tiga itu sendiri." },
          { "kind": "h3", "text": "Memulihkan Hipotenus" },
          { "kind": "p", "text": "Daripada [[s-r=c]], hipotenus boleh dipulihkan apabila [[r]] dan [[s]] diketahui. Untuk [[r=2]] dan [[s=12]]: [[c=12-2]], [[[\\boxed{c=10}]]]. Dua input mendedahkan sisi terpanjang tanpa sebarang ukuran lanjut." },
          { "kind": "h3", "text": "Memulihkan Hasil Tambah Dua Kaki" },
          { "kind": "p", "text": "Daripada [[a+b=s+r]], hasil tambah kaki-kaki diperoleh terus. Untuk [[r=2]] dan [[s=12]]: [[a+b=14]]. Hasil tambah sahaja tidak dapat mengenal pasti setiap kaki secara individu; panjang individu memerlukan satu lagi maklumat." },
          { "kind": "h3", "text": "Memulihkan Hasil Darab Dua Kaki" },
          { "kind": "p", "text": "Oleh kerana [[K=\\frac{ab}{2}]] dan [[K=rs]], maka [[[\\boxed{ab=2rs}]]]. Untuk [[r=2]] dan [[s=12]]: [[ab=48]]. Dengan [[a+b=14]] dan [[ab=48]], dua kaki ialah 6 dan 8: [[6+8=14]] dan [[6\\times8=48]]. Kedua-dua kaki boleh ditukar ganti tanpa mengubah luas segi tiga." },
          { "kind": "h3", "text": "Memulihkan Kedua-dua Panjang Kaki" },
          { "kind": "p", "text": "Hasil tambah dan hasil darab menjadikan [[a]] dan [[b]] dua punca bagi [[t^2-(s+r)t+2rs=0]], memberi [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]]. Kedua-dua tanda sepadan dengan dua tugasan kaki yang mungkin. Dengan [[r=2]] dan [[s=12]]: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], jadi [[a,b=\\frac{14\\pm2}{2}]], kaki 6 dan 8. Ini ialah deduksi matematik lanjutan, bukan ciri kalkulator tambahan." }
        ]
      },
      "sec-valid": {
        "h2": "Cara Memeriksa Sama Ada Jejari Dalam dan Separuh Perimeter Membentuk Segi Tiga Bersudut Tepat yang Sah",
        "blocks": [
          { "kind": "p", "text": "Kalkulator mendarab dua input, tetapi bukan setiap pasangan panjang positif memerihalkan segi tiga bersudut tepat. Semakan di bawah memisahkan aritmetik daripada geometri." },
          { "kind": "h3", "text": "Syarat Input Asas" },
          { "kind": "p", "text": "Input mesti memenuhi [[r>0]] dan [[s>0]]. Untuk segi tiga bersudut tepat, [[s>r]] juga diperlukan, kerana [[c=s-r]] dan hipotenus mesti positif. Ketiga-tiga syarat ini perlu tetapi tidak mencukupi." },
          { "kind": "h3", "text": "Semakan Ketekalan Segi Tiga Bersudut Tepat Lanjutan" },
          { "kind": "p", "text": "Daripada [[a+b=s+r]] dan [[ab=2rs]], dua kaki adalah nyata tepat apabila diskriminan [[\\Delta=(s+r)^2-8rs]] tidak negatif. Dipermudahkan: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]]. Untuk panjang kaki nyata, [[\\Delta\\geq0]]. Oleh kerana [[s]] mesti melebihi [[r]], syarat segi tiga bersudut tepat yang setara ialah [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]], atau [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]]. Kesamaan berlaku untuk segi tiga bersudut tepat sama kaki, padanan paling ketat yang mungkin. Ini ialah ujian keserasian matematik lanjutan, diasingkan dengan jelas daripada semakan asas di atas." },
          { "kind": "h3", "text": "Contoh Sah" },
          { "kind": "p", "text": "Diberi [[r=2]] dan [[s=12]], nisbahnya ialah [[\\frac{s}{r}=6]]. Oleh kerana [[6>3+2\\sqrt2]] (kira-kira 5.83), nilai-nilai itu boleh memerihalkan segi tiga bersudut tepat yang sah, dan sisi-sisi yang sepadan ialah 6, 8, dan 10." },
          { "kind": "h3", "text": "Contoh Tidak Serasi" },
          { "kind": "p", "text": "Diberi [[r=2]] dan [[s=10]], nisbahnya ialah [[\\frac{s}{r}=5]], di bawah ambang yang diperlukan iaitu kira-kira 5.83. Pasangan ini tidak boleh memerihalkan segi tiga bersudut tepat, walaupun mendarab input menghasilkan hasil berangka. Mengira [[rs]] dan mengesahkan ukuran memerihalkan segi tiga bersudut tepat ialah dua tugas yang berbeza. Panduan ini tidak mendakwa kalkulator melakukan semakan ini secara automatik." }
        ]
      },
      "sec-heron": {
        "h2": "Bagaimana Formula Jejari Dalam Berbanding dengan Formula Heron?",
        "blocks": [
          { "kind": "p", "text": "Formula Heron mengira luas daripada ketiga-tiga sisi: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Ia menggunakan tiga panjang sisi dan separuh perimeter, ia berfungsi untuk mana-mana segi tiga tak merosot, dan ia tidak memerlukan jejari dalam sebagai input berasingan. Bandingkan dengan [[[\\boxed{K=rs}]]]. Kedua-duanya saudara dekat: separuh perimeter [[s]] muncul dalam kedua-duanya, dan membuktikan ia sehaluan ialah antara cara paling kemas untuk melihat bahawa [[K=rs]] adalah betul." },
          { "kind": "h3", "text": "Bilakah Formula Jejari Dalam Lebih Mudah?" },
          { "kind": "p", "text": "[[K=rs]] amat mudah apabila jejari dalam dan separuh perimeter sudah diketahui: sekali darab, tiada punca kuasa dua, tiada pemfaktoran beza sisi. Apabila bulatan dalam telah diukur, atau apabila langkah terdahulu sudah menghasilkan [[r]] dan [[s]], ini ialah laluan terpendek ke luas." },
          { "kind": "h3", "text": "Bilakah Formula Heron Lebih Berguna?" },
          { "kind": "p", "text": "Formula Heron ialah pilihan lebih baik apabila tiga panjang sisi diketahui tetapi jejari dalam belum dikira. Ia mencapai luas terus daripada [[a]], [[b]], dan [[c]] tanpa lencongan melalui [[r]]. Tiada formula yang lebih tepat secara sejagat; kedua-duanya tepat pada input yang konsisten, dan ia berselisih hanya apabila input tidak konsisten." },
          { "kind": "h3", "text": "Sahkan Kedua-dua Formula Menggunakan Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]], dengan [[s=6]] dan [[r=1]]. Menggunakan jejari dalam: [[K=1\\times6=6]]. Menggunakan formula Heron: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], jadi [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Hasilnya sehaluan kerana kedua-dua formula mengukur rantau yang sama; ia dua ungkapan bagi satu luas, dan persetujuan antara keduanya ialah tanda kukuh aritmetiknya betul." }
        ]
      },
      "sec-legs": {
        "h2": "Mengapa Formula Jejari Dalam Menghasilkan Luas yang Sama dengan Formula Kaki?",
        "blocks": [
          { "kind": "p", "text": "Dua formula mendakwa luas yang sama: [[K=\\frac{ab}{2}]] dan [[K=rs]]. Menulis [[r]] dan [[s]] dalam sebutan sisi memberi [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], jadi [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Pengangka ialah beza kuasa dua: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Gunakan teorem Pythagoras [[c^2=a^2+b^2]]: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], maka [[[\\boxed{rs=\\frac{ab}{2}}]]]. Kedua-dua formula adalah seiras pada setiap segi tiga bersudut tepat; ia tidak boleh berselisih pada input yang konsisten." },
          { "kind": "p", "text": "Semak dengan segi tiga 3-4-5: [[r=1]], [[s=6]], [[rs=6]], dan [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Dengan segi tiga 6-8-10: [[r=2]], [[s=12]], [[rs=24]], dan [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. Formula kaki yang biasa dan formula jejari dalam ialah kuantiti yang sama memakai pakaian berbeza." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Apabila Mengira Luas daripada Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Kebanyakan jawapan salah berpunca daripada input yang tersalah label dan bukan aritmetik yang buruk. Lima belas kesilapan di bawah meliputi hampir setiap satunya." },
          { "kind": "h3", "text": "1. Mengelirukan Jejari Dalam dengan Jejari Luar" },
          { "kind": "p", "text": "Jejari dalam ialah bulatan di dalam; jejari luar ialah bulatan di sekeliling. Dalam segi tiga 6-8-10, [[r=2]] tetapi [[R=\\frac{c}{2}=5]]. Menggunakan 5 untuk [[r]] memberi [[K=5\\times12=60]] bukannya 24. Betulkan: tanya sama ada bulatan terletak di dalam segi tiga atau melalui bucunya." },
          { "kind": "h3", "text": "2. Menggunakan Perimeter Penuh dan Bukan Separuh Perimeter" },
          { "kind": "p", "text": "Formula memerlukan [[s]], separuh perimeter. Dengan [[r=2]] dan perimeter penuh 24 bukannya [[s=12]], hasilnya ialah [[K=2\\times24=48]], dua kali ganda 24 yang betul. Betulkan: bahagikan dua perimeter sebelum mendarab." },
          { "kind": "h3", "text": "3. Membahagi Dua Jawapan Akhir Sekali Lagi" },
          { "kind": "p", "text": "Pembahagian separuh sudah ada dalam [[s]]. Membahagi [[2\\times12=24]] dua lagi memberi 12, separuh luas sebenar. Betulkan: kira [[rs]] dan berhenti." },
          { "kind": "h3", "text": "4. Mengelirukan Pusat Bulatan Dalam dengan Pusat Bulatan Luar" },
          { "kind": "p", "text": "Pusat bulatan dalam ialah tempat pembahagi dua sama sudut bertemu; pusat bulatan luar ialah tempat pembahagi dua sama serenjang bertemu, dan untuk segi tiga bersudut tepat ia terletak pada titik tengah hipotenus. Ia titik yang berbeza. Betulkan: jejaki pembinaan yang betul untuk bulatan yang anda perlukan." },
          { "kind": "h3", "text": "5. Menganggap Jejari Dalam sebagai Sisi Segi Tiga" },
          { "kind": "p", "text": "Jejari dalam ialah jarak di dalam segi tiga, bukan salah satu daripada tiga sisinya. Ia tidak sekali-kali tergolong dalam [[a+b+c]]. Betulkan: jauhkan [[r]] daripada setiap ungkapan panjang sisi." },
          { "kind": "h3", "text": "6. Menggunakan Formula Jejari Dalam Segi Tiga Bersudut Tepat yang Salah" },
          { "kind": "p", "text": "Jalan pintas segi tiga bersudut tepat ialah [[r=\\frac{a+b-c}{2}]], bukan varian dengan tanda yang salah atau sisi yang salah dibahagi dua. Kesilapan biasa ialah menggunakan [[r=\\frac{a+c-b}{2}]], yang memberi nombor berbeza melainkan segi tiganya sama kaki. Betulkan: sisi yang ditolak sentiasa hipotenus [[c]]." },
          { "kind": "h3", "text": "7. Lupa bahawa c ialah Hipotenus" },
          { "kind": "p", "text": "Dalam jalan pintas, [[c]] bermaksud hipotenus secara khusus. Betulkan: labelkan sisi terpanjang [[c]] sebelum menggunakan formula." },
          { "kind": "h3", "text": "8. Menggunakan Sisi yang Salah sebagai Hipotenus" },
          { "kind": "p", "text": "Memilih kaki untuk [[c]] merosakkan [[r]] dan [[s]]. Betulkan: hipotenus ialah sisi bertentangan sudut tepat, sentiasa yang terpanjang." },
          { "kind": "h3", "text": "9. Mencampur Unit Ukuran yang Berbeza" },
          { "kind": "p", "text": "Jejari dalam 20 cm dengan separuh perimeter 1 m tidak memberi sebarang nombor bermakna sehingga penukaran. Betulkan: tukar kepada satu unit dahulu, kemudian darab." },
          { "kind": "h3", "text": "10. Memasukkan Panjang Sifar atau Negatif" },
          { "kind": "p", "text": "Panjang sifar dan negatif tidak memerihalkan sebarang segi tiga. Betulkan: pastikan setiap panjang yang dimasukkan adalah positif." },
          { "kind": "h3", "text": "11. Menganggap Setiap Pasangan r dan s Positif Mewakili Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Seperti ditunjukkan sebelum ini, [[r=2]] dengan [[s=10]] menghasilkan nombor 20 tetapi tiada segi tiga bersudut tepat. Betulkan: jalankan semakan [[s/r\\geq3+2\\sqrt2]] apabila geometrinya penting." },
          { "kind": "h3", "text": "12. Melaporkan Luas dalam Unit Linear" },
          { "kind": "p", "text": "Luas 24 m² bukanlah 24 m. Betulkan: tulis unit kuasa dua bersama nombor." },
          { "kind": "h3", "text": "13. Membundarkan Jejari Dalam Terlalu Awal" },
          { "kind": "p", "text": "Membundarkan [[r]] sebelum mendarab mengalihkan seluruh luas. Betulkan: kekalkan ketepatan penuh melalui langkah perantaraan dan bundarkan hanya jawapan akhir." },
          { "kind": "h3", "text": "14. Mengelirukan Separuh Perimeter dengan Hasil Tambah Dua Sisi" },
          { "kind": "p", "text": "Separuh perimeter ialah separuh hasil tambah ketiga-tiga sisi, bukan hasil tambah dua. Betulkan: tambahkan ketiga-tiga sisi, kemudian bahagikan dua." },
          { "kind": "h3", "text": "15. Menganggap Formula Hanya Berfungsi untuk Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "[[K=rs]] sah untuk setiap segi tiga tak merosot; hanya jalan pintas [[r=\\frac{a+b-c}{2}]] yang khusus untuk segi tiga bersudut tepat. Betulkan: gunakan formula luas dengan bebas, tetapi gunakan penerbitan jejari dalam am untuk segi tiga bukan bersudut tepat." },
          { "kind": "h3", "text": "Salah Lawan Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Gunakan segi tiga 6-8-10. Betul: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Menggunakan perimeter penuh secara salah: [[K=2\\times24=48]], yang menggandakan luas. Membahagi dua jawapan yang betul secara salah sekali lagi: [[K=\\frac{24}{2}=12]], yang mengurangkannya separuh. Kedua-dua ralat berpunca daripada pengendalian salah satu perdua yang tinggal dalam [[s]]." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Sama Ada Luas Segi Tiga Bersudut Tepat Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Beberapa semakan bebas menangkap kesilapan biasa. Segi tiga 3-4-5 menunjukkan kebanyakannya." },
          { "kind": "h3", "text": "Kaedah 1: Jejari Dalam dan Separuh Perimeter" },
          { "kind": "p", "text": "Kira semula [[K=rs]] dengan nilai yang dimasukkan. Untuk [[r=1]] dan [[s=6]], [[K=1\\times6=6]]. Laluan kedua menangkap salah taip." },
          { "kind": "h3", "text": "Kaedah 2: Dua Kaki Berserenjang" },
          { "kind": "p", "text": "Apabila kaki diketahui atau dipulihkan, [[K=\\frac{ab}{2}]] mesti sehaluan. Di sini [[\\frac{3\\times4}{2}=6]] sepadan dengan [[1\\times6=6]]: dua kaedah, satu segi tiga, satu jawapan." },
          { "kind": "h3", "text": "Kaedah 3: Teorem Pythagoras" },
          { "kind": "p", "text": "Sahkan [[a^2+b^2=c^2]]: [[9+16=25]]. Jika sisi tidak memenuhinya, pengenalan segi tiga adalah salah." },
          { "kind": "h3", "text": "Kaedah 4: Jejari Dalam Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Sahkan [[r=\\frac{a+b-c}{2}]]: [[\\frac{3+4-5}{2}=1]]. Ketidaksepadanan bermakna jejari dalam yang dimasukkan bukan milik segi tiga ini." },
          { "kind": "h3", "text": "Kaedah 5: Separuh Perimeter" },
          { "kind": "p", "text": "Sahkan [[s=\\frac{a+b+c}{2}]]: [[\\frac{3+4+5}{2}=6]]. Ini menangkap kekeliruan antara perimeter dan separuh perimeter." },
          { "kind": "h3", "text": "Kaedah 6: Formula Heron" },
          { "kind": "p", "text": "Sahkan [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Persetujuan antara formula bebas ialah semakan terkuat yang ada." },
          { "kind": "p", "text": "Persetujuan antara formula bebas ialah semakan matematik yang berguna kerana kesilapan dalam satu laluan jarang terhasil semula dalam laluan lain, jadi dua jawapan yang sepadan daripada formula berbeza bermakna kedua-dua input dan aritmetik adalah kukuh." }
        ],
        "imgAlt": "Luas segi tiga 3-4-5 dibandingkan merentas K = rs, K = ab/2, dan formula Heron",
        "figcaption": "Tiga kaedah, satu jawapan: K = rs, K = ab/2, dan formula Heron semuanya memberi 6 untuk segi tiga 3-4-5."
      },
      "sec-units": {
        "h2": "Memahami Unit Ukuran dalam Pengiraan Jejari Dalam dan Separuh Perimeter",
        "blocks": [
          { "kind": "p", "text": "Luas adalah dua dimensi, jadi unitnya ialah kuasa dua unit panjang. Dalam simbol, [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. Begitu juga untuk meter dan meter persegi, milimeter dan milimeter persegi, kaki dan kaki persegi, inci dan inci persegi. Pemilih unit wujud supaya hasilnya boleh dilabel dengan betul." },
          { "kind": "h3", "text": "Mengapa Kedua-dua Input Mesti Menggunakan Unit yang Serasi" },
          { "kind": "p", "text": "Jejari dalam dan separuh perimeter mesti dinyatakan dalam unit yang sama sebelum formula digunakan. Jika [[r=20\\text{ cm}]] dan [[s=1\\text{ m}]], tukar dahulu: [[1\\text{ m}=100\\text{ cm}]]. Kemudian [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]], atau setara [[[\\boxed{K=0.2\\text{ m}^2}]]]. Mendarab ukuran dalam unit berbeza menghasilkan nombor tanpa unit yang kemas, jadi tukar dahulu dan kira kemudian." },
          { "kind": "h3", "text": "Mengapa Anda Patut Elakkan Pembundaran Awal" },
          { "kind": "p", "text": "Nilai [[r]] atau [[s]] yang dibundarkan mungkin sedikit menjejaskan luas akhir, kerana jejari dalam didarab terus ke dalamnya. Kekalkan ketepatan yang mencukupi melalui pengiraan perantaraan dan bundarkan hanya jawapan akhir. Panduan ini tidak membuat sebarang dakwaan tentang ketepatan dalaman kalkulator melebihi apa yang ditunjukkan antara mukanya." },
          { "kind": "h3", "text": "Ukuran Tepat Lawan Ukuran Praktikal" },
          { "kind": "p", "text": "Dimensi matematik tepat, seperti jejari dalam 1 bagi segi tiga 3-4-5, berkelakuan berbeza daripada ukuran yang diambil dengan alat fizikal. Ketidakpastian alat mengalir ke dalam luas, jadi anggap digit terakhir hanya seboleh dipercayai input. Jejari dalam 2 cm yang diukur dengan pita mungkin sebenarnya 1.9 atau 2.1, dan luas membawa ketidakpastian itu bersamanya." }
        ]
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
        "blocks": [
          { "kind": "p", "text": "Pengukuran yang berbeza memerlukan kalkulator yang berbeza." }
        ]
      },
      "sec-faq": {
        "h2": "Soalan Lazim",
        "blocks": [
          { "kind": "p", "text": "Berikut ialah jawapan kepada soalan paling biasa tentang luas daripada jejari dalam dan separuh perimeter." }
        ]
      },
      "sec-conclusion": {
        "h2": "Dua Ukuran Membawa Seluruh Luas",
        "blocks": [
          { "kind": "p", "text": "Jejari dalam dan separuh perimeter kelihatan seperti input yang sederhana, tetapi bersama-sama ia mengekod keseluruhan keluasan segi tiga. Penerbitan melalui tiga segi tiga kecil menunjukkan mengapa hasil darabnya tepat, hujah segmen tangen menunjukkan dari mana datangnya jalan pintas segi tiga bersudut tepat, dan perbandingan dengan formula kaki dan formula Heron menunjukkan hasilnya sentiasa sehaluan dengan seluruh geometri." },
          { "kind": "p", "text": "Tabiat kerjanya mudah: sahkan apa sebenarnya r dan s, kekalkan unit yang konsisten, dan sahkan jawapan melalui formula bebas. Apabila tabiat itu dipatuhi, K = rs ialah antara pengiraan luas yang paling boleh dipercayai dalam geometri segi tiga." }
        ]
      }
    }
  },
  "pl": {
    "faqs": [
      {
        "question": "Jaki jest wzór na pole z promienia okręgu wpisanego i półobwodu?",
        "answer": "Pomnóż promień okręgu wpisanego r przez półobwód s: K = rs. Na przykład r = 2 i s = 12 dają K = 24 jednostki kwadratowe. Wzór obowiązuje dla każdego niezdegenerowanego trójkąta, nie tylko prostokątnego."
      },
      {
        "question": "Czym jest promień okręgu wpisanego w trójkącie prostokątnym?",
        "answer": "To promień okręgu wpisanego w trójkąt, czyli prostopadła odległość od środka okręgu wpisanego do dowolnego boku. W trójkącie 3-4-5 promień wynosi 1, a w trójkącie 6-8-10 wynosi 2."
      },
      {
        "question": "Jak obliczyć promień okręgu wpisanego w trójkąt prostokątny?",
        "answer": "Ze znanych trzech boków użyj skrótu r = (a + b - c) / 2, gdzie a i b to przyprostokątne, a c to przeciwprostokątna. Dla trójkąta 5-12-13 daje to r = 2."
      },
      {
        "question": "Jak obliczyć półobwód?",
        "answer": "Dodaj trzy boki i podziel sumę na pół: s = (a + b + c) / 2. Dla trójkąta 5-12-13, s = 15. Półobwód jest zawsze większy od każdego boku z osobna."
      },
      {
        "question": "Dlaczego pole równa się promieniowi okręgu wpisanego razy półobwód?",
        "answer": "Połączenie środka okręgu wpisanego z trzema wierzchołkami dzieli trójkąt na trzy mniejsze trójkąty o wspólnej wysokości r i podstawach a, b i c. Ich pola ar/2 + br/2 + cr/2 dają po wyciągnięciu r(a+b+c)/2, a ponieważ s = (a+b+c)/2, całość wynosi rs."
      },
      {
        "question": "Czy wzór działa dla trójkątów nieprostokątnych?",
        "answer": "Tak. K = rs obowiązuje dla każdego niezdegenerowanego trójkąta. Tylko skrót r = (a+b-c)/2 jest specyficzny dla trójkątów prostokątnych, bo opiera się na kwadracie utworzonym przy kącie prostym."
      },
      {
        "question": "Czym różni się promień okręgu wpisanego od promienia okręgu opisanego?",
        "answer": "Promień okręgu wpisanego r to promień okręgu wewnątrz trójkąta, stycznego do wszystkich trzech boków; promień okręgu opisanego R to promień okręgu przechodzącego przez trzy wierzchołki. Dla trójkąta prostokątnego R = c/2."
      },
      {
        "question": "Czy mogę obliczyć pole, nie znając wszystkich trzech boków?",
        "answer": "Tak. Jeśli promień okręgu wpisanego i półobwód są już znane, K = rs daje pole bezpośrednio jednym mnożeniem, bez żadnych długości boków."
      },
      {
        "question": "Czy półobwód to to samo co połowa obwodu?",
        "answer": "Tak, dokładnie: s = P/2 = (a+b+c)/2. Rozróżnienie ma znaczenie, bo wzór wymaga wartości podzielonej na pół; użycie pełnego obwodu podwaja odpowiedź."
      },
      {
        "question": "Jak promień okręgu wpisanego wiąże się z trzema bokami?",
        "answer": "W trójkącie prostokątnym r = (a+b-c)/2, gdzie a i b to przyprostokątne, a c to przeciwprostokątna. Spełnia też s + r = a + b oraz s - r = c, więc boki można odtworzyć z r i s."
      },
      {
        "question": "Czym różni się wzór Herona od wzoru z promieniem okręgu wpisanego?",
        "answer": "Wzór Herona, K = sqrt(s(s-a)(s-b)(s-c)), wymaga wszystkich trzech boków; wzór z promieniem okręgu wpisanego, K = rs, wymaga tylko r i s. Użyj Herona, gdy masz boki, a K = rs, gdy masz r i s. Oba dają to samo pole przy spójnych danych."
      },
      {
        "question": "Jak mogę zweryfikować obliczone pole?",
        "answer": "Sprawdź niezależnymi metodami: wzorem z przyprostokątnymi K = ab/2, twierdzeniem Pitagorasa, skrótem na promień okręgu wpisanego, definicją półobwodu i wzorem Herona. Zgodność metod oznacza poprawne dane i obliczenia."
      }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
      "Kalkulator pola trójkąta prostokątnego z kąta",
      "Kalkulator pola trójkąta prostokątnego z wysokości",
      "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
      "Kalkulator półobwodu trójkąta prostokątnego"
    ],
    "relatedIntro": "Różne pomiary wymagają różnych kalkulatorów.",
    "faqHeading": "Często zadawane pytania",
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
      "sec-incircle": "Czym jest okrąg wpisany w geometrii?",
      "sec-semiperimeter": "Czym jest półobwód trójkąta?",
      "sec-formula": "Dlaczego pole równa się promieniowi okręgu wpisanego razy półobwód",
      "sec-inradius": "Jak znaleźć promień okręgu wpisanego w trójkąt prostokątny",
      "sec-howto": "Jak korzystać z kalkulatora pola z promienia okręgu wpisanego i półobwodu",
      "sec-examples": "Przykłady krok po kroku",
      "sec-applications": "Zastosowania w życiu codziennym",
      "sec-relationship": "Jak promień okręgu wpisanego i półobwód wiążą się z trzema bokami",
      "sec-valid": "Sprawdzanie, czy pomiary są poprawne",
      "sec-heron": "Jak wzór z promieniem okręgu wpisanego wypada wobec wzoru Herona",
      "sec-legs": "Dlaczego wzór z promieniem okręgu wpisanego zgadza się ze wzorem z przyprostokątnymi",
      "sec-mistakes": "Częste błędy",
      "sec-verify": "Jak zweryfikować swoje pole",
      "sec-units": "Jednostki miary i zaokrąglanie",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Trójkąt prostokątny ma promień okręgu wpisanego [[r=2]] i półobwód [[s=12]]. Zastosuj [[K=r\\times s]]: [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. Trójkąt obejmuje 24 jednostki kwadratowe płaskiego pola. To pełna metoda, którą automatyzuje kalkulator: dwa pomiary, jedno mnożenie, jedna odpowiedź." },
          { "kind": "p", "text": "Promień okręgu wpisanego to promień koła, które ściśle mieści się wewnątrz trójkąta, dotykając wszystkich trzech boków. Półobwód to połowa odległości wokół trójkąta. Razem wystarczają do wyznaczenia pola, ponieważ promień koła pełni rolę wysokości trzech mniejszych trójkątów, których podstawami są boki trójkąta. Ta tożsamość obowiązuje dla każdego niezdegenerowanego trójkąta, nie tylko prostokątnego; wyjątkowość trójkątów prostokątnych polega na szybkim sposobie obliczania samego promienia okręgu wpisanego z trzech boków. Jest najbardziej przydatna, gdy okrąg wpisany został zmierzony bezpośrednio albo gdy promień i półobwód są już znane z wcześniejszych obliczeń." }
        ]
      },
      "sec-incircle": {
        "h2": "Czym jest okrąg wpisany w geometrii?",
        "blocks": [
          { "kind": "p", "text": "Oznaczenia w całym tekście: [[A]], [[B]] i [[C]] to wierzchołki i kąty, przy czym [[C=90^\\circ]]; [[a]] i [[b]] to dwie przyprostokątne; [[c]] to przeciwprostokątna naprzeciw [[C]]; [[r]] to promień okręgu wpisanego; [[I]] to środek okręgu wpisanego; [[s]] to półobwód; [[P]] to obwód; a [[K]] to pole, używane wszędzie, by nigdy nie mylić go z kątem [[A]]." },
          { "kind": "h3", "text": "Definicja okręgu wpisanego" },
          { "kind": "p", "text": "Okrąg wpisany to największy okrąg mieszczący się wewnątrz trójkąta, styczny do wszystkich trzech jego boków. Leży w całości wewnątrz, ponieważ każdy bok trójkąta jest prostą styczną do okręgu: okrąg sięga boku w dokładnie jednym punkcie i pozostaje po jego wewnętrznej stronie. Okrąg leżący jedynie w pobliżu boku się nie liczy; okrąg wpisany musi być styczny do każdego boku, dotykać go w jednym punkcie, a potem zawracać do wnętrza. Każdy niezdegenerowany trójkąt ma dokładnie jeden taki okrąg i ma on unikalny środek, ponieważ te trzy proste nie są równoległe, a ich geometria ustala okrąg całkowicie." },
          { "kind": "h3", "text": "Czym jest promień okręgu wpisanego?" },
          { "kind": "p", "text": "Promień okręgu wpisanego to odległość od środka okręgu wpisanego do dowolnego boku trójkąta. Jeśli [[I]] jest środkiem okręgu wpisanego, a [[D]] punktem, w którym okrąg wpisany dotyka boku, to [[r=ID]]. Promień okręgu to najkrótsza odległość od jego środka do stycznego boku, a ta najkrótsza odległość jest taka sama dla wszystkich trzech boków, dlatego okrąg jest styczny do wszystkich trzech, a nie tylko w ich pobliżu." },
          { "kind": "h3", "text": "Dlaczego promień okręgu wpisanego jest prostopadły do każdego boku?" },
          { "kind": "p", "text": "Podstawowa własność okręgów mówi, że w każdym punkcie, w którym prosta dotyka okręgu, promień poprowadzony do tego punktu spotyka prostą pod kątem prostym. Jeśli więc [[D]] jest punktem styczności na boku [[AB]], to [[ID\\perp AB]]. To samo dotyczy dwóch pozostałych boków. Ta prostopadłość nie jest ozdobą: to ona pozwala każdemu promieniowi pełnić rolę wysokości mniejszego trójkąta przy wyprowadzaniu wzoru na pole, ponieważ wysokość trójkąta musi być prostopadła do jego podstawy." },
          { "kind": "h3", "text": "Zrozumienie środka okręgu wpisanego" },
          { "kind": "p", "text": "Środek okręgu wpisanego [[I]] to punkt, w którym spotykają się trzy wewnętrzne dwusieczne kątów trójkąta. Każda dwusieczna kąta to zbiór punktów równoodległych od dwóch boków tworzących ten kąt, więc punkt leżący na wszystkich trzech dwusiecznych jest równoodległy od wszystkich trzech boków i musi leżeć wewnątrz trójkąta. Ta wspólna odległość to dokładnie promień okręgu wpisanego, a okrąg o środku w [[I]] i promieniu [[r]] dotyka każdego boku raz: to okrąg wpisany." },
          { "kind": "h3", "text": "Czy promień okręgu wpisanego to to samo co promień okręgu opisanego?" },
          { "kind": "p", "text": "Nie. Promień okręgu wpisanego [[r]] to promień okręgu wewnątrz trójkąta, natomiast promień okręgu opisanego [[R]] to promień okręgu przechodzącego przez wszystkie trzy wierzchołki, czyli okręgu opisanego. Dla trójkąta prostokątnego środek okręgu opisanego leży w środku przeciwprostokątnej, więc [[[\\boxed{R=\\frac{c}{2}}]]]. Te dwa promienie opisują zupełnie różne okręgi: jeden jest wpisany w trójkąt, drugi jest opisany na nim. Mylenie ich to jeden z najczęstszych błędów w tym temacie, więc trzymaj je osobno: [[r]] dla wewnątrz, [[R]] dla zewnątrz." }
        ],
        "imgAlt": "Trójkąt ABC z okręgiem wpisanym, środkiem I, promieniem r, punktami styczności i okręgiem opisanym",
        "figcaption": "Trójkąt ABC i jego okrąg wpisany: środek I, promień r = ID, przy czym ID jest prostopadłe do każdego boku, oraz okrąg opisany dla porównania."
      },
      "sec-semiperimeter": {
        "h2": "Czym jest półobwód trójkąta?",
        "blocks": [
          { "kind": "h3", "text": "Definicja półobwodu" },
          { "kind": "p", "text": "Półobwód to połowa całkowitego obwodu trójkąta: [[[\\boxed{s=\\frac{a+b+c}{2}}]]], gdzie [[a]] i [[b]] to przyprostokątne, a [[c]] to przeciwprostokątna. To długość jak każdy bok i zasługuje na miejsce we wzorze na pole, bo łączy wszystkie trzy boki w jedną liczbę." },
          { "kind": "h3", "text": "Różnica między obwodem a półobwodem" },
          { "kind": "p", "text": "Obwód to pełna odległość wokół trójkąta, [[P=a+b+c]], natomiast półobwód to jej połowa, [[s=\\frac{P}{2}]]. Dla trójkąta 3-4-5: [[P=3+4+5=12]] i [[s=\\frac{12}{2}=6]]. Półobwód nie jest długością granicy; to jej połowa, a wstawienie pełnego obwodu do [[K=rs]] podwoiłoby prawdziwe pole." },
          { "kind": "h3", "text": "Dlaczego we wzorze na pole używa się półobwodu?" },
          { "kind": "p", "text": "Połączenie środka okręgu wpisanego z trzema wierzchołkami dzieli trójkąt na trzy mniejsze trójkąty, każdy o prostopadłej wysokości [[r]]. Ich podstawy to [[a]], [[b]] i [[c]], więc ich łączne pole wynosi [[K=\\frac12r(a+b+c)]]. Ponieważ [[s=\\frac{a+b+c}{2}]], półobwód jest już wbudowany w [[s]], co daje [[K=rs]]. Następna sekcja wyprowadza to w pełni." },
          { "kind": "h3", "text": "Czy półobwód może być mniejszy od jednego boku?" },
          { "kind": "p", "text": "Nie. Nierówność trójkąta mówi, że dla każdego trójkąta [[a+b>c]], więc [[s=\\frac{a+b+c}{2}>c]]. Ten sam argument stosuje się do dwóch pozostałych boków: [[s>a]] i [[s>b]]. Półobwód jest zawsze większy od każdego pojedynczego boku. To szybka kontrola sensowności danych: jeśli deklarowany półobwód jest mniejszy od któregokolwiek boku, liczby nie mogą opisywać prawdziwego trójkąta." }
        ]
      },
      "sec-formula": {
        "h2": "Dlaczego pole trójkąta równa się promieniowi okręgu wpisanego razy półobwód?",
        "blocks": [
          { "kind": "p", "text": "Zacznij od standardowej reguły pola trójkąta: [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Poprowadzenie odcinków od środka okręgu wpisanego [[I]] do trzech wierzchołków dzieli pierwotny trójkąt na trzy mniejsze trójkąty. Każdy mniejszy trójkąt ma podstawę równą jednemu bokowi pierwotnego trójkąta i prostopadłą wysokość równą promieniowi okręgu wpisanego [[r]], ponieważ promień spotyka każdy bok pod kątem prostym. Działa to dla każdego niezdegenerowanego trójkąta; w tym kalkulatorze trójkąt jest prostokątny, ale sama tożsamość pola jest w pełni ogólna." },
          { "kind": "h3", "text": "Pole pierwszego mniejszego trójkąta" },
          { "kind": "p", "text": "Mniejszy trójkąt stojący na boku [[a]] ma podstawę [[a]] i wysokość [[r]]: [[[\\boxed{K_1=\\frac{ar}{2}}]]]." },
          { "kind": "h3", "text": "Pole drugiego mniejszego trójkąta" },
          { "kind": "p", "text": "Mniejszy trójkąt stojący na boku [[b]] ma podstawę [[b]] i wysokość [[r]]: [[[\\boxed{K_2=\\frac{br}{2}}]]]." },
          { "kind": "h3", "text": "Pole trzeciego mniejszego trójkąta" },
          { "kind": "p", "text": "Mniejszy trójkąt stojący na boku [[c]] ma podstawę [[c]] i wysokość [[r]]: [[[\\boxed{K_3=\\frac{cr}{2}}]]]." },
          { "kind": "h3", "text": "Dodaj trzy pola" },
          { "kind": "p", "text": "Trzy mniejsze trójkąty wypełniają pierwotny bez nakładania się, więc [[K=K_1+K_2+K_3]]. Po podstawieniu: [[K=\\frac{ar}{2}+\\frac{br}{2}+\\frac{cr}{2}]]. Wyciągnij [[\\frac{r}{2}]] przed nawias: [[K=\\frac{r(a+b+c)}{2}]]. Przypomnij [[s=\\frac{a+b+c}{2}]], zatem [[[\\boxed{K=r\\times s}]]]. Każde przejście jest uzasadnione: wypełnienie jest dokładne, wysokość [[r]] jest wspólna, a półobwód pochłania dzielenie przez dwa." },
          { "kind": "h3", "text": "Dlaczego ten wzór nie wymaga kolejnego dzielenia przez dwa?" },
          { "kind": "p", "text": "Bo jedna druga jest już złożona w półobwodzie. Trzy połowy łączą się w [[\\frac{r(a+b+c)}{2}]], a [[s]] to dokładnie połowa obwodu, więc podzielenie przez dwa po raz drugi dałoby ćwiartkę poprawnego wyrażenia. Oblicz [[r\\times s]] i zatrzymaj się; dalsze dzielenie na pół to błąd, nie poprawka." }
        ],
        "imgAlt": "Okrąg wpisany dzieli trójkąt ABC na trzy mniejsze trójkąty o wysokości r i podstawach a, b, c",
        "figcaption": "Trzy mniejsze trójkąty o wspólnej wysokości r i podstawach a, b, c: ich pola ar/2 + br/2 + cr/2 sumują się do rs."
      },
      "sec-inradius": {
        "h2": "Jak obliczyć promień okręgu wpisanego z trzech długości boków",
        "blocks": [
          { "kind": "p", "text": "Gdy znane są trzy boki, promień okręgu wpisanego w trójkąt prostokątny podlega skrótowi, który w ogóle omija rysowanie okręgu wpisanego: [[[\\boxed{r=\\frac{a+b-c}{2}}]]], gdzie [[a]] i [[b]] to prostopadłe przyprostokątne, a [[c]] to przeciwprostokątna. To jeden z najbardziej poręcznych faktów geometrii trójkąta prostokątnego." },
          { "kind": "h3", "text": "Wyprowadzenie wzoru na promień okręgu wpisanego w trójkąt prostokątny" },
          { "kind": "p", "text": "Wyprowadzenie korzysta z twierdzenia o równych odcinkach stycznych: z jednego wspólnego punktu zewnętrznego dwa odcinki styczne poprowadzone do okręgu mają równe długości. Niech długości stycznych z trzech wierzchołków będą [[x]] z wierzchołka [[A]], [[y]] z wierzchołka [[B]] i [[z]] z wierzchołka [[C]]. Przy kącie prostym [[C]] dwie styczne okręgu wpisanego biegną wzdłuż prostopadłych przyprostokątnych i każda ma długość [[r]], tworząc z dwoma promieniami mały kwadrat, więc [[z=r]]. Boki wynoszą wtedy [[a=y+r]], [[b=x+r]] i [[c=x+y]]. Odejmij: [[a+b-c=(y+r)+(x+r)-(x+y)]], więc [[a+b-c=2r]], co daje [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Kwadrat przy kącie prostym to powód, dla którego ten skrót należy wyłącznie do trójkątów prostokątnych." },
          { "kind": "h3", "text": "Przykład z trójkątem 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]]: [[r=\\frac{3+4-5}{2}]], [[[\\boxed{r=1}]]]. Promień okręgu wpisanego wynosi dokładnie 1, bez żadnej konstrukcji." },
          { "kind": "h3", "text": "Przykład z trójkątem 5-12-13" },
          { "kind": "p", "text": "Dane [[a=5]], [[b=12]], [[c=13]]: [[r=\\frac{5+12-13}{2}]], [[[\\boxed{r=2}]]]. Znowu promień okręgu wpisanego wynika bezpośrednio z długości boków." },
          { "kind": "h3", "text": "Jednoczesne znajdowanie półobwodu" },
          { "kind": "p", "text": "Przy tych samych trzech bokach oblicz [[s=\\frac{a+b+c}{2}]] obok [[r]]. Dla trójkąta 5-12-13: [[s=\\frac{5+12+13}{2}=15]], a potem [[K=rs=2\\times15=30]]. Jedno przejście po trzech bokach dostarcza obu danych wejściowych kalkulatora i samego pola." },
          { "kind": "h3", "text": "Kiedy stosować ten skrót?" },
          { "kind": "p", "text": "Stosuj go, gdy znane są trzy boki, ale okrąg wpisany nie został zmierzony ani narysowany: zadania z podręcznika, wymiary konstrukcyjne i dane pomiarowe zwykle podają długości boków, a nie promień okręgu wpisanego. Skrót zamienia je na [[r]] w jednej linijce. Gdy mierzoną wielkością jest promień okręgu wpisanego, wpisz go bezpośrednio i pomiń przeliczenie." }
        ],
        "imgAlt": "Trójkąt 3-4-5 pokazujący równe odcinki styczne i skrót na promień okręgu wpisanego r = (a+b-c)/2 = 1",
        "figcaption": "Odcinki styczne na trójkącie 3-4-5: równe długości z każdego wierzchołka dają r = (3 + 4 - 5)/2 = 1."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Kalkulator potrzebuje dokładnie dwóch danych wejściowych. Poniższy opis podąża za kolejnością na ekranie, od znanych pomiarów do zweryfikowanego wyniku." }
        ],
        "steps": [
          "<strong>Określ promień okręgu wpisanego r.</strong> Promień okręgu wpisanego, czyli prostopadła odległość od środka okręgu wpisanego do dowolnego boku.",
          "<strong>Określ półobwód s.</strong> Połowę całkowitego obwodu trójkąta.",
          "<strong>Jeśli znane są trzy boki, oblicz r ze wzoru [[r=\\frac{a+b-c}{2}]].</strong> Tutaj [[a]] i [[b]] to przyprostokątne, a [[c]] to przeciwprostokątna.",
          "<strong>Oblicz s ze wzoru [[s=\\frac{a+b+c}{2}]].</strong>",
          "<strong>Wpisz promień okręgu wpisanego w pierwsze pole.</strong>",
          "<strong>Wpisz półobwód w drugie pole.</strong>",
          "<strong>Wybierz zgodne jednostki długości.</strong> Oba pomiary muszą używać tej samej jednostki.",
          "<strong>Sprawdź, czy obie wartości są dodatnie.</strong> Długości zerowe lub ujemne nie opisują żadnego trójkąta.",
          "<strong>Kliknij Calculate Area.</strong>",
          "<strong>Przejrzyj wynik.</strong> Pole pojawia się w jednostkach kwadratowych odpowiadających danym wejściowym.",
          "<strong>Upewnij się, że odpowiedź jest wyrażona w jednostkach kwadratowych.</strong> Metry dają metry kwadratowe; centymetry dają centymetry kwadratowe.",
          "<strong>Przejrzyj rozwiązanie matematyczne.</strong> Pokazuje podstawienie i obliczenia.",
          "<strong>Przy rozpoczynaniu nowego obliczenia użyj Reset.</strong> Czyści oba pola, dzięki czemu następne obliczenie zaczyna się od czystej karty."
        ],
        "closingParagraphs": [
          "Kalkulator nie pyta o trzy długości boków: promień okręgu wpisanego i półobwód zawierają już wszystko, czego potrzebuje wzór [[K=rs]]."
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku obliczania pola z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Cztery rozwiązane przykłady budują metodę od znanego w górę. Każdy oblicza półobwód i promień okręgu wpisanego z trzech boków, stosuje [[K=rs]] z pokazanym każdym podstawieniem i weryfikuje wzorem z przyprostokątnymi." },
          { "kind": "h3", "text": "Przykład 1: Trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]]. Krok 1: półobwód, [[s=\\frac{3+4+5}{2}=6]]. Krok 2: promień okręgu wpisanego, [[r=\\frac{3+4-5}{2}=1]]. Krok 3: zastosuj wzór, [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Weryfikacja: [[K=\\frac{3\\times4}{2}=6]]." },
          { "kind": "h3", "text": "Przykład 2: Trójkąt prostokątny 6-8-10" },
          { "kind": "p", "text": "Dane [[a=6]], [[b=8]], [[c=10]]. Wtedy [[s=\\frac{6+8+10}{2}=12]], [[r=\\frac{6+8-10}{2}=2]] i [[K=2\\times12]], [[[\\boxed{K=24\\text{ square units}}]]]. Weryfikacja: [[K=\\frac{6\\times8}{2}=24]]." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane [[a=5]], [[b=12]], [[c=13]]. Wtedy [[s=\\frac{5+12+13}{2}=15]], [[r=\\frac{5+12-13}{2}=2]] i [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Weryfikacja: [[K=\\frac{5\\times12}{2}=30]]." },
          { "kind": "h3", "text": "Przykład 4: Trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dane [[a=8]], [[b=15]], [[c=17]]. Wtedy [[s=\\frac{8+15+17}{2}=20]], [[r=\\frac{8+15-17}{2}=3]] i [[K=3\\times20]], [[[\\boxed{K=60\\text{ square units}}]]]. Weryfikacja: [[K=\\frac{8\\times15}{2}=60]]." },
          { "kind": "h3", "text": "Porównanie przykładów podstawowych" }
        ],
        "table": {
          "headers": ["Trójkąt", "Półobwód s", "Promień okręgu wpisanego r", "Pole K = rs"],
          "rows": [
            ["3-4-5", "6", "1", "6"],
            ["6-8-10", "12", "2", "24"],
            ["5-12-13", "15", "2", "30"],
            ["8-15-17", "20", "3", "60"]
          ]
        }
      },
      "sec-applications": {
        "h2": "Zastosowania w życiu codziennym pola trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Dwanaście rozwiązanych sytuacji pokazuje wzór w różnych skalach i jednostkach. Każda nazywa trójkątny obiekt, podaje trzy pomiary boków, oblicza promień okręgu wpisanego i półobwód, stosuje główny wzór krok po kroku i podaje stojące za nim założenie. Każdy przykład to trójkątny panel, przekrój, profil lub uproszczony model geometryczny; gdy prawdziwy obiekt jest zakrzywiony lub nieregularny, obliczenie obejmuje tylko zamodelowany trójkąt." },
          { "kind": "h3", "text": "Przykład 1: Trójkątne okno szklane" },
          { "kind": "p", "text": "Trójkątne prostokątne okno szklane ma [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Promień okręgu wpisanego: [[r=\\frac{3+4-5}{2}=1\\text{ m}]]. Półobwód: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]. Pole: [[K=1\\times6]], [[[\\boxed{K=6\\text{ m}^2}]]]. To płaskie pole szkła przed uwzględnieniem wymiarów ramy." },
          { "kind": "h3", "text": "Przykład 2: Stalowy wspornik" },
          { "kind": "p", "text": "Trójkątna stalowa płyta wspornika ma [[a=5\\text{ cm}]], [[b=12\\text{ cm}]], [[c=13\\text{ cm}]]. Wtedy [[r=2\\text{ cm}]], [[s=15\\text{ cm}]], [[[\\boxed{K=30\\text{ cm}^2}]]]. Samo pole nie określa nośności płyty." },
          { "kind": "h3", "text": "Przykład 3: Trójkątny profil boczny rampy" },
          { "kind": "p", "text": "Uproszczony trójkątny prostokątny profil rampy ma [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Wtedy [[r=2\\text{ m}]], [[s=12\\text{ m}]], [[[\\boxed{K=24\\text{ m}^2}]]]. Opisuje to profil boczny, a nie nachyloną powierzchnię do chodzenia." },
          { "kind": "h3", "text": "Przykład 4: Trójkątny panel wspornika dachu" },
          { "kind": "p", "text": "Trójkątny prostokątny panel wspornika dachu ma [[a=8\\text{ ft}]], [[b=15\\text{ ft}]], [[c=17\\text{ ft}]]. Wtedy [[r=3\\text{ ft}]], [[s=20\\text{ ft}]], [[[\\boxed{K=60\\text{ ft}^2}]]]. Wynik to szacunkowe płaskie pole trójkątnego panelu." },
          { "kind": "h3", "text": "Przykład 5: Zmierzona działka ogrodowa" },
          { "kind": "p", "text": "Trójkątna prostokątna działka ogrodowa ma [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Wtedy [[r=3\\text{ m}]], [[s=28\\text{ m}]], [[[\\boxed{K=84\\text{ m}^2}]]]. Wzór daje pole trójkątnej działki bezpośrednio z trzech pomiarów jej granic." },
          { "kind": "h3", "text": "Przykład 6: Trójkątny żagiel z tkaniny" },
          { "kind": "p", "text": "Trójkątny prostokątny panel z tkaniny ma [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Wtedy [[r=3\\text{ ft}]], [[s=18\\text{ ft}]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Szwy i zapasy tkaniny są wyłączone z tej płaskiej liczby." },
          { "kind": "h3", "text": "Przykład 7: Duża trójkątna działka gruntu" },
          { "kind": "p", "text": "Zmierzona działka gruntu zamodelowana jako trójkąt prostokątny ma [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Wtedy [[r=4\\text{ m}]], [[s=45\\text{ m}]], [[[\\boxed{K=180\\text{ m}^2}]]]. Uproszczony model trójkąta prostokątnego zakłada proste granice na płaskim terenie." },
          { "kind": "h3", "text": "Przykład 8: Szablon do cięcia sklejki" },
          { "kind": "p", "text": "Trójkątny szablon ze sklejki ma [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Wtedy [[r=4\\text{ cm}]], [[s=24\\text{ cm}]], [[[\\boxed{K=96\\text{ cm}^2}]]]. Pole pomaga oszacować zapotrzebowanie na materiał przed odpadami z cięcia." },
          { "kind": "h3", "text": "Przykład 9: Duży trójkątny panel reklamowy" },
          { "kind": "p", "text": "Trójkątny prostokątny panel reklamowy ma [[a=20\\text{ m}]], [[b=21\\text{ m}]], [[c=29\\text{ m}]]. Wtedy [[r=6\\text{ m}]], [[s=35\\text{ m}]], [[[\\boxed{K=210\\text{ m}^2}]]]. Wynik opisuje płaską trójkątną powierzchnię zwróconą ku widzowi." },
          { "kind": "h3", "text": "Przykład 10: Trójkątny wspornik markizy" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja wspornika markizy ma [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Wtedy [[r=5\\text{ ft}]], [[s=30\\text{ ft}]], [[[\\boxed{K=150\\text{ ft}^2}]]]. To obliczone pole zamodelowanej trójkątnej sekcji." },
          { "kind": "h3", "text": "Przykład 11: Przemysłowy panel wspornika" },
          { "kind": "p", "text": "Trójkątny prostokątny przemysłowy panel wspornika ma [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Wtedy [[r=5\\text{ m}]], [[s=66\\text{ m}]], [[[\\boxed{K=330\\text{ m}^2}]]]. To obliczenie geometryczne opisuje płaskie pole panelu, a nie jego wytrzymałość." },
          { "kind": "h3", "text": "Przykład 12: Duża trójkątna sekcja szczytu dachu" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja szczytu dachu ma [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Wtedy [[r=6\\text{ ft}]], [[s=91\\text{ ft}]], [[[\\boxed{K=546\\text{ ft}^2}]]]. Obliczone pole pomaga oszacować płaskie trójkątne pokrycie." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Zastosowanie", "Bok a", "Bok b", "Przeciwprostokątna c", "Promień okręgu wpisanego r", "Półobwód s", "Pole"],
          "rows": [
            ["Szklane okno", "3", "4", "5", "1", "6", "6 m²"],
            ["Stalowy wspornik", "5", "12", "13", "2", "15", "30 cm²"],
            ["Profil rampy", "6", "8", "10", "2", "12", "24 m²"],
            ["Panel dachu", "8", "15", "17", "3", "20", "60 ft²"],
            ["Działka ogrodowa", "7", "24", "25", "3", "28", "84 m²"],
            ["Żagiel z tkaniny", "9", "12", "15", "3", "18", "54 ft²"],
            ["Działka gruntu", "9", "40", "41", "4", "45", "180 m²"],
            ["Szablon ze sklejki", "12", "16", "20", "4", "24", "96 cm²"],
            ["Panel reklamowy", "20", "21", "29", "6", "35", "210 m²"],
            ["Wspornik markizy", "15", "20", "25", "5", "30", "150 ft²"],
            ["Panel przemysłowy", "11", "60", "61", "5", "66", "330 m²"],
            ["Sekcja szczytu dachu", "13", "84", "85", "6", "91", "546 ft²"]
          ]
        }
      },
      "sec-relationship": {
        "h2": "Jak promień okręgu wpisanego i półobwód wiążą się z trzema bokami?",
        "blocks": [
          { "kind": "p", "text": "W trójkącie prostokątnym promień okręgu wpisanego i półobwód nie są niezależne od boków; są z nich zbudowane. Wychodząc od [[r=\\frac{a+b-c}{2}]] i [[s=\\frac{a+b+c}{2}]], dodaj i odejmij oba wyrażenia. Dodawanie daje [[[\\boxed{s+r=a+b}]]], a odejmowanie daje [[[\\boxed{s-r=c}]]]. Te dwie tożsamości są specyficzne dla trójkątów prostokątnych przy podanych oznaczeniach i zamieniają dwa dane wejściowe kalkulatora w zaskakująco dużo informacji o samym trójkącie." },
          { "kind": "h3", "text": "Odtwarzanie przeciwprostokątnej" },
          { "kind": "p", "text": "Z [[s-r=c]] przeciwprostokątną można odtworzyć, gdy znane są [[r]] i [[s]]. Dla [[r=2]] i [[s=12]]: [[c=12-2]], [[[\\boxed{c=10}]]]. Dwa dane wejściowe ujawniają najdłuższy bok bez dalszych pomiarów." },
          { "kind": "h3", "text": "Odtwarzanie sumy dwóch przyprostokątnych" },
          { "kind": "p", "text": "Z [[a+b=s+r]] suma przyprostokątnych wynika bezpośrednio. Dla [[r=2]] i [[s=12]]: [[a+b=14]]. Sama suma nie identyfikuje każdej przyprostokątnej z osobna; do pojedynczych długości potrzebna jest jeszcze jedna informacja." },
          { "kind": "h3", "text": "Odtwarzanie iloczynu dwóch przyprostokątnych" },
          { "kind": "p", "text": "Ponieważ [[K=\\frac{ab}{2}]] i [[K=rs]], wynika stąd [[[\\boxed{ab=2rs}]]]. Dla [[r=2]] i [[s=12]]: [[ab=48]]. Przy [[a+b=14]] i [[ab=48]] dwie przyprostokątne to 6 i 8: [[6+8=14]] i [[6\\times8=48]]. Obie przyprostokątne można zamieniać bez zmiany pola trójkąta." },
          { "kind": "h3", "text": "Odtwarzanie obu długości przyprostokątnych" },
          { "kind": "p", "text": "Suma i iloczyn czynią [[a]] i [[b]] dwoma pierwiastkami równania [[t^2-(s+r)t+2rs=0]], dając [[[\\boxed{a,b=\\frac{(s+r)\\pm\\sqrt{(s+r)^2-8rs}}{2}}]]]. Dwa znaki odpowiadają dwóm możliwym przypisaniom przyprostokątnych. Przy [[r=2]] i [[s=12]]: [[a,b=\\frac{14\\pm\\sqrt{196-192}}{2}]], więc [[a,b=\\frac{14\\pm2}{2}]], przyprostokątne 6 i 8. To zaawansowana dedukcja matematyczna, a nie dodatkowa funkcja kalkulatora." }
        ]
      },
      "sec-valid": {
        "h2": "Jak sprawdzić, czy promień okręgu wpisanego i półobwód tworzą poprawny trójkąt prostokątny",
        "blocks": [
          { "kind": "p", "text": "Kalkulator mnoży dwa dane wejściowe, ale nie każda dodatnia para długości opisuje trójkąt prostokątny. Poniższe kontrole oddzielają arytmetykę od geometrii." },
          { "kind": "h3", "text": "Podstawowe warunki wejściowe" },
          { "kind": "p", "text": "Dane wejściowe muszą spełniać [[r>0]] i [[s>0]]. Dla trójkąta prostokątnego wymagane jest też [[s>r]], ponieważ [[c=s-r]], a przeciwprostokątna musi być dodatnia. Te trzy warunki są konieczne, ale niewystarczające." },
          { "kind": "h3", "text": "Zaawansowana kontrola spójności trójkąta prostokątnego" },
          { "kind": "p", "text": "Z [[a+b=s+r]] i [[ab=2rs]] dwie przyprostokątne są rzeczywiste dokładnie wtedy, gdy wyróżnik [[\\Delta=(s+r)^2-8rs]] jest nieujemny. Po uproszczeniu: [[[\\boxed{\\Delta=s^2-6rs+r^2}]]]. Dla rzeczywistych długości przyprostokątnych [[\\Delta\\geq0]]. Ponieważ [[s]] musi przewyższać [[r]], równoważny warunek trójkąta prostokątnego to [[[\\boxed{\\frac{s}{r}\\geq3+2\\sqrt2}]]] albo [[[\\boxed{\\frac{r}{s}\\leq3-2\\sqrt2}]]]. Równość zachodzi dla trójkąta prostokątnego równoramiennego, najciaśniejszego możliwego dopasowania. To zaawansowany matematyczny test zgodności, wyraźnie oddzielony od podstawowych kontroli powyżej." },
          { "kind": "h3", "text": "Poprawny przykład" },
          { "kind": "p", "text": "Dane [[r=2]] i [[s=12]], stosunek wynosi [[\\frac{s}{r}=6]]. Ponieważ [[6>3+2\\sqrt2]] (około 5,83), wartości mogą opisywać poprawny trójkąt prostokątny, a odpowiadające boki to 6, 8 i 10." },
          { "kind": "h3", "text": "Przykład niezgodny" },
          { "kind": "p", "text": "Dane [[r=2]] i [[s=10]], stosunek wynosi [[\\frac{s}{r}=5]], poniżej wymaganego progu około 5,83. Ta para nie może opisywać trójkąta prostokątnego, choć pomnożenie danych daje wynik liczbowy. Obliczenie [[rs]] i potwierdzenie, że pomiary opisują trójkąt prostokątny, to dwa różne zadania. Ten przewodnik nie twierdzi, że kalkulator wykonuje tę kontrolę automatycznie." }
        ]
      },
      "sec-heron": {
        "h2": "Jak wzór z promieniem okręgu wpisanego wypada wobec wzoru Herona?",
        "blocks": [
          { "kind": "p", "text": "Wzór Herona oblicza pole ze wszystkich trzech boków: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Używa trzech długości boków i półobwodu, działa dla każdego niezdegenerowanego trójkąta i nie potrzebuje promienia okręgu wpisanego jako osobnego wejścia. Porównaj z [[[\\boxed{K=rs}]]]. Te dwa to bliscy krewni: półobwód [[s]] pojawia się w obu, a udowodnienie ich zgodności to jeden z najczystszych sposobów, by zobaczyć, że [[K=rs]] jest poprawne." },
          { "kind": "h3", "text": "Kiedy wzór z promieniem okręgu wpisanego jest łatwiejszy?" },
          { "kind": "p", "text": "[[K=rs]] jest szczególnie wygodne, gdy promień okręgu wpisanego i półobwód są już znane: jedno mnożenie, bez pierwiastków kwadratowych, bez rozkładania różnic boków. Gdy okrąg wpisany został zmierzony albo gdy wcześniejsze kroki dały już [[r]] i [[s]], to najkrótsza droga do pola." },
          { "kind": "h3", "text": "Kiedy wzór Herona jest bardziej przydatny?" },
          { "kind": "p", "text": "Wzór Herona to lepszy wybór, gdy znane są trzy długości boków, ale promień okręgu wpisanego nie został obliczony. Sięga po pole bezpośrednio z [[a]], [[b]] i [[c]], bez objazdu przez [[r]]. Żaden wzór nie jest uniwersalnie dokładniejszy; oba są ścisłe przy spójnych danych i rozjeżdżają się tylko wtedy, gdy dane są niespójne." },
          { "kind": "h3", "text": "Weryfikacja obu wzorów na trójkącie 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]], przy [[s=6]] i [[r=1]]. Z promieniem okręgu wpisanego: [[K=1\\times6=6]]. Ze wzorem Herona: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], więc [[K=\\sqrt{6\\times3\\times2\\times1}]], [[[\\boxed{K=6}]]]. Wyniki są zgodne, bo oba wzory mierzą ten sam obszar; to dwa wyrażenia jednego pola, a zgodność między nimi to mocny znak, że obliczenia są poprawne." }
        ]
      },
      "sec-legs": {
        "h2": "Dlaczego wzór z promieniem okręgu wpisanego daje to samo pole co wzór z przyprostokątnymi?",
        "blocks": [
          { "kind": "p", "text": "Dwa wzory roszczą sobie to samo pole: [[K=\\frac{ab}{2}]] i [[K=rs]]. Zapisanie [[r]] i [[s]] przez boki daje [[rs=\\frac{a+b-c}{2}\\times\\frac{a+b+c}{2}]], więc [[rs=\\frac{(a+b-c)(a+b+c)}{4}]]. Licznik to różnica kwadratów: [[rs=\\frac{(a+b)^2-c^2}{4}]]. Zastosuj twierdzenie Pitagorasa [[c^2=a^2+b^2]]: [[rs=\\frac{a^2+2ab+b^2-a^2-b^2}{4}]], zatem [[[\\boxed{rs=\\frac{ab}{2}}]]]. Oba wzory są identyczne na każdym trójkącie prostokątnym; przy spójnych danych nie mogą się rozjechać." },
          { "kind": "p", "text": "Sprawdź na trójkącie 3-4-5: [[r=1]], [[s=6]], [[rs=6]] oraz [[\\frac{ab}{2}=\\frac{3\\times4}{2}=6]]. Na trójkącie 6-8-10: [[r=2]], [[s=12]], [[rs=24]] oraz [[\\frac{ab}{2}=\\frac{6\\times8}{2}=24]]. Znany wzór z przyprostokątnymi i wzór z promieniem okręgu wpisanego to ta sama wielkość w innym stroju." }
        ]
      },
      "sec-mistakes": {
        "h2": "Częste błędy przy obliczaniu pola z promienia okręgu wpisanego i półobwodu",
        "blocks": [
          { "kind": "p", "text": "Większość błędnych odpowiedzi wynika z błędnie oznaczonych danych, a nie ze złej arytmetyki. Poniższe piętnaście błędów obejmuje niemal wszystkie." },
          { "kind": "h3", "text": "1. Mylenie promienia okręgu wpisanego z promieniem okręgu opisanego" },
          { "kind": "p", "text": "Promień okręgu wpisanego to okrąg wewnątrz; promień okręgu opisanego to okrąg wokół. W trójkącie 6-8-10 [[r=2]], ale [[R=\\frac{c}{2}=5]]. Użycie 5 zamiast [[r]] daje [[K=5\\times12=60]] zamiast 24. Poprawka: zapytaj, czy okrąg leży wewnątrz trójkąta, czy przechodzi przez jego wierzchołki." },
          { "kind": "h3", "text": "2. Użycie pełnego obwodu zamiast półobwodu" },
          { "kind": "p", "text": "Wzór potrzebuje [[s]], połowy obwodu. Przy [[r=2]] i pełnym obwodzie 24 zamiast [[s=12]] wynik to [[K=2\\times24=48]], dwa razy więcej niż poprawne 24. Poprawka: podziel obwód na pół przed mnożeniem." },
          { "kind": "h3", "text": "3. Ponowne dzielenie końcowej odpowiedzi przez dwa" },
          { "kind": "p", "text": "Dzielenie na pół jest już w [[s]]. Podzielenie [[2\\times12=24]] jeszcze raz przez dwa daje 12, połowę prawdziwego pola. Poprawka: oblicz [[rs]] i zatrzymaj się." },
          { "kind": "h3", "text": "4. Mylenie środka okręgu wpisanego ze środkiem okręgu opisanego" },
          { "kind": "p", "text": "Środek okręgu wpisanego to miejsce spotkania dwusiecznych kątów; środek okręgu opisanego to miejsce spotkania symetralnych boków, a dla trójkąta prostokątnego leży w środku przeciwprostokątnej. To różne punkty. Poprawka: prześledź właściwą konstrukcję dla potrzebnego okręgu." },
          { "kind": "h3", "text": "5. Traktowanie promienia okręgu wpisanego jak boku trójkąta" },
          { "kind": "p", "text": "Promień okręgu wpisanego to odległość wewnątrz trójkąta, nie jeden z jego trzech boków. Nigdy nie należy do [[a+b+c]]. Poprawka: trzymaj [[r]] z dala od każdego wyrażenia na długość boku." },
          { "kind": "h3", "text": "6. Użycie niepoprawnego wzoru na promień okręgu wpisanego w trójkąt prostokątny" },
          { "kind": "p", "text": "Skrót dla trójkąta prostokątnego to [[r=\\frac{a+b-c}{2}]], a nie wariant z błędnym znakiem czy błędnie podzielonym bokiem. Częstym potknięciem jest użycie [[r=\\frac{a+c-b}{2}]], które daje inną liczbę, chyba że trójkąt jest równoramienny. Poprawka: odejmowany bok to zawsze przeciwprostokątna [[c]]." },
          { "kind": "h3", "text": "7. Zapominanie, że c to przeciwprostokątna" },
          { "kind": "p", "text": "W skrócie [[c]] oznacza konkretnie przeciwprostokątną. Poprawka: oznacz najdłuższy bok jako [[c]] przed zastosowaniem wzoru." },
          { "kind": "h3", "text": "8. Użycie niewłaściwego boku jako przeciwprostokątnej" },
          { "kind": "p", "text": "Wybór przyprostokątnej na [[c]] psuje zarówno [[r]], jak i [[s]]. Poprawka: przeciwprostokątna to bok naprzeciw kąta prostego, zawsze najdłuższy." },
          { "kind": "h3", "text": "9. Mieszanie różnych jednostek miary" },
          { "kind": "p", "text": "Promień 20 cm przy półobwodzie 1 m nie daje sensownej liczby bez przeliczenia. Poprawka: najpierw przelicz na jedną jednostkę, potem pomnóż." },
          { "kind": "h3", "text": "10. Wpisywanie zerowych lub ujemnych długości" },
          { "kind": "p", "text": "Długości zerowe i ujemne nie opisują żadnego trójkąta. Poprawka: sprawdź, czy każda wpisana długość jest dodatnia." },
          { "kind": "h3", "text": "11. Zakładanie, że każda dodatnia para r i s opisuje trójkąt prostokątny" },
          { "kind": "p", "text": "Jak pokazano wcześniej, [[r=2]] z [[s=10]] daje liczbę 20, ale żadnego trójkąta prostokątnego. Poprawka: wykonaj kontrolę [[s/r\\geq3+2\\sqrt2]], gdy geometria ma znaczenie." },
          { "kind": "h3", "text": "12. Podawanie pola w jednostkach liniowych" },
          { "kind": "p", "text": "Pole 24 m² to nie 24 m. Poprawka: zapisz jednostkę kwadratową przy liczbie." },
          { "kind": "h3", "text": "13. Zaokrąglanie promienia okręgu wpisanego zbyt wcześnie" },
          { "kind": "p", "text": "Zaokrąglenie [[r]] przed mnożeniem przesuwa całe pole. Poprawka: zachowaj pełną precyzję w krokach pośrednich i zaokrąglaj tylko końcową odpowiedź." },
          { "kind": "h3", "text": "14. Mylenie półobwodu z sumą dwóch boków" },
          { "kind": "p", "text": "Półobwód to połowa sumy wszystkich trzech boków, nie suma dwóch. Poprawka: dodaj wszystkie trzy boki, potem podziel na pół." },
          { "kind": "h3", "text": "15. Zakładanie, że wzór działa tylko dla trójkątów prostokątnych" },
          { "kind": "p", "text": "[[K=rs]] obowiązuje dla każdego niezdegenerowanego trójkąta; tylko skrót [[r=\\frac{a+b-c}{2}]] jest specyficzny dla trójkątów prostokątnych. Poprawka: stosuj wzór na pole swobodnie, ale do promienia okręgu wpisanego w trójkąty nieprostokątne używaj ogólnego wyprowadzenia." },
          { "kind": "h3", "text": "Błędnie kontra poprawnie: konkretny przykład" },
          { "kind": "p", "text": "Weź trójkąt 6-8-10. Poprawnie: [[r=2]], [[s=12]], [[K=2\\times12=24]]. Błędne użycie pełnego obwodu: [[K=2\\times24=48]], co podwaja pole. Błędne ponowne podzielenie poprawnej odpowiedzi przez dwa: [[K=\\frac{24}{2}=12]], co ją zmniejsza o połowę. Oba błędy wynikają z niewłaściwego obchodzenia się z jedną drugą, która mieszka w [[s]]." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy pole twojego trójkąta prostokątnego jest poprawne",
        "blocks": [
          { "kind": "p", "text": "Kilka niezależnych kontroli wyłapuje typowe błędy. Trójkąt 3-4-5 pokazuje większość z nich." },
          { "kind": "h3", "text": "Metoda 1: Promień okręgu wpisanego i półobwód" },
          { "kind": "p", "text": "Przelicz [[K=rs]] z wpisanymi wartościami. Dla [[r=1]] i [[s=6]], [[K=1\\times6=6]]. Drugie przejście wyłapuje literówki." },
          { "kind": "h3", "text": "Metoda 2: Dwie prostopadłe przyprostokątne" },
          { "kind": "p", "text": "Gdy przyprostokątne są znane lub odtworzone, [[K=\\frac{ab}{2}]] musi się zgadzać. Tutaj [[\\frac{3\\times4}{2}=6]] pasuje do [[1\\times6=6]]: dwie metody, jeden trójkąt, jedna odpowiedź." },
          { "kind": "h3", "text": "Metoda 3: Twierdzenie Pitagorasa" },
          { "kind": "p", "text": "Potwierdź [[a^2+b^2=c^2]]: [[9+16=25]]. Jeśli boki go nie spełniają, identyfikacja trójkąta jest błędna." },
          { "kind": "h3", "text": "Metoda 4: Promień okręgu wpisanego w trójkąt prostokątny" },
          { "kind": "p", "text": "Potwierdź [[r=\\frac{a+b-c}{2}]]: [[\\frac{3+4-5}{2}=1]]. Niezgodność oznacza, że wpisany promień nie należy do tego trójkąta." },
          { "kind": "h3", "text": "Metoda 5: Półobwód" },
          { "kind": "p", "text": "Potwierdź [[s=\\frac{a+b+c}{2}]]: [[\\frac{3+4+5}{2}=6]]. To wyłapuje pomylenie obwodu z półobwodem." },
          { "kind": "h3", "text": "Metoda 6: Wzór Herona" },
          { "kind": "p", "text": "Potwierdź [[K=\\sqrt{s(s-a)(s-b)(s-c)}]]: [[K=\\sqrt{6\\times3\\times2\\times1}=6]]. Zgodność niezależnych wzorów to najsilniejsza dostępna kontrola." },
          { "kind": "p", "text": "Zgodność niezależnych wzorów to użyteczna kontrola matematyczna, ponieważ błąd na jednej drodze rzadko odtwarza się na innej, więc dwie zgodne odpowiedzi z różnych wzorów oznaczają, że zarówno dane, jak i obliczenia są poprawne." }
        ],
        "imgAlt": "Pole trójkąta 3-4-5 porównane trzema metodami: K = rs, K = ab/2 i wzór Herona",
        "figcaption": "Trzy metody, jedna odpowiedź: K = rs, K = ab/2 i wzór Herona dają 6 dla trójkąta 3-4-5."
      },
      "sec-units": {
        "h2": "Zrozumienie jednostek miary w obliczeniach z promieniem okręgu wpisanego i półobwodem",
        "blocks": [
          { "kind": "p", "text": "Pole jest dwuwymiarowe, więc jego jednostka to kwadrat jednostki długości. W symbolach: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]]. To samo dotyczy metrów i metrów kwadratowych, milimetrów i milimetrów kwadratowych, stóp i stóp kwadratowych, cali i cali kwadratowych. Selektory jednostek istnieją po to, by wynik mógł być poprawnie oznaczony." },
          { "kind": "h3", "text": "Dlaczego oba dane wejściowe muszą używać zgodnych jednostek" },
          { "kind": "p", "text": "Promień okręgu wpisanego i półobwód muszą być wyrażone w tej samej jednostce, zanim zastosuje się wzór. Jeśli [[r=20\\text{ cm}]] i [[s=1\\text{ m}]], najpierw przelicz: [[1\\text{ m}=100\\text{ cm}]]. Wtedy [[K=20\\times100]], [[[\\boxed{K=2,000\\text{ cm}^2}]]] lub równoważnie [[[\\boxed{K=0.2\\text{ m}^2}]]]. Mnożenie pomiarów w różnych jednostkach daje liczbę bez czystej jednostki, więc najpierw przelicz, a potem oblicz." },
          { "kind": "h3", "text": "Dlaczego należy unikać wczesnego zaokrąglania" },
          { "kind": "p", "text": "Zaokrąglone wartości [[r]] lub [[s]] mogą nieznacznie wpłynąć na końcowe pole, ponieważ promień okręgu wpisanego jest mnożony bezpośrednio w nie. Zachowaj wystarczającą precyzję w obliczeniach pośrednich i zaokrąglaj tylko końcową odpowiedź. Ten przewodnik nie rości sobie żadnych twierdzeń o wewnętrznej precyzji kalkulatora poza tym, co pokazuje jego interfejs." },
          { "kind": "h3", "text": "Pomiary dokładne kontra pomiary praktyczne" },
          { "kind": "p", "text": "Dokładne wymiary matematyczne, jak promień okręgu wpisanego 1 w trójkącie 3-4-5, zachowują się inaczej niż pomiary wykonane przyrządami fizycznymi. Niepewność przyrządu przenika do pola, więc traktuj ostatnią cyfrę jako wiarygodną tylko na tyle, na ile dane wejściowe. Zmierzony taśmą promień 2 cm może w rzeczywistości wynosić 1,9 lub 2,1, a pole niesie tę niepewność ze sobą." }
        ]
      },
      "sec-related": {
        "h2": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Różne pomiary wymagają różnych kalkulatorów." }
        ]
      },
      "sec-faq": {
        "h2": "Często zadawane pytania",
        "blocks": [
          { "kind": "p", "text": "Poniżej znajdują się odpowiedzi na najczęstsze pytania o pole z promienia okręgu wpisanego i półobwodu." }
        ]
      },
      "sec-conclusion": {
        "h2": "Dwa pomiary niosą całe pole",
        "blocks": [
          { "kind": "p", "text": "Promień okręgu wpisanego i półobwód wyglądają na skromne dane wejściowe, ale razem kodują pełny zasięg trójkąta. Wyprowadzenie przez trzy mniejsze trójkąty pokazuje, dlaczego iloczyn jest ścisły, argument o odcinkach stycznych pokazuje, skąd bierze się skrót dla trójkąta prostokątnego, a porównania ze wzorem z przyprostokątnymi i wzorem Herona pokazują, że wynik zawsze zgadza się z resztą geometrii." },
          { "kind": "p", "text": "Nawyk pracy jest prosty: potwierdź, czym naprawdę są r i s, trzymaj jednostki spójne i zweryfikuj odpowiedź niezależnym wzorem. Gdy te nawyki są przestrzegane, K = rs to jedno z najbardziej niezawodnych obliczeń pola w geometrii trójkąta." }
        ]
      }
    }
  }
};
