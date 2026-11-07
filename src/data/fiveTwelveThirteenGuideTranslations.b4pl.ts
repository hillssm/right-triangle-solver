// fiveTwelveThirteenGuideTranslations.bpl.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator trójkąta 5-12-13 – skalowanie boków, pole, obwód",
        "description": "Skaluj trójkąt 5-12-13: wprowadź dodatni współczynnik skali k, aby obliczyć boki 5k, 12k i 13k, pole 30k do kwadratu oraz obwód 30k.",
        "primaryKeyword": "Kalkulator trójkąta 5-12-13",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator trójkąta 5-12-13",
        "sec-calculate": "Skalowanie trójkąta 5-12-13 i obliczanie jego miar",
        "sec-what": "Czym jest trójkąt 5-12-13?",
        "sec-pythagorean": "Dlaczego 5-12-13 jest trójką pitagorejską?",
        "sec-sides": "Trzy boki trójkąta 5-12-13",
        "sec-ratio": "Stosunek boków 5-12-13",
        "sec-scale-factor": "Czym jest współczynnik skali w trójkącie 5-12-13?",
        "sec-leg-a": "Wzór na krótszą przyprostokątną",
        "sec-leg-b": "Wzór na dłuższą przyprostokątną",
        "sec-hypotenuse": "Wzór na przeciwprostokątną",
        "sec-area": "Jak obliczyć pole przeskalowanego trójkąta 5-12-13",
        "sec-perimeter": "Jak obliczyć obwód przeskalowanego trójkąta 5-12-13",
        "sec-find-k": "Jak znaleźć współczynnik skali na podstawie znanego boku",
        "sec-step-example": "Przykład krok po kroku skalowania trójkąta 5-12-13",
        "sec-examples": "Przykłady obliczeń dla różnych współczynników skali",
        "sec-right-angle": "Dlaczego trójkąt 5-12-13 zawsze zachowuje kąt 90 stopni?",
        "sec-euclid": "Jak wygenerować trójkę 5-12-13 za pomocą wzoru Euklidesa?",
        "sec-applications": "Zastosowania trójkąta 5-12-13 w geometrii i pomiarach",
        "sec-vs-triples": "Różnica między 5-12-13 a innymi trójkami pitagorejskimi",
        "sec-vs-special": "Różnica między trójkątami 5-12-13, 45-45-90 i 30-60-90",
        "sec-mistakes": "Typowe błędy przy korzystaniu z kalkulatora trójkąta 5-12-13",
        "sec-verify": "Jak zweryfikować przeskalowany trójkąt 5-12-13",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Skaluj trójkąt 5-12-13 i oblicz jego boki, pole oraz obwód.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 5-12-13 to trójkąt prostokątny, którego długości boków tworzą stosunek [[5 : 12 : 13]]. Jest to trójka pitagorejska, ponieważ jej całkowite boki spełniają twierdzenie Pitagorasa: [[5^2 + 12^2 = 13^2]], gdyż [[25 + 144 = 169]]. Bok o długości 13 to przeciwprostokątna, a boki o długości 5 i 12 to przyprostokątne, które spotykają się przy kącie prostym.",
            },
            {
              "kind": "p",
              "text": "Kalkulator skaluje ten trójkąt o dodatni współczynnik skali [[k]], więc przeskalowane boki wynoszą [[a = 5k]], [[b = 12k]] i [[c = 13k]]. Oblicza też pole, [[A = 30k^2]], oraz obwód, [[P = 30k]], więc jedno wejście daje wszystkie pięć wyników. Do ogólnego trójkąta prostokątnego użyj <a href=\"/right-triangle-calculator/\">kalkulatora trójkąta prostokątnego</a>.",
            },
            {
              "kind": "p",
              "text": "Na przykład przy [[k = 2]] boki wynoszą [[a = 10]], [[b = 24]] i [[c = 26]], pole wynosi [[A = 120]] jednostek kwadratowych, a obwód wynosi [[P = 60]] jednostek.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Skalowanie trójkąta 5-12-13 i obliczanie jego miar",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedno wejście, pięć wyników: wprowadź k i odczytaj przeskalowany trójkąt.",
            },
            {
              "kind": "p",
              "text": "Kalkulator ma jeden tryb: Skalowanie trójkąta 5-12-13. Wprowadź dodatni współczynnik skali [[k]] w polu wejściowym i naciśnij Oblicz. Narzędzie mnoży liczby 5, 12 i 13 przez [[k]], a następnie oblicza pole i obwód z przeskalowanych boków. Naciśnij Resetuj, aby wyczyścić dane i zacząć od nowa.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali to liczba, która rozciąga lub kurczy pierwotny trójkąt. Przy [[k = 1]] otrzymasz pierwotny trójkąt 5, 12, 13. Przy [[k]] większym od 1 trójkąt rośnie, a przy [[k]] z przedziału od 0 do 1 maleje, ale kształt nigdy się nie zmienia.",
            },
            {
              "kind": "p",
              "text": "Każdy wynik pochodzi z tego samego [[k]], więc pięć wyników zawsze jest ze sobą zgodnych. Jeśli [[k]] jest zerowe lub ujemne, kalkulator tego nie zaakceptuje, ponieważ zero daje figurę zdegenerowaną, a wartości ujemne nie mogą opisywać długości boków.",
            },
          ],
          "table": {
            "headers": [
              "Miara",
              "Wzór",
              "Wynik",
            ],
            "rows": [
              [
                "Krótsza przyprostokątna",
                "5k",
                "Przeskalowany bok a",
              ],
              [
                "Dłuższa przyprostokątna",
                "12k",
                "Przeskalowany bok b",
              ],
              [
                "Przeciwprostokątna",
                "13k",
                "Przeskalowany bok c",
              ],
              [
                "Pole",
                "30k²",
                "Pole trójkąta",
              ],
              [
                "Obwód",
                "30k",
                "Obwód trójkąta",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Czym jest trójkąt 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt prostokątny o całkowitych bokach w stosunku 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 5-12-13 to trójkąt prostokątny, którego trzy boki mierzą 5, 12 i 13 jednostek lub dowolny zestaw długości w tej samej proporcji. Najdłuższy bok, 13, to przeciwprostokątna leżąca naprzeciw kąta 90 stopni. Boki o długości 5 i 12 to przyprostokątne, które spotykają się przy kącie prostym.",
            },
            {
              "kind": "p",
              "text": "Nazywa się go trójką pitagorejską, ponieważ trzy liczby całkowite spełniają warunek [[5^2 + 12^2 = 13^2]]. To jedno sprawdzenie decyduje, że trójkąt jest prostokątny, a nie rysunek czy pomiar. Przeskaluj boki o dowolny dodatni czynnik, a stosunek pozostanie 5:12:13, więc powiększony lub pomniejszony trójkąt nadal będzie trójkątem prostokątnym o tym samym kształcie.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Oznaczony trójkąt prostokątny ABC 5-12-13, w którym krótsza przyprostokątna a jest równa 5, dłuższa przyprostokątna b jest równa 12, przeciwprostokątna c jest równa 13, wraz z oznaczeniem kąta prostego",
            "caption": "Trójkąt ABC: przyprostokątne a = 5 i b = 12 spotykają się przy kącie prostym, a przeciwprostokątna wynosi c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Dlaczego 5-12-13 jest trójką pitagorejską?",
          "blocks": [
            {
              "kind": "p",
              "text": "Kwadraty przyprostokątnych sumują się do kwadratu przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "Obie strony są równe, więc równanie zachodzi dokładnie. Tak działa twierdzenie Pitagorasa: gdy kwadraty dwóch krótszych boków sumują się do kwadratu najdłuższego boku, kąt naprzeciw najdłuższego boku musi być kątem prostym.",
            },
            {
              "kind": "p",
              "text": "Liczba 13 musi być przeciwprostokątną, ponieważ jest najdłuższym bokiem, a przeciwprostokątna zawsze leży naprzeciw kąta 90 stopni. Liczby 5 i 12 to przyprostokątne. Ponieważ 5, 12 i 13 to liczby całkowite, trójka przydaje się w zadaniach domowych, testach i pracach pomiarowych, w których liczą się dokładne odpowiedzi.",
            },
            {
              "kind": "p",
              "text": "To sprawdzenie jest odwrotnością twierdzenia Pitagorasa: twierdzenie mówi, że trójkąt prostokątny spełnia warunek [[a^2 + b^2 = c^2]], a twierdzenie odwrotne mówi, że każdy trójkąt, którego boki spełniają to równanie, musi zawierać kąt prosty. Większość trójkątów prostokątnych nie ma wszystkich boków całkowitych, co właśnie czyni trójkę wyjątkową.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Schemat twierdzenia Pitagorasa dla trójkąta 5-12-13 pokazujący, że 25 plus 144 równa się 169",
            "caption": "25 + 144 = 169, więc kąt naprzeciw boku 13 ma 90 stopni.",
          },
        },
        "sec-sides": {
          "h2": "Trzy boki trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy boki, trzy role: dwie przyprostokątne i jedna przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna [[a]] mierzy 5 w podstawowym trójkącie. Leży naprzeciw mniejszego kąta ostrego, około 22.62 stopnia, i jest to bok, który większość uczniów zauważa jako pierwszy, ponieważ jest najkrótszy z trzech.",
            },
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna [[b]] mierzy 12 w podstawowym trójkącie. Leży naprzeciw większego kąta ostrego, około 67.38 stopnia. Przeciwprostokątna [[c]] mierzy 13, jest najdłuższym bokiem i leży naprzeciw kąta 90 stopni. Gdy trójkąt zostanie przeskalowany o [[k]], oznaczenia pozostają w tej samej kolejności: [[a = 5k]], [[b = 12k]] i [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Bok",
              "Długość w podstawowym trójkącie",
              "Położenie",
            ],
            "rows": [
              [
                "Krótsza przyprostokątna a",
                "5",
                "Naprzeciw kąta 22.62°",
              ],
              [
                "Dłuższa przyprostokątna b",
                "12",
                "Naprzeciw kąta 67.38°",
              ],
              [
                "Przeciwprostokątna c",
                "13",
                "Naprzeciw kąta 90°",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Stosunek boków 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Stosunek 5:12:13 nigdy się nie zmienia, bez względu na to, jak duży staje się trójkąt.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna odpowiada 5 jednostkom proporcjonalnym, dłuższa przyprostokątna 12, a przeciwprostokątna 13.",
            },
            {
              "kind": "p",
              "text": "Skalowanie mnoży każdą część przez ten sam współczynnik [[k]], więc stosunek przyjmuje postać [[[5k : 12k : 13k]]] przy zachowaniu tego samego kształtu. Zestawy 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52 oraz 25, 60, 65 opisują ten sam trójkąt w różnych rozmiarach, ponieważ każdy zestaw to podstawowy stosunek pomnożony odpowiednio przez 1, 2, 3, 4 i 5.",
            },
            {
              "kind": "p",
              "text": "Dlatego właśnie stosunek jest prawdziwą tożsamością trójkąta. Dwa trójkąty o tym samym stosunku są podobne: mają te same kąty, ten sam kształt i inny rozmiar.",
            },
            {
              "kind": "p",
              "text": "Aby przetestować zestaw pomiarów, podziel wszystkie trzy liczby przez ich największy wspólny dzielnik i sprawdź, czy pozostaną 5, 12, 13. Dla 10, 24, 26 dzielnik wynosi 2, a dzielenie daje 5, 12, 13. Dla 15, 36, 39 dzielnik wynosi 3, a dzielenie daje tę samą trójkę. Jeśli po dzieleniu pozostaną inne trzy liczby, zestaw nie jest trójkątem 5-12-13.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Trzy podobne trójkąty oznaczone 5-12-13, 10-24-26 i 15-36-39 w rosnących rozmiarach",
            "caption": "Te same proporcje, te same kąty: k = 1, k = 2 i k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "Czym jest współczynnik skali w trójkącie 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "k to mnożnik, który ustala rozmiar trójkąta.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali mnoży wszystkie trzy pierwotne długości boków przez tę samą dodatnią liczbę.",
            },
            {
              "kind": "p",
              "text": "Przy [[k = 1]] otrzymasz pierwotny trójkąt. Przy [[k]] większym od 1 trójkąt rośnie, a przy [[k]] z przedziału od 0 do 1 maleje. Współczynnik skali zmienia rozmiar, a nie kształt: każdy kąt pozostaje ten sam, a każdy bok zachowuje proporcje.",
            },
            {
              "kind": "p",
              "text": "Ten sam czynnik trzeba zastosować do wszystkich trzech boków. Przeskalowanie tylko jednego lub dwóch boków psuje stosunek, psuje sprawdzenie pitagorejskie, a wynik przestaje być trójkątem 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Współczynnik skali można też odczytać jako stosunek odpowiadających sobie boków: podziel bok nowego trójkąta przez odpowiadający mu bok pierwotnego, a otrzymasz [[k]]. Na przykład dłuższa przyprostokątna o długości 36 wobec pierwotnej 12 daje [[k = 36 / 12 = 3]]. To ten sam współczynnik [[k]], o który pyta kalkulator, znaleziony na podstawie pomiaru zamiast wybrany z góry.",
            },
          ],
          "table": {
            "headers": [
              "Współczynnik skali",
              "Efekt",
              "Przykładowe boki",
            ],
            "rows": [
              [
                "k = 1",
                "Pierwotny trójkąt",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Podwojony",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "O połowę mniejszy",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Dziesięć razy większy",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Przeskalowany trójkąt 5-12-13 przy k równym 2, pokazujący boki a równe 10, b równe 24 i c równe 26",
            "caption": "Przy k = 2 boki wynoszą 10, 24 i 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Wzór na krótszą przyprostokątną",
          "blocks": [
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna to pięć razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna ma długość 20 jednostek. Jest najmniejszym bokiem przy każdym współczynniku skali, ponieważ 5 jest najmniejszą liczbą w stosunku.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Wzór na dłuższą przyprostokątną",
          "blocks": [
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna to dwanaście razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna ma długość 48 jednostek. Jest dłuższa od krótszej przyprostokątnej, ponieważ 12 jest większe od 5, ale przy każdym dodatnim współczynniku skali nadal jest krótsza od przeciwprostokątnej.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Wzór na przeciwprostokątną",
          "blocks": [
            {
              "kind": "p",
              "text": "Przeciwprostokątna to trzynaście razy współczynnik skali.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna ma długość 52 jednostek. Przy każdym dodatnim współczynniku skali pozostaje najdłuższym bokiem, ponieważ 13 jest największą liczbą w stosunku, a przeciwprostokątna zawsze leży naprzeciw kąta prostego.",
            },
          ],
        },
        "sec-area": {
          "h2": "Jak obliczyć pole przeskalowanego trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Połowa iloczynu dwóch przyprostokątnych daje pole.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw przeskalowane boki: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Uprość: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "Dwie przyprostokątne są podstawą i wysokością, ponieważ spotykają się przy kącie prostym. Połowa ich iloczynu daje pole trójkąta. Współczynnik skali jest podnoszony do kwadratu, więc podwojenie [[k]] sprawia, że pole rośnie czterokrotnie. Pole mierzy się w jednostkach kwadratowych.",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[k = 3]]: [[[A = 30(3^2) = 270]]] jednostek kwadratowych.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna nigdy nie wchodzi do wzoru na pole, ponieważ pole trójkąta prostokątnego pochodzi z jego dwóch przyprostokątnych. Jako sprawdzenie przy [[k = 2]] przyprostokątne wynoszą 10 i 24, więc [[A = (10 \\times 24) / 2 = 120]] jednostek kwadratowych, co zgadza się z [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Schemat pola przeskalowanego trójkąta 5-12-13 o podstawie 5k, wysokości 12k i polu 30k do kwadratu",
            "caption": "Przy k = 2 pole wynosi 120 jednostek kwadratowych.",
          },
        },
        "sec-perimeter": {
          "h2": "Jak obliczyć obwód przeskalowanego trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Dodaj wszystkie trzy przeskalowane boki, aby otrzymać obwód.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Liczy się każdy bok, więc dodaj wszystkie trzy. Obwód rośnie wprost proporcjonalnie do [[k]]: podwojenie współczynnika skali podwaja obwód. Obwód mierzy się w jednostkach liniowych, a nie w jednostkach kwadratowych.",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[k = 3]]: [[[P = 30 \\times 3 = 90]]] jednostek.",
            },
            {
              "kind": "p",
              "text": "Jako sprawdzenie przy [[k = 2]] dodaj przeskalowane boki bezpośrednio: [[P = 10 + 24 + 26 = 60]] jednostek, co zgadza się z [[P = 30 \\times 2 = 60]]. Obwód odpowiada na inne pytanie niż pole: mierzy odległość wokół trójkąta, a nie przestrzeń wewnątrz niego.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Schemat obwodu przeskalowanego trójkąta 5-12-13 o bokach 5k, 12k i 13k, które sumują się do 30k",
            "caption": "Przy k = 2 obwód wynosi 60 jednostek.",
          },
        },
        "sec-find-k": {
          "h2": "Jak znaleźć współczynnik skali na podstawie znanego boku",
          "blocks": [
            {
              "kind": "p",
              "text": "Podziel znany bok przez odpowiadającą mu liczbę ze stosunku, aby znaleźć k ręcznie.",
            },
            {
              "kind": "p",
              "text": "Kalkulator przyjmuje [[k]] bezpośrednio, ale możesz obliczyć [[k]] samodzielnie, gdy znasz już jeden bok. Podziel znany bok przez odpowiadającą mu liczbę ze stosunku 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Jeśli znana jest krótsza przyprostokątna: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Jeśli znana jest dłuższa przyprostokątna: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Jeśli znana jest przeciwprostokątna: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Przykład 1: przy [[a = 20]], [[k = 20 / 5 = 4]]. Przykład 2: przy [[b = 36]], [[k = 36 / 12 = 3]]. Przykład 3: przy [[c = 65]], [[k = 65 / 13 = 5]]. Wprowadź znalezione k do kalkulatora, aby otrzymać pozostałe boki, pole i obwód.",
            },
            {
              "kind": "p",
              "text": "Czasem [[k]] nie jest liczbą całkowitą. Na przykład przy [[b = 30]], [[k = 30 / 12 = 2.5]], a pozostałe boki wynoszą [[a = 5 \\times 2.5 = 12.5]] i [[c = 13 \\times 2.5 = 32.5]]. Gdy obliczysz [[k]] z dwóch różnych znanych boków, obie odpowiedzi muszą się zgadzać; jeśli się nie zgadzają, pomiary nie tworzą trójkąta 5-12-13.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Przykład krok po kroku skalowania trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Współczynnik skali k = 2, obliczony od początku do końca.",
            },
            {
              "kind": "p",
              "text": "Zacznij od [[k = 2]] i znajdź każdą miarę przeskalowanego trójkąta, po jednym wzorze na raz. Każdy krok korzysta ze wzoru z powyższych sekcji, a tabela podsumowująca na końcu zbiera wyniki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Znajdź krótszą przyprostokątną: [[a = 5k = 5 \\times 2 = 10]].",
                "Znajdź dłuższą przyprostokątną: [[b = 12k = 12 \\times 2 = 24]].",
                "Znajdź przeciwprostokątną: [[c = 13k = 13 \\times 2 = 26]].",
                "Znajdź pole: [[A = 30k^2 = 30 \\times 4 = 120]] jednostek kwadratowych.",
                "Znajdź obwód: [[P = 30k = 30 \\times 2 = 60]] jednostek.",
              ],
            },
            {
              "kind": "p",
              "text": "Nowy trójkąt zachowuje pierwotne proporcje 5:12:13: liczby 10, 24 i 26 są dwukrotnie większe od 5, 12 i 13. Sprawdź kąt prosty za pomocą twierdzenia Pitagorasa: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Miara",
              "Wartość",
            ],
            "rows": [
              [
                "Krótsza przyprostokątna a",
                "10",
              ],
              [
                "Dłuższa przyprostokątna b",
                "24",
              ],
              [
                "Przeciwprostokątna c",
                "26",
              ],
              [
                "Pole A",
                "120 jednostek kwadratowych",
              ],
              [
                "Obwód P",
                "60 jednostek",
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
              "text": "Dane: [[k = 1]]. Boki: [[a = 5]], [[b = 12]], [[c = 13]]. Pole: [[A = 30(1^2) = 30]] jednostek kwadratowych. Obwód: [[P = 30(1) = 30]] jednostek. To pierwotny trójkąt, najmniejsza całkowita wersja tej trójki.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Współczynnik skali 2",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 2]]. Boki: [[a = 10]], [[b = 24]], [[c = 26]]. Pole: [[A = 30(2^2) = 120]] jednostek kwadratowych. Obwód: [[P = 30(2) = 60]] jednostek. Podwojenie współczynnika skali podwaja każdy bok i obwód, ale pole rośnie czterokrotnie.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Współczynnik skali 3",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 3]]. Boki: [[a = 15]], [[b = 36]], [[c = 39]]. Pole: [[A = 30(3^2) = 270]] jednostek kwadratowych. Obwód: [[P = 30(3) = 90]] jednostek. Potrojenie boków potraja obwód, a pole staje się dziewięciokrotnie większe od pierwotnego.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Współczynnik skali 4",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 4]]. Boki: [[a = 20]], [[b = 48]], [[c = 52]]. Pole: [[A = 30(4^2) = 480]] jednostek kwadratowych. Obwód: [[P = 30(4) = 120]] jednostek. Każdy bok jest czterokrotnie większy od pierwotnego, a pole jest szesnaście razy większe od pierwotnego.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Współczynnik skali 0.5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 0.5]]. Boki: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Pole: [[A = 30(0.5^2) = 7.5]] jednostek kwadratowych. Obwód: [[P = 30(0.5) = 15]] jednostek. Zmniejszenie trójkąta o połowę zmniejsza o połowę boki i obwód, a pole spada do jednej czwartej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Współczynnik skali 1.5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 1.5]]. Boki: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Pole: [[A = 30(1.5^2) = 67.5]] jednostek kwadratowych. Obwód: [[P = 30(1.5) = 45]] jednostek. Dziesiętny współczynnik skali działa tak samo: pomnóż każdy bok przez 1.5.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Współczynnik skali 5",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 5]]. Boki: [[a = 25]], [[b = 60]], [[c = 65]]. Pole: [[A = 30(5^2) = 750]] jednostek kwadratowych. Obwód: [[P = 30(5) = 150]] jednostek. Współczynnik skali równy 5 daje znacznie większy trójkąt, przydatny w pracach rozplanowania, w których podstawowy trójkąt 5, 12, 13 jest za mały.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Współczynnik skali 10",
            },
            {
              "kind": "p",
              "text": "Dane: [[k = 10]]. Boki: [[a = 50]], [[b = 120]], [[c = 130]]. Pole: [[A = 30(10^2) = 3000]] jednostek kwadratowych. Obwód: [[P = 30(10) = 300]] jednostek. Przy tym rozmiarze liczby pozostają dokładne, co jest jedną z zalet pracy z trójką całkowitą.",
            },
            {
              "kind": "p",
              "text": "We wszystkich ośmiu przykładach wzorzec się utrzymuje: boki i obwód rosną wraz z [[k]], pole rośnie wraz z kwadratem [[k]], a stosunek 5:12:13 nigdy się nie zmienia.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Dlaczego trójkąt 5-12-13 zawsze zachowuje kąt 90 stopni?",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalowanie nie może zepsuć sprawdzenia pitagorejskiego.",
            },
            {
              "kind": "p",
              "text": "Przeskalowane boki to [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Zastosuj twierdzenie Pitagorasa: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Rozwiń: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Obie strony zgadzają się dla każdego dodatniego [[k]], ponieważ czynnik [[k^2]] jest wspólny dla wszystkich trzech wyrazów. Skalowanie rozciąga trójkąt bez zmiany jego kątów, więc kąt 90 stopni przetrwa przy każdym rozmiarze. To ta sama idea co trójkąty podobne: ten sam kształt, inny rozmiar.",
            },
            {
              "kind": "p",
              "text": "Kąty nigdy nie zmieniają się przy skalowaniu. Przy każdym dodatnim [[k]] kąty ostre pozostają około 22.62 i 67.38 stopnia, ponieważ sinus mniejszego kąta zawsze wynosi [[5 / 13]], a sinus większego kąta zawsze wynosi [[12 / 13]]. Poruszają się tylko długości boków, i to wszystkie razem.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Schemat kątów trójkąta 5-12-13 pokazujący kąt 90 stopni oraz kąty ostre o wartości około 22.62 i 67.38 stopnia",
            "caption": "Kąty ostre wynoszą około 22.62 i 67.38 stopnia, a ich suma to 90 stopni.",
          },
        },
        "sec-euclid": {
          "h2": "Jak wygenerować trójkę 5-12-13 za pomocą wzoru Euklidesa?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie małe liczby, m = 3 i n = 2, generują całą trójkę.",
            },
            {
              "kind": "p",
              "text": "Wzór Euklidesa buduje pierwotne trójki pitagorejskie z dwóch dodatnich liczb całkowitych [[m]] i [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[m = 3]] i [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Wynikiem jest stosunek w ramce [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "Wzór działa, gdy [[m]] jest większe od [[n]], obie liczby nie mają wspólnego dzielnika, a jedna jest parzysta, a druga nieparzysta. Te warunki dają trójkę pierwotną, której nie można sprowadzić do mniejszej trójki całkowitej. Wzór Euklidesa to zaawansowany dodatek: sam kalkulator potrzebuje tylko [[k]], ale wzór pokazuje, skąd pochodzą liczby 5, 12 i 13.",
            },
            {
              "kind": "p",
              "text": "Inne wybory [[m]] i [[n]] generują inne trójki. Przy [[m = 2]] i [[n = 1]] wzór daje 3, 4 i 5. Przy [[m = 4]] i [[n = 1]] daje 15, 8 i 17, czyli trójkę 8-15-17 w innej kolejności. Trójka 5-12-13 to członek tej rodziny, który pochodzi z [[m = 3]] i [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Schemat przepływu wzoru Euklidesa, w którym m równe 3 i n równe 2 dają 5, 12 i 13",
            "caption": "m = 3 i n = 2 dają a = 5, b = 12 i c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Zastosowania trójkąta 5-12-13 w geometrii i pomiarach",
          "blocks": [
            {
              "kind": "p",
              "text": "Całkowity kąt prosty przydaje się wszędzie tam, gdzie liczą się dokładne narożniki.",
            },
            {
              "kind": "p",
              "text": "W zadaniach domowych z geometrii i ćwiczeniach przed egzaminem trójka pozwala szybko sprawdzać kąty proste bez kątomierza: jeśli trzy długości pasują do 5:12:13, kąt między dwoma krótszymi bokami wynosi 90 stopni. Nauczyciele wykorzystują ją w ćwiczeniach z twierdzenia Pitagorasa, zadaniach o podobieństwie trójkątów i pracach z rysunkiem w skali.",
            },
            {
              "kind": "p",
              "text": "Budowlańcy i stolarze używają przeskalowanych wersji do wyznaczania kwadratowych narożników: odznacz 5 jednostek wzdłuż jednej krawędzi i 12 wzdłuż drugiej, a przekątna musi mierzyć 13. Geodeci i prace rysunku technicznego opierają się na tej samej zasadzie w większych skalach, stosując 10, 24, 26 lub 25, 60, 65, gdy podstawowy trójkąt jest za mały.",
            },
            {
              "kind": "p",
              "text": "Stosunek pomaga też w modelowaniu matematycznym i pokazach w klasie, w których dokładne liczby całkowite sprawiają, że obliczenia pozostają proste. W prawdziwej budowie nadal liczą się dokładność pomiarów i warunki na miejscu, a ten stosunek nie zastępuje profesjonalnych pomiarów geodezyjnych ani norm budowlanych.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Różnica między 5-12-13 a innymi trójkami pitagorejskimi",
          "blocks": [
            {
              "kind": "p",
              "text": "Każda pierwotna trójka to trójkąt prostokątny, ale każda ma własny kształt.",
            },
            {
              "kind": "p",
              "text": "Poniższa tabela porównuje pięć znanych pierwotnych trójek. Wszystkie spełniają twierdzenie Pitagorasa, lecz ich proporcje boków i kąty ostre różnią się, więc każda tworzy inny kształt trójkąta. Skalowanie trójki tworzy trójkąty podobne, nigdy inną trójkę: 10, 24, 26 to przeskalowany trójkąt 5-12-13, natomiast 3, 4, 5 to zupełnie inny kształt.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 5-12-13 jest dłuższy i węższy niż trójkąt 3-4-5: jego dłuższa przyprostokątna jest ponad dwukrotnie dłuższa od krótszej, podczas gdy trójkąt 3-4-5 jest bliższy kwadratowi. Różnica ta widać w kątach: tutaj 22.62 i 67.38 stopnia, wobec 36.87 i 53.13 stopnia dla 3-4-5. Dowiedz się więcej na stronie <a href=\"/pythagorean-triples-calculator/\">kalkulatora trójek pitagorejskich</a>.",
            },
            {
              "kind": "p",
              "text": "Tylko trójki z tabeli są pierwotne, co oznacza, że ich trzy liczby nie mają wspólnego dzielnika większego od 1. Przeskalowana trójka, taka jak 6, 8, 10 lub 10, 24, 26, nie jest pierwotna, ponieważ wszystkie trzy liczby dzielą się przez 2. Trójki pierwotne są podstawowymi członkami każdej rodziny, a każdy inny członek jest ich przeskalowaną kopią.",
            },
          ],
          "table": {
            "headers": [
              "Trójka pitagorejska",
              "Stosunek boków",
              "Przeciwprostokątna",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Różnica między trójkątami 5-12-13, 45-45-90 i 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 5-12-13 ma własne kąty, a nie standardowe kąty trójkątów szczególnych.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 5-12-13 nie jest ani trójkątem 45-45-90, ani trójkątem 30-60-90. Jego kąty ostre wynoszą około 22.62 i 67.38 stopnia, a jego przyprostokątne są nierówne, więc należy do rodziny trójek pitagorejskich, a nie do żadnej z rodzin o kątach szczególnych.",
            },
            {
              "kind": "p",
              "text": "Do trójkątów prostokątnych równoramiennych użyj <a href=\"/45-45-90-triangle-calculator/\">kalkulatora trójkąta 45-45-90</a>, a do rodziny 30-60-90 użyj <a href=\"/30-60-90-triangle-calculator/\">kalkulatora trójkąta 30-60-90</a>. Strona 5-12-13 jest właściwym narzędziem, gdy boki tworzą stosunek 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Aby rozpoznać, do której rodziny należy trójkąt prostokątny, sprawdź jego kąty lub stosunek boków. Równe przyprostokątne i kąty 45 stopni oznaczają 45-45-90. Kąty 30 i 60 stopni oznaczają 30-60-90. Boki w stosunku 5:12:13, o kątach bliskich 22.62 i 67.38 stopnia, oznaczają trójkąt 5-12-13. Te trzy rodziny nigdy się nie nakładają.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Stosunek boków",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Kąty",
                "22.62°, 67.38°, 90° w przybliżeniu",
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
                "Główna własność",
                "Trójka pitagorejska",
                "Trójkąt prostokątny równoramienny",
                "Szczególny stosunek kątów",
              ],
              [
                "Przeciwprostokątna",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy korzystaniu z kalkulatora trójkąta 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście błędów pojawia się wciąż na nowo w zadaniach z trójkątem 5-12-13.",
            },
            {
              "kind": "steps",
              "steps": [
                "Traktowanie 13 jako przyprostokątnej zamiast przeciwprostokątnej: 13 to najdłuższy bok i leży naprzeciw kąta 90 stopni. [[c = 13k]] zawsze jest przeciwprostokątną.",
                "Mylenie krótszej przyprostokątnej z dłuższą: [[a = 5k]] to krótsza przyprostokątna, a [[b = 12k]] to dłuższa przyprostokątna. Zachowaj kolejność oznaczeń.",
                "Skalowanie tylko jednego lub dwóch boków: skalowanie tylko przyprostokątnych psuje stosunek i kąt prosty. Zastosuj ten sam współczynnik [[k]] do każdego boku.",
                "Mylenie współczynnika skali z długością boku: [[k]] to mnożnik, a nie bok. Przy [[k = 2]] boki wynoszą 10, 24 i 26.",
                "Używanie zera jako poprawnego współczynnika skali: [[k = 0]] sprawia, że wszystkie trzy boki są zerowe, czyli otrzymujemy figurę zdegenerowaną, a nie trójkąt. [[k]] musi być większe od zera.",
                "Wprowadzanie ujemnego współczynnika skali: ujemne [[k]] daje ujemne długości boków, które nie mogą opisywać trójkąta. Wprowadzaj tylko dodatnie [[k]].",
                "Zapominanie o podniesieniu k do kwadratu we wzorze na pole: pole rośnie wraz z kwadratem [[k]]. Przy [[k = 3]] pole wynosi [[A = 30 \\times 9 = 270]], a nie 90.",
                "Mylenie pola z obwodem: pole mierzy się w jednostkach kwadratowych i korzysta ze wzoru [[A = 30k^2]], natomiast obwód mierzy się w jednostkach liniowych i korzysta ze wzoru [[P = 30k]].",
                "Dodawanie tylko dwóch boków przy obliczaniu obwodu: obwód obejmuje wszystkie trzy boki, więc [[P = 5k + 12k + 13k = 30k]].",
                "Mieszanie jednostek miary: zachowaj jedną jednostkę dla wszystkich trzech boków. Jeśli przyprostokątne są w centymetrach, pole wychodzi w centymetrach kwadratowych, a obwód w centymetrach.",
                "Założenie, że działają tylko liczby 5, 12 i 13: każdy przeskalowany zestaw, taki jak 10, 24, 26 lub 15, 36, 39, nadal jest trójkątem 5-12-13, ponieważ stosunek jest ten sam.",
                "Założenie, że każdy trójkąt prostokątny ma stosunek 5:12:13: większość trójkątów prostokątnych ma inne długości boków. Stosunek dotyczy tylko sytuacji, w których boki pasują do 5:12:13.",
                "Mylenie trójek 5-12-13 i 3-4-5: liczby 3, 4, 5 oraz 5, 12, 13 to różne trójki o różnych kątach. Sprawdź stosunek, zanim wybierzesz wzór.",
                "Niepotrzebne zaokrąglanie pomiarów: trójka daje dokładne liczby całkowite, więc zachowaj je dokładne. Zaokrąglaj tylko wtedy, gdy współczynnik skali, taki jak 1.5, wymusza ułamek dziesiętny, i powiedz o tym.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak zweryfikować przeskalowany trójkąt 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery szybkie kontrole potwierdzają przeskalowany trójkąt 5-12-13.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 1: Stosunek boków",
            },
            {
              "kind": "p",
              "text": "Boki muszą pasować do [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrola 2: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Przyprostokątne muszą spełniać warunek [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrola 3: Spójność współczynnika skali",
            },
            {
              "kind": "p",
              "text": "Każdy bok podzielony przez odpowiadającą mu liczbę ze stosunku musi dać ten sam współczynnik [[k]]: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Kontrola 4: Kolejność boków",
            },
            {
              "kind": "p",
              "text": "Boki muszą iść od najkrótszego do najdłuższego: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Weźmy jako przykład 10, 24, 26. Stosunek wynosi 10:24:26, co sprowadza się do 5:12:13, a sprawdzenie pitagorejskie daje [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. Sprawdzenie współczynnika skali daje [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Wszystkie cztery kontrole przechodzą, więc pomiary tworzą przeskalowany trójkąt 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Jeśli któraś kontrola nie powiedzie się, zmierz ponownie lub sprawdź obliczenia, zanim zaufasz liczbom. Nieudana kontrola stosunku zwykle oznacza, że bok został przeskalowany innym czynnikiem, a nieudana kontrola pitagorejska zwykle oznacza, że najdłuższy bok pomylono z przyprostokątną. Popraw bok, który psuje wzorzec, a następnie przeprowadź wszystkie cztery kontrole ponownie.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiąż wszystkie osiem zadań na papierze, zanim przeczytasz odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Skalowanie przy k = 2",
            },
            {
              "kind": "p",
              "text": "Przeskaluj trójkąt 5-12-13, używając [[k = 2]]. Znajdź trzy długości boków, pole i obwód.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Skalowanie przy k = 4",
            },
            {
              "kind": "p",
              "text": "Przeskaluj trójkąt 5-12-13, używając [[k = 4]]. Znajdź trzy długości boków, pole i obwód.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pole przy k = 3",
            },
            {
              "kind": "p",
              "text": "Znajdź pole przeskalowanego trójkąta 5-12-13 przy [[k = 3]], w jednostkach kwadratowych.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Obwód przy k = 5",
            },
            {
              "kind": "p",
              "text": "Znajdź obwód przeskalowanego trójkąta 5-12-13 przy [[k = 5]], w jednostkach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź k na podstawie krótszej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Krótsza przyprostokątna przeskalowanego trójkąta 5-12-13 wynosi 25. Znajdź współczynnik skali [[k]], a następnie znajdź pozostałe dwa boki.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Znajdź k na podstawie dłuższej przyprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dłuższa przyprostokątna przeskalowanego trójkąta 5-12-13 wynosi 48. Znajdź współczynnik skali [[k]], a następnie znajdź pozostałe dwa boki.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 7: Znajdź k na podstawie przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna przeskalowanego trójkąta 5-12-13 wynosi 78. Znajdź współczynnik skali [[k]], a następnie znajdź obie przyprostokątne.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 8: Zweryfikuj 15, 36 i 39",
            },
            {
              "kind": "p",
              "text": "Czy długości boków 15, 36 i 39 tworzą przeskalowany trójkąt 5-12-13? Sprawdź stosunek i twierdzenie Pitagorasa.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi",
            },
            {
              "kind": "p",
              "text": "1. Boki 10, 24, 26; pole 120 jednostek kwadratowych; obwód 60 jednostek.",
            },
            {
              "kind": "p",
              "text": "2. Boki 20, 48, 52; pole 480 jednostek kwadratowych; obwód 120 jednostek.",
            },
            {
              "kind": "p",
              "text": "3. Pole [[A = 30 \\times 9 = 270]] jednostek kwadratowych.",
            },
            {
              "kind": "p",
              "text": "4. Obwód [[P = 30 \\times 5 = 150]] jednostek.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; dłuższa przyprostokątna wynosi 60, a przeciwprostokątna 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; krótsza przyprostokątna wynosi 20, a przeciwprostokątna 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; krótsza przyprostokątna wynosi 30, a dłuższa przyprostokątna 72.",
            },
            {
              "kind": "p",
              "text": "8. Tak: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], a 15:36:39 sprowadza się do 5:12:13, więc [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje inne zadanie związane z trójkątem prostokątnym, więc wybierz narzędzie pasujące do miary, której potrzebujesz.",
      "relatedItems": [
        "Kalkulator trójek pitagorejskich",
        "Kalkulator trójkąta 3-4-5",
        "Kalkulator boku trójkąta prostokątnego",
        "Kalkulator twierdzenia Pitagorasa",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator obwodu trójkąta prostokątnego",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Czym jest trójkąt 5-12-13?",
          "answer": "Trójkąt 5-12-13 to trójkąt prostokątny o długościach boków 5, 12 i 13 lub o dowolnym przeskalowanym zestawie w tym samym stosunku. Bok o długości 13 to przeciwprostokątna, a boki o długości 5 i 12 to przyprostokątne, które spotykają się przy kącie prostym.",
        },
        {
          "question": "Dlaczego 5-12-13 jest trójkątem prostokątnym?",
          "answer": "Ponieważ jego boki spełniają twierdzenie Pitagorasa: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Gdy kwadraty dwóch krótszych boków sumują się do kwadratu najdłuższego boku, kąt naprzeciw tego boku wynosi 90 stopni.",
        },
        {
          "question": "Jaki jest stosunek boków trójkąta 5-12-13?",
          "answer": "Stosunek wynosi 5:12:13: krótsza przyprostokątna to 5 części, dłuższa przyprostokątna to 12 części, a przeciwprostokątna to 13 części. Skalowanie mnoży każdą część przez ten sam czynnik [[k]], więc stosunek nigdy się nie zmienia.",
        },
        {
          "question": "Jak działa kalkulator trójkąta 5-12-13?",
          "answer": "Wprowadź dodatni współczynnik skali [[k]] i naciśnij Oblicz. Kalkulator zwraca przeskalowane boki [[a = 5k]], [[b = 12k]] i [[c = 13k]], a także pole [[A = 30k^2]] i obwód [[P = 30k]].",
        },
        {
          "question": "Czym jest współczynnik skali w trójkącie 5-12-13?",
          "answer": "Współczynnik skali [[k]] to liczba, która mnoży wszystkie trzy boki podstawowego trójkąta. Przy [[k = 1]] otrzymasz pierwotny trójkąt; większe wartości go powiększają, a wartości z przedziału od 0 do 1 go pomniejszają.",
        },
        {
          "question": "Jak obliczyć boki przeskalowanego trójkąta 5-12-13?",
          "answer": "Pomnóż każdy podstawowy bok przez [[k]]: krótsza przyprostokątna to [[a = 5k]], dłuższa przyprostokątna to [[b = 12k]], a przeciwprostokątna to [[c = 13k]]. Dla [[k = 4]] boki wynoszą 20, 48 i 52.",
        },
        {
          "question": "Jak obliczyć jego pole?",
          "answer": "Użyj wzoru [[A = 30k^2]]. Pole pochodzi z połowy iloczynu przyprostokątnych, [[A = (5k)(12k) / 2]]. Przy [[k = 3]] pole wynosi 270 jednostek kwadratowych.",
        },
        {
          "question": "Jak obliczyć jego obwód?",
          "answer": "Użyj wzoru [[P = 30k]]. Dodaj trzy przeskalowane boki: [[P = 5k + 12k + 13k]]. Przy [[k = 3]] obwód wynosi 90 jednostek.",
        },
        {
          "question": "Czy mogę użyć 10-24-26 zamiast 5-12-13?",
          "answer": "Tak. Zestaw 10, 24, 26 to trójkąt 5-12-13 przeskalowany o [[k = 2]], więc ma ten sam kształt i te same kąty. Każda wielokrotność liczb 5, 12 i 13 działa tak samo.",
        },
        {
          "question": "Jak powstaje trójka 5-12-13?",
          "answer": "Wzór Euklidesa przy [[m = 3]] i [[n = 2]] daje [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] oraz [[c = 3^2 + 2^2 = 13]]. Liczby 3 i 2 są względnie pierwsze i mają przeciwną parzystość, więc trójka jest pierwotna.",
        },
        {
          "question": "Jaka jest różnica między 3-4-5 a 5-12-13?",
          "answer": "Obie są pierwotnymi trójkami pitagorejskimi, ale ich proporcje się różnią: trójkąt 3-4-5 ma kąty około 36.87 i 53.13 stopnia, natomiast trójkąt 5-12-13 ma kąty około 22.62 i 67.38 stopnia. Każda trójka tworzy inny kształt trójkąta.",
        },
        {
          "question": "Czy każdy przeskalowany trójkąt 5-12-13 jest trójkątem prostokątnym?",
          "answer": "Tak. Dla każdego dodatniego [[k]] przeskalowane boki spełniają warunek [[(5k)^2 + (12k)^2 = (13k)^2]], więc twierdzenie Pitagorasa zachodzi, a kąt naprzeciw najdłuższego boku pozostaje równy 90 stopni.",
        },
      ],
    },
};
