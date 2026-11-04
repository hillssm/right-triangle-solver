// altitudeFromProjectionsGuideTranslations.bpl.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B4_PL = {
  "pl": {
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Obliczanie wysokości trójkąta prostokątnego z rzutów",
        "sec-altitude": "Czym jest wysokość trójkąta prostokątnego?",
        "sec-projections": "Czym są rzuty w trójkącie prostokątnym?",
        "sec-formula": "Wzór na wysokość trójkąta prostokątnego z rzutów",
        "sec-steps": "Jak krok po kroku obliczyć wysokość z rzutów",
        "sec-diagram": "Objaśnienie diagramu wysokości trójkąta prostokątnego",
        "sec-proof": "Dlaczego wzór na wysokość działa? Dowód z wykorzystaniem trójkątów podobnych",
        "sec-examples": "Rozwiązane przykłady obliczania wysokości z rzutów",
        "sec-verify": "Jak sprawdzić obliczenie wysokości",
        "sec-relationships": "Zależność między wysokością, przeciwprostokątną a przyprostokątnymi trójkąta",
        "sec-geomean": "Twierdzenie o średniej geometrycznej a wysokość trójkąta prostokątnego",
        "sec-special": "Przypadki szczególne i ważne własności",
        "sec-mistakes": "Typowe błędy przy wyznaczaniu wysokości z rzutów",
        "sec-applications": "Praktyczne zastosowania twierdzenia o wysokości",
        "sec-practice": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-faq": "Często zadawane pytania",
        "sec-conclusion": "Jeden pierwiastek kwadratowy, pełne zrozumienie",
      },
      "sections": {
        "sec-intro": {
          "h2": "Obliczanie wysokości trójkąta prostokątnego z rzutów",
          "blocks": [
            {
              "kind": "p",
              "text": "Pomnóż dwa rzuty na przeciwprostokątną, a następnie wyciągnij pierwiastek kwadratowy.",
            },
            {
              "kind": "p",
              "text": "Kalkulator wysokości trójkąta prostokątnego z rzutów wyznacza wysokość trójkąta prostokątnego z dwóch rzutów, [[p]] i [[q]], na które wysokość dzieli przeciwprostokątną. Przyprostokątne ani kąty nie są potrzebne. Wpisz rzut [[p]] i rzut [[q]] w tej samej jednostce, a kalkulator zwróci wysokość [[h]] na podstawie twierdzenia o wysokości:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Wzór działa, ponieważ opuszczenie wysokości z wierzchołka kąta prostego tworzy dwa mniejsze trójkąty, które są do siebie podobne. Podobieństwo wymusza, aby wysokość była średnią geometryczną obu rzutów. Dla szybkiej ilustracji: jeśli [[p=9\\text{ cm}]] i [[q=16\\text{ cm}]], pomnóż [[9]] przez [[16]], aby otrzymać [[144]], a następnie wyciągnij pierwiastek kwadratowy i otrzymaj wysokość [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Wpisz pierwszy odcinek przeciwprostokątnej w pole Rzut [[p]], a drugi w pole Rzut [[q]], zachowując tę samą jednostkę dla obu. Naciśnij Oblicz, aby zobaczyć wysokość, a przycisk Resetuj czyści pola dla nowego zadania. Wynik ma tę samą jednostkę co dane wejściowe. Jeśli znasz natomiast przyprostokątne trójkąta, wypróbuj <a href=\"/right-triangle-altitude-calculator/\">kalkulator wysokości</a> przygotowany na ten przypadek.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Czym jest wysokość trójkąta prostokątnego?",
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość trójkąta prostokątnego to odcinek prostopadły poprowadzony z wierzchołka kąta prostego na przeciwprostokątną. Jej długość mierzy najkrótszą odległość od tego wierzchołka do przeciwprostokątnej, ponieważ prostopadła jest zawsze najkrótszą drogą od punktu do prostej.",
            },
            {
              "kind": "p",
              "text": "Poprowadź wysokość, a trafi ona w przeciwprostokątną w punkcie zwanym spodkiem wysokości, zwykle oznaczanym jako D. Z punktu D wysokość wznosi się pod kątem dokładnie 90 stopni, aby spotkać wierzchołek kąta prostego C. To prostopadłe spotkanie sprawia, że CD jest wysokością, a nie kolejnym zwykłym odcinkiem.",
            },
            {
              "kind": "p",
              "text": "Początkujący mylą czasem wysokość z jedną z przyprostokątnych. Przyprostokątne, AC i BC, spotykają się pod kątem prostym i tworzą zewnętrzne boki trójkąta. Wysokość CD biegnie wewnątrz trójkąta od wierzchołka C do boku AB. Jest to trzeci, odrębny odcinek o własnej długości [[h]], który istnieje dopiero wtedy, gdy wysokość zostanie faktycznie poprowadzona.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna może pełnić rolę podstawy, ponieważ każdy bok może być podstawą, gdy tylko poprowadzona zostanie odpowiadająca mu wysokość, dzięki czemu pole można zapisać jako połowę iloczynu przeciwprostokątnej i tej wysokości. Poprowadzenie wysokości dzieli też trójkąt na dwa mniejsze trójkąty prostokątne, ACD i CBD, w których tkwią zależności z trójkątów podobnych stojące za każdym wzorem na tej stronie.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Czym są rzuty w trójkącie prostokątnym?",
          "blocks": [
            {
              "kind": "p",
              "text": "Gdy wysokość CD spotyka przeciwprostokątną AB, spodek D dzieli AB na dwa mniejsze odcinki: AD, zwany [[p]], oraz DB, zwany [[q]]. Te dwa odcinki to rzuty przyprostokątnych na przeciwprostokątną. Każdy z nich to cień, jaki przyprostokątna rzuca na przeciwprostokątną, gdy światło pada prosto wzdłuż wysokości.",
            },
            {
              "kind": "p",
              "text": "Rzut [[p]] leży obok przyprostokątnej AC, a rzut [[q]] obok przyprostokątnej BC. Ponieważ są to dwie części przeciwprostokątnej, sumują się dokładnie:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[c]] to cała przeciwprostokątna. Ta zależność addytywna pomaga sprawdzać odpowiedzi i odzyskać brakujący rzut, gdy znane są przeciwprostokątna i jeden rzut. Jeśli potrzebujesz obliczenia odwrotnego, czyli wyznaczania rzutów z długości boków, ten kierunek obsługuje <a href=\"/right-triangle-projection-calculator/\">kalkulator rzutów</a>.",
            },
            {
              "kind": "p",
              "text": "Oba rzuty muszą być dodatnimi długościami. Wartość zero lub ujemna nie opisuje żadnego prawdziwego trójkąta, tylko zdegenerowany kształt. A rzuty to nie same przyprostokątne: przyprostokątne AC i BC odchodzą w bok, podczas gdy [[p]] i [[q]] leżą płasko wzdłuż przeciwprostokątnej. Mylenie ich to jeden z najczęstszych błędów uczniów.",
            },
          ],
          "table": {
            "headers": [
              "Pomiar",
              "Znaczenie",
            ],
            "rows": [
              [
                "[[p]]",
                "Pierwszy odcinek przeciwprostokątnej",
              ],
              [
                "[[q]]",
                "Drugi odcinek przeciwprostokątnej",
              ],
              [
                "[[h]]",
                "Prostopadła wysokość",
              ],
              [
                "[[c]]",
                "Cała przeciwprostokątna",
              ],
              [
                "[[a]]",
                "Pierwsza przyprostokątna trójkąta",
              ],
              [
                "[[b]]",
                "Druga przyprostokątna trójkąta",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Wzór na wysokość trójkąta prostokątnego z rzutów",
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o wysokości głosi:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie dodatniego pierwiastka kwadratowego z obu stron daje roboczy wzór:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Każdy symbol ma ustalone znaczenie. Litera [[h]] oznacza wysokość poprowadzoną na przeciwprostokątną, czyli szukaną wielkość. Litery [[p]] i [[q]] oznaczają dwa rzuty na przeciwprostokątną, czyli wielkości wejściowe. Mnożenie łączy rzuty, a pierwiastek kwadratowy cofa ten iloczyn, zwracając długość.",
            },
            {
              "kind": "p",
              "text": "Mnożenie pojawia się dlatego, że podobieństwo dwóch małych trójkątów daje proporcję [[\\frac{h}{p}=\\frac{q}{h}]]. Mnożenie tej proporcji na krzyż daje [[h^2=p\\times q]]. Pierwiastek kwadratowy pojawia się dlatego, że [[h]] jest długością, a tylko dodatni pierwiastek z [[h^2]] nazywa rzeczywistą odległość.",
            },
            {
              "kind": "p",
              "text": "Jednostki zasługują na uwagę. Jeśli [[p]] i [[q]] są mierzone w centymetrach, ich iloczyn żyje w centymetrach kwadratowych, co jest poprawne dla pośredniego kroku o charakterze pola. Wyciągnięcie pierwiastka kwadratowego zamienia centymetry kwadratowe z powrotem na zwykłe centymetry dla końcowej wysokości. Dlatego oba wejścia muszą mieć tę samą jednostkę: mieszanie jednostek zniszczyłoby iloczyn i odpowiedź. Zwarta pamiątka na wzór: wysokość to średnia geometryczna dwóch rzutów, ponieważ średnia geometryczna dwóch liczb to pierwiastek kwadratowy z ich iloczynu.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Jak krok po kroku obliczyć wysokość z rzutów",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Określ dwa rzuty na przeciwprostokątną. Znajdź odcinki, na które spodek wysokości dzieli przeciwprostokątną, i oznacz ten obok przyprostokątnej AC jako [[p]], a ten obok przyprostokątnej BC jako [[q]].",
                "Upewnij się, że oba pomiary używają tej samej jednostki. Jeśli jeden jest w milimetrach, a drugi w centymetrach, przed dotknięciem wzoru przelicz jeden z nich.",
                "Pomnóż [[p]] przez [[q]]. Iloczyn [[h^2]] jest pośrednią wartością o charakterze pola, więc jego jednostką jest kwadrat jednostki wejściowej.",
                "Wyciągnij dodatni pierwiastek kwadratowy z iloczynu. Ujemny pierwiastek odrzucamy, ponieważ długość nie może być ujemna.",
                "Zapisz końcową odpowiedź wraz z jednostką. Goła liczba zaprasza błędy później, zwłaszcza gdy trafia do dłuższego obliczenia.",
                "Sprawdź, czy odpowiedź jest rozsądna. Wysokość zawsze leży między dwoma rzutami i nigdy nie może przekroczyć połowy przeciwprostokątnej.",
              ],
            },
            {
              "kind": "p",
              "text": "Oto metoda zastosowana do pełnego przykładu. Załóżmy, że [[p=4\\text{ cm}]] i [[q=9\\text{ cm}]]. Najpierw pomnóż: [[4\\times 9=36]], więc [[h^2=36\\text{ cm}^2]]. Następnie wyciągnij dodatni pierwiastek kwadratowy:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi [[6\\text{ cm}]]. Dla kontroli: [[6]] leży między rzutami [[4]] i [[9]], co odpowiada zachowaniu średniej geometrycznej opisanemu dalej w tym przewodniku.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Objaśnienie diagramu wysokości trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt ABC ma kąt prosty przy C. Z punktu C wysokość CD opada prostopadle na przeciwprostokątną AB, spotykając ją w spodku D. Odcinek AD oznaczono jako [[p]], DB jako [[q]], a CD jako [[h]], natomiast przeciwprostokątna AB to [[c]], a przyprostokątne AC i BC to [[a]] i [[b]].",
            },
            {
              "kind": "p",
              "text": "Dwa małe kwadraty oznaczają dwa kąty proste: jeden przy C wewnątrz pierwotnego trójkąta i jeden przy D, gdzie wysokość spotyka przeciwprostokątną. Wysokość CD występuje jako czysty odcinek wewnętrzny, wizualnie odróżniający się od dwóch przyprostokątnych tworzących zewnętrzny szkielet trójkąta.",
            },
            {
              "kind": "p",
              "text": "Wysokość dzieli ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, które są podobne do siebie i do pierwotnego trójkąta. W pytaniach podręcznikowych rzuty opisuje się często jako dwa odcinki przeciwprostokątnej albo po prostu jako liczby leżące po obu stronach spodka wysokości. Przed jakimkolwiek obliczeniem oznacz je jako [[p]] i [[q]].",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Trójkąt prostokątny ABC z kątem prostym przy C, wysokością CD na przeciwprostokątną AB, rzutami AD = [[p]] i DB = [[q]], wysokością CD = [[h]]",
            "caption": "Wysokość CD dzieli przeciwprostokątną AB na rzuty [[p]] i [[q]]; [[h]] to średnia geometryczna [[p]] i [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Dlaczego wzór na wysokość działa? Dowód z wykorzystaniem trójkątów podobnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o wysokości nie jest regułą do bezmyślnego zapamiętywania. Wynika ono z podobieństwa dwóch trójkątów, które tworzy wysokość.",
            },
            {
              "kind": "p",
              "text": "W trójkącie ACD kąty ostre przy A i C sumują się do 90 stopni, a w dużym trójkącie ABC kąty A i B również sumują się do 90 stopni. Zatem kąt przy C wewnątrz ACD jest równy kątowi B, a kąt przy A jest równy kątowi przy C wewnątrz CBD. Oba małe trójkąty mają wszystkie trzy kąty wspólne, co czyni je podobnymi.",
            },
            {
              "kind": "p",
              "text": "Podobieństwo oznacza, że odpowiadające sobie boki zachowują ten sam stosunek. W trójkącie ACD bokiem leżącym naprzeciw kąta A jest wysokość [[h]]. W trójkącie CBD bokiem leżącym naprzeciw równego kąta przy C jest rzut [[q]]. Drugą odpowiadającą sobie parą jest rzut [[p]] (naprzeciw drugiego kąta ostrego w ACD) do wysokości [[h]] (naprzeciw odpowiadającego kąta w CBD). Przyrównanie ich daje proporcję:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie proporcji na krzyż zamienia ją w:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie pierwiastka kwadratowego z obu stron daje [[h=\\sqrt{p\\times q}]]. Równanie [[h^2=p\\times q]] ma dwa pierwiastki algebraiczne, dodatni i ujemny, ale długość jest wielkością dodatnią, więc tylko dodatni pierwiastek opisuje wysokość.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Dwa mniejsze trójkąty prostokątne ACD i CBD z oznaczonymi odpowiadającymi sobie bokami, pokazujące [[\\frac{h}{p}=\\frac{q}{h}]]",
            "caption": "Trójkąty ACD i CBD są podobne, więc [[\\frac{h}{p}=\\frac{q}{h}]], a [[h]] do kwadratu równa się [[p]] razy [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Rozwiązane przykłady obliczania wysokości z rzutów",
          "blocks": [
            {
              "kind": "h3",
              "text": "Przykład 1: Proste liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Mając [[p=4\\text{ cm}]] i [[q=9\\text{ cm}]], podstaw do wzoru:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi [[6\\text{ cm}]], czyli liczbę całkowitą, ponieważ [[36]] jest pełnym kwadratem.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Równe rzuty",
            },
            {
              "kind": "p",
              "text": "Mając [[p=5\\text{ cm}]] i [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Gdy rzuty są równe, wysokość równa się każdemu rzutowi: jest to przypadek równoramiennego trójkąta prostokątnego, w którym wysokość stanowi dokładnie połowę przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Rzuty dziesiętne",
            },
            {
              "kind": "p",
              "text": "Mając [[p=3.6\\text{ m}]] i [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Ułamki dziesiętne niczego nie zmieniają: [[23.04]] jest pełnym kwadratem, więc wysokość to dokładnie [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Nierówne rzuty",
            },
            {
              "kind": "p",
              "text": "Mając [[p=2\\text{ cm}]] i [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi [[6\\text{ cm}]], a nie [[10\\text{ cm}]]. Uśrednianie daje średnią arytmetyczną, [[10]], ale wysokość to średnia geometryczna, która dla nierównych wejść wypada niżej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Niepełny kwadrat",
            },
            {
              "kind": "p",
              "text": "Mając [[p=5\\text{ cm}]] i [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[35]] nie jest pełnym kwadratem, więc dokładna odpowiedź to [[\\sqrt{35}\\text{ cm}]]. Do pracy praktycznej użyj przybliżenia [[5.916\\text{ cm}]], ale zachowaj postać dokładną, gdy odpowiedź zasila dalsze obliczenia.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Różne jednostki wejściowe",
            },
            {
              "kind": "p",
              "text": "Mając [[p=40\\text{ mm}]] i [[q=9\\text{ cm}]]. Jednostki się różnią, więc najpierw przelicz: [[40\\text{ mm}=4\\text{ cm}]]. Potem:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Przeliczenie najpierw to jedyny bezpieczny ruch: wstawienie [[40]] i [[9]] bezpośrednio daje [[\\sqrt{40\\times 9}=\\sqrt{360}]], czyli błędną i bezjednostkową liczbę.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak sprawdzić obliczenie wysokości",
          "blocks": [
            {
              "kind": "h3",
              "text": "Metoda 1: Kontrola średniej geometrycznej",
            },
            {
              "kind": "p",
              "text": "Podnieś wysokość do kwadratu i porównaj z iloczynem rzutów. Obie wartości muszą się zgadzać. Dla [[p=4]] i [[q=9]] przy [[h=6]]: [[6^2=36]] i [[4\\times 9=36]]. Zgodność potwierdza arytmetykę.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Zależności między przeciwprostokątną a przyprostokątnymi",
            },
            {
              "kind": "p",
              "text": "Odbuduj cały trójkąt i sprawdź krzyżowo drugim wzorem. Najpierw dodaj rzuty: [[c=4+9=13]]. Następnie odzyskaj przyprostokątne za pomocą zależności rzut-przyprostokątna: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] i [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Teraz sprawdź wzorem [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], co się zgadza. <a href=\"/right-triangle-side-calculator/\">Kalkulator boków</a> utrzymuje arytmetykę przyprostokątnych w porządku podczas kontroli.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Zależność pola trójkąta",
            },
            {
              "kind": "p",
              "text": "Ten sam trójkąt ma dwa wyrażenia na pole. Używając przyprostokątnych: Pole = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Używając przeciwprostokątnej i wysokości: Pole = [[(c\\times h)/2=(13\\times 6)/2=39]]. Oba wyrażenia są zgodne, co niezależnie potwierdza [[h=6]]. Narzędzie <a href=\"/right-triangle-area-from-altitude-calculator/\">pole z wysokości</a> opiera się na tej samej zależności.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Zależność między wysokością, przeciwprostokątną a przyprostokątnymi trójkąta",
          "blocks": [
            {
              "kind": "p",
              "text": "Pięć wzorów łączy sześć oznaczonych części. Tabela poniżej podsumowuje, co każdy z nich znajduje i czego potrzebuje.",
            },
            {
              "kind": "p",
              "text": "Cztery pierwsze wzory potrzebują co najmniej jednego rzutu. Pochodzą one z trójkątów podobnych, które tworzy wysokość, więc stosują się tylko wtedy, gdy wysokość jest poprowadzona z wierzchołka kąta prostego. Piąty wzór, [[h=ab/c]], nie potrzebuje w ogóle rzutów: pochodzi z przyrównania dwóch wyrażeń na pole i działa zawsze, gdy znane są przyprostokątne i przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "To jest praktyczna różnica między dwoma kalkulatorami wysokości na tej stronie. Gdy znasz rzuty, twierdzenie o wysokości daje [[h]] bezpośrednio w jednym kroku. Gdy znasz zamiast tego boki, <a href=\"/right-triangle-altitude-from-sides-calculator/\">wyznaczanie wysokości z boków</a> korzysta z drogi przez pole. Wybierz to narzędzie, które pasuje do Twoich danych.",
            },
            {
              "kind": "p",
              "text": "Jeszcze jedno użyteczne odczytanie [[a^2=p\\times c]]: każda przyprostokątna jest średnią geometryczną przeciwprostokątnej i sąsiadującego z nią rzutu, odzwierciedlając to, jak wysokość jest średnią geometryczną obu rzutów.",
            },
          ],
          "table": {
            "headers": [
              "Wzór",
              "Znajduje",
              "Potrzebuje",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "Przeciwprostokątną",
                "Oba rzuty",
              ],
              [
                "[[h^2=p\\times q]]",
                "Wysokość",
                "Oba rzuty",
              ],
              [
                "[[a^2=p\\times c]]",
                "Przyprostokątną obok rzutu [[p]]",
                "Rzut [[p]] i przeciwprostokątną",
              ],
              [
                "[[b^2=q\\times c]]",
                "Przyprostokątną obok rzutu [[q]]",
                "Rzut [[q]] i przeciwprostokątną",
              ],
              [
                "[[h=ab/c]]",
                "Wysokość",
                "Obie przyprostokątne i przeciwprostokątną",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Twierdzenie o średniej geometrycznej a wysokość trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Średnia geometryczna dwóch liczb dodatnich to pierwiastek kwadratowy z ich iloczynu. Dla [[p]] i [[q]] wynosi [[\\sqrt{p\\times q}]], co jest dokładnie wzorem na wysokość. Stwierdzenie, że wysokość jest średnią geometryczną rzutów, jest więc tylko przeformułowaniem twierdzenia innymi słowami.",
            },
            {
              "kind": "p",
              "text": "Średnia arytmetyczna to znana średnia: [[(p+q)/2]]. Dla [[p=4]] i [[q=9]] średnia geometryczna wynosi [[\\sqrt{36}=6]], a średnia arytmetyczna [[13/2=6.5]]. Wysokość równa się [[6]], a nie [[6.5]], ponieważ proporcja z trójkątów podobnych wymusza zależność multiplikatywną, a nie addytywną.",
            },
            {
              "kind": "p",
              "text": "Średnia geometryczna nigdy nie przewyższa średniej arytmetycznej dla dodatnich wejść, a równość zachodzi tylko gdy [[p=q]]. Dlatego wysokość jest największa względem przeciwprostokątnej, gdy rzuty są równe. Prostokąt [[4]] na [[9]] i kwadrat [[6]] na [[6]] mają to samo pole, [[36]], co jest tą samą ideą narysowaną jako kształty: wysokość jest bokiem kwadratu, którego pole równa się polu prostokąta.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Prostokąt [[4]] na [[9]] i kwadrat [[6]] na [[6]] o równych polach oraz oś liczbowa porównująca średnią geometryczną [[6]] ze średnią arytmetyczną [[6.5]]",
            "caption": "Dla [[p=4]] i [[q=9]] średnia geometryczna [[6]] (wysokość) leży poniżej średniej arytmetycznej [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Przypadki szczególne i ważne własności",
          "blocks": [
            {
              "kind": "h3",
              "text": "Równe rzuty",
            },
            {
              "kind": "p",
              "text": "Gdy [[p=q]], wysokość równa się tej wspólnej wartości: [[h=\\sqrt{p\\times p}=p]]. Spodek wysokości ląduje w środku przeciwprostokątnej, przyprostokątne są równe, a trójkąt jest równoramiennym trójkątem prostokątnym o kątach ostrych 45 stopni, dającym maksymalną wysokość przy ustalonej przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Bardzo nierówne rzuty",
            },
            {
              "kind": "p",
              "text": "Gdy [[p]] jest malutkie, a [[q]] ogromne, wysokość pozostaje skromna: [[p=1]] i [[q=100]] dają [[h=10]], daleko poniżej środka rzutów. Średnia geometryczna waży małe wejście mocniej niż zwykła średnia.",
            },
            {
              "kind": "h3",
              "text": "Stała przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Utrzymaj przeciwprostokątną [[c=p+q]] stałą i zmieniaj podział. Iloczyn [[p\\times q]], a zatem i wysokość, osiąga szczyt, gdy podział jest równy. Algebraicznie: [[h\\le\\frac{p+q}{2}]], przy czym równość zachodzi dokładnie gdy [[p=q]]. Mówiąc prosto: żadna wysokość nie może przekroczyć połowy swojej przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Rzuty zerowe",
            },
            {
              "kind": "p",
              "text": "Ustawienie [[p=0]] daje [[h=0]]: spodek wysokości pokrywa się z wierzchołkiem A, trójkąt zapada się w odcinek i nie pozostaje żaden prawdziwy trójkąt. Traktuj zerowe rzuty jako zdegenerowane, nie jako poprawne dane wejściowe kalkulatora.",
            },
            {
              "kind": "h3",
              "text": "Rzuty ujemne",
            },
            {
              "kind": "p",
              "text": "Rzut jest długością, a długości nie mogą być ujemne. Ujemne wejście nie ma znaczenia geometrycznego i nie daje poprawnej wysokości; błąd leży wcześniej, w sposobie zmierzenia odcinka.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dwa trójkąty prostokątne o tej samej przeciwprostokątnej, ale o różnych podziałach na rzuty, pokazujące różne wysokości",
            "caption": "Ta sama przeciwprostokątna, różne podziały: równe rzuty dają najwyższą wysokość.",
          },
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy wyznaczaniu wysokości z rzutów",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Dodawanie rzutów zamiast ich mnożenia. Proporcja z trójkątów podobnych wymaga iloczynu: przy [[p=4]] i [[q=9]] wynik [[\\sqrt{4+9}\\approx 3.606]] jest błędny, natomiast [[\\sqrt{4\\times 9}=6]] jest poprawny.",
                "Zapominanie o pierwiastku kwadratowym. Zatrzymanie się na [[h^2=36]] zostawia liczbę o charakterze pola tam, gdzie należy długość. Zawsze wyciągnij dodatni pierwiastek kwadratowy, aby dokończyć.",
                "Mylenie rzutów z przyprostokątnymi trójkąta. Przyprostokątne odchodzą od przeciwprostokątnej, podczas gdy [[p]] i [[q]] leżą płasko wzdłuż niej; tylko odcinki przeciwprostokątnej należą do twierdzenia o wysokości.",
                "Mieszanie jednostek bez przeliczania. Przy [[p=40\\text{ mm}]] i [[q=9\\text{ cm}]] najpierw przelicz ([[40\\text{ mm}=4\\text{ cm}]]), a potem oblicz [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Wprowadzanie ujemnych pomiarów. Ujemny rzut jest bez znaczenia i może dawać urojone wyniki. Przed obliczeniem upewnij się, że zarówno [[p]], jak i [[q]] są dodatnie.",
                "Przenoszenie [[h^2]] dalej jako [[h]] w dłuższych rozwiązaniach. Pilnuj oznaczeń: [[h^2=36]] to krok z kwadratem, [[h=6]] to wysokość.",
                "Zbyt wczesne zaokrąglanie. Zachowuj postacie dokładne, takie jak [[\\sqrt{35}]], tak długo jak to możliwe, i zaokrąglaj tylko końcową odpowiedź.",
                "Stosowanie wzoru do trójkąta nieprostokątnego. Proporcja [[\\frac{h}{p}=\\frac{q}{h}]] potrzebuje kąta prostego przy C; bez niego argument podobieństwa upada i wzór nie obowiązuje.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania twierdzenia o wysokości",
          "blocks": [
            {
              "kind": "p",
              "text": "Lekcje geometrii używają tego twierdzenia nieustannie. Zadania o wysokości sprawdzają, czy uczniowie potrafią dostrzec rzuty, wybrać właściwy wzór i zweryfikować wynik twierdzeniem Pitagorasa, a ćwiczenia w podręcznikach często podają rzuty jako zwykłe liczby na oznaczonym diagramie.",
            },
            {
              "kind": "p",
              "text": "W zadaniach z geometrii konstrukcyjnej twierdzenie dopełnia trójkąt prostokątny, gdy znane są tylko częściowe pomiary. Projektowanie trójkątnej kratownicy może najpierw ustalać odcinki przeciwprostokątnej, przy czym wysokość wyznacza wysokość szczytu, a dowody podobieństwa korzystają bezpośrednio z tej samej proporcji [[\\frac{h}{p}=\\frac{q}{h}]].",
            },
            {
              "kind": "p",
              "text": "Szkice geodezyjne i inżynierskie czasem modelują linię celowania jako wysokość trójkąta prostokątnego, a rzuty odczytuje się z linii bazowej. Dwie dowolne odległości na gruncie same w sobie nie wyznaczają wysokości; geometria trójkąta prostokątnego musi rzeczywiście zachodzić, zanim twierdzenie znajdzie zastosowanie.",
            },
            {
              "kind": "p",
              "text": "Rysunki architektoniczne szczytów dachowych czy dachów składanych korzystają z tych samych zależności, aby odzyskać brakujący wymiar, pod warunkiem że kąt prosty naprawdę tam jest.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do samodzielnego rozwiązania z odpowiedziami",
          "blocks": [
            {
              "kind": "h3",
              "text": "Zadanie 1: Poziom początkujący",
            },
            {
              "kind": "p",
              "text": "Rzuty trójkąta prostokątnego wynoszą [[p=25\\text{ cm}]] i [[q=16\\text{ cm}]]. Znajdź wysokość.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Początkujący-średniozaawansowany",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma rzuty [[p=12\\text{ m}]] i [[q=27\\text{ m}]]. Znajdź wysokość poprowadzoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Średniozaawansowany",
            },
            {
              "kind": "p",
              "text": "Spodek wysokości dzieli przeciwprostokątną na odcinki [[7\\text{ in}]] i [[28\\text{ in}]]. Ile wynosi wysokość?",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Ułamki dziesiętne",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma rzuty [[p=2.5\\text{ ft}]] i [[q=14.4\\text{ ft}]]. Oblicz wysokość.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Zastosowanie",
            },
            {
              "kind": "p",
              "text": "Trójkątna kratownica dachowa ma belkę ściągającą jako przeciwprostokątną. Spodek wysokości dzieli belkę ściągającą na odcinki [[3.2\\text{ m}]] i [[12.8\\text{ m}]]. Znajdź wysokość kratownicy w miejscu wysokości.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Jeden pierwiastek kwadratowy, pełne zrozumienie",
          "blocks": [
            {
              "kind": "p",
              "text": "Jeden pierwiastek kwadratowy oddaje całą ideę: wysokość trójkąta prostokątnego jest średnią geometryczną dwóch rzutów na jego przeciwprostokątną. Pomnóż [[p]] i [[q]], wyciągnij dodatni pierwiastek kwadratowy, zachowaj spójność jednostek i odpowiedź jest w ręku.",
            },
            {
              "kind": "p",
              "text": "Za tym krótkim obliczeniem kryje się czysty kawałek geometrii. Wysokość tworzy dwa trójkąty podobne, podobieństwo daje proporcję, a proporcja daje wzór. Gdy widzisz ten łańcuch, sprawdzanie odpowiedzi, unikanie błędów i rozpoznawanie rzutów w nowych zadaniach stają się rutyną.",
            },
          ],
        },
      },
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Jaki jest wzór na wysokość z rzutów?",
          "answer": "Wzór to [[h=\\sqrt{p\\times q}]], gdzie [[h]] to wysokość poprowadzona na przeciwprostokątną, a [[p]] i [[q]] to dwa rzuty. Oba rzuty muszą być dodatnimi długościami mierzonymi w tej samej jednostce. Pomnóż je, a następnie wyciągnij dodatni pierwiastek kwadratowy. Wynikiem jest wysokość w tej samej jednostce co dane wejściowe.",
        },
        {
          "question": "Czym są rzuty na przeciwprostokątną?",
          "answer": "Rzuty to dwa odcinki, na które spodek wysokości dzieli przeciwprostokątną. W trójkącie ABC z kątem prostym przy C i wysokością CD odcinek AD jest rzutem [[p]], a DB rzutem [[q]]. Razem tworzą całą przeciwprostokątną, więc [[p+q=c]]. Są to płaskie odcinki wzdłuż przeciwprostokątnej, a nie przyprostokątne trójkąta.",
        },
        {
          "question": "Dlaczego wysokość jest średnią geometryczną dwóch rzutów?",
          "answer": "Ponieważ wysokość tworzy dwa trójkąty podobne. W trójkątach ACD i CBD odpowiadające sobie boki dają proporcję [[\\frac{h}{p}=\\frac{q}{h}]]. Mnożenie na krzyż daje [[h^2=p\\times q]], więc [[h=\\sqrt{p\\times q}]]. Ponieważ średnia geometryczna dwóch liczb to pierwiastek kwadratowy z ich iloczynu, wysokość jest dokładnie średnią geometryczną [[p]] i [[q]].",
        },
        {
          "question": "Czy mogę znaleźć wysokość, nie znając przyprostokątnych trójkąta?",
          "answer": "Tak. Twierdzenie o wysokości potrzebuje tylko dwóch rzutów, więc przyprostokątne są zbędne jako dane wejściowe. Wpisz [[p]] i [[q]] do kalkulatora, a zwróci on [[h]] bezpośrednio. To najszybsza droga, gdy diagram lub treść zadania podaje odcinki przeciwprostokątnej. Jeśli znasz zamiast tego przyprostokątne, stosuje się inny wzór: [[h=ab/c]].",
        },
        {
          "question": "Czy dwa rzuty mogą mieć różne długości?",
          "answer": "Tak, i zwykle je mają. Rzuty to dowolne dwie dodatnie długości, równe lub nierówne, a wzór radzi sobie z oboma przypadkami. Przy [[p=2]] i [[q=18]] wysokość wynosi [[6]], leżąc między obiema wartościami. Równe rzuty to po prostu szczególny przypadek dający równoramienny trójkąt prostokątny.",
        },
        {
          "question": "Co się dzieje, gdy oba rzuty są równe?",
          "answer": "Gdy [[p=q]], wysokość równa się tej wspólnej wartości, ponieważ [[\\sqrt{p\\times p}=p]]. Spodek wysokości ląduje w środku przeciwprostokątnej, a trójkąt staje się równoramiennym trójkątem prostokątnym o dwóch równych przyprostokątnych i kątach ostrych [[45^\\circ]]. Przy ustalonej przeciwprostokątnej ten podział daje też najwyższą możliwą wysokość.",
        },
        {
          "question": "Czy wysokość może być dłuższa niż którykolwiek z rzutów?",
          "answer": "Może przekroczyć mniejszy rzut. Przy [[p=2]] i [[q=18]] wysokość wynosi [[6]], czyli więcej niż [[p=2]]. Średnia geometryczna zawsze leży między dwoma wejściami, więc wysokość wypada między [[p]] a [[q]]. Nigdy nie może przekroczyć większego rzutu ani połowy przeciwprostokątnej.",
        },
        {
          "question": "Co jeśli rzuty używają różnych jednostek?",
          "answer": "Przed obliczeniem przelicz jeden z nich tak, aby oba miały tę samą jednostkę. Na przykład zamień [[40\\text{ mm}]] na [[4\\text{ cm}]], gdy drugi rzut wynosi [[9\\text{ cm}]], a potem oblicz [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mieszanie jednostek bez przeliczania niszczy iloczyn. Kalkulator zakłada zgodne jednostki, więc zawsze najpierw je ujednolić.",
        },
        {
          "question": "Czy wysokość może być większa niż połowa przeciwprostokątnej?",
          "answer": "Nie. Dla dowolnych dodatnich [[p]] i [[q]] średnia geometryczna nigdy nie przewyższa średniej arytmetycznej, więc [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. Wysokość równa się dokładnie połowie przeciwprostokątnej tylko wtedy, gdy [[p=q]]. Każdy wynik kalkulatora większy od połowy przeciwprostokątnej sygnalizuje błąd danych wejściowych lub arytmetyki.",
        },
        {
          "question": "Jak sprawdzić obliczenie wysokości?",
          "answer": "Podnieś wysokość do kwadratu i upewnij się, że równa się [[p\\times q]]. Dla głębszej kontroli odbuduj trójkąt: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], a potem sprawdź [[h=ab/c]]. Możesz też porównać dwa wyrażenia na pole, [[(a\\times b)/2]] i [[(c\\times h)/2]], które muszą się zgadzać. Jeśli wszystkie trzy kontrole przechodzą, odpowiedź jest pewna.",
        },
        {
          "question": "Czy twierdzenie o wysokości wiąże się z twierdzeniem Pitagorasa?",
          "answer": "Opisują ten sam trójkąt prostokątny z różnych stron. Twierdzenie o wysokości wynika z podobieństwa, natomiast twierdzenie Pitagorasa wiąże trzy boki: [[a^2+b^2=c^2]]. Wzmacniają się nawzajem: przy [[p=4]] i [[q=9]] przyprostokątne [[\\sqrt{52}]] i [[\\sqrt{117}]] spełniają [[52+117=169=13^2]], potwierdzając trójkąt opisany przez twierdzenie o wysokości.",
        },
        {
          "question": "Czy mogę użyć tego wzoru dla trójkąta nieprostokątnego?",
          "answer": "Nie. Proporcja [[\\frac{h}{p}=\\frac{q}{h}]] zależy od trójkątów podobnych utworzonych przez wysokość opuszczoną z wierzchołka kąta prostego. Bez tego kąta prostego argument podobieństwa zawodzi i [[h^2=p\\times q]] nie obowiązuje. Dla ogólnych trójkątów używaj zamiast tego wzorów na wysokość opartych na polu lub trygonometrycznych, dopasowanych do podanych danych.",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Te narzędzia obsługują sąsiadujące obliczenia: wyznaczanie rzutów, wyznaczanie wysokości z długości boków oraz zamianę wysokości na pole. Każde z nich naturalnie łączy się z twierdzeniem o wysokości z tej strony.",
      "relatedItems": [
        "Kalkulator wysokości trójkąta prostokątnego",
        "Kalkulator wysokości trójkąta prostokątnego z boków",
        "Kalkulator rzutów trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego z wysokości",
        "Kalkulator boków trójkąta prostokątnego",
      ],
    },
};
