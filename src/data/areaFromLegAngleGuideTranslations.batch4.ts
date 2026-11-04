// areaFromLegAngleGuideTranslations.batch4.ts: Right Triangle Area From
// Leg and Angle Guide (Page 21 of 45) translations for Korean (ko),
// Malay (ms), and Polish (pl).
export const AREA_FROM_LEG_ANGLE_TRANSLATIONS_BATCH4 = {
  "ko": {
    "faqs": [
      {
        "question": "한 변과 한 각도를 이용한 넓이 공식은 무엇인가요?",
        "answer": "K = bc sin(A) / 2이며, 여기서 b는 각 A에 인접한 변, c는 빗변, A는 그 사이의 예각입니다. 예를 들어 b = 4, c = 5, A = 36.87°이면 K = (4 × 5 × 0.6) / 2 = 6 제곱 단위가 됩니다. 각도는 도(°) 단위로 입력해야 하며, 두 변은 같은 길이 단위를 사용해야 합니다."
      },
      {
        "question": "공식에 사인이 쓰이는 이유는 무엇인가요?",
        "answer": "사인은 빗변으로부터 빠진 수직 변을 복원합니다. sin(A) = a/c이므로 양변에 c를 곱하면 a = c sin(A)가 됩니다. 표준 넓이 규칙에는 두 변이 모두 필요하므로(K = ab/2), a 자리에 사인 식을 대입하면 K = bc sin(A)/2가 나옵니다. 사인은 측정된 빗변과 측정되지 않은 높이 사이의 다리 역할을 합니다."
      },
      {
        "question": "각 A에 인접한 변은 어느 쪽인가요?",
        "answer": "변 b가 각 A에 인접합니다. 각 A를 이루는 두 변 중 하나이며, 다른 하나는 빗변 c입니다. 변 a는 각 A의 대변으로, 삼각형 반대편에 있습니다. 기준을 각 B로 바꾸면 라벨이 뒤바뀝니다. b가 대변이 되고 a가 인접변이 됩니다."
      },
      {
        "question": "빠진 변을 모르는데도 넓이를 구할 수 있나요?",
        "answer": "네, 바로 그것이 이 계산기의 핵심입니다. 각 A의 사인은 빠진 변과 빗변의 비율을 담고 있으므로, c sin(A)가 변 a를 직접 재지 않고도 복원합니다. b, c, A를 입력하면 공식이 나머지를 처리합니다. 세 번째 변을 별도 입력으로 넣을 필요가 전혀 없습니다."
      },
      {
        "question": "각 A와 각 B의 차이는 무엇인가요?",
        "answer": "둘 다 직각삼각형의 예각이며, A + B = 90°입니다. 각 A는 변 b와 빗변 c 사이에 있고, 각 B는 변 a와 빗변 c 사이에 있습니다. 공식 K = bc sin(A)/2는 반드시 각 A를 요구합니다. 변 b, c와 함께 각 B를 쓰면 틀린 답이 나옵니다. 각 B는 변 a, c와 짝을 이룹니다."
      },
      {
        "question": "계산기는 도(°)를 쓰나요, 라디안을 쓰나요?",
        "answer": "도(°)를 씁니다. 라디안 값을 입력하면 사인값이 완전히 달라져 넓이가 틀어집니다. 먼저 라디안을 도(°)로 변환하세요. 도(°) = 라디안 × 180/π이며, 예를 들어 π/6 라디안은 30°와 같습니다. 계산 전에 항상 각도 단위를 확인하세요."
      },
      {
        "question": "주어진 변과 빗변에 어떤 각도든 쓸 수 있나요?",
        "answer": "아니요. 세 입력값은 b = c cos(A)를 만족해야 하므로, 변이 정해지면 각도도 정해집니다. b = 4, c = 5이면 각 A는 약 36.87°이어야 합니다. 다른 각도를 입력하면 다른 삼각형을 기술하는 것이며, 결과는 원하는 직각삼각형의 넓이와 일치하지 않습니다."
      },
      {
        "question": "내 측정값이 유효한 직각삼각형을 이루는지 어떻게 확인하나요?",
        "answer": "세 가지 조건을 확인하세요. 빗변이 변보다 길 것(c > b > 0), 각도가 0°와 90° 사이일 것, b = c cos(A)가 성립할 것입니다. 더 확실히 하려면 a = c sin(A)와 피타고라스 정리 a² + b² = c²도 확인하세요. 어느 하나라도 틀리면 측정값이나 라벨 중 최소 하나가 잘못된 것입니다."
      },
      {
        "question": "두 변을 모두 알면 넓이를 구할 수 있나요?",
        "answer": "네, 그 경우 K = ab/2라는 더 짧은 공식이 각도나 사인 없이 바로 적용됩니다. 변이 3과 4이면 K = 6입니다. 사인 기반 계산기는 한 변이 빠진 경우를 위해 설계되었으며, 두 변을 모두 알 때는 두 변 공식이 더 간단하고 완전히 같은 결과를 냅니다."
      },
      {
        "question": "잘못된 각도를 입력하면 어떻게 되나요?",
        "answer": "계산기는 입력받은 값을 그대로 곱하므로, 잘못된 각도는 경고 없이 잘못된 넓이를 냅니다. b = 4, c = 5인 경우 각 A = 36.87° 대신 각 B = 53.13°를 입력하면 6 대신 8이 나옵니다. 입력한 각도가 변 b와 빗변 사이의 각도인지 항상 확인하세요."
      },
      {
        "question": "빗변이 고정됐을 때 가능한 최대 넓이는 얼마인가요?",
        "answer": "K = c²/4이며, 각 A = 45°이고 삼각형이 이등변이며 두 변이 c/√2일 때 달성됩니다. 빗변이 10이면 상한은 25 제곱 단위입니다. 그 빗변을 가진 직각삼각형은 그보다 넓을 수 없습니다. 결과가 c²/4를 초과하면 입력값이 모순된 것입니다."
      },
      {
        "question": "사인 기반 공식과 표준 밑변-높이 공식의 차이는 무엇인가요?",
        "answer": "수학적으로 차이가 없습니다. sin(A) = a/c를 K = bc sin(A)/2에 대입하면 표준 밑변-높이 규칙 K = ab/2가 됩니다. 사인 버전은 알려진 값이 다를 때 같은 공식을 다시 쓴 것일 뿐입니다. 빗변과 각도를 알 때는 사인 형태를, 두 변을 알 때는 ab/2를 쓰세요."
      }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 살펴보기",
    "relatedItems": [
      "직각삼각형 넓이 계산기",
      "두 변으로 구하는 직각삼각형 넓이 계산기",
      "각도로 구하는 직각삼각형 넓이 계산기",
      "각도로 구하는 직각삼각형 변 계산기",
      "직각삼각형 변 계산기",
      "직각삼각형 삼각비 계산기"
    ],
    "relatedIntro": "측정값이 다르면 필요한 계산기도 다릅니다.",
    "faqHeading": "자주 묻는 질문",
    "tocHeading": "이 가이드에서 다루는 내용",
    "tocItems": {
      "sec-intro": "한 변과 한 각도로 직각삼각형의 넓이를 구하는 방법",
      "sec-anatomy": "직각삼각형의 변과 각 이해하기",
      "sec-sine": "직각삼각형 계산에서 사인 함수 이해하기",
      "sec-formula": "직각삼각형 넓이 공식에 사인이 쓰이는 이유",
      "sec-howto": "한 변과 한 각도로 구하는 직각삼각형 넓이 계산기 사용법",
      "sec-consistency": "변, 빗변, 각도가 유효한 직각삼각형을 이루는지 확인하는 방법",
      "sec-examples": "한 변과 한 각도를 이용한 직각삼각형 넓이 단계별 예제",
      "sec-practical": "한 변과 한 각도로 구하는 직각삼각형 넓이의 실생활 응용",
      "sec-compare": "사인 기반 공식이 두 변 공식과 같은 넓이를 내는 이유",
      "sec-angle-effect": "낀각이 직각삼각형 넓이에 미치는 영향",
      "sec-alternative": "한 변과 그 각도만으로 직각삼각형 넓이를 구할 수 있을까?",
      "sec-units": "넓이 계산에서 각도 단위와 측정 이해하기",
      "sec-mistakes": "한 변과 한 각도로 직각삼각형 넓이를 구할 때 흔한 실수",
      "sec-verify": "직각삼각형 넓이가 맞는지 확인하는 방법",
      "sec-applications": "실전에서 한 변과 한 각도로 구하는 직각삼각형 넓이",
      "sec-related": "관련 직각삼각형 계산기 살펴보기",
      "sec-faq": "자주 묻는 질문",
      "sec-conclusion": "세 가지 입력값이 전체 넓이를 담는다"
    },
    "sections": {
      "sec-intro": {
        "h2": "한 변과 한 각도로 직각삼각형의 넓이를 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "[[b=4]], [[c=5]], [[A=36.87^\\circ]]를 예로 들어봅시다. [[K=\\frac{bc\\sin(A)}{2}]]를 적용하면 [[K=\\frac{4\\times5\\times0.6}{2}]]이고, [[[\\boxed{K=6\\text{ square units}}]]]입니다. 이 결과는 세 변이 둘러싼 전체 평면 넓이를 나타냅니다. 즉, 표면적이 6 제곱 단위라는 뜻입니다. 이것이 바로 한 변과 한 각도로 구하는 직각삼각형 넓이 계산기가 이 입력값들에 대해 반환하는 값입니다." },
          { "kind": "p", "text": "계산기는 세 가지 측정값을 요구합니다. 변 [[b]]는 각 [[A]] 옆에 있고, 빗변 [[c]]는 직각 반대편의 가장 긴 변이며, 각 [[A]]는 둘 사이에 낀 예각입니다. [[\\sin(A)]]는 빠진 변 [[a]]와 빗변 [[c]]의 비율과 같으므로, 공식은 빠진 높이를 직접 재지 않고 복원합니다. [[b]], [[c]], [[\\sin(A)]]를 곱하면 둘러싼 직사각형이 되고, 이를 2로 나누면 삼각형으로 잘립니다." },
          { "kind": "p", "text": "이 방법은 세 번째 변을 재기 어려울 때 중요합니다. 도면에는 빗변과 한 변이 주어지고, 각도는 각도기나 이전 단계에서 얻을 수 있습니다. 사인이 그 간극을 메워주므로, 이미 알려진 값들만으로 넓이를 구할 수 있습니다." }
        ]
      },
      "sec-anatomy": {
        "h2": "직각삼각형의 변과 각 이해하기",
        "blocks": [
          { "kind": "p", "text": "공식이 이해되기 전에 라벨이 정확해야 합니다. 아래의 모든 기호는 계산기에 등장하며, 각각 하나의 고정된 의미를 가집니다." },
          { "kind": "h3", "text": "직각삼각형이란 무엇인가요?" },
          { "kind": "p", "text": "직각삼각형은 내각 중 하나가 90도인 삼각형입니다. 그 각을 이루는 두 변은 서로 수직인 두 변이며, 직각 반대편의 변은 빗변입니다. 세 내각의 합이 180도이므로 두 예각은 [[A+B=90^\\circ]]를 만족합니다. 즉, 서로 여각 관계이므로 하나를 알면 다른 하나가 정해집니다." },
          { "kind": "h3", "text": "빗변이란?" },
          { "kind": "p", "text": "빗변은 직각 반대편의 변입니다. 삼각형이 어떻게 회전하거나 그려져도 항상 가장 긴 변입니다. 계산기는 이 변을 변 [[c]]로 쓰므로, 이를 정확히 식별하는 것이 첫걸음입니다. 직각을 찾아 그 반대편의 변을 취하세요. 그림이 기울어져 한 변이 길어 보여도 변이 이 역할을 할 수는 없습니다." },
          { "kind": "h3", "text": "두 변이란?" },
          { "kind": "p", "text": "두 변은 직각에서 만나는 변들로, 서로 수직입니다. 변 [[a]]는 각 [[A]]의 반대편에 있고, 변 [[b]]는 각 [[B]]의 반대편에 있습니다. 계산기는 각 [[A]]에 인접한 변 [[b]]를 첫 번째 입력으로 받습니다. 두 변이 함께 90도 각이 있는 모서리를 이룹니다." },
          { "kind": "h3", "text": "각 A 이해하기" },
          { "kind": "p", "text": "각 [[A]]는 변 [[b]]와 빗변 [[c]]가 이루는 예각입니다. 계산기의 두 변 입력 사이의 낀각이므로, [[\\angle A=\\text{angle between }b\\text{ and }c]]입니다. 이 짝은 고정되어 있습니다. 공식에서 [[A]]가 언급되는 곳에서는 변 [[b]]의 먼 쪽 끝 모서리가 아니라, 알려진 변이 빗변과 만나는 모서리를 의미합니다." },
          { "kind": "h3", "text": "각 A에 대한 대변과 인접변" },
          { "kind": "p", "text": "각 [[A]]에 서서 삼각형을 가로질러 바라보세요. 닿지 않고 마주 보는 변이 대변, 빗변 옆에서 각을 이루는 변이 인접변입니다. 이 라벨은 기준각을 따르므로, 기준을 [[A]]에서 [[B]]로 바꾸면 어느 변이 어느 변인지가 뒤바뀝니다." },
          { "kind": "p", "text": "정리하면, 각 [[A]]를 기준으로 변 [[a]]는 대변, 변 [[b]]는 인접변, 변 [[c]]는 빗변입니다." },
          { "kind": "h3", "text": "낀각 이해하기" },
          { "kind": "p", "text": "낀각은 선택한 두 변이 이루는 각입니다. 넓이 공식은 [[b]]와 [[c]]를 곱하므로, 필요한 각도는 그 사이에 갇힌 각, 즉 각 [[A]]입니다. 이 계산기의 올바른 짝은 [[b,\\;c,\\;A]]입니다. 같은 두 변에 다른 각도를 쓰면 공식이 가정하는 짝이 깨지므로, 각 [[A]]를 각 [[B]]와 혼동하지 마세요." }
        ],
        "imgAlt": "직각삼각형 ABC: 변 b와 빗변 c가 강조되고, 낀각 A와 빠진 변 a가 표시됨",
        "figcaption": "삼각형 ABC: 강조된 인접변 b와 빗변 c가 낀각 A를 이루고, 변 a는 빠진 대변입니다."
      },
      "sec-sine": {
        "h2": "직각삼각형 계산에서 사인 함수 이해하기",
        "blocks": [
          { "kind": "p", "text": "사인은 길이가 아니라 비율입니다. 예각에 대해 [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]]이며, 이 삼각형에서는 [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]]가 됩니다. 이 비율은 각도 맞은편 변과 가장 긴 변을 비교하므로 단위가 없는 순수한 수입니다. 예각에 대한 값은 항상 0과 1 사이에 있으며, 한 변이 다른 변을 대신할 수 있게 하는 것이 바로 이 비율입니다." },
          { "kind": "h3", "text": "사인이 빠진 변을 찾아주는 방법" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]]에서 시작합니다. 양변에 [[c]]를 곱하면 [[[\\boxed{a=c\\sin(A)}]]]가 됩니다. 빗변이 비율을 다시 길이로 확대해주며, 그 길이가 바로 빠진 변입니다. 계산기가 [[a]]를 묻지 않는 이유는 이 한 번의 변형으로 [[c]]와 [[A]]로부터 [[a]]를 복원하기 때문입니다. 넓이 공식의 모든 이후 단계는 이 대입 위에 서 있습니다." },
          { "kind": "h3", "text": "수치 예제" },
          { "kind": "p", "text": "[[c=5]]와 [[A=36.87^\\circ]]가 주어지면, [[a=5\\times\\sin(36.87^\\circ)]]이고, [[a=5\\times0.6]]이므로, [[[\\boxed{a=3}]]]입니다. 빠진 변의 길이는 3 단위로, 익숙한 3-4-5 삼각형이 완성됩니다. 한 번의 곱셈이 별도의 측정을 대신했습니다." },
          { "kind": "h3", "text": "사인이 코사인, 탄젠트와 다른 점" },
          { "kind": "p", "text": "코사인은 인접변을 씁니다: [[\\cos(A)=\\frac{b}{c}]]. 탄젠트는 두 변을 씁니다: [[\\tan(A)=\\frac{a}{b}]]. 각 비율은 서로 다른 질문에 답합니다. 이 계산기에 필요한 비율은 사인인데, 이는 모르는 것이 대변 [[a]]이고 알려진 변이 빗변 [[c]]이기 때문입니다. 알려진 값이 바뀌면 유용한 비율도 바뀌지만, 이 가이드의 다른 내용은 사인 계열을 벗어나지 않습니다." }
        ]
      },
      "sec-formula": {
        "h2": "직각삼각형 넓이 공식에 사인이 쓰이는 이유는 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "표준 규칙에서 시작합니다: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. 이 삼각형에서는 자연스러운 밑변이 변 [[b]]이고 수직 높이가 변 [[a]]인데, 두 변이 90도로 만나기 때문입니다. 따라서 [[K=\\frac{ab}{2}]]가 됩니다. 계산기는 [[a]]를 묻지 않으므로, 공식은 이를 다시 만들어내야 합니다. 사인 비율에서 [[a=c\\sin(A)]]입니다. 대입하면 [[K=\\frac{b(c\\sin(A))}{2}]]가 되고, 따라서 [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]입니다. 2로 나누는 것은 밑변-높이 규칙에서 살아남은 것이고, 사인 인자는 변장한 빠진 변입니다." },
          { "kind": "h3", "text": "공식이 왜 2로 나뉘나요?" },
          { "kind": "p", "text": "주어진 밑변과 수직 높이를 가진 삼각형은 같은 밑변과 높이로 만든 평행사변형의 정확히 절반을 채웁니다. 어떤 삼각형이든 한 변을 따라 두 배로 늘리면 그 평행사변형이 완성되므로, 삼각형은 그 넓이의 절반을 차지합니다. 2로 나누는 것은 관습이 아니라 기하학이며, 밑변과 높이를 공급하는 공식이 무엇이든 적용됩니다." },
          { "kind": "h3", "text": "사인이 빠진 높이를 어떻게 대신하나요?" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]에서의 수직 높이는 변 [[a]]입니다. [[\\sin(A)=\\frac{a}{c}]]이므로, 빗변에 사인을 곱하면 단위 없는 비율이 길이 [[a]]로 다시 늘어납니다. 사용자는 [[a]] 대신 [[c]]와 [[A]]를 측정하고, 곱 [[c\\sin(A)]]가 공식 안에서 조용히 변환을 수행합니다." },
          { "kind": "h3", "text": "빗변에 인접변을 곱하는 이유는 무엇인가요?" },
          { "kind": "p", "text": "어떤 삼각형이든 두 변과 그 낀각이 넓이를 결정한다는 것이 일반 규칙입니다. 여기서 알려진 두 변은 [[b]]와 [[c]]이고, 그 낀각은 [[A]]입니다. 공식은 정확히 그 두 변을 곱한 뒤 [[\\sin(A)]]를 곱하고 절반으로 나눕니다. 변의 다른 어떤 짝도 다른 낀각을 요구할 것입니다." },
          { "kind": "h3", "text": "이 공식이 다른 삼각형에도 적용되나요?" },
          { "kind": "p", "text": "네, 일반 형태로: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], 여기서 [[x]]와 [[y]]는 임의의 두 변, [[\\theta]]는 그 사이의 각도입니다. 직각삼각형 버전은 [[x=b]], [[y=c]], [[\\theta=A]]를 넣은 그 규칙입니다. 계산기는 한 가지 제한을 추가합니다. 세 입력값은 [[b=c\\cos(A)]]와 같은 직각삼각형 관계도 만족해야 합니다. 일반 공식은 어떤 낀각 짝에 대해서도 넓이를 계산하고, 이 계산기는 그 결과를 직각삼각형으로 해석합니다." }
        ],
        "imgAlt": "3-4-5 삼각형: sin A = 3/5에서 변 a = 3을 복원하고, 두 공식으로 넓이 6을 구함",
        "figcaption": "사인에서 넓이로: sin A = 3/5에서 a = 3이 되므로, K = bc sin A / 2 = 6은 K = ab/2와 일치합니다."
      },
      "sec-howto": {
        "h2": "한 변과 한 각도로 구하는 직각삼각형 넓이 계산기 사용법",
        "blocks": [
          { "kind": "p", "text": "계산기에는 정확히 세 가지 입력이 필요하며, 순서대로 입력합니다. 아래 단계는 화면 레이아웃을 따라 알려진 측정값에서 검증된 결과까지 이어집니다." }
        ],
        "steps": [
          "<strong>인접변 b를 확인하세요.</strong> 빗변과 함께 각 A를 이루는 변입니다.",
          "<strong>빗변 c를 확인하세요.</strong> 직각 반대편의 가장 긴 변입니다.",
          "<strong>낀 예각 A를 확인하세요.</strong> 변 b와 빗변 c 사이의 각도입니다.",
          "<strong>두 변에 호환되는 단위를 쓰세요.</strong> 미터는 미터끼리, 피트는 피트끼리, 절대 섞지 마세요.",
          "<strong>첫 번째 입력란에 변 b를 입력하세요.</strong> 각 A에 인접한 변입니다.",
          "<strong>두 번째 입력란에 빗변 c를 입력하세요.</strong> 변 b보다 길어야 합니다.",
          "<strong>각 A를 도(°) 단위로 입력하세요.</strong> 계산기는 라디안이 아니라 도(°)를 기대합니다.",
          "<strong>각도가 0도와 90도 사이에 있는지 확인하세요.</strong> 양 끝값은 삼각형을 이루지 않습니다.",
          "<strong>빗변이 변보다 긴지 확인하세요.</strong> c가 b보다 크지 않으면 라벨이 잘못된 것입니다.",
          "<strong>세 값이 하나의 직각삼각형을 기술하는지 확인하세요.</strong> 최소한 근사적으로 b = c cos(A)인지 확인합니다.",
          "<strong>Calculate Area를 클릭하세요.</strong> 대입 과정과 함께 결과가 나타납니다.",
          "<strong>결과를 검토하세요.</strong> 넓이를 읽고 타당한지 확인합니다.",
          "<strong>풀이 단계를 읽으세요.</strong> 공식, 사인값, 계산 과정이 표시됩니다.",
          "<strong>최종 결과가 제곱 단위를 쓰는지 확인하세요.</strong> 입력값에 맞는 길이 단위의 제곱입니다.",
          "<strong>다른 문제를 입력하기 전에 Reset을 쓰세요.</strong> 세 입력란이 모두 지워져 깨끗하게 시작합니다."
        ],
        "closingParagraphs": [
          "이 페이지는 [[b]], [[c]], [[A]]라는 하나의 계산기 구성만 제공합니다. 두 번째 모드는 없습니다. 이 페이지의 모든 넓이는 위의 사인 공식에서 나옵니다."
        ]
      },
      "sec-consistency": {
        "h2": "변, 빗변, 각도가 유효한 직각삼각형을 이루는지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "세 입력값은 독립적이지 않습니다. 직각삼각형에서는 [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]이고, 따라서 [[[\\boxed{b=c\\cos(A)}]]]입니다. 세 값 중 두 개를 정하면 나머지 하나는 이미 정해집니다. 서로 맞지 않는 세 수를 입력하면 공식이 가정하는 삼각형을 기술하지 못합니다." },
          { "kind": "h3", "text": "두 변 길이에서 각도 확인하기" },
          { "kind": "p", "text": "[[b]]와 [[c]]를 알면 각도는 강제됩니다: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. 예: [[b=4]], [[c=5]]이면 [[A=\\cos^{-1}(4/5)]]이고, [[[\\boxed{A\\approx36.87^\\circ}]]]입니다. 각도기나 이전 계산이 이 변들에 대해 다른 각도를 보고하면, 숫자 중 하나가 잘못된 것입니다. 변이 결정하고, 각도가 따릅니다." },
          { "kind": "h3", "text": "각도에서 변 길이 확인하기" },
          { "kind": "p", "text": "반대 방향으로도 확인됩니다. [[c=10]]과 [[A=60^\\circ]]가 주어지면 인접변은 [[b=10\\cos(60^\\circ)]]이어야 하며, [[[\\boxed{b=5}]]]입니다. 같은 빗변과 각도에 [[b=8]]을 입력하면 같은 직각삼각형을 기술하지 못합니다. [[10\\cos(60^\\circ)]]는 5이지 8이 아니기 때문입니다. 빗변이 고정되면 각 각도마다 인접변 길이는 정확히 하나뿐입니다." },
          { "kind": "h3", "text": "입력값이 모순될 때 일어나는 일" },
          { "kind": "p", "text": "일반적인 두 변-낀각 공식은 모순된 입력에 대해서도 숫자를 반환합니다. 받는 것을 그대로 곱하기 때문입니다. 하지만 [[b\\neq c\\cos(A)]]이면, 측정값들은 [[c]]를 빗변, [[b]]를 그 인접변으로 하는 직각삼각형을 기술하지 않습니다. 수치 답이 유효한 기하학의 증명이 아닙니다. 일관성 검사가 증명입니다." },
          { "kind": "h3", "text": "기본 입력 조건" },
          { "kind": "p", "text": "유효한 입력은 [[c>b>0]], [[0^\\circ<A<90^\\circ]], [[b=c\\cos(A)]]를 만족합니다. 첫 번째는 빗변이 가장 길게 유지되고, 두 번째는 각도를 예각으로 유지하며, 세 번째는 세 값을 하나의 삼각형으로 묶습니다. 넓이를 믿기 전에 세 가지를 모두 확인하세요." }
        ],
        "imgAlt": "세 패널: 유효한 4, 5, 36.87도; 유효한 5, 10, 60도; 무효한 8, 10, 60도",
        "figcaption": "유효한 입력은 b = c cos A를 만족합니다. 세 번째 패널은 10 cos 60° = 5 ≠ 8임을 보여줍니다."
      },
      "sec-examples": {
        "h2": "한 변과 한 각도를 이용한 직각삼각형 넓이 단계별 예제",
        "blocks": [
          { "kind": "p", "text": "네 개의 고전적인 직각삼각형이 크기가 커지는 순서로 방법을 보여줍니다. 각 예제는 사인 공식에 대입한 뒤 두 변 공식으로 결과를 검증합니다." },
          { "kind": "h3", "text": "예제 1: 3-4-5 직각삼각형" },
          { "kind": "p", "text": "[[b=4]], [[c=5]], [[A=36.87^\\circ]]가 주어졌습니다. 1단계: [[K=\\frac{bc\\sin(A)}{2}]]. 2단계: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. 3단계: [[\\sin(36.87^\\circ)\\approx0.6]]. 4단계: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] 검증: [[a=5\\times0.6=3]]이고, [[K=\\frac{4\\times3}{2}=6]]입니다." },
          { "kind": "h3", "text": "예제 2: 5-12-13 직각삼각형" },
          { "kind": "p", "text": "[[b=12]], [[c=13]], [[A\\approx22.62^\\circ]]가 주어졌고, [[\\sin(A)=\\frac{5}{13}]]입니다. 대입: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. 13이 약분됩니다: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] 검증: [[a=13\\times(5/13)=5]]이고, [[K=\\frac{12\\times5}{2}=30]]입니다." },
          { "kind": "h3", "text": "예제 3: 8-15-17 직각삼각형" },
          { "kind": "p", "text": "[[b=15]], [[c=17]], [[A\\approx28.07^\\circ]]가 주어졌고, [[\\sin(A)=\\frac{8}{17}]]입니다. 그러면 [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]]이고, [[[\\boxed{K=60\\text{ square units}}]]] 검증: [[a=8]]이고, [[\\frac{15\\times8}{2}=60]]입니다." },
          { "kind": "h3", "text": "예제 4: 7-24-25 직각삼각형" },
          { "kind": "p", "text": "[[b=24]], [[c=25]], [[A\\approx16.26^\\circ]]가 주어졌고, [[\\sin(A)=\\frac{7}{25}]]입니다. 그러면 [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]]이고, [[[\\boxed{K=84\\text{ square units}}]]] 검증: [[a=7]]이고, [[\\frac{24\\times7}{2}=84]]입니다." },
          { "kind": "h3", "text": "기초 예제 비교" }
        ],
        "table": {
          "headers": ["삼각형 유형", "알려진 변 b", "빗변 c", "각 A", "계산된 넓이"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "한 변과 한 각도로 구하는 직각삼각형 넓이의 실생활 응용",
        "blocks": [
          { "kind": "p", "text": "열두 가지 풀이된 상황이 이 공식을 작업장, 현장, 스튜디오로 가져갑니다. 각 예제는 직각삼각형 패널, 단면, 프로파일, 단순화 모델을 이름 짓고, 세 계산기 입력값을 공식에 대입한 뒤, 숫자 뒤의 가정을 명시합니다. 실제 물체가 곡선이거나 불규칙하면 계산은 모델링된 삼각형에만 해당합니다." },
          { "kind": "h3", "text": "예제 1: 삼각형 유리창" },
          { "kind": "p", "text": "직각삼각형 유리창의 [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]입니다. 계산기 입력값: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. 대입: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] 프레임 여유를 빼기 전의 평평한 삼각형 유리 넓이입니다." },
          { "kind": "h3", "text": "예제 2: 지붕 지지 패널" },
          { "kind": "p", "text": "직각삼각형 지붕 지지 단면의 [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]입니다. 입력값: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. 그러면 [[K=\\frac{12\\times13\\times(5/13)}{2}]]이고, [[[\\boxed{K=30\\text{ ft}^2}]]] 결과는 지붕 전체가 아니라 평평한 삼각형 지지 단면을 기술합니다." },
          { "kind": "h3", "text": "예제 3: 삼각형 경사로 옆모습" },
          { "kind": "p", "text": "단순화된 직각삼각형 경사로 옆모습의 [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]입니다. 입력값: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. 그러면 [[K=\\frac{8\\times10\\times0.6}{2}]]이고, [[[\\boxed{K=24\\text{ m}^2}]]] 경사진 보행 표면이 아니라 삼각형 옆모습입니다." },
          { "kind": "h3", "text": "예제 4: 강철 거셋 플레이트" },
          { "kind": "p", "text": "삼각형 강철 지지판의 [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]입니다. 입력값: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. 그러면 [[K=\\frac{15\\times17\\times(8/17)}{2}]]이고, [[[\\boxed{K=60\\text{ cm}^2}]]] 넓이만으로는 구조적 강도나 하중 능력을 확정할 수 없습니다." },
          { "kind": "h3", "text": "예제 5: 삼각형 정원 구역" },
          { "kind": "p", "text": "단순화된 직각삼각형 정원 구역의 [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]입니다. 입력값: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. 그러면 [[K=\\frac{24\\times25\\times(7/25)}{2}]]이고, [[[\\boxed{K=84\\text{ m}^2}]]] 식재용 삼각형 구역의 넓이를 어림하는 데 도움이 됩니다." },
          { "kind": "h3", "text": "예제 6: 삼각형 돛 패널" },
          { "kind": "p", "text": "직각삼각형 돛 단면의 [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]입니다. 입력값: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. 그러면 [[K=\\frac{12\\times15\\times0.6}{2}]]이고, [[[\\boxed{K=54\\text{ ft}^2}]]] 이 평평한 패널 수치에는 솔기와 재료 여유가 제외되어 있습니다." },
          { "kind": "h3", "text": "예제 7: 합판 재단 템플릿" },
          { "kind": "p", "text": "직각삼각형 합판 템플릿의 [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]입니다. 입력값: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. 그러면 [[K=\\frac{16\\times20\\times0.6}{2}]]이고, [[[\\boxed{K=96\\text{ cm}^2}]]] 재단 손실을 빼기 전에 필요한 평평한 재료량을 어림하는 데 도움이 됩니다." },
          { "kind": "h3", "text": "예제 8: 삼각형 도로 표지판" },
          { "kind": "p", "text": "직각삼각형 표지판 패널의 [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]입니다. 입력값: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. 그러면 [[K=\\frac{21\\times29\\times(20/29)}{2}]]이고, [[[\\boxed{K=210\\text{ cm}^2}]]] 평평한 표지판 표면의 넓이를 어림합니다." },
          { "kind": "h3", "text": "예제 9: 토지 측량 구역" },
          { "kind": "p", "text": "직각삼각형으로 측량된 구역의 [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]입니다. 입력값: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. 그러면 [[K=\\frac{40\\times41\\times(9/41)}{2}]]이고, [[[\\boxed{K=180\\text{ m}^2}]]] 결과는 단순화된 직각삼각형 토지 구역에 적용됩니다." },
          { "kind": "h3", "text": "예제 10: 삼각형 어닝 지지대" },
          { "kind": "p", "text": "직각삼각형 어닝 지지 단면의 [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]입니다. 입력값: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. 그러면 [[K=\\frac{20\\times25\\times0.6}{2}]]이고, [[[\\boxed{K=150\\text{ ft}^2}]]] 불규칙한 어닝 전체 천이 아니라 평평한 삼각형 단면입니다." },
          { "kind": "h3", "text": "예제 11: 산업 현장 단면" },
          { "kind": "p", "text": "단순화된 직각삼각형 산업 부지 단면의 [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]입니다. 입력값: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. 그러면 [[K=\\frac{60\\times61\\times(11/61)}{2}]]이고, [[[\\boxed{K=330\\text{ m}^2}]]] 실제 불규칙한 부지는 여러 도형으로 나누어야 할 수 있습니다." },
          { "kind": "h3", "text": "예제 12: 창고 지붕 끝단면" },
          { "kind": "p", "text": "큰 직각삼각형 창고 지붕 끝단면의 [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]입니다. 입력값: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. 그러면 [[K=\\frac{84\\times85\\times(13/85)}{2}]]이고, [[[\\boxed{K=546\\text{ ft}^2}]]] 결과는 평평한 삼각형 끝단면의 넓이를 어림합니다." },
          { "kind": "h3", "text": "실용 예제 비교" }
        ],
        "table": {
          "headers": ["실용 응용", "변 a", "알려진 변 b", "빗변 c", "각 A", "계산된 넓이", "측정 단위"],
          "rows": [
            ["유리창", "3", "4", "5", "36.87°", "6", "m²"],
            ["지붕 지지대", "5", "12", "13", "22.62°", "30", "ft²"],
            ["경사로 프로파일", "6", "8", "10", "36.87°", "24", "m²"],
            ["거셋 플레이트", "8", "15", "17", "28.07°", "60", "cm²"],
            ["정원 구역", "7", "24", "25", "16.26°", "84", "m²"],
            ["돛 패널", "9", "12", "15", "36.87°", "54", "ft²"],
            ["합판 템플릿", "12", "16", "20", "36.87°", "96", "cm²"],
            ["도로 표지판", "20", "21", "29", "43.60°", "210", "cm²"],
            ["측량 구역", "9", "40", "41", "12.68°", "180", "m²"],
            ["어닝 지지대", "15", "20", "25", "36.87°", "150", "ft²"],
            ["산업 구역", "11", "60", "61", "10.39°", "330", "m²"],
            ["창고 지붕 끝단", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "사인 기반 공식이 두 변 공식과 같은 넓이를 내는 이유는 무엇인가요?",
        "blocks": [
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]]에서 시작하고 [[\\sin(A)=\\frac{a}{c}]]를 떠올리세요. 대입: [[K=\\frac{bc(a/c)}{2}]]. [[c]]가 약분되어 [[[\\boxed{K=\\frac{ab}{2}}]]]가 남습니다. 사인 공식은 새로운 넓이를 만들어내지 않습니다. 빠진 변을 사인 비율로 몰래 들여와 다른 알려진 값 집합에서 같은 넓이를 계산할 뿐입니다." },
          { "kind": "h3", "text": "사인 공식이 더 유용할 때는?" },
          { "kind": "p", "text": "한 변은 측정됐고 빗변은 알려져 있으며 낀각을 구할 수 있는데, 세 번째 변을 직접 재본 적이 없을 때 쓰세요. 현장 측정, 축척 도면, 측량 데이터는 종종 정확히 이 조합으로 도착합니다. 공식은 그 세 수를 한 줄로 넓이로 바꾸며, 빠진 변을 먼저 찾는 우회로가 필요 없습니다." },
          { "kind": "h3", "text": "두 변 공식이 더 간단할 때는?" },
          { "kind": "p", "text": "두 수직 변을 이미 알 때는 [[K=\\frac{ab}{2}]]가 더 짧습니다. 사인도 각도도 없이, 한 번의 곱셈과 절반 나누기뿐입니다. 변이 빠졌고 각도가 이를 채워줄 때만 사인 버전을 쓰세요." },
          { "kind": "h3", "text": "수치 비교" },
          { "kind": "p", "text": "3-4-5 삼각형에서 사인 방법은 [[K=\\frac{4\\times5\\times0.6}{2}=6]]을, 두 변 방법은 [[K=\\frac{3\\times4}{2}=6]]을 냅니다. 두 경로 모두 같은 기하학을 통과하므로 반드시 일치해야 합니다. 일치하지 않으면 입력값이나 계산이 잘못된 것이지, 공식이 잘못된 것이 아닙니다." }
        ]
      },
      "sec-angle-effect": {
        "h2": "낀각이 직각삼각형 넓이에 어떤 영향을 미치나요?",
        "blocks": [
          { "kind": "p", "text": "빗변이 고정되면 각도는 자유롭게 변할 수 없습니다. 직각삼각형 관계가 [[b]]와 [[A]]를 묶어두기 때문입니다. 그 제약을 정직하게 다루면 [[A]]가 0도와 90도 사이를 움직일 때 넓이가 정확히 어떻게 오르내리는지 알 수 있습니다." },
          { "kind": "h3", "text": "각 A가 커지면 어떻게 되나요?" },
          { "kind": "p", "text": "[[c]]가 고정되면 [[b=c\\cos(A)]]이고 [[a=c\\sin(A)]]이므로, [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]입니다. 배각 항등식을 쓰면 [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]가 됩니다. 넓이는 [[A]]가 45도 아래에서 45도에 접근할수록 커지고, 45도에서 정점을 찍은 뒤 90도 쪽으로 떨어집니다. 30°와 60° 같은 여각은 [[\\sin(2A)]]가 45도에 대해 대칭이므로 같은 넓이를 냅니다." },
          { "kind": "h3", "text": "고정된 빗변에서 최대 넓이" },
          { "kind": "p", "text": "정점은 [[A=45^\\circ]]에서 나타나며, 이때 [[\\sin(2A)=1]]입니다: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] 거기서는 [[a=b=\\frac{c}{\\sqrt{2}}]]이므로, 넓이를 최대화하는 삼각형은 이등변삼각형입니다. 고정된 빗변은 빗변 제곱의 4분의 1보다 많은 직각삼각형 넓이를 둘러쌀 수 없으며, 이등변 모양만이 그 한계에 도달합니다." },
          { "kind": "h3", "text": "수치 예제" },
          { "kind": "p", "text": "[[c=10]]이 주어지면 상한은 [[K_{\\max}=\\frac{10^2}{4}]]이고, [[[\\boxed{K_{\\max}=25}]]]입니다. [[A=45^\\circ]]에서 두 변은 각각 [[10/\\sqrt{2}\\approx7.07]]이며, [[\\frac{7.07\\times7.07}{2}\\approx25]]입니다. 90°는 허용 가능한 예각 입력이 아닙니다. 삼각형이 직선으로 붕괴되기 때문입니다." }
        ]
      },
      "sec-alternative": {
        "h2": "한 변과 그 각도만으로 직각삼각형 넓이를 구할 수 있나요?",
        "blocks": [
          { "kind": "p", "text": "네, 사인 대신 탄젠트를 쓰면 됩니다. 변 [[b]]와 각 [[A]]를 알면 대변은 [[a=b\\tan(A)]]에서 구해집니다. 이를 [[K=\\frac{ab}{2}]]에 넣으면 [[K=\\frac{b(b\\tan(A))}{2}]]가 되고, 따라서 [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]입니다. 다른 모서리에서 보면 [[b=a\\tan(B)]]이므로 [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]가 됩니다. 이들은 진짜 대안 방법이며, 빗변은 모르지만 변과 그 각도를 알 때 유용합니다. 위 계산기의 추가 모드가 아니라 수학적 대안입니다. 위 계산기는 [[b]], [[c]], [[A]]로만 작동합니다." }
        ]
      },
      "sec-units": {
        "h2": "넓이 계산에서 각도 단위와 측정 이해하기",
        "blocks": [
          { "kind": "p", "text": "넓이는 그것을 만드는 두 길이를 곱한 것에서 단위를 물려받으며, 각도는 단위를 전혀 기여하지 않습니다. 세 입력값의 단위를 호환되게 유지하는 것이 답을 정직하게 만듭니다." },
          { "kind": "h3", "text": "도(°) 대 라디안" },
          { "kind": "p", "text": "계산기는 도(°)를 기대합니다. [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]로 변환하세요. 예를 들어 [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]입니다. 도(°) 모드 입력란에 라디안 모드 각도를 넣으면 사인값이 조용히 바뀝니다. [[\\sin(30^\\circ)=0.5]]인데 [[\\sin(30\\text{ radians})\\approx-0.99]]이므로 넓이가 망가집니다. 먼저 변환한 뒤 입력하세요." },
          { "kind": "h3", "text": "사인에 단위가 없는 이유" },
          { "kind": "p", "text": "사인은 두 길이의 비율이므로 단위가 약분됩니다. 대변을 빗변으로 나눈 것은 순수한 수입니다. 답의 제곱 단위는 [[b]]와 [[c]]를 곱한 것에서 전적으로 나옵니다. 그래서 공식의 단위 계산이 간단합니다. 두 길이 단위를 맞추면 넓이 단위가 따라옵니다." },
          { "kind": "h3", "text": "흔한 측정 단위" },
          { "kind": "p", "text": "미터는 제곱미터를, 센티미터는 제곱센티미터를, 피트는 제곱피트를, 인치는 제곱인치를 냅니다: [[\\text{m}\\times\\text{m}=\\text{m}^2]]이며, 모든 길이 단위에 같은 패턴이 적용됩니다. 센티미터와 미터 같은 혼합 단위는 공식을 적용하기 전에 하나의 단위로 변환해야 합니다. 그렇지 않으면 숫자에 명확한 의미가 없습니다." },
          { "kind": "h3", "text": "이른 반올림이 결과에 영향을 줄 수 있는 이유" },
          { "kind": "p", "text": "중간 단계에서는 전체 정밀도를 유지하고 최종 답에서만 반올림하세요. 36.87° 뒤의 정확한 각도는 36.869897°이며, 그 사인은 정확히 0.6입니다. 먼저 각도를 반올림하면 사인이 살짝 움직이고, 그 살짝이 [[b]]와 [[c]]를 통해 곱해져 넓이에 반영됩니다. 한 삼각형에서는 작지만, 프로젝트 전체에서는 눈에 띕니다." }
        ]
      },
      "sec-mistakes": {
        "h2": "한 변과 한 각도로 직각삼각형 넓이를 구할 때 흔한 실수",
        "blocks": [
          { "kind": "p", "text": "이 주제의 틀린 답은 대부분 계산 실수가 아니라 잘못 라벨된 입력에서 나옵니다. 아래 열여섯 가지 실수는 반복해서 나타나는 것들로, 각각 원인과 해결책을 담고 있습니다." },
          { "kind": "h3", "text": "1. 빗변과 수직 변 혼동하기" },
          { "kind": "p", "text": "빗변은 직각 반대편의 변이며 가장 긴 변이고, 변은 직각과 만납니다. 둘을 바꾸면 [[c]]에 잘못된 길이가 들어갑니다. 해결책: 먼저 직각을 찾은 뒤 그 반대편의 변을 취하세요." },
          { "kind": "h3", "text": "2. 각 A를 잘못된 변과 짝짓기" },
          { "kind": "p", "text": "각 [[A]]는 변 [[b]]와 빗변 [[c]] 사이에 있습니다. 각 [[A]]를 변 [[a]]와 짝지으면 공식이 가정하는 낀각 관계가 뒤섞입니다. 해결책: 입력한 각도를 이루는 두 변을 따라가 보세요." },
          { "kind": "h3", "text": "3. 대변과 인접변 혼동하기" },
          { "kind": "p", "text": "대변은 각도 맞은편을, 인접변은 빗변 옆에서 각도에 닿는 것을 의미합니다. 기준각이 바뀌면 라벨이 뒤집힙니다. 해결책: 각 [[A]]에 서서 거기서 각 변의 이름을 지으세요." },
          { "kind": "h3", "text": "4. 대응 변을 바꾸지 않고 각 B를 각 A 대신 쓰기" },
          { "kind": "p", "text": "각 [[B]]는 [[b]]와 [[c]]가 아니라 [[a]]와 [[c]]와 짝을 이룹니다. [[b]]와 [[c]]를 유지한 채 [[B]]를 입력하면 다른 양을 계산합니다. 해결책: 각 각도를 자신의 변 짝과 함께 유지하거나, 먼저 [[B]]를 [[A]]로 변환하세요." },
          { "kind": "h3", "text": "5. 계산기가 도(°)를 기대하는데 라디안 쓰기" },
          { "kind": "p", "text": "36.87(도)이 들어갈 자리에 0.6435(라디안)를 입력하면 [[\\sin(A)]]가 완전히 바뀝니다. 해결책: 계산기의 단위를 확인하고, 필요하면 [[\\times\\frac{180}{\\pi}]]로 변환한 뒤 입력하세요." },
          { "kind": "h3", "text": "6. 2로 나누는 것을 잊기" },
          { "kind": "p", "text": "[[b\\times c\\times\\sin(A)]]를 곱하면 둘러싼 평행사변형의 넓이가 되며, 삼각형의 두 배입니다. 해결책: 곱을 절반으로 나누세요. /2는 공식의 일부이며 선택이 아닙니다." },
          { "kind": "h3", "text": "7. 사인 함수를 빼먹기" },
          { "kind": "p", "text": "[[\\frac{bc}{2}]]만 계산하면 [[\\sin(A)]]를 1로 취급하는 것인데, 이는 불가능한 예각 입력인 90°에서만 성립합니다. 해결책: [[\\sin(A)]]를 포함하세요. 빠진 변의 몫을 담고 있습니다." },
          { "kind": "h3", "text": "8. 빗변보다 긴 변 입력하기" },
          { "kind": "p", "text": "어떤 변도 빗변을 초과할 수 없으므로, [[c\\leq b]]이면 라벨이 잘못된 것입니다. 해결책: 변들을 다시 식별하세요. 가장 긴 측정값이 [[c]]입니다." },
          { "kind": "h3", "text": "9. 0도 각도 입력하기" },
          { "kind": "p", "text": "0°에서는 [[\\sin(A)=0]]이고 삼각형이 넓이 0인 직선으로 붕괴됩니다. 해결책: 0°와 90° 사이의 진짜 예각을 쓰세요." },
          { "kind": "h3", "text": "10. 예각으로 90도 각도 입력하기" },
          { "kind": "p", "text": "90°는 예각이 아니라 직각 [[C]]입니다. [[\\sin(90^\\circ)=1]]이면 공식이 [[\\frac{bc}{2}]]가 되는데, 이는 이 삼각형의 넓이가 아닙니다. 해결책: [[b]]와 [[c]] 사이의 예각을 입력하세요." },
          { "kind": "h3", "text": "11. 서로 다른 길이 단위 섞기" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]]와 [[c=5\\text{ m}]]를 곱하면 호환되지 않는 스케일이 곱해집니다. 해결책: 계산 전에 둘 다 하나의 단위로 변환하세요(400 cm = 4 m)." },
          { "kind": "h3", "text": "12. 넓이를 선형 단위로 보고하기" },
          { "kind": "p", "text": "6 m²의 넓이는 6 m이 아닙니다. 해결책: 매번 숫자와 함께 제곱 단위를 쓰세요." },
          { "kind": "h3", "text": "13. 각도를 너무 일찍 반올림하기" },
          { "kind": "p", "text": "사인을 구하기 전에 36.869897°를 36.87°로 반올림하면 결과가 살짝 이동하고, 37°로 반올림하면 더 많이 이동합니다. 해결책: 최종 답까지 전체 정밀도를 유지하세요." },
          { "kind": "h3", "text": "14. 세 입력값을 독립적으로 선택할 수 있다고 가정하기" },
          { "kind": "p", "text": "[[b]], [[c]], [[A]]는 [[b=c\\cos(A)]]로 연결되어 있습니다. 세 개를 모두 자유롭게 선택하면 삼각형이 과도하게 결정됩니다. 해결책: 두 값에서 세 번째 값을 유도하고 임의로 만들지 마세요." },
          { "kind": "h3", "text": "15. 입력한 변 길이와 모순되는 각도 쓰기" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]]는 검사를 통과하지 못합니다. [[10\\cos(60^\\circ)=5\\neq8]]이기 때문입니다. 공식은 여전히 숫자를 반환하지만, 이 직각삼각형의 넓이는 아닙니다. 해결책: [[b=c\\cos(A)]] 검사를 실행하세요." },
          { "kind": "h3", "text": "16. 수치 계산기 결과가 항상 유효한 직각삼각형을 나타낸다고 가정하기" },
          { "kind": "p", "text": "입력한 어떤 숫자든 산술은 성공하지만, 기하학은 그렇지 않습니다. 해결책: 답을 믿기 전에 일관성 검사와 독립 공식으로 검증하세요." },
          { "kind": "h3", "text": "틀린 경우 대 올바른 경우: 구체적인 예제" },
          { "kind": "p", "text": "[[b=4]], [[c=5]], [[A=36.87^\\circ]]를 쓰세요. 올바르게: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. 같은 변에 각 [[B=53.13^\\circ]]를 잘못 입력하면: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. 각 [[B]]는 [[b]]와 [[c]] 사이의 낀각이 아닙니다. 그 올바른 변 짝은 [[a]]와 [[c]]입니다. 오류는 계산에서는 보이지 않고 기하학에서는 명백합니다." }
        ]
      },
      "sec-verify": {
        "h2": "직각삼각형 넓이가 맞는지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "일곱 가지 독립 검사로, 모두 3-4-5 삼각형([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]])에서 시연합니다. 서로 다른 경로 사이의 일치가 답이 맞다는 가장 강력한 증거입니다." },
          { "kind": "h3", "text": "방법 1: 주 공식 확인하기" },
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]]를 다시 계산하세요: [[\\frac{4\\times5\\times0.6}{2}=6]]. 두 번째 계산이 오타와 잘못 입력된 각도를 잡아냅니다." },
          { "kind": "h3", "text": "방법 2: 코사인 관계 확인하기" },
          { "kind": "p", "text": "[[b=c\\cos(A)]]를 확인하세요: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. 맞지 않으면 각도와 변이 서로 다른 삼각형의 것입니다." },
          { "kind": "h3", "text": "방법 3: 빠진 변 계산하기" },
          { "kind": "p", "text": "[[a=c\\sin(A)]]를 확인하세요: [[5\\times0.6=3]]. 넓이 공식에 들어가는 사인값을 검사합니다." },
          { "kind": "h3", "text": "방법 4: 피타고라스 정리 확인하기" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]]를 확인하세요: [[9+16=25]]. 여기서 실패하면 변 식별이 잘못된 것입니다." },
          { "kind": "h3", "text": "방법 5: 두 변으로 검증하기" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]를 확인하세요: [[\\frac{3\\times4}{2}=6]]. 두 방법, 하나의 삼각형, 하나의 답입니다." },
          { "kind": "h3", "text": "방법 6: 여각 확인하기" },
          { "kind": "p", "text": "[[A+B=90^\\circ]]를 확인하세요: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. 잘못된 모서리에서 잰 각도를 잡아냅니다." },
          { "kind": "h3", "text": "방법 7: 최대 넓이 확인하기" },
          { "kind": "p", "text": "[[K\\leq\\frac{c^2}{4}]]를 확인하세요: [[6\\leq\\frac{25}{4}=6.25]]. 상한을 넘는 넓이는 주어진 빗변에서는 불가능합니다." }
        ]
      },
      "sec-applications": {
        "h2": "실전에서 한 변과 한 각도로 구하는 직각삼각형 넓이",
        "blocks": [
          { "kind": "p", "text": "같은 세 입력값이 삼각함수를 언급하지 않는 곳에도 나타납니다. 유리공은 창문의 변과 대각선을 재고 틀에서 각도를 읽고, 지붕공은 서까래 길이에서 지지대의 빗변을, 경사에서 각도를 압니다. 두 경우 모두 빠진 수직 변은 줄자로 닿기 어색한 쪽이고, 빗변과 각도는 손에 닿는 쪽에 있습니다. 사인 공식은 바로 그 비대칭을 위해 존재합니다. 접근 가능한 측정값을 접근 불가능한 높이로, 그리고 넓이로 바꿔줍니다." },
          { "kind": "p", "text": "아래 네 패널은 그 패턴을 서로 다른 스케일로 보여줍니다. 유리창(6 m²)과 경사로 프로파일(24 m²)은 미터 스케일의 3-4-5와 6-8-10 기하학을 쓰고, 지붕 지지대(30 ft²)는 5-12-13 삼각형을, 측량 구역(84 m²)은 7-24-25를 씁니다. 모든 패널에 인접변, 빗변, 낀각, 결과 넓이가 라벨되어 있어 측정에서 답까지의 경로가 보입니다." }
        ],
        "imgAlt": "네 패널: 유리창 6 m², 지붕 패널 30 ft², 경사로 프로파일 24 m², 측량 구역 84 m²",
        "figcaption": "네 가지 실제 용도: 유리창, 지붕 지지대, 경사로 프로파일, 측량 구역과 각각의 넓이."
      },
      "sec-related": {
        "h2": "관련 직각삼각형 계산기 살펴보기",
        "blocks": [
          { "kind": "p", "text": "측정값이 다르면 필요한 계산기도 다릅니다." }
        ]
      },
      "sec-faq": {
        "h2": "자주 묻는 질문",
        "blocks": [
          { "kind": "p", "text": "아래는 한 변과 한 각도로 구하는 넓이에 대한 가장 흔한 질문들의 답변입니다." }
        ]
      },
      "sec-conclusion": {
        "h2": "세 가지 입력값이 전체 넓이를 담는다",
        "blocks": [
          { "kind": "p", "text": "한 변, 빗변, 그 사이의 각도가 충분한 것으로 드러납니다. 사인 비율이 빠진 변을 다시 만들고, 절반 나누기가 둘러싼 직사각형을 삼각형으로 바꾸며, 일관성 관계로 모든 입력을 서로에 대해 검사할 수 있습니다. 입력값이 정확할 때 이 방법에는 근사가 없습니다." },
          { "kind": "p", "text": "작업 습관은 간단합니다. 각 A에서 변들을 라벨하고, 단위를 맞추고, b = c cos(A)를 확인한 뒤, 두 변 공식으로 답을 검증하세요. 이 습관들이 있으면 K = bc sin(A)/2는 기하학의 어떤 넓이 계산만큼이나 신뢰할 수 있습니다." }
        ]
      }
    }
  },
  "ms": {
    "faqs": [
      {
        "question": "Apakah formula luas menggunakan satu kaki dan sudut?",
        "answer": "K = bc sin(A) / 2, di mana b ialah kaki bersebelahan dengan sudut A, c ialah hipotenus, dan A ialah sudut tirus antara keduanya. Sebagai contoh, b = 4, c = 5, dan A = 36.87° memberikan K = (4 × 5 × 0.6) / 2 = 6 unit persegi. Sudut mesti dimasukkan dalam darjah, dan kedua-dua sisi mesti menggunakan unit panjang yang sama."
      },
      {
        "question": "Mengapa formula menggunakan sinus?",
        "answer": "Sinus mengembalikan kaki tegak yang tiada daripada hipotenus: kerana sin(A) = a/c, pendaraban memberikan a = c sin(A). Peraturan luas piawai memerlukan kedua-dua kaki, K = ab/2, jadi menggantikan ungkapan sinus untuk a menghasilkan K = bc sin(A)/2. Sinus ialah jambatan antara hipotenus yang diukur dan ketinggian yang tidak diukur."
      },
      {
        "question": "Sisi manakah bersebelahan dengan sudut A?",
        "answer": "Kaki b bersebelahan dengan sudut A: ia ialah salah satu daripada dua sisi yang membentuk sudut itu, yang satu lagi ialah hipotenus c. Kaki a bertentangan dengan sudut A, terletak di seberang segi tiga daripadanya. Jika anda menukar rujukan kepada sudut B, label bertukar: b menjadi sisi bertentangan dan a menjadi sisi bersebelahan."
      },
      {
        "question": "Bolehkah saya mengira luas tanpa mengetahui kaki yang tiada?",
        "answer": "Ya, itulah tujuan utama kalkulator ini. Sinus sudut A mengekod nisbah kaki yang tiada kepada hipotenus, jadi c sin(A) membina semula kaki a tanpa mengukurnya. Masukkan b, c, dan A, dan formula menguruskan selebihnya. Anda tidak memerlukan sisi ketiga sebagai input berasingan."
      },
      {
        "question": "Apakah perbezaan antara sudut A dan sudut B?",
        "answer": "Kedua-duanya sudut tirus bagi segi tiga bersudut tegak, dan A + B = 90°. Sudut A terletak antara kaki b dan hipotenus c; sudut B terletak antara kaki a dan hipotenus c. Formula K = bc sin(A)/2 memerlukan sudut A secara khusus. Menggunakan sudut B dengan sisi b dan c memberikan jawapan yang salah; sudut B berpasangan dengan sisi a dan c sebaliknya."
      },
      {
        "question": "Adakah kalkulator menggunakan darjah atau radian?",
        "answer": "Darjah. Memasukkan nilai radian memberikan sinus yang berbeza sepenuhnya dan luas yang salah, kerana fungsi sinus mentafsir nombor itu mengikut unit yang ditetapkan. Tukar radian kepada darjah dahulu dengan darjah = radian × 180/π; sebagai contoh, π/6 radian bersamaan 30°. Sentiasa sahkan unit sudut sebelum mengira."
      },
      {
        "question": "Bolehkah saya menggunakan sebarang sudut dengan kaki dan hipotenus yang diberi?",
        "answer": "Tidak. Ketiga-tiga input mesti memenuhi b = c cos(A), jadi sudut ditetapkan sebaik sahaja sisi dipilih. Untuk b = 4 dan c = 5, sudut A mestilah kira-kira 36.87°. Memasukkan sudut yang berbeza menggambarkan segi tiga yang berbeza, dan hasilnya tidak akan sepadan dengan segi tiga bersudut tegak yang dimaksudkan."
      },
      {
        "question": "Bagaimana saya memeriksa sama ada ukuran saya membentuk segi tiga bersudut tegak yang sah?",
        "answer": "Sahkan tiga syarat: hipotenus melebihi kaki (c > b > 0), sudut berada ketat antara 0° dan 90°, dan b = c cos(A) dipenuhi. Untuk keyakinan tambahan, semak a = c sin(A) dan teorem Pythagoras a² + b² = c². Jika mana-mana semakan gagal, sekurang-kurangnya satu ukuran atau label adalah salah."
      },
      {
        "question": "Bolehkah saya mengira luas jika saya tahu kedua-dua kaki?",
        "answer": "Ya, dan formula yang lebih pendek K = ab/2 digunakan secara langsung, tanpa sudut atau sinus diperlukan. Untuk kaki 3 dan 4, K = 6. Kalkulator berasaskan sinus direka untuk kes di mana satu kaki tiada; apabila kedua-dua kaki diketahui, formula kaki lebih mudah dan memberikan hasil yang sama."
      },
      {
        "question": "Apakah yang berlaku jika saya memasukkan sudut yang salah?",
        "answer": "Kalkulator mendarab apa sahaja yang diterimanya, jadi sudut yang salah menghasilkan luas yang salah tanpa amaran. Memasukkan sudut B = 53.13° bukannya A = 36.87° dengan b = 4 dan c = 5 memberikan 8 bukannya 6. Sentiasa sahkan bahawa sudut yang dimasukkan ialah sudut antara kaki b dan hipotenus."
      },
      {
        "question": "Apakah luas maksimum yang mungkin untuk hipotenus tetap?",
        "answer": "K = c²/4, dicapai apabila sudut A = 45° dan segi tiga sama kaki dengan kaki c/√2. Untuk hipotenus 10, hadnya ialah 25 unit persegi. Tiada segi tiga bersudut tegak dengan hipotenus itu boleh mengurung lebih luas. Jika hasil anda melebihi c²/4, input adalah tidak konsisten."
      },
      {
        "question": "Apakah perbezaan antara formula berasaskan sinus dan formula asas-tinggi piawai?",
        "answer": "Tiada perbezaan matematik: menggantikan sin(A) = a/c ke dalam K = bc sin(A)/2 memberikan K = ab/2, peraturan asas-tinggi piawai. Versi sinus hanyalah formula yang sama ditulis semula untuk nilai diketahui yang berbeza. Gunakan bentuk sinus apabila hipotenus dan sudut diketahui; gunakan ab/2 apabila kedua-dua kaki diketahui."
      }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak yang Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tegak",
      "Kalkulator Luas Segi Tiga Bersudut Tegak daripada Kaki",
      "Kalkulator Luas Segi Tiga Bersudut Tegak daripada Sudut",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak daripada Sudut",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      "Kalkulator Nisbah Trigonometri Segi Tiga Bersudut Tegak"
    ],
    "relatedIntro": "Ukuran yang berbeza memerlukan kalkulator yang berbeza.",
    "faqHeading": "Soalan Lazim",
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Bersudut Tegak Menggunakan Kaki dan Sudut",
      "sec-anatomy": "Memahami Sisi dan Sudut Segi Tiga Bersudut Tegak",
      "sec-sine": "Memahami Fungsi Sinus dalam Pengiraan Segi Tiga Bersudut Tegak",
      "sec-formula": "Mengapa Formula Luas Segi Tiga Bersudut Tegak Menggunakan Sinus?",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
      "sec-consistency": "Cara Memeriksa Sama Ada Kaki, Hipotenus, dan Sudut Anda Membentuk Segi Tiga Bersudut Tegak yang Sah",
      "sec-examples": "Contoh Langkah demi Langkah Luas Segi Tiga Bersudut Tegak Menggunakan Kaki dan Sudut",
      "sec-practical": "Aplikasi Kehidupan Nyata Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
      "sec-compare": "Mengapa Formula Berasaskan Sinus Memberikan Luas yang Sama dengan Formula Kaki?",
      "sec-angle-effect": "Bagaimana Sudut Tersepit Mempengaruhi Luas Segi Tiga Bersudut Tegak?",
      "sec-alternative": "Bolehkah Anda Mengira Luas Segi Tiga Bersudut Tegak Menggunakan Satu Kaki dan Sudutnya?",
      "sec-units": "Memahami Unit Sudut dan Pengukuran dalam Pengiraan Luas",
      "sec-mistakes": "Kesilapan Biasa Apabila Mengira Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
      "sec-verify": "Cara Memeriksa Sama Ada Luas Segi Tiga Bersudut Tegak Anda Betul",
      "sec-applications": "Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut dalam Amalan",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tegak yang Berkaitan",
      "sec-faq": "Soalan Lazim",
      "sec-conclusion": "Tiga Input Membawa Seluruh Luas"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Bersudut Tegak Menggunakan Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Ambil [[b=4]], [[c=5]], dan [[A=36.87^\\circ]]. Terapkan [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Hasilnya menamakan jumlah luas rata yang dikelilingi oleh ketiga-tiga sisi: enam unit persegi permukaan. Inilah tepat yang dikembalikan oleh Kalkulator Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut untuk input ini." },
          { "kind": "p", "text": "Kalkulator meminta tiga ukuran. Kaki [[b]] terletak di sebelah sudut [[A]]; hipotenus [[c]] ialah sisi terpanjang, bertentangan dengan sudut tegak; dan sudut [[A]] ialah sudut tirus yang terhimpit antara keduanya. Kerana [[\\sin(A)]] sama dengan nisbah kaki yang tiada [[a]] kepada hipotenus [[c]], formula membina semula ketinggian yang tiada tanpa mengukurnya. Mendarab [[b]], [[c]], dan [[\\sin(A)]] membentuk segi empat tepat yang melingkung; membahagi dengan dua memangkasnya menjadi segi tiga." },
          { "kind": "p", "text": "Ini penting apabila sisi ketiga sukar diukur. Lukisan mungkin memberikan hipotenus dan satu kaki, manakala protraktor atau langkah terdahulu membekalkan sudut. Sinus menutup jurang, jadi luas diperoleh daripada apa yang telah diketahui." }
        ]
      },
      "sec-anatomy": {
        "h2": "Memahami Sisi dan Sudut Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Sebelum formula masuk akal, label mesti tepat. Setiap simbol di bawah muncul dalam kalkulator, dan setiap satu membawa makna tunggal yang tetap." },
          { "kind": "h3", "text": "Apakah Segi Tiga Bersudut Tegak?" },
          { "kind": "p", "text": "Segi tiga bersudut tegak ialah segi tiga dengan satu sudut dalaman bersamaan 90 darjah. Dua sisi yang membentuk sudut itu ialah kaki, berserenjang antara satu sama lain; sisi yang bertentangan dengan sudut tegak ialah hipotenus. Kerana tiga sudut dalaman berjumlah 180 darjah, dua sudut tirus memenuhi [[A+B=90^\\circ]], yang menjadikannya pelengkap: mengetahui satu menentukan yang satu lagi." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak. Ia sentiasa sisi terpanjang, tidak kira bagaimana segi tiga diputar atau dilukis. Kalkulator menggunakannya sebagai sisi [[c]], jadi mengenalinya dengan betul ialah langkah pertama: cari sudut tegak, kemudian ambil sisi di seberangnya. Kaki tidak boleh memainkan peranan ini, walau sepanjang mana ia kelihatan dalam lukisan condong." },
          { "kind": "h3", "text": "Apakah Dua Kaki Itu?" },
          { "kind": "p", "text": "Dua kaki ialah sisi yang bertemu pada sudut tegak, berserenjang antara satu sama lain. Kaki [[a]] terletak bertentangan dengan sudut [[A]]; kaki [[b]] terletak bertentangan dengan sudut [[B]]. Kalkulator mengambil kaki [[b]], yang bersebelahan dengan sudut [[A]], sebagai input pertamanya. Bersama-sama kaki membentuk sudut di mana sudut 90 darjah berada." },
          { "kind": "h3", "text": "Memahami Sudut A" },
          { "kind": "p", "text": "Sudut [[A]] ialah sudut tirus yang dibentuk oleh kaki [[b]] dan hipotenus [[c]]. Ia ialah sudut tersepit antara dua input sisi kalkulator, jadi [[\\angle A=\\text{angle between }b\\text{ and }c]]. Gandingan ini tetap: di mana sahaja formula menyebut [[A]], ia bermaksud sudut di mana kaki yang diketahui bertemu hipotenus, bukan sudut di hujung jauh kaki [[b]]." },
          { "kind": "h3", "text": "Sisi Bertentangan dan Bersebelahan Relatif kepada Sudut A" },
          { "kind": "p", "text": "Berdiri pada sudut [[A]] dan pandang merentasi segi tiga. Sisi yang anda hadapi tanpa menyentuhnya ialah sisi bertentangan; sisi yang membentuk sudut bersama hipotenus ialah sisi bersebelahan. Label ini mengikut sudut rujukan, jadi menukar rujukan daripada [[A]] kepada [[B]] menukar kaki yang mana." },
          { "kind": "h3", "text": "Memahami Sudut Tersepit" },
          { "kind": "p", "text": "Sudut tersepit ialah sudut yang dibentuk oleh dua sisi yang dipilih. Formula luas mendarab [[b]] dan [[c]], jadi sudut yang diperlukannya ialah yang terperangkap antara keduanya: sudut [[A]]. Gandingan betul untuk kalkulator ini ialah [[b,\\;c,\\;A]]. Menggunakan sebarang sudut lain dengan dua sisi yang sama memecahkan gandingan yang diandaikan formula, jadi jangan kelirukan sudut [[A]] dengan sudut [[B]]." }
        ],
        "imgAlt": "Segi tiga bersudut tegak ABC: kaki b dan hipotenus c diserlahkan, sudut tersepit A, kaki a yang tiada dilabel",
        "figcaption": "Segi tiga ABC: kaki bersebelahan b dan hipotenus c yang diserlahkan membentuk sudut tersepit A; sisi a ialah kaki bertentangan yang tiada."
      },
      "sec-sine": {
        "h2": "Memahami Fungsi Sinus dalam Pengiraan Segi Tiga Bersudut Tegak",
        "blocks": [
          { "kind": "p", "text": "Sinus ialah nisbah, bukan panjang. Untuk sudut tirus, [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] Dalam segi tiga ini ia menjadi [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Nisbah membandingkan sisi di seberang sudut dengan sisi terpanjang, jadi ia nombor tulen tanpa unit. Untuk sudut tirus nilainya sentiasa terletak antara 0 dan 1, dan ia tepat membolehkan satu sisi menggantikan sisi lain." },
          { "kind": "h3", "text": "Bagaimana Sinus Membantu Mencari Kaki yang Tiada" },
          { "kind": "p", "text": "Mula daripada [[\\sin(A)=\\frac{a}{c}]]. Darab kedua-dua sisi dengan [[c]]: [[[\\boxed{a=c\\sin(A)}]]] Hipotenus menskalakan nisbah kembali menjadi panjang, dan panjang itu ialah kaki yang tiada. Kalkulator tidak pernah meminta [[a]] kerana satu penyusunan semula ini mendapatkannya daripada [[c]] dan [[A]]. Setiap langkah kemudian formula luas bergantung pada penggantian ini." },
          { "kind": "h3", "text": "Contoh Berangka" },
          { "kind": "p", "text": "Diberi [[c=5]] dan [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Kaki yang tiada ialah 3 unit panjang, yang melengkapkan segi tiga 3-4-5 yang biasa. Satu pendaraban menggantikan ukuran berasingan." },
          { "kind": "h3", "text": "Bagaimana Sinus Berbeza daripada Kosinus dan Tangen" },
          { "kind": "p", "text": "Kosinus menggunakan sisi bersebelahan: [[\\cos(A)=\\frac{b}{c}]]. Tangen menggunakan dua kaki: [[\\tan(A)=\\frac{a}{b}]]. Setiap nisbah menjawab soalan berbeza. Sinus ialah yang diperlukan kalkulator ini kerana yang tidak diketahui ialah kaki bertentangan [[a]] dan sisi yang diketahui ialah hipotenus [[c]]. Apabila nilai diketahui berubah, nisbah berguna berubah bersamanya, tetapi tiada yang lain dalam panduan ini meninggalkan keluarga sinus." }
        ]
      },
      "sec-formula": {
        "h2": "Mengapa Formula Luas Segi Tiga Bersudut Tegak Menggunakan Sinus?",
        "blocks": [
          { "kind": "p", "text": "Mula dengan peraturan piawai: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Untuk segi tiga ini asas semula jadi ialah kaki [[b]] dan ketinggian tegak ialah kaki [[a]], kerana kaki bertemu pada 90 darjah. Itu memberikan [[K=\\frac{ab}{2}]]. Kalkulator tidak meminta [[a]], jadi formula mesti membinanya semula. Daripada nisbah sinus, [[a=c\\sin(A)]]. Gantikan: [[K=\\frac{b(c\\sin(A))}{2}]], oleh itu [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Pembahagian dengan dua bertahan daripada peraturan asas-tinggi; faktor sinus ialah kaki yang tiada yang menyamar." },
          { "kind": "h3", "text": "Mengapa Formula Dibahagi Dua?" },
          { "kind": "p", "text": "Segi tiga dengan asas dan ketinggian tegak yang diberi mengisi tepat separuh daripada segiempat selari yang dibina pada asas dan ketinggian yang sama. Menggandakan sebarang segi tiga sepanjang satu sisi melengkapkan segiempat selari itu, jadi segi tiga memiliki separuh luasnya. Pembahagian dengan dua ialah geometri, bukan konvensyen, dan ia terpakai tidak kira formula mana membekalkan asas dan ketinggian." },
          { "kind": "h3", "text": "Bagaimana Sinus Menggantikan Ketinggian yang Tiada?" },
          { "kind": "p", "text": "Ketinggian tegak dalam [[K=\\frac{ab}{2}]] ialah kaki [[a]]. Kerana [[\\sin(A)=\\frac{a}{c}]], mendarab hipotenus dengan sinus meregang nisbah tanpa dimensi kembali menjadi panjang [[a]]. Pengguna mengukur [[c]] dan [[A]] bukannya [[a]], dan hasil darab [[c\\sin(A)]] melakukan penukaran senyap di dalam formula." },
          { "kind": "h3", "text": "Mengapa Hipotenus Didarab dengan Kaki Bersebelahan?" },
          { "kind": "p", "text": "Peraturan umum untuk sebarang segi tiga ialah dua sisi dan sudut tersepitnya menentukan luas. Di sini dua sisi yang diketahui ialah [[b]] dan [[c]], dan sudut tersepitnya ialah [[A]]. Formula mendarab tepat dua sisi itu, kemudian menskalakan dengan [[\\sin(A)]] dan membelah dua. Sebarang gandingan sisi lain akan menuntut sudut tersepit yang berbeza." },
          { "kind": "h3", "text": "Adakah Formula Ini Berfungsi untuk Segi Tiga Lain?" },
          { "kind": "p", "text": "Ya, dalam bentuk umumnya: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], di mana [[x]] dan [[y]] ialah sebarang dua sisi dan [[\\theta]] ialah sudut antaranya. Versi segi tiga bersudut tegak ialah peraturan itu dengan [[x=b]], [[y=c]], dan [[\\theta=A]]. Kalkulator menambah satu sekatan: tiga input juga mesti memenuhi hubungan segi tiga bersudut tegak, seperti [[b=c\\cos(A)]]. Formula umum mengira luas untuk sebarang pasangan sudut tersepit; kalkulator ini mentafsir hasilnya sebagai segi tiga bersudut tegak." }
        ],
        "imgAlt": "Segi tiga 3-4-5: sin A bersamaan 3 per 5 mengembalikan kaki a bersamaan 3, luas 6 oleh dua formula",
        "figcaption": "Daripada sinus kepada luas: sin A = 3/5 memberikan a = 3, jadi K = bc sin A / 2 = 6 sepadan dengan K = ab/2."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Kalkulator memerlukan tepat tiga input, dimasukkan mengikut urutan. Langkah di bawah mengikut susun atur skrin daripada ukuran yang diketahui kepada hasil yang disemak." }
        ],
        "steps": [
          "<strong>Kenal pasti kaki bersebelahan b.</strong> Kaki yang membentuk sudut A bersama hipotenus.",
          "<strong>Kenal pasti hipotenus c.</strong> Sisi terpanjang, bertentangan dengan sudut tegak.",
          "<strong>Kenal pasti sudut tirus tersepit A.</strong> Sudut antara kaki b dan hipotenus c.",
          "<strong>Gunakan unit serasi untuk kedua-dua sisi.</strong> Meter dengan meter, kaki dengan kaki, jangan dicampur.",
          "<strong>Masukkan kaki b ke dalam input pertama.</strong> Ini kaki bersebelahan dengan sudut A.",
          "<strong>Masukkan hipotenus c ke dalam input kedua.</strong> Ia mesti melebihi kaki b.",
          "<strong>Masukkan sudut A dalam darjah.</strong> Kalkulator menjangka darjah, bukan radian.",
          "<strong>Periksa bahawa sudut terletak antara 0 dan 90 darjah.</strong> Titik hujung tidak menggambarkan sebarang segi tiga.",
          "<strong>Sahkan bahawa hipotenus lebih panjang daripada kaki.</strong> Jika c tidak lebih besar daripada b, label adalah salah.",
          "<strong>Periksa bahawa ketiga-tiga nilai menggambarkan satu segi tiga bersudut tegak.</strong> Sahkan b bersamaan c cos(A), sekurang-kurangnya kira-kira.",
          "<strong>Klik Calculate Area.</strong> Hasil muncul dengan penggantian ditunjukkan.",
          "<strong>Semak hasilnya.</strong> Baca luas dan sahkan bahawa ia kelihatan munasabah.",
          "<strong>Baca langkah penyelesaian.</strong> Ia menunjukkan formula, nilai sinus, dan aritmetik.",
          "<strong>Periksa bahawa hasil akhir menggunakan unit persegi.</strong> Unit panjang kuasa dua, sepadan dengan input.",
          "<strong>Gunakan Reset sebelum memasukkan masalah lain.</strong> Ia mengosongkan ketiga-tiga medan untuk permulaan yang bersih."
        ],
        "closingParagraphs": [
          "Halaman menawarkan satu konfigurasi kalkulator: [[b]], [[c]], dan [[A]]. Tiada mod kedua; setiap luas pada halaman ini datang daripada formula sinus di atas."
        ]
      },
      "sec-consistency": {
        "h2": "Cara Memeriksa Sama Ada Kaki, Hipotenus, dan Sudut Anda Membentuk Segi Tiga Bersudut Tegak yang Sah",
        "blocks": [
          { "kind": "p", "text": "Ketiga-tiga input tidak bebas. Dalam segi tiga bersudut tegak, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], oleh itu [[[\\boxed{b=c\\cos(A)}]]] Tetapkan mana-mana dua daripada tiga nilai dan yang ketiga sudah ditentukan. Memasukkan tiga nombor yang tidak bersetuju tidak menggambarkan segi tiga yang diandaikan formula." },
          { "kind": "h3", "text": "Memeriksa Sudut daripada Dua Panjang Sisi" },
          { "kind": "p", "text": "Apabila [[b]] dan [[c]] diketahui, sudut dipaksa: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Contoh: [[b=4]], [[c=5]] memberikan [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Jika protraktor atau pengiraan terdahulu melaporkan sudut berbeza untuk sisi ini, salah satu nombor adalah salah. Sisi yang memutuskan; sudut mengikut." },
          { "kind": "h3", "text": "Memeriksa Panjang Sisi daripada Sudut" },
          { "kind": "p", "text": "Semakan berjalan sebaliknya juga. Diberi [[c=10]] dan [[A=60^\\circ]], kaki bersebelahan mestilah [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Memasukkan [[b=8]] dengan hipotenus dan sudut yang sama tidak menggambarkan segi tiga bersudut tegak yang sama, kerana [[10\\cos(60^\\circ)]] bersamaan 5, bukan 8. Setiap sudut menerima tepat satu panjang kaki bersebelahan untuk hipotenus tetap." },
          { "kind": "h3", "text": "Apa yang Berlaku Apabila Input Tidak Konsisten?" },
          { "kind": "p", "text": "Formula umum dua sisi dan sudut tersepit masih mengembalikan nombor untuk input tidak konsisten, kerana ia mendarab apa sahaja yang diterimanya. Tetapi apabila [[b\\neq c\\cos(A)]], ukuran tidak menggambarkan segi tiga bersudut tegak dengan [[c]] sebagai hipotenus dan [[b]] sebagai kaki bersebelahannya. Jawapan berangka bukan bukti geometri yang sah; semakan konsistensi ialah buktinya." },
          { "kind": "h3", "text": "Syarat Input Asas" },
          { "kind": "p", "text": "Input sah memenuhi [[c>b>0]], [[0^\\circ<A<90^\\circ]], dan [[b=c\\cos(A)]]. Yang pertama mengekalkan hipotenus terpanjang; yang kedua mengekalkan sudut tirus; yang ketiga mengikat tiga nilai menjadi satu segi tiga. Semak ketiga-tiganya sebelum mempercayai luas." }
        ],
        "imgAlt": "Tiga panel: 4, 5, 36.87 darjah yang sah; 5, 10, 60 darjah yang sah; 8, 10, 60 darjah yang tidak sah",
        "figcaption": "Input sah memenuhi b = c cos A; panel ketiga menunjukkan 10 cos 60 darjah = 5 tidak bersamaan 8."
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Luas Segi Tiga Bersudut Tegak Menggunakan Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Empat segi tiga bersudut tegak klasik menunjukkan kaedah pada saiz yang meningkat. Setiap contoh menggantikan ke dalam formula sinus dan kemudian mengesahkan hasilnya dengan formula dua kaki." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tegak 3-4-5" },
          { "kind": "p", "text": "Diberi [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Langkah 1: [[K=\\frac{bc\\sin(A)}{2}]]. Langkah 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Langkah 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Langkah 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Sahkan: [[a=5\\times0.6=3]], dan [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tegak 5-12-13" },
          { "kind": "p", "text": "Diberi [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], dengan [[\\sin(A)=\\frac{5}{13}]]. Gantikan: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. 13 dibatalkan: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Sahkan: [[a=13\\times(5/13)=5]], dan [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tegak 8-15-17" },
          { "kind": "p", "text": "Diberi [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], dengan [[\\sin(A)=\\frac{8}{17}]]. Kemudian [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Sahkan: [[a=8]], dan [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga Bersudut Tegak 7-24-25" },
          { "kind": "p", "text": "Diberi [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], dengan [[\\sin(A)=\\frac{7}{25}]]. Kemudian [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Sahkan: [[a=7]], dan [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Perbandingan Contoh Asas" }
        ],
        "table": {
          "headers": ["Jenis segi tiga", "Kaki b yang diketahui", "Hipotenus c", "Sudut A", "Luas yang dikira"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplikasi Kehidupan Nyata Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi kerja membawa formula daripada halaman ke bengkel, tapak, dan studio. Setiap satu menamakan panel, bahagian, profil, atau model ringkas segi tiga bersudut tegak, mengerjakan tiga input kalkulator melalui formula, dan menyatakan andaian di sebalik nombor. Di mana objek sebenar melengkung atau tidak sekata, pengiraan meliputi segi tiga yang dimodelkan sahaja." },
          { "kind": "h3", "text": "Contoh 1: Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Tingkap kaca segi tiga bersudut tegak mempunyai [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Input kalkulator: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Gantikan: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Ini ialah luas kaca segi tiga rata sebelum elaun bingkai ditolak." },
          { "kind": "h3", "text": "Contoh 2: Panel Sokongan Bumbung" },
          { "kind": "p", "text": "Bahagian sokongan bumbung segi tiga bersudut tegak mempunyai [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Input: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Kemudian [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Hasil menggambarkan bahagian sokongan segi tiga rata, bukan seluruh bumbung." },
          { "kind": "h3", "text": "Contoh 3: Profil Sisi Tanjakan Segi Tiga" },
          { "kind": "p", "text": "Profil tanjakan segi tiga bersudut tegak yang diringkaskan mempunyai [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Input: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Kemudian [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Ini ialah profil sisi segi tiga, bukan permukaan berjalan condong." },
          { "kind": "h3", "text": "Contoh 4: Plat Gusset Keluli" },
          { "kind": "p", "text": "Plat sokongan keluli segi tiga mempunyai [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Input: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Kemudian [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] Luas sahaja tidak menetapkan kekuatan struktur atau kapasiti beban." },
          { "kind": "h3", "text": "Contoh 5: Bahagian Taman Segi Tiga" },
          { "kind": "p", "text": "Bahagian taman segi tiga bersudut tegak yang diringkaskan mempunyai [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Input: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Kemudian [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Ini membantu menganggarkan luas bahagian segi tiga untuk penanaman." },
          { "kind": "h3", "text": "Contoh 6: Panel Layar Segi Tiga" },
          { "kind": "p", "text": "Bahagian layar segi tiga bersudut tegak mempunyai [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Input: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Kemudian [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Jahitan dan elaun bahan dikecualikan daripada angka panel rata ini." },
          { "kind": "h3", "text": "Contoh 7: Templat Potongan Papan Lapis" },
          { "kind": "p", "text": "Templat papan lapis segi tiga bersudut tegak mempunyai [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Input: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Kemudian [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Luas membantu menganggarkan bahan rata yang diperlukan sebelum sisa potongan." },
          { "kind": "h3", "text": "Contoh 8: Papan Tanda Jalan Segi Tiga" },
          { "kind": "p", "text": "Panel papan tanda segi tiga bersudut tegak mempunyai [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Input: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Kemudian [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Ini menganggarkan luas muka papan tanda rata." },
          { "kind": "h3", "text": "Contoh 9: Bahagian Ukur Tanah" },
          { "kind": "p", "text": "Bahagian ukur segi tiga bersudut tegak mempunyai [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Input: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Kemudian [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Hasil terpakai kepada bahagian tanah segi tiga bersudut tegak yang diringkaskan." },
          { "kind": "h3", "text": "Contoh 10: Sokongan Awning Segi Tiga" },
          { "kind": "p", "text": "Bahagian sokongan awning segi tiga bersudut tegak mempunyai [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Input: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Kemudian [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Ini ialah bahagian segi tiga rata, bukan seluruh kain awning yang tidak sekata." },
          { "kind": "h3", "text": "Contoh 11: Keratan Rentas Tapak Industri" },
          { "kind": "p", "text": "Bahagian tanah industri segi tiga bersudut tegak yang diringkaskan mempunyai [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Input: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Kemudian [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Tapak sebenar yang tidak sekata mungkin perlu dibahagi kepada pelbagai bentuk." },
          { "kind": "h3", "text": "Contoh 12: Bahagian Hujung Bumbung Gudang" },
          { "kind": "p", "text": "Bahagian hujung bumbung gudang segi tiga bersudut tegak yang besar mempunyai [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Input: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Kemudian [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Hasil menganggarkan bahagian hujung segi tiga rata." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Aplikasi praktikal", "Kaki a", "Kaki b yang diketahui", "Hipotenus c", "Sudut A", "Luas yang dikira", "Unit ukuran"],
          "rows": [
            ["Tingkap kaca", "3", "4", "5", "36.87°", "6", "m²"],
            ["Sokongan bumbung", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Profil tanjakan", "6", "8", "10", "36.87°", "24", "m²"],
            ["Plat gusset", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Bahagian taman", "7", "24", "25", "16.26°", "84", "m²"],
            ["Panel layar", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Templat papan lapis", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Papan tanda jalan", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Bahagian ukur", "9", "40", "41", "12.68°", "180", "m²"],
            ["Sokongan awning", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Bahagian industri", "11", "60", "61", "10.39°", "330", "m²"],
            ["Hujung bumbung gudang", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Mengapa Formula Berasaskan Sinus Memberikan Luas yang Sama dengan Formula Kaki?",
        "blocks": [
          { "kind": "p", "text": "Mula dengan [[K=\\frac{bc\\sin(A)}{2}]] dan ingat [[\\sin(A)=\\frac{a}{c}]]. Gantikan: [[K=\\frac{bc(a/c)}{2}]]. [[c]] dibatalkan, meninggalkan [[[\\boxed{K=\\frac{ab}{2}}]]] Formula sinus tidak mencipta luas baharu; ia mengira luas yang sama daripada set nilai diketahui yang berbeza, dengan kaki yang tiada diseludup masuk melalui nisbah sinus." },
          { "kind": "h3", "text": "Bilakah Formula Sinus Lebih Berguna?" },
          { "kind": "p", "text": "Gunakannya apabila satu kaki diukur, hipotenus diketahui, dan sudut tersepit tersedia, manakala sisi ketiga tidak pernah diukur secara langsung. Ukuran lapangan, lukisan berskala, dan data ukur sering tiba dalam gabungan ini tepat. Formula menukar tiga nombor itu menjadi luas dalam satu baris, tanpa lencongan untuk mencari kaki yang tiada dahulu." },
          { "kind": "h3", "text": "Bilakah Formula Kaki Lebih Mudah?" },
          { "kind": "p", "text": "Apabila kedua-dua kaki berserenjang sudah diketahui, [[K=\\frac{ab}{2}]] lebih pendek: tiada sinus, tiada sudut, satu pendaraban dan pembelah dua. Capai versi sinus hanya apabila kaki tiada dan sudut boleh membekalkannya." },
          { "kind": "h3", "text": "Perbandingan Berangka" },
          { "kind": "p", "text": "Pada segi tiga 3-4-5, kaedah sinus memberikan [[K=\\frac{4\\times5\\times0.6}{2}=6]], dan kaedah kaki memberikan [[K=\\frac{3\\times4}{2}=6]]. Kedua-dua laluan melalui geometri yang sama, jadi keduanya mesti bersetuju. Apabila tidak, input atau aritmetik yang bersalah, bukan formula." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Bagaimana Sudut Tersepit Mempengaruhi Luas Segi Tiga Bersudut Tegak?",
        "blocks": [
          { "kind": "p", "text": "Dengan hipotenus tetap, sudut tidak boleh berubah bebas: hubungan segi tiga bersudut tegak mengikat [[b]] dan [[A]] bersama. Melayan kekangan itu secara jujur menunjukkan tepat bagaimana luas naik dan turun apabila [[A]] bergerak antara 0 dan 90 darjah." },
          { "kind": "h3", "text": "Apa yang Berlaku Apabila Sudut A Meningkat?" },
          { "kind": "p", "text": "Dengan [[c]] tetap, [[b=c\\cos(A)]] dan [[a=c\\sin(A)]], jadi [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Identiti sudut ganda memberikan [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] Luas bertambah apabila [[A]] menghampiri 45 darjah dari bawah, memuncak pada 45 darjah, kemudian menurun menuju 90 darjah. Sudut pelengkap, seperti 30° dan 60°, memberikan luas yang sama kerana [[\\sin(2A)]] simetri sekitar 45 darjah." },
          { "kind": "h3", "text": "Luas Maksimum untuk Hipotenus Tetap" },
          { "kind": "p", "text": "Kemuncak berlaku pada [[A=45^\\circ]], di mana [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Di sana [[a=b=\\frac{c}{\\sqrt{2}}]], jadi segi tiga yang memaksimumkan ialah sama kaki. Hipotenus tetap tidak boleh mengurung lebih luas segi tiga bersudut tegak daripada suku kuasa duanya, dan hanya bentuk sama kaki mencapainya." },
          { "kind": "h3", "text": "Contoh Berangka" },
          { "kind": "p", "text": "Diberi [[c=10]], silingnya ialah [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] Pada [[A=45^\\circ]] kaki ialah [[10/\\sqrt{2}\\approx7.07]] setiap satu, dan [[\\frac{7.07\\times7.07}{2}\\approx25]]. Perhatikan bahawa 90° bukan input tirus yang boleh diterima: ia akan meruntuhkan segi tiga menjadi garisan." }
        ]
      },
      "sec-alternative": {
        "h2": "Bolehkah Anda Mengira Luas Segi Tiga Bersudut Tegak Menggunakan Satu Kaki dan Sudutnya?",
        "blocks": [
          { "kind": "p", "text": "Ya, dengan tangen bukannya sinus. Jika kaki [[b]] dan sudut [[A]] diketahui, kaki bertentangan diperoleh daripada [[a=b\\tan(A)]]. Masukkan itu ke dalam [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], oleh itu [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Dari sudut yang satu lagi, [[b=a\\tan(B)]] memberikan [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Ini kaedah alternatif tulen, berguna apabila hipotenus tidak diketahui tetapi kaki dan sudutnya ada di tangan. Ia alternatif matematik, bukan mod tambahan dalam kalkulator di atas, yang berfungsi hanya dengan [[b]], [[c]], dan [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Sudut dan Pengukuran dalam Pengiraan Luas",
        "blocks": [
          { "kind": "p", "text": "Luas mewarisi unitnya daripada dua panjang yang didarab untuk membuatnya, manakala sudut tidak menyumbang sebarang unit. Mengekalkan tiga input dalam unit serasi ialah yang memastikan jawapan jujur." },
          { "kind": "h3", "text": "Darjah lawan Radian" },
          { "kind": "p", "text": "Kalkulator menjangka darjah. Tukar dengan [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; sebagai contoh, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Sudut mod radian yang disuap ke medan mod darjah mengubah nilai sinus secara senyap: [[\\sin(30^\\circ)=0.5]] tetapi [[\\sin(30\\text{ radians})\\approx-0.99]], yang akan merosakkan luas. Tukar dahulu, kemudian masukkan." },
          { "kind": "h3", "text": "Mengapa Sinus Tidak Mempunyai Unit" },
          { "kind": "p", "text": "Sinus ialah nisbah dua panjang, jadi unit dibatalkan: bertentangan per hipotenus ialah nombor tulen. Unit persegi dalam jawapan datang sepenuhnya daripada mendarab [[b]] dengan [[c]]. Itulah sebabnya perakaunan unit formula mudah: padankan dua unit panjang, dan unit luas mengikut." },
          { "kind": "h3", "text": "Unit Ukuran Biasa" },
          { "kind": "p", "text": "Meter memberikan meter persegi, sentimeter memberikan sentimeter persegi, kaki memberikan kaki persegi, inci memberikan inci persegi: [[\\text{m}\\times\\text{m}=\\text{m}^2]], dan pola yang sama terpakai untuk setiap unit panjang. Unit campuran, seperti sentimeter dengan meter, mesti ditukar kepada satu unit sebelum formula digunakan, atau nombor tidak mempunyai makna yang bersih." },
          { "kind": "h3", "text": "Mengapa Pembundaran Awal Boleh Mempengaruhi Hasil" },
          { "kind": "p", "text": "Kekalkan ketepatan penuh melalui langkah perantaraan dan bundarkan hanya jawapan akhir. Sudut tepat di sebalik 36.87° ialah 36.869897°, yang sinusnya tepat 0.6; membundarkan sudut dahulu menggerakkan sinus sedikit, dan pergerakan kecil itu berganda melalui [[b]] dan [[c]] ke dalam luas. Kecil pada satu segi tiga, ketara merentasi keseluruhan projek." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Biasa Apabila Mengira Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawapan salah dalam topik ini berpunca daripada input yang salah label bukannya aritmetik buruk. Enam belas kesilapan di bawah ialah yang muncul berulang kali, setiap satu dengan punca dan pembetulannya." },
          { "kind": "h3", "text": "1. Mengelirukan Hipotenus dengan Kaki Berserenjang" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak dan sisi terpanjang; kaki bertemu dengan sudut tegak. Menukar keduanya menyuap panjang yang salah ke dalam [[c]]. Pembetulan: cari sudut tegak dahulu, kemudian ambil sisi di seberangnya." },
          { "kind": "h3", "text": "2. Memadankan Sudut A dengan Kaki yang Salah" },
          { "kind": "p", "text": "Sudut [[A]] terletak antara kaki [[b]] dan hipotenus [[c]]. Memadankannya dengan kaki [[a]] mengacaukan hubungan sudut tersepit yang diandaikan formula. Pembetulan: jejak dua sisi yang membentuk sudut yang anda masukkan." },
          { "kind": "h3", "text": "3. Mengelirukan Sisi Bertentangan dan Bersebelahan" },
          { "kind": "p", "text": "Bertentangan bermaksud di seberang sudut; bersebelahan bermaksud menyentuhnya, di sebelah hipotenus. Label bertukar apabila sudut rujukan berubah. Pembetulan: berdiri pada sudut [[A]] dan namakan setiap sisi dari sana." },
          { "kind": "h3", "text": "4. Menggunakan Sudut B bukannya Sudut A Tanpa Menukar Sisi yang Sepadan" },
          { "kind": "p", "text": "Sudut [[B]] berpasangan dengan sisi [[a]] dan [[c]], bukan [[b]] dan [[c]]. Memasukkan [[B]] sambil mengekalkan [[b]] dan [[c]] mengira kuantiti yang berbeza. Pembetulan: kekalkan setiap sudut dengan gandingan sisinya sendiri, atau tukar [[B]] kepada [[A]] dahulu." },
          { "kind": "h3", "text": "5. Menggunakan Radian Apabila Kalkulator Menjangka Darjah" },
          { "kind": "p", "text": "Memasukkan 0.6435 (radian) di mana 36.87 (darjah) sepatutnya mengubah [[\\sin(A)]] sepenuhnya. Pembetulan: semak unit kalkulator, tukar dengan [[\\times\\frac{180}{\\pi}]] jika perlu, kemudian masukkan." },
          { "kind": "h3", "text": "6. Lupa Membahagi dengan Dua" },
          { "kind": "p", "text": "Mendarab [[b\\times c\\times\\sin(A)]] memberikan luas segiempat selari yang melingkung, dua kali ganda segi tiga. Pembetulan: belah dua hasil darab; /2 ialah sebahagian formula, bukan pilihan." },
          { "kind": "h3", "text": "7. Lupa Fungsi Sinus" },
          { "kind": "p", "text": "Mengira [[\\frac{bc}{2}]] sahaja melayan [[\\sin(A)]] sebagai 1, yang hanya benar pada 90°, input tirus yang mustahil. Pembetulan: sertakan [[\\sin(A)]]; ia membawa bahagian kaki yang tiada." },
          { "kind": "h3", "text": "8. Memasukkan Kaki yang Lebih Panjang daripada Hipotenus" },
          { "kind": "p", "text": "Tiada kaki boleh melebihi hipotenus, jadi [[c\\leq b]] bermaksud label adalah salah. Pembetulan: kenal pasti semula sisi; ukuran terpanjang ialah [[c]]." },
          { "kind": "h3", "text": "9. Memasukkan Sudut 0 Darjah" },
          { "kind": "p", "text": "Pada 0°, [[\\sin(A)=0]] dan segi tiga meruntuh menjadi garisan dengan luas sifar. Pembetulan: gunakan sudut tirus tulen, ketat antara 0° dan 90°." },
          { "kind": "h3", "text": "10. Memasukkan Sudut 90 Darjah sebagai Sudut Tirus" },
          { "kind": "p", "text": "90° ialah sudut tegak [[C]], bukan sudut tirus; [[\\sin(90^\\circ)=1]] menukar formula menjadi [[\\frac{bc}{2}]], yang bukan luas segi tiga ini. Pembetulan: masukkan sudut tirus antara [[b]] dan [[c]]." },
          { "kind": "h3", "text": "11. Mencampur Unit Panjang yang Berbeza" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] dengan [[c=5\\text{ m}]] mendarab skala yang tidak serasi. Pembetulan: tukar kedua-duanya kepada satu unit (400 cm = 4 m) sebelum mengira." },
          { "kind": "h3", "text": "12. Melaporkan Luas dalam Unit Linear" },
          { "kind": "p", "text": "Luas 6 m² bukan 6 m. Pembetulan: tulis unit kuasa dua bersama nombor, setiap kali." },
          { "kind": "h3", "text": "13. Membundarkan Sudut Terlalu Awal" },
          { "kind": "p", "text": "Membundarkan 36.869897° kepada 36.87° sebelum mengambil sinus menggeser hasil sedikit; membundar kepada 37° menggesernya lebih. Pembetulan: kekalkan ketepatan penuh sehingga jawapan akhir." },
          { "kind": "h3", "text": "14. Menganggap Tiga Input Boleh Dipilih Secara Bebas" },
          { "kind": "p", "text": "[[b]], [[c]], dan [[A]] dihubungkan oleh [[b=c\\cos(A)]]; memilih ketiga-tiganya bebas menentukan segi tiga secara berlebihan. Pembetulan: terbitkan nilai ketiga daripada dua yang lain bukannya menciptanya." },
          { "kind": "h3", "text": "15. Menggunakan Sudut yang Tidak Konsisten dengan Panjang Sisi yang Dimasukkan" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] gagal semakan, kerana [[10\\cos(60^\\circ)=5\\neq8]]. Formula masih mengembalikan nombor, tetapi ia bukan luas segi tiga bersudut tegak ini. Pembetulan: jalankan semakan [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Menganggap Hasil Kalkulator Berangka Sentiasa Mewakili Segi Tiga Bersudut Tegak yang Sah" },
          { "kind": "p", "text": "Aritmetik berjaya pada sebarang nombor yang ditaip; geometri tidak. Pembetulan: sahkan dengan semakan konsistensi dan formula bebas sebelum mempercayai jawapan." },
          { "kind": "h3", "text": "Salah lawan Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Gunakan [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Betul: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Tersilap memasukkan sudut [[B=53.13^\\circ]] dengan sisi yang sama: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Sudut [[B]] bukan sudut tersepit antara [[b]] dan [[c]]; gandingan sisi yang betul ialah [[a]] dan [[c]]. Kesilapan tidak kelihatan dalam aritmetik dan jelas dalam geometri." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Sama Ada Luas Segi Tiga Bersudut Tegak Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Tujuh semakan bebas, semuanya ditunjukkan pada segi tiga 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Persetujuan antara laluan berbeza ialah bukti terkuat jawapan betul." },
          { "kind": "h3", "text": "Kaedah 1: Semak Formula Utama" },
          { "kind": "p", "text": "Kira semula [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Laluan kedua menangkap kesilapan taip dan sudut yang salah kunci." },
          { "kind": "h3", "text": "Kaedah 2: Semak Hubungan Kosinus" },
          { "kind": "p", "text": "Sahkan [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Ketidakpadanan bermaksud sudut dan sisi tergolong dalam segi tiga berbeza." },
          { "kind": "h3", "text": "Kaedah 3: Kira Kaki yang Tiada" },
          { "kind": "p", "text": "Sahkan [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Ini menyemak nilai sinus yang menyuap formula luas." },
          { "kind": "h3", "text": "Kaedah 4: Semak Teorem Pythagoras" },
          { "kind": "p", "text": "Sahkan [[a^2+b^2=c^2]]: [[9+16=25]]. Kegagalan di sini bermaksud pengenalpastian sisi adalah salah." },
          { "kind": "h3", "text": "Kaedah 5: Sahkan Menggunakan Dua Kaki" },
          { "kind": "p", "text": "Sahkan [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Dua kaedah, satu segi tiga, satu jawapan." },
          { "kind": "h3", "text": "Kaedah 6: Semak Sudut Pelengkap" },
          { "kind": "p", "text": "Sahkan [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Ini menangkap sudut yang diukur pada sudut yang salah." },
          { "kind": "h3", "text": "Kaedah 7: Semak Luas Maksimum" },
          { "kind": "p", "text": "Sahkan [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Luas melebihi siling adalah mustahil untuk hipotenus yang diberi." }
        ]
      },
      "sec-applications": {
        "h2": "Luas Segi Tiga Bersudut Tegak daripada Kaki dan Sudut dalam Amalan",
        "blocks": [
          { "kind": "p", "text": "Tiga input yang sama muncul di tempat yang tidak pernah menyebut trigonometri. Tukang kaca mengukur kaki tingkap dan pepenjurunya dan membaca sudut daripada bingkai; tukang bumbung mengetahui hipotenus sokongan daripada panjang kasau dan sudut daripada kecuraman. Dalam setiap kes sisi tegak yang tiada ialah yang sukar dicapai dengan pita pengukur, manakala hipotenus dan sudut ada di tangan. Formula sinus wujud untuk tepat ketidaksimetrian itu: ia menukar ukuran yang boleh diakses menjadi ketinggian yang tidak boleh diakses dan kemudian menjadi luas." },
          { "kind": "p", "text": "Empat panel di bawah menunjukkan pola pada skala berbeza. Tingkap kaca (6 m²) dan profil tanjakan (24 m²) menggunakan geometri 3-4-5 dan 6-8-10 skala meter; sokongan bumbung (30 ft²) menggunakan segi tiga 5-12-13; bahagian ukur (84 m²) menggunakan 7-24-25. Setiap panel melabel kaki bersebelahan, hipotenus, sudut tersepit, dan luas yang terhasil, supaya laluan daripada ukuran kepada jawapan kekal kelihatan." }
        ],
        "imgAlt": "Empat panel: tingkap kaca 6 m2, panel bumbung 30 ft2, profil tanjakan 24 m2, bahagian ukur 84 m2",
        "figcaption": "Empat kegunaan sebenar: tingkap, sokongan bumbung, profil tanjakan, dan bahagian ukur dengan luasnya."
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Segi Tiga Bersudut Tegak yang Berkaitan",
        "blocks": [
          { "kind": "p", "text": "Ukuran yang berbeza memerlukan kalkulator yang berbeza." }
        ]
      },
      "sec-faq": {
        "h2": "Soalan Lazim",
        "blocks": [
          { "kind": "p", "text": "Berikut ialah jawapan kepada soalan paling biasa tentang luas daripada kaki dan sudut." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tiga Input Membawa Seluruh Luas",
        "blocks": [
          { "kind": "p", "text": "Satu kaki, hipotenus, dan sudut antaranya ternyata mencukupi. Nisbah sinus membina semula kaki yang tiada, pembelahan dua menukar segi empat tepat yang melingkung menjadi segi tiga, dan hubungan konsistensi membolehkan setiap input disemak terhadap yang lain. Tiada dalam kaedah ini bersifat anggaran apabila input tepat." },
          { "kind": "p", "text": "Tabiat kerja mudah: label sisi daripada sudut A, kekalkan unit sepadan, sahkan b = c cos(A), dan sahkan jawapan melalui formula kaki. Dengan tabiat itu, K = bc sin(A)/2 boleh dipercayai seperti mana-mana pengiraan luas dalam geometri." }
        ]
      }
    }
  },
  "pl": {
    "faqs": [
      {
        "question": "Jaki jest wzór na pole znając jedną przyprostokątną i kąt?",
        "answer": "K = bc sin(A) / 2, gdzie b to przyprostokątna przyległa do kąta A, c to przeciwprostokątna, a A to kąt ostry między nimi. Na przykład b = 4, c = 5 i A = 36.87° dają K = (4 × 5 × 0.6) / 2 = 6 jednostek kwadratowych. Kąt należy wpisywać w stopniach, a oba boki muszą używać tej samej jednostki długości."
      },
      {
        "question": "Dlaczego wzór używa sinusa?",
        "answer": "Sinus odtwarza brakującą prostopadłą przyprostokątną z przeciwprostokątnej: ponieważ sin(A) = a/c, mnożenie daje a = c sin(A). Standardowy wzór na pole potrzebuje obu przyprostokątnych, K = ab/2, więc podstawienie wyrażenia z sinusem za a daje K = bc sin(A)/2. Sinus jest mostem między zmierzoną przeciwprostokątną a niezmierzoną wysokością."
      },
      {
        "question": "Który bok jest przyległy do kąta A?",
        "answer": "Przyprostokątna b jest przyległa do kąta A: to jeden z dwóch boków tworzących ten kąt, drugim jest przeciwprostokątna c. Przyprostokątna a jest przeciwległa do kąta A, leży po przeciwnej stronie trójkąta. Jeśli zmienisz odniesienie na kąt B, etykiety się zamieniają: b staje się bokiem przeciwległym, a a staje się bokiem przyległym."
      },
      {
        "question": "Czy mogę obliczyć pole, nie znając brakującej przyprostokątnej?",
        "answer": "Tak, to jest cały sens tego kalkulatora. Sinus kąta A koduje stosunek brakującej przyprostokątnej do przeciwprostokątnej, więc c sin(A) odtwarza przyprostokątną a bez jej mierzenia. Wpisz b, c i A, a wzór zajmie się resztą. Trzeci bok nigdy nie jest potrzebny jako osobne dane wejściowe."
      },
      {
        "question": "Jaka jest różnica między kątem A a kątem B?",
        "answer": "Oba są kątami ostrymi trójkąta prostokątnego i A + B = 90°. Kąt A leży między przyprostokątną b a przeciwprostokątną c; kąt B leży między przyprostokątną a a przeciwprostokątną c. Wzór K = bc sin(A)/2 wymaga konkretnie kąta A. Użycie kąta B przy bokach b i c daje błędny wynik; kąt B łączy się natomiast z bokami a i c."
      },
      {
        "question": "Czy kalkulator używa stopni czy radianów?",
        "answer": "Stopni. Kalkulator oczekuje stopni, więc wpisanie wartości w radianach daje zupełnie inny sinus i błędne pole. Najpierw przelicz radiany na stopnie wzorem stopnie = radiany × 180/π; na przykład π/6 radianów to 30°. Zawsze potwierdź jednostkę kąta przed obliczeniem wyniku."
      },
      {
        "question": "Czy mogę użyć dowolnego kąta przy danej przyprostokątnej i przeciwprostokątnej?",
        "answer": "Nie. Trzy dane wejściowe muszą spełniać b = c cos(A), więc kąt jest ustalony, gdy tylko wybierzesz boki. Dla b = 4 i c = 5 kąt A musi wynosić około 36.87°. Wpisanie innego kąta opisuje inny trójkąt, a wynik nie będzie odpowiadał zamierzonemu trójkątowi prostokątnemu."
      },
      {
        "question": "Jak sprawdzić, czy moje pomiary tworzą poprawny trójkąt prostokątny?",
        "answer": "Zweryfikuj trzy warunki: przeciwprostokątna jest dłuższa od przyprostokątnej (c > b > 0), kąt leży ściśle między 0° a 90°, i zachodzi b = c cos(A). Dla większej pewności sprawdź jeszcze a = c sin(A) oraz twierdzenie Pitagorasa a² + b² = c². Jeśli któryś test zawiedzie, co najmniej jeden pomiar lub jedna etykieta jest błędna."
      },
      {
        "question": "Czy mogę obliczyć pole, znając obie przyprostokątne?",
        "answer": "Tak, i krótszy wzór K = ab/2 stosuje się bezpośrednio, bez kąta ani sinusa. Dla przyprostokątnych 3 i 4, K = 6. Kalkulator z sinusem jest przeznaczony na wypadek, gdy brakuje jednej przyprostokątnej; gdy znasz obie przyprostokątne, wzór z przyprostokątnymi jest prostszy i daje identyczny wynik."
      },
      {
        "question": "Co się stanie, jeśli wpiszę zły kąt?",
        "answer": "Kalkulator mnoży to, co otrzyma, więc zły kąt daje złe pole bez żadnego ostrzeżenia. Wpisanie kąta B = 53.13° zamiast A = 36.87° przy b = 4 i c = 5 daje 8 zamiast 6. Zawsze upewnij się, że wpisany kąt to ten między przyprostokątną b a przeciwprostokątną."
      },
      {
        "question": "Jakie jest maksymalne możliwe pole przy ustalonej przeciwprostokątnej?",
        "answer": "K = c²/4, osiągane gdy kąt A = 45°, a trójkąt jest równoramienny o przyprostokątnych c/√2. Dla przeciwprostokątnej 10 sufit wynosi 25 jednostek kwadratowych. Żaden trójkąt prostokątny o tej przeciwprostokątnej nie może zamknąć większego pola. Jeśli twój wynik przekracza c²/4, dane wejściowe są niespójne."
      },
      {
        "question": "Czym różni się wzór z sinusem od standardowego wzoru podstawa-wysokość?",
        "answer": "Nie ma żadnej różnicy matematycznej: podstawienie sin(A) = a/c do K = bc sin(A)/2 daje K = ab/2, standardowy wzór podstawa-wysokość. Wersja z sinusem to po prostu ten sam wzór przepisany dla innych danych. Użyj postaci z sinusem, gdy znasz przeciwprostokątną i kąt; użyj ab/2, gdy znasz obie przyprostokątne."
      }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator pola trójkąta prostokątnego z kąta",
      "Kalkulator boku trójkąta prostokątnego z kąta",
      "Kalkulator boku trójkąta prostokątnego",
      "Kalkulator stosunków trygonometrycznych trójkąta prostokątnego"
    ],
    "relatedIntro": "Różne pomiary wymagają różnych kalkulatorów.",
    "faqHeading": "Często zadawane pytania",
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego znając przyprostokątną i kąt",
      "sec-anatomy": "Budowa trójkąta prostokątnego: boki i kąty",
      "sec-sine": "Rola funkcji sinus w obliczeniach dla trójkąta prostokątnego",
      "sec-formula": "Dlaczego wzór na pole trójkąta prostokątnego używa sinusa?",
      "sec-howto": "Jak korzystać z kalkulatora pola trójkąta prostokątnego z przyprostokątnej i kąta",
      "sec-consistency": "Jak sprawdzić, czy przyprostokątna, przeciwprostokątna i kąt tworzą poprawny trójkąt prostokątny",
      "sec-examples": "Przykłady obliczania pola trójkąta prostokątnego krok po kroku",
      "sec-practical": "Praktyczne zastosowania pola trójkąta prostokątnego z przyprostokątnej i kąta",
      "sec-compare": "Dlaczego wzór z sinusem daje to samo pole co wzór z przyprostokątnymi?",
      "sec-angle-effect": "Jak kąt zawarty wpływa na pole trójkąta prostokątnego?",
      "sec-alternative": "Czy pole trójkąta prostokątnego można obliczyć znając jedną przyprostokątną i jej kąt?",
      "sec-units": "Jednostki kątów i pomiarów w obliczeniach pola",
      "sec-mistakes": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego z przyprostokątnej i kąta",
      "sec-verify": "Jak sprawdzić, czy pole trójkąta prostokątnego jest poprawne",
      "sec-applications": "Pole trójkąta prostokątnego z przyprostokątnej i kąta w praktyce",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Trzy dane wejściowe niosą całe pole"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego znając przyprostokątną i kąt",
        "blocks": [
          { "kind": "p", "text": "Weź [[b=4]], [[c=5]] i [[A=36.87^\\circ]]. Zastosuj [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Wynik nazywa całkowitą płaską powierzchnię zamkniętą przez trzy boki: sześć jednostek kwadratowych powierzchni. Dokładnie to zwraca kalkulator pola trójkąta prostokątnego z przyprostokątnej i kąta dla tych danych." },
          { "kind": "p", "text": "Kalkulator pyta o trzy pomiary. Przyprostokątna [[b]] leży obok kąta [[A]]; przeciwprostokątna [[c]] to najdłuższy bok, naprzeciw kąta prostego; a kąt [[A]] to kąt ostry ściśnięty między nimi. Ponieważ [[\\sin(A)]] równa się stosunkowi brakującej przyprostokątnej [[a]] do przeciwprostokątnej [[c]], wzór odtwarza brakującą wysokość bez jej mierzenia. Mnożenie [[b]], [[c]] i [[\\sin(A)]] tworzy otaczający prostokąt; dzielenie przez dwa przycina go do trójkąta." },
          { "kind": "p", "text": "Ma to znaczenie zawsze, gdy trzeci bok jest niewygodny do zmierzenia. Rysunek może podawać przeciwprostokątną i jedną przyprostokątną, podczas gdy kątomierz lub wcześniejszy krok dostarcza kąt. Sinus zamyka lukę, więc pole wynika z tego, co już jest znane." }
        ]
      },
      "sec-anatomy": {
        "h2": "Budowa trójkąta prostokątnego: boki i kąty",
        "blocks": [
          { "kind": "p", "text": "Zanim wzór nabierze sensu, etykiety muszą być dokładne. Każdy symbol poniżej pojawia się w kalkulatorze i każdy niesie jedno, stałe znaczenie." },
          { "kind": "h3", "text": "Co to jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny to trójkąt, którego jeden kąt wewnętrzny wynosi 90 stopni. Dwa boki tworzące ten kąt to przyprostokątne, prostopadłe do siebie; bok naprzeciw kąta prostego to przeciwprostokątna. Ponieważ trzy kąty wewnętrzne sumują się do 180 stopni, dwa kąty ostre spełniają [[A+B=90^\\circ]], co czyni je dopełniającymi się: znajomość jednego wyznacza drugi." },
          { "kind": "h3", "text": "Co to jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta prostego. Jest zawsze najdłuższym bokiem, niezależnie od tego, jak trójkąt jest obrócony lub narysowany. Kalkulator używa jej jako boku [[c]], więc poprawne jej rozpoznanie to pierwszy krok: znajdź kąt prosty, a potem weź bok naprzeciw niego. Przyprostokątna nigdy nie może pełnić tej roli, jakkolwiek długa by się wydawała na przekrzywionym rysunku." },
          { "kind": "h3", "text": "Czym są dwie przyprostokątne?" },
          { "kind": "p", "text": "Dwie przyprostokątne to boki spotykające się przy kącie prostym, prostopadłe do siebie. Przyprostokątna [[a]] leży naprzeciw kąta [[A]]; przyprostokątna [[b]] leży naprzeciw kąta [[B]]. Kalkulator przyjmuje przyprostokątną [[b]], tę przyległą do kąta [[A]], jako pierwsze dane wejściowe. Razem przyprostokątne tworzą róg, w którym żyje kąt 90 stopni." },
          { "kind": "h3", "text": "Zrozumienie kąta A" },
          { "kind": "p", "text": "Kąt [[A]] to kąt ostry utworzony przez przyprostokątną [[b]] i przeciwprostokątną [[c]]. To kąt zawarty między dwoma bokami wejściowymi kalkulatora, więc [[\\angle A=\\text{angle between }b\\text{ and }c]]. To sparowanie jest stałe: gdziekolwiek wzór wspomina [[A]], chodzi o róg, w którym znana przyprostokątna spotyka przeciwprostokątną, nie o róg na drugim końcu przyprostokątnej [[b]]." },
          { "kind": "h3", "text": "Boki przeciwległy i przyległy względem kąta A" },
          { "kind": "p", "text": "Stań przy kącie [[A]] i spójrz w poprzek trójkąta. Bok, który widzisz, nie dotykając go, to bok przeciwległy; bok tworzący kąt obok przeciwprostokątnej to bok przyległy. Te etykiety podążają za kątem odniesienia, więc przełączenie odniesienia z [[A]] na [[B]] zamienia, która przyprostokątna jest która." },
          { "kind": "h3", "text": "Zrozumienie kąta zawartego" },
          { "kind": "p", "text": "Kąt zawarty to kąt utworzony przez dwa wybrane boki. Wzór na pole mnoży [[b]] i [[c]], więc kąt, którego potrzebuje, to ten uwięziony między nimi: kąt [[A]]. Poprawne sparowanie dla tego kalkulatora to [[b,\\;c,\\;A]]. Użycie jakiegokolwiek innego kąta przy tych samych dwóch bokach psuje sparowanie zakładane przez wzór, więc nie myl kąta [[A]] z kątem [[B]]." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC: wyróżnione przyprostokątna b i przeciwprostokątna c, kąt zawarty A, oznaczona brakująca przyprostokątna a",
        "figcaption": "Trójkąt ABC: wyróżnione przyległa przyprostokątna b i przeciwprostokątna c tworzą kąt zawarty A; bok a to brakująca przeciwległa przyprostokątna."
      },
      "sec-sine": {
        "h2": "Rola funkcji sinus w obliczeniach dla trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Sinus to stosunek, nie długość. Dla kąta ostrego [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] W tym trójkącie staje się to [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Stosunek porównuje bok naprzeciw kąta z najdłuższym bokiem, więc jest czystą liczbą bez jednostek. Dla kąta ostrego jego wartość zawsze leży między 0 a 1 i to właśnie ona pozwala jednemu bokowi zastąpić drugi." },
          { "kind": "h3", "text": "Jak sinus pomaga znaleźć brakującą przyprostokątną" },
          { "kind": "p", "text": "Zacznij od [[\\sin(A)=\\frac{a}{c}]]. Pomnóż obie strony przez [[c]]: [[[\\boxed{a=c\\sin(A)}]]] Przeciwprostokątna skaluje stosunek z powrotem do długości, a ta długość to brakująca przyprostokątna. Kalkulator nigdy nie pyta o [[a]], ponieważ to jedno przekształcenie odtwarza je z [[c]] i [[A]]. Każdy późniejszy krok wzoru na pole opiera się na tym podstawieniu." },
          { "kind": "h3", "text": "Przykład liczbowy" },
          { "kind": "p", "text": "Dane [[c=5]] i [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] Brakująca przyprostokątna ma 3 jednostki długości, co dopełnia znany trójkąt 3-4-5. Jedno mnożenie zastąpiło osobny pomiar." },
          { "kind": "h3", "text": "Czym sinus różni się od cosinusa i tangensa" },
          { "kind": "p", "text": "Cosinus używa boku przyległego: [[\\cos(A)=\\frac{b}{c}]]. Tangens używa dwóch przyprostokątnych: [[\\tan(A)=\\frac{a}{b}]]. Każdy stosunek odpowiada na inne pytanie. Sinus jest tym, którego potrzebuje ten kalkulator, ponieważ niewiadomą jest przeciwległa przyprostokątna [[a]], a znanym bokiem jest przeciwprostokątna [[c]]. Gdy znane się zmieniają, użyteczny stosunek zmienia się wraz z nimi, ale nic innego w tym przewodniku nie opuszcza rodziny sinusów." }
        ]
      },
      "sec-formula": {
        "h2": "Dlaczego wzór na pole trójkąta prostokątnego używa sinusa?",
        "blocks": [
          { "kind": "p", "text": "Zacznij od standardowej reguły: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Dla tego trójkąta naturalną podstawą jest przyprostokątna [[b]], a wysokością prostopadłą jest przyprostokątna [[a]], ponieważ przyprostokątne spotykają się pod kątem 90 stopni. Daje to [[K=\\frac{ab}{2}]]. Kalkulator nie pyta o [[a]], więc wzór musi je odtworzyć. Ze stosunku sinusów: [[a=c\\sin(A)]]. Podstaw: [[K=\\frac{b(c\\sin(A))}{2}]], zatem [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] Dzielenie przez dwa przetrwało z reguły podstawa-wysokość; czynnik sinus to brakująca przyprostokątna w przebraniu." },
          { "kind": "h3", "text": "Dlaczego wzór jest dzielony przez dwa?" },
          { "kind": "p", "text": "Trójkąt o danej podstawie i wysokości prostopadłej wypełnia dokładnie połowę równoległoboku zbudowanego na tej samej podstawie i wysokości. Podwojenie dowolnego trójkąta wzdłuż jednego boku dopełnia ten równoległobok, więc trójkąt posiada połowę jego pola. Dzielenie przez dwa to geometria, nie konwencja, i stosuje się niezależnie od tego, który wzór dostarcza podstawę i wysokość." },
          { "kind": "h3", "text": "Jak sinus zastępuje brakującą wysokość?" },
          { "kind": "p", "text": "Wysokość prostopadła we wzorze [[K=\\frac{ab}{2}]] to przyprostokątna [[a]]. Ponieważ [[\\sin(A)=\\frac{a}{c}]], mnożenie przeciwprostokątnej przez sinus rozciąga bezwymiarowy stosunek z powrotem do długości [[a]]. Użytkownik mierzy [[c]] i [[A]] zamiast [[a]], a iloczyn [[c\\sin(A)]] wykonuje konwersję po cichu wewnątrz wzoru." },
          { "kind": "h3", "text": "Dlaczego przeciwprostokątna jest mnożona przez przyległą przyprostokątną?" },
          { "kind": "p", "text": "Ogólna reguła dla dowolnego trójkąta mówi, że dwa boki i ich kąt zawarty wyznaczają pole. Tutaj dwoma znanymi bokami są [[b]] i [[c]], a ich kąt zawarty to [[A]]. Wzór mnoży dokładnie te dwa boki, potem skaluje przez [[\\sin(A)]] i dzieli na pół. Każde inne sparowanie boków wymagałoby innego kąta zawartego." },
          { "kind": "h3", "text": "Czy ten wzór działa dla innych trójkątów?" },
          { "kind": "p", "text": "Tak, w swojej ogólnej postaci: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], gdzie [[x]] i [[y]] to dowolne dwa boki, a [[\\theta]] to kąt między nimi. Wersja dla trójkąta prostokątnego to ta reguła z [[x=b]], [[y=c]] i [[\\theta=A]]. Kalkulator dodaje jedno ograniczenie: trzy dane wejściowe muszą także spełniać zależności trójkąta prostokątnego, takie jak [[b=c\\cos(A)]]. Ogólny wzór oblicza pole dla dowolnej pary bok-kąt zawarty; ten kalkulator interpretuje wynik jako trójkąt prostokątny." }
        ],
        "imgAlt": "Trójkąt 3-4-5: sin A równa się 3/5 odtwarza przyprostokątną a równą 3, pole 6 dwoma wzorami",
        "figcaption": "Od sinusa do pola: sin A = 3/5 daje a = 3, więc K = bc sin A / 2 = 6 zgadza się z K = ab/2."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego z przyprostokątnej i kąta",
        "blocks": [
          { "kind": "p", "text": "Kalkulator potrzebuje dokładnie trzech danych wejściowych, wprowadzanych w kolejności. Kroki poniżej podążają za układem ekranu od znanych pomiarów do sprawdzonego wyniku." },
          { "kind": "p", "text": "Strona oferuje jedną konfigurację kalkulatora: [[b]], [[c]] i [[A]]. Nie ma drugiego trybu; każde pole na tej stronie pochodzi z powyższego wzoru z sinusem." }
        ],
        "steps": [
          "<strong>Zidentyfikuj przyległą przyprostokątną b.</strong> Przyprostokątna, która tworzy kąt A razem z przeciwprostokątną.",
          "<strong>Zidentyfikuj przeciwprostokątną c.</strong> Najdłuższy bok, naprzeciw kąta prostego.",
          "<strong>Zidentyfikuj zawarty kąt ostry A.</strong> Kąt między przyprostokątną b a przeciwprostokątną c.",
          "<strong>Używaj zgodnych jednostek dla obu boków.</strong> Metry z metrami, stopy ze stopami, nigdy mieszane.",
          "<strong>Wpisz przyprostokątną b do pierwszego pola.</strong> To przyprostokątna przyległa do kąta A.",
          "<strong>Wpisz przeciwprostokątną c do drugiego pola.</strong> Musi być dłuższa od przyprostokątnej b.",
          "<strong>Wpisz kąt A w stopniach.</strong> Kalkulator oczekuje stopni, nie radianów.",
          "<strong>Sprawdź, czy kąt leży między 0 a 90 stopni.</strong> Punkty końcowe nie opisują żadnego trójkąta.",
          "<strong>Sprawdź, czy przeciwprostokątna jest dłuższa od przyprostokątnej.</strong> Jeśli c nie jest większe od b, któraś etykieta jest błędna.",
          "<strong>Sprawdź, czy trzy wartości opisują jeden trójkąt prostokątny.</strong> Potwierdź, że b równa się c cos(A), przynajmniej w przybliżeniu.",
          "<strong>Kliknij Calculate Area.</strong> Wynik pojawi się wraz z pokazanym podstawieniem.",
          "<strong>Przejrzyj wynik.</strong> Odczytaj pole i potwierdź, że wygląda rozsądnie.",
          "<strong>Przeczytaj kroki rozwiązania.</strong> Pokazują wzór, wartość sinusa i obliczenia.",
          "<strong>Sprawdź, czy wynik końcowy używa jednostek kwadratowych.</strong> Jednostki długości podniesione do kwadratu, zgodne z danymi wejściowymi.",
          "<strong>Użyj Reset przed wprowadzeniem kolejnego zadania.</strong> Czyści wszystkie trzy pola, dając czysty start."
        ]
      },
      "sec-consistency": {
        "h2": "Jak sprawdzić, czy przyprostokątna, przeciwprostokątna i kąt tworzą poprawny trójkąt prostokątny",
        "blocks": [
          { "kind": "p", "text": "Trzy dane wejściowe nie są niezależne. W trójkącie prostokątnym [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], zatem [[[\\boxed{b=c\\cos(A)}]]] Ustal dowolne dwie z trzech wartości, a trzecia jest już przesądzona. Wprowadzenie trzech liczb, które się nie zgadzają, nie opisuje trójkąta zakładanego przez wzór." },
          { "kind": "h3", "text": "Sprawdzanie kąta z dwóch długości boków" },
          { "kind": "p", "text": "Gdy [[b]] i [[c]] są znane, kąt jest wymuszony: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Przykład: [[b=4]], [[c=5]] daje [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Jeśli kątomierz lub wcześniejsze obliczenie podaje inny kąt dla tych boków, któraś z liczb jest błędna. Boki decydują; kąt podąża." },
          { "kind": "h3", "text": "Sprawdzanie długości boków z kąta" },
          { "kind": "p", "text": "Sprawdzenie działa też w drugą stronę. Dla [[c=10]] i [[A=60^\\circ]] przyległa przyprostokątna musi wynosić [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Wpisanie [[b=8]] przy tej samej przeciwprostokątnej i kącie nie opisałoby tego samego trójkąta prostokątnego, ponieważ [[10\\cos(60^\\circ)]] równa się 5, nie 8. Każdy kąt dopuszcza dokładnie jedną długość przyległej przyprostokątnej przy ustalonej przeciwprostokątnej." },
          { "kind": "h3", "text": "Co się dzieje, gdy dane wejściowe są niespójne?" },
          { "kind": "p", "text": "Ogólny wzór na dwa boki i kąt zawarty wciąż zwraca liczbę dla niespójnych danych, ponieważ mnoży to, co otrzyma. Ale gdy [[b\\neq c\\cos(A)]], pomiary nie opisują trójkąta prostokątnego o przeciwprostokątnej [[c]] i przyległej przyprostokątnej [[b]]. Odpowiedź liczbowa nie jest dowodem poprawnej geometrii; dowodem jest sprawdzenie spójności." },
          { "kind": "h3", "text": "Podstawowe warunki wejściowe" },
          { "kind": "p", "text": "Poprawne dane spełniają [[c>b>0]], [[0^\\circ<A<90^\\circ]] i [[b=c\\cos(A)]]. Pierwszy warunek utrzymuje przeciwprostokątną jako najdłuższą; drugi utrzymuje kąt ostry; trzeci wiąże trzy wartości w jeden trójkąt. Sprawdź wszystkie trzy, zanim zaufasz polu." }
        ],
        "imgAlt": "Trzy panele: poprawne 4, 5, 36.87 stopni; poprawne 5, 10, 60 stopni; niepoprawne 8, 10, 60 stopni",
        "figcaption": "Poprawne dane spełniają b = c cos A; trzeci panel pokazuje 10 cos 60° = 5, nie 8."
      },
      "sec-examples": {
        "h2": "Przykłady obliczania pola trójkąta prostokątnego krok po kroku",
        "blocks": [
          { "kind": "p", "text": "Cztery klasyczne trójkąty prostokątne pokazują metodę w rosnących rozmiarach. Każdy przykład podstawia do wzoru z sinusem, a następnie weryfikuje wynik wzorem na dwie przyprostokątne." },
          { "kind": "h3", "text": "Przykład 1: Trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Krok 1: [[K=\\frac{bc\\sin(A)}{2}]]. Krok 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Krok 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Krok 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Weryfikacja: [[a=5\\times0.6=3]], i [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Przykład 2: Trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], przy [[\\sin(A)=\\frac{5}{13}]]. Podstaw: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. Trzynastka się skraca: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Weryfikacja: [[a=13\\times(5/13)=5]], i [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dane [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], przy [[\\sin(A)=\\frac{8}{17}]]. Wtedy [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Weryfikacja: [[a=8]], i [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Przykład 4: Trójkąt prostokątny 7-24-25" },
          { "kind": "p", "text": "Dane [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], przy [[\\sin(A)=\\frac{7}{25}]]. Wtedy [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Weryfikacja: [[a=7]], i [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Porównanie podstawowych przykładów" }
        ],
        "table": {
          "headers": ["Typ trójkąta", "Znana przyprostokątna b", "Przeciwprostokątna c", "Kąt A", "Obliczone pole"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Praktyczne zastosowania pola trójkąta prostokątnego z przyprostokątnej i kąta",
        "blocks": [
          { "kind": "p", "text": "Dwanaście opracowanych sytuacji przenosi wzór ze strony do warsztatu, na budowę i do studia. Każda nazywa trójkątną prostokątną taflę, przekrój, profil lub uproszczony model, przepuszcza trzy dane wejściowe kalkulatora przez wzór i podaje założenie stojące za liczbami. Tam, gdzie prawdziwy obiekt jest zakrzywiony lub nieregularny, obliczenie obejmuje tylko modelowany trójkąt." },
          { "kind": "h3", "text": "Przykład 1: Trójkątne szklane okno" },
          { "kind": "p", "text": "Trójkątne prostokątne szklane okno ma [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Dane wejściowe kalkulatora: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Podstaw: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] To płaskie trójkątne pole szkła przed odjęciem naddatków na ramę." },
          { "kind": "h3", "text": "Przykład 2: Dachowa płyta podporowa" },
          { "kind": "p", "text": "Trójkątna prostokątna dachowa sekcja podporowa ma [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Dane wejściowe: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Wtedy [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] Wynik opisuje płaską trójkątną sekcję podporową, nie cały dach." },
          { "kind": "h3", "text": "Przykład 3: Trójkątny profil rampy" },
          { "kind": "p", "text": "Uproszczony trójkątny prostokątny profil rampy ma [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Dane wejściowe: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Wtedy [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] To trójkątny profil boczny, nie pochyła powierzchnia do chodzenia." },
          { "kind": "h3", "text": "Przykład 4: Stalowa blacha węzłowa" },
          { "kind": "p", "text": "Trójkątna stalowa płyta podporowa ma [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Dane wejściowe: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Wtedy [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] Samo pole nie potwierdza wytrzymałości konstrukcyjnej ani nośności." },
          { "kind": "h3", "text": "Przykład 5: Trójkątna działka ogrodowa" },
          { "kind": "p", "text": "Uproszczona trójkątna prostokątna działka ogrodowa ma [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Dane wejściowe: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Wtedy [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Pomaga to oszacować pole trójkątnej działki pod nasadzenia." },
          { "kind": "h3", "text": "Przykład 6: Trójkątny panel żagla" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja żagla ma [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Dane wejściowe: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Wtedy [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Szwy i naddatki materiałowe są wyłączone z tej płaskiej wartości panelu." },
          { "kind": "h3", "text": "Przykład 7: Szablon do cięcia ze sklejki" },
          { "kind": "p", "text": "Trójkątny prostokątny szablon ze sklejki ma [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Dane wejściowe: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Wtedy [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Pole pomaga oszacować płaski materiał potrzebny przed odpadami z cięcia." },
          { "kind": "h3", "text": "Przykład 8: Trójkątny znak drogowy" },
          { "kind": "p", "text": "Trójkątna prostokątna tablica znaku ma [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Dane wejściowe: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Wtedy [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] To szacuje płaskie pole lica znaku." },
          { "kind": "h3", "text": "Przykład 9: Działka geodezyjna" },
          { "kind": "p", "text": "Trójkątna prostokątna zmierzona działka ma [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Dane wejściowe: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Wtedy [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Wynik dotyczy uproszczonej trójkątnej prostokątnej działki." },
          { "kind": "h3", "text": "Przykład 10: Podpora markizy" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja podpory markizy ma [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Dane wejściowe: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Wtedy [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] To płaska trójkątna sekcja, nie cały materiał nieregularnej markizy." },
          { "kind": "h3", "text": "Przykład 11: Przekrój terenu przemysłowego" },
          { "kind": "p", "text": "Uproszczona trójkątna prostokątna działka przemysłowa ma [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Dane wejściowe: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Wtedy [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Prawdziwa nieregularna działka może wymagać podziału na wiele kształtów." },
          { "kind": "h3", "text": "Przykład 12: Szczyt magazynu" },
          { "kind": "p", "text": "Duża trójkątna prostokątna sekcja szczytu magazynu ma [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Dane wejściowe: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Wtedy [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Wynik szacuje płaską trójkątną sekcję szczytu." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Praktyczne zastosowanie", "Przyprostokątna a", "Znana przyprostokątna b", "Przeciwprostokątna c", "Kąt A", "Obliczone pole", "Jednostka miary"],
          "rows": [
            ["Szklane okno", "3", "4", "5", "36.87°", "6", "m²"],
            ["Podpora dachowa", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Profil rampy", "6", "8", "10", "36.87°", "24", "m²"],
            ["Blacha węzłowa", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Działka ogrodowa", "7", "24", "25", "16.26°", "84", "m²"],
            ["Panel żagla", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Szablon ze sklejki", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Znak drogowy", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Działka geodezyjna", "9", "40", "41", "12.68°", "180", "m²"],
            ["Podpora markizy", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Działka przemysłowa", "11", "60", "61", "10.39°", "330", "m²"],
            ["Szczyt magazynu", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Dlaczego wzór z sinusem daje to samo pole co wzór z przyprostokątnymi?",
        "blocks": [
          { "kind": "p", "text": "Zacznij od [[K=\\frac{bc\\sin(A)}{2}]] i przypomnij [[\\sin(A)=\\frac{a}{c}]]. Podstaw: [[K=\\frac{bc(a/c)}{2}]]. [[c]] się skraca, zostaje [[[\\boxed{K=\\frac{ab}{2}}]]] Wzór z sinusem nie wymyśla nowego pola; oblicza to samo pole z innego zestawu danych, z brakującą przyprostokątną przemycaną przez stosunek sinusów." },
          { "kind": "h3", "text": "Kiedy wzór z sinusem jest bardziej użyteczny?" },
          { "kind": "p", "text": "Użyj go, gdy zmierzono jedną przyprostokątną, znana jest przeciwprostokątna, a kąt zawarty jest dostępny, podczas gdy trzeci bok nigdy nie został zmierzony bezpośrednio. Pomiary terenowe, rysunki w skali i dane geodezyjne często przychodzą dokładnie w takim zestawieniu. Wzór zamienia te trzy liczby w pole w jednej linijce, bez objazdu w celu znalezienia najpierw brakującej przyprostokątnej." },
          { "kind": "h3", "text": "Kiedy wzór z przyprostokątnymi jest prostszy?" },
          { "kind": "p", "text": "Gdy obie prostopadłe przyprostokątne są już znane, [[K=\\frac{ab}{2}]] jest krótszy: bez sinusa, bez kąta, jedno mnożenie i dzielenie na pół. Sięgaj po wersję z sinusem tylko wtedy, gdy brakuje przyprostokątnej, a kąt może ją dostarczyć." },
          { "kind": "h3", "text": "Porównanie liczbowe" },
          { "kind": "p", "text": "Na trójkącie 3-4-5 metoda z sinusem daje [[K=\\frac{4\\times5\\times0.6}{2}=6]], a metoda z przyprostokątnymi daje [[K=\\frac{3\\times4}{2}=6]]. Obie drogi przechodzą przez tę samą geometrię, więc muszą się zgadzać. Gdy się nie zgadzają, winne są dane wejściowe lub arytmetyka, nigdy wzory." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Jak kąt zawarty wpływa na pole trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Przy ustalonej przeciwprostokątnej kąt nie może zmieniać się swobodnie: zależności trójkąta prostokątnego wiążą [[b]] i [[A]] ze sobą. Uczciwe potraktowanie tego ograniczenia pokazuje dokładnie, jak pole rośnie i maleje, gdy [[A]] przesuwa się między 0 a 90 stopni." },
          { "kind": "h3", "text": "Co się dzieje, gdy kąt A rośnie?" },
          { "kind": "p", "text": "Przy ustalonym [[c]], [[b=c\\cos(A)]] i [[a=c\\sin(A)]], więc [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. Tożsamość kąta podwojonego daje [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] Pole rośnie, gdy [[A]] zbliża się do 45 stopni od dołu, osiąga szczyt przy 45 stopniach, potem maleje w stronę 90 stopni. Kąty dopełniające się, jak 30° i 60°, dają to samo pole, ponieważ [[\\sin(2A)]] jest symetryczny względem 45 stopni." },
          { "kind": "h3", "text": "Maksymalne pole przy ustalonej przeciwprostokątnej" },
          { "kind": "p", "text": "Szczyt występuje przy [[A=45^\\circ]], gdzie [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Tam [[a=b=\\frac{c}{\\sqrt{2}}]], więc maksymalizujący trójkąt jest równoramienny. Ustalona przeciwprostokątna nie może zamknąć więcej pola trójkąta prostokątnego niż ćwierć swojego kwadratu i tylko kształt równoramienny to osiąga." },
          { "kind": "h3", "text": "Przykład liczbowy" },
          { "kind": "p", "text": "Dla [[c=10]] sufit wynosi [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] Przy [[A=45^\\circ]] przyprostokątne wynoszą [[10/\\sqrt{2}\\approx7.07]] każda, i [[\\frac{7.07\\times7.07}{2}\\approx25]]. Zauważ, że 90° nie jest dopuszczalnym ostrym wejściem: zwinęłoby trójkąt w linię." }
        ]
      },
      "sec-alternative": {
        "h2": "Czy pole trójkąta prostokątnego można obliczyć znając jedną przyprostokątną i jej kąt?",
        "blocks": [
          { "kind": "p", "text": "Tak, z tangensem zamiast sinusa. Jeśli przyprostokątna [[b]] i kąt [[A]] są znane, przeciwległa przyprostokątna wynika z [[a=b\\tan(A)]]. Wstaw to do [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], zatem [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Z drugiego rogu [[b=a\\tan(B)]] daje [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] To prawdziwe metody alternatywne, przydatne, gdy przeciwprostokątna jest nieznana, ale przyprostokątna i jej kąt są pod ręką. Są to alternatywy matematyczne, nie dodatkowe tryby w powyższym kalkulatorze, który działa tylko z [[b]], [[c]] i [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki kątów i pomiarów w obliczeniach pola",
        "blocks": [
          { "kind": "p", "text": "Pole dziedziczy jednostkę po dwóch długościach pomnożonych, by je utworzyć, podczas gdy kąt nie wnosi żadnej jednostki. Utrzymanie trzech danych wejściowych w zgodnych jednostkach to to, co utrzymuje odpowiedź w uczciwości." },
          { "kind": "h3", "text": "Stopnie kontra radiany" },
          { "kind": "p", "text": "Kalkulator oczekuje stopni. Przelicz wzorem [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; na przykład [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Kąt w trybie radianów wprowadzony do pola w trybie stopni po cichu zmienia wartość sinusa: [[\\sin(30^\\circ)=0.5]], ale [[\\sin(30\\text{ radians})\\approx-0.99]], co zrujnowałoby pole. Najpierw przelicz, potem wpisz." },
          { "kind": "h3", "text": "Dlaczego sinus nie ma jednostek" },
          { "kind": "p", "text": "Sinus to stosunek dwóch długości, więc jednostki się skracają: bok przeciwległy przez przeciwprostokątną to czysta liczba. Jednostki kwadratowe w odpowiedzi pochodzą w całości z mnożenia [[b]] przez [[c]]. Dlatego księgowość jednostek wzoru jest prosta: dopasuj dwie jednostki długości, a jednostka pola podąży." },
          { "kind": "h3", "text": "Popularne jednostki pomiaru" },
          { "kind": "p", "text": "Metry dają metry kwadratowe, centymetry dają centymetry kwadratowe, stopy dają stopy kwadratowe, cale dają cale kwadratowe: [[\\text{m}\\times\\text{m}=\\text{m}^2]], i ten sam wzorzec obowiązuje dla każdej jednostki długości. Jednostki mieszane, jak centymetry z metrami, muszą zostać przeliczone na jedną jednostkę przed zastosowaniem wzoru, inaczej liczba nie ma czystego znaczenia." },
          { "kind": "h3", "text": "Dlaczego wczesne zaokrąglanie może wpłynąć na wynik" },
          { "kind": "p", "text": "Zachowaj pełną precyzję przez kroki pośrednie i zaokrąglij tylko ostateczną odpowiedź. Dokładny kąt stojący za 36.87° to 36.869897°, którego sinus wynosi dokładnie 0.6; zaokrąglenie kąta najpierw przesuwa sinus o włos, a ten włos mnoży się przez [[b]] i [[c]] w pole. Małe na jednym trójkącie, zauważalne w całym projekcie." }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego z przyprostokątnej i kąta",
        "blocks": [
          { "kind": "p", "text": "Niemal każda błędna odpowiedź w tym temacie wywodzi się z błędnie oznaczonego wejścia, a nie ze złej arytmetyki. Szesnaście błędów poniżej to te, które pojawiają się raz za razem, każdy z przyczyną i poprawką." },
          { "kind": "h3", "text": "1. Mylenie przeciwprostokątnej z prostopadłą przyprostokątną" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta prostego i najdłuższy bok; przyprostokątna spotyka kąt prosty. Zamiana ich podaje złą długość do [[c]]. Poprawka: najpierw znajdź kąt prosty, potem weź bok naprzeciw niego." },
          { "kind": "h3", "text": "2. Łączenie kąta A ze złą przyprostokątną" },
          { "kind": "p", "text": "Kąt [[A]] leży między przyprostokątną [[b]] a przeciwprostokątną [[c]]. Łączenie go z przyprostokątną [[a]] miesza zależność kąta zawartego zakładaną przez wzór. Poprawka: prześledź dwa boki tworzące kąt, który wpisałeś." },
          { "kind": "h3", "text": "3. Mylenie boków przeciwległego i przyległego" },
          { "kind": "p", "text": "Przeciwległy znaczy naprzeciw kąta; przyległy znaczy dotykający go, obok przeciwprostokątnej. Etykiety odwracają się, gdy zmienia się kąt odniesienia. Poprawka: stań przy kącie [[A]] i nazwij każdy bok stamtąd." },
          { "kind": "h3", "text": "4. Używanie kąta B zamiast kąta A bez zmiany odpowiedniego boku" },
          { "kind": "p", "text": "Kąt [[B]] łączy się z bokami [[a]] i [[c]], nie [[b]] i [[c]]. Wpisanie [[B]] przy zachowaniu [[b]] i [[c]] oblicza inną wielkość. Poprawka: trzymaj każdy kąt z własnym sparowaniem boków albo najpierw przelicz [[B]] na [[A]]." },
          { "kind": "h3", "text": "5. Używanie radianów, gdy kalkulator oczekuje stopni" },
          { "kind": "p", "text": "Wpisanie 0.6435 (radianów) tam, gdzie należy 36.87 (stopni), zmienia [[\\sin(A)]] całkowicie. Poprawka: sprawdź jednostkę kalkulatora, przelicz wzorem [[\\times\\frac{180}{\\pi}]], jeśli trzeba, potem wpisz." },
          { "kind": "h3", "text": "6. Zapominanie o dzieleniu przez dwa" },
          { "kind": "p", "text": "Mnożenie [[b\\times c\\times\\sin(A)]] daje pole otaczającego równoległoboku, podwójne względem trójkąta. Poprawka: podziel iloczyn na pół; /2 jest częścią wzoru, nie opcją." },
          { "kind": "h3", "text": "7. Zapominanie o funkcji sinus" },
          { "kind": "p", "text": "Obliczenie samego [[\\frac{bc}{2}]] traktuje [[\\sin(A)]] jak 1, co zachodzi tylko przy 90°, niemożliwym ostrym wejściu. Poprawka: uwzględnij [[\\sin(A)]]; niesie udział brakującej przyprostokątnej." },
          { "kind": "h3", "text": "8. Wpisywanie przyprostokątnej dłuższej od przeciwprostokątnej" },
          { "kind": "p", "text": "Żadna przyprostokątna nie może przekroczyć przeciwprostokątnej, więc [[c\\leq b]] oznacza, że etykieta jest błędna. Poprawka: ponownie rozpoznaj boki; najdłuższy pomiar to [[c]]." },
          { "kind": "h3", "text": "9. Wpisywanie kąta 0 stopni" },
          { "kind": "p", "text": "Przy 0° [[\\sin(A)=0]] i trójkąt zwija się w linię o zerowym polu. Poprawka: użyj prawdziwego kąta ostrego, ściśle między 0° a 90°." },
          { "kind": "h3", "text": "10. Wpisywanie kąta 90 stopni jako kąta ostrego" },
          { "kind": "p", "text": "90° to kąt prosty [[C]], nie kąt ostry; [[\\sin(90^\\circ)=1]] zamienia wzór w [[\\frac{bc}{2}]], co nie jest polem tego trójkąta. Poprawka: wpisz kąt ostry między [[b]] a [[c]]." },
          { "kind": "h3", "text": "11. Mieszanie różnych jednostek długości" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] z [[c=5\\text{ m}]] mnoży niezgodne skale. Poprawka: przelicz oba na jedną jednostkę (400 cm = 4 m) przed obliczeniami." },
          { "kind": "h3", "text": "12. Podawanie pola w jednostkach liniowych" },
          { "kind": "p", "text": "Pole 6 m² to nie 6 m. Poprawka: pisz jednostkę kwadratową razem z liczbą, za każdym razem." },
          { "kind": "h3", "text": "13. Zbyt wczesne zaokrąglanie kąta" },
          { "kind": "p", "text": "Zaokrąglenie 36.869897° do 36.87° przed wzięciem sinusa lekko przesuwa wynik; zaokrąglenie do 37° przesuwa go bardziej. Poprawka: zachowaj pełną precyzję do ostatecznej odpowiedzi." },
          { "kind": "h3", "text": "14. Zakładanie, że trzy dane wejściowe można wybierać niezależnie" },
          { "kind": "p", "text": "[[b]], [[c]] i [[A]] są powiązane przez [[b=c\\cos(A)]]; swobodny wybór wszystkich trzech przeokreśla trójkąt. Poprawka: wyprowadź trzecią wartość z pozostałych dwóch zamiast ją wymyślać." },
          { "kind": "h3", "text": "15. Używanie kąta niespójnego z wpisanymi długościami boków" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] nie przechodzi sprawdzenia, ponieważ [[10\\cos(60^\\circ)=5\\neq8]]. Wzór wciąż zwraca liczbę, ale nie jest to pole tego trójkąta prostokątnego. Poprawka: wykonaj sprawdzenie [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Zakładanie, że liczbowy wynik kalkulatora zawsze przedstawia poprawny trójkąt prostokątny" },
          { "kind": "p", "text": "Arytmetyka udaje się na dowolnych wpisanych liczbach; geometria nie. Poprawka: zweryfikuj sprawdzeniami spójności i niezależnym wzorem, zanim zaufasz odpowiedzi." },
          { "kind": "h3", "text": "Błędnie a poprawnie: konkretny przykład" },
          { "kind": "p", "text": "Użyj [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Poprawnie: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Błędne wpisanie kąta [[B=53.13^\\circ]] przy tych samych bokach: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. Kąt [[B]] nie jest kątem zawartym między [[b]] a [[c]]; jego właściwe sparowanie boków to [[a]] i [[c]]. Błąd jest niewidoczny w arytmetyce i oczywisty w geometrii." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy pole trójkąta prostokątnego jest poprawne",
        "blocks": [
          { "kind": "p", "text": "Siedem niezależnych sprawdzeń, wszystkie pokazane na trójkącie 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). Zgodność między różnymi drogami to najsilniejszy dowód, że odpowiedź jest poprawna." },
          { "kind": "h3", "text": "Metoda 1: Sprawdź główny wzór" },
          { "kind": "p", "text": "Przelicz [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Drugie przejście wyłapuje literówki i błędnie wpisane kąty." },
          { "kind": "h3", "text": "Metoda 2: Sprawdź zależność cosinusa" },
          { "kind": "p", "text": "Potwierdź [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Niezgodność oznacza, że kąt i boki należą do różnych trójkątów." },
          { "kind": "h3", "text": "Metoda 3: Oblicz brakującą przyprostokątną" },
          { "kind": "p", "text": "Potwierdź [[a=c\\sin(A)]]: [[5\\times0.6=3]]. To sprawdza wartość sinusa zasilającą wzór na pole." },
          { "kind": "h3", "text": "Metoda 4: Sprawdź twierdzenie Pitagorasa" },
          { "kind": "p", "text": "Potwierdź [[a^2+b^2=c^2]]: [[9+16=25]]. Niepowodzenie tutaj oznacza, że rozpoznanie boków jest błędne." },
          { "kind": "h3", "text": "Metoda 5: Zweryfikuj używając dwóch przyprostokątnych" },
          { "kind": "p", "text": "Potwierdź [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Dwie metody, jeden trójkąt, jedna odpowiedź." },
          { "kind": "h3", "text": "Metoda 6: Sprawdź kąty dopełniające się" },
          { "kind": "p", "text": "Potwierdź [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. To wyłapuje kąt zmierzony przy złym rogu." },
          { "kind": "h3", "text": "Metoda 7: Sprawdź maksymalne pole" },
          { "kind": "p", "text": "Potwierdź [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Pole powyżej sufitu jest niemożliwe dla danej przeciwprostokątnej." }
        ]
      },
      "sec-applications": {
        "h2": "Pole trójkąta prostokątnego z przyprostokątnej i kąta w praktyce",
        "blocks": [
          { "kind": "p", "text": "Te same trzy dane wejściowe pojawiają się w miejscach, które nigdy nie wspominają trygonometrii. Szklarz mierzy przyprostokątną i przekątną okna i odczytuje kąt z ramy; dekarz zna przeciwprostokątną podpory z długości krokwi i kąt z nachylenia. W każdym przypadku brakujący prostopadły bok jest tym niezręcznym do sięgnięcia taśmą, podczas gdy przeciwprostokątna i kąt są pod ręką. Wzór z sinusem istnieje dokładnie dla tej asymetrii: zamienia dostępne pomiary w niedostępną wysokość, a potem w pole." },
          { "kind": "p", "text": "Cztery panele poniżej pokazują wzorzec w różnych skalach. Szklane okno (6 m²) i profil rampy (24 m²) używają geometrii 3-4-5 i 6-8-10 w skali metrowej; podpora dachowa (30 ft²) używa trójkąta 5-12-13; działka geodezyjna (84 m²) używa 7-24-25. Każdy panel oznacza przyległą przyprostokątną, przeciwprostokątną, kąt zawarty i wynikowe pole, więc droga od pomiaru do odpowiedzi pozostaje widoczna." }
        ],
        "imgAlt": "Cztery panele: okno szklane 6 m2, panel dachowy 30 ft2, profil rampy 24 m2, działka geodezyjna 84 m2",
        "figcaption": "Cztery prawdziwe zastosowania: okno, podpora dachowa, profil rampy i działka geodezyjna wraz z ich polami."
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
          { "kind": "p", "text": "Poniżej znajdują się odpowiedzi na najczęstsze pytania o pole z przyprostokątnej i kąta." }
        ]
      },
      "sec-conclusion": {
        "h2": "Trzy dane wejściowe niosą całe pole",
        "blocks": [
          { "kind": "p", "text": "Jedna przyprostokątna, przeciwprostokątna i kąt między nimi okazują się wystarczające. Stosunek sinusów odtwarza brakującą przyprostokątną, dzielenie na pół zamienia otaczający prostokąt w trójkąt, a zależności spójności pozwalają sprawdzać każde wejście względem pozostałych. Nic w metodzie nie jest przybliżone, gdy dane wejściowe są dokładne." },
          { "kind": "p", "text": "Nawyk pracy jest prosty: oznacz boki od kąta A, utrzymuj zgodne jednostki, potwierdź b = c cos(A) i zweryfikuj odpowiedź wzorem z przyprostokątnymi. Przy tych nawykach K = bc sin(A)/2 jest tak niezawodny jak każde obliczenie pola w geometrii." }
        ]
      }
    }
  }
};
