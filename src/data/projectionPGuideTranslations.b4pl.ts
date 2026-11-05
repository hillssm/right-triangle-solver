// projectionPGuideTranslations.bpl.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B4_PL = {
  "pl": {
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wzór to [[p = \\frac{a^2}{c}]], gdzie a to przyprostokątna związana z p, a c to cała przeciwprostokątna. Najpierw podnieś przyprostokątną a do kwadratu, a następnie podziel przez c. Na przykład [[a = 6]] cm i [[c = 10]] cm dają [[p = 3.6]] cm.",
          "question": "Jaki jest wzór na rzut p?",
        },
        {
          "answer": "Rzut p to odcinek przeciwprostokątnej sąsiadujący z wierzchołkiem A, powstały, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną w punkcie D. W trójkącie ABC [[p = AD]], czyli część przeciwprostokątnej związana z przyprostokątną a.",
          "question": "Co oznacza rzut p?",
        },
        {
          "answer": "Kwadrat wynika z podobieństwa trójkątów: trójkąt ACD jest podobny do trójkąta ABC, co daje [[\\frac{p}{a} = \\frac{a}{c}]], a przyprostokątna a występuje w obu stosunkach. Mnożenie na krzyż daje [[a^2 = c \\times p]], więc kwadrat jest wbudowany w geometrię.",
          "question": "Dlaczego przyprostokątna a jest podniesiona do kwadratu?",
        },
        {
          "answer": "Dzielenie wyodrębnia p. Twierdzenie o rzucie mówi, że [[a^2 = c \\times p]], gdzie p jest pomnożone przez c, więc podzielenie obu stron przez c pozostawia samo p. Dzielenie zamienia też długość podniesioną do kwadratu w zwykłą długość.",
          "question": "Dlaczego dzielimy przez przeciwprostokątną?",
        },
        {
          "answer": "Nie. Przyprostokątna a to bok AC, jeden z boków tworzących kąt prosty, natomiast rzut p to odcinek AD wzdłuż przeciwprostokątnej. W trójkącie 6-8-10 przyprostokątna a ma 6 cm, a rzut p tylko 3.6 cm.",
          "question": "Czy rzut p to to samo co przyprostokątna a?",
        },
        {
          "answer": "Nie. Rzut p to tylko część przeciwprostokątnej, więc musi być mniejszy od c. Gdyby p było równe c, q wynosiłoby zero, a trójkąt byłby zdegenerowany. Wynik większy od c zawsze oznacza błąd we wprowadzonych danych lub w oznaczeniach.",
          "question": "Czy rzut p może być większy od przeciwprostokątnej?",
        },
        {
          "answer": "Rzut p leży obok wierzchołka A i łączy się z przyprostokątną a, natomiast rzut q leży obok wierzchołka B i łączy się z przyprostokątną b. To dwa odcinki, na które wysokość dzieli przeciwprostokątną: [[p + q = c]].",
          "question": "Czym różni się rzut p od rzutu q?",
        },
        {
          "answer": "Nie. Przyprostokątna a łączy się tylko z rzutem p. Aby znaleźć q, potrzebujesz przyprostokątnej b, używając [[q = \\frac{b^2}{c}]], albo odejmij: [[q = c - p]], gdy p jest już znane. <a href=\"/right-triangle-projection-q-calculator/\">Kalkulator rzutu q</a> znajduje q na podstawie b i c.",
          "question": "Czy mogę obliczyć rzut q, używając przyprostokątnej a?",
        },
        {
          "answer": "Potrzebujesz też q lub c. Znajdź q ze wzoru [[q = c - p]], a następnie użyj [[h = \\sqrt{p \\times q}]]. Przy [[p = 3.6]] cm i [[c = 10]] cm [[q = 6.4]] cm, a [[h = 4.8]] cm. Sam rzut p nie wystarcza do wyznaczenia wysokości.",
          "question": "Jak znaleźć wysokość, gdy znany jest rzut p?",
        },
        {
          "answer": "Przelicz [[p = \\frac{a^2}{c}]], a następnie sprawdź [[p + q = c]] po znalezieniu q przez odejmowanie i potwierdź, że p jest dodatnie i mniejsze od c. Możesz też znaleźć przyprostokątną b na podstawie q i sprawdzić [[a^2 + b^2 = c^2]].",
          "question": "Jak mogę sprawdzić rzut p?",
        },
        {
          "answer": "Wysokość pada na środek przeciwprostokątnej, a dwie przyprostokątne są równe, więc trójkąt jest równoramienny. Przy [[c = 10]] cm i [[p = q = 5]] cm obie przyprostokątne są równe [[\\sqrt{50}]] cm, czyli około 7.071 cm.",
          "question": "Co się dzieje, gdy p i q są równe?",
        },
        {
          "answer": "Przeciwprostokątna leży naprzeciw kąta prostego, największego kąta w trójkącie, a bok leżący naprzeciw największego kąta jest zawsze najdłuższym bokiem. Gdyby a było równe c lub dłuższe od c, taki trójkąt prostokątny nie mógłby istnieć.",
          "question": "Dlaczego przeciwprostokątna musi być dłuższa od przyprostokątnej a?",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego, więc wybierz narzędzie odpowiadające pomiarom, które już znasz.",
      "relatedItems": [
        "Kalkulator rzutów trójkąta prostokątnego",
        "Kalkulator rzutu Q trójkąta prostokątnego",
        "Kalkulator przyprostokątnej A z rzutu trójkąta prostokątnego",
        "Kalkulator przyprostokątnej B z rzutu trójkąta prostokątnego",
        "Kalkulator przeciwprostokątnej z rzutów trójkąta prostokątnego",
        "Kalkulator wysokości z rzutów trójkąta prostokątnego",
        "Kalkulator boków trójkąta prostokątnego",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to zadania domowe z geometrii i praca w klasie, gdzie zadania o rzutach sprawdzają, czy uczniowie potrafią oznaczyć diagram i zastosować [[p = \\frac{a^2}{c}]] zamiast sięgać z przyzwyczajenia po twierdzenie Pitagorasa. Ćwiczenia z trójkątów podobnych używają tego samego układu, ponieważ sam dowód jest ćwiczeniem w dopasowywaniu odpowiadających sobie boków.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny wykorzystuje twierdzenie, gdy trójkąt prostokątny trzeba odtworzyć na podstawie częściowych pomiarów: jeśli rysunek podaje przeciwprostokątną i spodek wysokości, brakujący rzut wynika bez ponownego mierzenia kształtu. Nauczyciele używają też tego układu jako lekcji łączącej dodawanie odcinków z podobieństwem.",
            },
            {
              "kind": "p",
              "text": "Jeden warunek ogranicza każde zastosowanie: wymagana geometria trójkąta prostokątnego musi faktycznie istnieć. Twierdzenie opisuje dokładne zależności geometryczne, a nie przybliżone pomiary terenowe, więc nigdy nie zastępuje starannego pomiaru geodezyjnego ani profesjonalnego pomiaru inżynierskiego.",
            },
          ],
          "h2": "Praktyczne zastosowania obliczeń rzutu trójkąta prostokątnego",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ma dwa pola wejściowe. Pierwsze przyjmuje przyprostokątną a, prostopadły bok związany z rzutem p. Drugie przyjmuje przeciwprostokątną c, cały bok leżący naprzeciw kąta prostego. Obie długości muszą używać tej samej jednostki, więc najpierw przelicz, jeśli jeden pomiar jest w centymetrach, a drugi w metrach.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna musi być dłuższa od przyprostokątnej a, ponieważ przyprostokątna to jeden bok kąta prostego, natomiast przeciwprostokątna obejmuje cały trójkąt. Jeśli twoja wartość a jest większa od c, prawdopodobnie wprowadziłeś rzut, wysokość albo niewłaściwy bok.",
            },
            {
              "kind": "p",
              "text": "Kliknij Oblicz rzut p, aby zobaczyć wynik, i użyj przycisku Reset, aby wyczyścić oba pola przed nowym zadaniem. Wynik to długość w jednostce, którą wprowadziłeś, więc przyprostokątna 6 cm i przeciwprostokątna 10 cm dają 3.6 cm. Wynik to długość odcinka wzdłuż przeciwprostokątnej.",
            },
          ],
          "h2": "Oblicz rzut P trójkąta prostokątnego",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny diagram przedstawia trójkąt ABC z kątem prostym w C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z C prostopadle do AB i styka się z nią w punkcie D.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na dwie części: odcinek AD to rzut p, a odcinek DB to rzut q. Przyprostokątna a i rzut p są wyróżnione, ponieważ to właśnie ta para jest tematem tej strony. Prześledź oznaczenia w tej kolejności: zacznij w A, idź wzdłuż przyprostokątnej a do C, potem wzdłuż przyprostokątnej b do B, a następnie wróć wzdłuż przeciwprostokątnej z B do A, zatrzymując się w D, aby zobaczyć podział na p i q.",
            },
            {
              "kind": "p",
              "text": "Powiązanie a z p staje się widoczne w małym trójkącie ACD, w którym przyprostokątna a jest przeciwprostokątną, a p bokiem leżącym wzdłuż dużej przeciwprostokątnej. Ponieważ trójkąt ACD jest podobny do trójkąta ABC, stosunek p do a w małym trójkącie równa się stosunkowi a do c w dużym.",
            },
          ],
          "h2": "Diagram rzutu P trójkąta prostokątnego: objaśnienie",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym w C, wysokością CD na przeciwprostokątną AB, wyróżnionymi przyprostokątną a i rzutem p, z oznaczonymi przyprostokątnymi a i b, przeciwprostokątną c, rzutami p i q oraz wysokością h",
            "caption": "Wysokość CD dzieli przeciwprostokątną AB na rzut p (AD) i rzut q (DB), przy czym przyprostokątna a (AC) jest wyróżniona.",
            "src": "projection-p-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy przykład podaje dane wartości, podstawienie i końcową odpowiedź, a każdy przykład zachowuje spójne jednostki od początku do końca.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 6]] cm i [[c = 10]] cm. Wzór daje [[p = \\frac{6^2}{10} = \\frac{36}{10}]], więc [[p = 3.6]] cm. Podniesiona do kwadratu przyprostokątna 36 to wartość pośrednia, a dzielenie przez przeciwprostokątną zamienia ją z powrotem w długość. Druga przyprostokątna tego trójkąta ma 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Dzielenie dające wynik całkowity",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 8]] cm i [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Podniesiona do kwadratu przyprostokątna dzieli się bez reszty, więc odpowiedź jest dokładna. Drugi rzut wynosi tutaj 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Wynik dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 7]] cm i [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Wynik dziesiętny jest normalny: rzut nie musi być liczbą całkowitą, nawet gdy oba dane wejściowe są całkowite. Drugi rzut wynosi 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Większe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 12]] m i [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Większe liczby niczego nie zmieniają w metodzie: podnieś do kwadratu, a potem podziel. Drugi rzut wynosi 12.8 m, co łączy się z przyprostokątną 16 m.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Małe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 30]] mm i [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Małe pomiary działają tak samo, a zachowanie jednostki w milimetrach przez całe rozwiązanie pozwala uniknąć przeliczania. Drugi rzut wynosi 32 mm, co łączy się z przyprostokątną 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = \\frac{3}{4}]] ft i [[c = \\frac{3}{2}]] ft. Najpierw podnieś przyprostokątną do kwadratu: [[a^2 = \\frac{9}{16}]] stopy kwadratowej. Następnie [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dzielenie przez ułamek oznacza mnożenie przez jego odwrotność, a to właśnie ten krok uczniowie najczęściej pomijają przy pomiarach ułamkowych.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 60]] cm i [[c = 1]] m. Najpierw przelicz: 1 m równa się 100 cm. Następnie [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Użycie 1 zamiast 100 dałoby 3600 cm, rzut znacznie dłuższy od przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Większe wartości dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 4.5]] m i [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Dane dziesiętne wymagają takiej samej staranności jak liczby całkowite: podnieś do kwadratu pełną liczbę dziesiętną, a potem podziel. Drugi rzut wynosi 4.8 m, co łączy się z przyprostokątną 6 m.",
            },
          ],
          "h2": "Rozwiązane przykłady obliczania rzutu P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie mówi, że kwadrat przyprostokątnej a równa się przeciwprostokątnej pomnożonej przez jej rzut:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Podzielenie obu stron przez c wyodrębnia p i daje wzór roboczy dla tej strony:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Obliczenie przebiega w dwóch etapach. Etap 1 podnosi przyprostokątną a do kwadratu, mnożąc ją przez samą siebie. Etap 2 dzieli tę długość podniesioną do kwadratu przez całą przeciwprostokątną c, a wynik jest zwykłą długością, a nie długością podniesioną do kwadratu.",
            },
            {
              "kind": "p",
              "text": "Jednostki wymagają uwagi na obu etapach. Jeśli a i c są podane w centymetrach, to [[a^2]] jest w centymetrach kwadratowych, a dzielenie przez centymetry zwraca centymetry. Mieszanie jednostek, na przykład metry dla a i centymetry dla c, daje bezsensowny iloraz, więc przed obliczeniem przelicz wszystko na jedną jednostkę.",
            },
            {
              "kind": "p",
              "text": "Przy [[a = 6]] cm i [[c = 10]] cm etap 1 daje [[6^2 = 36]], a etap 2 daje [[p = \\frac{36}{10} = 3.6]] cm. Liczba 36 sama w sobie nie odpowiada na żadne pytanie: dopiero po dzieleniu staje się długością rzutu.",
            },
          ],
          "h2": "Wzór na rzut P trójkąta prostokątnego",
          "image": {
            "alt": "Trójkąt prostokątny ABC z wysokością CD, pokazujący, że rzut p równa się kwadratowi przyprostokątnej a podzielonemu przez przeciwprostokątną c",
            "caption": "Wzór na rzut: p równa się a do kwadratu podzielonemu przez c, przy czym spodek wysokości D dzieli przeciwprostokątną.",
            "src": "projection-p-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedenaście krótkich kroków prowadzi od oznaczonego diagramu do sprawdzonej odpowiedzi.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zidentyfikuj trójkąt prostokątny w swoim zadaniu i potwierdź, że ma kąt prosty.",
                "Znajdź wierzchołek kąta prostego oraz wysokość poprowadzoną z niego na przeciwprostokątną.",
                "Zidentyfikuj prostopadłą przyprostokątną związaną z rzutem p, czyli przyprostokątną stykającą się z wierzchołkiem A.",
                "Zidentyfikuj całą przeciwprostokątną c, bok leżący naprzeciw kąta prostego.",
                "Potwierdź, że c jest większe od a. Jeśli nie jest, oznacz diagram od nowa przed kontynuowaniem.",
                "Wybierz zgodne jednostki i przelicz, jeśli pomiary używają różnych jednostek.",
                "Wprowadź przyprostokątną a w pole Przyprostokątna a.",
                "Wprowadź przeciwprostokątną c w pole Przeciwprostokątna c.",
                "Kliknij Oblicz rzut p i odczytaj wynik.",
                "Sprawdź wynik: p musi być dodatnie i mniejsze od c.",
                "Użyj przycisku Reset, gdy rozpoczynasz nowe obliczenie.",
              ],
            },
            {
              "kind": "p",
              "text": "Wprowadzenie przyprostokątnej b zamiast przyprostokątnej a daje inny rzut. Przyprostokątna b łączy się z q, więc kalkulator zwróciłby odcinek obok wierzchołka B, a nie ten obok A. Sprawdzenie oznaczeń w kroku 3 ma największe znaczenie.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora rzutu P trójkąta prostokątnego",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten kalkulator znajduje rzut p trójkąta prostokątnego, gdy znasz przyprostokątną a i całą przeciwprostokątną c. Rzut p to odcinek przeciwprostokątnej, który leży obok przyprostokątnej a i powstaje, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną. Wzór to [[p = \\frac{a^2}{c}]], gdzie a to prostopadła przyprostokątna, a c to pełna przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Na przykład przy [[a = 6]] cm i [[c = 10]] cm obliczenie wygląda tak: [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Wartość 3.6 cm to część przeciwprostokątnej związana z przyprostokątną a, a nie sama przyprostokątna ani cała przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Kalkulator znajduje się na górze tej strony, a pod nim wzór, oznaczony diagram, dowód, rozwiązane przykłady oraz kontrole, które możesz zastosować do każdej odpowiedzi.",
            },
          ],
          "h2": "Kalkulator rzutu P trójkąta prostokątnego",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma dwa prostopadłe boki, zwane przyprostokątnymi, oraz jeden najdłuższy bok, zwany przeciwprostokątną. Dwie przyprostokątne spotykają się w kącie prostym, a przeciwprostokątna leży naprzeciw tego kąta. Tutaj trójkąt to ABC z kątem prostym w C: przyprostokątna a to AC, przyprostokątna b to BC, a przeciwprostokątna c to AB.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna a to jeden z dwóch boków tworzących kąt prosty, więc jest prawdziwym bokiem trójkąta, a nie odcinkiem narysowanym wewnątrz niego. Rzut p leży płasko wzdłuż przeciwprostokątnej, natomiast przyprostokątna a biegnie od wierzchołka A do wierzchołka kąta prostego C.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest zawsze najdłuższym bokiem w niezdegenerowanym trójkącie prostokątnym, ponieważ leży naprzeciw największego kąta, kąta prostego. Dlatego wzór wymaga [[0 < a < c]] i dlatego kalkulator oczekuje przeciwprostokątnej dłuższej od przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Położenie przyprostokątnej a decyduje, który odcinek nazywa się p: przyprostokątna a styka się z wierzchołkiem A, więc odcinek obok A to p. Zawsze sprawdzaj oznaczenia na własnym diagramie, zanim wybierzesz, którą przyprostokątną wprowadzić.",
            },
          ],
          "h2": "Przyprostokątna A i przeciwprostokątna: podstawy",
          "table": {
            "headers": [
              "Symbol",
              "Znaczenie",
            ],
            "rows": [
              [
                "a",
                "Prostopadła przyprostokątna związana z p",
              ],
              [
                "b",
                "Druga prostopadła przyprostokątna",
              ],
              [
                "c",
                "Cała przeciwprostokątna",
              ],
              [
                "p",
                "Rzut związany z a",
              ],
              [
                "q",
                "Rzut związany z b",
              ],
              [
                "h",
                "Wysokość na przeciwprostokątną",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Po każdym błędzie poniżej podano jego poprawkę. Większość z nich wynika z oznaczeń, a nie z arytmetyki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapomnienie o podniesieniu przyprostokątnej a do kwadratu: dzielenie a przez c zamiast a do kwadratu przez c daje 0.6 cm zamiast 3.6 cm.",
                "Dzielenie c przez a do kwadratu zamiast a do kwadratu przez c: iloraz musi być [[a^2/c]], a nie [[c/a^2]]. Przy a = 6 i c = 10 błędna kolejność daje około 0.278, co nie ma prawidłowej jednostki.",
                "Użycie przyprostokątnej b zamiast przyprostokątnej a: wprowadzenie b zwraca q. Przy b = 8 i c = 10 wynik 6.4 cm to q, a nie p.",
                "Pomylenie rzutu p z rzutem q: p leży obok wierzchołka A, a q obok wierzchołka B. Oznacz oba odcinki przed obliczeniem.",
                "Traktowanie p jako rzeczywistej prostopadłej przyprostokątnej: p to odcinek przeciwprostokątnej, a nie bok AC. W trójkącie 6-8-10 przyprostokątna a ma 6 cm, natomiast p tylko 3.6 cm.",
                "Wprowadzenie wartości a większej lub równej c: taki trójkąt nie istnieje, ponieważ przeciwprostokątna jest najdłuższym bokiem.",
                "Mieszanie jednostek pomiaru: najpierw przelicz, jak w przykładzie 7, gdzie 1 m stało się 100 cm.",
                "Zapomnienie, że całą przeciwprostokątną jest c: użycie rzutu lub przyprostokątnej jako mianownika zniekształca wynik.",
                "Zaokrąglanie obliczeń pośrednich zbyt wcześnie: zaokrąglenie przyprostokątnej podniesionej do kwadratu przed dzieleniem przesuwa odpowiedź.",
                "Pomylenie długości podniesionych do kwadratu ze zwykłymi długościami: 36 w przykładzie 6-8-10 to długość podniesiona do kwadratu, natomiast 3.6 cm to rzut.",
                "Stosowanie wzoru do trójkąta, który nie jest prostokątny: twierdzenie o rzucie wymaga wysokości poprowadzonej z kąta prostego.",
                "Zapomnienie, że p to tylko jeden odcinek przeciwprostokątnej: p plus q równa się c, więc wynik równy c lub większy oznacza błąd.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli odpowiedź wygląda na błędną, zatrzymaj się i oznacz diagram od nowa przed ponownym obliczeniem. Większość powyższych błędów znika, gdy p i q zostaną wyraźnie zaznaczone na przeciwprostokątnej.",
            },
          ],
          "h2": "Typowe błędy przy obliczaniu rzutu P",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze przed przeczytaniem odpowiedzi. Żadna z wartości nie powtarza rozwiązanych przykładów.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątną [[a = 9]] cm i przeciwprostokątną [[c = 15]] cm. Znajdź rzut p.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Wartości dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = 1.5]] m i [[c = 2.5]] m. Znajdź rzut p.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane: [[a = \\frac{5}{6}]] ft i [[c = \\frac{5}{3}]] ft. Znajdź p jako ułamek.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna mierzy [[a = 80]] cm, a przeciwprostokątna mierzy [[c = 2]] m. Znajdź p w centymetrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź q po obliczeniu p",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 25]] cm i przyprostokątną [[a = 15]] cm. Znajdź p, a potem q.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Wieloetapowe zadanie z rzutem p i wysokością h",
            },
            {
              "kind": "p",
              "text": "Dane: [[c = 25]] cm i [[a = 15]] cm. Znajdź p, potem q, a potem wysokość h.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[a^2 = \\frac{25}{36}]], więc [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: Przelicz 2 m na 200 cm, a następnie [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, a następnie [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[p = 9]] cm i [[q = 16]] cm, więc [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Zadania do ćwiczeń z odpowiedziami",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Niektóre zadania pytają zamiast tego o drugi rzut. Odpowiedni wzór to lustrzane odbicie wzoru na p, z przyprostokątną b w miejscu przyprostokątnej a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[b = 8]] cm i [[c = 10]] cm. Wtedy [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. To zgadza się z drugim rzutem trójkąta 6-8-10 z wcześniejszych przykładów, gdzie p wynosiło 3.6 cm, a dwa rzuty sumują się do 10 cm.",
            },
            {
              "kind": "p",
              "text": "Wzór używa b zamiast a, ponieważ każda przyprostokątna łączy się z rzutem obok własnego wierzchołka. Przyprostokątna b styka się z wierzchołkiem B, a q to odcinek obok B. Wprowadzenie a w tym wzorze zwróciłoby p, a nie q. Kalkulator na tej stronie przyjmuje tylko a i c, więc użyj <a href=\"/right-triangle-projection-q-calculator/\">kalkulatora rzutu q</a>, gdy musisz znaleźć q na podstawie b i c.",
            },
          ],
          "h2": "Jak obliczyć rzut Q z drugiej przyprostokątnej",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód opiera się na trójkątach podobnych. Narysowanie wysokości CD dzieli trójkąt ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, a oba są podobne do pierwotnego trójkąta. Jeden z ich stosunków boków daje twierdzenie o rzucie bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Skup się na trójkącie ACD i całym trójkącie ABC. Oba zawierają kąt przy A, a oba zawierają kąt prosty, więc ich trzecie kąty również muszą się zgadzać. Dopasowanie boków leżących w tych samych pozycjach daje proporcję:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz podstaw standardowe symbole: [[AD = p]], [[AC = a]] oraz [[AB = c]]. Proporcja przyjmuje postać:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie na krzyż usuwa ułamki. Licznik z lewej strony razy mianownik z prawej strony równa się licznikowi z prawej strony razy mianownikowi z lewej strony, więc [[p \\times c = a \\times a]], czyli:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Podzielenie obu stron przez c kończy dowód, dając [[p = \\frac{a^2}{c}]]. Ten sam argument zastosowany do drugiego małego trójkąta, CBD, daje [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Dlaczego wzór na rzut P działa?",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok mniejszych podobnych trójkątów ACD i CBD, pokazujących proporcję p do a równą a do c",
            "caption": "Dowód z trójkątów podobnych: p do a równa się a do c, więc mnożenie na krzyż daje a do kwadratu równe c razy p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem własności wynika bezpośrednio ze wzoru [[p = \\frac{a^2}{c}]]. Każda z nich służy też jako kontrola sensowności nowej odpowiedzi.",
            },
            {
              "items": [
                "Rzut p jest zawsze krótszy od całej przeciwprostokątnej w niezdegenerowanym trójkącie, ponieważ p to tylko część c.",
                "Zwiększenie przyprostokątnej a przy stałym c zwiększa p, ponieważ podniesiona do kwadratu przyprostokątna w liczniku rośnie.",
                "Zwiększenie c przy stałym a zmniejsza p, ponieważ mianownik rośnie.",
                "Jeśli a i c zostaną pomnożone przez ten sam dodatni współczynnik, p skaluje się o ten współczynnik.",
                "Jeśli p równa się q, obie przyprostokątne są równe, a trójkąt jest równoramiennym trójkątem prostokątnym.",
                "Rzut p jest zawsze dodatni w prawidłowym niezdegenerowanym trójkącie. Wartości zerowe lub ujemne nie opisują żadnego rzeczywistego trójkąta.",
                "Rzut p to długość, a nie pole. Podniesiona do kwadratu przyprostokątna to tylko krok pośredni, a dzielenie przez c przywraca zwykłe jednostki długości.",
                "Rzut p jest powiązany konkretnie z przyprostokątną a. Użycie go z przyprostokątną b odpowiada na zupełnie inne pytanie.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Gdy wysokość pada na środek przeciwprostokątnej, dwie przyprostokątne muszą się zgadzać, jak pokazuje poniższy diagram.",
            },
          ],
          "h2": "Ważne własności rzutu P",
          "image": {
            "alt": "Dwa trójkąty prostokątne obok siebie, jeden o równych rzutach p i q równych 5, a drugi o nierównych rzutach p równym 3.6 i q równym 6.4",
            "caption": "Równe rzuty (p = q = 5) dają równe przyprostokątne, natomiast nierówne rzuty (p = 3.6, q = 6.4) dają nierówne przyprostokątne.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie i twierdzenie Pitagorasa są dokładnie zgodne, a algebra pokazuje dlaczego. Zacznij od dwóch wzorów na rzuty, [[a^2 = c \\times p]] i [[b^2 = c \\times q]], i dodaj je:",
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
              "text": "Sprawdzenie liczbowe na trójkącie 6-8-10 to potwierdza: [[a^2 + b^2 = 36 + 64 = 100]] oraz [[c^2 = 10^2 = 100]]. Twierdzenie o rzucie rozdziela zależność Pitagorasa na jedną część na przyprostokątną, a dodanie części odtwarza ją w całości.",
            },
            {
              "kind": "p",
              "text": "Ten podział sprawia, że wzory na rzuty są przydatne: samo twierdzenie Pitagorasa nie pozwala znaleźć rzutu na podstawie przyprostokątnej i przeciwprostokątnej, ponieważ mówi o przyprostokątnych razem.",
            },
          ],
          "h2": "Związek między rzutem P a twierdzeniem Pitagorasa",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzut p łączy się też z wysokością poprzez drugi związek średniej geometrycznej. Wysokość h jest średnią geometryczną dwóch rzutów:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[q = c - p]], wysokość można też zapisać, używając tylko p i c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[p = 3.6]] cm i [[c = 10]] cm. Najpierw znajdź q: [[q = 10 - 3.6 = 6.4]] cm. Następnie [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Wysokość jest krótsza od każdej z przyprostokątnych, jak musi być.",
            },
            {
              "kind": "p",
              "text": "Sam rzut p nie wyznacza wysokości: dwa różne trójkąty mogą mieć to samo p przy różnych przeciwprostokątnych. Zawsze potrzebna jest też cała przeciwprostokątna albo drugi rzut. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkulator wysokości z rzutów</a> wykonuje to obliczenie, gdy znane są oba rzuty.",
            },
          ],
          "h2": "Związek między rzutem P a wysokością",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór na rzut można przekształcić tak, aby znaleźć przyprostokątną a zamiast p. Wychodząc od [[a^2 = c \\times p]], wyciągnij dodatni pierwiastek kwadratowy z obu stron:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Sprawdź to na znanych liczbach: [[a = 6]] cm, [[c = 10]] cm i [[p = 3.6]] cm. Iloczyn pod pierwiastkiem to [[c \\times p = 10 \\times 3.6 = 36]], a [[\\sqrt{36} = 6]] cm, czyli przyprostokątna, od której zaczęliśmy.",
            },
            {
              "kind": "p",
              "text": "To powiązanie to związek średniej geometrycznej: przyprostokątna a jest średnią geometryczną przeciwprostokątnej i jej rzutu. Dlatego przyprostokątna występuje we wzorze w kwadracie, a pierwiastek kwadratowy pojawia się przy rozwiązywaniu dla przyprostokątnej. W zadaniach, które zaczynają się od p i c, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator przyprostokątnej a z rzutu</a> stosuje ten przekształcony wzór bezpośrednio.",
            },
          ],
          "h2": "Związek między rzutem P a przyprostokątną A",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa rzuty to dwie części jednego prostego boku, więc ich suma daje całą przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Przekształcenie daje [[q = c - p]]. Przy [[c = 10]] cm i [[p = 3.6]] cm odejmowanie wygląda tak: [[q = 10 - 3.6 = 6.4]] cm. To samo odejmowanie działa w drugą stronę: [[p = c - q]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkulator przeciwprostokątnej z rzutów</a> odtwarza c na podstawie p i q, gdy sama przeciwprostokątna jest nieznana.",
            },
            {
              "kind": "p",
              "text": "Porównanie p i q mówi coś o kształcie trójkąta. Gdy p równa się q, wysokość pada na środek przeciwprostokątnej, a dwie przyprostokątne są równe, więc trójkąt jest równoramienny. Gdy p jest większe od q, przyprostokątna a jest dłuższa od przyprostokątnej b, a gdy q jest większe, przyprostokątna b jest dłuższa. Dłuższy rzut zawsze należy do dłuższej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "W trójkącie 6-8-10 q wynosi 6.4 cm, a p 3.6 cm, więc q jest większe, a przyprostokątna b o długości 8 cm jest rzeczywiście dłuższa od przyprostokątnej a o długości 6 cm.",
            },
          ],
          "h2": "Związek między rzutem P a rzutem Q",
          "image": {
            "alt": "Trójkąt prostokątny porównujący rzut p sparowany z przyprostokątną a z rzutem q sparowanym z przyprostokątną b, przy c równym 10, p równym 3.6 i q równym 6.4",
            "caption": "p używa a (36 podzielone przez 10 = 3.6), a q używa b (64 podzielone przez 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj [[a = 6]] cm i [[c = 10]] cm. Cztery kroki poniżej pokazują pełne rozwiązanie, bez pomijania niczego.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: [[p = \\frac{a^2}{c}]].",
                "Podstaw wartości: [[p = \\frac{6^2}{10}]].",
                "Podnieś przyprostokątną do kwadratu: [[p = \\frac{36}{10}]].",
                "Podziel: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3.6 cm to odcinek przeciwprostokątnej obok przyprostokątnej a, a nie bok prostopadły ani pole. Krótkie sprawdzenie zamyka pętlę: [[a^2 = 6^2 = 36]] oraz [[c \\times p = 10 \\times 3.6 = 36]], więc obie strony twierdzenia są zgodne.",
            },
            {
              "kind": "p",
              "text": "Dla porównania drugi rzut to [[q = 10 - 3.6 = 6.4]] cm, przyprostokątna b to [[b = \\sqrt{10 \\times 6.4} = 8]] cm, a wysokość to [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, co potwierdza znany trójkąt prostokątny 6-8-10.",
            },
          ],
          "h2": "Przykład krok po kroku: znajdowanie rzutu P",
          "image": {
            "alt": "Trójkąt prostokątny o przyprostokątnej a 6 cm i przeciwprostokątnej 10 cm, rozwiązany tak, że rzut p wynosi 3.6 cm",
            "caption": "Rozwiązany przykład: a = 6 cm i c = 10 cm dają p = 36 podzielone przez 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery niezależne kontrole wykrywają niemal każdy błąd. Przy każdej odpowiedzi zastosuj co najmniej jedną, a wszystkie cztery, gdy zadanie ma znaczenie. W poniższym przykładzie przez cały czas używane są [[a = 6]] cm, [[c = 10]] cm i [[p = 3.6]] cm.",
            },
            {
              "kind": "h3",
              "text": "Metoda 1: Kontrola twierdzenia o rzucie",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[p = \\frac{a^2}{c}]] bezpośrednio. Tutaj [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, co zgadza się z odpowiedzią. Jeśli ponowne obliczenie różni się, coś poszło nie tak przy podnoszeniu do kwadratu lub przy dzieleniu.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Dodawanie odcinków",
            },
            {
              "kind": "p",
              "text": "Znajdź q przez odejmowanie: [[q = 10 - 3.6 = 6.4]] cm. Następnie sprawdź [[p + q = 3.6 + 6.4 = 10]] cm, co równa się c. Suma, która nie daje c, wskazuje na błąd w odejmowaniu.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Kontrola twierdzenia Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Oblicz przyprostokątną b na podstawie q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Następnie sprawdź [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Ta kontrola sprawdza cały trójkąt, więc wykrywa błędy w oznaczeniach, których pierwsza kontrola może nie wychwycić. <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kalkulator przyprostokątnej b z rzutu</a> wykonuje krok z b bezpośrednio.",
            },
            {
              "kind": "h3",
              "text": "Metoda 4: Geometryczna sensowność",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że p jest dodatnie, mniejsze od c, podane w prawidłowej jednostce i że jest odcinkiem przeciwprostokątnej, a nie bokiem prostopadłym. Tutaj 3.6 cm jest dodatnie, mniejsze od 10 cm, podane w centymetrach i znacznie krótsze od przyprostokątnej a o długości 6 cm.",
            },
          ],
          "h2": "Jak sprawdzić obliczenie rzutu P",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Narysuj wysokość z wierzchołka kąta prostego C prostopadle do przeciwprostokątnej AB. Przecina ona przeciwprostokątną w punkcie zwanym spodkiem wysokości, oznaczonym D, i dzieli ją na dwa sąsiadujące odcinki: AD to rzut p, a DB to rzut q.",
            },
            {
              "kind": "p",
              "text": "Rzut p należy do przyprostokątnej a, ponieważ leży obok wierzchołka A, tego samego wierzchołka, w którym zaczyna się przyprostokątna a. W małym trójkącie ACD przyprostokątna a jest przeciwprostokątną, a p jednym z jej boków, co stanowi geometryczne powiązanie, dzięki któremu działa twierdzenie o rzucie. Rzut q, rozumując tak samo, należy do przyprostokątnej b, która styka się z wierzchołkiem B.",
            },
            {
              "kind": "p",
              "text": "Rzuty to długości wzdłuż przeciwprostokątnej, mierzone w tej samej jednostce co pozostałe boki. Nie są prostopadłe do niczego ani nie są bokami pierwotnego trójkąta. <a href=\"/right-triangle-projection-calculator/\">Kalkulator rzutów trójkąta prostokątnego</a> znajduje oba rzuty, gdy znane są przyprostokątne i przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Ponieważ p i q to dwie części jednego prostego boku, ich suma daje całą przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Przy [[c = 10]] cm i [[p = 3.6]] cm drugi rzut wynosi [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Rzut p to nie to samo co przyprostokątna a. Przyprostokątna a to bok AC, jeden z boków tworzących kąt prosty, natomiast p to odcinek AD wzdłuż przeciwprostokątnej. W trójkącie 6-8-10 przyprostokątna a ma 6 cm, a rzut p tylko 3.6 cm.",
            },
          ],
          "h2": "Czym jest rzut P w trójkącie prostokątnym?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kwadrat występuje tam, ponieważ twierdzenie o rzucie jest stwierdzeniem o przyprostokątnej podniesionej do kwadratu: mówi ono, że kwadrat przyprostokątnej a równa się iloczynowi c i p, [[a^2 = c \\times p]], a wzór na p otrzymuje się, dzieląc obie strony przez c.",
            },
            {
              "kind": "p",
              "text": "Powód sięga podobieństwa trójkątów. W trójkącie ACD przyprostokątna a pełni rolę przeciwprostokątnej, natomiast p jest jednym z jej boków. Porównanie małego trójkąta z całym trójkątem daje proporcję [[\\frac{p}{a} = \\frac{a}{c}]], a przyprostokątna a występuje dwukrotnie, raz w każdym stosunku. Mnożenie na krzyż stawia a po obu stronach, co jest dokładnie powodem, dla którego pojawia się kwadrat.",
            },
            {
              "kind": "p",
              "text": "Związek średniej geometrycznej mówi to samo innymi słowami: przyprostokątna a jest średnią geometryczną przeciwprostokątnej c i jej rzutu p, co oznacza [[a = \\sqrt{c \\times p}]]. Podniesienie obu stron do kwadratu daje [[a^2 = c \\times p]], a dzielenie przez c wyodrębnia p.",
            },
            {
              "kind": "p",
              "text": "Dzielenie to krok, który wyodrębnia p. Mnożenie w twierdzeniu wiąże p z c, a dzielenie przez c to wiązanie usuwa. Bez kwadratu wzór mieszałby długość z polem, a jednostki nie zgadzałyby się.",
            },
          ],
          "h2": "Dlaczego przyprostokątna A jest podniesiona do kwadratu we wzorze na rzut?",
        },
      },
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-applications": "Praktyczne zastosowania obliczeń rzutu trójkąta prostokątnego",
        "sec-calculate": "Oblicz rzut P trójkąta prostokątnego",
        "sec-diagram": "Diagram rzutu P trójkąta prostokątnego: objaśnienie",
        "sec-examples": "Rozwiązane przykłady obliczania rzutu P",
        "sec-faq": "Często zadawane pytania",
        "sec-formula": "Wzór na rzut P trójkąta prostokątnego",
        "sec-how-to-use": "Jak korzystać z kalkulatora rzutu P trójkąta prostokątnego",
        "sec-intro": "Kalkulator rzutu P trójkąta prostokątnego",
        "sec-leg-a-hypotenuse": "Przyprostokątna A i przeciwprostokątna: podstawy",
        "sec-mistakes": "Typowe błędy przy obliczaniu rzutu P",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-projection-q": "Jak obliczyć rzut Q z drugiej przyprostokątnej",
        "sec-proof": "Dlaczego wzór na rzut P działa?",
        "sec-properties": "Ważne własności rzutu P",
        "sec-pythagoras": "Związek między rzutem P a twierdzeniem Pitagorasa",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-relationship-altitude": "Związek między rzutem P a wysokością",
        "sec-relationship-leg-a": "Związek między rzutem P a przyprostokątną A",
        "sec-relationship-pq": "Związek między rzutem P a rzutem Q",
        "sec-step-example": "Przykład krok po kroku: znajdowanie rzutu P",
        "sec-verify": "Jak sprawdzić obliczenie rzutu P",
        "sec-what-projection-p": "Czym jest rzut P w trójkącie prostokątnym?",
        "sec-why-squared": "Dlaczego przyprostokątna A jest podniesiona do kwadratu we wzorze na rzut?",
      },
    },
};
