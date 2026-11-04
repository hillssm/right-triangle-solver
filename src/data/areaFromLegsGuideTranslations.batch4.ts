// areaFromLegsGuideTranslations.batch4.ts: Right Triangle Area From Legs Guide (Page 22 of 45) translations for Korean (ko), Malay (ms), and Polish (pl).
export const AREA_FROM_LEGS_TRANSLATIONS_BATCH4 = {
  "ko": {
    "faqs": [
      {
        "question": "직각삼각형의 두 변으로 넓이를 구하는 공식은 무엇인가요?",
        "answer": "K = ab/2이며, 여기서 a와 b는 서로 수직인 두 변입니다. 두 변을 곱하고 2로 나누세요. a = 6, b = 8인 경우 K = (6 × 8) / 2 = 24 제곱 단위가 됩니다. 빗변, 각도 또는 다른 측정값은 필요하지 않습니다."
      },
      {
        "question": "왜 두 변을 곱하고 2로 나누나요?",
        "answer": "두 변은 넓이가 a × b인 감싸는 직사각형의 두 변을 이루고, 직사각형의 대각선은 그것을 합동인 두 직각삼각형으로 나눕니다. 각 삼각형은 직사각형의 절반을 차지하므로 넓이는 절반이 된 곱입니다. 곱셈은 직사각형을 만들고, 나누기는 그것을 삼각형으로 다듬습니다."
      },
      {
        "question": "넓이를 구하려면 빗변이 필요한가요?",
        "answer": "아니요. 넓이는 K = ab/2를 통해 두 변만으로 구합니다. 빗변 c = √(a² + b²)는 변의 라벨을 확인하거나 빠진 변을 구할 때 유용하지만, 넓이 계산 자체에는 절대 들어가지 않습니다."
      },
      {
        "question": "변과 빗변의 차이는 무엇인가요?",
        "answer": "변은 직각에서 만나 서로 수직인 두 변입니다. 빗변은 직각 맞은편에 있으며 항상 가장 긴 변입니다. 계산기는 두 변을 입력으로 받습니다. 빗변을 변으로 입력하면 잘못된 답이 나옵니다."
      },
      {
        "question": "변 a와 변 b를 바꿔도 되나요?",
        "answer": "네. 곱셈은 교환법칙이 성립하므로 (a × b) / 2는 (b × a) / 2와 같습니다. 3과 4를 어느 순서로 입력해도 6이 나옵니다. 라벨은 변에 대해 이야기하기 위한 편의일 뿐 계산의 제약이 아닙니다."
      },
      {
        "question": "소수점 변 측정값으로도 넓이를 구할 수 있나요?",
        "answer": "네. a = 3.5, b = 9.2인 경우 K = (3.5 × 9.2) / 2 = 16.1 제곱 단위입니다. 정수와 소수에 대해 방법이 동일합니다. 계산 중에는 완전한 정밀도를 유지하고 측정 정확도에 맞춰 최종 답만 반올림하세요."
      },
      {
        "question": "두 변의 단위가 다르면 어떻게 되나요?",
        "answer": "계산 전에 하나의 단위로 변환하세요. a = 3 ft, b = 24인치인 경우 24인치를 2 ft로 변환한 뒤 K = (3 × 2) / 2 = 3 ft²가 됩니다. 섞인 단위를 곱하면 깔끔한 의미가 없는 숫자가 나오므로 변환 단계는 필수입니다."
      },
      {
        "question": "넓이를 알면 빠진 변을 구할 수 있나요?",
        "answer": "네, 공식을 b = 2K/a (또는 a = 2K/b)로 변형하면 됩니다. K = 24 cm², a = 6 cm인 경우 b = 48/6 = 8 cm입니다. 이는 같은 관계를 거꾸로 읽은 것으로 별도의 계산기 모드가 아닙니다. 계산기 자체는 여전히 두 변을 입력받습니다."
      },
      {
        "question": "피타고라스 정리는 삼각형 넓이와 어떤 관계가 있나요?",
        "answer": "이 정리는 a² + b² = c²를 통해 변의 길이를 연결하고, 넓이 공식은 둘러싸인 표면을 측정합니다. 빠진 변을 찾거나 빗변을 확인할 때 정리를 사용한 뒤 K = ab/2를 적용하세요. 변이 6과 8인 경우 c = 10이며 넓이는 어느 쪽으로든 24로 유지됩니다."
      },
      {
        "question": "이 공식이 직각이 아닌 삼각형에도 적용되나요?",
        "answer": "아니요. K = ab/2는 두 변 사이의 끼인각이 90도라고 가정합니다. 다른 삼각형에는 실제 끼인각 C를 사용해 K = ab sin(C)/2를 쓰세요. 직각이 아닌 삼각형에 변 공식을 적용하면 sin(C)가 1이 아닌데도 1인 것처럼 다루어 넓이를 과대평가합니다."
      },
      {
        "question": "왜 답을 제곱 단위로 표시하나요?",
        "answer": "넓이는 표면을 덮는 단위 정사각형의 개수를 셉니다. cm × cm = cm², m × m = m², ft × ft = ft²입니다. 24 m 같은 선형 단위는 길이를 나타내지 표면을 나타내지 않습니다. 숫자에는 항상 제곱 단위를 함께 쓰세요."
      },
      {
        "question": "서로 다른 두 직각삼각형이 같은 넓이를 가질 수 있나요?",
        "answer": "네, 변의 곱이 일치하면 됩니다. 3×4 삼각형과 2×6 삼각형은 모두 K = 6을 줍니다. 모양과 넓이는 독립적입니다. 곱이 같으면 넓이도 같으므로, 키가 크고 좁은 삼각형이 낮고 넓은 삼각형과 정확히 같은 표면을 둘러쌀 수 있습니다."
      }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 살펴보기",
    "relatedItems": [
      "직각삼각형 넓이 계산기",
      "변과 각도로 구하는 직각삼각형 넓이 계산기",
      "각도로 구하는 직각삼각형 넓이 계산기",
      "반둘레로 구하는 직각삼각형 넓이 계산기",
      "직각삼각형 변 계산기",
      "직각삼각형 둘레 계산기"
    ],
    "relatedIntro": "측정값마다 필요한 계산기가 다릅니다.",
    "faqHeading": "자주 묻는 질문",
    "tocHeading": "이 가이드의 목차",
    "tocItems": {
      "sec-intro": "두 변으로 직각삼각형의 넓이를 구하는 방법",
      "sec-anatomy": "직각삼각형이란?",
      "sec-base-height": "왜 두 변이 밑변과 높이가 되나요?",
      "sec-formula": "왜 직각삼각형의 넓이는 두 변의 곱의 절반인가요?",
      "sec-howto": "두 변으로 넓이 구하는 직각삼각형 계산기 사용법",
      "sec-examples": "두 변으로 구하는 직각삼각형 넓이의 단계별 예제",
      "sec-practical": "두 변으로 구하는 직각삼각형 넓이의 실생활 활용",
      "sec-pythagoras": "피타고라스 정리는 직각삼각형 넓이와 어떤 관계가 있나요?",
      "sec-missing-leg": "삼각형 넓이를 알 때 빠진 변을 구하는 방법",
      "sec-scaling": "두 변을 바꾸면 넓이에 어떤 영향을 미치나요?",
      "sec-general": "왜 두 변 공식을 모든 삼각형에 사용할 수 없나요?",
      "sec-units": "직각삼각형 넓이를 계산할 때의 단위 이해하기",
      "sec-mistakes": "변으로 직각삼각형 넓이를 구할 때 흔한 실수",
      "sec-verify": "구한 직각삼각형 넓이가 맞는지 확인하는 방법",
      "sec-applications": "실제 적용: 두 변으로 구하는 직각삼각형 넓이",
      "sec-faq": "자주 묻는 질문",
      "sec-related": "관련 직각삼각형 계산기 살펴보기",
      "sec-conclusion": "두 개의 측정값, 절반이 된 하나의 곱"
    },
    "sections": {
      "sec-intro": {
        "h2": "두 변으로 직각삼각형의 넓이를 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "[[a=6]], [[b=8]]을 가져옵니다. [[K=\\frac{6\\times8}{2}]]를 적용합니다. [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] 이 결과는 세 변으로 둘러싸인 전체 평면 표면을 나타냅니다. 스물네 제곱 단위. 두 변으로 넓이 구하는 직각삼각형 계산기가 이 두 입력에 대해 돌려주는 값과 정확히 같습니다." },
          { "kind": "p", "text": "이 계산기에 필요한 것은 두 변, 즉 직각에서 만나는 두 변뿐입니다. 두 변이 서로 수직이므로 하나는 밑변이 되고 다른 하나는 높이가 되어 추가 측정이 필요 없습니다. 빗변은 여기서 아무 역할도 하지 않습니다. 두 변을 곱하고 그 곱을 절반으로 나누면 [[K=\\frac{ab}{2}]]에서 넓이가 따라옵니다." },
          { "kind": "p", "text": "이것은 기하학에서 가장 단순한 넓이 계산 중 하나로, 두 수직 측정값이 이미 손에 있기 때문입니다. 모서리가 직각인 곳이면 어디서나 등장합니다. 건축 배치도, 재단 시트, 화단, 측량 스케치는 모두 두 변과 절반이 된 하나의 곱으로 귀결됩니다." }
        ]
      },
      "sec-anatomy": {
        "h2": "직각삼각형이란?",
        "blocks": [
          { "kind": "p", "text": "공식이 이해되기 전에 라벨이 정확해야 합니다. 아래의 모든 기호는 계산기에 등장하며, 각각 하나의 고정된 의미를 지닙니다." },
          { "kind": "h3", "text": "직각삼각형의 정의" },
          { "kind": "p", "text": "직각삼각형은 정확히 하나의 내각이 90도인 세 변의 다각형입니다. 세 꼭짓점, 세 변, 그리고 합이 180도인 세 내각을 가집니다. 직각은 보통 모서리에 작은 정사각형으로 표시됩니다. 그 모서리를 이루는 두 변이 직각을 낀 변이고, 맞은편 변이 빗변입니다. [[C=90^\\circ]]이므로 [[[\\boxed{A+B=90^\\circ}]]]가 성립합니다. 두 예각은 여각 관계이므로 하나를 알면 다른 하나가 정해집니다." },
          { "kind": "h3", "text": "직각삼각형의 두 변이란?" },
          { "kind": "p", "text": "두 변은 직각에서 만나는 두 변입니다. 변 [[a]]는 각 [[A]]의 맞은편에 있고, 변 [[b]]는 각 [[B]]의 맞은편에 있습니다. 이들을 정의하는 성질은 수직입니다. [[a\\perp b]]. 이 한 가지 사실이 넓이 계산을 그토록 직접적으로 만듭니다. 수직인 한 쌍은 추가 작도 없이 이미 밑변과 높이를 제공하기 때문입니다." },
          { "kind": "h3", "text": "빗변이란?" },
          { "kind": "p", "text": "빗변은 90도 각의 맞은편에 있는 변입니다. 항상 삼각형에서 가장 긴 변이며, 스스로 직각을 이루지는 않습니다. 맞은편으로 가로질러 뻗어 있습니다. 변 기반 넓이 공식에는 필요하지 않습니다. 변이 하나 빠졌을 때 유용해지는데, [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]가 피타고라스 정리를 통해 그것을 복원하기 때문입니다. 하지만 넓이 계산기는 그것을 묻지 않습니다." },
          { "kind": "h3", "text": "왜 두 변은 서로 수직인가요?" },
          { "kind": "p", "text": "수직이란 정확히 90도로 만난다는 뜻입니다. 두 변은 직각 꼭짓점을 공유하므로 그 사이의 모서리는 정의상 직각입니다. 넓이에는 밑변에 수직인 높이를 곱해야 하므로 이것이 중요합니다. 직각삼각형에서는 그 쌍이 이미 그려져 있습니다. 내릴 수선도, 추가로 그을 선도 없습니다. 삼각형이 두 측정값을 직접 건네줍니다." },
          { "kind": "h3", "text": "두 변을 바꿔도 되나요?" },
          { "kind": "p", "text": "네. [[a\\times b=b\\times a]]이므로 [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]가 성립합니다. 구체적인 확인: [[\\frac{3\\times4}{2}=6]] 그리고 [[\\frac{4\\times3}{2}=6]]. 어느 변을 [[a]]라 하고 어느 변을 [[b]]라 다시 부르든 삼각형이나 그 넓이에는 아무 변화가 없습니다. 두 측정값을 어느 입력에 넣어도 계산기는 같은 결과를 돌려줍니다." }
        ],
        "imgAlt": "직각삼각형 ABC: C에서의 직각, 강조된 변 a와 b, 빗변 c, 공식 K = ab/2",
        "figcaption": "삼각형 ABC: 강조된 변 a와 b는 계산기에 필요한 두 측정값입니다."
      },
      "sec-base-height": {
        "h2": "왜 두 변이 밑변과 높이가 되나요?",
        "blocks": [
          { "kind": "p", "text": "이 방법 전체는 하나의 기하학적 사실에 달려 있습니다. 직각삼각형에서는 밑변과 수직인 높이가 이미 두 변으로 그려져 있습니다. 왜 그런지 이해하면 공식이 외운 규칙에서 자명한 것으로 바뀝니다." },
          { "kind": "h3", "text": "삼각형의 밑변이란?" },
          { "kind": "p", "text": "밑변은 넓이 계산의 기준으로 선택된 변입니다. 삼각형의 어느 변도 밑변이 될 수 있습니다. 직각삼각형에서는 두 변 중 하나를 밑변으로 선택하는 것이 자연스러운데, 다른 변이 이미 그것에 수직이기 때문입니다. 선택은 편의의 문제입니다. 한 변을 밑변으로 정하면 직각의 기하학이 나머지를 처리합니다." },
          { "kind": "h3", "text": "수직인 높이란?" },
          { "kind": "p", "text": "높이는 밑변에서 맞은편 꼭짓점까지의 최단 거리로, 밑변에 직각으로 측정합니다. 밑변이 변 [[a]]일 때 맞은편 꼭짓점은 변 [[b]]의 먼 쪽 끝이며, 변 [[b]] 자체가 그 수직 거리입니다. 삼각형 너머로 그릴 것도 잴 것도 없습니다. 높이는 작도가 아니라 변입니다." },
          { "kind": "h3", "text": "왜 수직이 중요한가요?" },
          { "kind": "p", "text": "두 변의 길이를 곱하면 두 변이 수직일 때만 밑변과 높이의 곱이 됩니다. 기울어진 변을 밑변과 짝지으면 수직 높이가 아니라 더 긴 대각선 길이를 재는 것이 되어 곱이 진짜 밑변-높이 직사각형을 초과합니다. 직각삼각형의 두 변은 정의상 수직이며, 바로 그래서 그 곱이 올바른 출발점입니다. 이 계산기는 직각을 이루는 두 변을 요구합니다. 다른 짝짓기는 공식이 의존하는 논리를 깨뜨립니다." },
          { "kind": "h3", "text": "빗변을 밑변으로 사용할 수 있나요?" },
          { "kind": "p", "text": "삼각형은 빗변을 포함해 어느 변도 밑변으로 쓸 수 있지만, 이때 높이는 맞은편 꼭짓점에서 그 변까지의 수직 거리여야 합니다. 그 거리는 두 변 중 하나가 아니며, 이 계산기는 그것을 측정하지 않습니다. [[K=\\frac{ab}{2}]]에서 빗변을 변 대신 쓸 수 없습니다. 그렇게 하면 다르고 틀린 양을 계산합니다. 이 계산기는 두 수직 변 전용으로 만들어졌습니다." }
        ]
      },
      "sec-formula": {
        "h2": "왜 직각삼각형의 넓이는 두 변의 곱의 절반인가요?",
        "blocks": [
          { "kind": "p", "text": "일반 규칙에서 시작합니다. [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. 직각삼각형에서는 [[\\text{Base}=a]], [[\\text{Height}=b]]로 둡니다. 두 변이 수직이므로 [[[\\boxed{K=\\frac{a\\times b}{2}}]]] 이 절의 나머지는 그 절반이 어디서 오는지 보여주어, 2로 나누는 것을 외우는 것이 아니라 이해하도록 합니다." },
          { "kind": "h3", "text": "직사각형 방법 이해하기" },
          { "kind": "p", "text": "가로 [[a]], 세로 [[b]]인 직사각형을 그립니다. 그 넓이는 [[K_{\\text{rectangle}}=a\\times b]]입니다. 이제 한 모서리에서 맞은편 모서리로 대각선을 그립니다. 대각선은 직사각형을 서로 정확히 같은 두 삼각형으로 나누며, 각 삼각형은 변 [[a]]와 [[b]], 그리고 직사각형의 모서리가 있던 자리의 직각을 가집니다. 두 삼각형의 넓이가 같으므로 각각이 직사각형의 절반을 차지합니다. [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "왜 합동인 두 직각삼각형이 직사각형을 이루나요?" },
          { "kind": "p", "text": "두 삼각형을 빗변이 맞닿도록 놓습니다. 대응하는 변이 맞물립니다. [[a]] 대 [[a]], [[b]] 대 [[b]]. 직각삼각형의 예각이 여각 관계([[A+B=90^\\circ]])이므로 합쳐진 도형의 각 모서리에서 만나는 각들의 합은 사방 모두 90도가 됩니다. 결과는 네 직각과 마주보는 변이 같은 도형, 즉 직사각형입니다. 그 변은 정확히 두 변이며, 그래서 직사각형의 넓이는 [[a\\times b]]이고 각 삼각형은 그 절반을 차지합니다." },
          { "kind": "h3", "text": "왜 2로 나누어야 하나요?" },
          { "kind": "p", "text": "6×8 직사각형을 가져옵니다. 그 넓이는 [[K=6\\times8=48]]입니다. 합동인 두 직각삼각형은 각각 절반을 차지합니다. [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] 나누기를 빼먹으면 다른 질문에 답하는 것입니다. 삼각형이 아니라 직사각형의 넓이. 2로 나누는 것은 보정 계수가 아닙니다. 감싸는 직사각형을 삼각형으로 다듬는 단계입니다." },
          { "kind": "h3", "text": "좌표를 이용한 기하학적 증명" },
          { "kind": "p", "text": "좌표에 익숙한 독자를 위해 같은 결과를 대수에서 가져옵니다. 직각 꼭짓점을 원점에 놓고 꼭짓점을 [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]라 합니다. 삼각형은 두 좌표축과 [[A]]와 [[B]]를 잇는 직선으로 둘러싸인 영역입니다. x축을 따른 밑변의 길이는 [[a]], 수직 변의 길이는 [[b]]이며, 둘러싸인 직각삼각형은 그 축들이 표시하는 [[a]]×[[b]] 직사각형의 정확히 절반을 채웁니다. 따라서 [[[\\boxed{K=\\frac{ab}{2}}]]], 같은 공식이 새로운 장치 없이 도달됩니다." }
        ],
        "imgAlt": "가로 a, 세로 b인 직사각형을 대각선으로 나누어 합동인 두 직각삼각형으로, 각 넓이는 ab/2",
        "figcaption": "가로 a, 세로 b인 직사각형을 대각선을 따라 잘라 합동인 두 직각삼각형으로 나눈 모습."
      },
      "sec-howto": {
        "h2": "두 변으로 넓이 구하는 직각삼각형 계산기 사용법",
        "blocks": [
          { "kind": "p", "text": "계산기에는 순서대로 입력하는 정확히 두 개의 입력이 필요합니다. 아래 단계는 측정값 확인부터 검증된 결과까지 화면 배치를 따라갑니다." }
        ],
        "steps": [
          "<strong>90도 각에서 만나는 두 변을 확인하세요.</strong> 이들이 변이며, 직각 표시가 이들이 만나는 지점을 보여줍니다.",
          "<strong>선택한 측정값 중 어느 것도 빗변이 아닌지 확인하세요.</strong> 빗변은 직각 맞은편의 가장 긴 변입니다.",
          "<strong>첫 번째 변을 측정하세요.</strong> 대상에 맞는 줄자, 자, 또는 도면 축척을 사용하세요.",
          "<strong>두 번째 변을 측정하세요.</strong> 변 자체를 따라 모서리에서 모서리까지 재세요.",
          "<strong>두 측정값의 단위가 호환되는지 확인하세요.</strong> 미터는 미터끼리, 피트는 피트끼리, 절대 섞지 마세요.",
          "<strong>첫 번째 입력란에 변 a를 입력하세요.</strong> 어느 변을 먼저 넣어도 됩니다. 라벨은 서로 바꿔 쓸 수 있습니다.",
          "<strong>두 번째 입력란에 변 b를 입력하세요.</strong> 다른 쪽 수직 변입니다.",
          "<strong>적절한 측정 단위를 선택하세요.</strong> 실제로 측정한 단위와 맞추세요.",
          "<strong>Calculate Area를 클릭하세요.</strong> 대입 과정과 함께 결과가 나타납니다.",
          "<strong>계산된 결과를 검토하세요.</strong> 넓이를 읽고 타당해 보이는지 확인하세요.",
          "<strong>단계별 풀이를 확인하세요.</strong> 공식, 대입, 계산 과정을 보여줍니다.",
          "<strong>삼각형 도면으로 변 라벨을 확인하세요.</strong> a와 b가 수직인 변 위에 있는지 확인하세요.",
          "<strong>결과가 제곱 단위로 표시되는지 확인하세요.</strong> 입력과 같은 길이 단위를 제곱한 것입니다.",
          "<strong>새 계산을 시작할 때 Reset을 클릭하세요.</strong> 두 입력란을 지워 깨끗하게 시작합니다."
        ],
        "closingParagraphs": [
          "이 계산기에는 정확히 두 개의 입력, 변 [[a]]와 변 [[b]]가 있습니다. 다른 모드도 숨은 입력란도 없습니다. 이 페이지의 모든 넓이는 [[K=\\frac{ab}{2}]]에서 나옵니다."
        ]
      },
      "sec-examples": {
        "h2": "두 변으로 구하는 직각삼각형 넓이의 단계별 예제",
        "blocks": [
          { "kind": "p", "text": "고전적인 직각삼각형 네 개가 크기를 키워가며 방법을 보여줍니다. 각 예제는 공식에 대입하며, 빗변은 선택적 확인용으로만 등장하고 입력으로는 절대 쓰이지 않습니다." },
          { "kind": "h3", "text": "예제 1: 3-4-5 직각삼각형" },
          { "kind": "p", "text": "[[a=3]], [[b=4]]가 주어졌습니다. 1단계: 공식을 씁니다, [[K=\\frac{a\\times b}{2}]]. 2단계: 대입합니다, [[K=\\frac{3\\times4}{2}]]. 3단계: 곱합니다, [[K=\\frac{12}{2}]]. 최종 답: [[[\\boxed{K=6\\text{ square units}}]]] 선택적 확인: [[c=\\sqrt{3^2+4^2}=5]]. 빗변은 친숙한 삼중수를 확인해주지만 넓이에는 관여하지 않습니다." },
          { "kind": "h3", "text": "예제 2: 6-8-10 직각삼각형" },
          { "kind": "p", "text": "[[a=6]], [[b=8]]가 주어졌습니다. 그러면 [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] 직사각형 확인: 감싸는 6×8 직사각형의 넓이는 48이며, 삼각형은 그 정확히 절반을 차지합니다." },
          { "kind": "h3", "text": "예제 3: 5-12-13 직각삼각형" },
          { "kind": "p", "text": "[[a=5]], [[b=12]]가 주어졌습니다. 그러면 [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] 13인 빗변은 계산에 절대 들어가지 않습니다. 변이 하나 빠졌을 때만 문제될 것입니다." },
          { "kind": "h3", "text": "예제 4: 8-15-17 직각삼각형" },
          { "kind": "p", "text": "[[a=8]], [[b=15]]가 주어졌습니다. 그러면 [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] 같은 세 단계, 더 큰 숫자, 동일한 논리." },
          { "kind": "h3", "text": "기초 예제 비교" }
        ],
        "table": {
          "headers": ["삼각형", "변 a", "변 b", "빗변(확인용)", "계산된 넓이"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "두 변으로 구하는 직각삼각형 넓이의 실생활 활용",
        "blocks": [
          { "kind": "p", "text": "열두 가지 실제 상황이 공식을 페이지에서 작업장, 현장, 스튜디오로 옮깁니다. 각각은 직각삼각형 패널, 구역, 측단면, 또는 단순화된 모형을 이름 붙이고, 두 계산기 입력을 공식에 통과시켜 답을 내며, 숫자 뒤의 가정을 밝힙니다. 실제 물체가 곡선이거나 불규칙한 경우 계산은 모형화된 삼각형만 다루며, 넓이는 그 자체로 강도, 비용, 안전을 대신하지 않습니다." },
          { "kind": "h3", "text": "예제 1: 삼각형 유리창" },
          { "kind": "p", "text": "삼각형 유리창의 수직 치수는 [[a=3\\text{ m}]], [[b=4\\text{ m}]]입니다. 대입: [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] 결과는 프레임 치수를 빼기 전의 평평한 유리 표면을 나타냅니다. 가정: 유리판은 진정한 직각삼각형이며, 프레임 여유는 별도로 처리합니다." },
          { "kind": "h3", "text": "예제 2: 강철 지지 브래킷" },
          { "kind": "p", "text": "삼각형 강철 브래킷은 [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]입니다. 그러면 [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] 넓이는 평평한 판을 설명하며 하중 지지 능력을 결정하지 않습니다. 가정: 브래킷 소재는 직각삼각형으로 절단되며, 볼트 구멍과 굽힘은 제외합니다." },
          { "kind": "h3", "text": "예제 3: 삼각형 경사로 측단면" },
          { "kind": "p", "text": "단순화된 경사로 측단면은 [[a=6\\text{ m}]], [[b=8\\text{ m}]]입니다. 그러면 [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] 이것은 기울어진 보행 표면이 아니라 수직인 삼각형 측단면입니다. 가정: 측단면은 밑변에 직각 모서리를 둔 것으로 모형화합니다." },
          { "kind": "h3", "text": "예제 4: 삼각형 지붕 지지대" },
          { "kind": "p", "text": "삼각형 지붕 지지대 단면은 [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]입니다. 그러면 [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] 넓이는 평평한 삼각형 단면을 나타내며 자재 추산에 유용합니다. 가정: 단면은 직각삼각형으로 모형화하며, 전체 지붕 형상은 다를 수 있습니다." },
          { "kind": "h3", "text": "예제 5: 직각삼각형 정원 구역" },
          { "kind": "p", "text": "정원에는 [[a=7\\text{ m}]], [[b=24\\text{ m}]]인 직각삼각형 구역이 있습니다. 그러면 [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] 결과는 식재나 잔디에 쓸 수 있는 면적 추산에 도움이 됩니다. 가정: 화단 경계는 직선이며 직각으로 만납니다." },
          { "kind": "h3", "text": "예제 6: 삼각형 천 돛" },
          { "kind": "p", "text": "직각삼각형 천 패널은 [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]입니다. 그러면 [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] 이것은 솔기와 자재 여유 전의 평평한 삼각형 천 단면을 나타냅니다. 가정: 돛은 평평한 것으로 모형화합니다. 실제 돛은 하중을 받으면 굽습니다." },
          { "kind": "h3", "text": "예제 7: 합판 절단 템플릿" },
          { "kind": "p", "text": "직각삼각형 합판 템플릿은 [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]입니다. 그러면 [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] 결과는 절단 손실 전의 자재 소요량 추산에 도움이 됩니다. 가정: 템플릿은 진정한 직각삼각형이며, 톱날 두께와 자투리는 별도입니다." },
          { "kind": "h3", "text": "예제 8: 삼각형 간판 패널" },
          { "kind": "p", "text": "삼각형 간판 패널의 수직 치수는 [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]입니다. 그러면 [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] 이것은 평평한 인쇄 또는 도장 면적을 나타냅니다. 가정: 패널 면은 평평하고 직각삼각형이며, 장착 철물은 제외합니다." },
          { "kind": "h3", "text": "예제 9: 토지 측량 구역" },
          { "kind": "p", "text": "단순화된 직각삼각형 토지 구역은 [[a=9\\text{ m}]], [[b=40\\text{ m}]]입니다. 그러면 [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] 공식은 측량된 삼각형 구역의 넓이를 계산합니다. 가정: 구역은 직각 모서리를 둔 것으로 모형화합니다. 불규칙한 필지는 더 단순한 도형으로 나누어야 합니다." },
          { "kind": "h3", "text": "예제 10: 삼각형 어닝 지지대" },
          { "kind": "p", "text": "직각삼각형 어닝 지지대 단면은 [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]입니다. 그러면 [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] 결과는 모형화된 평평한 삼각형 단면을 나타내며, 불규칙한 어닝의 전체 표면이 꼭 그런 것은 아닙니다. 가정: 지지대 형상은 직각삼각형으로 단순화합니다." },
          { "kind": "h3", "text": "예제 11: 산업용 지지 패널" },
          { "kind": "p", "text": "직각삼각형 산업용 패널은 [[a=11\\text{ m}]], [[b=60\\text{ m}]]입니다. 그러면 [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] 넓이는 구조적 성능이 아니라 평평한 기하학적 패널을 설명합니다. 가정: 패널은 직각삼각형으로 모형화하며, 두께와 고정 장치는 별개의 문제입니다." },
          { "kind": "h3", "text": "예제 12: 창고 지붕 끝단" },
          { "kind": "p", "text": "창고에는 [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]인 단순화된 직각삼각형 지붕 끝단이 있습니다. 그러면 [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] 결과는 평평한 삼각형 끝단 면적 추산에 도움이 되며, 예를 들어 외장재 견적을 낼 때 씁니다. 가정: 박공 끝단은 직각삼각형으로 모형화합니다." },
          { "kind": "h3", "text": "실제 예제 비교" }
        ],
        "table": {
          "headers": ["실제 활용", "변 a", "변 b", "빗변(선택)", "계산된 넓이", "측정 단위"],
          "rows": [
            ["유리창", "3", "4", "5", "6", "m²"],
            ["강철 브래킷", "5", "12", "13", "30", "cm²"],
            ["경사로 측단면", "6", "8", "10", "24", "m²"],
            ["지붕 지지대", "8", "15", "17", "60", "ft²"],
            ["정원 구역", "7", "24", "25", "84", "m²"],
            ["천 돛", "9", "12", "15", "54", "ft²"],
            ["합판 템플릿", "12", "16", "20", "96", "cm²"],
            ["간판 패널", "20", "21", "29", "210", "cm²"],
            ["측량 구역", "9", "40", "41", "180", "m²"],
            ["어닝 지지대", "15", "20", "25", "150", "ft²"],
            ["산업용 패널", "11", "60", "61", "330", "m²"],
            ["창고 지붕 끝단", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "피타고라스 정리는 직각삼각형 넓이와 어떤 관계가 있나요?",
        "blocks": [
          { "kind": "p", "text": "피타고라스 정리는 [[[\\boxed{a^2+b^2=c^2}]]]라 말합니다. 변 [[a]]와 [[b]]가 빗변 [[c]]를 결정합니다. 이것은 변의 길이에 대한 질문에 답하고, 넓이 공식은 둘러싸인 표면을 측정합니다. 둘은 관련 있지만 다른 문제를 풀며, 여기서의 넓이 계산은 정리에 절대 의존하지 않습니다." },
          { "kind": "h3", "text": "두 변으로 빗변 구하기" },
          { "kind": "p", "text": "[[a=6]], [[b=8]]이면 빗변은 [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]]입니다. 넓이는 별도로 계산합니다. [[K=\\frac{6\\times8}{2}=24]]. 빗변은 이 넓이 계산에 선택적인 추가 정보로, 필요한 단계가 아니라 유용한 사실입니다." },
          { "kind": "h3", "text": "피타고라스 정리가 넓이 공식을 대신할 수 있나요?" },
          { "kind": "p", "text": "아니요. 피타고라스 정리는 변의 길이 사이의 관계를 결정하고, 넓이 공식은 두 수직 변을 둘러싸인 표면으로 바꿉니다. 하나는 얼마나 긴지에, 다른 하나는 표면이 얼마나 되는지에 답합니다. 둘은 협력합니다. 한 변과 빗변만 알 때는 정리가 먼저 빠진 변을 복원하고, 그 다음 넓이 공식이 이어받습니다. 어느 쪽도 다른 쪽을 대신하지 못합니다." },
          { "kind": "h3", "text": "피타고라스 정리는 언제 유용한가요?" },
          { "kind": "p", "text": "변이 하나 빠졌거나 측정을 확인해야 할 때 제 몫을 합니다. 한 변과 빗변만 알려졌을 때, 넓이 단계 전에 빠진 변을 찾아야 할 때, 계산된 빗변을 검증해야 할 때, 또는 현장에서 시공 측정을 확인해야 할 때. 전용 빠진 변 계산에는 직각삼각형 변 계산기가 그 단계를 처리하며, 그 결과를 변 넓이 공식에 바로 되먹일 수 있습니다." }
        ]
      },
      "sec-missing-leg": {
        "h2": "삼각형 넓이를 알 때 빠진 변을 구하는 방법",
        "blocks": [
          { "kind": "p", "text": "넓이 공식은 양쪽으로 읽힙니다. [[K=\\frac{ab}{2}]]에서 시작합니다. 양변에 2를 곱합니다. [[2K=ab]]. [[a]]로 나눕니다. [[[\\boxed{b=\\frac{2K}{a}}]]] 마찬가지로 [[[\\boxed{a=\\frac{2K}{b}}]]] 같은 관계를 재배열하면 어느 쪽 빠진 변이든 복원합니다." },
          { "kind": "h3", "text": "풀이 예제" },
          { "kind": "p", "text": "[[K=24\\text{ cm}^2]], [[a=6\\text{ cm}]]이라 가정합니다. 그러면 [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] 단위는 일관되게 유지됩니다. 제곱센티미터를 센티미터로 나누면 센티미터가 됩니다. 이 역이용은 보고된 넓이를 확인하거나 도면에서 치수를 복원할 때 편리하지만, 이것은 교육적 재배열일 뿐 위 계산기의 추가 입력 모드가 아니며, 계산기는 여전히 두 변을 받습니다." }
        ]
      },
      "sec-scaling": {
        "h2": "두 변을 바꾸면 넓이에 어떤 영향을 미치나요?",
        "blocks": [
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]가 곱이므로 변을 늘리면 넓이도 예측 가능한 방식으로 늘어납니다. 삼각형 설계를 크기 조정하기 전에 아래 패턴을 알아두면 좋습니다." },
          { "kind": "h3", "text": "한 변이 두 배가 되면?" },
          { "kind": "p", "text": "[[a]]는 고정하고 [[b]]를 두 배로 합니다. 그러면 [[K_1=\\frac{ab}{2}]]가 [[K_2=\\frac{a(2b)}{2}]]가 되므로 [[[\\boxed{K_2=2K_1}]]] 한 변만 두 배로 하면 넓이도 두 배가 됩니다. 구체적인 확인: 3×4 삼각형은 [[K=6]]이며, 한 변을 늘려 3×8로 만들면 [[K=12]]가 됩니다." },
          { "kind": "h3", "text": "두 변이 모두 두 배가 되면?" },
          { "kind": "p", "text": "이제 둘 다 두 배로 합니다. [[K_2=\\frac{(2a)(2b)}{2}]]이며, 이는 [[[\\boxed{K_2=4K_1}]]]로 간단해집니다. 두 수직 치수를 모두 두 배로 하면 넓이는 두 배가 아니라 네 배가 됩니다. 3×4 삼각형([[K=6]])을 6×8로 확대하면 [[K=24]]가 되며, 정확히 원래의 네 배입니다." },
          { "kind": "h3", "text": "두 변에 축척을 적용하면?" },
          { "kind": "p", "text": "각 변에 축척 계수 [[k]]를 곱합니다. [[K_2=\\frac{(ka)(kb)}{2}]], 따라서 [[[\\boxed{K_2=k^2K_1}]]] 넓이는 축척 계수의 제곱으로 커집니다. 실제 예제: 6×8 삼각형에 1.5를 곱해 9×12로 만듭니다. 그러면 [[K=\\frac{9\\times12}{2}=54]]이며, [[24\\times1.5^2=24\\times2.25=54]]입니다. 자재 추산이 선형 치수보다 빨리 뛰는 이유가 이것입니다. 모든 길이를 두 배로 하면 판은 네 배가 필요합니다." },
          { "kind": "h3", "text": "서로 다른 두 직각삼각형이 같은 넓이를 가질 수 있나요?" },
          { "kind": "p", "text": "네. 삼각형 1, [[a=3]], [[b=4]]와 비교합니다. [[K=\\frac{3\\times4}{2}=6]]. 삼각형 2, [[a=2]], [[b=6]]: [[K=\\frac{2\\times6}{2}=6]]. 변의 곱이 같으면 서로 다른 모양도 같은 넓이를 둘러쌉니다. 짧고 넓은 삼각형과 키 크고 좁은 삼각형이 동일한 표면을 덮을 수 있으며, 이는 패널을 서로 다른 공간에 맞출 때 중요합니다." }
        ],
        "imgAlt": "3×4와 2×6인 두 직각삼각형을 나란히, 같은 넓이 6",
        "figcaption": "비율은 다르지만 넓이는 같습니다. 두 직각삼각형 모두 6 제곱 단위를 둘러쌉니다."
      },
      "sec-general": {
        "h2": "왜 두 변 공식을 모든 삼각형에 사용할 수 없나요?",
        "blocks": [
          { "kind": "p", "text": "공식 [[K=\\frac{ab}{2}]]는 두 변이 수직이기에 성립합니다. 일반적인 삼각형에서는 두 변의 길이만으로는 부족합니다. 그 사이의 끼인각, 또는 대응하는 높이를 함께 알아야 합니다." },
          { "kind": "p", "text": "일반 규칙은 [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]]이며, 여기서 [[C]]는 변 [[a]]와 [[b]] 사이의 끼인각입니다. 직각삼각형에서는 [[C=90^\\circ]]이고 [[\\sin(90^\\circ)=1]]입니다. 따라서 [[K=\\frac{ab\\times1}{2}]]이며, 이는 [[[\\boxed{K=\\frac{ab}{2}}]]]입니다. 직각삼각형 공식은 사인 계수가 1인 일반 공식입니다. 다른 각에서는 사인이 곱을 줄이므로, 변 공식을 직각이 아닌 삼각형에 적용해서는 절대 안 됩니다. [[\\sin(C)]]가 1이 아닌데도 1인 것처럼 조용히 다루기 때문입니다." }
        ]
      },
      "sec-units": {
        "h2": "직각삼각형 넓이를 계산할 때의 단위 이해하기",
        "blocks": [
          { "kind": "p", "text": "두 변은 공식을 적용하기 전에 하나의 길이 단위를 공유해야 합니다. 답의 제곱 단위는 두 길이 단위를 곱해서 나오므로, 일관된 단위가 숫자를 의미 있게 유지합니다." },
          { "kind": "h3", "text": "왜 결과에 제곱 단위를 쓰나요?" },
          { "kind": "p", "text": "넓이는 표면을 덮는 단위 정사각형의 개수를 셉니다. [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. 단위는 항상 길이 단위를 제곱한 것인데, 두 길이의 곱은 정사각형의 개수이기 때문입니다. 넓이를 24 m이라 보고하는 것은 범주 오류입니다. 24 m은 길이고, 24 m²는 표면입니다." },
          { "kind": "h3", "text": "계산 전에 서로 다른 단위 변환하기" },
          { "kind": "p", "text": "[[a=3\\text{ ft}]], [[b=24\\text{ inches}]]를 가져옵니다. 먼저 변환합니다. [[24\\text{ inches}=2\\text{ ft}]]. 그러면 [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] 변환 없이는 날것의 곱 72에 깔끔한 의미가 없습니다. 제곱피트도 제곱인치도 아닙니다. 먼저 변환하고, 다음에 곱하면 답의 단위가 자동으로 따라옵니다." },
          { "kind": "h3", "text": "소수점 측정값으로 계산하기" },
          { "kind": "p", "text": "같은 공식이 소수도 아무 변경 없이 처리합니다. [[a=3.5]], [[b=9.2]]가 주어지면 [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] 정수, 소수, 정밀한 작업장 측정값 모두 같은 곱하고 절반 나누기를 통과합니다. 측정이 뒷받침하는 소수점 자릿수를 유지하고 계산은 계산기에 맡기세요." },
          { "kind": "h3", "text": "왜 이른 반올림을 피해야 하나요?" },
          { "kind": "p", "text": "입력을 반올림하면 오차가 곱셈을 타고 답까지 이어집니다. 9.2로 측정된 변을 곱하기 전에 9로 만들면 안 됩니다. 단위당 잃는 0.2가 곱 전체에 쌓입니다. 중간 단계까지 완전한 정밀도를 유지하고, 측정이 정당화하는 정확도로 최종 결과만 반올림하세요. 일찍 지킨 정밀도가 끝에서 전달하는 정확도입니다." }
        ]
      },
      "sec-mistakes": {
        "h2": "변으로 직각삼각형 넓이를 구할 때 흔한 실수",
        "blocks": [
          { "kind": "p", "text": "이 주제의 틀린 답은 거의 모두 나쁜 계산이 아니라 잘못된 입력 라벨에서 비롯됩니다. 아래 열다섯 가지 실수는 반복해서 등장하는 것들로, 각각 원인과 해결책을 함께 적었습니다." },
          { "kind": "h3", "text": "1. 두 변 중 하나로 빗변 쓰기" },
          { "kind": "p", "text": "빗변은 가장 긴 변이며 직각을 절대 이루지 않습니다. 그것을 변으로 입력하면 곱이 부풀어 오릅니다. 예를 들어 10을 8과 함께 변으로 취급하면 24 대신 40이 됩니다. 해결책: 먼저 직각을 찾으세요. 그것에 닿는 두 변이 변입니다." },
          { "kind": "h3", "text": "2. 두 변을 다른 변과 혼동하기" },
          { "kind": "p", "text": "기울어진 그림에서는 어느 변도 자연스러운 밑변처럼 보일 수 있습니다. 라벨 [[a]]와 [[b]]는 수직인 쌍에만 속합니다. 해결책: 삼각형이 어떻게 돌아가 있든 라벨을 붙이기 전에 직각 모서리 표시를 찾으세요." },
          { "kind": "h3", "text": "3. 두 변이 90도 각을 이루어야 함을 잊기" },
          { "kind": "p", "text": "절반이 된 곱은 수직을 가정합니다. 80도나 100도로 만나는 두 변에는 일반 사인 공식이 대신 필요합니다. 해결책: [[K=\\frac{ab}{2}]]를 사용하기 전에 모서리가 직각인지 확인하세요." },
          { "kind": "h3", "text": "4. 2로 나누는 것을 잊기" },
          { "kind": "p", "text": "곱 [[a\\times b]]만으로는 감싸는 직사각형의 넓이로, 삼각형의 두 배입니다. 해결책: 곱을 절반으로 나누세요. /2는 공식의 일부이지 선택 사항이 아닙니다." },
          { "kind": "h3", "text": "5. 삼각형이 아니라 직사각형의 넓이 계산하기" },
          { "kind": "p", "text": "48은 6×8 직사각형에는 유효한 넓이지만, 그 안의 삼각형에는 아닙니다. 해결책: 문제가 어느 도형을 원하는지 물은 뒤, 삼각형에만 절반 나누기를 적용하세요." },
          { "kind": "h3", "text": "6. 피트와 인치를 섞기" },
          { "kind": "p", "text": "3 ft에 24 in을 곱하면 깔끔하지 않은 72가 됩니다. 해결책: 계산 전에 둘 다 하나의 단위로 변환하세요(24 in = 2 ft)." },
          { "kind": "h3", "text": "7. 센티미터와 미터를 섞기" },
          { "kind": "p", "text": "미터 단위에서의 같은 함정입니다. 2 m와 30 cm는 먼저 하나의 단위가 되어야 합니다. 해결책: 변환한 뒤(30 cm = 0.3 m) 곱하세요." },
          { "kind": "h3", "text": "8. 결과를 선형 단위로 보고하기" },
          { "kind": "p", "text": "24 m²의 넓이는 24 m가 아닙니다. 해결책: 숫자에는 매번 제곱 단위를 함께 쓰세요." },
          { "kind": "h3", "text": "9. 한 변만 사용하기" },
          { "kind": "p", "text": "한 변은 길이지 넓이가 아닙니다. 공식은 그 쌍을 필요로 합니다. 하나의 측정값을 입력하면 아무것에도 답하지 못합니다. 해결책: 두 수직 변을 모두 재세요." },
          { "kind": "h3", "text": "10. 직각삼각형의 어느 두 변이든 수직인 것으로 취급하기" },
          { "kind": "p", "text": "수직인 것은 변뿐입니다. 변-빗변 쌍은 예각에서 만나므로 그 절반이 된 곱은 넓이가 아닙니다. 해결책: 선택한 두 변이 모두 직각에 닿는지 확인하세요." },
          { "kind": "h3", "text": "11. 음수 또는 0 측정값 사용하기" },
          { "kind": "p", "text": "길이는 양수입니다. 0은 삼각형을 넓이 없는 선으로 무너뜨리고, 음수 길이는 여기서 기하학적 의미가 없습니다. 해결책: 다시 재세요. 양수가 아닌 입력은 거부하세요." },
          { "kind": "h3", "text": "12. 소수점 입력을 너무 일찍 반올림하기" },
          { "kind": "p", "text": "곱하기 전에 9.2를 9로 반올림하면 답이 16.1에서 아래로 이동합니다. 해결책: 계산 내내 완전한 정밀도를 유지하고 최종 결과만 반올림하세요." },
          { "kind": "h3", "text": "13. 빗변이 필요하다고 가정하기" },
          { "kind": "p", "text": "필요하지 않습니다. [[K=\\frac{ab}{2}]]는 변만 쓰며, 빗변을 먼저 구하면 아무것도 바꾸지 않는 단계가 하나 더해집니다. 해결책: 다른 계산에 필요하지 않으면 건너뛰세요." },
          { "kind": "h3", "text": "14. 둘레와 넓이 혼동하기" },
          { "kind": "p", "text": "둘레는 세 변을 더하고([[a+b+c]]), 넓이는 두 변을 곱해 절반으로 나눕니다. 6-8-10에서는 둘레가 24이면서 넓이도 24인데, 이 우연이 실제 혼동을 일으킵니다. 해결책: 문제가 경계 길이를 묻는지 둘러싸인 표면을 묻는지 확인하세요." },
          { "kind": "h3", "text": "15. 직각삼각형 공식을 직각이 아닌 삼각형에 적용하기" },
          { "kind": "p", "text": "90도 모서리 없이는 곱에 끼인각의 사인이 필요합니다. 일반 삼각형에 [[K=\\frac{ab}{2}]]를 쓰면 넓이를 과대평가합니다. 해결책: 실제 끼인각과 함께 [[K=\\frac{ab\\sin(C)}{2}]]를 쓰세요." },
          { "kind": "h3", "text": "틀린 경우와 맞는 경우: 구체적인 예제" },
          { "kind": "p", "text": "[[a=6]], [[b=8]]을 사용합니다. 맞게: [[K=\\frac{6\\times8}{2}=24]]. 2로 나누는 것을 잊고 틀리게: [[6\\times8=48]]이며, 이는 직각삼각형이 아니라 대응하는 직사각형의 넓이입니다. 빗변 10을 수직 변인 것처럼 쓰고 틀리게: [[K=\\frac{10\\times8}{2}=40]]이며, 10이 8에 수직이 아니므로 틀립니다. 세 경우 모두 계산은 자신만만해 보입니다. 기하학만이 그것들을 구분합니다." }
        ]
      },
      "sec-verify": {
        "h2": "구한 직각삼각형 넓이가 맞는지 확인하는 방법",
        "blocks": [
          { "kind": "p", "text": "여섯 가지 독립적인 확인으로, 모두 6-8-10 삼각형([[a=6]], [[b=8]], [[c=10]], [[K=24]])에 시연합니다. 서로 다른 경로 사이의 일치는 숙제에서든 실제 측정에서든 답이 맞다는 가장 강력한 증거입니다." },
          { "kind": "h3", "text": "방법 1: 주요 공식으로 다시 계산하기" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]를 새로 돌립니다. [[K=\\frac{6\\times8}{2}=24]]. 숫자를 다시 입력하는 두 번째 계산은 오타와 잘못 눌린 숫자를 잡아냅니다." },
          { "kind": "h3", "text": "방법 2: 삼각형을 두 배로 늘려 직사각형 만들기" },
          { "kind": "p", "text": "두 배가 된 삼각형은 6×8 직사각형입니다. [[K_{\\text{rectangle}}=6\\times8=48]], 따라서 [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. 두 배가 된 넓이가 [[a\\times b]]와 맞지 않으면 계산이 어딘가에서 빗나간 것입니다." },
          { "kind": "h3", "text": "방법 3: 피타고라스 정리로 빗변 확인하기" },
          { "kind": "p", "text": "[[c=\\sqrt{a^2+b^2}]]를 확인합니다. [[c=\\sqrt{36+64}=10]]. 이것은 넓이 뒤의 변 식별을 점검합니다. 틀린 빗변은 변에 잘못 라벨을 붙였다는 뜻입니다." },
          { "kind": "h3", "text": "방법 4: 넓이 공식 재배열하기" },
          { "kind": "p", "text": "답에서 알려진 입력을 복원합니다. [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. 시작한 변으로 돌아오면 고리가 닫히고 나누기 단계가 확인됩니다." },
          { "kind": "h3", "text": "방법 5: 측정 단위 확인하기" },
          { "kind": "p", "text": "두 변은 같은 길이 단위를 써야 하며, 답은 그 단위를 제곱한 것이어야 합니다. 섞인 단위나 답의 선형 단위는 숫자를 다시 확인하기 전에 설정 오류를 알립니다." },
          { "kind": "h3", "text": "방법 6: 결과 어림하기" },
          { "kind": "p", "text": "친숙한 숫자로 반올림합니다. 6×8은 50에 가깝고, 절반이면 25에 가깝습니다. 24라는 답은 어림 바로 옆에 있습니다. 240이나 2.4라는 답은 그렇지 않을 것입니다. 어림은 정확한 재계산이 반복할 수 있는 소수점과 나누기 오류를 잡아냅니다." }
        ]
      },
      "sec-applications": {
        "h2": "실제 적용: 두 변으로 구하는 직각삼각형 넓이",
        "blocks": [
          { "kind": "p", "text": "같은 두 입력 패턴은 직각 모서리를 재야 하는 곳이면 어디서나 나타납니다. 유리공은 창의 두 수직 모서리를 읽고, 제작자는 브래킷 소재의 변을 재며, 측량사는 필지 모서리를 두 수직 오프셋으로 줄입니다. 각 경우에 빗변은 재기 어색한 측정값이며, 이 공식은 그것을 절대 묻지 않습니다." },
          { "kind": "p", "text": "아래 네 패널은 서로 다른 축척에서 그 패턴을 보여줍니다. 유리창(6 m²)과 정원 구역(84 m²)은 미터 단위의 3-4-5와 7-24-25 기하학을 쓰고, 지붕 지지대(60 ft²)는 8-15-17 삼각형을 쓰며, 강판(30 cm²)은 5-12-13을 씁니다. 모든 패널은 두 변, 직각 표시, 결과 넓이에 라벨을 붙여 측정에서 답까지의 경로를 보이게 합니다." }
        ],
        "imgAlt": "네 패널: 유리창 6 m2, 지붕 지지대 60 ft2, 정원 구역 84 m2, 강판 30 cm2",
        "figcaption": "네 가지 실제 용도: 유리창, 지붕 지지대, 정원 구역, 강판과 그 넓이."
      },
      "sec-faq": {
        "h2": "자주 묻는 질문",
        "blocks": [
          { "kind": "p", "text": "아래는 두 변으로 구하는 직각삼각형 넓이에 대한 가장 흔한 질문들의 답변입니다." }
        ]
      },
      "sec-related": {
        "h2": "관련 직각삼각형 계산기 살펴보기",
        "blocks": [
          { "kind": "p", "text": "측정값마다 필요한 계산기가 다릅니다." }
        ]
      },
      "sec-conclusion": {
        "h2": "두 개의 측정값, 절반이 된 하나의 곱",
        "blocks": [
          { "kind": "p", "text": "두 수직 길이면 충분합니다. 곱하고, 그 곱을 절반으로 나누면 둘러싸인 표면의 이름이 정해집니다. 직사각형 증명은 절반 나누기가 관습이 아니라 정확한 이유를 보여주고, 피타고라스 정리는 답 뒤의 변들을 점검하며, 재배열된 공식은 넓이를 이미 알 때 빠진 변을 복원합니다." },
          { "kind": "p", "text": "작업 습관은 단순합니다. 90도 모서리를 확인하고, 단위를 맞추며, 끝까지 소수를 반올림하지 말고, 직사각형으로 검증하세요. 그 습관들과 함께라면 [[K=\\frac{ab}{2}]]는 기하학에서 가장 믿음직한 넓이 계산입니다." }
        ]
      }
    }
  },
  "ms": {
    "faqs": [
      {
        "question": "Apakah formula luas segi tiga bersudut tepat daripada kakinya?",
        "answer": "K = ab/2, dengan a dan b ialah dua kaki yang berserenjang. Darabkan kedua-dua kaki dan bahagikan dengan dua. Untuk a = 6 dan b = 8, K = (6 × 8) / 2 = 24 unit persegi. Tiada hipotenus, sudut, atau ukuran lain diperlukan."
      },
      {
        "question": "Mengapa kita mendarab kedua-dua kaki dan membahagi dengan dua?",
        "answer": "Kedua-dua kaki membentuk sisi segi empat tepat yang melingkunginya dengan luas a × b, dan pepenjuru segi empat tepat itu membelahnya kepada dua segi tiga bersudut tepat yang serupa. Setiap segi tiga memiliki separuh segi empat tepat itu, jadi luasnya ialah hasil darab yang dibelah dua. Pendaraban membina segi empat tepat; pembahagian memangkasnya menjadi segi tiga."
      },
      {
        "question": "Adakah saya memerlukan hipotenus untuk mengira luas?",
        "answer": "Tidak. Luas diperoleh daripada dua kaki sahaja melalui K = ab/2. Hipotenus, c = √(a² + b²), berguna untuk menyemak label sisi atau mendapatkan semula sisi yang hilang, tetapi ia tidak pernah memasuki pengiraan luas itu sendiri."
      },
      {
        "question": "Apakah perbezaan antara kaki dan hipotenus?",
        "answer": "Kaki ialah dua sisi yang bertemu pada sudut tepat dan berserenjang antara satu sama lain. Hipotenus terletak bertentangan dengan sudut tepat dan sentiasa sisi terpanjang. Kalkulator mengambil dua kaki sebagai input; memasukkan hipotenus sebagai kaki menghasilkan jawapan yang salah."
      },
      {
        "question": "Bolehkah saya menukar kaki a dan kaki b?",
        "answer": "Ya. Pendaraban bersifat kalis tukar tertib, jadi (a × b) / 2 sama dengan (b × a) / 2. Memasukkan 3 dan 4 dalam mana-mana tertib memberi 6. Label hanyalah kemudahan untuk membincangkan sisi, bukan kekangan pada pengiraan."
      },
      {
        "question": "Bolehkah saya mengira luas menggunakan ukuran kaki perpuluhan?",
        "answer": "Ya. Untuk a = 3.5 dan b = 9.2, K = (3.5 × 9.2) / 2 = 16.1 unit persegi. Kaedahnya serupa untuk nombor bulat dan perpuluhan. Kekalkan ketepatan penuh semasa pengiraan dan bundarkan hanya jawapan akhir mengikut ketepatan ukuran."
      },
      {
        "question": "Apakah yang berlaku jika kedua-dua kaki menggunakan unit berbeza?",
        "answer": "Tukarkan kepada satu unit sebelum mengira. Dengan a = 3 kaki dan b = 24 inci, tukarkan 24 inci kepada 2 kaki, kemudian K = (3 × 2) / 2 = 3 kaki². Mendarab unit bercampur menghasilkan nombor tanpa makna yang jelas, jadi langkah penukaran adalah wajib."
      },
      {
        "question": "Bolehkah saya mencari kaki yang hilang jika saya tahu luasnya?",
        "answer": "Ya, dengan menyusun semula formula kepada b = 2K/a (atau a = 2K/b). Dengan K = 24 cm² dan a = 6 cm, b = 48/6 = 8 cm. Ini ialah hubungan yang sama dibaca secara songsang, bukan mod kalkulator yang berasingan; kalkulator itu sendiri masih mengambil dua kaki."
      },
      {
        "question": "Bagaimanakah teorem Pythagoras berkaitan dengan luas segi tiga?",
        "answer": "Ia menghubungkan panjang sisi melalui a² + b² = c², manakala formula luas mengukur permukaan yang dilingkungi. Gunakan teorem untuk mencari sisi yang hilang atau mengesahkan hipotenus, kemudian gunakan K = ab/2. Untuk kaki 6 dan 8, c = 10, dan luas kekal 24 dalam apa cara sekalipun."
      },
      {
        "question": "Adakah formula ini berfungsi untuk segi tiga bukan bersudut tepat?",
        "answer": "Tidak. K = ab/2 menganggap sudut terkandung antara sisi ialah 90 darjah. Untuk segi tiga lain gunakan K = ab sin(C)/2 dengan sudut terkandung sebenar C. Menggunakan formula kaki pada segi tiga bukan bersudut tepat menganggap sin(C) sebagai 1 sedangkan ia bukan, lalu melebih-lebihkan luas."
      },
      {
        "question": "Mengapa jawapan dinyatakan dalam unit persegi?",
        "answer": "Luas mengira segi empat unit yang menutupi permukaan: cm × cm = cm², m × m = m², kaki × kaki = kaki². Unit linear seperti 24 m menerangkan panjang, bukan permukaan. Sentiasa laporkan unit kuasa dua bersama nombor."
      },
      {
        "question": "Bolehkah dua segi tiga bersudut tepat yang berbeza mempunyai luas yang sama?",
        "answer": "Ya, selagi hasil darab kakinya sepadan. Segi tiga 3-darab-4 dan segi tiga 2-darab-6 kedua-duanya memberi K = 6. Bentuk dan luas adalah bebas: hasil darab yang sama bermakna luas yang sama, jadi segi tiga yang tinggi dan sempit boleh melingkungi permukaan yang sama tepat dengan segi tiga yang rendah dan lebar."
      }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tepat",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Kaki dan Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat daripada Semiperimeter",
      "Kalkulator Sisi Segi Tiga Bersudut Tepat",
      "Kalkulator Perimeter Segi Tiga Bersudut Tepat"
    ],
    "relatedIntro": "Ukuran yang berbeza memerlukan kalkulator yang berbeza.",
    "faqHeading": "Soalan Lazim",
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Bersudut Tepat Menggunakan Dua Kakinya",
      "sec-anatomy": "Apakah Segi Tiga Bersudut Tepat?",
      "sec-base-height": "Mengapa Dua Kaki Merupakan Tapak dan Tinggi?",
      "sec-formula": "Mengapa Luas Segi Tiga Bersudut Tepat Separuh Hasil Darab Kakinya?",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat daripada Kaki",
      "sec-examples": "Contoh Langkah demi Langkah Luas Segi Tiga Bersudut Tepat daripada Dua Kaki",
      "sec-practical": "Aplikasi Sebenar Luas Segi Tiga Bersudut Tepat daripada Dua Kaki",
      "sec-pythagoras": "Bagaimanakah Teorem Pythagoras Berkaitan dengan Luas Segi Tiga Bersudut Tepat?",
      "sec-missing-leg": "Cara Mencari Kaki yang Hilang Apabila Luas Segi Tiga Diketahui",
      "sec-scaling": "Bagaimanakah Mengubah Dua Kaki Mempengaruhi Luas?",
      "sec-general": "Mengapa Anda Tidak Boleh Menggunakan Formula Dua Kaki untuk Setiap Segi Tiga?",
      "sec-units": "Memahami Unit Apabila Mengira Luas Segi Tiga Bersudut Tepat",
      "sec-mistakes": "Kesilapan Lazim Apabila Mengira Luas Segi Tiga Bersudut Tepat daripada Kaki",
      "sec-verify": "Cara Menyemak Sama Ada Luas Segi Tiga Bersudut Tepat Anda Betul",
      "sec-applications": "Luas Segi Tiga Bersudut Tepat daripada Dua Kaki dalam Amalan",
      "sec-faq": "Soalan Lazim",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "sec-conclusion": "Dua Ukuran, Satu Hasil Darab yang Dibelah Dua"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Bersudut Tepat Menggunakan Dua Kakinya",
        "blocks": [
          { "kind": "p", "text": "Ambil [[a=6]], [[b=8]]. Gunakan [[K=\\frac{6\\times8}{2}]]: [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Hasilnya menamakan jumlah permukaan rata yang dilingkungi oleh tiga sisi: dua puluh empat unit persegi. Inilah tepatnya yang dikembalikan oleh Kalkulator Luas Segi Tiga Bersudut Tepat daripada Kaki untuk dua input ini." },
          { "kind": "p", "text": "Kalkulator hanya memerlukan dua kaki, iaitu sisi yang bertemu pada sudut tepat. Oleh sebab kedua-dua sisi itu berserenjang, satu berfungsi sebagai tapak dan satu lagi sebagai tinggi, jadi tiada ukuran lanjut diperlukan. Hipotenus tidak berperanan di sini. Darabkan kaki, belah dua hasil darabnya, dan luas diperoleh daripada [[K=\\frac{ab}{2}]]." },
          { "kind": "p", "text": "Ini antara pengiraan luas paling mudah dalam geometri, kerana kedua-dua ukuran serenjang sudah ada di tangan. Ia muncul di mana-mana sudut berbentuk segi empat sama: susun atur binaan, helaian potongan, batas kebun, dan lakaran ukur semuanya terturun kepada dua kaki dan satu hasil darab yang dibelah dua." }
        ]
      },
      "sec-anatomy": {
        "h2": "Apakah Segi Tiga Bersudut Tepat?",
        "blocks": [
          { "kind": "p", "text": "Sebelum formula difahami, label mestilah tepat. Setiap simbol di bawah muncul dalam kalkulator, dan setiap satunya membawa satu makna yang tetap." },
          { "kind": "h3", "text": "Takrif Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Segi tiga bersudut tepat ialah poligon tiga sisi yang mengandungi tepat satu sudut pedalaman 90 darjah. Ia mempunyai tiga bucu, tiga sisi, dan tiga sudut pedalaman yang berjumlah 180 darjah. Sudut tepat biasanya ditanda dengan segi empat kecil di penjuru. Dua sisi yang membentuk penjuru itu ialah kaki; sisi yang bertentangan ialah hipotenus. Oleh sebab [[C=90^\\circ]], maka [[[\\boxed{A+B=90^\\circ}]]]: dua sudut tirus adalah pelengkap, jadi mengetahui satu menentukan yang satu lagi." },
          { "kind": "h3", "text": "Apakah Dua Kaki Segi Tiga Bersudut Tepat?" },
          { "kind": "p", "text": "Kaki ialah dua sisi yang bertemu pada sudut tepat. Kaki [[a]] terletak bertentangan dengan sudut [[A]]; kaki [[b]] terletak bertentangan dengan sudut [[B]]. Sifat penentunya ialah keserenjangan: [[a\\perp b]]. Fakta tunggal inilah yang menjadikan pengiraan luas begitu langsung, kerana pasangan serenjang sudah membekalkan tapak dan tinggi tanpa binaan tambahan." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut 90 darjah. Ia sentiasa sisi terpanjang segi tiga, dan ia tidak pernah membentuk sudut tepat itu sendiri; ia merentang dari seberangnya. Ia tidak diperlukan dalam formula luas berasaskan kaki. Ia menjadi berguna apabila satu sisi hilang, kerana [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] mendapatkannya semula melalui teorem Pythagoras, tetapi kalkulator luas tidak pernah memintanya." },
          { "kind": "h3", "text": "Mengapa Dua Kaki Berserenjang?" },
          { "kind": "p", "text": "Serenjang bermakna bertemu pada tepat 90 darjah. Kaki berkongsi bucu sudut tepat, jadi penjuru antaranya berbentuk segi empat sama mengikut takrif. Ini penting kerana luas memerlukan tapak didarab dengan tinggi yang serenjang. Dalam segi tiga bersudut tepat pasangan itu sudah dilukis: tiada garis tinggi untuk dijatuhkan, tiada garis tambahan untuk dibina. Segi tiga menyerahkan kedua-dua ukuran secara langsung." },
          { "kind": "h3", "text": "Bolehkah Kaki Ditukar?" },
          { "kind": "p", "text": "Ya. Oleh sebab [[a\\times b=b\\times a]], maka [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]. Semakan konkrit: [[\\frac{3\\times4}{2}=6]] dan [[\\frac{4\\times3}{2}=6]]. Menamakan semula kaki yang dipanggil [[a]] dan yang dipanggil [[b]] tidak mengubah apa-apa tentang segi tiga atau luasnya. Masukkan dua ukuran dalam mana-mana input; kalkulator mengembalikan hasil yang sama." }
        ],
        "imgAlt": "Segi tiga bersudut tepat ABC: sudut tepat di C, kaki a dan b diserlahkan, hipotenus c, formula K = ab/2",
        "figcaption": "Segi tiga ABC: kaki a dan b yang diserlahkan ialah dua ukuran yang diperlukan oleh kalkulator."
      },
      "sec-base-height": {
        "h2": "Mengapa Dua Kaki Merupakan Tapak dan Tinggi?",
        "blocks": [
          { "kind": "p", "text": "Seluruh kaedah bersandar pada satu fakta geometri: dalam segi tiga bersudut tepat, tapak dan tinggi yang serenjang sudah dilukis sebagai dua kaki. Memahami sebabnya mengubah formula daripada peraturan hafalan menjadi sesuatu yang jelas." },
          { "kind": "h3", "text": "Apakah Tapak Segi Tiga?" },
          { "kind": "p", "text": "Tapak ialah sisi yang dipilih sebagai rujukan untuk pengiraan luas. Mana-mana sisi segi tiga boleh berfungsi sebagai tapak. Untuk segi tiga bersudut tepat, memilih mana-mana kaki sebagai tapak adalah wajar, kerana kaki yang satu lagi sudah berserenjang dengannya. Pilihan itu soal kemudahan: pilih satu kaki sebagai tapak dan geometri sudut tepat menguruskan selebihnya." },
          { "kind": "h3", "text": "Apakah Tinggi yang Serenjang?" },
          { "kind": "p", "text": "Tinggi ialah jarak terpendek dari tapak ke bucu bertentangan, diukur pada sudut tepat terhadap tapak. Apabila tapaknya ialah kaki [[a]], bucu bertentangannya ialah hujung jauh kaki [[b]], dan kaki [[b]] itu sendiri ialah jarak serenjang tersebut. Tiada apa yang perlu dilukis atau diukur di luar segi tiga; tinggi itu ialah sisi, bukan binaan." },
          { "kind": "h3", "text": "Mengapa Keserenjangan Penting?" },
          { "kind": "p", "text": "Mendarab dua panjang sisi menghasilkan hasil darab tapak-darab-tinggi hanya apabila sisi-sisinya berserenjang. Sisi condong yang dipasangkan dengan tapak mengukur regangan pepenjuru yang lebih panjang, bukan tinggi yang serenjang, jadi hasil darabnya melebihi segi empat tepat tapak-tinggi yang sebenar. Kaki segi tiga bersudut tepat adalah serenjang mengikut takrif, dan tepat itulah sebabnya hasil darabnya merupakan titik permulaan yang betul. Kalkulator ini memerlukan dua sisi yang membentuk sudut tepat; sebarang pasangan lain memecahkan logik yang disandarkan oleh formula." },
          { "kind": "h3", "text": "Bolehkah Hipotenus Digunakan sebagai Tapak?" },
          { "kind": "p", "text": "Segi tiga boleh menggunakan mana-mana sisi sebagai tapaknya, termasuk hipotenus, tetapi tingginya mestilah jarak serenjang dari bucu bertentangan ke sisi itu. Jarak itu bukan salah satu kaki, dan kalkulator ini tidak mengukurnya. Hipotenus tidak boleh sekadar menggantikan kaki dalam [[K=\\frac{ab}{2}]]; berbuat demikian mengira kuantiti yang berbeza dan salah. Kalkulator ini dibina untuk dua kaki serenjang sahaja." }
        ]
      },
      "sec-formula": {
        "h2": "Mengapa Luas Segi Tiga Bersudut Tepat Separuh Hasil Darab Kakinya?",
        "blocks": [
          { "kind": "p", "text": "Mulakan dengan peraturan umum: [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Untuk segi tiga bersudut tepat, tetapkan [[\\text{Base}=a]] dan [[\\text{Height}=b]]. Oleh sebab dua kaki berserenjang, [[[\\boxed{K=\\frac{a\\times b}{2}}]]] Selebihnya bahagian ini menunjukkan dari mana datangnya pembelahan dua itu, supaya pembahagian dengan dua difahami, bukan sekadar dihafal." },
          { "kind": "h3", "text": "Memahami Kaedah Segi Empat Tepat" },
          { "kind": "p", "text": "Lukis segi empat tepat dengan lebar [[a]] dan tinggi [[b]]. Luasnya ialah [[K_{\\text{rectangle}}=a\\times b]]. Sekarang lukis pepenjuru dari satu penjuru ke penjuru bertentangan. Pepenjuru memotong segi empat tepat itu kepada dua segi tiga yang serupa tepat antara satu sama lain, setiap satunya berkaki [[a]] dan [[b]] dengan sudut tepat di tempat penjuru segi empat tepat itu berada. Kedua-dua segi tiga mempunyai luas yang sama, jadi setiap satunya memiliki separuh segi empat tepat: [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "Mengapa Dua Segi Tiga Bersudut Tepat yang Serupa Membentuk Segi Empat Tepat?" },
          { "kind": "p", "text": "Letakkan dua salinan segi tiga itu supaya hipotenusnya bertemu. Kaki yang sepadan berbaris: [[a]] lawan [[a]], [[b]] lawan [[b]]. Oleh sebab sudut tirus segi tiga bersudut tepat adalah pelengkap ([[A+B=90^\\circ]]), sudut-sudut yang bercantum di setiap penjuru bentuk gabungan berjumlah 90 darjah di sekelilingnya. Hasilnya mempunyai empat sudut tepat dan sisi bertentangan yang sama: sebuah segi empat tepat. Sisinya tepat dua kaki itu, itulah sebabnya luas segi empat tepat ialah [[a\\times b]] dan setiap segi tiga memiliki separuhnya." },
          { "kind": "h3", "text": "Mengapa Pembahagian dengan Dua Perlu?" },
          { "kind": "p", "text": "Ambil segi empat tepat 6-darab-8. Luasnya ialah [[K=6\\times8=48]]. Setiap satu daripada dua segi tiga bersudut tepat yang serupa itu menempati separuh: [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] Melangkau pembahagian menjawab soalan yang berbeza: luas segi empat tepat, bukan luas segi tiga. Pembahagian dengan dua bukan faktor tokok tambah; ia langkah yang memangkas segi empat tepat yang melingkungi kepada segi tiga." },
          { "kind": "h3", "text": "Bukti Geometri Menggunakan Koordinat" },
          { "kind": "p", "text": "Bagi pembaca yang selesa dengan koordinat, inilah hasil yang sama daripada algebra. Letakkan bucu sudut tepat pada asalan dan biarkan bucunya menjadi [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]. Segi tiga itu ialah rantau yang dibatasi oleh dua paksi koordinat dan garis yang menyambung [[A]] ke [[B]]. Tapak sepanjang paksi-x mempunyai panjang [[a]], sisi menegak mempunyai panjang [[b]], dan segi tiga bersudut tepat yang dilingkungi mengisi tepat separuh daripada segi empat tepat [[a]]-darab-[[b]] yang ditandai oleh paksi-paksi itu. Jadi [[[\\boxed{K=\\frac{ab}{2}}]]], formula yang sama, dicapai tanpa sebarang jentera baharu." }
        ],
        "imgAlt": "Segi empat tepat a darab b dibelah oleh pepenjuru kepada dua segi tiga bersudut tepat yang serupa, setiap satunya luas ab/2",
        "figcaption": "Segi empat tepat berlebar a dan bertinggi b, dipotong sepanjang pepenjurunya kepada dua segi tiga bersudut tepat yang serupa."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat daripada Kaki",
        "blocks": [
          { "kind": "p", "text": "Kalkulator memerlukan tepat dua input, dimasukkan mengikut tertib. Langkah di bawah mengikut susun atur skrin daripada mengenal pasti ukuran hingga hasil yang disemak." }
        ],
        "steps": [
          "<strong>Kenal pasti dua sisi yang bertemu pada sudut 90 darjah.</strong> Inilah kaki; penanda sudut tepat menunjukkan tempat ia bercantum.",
          "<strong>Pastikan tiada ukuran yang dipilih ialah hipotenus.</strong> Hipotenus ialah sisi terpanjang, bertentangan dengan sudut tepat.",
          "<strong>Ukur kaki pertama.</strong> Gunakan pita, pembaris, atau skala lukisan yang sesuai dengan objek.",
          "<strong>Ukur kaki kedua.</strong> Ukur sepanjang sisi itu sendiri, dari penjuru ke penjuru.",
          "<strong>Pastikan kedua-dua ukuran menggunakan unit yang serasi.</strong> Meter dengan meter, kaki dengan kaki, jangan sekali-kali bercampur.",
          "<strong>Masukkan kaki a dalam medan input pertama.</strong> Mana-mana kaki boleh didahulukan; label boleh ditukar ganti.",
          "<strong>Masukkan kaki b dalam medan input kedua.</strong> Ini ialah sisi serenjang yang satu lagi.",
          "<strong>Pilih unit ukuran yang sesuai.</strong> Padankan unit dengan apa yang sebenarnya diukur.",
          "<strong>Klik Calculate Area.</strong> Hasil muncul dengan penggantian ditunjukkan.",
          "<strong>Semak hasil yang dikira.</strong> Baca luasnya dan pastikan ia kelihatan munasabah.",
          "<strong>Semak penyelesaian matematik langkah demi langkah.</strong> Ia menunjukkan formula, penggantian, dan aritmetik.",
          "<strong>Gunakan gambar rajah segi tiga untuk mengesahkan label sisi.</strong> Pastikan a dan b terletak pada sisi serenjang.",
          "<strong>Pastikan hasil dinyatakan dalam unit persegi.</strong> Unit panjang dikuasa duakan, sepadan dengan input.",
          "<strong>Klik Reset apabila memulakan pengiraan baharu.</strong> Ia mengosongkan kedua-dua medan untuk permulaan yang bersih."
        ],
        "closingParagraphs": [
          "Kalkulator mempunyai tepat dua input, kaki [[a]] dan kaki [[b]]. Tiada mod lain dan tiada medan tersembunyi; setiap luas pada halaman ini datang daripada [[K=\\frac{ab}{2}]]."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah demi Langkah Luas Segi Tiga Bersudut Tepat daripada Dua Kaki",
        "blocks": [
          { "kind": "p", "text": "Empat segi tiga bersudut tepat klasik menunjukkan kaedah pada saiz yang semakin besar. Setiap contoh menggantikan ke dalam formula, dan hipotenus muncul hanya sebagai semakan pilihan, tidak pernah sebagai input." },
          { "kind": "h3", "text": "Contoh 1: Segi Tiga Bersudut Tepat 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]]. Langkah 1: tulis formula, [[K=\\frac{a\\times b}{2}]]. Langkah 2: gantikan, [[K=\\frac{3\\times4}{2}]]. Langkah 3: darabkan, [[K=\\frac{12}{2}]]. Jawapan akhir: [[[\\boxed{K=6\\text{ square units}}]]] Semakan pilihan: [[c=\\sqrt{3^2+4^2}=5]]. Hipotenus mengesahkan ganda tiga yang lazim tetapi tidak berperanan dalam luas." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga Bersudut Tepat 6-8-10" },
          { "kind": "p", "text": "Diberi [[a=6]], [[b=8]]. Kemudian [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Semakan segi empat tepat: segi empat tepat 6-darab-8 yang melingkungi mempunyai luas 48, dan segi tiga memiliki tepat separuhnya." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tepat 5-12-13" },
          { "kind": "p", "text": "Diberi [[a=5]], [[b=12]]. Kemudian [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Hipotenus 13 tidak pernah memasuki pengiraan; ia hanya penting jika satu sisi tiada." },
          { "kind": "h3", "text": "Contoh 4: Segi Tiga Bersudut Tepat 8-15-17" },
          { "kind": "p", "text": "Diberi [[a=8]], [[b=15]]. Kemudian [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Tiga langkah yang sama, nombor lebih besar, logik serupa." },
          { "kind": "h3", "text": "Perbandingan Contoh Asas" }
        ],
        "table": {
          "headers": ["Segi tiga", "Kaki a", "Kaki b", "Hipotenus (semakan sahaja)", "Luas yang dikira"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplikasi Sebenar Luas Segi Tiga Bersudut Tepat daripada Dua Kaki",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi yang diolah membawa formula dari halaman ke bengkel, tapak, dan studio. Setiap satunya menamakan panel, bahagian, profil, atau model ringkas segi tiga bersudut tepat, mengolah dua input kalkulator melalui formula, dan menyatakan andaian di sebalik nombor. Di mana objek sebenar melengkung atau tidak sekata, pengiraan meliputi segi tiga yang dimodelkan sahaja, dan luas tidak sekali-kali menggantikan kekuatan, kos, atau keselamatan dengan sendirinya." },
          { "kind": "h3", "text": "Contoh 1: Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Tingkap kaca segi tiga mempunyai dimensi serenjang [[a=3\\text{ m}]], [[b=4\\text{ m}]]. Gantikan: [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Hasilnya mewakili permukaan kaca rata sebelum dimensi bingkai ditolak. Andaian: anak tingkap ialah segi tiga bersudut tepat yang sebenar; elaun bingkai dikendalikan berasingan." },
          { "kind": "h3", "text": "Contoh 2: Pendakap Sokongan Keluli" },
          { "kind": "p", "text": "Pendakap keluli segi tiga mempunyai [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]. Kemudian [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Luasnya memerihalkan plat rata dan tidak menentukan kapasiti galas bebannya. Andaian: kosong pendakap dipotong sebagai segi tiga bersudut tepat; lubang bolt dan bengkokan dikecualikan." },
          { "kind": "h3", "text": "Contoh 3: Profil Sisi Tanjakan Segi Tiga" },
          { "kind": "p", "text": "Profil sisi tanjakan yang diringkaskan mempunyai [[a=6\\text{ m}]], [[b=8\\text{ m}]]. Kemudian [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Ini ialah profil sisi segi tiga yang menegak, bukan permukaan jalan yang condong. Andaian: profil dimodelkan dengan penjuru segi empat sama di tapak." },
          { "kind": "h3", "text": "Contoh 4: Sokongan Bumbung Segi Tiga" },
          { "kind": "p", "text": "Bahagian sokongan bumbung segi tiga mempunyai [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]. Kemudian [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Luasnya mewakili bahagian segi tiga yang rata, berguna untuk anggaran bahan. Andaian: bahagian dimodelkan sebagai segi tiga bersudut tepat; geometri bumbung penuh mungkin berbeza." },
          { "kind": "h3", "text": "Contoh 5: Bahagian Kebun Segi Tiga Bersudut Tepat" },
          { "kind": "p", "text": "Sebuah kebun mengandungi bahagian segi tiga bersudut tepat dengan [[a=7\\text{ m}]], [[b=24\\text{ m}]]. Kemudian [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Hasilnya membantu menganggarkan luas yang tersedia untuk tanaman atau rumput. Andaian: sempadan batas adalah lurus dan bertemu pada sudut tepat." },
          { "kind": "h3", "text": "Contoh 6: Layar Fabrik Segi Tiga" },
          { "kind": "p", "text": "Panel fabrik segi tiga bersudut tepat mempunyai [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]. Kemudian [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Ini mewakili bahagian fabrik segi tiga yang rata sebelum jahitan dan elaun bahan. Andaian: layar dimodelkan rata; layar sebenar melengkung di bawah beban." },
          { "kind": "h3", "text": "Contoh 7: Templat Potongan Papan Lapis" },
          { "kind": "p", "text": "Templat papan lapis segi tiga bersudut tepat mempunyai [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]. Kemudian [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Hasilnya membantu menganggarkan keperluan bahan sebelum sisa potongan. Andaian: templat ialah segi tiga bersudut tepat yang sebenar; potongan gergaji dan lebihan adalah tambahan." },
          { "kind": "h3", "text": "Contoh 8: Panel Papan Tanda Segi Tiga" },
          { "kind": "p", "text": "Panel papan tanda segi tiga mempunyai dimensi serenjang [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]. Kemudian [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Ini mewakili luas rata yang boleh dicetak atau dicat. Andaian: muka panel adalah rata dan segi tiga bersudut tepat; perkakasan pelekap dikecualikan." },
          { "kind": "h3", "text": "Contoh 9: Bahagian Ukur Tanah" },
          { "kind": "p", "text": "Bahagian tanah segi tiga bersudut tepat yang diringkaskan mempunyai [[a=9\\text{ m}]], [[b=40\\text{ m}]]. Kemudian [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Formula mengira luas bahagian segi tiga yang diukur. Andaian: bahagian dimodelkan dengan penjuru segi empat sama; lot yang tidak sekata perlu dibahagi kepada bentuk yang lebih ringkas." },
          { "kind": "h3", "text": "Contoh 10: Sokongan Bidai Segi Tiga" },
          { "kind": "p", "text": "Bahagian sokongan bidai segi tiga bersudut tepat mempunyai [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]. Kemudian [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Hasilnya mewakili bahagian segi tiga rata yang dimodelkan, tidak semestinya seluruh permukaan bidai yang tidak sekata. Andaian: geometri sokongan diringkaskan kepada segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Contoh 11: Panel Sokongan Industri" },
          { "kind": "p", "text": "Panel industri segi tiga bersudut tepat mempunyai [[a=11\\text{ m}]], [[b=60\\text{ m}]]. Kemudian [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Luasnya memerihalkan panel geometri yang rata bukannya prestasi strukturnya. Andaian: panel dimodelkan sebagai segi tiga bersudut tepat; ketebalan dan pengikat adalah perkara berasingan." },
          { "kind": "h3", "text": "Contoh 12: Bahagian Hujung Bumbung Gudang" },
          { "kind": "p", "text": "Sebuah gudang mempunyai bahagian hujung bumbung segi tiga bersudut tepat yang diringkaskan dengan [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]. Kemudian [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Hasilnya membantu menganggarkan luas hujung segi tiga yang rata, contohnya semasa menetapkan harga pelapisan. Andaian: hujung gabel dimodelkan sebagai segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Perbandingan Contoh Amali" }
        ],
        "table": {
          "headers": ["Aplikasi amali", "Kaki a", "Kaki b", "Hipotenus (pilihan)", "Luas yang dikira", "Unit ukuran"],
          "rows": [
            ["Tingkap kaca", "3", "4", "5", "6", "m²"],
            ["Pendakap keluli", "5", "12", "13", "30", "cm²"],
            ["Profil tanjakan", "6", "8", "10", "24", "m²"],
            ["Sokongan bumbung", "8", "15", "17", "60", "ft²"],
            ["Bahagian kebun", "7", "24", "25", "84", "m²"],
            ["Layar fabrik", "9", "12", "15", "54", "ft²"],
            ["Templat papan lapis", "12", "16", "20", "96", "cm²"],
            ["Panel papan tanda", "20", "21", "29", "210", "cm²"],
            ["Bahagian ukur", "9", "40", "41", "180", "m²"],
            ["Sokongan bidai", "15", "20", "25", "150", "ft²"],
            ["Panel industri", "11", "60", "61", "330", "m²"],
            ["Hujung bumbung gudang", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "Bagaimanakah Teorem Pythagoras Berkaitan dengan Luas Segi Tiga Bersudut Tepat?",
        "blocks": [
          { "kind": "p", "text": "Teorem Pythagoras menyatakan [[[\\boxed{a^2+b^2=c^2}]]]: kaki [[a]] dan [[b]] menentukan hipotenus [[c]]. Ia menjawab soalan tentang panjang sisi, manakala formula luas mengukur permukaan yang dilingkungi. Kedua-duanya berkaitan tetapi menyelesaikan masalah berbeza, dan pengiraan luas di sini tidak pernah bergantung pada teorem." },
          { "kind": "h3", "text": "Mengira Hipotenus daripada Kedua-dua Kaki" },
          { "kind": "p", "text": "Dengan [[a=6]] dan [[b=8]], hipotenusnya ialah [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]] Luas kemudian dikira berasingan: [[K=\\frac{6\\times8}{2}=24]]. Hipotenus ialah maklumat tambahan pilihan untuk pengiraan luas ini, fakta yang berguna bukannya langkah yang diperlukan." },
          { "kind": "h3", "text": "Bolehkah Teorem Pythagoras Menggantikan Formula Luas?" },
          { "kind": "p", "text": "Tidak. Teorem Pythagoras menentukan hubungan antara panjang sisi; formula luas menukar dua sisi serenjang kepada permukaan yang dilingkungi. Satu menjawab berapa panjang, satu lagi menjawab berapa permukaan. Ia bekerjasama: apabila hanya satu kaki dan hipotenus diketahui, teorem mendapatkan semula kaki yang hilang dahulu, dan kemudian formula luas mengambil alih. Tiada satu pun menggantikan yang satu lagi." },
          { "kind": "h3", "text": "Bilakah Teorem Pythagoras Berguna?" },
          { "kind": "p", "text": "Ia mendapat tempatnya apabila satu sisi hilang atau ukuran perlu disemak: hanya satu kaki dan hipotenus diketahui, sisi yang hilang mesti ditemui sebelum langkah luas, hipotenus yang dikira perlu disahkan, atau ukuran binaan mesti dipastikan di tapak. Untuk pengiraan sisi hilang yang khusus, Kalkulator Sisi Segi Tiga Bersudut Tepat mengendalikan langkah itu, dan hasilnya boleh disalurkan terus kembali ke dalam formula luas kaki." }
        ]
      },
      "sec-missing-leg": {
        "h2": "Cara Mencari Kaki yang Hilang Apabila Luas Segi Tiga Diketahui",
        "blocks": [
          { "kind": "p", "text": "Formula luas dibaca dua hala. Mulakan dengan [[K=\\frac{ab}{2}]]. Darabkan kedua-dua sisi dengan 2: [[2K=ab]]. Bahagikan dengan [[a]]: [[[\\boxed{b=\\frac{2K}{a}}]]] Begitu juga, [[[\\boxed{a=\\frac{2K}{b}}]]] Hubungan yang sama, disusun semula, mendapatkan semula mana-mana kaki yang tidak diketahui." },
          { "kind": "h3", "text": "Contoh yang Diolah" },
          { "kind": "p", "text": "Andaikan [[K=24\\text{ cm}^2]] dan [[a=6\\text{ cm}]]. Kemudian [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] Unit kekal konsisten: sentimeter persegi dibahagi dengan sentimeter memberi sentimeter. Penggunaan songsang ini berguna untuk menyemak luas yang dilaporkan atau mendapatkan semula dimensi daripada pelan, tetapi perhatikan ia susunan semula pendidikan, bukan mod input tambahan dalam kalkulator di atas, yang masih mengambil dua kaki." }
        ]
      },
      "sec-scaling": {
        "h2": "Bagaimanakah Mengubah Dua Kaki Mempengaruhi Luas?",
        "blocks": [
          { "kind": "p", "text": "Oleh sebab [[K=\\frac{ab}{2}]] ialah hasil darab, meregangkan kaki meregangkan luas dengan cara yang boleh diramal. Corak di bawah wajar diketahui sebelum mengubah saiz sebarang reka bentuk segi tiga." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Satu Kaki Digandakan?" },
          { "kind": "p", "text": "Kekalkan [[a]] dan gandakan [[b]]. Kemudian [[K_1=\\frac{ab}{2}]] menjadi [[K_2=\\frac{a(2b)}{2}]], jadi [[[\\boxed{K_2=2K_1}]]] Menggandakan hanya satu kaki menggandakan luas. Semakan konkrit: segi tiga 3-darab-4 mempunyai [[K=6]]; meregangkan satu kaki kepada 3-darab-8 memberi [[K=12]]." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Kedua-dua Kaki Digandakan?" },
          { "kind": "p", "text": "Sekarang gandakan kedua-duanya: [[K_2=\\frac{(2a)(2b)}{2}]], yang diringkaskan kepada [[[\\boxed{K_2=4K_1}]]] Menggandakan kedua-dua dimensi serenjang menjadikan luas empat kali lebih besar, bukan dua kali. Segi tiga 3-darab-4 ([[K=6]]) diskalakan kepada 6-darab-8 memberi [[K=24]], tepat empat kali ganda yang asal." },
          { "kind": "h3", "text": "Apakah yang Berlaku Apabila Kedua-dua Kaki Diskalakan?" },
          { "kind": "p", "text": "Darabkan setiap kaki dengan faktor skala [[k]]: [[K_2=\\frac{(ka)(kb)}{2}]], oleh itu [[[\\boxed{K_2=k^2K_1}]]] Luas membesar dengan kuasa dua faktor skala. Contoh amali: skalakan segi tiga 6-darab-8 dengan 1.5 untuk mendapat 9-darab-12. Kemudian [[K=\\frac{9\\times12}{2}=54]], dan [[24\\times1.5^2=24\\times2.25=54]]. Inilah sebabnya anggaran bahan melonjak lebih cepat daripada dimensi linear: gandakan setiap panjang dan helaian empat kali ganda diperlukan." },
          { "kind": "h3", "text": "Bolehkah Dua Segi Tiga Bersudut Tepat yang Berbeza Mempunyai Luas yang Sama?" },
          { "kind": "p", "text": "Ya. Bandingkan segi tiga 1, [[a=3]], [[b=4]]: [[K=\\frac{3\\times4}{2}=6]]. Segi tiga 2, [[a=2]], [[b=6]]: [[K=\\frac{2\\times6}{2}=6]]. Bentuk berbeza melingkungi luas yang sama apabila hasil darab kakinya sama. Segi tiga yang pendek lebar dan yang tinggi sempit boleh menutupi permukaan yang serupa, yang penting apabila memuatkan panel ke dalam ruang yang berbeza." }
        ],
        "imgAlt": "Dua segi tiga bersudut tepat, 3 darab 4 dan 2 darab 6, ditunjukkan bersebelahan dengan luas sama 6",
        "figcaption": "Kadaran berbeza, luas sama: kedua-dua segi tiga bersudut tepat melingkungi 6 unit persegi."
      },
      "sec-general": {
        "h2": "Mengapa Anda Tidak Boleh Menggunakan Formula Dua Kaki untuk Setiap Segi Tiga?",
        "blocks": [
          { "kind": "p", "text": "Formula [[K=\\frac{ab}{2}]] berfungsi kerana dua kaki berserenjang. Untuk segi tiga umum, dua panjang sisi sahaja tidak mencukupi: sudut terkandung antaranya, atau tinggi yang sepadan, juga mesti diketahui." },
          { "kind": "p", "text": "Peraturan umumnya ialah [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]], dengan [[C]] ialah sudut terkandung antara sisi [[a]] dan [[b]]. Untuk segi tiga bersudut tepat, [[C=90^\\circ]] dan [[\\sin(90^\\circ)=1]]. Oleh itu [[K=\\frac{ab\\times1}{2}]], iaitu [[[\\boxed{K=\\frac{ab}{2}}]]] Formula segi tiga bersudut tepat ialah formula umum dengan faktor sinus sama dengan 1. Untuk sebarang sudut lain sinus mengecilkan hasil darab, itulah sebabnya formula kaki tidak boleh digunakan pada segi tiga bukan bersudut tepat: ia secara senyap menganggap [[\\sin(C)]] sebagai 1 sedangkan ia bukan." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Apabila Mengira Luas Segi Tiga Bersudut Tepat",
        "blocks": [
          { "kind": "p", "text": "Dua kaki mesti berkongsi satu unit panjang sebelum formula digunakan. Unit persegi dalam jawapan datang daripada mendarab dua unit panjang, jadi unit yang konsisten itulah yang mengekalkan makna nombor." },
          { "kind": "h3", "text": "Mengapa Hasil Menggunakan Unit Persegi" },
          { "kind": "p", "text": "Luas mengira segi empat unit yang menutupi permukaan: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Unit sentiasa unit panjang dikuasa duakan, kerana hasil darab dua panjang ialah kiraan segi empat. Melaporkan luas sebagai 24 m ialah kesilapan kategori: 24 m ialah panjang, manakala 24 m² ialah permukaan." },
          { "kind": "h3", "text": "Menukar Unit Berbeza Sebelum Mengira" },
          { "kind": "p", "text": "Ambil [[a=3\\text{ ft}]] dan [[b=24\\text{ inches}]]. Tukarkan dahulu: [[24\\text{ inches}=2\\text{ ft}]]. Kemudian [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] Tanpa penukaran, hasil darab mentah 72 tiada makna yang kemas: ia bukan kaki persegi mahupun inci persegi. Tukarkan dahulu, darabkan kemudian, dan unit jawapan mengikut secara automatik." },
          { "kind": "h3", "text": "Mengira dengan Ukuran Perpuluhan" },
          { "kind": "p", "text": "Formula yang sama mengendalikan perpuluhan tanpa sebarang perubahan. Diberi [[a=3.5]] dan [[b=9.2]]: [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] Nombor bulat, perpuluhan, dan ukuran bengkel yang halus semuanya mengalir melalui darab-dan-belah-dua yang sama. Kekalkan tempat perpuluhan yang disokong ukuran dan biarkan kalkulator mengendalikan aritmetik." },
          { "kind": "h3", "text": "Mengapa Pembundaran Awal Harus Dielakkan" },
          { "kind": "p", "text": "Bundarkan input dan ralat menunggang melalui pendaraban ke dalam jawapan. Kaki yang diukur sebagai 9.2 tidak harus menjadi 9 sebelum didarab; 0.2 yang hilang per unit bertambah merentas hasil darab. Kekalkan ketepatan penuh melalui langkah perantaraan dan bundarkan hanya hasil akhir, mengikut ketepatan yang diwajarkan ukuran. Ketepatan yang dikekalkan awal ialah ketepatan yang disampaikan di akhir." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Apabila Mengira Luas Segi Tiga Bersudut Tepat daripada Kaki",
        "blocks": [
          { "kind": "p", "text": "Hampir setiap jawapan salah dalam topik ini berpunca daripada input berlabel salah bukannya aritmetik yang buruk. Lima belas kesilapan di bawah ialah yang muncul berulang kali, setiap satunya dengan sebab dan penyelesaiannya." },
          { "kind": "h3", "text": "1. Menggunakan Hipotenus Sebagai Ganti Salah Satu Kaki" },
          { "kind": "p", "text": "Hipotenus ialah sisi terpanjang dan tidak pernah membentuk sudut tepat. Memasukkannya sebagai kaki membesarkan hasil darab, contohnya menganggap 10 sebagai kaki dengan 8 memberi 40 bukannya 24. Penyelesaian: cari sudut tepat dahulu; dua sisi yang menyentuhnya ialah kaki." },
          { "kind": "h3", "text": "2. Mengelirukan Dua Kaki dengan Sisi Lain" },
          { "kind": "p", "text": "Dalam lukisan yang condong, mana-mana sisi boleh kelihatan seperti tapak yang wajar. Label [[a]] dan [[b]] tergolong pada pasangan serenjang sahaja. Penyelesaian: cari penanda penjuru segi empat sama sebelum menetapkan label, tidak kira bagaimana segi tiga diputar." },
          { "kind": "h3", "text": "3. Lupa bahawa Kaki Mesti Membentuk Sudut 90 Darjah" },
          { "kind": "p", "text": "Hasil darab yang dibelah dua menganggap keserenjangan. Dua sisi yang bertemu pada 80 atau 100 darjah memerlukan formula sinus umum sebaliknya. Penyelesaian: sahkan penjurunya segi empat sama sebelum menggunakan [[K=\\frac{ab}{2}]]." },
          { "kind": "h3", "text": "4. Lupa Membahagi dengan Dua" },
          { "kind": "p", "text": "Hasil darab [[a\\times b]] sahaja ialah luas segi empat tepat yang melingkungi, dua kali ganda segi tiga. Penyelesaian: belah dua hasil darab; /2 ialah sebahagian formula, bukan pilihan." },
          { "kind": "h3", "text": "5. Mengira Luas Segi Empat Tepat Bukannya Luas Segi Tiga" },
          { "kind": "p", "text": "Empat puluh lapan ialah luas yang sah untuk segi empat tepat 6-darab-8, cuma bukan untuk segi tiga di dalamnya. Penyelesaian: tanya bentuk mana yang dikehendaki soalan, kemudian gunakan pembelahan hanya untuk segi tiga." },
          { "kind": "h3", "text": "6. Mencampur Kaki dan Inci" },
          { "kind": "p", "text": "Mendarab 3 kaki dengan 24 inci memberi 72 yang tidak kemas. Penyelesaian: tukarkan kedua-duanya kepada satu unit (24 inci = 2 kaki) sebelum mengira." },
          { "kind": "h3", "text": "7. Mencampur Sentimeter dan Meter" },
          { "kind": "p", "text": "Perangkap yang sama pada skala metrik: 2 m darab 30 cm mesti menjadi satu unit dahulu. Penyelesaian: tukarkan (30 cm = 0.3 m), kemudian darabkan." },
          { "kind": "h3", "text": "8. Melaporkan Hasil dalam Unit Linear" },
          { "kind": "p", "text": "Luas 24 m² bukan 24 m. Penyelesaian: tulis unit kuasa dua bersama nombor, setiap kali." },
          { "kind": "h3", "text": "9. Menggunakan Hanya Satu Kaki" },
          { "kind": "p", "text": "Satu kaki ialah panjang, bukan luas; formula memerlukan pasangan. Memasukkan satu ukuran tidak menjawab apa-apa. Penyelesaian: ukur kedua-dua sisi serenjang." },
          { "kind": "h3", "text": "10. Menganggap Mana-mana Dua Sisi Segi Tiga Bersudut Tepat sebagai Serenjang" },
          { "kind": "p", "text": "Hanya kaki yang serenjang. Pasangan kaki-ditambah-hipotenus bertemu pada sudut tirus, jadi hasil darab belah duanya bukan luas. Penyelesaian: semak bahawa kedua-dua sisi yang dipilih menyentuh sudut tepat." },
          { "kind": "h3", "text": "11. Menggunakan Ukuran Negatif atau Sifar" },
          { "kind": "p", "text": "Panjang adalah positif. Sifar meruntuhkan segi tiga kepada garis tanpa luas, dan panjang negatif tiada makna geometri di sini. Penyelesaian: ukur semula; tolak input bukan positif." },
          { "kind": "h3", "text": "12. Membundarkan Input Perpuluhan Terlalu Awal" },
          { "kind": "p", "text": "Membundarkan 9.2 kepada 9 sebelum mendarab mengalihkan jawapan dari 16.1 ke bawah. Penyelesaian: kekalkan ketepatan penuh melalui pengiraan dan bundarkan hanya hasil akhir." },
          { "kind": "h3", "text": "13. Menganggap Hipotenus Diperlukan" },
          { "kind": "p", "text": "Ia tidak. [[K=\\frac{ab}{2}]] hanya menggunakan kaki, dan mengira hipotenus dahulu menambah langkah yang tidak mengubah apa-apa. Penyelesaian: langkauinya melainkan pengiraan lain memerlukannya." },
          { "kind": "h3", "text": "14. Mengelirukan Perimeter dengan Luas" },
          { "kind": "p", "text": "Perimeter menambah tiga sisi ([[a+b+c]]); luas mendarab dua kaki dan membelah dua. Untuk 6-8-10, perimeter ialah 24 manakala luasnya juga 24, kebetulan yang menyebabkan kekeliruan sebenar. Penyelesaian: semak sama ada soalan meminta panjang sempadan atau permukaan yang dilingkungi." },
          { "kind": "h3", "text": "15. Menggunakan Formula Segi Tiga Bersudut Tepat pada Segi Tiga Bukan Bersudut Tepat" },
          { "kind": "p", "text": "Tanpa penjuru 90 darjah, hasil darab memerlukan sinus sudut terkandung. Menggunakan [[K=\\frac{ab}{2}]] pada segi tiga umum melebih-lebihkan luas. Penyelesaian: gunakan [[K=\\frac{ab\\sin(C)}{2}]] dengan sudut terkandung sebenar." },
          { "kind": "h3", "text": "Salah Lawan Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Gunakan [[a=6]], [[b=8]]. Betul: [[K=\\frac{6\\times8}{2}=24]]. Salah kerana lupa membahagi dengan dua: [[6\\times8=48]], iaitu luas segi empat tepat yang sepadan, bukan segi tiga bersudut tepat. Salah kerana menggunakan hipotenus 10 seolah-olah ia kaki serenjang: [[K=\\frac{10\\times8}{2}=40]], salah kerana 10 tidak berserenjang dengan 8. Aritmetik kelihatan yakin dalam ketiga-tiga kes; hanya geometri yang membezakannya." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Menyemak Sama Ada Luas Segi Tiga Bersudut Tepat Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Enam semakan bebas, semuanya ditunjukkan pada segi tiga 6-8-10 ([[a=6]], [[b=8]], [[c=10]], [[K=24]]). Persetujuan antara laluan berbeza ialah bukti terkuat jawapan betul, dalam kerja rumah mahupun ukuran amali." },
          { "kind": "h3", "text": "Kaedah 1: Kira Semula Menggunakan Formula Utama" },
          { "kind": "p", "text": "Jalankan [[K=\\frac{ab}{2}]] baharu: [[K=\\frac{6\\times8}{2}=24]]. Laluan kedua dengan nombor dimasukkan semula menangkap salah taip dan digit tersalah tekan." },
          { "kind": "h3", "text": "Kaedah 2: Gandakan Segi Tiga untuk Membentuk Segi Empat Tepat" },
          { "kind": "p", "text": "Segi tiga yang digandakan ialah segi empat tepat 6-darab-8: [[K_{\\text{rectangle}}=6\\times8=48]], jadi [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. Jika luas yang digandakan tidak sepadan dengan [[a\\times b]], aritmetik tergelincir di suatu tempat." },
          { "kind": "h3", "text": "Kaedah 3: Semak Hipotenus Menggunakan Teorem Pythagoras" },
          { "kind": "p", "text": "Sahkan [[c=\\sqrt{a^2+b^2}]]: [[c=\\sqrt{36+64}=10]]. Ini menyemak pengenalan sisi di sebalik luas; hipotenus yang salah bermakna satu sisi dilabel salah." },
          { "kind": "h3", "text": "Kaedah 4: Susun Semula Formula Luas" },
          { "kind": "p", "text": "Dapatkan semula input yang diketahui daripada jawapan: [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. Mendapatkan semula kaki yang dimulakan menutup gelung dan mengesahkan langkah pembahagian." },
          { "kind": "h3", "text": "Kaedah 5: Semak Unit Ukuran" },
          { "kind": "p", "text": "Kedua-dua kaki mesti menggunakan unit panjang yang sama, dan jawapan mesti menggunakan unit itu dikuasa duakan. Unit bercampur atau unit linear pada jawapan menandakan ralat persediaan sebelum sebarang nombor disemak semula." },
          { "kind": "h3", "text": "Kaedah 6: Anggarkan Hasil" },
          { "kind": "p", "text": "Bundarkan kepada nombor mesra: 6 darab 8 hampir 50, dibelah dua hampir 25. Jawapan 24 terletak betul-betul di sebelah anggaran; jawapan 240 atau 2.4 tidak. Anggaran menangkap ralat titik perpuluhan dan pembahagian yang pengiraan semula yang tepat boleh mengulangi." }
        ]
      },
      "sec-applications": {
        "h2": "Luas Segi Tiga Bersudut Tepat daripada Dua Kaki dalam Amalan",
        "blocks": [
          { "kind": "p", "text": "Corak dua-input yang sama muncul di mana-mana penjuru segi empat sama perlu diukur. Tukang kaca membaca dua tepi serenjang tingkap; fabrikator mengukur kaki kosong pendakap; juruukur mengurangkan penjuru lot kepada dua ofset serenjang. Dalam setiap kes hipotenus ialah ukuran yang janggal untuk diambil, dan formula ini tidak pernah memintanya." },
          { "kind": "p", "text": "Empat panel di bawah menunjukkan corak pada skala berbeza. Tingkap kaca (6 m²) dan bahagian kebun (84 m²) menggunakan geometri 3-4-5 dan 7-24-25 skala meter; sokongan bumbung (60 ft²) menggunakan segi tiga 8-15-17; plat keluli (30 cm²) menggunakan 5-12-13. Setiap panel melabelkan kedua-dua kaki, penanda sudut tepat, dan luas yang terhasil, supaya laluan dari ukuran ke jawapan kekal kelihatan." }
        ],
        "imgAlt": "Empat panel: tingkap kaca 6 m2, sokongan bumbung 60 ft2, bahagian kebun 84 m2, plat keluli 30 cm2",
        "figcaption": "Empat kegunaan sebenar: tingkap kaca, sokongan bumbung, bahagian kebun, dan plat keluli dengan luasnya."
      },
      "sec-faq": {
        "h2": "Soalan Lazim",
        "blocks": [
          { "kind": "p", "text": "Di bawah ialah jawapan kepada soalan paling lazim tentang luas segi tiga bersudut tepat daripada dua kaki." }
        ]
      },
      "sec-related": {
        "h2": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
        "blocks": [
          { "kind": "p", "text": "Ukuran yang berbeza memerlukan kalkulator yang berbeza." }
        ]
      },
      "sec-conclusion": {
        "h2": "Dua Ukuran, Satu Hasil Darab yang Dibelah Dua",
        "blocks": [
          { "kind": "p", "text": "Dua panjang serenjang sudah cukup. Darabkannya, belah dua hasil darabnya, dan permukaan yang dilingkungi dinamakan. Bukti segi empat tepat menunjukkan mengapa pembelahan itu tepat bukannya kelaziman, teorem Pythagoras menyemak sisi di sebalik jawapan, dan formula yang disusun semula mendapatkan semula kaki yang hilang apabila luas sudah diketahui." },
          { "kind": "p", "text": "Tabiat kerja mudah: sahkan penjuru 90 darjah, padankan unit, kekalkan perpuluhan tidak dibundarkan hingga akhir, dan sahkan melalui segi empat tepat. Dengan tabiat itu, [[K=\\frac{ab}{2}]] ialah pengiraan luas paling boleh diharap dalam geometri." }
        ]
      }
    }
  },
  "pl": {
    "faqs": [
      {
        "question": "Jaki jest wzór na pole trójkąta prostokątnego na podstawie jego przyprostokątnych?",
        "answer": "K = ab/2, gdzie a i b to dwie prostopadłe przyprostokątne. Pomnóż przyprostokątne i podziel przez dwa. Dla a = 6 i b = 8, K = (6 × 8) / 2 = 24 jednostki kwadratowe. Nie potrzeba przeciwprostokątnej, kąta ani żadnego innego pomiaru."
      },
      {
        "question": "Dlaczego mnożymy obie przyprostokątne i dzielimy przez dwa?",
        "answer": "Dwie przyprostokątne tworzą boki opisującego je prostokąta o polu a × b, a przekątna prostokąta dzieli go na dwa przystające trójkąty prostokątne. Każdy trójkąt zajmuje połowę prostokąta, więc pole jest połową iloczynu. Mnożenie buduje prostokąt; dzielenie przycina go do trójkąta."
      },
      {
        "question": "Czy do obliczenia pola potrzebuję przeciwprostokątnej?",
        "answer": "Nie. Pole wynika z samych dwóch przyprostokątnych, ze wzoru K = ab/2. Przeciwprostokątna, c = √(a² + b²), przydaje się do sprawdzenia oznaczeń boków lub odtworzenia brakującego boku, ale nigdy nie wchodzi do samego obliczenia pola."
      },
      {
        "question": "Jaka jest różnica między przyprostokątną a przeciwprostokątną?",
        "answer": "Przyprostokątne to dwa boki stykające się w kącie prostym i prostopadłe do siebie. Przeciwprostokątna leży naprzeciw kąta prostego i jest zawsze najdłuższym bokiem. Kalkulator przyjmuje dwie przyprostokątne jako dane wejściowe; wpisanie przeciwprostokątnej jako przyprostokątnej daje błędną odpowiedź."
      },
      {
        "question": "Czy mogę zamienić przyprostokątną a z przyprostokątną b?",
        "answer": "Tak. Mnożenie jest przemienne, więc (a × b) / 2 równa się (b × a) / 2. Wpisanie 3 i 4 w dowolnej kolejności daje 6. Oznaczenia to wygoda w rozmowie o bokach, a nie ograniczenie obliczeń."
      },
      {
        "question": "Czy mogę obliczyć pole przy dziesiętnych pomiarach przyprostokątnych?",
        "answer": "Tak. Dla a = 3.5 i b = 9.2, K = (3.5 × 9.2) / 2 = 16.1 jednostki kwadratowej. Metoda jest identyczna dla liczb całkowitych i dziesiętnych. Zachowaj pełną precyzję podczas obliczeń i zaokrąglij tylko ostateczną odpowiedź do dokładności pomiaru."
      },
      {
        "question": "Co się stanie, jeśli dwie przyprostokątne używają różnych jednostek?",
        "answer": "Przed obliczeniem przelicz na jedną jednostkę. Dla a = 3 ft i b = 24 cale, przelicz 24 cale na 2 ft, a potem K = (3 × 2) / 2 = 3 ft². Mnożenie mieszanych jednostek daje liczbę bez jasnego znaczenia, więc krok przeliczenia jest obowiązkowy."
      },
      {
        "question": "Czy mogę znaleźć brakującą przyprostokątną, znając pole?",
        "answer": "Tak, przekształcając wzór do b = 2K/a (lub a = 2K/b). Dla K = 24 cm² i a = 6 cm, b = 48/6 = 8 cm. To ta sama zależność odczytana wspak, a nie osobny tryb kalkulatora; sam kalkulator nadal przyjmuje dwie przyprostokątne."
      },
      {
        "question": "Jak twierdzenie Pitagorasa wiąże się z polem trójkąta?",
        "answer": "Łączy długości boków wzorem a² + b² = c², natomiast wzór na pole mierzy otoczoną powierzchnię. Użyj twierdzenia, aby znaleźć brakujący bok lub zweryfikować przeciwprostokątną, a następnie zastosuj K = ab/2. Dla przyprostokątnych 6 i 8, c = 10, a pole i tak wynosi 24."
      },
      {
        "question": "Czy wzór działa dla trójkątów nieprostokątnych?",
        "answer": "Nie. K = ab/2 zakłada, że kąt zawarty między bokami wynosi 90 stopni. Dla innych trójkątów użyj K = ab sin(C)/2 z rzeczywistym kątem zawartym C. Zastosowanie wzoru na przyprostokątne do trójkąta nieprostokątnego traktuje sin(C) jak 1, choć tak nie jest, i zawyża pole."
      },
      {
        "question": "Dlaczego odpowiedź wyrażona jest w jednostkach kwadratowych?",
        "answer": "Pole liczy kwadraty jednostkowe pokrywające powierzchnię: cm × cm = cm², m × m = m², ft × ft = ft². Jednostka liniowa, np. 24 m, opisuje długość, a nie powierzchnię. Zawsze podawaj jednostkę kwadratową razem z liczbą."
      },
      {
        "question": "Czy dwa różne trójkąty prostokątne mogą mieć to samo pole?",
        "answer": "Tak, o ile iloczyny ich przyprostokątnych się zgadzają. Trójkąt 3 na 4 i trójkąt 2 na 6 dają oba K = 6. Kształt i pole są niezależne: równe iloczyny oznaczają równe pola, więc wysoki, wąski trójkąt może otoczyć dokładnie tyle samo powierzchni, co niski i szeroki."
      }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego na podstawie przyprostokątnej i kąta",
      "Kalkulator pola trójkąta prostokątnego na podstawie kąta",
      "Kalkulator pola trójkąta prostokątnego na podstawie półobwodu",
      "Kalkulator boków trójkąta prostokątnego",
      "Kalkulator obwodu trójkąta prostokątnego"
    ],
    "relatedIntro": "Różne pomiary wymagają różnych kalkulatorów.",
    "faqHeading": "Często zadawane pytania",
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego na podstawie jego dwóch przyprostokątnych",
      "sec-anatomy": "Czym jest trójkąt prostokątny?",
      "sec-base-height": "Dlaczego dwie przyprostokątne są podstawą i wysokością?",
      "sec-formula": "Dlaczego pole trójkąta prostokątnego to połowa iloczynu jego przyprostokątnych?",
      "sec-howto": "Jak korzystać z kalkulatora pola trójkąta prostokątnego na podstawie przyprostokątnych",
      "sec-examples": "Przykłady krok po kroku pola trójkąta prostokątnego z dwóch przyprostokątnych",
      "sec-practical": "Zastosowania w praktyce pola trójkąta prostokątnego z dwóch przyprostokątnych",
      "sec-pythagoras": "Jak twierdzenie Pitagorasa wiąże się z polem trójkąta prostokątnego?",
      "sec-missing-leg": "Jak znaleźć brakującą przyprostokątną, znając pole trójkąta",
      "sec-scaling": "Jak zmiana dwóch przyprostokątnych wpływa na pole?",
      "sec-general": "Dlaczego wzoru na dwie przyprostokątne nie można stosować do każdego trójkąta?",
      "sec-units": "Jednostki przy obliczaniu pola trójkąta prostokątnego",
      "sec-mistakes": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego z przyprostokątnych",
      "sec-verify": "Jak sprawdzić, czy pole trójkąta prostokątnego jest poprawne",
      "sec-applications": "Pole trójkąta prostokątnego z dwóch przyprostokątnych w praktyce",
      "sec-faq": "Często zadawane pytania",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-conclusion": "Dwa pomiary, jeden iloczyn podzielony na pół"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego na podstawie jego dwóch przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Weź [[a=6]], [[b=8]]. Zastosuj [[K=\\frac{6\\times8}{2}]]: [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Wynik nazywa całkowitą płaską powierzchnię otoczoną trzema bokami: dwadzieścia cztery jednostki kwadratowe. Dokładnie to zwraca kalkulator pola trójkąta prostokątnego na podstawie przyprostokątnych dla tych dwóch danych wejściowych." },
          { "kind": "p", "text": "Kalkulator potrzebuje tylko dwóch przyprostokątnych, boków stykających się w kącie prostym. Ponieważ te dwa boki są prostopadłe, jeden służy za podstawę, a drugi za wysokość, więc żaden dalszy pomiar nie jest wymagany. Przeciwprostokątna nie odgrywa tu żadnej roli. Pomnóż przyprostokątne, podziel iloczyn na pół, a pole wynika ze wzoru [[K=\\frac{ab}{2}]]." },
          { "kind": "p", "text": "To jedno z najprostszych obliczeń pola w geometrii, ponieważ oba prostopadłe pomiary są już w ręku. Pojawia się wszędzie tam, gdzie róg jest prosty: rozkłady budowlane, arkusze do cięcia, grządki ogrodowe i szkice pomiarowe sprowadzają się do dwóch przyprostokątnych i jednego iloczynu podzielonego na pół." }
        ]
      },
      "sec-anatomy": {
        "h2": "Czym jest trójkąt prostokątny?",
        "blocks": [
          { "kind": "p", "text": "Zanim wzór nabierze sensu, oznaczenia muszą być dokładne. Każdy symbol poniżej pojawia się w kalkulatorze i każdy niesie jedno, ustalone znaczenie." },
          { "kind": "h3", "text": "Definicja trójkąta prostokątnego" },
          { "kind": "p", "text": "Trójkąt prostokątny to wielokąt o trzech bokach zawierający dokładnie jeden kąt wewnętrzny 90 stopni. Ma trzy wierzchołki, trzy boki i trzy kąty wewnętrzne sumujące się do 180 stopni. Kąt prosty oznacza się zwykle małym kwadratem w narożniku. Dwa boki tworzące ten narożnik to przyprostokątne; bok naprzeciw to przeciwprostokątna. Ponieważ [[C=90^\\circ]], wynika stąd [[[\\boxed{A+B=90^\\circ}]]]: dwa kąty ostre są dopełniające, więc znajomość jednego wyznacza drugi." },
          { "kind": "h3", "text": "Czym są dwie przyprostokątne trójkąta prostokątnego?" },
          { "kind": "p", "text": "Przyprostokątne to dwa boki stykające się w kącie prostym. Przyprostokątna [[a]] leży naprzeciw kąta [[A]]; przyprostokątna [[b]] leży naprzeciw kąta [[B]]. Ich cechą definiującą jest prostopadłość: [[a\\perp b]]. Ten jeden fakt sprawia, że obliczenie pola jest tak bezpośrednie, ponieważ para prostopadła dostarcza już podstawę i wysokość bez dodatkowej konstrukcji." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta 90 stopni. Jest zawsze najdłuższym bokiem trójkąta i nigdy sama nie tworzy kąta prostego; rozciąga się naprzeciw niego. Nie jest wymagana we wzorze na pole opartym na przyprostokątnych. Przydaje się, gdy brakuje boku, ponieważ [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] odtwarza go przez twierdzenie Pitagorasa, ale kalkulator pola nigdy o nią nie pyta." },
          { "kind": "h3", "text": "Dlaczego dwie przyprostokątne są prostopadłe?" },
          { "kind": "p", "text": "Prostopadły oznacza spotykający się pod kątem dokładnie 90 stopni. Przyprostokątne mają wspólny wierzchołek kąta prostego, więc narożnik między nimi jest z definicji prosty. Ma to znaczenie, ponieważ pole wymaga podstawy pomnożonej przez prostopadłą wysokość. W trójkącie prostokątnym ta para jest już narysowana: nie ma wysokości do opuszczenia, nie ma dodatkowej linii do skonstruowania. Trójkąt przekazuje oba pomiary bezpośrednio." },
          { "kind": "h3", "text": "Czy przyprostokątne można zamieniać?" },
          { "kind": "p", "text": "Tak. Ponieważ [[a\\times b=b\\times a]], wynika stąd [[\\frac{a\\times b}{2}=\\frac{b\\times a}{2}]]. Konkretne sprawdzenie: [[\\frac{3\\times4}{2}=6]] i [[\\frac{4\\times3}{2}=6]]. Przemianowanie, która przyprostokątna nazywa się [[a]], a która [[b]], nie zmienia nic w trójkącie ani w jego polu. Wpisz oba pomiary w dowolne pole; kalkulator zwraca ten sam wynik." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC: kąt prosty przy C, wyróżnione przyprostokątne a i b, przeciwprostokątna c, wzór K = ab/2",
        "figcaption": "Trójkąt ABC: wyróżnione przyprostokątne a i b to dwa pomiary potrzebne kalkulatorowi."
      },
      "sec-base-height": {
        "h2": "Dlaczego dwie przyprostokątne są podstawą i wysokością?",
        "blocks": [
          { "kind": "p", "text": "Cała metoda opiera się na jednym fakcie geometrycznym: w trójkącie prostokątnym podstawa i prostopadła wysokość są już narysowane jako dwie przyprostokątne. Zrozumienie dlaczego zamienia wzór z wyuczonej reguły w coś oczywistego." },
          { "kind": "h3", "text": "Czym jest podstawa trójkąta?" },
          { "kind": "p", "text": "Podstawa to bok wybrany jako odniesienie do obliczenia pola. Każdy bok trójkąta może służyć za podstawę. Dla trójkąta prostokątnego wybór którejkolwiek przyprostokątnej na podstawę jest naturalny, ponieważ druga przyprostokątna jest już do niej prostopadła. Wybór to kwestia wygody: wybierz jedną przyprostokątną na podstawę, a geometria kąta prostego załatwi resztę." },
          { "kind": "h3", "text": "Czym jest prostopadła wysokość?" },
          { "kind": "p", "text": "Wysokość to najkrótsza odległość od podstawy do przeciwległego wierzchołka, mierzona pod kątem prostym do podstawy. Gdy podstawą jest przyprostokątna [[a]], przeciwległy wierzchołek to daleki koniec przyprostokątnej [[b]], a przyprostokątna [[b]] sama jest tą prostopadłą odległością. Nic nie trzeba rysować ani mierzyć poza trójkątem; wysokość jest bokiem, nie konstrukcją." },
          { "kind": "h3", "text": "Dlaczego prostopadłość ma znaczenie?" },
          { "kind": "p", "text": "Mnożenie dwóch długości boków daje iloczyn podstawa razy wysokość tylko wtedy, gdy boki są prostopadłe. Pochyły bok sparowany z podstawą mierzy dłuższy odcinek przekątny, a nie prostopadłą wysokość, więc iloczyn przewyższa prawdziwy prostokąt podstawa-wysokość. Przyprostokątne trójkąta prostokątnego są prostopadłe z definicji, i dokładnie dlatego ich iloczyn jest właściwym punktem wyjścia. Ten kalkulator wymaga dwóch boków tworzących kąt prosty; każde inne sparowanie łamie logikę, na której opiera się wzór." },
          { "kind": "h3", "text": "Czy przeciwprostokątna może służyć za podstawę?" },
          { "kind": "p", "text": "Trójkąt może używać każdego boku jako podstawy, włącznie z przeciwprostokątną, ale wysokość musi być wtedy prostopadłą odległością od przeciwległego wierzchołka do tego boku. Ta odległość nie jest jedną z przyprostokątnych i ten kalkulator jej nie mierzy. Przeciwprostokątna nie może po prostu zastąpić przyprostokątnej we wzorze [[K=\\frac{ab}{2}]]; w ten sposób oblicza się inną, błędną wielkość. Ten kalkulator zbudowano wyłącznie dla dwóch prostopadłych przyprostokątnych." }
        ]
      },
      "sec-formula": {
        "h2": "Dlaczego pole trójkąta prostokątnego to połowa iloczynu jego przyprostokątnych?",
        "blocks": [
          { "kind": "p", "text": "Zacznij od ogólnej reguły: [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]. Dla trójkąta prostokątnego przyjmij [[\\text{Base}=a]] i [[\\text{Height}=b]]. Ponieważ dwie przyprostokątne są prostopadłe, [[[\\boxed{K=\\frac{a\\times b}{2}}]]] Reszta tej sekcji pokazuje, skąd bierze się to dzielenie na pół, żeby dzielenie przez dwa było zrozumiane, a nie tylko zapamiętane." },
          { "kind": "h3", "text": "Zrozumienie metody prostokąta" },
          { "kind": "p", "text": "Narysuj prostokąt o szerokości [[a]] i wysokości [[b]]. Jego pole to [[K_{\\text{rectangle}}=a\\times b]]. Teraz poprowadź przekątną z jednego narożnika do przeciwległego. Przekątna tnie prostokąt na dwa trójkąty będące swoimi dokładnymi kopiami, każdy o przyprostokątnych [[a]] i [[b]] i kącie prostym tam, gdzie był narożnik prostokąta. Oba trójkąty mają równe pole, więc każdy posiada połowę prostokąta: [[[\\boxed{K_{\\text{triangle}}=\\frac{a\\times b}{2}}]]]" },
          { "kind": "h3", "text": "Dlaczego dwa przystające trójkąty prostokątne tworzą prostokąt?" },
          { "kind": "p", "text": "Ułóż dwie kopie trójkąta tak, by ich przeciwprostokątne się stykały. Pasujące przyprostokątne układają się naprzeciw siebie: [[a]] przy [[a]], [[b]] przy [[b]]. Ponieważ kąty ostre trójkąta prostokątnego są dopełniające ([[A+B=90^\\circ]]), kąty schodzące się w każdym narożniku połączonego kształtu sumują się do 90 stopni dookoła. Wynik ma cztery kąty proste i równe boki naprzeciw: prostokąt. Jego bokami są dokładnie dwie przyprostokątne, dlatego pole prostokąta wynosi [[a\\times b]], a każdy trójkąt posiada połowę." },
          { "kind": "h3", "text": "Dlaczego dzielenie przez dwa jest konieczne?" },
          { "kind": "p", "text": "Weź prostokąt 6 na 8. Jego pole to [[K=6\\times8=48]]. Każdy z dwóch przystających trójkątów prostokątnych zajmuje połowę: [[K=\\frac{48}{2}]], [[[\\boxed{K=24}]]] Pominięcie dzielenia odpowiada na inne pytanie: na pole prostokąta, nie trójkąta. Dzielenie przez dwa nie jest współczynnikiem korygującym; to krok, który przycina otaczający prostokąt do trójkąta." },
          { "kind": "h3", "text": "Geometryczny dowód przy użyciu współrzędnych" },
          { "kind": "p", "text": "Dla czytelników obeznanych ze współrzędnymi, ten sam wynik z algebry. Umieść wierzchołek kąta prostego w początku układu i niech wierzchołki będą [[C=(0,0)]], [[A=(a,0)]], [[B=(0,b)]]. Trójkąt to obszar ograniczony dwiema osiami współrzędnych i prostą łączącą [[A]] z [[B]]. Podstawa wzdłuż osi x ma długość [[a]], bok pionowy ma długość [[b]], a otoczony trójkąt prostokątny wypełnia dokładnie połowę prostokąta [[a]] na [[b]], który wyznaczają te osie. Zatem [[[\\boxed{K=\\frac{ab}{2}}]]], ten sam wzór, osiągnięty bez żadnej nowej machinerii." }
        ],
        "imgAlt": "Prostokąt a na b podzielony przekątną na dwa przystające trójkąty prostokątne, każdy o polu ab/2",
        "figcaption": "Prostokąt o szerokości a i wysokości b, przecięty wzdłuż przekątnej na dwa przystające trójkąty prostokątne."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego na podstawie przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Kalkulator potrzebuje dokładnie dwóch danych wejściowych, wpisywanych w kolejności. Poniższe kroki podążają za układem ekranu, od rozpoznania pomiarów po sprawdzony wynik." }
        ],
        "steps": [
          "<strong>Rozpoznaj dwa boki stykające się w kącie 90 stopni.</strong> To przyprostokątne; znacznik kąta prostego pokazuje, gdzie się łączą.",
          "<strong>Upewnij się, że żaden wybrany pomiar nie jest przeciwprostokątną.</strong> Przeciwprostokątna to najdłuższy bok, naprzeciw kąta prostego.",
          "<strong>Zmierz pierwszą przyprostokątną.</strong> Użyj taśmy, linijki lub skali rysunku dobranej do obiektu.",
          "<strong>Zmierz drugą przyprostokątną.</strong> Mierz wzdłuż samego boku, od narożnika do narożnika.",
          "<strong>Upewnij się, że oba pomiary używają zgodnych jednostek.</strong> Metry z metrami, stopy ze stopami, nigdy mieszane.",
          "<strong>Wpisz przyprostokątną a w pierwsze pole.</strong> Każda przyprostokątna może iść pierwsza; oznaczenia są wymienne.",
          "<strong>Wpisz przyprostokątną b w drugie pole.</strong> To drugi prostopadły bok.",
          "<strong>Wybierz odpowiednie jednostki miary.</strong> Dopasuj jednostkę do tego, co faktycznie zmierzono.",
          "<strong>Kliknij Calculate Area.</strong> Wynik pojawi się wraz z pokazanym podstawieniem.",
          "<strong>Przejrzyj obliczony wynik.</strong> Odczytaj pole i upewnij się, że wygląda rozsądnie.",
          "<strong>Sprawdź krok po kroku rozwiązanie matematyczne.</strong> Pokazuje wzór, podstawienie i działania.",
          "<strong>Użyj diagramu trójkąta, aby zweryfikować oznaczenia boków.</strong> Upewnij się, że a i b leżą na prostopadłych bokach.",
          "<strong>Upewnij się, że wynik wyrażono w jednostkach kwadratowych.</strong> Jednostki długości podniesione do kwadratu, zgodne z danymi wejściowymi.",
          "<strong>Kliknij Reset, rozpoczynając nowe obliczenie.</strong> Czyści oba pola, dając czysty start."
        ],
        "closingParagraphs": [
          "Kalkulator ma dokładnie dwa wejścia, przyprostokątną [[a]] i przyprostokątną [[b]]. Nie ma innych trybów ani ukrytych pól; każde pole na tej stronie pochodzi ze wzoru [[K=\\frac{ab}{2}]]."
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku pola trójkąta prostokątnego z dwóch przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Cztery klasyczne trójkąty prostokątne pokazują metodę na rosnących rozmiarach. Każdy przykład podstawia do wzoru, a przeciwprostokątna pojawia się tylko jako opcjonalne sprawdzenie, nigdy jako dane wejściowe." },
          { "kind": "h3", "text": "Przykład 1: Trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]]. Krok 1: zapisz wzór, [[K=\\frac{a\\times b}{2}]]. Krok 2: podstaw, [[K=\\frac{3\\times4}{2}]]. Krok 3: pomnóż, [[K=\\frac{12}{2}]]. Odpowiedź końcowa: [[[\\boxed{K=6\\text{ square units}}]]] Opcjonalne sprawdzenie: [[c=\\sqrt{3^2+4^2}=5]]. Przeciwprostokątna potwierdza znaną trójkę, ale nie bierze udziału w polu." },
          { "kind": "h3", "text": "Przykład 2: Trójkąt prostokątny 6-8-10" },
          { "kind": "p", "text": "Dane [[a=6]], [[b=8]]. Wtedy [[K=\\frac{6\\times8}{2}]], [[K=\\frac{48}{2}]], [[[\\boxed{K=24\\text{ square units}}]]] Sprawdzenie prostokątem: otaczający prostokąt 6 na 8 ma pole 48, a trójkąt posiada dokładnie jego połowę." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane [[a=5]], [[b=12]]. Wtedy [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Przeciwprostokątna 13 nigdy nie wchodzi do obliczenia; miałaby znaczenie tylko gdyby brakowało boku." },
          { "kind": "h3", "text": "Przykład 4: Trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dane [[a=8]], [[b=15]]. Wtedy [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Te same trzy kroki, większe liczby, identyczna logika." },
          { "kind": "h3", "text": "Porównanie przykładów podstawowych" }
        ],
        "table": {
          "headers": ["Trójkąt", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna (tylko sprawdzenie)", "Obliczone pole"],
          "rows": [
            ["3-4-5", "3", "4", "5", "6"],
            ["6-8-10", "6", "8", "10", "24"],
            ["5-12-13", "5", "12", "13", "30"],
            ["8-15-17", "8", "15", "17", "60"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Zastosowania w praktyce pola trójkąta prostokątnego z dwóch przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Dwanaście opracowanych sytuacji przenosi wzór ze strony do warsztatu, na plac budowy i do studia. Każda nazywa trójkątny panel, przekrój, profil lub uproszczony model, przepuszcza dwa wejścia kalkulatora przez wzór i podaje założenie stojące za liczbami. Tam, gdzie prawdziwy obiekt jest zakrzywiony lub nieregularny, obliczenie obejmuje tylko zamodelowany trójkąt, a pole nigdy samo nie zastępuje wytrzymałości, kosztu ani bezpieczeństwa." },
          { "kind": "h3", "text": "Przykład 1: Trójkątne okno szklane" },
          { "kind": "p", "text": "Trójkątne okno szklane ma wymiary prostopadłe [[a=3\\text{ m}]], [[b=4\\text{ m}]]. Podstaw: [[K=\\frac{3\\times4}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Wynik przedstawia płaską powierzchnię szkła przed odjęciem wymiarów ramy. Założenie: szyba jest prawdziwym trójkątem prostokątnym; naddatek na ramę liczy się osobno." },
          { "kind": "h3", "text": "Przykład 2: Stalowy wspornik" },
          { "kind": "p", "text": "Trójkątny stalowy wspornik ma [[a=5\\text{ cm}]], [[b=12\\text{ cm}]]. Wtedy [[K=\\frac{5\\times12}{2}]], [[[\\boxed{K=30\\text{ cm}^2}]]] Pole opisuje płaską blachę i nie wyznacza jej nośności. Założenie: wykrój wspornika cięty jest jako trójkąt prostokątny; otwory na śruby i zagięcia pominięto." },
          { "kind": "h3", "text": "Przykład 3: Trójkątny profil boczny rampy" },
          { "kind": "p", "text": "Uproszczony profil boczny rampy ma [[a=6\\text{ m}]], [[b=8\\text{ m}]]. Wtedy [[K=\\frac{6\\times8}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] To pionowy trójkątny profil boczny, nie pochyła powierzchnia do chodzenia. Założenie: profil zamodelowano z prostym narożnikiem u podstawy." },
          { "kind": "h3", "text": "Przykład 4: Trójkątna podpora dachu" },
          { "kind": "p", "text": "Trójkątny przekrój podpory dachu ma [[a=8\\text{ ft}]], [[b=15\\text{ ft}]]. Wtedy [[K=\\frac{8\\times15}{2}]], [[[\\boxed{K=60\\text{ ft}^2}]]] Pole przedstawia płaski trójkątny przekrój, przydatne do szacowania materiałów. Założenie: przekrój zamodelowano jako trójkąt prostokątny; pełna geometria dachu może się różnić." },
          { "kind": "h3", "text": "Przykład 5: Trójkątny prostokątny fragment ogrodu" },
          { "kind": "p", "text": "Ogród zawiera trójkątny prostokątny fragment o [[a=7\\text{ m}]], [[b=24\\text{ m}]]. Wtedy [[K=\\frac{7\\times24}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Wynik pomaga oszacować powierzchnię dostępną pod nasadzenia lub trawnik. Założenie: granice grządki są proste i stykają się pod kątem prostym." },
          { "kind": "h3", "text": "Przykład 6: Trójkątny żagiel z tkaniny" },
          { "kind": "p", "text": "Prostokątny trójkątny panel z tkaniny ma [[a=9\\text{ ft}]], [[b=12\\text{ ft}]]. Wtedy [[K=\\frac{9\\times12}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Przedstawia płaski trójkątny fragment tkaniny przed szwami i naddatkami materiałowymi. Założenie: żagiel zamodelowano na płasko; prawdziwe żagle wyginają się pod obciążeniem." },
          { "kind": "h3", "text": "Przykład 7: Szablon do cięcia ze sklejki" },
          { "kind": "p", "text": "Trójkątny prostokątny szablon ze sklejki ma [[a=12\\text{ cm}]], [[b=16\\text{ cm}]]. Wtedy [[K=\\frac{12\\times16}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] Wynik pomaga oszacować zapotrzebowanie na materiał przed odpadami z cięcia. Założenie: szablon jest prawdziwym trójkątem prostokątnym; szerokość rzazu i ścinki liczy się dodatkowo." },
          { "kind": "h3", "text": "Przykład 8: Trójkątny panel szyldu" },
          { "kind": "p", "text": "Trójkątny panel szyldu ma wymiary prostopadłe [[a=20\\text{ cm}]], [[b=21\\text{ cm}]]. Wtedy [[K=\\frac{20\\times21}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Przedstawia płaską powierzchnię do druku lub malowania. Założenie: lico panelu jest płaskie i trójkątne prostokątne; osprzęt montażowy pominięto." },
          { "kind": "h3", "text": "Przykład 9: Geodezyjny fragment działki" },
          { "kind": "p", "text": "Uproszczony trójkątny prostokątny fragment gruntu ma [[a=9\\text{ m}]], [[b=40\\text{ m}]]. Wtedy [[K=\\frac{9\\times40}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] Wzór oblicza pole zmierzonego trójkątnego fragmentu. Założenie: fragment zamodelowano z prostym narożnikiem; nieregularną działkę trzeba podzielić na prostsze kształty." },
          { "kind": "h3", "text": "Przykład 10: Trójkątna podpora markizy" },
          { "kind": "p", "text": "Trójkątny prostokątny przekrój podpory markizy ma [[a=15\\text{ ft}]], [[b=20\\text{ ft}]]. Wtedy [[K=\\frac{15\\times20}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Wynik przedstawia zamodelowany płaski trójkątny przekrój, niekoniecznie całą powierzchnię nieregularnej markizy. Założenie: geometrię podpory uproszczono do trójkąta prostokątnego." },
          { "kind": "h3", "text": "Przykład 11: Przemysłowy panel wsporczy" },
          { "kind": "p", "text": "Trójkątny prostokątny panel przemysłowy ma [[a=11\\text{ m}]], [[b=60\\text{ m}]]. Wtedy [[K=\\frac{11\\times60}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Pole opisuje płaski geometryczny panel, a nie jego parametry konstrukcyjne. Założenie: panel zamodelowano jako trójkąt prostokątny; grubość i mocowania to osobne zagadnienia." },
          { "kind": "h3", "text": "Przykład 12: Trójkątny szczyt magazynu" },
          { "kind": "p", "text": "Magazyn ma uproszczony trójkątny prostokątny przekrój szczytu dachu o [[a=13\\text{ ft}]], [[b=84\\text{ ft}]]. Wtedy [[K=\\frac{13\\times84}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] Wynik pomaga oszacować płaską trójkątną powierzchnię szczytu, na przykład przy wycenie okładziny. Założenie: szczyt zamodelowano jako trójkąt prostokątny." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Zastosowanie praktyczne", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna (opcjonalnie)", "Obliczone pole", "Jednostka miary"],
          "rows": [
            ["Okno szklane", "3", "4", "5", "6", "m²"],
            ["Wspornik stalowy", "5", "12", "13", "30", "cm²"],
            ["Profil rampy", "6", "8", "10", "24", "m²"],
            ["Podpora dachu", "8", "15", "17", "60", "ft²"],
            ["Fragment ogrodu", "7", "24", "25", "84", "m²"],
            ["Żagiel z tkaniny", "9", "12", "15", "54", "ft²"],
            ["Szablon ze sklejki", "12", "16", "20", "96", "cm²"],
            ["Panel szyldu", "20", "21", "29", "210", "cm²"],
            ["Fragment pomiarowy", "9", "40", "41", "180", "m²"],
            ["Podpora markizy", "15", "20", "25", "150", "ft²"],
            ["Panel przemysłowy", "11", "60", "61", "330", "m²"],
            ["Szczyt magazynu", "13", "84", "85", "546", "ft²"]
          ]
        }
      },
      "sec-pythagoras": {
        "h2": "Jak twierdzenie Pitagorasa wiąże się z polem trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Twierdzenie Pitagorasa głosi [[[\\boxed{a^2+b^2=c^2}]]]: przyprostokątne [[a]] i [[b]] wyznaczają przeciwprostokątną [[c]]. Odpowiada na pytanie o długości boków, podczas gdy wzór na pole mierzy otoczoną powierzchnię. Oba są powiązane, ale rozwiązują różne problemy, a obliczenie pola tutaj nigdy nie zależy od twierdzenia." },
          { "kind": "h3", "text": "Obliczanie przeciwprostokątnej z obu przyprostokątnych" },
          { "kind": "p", "text": "Dla [[a=6]] i [[b=8]] przeciwprostokątna wynosi [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[[\\boxed{c=10}]]] Pole oblicza się osobno: [[K=\\frac{6\\times8}{2}=24]]. Przeciwprostokątna to opcjonalna dodatkowa informacja do tego obliczenia pola, przydatny fakt, a nie wymagany krok." },
          { "kind": "h3", "text": "Czy twierdzenie Pitagorasa może zastąpić wzór na pole?" },
          { "kind": "p", "text": "Nie. Twierdzenie Pitagorasa ustala zależności między długościami boków; wzór na pole zamienia dwie prostopadłe przyprostokątne w otoczoną powierzchnię. Jedno odpowiada, jak długie, drugie odpowiada, ile powierzchni. Współpracują: gdy znana jest tylko jedna przyprostokątna i przeciwprostokątna, twierdzenie najpierw odtwarza brakującą przyprostokątną, a potem przejmuje wzór na pole. Żadne nie zastępuje drugiego." },
          { "kind": "h3", "text": "Kiedy twierdzenie Pitagorasa jest przydatne?" },
          { "kind": "p", "text": "Zasługuje na swoje miejsce, gdy brakuje boku albo pomiar wymaga sprawdzenia: znane są tylko jedna przyprostokątna i przeciwprostokątna, brakujący bok trzeba znaleźć przed krokiem pola, obliczoną przeciwprostokątną trzeba zweryfikować albo pomiar budowlany trzeba potwierdzić na placu. Do dedykowanego obliczenia brakującego boku krok ten obsługuje kalkulator boków trójkąta prostokątnego, a jego wynik można od razu wstawić z powrotem do wzoru na pole z przyprostokątnych." }
        ]
      },
      "sec-missing-leg": {
        "h2": "Jak znaleźć brakującą przyprostokątną, znając pole trójkąta",
        "blocks": [
          { "kind": "p", "text": "Wzór na pole czyta się w obie strony. Zacznij od [[K=\\frac{ab}{2}]]. Pomnóż obie strony przez 2: [[2K=ab]]. Podziel przez [[a]]: [[[\\boxed{b=\\frac{2K}{a}}]]] Podobnie [[[\\boxed{a=\\frac{2K}{b}}]]] Ta sama zależność, przekształcona, odtwarza nieznaną przyprostokątną." },
          { "kind": "h3", "text": "Opracowany przykład" },
          { "kind": "p", "text": "Załóżmy [[K=24\\text{ cm}^2]] i [[a=6\\text{ cm}]]. Wtedy [[b=\\frac{2\\times24}{6}]], [[[\\boxed{b=8\\text{ cm}}]]] Jednostki pozostają spójne: centymetry kwadratowe dzielone przez centymetry dają centymetry. To odwrotne użycie przydaje się do sprawdzenia zgłoszonego pola albo odtworzenia wymiaru z planów, ale zauważ, że to przekształcenie edukacyjne, a nie dodatkowy tryb wprowadzania w kalkulatorze powyżej, który nadal przyjmuje dwie przyprostokątne." }
        ]
      },
      "sec-scaling": {
        "h2": "Jak zmiana dwóch przyprostokątnych wpływa na pole?",
        "blocks": [
          { "kind": "p", "text": "Ponieważ [[K=\\frac{ab}{2}]] jest iloczynem, rozciąganie przyprostokątnych rozciąga pole w przewidywalny sposób. Poniższe prawidłowości warto znać przed przeskalowaniem jakiegokolwiek trójkątnego projektu." },
          { "kind": "h3", "text": "Co się dzieje, gdy jedna przyprostokątna się podwaja?" },
          { "kind": "p", "text": "Utrzymaj [[a]] i podwoj [[b]]. Wtedy [[K_1=\\frac{ab}{2}]] staje się [[K_2=\\frac{a(2b)}{2}]], więc [[[\\boxed{K_2=2K_1}]]] Podwojenie tylko jednej przyprostokątnej podwaja pole. Konkretne sprawdzenie: trójkąt 3 na 4 ma [[K=6]]; rozciągnięcie jednej przyprostokątnej do 3 na 8 daje [[K=12]]." },
          { "kind": "h3", "text": "Co się dzieje, gdy obie przyprostokątne się podwajają?" },
          { "kind": "p", "text": "Teraz podwoj obie: [[K_2=\\frac{(2a)(2b)}{2}]], co upraszcza się do [[[\\boxed{K_2=4K_1}]]] Podwojenie obu prostopadłych wymiarów czyni pole cztery razy większym, nie dwa razy. Trójkąt 3 na 4 ([[K=6]]) przeskalowany do 6 na 8 daje [[K=24]], dokładnie cztery razy więcej niż pierwotnie." },
          { "kind": "h3", "text": "Co się dzieje, gdy obie przyprostokątne są skalowane?" },
          { "kind": "p", "text": "Pomnóż każdą przyprostokątną przez współczynnik skali [[k]]: [[K_2=\\frac{(ka)(kb)}{2}]], zatem [[[\\boxed{K_2=k^2K_1}]]] Pole rośnie z kwadratem współczynnika skali. Przykład praktyczny: przeskaluj trójkąt 6 na 8 przez 1.5, by otrzymać 9 na 12. Wtedy [[K=\\frac{9\\times12}{2}=54]], a [[24\\times1.5^2=24\\times2.25=54]]. Dlatego szacunki materiałowe rosną szybciej niż wymiary liniowe: podwoj każdą długość, a potrzeba cztery razy więcej arkusza." },
          { "kind": "h3", "text": "Czy dwa różne trójkąty prostokątne mogą mieć to samo pole?" },
          { "kind": "p", "text": "Tak. Porównaj trójkąt 1, [[a=3]], [[b=4]]: [[K=\\frac{3\\times4}{2}=6]]. Trójkąt 2, [[a=2]], [[b=6]]: [[K=\\frac{2\\times6}{2}=6]]. Różne kształty otaczają to samo pole, gdy iloczyn ich przyprostokątnych jest równy. Krótki szeroki trójkąt i wysoki wąski mogą pokrywać identyczną powierzchnię, co ma znaczenie przy wpasowywaniu paneli w różne przestrzenie." }
        ],
        "imgAlt": "Dwa trójkąty prostokątne, 3 na 4 i 2 na 6, pokazane obok siebie, o równym polu 6",
        "figcaption": "Różne proporcje, to samo pole: oba trójkąty prostokątne otaczają 6 jednostek kwadratowych."
      },
      "sec-general": {
        "h2": "Dlaczego wzoru na dwie przyprostokątne nie można stosować do każdego trójkąta?",
        "blocks": [
          { "kind": "p", "text": "Wzór [[K=\\frac{ab}{2}]] działa, ponieważ dwie przyprostokątne są prostopadłe. Dla ogólnego trójkąta same dwie długości boków nie wystarczą: trzeba znać też kąt między nimi zawarty albo odpowiadającą wysokość." },
          { "kind": "p", "text": "Ogólna reguła to [[[\\boxed{K=\\frac{ab\\sin(C)}{2}}]]], gdzie [[C]] jest kątem zawartym między bokami [[a]] i [[b]]. Dla trójkąta prostokątnego [[C=90^\\circ]] i [[\\sin(90^\\circ)=1]]. Zatem [[K=\\frac{ab\\times1}{2}]], czyli [[[\\boxed{K=\\frac{ab}{2}}]]] Wzór dla trójkąta prostokątnego to wzór ogólny ze współczynnikiem sinus równym 1. Dla każdego innego kąta sinus zmniejsza iloczyn, dlatego wzoru na przyprostokątne nie wolno stosować do trójkąta nieprostokątnego: po cichu traktuje [[\\sin(C)]] jak 1, choć tak nie jest." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki przy obliczaniu pola trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Dwie przyprostokątne muszą dzielić jedną jednostkę długości, zanim zastosuje się wzór. Jednostka kwadratowa w odpowiedzi pochodzi z pomnożenia dwóch jednostek długości, więc spójne jednostki utrzymują liczbę znaczącą." },
          { "kind": "h3", "text": "Dlaczego wynik używa jednostek kwadratowych" },
          { "kind": "p", "text": "Pole liczy kwadraty jednostkowe pokrywające powierzchnię: [[\\text{cm}\\times\\text{cm}=\\text{cm}^2]], [[\\text{m}\\times\\text{m}=\\text{m}^2]], [[\\text{ft}\\times\\text{ft}=\\text{ft}^2]]. Jednostka to zawsze jednostka długości podniesiona do kwadratu, ponieważ iloczyn dwóch długości jest liczbą kwadratów. Podanie pola jako 24 m to błąd kategorii: 24 m to długość, a 24 m² to powierzchnia." },
          { "kind": "h3", "text": "Przeliczanie różnych jednostek przed obliczeniem" },
          { "kind": "p", "text": "Weź [[a=3\\text{ ft}]] i [[b=24\\text{ inches}]]. Najpierw przelicz: [[24\\text{ inches}=2\\text{ ft}]]. Potem [[K=\\frac{3\\times2}{2}]], [[[\\boxed{K=3\\text{ ft}^2}]]] Bez przeliczenia surowy iloczyn 72 nie ma czystego znaczenia: to ani stopy kwadratowe, ani cale kwadratowe. Najpierw przelicz, potem pomnóż, a jednostka odpowiedzi podąży automatycznie." },
          { "kind": "h3", "text": "Obliczanie na pomiarach dziesiętnych" },
          { "kind": "p", "text": "Ten sam wzór obsługuje liczby dziesiętne bez żadnej zmiany. Dane [[a=3.5]] i [[b=9.2]]: [[K=\\frac{3.5\\times9.2}{2}]], [[K=\\frac{32.2}{2}]], [[[\\boxed{K=16.1\\text{ square units}}]]] Liczby całkowite, dziesiętne i drobne pomiary warsztatowe przepływają przez to samo mnożenie-i-dzielenie-na-pół. Zachowaj miejsca dziesiętne, na które pozwala pomiar, a arytmetykę zostaw kalkulatorowi." },
          { "kind": "h3", "text": "Dlaczego należy unikać wczesnego zaokrąglania" },
          { "kind": "p", "text": "Zaokrąglij dane wejściowe, a błąd przejedzie przez mnożenie do odpowiedzi. Przyprostokątna zmierzona jako 9.2 nie powinna stać się 9 przed mnożeniem; stracone 0.2 na jednostkę sumuje się w całym iloczynie. Zachowaj pełną precyzję przez kroki pośrednie i zaokrąglij tylko wynik końcowy, do dokładności, którą uzasadniają pomiary. Precyzja zachowana wcześnie to dokładność dostarczona na końcu." }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu pola trójkąta prostokątnego z przyprostokątnych",
        "blocks": [
          { "kind": "p", "text": "Prawie każda błędna odpowiedź w tym temacie wywodzi się z błędnie oznaczonego wejścia, a nie ze złej arytmetyki. Poniższe piętnaście błędów to te, które pojawiają się wciąż na nowo, każdy z przyczyną i poprawką." },
          { "kind": "h3", "text": "1. Używanie przeciwprostokątnej zamiast jednej z przyprostokątnych" },
          { "kind": "p", "text": "Przeciwprostokątna to najdłuższy bok i nigdy nie tworzy kąta prostego. Wpisanie jej jako przyprostokątnej zawyża iloczyn, na przykład potraktowanie 10 jako przyprostokątnej przy 8 daje 40 zamiast 24. Poprawka: najpierw znajdź kąt prosty; dwa boki go dotykające to przyprostokątne." },
          { "kind": "h3", "text": "2. Mylenie dwóch przyprostokątnych z innymi bokami" },
          { "kind": "p", "text": "Na przechylonym rysunku każdy bok może wyglądać jak naturalna podstawa. Oznaczenia [[a]] i [[b]] należą wyłącznie do pary prostopadłej. Poprawka: znajdź znacznik kwadratowego narożnika przed przypisaniem oznaczeń, niezależnie od obrotu trójkąta." },
          { "kind": "h3", "text": "3. Zapominanie, że przyprostokątne muszą tworzyć kąt 90 stopni" },
          { "kind": "p", "text": "Iloczyn podzielony na pół zakłada prostopadłość. Dwa boki spotykające się pod 80 lub 100 stopni wymagają zamiast tego ogólnego wzoru z sinusem. Poprawka: potwierdź, że narożnik jest prosty, zanim użyjesz [[K=\\frac{ab}{2}]]." },
          { "kind": "h3", "text": "4. Zapominanie o dzieleniu przez dwa" },
          { "kind": "p", "text": "Sam iloczyn [[a\\times b]] to pole otaczającego prostokąta, dwukrotność trójkąta. Poprawka: podziel iloczyn na pół; /2 jest częścią wzoru, nie opcją." },
          { "kind": "h3", "text": "5. Obliczanie pola prostokąta zamiast pola trójkąta" },
          { "kind": "p", "text": "Czterdzieści osiem to poprawne pole dla prostokąta 6 na 8, tylko nie dla trójkąta w środku. Poprawka: zapytaj, o który kształt pyta zadanie, a dzielenie na pół stosuj tylko dla trójkąta." },
          { "kind": "h3", "text": "6. Mieszanie stóp z calami" },
          { "kind": "p", "text": "Mnożenie 3 ft przez 24 cale daje 72 bez czystego znaczenia. Poprawka: przed obliczeniem przelicz oba na jedną jednostkę (24 cale = 2 ft)." },
          { "kind": "h3", "text": "7. Mieszanie centymetrów z metrami" },
          { "kind": "p", "text": "Ta sama pułapka w skali metrycznej: 2 m na 30 cm musi najpierw stać się jedną jednostką. Poprawka: przelicz (30 cm = 0.3 m), potem pomnóż." },
          { "kind": "h3", "text": "8. Podawanie wyniku w jednostkach liniowych" },
          { "kind": "p", "text": "Pole 24 m² to nie 24 m. Poprawka: zapisuj jednostkę kwadratową przy liczbie, za każdym razem." },
          { "kind": "h3", "text": "9. Używanie tylko jednej przyprostokątnej" },
          { "kind": "p", "text": "Jedna przyprostokątna to długość, nie pole; wzór potrzebuje pary. Wpisanie jednego pomiaru nie odpowiada na nic. Poprawka: zmierz oba prostopadłe boki." },
          { "kind": "h3", "text": "10. Traktowanie dowolnych dwóch boków trójkąta prostokątnego jako prostopadłych" },
          { "kind": "p", "text": "Prostopadłe są tylko przyprostokątne. Para przyprostokątna-plus-przeciwprostokątna styka się w kącie ostrym, więc jej iloczyn podzielony na pół nie jest polem. Poprawka: sprawdź, czy oba wybrane boki dotykają kąta prostego." },
          { "kind": "h3", "text": "11. Używanie ujemnych lub zerowych pomiarów" },
          { "kind": "p", "text": "Długości są dodatnie. Zero zapada trójkąt do linii bez pola, a ujemne długości nie mają tu sensu geometrycznego. Poprawka: zmierz ponownie; odrzucaj dane niedodatnie." },
          { "kind": "h3", "text": "12. Zbyt wczesne zaokrąglanie danych dziesiętnych" },
          { "kind": "p", "text": "Zaokrąglenie 9.2 do 9 przed mnożeniem przesuwa odpowiedź z 16.1 w dół. Poprawka: zachowaj pełną precyzję przez obliczenie i zaokrąglij tylko wynik końcowy." },
          { "kind": "h3", "text": "13. Zakładanie, że przeciwprostokątna jest wymagana" },
          { "kind": "p", "text": "Nie jest. [[K=\\frac{ab}{2}]] używa tylko przyprostokątnych, a wcześniejsze obliczenie przeciwprostokątnej dodaje krok, który nic nie zmienia. Poprawka: pomiń ją, chyba że inne obliczenie jej potrzebuje." },
          { "kind": "h3", "text": "14. Mylenie obwodu z polem" },
          { "kind": "p", "text": "Obwód dodaje trzy boki ([[a+b+c]]); pole mnoży dwie przyprostokątne i dzieli na pół. Dla 6-8-10 obwód wynosi 24, a pole też wynosi 24, zbieg okoliczności, który powoduje prawdziwe zamieszanie. Poprawka: sprawdź, czy pytanie dotyczy długości granicy, czy otoczonej powierzchni." },
          { "kind": "h3", "text": "15. Stosowanie wzoru dla trójkąta prostokątnego do trójkąta nieprostokątnego" },
          { "kind": "p", "text": "Bez narożnika 90 stopni iloczyn potrzebuje sinusa kąta zawartego. Użycie [[K=\\frac{ab}{2}]] na ogólnym trójkącie zawyża pole. Poprawka: użyj [[K=\\frac{ab\\sin(C)}{2}]] z rzeczywistym kątem zawartym." },
          { "kind": "h3", "text": "Źle kontra dobrze: konkretny przykład" },
          { "kind": "p", "text": "Użyj [[a=6]], [[b=8]]. Poprawnie: [[K=\\frac{6\\times8}{2}=24]]. Błędnie, zapominając podzielić przez dwa: [[6\\times8=48]], czyli pole odpowiadającego prostokąta, nie trójkąta prostokątnego. Błędnie, używając przeciwprostokątnej 10, jakby była prostopadłą przyprostokątną: [[K=\\frac{10\\times8}{2}=40]], błędnie, bo 10 nie jest prostopadłe do 8. Arytmetyka wygląda pewnie we wszystkich trzech przypadkach; tylko geometria je rozróżnia." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy pole trójkąta prostokątnego jest poprawne",
        "blocks": [
          { "kind": "p", "text": "Sześć niezależnych sprawdzeń, wszystkie pokazane na trójkącie 6-8-10 ([[a=6]], [[b=8]], [[c=10]], [[K=24]]). Zgodność różnych dróg to najmocniejszy dowód poprawności odpowiedzi, w pracy domowej i w pomiarze praktycznym." },
          { "kind": "h3", "text": "Metoda 1: Przelicz głównym wzorem" },
          { "kind": "p", "text": "Uruchom świeżo [[K=\\frac{ab}{2}]]: [[K=\\frac{6\\times8}{2}=24]]. Drugie przejście z ponownie wpisanymi liczbami wyłapuje literówki i błędnie wciśnięte cyfry." },
          { "kind": "h3", "text": "Metoda 2: Podwoj trójkąt, by utworzyć prostokąt" },
          { "kind": "p", "text": "Podwojony trójkąt to prostokąt 6 na 8: [[K_{\\text{rectangle}}=6\\times8=48]], więc [[K_{\\text{triangle}}=\\frac{48}{2}=24]]. Jeśli podwojone pole nie zgadza się z [[a\\times b]], arytmetyka gdzieś się poślizgnęła." },
          { "kind": "h3", "text": "Metoda 3: Sprawdź przeciwprostokątną twierdzeniem Pitagorasa" },
          { "kind": "p", "text": "Potwierdź [[c=\\sqrt{a^2+b^2}]]: [[c=\\sqrt{36+64}=10]]. To sprawdza rozpoznanie boków stojące za polem; błędna przeciwprostokątna oznacza źle oznaczony bok." },
          { "kind": "h3", "text": "Metoda 4: Przekształć wzór na pole" },
          { "kind": "p", "text": "Odtwórz znane wejście z odpowiedzi: [[b=\\frac{2K}{a}=\\frac{48}{6}=8]]. Powrót do przyprostokątnej, od której zaczęto, zamyka pętlę i potwierdza krok dzielenia." },
          { "kind": "h3", "text": "Metoda 5: Sprawdź jednostki miary" },
          { "kind": "p", "text": "Obie przyprostokątne muszą używać tej samej jednostki długości, a odpowiedź musi używać tej jednostki podniesionej do kwadratu. Mieszane jednostki albo jednostka liniowa w odpowiedzi sygnalizują błąd ustawienia, zanim jakiekolwiek liczby zostaną przeliczone." },
          { "kind": "h3", "text": "Metoda 6: Oszacuj wynik" },
          { "kind": "p", "text": "Zaokrąglij do przyjaznych liczb: 6 na 8 to blisko 50, na pół to blisko 25. Odpowiedź 24 leży tuż obok oszacowania; odpowiedź 240 albo 2.4 już nie. Oszacowanie wyłapuje błędy przecinka dziesiętnego i dzielenia, które dokładne przeliczenie może powtórzyć." }
        ]
      },
      "sec-applications": {
        "h2": "Pole trójkąta prostokątnego z dwóch przyprostokątnych w praktyce",
        "blocks": [
          { "kind": "p", "text": "Ten sam dwuwejściowy schemat pojawia się wszędzie tam, gdzie trzeba zmierzyć prosty narożnik. Szklarz odczytuje dwie prostopadłe krawędzie okna; producent mierzy przyprostokątne wykroju wspornika; geodeta sprowadza narożnik działki do dwóch prostopadłych odsunięć. W każdym przypadku przeciwprostokątna to niezręczny pomiar, a ten wzór nigdy o nią nie pyta." },
          { "kind": "p", "text": "Cztery panele poniżej pokazują schemat w różnych skalach. Okno szklane (6 m²) i fragment ogrodu (84 m²) używają geometrii 3-4-5 i 7-24-25 w skali metrów; podpora dachu (60 ft²) używa trójkąta 8-15-17; blacha stalowa (30 cm²) używa 5-12-13. Każdy panel oznacza obie przyprostokątne, znacznik kąta prostego i wynikowe pole, żeby droga od pomiaru do odpowiedzi pozostawała widoczna." }
        ],
        "imgAlt": "Cztery panele: okno szklane 6 m2, podpora dachu 60 ft2, fragment ogrodu 84 m2, blacha stalowa 30 cm2",
        "figcaption": "Cztery prawdziwe zastosowania: okno szklane, podpora dachu, fragment ogrodu i blacha stalowa wraz z polami."
      },
      "sec-faq": {
        "h2": "Często zadawane pytania",
        "blocks": [
          { "kind": "p", "text": "Poniżej odpowiedzi na najczęstsze pytania o pole trójkąta prostokątnego z dwóch przyprostokątnych." }
        ]
      },
      "sec-related": {
        "h2": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Różne pomiary wymagają różnych kalkulatorów." }
        ]
      },
      "sec-conclusion": {
        "h2": "Dwa pomiary, jeden iloczyn podzielony na pół",
        "blocks": [
          { "kind": "p", "text": "Dwie prostopadłe długości wystarczą. Pomnóż je, podziel iloczyn na pół, a otoczona powierzchnia zostaje nazwana. Dowód prostokątem pokazuje, dlaczego dzielenie na pół jest ścisłe, a nie umowne, twierdzenie Pitagorasa sprawdza boki stojące za odpowiedzią, a przekształcony wzór odtwarza brakującą przyprostokątną, gdy pole jest już znane." },
          { "kind": "p", "text": "Nawyk pracy jest prosty: potwierdź narożnik 90 stopni, dopasuj jednostki, nie zaokrąglaj liczb dziesiętnych do końca i weryfikuj przez prostokąt. Z tymi nawykami [[K=\\frac{ab}{2}]] to najbardziej niezawodne obliczenie pola w geometrii." }
        ]
      }
    }
  }
};
