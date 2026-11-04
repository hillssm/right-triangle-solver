// altitudeFromProjectionsGuideTranslations.bde.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B2_DE = {
  "de": {
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "Die Höhe eines rechtwinkligen Dreiecks aus den Projektionen berechnen",
        "sec-altitude": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
        "sec-projections": "Was sind Projektionen in einem rechtwinkligen Dreieck?",
        "sec-formula": "Formel für die Höhe eines rechtwinkligen Dreiecks aus Projektionen",
        "sec-steps": "So berechnen Sie die Höhe aus den Projektionen Schritt für Schritt",
        "sec-diagram": "Diagramm der Höhe eines rechtwinkligen Dreiecks erklärt",
        "sec-proof": "Warum funktioniert die Höhenformel? Beweis mit ähnlichen Dreiecken",
        "sec-examples": "Durchgerechnete Beispiele zur Höhe aus Projektionen",
        "sec-verify": "So prüfen Sie Ihre Höhenberechnung",
        "sec-relationships": "Beziehung zwischen Höhe, Hypotenuse und Dreiecksseiten",
        "sec-geomean": "Satz vom geometrischen Mittel und Höhe des rechtwinkligen Dreiecks",
        "sec-special": "Sonderfälle und wichtige Eigenschaften",
        "sec-mistakes": "Häufige Fehler bei der Höhenbestimmung aus Projektionen",
        "sec-applications": "Praktische Anwendungen des Höhensatzes",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte rechtwinklige Dreiecksrechner entdecken",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-conclusion": "Eine Quadratwurzel, volles Verständnis",
      },
      "sections": {
        "sec-intro": {
          "h2": "Die Höhe eines rechtwinkligen Dreiecks aus den Projektionen berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplizieren Sie die beiden Hypotenusenprojektionen und ziehen Sie dann die Quadratwurzel.",
            },
            {
              "kind": "p",
              "text": "Der Rechner für die Höhe eines rechtwinkligen Dreiecks aus Projektionen bestimmt die Höhe eines rechtwinkligen Dreiecks aus den beiden Projektionen, [[p]] und [[q]], die die Höhe auf der Hypotenuse abschneidet. Seiten oder Winkel sind nicht nötig. Geben Sie die Projektion [[p]] und die Projektion [[q]] in derselben Einheit ein, und der Rechner liefert die Höhe [[h]] nach dem Höhensatz:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Die Formel funktioniert, weil das Fällen der Höhe vom Scheitel des rechten Winkels zwei kleinere Dreiecke erzeugt, die einander ähnlich sind. Durch die Ähnlichkeit wird die Höhe zum geometrischen Mittel der beiden Projektionen. Als kurze Veranschaulichung: Wenn [[p=9\\text{ cm}]] und [[q=16\\text{ cm}]], multiplizieren Sie [[9]] mit [[16]] und erhalten [[144]]; dann ziehen Sie die Quadratwurzel und erhalten eine Höhe von [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Geben Sie das erste Hypotenusensegment in das Feld Projektion [[p]] und das zweite in das Feld Projektion [[q]] ein, beide in derselben Einheit. Drücken Sie Berechnen, um die Höhe zu sehen, und Zurücksetzen löscht die Felder für eine neue Aufgabe. Das Ergebnis trägt dieselbe Einheit wie die Eingaben. Wenn Sie stattdessen die Seiten des Dreiecks kennen, probieren Sie den <a href=\"/right-triangle-altitude-calculator/\">Höhenrechner</a> für diesen Fall.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Höhe eines rechtwinkligen Dreiecks ist die senkrechte Strecke, die vom Scheitel des rechten Winkels zur Hypotenuse gezogen wird. Ihre Länge misst den kürzesten Abstand von diesem Scheitel zur Hypotenuse, denn eine Senkrechte ist immer der kürzeste Weg von einem Punkt zu einer Geraden.",
            },
            {
              "kind": "p",
              "text": "Ziehen Sie die Höhe ein, und sie trifft die Hypotenuse in einem Punkt, der Höhenfußpunkt heißt und meist mit D bezeichnet wird. Von D steigt die Höhe genau im 90-Grad-Winkel zum Scheitel C des rechten Winkels auf. Dieses rechtwinklige Zusammentreffen macht CD zur Höhe und nicht nur zu einer weiteren Strecke.",
            },
            {
              "kind": "p",
              "text": "Anfänger verwechseln die Höhe manchmal mit einer der Katheten. Die Katheten AC und BC treffen sich im rechten Winkel und bilden die Außenseiten des Dreiecks. Die Höhe CD verläuft innerhalb des Dreiecks vom Scheitel C zur Seite AB. Sie ist eine dritte, eigenständige Strecke mit eigener Länge [[h]], und sie existiert erst, wenn die Höhe tatsächlich eingezeichnet ist.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse kann als Grundseite dienen, denn jede Seite kann Grundseite sein, sobald die passende Höhe eingezeichnet ist, sodass sich die Fläche als ein Halb mal Hypotenuse mal dieser Höhe schreiben lässt. Das Einzeichnen der Höhe teilt das Dreieck außerdem in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, die die Beziehungen ähnlicher Dreiecke tragen, auf denen jede Formel dieser Seite beruht.",
            },
          ],
        },
        "sec-projections": {
          "h2": "Was sind Projektionen in einem rechtwinkligen Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Wenn die Höhe CD auf die Hypotenuse AB trifft, teilt der Fußpunkt D die Seite AB in zwei kleinere Strecken: AD, genannt [[p]], und DB, genannt [[q]]. Diese beiden Strecken sind die Projektionen der Katheten auf die Hypotenuse. Jede ist der Schatten, den eine Kathete auf die Hypotenuse wirft, wenn Licht senkrecht entlang der Höhe einfällt.",
            },
            {
              "kind": "p",
              "text": "Die Projektion [[p]] liegt neben der Kathete AC, und die Projektion [[q]] liegt neben der Kathete BC. Da sie die beiden Teile der Hypotenuse sind, summieren sie sich exakt:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Dabei ist [[c]] die gesamte Hypotenuse. Diese Additionsbeziehung hilft beim Prüfen von Antworten und beim Wiederfinden einer fehlenden Projektion, wenn Hypotenuse und eine Projektion bekannt sind. Wenn Sie die umgekehrte Berechnung brauchen, also Projektionen aus Seitenlängen finden wollen, übernimmt der <a href=\"/right-triangle-projection-calculator/\">Projektionsrechner</a> diese Richtung.",
            },
            {
              "kind": "p",
              "text": "Beide Projektionen müssen positive Längen sein. Ein Wert von null oder negativ beschreibt kein echtes Dreieck, nur eine entartete Form. Und Projektionen sind nicht die Katheten selbst: Die Katheten AC und BC lehnen sich seitlich weg, während [[p]] und [[q]] flach entlang der Hypotenuse liegen. Sie zu verwechseln, ist einer der häufigsten Fehler von Schülern.",
            },
          ],
          "table": {
            "headers": [
              "Messgröße",
              "Bedeutung",
            ],
            "rows": [
              [
                "[[p]]",
                "Erstes Hypotenusensegment",
              ],
              [
                "[[q]]",
                "Zweites Hypotenusensegment",
              ],
              [
                "[[h]]",
                "Senkrechte Höhe",
              ],
              [
                "[[c]]",
                "Vollständige Hypotenuse",
              ],
              [
                "[[a]]",
                "Erste Dreieckskathete",
              ],
              [
                "[[b]]",
                "Zweite Dreieckskathete",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formel für die Höhe eines rechtwinkligen Dreiecks aus Projektionen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Höhensatz lautet:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Zieht man die positive Quadratwurzel auf beiden Seiten, erhält man die Arbeitsformel:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Jedes Symbol hat eine feste Bedeutung. Der Buchstabe [[h]] steht für die Höhe zur Hypotenuse, also die gesuchte Größe. Die Buchstaben [[p]] und [[q]] stehen für die beiden Hypotenusenprojektionen, also die einzugebenden Größen. Die Multiplikation verbindet die Projektionen, und die Quadratwurzel macht dieses Produkt rückgängig und liefert eine Länge.",
            },
            {
              "kind": "p",
              "text": "Die Multiplikation erscheint, weil die Ähnlichkeit zwischen den beiden kleinen Dreiecken das Verhältnis [[\\frac{h}{p}=\\frac{q}{h}]] erzeugt. Überkreuzmultiplikation dieses Verhältnisses ergibt [[h^2=p\\times q]]. Die Quadratwurzel erscheint, weil [[h]] eine Länge ist und nur die positive Wurzel aus [[h^2]] einen echten Abstand benennt.",
            },
            {
              "kind": "p",
              "text": "Die Einheiten verdienen Aufmerksamkeit. Wenn [[p]] und [[q]] beide in Zentimetern gemessen werden, liegt ihr Produkt in Quadratzentimetern, was für einen flächenartigen Zwischenschritt korrekt ist. Die Quadratwurzel verwandelt Quadratzentimeter zurück in schlichte Zentimeter für die endgültige Höhe. Deshalb müssen die beiden Eingaben dieselbe Einheit haben: Gemischte Einheiten würden Produkt und Antwort verfälschen. Eine kompakte Eselsbrücke für die Formel lautet: Die Höhe ist das geometrische Mittel der beiden Projektionen, denn das geometrische Mittel zweier Zahlen ist die Quadratwurzel ihres Produkts.",
            },
          ],
        },
        "sec-steps": {
          "h2": "So berechnen Sie die Höhe aus den Projektionen Schritt für Schritt",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie die beiden Hypotenusenprojektionen. Suchen Sie die Strecken, in die der Höhenfußpunkt die Hypotenuse teilt, und bezeichnen Sie die neben der Kathete AC als [[p]] und die neben der Kathete BC als [[q]].",
                "Vergewissern Sie sich, dass beide Messungen dieselbe Einheit verwenden. Wenn eine in Millimetern und die andere in Zentimetern vorliegt, rechnen Sie eine davon um, bevor Sie die Formel anfassen.",
                "Multiplizieren Sie [[p]] und [[q]]. Das Produkt [[h^2]] ist ein flächenartiger Zwischenwert, seine Einheit ist also das Quadrat der Eingabeeinheit.",
                "Ziehen Sie die positive Quadratwurzel des Produkts. Die negative Wurzel wird verworfen, weil eine Länge nicht negativ sein kann.",
                "Schreiben Sie die endgültige Antwort mit ihrer Einheit. Eine bloße Zahl lädt später zu Fehlern ein, besonders wenn sie in eine längere Rechnung einfließt.",
                "Prüfen Sie, ob die Antwort vernünftig ist. Die Höhe liegt immer zwischen den beiden Projektionen und kann niemals die halbe Hypotenuse überschreiten.",
              ],
            },
            {
              "kind": "p",
              "text": "Hier ist die Methode an einem vollständigen Beispiel angewendet. Angenommen, [[p=4\\text{ cm}]] und [[q=9\\text{ cm}]]. Zuerst multiplizieren: [[4\\times 9=36]], also [[h^2=36\\text{ cm}^2]]. Dann die positive Quadratwurzel ziehen:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt [[6\\text{ cm}]]. Als Plausibilitätsprüfung liegt [[6]] zwischen den Projektionen [[4]] und [[9]], was dem geometrischen Mittel entspricht, das später in dieser Anleitung beschrieben wird.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagramm der Höhe eines rechtwinkligen Dreiecks erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Dreieck ABC hat seinen rechten Winkel bei C. Von C fällt die Höhe CD senkrecht auf die Hypotenuse AB und trifft sie im Fußpunkt D. Die Strecke AD heißt [[p]], DB heißt [[q]], und CD heißt [[h]], während die Hypotenuse AB [[c]] ist und die Katheten AC und BC [[a]] und [[b]] sind.",
            },
            {
              "kind": "p",
              "text": "Zwei kleine Quadrate markieren die beiden rechten Winkel: eines bei C im ursprünglichen Dreieck und eines bei D, wo die Höhe auf die Hypotenuse trifft. Die Höhe CD erscheint als saubere innere Strecke, optisch deutlich getrennt von den beiden Katheten, die den äußeren Rahmen des Dreiecks bilden.",
            },
            {
              "kind": "p",
              "text": "Die Höhe teilt ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, die einander und dem ursprünglichen Dreieck ähnlich sind. In Schulbuchaufgaben werden Projektionen oft als die beiden Abschnitte der Hypotenuse beschrieben oder einfach als die Zahlen, die auf beiden Seiten des Höhenfußpunkts sitzen. Bezeichnen Sie sie als [[p]] und [[q]], bevor Sie etwas berechnen.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB, Projektionen AD = p und DB = q, Höhe CD = h",
            "caption": "Die Höhe CD teilt die Hypotenuse AB in die Projektionen [[p]] und [[q]]; [[h]] ist das geometrische Mittel von [[p]] und [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Warum funktioniert die Höhenformel? Beweis mit ähnlichen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Höhensatz ist keine Regel zum blinden Auswendiglernen. Er folgt aus der Ähnlichkeit der beiden Dreiecke, die die Höhe erzeugt.",
            },
            {
              "kind": "p",
              "text": "Im Dreieck ACD ergänzen sich die spitzen Winkel bei A und C zu 90 Grad, und im großen Dreieck ABC ergänzen sich die Winkel A und B ebenfalls zu 90 Grad. Also ist der Winkel bei C innerhalb von ACD gleich dem Winkel B, und der Winkel bei A gleich dem Winkel bei C innerhalb von CBD. Die beiden kleinen Dreiecke stimmen in allen drei Winkeln überein, was sie ähnlich macht.",
            },
            {
              "kind": "p",
              "text": "Ähnlichkeit bedeutet, dass einander entsprechende Seiten im selben Verhältnis bleiben. Im Dreieck ACD ist die dem Winkel A gegenüberliegende Seite die Höhe [[h]]. Im Dreieck CBD ist die dem gleichen Winkel bei C gegenüberliegende Seite die Projektion [[q]]. Das andere zusammengehörende Paar ist die Projektion [[p]] (gegenüber dem zweiten spitzen Winkel in ACD) zur Höhe [[h]] (gegenüber dem entsprechenden Winkel in CBD). Gleichsetzen ergibt das Verhältnis:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Überkreuzmultiplikation verwandelt das Verhältnis in:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ziehen der Quadratwurzel auf beiden Seiten ergibt [[h=\\sqrt{p\\times q}]]. Die Gleichung [[h^2=p\\times q]] hat zwei algebraische Wurzeln, positiv und negativ, aber eine Länge ist eine positive Größe, also beschreibt nur die positive Wurzel die Höhe.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Die beiden kleineren rechtwinkligen Dreiecke ACD und CBD mit entsprechend beschrifteten Seiten, die h/p=q/h zeigen",
            "caption": "Die Dreiecke ACD und CBD sind ähnlich, also gilt [[\\frac{h}{p}=\\frac{q}{h}]] und [[h]] zum Quadrat ist gleich [[p]] mal [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele zur Höhe aus Projektionen",
          "blocks": [
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=4\\text{ cm}]] und [[q=9\\text{ cm}]], in die Formel einsetzen:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt [[6\\text{ cm}]], eine ganze Zahl, weil [[36]] eine Quadratzahl ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Gleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=5\\text{ cm}]] und [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn die Projektionen gleich sind, entspricht die Höhe jeder Projektion: der Fall des gleichschenkligen rechtwinkligen Dreiecks, bei dem die Höhe genau die halbe Hypotenuse beträgt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Dezimale Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=3.6\\text{ m}]] und [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Dezimalzahlen ändern nichts: [[23.04]] ist eine Quadratzahl, die Höhe ist also exakt [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Ungleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=2\\text{ cm}]] und [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt [[6\\text{ cm}]], nicht [[10\\text{ cm}]]. Mitteln ergibt das arithmetische Mittel [[10]], aber die Höhe ist das geometrische Mittel, das bei ungleichen Eingaben niedriger ausfällt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Keine Quadratzahl",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=5\\text{ cm}]] und [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[35]] keine Quadratzahl, die exakte Antwort lautet also [[\\sqrt{35}\\text{ cm}]]. Verwenden Sie die Näherung [[5.916\\text{ cm}]] für praktisches Arbeiten, behalten Sie aber die exakte Form, wenn die Antwort in weitere Berechnungen einfließt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Unterschiedliche Eingabeeinheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p=40\\text{ mm}]] und [[q=9\\text{ cm}]]. Die Einheiten unterscheiden sich, also zuerst umrechnen: [[40\\text{ mm}=4\\text{ cm}]]. Dann:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Zuerst umrechnen ist der einzig sichere Weg: [[40]] und [[9]] direkt einzusetzen ergibt [[\\sqrt{40\\times 9}=\\sqrt{360}]], eine falsche und einheitenlose Zahl.",
            },
          ],
        },
        "sec-verify": {
          "h2": "So prüfen Sie Ihre Höhenberechnung",
          "blocks": [
            {
              "kind": "h3",
              "text": "Methode 1: Prüfung über das geometrische Mittel",
            },
            {
              "kind": "p",
              "text": "Quadrieren Sie Ihre Höhe und vergleichen Sie sie mit dem Produkt der Projektionen. Die beiden Werte müssen übereinstimmen. Für [[p=4]] und [[q=9]] mit [[h=6]]: [[6^2=36]] und [[4\\times 9=36]]. Übereinstimmung bestätigt die Rechnung.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Beziehungen zwischen Hypotenuse und Katheten",
            },
            {
              "kind": "p",
              "text": "Bauen Sie das ganze Dreieck nach und prüfen Sie mit einer zweiten Formel gegen. Addieren Sie zuerst die Projektionen: [[c=4+9=13]]. Gewinnen Sie dann die Katheten über die Projektions-Katheten-Beziehungen zurück: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] und [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Prüfen Sie nun mit [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], was übereinstimmt. Ein <a href=\"/right-triangle-side-calculator/\">Seitenrechner</a> hält die Kathetenrechnung beim Prüfen übersichtlich.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Dreiecksflächenbeziehung",
            },
            {
              "kind": "p",
              "text": "Dasselbe Dreieck hat zwei Ausdrücke für seine Fläche. Mit den Katheten: Fläche = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Mit Hypotenuse und Höhe: Fläche = [[(c\\times h)/2=(13\\times 6)/2=39]]. Beide Ausdrücke stimmen überein, was [[h=6]] unabhängig bestätigt. Das Werkzeug <a href=\"/right-triangle-area-from-altitude-calculator/\">Fläche aus Höhe</a> baut auf derselben Beziehung auf.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Beziehung zwischen Höhe, Hypotenuse und Dreiecksseiten",
          "blocks": [
            {
              "kind": "p",
              "text": "Fünf Formeln verbinden die sechs beschrifteten Teile. Die Tabelle unten fasst zusammen, was jede findet und was sie braucht.",
            },
            {
              "kind": "p",
              "text": "Die ersten vier Formeln brauchen mindestens eine Projektion. Sie stammen aus den ähnlichen Dreiecken, die die Höhe erzeugt, gelten also nur, wenn die Höhe vom Scheitel des rechten Winkels aus gezogen wird. Die fünfte Formel, [[h=ab/c]], braucht gar keine Projektionen: Sie kommt aus der Gleichsetzung der beiden Flächenausdrücke und funktioniert immer, wenn Katheten und Hypotenuse bekannt sind.",
            },
            {
              "kind": "p",
              "text": "Das ist der praktische Unterschied zwischen den beiden Höhenrechnern dieser Seite. Wenn Sie die Projektionen kennen, liefert der Höhensatz [[h]] direkt in einem Schritt. Wenn Sie stattdessen die Seiten kennen, nutzt <a href=\"/right-triangle-altitude-from-sides-calculator/\">Höhe aus den Seiten bestimmen</a> den Flächenweg. Wählen Sie das Werkzeug, das zu Ihren gegebenen Daten passt.",
            },
            {
              "kind": "p",
              "text": "Eine weitere nützliche Lesart von [[a^2=p\\times c]]: Jede Kathete ist das geometrische Mittel aus Hypotenuse und ihrer anliegenden Projektion, so wie die Höhe das geometrische Mittel der beiden Projektionen ist.",
            },
          ],
          "table": {
            "headers": [
              "Formel",
              "Findet",
              "Braucht",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "Die Hypotenuse",
                "Beide Projektionen",
              ],
              [
                "[[h^2=p\\times q]]",
                "Die Höhe",
                "Beide Projektionen",
              ],
              [
                "[[a^2=p\\times c]]",
                "Die Kathete neben der Projektion [[p]]",
                "Projektion [[p]] und die Hypotenuse",
              ],
              [
                "[[b^2=q\\times c]]",
                "Die Kathete neben der Projektion [[q]]",
                "Projektion [[q]] und die Hypotenuse",
              ],
              [
                "[[h=ab/c]]",
                "Die Höhe",
                "Beide Katheten und die Hypotenuse",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Satz vom geometrischen Mittel und Höhe des rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Das geometrische Mittel zweier positiver Zahlen ist die Quadratwurzel ihres Produkts. Für [[p]] und [[q]] ist es [[\\sqrt{p\\times q}]], also genau die Höhenformel. Zu sagen, die Höhe sei das geometrische Mittel der Projektionen, formuliert den Satz also nur mit anderen Worten neu.",
            },
            {
              "kind": "p",
              "text": "Das arithmetische Mittel ist der vertraute Durchschnitt: [[(p+q)/2]]. Für [[p=4]] und [[q=9]] beträgt das geometrische Mittel [[\\sqrt{36}=6]], während das arithmetische Mittel [[13/2=6.5]] beträgt. Die Höhe ist [[6]], nicht [[6.5]], weil das Ähnlichkeitsverhältnis eine multiplikative Beziehung erzwingt, keine additive.",
            },
            {
              "kind": "p",
              "text": "Das geometrische Mittel übersteigt bei positiven Eingaben niemals das arithmetische Mittel, Gleichheit nur bei [[p=q]]. Deshalb ist die Höhe relativ zur Hypotenuse am größten, wenn die Projektionen gleich sind. Ein Rechteck [[4]] mal [[9]] und ein Quadrat [[6]] mal [[6]] haben dieselbe Fläche [[36]]; das ist dieselbe Idee als Form gezeichnet: Die Höhe ist die Seite des Quadrats, dessen Fläche der des Rechtecks entspricht.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Rechteck 4 mal 9 und Quadrat 6 mal 6 mit gleicher Fläche, dazu ein Zahlenstrahl, der das geometrische Mittel 6 mit dem arithmetischen Mittel 6.5 vergleicht",
            "caption": "Für [[p=4]] und [[q=9]] liegt das geometrische Mittel [[6]] (die Höhe) unter dem arithmetischen Mittel [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Sonderfälle und wichtige Eigenschaften",
          "blocks": [
            {
              "kind": "h3",
              "text": "Gleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Wenn [[p=q]], entspricht die Höhe diesem gemeinsamen Wert: [[h=\\sqrt{p\\times p}=p]]. Der Höhenfußpunkt landet in der Mitte der Hypotenuse, die Katheten sind gleich, und das Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck mit 45-Grad-Spitzenwinkeln, was bei fester Hypotenuse die maximale Höhe ergibt.",
            },
            {
              "kind": "h3",
              "text": "Sehr ungleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Wenn [[p]] winzig und [[q]] riesig ist, bleibt die Höhe bescheiden: [[p=1]] und [[q=100]] ergeben [[h=10]], weit unter dem Mittelpunkt der Projektionen. Das geometrische Mittel gewichtet die kleine Eingabe stärker als ein Durchschnitt es täte.",
            },
            {
              "kind": "h3",
              "text": "Feste Hypotenuse",
            },
            {
              "kind": "p",
              "text": "Halten Sie die Hypotenuse [[c=p+q]] konstant und variieren Sie die Aufteilung. Das Produkt [[p\\times q]] und damit die Höhe erreicht sein Maximum bei gleichmäßiger Aufteilung. Algebraisch gilt [[h\\le\\frac{p+q}{2}]], mit Gleichheit genau bei [[p=q]]. Klar ausgedrückt: Keine Höhe kann ihre halbe Hypotenuse überschreiten.",
            },
            {
              "kind": "h3",
              "text": "Null-Projektionen",
            },
            {
              "kind": "p",
              "text": "Setzen Sie [[p=0]], erhalten Sie [[h=0]]: Der Höhenfußpunkt fällt mit dem Scheitel A zusammen, das Dreieck kollabiert zu einer Strecke, und es bleibt kein echtes Dreieck. Behandeln Sie Null-Projektionen als entartet, nicht als gültige Rechnereingabe.",
            },
            {
              "kind": "h3",
              "text": "Negative Projektionen",
            },
            {
              "kind": "p",
              "text": "Eine Projektion ist eine Länge, und Längen können nicht negativ sein. Eine negative Eingabe hat keine geometrische Bedeutung und liefert keine gültige Höhe; der Fehler liegt weiter vorn, in der Messung der Strecke.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Zwei rechtwinklige Dreiecke mit derselben Hypotenuse, aber unterschiedlicher Projektionsaufteilung, die verschiedene Höhen zeigen",
            "caption": "Gleiche Hypotenuse, unterschiedliche Aufteilungen: Gleiche Projektionen ergeben die höchste Höhe.",
          },
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Höhenbestimmung aus Projektionen",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Die Projektionen addieren statt sie zu multiplizieren. Das Ähnlichkeitsverhältnis verlangt ein Produkt: Bei [[p=4]] und [[q=9]] ist [[\\sqrt{4+9}\\approx 3.606]] falsch, während [[\\sqrt{4\\times 9}=6]] korrekt ist.",
                "Die Quadratwurzel vergessen. Bei [[h^2=36]] stehen zu bleiben, lässt eine flächenartige Zahl stehen, wo eine Länge hingehört. Ziehen Sie immer die positive Quadratwurzel, um fertig zu werden.",
                "Projektionen mit Dreieckskatheten verwechseln. Die Katheten lehnen sich von der Hypotenuse weg, während [[p]] und [[q]] flach auf ihr liegen; nur die Hypotenusensegmente gehören in den Höhensatz.",
                "Einheiten mischen ohne umzurechnen. Bei [[p=40\\text{ mm}]] und [[q=9\\text{ cm}]] zuerst umrechnen ([[40\\text{ mm}=4\\text{ cm}]]), dann [[h=\\sqrt{4\\times 9}=6\\text{ cm}]] berechnen.",
                "Negative Messungen eingeben. Eine negative Projektion ist bedeutungslos und kann imaginäre Ergebnisse erzeugen. Vergewissern Sie sich vor dem Rechnen, dass [[p]] und [[q]] beide positiv sind.",
                "[[h^2]] in längeren Lösungen als [[h]] weiterführen. Halten Sie die Bezeichnungen sauber: [[h^2=36]] ist der quadrierte Schritt, [[h=6]] ist die Höhe.",
                "Zu früh runden. Behalten Sie exakte Formen wie [[\\sqrt{35}]] so lange wie möglich bei und runden Sie nur die endgültige Antwort.",
                "Die Formel auf ein nicht rechtwinkliges Dreieck anwenden. Das Verhältnis [[\\frac{h}{p}=\\frac{q}{h}]] braucht den rechten Winkel bei C; ohne ihn bricht die Ähnlichkeitsargumentation zusammen und die Formel gilt nicht.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen des Höhensatzes",
          "blocks": [
            {
              "kind": "p",
              "text": "Geometrieklassen nutzen diesen Satz ständig. Höhenaufgaben prüfen, ob Schüler die Projektionen erkennen, die richtige Formel wählen und mit dem Satz des Pythagoras verifizieren können; und Schulbuchübungen übergeben die Projektionen oft als schlichte Zahlen auf einem beschrifteten Diagramm.",
            },
            {
              "kind": "p",
              "text": "In konstruktiven Geometrieaufgaben vervollständigt der Satz ein rechtwinkliges Dreieck, wenn nur Teilmessungen bekannt sind. Beim Entwerfen eines dreieckigen Fachwerks können zuerst die Hypotenusensegmente festliegen, wobei die Höhe die Firsthöhe bestimmt; und Ähnlichkeitsbeweise nutzen dasselbe Verhältnis [[\\frac{h}{p}=\\frac{q}{h}]] direkt.",
            },
            {
              "kind": "p",
              "text": "Vermessungs- und Ingenieursskizzen modellieren eine Sichtlinie manchmal als Höhe eines rechtwinkligen Dreiecks, wobei die Projektionen an einer Grundlinie abgelesen werden. Zwei beliebige Bodenabstände bestimmen allein noch keine Höhe; die rechtwinklige Geometrie muss wirklich gelten, bevor der Satz anwendbar ist.",
            },
            {
              "kind": "p",
              "text": "Architekturzeichnungen von Giebelwänden oder gefalteten Dächern nutzen dieselben Beziehungen, um ein fehlendes Maß wiederzugewinnen, vorausgesetzt, der rechte Winkel ist wirklich vorhanden.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "h3",
              "text": "Aufgabe 1: Anfänger",
            },
            {
              "kind": "p",
              "text": "Die Projektionen eines rechtwinkligen Dreiecks sind [[p=25\\text{ cm}]] und [[q=16\\text{ cm}]]. Finden Sie die Höhe.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Anfänger bis Fortgeschritten",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Projektionen [[p=12\\text{ m}]] und [[q=27\\text{ m}]]. Finden Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Fortgeschritten",
            },
            {
              "kind": "p",
              "text": "Der Höhenfußpunkt teilt die Hypotenuse in Segmente von [[7\\text{ in}]] und [[28\\text{ in}]]. Wie groß ist die Höhe?",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Dezimalzahlen",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Projektionen [[p=2.5\\text{ ft}]] und [[q=14.4\\text{ ft}]]. Berechnen Sie die Höhe.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Anwendung",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliger Dachstuhl hat ein Zugband als Hypotenuse. Der Höhenfußpunkt teilt das Zugband in Segmente von [[3.2\\text{ m}]] und [[12.8\\text{ m}]] auf. Bestimmen Sie die Höhe des Dachstuhls an der eingezeichneten Höhe.",
            },
            {
              "kind": "h3",
              "text": "Übungsaufgaben: Lösungen",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Eine Quadratwurzel, volles Verständnis",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Quadratwurzel fasst die ganze Idee zusammen: Die Höhe eines rechtwinkligen Dreiecks ist das geometrische Mittel der beiden Projektionen auf seine Hypotenuse. Multiplizieren Sie [[p]] und [[q]], ziehen Sie die positive Quadratwurzel und halten Sie die Einheiten konsistent, und die Antwort liegt vor.",
            },
            {
              "kind": "p",
              "text": "Hinter dieser kurzen Rechnung steckt ein sauberes Stück Geometrie. Die Höhe erzeugt zwei ähnliche Dreiecke, die Ähnlichkeit liefert das Verhältnis, und das Verhältnis liefert die Formel. Wenn Sie diese Kette sehen können, werden das Prüfen von Antworten, das Vermeiden von Fehlern und das Erkennen von Projektionen in neuen Aufgaben zur Routine.",
            },
          ],
        },
      },
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie lautet die Formel für die Höhe aus Projektionen?",
          "answer": "Die Formel lautet [[h=\\sqrt{p\\times q}]], wobei [[h]] die Höhe zur Hypotenuse und [[p]] und [[q]] die beiden Projektionen sind. Beide Projektionen müssen positive Längen in derselben Einheit sein. Multiplizieren Sie sie und ziehen Sie dann die positive Quadratwurzel. Das Ergebnis ist die Höhe in derselben Einheit wie die Eingaben.",
        },
        {
          "question": "Was sind Hypotenusenprojektionen?",
          "answer": "Die Projektionen sind die beiden Segmente, in die der Höhenfußpunkt die Hypotenuse teilt. Im Dreieck ABC mit rechtem Winkel bei C und Höhe CD ist die Strecke AD die Projektion [[p]] und DB die Projektion [[q]]. Zusammen ergeben sie die volle Hypotenuse, also [[p+q=c]]. Es sind flache Segmente entlang der Hypotenuse, nicht die Katheten des Dreiecks.",
        },
        {
          "question": "Warum ist die Höhe das geometrische Mittel zweier Projektionen?",
          "answer": "Weil die Höhe zwei ähnliche Dreiecke erzeugt. In den Dreiecken ACD und CBD ergeben entsprechende Seiten das Verhältnis [[\\frac{h}{p}=\\frac{q}{h}]]. Überkreuzmultiplikation liefert [[h^2=p\\times q]], also [[h=\\sqrt{p\\times q}]]. Da das geometrische Mittel zweier Zahlen die Quadratwurzel ihres Produkts ist, ist die Höhe genau das geometrische Mittel von [[p]] und [[q]].",
        },
        {
          "question": "Kann ich die Höhe finden, ohne die Dreiecksseiten zu kennen?",
          "answer": "Ja. Der Höhensatz braucht nur die beiden Projektionen, die Katheten sind als Eingabe überflüssig. Geben Sie [[p]] und [[q]] in den Rechner ein, und er liefert [[h]] direkt. Das ist der schnellste Weg, wenn ein Diagramm oder eine Aufgabenstellung die Hypotenusensegmente vorgibt. Wenn Sie stattdessen die Katheten kennen, gilt eine andere Formel, [[h=ab/c]].",
        },
        {
          "question": "Können die beiden Projektionen unterschiedliche Längen haben?",
          "answer": "Ja, und meist haben sie das. Die Projektionen sind zwei beliebige positive Längen, gleich oder ungleich, und die Formel verarbeitet beide. Mit [[p=2]] und [[q=18]] beträgt die Höhe [[6]] und liegt zwischen den beiden Werten. Gleiche Projektionen sind einfach der Sonderfall, der ein gleichschenkliges rechtwinkliges Dreieck erzeugt.",
        },
        {
          "question": "Was passiert, wenn beide Projektionen gleich sind?",
          "answer": "Wenn [[p=q]], entspricht die Höhe diesem gemeinsamen Wert, denn [[\\sqrt{p\\times p}=p]]. Der Höhenfußpunkt landet in der Mitte der Hypotenuse, und das Dreieck wird ein gleichschenkliges rechtwinkliges Dreieck mit zwei gleichen Katheten und [[45^\\circ]]-Spitzwinkeln. Bei fester Hypotenuse ergibt diese Aufteilung auch die größtmögliche Höhe.",
        },
        {
          "question": "Kann die Höhe länger sein als eine der Projektionen?",
          "answer": "Sie kann die kleinere Projektion übertreffen. Bei [[p=2]] und [[q=18]] beträgt die Höhe [[6]], was länger ist als [[p=2]]. Das geometrische Mittel liegt immer zwischen den beiden Eingaben, die Höhe fällt also zwischen [[p]] und [[q]]. Sie kann niemals die größere Projektion übertreffen und niemals die halbe Hypotenuse.",
        },
        {
          "question": "Was ist, wenn die Projektionen unterschiedliche Einheiten verwenden?",
          "answer": "Rechnen Sie eine davon um, sodass beide dieselbe Einheit haben, bevor Sie rechnen. Ändern Sie zum Beispiel [[40\\text{ mm}]] in [[4\\text{ cm}]], wenn die andere Projektion [[9\\text{ cm}]] beträgt, und berechnen Sie dann [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Einheiten zu mischen ohne umzurechnen verfälscht das Produkt. Der Rechner setzt passende Einheiten voraus, standardisieren Sie also immer zuerst.",
        },
        {
          "question": "Kann die Höhe größer sein als die halbe Hypotenuse?",
          "answer": "Nein. Für positive [[p]] und [[q]] übersteigt das geometrische Mittel niemals das arithmetische Mittel, also gilt [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. Die Höhe entspricht genau der halben Hypotenuse nur bei [[p=q]]. Jedes Rechnerergebnis, das größer als die halbe Hypotenuse ist, signalisiert einen Eingabe- oder Rechenfehler.",
        },
        {
          "question": "Wie prüfe ich meine Höhenberechnung?",
          "answer": "Quadrieren Sie die Höhe und vergewissern Sie sich, dass sie [[p\\times q]] entspricht. Für eine tiefere Prüfung bauen Sie das Dreieck nach: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], und verifizieren Sie dann [[h=ab/c]]. Sie können auch die beiden Flächenausdrücke [[(a\\times b)/2]] und [[(c\\times h)/2]] vergleichen, die übereinstimmen müssen. Bestehen alle drei Prüfungen, ist die Antwort solide.",
        },
        {
          "question": "Hängt der Höhensatz mit dem Satz des Pythagoras zusammen?",
          "answer": "Sie beschreiben dasselbe rechtwinklige Dreieck aus unterschiedlichen Blickwinkeln. Der Höhensatz kommt aus der Ähnlichkeit, während der Satz des Pythagoras die drei Seiten verknüpft: [[a^2+b^2=c^2]]. Sie stützen einander: Bei [[p=4]] und [[q=9]] erfüllen die Katheten [[\\sqrt{52}]] und [[\\sqrt{117}]] die Gleichung [[52+117=169=13^2]], was das Dreieck bestätigt, das der Höhensatz beschreibt.",
        },
        {
          "question": "Kann ich diese Formel für ein nicht rechtwinkliges Dreieck verwenden?",
          "answer": "Nein. Das Verhältnis [[\\frac{h}{p}=\\frac{q}{h}]] hängt von den ähnlichen Dreiecken ab, die eine vom Scheitel des rechten Winkels gefällte Höhe erzeugt. Ohne diesen rechten Winkel versagt die Ähnlichkeitsargumentation, und [[h^2=p\\times q]] gilt nicht. Für allgemeine Dreiecke verwenden Sie stattdessen flächenbasierte oder trigonometrische Höhenformeln, die zu den gegebenen Daten passen.",
        },
      ],
      "relatedHeading": "Verwandte rechtwinklige Dreiecksrechner entdecken",
      "relatedIntro": "Diese Werkzeuge übernehmen die Nachbarberechnungen: Projektionen finden, Höhe aus Seitenlängen finden und eine Höhe in eine Fläche verwandeln. Jedes passt natürlich zum Höhensatz auf dieser Seite.",
      "relatedItems": [
        "Rechtwinkliger Dreiecks-Höhenrechner",
        "Rechner: Höhe eines rechtwinkligen Dreiecks aus Seiten",
        "Rechtwinkliger Dreiecks-Projektionsrechner",
        "Rechner: Fläche eines rechtwinkligen Dreiecks aus Höhe",
        "Rechtwinkliger Dreiecks-Seitenrechner",
      ],
    },
};
