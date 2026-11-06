// circumradiusGuideTranslations.bpl.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B4_PL = {
  "pl": {
      "tocHeading": "Zawartość przewodnika",
      "tocItems": {
        "sec-intro": "Kalkulator promienia okręgu opisanego na trójkącie prostokątnym",
        "sec-calculate": "Obliczanie promienia okręgu opisanego na trójkącie prostokątnym",
        "sec-what-circumradius": "Czym jest promień okręgu opisanego na trójkącie prostokątnym?",
        "sec-circumcircle": "Czym jest okrąg opisany w geometrii trójkąta prostokątnego?",
        "sec-formula": "Wzór na promień okręgu opisanego na trójkącie prostokątnym",
        "sec-why-diameter": "Dlaczego przeciwprostokątna jest średnicą okręgu opisanego?",
        "sec-circumcenter": "Czym jest środek okręgu opisanego na trójkącie prostokątnym?",
        "sec-how-to-use": "Jak korzystać z kalkulatora promienia okręgu opisanego na trójkącie prostokątnym",
        "sec-step-example": "Przykład krok po kroku: znajdowanie promienia okręgu opisanego",
        "sec-diagram": "Objaśnienie diagramu okręgu opisanego na trójkącie prostokątnym",
        "sec-proof": "Dlaczego wzór na promień okręgu opisanego działa?",
        "sec-thales": "Twierdzenie Talesa a okrąg opisany",
        "sec-examples": "Przykłady obliczania promienia okręgu opisanego na trójkącie prostokątnym",
        "sec-legs-known": "Jak znaleźć promień okręgu opisanego, gdy znane są obie przyprostokątne",
        "sec-diameter": "Związek między promieniem okręgu opisanego a średnicą",
        "sec-vs-inradius": "Promień okręgu opisanego a promień okręgu wpisanego w trójkącie prostokątnym",
        "sec-pythagoras": "Związek między promieniem okręgu opisanego a twierdzeniem Pitagorasa",
        "sec-verify": "Jak sprawdzić obliczenie promienia okręgu opisanego",
        "sec-properties": "Ważne własności promienia okręgu opisanego w trójkątach prostokątnych",
        "sec-mistakes": "Typowe błędy przy obliczaniu promienia okręgu opisanego",
        "sec-applications": "Praktyczne zastosowania promienia okręgu opisanego",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator promienia okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Znajdź promień okręgu opisanego na trójkącie prostokątnym w jednym dzieleniu: podziel przeciwprostokątną na pół.",
            },
            {
              "kind": "p",
              "text": "Promień okręgu opisanego to promień okręgu przechodzącego przez wszystkie trzy wierzchołki trójkąta, zwanego okręgiem opisanym. Przeciwprostokątna c to bok leżący naprzeciw kąta prostego i jest to jedyny pomiar, którego potrzebuje ten kalkulator, ponieważ przeciwprostokątna jest jednocześnie średnicą okręgu opisanego. Wzór ma postać [[R = \\frac{c}{2}]], gdzie [[R]] to promień okręgu opisanego, a [[c]] to cała przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Na przykład, jeśli [[c = 10]] cm, to [[R = \\frac{10}{2} = 5]] cm. Te 5 cm to odległość od środka okręgu opisanego do każdego wierzchołka trójkąta. Ta sama odległość sięga wierzchołka A, wierzchołka B i wierzchołka C, i właśnie dlatego okrąg przechodzi przez wszystkie trzy.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Obliczanie promienia okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie ma jedno pole wejściowe, na przeciwprostokątną c. Przeciwprostokątna to bok leżący naprzeciw kąta prostego, a zarazem najdłuższy bok trójkąta. Zmierz go od jednego końca do drugiego, w dowolnej używanej jednostce, i wpisz tę jedną liczbę.",
            },
            {
              "kind": "p",
              "text": "Sama przeciwprostokątna wystarcza, ponieważ promień okręgu opisanego nie zależy od niczego innego. Dlatego kalkulator nie potrzebuje drugiego ani trzeciego wejścia.",
            },
            {
              "kind": "p",
              "text": "Wpisz dodatnią długość. Przeciwprostokątna równa zero lub liczba ujemna nie opisuje żadnego prawdziwego trójkąta, a kalkulator nie ma wtedy czego sensownie podzielić na pół. Zachowaj spójność jednostek z treścią zadania: jeśli c jest w centymetrach, odpowiedź jest w centymetrach, a jeśli c jest w metrach, odpowiedź jest w metrach.",
            },
            {
              "kind": "p",
              "text": "Kliknij Oblicz promień okręgu opisanego R, aby zobaczyć wynik, i użyj Resetuj, aby wyczyścić pole przed nowym zadaniem. Odczytuj odpowiedź jako promień, a nie średnicę. Jeśli kalkulator pokazuje 5 cm przy przeciwprostokątnej 10 cm, cały okrąg ma 10 cm w poprzek, a 5 cm to odległość od jego środka do krawędzi.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Czym jest promień okręgu opisanego na trójkącie prostokątnym?",
          "blocks": [
            {
              "kind": "p",
              "text": "Promień okręgu opisanego na trójkącie prostokątnym to promień jego okręgu opisanego, czyli okręgu poprowadzonego przez wszystkie trzy wierzchołki. Weź trójkąt ABC z kątem prostym przy C. Narysuj okrąg przechodzący dokładnie przez A, B i C. Odległość od środka tego okręgu do dowolnego z trzech wierzchołków to promień okręgu opisanego, oznaczany [[R]].",
            },
            {
              "kind": "p",
              "text": "Środek okręgu nazywa się środkiem okręgu opisanego i oznacza się go [[O]]. W trójkącie prostokątnym [[O]] leży w środku przeciwprostokątnej AB. Ponieważ [[O]] jest środkiem, odległości od [[O]] do trzech wierzchołków są wszystkie równe, więc [[AO = BO = CO = R]]. Jedna liczba, [[R]], opisuje wszystkie trzy odległości naraz.",
            },
            {
              "kind": "p",
              "text": "Prosty przykład pokazuje to konkretnie. W trójkącie 6-8-10 przeciwprostokątna ma 10 cm, więc promień okręgu opisanego wynosi 5 cm. Środek leży 5 cm od A, 5 cm od B i 5 cm od C. Przyprostokątne, 6 cm i 8 cm, są bokami trójkąta, a nie promieniami, i żadna z nich nie jest tutaj równa promieniowi okręgu opisanego.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Trójkąt prostokątny ABC wewnątrz okręgu opisanego, którego środek O leży w środku przeciwprostokątnej AB",
            "caption": "Trójkąt ABC wewnątrz okręgu opisanego: O jest środkiem, a AO, BO i CO są równe R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Czym jest okrąg opisany w geometrii trójkąta prostokątnego?",
          "blocks": [
            {
              "kind": "p",
              "text": "Okrąg opisany to okrąg przechodzący przez każdy wierzchołek wielokąta. W przypadku trójkąta oznacza to, że okrąg przechodzi przez wszystkie trzy narożniki i niczego więcej się od niego nie wymaga. Każdy trójkąt ma dokładnie jeden okrąg opisany, ponieważ trzy punkty niewspółliniowe wyznaczają jeden okrąg.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym okrąg opisany ma szczególny kształt. Trójkąt mieści się wewnątrz okręgu, a jego przeciwprostokątna rozciąga się prosto przez środek, od jednej strony okręgu do drugiej. Trzeci wierzchołek, wierzchołek kąta prostego C, leży na okręgu pomiędzy nimi. Żadna część trójkąta nie wystaje poza okrąg, a okrąg jest najmniejszym, który może przechodzić przez wszystkie trzy wierzchołki.",
            },
            {
              "kind": "p",
              "text": "Okrąg opisany różni się od okręgu wpisanego. Okrąg wpisany leży wewnątrz trójkąta i dotyka wszystkich trzech boków od wewnątrz. Okrąg opisany otacza trójkąt i dotyka go tylko w trzech wierzchołkach. Mylenie tych dwóch okręgów to najczęstsze źródło nieporozumień na tej stronie, a sekcja porównawcza poniżej zestawia je obok siebie.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Wzór na promień okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór na promień okręgu opisanego na trójkącie prostokątnym jest na tyle krótki, że można go zapamiętać od razu:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tutaj [[R]] to promień okręgu opisanego, czyli promień okręgu opisanego, a [[c]] to cała przeciwprostokątna, bok leżący naprzeciw kąta prostego. Wzór mówi: weź przeciwprostokątną i podziel ją przez dwa.",
            },
            {
              "kind": "p",
              "text": "Obliczenie ma dwa kroki. Po pierwsze, poprawnie rozpoznaj przeciwprostokątną. Jest to bok leżący naprzeciw kąta prostego i zawsze jest to najdłuższy bok. Po drugie, podziel jego długość przez dwa. Nie ma tu podnoszenia do kwadratu, pierwiastka kwadratowego ani drugiego pomiaru, który trzeba by najpierw znaleźć, o ile przeciwprostokątna jest już znana.",
            },
            {
              "kind": "p",
              "text": "Powód, dla którego dzielenie działa, jest taki, że przeciwprostokątna jest średnicą okręgu opisanego. Promień jest zawsze połową średnicy, więc [[R = \\frac{D}{2}]], gdzie [[D]] to średnica. W trójkącie prostokątnym [[D = c]], więc po podstawieniu otrzymujemy [[R = \\frac{c}{2}]]. Wzór to tak naprawdę znana zależność między promieniem a średnicą, zastosowana do średnicy, która akurat jest bokiem trójkąta.",
            },
            {
              "kind": "p",
              "text": "Dla trójkąta ogólnego, czyli takiego, który niekoniecznie jest prostokątny, promień okręgu opisanego wynika ze wzoru [[R = \\frac{abc}{4A}]], gdzie [[a]], [[b]] i [[c]] to trzy boki, a [[A]] to pole trójkąta. Dla trójkąta prostokątnego upraszcza się on do [[R = \\frac{c}{2}]], ponieważ pole wynosi [[A = \\frac{ab}{2}]]. Wzoru ogólnego używaj tylko dla trójkątów, które nie są prostokątne.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Dlaczego przeciwprostokątna jest średnicą okręgu opisanego?",
          "blocks": [
            {
              "kind": "p",
              "text": "To jest idea, na której opiera się cała strona, więc zasługuje na uważne przyjrzenie się. Weź trójkąt prostokątny ABC z kątem prostym przy C i niech [[O]] będzie środkiem przeciwprostokątnej AB. Twierdzenie mówi, że [[O]] jest w równej odległości od wszystkich trzech wierzchołków, co czyni go środkiem okręgu opisanego, a AB, przechodzące przez [[O]] i mające oba końce na okręgu, jest średnicą.",
            },
            {
              "kind": "p",
              "text": "Kluczowym faktem jest własność środka przeciwprostokątnej w trójkącie prostokątnym: środek przeciwprostokątnej jest w równej odległości od wszystkich trzech wierzchołków. Symbolicznie: [[OA = OB = OC]]. Ponieważ [[O]] jest środkiem AB, [[OA]] i [[OB]] są równe połowie przeciwprostokątnej, więc [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Dlaczego [[OC]] jest równe połowie przeciwprostokątnej? Jeden ze sposobów, aby to zobaczyć, to uzupełnienie prostokąta. Narysuj kopię trójkąta ABC obróconą o pół obrotu wokół [[O]], tak aby oba trójkąty razem utworzyły prostokąt, którego jedną przekątną jest AB. Przekątne prostokąta są równe i przecinają się w połowie, więc [[OC = \\frac{c}{2}]] również.",
            },
            {
              "kind": "p",
              "text": "Gdy już ustalimy, że [[OA = OB = OC]], reszta wynika sama. Okrąg o środku w [[O]] i promieniu [[\\frac{c}{2}]] przechodzi przez A, B i C, więc jest okręgiem opisanym, [[O]] jest środkiem okręgu opisanego, a [[\\frac{c}{2}]] jest promieniem okręgu opisanego. Ponieważ A i B są przeciwległymi końcami prostej przechodzącej przez środek, AB jest średnicą, więc [[AB = 2R]], czyli [[c = 2R]], a zatem [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Przeciwprostokątna AB pokazana jako średnica okręgu opisanego, przy czym AO i OB są równe R",
            "caption": "Przeciwprostokątna AB jest średnicą: AO i OB są równe R, a AB jest równe 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Czym jest środek okręgu opisanego na trójkącie prostokątnym?",
          "blocks": [
            {
              "kind": "p",
              "text": "Środek okręgu opisanego na trójkącie to punkt w równej odległości od wszystkich trzech wierzchołków, a jest on środkiem okręgu opisanego. Znajduje się go tam, gdzie przecinają się symetralne boków.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym symetralne przecinają się w punkcie, który można znaleźć bez ich rysowania: w środku przeciwprostokątnej. Podziel AB na pół, a otrzymasz środek okręgu opisanego [[O]]. Podzielenie na pół którejkolwiek przyprostokątnej daje prostą przechodzącą przez ten sam punkt, co jest przydatnym sprawdzeniem przy konstruowaniu środka cyrklem i linijką.",
            },
            {
              "kind": "p",
              "text": "Środek okręgu opisanego leży na samej przeciwprostokątnej, dokładnie w jej połowie. To szczególna cecha trójkątów prostokątnych. W trójkącie ostrokątnym wszystkie trzy kąty są mniejsze niż 90 stopni, a środek okręgu opisanego wypada wewnątrz trójkąta. Trójkąt prostokątny jest przypadkiem granicznym, w którym środek leży na granicy trójkąta, na jego najdłuższym boku.",
            },
            {
              "kind": "p",
              "text": "Środek okręgu opisanego to nie wierzchołek kąta prostego. Wierzchołek C jest punktem na okręgu, w odległości [[R]] od [[O]], natomiast [[O]] jest środkiem. Mylenie tych dwóch punktów to częsty błąd, ponieważ C jest najbardziej rzucającym się w oczy narożnikiem trójkąta. Pamiętaj, że środek musi być w równej odległości od A, B i C, a C nie jest w równej odległości od A i B, chyba że trójkąt jest równoramienny w szczególny sposób, więc C nie może być środkiem w ogólności.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Środek okręgu opisanego O w środku przeciwprostokątnej, w równej odległości od wszystkich trzech wierzchołków",
            "caption": "O jest środkiem AB, przy czym OA, OB i OC są równe R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Jak korzystać z kalkulatora promienia okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Dziewięć krótkich kroków prowadzi od oznaczonego trójkąta do sprawdzonej odpowiedzi. Przyprostokątne nie są potrzebne na żadnym etapie, ponieważ sama przeciwprostokątna wyznacza promień okręgu opisanego.",
            },
            {
              "kind": "steps",
              "steps": [
                "Rozpoznaj trójkąt prostokątny w swoim zadaniu i potwierdź, że ma kąt prosty.",
                "Znajdź kąt prosty, zwykle oznaczony małym kwadratem przy wierzchołku C.",
                "Rozpoznaj bok leżący naprzeciw kąta prostego; ten bok to przeciwprostokątna c.",
                "Potwierdź, że ten bok jest najdłuższym bokiem trójkąta. Jeśli nie jest, popraw oznaczenia na diagramie przed kontynuowaniem.",
                "Wybierz odpowiednią jednostkę i przelicz wszystkie pomiary tak, aby używały tej jednostki.",
                "Wpisz długość przeciwprostokątnej w polu Przeciwprostokątna c.",
                "Kliknij Oblicz promień okręgu opisanego R i odczytaj wynik.",
                "Sprawdź wynik: musi być dodatni, w tej samej jednostce co c i dokładnie równy połowie c.",
                "Użyj Resetuj, gdy rozpoczynasz kolejne obliczenie.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli w zadaniu podane są dwie przyprostokątne zamiast przeciwprostokątnej, najpierw znajdź c z twierdzenia Pitagorasa, [[c = \\sqrt{a^2 + b^2}]], a potem wpisz tę wartość. <a href=\"/right-triangle-side-calculator/\">Kalkulator boków trójkąta prostokątnego</a> może znaleźć brakującą przeciwprostokątną, a sekcja o przyprostokątnych poniżej przedstawia pełny przykład.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Przykład krok po kroku: znajdowanie promienia okręgu opisanego",
          "blocks": [
            {
              "kind": "p",
              "text": "Użyj [[c = 10]] cm. Trzy kroki poniżej pokazują pełne rozwiązanie, bez żadnych pominięć.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zapisz wzór: [[R = \\frac{c}{2}]].",
                "Podstaw znaną wartość: [[R = \\frac{10}{2}]].",
                "Podziel: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5 cm oznacza, że okrąg opisany ma promień 5 cm. Jego środek, środek przeciwprostokątnej, leży 5 cm od każdego wierzchołka trójkąta, a okrąg przechodzi przez wszystkie trzy wierzchołki. Średnica okręgu wynosi 10 cm, tyle samo co przeciwprostokątna.",
            },
            {
              "kind": "p",
              "text": "Sprawdź odpowiedź za pomocą zależności ze średnicą, [[2R = c]]. Podwojenie promienia daje [[2 \\times 5 = 10]] cm, co dokładnie zgadza się z przeciwprostokątną. Jeśli podwojenie odpowiedzi nie zwraca przeciwprostokątnej, od której zacząłeś, dzielenie poszło gdzieś źle, a to sprawdzenie od razu to wyłapuje.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Przykład z przeciwprostokątną 10 cm i promieniem okręgu opisanego 5 cm wewnątrz okręgu opisanego",
            "caption": "Przykład: c = 10 cm daje R = 5 cm, a 2 razy 5 cm to 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Objaśnienie diagramu okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Diagram pokazuje trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Punkt [[O]] oznacza środek AB, a okrąg o środku w [[O]] przechodzi przez A, B i C.",
            },
            {
              "kind": "p",
              "text": "Czytaj diagram w tej kolejności. Zacznij od A, przejdź wzdłuż przyprostokątnej a do C, potem wzdłuż przyprostokątnej b do B, a następnie wróć wzdłuż przeciwprostokątnej z B do A, przechodząc po drodze przez [[O]]. Odcinki od [[O]] do A, B i C są promieniami, każdy oznaczony [[R]].",
            },
            {
              "kind": "p",
              "text": "Odcinek AB przechodzi przez środek [[O]] i ma oba końce na okręgu, co jest definicją średnicy. Dlatego AB jest narysowane jako prosta linia w poprzek środka okręgu, a nie jako cięciwa przesunięta na bok. Kąt prosty przy C leży na samym okręgu, co jest obrazem opisywanym przez twierdzenie Talesa.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Dlaczego wzór na promień okręgu opisanego działa?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dowód wykorzystuje środek przeciwprostokątnej oraz fakt, że jest on w równej odległości od wszystkich trzech wierzchołków. Niech [[M]] będzie środkiem AB w trójkącie prostokątnym ABC, z kątem prostym przy C. Wtedy [[AM = BM = \\frac{c}{2}]] z definicji środka odcinka. Krok wymagający dowodu to [[MA = MB = MC]], czyli twierdzenie, że trzecia odległość zgadza się z dwiema pierwszymi.",
            },
            {
              "kind": "p",
              "text": "Jeden przejrzysty sposób, aby to pokazać, to przedłużyć środkową CM do punktu D tak, aby [[MD = MC]], i połączyć D z A i B. Czworokąt ACBD ma przekątne AB i CD, które przecinają się w połowie w punkcie [[M]], więc jest równoległobokiem. Jego kąt przy C jest kątem prostym, a równoległobok z jednym kątem prostym jest prostokątem, więc ACBD jest prostokątem.",
            },
            {
              "kind": "p",
              "text": "Przekątne prostokąta są równe, więc [[CD = AB = c]]. Ponieważ [[M]] dzieli CD na pół, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Zgadza się to z [[MA]] i [[MB]], więc [[MA = MB = MC = \\frac{c}{2}]]. Punkt [[M]] jest w równej odległości od A, B i C, co czyni go środkiem okręgu opisanego, a wspólna odległość [[\\frac{c}{2}]] jest promieniem okręgu opisanego. Zatem [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Twierdzenie Talesa a okrąg opisany",
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie Talesa mówi, że kąt oparty na średnicy w punkcie leżącym na okręgu jest kątem prostym. Na rysunku AB jest średnicą okręgu, a C jest dowolnym punktem na okręgu innym niż A lub B. Wtedy kąt ACB ma 90 stopni. Twierdzenie nosi imię Talesa z Miletu, któremu przypisuje się pierwszy znany jego dowód.",
            },
            {
              "kind": "p",
              "text": "Twierdzenie odwrotne to to, z czego korzysta ta strona: jeśli trójkąt ma kąt prosty, jego przeciwprostokątną można traktować jako średnicę okręgu przechodzącego przez wszystkie trzy wierzchołki. Weź trójkąt ABC, w którym kąt C jest równy 90 stopni. Twierdzenie odwrotne mówi, że C leży na okręgu o średnicy AB, więc ten okrąg jest okręgiem opisanym na trójkącie, a jego promień jest połową AB.",
            },
            {
              "kind": "p",
              "text": "Oba kierunki razem dają pełny test. Punkt C na okręgu o średnicy AB zawsze daje kąt prosty przy C, a kąt prosty przy C zawsze umieszcza C na tym okręgu.",
            },
            {
              "kind": "p",
              "text": "Twierdzenie wyjaśnia też położenie środka okręgu opisanego. Środek okręgu jest środkiem jego średnicy, a średnicą jest przeciwprostokątna, więc środek jest środkiem przeciwprostokątnej. Nic więcej o trójkącie nie trzeba wiedzieć. Dlatego kalkulator prosi tylko o jedną liczbę.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagram twierdzenia Talesa ze średnicą AB i punktem C na okręgu tworzącym kąt prosty",
            "caption": "Twierdzenie Talesa: AB jest średnicą, C leży na okręgu, a kąt C ma 90 stopni.",
          },
        },
        "sec-examples": {
          "h2": "Przykłady obliczania promienia okręgu opisanego na trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "h3",
              "text": "Przykład 1: Podstawowa liczba całkowita",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 10]] cm, wzór daje [[R = \\frac{10}{2} = 5]] cm. Okrąg opisany ma średnicę 10 cm i promień 5 cm, a jego środek jest środkiem przeciwprostokątnej, 5 cm od każdego wierzchołka.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Większy pomiar",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Większe liczby niczego nie zmieniają w metodzie: podziel przeciwprostokątną na pół i zachowaj jednostkę. Okrąg o szerokości 24 m ma promień 12 m.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Pomiar dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Dziesiętna przeciwprostokątna daje dziesiętny promień okręgu opisanego, co jest normalne. Sprawdź to, podwajając: [[2 \\times 3.75 = 7.5]] cm, co zwraca przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Nieparzysta przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Nieparzysta liczba całkowita podzielona na pół daje liczbę kończącą się na ,5. To trójkąt 5-12-13, którego przyprostokątne mają 5 cm i 12 cm, ponieważ [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Pomiar w milimetrach",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Małe jednostki działają tak samo, a zachowanie jednostki w milimetrach przez cały czas pozwala uniknąć przeliczania. W centymetrach ta sama odpowiedź to 9 cm, ponieważ 90 mm to 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Pomiar ułamkowy",
            },
            {
              "kind": "p",
              "text": "Dane [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, czyli 3.75 ft. Dzielenie przez 2 oznacza pomnożenie mianownika przez 2, więc mianownik rośnie z 2 do 4. Postać dziesiętna, 3.75 ft, to ta sama odpowiedź zapisana inaczej.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Różne jednostki",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Po przeliczeniu na centymetry 0.6 m to 60 cm, ponieważ 1 m to 100 cm. Obie jednostki są poprawne, ale odpowiedź musi podawać, której używa.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Duży pomiar dziesiętny",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Podwojenie 62.8 daje 125.6, co potwierdza dzielenie.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Jak znaleźć promień okręgu opisanego, gdy znane są obie przyprostokątne",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie prosi o przeciwprostokątną, ale w wielu zadaniach podane są zamiast tego dwie przyprostokątne. W takim przypadku najpierw znajdź przeciwprostokątną z twierdzenia Pitagorasa, a potem podziel ją na pół. Oba kroki łączą się w jeden wzór, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], gdzie [[a]] i [[b]] to przyprostokątne.",
            },
            {
              "kind": "p",
              "text": "Użyj [[a = 6]] cm i [[b = 8]] cm. Najpierw podnieś obie przyprostokątne do kwadratu i dodaj: [[a^2 + b^2 = 36 + 64 = 100]]. Potem wyciągnij pierwiastek kwadratowy, aby otrzymać przeciwprostokątną: [[c = \\sqrt{100} = 10]] cm. Następnie podziel ją na pół: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "<a href=\"/pythagorean-theorem-calculator/\">Kalkulator twierdzenia Pitagorasa</a> znajduje brakującą przeciwprostokątną z dwóch przyprostokątnych, co jest tym samym pierwszym krokiem, który tu zastosowano. <a href=\"/right-triangle-area-calculator/\">Kalkulator pola trójkąta prostokątnego</a> używa tych samych dwóch przyprostokątnych w inny sposób, obliczając [[A = \\frac{ab}{2}]], co dla trójkąta 6-8-10 wynosi 24 centymetry kwadratowe.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Związek między promieniem okręgu opisanego a średnicą",
          "blocks": [
            {
              "kind": "p",
              "text": "Promień i średnica opisują ten sam okrąg na dwa sposoby. Średnica [[D]] to odległość prosto przez okrąg, przechodząca przez jego środek, a promień [[R]] to odległość od środka do krawędzi, więc [[D = 2R]] i [[R = \\frac{D}{2}]]. Podwojenie promienia daje średnicę, a podzielenie średnicy na pół daje promień.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym średnica ma drugą tożsamość: jest równa przeciwprostokątnej. Przeciwprostokątna rozciąga się przez okrąg opisany od jednej strony do drugiej, przez środek, więc [[D = c]]. Połączenie obu zależności daje [[c = 2R]] i [[R = \\frac{c}{2}]], co jest wzorem, na którym opiera się ta strona.",
            },
            {
              "kind": "p",
              "text": "Przykład liczbowy porządkuje trzy długości. W trójkącie o [[c = 18]] cm średnica wynosi [[D = 18]] cm, a promień okręgu opisanego [[R = 9]] cm. Przeciwprostokątna, 18 cm, i średnica, 18 cm, to ta sama linia mierzona w dwóch rolach, natomiast promień, 9 cm, to połowa tej linii.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Promień okręgu opisanego a promień okręgu wpisanego w trójkącie prostokątnym",
          "blocks": [
            {
              "kind": "p",
              "text": "Promień okręgu opisanego i promień okręgu wpisanego to dwa promienie trójkąta prostokątnego i opisują dwa różne okręgi. Promień okręgu opisanego [[R]] to promień okręgu opisanego, który przechodzi przez wszystkie trzy wierzchołki. Promień okręgu wpisanego [[r]] to promień okręgu wpisanego, który leży wewnątrz trójkąta i dotyka wszystkich trzech boków. Jeden okrąg otacza trójkąt, drugi leży w jego wnętrzu.",
            },
            {
              "kind": "p",
              "text": "W trójkącie prostokątnym promień okręgu opisanego wynosi [[R = \\frac{c}{2}]], natomiast promień okręgu wpisanego wynosi [[r = \\frac{a + b - c}{2}]], gdzie [[a]] i [[b]] to przyprostokątne, a [[c]] to przeciwprostokątna. Promień okręgu opisanego potrzebuje tylko przeciwprostokątnej; promień okręgu wpisanego potrzebuje wszystkich trzech boków, ponieważ to, jak ściśle przylega okrąg wpisany, zależy od kształtu trójkąta, a nie tylko od jego najdłuższego boku.",
            },
            {
              "kind": "p",
              "text": "Środki też się różnią. Środek okręgu opisanego jest środkiem przeciwprostokątnej, na granicy trójkąta. Środek okręgu wpisanego leży wewnątrz trójkąta, tam gdzie przecinają się dwusieczne kątów, w odległości [[r]] od każdego boku.",
            },
            {
              "kind": "p",
              "text": "Użyj trójkąta 6-8-10, aby zobaczyć różnicę w liczbach. Promień okręgu opisanego wynosi [[R = \\frac{10}{2} = 5]] cm, a promień okręgu wpisanego [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "W zadaniach o okręgu wpisanym użyj <a href=\"/right-triangle-inradius-calculator/\">kalkulatora promienia okręgu wpisanego w trójkąt prostokątny</a>, który stosuje bezpośrednio [[r = \\frac{a + b - c}{2}]]. <a href=\"/right-triangle-radius-calculator/\">Kalkulator promienia trójkąta prostokątnego</a> obejmuje oba promienie na jednej stronie, gdy trzeba je porównać.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "Promień okręgu opisanego R",
              "Promień okręgu wpisanego r",
            ],
            "rows": [
              [
                "Okrąg",
                "Okrąg opisany",
                "Okrąg wpisany",
              ],
              [
                "Położenie",
                "Wokół trójkąta",
                "Wewnątrz trójkąta",
              ],
              [
                "Styczność",
                "Przechodzi przez wierzchołki",
                "Styczny do boków",
              ],
              [
                "Wzór dla trójkąta prostokątnego",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Środek",
                "Środek okręgu opisanego",
                "Środek okręgu wpisanego",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Okrąg opisany przechodzący przez wierzchołki obok okręgu wpisanego dotykającego boków, trójkąt 6-8-10",
            "caption": "Okrąg opisany (R = 5 cm) wokół trójkąta, okrąg wpisany (r = 2 cm) w jego wnętrzu, trójkąt 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Związek między promieniem okręgu opisanego a twierdzeniem Pitagorasa",
          "blocks": [
            {
              "kind": "p",
              "text": "Twierdzenie Pitagorasa mówi, że w trójkącie prostokątnym [[a^2 + b^2 = c^2]], gdzie [[a]] i [[b]] to przyprostokątne, a [[c]] to przeciwprostokątna. Jest to związek między przyprostokątnymi a przeciwprostokątną, a przez przeciwprostokątną także związek z promieniem okręgu opisanego.",
            },
            {
              "kind": "p",
              "text": "Ponieważ [[R = \\frac{c}{2}]], a twierdzenie daje [[c = \\sqrt{a^2 + b^2}]], podstawienie daje [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Ten połączony wzór znajduje promień okręgu opisanego z dwóch przyprostokątnych w jednym kroku, bez osobnego zapisywania przeciwprostokątnej. Jest to to samo obliczenie w dwóch krokach, co w sekcji o przyprostokątnych, zapisane jako jedno wyrażenie.",
            },
            {
              "kind": "p",
              "text": "Sprawdź to na trójkącie 6-8-10. Przyprostokątne dają [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm dla przeciwprostokątnej, a podzielenie na pół daje [[R = 5]] cm. Twierdzenie Pitagorasa dostarcza przeciwprostokątną, a wzór na promień okręgu opisanego dzieli ją na pół.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak sprawdzić obliczenie promienia okręgu opisanego",
          "blocks": [
            {
              "kind": "p",
              "text": "Cztery niezależne sprawdzenia wyłapują prawie każdy błąd. Wykonaj co najmniej jedno przy każdej odpowiedzi, a wszystkie cztery, gdy zadanie ma znaczenie. W przykładzie poniżej przez cały czas używany jest trójkąt 6-8-10, z [[c = 10]] cm i [[R = 5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 1: Zależność ze średnicą",
            },
            {
              "kind": "p",
              "text": "Podwój promień okręgu opisanego i porównaj z przeciwprostokątną: [[2R = c]]. Tutaj [[2 \\times 5 = 10]] cm, co dokładnie zgadza się z c. Jeśli podwojenie odpowiedzi nie zwraca przeciwprostokątnej, dzielenie przez dwa poszło źle.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 2: Zależność ze środkiem",
            },
            {
              "kind": "p",
              "text": "Środek okręgu opisanego musi leżeć w połowie przeciwprostokątnej. Zmierz od dowolnego końca przeciwprostokątnej do środka: każda połowa musi być równa [[R]]. Tutaj każda połowa ma 5 cm, co zgadza się z promieniem okręgu opisanego. Środek, który nie leży w środku, nie jest środkiem okręgu opisanego.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 3: Równe odległości",
            },
            {
              "kind": "p",
              "text": "Sprawdź, czy [[OA = OB = OC = R]]. Środek musi być w tej samej odległości od wszystkich trzech wierzchołków. W trójkącie 6-8-10 każda odległość wynosi 5 cm. Jeśli odległość do wierzchołka kąta prostego różni się od odległości do końcówek przeciwprostokątnej, środek lub promień jest błędny.",
            },
            {
              "kind": "h3",
              "text": "Sprawdzenie 4: Twierdzenie Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Gdy znane są przyprostokątne, sprawdź, czy [[a^2 + b^2 = c^2]], i porównaj otrzymaną przeciwprostokątną z [[2R]]. Tutaj [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], więc [[c = 10]] cm, a [[2R = 10]] cm zgadza się. To sprawdzenie testuje cały trójkąt, więc wyłapuje błędy w oznaczaniu, których pierwsze sprawdzenie może nie zauważyć.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Ważne własności promienia okręgu opisanego w trójkątach prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Dziewięć własności wynika bezpośrednio z [[R = \\frac{c}{2}]]. Każda z nich służy też jako sprawdzenie nowej odpowiedzi na zdrowy rozsądek.",
            },
            {
              "items": [
                "Promień okręgu opisanego jest dokładnie połową przeciwprostokątnej, [[R = \\frac{c}{2}]], bez żadnego przybliżenia.",
                "Przeciwprostokątna jest średnicą okręgu opisanego, więc [[D = c]] i [[c = 2R]].",
                "Środek okręgu opisanego leży w środku przeciwprostokątnej, na najdłuższym boku trójkąta.",
                "Promień okręgu opisanego jest zawsze dodatni dla trójkąta niezdegenerowanego, ponieważ przeciwprostokątna jest dodatnią długością.",
                "Promień okręgu opisanego jest równy połowie przeciwprostokątnej, a ponieważ przeciwprostokątna jest najdłuższym bokiem, promień okręgu opisanego jest mniejszy od przeciwprostokątnej. To, czy jest większy czy mniejszy od danej przyprostokątnej, zależy od trójkąta: w trójkącie 6-8-10 [[R = 5]] cm jest mniejsze od przyprostokątnej 8 cm, natomiast w trójkącie 5-12-13 [[R = 6.5]] cm jest większe od przyprostokątnej 5 cm.",
                "Zwiększenie przeciwprostokątnej zwiększa promień okręgu opisanego proporcjonalnie, ponieważ [[R]] jest połową [[c]].",
                "Podwojenie przeciwprostokątnej podwaja promień okręgu opisanego: jeśli [[c]] staje się [[2c]], to [[R]] staje się [[c]].",
                "Przyprostokątne nie są potrzebne, gdy przeciwprostokątna jest już znana; wzór wykorzystuje tylko [[c]].",
                "Wszystkie trzy wierzchołki są w równej odległości od środka okręgu opisanego, przy czym [[AO = BO = CO = R]].",
              ],
              "kind": "list",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy obliczaniu promienia okręgu opisanego",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Wpisanie przyprostokątnej zamiast przeciwprostokątnej: podzielenie przyprostokątnej na pół daje połowę przyprostokątnej, a nie promień okręgu opisanego. W trójkącie 6-8-10 podzielenie 6 cm na pół daje 3 cm, podczas gdy prawdziwy promień okręgu opisanego wynosi 5 cm.",
                "Zapomnienie o podzieleniu przez dwa: podanie przeciwprostokątnej jako odpowiedzi daje średnicę, a nie promień. Przy [[c = 10]] cm odpowiedź to 5 cm, a nie 10 cm.",
                "Traktowanie przeciwprostokątnej jako promienia: to ten sam błąd widziany z drugiej strony. Przeciwprostokątna rozciąga się na całą szerokość okręgu, więc jest średnicą, a promień jest jej połową.",
                "Mylenie promienia okręgu opisanego z promieniem okręgu wpisanego: promień okręgu wpisanego w trójkącie 6-8-10 wynosi 2 cm, natomiast promień okręgu opisanego wynosi 5 cm. Te dwa okręgi są różne, a ich wzory też są różne.",
                "Mylenie środka okręgu opisanego z wierzchołkiem kąta prostego: środek okręgu opisanego jest środkiem przeciwprostokątnej, a nie wierzchołkiem C. Wierzchołek C jest punktem na okręgu, w odległości [[R]] od środka.",
                "Zakładanie, że środek zawsze leży wewnątrz trójkąta: w trójkącie prostokątnym środek okręgu opisanego leży na przeciwprostokątnej, a w trójkącie rozwartokątnym leży na zewnątrz.",
                "Stosowanie wzoru do dowolnego trójkąta: [[R = \\frac{c}{2}]] zachodzi tylko dla trójkątów prostokątnych. Dla trójkąta ogólnego użyj [[R = \\frac{abc}{4A}]], gdzie [[A]] to pole.",
                "Mieszanie jednostek miary: przeciwprostokątna w metrach i odpowiedź podana w centymetrach różnią się o współczynnik 100. Najpierw przelicz, potem podziel na pół.",
                "Używanie zerowych lub ujemnych wartości przeciwprostokątnej: długość nie może być zerowa ani ujemna w prawdziwym trójkącie. Zerowe lub ujemne wejście oznacza, że pomiar jest błędny.",
                "Mylenie średnicy z promieniem: średnica jest dwukrotnością promienia. Jeśli twoja odpowiedź jest dwukrotnie większa od oczekiwanej, prawdopodobnie podałeś [[D]] zamiast [[R]].",
                "Zakładanie, że okrąg opisany dotyka wszystkich trzech boków: okrąg opisany przechodzi przez wierzchołki i dotyka trójkąta tylko w tych trzech punktach. Okręgiem, który dotyka boków, jest okrąg wpisany.",
                "Zapominanie, że okrąg przechodzi przez wszystkie trzy wierzchołki: wszystkie trzy muszą na nim leżeć, co dokładnie gwarantuje [[OA = OB = OC]].",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania promienia okręgu opisanego",
          "blocks": [
            {
              "kind": "p",
              "text": "Najbardziej bezpośrednie zastosowanie to praca domowa z geometrii i praca w klasie, gdzie zadania o promieniu okręgu opisanego sprawdzają, czy uczniowie potrafią rozpoznać przeciwprostokątną i zastosować [[R = \\frac{c}{2}]] zamiast sięgać po bardziej skomplikowany wzór. Ćwiczenia z konstrukcji okręgu wykorzystują tę samą ideę: mając trójkąt prostokątny, narysuj jego okrąg opisany, dzieląc przeciwprostokątną na pół i ustawiając cyrkiel na ten promień.",
            },
            {
              "kind": "p",
              "text": "Rysunek techniczny wykorzystuje tę zależność, gdy trójkąt prostokątny trzeba umieścić wewnątrz okrągłej ramy albo gdy łuk kołowy musi przechodzić przez trzy dane punkty. Modelowanie geometryczne i geometria analityczna wykorzystują ten sam fakt, aby umieścić środek okręgu opisanego na trójkącie w środku jego przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Nauczyciele wykorzystują ten temat jako lekcję łączącą trójkąty i okręgi, ponieważ jest to jedno z pierwszych miejsc, w których te dwa działy się spotykają. Twierdzenie Talesa, własność środka i zależność między promieniem a średnicą występują na jednym rysunku, więc promień okręgu opisanego to zwięzły sposób, aby powtórzyć je razem.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z odpowiedziami",
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
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 26]] cm. Znajdź promień okręgu opisanego [[R]].",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Dziesiętna przeciwprostokątna",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 9.4]] m, znajdź promień okręgu opisanego [[R]] w metrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Pomiar ułamkowy",
            },
            {
              "kind": "p",
              "text": "Dane [[c = \\frac{9}{4}]] ft, znajdź [[R]] jako ułamek, a potem jako liczbę dziesiętną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przeciwprostokątną [[c = 240]] cm. Znajdź promień okręgu opisanego w metrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Znajdź przeciwprostokątną z dwóch przyprostokątnych",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne [[a = 9]] cm i [[b = 12]] cm. Znajdź przeciwprostokątną, a potem promień okręgu opisanego.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Promień okręgu opisanego czy wpisanego?",
            },
            {
              "kind": "p",
              "text": "Trójkąt prostokątny ma przyprostokątne 5 cm i 12 cm oraz przeciwprostokątną 13 cm. Znajdź zarówno promień okręgu opisanego [[R]], jak i promień okręgu wpisanego [[r]], i podaj, do którego okręgu należy każdy z nich.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań do ćwiczeń",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[R = \\frac{26}{2} = 13]] cm. Sprawdzenie: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[R = \\frac{9.4}{2} = 4.7]] m. Sprawdzenie: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, czyli 1.125 ft. Dzielenie przez 2 podwaja mianownik z 4 do 8.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: [[R = \\frac{240}{2} = 120]] cm, a 120 cm to 1.2 m, ponieważ 100 cm to 1 m.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, potem [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: Promień okręgu opisanego należy do okręgu opisanego, [[R = \\frac{13}{2} = 6.5]] cm, a promień okręgu wpisanego należy do okręgu wpisanego, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Okrąg opisany przechodzi przez wierzchołki; okrąg wpisany dotyka boków.",
            },
          ],
        },
      },
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Każdy kalkulator poniżej obsługuje jedno konkretne zadanie dotyczące trójkąta prostokątnego, więc wybierz narzędzie odpowiadające pomiarowi, który chcesz znaleźć.",
      "relatedItems": [
        "Kalkulator promienia trójkąta prostokątnego",
        "Kalkulator promienia okręgu wpisanego w trójkąt prostokątny",
        "Kalkulator boków trójkąta prostokątnego",
        "Kalkulator pola trójkąta prostokątnego",
        "Kalkulator twierdzenia Pitagorasa",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wzór ma postać [[R = \\frac{c}{2}]], gdzie [[R]] to promień okręgu opisanego, a [[c]] to przeciwprostokątna. Rozpoznaj bok leżący naprzeciw kąta prostego, a potem podziel jego długość przez dwa. Na przykład przeciwprostokątna 10 cm daje promień okręgu opisanego 5 cm.",
          "question": "Jaki jest wzór na promień okręgu opisanego na trójkącie prostokątnym?",
        },
        {
          "answer": "Środek przeciwprostokątnej jest w równej odległości od wszystkich trzech wierzchołków, więc jest środkiem okręgu opisanego. Przeciwprostokątna przechodzi przez ten środek, a oba jej końce leżą na okręgu, co jest definicją średnicy. Podzielenie jej na pół daje więc promień.",
          "question": "Dlaczego przeciwprostokątna jest średnicą okręgu opisanego?",
        },
        {
          "answer": "Środek okręgu opisanego leży w środku przeciwprostokątnej, na najdłuższym boku trójkąta. Jest w równej odległości od wszystkich trzech wierzchołków, przy czym [[AO = BO = CO = R]]. To nie jest wierzchołek kąta prostego, który jest punktem na okręgu.",
          "question": "Gdzie leży środek okręgu opisanego na trójkącie prostokątnym?",
        },
        {
          "answer": "Promień okręgu opisanego oznacza promień okręgu opisanego, czyli okręgu przechodzącego przez wszystkie trzy wierzchołki trójkąta. Jest to odległość od środka okręgu opisanego do dowolnego wierzchołka. W trójkącie prostokątnym jest równy połowie przeciwprostokątnej.",
          "question": "Co oznacza promień okręgu opisanego?",
        },
        {
          "answer": "Nie. Sama przeciwprostokątna wystarcza, ponieważ [[R = \\frac{c}{2}]]. Przyprostokątne są potrzebne tylko wtedy, gdy przeciwprostokątna jest nieznana; w takim przypadku najpierw znajdź ją z [[c = \\sqrt{a^2 + b^2}]], a potem podziel ją na pół. Dlatego ten kalkulator prosi tylko o jedną wartość i sprawia, że każde obliczenie jest krótkie i proste.",
          "question": "Czy do obliczenia promienia okręgu opisanego potrzebuję obu przyprostokątnych?",
        },
        {
          "answer": "Tak, zawsze, w przypadku trójkąta prostokątnego. Przeciwprostokątna jest średnicą okręgu opisanego, a promień jest połową średnicy, więc [[R = \\frac{c}{2}]]. Podwojenie promienia okręgu opisanego zawsze zwraca przeciwprostokątną. Na przykład przeciwprostokątna 14 cm daje promień okręgu opisanego 7 cm, a podwojenie 7 cm zwraca 14 cm.",
          "question": "Czy promień okręgu opisanego jest połową przeciwprostokątnej?",
        },
        {
          "answer": "Nie. Promień okręgu opisanego to promień okręgu przechodzącego przez wierzchołki, [[R = \\frac{c}{2}]], natomiast promień okręgu wpisanego to promień okręgu wewnątrz trójkąta dotykającego jego boków, [[r = \\frac{a + b - c}{2}]]. W trójkącie 6-8-10 wynoszą one 5 cm i 2 cm.",
          "question": "Czy promień okręgu opisanego jest taki sam jak promień okręgu wpisanego?",
        },
        {
          "answer": "Tak, w trójkącie rozwartokątnym środek okręgu opisanego leży na zewnątrz. W trójkącie ostrokątnym leży wewnątrz. Trójkąt prostokątny jest przypadkiem granicznym: jego środek okręgu opisanego leży na przeciwprostokątnej, dokładnie w jej środku. Środek nigdy nie leży więc wewnątrz obszaru trójkąta prostokątnego, ale też nigdy nie leży poza trójkątem.",
          "question": "Czy środek okręgu opisanego może leżeć poza trójkątem?",
        },
        {
          "answer": "Twierdzenie Talesa mówi, że kąt oparty na średnicy jest kątem prostym, a jego twierdzenie odwrotne mówi, że przeciwprostokątna trójkąta prostokątnego jest średnicą. To sprawia, że środek przeciwprostokątnej jest środkiem, a połowa przeciwprostokątnej promieniem.",
          "question": "Jak twierdzenie Talesa wiąże się z promieniem okręgu opisanego?",
        },
        {
          "answer": "Tak. Najpierw znajdź przeciwprostokątną z [[c = \\sqrt{a^2 + b^2}]], a potem podziel ją na pół: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Dla przyprostokątnych 6 cm i 8 cm przeciwprostokątna wynosi 10 cm, a promień okręgu opisanego 5 cm. Użyj tych samych dwóch kroków dla każdej pary przyprostokątnych i sprawdź wynik testem ze średnicą.",
          "question": "Czy mogę znaleźć promień okręgu opisanego, używając dwóch przyprostokątnych?",
        },
        {
          "answer": "Promień okręgu opisanego też się podwoi, ponieważ [[R]] jest połową [[c]]. Jeśli przeciwprostokątna 10 cm daje [[R = 5]] cm, przeciwprostokątna 20 cm daje [[R = 10]] cm. Zależność jest wprost proporcjonalna, więc potrojenie przeciwprostokątnej potraja też promień okręgu opisanego.",
          "question": "Co się stanie, jeśli przeciwprostokątna się podwoi?",
        },
        {
          "answer": "Tak. To jest definicja okręgu opisanego: okrąg przechodzący przez każdy wierzchołek trójkąta. W trójkącie prostokątnym środkiem jest środek przeciwprostokątnej, a każdy wierzchołek leży dokładnie [[R]] od niego.",
          "question": "Czy okrąg opisany przechodzi przez wszystkie trzy wierzchołki?",
        },
      ],
    },
};
