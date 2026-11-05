// projectionGuideTranslations.bpl.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B4_PL = {
  "pl": {
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Czym jest rzut w trójkącie prostokątnym?",
          "answer": "Rzut to odcinek przeciwprostokątnej powstały, gdy wysokość poprowadzona z wierzchołka kąta prostego przecina przeciwprostokątną. Wysokość dzieli przeciwprostokątną na dwie części, p i q. Każda część jest rzutem jednej przyprostokątnej na przeciwprostokątną.",
        },
        {
          "question": "Czym różni się rzut p od rzutu q?",
          "answer": "Rzut p leży przy wierzchołku A i należy do przyprostokątnej a, natomiast rzut q leży przy wierzchołku B i należy do przyprostokątnej b. Są to dwie części tej samej przeciwprostokątnej, a [[p + q = c]]. Zamiana ich miejscami zamienia przyprostokątne, które opisują.",
        },
        {
          "question": "Jaki jest wzór na rzut p?",
          "answer": "Wzór to [[p = a^2 / c]], gdzie a to przyprostokątna a, a c to cała przeciwprostokątna. Najpierw podnieś przyprostokątną a do kwadratu, a potem podziel przez c. Dla [[a = 9]] cm i [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
        },
        {
          "question": "Jaki jest wzór na rzut q?",
          "answer": "Wzór to [[q = b^2 / c]], gdzie b to przyprostokątna b, a c to cała przeciwprostokątna. Najpierw podnieś przyprostokątną b do kwadratu, a potem podziel przez c. Dla [[b = 12]] cm i [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
        },
        {
          "question": "Jak obliczyć przyprostokątną a z rzutu p?",
          "answer": "Użyj wzoru [[a = \\sqrt{c \\times p}]]. Pomnóż przeciwprostokątną c przez rzut p, a potem wyciągnij pierwiastek kwadratowy. Dla [[c = 25]] cm i [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. Pierwiastek kwadratowy jest potrzebny, ponieważ iloczyn cp jest równy a do kwadratu, a nie a.",
        },
        {
          "question": "Jak obliczyć przyprostokątną b z rzutu q?",
          "answer": "Użyj wzoru [[b = \\sqrt{c \\times q}]]. Pomnóż przeciwprostokątną c przez rzut q, a potem wyciągnij pierwiastek kwadratowy. Dla [[c = 25]] cm i [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. Pierwiastek kwadratowy zamienia długość podniesioną do kwadratu z powrotem w długość boku.",
        },
        {
          "question": "Jak znaleźć przeciwprostokątną z dwóch rzutów?",
          "answer": "Dodaj dwa rzuty: [[c = p + q]]. Wysokość dzieli przeciwprostokątną na dokładnie te dwa odcinki, więc ich suma odtwarza cały bok. Dla [[p = 9]] cm i [[q = 16]] cm, [[c = 25]] cm.",
        },
        {
          "question": "Dlaczego w twierdzeniu o rzucie stosujemy pierwiastek kwadratowy?",
          "answer": "Ponieważ twierdzenie podaje kwadrat przyprostokątnej, a nie samą przyprostokątną. Zapis [[a^2 = c \\times p]] opisuje długość podniesioną do kwadratu. Wyciągnięcie pierwiastka kwadratowego cofa podnoszenie do kwadratu i zwraca zwykłą długość. Pominięcie go oznacza podanie wartości podniesionej do kwadratu tak, jakby była bokiem.",
        },
        {
          "question": "Czy rzuty pozwalają wyznaczyć wysokość?",
          "answer": "Tak. Wysokość jest średnią geometryczną dwóch rzutów: [[h = \\sqrt{p \\times q}]]. Dla [[p = 9]] cm i [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Ta strona nie ma trybu wysokości, więc do tego kroku użyj dedykowanego kalkulatora wysokości z rzutów.",
        },
        {
          "question": "Jak rzuty wiążą się z twierdzeniem Pitagorasa?",
          "answer": "Dodanie dwóch wzorów na rzuty daje [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Ponieważ [[p + q = c]], staje się to [[a^2 + b^2 = c^2]]. Twierdzenie o rzucie dzieli zależność pitagorejską na jedną część na każdą przyprostokątną.",
        },
        {
          "question": "Który tryb kalkulatora powinienem wybrać?",
          "answer": "Dopasuj tryb do znanych wartości. Użyj odcinka p, gdy znasz a i c, odcinka q, gdy znasz b i c, przyprostokątnej a, gdy znasz c i p, przyprostokątnej b, gdy znasz c i q, oraz sumy rzutów dającej c, gdy znasz p i q.",
        },
        {
          "question": "Czy rzuty są tym samym co przyprostokątne trójkąta prostokątnego?",
          "answer": "Nie. Przyprostokątne to dwa boki tworzące kąt prosty, natomiast rzuty to odcinki leżące wzdłuż przeciwprostokątnej. Rzut jest zwykle krótszy od swojej przyprostokątnej i leży płasko na przeciwprostokątnej, a nie wzdłuż boku trójkąta.",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Wybierz kolejne narzędzie według potrzebnego pomiaru, ponieważ każdy kalkulator poniżej obsługuje jedno konkretne zadanie związane z rzutami.",
      "relatedItems": [
        "Kalkulator rzutu P trójkąta prostokątnego",
        "Kalkulator rzutu Q trójkąta prostokątnego",
        "Kalkulator przyprostokątnej A z rzutu trójkąta prostokątnego",
        "Kalkulator przyprostokątnej B z rzutu trójkąta prostokątnego",
        "Kalkulator przeciwprostokątnej z rzutów trójkąta prostokątnego",
        "Kalkulator wysokości z rzutów trójkąta prostokątnego",
        "Kalkulator wysokości trójkąta prostokątnego",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzut w trójkącie prostokątnym to cień, jaki przyprostokątna rzuca na przeciwprostokątną. Poprowadź wysokość z wierzchołka kąta prostego na przeciwprostokątną, a podzieli ona ten bok na dwa odcinki, zwane p i q. Odcinek p należy do przyprostokątnej a, a odcinek q należy do przyprostokątnej b.",
            },
            {
              "kind": "p",
              "text": "Ten kalkulator rzutu trójkąta prostokątnego obsługuje wszystkie pięć zależności związanych z rzutami. Znajduje rzut p z przyprostokątnej a, rzut q z przyprostokątnej b, przyprostokątną a z rzutu p, przyprostokątną b z rzutu q oraz całą przeciwprostokątną z p i q. Każde zadanie to osobny tryb, więc wybierasz ten, który odpowiada pomiarom, które już znasz.",
            },
            {
              "kind": "p",
              "text": "Te same dwa rzuty mogą też odtworzyć cały trójkąt. Na przykład, jeśli [[p = 9]] cm i [[q = 16]] cm, to [[c = 9 + 16 = 25]] cm, a wysokość wynosi [[h = \\sqrt{9 \\times 16} = 12]] cm. Ten przewodnik wyjaśnia każdy tryb, pokazuje wzory, omawia przykłady i uczy, jak sprawdzić każdą odpowiedź.",
            },
          ],
          "h2": "Kalkulator rzutu trójkąta prostokątnego",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie oferuje pięć trybów, po jednym dla każdej zależności związanej z rzutami. Każdy tryb wymaga dwóch znanych pomiarów i zwraca jedną brakującą wartość. Nie musisz najpierw rozwiązywać całego trójkąta: wybierz tryb odpowiadający twoim liczbom, wpisz je i odczytaj wynik.",
            },
            {
              "kind": "p",
              "text": "Tabela poniżej to najszybszy sposób wyboru. Znajdź wiersz, którego znane pomiary odpowiadają twoim, a ten wiersz wskaże tryb, którego należy użyć. Kolejne sekcje wyjaśniają każdy tryb szczegółowo, z rozwiązanym przykładem dla każdego z nich.",
            },
          ],
          "h2": "Obliczanie rzutów i odcinków przeciwprostokątnej w trójkącie prostokątnym",
          "table": {
            "headers": [
              "Tryb kalkulatora",
              "Znane pomiary",
              "Wynik",
            ],
            "rows": [
              [
                "Odcinek przeciwprostokątnej p",
                "Przyprostokątna a i przeciwprostokątna c",
                "Rzut p",
              ],
              [
                "Odcinek przeciwprostokątnej q",
                "Przyprostokątna b i przeciwprostokątna c",
                "Rzut q",
              ],
              [
                "Przyprostokątna a z rzutu",
                "Przeciwprostokątna c i rzut p",
                "Przyprostokątna a",
              ],
              [
                "Przyprostokątna b z rzutu",
                "Przeciwprostokątna c i rzut q",
                "Przyprostokątna b",
              ],
              [
                "Suma rzutów daje c",
                "Rzut p i rzut q",
                "Przeciwprostokątna c",
              ],
            ],
          },
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Weź trójkąt prostokątny ABC, z kątem prostym przy C. Dwa boki tworzące kąt prosty to przyprostokątne, AC i BC. Bok leżący naprzeciw kąta prostego to przeciwprostokątna, AB. Teraz poprowadź wysokość z C prosto na przeciwprostokątną, tak aby przecięła ją w punkcie zwanym D. Ta wysokość jest prostopadła do przeciwprostokątnej, więc przecina AB pod kątem prostym.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na dwa sąsiadujące odcinki. Odcinek przy wierzchołku A, zwany AD, to rzut p. Odcinek przy wierzchołku B, zwany DB, to rzut q. Razem tworzą całą przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Każdy rzut należy do przyprostokątnej, która dotyka jego wierzchołka. Przyprostokątna a dotyka wierzchołka A, więc jej rzutem jest p. Przyprostokątna b dotyka wierzchołka B, więc jej rzutem jest q. To przyporządkowanie nigdy się nie zmienia: a idzie w parze z p, a b idzie w parze z q.",
            },
            {
              "kind": "p",
              "text": "Rzuty leżą płasko wzdłuż przeciwprostokątnej. Nie są bokami trójkąta ani nie są prostopadłe do niczego. Wyobraź sobie każdy z nich jako cień, jaki jego przyprostokątna rzuca na przeciwprostokątną, gdy wysokość opada prosto na nią.",
            },
          ],
          "h2": "Czym są rzuty w trójkącie prostokątnym?",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jeden trójkąt ma sześć nazwanych części, a każda ma ustalone położenie. Tabela poniżej wymienia każdą część wraz z jej symbolem, znaczeniem i położeniem. Naucz się tej tabeli raz, a każdy wzór w tym przewodniku będzie czytelny.",
            },
            {
              "kind": "p",
              "text": "Prawidłowe rozpoznanie odcinka ma znaczenie, ponieważ każdy tryb kalkulatora oczekuje określonych danych wejściowych. Wpisanie rzutu tam, gdzie powinna być przyprostokątna, albo wpisanie p tam, gdzie powinno być q, nadal da jakąś liczbę, ale odpowie na inne pytanie niż to, które zadałeś. Najpierw oznacz schemat, a potem dopasuj oznaczenia do trybu.",
            },
          ],
          "h2": "Boki i odcinki trójkąta prostokątnego",
          "table": {
            "headers": [
              "Symbol",
              "Nazwa",
              "Położenie",
            ],
            "rows": [
              [
                "a",
                "Przyprostokątna a (bok AC)",
                "Bok prostopadły dotykający wierzchołka A",
              ],
              [
                "b",
                "Przyprostokątna b (bok BC)",
                "Bok prostopadły dotykający wierzchołka B",
              ],
              [
                "c",
                "Przeciwprostokątna (bok AB)",
                "Najdłuższy bok, naprzeciw kąta prostego",
              ],
              [
                "p",
                "Rzut p (odcinek AD)",
                "Część przeciwprostokątnej przy wierzchołku A",
              ],
              [
                "q",
                "Rzut q (odcinek DB)",
                "Część przeciwprostokątnej przy wierzchołku B",
              ],
              [
                "h",
                "Wysokość (odcinek CD)",
                "Prostopadła z C na przeciwprostokątną",
              ],
            ],
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pięć wzorów obejmuje każdy tryb na tej stronie. Pierwsze dwa znajdują rzuty z przyprostokątnych. Kolejne dwa odtwarzają przyprostokątne z rzutów. Ostatni odtwarza przeciwprostokątną z jej dwóch części.",
            },
            {
              "kind": "p",
              "text": "Rzut p, z przyprostokątnej a i przeciwprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Rzut q, z przyprostokątnej b i przeciwprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna a, z przeciwprostokątnej i rzutu p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna b, z przeciwprostokątnej i rzutu q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna, z obu rzutów:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Znalezienie rzutu oznacza podniesienie przyprostokątnej do kwadratu i podzielenie przez przeciwprostokątną. Znalezienie przyprostokątnej oznacza pomnożenie przeciwprostokątnej przez rzut i wyciągnięcie pierwiastka kwadratowego. Znalezienie przeciwprostokątnej oznacza dodanie dwóch odcinków. Pierwiastek kwadratowy pojawia się tylko przy odtwarzaniu przyprostokątnej, ponieważ tylko wzory na przyprostokątne zaczynają się od długości podniesionej do kwadratu. Wszystkie pomiary muszą używać tej samej jednostki, więc przed obliczeniem przelicz jednostki.",
            },
          ],
          "h2": "Wzory na rzuty w trójkącie prostokątnym wyjaśnione",
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wybór trybu to ćwiczenie w dopasowywaniu: znajdź tryb, który wymaga dwóch pomiarów, które znasz, a kalkulator zwróci brakującą wartość.",
            },
            {
              "kind": "h3",
              "text": "Tryb 1: Odcinek przeciwprostokątnej p",
            },
            {
              "kind": "p",
              "text": "Wybierz ten tryb, gdy znasz przyprostokątną a i przeciwprostokątną c. Wzór to [[p = a^2 / c]]. Podnieś przyprostokątną a do kwadratu, a potem podziel przez c. Użyj go, gdy zadanie podaje przyprostokątną i całą przeciwprostokątną i pyta, jaka część przeciwprostokątnej należy do tej przyprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Tryb 2: Odcinek przeciwprostokątnej q",
            },
            {
              "kind": "p",
              "text": "Wybierz ten tryb, gdy znasz przyprostokątną b i przeciwprostokątną c. Wzór to [[q = b^2 / c]]. Jest to lustrzane odbicie trybu 1, z przyprostokątną b w miejsce przyprostokątnej a. Użyj go, gdy znana przyprostokątna to ta, która dotyka wierzchołka B.",
            },
            {
              "kind": "h3",
              "text": "Tryb 3: Przyprostokątna a z rzutu",
            },
            {
              "kind": "p",
              "text": "Wybierz ten tryb, gdy znasz przeciwprostokątną c i rzut p. Wzór to [[a = \\sqrt{c \\times p}]]. Najpierw pomnóż, a potem wyciągnij pierwiastek kwadratowy. Użyj go, gdy zadanie podaje przeciwprostokątną i odcinek przy A i pyta o przyprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Tryb 4: Przyprostokątna b z rzutu",
            },
            {
              "kind": "p",
              "text": "Wybierz ten tryb, gdy znasz przeciwprostokątną c i rzut q. Wzór to [[b = \\sqrt{c \\times q}]]. Jest to lustrzane odbicie trybu 3, z q w miejsce p. Użyj go, gdy znany odcinek to ten przy B.",
            },
            {
              "kind": "h3",
              "text": "Tryb 5: Suma rzutów daje c",
            },
            {
              "kind": "p",
              "text": "Wybierz ten tryb, gdy znasz oba rzuty, p i q. Wzór to [[c = p + q]], zwykłe dodawanie bez podnoszenia do kwadratu i bez pierwiastka kwadratowego.",
            },
            {
              "kind": "p",
              "text": "Szybka wskazówka decyzyjna: przyprostokątna z c daje rzut, c z rzutem daje przyprostokątną, a oba rzuty razem dają c. Jeśli twoje znane wartości nie pasują do żadnej z tych par, najpierw potrzebujesz jeszcze jednego pomiaru.",
            },
          ],
          "h2": "Jak wybrać odpowiedni tryb kalkulatora",
          "image": {
            "alt": "Pięć trybów kalkulatora wraz z ich znanymi wartościami i wynikami: odcinek p z a i c, odcinek q z b i c, przyprostokątna a z c i p, przyprostokątna b z c i q oraz przeciwprostokątna c z p i q",
            "caption": "Pięć trybów, po jednym na każdą znaną parę: przyprostokątna z c daje rzut, c z rzutem daje przyprostokątną, a p z q daje c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzut p to część przeciwprostokątnej, która należy do przyprostokątnej a. Wzór dzieli kwadrat przyprostokątnej a przez całą przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[a = 9]] cm i [[c = 15]] cm. Krok 1 zapisuje wzór, [[p = a^2 / c]]. Krok 2 podstawia wartości, [[p = 9^2 / 15 = 81 / 15]]. Krok 3 dzieli, dając [[p = 5.4]] cm. Odpowiedź to długość wzdłuż przeciwprostokątnej, wyrażona w tej samej jednostce co a i c.",
            },
            {
              "kind": "p",
              "text": "Krótkie sprawdzenie potwierdza wynik. Druga przyprostokątna w tym trójkącie ma 12 cm, więc jej rzut wynosi [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Dodanie dwóch rzutów daje [[5.4 + 9.6 = 15]] cm, czyli dokładnie c. Jeśli twoje dwa rzuty nie sumują się do c, jedna z danych wejściowych była błędna. <a href=\"/right-triangle-projection-p-calculator/\">Kalkulator rzutu p</a> wykonuje to obliczenie samodzielnie, gdy potrzebujesz go często.",
            },
          ],
          "h2": "Jak obliczyć rzut P z przyprostokątnej A i przeciwprostokątnej",
          "image": {
            "alt": "Trójkąt prostokątny pokazujący, że kwadrat przyprostokątnej a podzielony przez przeciwprostokątną c daje rzut p, przy a równym 9 cm i c równym 15 cm, co daje p równe 5.4 cm",
            "caption": "Rzut p z przyprostokątnej a: p jest równe a do kwadratu przez c, więc 81 przez 15 daje 5.4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzut q to część przeciwprostokątnej, która należy do przyprostokątnej b. Wzór dzieli kwadrat przyprostokątnej b przez całą przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[b = 12]] cm i [[c = 15]] cm. Krok 1 zapisuje wzór, [[q = b^2 / c]]. Krok 2 podstawia wartości, [[q = 12^2 / 15 = 144 / 15]]. Krok 3 dzieli, dając [[q = 9.6]] cm. Odpowiedź to odcinek przy wierzchołku B, po przeciwnej stronie stopy wysokości niż p.",
            },
            {
              "kind": "p",
              "text": "Porównaj dwa rzuty, zanim przejdziesz dalej. Tutaj p wynosi 5.4 cm, a q wynosi 9.6 cm, więc q jest większe, co zgadza się z tym, że przyprostokątna b jest dłuższa od przyprostokątnej a. Dłuższa przyprostokątna zawsze rzuca dłuższy rzut. Jeśli twoja dłuższa przyprostokątna dała krótszy rzut, zamieniłeś p z q. <a href=\"/right-triangle-projection-q-calculator/\">Kalkulator rzutu q</a> wykonuje to obliczenie samodzielnie, gdy potrzebujesz go często.",
            },
          ],
          "h2": "Jak obliczyć rzut Q z przyprostokątnej B i przeciwprostokątnej",
          "image": {
            "alt": "Trójkąt prostokątny pokazujący, że kwadrat przyprostokątnej b podzielony przez przeciwprostokątną c daje rzut q, przy b równym 12 cm i c równym 15 cm, co daje q równe 9.6 cm",
            "caption": "Rzut q z przyprostokątnej b: q jest równe b do kwadratu przez c, więc 144 przez 15 daje 9.6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aby odtworzyć przyprostokątną a, pomnóż przeciwprostokątną przez rzut p i wyciągnij pierwiastek kwadratowy:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[c = 25]] cm i [[p = 9]] cm. Iloczyn wynosi [[25 \\times 9 = 225]], a pierwiastek kwadratowy z 225 to 15, więc [[a = 15]] cm. Iloczyn 225 to długość podniesiona do kwadratu, a nie bok, dlatego pierwiastka kwadratowego nie można pominąć. Podanie 225 jako przyprostokątnej oznaczałoby, że bok jest dziewięć razy dłuższy od przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Krok pierwiastka kwadratowego to cała istota tego trybu. Twierdzenie o rzucie mówi, że [[a^2 = c \\times p]], więc iloczyn daje kwadrat przyprostokątnej. Cofnięcie podnoszenia do kwadratu wymaga pierwiastka kwadratowego, tak jak cofnięcie podwojenia wymaga podzielenia na pół. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator przyprostokątnej a z rzutu</a> omawia to obliczenie w pełni, gdy potrzebujesz go osobno.",
            },
          ],
          "h2": "Jak znaleźć przyprostokątną A z rzutu P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Aby odtworzyć przyprostokątną b, pomnóż przeciwprostokątną przez rzut q i wyciągnij pierwiastek kwadratowy:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[c = 25]] cm i [[q = 16]] cm. Iloczyn wynosi [[25 \\times 16 = 400]], a pierwiastek kwadratowy z 400 to 20, więc [[b = 20]] cm. Metoda jest lustrzanym odbiciem obliczenia przyprostokątnej a, z q w miejsce p. Przyporządkowanie jest ustalone przez oznaczenia trójkąta, więc wpisanie p tutaj zwróciłoby przyprostokątną a.",
            },
            {
              "kind": "p",
              "text": "Sprawdź odpowiedź względem rozmiarów trójkąta. Przyprostokątna b musi być krótsza od przeciwprostokątnej, a 20 cm jest krótsze od 25 cm, więc wynik przechodzi pierwsze sprawdzenie sensowności. Podniesienie jej do kwadratu daje [[20^2 = 400]], co zgadza się z [[c \\times q = 25 \\times 16 = 400]], więc twierdzenie zachodzi dokładnie. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkulator przyprostokątnej b z rzutu</a> omawia to obliczenie w pełni, gdy potrzebujesz go osobno.",
            },
          ],
          "h2": "Jak znaleźć przyprostokątną B z rzutu Q",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa rzuty to dwie części jednego prostego boku, więc przeciwprostokątna jest ich sumą:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[p = 9]] cm i [[q = 16]] cm. Dodanie daje [[c = 9 + 16 = 25]] cm. To zasada dodawania odcinków: gdy punkt dzieli odcinek na dwie części, cały odcinek jest równy sumie jego części. Stopa wysokości D dzieli przeciwprostokątną AB na AD i DB, więc AB jest równe AD plus DB.",
            },
            {
              "kind": "p",
              "text": "Ten tryb jest też najszybszym sprawdzeniem pozostałych czterech trybów. Gdy obliczysz p i q osobno, dodaj je i porównaj z c. W trójkącie 9-12-15, [[p = 5.4]] cm i [[q = 9.6]] cm sumują się do 15 cm, potwierdzając oba rzuty naraz. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkulator przeciwprostokątnej z rzutów</a> omawia to obliczenie w pełni, gdy potrzebujesz go osobno.",
            },
          ],
          "h2": "Jak obliczyć całą przeciwprostokątną z rzutów",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć krótkich kroków prowadzi od oznaczonego schematu do sprawdzonej odpowiedzi. Kroki są takie same dla każdego trybu; zmieniają się tylko wybrany tryb i wpisywane liczby.",
            },
            {
              "kind": "steps",
              "steps": [
                "Ustal, które pomiary są znane.",
                "Otwórz wybór trybu kalkulatora.",
                "Wybierz odpowiedni tryb obliczeń.",
                "Wpisz pierwszy wymagany pomiar.",
                "Wpisz drugi wymagany pomiar.",
                "Wybierz zgodne jednostki pomiaru.",
                "Kliknij odpowiedni przycisk Oblicz.",
                "Odczytaj wyświetlony wynik.",
                "W razie potrzeby sprawdź odpowiedź, korzystając z innej zależności geometrycznej.",
                "Użyj przycisku Resetuj przed rozpoczęciem kolejnego obliczenia.",
              ],
            },
            {
              "kind": "p",
              "text": "Krok 1 wykonuje większość pracy. Oznacz trójkąt, zaznacz p i q na przeciwprostokątnej i zanotuj, do której przyprostokątnej należy każdy rzut. Gdy oznaczenia są ustalone, wybór trybu wynika z tabeli na górze tego przewodnika, a kalkulator zajmuje się arytmetyką. Nie opisuj ani nie oczekuj funkcji, których strona nie ma: nie oblicza ona automatycznie wysokości, kątów ani pola.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora rzutu trójkąta prostokątnego",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny schemat pokazuje trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z C prostopadle na AB i dotyka jej w D. Dwa małe kwadraty oznaczają kąty proste: jeden przy C, między przyprostokątnymi, i jeden przy D, między wysokością a przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na odcinek AD, który jest rzutem p, oraz odcinek DB, który jest rzutem q. Wysokość CD jest oznaczona jako h. Prześledź schemat w tej kolejności, aby utrwalić oznaczenia: zacznij w A, przejdź wzdłuż przyprostokątnej a do C, potem wzdłuż przyprostokątnej b do B, a następnie wróć wzdłuż przeciwprostokątnej z B do A, zatrzymując się w D, aby zobaczyć podział na q i p.",
            },
            {
              "kind": "p",
              "text": "Wysokość tworzy dwa mniejsze trójkąty prostokątne, ACD i CBD, wewnątrz pierwotnego. W trójkącie ACD przeciwprostokątną jest przyprostokątna a, a jedną przyprostokątną jest rzut p. W trójkącie CBD przeciwprostokątną jest przyprostokątna b, a jedną przyprostokątną jest rzut q.",
            },
          ],
          "h2": "Schemat rzutu trójkąta prostokątnego",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym przy C, wysokością CD na przeciwprostokątną AB, przyprostokątnymi a i b, przeciwprostokątną c, rzutami p i q oraz wysokością h oznaczonymi na schemacie",
            "caption": "Główny trójkąt ABC: wysokość CD dzieli przeciwprostokątną AB na rzut p (AD) i rzut q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód opiera się na trójkątach podobnych. Poprowadzenie wysokości CD dzieli trójkąt ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, a oba są podobne do pierwotnego trójkąta. Podobieństwo oznacza, że ich odpowiadające boki pozostają w tym samym stosunku, a jeden z tych stosunków daje twierdzenie o rzucie bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Zacznij od przyprostokątnej a. Trójkąt ACD ma wspólny kąt przy A z trójkątem ABC, a oba zawierają kąt prosty, więc ich trzecie kąty też muszą się zgadzać. Dopasowanie boków leżących w tych samych pozycjach daje proporcję:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz podstaw standardowe symbole: [[AD = p]], [[AC = a]] i [[AB = c]]. Proporcja staje się:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie na krzyż usuwa ułamki: [[p \\times c = a \\times a]], czyli [[a^2 = c \\times p]]. Ten sam argument zastosowany do drugiego małego trójkąta, CBD, daje [[b^2 = c \\times q]], ponieważ trójkąt CBD ma wspólny kąt przy B z całym trójkątem. Podobieństwo wykonuje całą pracę: odpowiadające boki trójkątów podobnych pozostają proporcjonalne, a twierdzenie o rzucie to to, jak ta proporcja wygląda po mnożeniu na krzyż.",
            },
          ],
          "h2": "Dlaczego twierdzenia o rzutach działają?",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok mniejszych trójkątów podobnych ACD i CBD, pokazujący proporcje p przez a równe a przez c oraz q przez b równe b przez c",
            "caption": "Dowód z trójkątów podobnych: p przez a jest równe a przez c, a q przez b jest równe b przez c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy przykład podaje dane wartości, tryb, podstawienie i końcową odpowiedź. Dwa przykłady dotyczą każdego z pięciu trybów, więc każdy tryb możesz zobaczyć dwukrotnie, z innymi liczbami.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Znajdź rzut P",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 9]] cm i [[c = 15]] cm, użyj trybu 1, Odcinek przeciwprostokątnej p. Wzór daje [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Znajdź rzut P",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 12]] m i [[c = 20]] m, użyj trybu 1. Wzór daje [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. Drugi rzut wynosi 12.8 m, a [[7.2 + 12.8 = 20]] m potwierdza wynik.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Znajdź rzut Q",
            },
            {
              "kind": "p",
              "text": "Dane [[b = 12]] cm i [[c = 15]] cm, użyj trybu 2, Odcinek przeciwprostokątnej q. Wzór daje [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. To ten sam trójkąt co w przykładzie 1, widziany od drugiej przyprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Znajdź rzut Q",
            },
            {
              "kind": "p",
              "text": "Dane [[b = 8]] m i [[c = 10]] m, użyj trybu 2. Wzór daje [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. Drugi rzut wynosi 3.6 m, a to znany trójkąt 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Znajdź przyprostokątną A",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 25]] cm i [[p = 9]] cm, użyj trybu 3, Przyprostokątna a z rzutu. Wzór daje [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Iloczyn jest kwadratem doskonałym, więc odpowiedź jest dokładna, bez zaokrąglania.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Znajdź przyprostokątną A",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm i [[p = 4]] cm, użyj trybu 3. Wzór daje [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Iloczyn 40 nie jest kwadratem doskonałym, więc odpowiedź jest przybliżeniem zaokrąglonym do trzech miejsc po przecinku.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Znajdź przyprostokątną B",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 25]] cm i [[q = 16]] cm, użyj trybu 4, Przyprostokątna b z rzutu. Wzór daje [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. To ten sam trójkąt co w przykładzie 5, widziany od drugiego rzutu, a dwie przyprostokątne 15 i 20 dopełniają trójkąt 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Znajdź przyprostokątną B",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm i [[q = 6]] cm, użyj trybu 4. Wzór daje [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Dopasowana przyprostokątna a wynosi około 6.325 cm, z przykładu 6.",
            },
            {
              "kind": "h3",
              "text": "Przykład 9: Znajdź przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 9]] cm i [[q = 16]] cm, użyj trybu 5, Suma rzutów daje c. Wzór daje [[c = 9 + 16 = 25]] cm. Nie potrzeba podnoszenia do kwadratu ani pierwiastka kwadratowego, ponieważ dwa odcinki po prostu łączą się w cały bok.",
            },
            {
              "kind": "h3",
              "text": "Przykład 10: Znajdź przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 3.5]] m i [[q = 6.5]] m, użyj trybu 5. Wzór daje [[c = 3.5 + 6.5 = 10]] m. Rzuty dziesiętne dodają się tak samo jak liczby całkowite, więc wyrównaj przecinki dziesiętne i dodaj.",
            },
          ],
          "h2": "Przykłady z rozwiązaniami dla wszystkich pięciu trybów kalkulatora",
        },
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Znajomość dwóch rzutów wystarcza, aby odtworzyć cały trójkąt. Użyj [[p = 9]] cm i [[q = 16]] cm. Najpierw przeciwprostokątna wynosi [[c = 9 + 16 = 25]] cm. Potem przyprostokątna a wynosi [[a = \\sqrt{25 \\times 9} = 15]] cm, a przyprostokątna b wynosi [[b = \\sqrt{25 \\times 16} = 20]] cm. Wysokość wynosi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Jedna para liczb daje cztery długości: c, a, b i h. Na tym polega siła zależności związanych z rzutami: dwa odcinki na przeciwprostokątnej niosą pełny kształt trójkąta. Końcowe sprawdzenie zamyka pętlę: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], więc twierdzenie Pitagorasa potwierdza cały trójkąt naraz.",
            },
            {
              "kind": "p",
              "text": "Pamiętaj, że są to zależności matematyczne, a nie osobne tryby kalkulatora. Ta strona oblicza jedną wartość na tryb. Odtworzenie całego trójkąta oznacza uruchomienie jednego trybu, a potem użycie jego wyniku w następnym, albo wykonanie kroków ręcznie, jak pokazano powyżej.",
            },
          ],
          "h2": "Jak obliczyć wszystkie główne pomiary trójkąta prostokątnego",
          "image": {
            "alt": "Trójkąt prostokątny z rzutami p równym 9 i q równym 16, przeciwprostokątną 25, przyprostokątnymi 15 i 20 oraz wysokością 12, pokazujący wszystkie sześć pomiarów na jednym schemacie",
            "caption": "Jedna para rzutów odtwarza trójkąt: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie i twierdzenie Pitagorasa zgadzają się dokładnie, a algebra pokazuje dlaczego. Zacznij od dwóch wzorów na rzuty:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dodaj dopasowany wzór na przyprostokątną b, [[b^2 = c \\times q]], aby otrzymać:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Wyłączenie c przed nawias po prawej stronie daje [[a^2 + b^2 = c(p + q)]]. Ponieważ [[p + q = c]], podstawienie daje znany wynik:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sprawdzenie liczbowe z trójkątem 9-16-25 to potwierdza: [[a^2 + b^2 = 225 + 400 = 625]] oraz [[c^2 = 25^2 = 625]]. Te dwa twierdzenia nie są rywalami. Twierdzenie o rzucie dzieli zależność pitagorejską na jedną część na każdą przyprostokątną, a dodanie części odtwarza ją. Dlatego każdy wynik na tej stronie można sprawdzić twierdzeniem Pitagorasa.",
            },
          ],
          "h2": "Związek między rzutami a twierdzeniem Pitagorasa",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość jest średnią geometryczną dwóch rzutów:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[p = 9]] cm i [[q = 16]] cm. Iloczyn wynosi [[9 \\times 16 = 144]], a pierwiastek kwadratowy ze 144 to 12, więc [[h = 12]] cm. Wysokość to odcinek prostopadły z kąta prostego na przeciwprostokątną, a jej długość jest ustalona, gdy znane są p i q. To ta sama idea średniej geometrycznej, która łączy przyprostokątne z rzutami, zastosowana do wysokości.",
            },
            {
              "kind": "p",
              "text": "Zauważ, że ta strona nie ma dedykowanego trybu wysokości. Kalkulator zwraca rzuty, przyprostokątne i przeciwprostokątną, ale nie h. Strona, która rozwiązuje wysokość bezpośrednio, to <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator wysokości z rzutów</a>, który przyjmuje p i q i zwraca h. <a href=\"/right-triangle-altitude-calculator/\">Kalkulator wysokości</a> obejmuje inne sposoby znajdowania h, z przyprostokątnych lub z pola.",
            },
          ],
          "h2": "Związek między rzutami a wysokością",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery niezależne sprawdzenia wyłapują prawie każdy błąd. Wykonaj przynajmniej jedno z nich przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. Każde sprawdzenie korzysta z innej zależności, więc błąd, który prześlizgnie się przez jedno, zwykle zostanie wyłapany przez inne.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 1: Dodawanie rzutów",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[p + q = c]]. Dla [[p = 9]] cm, [[q = 16]] cm i [[c = 25]] cm, [[9 + 16 = 25]], więc odcinki pasują. Jeśli suma różni się od c, jeden z rzutów jest błędny.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 2: Twierdzenie o rzucie dla przyprostokątnej A",
            },
            {
              "kind": "p",
              "text": "Podnieś przyprostokątną a do kwadratu i porównaj ją z [[c \\times p]]. Dla [[a = 15]] cm, [[c = 25]] cm i [[p = 9]] cm, [[a^2 = 225]] oraz [[c \\times p = 225]], więc odpowiedź przechodzi. Jeśli te dwie liczby się różnią, przyprostokątna lub rzut jest błędny.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 3: Twierdzenie o rzucie dla przyprostokątnej B",
            },
            {
              "kind": "p",
              "text": "Podnieś przyprostokątną b do kwadratu i porównaj ją z [[c \\times q]]. Dla [[b = 20]] cm, [[c = 25]] cm i [[q = 16]] cm, [[b^2 = 400]] oraz [[c \\times q = 400]], więc odpowiedź przechodzi. Użyj tego sprawdzenia, gdy twoją odpowiedzią jest przyprostokątna.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 4: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[a^2 + b^2 = c^2]]. Dla [[a = 15]] cm, [[b = 20]] cm i [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. To sprawdzenie testuje cały trójkąt naraz, a nie tylko jeden wzór, więc jest najsilniejsze z czterech.",
            },
          ],
          "h2": "Jak sprawdzić obliczenia rzutów",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Większość poniższych błędów wynika z oznaczania, a nie z arytmetyki, więc gdy odpowiedź wygląda na błędną, najpierw oznacz schemat od nowa, a potem przelicz.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mylenie rzutu p z rzutem q: p leży przy A i należy do przyprostokątnej a, natomiast q leży przy B i należy do przyprostokątnej b.",
                "Łączenie przyprostokątnej a z q zamiast z p: przyprostokątna a używa p, więc [[a = \\sqrt{c \\times p}]]. Użycie q zwraca przyprostokątną b, a nie przyprostokątną a.",
                "Łączenie przyprostokątnej b z p zamiast z q: przyprostokątna b używa q, więc [[b = \\sqrt{c \\times q}]]. Użycie p zwraca przyprostokątną a, a nie przyprostokątną b.",
                "Zapominanie o pierwiastku kwadratowym przy obliczaniu przyprostokątnej: iloczyn cp to a do kwadratu, a nie a. Dla c = 25 i p = 9 przyprostokątna wynosi 15 cm, a nie 225.",
                "Mieszanie różnych jednostek pomiaru: najpierw przelicz. Mnożenie metrów przez centymetry daje bezsensowny iloczyn, więc wyraź obie dane wejściowe w jednej jednostce.",
                "Użycie złego trybu kalkulatora: dopasuj tryb do znanych wartości, korzystając z tabeli na górze tego przewodnika.",
                "Traktowanie p lub q jako przyprostokątnej prostopadłej: rzuty leżą płasko wzdłuż przeciwprostokątnej. Są odcinkami przeciwprostokątnej, a nie bokami trójkąta.",
                "Zapominanie, że c = p + q: dwa rzuty muszą sumować się do przeciwprostokątnej.",
                "Używanie nieprawidłowych lub ujemnych długości: długości są dodatnie, więc ujemna wartość oznacza błąd w danych, a zerowe rzuty nie opisują żadnego prawdziwego trójkąta.",
                "Zaokrąglanie zbyt wcześnie: zachowaj pełną dokładność do ostatniego kroku, a potem zaokrąglij raz.",
                "Stosowanie wzorów do dowolnego trójkąta: twierdzenie wymaga kąta prostego i jego wysokości, więc bez nich nie ma rzutów p i q w tym sensie.",
                "Mylenie długości podniesionych do kwadratu z rzeczywistymi długościami boków: 225 to a do kwadratu, natomiast 15 to a. Powiedz, którą z nich masz na myśli, zanim zapiszesz liczbę.",
              ],
            },
          ],
          "h2": "Typowe błędy przy korzystaniu z kalkulatora rzutu trójkąta prostokątnego",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sześć własności wynika bezpośrednio ze wzorów na rzuty. Każda z nich jest też sprawdzeniem sensowności nowej odpowiedzi.",
            },
            {
              "kind": "list",
              "items": [
                "Równe rzuty dają równe przyprostokątne. Dla [[p = q = 5]] i [[c = 10]] obie przyprostokątne są równe [[\\sqrt{50} \\approx 7.071]], a trójkąt jest trójkątem prostokątnym równoramiennym.",
                "Nierówne rzuty dają nierówne przyprostokątne: dłuższy rzut należy do dłuższej przyprostokątnej.",
                "Zamiana p i q miejscami zamienia odpowiadające długości przyprostokątnych, ale nie zmienia całkowitej przeciwprostokątnej, ponieważ [[p + q = c]] w obu przypadkach.",
                "Przeskalowanie wszystkich pomiarów o ten sam dodatni współczynnik skaluje każdy wynik o ten współczynnik. Podwojenie p i q podwaja c, a, b i h.",
                "Rzuty są zawsze dodatnie i zawsze mniejsze od c w prawidłowym, niezdegenerowanym trójkącie prostokątnym. Rzut równy c pozostawiłby drugi rzut równy zero.",
                "Dłuższa przyprostokątna zawsze rzuca dłuższy rzut. Porównanie długości przyprostokątnych z długościami rzutów to szybki sposób na wykrycie zamienionego oznaczenia.",
              ],
            },
            {
              "kind": "p",
              "text": "Schemat poniżej pokazuje oba przypadki przy przeciwprostokątnej zachowanej na poziomie 10. Równe rzuty dzielą ją równo i dają równe przyprostokątne, natomiast nierówne rzuty dają przyprostokątne o różnych długościach.",
            },
          ],
          "h2": "Przypadki szczególne i ważne własności rzutów",
          "image": {
            "alt": "Dwa trójkąty prostokątne o przeciwprostokątnej 10: jeden z równymi rzutami p i q po 5, dającymi równe przyprostokątne, i jeden z p równym 2 i q równym 8, dającymi nierówne przyprostokątne",
            "caption": "Równe rzuty dają równe przyprostokątne; nierówne rzuty dają nierówne przyprostokątne, przy tej samej przeciwprostokątnej równej 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to zadania domowe z geometrii i praca w klasie, gdzie zadania o rzutach sprawdzają, czy uczniowie potrafią oznaczyć schemat i zastosować [[a^2 = c \\times p]], zamiast sięgać z przyzwyczajenia po twierdzenie Pitagorasa. Ćwiczenia z trójkątów podobnych korzystają z tego samego układu, ponieważ sam dowód jest ćwiczeniem w dopasowywaniu odpowiadających boków.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny korzysta z twierdzenia, gdy trójkąt prostokątny trzeba odtworzyć z częściowych pomiarów: jeśli rysunek podaje przeciwprostokątną i stopę wysokości, brakująca przyprostokątna wynika z tego bez ponownego mierzenia kształtu.",
            },
            {
              "kind": "p",
              "text": "Jeden warunek ogranicza każde zastosowanie: wymagana geometria trójkąta prostokątnego musi naprawdę istnieć. Twierdzenie opisuje dokładne zależności geometryczne, a nie przybliżone pomiary terenowe, więc nigdy nie zastępuje starannego pomiaru geodezyjnego ani profesjonalnego pomiaru inżynierskiego. W swoim właściwym zastosowaniu jednak zamienia dwie znane długości w trzecią jednym mnożeniem i pierwiastkiem kwadratowym.",
            },
          ],
          "h2": "Praktyczne zastosowania zależności związanych z rzutami w trójkącie prostokątnym",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze, zanim przeczytasz odpowiedzi. Żadna z wartości nie powtarza przykładów z rozwiązaniami, a ostatnie zadanie łączy kilka pomysłów z tego przewodnika.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Znajdź rzut P",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątną [[a = 6]] cm i przeciwprostokątną [[c = 10]] cm. Znajdź rzut p.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Znajdź rzut Q",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątną [[b = 15]] cm i przeciwprostokątną [[c = 25]] cm. Znajdź rzut q.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Znajdź przyprostokątną A",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 17]] cm i rzut [[p = 8]] cm. Znajdź przyprostokątną a.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Znajdź przyprostokątną B",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 13]] cm i rzut [[q = 9]] cm. Znajdź przyprostokątną b.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma rzuty [[p = 5]] cm i [[q = 20]] cm. Znajdź przeciwprostokątną c.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Twierdzenie o rzucie w kilku krokach",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma rzuty [[p = 4]] cm i [[q = 9]] cm. Znajdź przeciwprostokątną, obie przyprostokątne i wysokość, a potem sprawdź wynik twierdzeniem Pitagorasa.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Sprawdzenie: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Zadania do ćwiczeń z odpowiedziami",
        },
      },
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-intro": "Kalkulator rzutu trójkąta prostokątnego",
        "sec-calculate": "Obliczanie rzutów i odcinków przeciwprostokątnej w trójkącie prostokątnym",
        "sec-what-projections": "Czym są rzuty w trójkącie prostokątnym?",
        "sec-sides-segments": "Boki i odcinki trójkąta prostokątnego",
        "sec-formulas": "Wzory na rzuty w trójkącie prostokątnym wyjaśnione",
        "sec-choose-mode": "Jak wybrać odpowiedni tryb kalkulatora",
        "sec-projection-p": "Jak obliczyć rzut P z przyprostokątnej A i przeciwprostokątnej",
        "sec-projection-q": "Jak obliczyć rzut Q z przyprostokątnej B i przeciwprostokątnej",
        "sec-leg-a": "Jak znaleźć przyprostokątną A z rzutu P",
        "sec-leg-b": "Jak znaleźć przyprostokątną B z rzutu Q",
        "sec-hypotenuse": "Jak obliczyć całą przeciwprostokątną z rzutów",
        "sec-how-to-use": "Jak korzystać z kalkulatora rzutu trójkąta prostokątnego",
        "sec-diagram": "Schemat rzutu trójkąta prostokątnego",
        "sec-proof": "Dlaczego twierdzenia o rzutach działają?",
        "sec-examples": "Przykłady z rozwiązaniami dla wszystkich pięciu trybów kalkulatora",
        "sec-all-measurements": "Jak obliczyć wszystkie główne pomiary trójkąta prostokątnego",
        "sec-pythagoras": "Związek między rzutami a twierdzeniem Pitagorasa",
        "sec-altitude": "Związek między rzutami a wysokością",
        "sec-verify": "Jak sprawdzić obliczenia rzutów",
        "sec-mistakes": "Typowe błędy przy korzystaniu z kalkulatora rzutu trójkąta prostokątnego",
        "sec-properties": "Przypadki szczególne i ważne własności rzutów",
        "sec-applications": "Praktyczne zastosowania zależności związanych z rzutami w trójkącie prostokątnym",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-faq": "Często zadawane pytania",
      },
    },
};
