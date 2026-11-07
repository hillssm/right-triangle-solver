// fortyFiveGuideTranslations.bpl.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator trójkąta 45-45-90 – przeciwprostokątna, przyprostokątna, pole, obwód",
        "description": "Oblicz przeciwprostokątną, brakującą przyprostokątną, pole i obwód trójkąta 45-45-90 na podstawie jednej znanej przyprostokątnej, korzystając ze stałego stosunku 1:1:√2 i dokładnych wyników z pierwiastkami.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator trójkąta 45-45-90",
        "sec-calculate": "Oblicz przeciwprostokątną, przyprostokątną, pole lub obwód",
        "sec-what": "Czym jest trójkąt 45-45-90?",
        "sec-isosceles": "Dlaczego nazywa się go trójkątem prostokątnym równoramiennym?",
        "sec-legs": "Dwie równe przyprostokątne i przeciwprostokątna",
        "sec-ratio": "Stosunek boków trójkąta 45-45-90",
        "sec-why-sqrt2": "Dlaczego pojawia się pierwiastek kwadratowy z 2?",
        "sec-hypotenuse": "Wzór na przeciwprostokątną na podstawie jednej przyprostokątnej",
        "sec-leg-hyp": "Wzór na przyprostokątną na podstawie przeciwprostokątnej",
        "sec-area": "Jak obliczyć pole trójkąta 45-45-90",
        "sec-perimeter": "Jak obliczyć obwód trójkąta 45-45-90",
        "sec-square": "Jak przekątna kwadratu tworzy trójkąt 45-45-90",
        "sec-step-example": "Przykład krok po kroku rozwiązywania trójkąta 45-45-90",
        "sec-examples": "Przykłady obliczeń dla trójkąta 45-45-90",
        "sec-exact": "Wyniki dokładne a przybliżenia dziesiętne",
        "sec-verify": "Jak sprawdzić obliczenia dla trójkąta 45-45-90",
        "sec-properties": "Ważne własności trójkątów 45-45-90",
        "sec-vs-3060": "Różnica między trójkątami 45-45-90 i 30-60-90",
        "sec-mistakes": "Typowe błędy przy rozwiązywaniu trójkątów 45-45-90",
        "sec-applications": "Praktyczne zastosowania trójkątów 45-45-90",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Znajdź przeciwprostokątną, brakującą przyprostokątną, pole i obwód trójkąta 45-45-90 na podstawie jednego znanego boku.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 to trójkąt prostokątny, którego trzy kąty mają miary 45°, 45° i 90°. Nazywa się go trójkątem prostokątnym równoramiennym, ponieważ jego dwie przyprostokątne są równej długości, oraz szczególnym trójkątem prostokątnym, ponieważ jego boki zawsze mają ten sam stały stosunek, niezależnie od tego, jak duży lub mały jest trójkąt. Kalkulator trójkąta 45-45-90 na tej stronie wykorzystuje ten stosunek, aby na podstawie jednej wprowadzonej długości boku znaleźć przeciwprostokątną, brakującą przyprostokątną, pole i obwód.",
            },
            {
              "kind": "p",
              "text": "W trójkącie ABC kąt A ma 45°, kąt B ma 45°, a kąt C ma 90°. Bok BC to pierwsza przyprostokątna [[a]], bok AC to druga przyprostokątna [[b]], a bok AB to przeciwprostokątna [[c]]. Ponieważ dwa kąty ostre są równe, dwie przyprostokątne są równe, [[a = b]], a trzy boki zawsze spełniają stosunek [[a : b : c = 1 : 1 : \\sqrt{2}]], co oznacza, że [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Jeśli [[a = 5]] cm, to druga przyprostokątna ma [[b = 5]] cm, przeciwprostokątna ma [[c = 5\\sqrt{2} \\approx 7.071]] cm, a pole wynosi [[A = \\frac{25}{2} = 12.5]] cm². Kalkulator może też obliczyć obwód na podstawie tej samej przyprostokątnej, więc jeden pomiar wystarczy, aby opisać cały trójkąt. Poniższe sekcje wyjaśniają stosunek, cztery tryby kalkulatora i wzory, z przykładami na każdym kroku.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Oblicz przeciwprostokątną, przyprostokątną, pole lub obwód",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery tryby obejmują każdy sposób rozpoczęcia od jednego znanego boku.",
            },
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie ma cztery tryby, po jednym dla każdej wielkości, którą może obliczyć. Wybierz tryb odpowiadający bokowi, który znasz, i wielkości, której potrzebujesz. Każdy tryb wymaga tylko jednej danej wejściowej, ponieważ stały stosunek uzupełnia wszystko pozostałe. Poniższa tabela zawiera wszystkie cztery tryby wraz z daną wejściową, której każdy z nich wymaga, oraz wynikiem, który zwraca.",
            },
            {
              "kind": "p",
              "text": "Aby użyć trybu, najpierw ustal, który bok znasz. Bok leżący naprzeciw kąta 45° to przyprostokątna, a każda z przyprostokątnych może pełnić rolę [[a]], ponieważ przyprostokątne są równe. Bok leżący naprzeciw kąta 90° to przeciwprostokątna [[c]]. Wprowadź tę miarę jako liczbę dodatnią, wybierz jednostkę i kliknij przycisk Oblicz. Wynik pojawi się wraz z rozwiązaniem krok po kroku, dzięki czemu zobaczysz wzór i podstawienie, a nie tylko odpowiedź. Przycisk Resetuj służy do wyczyszczenia pól przed rozpoczęciem nowego zadania.",
            },
            {
              "kind": "p",
              "text": "Różne tryby wymagają różnych wzorów, ponieważ każdy z nich rozpoczyna się od innego znanego boku. Znalezienie przeciwprostokątnej na podstawie przyprostokątnej wymaga mnożenia przez √2, natomiast znalezienie przyprostokątnej na podstawie przeciwprostokątnej wymaga dzielenia przez √2. Tryb pola podnosi przyprostokątną do kwadratu i dzieli wynik na pół, a tryb obwodu dodaje wszystkie trzy boki. Nie musisz samodzielnie obliczać brakujących boków przed użyciem trybu pola lub obwodu, ponieważ kalkulator najpierw znajduje je wewnętrznie.",
            },
            {
              "kind": "p",
              "text": "Cztery wzory to [[c = a\\sqrt{2}]] dla przeciwprostokątnej, [[a = \\frac{c}{\\sqrt{2}}]] dla przyprostokątnej, [[A = \\frac{a^2}{2}]] dla pola oraz [[P = a(2 + \\sqrt{2})]] dla obwodu. Zachowaj te same jednostki przez całe obliczenie: przyprostokątna wprowadzona w centymetrach daje przeciwprostokątną w centymetrach i pole w centymetrach kwadratowych. Kalkulator nie oblicza promienia okręgu opisanego, promienia okręgu wpisanego ani pomiarów dla trójkątów, które nie są trójkątami 45-45-90, więc przed użyciem sprawdź kąty.",
            },
          ],
          "table": {
            "headers": [
              "Tryb kalkulatora",
              "Wymagana dana wejściowa",
              "Wynik",
            ],
            "rows": [
              [
                "Znajdź przeciwprostokątną na podstawie przyprostokątnej",
                "Przyprostokątna a",
                "Przeciwprostokątna c",
              ],
              [
                "Znajdź przyprostokątną na podstawie przeciwprostokątnej",
                "Przeciwprostokątna c",
                "Przyprostokątna a",
              ],
              [
                "Znajdź pole na podstawie przyprostokątnej",
                "Przyprostokątna a",
                "Pole A",
              ],
              [
                "Znajdź obwód na podstawie przyprostokątnej",
                "Przyprostokątna a",
                "Obwód P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Czym jest trójkąt 45-45-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 nosi nazwę od swoich trzech kątów.",
            },
            {
              "kind": "p",
              "text": "Jest to trójkąt prostokątny, co oznacza, że jeden z jego kątów ma dokładnie 90°. Pozostałe dwa kąty mają po 45°, a nazwa wymienia wszystkie trzy kąty w kolejności. Ponieważ kąt prosty jest ustalony, a pozostałe dwa kąty również są ustalone, kształt trójkąta jest w pełni określony: każdy trójkąt 45-45-90 ma ten sam kształt, a dwa takie trójkąty różnią się tylko rozmiarem.",
            },
            {
              "kind": "p",
              "text": "Nazywa się go szczególnym trójkątem prostokątnym, ponieważ długości jego boków mają stały stosunek. W większości trójkątów prostokątnych znajomość jednego boku nic nie mówi o pozostałych. W trójkącie 45-45-90 znajomość jednego boku mówi o wszystkich, ponieważ stosunek [[1 : 1 : \\sqrt{2}]] wiąże trzy boki ze sobą. Dlatego kalkulator może znaleźć przeciwprostokątną, pole i obwód na podstawie jednej danej wejściowej.",
            },
            {
              "kind": "p",
              "text": "Trzy kąty sumują się do 180°, jak muszą w każdym trójkącie:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest najdłuższym bokiem, ponieważ leży naprzeciw największego kąta, kąta 90°. Dwie przyprostokątne są równe, ponieważ leżą naprzeciw równych kątów. Trójkąt może być mały jak kilka milimetrów albo duży jak działka budowlana, a kąty pozostają takie same, podczas gdy boki rosną razem. Stosunek też pozostaje taki sam, więc trójkąt o przyprostokątnej 5 cm i trójkąt o przyprostokątnej 5 m mają ten sam kształt przy różnych rozmiarach.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Trójkąt 45-45-90 ABC z oznaczonymi kątami 45, 45 i 90 stopni, równymi przyprostokątnymi a i b oraz przeciwprostokątną c",
            "caption": "Trójkąt ABC: kąty 45°, 45° i 90°, z równymi przyprostokątnymi a i b oraz przeciwprostokątną c.",
          },
        },
        "sec-isosceles": {
          "h2": "Dlaczego nazywa się go trójkątem prostokątnym równoramiennym?",
          "blocks": [
            {
              "kind": "p",
              "text": "Nazwa składa się z dwóch części, a każda z nich opisuje jeden fakt.",
            },
            {
              "kind": "p",
              "text": "Równoramienny oznacza trójkąt o dwóch równych bokach. W trójkącie 45-45-90 dwoma równymi bokami są przyprostokątne [[a]] i [[b]]. Trójkąt prostokątny oznacza trójkąt o jednym kącie 90°. Połącz te dwa słowa, a nazwa dokładnie mówi, czym jest ten trójkąt: trójkątem prostokątnym o dwóch równych bokach.",
            },
            {
              "kind": "p",
              "text": "Równe przyprostokątne wynikają z równych kątów. W każdym trójkącie równe kąty leżą naprzeciw równych boków. Tutaj oba kąty ostre mają po 45°, więc boki leżące naprzeciw nich muszą być równe. Bok leżący naprzeciw kąta A to [[a]], a bok leżący naprzeciw kąta B to [[b]], więc [[a = b]]. Nie jest to przypadek jednego rysunku: zachodzi to dla każdego trójkąta 45-45-90, ponieważ kąty są zawsze takie same.",
            },
            {
              "kind": "p",
              "text": "Trójkąt jest symetryczny względem wysokości poprowadzonej z wierzchołka kąta prostego do przeciwprostokątnej. Ta wysokość przecina przeciwprostokątną w jej środku i pod kątem prostym oraz dzieli duży trójkąt na dwa mniejsze trójkąty przystające do siebie. Każdy mały trójkąt ma kąty 45°, 45° i 90°, więc każdy z nich sam jest trójkątem 45-45-90, w połowie skali. Ta symetria to kolejny sposób, aby zobaczyć, dlaczego dwie przyprostokątne muszą być równe: złożenie wzdłuż wysokości odwzorowuje jedną przyprostokątną na drugą.",
            },
            {
              "kind": "p",
              "text": "Wysokość z wierzchołka kąta prostego do przeciwprostokątnej ma też przydatną długość: jest równa połowie przeciwprostokątnej. Dla trójkąta o przeciwprostokątnej [[c]] wysokość wynosi [[\\frac{c}{2}]]. Fakt ten przydaje się, gdy zadanie pyta o wysokość trójkąta mierzoną od przeciwprostokątnej, i jest kolejną konsekwencją symetrii tego kształtu.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Dwie równe przyprostokątne i przeciwprostokątna",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw niego.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna [[a]] to jeden bok prostopadły, bok BC w trójkącie ABC. Przyprostokątna [[b]] to drugi bok prostopadły, bok AC. Dwie przyprostokątne spotykają się w wierzchołku C, gdzie tworzą kąt 90°, więc są do siebie prostopadłe. Każda z przyprostokątnych może służyć jako podstawa trójkąta, a druga przyprostokątna działa wtedy jako wysokość, dlatego wzór na pole może wykorzystywać dwie przyprostokątne bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna [[c]] to bok AB, leżący naprzeciw kąta 90°. Jest najdłuższym bokiem trójkąta, ponieważ największy kąt zawsze leży naprzeciw najdłuższego boku. Jest też jedynym bokiem, który nie jest przyprostokątną, więc nigdy nie wolno jej mylić z żadną z przyprostokątnych. Dwie przyprostokątne są równe, ale przeciwprostokątna nie jest im równa: jest √2 razy dłuższa od każdej przyprostokątnej, około 1,414 razy dłuższa.",
            },
            {
              "kind": "p",
              "text": "Ponieważ przyprostokątne są równe, każda z nich może być użytą w kalkulatorze znaną przyprostokątną. Jeśli zadanie podaje przyprostokątną [[b]] zamiast przyprostokątnej [[a]], wprowadź tę wartość jako przyprostokątną: wynik jest taki sam, ponieważ [[a = b]]. Ta sama swoboda nie dotyczy przeciwprostokątnej, która wymaga własnego trybu. Rozpoznanie przeciwprostokątnej na każdym rysunku jest proste: poszukaj małego kwadratu oznaczającego kąt prosty, a bok leżący naprzeciw niego to przeciwprostokątna.",
            },
          ],
          "table": {
            "headers": [
              "Bok",
              "Kąt naprzeciwległy",
              "Długość",
            ],
            "rows": [
              [
                "Przyprostokątna a (BC)",
                "45°",
                "a",
              ],
              [
                "Przyprostokątna b (AC)",
                "45°",
                "a, równa przyprostokątnej a",
              ],
              [
                "Przeciwprostokątna c (AB)",
                "90°",
                "a√2, najdłuższy bok",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Stosunek boków trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek 1:1:√2 ustala każdy trójkąt 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Stosunek boków trójkąta 45-45-90 wynosi:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Każda część stosunku opisuje jeden bok. Pierwsza przyprostokątna odpowiada jednej jednostce, druga przyprostokątna również odpowiada jednej jednostce, a przeciwprostokątna odpowiada √2 jednostki. Zapisane z przyprostokątną jako [[a]], trzy boki to [[a = a]], [[b = a]] oraz [[c = a\\sqrt{2}]]. Jeśli przyprostokątna ma 1 cm, druga przyprostokątna ma 1 cm, a przeciwprostokątna ma √2 cm. Jeśli przyprostokątna ma 10 cm, druga przyprostokątna ma 10 cm, a przeciwprostokątna ma [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Stosunek pozostaje taki sam niezależnie od rozmiaru trójkąta, ponieważ wszystkie trójkąty 45-45-90 są podobne. Powiększenie lub pomniejszenie trójkąta mnoży każdy bok przez ten sam czynnik, więc proporcje między bokami się nie zmieniają. Weźmy [[a = 4]] cm jako przykład: druga przyprostokątna ma [[b = 4]] cm, a przeciwprostokątna ma [[c = 4\\sqrt{2} \\approx 5.657]] cm, a stosunek [[4 : 4 : 5.657]] jest taki sam jak [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Wartość √2 wynosi około 1,41421356. Jest to liczba niewymierna, więc jej rozwinięcie dziesiętne nigdy się nie kończy i nigdy się nie powtarza, a żaden ułamek dziesiętny nie jest jej dokładnie równy. Zachowuj dokładną postać z pierwiastkiem, gdy tylko możesz: zapis [[4\\sqrt{2}]] cm jest dokładny, natomiast 5,657 cm to zaokrąglone przybliżenie. Używaj dokładnej postaci w obliczeniach i w odpowiedziach końcowych, gdy pytanie prosi o dokładną wartość, a ułamek dziesiętny podawaj tylko wtedy, gdy potrzebna jest odpowiedź przybliżona.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Trzy paski porównujące dwie równe przyprostokątne i przeciwprostokątną w stosunku 1 do 1 do pierwiastka kwadratowego z 2",
            "caption": "Stały stosunek 1:1:√2 porównuje dwie równe przyprostokątne z przeciwprostokątną.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Dlaczego pojawia się pierwiastek kwadratowy z 2?",
          "blocks": [
            {
              "kind": "p",
              "text": "Pierwiastek kwadratowy z 2 wynika wprost z twierdzenia Pitagorasa.",
            },
            {
              "kind": "p",
              "text": "Zacznij od równych przyprostokątnych, [[a = b]], i zastosuj twierdzenie Pitagorasa, które zachodzi dla każdego trójkąta prostokątnego:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw równe przyprostokątne, zastępując [[b]] przez [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Połącz dwa identyczne wyrazy:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnij dodatni pierwiastek kwadratowy z obu stron. Długości boków są dodatnie, więc ujemny pierwiastek odrzucamy:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "To cały powód, dla którego pojawia się √2: dwa równe kwadraty sumują się do dwukrotności jednego kwadratu, a pierwiastek kwadratowy z 2 to liczba, która cofa to podwojenie. Jest to szczególna zależność, a nie przybliżony skrót. Wynika ona z równych przyprostokątnych i twierdzenia Pitagorasa i zachodzi dla każdego trójkąta 45-45-90 bez wyjątku.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 5]] cm jako sprawdzenie liczbowe:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Krok od √50 do [[5\\sqrt{2}]] działa, ponieważ [[50 = 25 \\times 2]], a pierwiastek kwadratowy z 25 to 5. Uproszczenie pierwiastka w ten sposób zachowuje dokładność odpowiedzi i uwidacznia wzorzec: przeciwprostokątna jest zawsze równa przyprostokątnej razy √2, niezależnie od długości przyprostokątnej.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Wyprowadzenie z twierdzenia Pitagorasa pokazujące, że a do kwadratu plus a do kwadratu równa się c do kwadratu, co prowadzi do c równego a razy pierwiastek kwadratowy z 2",
            "caption": "Z a² + a² = c² wynika, że przeciwprostokątna musi być równa a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Wzór na przeciwprostokątną na podstawie jednej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Pomnóż dowolną przyprostokątną przez √2, aby otrzymać przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[c]] to przeciwprostokątna, a [[a]] to dowolna przyprostokątna. Wzór jest bezpośrednim odczytaniem stosunku boków: przeciwprostokątna odpowiada √2 jednostki na każdą 1 jednostkę przyprostokątnej, więc przeciwprostokątna jest √2 razy dłuższa od przyprostokątnej. Mnożenie jest konieczne, ponieważ stosunek jest zależnością skalowania, a √2 pojawia się, ponieważ twierdzenie Pitagorasa zmusza przeciwprostokątną do tego, by była o tyle dłuższa od przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wynik jest dłuższy od każdej przyprostokątnej, jak musi być: √2 to około 1,414, więc pomnożenie przez tę liczbę zwiększa długość. Dokładna odpowiedź to [[5\\sqrt{2}]] cm, a 7,071 cm to przybliżenie dziesiętne. Zachowaj dokładną postać, gdy pytanie o nią prosi, a ułamek dziesiętny zaokrąglaj tylko na końcu obliczeń, nigdy w środku.",
            },
            {
              "kind": "p",
              "text": "Używaj tego trybu, gdy znanym bokiem jest przyprostokątna, a nieznanym przeciwprostokątna. Ponieważ przyprostokątne są równe, nie ma znaczenia, którą przyprostokątną podaje zadanie: wprowadź ją jako [[a]], a wzór da tę samą przeciwprostokątną. Pomaga szybka kontrola wyczucia: przeciwprostokątna powinna wyjść około 1,414 razy dłuższa od przyprostokątnej. Jeśli Twoja odpowiedź jest dwukrotnie dłuższa od przyprostokątnej albo tylko trochę dłuższa, użyłeś złego mnożnika.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Trójkąt 45-45-90 o przyprostokątnej 5 cm i przeciwprostokątnej oznaczonej jako 5 razy pierwiastek kwadratowy z 2, około 7,071 cm",
            "caption": "Przeciwprostokątna na podstawie przyprostokątnej: a = 5 cm daje c = 5√2 ≈ 7,071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Wzór na przyprostokątną na podstawie przeciwprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Podziel przeciwprostokątną przez √2, aby otrzymać przyprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[a]] to dowolna przyprostokątna, a [[c]] to przeciwprostokątna. Wzór ten powstaje przez przekształcenie [[c = a\\sqrt{2}]]: podzielenie obu stron przez √2 wyodrębnia [[a]]. Dzielenie przez √2 odwraca pierwotne mnożenie, więc dokładnie cofa to, co zrobił wzór wprost. Druga przyprostokątna ma tę samą długość, więc jedno obliczenie daje obie przyprostokątne naraz.",
            },
            {
              "kind": "p",
              "text": "Postać z usuniętą niewymiernością z mianownika jest zwykle łatwiejsza w użyciu:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Powstaje ona przez pomnożenie licznika i mianownika [[\\frac{c}{\\sqrt{2}}]] przez √2. Mianownik staje się [[\\sqrt{2} \\times \\sqrt{2} = 2]], a licznik staje się [[c\\sqrt{2}]]. Obie postaci dają tę samą wartość, ale postać z usuniętą niewymiernością nie ma pierwiastka kwadratowego w mianowniku, a to jest postać, której oczekują odpowiedzi egzaminacyjne.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Obie przyprostokątne mają [[5\\sqrt{2}]] cm, około 7,071 cm każda. Przyprostokątna jest krótsza od przeciwprostokątnej, jak musi być, ponieważ dzielenie przez liczbę większą od 1 zmniejsza wartość. Jeśli Twoja odpowiedź wyjdzie dłuższa od przeciwprostokątnej, pomnożyłeś zamiast podzielić albo podzieliłeś przez złą liczbę.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Trójkąt 45-45-90 o przeciwprostokątnej 10 cm i każdej przyprostokątnej oznaczonej jako 5 razy pierwiastek kwadratowy z 2, około 7,071 cm",
            "caption": "Przyprostokątna na podstawie przeciwprostokątnej: c = 10 cm daje a = b = 5√2 ≈ 7,071 cm.",
          },
        },
        "sec-area": {
          "h2": "Jak obliczyć pole trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Pole wymaga tylko jednej przyprostokątnej, ponieważ przyprostokątne są równe.",
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
              "text": "Ponieważ [[a = b]], podstaw, aby otrzymać pole na podstawie jednej przyprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dzielenie przez dwa jest konieczne, ponieważ trójkąt pokrywa połowę prostokąta utworzonego przez jego dwie przyprostokątne. Końcowe pole wyraża się w jednostkach kwadratowych, takich jak centymetry kwadratowe, ponieważ pole mierzy powierzchnię, a nie długość. Kwadrat o boku [[a]] ma pole [[a^2]], a trójkąt jest dokładnie połową tego kwadratu, co jest kolejnym sposobem, aby zobaczyć, dlaczego wzór to [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Tryb pola kalkulatora przyjmuje przyprostokątną i oblicza pole bezpośrednio, więc wprowadzasz tylko [[a]]. Jeśli znasz przeciwprostokątną zamiast przyprostokątnej, najpierw znajdź przyprostokątną ze wzoru [[a = \\frac{c}{\\sqrt{2}}]], a potem użyj [[A = \\frac{a^2}{2}]]. Istnieje też skrót bezpośrednio z przeciwprostokątnej: [[A = \\frac{c^2}{4}]], który daje ten sam wynik. Dla [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "Pole rośnie wraz z kwadratem przyprostokątnej, więc podwojenie przyprostokątnej czterokrotnie zwiększa pole. Trójkąt o [[a = 12]] cm ma cztery razy większe pole niż trójkąt o [[a = 6]] cm, 72 cm² zamiast 18 cm², a nie dwa razy większe. Tę zależność kwadratową łatwo zapomnieć, więc sprawdzaj ją, gdy zadanie powiększa lub pomniejsza trójkąt.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Trójkąt 45-45-90 o przyprostokątnej 6 cm, przeciwprostokątnej 6 razy pierwiastek kwadratowy z 2 cm, polu 18 centymetrów kwadratowych i obwodzie około 20,485 cm",
            "caption": "Pole i obwód na podstawie przyprostokątnej: a = 6 cm daje A = 18 cm² i P ≈ 20,485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Jak obliczyć obwód trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dodaj wszystkie trzy boki, a potem wyłącz przyprostokątną przed nawias.",
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
              "text": "Ponieważ [[a = b]] oraz [[c = a\\sqrt{2}]], podstaw te zależności:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Wyłącz [[a]] przed nawias, aby otrzymać uproszczoną postać:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Uwzględnione są wszystkie trzy długości boków, ponieważ obwód biegnie wzdłuż całej granicy trójkąta: w dół jednej przyprostokątnej, w poprzek drugiej przyprostokątnej i z powrotem wzdłuż przeciwprostokątnej. Pominięcie któregokolwiek boku daje krótszą odległość, która nie jest obwodem. Obwód jest pomiarem liniowym, a nie pomiarem pola, więc odpowiedź podaje się w zwykłych jednostkach, takich jak centymetry, nigdy w centymetrach kwadratowych.",
            },
            {
              "kind": "p",
              "text": "Weźmy [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Dokładna postać to [[10 + 5\\sqrt{2}]] cm, a 17,071 cm to postać dziesiętna. Tryb obwodu kalkulatora przyjmuje przyprostokątną i dodaje trzy boki wewnętrznie. Istnieje też skrót bezpośrednio z przeciwprostokątnej: [[P = c(1 + \\sqrt{2})]]. Dla [[c = 10]] cm daje to [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Obwód rośnie wprost proporcjonalnie do przyprostokątnej, więc podwojenie przyprostokątnej podwaja obwód.",
            },
          ],
        },
        "sec-square": {
          "h2": "Jak przekątna kwadratu tworzy trójkąt 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedna przekątna dzieli kwadrat na dwa identyczne trójkąty 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Kwadrat ma cztery równe boki i cztery kąty 90°. Narysuj jedną przekątną przez kwadrat, od jednego rogu do przeciwległego rogu, a kwadrat podzieli się na dwa trójkąty. Każdy trójkąt ma dwa boki, które są bokami kwadratu, więc te dwa boki są równe, a kąt między nimi to róg kwadratu, 90°. Przekątna to trzeci bok, leżący naprzeciw tego kąta prostego, więc jest przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "Przekątna dzieli też na pół dwa kąty przy wierzchołkach, przez które przechodzi. Każdy róg kwadratu ma 90°, a przekątna dzieli go na dwa kąty 45°. To daje każdemu trójkątowi kąty 45°, 45° i 90°, czyli dokładnie trójkąt 45-45-90. Dwa trójkąty są przystające: mają te same długości boków i te same kąty, ponieważ mają wspólną przekątną, a każdy z nich przejmuje dwa boki tego samego kwadratu.",
            },
            {
              "kind": "p",
              "text": "Weźmy kwadrat o długości boku [[a]]. Przekątna [[d]] jest przeciwprostokątną trójkąta, więc twierdzenie Pitagorasa daje:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Weźmy kwadrat o boku 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Dlatego obliczenia przekątnej kwadratu zawsze wykorzystują tę samą zależność z √2. Gdy potrzebujesz przekątnej kwadratu, pomnóż bok przez √2; gdy znasz przekątną i potrzebujesz boku, podziel ją przez √2. Ta sama zasada dotyczy płytek kwadratowych, kwadratowych ram do obrazów, kwadratowych działek i każdego innego kwadratowego kształtu, ponieważ każdy kwadrat dzieli się w ten sam sposób.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Kwadrat o boku 8 cm podzielony przekątną na dwa przystające trójkąty 45-45-90, przekątna około 11,314 cm",
            "caption": "Przekątna kwadratu o boku 8 cm to d = 8√2 ≈ 11,314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Przykład krok po kroku rozwiązywania trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Jeden trójkąt, a = 5 cm, rozwiązany od początku do końca.",
            },
            {
              "kind": "p",
              "text": "Zacznij od przyprostokątnej [[a = 5]] cm i znajdź każdą inną wielkość trójkąta, jeden wzór naraz. Każdy krok wykorzystuje wzór z powyższych sekcji, a tabela podsumowująca na końcu zbiera wyniki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Znajdź drugą przyprostokątną: przyprostokątne są równe, więc [[b = 5]] cm.",
                "Znajdź przeciwprostokątną: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Znajdź pole: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] centymetrów kwadratowych.",
                "Znajdź obwód: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Wszystkie cztery pomiary opisują ten sam trójkąt. Boki [[5]], [[5]] i [[7.071]] spełniają stosunek [[1 : 1 : \\sqrt{2}]] oraz twierdzenie Pitagorasa, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. Pole i obwód to dwa różne rodzaje pomiaru tego samego trójkąta: pole obejmuje jego powierzchnię, natomiast obwód biegnie wzdłuż jego granicy. Jeśli zmienisz przyprostokątną, każda inna wartość zmieni się wraz z nią, ale stosunek między bokami nigdy się nie zmieni.",
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
                "Przyprostokątna a",
                "5 cm",
                "5 cm",
              ],
              [
                "Przyprostokątna b",
                "5 cm",
                "5 cm",
              ],
              [
                "Przeciwprostokątna c",
                "5√2 cm",
                "7,071 cm",
              ],
              [
                "Pole A",
                "25/2 cm²",
                "12,5 cm²",
              ],
              [
                "Obwód P",
                "10 + 5√2 cm",
                "17,071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Przykłady obliczeń dla trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem przykładów, obejmujących każdy tryb kalkulatora i przekątną kwadratu.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Znajdź przeciwprostokątną na podstawie przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 4]] cm. Wzór: [[c = a\\sqrt{2}]]. Podstawienie: [[c = 4\\sqrt{2}]]. Dokładna odpowiedź: [[4\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[c \\approx 5.657]] cm. Przeciwprostokątna jest około 1,414 razy dłuższa od przyprostokątnej, więc 4 cm staje się około 5,657 cm. Zachowaj dokładną postać [[4\\sqrt{2}]] cm, gdy pytanie prosi o dokładną wartość.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Znajdź przeciwprostokątną na podstawie większej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 8]] cm. Wzór: [[c = a\\sqrt{2}]]. Podstawienie: [[c = 8\\sqrt{2}]]. Dokładna odpowiedź: [[8\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[c \\approx 11.314]] cm. Jest to to samo obliczenie co w przykładzie 1, w dwukrotnie większej skali, a odpowiedź jest dokładnie dwukrotnie większa, co potwierdza liniowe skalowanie długości boków. Ta sama wartość to przekątna kwadratu o boku 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Znajdź przyprostokątną na podstawie przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane: [[c = 12]] cm. Wzór: [[a = \\frac{c}{\\sqrt{2}}]]. Podstawienie: [[a = \\frac{12}{\\sqrt{2}}]]. Usunięcie niewymierności z mianownika daje [[a = 6\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[a \\approx 8.485]] cm. Obie przyprostokątne mają [[6\\sqrt{2}]] cm, ponieważ przyprostokątne są równe. Przyprostokątna jest krótsza od przeciwprostokątnej, jak musi być.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Znajdź przyprostokątną na podstawie większej przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane: [[c = 20]] cm. Wzór: [[a = \\frac{c\\sqrt{2}}{2}]]. Podstawienie: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[a \\approx 14.142]] cm. Obie przyprostokątne mają [[10\\sqrt{2}]] cm. Szybka kontrola: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, co zwraca daną przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Oblicz pole",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 7]] cm. Wzór: [[A = \\frac{a^2}{2}]]. Podstawienie: [[A = \\frac{49}{2}]]. Wynik: [[A = 24.5]] cm². Pole jest dokładne, bez pierwiastka kwadratowego i bez zaokrąglania, ponieważ [[7^2 = 49]] dzieli się na pół bez reszty. Pole wyraża się w jednostkach kwadratowych, w odróżnieniu od długości boków, więc jednostką jest cm², a nie cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Oblicz obwód",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 6]] cm. Wzór: [[P = a(2 + \\sqrt{2})]]. Podstawienie: [[P = 6(2 + \\sqrt{2})]]. Dokładna odpowiedź: [[P = 12 + 6\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[P \\approx 20.485]] cm. Dodanie boków po kolei daje ten sam wynik: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Obwód wyraża się w zwykłych jednostkach, a nie w jednostkach kwadratowych.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Znajdź przekątną kwadratu",
            },
            {
              "kind": "p",
              "text": "Dany kwadrat o boku 10 m. Wzór: [[d = a\\sqrt{2}]]. Podstawienie: [[d = 10\\sqrt{2}]] m. Dokładna odpowiedź: [[10\\sqrt{2}]] m. Przybliżenie dziesiętne: [[d \\approx 14.142]] m. Przekątna dzieli kwadrat na dwa trójkąty 45-45-90, każdy o przyprostokątnych 10 m i przeciwprostokątnej [[10\\sqrt{2}]] m. Jest to ten sam wzór co znajdowanie przeciwprostokątnej na podstawie przyprostokątnej, ponieważ przekątna jest przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Znajdź przeciwprostokątną na podstawie przyprostokątnej dziesiętnej",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 2.5]] cm. Wzór: [[c = a\\sqrt{2}]]. Podstawienie: [[c = 2.5\\sqrt{2}]]. Dokładna odpowiedź: [[2.5\\sqrt{2}]] cm. Przybliżenie dziesiętne: [[c \\approx 3.536]] cm. Dane dziesiętne działają dokładnie tak jak dane całkowite: pomnóż przez √2, najpierw zachowaj dokładną postać, a ułamek dziesiętny zaokrąglij dopiero w ostatnim kroku. Druga przyprostokątna też ma 2,5 cm.",
            },
            {
              "kind": "p",
              "text": "Dokładne odpowiedzi i przybliżenia dziesiętne służą różnym celom. Dokładna postać, taka jak [[4\\sqrt{2}]] cm, jest precyzyjna i jest tym, czego zwykle wymagają odpowiedzi egzaminacyjne. Postać dziesiętna, taka jak 5,657 cm, jest łatwiejsza do wyobrażenia i zmierzenia linijką. Podawaj najpierw postać dokładną, potem dziesiętną, a ułamek dziesiętny zaokrąglaj tylko w ostatnim kroku.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Wyniki dokładne a przybliżenia dziesiętne",
          "blocks": [
            {
              "kind": "p",
              "text": "Dokładna odpowiedź zachowuje √2; odpowiedź dziesiętna zaokrągla go.",
            },
            {
              "kind": "p",
              "text": "Porównaj dokładną odpowiedź [[5\\sqrt{2}]] cm z przybliżeniem dziesiętnym 7,071 cm. Pierwsza jest dokładna: podaje długość precyzyjnie, używając symbolu √2 do oznaczenia liczby niewymiernej, której kwadrat wynosi 2. Druga jest zaokrąglona: podaje długość z dokładnością do trzech miejsc po przecinku, co jest bliskie prawdziwej wartości, ale jej nie równe. Różnica jest mała, około 0,00007 cm, ale jest rzeczywista i ma znaczenie w dowodach oraz w dalszych obliczeniach.",
            },
            {
              "kind": "p",
              "text": "Liczba √2 jest niewymierna, co oznacza, że nie można jej zapisać jako ułamka dwóch liczb całkowitych, a jej rozwinięcie dziesiętne nigdy się nie kończy i nigdy się nie powtarza. Zaczyna się od 1,41421356 i trwa bez końca. Każdy ułamek dziesiętny, który dla niej zapiszesz, jakkolwiek długi, jest przybliżeniem. Dlatego dokładny zapis z pierwiastkiem jest lepszy w dowodach matematycznych i w odpowiedziach egzaminacyjnych, które proszą o dokładną wartość: pierwiastek zachowuje pełną precyzję, którą traci ułamek dziesiętny.",
            },
            {
              "kind": "p",
              "text": "Przybliżenie dziesiętne jest bardziej praktyczne, gdy trzeba coś zmierzyć, wyciąć lub zbudować. Linijka nie może zmierzyć bezpośrednio [[5\\sqrt{2}]] cm, ale może zmierzyć 7,071 cm. Stolarz tnący ukośne wzmocnienie potrzebuje ułamka dziesiętnego, natomiast uczeń dowodzący twierdzenia potrzebuje postaci dokładnej. Używaj każdej postaci tam, gdzie pasuje, i oznaczaj ułamki dziesiętne jako przybliżone, aby nikt nie pomylił ich z wartościami dokładnymi.",
            },
            {
              "kind": "p",
              "text": "Zaokrąglanie należy wykonywać na końcu obliczenia, a nie w środku. Jeśli zastąpisz √2 liczbą 1,41 na początku, a potem pomnożysz, każdy kolejny krok niesie ten błąd dalej. Dla [[a = 5]] cm użycie 1,41 daje [[c = 7.05]] cm, podczas gdy poprawne przybliżenie to 7,071 cm. Zachowaj √2 w postaci dokładnej przez całe obliczenie, w formie [[5\\sqrt{2}]], i zaokrąglij tylko końcową odpowiedź. Nigdy nie przedstawiaj zaokrąglonego ułamka dziesiętnego tak, jakby był dokładny.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak sprawdzić obliczenia dla trójkąta 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery szybkie kontrole wychwytują prawie każdy błąd.",
            },
            {
              "kind": "p",
              "text": "Wykonuj co najmniej jedną kontrolę przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. Poniższy przykład przez cały czas wykorzystuje trójkąt o [[a = 5]] cm, [[b = 5]] cm i [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 1: Równe przyprostokątne",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy [[a = b]]. Tutaj obie przyprostokątne mają 5 cm, więc kontrola przechodzi. Jeśli Twoje dwie przyprostokątne różnią się, jedna z nich jest błędna albo trójkąt w ogóle nie jest trójkątem 45-45-90. Jest to najszybsza ze wszystkich kontrol, ponieważ nie wymaga żadnej arytmetyki: dwie przyprostokątne muszą być dokładnie równe.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 2: Stosunek boków",
            },
            {
              "kind": "p",
              "text": "Podziel przeciwprostokątną przez przyprostokątną: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Tutaj [[\\frac{7.071}{5} \\approx 1.414]], więc stosunek się zgadza. Jeśli dzielenie da 2, przez pomyłkę użyłeś podwojenia z trójkąta 30-60-90. Jeśli da około 1,732, przez pomyłkę użyłeś √3. Stosunek [[\\frac{c}{a}]] musi być równy √2 i niczemu innemu.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 3: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy [[a^2 + b^2 = c^2]]. Tutaj [[5^2 + 5^2 = 25 + 25 = 50]], a [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], więc twierdzenie zachodzi. Ta kontrola wychwytuje zamienione przyprostokątne i złe mnożniki, ponieważ użycie złej wartości dla któregokolwiek boku narusza równość. <a href=\"/pythagorean-theorem-calculator/\">Kalkulator twierdzenia Pitagorasa</a> wykonuje tę kontrolę dla dowolnych trzech długości boków.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 4: Suma kątów",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Ta kontrola dotyczy ustawienia zadania, a nie arytmetyki: jeśli kąty Twojego trójkąta nie sumują się do 180° albo nie są równe 45°, 45° i 90°, wzory dla trójkąta 45-45-90 w ogóle nie mają zastosowania i żadnej długości boku z nich nie można ufać. Najpierw sprawdź kąty, a potem ufaj bokom.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Ważne własności trójkątów 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć własności wynika ze stałego stosunku.",
            },
            {
              "kind": "list",
              "items": [
                "Trójkąt zawsze ma kąty 45°, 45° i 90°, a kąty te zawsze sumują się do 180°.",
                "Obie przyprostokątne są równe, [[a = b]], ponieważ leżą naprzeciw równych kątów 45°.",
                "Przeciwprostokątna jest najdłuższym bokiem, ponieważ leży naprzeciw kąta 90°.",
                "Przeciwprostokątna jest √2 razy dłuższa od każdej przyprostokątnej, [[c = a\\sqrt{2}]], gdzie [[\\sqrt{2} \\approx 1.41421356]].",
                "Wszystkie trójkąty 45-45-90 są podobne, ponieważ mają te same trzy kąty i te same proporcje boków.",
                "Stosunek boków [[1 : 1 : \\sqrt{2}]] jest niezależny od rozmiaru trójkąta, więc skalowanie trójkąta pozostawia stosunek bez zmian.",
                "Wysokość do przeciwprostokątnej dzieli trójkąt na dwa przystające mniejsze trójkąty 45-45-90.",
                "Wysokość do przeciwprostokątnej jest równa połowie przeciwprostokątnej, [[\\frac{c}{2}]].",
                "Pole jest równe połowie kwadratu przyprostokątnej, [[A = \\frac{a^2}{2}]], więc podwojenie przyprostokątnej czterokrotnie zwiększa pole.",
                "Obwód wynosi [[P = a(2 + \\sqrt{2})]], więc podwojenie przyprostokątnej podwaja obwód.",
              ],
            },
            {
              "kind": "p",
              "text": "Każda własność wynika z kątów i stosunku, a nie z jednego przykładu. Równe kąty wymuszają równe przyprostokątne, równe przyprostokątne wraz z twierdzeniem Pitagorasa wymuszają przeciwprostokątną z √2, a przeciwprostokątna z √2 wymusza wzory na pole i obwód. Gdy przyjmiesz trzy kąty, wszystko pozostałe jest ustalone, dlatego jeden znany bok wystarcza, aby opisać cały trójkąt.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Różnica między trójkątami 45-45-90 i 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa szczególne trójkąty wyglądają podobnie, ale ich stosunki nigdy się nie mieszają.",
            },
            {
              "kind": "p",
              "text": "Oba są szczególnymi trójkątami prostokątnymi i oba pozwalają znaleźć każdy bok na podstawie jednego znanego boku. Różnica tkwi w kątach: trójkąt 45-45-90 ma dwa równe kąty ostre, natomiast trójkąt 30-60-90 ma dwa różne kąty ostre. Ta jedna różnica całkowicie zmienia stosunek boków, więc wzory dla jednego trójkąta dają błędne odpowiedzi dla drugiego.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 jest równoramienny, z dwiema równymi przyprostokątnymi, natomiast trójkąt 30-60-90 jest różnoboczny, bez równych boków. W trójkącie 45-45-90 przeciwprostokątna jest √2 razy dłuższa od przyprostokątnej, natomiast w trójkącie 30-60-90 przeciwprostokątna jest dwukrotnie dłuższa od krótkiej przyprostokątnej. Długa przyprostokątna trójkąta 30-60-90 jest √3 razy dłuższa od krótkiej przyprostokątnej i nie ma odpowiednika w trójkącie 45-45-90, ponieważ jego dwie przyprostokątne mają tę samą długość. Pełne omówienie drugiego trójkąta znajdziesz w <a href=\"/30-60-90-triangle-calculator/\">kalkulatorze trójkąta 30-60-90</a>, który wykorzystuje stosunek 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Wzorów nie można zamieniać. Użycie [[c = 2a]] dla trójkąta 45-45-90 o [[a = 5]] cm daje 10 cm, podczas gdy poprawna przeciwprostokątna to około 7,071 cm. Użycie [[c = a\\sqrt{2}]] dla trójkąta 30-60-90 o krótkiej przyprostokątnej 5 cm daje około 7,071 cm, podczas gdy poprawna przeciwprostokątna to 10 cm. Zawsze najpierw sprawdź kąty przed wyborem wzoru: równe kąty ostre oznaczają trójkąt 45-45-90, a kąty 30° i 60° oznaczają trójkąt 30-60-90.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Kąty",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Stosunek boków",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Równe boki",
                "Dwie równe przyprostokątne",
                "Brak równych przyprostokątnych",
              ],
              [
                "Przeciwprostokątna",
                "Przyprostokątna × √2",
                "Krótka przyprostokątna × 2",
              ],
              [
                "Długa przyprostokątna",
                "Taka sama jak krótka przyprostokątna",
                "Krótka przyprostokątna × √3",
              ],
              [
                "Typ trójkąta",
                "Prostokątny równoramienny",
                "Prostokątny różnoboczny",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Dwa szczególne trójkąty prostokątne obok siebie: trójkąt 45-45-90 o stosunku 1 do 1 do pierwiastka kwadratowego z 2 oraz trójkąt 30-60-90 o stosunku 1 do pierwiastka kwadratowego z 3 do 2",
            "caption": "Trójkąt 45-45-90 używa 1:1:√2; trójkąt 30-60-90 używa 1:√3:2. Stosunków nigdy nie wolno zamieniać.",
          },
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy rozwiązywaniu trójkątów 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście błędów pojawia się raz za razem w zadaniach o trójkątach 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zakładanie, że przeciwprostokątna jest równa dwukrotności przyprostokątnej: podwojenie należy do trójkąta 30-60-90. Dla [[a = 5]] cm podwojenie daje 10 cm, podczas gdy poprawna przeciwprostokątna to [[5\\sqrt{2} \\approx 7.071]] cm. Poprawnie: [[c = a\\sqrt{2}]].",
                "Używanie √3 zamiast √2: √3 należy do trójkąta 30-60-90, którego stosunek to [[1 : \\sqrt{3} : 2]]. Trójkąt 45-45-90 zawsze używa √2. Poprawnie: [[c = a\\sqrt{2}]].",
                "Zapominanie, że obie przyprostokątne są równe: dwie przyprostokątne zawsze mają tę samą długość, więc jeśli zadanie podaje jedną przyprostokątną, druga przyprostokątna jest już znana. Dla [[a = 5]] cm, [[b = 5]] cm, a nie nowa niewiadoma. Poprawnie: [[a = b]].",
                "Traktowanie przeciwprostokątnej jako jednej z przyprostokątnych: przeciwprostokątna to bok leżący naprzeciw kąta 90° i jest dłuższa od każdej przyprostokątnej. Użycie jej jako przyprostokątnej we wzorze na pole daje błędne pole. Poprawnie: najpierw rozpoznaj przeciwprostokątną po oznaczeniu kąta prostego.",
                "Używanie [[c = a\\sqrt{3}]]: to miesza dwa szczególne trójkąty. Dla [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm nie jest ani przeciwprostokątną, ani przyprostokątną tego trójkąta. Poprawnie: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Dzielenie przeciwprostokątnej przez 2 zamiast przez √2: dzielenie na pół daje krótką przyprostokątną trójkąta 30-60-90, a nie przyprostokątną trójkąta 45-45-90. Dla [[c = 10]] cm dzielenie na pół daje 5 cm, podczas gdy poprawna przyprostokątna to [[5\\sqrt{2} \\approx 7.071]] cm. Poprawnie: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Zapominanie o podniesieniu przyprostokątnej do kwadratu przy obliczaniu pola: pole wymaga [[a^2]], a nie [[a]]. Użycie [[A = \\frac{a}{2}]] dla [[a = 6]] cm daje 3 cm², podczas gdy poprawne pole to [[\\frac{36}{2} = 18]] cm². Poprawnie: [[A = \\frac{a^2}{2}]].",
                "Dodawanie tylko dwóch przyprostokątnych przy obliczaniu obwodu: obwód wymaga wszystkich trzech boków. Dodanie samych dwóch przyprostokątnych dla [[a = 5]] cm daje 10 cm, podczas gdy prawdziwy obwód to około 17,071 cm. Poprawnie: [[P = a + b + c]].",
                "Mylenie dokładnych odpowiedzi z przybliżeniami dziesiętnymi: [[5\\sqrt{2}]] cm jest dokładne, natomiast 7,071 cm jest zaokrąglone. Zapisanie 7,071 cm tak, jakby było dokładne, traci precyzję, którą zachowuje pierwiastek. Poprawnie: najpierw podaj postać dokładną, potem dziesiętną.",
                "Za wczesne zaokrąglanie √2: użycie 1,41 zamiast √2 w środku obliczenia przesuwa każdy kolejny krok. Dla [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm zamiast 7,071 cm. Poprawnie: zachowaj √2 w postaci dokładnej przez całe obliczenie i zaokrąglij tylko końcową odpowiedź.",
                "Mieszanie jednostek miary: przyprostokątnej w centymetrach i przeciwprostokątnej w metrach nie można łączyć bezpośrednio. Przelicz każdą miarę na jedną jednostkę przed obliczeniem. Poprawnie: 0,5 m to 50 cm, a potem licz w centymetrach.",
                "Mylenie stosunków trójkątów 45-45-90 i 30-60-90: stosunki [[1 : 1 : \\sqrt{2}]] i [[1 : \\sqrt{3} : 2]] należą do różnych trójkątów. Zamiana ich daje przeciwprostokątną błędną o dużą wartość. Poprawnie: sprawdź kąty, a potem wybierz stosunek, który do nich pasuje.",
                "Zapominanie, że pole wymaga jednostek kwadratowych: pole 18 cm jest błędne co do jednostki, nawet jeśli liczba jest poprawna. Pole mierzy powierzchnię, więc wynosi 18 centymetrów kwadratowych. Poprawnie: [[A = 18]] cm².",
                "Używanie wzorów dla dowolnego trójkąta prostokątnego: wzory [[c = a\\sqrt{2}]] i [[A = \\frac{a^2}{2}]] zachodzą tylko wtedy, gdy kąty wynoszą 45°, 45° i 90°. Trójkąt prostokątny o kątach 40° i 50° ma inny stosunek. Poprawnie: najpierw sprawdź kąty, a potem użyj wzorów.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania trójkątów 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek pojawia się wszędzie tam, gdzie kwadrat jest przecięty na pół.",
            },
            {
              "kind": "p",
              "text": "Najczęstsze zastosowanie to znajdowanie przekątnej kwadratu. Płytka kwadratowa o boku 30 cm ma przekątną [[30\\sqrt{2} \\approx 42.426]] cm, czyli długość, wzdłuż której należy ciąć, gdy płytkę trzeba podzielić z rogu do rogu. Kwadratowa rama do obrazu, kwadratowy blat stołu i kwadratowa działka wykorzystują to samo obliczenie, ponieważ każdy kwadrat dzieli się na dwa trójkąty 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Zadania domowe z geometrii i ćwiczenia z trygonometrii wykorzystują zadania o trójkątach 45-45-90, aby sprawdzić, czy uczniowie potrafią rozpoznać równe przyprostokątne, zastosować stosunek i zachować dokładne odpowiedzi z pierwiastkami. Uczeń, który zna jeden bok takiego trójkąta, może znaleźć pozostałe bez mierzenia, i na tym polega sens stosunku. Pokazy w klasie wykorzystują trójkąt, aby pokazać, jak stały stosunek zamienia jeden pomiar w pełny opis kształtu oraz jak przecięcie kwadratu na pół tworzy trójkąt.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny, układy architektoniczne i geometria budowlana wykorzystują zależności trójkąta 45-45-90, gdy projekt wymaga kąta 45°, na przykład ukośnego wzmocnienia, wzoru opartego na kwadracie albo narożnika ściętego pod kątem 45°. Budowniczy, który zna jeden bok takiego trójkąta, może znaleźć odległość po przekątnej bez bezpośredniego mierzenia. Praca na płaszczyźnie współrzędnych wykorzystuje ten sam pomysł: ruch o 5 jednostek w prawo i 5 jednostek w górę pokonuje odległość po przekątnej [[5\\sqrt{2} \\approx 7.071]] jednostek. Są to realistyczne zastosowania samej geometrii, a nie twierdzenia o tolerancjach inżynierskich: prawdziwa praca projektowa dodaje ograniczenia materiałowe i marginesy bezpieczeństwa wykraczające poza dokładne wartości geometryczne na tej stronie.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiąż wszystkie sześć zadań na papierze, zanim przeczytasz odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Znajdź przeciwprostokątną na podstawie przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 ma przyprostokątną [[a = 9]] cm. Znajdź przeciwprostokątną [[c]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Znajdź przyprostokątną na podstawie przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 ma przeciwprostokątną [[c = 14]] cm. Znajdź przyprostokątną [[a]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Oblicz pole",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 ma przyprostokątną [[a = 10]] cm. Znajdź pole [[A]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Oblicz obwód",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 ma przyprostokątną [[a = 3]] cm. Znajdź obwód [[P]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź przekątną kwadratu",
            },
            {
              "kind": "p",
              "text": "Kwadrat ma bok o długości 12 cm. Znajdź długość jego przekątnej.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Sprawdź proponowany trójkąt 45-45-90",
            },
            {
              "kind": "p",
              "text": "Trójkąt ma przyprostokątne 6 cm i 6 cm oraz przeciwprostokątną [[6\\sqrt{2}]] cm. Użyj twierdzenia Pitagorasa, aby sprawdzić, czy te długości boków tworzą trójkąt 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. Dokładna odpowiedź to [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Obie przyprostokątne mają [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². Pole jest dokładne, bez zaokrąglania.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Dodanie boków po kolei daje ten sam wynik: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. Przekątna jest przeciwprostokątną trójkąta 45-45-90 utworzonego przez przecięcie kwadratu na pół.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[a^2 + b^2 = 36 + 36 = 72]], a [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Obie strony są równe, a przyprostokątne są równe, więc trójkąt jest trójkątem 45-45-90 o przeciwprostokątnej około 8,485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje inne zadanie z trójkątem prostokątnym, więc wybierz narzędzie odpowiadające pomiarowi, którego potrzebujesz.",
      "relatedItems": [
        "Kalkulator szczególnych trójkątów prostokątnych",
        "Kalkulator trójkąta 30-60-90",
        "Kalkulator boków trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator obwodu trójkąta prostokątnego",
        "Kalkulator twierdzenia Pitagorasa",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Czym jest trójkąt 45-45-90?",
          "answer": "Trójkąt 45-45-90 to trójkąt prostokątny o kątach 45°, 45° i 90°. Nazywa się go trójkątem prostokątnym równoramiennym, ponieważ jego dwie przyprostokątne są równe. Jego boki zawsze mają stały stosunek [[1 : 1 : \\sqrt{2}]], więc znajomość jednego boku wystarcza, aby znaleźć wszystkie pozostałe.",
        },
        {
          "question": "Jaki jest stosunek boków trójkąta 45-45-90?",
          "answer": "Stosunek boków to [[a : b : c = 1 : 1 : \\sqrt{2}]], gdzie [[a]] i [[b]] to równe przyprostokątne, a [[c]] to przeciwprostokątna. Oznacza to, że [[b = a]] oraz [[c = a\\sqrt{2}]]. Stosunek jest taki sam dla każdego trójkąta 45-45-90, niezależnie od jego rozmiaru.",
        },
        {
          "question": "Dlaczego obie przyprostokątne są równe?",
          "answer": "Dwa kąty ostre mają po 45°, a w każdym trójkącie równe kąty leżą naprzeciw równych boków. Bok leżący naprzeciw kąta A to przyprostokątna [[a]], a bok leżący naprzeciw kąta B to przyprostokątna [[b]], więc [[a = b]]. Trójkąt jest też symetryczny względem wysokości z kąta prostego do przeciwprostokątnej.",
        },
        {
          "question": "Dlaczego przeciwprostokątną mnoży się przez √2?",
          "answer": "Twierdzenie Pitagorasa daje [[a^2 + a^2 = c^2]], co upraszcza się do [[2a^2 = c^2]]. Wyciągnięcie pierwiastka kwadratowego daje [[c = a\\sqrt{2}]]. √2 pojawia się, ponieważ dwa równe kwadraty sumują się do dwukrotności jednego kwadratu, więc przeciwprostokątna musi być √2 razy dłuższa od przyprostokątnej.",
        },
        {
          "question": "Jak znaleźć przeciwprostokątną na podstawie jednej przyprostokątnej?",
          "answer": "Pomnóż przyprostokątną przez √2, używając [[c = a\\sqrt{2}]]. Dla [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. Każda przyprostokątna się nadaje, ponieważ przyprostokątne są równe. Zachowaj dokładną postać [[5\\sqrt{2}]] cm, gdy pytanie prosi o dokładną wartość.",
        },
        {
          "question": "Jak znaleźć przyprostokątną na podstawie przeciwprostokątnej?",
          "answer": "Podziel przeciwprostokątną przez √2, używając [[a = \\frac{c}{\\sqrt{2}}]], albo użyj postaci z usuniętą niewymiernością z mianownika [[a = \\frac{c\\sqrt{2}}{2}]]. Dla [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Obie przyprostokątne mają tę samą długość, ponieważ przyprostokątne są równe.",
        },
        {
          "question": "Jak obliczyć pole trójkąta 45-45-90?",
          "answer": "Użyj [[A = \\frac{a^2}{2}]], gdzie [[a]] to przyprostokątna. Dwie przyprostokątne pełnią rolę podstawy i wysokości, a trójkąt pokrywa połowę kwadratu utworzonego przez nie. Dla [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². Pole zawsze wyraża się w jednostkach kwadratowych.",
        },
        {
          "question": "Jak obliczyć jego obwód?",
          "answer": "Dodaj wszystkie trzy boki ze wzoru [[P = a + b + c]], który upraszcza się do [[P = a(2 + \\sqrt{2})]]. Dla [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Obwód jest pomiarem liniowym, więc odpowiedź podaje się w zwykłych jednostkach, a nie w jednostkach kwadratowych.",
        },
        {
          "question": "Dlaczego przekątna kwadratu tworzy trójkąt 45-45-90?",
          "answer": "Przekątna dzieli kwadrat na dwa trójkąty, z których każdy ma dwa boki kwadratu i jeden kąt przy wierzchołku 90°. Przekątna dzieli też dwa kąty przy wierzchołkach na pół, na kąty 45° każdy. Każdy trójkąt ma więc kąty 45°, 45° i 90°, a jego przeciwprostokątna jest przekątną, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "Czy √2 jest liczbą dokładną, czy przybliżeniem?",
          "answer": "Symbol √2 oznacza dokładną liczbę niewymierną, której kwadrat wynosi 2, ale jej rozwinięcie dziesiętne nigdy się nie kończy, zaczynając od 1,41421356. Każdy ułamek dziesiętny, który dla niej zapiszesz, jest przybliżeniem. Zachowuj postać z pierwiastkiem w dokładnych odpowiedziach, a ułamka dziesiętnego używaj tylko wtedy, gdy potrzebna jest wartość zmierzona lub zaokrąglona.",
        },
        {
          "question": "Czy wszystkie trójkąty 45-45-90 są podobne?",
          "answer": "Tak. Każdy trójkąt 45-45-90 ma te same trzy kąty, 45°, 45° i 90°, oraz ten sam stosunek boków [[1 : 1 : \\sqrt{2}]]. Dwa takie trójkąty różnią się tylko rozmiarem, nigdy kształtem. Powiększenie jednego z nich w górę lub w dół mnoży każdy bok przez ten sam czynnik, więc proporcje pozostają stałe.",
        },
        {
          "question": "Jaka jest różnica między trójkątami 45-45-90 i 30-60-90?",
          "answer": "Trójkąt 45-45-90 ma kąty 45°, 45° i 90°, równe przyprostokątne i stosunek [[1 : 1 : \\sqrt{2}]]. Trójkąt 30-60-90 ma kąty 30°, 60° i 90°, brak równych boków i stosunek [[1 : \\sqrt{3} : 2]]. Ich wzorów nie można zamieniać, więc zawsze najpierw sprawdź kąty.",
        },
      ],
    },
};
