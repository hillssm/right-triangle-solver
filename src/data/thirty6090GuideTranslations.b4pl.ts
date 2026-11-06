// thirty6090GuideTranslations.bpl.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator trójkąta 30-60-90 - Boki, pole, obwód",
        "description": "Użyj kalkulatora trójkąta 30-60-90, aby znaleźć krótszą przyprostokątną, dłuższą przyprostokątną, przeciwprostokątną, pole i obwód na podstawie jednego znanego boku, korzystając ze stosunku 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-intro": "Kalkulator trójkąta 30-60-90",
        "sec-calculate": "Oblicz brakujące boki, pole i obwód",
        "sec-what": "Co to jest trójkąt 30-60-90?",
        "sec-sides": "Krótsza przyprostokątna, dłuższa przyprostokątna i przeciwprostokątna",
        "sec-ratio": "Stosunek boków trójkąta 30-60-90",
        "sec-why-sqrt3": "Dlaczego pojawia się pierwiastek kwadratowy z 3?",
        "sec-long-leg": "Wzór na dłuższą przyprostokątną z krótszej przyprostokątnej",
        "sec-hypotenuse": "Wzór na przeciwprostokątną z krótszej przyprostokątnej",
        "sec-short-leg-hyp": "Wzór na krótszą przyprostokątną z przeciwprostokątnej",
        "sec-short-leg-long": "Wzór na krótszą przyprostokątną z dłuższej przyprostokątnej",
        "sec-long-leg-hyp": "Wzór na dłuższą przyprostokątną z przeciwprostokątnej",
        "sec-area": "Jak obliczyć pole trójkąta 30-60-90",
        "sec-perimeter": "Jak obliczyć obwód trójkąta 30-60-90",
        "sec-step-example": "Przykład krok po kroku rozwiązywania trójkąta 30-60-90",
        "sec-examples": "Przykłady obliczeń dla trójkąta 30-60-90 z rozwiązaniami",
        "sec-derive-pythagoras": "Jak wyprowadzić stosunek trójkąta 30-60-90 za pomocą twierdzenia Pitagorasa",
        "sec-equilateral": "Związek między trójkątami 30-60-90 a trójkątami równobocznymi",
        "sec-trig": "Zależności trygonometryczne w trójkącie 30-60-90",
        "sec-verify": "Jak sprawdzić obliczenia dla trójkąta 30-60-90",
        "sec-properties": "Ważne własności trójkątów 30-60-90",
        "sec-mistakes": "Typowe błędy przy rozwiązywaniu trójkątów 30-60-90",
        "sec-applications": "Praktyczne zastosowania trójkątów 30-60-90",
        "sec-practice": "Zadania ćwiczeniowe z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Znajdź każdy brakujący bok, pole i obwód trójkąta 30-60-90 na podstawie jednego znanego boku.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 to trójkąt prostokątny, którego trzy kąty mają 30°, 60° i 90°. Nazywa się go specjalnym trójkątem prostokątnym, ponieważ długości jego boków zawsze podlegają temu samemu stałemu stosunkowi, niezależnie od tego, jak duży lub mały jest trójkąt. Kalkulator trójkąta 30-60-90 na tej stronie wykorzystuje ten stosunek, aby znaleźć krótszą przyprostokątną, dłuższą przyprostokątną, przeciwprostokątną, pole i obwód na podstawie jednej długości boku, którą wprowadzisz.",
            },
            {
              "kind": "p",
              "text": "W trójkącie ABC kąt A ma 30°, kąt B ma 60°, a kąt C ma 90°. Bok BC to krótsza przyprostokątna [[a]], leżąca naprzeciw kąta 30°. Bok AC to dłuższa przyprostokątna [[b]], leżąca naprzeciw kąta 60°. Bok AB to przeciwprostokątna [[c]], leżąca naprzeciw kąta 90°. Trzy boki zawsze spełniają [[a : b : c = 1 : \\sqrt{3} : 2]], co oznacza, że [[b = a\\sqrt{3}]] oraz [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Jeśli [[a = 5]] cm, to [[b = 5\\sqrt{3} \\approx 8.660]] cm oraz [[c = 2 \\times 5 = 10]] cm. Kalkulator może też obliczyć pole i obwód na podstawie tej samej krótszej przyprostokątnej, więc jeden pomiar wystarczy, aby opisać cały trójkąt. Poniższe sekcje wyjaśniają stosunek, siedem trybów kalkulatora i wzory, z przykładami krok po kroku na każdym etapie.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Oblicz brakujące boki, pole i obwód",
          "blocks": [
            {
              "kind": "p",
              "text": "Siedem trybów obejmuje każdy sposób rozpoczęcia od jednego znanego boku.",
            },
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie ma siedem trybów, po jednym dla każdego pomiaru, który potrafi znaleźć. Wybierz tryb odpowiadający znanemu bokowi i potrzebnemu pomiarowi. Każdy tryb wymaga tylko jednego wejścia, ponieważ stały stosunek uzupełnia wszystko pozostałe. Poniższa tabela zawiera wszystkie siedem trybów wraz z danymi wejściowymi, których potrzebuje każdy z nich, oraz wynikiem, który zwraca.",
            },
            {
              "kind": "p",
              "text": "Aby użyć trybu, najpierw ustal, który bok znasz. Bok leżący naprzeciw kąta 30° to krótsza przyprostokątna [[a]], bok leżący naprzeciw kąta 60° to dłuższa przyprostokątna [[b]], a bok leżący naprzeciw kąta 90° to przeciwprostokątna [[c]]. Wprowadź ten pomiar jako liczbę dodatnią, wybierz jednostkę i kliknij przycisk Oblicz. Wynik pojawi się wraz z rozwiązaniem krok po kroku, dzięki czemu zobaczysz wzór i podstawienie, a nie tylko odpowiedź. Użyj przycisku Resetuj, aby wyczyścić pola przed rozpoczęciem nowego zadania.",
            },
            {
              "kind": "p",
              "text": "Różne tryby wymagają różnych wzorów, ponieważ każdy z nich zaczyna się od innego znanego boku. Znalezienie dłuższej przyprostokątnej na podstawie krótszej wymaga pomnożenia przez √3, natomiast znalezienie krótszej przyprostokątnej na podstawie przeciwprostokątnej wymaga podzielenia przez 2. Tryby pola i obwodu zaczynają się od krótszej przyprostokątnej i najpierw obliczają pozostałe boki wewnętrznie, a następnie stosują wzór na pole lub obwód. Nigdy nie musisz samodzielnie obliczać brakujących boków przed użyciem tych dwóch trybów.",
            },
          ],
          "table": {
            "headers": [
              "Tryb kalkulatora",
              "Wymagane dane wejściowe",
              "Wynik",
            ],
            "rows": [
              [
                "Dłuższa przyprostokątna z krótszej przyprostokątnej",
                "Krótsza przyprostokątna a",
                "Dłuższa przyprostokątna b",
              ],
              [
                "Przeciwprostokątna z krótszej przyprostokątnej",
                "Krótsza przyprostokątna a",
                "Przeciwprostokątna c",
              ],
              [
                "Krótsza przyprostokątna z przeciwprostokątnej",
                "Przeciwprostokątna c",
                "Krótsza przyprostokątna a",
              ],
              [
                "Krótsza przyprostokątna z dłuższej przyprostokątnej",
                "Dłuższa przyprostokątna b",
                "Krótsza przyprostokątna a",
              ],
              [
                "Dłuższa przyprostokątna z przeciwprostokątnej",
                "Przeciwprostokątna c",
                "Dłuższa przyprostokątna b",
              ],
              [
                "Pole z krótszej przyprostokątnej",
                "Krótsza przyprostokątna a",
                "Pole A",
              ],
              [
                "Obwód z krótszej przyprostokątnej",
                "Krótsza przyprostokątna a",
                "Obwód P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Przegląd siedmiu trybów kalkulatora trójkąta 30-60-90 pokazujący znane dane wejściowe i obliczane wyniki dla każdego trybu",
            "caption": "Siedem trybów: każdy z nich zaczyna się od jednego znanego boku i znajduje jeden brakujący pomiar.",
          },
        },
        "sec-what": {
          "h2": "Co to jest trójkąt 30-60-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 nosi nazwę od swoich trzech kątów.",
            },
            {
              "kind": "p",
              "text": "Jest to trójkąt prostokątny, co oznacza, że jeden z jego kątów ma dokładnie 90°. Pozostałe dwa kąty mają 30° i 60°, a nazwa wymienia wszystkie trzy w kolejności. Ponieważ kąt prosty jest ustalony, a pozostałe dwa kąty również są ustalone, kształt trójkąta jest w pełni określony: każdy trójkąt 30-60-90 ma ten sam kształt, a dwa takie trójkąty różnią się tylko rozmiarem.",
            },
            {
              "kind": "p",
              "text": "Nazywa się go specjalnym trójkątem prostokątnym, ponieważ długości jego boków podlegają stałemu stosunkowi. W większości trójkątów prostokątnych znajomość jednego boku nic nie mówi o pozostałych. W trójkącie 30-60-90 znajomość jednego boku mówi o wszystkich, ponieważ stosunek [[1 : \\sqrt{3} : 2]] wiąże ze sobą trzy boki. Dlatego kalkulator potrafi znaleźć pięć pomiarów na podstawie jednego wejścia.",
            },
            {
              "kind": "p",
              "text": "Trzy kąty sumują się do 180°, jak muszą w każdym trójkącie: [[30° + 60° + 90° = 180°]]. Trójkąt może być mały jak kilka milimetrów albo duży jak działka budowlana, a kąty pozostają takie same, podczas gdy boki skalują się razem. Stosunek też pozostaje taki sam, więc trójkąt o krótszej przyprostokątnej 5 cm i trójkąt o krótszej przyprostokątnej 5 m mają ten sam kształt przy różnych rozmiarach.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Oznaczony trójkąt ABC 30-60-90 o kątach 30, 60 i 90 stopni, krótszej przyprostokątnej a, dłuższej przyprostokątnej a razy pierwiastek kwadratowy z 3 oraz przeciwprostokątnej 2a",
            "caption": "Trójkąt ABC: kąty 30°, 60° i 90°, o bokach a, a√3 i 2a.",
          },
        },
        "sec-sides": {
          "h2": "Krótsza przyprostokątna, dłuższa przyprostokątna i przeciwprostokątna",
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy boki biorą swoje nazwy od kątów leżących naprzeciw nich.",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna [[a]] to bok leżący naprzeciw kąta 30°. Jest to najkrótszy bok trójkąta, ponieważ najmniejszy kąt zawsze leży naprzeciw najkrótszego boku. W trójkącie ABC jest to bok BC. Krótsza przyprostokątna jest naturalnym punktem wyjścia dla większości obliczeń, ponieważ pozostałe dwa boki są jej prostymi wielokrotnościami: dłuższa przyprostokątna to [[a\\sqrt{3}]], a przeciwprostokątna to [[2a]].",
            },
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna [[b]] to bok leżący naprzeciw kąta 60°. Jest dłuższa od krótszej przyprostokątnej i krótsza od przeciwprostokątnej. W trójkącie ABC jest to bok AC. Jej długość to [[\\sqrt{3} \\approx 1.732]] razy krótsza przyprostokątna, więc jest nieco mniej niż dwa razy dłuższa. Przeciwprostokątna [[c]] to bok leżący naprzeciw kąta 90°, bok AB, i jest to najdłuższy bok trójkąta, dokładnie dwa razy dłuższy od krótszej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Rozpoznawanie boków po kątach leżących naprzeciw nich jest bardziej niezawodne niż ocenianie na podstawie rysunku. Trójkąt można obrócić lub odwrócić, więc krótsza przyprostokątna może pojawić się po lewej, po prawej lub na dole. Zasada kąta przeciwległego nigdy się nie zmienia: znajdź kąt 30°, a bok naprzeciw niego to krótsza przyprostokątna. Znajdź kąt 90°, oznaczony małym kwadratem, a bok naprzeciw niego to przeciwprostokątna.",
            },
          ],
          "table": {
            "headers": [
              "Bok",
              "Kąt przeciwległy",
              "Rozmiar",
            ],
            "rows": [
              [
                "Krótsza przyprostokątna a",
                "30°",
                "Najmniejszy",
              ],
              [
                "Dłuższa przyprostokątna b",
                "60°",
                "Średni",
              ],
              [
                "Przeciwprostokątna c",
                "90°",
                "Najdłuższy",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Stosunek boków trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek 1:√3:2 ustala każdy trójkąt 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Stosunek boków trójkąta 30-60-90 wynosi:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Każda część stosunku opisuje jeden bok. Krótsza przyprostokątna stanowi jedną jednostkę, dłuższa przyprostokątna stanowi √3 jednostki, a przeciwprostokątna stanowi dwie jednostki. Zapisane z krótszą przyprostokątną jako [[a]], trzy boki to [[a = a]], [[b = a\\sqrt{3}]] oraz [[c = 2a]]. Jeśli krótsza przyprostokątna ma 1 cm, dłuższa przyprostokątna ma √3 cm, a przeciwprostokątna ma 2 cm. Jeśli krótsza przyprostokątna ma 10 cm, dłuższa przyprostokątna ma [[10\\sqrt{3}]] cm, a przeciwprostokątna ma 20 cm.",
            },
            {
              "kind": "p",
              "text": "Stosunek pozostaje taki sam niezależnie od rozmiaru trójkąta, ponieważ wszystkie trójkąty 30-60-90 są podobne. Powiększanie lub pomniejszanie trójkąta mnoży każdy bok przez ten sam współczynnik, więc proporcje między bokami się nie zmieniają. Weźmy [[a = 4]] cm jako przykład: dłuższa przyprostokątna to [[b = 4\\sqrt{3} \\approx 6.928]] cm, a przeciwprostokątna to [[c = 8]] cm, a stosunek [[4 : 6.928 : 8]] jest taki sam jak [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Zachowuj dokładną postać pierwiastkową, kiedy tylko możesz. √3 to w przybliżeniu 1.732, ale jest to liczba niewymierna, więc żaden ułamek dziesiętny nie jest jej dokładnie równy. Zapisanie [[4\\sqrt{3}]] cm jest dokładne, natomiast 6.928 cm to zaokrąglone przybliżenie. Używaj dokładnej postaci w obliczeniach i w odpowiedziach końcowych, gdy pytanie wymaga dokładnej wartości, a ułamek dziesiętny podawaj tylko wtedy, gdy potrzebna jest przybliżona odpowiedź.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Trzy słupki porównujące krótszą przyprostokątną, dłuższą przyprostokątną i przeciwprostokątną w stosunku 1 do pierwiastka kwadratowego z 3 do 2",
            "caption": "Stały stosunek 1:√3:2 porównuje krótszą przyprostokątną, dłuższą przyprostokątną i przeciwprostokątną.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Dlaczego pojawia się pierwiastek kwadratowy z 3?",
          "blocks": [
            {
              "kind": "p",
              "text": "Pierwiastek kwadratowy z 3 pochodzi z przecięcia trójkąta równobocznego na pół.",
            },
            {
              "kind": "p",
              "text": "Zacznij od trójkąta równobocznego o długości boku [[2a]]. Wszystkie trzy boki są równe, a wszystkie trzy kąty mają 60°. Teraz narysuj wysokość z jednego wierzchołka na przeciwległy bok. Wysokość to odcinek z wierzchołka, który spotyka przeciwległy bok pod kątem prostym.",
            },
            {
              "kind": "p",
              "text": "Wysokość dzieli podstawę na pół, dzieląc ją na dwa równe odcinki o długości [[a]]. Dzieli też trójkąt równoboczny na dwa przystające trójkąty prostokątne. Każdy mniejszy trójkąt ma kąty 30°, 60° i 90°: kąt 60° przy podstawie pozostaje, wysokość tworzy kąt 90° w miejscu, w którym spotyka podstawę, a kąt 60° u góry dzieli się na dwa kąty 30°. Przeciwprostokątna każdego małego trójkąta to bok trójkąta równobocznego, [[2a]], a krótsza przyprostokątna to połowa podstawy, [[a]].",
            },
            {
              "kind": "p",
              "text": "Pozostała przyprostokątna małego trójkąta to sama wysokość. Oznaczmy ją jako [[b]] i zastosujmy twierdzenie Pitagorasa:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Liczba 3 wewnątrz pierwiastka kwadratowego pochodzi z [[4a^2 - a^2 = 3a^2]], różnicy między kwadratem przeciwprostokątnej a kwadratem krótszej przyprostokątnej. To jest cała przyczyna, dla której √3 pojawia się w każdym wzorze dla trójkąta 30-60-90: dłuższa przyprostokątna jest wysokością trójkąta równobocznego, a twierdzenie Pitagorasa wymusza, aby była równa [[a\\sqrt{3}]]. Wyprowadzenie dowodzi też stosunku boków, ponieważ trzy boki małego trójkąta to teraz [[a]], [[a\\sqrt{3}]] oraz [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Trójkąt równoboczny o boku 2a podzielony wysokością na dwa przystające trójkąty 30-60-90 o wysokości a razy pierwiastek kwadratowy z 3",
            "caption": "Wysokość dzieli trójkąt równoboczny o boku 2a na dwa trójkąty 30-60-90.",
          },
        },
        "sec-long-leg": {
          "h2": "Wzór na dłuższą przyprostokątną z krótszej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Pomnóż krótszą przyprostokątną przez √3, aby otrzymać dłuższą przyprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[b]] to dłuższa przyprostokątna, a [[a]] to krótsza przyprostokątna. Wzór jest bezpośrednim odczytaniem stosunku boków: dłuższa przyprostokątna stanowi √3 jednostki na każdą 1 jednostkę krótszej przyprostokątnej, więc dłuższa przyprostokątna jest √3 razy dłuższa od krótszej. Mnożenie jest konieczne, ponieważ stosunek jest zależnością skalowania, a √3 pojawia się, ponieważ dłuższa przyprostokątna jest wysokością trójkąta równobocznego, który tworzy ten trójkąt.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 5]] cm jako przykład:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wynik jest dłuższy od krótszej przyprostokątnej, jak musi być: √3 to około 1.732, więc pomnożenie przez tę liczbę zwiększa długość. Dokładna odpowiedź to [[5\\sqrt{3}]] cm, a 8.660 cm to przybliżenie dziesiętne. Zachowaj dokładną postać, gdy pytanie jej wymaga, a ułamek dziesiętny zaokrąglaj tylko na końcu obliczeń, nigdy w środku.",
            },
            {
              "kind": "p",
              "text": "Używaj tego trybu, gdy krótsza przyprostokątna jest znanym bokiem, a dłuższa przyprostokątna jest bokiem nieznanym. W zadaniu z podręcznika krótsza przyprostokątna to zwykle bok leżący naprzeciw kąta 30°, więc przed pomnożeniem sprawdź kąt. Szybka kontrola pomaga: dłuższa przyprostokątna powinna wyjść nieco mniej niż dwa razy dłuższa od krótszej, ponieważ √3 jest nieco mniejsze od 2. Jeśli Twoja odpowiedź jest ponad dwa razy większa od krótszej przyprostokątnej, pomnożyłeś przez niewłaściwą liczbę.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Trójkąt 30-60-90 o krótszej przyprostokątnej 5 cm i dłuższej przyprostokątnej oznaczonej jako 5 razy pierwiastek kwadratowy z 3, około 8.660 cm",
            "caption": "Dłuższa przyprostokątna z krótszej przyprostokątnej: a = 5 cm daje b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Wzór na przeciwprostokątną z krótszej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Podwój krótszą przyprostokątną, aby otrzymać przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[c]] to przeciwprostokątna, a [[a]] to krótsza przyprostokątna. Przeciwprostokątna jest zawsze dokładnie dwa razy dłuższa od krótszej przyprostokątnej, bez żadnego pierwiastka kwadratowego. Jest to najprostszy ze wzorów dla trójkąta 30-60-90, a także najbardziej przydatny do szybkich kontroli w pamięci.",
            },
            {
              "kind": "p",
              "text": "Przyczyna sięga do trójkąta równobocznego. Przeciwprostokątna trójkąta 30-60-90 to jeden pełny bok trójkąta równobocznego, natomiast krótsza przyprostokątna to połowa boku, ponieważ wysokość dzieli podstawę na pół. Cały bok jest dwa razy dłuższy od połowy boku, więc przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej. Weźmy [[a = 7]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Odpowiedź jest dokładna, bez zaokrąglania, ponieważ podwojenie liczby całkowitej daje liczbę całkowitą. Jeśli krótsza przyprostokątna jest ułamkiem dziesiętnym, przeciwprostokątna jest nadal dokładnie dwa razy dłuższa, więc [[a = 2.5]] cm daje [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Ten tryb wybieraj, gdy zadanie podaje krótszą przyprostokątną i pyta o najdłuższy bok. Ponieważ odpowiedź to proste podwojenie, jest to też najszybszy sposób wykrycia błędnej krótszej przyprostokątnej: jeśli przeciwprostokątna w zadaniu nie jest dwa razy dłuższa od Twojej krótszej przyprostokątnej, albo krótsza przyprostokątna jest błędna, albo trójkąt nie jest trójkątem 30-60-90. Sprawdź kąty, zanim zaufasz podwojeniu.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Trójkąt 30-60-90 o krótszej przyprostokątnej 5 cm i przeciwprostokątnej oznaczonej jako 2a równe 10 cm",
            "caption": "Przeciwprostokątna z krótszej przyprostokątnej: c = 2a, więc a = 5 cm daje c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Wzór na krótszą przyprostokątną z przeciwprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Podziel przeciwprostokątną na pół, aby otrzymać krótszą przyprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[a]] to krótsza przyprostokątna, a [[c]] to przeciwprostokątna. Ten wzór jest odwrotnością [[c = 2a]]: skoro przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej, krótsza przyprostokątna jest połową przeciwprostokątnej. Przekształcenie [[c = 2a]] przez podzielenie obu stron przez 2 daje [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Weźmy [[c = 18]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Odpowiedź jest dokładna, bez pierwiastka kwadratowego i bez zaokrąglania. Ta zależność dotyczy konkretnie trójkątów 30-60-90. W ogólnym trójkącie prostokątnym przeciwprostokątna nie jest dwa razy dłuższa od krótszej przyprostokątnej, więc nie używaj tego wzoru, dopóki nie wiesz, że kąty mają 30°, 60° i 90°. Jeśli przeciwprostokątna jest liczbą nieparzystą, krótsza przyprostokątna jest wartością połówkową, na przykład [[c = 15]] cm daje [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Ten tryb jest punktem wyjścia dla większości zadań, które podają przeciwprostokątną. Gdy krótsza przyprostokątna jest znana, dłuższa przyprostokątna wynika z [[b = a\\sqrt{3}]], a pole i obwód z ich własnych wzorów. Odpowiedź połówkowa jest tu normalna i nie jest oznaką błędu, więc nie zaokrąglaj 7.5 cm do 8 cm: dokładna połowa jest poprawną odpowiedzią.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Wzór na krótszą przyprostokątną z dłuższej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Podziel dłuższą przyprostokątną przez √3, aby otrzymać krótszą przyprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[a]] to krótsza przyprostokątna, a [[b]] to dłuższa przyprostokątna. Ten wzór pochodzi z przekształcenia [[b = a\\sqrt{3}]]: podzielenie obu stron przez √3 wyodrębnia [[a]]. Dzielenie przez √3 odwraca pierwotne mnożenie, więc dokładnie cofa to, co zrobił wzór wprost.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Usuń niewymierność z mianownika, mnożąc licznik i mianownik przez √3: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, co w przybliżeniu wynosi 6.928 cm. Dokładna odpowiedź to [[4\\sqrt{3}]] cm, a 6.928 cm to postać dziesiętna. Krótsza przyprostokątna jest mniejsza od dłuższej, jak musi być, ponieważ dzielenie przez liczbę większą od 1 zmniejsza wartość.",
            },
            {
              "kind": "p",
              "text": "Usuwanie niewymierności warto robić, ponieważ pozostawia odpowiedź w standardowej dokładnej postaci, liczbie całkowitej razy √3. Przybliżenie dziesiętne ukrywa tę strukturę, a nieusunięty ułamek z √3 w mianowniku nie jest postacią, której oczekują odpowiedzi egzaminacyjne. Gdy dłuższa przyprostokątna jest już wielokrotnością √3, dzielenie jest czyste: [[b = 9\\sqrt{3}]] cm daje [[a = 9]] cm bezpośrednio.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Wzór na dłuższą przyprostokątną z przeciwprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Pomnóż połowę przeciwprostokątnej przez √3, aby otrzymać dłuższą przyprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[b]] to dłuższa przyprostokątna, a [[c]] to przeciwprostokątna. Ten wzór składa się z dwóch kroków. Najpierw znajdź krótszą przyprostokątną za pomocą [[a = \\frac{c}{2}]], a następnie znajdź dłuższą przyprostokątną za pomocą [[b = a\\sqrt{3}]]. Podstawienie pierwszego wzoru do drugiego daje [[b = \\frac{c}{2}\\sqrt{3}]], co jest tym samym co [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Weźmy [[c = 16]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wynik znajduje się między krótszą przyprostokątną a przeciwprostokątną, jak powinien. Krótsza przyprostokątna wynosi tu [[a = 8]] cm, dłuższa przyprostokątna to około 13.856 cm, a przeciwprostokątna to 16 cm, więc [[8 < 13.856 < 16]]. Ta kolejność jest szybką kontrolą każdej odpowiedzi z tego wzoru.",
            },
            {
              "kind": "p",
              "text": "Wykonywanie obliczeń w dwóch krokach to dobry nawyk, choć pojedynczy wzór robi obie rzeczy naraz. Znajdź najpierw krótszą przyprostokątną, [[a = \\frac{c}{2} = 8]] cm, a następnie pomnóż przez √3. Jeśli droga dwuetapowa i pojedynczy wzór nie zgadzają się, błąd leży w arytmetyce, a nie we wzorze, a droga dwuetapowa pokazuje dokładnie, gdzie on powstał.",
            },
          ],
        },
        "sec-area": {
          "h2": "Jak obliczyć pole trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Pole potrzebuje tylko krótszej przyprostokątnej, ponieważ dłuższa przyprostokątna wynika z niej.",
            },
            {
              "kind": "p",
              "text": "Pole każdego trójkąta prostokątnego to połowa iloczynu jego dwóch przyprostokątnych, ponieważ przyprostokątne pełnią rolę podstawy i prostopadłej wysokości:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[b = a\\sqrt{3}]], podstawienie daje pole wyrażone tylko przez krótszą przyprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dzielenie przez dwa jest konieczne, ponieważ trójkąt pokrywa połowę prostokąta utworzonego przez jego dwie przyprostokątne. Końcowe pole wyraża się w jednostkach kwadratowych, takich jak centymetry kwadratowe, ponieważ pole mierzy powierzchnię, a nie długość. Weźmy [[a = 6]] cm. Najpierw znajdź dłuższą przyprostokątną, [[b = 6\\sqrt{3}]] cm, a następnie oblicz:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Tryb pola w kalkulatorze przyjmuje krótszą przyprostokątną i oblicza dłuższą przyprostokątną wewnętrznie, więc wprowadzasz tylko [[a]], a kalkulator robi resztę. Jeśli znasz dłuższą przyprostokątną zamiast krótszej, użyj <a href=\"/right-triangle-area-calculator/\">kalkulatora pola trójkąta prostokątnego</a>, który przyjmuje obie przyprostokątne bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Pole rośnie wraz z kwadratem krótszej przyprostokątnej, więc podwojenie krótszej przyprostokątnej poczwórnie zwiększa pole. Trójkąt o [[a = 12]] cm ma cztery razy większe pole niż trójkąt o [[a = 6]] cm, około 124.708 cm², a nie dwa razy większe. Tę kwadratową zależność łatwo zapomnieć, więc sprawdzaj ją za każdym razem, gdy zadanie powiększa lub pomniejsza trójkąt.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Trójkąt 30-60-90 o krótszej przyprostokątnej 6 cm i dłuższej przyprostokątnej 6 razy pierwiastek kwadratowy z 3 cm jako podstawa i wysokość, pole 18 razy pierwiastek kwadratowy z 3 centymetry kwadratowe",
            "caption": "Pole z krótszej przyprostokątnej: a = 6 cm daje A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Jak obliczyć obwód trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dodaj wszystkie trzy boki, a następnie wyciągnij krótszą przyprostokątną przed nawias.",
            },
            {
              "kind": "p",
              "text": "Obwód to całkowita długość wokół trójkąta:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw zależności charakterystyczne dla tego trójkąta, [[b = a\\sqrt{3}]] oraz [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Połącz wyrazy podobne, aby otrzymać postać uproszczoną:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Uwzględnione są wszystkie trzy długości boków, ponieważ obwód biegnie wzdłuż całej granicy trójkąta: w dół krótszej przyprostokątnej, w poprzek dłuższej przyprostokątnej i z powrotem wzdłuż przeciwprostokątnej. Pominięcie któregokolwiek boku daje krótszą odległość, która nie jest obwodem. Obwód jest pomiarem liniowym, a nie pomiarem pola, więc odpowiedź podaje się w zwykłych jednostkach, takich jak centymetry, nigdy w centymetrach kwadratowych.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Dokładna postać to [[5(3 + \\sqrt{3})]] cm, a 23.660 cm to postać dziesiętna. Tryb obwodu w kalkulatorze przyjmuje krótszą przyprostokątną i dodaje trzy boki wewnętrznie. Jeśli znasz już wszystkie trzy boki, <a href=\"/right-triangle-perimeter-calculator/\">kalkulator obwodu trójkąta prostokątnego</a> dodaje je bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Obwód rośnie wprost proporcjonalnie do krótszej przyprostokątnej, więc podwojenie krótszej przyprostokątnej podwaja obwód. Trójkąt o [[a = 10]] cm ma obwód około 47.321 cm, dokładnie dwa razy większy niż 23.660 cm trójkąta o [[a = 5]] cm. To liniowe skalowanie jest przydatną kontrolą: jeśli podwojenie krótszej przyprostokątnej nie podwaja Twojego obwodu, arytmetyka gdzieś poszła nie tak.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Trójkąt 30-60-90 ze wszystkimi trzema bokami oznaczonymi jako 5 cm, 5 razy pierwiastek kwadratowy z 3 cm i 10 cm, obwód około 23.660 cm",
            "caption": "Obwód z krótszej przyprostokątnej: a = 5 cm daje P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Przykład krok po kroku rozwiązywania trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Jeden trójkąt, a = 5 cm, rozwiązany od początku do końca.",
            },
            {
              "kind": "p",
              "text": "Zacznij od krótszej przyprostokątnej [[a = 5]] cm i znajdź każdy inny pomiar trójkąta, po jednym wzorze naraz. Każdy krok wykorzystuje wzór z powyższych sekcji, a tabela podsumowująca na końcu zbiera wyniki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Znajdź dłuższą przyprostokątną: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Znajdź przeciwprostokątną: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Znajdź pole: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] centymetrów kwadratowych.",
                "Znajdź obwód: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Wszystkie cztery pomiary opisują ten sam trójkąt. Boki [[5]], [[8.660]] i [[10]] spełniają stosunek [[1 : \\sqrt{3} : 2]] oraz twierdzenie Pitagorasa, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. Pole i obwód to dwa różne rodzaje pomiarów tego samego trójkąta: pole obejmuje jego powierzchnię, natomiast obwód biegnie wzdłuż jego granicy.",
            },
          ],
          "table": {
            "headers": [
              "Pomiar",
              "Wartość dokładna",
              "Wartość przybliżona",
            ],
            "rows": [
              [
                "Krótsza przyprostokątna a",
                "5 cm",
                "5 cm",
              ],
              [
                "Dłuższa przyprostokątna b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Przeciwprostokątna c",
                "10 cm",
                "10 cm",
              ],
              [
                "Pole A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Obwód P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Przykłady obliczeń dla trójkąta 30-60-90 z rozwiązaniami",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem przykładów z rozwiązaniami, po jednym dla każdego trybu kalkulatora plus większy przypadek.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Znajdź dłuższą przyprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 4]] cm. Wzór: [[b = a\\sqrt{3}]]. Podstawienie: [[b = 4\\sqrt{3}]]. Wynik: [[b \\approx 6.928]] cm. Dłuższa przyprostokątna jest około 1.732 razy dłuższa od krótszej, więc 4 cm staje się około 6.928 cm. Dokładna odpowiedź to [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Znajdź przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 9]] cm. Wzór: [[c = 2a]]. Podstawienie: [[c = 2 \\times 9]]. Wynik: [[c = 18]] cm. Przeciwprostokątna jest dokładnie dwa razy dłuższa od krótszej przyprostokątnej, więc odpowiedź nie wymaga zaokrąglania. To najszybsza kontrola w całym temacie: każda przeciwprostokątna, która nie jest dwa razy dłuższa od krótszej przyprostokątnej, sygnalizuje błąd.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Znajdź krótszą przyprostokątną z przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 20]] cm. Wzór: [[a = \\frac{c}{2}]]. Podstawienie: [[a = \\frac{20}{2}]]. Wynik: [[a = 10]] cm. Podzielenie przeciwprostokątnej na pół odwraca podwojenie z przykładu 2. Krótsza przyprostokątna jest dokładnie połową przeciwprostokątnej, więc odpowiedź jest dokładna.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Znajdź krótszą przyprostokątną z dłuższej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane [[b = 15]] cm. Wzór: [[a = \\frac{b}{\\sqrt{3}}]]. Podstawienie: [[a = \\frac{15}{\\sqrt{3}}]]. Po usunięciu niewymierności otrzymujemy [[a = 5\\sqrt{3}]] cm, więc wynik to [[a \\approx 8.660]] cm. Dzielenie przez √3 zmniejsza dłuższą przyprostokątną z powrotem do krótszej, co jest odwrotnością mnożenia przez √3.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Znajdź dłuższą przyprostokątną z przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 12]] cm. Wzór: [[b = \\frac{c\\sqrt{3}}{2}]]. Podstawienie: [[b = \\frac{12\\sqrt{3}}{2}]]. Wynik: [[b = 6\\sqrt{3} \\approx 10.392]] cm. Dłuższa przyprostokątna znajduje się między krótszą przyprostokątną, [[a = 6]] cm, a przeciwprostokątną, 12 cm, co potwierdza kolejność [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Oblicz pole",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 8]] cm. Wzór: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Podstawienie: [[A = \\frac{64\\sqrt{3}}{2}]]. Wynik: [[A = 32\\sqrt{3} \\approx 55.426]] centymetrów kwadratowych. Dokładna odpowiedź to [[32\\sqrt{3}]] cm², a ułamek dziesiętny zaokrąglono do trzech miejsc. Pole podaje się w jednostkach kwadratowych, w przeciwieństwie do długości boków.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Oblicz obwód",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 3]] cm. Wzór: [[P = a(3 + \\sqrt{3})]]. Podstawienie: [[P = 3(3 + \\sqrt{3})]]. Wynik: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Dodawanie boków po kolei daje ten sam wynik: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Obwód podaje się w zwykłych jednostkach, a nie w jednostkach kwadratowych.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Większe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 10]] m. Wzór: [[b = a\\sqrt{3}]] oraz [[c = 2a]]. Podstawienie: [[b = 10\\sqrt{3}]] m oraz [[c = 2 \\times 10]] m. Wynik: [[b \\approx 17.321]] m oraz [[c = 20]] m. Stosunek działa w każdej skali: ten trójkąt to podwojony trójkąt o [[a = 5]] cm, więc każdy bok jest dwa razy dłuższy, a stosunek [[1 : \\sqrt{3} : 2]] pozostaje bez zmian.",
            },
            {
              "kind": "p",
              "text": "Dokładne odpowiedzi i przybliżenia dziesiętne służą różnym celom. Dokładna postać, taka jak [[4\\sqrt{3}]] cm, jest precyzyjna i jest tym, czego zwykle wymagają odpowiedzi egzaminacyjne. Postać dziesiętna, taka jak 6.928 cm, jest łatwiejsza do wyobrażenia i do zmierzenia linijką. Podawaj najpierw dokładną postać, potem ułamek dziesiętny, a ułamek dziesiętny zaokrąglaj tylko w ostatnim kroku.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Jak wyprowadzić stosunek trójkąta 30-60-90 za pomocą twierdzenia Pitagorasa",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek wynika z twierdzenia Pitagorasa plus jednego faktu: przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Niech [[a]] będzie krótszą przyprostokątną, [[b]] dłuższą przyprostokątną, a [[c]] przeciwprostokątną. Z konstrukcji trójkąta równobocznego przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Teraz zastosuj twierdzenie Pitagorasa, które obowiązuje dla każdego trójkąta prostokątnego:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Przekształć, odejmując [[a^2]] od obu stron:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Weź pierwiastek kwadratowy z obu stron. Długości są dodatnie, więc ujemny pierwiastek odrzucamy:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Trzy boki to teraz [[a]], [[a\\sqrt{3}]] oraz [[2a]], co daje stosunek [[a : b : c = 1 : \\sqrt{3} : 2]]. Każdy wzór na długość boku na tej stronie pochodzi z tej ustalonej zależności: wzór na dłuższą przyprostokątną odczytuje ją bezpośrednio, wzór na przeciwprostokątną jest faktem wyjściowym, a wzory na pole i obwód podstawiają dwa wyrażenia na boki. <a href=\"/pythagorean-theorem-calculator/\">Kalkulator twierdzenia Pitagorasa</a> sprawdza tę samą zależność dla dowolnego trójkąta prostokątnego.",
            },
            {
              "kind": "p",
              "text": "Dowód potrzebuje tylko dwóch składników, a oba łatwo sformułować. Pierwszym jest fakt [[c = 2a]], który pochodzi z trójkąta równobocznego. Drugim jest twierdzenie Pitagorasa, które obowiązuje dla każdego trójkąta prostokątnego. Nic więcej nie jest zakładane, więc dowód pokazuje, że stosunek jest wymuszony wyłącznie przez te dwa fakty, a nie przez szczególny przypadek czy zbieg okoliczności.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Związek między trójkątami 30-60-90 a trójkątami równobocznymi",
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy trójkąt 30-60-90 to połowa trójkąta równobocznego.",
            },
            {
              "kind": "p",
              "text": "Trójkąt równoboczny ma trzy równe boki i trzy równe kąty po 60°. Narysuj wysokość z jednego wierzchołka na przeciwległy bok, a wysokość podzieli podstawę na dwie równe połowy. Dzieli też kąt 60° przy górnym wierzchołku na dwa kąty 30°. Wynikiem są dwa przystające trójkąty prostokątne, każdy o kątach 30°, 60° i 90°.",
            },
            {
              "kind": "p",
              "text": "Każda połowa zachowuje jeden pełny bok trójkąta równobocznego jako przeciwprostokątną, przyjmuje połowę boku jako krótszą przyprostokątną i wykorzystuje wysokość jako dłuższą przyprostokątną. Dlatego przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej, a dłuższa przyprostokątna to [[a\\sqrt{3}]]. Zależność z √3 pojawia się, ponieważ wysokość trójkąta równobocznego jest zawsze równa [[\\frac{\\sqrt{3}}{2}]] długości boku, co jest tym samym faktem zapisanym innymi literami.",
            },
            {
              "kind": "p",
              "text": "Ta konstrukcja jest przydatna w geometrii i trygonometrii, ponieważ zamienia trójkąt równoboczny w źródło dokładnych wartości. Wysokość trójkąta równobocznego o boku 10 cm to [[5\\sqrt{3} \\approx 8.660]] cm, znaleziona przez potraktowanie jego połowy jako trójkąta 30-60-90 o krótszej przyprostokątnej 5 cm. Ta sama konstrukcja daje dokładne wartości sinusa, cosinusa i tangensa dla 30° i 60°, dlatego te wartości pojawiają się w każdej tablicy trygonometrycznej.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Zależności trygonometryczne w trójkącie 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Stały stosunek daje dokładne wartości sinusa, cosinusa i tangensa dla 30° i 60°.",
            },
            {
              "kind": "p",
              "text": "Stosunki trygonometryczne porównują boki trójkąta prostokątnego. Sinus to bok przeciwległy przez przeciwprostokątną, cosinus to bok przyległy przez przeciwprostokątną, a tangens to bok przeciwległy przez bok przyległy. Ponieważ boki trójkąta 30-60-90 zawsze pozostają w stosunku [[1 : \\sqrt{3} : 2]], te porównania zawsze dają te same wartości, niezależnie od rozmiaru trójkąta.",
            },
            {
              "kind": "p",
              "text": "Dla kąta 30° bokiem przeciwległym jest krótsza przyprostokątna [[a]], a bokiem przyległym jest dłuższa przyprostokątna [[b]], więc [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] oraz [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Dla kąta 60° boki przeciwległy i przyległy zamieniają się miejscami, więc [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] oraz [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Zauważ symetrię: [[\\sin 30° = \\cos 60°]] oraz [[\\cos 30° = \\sin 60°]], ponieważ dwa kąty ostre są dopełniające się i sumują się do 90°. Te wartości dokładnie zgadzają się ze stałym stosunkiem boków, co jest dobrą kontrolą krzyżową: jeśli wartość sinusa nie zgadza się ze stosunkiem, jedna z tych dwóch wartości jest błędna. Traktuj tę sekcję jako tło: kalkulator na tej stronie znajduje boki, pole i obwód, a nie oblicza funkcji trygonometrycznych jako trybu.",
            },
          ],
          "table": {
            "headers": [
              "Kąt",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "Jak sprawdzić obliczenia dla trójkąta 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery szybkie kontrole wychwytują prawie każdy błąd.",
            },
            {
              "kind": "p",
              "text": "Wykonaj co najmniej jedną kontrolę przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. Poniższy przykład używa w całości trójkąta o [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm i [[c = 10]] cm.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 1: Stosunek boków",
            },
            {
              "kind": "p",
              "text": "Podziel dłuższą przyprostokątną przez krótszą przyprostokątną, a przeciwprostokątną przez krótszą przyprostokątną: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] oraz [[\\frac{c}{a} = 2]]. Tutaj [[\\frac{8.660}{5} \\approx 1.732]] oraz [[\\frac{10}{5} = 2]], więc stosunek się zgadza. Jeśli którekolwiek dzielenie daje inną wartość, jeden z boków jest błędny.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 2: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[a^2 + b^2 = c^2]]. Tutaj [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], więc twierdzenie się zgadza. Ta kontrola wychwytuje zamienione przyprostokątne, ponieważ użycie błędnej wartości [[b]] narusza równość. <a href=\"/pythagorean-theorem-calculator/\">Kalkulator twierdzenia Pitagorasa</a> wykonuje tę kontrolę dla dowolnych trzech długości boków.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 3: Suma kątów",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[30° + 60° + 90° = 180°]]. Ta kontrola dotyczy ustawienia zadania, a nie arytmetyki: jeśli kąty Twojego trójkąta nie sumują się do 180° albo nie mają 30°, 60° i 90°, wzory dla trójkąta 30-60-90 w ogóle nie mają zastosowania i żadnej długości boku z nich nie można ufać.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 4: Kolejność boków",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[a < b < c]]. Tutaj [[5 < 8.660 < 10]], więc kolejność się zgadza. Krótsza przyprostokątna musi być najmniejszym bokiem, dłuższa przyprostokątna musi znajdować się pośrodku, a przeciwprostokątna musi być najdłuższa. Każda odpowiedź naruszająca tę kolejność, na przykład dłuższa przyprostokątna dłuższa od przeciwprostokątnej, jest błędna na pierwszy rzut oka.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Ważne własności trójkątów 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć własności wynika ze stałego stosunku.",
            },
            {
              "kind": "list",
              "items": [
                "Trójkąt zawsze ma kąty 30°, 60° i 90°, a kąty te zawsze sumują się do 180°.",
                "Krótsza przyprostokątna leży naprzeciw kąta 30° i jest najmniejszym bokiem trójkąta.",
                "Dłuższa przyprostokątna leży naprzeciw kąta 60° i pod względem długości znajduje się między krótszą przyprostokątną a przeciwprostokątną.",
                "Przeciwprostokątna leży naprzeciw kąta 90° i jest najdłuższym bokiem trójkąta.",
                "Przeciwprostokątna jest dwa razy dłuższa od krótszej przyprostokątnej, [[c = 2a]], bez żadnego pierwiastka kwadratowego.",
                "Dłuższa przyprostokątna jest √3 razy dłuższa od krótszej przyprostokątnej, [[b = a\\sqrt{3}]], gdzie [[\\sqrt{3} \\approx 1.732]].",
                "Stosunek boków [[1 : \\sqrt{3} : 2]] nie zależy od rozmiaru trójkąta, więc skalowanie trójkąta pozostawia stosunek bez zmian.",
                "Wszystkie trójkąty 30-60-90 są podobne, ponieważ mają te same trzy kąty i te same proporcje boków.",
                "Pole zależy od kwadratu krótszej przyprostokątnej, [[A = \\frac{a^2\\sqrt{3}}{2}]], więc podwojenie krótszej przyprostokątnej poczwórnie zwiększa pole.",
                "Obwód skaluje się wprost proporcjonalnie do krótszej przyprostokątnej, [[P = a(3 + \\sqrt{3})]], więc podwojenie krótszej przyprostokątnej podwaja obwód.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy rozwiązywaniu trójkątów 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście błędów pojawia się raz za razem w zadaniach o trójkątach 30-60-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mylenie krótszej i dłuższej przyprostokątnej: krótsza przyprostokątna leży naprzeciw 30°, a dłuższa przyprostokątna naprzeciw 60°. Rozpoznawaj każdy bok po kącie leżącym naprzeciw niego, a nie po tym, jak obrócono rysunek. Poprawnie: [[a]] naprzeciw 30°, [[b]] naprzeciw 60°.",
                "Używanie √2 zamiast √3: √2 należy do trójkąta 45-45-90, którego stosunek to [[1 : 1 : \\sqrt{2}]]. Trójkąt 30-60-90 zawsze używa √3. Poprawnie: [[b = a\\sqrt{3}]].",
                "Mnożenie krótszej przyprostokątnej przez 2, aby znaleźć dłuższą przyprostokątną: podwojenie daje przeciwprostokątną, a nie dłuższą przyprostokątną. Dla [[a = 5]] cm podwojenie daje 10 cm, co jest [[c]], natomiast dłuższa przyprostokątna to [[5\\sqrt{3} \\approx 8.660]] cm. Poprawnie: [[b = a\\sqrt{3}]].",
                "Używanie [[a\\sqrt{3}]] jako przeciwprostokątnej: przeciwprostokątna to [[2a]], a nie [[a\\sqrt{3}]]. Dla [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm to dłuższa przyprostokątna, a przeciwprostokątna to 10 cm. Poprawnie: [[c = 2a]].",
                "Zapominanie, że przeciwprostokątna jest równa [[2a]]: uczniowie czasem stosują twierdzenie Pitagorasa, aby znaleźć przeciwprostokątną, gdy podwojenie wystarczyłoby. Podwojenie jest szybsze i dokładne. Poprawnie: [[c = 2a]].",
                "Dzielenie przez 2 zamiast przez √3 przy znajdowaniu krótszej przyprostokątnej z dłuższej: podzielenie [[b]] przez 2 daje [[\\frac{b}{2}]], co nie jest krótszą przyprostokątną. Dla [[b = 12]] cm dzielenie przez 2 daje 6 cm, natomiast poprawna krótsza przyprostokątna to [[4\\sqrt{3} \\approx 6.928]] cm. Poprawnie: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Zapominanie o dzieleniu przez dwa przy obliczaniu pola: pole to połowa iloczynu przyprostokątnych. Użycie [[A = ab]] podwaja prawdziwe pole. Dla [[a = 6]] cm, [[ab = 36\\sqrt{3}]] cm² to dwa razy więcej niż poprawne [[18\\sqrt{3}]] cm². Poprawnie: [[A = \\frac{ab}{2}]].",
                "Dodawanie tylko dwóch boków przy obliczaniu obwodu: obwód potrzebuje wszystkich trzech boków. Dodanie tylko dwóch przyprostokątnych dla [[a = 5]] cm daje [[5 + 5\\sqrt{3} \\approx 13.660]] cm, natomiast prawdziwy obwód to około 23.660 cm. Poprawnie: [[P = a + b + c]].",
                "Mylenie dokładnych odpowiedzi z przybliżeniami dziesiętnymi: [[5\\sqrt{3}]] cm jest dokładne, natomiast 8.660 cm jest zaokrąglone. Zapisanie 8.660 cm tak, jakby było dokładne, traci precyzję, którą zachowuje pierwiastek. Poprawnie: podaj najpierw dokładną postać, potem ułamek dziesiętny.",
                "Zaokrąglanie √3 zbyt wcześnie: użycie 1.73 zamiast √3 w środku obliczeń przesuwa każdy późniejszy krok. Dla [[a = 5]] cm, [[5 \\times 1.73 = 8.65]] cm zamiast 8.660 cm. Poprawnie: zachowaj √3 w dokładnej postaci przez całe rozwiązanie i zaokrąglij tylko końcową odpowiedź.",
                "Mieszanie jednostek miary: krótsza przyprostokątna w centymetrach i przeciwprostokątna w metrach nie mogą być łączone bezpośrednio. Przelicz każdy pomiar na jedną jednostkę przed obliczeniami. Poprawnie: 0.5 m to 50 cm, a następnie obliczaj w centymetrach.",
                "Stosowanie wzorów do trójkąta o innych kątach: wzory [[b = a\\sqrt{3}]] i [[c = 2a]] obowiązują tylko wtedy, gdy kąty mają 30°, 60° i 90°. Trójkąt prostokątny o kątach 40° i 50° ma inny stosunek. Poprawnie: najpierw potwierdź kąty, a potem użyj wzorów.",
                "Mylenie boków przeciwległych kątów 30 i 60 stopni: bok leżący naprzeciw 30° to krótsza przyprostokątna, a bok leżący naprzeciw 60° to dłuższa przyprostokątna, nigdy odwrotnie. Zamiana ich miejsc sprawia, że dłuższa przyprostokątna staje się krótsza od krótszej, co jest niemożliwe. Poprawnie: [[a]] naprzeciw 30°, [[b]] naprzeciw 60°.",
                "Zapominanie, że pole wymaga jednostek kwadratowych: pole 31.177 cm jest błędne co do jednostki, nawet jeśli liczba jest poprawna. Pole mierzy powierzchnię, więc wynosi 31.177 centymetrów kwadratowych. Poprawnie: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania trójkątów 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek pojawia się wszędzie tam, gdzie kąt 30° lub 60° spotyka się z kątem prostym.",
            },
            {
              "kind": "p",
              "text": "Najczęstszym zastosowaniem są zadania domowe z geometrii i ćwiczenia z trygonometrii, w których zadania o trójkątach 30-60-90 sprawdzają, czy uczniowie potrafią rozpoznać krótszą przyprostokątną, zastosować stosunek i zachować dokładne odpowiedzi pierwiastkowe. Obliczenia wysokości trójkąta równobocznego wykorzystują tę samą ideę w odwrotną stronę: wysokość trójkąta równobocznego to dłuższa przyprostokątna trójkąta 30-60-90 powstałego przez przecięcie go na pół, więc bok o długości 10 cm daje wysokość [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny, architektura i geometria budowlana wykorzystują zależności 30-60-90, gdy projekt wymaga kąta 30° lub 60°, na przykład nachylenia dachu, rampy czy ukośnego usztywnienia. Budowniczy, który zna jeden bok takiego trójkąta, może znaleźć pozostałe bez bezpośredniego mierzenia ich. Pokazy w klasie wykorzystują trójkąt, aby pokazać, jak stały stosunek zamienia jeden pomiar w pełny opis kształtu.",
            },
            {
              "kind": "p",
              "text": "Modelowanie matematyczne wykorzystuje stosunek wszędzie tam, gdzie zależności przekątnych i wysokości w kształtach geometrycznych wymagają dokładnych wartości, na przykład we wzorach sześciokątnych, gdzie kąty 60° foremnego sześciokąta tworzą wewnątrz kształtu trójkąty 30-60-90. Są to realistyczne zastosowania samej geometrii, a nie twierdzenia o tolerancjach inżynieryjnych: prawdziwa praca projektowa dodaje ograniczenia materiałowe i marginesy bezpieczeństwa wykraczające poza dokładne wartości geometryczne na tej stronie.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania ćwiczeniowe z odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiąż wszystkie sześć zadań na papierze, zanim przeczytasz odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Znajdź dłuższą przyprostokątną z krótszej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma krótszą przyprostokątną [[a = 6]] cm. Znajdź dłuższą przyprostokątną [[b]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Znajdź przeciwprostokątną z krótszej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma krótszą przyprostokątną [[a = 11]] cm. Znajdź przeciwprostokątną [[c]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Znajdź krótszą przyprostokątną z przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma przeciwprostokątną [[c = 24]] cm. Znajdź krótszą przyprostokątną [[a]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Znajdź dłuższą przyprostokątną z przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma przeciwprostokątną [[c = 14]] cm. Znajdź dłuższą przyprostokątną [[b]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Oblicz pole z krótszej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma krótszą przyprostokątną [[a = 9]] cm. Znajdź pole [[A]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Oblicz obwód z krótszej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma krótszą przyprostokątną [[a = 7]] cm. Znajdź obwód [[P]].",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań ćwiczeniowych",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. Dokładna odpowiedź to [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[c = 2a = 2 \\times 11 = 22]] cm. Przeciwprostokątna jest dokładnie dwa razy dłuższa od krótszej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Krótsza przyprostokątna jest dokładnie połową przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Sprawdź kolejność: krótsza przyprostokątna to 7 cm, dłuższa przyprostokątna to około 12.124 cm, a przeciwprostokątna to 14 cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] centymetrów kwadratowych. Dokładna odpowiedź to [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Dodawanie boków po kolei daje ten sam wynik: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje inne zadanie związane z trójkątem prostokątnym, więc wybierz narzędzie odpowiadające potrzebnemu pomiarowi.",
      "relatedItems": [
        "Kalkulator specjalnego trójkąta prostokątnego",
        "Kalkulator trójkąta 45-45-90",
        "Kalkulator boków trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator obwodu trójkąta prostokątnego",
        "Kalkulator twierdzenia Pitagorasa",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Co to jest trójkąt 30-60-90?",
          "answer": "Trójkąt 30-60-90 to trójkąt prostokątny o kątach 30°, 60° i 90°. Nazywa się go specjalnym trójkątem prostokątnym, ponieważ długości jego boków zawsze podlegają stałemu stosunkowi [[1 : \\sqrt{3} : 2]]. Znajomość jednego boku wystarcza, aby znaleźć wszystkie pozostałe, dlatego kalkulator potrzebuje tylko jednego wejścia.",
        },
        {
          "question": "Jaki jest stosunek boków trójkąta 30-60-90?",
          "answer": "Stosunek boków to [[a : b : c = 1 : \\sqrt{3} : 2]], gdzie [[a]] to krótsza przyprostokątna, [[b]] to dłuższa przyprostokątna, a [[c]] to przeciwprostokątna. Oznacza to, że [[b = a\\sqrt{3}]] oraz [[c = 2a]]. Stosunek jest taki sam dla każdego trójkąta 30-60-90, niezależnie od jego rozmiaru.",
        },
        {
          "question": "Dlaczego dłuższą przyprostokątną mnoży się przez √3?",
          "answer": "Dłuższa przyprostokątna jest wysokością trójkąta równobocznego, który tworzy trójkąt 30-60-90. Przecięcie trójkąta równobocznego o boku [[2a]] na pół daje [[b^2 = (2a)^2 - a^2 = 3a^2]], więc [[b = a\\sqrt{3}]]. √3 pochodzi z twierdzenia Pitagorasa zastosowanego do tej konstrukcji.",
        },
        {
          "question": "Jak znaleźć przeciwprostokątną z krótszej przyprostokątnej?",
          "answer": "Podwój krótszą przyprostokątną: [[c = 2a]]. Jeśli [[a = 7]] cm, to [[c = 2 \\times 7 = 14]] cm. Przeciwprostokątna jest zawsze dokładnie dwa razy dłuższa od krótszej przyprostokątnej w trójkącie 30-60-90, ponieważ jest jednym pełnym bokiem trójkąta równobocznego, natomiast krótsza przyprostokątna jest połową boku.",
        },
        {
          "question": "Jak znaleźć krótszą przyprostokątną z przeciwprostokątnej?",
          "answer": "Podziel przeciwprostokątną na pół: [[a = \\frac{c}{2}]]. Jeśli [[c = 18]] cm, to [[a = \\frac{18}{2} = 9]] cm. Jest to odwrotność podwajania krótszej przyprostokątnej w celu znalezienia przeciwprostokątnej i działa tylko dla trójkątów 30-60-90, w których przeciwprostokątna jest zawsze dwa razy dłuższa od krótszej przyprostokątnej.",
        },
        {
          "question": "Jak obliczyć dłuższą przyprostokątną z przeciwprostokątnej?",
          "answer": "Użyj [[b = \\frac{c\\sqrt{3}}{2}]]. Najpierw podziel przeciwprostokątną na pół, aby otrzymać krótszą przyprostokątną, a następnie pomnóż przez √3. Jeśli [[c = 16]] cm, to [[b = 8\\sqrt{3} \\approx 13.856]] cm. Dłuższa przyprostokątna znajduje się pod względem długości między krótszą przyprostokątną a przeciwprostokątną.",
        },
        {
          "question": "Jak znaleźć krótszą przyprostokątną z dłuższej przyprostokątnej?",
          "answer": "Podziel dłuższą przyprostokątną przez √3: [[a = \\frac{b}{\\sqrt{3}}]]. Jeśli [[b = 12]] cm, to [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Dzielenie przez √3 odwraca mnożenie używane do znalezienia dłuższej przyprostokątnej z krótszej.",
        },
        {
          "question": "Jak obliczyć pole trójkąta 30-60-90?",
          "answer": "Użyj [[A = \\frac{a^2\\sqrt{3}}{2}]], gdzie [[a]] to krótsza przyprostokątna. Jeśli [[a = 6]] cm, to [[A = 18\\sqrt{3} \\approx 31.177]] centymetrów kwadratowych. Wzór to połowa iloczynu dwóch przyprostokątnych, przy czym dłuższą przyprostokątną zastąpiono przez [[a\\sqrt{3}]]. Pole zawsze podaje się w jednostkach kwadratowych.",
        },
        {
          "question": "Jak obliczyć obwód trójkąta 30-60-90?",
          "answer": "Użyj [[P = a(3 + \\sqrt{3})]], gdzie [[a]] to krótsza przyprostokątna. Jeśli [[a = 5]] cm, to [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. Wzór dodaje wszystkie trzy boki, [[a + a\\sqrt{3} + 2a]], i wyciąga [[a]] przed nawias. Obwód podaje się w zwykłych jednostkach, a nie w jednostkach kwadratowych.",
        },
        {
          "question": "Czy trójkąt 30-60-90 może mieć dziesiętne długości boków?",
          "answer": "Tak. Stosunek działa dla każdej dodatniej długości, całkowitej lub dziesiętnej. Jeśli [[a = 2.5]] cm, to [[b = 2.5\\sqrt{3} \\approx 4.330]] cm oraz [[c = 5]] cm. Ułamki dziesiętne niczego nie zmieniają w metodzie: pomnóż przez √3 dla dłuższej przyprostokątnej i podwój dla przeciwprostokątnej, a następnie zaokrąglij tylko końcową odpowiedź.",
        },
        {
          "question": "Czy każdy trójkąt 30-60-90 jest podobny?",
          "answer": "Tak. Wszystkie trójkąty 30-60-90 mają te same trzy kąty, 30°, 60° i 90°, oraz ten sam stosunek boków, [[1 : \\sqrt{3} : 2]]. Te same kąty i te same proporcje oznaczają, że trójkąty są podobne, więc różnią się tylko rozmiarem. Powiększenie lub pomniejszenie jednego daje inny trójkąt 30-60-90.",
        },
        {
          "question": "Jak sprawdzić, czy pomiary mojego trójkąta są poprawne?",
          "answer": "Sprawdź stosunek, [[\\frac{b}{a} = \\sqrt{3}]] oraz [[\\frac{c}{a} = 2]], następnie potwierdź [[a^2 + b^2 = c^2]] za pomocą twierdzenia Pitagorasa i potwierdź [[a < b < c]]. Dla [[a = 5]] cm, [[b \\approx 8.660]] cm i [[c = 10]] cm wszystkie cztery kontrole przechodzą. Jeśli którakolwiek kontrola zawiedzie, przelicz zadanie.",
        },
      ],
    },
};
