// projectionQGuideTranslations.bde.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B2_DE = {
  "de": {
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "answer": "Die Formel lautet [[q = \\frac{b^2}{c}]], wobei b die Kathete ist, die zu q gehört, und c die vollständige Hypotenuse. Quadrieren Sie zuerst Kathete b und teilen Sie dann durch c. Zum Beispiel ergeben [[b = 8]] cm und [[c = 10]] cm den Wert [[q = 6.4]] cm.",
          "question": "Wie lautet die Formel für Projektion q?",
        },
        {
          "answer": "Projektion q ist der Abschnitt der Hypotenuse neben dem Eckpunkt B, der entsteht, wenn die Höhe vom rechten Winkel die Hypotenuse im Punkt D trifft. Im Dreieck ABC gilt [[q = DB]], also der Teil der Hypotenuse, der zu Kathete b gehört.",
          "question": "Was stellt Projektion q dar?",
        },
        {
          "answer": "Das Quadrat kommt von ähnlichen Dreiecken: Das Dreieck CBD ist ähnlich zum Dreieck ABC, was [[\\frac{q}{b} = \\frac{b}{c}]] ergibt, und Kathete b erscheint in beiden Verhältnissen. Kreuzweises Multiplizieren ergibt [[b^2 = c \\times q]], das Quadrat ist also in der Geometrie selbst angelegt.",
          "question": "Warum wird Kathete b quadriert?",
        },
        {
          "answer": "Die Division isoliert q. Der Projektionssatz besagt [[b^2 = c \\times q]], wobei q mit c multipliziert wird, also lässt die Division beider Seiten durch c nur q übrig. Die Division verwandelt außerdem die quadrierte Länge wieder in eine gewöhnliche Länge.",
          "question": "Warum teilen wir durch die Hypotenuse?",
        },
        {
          "answer": "Nein. Kathete b ist die Seite BC, eine der Seiten, die den rechten Winkel bilden, während Projektion q der Abschnitt DB entlang der Hypotenuse ist. Im Dreieck 6-8-10 beträgt Kathete b 8 cm und Projektion q nur 6,4 cm.",
          "question": "Ist Projektion q dasselbe wie Kathete b?",
        },
        {
          "answer": "Projektion q liegt neben dem Eckpunkt B und gehört zu Kathete b, während Projektion p neben dem Eckpunkt A liegt und zu Kathete a gehört. Sie sind die beiden Abschnitte, die die Höhe auf der Hypotenuse erzeugt: [[p + q = c]].",
          "question": "Warum gehört q zu Kathete b und nicht zu Kathete a?",
        },
        {
          "answer": "Projektion p liegt neben dem Eckpunkt A und gehört zu Kathete a, während Projektion q neben dem Eckpunkt B liegt und zu Kathete b gehört. Sie sind die beiden Abschnitte, die die Höhe auf der Hypotenuse erzeugt: [[p + q = c]]. Im Dreieck 6-8-10 beträgt p 3.6 cm und q 6.4 cm, also ist q der längere Abschnitt.",
          "question": "Was ist der Unterschied zwischen Projektion p und Projektion q?",
        },
        {
          "answer": "Ja. Ziehen Sie q von der Hypotenuse ab: [[p = c - q]]. Mit [[c = 10]] cm und [[q = 6.4]] cm ergibt sich [[p = 3.6]] cm. Sie können p auch direkt aus Kathete a mit [[p = \\frac{a^2}{c}]] berechnen.",
          "question": "Kann ich Projektion p berechnen, wenn ich q bereits kenne?",
        },
        {
          "answer": "Nein. Projektion q ist nur ein Teil der Hypotenuse, also muss sie kleiner sein als c. Wäre q gleich c, wäre p null und das Dreieck entartet. Ein Ergebnis größer als c deutet immer auf einen Eingabe- oder Beschriftungsfehler hin.",
          "question": "Kann Projektion q größer sein als die Hypotenuse?",
        },
        {
          "answer": "Sie brauchen zusätzlich p oder c. Bestimmen Sie p mit [[p = c - q]] und verwenden Sie dann [[h = \\sqrt{p \\times q}]]. Mit [[q = 6.4]] cm und [[c = 10]] cm ergeben sich [[p = 3.6]] cm und [[h = 4.8]] cm. Allein aus Projektion q lässt sich die Höhe nicht bestimmen.",
          "question": "Wie finde ich die Höhe, wenn q bekannt ist?",
        },
        {
          "answer": "Berechnen Sie [[q = \\frac{b^2}{c}]] neu, prüfen Sie dann [[p + q = c]], nachdem Sie p durch Subtraktion bestimmt haben, und vergewissern Sie sich, dass q positiv und kleiner als c ist. Sie können auch Kathete a aus p bestimmen und [[a^2 + b^2 = c^2]] prüfen.",
          "question": "Wie kann ich eine Berechnung von Projektion q überprüfen?",
        },
        {
          "answer": "Die Höhe trifft die Hypotenuse in ihrem Mittelpunkt, und die beiden Katheten sind gleich lang, das Dreieck ist also gleichschenklig. Mit [[c = 10]] cm und [[p = q = 5]] cm sind beide Katheten [[\\sqrt{50}]] cm lang, etwa 7,071 cm.",
          "question": "Was passiert, wenn p und q gleich sind?",
        },
      ],
      "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten bearbeitet eine bestimmte Aufgabe am rechtwinkligen Dreieck, wählen Sie also das Werkzeug, das zu den Maßen passt, die Sie bereits kennen.",
      "relatedItems": [
        "Projektionsrechner für rechtwinklige Dreiecke",
        "Projektion-p-Rechner für rechtwinklige Dreiecke",
        "Rechner für Kathete b aus der Projektion im rechtwinkligen Dreieck",
        "Rechner für die Hypotenuse aus den Projektionen im rechtwinkligen Dreieck",
        "Rechner für die Höhe aus den Projektionen im rechtwinkligen Dreieck",
        "Seitenrechner für rechtwinklige Dreiecke",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Anwendung sind Geometrie-Hausaufgaben und Unterricht, bei denen Projektionsaufgaben prüfen, ob Lernende ein Diagramm richtig beschriften und [[q = \\frac{b^2}{c}]] anwenden können, statt aus Gewohnheit zum Satz des Pythagoras zu greifen. Auch Übungen zu ähnlichen Dreiecken verwenden denselben Aufbau, da der Beweis selbst eine Übung im Zuordnen entsprechender Seiten ist.",
            },
            {
              "kind": "p",
              "text": "Im technischen Zeichnen wird der Satz verwendet, wenn ein rechtwinkliges Dreieck aus Teilmaßen rekonstruiert werden muss: Gibt eine Zeichnung die Hypotenuse und den Fußpunkt der Höhe an, folgt die fehlende Projektion ohne erneutes Vermessen der Figur. Lehrkräfte nutzen den Aufbau auch als Brückenstunde zwischen Streckenaddition und Ähnlichkeit.",
            },
            {
              "kind": "p",
              "text": "Eine Bedingung begrenzt jede Anwendung: Die erforderliche Geometrie des rechtwinkligen Dreiecks muss tatsächlich existieren. Der Satz beschreibt exakte geometrische Beziehungen, keine ungefähren Feldmessungen, er ersetzt also niemals sorgfältiges Vermessen oder professionelle ingenieurtechnische Messung.",
            },
          ],
          "h2": "Praktische Anwendungen der Projektionsberechnung im rechtwinkligen Dreieck",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner hat zwei Eingabefelder. Das erste nimmt Kathete b auf, die senkrechte Seite, die zu Projektion q gehört. Das zweite nimmt die Hypotenuse c auf, die vollständige Seite gegenüber dem rechten Winkel. Beide Längen müssen dieselbe Einheit verwenden, rechnen Sie also zuerst um, wenn eine Messung in Zentimetern und die andere in Metern angegeben ist.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse muss länger sein als Kathete b, da eine Kathete eine Seite des rechten Winkels ist, während die Hypotenuse das ganze Dreieck überspannt. Wenn Ihr Wert für b größer ist als c, haben Sie wahrscheinlich eine Projektion, die Höhe oder die falsche Seite eingegeben.",
            },
            {
              "kind": "p",
              "text": "Klicken Sie auf Projektion q berechnen, um das Ergebnis zu sehen, und verwenden Sie Zurücksetzen, um beide Felder vor einer neuen Aufgabe zu leeren. Das Ergebnis ist eine Länge in der Einheit, die Sie eingegeben haben, eine Kathete von 8 cm und eine Hypotenuse von 10 cm ergeben also 6,4 cm. Das Ergebnis ist eine Streckenlänge entlang der Hypotenuse.",
            },
          ],
          "h2": "Projektion Q im rechtwinkligen Dreieck berechnen",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist Kathete a, die Seite BC ist Kathete b und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und trifft sie in D.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in zwei Teile: Der Abschnitt AD ist Projektion p und der Abschnitt DB ist Projektion q. Kathete b und Projektion q sind hervorgehoben, weil sie das Paar sind, um das es auf dieser Seite geht. Verfolgen Sie die Beschriftungen in dieser Reihenfolge: Beginnen Sie bei B, gehen Sie entlang Kathete b nach C, dann entlang Kathete a nach A und dann entlang der Hypotenuse von A zurück nach B, wobei Sie bei D innehalten, um die Teilung in p und q zu sehen.",
            },
            {
              "kind": "p",
              "text": "Die Zuordnung von b zu q wird im kleinen Dreieck CBD sichtbar, in dem Kathete b die Hypotenuse ist und q die Seite entlang der großen Hypotenuse. Da das Dreieck CBD ähnlich zum Dreieck ABC ist, entspricht das Verhältnis von q zu b im kleinen Dreieck dem Verhältnis von b zu c im großen Dreieck.",
            },
          ],
          "h2": "Diagramm zur Projektion Q im rechtwinkligen Dreieck erklärt",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB, Kathete b und Projektion q hervorgehoben, mit den Katheten a und b, der Hypotenuse c, den Projektionen p und q und der Höhe h beschriftet",
            "caption": "Die Höhe CD teilt die Hypotenuse AB in Projektion p (AD) und Projektion q (DB), wobei Kathete b (BC) hervorgehoben ist.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, die Einsetzung und die endgültige Antwort, und jedes Beispiel hält seine Einheiten von Anfang bis Ende konsistent.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 8]] cm und [[c = 10]] cm, die Formel ergibt [[q = \\frac{8^2}{10} = \\frac{64}{10}]], also [[q = 6.4]] cm. Die quadrierte Kathete 64 ist ein Zwischenwert, und die Division durch die Hypotenuse verwandelt sie wieder in eine Länge. Die andere Kathete dieses Dreiecks ist 6 cm lang.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Glatte Division",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 12]] cm und [[c = 24]] cm, also [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Die quadrierte Kathete teilt sich glatt, die Antwort ist also exakt. Die andere Projektion beträgt hier 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Dezimalergebnis",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 7]] cm und [[c = 14]] cm, also [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Ein Dezimalergebnis ist normal: Die Projektion muss keine ganze Zahl sein, selbst wenn beide Eingaben ganzzahlig sind. Die andere Projektion beträgt 10,5 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Größere Maße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 15]] m und [[c = 25]] m, also [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Größere Zahlen ändern nichts an der Methode: quadrieren, dann teilen. Die andere Projektion beträgt 16 m und gehört zu einer Kathete von 20 m.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Kleine Maße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 30]] mm und [[c = 50]] mm, also [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Kleine Maße funktionieren genauso, und wenn die Einheit Millimeter durchgehend beibehalten wird, ist keine Umrechnung nötig. Die andere Projektion beträgt 32 mm und gehört zu einer Kathete von 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Bruchmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = \\frac{3}{4}]] ft und [[c = \\frac{3}{2}]] ft, quadrieren Sie zuerst die Kathete: [[b^2 = \\frac{9}{16}]] Quadratfuß. Dann gilt [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Die Division durch einen Bruch bedeutet die Multiplikation mit seinem Kehrwert, und das ist der Schritt, den die meisten Lernenden bei Bruchmaßen übersehen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Verschiedene Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 80]] cm und [[c = 1]] m, rechnen Sie zuerst um: 1 m entspricht 100 cm. Dann gilt [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Die Verwendung von 1 statt 100 hätte 6400 cm ergeben, eine Projektion, die weit länger ist als die Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Größere Dezimalwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 4.5]] m und [[c = 7.5]] m, also [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Dezimale Eingaben brauchen dieselbe Sorgfalt wie ganze Zahlen: Quadrieren Sie die vollständige Dezimalzahl und teilen Sie dann. Die andere Projektion beträgt 4,8 m und gehört zu einer Kathete von 6 m.",
            },
          ],
          "h2": "Durchgerechnete Beispiele zur Berechnung von Projektion Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz besagt, dass das Quadrat von Kathete b gleich der Hypotenuse multipliziert mit ihrer Projektion ist:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Die Division beider Seiten durch c isoliert q und ergibt die Arbeitsformel für diese Seite:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Die Berechnung läuft in zwei Schritten. Schritt 1 quadriert Kathete b, multipliziert sie also mit sich selbst. Schritt 2 teilt diese quadrierte Länge durch die vollständige Hypotenuse c, und das Ergebnis ist eine gewöhnliche Länge, keine quadrierte Länge.",
            },
            {
              "kind": "p",
              "text": "Einheiten brauchen in beiden Schritten Sorgfalt. Wenn b und c beide in Zentimetern angegeben sind, dann ist [[b^2]] in Quadratzentimetern, und die Division durch Zentimeter ergibt wieder Zentimeter. Das Mischen von Einheiten, etwa Meter für b und Zentimeter für c, ergibt einen bedeutungslosen Quotienten, rechnen Sie also vor der Berechnung in eine Einheit um.",
            },
            {
              "kind": "p",
              "text": "Mit [[b = 8]] cm und [[c = 10]] cm ergibt Schritt 1 [[8^2 = 64]], und Schritt 2 ergibt [[q = \\frac{64}{10} = 6.4]] cm. Die Zahl 64 beantwortet für sich allein keine Frage: Erst nach der Division wird sie zur Projektionslänge.",
            },
          ],
          "h2": "Formel für Projektion Q im rechtwinkligen Dreieck",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit Höhe CD, das zeigt, dass Projektion q gleich Kathete b zum Quadrat geteilt durch die Hypotenuse c ist",
            "caption": "Die Projektionsformel: q ist gleich b zum Quadrat geteilt durch c, wobei der Höhenfußpunkt D die Hypotenuse teilt.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Elf kurze Schritte führen Sie von einem beschrifteten Diagramm zu einer geprüften Antwort.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie das rechtwinklige Dreieck in Ihrer Aufgabe und vergewissern Sie sich, dass es einen rechten Winkel hat.",
                "Finden Sie den Eckpunkt des rechten Winkels und die Höhe von dort zur Hypotenuse.",
                "Bestimmen Sie die senkrechte Kathete, die zu Projektion q gehört, also die Kathete, die den Eckpunkt B berührt.",
                "Bestimmen Sie die vollständige Hypotenuse c, die Seite gegenüber dem rechten Winkel.",
                "Vergewissern Sie sich, dass c größer ist als b. Wenn nicht, beschriften Sie das Diagramm neu, bevor Sie fortfahren.",
                "Wählen Sie passende Einheiten und rechnen Sie um, wenn die Messungen unterschiedliche Einheiten verwenden.",
                "Geben Sie Kathete b im Feld Kathete b ein.",
                "Geben Sie die Hypotenuse c im Feld Hypotenuse c ein.",
                "Klicken Sie auf Projektion q berechnen und lesen Sie das Ergebnis ab.",
                "Prüfen Sie das Ergebnis: q muss positiv und kleiner als c sein.",
                "Verwenden Sie Zurücksetzen, wenn Sie eine neue Berechnung beginnen.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Eingabe von Kathete a statt Kathete b erzeugt eine andere Projektion. Kathete a gehört zu p, der Rechner würde also den Abschnitt neben dem Eckpunkt A zurückgeben, nicht den neben B. Die Beschriftungsprüfung in Schritt 3 ist am wichtigsten.",
            },
          ],
          "h2": "So verwenden Sie den Projektion-Q-Rechner für rechtwinklige Dreiecke",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieser Rechner findet Projektion q eines rechtwinkligen Dreiecks, wenn Sie Kathete b und die vollständige Hypotenuse c kennen. Projektion q ist der Abschnitt der Hypotenuse, der neben Kathete b liegt und entsteht, wenn die Höhe vom rechten Winkel die Hypotenuse trifft. Die Formel lautet [[q = \\frac{b^2}{c}]], wobei b die senkrechte Kathete und c die volle Hypotenuse ist.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel ergibt sich mit [[b = 8]] cm und [[c = 10]] cm die Berechnung [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Der Wert 6,4 cm ist der Teil der Hypotenuse, der zu Kathete b gehört, nicht die Kathete selbst und nicht die ganze Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Rechner steht oben auf dieser Seite, gefolgt von der Formel, einem beschrifteten Diagramm, einem Beweis, durchgerechneten Beispielen und Prüfungen, die Sie bei jeder Antwort anwenden können.",
            },
          ],
          "h2": "Projektion-Q-Rechner für rechtwinklige Dreiecke",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat zwei senkrechte Seiten, die Katheten genannt werden, und eine längste Seite, die Hypotenuse genannt wird. Die beiden Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt gegenüber diesem Winkel. Hier ist das Dreieck ABC mit dem rechten Winkel bei C: Kathete a ist AC, Kathete b ist BC und die Hypotenuse c ist AB.",
            },
            {
              "kind": "p",
              "text": "Kathete b ist eine der beiden Seiten, die den rechten Winkel bilden, sie ist also eine echte Seite des Dreiecks, kein Abschnitt, der darin gezeichnet wurde. Die Projektion q liegt flach entlang der Hypotenuse, während Kathete b vom Eckpunkt B zum Eckpunkt des rechten Winkels C verläuft.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist in einem nicht entarteten rechtwinkligen Dreieck immer die längste Seite, da sie gegenüber dem größten Winkel, dem rechten Winkel, liegt. Deshalb verlangt die Formel [[0 < b < c]], und deshalb erwartet der Rechner eine Hypotenuse, die länger ist als die Kathete.",
            },
            {
              "kind": "p",
              "text": "Die Lage von Kathete b entscheidet, welcher Abschnitt q heißt: Kathete b berührt den Eckpunkt B, also ist der Abschnitt neben B q. Prüfen Sie immer die Beschriftungen in Ihrem eigenen Diagramm, bevor Sie wählen, welche Kathete Sie eingeben.",
            },
          ],
          "h2": "Kathete b und Hypotenuse verstehen",
          "table": {
            "headers": [
              "Symbol",
              "Bedeutung",
            ],
            "rows": [
              [
                "a",
                "Andere senkrechte Kathete",
              ],
              [
                "b",
                "Kathete, die zu q gehört",
              ],
              [
                "c",
                "Vollständige Hypotenuse",
              ],
              [
                "p",
                "Projektion, die zu a gehört",
              ],
              [
                "q",
                "Projektion, die zu b gehört",
              ],
              [
                "h",
                "Höhe zur Hypotenuse",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jeder Fehler unten wird von seiner Korrektur gefolgt. Die meisten gehen auf die Beschriftung zurück, nicht auf die Arithmetik.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kathete a statt Kathete b verwenden: Die Eingabe von a ergibt p. Mit a = 6 und c = 10 ist das Ergebnis 3,6 cm p, nicht q.",
                "Vergessen, Kathete b zu quadrieren: Die Division von b durch c statt von b zum Quadrat durch c ergibt 0,8 cm statt 6,4 cm.",
                "c durch b zum Quadrat teilen statt b zum Quadrat durch c: Der Quotient muss [[b^2/c]] lauten, nicht [[c/b^2]]. Mit b = 8 und c = 10 ergibt die falsche Reihenfolge etwa 0,156, was keine gültige Einheit hat.",
                "Projektion p mit Projektion q verwechseln: q liegt neben dem Eckpunkt B und p neben dem Eckpunkt A. Beschriften Sie beide Abschnitte vor der Berechnung.",
                "q für die eigentliche senkrechte Kathete halten: q ist ein Abschnitt der Hypotenuse, nicht die Seite BC. Im Dreieck 6-8-10 ist Kathete b 8 cm lang, während q nur 6,4 cm beträgt.",
                "Einen Kathetenwert eingeben, der größer oder gleich c ist: Ein solches Dreieck existiert nicht, da die Hypotenuse die längste Seite ist.",
                "Zentimeter und Meter mischen: Rechnen Sie zuerst um, wie in Beispiel 7, wo 1 m zu 100 cm wurde.",
                "Vergessen, dass c die vollständige Hypotenuse darstellt: Die Verwendung einer Projektion oder einer Kathete als Nenner verfälscht das Ergebnis.",
                "Zwischenergebnisse zu früh runden: Das Runden der quadrierten Kathete vor der Division verschiebt die Antwort.",
                "b und b zum Quadrat verwechseln: 64 ist im Beispiel 6-8-10 eine quadrierte Länge, während 6,4 cm die Projektion ist.",
                "Die Formel auf ein Dreieck anwenden, das nicht rechtwinklig ist: Der Projektionssatz braucht die Höhe von einem rechten Winkel aus.",
                "q für die gesamte Hypotenuse halten: q plus p ergibt c, ein Ergebnis von c oder mehr deutet also auf einen Fehler hin.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn eine Antwort falsch aussieht, halten Sie inne und beschriften Sie das Diagramm neu, bevor Sie neu rechnen. Die meisten Fehler oben verschwinden, sobald p und q auf der Hypotenuse klar markiert sind.",
            },
          ],
          "h2": "Häufige Fehler bei der Berechnung von Projektion Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Versuchen Sie alle sechs Aufgaben auf Papier, bevor Sie die Antworten lesen. Keiner der Werte wiederholt die durchgerechneten Beispiele.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Kathete [[b = 9]] cm und die Hypotenuse [[c = 15]] cm. Bestimmen Sie Projektion q.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimalwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 1.5]] m und [[c = 2.5]] m, bestimmen Sie Projektion q.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Bruchmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = \\frac{5}{6}]] ft und [[c = \\frac{5}{3}]] ft, bestimmen Sie q als Bruch.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umrechnung von Einheiten",
            },
            {
              "kind": "p",
              "text": "Eine Kathete misst [[b = 80]] cm und die Hypotenuse misst [[c = 2]] m. Bestimmen Sie q in Zentimetern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: p nach der Berechnung von q finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 25]] cm und die Kathete [[b = 15]] cm. Bestimmen Sie q und dann p.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrstufige Aufgabe mit Projektion q und Höhe h",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] cm und [[b = 15]] cm, bestimmen Sie q, dann p und dann die Höhe h.",
            },
            {
              "kind": "h3",
              "text": "Lösungen der Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[b^2 = \\frac{25}{36}]], also [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: Rechnen Sie 2 m in 200 cm um, dann gilt [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, dann [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[q = 9]] cm und [[p = 16]] cm, also [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Übungsaufgaben mit Lösungen",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis beruht auf ähnlichen Dreiecken. Das Zeichnen der Höhe CD teilt das Dreieck ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, und beide sind ähnlich zum ursprünglichen Dreieck. Eines ihrer Seitenverhältnisse ergibt den Projektionssatz direkt.",
            },
            {
              "kind": "p",
              "text": "Betrachten Sie das Dreieck CBD und das ganze Dreieck ABC. Beide enthalten den Winkel bei B, und beide enthalten einen rechten Winkel, ihre dritten Winkel müssen also ebenfalls übereinstimmen. Das Zuordnen der Seiten, die an denselben Stellen liegen, ergibt die Proportion:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie nun die Standardsymbole ein: [[DB = q]], [[BC = b]] und [[AB = c]]. Die Proportion wird zu:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kreuzweises Multiplizieren beseitigt die Brüche. Der linke Zähler mal dem rechten Nenner ist gleich dem rechten Zähler mal dem linken Nenner, also [[q \\times c = b \\times b]], was bedeutet:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Die Division beider Seiten durch c beendet den Beweis und ergibt [[q = \\frac{b^2}{c}]]. Dieselbe Argumentation, angewendet auf das andere kleine Dreieck ACD, ergibt [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Warum funktioniert die Formel für Projektion Q?",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben den kleineren ähnlichen Dreiecken ACD und CBD, das die Proportion q durch b gleich b durch c zeigt",
            "caption": "Beweis mit ähnlichen Dreiecken: q durch b ist gleich b durch c, kreuzweises Multiplizieren ergibt also b zum Quadrat gleich c mal q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neun Eigenschaften folgen direkt aus [[q = \\frac{b^2}{c}]]. Jede dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "items": [
                "Projektion q ist in einem nicht entarteten Dreieck immer kürzer als die vollständige Hypotenuse, da q nur ein Teil von c ist.",
                "Wenn Kathete b bei festem c vergrößert wird, wächst q, weil die quadrierte Kathete im Zähler wächst.",
                "Wenn c bei festem b vergrößert wird, sinkt q, weil der Nenner wächst.",
                "Wenn b und c beide mit demselben positiven Faktor multipliziert werden, skaliert q mit diesem Faktor.",
                "Wenn p gleich q ist, sind beide senkrechten Katheten gleich lang, und das Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck.",
                "Projektion q ist in einem gültigen nicht entarteten Dreieck immer positiv. Null oder negative Werte beschreiben kein reales Dreieck.",
                "Projektion q ist eine Länge, keine Fläche. Die quadrierte Kathete ist nur ein Zwischenschritt, und die Division durch c stellt gewöhnliche Längeneinheiten wieder her.",
                "Projektion q gehört speziell zu Kathete b. Ihre Verwendung mit Kathete a beantwortet eine völlig andere Frage.",
                "Das Vertauschen von p und q ändert, welche Kathete zu welcher Projektion gehört, die Beschriftungen müssen also ihren Eckpunkten zugeordnet bleiben.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Wenn die Höhe im Mittelpunkt der Hypotenuse landet, müssen die beiden Katheten übereinstimmen, wie das Diagramm unten zeigt.",
            },
          ],
          "h2": "Wichtige Eigenschaften von Projektion Q",
          "image": {
            "alt": "Zwei rechtwinklige Dreiecke nebeneinander, eines mit gleichen Projektionen p und q von 5 und eines mit ungleichen Projektionen p gleich 3,6 und q gleich 6,4",
            "caption": "Gleiche Projektionen (p = q = 5) ergeben gleiche Katheten, während ungleiche Projektionen (p = 3,6, q = 6,4) ungleiche Katheten ergeben.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manche Aufgaben fragen stattdessen nach der anderen Projektion. Die entsprechende Formel ist das Spiegelbild der Formel für q, mit Kathete a anstelle von Kathete b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 6]] cm und [[c = 10]] cm. Dann gilt [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Das stimmt mit der anderen Projektion des Dreiecks 6-8-10 aus den früheren Beispielen überein, wo q 6,4 cm betrug und die beiden Projektionen zusammen 10 cm ergeben.",
            },
            {
              "kind": "p",
              "text": "Die Formel verwendet a statt b, weil jede Kathete zu der Projektion neben ihrem eigenen Eckpunkt gehört. Kathete a berührt den Eckpunkt A, und p ist der Abschnitt neben A. Die Eingabe von b in diese Formel würde q zurückgeben, nicht p. Der Rechner auf dieser Seite akzeptiert nur b und c, verwenden Sie also den <a href=\"/right-triangle-projection-p-calculator/\">Projektion-p-Rechner</a>, wenn Sie p aus a und c finden müssen.",
            },
          ],
          "h2": "So berechnen Sie Projektion p aus der anderen Kathete",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz und der Satz des Pythagoras stimmen genau überein, und die Algebra zeigt, warum. Beginnen Sie mit den beiden Projektionsformeln [[a^2 = c \\times p]] und [[b^2 = c \\times q]] und addieren Sie sie:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ausklammern von c auf der rechten Seite ergibt [[a^2 + b^2 = c(p + q)]]. Da [[p + q = c]] gilt, ergibt die Einsetzung das bekannte Ergebnis:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine numerische Prüfung mit dem Dreieck 6-8-10 bestätigt es: [[a^2 + b^2 = 36 + 64 = 100]] und [[c^2 = 10^2 = 100]]. Der Projektionssatz zerlegt die pythagoreische Beziehung in ein Stück pro Kathete, und das Addieren der Stücke baut sie wieder auf.",
            },
            {
              "kind": "p",
              "text": "Diese Zerlegung macht die Projektionsformeln nützlich: Der Satz des Pythagoras allein kann keine Projektion aus einer Kathete und einer Hypotenuse finden, weil er über die Katheten gemeinsam spricht.",
            },
          ],
          "h2": "Zusammenhang zwischen Projektion Q und dem Satz des Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Projektion q hängt auch über eine zweite geometrische Mittelbeziehung mit der Höhe zusammen. Die Höhe h ist das geometrische Mittel der beiden Projektionen:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Da [[p = c - q]] gilt, kann die Höhe auch nur mit q und c geschrieben werden:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[q = 6.4]] cm und [[c = 10]] cm. Bestimmen Sie zuerst p: [[p = 10 - 6.4 = 3.6]] cm. Dann gilt [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Die Höhe ist kürzer als jede Kathete, wie es sein muss.",
            },
            {
              "kind": "p",
              "text": "Allein aus Projektion q lässt sich die Höhe nicht bestimmen: Zwei verschiedene Dreiecke können dieselbe q bei unterschiedlichen Hypotenusen haben. Die vollständige Hypotenuse oder die andere Projektion wird immer zusätzlich benötigt. Der <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus den Projektionen</a> übernimmt diese Berechnung, wenn beide Projektionen bekannt sind.",
            },
          ],
          "h2": "Zusammenhang zwischen Projektion Q und Höhe",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektionsformel kann umgestellt werden, um statt q Kathete b zu finden. Beginnen Sie mit [[b^2 = c \\times q]] und ziehen Sie auf beiden Seiten die positive Quadratwurzel:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie es mit den vertrauten Zahlen: [[b = 8]] cm, [[c = 10]] cm und [[q = 6.4]] cm. Das Produkt unter der Wurzel ist [[c \\times q = 10 \\times 6.4 = 64]], und [[\\sqrt{64} = 8]] cm, das ist die Kathete, mit der wir begonnen haben.",
            },
            {
              "kind": "p",
              "text": "Der Zusammenhang ist die geometrische Mittelbeziehung: Kathete b ist das geometrische Mittel der Hypotenuse und ihrer Projektion. Deshalb erscheint die Kathete im Satz quadriert, und deshalb erscheint die Quadratwurzel, wenn man nach der Kathete auflöst. Für Aufgaben, die von q und c ausgehen, führt der <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Rechner für Kathete b aus der Projektion</a> diese umgestellte Formel direkt aus.",
            },
          ],
          "h2": "Zusammenhang zwischen Projektion Q und Kathete b",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die beiden Projektionen sind die beiden Teile einer geraden Seite, sie ergeben also zusammen die ganze Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Umstellen ergibt [[p = c - q]]. Mit [[c = 10]] cm und [[q = 6.4]] cm lautet die Subtraktion [[p = 10 - 6.4 = 3.6]] cm. Dieselbe Subtraktion funktioniert auch andersherum: [[q = c - p]]. Der <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Rechner für die Hypotenuse aus den Projektionen</a> baut c aus p und q wieder auf, wenn die Hypotenuse selbst unbekannt ist.",
            },
            {
              "kind": "p",
              "text": "Der Vergleich von p und q sagt etwas über die Form des Dreiecks aus. Wenn q gleich p ist, landet die Höhe im Mittelpunkt der Hypotenuse und die beiden Katheten sind gleich lang, das Dreieck ist also gleichschenklig. Wenn q größer ist als p, ist Kathete b länger als Kathete a, und wenn p größer ist, ist Kathete a länger. Die längere Projektion gehört immer zur längeren Kathete.",
            },
            {
              "kind": "p",
              "text": "Im Dreieck 6-8-10 beträgt q 6,4 cm und p 3,6 cm, q ist also größer, und Kathete b mit 8 cm ist tatsächlich länger als Kathete a mit 6 cm.",
            },
          ],
          "h2": "Zusammenhang zwischen Projektion p und Projektion q",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das Projektion q zusammen mit Kathete b mit Projektion p zusammen mit Kathete a vergleicht, mit c gleich 10, q gleich 6,4 und p gleich 3,6",
            "caption": "q verwendet b (64 geteilt durch 10 = 6,4) und p verwendet a (36 geteilt durch 10 = 3,6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Verwenden Sie [[b = 8]] cm und [[c = 10]] cm. Die vier Schritte unten zeigen die vollständige Rechnung, ohne dass etwas übersprungen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Schreiben Sie die Formel auf: [[q = \\frac{b^2}{c}]].",
                "Setzen Sie die Werte ein: [[q = \\frac{8^2}{10}]].",
                "Quadrieren Sie die Kathete: [[q = \\frac{64}{10}]].",
                "Teilen Sie: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 6,4 cm ist der Abschnitt der Hypotenuse neben Kathete b, keine senkrechte Seite und keine Fläche. Eine kurze Prüfung schließt den Kreis: [[b^2 = 8^2 = 64]] und [[c \\times q = 10 \\times 6.4 = 64]], beide Seiten des Satzes stimmen also überein.",
            },
            {
              "kind": "p",
              "text": "Zur Orientierung: Die andere Projektion ist [[p = 10 - 6.4 = 3.6]] cm, Kathete a ist [[a = \\sqrt{10 \\times 3.6} = 6]] cm und die Höhe ist [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, was das vertraute rechtwinklige Dreieck 6-8-10 bestätigt.",
            },
          ],
          "h2": "Schritt-für-Schritt-Beispiel zur Berechnung von Projektion Q",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit Kathete b 8 cm und Hypotenuse 10 cm, durchgerechnet zu Projektion q gleich 6,4 cm",
            "caption": "Durchgerechnetes Beispiel: b = 8 cm und c = 10 cm ergeben q = 64 geteilt durch 10 = 6,4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vier unabhängige Prüfungen fangen fast jeden Fehler ab. Wenden Sie bei jeder Antwort mindestens eine an, und alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten verwendet durchgehend [[b = 8]] cm, [[c = 10]] cm und [[q = 6.4]] cm.",
            },
            {
              "kind": "h3",
              "text": "Methode 1: Prüfung mit dem Projektionssatz",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[q = \\frac{b^2}{c}]] direkt. Hier gilt [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, was mit der Antwort übereinstimmt. Wenn die Neuberechnung abweicht, ist entweder das Quadrieren oder die Division schiefgegangen.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Streckenaddition",
            },
            {
              "kind": "p",
              "text": "Bestimmen Sie p durch Subtraktion: [[p = 10 - 6.4 = 3.6]] cm. Prüfen Sie dann [[p + q = 3.6 + 6.4 = 10]] cm, was gleich c ist. Eine Summe, die c verfehlt, deutet auf einen Subtraktionsfehler hin.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Prüfung mit dem Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Berechnen Sie Kathete a aus p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Prüfen Sie dann [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Diese Prüfung testet das ganze Dreieck, sie fängt also Beschriftungsfehler ab, die die erste Prüfung übersehen kann. Der <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Rechner für Kathete a aus der Projektion</a> führt den Schritt für a direkt aus.",
            },
            {
              "kind": "h3",
              "text": "Methode 4: Geometrische Plausibilität",
            },
            {
              "kind": "p",
              "text": "Vergewissern Sie sich, dass q positiv, kleiner als c, in der richtigen Einheit angegeben und ein Hypotenusenabschnitt statt einer senkrechten Seite ist. Hier sind 6,4 cm positiv, kleiner als 10 cm, in Zentimetern angegeben und kürzer als Kathete b mit 8 cm.",
            },
          ],
          "h2": "So prüfen Sie Ihre Berechnung von Projektion Q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zeichnen Sie die Höhe vom Eckpunkt des rechten Winkels C senkrecht zur Hypotenuse AB. Sie trifft die Hypotenuse in einem Punkt, der Fußpunkt genannt und mit D beschriftet wird, und teilt sie in zwei angrenzende Abschnitte: AD ist Projektion p und DB ist Projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion q gehört zu Kathete b, weil sie neben dem Eckpunkt B liegt, demselben Eckpunkt, an dem Kathete b beginnt. Im kleinen Dreieck CBD ist Kathete b die Hypotenuse und q eine ihrer Katheten, das ist die geometrische Verbindung, die den Projektionssatz funktionieren lässt. Projektion p gehört nach derselben Überlegung zu Kathete a, die den Eckpunkt A berührt.",
            },
            {
              "kind": "p",
              "text": "Projektionen sind Längen entlang der Hypotenuse, gemessen in derselben Einheit wie die anderen Seiten. Sie stehen zu nichts senkrecht, und sie sind keine Seiten des ursprünglichen Dreiecks. Der <a href=\"/right-triangle-projection-calculator/\">Projektionsrechner für rechtwinklige Dreiecke</a> findet beide Projektionen, wenn die Katheten und die Hypotenuse bekannt sind.",
            },
            {
              "kind": "p",
              "text": "Da p und q die beiden Teile einer geraden Seite sind, ergeben sie zusammen die ganze Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Mit [[c = 10]] cm und [[q = 6.4]] cm beträgt die andere Projektion [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Projektion q ist nicht dasselbe wie Kathete b. Kathete b ist die Seite BC, eine der Seiten, die den rechten Winkel bilden, während q der Abschnitt DB entlang der Hypotenuse ist. Im Dreieck 6-8-10 ist Kathete b 8 cm lang und Projektion q nur 6,4 cm.",
            },
          ],
          "h2": "Was ist Projektion Q in einem rechtwinkligen Dreieck?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Quadrat ist da, weil der Projektionssatz eine Aussage über eine quadrierte Kathete ist: Er besagt, dass das Quadrat von Kathete b gleich dem Produkt aus c und q ist, [[b^2 = c \\times q]], und die Formel für q erhält man, indem man beide Seiten durch c teilt.",
            },
            {
              "kind": "p",
              "text": "Der Grund geht auf ähnliche Dreiecke zurück. Im Dreieck CBD spielt Kathete b die Rolle der Hypotenuse, während q eine ihrer Katheten ist. Der Vergleich des kleinen Dreiecks mit dem ganzen Dreieck ergibt die Proportion [[\\frac{q}{b} = \\frac{b}{c}]], und Kathete b erscheint zweimal, einmal in jedem Verhältnis. Kreuzweises Multiplizieren setzt b auf beide Seiten, genau deshalb erscheint das Quadrat.",
            },
            {
              "kind": "p",
              "text": "Die geometrische Mittelbeziehung sagt dasselbe mit anderen Worten: Kathete b ist das geometrische Mittel der Hypotenuse c und ihrer Projektion q, das bedeutet [[b = \\sqrt{c \\times q}]]. Das Quadrieren beider Seiten ergibt [[b^2 = c \\times q]], und die Division durch c isoliert q.",
            },
            {
              "kind": "p",
              "text": "Die Division ist der Schritt, der q isoliert. Die Multiplikation im Satz bindet q an c, und die Division durch c löst diese Bindung wieder. Ohne das Quadrat würde die Formel eine Länge mit einer Fläche vermischen, und die Einheiten würden nicht aufgehen.",
            },
          ],
          "h2": "Warum wird Kathete b in der Projektionsformel quadriert?",
        },
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-applications": "Praktische Anwendungen der Projektionsberechnung im rechtwinkligen Dreieck",
        "sec-calculate": "Projektion Q im rechtwinkligen Dreieck berechnen",
        "sec-diagram": "Diagramm zur Projektion Q im rechtwinkligen Dreieck erklärt",
        "sec-examples": "Durchgerechnete Beispiele zur Berechnung von Projektion Q",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-formula": "Formel für Projektion Q im rechtwinkligen Dreieck",
        "sec-how-to-use": "So verwenden Sie den Projektion-Q-Rechner für rechtwinklige Dreiecke",
        "sec-intro": "Projektion-Q-Rechner für rechtwinklige Dreiecke",
        "sec-leg-b-hypotenuse": "Kathete b und Hypotenuse verstehen",
        "sec-mistakes": "Häufige Fehler bei der Berechnung von Projektion Q",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-projection-p": "So berechnen Sie Projektion p aus der anderen Kathete",
        "sec-proof": "Warum funktioniert die Formel für Projektion Q?",
        "sec-properties": "Wichtige Eigenschaften von Projektion Q",
        "sec-pythagoras": "Zusammenhang zwischen Projektion Q und dem Satz des Pythagoras",
        "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "sec-relationship-altitude": "Zusammenhang zwischen Projektion Q und Höhe",
        "sec-relationship-leg-b": "Zusammenhang zwischen Projektion Q und Kathete b",
        "sec-relationship-pq": "Zusammenhang zwischen Projektion p und Projektion q",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Berechnung von Projektion Q",
        "sec-verify": "So prüfen Sie Ihre Berechnung von Projektion Q",
        "sec-what-projection-q": "Was ist Projektion Q in einem rechtwinkligen Dreieck?",
        "sec-why-squared": "Warum wird Kathete b in der Projektionsformel quadriert?",
      },
    },
};
