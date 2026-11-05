// hypotenuseFromProjectionsGuideTranslations.bde.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B2_DE = {
  "de": {
      "tocHeading": "Inhalt der Anleitung",
      "tocItems": {
        "sec-altitude": "Wie Hypotenusenprojektionen mit der Höhe zusammenhängen",
        "sec-applications": "Praktische Anwendungen von Hypotenusenprojektions-Berechnungen",
        "sec-calculate": "Hypotenuse aus zwei Projektionen berechnen",
        "sec-compare": "Hypotenuse aus Projektionen vs. Hypotenuse aus Katheten",
        "sec-diagram": "Diagramm der Hypotenusenprojektionen eines rechtwinkligen Dreiecks erklärt",
        "sec-examples": "Durchgerechnete Beispiele zur Hypotenuse aus Projektionen",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-formula": "Formel für die Hypotenuse aus Projektionen im rechtwinkligen Dreieck",
        "sec-how": "So nutzen Sie den Hypotenusen-aus-Projektionen-Rechner",
        "sec-intro": "Hypotenusen-aus-Projektionen-Rechner für rechtwinklige Dreiecke",
        "sec-legs": "Beziehung zwischen Hypotenusenprojektionen und Dreiecksseiten",
        "sec-manual": "Hypotenuse aus Projektionen von Hand berechnen",
        "sec-mistakes": "Häufige Fehler bei der Hypotenusenberechnung aus Projektionen",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-pythagoras": "Hypotenusenprojektionen und der Satz des Pythagoras",
        "sec-related": "Entdecken Sie verwandte rechtwinklige Dreiecksrechner",
        "sec-special": "Sonderfälle und wichtige Eigenschaften",
        "sec-understanding": "Die Hypotenuse und ihre zwei Abschnitte verstehen",
        "sec-verify": "Ihre Hypotenusenberechnung überprüfen",
        "sec-what": "Was sind Hypotenusenprojektionen in einem rechtwinkligen Dreieck?",
        "sec-why": "Warum ist die Hypotenuse gleich der Summe ihrer Projektionen?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die beiden Eingabefelder akzeptieren die Projektionslängen p und q, beide entlang der Hypotenuse gemessen. Mit den Einheitenwählern können Sie Zentimeter, Meter, Millimeter, Fuß oder Zoll eingeben, solange p und q vor dem Addieren kompatible Einheiten verwenden.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Drücken Sie auf Hypotenuse c berechnen, um das Ergebnis zu sehen, und nutzen Sie Zurücksetzen, um die Felder für eine neue Aufgabe zu leeren. Nur positive Längen werden akzeptiert, denn eine Projektion ist ein reales Stück der Hypotenuse, und ein Null- oder Negativwert kann sie nicht beschreiben.",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist die vollständige Hypotenusenlänge c in Ihrer gewählten Einheit. Die Rechnung ist eine einfache Addition, aber die folgenden Abschnitte erklären, was die Abschnitte bedeuten und wie man die Antwort von Hand prüft.",
            },
          ],
          "h2": "Hypotenuse aus zwei Projektionen berechnen",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel lautet [[c = p + q]], wobei c die vollständige Hypotenuse ist, p der erste Projektionsabschnitt und q der zweite. Sie verwendet Addition statt Multiplikation oder Quadratwurzeln, weil die beiden Projektionen benachbarte Teile einer geraden Seite sind, und die Streckenaddition diese Seite aus ihren Teilen wieder aufbaut. Stellen Sie sich vor, zwei Stücke eines Brettes zu messen und die Messungen zu addieren, um die volle Brettlänge zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Eine häufige Frage ist, warum die Formel die beiden Abschnitte nicht mittelt. Ein Mittelwert ergäbe die halbe Hypotenuse, was eine andere Frage beantwortet. Die Addition baut die ganze Seite wieder auf; Mittelwert und geometrisches Mittel gehören zu anderen Formeln, die später in dieser Anleitung behandelt werden.",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[p = 7]] cm und [[q = 11]] cm. Einsetzen ergibt [[c = 7 + 11]], also [[c = 18]] cm. Die Formel selbst ist einfach; wichtig ist zu verstehen, welche zwei Abschnitte als Projektionen zählen.",
            },
            {
              "kind": "p",
              "text": "Beide Abschnitte müssen vor dem Addieren kompatible Einheiten verwenden. Wenn p in Millimetern und q in Zentimetern angegeben ist, wandeln Sie erst einen der beiden um, genau wie der Rechner auf dieser Seite Sie dazu auffordert.",
            },
          ],
          "h2": "Formel für die Hypotenuse aus Projektionen im rechtwinkligen Dreieck",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Neun kurze Schritte führen Sie vom beschrifteten Diagramm zur geprüften Hypotenuse.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifizieren Sie das rechtwinklige Dreieck in Ihrer Aufgabe und prüfen Sie, dass es einen rechten Winkel hat.",
                "Finden Sie die Hypotenuse: die Seite gegenüber dem rechten Winkel.",
                "Finden Sie den Punkt, an dem die Höhe aus dem rechten Winkel auf die Hypotenuse trifft.",
                "Identifizieren Sie die beiden Projektionen p und q als die Abschnitte zu beiden Seiten dieses Punktes, mithilfe der Anleitung zum <a href=\"/right-triangle-projection-p-calculator/\">Rechner für Projektion p</a> für den ersten Abschnitt. Der <a href=\"/right-triangle-projection-q-calculator/\">Rechner für Projektion q</a> behandelt den zweiten Abschnitt auf dieselbe Weise.",
                "Rechnen Sie beide Messungen bei Bedarf in kompatible Einheiten um.",
                "Geben Sie p in das Feld Projektion p und q in das Feld Projektion q ein.",
                "Klicken Sie auf die Schaltfläche Hypotenuse c berechnen.",
                "Lesen Sie das Hypotenusenergebnis in Ihrer gewählten Einheit ab.",
                "Nutzen Sie Zurücksetzen, bevor Sie eine neue Aufgabe beginnen.",
              ],
            },
            {
              "kind": "p",
              "text": "Die korrekte Identifizierung zählt am meisten. Die Felder erwarten die beiden Abschnitte der Hypotenuse selbst, nicht die Katheten und nicht die Höhe. Wer das falsche Paar eingibt, erhält trotzdem eine Summe, aber sie ist nicht die Hypotenuse.",
            },
          ],
          "h2": "So nutzen Sie den Hypotenusen-aus-Projektionen-Rechner",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieser Rechner findet die Hypotenuse eines rechtwinkligen Dreiecks, indem er ihre zwei Projektionsabschnitte addiert.",
            },
            {
              "kind": "p",
              "text": "Die Projektionen p und q sind die zwei Stücke der Hypotenuse, die entstehen, wenn die Höhe aus dem rechten Winkel auf sie trifft. Geben Sie beide Längen ein, und der Rechner addiert sie mit der Formel [[c = p + q]], um die volle Hypotenuse auszugeben. Wenn zum Beispiel [[p = 4]] cm und [[q = 9]] cm ist, dann gilt [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist die längste Seite des rechtwinkligen Dreiecks und liegt gegenüber dem rechten Winkel. Der Rechner steht zuerst auf dieser Seite, gefolgt von der Formel, der Geometrie dahinter, durchgerechneten Beispielen und Möglichkeiten, Ihre Antwort zu prüfen.",
            },
            {
              "kind": "p",
              "text": "Die Anleitung eignet sich für Schülerinnen und Schüler der Mittelstufe, die Projektionen erstmals kennenlernen, für Geometriekurse der Oberstufe und für alle, die Hausaufgaben prüfen. Jede Formel wird mit echten Zahlen durchgerechnet, sodass Sie jedem Schritt folgen können, ohne erst Symbole entschlüsseln zu müssen.",
            },
          ],
          "h2": "Hypotenusen-aus-Projektionen-Rechner für rechtwinklige Dreiecke",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die manuelle Rechnung ist ein einziges Einsetzen in [[c = p + q]]. Nehmen Sie [[p = 3.6]] cm und [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie die Werte ein: [[c = 3.6 + 6.4]]. Addieren Sie: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Richten Sie beim Addieren von Hand die Dezimalkommas untereinander aus: 3.6 plus 6.4 ergibt 10.0, und die Null am Ende kann weggelassen werden für ein sauberes [[c = 10]] cm. Behalten Sie die Einheit an der Antwort; eine bloße Zahl ist keine vollständige Länge.",
            },
            {
              "kind": "p",
              "text": "Es ist keine Pythagoras-Rechnung nötig, weil beide Projektionslängen bereits bekannt sind. Zur Kontrolle prüfen Sie, ob die Summe sinnvoll ist: 3.6 plus 6.4 ist eindeutig 10, und die Hypotenuse muss länger sein als jede einzelne Projektion.",
            },
          ],
          "h2": "Hypotenuse aus Projektionen von Hand berechnen",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel und in jedem nicht entarteten rechtwinkligen Dreieck die längste Seite. Wenn die Höhe aus dem Scheitel des rechten Winkels senkrecht auf sie fällt, wird die Hypotenuse in zwei kürzere Abschnitte geteilt, die Ende an Ende auf derselben Geraden liegen.",
            },
            {
              "kind": "p",
              "text": "Weil beide Abschnitte auf dieser einen Seite liegen, verhalten sie sich wie zwei benachbarte Stücke eines Lineals: Aneinandergelegt bauen sie die ganze Seite exakt wieder auf, ohne Überlappung und ohne Lücke. Darum addieren sich die Projektionen immer zur Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Diese Bezeichnungen passen zum Hauptdiagramm unten. Die Ecken A und B sind die Spitzen an den spitzen Winkeln, C ist der Scheitel des rechten Winkels und D ist der Höhenfußpunkt der Höhe CD auf der Hypotenuse AB, mit [[AD = p]] und [[DB = q]].",
            },
          ],
          "h2": "Die Hypotenuse und ihre zwei Abschnitte verstehen",
          "table": {
            "headers": [
              "Symbol",
              "Bedeutung",
            ],
            "rows": [
              [
                "a",
                "Erste senkrechte Kathete",
              ],
              [
                "b",
                "Zweite senkrechte Kathete",
              ],
              [
                "c",
                "Vollständige Hypotenuse",
              ],
              [
                "p",
                "Erste Hypotenusenprojektion",
              ],
              [
                "q",
                "Zweite Hypotenusenprojektion",
              ],
              [
                "h",
                "Höhe auf die Hypotenuse",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Beginnen Sie mit einem rechtwinkligen Dreieck und zeichnen Sie die Höhe aus dem Scheitel des rechten Winkels senkrecht zur Hypotenuse. Die Höhe berührt die Hypotenuse in einem Punkt, dem Höhenfußpunkt, und dieser Punkt teilt die Hypotenuse in zwei benachbarte Abschnitte. Diese zwei Abschnitte sind die Hypotenusenprojektionen: [[p = AD]] und [[q = DB]], wenn das Dreieck ABC heißt, seinen rechten Winkel bei C hat und die Höhe CD. Der <a href=\"/right-triangle-projection-calculator/\">Projektionsrechner</a> behandelt jeden Abschnitt einzeln.",
            },
            {
              "kind": "p",
              "text": "Eine Projektion ist keine Kathete. Die Katheten a und b sind die zwei Seiten, die den rechten Winkel bilden, während die Projektionen p und q flach entlang der Hypotenuse selbst liegen. Die Verwechslung ist der häufigste Beschriftungsfehler, fragen Sie also immer: Liegt diese Länge auf der Hypotenuse, oder ist sie eine der Seiten um den rechten Winkel?",
            },
            {
              "kind": "p",
              "text": "Hier ein anfängerfreundliches Beispiel. Wenn die Höhe eine Hypotenuse in einen 4-cm-Abschnitt und einen 9-cm-Abschnitt teilt, dann ist [[p = 4]] cm und [[q = 9]] cm, und die volle Hypotenuse ist [[c = 4 + 9 = 13]] cm. Die Formel [[c = p + q]] baut die ganze Seite einfach aus ihren zwei Teilen wieder auf.",
            },
            {
              "kind": "p",
              "text": "Eine kurze Beschriftungsgewohnheit verhindert die meisten Fehler: Beginnen Sie beim Scheitel des rechten Winkels C, zeichnen Sie die Höhe zur Hypotenuse und markieren Sie den Fußpunkt D. Der Abschnitt an A ist p und der Abschnitt an B ist q. Sobald diese beiden Beschriftungen gesetzt sind, gilt der Rest der Anleitung direkt.",
            },
          ],
          "h2": "Was sind Hypotenusenprojektionen in einem rechtwinkligen Dreieck?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieselben Projektionen liefern die Höhe über den Höhensatz: [[h^2 = pq]], also [[h = \\sqrt{pq}]]. Mit [[p = 9]] cm und [[q = 16]] cm gilt [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Vergleichen Sie die zwei Formeln: [[c = p + q]] addiert die Projektionen, während [[h = \\sqrt{pq}]] ihr geometrisches Mittel nimmt. Sie beantworten verschiedene Fragen. Die Hypotenuse ist die volle Seitenlänge; die Höhe ist die senkrechte Strecke vom rechten Winkel hinunter zu dieser Seite.",
            },
            {
              "kind": "p",
              "text": "Für Höhenaufgaben nutzen Sie den <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus Projektionen</a>, der auf [[h = \\sqrt{pq}]] aufbaut. Halten Sie die beiden Ergebnisse auseinander: In diesem Dreieck beträgt die Hypotenuse 25 cm, während die Höhe nur 12 cm beträgt.",
            },
            {
              "kind": "p",
              "text": "Hier gilt eine eingebaute Plausibilitätsprüfung: Die Höhe ist immer kürzer als die Hypotenuse. Im durchgerechneten Beispiel liegt 12 cm deutlich unter 25 cm. Wenn Ihre Höhe jemals die Hypotenuse übertrifft, prüfen Sie, welche Formel Sie verwendet haben.",
            },
          ],
          "h2": "Wie Hypotenusenprojektionen mit der Höhe zusammenhängen",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit den Projektionen 9 und 16 auf der Hypotenuse, Hypotenuse 25 und Höhe 12 senkrecht zur Hypotenuse gezeichnet",
            "caption": "Gleiche Projektionen, zwei Formeln: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Das Hauptdiagramm zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seite AC ist die Kathete a, die Seite BC ist die Kathete b und die Seite AB ist die Hypotenuse c. Die Höhe CD fällt von C senkrecht auf AB und berührt sie in D.",
            },
            {
              "kind": "p",
              "text": "Eine gute Lesereihenfolge beginnt am Scheitel C: Folgen Sie der Kathete a hinunter zu A, der Kathete b hinüber zu B, und laufen Sie dann entlang der Hypotenuse c von A nach B. Halten Sie bei D, dem Höhenfußpunkt, an, um die Teilung in p und q zu sehen. So gelesen verbinden sich die Beschriftungen mit der Formel.",
            },
            {
              "kind": "p",
              "text": "Der Punkt D teilt AB in zwei Teile: Der Abschnitt AD ist die Projektion p und der Abschnitt DB ist die Projektion q. Die Beschriftungen sitzen direkt im Diagramm, sodass Sie sehen können, wo p beginnt, wo q endet und wie beide zusammen die ganze Seite von A bis B überspannen.",
            },
            {
              "kind": "p",
              "text": "Die Markierungen der rechten Winkel bei C und D bestätigen die Geometrie. Die Markierung bei C macht AB zur Hypotenuse, und die Markierung bei D bestätigt, dass CD die Höhe ist. Das ursprüngliche Dreieck ist nun in zwei kleinere rechtwinklige Dreiecke geteilt, ACD und CBD, die später in dieser Anleitung wiederkehren.",
            },
          ],
          "h2": "Diagramm der Hypotenusenprojektionen eines rechtwinkligen Dreiecks erklärt",
          "image": {
            "alt": "Rechtwinkliges Dreieck ABC mit rechtem Winkel bei C; Höhe CD senkrecht zur Hypotenuse AB gezeichnet, die sie in Projektion p (Abschnitt AD) und Projektion q (Abschnitt DB) teilt, mit beschrifteten Katheten a und b",
            "caption": "Die Höhe CD teilt die Hypotenuse AB in die Projektionen p und q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes Beispiel nennt die gegebenen Werte, das Einsetzen und die endgültige Antwort. Die Erläuterungen bleiben kurz, damit die Rechnung sichtbar bleibt.",
            },
            {
              "kind": "p",
              "text": "Alle Beispiele halten die Einheiten von den gegebenen Werten bis zur Antwort konsistent. Wenn die Einheiten abweichen, rechnet das Beispiel zuerst um und sagt das ausdrücklich, damit Sie sich die Gewohnheit für Ihre eigene Arbeit aneignen können.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 4]] cm und [[q = 9]] cm, liefert die Formel [[c = p + q]] dann [[c = 4 + 9]], also [[c = 13]] cm. Zwei ganzzahlige Projektionen ergeben hier eine ganzzahlige Hypotenuse, doch das ist allgemein nicht garantiert.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Gleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 5]] cm und [[q = 5]] cm, gilt [[c = 5 + 5 = 10]] cm. Gleiche Projektionen bedeuten, dass die Höhe die Hypotenuse in der Mitte trifft, was genau dann geschieht, wenn die beiden Katheten gleich sind: ein gleichschenklig-rechtwinkliges Dreieck. Weil die Katheten gleich sind, ist die Höhe auch die Seitenhalbierende, weshalb sie die Hypotenuse halbiert.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Dezimale Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 3.6]] m und [[q = 6.4]] m, gilt [[c = 3.6 + 6.4 = 10]] m. Richten Sie die Dezimalkommas untereinander aus und addieren Sie wie üblich; die Einheit bleibt durchgehend Meter.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Ungleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 2]] cm und [[q = 18]] cm, gilt [[c = 2 + 18 = 20]] cm. Die Projektionen müssen nicht ähnlich groß sein; die Summe baut trotzdem die volle Hypotenuse wieder auf.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Größere Messwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 125]] mm und [[q = 275]] mm, gilt [[c = 125 + 275 = 400]] mm. Große Werte ändern nichts an der Methode.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Gemischte Einheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 40]] mm und [[q = 9]] cm, rechnen Sie zuerst um: 40 mm sind 4 cm. Dann gilt [[c = 4 + 9 = 13]] cm. Wer vor dem Umrechnen addiert, erhielte ein bedeutungsloses Ergebnis von 49.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Bruchmessungen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = \\frac{1}{2}]] ft und [[q = \\frac{3}{4}]] ft, schreiben Sie beide mit Nenner 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, also 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Eine fehlende Projektion finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[c = 25]] cm und [[p = 9]] cm, lösen Sie [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Dieser umgekehrte Schritt zeigt, dass die Beziehung in beide Richtungen läuft, obwohl der Rechner auf dieser Seite p und q addiert, um c zu finden, statt nach einer fehlenden Projektion aufzulösen.",
            },
          ],
          "h2": "Durchgerechnete Beispiele zur Hypotenuse aus Projektionen",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektionen bestimmen auch die Katheten über den Kathetensatz: [[a^2 = cp]] und [[b^2 = cq]]. Jede Kathete ist das geometrische Mittel aus Hypotenuse und ihrer anliegenden Projektion, eine Tatsache, die aus der Ähnlichkeit der kleineren Dreiecke mit dem ursprünglichen folgt.",
            },
            {
              "kind": "p",
              "text": "Wurzelziehen ergibt [[a = \\sqrt{cp}]] und [[b = \\sqrt{cq}]]. Mit [[p = 9]] cm und [[q = 16]] cm finden Sie zuerst [[c = 9 + 16 = 25]] cm. Dann gilt [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm und [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist also der Schlüssel, der die übrigen Seiten erschließt: Sobald c bekannt ist, folgt jede Kathete aus ihrer eigenen Projektion. Der <a href=\"/right-triangle-side-calculator/\">Seitenrechner</a> löst ähnliche Aufgaben mit fehlenden Seiten direkt.",
            },
            {
              "kind": "p",
              "text": "Die Zuordnung ist nicht willkürlich: Die Kathete a liegt im kleinen Dreieck ACD an der Projektion p an, das dem gesamten Dreieck ähnlich ist, also hängt a mit c und p zusammen, während b mit c und q zusammenhängt. Wer sich merkt, welche Kathete zu welcher Projektion gehört, setzt die Quadratwurzeln auf die richtigen Abschnitte an.",
            },
          ],
          "h2": "Beziehung zwischen Hypotenusenprojektionen und Dreiecksseiten",
          "image": {
            "alt": "Rechtwinkliges Dreieck mit den Projektionen 9 und 16 und der Hypotenuse 25, zeigt Kathete a gleich 15 aus a Quadrat gleich 25 mal 9, und Kathete b gleich 20 aus b Quadrat gleich 25 mal 16",
            "caption": "Kathete a = sqrt(25 x 9) = 15; Kathete b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Der Grund ist das Streckenadditions-Postulat: Wenn der Punkt D auf der Strecke AB zwischen A und B liegt, dann ist die Länge AB gleich AD plus DB. Hier ist D der Höhenfußpunkt und A und B sind die Hypotenusenendpunkte, also gilt [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Das Einsetzen der Standardsymbole liefert die Formel direkt. In einem nicht entarteten rechtwinkligen Dreieck landet der Höhenfußpunkt immer zwischen den Endpunkten, also gilt das Postulat immer. Für diesen Schritt ist keine Trigonometrie nötig.",
            },
            {
              "kind": "p",
              "text": "Die Dreiecksähnlichkeit ist das Werkzeug hinter den tieferen Projektionsbeziehungen wie [[a^2 = cp]], doch die einfache Streckenaddition genügt, um [[c = p + q]] zu belegen. Das Diagramm unten zeigt dieselbe Idee auf einer einzelnen Geraden.",
            },
            {
              "kind": "p",
              "text": "Eine Einzelheit verdient Betonung: D liegt in einem echten rechtwinkligen Dreieck immer strikt zwischen A und B, niemals an einem Endpunkt und niemals außerhalb der Strecke. Diese Lage macht das Streckenadditions-Postulat anwendbar, und sie ist der Grund, warum Null- oder Negativprojektionen abgelehnt werden.",
            },
          ],
          "h2": "Warum ist die Hypotenuse gleich der Summe ihrer Projektionen?",
          "image": {
            "alt": "Gerade Strecke AB, in Punkt D geteilt in Abschnitt AD beschriftet mit p und Abschnitt DB beschriftet mit q, zeigt die ganze Strecke gleich p plus q",
            "caption": "Ein Punkt zwischen A und B teilt die Strecke: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "In Klassenzimmern und Hausaufgaben prüfen Projektionsaufgaben, ob Schüler ein Diagramm beschriften und [[c = p + q]] anwenden können, statt zum Satz des Pythagoras zu greifen. Übungen im technischen Zeichnen nutzen dieselbe Fertigkeit, wenn eine Höhe eine gemessene Hypotenuse auf einer Zeichnung teilt.",
            },
            {
              "kind": "p",
              "text": "Vermessungsmodelle und architektonische Geometrie reduzieren einen rechtwinkligen Grundriss manchmal auf eine Hypotenuse, die von einer Senkrechten geschnitten wird, wobei das Addieren der zwei markierten Abschnitte die volle Spannweite ergibt. Geometrische Konstruktionen auf Papier nutzen die Summe, um Zirkelweiten festzulegen.",
            },
            {
              "kind": "p",
              "text": "Die Bedingung ist immer dieselbe: p und q müssen benachbarte Teile einer Hypotenuse in einem echten rechtwinkligen Dreieck sein. Beliebige Abstände genügen niemals, so verlockend das Addieren auch aussieht.",
            },
            {
              "kind": "p",
              "text": "Lehrer können den Projektionsaufbau als Brückenlektion nutzen: Er wiederholt die Streckenaddition aus früheren Klassenstufen und bereitet zugleich die Ähnlichkeitssätze vor, die später im Geometriekurs folgen.",
            },
          ],
          "h2": "Praktische Anwendungen von Hypotenusenprojektions-Berechnungen",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei Wege führen zur Hypotenuse. Wenn die Abschnitte der Höhe bekannt sind, nutzen Sie die Streckenaddition: [[c = p + q]]. Wenn stattdessen die zwei Seiten um den rechten Winkel bekannt sind, nutzen Sie den Satz des Pythagoras: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Wählen Sie die Projektionsformel, wenn die Aufgabe den Höhenfußpunkt und seine zwei Abschnitte angibt; wählen Sie die Kathetenformel, wenn sie die zwei senkrechten Seiten angibt. In einem konsistenten Dreieck liefern beide Wege dasselbe c.",
            },
            {
              "kind": "p",
              "text": "Eine schnelle Gegenprüfung verbindet die beiden Formeln. Aus den Projektionen [[p = 9]] und [[q = 16]] folgt [[c = 25]]. Die Katheten sind [[a = 15]] und [[b = 20]], und [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Beide Wege landen auf derselben Hypotenuse.",
            },
          ],
          "h2": "Hypotenuse aus Projektionen vs. Hypotenuse aus Katheten",
          "table": {
            "headers": [
              "Bekannte Werte",
              "Formel",
              "Methode",
            ],
            "rows": [
              [
                "Projektionen p und q",
                "c = p + q",
                "Streckenaddition",
              ],
              [
                "Katheten a und b",
                "c = √(a² + b²)",
                "Satz des Pythagoras",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jeder Fehler unten wird von seiner Korrektur gefolgt.",
            },
            {
              "kind": "steps",
              "steps": [
                "p und q multiplizieren statt addieren. Bei [[p = 4]] und [[q = 9]] ist das Produkt 36 hier bedeutungslos; die Hypotenuse ist [[4 + 9 = 13]].",
                "Projektionen mit Katheten verwechseln. Die Katheten treffen sich im rechten Winkel; die Projektionen liegen entlang der Hypotenuse. Beschriften Sie jede Länge vor dem Rechnen.",
                "Die Höhe als Projektion verwenden. Die Höhe h steht senkrecht auf der Hypotenuse, sie ist kein Stück davon, gehört also nie in [[c = p + q]].",
                "Messungseinheiten mischen. [[p = 40]] mm und [[q = 9]] cm müssen vor dem Addieren zu 4 cm und 9 cm werden; die rohe Summe 49 hat keine gültige Einheit.",
                "Negative Längen eingeben. Projektionen sind per Definition positiv, also deutet ein negativer Eintrag auf einen Datenfehler hin.",
                "Die Hypotenuse mit einer Kathete verwechseln. Die Hypotenuse liegt gegenüber dem rechten Winkel und ist die längste Seite; eine Kathete kann niemals ihre Rolle spielen.",
                "Einen Abschnitt vergessen. Nur p zu addieren ergibt eine Teillänge; die Hypotenuse braucht beide Teile.",
                "Unzusammenhängende Messwerte verwenden. Die zwei Zahlen müssen die benachbarten Teile derselben Hypotenuse sein, nicht beliebige Längen aus der Aufgabe.",
                "Den Satz des Pythagoras auf p und q anwenden. Der Wert [[\\sqrt{p^2 + q^2}]] ist nicht die Hypotenuse, weil p und q kollinear liegen, nicht senkrecht.",
                "[[c = p + q]] mit [[h = \\sqrt{pq}]] verwechseln. Die Addition findet die Hypotenuse; das geometrische Mittel findet die Höhe. Wer die Formeln vertauscht, vertauscht die Antworten.",
              ],
            },
            {
              "kind": "p",
              "text": "Wenn Sie sich mitten in einem Fehler ertappen, halten Sie an und beschriften Sie das Diagramm neu, bevor Sie neu rechnen. Die meisten Fehler oben verschwinden, sobald p und q klar auf der Hypotenuse markiert und alles andere durchgestrichen ist.",
            },
          ],
          "h2": "Häufige Fehler bei der Hypotenusenberechnung aus Projektionen",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Versuchen Sie diese sechs Aufgaben und prüfen Sie dann die durchgerechneten Antworten unten. Keiner der Werte wiederholt die durchgerechneten Beispiele.",
            },
            {
              "kind": "p",
              "text": "Arbeiten Sie jede Aufgabe auf Papier, bevor Sie ihre Antwort lesen. Decken Sie die Antworten bei Bedarf mit der Hand ab; die mehrstufige Aufgabe prüft am besten, ob die Projektionssätze sitzen.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Die Höhe eines rechtwinkligen Dreiecks teilt die Hypotenuse in [[p = 12]] cm und [[q = 4]] cm. Finden Sie c.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Dezimalzahlen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 2.5]] m und [[q = 7.5]] m, finden Sie die Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Gleiche Projektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 7]] in und [[q = 7]] in, finden Sie c. Um welche Dreiecksart handelt es sich?",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Einheitenumrechnung",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 200]] mm und [[q = 35]] cm, finden Sie die Hypotenuse in Zentimetern.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Fehlende Projektion",
            },
            {
              "kind": "p",
              "text": "Eine Hypotenuse misst [[c = 50]] cm und eine Projektion ist [[q = 32]] cm. Finden Sie p.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Mehrstufig mit Katheten",
            },
            {
              "kind": "p",
              "text": "Gegeben [[p = 16]] cm und [[q = 9]] cm, finden Sie c und dann die Katheten a und b.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[c = 7 + 7 = 14]] in. Gleiche Projektionen ergeben ein gleichschenklig-rechtwinkliges Dreieck.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: Rechnen Sie 200 mm in 20 cm um, dann gilt [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[c = 16 + 9 = 25]] cm. Dann gilt [[a = \\sqrt{25 \\times 16} = 20]] cm und [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Übungsaufgaben mit Lösungen",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektionsbeziehungen stimmen exakt mit dem Satz des Pythagoras überein. Beginnen Sie mit dem Kathetensatz: [[a^2 = cp]] und [[b^2 = cq]]. Das Addieren der beiden Gleichungen ergibt [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Das Ausklammern von c ist zulässig, weil es beide Terme multipliziert. Da [[p + q = c]] gilt, liefert das Einsetzen:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Eine Zahlenprüfung mit dem 9-16-25-Dreieck bestätigt die Algebra: [[a^2 + b^2 = 225 + 400 = 625]] und [[c^2 = 25^2 = 625]]. Beide Seiten stimmen überein, genau wie der ausgeklammerte Beweis es vorhersagt.",
            },
            {
              "kind": "p",
              "text": "Der Beweis schließt sauber: Die einfache Streckensumme sitzt im Herzen der Pythagoras-Beziehung. Das Diagramm unten zeigt, woher [[a^2 = cp]] und [[b^2 = cq]] kommen: Jedes kleine Dreieck teilt seine Winkel mit dem ursprünglichen, also bleiben entsprechende Seiten proportional.",
            },
          ],
          "h2": "Hypotenusenprojektionen und der Satz des Pythagoras",
          "image": {
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC neben den zwei kleineren ähnlichen Dreiecken ACD und CBD mit übereinstimmenden Winkeln und beschrifteten entsprechenden Seiten",
            "caption": "Die Dreiecke ACD und CBD sind ähnlich zu ABC, was a Quadrat gleich cp und b Quadrat gleich cq ergibt.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Jede Eigenschaft unten folgt direkt aus der Addition, weshalb man ihnen leicht vertrauen kann.",
            },
            {
              "items": [
                "Gleiche Projektionen: Wenn [[p = q]] gilt, dann [[c = 2p]]. Die Höhe landet in der Mitte, und die zwei Katheten sind gleich, was ein gleichschenklig-rechtwinkliges Dreieck ergibt.",
                "Ungleiche Projektionen: Jedes positive Paar funktioniert. Die Höhe neigt sich zur längeren Projektion, und die nähere Kathete ist die kürzere.",
                "Sehr kleine Projektionen: Die Formel gilt weiterhin, zum Beispiel ergeben [[p = 0.5]] mm und [[q = 1.5]] mm dann [[c = 2]] mm.",
                "Sehr große Projektionen: Es gibt keine Obergrenze, zum Beispiel ergeben [[p = 1200]] m und [[q = 800]] m dann [[c = 2000]] m.",
                "Skalierung: Das Verdoppeln beider Projektionen verdoppelt die Hypotenuse, da [[2p + 2q = 2(p + q)]] gilt.",
                "p und q vertauschen: [[p + q = q + p]], also bleibt die Hypotenuse unverändert und nur die Beschriftungen AD und DB tauschen die Plätze.",
                "Null-Längen-Projektionen: [[p = 0]] bedeutet, dass die Höhe mit einer Kathete zusammenfällt, also ist das Dreieck entartet und der Rechner akzeptiert es nicht.",
                "Negative Projektionen: Längen können nicht negativ sein, also ist ein negativer Eintrag immer ein Datenfehler.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Das Diagramm vergleicht zwei Dreiecke mit derselben Hypotenuse, aber unterschiedlichen Projektionsaufteilungen, und zeigt, wie sich die Form ändert, während die Summe fest bleibt.",
            },
          ],
          "h2": "Sonderfälle und wichtige Eigenschaften",
          "image": {
            "alt": "Zwei rechtwinklige Dreiecke mit derselben Hypotenusenlänge 10: eines mit gleichen Projektionen 5 und 5, das andere mit den Projektionen 2 und 8",
            "caption": "Gleiche Hypotenuse, verschiedene Formen: p = q = 5 gegenüber p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Drei schnelle Prüfungen fangen fast jeden Rechenfehler ab. Die erste ist die direkte Rechnung; die anderen zwei bestätigen sie aus verschiedenen Blickwinkeln.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Die Streckenaddition neu berechnen",
            },
            {
              "kind": "p",
              "text": "Addieren Sie p und q erneut, langsam. Bei [[p = 4]] und [[q = 9]] bestätigen Sie [[4 + 9 = 13]]. Ein Flüchtigkeitsfehler hier ist die häufigste Quelle einer falschen Antwort.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Prüfen, ob die Katheten zu Pythagoras passen",
            },
            {
              "kind": "p",
              "text": "Berechnen Sie die Katheten aus den Projektionen, [[a = \\sqrt{cp}]] und [[b = \\sqrt{cq}]], und prüfen Sie dann [[a^2 + b^2 = c^2]]. Für [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]] und [[225 + 400 = 625]]. Diese geometrische Prüfung geht über die Addition des Rechners hinaus.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Das Diagramm auf Plausibilität prüfen",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie, dass beide Projektionen positiv sind, dass beide auf derselben Hypotenuse liegen und dass c länger ist als jeder einzelne Abschnitt. Wenn das Ergebnis kleiner als p oder q ist, wurde ein Wert in das falsche Feld eingegeben.",
            },
          ],
          "h2": "Ihre Hypotenusenberechnung überprüfen",
        },
      },
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "answer": "Die Formel lautet [[c = p + q]], wobei p und q die zwei Projektionsabschnitte der Hypotenuse sind. Addieren Sie die zwei Längen, um die volle Hypotenuse zu erhalten. Zum Beispiel ergeben [[p = 4]] cm und [[q = 9]] cm dann [[c = 13]] cm.",
          "question": "Wie lautet die Formel für die Hypotenuse aus Projektionen?",
        },
        {
          "answer": "Es sind die zwei Abschnitte, die entstehen, wenn die Höhe aus dem rechten Winkel auf die Hypotenuse trifft. Mit [[p = AD]] und [[q = DB]] beschriftet im Dreieck ABC mit der Höhe CD, liegen sie Ende an Ende entlang der Hypotenuse und überspannen sie vollständig.",
          "question": "Was sind Hypotenusenprojektionen?",
        },
        {
          "answer": "Wegen der Streckenaddition: Der Höhenfußpunkt liegt zwischen den Hypotenusenendpunkten, also ist die ganze Seite gleich der Summe ihrer Teile. Das Einsetzen der Standardsymbole verwandelt [[AB = AD + DB]] in [[c = p + q]]. Es ist keine Trigonometrie nötig.",
          "question": "Warum addieren wir p und q?",
        },
        {
          "answer": "Nein. Die Katheten a und b bilden den rechten Winkel, während die Projektionen p und q entlang der Hypotenuse liegen. Die Verwechslung ist der häufigste Beschriftungsfehler, prüfen Sie also vor dem Rechnen die Lage jeder Länge im Diagramm.",
          "question": "Sind Projektionen dasselbe wie Dreieckskatheten?",
        },
        {
          "answer": "Ja. Die Höhe trifft selten exakt die Mitte, also sind p und q meist ungleich. Jedes positive Paar ist gültig, und die Summe ergibt trotzdem die Hypotenuse. Das Dreieck neigt sich einfach zur längeren Projektion.",
          "question": "Können die Projektionen unterschiedlich lang sein?",
        },
        {
          "answer": "Die Formel wird zu [[c = 2p]]. Die Höhe halbiert die Hypotenuse, die zwei Katheten sind gleich, und das Dreieck ist ein gleichschenklig-rechtwinkliges Dreieck. Geometrisch landet die Höhe genau in der Mitte.",
          "question": "Was passiert, wenn p und q gleich sind?",
        },
        {
          "answer": "Ja, mit einer anderen Formel: [[h = \\sqrt{pq}]], dem geometrischen Mittel der Projektionen. Der <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus Projektionen</a> ist für diese Rechnung gebaut. Halten Sie sie getrennt von [[c = p + q]], das die Hypotenuse findet.",
          "question": "Kann ich die Höhe mit p und q berechnen?",
        },
        {
          "answer": "Ja. Finden Sie zuerst [[c = p + q]] und nutzen Sie dann [[a = \\sqrt{cp}]] und [[b = \\sqrt{cq}]]. Für [[p = 9]], [[q = 16]] und [[c = 25]] sind die Katheten 15 und 20. Das sind lehrreiche Erweiterungen und nicht die Hauptfunktion dieses Rechners.",
          "question": "Kann ich die Dreieckskatheten aus Projektionen finden?",
        },
        {
          "answer": "Nein. Das Finden der Hypotenuse aus Projektionen braucht nur Addition, keine Quadratwurzeln. Der Satz des Pythagoras wird nützlich, wenn stattdessen die Katheten bekannt sind oder wenn ein Ergebnis über die Katheten geprüft wird.",
          "question": "Ist der Satz des Pythagoras für diese Rechnung nötig?",
        },
        {
          "answer": "Rechnen Sie eine Messung um, sodass beide dieselbe Einheit verwenden, bevor Sie addieren. Zum Beispiel wird [[p = 40]] mm zu 4 cm, wenn [[q = 9]] cm ist, was [[c = 13]] cm ergibt. Die Einheitenwähler des Rechners dienen demselben Zweck.",
          "question": "Was, wenn p und q verschiedene Einheiten haben?",
        },
        {
          "answer": "Nein. Eine Projektion ist nur ein Teil der Hypotenuse, muss also kürzer als das Ganze sein. Wenn Ihr Ergebnis anderes zeigt, wurde ein Wert in das falsche Feld eingegeben.",
          "question": "Kann eine Projektion länger als die Hypotenuse sein?",
        },
        {
          "answer": "Rechnen Sie [[c = p + q]] langsam neu und bestätigen Sie dann, dass die Katheten [[a^2 + b^2 = c^2]] erfüllen. Prüfen Sie auch, dass beide Projektionen positiv sind und dass c jede einzelne übertrifft. Alle drei Prüfungen dauern unter einer Minute.",
          "question": "Wie kann ich das Hypotenusenergebnis prüfen?",
        },
      ],
      "relatedHeading": "Entdecken Sie verwandte rechtwinklige Dreiecksrechner",
      "relatedIntro": "Wählen Sie das nächste Werkzeug nach den Messungen, die Sie kennen. Jeder Rechner unten übernimmt eine bestimmte Aufgabe am rechtwinkligen Dreieck, von den einzelnen Projektionsabschnitten über die Höhe bis zu den Dreiecksseiten.",
      "relatedItems": [
        "Rechner für Hypotenusenprojektionen im rechtwinkligen Dreieck",
        "Rechner für Projektion p im rechtwinkligen Dreieck",
        "Rechner für Projektion q im rechtwinkligen Dreieck",
        "Rechner für die Höhe aus Projektionen im rechtwinkligen Dreieck",
        "Seitenrechner für rechtwinklige Dreiecke",
      ],
    },
};
