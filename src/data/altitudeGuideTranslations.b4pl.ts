// altitudeGuideTranslations.bpl.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B4_PL = {
  "pl": {
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator wysokości trójkąta prostokątnego",
        "sec-calculate": "Obliczanie wysokości trójkąta prostokątnego",
        "sec-what": "Czym jest wysokość trójkąta prostokątnego?",
        "sec-diagram": "Objaśnienie rysunku wysokości trójkąta prostokątnego",
        "sec-formulas": "Objaśnienie wzorów na wysokość trójkąta prostokątnego",
        "sec-how": "Jak korzystać z kalkulatora wysokości trójkąta prostokątnego",
        "sec-method1": "Metoda 1: Wysokość trójkąta prostokątnego z długości boków",
        "sec-method2": "Metoda 2: Wysokość z rzutów na przeciwprostokątną",
        "sec-two-sides": "Jak znaleźć wysokość, gdy znane są tylko dwa boki",
        "sec-why": "Dlaczego wzór na wysokość trójkąta prostokątnego działa?",
        "sec-proof": "Dowód twierdzenia o wysokości z trójkątów podobnych",
        "sec-examples": "Rozwiązane przykłady z wysokością trójkąta prostokątnego",
        "sec-area": "Związek wysokości z polem trójkąta",
        "sec-geomean": "Średnia geometryczna a rzuty na przeciwprostokątną",
        "sec-properties": "Ważne własności wysokości trójkąta prostokątnego",
        "sec-verify": "Jak sprawdzić, czy odpowiedź jest poprawna",
        "sec-mistakes": "Typowe błędy przy obliczaniu wysokości",
        "sec-applications": "Praktyczne zastosowania wysokości trójkąta prostokątnego",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Zobacz powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
        "sec-conclusion": "Powiązane kalkulatory trójkątów prostokątnych",
      },
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten przewodnik pokazuje dwa sposoby wyznaczania wysokości trójkąta prostokątnego, z rozwiązanymi przykładami dla każdego z nich.",
            },
            {
              "kind": "p",
              "text": "Wysokość to prostopadły odcinek opuszczony z wierzchołka kąta prostego na przeciwprostokątną. Kalkulator wysokości trójkąta prostokątnego wyznacza tę długość na podstawie trzech długości boków albo dwóch rzutów na przeciwprostokątną. Wybierz tryb odpowiadający znanym danym, wpisz pomiary, a kalkulator zwróci wysokość w tej samej jednostce.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Pierwszy wzór wykorzystuje dwie przyprostokątne [[a]] i [[b]] oraz przeciwprostokątną [[c]]. Drugi korzysta z rzutów [[p]] i [[q]], czyli dwóch odcinków, na które wysokość dzieli przeciwprostokątną. Oba wzory wyznaczają tę samą prostopadłą wysokość; po prostu zaczynają od różnych znanych pomiarów.",
            },
          ],
          "h2": "Kalkulator wysokości trójkąta prostokątnego",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator obok przewodnika oferuje dwa tryby, a jedyną potrzebną konfiguracją jest wybranie właściwego. Każdy tryb pyta o inne pomiary i stosuje inny wzór, więc najpierw przeczytaj tabelę i dopasuj tryb do znanych wartości.",
            },
            {
              "kind": "p",
              "text": "Tryb 1, Wysokość do przeciwprostokątnej, przyjmuje przyprostokątną a, przyprostokątną b oraz przeciwprostokątną c. Oblicza wysokość wzorem [[h=\\frac{ab}{c}]], który dzieli iloczyn dwóch przyprostokątnych przez przeciwprostokątną. Tryb 2, Kwadrat wysokości, przyjmuje rzuty p i q, czyli dwa kawałki przeciwprostokątnej, i stosuje wzór [[h=\\sqrt{pq}]], średnią geometryczną rzutów.",
            },
            {
              "kind": "p",
              "text": "Wszystkie pomiary muszą być podane w zgodnych jednostkach: centymetry z centymetrami, metry z metrami. Wynik otrzymasz we wspólnej jednostce długości twoich danych. Przycisk Reset czyści pola przed rozpoczęciem nowego zadania.",
            },
          ],
          "h2": "Obliczanie wysokości trójkąta prostokątnego",
          "table": {
            "headers": [
              "Znane pomiary",
              "Tryb kalkulatora",
              "Wzór",
            ],
            "rows": [
              [
                "Przyprostokątne a, b i przeciwprostokątna c",
                "Wysokość do przeciwprostokątnej",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Rzuty p i q na przeciwprostokątną",
                "Kwadrat wysokości",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wysokość to prostopadły odcinek poprowadzony z jednego wierzchołka trójkąta do prostej zawierającej przeciwległy bok. W trójkącie prostokątnym najbardziej użyteczna wysokość zaczyna się w wierzchołku kąta prostego i spotyka przeciwprostokątną pod kątem prostym. Punkt, w którym spoczywa, nazywa się spodkiem wysokości, a przeciwprostokątna jest naturalną podstawą dla tej pary podstawa-wysokość.",
            },
            {
              "kind": "p",
              "text": "Każdy trójkąt ma trzy wysokości i trójkąt prostokątny nie jest wyjątkiem. Dwie z nich pokrywają się z przyprostokątnymi: jeśli weźmiesz jedną przyprostokątną jako podstawę, druga przyprostokątna jest już do niej prostopadła, więc pełni rolę wysokości. Trzecia wysokość biegnie od wierzchołka kąta prostego do przeciwprostokątnej i leży wewnątrz trójkąta. Ta strona oblicza właśnie tę trzecią, jedyną wysokość wymagającą prawdziwych obliczeń.",
            },
            {
              "kind": "p",
              "text": "Ponieważ spotyka przeciwprostokątną pod kątem prostym, wysokość dzieli pierwotny trójkąt na dwa mniejsze trójkąty prostokątne. Te dwa trójkąty są podobne do siebie i do pierwotnego, dlatego wysokość tworzy eleganckie zależności średniej geometrycznej omawiane w dalszej części przewodnika.",
            },
          ],
          "h2": "Czym jest wysokość trójkąta prostokątnego?",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rysunek poniżej przedstawia trójkąt ABC z kątem prostym w C. Boki AC i BC spotykają się pod kątem prostym, więc AB leży naprzeciw kąta prostego i musi być przeciwprostokątną. Wysokość CD biegnie od C do boku AB, spotykając go w D, a znacznik kąta prostego pokazuje prostopadłość.",
            },
            {
              "kind": "p",
              "text": "Każdy bok ma standardowe oznaczenie: AC = a, BC = b, AB = c, a wysokość CD = h. Wysokość dzieli przeciwprostokątną na dwa rzuty, AD = p i DB = q, więc c = p + q. Zwróć uwagę, że p leży obok przyprostokątnej a, a q obok przyprostokątnej b; ten wzorzec ma znaczenie w dowodzie z podobieństwa niżej.",
            },
            {
              "kind": "p",
              "text": "Czytanie rysunku od lewej do prawej pokazuje całą historię: trójkąt prostokątny, wysokość opuszczoną na przeciwprostokątną, dwa odcinki rzutów oraz pierwotny trójkąt podzielony na dwa mniejsze trójkąty prostokątne, ACD i CBD, które mają wysokość jako wspólny bok.",
            },
          ],
          "h2": "Objaśnienie rysunku wysokości trójkąta prostokątnego",
          "image": {
            "alt": "Trójkąt ABC z kątem prostym w C; wysokość CD poprowadzona do przeciwprostokątnej AB, przy czym AC równa się a, BC równa się b, AB równa się c, CD równa się h, AD równa się p, DB równa się q",
            "caption": "Wysokość CD opada z kąta prostego C prostopadle na przeciwprostokątną AB, dzieląc ją na rzuty p i q.",
            "src": "altitude-main.svg",
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery wzory wyznaczają tę samą wysokość, a każdy zaczyna od innych znanych pomiarów. Kalkulator na żywo stosuje bezpośrednio dwa pierwsze; pozostałe dwa to metody ręczne, z których skorzystasz, gdy pomiary są niepełne lub chcesz zweryfikować wynik w inny sposób.",
            },
            {
              "kind": "p",
              "text": "Wzór bokowy [[h=\\frac{ab}{c}]] wymaga obu przyprostokątnych i przeciwprostokątnej. Wzór rzutowy [[h=\\sqrt{pq}]] potrzebuje jedynie dwóch odcinków przeciwprostokątnej i jest równoważny twierdzeniu o wysokości [[h^2=pq]]. Gdy znasz przyprostokątne, ale nie przeciwprostokątną, podstaw [[c=\\sqrt{a^2+b^2}]], aby otrzymać [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Gdy znasz pole A i przeciwprostokątną c, użyj [[h=\\frac{2A}{c}]], co wynika wprost ze wzoru na pole z przeciwprostokątną jako podstawą.",
            },
            {
              "kind": "p",
              "text": "Nigdy nie traktuj ich jako czterech trybów kalkulatora. Kalkulator ma dokładnie dwa tryby: Wysokość do przeciwprostokątnej i Kwadrat wysokości. Pozostałe wzory to pomocniki do ręcznych obliczeń, do wyprowadzenia brakującego pomiaru przed wpisaniem danych do kalkulatora albo do podwójnego sprawdzenia odpowiedzi, którą wygenerował kalkulator.",
            },
          ],
          "h2": "Objaśnienie wzorów na wysokość trójkąta prostokątnego",
          "table": {
            "headers": [
              "Wzór",
              "Wymagane dane",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Przyprostokątne a, b i przeciwprostokątna c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Rzuty p i q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Obie przyprostokątne a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Pole A i przeciwprostokątna c",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wykonaj te kroki w kolejności, a kalkulator zrobi resztę. Cały proces zajmuje mniej niż minutę, gdy wiesz, jakie pomiary posiadasz.",
            },
            {
              "kind": "steps",
              "steps": [
                "Określ znane pomiary: czy są to trzy długości boków, czy dwa rzuty na przeciwprostokątną?",
                "Wybierz tryb kalkulatora odpowiadający danym: Wysokość do przeciwprostokątnej dla trzech boków, Kwadrat wysokości dla dwóch rzutów.",
                "Wpisz dodatnie pomiary w zgodnych jednostkach, w razie potrzeby najpierw przeliczając mieszane jednostki.",
                "Sprawdź, czy pomiary opisują poprawny trójkąt prostokątny, w którym przyprostokątne spełniają twierdzenie Pitagorasa.",
                "Kliknij przycisk Oblicz, aby uruchomić wybrany tryb.",
                "Odczytaj wynik wysokości we wspólnej jednostce twoich danych.",
                "Zweryfikuj odpowiedź jedną z metod sprawdzania z tego przewodnika, jeśli zadanie jest ważne.",
                "Kliknij Reset przed wpisaniem nowego zadania, aby stare wartości nigdy nie mieszały się z nowymi.",
              ],
            },
            {
              "kind": "p",
              "text": "Wybór trybu to najważniejszy krok. Jeśli znasz przyprostokątne a i b oraz przeciwprostokątną c, pasuje tryb Wysokość do przeciwprostokątnej. Jeśli znasz tylko podział przeciwprostokątnej na p i q, wybierz Kwadrat wysokości. Zły tryb odrzuci poprawne dane, więc dopasowanie trybu do pomiarów oszczędza frustracji.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora wysokości trójkąta prostokątnego",
        },
        "sec-method1": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gdy znane są wszystkie trzy długości boków, wysokość bierze się z jednego dzielenia. Wzór [[h=\\frac{ab}{c}]] mnoży dwie przyprostokątne i dzieli przez przeciwprostokątną, a każdy symbol ma stałe znaczenie: a i b to prostopadłe przyprostokątne, c to przeciwprostokątna, a h to wysokość opuszczona na przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "Klasyczny trójkąt 3-4-5 pokazuje każdy krok. Dane: a = 3 cm, b = 4 cm i c = 5 cm, podstaw do wzoru:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Najpierw pomnóż przyprostokątne: 3 × 4 = 12. Potem podziel przez przeciwprostokątną:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Wynik to h = 2.4 cm. Zwróć uwagę, że 2.4 jest mniejsze od obu przyprostokątnych, co zawsze zachodzi dla wysokości opuszczonej na przeciwprostokątną, a sekcja z dowodem wyjaśnia później, dlaczego dzielenie przez c jest geometrycznie naturalne.",
            },
            {
              "kind": "p",
              "text": "Tę metodę stosuj zawsze, gdy trzy boki są znane lub można je zmierzyć bezpośrednio. Dla narzędzia obsługującego tylko dane bokowe wypróbuj <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator wysokości z boków</a>, który bardziej szczegółowo przechodzi przez ten sam wzór.",
            },
          ],
          "h2": "Metoda 1: Wysokość trójkąta prostokątnego z długości boków",
          "image": {
            "alt": "Trójkąt prostokątny o przyprostokątnych 3 i 4, przeciwprostokątnej 5, z wysokością 2.4 poprowadzoną prostopadle do przeciwprostokątnej",
            "caption": "Trójkąt 3-4-5: wysokość h równa się (3 x 4) / 5 = 2.4.",
            "src": "altitude-sides-345.svg",
          },
        },
        "sec-method2": {
          "blocks": [
            {
              "kind": "p",
              "text": "Gdy przeciwprostokątna jest już podzielona na dwa rzuty, twierdzenie o wysokości daje skrót. Twierdzenie mówi, że [[h^2=pq]], więc wysokość jest pierwiastkiem kwadratowym z iloczynu dwóch rzutów:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij p = 9 cm i q = 16 cm. Najpierw zapisz twierdzenie w postaci kwadratu:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Pomnóż: 9 × 16 = 144, więc [[h^2=144]]. Teraz wyciągnij pierwiastek kwadratowy:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Wynik to h = 12 cm. Oznacza to, że wysokość jest średnią geometryczną dwóch rzutów: mieści się między nimi co do wielkości, bliżej ich średniej niż którejkolwiek skrajnej wartości; znaczenie to szerzej wyjaśnia sekcja o średniej geometrycznej.",
            },
            {
              "kind": "p",
              "text": "Pamiętaj, że p i q to odcinki przeciwprostokątnej, nie przyprostokątne trójkąta. Częstym błędem jest wpisywanie długości przyprostokątnych jako rzutów, co daje zły wynik. Narzędzie zbudowane wyłącznie wokół tej metody znajdziesz tutaj: <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator wysokości z rzutów</a>.",
            },
          ],
          "h2": "Metoda 2: Wysokość z rzutów na przeciwprostokątną",
          "image": {
            "alt": "Trójkąt prostokątny z wysokością h dzielącą przeciwprostokątną na rzuty p = 9 i q = 16, wysokość h = 12",
            "caption": "Wysokość jest średnią geometryczną rzutów: sqrt(9 x 16) = 12.",
            "src": "altitude-projections.svg",
          },
        },
        "sec-two-sides": {
          "blocks": [
            {
              "kind": "p",
              "text": "Czasem brakuje trzeciego boku, ale twierdzenie Pitagorasa odzyskuje go w jednym kroku. Metoda odzyskiwania zależy od tego, które dwa boki znasz, więc potraktuj każdy przypadek osobno.",
            },
            {
              "kind": "h3",
              "text": "Przypadek 1: Znane są obie przyprostokątne",
            },
            {
              "kind": "p",
              "text": "Dane: a = 6 cm i b = 8 cm, najpierw znajdź przeciwprostokątną ze wzoru [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Teraz znane są wszystkie trzy boki, więc zastosuj wzór bokowy: h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. Brakująca przeciwprostokątna była jedyną przeszkodą, a wysokość wynika wprost.",
            },
            {
              "kind": "h3",
              "text": "Przypadek 2: Znana jest jedna przyprostokątna i przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Dane: a = 5 cm i c = 13 cm, wyznacz brakującą przyprostokątną ze wzoru [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Po odzyskaniu b = 12 cm wysokość wynosi h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. To ręczne wyprowadzenia służące znalezieniu wymaganych pomiarów; sam kalkulator pyta o kompletne dane, więc wykonaj tę wstępną pracę na papierze, zanim wpiszesz wartości.",
            },
            {
              "kind": "p",
              "text": "Jeśli często potrzebujesz samego brakującego boku, <a href=\"/right-triangle-side-calculator/\">kalkulator boków</a> wyznaczy go bezpośrednio, zanim przejdziesz do wysokości.",
            },
          ],
          "h2": "Jak znaleźć wysokość, gdy znane są tylko dwa boki",
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór działa, ponieważ jeden trójkąt można zmierzyć dwiema różnymi parami podstawa-wysokość, a pole pozostaje takie samo w obu przypadkach. Ten argument polowy jest najkrótszym uczciwym dowodem wzoru [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Najpierw użyj przyprostokątnych jako pary podstawa-wysokość. Ponieważ przyprostokątne są prostopadłe, pole to po prostu połowa ich iloczynu:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz użyj przeciwprostokątnej jako podstawy, a wysokości jako wysokości. Ten sam trójkąt ma to samo pole:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Dwa wyrażenia na jedno pole, więc przyrównaj je:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Pomnóż obie strony przez 2, aby usunąć ułamki, co daje ab = ch. Podziel obie strony przez c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Każdy krok to odwracalna arytmetyka, więc dzielenie przez przeciwprostokątną nie jest sztuczką; to algebraiczny koszt przejścia z pary podstawa-wysokość przyprostokątnych na parę podstawa-wysokość przeciwprostokątnej przy niezmiennym polu.",
            },
          ],
          "h2": "Dlaczego wzór na wysokość trójkąta prostokątnego działa?",
          "image": {
            "alt": "Ten sam trójkąt prostokątny narysowany dwukrotnie: najpierw z podstawą a i wysokością b, potem z podstawą c i wysokością h",
            "caption": "Ten sam trójkąt, dwie pary podstawa-wysokość: pole równa się ab/2 i ch/2, więc h równa się ab/c.",
            "src": "altitude-area-comparison.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór rzutowy [[h=\\sqrt{pq}]] wynika z podobieństwa. Zachowaj spójne oznaczenia: trójkąt ABC jest prostokątny w C, D leży na AB, CD jest prostopadłe do AB, AD = p, DB = q oraz CD = h.",
            },
            {
              "kind": "p",
              "text": "Wysokość dzieli ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD. Kąt przy A jest wspólny dla ABC i ACD, więc te dwa są podobne; podobnie kąt przy B jest wspólny dla ABC i CBD. Ponieważ oba mniejsze trójkąty są podobne do pierwotnego, są podobne do siebie: trójkąt ACD jest podobny do trójkąta CBD.",
            },
            {
              "kind": "p",
              "text": "Zapisz podobieństwo jako proporcję odpowiadających boków. Krótka przyprostokątna ACD to p, a długa to h; w CBD krótka przyprostokątna to h, a długa to q. Dopasowanie ich daje:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Wymnóż na krzyż: h × h = p × q, więc h² = pq. Wyciągnij pierwiastek kwadratowy:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Używamy tylko dodatniego pierwiastka, ponieważ długości boków są dodatnie. Ujemny pierwiastek nie ma tu znaczenia geometrycznego. Kluczowym spostrzeżeniem jest to, że wysokość jest średnią proporcjonalną między dwoma odcinkami przeciwprostokątnej, co jest dokładnie tym, czym jest średnia geometryczna.",
            },
          ],
          "h2": "Dowód twierdzenia o wysokości z trójkątów podobnych",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC z wysokością CD, obok dwa mniejsze podobne trójkąty ACD i CBD z oznaczonymi odpowiadającymi bokami",
            "caption": "Trójkąty ACD i CBD są podobne: p/h = h/q, więc h do kwadratu równa się p razy q.",
            "src": "altitude-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Siedem przykładów obejmuje oba tryby kalkulatora, przeliczanie jednostek i pomiary dziesiętne. Każdy pokazuje dane wartości, wybrany wzór, podstawienie i końcową odpowiedź.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Klasyczny trójkąt 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dane: a = 3 cm, b = 4 cm, c = 5 cm. Użyj wzoru [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. Wysokość jest krótsza od każdej przyprostokątnej, jak zawsze.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Trójkąt 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dane: a = 5 m, b = 12 m, c = 13 m. Użyj wzoru [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Zachowaj ułamek do ostatniego kroku, aby otrzymać czysty zapis dziesiętny.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Trójkąt 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dane: a = 8 cm, b = 15 cm, c = 17 cm. Użyj wzoru [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Większe przyprostokątne nadal dają wysokość mniejszą od obu.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Równe rzuty na przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane: p = 5 cm i q = 5 cm. Użyj wzoru [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Równe rzuty oznaczają, że wysokość jest największa możliwa dla tej przeciwprostokątnej, a trójkąt jest prostokątny równoramienny: każda przyprostokątna ma 5√2 cm, czyli około 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Nierówne rzuty na przeciwprostokątną",
            },
            {
              "kind": "p",
              "text": "Dane: p = 4 cm i q = 25 cm. Użyj wzoru [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Zwróć uwagę, jak wysokość 10 mieści się między dwoma rzutami, 4 i 25, co jest znakiem rozpoznawczym średniej geometrycznej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane: a = 1.5 m, b = 2 m, c = 2.5 m. Użyj wzoru [[h=\\frac{ab}{c}]]: h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. Liczby dziesiętne działają dokładnie jak liczby całkowite, o ile każda wartość używa tej samej jednostki.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki pomiaru",
            },
            {
              "kind": "p",
              "text": "Dane: a = 30 cm, b = 0.4 m, c = 0.5 m. Najpierw przelicz wszystko na centymetry: b = 40 cm, c = 50 cm. Potem h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Przeliczenie przed podstawieniem zapobiega najczęstszemu błędowi jednostek.",
            },
          ],
          "h2": "Rozwiązane przykłady z wysokością trójkąta prostokątnego",
        },
        "sec-area": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pole i wysokość wyznaczają się nawzajem, gdy znana jest przeciwprostokątna. Przy przeciwprostokątnej jako podstawie pole A = ch/2, więc rozwiązanie względem wysokości daje [[h=\\frac{2A}{c}]]. To prawdziwie inna droga: całkowicie pomija przyprostokątne.",
            },
            {
              "kind": "p",
              "text": "Załóżmy, że zadanie podaje pole A = 54 cm² i przeciwprostokątną c = 15 cm. Podstaw:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Pomnóż licznik: 2 × 54 = 108. Potem podziel: h = 108 / 15 = 7.2 cm. Wysokość wynika bez znajomości poszczególnych przyprostokątnych.",
            },
            {
              "kind": "p",
              "text": "Ta droga jest użyteczna, gdy pole jest dane wprost, na przykład w zadaniach tekstowych o działkach lub materiale. Służy też jako narzędzie weryfikacji: oblicz wysokość z boków, potem potwierdź, że 2A/c daje tę samą wartość. <a href=\"/right-triangle-area-calculator/\">Kalkulator pola</a> wyznacza pole z dowolnych pomiarów podanych w zadaniu.",
            },
          ],
          "h2": "Związek wysokości z polem trójkąta",
        },
        "sec-geomean": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o wysokości mówi, że wysokość jest średnią geometryczną dwóch rzutów, a średnia geometryczna to szczególny rodzaj średniej. Weź p = 4 i q = 9. Ich średnia geometryczna to √(4 × 9) = √36 = 6, więc trójkąt o takich rzutach ma wysokość 6.",
            },
            {
              "kind": "p",
              "text": "Porównaj to ze zwykłą średnią arytmetyczną: (4 + 9) / 2 = 6.5. Dwie średnie różnią się i tylko 6 jest poprawną wysokością. Średnia arytmetyczna uśrednia przez dodawanie, a średnia geometryczna przez mnożenie, co pasuje do długości skalujących się razem, a nie sumujących.",
            },
            {
              "kind": "p",
              "text": "Geometrycznie zależność średniej proporcjonalnej h² = pq oznacza, że wysokość ma się do każdego rzutu tak, jak rzuty mają się do siebie. Ta symetria sprawia, że dwa mniejsze trójkąty są podobne, i dlatego wysokość zawsze co do wielkości leży między dwoma rzutami, nigdy nie równa się średniej arytmetycznej, chyba że p równa się q.",
            },
          ],
          "h2": "Średnia geometryczna a rzuty na przeciwprostokątną",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Siedem własności opisuje wysokość opuszczoną na przeciwprostokątną. Razem dają niezawodną intuicję co do tego, jakie wartości wysokości są możliwe i jak się zachowują.",
            },
            {
              "items": [
                "Wysokość opuszczona na przeciwprostokątną jest do niej prostopadła, więc jest najkrótszą odległością od wierzchołka kąta prostego do przeciwprostokątnej.",
                "Wysokość dzieli trójkąt na dwa mniejsze trójkąty, z których każdy jest podobny do pierwotnego i do siebie nawzajem.",
                "Wysokość jest krótsza od obu przyprostokątnych; żadna przyprostokątna nie może być najkrótszą drogą do przeciwprostokątnej.",
                "Wysokość jest krótsza od samej przeciwprostokątnej, ponieważ odcinek prostopadły jest najkrótszą trasą.",
                "Wysokość jest średnią geometryczną dwóch rzutów na przeciwprostokątną, [[h=\\sqrt{pq}]].",
                "Przy stałej przeciwprostokątnej wysokość jest największa, gdy oba rzuty są równe, co zachodzi, gdy przyprostokątne są równe.",
                "Przeskalowanie każdej długości boku tym samym czynnikiem skaluje wysokość tym czynnikiem; podwojony trójkąt to podwojona wysokość.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Szósta własność ma precyzyjne ograniczenie: wysokość nigdy nie może przekroczyć połowy przeciwprostokątnej, [[h \\leq \\frac{c}{2}]], przy czym równość zachodzi tylko, gdy przyprostokątne są równe. Trójkąt 45-45-90 o przeciwprostokątnej 10 ma wysokość dokładnie 5, maksimum; trójkąt 6-8-10 o tej samej przeciwprostokątnej osiąga tylko 4.8, jak pokazuje rysunek.",
            },
          ],
          "h2": "Ważne własności wysokości trójkąta prostokątnego",
          "image": {
            "alt": "Dwa trójkąty prostokątne o wspólnej przeciwprostokątnej 10: trójkąt 45-45-90 o wysokości 5 i trójkąt typu 6-8-10 o wysokości 4",
            "caption": "Ta sama przeciwprostokątna 10: równe rzuty dają najwyższą wysokość, 5.",
            "src": "altitude-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy niezależne sprawdzenia wyłapują błędy obliczeń. Użyj przynajmniej jednego z nich zawsze, gdy odpowiedź ma znaczenie.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 1: Pole trójkąta",
            },
            {
              "kind": "p",
              "text": "Porównaj ab/2 z ch/2 przy użyciu twojej wysokości. Dla trójkąta 3-4-5 przy h = 2.4: ab/2 = (3 × 4)/2 = 6, a ch/2 = (5 × 2.4)/2 = 6. Zgodne pola potwierdzają, że wysokość pasuje do boków.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 2: Średnia geometryczna",
            },
            {
              "kind": "p",
              "text": "Sprawdź [[h^2=pq]], gdy znane są rzuty. Przy p = 9 i q = 16: h² = 12² = 144, a pq = 9 × 16 = 144. Równość oznacza, że wysokość zgadza się z podziałem przeciwprostokątnej.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 3: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Potwierdź [[a^2+b^2=c^2]] dla danych boków: 9 + 16 = 25 w przypadku 3-4-5. To sprawdzenie weryfikuje długości boków, nie samą wysokość bezpośrednio, ale błędny wpis boku jest najczęstszym powodem, dla którego odpowiedź nie przechodzi dwóch pozostałych sprawdzeń.",
            },
            {
              "kind": "p",
              "text": "Wykonuj każde sprawdzenie w spójnych jednostkach. Mieszanie centymetrów z metrami po cichu psuje sprawdzenie pola, więc najpierw przelicz, potem sprawdź.",
            },
          ],
          "h2": "Jak sprawdzić, czy odpowiedź jest poprawna",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć błędów pojawia się wciąż od nowa. Każdy łatwo rozpoznać, gdy znasz jego sygnaturę.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mylenie wysokości z przyprostokątną. Wysokość spotyka przeciwprostokątną pod kątem prostym; przyprostokątna spotyka drugą przyprostokątną pod kątem prostym. W trójkącie 3-4-5 h = 2.4, nie 3 ani 4.",
                "Wybór złego trybu kalkulatora. Wpisanie przyprostokątnych i przeciwprostokątnej w trybie Kwadrat wysokości, który oczekuje rzutów, daje bezsens. Dopasuj tryb do pomiarów.",
                "Mylenie rzutów z przyprostokątnymi. Wpisanie a = 3 i b = 4 jako p i q daje √(12) ≈ 3.46, co nie jest wysokością. Rzuty to odcinki przeciwprostokątnej.",
                "Użycie złej przeciwprostokątnej. Dzielenie ab przez przyprostokątną zamiast przez przeciwprostokątną, np. 12/4 = 3, zawyża wysokość. Dzielnik musi być najdłuższym bokiem, c.",
                "Zapomnienie pierwiastka kwadratowego we wzorze rzutowym. Zatrzymanie się na h² = 144 daje 144 jako wysokość; prawdziwa odpowiedź to h = 12.",
                "Mieszanie centymetrów i metrów. Przy a = 30 cm i c = 0.5 m podstawienie 0.5 wprost daje złą wysokość. Najpierw przelicz: 50 cm.",
                "Wpisywanie nieprawidłowych długości boków. Boki takie jak 2, 3, 10 nie spełniają twierdzenia Pitagorasa, więc żaden trójkąt prostokątny nie istnieje i wysokość nie jest określona.",
                "Zaokrąglanie zbyt wcześnie. Zaokrąglenie 60/13 do 4.6 przed kolejnym krokiem przenosi błąd dalej. Zachowaj ułamek i zaokrąglaj tylko końcową odpowiedź.",
                "Traktowanie h² jako końcowej wysokości. Jeśli obliczenia kończą się na h² = 36, wysokość to 6, nie 36.",
                "Stosowanie wzorów trójkąta prostokątnego do dowolnego trójkąta. Tutejsze wzory wymagają kąta prostego; dla innych trójkątów zależności wysokości są inne.",
              ],
            },
          ],
          "h2": "Typowe błędy przy obliczaniu wysokości",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Obliczenia wysokości wspierają każdą pracę opartą na geometrii trójkąta prostokątnego. W edukacji geometrycznej twierdzenie o wysokości daje uczniom pierwszy kontakt z dowodami z podobieństwa i średnimi geometrycznymi. Rysunek techniczny i projektowanie geometryczne wykorzystują wysokość do pozycjonowania prostopadłych przy układaniu trójkątnych paneli lub kształtów wsporników.",
            },
            {
              "kind": "p",
              "text": "Geometria geodezyjna wykorzystuje zależności trójkąta prostokątnego przy wytyczaniu działek z prostopadłymi przesunięciami, a modele planowania budowlanego, gdy prostokątna rama musi stykać się ze ścianą pod kątem prostym. Obliczenia pola biegną też w odwrotną stronę: znając pole i przeciwprostokątną, wzór [[h=\\frac{2A}{c}]] odzyskuje wysokość bez mierzenia przyprostokątnych.",
            },
            {
              "kind": "p",
              "text": "To hipotetyczne szkice geometryczne, nie procedury inżynierskie. Prawdziwe prace geodezyjne i konstrukcyjne wymagają odpowiednich pomiarów, założeń projektowych i norm zawodowych; twierdzenie o wysokości opisuje geometrię, nigdy nie zastępuje profesjonalnych metod.",
            },
          ],
          "h2": "Praktyczne zastosowania wysokości trójkąta prostokątnego",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pięć zadań używa wartości niewidzianych w głównych przykładach. Rozwiąż każde, potem sprawdź odpowiedzi poniżej.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Poziom podstawowy, dane bokowe",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne a = 9 cm i b = 40 cm oraz przeciwprostokątną c = 41 cm. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Poziom podstawowy, dane rzutowe",
            },
            {
              "kind": "p",
              "text": "Wysokość trójkąta prostokątnego dzieli przeciwprostokątną na p = 16 m i q = 36 m. Znajdź wysokość.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma a = 0.6 m, b = 0.8 m, c = 1.0 m. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Brakujący bok",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątną a = 7 in i przeciwprostokątną c = 25 in. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Pole rabaty ogrodowej",
            },
            {
              "kind": "p",
              "text": "Prostokątna rabata ogrodowa ma pole A = 96 m² i przeciwprostokątną 20 m. Znajdź wysokość opuszczoną na przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Zadanie 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Najpierw potwierdź boki: 9² + 40² = 81 + 1600 = 1681 = 41², więc trójkąt jest poprawny.",
            },
            {
              "kind": "p",
              "text": "Zadanie 2: h = √(16 × 36) = √576 = 24 m. Wysokość mieści się między dwoma rzutami, jak wymaga średnia geometryczna.",
            },
            {
              "kind": "p",
              "text": "Zadanie 3: h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. Liczby dziesiętne wymagają takiego samego traktowania jak liczby całkowite.",
            },
            {
              "kind": "p",
              "text": "Zadanie 4: Odzyskaj brakującą przyprostokątną: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Potem h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Zadanie 5: Skorzystaj z drogi przez pole: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. Nie były potrzebne żadne pomiary przyprostokątnych.",
            },
          ],
          "h2": "Zadania do ćwiczeń z odpowiedziami",
        },
        "sec-conclusion": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten przewodnik obejmował oba tryby wysokości: długości boków i rzuty na przeciwprostokątną. Jeśli już wiesz, jakie pomiary posiadasz, wyspecjalizowane narzędzia idą głębiej: <a href=\"/right-triangle-altitude-from-sides-calculator/\">kalkulator wysokości z boków</a> i <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulator wysokości z rzutów</a>. <a href=\"/right-triangle-projection-calculator/\">Kalkulator rzutów</a> znajduje same p i q, gdy znane są tylko boki.",
            },
          ],
          "h2": "Powiązane kalkulatory trójkątów prostokątnych",
        },
      },
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wysokość opuszczona na przeciwprostokątną to prostopadły odcinek od wierzchołka kąta prostego do przeciwprostokątnej. Jest to trzecia wysokość trójkąta prostokątnego, różna od dwóch przyprostokątnych, i dzieli przeciwprostokątną na rzuty p i q.",
          "question": "Czym jest wysokość trójkąta prostokątnego?",
        },
        {
          "answer": "Użyj wzoru bokowego [[h=\\frac{ab}{c}]], gdy znane są przyprostokątne i przeciwprostokątna, albo wzoru rzutowego [[h=\\sqrt{pq}]], gdy znane są odcinki przeciwprostokątnej. Kalkulator stosuje tryb odpowiadający twoim pomiarom.",
          "question": "Jak obliczyć wysokość trójkąta prostokątnego?",
        },
        {
          "answer": "Przy przyprostokątnych a i b oraz przeciwprostokątnej c wysokość wynosi [[h=\\frac{ab}{c}]]. Pomnóż dwie przyprostokątne i podziel przez przeciwprostokątną. Dla trójkąta 3-4-5 h = (3 × 4) / 5 = 2.4.",
          "question": "Jaki jest wzór na wysokość przy użyciu trzech boków?",
        },
        {
          "answer": "Twierdzenie o wysokości mówi, że [[h^2=pq]], więc wyciągnij pierwiastek kwadratowy: [[h=\\sqrt{pq}]]. Dla p = 9 i q = 16 h = √(9 × 16) = √144 = 12. Rzuty to odcinki przeciwprostokątnej, nie przyprostokątne.",
          "question": "Jak obliczyć wysokość z rzutów?",
        },
        {
          "answer": "Tak, najpierw odzyskując trzeci bok. Znając obie przyprostokątne, znajdź [[c=\\sqrt{a^2+b^2}]]; znając jedną przyprostokątną i przeciwprostokątną, znajdź [[b=\\sqrt{c^2-a^2}]]. Potem zastosuj [[h=\\frac{ab}{c}]] jak zwykle.",
          "question": "Czy mogę obliczyć wysokość, znając tylko dwa boki?",
        },
        {
          "answer": "W trójkątach prostokątnych potoczne znaczenia często się pokrywają, ale wysokość trójkąta ma precyzyjne znaczenie prostopadłego odcinka od wierzchołka do przeciwległego boku. Na tej stronie wysokość zawsze oznacza prostopadłą od wierzchołka kąta prostego do przeciwprostokątnej.",
          "question": "Czy wysokość zawsze oznacza prostopadły odcinek?",
        },
        {
          "answer": "Tak. Wysokość jest najkrótszą odległością od wierzchołka kąta prostego do przeciwprostokątnej, a przeciwprostokątna jest dłuższa od każdego takiego odcinka. Jest też krótsza od obu przyprostokątnych.",
          "question": "Czy wysokość jest zawsze krótsza od przeciwprostokątnej?",
        },
        {
          "answer": "Tak, gdy rzuty są równe. Jeśli p = q, to [[h=\\sqrt{p \\times p}=p]], więc wysokość równa się każdemu rzutowi. Zachodzi to w prostokątnych trójkątach równoramiennych, gdzie wysokość jest też połową przeciwprostokątnej.",
          "question": "Czy wysokość może być równa rzutowi na przeciwprostokątną?",
        },
        {
          "answer": "Twierdzenie o średniej geometrycznej to inna nazwa twierdzenia o wysokości: [[h=\\sqrt{pq}]] mówi, że wysokość jest średnią geometryczną rzutów na przeciwprostokątną. Dowodzi tego podobieństwo dwóch mniejszych trójkątów.",
          "question": "Jak twierdzenie o średniej geometrycznej wiąże się z wysokością?",
        },
        {
          "answer": "Porównaj dwa wzory na pole, ab/2 i ch/2; muszą się zgadzać. Jeśli znane są rzuty, potwierdź [[h^2=pq]]. Sprawdź też [[a^2+b^2=c^2]], aby upewnić się, że boki opisują poprawny trójkąt prostokątny.",
          "question": "Jak sprawdzić moje obliczenie wysokości?",
        },
        {
          "answer": "Nie. Oba wzory wymagają kąta prostego: argument polowy potrzebuje prostopadłych przyprostokątnych, a twierdzenie o wysokości potrzebuje podobieństwa z kąta prostego. Dla innych trójkątów zależności wysokości są inne.",
          "question": "Czy mogę użyć tego kalkulatora do trójkąta, który nie jest prostokątny?",
        },
        {
          "answer": "Wybierz Wysokość do przeciwprostokątnej, gdy znasz dwie przyprostokątne i przeciwprostokątną. Wybierz Kwadrat wysokości, gdy znasz dwa rzuty na przeciwprostokątną, p i q. Dopasowanie trybu do znanych pomiarów to jedyna ważna konfiguracja.",
          "question": "Który tryb kalkulatora wybrać?",
        },
      ],
      "relatedHeading": "Zobacz powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Wybierz narzędzie odpowiadające pomiarom, które już znasz.",
      "relatedItems": [
        "Kalkulator wysokości trójkąta prostokątnego z boków",
        "Kalkulator wysokości trójkąta prostokątnego z rzutów",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator boków trójkąta prostokątnego",
        "Kalkulator rzutów trójkąta prostokątnego",
      ],
    },
};
