// specialGuideTranslations.bpl.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B4_PL = {
  "pl": {
      "meta": {
        "title": "Kalkulator trójkąta prostokątnego specjalnego - proporcje 45-45-90 i 30-60-90",
        "description": "Rozwiązuj trójkąty 45-45-90 i 30-60-90 za pomocą Kalkulatora trójkąta prostokątnego specjalnego. Użyj stałych proporcji 1:1:√2 i 1:√3:2, aby szybko znaleźć brakujące boki.",
        "primaryKeyword": "Kalkulator trójkąta prostokątnego specjalnego",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Nawigacja po sekcjach",
      "tocItems": {
        "sec-intro": "Kalkulator trójkąta prostokątnego specjalnego",
        "sec-calculate": "Obliczanie brakujących boków trójkątów prostokątnych specjalnych",
        "sec-what": "Czym są specjalne trójkąty prostokątne?",
        "sec-types": "Dwa główne typy specjalnych trójkątów prostokątnych",
        "sec-454590": "Trójkąt 45-45-90",
        "sec-derive-454590": "Wyprowadzenie proporcji boków 45-45-90",
        "sec-306090": "Trójkąt 30-60-90",
        "sec-derive-306090": "Wyprowadzenie proporcji boków 30-60-90",
        "sec-compare": "Porównanie proporcji boków obu specjalnych trójkątów",
        "sec-how-hyp-45": "Jak korzystać z kalkulatora przeciwprostokątnej 45-45-90",
        "sec-how-leg-45": "Jak znaleźć przyprostokątną na podstawie przeciwprostokątnej 45-45-90",
        "sec-how-long-30": "Jak korzystać z kalkulatora długiej przyprostokątnej 30-60-90",
        "sec-how-hyp-30": "Jak korzystać z kalkulatora przeciwprostokątnej 30-60-90",
        "sec-examples": "Przykłady krok po kroku dla obu typów trójkątów specjalnych",
        "sec-area-perimeter": "Pole i obwód w specjalnych trójkątach prostokątnych",
        "sec-exact": "Dokładne odpowiedzi z pierwiastkami a przybliżenia dziesiętne",
        "sec-verify": "Jak sprawdzać obliczenia dla specjalnych trójkątów prostokątnych",
        "sec-mistakes": "Typowe błędy przy rozwiązywaniu specjalnych trójkątów prostokątnych",
        "sec-applications": "Praktyczne zastosowania specjalnych trójkątów prostokątnych",
        "sec-practice": "Zadania do ćwiczeń z odpowiedziami",
        "sec-related": "Powiązane kalkulatory trójkątów prostokątnych",
        "sec-faq": "Często zadawane pytania",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkulator trójkąta prostokątnego specjalnego",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiązuj trójkąty 45-45-90 i 30-60-90 na podstawie jednego znanego boku, korzystając z ich stałych proporcji boków.",
            },
            {
              "kind": "p",
              "text": "Specjalny trójkąt prostokątny to trójkąt prostokątny, którego kąty dają stałą proporcję boków, która nigdy się nie zmienia, niezależnie od tego, jak duży lub mały jest trójkąt. Tylko dwa układy kątów dają taki efekt w geometrii szkolnej: trójkąt 45-45-90 i trójkąt 30-60-90. Kalkulator trójkąta prostokątnego specjalnego na tej stronie obejmuje oba typy, więc jeden znany bok wystarczy, aby znaleźć każdy inny bok.",
            },
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 ma dwie równe przyprostokątne, a jego boki tworzą proporcję [[a : b : c = 1 : 1 : \\sqrt{2}]]. Trójkąt 30-60-90 ma trzy różne długości boków, a jego boki tworzą proporcję [[a : b : c = 1 : \\sqrt{3} : 2]]. Tutaj [[a]] i [[b]] to przyprostokątne, a [[c]] to przeciwprostokątna, a znaczenie [[a]] i [[b]] zmienia się wraz z typem trójkąta, więc w poniższych sekcjach zawsze podano, który typ jest używany.",
            },
            {
              "kind": "p",
              "text": "Jeśli trójkąt 45-45-90 ma przyprostokątną o długości 5 cm, druga przyprostokątna również ma 5 cm, a przeciwprostokątna wynosi [[c = 5\\sqrt{2} \\approx 7.071]] cm. Jeśli trójkąt 30-60-90 ma krótką przyprostokątną o długości 5 cm, długa przyprostokątna wynosi [[b = 5\\sqrt{3} \\approx 8.660]] cm, a przeciwprostokątna wynosi [[c = 10]] cm. Cztery tryby kalkulatora na tej stronie wykonują dokładnie te kroki, a poniższy przewodnik wyjaśnia, skąd pochodzi każda proporcja, jak wybrać właściwy tryb i jak sprawdzić każdą odpowiedź.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Obliczanie brakujących boków trójkątów prostokątnych specjalnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkulator na tej stronie ma cztery tryby, po jednym dla każdego brakującego boku, o który zwykle pyta się w zadaniach o trójkąty prostokątne specjalne. Najpierw wybierz typ trójkąta, a następnie wybierz bok, który znasz, i bok, którego potrzebujesz. Poniższa tabela zawiera każdy tryb wraz z daną wejściową, wzorem i wynikiem.",
            },
          ],
          "table": {
            "headers": [
              "Tryb kalkulatora",
              "Wymagana dana wejściowa",
              "Wynik",
            ],
            "rows": [
              [
                "45-45-90: Przeciwprostokątna",
                "Przyprostokątna a",
                "Przeciwprostokątna c",
              ],
              [
                "45-45-90: Przyprostokątna",
                "Przeciwprostokątna c",
                "Przyprostokątna a",
              ],
              [
                "30-60-90: Długa przyprostokątna",
                "Krótka przyprostokątna a",
                "Długa przyprostokątna b",
              ],
              [
                "30-60-90: Przeciwprostokątna",
                "Krótka przyprostokątna a",
                "Przeciwprostokątna c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Tryb 1 znajduje przeciwprostokątną trójkąta 45-45-90 na podstawie dowolnej równej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Tryb 2 znajduje przyprostokątną trójkąta 45-45-90 na podstawie przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Tryb 3 znajduje długą przyprostokątną trójkąta 30-60-90 na podstawie krótkiej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Tryb 4 znajduje przeciwprostokątną trójkąta 30-60-90 na podstawie krótkiej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Aby użyć dowolnego trybu, potwierdź typ trójkąta na podstawie jego kątów, określ znany bok, wpisz dodatnią długość, wybierz jednostkę zgodną z resztą zadania i kliknij Oblicz. Użyj przycisku Resetuj przed nowym obliczeniem, aby stara wartość nie przedostała się do kolejnej odpowiedzi. Każdy tryb wymaga innego wzoru, ponieważ każdy tryb zaczyna od innego znanego boku, a oba typy trójkątów mają różne proporcje, więc wzór dla 45-45-90 nigdy nie pasuje do zadania o 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Schemat przepływu czterech trybów Kalkulatora trójkąta prostokątnego specjalnego: 45-45-90 z przyprostokątnej do przeciwprostokątnej, 45-45-90 z przeciwprostokątnej do przyprostokątnej, 30-60-90 z krótkiej przyprostokątnej do długiej przyprostokątnej oraz 30-60-90 z krótkiej przyprostokątnej do przeciwprostokątnej",
            "caption": "Cztery tryby kalkulatora: każdy zaczyna od znanego boku i stosuje jedną stałą proporcję.",
          },
        },
        "sec-what": {
          "h2": "Czym są specjalne trójkąty prostokątne?",
          "blocks": [
            {
              "kind": "p",
              "text": "Specjalny trójkąt prostokątny to trójkąt prostokątny, którego trzy kąty mają stałe wartości wymuszające jedną niezmienną proporcję boków. Większość trójkątów prostokątnych nie daje takiego skrótu: znajomość jednego boku nic nie mówi o pozostałych, dopóki nie znasz także kąta lub drugiego boku. W specjalnym trójkącie prostokątnym same kąty ustalają kształt, więc jedna długość boku ustala cały trójkąt.",
            },
            {
              "kind": "p",
              "text": "Twierdzenie Pitagorasa nadal obowiązuje i to właśnie ono daje obie proporcje. W trójkącie 45-45-90 dwie równe przyprostokątne sprawiają, że twierdzenie sprowadza się do [[2a^2 = c^2]], co daje [[c = a\\sqrt{2}]]. W trójkącie 30-60-90 przeciwprostokątna jest dwa razy dłuższa od krótkiej przyprostokątnej, więc twierdzenie daje [[b^2 = (2a)^2 - a^2 = 3a^2]], co daje [[b = a\\sqrt{3}]]. Pełne wyprowadzenia znajdują się w osobnych sekcjach poniżej.",
            },
            {
              "kind": "p",
              "text": "Proporcje pozostają takie same przy każdej wielkości, ponieważ trójkąty są podobne w obrębie własnego typu. Trójkąt 45-45-90 o przyprostokątnej 1 cm i taki o przyprostokątnej 100 cm mają ten sam kształt, te same kąty i tę samą proporcję 1:1:√2. Ta niezależność od skali sprawia, że trójkąty te są tak przydatne w geometrii i trygonometrii: gdy rozpoznasz układ kątów, możesz zapisać każdy bok bez mierzenia i bez używania sinusa i cosinusa.",
            },
            {
              "kind": "p",
              "text": "Trójkąty 45-45-90 i 30-60-90 to dwie różne rodziny, a nie dwie nazwy tego samego kształtu. Jeden ma dwie równe przyprostokątne, a drugi ma trzy różne długości boków. Mylenie ich to najczęstszy błąd w tym temacie, więc następna sekcja przedstawia każdą rodzinę osobno, zanim przewodnik porówna je obok siebie.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Dwa specjalne trójkąty prostokątne obok siebie: trójkąt 45-45-90 o proporcji 1:1:√2 i trójkąt 30-60-90 o proporcji 1:√3:2",
            "caption": "Dwa specjalne trójkąty prostokątne: 45-45-90 o równych przyprostokątnych i 30-60-90 o trzech różnych bokach.",
          },
        },
        "sec-types": {
          "h2": "Dwa główne typy specjalnych trójkątów prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Oba specjalne trójkąty są trójkątami prostokątnymi, więc każdy ma kąt 90° i przeciwprostokątną naprzeciw niego. Różni je para kątów ostrych, a kąty ostre decydują o proporcji boków. Najpierw poznaj każdy typ osobno, a porównanie w dalszej części przewodnika będzie łatwe do zrozumienia.",
            },
            {
              "kind": "h3",
              "text": "Trójkąt 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Kąty: 45°, 45°, 90°.",
                "Dwie równe przyprostokątne, więc dowolna przyprostokątna może być znaną daną wejściową.",
                "Przeciwprostokątna jest równa przyprostokątnej pomnożonej przez √2, [[c = a\\sqrt{2}]].",
                "Proporcja boków: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Nazywany także równoramiennym trójkątem prostokątnym.",
              ],
            },
            {
              "kind": "h3",
              "text": "Trójkąt 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Kąty: 30°, 60°, 90°.",
                "Krótka przyprostokątna [[a]] naprzeciw kąta 30°, długa przyprostokątna [[b]] naprzeciw kąta 60°.",
                "Przeciwprostokątna jest równa dwukrotności krótkiej przyprostokątnej, [[c = 2a]].",
                "Długa przyprostokątna jest równa krótkiej przyprostokątnej pomnożonej przez √3, [[b = a\\sqrt{3}]].",
                "Proporcja boków: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Trójkąt prostokątny różnoboczny, ponieważ wszystkie trzy boki różnią się.",
              ],
            },
            {
              "kind": "p",
              "text": "Różnica wizualna jest wyraźna, gdy wiesz, czego szukać. W trójkącie 45-45-90 dwie przyprostokątne wyglądają na równe, a przeciwprostokątna biegnie pod kątem 45° do każdej przyprostokątnej. W trójkącie 30-60-90 przyprostokątna naprzeciw kąta 30° jest wyraźnie najkrótszym bokiem, przyprostokątna naprzeciw kąta 60° jest dłuższa, a przeciwprostokątna jest dokładnie dwa razy dłuższa od krótkiej przyprostokątnej. Poniższa tabela podsumowuje ten kontrast.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Kąty",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Proporcja boków",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Równe przyprostokątne",
                "Tak",
                "Nie",
              ],
              [
                "Najkrótszy bok",
                "Obie przyprostokątne",
                "Krótka przyprostokątna (naprzeciw 30°)",
              ],
              [
                "Najdłuższy bok",
                "Przeciwprostokątna",
                "Przeciwprostokątna",
              ],
              [
                "Wzór na przeciwprostokątną",
                "a√2",
                "2a",
              ],
              [
                "Wzór na długą przyprostokątną",
                "Nie dotyczy",
                "a√3",
              ],
              [
                "Typ trójkąta",
                "Równoramienny prostokątny",
                "Różnoboczny prostokątny",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Trójkąt 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 45-45-90 to równoramienny trójkąt prostokątny. Jego dwa kąty ostre mają po 45°, więc kąty sumują się do [[45° + 45° + 90° = 180°]], jak w każdym trójkącie. Ponieważ dwa kąty ostre są równe, boki naprzeciw nich też są równe, dlatego dwie przyprostokątne mają tę samą długość.",
            },
            {
              "kind": "p",
              "text": "Oznaczmy przyprostokątne jako [[a]] i [[b]], a przeciwprostokątną jako [[c]]. Równe przyprostokątne oznaczają, że [[a = b]], a proporcja boków wynosi [[a : b : c = 1 : 1 : \\sqrt{2}]]. Przeciwprostokątna jest najdłuższym bokiem, jak w każdym trójkącie prostokątnym, i jest dłuższa od każdej przyprostokątnej o współczynnik √2, czyli około 1.414.",
            },
            {
              "kind": "p",
              "text": "Dwa podstawowe wzory to przeciwprostokątna na podstawie przyprostokątnej oraz przyprostokątna na podstawie przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Weźmy przyprostokątną o długości 5 cm. Druga przyprostokątna ma 5 cm, a przeciwprostokątna wynosi [[c = 5\\sqrt{2} \\approx 7.071]] cm. Te same kroki działają przy każdej wielkości: przyprostokątna 12 cm daje przeciwprostokątną [[12\\sqrt{2} \\approx 16.971]] cm, a przyprostokątna 1 jednostki daje przeciwprostokątną √2 jednostek. <a href=\"/45-45-90-triangle-calculator/\">Kalkulator trójkąta 45-45-90</a> omawia ten typ trójkąta w pełni, w tym pole i obwód.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Trójkąt 45-45-90 z dwiema równymi przyprostokątnymi oznaczonymi jako przystające, kątami 45°, 45°, 90° i przeciwprostokątną oznaczoną a√2",
            "caption": "Trójkąt 45-45-90: równe przyprostokątne, równe kąty ostre i przeciwprostokątna a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Wyprowadzenie proporcji boków 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Proporcja 1:1:√2 nie jest regułą do zapamiętania na pamięć. Wynika w kilku krokach z twierdzenia Pitagorasa, a zobaczenie tych kroków raz sprawia, że proporcję trudno zapomnieć. Zacznij od tego, że przyprostokątne są równe.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Zastosuj twierdzenie Pitagorasa do przyprostokątnych i przeciwprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Zastąp [[b]] przez [[a]], ponieważ przyprostokątne są równe.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Połącz dwa identyczne wyrazy.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnij dodatni pierwiastek kwadratowy z obu stron. Długości są dodatnie, więc ujemny pierwiastek odrzucamy.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[a = 1]], a proporcja pojawi się bezpośrednio: przyprostokątne 1 i 1, przeciwprostokątna √2, więc proporcja wynosi [[1 : 1 : \\sqrt{2}]]. Ta sama proporcja wyjaśnia przekątną kwadratu. Kwadrat o boku [[a]] ma przekątną, która dzieli go na dwa przystające trójkąty 45-45-90, a przekątna jest przeciwprostokątną każdego z nich, więc przekątna jest równa [[a\\sqrt{2}]]. Kwadrat o boku 8 cm ma przekątną [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Trójkąt 45-45-90 z oznaczeniami pokazującymi wyprowadzenie z twierdzenia Pitagorasa: a do kwadratu plus a do kwadratu równa się c do kwadratu, co daje c równe a razy pierwiastek z 2",
              "caption": "Wyprowadzenie z twierdzenia Pitagorasa: równe przyprostokątne zamieniają a² + b² = c² w 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Kwadrat o boku 8 cm i przekątnej 8 pierwiastków z 2 cm, podzielony na dwa przystające trójkąty 45-45-90",
              "caption": "Przekątna kwadratu dzieli kwadrat na dwa przystające trójkąty 45-45-90.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Trójkąt 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trójkąt 30-60-90 ma trzy różne kąty, więc ma trzy różne długości boków. Bok naprzeciw najmniejszego kąta jest najkrótszym bokiem, bok naprzeciw środkowego kąta jest środkowym bokiem, a bok naprzeciw kąta 90° jest przeciwprostokątną. Ta zasada boków naprzeciw kątów to cały klucz do prawidłowego oznaczenia tego trójkąta.",
            },
            {
              "kind": "p",
              "text": "Użyj [[a]] dla krótkiej przyprostokątnej naprzeciw 30°, [[b]] dla długiej przyprostokątnej naprzeciw 60° i [[c]] dla przeciwprostokątnej naprzeciw 90°. Dwa podstawowe wzory to długa przyprostokątna na podstawie krótkiej przyprostokątnej oraz przeciwprostokątna na podstawie krótkiej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Proporcja boków wynosi [[a : b : c = 1 : \\sqrt{3} : 2]], przy czym √3 to około 1.732. Weźmy krótką przyprostokątną o długości 5 cm. Długa przyprostokątna wynosi [[b = 5\\sqrt{3} \\approx 8.660]] cm, a przeciwprostokątna wynosi [[c = 10]] cm. Sprawdź twierdzeniem Pitagorasa: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], co potwierdza, że trzy boki pasują do siebie.",
            },
            {
              "kind": "p",
              "text": "Przeciwprostokątna jest zawsze dokładnie dwa razy dłuższa od krótkiej przyprostokątnej, co jest najszybszym sprawdzeniem w tym temacie. Jeśli w zadaniu podano, że przeciwprostokątna ma 14 cm, krótka przyprostokątna ma od razu 7 cm, a długa przyprostokątna wynosi [[7\\sqrt{3} \\approx 12.124]] cm. <a href=\"/30-60-90-triangle-calculator/\">Kalkulator trójkąta 30-60-90</a> omawia ten typ trójkąta w pełni, w tym jego wyprowadzenie z trójkąta równobocznego.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Trójkąt 30-60-90 z krótką przyprostokątną a naprzeciw 30 stopni, długą przyprostokątną a pierwiastek z 3 naprzeciw 60 stopni i przeciwprostokątną 2a naprzeciw 90 stopni",
            "caption": "Trójkąt 30-60-90: krótka przyprostokątna leży naprzeciw 30°, długa przyprostokątna naprzeciw 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Wyprowadzenie proporcji boków 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Proporcja 1:√3:2 pochodzi z trójkąta równobocznego, a konstrukcję warto prześledzić krok po kroku. Zacznij od trójkąta równobocznego o długości boku [[2a]]. Wszystkie trzy jego kąty mają 60°, a wszystkie trzy boki są równe.",
            },
            {
              "kind": "p",
              "text": "Poprowadź wysokość z jednego wierzchołka do przeciwległego boku. Wysokość robi trzy rzeczy naraz: dzieli trójkąt równoboczny na dwa przystające trójkąty prostokątne, przecina podstawę na dwa odcinki o długości [[a]] i dzieli jeden kąt 60° na dwa kąty 30°. Każda połowa jest teraz trójkątem o kątach 30°, 60° i 90°.",
            },
            {
              "kind": "p",
              "text": "W każdej połowie przeciwprostokątna jest pierwotnym bokiem równobocznym, [[2a]], a krótka przyprostokątna jest połową podstawy, [[a]]. Oznaczmy wysokość, która jest długą przyprostokątną, jako [[b]]. Zastosuj twierdzenie Pitagorasa do połowy trójkąta.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Rozwiń kwadrat.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Uprość.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Wyciągnij dodatni pierwiastek kwadratowy.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Przyjmij [[a = 1]], a proporcja pojawi się: krótka przyprostokątna 1, długa przyprostokątna √3, przeciwprostokątna 2, więc proporcja wynosi [[1 : \\sqrt{3} : 2]]. Wysokość trójkąta równobocznego o boku 10 cm wynosi zatem [[5\\sqrt{3} \\approx 8.660]] cm, ponieważ wysokość jest długą przyprostokątną trójkąta 30-60-90 o krótkiej przyprostokątnej 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Trójkąt równoboczny o boku 2a podzielony wysokością na dwa przystające trójkąty 30-60-90, każdy z krótką przyprostokątną a, długą przyprostokątną a pierwiastek z 3 i przeciwprostokątną 2a",
            "caption": "Wysokość dzieli trójkąt równoboczny na dwa przystające trójkąty 30-60-90.",
          },
        },
        "sec-compare": {
          "h2": "Porównanie proporcji boków obu specjalnych trójkątów",
          "blocks": [
            {
              "kind": "p",
              "text": "Dwie proporcje na pierwszy rzut oka wyglądają podobnie i właśnie dlatego łatwo je pomylić. Obie zawierają pierwiastek kwadratowy i małą liczbę całkowitą i obie opisują trójkąt prostokątny. Ale liczby znajdują się w różnych miejscach: w proporcji 1:1:√2 pierwiastek należy do przeciwprostokątnej, natomiast w proporcji 1:√3:2 pierwiastek należy do długiej przyprostokątnej, a przeciwprostokątna jest liczbą całkowitą 2.",
            },
          ],
          "table": {
            "headers": [
              "Cecha",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Kąty",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Proporcja boków",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Równe przyprostokątne",
                "Tak",
                "Nie",
              ],
              [
                "Najkrótszy bok",
                "Obie przyprostokątne",
                "Krótka przyprostokątna",
              ],
              [
                "Najdłuższy bok",
                "Przeciwprostokątna",
                "Przeciwprostokątna",
              ],
              [
                "Wzór na przeciwprostokątną",
                "a√2",
                "2a",
              ],
              [
                "Wzór na długą przyprostokątną",
                "Nie dotyczy",
                "a√3",
              ],
              [
                "Typ trójkąta",
                "Równoramienny prostokątny",
                "Różnoboczny prostokątny",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Wzorów nie można zamieniać. Pomnożenie krótkiej przyprostokątnej 30-60-90 przez √2 daje błędną przeciwprostokątną, a podwojenie przyprostokątnej 45-45-90 daje błędną przeciwprostokątną. Dwa trójkąty pochodzą z różnych konstrukcji, przekątnej kwadratu dla 45-45-90 i wysokości trójkąta równobocznego dla 30-60-90, więc ich proporcje odpowiadają na różne pytania geometryczne.",
            },
            {
              "kind": "p",
              "text": "Jeden przykład liczbowy dla każdego typu pokazuje różnicę. Trójkąt 45-45-90 o przyprostokątnej 5 cm ma przeciwprostokątną [[5\\sqrt{2} \\approx 7.071]] cm. Trójkąt 30-60-90 o krótkiej przyprostokątnej 5 cm ma przeciwprostokątną 10 cm i długą przyprostokątną [[5\\sqrt{3} \\approx 8.660]] cm. Ta sama liczba początkowa, bardzo różne odpowiedzi, a jedynym sposobem, aby je odróżnić, jest układ kątów.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Porównanie obok siebie proporcji 45-45-90 1:1:√2 i proporcji 30-60-90 1:√3:2 w tej samej skali",
            "caption": "Obie proporcje w tej samej skali: pierwiastek znajduje się na przeciwprostokątnej dla 45-45-90 i na długiej przyprostokątnej dla 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Jak korzystać z kalkulatora przeciwprostokątnej 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Tryb 1 to najczęściej używany tryb na tej stronie i zajmuje tylko kilka sekund, gdy typ trójkąta jest potwierdzony. Wykonaj kroki w kolejności.",
            },
            {
              "kind": "steps",
              "steps": [
                "Potwierdź, że trójkąt jest 45-45-90: oba kąty ostre mają 45°.",
                "Wybierz dowolną równą przyprostokątną jako znany bok, ponieważ obie przyprostokątne mają tę samą długość.",
                "Wybierz w kalkulatorze tryb przeciwprostokątnej 45-45-90.",
                "Wpisz długość przyprostokątnej jako liczbę dodatnią.",
                "Wybierz jednostkę zgodną z resztą zadania.",
                "Kliknij Oblicz przeciwprostokątną c.",
                "Odczytaj wynik, który jest przeciwprostokątną w tej samej jednostce.",
                "Użyj przycisku Resetuj przed rozpoczęciem nowego obliczenia.",
              ],
            },
            {
              "kind": "p",
              "text": "Tryb stosuje poniższy wzór.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Przy przyprostokątnej 7 cm przeciwprostokątna wynosi [[c = 7\\sqrt{2} \\approx 9.899]] cm. Wzór obowiązuje tylko wtedy, gdy oba kąty ostre mają 45°, więc przed zaufaniem odpowiedzi sprawdź kąty. Jeśli kąty wynoszą zamiast tego 30° i 60°, przełącz się na tryb 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Jak znaleźć przyprostokątną na podstawie przeciwprostokątnej 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Tryb 2 działa wstecz, od przeciwprostokątnej do przyprostokątnej. Dzieli przez √2, co jest krokiem najczęściej zapominanym. Wzór pokazano poniżej.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Ten sam wynik można zapisać w postaci z usuniętą niewymiernością z mianownika, co pozwala uniknąć pierwiastka w mianowniku.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aby użyć tego trybu, potwierdź układ kątów 45-45-90, wybierz tryb przyprostokątnej 45-45-90, wpisz przeciwprostokątną, wybierz jednostkę i kliknij Oblicz. Przy przeciwprostokątnej 10 cm przyprostokątna wynosi [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Obie przyprostokątne mają tę długość, ponieważ przyprostokątne są równe, więc jedna odpowiedź opisuje cały trójkąt. Szybkie sprawdzenie: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], co zgadza się z kwadratem przeciwprostokątnej.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Jak korzystać z kalkulatora długiej przyprostokątnej 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Tryb 3 znajduje długą przyprostokątną na podstawie krótkiej przyprostokątnej, a jedyną trudną częścią jest prawidłowe rozpoznanie krótkiej przyprostokątnej. Krótka przyprostokątna to bok naprzeciw kąta 30° i jest zawsze najkrótszym bokiem trójkąta.",
            },
            {
              "kind": "steps",
              "steps": [
                "Potwierdź na podstawie kątów, że trójkąt jest 30-60-90.",
                "Znajdź bok naprzeciw kąta 30°: to jest krótka przyprostokątna.",
                "Wybierz w kalkulatorze tryb długiej przyprostokątnej 30-60-90.",
                "Wpisz krótką przyprostokątną jako liczbę dodatnią.",
                "Wybierz jednostkę zgodną z resztą zadania.",
                "Kliknij Oblicz długą przyprostokątną.",
                "Odczytaj wynik, który jest długą przyprostokątną w tej samej jednostce.",
              ],
            },
            {
              "kind": "p",
              "text": "Tryb stosuje poniższy wzór.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Przy krótkiej przyprostokątnej 6 cm długa przyprostokątna wynosi [[b = 6\\sqrt{3} \\approx 10.392]] cm. Wpisanie przez pomyłkę przeciwprostokątnej lub długiej przyprostokątnej daje błędną odpowiedź, więc najpierw oznacz boki i wpisz tylko krótką przyprostokątną.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Jak korzystać z kalkulatora przeciwprostokątnej 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Tryb 4 to najprostszy tryb na tej stronie, ponieważ przeciwprostokątna trójkąta 30-60-90 jest dokładnie dwa razy dłuższa od krótkiej przyprostokątnej. Nie ma w nim pierwiastka kwadratowego, co ułatwia sprawdzenie odpowiedzi ręcznie.",
            },
            {
              "kind": "steps",
              "steps": [
                "Potwierdź na podstawie kątów, że trójkąt jest 30-60-90.",
                "Określ krótką przyprostokątną, bok naprzeciw kąta 30°.",
                "Wybierz w kalkulatorze tryb przeciwprostokątnej 30-60-90.",
                "Wpisz krótką przyprostokątną jako liczbę dodatnią.",
                "Wybierz jednostkę zgodną z resztą zadania.",
                "Kliknij Oblicz przeciwprostokątną c.",
                "Odczytaj wynik, który jest przeciwprostokątną w tej samej jednostce.",
              ],
            },
            {
              "kind": "p",
              "text": "Tryb stosuje poniższy wzór.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Przy krótkiej przyprostokątnej 8 cm przeciwprostokątna wynosi [[c = 16]] cm. Długa przyprostokątna tego samego trójkąta wynosi [[8\\sqrt{3} \\approx 13.856]] cm, co mieści się między krótką przyprostokątną a przeciwprostokątną, jak powinno. Jeśli wynik kiedykolwiek wyjdzie mniejszy od krótkiej przyprostokątnej, wybrano niewłaściwy tryb.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Przykłady krok po kroku dla obu typów trójkątów specjalnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Te dwa rozwiązane przykłady wyznaczają każdy bok każdego typu trójkąta na podstawie jednego znanego boku. Pole i obwód pojawiają się tu jako dodatkowe obliczenia ręczne, a nie jako tryby kalkulatora: kalkulator na tej stronie znajduje tylko długości boków.",
            },
            {
              "kind": "h3",
              "text": "Przykład 1: Trójkąt 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dany jest trójkąt 45-45-90 o przyprostokątnej [[a = 5]] cm. Znajdź drugą przyprostokątną, przeciwprostokątną, pole i obwód.",
            },
            {
              "kind": "p",
              "text": "Przyprostokątne są równe, więc druga przyprostokątna wynosi [[b = 5]] cm. Przeciwprostokątna wynika z proporcji.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Pole jest równe połowie iloczynu przyprostokątnych.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Obwód jest sumą wszystkich trzech boków.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Przykład 2: Trójkąt 30-60-90",
            },
            {
              "kind": "p",
              "text": "Dany jest trójkąt 30-60-90 o krótkiej przyprostokątnej [[a = 5]] cm. Znajdź długą przyprostokątną, przeciwprostokątną, pole i obwód.",
            },
            {
              "kind": "p",
              "text": "Długa przyprostokątna jest równa krótkiej przyprostokątnej pomnożonej przez √3, a przeciwprostokątna jest dwa razy dłuższa od krótkiej przyprostokątnej.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Pole jest równe połowie iloczynu przyprostokątnych.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Obwód jest sumą wszystkich trzech boków.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Oba przykłady zgadzają się z twierdzeniem Pitagorasa. Dla pierwszego: [[5^2 + 5^2 = 50]], a [[7.071^2 \\approx 50]]. Dla drugiego: [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Pole i obwód w specjalnych trójkątach prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Pole i obwód to przydatne obliczenia uzupełniające, gdy boki są już znane, ale są to zależności ręczne, a nie funkcje kalkulatora na tej stronie. Poniższe wzory używają tych samych oznaczeń boków co reszta przewodnika, przy czym [[a]] oznacza znaną przyprostokątną dla 45-45-90 i krótką przyprostokątną dla 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Dla trójkąta 45-45-90 pole jest równe połowie kwadratu przyprostokątnej, a obwód jest równy przyprostokątnej pomnożonej przez [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Dla trójkąta 30-60-90 pole jest równe połowie iloczynu przyprostokątnych, a obwód jest równy krótkiej przyprostokątnej pomnożonej przez [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Weźmy trójkąt 45-45-90 o przyprostokątnej 6 cm. Jego pole wynosi [[A = \\frac{36}{2} = 18]] cm², a obwód wynosi [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Weźmy trójkąt 30-60-90 o krótkiej przyprostokątnej 6 cm. Jego pole wynosi [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², a obwód wynosi [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Pilnuj jednostek: pole zawsze wyrażamy w jednostkach kwadratowych, a obwód w jednostkach liniowych, więc odpowiedź 18 cm dla pola to błąd jednostki, a nie błąd zaokrąglenia.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Dokładne odpowiedzi z pierwiastkami a przybliżenia dziesiętne",
          "blocks": [
            {
              "kind": "p",
              "text": "Pierwiastki kwadratowe w tym przewodniku są liczbami niewymiernymi, co oznacza, że ich rozwinięcia dziesiętne nigdy się nie kończą i nigdy się nie powtarzają. Dwie wartości, które warto znać, pokazano poniżej.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Dokładna odpowiedź zachowuje pierwiastek, na przykład [[5\\sqrt{2}]], natomiast odpowiedź dziesiętna zastępuje go przybliżeniem, na przykład [[5\\sqrt{2} \\approx 7.071]]. Dokładne odpowiedzi są preferowane w matematyce szkolnej, ponieważ nie niosą błędu zaokrąglenia i pokazują strukturę zadania. Nauczyciel od razu widzi, że [[5\\sqrt{2}]] pochodzi z trójkąta 45-45-90, natomiast 7.071 mogłoby pochodzić skądkolwiek.",
            },
            {
              "kind": "p",
              "text": "Liczby dziesiętne są lepsze w pomiarach praktycznych, gdzie linijka lub narzędzie tnące potrzebuje liczby, a nie symbolu. Gdy potrzebna jest liczba dziesiętna, zaokrąglaj dopiero na końcu obliczenia, nigdy w środku. Zaokrąglenie √2 do 1.41 przed pomnożeniem przez 5 daje 7.05, co różni się o 0.021 od prawdziwej wartości 7.071, a błąd rośnie wraz z większymi liczbami. Każdą liczbę dziesiętną oznacz znakiem w przybliżeniu równa się, aby czytelnik nigdy nie pomylił [[5\\sqrt{3} \\approx 8.660]] z dokładną równością.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Jak sprawdzać obliczenia dla specjalnych trójkątów prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Każdą odpowiedź dla trójkąta specjalnego można sprawdzić w mniej niż minutę za pomocą trzech testów: proporcji boków, twierdzenia Pitagorasa i sumy kątów. Zanim zaufasz wynikowi, wykonaj co najmniej dwa z nich.",
            },
            {
              "kind": "p",
              "text": "Dla trójkąta 45-45-90 sprawdź, czy przyprostokątne są równe, [[a = b]], oraz czy boki spełniają twierdzenie Pitagorasa, [[a^2 + b^2 = c^2]]. Przy [[a = 5]] cm i [[c = 7.071]] cm sprawdzenie to [[25 + 25 = 50]] wobec [[7.071^2 \\approx 50]], co się zgadza.",
            },
            {
              "kind": "p",
              "text": "Dla trójkąta 30-60-90 sprawdź, czy długa przyprostokątna jest równa krótkiej przyprostokątnej pomnożonej przez √3, [[b = a\\sqrt{3}]], czy przeciwprostokątna jest dwa razy dłuższa od krótkiej przyprostokątnej, [[c = 2a]], oraz czy [[a^2 + b^2 = c^2]]. Przy [[a = 5]] cm, [[b = 8.660]] cm i [[c = 10]] cm sprawdzenie to [[25 + 75 = 100 = 10^2]], co się zgadza.",
            },
            {
              "kind": "p",
              "text": "Sprawdź też sumę kątów: trzy kąty muszą sumować się do 180°. Trójkąt 45-45-90 daje [[45° + 45° + 90° = 180°]], a trójkąt 30-60-90 daje [[30° + 60° + 90° = 180°]]. Jeśli proporcja, twierdzenie i kąty zgadzają się, odpowiedź jest pewna. Jeśli którykolwiek z nich nie zgadza się, typ trójkąta został rozpoznany błędnie albo użyto niewłaściwego wzoru.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Typowe błędy przy rozwiązywaniu specjalnych trójkątów prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Czternaście błędów powoduje prawie każdą błędną odpowiedź w tym temacie. Każdy z nich wymieniono poniżej wraz z prawidłowym podejściem, abyś mógł szybko znaleźć własny błąd.",
            },
            {
              "kind": "list",
              "items": [
                "Mylenie trójkątów 45-45-90 z trójkątami 30-60-90. Najpierw sprawdź kąty: dwa kąty 45° oznaczają 45-45-90, natomiast 30° i 60° oznaczają 30-60-90.",
                "Używanie √3 zamiast √2. Przeciwprostokątna 45-45-90 wynosi [[c = a\\sqrt{2}]], nigdy [[a\\sqrt{3}]].",
                "Używanie √2 zamiast √3. Długa przyprostokątna 30-60-90 wynosi [[b = a\\sqrt{3}]], nigdy [[a\\sqrt{2}]].",
                "Zakładanie, że obie przyprostokątne są równe w trójkącie 30-60-90. Tylko trójkąt 45-45-90 ma równe przyprostokątne; w trójkącie 30-60-90 długa przyprostokątna jest √3 razy dłuższa od krótkiej.",
                "Zakładanie, że krótka i długa przyprostokątna są równe. Krótka przyprostokątna leży naprzeciw 30°, a długa przyprostokątna naprzeciw 60°, więc różnią się o współczynnik √3.",
                "Zapominanie, że przeciwprostokątna 30-60-90 jest równa dwukrotności krótkiej przyprostokątnej. Wynosi ona [[c = 2a]], czyli jest to podwojenie liczbą całkowitą bez pierwiastka kwadratowego.",
                "Używanie niewłaściwego boku wejściowego. Tryb 3 i tryb 4 potrzebują krótkiej przyprostokątnej, więc wpisanie długiej przyprostokątnej lub przeciwprostokątnej daje błędną odpowiedź.",
                "Mylenie krótkiej przyprostokątnej z przeciwprostokątną. Przeciwprostokątna jest najdłuższym bokiem i leży naprzeciw kąta 90°, a krótka przyprostokątna jest najkrótszym bokiem.",
                "Zapominanie o dzieleniu przez √2 przy znajdowaniu przyprostokątnej 45-45-90. Przyprostokątna wynosi [[a = \\frac{c}{\\sqrt{2}}]], a nie [[a = c\\sqrt{2}]], co sprawiłoby, że przyprostokątna byłaby dłuższa od przeciwprostokątnej.",
                "Zapominanie o mnożeniu przez √3 przy znajdowaniu długiej przyprostokątnej 30-60-90. Długa przyprostokątna wynosi [[b = a\\sqrt{3}]], a użycie samego [[a]] daje z powrotem krótką przyprostokątną.",
                "Zaokrąglanie pierwiastków zbyt wcześnie. Zachowaj [[\\sqrt{2}]] i [[\\sqrt{3}]] w dokładnej postaci na każdym kroku i zaokrąglaj tylko ostateczną odpowiedź.",
                "Mieszanie jednostek. Przyprostokątna w cm i przeciwprostokątna w mm nie mogą występować w jednym wzorze; najpierw przelicz jednostki, a potem obliczaj.",
                "Mylenie pola z obwodem. Pole używa jednostek kwadratowych i wzoru [[A = \\frac{a^2}{2}]] dla 45-45-90, natomiast obwód używa jednostek liniowych i wzoru [[P = a(2 + \\sqrt{2})]].",
                "Stosowanie wzorów dla trójkątów specjalnych do dowolnych trójkątów prostokątnych. Proporcje 1:1:√2 i 1:√3:2 działają tylko dla własnych układów kątów; trójkąt 20-70-90 wymaga zamiast tego trygonometrii.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktyczne zastosowania specjalnych trójkątów prostokątnych",
          "blocks": [
            {
              "kind": "p",
              "text": "Specjalne trójkąty prostokątne pojawiają się wszędzie tam, gdzie występują kwadraty, trójkąty równoboczne i standardowe kąty. Przekątna kwadratu to zadanie o 45-45-90: kwadratowy blat stołu o boku 60 cm ma przekątną [[60\\sqrt{2} \\approx 84.853]] cm. Wysokość trójkąta równobocznego to zadanie o 30-60-90: trójkątny znak o boku 40 cm ma wysokość [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "Na lekcjach trójkąty te przyspieszają zadania domowe z geometrii i ćwiczenia z trygonometrii, ponieważ standardowe kąty, takie jak 30°, 45° i 60°, mają dokładne wartości sinusa i cosinusa, które wynikają bezpośrednio z tych proporcji. W rysunku technicznym i kreśleniu pod standardowymi kątami ekierki 45° i 30-60 są zbudowane dokładnie na tych trójkątach, więc kreślarz może wykreślić linię pod kątem 45° lub 30°, znając z góry proporcje boków.",
            },
            {
              "kind": "p",
              "text": "Koncepcje architektoniczne i projektowe wykorzystują te same układy do stężeń ukośnych, spadków dachu i układów płytek, a geometria budowlana wykorzystuje je do szybkich sprawdzeń na budowie, takich jak potwierdzenie, że narożnik jest prosty, poprzez pomiar przekątnej w stylu 3-4-5 lub przekątnej 45-45-90. Modelowanie matematyczne i pokazy w klasie również je wykorzystują, ponieważ dokładne odpowiedzi z pierwiastkami zachowują widoczne rozumowanie zamiast ukrywać je w kalkulatorze. Traktuj je jako skróty geometryczne do planowania i sprawdzania, a nie jako zamiennik prawidłowych pomiarów inżynierskich tam, gdzie wymagana jest precyzja.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Zadania do ćwiczeń z odpowiedziami",
          "blocks": [
            {
              "kind": "p",
              "text": "Rozwiąż każde zadanie samodzielnie, a potem sprawdź rozwiązanie. Pytania o pole i obwód to ćwiczenia ręczne, a nie tryby kalkulatora. Użyj innych liczb niż w głównych przykładach, aby wzorce trzeba było zastosować na nowo.",
            },
            {
              "kind": "h3",
              "text": "Zadania 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Trójkąt 45-45-90 ma przyprostokątną o długości 7 cm. Znajdź przeciwprostokątną. Rozwiązanie: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Trójkąt 45-45-90 ma przeciwprostokątną o długości 12 cm. Znajdź przyprostokątną. Rozwiązanie: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Trójkąt 45-45-90 ma przyprostokątną o długości 9 cm. Znajdź pole. Rozwiązanie: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Trójkąt 45-45-90 ma przyprostokątną o długości 4 cm. Znajdź obwód. Rozwiązanie: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Zadania 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Trójkąt 30-60-90 ma krótką przyprostokątną o długości 7 cm. Znajdź długą przyprostokątną. Rozwiązanie: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Trójkąt 30-60-90 ma krótką przyprostokątną o długości 9 cm. Znajdź przeciwprostokątną. Rozwiązanie: [[c = 2 \\times 9 = 18]] cm.",
                "Trójkąt 30-60-90 ma krótką przyprostokątną o długości 6 cm. Znajdź pole. Rozwiązanie: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Trójkąt 30-60-90 ma krótką przyprostokątną o długości 10 cm. Znajdź obwód. Rozwiązanie: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Powiązane kalkulatory trójkątów prostokątnych",
      "relatedIntro": "Każde narzędzie poniżej rozwiązuje inny rodzaj zadania o trójkącie prostokątnym. Wybierz to, które pasuje do informacji, które już masz.",
      "relatedItems": [
        "Kalkulator trójkąta 45-45-90",
        "Kalkulator trójkąta 30-60-90",
        "Kalkulator boków trójkąta prostokątnego",
        "Kalkulator stosunków trygonometrycznych",
        "Kalkulator kątów trójkąta prostokątnego",
        "Kalkulator twierdzenia Pitagorasa",
      ],
      "faqHeading": "Często zadawane pytania",
      "faqs": [
        {
          "question": "Czym jest specjalny trójkąt prostokątny?",
          "answer": "Specjalny trójkąt prostokątny to trójkąt prostokątny, którego kąty ustalają proporcję boków, więc jeden znany bok wyznacza każdy inny bok. Dwa typy to trójkąt 45-45-90 o proporcji [[1 : 1 : \\sqrt{2}]] oraz trójkąt 30-60-90 o proporcji [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Które specjalne trójkąty prostokątne obejmuje ten kalkulator?",
          "answer": "Ten kalkulator obejmuje trójkąt 45-45-90 i trójkąt 30-60-90, czyli dwa specjalne trójkąty prostokątne używane w geometrii szkolnej. Ma cztery tryby: przeciwprostokątna 45-45-90 na podstawie przyprostokątnej, przyprostokątna 45-45-90 na podstawie przeciwprostokątnej, długa przyprostokątna 30-60-90 na podstawie krótkiej przyprostokątnej oraz przeciwprostokątna 30-60-90 na podstawie krótkiej przyprostokątnej.",
        },
        {
          "question": "Jaka jest proporcja boków trójkąta 45-45-90?",
          "answer": "Proporcja boków trójkąta 45-45-90 wynosi [[1 : 1 : \\sqrt{2}]]. Dwie przyprostokątne są równe, a przeciwprostokątna jest równa przyprostokątnej pomnożonej przez √2, czyli około 1.414. Przy przyprostokątnej 5 cm przeciwprostokątna wynosi [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Jaka jest proporcja boków trójkąta 30-60-90?",
          "answer": "Proporcja boków trójkąta 30-60-90 wynosi [[1 : \\sqrt{3} : 2]]. Krótka przyprostokątna leży naprzeciw 30°, długa przyprostokątna naprzeciw 60°, a przeciwprostokątna naprzeciw 90°. Przy krótkiej przyprostokątnej 5 cm długa przyprostokątna wynosi [[5\\sqrt{3} \\approx 8.660]] cm, a przeciwprostokątna ma 10 cm.",
        },
        {
          "question": "Dlaczego w trójkącie 45-45-90 pojawia się √2?",
          "answer": "√2 pochodzi z twierdzenia Pitagorasa zastosowanego do dwóch równych przyprostokątnych. Przy [[a = b]] twierdzenie daje [[a^2 + a^2 = c^2]], więc [[2a^2 = c^2]] oraz [[c = a\\sqrt{2}]]. Pierwiastek jest ceną zamiany dwóch równych kwadratów w jeden kwadrat przeciwprostokątnej.",
        },
        {
          "question": "Dlaczego w trójkącie 30-60-90 pojawia się √3?",
          "answer": "√3 pochodzi z podzielenia trójkąta równobocznego na pół. Wysokość dzieli trójkąt równoboczny o boku [[2a]] na dwa trójkąty 30-60-90, a twierdzenie Pitagorasa dla jednej połowy daje [[b^2 = 3a^2]], więc długa przyprostokątna wynosi [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Jak znaleźć przeciwprostokątną trójkąta 45-45-90?",
          "answer": "Pomnóż dowolną równą przyprostokątną przez √2. Wzór to [[c = a\\sqrt{2}]]. Na przykład przyprostokątna 7 cm daje przeciwprostokątną [[7\\sqrt{2} \\approx 9.899]] cm. Wybierz tryb przeciwprostokątnej 45-45-90, wpisz przyprostokątną i kliknij Oblicz.",
        },
        {
          "question": "Jak znaleźć długą przyprostokątną trójkąta 30-60-90?",
          "answer": "Pomnóż krótką przyprostokątną przez √3. Wzór to [[b = a\\sqrt{3}]]. Na przykład krótka przyprostokątna 6 cm daje długą przyprostokątną [[6\\sqrt{3} \\approx 10.392]] cm. Upewnij się, że wpisujesz krótką przyprostokątną, bok naprzeciw kąta 30°, a nie przeciwprostokątną.",
        },
        {
          "question": "Czy mogę obliczyć brakującą przyprostokątną na podstawie przeciwprostokątnej?",
          "answer": "Tak, dla trójkąta 45-45-90. Podziel przeciwprostokątną przez √2, używając [[a = \\frac{c}{\\sqrt{2}}]] lub postaci z usuniętą niewymiernością z mianownika [[a = \\frac{c\\sqrt{2}}{2}]]. Przeciwprostokątna 10 cm daje przyprostokątną [[5\\sqrt{2} \\approx 7.071]] cm, a obie przyprostokątne mają tę długość.",
        },
        {
          "question": "Czy wszystkie specjalne trójkąty prostokątne są podobne w obrębie własnego typu?",
          "answer": "Tak. Każdy trójkąt 45-45-90 ma te same kąty i tę samą proporcję 1:1:√2, więc dowolne dwa są podobne. Każdy trójkąt 30-60-90 również ma tę samą proporcję 1:√3:2. Trójkąt 45-45-90 nigdy nie jest podobny do trójkąta 30-60-90, ponieważ ich kąty różnią się.",
        },
        {
          "question": "Jaka jest różnica między dwoma typami trójkątów specjalnych?",
          "answer": "Trójkąt 45-45-90 ma dwie równe przyprostokątne i proporcję 1:1:√2, natomiast trójkąt 30-60-90 ma trzy różne boki i proporcję 1:√3:2. Pierwszy pochodzi z przekątnej kwadratu, drugi z wysokości trójkąta równobocznego, a ich wzorów nie można zamieniać.",
        },
        {
          "question": "Jak mogę sprawdzić obliczone długości boków?",
          "answer": "Sprawdź proporcję boków, twierdzenie Pitagorasa i sumę kątów. Dla 45-45-90 potwierdź [[a = b]] oraz [[a^2 + b^2 = c^2]]. Dla 30-60-90 potwierdź [[b = a\\sqrt{3}]], [[c = 2a]] oraz [[a^2 + b^2 = c^2]]. Jeśli wszystkie trzy sprawdzenia się zgadzają, odpowiedź jest pewna.",
        },
      ],
    },
};
