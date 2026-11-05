// legBFromProjectionGuideTranslations.bde.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B2_DE = {
  "de": {
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie lautet die Formel, um Kathete b aus der Projektion q zu bestimmen?",
          "answer": "Die Formel lautet [[b = \\sqrt{c \\times q}]], wobei c die vollständige Hypotenuse ist und q die Projektion, die zu Kathete b gehört. Zum Beispiel ergeben [[c = 10]] cm und [[q = 6.4]] cm [[b = 8]] cm.",
        },
        {
          "question": "Warum multiplizieren wir c und q?",
          "answer": "Die Multiplikation ergibt sich aus ähnlichen Dreiecken. Das Dreieck CBD ist ähnlich zum Dreieck ABC, was [[q / b = b / c]] ergibt, und Kreuzmultiplikation liefert [[b^2 = c \\times q]]. Das Produkt ist das Quadrat der Kathete, nicht die Kathete selbst.",
        },
        {
          "question": "Warum ist eine Quadratwurzel nötig?",
          "answer": "Weil das Produkt cq gleich b zum Quadrat ist, nicht b. Die Quadratwurzel macht das Quadrieren rückgängig und liefert eine gewöhnliche Länge. Ohne sie würde man im Beispiel mit c = 10 und q = 6,4 statt 8 die Zahl 64 angeben.",
        },
        {
          "question": "Was stellt die Projektion q dar?",
          "answer": "Die Projektion q ist der Abschnitt der Hypotenuse neben dem Eckpunkt B, der entsteht, wenn die Höhe vom rechten Winkel auf die Hypotenuse trifft. Im Dreieck ABC mit der Höhe CD gilt [[q = DB]], und sie liegt entlang der Hypotenuse.",
        },
        {
          "question": "Ist die Projektion q dasselbe wie die Kathete b?",
          "answer": "Nein. Kathete b ist die Seite BC, eine der Seiten, die den rechten Winkel bilden, während die Projektion q der Abschnitt DB entlang der Hypotenuse ist. Es sind unterschiedliche Längen an unterschiedlichen Stellen, die nur durch [[b^2 = c \\times q]] verbunden sind.",
        },
        {
          "question": "Warum wird q statt p verwendet?",
          "answer": "Weil jede Kathete mit der Projektion neben ihrem eigenen Eckpunkt gepaart ist. Kathete b berührt den Eckpunkt B, und q ist der Abschnitt neben B. Die Verwendung von p würde stattdessen Kathete a liefern, da p mit der Kathete gepaart ist, die den Eckpunkt A berührt.",
        },
        {
          "question": "Kann ich Kathete b finden, wenn nur die Projektion p bekannt ist?",
          "answer": "Ja. Ziehe zuerst p von der Hypotenuse ab: [[q = c - p]]. Mit [[c = 25]] cm und [[p = 9]] cm ist [[q = 16]] cm, und dann [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "Kann die Projektion q größer als die Hypotenuse sein?",
          "answer": "Nein. Die Projektion q ist nur ein Teil der Hypotenuse, also muss sie kleiner als c sein. Wäre q gleich c, wäre p null und das Dreieck entartet statt ein echtes rechtwinkliges Dreieck.",
        },
        {
          "question": "Wie prüfe ich die berechnete Kathete?",
          "answer": "Quadriere die Antwort und prüfe, ob sie gleich [[c \\times q]] ist. Du kannst auch Kathete a aus p bestimmen und [[a^2 + b^2 = c^2]] prüfen sowie bestätigen, dass q kleiner als c ist und Kathete b kürzer als die Hypotenuse.",
        },
        {
          "question": "Was passiert, wenn p und q gleich sind?",
          "answer": "Die Höhe trifft die Hypotenuse in ihrem Mittelpunkt, und die beiden Katheten sind gleich, also ist das Dreieck ein gleichschenkliges rechtwinkliges Dreieck. Mit [[c = 20]] cm und [[p = q = 10]] cm sind beide Katheten gleich [[10\\sqrt{2}]] cm, etwa 14,142 cm.",
        },
        {
          "question": "Kann ich Kathete a mit demselben Satz finden?",
          "answer": "Ja, mit der spiegelbildlichen Formel [[a = \\sqrt{c \\times p}]]. Kathete a ist mit der Projektion p gepaart, so wie Kathete b mit q gepaart ist. Der <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Rechner für Kathete a aus der Projektion</a> ist für diese Berechnung gebaut.",
        },
        {
          "question": "Hängt der Projektionssatz mit dem Satz des Pythagoras zusammen?",
          "answer": "Ja. Das Addieren der beiden Projektionsformeln ergibt [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], da [[p + q = c]]. Der Projektionssatz teilt die pythagoreische Beziehung in ein Stück pro Kathete auf.",
        },
      ],
      "relatedHeading": "Entdecke verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Wähle das nächste Werkzeug nach den Maßen, die du bereits kennst, denn jeder Rechner unten behandelt eine bestimmte Aufgabe am rechtwinkligen Dreieck.",
      "relatedItems": [
        "Rechner für Projektionen am rechtwinkligen Dreieck",
        "Rechner für Projektion P am rechtwinkligen Dreieck",
        "Rechner für Projektion Q am rechtwinkligen Dreieck",
        "Rechner für Kathete A aus der Projektion am rechtwinkligen Dreieck",
        "Rechner für die Hypotenuse aus Projektionen am rechtwinkligen Dreieck",
        "Rechner für die Höhe aus Projektionen am rechtwinkligen Dreieck",
        "Rechner für Seiten am rechtwinkligen Dreieck",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieser Rechner findet Kathete b eines rechtwinkligen Dreiecks, wenn du die vollständige Hypotenuse c und die Projektion q kennst, die zu Kathete b gehört. Du gibst diese beiden Längen ein, und er liefert die tatsächliche Seitenlänge von Kathete b, keinen quadrierten Wert und kein Projektionssegment. Die Formel lautet [[b = \\sqrt{c \\times q}]], wobei c die vollständige Hypotenuse ist und q der Abschnitt der Hypotenuse neben Kathete b.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel: Wenn [[c = 10]] cm und [[q = 6.4]] cm, dann [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Das Produkt 64 ist nur ein Zwischenschritt. Die Quadratwurzel verwandelt es wieder in eine Länge, und diese Länge ist die gesuchte Seite.",
            },
            {
              "kind": "p",
              "text": "Der Rechner steht oben auf dieser Seite, gefolgt von der Formel, einem beschrifteten Diagramm, einem Beweis des Projektionssatzes, durchgerechneten Beispielen und Prüfungen, die du bei jeder Antwort durchführen kannst. Der Leitfaden eignet sich für Schülerinnen und Schüler der Mittel- und Oberstufe, Lehrkräfte, Nachhilfelehrkräfte und Eltern, die bei Geometrie-Hausaufgaben helfen.",
            },
          ],
          "h2": "Rechner für Kathete B aus der Projektion am rechtwinkligen Dreieck",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner hat zwei Eingabefelder. Das erste nimmt die Hypotenuse c, die vollständige Seite gegenüber dem rechten Winkel. Das zweite nimmt die Projektion q, den Abschnitt der Hypotenuse, der zu Kathete b gehört. Beide Längen müssen dieselbe Einheit verwenden, also rechne zuerst um, wenn eine Messung in Zentimetern und die andere in Metern angegeben ist.",
            },
            {
              "kind": "p",
              "text": "Die Projektion q muss kleiner als c sein. Diese Regel steckt in der Geometrie: q ist nur ein Teil der Hypotenuse, kann also nie gleich der ganzen Seite sein oder sie übertreffen. Wenn dein q-Wert größer als c ist, hast du wahrscheinlich eine Kathete, die Höhe oder die falsche Projektion eingegeben.",
            },
            {
              "kind": "p",
              "text": "Klicke auf „Kathete b berechnen“, um das Ergebnis zu sehen, und verwende „Zurücksetzen“, um beide Felder vor einer neuen Aufgabe zu leeren. Das Ergebnis ist eine Länge in der eingegebenen Einheit, also liefern eine Hypotenuse von 10 cm und eine Projektion von 6,4 cm das Ergebnis 8 cm, ohne dass ein weiterer Umrechnungsschritt nötig wäre.",
            },
          ],
          "h2": "Kathete B aus der Projektion am rechtwinkligen Dreieck berechnen",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat zwei senkrecht aufeinander stehende Seiten, die Katheten genannt werden, und eine längste Seite, die Hypotenuse genannt wird. Die beiden Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt diesem Winkel gegenüber. In diesem Leitfaden ist das Dreieck ABC mit dem rechten Winkel bei C, Kathete a ist die Seite AC, Kathete b ist die Seite BC und die Hypotenuse c ist die Seite AB.",
            },
            {
              "kind": "p",
              "text": "Kathete b ist eine der beiden Seiten, die den rechten Winkel bilden, also eine echte Seite des Dreiecks. Sie ist kein Segment, das im Dreieck eingezeichnet ist, und sie ist nicht die Projektion q. Die Projektion q liegt flach entlang der Hypotenuse, während Kathete b vom Eckpunkt B zum Eckpunkt des rechten Winkels C verläuft. Diese beiden Rollen auseinanderzuhalten, ist der erste Schritt, um die Formel richtig anzuwenden.",
            },
            {
              "kind": "p",
              "text": "Kathete b unterscheidet sich von Kathete a nur durch ihre Lage: Kathete b berührt den Eckpunkt B, und Kathete a berührt den Eckpunkt A. Jede Kathete hat ihre eigene Projektion, weshalb die Formel für b q verwendet, während die Formel für a p verwendet, eine Paarung, die durch die Beschriftung festgelegt ist.",
            },
            {
              "kind": "p",
              "text": "In jedem nicht entarteten rechtwinkligen Dreieck ist Kathete b kürzer als die Hypotenuse. Das ergibt eine schnelle Plausibilitätsprüfung für jede Antwort: Wenn deine berechnete Kathete b länger als c herauskommt, ist bei den Eingaben oder der Rechnung etwas schiefgegangen, und die Diagrammbeschriftungen sind der erste Ort, an dem man nachsehen sollte.",
            },
          ],
          "h2": "Was ist Kathete B in einem rechtwinkligen Dreieck?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zeichne die Höhe vom Eckpunkt des rechten Winkels C senkrecht zur Hypotenuse AB. Sie trifft die Hypotenuse in einem Punkt, der Fußpunkt genannt und mit D bezeichnet wird. Dieser Punkt teilt die Hypotenuse in zwei angrenzende Abschnitte, und diese Abschnitte sind die Projektionen. Der Abschnitt AD ist die Projektion p, und der Abschnitt DB ist die Projektion q.",
            },
            {
              "kind": "p",
              "text": "Die Projektion q gehört zu Kathete b, weil sie neben dem Eckpunkt B liegt, demselben Eckpunkt, an dem Kathete b beginnt. Im kleinen Dreieck CBD ist Kathete b die Hypotenuse und q eine ihrer Katheten, und genau diese geometrische Verbindung lässt den Projektionssatz funktionieren. Die Projektion p gehört nach derselben Überlegung zu Kathete a, die den Eckpunkt A berührt.",
            },
            {
              "kind": "p",
              "text": "Projektionen sind Längen entlang der Hypotenuse, gemessen in derselben Einheit wie die anderen Seiten. Sie stehen zu nichts senkrecht, und sie sind keine Seiten des ursprünglichen Dreiecks. Eine Projektion stellt man sich am besten als den Schatten vor, den eine Kathete auf die Hypotenuse wirft, wenn die Höhe gerade nach unten auf sie fällt.",
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
              "text": "Diese Addition ist auch für sich genommen nützlich. Wenn du c und eine Projektion kennst, kannst du die andere durch Subtraktion finden, ein Schritt, den der spätere Abschnitt über die andere Projektion vollständig durcharbeitet.",
            },
          ],
          "h2": "Was ist die Projektion Q in einem rechtwinkligen Dreieck?",
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
              "text": "Zieht man auf beiden Seiten die positive Quadratwurzel, erhält man die Arbeitsformel für diese Seite:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Die Berechnung läuft in zwei klar getrennten Schritten. Schritt 1 multipliziert die Hypotenuse mit der Projektion, und das Ergebnis ist eine quadrierte Länge, keine Seite. Schritt 2 zieht die positive Quadratwurzel, die diese quadrierte Länge wieder in eine gewöhnliche Länge verwandelt. Schritt 2 auszulassen, ist der häufigste Fehler bei dieser Formel, und der nächste Abschnitt erklärt, warum die Quadratwurzel nicht weggelassen werden kann.",
            },
            {
              "kind": "p",
              "text": "Bei den Einheiten ist in beiden Schritten Sorgfalt nötig. Wenn c und q beide in Zentimetern angegeben sind, ist ihr Produkt in Quadratzentimetern, und die Quadratwurzel liefert Zentimeter zurück. Das Mischen von Einheiten, etwa Meter für c und Zentimeter für q, ergibt ein bedeutungsloses Produkt, also rechne vor dem Multiplizieren in eine Einheit um. Die positive Wurzel wird verwendet, weil eine Seitenlänge immer positiv ist.",
            },
            {
              "kind": "p",
              "text": "Ein kleines Zahlenbeispiel zeigt beide Schritte in Aktion. Mit [[c = 10]] cm und [[q = 6.4]] cm ergibt Schritt 1 [[10 \\times 6.4 = 64]], und Schritt 2 ergibt [[b = \\sqrt{64} = 8]] cm. Die Zahl 64 beantwortet für sich genommen keine Frage. Erst nach der Quadratwurzel wird sie zur Kathetenlänge.",
            },
          ],
          "h2": "Formel für Kathete B aus der Projektion am rechtwinkligen Dreieck",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit Höhe CD, das zeigt, dass Kathete b zum Quadrat gleich der Hypotenuse c multipliziert mit der Projektion q ist",
            "caption": "Der Projektionssatz: b zum Quadrat ist gleich c mal q, also ist b gleich der Quadratwurzel aus c mal q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadratwurzel steht dort, weil die Multiplikation eine quadrierte Größe erzeugt. Der Satz besagt nicht, dass Kathete b gleich dem Produkt aus c und q ist. Er besagt, dass das Quadrat von Kathete b gleich diesem Produkt ist. Ein Quadrat rückgängig zu machen, erfordert eine Quadratwurzel, so wie das Rückgängigmachen einer Verdopplung eine Halbierung erfordert.",
            },
            {
              "kind": "p",
              "text": "Nimm [[c = 10]] und [[q = 6.4]]. Ihr Produkt ist 64, was [[b^2]] ist, das Quadrat der Kathete. Die Kathete selbst ist die Zahl, die mit sich selbst multipliziert 64 ergibt, also 8. [[b = 64]] zu schreiben, würde eine Seite von 64 Einheiten in einem Dreieck behaupten, dessen Hypotenuse nur 10 beträgt, was offensichtlich unmöglich ist.",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten hält die drei Größen auseinander, da ihre Verwechslung die meisten Fehler bei dieser Formel verursacht.",
            },
          ],
          "h2": "Warum steht eine Quadratwurzel in der Formel?",
          "table": {
            "headers": [
              "Größe",
              "Bedeutung",
              "Beispiel mit c = 10, q = 6,4",
            ],
            "rows": [
              [
                "[[b]]",
                "Die Kathetenlänge selbst",
                "8",
              ],
              [
                "[[b^2]]",
                "Die Kathetenlänge mit sich selbst multipliziert",
                "64",
              ],
              [
                "[[c \\times q]]",
                "Das Produkt, das der Satz mit [[b^2]] gleichsetzt",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "Der Schritt, der b aus [[b^2]] zurückgewinnt",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn kurze Schritte führen dich von einem beschrifteten Diagramm zu einer geprüften Antwort.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimme das rechtwinklige Dreieck in deiner Aufgabe und stelle sicher, dass es einen rechten Winkel hat.",
                "Finde die Höhe vom rechten Winkel und markiere, wo sie die Hypotenuse trifft.",
                "Bestimme die vollständige Hypotenuse c, die Seite gegenüber dem rechten Winkel.",
                "Bestimme die Projektion q, den Abschnitt der Hypotenuse neben dem Eckpunkt B, wo Kathete b beginnt.",
                "Prüfe, ob q kleiner als c ist. Wenn nicht, beschrifte das Diagramm neu, bevor du weitermachst.",
                "Rechne c und q in dieselbe Einheit um, wenn sie in unterschiedlichen Einheiten angegeben wurden.",
                "Gib c in das Feld „Hypotenuse c“ ein.",
                "Gib q in das Feld „Projektion q“ ein. Gib hier nicht p ein, da das stattdessen Kathete a liefern würde.",
                "Klicke auf „Kathete b berechnen“ und lies das Ergebnis ab.",
                "Verwende „Zurücksetzen“, bevor du eine neue Aufgabe beginnst.",
              ],
            },
            {
              "kind": "p",
              "text": "Der Rechner akzeptiert kein p, also braucht eine Aufgabe, die nur p angibt, einen zusätzlichen Subtraktionsschritt, der unten behandelt wird. Die Eingabe von p im q-Feld liefert trotzdem eine Zahl, aber es wird die falsche Kathete sein, also ist die Beschriftungsprüfung in Schritt 4 am wichtigsten.",
            },
          ],
          "h2": "So verwendest du den Rechner für Kathete B am rechtwinkligen Dreieck",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Verwende [[c = 10]] cm und [[q = 6.4]] cm. Die vier Schritte unten zeigen die vollständige Rechnung, ohne dass etwas ausgelassen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Schreibe die Formel auf: b = sqrt(cq).",
                "Setze die Werte ein: b = sqrt(10 x 6,4).",
                "Multipliziere innerhalb der Wurzel: b = sqrt(64).",
                "Ziehe die Quadratwurzel: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 8 cm ist die tatsächliche senkrechte Seite BC, keine Projektion und keine Fläche. Eine kurze Prüfung schließt den Kreis: [[b^2 = 8^2 = 64]] und [[c \\times q = 10 \\times 6.4 = 64]], also stimmen beide Seiten des Satzes überein.",
            },
            {
              "kind": "p",
              "text": "Zur Referenz: Die andere Projektion ist [[p = 10 - 6.4 = 3.6]] cm, Kathete a ist [[a = \\sqrt{10 \\times 3.6} = 6]] cm, und die Höhe ist [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, was das bekannte 6-8-10-rechtwinklige Dreieck bestätigt.",
            },
          ],
          "h2": "Schritt-für-Schritt-Beispiel zur Bestimmung von Kathete B",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit Hypotenuse 10 cm und Projektion 6,4 cm, durchgerechnet zu Kathete b gleich 8 cm",
            "caption": "Durchgerechnetes Beispiel: c = 10 cm und q = 6,4 cm ergeben b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist Kathete a, die Seite BC ist Kathete b und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und berührt sie bei D, und die Rechtwinkelmarkierung bei D bestätigt, dass CD wirklich senkrecht steht.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in zwei Teile: Der Abschnitt AD ist die Projektion p und der Abschnitt DB ist die Projektion q. Kathete b und Projektion q sind hervorgehoben, weil sie das Paar sind, um das es auf dieser Seite geht. Verfolge das Diagramm in dieser Reihenfolge, um die Beschriftungen zu festigen: Beginne bei B, gehe entlang Kathete b nach C, dann entlang Kathete a nach A, dann zurück entlang der Hypotenuse von A nach B, und halte bei D an, um die Aufteilung in p und q zu sehen.",
            },
            {
              "kind": "p",
              "text": "Die Paarung von b mit q wird im kleinen Dreieck CBD sichtbar, wo Kathete b die Hypotenuse ist und q die Seite, die entlang der großen Hypotenuse liegt. Weil das Dreieck CBD ähnlich zum Dreieck ABC ist, ist das Verhältnis von q zu b im kleinen Dreieck gleich dem Verhältnis von b zu c im großen, was der Beweisabschnitt in [[b^2 = cq]] verwandelt.",
            },
          ],
          "h2": "Diagramm für Kathete B aus der Projektion am rechtwinkligen Dreieck erklärt",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB, Kathete b und Projektion q hervorgehoben, mit Katheten a und b, Hypotenuse c, Projektionen p und q und Höhe h beschriftet",
            "caption": "Hauptdreieck ABC: Die Höhe CD teilt die Hypotenuse AB in die Projektion p (AD) und die Projektion q (DB), wobei Kathete b (BC) hervorgehoben ist.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis beruht auf ähnlichen Dreiecken. Das Zeichnen der Höhe CD teilt das Dreieck ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, und beide sind dem ursprünglichen Dreieck ähnlich. Ähnlichkeit bedeutet, dass ihre entsprechenden Seiten im selben Verhältnis bleiben, und eines dieser Verhältnisse liefert den Projektionssatz direkt.",
            },
            {
              "kind": "p",
              "text": "Konzentriere dich auf das Dreieck CBD und das ganze Dreieck ABC. Beide enthalten den Winkel bei B, und beide enthalten einen rechten Winkel, also müssen auch ihre dritten Winkel übereinstimmen. Das Abgleichen der Seiten, die an denselben Stellen sitzen, ergibt die Proportion:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Setze nun die üblichen Symbole ein: [[DB = q]], [[BC = b]] und [[AB = c]]. Die Proportion wird zu:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kreuzmultiplikation beseitigt die Brüche. Der linke Zähler mal dem rechten Nenner ist gleich dem rechten Zähler mal dem linken Nenner, also [[q \\times c = b \\times b]], was Folgendes ist:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ziehen der positiven Quadratwurzel auf beiden Seiten vollendet den Beweis und ergibt [[b = \\sqrt{c \\times q}]]. Dasselbe Argument, angewandt auf das andere kleine Dreieck ACD, ergibt [[a^2 = c \\times p]]. Die Ähnlichkeit erledigt die ganze Arbeit: Entsprechende Seiten ähnlicher Dreiecke bleiben proportional.",
            },
          ],
          "h2": "Warum funktioniert der Projektionssatz?",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben kleineren ähnlichen Dreiecken ACD und CBD, das die Proportion q durch b gleich b durch c zeigt",
            "caption": "Beweis mit ähnlichen Dreiecken: q durch b ist gleich b durch c, also ergibt Kreuzmultiplikation b zum Quadrat gleich c mal q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, die Einsetzung und die endgültige Antwort. Der Kommentar bleibt kurz, damit die Rechnung sichtbar bleibt, und jedes Beispiel hält seine Einheiten von Anfang bis Ende konsistent.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 10]] cm und [[q = 6.4]] cm, die Formel ergibt [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], also [[b = 8]] cm. Das Produkt 64 ist eine Quadratzahl, also ist die Antwort exakt und kein Runden nötig. Dies ist dasselbe Dreieck wie im Schritt-für-Schritt-Beispiel, und seine andere Kathete ist 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Ergebnis als Quadratzahl",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] cm und [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Wenn das Produkt eine Quadratzahl ist, ist die Antwort exakt. Die andere Projektion hier ist 16 cm, die mit einer Kathete von 20 cm gepaart ist, was das klassische 15-20-25-Dreieck ergibt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Keine Quadratzahl",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 12]] cm und [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], also [[b \\approx 7.746]] cm. Das Produkt 60 ist keine Quadratzahl, also bleibt die Antwort eine Näherung, gerundet auf drei Dezimalstellen. Beachte, dass 7,746 cm kürzer als die 12 cm lange Hypotenuse ist, wie es sein muss.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Dezimalmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 12.5]] cm und [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], also [[b \\approx 6.325]] cm. Dies entspricht dem Wert aus dem Leitfaden für Kathete a, wo dasselbe Produkt 40 mit vertauschten Rollen von p und q auftrat, eine nützliche Erinnerung, dass unterschiedliche Eingaben ein Produkt teilen können. Behalte das vollständige Produkt bis zum letzten Rundungsschritt innerhalb der Wurzel.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Größeres Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 50]] cm und [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Größere Zahlen ändern nichts an der Methode: multiplizieren, dann die Wurzel ziehen. Die andere Projektion hier ist 18 cm, die mit einer Kathete von 30 cm gepaart ist, was das klassische 30-40-50-Dreieck ergibt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Gleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 20]] cm und [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, also [[b \\approx 14.142]] cm. Gleiche Projektionen bedeuten, dass die Höhe den Mittelpunkt der Hypotenuse trifft, was genau dann geschieht, wenn die beiden Katheten gleich sind. Das Dreieck ist daher ein gleichschenkliges rechtwinkliges Dreieck, und Kathete a ist gleich Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Unterschiedliche Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 0.5]] m und [[q = 20]] cm, rechne zuerst um: 0,5 m sind 50 cm. Dann [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], also [[b \\approx 31.623]] cm. Die Multiplikation von 0,5 mit 20 ohne Umrechnung hätte eine Wurzel von 10 ergeben, eine falsche Antwort ohne gültige Einheit dahinter.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Bruchmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 16]] ft und [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Das Produkt 144 ist eine Quadratzahl, also ist die Antwort exakt. Eine kurze Plausibilitätsprüfung gelingt: 12 ft sind drei Viertel der Hypotenuse, und die andere Kathete ergibt etwa 10,583 ft, was kürzer als b ist, aber dennoch eine echte Seite desselben Dreiecks.",
            },
          ],
          "h2": "Durchgerechnete Beispiele zur Bestimmung von Kathete B aus der Projektion",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manche Aufgaben geben p statt q an. Der Rechner auf dieser Seite akzeptiert kein p, aber das ist nur ein ein-Schritt-Umweg, keine Sackgasse. Da sich die beiden Projektionen zur Hypotenuse addieren, subtrahiere zuerst, um q zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Nimm [[c = 25]] cm und [[p = 9]] cm. Die Subtraktion ergibt [[q = 25 - 9 = 16]] cm. Jetzt gilt die gewöhnliche Formel: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Hättest du 9 direkt als q eingegeben, hätte der Rechner 15 cm geliefert, was Kathete a ist, nicht Kathete b.",
            },
            {
              "kind": "p",
              "text": "Der <a href=\"/right-triangle-projection-p-calculator/\">Rechner für Projektion p</a> kann helfen, wenn p selbst gefunden werden muss, und der <a href=\"/right-triangle-projection-q-calculator/\">Rechner für Projektion q</a> behandelt den umgekehrten Schritt. So oder so bleibt die Regel dieselbe: Finde zuerst q, dann verwende [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "So findest du Kathete B, wenn die andere Projektion bekannt ist",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Satz verbindet drei Größen, also findet das Umstellen die jeweils fehlende. Die drei Formen sind:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten zeigt jede Umstellung, was sie findet und was zuerst bekannt sein muss.",
            },
          ],
          "h2": "Beziehung zwischen Kathete B, Hypotenuse und Projektion Q",
          "table": {
            "headers": [
              "Fehlende Größe",
              "Formel",
              "Benötigte bekannte Werte",
            ],
            "rows": [
              [
                "Kathete b",
                "[[b = \\sqrt{c \\times q}]]",
                "Hypotenuse c und Projektion q",
              ],
              [
                "Hypotenuse c",
                "[[c = \frac{b^2}{q}]]",
                "Kathete b und Projektion q",
              ],
              [
                "Projektion q",
                "[[q = \frac{b^2}{c}]]",
                "Kathete b und Hypotenuse c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kathete a folgt dem Spiegelbild der Formel für Kathete b. Wo Kathete b mit der Projektion q gepaart ist, ist Kathete a mit der Projektion p gepaart:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Verwende ein einheitliches Dreieck, um beide Katheten zusammen zu sehen: [[c = 25]], [[p = 9]] und [[q = 16]]. Dann [[a = \\sqrt{25 \\times 9} = 15]] und [[b = \\sqrt{25 \\times 16} = 20]]. Die beiden Katheten teilen dieselbe Hypotenuse, stützen sich aber auf unterschiedliche Projektionen, weshalb die korrekte Bestimmung von p und q entscheidet, welche Kathete du erhältst.",
            },
            {
              "kind": "p",
              "text": "Die Katheten schränken sich auch gegenseitig durch den Satz des Pythagoras ein, der zwei Abschnitte weiter unten behandelt wird: Die Kenntnis einer Kathete und der Hypotenuse bestimmt die andere. Für Aufgaben, die von p statt q ausgehen, führt der <a href=\"/right-triangle-leg-a-from-projection-calculator/\">Rechner für Kathete a aus der Projektion</a> dieselbe Methode mit der anderen Paarung aus.",
            },
          ],
          "h2": "Beziehung zwischen Kathete B und Kathete A",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das die Projektion p gepaart mit Kathete a der Projektion q gepaart mit Kathete b gegenüberstellt, mit c gleich 25, p gleich 9 und q gleich 16",
            "caption": "Richtig gepaart: a verwendet p (sqrt(25 x 9) = 15) und b verwendet q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz und der Satz des Pythagoras stimmen exakt überein, und die Algebra zeigt, warum. Beginne mit den beiden Projektionsformeln:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Addiere die passende Formel für Kathete a, [[a^2 = c \\times p]], um Folgendes zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ausklammern von c auf der rechten Seite ergibt [[a^2 + b^2 = c(p + q)]]. Da [[p + q = c]], liefert die Einsetzung das vertraute Ergebnis:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine Zahlenprüfung mit dem 9-16-25-Dreieck bestätigt es: [[a^2 + b^2 = 225 + 400 = 625]] und [[c^2 = 25^2 = 625]]. Die beiden Sätze sind keine Rivalen. Der Projektionssatz teilt die pythagoreische Beziehung in ein Stück pro Kathete auf, und das Addieren der Stücke baut sie wieder auf.",
            },
          ],
          "h2": "Beziehung zwischen Projektion Q und dem Satz des Pythagoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Drei unabhängige Prüfungen fangen fast jeden Fehler ab. Führe bei jeder Antwort mindestens eine davon durch, und alle drei, wenn die Aufgabe wichtig ist.",
            },
            {
              "kind": "h3",
              "text": "Methode 1: Prüfung mit dem Projektionssatz",
            },
            {
              "kind": "p",
              "text": "Quadriere deine Antwort und vergleiche sie mit dem Produkt aus c und q. Für [[c = 25]], [[q = 16]] und [[b = 20]]: [[b^2 = 400]] und [[c \\times q = 400]], also besteht die Antwort die Prüfung. Wenn die beiden Zahlen voneinander abweichen, ist entweder bei den Eingaben oder beim Wurzelziehen etwas schiefgegangen.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Prüfung mit dem Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Bestimme Kathete a aus p und prüfe dann [[a^2 + b^2 = c^2]]. Mit [[p = 9]], [[q = 16]] und [[c = 25]]: [[a = 15]], [[b = 20]] und [[225 + 400 = 625 = 25^2]]. Diese Prüfung geht über den Rechner hinaus, da sie das ganze Dreieck testet, nicht nur die eine Formel.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Größen- und Additionsprüfungen",
            },
            {
              "kind": "p",
              "text": "Bestätige, dass q kleiner als c ist, dass [[p + q = c]] gilt, wenn p bekannt ist, und dass Kathete b kürzer als die Hypotenuse ist. Im Beispiel ist 16 kleiner als 25, [[9 + 16 = 25]], und 20 ist kürzer als 25. Jeder Fehlschlag hier deutet auf einen Beschriftungsfehler hin, nicht auf einen Rechenfehler.",
            },
          ],
          "h2": "So prüfst du die berechnete Kathete B",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Acht Eigenschaften folgen direkt aus [[b = \\sqrt{c \\times q}]] und der Geometrie dahinter. Jede davon dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "items": [
                "Kathete b ist in einem nicht entarteten rechtwinkligen Dreieck immer kürzer als die Hypotenuse, da q nur ein Teil von c ist.",
                "Die Projektion q ist immer kleiner als c und immer positiv. Null- oder negative Projektionen beschreiben kein echtes Dreieck.",
                "Die Vergrößerung von q bei festem c vergrößert b, weil das Produkt innerhalb der Wurzel wächst.",
                "Die Vergrößerung von c bei festem q vergrößert b mathematisch, sofern die neuen Werte weiterhin ein echtes Dreieck mit q kleiner als c beschreiben.",
                "Das Vertauschen von p und q ändert, welche Kathete berechnet wird: q liefert Kathete b und p liefert Kathete a.",
                "Gleiche Projektionen ergeben gleiche Katheten. Mit c = 20 und p = q = 10 sind beide Katheten gleich 10 mal der Quadratwurzel aus 2, etwa 14,142.",
                "Das Ergebnis ist eine Länge, keine Fläche. Das quadrierte Produkt ist nur ein Zwischenschritt, und die Quadratwurzel stellt die gewöhnlichen Längeneinheiten wieder her.",
                "Das Skalieren aller Messungen um denselben Faktor skaliert Kathete b um diesen Faktor. Die Verdopplung von c und q verdoppelt b, da sich das Produkt vervierfacht und seine Wurzel verdoppelt.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Wenn die Höhe genau im Mittelpunkt der Hypotenuse landet, ist das Dreieck gleichschenklig, und die beiden Katheten müssen übereinstimmen, wie das Diagramm unten zeigt.",
            },
          ],
          "h2": "Wichtige Eigenschaften von Kathete B aus der Projektion",
          "image": {
            "alt": "Gleichschenkliges rechtwinkliges Dreieck mit Hypotenuse 20, gleichen Projektionen p und q von 10 und Katheten a und b, die jeweils gleich 10 Wurzel 2 sind",
            "caption": "Gleiche Projektionen: c = 20 mit p = q = 10 ergibt a = b = 10 Wurzel 2, etwa 14,142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Auf jeden Fehler unten folgt seine Korrektur. Die meisten von ihnen gehen auf die Beschriftung zurück, nicht auf die Rechnung.",
            },
            {
              "kind": "steps",
              "steps": [
                "Die Quadratwurzel vergessen: cq als Antwort angeben. Mit c = 10 und q = 6,4 ist die Antwort 8 cm, nicht 64.",
                "b mit b zum Quadrat verwechseln: 64 ist b zum Quadrat in diesem Beispiel, während 8 die Kathete ist. Sage, welche du meinst, bevor du eine Zahl aufschreibst.",
                "Projektion p statt q verwenden: Die Eingabe von p liefert Kathete a. Mit c = 25 und p = 9 ist das Ergebnis 15 Kathete a, nicht Kathete b.",
                "Eine Kathete in das Hypotenusenfeld eingeben: Die Hypotenuse ist die Seite gegenüber dem rechten Winkel und die längste Seite. Eine als c eingegebene Kathete verzerrt jeden späteren Schritt.",
                "Die Hypotenuse mit einer Projektion verwechseln: c ist die ganze Seite, während q nur ein Teil davon ist. Prüfe vor dem Rechnen, ob q kleiner als c ist.",
                "q größer als oder gleich c verwenden: Ein solches Dreieck gibt es nicht, da q ein Teil von c ist. Prüfe die Diagrammbeschriftungen erneut, wenn das passiert.",
                "Zentimeter und Meter mischen: Rechne zuerst um, wie in Beispiel 7, wo 0,5 m vor der Multiplikation mit 20 cm zu 50 cm wurde.",
                "Negative Messungen verwenden: Längen sind positiv, also deutet eine negative Eingabe auf einen Datenfehler hin, nicht auf eine negative Kathete.",
                "Die Formel auf ein nicht rechtwinkliges Dreieck anwenden: Der Projektionssatz braucht die Höhe von einem rechten Winkel. Ohne rechten Winkel gibt es in diesem Sinne keine Projektion q.",
                "Zu früh runden: Das Runden des Produkts vor dem Wurzelziehen verschiebt die Antwort. Behalte die volle Genauigkeit bis zum letzten Schritt.",
                "Die falsche Seitenzuordnung im Diagramm verwenden: Die Paarung von q mit a oder von p mit b vertauscht die Katheten. Ordne q der Kathete zu, die den Eckpunkt B berührt.",
                "Die Höhe als Projektion behandeln: Die Höhe h steht senkrecht zur Hypotenuse, ist kein Teil von ihr, gehört also nie in das q-Feld.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn eine Antwort falsch aussieht, halte inne und beschrifte das Diagramm neu, bevor du neu rechnest. Die meisten Fehler oben verschwinden, sobald p und q auf der Hypotenuse klar markiert sind und alles andere beiseitegelegt wird.",
            },
          ],
          "h2": "Häufige Fehler bei der Bestimmung von Kathete B aus der Projektion",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Anwendung sind Geometrie-Hausaufgaben und Klassenarbeiten, bei denen Projektionsaufgaben prüfen, ob Schülerinnen und Schüler ein Diagramm beschriften und [[b^2 = c \\times q]] anwenden können, statt aus Gewohnheit zum Satz des Pythagoras zu greifen. Übungen zu ähnlichen Dreiecken verwenden denselben Aufbau, da der Beweis selbst eine Übung im Abgleichen entsprechender Seiten ist.",
            },
            {
              "kind": "p",
              "text": "Das technische Zeichnen verwendet den Satz, wenn ein rechtwinkliges Dreieck aus Teilmaßen rekonstruiert werden muss: Wenn eine Zeichnung die Hypotenuse und den Fußpunkt der Höhe angibt, folgt die fehlende Kathete, ohne die Form neu zu vermessen. Lehrkräfte verwenden den Aufbau auch als Brückenstunde zwischen Streckenaddition und Ähnlichkeit.",
            },
            {
              "kind": "p",
              "text": "Eine Bedingung begrenzt jede Anwendung: Die erforderliche Geometrie des rechtwinkligen Dreiecks muss tatsächlich vorliegen. Der Satz beschreibt exakte geometrische Beziehungen, keine ungefähren Feldmessungen, ersetzt also niemals sorgfältige Vermessung oder professionelle ingenieurtechnische Messung. Innerhalb seines richtigen Rahmens verwandelt er jedoch zwei bekannte Längen mit einer einzigen Multiplikation und einer Quadratwurzel in eine dritte.",
            },
          ],
          "h2": "Praktische Anwendungen des Projektionssatzes",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Versuche alle sechs Aufgaben auf Papier, bevor du die Antworten liest. Keiner der Werte wiederholt die durchgerechneten Beispiele, und die letzte Aufgabe verbindet mehrere Ideen aus diesem Leitfaden.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 36]] cm und die Projektion [[q = 9]] cm. Finde Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimale Projektion",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 26]] cm und [[q = 6.5]] cm, finde Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Große Hypotenuse",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 100]] cm und [[q = 36]] cm, finde Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umrechnung von Einheiten",
            },
            {
              "kind": "p",
              "text": "Eine Hypotenuse misst [[c = 1.5]] m und ihre Projektion q misst 24 cm. Finde Kathete b in Zentimetern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Finde zuerst q aus p und c",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 65]] cm und die Projektion [[p = 49]] cm. Finde Kathete b.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrere Schritte mit Kathete a und Pythagoras",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 50]] cm und [[q = 32]] cm, finde Kathete b, dann finde Kathete a und prüfe das Ergebnis mit dem Satz des Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: Rechne 1,5 m in 150 cm um, dann [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: Zuerst [[q = 65 - 49 = 16]] cm, dann [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Die andere Projektion ist [[p = 50 - 32 = 18]] cm, also [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Prüfung: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Übungsaufgaben mit Antworten",
        },
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "Rechner für Kathete B aus der Projektion am rechtwinkligen Dreieck",
        "sec-calculate": "Kathete B aus der Projektion am rechtwinkligen Dreieck berechnen",
        "sec-what-leg-b": "Was ist Kathete B in einem rechtwinkligen Dreieck?",
        "sec-what-projection-q": "Was ist die Projektion Q in einem rechtwinkligen Dreieck?",
        "sec-formula": "Formel für Kathete B aus der Projektion am rechtwinkligen Dreieck",
        "sec-why-sqrt": "Warum steht eine Quadratwurzel in der Formel?",
        "sec-how": "So verwendest du den Rechner für Kathete B am rechtwinkligen Dreieck",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Bestimmung von Kathete B",
        "sec-diagram": "Diagramm für Kathete B aus der Projektion am rechtwinkligen Dreieck erklärt",
        "sec-proof": "Warum funktioniert der Projektionssatz?",
        "sec-examples": "Durchgerechnete Beispiele zur Bestimmung von Kathete B aus der Projektion",
        "sec-other-projection": "So findest du Kathete B, wenn die andere Projektion bekannt ist",
        "sec-relationship": "Beziehung zwischen Kathete B, Hypotenuse und Projektion Q",
        "sec-leg-a": "Beziehung zwischen Kathete B und Kathete A",
        "sec-pythagoras": "Beziehung zwischen Projektion Q und dem Satz des Pythagoras",
        "sec-verify": "So prüfst du die berechnete Kathete B",
        "sec-properties": "Wichtige Eigenschaften von Kathete B aus der Projektion",
        "sec-mistakes": "Häufige Fehler bei der Bestimmung von Kathete B aus der Projektion",
        "sec-applications": "Praktische Anwendungen des Projektionssatzes",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Entdecke verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
    },
};
