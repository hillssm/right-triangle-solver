// threeFourFiveGuideTranslations.bpl.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator trójkąta 3-4-5 - skalowanie boków, pole, obwód",
        "description": "Skaluj trójkąt 3-4-5 za pomocą tego kalkulatora: wprowadź dodatni współczynnik skali k, aby znaleźć boki 3k, 4k i 5k oraz pole 6k do kwadratu i obwód 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
      },
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator trójkąta 3-4-5",
        "sec-calculate": "Skaluj trójkąt 3-4-5 i oblicz jego wymiary",
        "sec-what": "Czym jest trójkąt 3-4-5?",
        "sec-pythagorean": "Dlaczego 3-4-5 jest trójką pitagorejską?",
        "sec-sides": "Zrozumienie trzech boków trójkąta 3-4-5",
        "sec-ratio": "Zrozumienie stosunku boków 3-4-5",
        "sec-scale-factor": "Czym jest współczynnik skali w trójkącie 3-4-5?",
        "sec-leg-a": "Wzór na obliczenie pierwszej przyprostokątnej",
        "sec-leg-b": "Wzór na obliczenie drugiej przyprostokątnej",
        "sec-hypotenuse": "Wzór na obliczenie przeciwprostokątnej",
        "sec-area": "Jak obliczyć pole skalowanego trójkąta 3-4-5",
        "sec-perimeter": "Jak obliczyć obwód skalowanego trójkąta 3-4-5",
        "sec-find-k": "Jak znaleźć współczynnik skali na podstawie znanego boku",
        "sec-step-example": "Przykład krok po kroku skalowania trójkąta 3-4-5",
        "sec-examples": "Przykłady obliczeń dla różnych współczynników skali",
        "sec-right-angle": "Dlaczego trójkąt 3-4-5 zawsze zachowuje kąt 90 stopni?",
        "sec-construction": "Jak użyć reguły 3-4-5 do sprawdzenia kąta prostego",
        "sec-applications": "Zastosowania trójkąta 3-4-5 w budownictwie",
        "sec-similar": "Związek między trójkątami podobnymi a stosunkiem 3-4-5",
        "sec-vs-special": "Różnica między trójkątami 3-4-5, 45-45-90 i 30-60-90",
        "sec-mistakes": "Typowe błędy przy korzystaniu z kalkulatora trójkąta 3-4-5",
        "sec-verify": "Jak sprawdzić skalowany trójkąt 3-4-5",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Skaluj trójkąt 3-4-5 i znajdź jego boki, pole i obwód.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 3-4-5 to trójkąt prostokątny, którego długości boków mają stosunek [[3 : 4 : 5]]. Jest to najsłynniejsza trójka pitagorejska, ponieważ jej całkowite boki spełniają twierdzenie Pitagorasa: [[3^2 + 4^2 = 5^2]], ponieważ [[9 + 16 = 25]]. Bok o długości 5 to przeciwprostokątna, a boki o długości 3 i 4 to przyprostokątne.",
            },
            {
              "kind": "p",
              "text": "Kalkulator skaluje ten trójkąt dodatnim współczynnikiem skali [[k]], więc skalowane boki to [[a = 3k]], [[b = 4k]] i [[c = 5k]]. Oblicza też pole, [[A = 6k^2]], i obwód, [[P = 12k]], więc jedna dana wejściowa daje wszystkie pięć wyników. Do ogólnego trójkąta prostokątnego użyj <a href=\"/right-triangle-calculator/\">kalkulatora trójkąta prostokątnego</a>.",
            },
            {
              "kind": "p",
              "text": "Na przykład przy [[k = 2]] boki stają się [[a = 6]], [[b = 8]] i [[c = 10]], pole wynosi [[A = 24]] jednostki kwadratowe, a obwód wynosi [[P = 24]] jednostki.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Skaluj trójkąt 3-4-5 i oblicz jego wymiary",
          "blocks": [
            {
              "kind": "p",
              "text": "Jeden tryb, jedna dana wejściowa i pięć wyników.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ma jeden tryb: skalowanie trójkąta 3-4-5. Wprowadź dodatni współczynnik skali [[k]] i kliknij przycisk Oblicz, a kalkulator zwróci trzy skalowane długości boków, pole i obwód. Poniższa tabela zawiera każdy pomiar wraz z jego wzorem.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali [[k]] mnoży każdy pierwotny bok. Przy [[k = 1]] otrzymujesz pierwotny trójkąt 3-4-5. Wartość powyżej 1 powiększa go, a wartość między 0 a 1 pomniejsza go. Kalkulator pyta o [[k]], ponieważ stosunek ustala kształt: gdy znane jest [[k]], każdy pomiar wynika z niego.",
            },
            {
              "kind": "p",
              "text": "Wprowadzaj tylko liczbę dodatnią. Jeśli [[k = 0]], wszystkie trzy boki stają się zerowe, co jest figurą zdegenerowaną, a nie trójkątem, a ujemne [[k]] nie może dać poprawnych długości boków. Po obliczeniu użyj przycisku Resetuj, aby wyczyścić pole przed rozpoczęciem nowego zadania.",
            },
          ],
          "table": {
            "headers": [
              "Pomiar",
              "Wzór",
              "Wynik",
            ],
            "rows": [
              [
                "Pierwsza przyprostokątna",
                "3k",
                "Skalowany bok a",
              ],
              [
                "Druga przyprostokątna",
                "4k",
                "Skalowany bok b",
              ],
              [
                "Przeciwprostokątna",
                "5k",
                "Skalowany bok c",
              ],
              [
                "Pole",
                "6k²",
                "Pole trójkąta",
              ],
              [
                "Obwód",
                "12k",
                "Obwód trójkąta",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Czym jest trójkąt 3-4-5?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 3-4-5 nosi nazwę od swoich trzech długości boków.",
            },
            {
              "kind": "p",
              "text": "Jest to trójkąt prostokątny, którego długości boków mają stosunek [[3 : 4 : 5]]. Najdłuższy bok, 5, to przeciwprostokątna i leży naprzeciw kąta 90 stopni. Pozostałe dwa boki, 3 i 4, to przyprostokątne i spotykają się przy kącie prostym. W trójkącie ABC kąt C ma 90°, bok [[a]] to krótsza przyprostokątna o długości 3, bok [[b]] to dłuższa przyprostokątna o długości 4, a bok [[c]] to przeciwprostokątna o długości 5.",
            },
            {
              "kind": "p",
              "text": "Nazywa się go trójką pitagorejską, ponieważ liczby 3, 4 i 5 są liczbami całkowitymi spełniającymi [[a^2 + b^2 = c^2]]. Ta własność liczb całkowitych sprawia, że trójkąt jest użyteczny: budowniczowie, nauczyciele i uczniowie mogą sprawdzać kąt prosty zwykłymi całkowitymi pomiarami, bez pierwiastków kwadratowych i ułamków dziesiętnych. Jest to najmniejsza trójka pitagorejska, a każda jej skalowana kopia, na przykład 6-8-10, też jest trójką pitagorejską.",
            },
          ],
          "image": {
            "src": "three-four-five-main.svg",
            "alt": "Trójkąt prostokątny 3-4-5 ABC z oznaczeniami: krótsza przyprostokątna a równa się 3, dłuższa przyprostokątna b równa się 4, przeciwprostokątna c równa się 5, oraz znacznik kąta prostego",
            "caption": "Trójkąt ABC: przyprostokątne a = 3 i b = 4 spotykają się przy kącie prostym, a przeciwprostokątna to c = 5.",
          },
        },
        "sec-pythagorean": {
          "h2": "Dlaczego 3-4-5 jest trójką pitagorejską?",
          "blocks": [
            {
              "kind": "p",
              "text": "Liczby 3, 4 i 5 spełniają twierdzenie Pitagorasa dokładnie.",
            },
            {
              "kind": "p",
              "text": "Twierdzenie Pitagorasa mówi, że w trójkącie prostokątnym kwadrat przeciwprostokątnej jest równy sumie kwadratów przyprostokątnych:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw długości boków 3-4-5:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Oblicz każdy kwadrat:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Obie strony są równe 25, więc równanie zachodzi. Trójka pitagorejska to zestaw trzech liczb całkowitych spełniających to równanie, a 3-4-5 jest najmniejszą z nich. Równość działa też w drugą stronę: jeśli trójkąt ma długości boków 3, 4 i 5, kąt leżący naprzeciw boku o długości 5 musi mieć 90°.",
            },
            {
              "kind": "p",
              "text": "Bok o długości 5 musi być przeciwprostokątną, ponieważ jest najdłuższym bokiem. Boki o długości 3 i 4 muszą być przyprostokątnymi, ponieważ spotykają się przy kącie prostym. <a href=\"/pythagorean-triples-calculator/\">Kalkulator trójek pitagorejskich</a> zawiera inne całkowite trójki, w tym 5-12-13, inną trójkę.",
            },
          ],
          "image": {
            "src": "three-four-five-pythagoras.svg",
            "alt": "Diagram pitagorejski dla trójkąta 3-4-5 pokazujący, że 3 do kwadratu plus 4 do kwadratu równa się 5 do kwadratu, przy czym 9 plus 16 równa się 25",
            "caption": "3² + 4² = 5², ponieważ 9 + 16 = 25, więc 3-4-5 jest trójką pitagorejską.",
          },
        },
        "sec-sides": {
          "h2": "Zrozumienie trzech boków trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw niego.",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna [[a]] ma długość 3 w podstawowym trójkącie. Jest to bok BC w trójkącie ABC i leży naprzeciw kąta A, około 36,87°. Dłuższa przyprostokątna [[b]] ma długość 4, jest bokiem AC i leży naprzeciw kąta B, około 53,13°. Dwie przyprostokątne spotykają się w wierzchołku C, gdzie tworzą kąt 90°.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna [[c]] ma długość 5, jest bokiem AB i leży naprzeciw kąta 90°. Jest najdłuższym bokiem, ponieważ największy kąt zawsze leży naprzeciw najdłuższego boku. Gdy trójkąt jest skalowany, role nigdy się nie zmieniają: [[a]] pozostaje krótszą przyprostokątną, [[b]] pozostaje dłuższą przyprostokątną, a [[c]] pozostaje przeciwprostokątną.",
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
                "Krótsza przyprostokątna a (BC)",
                "36,87°",
                "3",
              ],
              [
                "Dłuższa przyprostokątna b (AC)",
                "53,13°",
                "4",
              ],
              [
                "Przeciwprostokątna c (AB)",
                "90°",
                "5, najdłuższy bok",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Zrozumienie stosunku boków 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek 3:4:5 ustala kształt każdego trójkąta 3-4-5.",
            },
            {
              "kind": "p",
              "text": "Stosunek boków trójkąta 3-4-5 wynosi:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Każda część stosunku opisuje jeden bok. Krótsza przyprostokątna odpowiada 3 jednostkom proporcjonalnym, dłuższa przyprostokątna odpowiada 4 jednostkom proporcjonalnym, a przeciwprostokątna odpowiada 5 jednostkom proporcjonalnym. Zapisane ze współczynnikiem skali [[k]] trzy boki to [[a = 3k]], [[b = 4k]] i [[c = 5k]], więc stosunek w postaci skalowanej to [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "Stosunek nie zmienia się, gdy trójkąt jest powiększany lub pomniejszany, ponieważ pomnożenie wszystkich trzech boków przez tę samą liczbę pozostawia ich proporcje bez zmian. Zestawy 3, 4, 5 oraz 6, 8, 10 oraz 9, 12, 15 oraz 15, 20, 25 wszystkie przedstawiają ten sam kształt trójkąta w różnych rozmiarach.",
            },
          ],
          "image": {
            "src": "three-four-five-scaled.svg",
            "alt": "Trzy podobne trójkąty 3-4-5 w różnych rozmiarach, oznaczone jako 3-4-5, 6-8-10 i 9-12-15, o tych samych proporcjach",
            "caption": "3-4-5, 6-8-10 i 9-12-15 mają ten sam kształt i ten sam stosunek 3:4:5.",
          },
        },
        "sec-scale-factor": {
          "h2": "Czym jest współczynnik skali w trójkącie 3-4-5?",
          "blocks": [
            {
              "kind": "p",
              "text": "Współczynnik skali mnoży każdy bok przez tę samą liczbę.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali [[k]] mnoży wszystkie trzy pierwotne długości boków przez tę samą liczbę dodatnią. Skalowane boki to:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Przy [[k = 1]] otrzymujesz pierwotny trójkąt 3, 4, 5. Wartość [[k]] większa od 1 powiększa go, a wartość między 0 a 1 pomniejsza go, na przykład [[k = 0.5]] daje 1,5, 2, 2,5. Współczynnik skali musi być dodatni: zero nie daje trójkąta, a wartość ujemna nie może dać poprawnych długości boków.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali zmienia rozmiar, a nie kształt. Wszystkie odpowiadające sobie długości boków pozostają proporcjonalne, kąty pozostają takie same, a stosunek pozostaje 3:4:5. Powyższa tabela pokazuje, jak boki, pole i obwód zmieniają się wraz z [[k]]: obwód rośnie wraz z [[k]], natomiast pole rośnie wraz z kwadratem [[k]].",
            },
          ],
          "table": {
            "headers": [
              "Współczynnik skali k",
              "Boki",
              "Pole",
              "Obwód",
            ],
            "rows": [
              [
                "0,5",
                "1,5, 2, 2,5",
                "1,5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-scale-factor.svg",
            "alt": "Skalowany trójkąt 3-4-5 o współczynniku skali k równym 2, z oznaczonymi bokami a równym 6, b równym 8 i c równym 10",
            "caption": "Przy k = 2 boki to a = 6, b = 8 i c = 10.",
          },
        },
        "sec-leg-a": {
          "h2": "Wzór na obliczenie pierwszej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna to trzy razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[a]] to krótsza przyprostokątna, a [[k]] to współczynnik skali. Wzór jest bezpośrednim odczytaniem stosunku: krótsza przyprostokątna odpowiada 3 jednostkom na każdą jednostkę [[k]], więc pomnożenie 3 przez [[k]] daje skalowaną długość. Użyj [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Wynik jest skalowaną długością boku, a nie kątem ani współczynnikiem skali. Jest zawsze krótszy od pozostałych dwóch boków, ponieważ 3 to najmniejsza część stosunku 3:4:5, i pozostaje krótszą przyprostokątną przy każdym dodatnim współczynniku skali.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Wzór na obliczenie drugiej przyprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna to cztery razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[b]] to dłuższa przyprostokątna, a [[k]] to współczynnik skali. Dłuższa przyprostokątna odpowiada 4 jednostkom na każdą jednostkę [[k]], więc pomnożenie 4 przez [[k]] daje skalowaną długość. Użyj [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Ten bok pozostaje dłuższy od pierwszej przyprostokątnej przy każdym dodatnim współczynniku skali, ponieważ 4 jest większe od 3, a oba boki są mnożone przez to samo [[k]]. Pozostaje też krótszy od przeciwprostokątnej, ponieważ 4 jest mniejsze od 5. Zachowaj właściwą kolejność dwóch przyprostokątnych: [[a]] to bok 3, a [[b]] to bok 4.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Wzór na obliczenie przeciwprostokątnej",
          "blocks": [
            {
              "kind": "p",
              "text": "Przeciwprostokątna to pięć razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[c]] to przeciwprostokątna, a [[k]] to współczynnik skali. Przeciwprostokątna odpowiada 5 jednostkom na każdą jednostkę [[k]], więc pomnożenie 5 przez [[k]] daje skalowaną długość. Użyj [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna pozostaje najdłuższym bokiem przy każdym dodatnim współczynniku skali, ponieważ 5 to największa część stosunku. Sprawdź ją względem przyprostokątnych: przy [[k = 4]] boki to 12, 16 i 20, a [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], więc twierdzenie Pitagorasa potwierdza wynik.",
            },
          ],
        },
        "sec-area": {
          "h2": "Jak obliczyć pole skalowanego trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Pole wykorzystuje dwie przyprostokątne, a współczynnik skali jest podnoszony do kwadratu.",
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
              "text": "Podstaw skalowane przyprostokątne, [[a = 3k]] i [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Uprość:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "Dzielenie przez dwa jest konieczne, ponieważ trójkąt pokrywa połowę prostokąta utworzonego przez jego dwie przyprostokątne. Czynnik [[k]] jest podnoszony do kwadratu, ponieważ obie przyprostokątne zawierają czynnik [[k]]. Pole mierzy się w jednostkach kwadratowych. Podwojenie współczynnika skali czterokrotnie zwiększa pole: przy [[k = 2]] pole wynosi 24 jednostki kwadratowe, cztery razy więcej niż 6 jednostek kwadratowych przy [[k = 1]]. Do ogólnego trójkąta prostokątnego użyj zamiast tego <a href=\"/right-triangle-area-calculator/\">kalkulatora pola trójkąta prostokątnego</a>.",
            },
            {
              "kind": "p",
              "text": "Użyj [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-area.svg",
            "alt": "Diagram pola trójkąta 3-4-5 o podstawie 3k, wysokości 4k i polu 6k do kwadratu, pokazujący, że k równe 2 daje 24 jednostki kwadratowe",
            "caption": "Pole z podstawy 3k i wysokości 4k: A = 6k², a k = 2 daje 24 jednostki kwadratowe.",
          },
        },
        "sec-perimeter": {
          "h2": "Jak obliczyć obwód skalowanego trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Dodaj wszystkie trzy boki, a obwód skaluje się wraz z k.",
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
              "text": "Podstaw skalowane boki:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Uprość:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Wszystkie trzy boki muszą zostać dodane, ponieważ obwód biegnie wzdłuż całej granicy. Pominięcie któregokolwiek boku daje krótszą odległość, która nie jest obwodem. Obwód skaluje się bezpośrednio wraz z [[k]], więc podwojenie [[k]] podwaja obwód, w przeciwieństwie do pola, które rośnie czterokrotnie. Obwód wyraża się w jednostkach liniowych, nigdy w jednostkach kwadratowych. Do ogólnego trójkąta prostokątnego użyj <a href=\"/right-triangle-perimeter-calculator/\">kalkulatora obwodu trójkąta prostokątnego</a>.",
            },
            {
              "kind": "p",
              "text": "Użyj [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-perimeter.svg",
            "alt": "Diagram obwodu trójkąta 3-4-5 pokazujący, że P równa się 3k plus 4k plus 5k równa się 12k, przy czym k równe 2 daje 24 jednostki",
            "caption": "Obwód: P = 3k + 4k + 5k = 12k, a k = 2 daje 24 jednostki.",
          },
        },
        "sec-find-k": {
          "h2": "Jak znaleźć współczynnik skali na podstawie znanego boku",
          "blocks": [
            {
              "kind": "p",
              "text": "Podziel znany bok przez jego część stosunku.",
            },
            {
              "kind": "p",
              "text": "Kalkulator przyjmuje bezpośrednio [[k]], więc te równania to obliczenia wykonywane ręcznie, które pomagają znaleźć [[k]], gdy znany jest już jeden bok. Podziel znany bok przez liczbę, którą ten bok reprezentuje w stosunku 3:4:5. Jeśli znana jest krótsza przyprostokątna:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Jeśli znana jest dłuższa przyprostokątna:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Jeśli znana jest przeciwprostokątna:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Trzy krótkie przykłady: krótsza przyprostokątna [[a = 12]] daje [[k = 12 / 3 = 4]]; dłuższa przyprostokątna [[b = 20]] daje [[k = 20 / 4 = 5]]; przeciwprostokątna [[c = 30]] daje [[k = 30 / 5 = 6]]. Gdy masz już [[k]], wprowadź je do kalkulatora. Sam kalkulator nie przyjmuje długości boku i nie znajduje za Ciebie [[k]].",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Przykład krok po kroku skalowania trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Współczynnik skali k = 2, omówiony od początku do końca.",
            },
            {
              "kind": "p",
              "text": "Zacznij od [[k = 2]] i znajdź każdy pomiar skalowanego trójkąta, jeden wzór naraz. Każdy krok wykorzystuje wzór z powyższych sekcji, a tabela podsumowująca na końcu zbiera wyniki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Znajdź pierwszą przyprostokątną: [[a = 3k = 3 \\times 2 = 6]].",
                "Znajdź drugą przyprostokątną: [[b = 4k = 4 \\times 2 = 8]].",
                "Znajdź przeciwprostokątną: [[c = 5k = 5 \\times 2 = 10]].",
                "Znajdź pole: [[A = 6k^2 = 6 \\times 4 = 24]] jednostki kwadratowe.",
                "Znajdź obwód: [[P = 12k = 12 \\times 2 = 24]] jednostki.",
              ],
            },
            {
              "kind": "p",
              "text": "Nowy trójkąt zachowuje pierwotne proporcje 3:4:5: liczby 6, 8 i 10 są dwukrotnie większe od 3, 4 i 5. Sprawdź kąt prosty za pomocą twierdzenia Pitagorasa: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. Pole i obwód mają tu tę samą liczbę 24, ale mierzą różne rzeczy.",
            },
          ],
          "table": {
            "headers": [
              "Pomiar",
              "Wartość",
            ],
            "rows": [
              [
                "Pierwsza przyprostokątna a",
                "6",
              ],
              [
                "Druga przyprostokątna b",
                "8",
              ],
              [
                "Przeciwprostokątna c",
                "10",
              ],
              [
                "Pole A",
                "24 jednostki kwadratowe",
              ],
              [
                "Obwód P",
                "24 jednostki",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Przykłady obliczeń dla różnych współczynników skali",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem przykładów obliczeń, od pierwotnego trójkąta do k = 10.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Trójkąt pierwotny, k = 1",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 1]]. Boki: [[a = 3]], [[b = 4]], [[c = 5]]. Pole: [[A = 6(1^2) = 6]] jednostek kwadratowych. Obwód: [[P = 12(1) = 12]] jednostek.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Współczynnik skali 2",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 2]]. Boki: [[a = 6]], [[b = 8]], [[c = 10]]. Pole: [[A = 6(2^2) = 24]] jednostki kwadratowe. Obwód: [[P = 12(2) = 24]] jednostki. Podwojenie [[k]] podwaja boki i obwód oraz czterokrotnie zwiększa pole.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Współczynnik skali 3",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 3]]. Boki: [[a = 9]], [[b = 12]], [[c = 15]]. Pole: [[A = 6(3^2) = 54]] jednostki kwadratowe. Obwód: [[P = 12(3) = 36]] jednostek.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Współczynnik skali 5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 5]]. Boki: [[a = 15]], [[b = 20]], [[c = 25]]. Pole: [[A = 6(5^2) = 150]] jednostek kwadratowych. Obwód: [[P = 12(5) = 60]] jednostek. Ten trójkąt 15-20-25 to powszechny rozmiar w układzie budowlanym.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Współczynnik skali 0,5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 0.5]]. Boki: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Pole: [[A = 6(0.5^2) = 1.5]] jednostki kwadratowej. Obwód: [[P = 12(0.5) = 6]] jednostek. Współczynnik skali poniżej 1 pomniejsza trójkąt.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Współczynnik skali 1,5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 1.5]]. Boki: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Pole: [[A = 6(1.5^2) = 13.5]] jednostki kwadratowej. Obwód: [[P = 12(1.5) = 18]] jednostek. Dziesiętne współczynniki skali działają dokładnie tak samo jak całkowite.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Współczynnik skali 4",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 4]]. Boki: [[a = 12]], [[b = 16]], [[c = 20]]. Pole: [[A = 6(4^2) = 96]] jednostek kwadratowych. Obwód: [[P = 12(4) = 48]] jednostek.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Współczynnik skali 10",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 10]]. Boki: [[a = 30]], [[b = 40]], [[c = 50]]. Pole: [[A = 6(10^2) = 600]] jednostek kwadratowych. Obwód: [[P = 12(10) = 120]] jednostek. Pole wzrosło 100 razy, natomiast boki wzrosły 10 razy.",
            },
            {
              "kind": "p",
              "text": "We wszystkich ośmiu przykładach wzorzec nigdy się nie zmienia: boki rosną wraz z [[k]], obwód rośnie wraz z [[k]], a pole rośnie wraz z kwadratem [[k]].",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Dlaczego trójkąt 3-4-5 zawsze zachowuje kąt 90 stopni?",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalowanie nigdy nie narusza zależności pitagorejskiej.",
            },
            {
              "kind": "p",
              "text": "Skalowane boki to [[3k]], [[4k]] i [[5k]]. Zastosuj do nich twierdzenie Pitagorasa:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Rozwiń każdy kwadrat:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Obie strony są równe [[25k^2]], więc zależność zachodzi dla każdego dodatniego [[k]]. Czynnik [[k^2]] występuje po obu stronach, dlatego skalowanie nie może zmienić kąta. Dwa kąty ostre pozostają około 36,87° i 53,13°, a ich suma pozostaje 90°, więc trzeci kąt pozostaje dokładnie 90°.",
            },
            {
              "kind": "p",
              "text": "Jest to ten sam pomysł co podobieństwo: każdy skalowany trójkąt 3-4-5 jest podobny do pierwotnego, ma równe odpowiadające sobie kąty i proporcjonalne boki. Trójkąt o bokach 6, 8, 10 ma te same kąty co trójkąt o bokach 3, 4, 5.",
            },
          ],
        },
        "sec-construction": {
          "h2": "Jak użyć reguły 3-4-5 do sprawdzenia kąta prostego",
          "blocks": [
            {
              "kind": "p",
              "text": "Odznacz 3, zmierz 4 i sprawdź, czy przekątna ma 5.",
            },
            {
              "kind": "p",
              "text": "Budowniczowie używają metody 3-4-5 do sprawdzenia kąta 90 stopni bez użycia kątownika. Zacznij od narożnika i odznacz 3 jednostki wzdłuż jednego boku, a następnie odznacz 4 jednostki wzdłuż sąsiadującego boku. Zmierz odległość między dwoma zaznaczonymi końcami: jeśli wynosi 5 jednostek, kąt ma 90 stopni, z zastrzeżeniem dokładności pomiaru.",
            },
            {
              "kind": "p",
              "text": "Praktyczny przykład wykorzystuje stopy: 3 stopy w jednym kierunku, 4 stopy w sąsiadującym kierunku i przekątna 5 stóp. Sprawdzenie to [[3^2 + 4^2 = 5^2]], ponieważ [[9 + 16 = 25]]. Jeśli przekątna jest dłuższa niż 5 stóp, narożnik jest szerszy niż 90 stopni; jeśli krótsza, jest węższy.",
            },
            {
              "kind": "p",
              "text": "Większe wielokrotności sprawdzają się lepiej na większych układach, ponieważ dłuższa linia bazowa sprawia, że mały błąd oznaczania stanowi mniejszy udział w pomiarze. Używaj 6-8-10, 9-12-15, 12-16-20 lub 15-20-25 stóp, zachowując tę samą jednostkę we wszystkich trzech pomiarach.",
            },
            {
              "kind": "p",
              "text": "Metoda sprawdza zależność kąta prostego, gdy pomiary są dokładne. Błędy, nierówne powierzchnie, ugięcie taśmy i niedokładności oznaczania mogą wpłynąć na wynik, więc nie twierdź, że gwarantuje ona idealną dokładność budowlaną. Trzymaj taśmę poziomo i napiętą oraz powtórz sprawdzenie od drugiego narożnika tam, gdzie pozwala na to układ.",
            },
          ],
          "image": {
            "src": "three-four-five-construction.svg",
            "alt": "Układ budowlany pokazujący narożnik z 3 stopami odznaczonymi w jednym kierunku, 4 stopami w sąsiadującym kierunku i przekątną 5 stóp ze znacznikiem kąta prostego",
            "caption": "Odznacz 3 stopy w jedną stronę i 4 stopy w drugą stronę: przekątna 5 stóp oznacza kąt prosty.",
          },
        },
        "sec-applications": {
          "h2": "Zastosowania trójkąta 3-4-5 w budownictwie",
          "blocks": [
            {
              "kind": "p",
              "text": "Reguła 3-4-5 pojawia się wszędzie tam, gdzie liczy się kąt prosty.",
            },
            {
              "kind": "p",
              "text": "Sprawdzanie narożników prostych to główne zastosowanie: budowniczy odznacza 3 i 4 jednostki od narożnika i sprawdza przekątną 5 jednostek przed przymocowaniem ramy na miejscu. Wytyczanie fundamentów wykorzystuje to samo sprawdzenie w każdym narożniku, dzięki czemu ściany zaczynają się pod kątem prostym.",
            },
            {
              "kind": "p",
              "text": "Wyznaczanie planów pięter, sprawdzanie prostokątnych układów pomieszczeń, budowa tarasów, montaż patio i układanie płytek wszystkie opierają się na kątach prostych, a metoda działa w każdym z nich w skali pasującej do zadania. Wytyczanie ogrodzeń, stolarka, kształtowanie terenu i geodezja wykorzystują to samo sprawdzenie kątów prostych.",
            },
            {
              "kind": "p",
              "text": "Używaj realistycznych pomiarów do zadania, takich jak 3-4-5 stóp dla małej ramy lub 9-12-15 stóp dla narożnika fundamentu. Metoda jest praktycznym sprawdzeniem, a nie zamiennikiem profesjonalnych pomiarów geodezyjnych ani wymagań budowlanych.",
            },
          ],
        },
        "sec-similar": {
          "h2": "Związek między trójkątami podobnymi a stosunkiem 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy skalowany trójkąt 3-4-5 jest podobny do pierwotnego.",
            },
            {
              "kind": "p",
              "text": "Trójkąty podobne mają ten sam kształt, ale różne rozmiary: ich odpowiadające sobie kąty są równe, a odpowiadające sobie boki są proporcjonalne. Trójkąty 3-4-5 i 6-8-10 mają identyczne kąty, około 36,87°, 53,13° i 90°, a każdy bok drugiego jest dokładnie dwukrotnie dłuższy od odpowiadającego mu boku pierwszego.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali zmienia rozmiar, podczas gdy kształt pozostaje bez zmian. Wszystkie stosunki boków pozostają 3:4:5, więc [[a : b : c = 3 : 4 : 5]] zachodzi dla pierwotnego trójkąta i dla każdej skalowanej kopii. Dlatego kalkulator może opisać każdy skalowany trójkąt 3-4-5 jedną liczbą, [[k]].",
            },
          ],
        },
        "sec-vs-special": {
          "h2": "Różnica między trójkątami 3-4-5, 45-45-90 i 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy trójkąty prostokątne, trzy różne stosunki boków.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 3-4-5 nie jest automatycznie trójkątem 45-45-90 ani 30-60-90. Wszystkie trzy są trójkątami prostokątnymi, ale ich kąty i stosunki boków różnią się, więc ich wzorów nie można zamieniać. Trójkąt 3-4-5 ma nierówne przyprostokątne i całkowite boki, trójkąt 45-45-90 jest równoramienny i ma przeciwprostokątną [[a\\sqrt{2}]], a trójkąt 30-60-90 ma przeciwprostokątną dwukrotnie dłuższą od krótkiej przyprostokątnej. <a href=\"/special-right-triangle-calculator/\">Kalkulator szczególnego trójkąta prostokątnego</a> obejmuje przypadki 45-45-90 i 30-60-90, natomiast <a href=\"/5-12-13-triangle-calculator/\">kalkulator trójkąta 5-12-13</a> obejmuje inną trójkę pitagorejską.",
            },
            {
              "kind": "p",
              "text": "Poniższa tabela porównuje trzy trójkąty obok siebie. Najpierw potwierdź kąty, a potem wybierz stosunek, który do nich pasuje: błędny stosunek daje błędną przeciwprostokątną i błędne pole.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Stosunek boków",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kąty",
                "36,87°, 53,13°, 90°",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Równe przyprostokątne",
                "Nie",
                "Tak",
                "Nie",
              ],
              [
                "Przeciwprostokątna",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Główna własność",
                "Trójka pitagorejska",
                "Trójkąt prostokątny równoramienny",
                "Szczególny stosunek kątów",
              ],
              [
                "Zastosowanie kalkulatora",
                "Skalowanie",
                "Obliczenia szczególnego trójkąta",
                "Obliczenia szczególnego trójkąta",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-triples.svg",
            "alt": "Porównanie trójek pitagorejskich 3-4-5, 6-8-10 i 5-12-13, pokazujące, że 6-8-10 to skalowany trójkąt 3-4-5, natomiast 5-12-13 to inna trójka",
            "caption": "6-8-10 to skalowany trójkąt 3-4-5, natomiast 5-12-13 to inna trójka pitagorejska.",
          },
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy korzystaniu z kalkulatora trójkąta 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście błędów pojawia się w zadaniach 3-4-5 raz za razem.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mnożenie tylko jednego boku przez współczynnik skali: przy [[k = 2]] boki to 6, 8 i 10, a nie 6, 4 i 5. Pomnóż wszystkie trzy boki przez to samo [[k]].",
                "Zapominanie o równym skalowaniu wszystkich trzech boków: skalowanie tylko przyprostokątnych narusza stosunek i kąt prosty. Zastosuj to samo [[k]] do każdego boku.",
                "Traktowanie 5 jako przyprostokątnej zamiast przeciwprostokątnej: 5 to najdłuższy bok i leży naprzeciw kąta 90°. [[c = 5k]] zawsze jest przeciwprostokątną.",
                "Mylenie współczynnika skali z długością boku: [[k]] to mnożnik, a nie bok. Przy [[k = 2]] boki to 6, 8 i 10.",
                "Używanie zera jako poprawnego współczynnika skali: [[k = 0]] sprawia, że wszystkie trzy boki są zerowe, co jest figurą zdegenerowaną, a nie trójkątem. [[k]] musi być większe od zera.",
                "Wprowadzanie ujemnego współczynnika skali: ujemne [[k]] daje ujemne długości boków, które nie mogą opisywać trójkąta. Wprowadzaj tylko dodatnie [[k]].",
                "Zapominanie o podniesieniu k do kwadratu we wzorze na pole: pole rośnie wraz z kwadratem [[k]]. Przy [[k = 3]], [[A = 6 \\times 9 = 54]], a nie 18.",
                "Mylenie pola z obwodem: pole wyraża się w jednostkach kwadratowych, a obwód w jednostkach liniowych. Przy [[k = 2]] oba są równe 24, ale mierzą różne rzeczy.",
                "Dodawanie tylko dwóch boków przy obliczaniu obwodu: przy [[k = 2]], [[6 + 8 = 14]] pomija przeciwprostokątną. Dodaj wszystkie trzy boki.",
                "Mieszanie jednostek pomiaru: przyprostokątna w stopach i przekątna w calach nie mogą być łączone bezpośrednio. Najpierw przelicz wszystkie pomiary na jedną jednostkę.",
                "Zakładanie, że działają tylko liczby 3, 4 i 5: każda skalowana kopia, na przykład 6-8-10 lub 9-12-15, jest poprawnym trójkątem 3-4-5.",
                "Zakładanie, że każdy trójkąt prostokątny ma stosunek 3:4:5: większość trójkątów prostokątnych ma inne stosunki. Potwierdź stosunek przed użyciem wzorów.",
                "Mylenie trójkąta 3-4-5 z trójkątem 45-45-90: trójkąt 3-4-5 ma kąty około 36,87° i 53,13°, a nie dwa kąty 45°.",
                "Niepotrzebne zaokrąglanie pomiarów: wczesne zaokrąglanie przenosi błędy do kolejnych kroków. Zaokrąglaj tylko ostateczną odpowiedź.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak sprawdzić skalowany trójkąt 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery szybkie kontrole wychwytują prawie każdy błąd.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 1: Stosunek boków",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[a : b : c = 3 : 4 : 5]]. Tutaj [[6 : 8 : 10]] dzieli się przez 2, dając [[3 : 4 : 5]], więc kontrola przechodzi. Jeśli boki nie sprowadzają się do 3:4:5, nie są skalowanym trójkątem 3-4-5.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 2: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[a^2 + b^2 = c^2]]. Tutaj [[6^2 + 8^2 = 36 + 64 = 100]], a [[10^2 = 100]], więc twierdzenie zachodzi. Błędna wartość któregokolwiek boku narusza tę równość.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 3: Zgodność współczynnika skali",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Tutaj każde dzielenie daje 2, więc [[k = 2]] ze wszystkich trzech boków. Jeśli trzy dzielenia różnią się, co najmniej jeden bok jest błędny.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 4: Kolejność boków",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[a < b < c]]. Tutaj [[6 < 8 < 10]], więc kolejność zachodzi. Jeśli rzekoma przeciwprostokątna nie jest najdłuższym bokiem, oznaczenia są pomieszane.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiąż wszystkie osiem zadań na papierze przed przeczytaniem odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Skalowanie przy k = 2",
            },
            {
              "kind": "p",
              "text": "Skaluj trójkąt 3-4-5, używając [[k = 2]]. Znajdź trzy długości boków, pole i obwód.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Skalowanie przy k = 4",
            },
            {
              "kind": "p",
              "text": "Skaluj trójkąt 3-4-5, używając [[k = 4]]. Znajdź trzy długości boków, pole i obwód.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pole przy k = 3",
            },
            {
              "kind": "p",
              "text": "Znajdź pole skalowanego trójkąta 3-4-5 o [[k = 3]], w jednostkach kwadratowych.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Obwód przy k = 5",
            },
            {
              "kind": "p",
              "text": "Znajdź obwód skalowanego trójkąta 3-4-5 o [[k = 5]], w jednostkach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź k na podstawie a = 15",
            },
            {
              "kind": "p",
              "text": "Skalowany trójkąt 3-4-5 ma krótszą przyprostokątną równą 15. Znajdź [[k]] i pozostałe dwa boki.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Znajdź k na podstawie b = 24",
            },
            {
              "kind": "p",
              "text": "Skalowany trójkąt 3-4-5 ma dłuższą przyprostokątną równą 24. Znajdź [[k]] i pozostałe dwa boki.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 7: Znajdź k na podstawie c = 35",
            },
            {
              "kind": "p",
              "text": "Skalowany trójkąt 3-4-5 ma przeciwprostokątną równą 35. Znajdź [[k]] i dwie przyprostokątne.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 8: Sprawdź liczby 12, 16 i 20",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy liczby 12, 16 i 20 tworzą skalowany trójkąt 3-4-5, używając twierdzenia Pitagorasa i stosunku boków. Jeśli tak, podaj współczynnik skali.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] jednostki kwadratowe, [[P = 24]] jednostki.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] jednostki kwadratowe, [[P = 48]] jednostek.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[A = 6(3^2) = 54]] jednostki kwadratowe.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[P = 12(5) = 60]] jednostek.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[k = 15 / 3 = 5]], więc [[b = 20]] i [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[k = 24 / 4 = 6]], więc [[a = 18]] i [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 7: [[k = 35 / 5 = 7]], więc [[a = 21]] i [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], a [[12 : 16 : 20]] dzieli się przez 4, dając [[3 : 4 : 5]], więc tak, przy [[k = 4]].",
            },
          ],
        },
      },
      "relatedHeading": "Powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje inne zadanie dotyczące trójkąta prostokątnego, więc wybierz narzędzie pasujące do pomiaru, którego potrzebujesz.",
      "relatedItems": [
        "Kalkulator trójkąta prostokątnego",
        "Kalkulator trójek pitagorejskich",
        "Kalkulator trójkąta 5-12-13",
        "Kalkulator szczególnego trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator obwodu trójkąta prostokątnego",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Czym jest trójkąt 3-4-5?",
          "answer": "Trójkąt 3-4-5 to trójkąt prostokątny, którego długości boków mają stosunek [[3 : 4 : 5]]. Boki o długości 3 i 4 to przyprostokątne, które spotykają się przy kącie 90 stopni, a bok o długości 5 to przeciwprostokątna. Jest to najmniejsza trójka pitagorejska.",
        },
        {
          "question": "Dlaczego trójkąt 3-4-5 tworzy kąt prosty?",
          "answer": "Jego boki spełniają twierdzenie Pitagorasa: [[3^2 + 4^2 = 5^2]], ponieważ [[9 + 16 = 25]]. Ta równość zachodzi tylko dla trójkątów prostokątnych, więc kąt leżący naprzeciw boku o długości 5 musi mieć 90 stopni. Skalowanie zachowuje równość, więc każda skalowana kopia zachowuje kąt prosty.",
        },
        {
          "question": "Czym jest reguła trójkąta 3-4-5?",
          "answer": "Reguła mówi, że długości boków w stosunku [[3 : 4 : 5]] zawsze tworzą trójkąt prostokątny. Budowniczowie używają jej do sprawdzania kątów prostych: odznacz 3 jednostki w jedną stronę, 4 jednostki w drugą stronę, a jeśli przekątna ma 5 jednostek, narożnik jest prosty, z zastrzeżeniem dokładności pomiaru.",
        },
        {
          "question": "Jak działa kalkulator trójkąta 3-4-5?",
          "answer": "Wprowadź dodatni współczynnik skali [[k]] i kliknij przycisk Oblicz. Kalkulator mnoży pierwotne boki przez [[k]], dając [[a = 3k]], [[b = 4k]] i [[c = 5k]], a następnie oblicza pole [[A = 6k^2]] i obwód [[P = 12k]]. Użyj przycisku Resetuj, aby wyczyścić pole.",
        },
        {
          "question": "Czym jest współczynnik skali w trójkącie 3-4-5?",
          "answer": "Współczynnik skali [[k]] to liczba, która mnoży wszystkie trzy pierwotne długości boków o tę samą wartość. Przy [[k = 1]] otrzymujesz pierwotny trójkąt, większe [[k]] powiększa go, a [[k]] między 0 a 1 pomniejsza go. Kształt i kąty pozostają takie same.",
        },
        {
          "question": "Jak obliczyć boki skalowanego trójkąta 3-4-5?",
          "answer": "Pomnóż każdą część stosunku przez [[k]]: [[a = 3k]], [[b = 4k]] i [[c = 5k]]. Przy [[k = 2]] boki to 6, 8 i 10. Każdy bok musi używać tego samego [[k]], w przeciwnym razie stosunek się załamuje, a trójkąt traci kąt prosty.",
        },
        {
          "question": "Jak obliczyć jego pole?",
          "answer": "Użyj przyprostokątnych we wzorze [[A = \\frac{ab}{2}]], który upraszcza się do [[A = 6k^2]] dla skalowanego trójkąta 3-4-5. Przy [[k = 3]], [[A = 6 \\times 9 = 54]] jednostki kwadratowe. Pole zawsze wyraża się w jednostkach kwadratowych i rośnie wraz z kwadratem [[k]].",
        },
        {
          "question": "Jak obliczyć jego obwód?",
          "answer": "Dodaj wszystkie trzy boki za pomocą wzoru [[P = a + b + c]], który upraszcza się do [[P = 12k]]. Przy [[k = 3]], [[P = 36]] jednostek. Obwód rośnie bezpośrednio wraz z [[k]], więc podwojenie [[k]] podwaja obwód. Odpowiedź wyraża się w jednostkach liniowych, a nie kwadratowych.",
        },
        {
          "question": "Czy mogę użyć 6-8-10 zamiast 3-4-5?",
          "answer": "Tak. Boki 6, 8 i 10 to trójkąt 3-4-5 skalowany przez [[k = 2]], więc tworzą ten sam kształt o tych samych kątach i tym samym kącie prostym. Każda skalowana kopia, na przykład 9-12-15 lub 15-20-25, działa tak samo.",
        },
        {
          "question": "Jak budowniczowie używają reguły 3-4-5?",
          "answer": "Budowniczy odznacza 3 stopy wzdłuż jednego boku od narożnika i 4 stopy wzdłuż sąsiadującego boku, a następnie mierzy przekątną między oznaczeniami. Jeśli wynosi 5 stóp, narożnik jest prosty. Większe wielokrotności, takie jak 6-8-10 lub 9-12-15 stóp, pasują do większych układów.",
        },
        {
          "question": "Czy współczynnik skali może być liczbą dziesiętną?",
          "answer": "Tak, każda dodatnia wartość rzeczywista [[k]] daje poprawny skalowany trójkąt 3-4-5. Przy [[k = 0.5]] boki to 1,5, 2 i 2,5, a przy [[k = 1.5]] to 4,5, 6 i 7,5. Zero i wartości ujemne nie dają poprawnych trójkątów.",
        },
        {
          "question": "Czy każdy trójkąt 3-4-5 jest trójką pitagorejską?",
          "answer": "Tak, każdy skalowany trójkąt 3-4-5 o całkowitym współczynniku skali jest trójką pitagorejską, ponieważ jego boki są liczbami całkowitymi spełniającymi [[a^2 + b^2 = c^2]]. Przy dziesiętnym współczynniku skali boki nadal spełniają twierdzenie. Trójka 5-12-13 to inna trójka pitagorejska.",
        },
      ],
    },
};
