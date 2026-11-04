// semiperimeterGuideTranslations.b4pl.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Polish (pl).
export const B4_PL = {
  "pl": {
    "tocHeading": "Nawigacja po sekcjach",
    "tocItems": {
      "sec-intro": "Jak obliczyć półobwód trójkąta prostokątnego",
      "sec-geometry": "Czym jest trójkąt prostokątny?",
      "sec-meaning": "Czym jest półobwód trójkąta prostokątnego?",
      "sec-formula": "Wzór na półobwód trójkąta prostokątnego",
      "sec-calculator": "Jak korzystać z kalkulatora półobwodu trójkąta prostokątnego",
      "sec-examples": "Przykłady krok po kroku obliczania półobwodu trójkąta prostokątnego",
      "sec-practical": "Zastosowania półobwodu trójkąta prostokątnego w życiu codziennym",
      "sec-inradius": "Jak półobwód wiąże się z promieniem okręgu wpisanego w trójkąt prostokątny?",
      "sec-heron": "Jak półobwód jest wykorzystywany we wzorze Herona?",
      "sec-vs-perimeter": "Jaka jest różnica między obwodem a półobwodem?",
      "sec-missing-side": "Jak obliczyć półobwód, gdy brakuje jednego boku",
      "sec-properties": "Ważne własności półobwodu trójkąta prostokątnego",
      "sec-units": "Jednostki miary w obliczeniach półobwodu",
      "sec-mistakes": "Częste błędy przy obliczaniu półobwodu trójkąta prostokątnego",
      "sec-verify": "Jak sprawdzić, czy wynik półobwodu jest poprawny",
      "sec-related": "Zobacz powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Połowa obwodu, pełne zrozumienie"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć półobwód trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Dodaj trzy boki trójkąta prostokątnego, a następnie podziel sumę przez dwa." },
          { "kind": "p", "text": "To całe obliczenie, a ten kalkulator wykonuje je dla dowolnego trójkąta prostokątnego po wpisaniu dwóch przyprostokątnych i przeciwprostokątnej. Potrzebne są trzy pomiary boków, ponieważ trójkąt ma trzy krawędzie, a przeciwprostokątna musi być uwzględniona: to jedna z tych trzech krawędzi, choć nigdy nie styka się z kątem prostym. Suma jest dzielona przez dwa, ponieważ półobwód definiuje się jako dokładnie połowę pełnego obwodu, wielkość, która pojawia się w geometrii trójkąta wielokrotnie." },
          { "kind": "p", "text": "Szybki przykład pokazuje ideę. Dla [[a=3]], [[b=4]] i [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Pełny obwód wynosi 12 jednostek, więc jego półobwód to 6 jednostek. Zauważ, że półobwód to miara liniowa, a nie miara pola: to długość, podawana w metrach, stopach lub zwykłych jednostkach, nigdy w jednostkach kwadratowych. Staje się użyteczny, gdy tylko wzór wymaga połowy obwodu, co zdarza się we wzorze Herona na pole, w związku promienia okręgu wpisanego oraz w kilku dowodach geometrycznych, w których pełny obwód tylko by przeszkadzał." }
        ]
      },
      "sec-geometry": {
        "h2": "Czym jest trójkąt prostokątny?",
        "blocks": [
          { "kind": "p", "text": "Zanim dojdzie do jakiegokolwiek dzielenia przez dwa, trzy boki muszą być poprawnie oznaczone. Symbole poniżej pozostają niezmienne w całym przewodniku, a kalkulator używa tych samych nazw." },
          { "kind": "h3", "text": "Definicja trójkąta prostokątnego" },
          { "kind": "p", "text": "Trójkąt prostokątny to trójkąt zawierający jeden kąt wewnętrzny o mierze dokładnie 90 stopni. Ma trzy wierzchołki, trzy boki, dwa kąty ostre i jeden kąt prosty, zwykle oznaczony małym kwadratem. Dwa boki tworzące kąt prosty to przyprostokątne; bok leżący naprzeciw kąta prostego to przeciwprostokątna. Ponieważ kąty dowolnego trójkąta sumują się do 180 stopni, [[A+B+C=180^\\circ]], a przy [[C=90^\\circ]] wynika z tego [[[\\boxed{A+B=90^\\circ}]]]: dwa kąty ostre są dopełniające się, więc znajomość jednego wyznacza drugi. Poprawne zrozumienie tego obrazu ma znaczenie, ponieważ wzór na półobwód traktuje każdy bok jako krawędź granicy, a błędnie oznaczony bok psuje sumę jeszcze przed rozpoczęciem dzielenia." },
          { "kind": "h3", "text": "Czym są dwie przyprostokątne?" },
          { "kind": "p", "text": "Przyprostokątna [[a]] i przyprostokątna [[b]] to dwa boki spotykające się w wierzchołku kąta prostego, prostopadłe do siebie. Każda z nich może być narysowana poziomo lub pionowo w zależności od orientacji trójkąta; definiuje je kąt 90 stopni, który tworzą, a nie ich kierunek na stronie. Różnią się od przeciwprostokątnej położeniem i długością: każda przyprostokątna styka się z kątem prostym i każda jest krótsza od przeciwprostokątnej. W obliczeniach półobwodu ich rola jest prosta: obie są krawędziami granicy, więc obie wchodzą do sumy, która zostanie podzielona na pół." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego, zawsze najdłuższy bok trójkąta. Nigdy nie tworzy kąta prostego; rozciąga się naprzeciw niego, łącząc odległe końce dwóch przyprostokątnych. Różni się od przyprostokątnych zarówno położeniem, jak i długością: przyprostokątne spotykają się pod kątem 90 stopni, a przeciwprostokątna spotyka każdą przyprostokątną pod kątem ostrym. Zamyka trójkątną granicę, dlatego musi być uwzględniona w obliczaniu półobwodu. Gdy obie przyprostokątne są znane, twierdzenie Pitagorasa pozwala ją odzyskać: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Jak rozpoznać poprawne oznaczenia boków" },
          { "kind": "p", "text": "[[a]] i [[b]] to dwa boki spotykające się pod kątem 90 stopni, a [[c]] leży naprzeciw kąta prostego. W niezdegenerowanym trójkącie prostokątnym [[c]] to najdłuższy bok. Znacznik kąta prostego mówi, który bok to [[c]]: to ten, który nie dotyka tego wierzchołka. Pomaga szybkie sprawdzenie kolejności: uporządkuj trzy liczby, a największa musi pełnić rolę [[c]]. Jeśli największy bok nie leży naprzeciw kwadratowego rogu, oznaczenia są błędne, a półobwód zbudowany na nich też będzie błędny." },
          { "kind": "h3", "text": "Dlaczego półobwód zależy od wszystkich trzech boków?" },
          { "kind": "p", "text": "Półobwód wywodzi się z pełnego obwodu, a pełny obwód liczy każdą krawędź granicy. Mimo że [[a]] i [[b]] są prostopadłe, przeciwprostokątna pozostaje częścią zewnętrznej granicy trójkąta: to krawędź, która zamyka kształt. Pominięcie [[c]] nie daje krótszego półobwodu; daje inną, błędną wielkość. Dla [[a=3]], [[b=4]], [[c=5]] pominięcie przeciwprostokątnej daje [[(3+4)/2=3.5]], podczas gdy prawdziwy półobwód to [[(3+4+5)/2=6]]. Brakujące 2,5 jednostki to udział przeciwprostokątnej i żaden poprawny wzór nie może jej pominąć." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC: przyprostokątne a i b, przeciwprostokątna c, kąt prosty przy C, obwód P i półobwód s",
        "figcaption": "Trójkąt ABC: przyprostokątne a i b spotykają się przy kącie prostym C, przeciwprostokątna c zamyka granicę, a s = (a + b + c) / 2 to połowa obwodu."
      },
      "sec-meaning": {
        "h2": "Czym jest półobwód trójkąta prostokątnego?",
        "blocks": [
          { "kind": "h3", "text": "Definicja półobwodu" },
          { "kind": "p", "text": "Półobwód to dokładnie połowa pełnego obwodu trójkąta. Jeśli [[P]] to całkowita odległość wokół trójkąta, to półobwód [[s]] wynosi [[[\\boxed{s=\\frac{P}{2}}]]] Dla trójkąta prostokątnego pełny obwód to [[P=a+b+c]], więc definicja przyjmuje postać [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Wszystkie trzy długości boków są dodawane przed dzieleniem: suma zbiera całą granicę, a dzielenie przez dwa zmniejsza ją o połowę. Nic nie jest pominięte i nic nie jest liczone podwójnie." },
          { "kind": "h3", "text": "Dlaczego nazywa się półobwodem?" },
          { "kind": "p", "text": "Nazwa wyjaśnia się sama, gdy ją rozłożyć. <em>Semi</em> znaczy połowa, a <em>perimeter</em> znaczy pełna długość granicy. Razem półobwód oznacza połowę obwodu. Litera [[s]] to standardowy symbol matematyczny i pojawia się w wielu wzorach na trójkąty właśnie dlatego, że połowy długości granic występują tak często. Gdy wzór wymaga [[s]], wymaga tej jednej liczby: połowy [[a+b+c]]." },
          { "kind": "h3", "text": "Czy półobwód oznacza fizyczną połowę drogi wzdłuż granicy?" },
          { "kind": "p", "text": "To subtelny punkt wart poprawnego zrozumienia. Półobwód to połowa liczbowej sumy trzech długości boków, ale niekoniecznie opisuje ciągłą fizyczną trasę pokrywającą połowę granicy trójkąta. Przejście 6 jednostek wzdłuż krawędzi trójkąta 3-4-5 mogłoby na przykład oznaczać przejście dwóch przyprostokątnych (3 + 4 = 7 to już za daleko) albo jednej przyprostokątnej i części przeciwprostokątnej; nie istnieje jedna naturalna ścieżka do połowy. Półobwód to przede wszystkim pochodna miara geometryczna, wygodna wartość pośrednia, z której korzystają wzory, a nie odległość, którą przemierzałbyś krokami w terenie." },
          { "kind": "h3", "text": "Czy półobwód jest długością czy polem?" },
          { "kind": "p", "text": "Półobwód to miara jednowymiarowa: długość. Jeśli długości boków są w metrach, [[s]] jest w metrach; w centymetrach, jest w centymetrach; w stopach, w stopach; w calach, w calach. Nigdy nie wolno go wyrażać w jednostkach kwadratowych. Dzielenie przez dwa zmienia wielkość liczby, a nie jej wymiar: połowa długości to wciąż długość. Mylenie [[s]] z polem to jeden z najczęstszych błędów początkujących, a pilnowanie jednostek to najprostszy sposób, by go uniknąć." },
          { "kind": "h3", "text": "Czy półobwód jest zawsze większy od najdłuższego boku?" },
          { "kind": "p", "text": "Tak, dla każdego poprawnego niezdegenerowanego trójkąta, a nierówność trójkąta pokazuje dlaczego. Każdy trójkąt spełnia [[a+b>c]]: dwa krótsze boki razem przewyższają najdłuższy. Dodaj [[c]] do obu stron, a otrzymasz [[a+b+c>2c]]; podziel przez dwa, a wynikiem jest [[[\\boxed{s>c}]]] Dla trójkąta prostokątnego oznacza to, że półobwód jest zawsze większy od przeciwprostokątnej. Dla 3-4-5: [[s=6]] przewyższa [[c=5]]. To poręczna kontrola rozsądku: jeśli obliczony półobwód jest mniejszy od przeciwprostokątnej, oznaczenia boków albo arytmetyka są błędne." }
        ]
      },
      "sec-formula": {
        "h2": "Wzór na półobwód trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Używa się dwóch postaci tego samego wzoru, w zależności od tego, co jest znane. Zwarta postać wychodzi od pełnego obwodu:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Rozwinięta postać wychodzi od trzech boków:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Objaśnienie każdej zmiennej" },
          { "kind": "p", "text": "[[s]] to półobwód, obliczana odpowiedź. [[P]] to pełny obwód, całkowita długość granicy. [[a]] to pierwsza przyprostokątna, a [[b]] druga przyprostokątna, dwa prostopadłe boki. [[c]] to przeciwprostokątna, najdłuższy bok, leżąca naprzeciw kąta prostego. Nigdy nie zamieniaj [[P]] i [[s]]: jedno to cała granica, drugie to jej połowa." },
          { "kind": "h3", "text": "Dlaczego dzielimy przez dwa?" },
          { "kind": "p", "text": "Dzielenie to właśnie to, co czyni wielkość <em>pół</em>obwodem, a nie obwodem. Weź [[a=3]], [[b=4]], [[c=5]]. Najpierw oblicz pełny obwód: [[P=3+4+5]], więc [[P=12]]. Następnie podziel przez dwa: [[s=12/2]], co daje [[[\\boxed{s=6}]]] Matematycznie dzielenie przeskalowuje sumę granicy do połowy wartości, której oczekują wzory takie jak wzór Herona. Pominięcie go odpowiada na inne pytanie: na pełny obwód, nie na półobwód." },
          { "kind": "h3", "text": "Dlaczego nie możemy użyć samych dwóch przyprostokątnych?" },
          { "kind": "p", "text": "Ponieważ same przyprostokątne to nie cała granica. Błędne podejście [[s=(3+4)/2]] daje 3,5, liczbę bez znaczenia geometrycznego dla tego trójkąta: ignoruje przeciwprostokątną, która jest prawdziwą krawędzią kształtu. Poprawne podejście najpierw dodaje wszystkie trzy boki: [[s=(3+4+5)/2]], co daje [[[\\boxed{s=6}]]] Kuszącym skrótem jest podzielenie każdego boku na pół, a potem dodanie: [[1.5+2+2.5=6]]; arytmetyka akurat się zgadza, ponieważ dzielenie jest rozdzielne względem dodawania, ale zaciemnia to strukturę wzoru i prowokuje błędy. Najpierw dodaj, potem podziel raz." },
          { "kind": "h3", "text": "Jak obwód i półobwód są ze sobą powiązane?" },
          { "kind": "p", "text": "To ta sama miara w dwóch skalach. Podwojenie półobwodu odtwarza obwód, a podzielenie obwodu na pół odtwarza półobwód:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Każdą z tych wartości można odzyskać, gdy znana jest druga. Jeśli zadanie podaje obwód 30, półobwód to od razu 15; jeśli obliczenie daje [[s=20]], pełny obwód to 40. Ta dwukierunkowa zależność służy też jako narzędzie weryfikacji: po obliczeniu [[s]] z boków podwojenie go musi odtworzyć sumę boków." }
        ]
      },
      "sec-calculator": {
        "h2": "Jak korzystać z kalkulatora półobwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Kalkulator na tej stronie ma jedno zadanie: przyjmuje trzy długości boków trójkąta prostokątnego i zwraca półobwód, pokazując każdy krok obliczeń. Kroki poniżej dokładnie odpowiadają istniejącemu interfejsowi." },
          { "kind": "p", "text": "<strong>Krok 1: Znajdź kalkulator półobwodu.</strong> Znajduje się w górnej części strony, pod nagłówkiem H1, z trzema oznaczonymi polami." },
          { "kind": "p", "text": "<strong>Krok 2: Określ przyprostokątną a.</strong> Wybierz jeden z dwóch boków tworzących kąt prosty. Każdy z prostopadłych boków może być [[a]]." },
          { "kind": "p", "text": "<strong>Krok 3: Określ przyprostokątną b.</strong> Drugi prostopadły bok staje się [[b]]." },
          { "kind": "p", "text": "<strong>Krok 4: Określ przeciwprostokątną c.</strong> Najdłuższy bok, leżący naprzeciw kąta prostego, to [[c]]. Uporządkowanie trzech pomiarów i umieszczenie największego w tym polu zapobiega najczęstszemu błędowi wprowadzania danych." },
          { "kind": "p", "text": "<strong>Krok 5: Wpisz pierwszą przyprostokątną.</strong> Wpisz wartość [[a]] w polu Przyprostokątna a." },
          { "kind": "p", "text": "<strong>Krok 6: Wpisz drugą przyprostokątną.</strong> Wpisz wartość [[b]] w polu Przyprostokątna b." },
          { "kind": "p", "text": "<strong>Krok 7: Wpisz przeciwprostokątną.</strong> Wpisz wartość [[c]] w polu Przeciwprostokątna c." },
          { "kind": "p", "text": "<strong>Krok 8: Wybierz odpowiednie jednostki miary.</strong> Każde pole ma własny selektor jednostek. Wszystkie trzy boki muszą mieć zgodne jednostki przed dodaniem; mieszanie metrów z centymetrami psuje sumę." },
          { "kind": "p", "text": "<strong>Krok 9: Kliknij Oblicz półobwód.</strong> Narzędzie dodaje trzy boki i dzieli sumę przez dwa." },
          { "kind": "p", "text": "<strong>Krok 10: Sprawdź wyświetlony półobwód.</strong> Wynik pojawia się wraz z jednostką, na przykład [[[\\boxed{s=6\\text{ units}}]]] dla trójkąta 3-4-5." },
          { "kind": "p", "text": "<strong>Krok 11: Sprawdź kroki rozwiązania.</strong> Kalkulator pokazuje podstawienie i dzielenie, dzięki czemu możesz śledzić arytmetykę linia po linii." },
          { "kind": "p", "text": "<strong>Krok 12: Sprawdź, czy wynik to połowa pełnego obwodu.</strong> Podwój wynik: dla 3-4-5 [[2\\times6=12]], co zgadza się z [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Krok 13: Użyj Resetuj, rozpoczynając nowe obliczenie.</strong> Przycisk Resetuj czyści wszystkie trzy pola, dzięki czemu kolejny trójkąt zaczyna od czystego stanu." },
          { "kind": "h3", "text": "Co oznacza każde pole wejściowe?" },
          { "kind": "p", "text": "Trzy pola odpowiadają trzem krawędziom granicy. Pola Przyprostokątna a i Przyprostokątna b przyjmują dwa prostopadłe boki; pole Przeciwprostokątna c przyjmuje najdłuższy bok. Kalkulator dodaje dokładnie to, co wpiszesz, i dzieli sumę na pół, więc rola każdego pola jest ustalona: przeniesienie wartości przyprostokątnej do pola przeciwprostokątnej zmienia sumę i daje błędny półobwód." },
          { "kind": "h3", "text": "Dlaczego jednostki miary są ważne?" },
          { "kind": "p", "text": "Półobwód oblicza się przez dodanie trzech długości, a dodawanie wymaga zgodnych jednostek. Dodanie 3 metrów do 40 centymetrów bez przeliczenia daje bezsensowną sumę. Selektor jednostek każdego pola pozwala zadeklarować jednostkę wpisanej liczby; wybierz selektory opisujące rzeczywiste pomiary, aby dodawanie łączyło porównywalne wielkości." },
          { "kind": "h3", "text": "Zrozumienie wyświetlania wyniku" },
          { "kind": "p", "text": "Wyświetlenie wyniku pokazuje półobwód wraz z jego jednostką liniową. W tle kalkulator wykonał dokładnie dwie operacje: dodał wszystkie trzy boki, a następnie podzielił sumę przez dwa. Nie ma tu żadnych innych obliczeń, a narzędzie nie oblicza samodzielnie pola ani promienia okręgu wpisanego; te wzory to objaśnienia pomocnicze w tym przewodniku, nie dodatkowe wyniki kalkulatora." },
          { "kind": "h3", "text": "Zrozumienie kroków rozwiązania" },
          { "kind": "p", "text": "Panel kroków rozwiązania odtwarza obliczenie: wpisane wartości boków, ich sumę, dzielenie przez dwa i wynik końcowy. Ten widoczny przebieg to najszybszy sposób na wyłapanie literówki: jeśli krok pokazuje 4 tam, gdzie miało być 40, błąd jest oczywisty, zanim odpowiedź zostanie gdziekolwiek użyta." }
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku obliczania półobwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Cztery przykłady poniżej zachowują istniejące rozwiązane przypadki i rozwijają ich objaśnienia. Każdy podstawia trzy boki, dodaje je, dzieli przez dwa, a następnie weryfikuje odpowiedź." },
          { "kind": "h3", "text": "Przykład 1: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dla [[a=3,\\;b=4,\\;c=5]] wzór to [[s=\\frac{a+b+c}{2}]]. Podstaw: [[s=\\frac{3+4+5}{2}]]. Dodaj: [[s=\\frac{12}{2}]]. Wynik końcowy to [[[\\boxed{s=6\\text{ units}}]]] Weryfikacja: [[P=2s=12]], co zgadza się z bezpośrednią sumą [[3+4+5]]. Wynik jest poprawny, ponieważ każda krawędź granicy została policzona dokładnie raz przed dzieleniem." },
          { "kind": "h3", "text": "Przykład 2: trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dla [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], więc [[s=\\frac{30}{2}]], co daje [[[\\boxed{s=15\\text{ units}}]]] Pełny obwód to 30, a połowa z 30 to 15. Dla sprawdzenia [[5^2+12^2=13^2]] potwierdza kąt prosty, więc oznaczenia boków są wiarygodne." },
          { "kind": "h3", "text": "Przykład 3: trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dla [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], więc [[s=\\frac{40}{2}]], co daje [[[\\boxed{s=20\\text{ units}}]]] Zauważ wzorzec w przykładach: w miarę jak trójkąt rośnie, półobwód rośnie w parze z bokami, zawsze dokładnie jako połowa obwodu." },
          { "kind": "h3", "text": "Przykład 4: boki dziesiętne" },
          { "kind": "p", "text": "Dla [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], więc [[s=\\frac{15}{2}]], co daje [[[\\boxed{s=7.5\\text{ units}}]]] Wartości dziesiętne nie zmieniają wzoru: obowiązuje ta sama kolejność dodaj, potem podziel. Sprawdzenie pitagorejskie [[2.5^2+6^2=6.5^2]] potwierdza, że te boki naprawdę tworzą trójkąt prostokątny." }
        ],
        "imgAlt": "Trójkąt 3-4-5 z krokami obliczeń: dodaj boki, by otrzymać 12, podziel przez 2, półobwód s równa się 6",
        "figcaption": "Dodaj trzy boki, by otrzymać P = 12, a następnie podziel przez 2: półobwód s = 6.",
        "table": {
          "headers": ["Trójkąt", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Pełny obwód P", "Półobwód s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Tabela wyraźnie pokazuje wzorzec: gdy wszystkie trzy wymiary rosną, półobwód rośnie proporcjonalnie, zawsze dokładnie jako połowa pełnego obwodu. Porównanie wierszy ujawnia też, że trójkąty podobne skalują się razem; podwojenie każdego boku podwaja też półobwód."]
      },
      "sec-practical": {
        "h2": "Zastosowania półobwodu trójkąta prostokątnego w życiu codziennym",
        "blocks": [
          { "kind": "p", "text": "Jedno zastrzeżenie przed przykładami: półobwód zwykle nie jest wielkością używaną do zakupu połowy obramowania czy ogrodzenia wokół trójkątnego obiektu. Jego prawdziwa rola to geometryczna miara pośrednia, krok w stronę promienia okręgu wpisanego, kontroli pola i obliczeń projektowych. Każdy przykład poniżej to uproszczony model geometryczny trójkąta prostokątnego, a każdy oblicza półobwód obok pełnego obwodu, pola i promienia okręgu wpisanego, aby zależności pozostały widoczne." },
          { "kind": "h3", "text": "Przykład 1: trójkątne okno z okrągłą wstawką dekoracyjną" },
          { "kind": "p", "text": "Model trójkątnego okna ma [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Półobwód: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; pełny obwód [[P=12\\text{ m}]]. Pole [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] i promień okręgu wpisanego [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. To półobwód sprawia, że promień okręgu wpisanego da się obliczyć: zamienia trzy długości boków na jedną liczbę łączącą pole z promieniem okręgu stycznego do wszystkich trzech boków wyidealizowanego modelu trójkąta." },
          { "kind": "h3", "text": "Przykład 2: metalowy wspornik z okrągłym prześwitem" },
          { "kind": "p", "text": "Prostokątny wspornik ma [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Wtedy [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] i [[P=30\\text{ cm}]]. Pole [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] daje promień okręgu wpisanego [[r=\\frac{30}{15}=2\\text{ cm}]]. Ta wartość opisuje promień okręgu wpisanego w wyidealizowany trójkąt i może kierować geometrycznymi badaniami prześwitu dla okrągłego wycięcia. Sama w sobie nie określa bezpieczeństwa konstrukcji." },
          { "kind": "h3", "text": "Przykład 3: szczyt dachu z okrągłym projektem wentylacji" },
          { "kind": "p", "text": "Uproszczony model prostokątnego końca dachu ma [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Półobwód [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; obwód [[P=24\\text{ ft}]]. Pole [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] i promień okręgu wpisanego [[r=\\frac{24}{12}=2\\text{ ft}]]. Półobwód zamienia trzy długości krawędzi szczytu na promień okręgu wpisanego uproszczonego modelu. Prawdziwy montaż wentylacji wymaga osobnych pomiarów budowlanych i prześwitów wykraczających poza tę geometrię." },
          { "kind": "h3", "text": "Przykład 4: projekt trójkątnego ogrodu" },
          { "kind": "p", "text": "Model prostokątnego ogrodu ma [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Wtedy [[s=\\frac{7+24+25}{2}=28\\text{ m}]] i [[P=56\\text{ m}]]. Pole [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] daje promień okręgu wpisanego [[r=\\frac{84}{28}=3\\text{ m}]]. Okrąg wpisany to największy okrąg mieszczący się w wyidealizowanym trójkącie i stykający się ze wszystkimi trzema bokami, przydatny do umiejscowienia okrągłej rabaty lub fontanny na etapie projektu." },
          { "kind": "h3", "text": "Przykład 5: trójkątny panel produkcyjny CNC" },
          { "kind": "p", "text": "Trójkątny panel ma [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Półobwód [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; obwód [[P=40\\text{ cm}]]. Pole [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] i promień okręgu wpisanego [[r=\\frac{60}{20}=3\\text{ cm}]]. Półobwód i promień okręgu wpisanego służą tu jako geometryczne wartości odniesienia w modelowaniu CAD, na przykład przy pozycjonowaniu okrągłego elementu względem krawędzi panelu." },
          { "kind": "h3", "text": "Przykład 6: trójkątny szyld z okrągłym emblematem" },
          { "kind": "p", "text": "Panel szyldu ma [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Wtedy [[s=\\frac{9+12+15}{2}=18\\text{ in}]] i [[P=36\\text{ in}]]. Pole [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] daje promień okręgu wpisanego [[r=\\frac{54}{18}=3\\text{ in}]]. Promień okręgu wpisanego stanowi matematyczny punkt odniesienia dla maksymalnego wpisanego okrągłego emblematu, z zastrzeżeniem rzeczywistych marginesów i ograniczeń montażowych prawdziwego szyldu." },
          { "kind": "h3", "text": "Przykład 7: przemysłowa płyta trójkątna" },
          { "kind": "p", "text": "Prostokątna płyta ma [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Półobwód [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; obwód [[P=90\\text{ cm}]]. Pole [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] i promień okręgu wpisanego [[r=\\frac{180}{45}=4\\text{ cm}]]. Półobwód wspiera obliczenia geometryczne wyidealizowanego panelu przemysłowego, na przykład dobór rozmiaru okrągłego bossa, który musi trzymać się z dala od wszystkich trzech krawędzi." },
          { "kind": "h3", "text": "Przykład 8: trójkątny projekt witraża" },
          { "kind": "p", "text": "Prostokątny fragment szkła ma [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Wtedy [[s=\\frac{12+16+20}{2}=24\\text{ in}]] i [[P=48\\text{ in}]]. Pole [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] daje promień okręgu wpisanego [[r=\\frac{96}{24}=4\\text{ in}]]. Zależność jest bezpośrednia: półobwód dzieli granicę na pół, a podzielenie pola przez tę połowę granicy daje promień okręgu wpisanego dla układu projektu." },
          { "kind": "h3", "text": "Przykład 9: zmierzona trójkątna działka gruntu" },
          { "kind": "p", "text": "Uproszczony model prostokątnej działki ma [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Półobwód [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; obwód [[P=70\\text{ m}]]. Pole [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] i promień okręgu wpisanego [[r=\\frac{210}{35}=6\\text{ m}]]. W uproszczonym modelu geodezyjnym półobwód służy jako zwarta wejściowa do kontroli pola i promienia okręgu wpisanego, na przykład przy weryfikacji obliczonego pola działki względem wzoru Herona." },
          { "kind": "h3", "text": "Przykład 10: architektoniczna rama trójkątna" },
          { "kind": "p", "text": "Prostokątna rama architektoniczna ma [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Wtedy [[s=\\frac{12+35+37}{2}=42\\text{ m}]] i [[P=84\\text{ m}]]. Pole [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] daje promień okręgu wpisanego [[r=\\frac{210}{42}=5\\text{ m}]]. Ta wartość może wspierać modelowanie matematyczne okrągłego elementu wewnątrz trójkątnej ramy, takiego jak okrągłe okno wyśrodkowane na środku okręgu wpisanego." },
          { "kind": "h3", "text": "Przykład 11: duży projekt trójkątnej podłogi" },
          { "kind": "p", "text": "Prostokątny fragment podłogi ma [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Półobwód [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; obwód [[P=126\\text{ m}]]. Pole [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] i promień okręgu wpisanego [[r=\\frac{630}{63}=10\\text{ m}]]. Tutaj półobwód łączy pomiary boków z geometrią okręgu wpisanego modelu: jedna liczba łączy granicę z największym możliwym do wpisania okręgiem." },
          { "kind": "h3", "text": "Przykład 12: przemysłowa trójkątna płyta wsporcza" },
          { "kind": "p", "text": "Duża prostokątna płyta ma [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Wtedy [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] i [[P=154\\text{ cm}]]. Pole [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] daje promień okręgu wpisanego [[r=\\frac{924}{77}=12\\text{ cm}]]. Te pomiary zasilają model geometryczny okrągłego dopasowania lub wewnętrznego elementu projektu, z półobwodem jako wartością pośrednią prowadzącą do promienia okręgu wpisanego." }
        ],
        "table": {
          "headers": ["Zastosowanie praktyczne", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Obwód P", "Półobwód s", "Pole K", "Promień okręgu wpisanego r", "Jednostka"],
          "rows": [
            ["Okno trójkątne", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Wspornik metalowy", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Wentylacja szczytu dachu", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Projekt ogrodu", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Panel CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Emblemat na szyldzie", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Płyta przemysłowa", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Witraż", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Zmierzona działka", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Rama architektoniczna", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Projekt podłogi", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Płyta wsporcza", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Kilka uwag dotyczy każdego powyższego wiersza. Każde zastosowanie to uproszczony model geometryczny, a nie specyfikacja konstrukcyjna: rzeczywiste wymiary wymagają osobnej weryfikacji, wytrzymałości konstrukcji nie da się odczytać z półobwodu, a prawdziwe okrągłe otwory mogą wymagać dodatkowych luzów produkcyjnych. Półobwód to matematyczna wartość pośrednia, promień okręgu wpisanego to promień okręgu wpisanego, a okrąg wpisany styka się ze wszystkimi trzema bokami."]
      },
      "sec-inradius": {
        "h2": "Jak półobwód wiąże się z promieniem okręgu wpisanego w trójkąt prostokątny?",
        "blocks": [
          { "kind": "p", "text": "To jedna z najważniejszych sekcji artykułu, ponieważ promień okręgu wpisanego jest głównym powodem, dla którego półobwód istnieje jako nazwana wielkość. Okrąg wpisany to największy okrąg mieszczący się wewnątrz trójkąta i stykający się ze wszystkimi trzema bokami, a jego promień nazywa się promieniem okręgu wpisanego i oznacza [[r]]." },
          { "kind": "h3", "text": "Związek pola i półobwodu" },
          { "kind": "p", "text": "Dla dowolnego trójkąta pole, promień okręgu wpisanego i półobwód łączy jeden zwarty wzór:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "gdzie [[K]] to pole trójkąta, [[r]] to promień okręgu wpisanego, a [[s]] to półobwód. Po przekształceniu rozwiązuje promień okręgu wpisanego:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Znajomość półobwodu i pola pozwala więc obliczyć promień okręgu wpisanego bezpośrednio: podziel pole przez półobwód. To praktyczna korzyść z półobwodu. Ściska on trzy długości boków w jedną liczbę, która wraz z polem ujawnia okrąg wpisany." },
          { "kind": "h3", "text": "Specjalny wzór na promień okręgu wpisanego dla trójkątów prostokątnych" },
          { "kind": "p", "text": "Dla trójkąta prostokątnego pole wynosi [[K=\\frac{ab}{2}]], a półobwód [[s=\\frac{a+b+c}{2}]]. Podstawienie obu do [[r=\\frac{K}{s}]] daje:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Po uproszczeniu:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Istnieje też równoważny wzór dla trójkąta prostokątnego, który w ogóle omija pole:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Te dwa wyrażenia są równoważne dla trójkąta prostokątnego dzięki związkowi pitagorejskiemu: algebra zwija się, gdy tylko zastosuje się [[a^2+b^2=c^2]]. Obie postaci dają ten sam promień okręgu wpisanego; druga jest często szybsza przy liczeniu ręcznym." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład 3-4-5" },
          { "kind": "p", "text": "Dla [[a=3,\\;b=4,\\;c=5]]: półobwód [[s=\\frac{3+4+5}{2}=6]], pole [[K=\\frac{3\\times4}{2}=6]], promień okręgu wpisanego [[r=\\frac{6}{6}]], więc [[[\\boxed{r=1}]]] Sprawdź skrótem: [[r=\\frac{3+4-5}{2}]], co daje [[[\\boxed{r=1}]]] Obie metody dają tę samą odpowiedź, ponieważ to ta sama matematyka zapisana na dwa sposoby: jedna przechodzi przez pole, druga skraca je algebraicznie." },
          { "kind": "h3", "text": "Dlaczego półobwód jest ważny w obliczeniach okręgu wpisanego?" },
          { "kind": "p", "text": "Półobwód to pomost między granicą trójkąta a jego okręgiem wpisanym. Projektanci używają go przy dobieraniu rozmiarów okrągłych prześwitów wewnątrz trójkątnych części, przy umieszczaniu wpisanych okrągłych elementów w projektowaniu geometrycznym, przy wymiarowaniu rysunków inżynierskich oraz przy przeprowadzaniu dowodów matematycznych łączących pole z promieniem. Promień okręgu wpisanego łączy się też z weryfikacją pola: jeśli [[K]], [[r]] i [[s]] nie spełniają [[K=rs]], coś w łańcuchu jest nie tak. Ten kalkulator nie oblicza automatycznie promienia okręgu wpisanego; dostarcza półobwód, a wzory powyżej prowadzą dalej." }
        ],
        "imgAlt": "Trójkąt prostokątny 3-4-5 z okręgiem wpisanym o promieniu 1; półobwód s = 6, pole K = 6, r = K/s",
        "figcaption": "Okrąg wpisany styka się ze wszystkimi trzema bokami; przy s = 6 i K = 6 promień okręgu wpisanego r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Jak półobwód jest wykorzystywany we wzorze Herona?",
        "blocks": [
          { "kind": "p", "text": "Wzór Herona oblicza pole trójkąta z trzech długości boków, bez potrzeby osobno podanej wysokości. Półobwód jest jego głównym składnikiem: wzór zapisany jest przez [[s]] i różnice między [[s]] a każdym bokiem." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Tutaj [[K]] to pole trójkąta, [[s]] to półobwód, a [[a]], [[b]], [[c]] to trzy długości boków." },
          { "kind": "h3", "text": "Dlaczego wzór Herona używa półobwodu?" },
          { "kind": "p", "text": "Półobwód oblicza się najpierw, ponieważ centruje wyrażenie: każdy czynnik [[s-a]], [[s-b]], [[s-c]] mierzy, o ile połowa obwodu przewyższa jeden bok. Pomnożenie tych trzech nadwyżek przez samo [[s]] i wyciągnięcie pierwiastka kwadratowego zamienia informację o granicy w pole. Wzór działa dla każdego poprawnego trójkąta, nie tylko prostokątnego, dlatego półobwód zasługuje na swoje miejsce jako ogólne narzędzie geometryczne, a nie ciekawostka trójkąta prostokątnego." },
          { "kind": "h3", "text": "W pełni rozwiązany przykład 3-4-5" },
          { "kind": "p", "text": "Dla [[a=3,\\;b=4,\\;c=5]] najpierw oblicz półobwód: [[s=\\frac{3+4+5}{2}=6]]. Podstaw do wzoru Herona: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Uprość: [[K=\\sqrt{6\\times3\\times2\\times1}]], potem [[K=\\sqrt{36}]], co daje [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Sprawdź wynik wzorem na pole trójkąta prostokątnego" },
          { "kind": "p", "text": "Bezpośredni wzór na pole trójkąta prostokątnego to [[K=\\frac{ab}{2}]]. Po podstawieniu: [[K=\\frac{3\\times4}{2}]], co daje [[[\\boxed{K=6\\text{ square units}}]]] Oba wzory dają to samo pole i właśnie o to chodzi: wzór Herona, zbudowany na półobwodzie, niezależnie potwierdza prostsze obliczenie." },
          { "kind": "h3", "text": "Dlaczego to jest przydatne?" },
          { "kind": "p", "text": "Trójkąty prostokątne mają prostszy bezpośredni wzór na pole, więc wzór Herona rzadko jest najszybszą drogą do pola. Jego wartość leży w sprawdzaniu obliczeń pola, w rozumieniu, jak same długości boków wyznaczają pole, w rozwiązywaniu zadań opartych na bokach, w których nie podano wysokości, oraz w weryfikowaniu rozwiązań matematycznych niezależną drogą. Ilekroć dwa niepowiązane wzory zgadzają się co do pola, zaufanie do odpowiedzi gwałtownie rośnie." }
        ],
        "imgAlt": "Wzór Herona zastosowany do trójkąta 3-4-5: półobwód 6 daje pole 6, sprawdzone przez K = ab/2",
        "figcaption": "Pięć kroków: boki, półobwód s = 6, podstawienie do wzoru Herona, pole K = 6, sprawdzenie przez K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Jaka jest różnica między obwodem a półobwodem?",
        "blocks": [
          { "kind": "p", "text": "Te dwie wielkości opisują tę samą granicę w różnych skalach, a ich mylenie to jeden z najczęstszych błędów w pracy z trójkątami. Ta sekcja wyraźnie wyznacza granicę." },
          { "kind": "h3", "text": "Obwód mierzy pełną granicę" },
          { "kind": "p", "text": "Obwód to całkowita długość wokół trójkąta:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Oznacza pełne obejście wszystkich trzech krawędzi. Dla trójkąta 3-4-5 [[P=12]] jednostek." },
          { "kind": "h3", "text": "Półobwód to połowa sumy" },
          { "kind": "p", "text": "Półobwód to połowa liczbowego obwodu:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Dla tego samego trójkąta 3-4-5 [[s=6]] jednostek. Ten sam trójkąt, ta sama granica, ale liczba jest zmniejszona o połowę, ponieważ wzory, które ją zużywają, wzór Herona i związek promienia okręgu wpisanego, są zapisane dla połowy wartości." },
          { "kind": "h3", "text": "Porównanie liczbowe" },
          { "kind": "p", "text": "Weź trójkąt prostokątny 6-8-10. Obwód: [[P=6+8+10]], więc [[[\\boxed{P=24}]]] Półobwód: [[s=\\frac{24}{2}]], więc [[[\\boxed{s=12}]]] Obwód odpowiada na pytanie „jak długa jest cała granica?”, a półobwód na pytanie „jaka jest połowa wartości granicy, której potrzebuje mój wzór?”." },
          { "kind": "h3", "text": "Kiedy używać każdej miary?" },
          { "kind": "p", "text": "Używaj obwodu, gdy zadanie dotyczy pełnej długości granicy: obramowanie trójkątnego kształtu, ogrodzenie trójkątnej działki, szacowanie materiałów na obrzeża lub pomiar listew krawędziowych. Używaj półobwodu, gdy zadanie jest matematyczne: wzór Herona, obliczenia promienia okręgu wpisanego, zależności pola i promienia, zaawansowane dowody geometryczne albo niezależna weryfikacja wyniku pola. Zasada kciuka jest prosta: fizyczna praca z granicą wymaga [[P]]; praca ze wzorami wymaga [[s]]." },
          { "kind": "h3", "text": "Czy półobwód to połowa pola?" },
          { "kind": "p", "text": "Nie, a to nieporozumienie wymaga stanowczego sprostowania. Półobwód to miara liniowa: dla 3-4-5 wynosi 6 jednostek. Pole to miara dwuwymiarowa: dla 3-4-5 wynosi 6 jednostek kwadratowych. Liczby zbiegają się tu przypadkiem, ale wielkości różnią się rodzajem. Podzielenie długości na pół nigdy nie daje pola, tak jak podzielenie obwodu na pół nigdy nie daje powierzchni." }
        ],
        "table": {
          "headers": ["Wielkość", "Symbol", "Wzór", "Znaczenie", "Jednostka", "Typowe zastosowanie"],
          "rows": [
            ["Obwód", "[[P]]", "[[P=a+b+c]]", "Pełna długość granicy", "Liniowa (m, ft, in)", "Ogrodzenia, ramy, listwy"],
            ["Półobwód", "[[s]]", "[[s=(a+b+c)/2]]", "Połowa długości granicy", "Liniowa (m, ft, in)", "Wzór Herona, promień okręgu wpisanego"],
            ["Pole", "[[K]]", "[[K=ab/2]]", "Ograniczona powierzchnia", "Kwadratowa (m², ft², in²)", "Pokrycie powierzchni, materiał"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Jak obliczyć półobwód, gdy brakuje jednego boku",
        "blocks": [
          { "kind": "p", "text": "Kalkulator na tej stronie wymaga wszystkich trzech długości boków: nie może podzielić na pół sumy, której nie potrafi dodać. Jeśli jeden bok jest nieznany, najpierw oblicz go z twierdzenia Pitagorasa, a potem postępuj z półobwodem jak zwykle." },
          { "kind": "h3", "text": "Wyznaczanie przeciwprostokątnej" },
          { "kind": "p", "text": "Gdy obie przyprostokątne są znane, użyj [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Przykład: [[a=6]], [[b=8]]. Wtedy [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], co daje [[[\\boxed{c=10}]]] Teraz półobwód: [[s=\\frac{6+8+10}{2}]], więc [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Wyznaczanie brakującej przyprostokątnej" },
          { "kind": "p", "text": "Gdy znana jest przeciwprostokątna i jedna przyprostokątna, użyj [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Przykład: [[c=13]], [[b=12]]. Wtedy [[a=\\sqrt{169-144}]], co daje [[[\\boxed{a=5}]]] Następnie [[s=\\frac{5+12+13}{2}]], więc [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Dlaczego brakujący bok trzeba najpierw wyznaczyć?" },
          { "kind": "p", "text": "Półobwód wymaga pełnej sumy wszystkich trzech boków, a nieznanego boku nie można po prostu zignorować ani potraktować jako zero. Postać Pitagorasa dla przeciwprostokątnej dodaje kwadraty; postać dla przyprostokątnej je odejmuje; zastosowanie złej wymyśla bok, który nie istnieje. Gdy brakujący bok zostanie odzyskany, <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Kalkulator boków trójkąta prostokątnego</a> może dwukrotnie sprawdzić wartość, a obliczenie półobwodu przebiega na pewnym gruncie. Te kroki wyznaczania brakującego boku to edukacyjne metody pomocnicze, nie dodatkowe pola istniejącego kalkulatora." }
        ]
      },
      "sec-properties": {
        "h2": "Ważne własności półobwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Półobwód zachowuje się przewidywalnie. Te własności służą jednocześnie jako szybkie kontrole w pamięci i jako narzędzia w rozumowaniu geometrycznym." },
          { "kind": "h3", "text": "Półobwód jest większy od przeciwprostokątnej" },
          { "kind": "p", "text": "Dla każdego poprawnego trójkąta [[a+b>c]]. Dodanie [[c]] do obu stron daje [[a+b+c>2c]], a podzielenie przez dwa daje [[[\\boxed{s>c}]]] Półobwód zawsze przewyższa najdłuższy bok. Jeśli obliczenie zwraca [[s]] mniejsze od [[c]], oznaczenia albo arytmetyka są błędne." },
          { "kind": "h3", "text": "Półobwód jest mniejszy od sumy przyprostokątnych" },
          { "kind": "p", "text": "Nierówność trójkąta daje też [[c<a+b]]. Dodanie [[a+b]] do obu stron daje [[a+b+c<2(a+b)]], a podzielenie na pół daje [[[\\boxed{s<a+b}]]] Półobwód leży więc ściśle między przeciwprostokątną a sumą przyprostokątnych: [[c<s<a+b]]. Dla 3-4-5: [[5<6<7]]. Ta „kanapka” to szybka kontrola wiarygodności każdej odpowiedzi." },
          { "kind": "h3", "text": "Podwojenie każdego boku podwaja półobwód" },
          { "kind": "p", "text": "Przeskaluj trójkąt 3-4-5 przez dwa: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] daje boki 6, 8, 10. Wtedy [[s_2=\\frac{2a+2b+2c}{2}]], więc [[[\\boxed{s_2=2s}]]] Liczbowo [[s_2=12=2\\times6]]. Półobwód to miara liniowa, więc jednorodne skalowanie skaluje go tym samym czynnikiem." },
          { "kind": "h3", "text": "Potrojenie każdego boku potraja półobwód" },
          { "kind": "p", "text": "Ta sama liniowość obowiązuje dla dowolnego czynnika skali. Potrój każdy bok, a suma się potroi; podzielenie potrojonej sumy na pół daje trzy razy pierwotny półobwód: [[[\\boxed{s_2=3s}]]] Ogólnie skalowanie wszystkich boków przez [[k]] skaluje [[s]] przez [[k]]. Dlatego trójkąty podobne mają proporcjonalne półobwody." },
          { "kind": "h3", "text": "Co się dzieje, gdy zmienia się tylko jeden bok?" },
          { "kind": "p", "text": "Zmiana jednego boku przy stałych dwóch pozostałych zmienia liczbowy półobwód o połowę zmiany długości boku, ponieważ porusza się tylko jeden składnik sumy. Jest jednak haczyk: wynikowe pomiary muszą wciąż opisywać poprawny trójkąt, a na tej stronie trójkąt prostokątny. Wydłużenie przeciwprostokątnej trójkąta 3-4-5 do 6 na przykład łamie [[a^2+b^2=c^2]], więc nowe liczby w ogóle nie opisują już trójkąta prostokątnego. Dostosuj jeden bok trójkąta prostokątnego, a pozostałe muszą się dostosować, by zachować kąt prosty." },
          { "kind": "h3", "text": "Półobwód trójkąta 45-45-90" },
          { "kind": "p", "text": "Niech obie przyprostokątne będą równe [[k]]. Przeciwprostokątna to [[c=k\\sqrt{2}]], więc półobwód wynosi [[s=\\frac{k+k+k\\sqrt{2}}{2}]], co upraszcza się do [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] Równe przyprostokątne wnoszą symetryczny wkład, a niewymierna przeciwprostokątna odciska swoje piętno na wyniku: dla [[k=1]] [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Półobwód trójkąta 30-60-90" },
          { "kind": "p", "text": "Jeśli krótsza przyprostokątna to [[k]], boki to [[k]], [[k\\sqrt{3}]] i [[2k]]. Zatem [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], co daje [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Liczbowo przy [[k=2]] boki to 2, [[2\\sqrt{3}\\approx3.464]] i 4, więc [[s\\approx4.732]]. Dokładna postać pierwiastkowa jest tu lepsza: zachowuje pełną precyzję dla każdego późniejszego obliczenia Herona czy promienia okręgu wpisanego." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki miary w obliczeniach półobwodu",
        "blocks": [
          { "kind": "p", "text": "Półobwód działa w dowolnej jednostce długości: metrach, centymetrach, milimetrach, kilometrach, stopach, calach, jardach czy milach, ponieważ to po prostu suma długości podzielona na pół. Jednostka odpowiedzi zawsze odpowiada jednostce danych wejściowych. Jedyna ścisła zasada to spójność: każdy bok musi być wyrażony w tej samej jednostce przed dodaniem." },
          { "kind": "h3", "text": "Dlaczego wszystkie trzy pomiary boków muszą mieć zgodne jednostki?" },
          { "kind": "p", "text": "Półobwód oblicza się przez dodanie trzech długości, a długości w różnych jednostkach nie dodają się bezpośrednio. Dodanie 3 metrów do 40 centymetrów tak, jakby obie były zwykłymi liczbami, daje 43 bezsensowne jednostki. Suma jest poprawna tylko wtedy, gdy każdy składnik ma jedną jednostkę, więc przeliczenie następuje przed dodaniem, nigdy po." },
          { "kind": "h3", "text": "Rozwiązany przykład przeliczenia jednostek" },
          { "kind": "p", "text": "Dla [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Najpierw przelicz cale na stopy: [[48\\text{ inches}=4\\text{ ft}]]. Teraz wszystkie trzy boki są w stopach: [[s=\\frac{3+4+5}{2}]], co daje [[[\\boxed{s=6\\text{ ft}}]]] Pomiary trzeba przeliczyć przed dodaniem, ponieważ wzór dodaje surowe liczby; nie może wiedzieć, że 48 oznaczało cale, dopóki ich nie przeliczysz." },
          { "kind": "h3", "text": "Jak pomagają selektory jednostek kalkulatora?" },
          { "kind": "p", "text": "Każde pole na tej stronie ma własny selektor jednostki miary, który pozwala zadeklarować jednostkę wpisanej liczby. Ustaw każdy selektor zgodnie z rzeczywistą jednostką jego pola, aby narzędzie łączyło wartości na spójnej podstawie. Nie zakładaj funkcji przeliczania wykraczających poza to, co pokazuje interfejs: selektory opisują twoje dane wejściowe, a półobwód obliczany jest z wartości takich, jak wpisano." },
          { "kind": "h3", "text": "Praca z dziesiętnymi długościami boków" },
          { "kind": "p", "text": "Liczby dziesiętne podlegają temu samemu wzorowi. Dla [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], więc [[s=\\frac{15}{2}]], co daje [[[\\boxed{s=7.5\\text{ units}}]]] Zachowaj pełną precyzję dziesiętną przez dodawanie i dzielenie; zaokrąglij tylko końcową wyświetlaną odpowiedź i tylko wtedy, gdy zadanie tego wymaga." },
          { "kind": "h3", "text": "Praca z niewymiernymi długościami boków" },
          { "kind": "p", "text": "Niektóre trójkąty prostokątne mają niewymierne boki, a wzór radzi sobie z nimi tak samo. Weź trójkąt 45-45-90 z [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], co daje dokładną postać [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], w przybliżeniu [[s\\approx1.7071]]. Dokładny zapis pierwiastkowy jest cenny w matematyce, ponieważ zachowuje pełną precyzję: każde późniejsze użycie [[s]] we wzorze Herona czy obliczeniu promienia okręgu wpisanego zaczyna się od prawdziwej wartości, nie zaokrąglonej." },
          { "kind": "h3", "text": "Dlaczego nie należy zaokrąglać zbyt wcześnie?" },
          { "kind": "p", "text": "Przedwczesne zaokrąglanie wstrzykuje błąd do każdego późniejszego obliczenia, a półobwód jest często wartością pośrednią, nie odpowiedzią końcową. Zaokrąglenie [[s]] do dwóch miejsc po przecinku przed wstawieniem go do wzoru Herona, w którym pojawia się cztery razy, zauważalnie potęguje błąd. Zachowaj wystarczającą precyzję w krokach pośrednich: nieś pełną liczbę dziesiętną albo dokładny pierwiastek i zaokrąglij raz, na końcu, do precyzji wymaganej przez zadanie." }
        ]
      },
      "sec-mistakes": {
        "h2": "Częste błędy przy obliczaniu półobwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Szesnaście błędów odpowiada za niemal każdy błędny półobwód. Każdy objaśniony jest tym, co idzie nie tak, dlaczego tak się dzieje i jakie jest poprawne podejście." },
          { "kind": "p", "text": "<strong>1. Zapomnienie o podzieleniu sumy przez dwa.</strong> Dodanie 3 + 4 + 5 = 12 i zatrzymanie się daje obwód, nie półobwód. Zawsze kończ dzieleniem: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Dzielenie każdego boku przed zrozumieniem wzoru.</strong> Dzielenie boków na pół pojedynczo, a potem dodawanie, działa arytmetycznie, ale ukrywa strukturę wzoru. Najpierw dodaj, podziel raz: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Pominięcie przeciwprostokątnej.</strong> Przeciwprostokątna to krawędź granicy. Pominięcie jej w trójkącie 3-4-5 daje [[(3+4)/2=3.5]] zamiast 6." },
          { "kind": "p", "text": "<strong>4. Użycie tylko dwóch prostopadłych przyprostokątnych.</strong> Ten sam błąd co wyżej w innym przebraniu. Same przyprostokątne to nie cała granica; przeciwprostokątna zamyka kształt i musi być policzona." },
          { "kind": "p", "text": "<strong>5. Mylenie półobwodu z pełnym obwodem.</strong> Podanie 12 dla trójkąta 3-4-5 odpowiada na pytanie „ile wynosi P?”, gdy pytanie dotyczyło s. Pamiętaj: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Mylenie półobwodu z polem.</strong> Dla 3-4-5 oba wynoszą liczbowo 6, co prowokuje pomyłkę. Różnią się rodzajem: 6 jednostek długości kontra 6 jednostek kwadratowych powierzchni." },
          { "kind": "p", "text": "<strong>7. Podawanie wyniku w jednostkach kwadratowych.</strong> Półobwód 6 centymetrów kwadratowych to błąd kategorii. Połowa długości to wciąż długość: 6 cm, nie 6 cm²." },
          { "kind": "p", "text": "<strong>8. Użycie błędnej przeciwprostokątnej.</strong> Jeśli wartość przeciwprostokątnej jest błędna, suma jest błędna i półobwód też. Sprawdź [[c=\\sqrt{a^2+b^2}]], gdy przeciwprostokątna była obliczona, a nie zmierzona." },
          { "kind": "p", "text": "<strong>9. Wpisywanie pomiarów, które nie tworzą trójkąta prostokątnego.</strong> Sprawdź [[a^2+b^2=c^2]], zanim zaufasz etykiecie „trójkąt prostokątny”. Dodawanie wciąż działa, ale znaczenie geometryczne się zmienia." },
          { "kind": "p", "text": "<strong>10. Mieszanie centymetrów z metrami.</strong> Dodanie 3 m do 40 cm nie daje 43 czegokolwiek. Najpierw przelicz na jedną jednostkę." },
          { "kind": "p", "text": "<strong>11. Mieszanie stóp z calami.</strong> Klasyczna pułapka imperialna. Przelicz cale na stopy (podziel przez 12) przed dodaniem albo ustaw selektory jednostek zgodnie." },
          { "kind": "p", "text": "<strong>12. Zbyt wczesne zaokrąglanie.</strong> Zaokrąglenie [[\\sqrt{2}]] do 1,4 przed dodaniem kumuluje błąd. Zaokrąglij tylko odpowiedź końcową." },
          { "kind": "p", "text": "<strong>13. Użycie brakującego boku bez jego obliczenia.</strong> Dwa znane boki to nie półobwód. Najpierw odzyskaj trzeci z twierdzenia Pitagorasa, potem dodaj i podziel na pół." },
          { "kind": "p", "text": "<strong>14. Błędne stosowanie wzoru Herona.</strong> Czynniki to [[s-a]], [[s-b]] i [[s-c]]: każdy bok jest odejmowany od półobwodu, nie od innego boku. Pomylenie odejmowań psuje pole." },
          { "kind": "p", "text": "<strong>15. Mylenie promienia okręgu wpisanego z promieniem okręgu opisanego.</strong> Promień okręgu wpisanego [[r=K/s]] styka się ze wszystkimi trzema bokami od środka; promień okręgu opisanego przechodzi przez wierzchołki i dla trójkąta prostokątnego równa się [[c/2]]. Różne okręgi, różne wzory." },
          { "kind": "p", "text": "<strong>16. Założenie, że półobwód opisuje fizyczną połowę drogi wzdłuż granicy.</strong> To połowa liczbowej sumy, nie wyznaczona trasa do połowy wokół trójkąta. Traktuj go jako pochodną wartość pośrednią, którą jest." },
          { "kind": "p", "text": "<strong>Błąd kontra poprawność, obok siebie.</strong> Dla [[a=3,\\;b=4,\\;c=5]]: błędne jest [[s=3+4+5=12]], które pomija dzielenie i podaje pełny obwód. Błędne jest też [[s=(3+4)/2=3.5]], które pomija przeciwprostokątną. Poprawne jest [[s=\\frac{3+4+5}{2}]], co daje [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy wynik półobwodu jest poprawny",
        "blocks": [
          { "kind": "p", "text": "Osiem niezależnych kontroli wyłapuje niemal każdy błąd. Trójkąt 3-4-5 demonstruje każdą z nich. Niezależne kontrole mają znaczenie, ponieważ zawodzą na różne sposoby: gdy niepowiązane metody się zgadzają, odpowiedź zasłużyła na zaufanie." },
          { "kind": "p", "text": "<strong>Metoda 1: Podwój półobwód.</strong> [[[\\boxed{P=2s}]]] musi równać się pełnemu obwodowi: [[2\\times6=12=3+4+5]]. Jeśli podwojenie nie odtwarza sumy boków, dzielenie albo dodawanie poszło nie tak." },
          { "kind": "p", "text": "<strong>Metoda 2: Przelicz od nowa ze wszystkich trzech boków.</strong> Oblicz ponownie [[s=\\frac{a+b+c}{2}]] od zera: [[(3+4+5)/2=6]]. Drugie przejście wyłapuje pomyłki klawiatury i arytmetyki." },
          { "kind": "p", "text": "<strong>Metoda 3: Sprawdź związek pitagorejski.</strong> Sprawdź [[a^2+b^2=c^2]]: [[9+16=25]]. To potwierdza, że boki tworzą trójkąt prostokątny, co uprawomocnia oznaczenia boków, od których zależy półobwód." },
          { "kind": "p", "text": "<strong>Metoda 4: Sprawdź przeciwprostokątną.</strong> Potwierdź [[c>a]] i [[c>b]]: 5 jest większe od 3 i większe od 4. Jeśli rzekoma przeciwprostokątna nie jest najdłuższym bokiem, oznaczenia są błędne." },
          { "kind": "p", "text": "<strong>Metoda 5: Sprawdź nierówność trójkąta.</strong> Potwierdź [[a+b>c]]: [[3+4=7>5]]. Suma przyprostokątnych musi przewyższać przeciwprostokątną, inaczej trójkąt nie istnieje." },
          { "kind": "p", "text": "<strong>Metoda 6: Sprawdź ograniczenie półobwodu.</strong> [[[\\boxed{s>c}]]] musi zachodzić: [[6>5]]. Ta jedna nierówność wyłapuje zaskakująco wiele błędów oznaczeń." },
          { "kind": "p", "text": "<strong>Metoda 7: Sprawdź jednostki.</strong> Potwierdź, że wszystkie trzy długości boków mają zgodne jednostki i że wynik jest miarą liniową. Mieszane jednostki unieważniają sumę, nawet gdy arytmetyka jest doskonała." },
          { "kind": "p", "text": "<strong>Metoda 8: Porównaj z krokami rozwiązania kalkulatora.</strong> Wyświetlony wynik i kroki obliczeń pomagają zidentyfikować błędy: jeśli krok pokazuje błędnie wpisany bok albo pominięte dzielenie, błąd jest widoczny, zanim odpowiedź zostanie użyta." }
        ]
      },
      "sec-conclusion": {
        "h2": "Połowa obwodu, pełne zrozumienie",
        "blocks": [
          { "kind": "p", "text": "Półobwód trójkąta prostokątnego to mała idea o dalekim zasięgu. Jedno dodawanie i jedno dzielenie dają liczbę, która prowadzi do promienia okręgu wpisanego, napędza wzór Herona i wyostrza weryfikację pola. Wzór wymaga trzech boków, ponieważ granica ma trzy krawędzie, a przeciwprostokątna zasługuje na swoje miejsce w sumie jako krawędź zamykająca kształt. Wszystko inne w tym przewodniku: rozwiązane przykłady, dwanaście zastosowań, własności, przeliczenia jednostek, szesnaście błędów, osiem kontroli weryfikacyjnych, istnieje po to, by chronić tę jedną podzieloną na pół sumę przed drobnymi błędami oznaczeń i jednostek, które tworzą wiarygodnie wyglądające błędne odpowiedzi." },
          { "kind": "p", "text": "Używaj kalkulatora z tej strony, gdy wszystkie trzy boki są zmierzone, odzyskaj brakujący bok przez twierdzenie Pitagorasa, gdy nie są, i sprawdź wynik względem ograniczeń c &lt; s &lt; a + b, zanim liczba trafi do rysunku czy modelu. Gdy pytanie skręca ku powierzchni wewnątrz granicy, czekają wzór Herona i kalkulator pola; gdy skręca ku okręgowi wewnątrz trójkąta, promień okręgu wpisanego jest o jedno dzielenie." }
        ]
      }
    },
    "relatedHeading": "Zobacz powiązane kalkulatory trójkąta prostokątnego",
    "relatedIntro": "Każde z tych narzędzi rozszerza obliczanie półobwodu w jednym kierunku: pełna granica, powierzchnia, droga od półobwodu do pola, okrąg wpisany albo brakujące boki, które stoją za tym wszystkim.",
    "relatedItems": [
      "Kalkulator obwodu trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator pola trójkąta prostokątnego z półobwodu",
      "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
      "Kalkulator boków trójkąta prostokątnego"
    ],
    "faqHeading": "Często zadawane pytania",
    "faqs": [
      {
        "question": "Jaki jest wzór na półobwód trójkąta prostokątnego?",
        "answer": "Wzór to s = (a + b + c) / 2, gdzie a i b to dwie przyprostokątne tworzące kąt 90 stopni, a c to przeciwprostokątna, najdłuższy bok. Dodaj długości wszystkich trzech boków, a następnie podziel sumę przez dwa. Równoważnie: s = P / 2, gdzie P to pełny obwód."
      },
      {
        "question": "Co oznacza półobwód?",
        "answer": "Półobwód oznacza połowę obwodu. Pół to połowa, a obwód to pełna długość granicy, więc półobwód to dokładnie połowa całkowitej odległości wokół trójkąta. Jest to pochodna miara geometryczna, używana jako wartość pośrednia w wielu wzorach na trójkąty."
      },
      {
        "question": "Dlaczego półobwód jest połową obwodu?",
        "answer": "Taka jest jego definicja: półobwód powstaje przez wzięcie pełnego obwodu i podzielenie go przez dwa. Połowa obwodu okazuje się wielkością, dla której zapisane są wzory takie jak wzór Herona i związek promienia okręgu wpisanego K = rs, dlatego zyskał własną nazwę i symbol s."
      },
      {
        "question": "Czy do obliczenia półobwodu potrzebuję wszystkich trzech boków?",
        "answer": "Tak. Półobwód to połowa sumy długości wszystkich trzech boków, więc każdy bok musi być znany, w tym przeciwprostokątna. Jeśli brakuje jednego boku, najpierw wyznacz go z twierdzenia Pitagorasa: c = √(a² + b²) dla brakującej przeciwprostokątnej lub a = √(c² − b²) dla brakującej przyprostokątnej."
      },
      {
        "question": "Jaka jest różnica między obwodem a półobwodem?",
        "answer": "Obwód P = a + b + c to pełna długość granicy, a półobwód s = (a + b + c) / 2 to jej połowa. Obwodu używaj przy fizycznej pracy z granicą, jak ogrodzenie czy ramy, a półobwodu przy obliczeniach wzorowych, jak wzór Herona, obliczenia promienia okręgu wpisanego i dowody geometryczne. Dla trójkąta 3-4-5: P = 12 i s = 6."
      },
      {
        "question": "Czy półobwód mierzy się w jednostkach kwadratowych?",
        "answer": "Nie. Półobwód to jednowymiarowa miara długości, więc wyraża się go w jednostkach liniowych: metrach, centymetrach, stopach lub calach, zgodnie z długościami boków. Jednostki kwadratowe należą do pola powierzchni. Podanie półobwodu jako 6 cm² to błąd kategorii; poprawna jednostka to 6 cm."
      },
      {
        "question": "Ile wynosi półobwód trójkąta prostokątnego 3-4-5?",
        "answer": "Dodaj boki: 3 + 4 + 5 = 12, a następnie podziel przez dwa: s = 6 jednostek. Pełny obwód wynosi 12 jednostek. Boki spełniają 3² + 4² = 5², co potwierdza kąt prosty, a półobwód 6 przewyższa przeciwprostokątną 5, jak to musi być w każdym poprawnym trójkącie."
      },
      {
        "question": "Dlaczego półobwód jest używany we wzorze Herona?",
        "answer": "Wzór Herona, K = √(s(s − a)(s − b)(s − c)), oblicza pole wyłącznie z długości boków i jest zapisany przez półobwód s oraz różnice s − a, s − b, s − c. Najpierw obliczone s centruje wyrażenie i zachowuje je zwartym. Dla 3-4-5: s = 6 daje K = √(6 × 3 × 2 × 1) = 6 jednostek kwadratowych."
      },
      {
        "question": "Jak półobwód wiąże się z promieniem okręgu wpisanego?",
        "answer": "Pole, promień okręgu wpisanego i półobwód spełniają K = rs, więc r = K / s. Dla trójkąta prostokątnego upraszcza się to do r = (a + b − c) / 2. Dla 3-4-5: s = 6, K = 6, więc r = 1. Półobwód to pomost, który zamienia trzy długości boków na promień okręgu wpisanego."
      },
      {
        "question": "Czy mogę obliczyć półobwód, jeśli brakuje jednego boku?",
        "answer": "Tak, ale najpierw znajdź brakujący bok. Przy przyprostokątnych 6 i 8 przeciwprostokątna wynosi √(36 + 64) = 10, więc s = (6 + 8 + 10) / 2 = 12. Przy przeciwprostokątnej 13 i przyprostokątnej 12 brakująca przyprostokątna wynosi √(169 − 144) = 5, więc s = (5 + 12 + 13) / 2 = 15. Kalkulator na tej stronie wymaga wpisania wszystkich trzech boków."
      },
      {
        "question": "Jak mogę sprawdzić swój wynik półobwodu?",
        "answer": "Podwój go: 2s musi równać się pełnemu obwodowi a + b + c. Sprawdź, czy s przewyższa przeciwprostokątną (s > c) i jest mniejsze od sumy przyprostokątnych (s < a + b). Potwierdź związek pitagorejski a² + b² = c², upewnij się, że wszystkie trzy boki mają tę samą jednostkę, i porównaj z krokami rozwiązania w kalkulatorze."
      },
      {
        "question": "Czy półobwód można wykorzystać do obliczenia pola trójkąta?",
        "answer": "Tak, przez wzór Herona: K = √(s(s − a)(s − b)(s − c)). To niezależne sprawdzenie bezpośredniego wzoru na pole trójkąta prostokątnego K = ab / 2. Dla 3-4-5 oba dają 6 jednostek kwadratowych. Wzór Herona jest najcenniejszy, gdy wysokość nie jest znana albo gdy chcesz drugiego, niezależnego obliczenia potwierdzającego pole."
      }
    ]
  }
};
