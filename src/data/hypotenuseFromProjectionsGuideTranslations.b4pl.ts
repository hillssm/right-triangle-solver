// hypotenuseFromProjectionsGuideTranslations.bpl.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B4_PL = {
  "pl": {
      "tocHeading": "Spis treści przewodnika",
      "tocItems": {
        "sec-altitude": "Jak rzuty na przeciwprostokątną wiążą się z wysokością",
        "sec-applications": "Praktyczne zastosowania obliczeń rzutów na przeciwprostokątną",
        "sec-calculate": "Obliczanie przeciwprostokątnej z dwóch rzutów",
        "sec-compare": "Przeciwprostokątna z rzutów a przeciwprostokątna z przyprostokątnych",
        "sec-diagram": "Wyjaśnienie diagramu rzutów na przeciwprostokątną",
        "sec-examples": "Rozwiązane przykłady obliczania przeciwprostokątnej z rzutów",
        "sec-faq": "Często zadawane pytania",
        "sec-formula": "Wzór na przeciwprostokątną z rzutów w trójkącie prostokątnym",
        "sec-how": "Jak korzystać z kalkulatora przeciwprostokątnej z rzutów",
        "sec-intro": "Kalkulator przeciwprostokątnej z rzutów w trójkącie prostokątnym",
        "sec-legs": "Zależność między rzutami na przeciwprostokątną a przyprostokątnymi trójkąta",
        "sec-manual": "Jak obliczyć przeciwprostokątną z rzutów ręcznie",
        "sec-mistakes": "Typowe błędy przy obliczaniu przeciwprostokątnej z rzutów",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-pythagoras": "Rzuty na przeciwprostokątną a twierdzenie Pitagorasa",
        "sec-related": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
        "sec-special": "Przypadki szczególne i ważne własności",
        "sec-understanding": "Czym jest przeciwprostokątna i jej dwa odcinki",
        "sec-verify": "Jak sprawdzić obliczenie przeciwprostokątnej",
        "sec-what": "Czym są rzuty na przeciwprostokątną w trójkącie prostokątnym?",
        "sec-why": "Dlaczego przeciwprostokątna równa się sumie swoich rzutów?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dwa pola wejściowe przyjmują długości rzutów p i q, mierzonych wzdłuż przeciwprostokątnej. Selektory jednostek pozwalają wpisywać centymetry, metry, milimetry, stopy lub cale, pod warunkiem że przed dodaniem p i q używają zgodnych jednostek.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Naciśnij przycisk Oblicz przeciwprostokątną c, aby zobaczyć wynik, i użyj przycisku Reset, aby wyczyścić pola przed nowym zadaniem. Akceptowane są tylko dodatnie długości, ponieważ rzut jest rzeczywistym odcinkiem przeciwprostokątnej, a wartość zerowa lub ujemna nie może go opisać.",
            },
            {
              "kind": "p",
              "text": "Wynikiem jest pełna długość przeciwprostokątnej c w wybranej jednostce. Arytmetyka sprowadza się do zwykłego dodawania, ale poniższe sekcje wyjaśniają, co oznaczają odcinki i jak sprawdzić odpowiedź ręcznie.",
            },
          ],
          "h2": "Obliczanie przeciwprostokątnej z dwóch rzutów",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Wzór ma postać [[c = p + q]], gdzie c to pełna przeciwprostokątna, p to pierwszy odcinek rzutu, a q to drugi. Używa dodawania, a nie mnożenia ani pierwiastków kwadratowych, ponieważ dwa rzuty są sąsiadującymi częściami jednego prostego boku, a dodawanie odcinków odtwarza ten bok z jego części. Wyobraź sobie mierzenie dwóch kawałków jednej deski i dodawanie pomiarów, aby otrzymać pełną długość deski.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Częste pytanie brzmi, dlaczego wzór nie uśrednia dwóch odcinków. Uśrednienie dałoby połowę przeciwprostokątnej, co odpowiada na inne pytanie. Dodawanie odtwarza cały bok; średnia i średnia geometryczna należą do innych wzorów omówionych dalej w tym przewodniku.",
            },
            {
              "kind": "p",
              "text": "Weź [[p = 7]] cm i [[q = 11]] cm. Podstawienie daje [[c = 7 + 11]], więc [[c = 18]] cm. Sam wzór jest prosty; ważne jest zrozumienie, które dwa odcinki zaliczają się do rzutów.",
            },
            {
              "kind": "p",
              "text": "Oba odcinki muszą używać zgodnych jednostek przed dodaniem. Jeśli p jest w milimetrach, a q w centymetrach, najpierw przelicz jeden z nich, dokładnie tak, jak podpowiada kalkulator na tej stronie.",
            },
          ],
          "h2": "Wzór na przeciwprostokątną z rzutów w trójkącie prostokątnym",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dziewięć krótkich kroków prowadzi od opisanego diagramu do sprawdzonej przeciwprostokątnej.",
            },
            {
              "kind": "steps",
              "steps": [
                "Zidentyfikuj trójkąt prostokątny w swoim zadaniu i potwierdź, że ma kąt prosty.",
                "Znajdź przeciwprostokątną: bok leżący naprzeciw kąta prostego.",
                "Znajdź punkt, w którym wysokość poprowadzona z kąta prostego przecina przeciwprostokątną.",
                "Zidentyfikuj dwa rzuty p i q jako odcinki po obu stronach tego punktu, korzystając z przewodnika <a href=\"/right-triangle-projection-p-calculator/\">kalkulatora rzutu p</a> dla pierwszego odcinka. <a href=\"/right-triangle-projection-q-calculator/\">Kalkulator rzutu q</a> opisuje drugi odcinek w ten sam sposób.",
                "W razie potrzeby przelicz oba pomiary na zgodne jednostki.",
                "Wpisz p w polu Rzut p oraz q w polu Rzut q.",
                "Kliknij przycisk Oblicz przeciwprostokątną c.",
                "Odczytaj wynik przeciwprostokątnej w wybranej jednostce.",
                "Przed rozpoczęciem nowego zadania użyj przycisku Reset.",
              ],
            },
            {
              "kind": "p",
              "text": "Prawidłowa identyfikacja ma największe znaczenie. Pola oczekują dwóch odcinków samej przeciwprostokątnej, nie przyprostokątnych i nie wysokości. Wpisanie niewłaściwej pary nadal da sumę, ale nie będzie to przeciwprostokątna.",
            },
          ],
          "h2": "Jak korzystać z kalkulatora przeciwprostokątnej z rzutów",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ten kalkulator znajduje przeciwprostokątną trójkąta prostokątnego, dodając jej dwa odcinki rzutu.",
            },
            {
              "kind": "p",
              "text": "Rzuty p i q to dwa fragmenty przeciwprostokątnej powstałe, gdy wysokość z kąta prostego przecina ją. Wpisz obie długości, a kalkulator doda je wzorem [[c = p + q]], aby zwrócić pełną przeciwprostokątną. Na przykład, jeśli [[p = 4]] cm i [[q = 9]] cm, to [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest najdłuższym bokiem trójkąta prostokątnego i leży naprzeciw kąta prostego. Kalkulator pojawia się jako pierwszy na tej stronie, a po nim następują wzór, geometria stojąca za nim, rozwiązane przykłady i sposoby weryfikacji odpowiedzi.",
            },
            {
              "kind": "p",
              "text": "Przewodnik pasuje do uczniów szkoły podstawowej, którzy po raz pierwszy spotykają rzuty, do klas geometrii w szkole średniej oraz do wszystkich sprawdzających pracę domową. Każdy wzór jest opracowany na prawdziwych liczbach, dzięki czemu możesz śledzić każdy krok bez rozszyfrowywania symboli.",
            },
          ],
          "h2": "Kalkulator przeciwprostokątnej z rzutów w trójkącie prostokątnym",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Obliczenie ręczne to jedno podstawienie do [[c = p + q]]. Weź [[p = 3.6]] cm i [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Podstaw wartości: [[c = 3.6 + 6.4]]. Dodaj je: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Przy dodawaniu ręcznym ustaw przecinki dziesiętne w linii: 3.6 plus 6.4 daje 10.0, a końcowe zero można pominąć, aby uzyskać czyste [[c = 10]] cm. Zachowaj jednostkę przy odpowiedzi; sama liczba to niepełna długość.",
            },
            {
              "kind": "p",
              "text": "Nie potrzeba obliczeń pitagorejskich, ponieważ obie długości rzutów są już znane. Aby sprawdzić, upewnij się, że suma ma sens: 3.6 plus 6.4 to wyraźnie 10, a przeciwprostokątna musi być dłuższa niż każdy rzut z osobna.",
            },
          ],
          "h2": "Jak obliczyć przeciwprostokątną z rzutów ręcznie",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "Przeciwprostokątna to bok leżący naprzeciw kąta prostego i w każdym niezdegenerowanym trójkącie prostokątnym jest najdłuższym bokiem. Gdy wysokość z wierzchołka kąta prostego opada prostopadle na nią, przeciwprostokątna dzieli się na dwa krótsze odcinki leżące od końca do końca na tej samej prostej.",
            },
            {
              "kind": "p",
              "text": "Ponieważ oba odcinki leżą na tym jednym boku, zachowują się jak dwa sąsiadujące kawałki linijki: złożone razem odtwarzają cały bok dokładnie, bez nakładania się i bez przerwy. Dlatego rzuty zawsze sumują się do przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "Te oznaczenia odpowiadają głównemu diagramowi poniżej. Wierzchołki A i B to narożniki przy kątach ostrych, C to wierzchołek kąta prostego, a D to spodek wysokości CD na przeciwprostokątnej AB, przy czym [[AD = p]] i [[DB = q]].",
            },
          ],
          "h2": "Czym jest przeciwprostokątna i jej dwa odcinki",
          "table": {
            "headers": [
              "Symbol",
              "Znaczenie",
            ],
            "rows": [
              [
                "a",
                "Pierwsza przyprostokątna",
              ],
              [
                "b",
                "Druga przyprostokątna",
              ],
              [
                "c",
                "Pełna przeciwprostokątna",
              ],
              [
                "p",
                "Pierwszy rzut na przeciwprostokątną",
              ],
              [
                "q",
                "Drugi rzut na przeciwprostokątną",
              ],
              [
                "h",
                "Wysokość na przeciwprostokątną",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zacznij od trójkąta prostokątnego i narysuj wysokość z wierzchołka kąta prostego prostopadle do przeciwprostokątnej. Wysokość dotyka przeciwprostokątnej w jednym punkcie, zwanym spodkiem, a ten punkt dzieli przeciwprostokątną na dwa sąsiadujące odcinki. Te dwa odcinki to rzuty na przeciwprostokątną: [[p = AD]] i [[q = DB]], gdy trójkąt to ABC z kątem prostym przy C i wysokością CD. <a href=\"/right-triangle-projection-calculator/\">Kalkulator rzutów</a> traktuje każdy odcinek osobno.",
            },
            {
              "kind": "p",
              "text": "Rzut to nie przyprostokątna. Przyprostokątne a i b to dwa boki tworzące kąt prosty, natomiast rzuty p i q leżą płasko wzdłuż samej przeciwprostokątnej. Pomylenie ich to najczęstszy błąd oznaczania, więc zawsze pytaj: czy ta długość leży na przeciwprostokątnej, czy jest jednym z boków wokół kąta prostego?",
            },
            {
              "kind": "p",
              "text": "Oto przykład przyjazny początkującym. Jeśli wysokość dzieli przeciwprostokątną na odcinek 4 cm i odcinek 9 cm, to [[p = 4]] cm i [[q = 9]] cm, a pełna przeciwprostokątna to [[c = 4 + 9 = 13]] cm. Wzór [[c = p + q]] po prostu odtwarza cały bok z jego dwóch części.",
            },
            {
              "kind": "p",
              "text": "Szybki nawyk oznaczania zapobiega większości błędów: zacznij przy wierzchołku kąta prostego C, narysuj wysokość na przeciwprostokątną i zaznacz spodek D. Odcinek dotykający A to p, a odcinek dotykający B to q. Gdy te dwie etykiety są ustawione, reszta przewodnika stosuje się bezpośrednio.",
            },
          ],
          "h2": "Czym są rzuty na przeciwprostokątną w trójkącie prostokątnym?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Te same rzuty dają wysokość poprzez twierdzenie o średniej geometrycznej: [[h^2 = pq]], więc [[h = \\sqrt{pq}]]. Przy [[p = 9]] cm i [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Porównaj dwa wzory: [[c = p + q]] dodaje rzuty, natomiast [[h = \\sqrt{pq}]] bierze ich średnią geometryczną. Odpowiadają na różne pytania. Przeciwprostokątna to pełna długość boku; wysokość to prostopadła odległość od kąta prostego w dół do tego boku.",
            },
            {
              "kind": "p",
              "text": "Do zadań o wysokości użyj <a href=\"/right-triangle-altitude-from-projections-calculator/\">kalkulatora wysokości z rzutów</a>, który opiera się na [[h = \\sqrt{pq}]]. Trzymaj oba wyniki osobno: w tym trójkącie przeciwprostokątna ma 25 cm, natomiast wysokość tylko 12 cm.",
            },
            {
              "kind": "p",
              "text": "Stosuje się tu wbudowana kontrola sensowności: wysokość jest zawsze krótsza niż przeciwprostokątna. W rozwiązanym przykładzie 12 cm to znacznie mniej niż 25 cm. Jeśli twoja wysokość kiedykolwiek przekroczy przeciwprostokątną, sprawdź ponownie, którego wzoru użyłeś.",
            },
          ],
          "h2": "Jak rzuty na przeciwprostokątną wiążą się z wysokością",
          "image": {
            "alt": "Trójkąt prostokątny z rzutami 9 i 16 na przeciwprostokątnej, przeciwprostokątną 25 i wysokością 12 narysowaną prostopadle do przeciwprostokątnej",
            "caption": "Te same rzuty, dwa wzory: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Główny diagram pokazuje trójkąt ABC z kątem prostym przy C. Bok AC to przyprostokątna a, bok BC to przyprostokątna b, a bok AB to przeciwprostokątna c. Wysokość CD opada z C prostopadle na AB i dotyka jej w punkcie D.",
            },
            {
              "kind": "p",
              "text": "Dobry porządek odczytywania zaczyna się przy wierzchołku C: śledź przyprostokątną a w dół do A, przyprostokątną b w poprzek do B, a następnie przejdź wzdłuż przeciwprostokątnej c od A do B. Zatrzymaj się przy D, spodku wysokości, aby zobaczyć podział na p i q. Odczytywanie diagramu w ten sposób łączy oznaczenia ze wzorem.",
            },
            {
              "kind": "p",
              "text": "Punkt D dzieli AB na dwie części: odcinek AD to rzut p, a odcinek DB to rzut q. Etykiety znajdują się bezpośrednio na diagramie, dzięki czemu widać, gdzie zaczyna się p, gdzie kończy się q i jak te dwa razem pokrywają cały bok od A do B.",
            },
            {
              "kind": "p",
              "text": "Znaczniki kąta prostego przy C i D potwierdzają geometrię. Znacznik przy C czyni AB przeciwprostokątną, a znacznik przy D potwierdza, że CD jest wysokością. Pierwotny trójkąt jest teraz podzielony na dwa mniejsze trójkąty prostokątne, ACD i CBD, które powrócą dalej w tym przewodniku.",
            },
          ],
          "h2": "Wyjaśnienie diagramu rzutów na przeciwprostokątną",
          "image": {
            "alt": "Trójkąt prostokątny ABC z kątem prostym przy C; wysokość CD narysowana prostopadle do przeciwprostokątnej AB, dzieląca ją na rzut p (odcinek AD) i rzut q (odcinek DB), z oznaczonymi przyprostokątnymi a i b",
            "caption": "Wysokość CD dzieli przeciwprostokątną AB na rzuty p i q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy przykład podaje dane wartości, podstawienie i ostateczną odpowiedź. Komentarz pozostaje krótki, aby arytmetyka była widoczna.",
            },
            {
              "kind": "p",
              "text": "Wszystkie przykłady zachowują spójne jednostki od danych wartości do odpowiedzi. Gdy jednostki się różnią, przykład najpierw przelicza i mówi o tym wprost, dzięki czemu możesz przenieść ten nawyk do własnej pracy.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 4]] cm i [[q = 9]] cm, wzór [[c = p + q]] daje [[c = 4 + 9]], więc [[c = 13]] cm. Dwa całkowite rzuty dają tu całkowitą przeciwprostokątną, choć nie jest to zagwarantowane w ogólności.",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Równe rzuty",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 5]] cm i [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Równe rzuty oznaczają, że wysokość trafia w środek przeciwprostokątnej, co zdarza się dokładnie wtedy, gdy dwie przyprostokątne są równe: równoramienny trójkąt prostokątny. Ponieważ przyprostokątne są równe, wysokość jest też środkową, dlatego dzieli przeciwprostokątną na pół.",
            },
            {
              "kind": "h3",
              "text": "Przykład 3: Rzuty dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 3.6]] m i [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Ustaw przecinki dziesiętne w linii i dodaj jak zwykle; jednostka pozostaje metrem przez cały czas.",
            },
            {
              "kind": "h3",
              "text": "Przykład 4: Nierówne rzuty",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 2]] cm i [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Rzuty nie muszą być zbliżone wielkością; suma nadal odtwarza pełną przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Przykład 5: Większe pomiary",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 125]] mm i [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Duże wartości niczego nie zmieniają w metodzie.",
            },
            {
              "kind": "h3",
              "text": "Przykład 6: Mieszane jednostki",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 40]] mm i [[q = 9]] cm, najpierw przelicz: 40 mm to 4 cm. Potem [[c = 4 + 9 = 13]] cm. Dodawanie przed przeliczeniem dałoby bezsensowne 49.",
            },
            {
              "kind": "h3",
              "text": "Przykład 7: Pomiary ułamkowe",
            },
            {
              "kind": "p",
              "text": "Dane [[p = \\frac{1}{2}]] ft i [[q = \\frac{3}{4}]] ft, zapisz oba ze wspólnym mianownikiem 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, czyli 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Przykład 8: Znajdowanie brakującego rzutu",
            },
            {
              "kind": "p",
              "text": "Dane [[c = 25]] cm i [[p = 9]] cm, rozwiąż [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Ten odwrotny krok pokazuje, że zależność działa w obie strony, choć kalkulator na tej stronie dodaje p i q, aby znaleźć c, a nie rozwiązuje dla brakującego rzutu.",
            },
          ],
          "h2": "Rozwiązane przykłady obliczania przeciwprostokątnej z rzutów",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Rzuty wyznaczają też przyprostokątne poprzez twierdzenie o rzucie: [[a^2 = cp]] i [[b^2 = cq]]. Każda przyprostokątna jest średnią geometryczną przeciwprostokątnej i sąsiadującego z nią rzutu, co wynika z podobieństwa mniejszych trójkątów do pierwotnego.",
            },
            {
              "kind": "p",
              "text": "Pierwiastkowanie daje [[a = \\sqrt{cp}]] i [[b = \\sqrt{cq}]]. Przy [[p = 9]] cm i [[q = 16]] cm najpierw znajdź [[c = 9 + 16 = 25]] cm. Potem [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm i [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest więc kluczem odblokowującym pozostałe boki: gdy znane jest c, każda przyprostokątna wynika z własnego rzutu. <a href=\"/right-triangle-side-calculator/\">Kalkulator boków</a> rozwiązuje podobne zadania o brakujących bokach bezpośrednio.",
            },
            {
              "kind": "p",
              "text": "Skojarzenie nie jest przypadkowe: przyprostokątna a styka się z rzutem p w małym trójkącie ACD, który jest podobny do całego trójkąta, więc a wiąże się z c i p, natomiast b wiąże się z c i q. Pamiętanie, która przyprostokątna pasuje do którego rzutu, utrzymuje pierwiastki na właściwych odcinkach.",
            },
          ],
          "h2": "Zależność między rzutami na przeciwprostokątną a przyprostokątnymi trójkąta",
          "image": {
            "alt": "Trójkąt prostokątny z rzutami 9 i 16 oraz przeciwprostokątną 25, pokazujący, że przyprostokątna a równa się 15, ponieważ a kwadrat równa się 25 razy 9, a przyprostokątna b równa się 20, ponieważ b kwadrat równa się 25 razy 16",
            "caption": "Przyprostokątna a = sqrt(25 x 9) = 15; przyprostokątna b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Powodem jest aksjomat dodawania odcinków: jeśli punkt D leży na odcinku AB między A i B, to długość AB równa się AD plus DB. Tutaj D jest spodkiem wysokości, a A i B to końce przeciwprostokątnej, więc [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Podstawienie standardowych symboli daje wzór bezpośrednio. W niezdegenerowanym trójkącie prostokątnym spodek wysokości zawsze ląduje między końcami, więc aksjomat zawsze się stosuje. Do tego kroku nie potrzeba trygonometrii.",
            },
            {
              "kind": "p",
              "text": "Podobieństwo trójkątów jest narzędziem stojącym za głębszymi zależnościami rzutów, takimi jak [[a^2 = cp]], ale zwykłe dodawanie odcinków wystarcza, aby ustalić [[c = p + q]]. Diagram poniżej pokazuje tę samą ideę na jednej prostej.",
            },
            {
              "kind": "p",
              "text": "Jeden szczegół zasługuje na podkreślenie: D zawsze leży ściśle między A i B w prawdziwym trójkącie prostokątnym, nigdy w punkcie końcowym i nigdy poza odcinkiem. To położenie sprawia, że aksjomat dodawania odcinków ma zastosowanie, i dlatego zerowe lub ujemne rzuty są odrzucane.",
            },
          ],
          "h2": "Dlaczego przeciwprostokątna równa się sumie swoich rzutów?",
          "image": {
            "alt": "Prosty odcinek AB podzielony w punkcie D na odcinek AD oznaczony p i odcinek DB oznaczony q, pokazujący, że cały odcinek równa się p plus q",
            "caption": "Punkt między A i B dzieli odcinek: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "W klasach i pracach domowych zadania o rzutach sprawdzają, czy uczniowie potrafią oznaczyć diagram i zastosować [[c = p + q]] zamiast sięgać po twierdzenie Pitagorasa. Ćwiczenia z rysunku technicznego wykorzystują tę samą umiejętność, gdy wysokość dzieli zmierzoną przeciwprostokątną na planie.",
            },
            {
              "kind": "p",
              "text": "Modele geodezyjne i geometria architektoniczna czasem sprowadzają układ trójkąta prostokątnego do przeciwprostokątnej przeciętej prostopadłą, gdzie dodanie dwóch oznaczonych odcinków daje pełną rozpiętość. Konstrukcje geometryczne na papierze używają sumy do ustawiania szerokości cyrkla.",
            },
            {
              "kind": "p",
              "text": "Warunek jest zawsze ten sam: p i q muszą być sąsiadującymi częściami jednej przeciwprostokątnej w prawdziwym trójkącie prostokątnym. Dowolne odległości nigdy się nie kwalifikują, bez względu na to, jak kuszące wygląda dodawanie.",
            },
            {
              "kind": "p",
              "text": "Nauczyciele mogą wykorzystać układ rzutów jako lekcję pomostową: powtarza dodawanie odcinków z wcześniejszych klas, a jednocześnie zapowiada twierdzenia o podobieństwie, które pojawią się później na kursie geometrii.",
            },
          ],
          "h2": "Praktyczne zastosowania obliczeń rzutów na przeciwprostokątną",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie drogi prowadzą do przeciwprostokątnej. Gdy znane są odcinki wysokości, użyj dodawania odcinków: [[c = p + q]]. Gdy zamiast tego znane są dwa boki wokół kąta prostego, użyj twierdzenia Pitagorasa: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Wybierz wzór z rzutami, gdy zadanie podaje spodek wysokości i jej dwa odcinki; wybierz wzór z przyprostokątnymi, gdy podaje dwa prostopadłe boki. W jednym spójnym trójkącie obie drogi dają to samo c.",
            },
            {
              "kind": "p",
              "text": "Szybka kontrola krzyżowa łączy oba wzory. Z rzutów [[p = 9]] i [[q = 16]], [[c = 25]]. Przyprostokątne to [[a = 15]] i [[b = 20]], a [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Obie drogi lądują na tej samej przeciwprostokątnej.",
            },
          ],
          "h2": "Przeciwprostokątna z rzutów a przeciwprostokątna z przyprostokątnych",
          "table": {
            "headers": [
              "Znane wartości",
              "Wzór",
              "Metoda",
            ],
            "rows": [
              [
                "Rzuty p i q",
                "c = p + q",
                "Dodawanie odcinków",
              ],
              [
                "Przyprostokątne a i b",
                "c = √(a² + b²)",
                "Twierdzenie Pitagorasa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każdy błąd poniżej jest opatrzony poprawką.",
            },
            {
              "kind": "steps",
              "steps": [
                "Mnożenie p i q zamiast ich dodawania. Przy [[p = 4]] i [[q = 9]] iloczyn 36 nie ma tu znaczenia; przeciwprostokątna to [[4 + 9 = 13]].",
                "Mylenie rzutów z przyprostokątnymi. Przyprostokątne spotykają się przy kącie prostym; rzuty leżą wzdłuż przeciwprostokątnej. Oznacz każdą długość przed obliczeniem.",
                "Używanie wysokości jako rzutu. Wysokość h jest prostopadła do przeciwprostokątnej, a nie jej częścią, więc nigdy nie należy do [[c = p + q]].",
                "Mieszanie jednostek miary. [[p = 40]] mm i [[q = 9]] cm muszą stać się 4 cm i 9 cm przed dodaniem; surowa suma 49 nie ma prawidłowej jednostki.",
                "Wpisywanie ujemnych długości. Rzuty są z definicji dodatnie, więc ujemny wpis sygnalizuje błąd danych.",
                "Mylenie przeciwprostokątnej z przyprostokątną. Przeciwprostokątna leży naprzeciw kąta prostego i jest najdłuższym bokiem; przyprostokątna nigdy nie może pełnić jej roli.",
                "Zapominanie o jednym odcinku. Dodanie samego p daje częściową długość; przeciwprostokątna potrzebuje obu części.",
                "Używanie niepowiązanych pomiarów. Dwie liczby muszą być sąsiadującymi częściami tej samej przeciwprostokątnej, a nie dowolnymi długościami z zadania.",
                "Stosowanie twierdzenia Pitagorasa do p i q. Wartość [[\\sqrt{p^2 + q^2}]] to nie przeciwprostokątna, ponieważ p i q są współliniowe, a nie prostopadłe.",
                "Mylenie [[c = p + q]] z [[h = \\sqrt{pq}]]. Dodawanie znajduje przeciwprostokątną; średnia geometryczna znajduje wysokość. Zamiana wzorów zamienia odpowiedzi.",
              ],
            },
            {
              "kind": "p",
              "text": "Jeśli przyłapiesz się na błędzie w połowie, zatrzymaj się i ponownie oznacz diagram przed przeliczeniem. Większość powyższych błędów znika, gdy p i q są wyraźnie zaznaczone na przeciwprostokątnej, a wszystko inne jest skreślone.",
            },
          ],
          "h2": "Typowe błędy przy obliczaniu przeciwprostokątnej z rzutów",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Spróbuj tych sześciu zadań, a następnie sprawdź rozwiązane odpowiedzi poniżej. Żadna z wartości nie powtarza rozwiązanych przykładów.",
            },
            {
              "kind": "p",
              "text": "Rozwiąż każde zadanie na papierze przed przeczytaniem odpowiedzi. W razie potrzeby zasłoń odpowiedzi dłonią; zadanie wieloetapowe najlepiej sprawdza, czy twierdzenia o rzutach się utrwaliły.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 1: Liczby całkowite",
            },
            {
              "kind": "p",
              "text": "Wysokość trójkąta prostokątnego dzieli przeciwprostokątną na [[p = 12]] cm i [[q = 4]] cm. Znajdź c.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 2: Ułamki dziesiętne",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 2.5]] m i [[q = 7.5]] m, znajdź przeciwprostokątną.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 3: Równe rzuty",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 7]] in i [[q = 7]] in, znajdź c. Jaki to rodzaj trójkąta?",
            },
            {
              "kind": "h3",
              "text": "Zadanie 4: Przeliczanie jednostek",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 200]] mm i [[q = 35]] cm, znajdź przeciwprostokątną w centymetrach.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 5: Brakujący rzut",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna mierzy [[c = 50]] cm, a jeden rzut to [[q = 32]] cm. Znajdź p.",
            },
            {
              "kind": "h3",
              "text": "Zadanie 6: Wieloetapowe z przyprostokątnymi",
            },
            {
              "kind": "p",
              "text": "Dane [[p = 16]] cm i [[q = 9]] cm, znajdź c, a następnie znajdź przyprostokątne a i b.",
            },
            {
              "kind": "h3",
              "text": "Odpowiedzi do zadań ćwiczeniowych",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 3: [[c = 7 + 7 = 14]] in. Równe rzuty dają równoramienny trójkąt prostokątny.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 4: Przelicz 200 mm na 20 cm, a następnie [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Odpowiedź 6: [[c = 16 + 9 = 25]] cm. Potem [[a = \\sqrt{25 \\times 16} = 20]] cm i [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Zadania do ćwiczeń z odpowiedziami",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zależności rzutów zgadzają się dokładnie z twierdzeniem Pitagorasa. Zacznij od twierdzenia o rzucie: [[a^2 = cp]] i [[b^2 = cq]]. Dodanie obu równań daje [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnięcie c przed nawias jest poprawne, ponieważ mnoży oba wyrazy. Ponieważ [[p + q = c]], podstawienie daje:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sprawdzenie liczbowe na trójkącie 9-16-25 potwierdza algebrę: [[a^2 + b^2 = 225 + 400 = 625]] i [[c^2 = 25^2 = 625]]. Obie strony się zgadzają, co jest dokładnie tym, co przewiduje dowód z wyciągnięciem przed nawias.",
            },
            {
              "kind": "p",
              "text": "Dowód zamyka się zgrabnie: zwykła suma odcinków leży w sercu zależności pitagorejskiej. Diagram poniżej pokazuje, skąd biorą się [[a^2 = cp]] i [[b^2 = cq]]: każdy mały trójkąt dzieli kąty z pierwotnym, więc odpowiadające sobie boki pozostają proporcjonalne.",
            },
          ],
          "h2": "Rzuty na przeciwprostokątną a twierdzenie Pitagorasa",
          "image": {
            "alt": "Pierwotny trójkąt prostokątny ABC obok dwóch mniejszych podobnych trójkątów ACD i CBD z dopasowanymi kątami i oznaczonymi odpowiadającymi sobie bokami",
            "caption": "Trójkąty ACD i CBD są podobne do ABC, co daje a kwadrat równa się cp i b kwadrat równa się cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Każda poniższa własność wynika bezpośrednio z dodawania, co sprawia, że łatwo im zaufać.",
            },
            {
              "items": [
                "Równe rzuty: jeśli [[p = q]], to [[c = 2p]]. Wysokość ląduje w środku, a dwie przyprostokątne są równe, co daje równoramienny trójkąt prostokątny.",
                "Nierówne rzuty: działa każda dodatnia para. Wysokość przechyla się w stronę dłuższego rzutu, a bliższa przyprostokątna jest krótsza.",
                "Bardzo małe rzuty: wzór nadal obowiązuje, na przykład [[p = 0.5]] mm i [[q = 1.5]] mm dają [[c = 2]] mm.",
                "Bardzo duże rzuty: nie ma górnego limitu, na przykład [[p = 1200]] m i [[q = 800]] m dają [[c = 2000]] m.",
                "Skalowanie: podwojenie obu rzutów podwaja przeciwprostokątną, ponieważ [[2p + 2q = 2(p + q)]].",
                "Zamiana p i q: [[p + q = q + p]], więc przeciwprostokątna nie zmienia się, a jedynie etykiety AD i DB zamieniają się miejscami.",
                "Rzuty o zerowej długości: [[p = 0]] oznacza, że wysokość pokrywa się z przyprostokątną, więc trójkąt jest zdegenerowany i kalkulator go nie akceptuje.",
                "Ujemne rzuty: długości nie mogą być ujemne, więc ujemny wpis to zawsze błąd danych.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Diagram porównuje dwa trójkąty o tej samej przeciwprostokątnej, ale różnych podziałach rzutów, pokazując, jak zmienia się kształt, podczas gdy suma pozostaje stała.",
            },
          ],
          "h2": "Przypadki szczególne i ważne własności",
          "image": {
            "alt": "Dwa trójkąty prostokątne o tej samej długości przeciwprostokątnej 10: jeden z równymi rzutami 5 i 5, drugi z rzutami 2 i 8",
            "caption": "Ta sama przeciwprostokątna, różne kształty: p = q = 5 kontra p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trzy szybkie kontrole wyłapują prawie każdy błąd obliczeń. Pierwsza to bezpośrednie obliczenie; dwie pozostałe potwierdzają je z różnych stron.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 1: Ponownie oblicz dodawanie odcinków",
            },
            {
              "kind": "p",
              "text": "Dodaj p i q jeszcze raz, powoli. Przy [[p = 4]] i [[q = 9]] potwierdź [[4 + 9 = 13]]. Nieostrożne przeoczenie tutaj to najczęstsze źródło błędnej odpowiedzi.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 2: Potwierdź, że przyprostokątne pasują do Pitagorasa",
            },
            {
              "kind": "p",
              "text": "Oblicz przyprostokątne z rzutów, [[a = \\sqrt{cp}]] i [[b = \\sqrt{cq}]], a następnie sprawdź [[a^2 + b^2 = c^2]]. Dla [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]] i [[225 + 400 = 625]]. Ta geometryczna kontrola wykracza poza dodawanie kalkulatora.",
            },
            {
              "kind": "h3",
              "text": "Kontrola 3: Kontrola sensowności diagramu",
            },
            {
              "kind": "p",
              "text": "Potwierdź, że oba rzuty są dodatnie, że oba leżą na tej samej przeciwprostokątnej i że c jest dłuższe niż każdy odcinek z osobna. Jeśli wynik jest mniejszy niż p lub q, wartość została wpisana w niewłaściwe pole.",
            },
          ],
          "h2": "Jak sprawdzić obliczenie przeciwprostokątnej",
        },
      },
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "answer": "Wzór ma postać [[c = p + q]], gdzie p i q to dwa odcinki rzutu przeciwprostokątnej. Dodaj dwie długości, aby otrzymać pełną przeciwprostokątną. Na przykład [[p = 4]] cm i [[q = 9]] cm dają [[c = 13]] cm.",
          "question": "Jaki jest wzór na przeciwprostokątną z rzutów?",
        },
        {
          "answer": "To dwa odcinki powstałe, gdy wysokość z kąta prostego spotyka przeciwprostokątną. Oznaczone jako [[p = AD]] i [[q = DB]] w trójkącie ABC z wysokością CD, leżą od końca do końca wzdłuż przeciwprostokątnej i razem pokrywają ją w całości.",
          "question": "Czym są rzuty na przeciwprostokątną?",
        },
        {
          "answer": "Z powodu dodawania odcinków: spodek wysokości leży między końcami przeciwprostokątnej, więc cały bok równa się sumie swoich części. Podstawienie standardowych symboli zamienia [[AB = AD + DB]] w [[c = p + q]]. Trygonometria nie jest potrzebna.",
          "question": "Dlaczego dodajemy p i q?",
        },
        {
          "answer": "Nie. Przyprostokątne a i b tworzą kąt prosty, natomiast rzuty p i q leżą wzdłuż przeciwprostokątnej. Ich mylenie to najczęstszy błąd oznaczania, więc przed obliczeniem sprawdź położenie każdej długości na diagramie.",
          "question": "Czy rzuty to to samo co przyprostokątne trójkąta?",
        },
        {
          "answer": "Tak. Wysokość rzadko trafia w dokładny środek, więc p i q są zwykle nierówne. Każda dodatnia para jest prawidłowa, a suma nadal daje przeciwprostokątną. Trójkąt po prostu przechyla się w stronę dłuższego rzutu.",
          "question": "Czy rzuty mogą mieć różne długości?",
        },
        {
          "answer": "Wzór przyjmuje postać [[c = 2p]]. Wysokość dzieli przeciwprostokątną na pół, dwie przyprostokątne są równe, a trójkąt jest równoramiennym trójkątem prostokątnym. Geometrycznie wysokość ląduje dokładnie w środku.",
          "question": "Co się dzieje, gdy p i q są równe?",
        },
        {
          "answer": "Tak, innym wzorem: [[h = \\sqrt{pq}]], średnią geometryczną rzutów. <a href=\"/right-triangle-altitude-from-projections-calculator/\">Kalkulator wysokości z rzutów</a> jest zbudowany do tego obliczenia. Trzymaj go osobno od [[c = p + q]], które znajduje przeciwprostokątną.",
          "question": "Czy mogę obliczyć wysokość, używając p i q?",
        },
        {
          "answer": "Tak. Najpierw znajdź [[c = p + q]], a następnie użyj [[a = \\sqrt{cp}]] i [[b = \\sqrt{cq}]]. Dla [[p = 9]], [[q = 16]] i [[c = 25]] przyprostokątne to 15 i 20. To edukacyjne rozszerzenia, a nie główna funkcja tego kalkulatora.",
          "question": "Czy mogę znaleźć przyprostokątne trójkąta z rzutów?",
        },
        {
          "answer": "Nie. Znalezienie przeciwprostokątnej z rzutów wymaga tylko dodawania, bez pierwiastków kwadratowych. Twierdzenie Pitagorasa przydaje się, gdy znane są przyprostokątne, lub przy weryfikacji wyniku poprzez przyprostokątne.",
          "question": "Czy twierdzenie Pitagorasa jest potrzebne do tego obliczenia?",
        },
        {
          "answer": "Przelicz jeden pomiar tak, aby oba używały tej samej jednostki przed dodaniem. Na przykład [[p = 40]] mm staje się 4 cm, gdy [[q = 9]] cm, co daje [[c = 13]] cm. Selektory jednostek kalkulatora służą temu samemu celowi.",
          "question": "Co jeśli p i q mają różne jednostki?",
        },
        {
          "answer": "Nie. Rzut jest tylko częścią przeciwprostokątnej, więc musi być krótszy niż całość. Jeśli wynik pokazuje inaczej, wartość została wpisana w niewłaściwe pole.",
          "question": "Czy rzut może być dłuższy niż przeciwprostokątna?",
        },
        {
          "answer": "Przelicz powoli [[c = p + q]], a następnie potwierdź, że przyprostokątne spełniają [[a^2 + b^2 = c^2]]. Sprawdź też, czy oba rzuty są dodatnie i czy c przekracza każdy z nich. Wszystkie trzy kontrole zajmują mniej niż minutę.",
          "question": "Jak mogę sprawdzić wynik przeciwprostokątnej?",
        },
      ],
      "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
      "relatedIntro": "Wybierz kolejne narzędzie według pomiarów, które znasz. Każdy kalkulator poniżej obsługuje jedno konkretne zadanie dla trójkąta prostokątnego, od poszczególnych odcinków rzutu po wysokość i boki trójkąta.",
      "relatedItems": [
        "Kalkulator rzutów w trójkącie prostokątnym",
        "Kalkulator rzutu p w trójkącie prostokątnym",
        "Kalkulator rzutu q w trójkącie prostokątnym",
        "Kalkulator wysokości z rzutów w trójkącie prostokątnym",
        "Kalkulator boków trójkąta prostokątnego",
      ],
    },
};
