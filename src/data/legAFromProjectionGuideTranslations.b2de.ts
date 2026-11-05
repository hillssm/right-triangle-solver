// legAFromProjectionGuideTranslations.bde.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B2_DE = {
  "de": {
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "answer": "Die Formel lautet [[a = \\sqrt{c \\times p}]], wobei c die vollständige Hypotenuse ist und p die Projektion, die zu Kathete a gehört. Zum Beispiel ergeben [[c = 10]] cm und [[p = 3.6]] cm den Wert [[a = 6]] cm.",
          "question": "Wie lautet die Formel zur Bestimmung von Kathete a aus Projektion p?",
        },
        {
          "answer": "Die Multiplikation folgt aus ähnlichen Dreiecken. Das Dreieck ACD ist ähnlich zum Dreieck ABC, woraus [[p / a = a / c]] folgt, und durch Kreuzmultiplikation erhält man [[a^2 = c \\times p]]. Das Produkt ist das Quadrat der Kathete, nicht die Kathete selbst.",
          "question": "Warum multiplizieren wir c und p?",
        },
        {
          "answer": "Weil das Produkt cp gleich a zum Quadrat ist, nicht gleich a. Die Quadratwurzel macht das Quadrieren rückgängig und liefert eine gewöhnliche Länge zurück. Ohne sie würdest du im Beispiel mit c = 10 und p = 3.6 den Wert 36 statt 6 angeben.",
          "question": "Warum ist eine Quadratwurzel nötig?",
        },
        {
          "answer": "Projektion p ist der Abschnitt der Hypotenuse neben dem Eckpunkt A, der entsteht, wenn die Höhe vom rechten Winkel auf die Hypotenuse trifft. Im Dreieck ABC mit Höhe CD gilt [[p = AD]], und p liegt entlang der Hypotenuse.",
          "question": "Was stellt Projektion p dar?",
        },
        {
          "answer": "Nein. Kathete a ist die Seite AC, eine der Seiten, die den rechten Winkel bilden, während Projektion p der Abschnitt AD entlang der Hypotenuse ist. Es sind verschiedene Längen an verschiedenen Stellen, die nur durch [[a^2 = c \\times p]] miteinander verbunden sind.",
          "question": "Ist Projektion p dasselbe wie Kathete a?",
        },
        {
          "answer": "Nicht direkt. Projektion q gehört zu Kathete b, sodass die Eingabe von q stattdessen Kathete b liefert. Um Kathete a aus q zu finden, bestimme zuerst p mit [[p = c - q]] und verwende dann [[a = \\sqrt{c \\times p}]].",
          "question": "Kann ich Projektion q verwenden, um Kathete a zu finden?",
        },
        {
          "answer": "Ziehe sie von der Hypotenuse ab: [[p = c - q]]. Mit [[c = 25]] cm und [[q = 16]] cm ergibt sich [[p = 9]] cm, und dann gilt [[a = \\sqrt{25 \\times 9} = 15]] cm.",
          "question": "Was mache ich, wenn ich nur Projektion q kenne?",
        },
        {
          "answer": "Nein. Projektion p ist nur ein Teil der Hypotenuse und muss daher kleiner sein als c. Wäre p gleich c, dann wäre q null und das Dreieck wäre entartet statt eines echten rechtwinkligen Dreiecks.",
          "question": "Kann Projektion p gleich der Hypotenuse sein?",
        },
        {
          "answer": "Quadriere die Antwort und prüfe, ob sie gleich [[c \\times p]] ist. Du kannst auch Kathete b aus q bestimmen und [[a^2 + b^2 = c^2]] prüfen, und bestätigen, dass p kleiner ist als c und Kathete a kürzer als die Hypotenuse.",
          "question": "Wie prüfe ich die berechnete Kathete?",
        },
        {
          "answer": "Die Höhe trifft die Hypotenuse in ihrem Mittelpunkt, und die beiden Katheten sind gleich, sodass das Dreieck ein gleichschenkliges rechtwinkliges Dreieck ist. Mit [[c = 20]] cm und [[p = q = 10]] cm sind beide Katheten gleich [[10\\sqrt{2}]] cm, also etwa 14.142 cm.",
          "question": "Was geschieht, wenn p und q gleich sind?",
        },
        {
          "answer": "Ja, mit der spiegelbildlichen Formel [[b = \\sqrt{c \\times q}]]. Kathete b gehört zu Projektion q, genauso wie Kathete a zu p gehört. Der <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Rechner für Kathete B aus Projektion</a> ist genau für diese Berechnung gebaut.",
          "question": "Kann ich Kathete b mit demselben Satz finden?",
        },
        {
          "answer": "Ja. Das Addieren der beiden Projektionsformeln ergibt [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], da [[p + q = c]] gilt. Der Projektionssatz zerlegt die pythagoreische Beziehung in einen Teil pro Kathete.",
          "question": "Hängt der Projektionssatz mit dem Satz des Pythagoras zusammen?",
        },
      ],
      "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "relatedIntro": "Wähle das nächste Werkzeug nach den Maßen aus, die du bereits kennst, denn jeder Rechner unten bearbeitet eine bestimmte Aufgabe am rechtwinkligen Dreieck.",
      "relatedItems": [
        "Rechner für Projektionen am rechtwinkligen Dreieck",
        "Rechner für Projektion P am rechtwinkligen Dreieck",
        "Rechner für Projektion Q am rechtwinkligen Dreieck",
        "Rechner für Kathete B aus Projektion am rechtwinkligen Dreieck",
        "Rechner für Hypotenuse aus Projektionen am rechtwinkligen Dreieck",
        "Rechner für Höhe aus Projektionen am rechtwinkligen Dreieck",
        "Rechner für Seiten am rechtwinkligen Dreieck",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieser Rechner findet Kathete a eines rechtwinkligen Dreiecks, wenn du die vollständige Hypotenuse c und die Projektion p kennst, die zu Kathete a gehört. Du gibst diese beiden Längen ein, und er liefert die tatsächliche Seitenlänge von Kathete a zurück, keinen quadrierten Wert und keinen Projektionsabschnitt. Die Formel lautet [[a = \\sqrt{c \\times p}]], wobei c die vollständige Hypotenuse ist und p der Abschnitt der Hypotenuse neben Kathete a.",
            },
            {
              "kind": "p",
              "text": "Wenn zum Beispiel [[c = 10]] cm und [[p = 3.6]] cm gelten, dann ist [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Das Produkt 36 ist nur ein Zwischenschritt. Die Quadratwurzel verwandelt es wieder in eine Länge, und diese Länge ist die gesuchte Seite.",
            },
            {
              "kind": "p",
              "text": "Der Rechner steht oben auf dieser Seite, gefolgt von der Formel, einem beschrifteten Diagramm, einem Beweis des Projektionssatzes, durchgerechneten Beispielen und Prüfungen, die du auf jede Antwort anwenden kannst. Der Leitfaden eignet sich für Schülerinnen und Schüler der Mittel- und Oberstufe, Lehrkräfte, Nachhilfelehrkräfte und Eltern, die bei Geometriehausaufgaben helfen.",
            },
          ],
          "h2": "Rechner für Kathete A aus Projektion am rechtwinkligen Dreieck",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner hat zwei Eingabefelder. Das erste nimmt die Hypotenuse c auf, die vollständige Seite gegenüber dem rechten Winkel. Das zweite nimmt die Projektion p auf, den Abschnitt der Hypotenuse, der zu Kathete a gehört. Beide Längen müssen in derselben Einheit angegeben sein, rechne also zuerst um, wenn eine Messung in Zentimetern und die andere in Metern vorliegt.",
            },
            {
              "kind": "p",
              "text": "Projektion p muss kleiner sein als c. Diese Regel steckt in der Geometrie selbst: p ist nur ein Teil der Hypotenuse und kann daher niemals gleich der ganzen Seite sein oder sie übertreffen. Wenn dein p-Wert größer ist als c, hast du wahrscheinlich eine Kathete, die Höhe oder die falsche Projektion eingegeben.",
            },
            {
              "kind": "p",
              "text": "Klicke auf „Kathete a berechnen“, um das Ergebnis zu sehen, und verwende „Zurücksetzen“, um beide Felder vor einer neuen Aufgabe zu leeren. Das Ergebnis ist eine Länge in der eingegebenen Einheit, sodass eine Hypotenuse von 10 cm und eine Projektion von 3.6 cm den Wert 6 cm liefern, ohne einen zusätzlichen Umrechnungsschritt.",
            },
          ],
          "h2": "Kathete A aus Projektion am rechtwinkligen Dreieck berechnen",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat zwei senkrecht aufeinander stehende Seiten, die Katheten genannt werden, und eine längste Seite, die Hypotenuse genannt wird. Die beiden Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt gegenüber diesem Winkel. In diesem Leitfaden ist das Dreieck ABC mit dem rechten Winkel bei C, Kathete a ist die Seite AC, Kathete b ist die Seite BC, und die Hypotenuse c ist die Seite AB.",
            },
            {
              "kind": "p",
              "text": "Kathete a ist eine der beiden Seiten, die den rechten Winkel bilden, also eine echte Seite des Dreiecks. Sie ist kein Abschnitt, der ins Dreieck eingezeichnet wird, und sie ist nicht die Projektion p. Die Projektion p liegt flach entlang der Hypotenuse, während Kathete a vom Eckpunkt A zum Eckpunkt C mit dem rechten Winkel verläuft. Diese beiden Rollen auseinanderzuhalten, ist der erste Schritt zur richtigen Anwendung der Formel.",
            },
            {
              "kind": "p",
              "text": "Kathete a unterscheidet sich von Kathete b nur durch ihre Lage: Kathete a berührt den Eckpunkt A, und Kathete b berührt den Eckpunkt B. Jede Kathete hat ihre eigene Projektion, weshalb die Formel für a p verwendet, während die Formel für b q verwendet, eine Zuordnung, die durch die Beschriftung festgelegt ist.",
            },
            {
              "kind": "p",
              "text": "In jedem nicht entarteten rechtwinkligen Dreieck ist Kathete a kürzer als die Hypotenuse. Das ergibt eine schnelle Plausibilitätsprüfung für jede Antwort: Wenn deine berechnete Kathete a länger herauskommt als c, ist bei den Eingaben oder der Rechnung etwas schiefgelaufen, und die Beschriftungen im Diagramm sind die erste Stelle, an der du nachsehen solltest.",
            },
          ],
          "h2": "Was ist Kathete A in einem rechtwinkligen Dreieck?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zeichne die Höhe vom Eckpunkt mit dem rechten Winkel C senkrecht auf die Hypotenuse AB. Sie trifft die Hypotenuse in einem Punkt, der Fußpunkt genannt und mit D bezeichnet wird. Dieser Punkt teilt die Hypotenuse in zwei aneinandergrenzende Abschnitte, und diese Abschnitte sind die Projektionen. Der Abschnitt AD ist Projektion p, und der Abschnitt DB ist Projektion q.",
            },
            {
              "kind": "p",
              "text": "Projektion p gehört zu Kathete a, weil sie neben dem Eckpunkt A liegt, demselben Eckpunkt, an dem Kathete a beginnt. Im kleinen Dreieck ACD ist Kathete a die Hypotenuse und p eine ihrer Katheten, und genau diese geometrische Verbindung lässt den Projektionssatz funktionieren. Projektion q gehört nach derselben Logik zu Kathete b, die den Eckpunkt B berührt.",
            },
            {
              "kind": "p",
              "text": "Projektionen sind Längen entlang der Hypotenuse, gemessen in derselben Einheit wie die anderen Seiten. Sie stehen zu nichts senkrecht, und sie sind keine Seiten des ursprünglichen Dreiecks. Eine Projektion stellst du dir am besten als den Schatten vor, den eine Kathete auf die Hypotenuse wirft, wenn die Höhe gerade auf sie herabfällt.",
            },
            {
              "kind": "p",
              "text": "Weil p und q die beiden Teile einer geraden Seite sind, ergeben sie zusammen die ganze Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Diese Addition ist für sich genommen nützlich. Wenn du c und eine Projektion kennst, kannst du die andere durch Subtraktion finden, ein Schritt, den der spätere Abschnitt über die andere Projektion vollständig durcharbeitet.",
            },
          ],
          "h2": "Was ist Projektion P in einem rechtwinkligen Dreieck?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz besagt, dass das Quadrat von Kathete a gleich der Hypotenuse multipliziert mit ihrer Projektion ist:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Das Ziehen der positiven Quadratwurzel auf beiden Seiten ergibt die Arbeitsformel für diese Seite:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Die Berechnung läuft in zwei deutlich getrennten Schritten ab. Schritt 1 multipliziert die Hypotenuse mit der Projektion, und das Ergebnis ist eine quadrierte Länge, keine Seite. Schritt 2 zieht die positive Quadratwurzel, die diese quadrierte Länge wieder in eine gewöhnliche Länge verwandelt. Schritt 2 auszulassen, ist der häufigste Fehler bei dieser Formel, und der nächste Abschnitt erklärt, warum die Quadratwurzel nicht weggelassen werden darf.",
            },
            {
              "kind": "p",
              "text": "Bei den Einheiten ist in beiden Schritten Sorgfalt nötig. Wenn c und p beide in Zentimetern vorliegen, ist ihr Produkt in Quadratzentimetern, und die Quadratwurzel liefert wieder Zentimeter. Das Mischen von Einheiten, etwa Meter für c und Zentimeter für p, ergibt ein bedeutungsloses Produkt, rechne also vor dem Multiplizieren in eine Einheit um. Die positive Wurzel wird verwendet, weil eine Seitenlänge immer positiv ist.",
            },
            {
              "kind": "p",
              "text": "Ein kleines Zahlenbeispiel zeigt beide Schritte in Aktion. Mit [[c = 10]] cm und [[p = 3.6]] cm ergibt Schritt 1 den Wert [[10 \\times 3.6 = 36]], und Schritt 2 ergibt [[a = \\sqrt{36} = 6]] cm. Die Zahl 36 beantwortet für sich allein keine Frage. Erst nach der Quadratwurzel wird sie zur Kathetenlänge.",
            },
          ],
          "h2": "Formel für Kathete A aus Projektion am rechtwinkligen Dreieck",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit Höhe CD, das zeigt, dass Kathete a zum Quadrat gleich der Hypotenuse c multipliziert mit Projektion p ist",
            "caption": "Der Projektionssatz: a zum Quadrat ist gleich c mal p, also ist a gleich der Quadratwurzel aus c mal p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadratwurzel steht dort, weil die Multiplikation eine quadrierte Größe erzeugt. Der Satz besagt nicht, dass Kathete a gleich dem Produkt aus c und p ist. Er besagt, dass das Quadrat von Kathete a gleich diesem Produkt ist. Ein Quadrat rückgängig zu machen, erfordert eine Quadratwurzel, genauso wie das Rückgängigmachen einer Verdopplung ein Halbieren erfordert.",
            },
            {
              "kind": "p",
              "text": "Nimm [[c = 10]] und [[p = 3.6]]. Ihr Produkt ist 36, und das ist [[a^2]], das Quadrat der Kathete. Die Kathete selbst ist die Zahl, die mit sich selbst multipliziert 36 ergibt, also 6. Die Schreibweise [[a = 36]] würde eine Seite von 36 Einheiten in einem Dreieck behaupten, dessen Hypotenuse nur 10 beträgt, was offenkundig unmöglich ist.",
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
              "Beispiel mit c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "Die Kathetenlänge selbst",
                "6",
              ],
              [
                "a zum Quadrat",
                "Die Kathetenlänge mit sich selbst multipliziert",
                "36",
              ],
              [
                "c mal p",
                "Das Produkt, das der Satz mit a zum Quadrat gleichsetzt",
                "36",
              ],
              [
                "Quadratwurzel aus cp",
                "Der Schritt, der a aus a zum Quadrat zurückgewinnt",
                "6",
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
                "Bestimme das rechtwinklige Dreieck in deiner Aufgabe und bestätige, dass es einen rechten Winkel hat.",
                "Finde die Höhe vom rechten Winkel und markiere, wo sie auf die Hypotenuse trifft.",
                "Bestimme die vollständige Hypotenuse c, die Seite gegenüber dem rechten Winkel.",
                "Bestimme Projektion p, den Abschnitt der Hypotenuse neben dem Eckpunkt A, an dem Kathete a beginnt.",
                "Prüfe, ob p kleiner ist als c. Wenn nicht, beschrifte das Diagramm neu, bevor du weitermachst.",
                "Rechne c und p in dieselbe Einheit um, wenn sie in verschiedenen Einheiten gegeben waren.",
                "Gib c in das Feld „Hypotenuse c“ ein.",
                "Gib p in das Feld „Projektion p“ ein. Gib hier nicht q ein, denn das würde stattdessen Kathete b liefern.",
                "Klicke auf „Kathete a berechnen“ und lies das Ergebnis ab.",
                "Verwende „Zurücksetzen“, bevor du eine neue Aufgabe beginnst.",
              ],
            },
            {
              "kind": "p",
              "text": "Der Rechner akzeptiert kein q, sodass eine Aufgabe, die nur q angibt, einen zusätzlichen Subtraktionsschritt braucht, der unten behandelt wird. Die Eingabe von q in das p-Feld liefert zwar eine Zahl, aber es wird die falsche Kathete sein, sodass die Beschriftungsprüfung in Schritt 4 am wichtigsten ist.",
            },
          ],
          "h2": "So benutzt du den Rechner für Kathete A am rechtwinkligen Dreieck",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Verwende [[c = 10]] cm und [[p = 3.6]] cm. Die vier Schritte unten zeigen die vollständige Rechnung, ohne dass etwas ausgelassen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Formel aufschreiben: a = sqrt(cp).",
                "Werte einsetzen: a = sqrt(10 x 3.6).",
                "Innerhalb der Wurzel multiplizieren: a = sqrt(36).",
                "Quadratwurzel ziehen: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 6 cm ist die tatsächliche senkrechte Seite AC, keine Projektion und keine Fläche. Eine kurze Prüfung schließt den Kreis: [[a^2 = 6^2 = 36]] und [[c \\times p = 10 \\times 3.6 = 36]], sodass beide Seiten des Satzes übereinstimmen.",
            },
            {
              "kind": "p",
              "text": "Zum Vergleich ist die andere Projektion [[q = 10 - 3.6 = 6.4]] cm, Kathete b ist [[b = \\sqrt{10 \\times 6.4} = 8]] cm, und die Höhe ist [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, was das bekannte 6-8-10-rechtwinklige Dreieck bestätigt.",
            },
          ],
          "h2": "Schritt-für-Schritt-Beispiel zur Bestimmung von Kathete A",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit Hypotenuse 10 cm und Projektion 3.6 cm, durchgerechnet zu Kathete a gleich 6 cm",
            "caption": "Durchgerechnetes Beispiel: c = 10 cm und p = 3.6 cm ergeben a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist Kathete a, die Seite BC ist Kathete b, und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und berührt sie bei D, und die Markierung des rechten Winkels bei D bestätigt, dass CD wirklich senkrecht steht.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt die Hypotenuse in zwei Teile: Der Abschnitt AD ist Projektion p und der Abschnitt DB ist Projektion q. Kathete a und Projektion p sind hervorgehoben, weil sie das Paar sind, um das es auf dieser Seite geht. Verfolge das Diagramm in dieser Reihenfolge, um die Beschriftungen zu festigen: Beginne bei A, laufe entlang Kathete a nach C, dann entlang Kathete b nach B, dann zurück entlang der Hypotenuse von B nach A und halte bei D an, um die Teilung in q und p zu sehen.",
            },
            {
              "kind": "p",
              "text": "Die Zuordnung von a zu p wird im kleinen Dreieck ACD sichtbar, in dem Kathete a die Hypotenuse ist und p die Seite, die entlang der großen Hypotenuse liegt. Weil das Dreieck ACD ähnlich zum Dreieck ABC ist, ist das Verhältnis von p zu a im kleinen Dreieck gleich dem Verhältnis von a zu c im großen Dreieck, was der Beweisabschnitt in [[a^2 = cp]] verwandelt.",
            },
          ],
          "h2": "Diagramm zur Kathete A aus Projektion am rechtwinkligen Dreieck erklärt",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C, Höhe CD auf Hypotenuse AB, Kathete a und Projektion p hervorgehoben, mit Katheten a und b, Hypotenuse c, Projektionen p und q sowie Höhe h beschriftet",
            "caption": "Hauptdreieck ABC: Höhe CD teilt Hypotenuse AB in Projektion p (AD) und Projektion q (DB), wobei Kathete a (AC) hervorgehoben ist.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Beweis beruht auf ähnlichen Dreiecken. Das Zeichnen der Höhe CD teilt das Dreieck ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, und beide sind ähnlich zum ursprünglichen Dreieck. Ähnlichkeit bedeutet, dass ihre entsprechenden Seiten im selben Verhältnis bleiben, und eines dieser Verhältnisse liefert den Projektionssatz direkt.",
            },
            {
              "kind": "p",
              "text": "Konzentriere dich auf das Dreieck ACD und das ganze Dreieck ABC. Beide enthalten den Winkel bei A, und beide enthalten einen rechten Winkel, sodass auch ihre dritten Winkel übereinstimmen müssen. Das Zuordnen der Seiten, die an denselben Stellen sitzen, ergibt die Proportion:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Setze nun die üblichen Symbole ein: [[AD = p]], [[AC = a]] und [[AB = c]]. Die Proportion wird zu:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Kreuzmultiplikation beseitigt die Brüche. Der linke Zähler mal dem rechten Nenner ist gleich dem rechten Zähler mal dem linken Nenner, also [[p \\times c = a \\times a]], was Folgendes ist:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Das Ziehen der positiven Quadratwurzel auf beiden Seiten schließt den Beweis ab und ergibt [[a = \\sqrt{c \\times p}]]. Derselbe Gedankengang, angewandt auf das andere kleine Dreieck CBD, ergibt [[b^2 = c \\times q]]. Die Ähnlichkeit leistet die ganze Arbeit: Entsprechende Seiten ähnlicher Dreiecke bleiben proportional.",
            },
          ],
          "h2": "Warum funktioniert der Projektionssatz?",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben kleineren ähnlichen Dreiecken ACD und CBD, das die Proportion p durch a gleich a durch c zeigt",
            "caption": "Beweis mit ähnlichen Dreiecken: p durch a ist gleich a durch c, sodass Kreuzmultiplikation a zum Quadrat gleich c mal p ergibt.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, die Einsetzung und die endgültige Antwort. Der Kommentar bleibt kurz, damit die Rechnung sichtbar bleibt, und jedes Beispiel hält seine Einheiten von Anfang bis Ende einheitlich.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 10]] cm und [[p = 4]] cm, die Formel ergibt [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], also [[a \\approx 6.325]] cm. Das Produkt 40 ist kein perfektes Quadrat, sodass die Antwort als Näherung bleibt, gerundet auf drei Dezimalstellen. Beachte, dass 6.325 cm kürzer ist als die 10 cm lange Hypotenuse, wie es sein muss.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Ergebnis als perfektes Quadrat",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 10]] cm und [[p = 3.6]] cm, also [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Wenn das Produkt ein perfektes Quadrat ist, ist die Antwort exakt, ohne dass gerundet werden muss. Es ist dasselbe Dreieck wie im Schritt-für-Schritt-Beispiel, und seine andere Kathete beträgt 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Größeres Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 25]] m und [[p = 9]] m, also [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Größere Zahlen ändern nichts an der Methode: multiplizieren, dann die Wurzel ziehen. Die andere Projektion hier beträgt 16 m, die zu einer Kathete von 20 m gehört, womit sich das klassische 15-20-25-Dreieck ergibt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Dezimalmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 12.5]] cm und [[p = 3.2]] cm, also [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], also [[a \\approx 6.325]] cm. Das stimmt im Wert mit Beispiel 1 überein, weil beide Produkte gleich 40 sind, eine nützliche Erinnerung daran, dass verschiedene Eingaben dasselbe Produkt haben können. Behalte das vollständige Produkt innerhalb der Wurzel bis zum letzten Rundungsschritt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Gleiche Hypotenusenprojektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 20]] cm und [[p = 10]] cm, also [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, also [[a \\approx 14.142]] cm. Gleiche Projektionen bedeuten, dass die Höhe den Mittelpunkt der Hypotenuse trifft, was genau dann geschieht, wenn die beiden Katheten gleich sind. Das Dreieck ist daher ein gleichschenkliges rechtwinkliges Dreieck, und Kathete b ist gleich Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Kleine Maße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 8]] mm und [[p = 2]] mm, also [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Kleine Einheiten funktionieren genau wie große, und die Antwort bleibt in Millimetern, weil beide Eingaben in Millimetern waren. Ein Problem herunterzuskalieren, ändert nie die Schritte.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Verschiedene Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 0.5]] m und [[p = 20]] cm, rechne zuerst um: 0.5 m sind 50 cm. Dann gilt [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], also [[a \\approx 31.623]] cm. Das Multiplizieren von 0.5 mit 20 ohne Umrechnung hätte eine Wurzel von 10 ergeben, eine falsche Antwort ohne gültige Einheit dahinter.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Bruchmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 16]] ft und [[p = 4]] ft, also [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Das Produkt 64 ist ein perfektes Quadrat, sodass die Antwort exakt ist. Eine schnelle Plausibilitätsprüfung gelingt: 8 ft sind die Hälfte der Hypotenuse, und die andere Kathete ergibt etwa 13.856 ft, was länger ist als a, aber immer noch kürzer als 16 ft.",
            },
          ],
          "h2": "Durchgerechnete Beispiele zur Bestimmung von Kathete A aus Projektion",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Manche Aufgaben geben q statt p an. Der Rechner auf dieser Seite akzeptiert kein q, aber das ist nur ein Umweg von einem Schritt, keine Sackgasse. Da die beiden Projektionen zusammen die Hypotenuse ergeben, subtrahiere zuerst, um p zurückzugewinnen:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Nimm [[c = 25]] cm und [[q = 16]] cm. Die Subtraktion ergibt [[p = 25 - 16 = 9]] cm. Nun gilt die gewöhnliche Formel: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Hättest du 16 direkt als p eingegeben, hätte der Rechner 20 cm geliefert, was Kathete b ist, nicht Kathete a.",
            },
            {
              "kind": "p",
              "text": "Der <a href=\"/right-triangle-projection-q-calculator/\">Rechner für Projektion Q</a> kann helfen, wenn q selbst erst gefunden werden muss, und der <a href=\"/right-triangle-projection-p-calculator/\">Rechner für Projektion P</a> deckt den umgekehrten Schritt ab. So oder so bleibt die Regel dieselbe: Finde zuerst p, dann verwende [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "So findest du Kathete A, wenn die andere Projektion bekannt ist",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Satz verbindet drei Größen, sodass das Umstellen die jeweils fehlende Größe findet. Die drei Formen sind:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten zeigt jede Umstellung, was sie findet und was zuerst bekannt sein muss.",
            },
          ],
          "h2": "Beziehung zwischen Kathete A, Hypotenuse und Projektion P",
          "table": {
            "headers": [
              "Fehlende Größe",
              "Formel",
              "Bekannte Werte, die nötig sind",
            ],
            "rows": [
              [
                "Kathete a",
                "a = sqrt(cp)",
                "Hypotenuse c und Projektion p",
              ],
              [
                "Hypotenuse c",
                "c = a zum Quadrat / p",
                "Kathete a und Projektion p",
              ],
              [
                "Projektion p",
                "p = a zum Quadrat / c",
                "Kathete a und Hypotenuse c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Kathete b folgt dem Spiegelbild der Formel für Kathete a. Wo Kathete a zu Projektion p gehört, gehört Kathete b zu Projektion q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Verwende ein einheitliches Dreieck, um beide Katheten zusammen zu sehen: [[c = 25]], [[p = 9]] und [[q = 16]]. Dann gilt [[a = \\sqrt{25 \\times 9} = 15]] und [[b = \\sqrt{25 \\times 16} = 20]]. Die beiden Katheten teilen sich dieselbe Hypotenuse, stützen sich aber auf verschiedene Projektionen, weshalb die richtige Bestimmung von p und q entscheidet, welche Kathete du erhältst.",
            },
            {
              "kind": "p",
              "text": "Die Katheten begrenzen sich auch gegenseitig durch den Satz des Pythagoras, der zwei Abschnitte weiter unten behandelt wird: Kennt man eine Kathete und die Hypotenuse, ist die andere bestimmt. Für Aufgaben, die von q statt von p ausgehen, führt der <a href=\"/right-triangle-leg-b-from-projection-calculator/\">Rechner für Kathete B aus Projektion</a> dieselbe Methode mit der anderen Zuordnung aus.",
            },
          ],
          "h2": "Beziehung zwischen Kathete A und Kathete B",
          "image": {
            "alt": "Rechtwinkliges Dreieck, das Projektion p gepaart mit Kathete a im Vergleich zu Projektion q gepaart mit Kathete b zeigt, mit c gleich 25, p gleich 9 und q gleich 16",
            "caption": "Richtig gepaart: a verwendet p (sqrt(25 x 9) = 15) und b verwendet q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Projektionssatz und der Satz des Pythagoras stimmen genau überein, und die Algebra zeigt, warum. Beginne mit den beiden Projektionsformeln:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Addiere die passende Formel für Kathete b, [[b^2 = c \\times q]], um Folgendes zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Das Ausklammern von c auf der rechten Seite ergibt [[a^2 + b^2 = c(p + q)]]. Da [[p + q = c]] gilt, liefert die Einsetzung das bekannte Ergebnis:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine Zahlenprüfung mit dem 9-16-25-Dreieck bestätigt es: [[a^2 + b^2 = 225 + 400 = 625]] und [[c^2 = 25^2 = 625]]. Die beiden Sätze sind keine Rivalen. Der Projektionssatz zerlegt die pythagoreische Beziehung in einen Teil pro Kathete, und das Addieren der Teile baut sie wieder auf.",
            },
          ],
          "h2": "Beziehung zwischen Projektion P und dem Satz des Pythagoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Drei unabhängige Prüfungen fangen fast jeden Fehler ab. Wende bei jeder Antwort mindestens eine davon an, und alle drei, wenn die Aufgabe wichtig ist.",
            },
            {
              "kind": "h3",
              "text": "Methode 1: Prüfung mit dem Projektionssatz",
            },
            {
              "kind": "p",
              "text": "Quadriere deine Antwort und vergleiche sie mit dem Produkt aus c und p. Für [[c = 25]], [[p = 9]] und [[a = 15]] gilt: [[a^2 = 225]] und [[c \\times p = 225]], sodass die Antwort besteht. Wenn die beiden Zahlen voneinander abweichen, ist entweder bei den Eingaben oder beim Wurzelziehen etwas schiefgelaufen.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Prüfung mit dem Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Finde Kathete b aus q und prüfe dann [[a^2 + b^2 = c^2]]. Mit [[p = 9]], [[q = 16]] und [[c = 25]] gilt: [[a = 15]], [[b = 20]] und [[225 + 400 = 625 = 25^2]]. Diese Prüfung geht über den Rechner hinaus, da sie das ganze Dreieck prüft, nicht nur die eine Formel.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Größen- und Additionsprüfungen",
            },
            {
              "kind": "p",
              "text": "Bestätige, dass p kleiner ist als c, dass [[p + q = c]] gilt, wenn q bekannt ist, und dass Kathete a kürzer ist als die Hypotenuse. Im Beispiel ist 9 kleiner als 25, [[9 + 16 = 25]], und 15 ist kürzer als 25. Jeder Fehler hier deutet auf einen Beschriftungsfehler hin, nicht auf einen Rechenfehler.",
            },
          ],
          "h2": "So prüfst du die berechnete Kathete A",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Acht Eigenschaften folgen direkt aus [[a = \\sqrt{c \\times p}]] und der Geometrie dahinter. Jede einzelne dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "items": [
                "Kathete a ist in einem nicht entarteten rechtwinkligen Dreieck immer kürzer als die Hypotenuse, da p nur ein Teil von c ist.",
                "Projektion p ist immer kleiner als c, und sie ist immer positiv. Null oder negative Projektionen beschreiben kein echtes Dreieck.",
                "Wächst p bei festem c, wächst auch a, weil das Produkt innerhalb der Wurzel größer wird.",
                "Wächst c bei festem p, wächst a rechnerisch, vorausgesetzt, die neuen Werte beschreiben weiterhin ein echtes Dreieck mit p kleiner als c.",
                "Das Vertauschen von p und q ändert, welche Kathete berechnet wird: p liefert Kathete a und q liefert Kathete b.",
                "Gleiche Projektionen ergeben gleiche Katheten. Mit c = 20 und p = q = 10 sind beide Katheten gleich 10 mal der Quadratwurzel aus 2, also etwa 14.142.",
                "Das Ergebnis ist eine Länge, keine Fläche. Das quadrierte Produkt ist nur ein Zwischenschritt, und die Quadratwurzel stellt gewöhnliche Längeneinheiten wieder her.",
                "Das Skalieren aller Maße um denselben Faktor skaliert Kathete a um diesen Faktor. Das Verdoppeln von c und p verdoppelt a, da sich das Produkt vervierfacht und seine Wurzel verdoppelt.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Wenn die Höhe genau im Mittelpunkt der Hypotenuse landet, ist das Dreieck gleichschenklig, und die beiden Katheten müssen übereinstimmen, wie das Diagramm unten zeigt.",
            },
          ],
          "h2": "Wichtige Eigenschaften von Kathete A aus Projektion",
          "image": {
            "alt": "Gleichschenkliges rechtwinkliges Dreieck mit Hypotenuse 20, gleichen Projektionen p und q von 10 und Katheten a und b jeweils gleich 10 Wurzel 2",
            "caption": "Gleiche Projektionen: c = 20 mit p = q = 10 ergibt a = b = 10 Wurzel 2, also etwa 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jeder Fehler unten ist von seiner Korrektur gefolgt. Die meisten von ihnen gehen auf die Beschriftung zurück, nicht auf die Rechnung.",
            },
            {
              "kind": "steps",
              "steps": [
                "Die Quadratwurzel vergessen: cp als Antwort angeben. Mit c = 10 und p = 3.6 ist die Antwort 6 cm, nicht 36.",
                "a mit a zum Quadrat verwechseln: 36 ist in diesem Beispiel a zum Quadrat, während 6 die Kathete ist. Sage, welche Größe du meinst, bevor du eine Zahl aufschreibst.",
                "Projektion q statt p verwenden: Die Eingabe von q liefert Kathete b. Mit c = 25 und q = 16 ist das Ergebnis 20 Kathete b, nicht Kathete a.",
                "Eine Kathete in das Hypotenusenfeld eingeben: Die Hypotenuse ist die Seite gegenüber dem rechten Winkel und die längste Seite. Eine als c eingegebene Kathete verzerrt jeden späteren Schritt.",
                "Die Hypotenuse mit einer Projektion verwechseln: c ist die ganze Seite, während p nur ein Teil davon ist. Prüfe vor der Berechnung, ob p kleiner ist als c.",
                "p größer als oder gleich c verwenden: Ein solches Dreieck existiert nicht, da p ein Teil von c ist. Prüfe die Diagrammbeschriftungen erneut, wenn das geschieht.",
                "Zentimeter und Meter mischen: Rechne zuerst um, wie in Beispiel 7, wo 0.5 m vor der Multiplikation mit 20 cm zu 50 cm wurden.",
                "Negative Maße verwenden: Längen sind positiv, sodass ein negativer Eintrag auf einen Datenfehler hinweist, nicht auf eine negative Kathete.",
                "Die Formel auf ein nicht rechtwinkliges Dreieck anwenden: Der Projektionssatz braucht die Höhe von einem rechten Winkel aus. Ohne rechten Winkel gibt es in diesem Sinne keine Projektion p.",
                "Zu früh runden: Das Runden des Produkts vor dem Wurzelziehen verschiebt die Antwort. Behalte die volle Genauigkeit bis zum letzten Schritt.",
                "Die falsche Seitenzuordnung im Diagramm verwenden: Das Paaren von p mit b oder von q mit a vertauscht die Katheten. Ordne p der Kathete zu, die den Eckpunkt A berührt.",
                "Die Höhe als Projektion behandeln: Die Höhe h steht senkrecht auf der Hypotenuse, sie ist kein Stück davon, sodass sie niemals in das p-Feld gehört.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn eine Antwort falsch aussieht, halte an und beschrifte das Diagramm neu, bevor du erneut rechnest. Die meisten Fehler oben verschwinden, sobald p und q auf der Hypotenuse klar markiert sind und alles andere beiseitegelegt wird.",
            },
          ],
          "h2": "Häufige Fehler bei der Bestimmung von Kathete A aus Projektion",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die unmittelbarste Anwendung ist Geometriehausaufgabe und Unterricht, wo Projektionsaufgaben prüfen, ob Schülerinnen und Schüler ein Diagramm beschriften und [[a^2 = c \\times p]] anwenden können, statt aus Gewohnheit zum Satz des Pythagoras zu greifen. Übungen zu ähnlichen Dreiecken verwenden denselben Aufbau, da der Beweis selbst eine Übung im Zuordnen entsprechender Seiten ist.",
            },
            {
              "kind": "p",
              "text": "Technisches Zeichnen nutzt den Satz, wenn ein rechtwinkliges Dreieck aus Teilmessungen rekonstruiert werden muss: Wenn eine Zeichnung die Hypotenuse und den Fußpunkt der Höhe angibt, folgt die fehlende Kathete, ohne die Form neu zu vermessen. Lehrkräfte nutzen den Aufbau auch als Brückenstunde zwischen Streckenaddition und Ähnlichkeit.",
            },
            {
              "kind": "p",
              "text": "Eine Bedingung begrenzt jede Anwendung: Die erforderliche Geometrie des rechtwinkligen Dreiecks muss tatsächlich vorliegen. Der Satz beschreibt exakte geometrische Beziehungen, keine ungefähren Feldmessungen, sodass er sorgfältiges Vermessen oder professionelle ingenieurtechnische Messung niemals ersetzt. In seinem richtigen Rahmen jedoch verwandelt er zwei bekannte Längen mit einer einzigen Multiplikation und einer Quadratwurzel in eine dritte.",
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
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 36]] cm und die Projektion [[p = 4]] cm. Finde Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimale Projektion",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 26]] cm und [[p = 6.5]] cm, finde Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Große Hypotenuse",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 100]] cm und [[p = 64]] cm, finde Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Einheitenumrechnung",
            },
            {
              "kind": "p",
              "text": "Eine Hypotenuse misst [[c = 1.2]] m und ihre Projektion p misst 30 cm. Finde Kathete a in Zentimetern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Finde zuerst p aus q und c",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Hypotenuse [[c = 65]] cm und die Projektion [[q = 49]] cm. Finde Kathete a.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrstufig mit Kathete b und Pythagoras",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[c = 50]] cm und [[p = 18]] cm, finde Kathete a, dann finde Kathete b und prüfe das Ergebnis mit dem Satz des Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: Rechne 1.2 m in 120 cm um, dann gilt [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: Zuerst gilt [[p = 65 - 49 = 16]] cm, dann [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Die andere Projektion ist [[q = 50 - 18 = 32]] cm, also [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Prüfung: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Übungsaufgaben mit Lösungen",
        },
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "Rechner für Kathete A aus Projektion am rechtwinkligen Dreieck",
        "sec-calculate": "Kathete A aus Projektion am rechtwinkligen Dreieck berechnen",
        "sec-what-leg-a": "Was ist Kathete A in einem rechtwinkligen Dreieck?",
        "sec-what-projection-p": "Was ist Projektion P in einem rechtwinkligen Dreieck?",
        "sec-formula": "Formel für Kathete A aus Projektion am rechtwinkligen Dreieck",
        "sec-why-sqrt": "Warum steht eine Quadratwurzel in der Formel?",
        "sec-how": "So benutzt du den Rechner für Kathete A am rechtwinkligen Dreieck",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Bestimmung von Kathete A",
        "sec-diagram": "Diagramm zur Kathete A aus Projektion am rechtwinkligen Dreieck erklärt",
        "sec-proof": "Warum funktioniert der Projektionssatz?",
        "sec-examples": "Durchgerechnete Beispiele zur Bestimmung von Kathete A aus Projektion",
        "sec-other-projection": "So findest du Kathete A, wenn die andere Projektion bekannt ist",
        "sec-relationship": "Beziehung zwischen Kathete A, Hypotenuse und Projektion P",
        "sec-leg-b": "Beziehung zwischen Kathete A und Kathete B",
        "sec-pythagoras": "Beziehung zwischen Projektion P und dem Satz des Pythagoras",
        "sec-verify": "So prüfst du die berechnete Kathete A",
        "sec-properties": "Wichtige Eigenschaften von Kathete A aus Projektion",
        "sec-mistakes": "Häufige Fehler bei der Bestimmung von Kathete A aus Projektion",
        "sec-applications": "Praktische Anwendungen des Projektionssatzes",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
        "sec-faq": "Häufig gestellte Fragen",
      },
    },
};
