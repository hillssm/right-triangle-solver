// pythagoreanTriplesGuideTranslations.bde.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B2_DE = {
  "de": {
      "meta": {
        "title": "Rechner für pythagoreische Tripel - Tripel prüfen und erzeugen",
        "description": "Prüfen Sie, ob drei ganze Zahlen ein pythagoreisches Tripel bilden, und erzeugen Sie Tripel mit der Euklid-Formel. Lernen Sie primitive Tripel, Skalierung und durchgerechnete Beispiele kennen.",
        "primaryKeyword": "Rechner für pythagoreische Tripel",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "Rechner für pythagoreische Tripel",
        "sec-calculate": "Pythagoreische Tripel mit dem Rechner prüfen oder erzeugen",
        "sec-what": "Was ist ein pythagoreisches Tripel?",
        "sec-pythagorean": "Den Satz des Pythagoras verstehen",
        "sec-check": "So prüfen Sie, ob drei Zahlen ein pythagoreisches Tripel bilden",
        "sec-euclid": "So erzeugen Sie pythagoreische Tripel mit der Euklid-Formel",
        "sec-proof": "Mathematischer Beweis der Euklid-Formel",
        "sec-primitive": "Was ist ein primitives pythagoreisches Tripel?",
        "sec-nonprimitive": "Was ist ein nicht primitives pythagoreisches Tripel?",
        "sec-conditions": "Bedingungen für die Erzeugung primitiver pythagoreischer Tripel",
        "sec-difference": "Unterschied zwischen primitiven und nicht primitiven Tripeln",
        "sec-scaling": "So erzeugen Sie weitere Tripel durch Skalierung vorhandener Tripel",
        "sec-examples": "Bekannte Beispiele pythagoreischer Tripel",
        "sec-worked": "Durchgerechnete Beispiele Schritt für Schritt mit dem Rechner",
        "sec-infinite": "Warum gibt es unendlich viele pythagoreische Tripel?",
        "sec-recognize": "So erkennen Sie ein pythagoreisches Tripel ohne Raten",
        "sec-ordinary": "Pythagoreische Tripel und gewöhnliche rechtwinklige Dreiecke",
        "sec-mistakes": "Häufige Fehler bei der Verwendung des Rechners für pythagoreische Tripel",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "Rechner für pythagoreische Tripel",
          "blocks": [
            {
              "kind": "p",
              "text": "Prüfen Sie ganzzahlige Tripel und erzeugen Sie neue mit der Euklid-Formel.",
            },
            {
              "kind": "p",
              "text": "Ein pythagoreisches Tripel ist eine Menge von drei positiven ganzen Zahlen, die als Seiten eines rechtwinkligen Dreiecks dienen können. Die beiden kürzeren Zahlen sind die Katheten, die größte Zahl ist die Hypotenuse, und die drei Werte erfüllen den Satz des Pythagoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Der Rechner für pythagoreische Tripel erfüllt zwei Aufgaben. Im Prüfmodus geben Sie drei ganze Zahlen ein und er testet, ob sie ein gültiges Tripel bilden. Im Erzeugungsmodus geben Sie zwei ganze Zahlen ein, [[m]] und [[n]], und er bildet mit der Euklid-Formel ein neues Tripel. Prüfen und Erzeugen sind verschiedene Aufgaben, und diese Seite erklärt beide Schritt für Schritt.",
            },
            {
              "kind": "p",
              "text": "Das bekannteste Beispiel ist [[3]], [[4]] und [[5]]. Das Quadrieren und Addieren der Katheten ergibt [[3^2+4^2=9+16=25]], was [[5^2]] entspricht. Weil beide Seiten genau übereinstimmen, ist [[(3, 4, 5)]] ein gültiges Tripel. Ein primitives Tripel ist eines, dessen drei Zahlen keinen gemeinsamen Teiler größer als [[1]] haben; [[3]], [[4]] und [[5]] haben nichts gemeinsam, also ist [[(3, 4, 5)]] primitiv. Die folgenden Abschnitte zeigen, wie Sie drei beliebige Zahlen prüfen, wie Sie Tripel beliebiger Größe erzeugen und wie Sie primitive Tripel von skalierten Kopien unterscheiden.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Pythagoreische Tripel mit dem Rechner prüfen oder erzeugen",
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei Modi, eine Seite: Prüfen Sie eine Menge von Zahlen oder bilden Sie ein neues Tripel.",
            },
            {
              "kind": "h3",
              "text": "Modus 1: Ein pythagoreisches Tripel prüfen",
            },
            {
              "kind": "p",
              "text": "Geben Sie die drei Seitenlängen als [[a]], [[b]] und [[c]] ein, wobei [[c]] der größte Wert ist. Der Rechner quadriert [[a]] und [[b]], addiert die Ergebnisse, quadriert [[c]] und vergleicht die beiden Seiten der Gleichung.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Wenn beide Seiten gleich sind, bilden die drei Zahlen ein gültiges pythagoreisches Tripel, und das Ergebnis sagt dies. Wenn sie sich unterscheiden, bilden die Zahlen kein Tripel, und das Ergebnis zeigt die beiden ungleichen Summen, damit Sie sehen, wie weit sie daneben liegen. Alle drei Eingaben müssen positive ganze Zahlen sein, und alle drei müssen dieselbe Einheit verwenden.",
            },
            {
              "kind": "h3",
              "text": "Modus 2: Pythagoreische Tripel erzeugen",
            },
            {
              "kind": "p",
              "text": "Geben Sie zwei positive ganze Zahlen ein, [[m]] und [[n]], wobei [[m]] größer als [[n]] ist. Der Rechner wendet die Euklid-Formel an, um drei ganzzahlige Seitenlängen zu erzeugen.",
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
              "text": "Das Ergebnis ist immer ein gültiges Tripel, weil die Euklid-Formel so aufgebaut ist, dass sie den Satz des Pythagoras erfüllt. Die beiden Katheten können in beliebiger Reihenfolge erscheinen, aber [[c]] ist immer die Hypotenuse. Um den Rechner zu verwenden, wählen Sie einen Modus, geben Sie gültige Zahlen ein, klicken Sie auf Berechnen und lesen Sie das Ergebnis mit seiner schrittweisen Rechnung. Klicken Sie auf Zurücksetzen, um die Felder zu leeren und von vorn zu beginnen.",
            },
          ],
        },
        "sec-what": {
          "h2": "Was ist ein pythagoreisches Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Drei positive ganze Zahlen, die den Satz des Pythagoras genau erfüllen.",
            },
            {
              "kind": "p",
              "text": "Ein pythagoreisches Tripel ist eine Menge von drei positiven ganzen Zahlen, geschrieben als [[(a, b, c)]], die die Gleichung [[a^2+b^2=c^2]] erfüllen. Dabei sind [[a]] und [[b]] die Katheten, die beiden Seiten, die sich im rechten Winkel treffen, und [[c]] ist die Hypotenuse, die Seite gegenüber dem rechten Winkel und immer die längste der drei.",
            },
            {
              "kind": "p",
              "text": "Die Gleichung muss genau gelten. Ein knapper Fehlschlag ist kein Tripel: Wenn die Summe der quadrierten Katheten sich vom Quadrat der Hypotenuse auch nur um eine Einheit unterscheidet, bestehen die drei Zahlen den Test nicht. Diese strenge Gleichheit macht ein Tripel im Bauwesen und in der Tischlerei nützlich, wo eine [[3]]-[[4]]-[[5]]-Prüfung einen rechten Winkel ohne Messfehler markiert.",
            },
            {
              "kind": "p",
              "text": "Alle drei Zahlen müssen ganz und positiv sein. Ein rechtwinkliges Dreieck mit Dezimalseitenlängen, etwa mit den Katheten [[1.5]] und [[2]] und der Hypotenuse [[2.5]], erfüllt den Satz des Pythagoras, ist aber kein pythagoreisches Tripel, weil die Definition ganze Zahlen verlangt. Ebenso ist ein Dreieck mit einer irrationalen Seite, etwa mit den Katheten [[1]] und [[1]] und der Hypotenuse [[\\sqrt{2}]], ein rechtwinkliges Dreieck, aber kein Tripel. Das Wort Tripel ist nur positiven ganzzahligen Lösungen vorbehalten.",
            },
            {
              "kind": "p",
              "text": "Das Tripel [[(3, 4, 5)]] ist das natürliche erste Beispiel. Seine Katheten sind [[3]] und [[4]], seine Hypotenuse ist [[5]], und [[9+16=25]] bestätigt die Gleichung. Die Reihenfolge der Katheten spielt keine Rolle: [[(4, 3, 5)]] beschreibt dasselbe Dreieck. Wichtig ist nur, dass die beiden kleineren Zahlen die Katheten und die größte die Hypotenuse sind.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Quadrate, die auf den Seiten 3, 4 und 5 gezeichnet sind, mit den Flächen 9, 16 und 25, die zeigen, dass 9 plus 16 gleich 25 ist",
            "caption": "Quadrate auf den Seiten 3, 4 und 5 haben die Flächen 9, 16 und 25. Da 9 + 16 = 25 gilt, bilden die Zahlen 3, 4 und 5 ein pythagoreisches Tripel.",
          },
        },
        "sec-pythagorean": {
          "h2": "Den Satz des Pythagoras verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Satz hinter jedem Tripel: Die Quadrate der Katheten addieren sich zum Quadrat der Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Satz des Pythagoras besagt, dass in jedem rechtwinkligen Dreieck das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden anderen Seiten ist. Mit den Katheten [[a]] und [[b]] und der Hypotenuse [[c]] lautet der Satz wie folgt.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine klare Veranschaulichung gelingt über Flächen. Zeichnen Sie auf jede Seite des Dreiecks ein Quadrat. Das Quadrat auf der Kathete [[a]] hat die Fläche [[a^2]], das Quadrat auf der Kathete [[b]] hat die Fläche [[b^2]], und das Quadrat auf der Hypotenuse hat die Fläche [[c^2]]. Der Satz besagt, dass die ersten beiden Flächen zusammen die dritte ergeben. Beim [[3]]-[[4]]-[[5]]-Dreieck haben die Quadrate die Flächen [[9]], [[16]] und [[25]], und [[9+16=25]] zeigt das Gleichgewicht direkt.",
            },
            {
              "kind": "p",
              "text": "Dieses Flächenbild erklärt auch, warum [[3]]-[[4]]-[[5]] ein gültiges rechtwinkliges Dreieck ist. Seine Seitenlängen erfüllen das Flächengleichgewicht genau, also muss der Winkel zwischen den Katheten ein rechter Winkel sein. Jedes pythagoreische Tripel erfüllt den Satz, weil ein Tripel durch diese Gleichung definiert ist. Die Umkehrung gilt nicht: Viele rechtwinklige Dreiecke haben Seitenlängen, die keine ganzen Zahlen sind, also erfüllen sie den Satz, ohne Tripel zu sein. Verwenden Sie den <a href=\"/pythagorean-theorem-calculator/\">Rechner für den Satz des Pythagoras</a>, wenn ein Dreieck Dezimal- oder unbekannte Seiten statt ganzzahliger Tripel hat.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Rechtwinkliges Dreieck ABC mit den Katheten a gleich 3 und b gleich 4, der Hypotenuse c gleich 5, einer Markierung für den rechten Winkel und der Formel a Quadrat plus b Quadrat gleich c Quadrat",
            "caption": "Rechtwinkliges Dreieck ABC mit den Katheten a = 3 und b = 4 und der Hypotenuse c = 5. Die Markierung für den rechten Winkel liegt bei C, und 3 Quadrat plus 4 Quadrat ist gleich 5 Quadrat.",
          },
        },
        "sec-check": {
          "h2": "So prüfen Sie, ob drei Zahlen ein pythagoreisches Tripel bilden",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht kurze Schritte verwandeln drei beliebige ganze Zahlen in ein klares Ja oder Nein.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie den größten der drei Werte.",
                "Ordnen Sie den größten Wert [[c]], der Hypotenuse, zu.",
                "Ordnen Sie die beiden anderen Werte [[a]] und [[b]], den Katheten, zu.",
                "Quadrieren Sie [[a]].",
                "Quadrieren Sie [[b]].",
                "Addieren Sie die beiden Quadrate.",
                "Quadrieren Sie [[c]].",
                "Vergleichen Sie die beiden Ergebnisse: Gleichheit bedeutet ein gültiges Tripel, Ungleichheit bedeutet kein Tripel.",
              ],
            },
            {
              "kind": "p",
              "text": "Hier ist ein gültiges Beispiel. Prüfen Sie [[7]], [[24]] und [[25]]: Der größte Wert ist [[25]], also ist er die Hypotenuse. Quadrieren Sie die Katheten und addieren Sie.",
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
              "text": "Da [[625=625]] gilt, stimmen die beiden Seiten überein, also ist [[(7, 24, 25)]] ein gültiges pythagoreisches Tripel. Es ist auch primitiv, weil [[7]], [[24]] und [[25]] keinen gemeinsamen Teiler größer als [[1]] haben.",
            },
            {
              "kind": "p",
              "text": "Nun ein ungültiges Beispiel. Prüfen Sie [[4]], [[5]] und [[6]]: Der größte Wert ist [[6]], also ist er die Hypotenuse.",
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
              "text": "Da [[41]] nicht gleich [[36]] ist, bilden die Werte kein pythagoreisches Tripel. Dieselben acht Schritte funktionieren für beliebige positive ganzzahlige Eingaben, groß oder klein, sodass eine genaue Prüfung nie von Gedächtnis oder Raten abhängt.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Schrittweiser Ablauf zur Prüfung von 7, 24, 25: Die Katheten quadrieren ergibt 49 und 576, addiert 625, die Hypotenuse quadriert ergibt 625, und die Gleichheit wird bestätigt",
            "caption": "Prüfung von 7, 24, 25 Schritt für Schritt: 49 + 576 = 625 und 25 Quadrat = 625, also stimmen die beiden Seiten überein und das Tripel ist gültig.",
          },
        },
        "sec-euclid": {
          "h2": "So erzeugen Sie pythagoreische Tripel mit der Euklid-Formel",
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei kleine ganze Zahlen hinein, ein vollständiges Tripel heraus: Das ist die Euklid-Formel.",
            },
            {
              "kind": "p",
              "text": "Die Euklid-Formel bildet ein pythagoreisches Tripel aus zwei positiven ganzen Zahlen, [[m]] und [[n]], wobei [[m]] größer als [[n]] ist. Der Parameter [[m]] ist die größere ganze Zahl und [[n]] die kleinere, und beide müssen ganze Zahlen sein. Die drei Formeln erzeugen die beiden Katheten und die Hypotenuse.",
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
              "text": "Die Bedingung [[m>n>0]] ist wichtig. Wenn [[m]] gleich [[n]] ist, wird die erste Kathete null, was keine Dreiecksseite ist. Wenn [[m]] kleiner als [[n]] ist, wird die erste Kathete negativ, was ebenfalls unmöglich ist. Dezimalwerte von [[m]] und [[n]] sind hier ebenfalls nicht gültig, weil die Formel für ganzzahlige Parameter ausgelegt ist, die ganzzahlige Seiten erzeugen.",
            },
            {
              "kind": "p",
              "text": "Versuchen Sie [[m=2]] und [[n=1]]. Die erste Kathete ist [[a=2^2-1^2=4-1=3]], die zweite Kathete ist [[b=2(2)(1)=4]], und die Hypotenuse ist [[c=2^2+1^2=4+1=5]]. Das Ergebnis ist das Tripel [[(3, 4, 5)]]. Beachten Sie, dass die erzeugten Katheten in beliebiger Reihenfolge erscheinen können: Die Formel kann die größere Kathete zuerst oder als zweite zurückgeben, aber [[c]] ist immer die Hypotenuse. Der nächste Abschnitt beweist, warum diese Formeln den Satz des Pythagoras immer erfüllen.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Flussdiagramm der Euklid-Formel mit m gleich 3 und n gleich 2, das 5, 12 und 13 erzeugt",
            "caption": "Euklid-Formel mit m = 3 und n = 2: m Quadrat minus n Quadrat ist 5, 2mn ist 12, und m Quadrat plus n Quadrat ist 13, was das Tripel 5, 12, 13 ergibt.",
          },
        },
        "sec-proof": {
          "h2": "Mathematischer Beweis der Euklid-Formel",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein kurzer Algebra-Beweis zeigt, warum die Euklid-Formel niemals versagen kann.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit den beiden Kathetenformeln [[a=m^2-n^2]] und [[b=2mn]] und testen Sie, ob [[a^2+b^2]] gleich [[c^2]] ist, wenn [[c=m^2+n^2]] gilt. Setzen Sie die Formeln in die linke Seite der pythagoreischen Gleichung ein.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Entwickeln Sie beide Quadrate. Das erste Quadrat entwickelt sich zu [[m^4-2m^2n^2+n^4]] und das zweite zu [[4m^2n^2]], sodass die Summe zum folgenden Ausdruck wird.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Fassen Sie die mittleren Terme zusammen: [[-2m^2n^2+4m^2n^2]] ist [[+2m^2n^2]]. Der Ausdruck ist nun ein getarntes vollständiges Quadrat.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Faktorisieren Sie ihn. Das Ergebnis ist das Quadrat von [[m^2+n^2]], was genau [[c]] ist.",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Da [[c=m^2+n^2]] gilt, ist die rechte Seite [[c^2]], und der Beweis ist vollständig.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Der entscheidende Schritt ist, dass sich die mittleren Terme teilweise aufheben: Das [[-2m^2n^2]] aus dem ersten Quadrat und das [[+4m^2n^2]] aus dem zweiten lassen genau das [[+2m^2n^2]] übrig, das nötig ist, um das Quadrat zu vervollständigen. Weil dies für beliebige ganze Zahlen [[m]] und [[n]] mit [[m>n>0]] funktioniert, erzeugt jedes Paar ein echtes pythagoreisches Tripel. Der Beweis sagt allerdings nichts über Primitivität aus: Ob das Ergebnis primitiv ist, hängt von den zusätzlichen Bedingungen in den folgenden Abschnitten ab.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Was ist ein primitives pythagoreisches Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein primitives Tripel ist ein Tripel in seiner einfachsten Form, ohne gemeinsamen Teiler.",
            },
            {
              "kind": "p",
              "text": "Ein primitives pythagoreisches Tripel ist eines, dessen drei Seitenlängen keinen gemeinsamen positiven ganzzahligen Teiler größer als [[1]] haben. In Symbolen ist der größte gemeinsame Teiler der drei Seiten [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "Das Tripel [[(3, 4, 5)]] ist primitiv, weil [[\\gcd(3,4,5)=1]] gilt: Keine ganze Zahl größer als [[1]] teilt alle drei Zahlen. Dasselbe gilt für [[(5, 12, 13)]], [[(8, 15, 17)]] und [[(7, 24, 25)]]. Jedes dieser Tripel ist ein Basistripel, das sich durch Division nicht auf ein kleineres ganzzahliges Tripel reduzieren lässt.",
            },
            {
              "kind": "p",
              "text": "Primitiv bedeutet nicht, dass das Tripel in jeder Hinsicht das kleinstmögliche ist. Es bedeutet nur, dass die drei Werte außer [[1]] keinen gemeinsamen Teiler haben. Ein großes primitives Tripel wie [[(20, 21, 29)]] ist trotzdem primitiv, weil [[20]], [[21]] und [[29]] keinen gemeinsamen Teiler haben. Die folgende Tabelle vergleicht die Teiler eines primitiven Tripels und einer skalierten Kopie.",
            },
          ],
          "table": {
            "headers": [
              "Tripel",
              "Gemeinsame Teiler",
              "Primitiv?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Ja",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Nein",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Nein",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Zwei rechtwinklige Dreiecke, 3-4-5 und 6-8-10, die zeigen, dass das zweite doppelt so groß wie das erste ist und nur das erste primitiv ist",
            "caption": "Das 3-4-5-Dreieck ist primitiv, während 6-8-10 in jeder Seite doppelt so groß ist: ggT(3, 4, 5) = 1, aber ggT(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Was ist ein nicht primitives pythagoreisches Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein nicht primitives Tripel ist eine skalierte Kopie eines primitiven Tripels.",
            },
            {
              "kind": "p",
              "text": "Ein nicht primitives pythagoreisches Tripel ist ein Tripel, dessen drei Werte einen gemeinsamen ganzzahligen Teiler größer als [[1]] haben. Es ist trotzdem ein gültiges Tripel, weil es [[a^2+b^2=c^2]] genau erfüllt. Es ist nur nicht in einfachster Form.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit dem primitiven Tripel [[(3, 4, 5)]] und multiplizieren Sie jede Seite mit [[2]]. Das Ergebnis ist [[(6, 8, 10)]], und die Prüfung funktioniert weiterhin: [[36+64=100]]. Multiplizieren Sie stattdessen mit [[3]], und das Ergebnis ist [[(9, 12, 15)]] mit [[81+144=225]]. Beide skalierten Tripel sind gültig, und keines ist primitiv, weil das erste den Teiler [[2]] und das zweite den Teiler [[3]] teilt.",
            },
            {
              "kind": "p",
              "text": "Den gemeinsamen Teiler zu finden ist einfach: Nehmen Sie den größten gemeinsamen Teiler der drei Seiten. Für [[(6, 8, 10)]] ist er [[2]]; für [[(9, 12, 15)]] ist er [[3]]. Wenn Sie jede Seite durch diesen Teiler dividieren, erhalten Sie das primitive Tripel darunter zurück. So ergibt [[(6, 8, 10)]] geteilt durch [[2]] wieder [[(3, 4, 5)]], und [[(9, 12, 15)]] geteilt durch [[3]] ergibt ebenfalls [[(3, 4, 5)]]. Jedes nicht primitive Tripel lässt sich auf diese Weise auf genau ein primitives Tripel zurückführen.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Bedingungen für die Erzeugung primitiver pythagoreischer Tripel",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Euklid-Formel erzeugt nur dann ein primitives Tripel, wenn beide Parameterbedingungen gelten.",
            },
            {
              "kind": "p",
              "text": "Zwei Bedingungen an [[m]] und [[n]] entscheiden, ob die Euklid-Formel ein primitives Tripel erzeugt. Beide müssen gleichzeitig gelten, und keine allein genügt.",
            },
            {
              "kind": "h3",
              "text": "Bedingung 1: Teilerfremde Parameter",
            },
            {
              "kind": "p",
              "text": "Die Parameter müssen teilerfremd sein, das heißt, sie haben keinen gemeinsamen Teiler größer als [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Wenn [[m]] und [[n]] einen Teiler teilen, sickert dieser Teiler in alle drei erzeugten Seiten ein. Zum Beispiel teilen [[m=4]] und [[n=2]] den Teiler [[2]], und die Formel erzeugt [[(12, 16, 20)]], dessen Seiten alle den Teiler [[4]] teilen. Das Ergebnis ist nicht primitiv.",
            },
            {
              "kind": "h3",
              "text": "Bedingung 2: Unterschiedliche Parität",
            },
            {
              "kind": "p",
              "text": "Ein Parameter muss gerade und der andere ungerade sein. Wenn beide Parameter ungerade sind, fallen die erzeugten Katheten und die Hypotenuse alle gerade aus, also teilt das Tripel den Teiler [[2]] und kann nicht primitiv sein. Zum Beispiel sind [[m=3]] und [[n=1]] teilerfremd, aber beide ungerade, und die Formel erzeugt [[(8, 6, 10)]], was das nicht primitive Tripel [[(6, 8, 10)]] mit den Katheten in anderer Reihenfolge ist.",
            },
            {
              "kind": "p",
              "text": "Drei Parameterpaare zeigen, wie die Bedingungen zusammenwirken. Das Paar [[(2, 1)]] ist teilerfremd mit unterschiedlicher Parität und ergibt das primitive Tripel [[(3, 4, 5)]]. Das Paar [[(3, 2)]] ist teilerfremd mit unterschiedlicher Parität und ergibt das primitive Tripel [[(5, 12, 13)]]. Das Paar [[(3, 1)]] ist teilerfremd, aber beide sind ungerade, also ergibt es das nicht primitive Tripel [[(6, 8, 10)]]. Teilerfremdheit ohne unterschiedliche Parität genügt nicht, und unterschiedliche Parität ohne Teilerfremdheit genügt ebenfalls nicht.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Zwei Parameterbeispiele: m gleich 3 und n gleich 2 ergeben das primitive Tripel 5-12-13, während m gleich 3 und n gleich 1 das nicht primitive Tripel 6-8-10 ergeben",
            "caption": "Die Parameter m = 3, n = 2 sind teilerfremd mit unterschiedlicher Parität und ergeben das primitive Tripel 5-12-13. Die Parameter m = 3, n = 1 sind beide ungerade und ergeben das nicht primitive Tripel 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Unterschied zwischen primitiven und nicht primitiven Tripeln",
          "blocks": [
            {
              "kind": "p",
              "text": "Derselbe Satz, andere Form: Eine Tabelle fasst den ganzen Unterschied zusammen.",
            },
            {
              "kind": "p",
              "text": "Beide Arten von Tripeln erfüllen den Satz des Pythagoras genau, also beschreiben beide echte rechtwinklige Dreiecke. Der Unterschied betrifft nur gemeinsame Teiler und die Art, wie das Tripel erzeugt wurde. Ein primitives Tripel ist ein Basismuster; ein nicht primitives Tripel ist meist ein Vielfaches davon.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "Primitiv",
              "Nicht primitiv",
            ],
            "rows": [
              [
                "Gemeinsamer Teiler",
                "Nur [[1]]",
                "Größer als [[1]]",
              ],
              [
                "Seitenlängen",
                "Lassen sich nicht auf ein kleineres ganzzahliges Tripel reduzieren",
                "Lassen sich durch einen gemeinsamen Teiler dividieren",
              ],
              [
                "Beispiel",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Erzeugung",
                "Teilerfremde [[m]], [[n]] mit unterschiedlicher Parität",
                "Andere Parameterkombinationen oder ganzzahlige Vielfache",
              ],
              [
                "Beziehung",
                "Ganzzahliges Basistripel",
                "Oft ein Vielfaches eines primitiven Tripels",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "So erzeugen Sie weitere Tripel durch Skalierung vorhandener Tripel",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplizieren Sie jede Seite mit derselben ganzen Zahl, und das Tripel bleibt gültig.",
            },
            {
              "kind": "p",
              "text": "Für jede positive ganze Zahl [[k]] ergibt die Multiplikation jeder Seite eines pythagoreischen Tripels [[(a, b, c)]] mit [[k]] ein weiteres pythagoreisches Tripel, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Der Grund ist einfache Algebra. Das Quadrieren der skalierten Katheten ergibt [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], und das Ausklammern von [[k^2]] ergibt [[k^2(a^2+b^2)]]. Da das ursprüngliche Tripel [[a^2+b^2=c^2]] erfüllt, ist die skalierte Summe gleich [[k^2c^2]], was [[(kc)^2]] ist. Das skalierte Tripel erfüllt also den Satz genau.",
            },
            {
              "kind": "p",
              "text": "Die Skalierung von [[(3, 4, 5)]] mit [[2]] ergibt [[(6, 8, 10)]], und die Skalierung mit [[3]] ergibt [[(9, 12, 15)]]. Die Skalierung von [[(5, 12, 13)]] mit [[2]] ergibt [[(10, 24, 26)]], und die Skalierung von [[(8, 15, 17)]] mit [[3]] ergibt [[(24, 45, 51)]]. Jedes Ergebnis ist ein gültiges Tripel, und jedes ist nicht primitiv, weil der Multiplikator zu einem gemeinsamen Teiler aller drei Seiten wird.",
            },
            {
              "kind": "p",
              "text": "Ein ganzzahliger Multiplikator erhält ganzzahlige Seitenlängen, weshalb Skalierung ein zuverlässiger Weg ist, neue Tripel zu bilden. Ein beliebiger reeller Multiplikator, etwa [[1.5]], erhält das rechtwinklige Dreieck mit derselben Form, aber die Seiten können aufhören, ganze Zahlen zu sein: [[(3, 4, 5)]] skaliert mit [[1.5]] ergibt [[(4.5, 6, 7.5)]], was ein rechtwinkliges Dreieck, aber kein pythagoreisches Tripel ist. Beachten Sie, dass der Rechner selbst kein separates Multiplikatorfeld hat; Skalierung ist eine manuelle Rechnung, die Sie mit den Tripeln durchführen, die er prüft oder erzeugt.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "Das Tripel 3-4-5 multipliziert mit 2, 3 und 4 ergibt 6-8-10, 9-12-15 und 12-16-20",
            "caption": "Die Skalierung von 3-4-5 mit 2, 3 und 4 ergibt 6-8-10, 9-12-15 und 12-16-20. Jede skalierte Menge ist weiterhin ein gültiges pythagoreisches Tripel.",
          },
        },
        "sec-examples": {
          "h2": "Bekannte Beispiele pythagoreischer Tripel",
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn Tripel, die man auswendig kennen sollte, jedes verifiziert.",
            },
            {
              "kind": "p",
              "text": "Die folgende Tabelle listet zehn bekannte pythagoreische Tripel auf. Jede Zeile wurde anhand des Satzes des Pythagoras geprüft, und jede Zeile ist primitiv, sofern kein skaliertes Vielfaches vermerkt ist. Die Katheten in jeder Zeile können in beliebiger Reihenfolge aufgeführt werden: [[(4, 3, 5)]] ist dasselbe Dreieck wie [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Erste Kathete",
              "Zweite Kathete",
              "Hypotenuse",
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
            "alt": "Drei rechtwinklige Dreiecke maßstabsgetreu gezeichnet: 3-4-5, 5-12-13 und 8-15-17, die unterschiedliche Formen zeigen",
            "caption": "Drei primitive Tripel maßstabsgetreu gezeichnet: 3-4-5, 5-12-13 und 8-15-17. Jedes hat eine andere Form und andere spitze Winkel.",
          },
        },
        "sec-worked": {
          "h2": "Durchgerechnete Beispiele Schritt für Schritt mit dem Rechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht Beispiele, die beide Modi abdecken: vier Prüfungen und vier Erzeugungen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: 3, 4, 5 prüfen",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[a=3]], [[b=4]] und [[c=5]] im Prüfmodus ein. Quadrieren Sie die Katheten und addieren Sie: [[3^2+4^2=9+16=25]]. Quadrieren Sie die Hypotenuse: [[5^2=25]]. Da [[25=25]] gilt, ist das Ergebnis ein gültiges Tripel. Es ist primitiv, weil [[3]], [[4]] und [[5]] keinen gemeinsamen Teiler haben.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: 5, 12, 13 prüfen",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[a=5]], [[b=12]] und [[c=13]] ein. Die Katheten ergeben [[5^2+12^2=25+144=169]], und die Hypotenuse ergibt [[13^2=169]]. Da [[169=169]] gilt, ist das Ergebnis ein gültiges Tripel. Es ist primitiv, weil [[\\gcd(5,12,13)=1]] gilt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: 6, 8, 10 prüfen",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[a=6]], [[b=8]] und [[c=10]] ein. Die Katheten ergeben [[6^2+8^2=36+64=100]], und die Hypotenuse ergibt [[10^2=100]]. Da [[100=100]] gilt, ist das Ergebnis ein gültiges Tripel. Es ist nicht primitiv, weil alle drei Seiten den Teiler [[2]] teilen; die Division durch [[2]] ergibt das primitive Tripel [[(3, 4, 5)]] zurück.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: 7, 24, 25 prüfen",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[a=7]], [[b=24]] und [[c=25]] ein. Die Katheten ergeben [[7^2+24^2=49+576=625]], und die Hypotenuse ergibt [[25^2=625]]. Da [[625=625]] gilt, ist das Ergebnis ein gültiges Tripel. Es ist primitiv, weil [[7]], [[24]] und [[25]] keinen gemeinsamen Teiler haben.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Erzeugen mit m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[m=2]] und [[n=1]] im Erzeugungsmodus ein. Die erste Kathete ist [[a=2^2-1^2=3]], die zweite Kathete ist [[b=2(2)(1)=4]], und die Hypotenuse ist [[c=2^2+1^2=5]]. Das Ergebnis ist [[(3, 4, 5)]], ein primitives Tripel.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Erzeugen mit m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[m=3]] und [[n=2]] ein. Die erste Kathete ist [[a=3^2-2^2=9-4=5]], die zweite Kathete ist [[b=2(3)(2)=12]], und die Hypotenuse ist [[c=3^2+2^2=13]]. Das Ergebnis ist [[(5, 12, 13)]], ein primitives Tripel, weil [[3]] und [[2]] teilerfremd mit unterschiedlicher Parität sind.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Erzeugen mit m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[m=4]] und [[n=1]] ein. Die Formeln ergeben [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] und [[c=4^2+1^2=17]]. Mit den Katheten in aufsteigender Reihenfolge aufgeführt, ist das Ergebnis [[(8, 15, 17)]]. Es ist primitiv, weil [[4]] und [[1]] teilerfremd mit unterschiedlicher Parität sind.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Erzeugen mit m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Geben Sie [[m=3]] und [[n=1]] ein. Die Formeln ergeben [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] und [[c=3^2+1^2=10]]. Mit den Katheten in aufsteigender Reihenfolge aufgeführt, ist das Ergebnis [[(6, 8, 10)]]. Dieses Tripel ist nicht primitiv: [[3]] und [[1]] sind teilerfremd, aber beide sind ungerade, also ist die Bedingung der unterschiedlichen Parität nicht erfüllt und jede Seite fällt gerade aus. Die Division durch [[2]] ergibt das primitive Tripel [[(3, 4, 5)]] zurück.",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Warum gibt es unendlich viele pythagoreische Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Euklid-Formel gehen niemals die Eingaben aus, also gehen ihr auch niemals die Tripel aus.",
            },
            {
              "kind": "p",
              "text": "Die Euklid-Formel akzeptiert jedes Paar positiver ganzer Zahlen [[m]] und [[n]], wobei [[m]] größer als [[n]] ist, und es gibt unendlich viele solcher Paare. Jedes neue Paar erzeugt ein Tripel, und verschiedene Paare erzeugen im Allgemeinen verschiedene Tripel. Die Paare [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] und [[(5, 2)]] ergeben [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] bzw. [[(20, 21, 29)]], und die Liste geht weiter: [[(5, 4)]] ergibt [[(9, 40, 41)]], und [[(6, 1)]] ergibt [[(12, 35, 37)]]. Größere Werte von [[m]] erzeugen weiterhin größere Tripel ohne Ende.",
            },
            {
              "kind": "p",
              "text": "Ganzzahlige Vielfache kommen noch hinzu. Jedes primitive Tripel erzeugt eine ganze Familie skalierter Kopien: [[(3, 4, 5)]] allein ergibt [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] und so weiter ohne Ende. Zwischen den endlosen Parameterpaaren und den endlosen Vielfachen ist der Vorrat an pythagoreischen Tripeln unendlich. Beachten Sie die sorgfältige Formulierung: Nicht jedes Parameterpaar erzeugt ein primitives Tripel, aber jedes Paar erzeugt ein gültiges Tripel, und auch die primitiven sind unendlich viele.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "So erkennen Sie ein pythagoreisches Tripel ohne Raten",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein paar Gewohnheiten lassen vertraute Tripel auffallen, bevor Sie rechnen.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie damit, den größten Wert als Hypotenuse zu behandeln und die quadrierten Werte zu vergleichen, genau wie es die Prüfschritte beschreiben. Mit Übung werden die gängigen Tripel vertraut: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] und [[7]]-[[24]]-[[25]] kommen in Lehrbüchern und Prüfungen so oft vor, dass ihr Erkennen echte Zeit spart.",
            },
            {
              "kind": "p",
              "text": "Achten Sie als Nächstes auf gemeinsame Teiler. Wenn alle drei Zahlen gerade sind, dividieren Sie durch [[2]] und sehen Sie, was übrig bleibt. Die Menge [[6]]-[[8]]-[[10]] ist sofort als das Doppelte von [[3]]-[[4]]-[[5]] zu erkennen, sobald der Teiler [[2]] entdeckt ist. Die Reduktion eines nicht primitiven Tripels auf seine primitive Form offenbart oft ein vertrautes Muster hinter größeren Zahlen.",
            },
            {
              "kind": "p",
              "text": "Wenn Sie ein neues Tripel brauchen statt einer Prüfung, ist die Euklid-Formel der zuverlässige Weg: Wählen Sie kleine Werte von [[m]] und [[n]] und erzeugen Sie. Erkennen ist eine hilfreiche Abkürzung, aber die genaue Prüfung ist immer das letzte Wort. Ein Tripel, das vertraut aussieht, verdient trotzdem den Quadrieren-und-Vergleichen-Test, bevor Sie sich darauf verlassen.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Pythagoreische Tripel und gewöhnliche rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Tripel ist ein rechtwinkliges Dreieck, aber die meisten rechtwinkligen Dreiecke sind keine Tripel.",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck kann ganzzahlige Seitenlängen, Dezimalseitenlängen oder irrationale Seitenlängen haben. Nur die erste Kategorie kann ein pythagoreisches Tripel bilden. Das Tripel [[(3, 4, 5)]] ist ein ganzzahliges rechtwinkliges Dreieck und qualifiziert sich. Ein Dreieck mit den Katheten [[1]] und [[1]] und der Hypotenuse [[\\sqrt{2}]] ist ein echtes rechtwinkliges Dreieck, da [[1+1=2]] gilt, aber seine Hypotenuse ist irrational, also ist es kein Tripel. Ein Dreieck mit den Seiten [[3]], [[4]] und [[5.1]] erfüllt die Gleichung nicht, da [[9+16=25]] und [[5.1^2=26.01]] gilt, also ist es nicht einmal ein rechtwinkliges Dreieck.",
            },
            {
              "kind": "p",
              "text": "Die Unterscheidung ist in der Praxis wichtig. Bauleute verwenden [[3]]-[[4]]-[[5]], weil ganze Zahlen mit einem Maßband leicht zu messen sind. Ein Dreieck mit den Seiten [[3]], [[4]] und [[5.1]] sieht fast richtig aus, ist aber um einen sichtbaren Winkel daneben, und keine ganzzahlige Prüfung würde es bestehen lassen. Der Satz des Pythagoras gilt für alle rechtwinkligen Dreiecke, wie auch immer ihre Seitenlängen sind. Der Begriff pythagoreisches Tripel bezieht sich nur auf die positiven ganzzahligen Lösungen, und diese enge Bedeutung macht Tripel besonders.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Verwendung des Rechners für pythagoreische Tripel",
          "blocks": [
            {
              "kind": "p",
              "text": "Fünfzehn Fehler, jeder mit der Lösung daneben.",
            },
            {
              "kind": "list",
              "items": [
                "[[c]] als kleinere Seite eingeben: Die Hypotenuse muss der größte Wert sein, also ordnen Sie die größte Zahl immer [[c]] zu, bevor Sie prüfen.",
                "Vergessen, die Werte zu quadrieren: Der Satz vergleicht Quadrate, nicht die Seitenlängen selbst, also quadrieren Sie zuerst [[a]], [[b]] und [[c]].",
                "Die Seiten addieren statt ihrer Quadrate: [[a+b]] ist die falsche Summe; die Prüfung braucht [[a^2+b^2]] gegen [[c^2]].",
                "[[a+b=c]] statt [[a^2+b^2=c^2]] verwenden: Die einfache Summe zweier Seiten ist in einem rechtwinkligen Dreieck niemals gleich der Hypotenuse.",
                "Die Hypotenuse mit einer Kathete verwechseln: Die Hypotenuse liegt gegenüber dem rechten Winkel und ist immer die längste Seite.",
                "Dezimalwerte verwenden und ein ganzzahliges Tripel erwarten: Dezimalzahlen können ein rechtwinkliges Dreieck bilden, aber nur positive ganze Zahlen bilden ein pythagoreisches Tripel.",
                "Null oder negative Seitenlängen eingeben: Seitenlängen müssen positiv sein, und Null- oder negative Eingaben werden abgelehnt.",
                "[[m]] gleich [[n]] verwenden: Die erste Kathete wird [[m^2-n^2=0]], was keine Dreiecksseite ist.",
                "[[m]] kleiner als [[n]] verwenden: Die erste Kathete wird negativ, was für eine Seitenlänge unmöglich ist.",
                "Dezimale [[m]]- und [[n]]-Werte eingeben: Die Euklid-Formel braucht positive ganzzahlige Parameter, um ganzzahlige Seiten zu erzeugen.",
                "Annehmen, dass jedes erzeugte Tripel primitiv ist: Die Erzeugung garantiert nur ein gültiges Tripel, und Primitivität braucht teilerfremde Parameter mit unterschiedlicher Parität.",
                "Annehmen, dass alle primitiven Tripel Vielfache von [[3]]-[[4]]-[[5]] sind: [[5]]-[[12]]-[[13]] und [[8]]-[[15]]-[[17]] sind unabhängige primitive Tripel, keine Vielfache von [[3]]-[[4]]-[[5]].",
                "Die Bedingung der unterschiedlichen Parität vergessen: Zwei ungerade Parameter erzeugen ein gerades, nicht primitives Tripel, wie [[m=3]], [[n=1]] zeigt.",
                "Vergessen, gemeinsame Teiler zu prüfen: Ein Tripel wie [[(12, 16, 20)]] sieht neu aus, bis der gemeinsame Teiler [[4]] es als skaliertes [[(3, 4, 5)]] entlarvt.",
                "Ein gültiges rechtwinkliges Dreieck mit einem ganzzahligen pythagoreischen Tripel verwechseln: Ein Dreieck mit irrationalen oder Dezimalseiten kann den Satz erfüllen, ohne ein Tripel zu sein.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht Aufgaben, vier Prüfungen und vier Erzeugungen, mit vollständigen Lösungen.",
            },
            {
              "kind": "list",
              "items": [
                "Prüfen Sie, ob [[8]], [[15]] und [[17]] ein Tripel bilden. Antwort: ja, primitiv. [[8^2+15^2=64+225=289=17^2]], und die drei Zahlen haben keinen gemeinsamen Teiler.",
                "Prüfen Sie, ob [[6]], [[8]] und [[11]] ein Tripel bilden. Antwort: nein. [[6^2+8^2=36+64=100]], aber [[11^2=121]], also unterscheiden sich die beiden Seiten.",
                "Bestimmen Sie, ob [[9]], [[12]] und [[15]] primitiv sind. Antwort: nicht primitiv. Die Zahlen teilen den Teiler [[3]], und die Division durch [[3]] ergibt das primitive Tripel [[(3, 4, 5)]].",
                "Erzeugen Sie ein Tripel mit [[m=2]] und [[n=1]]. Antwort: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Erzeugen Sie ein Tripel mit [[m=3]] und [[n=2]]. Antwort: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Erzeugen Sie ein Tripel mit [[m=4]] und [[n=1]]. Antwort: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], wobei die Katheten aufsteigend sortiert sind.",
                "Bestimmen Sie, ob [[m=3]] und [[n=1]] ein primitives Tripel erzeugen. Antwort: nein. Die Parameter sind teilerfremd, aber beide ungerade, also ist das Ergebnis das nicht primitive Tripel [[(6, 8, 10)]].",
                "Finden Sie den gemeinsamen Multiplikator zwischen [[3]]-[[4]]-[[5]] und [[15]]-[[20]]-[[25]]. Antwort: [[5]]. Jede Seite von [[(3, 4, 5)]] multipliziert mit [[5]] ergibt [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten bearbeitet eine andere Aufgabe am rechtwinkligen Dreieck, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie brauchen.",
      "relatedItems": [
        "Rechner für rechtwinklige Dreiecke",
        "Rechner für den Satz des Pythagoras",
        "3-4-5-Dreieck-Rechner",
        "5-12-13-Dreieck-Rechner",
        "Rechner für Seiten rechtwinkliger Dreiecke",
        "Rechner für spezielle rechtwinklige Dreiecke",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein pythagoreisches Tripel?",
          "answer": "Ein pythagoreisches Tripel ist eine Menge von drei positiven ganzen Zahlen, geschrieben als [[(a, b, c)]], die die Gleichung [[a^2+b^2=c^2]] erfüllen. Die beiden kleineren Zahlen sind die Katheten eines rechtwinkligen Dreiecks und die größte ist die Hypotenuse. Das bekannteste Beispiel ist [[(3, 4, 5)]], da [[9+16=25]] gilt.",
        },
        {
          "question": "Wie funktioniert der Rechner für pythagoreische Tripel?",
          "answer": "Er hat zwei Modi. Der Prüfmodus nimmt drei ganze Zahlen und testet, ob [[a^2+b^2=c^2]] gilt. Der Erzeugungsmodus nimmt zwei ganze Zahlen, [[m]] und [[n]], und wendet die Euklid-Formel an, um ein neues Tripel zu bilden. Beide Modi zeigen eine schrittweise Rechnung mit dem Ergebnis.",
        },
        {
          "question": "Wie kann ich prüfen, ob drei Zahlen ein pythagoreisches Tripel bilden?",
          "answer": "Nehmen Sie den größten Wert als Hypotenuse [[c]] und die beiden anderen als Katheten [[a]] und [[b]]. Quadrieren Sie alle drei, addieren Sie [[a^2+b^2]] und vergleichen Sie mit [[c^2]]. Gleiche Summen bedeuten ein gültiges Tripel; ungleiche Summen bedeuten, dass die Zahlen kein Tripel bilden.",
        },
        {
          "question": "Was ist die Euklid-Formel?",
          "answer": "Die Euklid-Formel erzeugt ein pythagoreisches Tripel aus zwei positiven ganzen Zahlen, [[m]] und [[n]], wobei [[m]] größer als [[n]] ist. Die Formeln lauten [[a=m^2-n^2]], [[b=2mn]] und [[c=m^2+n^2]]. Jedes Paar erzeugt ein gültiges Tripel, wie der Algebra-Beweis auf dieser Seite zeigt.",
        },
        {
          "question": "Was sind m und n in der Formel für pythagoreische Tripel?",
          "answer": "Die Werte [[m]] und [[n]] sind positive ganzzahlige Parameter in der Euklid-Formel. Der Wert [[m]] ist die größere ganze Zahl und [[n]] die kleinere, wobei [[m>n>0]] gilt. Größere Werte von [[m]] erzeugen größere Tripel, und verschiedene Paare erzeugen verschiedene Tripel.",
        },
        {
          "question": "Was ist ein primitives pythagoreisches Tripel?",
          "answer": "Ein primitives Tripel ist eines, dessen drei Seitenlängen keinen gemeinsamen Teiler größer als [[1]] haben, also [[\\gcd(a,b,c)=1]]. Beispiele sind [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] und [[(7, 24, 25)]]. Primitive Tripel lassen sich nicht auf ein kleineres ganzzahliges Tripel reduzieren.",
        },
        {
          "question": "Was ist ein nicht primitives pythagoreisches Tripel?",
          "answer": "Ein nicht primitives Tripel ist ein gültiges Tripel, dessen drei Seiten einen gemeinsamen Teiler größer als [[1]] haben. Zum Beispiel ist [[(6, 8, 10)]] das Doppelte von [[(3, 4, 5)]] und [[(9, 12, 15)]] das Dreifache von [[(3, 4, 5)]]. Die Division durch den gemeinsamen Teiler ergibt das primitive Tripel darunter zurück.",
        },
        {
          "question": "Woran erkenne ich, ob ein erzeugtes Tripel primitiv ist?",
          "answer": "Prüfen Sie die beiden Parameterbedingungen: [[m]] und [[n]] müssen teilerfremd sein, also [[\\gcd(m,n)=1]], und sie müssen unterschiedliche Parität haben, also ist eines gerade und das andere ungerade. Wenn beide Bedingungen gelten, ist das erzeugte Tripel primitiv. Wenn eine der beiden nicht gilt, ist es nicht primitiv.",
        },
        {
          "question": "Können Dezimalzahlen ein pythagoreisches Tripel bilden?",
          "answer": "Nein. Ein pythagoreisches Tripel ist als drei positive ganze Zahlen definiert, also qualifizieren sich Dezimalseitenlängen niemals. Dezimalzahlen können trotzdem ein rechtwinkliges Dreieck bilden, das [[a^2+b^2=c^2]] erfüllt, etwa mit den Katheten [[1.5]] und [[2]] und der Hypotenuse [[2.5]], aber dieses Dreieck ist kein pythagoreisches Tripel.",
        },
        {
          "question": "Gibt es unendlich viele pythagoreische Tripel?",
          "answer": "Ja. Die Euklid-Formel akzeptiert unendlich viele ganzzahlige Paare [[(m, n)]], und jedes Paar erzeugt ein Tripel. Ganzzahlige Vielfache kommen hinzu: Jedes primitive Tripel erzeugt eine endlose Familie skalierter Kopien. Der Vorrat an Tripeln geht niemals aus.",
        },
        {
          "question": "Kann jedes pythagoreische Tripel mit der Euklid-Formel erzeugt werden?",
          "answer": "Ja, jedes primitive Tripel stammt aus der Euklid-Formel mit geeigneten teilerfremden Parametern unterschiedlicher Parität, und jedes nicht primitive Tripel ist ein Vielfaches eines primitiven Tripels. Also lässt sich jedes pythagoreisches Tripel durch die Euklid-Formel plus Skalierung mit einer positiven ganzen Zahl erreichen.",
        },
        {
          "question": "Was ist das häufigste pythagoreische Tripel?",
          "answer": "Das Tripel [[(3, 4, 5)]] ist das häufigste und bekannteste. Es ist das kleinste primitive Tripel, es ist leicht zu merken, und Bauleute und Tischler verwenden es seit Jahrhunderten, um rechte Winkel zu prüfen. Die nächsten bekanntesten sind [[(5, 12, 13)]] und [[(8, 15, 17)]].",
        },
      ],
    },
};
