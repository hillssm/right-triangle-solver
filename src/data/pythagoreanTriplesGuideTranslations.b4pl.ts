// pythagoreanTriplesGuideTranslations.bpl.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator Trójek Pitagorejskich - Sprawdź i Wygeneruj Trójki",
        "description": "Sprawdź, czy trzy liczby całkowite tworzą trójkę pitagorejską, i generuj trójki za pomocą wzoru Euklidesa. Poznaj trójki pierwotne, skalowanie i rozwiązane przykłady.",
        "primaryKeyword": "Kalkulator Trójek Pitagorejskich",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator Trójek Pitagorejskich",
        "sec-calculate": "Sprawdzanie i Generowanie Trójek Pitagorejskich za Pomocą Kalkulatora",
        "sec-what": "Czym Jest Trójka Pitagorejska?",
        "sec-pythagorean": "Zrozumienie Twierdzenia Pitagorasa",
        "sec-check": "Jak Sprawdzić, Czy Trzy Liczby Tworzą Trójkę Pitagorejską",
        "sec-euclid": "Jak Generować Trójki Pitagorejskie za Pomocą Wzoru Euklidesa",
        "sec-proof": "Matematyczny Dowód Wzoru Euklidesa",
        "sec-primitive": "Czym Jest Pierwotna Trójka Pitagorejska?",
        "sec-nonprimitive": "Czym Jest Niepierwotna Trójka Pitagorejska?",
        "sec-conditions": "Warunki Generowania Pierwotnych Trójek Pitagorejskich",
        "sec-difference": "Różnica Między Trójkami Pierwotnymi a Niepierwotnymi",
        "sec-scaling": "Jak Generować Więcej Trójek Poprzez Skalowanie Istniejących",
        "sec-examples": "Typowe Przykłady Trójek Pitagorejskich",
        "sec-worked": "Rozwiązane Przykłady Krok po Kroku z Użyciem Kalkulatora",
        "sec-infinite": "Dlaczego Istnieje Nieskończenie Wiele Trójek Pitagorejskich?",
        "sec-recognize": "Jak Rozpoznać Trójkę Pitagorejską Bez Zgadywania",
        "sec-ordinary": "Trójki Pitagorejskie a Zwykłe Trójkąty Prostokątne",
        "sec-mistakes": "Typowe Błędy Przy Korzystaniu z Kalkulatora Trójek Pitagorejskich",
        "sec-practice": "Zadania Ćwiczeniowe z Odpowiedziami",
        "sec-related": "Powiązane Kalkulatory Trójkątów Prostokątnych",
        "sec-faq": "Najczęściej Zadawane Pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator Trójek Pitagorejskich",
          "blocks": [
            {
              "kind": "p",
              "text": "Sprawdź całkowite trójki liczb i generuj nowe za pomocą wzoru Euklidesa.",
            },
            {
              "kind": "p",
              "text": "Trójka pitagorejska to zbiór trzech dodatnich liczb całkowitych, które mogą być bokami trójkąta prostokątnego. Dwie krótsze liczby to przyprostokątne, największa liczba to przeciwprostokątna, a trzy wartości spełniają twierdzenie Pitagorasa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkulator Trójek Pitagorejskich wykonuje dwa zadania. W trybie sprawdzania wprowadzasz trzy liczby całkowite, a on testuje, czy tworzą prawidłową trójkę. W trybie generowania wprowadzasz dwie liczby całkowite, [[m]] i [[n]], a on buduje nową trójkę za pomocą wzoru Euklidesa. Sprawdzanie i generowanie to różne zadania, a ta strona wyjaśnia oba, krok po kroku.",
            },
            {
              "kind": "p",
              "text": "Najbardziej znanym przykładem jest [[3]], [[4]] i [[5]]. Podniesienie przyprostokątnych do kwadratu i ich dodanie daje [[3^2+4^2=9+16=25]], co jest równe [[5^2]]. Ponieważ obie strony są dokładnie równe, [[(3, 4, 5)]] jest prawidłową trójką. Trójka pierwotna to taka, której trzy liczby nie mają wspólnego dzielnika większego od [[1]]; [[3]], [[4]] i [[5]] nie mają nic wspólnego, więc [[(3, 4, 5)]] jest pierwotna. Poniższe sekcje pokazują, jak sprawdzić dowolne trzy liczby, jak generować trójki dowolnego rozmiaru i jak odróżnić trójki pierwotne od przeskalowanych kopii.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Sprawdzanie i Generowanie Trójek Pitagorejskich za Pomocą Kalkulatora",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa tryby, jedna strona: sprawdź zestaw liczb albo zbuduj nową trójkę.",
            },
            {
              "kind": "h3",
              "text": "Tryb 1: Sprawdzanie Trójki Pitagorejskiej",
            },
            {
              "kind": "p",
              "text": "Wprowadź trzy długości boków jako [[a]], [[b]] i [[c]], przy czym [[c]] to największa wartość. Kalkulator podnosi [[a]] i [[b]] do kwadratu, dodaje wyniki, podnosi [[c]] do kwadratu i porównuje obie strony równania.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Gdy obie strony są równe, trzy liczby tworzą prawidłową trójkę pitagorejską, a wynik to potwierdza. Gdy się różnią, liczby nie tworzą trójki, a wynik pokazuje dwie nierówne sumy, abyś mógł zobaczyć, jak bardzo się różnią. Wszystkie trzy dane wejściowe muszą być dodatnimi liczbami całkowitymi i wszystkie muszą używać tej samej jednostki.",
            },
            {
              "kind": "h3",
              "text": "Tryb 2: Generowanie Trójek Pitagorejskich",
            },
            {
              "kind": "p",
              "text": "Wprowadź dwie dodatnie liczby całkowite, [[m]] i [[n]], przy czym [[m]] jest większe od [[n]]. Kalkulator stosuje wzór Euklidesa, aby utworzyć trzy całkowite długości boków.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Wynik jest zawsze prawidłową trójką, ponieważ wzór Euklidesa jest zbudowany tak, aby spełniać twierdzenie Pitagorasa. Dwie przyprostokątne mogą występować w dowolnej kolejności, ale [[c]] zawsze jest przeciwprostokątną. Aby użyć kalkulatora, wybierz tryb, wprowadź prawidłowe liczby, kliknij Oblicz i przeczytaj wynik wraz z rozwiązaniem krok po kroku. Kliknij Resetuj, aby wyczyścić pola i zacząć od nowa.",
            },
          ],
        },
        "sec-what": {
          "h2": "Czym Jest Trójka Pitagorejska?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy dodatnie liczby całkowite, które dokładnie spełniają twierdzenie Pitagorasa.",
            },
            {
              "kind": "p",
              "text": "Trójka pitagorejska to zbiór trzech dodatnich liczb całkowitych, zapisanych jako [[(a, b, c)]], które spełniają równanie [[a^2+b^2=c^2]]. Tutaj [[a]] i [[b]] to przyprostokątne, dwa boki stykające się przy kącie prostym, a [[c]] to przeciwprostokątna, bok leżący naprzeciw kąta prostego i zawsze najdłuższy z trzech.",
            },
            {
              "kind": "p",
              "text": "Równanie musi być spełnione dokładnie. Prawie trafienie to nie trójka: jeśli suma kwadratów przyprostokątnych różni się od kwadratu przeciwprostokątnej choćby o jedną jednostkę, trzy liczby nie przechodzą testu. Ta ścisła równość sprawia, że trójka jest przydatna w budownictwie i stolarstwie, gdzie sprawdzenie [[3]]-[[4]]-[[5]] wyznacza kąt prosty bez błędu pomiaru.",
            },
            {
              "kind": "p",
              "text": "Wszystkie trzy liczby muszą być całkowite i dodatnie. Trójkąt prostokątny o dziesiętnych długościach boków, taki jak przyprostokątne [[1.5]] i [[2]] z przeciwprostokątną [[2.5]], spełnia twierdzenie Pitagorasa, ale nie jest trójką pitagorejską, ponieważ definicja wymaga liczb całkowitych. Podobnie trójkąt o boku niewymiernym, taki jak przyprostokątne [[1]] i [[1]] z przeciwprostokątną [[\\sqrt{2}]], jest trójkątem prostokątnym, ale nie trójką. Słowo trójka jest zarezerwowane wyłącznie dla dodatnich rozwiązań całkowitych.",
            },
            {
              "kind": "p",
              "text": "Trójka [[(3, 4, 5)]] jest naturalnym pierwszym przykładem. Jej przyprostokątne to [[3]] i [[4]], przeciwprostokątna to [[5]], a [[9+16=25]] potwierdza równanie. Kolejność przyprostokątnych nie ma znaczenia: [[(4, 3, 5)]] opisuje ten sam trójkąt. Ważne jest, aby dwie mniejsze liczby były przyprostokątnymi, a największa przeciwprostokątną.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Kwadraty narysowane na bokach 3, 4 i 5 o polach 9, 16 i 25, pokazujące, że 9 plus 16 równa się 25",
            "caption": "Kwadraty na bokach 3, 4 i 5 mają pola 9, 16 i 25. Ponieważ 9 + 16 = 25, liczby 3, 4 i 5 tworzą trójkę pitagorejską.",
          },
        },
        "sec-pythagorean": {
          "h2": "Zrozumienie Twierdzenia Pitagorasa",
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie stojące za każdą trójką: kwadraty przyprostokątnych sumują się do kwadratu przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Twierdzenie Pitagorasa mówi, że w każdym trójkącie prostokątnym kwadrat przeciwprostokątnej jest równy sumie kwadratów pozostałych dwóch boków. Przy przyprostokątnych [[a]] i [[b]] oraz przeciwprostokątnej [[c]] twierdzenie wygląda następująco.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Jeden jasny sposób, aby to zobaczyć, to pola. Narysuj kwadrat na każdym boku trójkąta. Kwadrat na przyprostokątnej [[a]] ma pole [[a^2]], kwadrat na przyprostokątnej [[b]] ma pole [[b^2]], a kwadrat na przeciwprostokątnej ma pole [[c^2]]. Twierdzenie mówi, że pierwsze dwa pola sumują się do trzeciego. Dla trójkąta [[3]]-[[4]]-[[5]] kwadraty mają pola [[9]], [[16]] i [[25]], a [[9+16=25]] pokazuje tę równowagę bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Ten obraz pól wyjaśnia też, dlaczego [[3]]-[[4]]-[[5]] jest prawidłowym trójkątem prostokątnym. Jego długości boków spełniają równowagę pól dokładnie, więc kąt między przyprostokątnymi musi być kątem prostym. Każda trójka pitagorejska spełnia twierdzenie, ponieważ trójka jest zdefiniowana przez to równanie. Odwrotna zależność nie jest prawdziwa: wiele trójkątów prostokątnych ma długości boków, które nie są liczbami całkowitymi, więc spełniają twierdzenie, nie będąc trójkami. Użyj <a href=\"/pythagorean-theorem-calculator/\">kalkulatora twierdzenia Pitagorasa</a>, gdy trójkąt ma dziesiętne lub nieznane boki zamiast całkowitych trójek.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Trójkąt prostokątny ABC o przyprostokątnych a równa się 3 i b równa się 4, przeciwprostokątnej c równa się 5, znaczniku kąta prostego oraz wzorze a kwadrat plus b kwadrat równa się c kwadrat",
            "caption": "Trójkąt prostokątny ABC o przyprostokątnych a = 3 i b = 4 oraz przeciwprostokątnej c = 5. Znacznik kąta prostego znajduje się przy C, a 3 do kwadratu plus 4 do kwadratu równa się 5 do kwadratu.",
          },
        },
        "sec-check": {
          "h2": "Jak Sprawdzić, Czy Trzy Liczby Tworzą Trójkę Pitagorejską",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem krótkich kroków zamienia dowolne trzy liczby całkowite w jasne tak lub nie.",
            },
            {
              "kind": "steps",
              "steps": [
                "Określ największą z trzech wartości.",
                "Przypisz największą wartość do [[c]], przeciwprostokątnej.",
                "Przypisz pozostałe dwie wartości do [[a]] i [[b]], przyprostokątnych.",
                "Podnieś [[a]] do kwadratu.",
                "Podnieś [[b]] do kwadratu.",
                "Dodaj dwa kwadraty.",
                "Podnieś [[c]] do kwadratu.",
                "Porównaj oba wyniki: równość oznacza prawidłową trójkę, nierówność oznacza, że to nie trójka.",
              ],
            },
            {
              "kind": "p",
              "text": "Oto prawidłowy przykład. Sprawdź [[7]], [[24]] i [[25]]: największa wartość to [[25]], więc jest przeciwprostokątną. Podnieś przyprostokątne do kwadratu i dodaj.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[625=625]], obie strony są równe, więc [[(7, 24, 25)]] jest prawidłową trójką pitagorejską. Jest też pierwotna, ponieważ [[7]], [[24]] i [[25]] nie mają wspólnego dzielnika większego od [[1]].",
            },
            {
              "kind": "p",
              "text": "Teraz przykład nieprawidłowy. Sprawdź [[4]], [[5]] i [[6]]: największa wartość to [[6]], więc jest przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[41]] nie jest równe [[36]], wartości nie tworzą trójki pitagorejskiej. Te same osiem kroków działa dla dowolnych dodatnich danych całkowitych, dużych czy małych, więc dokładna weryfikacja nigdy nie zależy od pamięci ani zgadywania.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Przepływ krok po kroku sprawdzania liczb 7, 24, 25: podniesienie przyprostokątnych do kwadratu daje 49 i 576, dodanie daje 625, podniesienie przeciwprostokątnej do kwadratu daje 625 i potwierdzenie równości",
            "caption": "Sprawdzanie liczb 7, 24, 25 krok po kroku: 49 + 576 = 625, a 25 do kwadratu = 625, więc obie strony są równe i trójka jest prawidłowa.",
          },
        },
        "sec-euclid": {
          "h2": "Jak Generować Trójki Pitagorejskie za Pomocą Wzoru Euklidesa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie małe liczby całkowite na wejściu, pełna trójka na wyjściu: to właśnie wzór Euklidesa.",
            },
            {
              "kind": "p",
              "text": "Wzór Euklidesa buduje trójkę pitagorejską z dwóch dodatnich liczb całkowitych, [[m]] i [[n]], przy czym [[m]] jest większe od [[n]]. Parametr [[m]] to większa liczba całkowita, a [[n]] to mniejsza, i obie muszą być liczbami całkowitymi. Trzy wzory dają dwie przyprostokątne i przeciwprostokątną.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Warunek [[m>n>0]] ma znaczenie. Jeśli [[m]] jest równe [[n]], pierwsza przyprostokątna staje się zerowa, co nie jest bokiem trójkąta. Jeśli [[m]] jest mniejsze od [[n]], pierwsza przyprostokątna staje się ujemna, co również jest niemożliwe. Dziesiętne wartości [[m]] i [[n]] również nie są tu dopuszczalne, ponieważ wzór jest przeznaczony dla parametrów całkowitych, które dają całkowite boki.",
            },
            {
              "kind": "p",
              "text": "Spróbuj [[m=2]] i [[n=1]]. Pierwsza przyprostokątna to [[a=2^2-1^2=4-1=3]], druga przyprostokątna to [[b=2(2)(1)=4]], a przeciwprostokątna to [[c=2^2+1^2=4+1=5]]. Wynikiem jest trójka [[(3, 4, 5)]]. Zauważ, że wygenerowane przyprostokątne mogą występować w dowolnej kolejności: wzór może zwrócić większą przyprostokątną jako pierwszą lub drugą, ale [[c]] zawsze jest przeciwprostokątną. Następna sekcja dowodzi, dlaczego te wzory zawsze spełniają twierdzenie Pitagorasa.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Schemat blokowy wzoru Euklidesa z m równa się 3 i n równa się 2, dający 5, 12 i 13",
            "caption": "Wzór Euklidesa przy m = 3 i n = 2: m do kwadratu minus n do kwadratu to 5, 2mn to 12, a m do kwadratu plus n do kwadratu to 13, co daje trójkę 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Matematyczny Dowód Wzoru Euklidesa",
          "blocks": [
            {
              "kind": "p",
              "text": "Krótki dowód algebraiczny pokazuje, dlaczego wzór Euklidesa nigdy nie zawodzi.",
            },
            {
              "kind": "p",
              "text": "Zacznij od dwóch wzorów na przyprostokątne, [[a=m^2-n^2]] i [[b=2mn]], i sprawdź, czy [[a^2+b^2]] jest równe [[c^2]], gdy [[c=m^2+n^2]]. Podstaw wzory do lewej strony równania Pitagorasa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Rozwiń oba kwadraty. Pierwszy kwadrat rozwija się do [[m^4-2m^2n^2+n^4]], a drugi do [[4m^2n^2]], więc suma staje się następującym wyrażeniem.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Połącz środkowe wyrazy: [[-2m^2n^2+4m^2n^2]] to [[+2m^2n^2]]. Wyrażenie jest teraz kwadratem doskonałym w przebraniu.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Rozłóż je na czynniki. Wynikiem jest kwadrat [[m^2+n^2]], co jest dokładnie [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[c=m^2+n^2]], prawa strona to [[c^2]], a dowód jest kompletny.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kluczowy krok to częściowe skracanie się wyrazów środkowych: [[-2m^2n^2]] z pierwszego kwadratu i [[+4m^2n^2]] z drugiego pozostawiają dokładnie [[+2m^2n^2]] potrzebne do dopełnienia kwadratu. Ponieważ działa to dla dowolnych liczb całkowitych [[m]] i [[n]] przy [[m>n>0]], każda para generuje prawdziwą trójkę pitagorejską. Dowód nic nie mówi o pierwotności: to, czy wynik jest pierwotny, zależy od dodatkowych warunków w poniższych sekcjach.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Czym Jest Pierwotna Trójka Pitagorejska?",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójka pierwotna to trójka w najprostszej formie, bez wspólnego dzielnika.",
            },
            {
              "kind": "p",
              "text": "Pierwotna trójka pitagorejska to taka, której trzy długości boków nie mają wspólnego dodatniego dzielnika całkowitego większego od [[1]]. W zapisie symbolicznym największy wspólny dzielnik trzech boków wynosi [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Trójka [[(3, 4, 5)]] jest pierwotna, ponieważ [[\\gcd(3,4,5)=1]]: żadna liczba całkowita większa od [[1]] nie dzieli wszystkich trzech liczb. To samo dotyczy [[(5, 12, 13)]], [[(8, 15, 17)]] i [[(7, 24, 25)]]. Każda z nich jest trójką bazową, której nie można zmniejszyć do mniejszej całkowitej trójki poprzez dzielenie.",
            },
            {
              "kind": "p",
              "text": "Pierwotna nie oznacza, że trójka jest najmniejsza możliwa w każdym sensie. Oznacza jedynie, że trzy wartości nie mają wspólnego dzielnika innego niż [[1]]. Duża pierwotna trójka, taka jak [[(20, 21, 29)]], jest nadal pierwotna, ponieważ [[20]], [[21]] i [[29]] nie mają wspólnego dzielnika. Poniższa tabela porównuje dzielniki trójki pierwotnej i przeskalowanej kopii.",
            },
          ],
          "table": {
            "headers": [
              "Trójka",
              "Wspólne dzielniki",
              "Pierwotna?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Tak",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Tak",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Tak",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Nie",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Nie",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Dwa trójkąty prostokątne, 3-4-5 i 6-8-10, pokazujące, że drugi jest dwukrotnie większy od pierwszego i tylko pierwszy jest pierwotny",
            "caption": "Trójkąt 3-4-5 jest pierwotny, natomiast 6-8-10 jest dwukrotnie większy pod każdym względem: gcd(3, 4, 5) = 1, ale gcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Czym Jest Niepierwotna Trójka Pitagorejska?",
          "blocks": [
            {
              "kind": "p",
              "text": "Niepierwotna trójka to przeskalowana kopia pierwotnej.",
            },
            {
              "kind": "p",
              "text": "Niepierwotna trójka pitagorejska to trójka, której trzy wartości mają wspólny dzielnik całkowity większy od [[1]]. Nadal jest prawidłową trójką, ponieważ dokładnie spełnia [[a^2+b^2=c^2]]. Po prostu nie jest w najprostszej formie.",
            },
            {
              "kind": "p",
              "text": "Zacznij od pierwotnej trójki [[(3, 4, 5)]] i pomnóż każdy bok przez [[2]]. Wynikiem jest [[(6, 8, 10)]], a sprawdzenie nadal działa: [[36+64=100]]. Pomnóż zamiast tego przez [[3]], a wynikiem będzie [[(9, 12, 15)]], przy czym [[81+144=225]]. Obie przeskalowane trójki są prawidłowe i żadna nie jest pierwotna, ponieważ pierwsza ma wspólny dzielnik [[2]], a druga wspólny dzielnik [[3]].",
            },
            {
              "kind": "p",
              "text": "Znalezienie wspólnego dzielnika jest proste: weź największy wspólny dzielnik trzech boków. Dla [[(6, 8, 10)]] wynosi on [[2]]; dla [[(9, 12, 15)]] wynosi [[3]]. Podzielenie każdego boku przez ten dzielnik odtwarza pierwotną trójkę znajdującą się pod spodem. Zatem [[(6, 8, 10)]] podzielone przez [[2]] daje z powrotem [[(3, 4, 5)]], a [[(9, 12, 15)]] podzielone przez [[3]] również daje [[(3, 4, 5)]]. Każda niepierwotna trójka sprowadza się w ten sposób do dokładnie jednej pierwotnej trójki.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Warunki Generowania Pierwotnych Trójek Pitagorejskich",
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór Euklidesa daje pierwotną trójkę tylko wtedy, gdy oba warunki parametrów są spełnione.",
            },
            {
              "kind": "p",
              "text": "Dwa warunki dotyczące [[m]] i [[n]] decydują, czy wzór Euklidesa daje pierwotną trójkę. Oba muszą być spełnione jednocześnie i żaden sam w sobie nie wystarcza.",
            },
            {
              "kind": "h3",
              "text": "Warunek 1: Względnie pierwsze parametry",
            },
            {
              "kind": "p",
              "text": "Parametry muszą być względnie pierwsze, co oznacza, że nie mają wspólnego dzielnika większego od [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Gdy [[m]] i [[n]] mają wspólny dzielnik, ten dzielnik przenika do wszystkich trzech wygenerowanych boków. Na przykład [[m=4]] i [[n=2]] mają wspólny dzielnik [[2]], a wzór daje [[(12, 16, 20)]], których boki wszystkie mają wspólny dzielnik [[4]]. Wynik jest niepierwotny.",
            },
            {
              "kind": "h3",
              "text": "Warunek 2: Przeciwna parzystość",
            },
            {
              "kind": "p",
              "text": "Jeden parametr musi być parzysty, a drugi nieparzysty. Gdy oba parametry są nieparzyste, wygenerowane przyprostokątne i przeciwprostokątna wszystkie wychodzą parzyste, więc trójka ma wspólny dzielnik [[2]] i nie może być pierwotna. Na przykład [[m=3]] i [[n=1]] są względnie pierwsze, ale oba nieparzyste, a wzór daje [[(8, 6, 10)]], co jest niepierwotną trójką [[(6, 8, 10)]] z przyprostokątnymi w innej kolejności.",
            },
            {
              "kind": "p",
              "text": "Trzy pary parametrów pokazują, jak warunki działają razem. Para [[(2, 1)]] jest względnie pierwsza o przeciwnej parzystości i daje pierwotną trójkę [[(3, 4, 5)]]. Para [[(3, 2)]] jest względnie pierwsza o przeciwnej parzystości i daje pierwotną trójkę [[(5, 12, 13)]]. Para [[(3, 1)]] jest względnie pierwsza, ale oba parametry są nieparzyste, więc daje niepierwotną trójkę [[(6, 8, 10)]]. Względna pierwszość bez przeciwnej parzystości nie wystarcza, a przeciwna parzystość bez względnej pierwszości również nie wystarcza.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Dwa przykłady parametrów: m równa się 3 i n równa się 2 dają pierwotną trójkę 5-12-13, natomiast m równa się 3 i n równa się 1 dają niepierwotną trójkę 6-8-10",
            "caption": "Parametry m = 3, n = 2 są względnie pierwsze i mają przeciwną parzystość, więc dają pierwotną trójkę 5-12-13. Parametry m = 3, n = 1 są oba nieparzyste i dają niepierwotną trójkę 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Różnica Między Trójkami Pierwotnymi a Niepierwotnymi",
          "blocks": [
            {
              "kind": "p",
              "text": "To samo twierdzenie, inna forma: jedna tabela podsumowuje całe rozróżnienie.",
            },
            {
              "kind": "p",
              "text": "Oba rodzaje trójek dokładnie spełniają twierdzenie Pitagorasa, więc oba opisują prawdziwe trójkąty prostokątne. Różnica dotyczy jedynie wspólnych dzielników i sposobu, w jaki trójka powstała. Trójka pierwotna to wzorzec bazowy; trójka niepierwotna to zwykle jego wielokrotność.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "Pierwotna",
              "Niepierwotna",
            ],
            "rows": [
              [
                "Wspólny dzielnik",
                "Tylko [[1]]",
                "Większy od [[1]]",
              ],
              [
                "Długości boków",
                "Nie można sprowadzić do mniejszej trójki całkowitej",
                "Można podzielić przez wspólny dzielnik",
              ],
              [
                "Przykład",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Generowanie",
                "Względnie pierwsze [[m]], [[n]] o przeciwnej parzystości",
                "Inne kombinacje parametrów lub wielokrotności całkowite",
              ],
              [
                "Zależność",
                "Bazowa trójka całkowita",
                "Często wielokrotność trójki pierwotnej",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Jak Generować Więcej Trójek Poprzez Skalowanie Istniejących",
          "blocks": [
            {
              "kind": "p",
              "text": "Pomnóż każdy bok przez tę samą liczbę całkowitą, a trójka pozostanie prawidłowa.",
            },
            {
              "kind": "p",
              "text": "Dla dowolnej dodatniej liczby całkowitej [[k]] pomnożenie każdego boku trójki pitagorejskiej [[(a, b, c)]] przez [[k]] daje kolejną trójkę pitagorejską, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Powód jest prosty algebraicznie. Podniesienie przeskalowanych przyprostokątnych do kwadratu daje [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], a wyciągnięcie [[k^2]] przed nawias daje [[k^2(a^2+b^2)]]. Ponieważ pierwotna trójka spełnia [[a^2+b^2=c^2]], przeskalowana suma jest równa [[k^2c^2]], czyli [[(kc)^2]]. Przeskalowana trójka spełnia więc twierdzenie dokładnie.",
            },
            {
              "kind": "p",
              "text": "Przeskalowanie [[(3, 4, 5)]] przez [[2]] daje [[(6, 8, 10)]], a przeskalowanie przez [[3]] daje [[(9, 12, 15)]]. Przeskalowanie [[(5, 12, 13)]] przez [[2]] daje [[(10, 24, 26)]], a przeskalowanie [[(8, 15, 17)]] przez [[3]] daje [[(24, 45, 51)]]. Każdy wynik jest prawidłową trójką i każdy jest niepierwotny, ponieważ mnożnik staje się wspólnym dzielnikiem wszystkich trzech boków.",
            },
            {
              "kind": "p",
              "text": "Mnożnik całkowity zachowuje całkowite długości boków, dlatego skalowanie jest niezawodnym sposobem budowania nowych trójek. Dowolny rzeczywisty mnożnik, taki jak [[1.5]], zachowuje trójkąt prostokątny o tym samym kształcie, ale boki mogą przestać być liczbami całkowitymi: [[(3, 4, 5)]] przeskalowane przez [[1.5]] daje [[(4.5, 6, 7.5)]], co jest trójkątem prostokątnym, ale nie trójką pitagorejską. Zauważ, że sam kalkulator nie ma osobnego pola mnożnika; skalowanie to ręczne obliczenie, które wykonujesz z trójkami, które on sprawdza lub generuje.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Trójka 3-4-5 pomnożona przez 2, 3 i 4, dająca 6-8-10, 9-12-15 i 12-16-20",
            "caption": "Przeskalowanie 3-4-5 przez 2, 3 i 4 daje 6-8-10, 9-12-15 i 12-16-20. Każdy przeskalowany zestaw nadal jest prawidłową trójką pitagorejską.",
          },
        },
        "sec-examples": {
          "h2": "Typowe Przykłady Trójek Pitagorejskich",
          "blocks": [
            {
              "kind": "p",
              "text": "Dziesięć trójek wartych zapamiętania na pamięć, każda zweryfikowana.",
            },
            {
              "kind": "p",
              "text": "Poniższa tabela zawiera dziesięć znanych trójek pitagorejskich. Każdy wiersz został sprawdzony względem twierdzenia Pitagorasa, a każdy wiersz jest pierwotny, chyba że zaznaczono przeskalowaną wielokrotność. Przyprostokątne w każdym wierszu można podawać w dowolnej kolejności: [[(4, 3, 5)]] to ten sam trójkąt co [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Pierwsza przyprostokątna",
              "Druga przyprostokątna",
              "Przeciwprostokątna",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Trzy trójkąty prostokątne narysowane w skali: 3-4-5, 5-12-13 i 8-15-17, pokazujące różne kształty",
            "caption": "Trzy pierwotne trójki narysowane w skali: 3-4-5, 5-12-13 i 8-15-17. Każda ma inny kształt i inne kąty ostre.",
          },
        },
        "sec-worked": {
          "h2": "Rozwiązane Przykłady Krok po Kroku z Użyciem Kalkulatora",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem przykładów obejmujących oba tryby: cztery sprawdzenia i cztery generowania.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Sprawdź 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[a=3]], [[b=4]] i [[c=5]] w trybie sprawdzania. Podnieś przyprostokątne do kwadratu i dodaj: [[3^2+4^2=9+16=25]]. Podnieś przeciwprostokątną do kwadratu: [[5^2=25]]. Ponieważ [[25=25]], wynikiem jest prawidłowa trójka. Jest pierwotna, ponieważ [[3]], [[4]] i [[5]] nie mają wspólnego dzielnika.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Sprawdź 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[a=5]], [[b=12]] i [[c=13]]. Przyprostokątne dają [[5^2+12^2=25+144=169]], a przeciwprostokątna daje [[13^2=169]]. Ponieważ [[169=169]], wynikiem jest prawidłowa trójka. Jest pierwotna, ponieważ [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Sprawdź 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[a=6]], [[b=8]] i [[c=10]]. Przyprostokątne dają [[6^2+8^2=36+64=100]], a przeciwprostokątna daje [[10^2=100]]. Ponieważ [[100=100]], wynikiem jest prawidłowa trójka. Jest niepierwotna, ponieważ wszystkie trzy boki mają wspólny dzielnik [[2]]; podzielenie przez [[2]] daje z powrotem pierwotną trójkę [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Sprawdź 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[a=7]], [[b=24]] i [[c=25]]. Przyprostokątne dają [[7^2+24^2=49+576=625]], a przeciwprostokątna daje [[25^2=625]]. Ponieważ [[625=625]], wynikiem jest prawidłowa trójka. Jest pierwotna, ponieważ [[7]], [[24]] i [[25]] nie mają wspólnego dzielnika.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Generowanie przy m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[m=2]] i [[n=1]] w trybie generowania. Pierwsza przyprostokątna to [[a=2^2-1^2=3]], druga przyprostokątna to [[b=2(2)(1)=4]], a przeciwprostokątna to [[c=2^2+1^2=5]]. Wynikiem jest [[(3, 4, 5)]], trójka pierwotna.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Generowanie przy m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[m=3]] i [[n=2]]. Pierwsza przyprostokątna to [[a=3^2-2^2=9-4=5]], druga przyprostokątna to [[b=2(3)(2)=12]], a przeciwprostokątna to [[c=3^2+2^2=13]]. Wynikiem jest [[(5, 12, 13)]], trójka pierwotna, ponieważ [[3]] i [[2]] są względnie pierwsze i mają przeciwną parzystość.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Generowanie przy m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[m=4]] i [[n=1]]. Wzory dają [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] i [[c=4^2+1^2=17]]. Wymieniona z przyprostokątnymi w kolejności rosnącej, wynikiem jest [[(8, 15, 17)]]. Jest pierwotna, ponieważ [[4]] i [[1]] są względnie pierwsze i mają przeciwną parzystość.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Generowanie przy m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Wprowadź [[m=3]] i [[n=1]]. Wzory dają [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] i [[c=3^2+1^2=10]]. Wymieniona z przyprostokątnymi w kolejności rosnącej, wynikiem jest [[(6, 8, 10)]]. Ta trójka jest niepierwotna: [[3]] i [[1]] są względnie pierwsze, ale obie są nieparzyste, więc warunek przeciwnej parzystości nie jest spełniony i każdy bok wychodzi parzysty. Podzielenie przez [[2]] daje z powrotem pierwotną trójkę [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Dlaczego Istnieje Nieskończenie Wiele Trójek Pitagorejskich?",
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór Euklidesa nigdy nie wyczerpuje danych wejściowych, więc nigdy nie wyczerpuje trójek.",
            },
            {
              "kind": "p",
              "text": "Wzór Euklidesa przyjmuje dowolną parę dodatnich liczb całkowitych [[m]] i [[n]], przy czym [[m]] jest większe od [[n]], a takich par jest nieskończenie wiele. Każda nowa para daje trójkę, a różne pary zazwyczaj dają różne trójki. Pary [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] i [[(5, 2)]] dają odpowiednio [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] i [[(20, 21, 29)]], a lista ciągnie się dalej: [[(5, 4)]] daje [[(9, 40, 41)]], a [[(6, 1)]] daje [[(12, 35, 37)]]. Większe wartości [[m]] wciąż dają coraz większe trójki bez końca.",
            },
            {
              "kind": "p",
              "text": "Wielokrotności całkowite dodają jeszcze więcej. Każda pierwotna trójka generuje całą rodzinę przeskalowanych kopii: sama [[(3, 4, 5)]] daje [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] i tak dalej w nieskończoność. Między nieskończonymi parami parametrów a nieskończonymi wielokrotnościami zapas trójek pitagorejskich jest nieskończony. Zauważ dokładne sformułowanie: nie każda para parametrów daje pierwotną trójkę, ale każda para daje prawidłową trójkę, a pierwotnych też jest nieskończenie wiele.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Jak Rozpoznać Trójkę Pitagorejską Bez Zgadywania",
          "blocks": [
            {
              "kind": "p",
              "text": "Kilka nawyków sprawia, że znajome trójki rzucają się w oczy, zanim zaczniesz liczyć.",
            },
            {
              "kind": "p",
              "text": "Zacznij od potraktowania największej wartości jako przeciwprostokątnej i porównania wartości podniesionych do kwadratu, dokładnie tak, jak opisują to kroki sprawdzania. Z praktyką typowe trójki stają się znajome: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] i [[7]]-[[24]]-[[25]] pojawiają się tak często w podręcznikach i na egzaminach, że ich rozpoznawanie oszczędza sporo czasu.",
            },
            {
              "kind": "p",
              "text": "Następnie szukaj wspólnych dzielników. Jeśli wszystkie trzy liczby są parzyste, podziel przez [[2]] i zobacz, co zostanie. Zestaw [[6]]-[[8]]-[[10]] jest natychmiast rozpoznawalny jako dwukrotność [[3]]-[[4]]-[[5]], gdy tylko zauważy się dzielnik [[2]]. Sprowadzenie niepierwotnej trójki do jej pierwotnej formy często ujawnia znajomy wzorzec ukryty za większymi liczbami.",
            },
            {
              "kind": "p",
              "text": "Gdy potrzebujesz nowej trójki, a nie sprawdzenia, wzór Euklidesa jest niezawodną drogą: wybierz małe wartości [[m]] i [[n]] i generuj. Rozpoznawanie to pomocny skrót, ale dokładna weryfikacja zawsze jest ostatnim słowem. Trójka, która wygląda znajomo, nadal zasługuje na test podniesienia do kwadratu i porównania, zanim na niej polegasz.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Trójki Pitagorejskie a Zwykłe Trójkąty Prostokątne",
          "blocks": [
            {
              "kind": "p",
              "text": "Każda trójka to trójkąt prostokątny, ale większość trójkątów prostokątnych to nie trójki.",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny może mieć całkowite długości boków, dziesiętne długości boków lub niewymierne długości boków. Tylko pierwsza kategoria może utworzyć trójkę pitagorejską. Trójka [[(3, 4, 5)]] to całkowity trójkąt prostokątny i kwalifikuje się. Trójkąt o przyprostokątnych [[1]] i [[1]] oraz przeciwprostokątnej [[\\sqrt{2}]] jest prawdziwym trójkątem prostokątnym, ponieważ [[1+1=2]], ale jego przeciwprostokątna jest niewymierna, więc nie jest trójką. Trójkąt o bokach [[3]], [[4]] i [[5.1]] nie spełnia równania, ponieważ [[9+16=25]], a [[5.1^2=26.01]], więc nie jest nawet trójkątem prostokątnym.",
            },
            {
              "kind": "p",
              "text": "To rozróżnienie ma znaczenie w praktyce. Budowlańcy używają [[3]]-[[4]]-[[5]], ponieważ liczby całkowite łatwo zmierzyć taśmą. Trójkąt o bokach [[3]], [[4]] i [[5.1]] wygląda prawie prawidłowo, ale różni się widocznym kątem i żaden całkowity test by go nie przepuścił. Twierdzenie Pitagorasa stosuje się do wszystkich trójkątów prostokątnych, niezależnie od długości ich boków. Termin trójka pitagorejska odnosi się wyłącznie do dodatnich rozwiązań całkowitych, a to wąskie znaczenie sprawia, że trójki są wyjątkowe.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Typowe Błędy Przy Korzystaniu z Kalkulatora Trójek Pitagorejskich",
          "blocks": [
            {
              "kind": "p",
              "text": "Piętnaście błędów, każdy z poprawką obok.",
            },
            {
              "kind": "list",
              "items": [
                "Wprowadzanie [[c]] jako mniejszego boku: przeciwprostokątna musi być największą wartością, więc przed sprawdzeniem zawsze przypisz największą liczbę do [[c]].",
                "Zapominanie o podniesieniu wartości do kwadratu: twierdzenie porównuje kwadraty, a nie same długości boków, więc najpierw podnieś [[a]], [[b]] i [[c]] do kwadratu.",
                "Dodawanie boków zamiast ich kwadratów: [[a+b]] to zła suma; sprawdzenie wymaga [[a^2+b^2]] względem [[c^2]].",
                "Używanie [[a+b=c]] zamiast [[a^2+b^2=c^2]]: zwykła suma dwóch boków nigdy nie jest równa przeciwprostokątnej w trójkącie prostokątnym.",
                "Mylenie przeciwprostokątnej z przyprostokątną: przeciwprostokątna leży naprzeciw kąta prostego i zawsze jest najdłuższym bokiem.",
                "Używanie wartości dziesiętnych i oczekiwanie trójki całkowitej: liczby dziesiętne mogą utworzyć trójkąt prostokątny, ale tylko dodatnie liczby całkowite tworzą trójkę pitagorejską.",
                "Wprowadzanie zerowych lub ujemnych długości boków: długości boków muszą być dodatnie, a zerowe lub ujemne dane wejściowe są odrzucane.",
                "Używanie [[m]] równego [[n]]: pierwsza przyprostokątna staje się [[m^2-n^2=0]], co nie jest bokiem trójkąta.",
                "Używanie [[m]] mniejszego od [[n]]: pierwsza przyprostokątna staje się ujemna, co jest niemożliwe dla długości boku.",
                "Wprowadzanie dziesiętnych wartości [[m]] i [[n]]: wzór Euklidesa potrzebuje dodatnich parametrów całkowitych, aby dać całkowite boki.",
                "Zakładanie, że każda wygenerowana trójka jest pierwotna: generowanie gwarantuje jedynie prawidłową trójkę, a pierwotność wymaga względnie pierwszych parametrów o przeciwnej parzystości.",
                "Zakładanie, że wszystkie pierwotne trójki są wielokrotnościami [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] i [[8]]-[[15]]-[[17]] to niezależne pierwotne trójki, a nie wielokrotności [[3]]-[[4]]-[[5]].",
                "Zapominanie o warunku przeciwnej parzystości: dwa nieparzyste parametry dają parzystą, niepierwotną trójkę, jak pokazują [[m=3]], [[n=1]].",
                "Zapominanie o sprawdzeniu wspólnych dzielników: trójka taka jak [[(12, 16, 20)]] wygląda na nową, dopóki wspólny dzielnik [[4]] nie ujawni, że jest przeskalowaną [[(3, 4, 5)]].",
                "Mylenie prawidłowego trójkąta prostokątnego z całkowitą trójką pitagorejską: trójkąt o niewymiernych lub dziesiętnych bokach może spełniać twierdzenie, nie będąc trójką.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania Ćwiczeniowe z Odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Osiem zadań, cztery sprawdzenia i cztery generowania, z pełnymi rozwiązaniami.",
            },
            {
              "kind": "list",
              "items": [
                "Sprawdź, czy [[8]], [[15]] i [[17]] tworzą trójkę. Odpowiedź: tak, pierwotną. [[8^2+15^2=64+225=289=17^2]], a trzy liczby nie mają wspólnego dzielnika.",
                "Sprawdź, czy [[6]], [[8]] i [[11]] tworzą trójkę. Odpowiedź: nie. [[6^2+8^2=36+64=100]], ale [[11^2=121]], więc obie strony różnią się.",
                "Określ, czy [[9]], [[12]] i [[15]] są pierwotne. Odpowiedź: niepierwotne. Liczby mają wspólny dzielnik [[3]], a podzielenie przez [[3]] daje pierwotną trójkę [[(3, 4, 5)]].",
                "Wygeneruj trójkę, używając [[m=2]] i [[n=1]]. Odpowiedź: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Wygeneruj trójkę, używając [[m=3]] i [[n=2]]. Odpowiedź: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Wygeneruj trójkę, używając [[m=4]] i [[n=1]]. Odpowiedź: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], przy przyprostokątnych posortowanych rosnąco.",
                "Określ, czy [[m=3]] i [[n=1]] dają pierwotną trójkę. Odpowiedź: nie. Parametry są względnie pierwsze, ale oba nieparzyste, więc wynikiem jest niepierwotna trójka [[(6, 8, 10)]].",
                "Znajdź wspólny mnożnik między [[3]]-[[4]]-[[5]] a [[15]]-[[20]]-[[25]]. Odpowiedź: [[5]]. Każdy bok [[(3, 4, 5)]] pomnożony przez [[5]] daje [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Powiązane Kalkulatory Trójkątów Prostokątnych",
      "relatedIntro": "Każdy poniższy kalkulator obsługuje inne zadanie związane z trójkątem prostokątnym, więc wybierz narzędzie odpowiadające pomiarowi, którego potrzebujesz.",
      "relatedItems": [
        "Kalkulator Trójkąta Prostokątnego",
        "Kalkulator Twierdzenia Pitagorasa",
        "Kalkulator Trójkąta 3-4-5",
        "Kalkulator Trójkąta 5-12-13",
        "Kalkulator Boku Trójkąta Prostokątnego",
        "Kalkulator Specjalnego Trójkąta Prostokątnego",
      ],
      "faqHeading": "Najczęściej Zadawane Pytania",
      "faqs": [
        {
          "question": "Czym jest trójka pitagorejska?",
          "answer": "Trójka pitagorejska to zbiór trzech dodatnich liczb całkowitych, zapisanych jako [[(a, b, c)]], które spełniają równanie [[a^2+b^2=c^2]]. Dwie mniejsze liczby to przyprostokątne trójkąta prostokątnego, a największa to przeciwprostokątna. Najbardziej znanym przykładem jest [[(3, 4, 5)]], ponieważ [[9+16=25]].",
        },
        {
          "question": "Jak działa Kalkulator Trójek Pitagorejskich?",
          "answer": "Ma dwa tryby. Tryb sprawdzania przyjmuje trzy liczby całkowite i testuje, czy zachodzi [[a^2+b^2=c^2]]. Tryb generowania przyjmuje dwie liczby całkowite, [[m]] i [[n]], i stosuje wzór Euklidesa, aby zbudować nową trójkę. Oba tryby pokazują rozwiązanie krok po kroku wraz z wynikiem.",
        },
        {
          "question": "Jak mogę sprawdzić, czy trzy liczby tworzą trójkę pitagorejską?",
          "answer": "Weź największą wartość jako przeciwprostokątną [[c]], a pozostałe dwie jako przyprostokątne [[a]] i [[b]]. Podnieś wszystkie trzy do kwadratu, dodaj [[a^2+b^2]] i porównaj z [[c^2]]. Równe sumy oznaczają prawidłową trójkę; nierówne sumy oznaczają, że liczby jej nie tworzą.",
        },
        {
          "question": "Czym jest wzór Euklidesa?",
          "answer": "Wzór Euklidesa generuje trójkę pitagorejską z dwóch dodatnich liczb całkowitych, [[m]] i [[n]], przy czym [[m]] jest większe od [[n]]. Wzory to [[a=m^2-n^2]], [[b=2mn]] i [[c=m^2+n^2]]. Każda para daje prawidłową trójkę, jak pokazuje dowód algebraiczny na tej stronie.",
        },
        {
          "question": "Czym są m i n we wzorze na trójkę pitagorejską?",
          "answer": "Wartości [[m]] i [[n]] to dodatnie parametry całkowite we wzorze Euklidesa. Wartość [[m]] to większa liczba całkowita, a [[n]] to mniejsza, przy czym [[m>n>0]]. Większe wartości [[m]] dają większe trójki, a różne pary dają różne trójki.",
        },
        {
          "question": "Czym jest pierwotna trójka pitagorejska?",
          "answer": "Trójka pierwotna to taka, której trzy długości boków nie mają wspólnego dzielnika większego od [[1]], więc [[\\gcd(a,b,c)=1]]. Przykłady to [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] i [[(7, 24, 25)]]. Trójek pierwotnych nie można sprowadzić do mniejszej całkowitej trójki.",
        },
        {
          "question": "Czym jest niepierwotna trójka pitagorejska?",
          "answer": "Niepierwotna trójka to prawidłowa trójka, której trzy boki mają wspólny dzielnik większy od [[1]]. Na przykład [[(6, 8, 10)]] to dwukrotność [[(3, 4, 5)]], a [[(9, 12, 15)]] to trzykrotność [[(3, 4, 5)]]. Podzielenie przez wspólny dzielnik daje z powrotem pierwotną trójkę znajdującą się pod spodem.",
        },
        {
          "question": "Skąd wiem, czy wygenerowana trójka jest pierwotna?",
          "answer": "Sprawdź dwa warunki parametrów: [[m]] i [[n]] muszą być względnie pierwsze, więc [[\\gcd(m,n)=1]], i muszą mieć przeciwną parzystość, więc jedna jest parzysta, a druga nieparzysta. Jeśli oba warunki są spełnione, wygenerowana trójka jest pierwotna. Jeśli którykolwiek zawiedzie, jest niepierwotna.",
        },
        {
          "question": "Czy liczby dziesiętne mogą tworzyć trójkę pitagorejską?",
          "answer": "Nie. Trójka pitagorejska jest zdefiniowana jako trzy dodatnie liczby całkowite, więc dziesiętne długości boków nigdy się nie kwalifikują. Liczby dziesiętne mogą nadal utworzyć trójkąt prostokątny spełniający [[a^2+b^2=c^2]], taki jak przyprostokątne [[1.5]] i [[2]] z przeciwprostokątną [[2.5]], ale ten trójkąt nie jest trójką pitagorejską.",
        },
        {
          "question": "Czy istnieje nieskończenie wiele trójek pitagorejskich?",
          "answer": "Tak. Wzór Euklidesa przyjmuje nieskończenie wiele par całkowitych [[(m, n)]], a każda para daje trójkę. Wielokrotności całkowite dodają więcej: każda pierwotna trójka generuje niekończącą się rodzinę przeskalowanych kopii. Zapas trójek nigdy się nie kończy.",
        },
        {
          "question": "Czy każdą trójkę pitagorejską można wygenerować za pomocą wzoru Euklidesa?",
          "answer": "Tak, każda pierwotna trójka pochodzi ze wzoru Euklidesa przy odpowiednich względnie pierwszych parametrach o przeciwnej parzystości, a każda niepierwotna trójka jest wielokrotnością pierwotnej. Zatem każdą trójkę pitagorejską można uzyskać poprzez wzór Euklidesa oraz skalowanie przez dodatnią liczbę całkowitą.",
        },
        {
          "question": "Jaka jest najczęstsza trójka pitagorejska?",
          "answer": "Trójka [[(3, 4, 5)]] jest najczęstsza i najbardziej znana. Jest najmniejszą pierwotną trójką, łatwo ją zapamiętać, a budowlańcy i stolarze używają jej od wieków do sprawdzania kątów prostych. Kolejne najbardziej znane to [[(5, 12, 13)]] i [[(8, 15, 17)]].",
        },
      ],
    },
};
