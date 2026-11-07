// fiveTwelveThirteenGuideTranslations.bde.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B2_DE = {
  "de": {
      "meta": {
        "title": "5-12-13-Dreieck-Rechner - Seiten skalieren, Fläche, Umfang",
        "description": "Skalieren Sie ein 5-12-13-Dreieck: Geben Sie einen positiven Skalierungsfaktor k ein, um die Seiten 5k, 12k und 13k sowie den Flächeninhalt 30k² und den Umfang 30k zu erhalten.",
        "primaryKeyword": "5-12-13-Dreieck-Rechner",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "5-12-13-Dreieck-Rechner",
        "sec-calculate": "5-12-13-Dreieck skalieren und seine Maße berechnen",
        "sec-what": "Was ist ein 5-12-13-Dreieck?",
        "sec-pythagorean": "Warum ist 5-12-13 ein pythagoreisches Tripel?",
        "sec-sides": "Die drei Seiten eines 5-12-13-Dreiecks verstehen",
        "sec-ratio": "Das Seitenverhältnis 5-12-13 verstehen",
        "sec-scale-factor": "Was ist der Skalierungsfaktor bei einem 5-12-13-Dreieck?",
        "sec-leg-a": "Formel zur Berechnung der kürzeren Kathete",
        "sec-leg-b": "Formel zur Berechnung der längeren Kathete",
        "sec-hypotenuse": "Formel zur Berechnung der Hypotenuse",
        "sec-area": "So berechnen Sie den Flächeninhalt eines skalierten 5-12-13-Dreiecks",
        "sec-perimeter": "So berechnen Sie den Umfang eines skalierten 5-12-13-Dreiecks",
        "sec-find-k": "So finden Sie den Skalierungsfaktor aus einer bekannten Seite",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Skalierung eines 5-12-13-Dreiecks",
        "sec-examples": "Durchgerechnete Beispiele mit verschiedenen Skalierungsfaktoren",
        "sec-right-angle": "Warum behält das 5-12-13-Dreieck immer einen 90-Grad-Winkel?",
        "sec-euclid": "Wie wird das Tripel 5-12-13 mit der Formel von Euklid erzeugt?",
        "sec-applications": "Anwendungen des 5-12-13-Dreiecks in Geometrie und Messung",
        "sec-vs-triples": "Unterschied zwischen 5-12-13 und anderen pythagoreischen Tripeln",
        "sec-vs-special": "Unterschied zwischen 5-12-13, 45-45-90- und 30-60-90-Dreiecken",
        "sec-mistakes": "Häufige Fehler bei der Verwendung des 5-12-13-Dreieck-Rechners",
        "sec-verify": "So überprüfen Sie ein skaliertes 5-12-13-Dreieck",
        "sec-practice": "Übungsaufgaben mit Antworten",
        "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "5-12-13-Dreieck-Rechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalieren Sie ein 5-12-13-Dreieck und ermitteln Sie seine Seiten, seinen Flächeninhalt und seinen Umfang.",
            },
            {
              "kind": "p",
              "text": "Ein 5-12-13-Dreieck ist ein rechtwinkliges Dreieck, dessen Seitenlängen dem Verhältnis [[5 : 12 : 13]] folgen. Es ist ein pythagoreisches Tripel, weil seine ganzzahligen Seiten den Satz des Pythagoras erfüllen: [[5^2 + 12^2 = 13^2]], da [[25 + 144 = 169]]. Die Seite der Länge 13 ist die Hypotenuse, und die Seiten der Länge 5 und 12 sind die Katheten, die sich im rechten Winkel treffen.",
            },
            {
              "kind": "p",
              "text": "Der Rechner skaliert dieses Dreieck mit einem positiven Skalierungsfaktor [[k]], sodass die skalierten Seiten [[a = 5k]], [[b = 12k]] und [[c = 13k]] lauten. Er berechnet außerdem den Flächeninhalt [[A = 30k^2]] und den Umfang [[P = 30k]], sodass eine Eingabe alle fünf Ergebnisse liefert. Verwenden Sie den <a href=\"/right-triangle-calculator/\">Rechner für rechtwinklige Dreiecke</a> für ein allgemeines rechtwinkliges Dreieck.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel werden mit [[k = 2]] die Seiten zu [[a = 10]], [[b = 24]] und [[c = 26]], der Flächeninhalt beträgt [[A = 120]] Quadrateinheiten und der Umfang [[P = 60]] Einheiten.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "5-12-13-Dreieck skalieren und seine Maße berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Eingabe, fünf Ergebnisse: Geben Sie k ein und lesen Sie das skalierte Dreieck ab.",
            },
            {
              "kind": "p",
              "text": "Der Rechner hat einen einzigen Modus: 5-12-13-Dreieck skalieren. Geben Sie einen positiven Skalierungsfaktor [[k]] in das Eingabefeld ein und drücken Sie auf Berechnen. Das Tool multipliziert 5, 12 und 13 mit [[k]] und berechnet dann aus den skalierten Seiten den Flächeninhalt und den Umfang. Drücken Sie auf Zurücksetzen, um die Eingabe zu löschen und von vorn zu beginnen.",
            },
            {
              "kind": "p",
              "text": "Der Skalierungsfaktor ist die Zahl, die das ursprüngliche Dreieck streckt oder verkleinert. Mit [[k = 1]] erhalten Sie das ursprüngliche Dreieck 5, 12, 13. Mit [[k]] größer als 1 wächst das Dreieck, und mit [[k]] zwischen 0 und 1 schrumpft es, aber die Form ändert sich nie.",
            },
            {
              "kind": "p",
              "text": "Jedes Ergebnis stammt aus demselben [[k]], sodass die fünf Ausgaben immer miteinander übereinstimmen. Wenn [[k]] null oder negativ ist, wird es vom Rechner nicht akzeptiert, weil null eine entartete Figur ergibt und negative Werte keine Seitenlängen beschreiben können.",
            },
          ],
          "table": {
            "headers": [
              "Messgröße",
              "Formel",
              "Ergebnis",
            ],
            "rows": [
              [
                "Kürzere Kathete",
                "5k",
                "Skalierte Seite a",
              ],
              [
                "Längere Kathete",
                "12k",
                "Skalierte Seite b",
              ],
              [
                "Hypotenuse",
                "13k",
                "Skalierte Seite c",
              ],
              [
                "Flächeninhalt",
                "30k²",
                "Flächeninhalt des Dreiecks",
              ],
              [
                "Umfang",
                "30k",
                "Umfang des Dreiecks",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Was ist ein 5-12-13-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck mit ganzzahligen Seiten im Verhältnis 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Ein 5-12-13-Dreieck ist ein rechtwinkliges Dreieck, dessen drei Seiten 5, 12 und 13 Einheiten messen oder eine beliebige Längengruppe im selben Verhältnis bilden. Die längste Seite, 13, ist die Hypotenuse und liegt dem 90-Grad-Winkel gegenüber. Die Seiten der Länge 5 und 12 sind die Katheten und treffen sich im rechten Winkel.",
            },
            {
              "kind": "p",
              "text": "Es wird pythagoreisches Tripel genannt, weil die drei ganzen Zahlen [[5^2 + 12^2 = 13^2]] erfüllen. Diese eine Prüfung macht das Dreieck zu einem rechtwinkligen Dreieck, nicht eine Zeichnung oder eine Messung. Skalieren Sie die Seiten mit einem beliebigen positiven Faktor, so bleibt das Verhältnis 5:12:13 erhalten, und das vergrößerte oder verkleinerte Dreieck ist weiterhin ein rechtwinkliges Dreieck mit derselben Form.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Beschriftetes rechtwinkliges 5-12-13-Dreieck ABC mit kürzerer Kathete a gleich 5, längerer Kathete b gleich 12, Hypotenuse c gleich 13 und einem rechten Winkel",
            "caption": "Dreieck ABC: Die Katheten a = 5 und b = 12 treffen sich im rechten Winkel, und die Hypotenuse ist c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Warum ist 5-12-13 ein pythagoreisches Tripel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadrate der Katheten ergeben zusammen das Quadrat der Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "Die beiden Seiten stimmen überein, also gilt die Gleichung exakt. Das ist der Satz des Pythagoras in Aktion: Wenn die Quadrate der beiden kürzeren Seiten zusammen das Quadrat der längsten Seite ergeben, muss der Winkel gegenüber der längsten Seite ein rechter Winkel sein.",
            },
            {
              "kind": "p",
              "text": "Die Zahl 13 muss die Hypotenuse sein, weil sie die längste Seite ist, und die Hypotenuse liegt immer dem 90-Grad-Winkel gegenüber. Die Zahlen 5 und 12 sind die Katheten. Weil 5, 12 und 13 ganze Zahlen sind, eignet sich das Tripel gut für Hausaufgaben, Tests und Messarbeiten, bei denen exakte Antworten zählen.",
            },
            {
              "kind": "p",
              "text": "Diese Prüfung ist die Umkehrung des Satzes des Pythagoras: Der Satz besagt, dass ein rechtwinkliges Dreieck [[a^2 + b^2 = c^2]] erfüllt, und die Umkehrung besagt, dass jedes Dreieck, dessen Seiten die Gleichung erfüllen, einen rechten Winkel enthalten muss. Die meisten rechtwinkligen Dreiecke haben nicht alle ganzzahligen Seiten, und genau das macht ein Tripel besonders.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Diagramm zum Satz des Pythagoras für ein 5-12-13-Dreieck, das zeigt, dass 25 plus 144 gleich 169 ist",
            "caption": "25 + 144 = 169, also beträgt der Winkel gegenüber 13 genau 90 Grad.",
          },
        },
        "sec-sides": {
          "h2": "Die drei Seiten eines 5-12-13-Dreiecks verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Drei Seiten, drei Aufgaben: zwei Katheten und eine Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Die kürzere Kathete [[a]] misst im Grunddreieck 5. Sie liegt dem kleineren spitzen Winkel von etwa 22.62 Grad gegenüber und ist die Seite, die die meisten Schüler zuerst erkennen, weil sie die kürzeste der drei ist.",
            },
            {
              "kind": "p",
              "text": "Die längere Kathete [[b]] misst im Grunddreieck 12. Sie liegt dem größeren spitzen Winkel von etwa 67.38 Grad gegenüber. Die Hypotenuse [[c]] misst 13, die längste Seite, und liegt dem 90-Grad-Winkel gegenüber. Wenn das Dreieck mit [[k]] skaliert wird, bleiben die Bezeichnungen in derselben Reihenfolge: [[a = 5k]], [[b = 12k]] und [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Seite",
              "Länge im Grunddreieck",
              "Lage",
            ],
            "rows": [
              [
                "Kürzere Kathete a",
                "5",
                "Gegenüber dem 22.62°-Winkel",
              ],
              [
                "Längere Kathete b",
                "12",
                "Gegenüber dem 67.38°-Winkel",
              ],
              [
                "Hypotenuse c",
                "13",
                "Gegenüber dem 90°-Winkel",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Das Seitenverhältnis 5-12-13 verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 5:12:13 ändert sich nie, egal wie groß das Dreieck wird.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Die kürzere Kathete stellt 5 proportionale Einheiten dar, die längere Kathete 12 und die Hypotenuse 13.",
            },
            {
              "kind": "p",
              "text": "Die Skalierung multipliziert jeden Teil mit demselben [[k]], sodass das Verhältnis zu [[[5k : 12k : 13k]]] wird, mit derselben Form darunter. Die Gruppen 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52 und 25, 60, 65 beschreiben alle dasselbe Dreieck in verschiedenen Größen, weil jede Gruppe das Grundverhältnis multipliziert mit 1, 2, 3, 4 und 5 ist.",
            },
            {
              "kind": "p",
              "text": "Deshalb ist das Verhältnis die eigentliche Identität des Dreiecks. Zwei Dreiecke mit demselben Verhältnis sind ähnlich: gleiche Winkel, gleiche Form, unterschiedliche Größe.",
            },
            {
              "kind": "p",
              "text": "Um eine Gruppe von Messungen zu prüfen, teilen Sie alle drei Zahlen durch ihren größten gemeinsamen Teiler und sehen Sie, ob 5, 12, 13 übrig bleibt. Für 10, 24, 26 ist der Teiler 2, und die Division ergibt 5, 12, 13. Für 15, 36, 39 ist der Teiler 3, und die Division ergibt dasselbe Tripel. Wenn die Division andere drei Zahlen übrig lässt, ist die Gruppe kein 5-12-13-Dreieck.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Drei ähnliche Dreiecke mit den Bezeichnungen 5-12-13, 10-24-26 und 15-36-39 in zunehmender Größe",
            "caption": "Gleiche Proportionen, gleiche Winkel: k = 1, k = 2 und k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "Was ist der Skalierungsfaktor bei einem 5-12-13-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "k ist der Multiplikator, der die Größe des Dreiecks bestimmt.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Ein Skalierungsfaktor multipliziert alle drei ursprünglichen Seitenlängen mit derselben positiven Zahl.",
            },
            {
              "kind": "p",
              "text": "Mit [[k = 1]] erhalten Sie das ursprüngliche Dreieck. Mit [[k]] größer als 1 wächst das Dreieck, und mit [[k]] zwischen 0 und 1 schrumpft es. Der Skalierungsfaktor ändert die Größe, nicht die Form: Jeder Winkel bleibt gleich und jede Seite bleibt im Verhältnis.",
            },
            {
              "kind": "p",
              "text": "Derselbe Faktor muss auf alle drei Seiten angewendet werden. Die Skalierung nur einer oder zweier Seiten bricht das Verhältnis, bricht die Pythagoras-Prüfung, und das Ergebnis ist kein 5-12-13-Dreieck mehr.",
            },
            {
              "kind": "p",
              "text": "Ein Skalierungsfaktor lässt sich auch als Verhältnis passender Seiten lesen: Teilen Sie eine Seite des neuen Dreiecks durch die passende Seite des ursprünglichen Dreiecks, und die Antwort ist [[k]]. Zum Beispiel ergibt eine längere Kathete von 36 gegenüber den ursprünglichen 12 [[k = 36 / 12 = 3]]. Das ist derselbe [[k]], nach dem der Rechner fragt, nur aus einer Messung statt vorab gewählt.",
            },
          ],
          "table": {
            "headers": [
              "Skalierungsfaktor",
              "Wirkung",
              "Beispielseiten",
            ],
            "rows": [
              [
                "k = 1",
                "Ursprüngliches Dreieck",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Verdoppelt",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Halbiert",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Zehnmal größer",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Skaliertes 5-12-13-Dreieck mit k gleich 2, das die Seiten a gleich 10, b gleich 24 und c gleich 26 zeigt",
            "caption": "Mit k = 2 werden die Seiten zu 10, 24 und 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Formel zur Berechnung der kürzeren Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Die kürzere Kathete ist fünfmal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Die kürzere Kathete ist 20 Einheiten lang. Sie ist bei jedem Skalierungsfaktor die kleinste Seite, weil 5 die kleinste Zahl im Verhältnis ist.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formel zur Berechnung der längeren Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Die längere Kathete ist zwölfmal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Die längere Kathete ist 48 Einheiten lang. Sie ist länger als die kürzere Kathete, weil 12 größer als 5 ist, aber sie ist bei jedem positiven Skalierungsfaktor weiterhin kürzer als die Hypotenuse.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formel zur Berechnung der Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Hypotenuse ist dreizehnmal der Skalierungsfaktor.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist 52 Einheiten lang. Sie bleibt bei jedem positiven Skalierungsfaktor die längste Seite, weil 13 die größte Zahl im Verhältnis ist und die Hypotenuse immer dem rechten Winkel gegenüberliegt.",
            },
          ],
        },
        "sec-area": {
          "h2": "So berechnen Sie den Flächeninhalt eines skalierten 5-12-13-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Hälfte des Produkts der beiden Katheten ergibt den Flächeninhalt.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie die skalierten Seiten ein: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Vereinfachen Sie: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "Die beiden Katheten sind Grundseite und Höhe, weil sie sich im rechten Winkel treffen. Die Halbierung ihres Produkts ergibt den Flächeninhalt des Dreiecks. Der Skalierungsfaktor wird quadriert, sodass eine Verdopplung von [[k]] den Flächeninhalt viermal so groß macht. Der Flächeninhalt wird in Quadrateinheiten gemessen.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 3]]: [[[A = 30(3^2) = 270]]] Quadrateinheiten.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse kommt in der Flächenformel nie vor, weil der Flächeninhalt eines rechtwinkligen Dreiecks aus seinen beiden Katheten stammt. Zur Kontrolle mit [[k = 2]] sind die Katheten 10 und 24, also [[A = (10 \\times 24) / 2 = 120]] Quadrateinheiten, was mit [[A = 30(2^2) = 120]] übereinstimmt.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Flächendiagramm eines skalierten 5-12-13-Dreiecks mit Grundseite 5k, Höhe 12k und Flächeninhalt 30k Quadrat",
            "caption": "Mit k = 2 beträgt der Flächeninhalt 120 Quadrateinheiten.",
          },
        },
        "sec-perimeter": {
          "h2": "So berechnen Sie den Umfang eines skalierten 5-12-13-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Addieren Sie alle drei skalierten Seiten, um den Umfang zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Einsetzen: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Jede Seite zählt, also addieren Sie alle drei. Der Umfang wächst direkt proportional zu [[k]]: Eine Verdopplung des Skalierungsfaktors verdoppelt den Umfang. Der Umfang wird in Längeneinheiten gemessen, nicht in Quadrateinheiten.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[k = 3]]: [[[P = 30 \\times 3 = 90]]] Einheiten.",
            },
            {
              "kind": "p",
              "text": "Zur Kontrolle mit [[k = 2]] addieren Sie die skalierten Seiten direkt: [[P = 10 + 24 + 26 = 60]] Einheiten, was mit [[P = 30 \\times 2 = 60]] übereinstimmt. Der Umfang beantwortet eine andere Frage als der Flächeninhalt: Er misst die Strecke um das Dreieck herum, nicht den Raum darin.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Umfangsdiagramm eines skalierten 5-12-13-Dreiecks mit den Seiten 5k, 12k und 13k, die sich zu 30k addieren",
            "caption": "Mit k = 2 beträgt der Umfang 60 Einheiten.",
          },
        },
        "sec-find-k": {
          "h2": "So finden Sie den Skalierungsfaktor aus einer bekannten Seite",
          "blocks": [
            {
              "kind": "p",
              "text": "Teilen Sie eine bekannte Seite durch ihre Verhältniszahl, um k von Hand zu finden.",
            },
            {
              "kind": "p",
              "text": "Der Rechner nimmt [[k]] direkt, aber Sie können [[k]] auch selbst ausrechnen, wenn Sie bereits eine Seite kennen. Teilen Sie die bekannte Seite durch die passende Zahl aus dem Verhältnis 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Wenn die kürzere Kathete bekannt ist: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn die längere Kathete bekannt ist: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn die Hypotenuse bekannt ist: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Beispiel 1: Mit [[a = 20]] ist [[k = 20 / 5 = 4]]. Beispiel 2: Mit [[b = 36]] ist [[k = 36 / 12 = 3]]. Beispiel 3: Mit [[c = 65]] ist [[k = 65 / 13 = 5]]. Geben Sie das gefundene k in den Rechner ein, um die anderen Seiten, den Flächeninhalt und den Umfang zu erhalten.",
            },
            {
              "kind": "p",
              "text": "Manchmal ist [[k]] keine ganze Zahl. Mit [[b = 30]] zum Beispiel ist [[k = 30 / 12 = 2.5]], und die anderen Seiten sind [[a = 5 \\times 2.5 = 12.5]] und [[c = 13 \\times 2.5 = 32.5]]. Wenn Sie [[k]] aus zwei verschiedenen bekannten Seiten ausrechnen, müssen beide Antworten übereinstimmen; wenn sie es nicht tun, bilden die Messungen kein 5-12-13-Dreieck.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Skalierung eines 5-12-13-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Skalierungsfaktor k = 2, von Anfang bis Ende durchgerechnet.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit [[k = 2]] und finden Sie jede Messgröße des skalierten Dreiecks, eine Formel nach der anderen. Jeder Schritt verwendet eine Formel aus den Abschnitten oben, und die Übersichtstabelle am Ende fasst die Ergebnisse zusammen.",
            },
            {
              "kind": "steps",
              "steps": [
                "Finden Sie die kürzere Kathete: [[a = 5k = 5 \\times 2 = 10]].",
                "Finden Sie die längere Kathete: [[b = 12k = 12 \\times 2 = 24]].",
                "Finden Sie die Hypotenuse: [[c = 13k = 13 \\times 2 = 26]].",
                "Finden Sie den Flächeninhalt: [[A = 30k^2 = 30 \\times 4 = 120]] Quadrateinheiten.",
                "Finden Sie den Umfang: [[P = 30k = 30 \\times 2 = 60]] Einheiten.",
              ],
            },
            {
              "kind": "p",
              "text": "Das neue Dreieck behält die ursprünglichen Proportionen 5:12:13: 10, 24 und 26 sind jeweils das Doppelte von 5, 12 und 13. Prüfen Sie den rechten Winkel mit Pythagoras: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Messgröße",
              "Wert",
            ],
            "rows": [
              [
                "Kürzere Kathete a",
                "10",
              ],
              [
                "Längere Kathete b",
                "24",
              ],
              [
                "Hypotenuse c",
                "26",
              ],
              [
                "Flächeninhalt A",
                "120 Quadrateinheiten",
              ],
              [
                "Umfang P",
                "60 Einheiten",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele mit verschiedenen Skalierungsfaktoren",
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
              "text": "Gegeben [[k = 1]]. Seiten: [[a = 5]], [[b = 12]], [[c = 13]]. Flächeninhalt: [[A = 30(1^2) = 30]] Quadrateinheiten. Umfang: [[P = 30(1) = 30]] Einheiten. Dies ist das ursprüngliche Dreieck, die kleinste ganzzahlige Version des Tripels.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Skalierungsfaktor 2",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 2]]. Seiten: [[a = 10]], [[b = 24]], [[c = 26]]. Flächeninhalt: [[A = 30(2^2) = 120]] Quadrateinheiten. Umfang: [[P = 30(2) = 60]] Einheiten. Die Verdopplung des Skalierungsfaktors verdoppelt jede Seite und den Umfang, aber der Flächeninhalt wächst auf das Vierfache.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Skalierungsfaktor 3",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 3]]. Seiten: [[a = 15]], [[b = 36]], [[c = 39]]. Flächeninhalt: [[A = 30(3^2) = 270]] Quadrateinheiten. Umfang: [[P = 30(3) = 90]] Einheiten. Die Verdreifachung der Seiten verdreifacht den Umfang, während der Flächeninhalt neunmal so groß wie das Original wird.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Skalierungsfaktor 4",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 4]]. Seiten: [[a = 20]], [[b = 48]], [[c = 52]]. Flächeninhalt: [[A = 30(4^2) = 480]] Quadrateinheiten. Umfang: [[P = 30(4) = 120]] Einheiten. Jede Seite ist viermal so groß wie das Original, und der Flächeninhalt ist sechzehnmal so groß wie das Original.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Skalierungsfaktor 0.5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 0.5]]. Seiten: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Flächeninhalt: [[A = 30(0.5^2) = 7.5]] Quadrateinheiten. Umfang: [[P = 30(0.5) = 15]] Einheiten. Die Halbierung des Dreiecks halbiert die Seiten und den Umfang, während der Flächeninhalt auf ein Viertel fällt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Skalierungsfaktor 1.5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 1.5]]. Seiten: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Flächeninhalt: [[A = 30(1.5^2) = 67.5]] Quadrateinheiten. Umfang: [[P = 30(1.5) = 45]] Einheiten. Ein dezimaler Skalierungsfaktor funktioniert genauso: Multiplizieren Sie jede Seite mit 1.5.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Skalierungsfaktor 5",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 5]]. Seiten: [[a = 25]], [[b = 60]], [[c = 65]]. Flächeninhalt: [[A = 30(5^2) = 750]] Quadrateinheiten. Umfang: [[P = 30(5) = 150]] Einheiten. Ein Skalierungsfaktor von 5 ergibt ein viel größeres Dreieck, nützlich für Layoutarbeiten, bei denen das Grunddreieck 5, 12, 13 zu klein ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Skalierungsfaktor 10",
            },
            {
              "kind": "p",
              "text": "Gegeben [[k = 10]]. Seiten: [[a = 50]], [[b = 120]], [[c = 130]]. Flächeninhalt: [[A = 30(10^2) = 3000]] Quadrateinheiten. Umfang: [[P = 30(10) = 300]] Einheiten. Bei dieser Größe bleiben die Zahlen exakt, was ein Vorteil der Arbeit mit einem ganzzahligen Tripel ist.",
            },
            {
              "kind": "p",
              "text": "In allen acht Beispielen gilt das Muster: Seiten und Umfang wachsen mit [[k]], der Flächeninhalt wächst mit [[k]] im Quadrat, und das Verhältnis 5:12:13 ändert sich nie.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Warum behält das 5-12-13-Dreieck immer einen 90-Grad-Winkel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Skalierung kann die Pythagoras-Prüfung nicht brechen.",
            },
            {
              "kind": "p",
              "text": "Die skalierten Seiten sind [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Wenden Sie Pythagoras an: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Ausmultiplizieren: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Beide Seiten stimmen für jedes positive [[k]] überein, weil der Faktor [[k^2]] allen drei Termen gemeinsam ist. Die Skalierung streckt das Dreieck, ohne seine Winkel zu ändern, sodass der 90-Grad-Winkel bei jeder Größe erhalten bleibt. Das ist dieselbe Idee wie bei ähnlichen Dreiecken: gleiche Form, unterschiedliche Größe.",
            },
            {
              "kind": "p",
              "text": "Die Winkel ändern sich mit der Skalierung nie. Bei jedem positiven [[k]] bleiben die spitzen Winkel etwa 22.62 und 67.38 Grad, weil der Sinus des kleineren Winkels immer [[5 / 13]] und der Sinus des größeren Winkels immer [[12 / 13]] ist. Nur die Seitenlängen bewegen sich, und sie bewegen sich alle gemeinsam.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Winkeldiagramm eines 5-12-13-Dreiecks, das den 90-Grad-Winkel und die spitzen Winkel von etwa 22.62 und 67.38 Grad zeigt",
            "caption": "Die spitzen Winkel betragen etwa 22.62 und 67.38 Grad und ergeben zusammen 90 Grad.",
          },
        },
        "sec-euclid": {
          "h2": "Wie wird das Tripel 5-12-13 mit der Formel von Euklid erzeugt?",
          "blocks": [
            {
              "kind": "p",
              "text": "Zwei kleine Zahlen, m = 3 und n = 2, erzeugen das ganze Tripel.",
            },
            {
              "kind": "p",
              "text": "Die Formel von Euklid erzeugt primitive pythagoreische Tripel aus zwei positiven ganzen Zahlen [[m]] und [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[m = 3]] und [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist das eingerahmte Verhältnis [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "Die Formel funktioniert, wenn [[m]] größer als [[n]] ist, die beiden Zahlen keinen gemeinsamen Teiler haben und eine gerade ist, während die andere ungerade ist. Diese Bedingungen ergeben ein primitives Tripel, eines, das sich nicht auf ein kleineres ganzzahliges Tripel herunterteilen lässt. Die Formel von Euklid ist eine fortgeschrittene Ergänzung: Der Rechner selbst braucht nur [[k]], aber die Formel zeigt, woher 5, 12 und 13 stammen.",
            },
            {
              "kind": "p",
              "text": "Andere Werte von [[m]] und [[n]] erzeugen andere Tripel. Mit [[m = 2]] und [[n = 1]] ergibt die Formel 3, 4 und 5. Mit [[m = 4]] und [[n = 1]] ergibt sie 15, 8 und 17, was das Tripel 8-15-17 in einer anderen Reihenfolge ist. Das Tripel 5-12-13 ist das Mitglied dieser Familie, das aus [[m = 3]] und [[n = 2]] stammt.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Flussdiagramm zur Formel von Euklid mit m gleich 3 und n gleich 2, das 5, 12 und 13 ergibt",
            "caption": "m = 3 und n = 2 ergeben a = 5, b = 12 und c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Anwendungen des 5-12-13-Dreiecks in Geometrie und Messung",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein ganzzahliger rechter Winkel ist überall nützlich, wo exakte Ecken zählen.",
            },
            {
              "kind": "p",
              "text": "Bei Geometrie-Hausaufgaben und Prüfungsvorbereitung liefert das Tripel schnelle Prüfungen auf rechte Winkel ohne Winkelmesser: Wenn drei Längen zu 5:12:13 passen, beträgt der Winkel zwischen den beiden kürzeren Seiten 90 Grad. Lehrer verwenden es für Übungen zum Satz des Pythagoras, für Aufgaben zur Dreiecksähnlichkeit und für Arbeiten mit maßstabsgetreuen Zeichnungen.",
            },
            {
              "kind": "p",
              "text": "Bauarbeiter und Zimmerleute verwenden skalierte Versionen, um rechte Ecken abzustecken: Markieren Sie 5 Einheiten entlang einer Kante und 12 entlang der anderen, und die Diagonale muss 13 messen. Vermesser und technisches Zeichnen stützen sich bei größeren Maßstäben auf dieselbe Idee, mit 10, 24, 26 oder 25, 60, 65, wenn das Grunddreieck zu klein ist.",
            },
            {
              "kind": "p",
              "text": "Das Verhältnis hilft auch bei mathematischer Modellierung und in Unterrichtsdemonstrationen, bei denen exakte ganze Zahlen die Rechnung sauber halten. Bei echten Bauarbeiten sind Messgenauigkeit und die Bedingungen vor Ort weiterhin wichtig, und dieses Verhältnis ersetzt keine professionelle Vermessung oder Baunormen.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Unterschied zwischen 5-12-13 und anderen pythagoreischen Tripeln",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes primitive Tripel ist ein rechtwinkliges Dreieck, aber jedes hat seine eigene Form.",
            },
            {
              "kind": "p",
              "text": "Die Tabelle unten vergleicht fünf bekannte primitive Tripel. Alle erfüllen den Satz des Pythagoras, doch ihre Seitenverhältnisse und spitzen Winkel unterscheiden sich, sodass jedes eine andere Dreiecksform erzeugt. Die Skalierung eines Tripels ergibt ähnliche Dreiecke, nie ein anderes Tripel: 10, 24, 26 ist ein skaliertes 5-12-13, während 3, 4, 5 eine ganz andere Form ist.",
            },
            {
              "kind": "p",
              "text": "Das 5-12-13-Dreieck ist länger und schmaler als das 3-4-5-Dreieck: Seine längere Kathete ist mehr als doppelt so lang wie seine kürzere Kathete, während 3-4-5 näher am Quadrat liegt. Dieser Unterschied zeigt sich in den Winkeln, mit 22.62 und 67.38 Grad hier gegenüber 36.87 und 53.13 Grad bei 3-4-5. Mehr erfahren Sie auf der Seite <a href=\"/pythagorean-triples-calculator/\">Rechner für pythagoreische Tripel</a>.",
            },
            {
              "kind": "p",
              "text": "Nur die Tripel in der Tabelle sind primitiv, das heißt, ihre drei Zahlen haben keinen gemeinsamen Teiler größer als 1. Ein skaliertes Tripel wie 6, 8, 10 oder 10, 24, 26 ist nicht primitiv, weil sich alle drei Zahlen durch 2 teilen lassen. Primitive Tripel sind die Grundmitglieder jeder Familie, und jedes andere Mitglied ist eine skalierte Kopie von einem von ihnen.",
            },
          ],
          "table": {
            "headers": [
              "Pythagoreisches Tripel",
              "Seitenverhältnis",
              "Hypotenuse",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Unterschied zwischen 5-12-13, 45-45-90- und 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "5-12-13 hat eigene Winkel, nicht die Standardwinkel der speziellen Dreiecke.",
            },
            {
              "kind": "p",
              "text": "Ein 5-12-13-Dreieck ist kein 45-45-90-Dreieck und kein 30-60-90-Dreieck. Seine spitzen Winkel betragen etwa 22.62 und 67.38 Grad, und seine Katheten sind ungleich, sodass es zur Familie der pythagoreischen Tripel gehört und nicht zu einer der beiden Familien mit speziellen Winkeln.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie den <a href=\"/45-45-90-triangle-calculator/\">45-45-90-Dreieck-Rechner</a> für gleichschenklige rechtwinklige Dreiecke und den <a href=\"/30-60-90-triangle-calculator/\">30-60-90-Dreieck-Rechner</a> für die 30-60-90-Familie. Die 5-12-13-Seite ist das richtige Werkzeug, wenn die Seiten dem Verhältnis 5:12:13 folgen.",
            },
            {
              "kind": "p",
              "text": "Um zu erkennen, zu welcher Familie ein rechtwinkliges Dreieck gehört, prüfen Sie seine Winkel oder sein Seitenverhältnis. Gleiche Katheten und 45-Grad-Winkel bedeuten 45-45-90. Winkel von 30 und 60 Grad bedeuten 30-60-90. Seiten im Verhältnis 5:12:13, mit Winkeln nahe 22.62 und 67.38 Grad, bedeuten ein 5-12-13-Dreieck. Die drei Familien überschneiden sich nie.",
            },
          ],
          "table": {
            "headers": [
              "Merkmal",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Seitenverhältnis",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Winkel",
                "22.62°, 67.38°, 90° ungefähr",
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
                "Haupteigenschaft",
                "Pythagoreisches Tripel",
                "Gleichschenkliges rechtwinkliges Dreieck",
                "Spezielles Winkelverhältnis",
              ],
              [
                "Hypotenuse",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Verwendung des 5-12-13-Dreieck-Rechners",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn Fehler tauchen bei 5-12-13-Aufgaben immer wieder auf.",
            },
            {
              "kind": "steps",
              "steps": [
                "13 als Kathete statt als Hypotenuse behandeln: 13 ist die längste Seite und liegt dem 90-Grad-Winkel gegenüber. [[c = 13k]] ist immer die Hypotenuse.",
                "Die kürzere Kathete mit der längeren Kathete verwechseln: [[a = 5k]] ist die kürzere Kathete und [[b = 12k]] ist die längere Kathete. Halten Sie die Bezeichnungen in der richtigen Reihenfolge.",
                "Nur eine oder zwei Seiten skalieren: Die Skalierung nur der Katheten bricht das Verhältnis und den rechten Winkel. Wenden Sie dasselbe [[k]] auf jede Seite an.",
                "Den Skalierungsfaktor mit einer Seitenlänge verwechseln: [[k]] ist der Multiplikator, keine Seite. Mit [[k = 2]] sind die Seiten 10, 24 und 26.",
                "Null als gültigen Skalierungsfaktor verwenden: [[k = 0]] macht alle drei Seiten zu null, eine entartete Figur, kein Dreieck. [[k]] muss größer als null sein.",
                "Einen negativen Skalierungsfaktor eingeben: Ein negatives [[k]] ergibt negative Seitenlängen, die kein Dreieck beschreiben können. Geben Sie nur ein positives [[k]] ein.",
                "Vergessen, k in der Flächenformel zu quadrieren: Der Flächeninhalt wächst mit [[k]] im Quadrat. Mit [[k = 3]] ist der Flächeninhalt [[A = 30 \\times 9 = 270]], nicht 90.",
                "Flächeninhalt und Umfang verwechseln: Der Flächeninhalt wird in Quadrateinheiten gemessen und verwendet [[A = 30k^2]], während der Umfang in Längeneinheiten gemessen wird und [[P = 30k]] verwendet.",
                "Nur zwei Seiten addieren, wenn man den Umfang berechnet: Der Umfang umfasst alle drei Seiten, also [[P = 5k + 12k + 13k = 30k]].",
                "Messeinheiten vermischen: Verwenden Sie eine Einheit für alle drei Seiten. Wenn die Katheten in Zentimetern angegeben sind, ergibt sich der Flächeninhalt in Quadratzentimetern und der Umfang in Zentimetern.",
                "Annehmen, dass nur 5, 12 und 13 funktionieren: Jede skalierte Gruppe wie 10, 24, 26 oder 15, 36, 39 ist weiterhin ein 5-12-13-Dreieck, weil das Verhältnis dasselbe ist.",
                "Annehmen, dass jedes rechtwinklige Dreieck dem Verhältnis 5:12:13 folgt: Die meisten rechtwinkligen Dreiecke haben andere Seitenlängen. Das Verhältnis gilt nur, wenn die Seiten zu 5:12:13 passen.",
                "Die Tripel 5-12-13 und 3-4-5 verwechseln: 3, 4, 5 und 5, 12, 13 sind verschiedene Tripel mit verschiedenen Winkeln. Prüfen Sie das Verhältnis, bevor Sie eine Formel wählen.",
                "Messungen unnötig runden: Das Tripel liefert exakte ganze Zahlen, also halten Sie sie exakt. Runden Sie nur, wenn ein Skalierungsfaktor wie 1.5 eine Dezimalzahl erzwingt, und sagen Sie es dazu.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "So überprüfen Sie ein skaliertes 5-12-13-Dreieck",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier schnelle Prüfungen bestätigen ein skaliertes 5-12-13-Dreieck.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Seitenverhältnis",
            },
            {
              "kind": "p",
              "text": "Die Seiten müssen zu [[[a : b : c = 5 : 12 : 13]]] passen",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Die Katheten müssen [[[a^2 + b^2 = c^2]]] erfüllen",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Konsistenz des Skalierungsfaktors",
            },
            {
              "kind": "p",
              "text": "Jede Seite, geteilt durch ihre Verhältniszahl, muss dasselbe [[k]] ergeben: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Reihenfolge der Seiten",
            },
            {
              "kind": "p",
              "text": "Die Seiten müssen von der kürzesten zur längsten laufen: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie 10, 24, 26 als Beispiel. Das Verhältnis ist 10:24:26, was sich auf 5:12:13 herunterteilen lässt, und die Pythagoras-Prüfung ergibt [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. Die Prüfung des Skalierungsfaktors ergibt [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Alle vier Prüfungen bestehen, also bilden die Messungen ein skaliertes 5-12-13-Dreieck.",
            },
            {
              "kind": "p",
              "text": "Wenn eine Prüfung fehlschlägt, messen Sie erneut oder prüfen Sie die Rechnung, bevor Sie den Zahlen vertrauen. Eine fehlgeschlagene Verhältnisprüfung bedeutet meist, dass eine Seite mit einem anderen Faktor skaliert wurde, und eine fehlgeschlagene Pythagoras-Prüfung bedeutet meist, dass die längste Seite für eine Kathete gehalten wurde. Korrigieren Sie die Seite, die das Muster bricht, und führen Sie dann alle vier Prüfungen erneut durch.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Antworten",
          "blocks": [
            {
              "kind": "p",
              "text": "Bearbeiten Sie alle acht Aufgaben auf Papier, bevor Sie die Antworten lesen.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Skalieren mit k = 2",
            },
            {
              "kind": "p",
              "text": "Skalieren Sie ein 5-12-13-Dreieck mit [[k = 2]]. Finden Sie die drei Seitenlängen, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Skalieren mit k = 4",
            },
            {
              "kind": "p",
              "text": "Skalieren Sie ein 5-12-13-Dreieck mit [[k = 4]]. Finden Sie die drei Seitenlängen, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Flächeninhalt mit k = 3",
            },
            {
              "kind": "p",
              "text": "Finden Sie den Flächeninhalt eines skalierten 5-12-13-Dreiecks mit [[k = 3]], in Quadrateinheiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Umfang mit k = 5",
            },
            {
              "kind": "p",
              "text": "Finden Sie den Umfang eines skalierten 5-12-13-Dreiecks mit [[k = 5]], in Einheiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: k aus der kürzeren Kathete finden",
            },
            {
              "kind": "p",
              "text": "Die kürzere Kathete eines skalierten 5-12-13-Dreiecks beträgt 25. Finden Sie den Skalierungsfaktor [[k]] und dann die anderen beiden Seiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: k aus der längeren Kathete finden",
            },
            {
              "kind": "p",
              "text": "Die längere Kathete eines skalierten 5-12-13-Dreiecks beträgt 48. Finden Sie den Skalierungsfaktor [[k]] und dann die anderen beiden Seiten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 7: k aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse eines skalierten 5-12-13-Dreiecks beträgt 78. Finden Sie den Skalierungsfaktor [[k]] und dann die beiden Katheten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 8: 15, 36 und 39 überprüfen",
            },
            {
              "kind": "p",
              "text": "Bilden die Seitenlängen 15, 36 und 39 ein skaliertes 5-12-13-Dreieck? Prüfen Sie das Verhältnis und den Satz des Pythagoras.",
            },
            {
              "kind": "h3",
              "text": "Antworten",
            },
            {
              "kind": "p",
              "text": "1. Seiten 10, 24, 26; Flächeninhalt 120 Quadrateinheiten; Umfang 60 Einheiten.",
            },
            {
              "kind": "p",
              "text": "2. Seiten 20, 48, 52; Flächeninhalt 480 Quadrateinheiten; Umfang 120 Einheiten.",
            },
            {
              "kind": "p",
              "text": "3. Flächeninhalt [[A = 30 \\times 9 = 270]] Quadrateinheiten.",
            },
            {
              "kind": "p",
              "text": "4. Umfang [[P = 30 \\times 5 = 150]] Einheiten.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; die längere Kathete ist 60 und die Hypotenuse ist 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; die kürzere Kathete ist 20 und die Hypotenuse ist 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; die kürzere Kathete ist 30 und die längere Kathete ist 72.",
            },
            {
              "kind": "p",
              "text": "8. Ja: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], und 15:36:39 teilt sich auf 5:12:13 herunter, also [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten behandelt eine andere Aufgabe mit rechtwinkligen Dreiecken, also wählen Sie das Werkzeug, das zu der Messung passt, die Sie brauchen.",
      "relatedItems": [
        "Rechner für pythagoreische Tripel",
        "3-4-5-Dreieck-Rechner",
        "Rechner für Seiten rechtwinkliger Dreiecke",
        "Rechner zum Satz des Pythagoras",
        "Rechner für den Flächeninhalt rechtwinkliger Dreiecke",
        "Rechner für den Umfang rechtwinkliger Dreiecke",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein 5-12-13-Dreieck?",
          "answer": "Ein 5-12-13-Dreieck ist ein rechtwinkliges Dreieck mit den Seitenlängen 5, 12 und 13 oder einer beliebigen skalierten Gruppe im selben Verhältnis. Die Seite der Länge 13 ist die Hypotenuse, und die Seiten der Länge 5 und 12 sind die Katheten, die sich im rechten Winkel treffen.",
        },
        {
          "question": "Warum ist 5-12-13 ein rechtwinkliges Dreieck?",
          "answer": "Weil seine Seiten den Satz des Pythagoras erfüllen: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Wenn die Quadrate der beiden kürzeren Seiten zusammen das Quadrat der längsten Seite ergeben, beträgt der Winkel gegenüber dieser Seite 90 Grad.",
        },
        {
          "question": "Wie lautet das Seitenverhältnis eines 5-12-13-Dreiecks?",
          "answer": "Das Verhältnis ist 5:12:13: Die kürzere Kathete hat 5 Teile, die längere Kathete 12 Teile und die Hypotenuse 13 Teile. Die Skalierung multipliziert jeden Teil mit demselben Faktor [[k]], sodass sich das Verhältnis nie ändert.",
        },
        {
          "question": "Wie funktioniert der 5-12-13-Dreieck-Rechner?",
          "answer": "Geben Sie einen positiven Skalierungsfaktor [[k]] ein und drücken Sie auf Berechnen. Der Rechner liefert die skalierten Seiten [[a = 5k]], [[b = 12k]] und [[c = 13k]] sowie den Flächeninhalt [[A = 30k^2]] und den Umfang [[P = 30k]].",
        },
        {
          "question": "Was ist der Skalierungsfaktor bei einem 5-12-13-Dreieck?",
          "answer": "Der Skalierungsfaktor [[k]] ist die Zahl, die alle drei Seiten des Grunddreiecks multipliziert. Mit [[k = 1]] erhalten Sie das ursprüngliche Dreieck; größere Werte vergrößern es und Werte zwischen 0 und 1 verkleinern es.",
        },
        {
          "question": "Wie berechne ich die Seiten eines skalierten 5-12-13-Dreiecks?",
          "answer": "Multiplizieren Sie jede Grundseite mit [[k]]: Die kürzere Kathete ist [[a = 5k]], die längere Kathete ist [[b = 12k]] und die Hypotenuse ist [[c = 13k]]. Für [[k = 4]] sind die Seiten 20, 48 und 52.",
        },
        {
          "question": "Wie berechne ich seinen Flächeninhalt?",
          "answer": "Verwenden Sie [[A = 30k^2]]. Der Flächeninhalt ergibt sich aus der Hälfte des Produkts der Katheten, [[A = (5k)(12k) / 2]]. Mit [[k = 3]] beträgt der Flächeninhalt 270 Quadrateinheiten.",
        },
        {
          "question": "Wie berechne ich seinen Umfang?",
          "answer": "Verwenden Sie [[P = 30k]]. Addieren Sie die drei skalierten Seiten: [[P = 5k + 12k + 13k]]. Mit [[k = 3]] beträgt der Umfang 90 Einheiten.",
        },
        {
          "question": "Kann ich 10-24-26 statt 5-12-13 verwenden?",
          "answer": "Ja. Die Gruppe 10, 24, 26 ist das 5-12-13-Dreieck, skaliert mit [[k = 2]], also hat sie dieselbe Form und dieselben Winkel. Jedes Vielfache von 5, 12 und 13 funktioniert genauso.",
        },
        {
          "question": "Wie wird das Tripel 5-12-13 erzeugt?",
          "answer": "Die Formel von Euklid mit [[m = 3]] und [[n = 2]] ergibt [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] und [[c = 3^2 + 2^2 = 13]]. Die Werte 3 und 2 sind teilerfremd und haben unterschiedliche Parität, sodass das Tripel primitiv ist.",
        },
        {
          "question": "Was ist der Unterschied zwischen 3-4-5 und 5-12-13?",
          "answer": "Beide sind primitive pythagoreische Tripel, aber ihre Proportionen unterscheiden sich: 3-4-5 hat Winkel von etwa 36.87 und 53.13 Grad, während 5-12-13 Winkel von etwa 22.62 und 67.38 Grad hat. Jedes Tripel ergibt eine andere Dreiecksform.",
        },
        {
          "question": "Ist jedes skalierte 5-12-13-Dreieck ein rechtwinkliges Dreieck?",
          "answer": "Ja. Für jedes positive [[k]] erfüllen die skalierten Seiten [[(5k)^2 + (12k)^2 = (13k)^2]], sodass der Satz des Pythagoras gilt und der Winkel gegenüber der längsten Seite 90 Grad bleibt.",
        },
      ],
    },
};
