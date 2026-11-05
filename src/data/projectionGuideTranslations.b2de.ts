// projectionGuideTranslations.bde.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B2_DE = {
  "de": {
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist eine Projektion in einem rechtwinkligen Dreieck?",
          "answer": "Eine Projektion ist ein Abschnitt der Hypotenuse, der entsteht, wenn die Höhe vom rechten Winkel auf die Hypotenuse trifft. Die Höhe teilt die Hypotenuse in zwei Teile, p und q. Jeder Teil ist die Projektion einer Kathete auf die Hypotenuse.",
        },
        {
          "question": "Was ist der Unterschied zwischen der Projektion p und der Projektion q?",
          "answer": "Die Projektion p liegt neben dem Eckpunkt A und gehört zur Kathete a, während die Projektion q neben dem Eckpunkt B liegt und zur Kathete b gehört. Sie sind die beiden Teile derselben Hypotenuse, und [[p + q = c]]. Vertauscht man sie, vertauschen sich auch die Katheten, die sie beschreiben.",
        },
        {
          "question": "Wie lautet die Formel für die Projektion p?",
          "answer": "Die Formel lautet [[p = a^2 / c]], wobei a die Kathete a und c die gesamte Hypotenuse ist. Quadrieren Sie zuerst die Kathete a und teilen Sie dann durch c. Mit [[a = 9]] cm und [[c = 15]] cm ergibt sich [[p = 81 / 15 = 5.4]] cm.",
        },
        {
          "question": "Wie lautet die Formel für die Projektion q?",
          "answer": "Die Formel lautet [[q = b^2 / c]], wobei b die Kathete b und c die gesamte Hypotenuse ist. Quadrieren Sie zuerst die Kathete b und teilen Sie dann durch c. Mit [[b = 12]] cm und [[c = 15]] cm ergibt sich [[q = 144 / 15 = 9.6]] cm.",
        },
        {
          "question": "Wie berechne ich die Kathete a aus der Projektion p?",
          "answer": "Verwenden Sie [[a = \\sqrt{c \\times p}]]. Multiplizieren Sie die Hypotenuse c mit der Projektion p und ziehen Sie dann die Quadratwurzel. Mit [[c = 25]] cm und [[p = 9]] cm ergibt sich [[a = \\sqrt{225} = 15]] cm. Die Quadratwurzel ist nötig, weil cp gleich a zum Quadrat ist, nicht a.",
        },
        {
          "question": "Wie berechne ich die Kathete b aus der Projektion q?",
          "answer": "Verwenden Sie [[b = \\sqrt{c \\times q}]]. Multiplizieren Sie die Hypotenuse c mit der Projektion q und ziehen Sie dann die Quadratwurzel. Mit [[c = 25]] cm und [[q = 16]] cm ergibt sich [[b = \\sqrt{400} = 20]] cm. Die Quadratwurzel verwandelt die quadrierte Länge wieder in eine Seitenlänge.",
        },
        {
          "question": "Wie finde ich die Hypotenuse aus zwei Projektionen?",
          "answer": "Addieren Sie die beiden Projektionen: [[c = p + q]]. Die Höhe teilt die Hypotenuse in genau diese beiden Abschnitte, sodass ihre Summe wieder die ganze Seite ergibt. Mit [[p = 9]] cm und [[q = 16]] cm ergibt sich [[c = 25]] cm.",
        },
        {
          "question": "Warum verwenden wir im Projektionssatz eine Quadratwurzel?",
          "answer": "Weil der Satz das Quadrat einer Kathete angibt, nicht die Kathete selbst. Die Aussage [[a^2 = c \\times p]] beschreibt eine quadrierte Länge. Die Quadratwurzel macht das Quadrieren rückgängig und liefert wieder eine gewöhnliche Länge. Lässt man sie weg, gibt man einen quadrierten Wert als Seite an.",
        },
        {
          "question": "Können Projektionen die Höhe bestimmen?",
          "answer": "Ja. Die Höhe ist das geometrische Mittel der beiden Projektionen: [[h = \\sqrt{p \\times q}]]. Mit [[p = 9]] cm und [[q = 16]] cm ergibt sich [[h = \\sqrt{144} = 12]] cm. Diese Seite hat keinen Höhenmodus, verwenden Sie also den eigenen Rechner für die Höhe aus Projektionen für diesen Schritt.",
        },
        {
          "question": "Wie hängen Projektionen mit dem Satz des Pythagoras zusammen?",
          "answer": "Addiert man die beiden Projektionsformeln, erhält man [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Da [[p + q = c]] gilt, wird daraus [[a^2 + b^2 = c^2]]. Der Projektionssatz zerlegt die pythagoreische Beziehung in einen Teil pro Kathete.",
        },
        {
          "question": "Welchen Rechnermodus soll ich wählen?",
          "answer": "Wählen Sie den Modus passend zu den Werten, die Sie kennen. Verwenden Sie den Abschnitt p, wenn Sie a und c kennen, den Abschnitt q, wenn Sie b und c kennen, die Kathete a, wenn Sie c und p kennen, die Kathete b, wenn Sie c und q kennen, und die Summe der Projektionen zu c, wenn Sie p und q kennen.",
        },
        {
          "question": "Sind Projektionen dasselbe wie die Katheten eines rechtwinkligen Dreiecks?",
          "answer": "Nein. Die Katheten sind die beiden Seiten, die den rechten Winkel bilden, während Projektionen Abschnitte entlang der Hypotenuse sind. Eine Projektion ist in den meisten Fällen kürzer als ihre Kathete und liegt flach auf der Hypotenuse, nicht entlang der Dreiecksseite.",
        },
      ],
      "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Wählen Sie das nächste Werkzeug nach der Messung, die Sie benötigen, denn jeder Rechner unten bearbeitet eine bestimmte Projektionsaufgabe.",
      "relatedItems": [
        "Rechner für die Projektion P im rechtwinkligen Dreieck",
        "Rechner für die Projektion Q im rechtwinkligen Dreieck",
        "Rechner für die Kathete A aus der Projektion im rechtwinkligen Dreieck",
        "Rechner für die Kathete B aus der Projektion im rechtwinkligen Dreieck",
        "Rechner für die Hypotenuse aus Projektionen im rechtwinkligen Dreieck",
        "Rechner für die Höhe aus Projektionen im rechtwinkligen Dreieck",
        "Rechner für die Höhe im rechtwinkligen Dreieck",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Projektion in einem rechtwinkligen Dreieck ist der Schatten, den eine Kathete auf die Hypotenuse wirft. Fällt man die Höhe vom Eckpunkt des rechten Winkels auf die Hypotenuse, teilt sie diese Seite in zwei Abschnitte, die p und q genannt werden. Der Abschnitt p gehört zur Kathete a, und der Abschnitt q gehört zur Kathete b.",
            },
            {
              "kind": "p",
              "text": "Dieser Rechner für Projektionen im rechtwinkligen Dreieck arbeitet mit allen fünf Projektionsbeziehungen. Er findet die Projektion p aus der Kathete a, die Projektion q aus der Kathete b, die Kathete a aus der Projektion p, die Kathete b aus der Projektion q und die gesamte Hypotenuse aus p und q. Jede Aufgabe ist ein eigener Modus, sodass Sie den Modus wählen, der zu den Messungen passt, die Sie bereits kennen.",
            },
            {
              "kind": "p",
              "text": "Dieselben zwei Projektionen können auch das ganze Dreieck wieder aufbauen. Wenn zum Beispiel [[p = 9]] cm und [[q = 16]] cm gilt, dann ist [[c = 9 + 16 = 25]] cm, und die Höhe ist [[h = \\sqrt{9 \\times 16} = 12]] cm. Dieser Leitfaden erklärt jeden Modus, zeigt die Formeln, rechnet Beispiele durch und lehrt Sie, jede Antwort zu prüfen.",
            },
          ],
          "h2": "Rechner für Projektionen im rechtwinkligen Dreieck",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite bietet fünf Modi, einen für jede Projektionsbeziehung. Jeder Modus fragt nach zwei bekannten Messungen und liefert einen fehlenden Wert. Sie müssen nie zuerst das ganze Dreieck lösen: Wählen Sie den Modus, der zu Ihren Zahlen passt, geben Sie sie ein und lesen Sie das Ergebnis ab.",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten ist der schnellste Weg zur Auswahl. Suchen Sie die Zeile, deren bekannte Messungen zu Ihren passen, und diese Zeile nennt den zu verwendenden Modus. Die folgenden Abschnitte erklären jeden Modus im Detail, mit einem durchgerechneten Beispiel für jeden.",
            },
          ],
          "h2": "Projektionen und Hypotenusenabschnitte im rechtwinkligen Dreieck berechnen",
          "table": {
            "headers": [
              "Rechnermodus",
              "Bekannte Messungen",
              "Ergebnis",
            ],
            "rows": [
              [
                "Hypotenusenabschnitt p",
                "Kathete a und Hypotenuse c",
                "Projektion p",
              ],
              [
                "Hypotenusenabschnitt q",
                "Kathete b und Hypotenuse c",
                "Projektion q",
              ],
              [
                "Kathete a aus quadrierter Projektion",
                "Hypotenuse c und Projektion p",
                "Kathete a",
              ],
              [
                "Kathete b aus quadrierter Projektion",
                "Hypotenuse c und Projektion q",
                "Kathete b",
              ],
              [
                "Summe der Projektionen zu c",
                "Projektion p und Projektion q",
                "Hypotenuse c",
              ],
            ],
          },
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nehmen Sie das rechtwinklige Dreieck ABC mit dem rechten Winkel bei C. Die beiden Seiten, die den rechten Winkel bilden, sind die Katheten AC und BC. Die Seite gegenüber dem rechten Winkel ist die Hypotenuse AB. Zeichnen Sie nun die Höhe von C gerade zur Hypotenuse, wo sie sie in einem Punkt namens D trifft. Diese Höhe steht senkrecht auf der Hypotenuse, sodass sie AB in einem rechten Winkel trifft.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in zwei aneinanderliegende Abschnitte. Der Abschnitt neben dem Eckpunkt A, genannt AD, ist die Projektion p. Der Abschnitt neben dem Eckpunkt B, genannt DB, ist die Projektion q. Zusammen bilden sie die gesamte Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Jede Projektion gehört zu der Kathete, die ihren Eckpunkt berührt. Die Kathete a berührt den Eckpunkt A, also ist ihre Projektion p. Die Kathete b berührt den Eckpunkt B, also ist ihre Projektion q. Diese Zuordnung ändert sich nie: a gehört zu p, und b gehört zu q.",
            },
            {
              "kind": "p",
              "text": "Projektionen liegen flach entlang der Hypotenuse. Sie sind keine Seiten des Dreiecks, und sie stehen auf nichts senkrecht. Stellen Sie sich jede als den Schatten vor, den ihre Kathete auf die Hypotenuse wirft, wenn die Höhe gerade nach unten auf sie fällt.",
            },
          ],
          "h2": "Was sind Projektionen in einem rechtwinkligen Dreieck?",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Dreieck trägt sechs benannte Teile, und jeder hat eine feste Position. Die Tabelle unten listet jeden Teil mit seinem Symbol, seiner Bedeutung und seiner Lage auf. Lernen Sie diese Tabelle einmal, und jede Formel in diesem Leitfaden liest sich klar.",
            },
            {
              "kind": "p",
              "text": "Die richtige Bestimmung des Abschnitts ist wichtig, weil jeder Rechnermodus bestimmte Eingaben erwartet. Gibt man eine Projektion ein, wo eine Kathete hingehört, oder p, wo q hingehört, erhält man trotzdem eine Zahl, aber sie beantwortet eine andere Frage als die gestellte. Beschriften Sie zuerst das Diagramm und ordnen Sie dann die Beschriftungen dem Modus zu.",
            },
          ],
          "h2": "Die Seiten und Abschnitte eines rechtwinkligen Dreiecks verstehen",
          "table": {
            "headers": [
              "Symbol",
              "Name",
              "Position",
            ],
            "rows": [
              [
                "a",
                "Kathete a (Seite AC)",
                "Senkrechte Seite, die den Eckpunkt A berührt",
              ],
              [
                "b",
                "Kathete b (Seite BC)",
                "Senkrechte Seite, die den Eckpunkt B berührt",
              ],
              [
                "c",
                "Hypotenuse (Seite AB)",
                "Längste Seite, gegenüber dem rechten Winkel",
              ],
              [
                "p",
                "Projektion p (Abschnitt AD)",
                "Teil der Hypotenuse neben dem Eckpunkt A",
              ],
              [
                "q",
                "Projektion q (Abschnitt DB)",
                "Teil der Hypotenuse neben dem Eckpunkt B",
              ],
              [
                "h",
                "Höhe (Abschnitt CD)",
                "Senkrechte von C zur Hypotenuse",
              ],
            ],
          },
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Fünf Formeln decken jeden Modus auf dieser Seite ab. Die ersten beiden finden Projektionen aus Katheten. Die nächsten beiden gewinnen Katheten aus Projektionen zurück. Die letzte baut die Hypotenuse aus ihren beiden Teilen wieder auf.",
            },
            {
              "kind": "p",
              "text": "Projektion p, aus der Kathete a und der Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Projektion q, aus der Kathete b und der Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kathete a, aus der Hypotenuse und der Projektion p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Kathete b, aus der Hypotenuse und der Projektion q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Hypotenuse, aus beiden Projektionen:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Eine Projektion zu finden bedeutet, eine Kathete zu quadrieren und durch die Hypotenuse zu teilen. Eine Kathete zu finden bedeutet, die Hypotenuse mit einer Projektion zu multiplizieren und die Quadratwurzel zu ziehen. Die Hypotenuse zu finden bedeutet, zwei Abschnitte zu addieren. Die Quadratwurzel erscheint nur, wenn man eine Kathete zurückgewinnt, weil nur die Kathetenformeln von einer quadrierten Länge ausgehen. Alle Messungen müssen dieselbe Einheit verwenden, rechnen Sie also vorher um.",
            },
          ],
          "h2": "Formeln für Projektionen im rechtwinkligen Dreieck erklärt",
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Wahl des Modus ist eine Zuordnungsaufgabe: Finden Sie den Modus, der nach den beiden Messungen fragt, die Sie kennen, und der Rechner liefert den fehlenden Wert.",
            },
            {
              "kind": "h3",
              "text": "Modus 1: Hypotenusenabschnitt p",
            },
            {
              "kind": "p",
              "text": "Wählen Sie diesen Modus, wenn Sie die Kathete a und die Hypotenuse c kennen. Die Formel lautet [[p = a^2 / c]]. Quadrieren Sie die Kathete a und teilen Sie dann durch c. Verwenden Sie ihn, wenn eine Aufgabe Ihnen eine Kathete und die ganze Hypotenuse gibt und fragt, wie viel von der Hypotenuse zu dieser Kathete gehört.",
            },
            {
              "kind": "h3",
              "text": "Modus 2: Hypotenusenabschnitt q",
            },
            {
              "kind": "p",
              "text": "Wählen Sie diesen Modus, wenn Sie die Kathete b und die Hypotenuse c kennen. Die Formel lautet [[q = b^2 / c]]. Er ist das Spiegelbild von Modus 1, mit der Kathete b anstelle der Kathete a. Verwenden Sie ihn, wenn die bekannte Kathete diejenige ist, die den Eckpunkt B berührt.",
            },
            {
              "kind": "h3",
              "text": "Modus 3: Kathete a aus quadrierter Projektion",
            },
            {
              "kind": "p",
              "text": "Wählen Sie diesen Modus, wenn Sie die Hypotenuse c und die Projektion p kennen. Die Formel lautet [[a = \\sqrt{c \\times p}]]. Multiplizieren Sie zuerst und ziehen Sie dann die Quadratwurzel. Verwenden Sie ihn, wenn eine Aufgabe die Hypotenuse und den Abschnitt neben A gibt und nach der Kathete fragt.",
            },
            {
              "kind": "h3",
              "text": "Modus 4: Kathete b aus quadrierter Projektion",
            },
            {
              "kind": "p",
              "text": "Wählen Sie diesen Modus, wenn Sie die Hypotenuse c und die Projektion q kennen. Die Formel lautet [[b = \\sqrt{c \\times q}]]. Er ist das Spiegelbild von Modus 3, mit q anstelle von p. Verwenden Sie ihn, wenn der bekannte Abschnitt derjenige neben B ist.",
            },
            {
              "kind": "h3",
              "text": "Modus 5: Summe der Projektionen zu c",
            },
            {
              "kind": "p",
              "text": "Wählen Sie diesen Modus, wenn Sie beide Projektionen, p und q, kennen. Die Formel lautet [[c = p + q]], eine einfache Addition ohne Quadrieren und ohne Quadratwurzel.",
            },
            {
              "kind": "p",
              "text": "Kurze Entscheidungshilfe: Eine Kathete mit c ergibt eine Projektion, c mit einer Projektion ergibt eine Kathete, und beide Projektionen zusammen ergeben c. Wenn Ihre bekannten Werte zu keinem dieser Paare passen, brauchen Sie zuerst eine weitere Messung.",
            },
          ],
          "h2": "Den richtigen Rechnermodus wählen",
          "image": {
            "alt": "Fünf Rechnermodi mit ihren bekannten Werten und Ergebnissen: Abschnitt p aus a und c, Abschnitt q aus b und c, Kathete a aus c und p, Kathete b aus c und q und Hypotenuse c aus p und q",
            "caption": "Fünf Modi, einer pro bekanntem Paar: Eine Kathete mit c ergibt eine Projektion, c mit einer Projektion ergibt eine Kathete, und p mit q ergibt c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektion p ist der Teil der Hypotenuse, der zur Kathete a gehört. Die Formel teilt das Quadrat der Kathete a durch die gesamte Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 9]] cm und [[c = 15]] cm. Schritt 1 schreibt die Formel hin, [[p = a^2 / c]]. Schritt 2 setzt die Werte ein, [[p = 9^2 / 15 = 81 / 15]]. Schritt 3 dividiert und ergibt [[p = 5.4]] cm. Die Antwort ist eine Länge entlang der Hypotenuse, gemessen in derselben Einheit wie a und c.",
            },
            {
              "kind": "p",
              "text": "Eine kurze Prüfung bestätigt das Ergebnis. Die andere Kathete in diesem Dreieck ist 12 cm, also ist ihre Projektion [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Addiert man die beiden Projektionen, erhält man [[5.4 + 9.6 = 15]] cm, was genau c ist. Wenn sich Ihre beiden Projektionen nicht zu c addieren, war eine der Eingaben falsch. Der <a href=\"/right-triangle-projection-p-calculator/\">Rechner für die Projektion p</a> übernimmt diese Berechnung für sich allein, wenn Sie sie oft brauchen.",
            },
          ],
          "h2": "Projektion P aus Kathete A und Hypotenuse berechnen",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das zeigt, dass die Kathete a zum Quadrat geteilt durch die Hypotenuse c die Projektion p ergibt, mit a gleich 9 cm und c gleich 15 cm, was p gleich 5.4 cm ergibt",
            "caption": "Projektion p aus der Kathete a: p ist gleich a zum Quadrat durch c, also ergibt 81 durch 15 gleich 5.4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektion q ist der Teil der Hypotenuse, der zur Kathete b gehört. Die Formel teilt das Quadrat der Kathete b durch die gesamte Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[b = 12]] cm und [[c = 15]] cm. Schritt 1 schreibt die Formel hin, [[q = b^2 / c]]. Schritt 2 setzt die Werte ein, [[q = 12^2 / 15 = 144 / 15]]. Schritt 3 dividiert und ergibt [[q = 9.6]] cm. Die Antwort ist der Abschnitt neben dem Eckpunkt B, auf der gegenüberliegenden Seite des Höhenfußpunkts von p.",
            },
            {
              "kind": "p",
              "text": "Vergleichen Sie die beiden Projektionen, bevor Sie weitermachen. Hier ist p gleich 5.4 cm und q gleich 9.6 cm, also ist q größer, was dazu passt, dass die Kathete b länger ist als die Kathete a. Die längere Kathete wirft immer die längere Projektion. Wenn Ihre längere Kathete die kürzere Projektion ergab, haben Sie p und q vertauscht. Der <a href=\"/right-triangle-projection-q-calculator/\">Rechner für die Projektion q</a> übernimmt diese Berechnung für sich allein, wenn Sie sie oft brauchen.",
            },
          ],
          "h2": "Projektion Q aus Kathete B und Hypotenuse berechnen",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das zeigt, dass die Kathete b zum Quadrat geteilt durch die Hypotenuse c die Projektion q ergibt, mit b gleich 12 cm und c gleich 15 cm, was q gleich 9.6 cm ergibt",
            "caption": "Projektion q aus der Kathete b: q ist gleich b zum Quadrat durch c, also ergibt 144 durch 15 gleich 9.6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um die Kathete a zurückzugewinnen, multiplizieren Sie die Hypotenuse mit der Projektion p und ziehen Sie die Quadratwurzel:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[c = 25]] cm und [[p = 9]] cm. Das Produkt ist [[25 \\times 9 = 225]], und die Quadratwurzel aus 225 ist 15, also [[a = 15]] cm. Das Produkt 225 ist eine quadrierte Länge, keine Seite, weshalb die Quadratwurzel nicht übersprungen werden darf. Würde man 225 als Kathete angeben, würde man eine Seite behaupten, die neunmal länger ist als die Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Quadratwurzelschritt ist der ganze Sinn dieses Modus. Der Projektionssatz besagt [[a^2 = c \\times p]], also ergibt das Produkt das Quadrat der Kathete. Ein Quadrat rückgängig zu machen, braucht eine Quadratwurzel, genauso wie das Rückgängigmachen einer Verdopplung eine Halbierung braucht. Der <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Rechner für die Kathete a aus der Projektion</a> deckt diese Berechnung vollständig ab, wenn Sie sie für sich allein brauchen.",
            },
          ],
          "h2": "Kathete A aus der Projektion P finden",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um die Kathete b zurückzugewinnen, multiplizieren Sie die Hypotenuse mit der Projektion q und ziehen Sie die Quadratwurzel:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[c = 25]] cm und [[q = 16]] cm. Das Produkt ist [[25 \\times 16 = 400]], und die Quadratwurzel aus 400 ist 20, also [[b = 20]] cm. Das Verfahren ist das Spiegelbild der Berechnung für die Kathete a, mit q anstelle von p. Die Zuordnung ist durch die Beschriftung des Dreiecks festgelegt, sodass die Eingabe von p hier stattdessen die Kathete a liefern würde.",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie die Antwort an der Größe des Dreiecks. Die Kathete b muss kürzer sein als die Hypotenuse, und 20 cm ist kürzer als 25 cm, also besteht das Ergebnis die erste Plausibilitätsprüfung. Quadriert man sie, erhält man [[20^2 = 400]], was mit [[c \\times q = 25 \\times 16 = 400]] übereinstimmt, sodass der Satz genau gilt. Der <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Rechner für die Kathete b aus der Projektion</a> deckt diese Berechnung vollständig ab, wenn Sie sie für sich allein brauchen.",
            },
          ],
          "h2": "Kathete B aus der Projektion Q finden",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die beiden Projektionen sind die beiden Teile einer geraden Seite, also ist die Hypotenuse ihre Summe:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[p = 9]] cm und [[q = 16]] cm. Addiert man, erhält man [[c = 9 + 16 = 25]] cm. Dies ist das Prinzip der Streckenaddition: Wenn ein Punkt eine Strecke in zwei Teile teilt, ist die ganze Strecke gleich der Summe ihrer Teile. Der Höhenfußpunkt D teilt die Hypotenuse AB in AD und DB, also ist AB gleich AD plus DB.",
            },
            {
              "kind": "p",
              "text": "Dieser Modus ist auch die schnellste Prüfung der anderen vier Modi. Wann immer Sie p und q getrennt berechnen, addieren Sie sie und vergleichen Sie mit c. Im 9-12-15-Dreieck ergeben [[p = 5.4]] cm und [[q = 9.6]] cm zusammen 15 cm und bestätigen so beide Projektionen auf einmal. Der <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">Rechner für die Hypotenuse aus Projektionen</a> deckt diese Berechnung vollständig ab, wenn Sie sie für sich allein brauchen.",
            },
          ],
          "h2": "Die vollständige Hypotenuse aus Projektionen berechnen",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn kurze Schritte führen Sie von einem beschrifteten Diagramm zu einer geprüften Antwort. Die Schritte sind für jeden Modus dieselben; nur der Modus, den Sie wählen, und die Zahlen, die Sie eingeben, ändern sich.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie, welche Messungen bekannt sind.",
                "Öffnen Sie die Modusauswahl des Rechners.",
                "Wählen Sie den passenden Berechnungsmodus.",
                "Geben Sie die erste erforderliche Messung ein.",
                "Geben Sie die zweite erforderliche Messung ein.",
                "Wählen Sie passende Maßeinheiten.",
                "Klicken Sie auf die entsprechende Schaltfläche Berechnen.",
                "Lesen Sie das angezeigte Ergebnis ab.",
                "Prüfen Sie die Antwort gegebenenfalls mit einer anderen geometrischen Beziehung.",
                "Verwenden Sie Zurücksetzen, bevor Sie eine weitere Berechnung starten.",
              ],
            },
            {
              "kind": "p",
              "text": "Schritt 1 leistet den größten Teil der Arbeit. Beschriften Sie das Dreieck, markieren Sie p und q auf der Hypotenuse und notieren Sie, zu welcher Kathete jede Projektion gehört. Wenn die Beschriftungen feststehen, folgt die Moduswahl aus der Tabelle oben in diesem Leitfaden, und der Rechner übernimmt die Rechnung. Beschreiben oder erwarten Sie keine Funktionen, die die Seite nicht hat: Sie berechnet weder die Höhe noch die Winkel oder die Fläche automatisch.",
            },
          ],
          "h2": "Den Rechner für Projektionen im rechtwinkligen Dreieck verwenden",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist die Kathete a, die Seite BC ist die Kathete b, und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und berührt sie bei D. Zwei kleine Quadrate markieren die rechten Winkel: eines bei C, zwischen den Katheten, und eines bei D, zwischen der Höhe und der Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in den Abschnitt AD, der die Projektion p ist, und den Abschnitt DB, der die Projektion q ist. Die Höhe CD ist mit h beschriftet. Verfolgen Sie das Diagramm in dieser Reihenfolge, um die Beschriftungen zu festigen: Beginnen Sie bei A, gehen Sie entlang der Kathete a nach C, dann entlang der Kathete b nach B, dann zurück entlang der Hypotenuse von B nach A und halten Sie bei D inne, um die Teilung in q und p zu sehen.",
            },
            {
              "kind": "p",
              "text": "Die Höhe erzeugt zwei kleinere rechtwinklige Dreiecke, ACD und CBD, innerhalb des ursprünglichen Dreiecks. Im Dreieck ACD ist die Hypotenuse die Kathete a, und eine Kathete ist die Projektion p. Im Dreieck CBD ist die Hypotenuse die Kathete b, und eine Kathete ist die Projektion q.",
            },
          ],
          "h2": "Das Diagramm zur Projektion im rechtwinkligen Dreieck verstehen",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB, Katheten a und b, Hypotenuse c, Projektionen p und q und beschrifteter Höhe h",
            "caption": "Hauptdreieck ABC: Die Höhe CD teilt die Hypotenuse AB in die Projektion p (AD) und die Projektion q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis beruht auf ähnlichen Dreiecken. Das Zeichnen der Höhe CD teilt das Dreieck ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, und beide sind dem ursprünglichen Dreieck ähnlich. Ähnlichkeit bedeutet, dass ihre entsprechenden Seiten im selben Verhältnis bleiben, und eines dieser Verhältnisse ergibt den Projektionssatz direkt.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit der Kathete a. Das Dreieck ACD teilt den Winkel bei A mit dem Dreieck ABC, und beide enthalten einen rechten Winkel, also müssen auch ihre dritten Winkel übereinstimmen. Ordnet man die Seiten zu, die an denselben Stellen sitzen, erhält man die Proportion:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Setzt man nun die Standardsymbole ein: [[AD = p]], [[AC = a]] und [[AB = c]]. Die Proportion wird zu:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kreuzmultiplikation beseitigt die Brüche: [[p \\times c = a \\times a]], was [[a^2 = c \\times p]] ist. Dieselbe Argumentation, angewandt auf das andere kleine Dreieck CBD, ergibt [[b^2 = c \\times q]], da das Dreieck CBD den Winkel bei B mit dem ganzen Dreieck teilt. Die Ähnlichkeit leistet die ganze Arbeit: Entsprechende Seiten ähnlicher Dreiecke bleiben proportional, und der Projektionssatz ist das, was diese Proportion nach der Kreuzmultiplikation ergibt.",
            },
          ],
          "h2": "Warum funktionieren die Projektionssätze?",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben den kleineren ähnlichen Dreiecken ACD und CBD, das die Proportionen p durch a gleich a durch c und q durch b gleich b durch c zeigt",
            "caption": "Beweis mit ähnlichen Dreiecken: p durch a ist gleich a durch c, und q durch b ist gleich b durch c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, den Modus, das Einsetzen und die endgültige Antwort. Zwei Beispiele decken jeden der fünf Modi ab, sodass Sie jeden Modus zweimal mit unterschiedlichen Zahlen sehen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Projektion P finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 9]] cm und [[c = 15]] cm, verwenden Sie Modus 1, Hypotenusenabschnitt p. Die Formel ergibt [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Projektion P finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 12]] m und [[c = 20]] m, verwenden Sie Modus 1. Die Formel ergibt [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. Die andere Projektion ist 12.8 m, und [[7.2 + 12.8 = 20]] m bestätigt das Ergebnis.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Projektion Q finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 12]] cm und [[c = 15]] cm, verwenden Sie Modus 2, Hypotenusenabschnitt q. Die Formel ergibt [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Dies ist dasselbe Dreieck wie in Beispiel 1, von der anderen Kathete aus betrachtet.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Projektion Q finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[b = 8]] m und [[c = 10]] m, verwenden Sie Modus 2. Die Formel ergibt [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. Die andere Projektion ist 3.6 m, und dies ist das bekannte 6-8-10-Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Kathete A finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] cm und [[p = 9]] cm, verwenden Sie Modus 3, Kathete a aus quadrierter Projektion. Die Formel ergibt [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Das Produkt ist ein perfektes Quadrat, also ist die Antwort exakt, ohne dass gerundet werden muss.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Kathete A finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 10]] cm und [[p = 4]] cm, verwenden Sie Modus 3. Die Formel ergibt [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Das Produkt 40 ist kein perfektes Quadrat, also ist die Antwort eine Näherung, gerundet auf drei Dezimalstellen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Kathete B finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] cm und [[q = 16]] cm, verwenden Sie Modus 4, Kathete b aus quadrierter Projektion. Die Formel ergibt [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Dies ist dasselbe Dreieck wie in Beispiel 5, von der anderen Projektion aus betrachtet, und die beiden Katheten 15 und 20 vervollständigen das 15-20-25-Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Kathete B finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 10]] cm und [[q = 6]] cm, verwenden Sie Modus 4. Die Formel ergibt [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Die passende Kathete a ist etwa 6.325 cm, aus Beispiel 6.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 9: Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[p = 9]] cm und [[q = 16]] cm, verwenden Sie Modus 5, Summe der Projektionen zu c. Die Formel ergibt [[c = 9 + 16 = 25]] cm. Weder Quadrieren noch eine Quadratwurzel sind nötig, da sich die beiden Abschnitte einfach zur ganzen Seite verbinden.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 10: Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[p = 3.5]] m und [[q = 6.5]] m, verwenden Sie Modus 5. Die Formel ergibt [[c = 3.5 + 6.5 = 10]] m. Dezimale Projektionen addieren sich genauso wie ganze Zahlen, richten Sie also die Dezimalpunkte aus und addieren Sie.",
            },
          ],
          "h2": "Durchgerechnete Beispiele für alle fünf Rechnermodi",
        },
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Kenntnis der beiden Projektionen genügt, um das gesamte Dreieck wieder aufzubauen. Verwenden Sie [[p = 9]] cm und [[q = 16]] cm. Zuerst ist die Hypotenuse [[c = 9 + 16 = 25]] cm. Dann ist die Kathete a [[a = \\sqrt{25 \\times 9} = 15]] cm, und die Kathete b ist [[b = \\sqrt{25 \\times 16} = 20]] cm. Die Höhe ist [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Ein Zahlenpaar liefert vier Längen: c, a, b und h. Das ist die Stärke der Projektionsbeziehungen: Zwei Abschnitte auf der Hypotenuse tragen die gesamte Form des Dreiecks. Eine letzte Prüfung schließt den Kreis: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], sodass der Satz des Pythagoras das ganze Dreieck auf einmal bestätigt.",
            },
            {
              "kind": "p",
              "text": "Beachten Sie, dass dies mathematische Beziehungen sind, keine eigenen Rechnermodi. Diese Seite berechnet einen Wert pro Modus. Das ganze Dreieck wieder aufzubauen bedeutet, einen Modus auszuführen und dann sein Ergebnis im nächsten zu verwenden oder die Schritte von Hand zu rechnen, wie oben gezeigt.",
            },
          ],
          "h2": "Alle Hauptmessungen eines rechtwinkligen Dreiecks berechnen",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit den Projektionen p gleich 9 und q gleich 16, Hypotenuse 25, Katheten 15 und 20 und Höhe 12, das alle sechs Messungen in einem Diagramm zeigt",
            "caption": "Ein Projektionspaar baut das Dreieck wieder auf: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz und der Satz des Pythagoras stimmen genau überein, und die Algebra zeigt, warum. Beginnen Sie mit den beiden Projektionsformeln:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Addiert man die passende Formel für die Kathete b, [[b^2 = c \\times q]], erhält man:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Klammert man c auf der rechten Seite aus, erhält man [[a^2 + b^2 = c(p + q)]]. Da [[p + q = c]] gilt, liefert das Einsetzen das bekannte Ergebnis:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine Zahlenprüfung mit dem 9-16-25-Dreieck bestätigt es: [[a^2 + b^2 = 225 + 400 = 625]] und [[c^2 = 25^2 = 625]]. Die beiden Sätze sind keine Rivalen. Der Projektionssatz zerlegt die pythagoreische Beziehung in einen Teil pro Kathete, und das Addieren der Teile baut sie wieder auf. Deshalb lässt sich jedes Ergebnis auf dieser Seite mit dem Satz des Pythagoras prüfen.",
            },
          ],
          "h2": "Beziehung zwischen Projektionen und dem Satz des Pythagoras",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Höhe ist das geometrische Mittel der beiden Projektionen:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[p = 9]] cm und [[q = 16]] cm. Das Produkt ist [[9 \\times 16 = 144]], und die Quadratwurzel aus 144 ist 12, also [[h = 12]] cm. Die Höhe ist der senkrechte Abschnitt vom rechten Winkel zur Hypotenuse, und ihre Länge ist festgelegt, sobald p und q bekannt sind. Dies ist dieselbe Idee des geometrischen Mittels, die Katheten mit Projektionen verbindet, hier angewandt auf die Höhe.",
            },
            {
              "kind": "p",
              "text": "Beachten Sie, dass diese Seite keinen eigenen Höhenmodus hat. Der Rechner liefert Projektionen, Katheten und die Hypotenuse, aber nicht h. Für eine Seite, die die Höhe direkt löst, verwenden Sie den <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus Projektionen</a>, der p und q nimmt und h liefert. Der <a href=\"/right-triangle-altitude-calculator/\">Höhenrechner</a> deckt andere Wege ab, h zu finden, aus den Katheten oder aus der Fläche.",
            },
          ],
          "h2": "Beziehung zwischen Projektionen und Höhe",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Vier unabhängige Prüfungen fangen fast jeden Fehler ab. Führen Sie bei jeder Antwort mindestens eine davon durch und alle vier, wenn die Aufgabe wichtig ist. Jede Prüfung verwendet eine andere Beziehung, sodass ein Fehler, der einer Prüfung entgeht, meist von einer anderen entdeckt wird.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Addition der Projektionen",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie, dass [[p + q = c]] gilt. Mit [[p = 9]] cm, [[q = 16]] cm und [[c = 25]] cm gilt [[9 + 16 = 25]], also passen die Abschnitte. Wenn die Summe von c abweicht, ist eine der Projektionen falsch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Projektionssatz für die Kathete A",
            },
            {
              "kind": "p",
              "text": "Quadrieren Sie die Kathete a und vergleichen Sie sie mit [[c \\times p]]. Mit [[a = 15]] cm, [[c = 25]] cm und [[p = 9]] cm gilt [[a^2 = 225]] und [[c \\times p = 225]], also besteht die Antwort die Prüfung. Wenn die beiden Zahlen abweichen, ist die Kathete oder die Projektion falsch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Projektionssatz für die Kathete B",
            },
            {
              "kind": "p",
              "text": "Quadrieren Sie die Kathete b und vergleichen Sie sie mit [[c \\times q]]. Mit [[b = 20]] cm, [[c = 25]] cm und [[q = 16]] cm gilt [[b^2 = 400]] und [[c \\times q = 400]], also besteht die Antwort die Prüfung. Verwenden Sie diese Prüfung, wann immer Ihre Antwort eine Kathete ist.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie, dass [[a^2 + b^2 = c^2]] gilt. Mit [[a = 15]] cm, [[b = 20]] cm und [[c = 25]] cm gilt [[225 + 400 = 625 = 25^2]]. Diese Prüfung testet das ganze Dreieck auf einmal, nicht nur eine Formel, sodass sie die stärkste der vier ist.",
            },
          ],
          "h2": "Ihre Projektionsberechnungen prüfen",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die meisten Fehler unten gehen auf die Beschriftung zurück, nicht auf die Rechnung, beschriften Sie also das Diagramm neu, bevor Sie neu rechnen, wenn eine Antwort falsch aussieht.",
            },
            {
              "kind": "steps",
              "steps": [
                "Verwechslung der Projektion p mit der Projektion q: p liegt neben A und gehört zur Kathete a, während q neben B liegt und zur Kathete b gehört.",
                "Zuordnung der Kathete a zu q statt zu p: Die Kathete a verwendet p, also [[a = \\sqrt{c \\times p}]]. Die Verwendung von q liefert die Kathete b, nicht die Kathete a.",
                "Zuordnung der Kathete b zu p statt zu q: Die Kathete b verwendet q, also [[b = \\sqrt{c \\times q}]]. Die Verwendung von p liefert die Kathete a, nicht die Kathete b.",
                "Vergessen der Quadratwurzel bei der Berechnung einer Kathete: Das Produkt cp ist a zum Quadrat, nicht a. Mit c = 25 und p = 9 ist die Kathete 15 cm, nicht 225.",
                "Vermischung unterschiedlicher Maßeinheiten: Rechnen Sie zuerst um. Die Multiplikation von Metern mit Zentimetern ergibt ein bedeutungsloses Produkt, bringen Sie also beide Eingaben in eine Einheit.",
                "Verwendung des falschen Rechnermodus: Ordnen Sie den Modus Ihren bekannten Werten mit der Tabelle oben in diesem Leitfaden zu.",
                "Behandlung von p oder q als senkrechte Kathete: Projektionen liegen flach entlang der Hypotenuse. Sie sind Abschnitte der Hypotenuse, keine Seiten des Dreiecks.",
                "Vergessen, dass c = p + q gilt: Die beiden Projektionen müssen sich zur Hypotenuse addieren.",
                "Verwendung ungültiger oder negativer Längen: Längen sind positiv, also deutet ein negativer Eintrag auf einen Datenfehler hin, und null Projektionen beschreiben kein echtes Dreieck.",
                "Zu frühes Runden: Behalten Sie die volle Genauigkeit bis zum letzten Schritt bei und runden Sie dann einmal.",
                "Anwendung der Formeln auf ein beliebiges Dreieck: Der Satz braucht einen rechten Winkel und seine Höhe, ohne diese gibt es keine Projektionen p und q in diesem Sinne.",
                "Verwechslung quadrierter Seitenlängen mit tatsächlichen Seitenlängen: 225 ist a zum Quadrat, während 15 a ist. Sagen Sie, welche Sie meinen, bevor Sie eine Zahl aufschreiben.",
              ],
            },
          ],
          "h2": "Häufige Fehler bei der Verwendung eines Rechners für Projektionen im rechtwinkligen Dreieck",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sechs Eigenschaften folgen direkt aus den Projektionsformeln. Jede dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "kind": "list",
              "items": [
                "Gleiche Projektionen ergeben gleiche Katheten. Mit [[p = q = 5]] und [[c = 10]] sind beide Katheten gleich [[\\sqrt{50} \\approx 7.071]], und das Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck.",
                "Ungleiche Projektionen ergeben ungleiche Katheten: Die längere Projektion gehört zur längeren Kathete.",
                "Das Vertauschen von p und q vertauscht die entsprechenden Kathetenlängen, ändert aber nicht die gesamte Hypotenuse, da [[p + q = c]] in beiden Fällen gilt.",
                "Die Skalierung aller Messungen mit demselben positiven Faktor skaliert jedes Ergebnis mit diesem Faktor. Die Verdopplung von p und q verdoppelt c, a, b und h.",
                "Projektionen sind in einem gültigen, nicht entarteten rechtwinkligen Dreieck immer positiv und immer kleiner als c. Eine Projektion gleich c würde die andere Projektion bei null lassen.",
                "Die längere Kathete wirft immer die längere Projektion. Der Vergleich von Kathetenlängen mit Projektionslängen ist ein schneller Weg, eine vertauschte Beschriftung zu entdecken.",
              ],
            },
            {
              "kind": "p",
              "text": "Das Diagramm unten zeigt beide Fälle, wobei die Hypotenuse bei 10 gehalten wird. Gleiche Projektionen teilen sie gleichmäßig und ergeben gleiche Katheten, während ungleiche Projektionen Katheten unterschiedlicher Länge ergeben.",
            },
          ],
          "h2": "Sonderfälle und wichtige Eigenschaften von Projektionen",
          "image": {
            "alt": "Zwei rechtwinklige Dreiecke mit der Hypotenuse 10: eines mit gleichen Projektionen p und q von 5, die gleiche Katheten ergeben, und eines mit p gleich 2 und q gleich 8, die ungleiche Katheten ergeben",
            "caption": "Gleiche Projektionen ergeben gleiche Katheten; ungleiche Projektionen ergeben ungleiche Katheten, bei derselben Hypotenuse von 10.",
            "src": "projection-equal-vs-unequal.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Anwendung sind Geometrie-Hausaufgaben und Unterricht, wo Projektionsaufgaben prüfen, ob Schülerinnen und Schüler ein Diagramm beschriften und [[a^2 = c \\times p]] anwenden können, statt aus Gewohnheit zum Satz des Pythagoras zu greifen. Übungen zu ähnlichen Dreiecken verwenden denselben Aufbau, da der Beweis selbst eine Übung im Zuordnen entsprechender Seiten ist.",
            },
            {
              "kind": "p",
              "text": "Technisches Zeichnen verwendet den Satz, wenn ein rechtwinkliges Dreieck aus Teilmessungen wieder aufgebaut werden muss: Wenn eine Zeichnung die Hypotenuse und den Fußpunkt der Höhe angibt, folgt die fehlende Kathete, ohne die Form neu zu messen.",
            },
            {
              "kind": "p",
              "text": "Eine Bedingung begrenzt jede Anwendung: Die erforderliche rechtwinklige Geometrie muss tatsächlich existieren. Der Satz beschreibt exakte geometrische Beziehungen, keine ungefähren Feldmessungen, ersetzt also niemals sorgfältiges Vermessen oder professionelle technische Messung. Innerhalb seines richtigen Rahmens aber verwandelt er zwei bekannte Längen mit einer einzigen Multiplikation und einer Quadratwurzel in eine dritte.",
            },
          ],
          "h2": "Praktische Anwendungen der Projektionsbeziehungen im rechtwinkligen Dreieck",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Versuchen Sie alle sechs Aufgaben auf Papier, bevor Sie die Antworten lesen. Keiner der Werte wiederholt die durchgerechneten Beispiele, und die letzte Aufgabe verbindet mehrere Ideen aus diesem Leitfaden.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Projektion P finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Kathete [[a = 6]] cm und die Hypotenuse [[c = 10]] cm. Finden Sie die Projektion p.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Projektion Q finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Kathete [[b = 15]] cm und die Hypotenuse [[c = 25]] cm. Finden Sie die Projektion q.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Kathete A finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 17]] cm und die Projektion [[p = 8]] cm. Finden Sie die Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Kathete B finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 13]] cm und die Projektion [[q = 9]] cm. Finden Sie die Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Projektionen [[p = 5]] cm und [[q = 20]] cm. Finden Sie die Hypotenuse c.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrstufiger Projektionssatz",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Projektionen [[p = 4]] cm und [[q = 9]] cm. Finden Sie die Hypotenuse, beide Katheten und die Höhe und prüfen Sie dann das Ergebnis mit dem Satz des Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Prüfung: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Übungsaufgaben mit Antworten",
        },
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "Rechner für Projektionen im rechtwinkligen Dreieck",
        "sec-calculate": "Projektionen und Hypotenusenabschnitte im rechtwinkligen Dreieck berechnen",
        "sec-what-projections": "Was sind Projektionen in einem rechtwinkligen Dreieck?",
        "sec-sides-segments": "Die Seiten und Abschnitte eines rechtwinkligen Dreiecks verstehen",
        "sec-formulas": "Formeln für Projektionen im rechtwinkligen Dreieck erklärt",
        "sec-choose-mode": "Den richtigen Rechnermodus wählen",
        "sec-projection-p": "Projektion P aus Kathete A und Hypotenuse berechnen",
        "sec-projection-q": "Projektion Q aus Kathete B und Hypotenuse berechnen",
        "sec-leg-a": "Kathete A aus der Projektion P finden",
        "sec-leg-b": "Kathete B aus der Projektion Q finden",
        "sec-hypotenuse": "Die vollständige Hypotenuse aus Projektionen berechnen",
        "sec-how-to-use": "Den Rechner für Projektionen im rechtwinkligen Dreieck verwenden",
        "sec-diagram": "Das Diagramm zur Projektion im rechtwinkligen Dreieck verstehen",
        "sec-proof": "Warum funktionieren die Projektionssätze?",
        "sec-examples": "Durchgerechnete Beispiele für alle fünf Rechnermodi",
        "sec-all-measurements": "Alle Hauptmessungen eines rechtwinkligen Dreiecks berechnen",
        "sec-pythagoras": "Beziehung zwischen Projektionen und dem Satz des Pythagoras",
        "sec-altitude": "Beziehung zwischen Projektionen und Höhe",
        "sec-verify": "Ihre Projektionsberechnungen prüfen",
        "sec-mistakes": "Häufige Fehler bei der Verwendung eines Rechners für Projektionen im rechtwinkligen Dreieck",
        "sec-properties": "Sonderfälle und wichtige Eigenschaften von Projektionen",
        "sec-applications": "Praktische Anwendungen der Projektionsbeziehungen im rechtwinkligen Dreieck",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
    },
};
