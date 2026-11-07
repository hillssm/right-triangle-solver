// threeFourFiveGuideTranslations.bde.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B2_DE = {
  "de": {
      "meta": {
        "title": "3-4-5-Dreieck-Rechner: Seiten skalieren, Flächeninhalt, Umfang",
        "description": "Skalieren Sie ein 3-4-5-Dreieck mit diesem Rechner: Geben Sie einen positiven Skalierungsfaktor k ein, um die Seiten 3k, 4k und 5k zu finden, dazu den Flächeninhalt 6k² und den Umfang 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
      },
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "3-4-5-Dreieck-Rechner",
        "sec-calculate": "Ein 3-4-5-Dreieck skalieren und seine Maße berechnen",
        "sec-what": "Was ist ein 3-4-5-Dreieck?",
        "sec-pythagorean": "Warum ist 3-4-5 ein Pythagoreisches Tripel?",
        "sec-sides": "Die drei Seiten eines 3-4-5-Dreiecks verstehen",
        "sec-ratio": "Das Seitenverhältnis 3-4-5 verstehen",
        "sec-scale-factor": "Was ist der Skalierungsfaktor bei einem 3-4-5-Dreieck?",
        "sec-leg-a": "Formel zur Berechnung der ersten Kathete",
        "sec-leg-b": "Formel zur Berechnung der zweiten Kathete",
        "sec-hypotenuse": "Formel zur Berechnung der Hypotenuse",
        "sec-area": "So berechnen Sie den Flächeninhalt eines skalierten 3-4-5-Dreiecks",
        "sec-perimeter": "So berechnen Sie den Umfang eines skalierten 3-4-5-Dreiecks",
        "sec-find-k": "So finden Sie den Skalierungsfaktor aus einer bekannten Seite",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Skalierung eines 3-4-5-Dreiecks",
        "sec-examples": "Durchgerechnete Beispiele für verschiedene Skalierungsfaktoren",
        "sec-right-angle": "Warum behält das 3-4-5-Dreieck immer einen 90-Grad-Winkel?",
        "sec-construction": "So nutzen Sie die 3-4-5-Regel zur Prüfung einer rechtwinkligen Ecke",
        "sec-applications": "Anwendungen des 3-4-5-Dreiecks im Bauwesen",
        "sec-similar": "Beziehung zwischen ähnlichen Dreiecken und dem Verhältnis 3-4-5",
        "sec-vs-special": "Unterschied zwischen 3-4-5-, 45-45-90- und 30-60-90-Dreiecken",
        "sec-mistakes": "Häufige Fehler bei der Nutzung des 3-4-5-Dreieck-Rechners",
        "sec-verify": "So prüfen Sie ein skaliertes 3-4-5-Dreieck",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Verwandte rechtwinklige Dreiecksrechner",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "3-4-5-Dreieck-Rechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalieren Sie ein 3-4-5-Dreieck und finden Sie seine Seiten, seinen Flächeninhalt und seinen Umfang.",
            },
            {
              "kind": "p",
              "text": "Ein 3-4-5-Dreieck ist ein rechtwinkliges Dreieck, dessen Seitenlängen dem Verhältnis [[3 : 4 : 5]] folgen. Es ist das bekannteste Pythagoreische Tripel, weil seine ganzzahligen Seiten den Satz des Pythagoras erfüllen: [[3^2 + 4^2 = 5^2]], da [[9 + 16 = 25]] gilt. Die Seite der Länge 5 ist die Hypotenuse, und die Seiten der Länge 3 und 4 sind die Katheten.",
            },
            {
              "kind": "p",
              "text": "Der Rechner skaliert dieses Dreieck mit einem positiven Skalierungsfaktor [[k]], sodass die skalierten Seiten [[a = 3k]], [[b = 4k]] und [[c = 5k]] lauten. Er berechnet außerdem den Flächeninhalt [[A = 6k^2]] und den Umfang [[P = 12k]], sodass eine Eingabe alle fünf Ergebnisse liefert. Nutzen Sie den <a href=\"/right-triangle-calculator/\">Rechner für rechtwinklige Dreiecke</a> für ein allgemeines rechtwinkliges Dreieck.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel werden mit [[k = 2]] die Seiten zu [[a = 6]], [[b = 8]] und [[c = 10]], der Flächeninhalt beträgt [[A = 24]] Quadrateinheiten, und der Umfang beträgt [[P = 24]] Einheiten.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Ein 3-4-5-Dreieck skalieren und seine Maße berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Modus, eine Eingabe und fünf Ergebnisse.",
            },
            {
              "kind": "p",
              "text": "Der Rechner hat einen einzigen Modus: ein 3-4-5-Dreieck skalieren. Geben Sie einen positiven Skalierungsfaktor [[k]] ein und klicken Sie auf Berechnen, und er liefert die drei skalierten Seitenlängen, den Flächeninhalt und den Umfang. Die Tabelle unten listet jede Messung mit ihrer Formel auf.",
            },
            {
              "kind": "p",
              "text": "Der Skalierungsfaktor [[k]] multipliziert jede ursprüngliche Seite. Mit [[k = 1]] erhalten Sie das ursprüngliche 3-4-5-Dreieck. Ein Wert über 1 vergrößert es, und ein Wert zwischen 0 und 1 verkleinert es. Der Rechner fragt nach [[k]], weil das Verhältnis die Form festlegt: Sobald [[k]] bekannt ist, folgt jede Messung daraus.",
            },
            {
              "kind": "p",
              "text": "Geben Sie nur eine positive Zahl ein. Wenn [[k = 0]] gilt, werden alle drei Seiten null, was eine entartete Figur statt eines Dreiecks ist, und ein negatives [[k]] kann keine gültigen Seitenlängen ergeben. Klicken Sie nach der Berechnung auf Zurücksetzen, um das Feld vor einer neuen Aufgabe zu leeren.",
            },
          ],
          "table": {
            "headers": [
              "Messung",
              "Formel",
              "Ergebnis",
            ],
            "rows": [
              [
                "Erste Kathete",
                "3k",
                "Skalierte Seite a",
              ],
              [
                "Zweite Kathete",
                "4k",
                "Skalierte Seite b",
              ],
              [
                "Hypotenuse",
                "5k",
                "Skalierte Seite c",
              ],
              [
                "Flächeninhalt",
                "6k²",
                "Flächeninhalt des Dreiecks",
              ],
              [
                "Umfang",
                "12k",
                "Umfang des Dreiecks",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Was ist ein 3-4-5-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein 3-4-5-Dreieck ist nach seinen drei Seitenlängen benannt.",
            },
            {
              "kind": "p",
              "text": "Es ist ein rechtwinkliges Dreieck, dessen Seitenlängen dem Verhältnis [[3 : 4 : 5]] folgen. Die längste Seite, 5, ist die Hypotenuse und liegt dem 90-Grad-Winkel gegenüber. Die beiden anderen Seiten, 3 und 4, sind die Katheten und treffen sich im rechten Winkel. Im Dreieck ABC beträgt Winkel C 90°, Seite [[a]] ist die kürzere Kathete der Länge 3, Seite [[b]] ist die längere Kathete der Länge 4, und Seite [[c]] ist die Hypotenuse der Länge 5.",
            },
            {
              "kind": "p",
              "text": "Es heißt Pythagoreisches Tripel, weil 3, 4 und 5 ganze Zahlen sind, die [[a^2 + b^2 = c^2]] erfüllen. Diese ganzzahlige Eigenschaft macht das Dreieck nützlich: Bauarbeiter, Lehrer und Schüler können einen rechten Winkel mit gewöhnlichen ganzzahligen Messungen prüfen, ohne Quadratwurzeln oder Dezimalzahlen. Es ist das kleinste Pythagoreische Tripel, und jede skalierte Kopie, etwa 6-8-10, ist ebenfalls eines.",
            },
          ],
          "image": {
            "src": "three-four-five-main.svg",
            "alt": "Beschriftetes 3-4-5-Dreieck ABC mit kürzerer Kathete a gleich 3, längerer Kathete b gleich 4, Hypotenuse c gleich 5 und einer Markierung für den rechten Winkel",
            "caption": "Dreieck ABC: Die Katheten a = 3 und b = 4 treffen sich im rechten Winkel, und die Hypotenuse ist c = 5.",
          },
        },
        "sec-pythagorean": {
          "h2": "Warum ist 3-4-5 ein Pythagoreisches Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Zahlen 3, 4 und 5 erfüllen den Satz des Pythagoras exakt.",
            },
            {
              "kind": "p",
              "text": "Der Satz des Pythagoras besagt, dass in einem rechtwinkligen Dreieck das Quadrat der Hypotenuse gleich der Summe der Quadrate der Katheten ist:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie die Seitenlängen 3-4-5 ein:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Rechnen Sie jedes Quadrat aus:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Beide Seiten ergeben 25, also gilt die Gleichung. Ein Pythagoreisches Tripel ist eine Menge von drei ganzen Zahlen, die diese Gleichung erfüllt, und 3-4-5 ist das kleinste. Die Gleichheit gilt auch umgekehrt: Wenn ein Dreieck die Seitenlängen 3, 4 und 5 hat, muss der Winkel gegenüber der Seite der Länge 5 gleich 90° sein.",
            },
            {
              "kind": "p",
              "text": "Die Seite der Länge 5 muss die Hypotenuse sein, weil sie die längste Seite ist. Die Seiten der Länge 3 und 4 müssen die Katheten sein, weil sie sich im rechten Winkel treffen. Der <a href=\"/pythagorean-triples-calculator/\">Rechner für Pythagoreische Tripel</a> listet weitere ganzzahlige Tripel auf, darunter 5-12-13, ein anderes Tripel.",
            },
          ],
          "image": {
            "src": "three-four-five-pythagoras.svg",
            "alt": "Diagramm zum Satz des Pythagoras für das 3-4-5-Dreieck, das zeigt, dass 3 zum Quadrat plus 4 zum Quadrat gleich 5 zum Quadrat ist, mit 9 plus 16 gleich 25",
            "caption": "3² + 4² = 5², da 9 + 16 = 25 gilt, also ist 3-4-5 ein Pythagoreisches Tripel.",
          },
        },
        "sec-sides": {
          "h2": "Die drei Seiten eines 3-4-5-Dreiecks verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt ihm gegenüber.",
            },
            {
              "kind": "p",
              "text": "Die kürzere Kathete [[a]] hat im Grunddreieck die Länge 3. Sie ist Seite BC im Dreieck ABC und liegt Winkel A gegenüber, etwa 36,87°. Die längere Kathete [[b]] hat die Länge 4, ist Seite AC und liegt Winkel B gegenüber, etwa 53,13°. Die beiden Katheten treffen sich im Eckpunkt C, wo sie den 90°-Winkel bilden.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse [[c]] hat die Länge 5, ist Seite AB und liegt dem 90°-Winkel gegenüber. Sie ist die längste Seite, weil der größte Winkel immer der längsten Seite gegenüberliegt. Beim Skalieren des Dreiecks ändern sich die Rollen nie: [[a]] bleibt die kürzere Kathete, [[b]] bleibt die längere Kathete, und [[c]] bleibt die Hypotenuse.",
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
                "Kürzere Kathete a (BC)",
                "36,87°",
                "3",
              ],
              [
                "Längere Kathete b (AC)",
                "53,13°",
                "4",
              ],
              [
                "Hypotenuse c (AB)",
                "90°",
                "5, längste Seite",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Das Seitenverhältnis 3-4-5 verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 3:4:5 legt die Form jedes 3-4-5-Dreiecks fest.",
            },
            {
              "kind": "p",
              "text": "Das Seitenverhältnis eines 3-4-5-Dreiecks lautet:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Jeder Teil des Verhältnisses beschreibt eine Seite. Die kürzere Kathete steht für 3 proportionale Einheiten, die längere Kathete steht für 4 proportionale Einheiten, und die Hypotenuse steht für 5 proportionale Einheiten. Mit dem Skalierungsfaktor [[k]] geschrieben, lauten die drei Seiten [[a = 3k]], [[b = 4k]] und [[c = 5k]], sodass das Verhältnis in skalierter Form [[3k : 4k : 5k]] lautet.",
            },
            {
              "kind": "p",
              "text": "Das Verhältnis ändert sich nicht, wenn das Dreieck vergrößert oder verkleinert wird, weil das Multiplizieren aller drei Seiten mit derselben Zahl ihre Proportionen unberührt lässt. Die Mengen 3, 4, 5 und 6, 8, 10 und 9, 12, 15 und 15, 20, 25 stellen alle dieselbe Dreiecksform in verschiedenen Größen dar.",
            },
          ],
          "image": {
            "src": "three-four-five-scaled.svg",
            "alt": "Drei ähnliche 3-4-5-Dreiecke in verschiedenen Größen, beschriftet mit 3-4-5, 6-8-10 und 9-12-15, mit denselben Proportionen",
            "caption": "3-4-5, 6-8-10 und 9-12-15 haben dieselbe Form und dasselbe Verhältnis 3:4:5.",
          },
        },
        "sec-scale-factor": {
          "h2": "Was ist der Skalierungsfaktor bei einem 3-4-5-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Skalierungsfaktor multipliziert jede Seite mit derselben Zahl.",
            },
            {
              "kind": "p",
              "text": "Ein Skalierungsfaktor [[k]] multipliziert alle drei ursprünglichen Seitenlängen mit derselben positiven Zahl. Die skalierten Seiten lauten:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Mit [[k = 1]] erhalten Sie das ursprüngliche Dreieck, 3, 4, 5. Ein Wert von [[k]] größer als 1 vergrößert es, und ein Wert zwischen 0 und 1 verkleinert es, zum Beispiel ergibt [[k = 0.5]] die Seiten 1,5; 2; 2,5. Der Skalierungsfaktor muss positiv sein: Null ergibt kein Dreieck, und ein negativer Wert kann keine gültigen Seitenlängen ergeben.",
            },
            {
              "kind": "p",
              "text": "Der Skalierungsfaktor ändert die Größe, nicht die Form. Alle entsprechenden Seitenlängen bleiben proportional, die Winkel bleiben gleich, und das Verhältnis bleibt 3:4:5. Die Tabelle unten zeigt, wie sich die Seiten, der Flächeninhalt und der Umfang mit [[k]] ändern: Der Umfang wächst mit [[k]], während der Flächeninhalt mit [[k]] zum Quadrat wächst.",
            },
          ],
          "table": {
            "headers": [
              "Skalierungsfaktor k",
              "Seiten",
              "Flächeninhalt",
              "Umfang",
            ],
            "rows": [
              [
                "0,5",
                "1,5; 2; 2,5",
                "1,5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-scale-factor.svg",
            "alt": "Skaliertes 3-4-5-Dreieck mit Skalierungsfaktor k gleich 2, beschriftet mit den Seiten a gleich 6, b gleich 8 und c gleich 10",
            "caption": "Mit k = 2 sind die Seiten a = 6, b = 8 und c = 10.",
          },
        },
        "sec-leg-a": {
          "h2": "Formel zur Berechnung der ersten Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Die kürzere Kathete ist dreimal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[a]] die kürzere Kathete und [[k]] der Skalierungsfaktor. Die Formel liest das Verhältnis direkt ab: Die kürzere Kathete steht für 3 Einheiten je Einheit von [[k]], also ergibt das Multiplizieren von 3 mit [[k]] die skalierte Länge. Verwenden Sie [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist eine skalierte Seitenlänge, kein Winkel und kein Skalierungsfaktor. Sie ist immer kürzer als die beiden anderen Seiten, weil 3 der kleinste Teil des Verhältnisses 3:4:5 ist, und sie bleibt bei jedem positiven Skalierungsfaktor die kürzere Kathete.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formel zur Berechnung der zweiten Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Die längere Kathete ist viermal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[b]] die längere Kathete und [[k]] der Skalierungsfaktor. Die längere Kathete steht für 4 Einheiten je Einheit von [[k]], also ergibt das Multiplizieren von 4 mit [[k]] die skalierte Länge. Verwenden Sie [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Diese Seite bleibt bei jedem positiven Skalierungsfaktor länger als die erste Kathete, weil 4 größer als 3 ist und beide Seiten mit demselben [[k]] multipliziert werden. Sie bleibt auch kürzer als die Hypotenuse, weil 4 kleiner als 5 ist. Halten Sie die beiden Katheten in der richtigen Reihenfolge: [[a]] ist die 3er-Seite und [[b]] ist die 4er-Seite.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formel zur Berechnung der Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Hypotenuse ist fünfmal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[c]] die Hypotenuse und [[k]] der Skalierungsfaktor. Die Hypotenuse steht für 5 Einheiten je Einheit von [[k]], also ergibt das Multiplizieren von 5 mit [[k]] die skalierte Länge. Verwenden Sie [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse bleibt bei jedem positiven Skalierungsfaktor die längste Seite, weil 5 der größte Teil des Verhältnisses ist. Prüfen Sie sie an den Katheten: Mit [[k = 4]] sind die Seiten 12, 16 und 20, und [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], also bestätigt der Satz des Pythagoras das Ergebnis.",
            },
          ],
        },
        "sec-area": {
          "h2": "So berechnen Sie den Flächeninhalt eines skalierten 3-4-5-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Flächeninhalt nutzt die beiden Katheten, und der Skalierungsfaktor wird quadriert.",
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
              "text": "Setzen Sie die skalierten Katheten ein, [[a = 3k]] und [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Vereinfachen Sie:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "Die Teilung durch zwei ist nötig, weil ein Dreieck die Hälfte des Rechtecks bedeckt, das von seinen beiden Katheten gebildet wird. Der Faktor [[k]] wird quadriert, weil beide Katheten einen Faktor [[k]] tragen. Der Flächeninhalt wird in Quadrateinheiten gemessen. Das Verdoppeln des Skalierungsfaktors vervierfacht den Flächeninhalt: Mit [[k = 2]] beträgt der Flächeninhalt 24 Quadrateinheiten, viermal die 6 Quadrateinheiten bei [[k = 1]]. Für ein allgemeines rechtwinkliges Dreieck nutzen Sie stattdessen den <a href=\"/right-triangle-area-calculator/\">Flächenrechner für rechtwinklige Dreiecke</a>.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-area.svg",
            "alt": "Diagramm zum Flächeninhalt eines 3-4-5-Dreiecks mit Grundseite 3k, Höhe 4k und Flächeninhalt 6k zum Quadrat, das zeigt, dass k gleich 2 genau 24 Quadrateinheiten ergibt",
            "caption": "Flächeninhalt aus Grundseite 3k und Höhe 4k: A = 6k², und k = 2 ergibt 24 Quadrateinheiten.",
          },
        },
        "sec-perimeter": {
          "h2": "So berechnen Sie den Umfang eines skalierten 3-4-5-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Addieren Sie alle drei Seiten, und der Umfang skaliert mit k.",
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
              "text": "Setzen Sie die skalierten Seiten ein:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Vereinfachen Sie:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Alle drei Seiten müssen addiert werden, weil der Umfang die gesamte Begrenzung nachzeichnet. Das Weglassen einer Seite ergibt eine kürzere Strecke, die nicht der Umfang ist. Der Umfang skaliert direkt mit [[k]], also verdoppelt das Verdoppeln von [[k]] den Umfang, anders als der Flächeninhalt, der sich vervierfacht. Der Umfang steht in Längeneinheiten, nie in Quadrateinheiten. Für ein allgemeines rechtwinkliges Dreieck nutzen Sie den <a href=\"/right-triangle-perimeter-calculator/\">Umfangsrechner für rechtwinklige Dreiecke</a>.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "image": {
            "src": "three-four-five-perimeter.svg",
            "alt": "Diagramm zum Umfang eines 3-4-5-Dreiecks, das zeigt, dass P gleich 3k plus 4k plus 5k gleich 12k ist, wobei k gleich 2 genau 24 Einheiten ergibt",
            "caption": "Umfang: P = 3k + 4k + 5k = 12k, und k = 2 ergibt 24 Einheiten.",
          },
        },
        "sec-find-k": {
          "h2": "So finden Sie den Skalierungsfaktor aus einer bekannten Seite",
          "blocks": [
            {
              "kind": "p",
              "text": "Teilen Sie eine bekannte Seite durch ihren Teil des Verhältnisses.",
            },
            {
              "kind": "p",
              "text": "Der Rechner nimmt [[k]] direkt an, also sind diese Gleichungen manuelle Rechnungen, die Ihnen helfen, [[k]] zu finden, wenn Sie bereits eine Seite kennen. Teilen Sie die bekannte Seite durch die Zahl, die diese Seite im Verhältnis 3:4:5 darstellt. Wenn die kürzere Kathete bekannt ist:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn die längere Kathete bekannt ist:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn die Hypotenuse bekannt ist:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Drei kurze Beispiele: Die kürzere Kathete [[a = 12]] ergibt [[k = 12 / 3 = 4]]; die längere Kathete [[b = 20]] ergibt [[k = 20 / 4 = 5]]; die Hypotenuse [[c = 30]] ergibt [[k = 30 / 5 = 6]]. Sobald Sie [[k]] haben, geben Sie es in den Rechner ein. Der Rechner selbst nimmt keine Seitenlänge an und findet [[k]] nicht für Sie.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Skalierung eines 3-4-5-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalierungsfaktor k = 2, von Anfang bis Ende durchgerechnet.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit [[k = 2]] und finden Sie jede Messung des skalierten Dreiecks, eine Formel nach der anderen. Jeder Schritt nutzt eine Formel aus den Abschnitten oben, und die Zusammenfassungstabelle am Ende sammelt die Ergebnisse.",
            },
            {
              "kind": "steps",
              "steps": [
                "Finden Sie die erste Kathete: [[a = 3k = 3 \\times 2 = 6]].",
                "Finden Sie die zweite Kathete: [[b = 4k = 4 \\times 2 = 8]].",
                "Finden Sie die Hypotenuse: [[c = 5k = 5 \\times 2 = 10]].",
                "Finden Sie den Flächeninhalt: [[A = 6k^2 = 6 \\times 4 = 24]] Quadrateinheiten.",
                "Finden Sie den Umfang: [[P = 12k = 12 \\times 2 = 24]] Einheiten.",
              ],
            },
            {
              "kind": "p",
              "text": "Das neue Dreieck behält die ursprünglichen Proportionen 3:4:5: 6, 8 und 10 sind alle doppelt so groß wie 3, 4 und 5. Prüfen Sie den rechten Winkel mit Pythagoras: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. Der Flächeninhalt und der Umfang teilen hier zufällig die Zahl 24, aber sie messen verschiedene Dinge.",
            },
          ],
          "table": {
            "headers": [
              "Messung",
              "Wert",
            ],
            "rows": [
              [
                "Erste Kathete a",
                "6",
              ],
              [
                "Zweite Kathete b",
                "8",
              ],
              [
                "Hypotenuse c",
                "10",
              ],
              [
                "Flächeninhalt A",
                "24 Quadrateinheiten",
              ],
              [
                "Umfang P",
                "24 Einheiten",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele für verschiedene Skalierungsfaktoren",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht durchgerechnete Beispiele, vom ursprünglichen Dreieck bis k = 10.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Ursprüngliches Dreieck, k = 1",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 1]]. Seiten: [[a = 3]], [[b = 4]], [[c = 5]]. Flächeninhalt: [[A = 6(1^2) = 6]] Quadrateinheiten. Umfang: [[P = 12(1) = 12]] Einheiten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Skalierungsfaktor 2",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 2]]. Seiten: [[a = 6]], [[b = 8]], [[c = 10]]. Flächeninhalt: [[A = 6(2^2) = 24]] Quadrateinheiten. Umfang: [[P = 12(2) = 24]] Einheiten. Das Verdoppeln von [[k]] verdoppelt die Seiten und den Umfang und vervierfacht den Flächeninhalt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Skalierungsfaktor 3",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 3]]. Seiten: [[a = 9]], [[b = 12]], [[c = 15]]. Flächeninhalt: [[A = 6(3^2) = 54]] Quadrateinheiten. Umfang: [[P = 12(3) = 36]] Einheiten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Skalierungsfaktor 5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 5]]. Seiten: [[a = 15]], [[b = 20]], [[c = 25]]. Flächeninhalt: [[A = 6(5^2) = 150]] Quadrateinheiten. Umfang: [[P = 12(5) = 60]] Einheiten. Dieses 15-20-25-Dreieck ist eine gängige Größe bei der Bauvermessung.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Skalierungsfaktor 0,5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 0.5]]. Seiten: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Flächeninhalt: [[A = 6(0.5^2) = 1.5]] Quadrateinheiten. Umfang: [[P = 12(0.5) = 6]] Einheiten. Ein Skalierungsfaktor unter 1 verkleinert das Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Skalierungsfaktor 1,5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 1.5]]. Seiten: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Flächeninhalt: [[A = 6(1.5^2) = 13.5]] Quadrateinheiten. Umfang: [[P = 12(1.5) = 18]] Einheiten. Dezimale Skalierungsfaktoren funktionieren genau wie ganzzahlige.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Skalierungsfaktor 4",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 4]]. Seiten: [[a = 12]], [[b = 16]], [[c = 20]]. Flächeninhalt: [[A = 6(4^2) = 96]] Quadrateinheiten. Umfang: [[P = 12(4) = 48]] Einheiten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Skalierungsfaktor 10",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 10]]. Seiten: [[a = 30]], [[b = 40]], [[c = 50]]. Flächeninhalt: [[A = 6(10^2) = 600]] Quadrateinheiten. Umfang: [[P = 12(10) = 120]] Einheiten. Der Flächeninhalt ist um den Faktor 100 gewachsen, während die Seiten um den Faktor 10 gewachsen sind.",
            },
            {
              "kind": "p",
              "text": "In allen acht Beispielen ändert sich das Muster nie: Die Seiten wachsen mit [[k]], der Umfang wächst mit [[k]], und der Flächeninhalt wächst mit [[k]] zum Quadrat.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Warum behält das 3-4-5-Dreieck immer einen 90-Grad-Winkel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Skalieren bricht die Pythagoreische Beziehung nie.",
            },
            {
              "kind": "p",
              "text": "Die skalierten Seiten sind [[3k]], [[4k]] und [[5k]]. Wenden Sie den Satz des Pythagoras auf sie an:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Entwickeln Sie jedes Quadrat:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Beide Seiten ergeben [[25k^2]], also gilt die Beziehung für jedes positive [[k]]. Der Faktor [[k^2]] erscheint auf beiden Seiten, weshalb das Skalieren den Winkel nicht ändern kann. Die beiden spitzen Winkel bleiben bei etwa 36,87° und 53,13°, und ihre Summe bleibt bei 90°, also bleibt der dritte Winkel bei genau 90°.",
            },
            {
              "kind": "p",
              "text": "Dies ist dieselbe Idee wie Ähnlichkeit: Jedes skalierte 3-4-5-Dreieck ist dem ursprünglichen ähnlich, mit gleichen entsprechenden Winkeln und proportionalen Seiten. Ein Dreieck mit den Seiten 6, 8, 10 hat dieselben Winkel wie eines mit den Seiten 3, 4, 5.",
            },
          ],
        },
        "sec-construction": {
          "h2": "So nutzen Sie die 3-4-5-Regel zur Prüfung einer rechtwinkligen Ecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Markieren Sie 3, messen Sie 4, und prüfen Sie, ob die Diagonale 5 ist.",
            },
            {
              "kind": "p",
              "text": "Bauarbeiter nutzen die 3-4-5-Methode, um eine 90-Grad-Ecke ohne Winkelmesser zu prüfen. Beginnen Sie an der Ecke und markieren Sie 3 Einheiten entlang einer Seite, dann markieren Sie 4 Einheiten entlang der angrenzenden Seite. Messen Sie den Abstand zwischen den beiden markierten Endpunkten: Wenn er 5 Einheiten beträgt, ist der Winkel 90 Grad, vorbehaltlich der Messgenauigkeit.",
            },
            {
              "kind": "p",
              "text": "Ein praktisches Beispiel nutzt Fuß: 3 Fuß entlang einer Richtung, 4 Fuß entlang der angrenzenden Richtung, und eine Diagonale von 5 Fuß. Die Prüfung lautet [[3^2 + 4^2 = 5^2]], da [[9 + 16 = 25]] gilt. Wenn die Diagonale mehr als 5 Fuß beträgt, ist die Ecke weiter als 90 Grad; wenn weniger, ist sie enger.",
            },
            {
              "kind": "p",
              "text": "Größere Vielfache funktionieren auf größeren Grundrissen besser, weil eine längere Grundlinie einen kleinen Markierungsfehler zu einem kleineren Anteil der Messung macht. Nutzen Sie 6-8-10, 9-12-15, 12-16-20 oder 15-20-25 Fuß und behalten Sie dieselbe Einheit bei allen drei Messungen.",
            },
            {
              "kind": "p",
              "text": "Die Methode prüft die rechtwinklige Beziehung, wenn die Messungen genau sind. Fehler, unebene Oberflächen, durchhängende Maßbänder und Markierungsungenauigkeiten können das Ergebnis beeinflussen, also behaupten Sie nicht, dass sie eine perfekte Baugenauigkeit garantiert. Halten Sie das Band waagerecht und straff, und wiederholen Sie die Prüfung von der anderen Ecke aus, wo der Grundriss es zulässt.",
            },
          ],
          "image": {
            "src": "three-four-five-construction.svg",
            "alt": "Baugrundriss, der eine Ecke zeigt, mit 3 Fuß markiert entlang einer Richtung, 4 Fuß entlang der angrenzenden Richtung und einer Diagonale von 5 Fuß mit einer Markierung für den rechten Winkel",
            "caption": "Markieren Sie 3 Fuß in eine Richtung und 4 Fuß in die andere: Eine Diagonale von 5 Fuß bedeutet eine rechtwinklige Ecke.",
          },
        },
        "sec-applications": {
          "h2": "Anwendungen des 3-4-5-Dreiecks im Bauwesen",
          "blocks": [
            {
              "kind": "p",
              "text": "Die 3-4-5-Regel taucht überall auf, wo eine rechtwinklige Ecke zählt.",
            },
            {
              "kind": "p",
              "text": "Die Prüfung rechtwinkliger Ecken ist der Hauptzweck: Ein Bauarbeiter markiert 3 und 4 Einheiten ab einer Ecke und prüft die 5-Einheiten-Diagonale, bevor er einen Rahmen befestigt. Das Anlegen von Fundamenten nutzt dieselbe Prüfung an jeder Ecke, damit die Wände rechtwinklig beginnen.",
            },
            {
              "kind": "p",
              "text": "Das Abstecken von Grundrissen, die Prüfung quadratischer Raumgrundrisse, der Terrassenbau, die Terrassenplattenverlegung und die Fliesenverlegung beruhen alle auf rechtwinkligen Ecken, und die Methode funktioniert für jede von ihnen in dem Maßstab, der zur Arbeit passt. Zaunbau, Zimmerei, Landschaftsbau und Vermessung nutzen dieselbe Prüfung für rechte Winkel.",
            },
            {
              "kind": "p",
              "text": "Nutzen Sie realistische Maße für die Arbeit, etwa 3-4-5 Fuß für einen kleinen Rahmen oder 9-12-15 Fuß für eine Fundamentecke. Die Methode ist eine praktische Prüfung, kein Ersatz für professionelle Vermessung oder Bauanforderungen.",
            },
          ],
        },
        "sec-similar": {
          "h2": "Beziehung zwischen ähnlichen Dreiecken und dem Verhältnis 3-4-5",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes skalierte 3-4-5-Dreieck ist dem ursprünglichen ähnlich.",
            },
            {
              "kind": "p",
              "text": "Ähnliche Dreiecke haben dieselbe Form, aber verschiedene Größen: Ihre entsprechenden Winkel sind gleich, und ihre entsprechenden Seiten sind proportional. Die Dreiecke 3-4-5 und 6-8-10 haben identische Winkel, etwa 36,87°, 53,13° und 90°, und jede Seite des zweiten ist genau doppelt so lang wie die passende Seite des ersten.",
            },
            {
              "kind": "p",
              "text": "Der Skalierungsfaktor ändert die Größe, während die Form unverändert bleibt. Alle Seitenverhältnisse bleiben 3:4:5, also gilt [[a : b : c = 3 : 4 : 5]] für das ursprüngliche Dreieck und für jede skalierte Kopie. Darum kann der Rechner jedes skalierte 3-4-5-Dreieck mit einer einzigen Zahl beschreiben, [[k]].",
            },
          ],
        },
        "sec-vs-special": {
          "h2": "Unterschied zwischen 3-4-5-, 45-45-90- und 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Drei rechtwinklige Dreiecke, drei verschiedene Seitenverhältnisse.",
            },
            {
              "kind": "p",
              "text": "Ein 3-4-5-Dreieck ist nicht automatisch ein 45-45-90- oder ein 30-60-90-Dreieck. Alle drei sind rechtwinklige Dreiecke, aber ihre Winkel und Seitenverhältnisse unterscheiden sich, also lassen sich ihre Formeln nicht vertauschen. Das 3-4-5-Dreieck hat ungleiche Katheten und ganzzahlige Seiten, das 45-45-90-Dreieck ist gleichschenklig mit einer Hypotenuse von [[a\\sqrt{2}]], und das 30-60-90-Dreieck hat eine Hypotenuse, die doppelt so lang wie seine kurze Kathete ist. Der <a href=\"/special-right-triangle-calculator/\">Rechner für spezielle rechtwinklige Dreiecke</a> deckt die Fälle 45-45-90 und 30-60-90 ab, während der <a href=\"/5-12-13-triangle-calculator/\">5-12-13-Dreieck-Rechner</a> ein anderes Pythagoreisches Tripel abdeckt.",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten vergleicht die drei Dreiecke nebeneinander. Bestätigen Sie zuerst die Winkel, dann wählen Sie das Verhältnis, das zu ihnen passt: Das falsche Verhältnis ergibt eine falsche Hypotenuse und einen falschen Flächeninhalt.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Seitenverhältnis",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Winkel",
                "36,87°, 53,13°, 90°",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Gleiche Katheten",
                "Nein",
                "Ja",
                "Nein",
              ],
              [
                "Hypotenuse",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Haupteigenschaft",
                "Pythagoreisches Tripel",
                "Gleichschenkliges rechtwinkliges Dreieck",
                "Spezielles Winkelverhältnis",
              ],
              [
                "Schwerpunkt des Rechners",
                "Skalierung",
                "Berechnungen für spezielle Dreiecke",
                "Berechnungen für spezielle Dreiecke",
              ],
            ],
          },
          "image": {
            "src": "three-four-five-triples.svg",
            "alt": "Vergleich der Pythagoreischen Tripel 3-4-5, 6-8-10 und 5-12-13, der zeigt, dass 6-8-10 ein skaliertes 3-4-5 ist, während 5-12-13 ein anderes Tripel ist",
            "caption": "6-8-10 ist ein skaliertes 3-4-5, während 5-12-13 ein anderes Pythagoreisches Tripel ist.",
          },
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Nutzung des 3-4-5-Dreieck-Rechners",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn Fehler tauchen in 3-4-5-Aufgaben immer wieder auf.",
            },
            {
              "kind": "steps",
              "steps": [
                "Nur eine Seite mit dem Skalierungsfaktor multiplizieren: Mit [[k = 2]] sind die Seiten 6, 8 und 10, nicht 6, 4 und 5. Skalieren Sie alle drei Seiten mit demselben [[k]].",
                "Vergessen, alle drei Seiten gleich zu skalieren: Das Skalieren nur der Katheten bricht das Verhältnis und den rechten Winkel. Wenden Sie denselben [[k]] auf jede Seite an.",
                "Die 5 als Kathete statt als Hypotenuse behandeln: 5 ist die längste Seite und liegt dem 90°-Winkel gegenüber. [[c = 5k]] ist immer die Hypotenuse.",
                "Den Skalierungsfaktor mit einer Seitenlänge verwechseln: [[k]] ist der Multiplikator, keine Seite. Mit [[k = 2]] sind die Seiten 6, 8 und 10.",
                "Null als gültigen Skalierungsfaktor verwenden: [[k = 0]] macht alle drei Seiten null, eine entartete Figur, kein Dreieck. [[k]] muss größer als null sein.",
                "Einen negativen Skalierungsfaktor eingeben: Ein negatives [[k]] ergibt negative Seitenlängen, die kein Dreieck beschreiben können. Geben Sie nur ein positives [[k]] ein.",
                "Vergessen, k in der Flächenformel zu quadrieren: Der Flächeninhalt wächst mit [[k]] zum Quadrat. Mit [[k = 3]] gilt [[A = 6 \\times 9 = 54]], nicht 18.",
                "Flächeninhalt mit Umfang verwechseln: Der Flächeninhalt steht in Quadrateinheiten, und der Umfang steht in Längeneinheiten. Mit [[k = 2]] ergeben beide 24, aber sie messen verschiedene Dinge.",
                "Nur zwei Seiten beim Berechnen des Umfangs addieren: Mit [[k = 2]] ergibt [[6 + 8 = 14]] ohne die Hypotenuse. Addieren Sie alle drei Seiten.",
                "Messeinheiten vermischen: Eine Kathete in Fuß und eine Diagonale in Zoll lassen sich nicht direkt kombinieren. Rechnen Sie zuerst jede Messung in eine Einheit um.",
                "Annehmen, dass nur 3, 4 und 5 funktionieren: Jede skalierte Kopie, etwa 6-8-10 oder 9-12-15, ist ein gültiges 3-4-5-Dreieck.",
                "Annehmen, dass jedes rechtwinklige Dreieck dem Verhältnis 3:4:5 folgt: Die meisten rechtwinkligen Dreiecke haben andere Verhältnisse. Bestätigen Sie das Verhältnis, bevor Sie die Formeln nutzen.",
                "Ein 3-4-5-Dreieck mit einem 45-45-90-Dreieck verwechseln: Ein 3-4-5-Dreieck hat Winkel von etwa 36,87° und 53,13°, nicht zwei 45°-Winkel.",
                "Messungen unnötig runden: Frühes Runden trägt Fehler in spätere Schritte. Runden Sie nur die endgültige Antwort.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "So prüfen Sie ein skaliertes 3-4-5-Dreieck",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier schnelle Prüfungen fangen fast jeden Fehler ab.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Seitenverhältnis",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a : b : c = 3 : 4 : 5]]. Hier ergibt [[6 : 8 : 10]] geteilt durch 2 genau [[3 : 4 : 5]], also besteht die Prüfung. Wenn sich die Seiten nicht auf 3:4:5 kürzen lassen, sind sie kein skaliertes 3-4-5-Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a^2 + b^2 = c^2]]. Hier gilt [[6^2 + 8^2 = 36 + 64 = 100]], und [[10^2 = 100]], also gilt der Satz. Ein falscher Wert für eine Seite bricht diese Gleichheit.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Konsistenz des Skalierungsfaktors",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Hier ergibt jede Teilung 2, also [[k = 2]] aus allen drei Seiten. Wenn sich die drei Teilungen unterscheiden, ist mindestens eine Seite falsch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Reihenfolge der Seiten",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a < b < c]]. Hier gilt [[6 < 8 < 10]], also hält die Reihenfolge. Wenn die vermeintliche Hypotenuse nicht die längste Seite ist, sind die Bezeichnungen vertauscht.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Antworten",
          "blocks": [
            {
              "kind": "p",
              "text": "Arbeiten Sie alle acht Aufgaben auf Papier durch, bevor Sie die Antworten lesen.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Skalieren mit k = 2",
            },
            {
              "kind": "p",
              "text": "Skalieren Sie ein 3-4-5-Dreieck mit [[k = 2]]. Finden Sie die drei Seitenlängen, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Skalieren mit k = 4",
            },
            {
              "kind": "p",
              "text": "Skalieren Sie ein 3-4-5-Dreieck mit [[k = 4]]. Finden Sie die drei Seitenlängen, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Flächeninhalt mit k = 3",
            },
            {
              "kind": "p",
              "text": "Finden Sie den Flächeninhalt eines skalierten 3-4-5-Dreiecks mit [[k = 3]], in Quadrateinheiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umfang mit k = 5",
            },
            {
              "kind": "p",
              "text": "Finden Sie den Umfang eines skalierten 3-4-5-Dreiecks mit [[k = 5]], in Einheiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: k aus a = 15 finden",
            },
            {
              "kind": "p",
              "text": "Ein skaliertes 3-4-5-Dreieck hat eine kürzere Kathete von 15. Finden Sie [[k]] und die beiden anderen Seiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: k aus b = 24 finden",
            },
            {
              "kind": "p",
              "text": "Ein skaliertes 3-4-5-Dreieck hat eine längere Kathete von 24. Finden Sie [[k]] und die beiden anderen Seiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 7: k aus c = 35 finden",
            },
            {
              "kind": "p",
              "text": "Ein skaliertes 3-4-5-Dreieck hat eine Hypotenuse von 35. Finden Sie [[k]] und die beiden Katheten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 8: 12, 16 und 20 prüfen",
            },
            {
              "kind": "p",
              "text": "Prüfen Sie, ob 12, 16 und 20 ein skaliertes 3-4-5-Dreieck bilden, mithilfe des Satzes des Pythagoras und des Seitenverhältnisses. Wenn ja, geben Sie den Skalierungsfaktor an.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Antwort 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] Quadrateinheiten, [[P = 24]] Einheiten.",
            },
            {
              "kind": "p",
              "text": "Antwort 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] Quadrateinheiten, [[P = 48]] Einheiten.",
            },
            {
              "kind": "p",
              "text": "Antwort 3: [[A = 6(3^2) = 54]] Quadrateinheiten.",
            },
            {
              "kind": "p",
              "text": "Antwort 4: [[P = 12(5) = 60]] Einheiten.",
            },
            {
              "kind": "p",
              "text": "Antwort 5: [[k = 15 / 3 = 5]], also [[b = 20]] und [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Antwort 6: [[k = 24 / 4 = 6]], also [[a = 18]] und [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Antwort 7: [[k = 35 / 5 = 7]], also [[a = 21]] und [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Antwort 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], und [[12 : 16 : 20]] ergibt geteilt durch 4 genau [[3 : 4 : 5]], also ja, mit [[k = 4]].",
            },
          ],
        },
      },
      "relatedHeading": "Verwandte rechtwinklige Dreiecksrechner",
      "relatedIntro": "Jeder Rechner unten behandelt eine andere Aufgabe mit rechtwinkligen Dreiecken, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie brauchen.",
      "relatedItems": [
        "Rechner für rechtwinklige Dreiecke",
        "Rechner für Pythagoreische Tripel",
        "5-12-13-Dreieck-Rechner",
        "Rechner für spezielle rechtwinklige Dreiecke",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Umfangsrechner für rechtwinklige Dreiecke",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein 3-4-5-Dreieck?",
          "answer": "Ein 3-4-5-Dreieck ist ein rechtwinkliges Dreieck, dessen Seitenlängen dem Verhältnis [[3 : 4 : 5]] folgen. Die Seiten der Länge 3 und 4 sind die Katheten, die sich im 90-Grad-Winkel treffen, und die Seite der Länge 5 ist die Hypotenuse. Es ist das kleinste Pythagoreische Tripel.",
        },
        {
          "question": "Warum bildet ein 3-4-5-Dreieck einen rechten Winkel?",
          "answer": "Seine Seiten erfüllen den Satz des Pythagoras: [[3^2 + 4^2 = 5^2]], da [[9 + 16 = 25]] gilt. Diese Gleichheit gilt nur für rechtwinklige Dreiecke, also muss der Winkel gegenüber der Seite der Länge 5 gleich 90 Grad sein. Das Skalieren erhält die Gleichheit, also behält jede skalierte Kopie den rechten Winkel.",
        },
        {
          "question": "Was ist die 3-4-5-Dreiecksregel?",
          "answer": "Die Regel besagt, dass Seitenlängen im Verhältnis [[3 : 4 : 5]] immer ein rechtwinkliges Dreieck bilden. Bauarbeiter nutzen sie zur Prüfung rechtwinkliger Ecken: Markieren Sie 3 Einheiten in eine Richtung, 4 Einheiten in die andere Richtung, und wenn die Diagonale 5 Einheiten beträgt, ist die Ecke rechtwinklig, vorbehaltlich der Messgenauigkeit.",
        },
        {
          "question": "Wie funktioniert der 3-4-5-Dreieck-Rechner?",
          "answer": "Geben Sie einen positiven Skalierungsfaktor [[k]] ein und klicken Sie auf Berechnen. Der Rechner multipliziert die ursprünglichen Seiten mit [[k]] und ergibt [[a = 3k]], [[b = 4k]] und [[c = 5k]], dann berechnet er den Flächeninhalt [[A = 6k^2]] und den Umfang [[P = 12k]]. Klicken Sie auf Zurücksetzen, um das Feld zu leeren.",
        },
        {
          "question": "Was ist der Skalierungsfaktor bei einem 3-4-5-Dreieck?",
          "answer": "Der Skalierungsfaktor [[k]] ist die Zahl, die alle drei ursprünglichen Seitenlängen mit demselben Betrag multipliziert. Mit [[k = 1]] erhalten Sie das ursprüngliche Dreieck, ein größeres [[k]] vergrößert es, und ein [[k]] zwischen 0 und 1 verkleinert es. Form und Winkel bleiben gleich.",
        },
        {
          "question": "Wie berechne ich die Seiten eines skalierten 3-4-5-Dreiecks?",
          "answer": "Multiplizieren Sie jeden Teil des Verhältnisses mit [[k]]: [[a = 3k]], [[b = 4k]] und [[c = 5k]]. Mit [[k = 2]] sind die Seiten 6, 8 und 10. Jede Seite muss dasselbe [[k]] nutzen, sonst bricht das Verhältnis und das Dreieck verliert seinen rechten Winkel.",
        },
        {
          "question": "Wie berechne ich seinen Flächeninhalt?",
          "answer": "Nutzen Sie die Katheten in [[A = \\frac{ab}{2}]], was sich für ein skaliertes 3-4-5-Dreieck zu [[A = 6k^2]] vereinfacht. Mit [[k = 3]] gilt [[A = 6 \\times 9 = 54]] Quadrateinheiten. Der Flächeninhalt steht immer in Quadrateinheiten, und er wächst mit dem Quadrat von [[k]].",
        },
        {
          "question": "Wie berechne ich seinen Umfang?",
          "answer": "Addieren Sie alle drei Seiten mit [[P = a + b + c]], was sich zu [[P = 12k]] vereinfacht. Mit [[k = 3]] gilt [[P = 36]] Einheiten. Der Umfang wächst direkt mit [[k]], also verdoppelt das Verdoppeln von [[k]] den Umfang. Die Antwort steht in Längeneinheiten, nicht in Quadrateinheiten.",
        },
        {
          "question": "Kann ich 6-8-10 statt 3-4-5 verwenden?",
          "answer": "Ja. Die Seiten 6, 8 und 10 sind das 3-4-5-Dreieck, skaliert mit [[k = 2]], also bilden sie dieselbe Form mit denselben Winkeln und demselben rechten Winkel. Jede skalierte Kopie, etwa 9-12-15 oder 15-20-25, funktioniert genauso.",
        },
        {
          "question": "Wie nutzen Bauarbeiter die 3-4-5-Regel?",
          "answer": "Ein Bauarbeiter markiert 3 Fuß entlang einer Seite ab einer Ecke und 4 Fuß entlang der angrenzenden Seite, dann misst er die Diagonale zwischen den Markierungen. Wenn sie 5 Fuß beträgt, ist die Ecke rechtwinklig. Größere Vielfache wie 6-8-10 oder 9-12-15 Fuß passen zu größeren Grundrissen.",
        },
        {
          "question": "Kann der Skalierungsfaktor eine Dezimalzahl sein?",
          "answer": "Ja, jeder positive reelle Wert von [[k]] ergibt ein gültiges skaliertes 3-4-5-Dreieck. Mit [[k = 0.5]] sind die Seiten 1,5; 2; 2,5, und mit [[k = 1.5]] sind sie 4,5; 6; 7,5. Null und negative Werte ergeben keine gültigen Dreiecke.",
        },
        {
          "question": "Ist jedes 3-4-5-Dreieck ein Pythagoreisches Tripel?",
          "answer": "Ja, jedes skalierte 3-4-5-Dreieck mit einem ganzzahligen Skalierungsfaktor ist ein Pythagoreisches Tripel, weil seine Seiten ganze Zahlen sind, die [[a^2 + b^2 = c^2]] erfüllen. Mit einem dezimalen Skalierungsfaktor erfüllen die Seiten den Satz weiterhin. Das Tripel 5-12-13 ist ein anderes Pythagoreisches Tripel.",
        },
      ],
    },
};
