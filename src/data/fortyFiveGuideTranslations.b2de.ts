// fortyFiveGuideTranslations.bde.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B2_DE = {
  "de": {
      "meta": {
        "title": "45-45-90-Dreieck-Rechner – Hypotenuse, Kathete, Flächeninhalt, Umfang",
        "description": "Finden Sie Hypotenuse, fehlende Kathete, Flächeninhalt und Umfang eines 45-45-90-Dreiecks aus einer bekannten Kathete mit dem festen Verhältnis 1:1:√2 und exakten Wurzelantworten.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "45-45-90-Dreieck-Rechner",
        "sec-calculate": "Hypotenuse, Kathete, Flächeninhalt oder Umfang berechnen",
        "sec-what": "Was ist ein 45-45-90-Dreieck?",
        "sec-isosceles": "Warum heißt es gleichschenkliges rechtwinkliges Dreieck?",
        "sec-legs": "Die zwei gleichen Katheten und die Hypotenuse verstehen",
        "sec-ratio": "Das Seitenverhältnis des 45-45-90-Dreiecks",
        "sec-why-sqrt2": "Warum tritt die Quadratwurzel aus 2 auf?",
        "sec-hypotenuse": "Formel für die Hypotenuse aus einer Kathete",
        "sec-leg-hyp": "Formel für eine Kathete aus der Hypotenuse",
        "sec-area": "So berechnen Sie den Flächeninhalt eines 45-45-90-Dreiecks",
        "sec-perimeter": "So berechnen Sie den Umfang eines 45-45-90-Dreiecks",
        "sec-square": "Wie eine Quadratdiagonale ein 45-45-90-Dreieck erzeugt",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Lösung eines 45-45-90-Dreiecks",
        "sec-examples": "Durchgerechnete Beispiele für 45-45-90-Dreiecksberechnungen",
        "sec-exact": "Exakte Antworten im Vergleich zu Dezimalnäherungen",
        "sec-verify": "So prüfen Sie Ihre 45-45-90-Dreiecksberechnungen",
        "sec-properties": "Wichtige Eigenschaften von 45-45-90-Dreiecken",
        "sec-vs-3060": "Unterschied zwischen 45-45-90- und 30-60-90-Dreiecken",
        "sec-mistakes": "Häufige Fehler beim Lösen von 45-45-90-Dreiecken",
        "sec-applications": "Praktische Anwendungen von 45-45-90-Dreiecken",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Verwandte rechtwinklige Dreiecksrechner",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "45-45-90-Dreieck-Rechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Finden Sie Hypotenuse, fehlende Kathete, Flächeninhalt und Umfang eines 45-45-90-Dreiecks aus einer bekannten Seite.",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck ist ein rechtwinkliges Dreieck, dessen drei Winkel 45°, 45° und 90° messen. Es heißt gleichschenkliges rechtwinkliges Dreieck, weil seine beiden Katheten gleich lang sind, und spezielles rechtwinkliges Dreieck, weil seine Seiten immer demselben festen Verhältnis folgen, egal wie groß oder klein das Dreieck ist. Der 45-45-90-Dreieck-Rechner auf dieser Seite nutzt dieses Verhältnis, um Hypotenuse, fehlende Kathete, Flächeninhalt und Umfang aus einer einzigen Seitenlänge zu finden, die Sie eingeben.",
            },
            {
              "kind": "p",
              "text": "Im Dreieck ABC beträgt Winkel A 45°, Winkel B 45° und Winkel C 90°. Seite BC ist die erste Kathete [[a]], Seite AC ist die zweite Kathete [[b]] und Seite AB ist die Hypotenuse [[c]]. Weil die beiden spitzen Winkel gleich sind, sind auch die beiden Katheten gleich, [[a = b]], und die drei Seiten erfüllen immer das Verhältnis [[a : b : c = 1 : 1 : \\sqrt{2}]], was bedeutet, dass [[c = a\\sqrt{2}]] gilt.",
            },
            {
              "kind": "p",
              "text": "Wenn [[a = 5]] cm gilt, dann ist die zweite Kathete [[b = 5]] cm, die Hypotenuse [[c = 5\\sqrt{2} \\approx 7.071]] cm und der Flächeninhalt [[A = \\frac{25}{2} = 12.5]] cm². Der Rechner kann aus derselben Kathete auch den Umfang berechnen, sodass eine Messung ausreicht, um das ganze Dreieck zu beschreiben. Die Abschnitte unten erklären das Verhältnis, die vier Rechnermodi und die Formeln, mit durchgerechneten Beispielen bei jedem Schritt.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Hypotenuse, Kathete, Flächeninhalt oder Umfang berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier Modi decken jede Möglichkeit ab, von einer bekannten Seite auszugehen.",
            },
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite hat vier Modi, einen für jede Messung, die er finden kann. Wählen Sie den Modus, der zu der Seite passt, die Sie kennen, und zu der Messung, die Sie brauchen. Jeder Modus fragt nur nach einer einzigen Eingabe, weil das feste Verhältnis alles andere ergänzt. Die Tabelle unten listet alle vier Modi mit der jeweils benötigten Eingabe und dem Ergebnis, das sie liefern.",
            },
            {
              "kind": "p",
              "text": "Um einen Modus zu nutzen, stellen Sie zuerst fest, welche Seite Sie kennen. Die Seite gegenüber einem 45°-Winkel ist eine Kathete, und jede Kathete kann als [[a]] dienen, weil die Katheten gleich sind. Die Seite gegenüber dem 90°-Winkel ist die Hypotenuse [[c]]. Geben Sie diese Messung als positive Zahl ein, wählen Sie eine Einheit und klicken Sie auf die Schaltfläche Berechnen. Das Ergebnis erscheint mit schrittweiser Rechnung, sodass Sie die Formel und das Einsetzen sehen, nicht nur die Antwort. Mit Zurücksetzen leeren Sie die Felder, bevor Sie eine neue Aufgabe beginnen.",
            },
            {
              "kind": "p",
              "text": "Verschiedene Modi brauchen verschiedene Formeln, weil jeder von einer anderen bekannten Seite ausgeht. Die Hypotenuse aus einer Kathete zu finden, multipliziert mit √2, während das Finden einer Kathete aus der Hypotenuse durch √2 teilt. Der Flächenmodus quadriert die Kathete und halbiert das Ergebnis, und der Umfangsmodus addiert alle drei Seiten. Sie müssen die fehlenden Seiten nie selbst ausrechnen, bevor Sie den Flächen- oder Umfangsmodus nutzen, weil der Rechner sie zuerst intern findet.",
            },
            {
              "kind": "p",
              "text": "Die vier Formeln lauten [[c = a\\sqrt{2}]] für die Hypotenuse, [[a = \\frac{c}{\\sqrt{2}}]] für eine Kathete, [[A = \\frac{a^2}{2}]] für den Flächeninhalt und [[P = a(2 + \\sqrt{2})]] für den Umfang. Halten Sie die Einheiten während einer Berechnung gleich: Eine Kathete in Zentimetern ergibt eine Hypotenuse in Zentimetern und einen Flächeninhalt in Quadratzentimetern. Der Rechner findet weder den Umkreisradius noch den Inkreisradius und auch keine Messungen für Dreiecke, die keine 45-45-90-Dreiecke sind, also prüfen Sie die Winkel, bevor Sie ihn nutzen.",
            },
          ],
          "table": {
            "headers": [
              "Rechnermodus",
              "Erforderliche Eingabe",
              "Ergebnis",
            ],
            "rows": [
              [
                "Hypotenuse aus Kathete finden",
                "Kathete a",
                "Hypotenuse c",
              ],
              [
                "Kathete aus Hypotenuse finden",
                "Hypotenuse c",
                "Kathete a",
              ],
              [
                "Flächeninhalt aus Kathete finden",
                "Kathete a",
                "Flächeninhalt A",
              ],
              [
                "Umfang aus Kathete finden",
                "Kathete a",
                "Umfang P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Was ist ein 45-45-90-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck ist nach seinen drei Winkeln benannt.",
            },
            {
              "kind": "p",
              "text": "Es ist ein rechtwinkliges Dreieck, das heißt, einer seiner Winkel beträgt genau 90°. Die beiden anderen Winkel betragen beide 45°, und der Name listet alle drei Winkel der Reihe nach auf. Weil der rechte Winkel feststeht und auch die beiden anderen Winkel feststehen, ist die Form des Dreiecks vollständig bestimmt: Jedes 45-45-90-Dreieck hat dieselbe Form, und zwei solche Dreiecke unterscheiden sich nur in der Größe.",
            },
            {
              "kind": "p",
              "text": "Es heißt spezielles rechtwinkliges Dreieck, weil seine Seitenlängen einem festen Verhältnis folgen. Bei den meisten rechtwinkligen Dreiecken sagt Ihnen eine bekannte Seite nichts über die anderen. Bei einem 45-45-90-Dreieck sagt Ihnen eine bekannte Seite alle, weil das Verhältnis [[1 : 1 : \\sqrt{2}]] die drei Seiten aneinander bindet. Darum kann der Rechner Hypotenuse, Flächeninhalt und Umfang aus einer einzigen Eingabe finden.",
            },
            {
              "kind": "p",
              "text": "Die drei Winkel ergeben zusammen 180°, wie es bei jedem Dreieck sein muss:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist die längste Seite, weil sie dem größten Winkel gegenüberliegt, dem 90°-Winkel. Die beiden Katheten sind gleich, weil sie gleichen Winkeln gegenüberliegen. Das Dreieck kann so klein wie wenige Millimeter oder so groß wie ein Baugrundstück sein, und die Winkel bleiben gleich, während die Seiten gemeinsam größer werden. Auch das Verhältnis bleibt gleich, sodass ein Dreieck mit Kathete 5 cm und ein Dreieck mit Kathete 5 m dieselbe Form in verschiedenen Größen haben.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Beschriftetes 45-45-90-Dreieck ABC mit den Winkeln 45, 45 und 90 Grad, gleichen Katheten a und b und Hypotenuse c",
            "caption": "Dreieck ABC: Winkel 45°, 45° und 90°, mit gleichen Katheten a und b und Hypotenuse c.",
          },
        },
        "sec-isosceles": {
          "h2": "Warum heißt es gleichschenkliges rechtwinkliges Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Name hat zwei Teile, und jeder Teil beschreibt eine Tatsache.",
            },
            {
              "kind": "p",
              "text": "Gleichschenklig bedeutet ein Dreieck mit zwei gleichen Seiten. Bei einem 45-45-90-Dreieck sind die beiden gleichen Seiten die Katheten [[a]] und [[b]]. Rechtwinkliges Dreieck bedeutet ein Dreieck mit einem 90°-Winkel. Setzt man die beiden Wörter zusammen, sagt der Name genau, was das Dreieck ist: ein rechtwinkliges Dreieck mit zwei gleichen Seiten.",
            },
            {
              "kind": "p",
              "text": "Die gleichen Katheten folgen aus den gleichen Winkeln. In jedem Dreieck liegen gleiche Winkel gleichen Seiten gegenüber. Hier sind die beiden spitzen Winkel beide 45°, also müssen die Seiten, die ihnen gegenüberliegen, gleich sein. Die Seite gegenüber Winkel A ist [[a]], und die Seite gegenüber Winkel B ist [[b]], also gilt [[a = b]]. Das ist kein Zufall einer einzigen Zeichnung: Es gilt für jedes 45-45-90-Dreieck, weil die Winkel immer dieselben sind.",
            },
            {
              "kind": "p",
              "text": "Das Dreieck ist symmetrisch bezüglich der Höhe, die vom Scheitel des rechten Winkels zur Hypotenuse gezogen wird. Diese Höhe trifft die Hypotenuse in ihrem Mittelpunkt und in einem rechten Winkel, und sie teilt das große Dreieck in zwei kleinere Dreiecke, die zueinander kongruent sind. Jedes kleine Dreieck hat die Winkel 45°, 45° und 90°, also ist jedes selbst ein 45-45-90-Dreieck in halber Größe. Diese Symmetrie ist eine weitere Möglichkeit zu sehen, warum die beiden Katheten übereinstimmen müssen: Eine Faltung entlang der Höhe bildet eine Kathete auf die andere ab.",
            },
            {
              "kind": "p",
              "text": "Die Höhe vom Scheitel des rechten Winkels zur Hypotenuse hat auch eine nützliche Länge: Sie ist gleich der halben Hypotenuse. Für ein Dreieck mit Hypotenuse [[c]] beträgt die Höhe [[\\frac{c}{2}]]. Diese Tatsache ist praktisch, wenn eine Aufgabe nach der Höhe des Dreiecks gemessen von der Hypotenuse fragt, und sie ist eine weitere Folge der Symmetrie der Form.",
            },
          ],
        },
        "sec-legs": {
          "h2": "Die zwei gleichen Katheten und die Hypotenuse verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt ihm gegenüber.",
            },
            {
              "kind": "p",
              "text": "Kathete [[a]] ist eine senkrechte Seite, Seite BC im Dreieck ABC. Kathete [[b]] ist die andere senkrechte Seite, Seite AC. Die beiden Katheten treffen sich im Eckpunkt C, wo sie den 90°-Winkel bilden, also stehen sie senkrecht aufeinander. Jede Kathete kann als Grundseite des Dreiecks dienen, während die andere Kathete als Höhe wirkt, weshalb die Flächenformel die beiden Katheten direkt nutzen kann.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse [[c]] ist Seite AB, gegenüber dem 90°-Winkel. Sie ist die längste Seite des Dreiecks, weil der größte Winkel immer der längsten Seite gegenüberliegt. Sie ist auch die einzige Seite, die keine Kathete ist, also darf sie nie mit einer der Katheten verwechselt werden. Die beiden Katheten sind gleich, aber die Hypotenuse ist ihnen nicht gleich: Sie ist √2-mal so lang wie eine Kathete, etwa 1,414-mal so lang.",
            },
            {
              "kind": "p",
              "text": "Weil die Katheten gleich sind, kann jede von ihnen als bekannte Kathete im Rechner verwendet werden. Wenn eine Aufgabe Kathete [[b]] statt Kathete [[a]] angibt, geben Sie diesen Wert als Kathete ein: Das Ergebnis ist dasselbe, da [[a = b]] gilt. Dieselbe Freiheit gilt nicht für die Hypotenuse, die ihren eigenen Modus braucht. Die Hypotenuse in jeder Zeichnung zu erkennen, ist einfach: Suchen Sie die kleine quadratische Markierung des rechten Winkels, und die Seite gegenüber ist die Hypotenuse.",
            },
          ],
          "table": {
            "headers": [
              "Seite",
              "Gegenüberliegender Winkel",
              "Länge",
            ],
            "rows": [
              [
                "Kathete a (BC)",
                "45°",
                "a",
              ],
              [
                "Kathete b (AC)",
                "45°",
                "a, gleich der Kathete a",
              ],
              [
                "Hypotenuse c (AB)",
                "90°",
                "a√2, längste Seite",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Das Seitenverhältnis des 45-45-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 1:1:√2 legt jedes 45-45-90-Dreieck fest.",
            },
            {
              "kind": "p",
              "text": "Das Seitenverhältnis eines 45-45-90-Dreiecks lautet:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Jeder Teil des Verhältnisses beschreibt eine Seite. Die erste Kathete steht für eine Einheit, die zweite Kathete ebenfalls für eine Einheit, und die Hypotenuse steht für √2 Einheiten. Mit der Kathete als [[a]] geschrieben, lauten die drei Seiten [[a = a]], [[b = a]] und [[c = a\\sqrt{2}]]. Wenn die Kathete 1 cm beträgt, ist die andere Kathete 1 cm und die Hypotenuse √2 cm. Wenn die Kathete 10 cm beträgt, ist die andere Kathete 10 cm und die Hypotenuse [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Das Verhältnis bleibt unabhängig von der Größe des Dreiecks gleich, weil alle 45-45-90-Dreiecke ähnlich sind. Das Vergrößern oder Verkleinern eines Dreiecks multipliziert jede Seite mit demselben Faktor, sodass sich die Proportionen zwischen den Seiten nicht ändern. Nehmen Sie [[a = 4]] cm als Beispiel: Die zweite Kathete ist [[b = 4]] cm und die Hypotenuse ist [[c = 4\\sqrt{2} \\approx 5.657]] cm, und das Verhältnis [[4 : 4 : 5.657]] ist dasselbe wie [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Der Wert von √2 beträgt etwa 1,41421356. Er ist eine irrationale Zahl, also endet seine Dezimaldarstellung nie und wiederholt sich nie, und keine Dezimalzahl ist ihm exakt gleich. Behalten Sie nach Möglichkeit die exakte Wurzelform: [[4\\sqrt{2}]] cm zu schreiben ist exakt, während 5,657 cm eine gerundete Näherung ist. Verwenden Sie die exakte Form in Ihrer Rechnung und in Endergebnissen, wenn die Frage nach einem exakten Wert verlangt, und geben Sie die Dezimalzahl nur an, wenn eine Näherungsantwort gebraucht wird.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Drei Balken, die die zwei gleichen Katheten und die Hypotenuse im Verhältnis 1 zu 1 zu Quadratwurzel aus 2 vergleichen",
            "caption": "Das feste Verhältnis 1:1:√2 vergleicht die zwei gleichen Katheten mit der Hypotenuse.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Warum tritt die Quadratwurzel aus 2 auf?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadratwurzel aus 2 kommt direkt aus dem Satz des Pythagoras.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit den gleichen Katheten, [[a = b]], und wenden Sie den Satz des Pythagoras an, der für jedes rechtwinklige Dreieck gilt:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie die gleichen Katheten ein und ersetzen Sie [[b]] durch [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Fassen Sie die beiden gleichen Terme zusammen:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ziehen Sie die positive Quadratwurzel auf beiden Seiten. Seitenlängen sind positiv, also wird die negative Wurzel verworfen:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Das ist der ganze Grund, warum √2 auftritt: Zwei gleiche Quadrate addieren sich zum Doppelten eines Quadrats, und die Quadratwurzel aus 2 ist die Zahl, die diese Verdopplung rückgängig macht. Dies ist eine besondere Beziehung, keine ungefähre Abkürzung. Sie folgt aus den gleichen Katheten plus Pythagoras und gilt für jedes 45-45-90-Dreieck ohne Ausnahme.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 5]] cm als Zahlenprobe:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Der Schritt von √50 zu [[5\\sqrt{2}]] funktioniert, weil [[50 = 25 \\times 2]] gilt und die Quadratwurzel aus 25 gleich 5 ist. Das Vereinfachen der Wurzel auf diese Weise hält die Antwort exakt und macht das Muster sichtbar: Die Hypotenuse ist immer die Kathete mal √2, egal wie lang die Kathete ist.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Herleitung mit Pythagoras, die zeigt, dass a Quadrat plus a Quadrat gleich c Quadrat ist und zu c gleich a mal Quadratwurzel aus 2 führt",
            "caption": "Aus a² + a² = c² muss die Hypotenuse a√2 sein.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formel für die Hypotenuse aus einer Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplizieren Sie eine der Katheten mit √2, um die Hypotenuse zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[c]] die Hypotenuse und [[a]] eine der Katheten. Die Formel liest das Seitenverhältnis direkt ab: Die Hypotenuse steht für √2 Einheiten je 1 Einheit Kathete, also ist die Hypotenuse √2-mal so lang wie die Kathete. Multiplikation ist nötig, weil das Verhältnis eine Skalierungsbeziehung ist, und √2 tritt auf, weil Pythagoras die Hypotenuse zwingt, um genau diesen Faktor länger als eine Kathete zu sein.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist länger als jede Kathete, wie es sein muss: √2 ist etwa 1,414, also vergrößert die Multiplikation damit die Länge. Die exakte Antwort lautet [[5\\sqrt{2}]] cm, und 7,071 cm ist die Dezimalnäherung. Behalten Sie die exakte Form, wenn die Frage danach verlangt, und runden Sie die Dezimalzahl erst am Ende Ihrer Rechnung, nie in der Mitte.",
            },
            {
              "kind": "p",
              "text": "Nutzen Sie diesen Modus immer, wenn eine Kathete die bekannte Seite ist und die Hypotenuse die unbekannte. Weil die Katheten gleich sind, spielt es keine Rolle, welche Kathete die Aufgabe angibt: Geben Sie sie als [[a]] ein, und die Formel liefert dieselbe Hypotenuse. Eine schnelle Plausibilitätsprüfung hilft: Die Hypotenuse sollte etwa 1,414-mal so lang wie die Kathete herauskommen. Wenn Ihre Antwort doppelt so lang wie die Kathete ist oder nur wenig länger als die Kathete, haben Sie den falschen Multiplikator verwendet.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "45-45-90-Dreieck mit Kathete 5 cm und Hypotenuse, beschriftet mit 5 mal Quadratwurzel aus 2, etwa 7,071 cm",
            "caption": "Hypotenuse aus einer Kathete: a = 5 cm ergibt c = 5√2 ≈ 7,071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Formel für eine Kathete aus der Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Teilen Sie die Hypotenuse durch √2, um eine Kathete zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[a]] eine der Katheten und [[c]] die Hypotenuse. Diese Formel entsteht durch Umstellen von [[c = a\\sqrt{2}]]: Das Teilen beider Seiten durch √2 isoliert [[a]]. Das Teilen durch √2 kehrt die ursprüngliche Multiplikation um, macht also genau rückgängig, was die Vorwärtsformel getan hat. Die andere Kathete hat dieselbe Länge, sodass eine Rechnung beide Katheten auf einmal liefert.",
            },
            {
              "kind": "p",
              "text": "Die rationalisierte Form ist meist leichter zu handhaben:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sie entsteht, indem Zähler und Nenner von [[\\frac{c}{\\sqrt{2}}]] mit √2 multipliziert werden. Der Nenner wird [[\\sqrt{2} \\times \\sqrt{2} = 2]], und der Zähler wird [[c\\sqrt{2}]]. Beide Formen liefern denselben Wert, aber die rationalisierte Form hat keine Quadratwurzel im Nenner, und das ist die Form, die Prüfungsantworten erwarten.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Beide Katheten sind [[5\\sqrt{2}]] cm lang, etwa 7,071 cm jede. Die Kathete ist kürzer als die Hypotenuse, wie es sein muss, da das Teilen durch eine Zahl größer als 1 den Wert verkleinert. Wenn Ihre Antwort länger als die Hypotenuse herauskommt, haben Sie multipliziert statt geteilt oder durch die falsche Zahl geteilt.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "45-45-90-Dreieck mit Hypotenuse 10 cm und jeder Kathete, beschriftet mit 5 mal Quadratwurzel aus 2, etwa 7,071 cm",
            "caption": "Kathete aus Hypotenuse: c = 10 cm ergibt a = b = 5√2 ≈ 7,071 cm.",
          },
        },
        "sec-area": {
          "h2": "So berechnen Sie den Flächeninhalt eines 45-45-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Flächeninhalt braucht nur eine Kathete, weil die Katheten gleich sind.",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt eines rechtwinkligen Dreiecks ist die Hälfte des Produkts seiner beiden Katheten, weil die Katheten als Grundseite und senkrechte Höhe wirken:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Da [[a = b]] gilt, setzen Sie ein, um den Flächeninhalt aus einer einzigen Kathete zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Die Teilung durch zwei ist nötig, weil ein Dreieck die Hälfte des Rechtecks bedeckt, das von seinen beiden Katheten gebildet wird. Der endgültige Flächeninhalt wird in Quadrateinheiten angegeben, etwa Quadratzentimetern, weil der Flächeninhalt eine Oberfläche misst, keine Länge. Ein Quadrat mit Seite [[a]] hat den Flächeninhalt [[a^2]], und das Dreieck ist genau die Hälfte dieses Quadrats, was eine weitere Möglichkeit ist zu sehen, warum die Formel [[\\frac{a^2}{2}]] lautet.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Der Flächenmodus des Rechners nimmt die Kathete und berechnet den Flächeninhalt direkt, sodass Sie nur [[a]] eingeben. Wenn Sie statt der Kathete die Hypotenuse kennen, finden Sie zuerst die Kathete mit [[a = \\frac{c}{\\sqrt{2}}]] und verwenden dann [[A = \\frac{a^2}{2}]]. Es gibt auch eine Abkürzung allein aus der Hypotenuse: [[A = \\frac{c^2}{4}]], die dasselbe Ergebnis liefert. Für [[c = 10]] cm gilt [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt wächst mit dem Quadrat der Kathete, also vervierfacht das Verdoppeln der Kathete den Flächeninhalt. Ein Dreieck mit [[a = 12]] cm hat den vierfachen Flächeninhalt des Dreiecks mit [[a = 6]] cm, 72 cm² statt 18 cm², nicht den doppelten. Diese quadratische Beziehung vergisst man leicht, also prüfen Sie sie, wann immer eine Aufgabe ein Dreieck vergrößert oder verkleinert.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "45-45-90-Dreieck mit Kathete 6 cm, Hypotenuse 6 mal Quadratwurzel aus 2 cm, Flächeninhalt 18 Quadratzentimeter und Umfang etwa 20,485 cm",
            "caption": "Flächeninhalt und Umfang aus der Kathete: a = 6 cm ergibt A = 18 cm² und P ≈ 20,485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "So berechnen Sie den Umfang eines 45-45-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Addieren Sie alle drei Seiten und klammern Sie dann die Kathete aus.",
            },
            {
              "kind": "p",
              "text": "Der Umfang ist die Gesamtlänge um das Dreieck herum:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Da [[a = b]] und [[c = a\\sqrt{2}]] gilt, setzen Sie diese Beziehungen ein:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Klammern Sie [[a]] aus, um die vereinfachte Form zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Alle drei Seitenlängen sind enthalten, weil der Umfang die gesamte Begrenzung des Dreiecks nachzeichnet: eine Kathete hinunter, über die andere Kathete und entlang der Hypotenuse zurück. Das Weglassen einer Seite ergibt eine kürzere Strecke, die nicht der Umfang ist. Der Umfang ist eine Längenmessung, keine Flächenmessung, also lautet die Antwort in einfachen Einheiten wie Zentimetern, nie in Quadratzentimetern.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die exakte Form lautet [[10 + 5\\sqrt{2}]] cm, und 17,071 cm ist die Dezimalform. Der Umfangsmodus des Rechners nimmt die Kathete und addiert die drei Seiten intern. Es gibt auch eine Abkürzung allein aus der Hypotenuse: [[P = c(1 + \\sqrt{2})]]. Für [[c = 10]] cm ergibt das [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Der Umfang wächst direkt proportional zur Kathete, also verdoppelt das Verdoppeln der Kathete den Umfang.",
            },
          ],
        },
        "sec-square": {
          "h2": "Wie eine Quadratdiagonale ein 45-45-90-Dreieck erzeugt",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Diagonale schneidet ein Quadrat in zwei identische 45-45-90-Dreiecke.",
            },
            {
              "kind": "p",
              "text": "Ein Quadrat hat vier gleiche Seiten und vier 90°-Ecken. Zeichnen Sie eine Diagonale hindurch, von einer Ecke zur gegenüberliegenden Ecke, und das Quadrat teilt sich in zwei Dreiecke. Jedes Dreieck hat zwei Seiten, die Seiten des Quadrats sind, also sind diese beiden Seiten gleich, und der Winkel zwischen ihnen ist eine Ecke des Quadrats, 90°. Die Diagonale ist die dritte Seite, gegenüber diesem rechten Winkel, also ist sie die Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Die Diagonale halbiert auch die beiden Eckwinkel, durch die sie verläuft. Jede Ecke des Quadrats beträgt 90°, und die Diagonale teilt sie in zwei 45°-Winkel. Das ergibt für jedes Dreieck Winkel von 45°, 45° und 90°, was genau ein 45-45-90-Dreieck ist. Die beiden Dreiecke sind kongruent: Sie haben dieselben Seitenlängen und dieselben Winkel, weil sie die Diagonale teilen und jedes zwei Seiten desselben Quadrats nimmt.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie ein Quadrat mit Seitenlänge [[a]]. Die Diagonale [[d]] ist die Hypotenuse des Dreiecks, also liefert Pythagoras:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie ein Quadrat mit Seite 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Darum verwenden Quadratdiagonalen-Berechnungen immer dieselbe √2-Beziehung. Wann immer Sie die Diagonale eines Quadrats brauchen, multiplizieren Sie die Seite mit √2; wann immer Sie die Diagonale kennen und die Seite brauchen, teilen Sie sie durch √2. Dieselbe Regel gilt für quadratische Fliesen, quadratische Bilderrahmen, quadratische Grundstücke und jede andere quadratische Form, weil sich jedes Quadrat auf dieselbe Weise teilt.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Quadrat mit Seite 8 cm, durch eine Diagonale in zwei kongruente 45-45-90-Dreiecke geteilt, Diagonale etwa 11,314 cm",
            "caption": "Eine Quadratdiagonale bei Seite 8 cm ist d = 8√2 ≈ 11,314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Lösung eines 45-45-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Dreieck, a = 5 cm, von Anfang bis Ende durchgerechnet.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit der Kathete [[a = 5]] cm und finden Sie jede andere Messung des Dreiecks, eine Formel nach der anderen. Jeder Schritt nutzt eine Formel aus den Abschnitten oben, und die Zusammenfassungstabelle am Ende sammelt die Ergebnisse.",
            },
            {
              "kind": "steps",
              "steps": [
                "Finden Sie die zweite Kathete: Die Katheten sind gleich, also [[b = 5]] cm.",
                "Finden Sie die Hypotenuse: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Finden Sie den Flächeninhalt: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] Quadratzentimeter.",
                "Finden Sie den Umfang: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Alle vier Messungen beschreiben dasselbe Dreieck. Die Seiten [[5]], [[5]] und [[7.071]] erfüllen das Verhältnis [[1 : 1 : \\sqrt{2}]] und den Satz des Pythagoras, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. Der Flächeninhalt und der Umfang sind zwei verschiedene Arten von Messungen desselben Dreiecks: Der Flächeninhalt bedeckt seine Oberfläche, während der Umfang seine Begrenzung nachzeichnet. Wenn Sie die Kathete ändern, ändert sich jeder andere Wert mit ihr, aber das Verhältnis zwischen den Seiten ändert sich nie.",
            },
          ],
          "table": {
            "headers": [
              "Messung",
              "Exakter Wert",
              "Näherungswert",
            ],
            "rows": [
              [
                "Kathete a",
                "5 cm",
                "5 cm",
              ],
              [
                "Kathete b",
                "5 cm",
                "5 cm",
              ],
              [
                "Hypotenuse c",
                "5√2 cm",
                "7,071 cm",
              ],
              [
                "Flächeninhalt A",
                "25/2 cm²",
                "12,5 cm²",
              ],
              [
                "Umfang P",
                "10 + 5√2 cm",
                "17,071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele für 45-45-90-Dreiecksberechnungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht durchgerechnete Beispiele, die jeden Rechnermodus und eine Quadratdiagonale abdecken.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Hypotenuse aus einer Kathete finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 4]] cm. Formel: [[c = a\\sqrt{2}]]. Einsetzen: [[c = 4\\sqrt{2}]]. Exakte Antwort: [[4\\sqrt{2}]] cm. Dezimalnäherung: [[c \\approx 5.657]] cm. Die Hypotenuse ist etwa 1,414-mal so lang wie die Kathete, also werden aus 4 cm etwa 5,657 cm. Behalten Sie die exakte Form [[4\\sqrt{2}]] cm, wenn die Frage nach einem exakten Wert verlangt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Hypotenuse aus einer größeren Kathete finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 8]] cm. Formel: [[c = a\\sqrt{2}]]. Einsetzen: [[c = 8\\sqrt{2}]]. Exakte Antwort: [[8\\sqrt{2}]] cm. Dezimalnäherung: [[c \\approx 11.314]] cm. Dies ist dieselbe Rechnung wie Beispiel 1 im doppelten Maßstab, und die Antwort ist genau doppelt so groß, was die lineare Skalierung der Seitenlängen bestätigt. Derselbe Wert ist die Diagonale eines Quadrats mit Seite 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[c = 12]] cm. Formel: [[a = \\frac{c}{\\sqrt{2}}]]. Einsetzen: [[a = \\frac{12}{\\sqrt{2}}]]. Rationalisieren ergibt [[a = 6\\sqrt{2}]] cm. Dezimalnäherung: [[a \\approx 8.485]] cm. Beide Katheten sind [[6\\sqrt{2}]] cm lang, weil die Katheten gleich sind. Die Kathete ist kürzer als die Hypotenuse, wie es sein muss.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Kathete aus einer größeren Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[c = 20]] cm. Formel: [[a = \\frac{c\\sqrt{2}}{2}]]. Einsetzen: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Dezimalnäherung: [[a \\approx 14.142]] cm. Beide Katheten sind [[10\\sqrt{2}]] cm lang. Eine schnelle Prüfung: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, was die gegebene Hypotenuse zurückgibt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Flächeninhalt berechnen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 7]] cm. Formel: [[A = \\frac{a^2}{2}]]. Einsetzen: [[A = \\frac{49}{2}]]. Ergebnis: [[A = 24.5]] cm². Der Flächeninhalt ist exakt, ohne Quadratwurzel und ohne Rundung, weil [[7^2 = 49]] sauber halbiert wird. Der Flächeninhalt steht in Quadrateinheiten, anders als die Seitenlängen, also lautet die Einheit cm², nicht cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Umfang berechnen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 6]] cm. Formel: [[P = a(2 + \\sqrt{2})]]. Einsetzen: [[P = 6(2 + \\sqrt{2})]]. Exakte Antwort: [[P = 12 + 6\\sqrt{2}]] cm. Dezimalnäherung: [[P \\approx 20.485]] cm. Das Addieren der Seiten eine nach der anderen ergibt dasselbe Ergebnis: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Der Umfang steht in einfachen Einheiten, nicht in Quadrateinheiten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Quadratdiagonale finden",
            },
            {
              "kind": "p",
              "text": "Gegeben ein Quadrat mit Seite 10 m. Formel: [[d = a\\sqrt{2}]]. Einsetzen: [[d = 10\\sqrt{2}]] m. Exakte Antwort: [[10\\sqrt{2}]] m. Dezimalnäherung: [[d \\approx 14.142]] m. Die Diagonale teilt das Quadrat in zwei 45-45-90-Dreiecke, jedes mit Katheten von 10 m und Hypotenuse [[10\\sqrt{2}]] m. Dies ist dieselbe Formel wie das Finden einer Hypotenuse aus einer Kathete, weil die Diagonale die Hypotenuse ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Hypotenuse aus einer Dezimalkathete finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 2.5]] cm. Formel: [[c = a\\sqrt{2}]]. Einsetzen: [[c = 2.5\\sqrt{2}]]. Exakte Antwort: [[2.5\\sqrt{2}]] cm. Dezimalnäherung: [[c \\approx 3.536]] cm. Dezimaleingaben funktionieren genau wie ganzzahlige Eingaben: Mit √2 multiplizieren, zuerst die exakte Form behalten und die Dezimalzahl erst im letzten Schritt runden. Die zweite Kathete ist ebenfalls 2,5 cm.",
            },
            {
              "kind": "p",
              "text": "Exakte Antworten und Dezimalnäherungen dienen verschiedenen Zwecken. Die exakte Form, etwa [[4\\sqrt{2}]] cm, ist genau und ist das, was Prüfungsantworten meist verlangen. Die Dezimalform, etwa 5,657 cm, ist leichter vorstellbar und mit einem Lineal zu messen. Geben Sie zuerst die exakte Form an, dann die Dezimalzahl, und runden Sie die Dezimalzahl erst im letzten Schritt.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Exakte Antworten im Vergleich zu Dezimalnäherungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine exakte Antwort behält √2; eine Dezimalantwort rundet sie.",
            },
            {
              "kind": "p",
              "text": "Vergleichen Sie die exakte Antwort [[5\\sqrt{2}]] cm mit der Dezimalnäherung 7,071 cm. Die erste ist exakt: Sie gibt die Länge genau an und nutzt das Symbol √2 für die irrationale Zahl, deren Quadrat 2 ist. Die zweite ist gerundet: Sie gibt die Länge auf drei Dezimalstellen an, was nahe am wahren Wert liegt, aber nicht gleich ihm ist. Der Unterschied ist klein, etwa 0,00007 cm, aber er ist real, und er zählt in Beweisen und in weiteren Rechnungen.",
            },
            {
              "kind": "p",
              "text": "Die Zahl √2 ist irrational, das heißt, sie kann nicht als Bruch zweier ganzer Zahlen geschrieben werden, und ihre Dezimaldarstellung endet nie und wiederholt sich nie. Sie beginnt mit 1,41421356 und geht ohne Ende weiter. Jede Dezimalzahl, die Sie dafür schreiben, wie lang auch immer, ist eine Näherung. Darum ist die exakte Wurzelschreibweise in mathematischen Beweisen und in Prüfungsantworten, die nach einem exakten Wert fragen, vorzuziehen: Die Wurzel behält die volle Genauigkeit, die eine Dezimalzahl verliert.",
            },
            {
              "kind": "p",
              "text": "Eine Dezimalnäherung ist praktischer, wenn Sie etwas messen, schneiden oder bauen müssen. Ein Lineal kann [[5\\sqrt{2}]] cm nicht direkt messen, aber es kann 7,071 cm messen. Ein Zimmermann, der eine diagonale Strebe schneidet, braucht die Dezimalzahl, während ein Schüler, der einen Satz beweist, die exakte Form braucht. Verwenden Sie jede Form, wo sie passt, und kennzeichnen Sie Dezimalzahlen als Näherungen, damit niemand sie für exakte Werte hält.",
            },
            {
              "kind": "p",
              "text": "Das Runden sollte am Ende einer Rechnung erfolgen, nicht in der Mitte. Wenn Sie √2 früh durch 1,41 ersetzen und dann multiplizieren, trägt jeder spätere Schritt diesen Fehler weiter. Für [[a = 5]] cm ergibt die Verwendung von 1,41 [[c = 7.05]] cm, während die richtige Näherung 7,071 cm lautet. Behalten Sie √2 in der Form [[5\\sqrt{2}]] exakt durch die Rechnung und runden Sie erst die endgültige Antwort. Stellen Sie eine gerundete Dezimalzahl nie so dar, als wäre sie exakt.",
            },
          ],
        },
        "sec-verify": {
          "h2": "So prüfen Sie Ihre 45-45-90-Dreiecksberechnungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier schnelle Prüfungen fangen fast jeden Fehler ab.",
            },
            {
              "kind": "p",
              "text": "Führen Sie bei jeder Antwort mindestens eine Prüfung durch, und alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten nutzt durchgehend das Dreieck mit [[a = 5]] cm, [[b = 5]] cm und [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Gleiche Katheten",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[a = b]]. Hier sind beide Katheten 5 cm lang, also besteht die Prüfung. Wenn Ihre beiden Katheten sich unterscheiden, ist eine von ihnen falsch, oder das Dreieck ist überhaupt kein 45-45-90-Dreieck. Dies ist die schnellste Prüfung von allen, weil sie keine Rechnung braucht: Die beiden Katheten müssen exakt übereinstimmen.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Seitenverhältnis",
            },
            {
              "kind": "p",
              "text": "Teilen Sie die Hypotenuse durch eine Kathete: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Hier gilt [[\\frac{7.071}{5} \\approx 1.414]], also hält das Verhältnis. Wenn die Teilung 2 ergibt, haben Sie versehentlich die Verdopplung des 30-60-90-Dreiecks verwendet. Wenn sie etwa 1,732 ergibt, haben Sie versehentlich √3 verwendet. Das Verhältnis [[\\frac{c}{a}]] muss √2 sein und nichts anderes.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[a^2 + b^2 = c^2]]. Hier gilt [[5^2 + 5^2 = 25 + 25 = 50]], und [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], also gilt der Satz. Diese Prüfung fängt vertauschte Katheten und falsche Multiplikatoren ab, weil die Verwendung des falschen Werts für eine Seite die Gleichheit bricht. Der <a href=\"/pythagorean-theorem-calculator/\">Satz-des-Pythagoras-Rechner</a> führt diese Prüfung für beliebige drei Seitenlängen durch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Winkelsumme",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Diese Prüfung betrifft eher die Aufgabenstellung als die Rechnung: Wenn die Winkel Ihres Dreiecks sich nicht zu 180° addieren oder wenn sie nicht 45°, 45° und 90° betragen, gelten die 45-45-90-Formeln überhaupt nicht, und keiner Seitenlänge aus ihnen kann vertraut werden. Prüfen Sie zuerst die Winkel, dann vertrauen Sie den Seiten.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Wichtige Eigenschaften von 45-45-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn Eigenschaften folgen aus dem festen Verhältnis.",
            },
            {
              "kind": "list",
              "items": [
                "Das Dreieck hat immer Winkel von 45°, 45° und 90°, und diese Winkel ergeben immer zusammen 180°.",
                "Beide Katheten sind gleich, [[a = b]], weil sie gleichen 45°-Winkeln gegenüberliegen.",
                "Die Hypotenuse ist die längste Seite, weil sie dem 90°-Winkel gegenüberliegt.",
                "Die Hypotenuse ist √2-mal so lang wie eine Kathete, [[c = a\\sqrt{2}]], wobei [[\\sqrt{2} \\approx 1.41421356]] gilt.",
                "Alle 45-45-90-Dreiecke sind ähnlich, weil sie dieselben drei Winkel und dieselben Seitenproportionen haben.",
                "Das Seitenverhältnis [[1 : 1 : \\sqrt{2}]] ist unabhängig von der Größe des Dreiecks, also lässt das Skalieren des Dreiecks das Verhältnis unverändert.",
                "Die Höhe zur Hypotenuse teilt das Dreieck in zwei kongruente kleinere 45-45-90-Dreiecke.",
                "Die Höhe zur Hypotenuse ist gleich der halben Hypotenuse, [[\\frac{c}{2}]].",
                "Der Flächeninhalt ist die Hälfte des Quadrats einer Kathete, [[A = \\frac{a^2}{2}]], also vervierfacht das Verdoppeln der Kathete den Flächeninhalt.",
                "Der Umfang ist [[P = a(2 + \\sqrt{2})]], also verdoppelt das Verdoppeln der Kathete den Umfang.",
              ],
            },
            {
              "kind": "p",
              "text": "Jede Eigenschaft folgt aus den Winkeln und dem Verhältnis, nicht aus einem einzigen Beispiel. Die gleichen Winkel erzwingen gleiche Katheten, die gleichen Katheten plus Pythagoras erzwingen die √2-Hypotenuse, und die √2-Hypotenuse erzwingt die Flächen- und Umfangsformeln. Sobald Sie die drei Winkel akzeptieren, ist alles andere festgelegt, weshalb eine bekannte Seite ausreicht, um das ganze Dreieck zu beschreiben.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Unterschied zwischen 45-45-90- und 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Die beiden speziellen Dreiecke sehen ähnlich aus, aber ihre Verhältnisse vermischen sich nie.",
            },
            {
              "kind": "p",
              "text": "Beide sind spezielle rechtwinklige Dreiecke, und beide lassen Sie jede Seite aus einer bekannten Seite finden. Der Unterschied liegt in den Winkeln: Ein 45-45-90-Dreieck hat zwei gleiche spitze Winkel, während ein 30-60-90-Dreieck zwei verschiedene spitze Winkel hat. Dieser eine Unterschied ändert das Seitenverhältnis vollständig, sodass die Formeln für ein Dreieck falsche Antworten für das andere liefern.",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck ist gleichschenklig, mit zwei gleichen Katheten, während ein 30-60-90-Dreieck ungleichseitig ist, ohne gleiche Seiten. Bei einem 45-45-90-Dreieck ist die Hypotenuse √2-mal so lang wie eine Kathete, während bei einem 30-60-90-Dreieck die Hypotenuse doppelt so lang wie die kurze Kathete ist. Die lange Kathete eines 30-60-90-Dreiecks ist √3-mal so lang wie die kurze Kathete, und es gibt keine entsprechende Seite in einem 45-45-90-Dreieck, weil seine beiden Katheten gleich lang sind. Für eine vollständige Behandlung des anderen Dreiecks sehen Sie den <a href=\"/30-60-90-triangle-calculator/\">30-60-90-Dreieck-Rechner</a>, der das Verhältnis 1:√3:2 verwendet.",
            },
            {
              "kind": "p",
              "text": "Die Formeln können nicht vertauscht werden. Die Verwendung von [[c = 2a]] bei einem 45-45-90-Dreieck mit [[a = 5]] cm ergibt 10 cm, während die richtige Hypotenuse etwa 7,071 cm beträgt. Die Verwendung von [[c = a\\sqrt{2}]] bei einem 30-60-90-Dreieck mit kurzer Kathete 5 cm ergibt etwa 7,071 cm, während die richtige Hypotenuse 10 cm beträgt. Prüfen Sie immer die Winkel, bevor Sie eine Formel wählen: Gleiche spitze Winkel bedeuten 45-45-90, und Winkel von 30° und 60° bedeuten 30-60-90.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Winkel",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Seitenverhältnis",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Gleiche Seiten",
                "Zwei gleiche Katheten",
                "Keine gleichen Katheten",
              ],
              [
                "Hypotenuse",
                "Kathete × √2",
                "Kurze Kathete × 2",
              ],
              [
                "Lange Kathete",
                "Wie die kurze Kathete",
                "Kurze Kathete × √3",
              ],
              [
                "Dreiecksart",
                "Gleichschenkliges rechtwinkliges Dreieck",
                "Ungleichseitiges rechtwinkliges Dreieck",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Zwei spezielle rechtwinklige Dreiecke nebeneinander, ein 45-45-90-Dreieck mit Verhältnis 1 zu 1 zu Quadratwurzel aus 2 und ein 30-60-90-Dreieck mit Verhältnis 1 zu Quadratwurzel aus 3 zu 2",
            "caption": "45-45-90 verwendet 1:1:√2; 30-60-90 verwendet 1:√3:2. Die Verhältnisse dürfen nie vertauscht werden.",
          },
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler beim Lösen von 45-45-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn Fehler tauchen in 45-45-90-Aufgaben immer wieder auf.",
            },
            {
              "kind": "steps",
              "steps": [
                "Anzunehmen, die Hypotenuse sei doppelt so lang wie die Kathete: Das Verdoppeln gehört zum 30-60-90-Dreieck. Für [[a = 5]] cm ergibt das Verdoppeln 10 cm, während die richtige Hypotenuse [[5\\sqrt{2} \\approx 7.071]] cm beträgt. Richtig: [[c = a\\sqrt{2}]].",
                "√3 statt √2 zu verwenden: √3 gehört zum 30-60-90-Dreieck, dessen Verhältnis [[1 : \\sqrt{3} : 2]] lautet. Ein 45-45-90-Dreieck verwendet immer √2. Richtig: [[c = a\\sqrt{2}]].",
                "Zu vergessen, dass beide Katheten gleich sind: Die beiden Katheten sind immer gleich lang, sodass, wenn eine Aufgabe eine Kathete angibt, die andere Kathete bereits bekannt ist. Für [[a = 5]] cm gilt [[b = 5]] cm, keine neue Unbekannte. Richtig: [[a = b]].",
                "Die Hypotenuse als eine der Katheten zu behandeln: Die Hypotenuse ist die Seite gegenüber dem 90°-Winkel, und sie ist länger als jede Kathete. Ihre Verwendung als Kathete in der Flächenformel ergibt einen falschen Flächeninhalt. Richtig: Identifizieren Sie zuerst die Hypotenuse anhand der Rechtwinkelmarkierung.",
                "[[c = a\\sqrt{3}]] zu verwenden: Dies vermischt die beiden speziellen Dreiecke. Für [[a = 5]] cm ist [[a\\sqrt{3} \\approx 8.660]] cm weder die Hypotenuse noch eine Kathete dieses Dreiecks. Richtig: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Die Hypotenuse durch 2 statt durch √2 zu teilen: Das Halbieren ergibt die kurze Kathete des 30-60-90-Dreiecks, nicht die Kathete des 45-45-90-Dreiecks. Für [[c = 10]] cm ergibt das Halbieren 5 cm, während die richtige Kathete [[5\\sqrt{2} \\approx 7.071]] cm beträgt. Richtig: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Zu vergessen, die Kathete beim Berechnen des Flächeninhalts zu quadrieren: Der Flächeninhalt braucht [[a^2]], nicht [[a]]. Die Verwendung von [[A = \\frac{a}{2}]] für [[a = 6]] cm ergibt 3 cm², während der richtige Flächeninhalt [[\\frac{36}{2} = 18]] cm² beträgt. Richtig: [[A = \\frac{a^2}{2}]].",
                "Nur die beiden Katheten beim Berechnen des Umfangs zu addieren: Der Umfang braucht alle drei Seiten. Das Addieren nur der beiden Katheten für [[a = 5]] cm ergibt 10 cm, während der wahre Umfang etwa 17,071 cm beträgt. Richtig: [[P = a + b + c]].",
                "Exakte Antworten mit Dezimalnäherungen zu verwechseln: [[5\\sqrt{2}]] cm ist exakt, während 7,071 cm gerundet ist. 7,071 cm so zu schreiben, als wäre es exakt, verliert die Genauigkeit, die die Wurzel behält. Richtig: Geben Sie zuerst die exakte Form an, dann die Dezimalzahl.",
                "√2 zu früh zu runden: Die Verwendung von 1,41 für √2 mitten in einer Rechnung verschiebt jeden späteren Schritt. Für [[a = 5]] cm ergibt [[5 \\times 1.41 = 7.05]] cm statt 7,071 cm. Richtig: Halten Sie √2 durch die Rechnung exakt und runden Sie erst die endgültige Antwort.",
                "Messeinheiten zu vermischen: Eine Kathete in Zentimetern und eine Hypotenuse in Metern lassen sich nicht direkt kombinieren. Rechnen Sie jede Messung vor dem Rechnen in eine Einheit um. Richtig: 0,5 m sind 50 cm, dann rechnen Sie in Zentimetern.",
                "Die Verhältnisse von 45-45-90 und 30-60-90 zu verwechseln: Die Verhältnisse [[1 : 1 : \\sqrt{2}]] und [[1 : \\sqrt{3} : 2]] gehören zu verschiedenen Dreiecken. Ihr Vertauschen ergibt eine Hypotenuse, die um einen großen Betrag falsch ist. Richtig: Prüfen Sie die Winkel und wählen Sie dann das Verhältnis, das zu ihnen passt.",
                "Zu vergessen, dass der Flächeninhalt Quadrateinheiten braucht: Ein Flächeninhalt von 18 cm ist schon bei der Einheit falsch, selbst wenn die Zahl stimmt. Der Flächeninhalt misst eine Oberfläche, also sind es 18 Quadratzentimeter. Richtig: [[A = 18]] cm².",
                "Die Formeln für ein beliebiges rechtwinkliges Dreieck zu verwenden: Die Formeln [[c = a\\sqrt{2}]] und [[A = \\frac{a^2}{2}]] gelten nur, wenn die Winkel 45°, 45° und 90° betragen. Ein rechtwinkliges Dreieck mit Winkeln von 40° und 50° hat ein anderes Verhältnis. Richtig: Prüfen Sie zuerst die Winkel und verwenden Sie dann die Formeln.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen von 45-45-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis taucht überall auf, wo ein Quadrat in zwei Hälften geschnitten wird.",
            },
            {
              "kind": "p",
              "text": "Die häufigste Verwendung ist das Finden der Diagonale eines Quadrats. Eine quadratische Fliese mit Seite 30 cm hat eine Diagonale von [[30\\sqrt{2} \\approx 42.426]] cm, was die Länge ist, entlang derer geschnitten werden muss, wenn eine Fliese von Ecke zu Ecke geteilt werden muss. Ein quadratischer Bilderrahmen, eine quadratische Tischplatte und ein quadratisches Grundstück nutzen alle dieselbe Rechnung, weil sich jedes Quadrat in zwei 45-45-90-Dreiecke teilt.",
            },
            {
              "kind": "p",
              "text": "Geometrie-Hausaufgaben und Trigonometrie-Übungen nutzen 45-45-90-Aufgaben, um zu prüfen, ob Schüler die gleichen Katheten erkennen, das Verhältnis anwenden und exakte Wurzelantworten behalten können. Ein Schüler, der eine Seite eines solchen Dreiecks kennt, kann den Rest finden, ohne zu messen, und das ist der Sinn des Verhältnisses. Unterrichtsdemonstrationen nutzen das Dreieck, um zu zeigen, wie ein festes Verhältnis eine Messung in eine vollständige Beschreibung einer Form verwandelt und wie das Schneiden eines Quadrats in zwei Hälften das Dreieck erzeugt.",
            },
            {
              "kind": "p",
              "text": "Technische Zeichnungen, architektonische Grundrisse und Baugeometrie nutzen 45-45-90-Beziehungen, wenn ein Entwurf einen 45°-Winkel verlangt, etwa eine diagonale Strebe, ein quadratisches Muster oder einen Eckenschnitt bei 45°. Ein Bauarbeiter, der eine Seite eines solchen Dreiecks kennt, kann die diagonale Entfernung finden, ohne sie direkt zu messen. Arbeiten in der Koordinatenebene nutzen dieselbe Idee: Eine Bewegung von 5 Einheiten nach rechts und 5 Einheiten nach oben deckt eine diagonale Entfernung von [[5\\sqrt{2} \\approx 7.071]] Einheiten ab. Dies sind realistische Verwendungen der Geometrie selbst, keine Aussagen über technische Toleranzen: Echte Entwurfsarbeit fügt Materialgrenzen und Sicherheitsmargen über die exakten geometrischen Werte auf dieser Seite hinaus hinzu.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Antworten",
          "blocks": [
            {
              "kind": "p",
              "text": "Bearbeiten Sie alle sechs Aufgaben auf Papier, bevor Sie die Antworten lesen.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Hypotenuse aus einer Kathete finden",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck hat eine Kathete von [[a = 9]] cm. Finden Sie die Hypotenuse [[c]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck hat eine Hypotenuse von [[c = 14]] cm. Finden Sie die Kathete [[a]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Flächeninhalt berechnen",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck hat eine Kathete von [[a = 10]] cm. Finden Sie den Flächeninhalt [[A]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umfang berechnen",
            },
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck hat eine Kathete von [[a = 3]] cm. Finden Sie den Umfang [[P]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Diagonale eines Quadrats finden",
            },
            {
              "kind": "p",
              "text": "Ein Quadrat hat eine Seitenlänge von 12 cm. Finden Sie die Länge seiner Diagonale.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Ein vorgeschlagenes 45-45-90-Dreieck prüfen",
            },
            {
              "kind": "p",
              "text": "Ein Dreieck hat Katheten von 6 cm und 6 cm und eine Hypotenuse von [[6\\sqrt{2}]] cm. Verwenden Sie den Satz des Pythagoras, um zu prüfen, ob diese Seitenlängen ein 45-45-90-Dreieck bilden.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. Die exakte Antwort ist [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Beide Katheten sind [[7\\sqrt{2}]] cm lang.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². Der Flächeninhalt ist exakt, ohne Rundung.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Das Addieren der Seiten eine nach der anderen ergibt dasselbe Ergebnis: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. Die Diagonale ist die Hypotenuse des 45-45-90-Dreiecks, das entsteht, wenn das Quadrat in zwei Hälften geschnitten wird.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[a^2 + b^2 = 36 + 36 = 72]], und [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. Die beiden Seiten stimmen überein, und die Katheten sind gleich, also ist das Dreieck ein 45-45-90-Dreieck mit einer Hypotenuse von etwa 8,485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Verwandte rechtwinklige Dreiecksrechner",
      "relatedIntro": "Jeder Rechner unten behandelt eine andere rechtwinklige Dreiecksaufgabe, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie brauchen.",
      "relatedItems": [
        "Rechner für spezielle rechtwinklige Dreiecke",
        "30-60-90-Dreieck-Rechner",
        "Rechner für rechtwinklige Dreiecksseiten",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Umfangsrechner für rechtwinklige Dreiecke",
        "Satz-des-Pythagoras-Rechner",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein 45-45-90-Dreieck?",
          "answer": "Ein 45-45-90-Dreieck ist ein rechtwinkliges Dreieck mit Winkeln von 45°, 45° und 90°. Es heißt gleichschenkliges rechtwinkliges Dreieck, weil seine beiden Katheten gleich sind. Seine Seiten folgen immer dem festen Verhältnis [[1 : 1 : \\sqrt{2}]], sodass eine bekannte Seite ausreicht, um alle anderen zu finden.",
        },
        {
          "question": "Wie lautet das Seitenverhältnis eines 45-45-90-Dreiecks?",
          "answer": "Das Seitenverhältnis lautet [[a : b : c = 1 : 1 : \\sqrt{2}]], wobei [[a]] und [[b]] die gleichen Katheten sind und [[c]] die Hypotenuse ist. Das bedeutet [[b = a]] und [[c = a\\sqrt{2}]]. Das Verhältnis ist für jedes 45-45-90-Dreieck gleich, egal wie groß es ist.",
        },
        {
          "question": "Warum sind beide Katheten gleich?",
          "answer": "Die beiden spitzen Winkel betragen beide 45°, und in jedem Dreieck liegen gleiche Winkel gleichen Seiten gegenüber. Die Seite gegenüber Winkel A ist Kathete [[a]], und die Seite gegenüber Winkel B ist Kathete [[b]], also gilt [[a = b]]. Das Dreieck ist außerdem symmetrisch bezüglich der Höhe vom rechten Winkel zur Hypotenuse.",
        },
        {
          "question": "Warum wird die Hypotenuse mit √2 multipliziert?",
          "answer": "Der Satz des Pythagoras ergibt [[a^2 + a^2 = c^2]], was sich zu [[2a^2 = c^2]] vereinfacht. Das Ziehen der Quadratwurzel ergibt [[c = a\\sqrt{2}]]. Die √2 tritt auf, weil zwei gleiche Quadrate sich zum Doppelten eines Quadrats addieren, sodass die Hypotenuse √2-mal so lang wie eine Kathete sein muss.",
        },
        {
          "question": "Wie finde ich die Hypotenuse aus einer Kathete?",
          "answer": "Multiplizieren Sie die Kathete mit √2 und verwenden Sie [[c = a\\sqrt{2}]]. Für [[a = 5]] cm gilt [[c = 5\\sqrt{2} \\approx 7.071]] cm. Jede Kathete funktioniert, weil die Katheten gleich sind. Behalten Sie die exakte Form [[5\\sqrt{2}]] cm, wenn die Frage nach einem exakten Wert verlangt.",
        },
        {
          "question": "Wie finde ich eine Kathete aus der Hypotenuse?",
          "answer": "Teilen Sie die Hypotenuse durch √2 mit [[a = \\frac{c}{\\sqrt{2}}]], oder verwenden Sie die rationalisierte Form [[a = \\frac{c\\sqrt{2}}{2}]]. Für [[c = 10]] cm gilt [[a = 5\\sqrt{2} \\approx 7.071]] cm. Beide Katheten haben diese selbe Länge, weil die Katheten gleich sind.",
        },
        {
          "question": "Wie berechne ich den Flächeninhalt eines 45-45-90-Dreiecks?",
          "answer": "Verwenden Sie [[A = \\frac{a^2}{2}]], wobei [[a]] eine Kathete ist. Die beiden Katheten wirken als Grundseite und Höhe, und das Dreieck bedeckt die Hälfte des Quadrats, das sie bilden. Für [[a = 6]] cm gilt [[A = \\frac{36}{2} = 18]] cm². Der Flächeninhalt steht immer in Quadrateinheiten.",
        },
        {
          "question": "Wie berechne ich seinen Umfang?",
          "answer": "Addieren Sie alle drei Seiten mit [[P = a + b + c]], was sich zu [[P = a(2 + \\sqrt{2})]] vereinfacht. Für [[a = 5]] cm gilt [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Der Umfang ist eine Längenmessung, also lautet die Antwort in einfachen Einheiten, nicht in Quadrateinheiten.",
        },
        {
          "question": "Warum erzeugt eine Quadratdiagonale ein 45-45-90-Dreieck?",
          "answer": "Eine Diagonale teilt ein Quadrat in zwei Dreiecke, jedes mit zwei Quadratseiten und einem 90°-Eckwinkel. Die Diagonale halbiert außerdem zwei Eckwinkel zu je 45°. Jedes Dreieck hat daher Winkel von 45°, 45° und 90°, und seine Hypotenuse ist die Diagonale, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "Ist √2 eine exakte Zahl oder eine Näherung?",
          "answer": "Das Symbol √2 steht für eine exakte irrationale Zahl, deren Quadrat 2 ist, aber ihre Dezimaldarstellung endet nie und beginnt mit 1,41421356. Jede Dezimalzahl, die Sie dafür schreiben, ist eine Näherung. Behalten Sie die Wurzelform in exakten Antworten und verwenden Sie eine Dezimalzahl nur, wenn ein gemessener oder gerundeter Wert gebraucht wird.",
        },
        {
          "question": "Sind alle 45-45-90-Dreiecke ähnlich?",
          "answer": "Ja. Jedes 45-45-90-Dreieck hat dieselben drei Winkel, 45°, 45° und 90°, und dasselbe Seitenverhältnis [[1 : 1 : \\sqrt{2}]]. Zwei solche Dreiecke unterscheiden sich nur in der Größe, nie in der Form. Das Vergrößern oder Verkleinern eines Dreiecks multipliziert jede Seite mit demselben Faktor, sodass die Proportionen fest bleiben.",
        },
        {
          "question": "Was ist der Unterschied zwischen 45-45-90- und 30-60-90-Dreiecken?",
          "answer": "Ein 45-45-90-Dreieck hat Winkel von 45°, 45° und 90°, gleiche Katheten und das Verhältnis [[1 : 1 : \\sqrt{2}]]. Ein 30-60-90-Dreieck hat Winkel von 30°, 60° und 90°, keine gleichen Seiten und das Verhältnis [[1 : \\sqrt{3} : 2]]. Ihre Formeln können nicht vertauscht werden, also prüfen Sie immer zuerst die Winkel.",
        },
      ],
    },
};
