// legAFromProjectionGuideTranslations.bpl.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B4_PL = {
  "pl": {
      "faqHeading": "Najczęściej zadawane pytania",
      "faqs": [
        {
          "question": "Jaki jest wzór na wyznaczenie przyprostokątnej a z rzutu p?",
          "answer": "Wzór to [[a = \\sqrt{c \\times p}]], gdzie c to cała przeciwprostokątna, a p to rzut należący do przyprostokątnej a. Na przykład dla [[c = 10]] cm i [[p = 3.6]] cm otrzymujemy [[a = 6]] cm.",
        },
        {
          "question": "Dlaczego mnożymy c przez p?",
          "answer": "Mnożenie wynika z podobieństwa trójkątów. Trójkąt ACD jest podobny do trójkąta ABC, co daje [[p / a = a / c]], a mnożenie na krzyż prowadzi do [[a^2 = c \\times p]]. Iloczyn jest kwadratem przyprostokątnej, a nie samą przyprostokątną.",
        },
        {
          "question": "Dlaczego potrzebny jest pierwiastek kwadratowy?",
          "answer": "Ponieważ iloczyn cp jest równy a do kwadratu, a nie a. Pierwiastek kwadratowy odwraca podnoszenie do kwadratu i zwraca zwykłą długość. Bez niego w przykładzie z c = 10 i p = 3,6 podalibyśmy 36 zamiast 6.",
        },
        {
          "question": "Co oznacza rzut p?",
          "answer": "Rzut p to odcinek przeciwprostokątnej przylegający do wierzchołka A, powstający, gdy wysokość poprowadzona z kąta prostego przecina przeciwprostokątną. W trójkącie ABC o wysokości CD zachodzi [[p = AD]] i odcinek ten leży wzdłuż przeciwprostokątnej.",
        },
        {
          "question": "Czy rzut p to to samo co przyprostokątna a?",
          "answer": "Nie. Przyprostokątna a to bok AC, jeden z boków tworzących kąt prosty, natomiast rzut p to odcinek AD wzdłuż przeciwprostokątnej. Są to różne długości w różnych położeniach, powiązane jedynie zależnością [[a^2 = c \\times p]].",
        },
        {
          "question": "Czy mogę użyć rzutu q, aby znaleźć przyprostokątną a?",
          "answer": "Nie bezpośrednio. Rzut q tworzy parę z przyprostokątną b, więc wpisanie q da przyprostokątną b. Aby znaleźć przyprostokątną a na podstawie q, najpierw odzyskaj p że wzoru [[p = c - q]], a następnie użyj wzoru [[a = \\sqrt{c \\times p}]].",
        },
        {
          "question": "Co zrobić, gdy znam tylko rzut q?",
          "answer": "Odejmij go od przeciwprostokątnej: [[p = c - q]]. Dla [[c = 25]] cm i [[q = 16]] cm otrzymujemy [[p = 9]] cm, a następnie [[a = \\sqrt{25 \\times 9} = 15]] cm.",
        },
        {
          "question": "Czy rzut p może być równy przeciwprostokątnej?",
          "answer": "Nie. Rzut p to tylko część przeciwprostokątnej, więc musi być od niej mniejszy. Gdyby p było równe c, q wynosiłoby zero, a trójkąt byłby zdegenerowany, a nie prawdziwym trójkątem prostokątnym.",
        },
        {
          "question": "Jak zweryfikować obliczoną przyprostokątną?",
          "answer": "Podnieś odpowiedź do kwadratu i sprawdź, czy jest równa [[c \\times p]]. Możesz też znaleźć przyprostokątną b na podstawie q i sprawdzić [[a^2 + b^2 = c^2]] oraz potwierdzić, że p jest mniejsze od c, a przyprostokątna a jest krótsza od przeciwprostokątnej.",
        },
        {
          "question": "Co się dzieje, gdy p i q są równe?",
          "answer": "Wysokość pada na środek przeciwprostokątnej, a obie przyprostokątne są równe, więc trójkąt jest równoramiennym trójkątem prostokątnym. Dla [[c = 20]] cm i [[p = q = 10]] cm obie przyprostokątne są równe [[10\\sqrt{2}]] cm, czyli około 14,142 cm.",
        },
        {
          "question": "Czy mogę znaleźć przyprostokątną b, korzystając z tego samego twierdzenia?",
          "answer": "Tak, za pomocą wzoru będącego odbiciem lustrzanym: [[b = \\sqrt{c \\times q}]]. Przyprostokątna b tworzy parę z rzutem q, tak jak przyprostokątna a tworzy parę z p. Do tego obliczenia przeznaczony jest <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator przyprostokątnej b z rzutu</a>.",
        },
        {
          "question": "Czy twierdzenie o rzucie jest związane z twierdzeniem Pitagorasa?",
          "answer": "Tak. Dodanie dwóch wzórów na rzuty daje [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], ponieważ [[p + q = c]]. Twierdzenie o rzucie rozdziela zależność pitagorejską na jedną część dla każdej przyprostokątnej.",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Wybierz kolejne narzędzie według pomiarów, które już znasz, ponieważ każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego.",
      "relatedItems": [
        "Kalkulator rzutów trójkąta prostokątnego",
        "Kalkulator rzutu p trójkąta prostokątnego",
        "Kalkulator rzutu q trójkąta prostokątnego",
        "Kalkulator przyprostokątnej b trójkąta prostokątnego z rzutu",
        "Kalkulator przeciwprostokątnej trójkąta prostokątnego z rzutów",
        "Kalkulator wysokości trójkąta prostokątnego z rzutów",
        "Kalkulator boków trójkąta prostokątnego",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten kalkulator wyznacza przyprostokątną a trójkąta prostokątnego, gdy znasz całą przeciwprostokątną c oraz rzut p należący do przyprostokątnej a. Wpisujesz te dwie długości, a kalkulator zwraca rzeczywistą długość boku, czyli przyprostokątnej a, a nie wartość podniesioną do kwadratu ani odcinek rzutu. Wzór to [[a = \\sqrt{c \\times p}]], gdzie c to cała przeciwprostokątna, a p to odcinek przeciwprostokątnej przylegający do przyprostokątnej a.",
            },
            {
              "kind": "p",
              "text": "Na przykład, jeśli [[c = 10]] cm i [[p = 3.6]] cm, to [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Iloczyn 36 to tylko krok pośredni. Pierwiastek kwadratowy zamienia go z powrotem w długość, a ta długość jest szukanym bokiem.",
            },
            {
              "kind": "p",
              "text": "Kalkulator znajduje się na górze tej strony, a pod nim są wzór, diagram z oznaczeniami, dowód twierdzenia o rzucie, przykłady z rozwiązaniami oraz kontrole, które można wykonać dla każdej odpowiedzi. Przewodnik jest przeznaczony dla uczniów szkoły podstawowej i średniej, nauczycieli, korepetytorów oraz rodziców pomagających w zadaniach domowych z geometrii.",
            },
          ],
          "h2": "Kalkulator przyprostokątnej a trójkąta prostokątnego z rzutu",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator ma dwa pola wejściowe. Pierwsze przyjmuje przeciwprostokątną c, czyli cały bok leżący naprzeciw kąta prostego. Drugie przyjmuje rzut p, czyli odcinek przeciwprostokątnej należący do przyprostokątnej a. Obie długości muszą być wyrażone w tej samej jednostce, więc najpierw przelicz je, jeśli jeden pomiar jest podany w centymetrach, a drugi w metrach.",
            },
            {
              "kind": "p",
              "text": "Rzut p musi być mniejszy od c. Ta reguła wynika wprost z geometrii: p to tylko część przeciwprostokątnej, więc nigdy nie może być równe całemu bokowi ani od niego większe. Jeśli twoja wartość p jest większa od c, prawdopodobnie wpisałeś przyprostokątną, wysokość albo niewłaściwy rzut.",
            },
            {
              "kind": "p",
              "text": "Kliknij przycisk Calculate Leg a, aby zobaczyć wynik, i użyj przycisku Reset, aby wyczyścić oba pola przed nowym zadaniem. Wynik to długość w jednostce, którą wpisałeś, więc przeciwprostokątna 10 cm i rzut 3,6 cm dają 6 cm, bez dodatkowego kroku przeliczania.",
            },
          ],
          "h2": "Obliczanie przyprostokątnej a trójkąta prostokątnego z rzutu",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma dwa prostopadłe boki, zwane przyprostokątnymi, oraz jeden najdłuższy bok, zwany przeciwprostokątną. Obie przyprostokątne spotykają się w kącie prostym, a przeciwprostokątna leży naprzeciw tego kąta. W tym przewodniku trójkąt oznaczono jako ABC, kąt prosty znajduje się w wierzchołku C, przyprostokątna a to bok AC, przyprostokątna b to bok BC, a przeciwprostokątna c to bok AB.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna a to jeden z dwóch boków tworzących kąt prosty, więc jest prawdziwym bokiem trójkąta. Nie jest odcinkiem narysowanym wewnątrz trójkąta ani rzutem p. Rzut p leży płasko wzdłuż przeciwprostokątnej, natomiast przyprostokątna a biegnie od wierzchołka A do wierzchołka kąta prostego C. Rozróżnienie tych dwóch ról to pierwszy krok do poprawnego stosowania wzoru.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątna a różni się od przyprostokątnej b tylko położeniem: przyprostokątna a styka się z wierzchołkiem A, a przyprostokątna b styka się z wierzchołkiem B. Każda przyprostokątna ma własny rzut, dlatego wzór na a wykorzystuje p, a wzór na b wykorzystuje q, a to przyporządkowanie jest ustalone przez oznaczenia.",
            },
            {
              "kind": "p",
              "text": "W każdym niezdegenerowanym trójkącie prostokątnym przyprostokątna a jest krótsza od przeciwprostokątnej. Daje to szybką kontrolę każdej odpowiedzi: jeśli obliczona przyprostokątna a okaże się dłuższa od c, coś poszło nie tak w danych wejściowych albo w obliczeniach, a oznaczenia na diagramie to pierwsze miejsce, które warto sprawdzić.",
            },
          ],
          "h2": "Czym jest przyprostokątna a w trójkącie prostokątnym?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Narysuj wysokość z wierzchołka kąta prostego C prostopadle do przeciwprostokątnej AB. Przecina ona przeciwprostokątną w punkcie zwanym spodkiem wysokości, oznaczonym jako D. Punkt ten dzieli przeciwprostokątną na dwa sąsiadujące odcinki, a te odcinki to rzuty. Odcinek AD to rzut p, a odcinek DB to rzut q.",
            },
            {
              "kind": "p",
              "text": "Rzut p należy do przyprostokątnej a, ponieważ leży obok wierzchołka A, tego samego wierzchołka, w którym zaczyna się przyprostokątna a. W małym trójkącie ACD przyprostokątna a jest przeciwprostokątną, a p jest jedną z jej przyprostokątnych, i właśnie ten związek geometryczny sprawia, że twierdzenie o rzucie działa. Rzut q, zgodnie z tym samym rozumowaniem, należy do przyprostokątnej b, która styka się z wierzchołkiem B.",
            },
            {
              "kind": "p",
              "text": "Rzuty to długości wzdłuż przeciwprostokątnej, mierzone w tej samej jednostce co pozostałe boki. Nie są prostopadłe do niczego i nie są bokami pierwotnego trójkąta. Rzut najlepiej wyobrazić sobie jako cień, który przyprostokątna rzuca na przeciwprostokątną, gdy wysokość opada na nią prosto w dół.",
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
              "text": "To dodawanie jest użyteczne samo w sobie. Jeśli znasz c i jeden rzut, drugi znajdziesz przez odejmowanie, a krok ten dokładnie omawia późniejsza sekcja o drugim rzucie.",
            },
          ],
          "h2": "Czym jest rzut p w trójkącie prostokątnym?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie mówi, że kwadrat przyprostokątnej a jest równy przeciwprostokątnej pomnożonej przez jej rzut:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie dodatniego pierwiastka kwadratowego z obu stron daje roboczy wzór stosowany na tej stronie:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Obliczenie przebiega w dwóch odrębnych etapach. Etap 1 to pomnożenie przeciwprostokątnej przez rzut, a wynikiem jest długość podniesiona do kwadratu, a nie bok. Etap 2 to wyciągnięcie dodatniego pierwiastka kwadratowego, który zamienia tę długość podniesioną do kwadratu z powrotem w zwykłą długość. Pominięcie etapu 2 to najczęstszy błąd przy stosowaniu tego wzoru, a następna sekcja wyjaśnia, dlaczego pierwiastka kwadratowego nie można pominąć.",
            },
            {
              "kind": "p",
              "text": "Jednostki wymagają uwagi na obu etapach. Jeśli c i p są wyrażone w centymetrach, ich iloczyn jest wyrażony w centymetrach kwadratowych, a pierwiastek kwadratowy zwraca centymetry. Mieszanie jednostek, na przykład metrów dla c i centymetrów dla p, daje bezsensowny iloczyn, więc przed mnożeniem przelicz wszystko na jedną jednostkę. Stosuje się pierwiastek dodatni, ponieważ długość boku jest zawsze dodatnia.",
            },
            {
              "kind": "p",
              "text": "Mały przykład liczbowy pokazuje oba etapy w działaniu. Dla [[c = 10]] cm i [[p = 3.6]] cm etap 1 daje [[10 \\times 3.6 = 36]], a etap 2 daje [[a = \\sqrt{36} = 6]] cm. Liczba 36 sama w sobie nie odpowiada na żadne pytanie. Dopiero po wyciągnięciu pierwiastka kwadratowego staje się długością przyprostokątnej.",
            },
          ],
          "h2": "Wzór na przyprostokątną a trójkąta prostokątnego z rzutu",
          "image": {
            "alt": "Trójkąt prostokątny ABC z wysokością CD, pokazujący, że kwadrat przyprostokątnej a jest równy przeciwprostokątnej c pomnożonej przez rzut p",
            "caption": "Twierdzenie o rzucie: a do kwadratu jest równe c razy p, więc a jest równe pierwiastkowi kwadratowemu z c razy p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Pierwiastek kwadratowy występuje tu dlatego, że mnożenie daje wielkość podniesioną do kwadratu. Twierdzenie nie mówi, że przyprostokątna a jest równa iloczynowi c i p. Mówi ono, że kwadrat przyprostokątnej a jest równy temu iloczynowi. Odwrócenie podnoszenia do kwadratu wymaga pierwiastka kwadratowego, tak jak odwrócenie podwojenia wymaga podzielenia na pół.",
            },
            {
              "kind": "p",
              "text": "Weź [[c = 10]] i [[p = 3.6]]. Ich iloczyn to 36, czyli [[a^2]], kwadrat przyprostokątnej. Sama przyprostokątna to liczba, która pomnożona przez samą siebie daje 36, czyli 6. Zapisanie [[a = 36]] oznaczałoby bok o długości 36 jednostek w trójkącie, którego przeciwprostokątna ma tylko 10, co jest oczywiście niemożliwe.",
            },
            {
              "kind": "p",
              "text": "Tabela poniżej rozróżnia te trzy wielkości, ponieważ ich mylenie powoduje większość błędów przy stosowaniu tego wzoru.",
            },
          ],
          "h2": "Dlaczego we wzorze występuje pierwiastek kwadratowy?",
          "table": {
            "headers": [
              "Wielkość",
              "Znaczenie",
              "Przykład dla c = 10, p = 3,6",
            ],
            "rows": [
              [
                "a",
                "Sama długość przyprostokątnej",
                "6",
              ],
              [
                "a do kwadratu",
                "Długość przyprostokątnej pomnożona przez samą siebie",
                "36",
              ],
              [
                "c razy p",
                "Iloczyn, który twierdzenie przyrównuje do a do kwadratu",
                "36",
              ],
              [
                "Pierwiastek kwadratowy z cp",
                "Krok, który odzyskuje a z a do kwadratu",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć krótkich kroków prowadzi od diagramu z oznaczeniami do sprawdzonej odpowiedzi.",
            },
            {
              "kind": "steps",
              "steps": [
                "Rozpoznaj trójkąt prostokątny w swoim zadaniu i potwierdź, że ma kąt prosty.",
                "Znajdź wysokość poprowadzoną z kąta prostego i zaznacz, gdzie przecina ona przeciwprostokątną.",
                "Rozpoznaj pełną przeciwprostokątną c, czyli bok leżący naprzeciw kąta prostego.",
                "Rozpoznaj rzut p, czyli odcinek przeciwprostokątnej przylegający do wierzchołka A, w którym zaczyna się przyprostokątna a.",
                "Sprawdź, czy p jest mniejsze od c. Jeśli nie jest, przed kontynuowaniem popraw oznaczenia na diagramie.",
                "Jeśli c i p podano w różnych jednostkach, przelicz je na tę samą jednostkę.",
                "Wpisz c w polu Hypotenuse c.",
                "Wpisz p w polu Projection p. Nie wpisuj tu q, ponieważ wtedy otrzymasz przyprostokątną b.",
                "Kliknij przycisk Calculate Leg a i odczytaj wynik.",
                "Przed rozpoczęciem nowego zadania użyj przycisku Reset.",
              ],
            },
            {
              "kind": "p",
              "text": "Kalkulator nie przyjmuje q, więc zadanie, w którym podano tylko q, wymaga jednego dodatkowego kroku odejmowania, omówionego poniżej. Wpisanie q w polu p nadal da jakąś liczbę, ale będzie to niewłaściwa przyprostokątna, dlatego kontrola oznaczeń z kroku 4 ma największe znaczenie.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora przyprostokątnej a trójkąta prostokątnego",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj [[c = 10]] cm i [[p = 3.6]] cm. Cztery kroki poniżej pokazują pełne rozwiązanie, bez pomijania czegokolwiek.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: a = sqrt(cp).",
                "Podstaw wartości: a = sqrt(10 x 3.6).",
                "Pomnóż liczby pod pierwiastkiem: a = sqrt(36).",
                "Wyciągnij pierwiastek kwadratowy: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6 cm to rzeczywisty prostopadły bok AC, a nie rzut ani pole. Krótkie sprawdzenie zamyka rozumowanie: [[a^2 = 6^2 = 36]] i [[c \\times p = 10 \\times 3.6 = 36]], więc obie strony twierdzenia są zgodne.",
            },
            {
              "kind": "p",
              "text": "Dla porównania drugi rzut to [[q = 10 - 3.6 = 6.4]] cm, przyprostokątna b to [[b = \\sqrt{10 \\times 6.4} = 8]] cm, a wysokość to [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, co potwierdza znany trójkąt prostokątny 6-8-10.",
            },
          ],
          "h2": "Przykład krok po kroku: wyznaczanie przyprostokątnej a",
          "image": {
            "alt": "Trójkąt prostokątny o przeciwprostokątnej 10 cm i rzucie 3,6 cm, rozwiązany tak, że przyprostokątna a jest równa 6 cm",
            "caption": "Przykład z rozwiązaniem: c = 10 cm i p = 3,6 cm dają a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny diagram przedstawia trójkąt ABC z kątem prostym w wierzchołku C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z wierzchołka C prostopadle na AB i dotyka jej w punkcie D, a oznaczenie kąta prostego przy D potwierdza, że CD jest naprawdę prostopadła.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli przeciwprostokątną na dwie części: odcinek AD to rzut p, a odcinek DB to rzut q. Przyprostokątna a i rzut p są wyróżnione, ponieważ to właśnie ta para jest tematem tej strony. Przejdź diagram w tej kolejności, aby utrwalić oznaczenia: zacznij w A, przejdź wzdłuż przyprostokątnej a do C, potem wzdłuż przyprostokątnej b do B, a następnie wróć wzdłuż przeciwprostokątnej z B do A, zatrzymując się w D, aby zobaczyć podział na q i p.",
            },
            {
              "kind": "p",
              "text": "Powiazanie a z p staje się widoczne w małym trójkącie ACD, w którym przyprostokątna a jest przeciwprostokątna, a p jest bokiem leżącym wzdłuż dużej przeciwprostokątnej. Ponieważ trójkąt ACD jest podobny do trójkąta ABC, stosunek p do a w małym trójkącie jest równy stosunkowi a do c w dużym trójkącie, co sekcja z dowodem zamienia w [[a^2 = cp]].",
            },
          ],
          "h2": "Diagram przyprostokątnej a trójkąta prostokątnego z rzutu: objaśnienie",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym w C, wysokością CD do przeciwprostokątnej AB, wyróżniona przyprostokątna a i rzut p, z oznaczonymi przyprostokątnymi a i b, przeciwprostokątna c, rzutami p i q oraz wysokością h",
            "caption": "Glowny trójkąt ABC: wysokość CD dzieli przeciwprostokątna AB na rzut p (AD) i rzut q (DB), przy czym wyróżniono przyprostokątna a (AC).",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód opiera się na trójkątach podobnych. Narysowanie wysokości CD dzieli trójkąt ABC na dwa mniejsze trójkąty prostokątne, ACD i CBD, a oba sa podobne do pierwotnego trójkąta. Podobieństwo oznacza, że odpowiadające sobie boki zachowują ten sam stosunek, a jeden z tych stosunków daje twierdzenie o rzucie bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Skup się na trójkącie ACD i całym trójkącie ABC. Oba zawierają kąt przy A oraz kąt prosty, więc ich trzecie kąty również muszą być zgodne. Dopasowanie boków leżących w tych samych pozycjach daje proporcje:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Teraz podstaw standardowe oznaczenia: [[AD = p]], [[AC = a]] oraz [[AB = c]]. Proporcja przyjmuje postać:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Mnożenie na krzyż usuwa ułamki. Licznik z lewej strony pomnożony przez mianownik z prawej strony jest równy licznikowi z prawej strony pomnożonemu przez mianownik z lewej strony, więc [[p \\times c = a \\times a]], czyli:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie dodatniego pierwiastka kwadratowego z obu stron kończy dowód i daje [[a = \\sqrt{c \\times p}]]. Ten sam argument zastosowany do drugiego małego trójkąta, CBD, daje [[b^2 = c \\times q]]. Podobieństwo wykonuje cała pracę: odpowiadające sobie boki trójkątów podobnych pozostają proporcjonalne.",
            },
          ],
          "h2": "Dlaczego twierdzenie o rzucie działa?",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok mniejszych podobnych trójkątów ACD i CBD, pokazujący proporcje p przez a równa a przez c",
            "caption": "Dowód z trójkątów podobnych: p przez a jest równe a przez c, więc mnożenie na krzyż daje a do kwadratu równe c razy p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy przykład podaje dane wartości, podstawienie oraz końcowa odpowiedź. Komentarz pozostaje krótki, aby arytmetyka była widoczna, a każdy przykład zachowuje spójność jednostek od początku do końca.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm i [[p = 4]] cm, wzór daje [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], więc [[a \\approx 6.325]] cm. Iloczyn 40 nie jest kwadratem doskonałym, więc odpowiedź pozostaje przybliżeniem zaokrąglonym do trzech miejsc po przecinku. Zwróć uwagę, że 6,325 cm jest krótsze od przeciwprostokątnej 10 cm, jak być musi.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Wynik będący kwadratem doskonałym",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm i [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Gdy iloczyn jest kwadratem doskonałym, odpowiedź jest dokładna i nie wymaga zaokrąglenia. Jest to ten sam trójkąt co w przykładzie krok po kroku, a jego druga przyprostokątna ma 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Większy trójkąt",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 25]] m i [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Większe liczby niczego nie zmieniają w metodzie: pomnóż, a następnie wyciągnij pierwiastek. Drugi rzut wynosi tu 16 m i łączy się z przyprostokątna 20 m, co tworzy klasyczny trójkąt 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Pomiary dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 12.5]] cm i [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], więc [[a \\approx 6.325]] cm. Wynik zgadza się z przykładem 1 co do wartości, ponieważ oba iloczyny sa równe 40, co jest pożytecznym przypomnieniem, że różne dane mogą dawać ten sam iloczyn. Zachowaj pełny iloczyn pod pierwiastkiem az do końcowego zaokrąglenia.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Równe rzuty przeciwprostokątnej",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 20]] cm i [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, więc [[a \\approx 14.142]] cm. Równe rzuty oznaczają, że wysokość trafia w środek przeciwprostokątnej, co zachodzi dokładnie wtedy, gdy obie przyprostokątne sa równe. Trójkąt jest zatem równoramiennym trójkątem prostokątnym, a przyprostokątna b jest równa przyprostokątnej a.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Małe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 8]] mm i [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Małe jednostki działają dokładnie tak jak duże, a odpowiedź pozostaje w milimetrach, ponieważ obie dane były w milimetrach. Pomniejszenie zadania nigdy nie zmienia kroków.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 0.5]] m i [[p = 20]] cm, najpierw przelicz: 0,5 m to 50 cm. Następnie [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], więc [[a \\approx 31.623]] cm. Pomnożenie 0,5 przez 20 bez przeliczenia dałoby pierwiastek równy 10, czyli zła odpowiedź bez poprawnej jednostki.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 16]] ft i [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Iloczyn 64 jest kwadratem doskonałym, więc odpowiedź jest dokładna. Szybka kontrola sensu przechodzi: 8 ft to połowa przeciwprostokątnej, a druga przyprostokątna wynosi około 13,856 ft, czyli jest dłuższa od a, ale nadal krótsza od 16 ft.",
            },
          ],
          "h2": "Przykłady obliczania przyprostokątnej a z rzutu",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Niektóre zadania podają q zamiast p. Kalkulator na tej stronie nie przyjmuje q, ale to tylko jednokrokowe obejście, a nie ślepy zaułek. Ponieważ oba rzuty sumują się do przeciwprostokątnej, najpierw odejmij, aby odzyskać p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Weź [[c = 25]] cm i [[q = 16]] cm. Odejmowanie daje [[p = 25 - 16 = 9]] cm. Teraz stosuje się zwykły wzór: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Gdybyś wpisał 16 bezpośrednio jako p, kalkulator zwróciłby 20 cm, czyli przyprostokątna b, a nie przyprostokątna a.",
            },
            {
              "kind": "p",
              "text": "Kalkulator <a href=\"/right-triangle-projection-q-calculator/\">rzutu q</a> może pomoc, gdy trzeba znaleźć samo q, a <a href=\"/right-triangle-projection-p-calculator/\">kalkulator rzutu p</a> obejmuje krok odwrotny. Tak czy inaczej zasada pozostaje ta sama: najpierw znajdź p, a potem użyj [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Jak znaleźć przyprostokątna a, gdy znany jest drugi rzut",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedno twierdzenie łączy trzy wielkości, więc jego przekształcenie pozwala znaleźć te, której brakuje. Trzy postacie to:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Tabela poniżej pokazuje każde przekształcenie, co znajduje oraz co musi być znane wcześniej.",
            },
          ],
          "h2": "Zależność między przyprostokątna a, przeciwprostokątna i rzutem p",
          "table": {
            "headers": [
              "Brakująca wielkość",
              "Wzór",
              "Potrzebne znane wartości",
            ],
            "rows": [
              [
                "Przyprostokątna a",
                "a = sqrt(cp)",
                "Przeciwprostokątna c i rzut p",
              ],
              [
                "Przeciwprostokątna c",
                "c = a do kwadratu / p",
                "Przyprostokątna a i rzut p",
              ],
              [
                "Rzut p",
                "p = a do kwadratu / c",
                "Przyprostokątna a i przeciwprostokątna c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Przyprostokątna b podąża za lustrzanym odbiciem wzoru na przyprostokątna a. Tam, gdzie przyprostokątna a tworzy parę z rzutem p, przyprostokątna b tworzy parę z rzutem q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Użyj jednego spójnego trójkąta, aby zobaczyć obie przyprostokątne razem: [[c = 25]], [[p = 9]] oraz [[q = 16]]. Wtedy [[a = \\sqrt{25 \\times 9} = 15]] i [[b = \\sqrt{25 \\times 16} = 20]]. Obie przyprostokątne dzielą te sama przeciwprostokątna, ale korzystają z różnych rzutów, dlatego poprawne rozpoznanie p i q decyduje o tym, która przyprostokątna otrzymasz.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątne ograniczają się też wzajemnie poprzez twierdzenie Pitagorasa, omówione dwie sekcje dalej: znajomość jednej przyprostokątnej i przeciwprostokątnej wyznacza druga. W zadaniach, które zaczynają się od q, a nie od p, <a href=\"/right-triangle-leg-b-from-projection-calculator/\">kalkulator przyprostokątnej b z rzutu</a> stosuje te sama metodę przy drugim przyporządkowaniu.",
            },
          ],
          "h2": "Zależność między przyprostokątna a i przyprostokątna b",
          "image": {
            "alt": "Trójkąt prostokątny porównujący rzut p sparowany z przyprostokątna a z rzutem q sparowanym z przyprostokątna b, przy c równym 25, p równym 9 i q równym 16",
            "caption": "Poprawnie sparowane: a korzysta z p (sqrt(25 x 9) = 15), a b korzysta z q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie o rzucie i twierdzenie Pitagorasa zgadzają się dokładnie, a algebra pokazuje dlaczego. Zacznij od dwoch wzorów na rzuty:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dodaj odpowiadający wzór na przyprostokątna b, [[b^2 = c \\times q]], aby otrzymać:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Wyłączenie c przed nawias po prawej stronie daje [[a^2 + b^2 = c(p + q)]]. Ponieważ [[p + q = c]], podstawienie prowadzi do znanego wyniku:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kontrola liczbowa na trójkącie 9-16-25 to potwierdza: [[a^2 + b^2 = 225 + 400 = 625]] i [[c^2 = 25^2 = 625]]. Oba twierdzenia nie sa rywalami. Twierdzenie o rzucie rozdziela zależność pitagorejska na jedna część dla każdej przyprostokątnej, a dodanie tych części odbudowuje ja.",
            },
          ],
          "h2": "Zależność między rzutem p a twierdzeniem Pitagorasa",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy niezależne kontrole wykrywają prawie każdy błąd. Wykonaj co najmniej jedna z nich dla każdej odpowiedzi, a wszystkie trzy, gdy zadanie ma znaczenie.",
            },
            {
              "kind": "h3",
              "text": "Metoda 1: Kontrola twierdzeniem o rzucie",
            },
            {
              "kind": "p",
              "text": "Podnieś swoją odpowiedź do kwadratu i porównaj ja z iloczynem c i p. Dla [[c = 25]], [[p = 9]] i [[a = 15]]: [[a^2 = 225]] i [[c \\times p = 225]], więc odpowiedź przechodzi kontrole. Jeśli te dwie liczby się różnią, dane wejściowe albo krok z pierwiastkiem kwadratowym poszły nie tak.",
            },
            {
              "kind": "h3",
              "text": "Metoda 2: Kontrola twierdzeniem Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Znajdź przyprostokątna b na podstawie q, a następnie sprawdź [[a^2 + b^2 = c^2]]. Dla [[p = 9]], [[q = 16]] i [[c = 25]]: [[a = 15]], [[b = 20]] oraz [[225 + 400 = 625 = 25^2]]. Ta kontrola wykracza poza kalkulator, ponieważ sprawdza cały trójkąt, a nie tylko jeden wzór.",
            },
            {
              "kind": "h3",
              "text": "Metoda 3: Kontrole rozmiaru i dodawania",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że p jest mniejsze od c, że [[p + q = c]], gdy znane jest q, oraz że przyprostokątna a jest krótsza od przeciwprostokątnej. W przykładzie 9 jest mniejsze od 25, [[9 + 16 = 25]], a 15 jest krótsze od 25. Każde niepowodzenie tutaj wskazuje na błąd oznaczeń, a nie na pomyłkę rachunkowa.",
            },
          ],
          "h2": "Jak zweryfikować obliczona przyprostokątna a",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem własności wynika bezpośrednio z [[a = \\sqrt{c \\times p}]] oraz geometrii, która za nim stoi. Każda z nich służy też jako kontrola sensu nowej odpowiedzi.",
            },
            {
              "items": [
                "Przyprostokątna a jest zawsze krótsza od przeciwprostokątnej w niezdegenerowanym trójkącie prostokątnym, ponieważ p to tylko część c.",
                "Rzut p jest zawsze mniejszy od c i zawsze dodatni. Zerowe lub ujemne rzuty nie opisują żadnego prawdziwego trójkąta.",
                "Zwiększenie p przy stałym c zwiększa a, ponieważ iloczyn pod pierwiastkiem rośnie.",
                "Zwiększenie c przy stałym p zwiększa a matematycznie, pod warunkiem że nowe wartości nadal opisują prawdziwy trójkąt, w którym p jest mniejsze od c.",
                "Zamiana p i q zmienia to, która przyprostokątna jest obliczana: p daje przyprostokątna a, a q daje przyprostokątna b.",
                "Równe rzuty dają równe przyprostokątne. Dla c = 20 oraz p = q = 10 obie przyprostokątne sa równe 10 razy pierwiastek kwadratowy z 2, czyli około 14,142.",
                "Wynik to długość, a nie pole. Iloczyn podniesiony do kwadratu to tylko krok pośredni, a pierwiastek kwadratowy przywraca zwykle jednostki długości.",
                "Przeskalowanie wszystkich pomiarów o ten sam współczynnik skaluje przyprostokątna a o ten współczynnik. Podwojenie c i p podwaja a, ponieważ iloczyn rośnie czterokrotnie, a jego pierwiastek podwaja się.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Gdy wysokość pada dokładnie na środek przeciwprostokątnej, trójkąt jest równoramienny, a obie przyprostokątne muszą się zgadzać, jak pokazuje diagram poniżej.",
            },
          ],
          "h2": "Ważne własności przyprostokątnej a wyznaczonej z rzutu",
          "image": {
            "alt": "Równoramienny trójkąt prostokątny o przeciwprostokątnej 20, równych rzutach p i q po 10 oraz przyprostokątnych a i b, z których każda jest równa 10 pierwiastków z 2",
            "caption": "Równe rzuty: c = 20 przy p = q = 10 daje a = b = 10 pierwiastków z 2, czyli około 14,142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy błąd poniżej jest opatrzony poprawka. Większość z nich wynika z oznaczeń, a nie z arytmetyki.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapomnienie pierwiastka kwadratowego: podanie cp jako odpowiedzi. Dla c = 10 i p = 3,6 odpowiedź to 6 cm, a nie 36.",
                "Mylenie a z a do kwadratu: w tym przykładzie 36 to a do kwadratu, a 6 to przyprostokątna. Powiedz, która z nich masz na myśli, zanim zapiszesz liczbę.",
                "Użycie rzutu q zamiast p: wpisanie q zwraca przyprostokątna b. Dla c = 25 i q = 16 wynik 20 to przyprostokątna b, a nie przyprostokątna a.",
                "Wpisanie przyprostokątnej w polu przeciwprostokątnej: przeciwprostokątna to bok leżący naprzeciw kąta prostego i najdłuższy bok. Przyprostokątna wpisana jako c zaburza każdy późniejszy krok.",
                "Mylenie przeciwprostokątnej z rzutem: c to cały bok, a p to tylko jego część. Przed obliczeniem sprawdź, czy p jest mniejsze od c.",
                "Użycie p większego od c lub mu równego: taki trójkąt nie istnieje, ponieważ p jest częścią c. Jeśli to się zdarzy, sprawdź ponownie oznaczenia na diagramie.",
                "Mieszanie centymetrów i metrów: najpierw przelicz, jak w przykładzie 7, gdzie 0,5 m zamieniono na 50 cm przed pomnożeniem przez 20 cm.",
                "Użycie ujemnych pomiarów: długości sa dodatnie, więc ujemna wartość wejściowa oznacza błąd w danych, a nie ujemna przyprostokątna.",
                "Stosowanie wzoru do trójkąta nieprostokątnego: twierdzenie o rzucie wymaga wysokości poprowadzonej z kąta prostego. Bez kąta prostego nie ma rzutu p w tym sensie.",
                "Zaokrąglanie zbyt wcześnie: zaokrąglenie iloczynu przed wyciągnięciem pierwiastka zmienia odpowiedź. Zachowaj pełną precyzję az do ostatniego kroku.",
                "Użycie złej odpowiedniości boków na diagramie: sparowanie p z b albo q z a zamienia przyprostokątne. Dopasuj p do przyprostokątnej stykającej się z wierzchołkiem A.",
                "Traktowanie wysokości jako rzutu: wysokość h jest prostopadła do przeciwprostokątnej, a nie jej częścią, więc nigdy nie należy do pola p.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli odpowiedź wygląda na błędna, zatrzymaj się i popraw oznaczenia na diagramie przed ponownym obliczeniem. Większość błędów powyżej znika, gdy tylko p i q zostaną wyraźnie zaznaczone na przeciwprostokątnej, a wszystko inne zostanie odsunięte na bok.",
            },
          ],
          "h2": "Typowe błędy przy wyznaczaniu przyprostokątnej a z rzutu",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to zadania domowe z geometrii i praca w klasie, w których zadania o rzutach sprawdzają, czy uczniowie potrafią oznaczyć diagram i zastosować [[a^2 = c \\times p]] zamiast sięgać z przyzwyczajenia po twierdzenie Pitagorasa. Ćwiczenia z trójkątów podobnych korzystają z tego samego układu, ponieważ sam dowód jest ćwiczeniem z dopasowywania odpowiadających sobie boków.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny korzysta z twierdzenia, gdy trójkąt prostokątny trzeba odtworzyć na podstawie częściowych pomiarów: jeśli rysunek podaje przeciwprostokątna i spodek wysokości, brakująca przyprostokątna wynika z tego bez ponownego mierzenia kształtu. Nauczyciele wykorzystują też ten układ jako lekcje pomostowa między dodawaniem odcinków a podobieństwem.",
            },
            {
              "kind": "p",
              "text": "Jeden warunek ogranicza każde zastosowanie: wymagana geometria trójkąta prostokątnego musi naprawdę istnieć. Twierdzenie opisuje dokładne zależności geometryczne, a nie przybliżone pomiary terenowe, więc nigdy nie zastąpi starannego pomiaru geodezyjnego ani profesjonalnego pomiaru inżynierskiego. W swoim właściwym zastosowaniu zamienia jednak dwie znane długości w trzecia przy jednym mnożeniu i jednym pierwiastku kwadratowym.",
            },
          ],
          "h2": "Praktyczne zastosowania twierdzenia o rzucie",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj rozwiązać wszystkie sześć zadań na papierze przed przeczytaniem odpowiedzi. Żadna z wartości nie powtarza przykładów z rozwiązaniami, a ostatnie zadanie łączy kilka idei z tego przewodnika.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Podstawowe liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątna [[c = 36]] cm i rzut [[p = 4]] cm. Znajdź przyprostokątna a.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Rzut dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 26]] cm i [[p = 6.5]] cm, znajdź przyprostokątna a.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Duża przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 100]] cm i [[p = 64]] cm, znajdź przyprostokątna a.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna ma [[c = 1.2]] m, a jej rzut p ma 30 cm. Znajdź przyprostokątna a w centymetrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Najpierw znajdź p na podstawie q i c",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątna [[c = 65]] cm i rzut [[q = 49]] cm. Znajdź przyprostokątna a.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Wielokrokowe, z przyprostokątna b i Pitagorasem",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 50]] cm i [[p = 18]] cm, znajdź przyprostokątna a, a następnie znajdź przyprostokątna b i sprawdź wynik twierdzeniem Pitagorasa.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: Przelicz 1,2 m na 120 cm, a następnie [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: Najpierw [[p = 65 - 49 = 16]] cm, a następnie [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Drugi rzut to [[q = 50 - 18 = 32]] cm, więc [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Kontrola: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        },
      },
      "tocHeading": "Zawartość przewodnika",
      "tocItems": {
        "sec-intro": "Kalkulator przyprostokątnej a trójkąta prostokątnego z rzutu",
        "sec-calculate": "Obliczanie przyprostokątnej a trójkąta prostokątnego z rzutu",
        "sec-what-leg-a": "Czym jest przyprostokątna a w trójkącie prostokątnym?",
        "sec-what-projection-p": "Czym jest rzut p w trójkącie prostokątnym?",
        "sec-formula": "Wzór na przyprostokątna a trójkąta prostokątnego z rzutu",
        "sec-why-sqrt": "Dlaczego we wzorze występuje pierwiastek kwadratowy?",
        "sec-how": "Jak korzystać z kalkulatora przyprostokątnej a trójkąta prostokątnego",
        "sec-step-example": "Przykład krok po kroku: wyznaczanie przyprostokątnej a",
        "sec-diagram": "Diagram przyprostokątnej a trójkąta prostokątnego z rzutu: objaśnienie",
        "sec-proof": "Dlaczego twierdzenie o rzucie działa?",
        "sec-examples": "Przykłady obliczania przyprostokątnej a z rzutu",
        "sec-other-projection": "Jak znaleźć przyprostokątna a, gdy znany jest drugi rzut",
        "sec-relationship": "Zależność między przyprostokątna a, przeciwprostokątna i rzutem p",
        "sec-leg-b": "Zależność między przyprostokątna a i przyprostokątna b",
        "sec-pythagoras": "Zależność między rzutem p a twierdzeniem Pitagorasa",
        "sec-verify": "Jak zweryfikować obliczona przyprostokątna a",
        "sec-properties": "Ważne własności przyprostokątnej a wyznaczonej z rzutu",
        "sec-mistakes": "Typowe błędy przy wyznaczaniu przyprostokątnej a z rzutu",
        "sec-applications": "Praktyczne zastosowania twierdzenia o rzucie",
        "sec-practice": "Zadania do samodzielnego rozwiązania z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-faq": "Najczęściej zadawane pytania",
      },
    },
};
