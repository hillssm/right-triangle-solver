// altitudeFromSidesGuideTranslations.bpl.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B4_PL = {
  "pl": {
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator wysokości trójkąta prostokątnego z boków",
        "sec-calculate": "Obliczanie wysokości trójkąta prostokątnego z długości boków",
        "sec-altitude": "Czym jest wysokość trójkąta prostokątnego?",
        "sec-sides": "Boki trójkąta prostokątnego",
        "sec-formula": "Wzór na wysokość trójkąta prostokątnego z boków",
        "sec-use": "Jak korzystać z kalkulatora wysokości trójkąta prostokątnego z boków",
        "sec-manual": "Obliczanie wysokości krok po kroku bez kalkulatora",
        "sec-diagram": "Wyjaśnienie diagramu wysokości trójkąta prostokątnego",
        "sec-proof": "Dlaczego wzór na wysokość działa?",
        "sec-examples": "Rozwiązane przykłady obliczania wysokości trójkąta prostokątnego z boków",
        "sec-two-sides": "Jak znaleźć wysokość, znając tylko dwa boki",
        "sec-verify": "Jak zweryfikować obliczenie wysokości",
        "sec-vs-projections": "Wysokość z boków a wysokość z rzutów",
        "sec-area-rel": "Związek między wysokością, polem a przeciwprostokątną",
        "sec-properties": "Szczególne własności wysokości opuszczonej na przeciwprostokątną",
        "sec-mistakes": "Typowe błędy przy obliczaniu wysokości trójkąta prostokątnego",
        "sec-applications": "Praktyczne zastosowania obliczania wysokości trójkąta prostokątnego",
        "sec-practice": "Zadania do ćwiczeń z rozwiązaniami",
        "sec-related": "Odkryj pokrewne kalkulatory trójkąta prostokątnego",
        "sec-faq": "Często zadawane pytania",
        "sec-conclusion": "Pokrewne kalkulatory trójkąta prostokątnego",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator wysokości trójkąta prostokątnego z boków",
          "blocks": [
            {
              "kind": "p",
              "text": "Wpisz dwie przyprostokątne i przeciwprostokątną, aby znaleźć wysokość w kilka sekund.",
            },
            {
              "kind": "p",
              "text": "Ten kalkulator znajduje wysokość trójkąta prostokątnego: prostopadłą odległość od wierzchołka kąta prostego do przeciwprostokątnej. Wpisz dwie przyprostokątne, [[a]] i [[b]], oraz przeciwprostokątną [[c]], a kalkulator zwróci [[h]], korzystając ze wzoru [[h=\\frac{ab}{c}]]. Wynik otrzymasz w tej samej jednostce co dane wejściowe.",
            },
            {
              "kind": "p",
              "text": "Na przykład trójkąt o przyprostokątnych 3 cm i 4 cm oraz przeciwprostokątnej 5 cm daje [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Zwróć uwagę, że 2.4 cm to mniej niż każda z przyprostokątnych, co jest zawsze prawdą dla wysokości opuszczonej na przeciwprostokątną.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Obliczanie wysokości trójkąta prostokątnego z długości boków",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator przyjmuje trzy pomiary. Przyprostokątna a to pierwszy bok prostopadły, przyprostokątna b to drugi bok prostopadły, a przeciwprostokątna c to najdłuższy bok, leżący naprzeciw kąta prostego. Wszystkie trzy muszą używać tej samej jednostki, więc przed wpisaniem przelicz metry na centymetry lub stopy na cale.",
            },
            {
              "kind": "p",
              "text": "Kliknij przycisk Oblicz wysokość h, aby zobaczyć wynik wraz z podstawieniem, i użyj przycisku Resetuj, aby wyczyścić pola przed kolejnym zadaniem. Kalkulator odpowiada zwięzłym wzorem:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Jeśli znasz tylko dwa boki, najpierw odzyskaj trzeci za pomocą twierdzenia Pitagorasa albo spróbuj ogólnego <a href=\"/right-triangle-altitude-calculator/\">kalkulatora wysokości</a> dla innego punktu wyjścia.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Czym jest wysokość trójkąta prostokątnego?",
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość to prostopadła odległość od wierzchołka do przeciwległego boku. Na tej stronie zawsze opada ona z wierzchołka kąta prostego prosto na przeciwprostokątną, spotykając ją pod kątem prostym. Przeciwprostokątna jest podstawą, ponieważ to jedyny bok leżący naprzeciw kąta prostego, a odcinek wysokości leży wewnątrz trójkąta.",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma trzy wysokości, ale dwie z nich są trywialne: przyprostokątna [[a]] to wysokość opuszczona na podstawę [[b]], a przyprostokątna [[b]] to wysokość opuszczona na podstawę [[a]], ponieważ przyprostokątne są już prostopadłe. Interesująca jest trzecia wysokość, opuszczona na przeciwprostokątną, ponieważ jest to naprawdę nowy wewnętrzny odcinek i jest krótsza niż każda z przyprostokątnych.",
            },
            {
              "kind": "p",
              "text": "To właśnie tę trzecią wysokość znajduje ten kalkulator i to właśnie ona jest zwykle rozumiana w podręcznikach, gdy pytają o wysokość trójkąta prostokątnego.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Boki trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Poprawne oznaczenia sprawiają, że wzór działa. Przyprostokątne [[a]] i [[b]] to dwa prostopadłe boki schodzące się w kącie prostym. Przeciwprostokątna [[c]] to najdłuższy bok, leżący naprzeciw kąta prostego. Wysokość [[h]] nie jest wcale bokiem, lecz prostopadłym odcinkiem opuszczonym z wierzchołka kąta prostego na przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "Zawsze najpierw zidentyfikuj przeciwprostokątną: to najdłuższa z trzech długości. W trójkącie 3-4-5 liczba 5 musi być [[c]], a szybka kontrola [[3^2+4^2=5^2]] potwierdza oznaczenia. Oznaczenie 5 jako przyprostokątnej sprawiłoby, że dzieliłbyś przez niewłaściwy bok i zniszczyłbyś wynik.",
            },
          ],
          "table": {
            "headers": [
              "Zmienna",
              "Definicja",
              "Rola w obliczeniach",
            ],
            "rows": [
              [
                "a",
                "Pierwsza prostopadła przyprostokątna",
                "Mnożona przez b w liczniku",
              ],
              [
                "b",
                "Druga prostopadła przyprostokątna",
                "Mnożona przez a w liczniku",
              ],
              [
                "c",
                "Przeciwprostokątna, najdłuższy bok",
                "Dzieli ab w mianowniku",
              ],
              [
                "h",
                "Wysokość opuszczona na przeciwprostokątną",
                "Wynik wzoru",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Wzór na wysokość trójkąta prostokątnego z boków",
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór jest krótki i łatwy do zapamiętania:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Przyprostokątne są mnożone, ponieważ ich iloczyn wiąże się z polem: pole jest równe połowie [[ab]], więc [[ab]] to podwojone pole. Podzielenie przez przeciwprostokątną wyodrębnia następnie [[h]], ponieważ to samo pole jest też równe połowie [[ch]]. Wynik jest zwykłą długością, dlatego wszystkie trzy dane wejściowe muszą mieć jedną jednostkę.",
            },
            {
              "kind": "p",
              "text": "Spróbuj trójkąta 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geometrycznie 4.8 cm to najkrótsza droga od wierzchołka kąta prostego do przeciwprostokątnej. (Pełny dowód znajduje się w sekcji dowodu poniżej.)",
            },
            {
              "kind": "p",
              "text": "Przydatnym nawykiem jest sprawdzanie jednostek przed podstawieniem. Jeśli [[a]] to 60 mm, [[b]] to 8 cm, a [[c]] to 100 mm, najpierw przelicz na jedną jednostkę: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], czyli ten sam trójkąt 6-8-10, który daje te same [[4.8\\text{ cm}]]. Wzór nigdy nie naprawi za ciebie pomieszanych jednostek, więc ta jedna kontrola zapobiega najbardziej kłopotliwym błędom.",
            },
          ],
        },
        "sec-use": {
          "h2": "Jak korzystać z kalkulatora wysokości trójkąta prostokątnego z boków",
          "blocks": [
            {
              "kind": "p",
              "text": "Wykonaj te osiem kroków, aby za każdym razem uzyskać czysty wynik.",
            },
            {
              "kind": "steps",
              "steps": [
                "Znajdź kąt prosty, czyli róg, w którym dwa boki spotykają się prosto, często oznaczony małym kwadratem. Bez potwierdzonego kąta prostego ten wzór nie ma zastosowania.",
                "Zlokalizuj dwie prostopadłe przyprostokątne tworzące ten róg; nazwij je a i b w dowolnej kolejności, ponieważ wzór traktuje je symetrycznie.",
                "Zidentyfikuj przeciwprostokątną: bok leżący naprzeciw kąta prostego i najdłuższy z trzech. Potwierdź, że jest dłuższa niż obie przyprostokątne.",
                "Przed wpisaniem czegokolwiek przelicz wszystkie trzy pomiary na tę samą jednostkę. Pomieszane jednostki to najczęstszy błąd wejściowy.",
                "Wpisz a, b i c w odpowiadające im pola.",
                "Kliknij przycisk Oblicz wysokość h, aby pomnożyć przyprostokątne, podzielić przez przeciwprostokątną i wyświetlić wysokość.",
                "Odczytaj wynik i sprawdź, czy podstawione liczby zgadzają się z tym, co zamierzałeś wpisać.",
                "Użyj przycisku Resetuj, aby wyczyścić dane przed kolejnym zadaniem, tak aby stare wartości nie mogły zniszczyć nowej odpowiedzi.",
              ],
            },
            {
              "kind": "p",
              "text": "Zanim zaufasz odpowiedzi, wykonaj kontrolę Pitagorasa: [[a^2+b^2]] powinno być równe [[c^2]]. Niewielkie zaokrąglenia pomiarów są w porządku, ale duża rozbieżność oznacza, że boki nie tworzą trójkąta prostokątnego.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Obliczanie wysokości krok po kroku bez kalkulatora",
          "blocks": [
            {
              "kind": "p",
              "text": "Możesz znaleźć wysokość ręcznie w pięciu krótkich krokach. Weź [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]] i najpierw potwierdź, że trójkąt jest poprawny: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Krok 1, zapisz wzór: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Krok 2, podstaw wartości: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Krok 3, pomnóż przyprostokątne: [[9 \\times 12=108]], więc [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Krok 4, podziel: [[108 \\div 15=7.2]], więc [[h=7.2\\text{ cm}]]. Krok 5, zweryfikuj za pomocą pola. Z przyprostokątnych [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; z przeciwprostokątnej i wysokości [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Oba pola są zgodne, ponieważ opisują ten sam trójkąt. Przyprostokątne dają jedną parę podstawa-wysokość, a przeciwprostokątna drugą, ale zamknięty obszar jest identyczny. Zgodne pola potwierdzają wysokość.",
            },
            {
              "kind": "p",
              "text": "Dlaczego kontrola pola działa tak dobrze? Ponieważ sam wzór na wysokość wynika z przyrównania dwóch wyrażeń na pole, więc weryfikacja przez pole zamyka pętlę: każda arytmetyczna pomyłka w mnożeniu lub dzieleniu sprawiłaby, że oba pola by się nie zgadzały. Gdy się zgadzają, użycie wzoru i arytmetyka zostają potwierdzone jednym ruchem.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Wyjaśnienie diagramu wysokości trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Oznacz trójkąt ABC z kątem prostym w punkcie C. Wtedy AC to przyprostokątna [[a]], BC to przyprostokątna [[b]], a AB to przeciwprostokątna [[c]]. Punkt D leży na AB, a odcinek CD spotyka AB pod kątem prostym; CD to wysokość [[h]]. Małe kwadratowe oznaczenia w punktach C i D pokazują oba kąty proste.",
            },
            {
              "kind": "p",
              "text": "Wysokość CD dzieli duży trójkąt na dwa mniejsze trójkąty prostokątne, ACD i BCD, każdy z kątem prostym w punkcie D. Oba są podobne do pierwotnego trójkąta ABC i do siebie nawzajem, z czego korzystają sekcje dowodu i rzutów.",
            },
            {
              "kind": "p",
              "text": "Rysując własną wersję, zacznij od kąta prostego w punkcie C, narysuj przyprostokątne, a następnie połącz ich wolne końce, tworząc przeciwprostokątną. Opuść wysokość na końcu, sprawdzając, czy spotyka przeciwprostokątną prostopadle. Oznaczanie w kolejności a, b, c, h utrzymuje w porządku każde późniejsze obliczenie.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Trójkąt ABC z kątem prostym w punkcie C, wysokością CD opuszczoną na przeciwprostokątną AB; AC równe a, BC równe b, AB równe c, CD równe h",
            "caption": "Wysokość CD opada z kąta prostego C na przeciwprostokątną AB; h równa się (a razy b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Dlaczego wzór na wysokość działa?",
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór wynika z pola trójkąta. Pole jest równe połowie iloczynu podstawy i wysokości, a trójkąt prostokątny oferuje dwie wygodne pary podstawa-wysokość. Z przyprostokątnymi jako podstawą i wysokością:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Z przeciwprostokątną jako podstawą i wysokością h:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Oba wyrażenia opisują ten sam trójkąt, więc przyrównaj je:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Pomnóż przez 2, a następnie podziel przez [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Jeden trójkąt można mierzyć różnymi parami podstawa-wysokość, podczas gdy jego pole pozostaje stałe, więc przyrównanie obu wyrażeń jest uzasadnione, a algebra wyodrębnia [[h]]. Diagram pokazuje ten sam trójkąt dwukrotnie, raz z podstawą [[a]] i wysokością [[b]], raz z podstawą [[c]] i wysokością [[h]].",
            },
            {
              "kind": "p",
              "text": "Dowód wyjaśnia też, dlaczego wysokość jest zawsze krótsza niż przyprostokątne. Ponieważ [[c]] to najdłuższy bok, podzielenie [[ab]] przez największą z trzech długości musi dać wartość mniejszą niż każda przyprostokątna z osobna. Każdy późniejszy wzór na tej stronie, od rzutów po trójkąty podobne, jest odmianą tego jednego pomysłu opartego na polu.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Ten sam trójkąt prostokątny narysowany dwukrotnie: najpierw z podstawą a i wysokością b, potem z podstawą c i wysokością h",
            "caption": "Ten sam trójkąt, dwie pary podstawa-wysokość: pole równa się ab/2 i ch/2, więc h równa się ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Rozwiązane przykłady obliczania wysokości trójkąta prostokątnego z boków",
          "blocks": [
            {
              "kind": "p",
              "text": "Siedem poniższych przykładów przechodzi od klasycznych całkowitych trójek pitagorejskich do liczb dziesiętnych, równych przyprostokątnych i mieszanych jednostek. Każdy podąża za tym samym rytmem: podaj dane, podstaw do wzoru, uprość i zakończ jednostką. Czytanie ich po kolei buduje nawyk sprawdzania jednostek i rozsądku przed zaufaniem odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Klasyczny trójkąt 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi [[2.4\\text{ cm}]]. Ten wzorcowy przykład warto zapamiętać, ponieważ 3-4-5 to najczęstsza trójka pitagorejska, a 2.4 to schludna liczba dziesiętna.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Trójkąt 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Dokładna wysokość to [[60/13]] metra, czyli około 4.615 m. Zachowaj ułamek, gdy liczy się precyzja, ponieważ wczesne zaokrąglenie przenosi błąd do dalszych obliczeń.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Trójkąt 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi około [[7.059\\text{ cm}]]. Zamiana przyprostokątnych na 15 i 8 daje identyczny iloczyn, co potwierdza, że wzór traktuje przyprostokątne symetrycznie.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Równe przyprostokątne i trójkąt 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Równe przyprostokątne tworzą trójkąt 45-45-90, a wysokość dzieli go na dwie przystające połowy. Dokładna postać [[5\\sqrt{2}]] cm jest lepsza niż liczba dziesiętna w pracy teoretycznej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi [[1.2\\text{ m}]]. Liczby dziesiętne nie wymagają specjalnego traktowania: mnożymy i dzielimy jak zwykle, zachowując tę samą jednostkę w odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Mieszane jednostki, które najpierw trzeba ujednolicić",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]]; najpierw przelicz na centymetry: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wstępne przeliczenie daje czyste [[24\\text{ cm}]]. Nieprzeliczone metry zawyżyłyby odpowiedź stukrotnie.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Większy trójkąt 20-21-29",
            },
            {
              "kind": "p",
              "text": "Dane: [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "Wysokość wynosi około [[14.483\\text{ ft}]], wyraźnie poniżej krótszej przyprostokątnej 20 ft, jak zawsze ma to miejsce dla wysokości opuszczonej na przeciwprostokątną.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Trójkąt prostokątny o przyprostokątnych 3 i 4, przeciwprostokątnej 5 i wysokości 2.4 opuszczonej na przeciwprostokątną",
            "caption": "Trójkąt 3-4-5 narysowany w skali: wysokość h równa się (3 razy 4) / 5 = 2.4.",
          },
        },
        "sec-two-sides": {
          "h2": "Jak znaleźć wysokość, znając tylko dwa boki",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na stronie pyta o wszystkie trzy boki, ale dwa boki wystarczą, aby odzyskać trzeci za pomocą twierdzenia Pitagorasa. Są dwa przypadki, w zależności od tego, które boki znasz, i oba kończą się znajomym wzorem na wysokość.",
            },
            {
              "kind": "p",
              "text": "Logika jest w obu przypadkach taka sama: twierdzenie Pitagorasa przywraca brakujący bok, a wzór na wysokość robi resztę. Przypadek 1 dodaje przyprostokątne pod pierwiastkiem, aby znaleźć przeciwprostokątną, podczas gdy przypadek 2 odejmuje, aby odzyskać przyprostokątną. Zwróć uwagę, że przypadek 2 działa tylko wtedy, gdy znany bok jest naprawdę przeciwprostokątną; jeśli [[a>c]], pierwiastek staje się ujemny i taki trójkąt nie istnieje.",
            },
            {
              "kind": "h3",
              "text": "Przypadek 1: Znane obie przyprostokątne",
            },
            {
              "kind": "p",
              "text": "Weź [[a=7]] i [[b=24]]. Najpierw znajdź przeciwprostokątną: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Wtedy wysokość wynika dalej: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Przypadek 2: Znana jedna przyprostokątna i przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Weź [[a=8]] i [[c=10]]. Odzyskaj brakującą przyprostokątną przy użyciu przekształconego twierdzenia Pitagorasa: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Wtedy wysokość wynosi: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Traktuj je jako alternatywy edukacyjne, ponieważ kalkulator oczekuje trzech pomiarów. Dedykowany <a href=\"/right-triangle-side-calculator/\">kalkulator boków</a> może odzyskać brakującą długość, zanim przejdziesz dalej tutaj.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak zweryfikować obliczenie wysokości",
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy niezależne kontrole potwierdzają odpowiedź o wysokości. Wszystkie trzy poniżej używają trójkąta 3-4-5, w którym wysokość wynosi 2.4. Użyj co najmniej jednej z nich, gdy odpowiedź będzie podstawą dalszej pracy, ponieważ błędna wysokość po cichu psuje wszystko, co na niej zbudowano.",
            },
            {
              "kind": "h3",
              "text": "Metoda 1: Porównanie pól",
            },
            {
              "kind": "p",
              "text": "Oblicz pole oboma sposobami i wymagaj zgodności. Z przyprostokątnych: [[[A=\\frac{3 \\times 4}{2}=6]]] Z przeciwprostokątnej i wysokości: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Zgodne pola potwierdzają samą wysokość.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Rzuty na przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Podziel przeciwprostokątną na rzuty przyprostokątnych [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] i [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. Wysokość jest ich średnią geometryczną: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Odzyskanie 2.4 z innego wzoru to mocny dowód.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Kontrola Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że boki tworzą trójkąt prostokątny: [[[3^2+4^2=9+16=25=5^2]]] To potwierdza długości boków, a nie wysokość. Wykonaj ją najpierw, gdy zadanie podaje ci boki, a następnie użyj kontroli pola lub rzutów, aby potwierdzić wysokość.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Wysokość z boków a wysokość z rzutów",
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość można znaleźć na dwa sposoby. Metoda z boków na tej stronie to [[h=\\frac{ab}{c}]], wychodząca od trzech długości boków. Metoda z rzutów to [[h=\\sqrt{pq}]], wychodząca od dwóch odcinków, na które wysokość dzieli przeciwprostokątną. Obie opisują ten sam odcinek i zawsze zgadzają się dla tego samego trójkąta; wybór zależy od tego, jakie pomiary masz. Drugą drogę zobacz na stronie <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulatora wysokości z rzutów</a>.",
            },
          ],
          "table": {
            "headers": [
              "Metoda",
              "Wymagane dane",
              "Wzór",
              "Najlepsze zastosowanie",
            ],
            "rows": [
              [
                "Wysokość z boków",
                "Przyprostokątne a i b, przeciwprostokątna c",
                "h = ab / c",
                "Długości boków są znane; pierwiastki nie są potrzebne",
              ],
              [
                "Wysokość z rzutów",
                "Odcinki przeciwprostokątnej p i q",
                "h = pierwiastek kwadratowy z (p razy q)",
                "Spodek wysokości dzieli przeciwprostokątną na znane części",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Trójkąt prostokątny o wysokości h, pokazujący rzuty p i q oraz dwa mniejsze trójkąty podobne",
            "caption": "Wysokość dzieli przeciwprostokątną na p i q; wzór z boków i wzór z rzutów dają to samo h.",
          },
        },
        "sec-area-rel": {
          "h2": "Związek między wysokością, polem a przeciwprostokątną",
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość, pole i przeciwprostokątna łączą się poprzez dwa wyrażenia na jedno pole. Z przyprostokątnych: [[[A=\\frac{ab}{2}]]] Z przeciwprostokątnej i wysokości: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Rozwiązanie drugiego wyrażenia względem [[h]] daje poręczne przekształcenie: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "To oferuje drugą drogę, gdy pole jest znane bezpośrednio. Dla trójkąta o polu [[54\\text{ cm}^2]] i przeciwprostokątnej [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], czyli ta sama odpowiedź, którą dał wzór z boków dla trójkąta 9-12-15. Jeśli najpierw potrzebujesz pola, krok ten obsłuży <a href=\"/right-triangle-area-calculator/\">kalkulator pola</a>, a <a href=\"/right-triangle-area-from-altitude-calculator/\">kalkulator pola z wysokości</a> odwraca obliczenie, gdy [[h]] jest znane.",
            },
            {
              "kind": "p",
              "text": "Ta droga sprawdza się, gdy zadanie podaje pole bezpośrednio, jak wiele zadań podręcznikowych, albo gdy pole obliczono we wcześniejszej części. Zamiast szukać poszczególnych przyprostokątnych, dzielisz podwojone pole przez przeciwprostokątną i kończysz w jednej linii. To ta sama wysokość, którą daje wzór z boków, osiągnięta z innego punktu wyjścia.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Szczególne własności wysokości opuszczonej na przeciwprostokątną",
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość opuszczona na przeciwprostokątną jest zawsze krótsza niż każda przyprostokątna i krótsza niż sama przeciwprostokątna, ponieważ [[h=ab/c]] spada poniżej [[a]], gdy [[b<c]]. Równe przyprostokątne dają symetryczny trójkąt 45-45-90, w którym wysokość dzieli przeciwprostokątną na połowy. Przy ustalonej przeciwprostokątnej wysokość jest największa, gdy przyprostokątne są równe: przy przeciwprostokątnej 10 trójkąt 45-45-90 daje [[h=5]], podczas gdy trójkąt 6-8-10 daje tylko 4.8.",
            },
            {
              "kind": "p",
              "text": "Żaden podział tej samej przeciwprostokątnej nie przebije tego maksimum, czyli nierówności [[h \\le \\frac{c}{2}]], z równością tylko w przypadku 45-45-90. Skalowanie też zachowuje się prosto: podwojenie każdego boku podwaja wysokość, więc 3-4-5 przy 2.4 staje się 6-8-10 przy 4.8. Wreszcie wysokość dzieli trójkąt na dwa mniejsze trójkąty podobne do pierwotnego, dlatego wszystkie związki rzutów i pola się zgadzają.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dwa trójkąty prostokątne o wspólnej przeciwprostokątnej 10: trójkąt 45-45-90 o wysokości 5 i trójkąt 6-8-10 o wysokości 4.8",
            "caption": "Ta sama przeciwprostokątna 10: równe przyprostokątne dają najwyższą wysokość, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy obliczaniu wysokości trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Uniknij tych dziewięciu błędów, a prawie każde obliczenie wysokości pójdzie gładko.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mylenie przeciwprostokątnej z przyprostokątną. Naprawa: najpierw wybierz najdłuższy bok jako c; w trójkącie 3-4-5 liczba 5 musi być c.",
                "Mnożenie wszystkich trzech boków. Obliczanie abc nie ma tu geometrycznego sensu. Naprawa: mnoż tylko przyprostokątne, a następnie podziel przez przeciwprostokątną.",
                "Zapominanie o podzieleniu przez c. Zatrzymanie się na ab daje podwojone pole, a nie długość. Naprawa: zawsze kończ dzieleniem.",
                "Mieszanie jednostek. Wpisanie a w centymetrach i c w metrach po cichu psuje dzielenie. Naprawa: najpierw przelicz wszystko na jedną jednostkę.",
                "Używanie boków, które nie tworzą trójkąta prostokątnego. Wzór zakłada kąt prosty, więc 2, 3, 4 daje bezsens. Naprawa: najpierw sprawdź a^2 + b^2 = c^2.",
                "Mylenie wysokości z jedną z przyprostokątnych. Podręczniki pytające o wysokość zwykle mają na myśli tę opuszczoną na przeciwprostokątną. Naprawa: potwierdź, o którą wysokość pyta zadanie.",
                "Zaokrąglanie wartości pośrednich zbyt wcześnie. Zaokrąglenie 60/13 do 4.6 w trakcie obliczeń wprowadza błąd. Naprawa: zaokrąglaj tylko końcową odpowiedź.",
                "Błędne stosowanie wzoru na pole. Zapisanie pole = c razy h bez połowy podwaja odpowiedź. Naprawa: przy rozwiązywaniu względem h używaj pole = ch/2.",
                "Mylenie wysokości opuszczonej na przeciwprostokątną z wysokością względem przyprostokątnej. To różne odcinki. Naprawa: wysokość opuszczona na przeciwprostokątną to krótszy wewnętrzny odcinek h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania obliczania wysokości trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Uczniowie spotykają tę wysokość w zadaniach domowych z geometrii dotyczących pola, podobieństwa i średniej geometrycznej, podczas gdy nauczyciele używają jej, aby połączyć twierdzenie Pitagorasa ze wzorami na pole na jednym rysunku, ponieważ pojedynczy diagram niesie zarówno [[ab/2]], jak i [[ch/2]]. Kreślarze i projektanci używają jej, gdy trójkątny panel lub wspornik musi być wymiarowany od jego wysokości, a trójkątne układy stężeń czasem wymagają najkrótszej odległości poprzecznej między węzłem a prętem.",
            },
            {
              "kind": "p",
              "text": "Geodeci pracujący z prostokątnymi liniami celowania używają tego samego związku, aby porównywać obliczone odległości z zmierzonymi. Traktuj je jako modele matematyczne z wyidealizowanymi pomiarami: prawdziwa praca inżynierska lub budowlana wymaga odpowiednich metod pomiaru, określonych założeń projektowych i standardów zawodowych, zanim jakikolwiek wynik wzoru zostanie zaufany na budowie.",
            },
            {
              "kind": "p",
              "text": "W klasie wysokość pełni też rolę tematu mostkowego: wiąże twierdzenie Pitagorasa, wzory na pole i trójkąty podobne w jednej figurze. Jeden dobrze narysowany diagram może unieść całą lekcję, dlatego ta konstrukcja pojawia się tak często w podręcznikach.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z rozwiązaniami",
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać każde zadanie samodzielnie, a następnie sprawdź rozwiązania poniżej.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne 6 cm i 8 cm oraz przeciwprostokątną 10 cm. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Trójka pitagorejska",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne 12 m i 16 m oraz przeciwprostokątną 20 m. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne 4.5 in i 6 in oraz przeciwprostokątną 7.5 in. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Równe przyprostokątne",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma dwie równe przyprostokątne po 14 ft każda. Znajdź przeciwprostokątną, a następnie wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma boki 2.4 m, 70 cm i 2.5 m. Najpierw przelicz jednostki, a następnie znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Przeskalowany wzorzec 3-4-5 daje czystą liczbę dziesiętną.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] potwierdza trójkę, następnie [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Liczby dziesiętne dzielą się schludnie, gdy trójka jest spójna.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], następnie [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], dokładnie połowa przeciwprostokątnej, jak oczekiwano dla 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. W centymetrach: [[a=240]], [[b=70]], [[c=250]], oraz [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] się zgadza. Następnie [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Pokrewne kalkulatory trójkąta prostokątnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Mając wzór na wysokość w ręku, wybierz kolejne narzędzie według tego, co znasz. Jeśli znasz odcinki przeciwprostokątnej zamiast boków, przejdź do kalkulatora rzutów. Jeśli znasz wysokość i chcesz pole, narzędzie <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">pole z przeciwprostokątnej i wysokości</a> odwraca obliczenie z sekcji o polu. Pięć pokrewnych kalkulatorów poniżej obejmuje każde sąsiednie obliczenie. Zacznij od narzędzia pasującego do pomiarów, które już masz, i niech każdy wynik sprawdzi następny.",
            },
          ],
        },
      },
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Jaki jest wzór na wysokość z trzech boków?",
          "answer": "Wzór to [[h=\\frac{ab}{c}]], gdzie [[a]] i [[b]] to dwie prostopadłe przyprostokątne, a [[c]] to przeciwprostokątna. Pomnóż przyprostokątne, a następnie podziel przez przeciwprostokątną. Wynik jest długością w tej samej jednostce co wpisane boki.",
        },
        {
          "question": "Jak znaleźć wysokość trójkąta prostokątnego?",
          "answer": "Zidentyfikuj kąt prosty, oznacz dwie przyprostokątne [[a]] i [[b]] oraz przeciwprostokątną [[c]], upewniając się, że wszystkie jednostki są zgodne. Następnie oblicz [[h=\\frac{ab}{c}]]. Dla trójkąta 3-4-5 daje to [[h=\\frac{12}{5}=2.4]], odcinek krótszy niż każda przyprostokątna.",
        },
        {
          "question": "Dlaczego przeciwprostokątna jest w mianowniku?",
          "answer": "Wynika to z dowodu opartego na polu. Pole jest równe [[ab/2]] przy użyciu przyprostokątnych i [[ch/2]] przy użyciu przeciwprostokątnej jako podstawy. Przyrównanie obu daje [[ab=ch]], a rozwiązanie względem [[h]] stawia [[c]] w mianowniku. Im dłuższa przeciwprostokątna, tym krótsza wysokość przy danym polu.",
        },
        {
          "question": "Czy mogę obliczyć wysokość, znając tylko dwa boki?",
          "answer": "Tak, z jednym dodatkowym krokiem. Jeśli znasz obie przyprostokątne, najpierw znajdź przeciwprostokątną za pomocą [[c=\\sqrt{a^2+b^2}]]. Jeśli znasz jedną przyprostokątną i przeciwprostokątną, znajdź drugą przyprostokątną za pomocą [[b=\\sqrt{c^2-a^2}]]. Następnie użyj [[h=\\frac{ab}{c}]] jak zwykle.",
        },
        {
          "question": "Czy wysokość do przeciwprostokątnej to to samo, co zwykła wysokość trójkąta?",
          "answer": "To zależy, o którą wysokość chodzi. Wysokość zwykle oznacza prostopadłą odległość do wybranej podstawy, więc wysokość do przeciwprostokątnej jest wysokością, gdy podstawą jest przeciwprostokątna. Jeśli podstawą wybrano przyprostokątną, wysokością jest druga przyprostokątna, zupełnie inny odcinek.",
        },
        {
          "question": "Czy wysokość jest zawsze krótsza niż przyprostokątne?",
          "answer": "Tak, wysokość opuszczona na przeciwprostokątną jest zawsze krótsza niż każda przyprostokątna tego samego trójkąta. To najkrótszy odcinek od wierzchołka kąta prostego do przeciwprostokątnej, podczas gdy każda przyprostokątna jest dłuższą drogą do tego samego boku. Jest też krótsza niż sama przeciwprostokątna.",
        },
        {
          "question": "Czy mogę używać tego wzoru dla dowolnego trójkąta?",
          "answer": "Nie, tylko dla trójkątów prostokątnych. Wyprowadzenie zależy od prostopadłości przyprostokątnych, co daje pole jako [[ab/2]]. Dla trójkąta ostrokątnego lub rozwartokątnego znajdź wysokość zamiast tego przy użyciu ogólnego wzoru na pole lub trygonometrii. Zawsze najpierw potwierdź kąt prosty.",
        },
        {
          "question": "Co jeśli długości moich boków nie spełniają twierdzenia Pitagorasa?",
          "answer": "Wtedy nie tworzą trójkąta prostokątnego i wzór nie ma zastosowania. Zmierz boki ponownie lub sprawdź oznaczenia, ponieważ najdłuższy bok musi być przeciwprostokątną. Niewielkie różnice zaokrągleń są w porządku, ale duża rozbieżność oznacza, że trójkąt nie jest prostokątny.",
        },
        {
          "question": "Jak znaleźć wysokość trójkąta 3-4-5?",
          "answer": "Pomnóż przyprostokątne i podziel przez przeciwprostokątną: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (lub dowolnej jednostki, w jakiej są twoje boki). Trójkąt 3-4-5 to klasyczny przykład, ponieważ wszystkie trzy boki są liczbami całkowitymi.",
        },
        {
          "question": "Jaka jest wysokość trójkąta 5-12-13?",
          "answer": "Wynosi [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], w jednostce boków. Zachowaj dokładny ułamek [[60/13]], gdy potrzebujesz pełnej precyzji, i zaokrąglij do 4.615 tylko dla końcowej podawanej odpowiedzi.",
        },
        {
          "question": "Jaki jest związek wysokości z polem?",
          "answer": "Pole można zapisać na dwa sposoby: [[A=\\frac{ab}{2}]] i [[A=\\frac{ch}{2}]]. Przekształcenie drugiego daje [[h=\\frac{2A}{c}]], więc znajomość pola i przeciwprostokątnej to kolejna droga do tej samej wysokości. Obie formy opisują identyczny trójkąt.",
        },
        {
          "question": "Czym różni się wysokość z boków od wysokości z rzutów?",
          "answer": "Wysokość z boków używa [[h=\\frac{ab}{c}]] z trzema długościami boków. Wysokość z rzutów używa [[h=\\sqrt{pq}]] z dwoma odcinkami przeciwprostokątnej. Obie znajdują ten sam odcinek; wybór zależy od tego, jakie pomiary masz.",
        },
      ],
      "relatedHeading": "Odkryj pokrewne kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Wybierz kalkulator pasujący do pomiarów, które już masz.",
      "relatedItems": [
        "Kalkulator wysokości trójkąta prostokątnego",
        "Kalkulator wysokości trójkąta prostokątnego z rzutów",
        "Kalkulator rzutu trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego z wysokości",
      ],
    },
};
