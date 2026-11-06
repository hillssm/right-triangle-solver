// inradiusGuideTranslations.bpl.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B4_PL = {
  "pl": {
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wzór ma postać [[r = \\frac{a+b-c}{2}]], gdzie [[a]] i [[b]] to przyprostokątne, [[c]] to przeciwprostokątna, a [[r]] to promień okręgu wpisanego. Dodaj dwie przyprostokątne, odejmij przeciwprostokątną i podziel przez dwa. Na przykład trójkąt 6-8-10 daje promień okręgu wpisanego równy 2.",
          "question": "Jaki jest wzór na promień okręgu wpisanego w trójkąt prostokątny?",
        },
        {
          "answer": "Promień okręgu wpisanego to promień okręgu wpisanego, okręgu, który mieści się wewnątrz trójkąta i dotyka wszystkich trzech boków. Jest to prostopadła odległość od środka okręgu wpisanego do dowolnego boku. W trójkącie 6-8-10 promień okręgu wpisanego wynosi 2, więc okrąg wpisany ma promień 2 jednostek.",
          "question": "Co oznacza promień okręgu wpisanego?",
        },
        {
          "answer": "Okrąg wpisany to okrąg narysowany w całości wewnątrz trójkąta tak, aby dotykał wszystkich trzech boków, po jednym punkcie styczności na każdym boku. Każdy trójkąt ma dokładnie jeden okrąg wpisany. Różni się od okręgu opisanego, który przechodzi przez trzy wierzchołki.",
          "question": "Czym jest okrąg wpisany?",
        },
        {
          "answer": "Środek okręgu wpisanego to punkt, w którym przecinają się trzy wewnętrzne dwusieczne kątów trójkąta. Zawsze leży wewnątrz trójkąta. W trójkącie prostokątnym z kątem prostym przy C leży na dwusiecznej kąta 90 stopni, w odległości [[r]] od każdego boku.",
          "question": "Gdzie znajduje się środek okręgu wpisanego?",
        },
        {
          "answer": "Odcinki styczne od wierzchołka kąta prostego mają długość [[r]], więc przyprostokątne wynoszą [[a = r+x]] i [[b = r+y]], natomiast przeciwprostokątna wynosi [[c = x+y]]. Dodanie przyprostokątnych daje [[a+b = 2r+c]], więc odjęcie [[c]] pozostawia [[2r]]. Odejmowanie usuwa wspólne długości stycznych i wyodrębnia promień okręgu wpisanego.",
          "question": "Dlaczego wzór na promień okręgu wpisanego odejmuje przeciwprostokątną?",
        },
        {
          "answer": "Dodanie dwóch przyprostokątnych liczy promień okręgu wpisanego dwukrotnie, raz w każdej przyprostokątnej, ponieważ każda przyprostokątna zawiera odcinek styczny o długości [[r]] od wierzchołka kąta prostego. Suma [[a+b-c]] jest więc równa [[2r]], a nie [[r]], więc podzielenie przez dwa daje pojedynczy promień okręgu wpisanego.",
          "question": "Dlaczego dzielimy przez dwa?",
        },
        {
          "answer": "Nie bezpośrednio, ponieważ wzór potrzebuje też przeciwprostokątnej. Najpierw znajdź przeciwprostokątną za pomocą [[c = \\sqrt{a^2+b^2}]], a potem użyj [[r = \\frac{a+b-c}{2}]]. Dla przyprostokątnych 6 i 8 przeciwprostokątna wynosi 10, a promień okręgu wpisanego 2. Użyj kalkulatora boków, aby znaleźć brakującą przeciwprostokątną.",
          "question": "Czy mogę obliczyć promień okręgu wpisanego, używając tylko dwóch przyprostokątnych?",
        },
        {
          "answer": "Tak. Wzór ma postać [[r = \\frac{A}{s}]], gdzie [[A]] to pole, a [[s]] to półobwód. W trójkącie prostokątnym [[A = \\frac{ab}{2}]] i [[s = \\frac{a+b+c}{2}]]. Dla trójkąta 6-8-10 [[A = 24]] i [[s = 12]], więc [[r = 2]]. Kalkulator na tej stronie używa wzoru z trzema bokami, więc traktuj drogę przez pole jako niezależne sprawdzenie.",
          "question": "Czy mogę obliczyć promień okręgu wpisanego za pomocą pola i półobwodu?",
        },
        {
          "answer": "Nie. Promień okręgu wpisanego to promień okręgu wewnątrz trójkąta dotykającego jego boków, [[r = \\frac{a+b-c}{2}]], natomiast promień okręgu opisanego to promień okręgu przechodzącego przez wierzchołki, [[R = \\frac{c}{2}]]. W trójkącie 6-8-10 wynoszą one 2 i 5.",
          "question": "Czy promień okręgu wpisanego jest taki sam jak promień okręgu opisanego?",
        },
        {
          "answer": "Nie. Promień okręgu wpisanego jest zawsze mniejszy od każdej przyprostokątnej, ponieważ okrąg wpisany musi zmieścić się wewnątrz trójkąta. W trójkącie 3-4-5 promień okręgu wpisanego wynosi 1, mniej niż najkrótsza przyprostokątna równa 3. Odpowiedź większa od najkrótszej przyprostokątnej sygnalizuje błąd, zwykle przyprostokątną wpisaną jako przeciwprostokątną.",
          "question": "Czy promień okręgu wpisanego może być większy od najkrótszej przyprostokątnej trójkąta?",
        },
        {
          "answer": "Przeciwprostokątna leży naprzeciw kąta prostego, największego kąta w trójkącie, a najdłuższy bok zawsze leży naprzeciw największego kąta. Twierdzenie Pitagorasa też to wymusza: [[c^2 = a^2+b^2]] jest większe zarówno od [[a^2]], jak i od [[b^2]] osobno, więc [[c]] jest dłuższe od [[a]] i dłuższe od [[b]].",
          "question": "Dlaczego przeciwprostokątna musi być najdłuższym bokiem?",
        },
        {
          "answer": "Przelicz za pomocą pierwotnego wzoru, potem sprawdź polem i półobwodem, [[r = \\frac{A}{s}]], i potwierdź [[a^2+b^2 = c^2]] dla boków. Potwierdź też, że odpowiedź jest dodatnia, mniejsza od każdej przyprostokątnej i w tej samej jednostce co boki. Jeśli wszystkie cztery sprawdzenia są zgodne, odpowiedź jest poprawna.",
          "question": "Jak mogę sprawdzić, czy moje obliczenie promienia okręgu wpisanego jest poprawne?",
        },
      ],
      "meta": {
        "description": "Użyj kalkulatora promienia okręgu wpisanego w trójkąt prostokątny, aby obliczyć r z przyprostokątnych a i b oraz przeciwprostokątnej c, ze wzorem, rozwiązanym przykładem 6-8-10 i sprawdzeniami krok po kroku.",
        "primaryKeyword": "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
        "slug": "right-triangle-inradius-calculator",
        "title": "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny - oblicz r z boków",
      },
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego, więc wybierz narzędzie odpowiadające pomiarowi, który chcesz znaleźć.",
      "relatedItems": [
        "Kalkulator promienia trójkąta prostokątnego",
        "Kalkulator promienia okręgu opisanego na trójkącie prostokątnym",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator półobwodu trójkąta prostokątnego",
        "Kalkulator boków trójkąta prostokątnego",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to praca domowa z geometrii i praca w klasie, gdzie zadania o promieniu okręgu wpisanego sprawdzają, czy uczniowie potrafią rozpoznać przeciwprostokątną, zastosować [[r = \\frac{a+b-c}{2}]] i sprawdzić wynik polem i półobwodem. Ćwiczenia z konstrukcji okręgu wykorzystują tę samą ideę: mając trójkąt prostokątny, narysuj jego okrąg wpisany, znajdując środek okręgu wpisanego tam, gdzie przecinają się dwusieczne kątów, i ustawiając cyrkiel na promień okręgu wpisanego.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny wykorzystuje okrąg wpisany, gdy okrąg musi zmieścić się dokładnie wewnątrz trójkątnej ramy albo gdy zaokrąglony narożnik musi dotykać dwóch krawędzi kształtu. Modelowanie geometryczne i geometria analityczna wykorzystują środek okręgu wpisanego jako punkt wewnątrz trójkąta, który jest w równej odległości od wszystkich trzech boków, co jest naturalnym środkiem dla kształtu wpisanego.",
            },
            {
              "kind": "p",
              "text": "Nauczyciele wykorzystują ten temat jako lekcję łączącą trójkąty i okręgi, ponieważ okrąg wpisany to jedno z pierwszych miejsc, w których te dwa działy się spotykają. Długości stycznych, dwusieczne kątów, pole i półobwód występują na jednym rysunku, więc promień okręgu wpisanego to zwięzły sposób, aby powtórzyć je razem. Prawdziwe projekty, które potrzebują okręgu wpisanego, wymagają też tolerancji i ograniczeń materiałowych wykraczających poza tę stronę, więc traktuj wynik jako dokładną wartość geometryczną, a praktyczne marginesy dodawaj osobno.",
            },
          ],
          "h2": "Praktyczne zastosowania promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-area-semiperimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Istnieje drugi sposób, aby znaleźć promień okręgu wpisanego, używając pola i półobwodu trójkąta:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[A]] to pole trójkąta, a [[s]] to półobwód, czyli połowa obwodu. W trójkącie prostokątnym pole to połowa iloczynu przyprostokątnych, [[A = \\frac{ab}{2}]], ponieważ dwie przyprostokątne pełnią rolę podstawy i wysokości. Półobwód wynosi [[s = \\frac{a+b+c}{2}]]. <a href=\"/right-triangle-area-calculator/\">Kalkulator pola trójkąta prostokątnego</a> znajduje [[A]] z dwóch przyprostokątnych, a <a href=\"/right-triangle-semiperimeter-calculator/\">kalkulator półobwodu trójkąta prostokątnego</a> znajduje [[s]] ze wszystkich trzech boków.",
            },
            {
              "kind": "p",
              "text": "Podstawienie wyrażeń dla trójkąta prostokątnego daje [[r = \\frac{ab/2}{(a+b+c)/2}]], a połówki skracają się, pozostawiając [[r = \\frac{ab}{a+b+c}]]. Jest to równoważny wzór z długości boków z początku przewodnika i daje tę samą odpowiedź co [[r = \\frac{a+b-c}{2}]] dla każdego prawidłowego trójkąta prostokątnego, ponieważ oba wyrażenia są równe, gdy tylko zachodzi [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Użyj trójkąta 6-8-10, aby zobaczyć, że obie drogi są zgodne. Pole wynosi [[A = \\frac{6 \\times 8}{2} = 24]], a półobwód [[s = \\frac{6+8+10}{2} = 12]], więc [[r = \\frac{24}{12} = 2]]. Standardowy wzór daje ten sam wynik, [[r = \\frac{6+8-10}{2} = 2]]. Kalkulator na tej stronie używa wzoru z trzema bokami, a droga przez pole jest przydatnym niezależnym sprawdzeniem.",
            },
          ],
          "h2": "Jak obliczyć promień okręgu wpisanego za pomocą pola i półobwodu",
          "image": {
            "alt": "Trójkąt prostokątny podzielony na trzy mniejsze trójkąty mające wspólny środek okręgu wpisanego, pokazujący, że pole równa się r razy s",
            "caption": "Trzy trójkąty mające wspólny punkt I: ich pola sumują się do A = r razy s.",
            "src": "inradius-area-semiperimeter.svg",
          },
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie ma trzy pola wejściowe, po jednym na każdy bok trójkąta, oraz jeden wynik. Wpisz trzy długości boków, wszystkie w tej samej jednostce, a następnie kliknij Oblicz promień okręgu wpisanego r. Wynik jest długością, promieniem okręgu wpisanego, podanym w tej samej jednostce.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna a to pierwszy bok tworzący kąt prosty, a przyprostokątna b to drugi. Nie ma znaczenia, którą przyprostokątną nazwiesz [[a]], a którą [[b]], ponieważ wzór je do siebie dodaje. Przeciwprostokątna [[c]] to bok leżący naprzeciw kąta prostego i musi być najdłuższym bokiem trójkąta. Jeśli liczba wpisana dla [[c]] jest krótsza od przyprostokątnej, trzy długości nie mogą utworzyć trójkąta prostokątnego, a wynik nie będzie miał sensu.",
            },
            {
              "kind": "p",
              "text": "Zachowaj te same jednostki we wszystkich trzech polach. Jeśli [[a]] i [[b]] są w centymetrach, [[c]] też musi być w centymetrach, a odpowiedź wychodzi w centymetrach. Odczytuj odpowiedź jako promień, a nie średnicę: promień biegnie od środka okręgu do jego krawędzi, natomiast średnica biegnie przez cały okrąg. Użyj Resetuj, aby wyczyścić pola przed rozpoczęciem nowego zadania.",
            },
          ],
          "h2": "Obliczanie promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram pokazuje trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna [[a]], bok BC to przyprostokątna [[b]], a bok AB to przeciwprostokątna [[c]]. Punkt [[I]] oznacza środek okręgu wpisanego wewnątrz trójkąta, a okrąg o środku w [[I]] dotyka wszystkich trzech boków.",
            },
            {
              "kind": "p",
              "text": "Czytaj diagram w tej kolejności. Zacznij od A, przejdź wzdłuż przyprostokątnej [[a]] w dół do C, potem wzdłuż przyprostokątnej [[b]] w poprzek do B, a następnie wróć wzdłuż przeciwprostokątnej z B do A. Okrąg wpisany leży wewnątrz tej granicy, dotykając przyprostokątnej [[a]] w jednym punkcie, przyprostokątnej [[b]] w drugim punkcie i przeciwprostokątnej w trzecim punkcie. Z punktu [[I]] trzy krótkie odcinki biegną do tych trzech punktów, a każdy z nich jest promieniem o długości [[r]].",
            },
            {
              "kind": "p",
              "text": "Każdy promień spotyka swój bok pod kątem prostym, co jest oznaką stycznej: bok tylko muska okrąg w tym punkcie, zamiast go przecinać. Wszystkie trzy promienie mają tę samą długość, dlatego jeden okrąg może dotykać wszystkich trzech boków naraz. Okrąg nie przechodzi przez żaden wierzchołek: wierzchołki leżą poza okręgiem, a odcinki styczne od każdego wierzchołka do okręgu to długości [[r]], [[x]] i [[y]] użyte w wyprowadzeniu powyżej.",
            },
          ],
          "h2": "Objaśnienie diagramu okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Przykład 1: Podstawowy trójkąt 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 3]], [[b = 4]] i [[c = 5]], wzór daje [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Okrąg wpisany ma promień 1 jednostki. Sprawdź najpierw trójkąt: [[3^2+4^2 = 9+16 = 25 = 5^2]], więc jest to prawidłowy trójkąt prostokątny.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Znany trójkąt 6-8-10",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 6]], [[b = 8]] i [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Okrąg wpisany ma promień 2 jednostek, dwukrotnie większy niż promień trójkąta 3-4-5, ponieważ ten trójkąt to trójkąt 3-4-5 przeskalowany dwukrotnie. Sprawdzenie: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Trójkąt 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 5]], [[b = 12]] i [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Promień okręgu wpisanego wynosi 2 jednostki, tyle samo co w trójkącie 6-8-10, mimo że trójkąt jest większy i inaczej ukształtowany. Sprawdzenie: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Trójkąt 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 8]], [[b = 15]] i [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Okrąg wpisany ma promień 3 jednostek. Sprawdzenie: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Większe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 9]], [[b = 12]] i [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. To trójkąt 3-4-5 przeskalowany 3 razy, więc promień okręgu wpisanego jest 3 razy większy od promienia okręgu wpisanego trójkąta 3-4-5, który wynosi 1. Sprawdzenie: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 4.5]], [[b = 6]] i [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Promień okręgu wpisanego wynosi 1,5 jednostki. Liczby dziesiętne niczego nie zmieniają w metodzie: dodaj, odejmij, podziel przez dwa. Sprawdzenie: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 30]] cm, [[b = 40]] cm i [[c = 0.5]] m, najpierw przelicz przeciwprostokątną: 0,5 m to 50 cm, ponieważ 1 m to 100 cm. Teraz wszystkie trzy boki używają centymetrów, więc [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Sprawdzenie: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mieszanie metrów i centymetrów bez przeliczania dałoby złą odpowiedź, więc zawsze najpierw przeliczaj.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Większe wartości dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 7.2]], [[b = 9.6]] i [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Promień okręgu wpisanego wynosi 2,4 jednostki. To trójkąt 3-4-5 przeskalowany 2,4 razy, więc promień okręgu wpisanego jest 2,4 razy większy od promienia okręgu wpisanego trójkąta 3-4-5, który wynosi 1. Sprawdzenie: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
          "h2": "Przykłady obliczania promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór na promień okręgu wpisanego w trójkąt prostokątny jest na tyle krótki, że można go zapamiętać od razu:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[r]] to promień okręgu wpisanego, [[a]] to pierwsza przyprostokątna, [[b]] to druga przyprostokątna, a [[c]] to przeciwprostokątna. Wzór działa w trzech etapach, a każdy etap ma jasne znaczenie.",
            },
            {
              "kind": "p",
              "text": "Etap 1: dodaj dwie przyprostokątne, [[a+b]]. Ta łączna długość jest zawsze większa od przeciwprostokątnej, ponieważ dwie przyprostokątne razem rozciągają się dalej niż prosta linia w poprzek. Etap 2: odejmij przeciwprostokątną, [[a+b-c]]. Pozostaje nadwyżka, o jaką przyprostokątne przewyższają przeciwprostokątną. Etap 3: podziel przez dwa, [[r = \\frac{a+b-c}{2}]]. Dzielenie zamienia tę pozostałą długość w promień okręgu wpisanego, a sekcja z wyprowadzeniem poniżej pokazuje, dlaczego dzielenie na pół jest dokładnie trafne.",
            },
            {
              "kind": "p",
              "text": "Weź trójkąt 6-8-10: [[a+b = 14]], potem [[14-10 = 4]], potem [[\\frac{4}{2} = 2]], więc [[r = 2]]. Wzór dotyczy tylko trójkątów prostokątnych. Dla trójkąta, który nie jest prostokątny, promień okręgu wpisanego nadal jest równy polu podzielonemu przez półobwód, [[r = \\frac{A}{s}]], ale skrót [[r = \\frac{a+b-c}{2}]] nie ma zastosowania, ponieważ jego dowód zależy od kąta prostego.",
            },
          ],
          "h2": "Wzór na promień okręgu wpisanego w trójkąt prostokątny",
          "image": {
            "alt": "Trójkąt prostokątny oznaczony przyprostokątnymi a i b, przeciwprostokątną c, środkiem okręgu wpisanego I i promieniem okręgu wpisanego r, obok wzoru r równa się a plus b minus c dzielone przez 2",
            "caption": "Wzór wykorzystuje wszystkie trzy boki: dodaj przyprostokątne, odejmij przeciwprostokątną, podziel przez dwa.",
            "src": "inradius-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście krótkich kroków prowadzi od oznaczonego trójkąta do sprawdzonej odpowiedzi. Kroki w kolejności to:",
            },
            {
              "kind": "steps",
              "steps": [
                "Rozpoznaj trójkąt prostokątny w swoim zadaniu i potwierdź, że ma kąt prosty.",
                "Znajdź wierzchołek kąta prostego, zwykle oznaczony małym kwadratem, i nazwij go C.",
                "Rozpoznaj pierwszą prostopadłą przyprostokątną a, jeden z dwóch boków tworzących kąt prosty.",
                "Rozpoznaj drugą prostopadłą przyprostokątną b, drugi bok tworzący kąt prosty.",
                "Rozpoznaj pełną przeciwprostokątną c, bok leżący naprzeciw kąta prostego.",
                "Potwierdź, że c jest najdłuższym bokiem. Jeśli nie jest, popraw oznaczenia na diagramie przed kontynuowaniem.",
                "Sprawdź, czy trzy boki spełniają twierdzenie Pitagorasa, [[a^2+b^2 = c^2]].",
                "Wybierz zgodne jednostki miary i przelicz każdy pomiar, który używa innej jednostki.",
                "Wpisz przyprostokątną a w polu Przyprostokątna a.",
                "Wpisz przyprostokątną b w polu Przyprostokątna b.",
                "Wpisz przeciwprostokątną c w polu Przeciwprostokątna c.",
                "Kliknij Oblicz promień okręgu wpisanego r i odczytaj wynik.",
                "Sprawdź wynik: musi być dodatni, w tej samej jednostce co boki i mniejszy od każdej przyprostokątnej.",
                "Użyj Resetuj, gdy rozpoczynasz kolejne obliczenie.",
              ],
            },
            {
              "kind": "p",
              "text": "Wpisanie niewłaściwego boku jako [[c]] to błąd, który sprawia najwięcej kłopotów. Jeśli przyprostokątna zostanie wpisana w polu przeciwprostokątnej, wzór odejmuje przyprostokątną zamiast przeciwprostokątnej, a odpowiedź jest za duża. Zawsze sprawdź, czy wartość w polu przeciwprostokątnej jest najdłuższa z trzech, zanim klikniesz Oblicz.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-incenter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Środek okręgu wpisanego w trójkąt to punkt, w którym przecinają się jego trzy wewnętrzne dwusieczne kątów. Dwusieczna kąta to prosta dzieląca kąt na dwie równe połowy. Narysuj dwusieczną kąta A, dwusieczną kąta B i dwusieczną kąta C, a wszystkie trzy przetną się w jednym punkcie. Tym punktem jest środek okręgu wpisanego [[I]], środek okręgu wpisanego.",
            },
            {
              "kind": "p",
              "text": "Środek okręgu wpisanego jest w równej odległości od wszystkich trzech boków ze względu na to, jak zachowują się dwusieczne kątów. Każdy punkt na dwusiecznej kąta jest w tej samej odległości od dwóch boków tworzących ten kąt. Punkt leżący na dwóch dwusiecznych naraz jest więc w tej samej odległości od wszystkich trzech boków, a środek okręgu wpisanego leży na wszystkich trzech dwusiecznych. Ta wspólna odległość to promień okręgu wpisanego [[r]], więc okrąg o środku w [[I]] i promieniu [[r]] dotyka każdego boku.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym z kątem prostym przy C środek okręgu wpisanego leży na dwusiecznej kąta 90 stopni, która biegnie po przekątnej przez narożnik przy C pod kątem 45 stopni do każdej przyprostokątnej. Środek okręgu wpisanego zawsze leży wewnątrz trójkąta, nigdy na boku ani na zewnątrz, ponieważ trzy dwusieczne przecinają się we wnętrzu. Dlatego okrąg wpisany mieści się wewnątrz trójkąta, zamiast z niego wystawać.",
            },
          ],
          "h2": "Środek okręgu wpisanego w trójkąt prostokątny",
          "image": {
            "alt": "Trójkąt prostokątny ze wszystkimi trzema wewnętrznymi dwusiecznymi kątów przecinającymi się w środku okręgu wpisanego I",
            "caption": "Trzy dwusieczne kątów przecinają się w punkcie I, środku okręgu wpisanego, w odległości r od każdego boku.",
            "src": "inradius-angle-bisectors.svg",
          },
        },
        "sec-incircle": {
          "blocks": [
            {
              "kind": "p",
              "text": "Okrąg wpisany to okrąg narysowany w całości wewnątrz trójkąta tak, aby dotykał, czyli był styczny do, wszystkich trzech boków. Każdy bok trójkąta jest prostą styczną do okręgu: spotyka okrąg w dokładnie jednym punkcie i nie przecina go. Te trzy punkty spotkania nazywają się punktami styczności, po jednym na każdym boku.",
            },
            {
              "kind": "p",
              "text": "Promień poprowadzony ze środka okręgu wpisanego do punktu styczności jest zawsze prostopadły do tego boku. Jest to ogólny fakt o okręgach: promień do punktu styczności spotyka prostą styczną pod kątem prostym. Ponieważ środek okręgu wpisanego jest w tej samej odległości od wszystkich trzech boków, trzy promienie do trzech punktów styczności mają tę samą długość [[r]], więc jeden okrąg pasuje do wszystkich trzech boków naraz.",
            },
            {
              "kind": "p",
              "text": "Każdy trójkąt ma dokładnie jeden okrąg wpisany. Trzy dwusieczne kątów trójkąta przecinają się w jednym punkcie, środku okręgu wpisanego, a odległość od tego punktu do boków wyznacza promień. Drugi, inny okrąg nie mógłby dotykać wszystkich trzech boków od wewnątrz, ponieważ jego środek musiałby być w równej odległości od wszystkich trzech boków, a tylko środek okręgu wpisanego ma tę własność. Zauważ, że okrąg wpisany nie jest okręgiem przechodzącym przez wierzchołki: dotyka boków od wewnątrz i nigdy nie sięga wierzchołka.",
            },
          ],
          "h2": "Czym jest okrąg wpisany w geometrii trójkąta prostokątnego?",
          "image": {
            "alt": "Okrąg wpisany dotykający wszystkich trzech boków trójkąta prostokątnego w trzech punktach styczności, z prostopadłymi promieniami",
            "caption": "Trzy punkty styczności: każdy promień spotyka swój bok pod kątem 90 stopni.",
            "src": "inradius-tangency-points.svg",
          },
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Znajdź promień okręgu wpisanego w trójkąt prostokątny z jego dwóch przyprostokątnych i przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Promień okręgu wpisanego to promień okręgu wpisanego, koła, które mieści się wewnątrz trójkąta i dotyka wszystkich trzech boków. Kalkulator potrzebuje trzech liczb: przyprostokątnej [[a]], przyprostokątnej [[b]] i przeciwprostokątnej [[c]], przy czym [[a]] i [[b]] to boki tworzące kąt prosty, a [[c]] to bok leżący naprzeciw niego. Wzór ma postać [[r = \\frac{a+b-c}{2}]], gdzie [[r]] to promień okręgu wpisanego. Dodaje on dwie przyprostokątne, odejmuje przeciwprostokątną i dzieli wynik przez dwa.",
            },
            {
              "kind": "p",
              "text": "Na przykład trójkąt 6-8-10 daje [[r = \\frac{6+8-10}{2} = 2]]. Ta dwójka to promień okręgu wewnątrz trójkąta, mierzony w tej samej jednostce co boki. Okrąg dotyka każdego boku w dokładnie jednym punkcie, a jego środek, środek okręgu wpisanego, leży w tej samej odległości od wszystkich trzech boków.",
            },
          ],
          "h2": "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-legs-known": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie wymaga wszystkich trzech długości boków, więc nie może działać na samych dwóch przyprostokątnych. Jeśli znane są tylko [[a]] i [[b]], najpierw znajdź przeciwprostokątną z twierdzenia Pitagorasa, a potem użyj wzoru na promień okręgu wpisanego. Dwa kroki to:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj [[a = 6]] i [[b = 8]]. Najpierw oblicz przeciwprostokątną: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Potem oblicz promień okręgu wpisanego: [[r = \\frac{6+8-10}{2} = 2]]. <a href=\"/right-triangle-side-calculator/\">Kalkulator boków trójkąta prostokątnego</a> znajduje brakującą przeciwprostokątną z dwóch przyprostokątnych, co jest tym samym pierwszym krokiem, który tu zastosowano, a <a href=\"/pythagorean-theorem-calculator/\">kalkulator twierdzenia Pitagorasa</a> wykonuje to samo obliczenie bezpośrednio. Nie pomijaj pierwszego kroku: wpisanie przyprostokątnej w polu przeciwprostokątnej daje zły promień okręgu wpisanego, jak pokazuje sekcja o błędach poniżej.",
            },
          ],
          "h2": "Jak obliczyć promień okręgu wpisanego, gdy znane są tylko dwie przyprostokątne",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Używanie wzoru na promień okręgu opisanego zamiast wzoru na promień okręgu wpisanego: [[R = \\frac{c}{2}]] daje 5 dla trójkąta 6-8-10, natomiast promień okręgu wpisanego wynosi 2. Te dwa wzory odpowiadają na różne pytania.",
                "Wpisywanie c jako przyprostokątnej, a nie przeciwprostokątnej: jeśli 8 zostanie wpisane jako c, a 10 jako b, wzór daje [[\\frac{6+10-8}{2} = 4]], a nie 2. Zawsze wpisuj najdłuższy bok w polu przeciwprostokątnej.",
                "Zapominanie o odjęciu c: dodanie przyprostokątnych i podzielenie przez dwa, [[\\frac{6+8}{2} = 7]], daje liczbę znacznie większą od prawdziwego promienia okręgu wpisanego, który wynosi 2.",
                "Zapominanie o podzieleniu przez dwa: [[6+8-10 = 4]] to dwukrotność promienia okręgu wpisanego. Dzielenie przez dwa jest częścią wzoru, a nie opcjonalnym ostatnim krokiem.",
                "Wpisywanie nieprawidłowych pomiarów boków: boki 3, 4 i 6 nie spełniają [[3^2+4^2 = 6^2]], ponieważ 25 nie jest równe 36, więc wzór na promień okręgu wpisanego nie ma do nich zastosowania.",
                "Ignorowanie zależności pitagorejskiej: dowolne trzy długości można wprowadzić do wzoru, ale tylko prawdziwy trójkąt prostokątny daje sensowny promień okręgu wpisanego. Sprawdź najpierw [[a^2+b^2 = c^2]].",
                "Mieszanie jednostek miary: przyprostokątne w centymetrach i przeciwprostokątna w metrach dają złą odpowiedź. Przelicz każdy pomiar na jedną jednostkę przed obliczeniem.",
                "Mylenie promienia okręgu wpisanego ze średnicą: promień okręgu wpisanego to odległość od środka do krawędzi. Średnica okręgu wpisanego jest dwukrotnością promienia okręgu wpisanego, więc dla trójkąta 6-8-10 wynosi 4, a nie 2.",
                "Mylenie środka okręgu wpisanego ze środkiem okręgu opisanego: środek okręgu wpisanego leży wewnątrz trójkąta, tam gdzie przecinają się dwusieczne kątów, natomiast środek okręgu opisanego jest środkiem przeciwprostokątnej. To różne punkty.",
                "Zakładanie, że okrąg wpisany przechodzi przez wierzchołki trójkąta: okrąg wpisany dotyka boków i nigdy nie sięga wierzchołka. Okręgiem przechodzącym przez wierzchołki jest okrąg opisany.",
                "Zakładanie, że promień jest mierzony wzdłuż boku, a nie prostopadle do niego: promień okręgu wpisanego to prostopadła odległość od środka okręgu wpisanego do boku, czyli najkrótsza odległość do tego boku.",
                "Zaokrąglanie obliczeń pośrednich zbyt wcześnie: zachowaj pełną dokładność w dodawaniu i odejmowaniu, a zaokrąglaj tylko końcową odpowiedź. Wczesne zaokrąglanie zmienia wynik.",
                "Używanie tylko dwóch długości boków bez wcześniejszego obliczenia przeciwprostokątnej: wzór potrzebuje wszystkich trzech boków. Znajdź [[c]] z twierdzenia Pitagorasa, zanim go użyjesz.",
                "Mylenie obwodu z półobwodem: półobwód to połowa obwodu, [[s = \\frac{a+b+c}{2}]]. Użycie pełnego obwodu we wzorze [[r = \\frac{A}{s}]] zmniejsza poprawną odpowiedź o połowę.",
              ],
            },
          ],
          "h2": "Typowe błędy przy obliczaniu promienia okręgu wpisanego",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze przed przeczytaniem odpowiedzi. Żadna z wartości nie powtarza przykładów, a każde rozwiązanie jest w pełni rozpisane poniżej.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowa liczba całkowita",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne [[a = 20]] cm i [[b = 21]] cm oraz przeciwprostokątną [[c = 29]] cm. Znajdź promień okręgu wpisanego [[r]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Pomiar dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane [[a = 10.5]] m, [[b = 14]] m i [[c = 17.5]] m, znajdź promień okręgu wpisanego [[r]] w metrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne [[a = 1.5]] m i [[b = 2]] m oraz przeciwprostokątną [[c = 250]] cm. Znajdź promień okręgu wpisanego w metrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Znajdź przeciwprostokątną z dwóch przyprostokątnych",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne [[a = 12]] cm i [[b = 16]] cm. Znajdź najpierw przeciwprostokątną, a potem promień okręgu wpisanego.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Pole i półobwód",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne [[a = 15]] cm i [[b = 20]] cm oraz przeciwprostokątną [[c = 25]] cm. Znajdź pole i półobwód, a potem znajdź promień okręgu wpisanego za pomocą [[r = \\frac{A}{s}]] i potwierdź go wzorem z trzema bokami.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Rozpoznaj nieprawidłowy trójkąt prostokątny",
            },
            {
              "kind": "p",
              "text": "Uczeń otrzymuje [[a = 7]] cm, [[b = 10]] cm i [[c = 12]] cm i ma znaleźć promień okręgu wpisanego. Pokaż, dlaczego te boki nie tworzą trójkąta prostokątnego, i wyjaśnij, co uczeń powinien zrobić zamiast stosować wzór.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań do ćwiczeń",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Sprawdzenie: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Sprawdzenie: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: Przelicz przeciwprostokątną: 250 cm to 2,5 m. Potem [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, czyli 50 cm. Sprawdzenie: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, potem [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[A = \\frac{15 \\times 20}{2} = 150]] centymetrów kwadratowych i [[s = \\frac{15+20+25}{2} = 30]] cm, więc [[r = \\frac{150}{30} = 5]] cm. Wzór z trzema bokami zgadza się: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[7^2+10^2 = 49+100 = 149]], natomiast [[12^2 = 144]], więc [[a^2+b^2]] nie jest równe [[c^2]] i trójkąt nie jest prostokątny. Uczeń nie powinien stosować wzoru na promień okręgu wpisanego: najpierw sprawdź ponownie pomiary, a jeśli są poprawne, użyj ogólnego wzoru [[r = \\frac{A}{s}]] dla trójkąta nieprostokątnego.",
            },
          ],
          "h2": "Zadania do ćwiczeń z odpowiedziami",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziewięć własności wynika bezpośrednio ze wzoru i geometrii okręgu wpisanego. Każda z nich służy też jako sprawdzenie nowej odpowiedzi na zdrowy rozsądek.",
            },
            {
              "items": [
                "Promień okręgu wpisanego jest zawsze dodatni dla prawidłowego, niezdegenerowanego trójkąta, ponieważ [[a+b]] jest zawsze większe od [[c]].",
                "Środek okręgu wpisanego leży wewnątrz trójkąta, tam gdzie przecinają się trzy dwusieczne kątów.",
                "Promień okręgu wpisanego to najkrótsza prostopadła odległość od środka okręgu wpisanego do każdego boku, a wszystkie trzy odległości są równe [[r]].",
                "Okrąg wpisany dotyka wszystkich trzech boków, po jednym punkcie styczności na każdym boku.",
                "Odcinki styczne z tego samego punktu zewnętrznego mają równe długości, co jest faktem, z którego wyprowadza się wzór.",
                "Zwiększenie ogólnej skali trójkąta zwiększa promień okręgu wpisanego o ten sam współczynnik skali: podwojenie każdego boku podwaja [[r]], a potrojenie każdego boku potraja [[r]].",
                "Promień okręgu wpisanego to nie to samo co promień okręgu opisanego. W trójkącie 6-8-10 [[r = 2]], natomiast [[R = 5]].",
                "Promień okręgu wpisanego zależy od kształtu trójkąta, a także od jego rozmiaru: trójkąt 5-12-13 i trójkąt 6-8-10 mają oba [[r = 2]], mimo że ich boki się różnią.",
                "Promień okręgu wpisanego można obliczyć z długości boków za pomocą [[r = \\frac{a+b-c}{2}]] albo z pola i półobwodu za pomocą [[r = \\frac{A}{s}]], a obie drogi dają tę samą odpowiedź.",
              ],
              "kind": "list",
            },
          ],
          "h2": "Ważne własności promienia okręgu wpisanego w trójkąt prostokątny",
        },
        "sec-semiperimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Półobwód [[s]] to połowa obwodu trójkąta:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Nazywa się półobwodem, ponieważ pół oznacza połowę: pełny obwód to [[P = a+b+c]], a półobwód to jego połowa. Nie myl ich. Obwód to całkowita długość wokół trójkąta, natomiast półobwód to krótsza pomocnicza wartość, która pojawia się we wzorach na pole i we wzorze na promień okręgu wpisanego [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Sam półobwód nie może wyznaczyć promienia okręgu wpisanego, ponieważ wzór [[r = \\frac{A}{s}]] potrzebuje też pola [[A]]. Dwa trójkąty mogą mieć ten sam półobwód i różne pola, a wtedy ich promienie okręgu wpisanego też się różnią. Pole niesie informację o kształcie, której półobwód nie zawiera. Dla trójkąta 6-8-10 [[s = 12]] i [[A = 24]], więc [[r = \\frac{24}{12} = 2]]. Inny trójkąt o [[s = 12]], ale o mniejszym polu, miałby mniejszy promień okręgu wpisanego.",
            },
            {
              "kind": "p",
              "text": "Istnieje zgrabny sposób, aby zobaczyć, dlaczego zachodzi [[A = rs]]. Połącz środek okręgu wpisanego [[I]] z trzema wierzchołkami, dzieląc trójkąt na trzy mniejsze trójkąty. Każdy mały trójkąt ma wysokość [[r]] i podstawę równą jednemu bokowi dużego trójkąta, więc ich pola wynoszą [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] i [[\\frac{rc}{2}]]. Dodanie ich daje [[A = \\frac{r(a+b+c)}{2} = r \\times s]], ponieważ [[s = \\frac{a+b+c}{2}]]. Podzielenie przez [[s]] daje [[r = \\frac{A}{s}]].",
            },
          ],
          "h2": "Związek między promieniem okręgu wpisanego a półobwodem",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj przykładu z góry strony, [[a = 6]], [[b = 8]] i [[c = 10]]. Pięć kroków poniżej pokazuje pełne rozwiązanie, bez żadnych pominięć.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: [[r = \\frac{a+b-c}{2}]].",
                "Podstaw wartości: [[r = \\frac{6+8-10}{2}]].",
                "Dodaj przyprostokątne: [[r = \\frac{14-10}{2}]].",
                "Odejmij przeciwprostokątną: [[r = \\frac{4}{2}]].",
                "Podziel: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2 oznacza, że okrąg wpisany ma promień 2 jednostek, w tej samej jednostce co boki. Jego środek leży w odległości 2 jednostek od każdego boku, a okrąg dotyka każdego boku w dokładnie jednym punkcie.",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy pomiary tworzą trójkąt prostokątny, zanim zaufasz odpowiedzi: [[6^2+8^2 = 36+64 = 100 = 10^2]], więc twierdzenie Pitagorasa zachodzi i trójkąt jest rzeczywiście prostokątny. Drugie sprawdzenie wykorzystuje pole i półobwód, [[A = \\frac{6 \\times 8}{2} = 24]] oraz [[s = \\frac{6+8+10}{2} = 12]], co daje [[r = \\frac{24}{12} = 2]], tę samą odpowiedź inną drogą.",
            },
          ],
          "h2": "Przykład krok po kroku: znajdowanie promienia okręgu wpisanego",
          "image": {
            "alt": "Rozwiązany przykład, w którym a równa się 6, b równa się 8, c równa się 10, a promień okręgu wpisanego r równa się 2, okrąg wpisany dotyka wszystkich trzech boków",
            "caption": "Rozwiązany przykład: a = 6, b = 8, c = 10 daje r = 2, sprawdzone polem i półobwodem.",
            "src": "inradius-example-6-8-10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery niezależne sprawdzenia wyłapują prawie każdy błąd. Wykonaj co najmniej jedno przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. W przykładzie poniżej przez cały czas używany jest trójkąt 6-8-10, z [[r = 2]].",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 1: Wzór podstawowy",
            },
            {
              "kind": "p",
              "text": "Przelicz od nowa za pomocą [[r = \\frac{a+b-c}{2}]], nie patrząc na pierwsze rozwiązanie. Tutaj [[r = \\frac{6+8-10}{2} = 2]]. Świeże obliczenie wyłapuje pomyłki z pierwszego, zwłaszcza odejmowanie wykonane w złej kolejności.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 2: Pole i półobwód",
            },
            {
              "kind": "p",
              "text": "Sprawdź za pomocą [[r = \\frac{A}{s}]]. Tutaj [[A = \\frac{6 \\times 8}{2} = 24]] i [[s = \\frac{6+8+10}{2} = 12]], więc [[r = \\frac{24}{12} = 2]]. Ta droga używa mnożenia i dzielenia zamiast dodawania i odejmowania, więc wyłapuje inny rodzaj błędu.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 3: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[a^2+b^2 = c^2]]. Tutaj [[6^2+8^2 = 36+64 = 100 = 10^2]], więc trzy boki tworzą prawdziwy trójkąt prostokątny. Jeśli to sprawdzenie się nie powiedzie, wzór na promień okręgu wpisanego w ogóle nie ma zastosowania i żadna wartość [[r]] z niego nie może być wiarygodna.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 4: Rozsądek geometryczny",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że [[r]] jest dodatnie, mniejsze od każdej przyprostokątnej i w poprawnej jednostce. Tutaj 2 jest dodatnie i mniejsze zarówno od 6, jak i od 8, a jednostka zgadza się z bokami. Okrąg musi zmieścić się wewnątrz trójkąta, więc promień okręgu wpisanego większy od najkrótszej przyprostokątnej jest niemożliwy i sygnalizuje błąd, zwykle przyprostokątną wpisaną jako przeciwprostokątną.",
            },
          ],
          "h2": "Jak sprawdzić obliczenie promienia okręgu wpisanego",
        },
        "sec-vs-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Promień okręgu wpisanego [[r]] i promień okręgu opisanego [[R]] to dwa promienie trójkąta prostokątnego i opisują dwa różne okręgi. Promień okręgu wpisanego to promień okręgu wpisanego, okręgu wewnątrz trójkąta, który dotyka wszystkich trzech boków. Promień okręgu opisanego to promień okręgu opisanego, okręgu poza trójkątem, który przechodzi przez wszystkie trzy wierzchołki. Jeden okrąg leży wewnątrz trójkąta, drugi go otacza.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym promień okręgu opisanego wynosi [[R = \\frac{c}{2}]], ponieważ przeciwprostokątna jest średnicą okręgu opisanego. Promień okręgu wpisanego wynosi [[r = \\frac{a+b-c}{2}]], co wymaga wszystkich trzech boków, ponieważ to, jak ściśle przylega okrąg wpisany, zależy od kształtu trójkąta, a nie tylko od jego najdłuższego boku. Użyj trójkąta 6-8-10, aby zobaczyć różnicę w liczbach: [[r = 2]] i [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Środki też się różnią. Środek okręgu wpisanego leży wewnątrz trójkąta, tam gdzie przecinają się dwusieczne kątów, w odległości [[r]] od każdego boku. Środek okręgu opisanego leży w środku przeciwprostokątnej, na granicy trójkąta, w odległości [[R]] od każdego wierzchołka. W zadaniach o okręgu opisanym użyj <a href=\"/right-triangle-circumradius-calculator/\">kalkulatora promienia okręgu opisanego na trójkącie prostokątnym</a>, który stosuje bezpośrednio [[R = \\frac{c}{2}]].",
            },
          ],
          "h2": "Związek między promieniem okręgu wpisanego a promieniem okręgu opisanego",
          "image": {
            "alt": "Trójkąt prostokątny z małym okręgiem wpisanym wewnątrz i dużym okręgiem opisanym przechodzącym przez jego wierzchołki, trójkąt 6-8-10",
            "caption": "Okrąg wpisany (r = 2) wewnątrz trójkąta, okrąg opisany (R = 5) wokół niego, trójkąt 6-8-10.",
            "src": "inradius-vs-circumcircle.svg",
          },
          "table": {
            "headers": [
              "Cecha",
              "Promień okręgu wpisanego r",
              "Promień okręgu opisanego R",
            ],
            "rows": [
              [
                "Okrąg",
                "Okrąg wpisany",
                "Okrąg opisany",
              ],
              [
                "Położenie",
                "Wewnątrz trójkąta",
                "Wokół trójkąta",
              ],
              [
                "Styczność",
                "Styczny do boków",
                "Przechodzi przez wierzchołki",
              ],
              [
                "Wzór dla trójkąta prostokątnego",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Środek",
                "Środek okręgu wpisanego",
                "Środek okręgu opisanego",
              ],
              [
                "Wartość dla 6-8-10",
                "2",
                "5",
              ],
            ],
          },
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Promień okręgu wpisanego w trójkąt prostokątny to promień jego okręgu wpisanego, największego okręgu, który mieści się wewnątrz trójkąta. Wyobraź sobie trójkąt ABC z kątem prostym przy C, przyprostokątną AC nazwaną [[a]], przyprostokątną BC nazwaną [[b]] i przeciwprostokątną AB nazwaną [[c]]. Narysuj teraz największy okrąg, jaki możesz, wewnątrz tego trójkąta, nie przecinając żadnego boku. Okrąg ten dotyka wszystkich trzech boków, a jego promień to promień okręgu wpisanego, oznaczany [[r]].",
            },
            {
              "kind": "p",
              "text": "Środek okręgu wpisanego nazywa się środkiem okręgu wpisanego i oznacza się go [[I]]. Środek okręgu wpisanego leży w tej samej prostopadłej odległości od wszystkich trzech boków, a odległość ta wynosi [[r]]. Każdy promień poprowadzony z [[I]] do boku spotyka ten bok pod kątem prostym, dlatego okrąg tylko dotyka boku, zamiast go przecinać. Okrąg wpisany pozostaje wewnątrz trójkąta, ponieważ każdy punkt okręgu jest w odległości [[r]] lub mniejszej od [[I]], a sam punkt [[I]] leży wewnątrz trójkąta.",
            },
            {
              "kind": "p",
              "text": "Mały przykład pokazuje to konkretnie. W trójkącie 3-4-5 promień okręgu wpisanego wynosi [[r = \\frac{3+4-5}{2} = 1]]. Okrąg wpisany ma promień 1 jednostki, więc jego środek leży w odległości 1 jednostki od każdego boku. <a href=\"/right-triangle-radius-calculator/\">Kalkulator promienia trójkąta prostokątnego</a> obejmuje oba promienie trójkąta prostokątnego na jednej stronie, jeśli chcesz porównać okrąg wpisany z okręgiem przechodzącym przez wierzchołki.",
            },
          ],
          "h2": "Czym jest promień okręgu wpisanego w trójkąt prostokątny?",
          "image": {
            "alt": "Trójkąt prostokątny ABC z okręgiem wpisanym wewnątrz, środkiem I i promieniem r dotykającym wszystkich trzech boków",
            "caption": "Trójkąt ABC z okręgiem wpisanym: środek I leży w odległości r od każdego boku.",
            "src": "inradius-main-incircle.svg",
          },
        },
        "sec-why-formula-works": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór wynika z prostego faktu o stycznych: dwa odcinki styczne poprowadzone z tego samego punktu poza okręgiem do tego okręgu mają równe długości. Każdy wierzchołek trójkąta leży poza okręgiem wpisanym, a dwa boki spotykające się w tym wierzchołku są oba styczne do okręgu. Dwa odcinki styczne z każdego wierzchołka są więc równe.",
            },
            {
              "kind": "p",
              "text": "Zacznij od wierzchołka kąta prostego C. Dwa boki spotykające się w C to przyprostokątne, a okrąg wpisany dotyka każdej przyprostokątnej w punkcie, który jest w odległości [[r]] od C wzdłuż boku. Dzieje się tak, ponieważ dwa promienie ze środka okręgu wpisanego do przyprostokątnych, razem z dwoma krótkimi odcinkami wzdłuż przyprostokątnych, tworzą kwadrat o boku [[r]] w narożniku C. Odcinek styczny od C wzdłuż każdej przyprostokątnej ma więc długość [[r]].",
            },
            {
              "kind": "p",
              "text": "Spójrz teraz na dwa pozostałe wierzchołki. Niech [[x]] będzie długością stycznej od wierzchołka A wzdłuż boków, a niech [[y]] będzie długością stycznej od wierzchołka B. Przy wierzchołku A jedna styczna biegnie wzdłuż przyprostokątnej [[a]] w stronę C, a druga wzdłuż przeciwprostokątnej w stronę B, więc obie mają długość [[x]]. Przy wierzchołku B obie styczne mają długość [[y]]. Długości boków są więc zbudowane z tych części:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Dodaj dwa pierwsze równania: [[a+b = 2r+x+y]]. Ponieważ [[x+y = c]], staje się to [[a+b = 2r+c]]. Przekształcenie daje [[2r = a+b-c]], a podzielenie przez dwa daje wzór, [[r = \\frac{a+b-c}{2}]]. Każdy krok wynika z równych długości stycznych, więc wzór nie jest sztuczką do zapamiętania, lecz bezpośrednim wynikiem tego, jak okrąg wpisany dotyka boków.",
            },
          ],
          "h2": "Dlaczego wzór na promień okręgu wpisanego w trójkąt prostokątny działa?",
        },
      },
      "tocHeading": "Zawartość przewodnika",
      "tocItems": {
        "sec-applications": "Praktyczne zastosowania promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-area-semiperimeter": "Jak obliczyć promień okręgu wpisanego za pomocą pola i półobwodu",
        "sec-calculate": "Obliczanie promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-diagram": "Objaśnienie diagramu okręgu wpisanego w trójkąt prostokątny",
        "sec-examples": "Przykłady obliczania promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-faq": "Często zadawane pytania",
        "sec-formula": "Wzór na promień okręgu wpisanego w trójkąt prostokątny",
        "sec-how-to-use": "Jak korzystać z kalkulatora promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-incenter": "Środek okręgu wpisanego w trójkąt prostokątny",
        "sec-incircle": "Czym jest okrąg wpisany w geometrii trójkąta prostokątnego?",
        "sec-intro": "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-legs-known": "Jak obliczyć promień okręgu wpisanego, gdy znane są tylko dwie przyprostokątne",
        "sec-mistakes": "Typowe błędy przy obliczaniu promienia okręgu wpisanego",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-properties": "Ważne własności promienia okręgu wpisanego w trójkąt prostokątny",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-semiperimeter-relation": "Związek między promieniem okręgu wpisanego a półobwodem",
        "sec-step-example": "Przykład krok po kroku: znajdowanie promienia okręgu wpisanego",
        "sec-verify": "Jak sprawdzić obliczenie promienia okręgu wpisanego",
        "sec-vs-circumradius": "Związek między promieniem okręgu wpisanego a promieniem okręgu opisanego",
        "sec-what-inradius": "Czym jest promień okręgu wpisanego w trójkąt prostokątny?",
        "sec-why-formula-works": "Dlaczego wzór na promień okręgu wpisanego w trójkąt prostokątny działa?",
      },
    },
};
