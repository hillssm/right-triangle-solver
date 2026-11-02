// areaFromHypotenuseAltitudeGuideTranslations.batch4.ts
// Right Triangle Area From Hypotenuse and Altitude Guide (Page 19) translations for ko, ms, pl.
// KaTeX math ([[...]] / [[[....]]]) kept byte-identical to EN; only prose translated.
// Backslashes inside KaTeX strings match the EN source bytes exactly.
export const AREA_FROM_HYPOTENUSE_ALTITUDE_TRANSLATIONS_BATCH4 = {
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "sec-intro": "빗변과 높이로 직각삼각형의 넓이 구하는 법",
      "sec-understand": "빗변, 두 변, 높이 이해하기",
      "sec-formula": "넓이 공식이 빗변 곱하기 높이의 절반인 이유",
      "sec-relationship": "빗변과 높이가 두 변과 맺는 관계",
      "sec-max": "높이가 빗변의 절반을 넘을 수 없는 이유",
      "sec-howto": "빗변과 높이 넓이 계산기 사용법",
      "sec-examples": "단계별 풀이 예제",
      "sec-applications": "실생활 활용 사례",
      "sec-geomean": "기하평균 관계",
      "sec-legs": "빗변과 높이로부터 두 변 구하기",
      "sec-valid": "측정값이 유효한지 확인하기",
      "sec-units": "측정 단위와 반올림",
      "sec-mistakes": "흔한 실수",
      "sec-verify": "넓이 검증하는 법",
      "sec-altitude-table": "높이가 넓이에 미치는 영향",
      "sec-faq": "자주 묻는 질문",
      "sec-related": "관련 직각삼각형 계산기 살펴보기",
      "sec-conclusion": "결론"
    },
    "sections": {
      "sec-intro": {
        "h2": "빗변과 높이로 직각삼각형의 넓이 구하기",
        "blocks": [
          { "kind": "p", "text": "빗변의 길이가 [[10\\text{ m}]]이고, 그 빗변에 그은 높이가 [[4.8\\text{ m}]]인 직각삼각형이 있습니다. [[K=ch/2]]를 적용하면 [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. 이 삼각형은 24제곱미터의 평평한 면적을 차지합니다. 계산기가 자동화하는 완전한 방법이 바로 이것입니다: 한 변, 그 변에 수직인 높이, 한 번의 곱셈, 한 번의 나누기 2." },
          { "kind": "p", "text": "빗변을 밑변으로 쓸 수 있는 이유는, 대응하는 수직 높이를 알면 삼각형의 어떤 변도 밑변이 될 수 있기 때문입니다. 높이는 직각 꼭짓점에서 빗변에 내린 수직 선분이며, 빗변과 직각으로 만나야 합니다. 비스듬한 선분은 이 공식이 요구하는 높이가 아닙니다. 넓이는 밑변과 그 높이에만 의존하므로 두 변은 입력으로 필요하지 않으며, 결과는 사용한 길이 단위의 제곱 단위로 항상 표시됩니다." }
        ]
      },
      "sec-understand": {
        "h2": "빗변, 두 변, 높이 이해하기",
        "blocks": [
          { "kind": "p", "text": "전체에서 사용하는 기호는 다음과 같습니다: [[A]], [[B]], [[C]]는 꼭짓점과 각이며 [[C=90^\\circ]]입니다. [[a]]와 [[b]]는 두 변, [[c]]는 [[C]]의 맞은편에 있는 빗변, [[h]]는 꼭짓점 [[C]]에서 빗변에 내린 수직 높이, [[D]]는 높이가 빗변과 만나는 점, [[x]]와 [[y]]는 빗변의 두 조각, [[K]]는 넓이이며, 각 [[A]]와 혼동되지 않도록 어디에서나 이렇게 씁니다." },
          { "kind": "h3", "text": "직각삼각형이란?" },
          { "kind": "p", "text": "직각삼각형은 정확히 하나의 90도 각을 포함합니다. 두 변이 그 각에서 만나고, 빗변은 그 맞은편에 가장 긴 변으로 놓입니다. 나머지 두 각은 예각이며, 세 각의 합이 180도이므로 [[A+B+C=180^\\circ]]이고 [[C=90^\\circ]]이면 [[A+B=90^\\circ]]이 됩니다. 높이 방법은 여기에 의존합니다: 밑변은 가장 긴 변이고, 높이는 직각 모서리에서 내립니다." },
          { "kind": "h3", "text": "빗변이란?" },
          { "kind": "p", "text": "빗변은 직각의 맞은편에 있는 변으로, 계산기에서는 [[c]]로 표시됩니다. 어떤 방향으로 그려졌든 찾으려면, 직각을 나타내는 정사각형 표시와 닿지 않는 변을 찾으세요. 그 변이 빗변입니다. 두 변보다 길며 반드시 가로로 그려질 필요는 없습니다. 밑변은 선택된 기준 변일 뿐, 화면상의 방향이 아닙니다." },
          { "kind": "h3", "text": "기하학에서 높이란?" },
          { "kind": "p", "text": "높이는 한 꼭짓점에서 맞은편 변을 포함하는 직선에 그은 수직 선분입니다. 그 변과 90도 각을 이루어야 하며, 그래야 단순한 선이 아니라 높이가 됩니다. 높이가 반드시 삼각형의 원래 변 중 하나일 필요는 없으며, 어떤 선분이 높이가 되는지는 선택한 밑변에 따라 달라집니다." },
          { "kind": "h3", "text": "빗변에 대한 높이 이해하기" },
          { "kind": "p", "text": "삼각형 [[ABC]]에서 [[C]]는 직각 꼭짓점이고 [[AB]]는 빗변입니다. 높이 [[h]]는 [[C]]에서 [[AB]]에 수직으로 그은 선분 [[CD]]이며, 따라서 [[CD\\perp AB]], [[CD=h]], [[AB=c]]이고, [[D]]는 수선의 발로서 삼각형을 내부에 포함된 두 개의 작은 직각삼각형으로 나눕니다." },
          { "kind": "h3", "text": "높이가 빗변을 나누는 방식" },
          { "kind": "p", "text": "높이가 빗변을 [[AD=x]]와 [[DB=y]]로 나눈다고 하자. 그러면 [[[\\boxed{x+y=c}]]]. 각 작은 삼각형은 직각을 하나씩 포함하고 원래 삼각형과 예각 하나를 공유하므로, 세 삼각형은 모두 서로 닮음입니다. 두 작은 삼각형의 닮음에서 [[x/h=h/y]]를 얻고, 외항의 곱을 하면 [[[\\boxed{h^2=xy}]]]가 됩니다. 기하평균 관계입니다: 높이는 빗변 두 조각의 기하평균이며, 아래의 최대 높이 규칙의 출발점입니다." }
        ],
        "imgAlt": "꼭짓점 C에 직각이 있는 삼각형 ABC, 빗변 AB는 c, 높이 CD는 h, 조각 x와 y로 표시",
        "figcaption": "빗변에 대한 높이 CD를 가진 삼각형 ABC: AD = x, DB = y, x + y = c, h&sup2; = xy, 그리고 K = ch/2."
      },
      "sec-formula": {
        "h2": "넓이 공식이 빗변 곱하기 높이의 절반인 이유는?",
        "blocks": [
          { "kind": "p", "text": "모든 삼각형의 넓이는 하나의 규칙에서 출발합니다: [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. 대응하는 높이가 그 변에 수직이기만 하면 어떤 변도 밑변이 될 수 있습니다. 이 계산기는 빗변을 밑변으로 선택하므로 [[\\text{base}=c]]이고, 대응하는 수직 높이는 높이, 즉 [[\\text{height}=h]]입니다. 대입하면 [[K=\\frac12\\times c\\times h]]가 되며, 이는 [[[\\boxed{K=\\frac{ch}{2}}]]]입니다." },
          { "kind": "h3", "text": "빗변을 밑변으로 쓸 수 있는 이유는?" },
          { "kind": "p", "text": "빗변은 이 계산에서 선택된 밑변일 뿐입니다. 높이는 맞은편 꼭짓점, 즉 직각 꼭짓점 [[C]]에서 재야 하며 빗변에 수직이어야 합니다. 다른 변을 각자의 대응 높이와 함께 밑변으로 선택해도 넓이는 같습니다. 밑변은 변이 맡는 역할이지 영구적인 이름이 아닙니다." },
          { "kind": "h3", "text": "공식을 2로 나누는 이유는?" },
          { "kind": "p", "text": "삼각형은 같은 밑변과 같은 수직 높이로 만든 평행사변형의 정확히 절반을 채웁니다. 밑변 10, 높이 4.8이면 평행사변형의 넓이는 [[10\\times4.8=48]]이고, 그 안의 삼각형은 절반을 차지하므로 [[K=48/2=24]]입니다. 나누기 2를 빼먹으면 다른 질문에 답하는 셈입니다: 삼각형이 아니라 평행사변형의 넓이입니다." },
          { "kind": "h3", "text": "이 공식은 직각삼각형에만 적용되나요?" },
          { "kind": "p", "text": "[[K=ch/2]]는 일반적인 삼각형 넓이 공식으로, [[c]]가 선택된 밑변이고 [[h]]가 그에 수직인 높이이기만 하면 어떤 삼각형에도 성립합니다. 이 페이지가 직각삼각형에 특화된 이유는 읽는 방식에 있습니다: [[c]]는 빗변이고, [[h]]는 직각 꼭짓점에서 내린 높이며, 높이는 [[h\\leq c/2]]라는 추가 제한을 따릅니다. 일반 삼각형에는 의미가 없는 제한입니다." },
          { "kind": "h3", "text": "두 변이 모두 필요하지 않은 이유" },
          { "kind": "p", "text": "넓이에는 한 변과 그에 대응하는 수직 높이만 필요하며 그 이상은 필요 없습니다. [[c]]와 [[h]]를 이미 알고 있으면 두 변은 넓이를 바꾸는 정보를 더하지 않습니다. 두 변 공식 [[K=ab/2]]는 같은 양을 구하는 다른 입력 경로로, 측정된 데이터가 두 수직 변일 때 쓸 만합니다. 가진 것이 두 변이라면 <a href=\"/right-triangle-area-from-legs-calculator/\">직각삼각형 두 변 넓이 계산기</a>에 바로 입력하세요." }
        ],
        "imgAlt": "빗변과 높이를 이용한 넓이 K = ch/2와 두 변을 이용한 넓이 K = ab/2의 비교",
        "figcaption": "같은 넓이에 이르는 두 경로: 높이와 함께한 빗변, 그리고 두 변. 둘 다 둘러싸인 영역과 같으므로 ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "빗변과 높이가 두 변과 맺는 관계",
        "blocks": [
          { "kind": "p", "text": "같은 삼각형을 설명하는 유효한 넓이 공식이 두 개 있습니다: [[K=ab/2]]와 [[K=ch/2]]. 같은 넓이를 계산하므로 [[\\frac{ab}{2}=\\frac{ch}{2}]]입니다. 양변에 2를 곱하면 [[ab=ch]]가 됩니다. 높이에 대해 정리하면 [[[\\boxed{h=\\frac{ab}{c}}]]]입니다. 빗변에 대한 높이는 두 변의 곱을 빗변으로 나눈 값이며, 이것이 두 넓이 공식이 일관된 삼각형에서 절대 어긋날 수 없는 이유입니다." },
          { "kind": "h3", "text": "이 관계가 유용한 이유" },
          { "kind": "p", "text": "같은 기하학을 설명하는 세 가지 방식을 연결합니다. 변과 빗변이 높이를 결정하므로, 변으로 측정한 삼각형은 이미 높이를 포함하고 있습니다. 높이와 빗변은 넓이를 결정하므로, 넓이는 두 변을 먼저 복원할 필요가 없습니다. 두 공식으로 넓이를 각각 계산해 비교하는 것은 가장 강력한 검증 중 하나입니다. 한 경로의 실수가 다른 경로에서 그대로 재현되는 경우는 드물기 때문입니다." },
          { "kind": "h3", "text": "피타고라스 정리와 공식 연결하기" },
          { "kind": "p", "text": "피타고라스 정리 [[a^2+b^2=c^2]]는 변과 빗변 사이의 연결을 검증합니다. 3-4-5 삼각형을 보세요: [[3^2+4^2=5^2]], [[9+16=25]]. 높이는 [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]입니다. 빗변과 높이로 구한 넓이는 [[K=\\frac{5\\times2.4}{2}=6]]이고, 두 변으로 구한 넓이는 [[K=\\frac{3\\times4}{2}=6]]입니다. 두 공식은 같은 둘러싸인 영역을 재며, [[h=ab/c]]는 그것을 보장하는 연결 고리입니다." },
          { "kind": "h3", "text": "높이가 만드는 두 닮은 삼각형" },
          { "kind": "p", "text": "높이는 원래 삼각형을 두 개의 작은 직각삼각형으로 나누며, 각각은 원래 삼각형과 예각을 공유합니다. 두 개의 공유된 각 덕분에 세 삼각형은 모두 닮음이 되고, 대응변은 비례를 유지합니다. 높이를 빗변 조각들과 대응시키면 [[x/h=h/y]]가 되며, 외항의 곱을 하면 [[h^2=xy]]가 됩니다. 기하평균 관계는 닮음을 식으로 쓴 것입니다." }
        ]
      },
      "sec-max": {
        "h2": "높이가 빗변의 절반보다 길어질 수 없는 이유는?",
        "blocks": [
          { "kind": "p", "text": "모든 유효한 직각삼각형은 [[[\\boxed{h\\leq\\frac{c}{2}}]]]를 따릅니다. 이는 기하학적 사실이며, 증명할 가치가 있습니다." },
          { "kind": "h3", "text": "빗변의 두 조각 이해하기" },
          { "kind": "p", "text": "[[x+y=c]]와 [[h^2=xy]]를 떠올리세요. 곱 [[xy]]는 두 조각이 같을 때 가장 커지며, 이는 산술-기하평균 부등식의 결과입니다: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. [[x+y=c]]이므로 우변은 [[c^2/4]]가 되고, 따라서 [[h^2\\leq\\frac{c^2}{4}]]이며, 양의 길이에 대해 [[h\\leq c/2]]입니다. 쉽게 말하면, 고르지 않은 분할은 곱과 높이를 줄이고, 가장 높은 높이는 가장 고른 분할에서 나옵니다." },
          { "kind": "h3", "text": "최대 높이에서는 어떤 일이?" },
          { "kind": "p", "text": "최댓값은 [[x=y=c/2]]일 때 나타나며, 이때 [[h=c/2]]입니다. 이는 이등변 직각삼각형을 만듭니다: 두 변이 같고, 예각은 [[45^\\circ]]와 [[45^\\circ]]입니다. 이때 높이는 빗변에 대한 중선 역할도 하며, 유효한 삼각형이지 퇴화된 도형이 아닙니다." },
          { "kind": "h3", "text": "최대 높이 예제" },
          { "kind": "p", "text": "[[c=10]]이 주어지면 최대 높이는 [[h_{\\max}=10/2=5]]입니다. 최대 넓이는 [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]입니다. 빗변이 10인 직각삼각형은 높이가 5를 넘을 수 없으므로, 넓이가 25제곱단위를 넘는 경우도 없습니다." },
          { "kind": "h3", "text": "높이가 c/2보다 크면 어떤 일이?" },
          { "kind": "p", "text": "[[c=10]]이고 [[h=5.5]]이면 유효한 최대 높이는 5이므로, 이 측정값들은 직각삼각형을 설명할 수 없습니다. 공식은 여전히 [[K=\\frac{10\\times5.5}{2}=27.5]]을 내놓지만, 그 숫자는 해당 측정값의 유효한 직각삼각형을 나타내지 않습니다. 넓이가 아니라 측정값이 잘못되었다는 신호로 받아들이세요. 이 가이드는 계산기가 그런 입력을 자동으로 거부하는지에 대해 주장하지 않습니다." },
          { "kind": "h3", "text": "높이가 훨씬 작으면 어떤 일이?" },
          { "kind": "p", "text": "빗변에 비해 높이가 작으면 한 변이 다른 변보다 훨씬 긴 좁고 기다란 직각삼각형을 설명합니다. 빗변이 고정된 상태에서 높이가 감소하면 넓이도 감소합니다. [[K=ch/2]]가 [[h]]에 직접 비례하기 때문입니다. 양의 하한은 없습니다: 높이는 0에 가까워질 수 있고, 삼각형은 퇴화된 직선 쪽으로 납작해집니다." }
        ],
        "imgAlt": "이등변 직각삼각형에서의 최대 높이 c/2, 유효한 더 작은 높이, 그리고 유효하지 않은 경우",
        "figcaption": "왼쪽: c/2에서의 최대 높이가 가장 큰 넓이를 줍니다. 가운데: 더 작은 유효한 높이. 오른쪽: c/2를 넘는 높이는 직각삼각형에 속할 수 없습니다."
      },
      "sec-howto": {
        "h2": "빗변과 높이로 구하는 직각삼각형 넓이 계산기 사용법",
        "blocks": [
          { "kind": "p", "text": "이 계산기는 정확히 두 개의 입력이 필요합니다. 아래 안내서는 화면상의 순서대로, 측정된 삼각형에서 검증된 결과까지 따라갑니다." }
        ],
        "steps": [
          "<strong>빗변을 측정하거나 확인합니다.</strong> 90도 각의 맞은편에 있는 가장 긴 변입니다.",
          "<strong>빗변에 그은 수직 높이를 확인합니다.</strong> 직각 꼭짓점에서 시작해 빗변과 90도로 만납니다.",
          "<strong>높이가 수직인지 확인합니다.</strong> 비스듬한 변을 따라 잰 선분은 공식이 요구하는 높이가 아닙니다.",
          "<strong>빗변 [[c]]를 입력합니다.</strong>",
          "<strong>높이 [[h]]를 입력합니다.</strong>",
          "<strong>호환되는 길이 단위를 선택합니다.</strong> 두 측정값은 같은 단위를 사용해야 합니다.",
          "<strong>두 측정값이 모두 양수인지 확인합니다.</strong> 0이나 음의 길이는 어떤 삼각형도 설명하지 않습니다.",
          "<strong>[[h\\leq c/2]]인지 확인합니다.</strong> [[c=10]]인 경우, 5를 넘는 높이는 그 빗변의 직각삼각형에 속할 수 없습니다.",
          "<strong>넓이 계산을 클릭합니다.</strong>",
          "<strong>결과를 검토합니다.</strong> 넓이는 입력과 같은 제곱 단위로 표시됩니다.",
          "<strong>제곱 단위를 확인합니다.</strong> 미터는 제곱미터를, 센티미터는 제곱센티미터를 줍니다.",
          "<strong>풀이 과정을 검토합니다.</strong> 대입과 계산 과정을 보여줍니다.",
          "<strong>새 삼각형을 입력하기 전에 초기화를 사용합니다.</strong> 두 칸을 모두 지워 다음 계산을 깨끗이 시작합니다."
        ],
        "closingParagraphs": [
          "이 계산기는 두 변이나 각을 묻지 않습니다. 한 변과 그에 대응하는 수직 높이만으로 넓이가 완전히 결정됩니다."
        ]
      },
      "sec-examples": {
        "h2": "빗변과 높이를 이용한 직각삼각형 넓이의 단계별 예제",
        "blocks": [
          { "kind": "p", "text": "네 개의 풀이 예제가 익숙한 것부터 차근차근 방법을 쌓아 올립니다. 각 예제는 [[K=ch/2]]를 적용하며 모든 대입 과정을 보여주고, 높이가 직각삼각형의 한계를 지키는지도 확인합니다." },
          { "kind": "h3", "text": "예제 1: 기존 계산기의 예제 사용하기" },
          { "kind": "p", "text": "[[c=10]], [[h=4.8]]이 주어졌습니다. 1단계: 공식을 씁니다, [[K=ch/2]]. 2단계: 대입합니다, [[K=\\frac{10\\times4.8}{2}]]. 3단계: 곱합니다, [[K=\\frac{48}{2}]]. 최종 답: [[[\\boxed{K=24\\text{ square units}}]]]. 높이가 유효한 이유는 [[4.8<5]]로, 빗변의 절반인 최댓값보다 작기 때문입니다." },
          { "kind": "h3", "text": "예제 2: 3-4-5 삼각형" },
          { "kind": "p", "text": "[[a=3]], [[b=4]], [[c=5]]가 주어졌습니다. 먼저 높이를 구합니다: [[h=ab/c]]이므로 [[h=\\frac{3\\times4}{5}=2.4]]. 그런 다음 [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. 두 변으로 검증합니다: [[K=\\frac{3\\times4}{2}=6]]. 두 경로가 일치하며, 반드시 그래야 합니다." },
          { "kind": "h3", "text": "예제 3: 이등변 직각삼각형" },
          { "kind": "p", "text": "[[c=10]], [[h=5]]가 주어졌습니다. 그러면 [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. 높이가 빗변의 절반과 같으므로 두 변이 같고 각 예각은 [[45^\\circ]]입니다. 빗변이 10인 직각삼각형이 가질 수 있는 최대 넓이입니다." },
          { "kind": "h3", "text": "예제 4: 더 작은 삼각형 높이" },
          { "kind": "p", "text": "[[c=13]], [[h=5]]가 주어졌습니다. 그러면 [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. 높이가 한계를 만족하는 이유는 [[5\\leq6.5]]이기 때문입니다. 빗변의 절반은 6.5이고, 5는 그보다 충분히 작습니다." }
        ]
      },
      "sec-applications": {
        "h2": "빗변과 높이로 구하는 직각삼각형 넓이의 실생활 활용",
        "blocks": [
          { "kind": "p", "text": "열두 개의 실제 상황 예제가 다양한 규모와 단위에서 공식을 보여줍니다. 각 예제는 장면 속 삼각형을 명명하고, 두 측정값을 주고, 단계별로 대입하며, 그 뒤의 가정을 밝힙니다. 모든 예제는 직각삼각형 패널, 측면, 단면, 또는 단순화된 모형입니다. 공식은 모형화된 삼각형에 적용되며, 이름이 같은 모든 곡선이나 불규칙한 물체에 적용되는 것은 아닙니다." },
          { "kind": "h3", "text": "예제 1: 삼각형 유리창" },
          { "kind": "p", "text": "직각삼각형 유리 패널의 빗변이 [[2.5\\text{ m}]]이고 수직 높이가 [[1.2\\text{ m}]]입니다. [[K=ch/2]]를 사용하면 [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. 이는 틀을 제외한 평평한 유리 면적으로, 곧은 모서리와 진정한 직각을 가정합니다." },
          { "kind": "h3", "text": "예제 2: 경사로 측면 패널" },
          { "kind": "p", "text": "경사로의 직각삼각형 측면 패널의 빗변이 [[4\\text{ m}]]이고 수직 높이가 [[1.5\\text{ m}]]입니다. 그러면 [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. 결과는 보행 표면이 아니라 삼각형 측면 윤곽을 설명합니다." },
          { "kind": "h3", "text": "예제 3: 삼각형 돛 단면" },
          { "kind": "p", "text": "직각삼각형 돛 단면의 빗변이 [[13\\text{ ft}]]이고 높이가 [[5\\text{ ft}]]입니다. 그러면 [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. 이는 솔기나 곡률을 제외한 평평한 천 면적입니다. 실제 돛은 부풀어 오르므로 돛을 평평하게 모형화한 것입니다." },
          { "kind": "h3", "text": "예제 4: 삼각형 토지 구획 측량" },
          { "kind": "p", "text": "단순화된 직각삼각형 토지의 빗변이 [[50\\text{ m}]]이고 높이가 [[12\\text{ m}]]입니다. 그러면 [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. 경계를 평평한 지면 위의 직선으로 취급하는 단순화된 모형 하의 면적 추정치입니다." },
          { "kind": "h3", "text": "예제 5: 강철 거싯 플레이트" },
          { "kind": "p", "text": "직각삼각형 강철 지지판의 빗변이 [[3.4\\text{ m}]]이고 높이가 [[1.6\\text{ m}]]입니다. 그러면 [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. 이는 평평한 판 면적일 뿐이며, 하중 지지 능력은 별개의 문제입니다." },
          { "kind": "h3", "text": "예제 6: 계단 측면 윤곽" },
          { "kind": "p", "text": "단순화된 직각삼각형 계단 측면 윤곽의 빗변이 [[5\\text{ m}]]이고 높이가 [[2\\text{ m}]]입니다. 그러면 [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. 이는 개별 디딤판과 챌판의 합이 아니라 삼각형 측면 윤곽을 설명합니다." },
          { "kind": "h3", "text": "예제 7: 삼각형 도로 표지판" },
          { "kind": "p", "text": "직각삼각형 표지판 패널의 빗변이 [[1.8\\text{ m}]]이고 높이가 [[0.8\\text{ m}]]입니다. 그러면 [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 장착 부품을 제외한 0.72제곱미터의 표지판 면 재료입니다." },
          { "kind": "h3", "text": "예제 8: 태양광 지지 패널" },
          { "kind": "p", "text": "직각삼각형 장착 지지 패널의 빗변이 [[3\\text{ m}]]이고 높이가 [[1.2\\text{ m}]]입니다. 그러면 [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. 패널 면적일 뿐이며, 장착 브래킷이므로 생산 전력과는 무관합니다." },
          { "kind": "h3", "text": "예제 9: 합판 절단 틀" },
          { "kind": "p", "text": "직각삼각형 합판 틀의 빗변이 [[2.5\\text{ m}]]이고 높이가 [[1\\text{ m}]]입니다. 그러면 [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. 사용 가능한 삼각형 조각이며, 절단 손실은 별도의 여유를 두어야 합니다." },
          { "kind": "h3", "text": "예제 10: 삼각형 천 현수막" },
          { "kind": "p", "text": "직각삼각형 현수막의 빗변이 [[6\\text{ ft}]]이고 높이가 [[2.4\\text{ ft}]]입니다. 그러면 [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7.2제곱피트의 평평한 재료이며, 밑단 여유는 제작자가 더합니다." },
          { "kind": "h3", "text": "예제 11: 대형 삼각형 측량 토지" },
          { "kind": "p", "text": "직각삼각형 토지 구획의 빗변이 [[80\\text{ m}]]이고 높이가 [[30\\text{ m}]]입니다. 그러면 [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. 토지가 평평한 지면 위에서 진정으로 직각삼각형일 때만 유효합니다." },
          { "kind": "h3", "text": "예제 12: 삼각형 캐노피 지지 패널" },
          { "kind": "p", "text": "직각삼각형 캐노피 지지 패널의 빗변이 [[8\\text{ m}]]이고 높이가 [[3.6\\text{ m}]]입니다. 그러면 [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. 평평한 삼각형 면적이며, 풍하중과 고정 장치는 별개의 문제입니다." },
          { "kind": "h3", "text": "실용 예제 비교" }
        ],
        "table": {
          "headers": ["활용", "빗변 c", "높이 h", "넓이", "단위"],
          "rows": [
            ["유리창", "2.5", "1.2", "1.5", "m²"],
            ["경사로 측면 패널", "4", "1.5", "3", "m²"],
            ["돛 단면", "13", "5", "32.5", "ft²"],
            ["토지 구획", "50", "12", "300", "m²"],
            ["거싯 플레이트", "3.4", "1.6", "2.72", "m²"],
            ["계단 윤곽", "5", "2", "5", "m²"],
            ["도로 표지판", "1.8", "0.8", "0.72", "m²"],
            ["태양광 지지 패널", "3", "1.2", "1.8", "m²"],
            ["합판 틀", "2.5", "1", "1.25", "m²"],
            ["천 현수막", "6", "2.4", "7.2", "ft²"],
            ["대형 측량 토지", "80", "30", "1,200", "m²"],
            ["캐노피 지지 패널", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "K = ch/2의 네 가지 활용: 유리창, 경사로 패널, 돛, 측량된 토지 구획",
        "figcaption": "네 장면에 걸친 같은 공식: 유리창, 경사로 측면 패널, 돛, 그리고 측량된 토지 구획."
      },
      "sec-geomean": {
        "h2": "높이의 제곱이 빗변 두 조각의 곱과 같은 이유는?",
        "blocks": [
          { "kind": "p", "text": "높이는 빗변과 [[D]]에서 만나 빗변을 [[AD=x]]와 [[DB=y]]로 나눕니다. 관계는 [[[\\boxed{h^2=xy}]]]입니다. 여기서 [[x]]는 첫 번째 조각, [[y]]는 두 번째 조각, [[h]]는 수직 높이입니다. 외우기보다 어디서 오는지 보는 것이 좋습니다." },
          { "kind": "h3", "text": "이 관계는 어떻게 성립하나요?" },
          { "kind": "p", "text": "높이는 두 개의 작은 직각삼각형을 만들며, 각각은 원래 삼각형과 닮음이므로 서로에게도 닮음입니다. 한 삼각형의 짧은 변을 다른 삼각형의 긴 변에 대응시키면 [[\\frac{x}{h}=\\frac{h}{y}]]가 되며, 외항의 곱을 하면 [[h^2=xy]]가 됩니다. 제곱근을 취하면 [[h=\\sqrt{xy}]]입니다. 높이는 빗변 두 조각의 기하평균, 즉 제곱이 그 곱과 같은 수입니다." },
          { "kind": "h3", "text": "수치 예제" },
          { "kind": "p", "text": "[[x=4]], [[y=9]]가 주어지면 [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]입니다. 전체 빗변은 [[c=4+9=13]]이고, 넓이는 [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]입니다. 빗변의 두 조각을 알면 변 측정 없이 높이가 따라옵니다." },
          { "kind": "h3", "text": "이 관계가 유용한 때는?" },
          { "kind": "p", "text": "높이는 빠졌지만 조각이 주어진 기하 문제, 닮음 문제, 높이 측정에 독립적인 검증이 필요할 때마다 등장합니다. 높이 한계도 설명합니다: 곱 [[xy]]는 고정된 빗변에 의해 상한이 정해지므로 높이도 상한이 정해집니다. 계산기는 [[x]]와 [[y]]를 입력으로 요구하지 않습니다. 이 정리는 배경 지식이지 계산기 입력 칸이 아닙니다." }
        ]
      },
      "sec-legs": {
        "h2": "빗변과 높이를 알 때 두 변을 복원하는 법",
        "blocks": [
          { "kind": "p", "text": "넓이에는 [[c]]와 [[h]]만으로 충분하지만, 이 두 측정값에는 두 변의 길이를 결정할 정보도 들어 있습니다. 단, 두 변의 위치를 맞바꾼 경우는 구분되지 않습니다. [[a^2+b^2=c^2]]와 [[ab=ch]]에서 출발합니다. [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]]이므로 대입하면 [[(a^2-b^2)^2=c^4-4c^2h^2]]가 되고, 따라서 [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]입니다. 두 부호는 두 변의 배정에 대응합니다: 두 변을 맞바꿔도 삼각형이나 넓이는 변하지 않습니다." },
          { "kind": "p", "text": "수치 예제: [[c=10]], [[h=4.8]]이 주어지면 [[ab=ch=48]], [[a^2+b^2=100]]입니다. 두 변은 [[a=6]], [[b=8]]입니다. 검증: [[6^2+8^2=10^2]], [[36+64=100]]. 넓이는 양쪽으로 확인됩니다: [[K=\\frac{6\\times8}{2}=24]]와 [[K=\\frac{10\\times4.8}{2}=24]]. 이는 추가적인 수학적 통찰이지 기존 계산기의 추가 기능이 아니며, 계산기의 목적인 빗변과 높이로부터의 넓이에서 주의를 흩트려서는 안 됩니다." }
        ]
      },
      "sec-valid": {
        "h2": "빗변과 높이 측정값이 유효한지 확인하는 법",
        "blocks": [
          { "kind": "p", "text": "퇴화되지 않은 직각삼각형이 되려면 입력이 세 조건 [[c>0]], [[h>0]], [[h\\leq c/2]]를 만족해야 합니다. 처음 두 개는 0과 음의 길이를 배제하고, 세 번째는 앞에서 유도한 높이 한계입니다. 세 가지가 모두 한꺼번에 성립해야 합니다." },
          { "kind": "h3", "text": "유효한 입력 예제" },
          { "kind": "p", "text": "[[c=12]], [[h=5]]가 주어지면 최대 높이는 [[h_{\\max}=6]]입니다. [[5<6]]이므로 측정값은 유효하며, [[K=\\frac{12\\times5}{2}=30]]입니다." },
          { "kind": "h3", "text": "유효하지 않은 입력 예제" },
          { "kind": "p", "text": "[[c=12]], [[h=7]]이 주어지면 최대 높이는 [[h_{\\max}=6]]입니다. [[7>6]]이므로 이 측정값들은 직각삼각형을 설명할 수 없습니다: 빗변이 12로 고정된 상태에서 조각 [[x]]와 [[y]]를 어떻게 나누어도 [[\\sqrt{xy}]]가 7에 이를 수 없습니다." },
          { "kind": "h3", "text": "경계 경우" },
          { "kind": "p", "text": "[[c=12]], [[h=6]]이 주어지면 높이가 가능한 최댓값과 같습니다. 두 변이 같은 이등변 직각삼각형으로, 정확히 경계에 앉아 있습니다. 한계는 등호를 포함합니다: [[h\\leq c/2]]는 같음을 허용합니다." },
          { "kind": "h3", "text": "0이나 음수 값은 어떻게 되나요?" },
          { "kind": "p", "text": "빗변은 양수여야 하고, 퇴화되지 않은 삼각형의 높이도 양수여야 합니다. 높이가 0이면 넓이가 0이 되고 도형은 퇴화합니다. 삼각형이 아니라 직선이며, 음의 길이는 기하학적 의미가 없습니다. 이 가이드는 계산기가 모든 검증을 자동으로 수행한다고 주장하지 않습니다." }
        ]
      },
      "sec-units": {
        "h2": "빗변과 높이 계산에서의 넓이 단위 이해하기",
        "blocks": [
          { "kind": "p", "text": "넓이는 2차원이므로 단위는 길이 단위의 제곱입니다. 기호로는 [[\\text{m}\\times\\text{m}=\\text{m}^2]]입니다. 단위 선택기는 결과가 올바르게 표시되도록 존재합니다." },
          { "kind": "h3", "text": "단위가 일치해야 하는 이유" },
          { "kind": "p", "text": "빗변과 높이는 공식을 적용하기 전에 같은 단위로 표현되어야 합니다. 빗변이 200cm이고 높이가 1m이면, 먼저 200cm와 100cm로 통일합니다. 그러면 [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]]이며, 이는 [[K=1\\text{ m}^2]]와 같습니다. 서로 다른 단위의 측정값을 곱하면 깔끔한 단위가 없는 숫자가 나오므로, 먼저 통일하고 계산은 그 다음입니다." },
          { "kind": "h3", "text": "반올림이 중요한 이유" },
          { "kind": "p", "text": "측정값의 반올림은 최종 넓이를 약간 바꿉니다. 높이가 그대로 곱해지기 때문입니다. 중간 단계에서는 완전한 정밀도를 유지하고 최종 답에서만 반올림하세요. 높이를 일찍 반올림하면 오차가 누적됩니다." },
          { "kind": "h3", "text": "정확한 값과 측정된 값" },
          { "kind": "p", "text": "빗변이 10인 이등변 직각삼각형의 높이 5처럼 정확한 측정값은 줄자나 기기 판독값과 다르게 행동합니다. 기기의 불확실성은 넓이에 스며드므로, 마지막 자릿수는 입력만큼만 믿을 수 있습니다." }
        ]
      },
      "sec-mistakes": {
        "h2": "빗변과 높이로 직각삼각형 넓이를 구할 때의 흔한 실수",
        "blocks": [
          { "kind": "p", "text": "대부분의 틀린 답은 나쁜 계산이 아니라 잘못 붙인 입력 이름에서 옵니다. 아래 열다섯 가지 실수가 거의 모든 경우를 다룹니다." },
          { "kind": "h3", "text": "1. 빗변을 수직 변과 혼동하기" },
          { "kind": "p", "text": "변을 빗변으로 입력하면 밑변이 줄어듭니다. 해결: 직각 표시와 닿지 않는 변을 고르세요." },
          { "kind": "h3", "text": "비스듬한 변을 따라 높이 재기" },
          { "kind": "p", "text": "변을 따라 뻗은 선분은 높이가 아닙니다. 해결: 직각 꼭짓점에서 출발해 빗변을 90도로 만나야 합니다." },
          { "kind": "h3", "text": "빗변에 수직이 아닌 거리 사용하기" },
          { "kind": "p", "text": "꼭짓점에서 빗변까지의 수직이 아닌 거리는 진짜 높이보다 길어 넓이를 부풀립니다. 해결: 먼저 수직인지 확인하세요." },
          { "kind": "h3", "text": "잘못된 꼭짓점에서의 높이 사용하기" },
          { "kind": "p", "text": "빗변과 짝을 이루는 높이는 직각 꼭짓점에서의 높이뿐입니다." },
          { "kind": "h3", "text": "2로 나누기 잊기" },
          { "kind": "p", "text": "[[c\\times h]]는 삼각형이 아니라 평행사변형의 넓이입니다. 해결: 밑변-높이 곱은 항상 절반으로 나누세요." },
          { "kind": "h3", "text": "c로 잘못된 측정값 입력하기" },
          { "kind": "p", "text": "더 짧은 변을 빗변으로 입력하면 밑변이 줄어듭니다. 해결: 빗변은 항상 가장 긴 변입니다." },
          { "kind": "h3", "text": "h로 잘못된 측정값 입력하기" },
          { "kind": "p", "text": "변을 높이로 입력하면 수직 짝이 깨집니다. 해결: 높이는 빗변을 직각으로 만나야 합니다." },
          { "kind": "h3", "text": "서로 다른 길이 단위 섞기" },
          { "kind": "p", "text": "2m 빗변과 150cm 높이는 의미 있는 숫자를 주지 않습니다. 해결: 먼저 하나의 단위로 통일하세요." },
          { "kind": "h3", "text": "넓이를 길이 단위로 보고하기" },
          { "kind": "p", "text": "24m²의 넓이는 24m가 아닙니다. 해결: 숫자 옆에 제곱 단위를 쓰세요." },
          { "kind": "h3", "text": "음의 높이 입력하기" },
          { "kind": "p", "text": "길이는 음수가 될 수 없습니다. 음의 높이는 입력 오류의 신호입니다. 해결: 측정한 양의 거리를 다시 입력하세요." },
          { "kind": "h3", "text": "빗변을 0으로 입력하기" },
          { "kind": "p", "text": "빗변이 0이면 삼각형이 존재하지 않습니다. 해결: 모든 길이가 양수인지 확인하세요." },
          { "kind": "h3", "text": "빗변의 절반을 넘는 높이 사용하기" },
          { "kind": "p", "text": "[[c=10]]인데 높이가 6이면 한계를 어깁니다. 해결: 측정한 선분을 다시 확인하세요." },
          { "kind": "h3", "text": "밑변과 높이가 같은 삼각형은 모두 직각이라고 가정하기" },
          { "kind": "p", "text": "[[K=ch/2]]는 대응하는 밑변과 높이가 있기만 하면 어떤 삼각형에도 성립합니다. 해결: 높이 한계는 직각삼각형에만 적용하세요." },
          { "kind": "h3", "text": "높이 h를 변 a나 b와 혼동하기" },
          { "kind": "p", "text": "6-8-10 삼각형에서 높이는 4.8로, 어느 변과도 같지 않습니다. 해결: [[a]], [[b]], [[h]]를 분리해서 다루세요." },
          { "kind": "h3", "text": "공식이 삼각형의 기하학을 자동으로 검증한다고 가정하기" },
          { "kind": "p", "text": "계산은 어떤 입력도 거부하지 않습니다. 해결: 유효성 검사는 직접 하세요." },
          { "kind": "h3", "text": "틀린 경우와 맞는 경우: 구체적인 예제" },
          { "kind": "p", "text": "[[c=10]], [[h=4]]가 주어지면 올바른 계산은 [[K=\\frac{10\\times4}{2}=20]]입니다. 나누기 2를 빼먹으면 [[K=10\\times4=40]]이 되어 삼각형 넓이의 두 배가 됩니다. 마찬가지로 [[c=10]]인데 [[h=6]]이면 계산은 숫자를 내놓지만 높이 한계를 통과하지 못합니다." }
        ]
      },
      "sec-verify": {
        "h2": "직각삼각형 넓이가 맞는지 확인하는 법",
        "blocks": [
          { "kind": "p", "text": "여러 검증이 흔한 오류를 잡아냅니다. 6-8-10 삼각형이 대부분을 보여줍니다." },
          { "kind": "h3", "text": "방법 1: 넓이 공식 확인하기" },
          { "kind": "p", "text": "입력한 값으로 [[K=ch/2]]를 다시 계산합니다. [[c=10]], [[h=4.8]]이면 [[K=(10\\times4.8)/2=24]]. 두 번째 계산이 오타를 잡아냅니다." },
          { "kind": "h3", "text": "방법 2: 두 변으로 검증하기" },
          { "kind": "p", "text": "두 변을 알거나 복원했다면 [[K=ab/2]]가 일치해야 합니다. 여기서는 [[(6\\times8)/2=24]]가 [[(10\\times4.8)/2=24]]와 일치합니다. 두 방법, 하나의 삼각형, 하나의 답입니다." },
          { "kind": "h3", "text": "방법 3: 피타고라스 정리 확인하기" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]]를 확인합니다: [[36+64=100]]. 변들이 이를 만족하지 않으면 삼각형 식별이 잘못된 것입니다." },
          { "kind": "h3", "text": "방법 4: 높이 관계 확인하기" },
          { "kind": "p", "text": "[[h=ab/c]]를 확인합니다: [[(6\\times8)/10=4.8]]. 맞지 않으면 입력한 높이가 이 삼각형의 것이 아닙니다." },
          { "kind": "h3", "text": "방법 5: 빗변의 두 조각 확인하기" },
          { "kind": "p", "text": "[[x+y=c]]와 [[h^2=xy]]를 확인합니다. 조각이 6.4와 3.6이면 [[6.4+3.6=10]]이고 [[4.8^2=6.4\\times3.6]]입니다. [[23.04=23.04]]이기 때문입니다." },
          { "kind": "h3", "text": "방법 6: 최대 높이 확인하기" },
          { "kind": "p", "text": "[[h\\leq c/2]]를 확인합니다. 여기서는 [[4.8\\leq5]]입니다. 주어진 빗변에 대해 [[c^2/4]]를 넘는 직각삼각형 넓이 주장은 불가능합니다." },
          { "kind": "h3", "text": "방법 7: 단위 확인하기" },
          { "kind": "p", "text": "결과가 제곱 단위인지 확인합니다: 미터는 제곱미터를, 센티미터는 제곱센티미터를 줍니다. 숫자가 맞아도 길이 단위로 보고된 넓이는 불완전합니다." }
        ]
      },
      "sec-altitude-table": {
        "h2": "높이는 직각삼각형의 넓이에 어떤 영향을 주나요?",
        "blocks": [
          { "kind": "p", "text": "[[K=ch/2]]에서 빗변이 고정되면 넓이는 높이와 직접 비례해 변합니다. 높이를 두 배로 하면 넓이도 두 배가 되고, 높이를 키우면 넓이도 같은 비율로 커집니다. 아래 표는 [[c=10]]으로 고정하고 높이를 최댓값 5까지 바꿉니다." }
        ],
        "table": {
          "headers": ["높이 h", "넓이 K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "다섯 행 모두 유효한 직각삼각형을 설명합니다. 모든 높이가 최댓값 5 이하이기 때문입니다. 높이는 [[c/2]]를 넘을 수 없으며, 두 변이 같을 때 최대 넓이가 나타납니다. 높이가 변하는 동안 두 변이 고정되어 있지 않다는 점에 유의하세요. 각 행은 하나의 빗변을 공유하는 서로 다른 삼각형입니다."
        ]
      },
      "sec-conclusion": {
        "h2": "빗변과 그 높이, 그것으로 충분합니다",
        "blocks": [
          { "kind": "p", "text": "빗변-높이 방법은 가장 긴 변을 향한 평범한 밑변-높이 규칙입니다. 빗변을 확인하고 수직 높이를 손에 넣으면, 넓이는 한 번의 곱셈과 한 번의 나누기 2 거리이며, 두 변을 먼저 복원할 필요가 없습니다." },
          { "kind": "p", "text": "진짜 가치는 엄격함에 있습니다: 수직성, 높이 한계, 기하평균 관계가 거친 스케치를 검증 가능한 숫자로 바꿉니다. 높이를 검증하면 답은 신뢰를 얻습니다." }
        ]
      }
    },
    "faqs": [
      { "question": "빗변과 높이로 직각삼각형의 넓이를 어떻게 구하나요?", "answer": "빗변 c에 수직 높이 h를 곱하고 2로 나눕니다: K = ch/2. 예를 들어 c = 10, h = 4.8이면 K = 24 제곱단위입니다. 높이가 빗변을 직각으로 만나는지, h가 c의 절반 이하인지 확인하세요." },
      { "question": "빗변과 높이를 이용한 넓이 공식은 무엇인가요?", "answer": "공식은 K = ch/2이며, K는 넓이, c는 밑변으로서의 빗변, h는 그 밑변에 대한 수직 높이입니다. 가장 긴 변을 밑변으로 한 표준 삼각형 넓이 규칙이며, 결과는 대응하는 제곱 단위를 사용합니다." },
      { "question": "빗변에 대한 높이(고도)란 무엇인가요?", "answer": "직각 꼭짓점 C에서 빗변 AB에 내린 수직 선분으로, 점 D에서 만납니다. 그 꼭짓점에서 빗변까지의 최단 거리이며, 빗변과 짝을 이루는 유일한 높이입니다. 변이 아닙니다." },
      { "question": "높이는 빗변과 같은 것인가요?", "answer": "아닙니다. 빗변 c는 직각의 맞은편에 있는 가장 긴 변이고, 높이 h는 직각 꼭짓점에서 그 변에 내린 수직 거리입니다. c가 밑변, h가 높이입니다. 6-8-10 삼각형에서는 c = 10, h = 4.8입니다." },
      { "question": "높이가 빗변의 절반보다 길 수 있나요?", "answer": "없습니다. 유효한 직각삼각형에서는 0 < h <= c/2입니다. 높이는 빗변을 두 개의 같은 조각으로 나눌 때 가장 높으며, 정확히 c/2에 이릅니다. c = 10인데 h = 6 같은 더 큰 값은 그런 삼각형에 속할 수 없습니다." },
      { "question": "최대 높이가 빗변의 절반인 이유는?", "answer": "x + y = c인 h² = xy에서, 곱 xy는 x = y = c/2일 때 가장 큽니다. 그러면 h² <= c²/4이므로 h <= c/2입니다. 가장 고른 분할이 가장 높은 높이를 줍니다." },
      { "question": "높이가 빗변의 절반과 같으면 어떤 일이 일어나나요?", "answer": "삼각형은 이등변 직각삼각형이 됩니다: 두 변이 같고, 예각은 45도이며, 높이는 빗변에 대한 중선 역할도 합니다. 이 유효한 경계 경우는 가능한 가장 큰 넓이 K = c²/4를 줍니다." },
      { "question": "두 변을 모르고도 넓이를 구할 수 있나요?", "answer": "있습니다. 밑변과 그에 대응하는 수직 높이로 충분하며, 두 변은 넓이에 대해 더하는 정보가 없습니다. 빗변 c와 높이 h를 입력하면 K = ch/2가 넓이를 바로 줍니다." },
      { "question": "빗변 기반 공식은 두 변 공식과 어떤 관계인가요?", "answer": "둘 다 같은 넓이를 계산합니다. ab/2를 ch/2와 같게 두고 2를 곱하면 ab = ch가 되므로 h = ab/c입니다. 이것이 두 경로를 모두 계산하는 것이 그토록 강력한 검증인 이유입니다." },
      { "question": "높이와 빗변의 두 조각 사이에는 어떤 관계가 있나요?", "answer": "높이는 h² = xy를 만족하며, x와 y는 높이가 빗변에서 자른 조각이므로 그 기하평균입니다. 두 작은 삼각형의 닮음에서 x/h = h/y를 거쳐 나옵니다." },
      { "question": "빗변과 높이로 두 변을 결정할 수 있나요?", "answer": "있습니다. 두 변의 위치를 맞바꾼 경우까지만 구분되지 않습니다. a² + b² = c²와 ab = ch로부터, 두 변은 (c² ± c√(c² - 4h²))/2를 따릅니다. c = 10, h = 4.8이면 두 변은 6과 8이 됩니다." },
      { "question": "이 계산기는 센티미터, 미터, 피트와 함께 작동하나요?", "answer": "작동합니다. 두 입력이 같은 단위를 사용하기만 하면 됩니다: 미터는 제곱미터를, 센티미터는 제곱센티미터를, 피트는 제곱피트를 줍니다. 섞인 단위는 먼저 통일하세요." }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 살펴보기",
    "relatedItems": [
      "직각삼각형 넓이 계산기",
      "각도로 구하는 직각삼각형 넓이 계산기",
      "높이로 구하는 직각삼각형 넓이 계산기",
      "두 변으로 구하는 직각삼각형 넓이 계산기",
      "직각삼각형 높이 계산기",
      "내접원 반지름과 반둘레로 구하는 직각삼각형 넓이 계산기"
    ]
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "sec-intro": "Cara Mengira Luas Segi Tiga Bersudut Tepat dari Hipotenus dan Altitud",
      "sec-understand": "Memahami Hipotenus, Kaki, dan Altitud",
      "sec-formula": "Mengapa Formula Luas Ialah Separuh Hipotenus Darab Altitud",
      "sec-relationship": "Bagaimana Hipotenus dan Altitud Berkait dengan Dua Kaki",
      "sec-max": "Mengapa Altitud Tidak Boleh Melebihi Separuh Hipotenus",
      "sec-howto": "Cara Menggunakan Kalkulator Luas Hipotenus dan Altitud",
      "sec-examples": "Contoh Kerja Langkah Demi Langkah",
      "sec-applications": "Aplikasi Kehidupan Sebenar",
      "sec-geomean": "Hubungan Min Geometri",
      "sec-legs": "Mendapatkan Semula Dua Kaki dari Hipotenus dan Altitud",
      "sec-valid": "Memeriksa Sama Ada Ukuran Anda Sah",
      "sec-units": "Unit Ukuran dan Pembundaran",
      "sec-mistakes": "Kesilapan Lazim",
      "sec-verify": "Cara Mengesahkan Luas Anda",
      "sec-altitude-table": "Bagaimana Altitud Mempengaruhi Luas",
      "sec-faq": "Soalan Lazim",
      "sec-related": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
      "sec-conclusion": "Kesimpulan"
    },
    "sections": {
      "sec-intro": {
        "h2": "Cara Mengira Luas Segi Tiga Bersudut Tepat Menggunakan Hipotenus dan Altitudnya",
        "blocks": [
          { "kind": "p", "text": "Sebuah segi tiga bersudut tepat mempunyai hipotenus [[10\\text{ m}]] dan altitud yang dilukis ke hipotenus itu berukuran [[4.8\\text{ m}]]. Terapkan [[K=ch/2]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Segi tiga itu menempati 24 meter persegi permukaan rata. Inilah kaedah lengkap yang diautomasikan oleh kalkulator: satu sisi, tinggi berserenjangnya, satu pendaraban, satu pembahagian dua." },
          { "kind": "p", "text": "Hipotenus berfungsi sebagai tapak kerana mana-mana sisi segi tiga boleh menjadi tapak apabila tinggi berserenjang yang sepadan diketahui. Altitud ialah segmen berserenjang dari bucu sudut tepat ke hipotenus, dan ia mesti bertemu hipotenus pada sudut tepat; segmen condong bukanlah tinggi yang diperlukan oleh formula ini. Memandangkan luas hanya bergantung pada tapak dan tingginya, dua kaki tidak diperlukan sebagai input, dan hasilnya sentiasa dinyatakan dalam unit persegi bagi unit panjang yang digunakan." }
        ]
      },
      "sec-understand": {
        "h2": "Memahami Hipotenus, Kaki, dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Tatatanda yang digunakan ialah: [[A]], [[B]], dan [[C]] ialah bucu dan sudut dengan [[C=90^\\circ]]; [[a]] dan [[b]] ialah dua kaki; [[c]] ialah hipotenus yang bertentangan dengan [[C]]; [[h]] ialah altitud berserenjang dari bucu [[C]] ke hipotenus; [[D]] ialah tempat altitud bertemu hipotenus; [[x]] dan [[y]] ialah dua segmen hipotenus; dan [[K]] ialah luas, digunakan di mana-mana supaya tidak dikelirukan dengan sudut [[A]]." },
          { "kind": "h3", "text": "Apakah Segi Tiga Bersudut Tepat?" },
          { "kind": "p", "text": "Segi tiga bersudut tepat mengandungi tepat satu sudut 90 darjah. Dua kakinya bertemu pada sudut itu, dan hipotenus terletak bertentangannya sebagai sisi terpanjang. Dua sudut lagi adalah tirus, dan kerana jumlah tiga sudut ialah 180 darjah, [[A+B+C=180^\\circ]] dengan [[C=90^\\circ]] memberikan [[A+B=90^\\circ]]. Kaedah altitud bergantung pada ini: tapak ialah sisi terpanjang, tinggi diturunkan dari penjuru sudut tepat." },
          { "kind": "h3", "text": "Apakah Hipotenus?" },
          { "kind": "p", "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tepat, dilabelkan [[c]] dalam kalkulator. Untuk mencarinya dalam sebarang putaran, carilah sisi yang tidak menyentuh penanda sudut tepat yang berbentuk segi empat; sisi itulah hipotenus. Ia lebih panjang daripada mana-mana kaki dan tidak semestinya dilukis secara mendatar: tapak ialah sisi rujukan yang dipilih, bukan arah skrin." },
          { "kind": "h3", "text": "Apakah Altitud dalam Geometri?" },
          { "kind": "p", "text": "Altitud ialah segmen garis berserenjang yang dilukis dari bucu ke garis yang mengandungi sisi bertentangan. Ia mesti membentuk sudut 90 darjah dengan sisi itu, dan itulah yang menjadikannya tinggi dan bukan sekadar garis. Altitud tidak semestinya salah satu sisi asal segi tiga, dan segmen mana yang dikira sebagai altitud berubah mengikut tapak yang dipilih." },
          { "kind": "h3", "text": "Memahami Altitud ke Hipotenus" },
          { "kind": "p", "text": "Dalam segi tiga [[ABC]], [[C]] ialah bucu sudut tepat dan [[AB]] ialah hipotenus. Altitud [[h]] ialah segmen [[CD]] yang dilukis dari [[C]] berserenjang dengan [[AB]], jadi [[CD\\perp AB]], [[CD=h]], dan [[AB=c]], dengan [[D]] sebagai kaki altitud, membahagikan segi tiga kepada dua segi tiga bersudut tepat yang lebih kecil yang tersarang di dalamnya." },
          { "kind": "h3", "text": "Bagaimana Altitud Membahagikan Hipotenus" },
          { "kind": "p", "text": "Katakan altitud memotong hipotenus kepada [[AD=x]] dan [[DB=y]]. Maka [[[\\boxed{x+y=c}]]]. Setiap segi tiga yang lebih kecil mengandungi sudut tepat dan berkongsi satu sudut tirus dengan segi tiga asal, jadi ketiga-tiga segi tiga adalah serupa. Keserupaan dua segi tiga yang lebih kecil memberikan [[x/h=h/y]], dan pendaraban silang menghasilkan [[[\\boxed{h^2=xy}]]], hubungan min geometri: altitud ialah min geometri bagi dua segmen hipotenus, dan titik permulaan bagi peraturan altitud maksimum di bawah." }
        ],
        "imgAlt": "Segi tiga ABC dengan sudut tepat di C, hipotenus AB dilabel c, altitud CD dilabel h, segmen x dan y",
        "figcaption": "Segi tiga ABC dengan altitud CD ke hipotenus: AD = x, DB = y, x + y = c, h&sup2; = xy, dan K = ch/2."
      },
      "sec-formula": {
        "h2": "Mengapakah Formula Luas Ialah Separuh Hipotenus Darab Altitud?",
        "blocks": [
          { "kind": "p", "text": "Luas setiap segi tiga bermula dari satu peraturan [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Mana-mana sisi boleh menjadi tapak jika tinggi yang digunakan berserenjang dengannya. Kalkulator ini memilih hipotenus sebagai tapak, jadi [[\\text{base}=c]] dan tinggi berserenjang yang sepadan ialah altitud, [[\\text{height}=h]]. Penggantian memberikan [[K=\\frac12\\times c\\times h]], iaitu [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Mengapa Hipotenus Boleh Digunakan sebagai Tapak?" },
          { "kind": "p", "text": "Hipotenus hanyalah tapak yang dipilih untuk pengiraan ini. Altitud mesti diukur dari bucu bertentangan, bucu sudut tepat [[C]], dan ia mesti berserenjang dengan hipotenus. Memilih sisi lain sebagai tapak dengan altitud sepadannya sendiri memberikan luas yang sama. Tapak ialah peranan yang dimainkan oleh sisi, bukan label kekal." },
          { "kind": "h3", "text": "Mengapa Formula Dibahagi dengan Dua?" },
          { "kind": "p", "text": "Segi tiga mengisi tepat separuh daripada segi empat selari yang dibina di atas tapak yang sama dengan tinggi berserenjang yang sama. Dengan tapak 10 dan tinggi 4.8, luas segi empat selari ialah [[10\\times4.8=48]]; segi tiga di dalamnya menempati separuh, jadi [[K=48/2=24]]. Melangkau pembahagian dua menjawab soalan yang berbeza: luas segi empat selari, bukan luas segi tiga." },
          { "kind": "h3", "text": "Adakah Formula Ini Hanya untuk Segi Tiga Bersudut Tepat?" },
          { "kind": "p", "text": "Persamaan [[K=ch/2]] ialah formula luas segi tiga umum, sah untuk mana-mana segi tiga apabila [[c]] ialah tapak yang dipilih dan [[h]] ialah altitud berserenjangnya. Yang menjadikan halaman ini khusus untuk segi tiga bersudut tepat ialah cara membacanya: [[c]] ialah hipotenus, [[h]] diturunkan dari bucu sudut tepat, dan altitud mematuhi sekatan tambahan [[h\\leq c/2]], yang tidak bermakna untuk segi tiga umum." },
          { "kind": "h3", "text": "Mengapa Anda Tidak Memerlukan Kedua-dua Kaki" },
          { "kind": "p", "text": "Luas memerlukan satu sisi dan tinggi berserenjang yang sepadan, tidak lebih. Apabila [[c]] dan [[h]] sudah diketahui, kaki tidak menambah maklumat yang mengubah luas. Formula kaki [[K=ab/2]] ialah laluan input yang berbeza kepada kuantiti yang sama, berbaloi digunakan apabila data yang diukur ialah dua sisi berserenjang. Jika kaki ialah apa yang anda ada, <a href=\"/right-triangle-area-from-legs-calculator/\">Kalkulator Luas Segi Tiga Bersudut Tepat dari Kaki</a> menerimanya secara langsung." }
        ],
        "imgAlt": "Perbandingan luas K = ch/2 menggunakan hipotenus dan altitud berbanding K = ab/2 menggunakan dua kaki",
        "figcaption": "Dua laluan ke luas yang sama: hipotenus dengan altitudnya, dan dua kaki. Kedua-duanya sama dengan kawasan yang dikelilingi, jadi ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Bagaimana Hipotenus dan Altitud Berkait dengan Dua Kaki",
        "blocks": [
          { "kind": "p", "text": "Dua formula luas yang sah menerangkan segi tiga yang sama: [[K=ab/2]] dan [[K=ch/2]]. Memandangkan kedua-duanya mengira luas yang sama, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Darabkan kedua-dua sisi dengan dua: [[ab=ch]]. Menyusun semula untuk altitud memberikan [[[\\boxed{h=\\frac{ab}{c}}]]]. Altitud ke hipotenus ialah hasil darab dua kaki dibahagi dengan hipotenus, yang menjelaskan mengapa dua formula luas tidak sekali-kali boleh berselisih pada segi tiga yang konsisten." },
          { "kind": "h3", "text": "Mengapa Hubungan Ini Berguna" },
          { "kind": "p", "text": "Ia menghubungkan tiga cara untuk menerangkan geometri yang sama. Kaki dan hipotenus menentukan altitud, jadi segi tiga yang diukur dengan sisinya sudah mengandungi altitud. Altitud dan hipotenus menentukan luas, jadi luas tidak perlu kaki dipulihkan dahulu. Mengira luas melalui mana-mana formula dan membandingkannya ialah salah satu semakan terkuat, kerana kesilapan dalam satu laluan jarang berulang dalam laluan yang lain." },
          { "kind": "h3", "text": "Menghubungkan Formula dengan Teorem Pythagoras" },
          { "kind": "p", "text": "Teorem Pythagoras [[a^2+b^2=c^2]] mengesahkan kaitan antara kaki dan hipotenus. Ambil segi tiga 3-4-5: [[3^2+4^2=5^2]], [[9+16=25]]. Altitudnya ialah [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. Luas dari hipotenus dan altitud ialah [[K=\\frac{5\\times2.4}{2}=6]], dan dari kaki ialah [[K=\\frac{3\\times4}{2}=6]]. Kedua-dua formula mengukur kawasan tertutup yang sama, dan [[h=ab/c]] ialah pautan yang menjaminnya." },
          { "kind": "h3", "text": "Bagaimana Altitud Mewujudkan Dua Segi Tiga Serupa" },
          { "kind": "p", "text": "Altitud membahagikan segi tiga asal kepada dua segi tiga bersudut tepat yang lebih kecil, setiap satunya berkongsi sudut tirusnya dengan segi tiga asal. Dua sudut yang dikongsi menjadikan ketiga-tiga segi tiga serupa, jadi sisi yang sepadan kekal berkadaran. Memadankan altitud dengan segmen hipotenus memberikan [[x/h=h/y]], yang didarab silang menjadi [[h^2=xy]]: hubungan min geometri ialah keserupaan yang ditulis sebagai persamaan." }
        ]
      },
      "sec-max": {
        "h2": "Mengapakah Altitud Tidak Sekali-kali Boleh Lebih Panjang daripada Separuh Hipotenus?",
        "blocks": [
          { "kind": "p", "text": "Setiap segi tiga bersudut tepat yang sah mematuhi [[[\\boxed{h\\leq\\frac{c}{2}}]]]. Ini ialah fakta geometri, dan ia layak mendapat terbitan." },
          { "kind": "h3", "text": "Memahami Dua Segmen Hipotenus" },
          { "kind": "p", "text": "Ingat [[x+y=c]] dan [[h^2=xy]]. Hasil darab [[xy]] adalah terbesar apabila dua segmen sama, akibat ketaksamaan min aritmetik-geometri: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Memandangkan [[x+y=c]], sisi kanan menjadi [[c^2/4]], jadi [[h^2\\leq\\frac{c^2}{4}]], dan untuk panjang positif [[h\\leq c/2]]. Dalam bahasa mudah: pembahagian yang tidak sama mengecilkan hasil darab dan altitud; altitud tertinggi datang dari pembahagian yang paling sama rata." },
          { "kind": "h3", "text": "Apa yang Berlaku pada Altitud Maksimum?" },
          { "kind": "p", "text": "Maksimum berlaku apabila [[x=y=c/2]], dan kemudian [[h=c/2]]. Ini menghasilkan segi tiga bersudut tepat sama kaki: dua kakinya sama, dan sudut tirusnya ialah [[45^\\circ]] dan [[45^\\circ]]. Altitud kemudiannya berganda sebagai median ke hipotenus, segi tiga yang sah, bukan yang merosot." },
          { "kind": "h3", "text": "Contoh Altitud Maksimum" },
          { "kind": "p", "text": "Diberi [[c=10]], altitud maksimum ialah [[h_{\\max}=10/2=5]]. Luas maksimum ialah [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Tiada segi tiga bersudut tepat dengan hipotenus 10 boleh mempunyai altitud melebihi 5, dan oleh itu tiada yang boleh mempunyai luas melebihi 25 unit persegi." },
          { "kind": "h3", "text": "Apa yang Berlaku Apabila Altitud Lebih Besar daripada c/2?" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=5.5]], altitud sah maksimum ialah 5, jadi ukuran ini tidak dapat menerangkan segi tiga bersudut tepat. Formula masih menghasilkan [[K=\\frac{10\\times5.5}{2}=27.5]], tetapi nombor itu tidak mewakili sebarang segi tiga bersudut tepat yang sah dengan ukuran tersebut. Anggaplah ia sebagai isyarat bahawa ukuran adalah salah, bukan sebagai luas. Panduan ini tidak membuat sebarang dakwaan tentang sama ada kalkulator menolak input sedemikian secara automatik." },
          { "kind": "h3", "text": "Apa yang Berlaku Apabila Altitud Jauh Lebih Kecil?" },
          { "kind": "p", "text": "Altitud yang kecil berbanding hipotenus menerangkan segi tiga bersudut tepat yang sempit dan memanjang dengan satu kaki jauh lebih panjang daripada yang lain. Dengan hipotenus yang tetap, luas berkurang apabila altitud berkurang, kerana [[K=ch/2]] berskala secara langsung dengan [[h]]. Tiada batas bawah positif: altitud boleh menghampiri sifar, dan segi tiga merata ke arah garis yang merosot." }
        ],
        "imgAlt": "Altitud maksimum c/2 dalam segi tiga bersudut tepat sama kaki, altitud sah yang lebih kecil, dan kes yang tidak sah",
        "figcaption": "Kiri: altitud maksimum pada c/2 memberikan luas terbesar. Tengah: altitud sah yang lebih kecil. Kanan: altitud melebihi c/2 tidak boleh dimiliki oleh segi tiga bersudut tepat."
      },
      "sec-howto": {
        "h2": "Cara Menggunakan Kalkulator Luas Segi Tiga Bersudut Tepat dari Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Kalkulator memerlukan tepat dua input. Panduan di bawah mengikut susunan pada skrin, dari segi tiga yang diukur kepada hasil yang disahkan." }
        ],
        "steps": [
          "<strong>Ukur atau kenal pasti hipotenus.</strong> Sisi terpanjang, bertentangan dengan sudut 90 darjah.",
          "<strong>Kenal pasti altitud berserenjang yang dilukis ke hipotenus.</strong> Ia bermula di bucu sudut tepat dan bertemu hipotenus pada 90 darjah.",
          "<strong>Sahkan bahawa altitud berserenjang.</strong> Segmen yang diukur di sepanjang sisi yang condong bukanlah altitud yang diperlukan oleh formula.",
          "<strong>Masukkan hipotenus [[c]].</strong>",
          "<strong>Masukkan altitud [[h]].</strong>",
          "<strong>Pilih unit panjang yang serasi.</strong> Kedua-dua ukuran mesti menggunakan unit yang sama.",
          "<strong>Periksa bahawa kedua-dua ukuran adalah positif.</strong> Panjang sifar atau negatif tidak menerangkan sebarang segi tiga.",
          "<strong>Sahkan bahawa [[h\\leq c/2]].</strong> Untuk [[c=10]], sebarang altitud melebihi 5 tidak boleh dimiliki oleh segi tiga bersudut tepat dengan hipotenus itu.",
          "<strong>Klik Kira Luas.</strong>",
          "<strong>Semak hasilnya.</strong> Luas muncul dalam unit persegi yang sepadan dengan input.",
          "<strong>Periksa unit persegi.</strong> Meter memberikan meter persegi; sentimeter memberikan sentimeter persegi.",
          "<strong>Semak langkah penyelesaian.</strong> Ia menunjukkan penggantian dan aritmetik.",
          "<strong>Gunakan Tetapkan Semula sebelum memasukkan segi tiga baharu.</strong> Ia mengosongkan kedua-dua medan supaya pengiraan seterusnya bermula dengan bersih."
        ],
        "closingParagraphs": [
          "Kalkulator tidak meminta dua kaki atau sudut: satu sisi dan tinggi berserenjang yang sepadan menentukan luas sepenuhnya."
        ]
      },
      "sec-examples": {
        "h2": "Contoh Langkah Demi Langkah Luas Segi Tiga Bersudut Tepat Menggunakan Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Empat contoh kerja membina kaedah dari yang biasa ke atas. Setiap satunya menggunakan [[K=ch/2]] dengan setiap penggantian ditunjukkan, dan setiap satunya memeriksa bahawa altitud mematuhi had segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Contoh 1: Menggunakan Contoh Kalkulator Sedia Ada" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=4.8]]. Langkah 1: tulis formula, [[K=ch/2]]. Langkah 2: gantikan, [[K=\\frac{10\\times4.8}{2}]]. Langkah 3: darabkan, [[K=\\frac{48}{2}]]. Jawapan akhir: [[[\\boxed{K=24\\text{ square units}}]]]. Altitud adalah sah kerana [[4.8<5]], di bawah maksimum separuh hipotenus." },
          { "kind": "h3", "text": "Contoh 2: Segi Tiga 3-4-5" },
          { "kind": "p", "text": "Diberi [[a=3]], [[b=4]], [[c=5]]. Cari altitud dahulu: [[h=ab/c]], jadi [[h=\\frac{3\\times4}{5}=2.4]]. Kemudian [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Sahkan dengan kaki: [[K=\\frac{3\\times4}{2}=6]]. Kedua-dua laluan bersetuju, seperti yang sepatutnya." },
          { "kind": "h3", "text": "Contoh 3: Segi Tiga Bersudut Tepat Sama Kaki" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=5]]. Maka [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. Altitud sama dengan separuh hipotenus, jadi kaki adalah sama dan setiap sudut tirus ialah [[45^\\circ]]. Ini ialah luas maksimum yang mungkin bagi mana-mana segi tiga bersudut tepat dengan hipotenus 10." },
          { "kind": "h3", "text": "Contoh 4: Altitud Segi Tiga yang Lebih Kecil" },
          { "kind": "p", "text": "Diberi [[c=13]] dan [[h=5]]. Maka [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. Altitud memenuhi had kerana [[5\\leq6.5]]: separuh hipotenus ialah 6.5, dan 5 berada di bawahnya dengan selesa." }
        ]
      },
      "sec-applications": {
        "h2": "Aplikasi Kehidupan Sebenar Luas Segi Tiga Bersudut Tepat dari Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Dua belas situasi kerja menunjukkan formula pada skala dan unit yang berbeza. Setiap satunya menamakan segi tiga dalam babak, memberikan dua ukuran, menggantikan langkah demi langkah, dan menyatakan andaian di sebaliknya. Setiap contoh ialah panel, profil, keratan, atau model ringkas berbentuk segi tiga bersudut tepat; formula terpakai pada segi tiga yang dimodelkan, bukan pada setiap objek melengkung atau tidak sekata dengan nama yang sama." },
          { "kind": "h3", "text": "Contoh 1: Tingkap Kaca Segi Tiga" },
          { "kind": "p", "text": "Panel kaca segi tiga bersudut tepat mempunyai hipotenus [[2.5\\text{ m}]] dan altitud berserenjang [[1.2\\text{ m}]]. Menggunakan [[K=ch/2]]: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. Ini ialah luas kaca rata sebelum bingkai, dengan andaian tepi lurus dan sudut tepat yang sebenar." },
          { "kind": "h3", "text": "Contoh 2: Panel Sisi Tanjakan Segi Tiga" },
          { "kind": "p", "text": "Panel sisi segi tiga bersudut tepat bagi tanjakan mempunyai hipotenus [[4\\text{ m}]] dan altitud berserenjang [[1.5\\text{ m}]]. Maka [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. Hasilnya menerangkan profil sisi segi tiga, bukan permukaan berjalan." },
          { "kind": "h3", "text": "Contoh 3: Keratan Layar Segi Tiga" },
          { "kind": "p", "text": "Keratan layar segi tiga bersudut tepat mempunyai hipotenus [[13\\text{ ft}]] dan altitud [[5\\text{ ft}]]. Maka [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. Ini ialah luas kain rata sebelum jahitan atau kelengkungan; layar sebenar menggelembung, jadi layar dimodelkan sebagai rata." },
          { "kind": "h3", "text": "Contoh 4: Mengukur Keratan Tanah Segi Tiga" },
          { "kind": "p", "text": "Plot segi tiga bersudut tepat yang dipermudahkan mempunyai hipotenus [[50\\text{ m}]] dan altitud [[12\\text{ m}]]. Maka [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Ini menganggarkan luas di bawah model ringkas yang menganggap sempadan sebagai garis lurus di atas tanah rata." },
          { "kind": "h3", "text": "Contoh 5: Plat Gusset Keluli" },
          { "kind": "p", "text": "Plat sokongan keluli segi tiga bersudut tepat mempunyai hipotenus [[3.4\\text{ m}]] dan altitud [[1.6\\text{ m}]]. Maka [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. Ini ialah luas plat rata sahaja; kapasiti menanggung beban ialah soalan yang berasingan." },
          { "kind": "h3", "text": "Contoh 6: Profil Sisi Tangga" },
          { "kind": "p", "text": "Profil sisi tangga segi tiga bersudut tepat yang dipermudahkan mempunyai hipotenus [[5\\text{ m}]] dan altitud [[2\\text{ m}]]. Maka [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Ini menerangkan profil sisi segi tiga, bukan jumlah anak tangga dan anak tangga tegak yang berasingan." },
          { "kind": "h3", "text": "Contoh 7: Papan Tanda Jalan Segi Tiga" },
          { "kind": "p", "text": "Panel papan tanda segi tiga bersudut tepat mempunyai hipotenus [[1.8\\text{ m}]] dan altitud [[0.8\\text{ m}]]. Maka [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0.72 meter persegi bahan muka papan tanda; perkakasan pemasangan dikecualikan." },
          { "kind": "h3", "text": "Contoh 8: Panel Sokongan Solar" },
          { "kind": "p", "text": "Panel sokongan pemasangan segi tiga bersudut tepat mempunyai hipotenus [[3\\text{ m}]] dan altitud [[1.2\\text{ m}]]. Maka [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Luas panel sahaja; tiada kaitan dengan elektrik yang dihasilkan, kerana ini ialah pendakap pemasangan." },
          { "kind": "h3", "text": "Contoh 9: Templat Potongan Papan Lapis" },
          { "kind": "p", "text": "Templat papan lapis segi tiga bersudut tepat mempunyai hipotenus [[2.5\\text{ m}]] dan altitud [[1\\text{ m}]]. Maka [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Kepingan segi tiga yang boleh digunakan; sisa potongan memerlukan margin yang berasingan." },
          { "kind": "h3", "text": "Contoh 10: Sepanduk Kain Segi Tiga" },
          { "kind": "p", "text": "Sepanduk segi tiga bersudut tepat mempunyai hipotenus [[6\\text{ ft}]] dan altitud [[2.4\\text{ ft}]]. Maka [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7.2 kaki persegi bahan rata; elaun keliman ditambah oleh pembuat kain." },
          { "kind": "h3", "text": "Contoh 11: Plot Ukur Segi Tiga yang Besar" },
          { "kind": "p", "text": "Keratan tanah segi tiga bersudut tepat mempunyai hipotenus [[80\\text{ m}]] dan altitud [[30\\text{ m}]]. Maka [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Sah hanya di mana plot benar-benar berbentuk segi tiga bersudut tepat di atas tanah rata." },
          { "kind": "h3", "text": "Contoh 12: Panel Sokongan Kanopi Segi Tiga" },
          { "kind": "p", "text": "Panel sokongan kanopi segi tiga bersudut tepat mempunyai hipotenus [[8\\text{ m}]] dan altitud [[3.6\\text{ m}]]. Maka [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Luas segi tiga rata; beban angin dan pengikat ialah soalan yang berasingan." },
          { "kind": "h3", "text": "Perbandingan Contoh Praktikal" }
        ],
        "table": {
          "headers": ["Aplikasi", "Hipotenus c", "Altitud h", "Luas", "Unit"],
          "rows": [
            ["Tingkap kaca", "2.5", "1.2", "1.5", "m²"],
            ["Panel sisi tanjakan", "4", "1.5", "3", "m²"],
            ["Keratan layar", "13", "5", "32.5", "ft²"],
            ["Keratan tanah", "50", "12", "300", "m²"],
            ["Plat gusset", "3.4", "1.6", "2.72", "m²"],
            ["Profil tangga", "5", "2", "5", "m²"],
            ["Papan tanda jalan", "1.8", "0.8", "0.72", "m²"],
            ["Panel sokongan solar", "3", "1.2", "1.8", "m²"],
            ["Templat papan lapis", "2.5", "1", "1.25", "m²"],
            ["Sepanduk kain", "6", "2.4", "7.2", "ft²"],
            ["Plot ukur besar", "80", "30", "1,200", "m²"],
            ["Panel sokongan kanopi", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Empat aplikasi K = ch/2: tingkap kaca, panel tanjakan, layar, dan keratan tanah yang diukur",
        "figcaption": "Formula yang sama merentasi empat babak: tingkap kaca, panel sisi tanjakan, layar, dan keratan tanah yang diukur."
      },
      "sec-geomean": {
        "h2": "Mengapakah Kuasa Dua Altitud Sama dengan Hasil Darab Dua Segmen Hipotenus?",
        "blocks": [
          { "kind": "p", "text": "Altitud bertemu hipotenus di [[D]], membahagikannya kepada [[AD=x]] dan [[DB=y]]. Hubungannya ialah [[[\\boxed{h^2=xy}]]]. Di sini [[x]] ialah segmen pertama, [[y]] ialah segmen kedua, dan [[h]] ialah altitud berserenjang. Ia berbaloi untuk melihat dari mana ia datang daripada menghafalnya." },
          { "kind": "h3", "text": "Bagaimana Hubungan Ini Berfungsi?" },
          { "kind": "p", "text": "Altitud mewujudkan dua segi tiga bersudut tepat yang lebih kecil, setiap satunya serupa dengan segi tiga asal dan oleh itu antara satu sama lain. Memadankan kaki pendek satu segi tiga dengan kaki panjang segi tiga yang lain memberikan [[\\frac{x}{h}=\\frac{h}{y}]], yang didarab silang menjadi [[h^2=xy]]. Mengambil punca kuasa dua, [[h=\\sqrt{xy}]]: altitud ialah min geometri bagi dua segmen hipotenus, nombor yang kuasa duanya sama dengan hasil darabnya." },
          { "kind": "h3", "text": "Contoh Berangka" },
          { "kind": "p", "text": "Diberi [[x=4]] dan [[y=9]], maka [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. Hipotenus lengkap ialah [[c=4+9=13]], dan luasnya ialah [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Apabila dua segmen hipotenus diketahui, altitud mengikut tanpa sebarang ukuran kaki." },
          { "kind": "h3", "text": "Bilakah Hubungan Ini Berguna?" },
          { "kind": "p", "text": "Ia muncul dalam latihan geometri di mana altitud tiada tetapi segmen diberikan, dalam masalah keserupaan, dan apabila ukuran altitud memerlukan semakan bebas. Ia juga menjelaskan had altitud: hasil darab [[xy]] dihadkan oleh hipotenus yang tetap, jadi altitud juga dihadkan. Kalkulator tidak memerlukan [[x]] dan [[y]] sebagai input; teorem ini ialah pengetahuan sokongan, bukan medan kalkulator." }
        ]
      },
      "sec-legs": {
        "h2": "Cara Mendapatkan Semula Dua Kaki Apabila Hipotenus dan Altitud Diketahui",
        "blocks": [
          { "kind": "p", "text": "Kalkulator hanya memerlukan [[c]] dan [[h]] untuk luas, tetapi dua ukuran itu juga mengandungi maklumat yang cukup untuk menentukan panjang dua kaki, sehingga kepada pertukaran kedudukannya. Mulakan dari [[a^2+b^2=c^2]] dan [[ab=ch]]. Memandangkan [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], penggantian memberikan [[(a^2-b^2)^2=c^4-4c^2h^2]], dan oleh itu [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. Dua tanda sepadan dengan dua penugasan kaki: menukar kaki tidak mengubah apa-apa tentang segi tiga atau luasnya." },
          { "kind": "p", "text": "Contoh berangka: diberi [[c=10]] dan [[h=4.8]], maka [[ab=ch=48]] dan [[a^2+b^2=100]]. Kakinya ialah [[a=6]] dan [[b=8]]. Sahkan: [[6^2+8^2=10^2]], [[36+64=100]]. Luas disemak kedua-dua cara: [[K=\\frac{6\\times8}{2}=24]] dan [[K=\\frac{10\\times4.8}{2}=24]]. Ini ialah wawasan matematik tambahan, bukan fungsi tambahan kalkulator sedia ada, dan ia tidak sepatutnya mengalihkan perhatian daripada tujuan kalkulator: luas dari hipotenus dan altitud." }
        ]
      },
      "sec-valid": {
        "h2": "Cara Memeriksa Sama Ada Ukuran Hipotenus dan Altitud Anda Sah",
        "blocks": [
          { "kind": "p", "text": "Untuk segi tiga bersudut tepat yang tidak merosot, input mesti memenuhi tiga syarat [[c>0]], [[h>0]], dan [[h\\leq c/2]]. Dua yang pertama menolak panjang sifar dan negatif; yang ketiga ialah had altitud yang diterbitkan sebelum ini. Ketiga-tiganya mesti dipenuhi serentak." },
          { "kind": "h3", "text": "Contoh Input Sah" },
          { "kind": "p", "text": "Diberi [[c=12]] dan [[h=5]], altitud maksimum ialah [[h_{\\max}=6]]. Memandangkan [[5<6]], ukuran adalah sah, dan [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Contoh Input Tidak Sah" },
          { "kind": "p", "text": "Diberi [[c=12]] dan [[h=7]], altitud maksimum ialah [[h_{\\max}=6]]. Memandangkan [[7>6]], ukuran tidak dapat menerangkan segi tiga bersudut tepat: dengan hipotenus yang tetap pada 12, tiada pembahagian kepada segmen [[x]] dan [[y]] dapat menjadikan [[\\sqrt{xy}]] mencapai 7." },
          { "kind": "h3", "text": "Kes Sempadan" },
          { "kind": "p", "text": "Diberi [[c=12]] dan [[h=6]], altitud sama dengan nilai maksimum yang mungkin. Ini ialah segi tiga bersudut tepat sama kaki dengan dua kaki yang sama, terletak tepat di sempadan. Had adalah inklusif: [[h\\leq c/2]] membenarkan kesamaan." },
          { "kind": "h3", "text": "Bagaimana dengan Nilai Sifar atau Negatif?" },
          { "kind": "p", "text": "Hipotenus mestilah positif, dan altitud mestilah positif untuk segi tiga yang tidak merosot. Altitud sifar menghasilkan luas sifar dan bentuk yang merosot, garis dan bukan segi tiga, manakala panjang negatif tidak mempunyai makna geometri. Panduan ini tidak mendakwa kalkulator melakukan setiap pengesahan secara automatik." }
        ]
      },
      "sec-units": {
        "h2": "Memahami Unit Luas dalam Pengiraan Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Luas adalah dua dimensi, jadi unitnya ialah kuasa dua unit panjang. Dalam simbol, [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Pemilih unit wujud supaya hasilnya dapat dilabelkan dengan betul." },
          { "kind": "h3", "text": "Mengapa Unit Mesti Sepadan" },
          { "kind": "p", "text": "Hipotenus dan altitud mesti dinyatakan dalam unit yang sama sebelum formula digunakan. Jika hipotenus ialah 200 cm dan altitud ialah 1 m, tukarkan dahulu kepada 200 cm dan 100 cm. Kemudian [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], atau setara dengannya [[K=1\\text{ m}^2]]. Mendarabkan ukuran dalam unit yang berbeza menghasilkan nombor tanpa unit yang kemas, jadi tukarkan dahulu dan kira kemudian." },
          { "kind": "h3", "text": "Mengapa Pembundaran Penting" },
          { "kind": "p", "text": "Pembundaran ukuran sedikit mengubah luas akhir, kerana altitud didarabkan secara langsung ke dalamnya. Kekalkan ketepatan penuh melalui langkah perantaraan dan bundarkan hanya jawapan akhir; membundarkan altitud awal menggandakan ralat." },
          { "kind": "h3", "text": "Nilai Tepat Berbanding Nilai Terukur" },
          { "kind": "p", "text": "Ukuran tepat, seperti altitud 5 bagi segi tiga bersudut tepat sama kaki dengan hipotenus 10, berkelakuan berbeza daripada bacaan pita atau instrumen. Ketidakpastian instrumen mengalir ke dalam luas, jadi anggap digit terakhir hanya seboleh dipercayai seperti input." }
        ]
      },
      "sec-mistakes": {
        "h2": "Kesilapan Lazim Apabila Mengira Luas Segi Tiga Bersudut Tepat dari Hipotenus dan Altitud",
        "blocks": [
          { "kind": "p", "text": "Kebanyakan jawapan yang salah datang dari input yang tersalah label dan bukan aritmetik yang buruk. Lima belas kesilapan di bawah merangkumi hampir setiap satunya." },
          { "kind": "h3", "text": "1. Mengelirukan Hipotenus dengan Kaki Berserenjang" },
          { "kind": "p", "text": "Memasukkan kaki sebagai hipotenus mengecilkan tapak. Penyelesaian: pilih sisi yang tidak menyentuh penanda sudut tepat." },
          { "kind": "h3", "text": "Mengukur Altitud di Sepanjang Sisi yang Condong" },
          { "kind": "p", "text": "Segmen yang berjalan di sepanjang sisi bukanlah altitud. Penyelesaian: ia mesti meninggalkan bucu sudut tepat dan memukul hipotenus pada 90 darjah." },
          { "kind": "h3", "text": "Menggunakan Jarak yang Tidak Berserenjang dengan Hipotenus" },
          { "kind": "p", "text": "Jarak tidak berserenjang dari bucu ke hipotenus lebih panjang daripada altitud sebenar, membesarkan luas. Penyelesaian: sahkan keserenjangan dahulu." },
          { "kind": "h3", "text": "Menggunakan Altitud dari Bucu yang Salah" },
          { "kind": "p", "text": "Hanya altitud dari bucu sudut tepat yang berpasangan dengan hipotenus." },
          { "kind": "h3", "text": "Lupa Membahagi dengan Dua" },
          { "kind": "p", "text": "[[c\\times h]] ialah luas segi empat selari, bukan luas segi tiga. Penyelesaian: bahagikan dua setiap hasil darab tapak-tinggi." },
          { "kind": "h3", "text": "Memasukkan Ukuran yang Salah sebagai c" },
          { "kind": "p", "text": "Sisi yang lebih pendek yang dimasukkan sebagai hipotenus mengecilkan tapak. Penyelesaian: hipotenus sentiasa sisi terpanjang." },
          { "kind": "h3", "text": "Memasukkan Ukuran yang Salah sebagai h" },
          { "kind": "p", "text": "Kaki yang dimasukkan sebagai altitud memecahkan pasangan berserenjang. Penyelesaian: altitud mesti bertemu hipotenus pada sudut tepat." },
          { "kind": "h3", "text": "Mencampurkan Unit Panjang yang Berbeza" },
          { "kind": "p", "text": "Hipotenus 2 m dengan altitud 150 cm tidak memberikan sebarang nombor yang bermakna. Penyelesaian: tukarkan kepada satu unit dahulu." },
          { "kind": "h3", "text": "Melaporkan Luas dalam Unit Linear" },
          { "kind": "p", "text": "Luas 24 m² bukanlah 24 m. Penyelesaian: tulis unit kuasa dua bersama nombor." },
          { "kind": "h3", "text": "Memasukkan Altitud Negatif" },
          { "kind": "p", "text": "Panjang tidak boleh negatif; altitud negatif menandakan ralat kemasukan data. Penyelesaian: masukkan semula jarak positif yang diukur." },
          { "kind": "h3", "text": "Memasukkan Hipotenus Sifar" },
          { "kind": "p", "text": "Hipotenus sifar bermakna tiada segi tiga wujud. Penyelesaian: periksa bahawa setiap panjang adalah positif." },
          { "kind": "h3", "text": "Menggunakan Altitud yang Lebih Besar daripada Separuh Hipotenus" },
          { "kind": "p", "text": "Altitud 6 dengan [[c=10]] melanggar had. Penyelesaian: semak semula segmen yang diukur." },
          { "kind": "h3", "text": "Menganggap Setiap Segi Tiga dengan Tapak dan Tinggi yang Sama Semestinya Bersudut Tepat" },
          { "kind": "p", "text": "[[K=ch/2]] berfungsi untuk mana-mana segi tiga dengan tapak dan tinggi yang sepadan. Penyelesaian: terapkan had altitud hanya pada segi tiga bersudut tepat." },
          { "kind": "h3", "text": "Mengelirukan Altitud h dengan Kaki a atau b" },
          { "kind": "p", "text": "Dalam segi tiga 6-8-10 altitud ialah 4.8, yang tidak sama dengan mana-mana kaki. Penyelesaian: kekalkan [[a]], [[b]], dan [[h]] berasingan." },
          { "kind": "h3", "text": "Menganggap Formula Secara Automatik Mengesahkan Geometri Segi Tiga" },
          { "kind": "p", "text": "Aritmetik tidak pernah menolak input. Penyelesaian: jalankan sendiri semakan kesahan." },
          { "kind": "h3", "text": "Salah Berbanding Betul: Contoh Konkrit" },
          { "kind": "p", "text": "Diberi [[c=10]] dan [[h=4]], pengiraan yang betul ialah [[K=\\frac{10\\times4}{2}=20]]. Melangkau pembahagian dua memberikan [[K=10\\times4=40]], dua kali luas segi tiga. Begitu juga, [[h=6]] dengan [[c=10]] gagal memenuhi had altitud walaupun aritmetik menghasilkan nombor." }
        ]
      },
      "sec-verify": {
        "h2": "Cara Memeriksa Sama Ada Luas Segi Tiga Bersudut Tepat Anda Betul",
        "blocks": [
          { "kind": "p", "text": "Beberapa semakan menangkap kesilapan lazim. Segi tiga 6-8-10 menunjukkan kebanyakannya." },
          { "kind": "h3", "text": "Kaedah 1: Semak Formula Luas" },
          { "kind": "p", "text": "Kira semula [[K=ch/2]] dengan nilai yang dimasukkan. Untuk [[c=10]] dan [[h=4.8]], [[K=(10\\times4.8)/2=24]]. Laluan kedua menangkap kesilapan menaip." },
          { "kind": "h3", "text": "Kaedah 2: Sahkan Menggunakan Dua Kaki" },
          { "kind": "p", "text": "Apabila kaki diketahui atau dipulihkan, [[K=ab/2]] mesti bersetuju. Di sini [[(6\\times8)/2=24]] sepadan dengan [[(10\\times4.8)/2=24]]: dua kaedah, satu segi tiga, satu jawapan." },
          { "kind": "h3", "text": "Kaedah 3: Semak Teorem Pythagoras" },
          { "kind": "p", "text": "Sahkan [[a^2+b^2=c^2]]: [[36+64=100]]. Jika sisi tidak memenuhinya, pengenalpastian segi tiga adalah salah." },
          { "kind": "h3", "text": "Kaedah 4: Semak Hubungan Altitud" },
          { "kind": "p", "text": "Sahkan [[h=ab/c]]: [[(6\\times8)/10=4.8]]. Ketidaksepadanan bermakna altitud yang dimasukkan bukan milik segi tiga ini." },
          { "kind": "h3", "text": "Kaedah 5: Semak Dua Segmen Hipotenus" },
          { "kind": "p", "text": "Sahkan [[x+y=c]] dan [[h^2=xy]]. Dengan segmen 6.4 dan 3.6: [[6.4+3.6=10]] dan [[4.8^2=6.4\\times3.6]], kerana [[23.04=23.04]]." },
          { "kind": "h3", "text": "Kaedah 6: Semak Altitud Maksimum" },
          { "kind": "p", "text": "Sahkan [[h\\leq c/2]]. Di sini [[4.8\\leq5]]. Sebarang dakwaan luas segi tiga bersudut tepat melebihi [[c^2/4]] bagi hipotenus yang diberikan adalah mustahil." },
          { "kind": "h3", "text": "Kaedah 7: Semak Unit" },
          { "kind": "p", "text": "Pastikan hasilnya dalam unit persegi: meter memberikan meter persegi, sentimeter memberikan sentimeter persegi. Luas yang dilaporkan dalam unit linear adalah tidak lengkap walaupun nombornya betul." }
        ]
      },
      "sec-altitude-table": {
        "h2": "Bagaimanakah Altitud Mempengaruhi Luas Segi Tiga Bersudut Tepat?",
        "blocks": [
          { "kind": "p", "text": "Dari [[K=ch/2]], apabila hipotenus tetap luas berubah secara langsung dengan altitud. Menggandakan altitud menggandakan luas; menambah altitud menambah luas dalam kadar yang sama. Jadual di bawah menetapkan [[c=10]] dan mengubah altitud sehingga maksimumnya 5." }
        ],
        "table": {
          "headers": ["Altitud h", "Luas K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "Kelima-lima baris menerangkan segi tiga bersudut tepat yang sah kerana setiap altitud berada pada atau di bawah maksimum 5. Altitud tidak boleh melebihi [[c/2]], dan luas maksimum berlaku apabila dua kaki sama. Perhatikan bahawa kaki tidak kekal tetap semasa altitud berubah; setiap baris ialah segi tiga berbeza yang berkongsi satu hipotenus."
        ]
      },
      "sec-conclusion": {
        "h2": "Hipotenus dan Altitudnya Ialah Semua yang Anda Perlukan",
        "blocks": [
          { "kind": "p", "text": "Kaedah hipotenus-altitud ialah peraturan tapak-tinggi biasa yang dihalakan ke sisi terpanjang. Setelah hipotenus dikenal pasti dan altitud berserenjang berada di tangan, luas hanyalah satu pendaraban dan satu pembahagian dua, tanpa perlu mendapatkan semula kaki terlebih dahulu." },
          { "kind": "p", "text": "Nilai sebenarnya ialah disiplin: keserenjangan, had altitud, dan hubungan min geometri menukarkan lakaran kasar kepada nombor yang boleh disemak. Sahkan altitud dan jawapan itu memperoleh kepercayaannya." }
        ]
      }
    },
    "faqs": [
      { "question": "Bagaimanakah anda mengira luas segi tiga bersudut tepat menggunakan hipotenus dan altitudnya?", "answer": "Darabkan hipotenus c dengan altitud berserenjang h dan bahagikan dengan dua: K = ch/2. Sebagai contoh, c = 10 dan h = 4.8 memberikan K = 24 unit persegi. Sahkan bahawa altitud bertemu hipotenus pada sudut tepat dan h adalah paling banyak separuh daripada c." },
      { "question": "Apakah formula untuk luas menggunakan hipotenus dan tinggi?", "answer": "Formulanya ialah K = ch/2, dengan K ialah luas, c ialah hipotenus sebagai tapak, dan h ialah tinggi berserenjang ke tapak itu. Ia ialah peraturan luas segi tiga piawai dengan sisi terpanjang sebagai tapak, dan hasilnya menggunakan unit persegi yang sepadan." },
      { "question": "Apakah altitud ke hipotenus?", "answer": "Ia ialah segmen berserenjang dari bucu sudut tepat C ke hipotenus AB, bertemu di titik D: jarak terpendek dari bucu itu ke hipotenus dan satu-satunya tinggi yang berpasangan dengannya. Ia bukan kaki." },
      { "question": "Adakah altitud sama dengan hipotenus?", "answer": "Tidak. Hipotenus c ialah sisi terpanjang, bertentangan dengan sudut tepat, manakala altitud h ialah jatuhan berserenjang dari bucu sudut tepat ke sisi itu: c ialah tapak, h ialah tinggi. Dalam segi tiga 6-8-10, c = 10 dan h = 4.8." },
      { "question": "Bolehkah altitud lebih panjang daripada separuh hipotenus?", "answer": "Tidak. Untuk segi tiga bersudut tepat yang sah, 0 < h <= c/2. Altitud adalah tertinggi apabila ia membahagikan hipotenus kepada dua bahagian yang sama, mencapai tepat c/2. Nilai yang lebih besar, seperti h = 6 dengan c = 10, tidak boleh dimiliki oleh segi tiga sedemikian." },
      { "question": "Mengapakah altitud maksimum ialah separuh hipotenus?", "answer": "Dari h kuasa dua = xy dengan x + y = c, hasil darab xy adalah terbesar apabila x = y = c/2. Maka h kuasa dua <= c kuasa dua / 4, jadi h <= c/2: pembahagian yang paling sama rata memberikan altitud tertinggi." },
      { "question": "Apa yang berlaku apabila altitud sama dengan separuh hipotenus?", "answer": "Segi tiga itu ialah segi tiga bersudut tepat sama kaki: kaki yang sama, sudut tirus 45 darjah, dan altitud berganda sebagai median ke hipotenus. Kes sempadan yang sah ini memberikan luas terbesar yang mungkin, K = c kuasa dua / 4." },
      { "question": "Bolehkah saya mengira luas tanpa mengetahui dua kaki?", "answer": "Ya. Tapak dan tinggi berserenjang yang sepadan sudah mencukupi; kaki tidak menambah apa-apa tentang luas. Masukkan hipotenus c dan altitud h, dan K = ch/2 memberikan luas secara langsung." },
      { "question": "Bagaimanakah formula berasaskan hipotenus berkaitan dengan formula kaki?", "answer": "Kedua-duanya mengira luas yang sama. Menyamakan ab/2 dengan ch/2 dan mendarabkan dengan dua memberikan ab = ch, jadi h = ab/c, itulah sebabnya mengira kedua-duanya ialah semakan yang begitu kuat." },
      { "question": "Apakah hubungan antara altitud dan dua segmen hipotenus?", "answer": "Altitud memenuhi h kuasa dua = xy, dengan x dan y ialah segmen yang dipotongnya dari hipotenus, jadi ia ialah min geometrinya. Ia datang dari keserupaan dua segi tiga yang lebih kecil, melalui x/h = h/y." },
      { "question": "Bolehkah hipotenus dan altitud menentukan dua kaki?", "answer": "Ya, sehingga kepada pertukaran kedudukannya. Dari a kuasa dua + b kuasa dua = c kuasa dua dan ab = ch, kaki mengikut dari (c kuasa dua +/- c darab punca kuasa dua(c kuasa dua - 4h kuasa dua)) / 2. Untuk c = 10 dan h = 4.8 ini memberikan kaki 6 dan 8." },
      { "question": "Adakah kalkulator berfungsi dengan sentimeter, meter, dan kaki?", "answer": "Ya, selagi kedua-dua input menggunakan unit yang sama: meter memberikan meter persegi, sentimeter memberikan sentimeter persegi, kaki memberikan kaki persegi. Tukarkan unit yang bercampur dahulu." }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tepat Berkaitan",
    "relatedItems": [
      "Kalkulator Luas Segi Tiga Bersudut Tepat",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Altitud",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Kaki",
      "Kalkulator Altitud Segi Tiga Bersudut Tepat",
      "Kalkulator Luas Segi Tiga Bersudut Tepat dari Injejari dan Semiperimeter"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć pole trójkąta prostokątnego z przeciwprostokątnej i wysokości",
      "sec-understand": "Przeciwprostokątna, przyprostokątne i wysokość",
      "sec-formula": "Dlaczego wzór na pole to połowa przeciwprostokątnej razy wysokość",
      "sec-relationship": "Jak przeciwprostokątna i wysokość wiążą się z przyprostokątnymi",
      "sec-max": "Dlaczego wysokość nie może przekraczać połowy przeciwprostokątnej",
      "sec-howto": "Jak korzystać z kalkulatora pola z przeciwprostokątnej i wysokości",
      "sec-examples": "Przykłady rozwiązane krok po kroku",
      "sec-applications": "Zastosowania w życiu codziennym",
      "sec-geomean": "Związek średniej geometrycznej",
      "sec-legs": "Odtwarzanie przyprostokątnych z przeciwprostokątnej i wysokości",
      "sec-valid": "Sprawdzanie poprawności pomiarów",
      "sec-units": "Jednostki miary i zaokrąglanie",
      "sec-mistakes": "Częste błędy",
      "sec-verify": "Jak zweryfikować pole",
      "sec-altitude-table": "Jak wysokość wpływa na pole",
      "sec-faq": "Częste pytania",
      "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć pole trójkąta prostokątnego z jego przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Trójkąt prostokątny ma przeciwprostokątną [[10\\text{ m}]], a wysokość poprowadzona do tej przeciwprostokątnej mierzy [[4.8\\text{ m}]]. Zastosuj [[K=ch/2]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Trójkąt zajmuje 24 metry kwadratowe płaskiej powierzchni. To cała metoda, którą automatyzuje kalkulator: jeden bok, jego prostopadła wysokość, jedno mnożenie, jedno dzielenie na pół." },
          { "kind": "p", "text": "Przeciwprostokątna działa jako podstawa, ponieważ każdy bok trójkąta może być podstawą, gdy znana jest odpowiadająca mu prostopadła wysokość. Wysokość to prostopadły odcinek od wierzchołka kąta prostego do przeciwprostokątnej i musi spotykać przeciwprostokątną pod kątem prostym; ukośny odcinek nie jest wysokością, której potrzebuje ten wzór. Ponieważ pole zależy tylko od podstawy i jej wysokości, przyprostokątne nie są wymagane jako dane wejściowe, a wynik jest zawsze wyrażony w jednostkach kwadratowych użytej jednostki długości." }
        ]
      },
      "sec-understand": {
        "h2": "Przeciwprostokątna, przyprostokątne i wysokość",
        "blocks": [
          { "kind": "p", "text": "Stosowane oznaczenia: [[A]], [[B]] i [[C]] to wierzchołki i kąty, przy czym [[C=90^\\circ]]; [[a]] i [[b]] to dwie przyprostokątne; [[c]] to przeciwprostokątna naprzeciw [[C]]; [[h]] to prostopadła wysokość z wierzchołka [[C]] na przeciwprostokątną; [[D]] to punkt, w którym wysokość spotyka przeciwprostokątną; [[x]] i [[y]] to dwa odcinki przeciwprostokątnej; a [[K]] to pole, używane wszędzie, aby nigdy nie pomylić go z kątem [[A]]." },
          { "kind": "h3", "text": "Czym jest trójkąt prostokątny?" },
          { "kind": "p", "text": "Trójkąt prostokątny zawiera dokładnie jeden kąt 90 stopni. Jego dwie przyprostokątne spotykają się w tym kącie, a przeciwprostokątna leży naprzeciw niego jako najdłuższy bok. Pozostałe dwa kąty są ostre, a ponieważ suma trzech kątów wynosi 180 stopni, [[A+B+C=180^\\circ]] przy [[C=90^\\circ]] daje [[A+B=90^\\circ]]. Metoda wysokości na tym polega: podstawą jest najdłuższy bok, wysokość opada z narożnika kąta prostego." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok naprzeciw kąta prostego, oznaczony w kalkulatorze jako [[c]]. Aby ją znaleźć w dowolnym obrocie, zlokalizuj bok, który nie dotyka kwadratowego znacznika kąta prostego; ten bok to przeciwprostokątna. Jest dłuższa od każdej przyprostokątnej i nie musi być narysowana poziomo: podstawa to wybrany bok odniesienia, a nie kierunek na ekranie." },
          { "kind": "h3", "text": "Czym jest wysokość w geometrii?" },
          { "kind": "p", "text": "Wysokość to prostopadły odcinek poprowadzony od wierzchołka do prostej zawierającej przeciwległy bok. Musi tworzyć z tym bokiem kąt 90 stopni, co czyni ją wysokością, a nie zwykłą linią. Wysokość nie musi być jednym z pierwotnych boków trójkąta, a to, który odcinek liczy się jako wysokość, zmienia się wraz z wybraną podstawą." },
          { "kind": "h3", "text": "Wysokość opuszczona na przeciwprostokątną" },
          { "kind": "p", "text": "W trójkącie [[ABC]] [[C]] jest wierzchołkiem kąta prostego, a [[AB]] przeciwprostokątną. Wysokość [[h]] to odcinek [[CD]] poprowadzony z [[C]] prostopadle do [[AB]], więc [[CD\\perp AB]], [[CD=h]] i [[AB=c]], przy czym [[D]] jest spodkiem, dzielącym trójkąt na dwa mniejsze trójkąty prostokątne zagnieżdżone w nim." },
          { "kind": "h3", "text": "Jak wysokość dzieli przeciwprostokątną" },
          { "kind": "p", "text": "Niech wysokość dzieli przeciwprostokątną na [[AD=x]] i [[DB=y]]. Wtedy [[[\\boxed{x+y=c}]]]. Każdy mniejszy trójkąt zawiera kąt prosty i dzieli jeden kąt ostry z pierwotnym, więc wszystkie trzy trójkąty są podobne. Podobieństwo dwóch mniejszych trójkątów daje [[x/h=h/y]], a mnożenie na krzyż prowadzi do [[[\\boxed{h^2=xy}]]], związku średniej geometrycznej: wysokość jest średnią geometryczną dwóch odcinków przeciwprostokątnej i punktem wyjścia do poniższej reguły maksymalnej wysokości." }
        ],
        "imgAlt": "Trójkąt ABC z kątem prostym w C, przeciwprostokątna AB oznaczona c, wysokość CD oznaczona h, odcinki x i y",
        "figcaption": "Trójkąt ABC z wysokością CD na przeciwprostokątną: AD = x, DB = y, x + y = c, h&sup2; = xy oraz K = ch/2."
      },
      "sec-formula": {
        "h2": "Dlaczego wzór na pole to połowa przeciwprostokątnej razy wysokość?",
        "blocks": [
          { "kind": "p", "text": "Pole każdego trójkąta zaczyna się od jednej reguły [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Każdy bok może być podstawą, jeśli użyta wysokość jest do niego prostopadła. Ten kalkulator wybiera przeciwprostokątną jako podstawę, więc [[\\text{base}=c]], a odpowiadająca mu prostopadła wysokość to wysokość, [[\\text{height}=h]]. Podstawienie daje [[K=\\frac12\\times c\\times h]], czyli [[[\\boxed{K=\\frac{ch}{2}}]]]." },
          { "kind": "h3", "text": "Dlaczego przeciwprostokątna może być podstawą?" },
          { "kind": "p", "text": "Przeciwprostokątna jest po prostu wybraną podstawą tego obliczenia. Wysokość musi być mierzona od przeciwległego wierzchołka, wierzchołka kąta prostego [[C]], i musi być prostopadła do przeciwprostokątnej. Wybór innego boku jako podstawy wraz z własną odpowiadającą wysokością daje to samo pole. Podstawa to rola, jaką pełni bok, a nie trwała etykieta." },
          { "kind": "h3", "text": "Dlaczego wzór dzieli przez dwa?" },
          { "kind": "p", "text": "Trójkąt wypełnia dokładnie połowę równoległoboku zbudowanego na tej samej podstawie przy tej samej prostopadłej wysokości. Przy podstawie 10 i wysokości 4.8 pole równoległoboku wynosi [[10\\times4.8=48]]; trójkąt w nim zajmuje połowę, więc [[K=48/2=24]]. Pominięcie dzielenia na pół odpowiada na inne pytanie: pole równoległoboku, a nie trójkąta." },
          { "kind": "h3", "text": "Czy wzór działa tylko dla trójkątów prostokątnych?" },
          { "kind": "p", "text": "Równanie [[K=ch/2]] to ogólny wzór na pole trójkąta, ważny dla każdego trójkąta, gdy [[c]] jest wybraną podstawą, a [[h]] jej prostopadłą wysokością. To, co czyni tę stronę specyficzną dla trójkątów prostokątnych, to sposób odczytu: [[c]] jest przeciwprostokątną, [[h]] opada z wierzchołka kąta prostego, a wysokość podlega dodatkowemu ograniczeniu [[h\\leq c/2]], które nie ma znaczenia dla ogólnych trójkątów." },
          { "kind": "h3", "text": "Dlaczego nie potrzebujesz obu przyprostokątnych" },
          { "kind": "p", "text": "Pole wymaga jednego boku i jego odpowiadającej prostopadłej wysokości, niczego więcej. Gdy [[c]] i [[h]] są już znane, przyprostokątne nie dodają informacji zmieniającej pole. Wzór na przyprostokątne [[K=ab/2]] to inna droga wejściowa do tej samej wielkości, warta użycia, gdy zmierzonymi danymi są dwa prostopadłe boki. Jeśli masz przyprostokątne, <a href=\"/right-triangle-area-from-legs-calculator/\">Kalkulator pola trójkąta prostokątnego z przyprostokątnych</a> przyjmuje je bezpośrednio." }
        ],
        "imgAlt": "Porównanie pola K = ch/2 z przeciwprostokątnej i wysokości z polem K = ab/2 z dwóch przyprostokątnych",
        "figcaption": "Dwie drogi do tego samego pola: przeciwprostokątna z jej wysokością oraz dwie przyprostokątne. Obie równają się otaczanemu obszarowi, więc ch/2 = ab/2."
      },
      "sec-relationship": {
        "h2": "Jak przeciwprostokątna i wysokość wiążą się z przyprostokątnymi",
        "blocks": [
          { "kind": "p", "text": "Dwa poprawne wzory na pole opisują ten sam trójkąt: [[K=ab/2]] i [[K=ch/2]]. Ponieważ obliczają to samo pole, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Pomnóż obie strony przez dwa: [[ab=ch]]. Przekształcenie względem wysokości daje [[[\\boxed{h=\\frac{ab}{c}}]]]. Wysokość na przeciwprostokątną to iloczyn dwóch przyprostokątnych podzielony przez przeciwprostokątną, co wyjaśnia, dlaczego dwa wzory na pole nigdy nie mogą się nie zgadzać dla spójnego trójkąta." },
          { "kind": "h3", "text": "Dlaczego ten związek jest przydatny" },
          { "kind": "p", "text": "Łączy trzy sposoby opisywania tej samej geometrii. Przyprostokątne i przeciwprostokątna wyznaczają wysokość, więc trójkąt zmierzony bokami już ją zawiera. Wysokość i przeciwprostokątna wyznaczają pole, więc pole nigdy nie wymaga najpierw odtworzenia przyprostokątnych. Obliczenie pola oboma wzorami i porównanie to jedno z najsilniejszych sprawdzeń, ponieważ błąd w jednej drodze rzadko powtarza się w drugiej." },
          { "kind": "h3", "text": "Powiązanie wzoru z twierdzeniem Pitagorasa" },
          { "kind": "p", "text": "Twierdzenie Pitagorasa [[a^2+b^2=c^2]] weryfikuje powiązanie między przyprostokątnymi a przeciwprostokątną. Weź trójkąt 3-4-5: [[3^2+4^2=5^2]], [[9+16=25]]. Wysokość wynosi [[h=\\frac{3\\times4}{5}]], [[[\\boxed{h=2.4}]]]. Pole z przeciwprostokątnej i wysokości to [[K=\\frac{5\\times2.4}{2}=6]], a z przyprostokątnych [[K=\\frac{3\\times4}{2}=6]]. Oba wzory mierzą ten sam otoczony obszar, a [[h=ab/c]] jest łącznikiem, który to gwarantuje." },
          { "kind": "h3", "text": "Jak wysokość tworzy dwa podobne trójkąty" },
          { "kind": "p", "text": "Wysokość dzieli pierwotny trójkąt na dwa mniejsze trójkąty prostokątne, z których każdy dzieli swoje kąty ostre z pierwotnym. Dwa wspólne kąty sprawiają, że wszystkie trzy trójkąty są podobne, więc odpowiadające boki zachowują proporcje. Dopasowanie wysokości do odcinków przeciwprostokątnej daje [[x/h=h/y]], co po pomnożeniu na krzyż daje [[h^2=xy]]: związek średniej geometrycznej to podobieństwo zapisane jako równanie." }
        ]
      },
      "sec-max": {
        "h2": "Dlaczego wysokość nigdy nie może być dłuższa niż połowa przeciwprostokątnej?",
        "blocks": [
          { "kind": "p", "text": "Każdy poprawny trójkąt prostokątny spełnia [[[\\boxed{h\\leq\\frac{c}{2}}]]]. To fakt geometryczny i zasługuje na wyprowadzenie." },
          { "kind": "h3", "text": "Dwa odcinki przeciwprostokątnej" },
          { "kind": "p", "text": "Przypomnij [[x+y=c]] i [[h^2=xy]]. Iloczyn [[xy]] jest największy, gdy oba odcinki są równe, co wynika z nierówności między średnią arytmetyczną a geometryczną: [[xy\\leq\\left(\\frac{x+y}{2}\\right)^2]]. Ponieważ [[x+y=c]], prawa strona staje się [[c^2/4]], więc [[h^2\\leq\\frac{c^2}{4}]], a dla dodatnich długości [[h\\leq c/2]]. Mówiąc prosto: nierówne podziały zmniejszają iloczyn i wysokość; najwyższa wysokość pochodzi z najbardziej równego podziału." },
          { "kind": "h3", "text": "Co dzieje się przy maksymalnej wysokości?" },
          { "kind": "p", "text": "Maksimum występuje, gdy [[x=y=c/2]], a wtedy [[h=c/2]]. Daje to trójkąt prostokątny równoramienny: jego dwie przyprostokątne są równe, a kąty ostre wynoszą [[45^\\circ]] i [[45^\\circ]]. Wysokość pełni wtedy też rolę środkowej do przeciwprostokątnej, jest to poprawny trójkąt, a nie zdegenerowany." },
          { "kind": "h3", "text": "Przykład maksymalnej wysokości" },
          { "kind": "p", "text": "Dane [[c=10]], maksymalna wysokość to [[h_{\\max}=10/2=5]]. Maksymalne pole to [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K_{\\max}=25}]]]. Żaden trójkąt prostokątny o przeciwprostokątnej 10 nie może mieć wysokości powyżej 5, a zatem żaden nie może mieć pola powyżej 25 jednostek kwadratowych." },
          { "kind": "h3", "text": "Co się dzieje, gdy wysokość jest większa niż c/2?" },
          { "kind": "p", "text": "Dane [[c=10]] i [[h=5.5]], maksymalna poprawna wysokość to 5, więc te pomiary nie mogą opisywać trójkąta prostokątnego. Wzór nadal daje [[K=\\frac{10\\times5.5}{2}=27.5]], ale ta liczba nie reprezentuje żadnego poprawnego trójkąta prostokątnego o tych pomiarach. Potraktuj to jako sygnał, że pomiar jest błędny, a nie jako pole. Ten przewodnik nie twierdzi nic o tym, czy kalkulator automatycznie odrzuca takie dane." },
          { "kind": "h3", "text": "Co się dzieje, gdy wysokość jest znacznie mniejsza?" },
          { "kind": "p", "text": "Mała wysokość względem przeciwprostokątnej opisuje wąski, wydłużony trójkąt prostokątny, w którym jedna przyprostokątna jest znacznie dłuższa od drugiej. Przy ustalonej przeciwprostokątnej pole maleje wraz ze zmniejszaniem się wysokości, ponieważ [[K=ch/2]] skaluje się bezpośrednio z [[h]]. Nie ma dodatniego dolnego ograniczenia: wysokość może zbliżać się do zera, a trójkąt spłaszcza się w stronę zdegenerowanej linii." }
        ],
        "imgAlt": "Maksymalna wysokość c/2 w trójkącie prostokątnym równoramiennym, poprawna mniejsza wysokość i przypadek niepoprawny",
        "figcaption": "Po lewej: maksymalna wysokość przy c/2 daje największe pole. W środku: mniejsza poprawna wysokość. Po prawej: wysokość powyżej c/2 nie może należeć do trójkąta prostokątnego."
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Kalkulator potrzebuje dokładnie dwóch danych wejściowych. Poniższy opis podąża za kolejnością na ekranie, od zmierzonego trójkąta do zweryfikowanego wyniku." }
        ],
        "steps": [
          "<strong>Zmierz lub zidentyfikuj przeciwprostokątną.</strong> Najdłuższy bok, naprzeciw kąta 90 stopni.",
          "<strong>Zidentyfikuj prostopadłą wysokość poprowadzoną do przeciwprostokątnej.</strong> Zaczyna się w wierzchołku kąta prostego i spotyka przeciwprostokątną pod kątem 90 stopni.",
          "<strong>Potwierdź, że wysokość jest prostopadła.</strong> Odcinek zmierzony wzdłuż ukośnego boku nie jest wysokością, której potrzebuje wzór.",
          "<strong>Wprowadź przeciwprostokątną [[c]].</strong>",
          "<strong>Wprowadź wysokość [[h]].</strong>",
          "<strong>Wybierz zgodne jednostki długości.</strong> Oba pomiary muszą używać tej samej jednostki.",
          "<strong>Sprawdź, czy oba pomiary są dodatnie.</strong> Zerowe lub ujemne długości nie opisują żadnego trójkąta.",
          "<strong>Potwierdź, że [[h\\leq c/2]].</strong> Dla [[c=10]] każda wysokość powyżej 5 nie może należeć do trójkąta prostokątnego o tej przeciwprostokątnej.",
          "<strong>Kliknij Oblicz pole.</strong>",
          "<strong>Przejrzyj wynik.</strong> Pole pojawia się w jednostkach kwadratowych zgodnych z danymi wejściowymi.",
          "<strong>Sprawdź jednostki kwadratowe.</strong> Metry dają metry kwadratowe; centymetry dają centymetry kwadratowe.",
          "<strong>Przejrzyj kroki rozwiązania.</strong> Pokazują podstawienie i obliczenia.",
          "<strong>Użyj Reset przed wprowadzeniem nowego trójkąta.</strong> Czyści oba pola, aby następne obliczenie zaczęło się od czystej karty."
        ],
        "closingParagraphs": [
          "Kalkulator nie pyta o dwie przyprostokątne ani kąt: jeden bok i jego odpowiadająca prostopadła wysokość w pełni wyznaczają pole."
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Cztery rozwiązane przykłady budują metodę od znanego w górę. Każdy stosuje [[K=ch/2]] z pokazanym każdym podstawieniem i każdy sprawdza, czy wysokość respektuje limit trójkąta prostokątnego." },
          { "kind": "h3", "text": "Przykład 1: Użycie przykładu z istniejącego kalkulatora" },
          { "kind": "p", "text": "Dane [[c=10]] i [[h=4.8]]. Krok 1: zapisz wzór, [[K=ch/2]]. Krok 2: podstaw, [[K=\\frac{10\\times4.8}{2}]]. Krok 3: pomnóż, [[K=\\frac{48}{2}]]. Odpowiedź końcowa: [[[\\boxed{K=24\\text{ square units}}]]]. Wysokość jest poprawna, ponieważ [[4.8<5]], poniżej maksimum równego połowie przeciwprostokątnej." },
          { "kind": "h3", "text": "Przykład 2: Trójkąt 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]]. Najpierw znajdź wysokość: [[h=ab/c]], więc [[h=\\frac{3\\times4}{5}=2.4]]. Następnie [[K=\\frac{5\\times2.4}{2}]], [[[\\boxed{K=6}]]]. Zweryfikuj przyprostokątnymi: [[K=\\frac{3\\times4}{2}=6]]. Obie drogi zgadzają się, jak muszą." },
          { "kind": "h3", "text": "Przykład 3: Trójkąt prostokątny równoramienny" },
          { "kind": "p", "text": "Dane [[c=10]] i [[h=5]]. Wtedy [[K=\\frac{10\\times5}{2}]], [[[\\boxed{K=25}]]]. Wysokość równa się połowie przeciwprostokątnej, więc przyprostokątne są równe, a każdy kąt ostry wynosi [[45^\\circ]]. To maksymalne możliwe pole dla każdego trójkąta prostokątnego o przeciwprostokątnej 10." },
          { "kind": "h3", "text": "Przykład 4: Mniejsza wysokość trójkąta" },
          { "kind": "p", "text": "Dane [[c=13]] i [[h=5]]. Wtedy [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ square units}}]]]. Wysokość spełnia limit, ponieważ [[5\\leq6.5]]: połowa przeciwprostokątnej to 6.5, a 5 jest wygodnie poniżej." }
        ]
      },
      "sec-applications": {
        "h2": "Zastosowania w życiu codziennym pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Dwanaście rozwiązanych sytuacji pokazuje wzór w różnych skalach i jednostkach. Każda nazywa trójkąt w scenie, podaje dwa pomiary, podstawia krok po kroku i podaje stojące za tym założenie. Każdy przykład to prostokątny trójkątny panel, profil, przekrój lub uproszczony model; wzór stosuje się do modelowanego trójkąta, a nie do każdego zakrzywionego lub nieregularnego obiektu o tej samej nazwie." },
          { "kind": "h3", "text": "Przykład 1: Trójkątne okno szklane" },
          { "kind": "p", "text": "Trójkątny prostokątny panel szklany ma przeciwprostokątną [[2.5\\text{ m}]] i prostopadłą wysokość [[1.2\\text{ m}]]. Używając [[K=ch/2]]: [[K=\\frac{2.5\\times1.2}{2}]], [[[\\boxed{K=1.5\\text{ m}^2}]]]. To płaska powierzchnia szkła przed ramą, przy założeniu prostych krawędzi i prawdziwego kąta prostego." },
          { "kind": "h3", "text": "Przykład 2: Trójkątny panel boczny rampy" },
          { "kind": "p", "text": "Trójkątny prostokątny panel boczny rampy ma przeciwprostokątną [[4\\text{ m}]] i prostopadłą wysokość [[1.5\\text{ m}]]. Wtedy [[K=\\frac{4\\times1.5}{2}]], [[[\\boxed{K=3\\text{ m}^2}]]]. Wynik opisuje trójkątny profil boczny, a nie powierzchnię do chodzenia." },
          { "kind": "h3", "text": "Przykład 3: Trójkątna sekcja żagla" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja żagla ma przeciwprostokątną [[13\\text{ ft}]] i wysokość [[5\\text{ ft}]]. Wtedy [[K=\\frac{13\\times5}{2}]], [[[\\boxed{K=32.5\\text{ ft}^2}]]]. To płaska powierzchnia tkaniny przed szwami i krzywizną; prawdziwe żagle wybrzuszają się, więc żagiel modeluje się jako płaski." },
          { "kind": "h3", "text": "Przykład 4: Pomiar trójkątnej działki" },
          { "kind": "p", "text": "Uproszczona trójkątna prostokątna działka ma przeciwprostokątną [[50\\text{ m}]] i wysokość [[12\\text{ m}]]. Wtedy [[K=\\frac{50\\times12}{2}]], [[[\\boxed{K=300\\text{ m}^2}]]]. Szacuje to pole w uproszczonym modelu traktującym granice jako linie proste na płaskim terenie." },
          { "kind": "h3", "text": "Przykład 5: Stalowa blacha węzłowa" },
          { "kind": "p", "text": "Trójkątna prostokątna stalowa blacha wsporcza ma przeciwprostokątną [[3.4\\text{ m}]] i wysokość [[1.6\\text{ m}]]. Wtedy [[K=\\frac{3.4\\times1.6}{2}]], [[[\\boxed{K=2.72\\text{ m}^2}]]]. To tylko płaska powierzchnia blachy; nośność to osobne pytanie." },
          { "kind": "h3", "text": "Przykład 6: Profil boczny schodów" },
          { "kind": "p", "text": "Uproszczony trójkątny prostokątny profil boczny schodów ma przeciwprostokątną [[5\\text{ m}]] i wysokość [[2\\text{ m}]]. Wtedy [[K=\\frac{5\\times2}{2}]], [[[\\boxed{K=5\\text{ m}^2}]]]. Opisuje to trójkątny profil boczny, a nie sumę poszczególnych stopni i podstopnic." },
          { "kind": "h3", "text": "Przykład 7: Trójkątny znak drogowy" },
          { "kind": "p", "text": "Trójkątny prostokątny panel znaku ma przeciwprostokątną [[1.8\\text{ m}]] i wysokość [[0.8\\text{ m}]]. Wtedy [[K=\\frac{1.8\\times0.8}{2}]], [[[\\boxed{K=0.72\\text{ m}^2}]]]. 0.72 metra kwadratowego materiału lica znaku; osprzęt montażowy wyłączony." },
          { "kind": "h3", "text": "Przykład 8: Panel wsporczy instalacji solarnej" },
          { "kind": "p", "text": "Trójkątny prostokątny panel wsporczy montażowy ma przeciwprostokątną [[3\\text{ m}]] i wysokość [[1.2\\text{ m}]]. Wtedy [[K=\\frac{3\\times1.2}{2}]], [[[\\boxed{K=1.8\\text{ m}^2}]]]. Tylko powierzchnia panelu; nic o wyprodukowanej energii, ponieważ to wspornik montażowy." },
          { "kind": "h3", "text": "Przykład 9: Szablon do cięcia sklejki" },
          { "kind": "p", "text": "Trójkątny prostokątny szablon ze sklejki ma przeciwprostokątną [[2.5\\text{ m}]] i wysokość [[1\\text{ m}]]. Wtedy [[K=\\frac{2.5\\times1}{2}]], [[[\\boxed{K=1.25\\text{ m}^2}]]]. Użyteczny trójkątny kawałek; odpad przy cięciu wymaga osobnego marginesu." },
          { "kind": "h3", "text": "Przykład 10: Trójkątny baner z tkaniny" },
          { "kind": "p", "text": "Trójkątny prostokątny baner ma przeciwprostokątną [[6\\text{ ft}]] i wysokość [[2.4\\text{ ft}]]. Wtedy [[K=\\frac{6\\times2.4}{2}]], [[[\\boxed{K=7.2\\text{ ft}^2}]]]. 7.2 stopy kwadratowej płaskiego materiału; zapasy na obszycia dodaje producent." },
          { "kind": "h3", "text": "Przykład 11: Duża trójkątna działka pomiarowa" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja gruntu ma przeciwprostokątną [[80\\text{ m}]] i wysokość [[30\\text{ m}]]. Wtedy [[K=\\frac{80\\times30}{2}]], [[[\\boxed{K=1,200\\text{ m}^2}]]]. Poprawne tylko tam, gdzie działka jest rzeczywiście prostokątna na płaskim terenie." },
          { "kind": "h3", "text": "Przykład 12: Trójkątny panel wsporczy zadaszenia" },
          { "kind": "p", "text": "Trójkątny prostokątny panel wsporczy zadaszenia ma przeciwprostokątną [[8\\text{ m}]] i wysokość [[3.6\\text{ m}]]. Wtedy [[K=\\frac{8\\times3.6}{2}]], [[[\\boxed{K=14.4\\text{ m}^2}]]]. Płaska powierzchnia trójkąta; obciążenia wiatrem i mocowania to osobne pytania." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Zastosowanie", "Przeciwprostokątna c", "Wysokość h", "Pole", "Jednostka"],
          "rows": [
            ["Okno szklane", "2.5", "1.2", "1.5", "m²"],
            ["Panel boczny rampy", "4", "1.5", "3", "m²"],
            ["Sekcja żagla", "13", "5", "32.5", "ft²"],
            ["Sekcja gruntu", "50", "12", "300", "m²"],
            ["Blacha węzłowa", "3.4", "1.6", "2.72", "m²"],
            ["Profil schodów", "5", "2", "5", "m²"],
            ["Znak drogowy", "1.8", "0.8", "0.72", "m²"],
            ["Panel wsporczy solarny", "3", "1.2", "1.8", "m²"],
            ["Szablon ze sklejki", "2.5", "1", "1.25", "m²"],
            ["Baner z tkaniny", "6", "2.4", "7.2", "ft²"],
            ["Duża działka pomiarowa", "80", "30", "1,200", "m²"],
            ["Panel wsporczy zadaszenia", "8", "3.6", "14.4", "m²"]
          ]
        },
        "imgAlt": "Cztery zastosowania K = ch/2: okno szklane, panel rampy, żagiel i zmierzona sekcja gruntu",
        "figcaption": "Ten sam wzór w czterech scenach: okno szklane, panel boczny rampy, żagiel i zmierzona sekcja gruntu."
      },
      "sec-geomean": {
        "h2": "Dlaczego kwadrat wysokości równa się iloczynowi dwóch odcinków przeciwprostokątnej?",
        "blocks": [
          { "kind": "p", "text": "Wysokość spotyka przeciwprostokątną w [[D]], dzieląc ją na [[AD=x]] i [[DB=y]]. Związek to [[[\\boxed{h^2=xy}]]]. Tutaj [[x]] to pierwszy odcinek, [[y]] to drugi, a [[h]] to prostopadła wysokość. Warto zobaczyć, skąd to pochodzi, zamiast to zapamiętywać." },
          { "kind": "h3", "text": "Jak działa ten związek?" },
          { "kind": "p", "text": "Wysokość tworzy dwa mniejsze trójkąty prostokątne, z których każdy jest podobny do pierwotnego, a zatem i do siebie nawzajem. Dopasowanie krótkiej przyprostokątnej jednego do długiej przyprostokątnej drugiego daje [[\\frac{x}{h}=\\frac{h}{y}]], co po pomnożeniu na krzyż daje [[h^2=xy]]. Biorąc pierwiastki kwadratowe, [[h=\\sqrt{xy}]]: wysokość jest średnią geometryczną dwóch odcinków przeciwprostokątnej, liczbą, której kwadrat równa się ich iloczynowi." },
          { "kind": "h3", "text": "Przykład liczbowy" },
          { "kind": "p", "text": "Dane [[x=4]] i [[y=9]], wtedy [[h^2=4\\times9=36]], [[[\\boxed{h=6}]]]. Cała przeciwprostokątna to [[c=4+9=13]], a pole to [[K=\\frac{13\\times6}{2}]], [[[\\boxed{K=39}]]]. Gdy znane są dwa odcinki przeciwprostokątnej, wysokość wynika bez żadnych pomiarów przyprostokątnych." },
          { "kind": "h3", "text": "Kiedy ten związek jest przydatny?" },
          { "kind": "p", "text": "Pojawia się w zadaniach geometrycznych, gdzie brakuje wysokości, ale podane są odcinki, w problemach podobieństwa i wszędzie tam, gdzie pomiar wysokości potrzebuje niezależnego sprawdzenia. Wyjaśnia też limit wysokości: iloczyn [[xy]] jest ograniczony ustaloną przeciwprostokątną, więc wysokość też jest ograniczona. Kalkulator nie potrzebuje [[x]] i [[y]] jako danych wejściowych; to twierdzenie to wiedza pomocnicza, a nie pole kalkulatora." }
        ]
      },
      "sec-legs": {
        "h2": "Jak odtworzyć dwie przyprostokątne, gdy znane są przeciwprostokątna i wysokość",
        "blocks": [
          { "kind": "p", "text": "Kalkulator potrzebuje tylko [[c]] i [[h]] do pola, ale te dwa pomiary zawierają też wystarczająco informacji, aby wyznaczyć długości dwóch przyprostokątnych, z dokładnością do zamiany ich pozycji. Zacznij od [[a^2+b^2=c^2]] i [[ab=ch]]. Ponieważ [[(a^2-b^2)^2=(a^2+b^2)^2-4a^2b^2]], podstawienie daje [[(a^2-b^2)^2=c^4-4c^2h^2]], a zatem [[[\\boxed{a^2,b^2=\\frac{c^2\\pm c\\sqrt{c^2-4h^2}}{2}}]]]. Dwa znaki odpowiadają dwóm przypisaniom przyprostokątnych: zamiana przyprostokątnych niczego nie zmienia w trójkącie ani jego polu." },
          { "kind": "p", "text": "Przykład liczbowy: dane [[c=10]] i [[h=4.8]], wtedy [[ab=ch=48]] i [[a^2+b^2=100]]. Przyprostokątne to [[a=6]] i [[b=8]]. Weryfikacja: [[6^2+8^2=10^2]], [[36+64=100]]. Pole sprawdza się obiema drogami: [[K=\\frac{6\\times8}{2}=24]] i [[K=\\frac{10\\times4.8}{2}=24]]. To dodatkowy wgląd matematyczny, a nie dodatkowa funkcja istniejącego kalkulatora, i nie powinien odwracać uwagi od celu kalkulatora: pola z przeciwprostokątnej i wysokości." }
        ]
      },
      "sec-valid": {
        "h2": "Jak sprawdzić, czy pomiary przeciwprostokątnej i wysokości są poprawne",
        "blocks": [
          { "kind": "p", "text": "Dla niezdegenerowanego trójkąta prostokątnego dane wejściowe muszą spełniać trzy warunki [[c>0]], [[h>0]] i [[h\\leq c/2]]. Pierwsze dwa wykluczają zerowe i ujemne długości; trzeci to limit wysokości wyprowadzony wcześniej. Wszystkie trzy muszą zachodzić naraz." },
          { "kind": "h3", "text": "Przykład poprawnych danych" },
          { "kind": "p", "text": "Dane [[c=12]] i [[h=5]], maksymalna wysokość to [[h_{\\max}=6]]. Ponieważ [[5<6]], pomiary są poprawne, a [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Przykład niepoprawnych danych" },
          { "kind": "p", "text": "Dane [[c=12]] i [[h=7]], maksymalna wysokość to [[h_{\\max}=6]]. Ponieważ [[7>6]], pomiary nie mogą opisywać trójkąta prostokątnego: przy przeciwprostokątnej ustalonej na 12 żaden podział na odcinki [[x]] i [[y]] nie sprawi, że [[\\sqrt{xy}]] osiągnie 7." },
          { "kind": "h3", "text": "Przypadek graniczny" },
          { "kind": "p", "text": "Dane [[c=12]] i [[h=6]], wysokość równa się maksymalnej możliwej wartości. To trójkąt prostokątny równoramienny o dwóch równych przyprostokątnych, siedzący dokładnie na granicy. Limit jest inkluzywny: [[h\\leq c/2]] dopuszcza równość." },
          { "kind": "h3", "text": "A co z wartościami zerowymi lub ujemnymi?" },
          { "kind": "p", "text": "Przeciwprostokątna musi być dodatnia, a wysokość musi być dodatnia dla niezdegenerowanego trójkąta. Zerowa wysokość daje zerowe pole i zdegenerowany kształt, linię, a nie trójkąt, podczas gdy ujemne długości nie mają sensu geometrycznego. Ten przewodnik nie twierdzi, że kalkulator wykonuje każdą walidację automatycznie." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki pola w obliczeniach z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Pole jest dwuwymiarowe, więc jego jednostką jest kwadrat jednostki długości. W symbolach [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Selektory jednostek istnieją po to, aby wynik można było poprawnie oznaczyć." },
          { "kind": "h3", "text": "Dlaczego jednostki muszą się zgadzać" },
          { "kind": "p", "text": "Przeciwprostokątna i wysokość muszą być wyrażone w tej samej jednostce, zanim zastosuje się wzór. Jeśli przeciwprostokątna to 200 cm, a wysokość to 1 m, najpierw przelicz na 200 cm i 100 cm. Wtedy [[K=\\frac{200\\times100}{2}]], [[K=10,000\\text{ cm}^2]], lub równoważnie [[K=1\\text{ m}^2]]. Mnożenie pomiarów w różnych jednostkach daje liczbę bez czystej jednostki, więc najpierw przelicz, a potem licz." },
          { "kind": "h3", "text": "Dlaczego zaokrąglanie ma znaczenie" },
          { "kind": "p", "text": "Zaokrąglanie pomiarów nieznacznie zmienia końcowe pole, ponieważ wysokość jest mnożona bezpośrednio. Zachowaj pełną precyzję w krokach pośrednich i zaokrąglij tylko końcową odpowiedź; wczesne zaokrąglenie wysokości kumuluje błąd." },
          { "kind": "h3", "text": "Wartości dokładne a wartości zmierzone" },
          { "kind": "p", "text": "Dokładne pomiary, jak wysokość 5 trójkąta prostokątnego równoramiennego o przeciwprostokątnej 10, zachowują się inaczej niż odczyty miarki czy przyrządu. Niepewność przyrządu przenika do pola, więc traktuj ostatnią cyfrę jako wiarygodną tylko na tyle, na ile wiarygodne są dane wejściowe." }
        ]
      },
      "sec-mistakes": {
        "h2": "Częste błędy przy obliczaniu pola trójkąta prostokątnego z przeciwprostokątnej i wysokości",
        "blocks": [
          { "kind": "p", "text": "Większość błędnych odpowiedzi wynika z błędnie oznaczonych danych wejściowych, a nie ze złej arytmetyki. Poniższe piętnaście błędów obejmuje prawie każdy z nich." },
          { "kind": "h3", "text": "1. Mylenie przeciwprostokątnej z prostopadłą przyprostokątną" },
          { "kind": "p", "text": "Wprowadzenie przyprostokątnej jako przeciwprostokątnej zmniejsza podstawę. Poprawka: wybierz bok, który nie dotyka znacznika kąta prostego." },
          { "kind": "h3", "text": "Mierzenie wysokości wzdłuż ukośnego boku" },
          { "kind": "p", "text": "Odcinek biegnący wzdłuż boku nie jest wysokością. Poprawka: musi opuszczać wierzchołek kąta prostego i trafiać w przeciwprostokątną pod kątem 90 stopni." },
          { "kind": "h3", "text": "Używanie odległości nieprostopadłej do przeciwprostokątnej" },
          { "kind": "p", "text": "Nieprostopadła odległość od wierzchołka do przeciwprostokątnej jest dłuższa niż prawdziwa wysokość, zawyżając pole. Poprawka: najpierw potwierdź prostopadłość." },
          { "kind": "h3", "text": "Używanie wysokości z niewłaściwego wierzchołka" },
          { "kind": "p", "text": "Tylko wysokość z wierzchołka kąta prostego tworzy parę z przeciwprostokątną." },
          { "kind": "h3", "text": "Zapominanie o dzieleniu przez dwa" },
          { "kind": "p", "text": "[[c\\times h]] to pole równoległoboku, a nie trójkąta. Poprawka: każdy iloczyn podstawa-wysokość dziel na pół." },
          { "kind": "h3", "text": "Wprowadzanie niewłaściwego pomiaru jako c" },
          { "kind": "p", "text": "Krótszy bok wprowadzony jako przeciwprostokątna zmniejsza podstawę. Poprawka: przeciwprostokątna jest zawsze najdłuższym bokiem." },
          { "kind": "h3", "text": "Wprowadzanie niewłaściwego pomiaru jako h" },
          { "kind": "p", "text": "Przyprostokątna wprowadzona jako wysokość psuje prostopadłą parę. Poprawka: wysokość musi spotykać przeciwprostokątną pod kątem prostym." },
          { "kind": "h3", "text": "Mieszanie różnych jednostek długości" },
          { "kind": "p", "text": "Przeciwprostokątna 2 m z wysokością 150 cm nie daje żadnej sensownej liczby. Poprawka: najpierw przelicz na jedną jednostkę." },
          { "kind": "h3", "text": "Podawanie pola w jednostkach liniowych" },
          { "kind": "p", "text": "Pole 24 m² to nie 24 m. Poprawka: zapisz jednostkę kwadratową przy liczbie." },
          { "kind": "h3", "text": "Wprowadzanie ujemnej wysokości" },
          { "kind": "p", "text": "Długości nie mogą być ujemne; ujemna wysokość sygnalizuje błąd wprowadzania danych. Poprawka: wprowadź ponownie zmierzoną dodatnią odległość." },
          { "kind": "h3", "text": "Wprowadzanie zerowej przeciwprostokątnej" },
          { "kind": "p", "text": "Zerowa przeciwprostokątna oznacza, że żaden trójkąt nie istnieje. Poprawka: sprawdź, czy każda długość jest dodatnia." },
          { "kind": "h3", "text": "Używanie wysokości większej niż połowa przeciwprostokątnej" },
          { "kind": "p", "text": "Wysokość 6 przy [[c=10]] narusza limit. Poprawka: sprawdź ponownie zmierzony odcinek." },
          { "kind": "h3", "text": "Zakładanie, że każdy trójkąt o tej samej podstawie i wysokości jest koniecznie prostokątny" },
          { "kind": "p", "text": "[[K=ch/2]] działa dla każdego trójkąta z odpowiadającą podstawą i wysokością. Poprawka: limit wysokości stosuj tylko do trójkątów prostokątnych." },
          { "kind": "h3", "text": "Mylenie wysokości h z przyprostokątną a lub b" },
          { "kind": "p", "text": "W trójkącie 6-8-10 wysokość wynosi 4.8, co nie równa się żadnej przyprostokątnej. Poprawka: trzymaj [[a]], [[b]] i [[h]] osobno." },
          { "kind": "h3", "text": "Zakładanie, że wzór automatycznie waliduje geometrię trójkąta" },
          { "kind": "p", "text": "Arytmetyka nigdy nie odrzuca danych wejściowych. Poprawka: kontrole poprawności wykonaj sam." },
          { "kind": "h3", "text": "Źle a dobrze: konkretny przykład" },
          { "kind": "p", "text": "Dane [[c=10]] i [[h=4]], poprawne obliczenie to [[K=\\frac{10\\times4}{2}=20]]. Pominięcie dzielenia na pół daje [[K=10\\times4=40]], dwa razy pole trójkąta. Podobnie [[h=6]] przy [[c=10]] nie spełnia limitu wysokości, choć arytmetyka daje liczbę." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy pole trójkąta prostokątnego jest poprawne",
        "blocks": [
          { "kind": "p", "text": "Kilka kontroli wyłapuje typowe błędy. Trójkąt 6-8-10 demonstruje większość z nich." },
          { "kind": "h3", "text": "Metoda 1: Sprawdź wzór na pole" },
          { "kind": "p", "text": "Przelicz [[K=ch/2]] z wprowadzonymi wartościami. Dla [[c=10]] i [[h=4.8]], [[K=(10\\times4.8)/2=24]]. Drugie przejście wyłapuje literówki." },
          { "kind": "h3", "text": "Metoda 2: Zweryfikuj przy użyciu dwóch przyprostokątnych" },
          { "kind": "p", "text": "Gdy przyprostokątne są znane lub odtworzone, [[K=ab/2]] musi się zgadzać. Tutaj [[(6\\times8)/2=24]] odpowiada [[(10\\times4.8)/2=24]]: dwie metody, jeden trójkąt, jedna odpowiedź." },
          { "kind": "h3", "text": "Metoda 3: Sprawdź twierdzenie Pitagorasa" },
          { "kind": "p", "text": "Potwierdź [[a^2+b^2=c^2]]: [[36+64=100]]. Jeśli boki go nie spełniają, identyfikacja trójkąta jest błędna." },
          { "kind": "h3", "text": "Metoda 4: Sprawdź związek wysokości" },
          { "kind": "p", "text": "Potwierdź [[h=ab/c]]: [[(6\\times8)/10=4.8]]. Niezgodność oznacza, że wprowadzona wysokość nie należy do tego trójkąta." },
          { "kind": "h3", "text": "Metoda 5: Sprawdź dwa odcinki przeciwprostokątnej" },
          { "kind": "p", "text": "Potwierdź [[x+y=c]] i [[h^2=xy]]. Przy odcinkach 6.4 i 3.6: [[6.4+3.6=10]] oraz [[4.8^2=6.4\\times3.6]], ponieważ [[23.04=23.04]]." },
          { "kind": "h3", "text": "Metoda 6: Sprawdź maksymalną wysokość" },
          { "kind": "p", "text": "Potwierdź [[h\\leq c/2]]. Tutaj [[4.8\\leq5]]. Każde twierdzenie o polu trójkąta prostokątnego powyżej [[c^2/4]] dla danej przeciwprostokątnej jest niemożliwe." },
          { "kind": "h3", "text": "Metoda 7: Sprawdź jednostki" },
          { "kind": "p", "text": "Upewnij się, że wynik jest w jednostkach kwadratowych: metry dają metry kwadratowe, centymetry dają centymetry kwadratowe. Pole podane w jednostkach liniowych jest niepełne, nawet gdy liczba jest dobra." }
        ]
      },
      "sec-altitude-table": {
        "h2": "Jak wysokość wpływa na pole trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Z [[K=ch/2]], przy ustalonej przeciwprostokątnej pole zmienia się bezpośrednio wraz z wysokością. Podwojenie wysokości podwaja pole; zwiększenie wysokości zwiększa pole w tej samej proporcji. Poniższa tabela ustala [[c=10]] i zmienia wysokość aż do jej maksimum 5." }
        ],
        "table": {
          "headers": ["Wysokość h", "Pole K"],
          "rows": [
            ["1", "5"],
            ["2", "10"],
            ["3", "15"],
            ["4", "20"],
            ["5", "25"]
          ]
        },
        "closingParagraphs": [
          "Wszystkie pięć wierszy opisuje poprawne trójkąty prostokątne, ponieważ każda wysokość jest na poziomie maksimum 5 lub poniżej. Wysokość nie może przekraczać [[c/2]], a maksymalne pole występuje, gdy dwie przyprostokątne są równe. Zauważ, że przyprostokątne nie pozostają stałe, gdy zmienia się wysokość; każdy wiersz to inny trójkąt dzielący jedną przeciwprostokątną."
        ]
      },
      "sec-conclusion": {
        "h2": "Przeciwprostokątna i jej wysokość to wszystko, czego potrzebujesz",
        "blocks": [
          { "kind": "p", "text": "Metoda przeciwprostokątna-wysokość to zwykła reguła podstawa-wysokość skierowana na najdłuższy bok. Gdy przeciwprostokątna zostanie zidentyfikowana, a prostopadła wysokość jest w ręku, pole dzieli jedno mnożenie i jedno dzielenie na pół, bez potrzeby najpierw odtwarzania przyprostokątnych." },
          { "kind": "p", "text": "Jej prawdziwa wartość to dyscyplina: prostopadłość, limit wysokości i związki średniej geometrycznej zamieniają szkicowe rysunki w liczby, które da się sprawdzić. Zweryfikuj wysokość, a odpowiedź zyska zaufanie." }
        ]
      }
    },
    "faqs": [
      { "question": "Jak obliczyć pole trójkąta prostokątnego z jego przeciwprostokątnej i wysokości?", "answer": "Pomnóż przeciwprostokątną c przez prostopadłą wysokość h i podziel przez dwa: K = ch/2. Na przykład c = 10 i h = 4.8 dają K = 24 jednostek kwadratowych. Potwierdź, że wysokość spotyka przeciwprostokątną pod kątem prostym i h wynosi co najwyżej połowę c." },
      { "question": "Jaki jest wzór na pole z przeciwprostokątnej i wysokości?", "answer": "Wzór to K = ch/2, gdzie K to pole, c to przeciwprostokątna jako podstawa, a h to prostopadła wysokość do tej podstawy. To standardowa reguła pola trójkąta z najdłuższym bokiem jako podstawą, a wynik używa odpowiadających jednostek kwadratowych." },
      { "question": "Czym jest wysokość opuszczona na przeciwprostokątną?", "answer": "To prostopadły odcinek od wierzchołka kąta prostego C do przeciwprostokątnej AB, spotykający ją w punkcie D: najkrótsza odległość od tego wierzchołka do przeciwprostokątnej i jedyna wysokość, która tworzy z nią parę. Nie jest przyprostokątną." },
      { "question": "Czy wysokość to to samo co przeciwprostokątna?", "answer": "Nie. Przeciwprostokątna c to najdłuższy bok, naprzeciw kąta prostego, natomiast wysokość h to prostopadłe opuszczenie z wierzchołka kąta prostego na ten bok: c to podstawa, h to wysokość. W trójkącie 6-8-10 c = 10, a h = 4.8." },
      { "question": "Czy wysokość może być dłuższa niż połowa przeciwprostokątnej?", "answer": "Nie. Dla poprawnego trójkąta prostokątnego 0 < h <= c/2. Wysokość jest najwyższa, gdy dzieli przeciwprostokątną na dwie równe połowy, osiągając dokładnie c/2. Większa wartość, np. h = 6 przy c = 10, nie może należeć do takiego trójkąta." },
      { "question": "Dlaczego maksymalna wysokość to połowa przeciwprostokątnej?", "answer": "Z h² = xy przy x + y = c, iloczyn xy jest największy, gdy x = y = c/2. Wtedy h² <= c²/4, więc h <= c/2: najbardziej równy podział daje najwyższą wysokość." },
      { "question": "Co się dzieje, gdy wysokość równa się połowie przeciwprostokątnej?", "answer": "Trójkąt jest trójkątem prostokątnym równoramiennym: równe przyprostokątne, kąty ostre 45 stopni, a wysokość pełni też rolę środkowej do przeciwprostokątnej. Ten poprawny przypadek graniczny daje największe możliwe pole, K = c²/4." },
      { "question": "Czy mogę obliczyć pole, nie znając dwóch przyprostokątnych?", "answer": "Tak. Podstawa i jej odpowiadająca prostopadła wysokość wystarczą; przyprostokątne nie dodają nic o polu. Wprowadź przeciwprostokątną c i wysokość h, a K = ch/2 da pole bezpośrednio." },
      { "question": "Jak wzór oparty na przeciwprostokątnej wiąże się ze wzorem na przyprostokątne?", "answer": "Oba obliczają to samo pole. Przyrównanie ab/2 do ch/2 i pomnożenie przez dwa daje ab = ch, więc h = ab/c, dlatego obliczenie obu jest tak silnym sprawdzeniem." },
      { "question": "Jaki jest związek między wysokością a dwoma odcinkami przeciwprostokątnej?", "answer": "Wysokość spełnia h² = xy, gdzie x i y to odcinki, na które dzieli przeciwprostokątną, więc jest ich średnią geometryczną. Wynika z podobieństwa dwóch mniejszych trójkątów, przez x/h = h/y." },
      { "question": "Czy przeciwprostokątna i wysokość mogą wyznaczyć dwie przyprostokątne?", "answer": "Tak, z dokładnością do ich zamiany. Z a² + b² = c² i ab = ch, przyprostokątne wynikają z (c² ± c√(c² - 4h²))/2. Dla c = 10 i h = 4.8 daje to przyprostokątne 6 i 8." },
      { "question": "Czy kalkulator działa z centymetrami, metrami i stopami?", "answer": "Tak, o ile oba dane wejściowe używają tej samej jednostki: metry dają metry kwadratowe, centymetry dają centymetry kwadratowe, stopy dają stopy kwadratowe. Najpierw przelicz mieszane jednostki." }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z kąta",
      "Kalkulator pola trójkąta prostokątnego z wysokości",
      "Kalkulator pola trójkąta prostokątnego z przyprostokątnych",
      "Kalkulator wysokości trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z promienia okręgu wpisanego i półobwodu"
    ]
  }
};
