// projectionQGuideTranslations.bpl.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B4_PL = {
  "pl": {
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wzór to [[q = \\frac{b^2}{c}]], gdzie b jest przyprostokątną związaną z q, a c jest całą przeciwprostokątną. Najpierw podnieś przyprostokątną b do kwadratu, a potem podziel wynik przez c. Na przykład dla [[b = 8]] cm i [[c = 10]] cm otrzymujemy [[q = 6.4]] cm.",
          "question": "Jaki jest wzór na rzut q?",
        },
        {
          "answer": "Rzut q to odcinek przeciwprostokątnej przyległy do wierzchołka B, powstały, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną w punkcie D. W trójkącie ABC [[q = DB]], czyli część przeciwprostokątnej związana z przyprostokątną b.",
          "question": "Co oznacza rzut q?",
        },
        {
          "answer": "Kwadrat wynika z trójkątów podobnych: trójkąt CBD jest podobny do trójkąta ABC, co daje [[\\frac{q}{b} = \\frac{b}{c}]], a przyprostokątna b występuje w obu stosunkach. Mnożenie na krzyż daje [[b^2 = c \\times q]], więc kwadrat jest wpisany w geometrię.",
          "question": "Dlaczego przyprostokątna b jest podnoszona do kwadratu?",
        },
        {
          "answer": "Dzielenie wyodrębnia q. Twierdzenie o rzucie mówi, że [[b^2 = c \\times q]], gdzie q jest pomnożone przez c, więc podzielenie obu stron przez c pozostawia samo q. Dzielenie zamienia też długość podniesioną do kwadratu w zwykłą długość.",
          "question": "Dlaczego dzielimy przez przeciwprostokątną?",
        },
        {
          "answer": "Nie. Przyprostokątna b to bok BC, jeden z boków tworzących kąt prosty, natomiast rzut q to odcinek DB leżący wzdłuż przeciwprostokątnej. W trójkącie 6-8-10 przyprostokątna b ma 8 cm, a rzut q tylko 6.4 cm.",
          "question": "Czy rzut q to to samo co przyprostokątna b?",
        },
        {
          "answer": "Rzut q leży przy wierzchołku B i łączy się z przyprostokątną b, natomiast rzut p leży przy wierzchołku A i łączy się z przyprostokątną a. Są to dwa odcinki, na które wysokość dzieli przeciwprostokątną: [[p + q = c]].",
          "question": "Dlaczego q jest związane z przyprostokątną b, a nie z przyprostokątną a?",
        },
        {
          "answer": "Rzut p leży przy wierzchołku A i łączy się z przyprostokątną a, natomiast rzut q leży przy wierzchołku B i łączy się z przyprostokątną b. Są to dwa odcinki, na które wysokość dzieli przeciwprostokątną: [[p + q = c]]. W trójkącie 6-8-10 p ma 3.6 cm, a q 6.4 cm, więc q jest dłuższym odcinkiem.",
          "question": "Jaka jest różnica między rzutem p a rzutem q?",
        },
        {
          "answer": "Tak. Odejmij q od przeciwprostokątnej: [[p = c - q]]. Dla [[c = 10]] cm i [[q = 6.4]] cm otrzymujemy [[p = 3.6]] cm. Możesz też obliczyć p bezpośrednio z przyprostokątnej a, korzystając ze wzoru [[p = \\frac{a^2}{c}]].",
          "question": "Czy mogę obliczyć rzut p, jeśli znam już q?",
        },
        {
          "answer": "Nie. Rzut q to tylko część przeciwprostokątnej, więc musi być mniejszy od c. Gdyby q było równe c, p byłoby zerowe, a trójkąt byłby zdegenerowany. Wynik większy od c zawsze oznacza błąd we wprowadzonych danych lub w oznaczeniach.",
          "question": "Czy rzut q może być większy od przeciwprostokątnej?",
        },
        {
          "answer": "Potrzebujesz też p lub c. Oblicz p ze wzoru [[p = c - q]], a potem użyj [[h = \\sqrt{p \\times q}]]. Dla [[q = 6.4]] cm i [[c = 10]] cm otrzymujemy [[p = 3.6]] cm i [[h = 4.8]] cm. Sam rzut q nie pozwala wyznaczyć wysokości.",
          "question": "Jak znaleźć wysokość, gdy znane jest q?",
        },
        {
          "answer": "Przelicz [[q = \\frac{b^2}{c}]], potem sprawdź [[p + q = c]] po obliczeniu p przez odejmowanie i upewnij się, że q jest dodatnie i mniejsze od c. Możesz też wyznaczyć przyprostokątną a z p i sprawdzić [[a^2 + b^2 = c^2]].",
          "question": "Jak mogę sprawdzić obliczenie rzutu q?",
        },
        {
          "answer": "Wysokość trafia w środek przeciwprostokątnej, a obie przyprostokątne są równe, więc trójkąt jest równoramienny. Dla [[c = 10]] cm i [[p = q = 5]] cm obie przyprostokątne są równe [[\\sqrt{50}]] cm, czyli około 7.071 cm.",
          "question": "Co się dzieje, gdy p i q są równe?",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego, więc wybierz narzędzie odpowiadające pomiarom, które już znasz.",
      "relatedItems": [
        "Kalkulator rzutu trójkąta prostokątnego",
        "Kalkulator rzutu p trójkąta prostokątnego",
        "Kalkulator przyprostokątnej b z rzutu trójkąta prostokątnego",
        "Kalkulator przeciwprostokątnej z rzutów trójkąta prostokątnego",
        "Kalkulator wysokości z rzutów trójkąta prostokątnego",
        "Kalkulator boków trójkąta prostokątnego",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to praca domowa z geometrii i zajęcia w klasie, gdzie zadania o rzutach sprawdzają, czy uczniowie potrafią oznaczyć rysunek i zastosować wzór [[q = \\frac{b^2}{c}]] zamiast sięgać z przyzwyczajenia po twierdzenie Pitagorasa. Ćwiczenia o trójkątach podobnych wykorzystują ten sam układ, ponieważ sam dowód jest ćwiczeniem w dopasowywaniu odpowiadających sobie boków.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny wykorzystuje to twierdzenie, gdy trójkąt prostokątny trzeba odtworzyć na podstawie częściowych pomiarów: jeśli rysunek podaje przeciwprostokątną i spodek wysokości, brakujący rzut można wyznaczyć bez ponownego mierzenia kształtu. Nauczyciele wykorzystują ten układ także jako lekcję pomostową między dodawaniem odcinków a podobieństwem.",
            },
            {
              "kind": "p",
              "text": "Jedno ograniczenie dotyczy każdego zastosowania: wymagana geometria trójkąta prostokątnego musi rzeczywiście istnieć. Twierdzenie opisuje dokładne zależności geometryczne, a nie przybliżone pomiary terenowe, więc nigdy nie zastępuje starannego pomiaru geodezyjnego ani profesjonalnego pomiaru inżynierskiego.",
            },
          ],
          "h2": "Praktyczne zastosowania obliczeń rzutu trójkąta prostokątnego",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ma dwa pola wejściowe. Pierwsze przyjmuje przyprostokątną b, prostopadły bok związany z rzutem q. Drugie przyjmuje przeciwprostokątną c, cały bok leżący naprzeciw kąta prostego. Obie długości muszą być wyrażone w tej samej jednostce, więc najpierw przelicz je, jeśli jeden pomiar jest podany w centymetrach, a drugi w metrach.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna musi być dłuższa od przyprostokątnej b, ponieważ przyprostokątna jest jednym z boków kąta prostego, a przeciwprostokątna obejmuje cały trójkąt. Jeśli twoja wartość b jest większa od c, prawdopodobnie wpisałeś rzut, wysokość albo niewłaściwy bok.",
            },
            {
              "kind": "p",
              "text": "Kliknij Oblicz rzut q, aby zobaczyć wynik, i użyj przycisku Resetuj, aby wyczyścić oba pola przed nowym zadaniem. Wynik jest długością wyrażoną w jednostce, którą wpisałeś, więc przyprostokątna 8 cm i przeciwprostokątna 10 cm dają 6.4 cm. Wynik jest długością odcinka leżącego wzdłuż przeciwprostokątnej.",
            },
          ],
          "h2": "Obliczanie rzutu q trójkąta prostokątnego",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny rysunek przedstawia trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z C prostopadle do AB i dotyka jej w punkcie D.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na dwie części: odcinek AD to rzut p, a odcinek DB to rzut q. Przyprostokątna b i rzut q są wyróżnione, ponieważ to właśnie ta para jest tematem tej strony. Śledź oznaczenia w tej kolejności: zacznij w punkcie B, idź wzdłuż przyprostokątnej b do C, potem wzdłuż przyprostokątnej a do A, a następnie wróć wzdłuż przeciwprostokątnej od A do B, zatrzymując się w punkcie D, aby zobaczyć podział na p i q.",
            },
            {
              "kind": "p",
              "text": "Powiązanie b z q staje się widoczne w małym trójkącie CBD, gdzie przyprostokątna b jest przeciwprostokątną, a q jest bokiem leżącym wzdłuż dużej przeciwprostokątnej. Ponieważ trójkąt CBD jest podobny do trójkąta ABC, stosunek q do b w małym trójkącie jest równy stosunkowi b do c w dużym trójkącie.",
            },
          ],
          "h2": "Rysunek rzutu q trójkąta prostokątnego objaśniony",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym przy C, wysokością CD do przeciwprostokątnej AB, wyróżnioną przyprostokątną b i rzutem q, z oznaczonymi przyprostokątnymi a i b, przeciwprostokątną c, rzutami p i q oraz wysokością h",
            "caption": "Wysokość CD dzieli przeciwprostokątną AB na rzut p (AD) i rzut q (DB), przy czym wyróżniona jest przyprostokątna b (BC).",
            "src": "projection-q-main-triangle.svg",
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
              "text": "Dane: [[b = 8]] cm i [[c = 10]] cm. Ze wzoru otrzymujemy [[q = \\frac{8^2}{10} = \\frac{64}{10}]], więc [[q = 6.4]] cm. Przyprostokątna podniesiona do kwadratu, czyli 64, jest wartością pośrednią, a podzielenie jej przez przeciwprostokątną zamienia ją z powrotem w długość. Druga przyprostokątna tego trójkąta ma 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Dzielenie dające kwadrat doskonały",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 12]] cm i [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Przyprostokątna podniesiona do kwadratu dzieli się bez reszty, więc odpowiedź jest dokładna. Drugi rzut wynosi tu 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Wynik dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 7]] cm i [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Wynik dziesiętny jest normalny: rzut nie musi być liczbą całkowitą, nawet gdy obie dane wejściowe są całkowite. Drugi rzut wynosi 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Większe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 15]] m i [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Większe liczby niczego nie zmieniają w metodzie: najpierw podnieś do kwadratu, potem podziel. Drugi rzut wynosi 16 m i łączy się z przyprostokątną o długości 20 m.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Małe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 30]] mm i [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Małe pomiary działają tak samo, a zachowanie jednostki w milimetrach przez cały czas pozwala uniknąć przeliczania. Drugi rzut wynosi 32 mm i łączy się z przyprostokątną o długości 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = \\frac{3}{4}]] ft i [[c = \\frac{3}{2}]] ft. Najpierw podnieś przyprostokątną do kwadratu: [[b^2 = \\frac{9}{16}]] stopy kwadratowej. Potem [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dzielenie przez ułamek oznacza mnożenie przez jego odwrotność i to właśnie ten krok uczniowie najczęściej pomijają przy pomiarach ułamkowych.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 80]] cm i [[c = 1]] m. Najpierw przelicz: 1 m to 100 cm. Potem [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Użycie 1 zamiast 100 dałoby 6400 cm, czyli rzut znacznie dłuższy od przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Większe wartości dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 4.5]] m i [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Dane dziesiętne wymagają takiej samej staranności jak liczby całkowite: podnieś do kwadratu cały ułamek dziesiętny, a potem podziel. Drugi rzut wynosi 4.8 m i łączy się z przyprostokątną o długości 6 m.",
            },
          ],
          "h2": "Przykłady obliczania rzutu q z rozwiązaniem",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie mówi, że kwadrat przyprostokątnej b jest równy przeciwprostokątnej pomnożonej przez jej rzut:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Podzielenie obu stron przez c wyodrębnia q i daje roboczy wzór dla tej strony:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Obliczenie przebiega w dwóch etapach. Etap 1 polega na podniesieniu przyprostokątnej b do kwadratu, czyli pomnożeniu jej przez samą siebie. Etap 2 polega na podzieleniu tej długości podniesionej do kwadratu przez całą przeciwprostokątną c, a wynikiem jest zwykła długość, a nie długość podniesiona do kwadratu.",
            },
            {
              "kind": "p",
              "text": "Na obu etapach trzeba uważać na jednostki. Jeśli b i c są wyrażone w centymetrach, to [[b^2]] jest wyrażone w centymetrach kwadratowych, a podzielenie przez centymetry daje centymetry. Mieszanie jednostek, na przykład metrów dla b i centymetrów dla c, daje bezsensowny iloraz, więc przed obliczeniem przelicz wszystko na jedną jednostkę.",
            },
            {
              "kind": "p",
              "text": "Dla [[b = 8]] cm i [[c = 10]] cm etap 1 daje [[8^2 = 64]], a etap 2 daje [[q = \\frac{64}{10} = 6.4]] cm. Liczba 64 sama w sobie nie odpowiada na żadne pytanie: dopiero po podzieleniu staje się długością rzutu.",
            },
          ],
          "h2": "Wzór na rzut q trójkąta prostokątnego",
          "image": {
            "alt": "Trójkąt prostokątny ABC z wysokością CD, pokazujący, że rzut q jest równy przyprostokątnej b podniesionej do kwadratu podzielonej przez przeciwprostokątną c",
            "caption": "Wzór na rzut: q jest równe b do kwadratu podzielone przez c, przy czym spodek wysokości D dzieli przeciwprostokątną.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedenaście krótkich kroków prowadzi od oznaczonego rysunku do sprawdzonej odpowiedzi.",
            },
            {
              "kind": "steps",
              "steps": [
                "Rozpoznaj trójkąt prostokątny w swoim zadaniu i upewnij się, że ma kąt prosty.",
                "Znajdź wierzchołek kąta prostego i wysokość poprowadzoną z niego do przeciwprostokątnej.",
                "Rozpoznaj prostopadłą przyprostokątną związaną z rzutem q, czyli przyprostokątną stykającą się z wierzchołkiem B.",
                "Rozpoznaj całą przeciwprostokątną c, bok leżący naprzeciw kąta prostego.",
                "Upewnij się, że c jest większe od b. Jeśli tak nie jest, popraw oznaczenia na rysunku przed kontynuowaniem.",
                "Wybierz zgodne jednostki i przelicz je, jeśli pomiary są wyrażone w różnych jednostkach.",
                "Wpisz przyprostokątną b w polu Przyprostokątna b.",
                "Wpisz przeciwprostokątną c w polu Przeciwprostokątna c.",
                "Kliknij Oblicz rzut q i odczytaj wynik.",
                "Sprawdź wynik: q musi być dodatnie i mniejsze od c.",
                "Użyj przycisku Resetuj, gdy rozpoczynasz nowe obliczenie.",
              ],
            },
            {
              "kind": "p",
              "text": "Wpisanie przyprostokątnej a zamiast przyprostokątnej b daje inny rzut. Przyprostokątna a łączy się z p, więc kalkulator zwróciłby odcinek przyległy do wierzchołka A, a nie ten przyległy do B. Sprawdzenie oznaczeń w kroku 3 ma największe znaczenie.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora rzutu q trójkąta prostokątnego",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten kalkulator znajduje rzut q trójkąta prostokątnego, gdy znasz przyprostokątną b i całą przeciwprostokątną c. Rzut q to odcinek przeciwprostokątnej leżący przy przyprostokątnej b, powstały, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną. Wzór to [[q = \\frac{b^2}{c}]], gdzie b jest prostopadłą przyprostokątną, a c jest pełną przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "Na przykład dla [[b = 8]] cm i [[c = 10]] cm obliczenie wygląda tak: [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Wartość 6.4 cm to część przeciwprostokątnej związana z przyprostokątną b, a nie sama przyprostokątna ani cała przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Kalkulator znajduje się u góry tej strony, a za nim są wzór, oznaczony rysunek, dowód, przykłady z rozwiązaniem oraz kontrole, które możesz zastosować do każdej odpowiedzi.",
            },
          ],
          "h2": "Kalkulator rzutu q trójkąta prostokątnego",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma dwa prostopadłe boki, zwane przyprostokątnymi, oraz jeden najdłuższy bok, zwany przeciwprostokątną. Dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw tego kąta. Tutaj trójkąt to ABC z kątem prostym przy C: przyprostokątna a to AC, przyprostokątna b to BC, a przeciwprostokątna c to AB.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna b jest jednym z dwóch boków tworzących kąt prosty, więc jest prawdziwym bokiem trójkąta, a nie odcinkiem narysowanym wewnątrz niego. Rzut q leży płasko wzdłuż przeciwprostokątnej, natomiast przyprostokątna b biegnie od wierzchołka B do wierzchołka kąta prostego C.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest zawsze najdłuższym bokiem w niezdegenerowanym trójkącie prostokątnym, ponieważ leży naprzeciw największego kąta, czyli kąta prostego. Dlatego wzór wymaga [[0 < b < c]] i dlatego kalkulator oczekuje przeciwprostokątnej dłuższej od przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Położenie przyprostokątnej b decyduje, który odcinek nazywa się q: przyprostokątna b dotyka wierzchołka B, więc odcinek przyległy do B to q. Zawsze sprawdzaj oznaczenia na własnym rysunku, zanim wybierzesz, którą przyprostokątną wpisać.",
            },
          ],
          "h2": "Przyprostokątna b i przeciwprostokątna",
          "table": {
            "headers": [
              "Symbol",
              "Znaczenie",
            ],
            "rows": [
              [
                "a",
                "Druga prostopadła przyprostokątna",
              ],
              [
                "b",
                "Przyprostokątna związana z q",
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
                "Wysokość do przeciwprostokątnej",
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
                "Użycie przyprostokątnej a zamiast przyprostokątnej b: wpisanie a daje p. Dla a = 6 i c = 10 wynik 3.6 cm to p, a nie q.",
                "Zapomnienie o podniesieniu przyprostokątnej b do kwadratu: podzielenie b przez c zamiast b do kwadratu przez c daje 0.8 cm zamiast 6.4 cm.",
                "Dzielenie c przez b do kwadratu zamiast b do kwadratu przez c: iloraz musi być [[b^2/c]], a nie [[c/b^2]]. Dla b = 8 i c = 10 błędna kolejność daje około 0.156, co nie ma poprawnej jednostki.",
                "Mylenie rzutu p z rzutem q: q leży przy wierzchołku B, a p przy wierzchołku A. Oznacz oba odcinki przed obliczeniem.",
                "Traktowanie q jako rzeczywistej prostopadłej przyprostokątnej: q jest odcinkiem przeciwprostokątnej, a nie bokiem BC. W trójkącie 6-8-10 przyprostokątna b ma 8 cm, a q tylko 6.4 cm.",
                "Wpisanie wartości przyprostokątnej większej od c lub równej c: taki trójkąt nie istnieje, ponieważ przeciwprostokątna jest najdłuższym bokiem.",
                "Mieszanie centymetrów i metrów: najpierw przelicz, jak w przykładzie 7, gdzie 1 m zamieniono na 100 cm.",
                "Zapomnienie, że c oznacza całą przeciwprostokątną: użycie rzutu lub przyprostokątnej jako mianownika zniekształca wynik.",
                "Zbyt wczesne zaokrąglanie obliczeń pośrednich: zaokrąglenie przyprostokątnej podniesionej do kwadratu przed dzieleniem przesuwa odpowiedź.",
                "Mylenie b z b do kwadratu: 64 w przykładzie 6-8-10 to długość podniesiona do kwadratu, natomiast 6.4 cm to rzut.",
                "Stosowanie wzoru do trójkąta, który nie jest prostokątny: twierdzenie o rzucie wymaga wysokości poprowadzonej z kąta prostego.",
                "Traktowanie q jako całej przeciwprostokątnej: q plus p jest równe c, więc wynik równy c lub większy sygnalizuje błąd.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli odpowiedź wygląda na błędną, zatrzymaj się i ponownie oznacz rysunek przed ponownym obliczeniem. Większość powyższych błędów znika, gdy p i q są wyraźnie zaznaczone na przeciwprostokątnej.",
            },
          ],
          "h2": "Częste błędy przy obliczaniu rzutu q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze, zanim przeczytasz odpowiedzi. Żadna z wartości nie powtarza przykładów z rozwiązaniem.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątną [[b = 9]] cm i przeciwprostokątną [[c = 15]] cm. Znajdź rzut q.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Wartości dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = 1.5]] m i [[c = 2.5]] m. Znajdź rzut q.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane: [[b = \\frac{5}{6}]] ft i [[c = \\frac{5}{3}]] ft. Znajdź q jako ułamek.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna ma [[b = 80]] cm, a przeciwprostokątna ma [[c = 2]] m. Znajdź q w centymetrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź p po obliczeniu q",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 25]] cm i przyprostokątną [[b = 15]] cm. Znajdź q, a potem p.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Wielokrokowe z rzutem q i wysokością h",
            },
            {
              "kind": "p",
              "text": "Dane: [[c = 25]] cm i [[b = 15]] cm. Znajdź q, potem p, a potem wysokość h.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[b^2 = \\frac{25}{36}]], więc [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: Przelicz 2 m na 200 cm, potem [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, potem [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[q = 9]] cm i [[p = 16]] cm, więc [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód opiera się na trójkątach podobnych. Narysowanie wysokości CD dzieli trójkąt ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, a oba są podobne do pierwotnego trójkąta. Jeden ze stosunków ich boków daje bezpośrednio twierdzenie o rzucie.",
            },
            {
              "kind": "p",
              "text": "Skup się na trójkącie CBD i na całym trójkącie ABC. Oba zawierają kąt przy B i oba zawierają kąt prosty, więc ich trzecie kąty też muszą być równe. Dopasowanie boków leżących w tych samych miejscach daje proporcję:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz podstaw standardowe symbole: [[DB = q]], [[BC = b]] oraz [[AB = c]]. Proporcja przybiera postać:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie na krzyż usuwa ułamki. Licznik z lewej strony pomnożony przez mianownik z prawej strony jest równy licznikowi z prawej strony pomnożonemu przez mianownik z lewej strony, więc [[q \\times c = b \\times b]], czyli:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Podzielenie obu stron przez c kończy dowód i daje [[q = \\frac{b^2}{c}]]. To samo rozumowanie zastosowane do drugiego małego trójkąta, ACD, daje [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Dlaczego wzór na rzut q działa?",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok mniejszych podobnych trójkątów ACD i CBD, pokazujący proporcję q przez b równą b przez c",
            "caption": "Dowód z trójkątów podobnych: q przez b jest równe b przez c, więc mnożenie na krzyż daje b do kwadratu równe c razy q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziewięć własności wynika bezpośrednio ze wzoru [[q = \\frac{b^2}{c}]]. Każda z nich służy też jako kontrola sensowności nowej odpowiedzi.",
            },
            {
              "items": [
                "Rzut q jest zawsze krótszy od całej przeciwprostokątnej w niezdegenerowanym trójkącie, ponieważ q to tylko część c.",
                "Zwiększenie przyprostokątnej b przy stałym c zwiększa q, ponieważ rośnie przyprostokątna podniesiona do kwadratu w liczniku.",
                "Zwiększenie c przy stałym b zmniejsza q, ponieważ rośnie mianownik.",
                "Jeśli b i c zostaną pomnożone przez ten sam dodatni czynnik, q skaluje się o ten czynnik.",
                "Jeśli p jest równe q, obie prostopadłe przyprostokątne są równe, a trójkąt jest równoramiennym trójkątem prostokątnym.",
                "Rzut q jest zawsze dodatni w poprawnym niezdegenerowanym trójkącie. Wartości zerowe lub ujemne nie opisują żadnego rzeczywistego trójkąta.",
                "Rzut q jest długością, a nie polem. Przyprostokątna podniesiona do kwadratu to tylko krok pośredni, a podzielenie przez c przywraca zwykłe jednostki długości.",
                "Rzut q jest związany konkretnie z przyprostokątną b. Użycie go z przyprostokątną a odpowiada na zupełnie inne pytanie.",
                "Zamiana p i q zmienia to, która przyprostokątna jest związana z każdym rzutem, więc oznaczenia muszą pozostać dopasowane do swoich wierzchołków.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Gdy wysokość trafia w środek przeciwprostokątnej, obie przyprostokątne muszą być równe, jak pokazuje poniższy rysunek.",
            },
          ],
          "h2": "Ważne własności rzutu q",
          "image": {
            "alt": "Dwa trójkąty prostokątne obok siebie, jeden z równymi rzutami p i q wynoszącymi 5, a drugi z nierównymi rzutami p równym 3.6 i q równym 6.4",
            "caption": "Równe rzuty (p = q = 5) dają równe przyprostokątne, natomiast nierówne rzuty (p = 3.6, q = 6.4) dają nierówne przyprostokątne.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Niektóre zadania pytają zamiast tego o drugi rzut. Odpowiedni wzór jest lustrzanym odbiciem wzoru na q, przy czym przyprostokątna a zajmuje miejsce przyprostokątnej b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[a = 6]] cm i [[c = 10]] cm. Wtedy [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Zgadza się to z drugim rzutem trójkąta 6-8-10 z wcześniejszych przykładów, gdzie q wynosiło 6.4 cm, a oba rzuty sumują się do 10 cm.",
            },
            {
              "kind": "p",
              "text": "Wzór używa a zamiast b, ponieważ każda przyprostokątna łączy się z rzutem przyległym do jej własnego wierzchołka. Przyprostokątna a dotyka wierzchołka A, a p to odcinek przyległy do A. Wpisanie b w tym wzorze dałoby q, a nie p. Kalkulator na tej stronie przyjmuje tylko b i c, więc użyj <a href=\"/right-triangle-projection-p-calculator/\">kalkulatora rzutu p</a>, gdy musisz znaleźć p na podstawie a i c.",
            },
          ],
          "h2": "Jak obliczyć rzut p na podstawie drugiej przyprostokątnej",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie i twierdzenie Pitagorasa zgadzają się dokładnie, a algebra pokazuje dlaczego. Zacznij od dwóch wzorów na rzuty, [[a^2 = c \\times p]] i [[b^2 = c \\times q]], i dodaj je do siebie:",
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
              "text": "Sprawdzenie liczbowe na trójkącie 6-8-10 to potwierdza: [[a^2 + b^2 = 36 + 64 = 100]] oraz [[c^2 = 10^2 = 100]]. Twierdzenie o rzucie rozdziela zależność Pitagorasa na jedną część dla każdej przyprostokątnej, a dodanie tych części ją odtwarza.",
            },
            {
              "kind": "p",
              "text": "Ten podział sprawia, że wzory na rzuty są przydatne: samo twierdzenie Pitagorasa nie pozwala znaleźć rzutu na podstawie przyprostokątnej i przeciwprostokątnej, ponieważ mówi o przyprostokątnych łącznie.",
            },
          ],
          "h2": "Związek między rzutem q a twierdzeniem Pitagorasa",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzut q łączy się też z wysokością poprzez drugą zależność średniej geometrycznej. Wysokość h jest średnią geometryczną dwóch rzutów:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[p = c - q]], wysokość można też zapisać, używając tylko q i c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[q = 6.4]] cm i [[c = 10]] cm. Najpierw znajdź p: [[p = 10 - 6.4 = 3.6]] cm. Potem [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Wysokość jest krótsza od każdej przyprostokątnej, jak być musi.",
            },
            {
              "kind": "p",
              "text": "Sam rzut q nie wyznacza wysokości: dwa różne trójkąty mogą mieć to samo q przy różnych przeciwprostokątnych. Zawsze potrzebna jest też cała przeciwprostokątna albo drugi rzut. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkulator wysokości z rzutów</a> wykonuje to obliczenie, gdy znane są oba rzuty.",
            },
          ],
          "h2": "Związek między rzutem q a wysokością",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór na rzut można przekształcić, aby znaleźć przyprostokątną b zamiast q. Zaczynając od [[b^2 = c \\times q]], weź dodatni pierwiastek kwadratowy z obu stron:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Sprawdź to na znanych liczbach: [[b = 8]] cm, [[c = 10]] cm i [[q = 6.4]] cm. Iloczyn pod pierwiastkiem to [[c \\times q = 10 \\times 6.4 = 64]], a [[\\sqrt{64} = 8]] cm, czyli przyprostokątna, od której zaczęliśmy.",
            },
            {
              "kind": "p",
              "text": "Powiązanie to zależność średniej geometrycznej: przyprostokątna b jest średnią geometryczną przeciwprostokątnej i jej rzutu. Dlatego przyprostokątna występuje w twierdzeniu w kwadracie, a pierwiastek kwadratowy pojawia się przy rozwiązywaniu dla przyprostokątnej. W zadaniach, które zaczynają się od q i c, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator przyprostokątnej b z rzutu</a> stosuje ten przekształcony wzór bezpośrednio.",
            },
          ],
          "h2": "Związek między rzutem q a przyprostokątną b",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa rzuty to dwie części jednego prostego boku, więc sumują się do całej przeciwprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Przekształcenie daje [[p = c - q]]. Dla [[c = 10]] cm i [[q = 6.4]] cm odejmowanie wygląda tak: [[p = 10 - 6.4 = 3.6]] cm. To samo odejmowanie działa w drugą stronę: [[q = c - p]]. <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Kalkulator przeciwprostokątnej z rzutów</a> odtwarza c z p i q, gdy sama przeciwprostokątna jest nieznana.",
            },
            {
              "kind": "p",
              "text": "Porównanie p i q mówi coś o kształcie trójkąta. Gdy q jest równe p, wysokość trafia w środek przeciwprostokątnej, a obie przyprostokątne są równe, więc trójkąt jest równoramienny. Gdy q jest większe od p, przyprostokątna b jest dłuższa od przyprostokątnej a, a gdy p jest większe, przyprostokątna a jest dłuższa. Dłuższy rzut zawsze należy do dłuższej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "W trójkącie 6-8-10 q wynosi 6.4 cm, a p wynosi 3.6 cm, więc q jest większe, a przyprostokątna b o długości 8 cm jest rzeczywiście dłuższa od przyprostokątnej a o długości 6 cm.",
            },
          ],
          "h2": "Związek między rzutem p a rzutem q",
          "image": {
            "alt": "Trójkąt prostokątny porównujący rzut q sparowany z przyprostokątną b z rzutem p sparowanym z przyprostokątną a, przy c równym 10, q równym 6.4 i p równym 3.6",
            "caption": "q używa b (64 podzielone przez 10 = 6.4), a p używa a (36 podzielone przez 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj [[b = 8]] cm i [[c = 10]] cm. Cztery kroki poniżej pokazują pełne rozwiązanie, bez pomijania niczego.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: [[q = \\frac{b^2}{c}]].",
                "Podstaw wartości: [[q = \\frac{8^2}{10}]].",
                "Podnieś przyprostokątną do kwadratu: [[q = \\frac{64}{10}]].",
                "Podziel: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6.4 cm to odcinek przeciwprostokątnej przyległy do przyprostokątnej b, a nie prostopadły bok ani pole. Krótkie sprawdzenie zamyka pętlę: [[b^2 = 8^2 = 64]] oraz [[c \\times q = 10 \\times 6.4 = 64]], więc obie strony twierdzenia są zgodne.",
            },
            {
              "kind": "p",
              "text": "Dla porównania drugi rzut to [[p = 10 - 6.4 = 3.6]] cm, przyprostokątna a to [[a = \\sqrt{10 \\times 3.6} = 6]] cm, a wysokość to [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, co potwierdza znany trójkąt prostokątny 6-8-10.",
            },
          ],
          "h2": "Przykład krok po kroku znajdowania rzutu q",
          "image": {
            "alt": "Trójkąt prostokątny z przyprostokątną b 8 cm i przeciwprostokątną 10 cm, rozwiązany tak, że rzut q jest równy 6.4 cm",
            "caption": "Przykład z rozwiązaniem: b = 8 cm i c = 10 cm dają q = 64 podzielone przez 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery niezależne kontrole wychwytują prawie każdy błąd. Wykonaj co najmniej jedną przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. W poniższym przykładzie przez cały czas używane są [[b = 8]] cm, [[c = 10]] cm i [[q = 6.4]] cm.",
            },
            {
              "kind": "h3",
              "text": "Metoda 1: Sprawdzenie twierdzenia o rzucie",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[q = \\frac{b^2}{c}]] bezpośrednio. Tutaj [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, co zgadza się z odpowiedzią. Jeśli ponowne obliczenie różni się, podnoszenie do kwadratu albo dzielenie poszło źle.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Dodawanie odcinków",
            },
            {
              "kind": "p",
              "text": "Znajdź p przez odejmowanie: [[p = 10 - 6.4 = 3.6]] cm. Potem sprawdź [[p + q = 3.6 + 6.4 = 10]] cm, co jest równe c. Suma różniąca się od c wskazuje na błąd w odejmowaniu.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Sprawdzenie twierdzeniem Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Oblicz przyprostokątną a z p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Potem sprawdź [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Ta kontrola sprawdza cały trójkąt, więc wychwytuje błędy w oznaczeniach, których pierwsza kontrola może nie zauważyć. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator przyprostokątnej a z rzutu</a> wykonuje krok z a bezpośrednio.",
            },
            {
              "kind": "h3",
              "text": "Metoda 4: Sensowność geometryczna",
            },
            {
              "kind": "p",
              "text": "Upewnij się, że q jest dodatnie, mniejsze od c, wyrażone w poprawnej jednostce i jest odcinkiem przeciwprostokątnej, a nie prostopadłym bokiem. Tutaj 6.4 cm jest dodatnie, mniejsze od 10 cm, wyrażone w centymetrach i krótsze od przyprostokątnej b o długości 8 cm.",
            },
          ],
          "h2": "Jak sprawdzić obliczenie rzutu q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Narysuj wysokość z wierzchołka kąta prostego C prostopadle do przeciwprostokątnej AB. Przecina ona przeciwprostokątną w punkcie zwanym spodkiem, oznaczonym D, i dzieli ją na dwa przyległe odcinki: AD to rzut p, a DB to rzut q.",
            },
            {
              "kind": "p",
              "text": "Rzut q należy do przyprostokątnej b, ponieważ leży przy wierzchołku B, tym samym wierzchołku, w którym zaczyna się przyprostokątna b. W małym trójkącie CBD przyprostokątna b jest przeciwprostokątną, a q jest jedną z jego przyprostokątnych, i to właśnie to powiązanie geometryczne sprawia, że twierdzenie o rzucie działa. Rzut p, rozumując tak samo, należy do przyprostokątnej a, która dotyka wierzchołka A.",
            },
            {
              "kind": "p",
              "text": "Rzuty to długości wzdłuż przeciwprostokątnej, mierzone w tej samej jednostce co pozostałe boki. Nie są prostopadłe do niczego ani nie są bokami pierwotnego trójkąta. <a href=\"/right-triangle-projection-calculator/\">Kalkulator rzutu trójkąta prostokątnego</a> znajduje oba rzuty, gdy znane są przyprostokątne i przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Ponieważ p i q to dwie części jednego prostego boku, sumują się do całej przeciwprostokątnej:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Dla [[c = 10]] cm i [[q = 6.4]] cm drugi rzut to [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Rzut q to nie to samo co przyprostokątna b. Przyprostokątna b to bok BC, jeden z boków tworzących kąt prosty, natomiast q to odcinek DB wzdłuż przeciwprostokątnej. W trójkącie 6-8-10 przyprostokątna b ma 8 cm, a rzut q tylko 6.4 cm.",
            },
          ],
          "h2": "Czym jest rzut q w trójkącie prostokątnym?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kwadrat jest tam, ponieważ twierdzenie o rzucie jest stwierdzeniem o przyprostokątnej podniesionej do kwadratu: mówi, że kwadrat przyprostokątnej b jest równy iloczynowi c i q, [[b^2 = c \\times q]], a wzór na q otrzymujemy, dzieląc obie strony przez c.",
            },
            {
              "kind": "p",
              "text": "Powód sięga trójkątów podobnych. W trójkącie CBD przyprostokątna b pełni rolę przeciwprostokątnej, natomiast q jest jedną z jego przyprostokątnych. Porównanie małego trójkąta z całym trójkątem daje proporcję [[\\frac{q}{b} = \\frac{b}{c}]], a przyprostokątna b występuje dwukrotnie, raz w każdym stosunku. Mnożenie na krzyż stawia b po obu stronach i właśnie dlatego pojawia się kwadrat.",
            },
            {
              "kind": "p",
              "text": "Zależność średniej geometrycznej mówi to samo innymi słowami: przyprostokątna b jest średnią geometryczną przeciwprostokątnej c i jej rzutu q, co oznacza [[b = \\sqrt{c \\times q}]]. Podniesienie obu stron do kwadratu daje [[b^2 = c \\times q]], a podzielenie przez c wyodrębnia q.",
            },
            {
              "kind": "p",
              "text": "Dzielenie to krok, który wyodrębnia q. Mnożenie w twierdzeniu wiąże q z c, a podzielenie przez c usuwa to powiązanie. Bez kwadratu wzór mieszałby długość z polem, a jednostki by się nie zgadzały.",
            },
          ],
          "h2": "Dlaczego przyprostokątna b jest podnoszona do kwadratu we wzorze na rzut?",
        },
      },
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-applications": "Praktyczne zastosowania obliczeń rzutu trójkąta prostokątnego",
        "sec-calculate": "Obliczanie rzutu q trójkąta prostokątnego",
        "sec-diagram": "Rysunek rzutu q trójkąta prostokątnego objaśniony",
        "sec-examples": "Przykłady obliczania rzutu q z rozwiązaniem",
        "sec-faq": "Często zadawane pytania",
        "sec-formula": "Wzór na rzut q trójkąta prostokątnego",
        "sec-how-to-use": "Jak korzystać z kalkulatora rzutu q trójkąta prostokątnego",
        "sec-intro": "Kalkulator rzutu q trójkąta prostokątnego",
        "sec-leg-b-hypotenuse": "Przyprostokątna b i przeciwprostokątna",
        "sec-mistakes": "Częste błędy przy obliczaniu rzutu q",
        "sec-practice": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        "sec-projection-p": "Jak obliczyć rzut p na podstawie drugiej przyprostokątnej",
        "sec-proof": "Dlaczego wzór na rzut q działa?",
        "sec-properties": "Ważne własności rzutu q",
        "sec-pythagoras": "Związek między rzutem q a twierdzeniem Pitagorasa",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-relationship-altitude": "Związek między rzutem q a wysokością",
        "sec-relationship-leg-b": "Związek między rzutem q a przyprostokątną b",
        "sec-relationship-pq": "Związek między rzutem p a rzutem q",
        "sec-step-example": "Przykład krok po kroku znajdowania rzutu q",
        "sec-verify": "Jak sprawdzić obliczenie rzutu q",
        "sec-what-projection-q": "Czym jest rzut q w trójkącie prostokątnym?",
        "sec-why-squared": "Dlaczego przyprostokątna b jest podnoszona do kwadratu we wzorze na rzut?",
      },
    },
};
