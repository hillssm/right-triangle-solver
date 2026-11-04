export const B4_PL = {
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "sec-intro": "Jak obliczyć obwód i połowę obwodu trójkąta prostokątnego",
      "sec-right-triangle": "Czym jest trójkąt prostokątny?",
      "sec-perimeter": "Czym jest obwód trójkąta prostokątnego?",
      "sec-semiperimeter": "Czym jest połowa obwodu trójkąta prostokątnego?",
      "sec-difference": "Obwód a połowa obwodu: jaka jest różnica?",
      "sec-modes": "Zrozumienie dwóch trybów kalkulatora",
      "sec-howto": "Jak korzystać z kalkulatora obwodu i połowy obwodu trójkąta prostokątnego",
      "sec-examples": "Przykłady krok po kroku: obwód i połowa obwodu trójkąta prostokątnego",
      "sec-practical": "Zastosowania obwodu i połowy obwodu trójkąta prostokątnego w życiu",
      "sec-missing-side": "Jak obliczyć obwód, gdy brakuje jednego boku",
      "sec-pythagoras": "Jak twierdzenie Pitagorasa wiąże się z obwodem trójkąta prostokątnego?",
      "sec-advanced": "Jak połowa obwodu jest używana w innych wzorach na trójkąty?",
      "sec-perimeter-area": "Jaka jest różnica między obwodem a polem?",
      "sec-units": "Jednostki miary w obliczeniach obwodu i połowy obwodu",
      "sec-scaling": "Jak zmiany długości boków wpływają na obwód i połowę obwodu?",
      "sec-applications": "Praktyczne zastosowania obwodu trójkąta prostokątnego",
      "sec-mistakes": "Typowe błędy przy obliczaniu obwodu i połowy obwodu trójkąta prostokątnego",
      "sec-verify": "Jak sprawdzić, czy obwód trójkąta prostokątnego jest poprawny",
      "sec-related": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
      "sec-faq": "Często zadawane pytania",
      "sec-conclusion": "Jeden kontur, dwie przydatne miary"
    },
    "sections": {
      "sec-intro": {
        "h2": "Jak obliczyć obwód i połowę obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Weź [[a=3]], [[b=4]], [[c=5]]. Obwód wynosi [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Połowa obwodu to [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Dokładnie takie wyniki zwraca kalkulator obwodu i połowy obwodu trójkąta prostokątnego dla tych trzech danych wejściowych." },
          { "kind": "p", "text": "Obwód opisuje cały kontur trójkąta: całkowitą długość, jaką pokonasz, obchodząc wszystkie trzy boki i wracając do punktu startu. Połowa obwodu to połowa tej sumy liczbowej. Obie wielkości są długościami, mierzonymi w jednostkach takich jak metry, centymetry, stopy czy cale. Żadna z nich nie jest polem i żadna nie jest podawana w jednostkach kwadratowych." },
          { "kind": "p", "text": "Potrzebne są trzy długości boków, ponieważ kontur ma trzy krawędzie, a przeciwprostokątna musi być uwzględniona: jest jedną z trzech krawędzi, mimo że nigdy nie styka się z kątem prostym. Połowa obwodu to połowa obwodu, ponieważ kilka zaawansowanych wzorów, w tym wzór Herona i zależność z promieniem okręgu wpisanego, opiera się na połowie konturu, a nie na całości. Te dwa obliczenia przydają się wszędzie tam, gdzie trzeba zmierzyć trójkątny obrys: obramowanie rabaty, przycinanie ramy czy podstawianie długości do kolejnego wzoru w dłuższym zadaniu." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Czym jest trójkąt prostokątny?",
        "blocks": [
          { "kind": "p", "text": "Zanim zacznie się jakiekolwiek dodawanie, trzy boki muszą być oznaczone bezbłędnie. Symbole poniżej są stałe w całym przewodniku i kalkulator używa tych samych nazw." },
          { "kind": "h3", "text": "Definicja trójkąta prostokątnego" },
          { "kind": "p", "text": "Trójkąt prostokątny to wielokąt o trzech bokach zawierający dokładnie jeden kąt wewnętrzny równy 90 stopni. Ma trzy wierzchołki, trzy boki, dwa kąty ostre i jeden kąt prosty, zazwyczaj oznaczony małym kwadratem. Dwa boki tworzące kąt prosty to przyprostokątne; bok leżący naprzeciw to przeciwprostokątna. Ponieważ kąty każdego trójkąta sumują się do 180 stopni, [[A+B+C=180^\\circ]], a przy [[C=90^\\circ]] wynika, że [[[\\boxed{A+B=90^\\circ}]]]: dwa kąty ostre są dopełniające się, więc znajomość jednego wyznacza drugi." },
          { "kind": "h3", "text": "Czym są dwie przyprostokątne?" },
          { "kind": "p", "text": "Przyprostokątna [[a]] leży naprzeciw kąta [[A]]; przyprostokątna [[b]] leży naprzeciw kąta [[B]]. Dwie przyprostokątne spotykają się w wierzchołku kąta prostego i są do siebie prostopadłe: każda tworzy z drugą kąt 90 stopni. Tworzą one kwadratowy narożnik trójkąta, rodzaj krawędzi, którą mierzy się wzdłuż narożnika ściany czy krawędzi stołu. W obliczeniach obwodu ich rola jest prosta: obie są krawędziami konturu, więc obie wchodzą do sumy." },
          { "kind": "h3", "text": "Czym jest przeciwprostokątna?" },
          { "kind": "p", "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego, zawsze najdłuższy bok trójkąta. Nigdy nie tworzy kąta prostego; rozciąga się przez niego, łącząc odległe końce dwóch przyprostokątnych. Różni się od przyprostokątnych położeniem i długością: przyprostokątne spotykają się pod kątem 90 stopni, natomiast przeciwprostokątna spotyka każdą przyprostokątną pod kątem ostrym. Trzeba ją uwzględnić przy obliczaniu pełnego obwodu, ponieważ kontur nie jest kompletny, dopóki nie policzy się wszystkich trzech krawędzi. Jeśli znane są obie przyprostokątne, twierdzenie Pitagorasa odtwarza ją wzorem [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Dlaczego kąt prosty jest ważny?" },
          { "kind": "p", "text": "Kąt prosty to to, co czyni trójkąt trójkątem prostokątnym, i wszystko inne wynika z niego. Pozwala rozpoznać kształt na rysunku czy na budowie: znajdź kwadratowy narożnik, a oznaczenia boków same się ułożą. Jest warunkiem, którego twierdzenie Pitagorasa potrzebuje, zanim będzie można je zastosować. W pomiarach budowlanych i rysunkach technicznych kąt prosty jest wzorcem, względem którego wszystko się prostuje: ściany, ramy i wsporniki sprawdza się właśnie nim. Przy weryfikacji kąt prosty jest obietnicą, którą trzy długości boków muszą spełnić poprzez [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Jak rozpoznać poprawne oznaczenia boków?" },
          { "kind": "p", "text": "[[a]] i [[b]] to przyprostokątne, [[c]] to przeciwprostokątna, a w niezdegenerowanym trójkącie prostokątnym [[c]] jest najdłuższym bokiem. Kąt prosty leży naprzeciw [[c]], więc wierzchołek z kwadratowym znacznikiem mówi, który bok to [[c]]: ten, który nie styka się z tym wierzchołkiem. Pomaga szybka kontrola uporządkowania: posortuj trzy liczby, a największa musi pełnić rolę [[c]]. Jeśli największy bok nie leży naprzeciw kwadratowego narożnika, oznaczenia są błędne i błędne będzie też każde obliczenie na nich oparte." }
        ],
        "imgAlt": "Trójkąt prostokątny ABC o przyprostokątnych a i b, przeciwprostokątnej c, znaczniku kąta prostego oraz wzorach P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Trójkąt ABC o przyprostokątnych a i b, przeciwprostokątnej c oraz dwóch wzorach na kontur."
      },
      "sec-perimeter": {
        "h2": "Czym jest obwód trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Obwód to całkowita odległość wokół zewnętrznego konturu figury płaskiej. Dla trójkąta jest to suma długości jego trzech boków, [[[\\boxed{P=a+b+c}]]], i każdy bok musi być uwzględniony, ponieważ każdy bok jest częścią konturu. Pomiń jeden, a wynik nie będzie obwodem; będzie częściowym spacerem." },
          { "kind": "h3", "text": "Dlaczego przeciwprostokątna wlicza się do obwodu?" },
          { "kind": "p", "text": "Obwód mierzy cały zewnętrzny kontur, a nie tylko dwa prostopadłe boki. Choć przeciwprostokątna leży naprzeciw kąta prostego, pozostaje jedną z trzech krawędzi konturu: obchodząc trójkąt, przejdziesz także przeciwprostokątną. Jej pominięcie mierzy dwa boki przerwanej ścieżki, a nie obrys zamkniętego trójkąta. Wzór ma trzy składniki, ponieważ kształt ma trzy krawędzie; żadna krawędź nie jest opcjonalna, niezależnie od tego, jak trójkąt jest obrócony na stronie czy w terenie." },
          { "kind": "h3", "text": "Jak obliczyć obwód krok po kroku" },
          { "kind": "p", "text": "Weź [[a=3]], [[b=4]], [[c=5]]. Podstaw do wzoru: [[P=3+4+5]]. Dodaj dwie pierwsze długości: [[P=7+5]]. Wynik końcowy: [[[\\boxed{P=12\\text{ units}}]]] Fizycznie 12 jednostek to długość taśmy ułożonej wzdłuż wszystkich trzech krawędzi, koniec do końca: pełny obrys trójkąta wyrażony jako jedna ciągła długość." },
          { "kind": "h3", "text": "Co obwód mówi w pracy praktycznej?" },
          { "kind": "p", "text": "Odpowiada na jedno pytanie w wielu zawodach: ile materiału pochłania kontur? Obejmuje to materiały na obrzeża, obramowania okien, krawędzie ogrodzeń, listwy ochronne, ramy ozdobne, trasy kabli, obramowania tkanin i metalowe profile krawędziowe. W każdym przypadku obwód to liczba, z którą idzie się do dostawcy. Opisuje on długość pełnego obrysu trójkąta, a nie ilość powierzchni w jego wnętrzu: 12 metrów listwy nic nie mówi o polu, które pokrywa okno, i nigdy nie miało tego mówić." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Czym jest połowa obwodu trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Połowa obwodu to dokładnie połowa pełnego obwodu trójkąta: [[[\\boxed{s=\\frac{P}{2}}]]] Ponieważ [[P=a+b+c]], wynika z tego, że [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Dodawanie poprzedza dzielenie, ponieważ połowa obwodu dzieli na pół cały kontur, a nie każdy bok z osobna. Dzielenie każdego boku najpierw, a potem dodawanie, dałoby tu tę samą liczbę, ale wzór wyraża właściwą kolejność idei: zsumuj kontur, a potem podziel go na pół." },
          { "kind": "h3", "text": "Jak obliczyć połowę obwodu krok po kroku" },
          { "kind": "p", "text": "Weź [[a=3]], [[b=4]], [[c=5]]. Dodaj trzy boki: [[s=\\frac{3+4+5}{2}]]. Uprość sumę: [[s=\\frac{12}{2}]]. Wynik końcowy: [[[\\boxed{s=6\\text{ units}}]]] Połowa obwodu to pochodna miara geometryczna używana w kilku ważnych wzorach na trójkąty; rzadko opisuje coś, co mierzyłbyś bezpośrednio taśmą, dlatego kalkulator liczy ją za Ciebie." },
          { "kind": "h3", "text": "Dlaczego połowa obwodu jest używana w geometrii?" },
          { "kind": "p", "text": "Jest naturalną zmienną wzoru Herona, zależności z promieniem okręgu wpisanego [[K=rs]] oraz geometrii okręgu wpisanego w ogóle. Wzory na pole trójkąta wciąż wytwarzają połówki, a połowa obwodu pochłania je wszystkie naraz, dlatego dowody i zaawansowane wzory wolą ją od pełnego obwodu. Gdy wzór prosi o [[s]], wpisanie zamiast tego [[P]] podwaja wynik lub zniekształca go w inny sposób, więc warto od początku trzymać to rozróżnienie ostro." },
          { "kind": "h3", "text": "Czy połowa obwodu jest fizycznie połową konturu?" },
          { "kind": "p", "text": "Niekoniecznie. Połowa obwodu to połowa liczbowego obwodu: 6 jednostek, gdy obwód wynosi 12. Nie musi opisywać ciągłej fizycznej ścieżki pokrywającej połowę konturu trójkąta. Nie istnieje jeden spacer wzdłuż krawędzi, który byłby połową obwodu tak, jak obwód jest pełnym spacerem: połowa to liczba, a nie trasa. Traktowanie [[s]] jak fizycznej półpętli prowadzi do zamieszania; traktuj to jako połowę sumy, wartość, której potrzebują wzory." },
          { "kind": "h3", "text": "Czy połowa obwodu może być mniejsza od najdłuższego boku?" },
          { "kind": "p", "text": "Nie. Nierówność trójkąta wymaga [[a+b>c]]: dwa krótsze boki razem muszą przewyższać najdłuższy bok, inaczej trójkąt się nie zamknie. Dodanie [[c]] do obu stron daje [[a+b+c>2c]], a podzielenie na pół daje [[[\\boxed{s>c}]]] Dla prawidłowego, niezdegenerowanego trójkąta połowa obwodu jest większa od najdłuższego boku. To przydatna kontrola matematyczna: jeśli podana połowa obwodu jest mniejsza od przeciwprostokątnej, pomiary nie mogą tworzyć prawdziwego trójkąta." }
        ]
      },
      "sec-difference": {
        "h2": "Obwód a połowa obwodu: jaka jest różnica?",
        "blocks": [
          { "kind": "p", "text": "Obwód: całkowita długość wokół trójkąta, [[P=a+b+c]]. Połowa obwodu: połowa całkowitego obwodu, [[s=\\frac{a+b+c}{2}]]. Te same trzy boki, różne wielkości geometryczne: jedno to całość, drugie to połowa. Wiążą je relacje [[s=\\frac{P}{2}]] i [[P=2s]], a kalkulator nigdy nie używa tych dwóch symboli zamiennie." },
          { "kind": "h3", "text": "Porównanie liczbowe" },
          { "kind": "p", "text": "Weź trójkąt prostokątny 6-8-10. Obwód: [[P=6+8+10]], [[[\\boxed{P=24}]]] Połowa obwodu: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]] Dwie liczby różnią się dwukrotnie, zawsze: [[s=\\frac{P}{2}]] i [[P=2s]]. Różnica to nie inny kształt ani inny trójkąt; to ten sam kontur policzony raz albo policzony jako połowa." },
          { "kind": "h3", "text": "Którą miarę wybrać?" },
          { "kind": "p", "text": "Obwód stosuj do obramowań, ram, obrzeży, ogrodzeń i szacunków materiałowych wokół obiektu: wszędzie tam, gdzie pytanie brzmi, ile materiału pochłania kontur. Połowę obwodu stosuj do wzoru Herona, zależności z promieniem okręgu wpisanego, obliczeń okręgu wpisanego i zadań geometrycznych z długościami boków trójkąta: wszędzie tam, gdzie wzór prosi o połowę konturu jako dane wejściowe. Wybór zależy od zadania, nie od upodobania: kosztorys listwy chce [[P]], dowód na pole chce [[s]]." },
          { "kind": "h3", "text": "Czy połowa obwodu mierzy połowę pola trójkąta?" },
          { "kind": "p", "text": "Nie. Zarówno obwód, jak i połowa obwodu są miarami liniowymi: długościami podawanymi w metrach czy stopach, nigdy w metrach kwadratowych. Pole mierzy dwuwymiarową powierzchnię zamkniętą przez trójkąt i używa jednostek kwadratowych. Podzielenie długości na pół nadal daje długość. Ostrzeżenie warto powtórzyć, bo nazwy brzmią podobnie: połowa obwodu to połowa obwodu, a nie połowa pola, i żaden podział konturu nie da powierzchni." }
        ],
        "imgAlt": "Trójkąt 6-8-10: pasek obwodu o długości 24 jednostek podzielony na pół na pasek połowy obwodu o długości 12 jednostek",
        "figcaption": "P = 24 podzielone na pół na s = 12: pełny kontur, a potem jego połowa."
      },
      "sec-modes": {
        "h2": "Zrozumienie dwóch trybów kalkulatora",
        "blocks": [
          { "kind": "p", "text": "Kalkulator trzyma oba obliczenia w dwóch osobnych trybach, ponieważ odpowiadają one na różne pytania przy tych samych trzech danych wejściowych. Wybór trybu to wybór pytania, które jest zadawane." },
          { "kind": "h3", "text": "Tryb kalkulatora obwodu" },
          { "kind": "p", "text": "Ten tryb oblicza całkowitą długość konturu. Dane wejściowe: przyprostokątna [[a]], przyprostokątna [[b]], przeciwprostokątna [[c]]. Wzór: [[P=a+b+c]]. Wynik: obwód [[P]]. Wynik przydaje się do szacowania całkowitej długości materiału potrzebnego wokół trójkątnego obrysu: liczby, z którą idziesz do dostawcy, gdy praca to obrzeże, listwa czy rama." },
          { "kind": "h3", "text": "Tryb kalkulatora połowy obwodu" },
          { "kind": "p", "text": "Ten tryb oblicza połowę całkowitego obwodu. Dane wejściowe: przyprostokątna [[a]], przyprostokątna [[b]], przeciwprostokątna [[c]]. Wzór: [[s=\\frac{a+b+c}{2}]]. Wynik: połowa obwodu [[s]]. Wynik przydaje się jako wartość pośrednia w zaawansowanych obliczeniach na trójkątach: liczba, którą podstawiasz do wzoru Herona czy zależności z promieniem okręgu wpisanego, gdy zadanie wykracza poza kontur." },
          { "kind": "h3", "text": "Dlaczego istnieją dwa osobne tryby?" },
          { "kind": "p", "text": "Oba obliczenia korzystają z tych samych trzech długości boków, ale zwracają różne wielkości geometryczne, a ich mylenie to jeden z najczęstszych błędów w tym temacie. Dwa oznaczone tryby trzymają intencję jasno: przycisk mówi Calculate Perimeter albo Calculate Semiperimeter, a wynik jest oznaczony [[P]] lub [[s]]. Oba tryby oszczędzają użytkownikom ręcznych obliczeń, sprawiając, że dwóch odpowiedzi nie da się pomylić. Nie opisuj trybu połowy obwodu jako kalkulatora pola: jego wynik to długość i długością pozostaje." }
        ]
      },
      "sec-howto": {
        "h2": "Jak korzystać z kalkulatora obwodu i połowy obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Poniższe kroki podążają za układem ekranu dla każdego trybu, od rozpoznania pomiarów po sprawdzony wynik. Oba tryby mają te same trzy dane wejściowe i różnią się tylko końcowym obliczeniem." },
          { "kind": "h3", "text": "Tryb obwodu" },
          { "kind": "steps", "steps": [
            "<strong>Wybierz tryb Perimeter.</strong> To mówi kalkulatorowi, że celem jest całkowita długość konturu.",
            "<strong>Rozpoznaj przyprostokątną a.</strong> To jeden z dwóch boków tworzących kąt prosty.",
            "<strong>Rozpoznaj przyprostokątną b.</strong> To drugi bok tworzący kąt prosty.",
            "<strong>Rozpoznaj przeciwprostokątną c.</strong> To najdłuższy bok, leżący naprzeciw kąta prostego.",
            "<strong>Wpisz przyprostokątną a.</strong> Wpisz zmierzoną długość w pierwsze pole.",
            "<strong>Wpisz przyprostokątną b.</strong> Wpisz zmierzoną długość w drugie pole.",
            "<strong>Wpisz przeciwprostokątną c.</strong> Wpisz zmierzoną długość w trzecie pole.",
            "<strong>Wybierz odpowiednie jednostki.</strong> Wszystkie trzy boki muszą mieć jedną jednostkę, zanim dodawanie nabierze sensu.",
            "<strong>Kliknij Calculate Perimeter.</strong> Kalkulator doda trzy boki.",
            "<strong>Sprawdź wynik.</strong> Potwierdź, że obwód przewyższa najdłuższy bok.",
            "<strong>Sprawdź wyświetlone kroki rozwiązania.</strong> Pokazują [[P=a+b+c]] z podstawionymi wpisanymi wartościami.",
            "<strong>Sprawdź, czy wynik używa liniowej jednostki miary.</strong> Metry, centymetry, stopy albo cale: nigdy jednostka kwadratowa."
          ] },
          { "kind": "h3", "text": "Tryb połowy obwodu" },
          { "kind": "steps", "steps": [
            "<strong>Wybierz tryb Semiperimeter.</strong> To mówi kalkulatorowi, że celem jest połowa konturu.",
            "<strong>Wpisz przyprostokątną a.</strong> To samo rozpoznanie co w trybie obwodu.",
            "<strong>Wpisz przyprostokątną b.</strong> Drugi bok tworzący kąt prosty.",
            "<strong>Wpisz przeciwprostokątną c.</strong> Najdłuższy bok, leżący naprzeciw kąta prostego.",
            "<strong>Wybierz zgodne jednostki miary.</strong> Jedna jednostka dla wszystkich trzech boków.",
            "<strong>Kliknij Calculate Semiperimeter.</strong> Kalkulator doda trzy boki i podzieli sumę na pół.",
            "<strong>Sprawdź wynik.</strong> Powinien być wyraźnie mniejszy od obwodu.",
            "<strong>Sprawdź, czy wynik jest dokładnie połową obwodu.</strong> Porównaj [[s=\\frac{P}{2}]] z wynikiem trybu obwodu.",
            "<strong>Sprawdź kroki rozwiązania i wizualizację na żywo.</strong> Kroki pokazują dodawanie i dzielenie na pół; rysunek pokazuje trójkąt, z którego pochodzą te liczby.",
            "<strong>Użyj Reset, zaczynając nowe obliczenie.</strong> Czyści wszystkie trzy pola, dając czysty start."
          ] },
          { "kind": "p", "text": "Wizualizacja na żywo rysuje trójkąt z wpisanych boków, co pomaga wyłapać błędnie oznaczoną przeciwprostokątną, zanim liczbom się zaufa. Schemat wzoru pokazuje, gdzie każdy bok siedzi we wzorze [[P=a+b+c]] albo [[s=\\frac{a+b+c}{2}]]. Żaden z trybów nie przyjmuje dwóch boków: kalkulator potrzebuje wszystkich trzech długości konturu, więc brakujący bok trzeba najpierw znaleźć, jak wyjaśnia sekcja o brakującym boku." }
        ]
      },
      "sec-examples": {
        "h2": "Przykłady krok po kroku: obwód i połowa obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Cztery znane trójki pitagorejskie pokazują pełne obliczenie obu miar. Każda dodaje trzy boki dla obwodu, a potem dzieli sumę na pół dla połowy obwodu. Arytmetyka jest celowo pokazana w całości, żeby wzorzec był nie do pomylenia." },
          { "kind": "h3", "text": "Przykład 1: trójkąt prostokątny 3-4-5" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]]. Oblicz obwód: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Oblicz połowę obwodu: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Oba wyniki są poprawne, ponieważ obwód liczy każdą krawędź konturu raz, a połowa obwodu to dokładnie połowa tej liczby." },
          { "kind": "h3", "text": "Przykład 2: trójkąt prostokątny 6-8-10" },
          { "kind": "p", "text": "Dane [[a=6]], [[b=8]], [[c=10]]. Obwód: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]] Połowa obwodu: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]] Podwojenie wszystkich trzech boków podwaja obie miary: 24 to dwa razy 12, a 12 to dwa razy 6. Skalowanie trójkąta skaluje jego miary konturu tym samym współczynnikiem." },
          { "kind": "h3", "text": "Przykład 3: trójkąt prostokątny 5-12-13" },
          { "kind": "p", "text": "Dane [[a=5]], [[b=12]], [[c=13]]. Obwód: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]] Połowa obwodu: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]] Zwróć uwagę, że 15 przewyższa przeciwprostokątną 13, jak wymaga kontrola nierówności trójkąta." },
          { "kind": "h3", "text": "Przykład 4: trójkąt prostokątny 8-15-17" },
          { "kind": "p", "text": "Dane [[a=8]], [[b=15]], [[c=17]]. Obwód: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]] Połowa obwodu: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]] Znowu połowa obwodu przewyższa najdłuższy bok: 20 wobec 17." },
          { "kind": "h3", "text": "Porównanie przykładów podstawowych" },
          { "kind": "p", "text": "Wraz ze wzrostem wymiarów trójkąta zarówno [[P]], jak i [[s]] rosną w krok z bokami. Tabela pokazuje dwa wzorce naraz: obwód każdego wiersza to zwykła suma jego trzech boków, a obwód każdego wiersza jest dokładnie dwa razy większy od jego połowy obwodu. Wiersze 3-4-5 i 6-8-10 pokazują też skalowanie wprost: każdy bok podwojony, obie miary konturu podwojone." }
        ],
        "table": {
          "headers": ["Trójkąt", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Obwód P", "Połowa obwodu s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Zastosowania obwodu i połowy obwodu trójkąta prostokątnego w życiu",
        "blocks": [
          { "kind": "p", "text": "Dwanaście opracowanych sytuacji przenosi oba wzory ze strony do warsztatu i na budowę. Każda nazywa uproszczony trójkątny prostokątny obiekt lub model, przeprowadza obwód i połowę obwodu przez wzory oraz podaje praktyczną interpretację wyniku. To uproszczone modele: nie każde prawdziwe okno, dach, ogród, markiza, panel czy konstrukcja nośna tworzy dokładny trójkąt prostokątny, a nieregularny obiekt trzeba podzielić na prostsze kształty, zanim wzory zadziałają. Mogą być potrzebne naddatki materiałowe, odpady cięcia nie są uwzględnione, zakrzywione kontury wymagają innych obliczeń, wytrzymałości konstrukcji nie da się wyznaczyć z samego obwodu, a rzeczywiste pomiary budowlane należy zweryfikować przed zakupem materiałów." },
          { "kind": "h3", "text": "Przykład 1: rama trójkątnego szklanego okna" },
          { "kind": "p", "text": "Trójkątne prostokątne okno ma [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Obwód: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]] Połowa obwodu: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]] Dwanaście metrów to całkowita długość wokół trójkątnego obrysu okna: zapas materiału na ramę do zamówienia przed naddatkami na cięcia ukośne i odpady." },
          { "kind": "h3", "text": "Przykład 2: obramowanie krawędzi dachu" },
          { "kind": "p", "text": "Trójkątna sekcja szczytu dachu ma [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Obwód: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]] Połowa obwodu: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]] Obwód szacuje długość obramowania wokół trójkątnego obrysu szczytu dachu." },
          { "kind": "h3", "text": "Przykład 3: obrzeże rabaty" },
          { "kind": "p", "text": "Trójkątna prostokątna rabata ma [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Obwód: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]] Połowa obwodu: [[s=15\\text{ m}]]. Obwód szacuje pełną długość obrzeża ogrodu wokół rabaty." },
          { "kind": "h3", "text": "Przykład 4: stalowy wspornik" },
          { "kind": "p", "text": "Trójkątny metalowy wspornik ma [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Obwód: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]] Połowa obwodu: [[[\\boxed{s=20\\text{ cm}}]]] Obwód opisuje zewnętrzną krawędź wspornika, przydatne przy określaniu wykończenia krawędzi." },
          { "kind": "h3", "text": "Przykład 5: trójkątny panel z tkaniny" },
          { "kind": "p", "text": "Trójkątny prostokątny panel z tkaniny ma [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Obwód: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]] Połowa obwodu: [[[\\boxed{s=18\\text{ ft}}]]] Obwód szacuje długość krawędzi, zanim doda się naddatki na szwy." },
          { "kind": "h3", "text": "Przykład 6: rama trójkątnego szyldu" },
          { "kind": "p", "text": "Szyld ma kształt trójkąta prostokątnego o [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Obwód: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]] Połowa obwodu: [[[\\boxed{s=24\\text{ cm}}]]] Całkowity obwód szacuje materiał na ramę szyldu." },
          { "kind": "h3", "text": "Przykład 7: granica terenu zielonego" },
          { "kind": "p", "text": "Trójkątna prostokątna rabata ma [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Obwód: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]] Połowa obwodu: [[[\\boxed{s=28\\text{ m}}]]] Obwód szacuje materiał na obrzeże wokół rabaty." },
          { "kind": "h3", "text": "Przykład 8: trójkątna podpora panelu słonecznego" },
          { "kind": "p", "text": "Uproszczona trójkątna rama nośna ma [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Obwód: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]] Połowa obwodu: [[[\\boxed{s=45\\text{ m}}]]] To długości trzech boków modelowanej trójkątnej ramy, punkt wyjścia do doboru wymiarów elementów." },
          { "kind": "h3", "text": "Przykład 9: obrzeże trójkątnej markizy" },
          { "kind": "p", "text": "Trójkątna prostokątna sekcja markizy ma [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Obwód: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]] Połowa obwodu: [[[\\boxed{s=30\\text{ ft}}]]] Obwód szacuje materiał na obrzeże krawędzi markizy." },
          { "kind": "h3", "text": "Przykład 10: rama szczytu dachu magazynu" },
          { "kind": "p", "text": "Uproszczona trójkątna prostokątna rama szczytu dachu ma [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Obwód: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]] Połowa obwodu: [[[\\boxed{s=66\\text{ m}}]]] Wynik przedstawia pełny obrys trójkątnej sekcji." },
          { "kind": "h3", "text": "Przykład 11: trójkątny panel produkcyjny" },
          { "kind": "p", "text": "Trójkątny prostokątny panel przemysłowy ma [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Obwód: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]] Połowa obwodu: [[[\\boxed{s=91\\text{ cm}}]]] Obwód szacuje ochronne profile krawędziowe panelu." },
          { "kind": "h3", "text": "Przykład 12: duża trójkątna konstrukcja nośna" },
          { "kind": "p", "text": "Trójkątna prostokątna konstrukcja nośna ma [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Obwód: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]] Połowa obwodu: [[[\\boxed{s=63\\text{ m}}]]] Pomiary te służą jako dane geometryczne do dalszych obliczeń inżynierskich." },
          { "kind": "h3", "text": "Porównanie przykładów praktycznych" }
        ],
        "table": {
          "headers": ["Zastosowanie praktyczne", "Przyprostokątna a", "Przyprostokątna b", "Przeciwprostokątna c", "Obwód P", "Połowa obwodu s", "Jednostka miary"],
          "rows": [
            ["Rama szklanego okna", "3", "4", "5", "12", "6", "m"],
            ["Obramowanie krawędzi dachu", "6", "8", "10", "24", "12", "ft"],
            ["Obrzeże rabaty", "5", "12", "13", "30", "15", "m"],
            ["Stalowy wspornik", "8", "15", "17", "40", "20", "cm"],
            ["Panel z tkaniny", "9", "12", "15", "36", "18", "ft"],
            ["Rama szyldu", "12", "16", "20", "48", "24", "cm"],
            ["Granica terenu zielonego", "7", "24", "25", "56", "28", "m"],
            ["Podpora panelu słonecznego", "9", "40", "41", "90", "45", "m"],
            ["Obrzeże markizy", "15", "20", "25", "60", "30", "ft"],
            ["Szczyt dachu magazynu", "11", "60", "61", "132", "66", "m"],
            ["Panel produkcyjny", "13", "84", "85", "182", "91", "cm"],
            ["Konstrukcja nośna", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Jak obliczyć obwód, gdy brakuje jednego boku",
        "blocks": [
          { "kind": "p", "text": "Kalkulator na tej stronie wymaga wszystkich trzech długości boków. Jeśli jeden bok jest nieznany, oblicz go najpierw twierdzeniem Pitagorasa. Obwodu nie da się dokończyć z dwóch boków: dwie długości opisują otwarty narożnik, a nie zamknięty kontur." },
          { "kind": "h3", "text": "Znajdowanie przeciwprostokątnej, gdy znane są obie przyprostokątne" },
          { "kind": "p", "text": "Użyj twierdzenia Pitagorasa w postaci na przeciwprostokątną: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Przykład: [[a=6]], [[b=8]]. Wtedy [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]] Teraz można obliczyć obwód: [[P=6+8+10]], [[[\\boxed{P=24}]]], przy czym [[s=12]] wynika z podzielenia na pół." },
          { "kind": "h3", "text": "Znajdowanie brakującej przyprostokątnej, gdy znana jest przeciwprostokątna" },
          { "kind": "p", "text": "Przekształć [[a^2+b^2=c^2]], aby wyizolować nieznaną przyprostokątną: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Przykład: [[c=13]], [[b=12]]. Wtedy [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]] Dalej obwód: [[P=5+12+13=30]], [[s=15]]. Odejmowanie pod pierwiastkiem to znak rozpoznawczy brakującej przyprostokątnej; brakująca przeciwprostokątna zawsze dodaje." },
          { "kind": "h3", "text": "Dlaczego brakujący bok trzeba obliczyć najpierw?" },
          { "kind": "p", "text": "Obwód wymaga wszystkich trzech długości konturu. Brakującego boku nie można po prostu pominąć ani zgadywać bez uzasadnienia: dwa boki nie ograniczają trójkąta, a zgadnięty trzeci bok czyni sumę fikcją. Jeśli znane są tylko dwa boki, <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">kalkulator boku trójkąta prostokątnego</a> znajdzie trzeci, zanim przejmie kalkulator z tej strony. Zauważ, że to metoda edukacyjna, a nie dodatkowy tryb wprowadzania w istniejącym kalkulatorze: tryby obwodu i połowy obwodu wciąż przyjmują po trzy boki." }
        ],
        "imgAlt": "Trójkąt prostokątny o przyprostokątnych 6 i 8, nieznana przeciwprostokątna wyznaczona jako 10, co daje obwód 24",
        "figcaption": "Przyprostokątne 6 i 8 dają c = 10, więc P = 24 i s = 12."
      },
      "sec-pythagoras": {
        "h2": "Jak twierdzenie Pitagorasa wiąże się z obwodem trójkąta prostokątnego?",
        "blocks": [
          { "kind": "p", "text": "Twierdzenie mówi [[[\\boxed{a^2+b^2=c^2}]]] Ustanawia zależność między dwiema przyprostokątnymi a przeciwprostokątną: kwadratowy narożnik wymusza na trzech długościach dokładnie tę równowagę. W pracy z obwodem twierdzenie jest pomostem między niekompletnym zestawem pomiarów a pełnym konturem." },
          { "kind": "h3", "text": "Dlaczego ma znaczenie dla obwodu?" },
          { "kind": "p", "text": "Jeśli znane są obie przyprostokątne, przeciwprostokątną można obliczyć przed wyznaczeniem pełnego obwodu. Bez twierdzenia brakujący bok zablokowałby obliczenie całkowicie; z nim dwa znane boki wystarczą, by odzyskać trzeci i dokończyć sumę. Twierdzenie działa też w drugą stronę: znana przeciwprostokątna i jedna znana przyprostokątna odtwarzają drugą przyprostokątną. Tak czy inaczej zamienia zadanie o dwóch bokach w obwód o trzech bokach." },
          { "kind": "h3", "text": "Przykład rozwiązany" },
          { "kind": "p", "text": "Dane [[a=5]], [[b=12]]. Znajdź [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]] Oblicz obwód: [[P=5+12+13]], [[[\\boxed{P=30}]]] Oblicz połowę obwodu: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]] Jedno twierdzenie, jedno dodawanie, jedno dzielenie na pół: pełny łańcuch od dwóch przyprostokątnych do obu miar konturu." },
          { "kind": "h3", "text": "Jak zweryfikować trójkąt prostokątny?" },
          { "kind": "p", "text": "Trzy pomiary muszą spełniać [[a^2+b^2=c^2]], przy czym przeciwprostokątna jest najdłuższym bokiem. Sprawdź też nierówność trójkąta: dla każdego prawidłowego trójkąta [[a+b>c]], [[a+c>b]] i [[b+c>a]]. Warunki te mają znaczenie przy sprawdzaniu pomiarów: nieudana kontrola pitagorejska oznacza, że trójkąt nie jest prostokątny albo bok jest błędnie oznaczony; nieudana nierówność trójkąta oznacza, że trzy długości nie mogą tworzyć żadnego trójkąta. Wykonaj obie kontrole, zanim zaufasz obwodowi zbudowanemu z pomiarów terenowych." }
        ]
      },
      "sec-advanced": {
        "h2": "Jak połowa obwodu jest używana w innych wzorach na trójkąty?",
        "blocks": [
          { "kind": "p", "text": "Ta sekcja nadaje połowie obwodu głębię matematyczną, nie zamieniając strony w samouczek innego kalkulatora. Połowa obwodu to więcej niż połowa obwodu: to wielkość, która łączy długości boków z polem i geometrią okręgu, a poniższe wzory pokazują, gdzie zarabia na swoje utrzymanie." },
          { "kind": "h3", "text": "Zależność między połową obwodu a promieniem okręgu wpisanego" },
          { "kind": "p", "text": "Pole każdego niezdegenerowanego trójkąta równa się jego promieniowi okręgu wpisanego razy jego połowa obwodu: [[[\\boxed{K=rs}]]], gdzie [[K]] to pole, [[r]] promień okręgu wpisanego, a [[s]] połowa obwodu. Zależność ta działa dla wszystkich niezdegenerowanych trójkątów, nie tylko prostokątnych. Dla trójkąta prostokątnego promień okręgu wpisanego można też obliczyć z boków wzorem [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Weź trójkąt 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], więc [[K=1\\times6]], [[[\\boxed{K=6}]]] Połowa obwodu jest ważnym pomiarem pośrednim w tym obliczeniu: niesie informację o konturze, podczas gdy promień okręgu wpisanego niesie informację o okręgu." },
          { "kind": "h3", "text": "Zależność ze wzorem Herona" },
          { "kind": "p", "text": "Wzór Herona oblicza pole z trzech boków i połowy obwodu: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Używa wszystkich trzech długości boków, używa połowy obwodu, oblicza pole trójkąta i działa dla każdego prawidłowego trójkąta. Użyj trójkąta 3-4-5 przy [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]] Połowa obwodu pojawia się czterokrotnie pod pierwiastkiem, co pokazuje, jak bardzo jest centralna: wzoru Herona nie da się nawet zapisać bez niej." },
          { "kind": "h3", "text": "Dlaczego połowa obwodu jest miarą podstawową?" },
          { "kind": "p", "text": "To więcej niż połowa obwodu. To użyteczna wielkość matematyczna, która łączy długości boków z polem i geometrią okręgu: zależność z promieniem okręgu wpisanego traktuje ją jak naturalnego partnera [[r]], a wzór Herona buduje na niej całe pole. Ilekroć wzór potrzebuje konturu sprowadzonego do jednej wygodnej liczby, [[s]] jest tą liczbą. Ta strona nie zamienia się w pełny samouczek wzoru Herona czy promienia okręgu wpisanego; odnotowuje powiązanie, żeby wynik trybu połowy obwodu miał dokąd pójść dalej." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Jaka jest różnica między obwodem a polem?",
        "blocks": [
          { "kind": "p", "text": "Jednym z najbardziej uporczywych nieporozumień w geometrii jest mylenie obrysu z powierzchnią. Obwód i pole mają ten sam trójkąt, ale mierzą różne rzeczy, w różnych jednostkach, odpowiadając na różne pytania." },
          { "kind": "h3", "text": "Obwód mierzy kontur" },
          { "kind": "p", "text": "[[P=a+b+c]]. Mierzy całkowitą długość wokół trójkąta: obrzeże, listwę, linię ogrodzenia. Jednostki są liniowe: metry, centymetry, stopy, cale. Jest jednowymiarowy, długością i niczym więcej." },
          { "kind": "h3", "text": "Pole mierzy zamkniętą powierzchnię" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]] Mierzy płaski, dwuwymiarowy obszar wewnątrz trójkąta prostokątnego: szybę w oknie, trawę na rabacie. Jednostki są kwadratowe: metry kwadratowe, centymetry kwadratowe, stopy kwadratowe, cale kwadratowe. Jest dwuwymiarowe, liczeniem powierzchni i niczym więcej." },
          { "kind": "h3", "text": "Czy dwa trójkąty mogą mieć ten sam obwód, ale różne pola?" },
          { "kind": "p", "text": "Tak. Trójkąt 1: [[a=5]], [[b=12]], [[c=13]]. Wtedy [[P=5+12+13=30]] i [[K=\\frac{5\\times12}{2}=30]]. Trójkąt 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Sprawdź kąt prosty: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], więc to prawdziwy trójkąt prostokątny. Jego obwód to [[P=7.5+10+12.5=30]], te same 30, ale jego pole to [[K=\\frac{7.5\\times10}{2}=37.5]], wyraźnie różne. Równy obwód nie oznacza automatycznie równego pola: długość obrysu ustala całkowite obrzeże, ale kształt trójkąta decyduje, ile powierzchni to obrzeże zamyka." },
          { "kind": "h3", "text": "Dlaczego nigdy nie podawać obwodu w jednostkach kwadratowych?" },
          { "kind": "p", "text": "Obwód to jednowymiarowa długość; jednostki kwadratowe opisują dwuwymiarową powierzchnię. Podanie 12 m² dla obwodu twierdzi, że jest powierzchnia tam, gdzie zmierzono tylko obrys, a każdy, kto przeczyta tę liczbę, wyobrazi sobie nie to, co trzeba. Trzymaj jednostki uczciwie: długości w m, cm, ft, in; pola w m², cm², ft², in². Jednostka jest częścią odpowiedzi, a zła jednostka zamienia dobrą odpowiedź w złą." }
        ]
      },
      "sec-units": {
        "h2": "Jednostki miary w obliczeniach obwodu i połowy obwodu",
        "blocks": [
          { "kind": "p", "text": "Metry, centymetry, milimetry, kilometry, stopy, cale, jardy, mile: jednostki długości występują w wielu rozmiarach, a wzór na obwód przyjmuje każdą z nich. Jedyna zasada to zgodność: wszystkie trzy boki muszą mówić tą samą jednostką, zanim zostaną dodane." },
          { "kind": "h3", "text": "Dlaczego wszystkie trzy długości boków muszą używać zgodnych jednostek?" },
          { "kind": "p", "text": "Obwód to suma długości. Dodawanie 3 stóp do 48 cali bez przeliczenia miesza dwie skale, a suma nie ma czystego znaczenia: 56 czego? Przed dodawaniem pomiarów przelicz je na wspólną jednostkę. Selektory jednostek kalkulatora istnieją dokładnie na ten krok, a opracowany przykład poniżej pokazuje przeliczenie wykonujące swoją cichą, niezbędną pracę." },
          { "kind": "h3", "text": "Opracowany przykład przeliczania jednostek" },
          { "kind": "p", "text": "Dane [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Przelicz środkowy bok: [[48\\text{ inches}=4\\text{ ft}]]. Wtedy [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]] Połowa obwodu: [[[\\boxed{s=6\\text{ ft}}]]] Zwróć uwagę, że przeliczona trójka to znane 3-4-5, co niezależnie potwierdza przeliczenie: gdyby cale dodano na surowo, obwód wyniósłby 56 niczego spójnego." },
          { "kind": "h3", "text": "Obliczanie z dziesiętnymi długościami boków" },
          { "kind": "p", "text": "Weź [[a=2.5]], [[b=6]], [[c=6.5]]. Najpierw potwierdź kąt prosty: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Oblicz obwód: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]] Potem połowę obwodu: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]] Dziesiętne przepływają przez to samo dodawanie i dzielenie na pół co liczby całkowite; wzory nigdy nie wymagają liczb całkowitych, a pomiary warsztatowe rzadko nimi są." },
          { "kind": "h3", "text": "Dlaczego unikać zbyt wczesnego zaokrąglania?" },
          { "kind": "p", "text": "Obliczenia pomiarowe mogą zawierać wartości dziesiętne, a każde pośrednie zaokrąglenie wstrzykuje błąd, którego późniejsze kroki nie usuną. Zachowaj wystarczającą dokładność w krokach pośrednich i zaokrąglij tylko ostateczną odpowiedź zgodnie z wymaganą dokładnością pomiaru. Zaokrąglenie 2.5 do 3 w połowie obliczeń zepsułoby zarówno [[P]], jak i [[s]]; kalkulator trzyma pełną dokładność do końca i obliczenia ręczne powinny robić to samo." }
        ]
      },
      "sec-scaling": {
        "h2": "Jak zmiany długości boków wpływają na obwód i połowę obwodu?",
        "blocks": [
          { "kind": "p", "text": "Obwód jest miarą liniową, więc skaluje się liniowo z trójkątem: rozciągnij każdy bok o jakiś współczynnik, a kontur rozciągnie się dokładnie o ten współczynnik. Połowa obwodu podąża za nim, skoro zawsze jest połową obwodu." },
          { "kind": "h3", "text": "Co się dzieje, gdy każdy bok się podwaja?" },
          { "kind": "p", "text": "Zacznij od [[P=a+b+c]]. Jeśli każdy bok się podwaja, nowy obwód to [[P_2=2a+2b+2c]], co sprowadza się do [[P_2=2(a+b+c)]]. Zatem [[[\\boxed{P_2=2P}]]] Połowa obwodu też się podwaja, skoro podzielenie na pół podwojonej sumy wciąż podwaja połowę. Para 3-4-5 do 6-8-10 pokazuje to na liczbach: 12 staje się 24, a 6 staje się 12." },
          { "kind": "h3", "text": "Co się dzieje, gdy każdy bok się potraja?" },
          { "kind": "p", "text": "Ta sama algebra ze współczynnikiem trzy daje [[[\\boxed{P_2=3P}]]] i [[[\\boxed{s_2=3s}]]] Liniowa zależność skalowania zachodzi dla każdego współczynnika skali [[k]]: pomnóż każdy bok przez [[k]], a obie miary konturu pomnożą się przez [[k]]. Dlatego rysunki w skali zachowują się tak dobrze: zmierz rysunek, pomnóż przez współczynnik skali i prawdziwy obwód jest gotowy." },
          { "kind": "h3", "text": "Co się dzieje, gdy zmienia się tylko jeden bok?" },
          { "kind": "p", "text": "Zwiększenie jednego boku przy dwóch pozostałych stałych zmienia obwód o tę samą wielkość: dodaj 2 jednostki do jednego boku, a [[P]] urośnie dokładnie o 2, ponieważ obwód to zwykła suma. Ale w trójkącie prostokątnym długości boków są związane twierdzeniem Pitagorasa, więc dowolne zmiany boków mogą nie zachować warunku kąta prostego. Wydłużenie przyprostokątnej bez dostosowania przeciwprostokątnej łamie [[a^2+b^2=c^2]] i kształt przestaje być prostokątny: wzór na obwód wciąż dodaje trzy liczby, ale nie opisują one już trójkąta prostokątnego." },
          { "kind": "h3", "text": "Porównanie dwóch trójkątów prostokątnych" },
          { "kind": "p", "text": "Postaw 3-4-5 obok 6-8-10. Długości boków: każdy bok podwojony, współczynnik skali 2. Obwód: 12 wobec 24. Połowa obwodu: 6 wobec 12. Podwojenie wszystkich długości boków podwaja obie miary konturu, dokładnie jak przewiduje algebra. Porównanie działa też w drugą stronę: jeśli obwody dwóch trójkątów mają się jak 2:1 i oba są prostokątne, ich boki też mają się tak do siebie." }
        ]
      },
      "sec-applications": {
        "h2": "Praktyczne zastosowania obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Ten sam dwuetapowy wzorzec, dodaj, a potem podziel na pół, pojawia się wszędzie tam, gdzie trzeba zmierzyć trójkątny obrys, a wzór potrzebuje jego połowy. Szklarz sumuje ramę okna z długości krawędzi; dekarz sumuje obramowanie wokół szczytu; ogrodnik sumuje obrzeże wokół rabaty; wytwórca sumuje profil krawędzi wokół panelu. Z trzech boków pochodzą obwód na zamówienie materiału i połowa obwodu do dalszej geometrii. Cztery panele poniżej pokazują wzorzec w różnych skalach: rama okna (12 m), obramowanie krawędzi dachu (24 ft), obrzeże rabaty (56 m) i stalowa rama nośna (40 cm), każdy oznaczony swoim obwodem i połową obwodu." }
        ],
        "imgAlt": "Cztery panele: rama okna 12 m, obramowanie dachu 24 ft, obrzeże rabaty 56 m, stalowa rama 40 cm obwodów",
        "figcaption": "Cztery prawdziwe zastosowania: rama okna, obramowanie krawędzi dachu, obrzeże rabaty i stalowa rama."
      },
      "sec-mistakes": {
        "h2": "Typowe błędy przy obliczaniu obwodu i połowy obwodu trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Prawie każda zła odpowiedź w tym temacie wynika z pominiętego boku albo pomieszanego oznaczenia, a nie ze złej arytmetyki. Szesnaście błędów poniżej to te, które pojawiają się wciąż na nowo, każdy z przyczyną i poprawką." },
          { "kind": "h3", "text": "1. Zapominanie o uwzględnieniu przeciwprostokątnej" },
          { "kind": "p", "text": "Użycie [[P=a+b]] na trójkącie 3-4-5 daje 7, nie 12. Błąd powstaje, ponieważ przeciwprostokątna nigdy nie styka się z kątem prostym, więc wydaje się oddzielona od właściwego trójkąta. Poprawka: kontur ma trzy krawędzie; policz wszystkie trzy, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Mylenie obwodu z połową obwodu" },
          { "kind": "p", "text": "Wpisanie 6 tam, gdzie należy 12, albo odwrotnie, dzieli na pół albo podwaja kosztorys materiałowy. Błąd bierze się stąd, że obie wartości mają te same trzy boki. Poprawka: oznaczaj każdy wynik [[P]] albo [[s]] i sprawdź [[s=\\frac{P}{2}]], zanim pójdziesz dalej." },
          { "kind": "h3", "text": "3. Dzielenie obwodu przez dwa przy obliczaniu obwodu" },
          { "kind": "p", "text": "Obliczenie [[\\frac{3+4+5}{2}=6]] i nazwanie tego obwodem zaniża kontur o połowę. Błąd to uruchamianie wzoru na połowę obwodu z przyzwyczajenia. Poprawka: [[P=a+b+c]] nie ma dzielenia; dzielenie na pół należy wyłącznie do [[s]]." },
          { "kind": "h3", "text": "4. Zapominanie o dzieleniu przez dwa przy obliczaniu połowy obwodu" },
          { "kind": "p", "text": "Podanie [[s=12]] dla trójkąta 3-4-5 karmi wzór Herona podwojonym [[s]] i psuje pole. Poprawka: [[s=\\frac{a+b+c}{2}]] zawsze kończy się dzieleniem na pół; bez niego liczba jest obwodem." },
          { "kind": "h3", "text": "5. Używanie złego boku jako przeciwprostokątnej" },
          { "kind": "p", "text": "Traktowanie przyprostokątnej jak [[c]], na przykład wpisanie a=5, b=4, c=3, miesza każdy dalszy wzór. Błąd zwykle wynika z odczytania boków w złej kolejności. Poprawka: [[c]] to najdłuższy bok, leżący naprzeciw kąta prostego; posortuj trzy liczby i przypisz [[c]] największej." },
          { "kind": "h3", "text": "6. Wpisywanie pomiarów, które nie tworzą trójkąta prostokątnego" },
          { "kind": "p", "text": "Boki 2, 3, 4 dają arytmetycznie [[P=9]], ale [[2^2+3^2=13\\neq16]], więc nie istnieje kąt prosty, a wzory strony opierają się na fałszywym założeniu. Poprawka: zweryfikuj [[a^2+b^2=c^2]] przed obliczaniem." },
          { "kind": "h3", "text": "7. Mieszanie centymetrów z metrami" },
          { "kind": "p", "text": "Dodawanie 3 m, 40 cm i 5 m jako [[3+40+5=48]] daje 48 niczego. Poprawka: najpierw przelicz na jedną jednostkę: [[40\\text{ cm}=0.4\\text{ m}]], potem [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mieszanie stóp z calami" },
          { "kind": "p", "text": "Dodawanie 3 ft, 48 in i 5 ft jako 56 powtarza ten sam błąd skali w jednostkach imperialnych. Poprawka: [[48\\text{ in}=4\\text{ ft}]], potem [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Podawanie obwodu w jednostkach kwadratowych" },
          { "kind": "p", "text": "Zapisywanie [[P=12\\text{ m}^2]]. Błąd zwykle wynika z kopiowania jednostki pola z przyzwyczajenia po zadaniach na pole. Poprawka: obwody to długości, więc [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Podawanie połowy obwodu jako pola" },
          { "kind": "p", "text": "Traktowanie [[s=6]] jak 6 jednostek kwadratowych. Połowa obwodu to długość, połowa konturu, a nie powierzchnia. Poprawka: [[s=6]] jednostek długości, kropka." },
          { "kind": "h3", "text": "11. Zbyt wczesne zaokrąglanie" },
          { "kind": "p", "text": "Zaokrąglenie 2.5 do 3 przed dodawaniem daje [[3+6+6.5=15.5]] zamiast prawdziwych 15. Błąd wydaje się nieszkodliwy, bo zaokrąglenie wygląda na małe. Poprawka: trzymaj pełną dokładność przez całe obliczenie i zaokrąglij tylko ostateczną odpowiedź." },
          { "kind": "h3", "text": "12. Używanie tylko dwóch boków w istniejącym kalkulatorze" },
          { "kind": "p", "text": "Wpisanie [[a=3]], [[b=4]] i żadnego [[c]] zostawia kontur otwarty. Kalkulator potrzebuje wszystkich trzech długości, ponieważ obwód to zamknięta suma. Poprawka: najpierw znajdź brakujący bok twierdzeniem Pitagorasa, potem oblicz." },
          { "kind": "h3", "text": "13. Ignorowanie nierówności trójkąta" },
          { "kind": "p", "text": "Boki 2, 3, 10 dają arytmetycznie [[P=15]], ale [[2+3<10]], więc żaden trójkąt w ogóle nie istnieje. Poprawka: sprawdź [[a+b>c]], zanim zaufasz jakiemukolwiek wynikowi zbudowanemu z tych trzech liczb." },
          { "kind": "h3", "text": "14. Zakładanie, że połowa obwodu jest fizyczną ścieżką półkonturu" },
          { "kind": "p", "text": "Szukanie spaceru o długości 6 jednostek wzdłuż krawędzi 3-4-5. Żadna pojedyncza ciągła półścieżka nie równa się [[s]] w ogólności; [[s]] to połowa sumy liczbowej. Poprawka: traktuj [[s]] jak liczbę do wzorów, a nie trasę do przejścia." },
          { "kind": "h3", "text": "15. Mylenie obwodu z sumą tylko prostopadłych przyprostokątnych" },
          { "kind": "p", "text": "Obliczanie [[a+b=7]] i zatrzymywanie się, jakby przeciwprostokątna była ozdobą wnętrza. Poprawka: przeciwprostokątna jest krawędzią konturu; [[P=a+b+c]], wszystkie trzy składniki, za każdym razem." },
          { "kind": "h3", "text": "16. Zakładanie, że sam obwód wyznacza pole trójkąta" },
          { "kind": "p", "text": "Wiara, że [[P=30]] ustala [[K]]. Trójkąt 5-12-13 ([[K=30]]) i trójkąt 7.5-10-12.5 ([[K=37.5]]) mają wspólne [[P=30]] przy różnych polach. Poprawka: pole potrzebuje więcej niż sumy konturu; użyj przyprostokątnych albo wzoru Herona." },
          { "kind": "h3", "text": "Błędnie a poprawnie: konkretny przykład" },
          { "kind": "p", "text": "Dane [[a=3]], [[b=4]], [[c=5]]. Poprawny obwód: [[P=3+4+5=12]]. Błędne pominięcie przeciwprostokątnej: [[3+4=7]]. Siedem to nie pełny obwód, ponieważ trzecia krawędź konturu nigdy nie została policzona. Poprawna połowa obwodu: [[s=\\frac{12}{2}=6]]. Sześć to nie pełna długość konturu: to jego połowa, wartość, której potrzebują wzory takie jak wzór Herona. Arytmetyka wygląda pewnie we wszystkich trzech przypadkach; tylko geometria je rozróżnia." }
        ]
      },
      "sec-verify": {
        "h2": "Jak sprawdzić, czy obwód trójkąta prostokątnego jest poprawny",
        "blocks": [
          { "kind": "p", "text": "Siedem niezależnych kontroli, wszystkie pokazane na trójkącie 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). Zgodność między różnymi drogami to najmocniejszy dowód, że odpowiedź jest dobra, w pracy domowej i w pomiarach praktycznych tak samo." },
          { "kind": "h3", "text": "Metoda 1: dodaj wszystkie trzy boki jeszcze raz" },
          { "kind": "p", "text": "Wykonaj [[P=a+b+c]] od nowa: [[P=3+4+5=12]]. Drugie przejście z liczbami wpisanymi na nowo wyłapuje literówki i pomylone cyfry, które jedno przejście ukrywa." },
          { "kind": "h3", "text": "Metoda 2: podziel obwód przez dwa" },
          { "kind": "p", "text": "Oblicz [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Jeśli dzielenie na pół nie zgadza się z wynikiem trybu połowy obwodu, jedno z dwóch obliczeń poszło źle i oba zasługują na drugie spojrzenie." },
          { "kind": "h3", "text": "Metoda 3: podwoj połowę obwodu" },
          { "kind": "p", "text": "Sprawdź [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. To odwrotność metody 2 i wyłapuje tę samą klasę błędów z drugiej strony: złe [[s]] oblewa test tutaj, nawet gdy pierwotne dodawanie wyglądało dobrze." },
          { "kind": "h3", "text": "Metoda 4: zweryfikuj zależność pitagorejską" },
          { "kind": "p", "text": "Potwierdź [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. To sprawdza oznaczenia boków stojące za każdym innym obliczeniem; zła przeciwprostokątna oznacza błędnie oznaczony bok, a [[P]] i [[s]] trzeba zbudować od nowa." },
          { "kind": "h3", "text": "Metoda 5: sprawdź nierówność trójkąta" },
          { "kind": "p", "text": "Potwierdź [[a+b>c]]: [[3+4=7>5]]. Trzy długości muszą w ogóle umieć utworzyć trójkąt, zanim kontrola kąta prostego cokolwiek znaczy. Porażka tutaj odsyła z powrotem do pomiarów, nie do arytmetyki." },
          { "kind": "h3", "text": "Metoda 6: sprawdź jednostki miary" },
          { "kind": "p", "text": "Potwierdź, że wszystkie trzy boki używają zgodnych jednostek. Mieszane jednostki to najcichszy błąd w tym temacie: arytmetyka wygląda czysto, podczas gdy skala jest zła. Przeczytaj selektor jednostek każdego wpisu, zanim zaufasz sumie." },
          { "kind": "h3", "text": "Metoda 7: porównaj z wizualizacją na żywo" },
          { "kind": "p", "text": "Kalkulator rysuje trójkąt z wpisanych boków. Jeśli rysunek w niczym nie przypomina mierzonego obiektu, bok został źle przypisany: najdłuższy wpisany bok powinien leżeć naprzeciw kwadratowego narożnika. Obrazek to niezależny świadek i warto na niego zerknąć, zanim liczby trafią do zamówienia czy raportu." }
        ]
      },
      "sec-related": {
        "h2": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
        "blocks": [
          { "kind": "p", "text": "Różne pomiary wymagają różnych kalkulatorów." }
        ]
      },
      "sec-faq": {
        "h2": "Często zadawane pytania",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Jeden kontur, dwie przydatne miary",
        "blocks": [
          { "kind": "p", "text": "Obwód sumuje kontur; połowa obwodu dzieli tę sumę na pół dla wzorów, które jej potrzebują. Trójkąt 3-4-5 niesie całą historię w miniaturze: [[P=12]] jednostek obrysu na zamówienie materiału, [[s=6]] jednostek gotowych do wzoru Herona albo zależności z promieniem okręgu wpisanego. Jedno dodawanie i jedno dzielenie na pół pokrywają oba zadania." },
          { "kind": "p", "text": "Nawyk pracy jest prosty: oznacz przeciwprostokątną poprawnie, uwzględnij wszystkie trzy boki, dopasuj jednostki, trzymaj dziesiętne niezaokrąglone do końca i weryfikuj drugą metodą. Z tymi nawykami [[P=a+b+c]] i [[s=\\frac{a+b+c}{2}]] to dwie z najbardziej niezawodnych miar w geometrii." }
        ]
      }
    },
    "relatedHeading": "Odkryj powiązane kalkulatory trójkąta prostokątnego",
    "relatedIntro": "Różne pomiary wymagają różnych kalkulatorów.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Kalkulator obwodu trójkąta prostokątnego" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Kalkulator połowy obwodu trójkąta prostokątnego" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Kalkulator pola trójkąta prostokątnego z połowy obwodu" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Kalkulator pola trójkąta prostokątnego z przyprostokątnych" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Kalkulator twierdzenia Pitagorasa" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Kalkulator brakującej przyprostokątnej trójkąta prostokątnego" }
    ],
    "faqHeading": "Często zadawane pytania",
    "faqs": [
      {
        "question": "Jaki jest wzór na obwód trójkąta prostokątnego?",
        "answer": "P = a + b + c, gdzie a i b to dwie przyprostokątne, a c to przeciwprostokątna. Dodaj wszystkie trzy długości boków; suma to pełna długość konturu w jednostkach liniowych. Dla trójkąta 3-4-5, P = 3 + 4 + 5 = 12 jednostek. Każdy bok musi być uwzględniony, w tym przeciwprostokątna, ponieważ jest jedną z trzech krawędzi konturu."
      },
      {
        "question": "Jaki jest wzór na połowę obwodu trójkąta prostokątnego?",
        "answer": "s = (a + b + c) / 2, dokładnie połowa obwodu, równoważnie s = P / 2. Najpierw dodaj trzy boki, potem podziel raz. Dla trójkąta 3-4-5, s = (3 + 4 + 5) / 2 = 6 jednostek. To długość, nie pole, i to dane wejściowe, których oczekują wzory takie jak wzór Herona."
      },
      {
        "question": "Jaka jest różnica między obwodem a połową obwodu?",
        "answer": "Obwód to cały kontur, P = a + b + c; połowa obwodu to jego połowa, s = P / 2. Dla trójkąta 6-8-10, P = 24 i s = 12. Używaj P do szacunków materiałowych wokół obrysu, a s jako danych wejściowych do zaawansowanych wzorów geometrycznych. Oba różnią się dokładnie dwukrotnie, zawsze."
      },
      {
        "question": "Dlaczego przeciwprostokątna jest uwzględniana w obwodzie?",
        "answer": "Ponieważ obwód mierzy cały zewnętrzny kontur, a przeciwprostokątna jest jedną z jego trzech krawędzi. Obchodzenie trójkąta oznacza przejście także przeciwprostokątnej. Jej pominięcie mierzy otwartą ścieżkę, a nie zamknięty obrys. Dla 3-4-5 pominięcie 5 daje 7, co nie jest obwodem żadnego trójkąta o tych bokach."
      },
      {
        "question": "Czy mogę obliczyć obwód, gdy brakuje jednego boku?",
        "answer": "Nie bezpośrednio: wzór potrzebuje wszystkich trzech długości konturu. Najpierw znajdź brakujący bok twierdzeniem Pitagorasa: c = sqrt(a^2 + b^2) dla brakującej przeciwprostokątnej albo a = sqrt(c^2 - b^2) dla brakującej przyprostokątnej. Przy a = 6 i b = 8, c = 10, więc P = 6 + 8 + 10 = 24. Kalkulator na tej stronie wymaga wszystkich trzech boków."
      },
      {
        "question": "Jak znaleźć przeciwprostokątną przed obliczeniem obwodu?",
        "answer": "Użyj c = sqrt(a^2 + b^2) przy dwóch znanych przyprostokątnych. Dla a = 5 i b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Potem dodaj wszystkie trzy boki: P = 5 + 12 + 13 = 30. Potwierdź, że wynik jest najdłuższym bokiem; jeśli nie jest, przyprostokątne zostały błędnie oznaczone."
      },
      {
        "question": "Dlaczego połowa obwodu jest przydatna w geometrii?",
        "answer": "Jest naturalną zmienną wzoru Herona, K = sqrt(s(s - a)(s - b)(s - c)), oraz zależności z promieniem okręgu wpisanego K = r x s. Wzory na pole wciąż wytwarzają połówki, a połowa obwodu pochłania je w jedną wygodną liczbę. Dla 3-4-5, s = 6 zasila oba wzory i oba zwracają K = 6. Łączy długości boków z polem i geometrią okręgu."
      },
      {
        "question": "Czy połowa obwodu to połowa pola trójkąta?",
        "answer": "Nie. Połowa obwodu to połowa obwodu, długość mierzona w jednostkach takich jak metry czy stopy. Pole to dwuwymiarowa powierzchnia mierzona w jednostkach kwadratowych. Dla trójkąta 3-4-5, s = 6 jednostek, podczas gdy pole to 6 jednostek kwadratowych; zgodne liczby to zbieg okoliczności tego konkretnego trójkąta, a nie reguła."
      },
      {
        "question": "Jakich jednostek używać do obwodu?",
        "answer": "Dowolnej jednostki liniowej, o ile wszystkie trzy boki ją mają: metry, centymetry, milimetry, kilometry, stopy, cale, jardy albo mile. Przelicz przed dodawaniem: 3 ft, 48 in, 5 ft staje się 3 ft, 4 ft, 5 ft, co daje P = 12 ft. Nigdy nie podawaj obwodu w jednostkach kwadratowych; to długość, nie powierzchnia."
      },
      {
        "question": "Czy mogę obliczyć obwód, używając pomiarów dziesiętnych?",
        "answer": "Tak. Wzory traktują dziesiętne dokładnie jak liczby całkowite. Przy a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 jednostek i s = 15 / 2 = 7.5 jednostki. Zachowaj pełną dokładność przez całe dodawanie i zaokrąglij tylko ostateczną odpowiedź do dokładności, którą pomiary uzasadniają."
      },
      {
        "question": "Jak sprawdzić, czy trzy boki tworzą prawidłowy trójkąt prostokątny?",
        "answer": "Potwierdź zależność pitagorejską a^2 + b^2 = c^2, przy czym c jest najdłuższym bokiem, oraz potwierdź nierówność trójkąta a + b > c. Dla 3, 4, 5: 9 + 16 = 25 i 3 + 4 > 5, więc trójkąt jest prawidłowy i prostokątny. Niezaliczenie któregokolwiek testu oznacza, że pomiary trzeba sprawdzić ponownie, zanim zaufa się jakiemukolwiek obwodowi."
      },
      {
        "question": "Jaka jest zależność między połową obwodu, promieniem okręgu wpisanego a wzorem Herona?",
        "answer": "Połowa obwodu zasila oba: K = r x s łączy ją z promieniem okręgu wpisanego, a K = sqrt(s(s - a)(s - b)(s - c)) to wzór Herona zbudowany na niej. Dla trójkąta prostokątnego promień okręgu wpisanego też wynika z boków jako r = (a + b - c) / 2. Przy 3-4-5, s = 6 i r = 1, więc K = 1 x 6 = 6, zgodnie z wynikiem Herona."
      }
    ]
  }
};
