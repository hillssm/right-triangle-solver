// inradiusGuideTranslations.bde.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B2_DE = {
  "de": {
      "meta": {
        "title": "Inkreisradius-Rechner für rechtwinklige Dreiecke – r aus den Seiten finden",
        "description": "Verwenden Sie den Inkreisradius-Rechner für rechtwinklige Dreiecke, um r aus den Katheten a und b und der Hypotenuse c zu finden, mit der Formel, einem durchgerechneten 6-8-10-Beispiel und Schritt-für-Schritt-Prüfungen.",
        "primaryKeyword": "Inkreisradius-Rechner für rechtwinklige Dreiecke",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "Inkreisradius-Rechner für rechtwinklige Dreiecke",
        "sec-calculate": "Den Inkreisradius eines rechtwinkligen Dreiecks berechnen",
        "sec-what-inradius": "Was ist der Inkreisradius eines rechtwinkligen Dreiecks?",
        "sec-incircle": "Was ist ein Inkreis in der Geometrie rechtwinkliger Dreiecke?",
        "sec-incenter": "Den Inkreismittelpunkt eines rechtwinkligen Dreiecks verstehen",
        "sec-formula": "Formel für den Inkreisradius eines rechtwinkligen Dreiecks",
        "sec-why-formula-works": "Warum funktioniert die Inkreisradius-Formel?",
        "sec-how-to-use": "So verwenden Sie den Inkreisradius-Rechner für rechtwinklige Dreiecke",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Bestimmung des Inkreisradius",
        "sec-diagram": "Diagramm des Inkreises eines rechtwinkligen Dreiecks erklärt",
        "sec-area-semiperimeter": "So berechnen Sie den Inkreisradius mit Flächeninhalt und Halbumfang",
        "sec-semiperimeter-relation": "Beziehung zwischen Inkreisradius und Halbumfang",
        "sec-examples": "Durchgerechnete Beispiele zur Berechnung des Inkreisradius eines rechtwinkligen Dreiecks",
        "sec-legs-known": "So berechnen Sie den Inkreisradius, wenn nur die beiden Katheten bekannt sind",
        "sec-vs-circumradius": "Beziehung zwischen Inkreisradius und Umkreisradius",
        "sec-verify": "So überprüfen Sie Ihre Inkreisradius-Berechnung",
        "sec-properties": "Wichtige Eigenschaften des Inkreisradius bei rechtwinkligen Dreiecken",
        "sec-mistakes": "Häufige Fehler bei der Berechnung des Inkreisradius",
        "sec-applications": "Praktische Anwendungen des Inkreisradius",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "Inkreisradius-Rechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Finden Sie den Inkreisradius eines rechtwinkligen Dreiecks aus seinen beiden Katheten und seiner Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Der Inkreisradius ist der Radius des Inkreises, des Kreises, der innerhalb des Dreiecks liegt und alle drei Seiten berührt. Der Rechner benötigt drei Zahlen: Kathete [[a]], Kathete [[b]] und Hypotenuse [[c]], wobei [[a]] und [[b]] die Seiten sind, die den rechten Winkel bilden, und [[c]] die Seite gegenüber dem rechten Winkel ist. Die Formel lautet [[r = \\frac{a+b-c}{2}]], wobei [[r]] der Inkreisradius ist. Sie addiert die beiden Katheten, subtrahiert die Hypotenuse und teilt das Ergebnis durch zwei.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel ergibt ein 6-8-10-Dreieck [[r = \\frac{6+8-10}{2} = 2]]. Diese 2 ist der Radius des Kreises innerhalb des Dreiecks, gemessen in derselben Einheit wie die Seiten. Der Kreis berührt jede Seite an genau einem Punkt, und sein Mittelpunkt, der Inkreismittelpunkt, liegt von allen drei Seiten gleich weit entfernt.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Den Inkreisradius eines rechtwinkligen Dreiecks berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite hat drei Eingabefelder, eines für jede Seite des Dreiecks, und ein Ergebnis. Geben Sie die drei Seitenlängen ein, alle in derselben Einheit, und klicken Sie dann auf „Inkreisradius r berechnen“. Das Ergebnis ist eine Länge, der Radius des Inkreises, angegeben in derselben Einheit.",
            },
            {
              "kind": "p",
              "text": "Kathete a ist die erste Seite, die den rechten Winkel bildet, und Kathete b ist die zweite. Es spielt keine Rolle, welche Kathete Sie [[a]] und welche Sie [[b]] nennen, weil die Formel sie addiert. Die Hypotenuse [[c]] ist die Seite gegenüber dem rechten Winkel, und sie muss die längste Seite des Dreiecks sein. Wenn die für [[c]] eingegebene Zahl kürzer als eine Kathete ist, können die drei Längen kein rechtwinkliges Dreieck bilden, und das Ergebnis ist nicht sinnvoll.",
            },
            {
              "kind": "p",
              "text": "Halten Sie die Einheiten in allen drei Feldern gleich. Wenn [[a]] und [[b]] in Zentimetern angegeben sind, muss auch [[c]] in Zentimetern angegeben sein, und die Antwort kommt in Zentimetern heraus. Lesen Sie die Antwort als Radius, nicht als Durchmesser: Ein Radius verläuft vom Mittelpunkt des Kreises zu seinem Rand, während ein Durchmesser ganz durch den Kreis verläuft. Verwenden Sie „Zurücksetzen“, um die Felder vor einer neuen Aufgabe zu leeren.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "Was ist der Inkreisradius eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Inkreisradius eines rechtwinkligen Dreiecks ist der Radius seines Inkreises, des größten Kreises, der in das Dreieck passt. Stellen Sie sich das Dreieck ABC mit dem rechten Winkel bei C vor, die Kathete AC heißt [[a]], die Kathete BC heißt [[b]] und die Hypotenuse AB heißt [[c]]. Zeichnen Sie nun den größten Kreis, den Sie innerhalb dieses Dreiecks zeichnen können, ohne eine Seite zu überschreiten. Dieser Kreis berührt alle drei Seiten, und sein Radius ist der Inkreisradius, geschrieben [[r]].",
            },
            {
              "kind": "p",
              "text": "Der Mittelpunkt des Inkreises heißt Inkreismittelpunkt und wird mit [[I]] bezeichnet. Der Inkreismittelpunkt liegt von allen drei Seiten im gleichen senkrechten Abstand, und dieser Abstand ist [[r]]. Jeder Radius, der von [[I]] zu einer Seite gezogen wird, trifft diese Seite im rechten Winkel, weshalb der Kreis die Seite nur gerade berührt, statt sie zu schneiden. Der Inkreis bleibt innerhalb des Dreiecks, weil jeder Punkt des Kreises höchstens den Abstand [[r]] von [[I]] hat und [[I]] selbst innerhalb des Dreiecks liegt.",
            },
            {
              "kind": "p",
              "text": "Ein kleines Beispiel macht die Idee konkret. In einem 3-4-5-Dreieck beträgt der Inkreisradius [[r = \\frac{3+4-5}{2} = 1]]. Der Inkreis hat einen Radius von 1 Einheit, also liegt sein Mittelpunkt 1 Einheit von jeder Seite entfernt. Der <a href=\"/right-triangle-radius-calculator/\">Radius-Rechner für rechtwinklige Dreiecke</a> behandelt beide Radien eines rechtwinkligen Dreiecks auf einer Seite, wenn Sie den Inkreis mit dem Kreis durch die Eckpunkte vergleichen möchten.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Rechtwinkliges Dreieck ABC mit dem Inkreis darin, Mittelpunkt I und Radius r, der alle drei Seiten berührt",
            "caption": "Dreieck ABC mit seinem Inkreis: Der Mittelpunkt I liegt im Abstand r von jeder Seite.",
          },
        },
        "sec-incircle": {
          "h2": "Was ist ein Inkreis in der Geometrie rechtwinkliger Dreiecke?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Inkreis ist ein Kreis, der vollständig innerhalb eines Dreiecks gezeichnet wird, sodass er alle drei Seiten berührt oder an ihnen anliegt. Jede Seite des Dreiecks ist eine Tangente an den Kreis: Sie trifft den Kreis an genau einem Punkt und schneidet ihn nicht. Diese drei Treffpunkte heißen Berührungspunkte, einer auf jeder Seite.",
            },
            {
              "kind": "p",
              "text": "Der Radius, der vom Inkreismittelpunkt zu einem Berührungspunkt gezogen wird, steht immer senkrecht auf dieser Seite. Das ist eine allgemeine Tatsache über Kreise: Ein Radius zu einem Berührungspunkt trifft die Tangente im rechten Winkel. Weil der Inkreismittelpunkt von allen drei Seiten gleich weit entfernt ist, haben die drei Radien zu den drei Berührungspunkten alle dieselbe Länge [[r]], sodass ein einziger Kreis zu allen drei Seiten zugleich passt.",
            },
            {
              "kind": "p",
              "text": "Jedes Dreieck hat genau einen Inkreis. Die drei Winkelhalbierenden eines Dreiecks treffen sich in einem Punkt, dem Inkreismittelpunkt, und der Abstand von diesem Punkt zu den Seiten legt den Radius fest. Ein zweiter, anderer Kreis könnte nicht alle drei Seiten von innen berühren, weil sein Mittelpunkt ebenfalls von allen drei Seiten gleich weit entfernt sein müsste, und nur der Inkreismittelpunkt hat diese Eigenschaft. Beachten Sie, dass der Inkreis nicht der Kreis durch die Eckpunkte ist: Er berührt die Seiten von innen und erreicht nie einen Eckpunkt.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Inkreis, der alle drei Seiten eines rechtwinkligen Dreiecks an drei Berührungspunkten mit senkrechten Radien berührt",
            "caption": "Drei Berührungspunkte: Jeder Radius trifft seine Seite im Winkel von 90 Grad.",
          },
        },
        "sec-incenter": {
          "h2": "Den Inkreismittelpunkt eines rechtwinkligen Dreiecks verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Inkreismittelpunkt eines Dreiecks ist der Punkt, an dem sich seine drei inneren Winkelhalbierenden treffen. Eine Winkelhalbierende ist eine Gerade, die einen Winkel in zwei gleiche Hälften teilt. Zeichnen Sie die Halbierende des Winkels A, die Halbierende des Winkels B und die Halbierende des Winkels C, und alle drei kreuzen sich in einem einzigen Punkt. Dieser Punkt ist der Inkreismittelpunkt [[I]], und er ist der Mittelpunkt des Inkreises.",
            },
            {
              "kind": "p",
              "text": "Der Inkreismittelpunkt ist von allen drei Seiten gleich weit entfernt, wegen der Art, wie sich Winkelhalbierende verhalten. Jeder Punkt auf der Halbierenden eines Winkels ist von den beiden Seiten, die diesen Winkel bilden, gleich weit entfernt. Ein Punkt, der auf zwei Halbierenden zugleich liegt, ist daher von allen drei Seiten gleich weit entfernt, und der Inkreismittelpunkt liegt auf allen drei Halbierenden. Dieser gemeinsame Abstand ist der Inkreisradius [[r]], also berührt der Kreis mit Mittelpunkt [[I]] und Radius [[r]] jede Seite.",
            },
            {
              "kind": "p",
              "text": "Bei einem rechtwinkligen Dreieck mit dem rechten Winkel bei C liegt der Inkreismittelpunkt auf der Halbierenden des 90-Grad-Winkels, die diagonal durch die Ecke bei C verläuft, im Winkel von 45 Grad zu jeder Kathete. Der Inkreismittelpunkt liegt immer innerhalb des Dreiecks, niemals auf einer Seite oder außerhalb, weil sich die drei Halbierenden im Inneren treffen. Deshalb passt der Inkreis innerhalb des Dreiecks, statt aus ihm herauszuragen.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Rechtwinkliges Dreieck mit allen drei inneren Winkelhalbierenden, die sich im Inkreismittelpunkt I treffen",
            "caption": "Die drei Winkelhalbierenden treffen sich in I, dem Inkreismittelpunkt, im Abstand r von jeder Seite.",
          },
        },
        "sec-formula": {
          "h2": "Formel für den Inkreisradius eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel für den Inkreisradius eines rechtwinkligen Dreiecks ist kurz genug, um sie auf einen Blick zu merken:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[r]] der Inkreisradius, [[a]] die erste Kathete, [[b]] die zweite Kathete und [[c]] die Hypotenuse. Die Formel arbeitet in drei Schritten, und jeder Schritt hat eine klare Bedeutung.",
            },
            {
              "kind": "p",
              "text": "Schritt 1: Addieren Sie die beiden Katheten, [[a+b]]. Diese kombinierte Länge ist immer länger als die Hypotenuse, weil sich die beiden Katheten zusammen weiter erstrecken als die gerade Linie quer durch. Schritt 2: Subtrahieren Sie die Hypotenuse, [[a+b-c]]. Übrig bleibt der Betrag, um den die Katheten die Hypotenuse übersteigen. Schritt 3: Teilen Sie durch zwei, [[r = \\frac{a+b-c}{2}]]. Die Division verwandelt diese übrige Länge in den Radius des Inkreises, und der Herleitungsabschnitt unten zeigt, warum das Halbieren genau richtig ist.",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie das 6-8-10-Dreieck: [[a+b = 14]], dann [[14-10 = 4]], dann [[\\frac{4}{2} = 2]], also [[r = 2]]. Die Formel gilt nur für rechtwinklige Dreiecke. Bei einem Dreieck, das nicht rechtwinklig ist, entspricht der Inkreisradius weiterhin dem Flächeninhalt geteilt durch den Halbumfang, [[r = \\frac{A}{s}]], aber die Abkürzung [[r = \\frac{a+b-c}{2}]] gilt nicht, weil ihr Beweis vom rechten Winkel abhängt.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Rechtwinkliges Dreieck, beschriftet mit den Katheten a und b, der Hypotenuse c, dem Inkreismittelpunkt I und dem Inkreisradius r neben der Formel r gleich a plus b minus c durch 2",
            "caption": "Die Formel verwendet alle drei Seiten: Addieren Sie die Katheten, subtrahieren Sie die Hypotenuse, teilen Sie durch zwei.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Warum funktioniert die Inkreisradius-Formel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel folgt aus einer einfachen Tatsache über Tangenten: Die beiden Tangentenabschnitte, die von demselben Punkt außerhalb eines Kreises zu diesem Kreis gezogen werden, sind gleich lang. Jeder Eckpunkt des Dreiecks liegt außerhalb des Inkreises, und die beiden Seiten, die an diesem Eckpunkt zusammentreffen, sind beide Tangenten an den Kreis. Also sind die beiden Tangentenabschnitte von jedem Eckpunkt gleich.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie am Eckpunkt mit dem rechten Winkel, C. Die beiden Seiten, die bei C zusammentreffen, sind die Katheten, und der Inkreis berührt jede Kathete an einem Punkt, der entlang der Seite den Abstand [[r]] von C hat. Das liegt daran, dass die beiden Radien vom Inkreismittelpunkt zu den Katheten zusammen mit den beiden kurzen Abschnitten entlang der Katheten ein Quadrat der Seitenlänge [[r]] an der Ecke C bilden. Also hat der Tangentenabschnitt von C entlang jeder Kathete die Länge [[r]].",
            },
            {
              "kind": "p",
              "text": "Betrachten Sie nun die beiden anderen Eckpunkte. Sei [[x]] die Tangentenlänge vom Eckpunkt A entlang der Seiten und [[y]] die Tangentenlänge vom Eckpunkt B. Am Eckpunkt A verläuft eine Tangente entlang der Kathete [[a]] in Richtung C und die andere entlang der Hypotenuse in Richtung B, also haben beide die Länge [[x]]. Am Eckpunkt B haben beide Tangenten die Länge [[y]]. Die Seitenlängen setzen sich dann aus diesen Teilen zusammen:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Addieren Sie die ersten beiden Gleichungen: [[a+b = 2r+x+y]]. Da [[x+y = c]] gilt, wird daraus [[a+b = 2r+c]]. Umstellen ergibt [[2r = a+b-c]], und das Teilen durch zwei ergibt die Formel [[r = \\frac{a+b-c}{2}]]. Jeder Schritt folgt aus gleichen Tangentenlängen, also ist die Formel kein Trick zum Auswendiglernen, sondern eine direkte Folge davon, wie der Inkreis die Seiten berührt.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "So verwenden Sie den Inkreisradius-Rechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn kurze Schritte führen Sie von einem beschrifteten Dreieck zu einer geprüften Antwort. Die Schritte in der Reihenfolge sind:",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie das rechtwinklige Dreieck in Ihrer Aufgabe und vergewissern Sie sich, dass es einen rechten Winkel hat.",
                "Finden Sie den Eckpunkt mit dem rechten Winkel, der gewöhnlich mit einem kleinen Quadrat markiert ist, und nennen Sie ihn C.",
                "Bestimmen Sie die erste senkrechte Kathete a, eine der beiden Seiten, die den rechten Winkel bilden.",
                "Bestimmen Sie die zweite senkrechte Kathete b, die andere Seite, die den rechten Winkel bildet.",
                "Bestimmen Sie die vollständige Hypotenuse c, die Seite gegenüber dem rechten Winkel.",
                "Vergewissern Sie sich, dass c die längste Seite ist. Wenn sie es nicht ist, beschriften Sie das Diagramm neu, bevor Sie fortfahren.",
                "Prüfen Sie, ob die drei Seiten den Satz des Pythagoras erfüllen, [[a^2+b^2 = c^2]].",
                "Wählen Sie passende Maßeinheiten und rechnen Sie jede Messung um, die eine andere Einheit verwendet.",
                "Geben Sie die Kathete a in das Feld „Kathete a“ ein.",
                "Geben Sie die Kathete b in das Feld „Kathete b“ ein.",
                "Geben Sie die Hypotenuse c in das Feld „Hypotenuse c“ ein.",
                "Klicken Sie auf „Inkreisradius r berechnen“ und lesen Sie das Ergebnis ab.",
                "Prüfen Sie das Ergebnis: Es muss positiv sein, in derselben Einheit wie die Seiten angegeben sein und kleiner als jede Kathete sein.",
                "Verwenden Sie „Zurücksetzen“, wenn Sie eine weitere Berechnung beginnen.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Eingabe der falschen Seite als [[c]] ist der Fehler, der die meisten Schwierigkeiten verursacht. Wenn eine Kathete in das Hypotenusenfeld eingegeben wird, subtrahiert die Formel eine Kathete statt der Hypotenuse, und die Antwort ist zu groß. Prüfen Sie immer, ob der Wert im Hypotenusenfeld der längste der drei ist, bevor Sie auf „Inkreisradius r berechnen“ klicken.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Bestimmung des Inkreisradius",
          "blocks": [
            {
              "kind": "p",
              "text": "Verwenden Sie das Beispiel vom Anfang der Seite, [[a = 6]], [[b = 8]] und [[c = 10]]. Die fünf Schritte unten zeigen die vollständige Rechnung, ohne dass etwas übersprungen wird.",
            },
            {
              "kind": "steps",
              "steps": [
                "Schreiben Sie die Formel auf: [[r = \\frac{a+b-c}{2}]].",
                "Setzen Sie die Werte ein: [[r = \\frac{6+8-10}{2}]].",
                "Addieren Sie die Katheten: [[r = \\frac{14-10}{2}]].",
                "Subtrahieren Sie die Hypotenuse: [[r = \\frac{4}{2}]].",
                "Dividieren Sie: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "Die Antwort 2 bedeutet, dass der Inkreis einen Radius von 2 Einheiten hat, in derselben Einheit wie die Seiten. Sein Mittelpunkt liegt 2 Einheiten von jeder Seite entfernt, und der Kreis berührt jede Seite an genau einem Punkt.",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie, ob die Messungen ein rechtwinkliges Dreieck bilden, bevor Sie der Antwort vertrauen: [[6^2+8^2 = 36+64 = 100 = 10^2]], also gilt der Satz des Pythagoras und das Dreieck ist tatsächlich rechtwinklig. Eine zweite Prüfung verwendet Flächeninhalt und Halbumfang, [[A = \\frac{6 \\times 8}{2} = 24]] und [[s = \\frac{6+8+10}{2} = 12]], was [[r = \\frac{24}{12} = 2]] ergibt, dieselbe Antwort auf einem anderen Weg.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Durchgerechnetes Beispiel mit a gleich 6, b gleich 8, c gleich 10 und Inkreisradius r gleich 2, wobei der Inkreis alle drei Seiten berührt",
            "caption": "Durchgerechnetes Beispiel: a = 6, b = 8, c = 10 ergibt r = 2, geprüft mit Flächeninhalt und Halbumfang.",
          },
        },
        "sec-diagram": {
          "h2": "Diagramm des Inkreises eines rechtwinkligen Dreiecks erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Diagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist die Kathete [[a]], die Seite BC ist die Kathete [[b]] und die Seite AB ist die Hypotenuse [[c]]. Der Punkt [[I]] markiert den Inkreismittelpunkt innerhalb des Dreiecks, und ein Kreis mit Mittelpunkt [[I]] berührt alle drei Seiten.",
            },
            {
              "kind": "p",
              "text": "Lesen Sie das Diagramm in dieser Reihenfolge. Beginnen Sie bei A, gehen Sie entlang der Kathete [[a]] hinunter nach C, dann entlang der Kathete [[b]] hinüber nach B, dann zurück entlang der Hypotenuse von B nach A. Der Inkreis liegt innerhalb dieser Grenze und berührt die Kathete [[a]] an einem Punkt, die Kathete [[b]] an einem zweiten Punkt und die Hypotenuse an einem dritten Punkt. Von [[I]] verlaufen drei kurze Strecken zu diesen drei Punkten, und jede ist ein Radius der Länge [[r]].",
            },
            {
              "kind": "p",
              "text": "Jeder Radius trifft seine Seite im rechten Winkel, was das Kennzeichen einer Tangente ist: Die Seite streift den Kreis an diesem Punkt nur, statt ihn zu schneiden. Alle drei Radien haben dieselbe Länge, weshalb ein Kreis alle drei Seiten zugleich berühren kann. Der Kreis verläuft durch keinen Eckpunkt: Die Eckpunkte liegen außerhalb des Kreises, und die Tangentenabschnitte von jedem Eckpunkt zum Kreis sind die Längen [[r]], [[x]] und [[y]], die in der Herleitung oben verwendet werden.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "So berechnen Sie den Inkreisradius mit Flächeninhalt und Halbumfang",
          "blocks": [
            {
              "kind": "p",
              "text": "Es gibt einen zweiten Weg, den Inkreisradius zu finden, mit dem Flächeninhalt und dem Halbumfang des Dreiecks:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[A]] der Flächeninhalt des Dreiecks und [[s]] der Halbumfang, die Hälfte des Umfangs. Bei einem rechtwinkligen Dreieck beträgt der Flächeninhalt die Hälfte des Produkts der Katheten, [[A = \\frac{ab}{2}]], weil die beiden Katheten als Grundseite und Höhe dienen. Der Halbumfang ist [[s = \\frac{a+b+c}{2}]]. Der <a href=\"/right-triangle-area-calculator/\">Flächenrechner für rechtwinklige Dreiecke</a> findet [[A]] aus den beiden Katheten, und der <a href=\"/right-triangle-semiperimeter-calculator/\">Halbumfang-Rechner für rechtwinklige Dreiecke</a> findet [[s]] aus allen drei Seiten.",
            },
            {
              "kind": "p",
              "text": "Das Einsetzen der Ausdrücke für rechtwinklige Dreiecke ergibt [[r = \\frac{ab/2}{(a+b+c)/2}]], und die Hälften heben sich auf, sodass [[r = \\frac{ab}{a+b+c}]] übrig bleibt. Das ist die gleichwertige Seitenlängenformel vom Anfang des Leitfadens, und sie ergibt dieselbe Antwort wie [[r = \\frac{a+b-c}{2}]] für jedes gültige rechtwinklige Dreieck, weil die beiden Ausdrücke gleich sind, wann immer [[a^2+b^2 = c^2]] gilt.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie das 6-8-10-Dreieck, um zu sehen, dass beide Wege übereinstimmen. Der Flächeninhalt ist [[A = \\frac{6 \\times 8}{2} = 24]], und der Halbumfang ist [[s = \\frac{6+8+10}{2} = 12]], also [[r = \\frac{24}{12} = 2]]. Die Standardformel ergibt dasselbe Ergebnis, [[r = \\frac{6+8-10}{2} = 2]]. Der Rechner auf dieser Seite verwendet die Dreiseitenformel, und der Flächeninhaltsweg ist eine nützliche unabhängige Prüfung.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Rechtwinkliges Dreieck, das in drei kleinere Dreiecke mit gemeinsamem Inkreismittelpunkt geteilt ist, was zeigt, dass der Flächeninhalt gleich r mal s ist",
            "caption": "Drei Dreiecke mit gemeinsamem I: Ihre Flächeninhalte ergeben zusammen A = r mal s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Beziehung zwischen Inkreisradius und Halbumfang",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Halbumfang [[s]] ist die Hälfte des Umfangs des Dreiecks:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Er heißt Halbumfang, weil „semi“ halb bedeutet: Der volle Umfang ist [[P = a+b+c]], und der Halbumfang ist die Hälfte davon. Verwechseln Sie die beiden nicht. Der Umfang ist die Gesamtlänge um das Dreieck herum, während der Halbumfang ein kürzerer Hilfswert ist, der in Flächeninhaltsformeln und in der Inkreisradius-Formel [[r = \\frac{A}{s}]] vorkommt.",
            },
            {
              "kind": "p",
              "text": "Der Halbumfang allein kann den Inkreisradius nicht bestimmen, weil die Formel [[r = \\frac{A}{s}]] auch den Flächeninhalt [[A]] benötigt. Zwei Dreiecke können denselben Halbumfang haben und unterschiedliche Flächeninhalte besitzen, und dann unterscheiden sich auch ihre Inkreisradien. Der Flächeninhalt trägt die Information über die Form, die der Halbumfang auslässt. Für das 6-8-10-Dreieck gilt [[s = 12]] und [[A = 24]], also [[r = \\frac{24}{12} = 2]]. Ein anderes Dreieck mit [[s = 12]], aber einem kleineren Flächeninhalt, hätte einen kleineren Inkreisradius.",
            },
            {
              "kind": "p",
              "text": "Es gibt eine anschauliche Möglichkeit zu sehen, warum [[A = rs]] gilt. Verbinden Sie den Inkreismittelpunkt [[I]] mit den drei Eckpunkten und teilen Sie das Dreieck in drei kleinere Dreiecke. Jedes kleine Dreieck hat die Höhe [[r]] und eine Grundseite, die einer Seite des großen Dreiecks entspricht, also sind ihre Flächeninhalte [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] und [[\\frac{rc}{2}]]. Das Addieren ergibt [[A = \\frac{r(a+b+c)}{2} = r \\times s]], da [[s = \\frac{a+b+c}{2}]] gilt. Das Teilen durch [[s]] ergibt [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele zur Berechnung des Inkreisradius eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "h3",
              "text": "Beispiel 1: Einfaches 3-4-5-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 3]], [[b = 4]] und [[c = 5]], die Formel ergibt [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. Der Inkreis hat einen Radius von 1 Einheit. Prüfen Sie zuerst das Dreieck: [[3^2+4^2 = 9+16 = 25 = 5^2]], also ist es ein gültiges rechtwinkliges Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Vorhandenes 6-8-10-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 6]], [[b = 8]] und [[c = 10]], also [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. Der Inkreis hat einen Radius von 2 Einheiten, doppelt so groß wie der Radius des 3-4-5-Dreiecks, weil dieses Dreieck das 3-4-5-Dreieck ist, das um den Faktor 2 vergrößert wurde. Prüfung: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: 5-12-13-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 5]], [[b = 12]] und [[c = 13]], also [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. Der Inkreisradius beträgt 2 Einheiten, derselbe wie beim 6-8-10-Dreieck, obwohl das Dreieck größer und anders geformt ist. Prüfung: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: 8-15-17-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 8]], [[b = 15]] und [[c = 17]], also [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. Der Inkreis hat einen Radius von 3 Einheiten. Prüfung: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Größere Messungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 9]], [[b = 12]] und [[c = 15]], also [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Das ist das 3-4-5-Dreieck, das um den Faktor 3 vergrößert wurde, also ist der Inkreisradius dreimal so groß wie der Inkreisradius 1 des 3-4-5-Dreiecks. Prüfung: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Dezimale Messungen",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 4.5]], [[b = 6]] und [[c = 7.5]], also [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. Der Inkreisradius beträgt 1.5 Einheiten. Dezimalzahlen ändern nichts an der Methode: addieren, subtrahieren, durch zwei teilen. Prüfung: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Verschiedene Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 30]] cm, [[b = 40]] cm und [[c = 0.5]] m, rechnen Sie zuerst die Hypotenuse um: 0.5 m entsprechen 50 cm, weil 1 m 100 cm sind. Jetzt verwenden alle drei Seiten Zentimeter, also [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Prüfung: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Das Vermischen von Metern und Zentimetern ohne Umrechnung ergäbe eine falsche Antwort, also rechnen Sie immer zuerst um.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Größere Dezimalwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 7.2]], [[b = 9.6]] und [[c = 12]], also [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. Der Inkreisradius beträgt 2.4 Einheiten. Das ist das 3-4-5-Dreieck, das um den Faktor 2.4 vergrößert wurde, also ist der Inkreisradius 2.4-mal so groß wie der Inkreisradius 1 des 3-4-5-Dreiecks. Prüfung: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "So berechnen Sie den Inkreisradius, wenn nur die beiden Katheten bekannt sind",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite benötigt alle drei Seitenlängen, also kann er nicht allein mit den beiden Katheten arbeiten. Wenn nur [[a]] und [[b]] bekannt sind, finden Sie zuerst die Hypotenuse mit dem Satz des Pythagoras und verwenden Sie dann die Inkreisradius-Formel. Die beiden Schritte sind:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a = 6]] und [[b = 8]]. Berechnen Sie zuerst die Hypotenuse: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Berechnen Sie dann den Inkreisradius: [[r = \\frac{6+8-10}{2} = 2]]. Der <a href=\"/right-triangle-side-calculator/\">Rechner für die Seiten eines rechtwinkligen Dreiecks</a> findet die fehlende Hypotenuse aus zwei Katheten, was derselbe erste Schritt ist, der hier verwendet wird, und der <a href=\"/pythagorean-theorem-calculator/\">Rechner zum Satz des Pythagoras</a> führt dieselbe Berechnung direkt durch. Überspringen Sie den ersten Schritt nicht: Die Eingabe einer Kathete in das Hypotenusenfeld ergibt einen falschen Inkreisradius, wie der Abschnitt über Fehler unten zeigt.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Beziehung zwischen Inkreisradius und Umkreisradius",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Inkreisradius [[r]] und der Umkreisradius [[R]] sind die beiden Radien eines rechtwinkligen Dreiecks, und sie beschreiben zwei verschiedene Kreise. Der Inkreisradius ist der Radius des Inkreises, des Kreises innerhalb des Dreiecks, der alle drei Seiten berührt. Der Umkreisradius ist der Radius des Umkreises, des Kreises außerhalb des Dreiecks, der durch alle drei Eckpunkte verläuft. Ein Kreis liegt innerhalb des Dreiecks, der andere umgibt es.",
            },
            {
              "kind": "p",
              "text": "Bei einem rechtwinkligen Dreieck beträgt der Umkreisradius [[R = \\frac{c}{2}]], weil die Hypotenuse der Durchmesser des Umkreises ist. Der Inkreisradius beträgt [[r = \\frac{a+b-c}{2}]], wofür alle drei Seiten benötigt werden, weil es davon abhängt, wie eng der Inkreis passt, wie das Dreieck geformt ist, nicht nur von seiner längsten Seite. Verwenden Sie das 6-8-10-Dreieck, um den Unterschied in Zahlen zu sehen: [[r = 2]] und [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Auch die Mittelpunkte unterscheiden sich. Der Inkreismittelpunkt liegt innerhalb des Dreiecks, dort, wo sich die Winkelhalbierenden treffen, im Abstand [[r]] von jeder Seite. Der Umkreismittelpunkt liegt im Mittelpunkt der Hypotenuse, auf dem Rand des Dreiecks, im Abstand [[R]] von jedem Eckpunkt. Für Aufgaben über den Umkreis verwenden Sie den <a href=\"/right-triangle-circumradius-calculator/\">Umkreisradius-Rechner für rechtwinklige Dreiecke</a>, der [[R = \\frac{c}{2}]] direkt anwendet.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "Inkreisradius r",
              "Umkreisradius R",
            ],
            "rows": [
              [
                "Kreis",
                "Inkreis",
                "Umkreis",
              ],
              [
                "Lage",
                "Innerhalb des Dreiecks",
                "Um das Dreieck herum",
              ],
              [
                "Berührung",
                "Berührt die Seiten",
                "Verläuft durch die Eckpunkte",
              ],
              [
                "Formel für rechtwinklige Dreiecke",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Mittelpunkt",
                "Inkreismittelpunkt",
                "Umkreismittelpunkt",
              ],
              [
                "Wert bei 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Rechtwinkliges Dreieck mit dem kleinen Inkreis darin und dem großen Umkreis, der durch seine Eckpunkte verläuft, Dreieck 6-8-10",
            "caption": "Inkreis (r = 2) innerhalb des Dreiecks, Umkreis (R = 5) um es herum, Dreieck 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "So überprüfen Sie Ihre Inkreisradius-Berechnung",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier unabhängige Prüfungen decken fast jeden Fehler auf. Führen Sie bei jeder Antwort mindestens eine durch, und alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten verwendet durchgehend das 6-8-10-Dreieck mit [[r = 2]].",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Ursprüngliche Formel",
            },
            {
              "kind": "p",
              "text": "Berechnen Sie [[r = \\frac{a+b-c}{2}]] von vorn neu, ohne auf Ihre erste Rechnung zu schauen. Hier gilt [[r = \\frac{6+8-10}{2} = 2]]. Eine frische Berechnung deckt Fehler in der ersten auf, besonders eine Subtraktion, die in der falschen Reihenfolge ausgeführt wurde.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Flächeninhalt und Halbumfang",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie mit [[r = \\frac{A}{s}]]. Hier gilt [[A = \\frac{6 \\times 8}{2} = 24]] und [[s = \\frac{6+8+10}{2} = 12]], also [[r = \\frac{24}{12} = 2]]. Dieser Weg verwendet Multiplikation und Division statt Addition und Subtraktion, also deckt er eine andere Art von Fehler auf.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie [[a^2+b^2 = c^2]]. Hier gilt [[6^2+8^2 = 36+64 = 100 = 10^2]], also bilden die drei Seiten ein echtes rechtwinkliges Dreieck. Wenn diese Prüfung fehlschlägt, gilt die Inkreisradius-Formel überhaupt nicht, und keinem Wert von [[r]] aus ihr kann man trauen.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Geometrische Plausibilität",
            },
            {
              "kind": "p",
              "text": "Vergewissern Sie sich, dass [[r]] positiv ist, kleiner als jede Kathete und in der richtigen Einheit angegeben. Hier ist 2 positiv und kleiner als 6 und 8, und die Einheit stimmt mit den Seiten überein. Der Kreis muss innerhalb des Dreiecks passen, also ist ein Inkreisradius, der größer als die kürzeste Kathete ist, unmöglich und deutet auf einen Fehler hin, gewöhnlich auf eine Kathete, die als Hypotenuse eingegeben wurde.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Wichtige Eigenschaften des Inkreisradius bei rechtwinkligen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Neun Eigenschaften folgen direkt aus der Formel und der Geometrie des Inkreises. Jede von ihnen dient zugleich als Plausibilitätsprüfung für eine neue Antwort.",
            },
            {
              "kind": "list",
              "items": [
                "Der Inkreisradius ist für ein gültiges, nicht entartetes Dreieck immer positiv, weil [[a+b]] immer größer als [[c]] ist.",
                "Der Inkreismittelpunkt liegt innerhalb des Dreiecks, dort, wo sich die drei Winkelhalbierenden treffen.",
                "Der Inkreisradius ist der kürzeste senkrechte Abstand vom Inkreismittelpunkt zu jeder Seite, und alle drei Abstände sind gleich [[r]].",
                "Der Inkreis berührt alle drei Seiten, mit einem Berührungspunkt auf jeder Seite.",
                "Tangentenabschnitte von demselben äußeren Punkt haben gleiche Längen, was die Tatsache ist, aus der die Formel hergeleitet wird.",
                "Eine Vergrößerung des Dreiecks insgesamt vergrößert den Inkreisradius um denselben Faktor: Das Verdoppeln jeder Seite verdoppelt [[r]], und das Verdreifachen jeder Seite verdreifacht [[r]].",
                "Der Inkreisradius ist nicht dasselbe wie der Umkreisradius. In einem 6-8-10-Dreieck gilt [[r = 2]], während [[R = 5]] ist.",
                "Der Inkreisradius hängt von der Form des Dreiecks ab und von seiner Größe: Ein 5-12-13-Dreieck und ein 6-8-10-Dreieck haben beide [[r = 2]], obwohl ihre Seiten verschieden sind.",
                "Der Inkreisradius kann aus den Seitenlängen mit [[r = \\frac{a+b-c}{2}]] oder aus Flächeninhalt und Halbumfang mit [[r = \\frac{A}{s}]] berechnet werden, und beide Wege ergeben dieselbe Antwort.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Berechnung des Inkreisradius",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Die Verwendung der Umkreisradius-Formel statt der Inkreisradius-Formel: [[R = \\frac{c}{2}]] ergibt 5 für ein 6-8-10-Dreieck, während der Inkreisradius 2 beträgt. Die beiden Formeln beantworten verschiedene Fragen.",
                "Die Eingabe von c als Kathete statt als Hypotenuse: Wenn 8 als c und 10 als b eingegeben werden, ergibt die Formel [[\\frac{6+10-8}{2} = 4]], nicht 2. Geben Sie immer die längste Seite in das Hypotenusenfeld ein.",
                "Das Vergessen, c zu subtrahieren: Das Addieren der Katheten und Teilen durch zwei, [[\\frac{6+8}{2} = 7]], ergibt eine Zahl, die weit größer ist als der wahre Inkreisradius von 2.",
                "Das Vergessen, durch zwei zu teilen: [[6+8-10 = 4]] ist das Doppelte des Inkreisradius. Die Division durch zwei ist Teil der Formel, kein optionaler letzter Schritt.",
                "Die Eingabe ungültiger Seitenmessungen: Die Seiten 3, 4 und 6 erfüllen [[3^2+4^2 = 6^2]] nicht, da 25 nicht gleich 36 ist, also gilt die Inkreisradius-Formel für sie nicht.",
                "Das Ignorieren der Beziehung des Pythagoras: Beliebige drei Längen können in die Formel eingesetzt werden, aber nur ein echtes rechtwinkliges Dreieck ergibt einen sinnvollen Inkreisradius. Prüfen Sie zuerst [[a^2+b^2 = c^2]].",
                "Das Vermischen von Maßeinheiten: Katheten in Zentimetern und eine Hypotenuse in Metern ergeben eine falsche Antwort. Rechnen Sie jede Messung vor der Berechnung in eine Einheit um.",
                "Die Verwechslung von Inkreisradius und Durchmesser: Der Inkreisradius ist der Abstand vom Mittelpunkt zum Rand. Der Durchmesser des Inkreises ist doppelt so groß wie der Inkreisradius, also beträgt er bei einem 6-8-10-Dreieck 4, nicht 2.",
                "Die Verwechslung von Inkreismittelpunkt und Umkreismittelpunkt: Der Inkreismittelpunkt liegt innerhalb des Dreiecks, dort, wo sich die Winkelhalbierenden treffen, während der Umkreismittelpunkt der Mittelpunkt der Hypotenuse ist. Es sind verschiedene Punkte.",
                "Die Annahme, dass der Inkreis durch die Eckpunkte des Dreiecks verläuft: Der Inkreis berührt die Seiten und erreicht nie einen Eckpunkt. Der Kreis durch die Eckpunkte ist der Umkreis.",
                "Die Annahme, dass der Radius entlang einer Seite gemessen wird statt senkrecht zu ihr: Der Inkreisradius ist der senkrechte Abstand vom Inkreismittelpunkt zu einer Seite, also der kürzeste Abstand zu dieser Seite.",
                "Das zu frühe Runden von Zwischenergebnissen: Behalten Sie die volle Genauigkeit durch die Addition und Subtraktion bei und runden Sie erst die endgültige Antwort. Frühes Runden verschiebt das Ergebnis.",
                "Die Verwendung von nur zwei Seitenlängen, ohne zuerst die Hypotenuse zu berechnen: Die Formel benötigt alle drei Seiten. Finden Sie [[c]] mit dem Satz des Pythagoras, bevor Sie sie verwenden.",
                "Die Verwechslung von Umfang und Halbumfang: Der Halbumfang ist die Hälfte des Umfangs, [[s = \\frac{a+b+c}{2}]]. Die Verwendung des vollen Umfangs in [[r = \\frac{A}{s}]] halbiert die richtige Antwort.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen des Inkreisradius",
          "blocks": [
            {
              "kind": "p",
              "text": "Die direkteste Verwendung sind Geometrie-Hausaufgaben und die Arbeit im Unterricht, bei denen Inkreisradius-Aufgaben prüfen, ob die Schülerinnen und Schüler die Hypotenuse erkennen, [[r = \\frac{a+b-c}{2}]] anwenden und das Ergebnis mit Flächeninhalt und Halbumfang prüfen können. Konstruktionsübungen mit Kreisen verwenden dieselbe Idee: Zeichnen Sie bei einem gegebenen rechtwinkligen Dreieck seinen Inkreis, indem Sie den Inkreismittelpunkt finden, an dem sich die Winkelhalbierenden treffen, und einen Zirkel auf den Inkreisradius einstellen.",
            },
            {
              "kind": "p",
              "text": "Das technische Zeichnen verwendet den Inkreis, wenn ein Kreis genau in einen dreieckigen Rahmen passen muss oder wenn eine abgerundete Ecke zwei Kanten einer Form berühren muss. Die geometrische Modellierung und die Koordinatengeometrie verwenden den Inkreismittelpunkt als den Punkt innerhalb eines Dreiecks, der von allen drei Seiten gleich weit entfernt ist, was der natürliche Mittelpunkt für eine einbeschriebene Form ist.",
            },
            {
              "kind": "p",
              "text": "Lehrkräfte verwenden das Thema als Brückenstunde zwischen Dreiecken und Kreisen, weil der Inkreis einer der ersten Orte ist, an dem die beiden Themen zusammentreffen. Tangentenlängen, Winkelhalbierende, Flächeninhalt und Halbumfang erscheinen alle in einem einzigen Bild, also ist der Inkreisradius eine kompakte Möglichkeit, sie gemeinsam zu wiederholen. Echte Entwurfsprojekte, die einen einbeschriebenen Kreis benötigen, brauchen außerdem Toleranzen und Materialgrenzen, die über diese Seite hinausgehen, also behandeln Sie das Ergebnis als den genauen geometrischen Wert und fügen Sie praktische Spielräume separat hinzu.",
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
              "text": "Ein rechtwinkliges Dreieck hat die Katheten [[a = 20]] cm und [[b = 21]] cm und die Hypotenuse [[c = 29]] cm. Finden Sie den Inkreisradius [[r]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimale Messung",
            },
            {
              "kind": "p",
              "text": "Gegeben sind [[a = 10.5]] m, [[b = 14]] m und [[c = 17.5]] m, finden Sie den Inkreisradius [[r]] in Metern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Umrechnung von Einheiten",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten [[a = 1.5]] m und [[b = 2]] m und die Hypotenuse [[c = 250]] cm. Finden Sie den Inkreisradius in Metern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Die Hypotenuse aus zwei Katheten finden",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten [[a = 12]] cm und [[b = 16]] cm. Finden Sie zuerst die Hypotenuse und dann den Inkreisradius.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Flächeninhalt und Halbumfang",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten [[a = 15]] cm und [[b = 20]] cm und die Hypotenuse [[c = 25]] cm. Finden Sie den Flächeninhalt und den Halbumfang, dann finden Sie den Inkreisradius mit [[r = \\frac{A}{s}]] und bestätigen Sie ihn mit der Dreiseitenformel.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Ein ungültiges rechtwinkliges Dreieck erkennen",
            },
            {
              "kind": "p",
              "text": "Ein Schüler erhält [[a = 7]] cm, [[b = 10]] cm und [[c = 12]] cm und wird nach dem Inkreisradius gefragt. Zeigen Sie, warum diese Seiten kein rechtwinkliges Dreieck bilden, und erklären Sie, was der Schüler tun sollte, statt die Formel anzuwenden.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Prüfung: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Prüfung: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Antwort 3: Rechnen Sie die Hypotenuse um: 250 cm entsprechen 2.5 m. Dann gilt [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, was 50 cm entspricht. Prüfung: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Antwort 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, dann [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[A = \\frac{15 \\times 20}{2} = 150]] Quadratzentimeter und [[s = \\frac{15+20+25}{2} = 30]] cm, also [[r = \\frac{150}{30} = 5]] cm. Die Dreiseitenformel stimmt überein: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[7^2+10^2 = 49+100 = 149]], während [[12^2 = 144]] gilt, also ist [[a^2+b^2]] nicht gleich [[c^2]] und das Dreieck ist nicht rechtwinklig. Der Schüler sollte die Inkreisradius-Formel nicht anwenden: Prüfen Sie zuerst die Messungen erneut, und wenn sie richtig sind, verwenden Sie stattdessen die allgemeine Formel [[r = \\frac{A}{s}]] für ein nicht rechtwinkliges Dreieck.",
            },
          ],
        },
      },
      "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten behandelt eine bestimmte Aufgabe mit rechtwinkligen Dreiecken, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie finden müssen.",
      "relatedItems": [
        "Radius-Rechner für rechtwinklige Dreiecke",
        "Umkreisradius-Rechner für rechtwinklige Dreiecke",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Halbumfang-Rechner für rechtwinklige Dreiecke",
        "Rechner für die Seiten eines rechtwinkligen Dreiecks",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie lautet die Formel für den Inkreisradius eines rechtwinkligen Dreiecks?",
          "answer": "Die Formel lautet [[r = \\frac{a+b-c}{2}]], wobei [[a]] und [[b]] die Katheten, [[c]] die Hypotenuse und [[r]] der Inkreisradius ist. Addieren Sie die beiden Katheten, subtrahieren Sie die Hypotenuse und teilen Sie durch zwei. Zum Beispiel ergibt ein 6-8-10-Dreieck einen Inkreisradius von 2.",
        },
        {
          "question": "Was stellt der Inkreisradius dar?",
          "answer": "Der Inkreisradius ist der Radius des Inkreises, des Kreises, der innerhalb des Dreiecks liegt und alle drei Seiten berührt. Er ist der senkrechte Abstand vom Inkreismittelpunkt zu einer beliebigen Seite. In einem 6-8-10-Dreieck beträgt der Inkreisradius 2, also hat der Inkreis einen Radius von 2 Einheiten.",
        },
        {
          "question": "Was ist ein Inkreis?",
          "answer": "Ein Inkreis ist ein Kreis, der vollständig innerhalb eines Dreiecks gezeichnet wird, sodass er alle drei Seiten berührt, mit einem Berührungspunkt auf jeder Seite. Jedes Dreieck hat genau einen Inkreis. Er unterscheidet sich vom Umkreis, der stattdessen durch die drei Eckpunkte verläuft.",
        },
        {
          "question": "Wo liegt der Inkreismittelpunkt?",
          "answer": "Der Inkreismittelpunkt ist der Punkt, an dem sich die drei inneren Winkelhalbierenden des Dreiecks treffen. Er liegt immer innerhalb des Dreiecks. In einem rechtwinkligen Dreieck mit dem rechten Winkel bei C liegt er auf der Halbierenden des 90-Grad-Winkels, im Abstand [[r]] von jeder Seite.",
        },
        {
          "question": "Warum subtrahiert die Inkreisradius-Formel die Hypotenuse?",
          "answer": "Die Tangentenabschnitte vom Eckpunkt mit dem rechten Winkel haben die Länge [[r]], also sind die Katheten [[a = r+x]] und [[b = r+y]], während die Hypotenuse [[c = x+y]] ist. Das Addieren der Katheten ergibt [[a+b = 2r+c]], also lässt das Subtrahieren von [[c]] [[2r]] übrig. Die Subtraktion entfernt die gemeinsamen Tangentenlängen und isoliert den Inkreisradius.",
        },
        {
          "question": "Warum teilen wir durch zwei?",
          "answer": "Das Addieren der beiden Katheten zählt den Inkreisradius zweimal, einmal in jeder Kathete, weil jede Kathete einen Tangentenabschnitt der Länge [[r]] vom Eckpunkt mit dem rechten Winkel enthält. Die Summe [[a+b-c]] ist daher gleich [[2r]], nicht [[r]], also ergibt das Teilen durch zwei den einzelnen Inkreisradius.",
        },
        {
          "question": "Kann ich den Inkreisradius nur mit den beiden Katheten berechnen?",
          "answer": "Nicht direkt, weil die Formel auch die Hypotenuse benötigt. Finden Sie zuerst die Hypotenuse mit [[c = \\sqrt{a^2+b^2}]], und verwenden Sie dann [[r = \\frac{a+b-c}{2}]]. Bei Katheten von 6 und 8 beträgt die Hypotenuse 10 und der Inkreisradius 2. Verwenden Sie den Seitenrechner, um eine fehlende Hypotenuse zu finden.",
        },
        {
          "question": "Kann ich den Inkreisradius mit Flächeninhalt und Halbumfang berechnen?",
          "answer": "Ja. Die Formel lautet [[r = \\frac{A}{s}]], wobei [[A]] der Flächeninhalt und [[s]] der Halbumfang ist. Bei einem rechtwinkligen Dreieck gilt [[A = \\frac{ab}{2}]] und [[s = \\frac{a+b+c}{2}]]. Bei einem 6-8-10-Dreieck gilt [[A = 24]] und [[s = 12]], also [[r = 2]]. Der Rechner auf dieser Seite verwendet die Dreiseitenformel, also behandeln Sie den Flächeninhaltsweg als unabhängige Prüfung.",
        },
        {
          "question": "Ist der Inkreisradius dasselbe wie der Umkreisradius?",
          "answer": "Nein. Der Inkreisradius ist der Radius des Kreises innerhalb des Dreiecks, der seine Seiten berührt, [[r = \\frac{a+b-c}{2}]], während der Umkreisradius der Radius des Kreises durch die Eckpunkte ist, [[R = \\frac{c}{2}]]. In einem 6-8-10-Dreieck betragen sie 2 und 5.",
        },
        {
          "question": "Kann der Inkreisradius größer als die kürzeste Kathete eines Dreiecks sein?",
          "answer": "Nein. Der Inkreisradius ist immer kleiner als jede Kathete, weil der Inkreis innerhalb des Dreiecks passen muss. In einem 3-4-5-Dreieck beträgt der Inkreisradius 1, kleiner als die kürzeste Kathete von 3. Eine Antwort, die größer als die kürzeste Kathete ist, deutet auf einen Fehler hin, gewöhnlich auf eine Kathete, die als Hypotenuse eingegeben wurde.",
        },
        {
          "question": "Warum muss die Hypotenuse die längste Seite sein?",
          "answer": "Die Hypotenuse liegt gegenüber dem rechten Winkel, dem größten Winkel im Dreieck, und die längste Seite liegt immer gegenüber dem größten Winkel. Auch der Satz des Pythagoras erzwingt es: [[c^2 = a^2+b^2]] ist größer als [[a^2]] oder [[b^2]] allein, also ist [[c]] länger als [[a]] und länger als [[b]].",
        },
        {
          "question": "Wie kann ich prüfen, ob meine Inkreisradius-Berechnung richtig ist?",
          "answer": "Berechnen Sie sie mit der ursprünglichen Formel neu, prüfen Sie dann mit Flächeninhalt und Halbumfang, [[r = \\frac{A}{s}]], und bestätigen Sie [[a^2+b^2 = c^2]] für die Seiten. Vergewissern Sie sich außerdem, dass die Antwort positiv ist, kleiner als jede Kathete und in derselben Einheit wie die Seiten angegeben. Wenn alle vier Prüfungen übereinstimmen, ist die Antwort richtig.",
        },
      ],
    },
};
