// legBFromProjectionGuideTranslations.bpl.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B4_PL = {
  "pl": {
      "faqHeading": "Najczęściej zadawane pytania",
      "faqs": [
        {
          "question": "Jaki jest wzór na znalezienie przyprostokątnej b z rzutu q?",
          "answer": "Wzór to [[b = \\sqrt{c \\times q}]], gdzie c to pełna przeciwprostokątna, a q to rzut należący do przyprostokątnej b. Na przykład [[c = 10]] cm i [[q = 6.4]] cm dają [[b = 8]] cm.",
        },
        {
          "question": "Dlaczego mnożymy c przez q?",
          "answer": "Mnożenie wynika z podobieństwa trójkątów. Trójkąt CBD jest podobny do trójkąta ABC, co daje [[q / b = b / c]], a mnożenie na krzyż daje [[b^2 = c \\times q]]. Iloczyn jest kwadratem przyprostokątnej, a nie samą przyprostokątną.",
        },
        {
          "question": "Dlaczego potrzebny jest pierwiastek kwadratowy?",
          "answer": "Ponieważ iloczyn cq jest równy b do kwadratu, a nie b. Pierwiastek kwadratowy odwraca podnoszenie do kwadratu i zwraca zwykłą długość. Bez niego w przykładzie c = 10, q = 6,4 podałbyś 64 zamiast 8.",
        },
        {
          "question": "Co oznacza rzut q?",
          "answer": "Rzut q to odcinek przeciwprostokątnej leżący przy wierzchołku B, utworzony, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną. W trójkącie ABC o wysokości CD [[q = DB]], a odcinek ten leży wzdłuż przeciwprostokątnej.",
        },
        {
          "question": "Czy rzut q to to samo co przyprostokątna b?",
          "answer": "Nie. Przyprostokątna b to bok BC, jeden z boków tworzących kąt prosty, natomiast rzut q to odcinek DB wzdłuż przeciwprostokątnej. Są to różne długości w różnych położeniach, powiązane jedynie wzorem [[b^2 = c \\times q]].",
        },
        {
          "question": "Dlaczego używa się q zamiast p?",
          "answer": "Ponieważ każda przyprostokątna łączy się z rzutem leżącym przy jej własnym wierzchołku. Przyprostokątna b styka się z wierzchołkiem B, a q to odcinek leżący przy B. Użycie p dałoby przyprostokątną a, ponieważ p łączy się z przyprostokątną stykającą się z wierzchołkiem A.",
        },
        {
          "question": "Czy mogę znaleźć przyprostokątną b, jeśli znany jest tylko rzut p?",
          "answer": "Tak. Najpierw odejmij p od przeciwprostokątnej: [[q = c - p]]. Przy [[c = 25]] cm i [[p = 9]] cm [[q = 16]] cm, a następnie [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "Czy rzut q może być większy od przeciwprostokątnej?",
          "answer": "Nie. Rzut q to tylko część przeciwprostokątnej, więc musi być mniejszy od c. Gdyby q równało się c, p byłoby zerowe, a trójkąt byłby zdegenerowany, a nie prawdziwym trójkątem prostokątnym.",
        },
        {
          "question": "Jak sprawdzić obliczoną przyprostokątną?",
          "answer": "Podnieś odpowiedź do kwadratu i sprawdź, czy jest równa [[c \\times q]]. Możesz też znaleźć przyprostokątną a z p i sprawdzić [[a^2 + b^2 = c^2]] oraz potwierdzić, że q jest mniejsze od c, a przyprostokątna b jest krótsza od przeciwprostokątnej.",
        },
        {
          "question": "Co się dzieje, gdy p i q są równe?",
          "answer": "Wysokość pada na środek przeciwprostokątnej, a obie przyprostokątne są równe, więc trójkąt jest równoramiennym trójkątem prostokątnym. Przy [[c = 20]] cm i [[p = q = 10]] cm obie przyprostokątne są równe [[10\\sqrt{2}]] cm, około 14,142 cm.",
        },
        {
          "question": "Czy mogę znaleźć przyprostokątną a, korzystając z tego samego twierdzenia?",
          "answer": "Tak, stosując lustrzany wzór [[a = \\sqrt{c \\times p}]]. Przyprostokątna a łączy się z rzutem p, tak jak przyprostokątna b łączy się z q. <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kalkulator przyprostokątnej a z rzutu</a> jest przeznaczony właśnie do tego obliczenia.",
        },
        {
          "question": "Czy twierdzenie o rzucie jest powiązane z twierdzeniem Pitagorasa?",
          "answer": "Tak. Dodanie dwóch wzorów na rzuty daje [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], ponieważ [[p + q = c]]. Twierdzenie o rzucie dzieli zależność pitagorejską na jeden składnik na każdą przyprostokątną.",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Wybierz kolejne narzędzie według pomiarów, które już znasz, ponieważ każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego.",
      "relatedItems": [
        "Kalkulator rzutu trójkąta prostokątnego",
        "Kalkulator rzutu p trójkąta prostokątnego",
        "Kalkulator rzutu q trójkąta prostokątnego",
        "Kalkulator przyprostokątnej a z rzutu trójkąta prostokątnego",
        "Kalkulator przeciwprostokątnej z rzutów trójkąta prostokątnego",
        "Kalkulator wysokości z rzutów trójkąta prostokątnego",
        "Kalkulator boków trójkąta prostokątnego",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten kalkulator znajduje przyprostokątną b trójkąta prostokątnego, gdy znasz pełną przeciwprostokątną c oraz rzut q należący do przyprostokątnej b. Wpisujesz te dwie długości, a kalkulator zwraca rzeczywistą długość boku przyprostokątnej b, a nie wartość podniesioną do kwadratu ani odcinek rzutu. Wzór to [[b = \\sqrt{c \\times q}]], gdzie c to pełna przeciwprostokątna, a q to odcinek przeciwprostokątnej leżący przy przyprostokątnej b.",
            },
            {
              "kind": "p",
              "text": "Na przykład, jeśli [[c = 10]] cm i [[q = 6.4]] cm, to [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Iloczyn 64 to tylko krok pośredni. Pierwiastek kwadratowy zamienia go z powrotem w długość, a ta długość jest szukanym bokiem.",
            },
            {
              "kind": "p",
              "text": "Kalkulator znajduje się u góry tej strony, a pod nim wzór, oznaczony diagram, dowód twierdzenia o rzucie, rozwiązane przykłady oraz kontrole, które można zastosować do każdej odpowiedzi. Przewodnik jest przeznaczony dla uczniów szkół podstawowych i średnich, nauczycieli, korepetytorów oraz rodziców pomagających w zadaniach domowych z geometrii.",
            },
          ],
          "h2": "Kalkulator przyprostokątnej b trójkąta prostokątnego z rzutu",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ma dwa pola wprowadzania. Pierwsze przyjmuje przeciwprostokątną c, pełny bok leżący naprzeciw kąta prostego. Drugie przyjmuje rzut q, odcinek przeciwprostokątnej należący do przyprostokątnej b. Obie długości muszą być wyrażone w tej samej jednostce, więc najpierw przelicz jednostki, jeśli jeden pomiar jest podany w centymetrach, a drugi w metrach.",
            },
            {
              "kind": "p",
              "text": "Rzut q musi być mniejszy od c. Ta zasada wynika z geometrii: q to tylko część przeciwprostokątnej, więc nigdy nie może być równe całemu bokowi ani większe od niego. Jeśli twoja wartość q jest większa od c, prawdopodobnie wpisałeś przyprostokątną, wysokość albo niewłaściwy rzut.",
            },
            {
              "kind": "p",
              "text": "Kliknij Oblicz przyprostokątną b, aby zobaczyć wynik, i użyj przycisku Resetuj, aby wyczyścić oba pola przed nowym zadaniem. Wynik jest długością wyrażoną w jednostce, którą wpisałeś, więc przeciwprostokątna 10 cm i rzut 6,4 cm dają 8 cm, bez dodatkowego przeliczania.",
            },
          ],
          "h2": "Obliczanie przyprostokątnej b trójkąta prostokątnego z rzutu",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma dwa prostopadłe boki, zwane przyprostokątnymi, oraz jeden najdłuższy bok, zwany przeciwprostokątną. Dwie przyprostokątne spotykają się przy kącie prostym, a przeciwprostokątna leży naprzeciw tego kąta. W tym przewodniku trójkąt to ABC z kątem prostym przy C, przyprostokątna a to bok AC, przyprostokątna b to bok BC, a przeciwprostokątna c to bok AB.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna b jest jednym z dwóch boków tworzących kąt prosty, więc jest prawdziwym bokiem trójkąta. Nie jest odcinkiem narysowanym wewnątrz trójkąta ani rzutem q. Rzut q leży płasko wzdłuż przeciwprostokątnej, natomiast przyprostokątna b biegnie od wierzchołka B do wierzchołka kąta prostego C. Rozróżnienie tych dwóch ról to pierwszy krok do poprawnego stosowania wzoru.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna b różni się od przyprostokątnej a jedynie położeniem: przyprostokątna b styka się z wierzchołkiem B, a przyprostokątna a styka się z wierzchołkiem A. Każda przyprostokątna ma swój własny rzut, dlatego wzór na b używa q, a wzór na a używa p, a to przyporządkowanie jest ustalone przez oznaczenia.",
            },
            {
              "kind": "p",
              "text": "W każdym niezdegenerowanym trójkącie prostokątnym przyprostokątna b jest krótsza od przeciwprostokątnej. Daje to szybką kontrolę każdej odpowiedzi: jeśli obliczona przyprostokątna b wyjdzie dłuższa od c, coś poszło nie tak we wprowadzonych danych lub w obliczeniach, a oznaczenia na diagramie to pierwsze miejsce, które warto sprawdzić.",
            },
          ],
          "h2": "Czym jest przyprostokątna b w trójkącie prostokątnym?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Narysuj wysokość z wierzchołka kąta prostego C prostopadle do przeciwprostokątnej AB. Przecina ona przeciwprostokątną w punkcie zwanym spodkiem wysokości, oznaczonym D. Punkt ten dzieli przeciwprostokątną na dwa sąsiednie odcinki, a te odcinki to rzuty. Odcinek AD to rzut p, a odcinek DB to rzut q.",
            },
            {
              "kind": "p",
              "text": "Rzut q należy do przyprostokątnej b, ponieważ leży przy wierzchołku B, tym samym wierzchołku, w którym zaczyna się przyprostokątna b. W małym trójkącie CBD przyprostokątna b jest przeciwprostokątną, a q jest jedną z jej przyprostokątnych, i to właśnie to geometryczne powiązanie sprawia, że twierdzenie o rzucie działa. Rzut p, rozumując tak samo, należy do przyprostokątnej a, która styka się z wierzchołkiem A.",
            },
            {
              "kind": "p",
              "text": "Rzuty to długości wzdłuż przeciwprostokątnej, mierzone w tej samej jednostce co pozostałe boki. Nie są prostopadłe do niczego ani nie są bokami pierwotnego trójkąta. Rzut najlepiej wyobrazić sobie jako cień, jaki przyprostokątna rzuca na przeciwprostokątną, gdy wysokość opada prosto na nią.",
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
              "text": "To dodawanie jest przydatne samo w sobie. Jeśli znasz c i jeden rzut, możesz znaleźć drugi przez odejmowanie, a krok ten dokładnie omawia późniejsza sekcja o drugim rzucie.",
            },
          ],
          "h2": "Czym jest rzut q w trójkącie prostokątnym?",
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
              "text": "Wyciągnięcie dodatniego pierwiastka kwadratowego z obu stron daje roboczy wzór dla tej strony:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Obliczenie przebiega w dwóch odrębnych etapach. Etap 1 mnoży przeciwprostokątną przez rzut, a wynik jest długością podniesioną do kwadratu, a nie bokiem. Etap 2 wyciąga dodatni pierwiastek kwadratowy, który zamienia tę długość podniesioną do kwadratu z powrotem w zwykłą długość. Pominięcie etapu 2 to najczęstszy błąd przy stosowaniu tego wzoru, a następna sekcja wyjaśnia, dlaczego pierwiastka kwadratowego nie można pominąć.",
            },
            {
              "kind": "p",
              "text": "Jednostki wymagają uwagi na obu etapach. Jeśli c i q są wyrażone w centymetrach, ich iloczyn jest wyrażony w centymetrach kwadratowych, a pierwiastek kwadratowy zwraca centymetry. Mieszanie jednostek, na przykład metrów dla c i centymetrów dla q, daje bezsensowny iloczyn, więc przed mnożeniem przelicz wszystko na jedną jednostkę. Stosuje się pierwiastek dodatni, ponieważ długość boku jest zawsze dodatnia.",
            },
            {
              "kind": "p",
              "text": "Mały przykład liczbowy pokazuje oba etapy w działaniu. Przy [[c = 10]] cm i [[q = 6.4]] cm etap 1 daje [[10 \\times 6.4 = 64]], a etap 2 daje [[b = \\sqrt{64} = 8]] cm. Liczba 64 sama w sobie nie odpowiada na żadne pytanie. Dopiero po wyciągnięciu pierwiastka kwadratowego staje się długością przyprostokątnej.",
            },
          ],
          "h2": "Wzór na przyprostokątną b trójkąta prostokątnego z rzutu",
          "image": {
            "alt": "Trójkąt prostokątny ABC z wysokością CD, pokazujący, że przyprostokątna b do kwadratu jest równa przeciwprostokątnej c pomnożonej przez rzut q",
            "caption": "Twierdzenie o rzucie: b do kwadratu równa się c razy q, więc b jest równe pierwiastkowi kwadratowemu z c razy q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pierwiastek kwadratowy występuje, ponieważ mnożenie daje wielkość podniesioną do kwadratu. Twierdzenie nie mówi, że przyprostokątna b jest równa iloczynowi c i q. Mówi ono, że kwadrat przyprostokątnej b jest równy temu iloczynowi. Cofnięcie podnoszenia do kwadratu wymaga pierwiastka kwadratowego, tak jak cofnięcie podwojenia wymaga podzielenia na pół.",
            },
            {
              "kind": "p",
              "text": "Weź [[c = 10]] i [[q = 6.4]]. Ich iloczyn to 64, czyli [[b^2]], kwadrat przyprostokątnej. Sama przyprostokątna to liczba, która pomnożona przez siebie daje 64, czyli 8. Zapisanie [[b = 64]] oznaczałoby bok o długości 64 jednostek w trójkącie, którego przeciwprostokątna ma tylko 10, co jest oczywiście niemożliwe.",
            },
            {
              "kind": "p",
              "text": "Poniższa tabela rozróżnia te trzy wielkości, ponieważ ich mylenie powoduje większość błędów przy stosowaniu tego wzoru.",
            },
          ],
          "h2": "Dlaczego we wzorze występuje pierwiastek kwadratowy?",
          "table": {
            "headers": [
              "Wielkość",
              "Znaczenie",
              "Przykład dla c = 10, q = 6,4",
            ],
            "rows": [
              [
                "b",
                "Sama długość przyprostokątnej",
                "8",
              ],
              [
                "b do kwadratu",
                "Długość przyprostokątnej pomnożona przez siebie",
                "64",
              ],
              [
                "c razy q",
                "Iloczyn, który twierdzenie przyrównuje do b do kwadratu",
                "64",
              ],
              [
                "Pierwiastek kwadratowy z cq",
                "Krok, który odtwarza b z b do kwadratu",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć krótkich kroków prowadzi od oznaczonego diagramu do sprawdzonej odpowiedzi.",
            },
            {
              "kind": "steps",
              "steps": [
                "Rozpoznaj trójkąt prostokątny w zadaniu i upewnij się, że ma kąt prosty.",
                "Znajdź wysokość poprowadzoną z kąta prostego i zaznacz miejsce, w którym przecina przeciwprostokątną.",
                "Rozpoznaj pełną przeciwprostokątną c, bok leżący naprzeciw kąta prostego.",
                "Rozpoznaj rzut q, odcinek przeciwprostokątnej leżący przy wierzchołku B, w którym zaczyna się przyprostokątna b.",
                "Sprawdź, czy q jest mniejsze od c. Jeśli nie, oznacz diagram ponownie przed kontynuowaniem.",
                "Przelicz c i q na tę samą jednostkę, jeśli podano je w różnych jednostkach.",
                "Wpisz c w polu Przeciwprostokątna c.",
                "Wpisz q w polu Rzut q. Nie wpisuj tu p, ponieważ dałoby to przyprostokątną a.",
                "Kliknij Oblicz przyprostokątną b i odczytaj wynik.",
                "Użyj przycisku Resetuj przed rozpoczęciem nowego zadania.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator nie przyjmuje p, więc zadanie, w którym podano tylko p, wymaga jednego dodatkowego kroku odejmowania, omówionego poniżej. Wpisanie p w pole q i tak da jakąś liczbę, ale będzie to niewłaściwa przyprostokątna, dlatego sprawdzenie oznaczeń w kroku 4 jest najważniejsze.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora przyprostokątnej b trójkąta prostokątnego",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj [[c = 10]] cm i [[q = 6.4]] cm. Cztery kroki poniżej pokazują pełne rozwiązanie, bez pomijania czegokolwiek.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: b = sqrt(cq).",
                "Podstaw wartości: b = sqrt(10 x 6.4).",
                "Pomnóż pod pierwiastkiem: b = sqrt(64).",
                "Wyciągnij pierwiastek kwadratowy: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 8 cm to rzeczywisty bok prostopadły BC, a nie rzut ani pole. Krótkie sprawdzenie zamyka obliczenie: [[b^2 = 8^2 = 64]] i [[c \\times q = 10 \\times 6.4 = 64]], więc obie strony twierdzenia są zgodne.",
            },
            {
              "kind": "p",
              "text": "Dla porównania drugi rzut to [[p = 10 - 6.4 = 3.6]] cm, przyprostokątna a to [[a = \\sqrt{10 \\times 3.6} = 6]] cm, a wysokość to [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, co potwierdza znany trójkąt prostokątny 6-8-10.",
            },
          ],
          "h2": "Przykład krok po kroku znajdowania przyprostokątnej b",
          "image": {
            "alt": "Trójkąt prostokątny o przeciwprostokątnej 10 cm i rzucie 6,4 cm, rozwiązany tak, że przyprostokątna b jest równa 8 cm",
            "caption": "Rozwiązany przykład: c = 10 cm i q = 6,4 cm dają b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny diagram pokazuje trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z C prostopadle na AB i dotyka jej w punkcie D, a znacznik kąta prostego przy D potwierdza, że CD jest rzeczywiście prostopadła.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na dwie części: odcinek AD to rzut p, a odcinek DB to rzut q. Przyprostokątna b i rzut q są wyróżnione, ponieważ to właśnie ta para jest tematem tej strony. Prześledź diagram w tej kolejności, aby utrwalić oznaczenia: zacznij w punkcie B, przejdź wzdłuż przyprostokątnej b do C, potem wzdłuż przyprostokątnej a do A, a następnie wróć wzdłuż przeciwprostokątnej od A do B, zatrzymując się w punkcie D, aby zobaczyć podział na p i q.",
            },
            {
              "kind": "p",
              "text": "Powiązanie b z q staje się widoczne w małym trójkącie CBD, w którym przyprostokątna b jest przeciwprostokątną, a q jest bokiem leżącym wzdłuż dużej przeciwprostokątnej. Ponieważ trójkąt CBD jest podobny do trójkąta ABC, stosunek q do b w małym trójkącie jest równy stosunkowi b do c w dużym trójkącie, co sekcja z dowodem zamienia w [[b^2 = cq]].",
            },
          ],
          "h2": "Objaśnienie diagramu przyprostokątnej b trójkąta prostokątnego z rzutu",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym przy C, wysokością CD do przeciwprostokątnej AB, wyróżnioną przyprostokątną b i rzutem q, z oznaczonymi przyprostokątnymi a i b, przeciwprostokątną c, rzutami p i q oraz wysokością h",
            "caption": "Główny trójkąt ABC: wysokość CD dzieli przeciwprostokątną AB na rzut p (AD) i rzut q (DB), przy czym przyprostokątna b (BC) jest wyróżniona.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód opiera się na trójkątach podobnych. Narysowanie wysokości CD dzieli trójkąt ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, a oba są podobne do pierwotnego trójkąta. Podobieństwo oznacza, że ich odpowiadające sobie boki pozostają w tym samym stosunku, a jeden z tych stosunków daje bezpośrednio twierdzenie o rzucie.",
            },
            {
              "kind": "p",
              "text": "Skup się na trójkącie CBD i całym trójkącie ABC. Oba zawierają kąt przy B i oba zawierają kąt prosty, więc ich trzecie kąty też muszą się zgadzać. Dopasowanie boków znajdujących się w tych samych położeniach daje proporcję:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz podstaw standardowe oznaczenia: [[DB = q]], [[BC = b]] i [[AB = c]]. Proporcja przyjmuje postać:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie na krzyż usuwa ułamki. Licznik lewej strony razy mianownik prawej strony jest równy licznikowi prawej strony razy mianownik lewej strony, więc [[q \\times c = b \\times b]], czyli:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie dodatniego pierwiastka kwadratowego z obu stron kończy dowód, dając [[b = \\sqrt{c \\times q}]]. Ten sam argument zastosowany do drugiego małego trójkąta, ACD, daje [[a^2 = c \\times p]]. Podobieństwo wykonuje całą pracę: odpowiadające sobie boki trójkątów podobnych pozostają proporcjonalne.",
            },
          ],
          "h2": "Dlaczego twierdzenie o rzucie działa?",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok mniejszych podobnych trójkątów ACD i CBD, pokazujący proporcję q przez b równą b przez c",
            "caption": "Dowód z trójkątów podobnych: q przez b równa się b przez c, więc mnożenie na krzyż daje b do kwadratu równe c razy q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy przykład podaje dane wartości, podstawienie i końcową odpowiedź. Komentarz pozostaje krótki, aby arytmetyka była widoczna, a każdy przykład zachowuje spójne jednostki od początku do końca.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm i [[q = 6.4]] cm, wzór daje [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], więc [[b = 8]] cm. Iloczyn 64 jest kwadratem doskonałym, więc odpowiedź jest dokładna i nie wymaga zaokrąglania. To ten sam trójkąt co w przykładzie krok po kroku, a jego druga przyprostokątna ma 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Wynik będący kwadratem doskonałym",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 25]] cm i [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Gdy iloczyn jest kwadratem doskonałym, odpowiedź jest dokładna. Drugi rzut wynosi tu 16 cm, co łączy się z przyprostokątną 20 cm, tworząc klasyczny trójkąt 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Kwadrat niedoskonały",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 12]] cm i [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], więc [[b \\approx 7.746]] cm. Iloczyn 60 nie jest kwadratem doskonałym, więc odpowiedź pozostaje przybliżeniem zaokrąglonym do trzech miejsc po przecinku. Zauważ, że 7,746 cm to mniej niż 12 cm przeciwprostokątnej, jak musi być.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 12.5]] cm i [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], więc [[b \\approx 6.325]] cm. Odpowiada to wartości z przewodnika o przyprostokątnej a, w którym ten sam iloczyn 40 pojawił się przy zamienionych rolach p i q, co przypomina, że różne dane mogą dawać ten sam iloczyn. Zachowaj pełny iloczyn pod pierwiastkiem aż do końcowego kroku zaokrąglania.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Większy trójkąt",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 50]] cm i [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Większe liczby niczego nie zmieniają w metodzie: pomnóż, a potem wyciągnij pierwiastek. Drugi rzut wynosi tu 18 cm, co łączy się z przyprostokątną 30 cm, tworząc klasyczny trójkąt 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Równe rzuty",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 20]] cm i [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, więc [[b \\approx 14.142]] cm. Równe rzuty oznaczają, że wysokość pada na środek przeciwprostokątnej, co zdarza się dokładnie wtedy, gdy obie przyprostokątne są równe. Trójkąt jest zatem równoramiennym trójkątem prostokątnym, a przyprostokątna a jest równa przyprostokątnej b.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 0.5]] m i [[q = 20]] cm, najpierw przelicz: 0,5 m to 50 cm. Następnie [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], więc [[b \\approx 31.623]] cm. Pomnożenie 0,5 przez 20 bez przeliczenia dałoby pierwiastek równy 10, błędną odpowiedź bez żadnej poprawnej jednostki.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 16]] ft i [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Iloczyn 144 jest kwadratem doskonałym, więc odpowiedź jest dokładna. Szybka kontrola się zgadza: 12 ft to trzy czwarte przeciwprostokątnej, a druga przyprostokątna wynosi około 10,583 ft, czyli jest krótsza od b, ale nadal jest prawdziwym bokiem tego samego trójkąta.",
            },
          ],
          "h2": "Rozwiązane przykłady znajdowania przyprostokątnej b z rzutu",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Niektóre zadania podają p zamiast q. Kalkulator na tej stronie nie przyjmuje p, ale to tylko jednokrokowy objazd, a nie ślepa uliczka. Ponieważ oba rzuty sumują się do przeciwprostokątnej, najpierw odejmij, aby odzyskać q:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Weź [[c = 25]] cm i [[p = 9]] cm. Odejmowanie daje [[q = 25 - 9 = 16]] cm. Teraz stosuje się zwykły wzór: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Gdybyś wpisał 9 bezpośrednio jako q, kalkulator zwróciłby 15 cm, czyli przyprostokątną a, a nie przyprostokątną b.",
            },
            {
              "kind": "p",
              "text": "Kalkulator <a href=\"/right-triangle-projection-p-calculator/\">rzutu p</a> może pomóc, gdy samo p wymaga znalezienia, a <a href=\"/right-triangle-projection-q-calculator/\">kalkulator rzutu q</a> obejmuje krok odwrotny. Tak czy inaczej, zasada pozostaje ta sama: najpierw znajdź q, a potem użyj [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Jak znaleźć przyprostokątną b, gdy znany jest drugi rzut",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedno twierdzenie łączy trzy wielkości, więc jego przekształcenie znajduje tę, której brakuje. Te trzy postacie to:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Poniższa tabela pokazuje każde przekształcenie, co ono znajduje i co musi być znane najpierw.",
            },
          ],
          "h2": "Zależność między przyprostokątną b, przeciwprostokątną i rzutem q",
          "table": {
            "headers": [
              "Brakująca wielkość",
              "Wzór",
              "Potrzebne znane wartości",
            ],
            "rows": [
              [
                "Przyprostokątna b",
                "b = sqrt(cq)",
                "Przeciwprostokątna c i rzut q",
              ],
              [
                "Przeciwprostokątna c",
                "c = b do kwadratu / q",
                "Przyprostokątna b i rzut q",
              ],
              [
                "Rzut q",
                "q = b do kwadratu / c",
                "Przyprostokątna b i przeciwprostokątna c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Przyprostokątna a wynika z lustrzanego odbicia wzoru na przyprostokątną b. Tam, gdzie przyprostokątna b łączy się z rzutem q, przyprostokątna a łączy się z rzutem p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj jednego spójnego trójkąta, aby zobaczyć obie przyprostokątne razem: [[c = 25]], [[p = 9]] i [[q = 16]]. Wtedy [[a = \\sqrt{25 \\times 9} = 15]] i [[b = \\sqrt{25 \\times 16} = 20]]. Obie przyprostokątne mają tę samą przeciwprostokątną, ale korzystają z różnych rzutów, dlatego poprawne rozpoznanie p i q decyduje o tym, którą przyprostokątną otrzymasz.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątne ograniczają się też wzajemnie przez twierdzenie Pitagorasa, omówione dwie sekcje poniżej: znajomość jednej przyprostokątnej i przeciwprostokątnej wyznacza drugą. W zadaniach, które zaczynają się od p, a nie od q, <a href=\"/right-triangle-leg-a-from-projection-calculator/\">kalkulator przyprostokątnej a z rzutu</a> stosuje tę samą metodę przy drugim przyporządkowaniu.",
            },
          ],
          "h2": "Zależność między przyprostokątną b i przyprostokątną a",
          "image": {
            "alt": "Trójkąt prostokątny porównujący rzut p połączony z przyprostokątną a z rzutem q połączonym z przyprostokątną b, przy c równym 25, p równym 9 i q równym 16",
            "caption": "Prawidłowe parowanie: a używa p (sqrt(25 x 9) = 15), a b używa q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
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
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dodaj pasujący wzór na przyprostokątną a, [[a^2 = c \\times p]], aby otrzymać:",
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
              "text": "Kontrola liczbowa z trójkątem 9-16-25 to potwierdza: [[a^2 + b^2 = 225 + 400 = 625]] i [[c^2 = 25^2 = 625]]. Te dwa twierdzenia nie są rywalami. Twierdzenie o rzucie dzieli zależność pitagorejską na jeden składnik na każdą przyprostokątną, a dodanie składników odtwarza ją w całości.",
            },
          ],
          "h2": "Zależność między rzutem q a twierdzeniem Pitagorasa",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy niezależne kontrole wychwytują prawie każdy błąd. Stosuj co najmniej jedną z nich do każdej odpowiedzi, a wszystkie trzy, gdy zadanie ma znaczenie.",
            },
            {
              "kind": "h3",
              "text": "Metoda 1: Kontrola twierdzenia o rzucie",
            },
            {
              "kind": "p",
              "text": "Podnieś swoją odpowiedź do kwadratu i porównaj ją z iloczynem c i q. Dla [[c = 25]], [[q = 16]] i [[b = 20]]: [[b^2 = 400]] i [[c \\times q = 400]], więc odpowiedź jest poprawna. Jeśli te dwie liczby się różnią, coś poszło nie tak we wprowadzonych danych albo w kroku pierwiastkowania.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Kontrola twierdzenia Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Znajdź przyprostokątną a z p, a potem sprawdź [[a^2 + b^2 = c^2]]. Przy [[p = 9]], [[q = 16]] i [[c = 25]]: [[a = 15]], [[b = 20]] i [[225 + 400 = 625 = 25^2]]. Ta kontrola wykracza poza kalkulator, ponieważ sprawdza cały trójkąt, a nie tylko jeden wzór.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Kontrole rozmiaru i dodawania",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że q jest mniejsze od c, że [[p + q = c]], gdy znane jest p, oraz że przyprostokątna b jest krótsza od przeciwprostokątnej. W przykładzie 16 jest mniejsze od 25, [[9 + 16 = 25]], a 20 jest krótsze od 25. Każde niepowodzenie wskazuje tu na błąd oznaczenia, a nie na pomyłkę arytmetyczną.",
            },
          ],
          "h2": "Jak sprawdzić obliczoną przyprostokątną b",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem własności wynika bezpośrednio z [[b = \\sqrt{c \\times q}]] i geometrii, która za nim stoi. Każda z nich służy też jako kontrola nowej odpowiedzi.",
            },
            {
              "items": [
                "Przyprostokątna b jest zawsze krótsza od przeciwprostokątnej w niezdegenerowanym trójkącie prostokątnym, ponieważ q to tylko część c.",
                "Rzut q jest zawsze mniejszy od c i zawsze dodatni. Zerowe lub ujemne rzuty nie opisują żadnego rzeczywistego trójkąta.",
                "Zwiększenie q przy stałym c zwiększa b, ponieważ rośnie iloczyn pod pierwiastkiem.",
                "Zwiększenie c przy stałym q zwiększa b matematycznie, pod warunkiem że nowe wartości nadal opisują rzeczywisty trójkąt, w którym q jest mniejsze od c.",
                "Zamiana p i q zmienia obliczaną przyprostokątną: q daje przyprostokątną b, a p daje przyprostokątną a.",
                "Równe rzuty dają równe przyprostokątne. Przy c = 20 oraz p = q = 10 obie przyprostokątne są równe 10 razy pierwiastek kwadratowy z 2, około 14,142.",
                "Wynik jest długością, a nie polem. Iloczyn podniesiony do kwadratu to tylko krok pośredni, a pierwiastek kwadratowy przywraca zwykłe jednostki długości.",
                "Przeskalowanie wszystkich pomiarów o ten sam współczynnik skaluje przyprostokątną b o ten współczynnik. Podwojenie c i q podwaja b, ponieważ iloczyn rośnie czterokrotnie, a jego pierwiastek podwaja się.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Gdy wysokość pada dokładnie na środek przeciwprostokątnej, trójkąt jest równoramienny, a obie przyprostokątne muszą się zgadzać, jak pokazuje poniższy diagram.",
            },
          ],
          "h2": "Ważne własności przyprostokątnej b z rzutu",
          "image": {
            "alt": "Równoramienny trójkąt prostokątny o przeciwprostokątnej 20, równych rzutach p i q wynoszących 10 oraz przyprostokątnych a i b, z których każda jest równa 10 pierwiastków z 2",
            "caption": "Równe rzuty: c = 20 przy p = q = 10 daje a = b = 10 root 2, około 14,142.",
            "src": "leg-b-equal-projections.svg",
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
                "Zapomnienie pierwiastka kwadratowego: podanie cq jako odpowiedzi. Przy c = 10 i q = 6,4 odpowiedzią jest 8 cm, a nie 64.",
                "Mylenie b z b do kwadratu: 64 to b do kwadratu w tym przykładzie, natomiast 8 to przyprostokątna. Powiedz, którą z nich masz na myśli, zanim zapiszesz liczbę.",
                "Użycie rzutu p zamiast q: wpisanie p zwraca przyprostokątną a. Przy c = 25 i p = 9 wynik 15 to przyprostokątna a, a nie przyprostokątna b.",
                "Wpisanie przyprostokątnej w pole przeciwprostokątnej: przeciwprostokątna to bok leżący naprzeciw kąta prostego i najdłuższy bok. Przyprostokątna wpisana jako c zniekształca każdy późniejszy krok.",
                "Mylenie przeciwprostokątnej z rzutem: c to cały bok, natomiast q to tylko jego część. Sprawdź, czy q jest mniejsze od c, przed obliczeniem.",
                "Użycie q większego od c lub równego c: taki trójkąt nie istnieje, ponieważ q jest częścią c. Jeśli tak się stanie, sprawdź ponownie oznaczenia na diagramie.",
                "Mieszanie centymetrów i metrów: najpierw przelicz, jak w przykładzie 7, gdzie 0,5 m stało się 50 cm przed pomnożeniem przez 20 cm.",
                "Używanie ujemnych pomiarów: długości są dodatnie, więc ujemna wartość oznacza błąd w danych, a nie ujemną przyprostokątną.",
                "Stosowanie wzoru do trójkąta nieprostokątnego: twierdzenie o rzucie wymaga wysokości poprowadzonej z kąta prostego. Bez kąta prostego nie ma rzutu q w tym znaczeniu.",
                "Zaokrąglanie zbyt wcześnie: zaokrąglenie iloczynu przed wyciągnięciem pierwiastka przesuwa odpowiedź. Zachowaj pełną dokładność do ostatniego kroku.",
                "Użycie niewłaściwej odpowiedniości boków na diagramie: powiązanie q z a albo p z b zamienia przyprostokątne. Dopasuj q do przyprostokątnej stykającej się z wierzchołkiem B.",
                "Traktowanie wysokości jako rzutu: wysokość h jest prostopadła do przeciwprostokątnej, a nie jej częścią, więc nigdy nie należy do pola q.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli odpowiedź wygląda na błędną, zatrzymaj się i oznacz diagram ponownie przed ponownym obliczeniem. Większość powyższych błędów znika, gdy tylko p i q zostaną wyraźnie zaznaczone na przeciwprostokątnej, a wszystko inne odłożone na bok.",
            },
          ],
          "h2": "Typowe błędy przy znajdowaniu przyprostokątnej b z rzutu",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to zadania domowe z geometrii i praca w klasie, w których zadania z rzutów sprawdzają, czy uczniowie potrafią oznaczyć diagram i zastosować [[b^2 = c \\times q]] zamiast sięgać z przyzwyczajenia po twierdzenie Pitagorasa. Ćwiczenia z podobieństwa wykorzystują ten sam układ, ponieważ sam dowód jest ćwiczeniem w dopasowywaniu odpowiadających sobie boków.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny wykorzystuje twierdzenie, gdy trójkąt prostokątny trzeba odtworzyć na podstawie częściowych pomiarów: jeśli rysunek podaje przeciwprostokątną i spodek wysokości, brakującą przyprostokątną można wyznaczyć bez ponownego mierzenia figury. Nauczyciele wykorzystują ten układ także jako lekcję pomostową między dodawaniem odcinków a podobieństwem.",
            },
            {
              "kind": "p",
              "text": "Jeden warunek ogranicza każde zastosowanie: wymagana geometria trójkąta prostokątnego musi rzeczywiście istnieć. Twierdzenie opisuje dokładne zależności geometryczne, a nie przybliżone pomiary terenowe, więc nigdy nie zastępuje starannego pomiaru geodezyjnego ani profesjonalnego pomiaru inżynierskiego. W swoim właściwym zastosowaniu zamienia jednak dwie znane długości w trzecią przy jednym mnożeniu i pierwiastku kwadratowym.",
            },
          ],
          "h2": "Praktyczne zastosowania twierdzenia o rzucie",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze przed przeczytaniem odpowiedzi. Żadna z wartości nie powtarza rozwiązanych przykładów, a ostatnie zadanie łączy kilka idei z tego przewodnika.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 36]] cm i rzut [[q = 9]] cm. Znajdź przyprostokątną b.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Rzut dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 26]] cm i [[q = 6.5]] cm, znajdź przyprostokątną b.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Duża przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 100]] cm i [[q = 36]] cm, znajdź przyprostokątną b.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna mierzy [[c = 1.5]] m, a jej rzut q mierzy 24 cm. Znajdź przyprostokątną b w centymetrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Najpierw znajdź q z p i c",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 65]] cm i rzut [[p = 49]] cm. Znajdź przyprostokątną b.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Wielokrokowe z przyprostokątną a i Pitagorasem",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 50]] cm i [[q = 32]] cm, znajdź przyprostokątną b, a następnie znajdź przyprostokątną a i sprawdź wynik twierdzeniem Pitagorasa.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: Przelicz 1,5 m na 150 cm, a następnie [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: Najpierw [[q = 65 - 49 = 16]] cm, a następnie [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Drugi rzut to [[p = 50 - 32 = 18]] cm, więc [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Sprawdzenie: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        },
      },
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-intro": "Kalkulator przyprostokątnej b trójkąta prostokątnego z rzutu",
        "sec-calculate": "Obliczanie przyprostokątnej b trójkąta prostokątnego z rzutu",
        "sec-what-leg-b": "Czym jest przyprostokątna b w trójkącie prostokątnym?",
        "sec-what-projection-q": "Czym jest rzut q w trójkącie prostokątnym?",
        "sec-formula": "Wzór na przyprostokątną b trójkąta prostokątnego z rzutu",
        "sec-why-sqrt": "Dlaczego we wzorze występuje pierwiastek kwadratowy?",
        "sec-how": "Jak korzystać z kalkulatora przyprostokątnej b trójkąta prostokątnego",
        "sec-step-example": "Przykład krok po kroku znajdowania przyprostokątnej b",
        "sec-diagram": "Objaśnienie diagramu przyprostokątnej b trójkąta prostokątnego z rzutu",
        "sec-proof": "Dlaczego twierdzenie o rzucie działa?",
        "sec-examples": "Rozwiązane przykłady znajdowania przyprostokątnej b z rzutu",
        "sec-other-projection": "Jak znaleźć przyprostokątną b, gdy znany jest drugi rzut",
        "sec-relationship": "Zależność między przyprostokątną b, przeciwprostokątną i rzutem q",
        "sec-leg-a": "Zależność między przyprostokątną b i przyprostokątną a",
        "sec-pythagoras": "Zależność między rzutem q a twierdzeniem Pitagorasa",
        "sec-verify": "Jak sprawdzić obliczoną przyprostokątną b",
        "sec-properties": "Ważne własności przyprostokątnej b z rzutu",
        "sec-mistakes": "Typowe błędy przy znajdowaniu przyprostokątnej b z rzutu",
        "sec-applications": "Praktyczne zastosowania twierdzenia o rzucie",
        "sec-practice": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-faq": "Najczęściej zadawane pytania",
      },
    },
};
