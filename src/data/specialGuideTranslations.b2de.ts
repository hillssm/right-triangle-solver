// specialGuideTranslations.bde.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B2_DE = {
  "de": {
      "meta": {
        "title": "Rechner für spezielle rechtwinklige Dreiecke - Verhältnisse 45-45-90 und 30-60-90",
        "description": "Lösen Sie 45-45-90- und 30-60-90-Dreiecke mit dem Rechner für spezielle rechtwinklige Dreiecke. Nutzen Sie die festen Verhältnisse 1:1:√2 und 1:√3:2, um fehlende Seiten schnell zu finden.",
        "primaryKeyword": "Special Right Triangle Calculator",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "Rechner für spezielle rechtwinklige Dreiecke",
        "sec-calculate": "Fehlende Seiten spezieller rechtwinkliger Dreiecke berechnen",
        "sec-what": "Was sind spezielle rechtwinklige Dreiecke?",
        "sec-types": "Die zwei Haupttypen spezieller rechtwinkliger Dreiecke",
        "sec-454590": "Das 45-45-90-Dreieck verstehen",
        "sec-derive-454590": "Herleitung des Seitenverhältnisses 45-45-90",
        "sec-306090": "Das 30-60-90-Dreieck verstehen",
        "sec-derive-306090": "Herleitung des Seitenverhältnisses 30-60-90",
        "sec-compare": "Vergleich der Seitenverhältnisse der beiden speziellen Dreiecke",
        "sec-how-hyp-45": "So nutzen Sie den 45-45-90-Hypotenusenrechner",
        "sec-how-leg-45": "So finden Sie eine Kathete aus der Hypotenuse eines 45-45-90-Dreiecks",
        "sec-how-long-30": "So nutzen Sie den 30-60-90-Rechner für die lange Kathete",
        "sec-how-hyp-30": "So nutzen Sie den 30-60-90-Hypotenusenrechner",
        "sec-examples": "Schritt-für-Schritt-Beispiele für beide speziellen Dreieckstypen",
        "sec-area-perimeter": "Flächeninhalt und Umfang bei speziellen rechtwinkligen Dreiecken",
        "sec-exact": "Exakte Wurzelantworten im Vergleich zu Dezimalnäherungen",
        "sec-verify": "So überprüfen Sie Berechnungen bei speziellen rechtwinkligen Dreiecken",
        "sec-mistakes": "Häufige Fehler beim Lösen spezieller rechtwinkliger Dreiecke",
        "sec-applications": "Praktische Anwendungen spezieller rechtwinkliger Dreiecke",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte rechtwinklige Dreiecksrechner",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "Rechner für spezielle rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Lösen Sie 45-45-90- und 30-60-90-Dreiecke aus einer bekannten Seite mithilfe ihrer festen Seitenverhältnisse.",
            },
            {
              "kind": "p",
              "text": "Ein spezielles rechtwinkliges Dreieck ist ein rechtwinkliges Dreieck, dessen Winkel ein festes Seitenverhältnis erzeugen, das sich nie ändert, egal wie groß oder klein das Dreieck ist. Nur zwei Winkelmuster tun dies in der Schulgeometrie: das 45-45-90-Dreieck und das 30-60-90-Dreieck. Der Rechner für spezielle rechtwinklige Dreiecke auf dieser Seite deckt beide Typen ab, sodass eine bekannte Seite ausreicht, um jede andere Seite zu finden.",
            },
            {
              "kind": "p",
              "text": "Das 45-45-90-Dreieck hat zwei gleiche Katheten, und seine Seiten folgen dem Verhältnis [[a : b : c = 1 : 1 : \\sqrt{2}]]. Das 30-60-90-Dreieck hat drei verschieden lange Seiten, und seine Seiten folgen dem Verhältnis [[a : b : c = 1 : \\sqrt{3} : 2]]. Hier sind [[a]] und [[b]] die Katheten und [[c]] die Hypotenuse, und die Bedeutung von [[a]] und [[b]] ändert sich mit dem Dreieckstyp, deshalb geben die Abschnitte unten immer an, welchen Typ sie verwenden.",
            },
            {
              "kind": "p",
              "text": "Wenn ein 45-45-90-Dreieck eine Kathete von 5 cm hat, ist die andere Kathete ebenfalls 5 cm lang und die Hypotenuse beträgt [[c = 5\\sqrt{2} \\approx 7.071]] cm. Wenn ein 30-60-90-Dreieck eine kurze Kathete von 5 cm hat, beträgt die lange Kathete [[b = 5\\sqrt{3} \\approx 8.660]] cm und die Hypotenuse [[c = 10]] cm. Die vier Rechnermodi auf dieser Seite führen genau diese Schritte aus, und die Anleitung unten erklärt, woher jedes Verhältnis stammt, wie Sie den richtigen Modus wählen und wie Sie jede Antwort überprüfen.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Fehlende Seiten spezieller rechtwinkliger Dreiecke berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite hat vier Modi, einen für jede fehlende Seite, nach der bei Aufgaben zu speziellen rechtwinkligen Dreiecken üblicherweise gefragt wird. Wählen Sie zuerst den Dreieckstyp und dann die Seite, die Sie kennen, und die Seite, die Sie brauchen. Die Tabelle unten listet jeden Modus mit seiner Eingabe, seiner Formel und seinem Ergebnis auf.",
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
                "45-45-90: Hypotenuse",
                "Kathete a",
                "Hypotenuse c",
              ],
              [
                "45-45-90: Kathete",
                "Hypotenuse c",
                "Kathete a",
              ],
              [
                "30-60-90: Lange Kathete",
                "Kurze Kathete a",
                "Lange Kathete b",
              ],
              [
                "30-60-90: Hypotenuse",
                "Kurze Kathete a",
                "Hypotenuse c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Modus 1 findet die Hypotenuse eines 45-45-90-Dreiecks aus einer der beiden gleichen Katheten.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Modus 2 findet eine Kathete eines 45-45-90-Dreiecks aus der Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Modus 3 findet die lange Kathete eines 30-60-90-Dreiecks aus der kurzen Kathete.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Modus 4 findet die Hypotenuse eines 30-60-90-Dreiecks aus der kurzen Kathete.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Um einen Modus zu nutzen, bestätigen Sie den Dreieckstyp anhand seiner Winkel, bestimmen Sie die bekannte Seite, geben Sie ein positives Maß ein, wählen Sie eine Einheit, die zum Rest der Aufgabe passt, und klicken Sie auf Berechnen. Nutzen Sie Zurücksetzen vor einer neuen Berechnung, damit kein alter Wert in die nächste Antwort gelangen kann. Jeder Modus braucht eine andere Formel, weil jeder Modus von einer anderen bekannten Seite ausgeht und die beiden Dreieckstypen unterschiedliche Verhältnisse haben, sodass eine 45-45-90-Formel niemals in eine 30-60-90-Aufgabe gehört.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Flussdiagramm der vier Modi des Rechners für spezielle rechtwinklige Dreiecke: 45-45-90 Kathete zu Hypotenuse, 45-45-90 Hypotenuse zu Kathete, 30-60-90 kurze Kathete zu langer Kathete und 30-60-90 kurze Kathete zu Hypotenuse",
            "caption": "Die vier Rechnermodi: Jeder startet mit einer bekannten Seite und wendet ein festes Verhältnis an.",
          },
        },
        "sec-what": {
          "h2": "Was sind spezielle rechtwinklige Dreiecke?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein spezielles rechtwinkliges Dreieck ist ein rechtwinkliges Dreieck, dessen drei Winkel auf Werte festgelegt sind, die seine Seiten in ein unveränderliches Verhältnis zwingen. Die meisten rechtwinkligen Dreiecke haben keine solche Abkürzung: Eine bekannte Seite sagt Ihnen nichts über die anderen, bis Sie auch einen Winkel oder eine zweite Seite kennen. Bei einem speziellen rechtwinkligen Dreieck legen allein die Winkel die Form fest, sodass eine Seitenlänge das ganze Dreieck bestimmt.",
            },
            {
              "kind": "p",
              "text": "Der Satz des Pythagoras gilt weiterhin, und er ist das Werkzeug, das beide Verhältnisse erzeugt. In einem 45-45-90-Dreieck lassen die beiden gleichen Katheten den Satz zu [[2a^2 = c^2]] zusammenfallen, woraus [[c = a\\sqrt{2}]] folgt. In einem 30-60-90-Dreieck ist die Hypotenuse doppelt so lang wie die kurze Kathete, sodass der Satz [[b^2 = (2a)^2 - a^2 = 3a^2]] ergibt, woraus [[b = a\\sqrt{3}]] folgt. Die vollständigen Herleitungen stehen in eigenen Abschnitten weiter unten.",
            },
            {
              "kind": "p",
              "text": "Die Verhältnisse bleiben bei jeder Größe gleich, weil die Dreiecke innerhalb ihres eigenen Typs ähnlich sind. Ein 45-45-90-Dreieck mit einer Kathete von 1 cm und eines mit einer Kathete von 100 cm haben dieselbe Form, dieselben Winkel und dasselbe Verhältnis 1:1:√2. Diese Größenunabhängigkeit macht diese Dreiecke in Geometrie und Trigonometrie so nützlich: Sobald Sie das Winkelmuster erkennen, können Sie jede Seite aufschreiben, ohne zu messen oder Sinus und Kosinus zu verwenden.",
            },
            {
              "kind": "p",
              "text": "Die 45-45-90- und 30-60-90-Dreiecke sind zwei verschiedene Familien, nicht zwei Namen für dieselbe Form. Das eine hat zwei gleiche Katheten, das andere drei verschieden lange Seiten. Sie zu verwechseln ist der häufigste Fehler in diesem Thema, deshalb stellt der nächste Abschnitt jede Familie einzeln vor, bevor die Anleitung sie nebeneinander vergleicht.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Zwei spezielle rechtwinklige Dreiecke nebeneinander: ein 45-45-90-Dreieck mit dem Verhältnis 1:1:√2 und ein 30-60-90-Dreieck mit dem Verhältnis 1:√3:2",
            "caption": "Die zwei speziellen rechtwinkligen Dreiecke: 45-45-90 mit gleichen Katheten und 30-60-90 mit drei verschiedenen Seiten.",
          },
        },
        "sec-types": {
          "h2": "Die zwei Haupttypen spezieller rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Beide speziellen Dreiecke sind rechtwinklige Dreiecke, sodass jedes einen 90°-Winkel und eine Hypotenuse gegenüber diesem Winkel hat. Was sich unterscheidet, ist das Paar spitzer Winkel, und die spitzen Winkel bestimmen das Seitenverhältnis. Lernen Sie zuerst jeden Typ einzeln, dann wird der Vergleich weiter unten in dieser Anleitung leicht zu folgen sein.",
            },
            {
              "kind": "h3",
              "text": "45-45-90-Dreieck",
            },
            {
              "kind": "list",
              "items": [
                "Winkel: 45°, 45°, 90°.",
                "Zwei gleiche Katheten, sodass jede Kathete als bekannte Eingabe dienen kann.",
                "Die Hypotenuse ist die Kathete mal √2, [[c = a\\sqrt{2}]].",
                "Seitenverhältnis: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Auch gleichschenkliges rechtwinkliges Dreieck genannt.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90-Dreieck",
            },
            {
              "kind": "list",
              "items": [
                "Winkel: 30°, 60°, 90°.",
                "Kurze Kathete [[a]] gegenüber dem 30°-Winkel, lange Kathete [[b]] gegenüber dem 60°-Winkel.",
                "Die Hypotenuse ist doppelt so lang wie die kurze Kathete, [[c = 2a]].",
                "Die lange Kathete ist die kurze Kathete mal √3, [[b = a\\sqrt{3}]].",
                "Seitenverhältnis: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Ein ungleichseitiges rechtwinkliges Dreieck, da alle drei Seiten unterschiedlich sind.",
              ],
            },
            {
              "kind": "p",
              "text": "Der sichtbare Unterschied ist klar, sobald man danach sucht. In einem 45-45-90-Dreieck sehen die beiden Katheten gleich lang aus, und die Hypotenuse verläuft in einem Winkel von 45° zu jeder Kathete. In einem 30-60-90-Dreieck ist die Kathete gegenüber dem 30°-Winkel sichtbar die kürzeste Seite, die Kathete gegenüber dem 60°-Winkel ist länger, und die Hypotenuse ist genau doppelt so lang wie die kurze Kathete. Die Tabelle unten fasst den Gegensatz zusammen.",
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
                "Gleiche Katheten",
                "Ja",
                "Nein",
              ],
              [
                "Kürzeste Seite",
                "Beide Katheten",
                "Kurze Kathete (gegenüber 30°)",
              ],
              [
                "Längste Seite",
                "Hypotenuse",
                "Hypotenuse",
              ],
              [
                "Hypotenusenformel",
                "a√2",
                "2a",
              ],
              [
                "Formel für die lange Kathete",
                "Nicht zutreffend",
                "a√3",
              ],
              [
                "Dreieckstyp",
                "Gleichschenklig rechtwinklig",
                "Ungleichseitig rechtwinklig",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Das 45-45-90-Dreieck verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein 45-45-90-Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck. Seine beiden spitzen Winkel betragen beide 45°, sodass die Winkel zusammen [[45° + 45° + 90° = 180°]] ergeben, wie es bei jedem Dreieck sein muss. Weil die beiden spitzen Winkel gleich sind, sind auch die Seiten gegenüber diesen Winkeln gleich, weshalb die beiden Katheten dieselbe Länge haben.",
            },
            {
              "kind": "p",
              "text": "Nennen Sie die Katheten [[a]] und [[b]] und die Hypotenuse [[c]]. Gleiche Katheten bedeuten [[a = b]], und das Seitenverhältnis ist [[a : b : c = 1 : 1 : \\sqrt{2}]]. Die Hypotenuse ist die längste Seite, wie in jedem rechtwinkligen Dreieck, und sie ist um den Faktor √2, etwa 1.414, länger als jede Kathete.",
            },
            {
              "kind": "p",
              "text": "Die beiden Arbeitsformeln sind die Hypotenuse aus einer Kathete und die Kathete aus der Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie eine Kathete von 5 cm. Die andere Kathete ist 5 cm lang, und die Hypotenuse beträgt [[c = 5\\sqrt{2} \\approx 7.071]] cm. Dieselben Schritte funktionieren bei jeder Größe: Eine Kathete von 12 cm ergibt eine Hypotenuse von [[12\\sqrt{2} \\approx 16.971]] cm, und eine Kathete von 1 Einheit ergibt eine Hypotenuse von √2 Einheiten. Der <a href=\"/45-45-90-triangle-calculator/\">45-45-90-Dreiecksrechner</a> behandelt diesen Dreieckstyp ausführlich, einschließlich Flächeninhalt und Umfang.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Ein 45-45-90-Dreieck mit zwei als kongruent markierten gleichen Katheten, Winkeln von 45°, 45° und 90° und einer mit a√2 beschrifteten Hypotenuse",
            "caption": "Ein 45-45-90-Dreieck: gleiche Katheten, gleiche spitze Winkel und eine Hypotenuse von a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Herleitung des Seitenverhältnisses 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 1:1:√2 ist keine Regel, die man blind auswendig lernen muss. Es folgt in wenigen Schritten aus dem Satz des Pythagoras, und wer die Schritte einmal gesehen hat, vergisst das Verhältnis kaum wieder. Beginnen Sie mit der Tatsache, dass die Katheten gleich sind.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Wenden Sie den Satz des Pythagoras auf die Katheten und die Hypotenuse an.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ersetzen Sie [[b]] durch [[a]], da die Katheten gleich sind.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Fassen Sie die beiden gleichen Terme zusammen.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ziehen Sie die positive Quadratwurzel auf beiden Seiten. Längen sind positiv, sodass die negative Wurzel wegfällt.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie [[a = 1]], und das Verhältnis erscheint direkt: Katheten 1 und 1, Hypotenuse √2, also ist das Verhältnis [[1 : 1 : \\sqrt{2}]]. Dasselbe Verhältnis erklärt die Diagonale eines Quadrats. Ein Quadrat mit der Seite [[a]] hat eine Diagonale, die es in zwei kongruente 45-45-90-Dreiecke teilt, und die Diagonale ist die Hypotenuse eines der beiden Dreiecke, sodass die Diagonale [[a\\sqrt{2}]] beträgt. Ein Quadrat mit einer Seite von 8 cm hat eine Diagonale von [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Ein beschriftetes 45-45-90-Dreieck, das die Herleitung nach Pythagoras zeigt: a Quadrat plus a Quadrat gleich c Quadrat, woraus c gleich a mal Wurzel 2 folgt",
              "caption": "Die Herleitung nach Pythagoras: Gleiche Katheten machen aus a² + b² = c² die Gleichung 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Ein Quadrat mit einer Seite von 8 cm und einer Diagonale von 8 Wurzel 2 cm, geteilt in zwei kongruente 45-45-90-Dreiecke",
              "caption": "Eine Quadratdiagonale teilt das Quadrat in zwei kongruente 45-45-90-Dreiecke.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Das 30-60-90-Dreieck verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat drei verschiedene Winkel, sodass es drei verschieden lange Seiten hat. Die Seite gegenüber dem kleinsten Winkel ist die kürzeste Seite, die Seite gegenüber dem mittleren Winkel ist die mittlere Seite, und die Seite gegenüber dem 90°-Winkel ist die Hypotenuse. Diese Gegenüber-Regel ist der ganze Schlüssel, um dieses Dreieck richtig zu beschriften.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie [[a]] für die kurze Kathete gegenüber 30°, [[b]] für die lange Kathete gegenüber 60° und [[c]] für die Hypotenuse gegenüber 90°. Die beiden Arbeitsformeln sind die lange Kathete aus der kurzen Kathete und die Hypotenuse aus der kurzen Kathete.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Das Seitenverhältnis ist [[a : b : c = 1 : \\sqrt{3} : 2]], wobei √3 etwa 1.732 beträgt. Nehmen Sie eine kurze Kathete von 5 cm. Die lange Kathete beträgt [[b = 5\\sqrt{3} \\approx 8.660]] cm und die Hypotenuse [[c = 10]] cm. Prüfen Sie mit dem Satz des Pythagoras: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], was bestätigt, dass die drei Seiten zusammenpassen.",
            },
            {
              "kind": "p",
              "text": "Die Hypotenuse ist immer genau doppelt so lang wie die kurze Kathete, was die schnellste Prüfung in diesem Thema ist. Wenn eine Aufgabe besagt, dass die Hypotenuse 14 cm beträgt, ist die kurze Kathete sofort 7 cm lang, und die lange Kathete folgt als [[7\\sqrt{3} \\approx 12.124]] cm. Der <a href=\"/30-60-90-triangle-calculator/\">30-60-90-Dreiecksrechner</a> behandelt diesen Dreieckstyp ausführlich, einschließlich seiner Herleitung aus dem gleichseitigen Dreieck.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Ein 30-60-90-Dreieck mit kurzer Kathete a gegenüber 30 Grad, langer Kathete a Wurzel 3 gegenüber 60 Grad und Hypotenuse 2a gegenüber 90 Grad",
            "caption": "Ein 30-60-90-Dreieck: Die kurze Kathete liegt gegenüber 30°, die lange Kathete gegenüber 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Herleitung des Seitenverhältnisses 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 1:√3:2 stammt aus einem gleichseitigen Dreieck, und die Konstruktion lohnt es sich, Schritt für Schritt zu verfolgen. Beginnen Sie mit einem gleichseitigen Dreieck, dessen Seitenlänge [[2a]] beträgt. Alle drei seiner Winkel sind 60°, und alle drei Seiten sind gleich.",
            },
            {
              "kind": "p",
              "text": "Zeichnen Sie eine Höhe von einem Eckpunkt zur gegenüberliegenden Seite. Die Höhe tut drei Dinge auf einmal: Sie teilt das gleichseitige Dreieck in zwei kongruente rechtwinklige Dreiecke, sie schneidet die Grundseite in zwei Abschnitte der Länge [[a]], und sie teilt einen 60°-Winkel in zwei 30°-Winkel. Jede Hälfte ist nun ein Dreieck mit den Winkeln 30°, 60° und 90°.",
            },
            {
              "kind": "p",
              "text": "In jeder Hälfte ist die Hypotenuse die ursprüngliche gleichseitige Seite, [[2a]], und die kurze Kathete ist die halbe Grundseite, [[a]]. Nennen Sie die Höhe, die die lange Kathete ist, [[b]]. Wenden Sie den Satz des Pythagoras auf das halbe Dreieck an.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Rechnen Sie das Quadrat aus.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Vereinfachen Sie.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Ziehen Sie die positive Quadratwurzel.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie [[a = 1]], und das Verhältnis erscheint: kurze Kathete 1, lange Kathete √3, Hypotenuse 2, also ist das Verhältnis [[1 : \\sqrt{3} : 2]]. Die Höhe eines gleichseitigen Dreiecks mit einer Seite von 10 cm beträgt daher [[5\\sqrt{3} \\approx 8.660]] cm, da die Höhe die lange Kathete eines 30-60-90-Dreiecks mit kurzer Kathete 5 cm ist.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Ein gleichseitiges Dreieck mit der Seite 2a, das durch eine Höhe in zwei kongruente 30-60-90-Dreiecke geteilt wird, jeweils mit kurzer Kathete a, langer Kathete a Wurzel 3 und Hypotenuse 2a",
            "caption": "Eine Höhe teilt ein gleichseitiges Dreieck in zwei kongruente 30-60-90-Dreiecke.",
          },
        },
        "sec-compare": {
          "h2": "Vergleich der Seitenverhältnisse der beiden speziellen Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Die beiden Verhältnisse sehen auf den ersten Blick ähnlich aus, und genau deshalb werden sie verwechselt. Beide enthalten eine Quadratwurzel und eine kleine ganze Zahl, und beide beschreiben ein rechtwinkliges Dreieck. Aber die Zahlen stehen an verschiedenen Stellen: In 1:1:√2 gehört die Wurzel zur Hypotenuse, während in 1:√3:2 die Wurzel zur langen Kathete gehört und die Hypotenuse die ganze Zahl 2 ist.",
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
                "Gleiche Katheten",
                "Ja",
                "Nein",
              ],
              [
                "Kürzeste Seite",
                "Beide Katheten",
                "Kurze Kathete",
              ],
              [
                "Längste Seite",
                "Hypotenuse",
                "Hypotenuse",
              ],
              [
                "Hypotenusenformel",
                "a√2",
                "2a",
              ],
              [
                "Formel für die lange Kathete",
                "Nicht zutreffend",
                "a√3",
              ],
              [
                "Dreieckstyp",
                "Gleichschenklig rechtwinklig",
                "Ungleichseitig rechtwinklig",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Die Formeln lassen sich nicht austauschen. Wenn man eine kurze Kathete eines 30-60-90-Dreiecks mit √2 multipliziert, erhält man eine falsche Hypotenuse, und wenn man eine Kathete eines 45-45-90-Dreiecks verdoppelt, erhält man eine falsche Hypotenuse. Die beiden Dreiecke stammen aus verschiedenen Konstruktionen, einer Quadratdiagonale für 45-45-90 und einer Höhe eines gleichseitigen Dreiecks für 30-60-90, sodass ihre Verhältnisse unterschiedliche Geometriefragen beantworten.",
            },
            {
              "kind": "p",
              "text": "Ein Zahlenbeispiel für jeden Typ zeigt den Unterschied. Ein 45-45-90-Dreieck mit einer Kathete von 5 cm hat eine Hypotenuse von [[5\\sqrt{2} \\approx 7.071]] cm. Ein 30-60-90-Dreieck mit einer kurzen Kathete von 5 cm hat eine Hypotenuse von 10 cm und eine lange Kathete von [[5\\sqrt{3} \\approx 8.660]] cm. Dieselbe Ausgangszahl, sehr unterschiedliche Antworten, und der einzige Weg, sie auseinanderzuhalten, ist das Winkelmuster.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Vergleich der Verhältnisse 45-45-90 1:1:√2 und 30-60-90 1:√3:2 nebeneinander im gleichen Maßstab",
            "caption": "Beide Verhältnisse im gleichen Maßstab: Die Wurzel liegt bei 45-45-90 auf der Hypotenuse, bei 30-60-90 auf der langen Kathete.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "So nutzen Sie den 45-45-90-Hypotenusenrechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Modus 1 ist der meistgenutzte Modus auf dieser Seite, und er dauert nur wenige Sekunden, sobald der Dreieckstyp bestätigt ist. Folgen Sie den Schritten der Reihe nach.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestätigen Sie, dass das Dreieck 45-45-90 ist: Beide spitzen Winkel messen 45°.",
                "Wählen Sie eine der beiden gleichen Katheten als bekannte Seite, da beide Katheten dieselbe Länge haben.",
                "Wählen Sie im Rechner den Modus für die Hypotenuse eines 45-45-90-Dreiecks.",
                "Geben Sie die Kathetenlänge als positive Zahl ein.",
                "Wählen Sie die Einheit, die zum Rest der Aufgabe passt.",
                "Klicken Sie auf Hypotenuse c berechnen.",
                "Lesen Sie das Ergebnis ab, das die Hypotenuse in derselben Einheit ist.",
                "Nutzen Sie Zurücksetzen, bevor Sie eine neue Berechnung starten.",
              ],
            },
            {
              "kind": "p",
              "text": "Der Modus wendet die Formel unten an.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Bei einer Kathete von 7 cm beträgt die Hypotenuse [[c = 7\\sqrt{2} \\approx 9.899]] cm. Die Formel gilt nur, wenn beide spitzen Winkel 45° betragen, prüfen Sie also die Winkel, bevor Sie der Antwort vertrauen. Wenn die Winkel stattdessen 30° und 60° betragen, wechseln Sie zu einem 30-60-90-Modus.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "So finden Sie eine Kathete aus der Hypotenuse eines 45-45-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Modus 2 arbeitet rückwärts von der Hypotenuse zu einer Kathete. Er teilt durch √2, was der Schritt ist, der am häufigsten vergessen wird. Die Formel steht unten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Dasselbe Ergebnis lässt sich in rationalisierter Form schreiben, die eine Wurzel im Nenner vermeidet.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Um den Modus zu nutzen, bestätigen Sie das 45-45-90-Winkelmuster, wählen Sie den Modus für die Kathete eines 45-45-90-Dreiecks, geben Sie die Hypotenuse ein, wählen Sie die Einheit und klicken Sie auf Berechnen. Bei einer Hypotenuse von 10 cm beträgt die Kathete [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Beide Katheten haben diese Länge, da die Katheten gleich sind, sodass die eine Antwort das ganze Dreieck beschreibt. Eine schnelle Prüfung: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], was mit dem Quadrat der Hypotenuse übereinstimmt.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "So nutzen Sie den 30-60-90-Rechner für die lange Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Modus 3 findet die lange Kathete aus der kurzen Kathete, und der einzige schwierige Teil ist, die kurze Kathete richtig zu bestimmen. Die kurze Kathete ist die Seite gegenüber dem 30°-Winkel, und sie ist immer die kürzeste Seite des Dreiecks.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestätigen Sie anhand der Winkel, dass das Dreieck 30-60-90 ist.",
                "Finden Sie die Seite gegenüber dem 30°-Winkel: Das ist die kurze Kathete.",
                "Wählen Sie im Rechner den Modus für die lange Kathete eines 30-60-90-Dreiecks.",
                "Geben Sie die kurze Kathete als positive Zahl ein.",
                "Wählen Sie die Einheit, die zum Rest der Aufgabe passt.",
                "Klicken Sie auf Lange Kathete berechnen.",
                "Lesen Sie das Ergebnis ab, das die lange Kathete in derselben Einheit ist.",
              ],
            },
            {
              "kind": "p",
              "text": "Der Modus wendet die Formel unten an.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Bei einer kurzen Kathete von 6 cm beträgt die lange Kathete [[b = 6\\sqrt{3} \\approx 10.392]] cm. Wenn Sie versehentlich die Hypotenuse oder die lange Kathete eingeben, erhalten Sie eine falsche Antwort, beschriften Sie also zuerst die Seiten und geben Sie nur die kurze Kathete ein.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "So nutzen Sie den 30-60-90-Hypotenusenrechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Modus 4 ist der einfachste Modus auf der Seite, weil die Hypotenuse eines 30-60-90-Dreiecks genau doppelt so lang ist wie die kurze Kathete. Es ist keine Quadratwurzel beteiligt, was die Antwort leicht von Hand zu prüfen macht.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestätigen Sie anhand der Winkel, dass das Dreieck 30-60-90 ist.",
                "Bestimmen Sie die kurze Kathete, die Seite gegenüber dem 30°-Winkel.",
                "Wählen Sie im Rechner den Modus für die Hypotenuse eines 30-60-90-Dreiecks.",
                "Geben Sie die kurze Kathete als positive Zahl ein.",
                "Wählen Sie die Einheit, die zum Rest der Aufgabe passt.",
                "Klicken Sie auf Hypotenuse c berechnen.",
                "Lesen Sie das Ergebnis ab, das die Hypotenuse in derselben Einheit ist.",
              ],
            },
            {
              "kind": "p",
              "text": "Der Modus wendet die Formel unten an.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Bei einer kurzen Kathete von 8 cm beträgt die Hypotenuse [[c = 16]] cm. Die lange Kathete desselben Dreiecks beträgt [[8\\sqrt{3} \\approx 13.856]] cm, was zwischen der kurzen Kathete und der Hypotenuse liegt, wie es sein sollte. Wenn ein Ergebnis jemals kleiner als die kurze Kathete ausfällt, wurde der falsche Modus gewählt.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Schritt-für-Schritt-Beispiele für beide speziellen Dreieckstypen",
          "blocks": [
            {
              "kind": "p",
              "text": "Diese beiden durchgerechneten Beispiele lösen jede Seite jedes Dreieckstyps aus einer bekannten Seite. Flächeninhalt und Umfang erscheinen hier als zusätzliche manuelle Berechnungen, nicht als Rechnermodi: Der Rechner auf dieser Seite findet nur Seitenlängen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: 45-45-90-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben ist ein 45-45-90-Dreieck mit der Kathete [[a = 5]] cm. Finden Sie die andere Kathete, die Hypotenuse, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "p",
              "text": "Die Katheten sind gleich, sodass die andere Kathete [[b = 5]] cm beträgt. Die Hypotenuse folgt aus dem Verhältnis.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt ist die Hälfte des Produkts der Katheten.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Der Umfang ist die Summe aller drei Seiten.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: 30-60-90-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben ist ein 30-60-90-Dreieck mit der kurzen Kathete [[a = 5]] cm. Finden Sie die lange Kathete, die Hypotenuse, den Flächeninhalt und den Umfang.",
            },
            {
              "kind": "p",
              "text": "Die lange Kathete ist die kurze Kathete mal √3, und die Hypotenuse ist doppelt so lang wie die kurze Kathete.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt ist die Hälfte des Produkts der Katheten.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Der Umfang ist die Summe aller drei Seiten.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Beide Beispiele lassen sich mit dem Satz des Pythagoras überprüfen. Für das erste gilt [[5^2 + 5^2 = 50]] und [[7.071^2 \\approx 50]]. Für das zweite gilt [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Flächeninhalt und Umfang bei speziellen rechtwinkligen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Flächeninhalt und Umfang sind nützliche Folgeberechnungen, sobald die Seiten bekannt sind, aber sie sind manuelle Beziehungen, keine Funktionen des Rechners auf dieser Seite. Die Formeln unten verwenden dieselben Seitenbezeichnungen wie der Rest der Anleitung, wobei [[a]] die bekannte Kathete für 45-45-90 und die kurze Kathete für 30-60-90 ist.",
            },
            {
              "kind": "p",
              "text": "Für ein 45-45-90-Dreieck ist der Flächeninhalt die Hälfte des Quadrats einer Kathete, und der Umfang ist die Kathete mal [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Für ein 30-60-90-Dreieck ist der Flächeninhalt die Hälfte des Produkts der Katheten, und der Umfang ist die kurze Kathete mal [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie ein 45-45-90-Dreieck mit einer Kathete von 6 cm. Sein Flächeninhalt beträgt [[A = \\frac{36}{2} = 18]] cm², und sein Umfang beträgt [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Nehmen Sie ein 30-60-90-Dreieck mit einer kurzen Kathete von 6 cm. Sein Flächeninhalt beträgt [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², und sein Umfang beträgt [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Achten Sie auf die Einheiten: Der Flächeninhalt steht immer in Quadrateinheiten und der Umfang in Längeneinheiten, sodass eine Antwort von 18 cm für einen Flächeninhalt ein Einheitenfehler ist, kein Rundungsfehler.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Exakte Wurzelantworten im Vergleich zu Dezimalnäherungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadratwurzeln in dieser Anleitung sind irrationale Zahlen, was bedeutet, dass ihre Dezimalentwicklungen niemals enden und sich niemals wiederholen. Die beiden Werte, die man kennen sollte, stehen unten.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Eine exakte Antwort lässt die Wurzel stehen, wie etwa [[5\\sqrt{2}]], während eine Dezimalantwort sie durch eine Näherung ersetzt, wie etwa [[5\\sqrt{2} \\approx 7.071]]. Exakte Antworten werden in der Schulmathematik bevorzugt, weil sie keinen Rundungsfehler enthalten und die Struktur der Aufgabe zeigen. Ein Lehrer kann sofort sehen, dass [[5\\sqrt{2}]] aus einem 45-45-90-Dreieck stammt, während 7.071 von überall her stammen könnte.",
            },
            {
              "kind": "p",
              "text": "Dezimalzahlen sind besser für praktische Messungen, bei denen ein Lineal oder ein Schneidwerkzeug eine Zahl braucht, kein Symbol. Wenn eine Dezimalzahl gebraucht wird, runden Sie erst am Ende der Berechnung, niemals zwischendurch. Wenn man √2 vor dem Multiplizieren mit 5 auf 1.41 rundet, erhält man 7.05, was um 0.021 vom wahren Wert 7.071 abweicht, und der Fehler wächst bei größeren Zahlen. Kennzeichnen Sie jede Dezimalzahl mit dem Ungefähr-gleich-Zeichen, damit ein Leser [[5\\sqrt{3} \\approx 8.660]] niemals mit einer exakten Gleichheit verwechselt.",
            },
          ],
        },
        "sec-verify": {
          "h2": "So überprüfen Sie Berechnungen bei speziellen rechtwinkligen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Jede Antwort zu einem speziellen Dreieck lässt sich in unter einer Minute mit drei Prüfungen kontrollieren: dem Seitenverhältnis, dem Satz des Pythagoras und der Winkelsumme. Führen Sie mindestens zwei davon durch, bevor Sie einem Ergebnis vertrauen.",
            },
            {
              "kind": "p",
              "text": "Bei einem 45-45-90-Dreieck prüfen Sie, dass die Katheten gleich sind, [[a = b]], und dass die Seiten den Satz des Pythagoras erfüllen, [[a^2 + b^2 = c^2]]. Mit [[a = 5]] cm und [[c = 7.071]] cm lautet die Prüfung [[25 + 25 = 50]] gegenüber [[7.071^2 \\approx 50]], was übereinstimmt.",
            },
            {
              "kind": "p",
              "text": "Bei einem 30-60-90-Dreieck prüfen Sie, dass die lange Kathete die kurze Kathete mal √3 ist, [[b = a\\sqrt{3}]], dass die Hypotenuse doppelt so lang ist wie die kurze Kathete, [[c = 2a]], und dass [[a^2 + b^2 = c^2]] gilt. Mit [[a = 5]] cm, [[b = 8.660]] cm und [[c = 10]] cm lautet die Prüfung [[25 + 75 = 100 = 10^2]], was übereinstimmt.",
            },
            {
              "kind": "p",
              "text": "Überprüfen Sie auch die Winkelsumme: Die drei Winkel müssen zusammen 180° ergeben. Ein 45-45-90-Dreieck ergibt [[45° + 45° + 90° = 180°]], und ein 30-60-90-Dreieck ergibt [[30° + 60° + 90° = 180°]]. Wenn das Verhältnis, der Satz und die Winkel alle übereinstimmen, ist die Antwort solide. Wenn eine der Prüfungen fehlschlägt, wurde der Dreieckstyp falsch bestimmt oder die falsche Formel verwendet.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler beim Lösen spezieller rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn Fehler verursachen fast jede falsche Antwort in diesem Thema. Jeder ist unten mit der richtigen Vorgehensweise aufgeführt, sodass Sie Ihren eigenen Fehler schnell finden können.",
            },
            {
              "kind": "list",
              "items": [
                "45-45-90- mit 30-60-90-Dreiecken verwechseln. Prüfen Sie zuerst die Winkel: Zwei 45°-Winkel bedeuten 45-45-90, während 30° und 60° 30-60-90 bedeuten.",
                "√3 statt √2 verwenden. Die Hypotenuse eines 45-45-90-Dreiecks ist [[c = a\\sqrt{2}]], niemals [[a\\sqrt{3}]].",
                "√2 statt √3 verwenden. Die lange Kathete eines 30-60-90-Dreiecks ist [[b = a\\sqrt{3}]], niemals [[a\\sqrt{2}]].",
                "Annehmen, dass beide Katheten in einem 30-60-90-Dreieck gleich sind. Nur das 45-45-90-Dreieck hat gleiche Katheten; in einem 30-60-90-Dreieck ist die lange Kathete √3-mal so lang wie die kurze Kathete.",
                "Annehmen, dass kurze und lange Kathete gleich sind. Die kurze Kathete liegt gegenüber 30° und die lange Kathete gegenüber 60°, sodass sie sich um den Faktor √3 unterscheiden.",
                "Vergessen, dass die Hypotenuse eines 30-60-90-Dreiecks doppelt so lang ist wie die kurze Kathete. Sie ist [[c = 2a]], eine Verdopplung mit ganzen Zahlen ohne Quadratwurzel.",
                "Die falsche Eingabeseite verwenden. Modus 3 und Modus 4 brauchen beide die kurze Kathete, sodass die Eingabe der langen Kathete oder der Hypotenuse eine falsche Antwort ergibt.",
                "Die kurze Kathete mit der Hypotenuse verwechseln. Die Hypotenuse ist die längste Seite und liegt gegenüber dem 90°-Winkel; die kurze Kathete ist die kürzeste Seite.",
                "Vergessen, durch √2 zu teilen, wenn man eine Kathete eines 45-45-90-Dreiecks sucht. Die Kathete ist [[a = \\frac{c}{\\sqrt{2}}]], nicht [[a = c\\sqrt{2}]], was die Kathete länger als die Hypotenuse machen würde.",
                "Vergessen, mit √3 zu multiplizieren, wenn man eine lange Kathete eines 30-60-90-Dreiecks sucht. Die lange Kathete ist [[b = a\\sqrt{3}]], und die Verwendung von [[a]] allein ergibt die kurze Kathete zurück.",
                "Wurzeln zu früh runden. Halten Sie [[\\sqrt{2}]] und [[\\sqrt{3}]] durch jeden Schritt exakt und runden Sie erst die endgültige Antwort.",
                "Einheiten vermischen. Eine Kathete in cm und eine Hypotenuse in mm können nicht eine Formel teilen; rechnen Sie zuerst um, dann berechnen Sie.",
                "Flächeninhalt und Umfang verwechseln. Der Flächeninhalt verwendet Quadrateinheiten und die Formel [[A = \\frac{a^2}{2}]] für 45-45-90, während der Umfang Längeneinheiten und [[P = a(2 + \\sqrt{2})]] verwendet.",
                "Formeln für spezielle Dreiecke auf beliebige rechtwinklige Dreiecke anwenden. Die Verhältnisse 1:1:√2 und 1:√3:2 gelten nur für ihre eigenen Winkelmuster; ein 20-70-90-Dreieck braucht stattdessen Trigonometrie.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen spezieller rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Spezielle rechtwinklige Dreiecke tauchen überall dort auf, wo Quadrate, gleichseitige Dreiecke und Standardwinkel vorkommen. Eine Quadratdiagonale ist eine 45-45-90-Aufgabe: Eine quadratische Tischplatte mit einer Seite von 60 cm hat eine Diagonale von [[60\\sqrt{2} \\approx 84.853]] cm. Eine Höhe eines gleichseitigen Dreiecks ist eine 30-60-90-Aufgabe: Ein dreieckiges Schild mit einer Seite von 40 cm hat eine Höhe von [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "Im Unterricht machen diese Dreiecke Geometriehausaufgaben und Trigonometrieübungen schneller, weil Standardwinkel wie 30°, 45° und 60° exakte Sinus- und Kosinuswerte haben, die direkt aus diesen Verhältnissen stammen. Beim technischen Zeichnen und bei der Zeichnung mit Standardwinkeln sind 45°- und 30-60-Zeichendreiecke genau auf diesen Dreiecken aufgebaut, sodass ein Zeichner eine 45°-Linie oder eine 30°-Linie anlegen kann und die Seitenverhältnisse im Voraus kennt.",
            },
            {
              "kind": "p",
              "text": "Architektur- und Designkonzepte verwenden dieselben Muster für diagonale Verstrebungen, Dachneigungen und Fliesenlayouts, und die Baugeometrie nutzt sie für schnelle Prüfungen vor Ort, etwa um zu bestätigen, dass eine Ecke rechtwinklig ist, indem man eine Diagonale im 3-4-5-Stil oder eine 45-45-90-Diagonale misst. Mathematische Modellierung und Unterrichtsvorführungen nutzen sie ebenfalls, da die exakten Wurzelantworten das Denken sichtbar lassen, statt es in einem Rechner zu verstecken. Betrachten Sie diese als Geometrieabkürzungen zum Planen und Prüfen, nicht als Ersatz für eine ordnungsgemäße technische Messung, wo Präzision erforderlich ist.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Bearbeiten Sie jede Aufgabe selbst und prüfen Sie dann die Lösung. Fragen zu Flächeninhalt und Umfang sind manuelle Übungen, keine Rechnermodi. Verwenden Sie andere Zahlen als in den Hauptbeispielen, damit die Muster neu angewendet werden müssen.",
            },
            {
              "kind": "h3",
              "text": "45-45-90-Aufgaben",
            },
            {
              "kind": "steps",
              "steps": [
                "Ein 45-45-90-Dreieck hat eine Kathete von 7 cm. Finden Sie die Hypotenuse. Lösung: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Ein 45-45-90-Dreieck hat eine Hypotenuse von 12 cm. Finden Sie eine Kathete. Lösung: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Ein 45-45-90-Dreieck hat eine Kathete von 9 cm. Finden Sie den Flächeninhalt. Lösung: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Ein 45-45-90-Dreieck hat eine Kathete von 4 cm. Finden Sie den Umfang. Lösung: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90-Aufgaben",
            },
            {
              "kind": "steps",
              "steps": [
                "Ein 30-60-90-Dreieck hat eine kurze Kathete von 7 cm. Finden Sie die lange Kathete. Lösung: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Ein 30-60-90-Dreieck hat eine kurze Kathete von 9 cm. Finden Sie die Hypotenuse. Lösung: [[c = 2 \\times 9 = 18]] cm.",
                "Ein 30-60-90-Dreieck hat eine kurze Kathete von 6 cm. Finden Sie den Flächeninhalt. Lösung: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Ein 30-60-90-Dreieck hat eine kurze Kathete von 10 cm. Finden Sie den Umfang. Lösung: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Verwandte rechtwinklige Dreiecksrechner",
      "relatedIntro": "Jedes Werkzeug unten löst eine andere Art von rechtwinkligem Dreiecksproblem. Wählen Sie das, das zu den Informationen passt, die Sie bereits haben.",
      "relatedItems": [
        "45-45-90-Dreiecksrechner",
        "30-60-90-Dreiecksrechner",
        "Rechner für rechtwinklige Dreiecksseiten",
        "Rechner für trigonometrische Verhältnisse",
        "Rechner für rechtwinklige Dreieckswinkel",
        "Rechner für den Satz des Pythagoras",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein spezielles rechtwinkliges Dreieck?",
          "answer": "Ein spezielles rechtwinkliges Dreieck ist ein rechtwinkliges Dreieck, dessen Winkel sein Seitenverhältnis festlegen, sodass eine bekannte Seite jede andere Seite bestimmt. Die zwei Typen sind das 45-45-90-Dreieck mit dem Verhältnis [[1 : 1 : \\sqrt{2}]] und das 30-60-90-Dreieck mit dem Verhältnis [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Welche speziellen rechtwinkligen Dreiecke deckt dieser Rechner ab?",
          "answer": "Dieser Rechner deckt das 45-45-90-Dreieck und das 30-60-90-Dreieck ab, die beiden speziellen rechtwinkligen Dreiecke, die in der Schulgeometrie verwendet werden. Er hat vier Modi: 45-45-90-Hypotenuse aus einer Kathete, 45-45-90-Kathete aus einer Hypotenuse, 30-60-90-lange Kathete aus einer kurzen Kathete und 30-60-90-Hypotenuse aus einer kurzen Kathete.",
        },
        {
          "question": "Wie lautet das Seitenverhältnis eines 45-45-90-Dreiecks?",
          "answer": "Das Seitenverhältnis eines 45-45-90-Dreiecks ist [[1 : 1 : \\sqrt{2}]]. Die beiden Katheten sind gleich, und die Hypotenuse ist die Kathete mal √2, etwa 1.414. Bei einer Kathete von 5 cm beträgt die Hypotenuse [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Wie lautet das Seitenverhältnis eines 30-60-90-Dreiecks?",
          "answer": "Das Seitenverhältnis eines 30-60-90-Dreiecks ist [[1 : \\sqrt{3} : 2]]. Die kurze Kathete liegt gegenüber 30°, die lange Kathete gegenüber 60° und die Hypotenuse gegenüber 90°. Bei einer kurzen Kathete von 5 cm beträgt die lange Kathete [[5\\sqrt{3} \\approx 8.660]] cm und die Hypotenuse 10 cm.",
        },
        {
          "question": "Warum erscheint √2 in einem 45-45-90-Dreieck?",
          "answer": "Die √2 stammt aus dem Satz des Pythagoras, angewendet auf zwei gleiche Katheten. Mit [[a = b]] ergibt der Satz [[a^2 + a^2 = c^2]], also [[2a^2 = c^2]] und [[c = a\\sqrt{2}]]. Die Wurzel ist der Preis dafür, zwei gleiche Quadrate in ein Hypotenusenquadrat zu verwandeln.",
        },
        {
          "question": "Warum erscheint √3 in einem 30-60-90-Dreieck?",
          "answer": "Die √3 stammt aus der Halbierung eines gleichseitigen Dreiecks. Eine Höhe teilt ein gleichseitiges Dreieck mit der Seite [[2a]] in zwei 30-60-90-Dreiecke, und der Satz des Pythagoras auf einer Hälfte ergibt [[b^2 = 3a^2]], sodass die lange Kathete [[b = a\\sqrt{3}]] ist.",
        },
        {
          "question": "Wie finde ich die Hypotenuse eines 45-45-90-Dreiecks?",
          "answer": "Multiplizieren Sie eine der beiden gleichen Katheten mit √2. Die Formel ist [[c = a\\sqrt{2}]]. Zum Beispiel ergibt eine Kathete von 7 cm eine Hypotenuse von [[7\\sqrt{2} \\approx 9.899]] cm. Wählen Sie den 45-45-90-Hypotenusenmodus, geben Sie die Kathete ein und klicken Sie auf Berechnen.",
        },
        {
          "question": "Wie finde ich die lange Kathete eines 30-60-90-Dreiecks?",
          "answer": "Multiplizieren Sie die kurze Kathete mit √3. Die Formel ist [[b = a\\sqrt{3}]]. Zum Beispiel ergibt eine kurze Kathete von 6 cm eine lange Kathete von [[6\\sqrt{3} \\approx 10.392]] cm. Achten Sie darauf, dass Sie die kurze Kathete, die Seite gegenüber dem 30°-Winkel, eingeben, nicht die Hypotenuse.",
        },
        {
          "question": "Kann ich die fehlende Kathete aus der Hypotenuse berechnen?",
          "answer": "Ja, bei einem 45-45-90-Dreieck. Teilen Sie die Hypotenuse durch √2 und verwenden Sie [[a = \\frac{c}{\\sqrt{2}}]] oder die rationalisierte Form [[a = \\frac{c\\sqrt{2}}{2}]]. Eine Hypotenuse von 10 cm ergibt eine Kathete von [[5\\sqrt{2} \\approx 7.071]] cm, und beide Katheten haben diese Länge.",
        },
        {
          "question": "Sind alle speziellen rechtwinkligen Dreiecke innerhalb ihres eigenen Typs ähnlich?",
          "answer": "Ja. Jedes 45-45-90-Dreieck hat dieselben Winkel und dasselbe Verhältnis 1:1:√2, sodass zwei beliebige ähnlich sind. Jedes 30-60-90-Dreieck teilt ebenfalls das Verhältnis 1:√3:2. Ein 45-45-90-Dreieck ist niemals ähnlich zu einem 30-60-90-Dreieck, weil sich ihre Winkel unterscheiden.",
        },
        {
          "question": "Was ist der Unterschied zwischen den beiden speziellen Dreieckstypen?",
          "answer": "Ein 45-45-90-Dreieck hat zwei gleiche Katheten und das Verhältnis 1:1:√2, während ein 30-60-90-Dreieck drei verschiedene Seiten und das Verhältnis 1:√3:2 hat. Das erste stammt aus einer Quadratdiagonale, das zweite aus der Höhe eines gleichseitigen Dreiecks, und ihre Formeln lassen sich nicht austauschen.",
        },
        {
          "question": "Wie kann ich meine berechneten Seitenlängen überprüfen?",
          "answer": "Prüfen Sie das Seitenverhältnis, den Satz des Pythagoras und die Winkelsumme. Für 45-45-90 bestätigen Sie [[a = b]] und [[a^2 + b^2 = c^2]]. Für 30-60-90 bestätigen Sie [[b = a\\sqrt{3}]], [[c = 2a]] und [[a^2 + b^2 = c^2]]. Wenn alle drei Prüfungen übereinstimmen, ist die Antwort solide.",
        },
      ],
    },
};
