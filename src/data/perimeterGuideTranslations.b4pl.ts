// perimeterGuideTranslations.b4pl.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Polish (pl).
export const B4_PL = {
  "pl": {
    "tocHeading": "Nawigacja po sekcjach",
    "tocItems": {
      "sec-intro": "Jak obliczyć obwód trójkąta prostokątnego",
      "sec-geometry": "Czym jest trójkąt prostokątny?",
      "sec-definition": "Czym jest obwód trójkąta prostokątnego?",
      "sec-howto": "Jak znaleźć obwód trójkąta prostokątnego",
      "sec-examples": "Przykłady krok po kroku: obwód trójkąta prostokątnego",
      "sec-missing": "Jak obliczyć obwód trójkąta prostokątnego z brakującym bokiem",
      "sec-applications": "Zastosowania obwodu trójkąta prostokątnego w życiu",
      "sec-properties": "Szczególne własności obwodu trójkąta prostokątnego",
      "sec-vs-area": "Jaka jest różnica między obwodem a polem?",
      "sec-semiperimeter": "Jaki jest związek między obwodem a połową obwodu?",
      "sec-units": "Jednostki miary w obliczeniach obwodu trójkąta prostokątnego",
      "sec-mistakes": "Typowe błędy przy obliczaniu obwodu trójkąta prostokątnego",
      "sec-verify": "Jak sprawdzić, czy obwód trójkąta prostokątnego jest poprawny",
      "sec-related": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Podsumowanie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć obwód trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Weź trójkąt prostokątny o bokach [[a=3]], [[b=4]] i [[c=5]]. Jego obwód wynosi [[P=3+4+5]], czyli [[[\\boxed{P=12\\text{ units}}]]]. Liczba 12 oznacza całkowitą odległość wokół trójkątnego konturu: przejście wszystkich trzech krawędzi to podróż o długości 12 jednostek." },
          { "kind": "p", "text": "Ten kalkulator wykonuje dokładnie to dodawanie dla każdego trójkąta prostokątnego. Wpisujesz dwie przyprostokątne i przeciwprostokątną, a on zwraca całkowitą długość konturu z rozwiązaniem krok po kroku i żywym diagramem. Potrzebne są trzy długości boków, ponieważ kontur ma trzy krawędzie, a przeciwprostokątna musi być uwzględniona: jest jedną z tych trzech krawędzi, mimo że nigdy nie styka się z kątem prostym. Dwie przyprostokątne tworzą kwadratowy narożnik, a przeciwprostokątna rozciąga się w jego poprzek, zamykając kształt." },
          { "kind": "p", "text": "Obwód jest miarą liniową, nie miarą pola. Odpowiada na pytanie „ile listwy potrzebuję?”, a nie „ile powierzchni jest w środku?”. To rozróżnienie sprawia, że jest to właściwa liczba wszędzie tam, gdzie szacujesz ogrodzenie, wykończenie, ramy, drut, linę czy brzegi tkanin wokół kształtu trójkąta prostokątnego." }
        ]
      },
      "sec-geometry": {
        "h2": "Czym jest trójkąt prostokątny?",
        "blocks": [
          { "kind": "p", "text": "Zanim zacznie się jakiekolwiek dodawanie, trzy boki muszą być oznaczone bezbłędnie. Symbole poniżej są stałe w całym przewodniku i kalkulator używa tych samych nazw." },
          { "kind": "h3", "text": "Definicja trójkąta prostokątnego" },
          { "kind": "p", "text": "Trójkąt prostokątny to trójkąt zawierający jeden kąt wewnętrzny mierzący dokładnie 90 stopni. Ma trzy wierzchołki, trzy boki, dwa kąty ostre i jeden kąt prosty, zazwyczaj oznaczony małym kwadratem. Dwa boki tworzące kąt prosty to przyprostokątne; bok leżący naprzeciw kąta prostego to przeciwprostokątna. Ponieważ kąty każdego trójkąta sumują się do 180 stopni, [[A+B+C=180^\\circ]], a przy [[C=90^\\circ]] wynika, że [[[\\boxed{A+B=90^\\circ}]]]: dwa kąty ostre są dopełniające się, więc znajomość jednego wyznacza drugi. Suma kątów ma znaczenie przy rozpoznawaniu trójkąta prostokątnego, ponieważ jest to test, który długości boków muszą przejść: tylko prawdziwy 90-stopniowy narożnik daje zależność między bokami, od której zależy reszta tego przewodnika." },
          { "kind": "h3", "text": "Czym są dwie przyprostokątne?" },
          { "kind": "p", "text": "Przyprostokątna [[a]] i przyprostokątna [[b]] to dwa boki spotykające się w wierzchołku kąta prostego, prostopadłe do siebie. Każda z nich może być narysowana poziomo lub pionowo w zależności od orientacji trójkąta; to, co je definiuje, to 90-stopniowy narożnik, który tworzą, a nie ich kierunek na stronie. Różnią się od przeciwprostokątnej położeniem i długością: każda przyprostokątna styka się z kątem prostym i każda przyprostokątna jest krótsza od przeciwprostokątnej. W pracy z obwodem ich rola jest prosta: obie są krawędziami konturu, więc obie wchodzą do sumy." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego, zawsze najdłuższy bok trójkąta. Nigdy nie tworzy kąta prostego; rozciąga się w jego poprzek, łącząc odległe końce dwóch przyprostokątnych. Różni się od przyprostokątnych położeniem i długością: przyprostokątne spotykają się pod kątem 90 stopni, natomiast przeciwprostokątna spotyka każdą przyprostokątną pod kątem ostrym. Domyka ona trójkątny kontur, dlatego musi być uwzględniana w obliczeniach obwodu. Gdy znane są obie przyprostokątne, twierdzenie Pitagorasa odtwarza ją: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Jak rozpoznać poprawne oznaczenia boków?" },
          { "kind": "p", "text": "[[a]] i [[b]] to dwa boki spotykające się pod kątem 90 stopni, a [[c]] leży naprzeciw kąta prostego. W niezdegenerowanym trójkącie prostokątnym [[c]] jest najdłuższym bokiem. Znacznik kąta prostego mówi, który bok to [[c]]: to ten, który nie styka się z tym wierzchołkiem. Pomaga szybka kontrola uporządkowania: posortuj trzy liczby, a największa musi pełnić rolę [[c]]. Jeśli największy bok nie leży naprzeciw kwadratowego narożnika, oznaczenia są błędne, a każde oparte na nich obliczenie też będzie błędne." },
          { "kind": "h3", "text": "Czy wzór na obwód działa tylko dla trójkątów prostokątnych?" },
          { "kind": "p", "text": "Jest tu ważna różnica matematyczna. Wzór [[P=a+b+c]] działa dla każdego trójkąta, prostokątnego czy nie: każdy trójbokowy kontur sumuje się tak samo. To, co dodaje warunek kąta prostego, to szczególna zależność [[a^2+b^2=c^2]], przydatna do znajdowania brakujących boków i do sprawdzania, czy pomiary w ogóle opisują trójkąt prostokątny. Wzór na obwód jest uniwersalny; zależność pitagorejska to bonus trójkąta prostokątnego." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC o przyprostokątnych a i b, przeciwprostokątnej c, kącie prostym C i podświetlonym obwodzie",
        "figcaption": "Trójkąt ABC: przyprostokątne a i b spotykają się w kącie prostym C, przeciwprostokątna c zamyka kontur, a P = a + b + c przebiega wzdłuż wszystkich trzech krawędzi."
      },
      "sec-definition": {
        "h2": "Czym jest obwód trójkąta prostokątnego?",
        "blocks": [
          { "kind": "h3", "text": "Definicja obwodu" },
          { "kind": "p", "text": "Obwód to całkowita odległość wokół zewnętrznego konturu figury płaskiej. Dla trójkąta jest to suma długości jego trzech boków: [[[\\boxed{P=a+b+c}]]]. Wszystkie trzy boki muszą być uwzględnione, ponieważ kontur nie jest kompletny, dopóki nie policzy się każdej krawędzi. Pominięcie jednej nie daje krótszego obwodu; daje inną, błędną wielkość." },
          { "kind": "h3", "text": "Dlaczego przeciwprostokątna wlicza się do obwodu?" },
          { "kind": "p", "text": "Obwód mierzy cały zewnętrzny kontur, a przeciwprostokątna nie jest pomiarem opcjonalnym ani wewnętrznym. Jest jedną z trzech zewnętrznych krawędzi. Weź [[a=3]], [[b=4]], [[c=5]]. Błędne obliczenie [[3+4=7]] liczy tylko dwie przyprostokątne, boki kwadratowego narożnika. Poprawne obliczenie [[3+4+5=12]] przechodzi cały trójkąt i wraca do punktu startu. Wartość 7 to łączna długość dwóch przyprostokątnych, nie pełny obwód, ponieważ droga od końca przyprostokątnej [[b]] z powrotem do początku przyprostokątnej [[a]] biegnie wzdłuż przeciwprostokątnej." },
          { "kind": "h3", "text": "Jak działa wzór na obwód?" },
          { "kind": "p", "text": "Wzór rozpada się na trzy części. Pierwszy bok: [[a]]. Drugi bok: [[b]]. Trzeci bok: [[c]]. Razem: [[P=a+b+c]]. Dodawanie wystarcza, ponieważ obwód to suma długości, a długości wzdłuż jednej ścieżki po prostu się sumują. Nie trzeba dzielić, podnosić do kwadratu ani używać trygonometrii: wzór jest najprostszym możliwym użyciem definicji konturu." },
          { "kind": "h3", "text": "Co obwód oznacza w życiu?" },
          { "kind": "p", "text": "Obwód to całkowita długość konturu: materiał potrzebny, by raz obejść obiekt. Dlatego stoi za pomiarami krawędzi, wymiarami ram, długościami obrzeży, zapotrzebowaniem na ogrodzenie, listwami i sztukateriami oraz długościami lin i drutów. Mierzenie zewnętrznego konturu to inna praca niż mierzenie powierzchni zamkniętej wewnątrz trójkąta. Ogrodzenie trójkątnej rabaty wymaga obwodu; pokrycie tej samej rabaty darnią wymaga pola. Pomylenie tych dwóch kupuje zły materiał." }
        ]
      },
      "sec-howto": {
        "h2": "Jak znaleźć obwód trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Obliczenie przebiega według jasnej sekwencji. Każdy krok ma swój cel: rozpoznanie, sprawdzenie, podstawienie, dodanie i weryfikacja. Trójkąt 3-4-5 pokazuje każdy krok." },
          { "kind": "p", "text": "<strong>Krok 1: Rozpoznaj trzy boki.</strong> Zbierz pomiary [[a=3]], [[b=4]], [[c=5]]. Ten krok gromadzi surowe dane przed jakąkolwiek arytmetyką." },
          { "kind": "p", "text": "<strong>Krok 2: Rozpoznaj dwie prostopadłe przyprostokątne.</strong> Potwierdź, że 3 i 4 to przyprostokątne, boki tworzące 90-stopniowy narożnik. To przypisuje [[a]] i [[b]] ich właściwe role." },
          { "kind": "p", "text": "<strong>Krok 3: Rozpoznaj przeciwprostokątną naprzeciw kąta prostego.</strong> Potwierdź, że 5 to przeciwprostokątna: jest najdłuższym bokiem i leży naprzeciw kwadratowego narożnika. To zapobiega najczęstszemu błędowi w oznaczeniach." },
          { "kind": "p", "text": "<strong>Krok 4: Upewnij się, że wszystkie trzy pomiary używają zgodnych jednostek.</strong> Tutaj wszystkie trzy to zwykłe jednostki, więc nie jest potrzebna konwersja. Ten krok chroni przed dodawaniem metrów do stóp." },
          { "kind": "p", "text": "<strong>Krok 5: Zapisz wzór.</strong> [[P=a+b+c]]. Zapisanie go utrzymuje strukturę widoczną podczas podstawiania." },
          { "kind": "p", "text": "<strong>Krok 6: Podstaw znane pomiary.</strong> [[P=3+4+5]]. Każdy symbol zostaje zastąpiony swoją liczbą." },
          { "kind": "p", "text": "<strong>Krok 7: Dodaj trzy wartości.</strong> [[P=12]]. Jedno dodawanie to cała arytmetyka." },
          { "kind": "p", "text": "<strong>Krok 8: Dołącz właściwą liniową jednostkę miary.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Obwód jest długością, więc przyjmuje jednostki liniowe, nigdy kwadratowe." },
          { "kind": "p", "text": "<strong>Krok 9: Zweryfikuj wynik.</strong> Sprawdź [[3^2+4^2=5^2]]: [[9+16=25]]. Boki spełniają twierdzenie Pitagorasa, więc trójkąt jest prawdziwie prostokątny, a obwód godny zaufania." },
          { "kind": "h3", "text": "Dlaczego poprawne rozpoznanie boków jest tak ważne?" },
          { "kind": "p", "text": "Błędne oznaczenia wpływają na wszystko, co następuje potem. Weryfikacja matematyczna nie powiedzie się, gdy przeciwprostokątna jest błędnie oznaczona, ponieważ kontrola pitagorejska oczekuje, że [[c]] będzie najdłuższym bokiem. Obliczenia brakującego boku używają innych wzorów dla brakującej przyprostokątnej niż dla brakującej przeciwprostokątnej, więc zamieniona etykieta stosuje zły wzór. Pola wejściowe kalkulatora są przypisane do [[a]], [[b]] i [[c]], więc zamienione wartości dają prawdopodobny z wyglądu, lecz błędny wynik. Żywa wizualizacja trójkąta też będzie wyglądać na zniekształconą, gdy wartość przyprostokątnej znajdzie się w slocie przeciwprostokątnej. Jednorazowe poprawne oznaczenie chroni każdy późniejszy krok." },
          { "kind": "h3", "text": "Czy mogę obliczyć obwód, nie znając przeciwprostokątnej?" },
          { "kind": "p", "text": "Tak, z jednym dodatkowym krokiem na początku. Jeśli znane są obie przyprostokątne, przeciwprostokątną można znaleźć twierdzeniem Pitagorasa: [[c=\\sqrt{a^2+b^2}]]. Gdy [[c]] jest znane, obwód wynika ze zwykłego dodawania. Nie oznacza to, że istniejący kalkulator obwodu przyjmuje tylko dwa boki: kalkulator potrzebuje wszystkich trzech danych wejściowych, więc brakujący bok trzeba obliczyć ręcznie (lub kalkulatorem boków) przed wpisaniem wartości." }
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku: obwód trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Cztery poniższe przykłady zachowują istniejące, w pełni opracowane przypadki i rozbudowują ich wyjaśnienia. Każdy podstawia, dodaje, a potem weryfikuje przez twierdzenie Pitagorasa." },
          { "kind": "h3", "text": "Przykład 1: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Wzór: [[P=a+b+c]]" },
          { "kind": "p", "text": "Podstaw: [[P=3+4+5]]" },
          { "kind": "p", "text": "Dodaj: [[P=12]]" },
          { "kind": "p", "text": "Ostateczna odpowiedź: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Weryfikacja: [[3^2+4^2=5^2]], czyli [[9+16=25]]. Pomiary spełniają twierdzenie Pitagorasa, więc tworzą trójkąt prostokątny: dwa mniejsze kwadraty zbudowane na przyprostokątnych dokładnie wypełniają kwadrat zbudowany na przeciwprostokątnej." },
          { "kind": "h3", "text": "Przykład 2: trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Podstaw: [[P=5+12+13]]" },
          { "kind": "p", "text": "Ostateczna odpowiedź: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Weryfikacja: [[5^2+12^2=13^2]], czyli [[25+144=169]]. Równość potwierdza prawidłowy trójkąt prostokątny." },
          { "kind": "h3", "text": "Przykład 3: trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dane: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Podstaw: [[P=8+15+17]]" },
          { "kind": "p", "text": "Ostateczna odpowiedź: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Weryfikacja: [[8^2+15^2=17^2]], czyli [[64+225=289]]. Kwadraty znów się bilansują, potwierdzając kąt prosty." },
          { "kind": "h3", "text": "Przykład 4: długości boków dziesiętne" },
          { "kind": "p", "text": "Dane: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Podstaw: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Ostateczna odpowiedź: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Weryfikacja: [[2.5^2+6^2=6.5^2]], czyli [[6.25+36=42.25]]. Wartości dziesiętne nie zmieniają wzoru: dodawanie działa tak samo dla liczb całkowitych i dziesiętnych, a arytmetyka weryfikacji jest identyczna." }
        ],
        "table": {
          "headers": ["Trójkąt", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Obwód P", "Weryfikacja"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Tabela pokazuje, jak różne długości boków dają różne pomiary konturu, podczas gdy ten sam dwuetapowy rytm, dodaj, a potem zweryfikuj, pozostaje niezmieniony."]
      },
      "sec-missing": {
        "h2": "Jak obliczyć obwód trójkąta prostokątnego z brakującym bokiem",
        "blocks": [
          { "kind": "p", "text": "Istniejący kalkulator obwodu wymaga wszystkich trzech długości boków. Jeśli jeden bok jest nieznany, oblicz go najpierw twierdzeniem Pitagorasa, a potem dodaj. Trzy poniższe przypadki obejmują każdą możliwość." },
          { "kind": "h3", "text": "Przypadek 1: znajdowanie brakującej przeciwprostokątnej" },
          { "kind": "p", "text": "Gdy znane są obie przyprostokątne: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Przykład: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Teraz oblicz: [[P=6+8+10]], czyli [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Przypadek 2: znajdowanie brakującej przyprostokątnej" },
          { "kind": "p", "text": "Gdy znane są przeciwprostokątna [[c]] i przyprostokątna [[a]]: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Przykład: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Teraz oblicz: [[P=5+12+13]], czyli [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Przypadek 3: znajdowanie drugiej brakującej przyprostokątnej" },
          { "kind": "p", "text": "Gdy znane są przeciwprostokątna [[c]] i przyprostokątna [[b]]: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Przykład: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Teraz oblicz: [[P=8+15+17]], czyli [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Dlaczego najpierw trzeba znaleźć brakujący bok?" },
          { "kind": "p", "text": "Obwód reprezentuje cały kontur. Zignorowanie nieznanego boku daje niekompletny wynik: dwa znane boki dają częściową ścieżkę, nie obwód. Te obliczenia brakującego boku to wspierające metody matematyczne, a nie dodatkowe tryby istniejącego kalkulatora obwodu. Gdy znasz tylko dwa boki, kalkulator boków trójkąta prostokątnego odtwarza trzeci, a potem kalkulator obwodu kończy pracę." }
        ],
        "imgAlt": "Trójkąt prostokątny o przyprostokątnych 6 i 8, c = 10 z twierdzenia Pitagorasa, potem obwód 24",
        "figcaption": "Przyprostokątne 6 i 8 dają c = 10 z twierdzenia Pitagorasa, potem P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Zastosowania obwodu trójkąta prostokątnego w życiu",
        "blocks": [
          { "kind": "p", "text": "Dwanaście realistycznych, w pełni opracowanych przykładów znajduje się poniżej. Każdy nazywa sytuację, podaje trzy pomiary boków, pokazuje dodawanie i wyjaśnia, co wynik pomaga oszacować. Traktuj każdy jako uproszczony model geometryczny trójkąta prostokątnego: prawdziwe obiekty rzadko są idealnymi trójkątami, więc naddatki materiałowe, odpady przy cięciu i weryfikacja budowlana znajdują się poza samą liczbą obwodu." },
          { "kind": "h3", "text": "Przykład 1: trójkątna szklana rama okna" },
          { "kind": "p", "text": "Trójkątna rama okna ma [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Zatem [[P=3+4+5]], czyli [[[\\boxed{P=12\\text{ m}}]]]. 12 metrów to całkowita długość wokół trójkątnego obrysu okna, długość listwy ramowej do cięcia. Złącza ramy i naddatki na cięcie mogą wymagać dodatkowego materiału ponad 12 metrów." },
          { "kind": "h3", "text": "Przykład 2: wykończenie krawędzi dachu" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja dachu ma [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Zatem [[P=6+8+10]], czyli [[[\\boxed{P=24\\text{ ft}}]]]. Obwód szacuje wykończenie wokół trójkątnego obrysu końca dachu. Narożniki i zakłady przy okapie powiększają długość zakupu." },
          { "kind": "h3", "text": "Przykład 3: trójkątne ogrodzenie ogrodu" },
          { "kind": "p", "text": "Trójkątna sekcja ogrodu ma [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Zatem [[P=5+12+13]], czyli [[[\\boxed{P=30\\text{ m}}]]]. Całkowita długość konturu szacuje ogrodzenie potrzebne wokół ogrodu. Bramki, słupki, zakłady i naddatki montażowe liczy się osobno od 30 metrów linii ogrodzenia." },
          { "kind": "h3", "text": "Przykład 4: stalowy wspornik" },
          { "kind": "p", "text": "Trójkątny prostokątny metalowy wspornik ma [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Zatem [[P=8+15+17]], czyli [[[\\boxed{P=40\\text{ cm}}]]]. Obwód opisuje zewnętrzną krawędź wspornika i pomaga oszacować ochronny materiał krawędziowy. Nie określa wytrzymałości konstrukcyjnej, która zależy od grubości, stopu i ścieżek obciążenia, a nie od długości krawędzi." },
          { "kind": "h3", "text": "Przykład 5: trójkątny transparent z tkaniny" },
          { "kind": "p", "text": "Transparent z tkaniny ma [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Zatem [[P=9+12+15]], czyli [[[\\boxed{P=36\\text{ ft}}]]]. Obwód szacuje całkowitą długość krawędzi wymagającą obszycia lub lamowania. Dodatkowa tkanina na szwy i zakładki jest wyłączona z 36 stóp." },
          { "kind": "h3", "text": "Przykład 6: trójkątna rama znaku" },
          { "kind": "p", "text": "Trójkątny prostokątny panel znaku ma [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Zatem [[P=12+16+20]], czyli [[[\\boxed{P=48\\text{ in}}]]]. Obwód szacuje ramę lub ozdobne obramowanie wokół panelu." },
          { "kind": "h3", "text": "Przykład 7: obrzeże rabaty" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja rabaty ma [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Zatem [[P=7+24+25]], czyli [[[\\boxed{P=56\\text{ m}}]]]. Ten wynik szacuje pełną długość obrzeża rabaty dla sekcji, przed odpadami i zakładami na złączach." },
          { "kind": "h3", "text": "Przykład 8: rama wsporcza panelu słonecznego" },
          { "kind": "p", "text": "Mała trójkątna prostokątna rama wsporcza ma [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Zatem [[P=9+40+41]], czyli [[[\\boxed{P=90\\text{ cm}}]]]. Obwód opisuje pełny trójkątny obrys ramy." },
          { "kind": "h3", "text": "Przykład 9: obramowanie trójkątnej markizy" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja markizy ma [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Zatem [[P=15+20+25]], czyli [[[\\boxed{P=60\\text{ ft}}]]]. Obwód szacuje materiał obramowania potrzebny wokół tkaniny, z wyłączeniem elementów montażowych." },
          { "kind": "h3", "text": "Przykład 10: wykończenie końca dachu magazynu" },
          { "kind": "p", "text": "Uproszczona sekcja końca dachu magazynu ma [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Zatem [[P=11+60+61]], czyli [[[\\boxed{P=132\\text{ ft}}]]]. Całkowity obwód reprezentuje trzy zewnętrzne krawędzie modelowanej trójkątnej sekcji." },
          { "kind": "h3", "text": "Przykład 11: panel przemysłowej blachy" },
          { "kind": "p", "text": "Trójkątny prostokątny panel fabrykacyjny ma [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Zatem [[P=13+84+85]], czyli [[[\\boxed{P=182\\text{ cm}}]]]. Wynik pomaga oszacować ochronne profile krawędziowe lub materiał obramowania dla panelu." },
          { "kind": "h3", "text": "Przykład 12: wspornik ze sklejki" },
          { "kind": "p", "text": "Trójkątna prostokątna płyta wsporcza ze sklejki ma [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Zatem [[P=28+45+53]], czyli [[[\\boxed{P=126\\text{ cm}}]]]. Obwód reprezentuje całą zewnętrzną krawędź płyty ze sklejki." }
        ],
        "table": {
          "headers": ["Zastosowanie praktyczne", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Obwód P", "Jednostka"],
          "rows": [
            ["Trójkątna szklana rama okna", "3", "4", "5", "12", "m"],
            ["Wykończenie krawędzi dachu", "6", "8", "10", "24", "ft"],
            ["Trójkątne ogrodzenie ogrodu", "5", "12", "13", "30", "m"],
            ["Stalowy wspornik", "8", "15", "17", "40", "cm"],
            ["Trójkątny transparent z tkaniny", "9", "12", "15", "36", "ft"],
            ["Trójkątna rama znaku", "12", "16", "20", "48", "in"],
            ["Obrzeże rabaty", "7", "24", "25", "56", "m"],
            ["Rama wsporcza panelu słonecznego", "9", "40", "41", "90", "cm"],
            ["Obramowanie trójkątnej markizy", "15", "20", "25", "60", "ft"],
            ["Wykończenie końca dachu magazynu", "11", "60", "61", "132", "ft"],
            ["Panel przemysłowej blachy", "13", "84", "85", "182", "cm"],
            ["Wspornik ze sklejki", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Pamiętaj o ograniczeniach praktycznych: mogą być potrzebne naddatki materiałowe, odpady przy cięciu nie są uwzględnione, złącza ram mogą powiększyć zapotrzebowanie materiałowe, bramki i otwory wpływają na ilości ogrodzenia, rzeczywiste pomiary budowlane należy weryfikować, a sam obwód nie określa wytrzymałości konstrukcyjnej ani nośności."],
        "imgAlt": "Cztery rzeczywiste przykłady obwodu trójkąta prostokątnego: rama okna, wykończenie dachu, obrzeże ogrodu, stalowy wspornik",
        "figcaption": "Okno, dach, ogród i wspornik: każdy panel przebiega wzdłuż trójkątnego konturu i jego obwodu."
      },
      "sec-properties": {
        "h2": "Szczególne własności obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Poza prostym dodawaniem obwód trójkąta prostokątnego podlega kilku ostrym nierównościom. Pełnią one też rolę szybkich kontroli poprawności każdego obliczonego wyniku." },
          { "kind": "h3", "text": "Obwód jest większy niż dwukrotność przeciwprostokątnej" },
          { "kind": "p", "text": "Dla każdego prawidłowego trójkąta nierówność trójkąta daje [[a+b>c]]. Dodaj [[c]] do obu stron: [[a+b+c>2c]]. Zatem [[[\\boxed{P>2c}]]]. Zwykłym językiem: dwie przyprostokątne razem są zawsze dłuższe od przeciwprostokątnej, więc dodanie przeciwprostokątnej do obu stron zachowuje kierunek nierówności. Dla trójkąta 3-4-5 [[P=12]] i [[2c=10]], a 12 jest rzeczywiście większe niż 10." },
          { "kind": "h3", "text": "Obwód jest mniejszy niż trzykrotność przeciwprostokątnej" },
          { "kind": "p", "text": "Ponieważ przeciwprostokątna jest dłuższa od każdej przyprostokątnej, [[a<c]] i [[b<c]]. Zatem [[a+b<2c]]. Dodanie [[c]] daje [[[\\boxed{P<3c}]]]. To użyteczna szybka kontrola: każdy podany obwód równy lub większy niż trzykrotność przeciwprostokątnej nie może należeć do prawidłowego trójkąta prostokątnego. Dla trójkąta 3-4-5 [[3c=15]], a 12 jest wygodnie poniżej." },
          { "kind": "h3", "text": "Obwód trójkąta 45-45-90" },
          { "kind": "p", "text": "W trójkącie 45-45-90 obie przyprostokątne mają tę samą długość. Niech każda przyprostokątna równa się [[k]]. Przeciwprostokątna wynosi [[c=k\\sqrt{2}]]. Zatem [[P=k+k+k\\sqrt{2}]], czyli [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Przy [[k=5]] obwód wynosi [[5(2+\\sqrt{2})\\approx17.07]]: dwie przyprostokątne po 5 plus przeciwprostokątna około 7,07." },
          { "kind": "h3", "text": "Obwód trójkąta 30-60-90" },
          { "kind": "p", "text": "Jeśli najkrótsza przyprostokątna to [[k]], to dłuższa przyprostokątna wynosi [[k\\sqrt{3}]], a przeciwprostokątna [[2k]]. Zatem [[P=k+k\\sqrt{3}+2k]], czyli [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Przy [[k=4]] boki wynoszą 4, około 6,93 i 8, co daje obwód około 18,93." },
          { "kind": "h3", "text": "Który trójkąt prostokątny ma największy obwód przy stałej przeciwprostokątnej?" },
          { "kind": "p", "text": "Intuicyjnie, gdy przeciwprostokątna pozostaje stała, obwód rośnie, gdy dwie przyprostokątne rosną razem, i jest największy, gdy żadna przyprostokątna nie jest poszkodowana: gdy obie przyprostokątne są równe. To trójkąt 45-45-90. Ścisłe stwierdzenie używa nierówności [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Ponieważ [[a^2+b^2=c^2]], wynika, że [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], z równością dokładnie wtedy, gdy [[a=b]]. Wśród wszystkich trójkątów prostokątnych dzielących jedną przeciwprostokątną równoramienny trójkąt prostokątny wygrywa konkurs na obwód." }
        ]
      },
      "sec-vs-area": {
        "h2": "Jaka jest różnica między obwodem a polem?",
        "blocks": [
          { "kind": "p", "text": "Obwód i pole opisują trójkąt, lecz odpowiadają na różne pytania. Ta sekcja ostro rysuje granicę." },
          { "kind": "h3", "text": "Obwód mierzy zewnętrzny kontur" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mierzy całkowitą odległość wokół trójkąta. Jego jednostki są liniowe: metry, centymetry, milimetry, stopy, cale. Mówi, ile materiału przebiega wzdłuż krawędzi." },
          { "kind": "h3", "text": "Pole mierzy zamkniętą powierzchnię" },
          { "kind": "p", "text": "Dla trójkąta prostokątnego [[[\\boxed{K=\\frac{ab}{2}}]]]. Dwie prostopadłe przyprostokątne służą za podstawę i wysokość, więc przeciwprostokątna nie występuje we wzorze. Pole używa jednostek kwadratowych: metrów kwadratowych, centymetrów kwadratowych, stóp kwadratowych, cali kwadratowych. Mówi, ile powierzchni leży wewnątrz konturu." },
          { "kind": "h3", "text": "Porównanie na trójkącie 3-4-5" },
          { "kind": "p", "text": "Obwód: [[P=3+4+5]], czyli [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Pole: [[K=\\frac{3\\times4}{2}]], czyli [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Liczby 12 i 6 opisują całkowicie różne własności tego samego trójkąta: jedna to spacer wokół niego, druga to grunt, który pokrywa." },
          { "kind": "h3", "text": "Czy dwa trójkąty prostokątne mogą mieć ten sam obwód, a różne pola?" },
          { "kind": "p", "text": "Tak. Sam obwód nie wyznacza jednoznacznie pola; kształt i proporcje trójkąta wpływają na jego zamknięte pole. Trójkąt 3-4-5 ma obwód 12 i pole 6. Trójkąt 45-45-90 też może mieć obwód 12: z [[P=k(2+\\sqrt{2})=12]] przyprostokątna wynosi [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], a jego pole to [[K=\\frac{k^2}{2}\\approx6.18]] jednostek kwadratowych, nieco większe niż 6. Ta sama długość konturu, inne wnętrze: kształt równoramienny zamyka nieco więcej." }
        ],
        "imgAlt": "Trójkąt 3-4-5 z podświetlonym konturem P równym 12 i zacieniowanym wnętrzem o polu K równym 6",
        "figcaption": "Podświetlona krawędź to obwód; zacieniowane wnętrze to pole. Dwa różne pomiary."
      },
      "sec-semiperimeter": {
        "h2": "Jaki jest związek między obwodem a połową obwodu?",
        "blocks": [
          { "kind": "p", "text": "Połowa obwodu to połowa pełnego obwodu: [[[\\boxed{s=\\frac{P}{2}}]]]. Dla trójkąta prostokątnego to [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Na tej stronie pozostaje pomiarem wspierającym, a nie drugim głównym tematem." },
          { "kind": "h3", "text": "Przykład liczbowy" },
          { "kind": "p", "text": "Weź [[a=3,\\;b=4,\\;c=5]]. Obwód wynosi [[P=12]], więc połowa obwodu to [[s=\\frac{12}{2}=6]]. Obie są miarami liniowymi w tych samych jednostkach; jedna jest po prostu połową drugiej." },
          { "kind": "h3", "text": "Dlaczego połowa obwodu jest użyteczna?" },
          { "kind": "p", "text": "Połowa obwodu to ważny pomiar pośredni w geometrii trójkątów. Występuje we wzorze Herona na pole, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], oraz w zależności z promieniem okręgu wpisanego [[K=rs]], i upraszcza kilka zaawansowanych dowodów geometrycznych. Gdy wzór prosi o [[s]], oblicz najpierw obwód i podziel go na pół. Jeśli potrzebne jest dedykowane narzędzie, użyj kalkulatora połowy obwodu trójkąta prostokątnego." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki miary w obliczeniach obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Obwód działa w każdej jednostce długości: metrach, centymetrach, milimetrach, kilometrach, stopach, calach, jardach czy milach. Liczba zmienia się wraz z jednostką, ale trójkąt nie." },
          { "kind": "h3", "text": "Dlaczego wszystkie trzy pomiary boków muszą używać zgodnych jednostek?" },
          { "kind": "p", "text": "Obwód oblicza się przez dodawanie, a dodawanie ma sens tylko między wielkościami jednorodnymi. Dodanie 3 stóp do 48 cali bez konwersji miesza dwie skale i daje bezsensowną sumę. Najpierw sprowadź każdy bok do jednej wspólnej jednostki, a potem dodaj." },
          { "kind": "h3", "text": "Przykład konwersji jednostek krok po kroku" },
          { "kind": "p", "text": "Dane: [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Zamień cale na stopy: [[48\\text{ inches}=4\\text{ ft}]]. Teraz wszystkie trzy boki są w stopach, więc [[P=3+4+5]] i [[[\\boxed{P=12\\text{ ft}}]]]. Konwersja musi nastąpić przed dodawaniem, nie po." },
          { "kind": "h3", "text": "Jak pomagają selektory jednostek kalkulatora" },
          { "kind": "p", "text": "Każde z trzech pól wejściowych na tej stronie ma własny selektor jednostki. Gdy wybierzesz różne jednostki dla różnych boków, kalkulator automatycznie konwertuje każde wejście do wspólnej jednostki przed dodawaniem: odczytuje jednostkę wybraną dla pierwszego boku i skaluje pozostałe dwa, by pasowały, używając dokładnych stosunków długości (1 cal = 0,0254 m, 1 stopa = 0,3048 m itd.). Wynik jest podawany w tej wspólnej jednostce. Możesz wciąż konwertować ręcznie, jak pokazano powyżej, ale selektory eliminują arytmetykę." },
          { "kind": "h3", "text": "Praca z pomiarami dziesiętnymi" },
          { "kind": "p", "text": "Weź [[a=2.5,\\;b=6,\\;c=6.5]]. Zatem [[P=2.5+6+6.5]], czyli [[[\\boxed{P=15\\text{ units}}]]]. Wartości dziesiętne dodaje się dokładnie tak samo jak liczby całkowite; przecinki dziesiętne po prostu wyrównują się w sumie." },
          { "kind": "h3", "text": "Praca z długościami boków niewymiernymi" },
          { "kind": "p", "text": "Weź trójkąt o [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Zatem [[P=1+1+\\sqrt{2}]], czyli [[[\\boxed{P=2+\\sqrt{2}}]]], około [[P\\approx3.4142]]. Zachowanie dokładnej postaci pierwiastkowej jest użyteczne w zadaniach matematycznych, ponieważ zachowuje pełną precyzję; przybliżenie dziesiętne służy do ostatecznego raportowania." },
          { "kind": "h3", "text": "Dlaczego nie należy zaokrąglać zbyt wcześnie?" },
          { "kind": "p", "text": "Przedwczesne zaokrąglanie wstrzykuje małe błędy, które końcowe dodawanie potem zachowuje. Jeśli bok jest niewymierny, jak [[\\sqrt{2}]], zaokrąglenie go do 1,41 przed dodaniem ujmuje część prawdziwej długości, a przy kilku takich bokach błąd się kumuluje. Zachowaj pełną precyzję podczas obliczeń pośrednich i zaokrąglaj tylko wynik końcowy do dokładności, jakiej wymaga zadanie." }
        ]
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Szesnaście błędów odpowiada za niemal każdy błędny obwód. Każdy jest wyjaśniony z przyczyną i właściwym podejściem." },
          { "kind": "p", "text": "<strong>1. Zapomnienie o uwzględnieniu przeciwprostokątnej.</strong> Najczęstszy błąd: dodanie dwóch przyprostokątnych i zatrzymanie się. Przy 3-4-5 daje to 7 zamiast 12. Zawsze dodawaj wszystkie trzy boki." },
          { "kind": "p", "text": "<strong>2. Użycie tylko dwóch przyprostokątnych.</strong> Ta sama przyczyna źródłowa co powyżej, często z błędnego odczytania zadania. Kontur ma trzy krawędzie; licz trzy." },
          { "kind": "p", "text": "<strong>3. Pomylenie obwodu z polem.</strong> Obwód to [[a+b+c]] w jednostkach liniowych; pole to [[ab/2]] w jednostkach kwadratowych. Przeczytaj pytanie: „wokół” oznacza obwód, „wewnątrz” oznacza pole." },
          { "kind": "p", "text": "<strong>4. Wpisanie przeciwprostokątnej jako przyprostokątnej.</strong> Umieszczenie największej wartości w polu przyprostokątnej psuje geometrię. Slot przeciwprostokątnej musi przechowywać najdłuższy bok." },
          { "kind": "p", "text": "<strong>5. Wybór złego boku jako przeciwprostokątnej.</strong> Jeśli 4 wpisano jako [[c]], a 5 siedzi w polu przyprostokątnej, każda kontrola nie powiedzie się. Najpierw posortuj wartości: największa to [[c]]." },
          { "kind": "p", "text": "<strong>6. Użycie pomiarów, które nie tworzą trójkąta prostokątnego.</strong> Przetestuj [[a^2+b^2=c^2]], zanim zaufasz etykiecie „trójkąt prostokątny”. Jeśli test nie powiedzie się, wzór na obwód wciąż dodaje, ale trójkąt nie jest prostokątny." },
          { "kind": "p", "text": "<strong>7. Mieszanie centymetrów z metrami.</strong> Dodanie 3 m do 40 cm nie daje 43 niczego. Najpierw sprowadź do jednej jednostki." },
          { "kind": "p", "text": "<strong>8. Mieszanie stóp z calami.</strong> Klasyczna imperialna pułapka. Przed dodawaniem zamień cale na stopy (podziel przez 12) lub pozwól to zrobić selektorom jednostek." },
          { "kind": "p", "text": "<strong>9. Podawanie obwodu w jednostkach kwadratowych.</strong> Obwód 12 centymetrów kwadratowych to błąd kategorii: spacer wokół trójkąta to długość, mierzona w cm, m, ft lub in." },
          { "kind": "p", "text": "<strong>10. Zaokrąglanie pomiarów zbyt wcześnie.</strong> Zaokrąglenie [[\\sqrt{2}]] do 1,4 przed dodaniem kumuluje błąd. Zaokrąglaj tylko ostateczną odpowiedź." },
          { "kind": "p", "text": "<strong>11. Zapomnienie o obliczeniu brakującego boku.</strong> Dwa znane boki to nie obwód. Najpierw odzyskaj trzeci twierdzeniem Pitagorasa, a potem dodaj." },
          { "kind": "p", "text": "<strong>12. Błędne użycie twierdzenia Pitagorasa.</strong> Postać na przeciwprostokątną dodaje kwadraty ([[c=\\sqrt{a^2+b^2}]]); postać na przyprostokątną odejmuje ([[b=\\sqrt{c^2-a^2}]]). Zamiana ich wymyśla bok, który nie istnieje." },
          { "kind": "p", "text": "<strong>13. Wpisywanie ujemnych lub zerowych długości boków.</strong> Długości są dodatnie. Wejście zerowe lub ujemne nie opisuje żadnego trójkąta i kalkulator słusznie je odrzuca." },
          { "kind": "p", "text": "<strong>14. Ignorowanie nierówności trójkąta.</strong> Jeśli [[a+b\\leq c]], trzy długości w ogóle nie mogą utworzyć trójkąta. Sprawdź przed obliczaniem." },
          { "kind": "p", "text": "<strong>15. Przyjmowanie, że połowa obwodu to pełny obwód.</strong> Podzielenie sumy przez 2 daje [[s]], nie [[P]]. Dla 3-4-5 [[(3+4+5)/2=6]] to połowa obwodu; obwód wynosi 12." },
          { "kind": "p", "text": "<strong>16. Przyjmowanie, że sam obwód wyznacza pole trójkąta.</strong> Jak pokazało porównanie 3-4-5 z 45-45-90, równe obwody mogą kryć różne pola. Obwód ustala kontur, nie wnętrze." },
          { "kind": "p", "text": "<strong>Błąd kontra poprawka, obok siebie.</strong> Dane: [[a=3,\\;b=4,\\;c=5]]: błędnie to [[P=3+4=7]], co pomija przeciwprostokątną i mierzy tylko dwie przyprostokątne. Poprawnie to [[P=3+4+5=12]]. A [[(3+4+5)/2=6]] to połowa obwodu, inna wielkość o własnych zastosowaniach, nie pełny obwód." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy obwód trójkąta prostokątnego jest poprawny",
        "blocks": [
          { "kind": "p", "text": "Siedem niezależnych kontroli wyłapuje prawie każdy błąd. Trójkąt 3-4-5 pokazuje każdą z nich. Niezależne kontrole mają znaczenie, ponieważ zawodzą na różne sposoby: gdy dwie niepowiązane metody się zgadzają, odpowiedź zasłużyła na zaufanie, czy trafi do pracy domowej, rysunków technicznych czy planowania materiałów." },
          { "kind": "p", "text": "<strong>Metoda 1: Dodaj trzy boki jeszcze raz.</strong> Przelicz [[P=a+b+c]] od zera: [[3+4+5=12]]. Drugie przejście wyłapuje błędy wciskania klawiszy i pomyłki arytmetyczne." },
          { "kind": "p", "text": "<strong>Metoda 2: Zweryfikuj zależność pitagorejską.</strong> Sprawdź [[a^2+b^2=c^2]]: [[9+16=25]]. To potwierdza, że boki tworzą trójkąt prostokątny, co uprawnia oznaczenia boków, od których zależy obwód." },
          { "kind": "p", "text": "<strong>Metoda 3: Sprawdź przeciwprostokątną.</strong> Potwierdź [[c>a]] i [[c>b]]: 5 jest większe niż 3 i większe niż 4. Jeśli rzekoma przeciwprostokątna nie jest najdłuższym bokiem, oznaczenia są błędne." },
          { "kind": "p", "text": "<strong>Metoda 4: Sprawdź nierówność trójkąta.</strong> Potwierdź [[a+b>c]]: [[3+4=7>5]]. Suma każdych dwóch boków musi przekraczać trzeci, inaczej trójkąt nie istnieje." },
          { "kind": "p", "text": "<strong>Metoda 5: Sprawdź ograniczenia obwodu.</strong> Potwierdź [[2c<P<3c]]: [[10<12<15]]. Te ograniczenia to szybkie kontrole myślowe dla każdego prawidłowego trójkąta prostokątnego." },
          { "kind": "p", "text": "<strong>Metoda 6: Sprawdź jednostki miary.</strong> Potwierdź, że wszystkie trzy wejścia dzielą jedną jednostkę. Mieszane jednostki unieważniają sumę, nawet gdy arytmetyka jest doskonała." },
          { "kind": "p", "text": "<strong>Metoda 7: Porównaj wynik z żywą wizualizacją.</strong> Istniejący diagram na tej stronie przerysowuje trójkąt z Twoich wejść. Jeśli bok został błędnie oznaczony lub wartość błędnie wpisana, obrazek wygląda źle: przeciwprostokątna krótsza od przyprostokątnej albo kształt, który się nie zamyka. Zaufaj obrazkowi, gdy nie zgadza się z liczbą, a potem znajdź błąd wejścia." }
        ]
      },
      "sec-conclusion": {
        "h2": "Trzy boki, jeden kontur, żadnych skrótów",
        "blocks": [
          { "kind": "p", "text": "Obwód trójkąta prostokątnego to najprostsza idea na tej stronie i najłatwiejsza do zepsucia przez pominięcie. Wzór prosi o trzy liczby, ponieważ kontur ma trzy krawędzie, a przeciwprostokątna zasługuje na swoje miejsce w sumie jako krawędź, która zamyka kształt. Wszystko inne, metoda krok po kroku, odzyskiwanie brakującego boku, nierówności, kontrole weryfikacyjne, istnieje po to, by chronić to jedno dodawanie przed małymi błędami w oznaczeniach i jednostkach, które produkują prawdopodobnie wyglądające błędne odpowiedzi." },
          { "kind": "p", "text": "Używaj kalkulatora na tej stronie, gdy wszystkie trzy boki są zmierzone, odzyskuj brakujący bok twierdzeniem Pitagorasa, gdy nie są, i sprawdzaj wynik względem ograniczeń 2c < P < 3c, zanim liczba trafi do zamówienia materiału. Gdy pytanie dotyczy powierzchni wewnątrz konturu, czeka kalkulator pola; gdy dotyczy połowy konturu dla głębszego wzoru, przejmuje kalkulator połowy obwodu." }
        ]
      }
    },
    "relatedHeading": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
    "relatedIntro": "Każde z tych narzędzi rozwija obliczenie obwodu w jednym kierunku: brakujące boki, połowy obwodów, powierzchnie, łączone pomiary lub twierdzenie stojące za tym wszystkim.",
    "relatedItems": [
      "Kalkulator pomiarów trójkąta prostokątnego",
      "Kalkulator połowy obwodu trójkąta prostokątnego",
      "Kalkulator boków trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator twierdzenia Pitagorasa"
    ],
    "faqHeading": "Często zadawane pytania",
    "faqs": [
      {
        "question": "Jaki jest wzór na obwód trójkąta prostokątnego?",
        "answer": "Wzór to P = a + b + c, gdzie a i b to dwie przyprostokątne tworzące kąt 90 stopni, a c to przeciwprostokątna, najdłuższy bok. Dodaj wszystkie trzy długości boków; wynik to całkowita długość konturu w jednostkach liniowych."
      },
      {
        "question": "Jak obliczyć obwód trójkąta prostokątnego?",
        "answer": "Rozpoznaj dwie przyprostokątne i przeciwprostokątną, potwierdź, że wszystkie trzy używają tej samej jednostki, podstaw do P = a + b + c i dodaj. Dla trójkąta 3-4-5: P = 3 + 4 + 5 = 12 jednostek. Kalkulator na tej stronie wykonuje te same kroki i pokazuje swoje rozwiązanie."
      },
      {
        "question": "Dlaczego muszę uwzględniać przeciwprostokątną?",
        "answer": "Przeciwprostokątna jest jedną z trzech zewnętrznych krawędzi trójkąta, więc bez niej kontur jest niekompletny. Dodanie tylko dwóch przyprostokątnych trójkąta 3-4-5 daje 7, czyli łączną długość przyprostokątnych, nie obwód. Pełny spacer wokół trójkąta to 3 + 4 + 5 = 12."
      },
      {
        "question": "Czy mogę obliczyć obwód, gdy brakuje jednego boku?",
        "answer": "Tak, ale najpierw odzyskaj brakujący bok twierdzeniem Pitagorasa. Przy przyprostokątnych 6 i 8 przeciwprostokątna wynosi pierwiastek kwadratowy z (36 + 64) = 10, więc obwód to 6 + 8 + 10 = 24. Przy przeciwprostokątnej 13 i przyprostokątnej 5 brakująca przyprostokątna wynosi pierwiastek kwadratowy z (169 - 25) = 12, więc obwód wynosi 30."
      },
      {
        "question": "Jak znaleźć przeciwprostokątną przed obliczeniem obwodu?",
        "answer": "Użyj c = pierwiastek kwadratowy z (a^2 + b^2), gdy znane są obie przyprostokątne. Dla przyprostokątnych 6 i 8: c = pierwiastek kwadratowy z (36 + 64) = pierwiastek kwadratowy ze 100 = 10. Gdy przeciwprostokątna jest znana, dodaj wszystkie trzy boki, by otrzymać obwód."
      },
      {
        "question": "Czy wzór na obwód jest inny dla trójkąta prostokątnego?",
        "answer": "Nie. P = a + b + c działa dla każdego trójkąta. To, co szczególne w trójkącie prostokątnym, to zależność pitagorejska a^2 + b^2 = c^2, która pozwala znaleźć brakujący bok lub zweryfikować, czy pomiary rzeczywiście tworzą trójkąt prostokątny."
      },
      {
        "question": "Ile wynosi obwód trójkąta prostokątnego 3-4-5?",
        "answer": "Obwód wynosi 3 + 4 + 5 = 12 jednostek. Boki spełniają 9 + 16 = 25, potwierdzając kąt prosty. Przeskalowane wersje, jak 6-8-10 czy 9-12-15, zachowują ten sam kształt z proporcjonalnie większymi obwodami."
      },
      {
        "question": "Jak zweryfikować, że trzy boki tworzą trójkąt prostokątny?",
        "answer": "Sprawdź, czy a^2 + b^2 = c^2, przy c jako najdłuższym boku. Dla 3, 4, 5: 9 + 16 = 25, więc trójkąt jest prostokątny. Jeśli równość nie zachodzi, wzór na obwód wciąż dodaje, ale trójkąt nie jest trójkątem prostokątnym."
      },
      {
        "question": "Jaka jest różnica między obwodem a polem?",
        "answer": "Obwód (P = a + b + c) mierzy całkowitą odległość wokół trójkąta w jednostkach liniowych, jak metry czy stopy. Pole (K = ab/2) mierzy powierzchnię wewnątrz trójkąta w jednostkach kwadratowych, jak metry kwadratowe. Dla trójkąta 3-4-5 obwód wynosi 12 jednostek, a pole 6 jednostek kwadratowych."
      },
      {
        "question": "Czy kalkulator obwodu obsługuje wartości dziesiętne?",
        "answer": "Tak. Dziesiętne długości boków działają dokładnie jak liczby całkowite: dla a = 2.5, b = 6, c = 6.5 obwód wynosi 2.5 + 6 + 6.5 = 15 jednostek. Zachowaj pełną precyzję podczas obliczeń i zaokrąglaj tylko ostateczną odpowiedź."
      },
      {
        "question": "Jakich jednostek używać do obwodu?",
        "answer": "Działa każda jednostka długości: metry, centymetry, milimetry, stopy, cale, jardy czy mile. Wszystkie trzy boki muszą dzielić tę samą jednostkę przed dodawaniem. Kalkulator konwertuje każde wejście do wspólnej jednostki automatycznie przez selektory jednostek przy każdym wejściu."
      },
      {
        "question": "Jaki jest związek między obwodem a połową obwodu?",
        "answer": "Połowa obwodu to dokładnie połowa obwodu: s = P/2. Dla trójkąta 3-4-5 P = 12, a s = 6. Połowa obwodu występuje w zaawansowanych wzorach, takich jak wzór Herona na pole i zależność z promieniem okręgu wpisanego K = rs."
      }
    ]
  }
};
