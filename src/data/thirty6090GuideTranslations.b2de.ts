// thirty6090GuideTranslations.bde.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B2_DE = {
  "de": {
      "meta": {
        "title": "30-60-90-Dreieck-Rechner - Seiten, Fläche, Umfang",
        "description": "Nutzen Sie den 30-60-90-Dreieck-Rechner, um die kurze Kathete, die lange Kathete, die Hypotenuse, den Flächeninhalt und den Umfang aus einer bekannten Seite mit dem Verhältnis 1:√3:2 zu berechnen.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Inhalt des Leitfadens",
      "tocItems": {
        "sec-intro": "30-60-90-Dreieck-Rechner",
        "sec-calculate": "Fehlende Seiten, Fläche und Umfang berechnen",
        "sec-what": "Was ist ein 30-60-90-Dreieck?",
        "sec-sides": "Kurze Kathete, lange Kathete und Hypotenuse verstehen",
        "sec-ratio": "Das Seitenverhältnis des 30-60-90-Dreiecks",
        "sec-why-sqrt3": "Warum taucht die Quadratwurzel aus 3 auf?",
        "sec-long-leg": "Formel für die lange Kathete aus der kurzen Kathete",
        "sec-hypotenuse": "Formel für die Hypotenuse aus der kurzen Kathete",
        "sec-short-leg-hyp": "Formel für die kurze Kathete aus der Hypotenuse",
        "sec-short-leg-long": "Formel für die kurze Kathete aus der langen Kathete",
        "sec-long-leg-hyp": "Formel für die lange Kathete aus der Hypotenuse",
        "sec-area": "So berechnen Sie den Flächeninhalt eines 30-60-90-Dreiecks",
        "sec-perimeter": "So berechnen Sie den Umfang eines 30-60-90-Dreiecks",
        "sec-step-example": "Schritt-für-Schritt-Beispiel zur Lösung eines 30-60-90-Dreiecks",
        "sec-examples": "Durchgerechnete Beispiele für 30-60-90-Dreiecke",
        "sec-derive-pythagoras": "So leiten Sie das 30-60-90-Verhältnis mit Pythagoras her",
        "sec-equilateral": "Zusammenhang zwischen 30-60-90-Dreiecken und gleichseitigen Dreiecken",
        "sec-trig": "Trigonometrische Beziehungen im 30-60-90-Dreieck",
        "sec-verify": "So prüfen Sie Ihre 30-60-90-Berechnungen",
        "sec-properties": "Wichtige Eigenschaften von 30-60-90-Dreiecken",
        "sec-mistakes": "Häufige Fehler beim Lösen von 30-60-90-Dreiecken",
        "sec-applications": "Praktische Anwendungen von 30-60-90-Dreiecken",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
        "sec-faq": "Häufig gestellte Fragen",
      },
      "sections": {
        "sec-intro": {
          "h2": "30-60-90-Dreieck-Rechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Finden Sie jede fehlende Seite, den Flächeninhalt und den Umfang eines 30-60-90-Dreiecks aus einer einzigen bekannten Seite.",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck ist ein rechtwinkliges Dreieck, dessen drei Winkel 30°, 60° und 90° messen. Es heißt spezielles rechtwinkliges Dreieck, weil seine Seitenlängen immer demselben festen Verhältnis folgen, egal wie groß oder klein das Dreieck ist. Der 30-60-90-Dreieck-Rechner auf dieser Seite nutzt dieses Verhältnis, um aus einer von Ihnen eingegebenen Seitenlänge die kurze Kathete, die lange Kathete, die Hypotenuse, den Flächeninhalt und den Umfang zu finden.",
            },
            {
              "kind": "p",
              "text": "Im Dreieck ABC beträgt Winkel A 30°, Winkel B 60° und Winkel C 90°. Seite BC ist die kurze Kathete [[a]], gegenüber dem 30°-Winkel. Seite AC ist die lange Kathete [[b]], gegenüber dem 60°-Winkel. Seite AB ist die Hypotenuse [[c]], gegenüber dem 90°-Winkel. Die drei Seiten erfüllen immer [[a : b : c = 1 : \\sqrt{3} : 2]], was bedeutet, dass [[b = a\\sqrt{3}]] und [[c = 2a]] gilt.",
            },
            {
              "kind": "p",
              "text": "Wenn [[a = 5]] cm ist, dann ist [[b = 5\\sqrt{3} \\approx 8.660]] cm und [[c = 2 \\times 5 = 10]] cm. Der Rechner kann aus derselben kurzen Kathete auch den Flächeninhalt und den Umfang berechnen, sodass eine Messung ausreicht, um das ganze Dreieck zu beschreiben. Die Abschnitte unten erklären das Verhältnis, die sieben Rechnermodi und die Formeln, mit durchgerechneten Beispielen bei jedem Schritt.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Fehlende Seiten, Fläche und Umfang berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Sieben Modi decken jede Möglichkeit ab, von einer bekannten Seite aus zu starten.",
            },
            {
              "kind": "p",
              "text": "Der Rechner auf dieser Seite hat sieben Modi, einen für jede Messung, die er finden kann. Wählen Sie den Modus, der zu der Seite passt, die Sie kennen, und zu der Messung, die Sie brauchen. Jeder Modus fragt nur nach einer Eingabe, weil das feste Verhältnis alles andere ergänzt. Die Tabelle unten listet alle sieben Modi mit der jeweils benötigten Eingabe und dem Ergebnis auf.",
            },
            {
              "kind": "p",
              "text": "Um einen Modus zu nutzen, stellen Sie zuerst fest, welche Seite Sie kennen. Die Seite gegenüber dem 30°-Winkel ist die kurze Kathete [[a]], die Seite gegenüber dem 60°-Winkel ist die lange Kathete [[b]] und die Seite gegenüber dem 90°-Winkel ist die Hypotenuse [[c]]. Geben Sie diese Messung als positive Zahl ein, wählen Sie eine Einheit und klicken Sie auf die Schaltfläche Berechnen. Das Ergebnis erscheint mit einer Schritt-für-Schritt-Rechnung, sodass Sie die Formel und das Einsetzen sehen, nicht nur die Antwort. Mit Zurücksetzen leeren Sie die Felder, bevor Sie eine neue Aufgabe beginnen.",
            },
            {
              "kind": "p",
              "text": "Unterschiedliche Modi brauchen unterschiedliche Formeln, weil jeder von einer anderen bekannten Seite ausgeht. Die lange Kathete aus der kurzen Kathete zu finden, multipliziert mit √3, während die kurze Kathete aus der Hypotenuse zu finden durch 2 teilt. Die Flächen- und Umfangmodi starten mit der kurzen Kathete und berechnen zuerst intern die anderen Seiten, wenden dann die Flächen- oder Umfangsformel an. Sie müssen die fehlenden Seiten nie selbst ausrechnen, bevor Sie diese beiden Modi nutzen.",
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
                "Lange Kathete aus kurzer Kathete",
                "Kurze Kathete a",
                "Lange Kathete b",
              ],
              [
                "Hypotenuse aus kurzer Kathete",
                "Kurze Kathete a",
                "Hypotenuse c",
              ],
              [
                "Kurze Kathete aus Hypotenuse",
                "Hypotenuse c",
                "Kurze Kathete a",
              ],
              [
                "Kurze Kathete aus langer Kathete",
                "Lange Kathete b",
                "Kurze Kathete a",
              ],
              [
                "Lange Kathete aus Hypotenuse",
                "Hypotenuse c",
                "Lange Kathete b",
              ],
              [
                "Fläche aus kurzer Kathete",
                "Kurze Kathete a",
                "Fläche A",
              ],
              [
                "Umfang aus kurzer Kathete",
                "Kurze Kathete a",
                "Umfang P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Überblick über die sieben Modi des 30-60-90-Rechners mit der bekannten Eingabe und dem berechneten Ergebnis für jeden Modus",
            "caption": "Sieben Modi: Jeder startet mit einer einzigen bekannten Seite und findet eine fehlende Messung.",
          },
        },
        "sec-what": {
          "h2": "Was ist ein 30-60-90-Dreieck?",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck ist nach seinen drei Winkeln benannt.",
            },
            {
              "kind": "p",
              "text": "Es ist ein rechtwinkliges Dreieck, das heißt, einer seiner Winkel beträgt genau 90°. Die beiden anderen Winkel sind 30° und 60°, und der Name listet alle drei der Reihe nach auf. Da der rechte Winkel feststeht und die beiden anderen Winkel ebenfalls feststehen, ist die Form des Dreiecks vollständig bestimmt: Jedes 30-60-90-Dreieck hat dieselbe Form, und zwei solche Dreiecke unterscheiden sich nur in der Größe.",
            },
            {
              "kind": "p",
              "text": "Es heißt spezielles rechtwinkliges Dreieck, weil seine Seitenlängen einem festen Verhältnis folgen. Bei den meisten rechtwinkligen Dreiecken sagt Ihnen eine bekannte Seite nichts über die anderen. Bei einem 30-60-90-Dreieck sagt Ihnen eine bekannte Seite alle anderen, weil das Verhältnis [[1 : \\sqrt{3} : 2]] die drei Seiten aneinander bindet. Deshalb kann der Rechner aus einer einzigen Eingabe fünf Messungen finden.",
            },
            {
              "kind": "p",
              "text": "Die drei Winkel ergeben zusammen 180°, wie es bei jedem Dreieck sein muss: [[30° + 60° + 90° = 180°]]. Das Dreieck kann wenige Millimeter klein oder so groß wie ein Baugrundstück sein, und die Winkel bleiben gleich, während die Seiten gemeinsam wachsen. Auch das Verhältnis bleibt gleich, sodass ein Dreieck mit kurzer Kathete 5 cm und ein Dreieck mit kurzer Kathete 5 m dieselbe Form in unterschiedlicher Größe haben.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Beschriftetes 30-60-90-Dreieck ABC mit den Winkeln 30, 60 und 90 Grad, kurzer Kathete a, langer Kathete a mal Quadratwurzel aus 3 und Hypotenuse 2a",
            "caption": "Dreieck ABC: Winkel 30°, 60° und 90°, mit den Seiten a, a√3 und 2a.",
          },
        },
        "sec-sides": {
          "h2": "Kurze Kathete, lange Kathete und Hypotenuse verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Die drei Seiten haben ihre Namen von den Winkeln, die ihnen gegenüberliegen.",
            },
            {
              "kind": "p",
              "text": "Die kurze Kathete [[a]] ist die Seite gegenüber dem 30°-Winkel. Sie ist die kürzeste Seite des Dreiecks, weil der kleinste Winkel immer der kürzesten Seite gegenüberliegt. Im Dreieck ABC ist sie die Seite BC. Die kurze Kathete ist der natürliche Ausgangspunkt für die meisten Berechnungen, weil die beiden anderen Seiten einfache Vielfache von ihr sind: Die lange Kathete ist [[a\\sqrt{3}]] und die Hypotenuse ist [[2a]].",
            },
            {
              "kind": "p",
              "text": "Die lange Kathete [[b]] ist die Seite gegenüber dem 60°-Winkel. Sie ist länger als die kurze Kathete und kürzer als die Hypotenuse. Im Dreieck ABC ist sie die Seite AC. Ihre Länge beträgt [[\\sqrt{3} \\approx 1.732]] mal die kurze Kathete, sie ist also etwas weniger als doppelt so lang. Die Hypotenuse [[c]] ist die Seite gegenüber dem 90°-Winkel, Seite AB, und sie ist die längste Seite des Dreiecks, genau doppelt so lang wie die kurze Kathete.",
            },
            {
              "kind": "p",
              "text": "Seiten anhand ihrer gegenüberliegenden Winkel zu bestimmen, ist verlässlicher, als nach dem Aussehen der Zeichnung zu urteilen. Ein Dreieck kann gedreht oder gespiegelt sein, sodass die kurze Kathete links, rechts oder unten erscheinen kann. Die Regel mit dem gegenüberliegenden Winkel ändert sich nie: Finden Sie den 30°-Winkel, und die Seite ihm gegenüber ist die kurze Kathete. Finden Sie den 90°-Winkel, der mit einem kleinen Quadrat markiert ist, und die Seite ihm gegenüber ist die Hypotenuse.",
            },
          ],
          "table": {
            "headers": [
              "Seite",
              "Gegenüberliegender Winkel",
              "Größe",
            ],
            "rows": [
              [
                "Kurze Kathete a",
                "30°",
                "Kleinste",
              ],
              [
                "Lange Kathete b",
                "60°",
                "Mittlere",
              ],
              [
                "Hypotenuse c",
                "90°",
                "Längste",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Das Seitenverhältnis des 30-60-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis 1:√3:2 legt jedes 30-60-90-Dreieck fest.",
            },
            {
              "kind": "p",
              "text": "Das Seitenverhältnis eines 30-60-90-Dreiecks lautet:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Jeder Teil des Verhältnisses beschreibt eine Seite. Die kurze Kathete steht für eine Einheit, die lange Kathete für √3 Einheiten und die Hypotenuse für zwei Einheiten. Mit der kurzen Kathete als [[a]] geschrieben, lauten die drei Seiten [[a = a]], [[b = a\\sqrt{3}]] und [[c = 2a]]. Wenn die kurze Kathete 1 cm beträgt, ist die lange Kathete √3 cm und die Hypotenuse 2 cm. Wenn die kurze Kathete 10 cm beträgt, ist die lange Kathete [[10\\sqrt{3}]] cm und die Hypotenuse 20 cm.",
            },
            {
              "kind": "p",
              "text": "Das Verhältnis bleibt gleich, egal wie groß das Dreieck ist, weil alle 30-60-90-Dreiecke ähnlich sind. Ein Dreieck zu vergrößern oder zu verkleinern, multipliziert jede Seite mit demselben Faktor, sodass die Proportionen zwischen den Seiten sich nicht ändern. Nehmen Sie als Beispiel [[a = 4]] cm: Die lange Kathete ist [[b = 4\\sqrt{3} \\approx 6.928]] cm und die Hypotenuse ist [[c = 8]] cm, und das Verhältnis [[4 : 6.928 : 8]] ist dasselbe wie [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Behalten Sie nach Möglichkeit immer die exakte Wurzelform bei. √3 ist ungefähr 1.732, aber es ist eine irrationale Zahl, sodass keine Dezimalzahl ihr genau entspricht. [[4\\sqrt{3}]] cm zu schreiben, ist exakt, während 6.928 cm eine gerundete Näherung ist. Verwenden Sie die exakte Form in Ihrer Rechnung und in Endergebnissen, wenn die Aufgabe einen exakten Wert verlangt, und geben Sie die Dezimalzahl nur an, wenn eine ungefähre Antwort gebraucht wird.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Drei Balken, die die kurze Kathete, die lange Kathete und die Hypotenuse im Verhältnis 1 zu Quadratwurzel aus 3 zu 2 vergleichen",
            "caption": "Das feste Verhältnis 1:√3:2 vergleicht die kurze Kathete, die lange Kathete und die Hypotenuse.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Warum taucht die Quadratwurzel aus 3 auf?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Quadratwurzel aus 3 entsteht, wenn man ein gleichseitiges Dreieck halbiert.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit einem gleichseitigen Dreieck der Seitenlänge [[2a]]. Alle drei Seiten sind gleich und alle drei Winkel sind 60°. Zeichnen Sie nun eine Höhe von einem Eckpunkt zur gegenüberliegenden Seite. Die Höhe ist die Linie vom Eckpunkt, die die gegenüberliegende Seite im rechten Winkel trifft.",
            },
            {
              "kind": "p",
              "text": "Die Höhe halbiert die Grundseite und teilt sie in zwei gleiche Abschnitte der Länge [[a]]. Sie teilt das gleichseitige Dreieck auch in zwei kongruente rechtwinklige Dreiecke. Jedes kleinere Dreieck hat die Winkel 30°, 60° und 90°: Der 60°-Winkel an der Grundseite bleibt erhalten, die Höhe erzeugt einen 90°-Winkel, wo sie auf die Grundseite trifft, und der 60°-Winkel an der Spitze wird in zwei 30°-Winkel geteilt. Die Hypotenuse jedes kleinen Dreiecks ist die Seite des gleichseitigen Dreiecks, [[2a]], und die kurze Kathete ist die halbe Grundseite, [[a]].",
            },
            {
              "kind": "p",
              "text": "Die verbleibende Kathete des kleinen Dreiecks ist die Höhe selbst. Nennen Sie sie [[b]] und wenden Sie den Satz des Pythagoras an:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Die 3 unter der Wurzel kommt von [[4a^2 - a^2 = 3a^2]], der Differenz zwischen dem Quadrat der Hypotenuse und dem Quadrat der kurzen Kathete. Das ist der ganze Grund, warum √3 in jeder 30-60-90-Formel vorkommt: Die lange Kathete ist die Höhe eines gleichseitigen Dreiecks, und Pythagoras zwingt sie zu [[a\\sqrt{3}]]. Die Herleitung beweist auch das Seitenverhältnis, denn die drei Seiten des kleinen Dreiecks sind nun [[a]], [[a\\sqrt{3}]] und [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Gleichseitiges Dreieck der Seite 2a, durch eine Höhe in zwei kongruente 30-60-90-Dreiecke geteilt, mit Höhe a mal Quadratwurzel aus 3",
            "caption": "Eine Höhe teilt ein gleichseitiges Dreieck der Seite 2a in zwei 30-60-90-Dreiecke.",
          },
        },
        "sec-long-leg": {
          "h2": "Formel für die lange Kathete aus der kurzen Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplizieren Sie die kurze Kathete mit √3, um die lange Kathete zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[b]] die lange Kathete und [[a]] die kurze Kathete. Die Formel ist eine direkte Ablesung des Seitenverhältnisses: Die lange Kathete steht für √3 Einheiten pro 1 Einheit kurzer Kathete, sodass die lange Kathete √3-mal so lang ist wie die kurze Kathete. Multiplizieren ist nötig, weil das Verhältnis eine Skalierungsbeziehung ist, und √3 taucht auf, weil die lange Kathete die Höhe des gleichseitigen Dreiecks ist, das dieses Dreieck erzeugt.",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie als Beispiel [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist länger als die kurze Kathete, wie es sein muss: √3 ist etwa 1.732, sodass die Multiplikation damit die Länge vergrößert. Die exakte Antwort ist [[5\\sqrt{3}]] cm, und 8.660 cm ist die Dezimalnäherung. Behalten Sie die exakte Form bei, wenn die Aufgabe sie verlangt, und runden Sie die Dezimalzahl erst am Ende Ihrer Rechnung, nie mittendrin.",
            },
            {
              "kind": "p",
              "text": "Nutzen Sie diesen Modus, wenn die kurze Kathete die bekannte Seite ist und die lange Kathete die unbekannte. In einer Schulbuchaufgabe ist die kurze Kathete gewöhnlich die Seite gegenüber dem 30°-Winkel, prüfen Sie also den Winkel, bevor Sie multiplizieren. Eine schnelle Plausibilitätsprüfung hilft: Die lange Kathete sollte etwas weniger als doppelt so lang wie die kurze Kathete herauskommen, da √3 etwas weniger als 2 ist. Wenn Ihre Antwort mehr als doppelt so lang wie die kurze Kathete ist, haben Sie mit der falschen Zahl multipliziert.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "30-60-90-Dreieck mit kurzer Kathete 5 cm und langer Kathete, beschriftet mit 5 mal Quadratwurzel aus 3, etwa 8.660 cm",
            "caption": "Lange Kathete aus kurzer Kathete: a = 5 cm ergibt b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formel für die Hypotenuse aus der kurzen Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Verdoppeln Sie die kurze Kathete, um die Hypotenuse zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[c]] die Hypotenuse und [[a]] die kurze Kathete. Die Hypotenuse ist immer genau doppelt so lang wie die kurze Kathete, ohne Quadratwurzel. Dies ist die einfachste der 30-60-90-Formeln und zugleich die nützlichste für schnelle Kopfrechnungen.",
            },
            {
              "kind": "p",
              "text": "Der Grund geht auf das gleichseitige Dreieck zurück. Die Hypotenuse des 30-60-90-Dreiecks ist eine volle Seite des gleichseitigen Dreiecks, während die kurze Kathete eine halbe Seite ist, weil die Höhe die Grundseite halbiert. Eine volle Seite ist doppelt so lang wie eine halbe Seite, sodass die Hypotenuse doppelt so lang ist wie die kurze Kathete. Nehmen Sie [[a = 7]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Antwort ist exakt, ohne Rundung, weil das Verdoppeln einer ganzen Zahl eine ganze Zahl ergibt. Wenn die kurze Kathete eine Dezimalzahl ist, ist die Hypotenuse trotzdem genau doppelt so lang, sodass [[a = 2.5]] cm [[c = 5]] cm ergibt.",
            },
            {
              "kind": "p",
              "text": "Dieser Modus ist der richtige, wenn eine Aufgabe die kurze Kathete gibt und nach der längsten Seite fragt. Da die Antwort ein einfaches Verdoppeln ist, ist sie auch der schnellste Weg, eine falsche kurze Kathete zu erkennen: Wenn die Hypotenuse in der Aufgabe nicht doppelt so lang ist wie Ihre kurze Kathete, ist entweder die kurze Kathete falsch oder das Dreieck ist kein 30-60-90-Dreieck. Prüfen Sie die Winkel, bevor Sie dem Verdoppeln vertrauen.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "30-60-90-Dreieck mit kurzer Kathete 5 cm und Hypotenuse, beschriftet mit 2a gleich 10 cm",
            "caption": "Hypotenuse aus kurzer Kathete: c = 2a, also ergibt a = 5 cm c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Formel für die kurze Kathete aus der Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Halbieren Sie die Hypotenuse, um die kurze Kathete zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[a]] die kurze Kathete und [[c]] die Hypotenuse. Diese Formel ist die Umkehrung von [[c = 2a]]: Da die Hypotenuse doppelt so lang ist wie die kurze Kathete, ist die kurze Kathete halb so lang wie die Hypotenuse. Umstellen von [[c = 2a]] durch Teilen beider Seiten durch 2 ergibt [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[c = 18]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Antwort ist exakt, ohne Quadratwurzel und ohne Rundung. Diese Beziehung gilt speziell für 30-60-90-Dreiecke. In einem allgemeinen rechtwinkligen Dreieck ist die Hypotenuse nicht doppelt so lang wie die kurze Kathete, verwenden Sie diese Formel also nicht, es sei denn, Sie wissen, dass die Winkel 30°, 60° und 90° sind. Wenn die Hypotenuse eine ungerade Zahl ist, ist die kurze Kathete ein halber Wert, zum Beispiel ergibt [[c = 15]] cm [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Dieser Modus ist der Ausgangspunkt für die meisten Aufgaben, die die Hypotenuse angeben. Sobald die kurze Kathete bekannt ist, folgt die lange Kathete aus [[b = a\\sqrt{3}]] und Flächeninhalt und Umfang folgen aus ihren eigenen Formeln. Eine Antwort mit halbem Wert ist hier normal und kein Zeichen eines Fehlers, runden Sie also 7.5 cm nicht auf 8 cm: Die exakte Hälfte ist die richtige Antwort.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Formel für die kurze Kathete aus der langen Kathete",
          "blocks": [
            {
              "kind": "p",
              "text": "Teilen Sie die lange Kathete durch √3, um die kurze Kathete zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[a]] die kurze Kathete und [[b]] die lange Kathete. Diese Formel entsteht durch Umstellen von [[b = a\\sqrt{3}]]: Das Teilen beider Seiten durch √3 isoliert [[a]]. Das Teilen durch √3 kehrt die ursprüngliche Multiplikation um, macht also genau rückgängig, was die Vorwärtsformel getan hat.",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Machen Sie den Nenner rational, indem Sie Zähler und Nenner mit √3 multiplizieren: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, was ungefähr 6.928 cm ist. Die exakte Antwort ist [[4\\sqrt{3}]] cm, und 6.928 cm ist die Dezimalform. Die kurze Kathete ist kleiner als die lange Kathete, wie es sein muss, da das Teilen durch eine Zahl größer als 1 den Wert verkleinert.",
            },
            {
              "kind": "p",
              "text": "Das Rationalmachen lohnt sich, weil es die Antwort in der üblichen exakten Form hinterlässt, eine ganze Zahl mal √3. Eine Dezimalnäherung verbirgt diese Struktur, und ein unrationalisierter Bruch mit √3 im Nenner ist nicht die Form, die Prüfungsantworten erwarten. Wenn die lange Kathete bereits ein Vielfaches von √3 ist, ist die Division glatt: [[b = 9\\sqrt{3}]] cm ergibt direkt [[a = 9]] cm.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Formel für die lange Kathete aus der Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplizieren Sie die halbe Hypotenuse mit √3, um die lange Kathete zu erhalten.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Hier ist [[b]] die lange Kathete und [[c]] die Hypotenuse. Diese Formel baut auf zwei Schritten auf. Finden Sie zuerst die kurze Kathete mit [[a = \\frac{c}{2}]], dann finden Sie die lange Kathete mit [[b = a\\sqrt{3}]]. Das Einsetzen der ersten Formel in die zweite ergibt [[b = \\frac{c}{2}\\sqrt{3}]], was dasselbe ist wie [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[c = 16]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis liegt zwischen der kurzen Kathete und der Hypotenuse, wie es sollte. Die kurze Kathete hier ist [[a = 8]] cm, die lange Kathete ist etwa 13.856 cm und die Hypotenuse ist 16 cm, also [[8 < 13.856 < 16]]. Diese Reihenfolge ist eine schnelle Prüfung für jede Antwort aus dieser Formel.",
            },
            {
              "kind": "p",
              "text": "Die Berechnung in zwei Schritten ist eine gute Gewohnheit, auch wenn die einzelne Formel beides auf einmal tut. Finden Sie zuerst die kurze Kathete, [[a = \\frac{c}{2} = 8]] cm, und multiplizieren Sie dann mit √3. Wenn der Zwei-Schritte-Weg und die einzelne Formel nicht übereinstimmen, liegt der Fehler in der Arithmetik, nicht in der Formel, und der Zwei-Schritte-Weg zeigt genau, wo er passiert ist.",
            },
          ],
        },
        "sec-area": {
          "h2": "So berechnen Sie den Flächeninhalt eines 30-60-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Flächeninhalt braucht nur die kurze Kathete, weil die lange Kathete aus ihr folgt.",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt eines jeden rechtwinkligen Dreiecks ist die Hälfte des Produkts seiner beiden Katheten, weil die Katheten als Grundseite und senkrechte Höhe wirken:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Da [[b = a\\sqrt{3}]] gilt, ersetzen Sie, um den Flächeninhalt allein aus der kurzen Kathete zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Die Division durch zwei ist nötig, weil ein Dreieck die Hälfte des Rechtecks bedeckt, das seine beiden Katheten bilden. Der endgültige Flächeninhalt wird in Quadrateinheiten angegeben, zum Beispiel in Quadratzentimetern, weil der Flächeninhalt eine Fläche misst, keine Länge. Nehmen Sie [[a = 6]] cm. Finden Sie zuerst die lange Kathete, [[b = 6\\sqrt{3}]] cm, und rechnen Sie dann:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Der Flächenmodus des Rechners nimmt die kurze Kathete entgegen und berechnet die lange Kathete intern, Sie geben also nur [[a]] ein und der Rechner erledigt den Rest. Wenn Sie stattdessen die lange Kathete kennen, nutzen Sie den <a href=\"/right-triangle-area-calculator/\">Rechner für die Fläche rechtwinkliger Dreiecke</a>, der beide Katheten direkt annimmt.",
            },
            {
              "kind": "p",
              "text": "Der Flächeninhalt wächst mit dem Quadrat der kurzen Kathete, sodass das Verdoppeln der kurzen Kathete den Flächeninhalt vervierfacht. Ein Dreieck mit [[a = 12]] cm hat viermal den Flächeninhalt des Dreiecks mit [[a = 6]] cm, etwa 124.708 cm², nicht doppelt so viel. Diese quadratische Beziehung vergisst man leicht, prüfen Sie sie also, wenn eine Aufgabe ein Dreieck vergrößert oder verkleinert.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "30-60-90-Dreieck mit kurzer Kathete 6 cm und langer Kathete 6 mal Quadratwurzel aus 3 cm als Grundseite und Höhe, Flächeninhalt 18 mal Quadratwurzel aus 3 Quadratzentimeter",
            "caption": "Fläche aus der kurzen Kathete: a = 6 cm ergibt A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "So berechnen Sie den Umfang eines 30-60-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Addieren Sie alle drei Seiten und klammern Sie dann die kurze Kathete aus.",
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
              "text": "Setzen Sie die Beziehungen des speziellen Dreiecks ein, [[b = a\\sqrt{3}]] und [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Fassen Sie die gleichartigen Terme zusammen, um die vereinfachte Form zu erhalten:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Alle drei Seitenlängen sind enthalten, weil der Umfang die volle Grenze des Dreiecks nachzeichnet: die kurze Kathete hinunter, die lange Kathete entlang und die Hypotenuse zurück. Lässt man eine Seite weg, ergibt sich eine kürzere Strecke, die nicht der Umfang ist. Der Umfang ist eine Längenmessung, keine Flächenmessung, die Antwort steht also in einfachen Einheiten wie Zentimetern, nie in Quadratzentimetern.",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die exakte Form ist [[5(3 + \\sqrt{3})]] cm, und 23.660 cm ist die Dezimalform. Der Umfangsmodus des Rechners nimmt die kurze Kathete entgegen und addiert die drei Seiten intern. Wenn Sie bereits alle drei Seiten kennen, addiert der <a href=\"/right-triangle-perimeter-calculator/\">Rechner für den Umfang rechtwinkliger Dreiecke</a> sie direkt.",
            },
            {
              "kind": "p",
              "text": "Der Umfang wächst direkt proportional zur kurzen Kathete, sodass das Verdoppeln der kurzen Kathete den Umfang verdoppelt. Ein Dreieck mit [[a = 10]] cm hat einen Umfang von etwa 47.321 cm, genau doppelt so viel wie die 23.660 cm des Dreiecks mit [[a = 5]] cm. Diese lineare Skalierung ist eine nützliche Prüfung: Wenn das Verdoppeln der kurzen Kathete Ihren Umfang nicht verdoppelt, ist in der Arithmetik etwas schiefgegangen.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "30-60-90-Dreieck mit allen drei Seiten, beschriftet mit 5 cm, 5 mal Quadratwurzel aus 3 cm und 10 cm, Umfang etwa 23.660 cm",
            "caption": "Umfang aus der kurzen Kathete: a = 5 cm ergibt P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Schritt-für-Schritt-Beispiel zur Lösung eines 30-60-90-Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Ein Dreieck, a = 5 cm, von Anfang bis Ende durchgerechnet.",
            },
            {
              "kind": "p",
              "text": "Beginnen Sie mit der kurzen Kathete [[a = 5]] cm und finden Sie jede andere Messung des Dreiecks, eine Formel nach der anderen. Jeder Schritt nutzt eine Formel aus den Abschnitten oben, und die Übersichtstabelle am Ende sammelt die Ergebnisse.",
            },
            {
              "kind": "steps",
              "steps": [
                "Finden Sie die lange Kathete: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Finden Sie die Hypotenuse: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Finden Sie den Flächeninhalt: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] Quadratzentimeter.",
                "Finden Sie den Umfang: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Alle vier Messungen beschreiben dasselbe Dreieck. Die Seiten [[5]], [[8.660]] und [[10]] erfüllen das Verhältnis [[1 : \\sqrt{3} : 2]] und den Satz des Pythagoras, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. Flächeninhalt und Umfang sind zwei verschiedene Arten von Messungen desselben Dreiecks: Der Flächeninhalt bedeckt seine Oberfläche, während der Umfang seine Grenze nachzeichnet.",
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
                "Kurze Kathete a",
                "5 cm",
                "5 cm",
              ],
              [
                "Lange Kathete b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hypotenuse c",
                "10 cm",
                "10 cm",
              ],
              [
                "Fläche A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Umfang P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele für 30-60-90-Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Acht durchgerechnete Beispiele, eines für jeden Rechnermodus plus ein größerer Fall.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Lange Kathete finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 4]] cm. Formel: [[b = a\\sqrt{3}]]. Einsetzen: [[b = 4\\sqrt{3}]]. Ergebnis: [[b \\approx 6.928]] cm. Die lange Kathete ist etwa 1.732-mal so lang wie die kurze Kathete, aus 4 cm werden also etwa 6.928 cm. Die exakte Antwort ist [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 9]] cm. Formel: [[c = 2a]]. Einsetzen: [[c = 2 \\times 9]]. Ergebnis: [[c = 18]] cm. Die Hypotenuse ist genau doppelt so lang wie die kurze Kathete, die Antwort braucht also keine Rundung. Dies ist die schnellste Prüfung im ganzen Thema: Jede Hypotenuse, die nicht doppelt so lang ist wie die kurze Kathete, deutet auf einen Fehler hin.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: Kurze Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[c = 20]] cm. Formel: [[a = \\frac{c}{2}]]. Einsetzen: [[a = \\frac{20}{2}]]. Ergebnis: [[a = 10]] cm. Das Halbieren der Hypotenuse kehrt das Verdoppeln in Beispiel 2 um. Die kurze Kathete ist genau halb so lang wie die Hypotenuse, die Antwort ist also exakt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Kurze Kathete aus der langen Kathete finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[b = 15]] cm. Formel: [[a = \\frac{b}{\\sqrt{3}}]]. Einsetzen: [[a = \\frac{15}{\\sqrt{3}}]]. Rationalmachen ergibt [[a = 5\\sqrt{3}]] cm, das Ergebnis ist also [[a \\approx 8.660]] cm. Das Teilen durch √3 verkleinert die lange Kathete zurück zur kurzen Kathete, was die Umkehrung des Multiplizierens mit √3 ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Lange Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Gegeben [[c = 12]] cm. Formel: [[b = \\frac{c\\sqrt{3}}{2}]]. Einsetzen: [[b = \\frac{12\\sqrt{3}}{2}]]. Ergebnis: [[b = 6\\sqrt{3} \\approx 10.392]] cm. Die lange Kathete liegt zwischen der kurzen Kathete, [[a = 6]] cm, und der Hypotenuse, 12 cm, was die Reihenfolge [[a < b < c]] bestätigt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Flächeninhalt berechnen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 8]] cm. Formel: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Einsetzen: [[A = \\frac{64\\sqrt{3}}{2}]]. Ergebnis: [[A = 32\\sqrt{3} \\approx 55.426]] Quadratzentimeter. Die exakte Antwort ist [[32\\sqrt{3}]] cm², und die Dezimalzahl ist auf drei Stellen gerundet. Der Flächeninhalt steht in Quadrateinheiten, anders als die Seitenlängen.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Umfang berechnen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 3]] cm. Formel: [[P = a(3 + \\sqrt{3})]]. Einsetzen: [[P = 3(3 + \\sqrt{3})]]. Ergebnis: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Das Addieren der Seiten eine nach der anderen ergibt dasselbe Ergebnis: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Der Umfang steht in einfachen Einheiten, nicht in Quadrateinheiten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 8: Größere Messungen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a = 10]] m. Formel: [[b = a\\sqrt{3}]] und [[c = 2a]]. Einsetzen: [[b = 10\\sqrt{3}]] m und [[c = 2 \\times 10]] m. Ergebnis: [[b \\approx 17.321]] m und [[c = 20]] m. Das Verhältnis funktioniert in jedem Maßstab: Dieses Dreieck ist das Dreieck mit [[a = 5]] cm verdoppelt, jede Seite ist also doppelt so lang und das Verhältnis [[1 : \\sqrt{3} : 2]] bleibt unverändert.",
            },
            {
              "kind": "p",
              "text": "Exakte Antworten und Dezimalnäherungen dienen unterschiedlichen Zwecken. Die exakte Form, zum Beispiel [[4\\sqrt{3}]] cm, ist präzise und wird in Prüfungsantworten gewöhnlich verlangt. Die Dezimalform, zum Beispiel 6.928 cm, ist leichter vorstellbar und mit einem Lineal zu messen. Geben Sie zuerst die exakte Form an, dann die Dezimalzahl, und runden Sie die Dezimalzahl erst im letzten Schritt.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "So leiten Sie das 30-60-90-Verhältnis mit Pythagoras her",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis folgt aus Pythagoras plus einer Tatsache: Die Hypotenuse ist doppelt so lang wie die kurze Kathete.",
            },
            {
              "kind": "p",
              "text": "Sei [[a]] die kurze Kathete, [[b]] die lange Kathete und [[c]] die Hypotenuse. Aus der Konstruktion mit dem gleichseitigen Dreieck ist die Hypotenuse doppelt so lang wie die kurze Kathete:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Wenden Sie nun den Satz des Pythagoras an, der für jedes rechtwinklige Dreieck gilt:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Setzen Sie [[c = 2a]] ein:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Stellen Sie um, indem Sie [[a^2]] von beiden Seiten subtrahieren:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Ziehen Sie die Quadratwurzel auf beiden Seiten. Längen sind positiv, die negative Wurzel fällt also weg:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Die drei Seiten sind nun [[a]], [[a\\sqrt{3}]] und [[2a]], was das Verhältnis [[a : b : c = 1 : \\sqrt{3} : 2]] ergibt. Jede Seitenformel auf dieser Seite kommt aus dieser festen Beziehung: Die Formel für die lange Kathete liest sie direkt ab, die Hypotenusenformel ist die Ausgangstatsache, und die Flächen- und Umfangsformeln setzen die beiden Seitenausdrücke ein. Der <a href=\"/pythagorean-theorem-calculator/\">Rechner für den Satz des Pythagoras</a> prüft dieselbe Beziehung für jedes rechtwinklige Dreieck.",
            },
            {
              "kind": "p",
              "text": "Der Beweis braucht nur zwei Zutaten, und beide sind leicht zu formulieren. Die erste ist die Tatsache [[c = 2a]], die aus dem gleichseitigen Dreieck kommt. Die zweite ist der Satz des Pythagoras, der für jedes rechtwinklige Dreieck gilt. Sonst wird nichts angenommen, der Beweis zeigt also, dass das Verhältnis allein durch diese beiden Tatsachen erzwungen wird, nicht durch einen Sonderfall oder einen Zufall.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Zusammenhang zwischen 30-60-90-Dreiecken und gleichseitigen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Jedes 30-60-90-Dreieck ist die Hälfte eines gleichseitigen Dreiecks.",
            },
            {
              "kind": "p",
              "text": "Ein gleichseitiges Dreieck hat drei gleiche Seiten und drei gleiche Winkel von 60°. Zeichnen Sie eine Höhe von einem Eckpunkt zur gegenüberliegenden Seite, und die Höhe halbiert die Grundseite in zwei gleiche Hälften. Sie teilt auch den 60°-Winkel am oberen Eckpunkt in zwei 30°-Winkel. Das Ergebnis sind zwei kongruente rechtwinklige Dreiecke, jedes mit den Winkeln 30°, 60° und 90°.",
            },
            {
              "kind": "p",
              "text": "Jede Hälfte behält eine volle Seite des gleichseitigen Dreiecks als Hypotenuse, nimmt eine halbe Seite als kurze Kathete und nutzt die Höhe als lange Kathete. Deshalb ist die Hypotenuse doppelt so lang wie die kurze Kathete und die lange Kathete [[a\\sqrt{3}]] lang. Die Beziehung mit √3 taucht auf, weil die Höhe eines gleichseitigen Dreiecks immer [[\\frac{\\sqrt{3}}{2}]] mal die Seitenlänge beträgt, was dieselbe Tatsache mit anderen Buchstaben geschrieben ist.",
            },
            {
              "kind": "p",
              "text": "Diese Konstruktion ist in Geometrie und Trigonometrie nützlich, weil sie das gleichseitige Dreieck zu einer Quelle exakter Werte macht. Die Höhe eines gleichseitigen Dreiecks der Seite 10 cm ist [[5\\sqrt{3} \\approx 8.660]] cm, gefunden, indem man seine Hälfte als 30-60-90-Dreieck mit kurzer Kathete 5 cm behandelt. Dieselbe Konstruktion liefert die exakten Sinus-, Kosinus- und Tangenswerte für 30° und 60°, weshalb diese Werte in jeder Trigonometrietabelle stehen.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Trigonometrische Beziehungen im 30-60-90-Dreieck",
          "blocks": [
            {
              "kind": "p",
              "text": "Das feste Verhältnis liefert exakte Sinus-, Kosinus- und Tangenswerte für 30° und 60°.",
            },
            {
              "kind": "p",
              "text": "Trigonometrische Verhältnisse vergleichen Seiten eines rechtwinkligen Dreiecks. Sinus ist Gegenkathete durch Hypotenuse, Kosinus ist Ankathete durch Hypotenuse und Tangens ist Gegenkathete durch Ankathete. Da die Seiten eines 30-60-90-Dreiecks immer im Verhältnis [[1 : \\sqrt{3} : 2]] stehen, ergeben diese Vergleiche immer dieselben Werte, egal wie groß das Dreieck ist.",
            },
            {
              "kind": "p",
              "text": "Für den 30°-Winkel ist die gegenüberliegende Seite die kurze Kathete [[a]] und die anliegende Seite die lange Kathete [[b]], also [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] und [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Für den 60°-Winkel tauschen die gegenüberliegende und die anliegende Seite, also [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] und [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Beachten Sie die Symmetrie: [[\\sin 30° = \\cos 60°]] und [[\\cos 30° = \\sin 60°]], weil die beiden spitzen Winkel Komplemente sind, die sich zu 90° ergänzen. Diese Werte stimmen genau mit dem festen Seitenverhältnis überein, was eine gute Gegenprüfung ist: Wenn ein Sinuswert nicht zum Verhältnis passt, ist einer von beiden falsch. Betrachten Sie diesen Abschnitt als Hintergrund: Der Rechner auf dieser Seite findet Seiten, Fläche und Umfang und berechnet keine trigonometrischen Funktionen als Modus.",
            },
          ],
          "table": {
            "headers": [
              "Winkel",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "So prüfen Sie Ihre 30-60-90-Berechnungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier schnelle Prüfungen fangen fast jeden Fehler ab.",
            },
            {
              "kind": "p",
              "text": "Führen Sie bei jeder Antwort mindestens eine Prüfung durch, und alle vier, wenn die Aufgabe wichtig ist. Das Beispiel unten nutzt durchgehend das Dreieck mit [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm und [[c = 10]] cm.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Seitenverhältnis",
            },
            {
              "kind": "p",
              "text": "Teilen Sie die lange Kathete durch die kurze Kathete und die Hypotenuse durch die kurze Kathete: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] und [[\\frac{c}{a} = 2]]. Hier ist [[\\frac{8.660}{5} \\approx 1.732]] und [[\\frac{10}{5} = 2]], das Verhältnis gilt also. Wenn eine der beiden Divisionen einen anderen Wert ergibt, ist eine der Seiten falsch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a^2 + b^2 = c^2]]. Hier ist [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], der Satz gilt also. Diese Prüfung fängt vertauschte Katheten ab, weil ein falscher Wert für [[b]] die Gleichheit bricht. Der <a href=\"/pythagorean-theorem-calculator/\">Rechner für den Satz des Pythagoras</a> führt diese Prüfung für beliebige drei Seitenlängen durch.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Winkelsumme",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[30° + 60° + 90° = 180°]]. Diese Prüfung betrifft den Aufbau der Aufgabe und nicht die Arithmetik: Wenn die Winkel Ihres Dreiecks sich nicht zu 180° ergänzen oder wenn sie nicht 30°, 60° und 90° sind, gelten die 30-60-90-Formeln überhaupt nicht, und keine Seitenlänge aus ihnen kann stimmen.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 4: Seitenreihenfolge",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a < b < c]]. Hier ist [[5 < 8.660 < 10]], die Reihenfolge gilt also. Die kurze Kathete muss die kleinste Seite sein, die lange Kathete muss in der Mitte liegen und die Hypotenuse muss die längste sein. Jede Antwort, die diese Reihenfolge bricht, etwa eine lange Kathete, die länger ist als die Hypotenuse, ist auf den ersten Blick falsch.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Wichtige Eigenschaften von 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn Eigenschaften folgen aus dem festen Verhältnis.",
            },
            {
              "kind": "list",
              "items": [
                "Das Dreieck hat immer Winkel von 30°, 60° und 90°, und diese Winkel ergeben immer zusammen 180°.",
                "Die kurze Kathete liegt dem 30°-Winkel gegenüber, und sie ist die kleinste Seite des Dreiecks.",
                "Die lange Kathete liegt dem 60°-Winkel gegenüber, und sie liegt in der Länge zwischen der kurzen Kathete und der Hypotenuse.",
                "Die Hypotenuse liegt dem 90°-Winkel gegenüber, und sie ist die längste Seite des Dreiecks.",
                "Die Hypotenuse ist doppelt so lang wie die kurze Kathete, [[c = 2a]], ohne Quadratwurzel.",
                "Die lange Kathete ist √3-mal so lang wie die kurze Kathete, [[b = a\\sqrt{3}]], wobei [[\\sqrt{3} \\approx 1.732]] gilt.",
                "Das Seitenverhältnis [[1 : \\sqrt{3} : 2]] ist unabhängig von der Größe des Dreiecks, sodass das Skalieren des Dreiecks das Verhältnis unverändert lässt.",
                "Alle 30-60-90-Dreiecke sind ähnlich, weil sie dieselben drei Winkel und dieselben Seitenproportionen haben.",
                "Der Flächeninhalt hängt vom Quadrat der kurzen Kathete ab, [[A = \\frac{a^2\\sqrt{3}}{2}]], sodass das Verdoppeln der kurzen Kathete den Flächeninhalt vervierfacht.",
                "Der Umfang skaliert direkt mit der kurzen Kathete, [[P = a(3 + \\sqrt{3})]], sodass das Verdoppeln der kurzen Kathete den Umfang verdoppelt.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler beim Lösen von 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Vierzehn Fehler tauchen in 30-60-90-Aufgaben immer wieder auf.",
            },
            {
              "kind": "steps",
              "steps": [
                "Kurze und lange Kathete verwechseln: Die kurze Kathete liegt 30° gegenüber und die lange Kathete 60°. Bestimmen Sie jede Seite anhand ihres gegenüberliegenden Winkels, nicht danach, wie das Diagramm gedreht ist. Richtig: [[a]] gegenüber 30°, [[b]] gegenüber 60°.",
                "√2 statt √3 verwenden: √2 gehört zum 45-45-90-Dreieck, dessen Verhältnis [[1 : 1 : \\sqrt{2}]] lautet. Ein 30-60-90-Dreieck verwendet immer √3. Richtig: [[b = a\\sqrt{3}]].",
                "Die kurze Kathete mit 2 multiplizieren, um die lange Kathete zu finden: Das Verdoppeln ergibt die Hypotenuse, nicht die lange Kathete. Für [[a = 5]] cm ergibt das Verdoppeln 10 cm, was [[c]] ist, während die lange Kathete [[5\\sqrt{3} \\approx 8.660]] cm ist. Richtig: [[b = a\\sqrt{3}]].",
                "[[a\\sqrt{3}]] als Hypotenuse verwenden: Die Hypotenuse ist [[2a]], nicht [[a\\sqrt{3}]]. Für [[a = 5]] cm ist [[a\\sqrt{3} \\approx 8.660]] cm die lange Kathete, und die Hypotenuse ist 10 cm. Richtig: [[c = 2a]].",
                "Vergessen, dass die Hypotenuse [[2a]] entspricht: Schüler wenden manchmal Pythagoras an, um die Hypotenuse zu finden, obwohl Verdoppeln genügen würde. Verdoppeln ist schneller und exakt. Richtig: [[c = 2a]].",
                "Durch 2 statt durch √3 teilen, wenn man die kurze Kathete aus der langen Kathete findet: Das Teilen von [[b]] durch 2 ergibt [[\\frac{b}{2}]], was nicht die kurze Kathete ist. Für [[b = 12]] cm ergibt das Teilen durch 2 6 cm, während die richtige kurze Kathete [[4\\sqrt{3} \\approx 6.928]] cm ist. Richtig: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Vergessen, bei der Flächenberechnung durch zwei zu teilen: Der Flächeninhalt ist die Hälfte des Produkts der Katheten. [[A = ab]] zu verwenden, verdoppelt den wahren Flächeninhalt. Für [[a = 6]] cm ist [[ab = 36\\sqrt{3}]] cm² doppelt so viel wie die richtigen [[18\\sqrt{3}]] cm². Richtig: [[A = \\frac{ab}{2}]].",
                "Nur zwei Seiten addieren, wenn man den Umfang berechnet: Der Umfang braucht alle drei Seiten. Nur die beiden Katheten zu addieren, ergibt für [[a = 5]] cm [[5 + 5\\sqrt{3} \\approx 13.660]] cm, während der wahre Umfang etwa 23.660 cm beträgt. Richtig: [[P = a + b + c]].",
                "Exakte Antworten mit Dezimalnäherungen verwechseln: [[5\\sqrt{3}]] cm ist exakt, während 8.660 cm gerundet ist. 8.660 cm so zu schreiben, als wäre es exakt, verliert die Genauigkeit, die die Wurzel bewahrt. Richtig: Geben Sie zuerst die exakte Form an, dann die Dezimalzahl.",
                "√3 zu früh runden: 1.73 für √3 mitten in einer Rechnung zu verwenden, verschiebt jeden späteren Schritt. Für [[a = 5]] cm ergibt [[5 \\times 1.73 = 8.65]] cm statt 8.660 cm. Richtig: Halten Sie √3 durch die Rechnung exakt und runden Sie erst die endgültige Antwort.",
                "Messeinheiten vermischen: Eine kurze Kathete in Zentimetern und eine Hypotenuse in Metern lassen sich nicht direkt kombinieren. Rechnen Sie jede Messung vor dem Berechnen in eine Einheit um. Richtig: 0.5 m entspricht 50 cm, rechnen Sie dann in Zentimetern.",
                "Die Formeln auf ein Dreieck mit anderen Winkeln anwenden: Die Formeln [[b = a\\sqrt{3}]] und [[c = 2a]] gelten nur, wenn die Winkel 30°, 60° und 90° sind. Ein rechtwinkliges Dreieck mit Winkeln von 40° und 50° hat ein anderes Verhältnis. Richtig: Bestätigen Sie zuerst die Winkel und nutzen Sie dann die Formeln.",
                "Die gegenüberliegenden Seiten von 30 Grad und 60 Grad verwechseln: Die Seite gegenüber 30° ist die kurze Kathete und die Seite gegenüber 60° ist die lange Kathete, nie umgekehrt. Sie zu vertauschen, macht die lange Kathete kürzer als die kurze Kathete, was unmöglich ist. Richtig: [[a]] gegenüber 30°, [[b]] gegenüber 60°.",
                "Vergessen, dass der Flächeninhalt Quadrateinheiten braucht: Ein Flächeninhalt von 31.177 cm ist schon von der Einheit her falsch, selbst wenn die Zahl stimmt. Der Flächeninhalt misst eine Oberfläche, er beträgt also 31.177 Quadratzentimeter. Richtig: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen von 30-60-90-Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Verhältnis taucht überall auf, wo ein 30°- oder 60°-Winkel auf einen rechten Winkel trifft.",
            },
            {
              "kind": "p",
              "text": "Die häufigste Verwendung sind Geometrie-Hausaufgaben und Trigonometrieübungen, in denen 30-60-90-Aufgaben prüfen, ob Schüler die kurze Kathete erkennen, das Verhältnis anwenden und exakte Wurzelantworten behalten können. Höhenberechnungen bei gleichseitigen Dreiecken nutzen dieselbe Idee umgekehrt: Die Höhe eines gleichseitigen Dreiecks ist die lange Kathete des 30-60-90-Dreiecks, das entsteht, wenn man es halbiert, sodass eine Seite von 10 cm eine Höhe von [[5\\sqrt{3} \\approx 8.660]] cm ergibt.",
            },
            {
              "kind": "p",
              "text": "Technisches Zeichnen, Architektur und Baugeometrie nutzen 30-60-90-Beziehungen, wenn ein Entwurf einen 30°- oder 60°-Winkel verlangt, etwa bei einer Dachneigung, einer Rampe oder einer Diagonalstrebe. Ein Bauarbeiter, der eine Seite eines solchen Dreiecks kennt, kann die anderen finden, ohne sie direkt zu messen. Unterrichtsdemonstrationen nutzen das Dreieck, um zu zeigen, wie ein festes Verhältnis aus einer Messung eine vollständige Beschreibung einer Form macht.",
            },
            {
              "kind": "p",
              "text": "Mathematische Modellierung nutzt das Verhältnis überall dort, wo diagonale und Höhenbeziehungen in geometrischen Formen exakte Werte brauchen, zum Beispiel in sechseckigen Mustern, in denen die 60°-Winkel eines regelmäßigen Sechsecks 30-60-90-Dreiecke innerhalb der Form erzeugen. Dies sind realistische Verwendungen der Geometrie selbst, keine Behauptungen über technische Toleranzen: Echte Entwurfsarbeit fügt den exakten geometrischen Werten auf dieser Seite Materialgrenzen und Sicherheitsmargen hinzu.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Bearbeiten Sie alle sechs Aufgaben auf Papier, bevor Sie die Lösungen lesen.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Lange Kathete aus der kurzen Kathete finden",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine kurze Kathete von [[a = 6]] cm. Finden Sie die lange Kathete [[b]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Hypotenuse aus der kurzen Kathete finden",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine kurze Kathete von [[a = 11]] cm. Finden Sie die Hypotenuse [[c]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Kurze Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine Hypotenuse von [[c = 24]] cm. Finden Sie die kurze Kathete [[a]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Lange Kathete aus der Hypotenuse finden",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine Hypotenuse von [[c = 14]] cm. Finden Sie die lange Kathete [[b]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Flächeninhalt aus der kurzen Kathete berechnen",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine kurze Kathete von [[a = 9]] cm. Finden Sie den Flächeninhalt [[A]].",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 6: Umfang aus der kurzen Kathete berechnen",
            },
            {
              "kind": "p",
              "text": "Ein 30-60-90-Dreieck hat eine kurze Kathete von [[a = 7]] cm. Finden Sie den Umfang [[P]].",
            },
            {
              "kind": "h3",
              "text": "Lösungen der Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "Lösung 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. Die exakte Antwort ist [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Lösung 2: [[c = 2a = 2 \\times 11 = 22]] cm. Die Hypotenuse ist genau doppelt so lang wie die kurze Kathete.",
            },
            {
              "kind": "p",
              "text": "Lösung 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Die kurze Kathete ist genau halb so lang wie die Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Lösung 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Prüfen Sie die Reihenfolge: Die kurze Kathete ist 7 cm, die lange Kathete ist etwa 12.124 cm und die Hypotenuse ist 14 cm.",
            },
            {
              "kind": "p",
              "text": "Lösung 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] Quadratzentimeter. Die exakte Antwort ist [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Lösung 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Das Addieren der Seiten eine nach der anderen ergibt dasselbe Ergebnis: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke",
      "relatedIntro": "Jeder Rechner unten bearbeitet eine andere Aufgabe mit rechtwinkligen Dreiecken, wählen Sie also das Werkzeug, das zu der Messung passt, die Sie brauchen.",
      "relatedItems": [
        "Rechner für spezielle rechtwinklige Dreiecke",
        "45-45-90-Dreieck-Rechner",
        "Rechner für die Seiten rechtwinkliger Dreiecke",
        "Rechner für die Fläche rechtwinkliger Dreiecke",
        "Rechner für den Umfang rechtwinkliger Dreiecke",
        "Rechner für den Satz des Pythagoras",
      ],
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist ein 30-60-90-Dreieck?",
          "answer": "Ein 30-60-90-Dreieck ist ein rechtwinkliges Dreieck mit Winkeln von 30°, 60° und 90°. Es heißt spezielles rechtwinkliges Dreieck, weil seine Seitenlängen immer dem festen Verhältnis [[1 : \\sqrt{3} : 2]] folgen. Eine bekannte Seite reicht aus, um alle anderen zu finden, weshalb der Rechner nur eine einzige Eingabe braucht.",
        },
        {
          "question": "Wie lautet das Seitenverhältnis eines 30-60-90-Dreiecks?",
          "answer": "Das Seitenverhältnis lautet [[a : b : c = 1 : \\sqrt{3} : 2]], wobei [[a]] die kurze Kathete, [[b]] die lange Kathete und [[c]] die Hypotenuse ist. Das bedeutet, dass [[b = a\\sqrt{3}]] und [[c = 2a]] gilt. Das Verhältnis ist für jedes 30-60-90-Dreieck gleich, egal wie groß es ist.",
        },
        {
          "question": "Warum wird die lange Kathete mit √3 multipliziert?",
          "answer": "Die lange Kathete ist die Höhe des gleichseitigen Dreiecks, das ein 30-60-90-Dreieck erzeugt. Das Halbieren eines gleichseitigen Dreiecks der Seite [[2a]] ergibt [[b^2 = (2a)^2 - a^2 = 3a^2]], also [[b = a\\sqrt{3}]]. Die √3 kommt aus dem Satz des Pythagoras, angewandt auf diese Konstruktion.",
        },
        {
          "question": "Wie finde ich die Hypotenuse aus der kurzen Kathete?",
          "answer": "Verdoppeln Sie die kurze Kathete: [[c = 2a]]. Wenn [[a = 7]] cm ist, dann ist [[c = 2 \\times 7 = 14]] cm. Die Hypotenuse ist in einem 30-60-90-Dreieck immer genau doppelt so lang wie die kurze Kathete, weil sie eine volle Seite des gleichseitigen Dreiecks ist, während die kurze Kathete eine halbe Seite ist.",
        },
        {
          "question": "Wie finde ich die kurze Kathete aus der Hypotenuse?",
          "answer": "Halbieren Sie die Hypotenuse: [[a = \\frac{c}{2}]]. Wenn [[c = 18]] cm ist, dann ist [[a = \\frac{18}{2} = 9]] cm. Dies ist die Umkehrung des Verdoppelns der kurzen Kathete, um die Hypotenuse zu finden, und es funktioniert nur für 30-60-90-Dreiecke, in denen die Hypotenuse immer doppelt so lang ist wie die kurze Kathete.",
        },
        {
          "question": "Wie berechne ich die lange Kathete aus der Hypotenuse?",
          "answer": "Verwenden Sie [[b = \\frac{c\\sqrt{3}}{2}]]. Halbieren Sie zuerst die Hypotenuse, um die kurze Kathete zu erhalten, und multiplizieren Sie dann mit √3. Wenn [[c = 16]] cm ist, dann ist [[b = 8\\sqrt{3} \\approx 13.856]] cm. Die lange Kathete liegt in der Länge zwischen der kurzen Kathete und der Hypotenuse.",
        },
        {
          "question": "Wie finde ich die kurze Kathete aus der langen Kathete?",
          "answer": "Teilen Sie die lange Kathete durch √3: [[a = \\frac{b}{\\sqrt{3}}]]. Wenn [[b = 12]] cm ist, dann ist [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Das Teilen durch √3 kehrt die Multiplikation um, mit der man die lange Kathete aus der kurzen Kathete findet.",
        },
        {
          "question": "Wie berechne ich den Flächeninhalt eines 30-60-90-Dreiecks?",
          "answer": "Verwenden Sie [[A = \\frac{a^2\\sqrt{3}}{2}]], wobei [[a]] die kurze Kathete ist. Wenn [[a = 6]] cm ist, dann ist [[A = 18\\sqrt{3} \\approx 31.177]] Quadratzentimeter. Die Formel ist die Hälfte des Produkts der beiden Katheten, wobei die lange Kathete durch [[a\\sqrt{3}]] ersetzt wird. Der Flächeninhalt steht immer in Quadrateinheiten.",
        },
        {
          "question": "Wie berechne ich den Umfang eines 30-60-90-Dreiecks?",
          "answer": "Verwenden Sie [[P = a(3 + \\sqrt{3})]], wobei [[a]] die kurze Kathete ist. Wenn [[a = 5]] cm ist, dann ist [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. Die Formel addiert alle drei Seiten, [[a + a\\sqrt{3} + 2a]], und klammert [[a]] aus. Der Umfang steht in einfachen Einheiten, nicht in Quadrateinheiten.",
        },
        {
          "question": "Kann ein 30-60-90-Dreieck dezimale Seitenlängen haben?",
          "answer": "Ja. Das Verhältnis funktioniert für jede positive Länge, ganz oder dezimal. Wenn [[a = 2.5]] cm ist, dann ist [[b = 2.5\\sqrt{3} \\approx 4.330]] cm und [[c = 5]] cm. Dezimalzahlen ändern nichts an der Methode: Multiplizieren Sie mit √3 für die lange Kathete und verdoppeln Sie für die Hypotenuse, und runden Sie erst die endgültige Antwort.",
        },
        {
          "question": "Ist jedes 30-60-90-Dreieck ähnlich?",
          "answer": "Ja. Alle 30-60-90-Dreiecke haben dieselben drei Winkel, 30°, 60° und 90°, und dasselbe Seitenverhältnis, [[1 : \\sqrt{3} : 2]]. Gleiche Winkel plus gleiche Proportionen bedeuten, dass die Dreiecke ähnlich sind, sie unterscheiden sich also nur in der Größe. Das Vergrößern oder Verkleinern eines Dreiecks ergibt ein weiteres 30-60-90-Dreieck.",
        },
        {
          "question": "Wie kann ich prüfen, ob meine Dreiecksmessungen richtig sind?",
          "answer": "Prüfen Sie das Verhältnis, [[\\frac{b}{a} = \\sqrt{3}]] und [[\\frac{c}{a} = 2]], bestätigen Sie dann [[a^2 + b^2 = c^2]] mit dem Satz des Pythagoras und bestätigen Sie [[a < b < c]]. Für [[a = 5]] cm, [[b \\approx 8.660]] cm und [[c = 10]] cm bestehen alle vier Prüfungen. Wenn eine Prüfung fehlschlägt, rechnen Sie die Berechnung neu.",
        },
      ],
    },
};
