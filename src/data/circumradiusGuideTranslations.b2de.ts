// circumradiusGuideTranslations.bde.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B2_DE = {
  "de": {
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "Umkreisradius-Rechner für rechtwinklige Dreiecke",
        "sec-calculate": "Den Umkreisradius eines rechtwinkligen Dreiecks berechnen",
        "sec-what-circumradius": "Was ist der Umkreisradius eines rechtwinkligen Dreiecks?",
        "sec-circumcircle": "Was ist ein Umkreis in der Geometrie rechtwinkliger Dreiecke?",
        "sec-formula": "Formel für den Umkreisradius eines rechtwinkligen Dreiecks",
        "sec-why-diameter": "Warum ist die Hypotenuse der Durchmesser des Umkreises?",
        "sec-circumcenter": "Was ist der Umkreismittelpunkt eines rechtwinkligen Dreiecks?",
        "sec-how-to-use": "So verwenden Sie den Umkreisradius-Rechner für rechtwinklige Dreiecke",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Bestimmung des Umkreisradius",
        "sec-diagram": "Diagramm des Umkreises eines rechtwinkligen Dreiecks erklärt",
        "sec-proof": "Warum funktioniert die Umkreisradius-Formel?",
        "sec-thales": "Den Satz des Thales und den Umkreis verstehen",
        "sec-examples": "Durchgerechnete Beispiele zur Berechnung des Umkreisradius eines rechtwinkligen Dreiecks",
        "sec-legs-known": "So finden Sie den Umkreisradius, wenn die beiden Katheten bekannt sind",
        "sec-diameter": "Beziehung zwischen Umkreisradius und Durchmesser",
        "sec-vs-inradius": "Umkreisradius im Vergleich zum Inkreisradius eines rechtwinkligen Dreiecks",
        "sec-pythagoras": "Beziehung zwischen Umkreisradius und dem Satz des Pythagoras",
        "sec-verify": "So überprüfen Sie Ihre Umkreisradius-Berechnung",
        "sec-properties": "Wichtige Eigenschaften des Umkreisradius bei rechtwinkligen Dreiecken",
        "sec-mistakes": "Häufige Fehler bei der Berechnung des Umkreisradius",
        "sec-applications": "Praktische Anwendungen des Umkreisradius",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "Umkreisradius-Rechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Finden Sie den Umkreisradius eines rechtwinkligen Dreiecks mit einer einzigen Division: halbieren Sie die Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Umkreisradius ist der Radius des Kreises, der durch alle drei Eckpunkte des Dreiecks verläuft und Umkreis genannt wird. Die Hypotenuse c ist die Seite gegenüber dem rechten Winkel, und sie ist die einzige Messung, die dieser Rechner benötigt, weil die Hypotenuse zugleich der Durchmesser des Umkreises ist. Die Formel lautet [[R = \\frac{c}{2}]], wobei [[R]] der Umkreisradius und [[c]] die vollständige Hypotenuse ist.",
            },
            {
              "kind": "p",
              "text": "Wenn zum Beispiel [[c = 10]] cm gilt, dann ist [[R = \\frac{10}{2} = 5]] cm. Diese 5 cm sind der Abstand vom Mittelpunkt des Umkreises zu jedem Eckpunkt des Dreiecks. Derselbe Abstand erreicht Eckpunkt A, Eckpunkt B und Eckpunkt C, und genau dadurch verläuft der Kreis durch alle drei.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Den Umkreisradius eines rechtwinkligen Dreiecks berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite hat ein Eingabefeld für die Hypotenuse c. Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, und sie ist zugleich die längste Seite des Dreiecks. Messen Sie sie von einem Ende zum anderen, in der Einheit, die Sie verwenden, und geben Sie diese eine Zahl ein.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse allein genügt, weil der Umkreisradius von nichts anderem abhängt. Deshalb benötigt der Rechner keine zweite oder dritte Eingabe.",
            },
            {
              "kind": "p",
              "text": "Geben Sie eine positive Länge ein. Eine Hypotenuse von null oder eine negative Zahl beschreibt kein echtes Dreieck, und der Rechner hat nichts Sinnvolles zu halbieren. Halten Sie die Einheit konsistent mit Ihrer Aufgabe: Wenn c in Zentimetern angegeben ist, lautet die Antwort in Zentimetern, und wenn c in Metern angegeben ist, lautet die Antwort in Metern.",
            },
            {
              "kind": "p",
              "text": "Klicken Sie auf „Umkreisradius R berechnen“, um das Ergebnis zu sehen, und verwenden Sie „Zurücksetzen“, um das Feld vor einer neuen Aufgabe zu leeren. Lesen Sie die Antwort als Radius, nicht als Durchmesser. Wenn der Rechner bei einer Hypotenuse von 10 cm 5 cm anzeigt, beträgt der volle Kreisdurchmesser 10 cm, und 5 cm ist der Abstand von seinem Mittelpunkt zu seinem Rand.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Was ist der Umkreisradius eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Umkreisradius eines rechtwinkligen Dreiecks ist der Radius seines Umkreises, des Kreises, der durch alle drei Eckpunkte verläuft. Nehmen Sie das Dreieck ABC mit dem rechten Winkel bei C. Zeichnen Sie einen Kreis, der genau durch A, B und C verläuft. Der Abstand vom Mittelpunkt dieses Kreises zu einem der drei Eckpunkte ist der Umkreisradius, geschrieben [[R]].",
            },
            {
              "kind": "p",
              "text": "Der Mittelpunkt des Kreises heißt Umkreismittelpunkt und wird mit [[O]] bezeichnet. In einem rechtwinkligen Dreieck liegt [[O]] im Mittelpunkt der Hypotenuse AB. Weil [[O]] der Mittelpunkt ist, sind die Abstände von [[O]] zu den drei Eckpunkten alle gleich, also [[AO = BO = CO = R]]. Eine Zahl, [[R]], beschreibt alle drei Abstände zugleich.",
            },
            {
              "kind": "p",
              "text": "Ein einfaches Beispiel macht das konkret. In einem 6-8-10-Dreieck beträgt die Hypotenuse 10 cm, also ist der Umkreisradius 5 cm. Der Mittelpunkt liegt 5 cm von A, 5 cm von B und 5 cm von C entfernt. Die Katheten, 6 cm und 8 cm, sind Seiten des Dreiecks, keine Radien, und keine von beiden ist hier gleich dem Umkreisradius.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Rechtwinkliges Dreieck ABC in seinem Umkreis mit Mittelpunkt O im Mittelpunkt der Hypotenuse AB",
            "caption": "Dreieck ABC in seinem Umkreis: O ist der Mittelpunkt, und AO, BO und CO sind jeweils gleich R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Was ist ein Umkreis in der Geometrie rechtwinkliger Dreiecke?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Umkreis ist ein Kreis, der durch jeden Eckpunkt eines Vielecks verläuft. Bei einem Dreieck bedeutet das, dass der Kreis durch alle drei Ecken verläuft und sonst nichts von ihm verlangt wird. Jedes Dreieck hat genau einen Umkreis, weil drei nicht kollineare Punkte einen einzigen Kreis bestimmen.",
            },
            {
              "kind": "p",
              "text": "In einem rechtwinkligen Dreieck hat der Umkreis eine besondere Form. Das Dreieck liegt im Kreis, wobei seine Hypotenuse gerade durch die Mitte verläuft, von einer Seite des Kreises zur anderen. Der dritte Eckpunkt, der Eckpunkt C mit dem rechten Winkel, liegt auf dem Kreis zwischen ihnen. Kein Teil des Dreiecks ragt über den Kreis hinaus, und der Kreis ist der kleinste, der durch alle drei Eckpunkte verlaufen kann.",
            },
            {
              "kind": "p",
              "text": "Der Umkreis unterscheidet sich vom Inkreis. Der Inkreis liegt innerhalb des Dreiecks und berührt alle drei Seiten von innen. Der Umkreis umgibt das Dreieck und berührt es nur an den drei Eckpunkten. Die Verwechslung der beiden Kreise ist die häufigste Verwirrung auf dieser Seite, und der Vergleichsabschnitt weiter unten stellt sie einander gegenüber.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Formel für den Umkreisradius eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel für den Umkreisradius eines rechtwinkligen Dreiecks ist kurz genug, um sie auf einen Blick zu merken:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[R]] der Umkreisradius, der Radius des Umkreises, und [[c]] die vollständige Hypotenuse, die Seite gegenüber dem rechten Winkel. Die Formel besagt: Nehmen Sie die Hypotenuse und teilen Sie sie durch zwei.",
            },
            {
              "kind": "p",
              "text": "Die Berechnung hat zwei Schritte. Erstens bestimmen Sie die Hypotenuse richtig. Sie ist die Seite gegenüber dem rechten Winkel, und sie ist immer die längste Seite. Zweitens teilen Sie ihre Länge durch zwei. Es gibt kein Quadrieren, keine Quadratwurzel und keine zweite Messung, die zuerst gefunden werden muss, sofern die Hypotenuse bereits bekannt ist.",
            },
            {
              "kind": "p",
              "text": "Der Grund, warum die Division funktioniert, ist, dass die Hypotenuse der Durchmesser des Umkreises ist. Ein Radius ist immer halb so groß wie ein Durchmesser, also [[R = \\frac{D}{2}]], wobei [[D]] der Durchmesser ist. In einem rechtwinkligen Dreieck gilt [[D = c]], also ergibt das Einsetzen [[R = \\frac{c}{2}]]. Die Formel ist in Wirklichkeit die bekannte Beziehung zwischen Radius und Durchmesser, angewendet auf einen Durchmesser, der zufällig eine Seite des Dreiecks ist.",
            },
            {
              "kind": "p",
              "text": "Für ein allgemeines Dreieck, das nicht unbedingt rechtwinklig ist, folgt der Umkreisradius der Formel [[R = \\frac{abc}{4A}]], wobei [[a]], [[b]] und [[c]] die drei Seiten und [[A]] der Flächeninhalt des Dreiecks sind. Für ein rechtwinkliges Dreieck vereinfacht sie sich zu [[R = \\frac{c}{2}]], weil der Flächeninhalt [[A = \\frac{ab}{2}]] beträgt. Verwenden Sie die allgemeine Formel nur für Dreiecke, die nicht rechtwinklig sind.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Warum ist die Hypotenuse der Durchmesser des Umkreises?",
          "blocks": [
            {
              "kind": "p",
              "text": "Dies ist die Idee, um die sich die ganze Seite dreht, also verdient sie einen genauen Blick. Nehmen Sie das rechtwinklige Dreieck ABC mit dem rechten Winkel bei C, und sei [[O]] der Mittelpunkt der Hypotenuse AB. Die Behauptung ist, dass [[O]] von allen drei Eckpunkten gleich weit entfernt ist, was ihn zum Mittelpunkt des Umkreises macht, und dass AB, das durch [[O]] verläuft und beide Enden auf dem Kreis hat, ein Durchmesser ist.",
            },
            {
              "kind": "p",
              "text": "Die entscheidende Tatsache ist die Mittelpunkteigenschaft eines rechtwinkligen Dreiecks: Der Mittelpunkt der Hypotenuse ist von allen drei Eckpunkten gleich weit entfernt. In Symbolen ausgedrückt: [[OA = OB = OC]]. Da [[O]] der Mittelpunkt von AB ist, sind [[OA]] und [[OB]] jeweils halb so groß wie die Hypotenuse, also [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Warum ist [[OC]] gleich der halben Hypotenuse? Eine Möglichkeit, das zu sehen, ist, das Rechteck zu vervollständigen. Zeichnen Sie eine Kopie des Dreiecks ABC, die um eine halbe Drehung um [[O]] gedreht ist, sodass die beiden Dreiecke zusammen ein Rechteck mit AB als einer Diagonale bilden. Die Diagonalen eines Rechtecks sind gleich lang und halbieren einander, also gilt auch [[OC = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Sobald [[OA = OB = OC]] feststeht, folgt der Rest. Ein Kreis mit Mittelpunkt [[O]] und Radius [[\\frac{c}{2}]] verläuft durch A, B und C, also ist er der Umkreis, [[O]] ist der Umkreismittelpunkt und [[\\frac{c}{2}]] ist der Umkreisradius. Da A und B gegenüberliegende Enden einer Geraden durch den Mittelpunkt sind, ist AB ein Durchmesser, also [[AB = 2R]], was [[c = 2R]] und damit [[R = \\frac{c}{2}]] bedeutet.",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Hypotenuse AB als Durchmesser des Umkreises dargestellt, wobei AO und OB gleich R sind",
            "caption": "Die Hypotenuse AB ist der Durchmesser: AO und OB sind jeweils gleich R, und AB ist gleich 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Was ist der Umkreismittelpunkt eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Umkreismittelpunkt eines Dreiecks ist der Punkt, der von allen drei Eckpunkten gleich weit entfernt ist, und er ist der Mittelpunkt des Umkreises. Man findet ihn dort, wo sich die Mittelsenkrechten der Seiten treffen.",
            },
            {
              "kind": "p",
              "text": "Bei einem rechtwinkligen Dreieck treffen sich die Mittelsenkrechten in einem Punkt, den Sie finden können, ohne sie zu zeichnen: im Mittelpunkt der Hypotenuse. Halbieren Sie AB, und Sie haben den Umkreismittelpunkt [[O]]. Das Halbieren einer Kathete ergibt eine Gerade, die durch denselben Punkt verläuft, was eine nützliche Prüfung ist, wenn Sie den Mittelpunkt mit Zirkel und Lineal konstruieren.",
            },
            {
              "kind": "p",
              "text": "Der Umkreismittelpunkt liegt auf der Hypotenuse selbst, genau in ihrer Mitte. Das ist die besondere Eigenschaft rechtwinkliger Dreiecke. In einem spitzwinkligen Dreieck sind alle drei Winkel kleiner als 90 Grad, und der Umkreismittelpunkt liegt innerhalb des Dreiecks. Das rechtwinklige Dreieck ist der Grenzfall, bei dem der Mittelpunkt auf dem Rand des Dreiecks liegt, auf seiner längsten Seite.",
            },
            {
              "kind": "p",
              "text": "Der Umkreismittelpunkt ist nicht der Eckpunkt mit dem rechten Winkel. Eckpunkt C ist ein Punkt auf dem Kreis, im Abstand [[R]] von [[O]], während [[O]] der Mittelpunkt ist. Die Verwechslung der beiden ist ein häufiger Fehler, weil C die optisch auffälligste Ecke des Dreiecks ist. Denken Sie daran, dass der Mittelpunkt von A, B und C gleich weit entfernt sein muss, und C ist von A und B nicht gleich weit entfernt, es sei denn, das Dreieck ist in einer bestimmten Weise gleichschenklig, also kann C im Allgemeinen nicht der Mittelpunkt sein.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Umkreismittelpunkt O im Mittelpunkt der Hypotenuse, gleich weit von allen drei Eckpunkten entfernt",
            "caption": "O ist der Mittelpunkt von AB, wobei OA, OB und OC alle gleich R sind.",
          },
        },
        "sec-how-to-use": {
          "h2": "So verwenden Sie den Umkreisradius-Rechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Neun kurze Schritte führen Sie von einem beschrifteten Dreieck zu einer geprüften Antwort. Die Katheten werden an keiner Stelle benötigt, weil die Hypotenuse allein den Umkreisradius bestimmt.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie das rechtwinklige Dreieck in Ihrer Aufgabe und vergewissern Sie sich, dass es einen rechten Winkel hat.",
                "Finden Sie den rechten Winkel, der gewöhnlich mit einem kleinen Quadrat am Eckpunkt C markiert ist.",
                "Bestimmen Sie die Seite gegenüber dem rechten Winkel; diese Seite ist die Hypotenuse c.",
                "Vergewissern Sie sich, dass diese Seite die längste Seite des Dreiecks ist. Wenn sie es nicht ist, beschriften Sie das Diagramm neu, bevor Sie fortfahren.",
                "Wählen Sie die passende Einheit und rechnen Sie alle Messungen so um, dass sie alle dieselbe Einheit verwenden.",
                "Geben Sie die Länge der Hypotenuse in das Feld „Hypotenuse c“ ein.",
                "Klicken Sie auf „Umkreisradius R berechnen“ und lesen Sie das Ergebnis ab.",
                "Prüfen Sie das Ergebnis: Es muss positiv sein, in derselben Einheit wie c angegeben sein und genau die Hälfte von c betragen.",
                "Verwenden Sie „Zurücksetzen“, wenn Sie eine weitere Berechnung beginnen.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn Ihre Aufgabe statt der Hypotenuse die beiden Katheten angibt, finden Sie zuerst c mit dem Satz des Pythagoras, [[c = \\sqrt{a^2 + b^2}]], und geben Sie dann diesen Wert ein. Der <a href=\"/right-triangle-side-calculator/\">Rechner für die Seiten eines rechtwinkligen Dreiecks</a> kann die fehlende Hypotenuse für Sie finden, und der Abschnitt über Katheten weiter unten arbeitet ein vollständiges Beispiel durch.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Bestimmung des Umkreisradius",
          "blocks": [
            {
              "kind": "p",
              "text": "Verwenden Sie [[c = 10]] cm. Die drei Schritte unten zeigen die vollständige Rechnung, ohne dass etwas übersprungen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Schreiben Sie die Formel auf: [[R = \\frac{c}{2}]].",
                "Setzen Sie den bekannten Wert ein: [[R = \\frac{10}{2}]].",
                "Dividieren Sie: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 5 cm bedeutet, dass der Umkreis einen Radius von 5 cm hat. Sein Mittelpunkt, der Mittelpunkt der Hypotenuse, liegt 5 cm von jedem Eckpunkt des Dreiecks entfernt, und der Kreis verläuft durch alle drei Eckpunkte. Der Durchmesser des Kreises beträgt 10 cm, genauso viel wie die Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Überprüfen Sie die Antwort mit der Durchmesserbeziehung [[2R = c]]. Das Verdoppeln des Radius ergibt [[2 \\times 5 = 10]] cm, was genau der Hypotenuse entspricht. Wenn das Verdoppeln Ihrer Antwort nicht die Hypotenuse ergibt, mit der Sie begonnen haben, ist bei der Division etwas schiefgegangen, und die Prüfung deckt das sofort auf.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Durchgerechnetes Beispiel mit Hypotenuse 10 cm und Umkreisradius 5 cm innerhalb des Umkreises",
            "caption": "Durchgerechnetes Beispiel: c = 10 cm ergibt R = 5 cm, und 2 mal 5 cm ergibt 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Diagramm des Umkreises eines rechtwinkligen Dreiecks erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Diagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist die Kathete a, die Seite BC ist die Kathete b, und die Seite AB ist die Hypotenuse c. Der Punkt [[O]] markiert den Mittelpunkt von AB, und ein Kreis mit Mittelpunkt [[O]] verläuft durch A, B und C.",
            },
            {
              "kind": "p",
              "text": "Lesen Sie das Diagramm in dieser Reihenfolge. Beginnen Sie bei A, gehen Sie entlang der Kathete a nach C, dann entlang der Kathete b nach B, dann zurück entlang der Hypotenuse von B nach A und dabei durch [[O]]. Die Strecken von [[O]] nach A, B und C sind alle Radien, die jeweils mit [[R]] bezeichnet sind.",
            },
            {
              "kind": "p",
              "text": "Die Strecke AB verläuft durch den Mittelpunkt [[O]] und hat beide Endpunkte auf dem Kreis, was die Definition eines Durchmessers ist. Deshalb ist AB als gerade Linie durch die Mitte des Kreises gezeichnet und nicht als Sehne abseits der Mitte. Der rechte Winkel bei C liegt auf dem Kreis selbst, was das Bild ist, das der Satz des Thales beschreibt.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Warum funktioniert die Umkreisradius-Formel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis verwendet den Mittelpunkt der Hypotenuse und die Tatsache, dass er von allen drei Eckpunkten gleich weit entfernt ist. Sei [[M]] der Mittelpunkt von AB im rechtwinkligen Dreieck ABC, mit dem rechten Winkel bei C. Dann gilt [[AM = BM = \\frac{c}{2}]] nach der Definition eines Mittelpunkts. Der Schritt, der bewiesen werden muss, ist [[MA = MB = MC]], die Behauptung, dass der dritte Abstand mit den ersten beiden übereinstimmt.",
            },
            {
              "kind": "p",
              "text": "Eine saubere Möglichkeit, das zu zeigen, besteht darin, die Seitenhalbierende CM zu einem Punkt D zu verlängern, sodass [[MD = MC]] gilt, und D mit A und B zu verbinden. Das Viereck ACBD hat die Diagonalen AB und CD, die einander in [[M]] halbieren, also ist es ein Parallelogramm. Sein Winkel bei C ist ein rechter Winkel, und ein Parallelogramm mit einem rechten Winkel ist ein Rechteck, also ist ACBD ein Rechteck.",
            },
            {
              "kind": "p",
              "text": "Die Diagonalen eines Rechtecks sind gleich lang, also [[CD = AB = c]]. Da [[M]] CD halbiert, gilt [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Das stimmt mit [[MA]] und [[MB]] überein, also [[MA = MB = MC = \\frac{c}{2}]]. Der Punkt [[M]] ist von A, B und C gleich weit entfernt, was ihn zum Umkreismittelpunkt macht, und der gemeinsame Abstand [[\\frac{c}{2}]] ist der Umkreisradius. Daher gilt [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Den Satz des Thales und den Umkreis verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Satz des Thales besagt, dass ein Winkel, der von einem Durchmesser an einem Punkt auf einem Kreis aufgespannt wird, ein rechter Winkel ist. Im Bild ist AB ein Durchmesser eines Kreises, und C ist ein beliebiger Punkt auf dem Kreis außer A oder B. Dann beträgt der Winkel ACB 90 Grad. Der Satz ist nach Thales von Milet benannt, dem der erste bekannte Beweis dafür zugeschrieben wird.",
            },
            {
              "kind": "p",
              "text": "Die Umkehrung ist das, was diese Seite verwendet: Wenn ein Dreieck einen rechten Winkel hat, kann seine Hypotenuse als Durchmesser eines Kreises behandelt werden, der durch alle drei Eckpunkte verläuft. Nehmen Sie das Dreieck ABC mit einem Winkel C von 90 Grad. Die Umkehrung besagt, dass C auf dem Kreis mit dem Durchmesser AB liegt, also ist dieser Kreis der Umkreis des Dreiecks, und sein Radius ist die Hälfte von AB.",
            },
            {
              "kind": "p",
              "text": "Die beiden Richtungen zusammen ergeben einen vollständigen Test. Ein Punkt C auf dem Kreis mit dem Durchmesser AB ergibt immer einen rechten Winkel bei C, und ein rechter Winkel bei C setzt C immer auf diesen Kreis.",
            },
            {
              "kind": "p",
              "text": "Der Satz erklärt auch die Lage des Umkreismittelpunkts. Der Mittelpunkt des Kreises ist der Mittelpunkt seines Durchmessers, und der Durchmesser ist die Hypotenuse, also ist der Mittelpunkt der Mittelpunkt der Hypotenuse. Sonst muss nichts über das Dreieck bekannt sein. Deshalb fragt der Rechner nur nach einer einzigen Zahl.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagramm zum Satz des Thales mit Durchmesser AB und Punkt C auf dem Kreis, die einen rechten Winkel bilden",
            "caption": "Satz des Thales: AB ist der Durchmesser, C liegt auf dem Kreis, und der Winkel C beträgt 90 Grad.",
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele zur Berechnung des Umkreisradius eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahl",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 10]] cm, die Formel ergibt [[R = \\frac{10}{2} = 5]] cm. Der Umkreis hat einen Durchmesser von 10 cm und einen Radius von 5 cm, und sein Mittelpunkt ist der Mittelpunkt der Hypotenuse, 5 cm von jedem Eckpunkt entfernt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Größere Messung",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 24]] m, also [[R = \\frac{24}{2} = 12]] m. Größere Zahlen ändern nichts an der Methode: Halbieren Sie die Hypotenuse und behalten Sie die Einheit bei. Ein Kreis mit 24 m Durchmesser hat einen Radius von 12 m.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Dezimale Messung",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 7.5]] cm, also [[R = \\frac{7.5}{2} = 3.75]] cm. Eine dezimale Hypotenuse ergibt einen dezimalen Umkreisradius, was normal ist. Prüfen Sie ihn durch Verdoppeln: [[2 \\times 3.75 = 7.5]] cm, was wieder die Hypotenuse ergibt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Ungerade Hypotenuse",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 13]] cm, also [[R = \\frac{13}{2} = 6.5]] cm. Eine ungerade ganze Zahl halbiert ergibt eine Zahl, die auf .5 endet. Dies ist das 5-12-13-Dreieck, dessen Katheten 5 cm und 12 cm betragen, da [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]] gilt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Messung in Millimetern",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 180]] mm, also [[R = \\frac{180}{2} = 90]] mm. Kleine Einheiten funktionieren genauso, und wenn Sie die Einheit Millimeter durchgehend beibehalten, vermeiden Sie jede Umrechnung. In Zentimetern lautet dieselbe Antwort 9 cm, da 90 mm gleich 9 cm sind.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Messung als Bruch",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = \\frac{15}{2}]] ft, also [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, was 3.75 ft entspricht. Die Division durch 2 bedeutet, den Nenner mit 2 zu multiplizieren, also wächst der Nenner von 2 auf 4. Die Dezimalform, 3.75 ft, ist dieselbe Antwort, anders geschrieben.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Verschiedene Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 1.2]] m, also [[R = \\frac{1.2}{2} = 0.6]] m. Umgerechnet in Zentimeter entsprechen 0.6 m 60 cm, weil 1 m 100 cm sind. Beide Einheiten sind richtig, aber die Antwort muss angeben, welche sie verwendet.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Große dezimale Messung",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 125.6]] m, also [[R = \\frac{125.6}{2} = 62.8]] m. Das Verdoppeln von 62.8 ergibt wieder 125.6, was die Division bestätigt.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "So finden Sie den Umkreisradius, wenn die beiden Katheten bekannt sind",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite fragt nach der Hypotenuse, aber viele Aufgaben geben stattdessen die beiden Katheten an. In diesem Fall finden Sie zuerst die Hypotenuse mit dem Satz des Pythagoras und halbieren sie dann. Die beiden Schritte lassen sich zu einer Formel zusammenfassen: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], wobei [[a]] und [[b]] die Katheten sind.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 6]] cm und [[b = 8]] cm. Quadrieren Sie zuerst beide Katheten und addieren Sie sie: [[a^2 + b^2 = 36 + 64 = 100]]. Ziehen Sie dann die Quadratwurzel, um die Hypotenuse zu erhalten: [[c = \\sqrt{100} = 10]] cm. Halbieren Sie sie dann: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Der <a href=\"/pythagorean-theorem-calculator/\">Rechner zum Satz des Pythagoras</a> findet eine fehlende Hypotenuse aus zwei Katheten, was derselbe erste Schritt ist, der hier verwendet wird. Der <a href=\"/right-triangle-area-calculator/\">Flächenrechner für rechtwinklige Dreiecke</a> verwendet dieselben beiden Katheten auf andere Weise und berechnet [[A = \\frac{ab}{2}]], was für das 6-8-10-Dreieck 24 Quadratzentimeter ergibt.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Beziehung zwischen Umkreisradius und Durchmesser",
          "blocks": [
            {
              "kind": "p",
              "text": "Radius und Durchmesser beschreiben denselben Kreis auf zwei Arten. Der Durchmesser [[D]] ist der Abstand gerade durch den Kreis über seinen Mittelpunkt, und der Radius [[R]] ist der Abstand vom Mittelpunkt zum Rand, also [[D = 2R]] und [[R = \\frac{D}{2}]]. Das Verdoppeln eines Radius ergibt den Durchmesser, und das Halbieren eines Durchmessers ergibt den Radius.",
            },
            {
              "kind": "p",
              "text": "Bei einem rechtwinkligen Dreieck hat der Durchmesser eine zweite Identität: Er ist gleich der Hypotenuse. Die Hypotenuse erstreckt sich über den Umkreis von einer Seite zur anderen, durch den Mittelpunkt, also [[D = c]]. Die Kombination der beiden Beziehungen ergibt [[c = 2R]] und [[R = \\frac{c}{2}]], was die Formel ist, auf der diese Seite aufbaut.",
            },
            {
              "kind": "p",
              "text": "Ein Zahlenbeispiel hält die drei Längen auseinander. In einem Dreieck mit [[c = 18]] cm beträgt der Durchmesser [[D = 18]] cm und der Umkreisradius [[R = 9]] cm. Die Hypotenuse, 18 cm, und der Durchmesser, 18 cm, sind dieselbe Linie, gemessen in zwei Rollen, während der Radius, 9 cm, die Hälfte dieser Linie ist.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Umkreisradius im Vergleich zum Inkreisradius eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Umkreisradius und der Inkreisradius sind die beiden Radien eines rechtwinkligen Dreiecks, und sie beschreiben zwei verschiedene Kreise. Der Umkreisradius [[R]] ist der Radius des Umkreises, der durch alle drei Eckpunkte verläuft. Der Inkreisradius [[r]] ist der Radius des Inkreises, der innerhalb des Dreiecks liegt und alle drei Seiten berührt. Ein Kreis umgibt das Dreieck, der andere liegt in ihm.",
            },
            {
              "kind": "p",
              "text": "Bei einem rechtwinkligen Dreieck beträgt der Umkreisradius [[R = \\frac{c}{2}]], während der Inkreisradius [[r = \\frac{a + b - c}{2}]] beträgt, wobei [[a]] und [[b]] die Katheten und [[c]] die Hypotenuse sind. Der Umkreisradius benötigt nur die Hypotenuse; der Inkreisradius benötigt alle drei Seiten, weil es davon abhängt, wie eng der Inkreis passt, wie das Dreieck geformt ist, nicht nur von seiner längsten Seite.",
            },
            {
              "kind": "p",
              "text": "Auch die Mittelpunkte unterscheiden sich. Der Umkreismittelpunkt ist der Mittelpunkt der Hypotenuse, auf dem Rand des Dreiecks. Der Inkreismittelpunkt liegt innerhalb des Dreiecks, dort, wo sich die Winkelhalbierenden treffen, im Abstand [[r]] von jeder Seite.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie das 6-8-10-Dreieck, um den Unterschied in Zahlen zu sehen. Der Umkreisradius beträgt [[R = \\frac{10}{2} = 5]] cm, und der Inkreisradius beträgt [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Für Aufgaben über den Inkreis verwenden Sie den <a href=\"/right-triangle-inradius-calculator/\">Inkreisradius-Rechner für rechtwinklige Dreiecke</a>, der [[r = \\frac{a + b - c}{2}]] direkt anwendet. Der <a href=\"/right-triangle-radius-calculator/\">Radius-Rechner für rechtwinklige Dreiecke</a> behandelt beide Radien auf einer Seite, wenn Sie sie vergleichen müssen.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "Umkreisradius R",
              "Inkreisradius r",
            ],
            "rows": [
              [
                "Kreis",
                "Umkreis",
                "Inkreis",
              ],
              [
                "Lage",
                "Um das Dreieck herum",
                "Innerhalb des Dreiecks",
              ],
              [
                "Berührung",
                "Verläuft durch die Eckpunkte",
                "Berührt die Seiten",
              ],
              [
                "Formel für rechtwinklige Dreiecke",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Mittelpunkt",
                "Umkreismittelpunkt",
                "Inkreismittelpunkt",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Umkreis, der durch die Eckpunkte verläuft, neben dem Inkreis, der die Seiten berührt, Dreieck 6-8-10",
            "caption": "Umkreis (R = 5 cm) um das Dreieck herum, Inkreis (r = 2 cm) in ihm, Dreieck 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Beziehung zwischen Umkreisradius und dem Satz des Pythagoras",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Satz des Pythagoras besagt, dass in einem rechtwinkligen Dreieck [[a^2 + b^2 = c^2]] gilt, wobei [[a]] und [[b]] die Katheten und [[c]] die Hypotenuse sind. Er ist die Verbindung zwischen den Katheten und der Hypotenuse und über die Hypotenuse auch eine Verbindung zum Umkreisradius.",
            },
            {
              "kind": "p",
              "text": "Da [[R = \\frac{c}{2}]] gilt und der Satz [[c = \\sqrt{a^2 + b^2}]] liefert, ergibt das Einsetzen [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Diese kombinierte Formel findet den Umkreisradius aus den beiden Katheten in einem Schritt, ohne die Hypotenuse separat aufzuschreiben. Es ist dieselbe zweistufige Berechnung wie im Abschnitt über Katheten, geschrieben als ein einziger Ausdruck.",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie es mit dem 6-8-10-Dreieck. Die Katheten ergeben [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm für die Hypotenuse, und das Halbieren ergibt [[R = 5]] cm. Der Satz des Pythagoras liefert die Hypotenuse, und die Umkreisradius-Formel halbiert sie.",
            },
          ],
        },
        "sec-verify": {
          "h2": "So überprüfen Sie Ihre Umkreisradius-Berechnung",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier unabhängige Prüfungen decken fast jeden Fehler auf. Führen Sie bei jeder Antwort mindestens eine durch, und alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten verwendet durchgehend das 6-8-10-Dreieck mit [[c = 10]] cm und [[R = 5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Durchmesserbeziehung",
            },
            {
              "kind": "p",
              "text": "Verdoppeln Sie den Umkreisradius und vergleichen Sie ihn mit der Hypotenuse: [[2R = c]]. Hier gilt [[2 \\times 5 = 10]] cm, was genau c entspricht. Wenn das Verdoppeln Ihrer Antwort nicht die Hypotenuse ergibt, ist bei der Division durch zwei etwas schiefgegangen.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Mittelpunktbeziehung",
            },
            {
              "kind": "p",
              "text": "Der Umkreismittelpunkt muss in der Mitte der Hypotenuse liegen. Messen Sie von einem Ende der Hypotenuse zum Mittelpunkt: Jede Hälfte muss gleich [[R]] sein. Hier beträgt jede Hälfte 5 cm, was dem Umkreisradius entspricht. Ein Mittelpunkt, der nicht in der Mitte liegt, ist nicht der Umkreismittelpunkt.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Gleiche Abstände",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[OA = OB = OC = R]]. Der Mittelpunkt muss von allen drei Eckpunkten gleich weit entfernt sein. Im 6-8-10-Dreieck beträgt jeder Abstand 5 cm. Wenn der Abstand zum Eckpunkt mit dem rechten Winkel vom Abstand zu den Endpunkten der Hypotenuse abweicht, sind der Mittelpunkt oder der Radius falsch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Wenn die Katheten bekannt sind, prüfen Sie [[a^2 + b^2 = c^2]] und vergleichen Sie die resultierende Hypotenuse mit [[2R]]. Hier gilt [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], also [[c = 10]] cm, und [[2R = 10]] cm stimmt überein. Diese Prüfung testet das ganze Dreieck, also deckt sie Beschriftungsfehler auf, die die erste Prüfung übersehen kann.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Wichtige Eigenschaften des Umkreisradius bei rechtwinkligen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Neun Eigenschaften folgen direkt aus [[R = \\frac{c}{2}]]. Jede von ihnen dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "kind": "list",
              "items": [
                "Der Umkreisradius ist genau die Hälfte der Hypotenuse, [[R = \\frac{c}{2}]], ohne jede Näherung.",
                "Die Hypotenuse ist der Durchmesser des Umkreises, also [[D = c]] und [[c = 2R]].",
                "Der Umkreismittelpunkt liegt im Mittelpunkt der Hypotenuse, auf der längsten Seite des Dreiecks.",
                "Der Umkreisradius ist für ein nicht entartetes Dreieck immer positiv, da die Hypotenuse eine positive Länge ist.",
                "Der Umkreisradius ist gleich der halben Hypotenuse, und da die Hypotenuse die längste Seite ist, ist der Umkreisradius kleiner als die Hypotenuse. Ob er größer oder kleiner als eine gegebene Kathete ist, hängt vom Dreieck ab: In einem 6-8-10-Dreieck ist [[R = 5]] cm kleiner als die Kathete von 8 cm, während in einem 5-12-13-Dreieck [[R = 6.5]] cm größer ist als die Kathete von 5 cm.",
                "Eine Vergrößerung der Hypotenuse vergrößert den Umkreisradius proportional, weil [[R]] die Hälfte von [[c]] ist.",
                "Das Verdoppeln der Hypotenuse verdoppelt den Umkreisradius: Wenn [[c]] zu [[2c]] wird, dann wird [[R]] zu [[c]].",
                "Die Katheten werden nicht benötigt, wenn die Hypotenuse bereits bekannt ist; die Formel verwendet nur [[c]].",
                "Alle drei Eckpunkte sind vom Umkreismittelpunkt gleich weit entfernt, mit [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Berechnung des Umkreisradius",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Die Eingabe einer Kathete statt der Hypotenuse: Das Halbieren einer Kathete ergibt eine halbe Kathete, nicht den Umkreisradius. In einem 6-8-10-Dreieck ergibt das Halbieren von 6 cm 3 cm, während der wahre Umkreisradius 5 cm beträgt.",
                "Das Vergessen der Division durch zwei: Die Angabe der Hypotenuse als Antwort ergibt den Durchmesser, nicht den Radius. Bei [[c = 10]] cm lautet die Antwort 5 cm, nicht 10 cm.",
                "Die Behandlung der Hypotenuse als Radius: Dies ist derselbe Fehler aus der anderen Richtung. Die Hypotenuse erstreckt sich über die volle Breite des Kreises, also ist sie der Durchmesser, und der Radius ist ihre Hälfte.",
                "Die Verwechslung von Umkreisradius und Inkreisradius: Der Inkreisradius eines 6-8-10-Dreiecks beträgt 2 cm, während der Umkreisradius 5 cm beträgt. Die beiden Kreise sind verschieden, und ihre Formeln sind ebenfalls verschieden.",
                "Die Verwechslung des Umkreismittelpunkts mit dem Eckpunkt des rechten Winkels: Der Umkreismittelpunkt ist der Mittelpunkt der Hypotenuse, nicht der Eckpunkt C. Der Eckpunkt C ist ein Punkt auf dem Kreis, im Abstand [[R]] vom Mittelpunkt.",
                "Die Annahme, dass der Mittelpunkt immer innerhalb eines Dreiecks liegt: In einem rechtwinkligen Dreieck liegt der Umkreismittelpunkt auf der Hypotenuse, und in einem stumpfwinkligen Dreieck liegt er außerhalb.",
                "Die Verwendung der Formel bei einem beliebigen Dreieck: [[R = \\frac{c}{2}]] gilt nur für rechtwinklige Dreiecke. Für ein allgemeines Dreieck verwenden Sie [[R = \\frac{abc}{4A}]], wobei [[A]] der Flächeninhalt ist.",
                "Das Vermischen von Maßeinheiten: Eine Hypotenuse in Metern und eine Antwort in Zentimetern unterscheiden sich um den Faktor 100. Rechnen Sie zuerst um und halbieren Sie dann.",
                "Die Verwendung von null oder negativen Hypotenusenwerten: Eine Länge kann in einem echten Dreieck nicht null oder negativ sein. Eine Eingabe von null oder eine negative Eingabe bedeutet, dass die Messung falsch ist.",
                "Die Verwechslung von Durchmesser und Radius: Der Durchmesser ist doppelt so groß wie der Radius. Wenn Ihre Antwort doppelt so groß ist wie der erwartete Wert, haben Sie wahrscheinlich [[D]] statt [[R]] angegeben.",
                "Die Annahme, dass der Umkreis alle drei Seiten berührt: Der Umkreis verläuft durch die Eckpunkte und berührt das Dreieck nur an diesen drei Punkten. Der Kreis, der die Seiten berührt, ist der Inkreis.",
                "Das Vergessen, dass der Kreis durch alle drei Eckpunkte verläuft: Alle drei müssen auf ihm liegen, was genau [[OA = OB = OC]] garantiert.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen des Umkreisradius",
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Verwendung ist die Geometrie-Hausaufgabe und die Arbeit im Unterricht, bei der Umkreisradius-Aufgaben prüfen, ob die Schülerinnen und Schüler die Hypotenuse erkennen und [[R = \\frac{c}{2}]] anwenden können, statt zu einer komplizierteren Formel zu greifen. Konstruktionsübungen mit Kreisen verwenden dieselbe Idee: Zeichnen Sie bei einem gegebenen rechtwinkligen Dreieck seinen Umkreis, indem Sie die Hypotenuse halbieren und einen Zirkel auf diesen Radius einstellen.",
            },
            {
              "kind": "p",
              "text": "Das technische Zeichnen verwendet die Beziehung, wenn ein rechtwinkliges Dreieck in einen kreisförmigen Rahmen gesetzt werden muss oder wenn ein Kreisbogen durch drei gegebene Punkte verlaufen muss. Die geometrische Modellierung und die Koordinatengeometrie verwenden dieselbe Tatsache, um den Umkreismittelpunkt eines Dreiecks in den Mittelpunkt seiner Hypotenuse zu legen.",
            },
            {
              "kind": "p",
              "text": "Lehrkräfte verwenden das Thema als Brückenstunde zwischen Dreiecken und Kreisen, weil es einer der ersten Orte ist, an dem die beiden Themen zusammentreffen. Der Satz des Thales, die Mittelpunkteigenschaft und die Beziehung zwischen Radius und Durchmesser erscheinen alle in einem einzigen Bild, also ist der Umkreisradius eine kompakte Möglichkeit, sie gemeinsam zu wiederholen.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Antworten",
          "blocks": [
            {
              "kind": "p",
              "text": "Versuchen Sie alle sechs Aufgaben auf Papier, bevor Sie die Antworten lesen. Keiner der Werte wiederholt die durchgerechneten Beispiele, und jede Lösung ist unten vollständig ausgearbeitet.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Einfache ganze Zahl",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 26]] cm. Finden Sie den Umkreisradius [[R]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimale Hypotenuse",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = 9.4]] m, finden Sie den Umkreisradius [[R]] in Metern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Messung als Bruch",
            },
            {
              "kind": "p",
              "text": "Gegeben ist [[c = \\frac{9}{4}]] ft, finden Sie [[R]] als Bruch und dann als Dezimalzahl.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umrechnung von Einheiten",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 240]] cm. Finden Sie den Umkreisradius in Metern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Die Hypotenuse aus zwei Katheten finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten [[a = 9]] cm und [[b = 12]] cm. Finden Sie die Hypotenuse und dann den Umkreisradius.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Umkreisradius oder Inkreisradius?",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten 5 cm und 12 cm und die Hypotenuse 13 cm. Finden Sie sowohl den Umkreisradius [[R]] als auch den Inkreisradius [[r]] und geben Sie an, zu welchem Kreis jeder gehört.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[R = \\frac{26}{2} = 13]] cm. Prüfung: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[R = \\frac{9.4}{2} = 4.7]] m. Prüfung: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, was 1.125 ft entspricht. Die Division durch 2 verdoppelt den Nenner von 4 auf 8.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: [[R = \\frac{240}{2} = 120]] cm, und 120 cm entsprechen 1.2 m, da 100 cm 1 m sind.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, dann [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: Der Umkreisradius gehört zum Umkreis, [[R = \\frac{13}{2} = 6.5]] cm, und der Inkreisradius gehört zum Inkreis, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Der Umkreis verläuft durch die Eckpunkte; der Inkreis berührt die Seiten.",
            },
          ],
        },
      },
      "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten behandelt eine bestimmte Aufgabe mit rechtwinkligen Dreiecken, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie finden müssen.",
      "relatedItems": [
        "Radius-Rechner für rechtwinklige Dreiecke",
        "Inkreisradius-Rechner für rechtwinklige Dreiecke",
        "Rechner für die Seiten eines rechtwinkligen Dreiecks",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Rechner zum Satz des Pythagoras",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie lautet die Formel für den Umkreisradius eines rechtwinkligen Dreiecks?",
          "answer": "Die Formel lautet [[R = \\frac{c}{2}]], wobei [[R]] der Umkreisradius und [[c]] die Hypotenuse ist. Bestimmen Sie die Seite gegenüber dem rechten Winkel und teilen Sie dann ihre Länge durch zwei. Zum Beispiel ergibt eine Hypotenuse von 10 cm einen Umkreisradius von 5 cm.",
        },
        {
          "question": "Warum ist die Hypotenuse der Durchmesser des Umkreises?",
          "answer": "Der Mittelpunkt der Hypotenuse ist von allen drei Eckpunkten gleich weit entfernt, also ist er der Umkreismittelpunkt. Die Hypotenuse verläuft durch diesen Mittelpunkt, wobei beide Enden auf dem Kreis liegen, was die Definition eines Durchmessers ist. Das Halbieren ergibt daher den Radius.",
        },
        {
          "question": "Wo liegt der Umkreismittelpunkt eines rechtwinkligen Dreiecks?",
          "answer": "Der Umkreismittelpunkt liegt im Mittelpunkt der Hypotenuse, auf der längsten Seite des Dreiecks. Er ist von allen drei Eckpunkten gleich weit entfernt, mit [[AO = BO = CO = R]]. Er ist nicht der Eckpunkt mit dem rechten Winkel, der ein Punkt auf dem Kreis ist.",
        },
        {
          "question": "Was bedeutet Umkreisradius?",
          "answer": "Umkreisradius bedeutet den Radius des Umkreises, des Kreises, der durch alle drei Eckpunkte des Dreiecks verläuft. Er ist der Abstand vom Umkreismittelpunkt zu einem beliebigen Eckpunkt. In einem rechtwinkligen Dreieck ist er gleich der halben Hypotenuse.",
        },
        {
          "question": "Brauche ich beide Katheten, um den Umkreisradius zu berechnen?",
          "answer": "Nein. Die Hypotenuse allein genügt, weil [[R = \\frac{c}{2}]] gilt. Die Katheten werden nur benötigt, wenn die Hypotenuse unbekannt ist; in diesem Fall finden Sie sie zuerst mit [[c = \\sqrt{a^2 + b^2}]] und halbieren sie dann. Deshalb fragt dieser Rechner nur nach einem einzigen Wert, und er hält jede Berechnung kurz und einfach.",
        },
        {
          "question": "Ist der Umkreisradius die Hälfte der Hypotenuse?",
          "answer": "Ja, immer, bei einem rechtwinkligen Dreieck. Die Hypotenuse ist der Durchmesser des Umkreises, und ein Radius ist die Hälfte eines Durchmessers, also [[R = \\frac{c}{2}]]. Das Verdoppeln des Umkreisradius ergibt immer wieder die Hypotenuse. Zum Beispiel ergibt eine Hypotenuse von 14 cm einen Umkreisradius von 7 cm, und das Verdoppeln von 7 cm ergibt wieder 14 cm.",
        },
        {
          "question": "Ist der Umkreisradius dasselbe wie der Inkreisradius?",
          "answer": "Nein. Der Umkreisradius ist der Radius des Kreises durch die Eckpunkte, [[R = \\frac{c}{2}]], während der Inkreisradius der Radius des Kreises innerhalb des Dreiecks ist, der seine Seiten berührt, [[r = \\frac{a + b - c}{2}]]. In einem 6-8-10-Dreieck betragen sie 5 cm und 2 cm.",
        },
        {
          "question": "Kann der Umkreismittelpunkt außerhalb eines Dreiecks liegen?",
          "answer": "Ja, bei einem stumpfwinkligen Dreieck liegt der Umkreismittelpunkt außerhalb. Bei einem spitzwinkligen Dreieck liegt er innerhalb. Ein rechtwinkliges Dreieck ist der Grenzfall: Sein Umkreismittelpunkt liegt auf der Hypotenuse, genau in ihrer Mitte. Der Mittelpunkt liegt also nie innerhalb der Dreiecksfläche eines rechtwinkligen Dreiecks, aber er liegt auch nie außerhalb des Dreiecks.",
        },
        {
          "question": "Wie hängt der Satz des Thales mit dem Umkreisradius zusammen?",
          "answer": "Der Satz des Thales besagt, dass ein Winkel, der von einem Durchmesser aufgespannt wird, ein rechter Winkel ist, und seine Umkehrung besagt, dass die Hypotenuse eines rechtwinkligen Dreiecks ein Durchmesser ist. Das macht den Mittelpunkt der Hypotenuse zum Mittelpunkt und die halbe Hypotenuse zum Radius.",
        },
        {
          "question": "Kann ich den Umkreisradius mit den beiden Katheten finden?",
          "answer": "Ja. Finden Sie zuerst die Hypotenuse mit [[c = \\sqrt{a^2 + b^2}]], und halbieren Sie sie dann: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Bei Katheten von 6 cm und 8 cm beträgt die Hypotenuse 10 cm und der Umkreisradius 5 cm. Verwenden Sie dieselben beiden Schritte für jedes Kathetenpaar und prüfen Sie das Ergebnis mit dem Durchmessertest.",
        },
        {
          "question": "Was passiert, wenn sich die Hypotenuse verdoppelt?",
          "answer": "Der Umkreisradius verdoppelt sich ebenfalls, weil [[R]] die Hälfte von [[c]] ist. Wenn eine Hypotenuse von 10 cm [[R = 5]] cm ergibt, ergibt eine Hypotenuse von 20 cm [[R = 10]] cm. Die Beziehung ist direkt proportional, also verdreifacht eine Verdreifachung der Hypotenuse auch den Umkreisradius.",
        },
        {
          "question": "Verläuft der Umkreis durch alle drei Eckpunkte?",
          "answer": "Ja. Das ist die Definition eines Umkreises: ein Kreis durch jeden Eckpunkt des Dreiecks. In einem rechtwinkligen Dreieck ist der Mittelpunkt der Mittelpunkt der Hypotenuse, und jeder Eckpunkt liegt genau [[R]] von ihm entfernt.",
        },
      ],
    },
};
