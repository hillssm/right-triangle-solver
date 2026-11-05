// projectionPGuideTranslations.bde.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B2_DE = {
  "de": {
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "answer": "Die Formel lautet [[p = \\frac{a^2}{c}]], wobei a die zu p gehörende Kathete und c die vollständige Hypotenuse ist. Quadrieren Sie zuerst Kathete a und teilen Sie dann durch c. Zum Beispiel ergeben [[a = 6]] cm und [[c = 10]] cm [[p = 3.6]] cm.",
          "question": "Wie lautet die Formel für die Projektion p?",
        },
        {
          "answer": "Die Projektion p ist der Abschnitt der Hypotenuse neben dem Eckpunkt A, der entsteht, wenn die Höhe vom rechten Winkel auf die Hypotenuse im Punkt D trifft. Im Dreieck ABC ist [[p = AD]], der Teil der Hypotenuse, der zur Kathete a gehört.",
          "question": "Was stellt die Projektion p dar?",
        },
        {
          "answer": "Das Quadrat kommt von ähnlichen Dreiecken: Dreieck ACD ist ähnlich zu Dreieck ABC, was [[\\frac{p}{a} = \\frac{a}{c}]] ergibt, und Kathete a taucht in beiden Verhältnissen auf. Die Überkreuzmultiplikation ergibt [[a^2 = c \\times p]], das Quadrat steckt also in der Geometrie selbst.",
          "question": "Warum wird Kathete a quadriert?",
        },
        {
          "answer": "Die Division isoliert p. Der Projektionssatz besagt [[a^2 = c \\times p]], wobei p mit c multipliziert wird, sodass die Division beider Seiten durch c p allein übrig lässt. Die Division verwandelt außerdem die quadrierte Länge in eine gewöhnliche Länge.",
          "question": "Warum teilen wir durch die Hypotenuse?",
        },
        {
          "answer": "Nein. Kathete a ist die Seite AC, eine der Seiten, die den rechten Winkel bilden, während die Projektion p der Abschnitt AD entlang der Hypotenuse ist. Im 6-8-10-Dreieck beträgt Kathete a 6 cm und die Projektion p nur 3.6 cm.",
          "question": "Ist die Projektion p dasselbe wie Kathete a?",
        },
        {
          "answer": "Nein. Die Projektion p ist nur ein Teil der Hypotenuse und muss daher kleiner als c sein. Wäre p gleich c, wäre q null und das Dreieck entartet. Ein Ergebnis größer als c deutet immer auf einen Eingabe- oder Beschriftungsfehler hin.",
          "question": "Kann die Projektion p größer als die Hypotenuse sein?",
        },
        {
          "answer": "Die Projektion p liegt neben dem Eckpunkt A und gehört zu Kathete a, während die Projektion q neben dem Eckpunkt B liegt und zu Kathete b gehört. Sie sind die beiden Abschnitte, die die Höhe auf der Hypotenuse erzeugt: [[p + q = c]].",
          "question": "Was ist der Unterschied zwischen Projektion p und q?",
        },
        {
          "answer": "Nein. Kathete a gehört nur zur Projektion p. Um q zu finden, brauchen Sie Kathete b mit [[q = \\frac{b^2}{c}]] oder Sie subtrahieren: [[q = c - p]], sobald p bekannt ist. Der <a href=\"/right-triangle-projection-q-calculator/\">Projektion-q-Rechner</a> findet q aus b und c.",
          "question": "Kann ich die Projektion q mit Kathete a berechnen?",
        },
        {
          "answer": "Sie brauchen zusätzlich q oder c. Finden Sie q mit [[q = c - p]] und verwenden Sie dann [[h = \\sqrt{p \\times q}]]. Mit [[p = 3.6]] cm und [[c = 10]] cm ist [[q = 6.4]] cm und [[h = 4.8]] cm. Die Projektion p allein kann die Höhe nicht bestimmen.",
          "question": "Wie finde ich die Höhe, wenn die Projektion p bekannt ist?",
        },
        {
          "answer": "Berechnen Sie [[p = \\frac{a^2}{c}]] erneut, prüfen Sie dann [[p + q = c]], nachdem Sie q durch Subtraktion gefunden haben, und vergewissern Sie sich, dass p positiv und kleiner als c ist. Sie können auch Kathete b aus q bestimmen und [[a^2 + b^2 = c^2]] prüfen.",
          "question": "Wie kann ich die Projektion p überprüfen?",
        },
        {
          "answer": "Die Höhe trifft die Hypotenuse in deren Mittelpunkt, und die beiden Katheten sind gleich, das Dreieck ist also gleichschenklig. Mit [[c = 10]] cm und [[p = q = 5]] cm sind beide Katheten gleich [[\\sqrt{50}]] cm, etwa 7.071 cm.",
          "question": "Was passiert, wenn p und q gleich sind?",
        },
        {
          "answer": "Die Hypotenuse liegt dem rechten Winkel gegenüber, dem größten Winkel im Dreieck, und die Seite gegenüber dem größten Winkel ist immer die längste Seite. Wäre a gleich oder größer als c, könnte kein solches rechtwinkliges Dreieck existieren.",
          "question": "Warum muss die Hypotenuse länger als Kathete a sein?",
        },
      ],
      "relatedHeading": "Entdecken Sie weitere Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten übernimmt eine bestimmte Aufgabe am rechtwinkligen Dreieck, wählen Sie also das Werkzeug, das zu den Messungen passt, die Sie bereits kennen.",
      "relatedItems": [
        "Projektionsrechner für rechtwinklige Dreiecke",
        "Projektion-Q-Rechner für rechtwinklige Dreiecke",
        "Kathete-a-aus-Projektion-Rechner für rechtwinklige Dreiecke",
        "Kathete-b-aus-Projektion-Rechner für rechtwinklige Dreiecke",
        "Hypotenusenrechner aus Projektionen für rechtwinklige Dreiecke",
        "Höhenrechner aus Projektionen für rechtwinklige Dreiecke",
        "Seitenrechner für rechtwinklige Dreiecke",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Anwendung sind Geometrie-Hausaufgaben und Unterricht, wo Projektionsaufgaben prüfen, ob Schülerinnen und Schüler ein Diagramm beschriften und [[p = \\frac{a^2}{c}]] anwenden können, statt aus Gewohnheit zum Satz des Pythagoras zu greifen. Übungen zu ähnlichen Dreiecken verwenden denselben Aufbau, da der Beweis selbst eine Übung im Zuordnen entsprechender Seiten ist.",
            },
            {
              "kind": "p",
              "text": "Im technischen Zeichnen wird der Satz verwendet, wenn ein rechtwinkliges Dreieck aus Teilmessungen rekonstruiert werden muss: Gibt eine Zeichnung die Hypotenuse und den Fußpunkt der Höhe an, folgt die fehlende Projektion, ohne die Form neu zu vermessen. Lehrerinnen und Lehrer nutzen den Aufbau auch als Brückenstunde zwischen Streckenaddition und Ähnlichkeit.",
            },
            {
              "kind": "p",
              "text": "Eine Bedingung begrenzt jede Anwendung: Die erforderliche Geometrie des rechtwinkligen Dreiecks muss tatsächlich existieren. Der Satz beschreibt exakte geometrische Beziehungen, keine ungefähren Feldmessungen, ersetzt also niemals sorgfältige Vermessung oder professionelle ingenieurtechnische Messung.",
            },
          ],
          "h2": "Praktische Anwendungen von Projektionsberechnungen bei rechtwinkligen Dreiecken",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner hat zwei Eingabefelder. Das erste nimmt Kathete a auf, die senkrechte Seite, die zur Projektion p gehört. Das zweite nimmt die Hypotenuse c auf, die vollständige Seite gegenüber dem rechten Winkel. Beide Längen müssen dieselbe Einheit verwenden, rechnen Sie also zuerst um, wenn eine Messung in Zentimetern und die andere in Metern angegeben ist.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse muss länger als Kathete a sein, da eine Kathete eine Seite des rechten Winkels ist, während die Hypotenuse das ganze Dreieck überspannt. Ist Ihr a-Wert größer als c, haben Sie wahrscheinlich eine Projektion, die Höhe oder die falsche Seite eingegeben.",
            },
            {
              "kind": "p",
              "text": "Klicken Sie auf die Schaltfläche Projektion p berechnen, um das Ergebnis zu sehen, und verwenden Sie Zurücksetzen, um beide Felder vor einer neuen Aufgabe zu leeren. Das Ergebnis ist eine Länge in der eingegebenen Einheit, eine Kathete von 6 cm und eine Hypotenuse von 10 cm ergeben also 3.6 cm. Das Ergebnis ist eine Streckenlänge entlang der Hypotenuse.",
            },
          ],
          "h2": "Projektion P eines rechtwinkligen Dreiecks berechnen",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist Kathete a, die Seite BC ist Kathete b und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und berührt sie in D.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in zwei Teile: Der Abschnitt AD ist die Projektion p und der Abschnitt DB ist die Projektion q. Kathete a und Projektion p sind hervorgehoben, weil sie das Paar sind, um das es auf dieser Seite geht. Verfolgen Sie die Beschriftungen in dieser Reihenfolge: Beginnen Sie bei A, laufen Sie entlang Kathete a nach C, dann entlang Kathete b nach B und dann zurück entlang der Hypotenuse von B nach A, wobei Sie bei D anhalten, um die Teilung in p und q zu sehen.",
            },
            {
              "kind": "p",
              "text": "Die Zuordnung von a zu p wird im kleinen Dreieck ACD sichtbar, wo Kathete a die Hypotenuse ist und p die Seite entlang der großen Hypotenuse. Da das Dreieck ACD ähnlich zum Dreieck ABC ist, entspricht das Verhältnis von p zu a im kleinen Dreieck dem Verhältnis von a zu c im großen.",
            },
          ],
          "h2": "Diagramm zur Projektion P im rechtwinkligen Dreieck erklärt",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB, Kathete a und Projektion p hervorgehoben, mit den Katheten a und b, der Hypotenuse c, den Projektionen p und q sowie der Höhe h beschriftet",
            "caption": "Die Höhe CD teilt die Hypotenuse AB in die Projektion p (AD) und die Projektion q (DB), wobei Kathete a (AC) hervorgehoben ist.",
            "src": "projection-p-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, die Einsetzung und das Endergebnis, und jedes Beispiel hält seine Einheiten von Anfang bis Ende einheitlich.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 6]] cm und [[c = 10]] cm, die Formel ergibt [[p = \\frac{6^2}{10} = \\frac{36}{10}]], also [[p = 3.6]] cm. Die quadrierte Kathete 36 ist ein Zwischenwert, und die Division durch die Hypotenuse macht daraus wieder eine Länge. Die andere Kathete dieses Dreiecks ist 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Perfekte Quadratdivision",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 8]] cm und [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Die quadrierte Kathete teilt sich glatt, das Ergebnis ist also exakt. Die andere Projektion hier ist 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Dezimalergebnis",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 7]] cm und [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Ein Dezimalergebnis ist normal: Die Projektion muss keine ganze Zahl sein, selbst wenn beide Eingaben ganzzahlig sind. Die andere Projektion ist 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Größere Messungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 12]] m und [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Größere Zahlen ändern nichts an der Methode: quadrieren, dann teilen. Die andere Projektion ist 12.8 m, die zu einer Kathete von 16 m gehört.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Kleine Messungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 30]] mm und [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Kleine Messungen funktionieren genauso, und die Einheit Millimeter durchgehend beizubehalten, vermeidet jede Umrechnung. Die andere Projektion ist 32 mm, die zu einer Kathete von 40 mm gehört.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Bruchmessungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = \\frac{3}{4}]] ft und [[c = \\frac{3}{2}]] ft, quadrieren Sie zuerst die Kathete: [[a^2 = \\frac{9}{16}]] Quadratfuß. Dann ist [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Die Division durch einen Bruch bedeutet die Multiplikation mit seinem Kehrwert, der Schritt, den die meisten Schülerinnen und Schüler bei Bruchmessungen übersehen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Unterschiedliche Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 60]] cm und [[c = 1]] m, rechnen Sie zuerst um: 1 m entspricht 100 cm. Dann ist [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Würde man 1 statt 100 verwenden, ergäbe sich 3600 cm, eine Projektion, die weit länger als die Hypotenuse wäre.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Größere Dezimalwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 4.5]] m und [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Dezimale Eingaben brauchen dieselbe Sorgfalt wie ganze Zahlen: Quadrieren Sie die volle Dezimalzahl und teilen Sie dann. Die andere Projektion ist 4.8 m, die zu einer Kathete von 6 m gehört.",
            },
          ],
          "h2": "Durchgerechnete Beispiele zur Berechnung der Projektion P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz besagt, dass das Quadrat der Kathete a gleich der Hypotenuse mal ihrer Projektion ist:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Die Division beider Seiten durch c isoliert p und ergibt die Arbeitsformel für diese Seite:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Die Berechnung läuft in zwei Schritten. Schritt 1 quadriert Kathete a, multipliziert sie also mit sich selbst. Schritt 2 teilt diese quadrierte Länge durch die vollständige Hypotenuse c, und das Ergebnis ist eine gewöhnliche Länge, keine quadrierte Länge.",
            },
            {
              "kind": "p",
              "text": "Die Einheiten brauchen in beiden Schritten Sorgfalt. Sind a und c beide in Zentimetern angegeben, dann ist [[a^2]] in Quadratzentimetern, und die Division durch Zentimeter ergibt wieder Zentimeter. Das Mischen von Einheiten, etwa Meter für a und Zentimeter für c, ergibt einen bedeutungslosen Quotienten, rechnen Sie also vor der Berechnung in eine Einheit um.",
            },
            {
              "kind": "p",
              "text": "Mit [[a = 6]] cm und [[c = 10]] cm ergibt Schritt 1 [[6^2 = 36]] und Schritt 2 [[p = \\frac{36}{10} = 3.6]] cm. Die Zahl 36 beantwortet allein keine Frage: Erst nach der Division wird sie zur Projektionslänge.",
            },
          ],
          "h2": "Formel für die Projektion P im rechtwinkligen Dreieck",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit Höhe CD, das zeigt, dass die Projektion p gleich Kathete a zum Quadrat geteilt durch die Hypotenuse c ist",
            "caption": "Die Projektionsformel: p ist gleich a zum Quadrat geteilt durch c, wobei der Höhenfußpunkt D die Hypotenuse teilt.",
            "src": "projection-p-formula.svg",
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
                "Finden Sie den Eckpunkt des rechten Winkels und die Höhe von ihm zur Hypotenuse.",
                "Bestimmen Sie die senkrechte Kathete, die zur Projektion p gehört, also die Kathete, die den Eckpunkt A berührt.",
                "Bestimmen Sie die vollständige Hypotenuse c, die Seite gegenüber dem rechten Winkel.",
                "Vergewissern Sie sich, dass c größer als a ist. Ist das nicht der Fall, beschriften Sie das Diagramm neu, bevor Sie fortfahren.",
                "Wählen Sie passende Einheiten und rechnen Sie um, wenn die Messungen unterschiedliche Einheiten verwenden.",
                "Geben Sie Kathete a in das Feld Kathete a ein.",
                "Geben Sie die Hypotenuse c in das Feld Hypotenuse c ein.",
                "Klicken Sie auf Projektion p berechnen und lesen Sie das Ergebnis ab.",
                "Prüfen Sie das Ergebnis: p muss positiv und kleiner als c sein.",
                "Verwenden Sie Zurücksetzen, wenn Sie eine neue Berechnung beginnen.",
              ],
            },
            {
              "kind": "p",
              "text": "Wer Kathete b statt Kathete a eingibt, erhält eine andere Projektion. Kathete b gehört zu q, der Rechner würde also den Abschnitt neben dem Eckpunkt B liefern, nicht den neben A. Die Beschriftungsprüfung in Schritt 3 ist am wichtigsten.",
            },
          ],
          "h2": "So verwenden Sie den Projektion-P-Rechner für rechtwinklige Dreiecke",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieser Rechner findet die Projektion p eines rechtwinkligen Dreiecks, wenn Sie Kathete a und die vollständige Hypotenuse c kennen. Die Projektion p ist der Abschnitt der Hypotenuse, der neben Kathete a liegt und entsteht, wenn die Höhe vom rechten Winkel auf die Hypotenuse trifft. Die Formel lautet [[p = \\frac{a^2}{c}]], wobei a die senkrechte Kathete und c die volle Hypotenuse ist.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel ist mit [[a = 6]] cm und [[c = 10]] cm die Berechnung [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Der Wert 3.6 cm ist der Teil der Hypotenuse, der zu Kathete a gehört, nicht die Kathete selbst und nicht die ganze Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Rechner steht oben auf dieser Seite, gefolgt von der Formel, einem beschrifteten Diagramm, einem Beweis, durchgerechneten Beispielen und Prüfungen, die Sie bei jeder Antwort anwenden können.",
            },
          ],
          "h2": "Projektion-P-Rechner für rechtwinklige Dreiecke",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat zwei senkrechte Seiten, die Katheten genannt werden, und eine längste Seite, die Hypotenuse genannt wird. Die beiden Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt diesem Winkel gegenüber. Hier ist das Dreieck ABC mit dem rechten Winkel bei C: Kathete a ist AC, Kathete b ist BC und die Hypotenuse c ist AB.",
            },
            {
              "kind": "p",
              "text": "Kathete a ist eine der beiden Seiten, die den rechten Winkel bilden, also eine echte Seite des Dreiecks, kein Abschnitt, der darin gezogen wurde. Die Projektion p liegt flach entlang der Hypotenuse, während Kathete a vom Eckpunkt A zum Eckpunkt des rechten Winkels C verläuft.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist in einem nicht entarteten rechtwinkligen Dreieck immer die längste Seite, da sie dem größten Winkel, dem rechten Winkel, gegenüberliegt. Deshalb verlangt die Formel [[0 < a < c]] und deshalb erwartet der Rechner eine Hypotenuse, die länger als die Kathete ist.",
            },
            {
              "kind": "p",
              "text": "Die Lage von Kathete a entscheidet, welcher Abschnitt p heißt: Kathete a berührt den Eckpunkt A, der Abschnitt neben A ist also p. Prüfen Sie immer die Beschriftungen Ihres eigenen Diagramms, bevor Sie entscheiden, welche Kathete Sie eingeben.",
            },
          ],
          "h2": "Kathete A und die Hypotenuse verstehen",
          "table": {
            "headers": [
              "Symbol",
              "Bedeutung",
            ],
            "rows": [
              [
                "a",
                "Senkrechte Kathete, die zu p gehört",
              ],
              [
                "b",
                "Andere senkrechte Kathete",
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
              "text": "Auf jeden Fehler unten folgt seine Korrektur. Die meisten gehen auf die Beschriftung zurück, nicht auf die Rechnung.",
            },
            {
              "kind": "steps",
              "steps": [
                "Vergessen, Kathete a zu quadrieren: Wer a durch c teilt statt a zum Quadrat durch c, erhält 0.6 cm statt 3.6 cm.",
                "c durch a zum Quadrat teilen statt a zum Quadrat durch c: Der Quotient muss [[a^2/c]] sein, nicht [[c/a^2]]. Mit a = 6 und c = 10 ergibt die falsche Reihenfolge etwa 0.278, was keine gültige Einheit hat.",
                "Kathete b statt Kathete a verwenden: Wer b eingibt, erhält q. Mit b = 8 und c = 10 ist das Ergebnis 6.4 cm q, nicht p.",
                "Projektion p mit Projektion q verwechseln: p liegt neben dem Eckpunkt A und q neben dem Eckpunkt B. Beschriften Sie beide Abschnitte vor der Berechnung.",
                "p für die eigentliche senkrechte Kathete halten: p ist ein Abschnitt der Hypotenuse, nicht die Seite AC. Im 6-8-10-Dreieck ist Kathete a 6 cm, während p nur 3.6 cm beträgt.",
                "Einen Wert für a eingeben, der größer als oder gleich c ist: Ein solches Dreieck existiert nicht, da die Hypotenuse die längste Seite ist.",
                "Messeinheiten mischen: Rechnen Sie zuerst um, wie in Beispiel 7, wo 1 m zu 100 cm wurde.",
                "Vergessen, dass die vollständige Hypotenuse c ist: Wer eine Projektion oder eine Kathete als Nenner verwendet, verzerrt das Ergebnis.",
                "Zwischenergebnisse zu früh runden: Wer die quadrierte Kathete vor der Division rundet, verschiebt die Antwort.",
                "Quadrierte Längen mit gewöhnlichen Längen verwechseln: 36 im 6-8-10-Beispiel ist eine quadrierte Länge, während 3.6 cm die Projektion ist.",
                "Die Formel auf ein Dreieck anwenden, das nicht rechtwinklig ist: Der Projektionssatz braucht die Höhe von einem rechten Winkel aus.",
                "Vergessen, dass p nur ein Abschnitt der Hypotenuse ist: p plus q ergibt c, ein Ergebnis von c oder mehr deutet also auf einen Fehler hin.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn eine Antwort falsch aussieht, halten Sie inne und beschriften Sie das Diagramm neu, bevor Sie neu rechnen. Die meisten Fehler oben verschwinden, sobald p und q auf der Hypotenuse klar markiert sind.",
            },
          ],
          "h2": "Häufige Fehler bei der Berechnung der Projektion P",
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
              "text": "Ein rechtwinkliges Dreieck hat die Kathete [[a = 9]] cm und die Hypotenuse [[c = 15]] cm. Finden Sie die Projektion p.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimalwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 1.5]] m und [[c = 2.5]] m, finden Sie die Projektion p.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Bruchmessungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = \\frac{5}{6}]] ft und [[c = \\frac{5}{3}]] ft, finden Sie p als Bruch.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Einheitenumrechnung",
            },
            {
              "kind": "p",
              "text": "Eine Kathete misst [[a = 80]] cm und die Hypotenuse misst [[c = 2]] m. Finden Sie p in Zentimetern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: q nach der Berechnung von p finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 25]] cm und die Kathete [[a = 15]] cm. Finden Sie p und dann q.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrschrittaufgabe mit Projektion p und Höhe h",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] cm und [[a = 15]] cm, finden Sie p, dann q und dann die Höhe h.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[a^2 = \\frac{25}{36}]], also [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: Rechnen Sie 2 m in 200 cm um, dann ist [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, dann [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[p = 9]] cm und [[q = 16]] cm, also [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Übungsaufgaben mit Antworten",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manche Aufgaben fragen stattdessen nach der anderen Projektion. Die entsprechende Formel ist das Spiegelbild der Formel für p, mit Kathete b anstelle von Kathete a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[b = 8]] cm und [[c = 10]] cm. Dann ist [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Das entspricht der anderen Projektion des 6-8-10-Dreiecks aus den früheren Beispielen, wo p 3.6 cm betrug und die beiden Projektionen zusammen 10 cm ergeben.",
            },
            {
              "kind": "p",
              "text": "Die Formel verwendet b statt a, weil jede Kathete zu der Projektion neben ihrem eigenen Eckpunkt gehört. Kathete b berührt den Eckpunkt B, und q ist der Abschnitt neben B. Wer a in diese Formel einsetzt, erhält p, nicht q. Der Rechner auf dieser Seite akzeptiert nur a und c, verwenden Sie also den <a href=\"/right-triangle-projection-q-calculator/\">Projektion-q-Rechner</a>, wenn Sie q aus b und c finden müssen.",
            },
          ],
          "h2": "So berechnen Sie die Projektion Q aus der anderen Kathete",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis beruht auf ähnlichen Dreiecken. Das Zeichnen der Höhe CD teilt das Dreieck ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, und beide sind dem ursprünglichen Dreieck ähnlich. Eines ihrer Seitenverhältnisse ergibt den Projektionssatz direkt.",
            },
            {
              "kind": "p",
              "text": "Betrachten Sie das Dreieck ACD und das ganze Dreieck ABC. Beide enthalten den Winkel bei A, und beide enthalten einen rechten Winkel, ihre dritten Winkel müssen also ebenfalls übereinstimmen. Das Zuordnen der Seiten, die an denselben Stellen sitzen, ergibt die Proportion:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie nun die Standardsymbole ein: [[AD = p]], [[AC = a]] und [[AB = c]]. Die Proportion wird zu:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Die Überkreuzmultiplikation beseitigt die Brüche. Der linke Zähler mal dem rechten Nenner ist gleich dem rechten Zähler mal dem linken Nenner, also [[p \\times c = a \\times a]], was Folgendes ist:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Die Division beider Seiten durch c schließt den Beweis ab und ergibt [[p = \\frac{a^2}{c}]]. Dasselbe Argument, auf das andere kleine Dreieck CBD angewandt, ergibt [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Warum funktioniert die Formel für die Projektion P?",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben den kleineren ähnlichen Dreiecken ACD und CBD, das die Proportion p durch a gleich a durch c zeigt",
            "caption": "Beweis mit ähnlichen Dreiecken: p durch a ist gleich a durch c, die Überkreuzmultiplikation ergibt also a zum Quadrat gleich c mal p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Acht Eigenschaften folgen direkt aus [[p = \\frac{a^2}{c}]]. Jede dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "items": [
                "Die Projektion p ist in einem nicht entarteten Dreieck immer kürzer als die vollständige Hypotenuse, da p nur ein Teil von c ist.",
                "Wird Kathete a bei festem c vergrößert, wächst p, weil die quadrierte Kathete im Zähler wächst.",
                "Wird c bei festem a vergrößert, sinkt p, weil der Nenner wächst.",
                "Werden a und c beide mit demselben positiven Faktor multipliziert, skaliert p mit diesem Faktor.",
                "Ist p gleich q, sind beide Katheten gleich und das Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck.",
                "Die Projektion p ist in einem gültigen nicht entarteten Dreieck immer positiv. Null oder negative Werte beschreiben kein echtes Dreieck.",
                "Die Projektion p ist eine Länge, keine Fläche. Die quadrierte Kathete ist nur ein Zwischenschritt, und die Division durch c stellt gewöhnliche Längeneinheiten wieder her.",
                "Die Projektion p gehört speziell zu Kathete a. Ihre Verwendung mit Kathete b beantwortet eine ganz andere Frage.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Wenn die Höhe im Mittelpunkt der Hypotenuse landet, müssen die beiden Katheten übereinstimmen, wie das Diagramm unten zeigt.",
            },
          ],
          "h2": "Wichtige Eigenschaften der Projektion P",
          "image": {
            "alt": "Zwei rechtwinklige Dreiecke nebeneinander, eines mit gleichen Projektionen p und q von 5 und eines mit ungleichen Projektionen p gleich 3.6 und q gleich 6.4",
            "caption": "Gleiche Projektionen (p = q = 5) ergeben gleiche Katheten, während ungleiche Projektionen (p = 3.6, q = 6.4) ungleiche Katheten ergeben.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz und der Satz des Pythagoras stimmen exakt überein, und die Algebra zeigt, warum. Beginnen Sie mit den beiden Projektionsformeln [[a^2 = c \\times p]] und [[b^2 = c \\times q]] und addieren Sie sie:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ausklammern von c auf der rechten Seite ergibt [[a^2 + b^2 = c(p + q)]]. Da [[p + q = c]] gilt, liefert die Einsetzung das vertraute Ergebnis:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine Zahlenprüfung mit dem 6-8-10-Dreieck bestätigt es: [[a^2 + b^2 = 36 + 64 = 100]] und [[c^2 = 10^2 = 100]]. Der Projektionssatz teilt die pythagoreische Beziehung in ein Stück pro Kathete auf, und das Addieren der Stücke baut sie wieder auf.",
            },
            {
              "kind": "p",
              "text": "Diese Aufteilung macht die Projektionsformeln nützlich: Der Satz des Pythagoras allein kann aus einer Kathete und einer Hypotenuse keine Projektion finden, weil er über die Katheten gemeinsam spricht.",
            },
          ],
          "h2": "Beziehung zwischen Projektion P und dem Satz des Pythagoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektion p hängt auch über eine zweite geometrische Mittelbeziehung mit der Höhe zusammen. Die Höhe h ist das geometrische Mittel der beiden Projektionen:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Da [[q = c - p]] gilt, lässt sich die Höhe auch nur mit p und c schreiben:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[p = 3.6]] cm und [[c = 10]] cm. Finden Sie zuerst q: [[q = 10 - 3.6 = 6.4]] cm. Dann ist [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. Die Höhe ist kürzer als jede Kathete, wie es sein muss.",
            },
            {
              "kind": "p",
              "text": "Die Projektion p allein bestimmt die Höhe nicht: Zwei verschiedene Dreiecke können dasselbe p bei unterschiedlichen Hypotenusen haben. Die vollständige Hypotenuse oder die andere Projektion wird immer zusätzlich gebraucht. Der <a href=\"/right-triangle-altitude-from-projections-calculator/\">Höhenrechner aus Projektionen</a> übernimmt diese Berechnung, wenn beide Projektionen bekannt sind.",
            },
          ],
          "h2": "Beziehung zwischen Projektion P und Höhe",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektionsformel lässt sich umstellen, um statt p Kathete a zu finden. Beginnen Sie mit [[a^2 = c \\times p]] und ziehen Sie die positive Quadratwurzel beider Seiten:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie es mit den vertrauten Zahlen: [[a = 6]] cm, [[c = 10]] cm und [[p = 3.6]] cm. Das Produkt unter der Wurzel ist [[c \\times p = 10 \\times 3.6 = 36]] und [[\\sqrt{36} = 6]] cm, also die Kathete, mit der wir begonnen haben.",
            },
            {
              "kind": "p",
              "text": "Der Zusammenhang ist die geometrische Mittelbeziehung: Kathete a ist das geometrische Mittel der Hypotenuse und ihrer Projektion. Deshalb taucht die Kathete im Satz quadriert auf und deshalb erscheint die Quadratwurzel, wenn man nach der Kathete auflöst. Für Aufgaben, die von p und c ausgehen, führt der <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Kathete-a-aus-Projektion-Rechner</a> diese umgestellte Formel direkt aus.",
            },
          ],
          "h2": "Beziehung zwischen Projektion P und Kathete A",
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
              "text": "Umgestellt ergibt das [[q = c - p]]. Mit [[c = 10]] cm und [[p = 3.6]] cm ist die Subtraktion [[q = 10 - 3.6 = 6.4]] cm. Dieselbe Subtraktion funktioniert auch andersherum: [[p = c - q]]. Der <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Hypotenusenrechner aus Projektionen</a> baut c aus p und q wieder auf, wenn die Hypotenuse selbst unbekannt ist.",
            },
            {
              "kind": "p",
              "text": "Der Vergleich von p und q sagt etwas über die Form des Dreiecks aus. Wenn p gleich q ist, landet die Höhe im Mittelpunkt der Hypotenuse und die beiden Katheten sind gleich, das Dreieck ist also gleichschenklig. Wenn p größer als q ist, ist Kathete a länger als Kathete b, und wenn q größer ist, ist Kathete b länger. Die längere Projektion gehört immer zur längeren Kathete.",
            },
            {
              "kind": "p",
              "text": "Im 6-8-10-Dreieck ist q 6.4 cm und p 3.6 cm, q ist also größer, und Kathete b mit 8 cm ist tatsächlich länger als Kathete a mit 6 cm.",
            },
          ],
          "h2": "Beziehung zwischen Projektion P und Projektion Q",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das die Projektion p gepaart mit Kathete a der Projektion q gepaart mit Kathete b gegenüberstellt, mit c gleich 10, p gleich 3.6 und q gleich 6.4",
            "caption": "p verwendet a (36 geteilt durch 10 = 3.6) und q verwendet b (64 geteilt durch 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 6]] cm und [[c = 10]] cm. Die vier Schritte unten zeigen die vollständige Rechnung, ohne dass etwas ausgelassen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Schreiben Sie die Formel auf: [[p = \\frac{a^2}{c}]].",
                "Setzen Sie die Werte ein: [[p = \\frac{6^2}{10}]].",
                "Quadrieren Sie die Kathete: [[p = \\frac{36}{10}]].",
                "Teilen Sie: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 3.6 cm ist der Abschnitt der Hypotenuse neben Kathete a, keine senkrechte Seite und keine Fläche. Eine kurze Prüfung schließt den Kreis: [[a^2 = 6^2 = 36]] und [[c \\times p = 10 \\times 3.6 = 36]], beide Seiten des Satzes stimmen also überein.",
            },
            {
              "kind": "p",
              "text": "Zur Referenz: Die andere Projektion ist [[q = 10 - 3.6 = 6.4]] cm, Kathete b ist [[b = \\sqrt{10 \\times 6.4} = 8]] cm und die Höhe ist [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, was das vertraute 6-8-10-rechtwinklige Dreieck bestätigt.",
            },
          ],
          "h2": "Schritt-für-Schritt-Beispiel zur Bestimmung der Projektion P",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit Kathete a 6 cm und Hypotenuse 10 cm, durchgerechnet zu Projektion p gleich 3.6 cm",
            "caption": "Durchgerechnetes Beispiel: a = 6 cm und c = 10 cm ergeben p = 36 geteilt durch 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vier unabhängige Prüfungen fangen fast jeden Fehler ab. Wenden Sie bei jeder Antwort mindestens eine an, alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten verwendet durchgehend [[a = 6]] cm, [[c = 10]] cm und [[p = 3.6]] cm.",
            },
            {
              "kind": "h3",
              "text": "Methode 1: Prüfung mit dem Projektionssatz",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[p = \\frac{a^2}{c}]] direkt. Hier ist [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, was mit der Antwort übereinstimmt. Weicht die Nachrechnung ab, ist entweder das Quadrieren oder die Division schiefgegangen.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Streckenaddition",
            },
            {
              "kind": "p",
              "text": "Finden Sie q durch Subtraktion: [[q = 10 - 3.6 = 6.4]] cm. Prüfen Sie dann [[p + q = 3.6 + 6.4 = 10]] cm, was gleich c ist. Eine Summe, die c verfehlt, deutet auf einen Subtraktionsfehler hin.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Prüfung mit dem Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Berechnen Sie Kathete b aus q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Prüfen Sie dann [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Diese Prüfung testet das ganze Dreieck und fängt so Beschriftungsfehler ab, die die erste Prüfung übersehen kann. Der <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Kathete-b-aus-Projektion-Rechner</a> führt den b-Schritt direkt aus.",
            },
            {
              "kind": "h3",
              "text": "Methode 4: Geometrische Plausibilität",
            },
            {
              "kind": "p",
              "text": "Vergewissern Sie sich, dass p positiv, kleiner als c, in der richtigen Einheit angegeben und ein Hypotenusenabschnitt statt einer senkrechten Seite ist. Hier sind 3.6 cm positiv, kleiner als 10 cm, in Zentimetern und weit kürzer als Kathete a mit 6 cm.",
            },
          ],
          "h2": "So prüfen Sie Ihre Berechnung der Projektion P",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zeichnen Sie die Höhe vom Eckpunkt des rechten Winkels C senkrecht zur Hypotenuse AB. Sie trifft die Hypotenuse in einem Punkt, der Fußpunkt genannt und mit D beschriftet wird, und teilt sie in zwei benachbarte Abschnitte: AD ist die Projektion p und DB ist die Projektion q.",
            },
            {
              "kind": "p",
              "text": "Die Projektion p gehört zu Kathete a, weil sie neben dem Eckpunkt A liegt, demselben Eckpunkt, an dem Kathete a beginnt. Im kleinen Dreieck ACD ist Kathete a die Hypotenuse und p eine ihrer Katheten, das ist die geometrische Verbindung, die den Projektionssatz funktionieren lässt. Die Projektion q gehört nach derselben Überlegung zu Kathete b, die den Eckpunkt B berührt.",
            },
            {
              "kind": "p",
              "text": "Projektionen sind Längen entlang der Hypotenuse, gemessen in derselben Einheit wie die anderen Seiten. Sie stehen zu nichts senkrecht und sind keine Seiten des ursprünglichen Dreiecks. Der <a href=\"/right-triangle-projection-calculator/\">Projektionsrechner für rechtwinklige Dreiecke</a> findet beide Projektionen, wenn die Katheten und die Hypotenuse bekannt sind.",
            },
            {
              "kind": "p",
              "text": "Da p und q die beiden Teile einer geraden Seite sind, ergeben sie zusammen die ganze Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Mit [[c = 10]] cm und [[p = 3.6]] cm ist die andere Projektion [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Die Projektion p ist nicht dasselbe wie Kathete a. Kathete a ist die Seite AC, eine der Seiten, die den rechten Winkel bilden, während p der Abschnitt AD entlang der Hypotenuse ist. Im 6-8-10-Dreieck ist Kathete a 6 cm und die Projektion p nur 3.6 cm.",
            },
          ],
          "h2": "Was ist die Projektion P in einem rechtwinkligen Dreieck?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Quadrat ist da, weil der Projektionssatz eine Aussage über eine quadrierte Kathete ist: Er besagt, dass das Quadrat der Kathete a gleich dem Produkt aus c und p ist, [[a^2 = c \\times p]], und die Formel für p ergibt sich, wenn man beide Seiten durch c teilt.",
            },
            {
              "kind": "p",
              "text": "Der Grund geht auf ähnliche Dreiecke zurück. Im Dreieck ACD spielt Kathete a die Rolle der Hypotenuse, während p eine ihrer Katheten ist. Der Vergleich des kleinen Dreiecks mit dem ganzen Dreieck ergibt die Proportion [[\\frac{p}{a} = \\frac{a}{c}]] und Kathete a taucht zweimal auf, einmal in jedem Verhältnis. Die Überkreuzmultiplikation setzt a auf beide Seiten, genau deshalb erscheint das Quadrat.",
            },
            {
              "kind": "p",
              "text": "Die geometrische Mittelbeziehung sagt dasselbe mit anderen Worten: Kathete a ist das geometrische Mittel der Hypotenuse c und ihrer Projektion p, also [[a = \\sqrt{c \\times p}]]. Das Quadrieren beider Seiten ergibt [[a^2 = c \\times p]] und die Division durch c isoliert p.",
            },
            {
              "kind": "p",
              "text": "Die Division ist der Schritt, der p isoliert. Die Multiplikation im Satz bindet p an c, und die Division durch c löst diese Bindung wieder. Ohne das Quadrat würde die Formel eine Länge mit einer Fläche vermischen und die Einheiten würden nicht aufgehen.",
            },
          ],
          "h2": "Warum wird Kathete A in der Projektionsformel quadriert?",
        },
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-applications": "Praktische Anwendungen von Projektionsberechnungen bei rechtwinkligen Dreiecken",
        "sec-calculate": "Projektion P eines rechtwinkligen Dreiecks berechnen",
        "sec-diagram": "Diagramm zur Projektion P im rechtwinkligen Dreieck erklärt",
        "sec-examples": "Durchgerechnete Beispiele zur Berechnung der Projektion P",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-formula": "Formel für die Projektion P im rechtwinkligen Dreieck",
        "sec-how-to-use": "So verwenden Sie den Projektion-P-Rechner für rechtwinklige Dreiecke",
        "sec-intro": "Projektion-P-Rechner für rechtwinklige Dreiecke",
        "sec-leg-a-hypotenuse": "Kathete A und die Hypotenuse verstehen",
        "sec-mistakes": "Häufige Fehler bei der Berechnung der Projektion P",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-projection-q": "So berechnen Sie die Projektion Q aus der anderen Kathete",
        "sec-proof": "Warum funktioniert die Formel für die Projektion P?",
        "sec-properties": "Wichtige Eigenschaften der Projektion P",
        "sec-pythagoras": "Beziehung zwischen Projektion P und dem Satz des Pythagoras",
        "sec-related": "Entdecken Sie weitere Rechner für rechtwinklige Dreiecke",
        "sec-relationship-altitude": "Beziehung zwischen Projektion P und Höhe",
        "sec-relationship-leg-a": "Beziehung zwischen Projektion P und Kathete A",
        "sec-relationship-pq": "Beziehung zwischen Projektion P und Projektion Q",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Bestimmung der Projektion P",
        "sec-verify": "So prüfen Sie Ihre Berechnung der Projektion P",
        "sec-what-projection-p": "Was ist die Projektion P in einem rechtwinkligen Dreieck?",
        "sec-why-squared": "Warum wird Kathete A in der Projektionsformel quadriert?",
      },
    },
};
