// altitudeFromSidesGuideTranslations.bde.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B2_DE = {
  "de": {
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "Höhenrechner für rechtwinklige Dreiecke aus Seiten",
        "sec-calculate": "Höhe des rechtwinkligen Dreiecks aus Seitenlängen berechnen",
        "sec-altitude": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
        "sec-sides": "Die Seiten eines rechtwinkligen Dreiecks verstehen",
        "sec-formula": "Formel für die Höhe eines rechtwinkligen Dreiecks aus den Seiten",
        "sec-use": "So verwenden Sie den Höhenrechner für rechtwinklige Dreiecke aus Seiten",
        "sec-manual": "Schrittweise Höhenberechnung ohne Taschenrechner",
        "sec-diagram": "Höhendiagramm des rechtwinkligen Dreiecks erklärt",
        "sec-proof": "Warum funktioniert die Höhenformel?",
        "sec-examples": "Gelöste Beispiele: Höhe eines rechtwinkligen Dreiecks aus Seiten",
        "sec-two-sides": "So finden Sie die Höhe, wenn nur zwei Seiten bekannt sind",
        "sec-verify": "So überprüfen Sie Ihre Höhenberechnung",
        "sec-vs-projections": "Höhe aus Seiten vs. Höhe aus Projektionen",
        "sec-area-rel": "Zusammenhang zwischen Höhe, Fläche und Hypotenuse",
        "sec-properties": "Besondere Eigenschaften der Höhe zur Hypotenuse",
        "sec-mistakes": "Häufige Fehler bei der Berechnung der Höhe eines rechtwinkligen Dreiecks",
        "sec-applications": "Praktische Anwendungen von Dreieckshöhenberechnungen",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte rechtwinklige Dreiecksrechner entdecken",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-conclusion": "Verwandte rechtwinklige Dreiecksrechner",
      },
      "sections": {
        "sec-intro": {
          "h2": "Höhenrechner für rechtwinklige Dreiecke aus Seiten",
          "blocks": [
            {
              "kind": "p",
              "text": "Geben Sie die beiden Katheten und die Hypotenuse ein, um die Höhe in Sekundenschnelle zu finden.",
            },
            {
              "kind": "p",
              "text": "Dieser Rechner ermittelt die Höhe eines rechtwinkligen Dreiecks: den senkrechten Abstand vom Scheitel des rechten Winkels zur Hypotenuse. Geben Sie die beiden Katheten, [[a]] und [[b]], sowie die Hypotenuse [[c]] ein, und er liefert [[h]] nach [[h=\\frac{ab}{c}]]. Das Ergebnis erscheint in derselben Einheit wie Ihre Eingaben.",
            },
            {
              "kind": "p",
              "text": "Zum Beispiel liefert ein Dreieck mit Katheten von 3 cm und 4 cm und einer Hypotenuse von 5 cm [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Beachten Sie, dass 2,4 cm kürzer als jede der Katheten ist, was für die Höhe zur Hypotenuse immer gilt.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Höhe des rechtwinkligen Dreiecks aus Seitenlängen berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner nimmt drei Messwerte auf. Kathete a ist die erste senkrechte Seite, Kathete b die zweite senkrechte Seite, und Hypotenuse c ist die längste Seite, gegenüber dem rechten Winkel. Alle drei müssen dieselbe Einheit verwenden, rechnen Sie also Meter in Zentimeter oder Fuß in Zoll um, bevor Sie tippen.",
            },
            {
              "kind": "p",
              "text": "Klicken Sie auf „Höhe h berechnen“, um das Ergebnis mit seiner Einsetzung zu sehen, und verwenden Sie „Zurücksetzen“, um die Felder für die nächste Aufgabe zu leeren. Der Rechner antwortet mit der kompakten Formel:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Wenn Sie nur zwei Seiten kennen, ergänzen Sie zuerst die dritte mit dem Satz des Pythagoras, oder versuchen Sie den allgemeinen <a href=\"/right-triangle-altitude-calculator/\">Höhenrechner</a> für einen anderen Ausgangspunkt.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Höhe ist der senkrechte Abstand von einem Eckpunkt zur gegenüberliegenden Seite. Auf dieser Seite fällt sie immer vom Scheitel des rechten Winkels geradewegs auf die Hypotenuse und trifft sie in einem rechten Winkel. Die Hypotenuse ist die Grundseite, weil sie die einzige Seite gegenüber dem rechten Winkel ist, und die Strecke landet im Inneren des Dreiecks.",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat drei Höhen, aber zwei davon sind trivial: Kathete [[a]] ist die Höhe zur Grundseite [[b]], und Kathete [[b]] ist die Höhe zur Grundseite [[a]], da die Katheten bereits senkrecht aufeinander stehen. Interessant ist die dritte Höhe, die zur Hypotenuse, denn sie ist eine echt neue Innenstrecke und sie ist kürzer als jede der Katheten.",
            },
            {
              "kind": "p",
              "text": "Diese dritte Höhe findet dieser Rechner, und sie ist es, die Lehrbücher meist meinen, wenn sie nach der Höhe eines rechtwinkligen Dreiecks fragen.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Die Seiten eines rechtwinkligen Dreiecks verstehen",
          "blocks": [
            {
              "kind": "p",
              "text": "Korrekte Bezeichnungen bringen die Formel zum Funktionieren. Die Katheten [[a]] und [[b]] sind die beiden senkrechten Seiten, die sich im rechten Winkel treffen. Die Hypotenuse [[c]] ist die längste Seite, gegenüber dem rechten Winkel. Die Höhe [[h]] ist gar keine Seite, sondern der senkrechte Abstand vom Scheitel des rechten Winkels zur Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Identifizieren Sie immer zuerst die Hypotenuse: Sie ist die längste Ihrer drei Längen. In einem 3-4-5-Dreieck muss 5 [[c]] sein, und ein schneller Check [[3^2+4^2=5^2]] bestätigt die Zuordnung. Die 5 als Kathete zu bezeichnen würde durch die falsche Seite teilen und das Ergebnis verfälschen.",
            },
          ],
          "table": {
            "headers": [
              "Variable",
              "Definition",
              "Rolle in der Berechnung",
            ],
            "rows": [
              [
                "a",
                "Erste senkrechte Kathete",
                "Multipliziert mit b im Zähler",
              ],
              [
                "b",
                "Zweite senkrechte Kathete",
                "Multipliziert mit a im Zähler",
              ],
              [
                "c",
                "Hypotenuse, längste Seite",
                "Teilt ab im Nenner",
              ],
              [
                "h",
                "Höhe zur Hypotenuse",
                "Das Ergebnis der Formel",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formel für die Höhe eines rechtwinkligen Dreiecks aus den Seiten",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel ist kurz und leicht zu merken:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Die Katheten werden multipliziert, weil ihr Produkt mit der Fläche zusammenhängt: Die Fläche ist gleich der Hälfte von [[ab]], also ist [[ab]] die doppelte Fläche. Die Division durch die Hypotenuse isoliert dann [[h]], da dieselbe Fläche auch gleich der Hälfte von [[ch]] ist. Das Ergebnis ist eine gewöhnliche Länge, weshalb alle drei Eingaben eine Einheit teilen müssen.",
            },
            {
              "kind": "p",
              "text": "Probieren Sie ein 6-8-10-Dreieck: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geometrisch sind 4,8 cm der kürzeste Weg vom Scheitel des rechten Winkels zur Hypotenuse. (Der vollständige Beweis steht im Beweisabschnitt unten.)",
            },
            {
              "kind": "p",
              "text": "Eine nützliche Gewohnheit ist, die Einheiten vor dem Einsetzen zu prüfen. Wenn [[a]] 60 mm, [[b]] 8 cm und [[c]] 100 mm sind, rechnen Sie zuerst alles in eine Einheit um: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], was dasselbe 6-8-10-Dreieck ergibt und dieselben [[4.8\\text{ cm}]] liefert. Die Formel repariert gemischte Einheiten nie von selbst, also verhindert dieser eine Check die peinlichsten Fehler.",
            },
          ],
        },
        "sec-use": {
          "h2": "So verwenden Sie den Höhenrechner für rechtwinklige Dreiecke aus Seiten",
          "blocks": [
            {
              "kind": "p",
              "text": "Folgen Sie diesen acht Schritten für jedes Mal ein sauberes Ergebnis.",
            },
            {
              "kind": "steps",
              "steps": [
                "Finden Sie den rechten Winkel, die Ecke, in der zwei Seiten rechtwinklig aufeinandertreffen, oft mit einem kleinen Quadrat markiert. Ohne bestätigten rechten Winkel gilt diese Formel nicht.",
                "Finden Sie die beiden senkrechten Katheten, die diese Ecke bilden; nennen Sie sie a und b in beliebiger Reihenfolge, da die Formel sie symmetrisch behandelt.",
                "Identifizieren Sie die Hypotenuse: die Seite gegenüber dem rechten Winkel und die längste der drei. Vergewissern Sie sich, dass sie länger als beide Katheten ist.",
                "Rechnen Sie alle drei Messwerte in dieselbe Einheit um, bevor Sie irgendetwas eintippen. Gemischte Einheiten sind der häufigste Eingabefehler.",
                "Geben Sie a, b und c in die jeweils passenden Felder ein.",
                "Klicken Sie auf die Schaltfläche „Höhe h berechnen“, um die Katheten zu multiplizieren, durch die Hypotenuse zu teilen und die Höhe anzuzeigen.",
                "Lesen Sie das Ergebnis und prüfen Sie, dass die eingesetzten Zahlen Ihren beabsichtigten Eingaben entsprechen.",
                "Verwenden Sie „Zurücksetzen“, um die Eingaben vor der nächsten Aufgabe zu leeren, damit alte Werte das neue Ergebnis nicht verfälschen können.",
              ],
            },
            {
              "kind": "p",
              "text": "Vertrauen Sie einem Ergebnis erst, nachdem Sie einen Pythagoras-Check gemacht haben: [[a^2+b^2]] sollte gleich [[c^2]] sein. Kleine Messrundungen sind in Ordnung, aber eine große Abweichung bedeutet, dass die Seiten kein rechtwinkliges Dreieck bilden.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Schrittweise Höhenberechnung ohne Taschenrechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Sie können die Höhe in fünf kurzen Schritten von Hand finden. Nehmen Sie [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]] und vergewissern Sie sich zuerst, dass das Dreieck gültig ist: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Schritt 1, schreiben Sie die Formel auf: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Schritt 2, setzen Sie ein: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Schritt 3, multiplizieren Sie die Katheten: [[9 \\times 12=108]], also [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Schritt 4, dividieren Sie: [[108 \\div 15=7.2]], also [[h=7.2\\text{ cm}]]. Schritt 5, prüfen Sie mit der Fläche. Aus den Katheten: [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; aus Hypotenuse und Höhe: [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Beide Flächen stimmen überein, weil sie dasselbe Dreieck beschreiben. Die Katheten liefern ein Grundseiten-Höhen-Paar und die Hypotenuse ein anderes, aber die eingeschlossene Region ist identisch. Übereinstimmende Flächen bestätigen die Höhe.",
            },
            {
              "kind": "p",
              "text": "Warum funktioniert der Flächen-Check so gut? Weil die Höhenformel selbst aus der Gleichsetzung der beiden Flächenausdrücke entsteht, schließt die Verifikation über die Fläche den Kreis: Jeder Rechenfehler bei der Multiplikation oder Division würde die beiden Flächen voneinander abweichen lassen. Wenn sie übereinstimmen, sind sowohl die Formelanwendung als auch die Arithmetik in einem Zug bestätigt.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Höhendiagramm des rechtwinkligen Dreiecks erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Beschriften Sie das Dreieck ABC mit dem rechten Winkel bei C. Dann ist AC die Kathete [[a]], BC die Kathete [[b]] und AB die Hypotenuse [[c]]. Punkt D liegt auf AB, und die Strecke CD trifft AB in einem rechten Winkel; CD ist die Höhe [[h]]. Kleine Quadratmarkierungen bei C und D zeigen beide rechten Winkel.",
            },
            {
              "kind": "p",
              "text": "Die Höhe CD teilt das große Dreieck in zwei kleinere rechtwinklige Dreiecke, ACD und BCD, jedes mit seinem rechten Winkel bei D. Beide sind dem ursprünglichen Dreieck ABC ähnlich und einander ähnlich, eine Tatsache, auf die sich der Beweis- und der Projektionsabschnitt stützen.",
            },
            {
              "kind": "p",
              "text": "Wenn Sie Ihre eigene Version skizzieren, beginnen Sie mit dem rechten Winkel bei C, zeichnen Sie die Katheten und verbinden Sie dann ihre freien Enden zur Hypotenuse. Lassen Sie die Höhe zuletzt fallen und prüfen Sie, dass sie die Hypotenuse rechtwinklig trifft. Die Beschriftung in der Reihenfolge a, b, c, h hält jede spätere Berechnung geordnet.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Dreieck ABC mit rechtem Winkel bei C, Höhe CD zur Hypotenuse AB eingezeichnet; AC gleich a, BC gleich b, AB gleich c, CD gleich h",
            "caption": "Höhe CD fällt vom rechten Winkel C auf die Hypotenuse AB; h ist gleich (a x b) / c.",
          },
        },
        "sec-proof": {
          "h2": "Warum funktioniert die Höhenformel?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel folgt aus dem Flächeninhalt eines Dreiecks. Der Flächeninhalt ist gleich der halben Grundseite mal der Höhe, und ein rechtwinkliges Dreieck bietet zwei bequeme Grundseiten-Höhen-Paare. Mit den Katheten als Grundseite und Höhe:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Mit der Hypotenuse als Grundseite und der Höhe als zugehöriger Höhe:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Beide Ausdrücke beschreiben dasselbe Dreieck, setzen Sie sie also gleich:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplizieren Sie mit 2, dann dividieren Sie durch [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Ein Dreieck kann mit verschiedenen Grundseiten-Höhen-Paaren vermessen werden, während sein Flächeninhalt fest bleibt, daher ist die Gleichsetzung der beiden Ausdrücke legitim und die Algebra isoliert [[h]]. Das Diagramm zeigt dasselbe Dreieck zweimal, einmal mit Grundseite [[a]] und Höhe [[b]], einmal mit Grundseite [[c]] und Höhe [[h]].",
            },
            {
              "kind": "p",
              "text": "Der Beweis erklärt auch, warum die Höhe immer kürzer als die Katheten ist. Da [[c]] die längste Seite ist, muss die Division von [[ab]] durch die größte der drei Längen einen Wert liefern, der kleiner ist als jede einzelne Kathete. Jede spätere Formel auf dieser Seite, von den Projektionen bis zu den ähnlichen Dreiecken, ist eine Variation dieser einen Flächenidee.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Dasselbe rechtwinklige Dreieck zweimal gezeichnet: zuerst mit Grundseite a und Höhe b, dann mit Grundseite c und Höhe h",
            "caption": "Gleiches Dreieck, zwei Grundseiten-Höhen-Paare: Die Fläche ist gleich ab/2 und ch/2, also ist h gleich ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Gelöste Beispiele: Höhe eines rechtwinkligen Dreiecks aus Seiten",
          "blocks": [
            {
              "kind": "p",
              "text": "Die sieben Beispiele unten bewegen sich von den klassischen ganzzahligen Tripeln zu Dezimalzahlen, gleichen Katheten und gemischten Einheiten. Jedes folgt demselben Rhythmus: nennen, was gegeben ist, in die Formel einsetzen, vereinfachen und mit der Einheit abschließen. Das Lesen in der Reihenfolge baut die Gewohnheit auf, Einheiten und Plausibilität zu prüfen, bevor man einem Ergebnis traut.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Klassisches 3-4-5-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt [[2.4\\text{ cm}]]. Dieses Referenzbeispiel lohnt es sich auswendig zu lernen, da 3-4-5 das häufigste pythagoreische Tripel ist und 2,4 eine saubere Dezimalzahl.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: 5-12-13-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Die exakte Höhe ist [[60/13]] Meter, etwa 4,615 m. Behalten Sie den Bruch, wenn es auf Präzision ankommt, denn frühes Runden trägt Fehler in die Weiterarbeit.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: 8-15-17-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt etwa [[7.059\\text{ cm}]]. Das Vertauschen der Katheten zu 15 und 8 ergibt das identische Produkt und bestätigt, dass die Formel die Katheten symmetrisch behandelt.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Gleiche Katheten und das 45-45-90-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Gleiche Katheten ergeben ein 45-45-90-Dreieck, und die Höhe teilt es in zwei deckungsgleiche Hälften. Die exakte Form [[5\\sqrt{2}]] cm schlägt die Dezimalzahl in theoretischer Arbeit.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Dezimalmaße",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt [[1.2\\text{ m}]]. Dezimalzahlen brauchen keine Sonderbehandlung: Multiplizieren und dividieren Sie wie gewohnt und behalten Sie dieselbe Einheit im Ergebnis.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Gemischte Einheiten, die zuerst übereinstimmen müssen",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], rechnen Sie zuerst in Zentimeter um: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Das vorherige Umrechnen liefert saubere [[24\\text{ cm}]]. Nicht umgerechnete Meter hätten das Ergebnis um den Faktor 100 aufgebläht.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Größeres 20-21-29-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "Die Höhe beträgt etwa [[14.483\\text{ ft}]], bequem unter der kürzeren Kathete von 20 ft, wie die Höhe zur Hypotenuse immer ist.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Rechtwinkliges Dreieck mit Katheten 3 und 4, Hypotenuse 5 und zur Hypotenuse gezeichneter Höhe 2,4",
            "caption": "Ein 3-4-5-Dreieck maßstabsgetreu gezeichnet: Höhe h gleich (3 x 4) / 5 = 2,4.",
          },
        },
        "sec-two-sides": {
          "h2": "So finden Sie die Höhe, wenn nur zwei Seiten bekannt sind",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Live-Rechner verlangt alle drei Seiten, aber zwei Seiten genügen, um die dritte mit dem Satz des Pythagoras zu ergänzen. Es gibt zwei Fälle, je nachdem, welche Seiten Sie kennen, und beide enden mit der vertrauten Höhenformel.",
            },
            {
              "kind": "p",
              "text": "Die Logik ist in beiden Fällen gleich: Der Satz des Pythagoras stellt die fehlende Seite wieder her, und die Höhenformel erledigt den Rest. Fall 1 addiert die Katheten unter einer Wurzel, um die Hypotenuse zu finden, während Fall 2 subtrahiert, um eine Kathete zu ergänzen. Beachten Sie, dass Fall 2 nur funktioniert, wenn die bekannte Seite wirklich die Hypotenuse ist; wenn [[a>c]], wird die Wurzel negativ und ein solches Dreieck existiert nicht.",
            },
            {
              "kind": "h3",
              "text": "Fall 1: Beide Katheten bekannt",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[a=7]] und [[b=24]]. Finden Sie zuerst die Hypotenuse: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Dann folgt die Höhe: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Fall 2: Eine Kathete und die Hypotenuse bekannt",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie [[a=8]] und [[c=10]]. Ergänzen Sie die fehlende Kathete mit dem umgestellten Satz des Pythagoras: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Dann ist die Höhe: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Betrachten Sie diese als lehrreiche Alternativen, da der Rechner drei Messwerte erwartet. Ein eigener <a href=\"/right-triangle-side-calculator/\">Seitenrechner</a> kann die fehlende Länge ergänzen, bevor Sie hier fortfahren.",
            },
          ],
        },
        "sec-verify": {
          "h2": "So überprüfen Sie Ihre Höhenberechnung",
          "blocks": [
            {
              "kind": "p",
              "text": "Drei unabhängige Checks bestätigen ein Höhen-Ergebnis. Alle drei unten verwenden das 3-4-5-Dreieck, bei dem die Höhe 2,4 beträgt. Verwenden Sie mindestens einen davon, wann immer ein Ergebnis in weitere Arbeit einfließt, denn eine falsche Höhe verfälscht stillschweigend alles, was darauf aufbaut.",
            },
            {
              "kind": "h3",
              "text": "Methode 1: Flächenvergleich",
            },
            {
              "kind": "p",
              "text": "Berechnen Sie die Fläche auf beiden Wegen und fordern Sie Übereinstimmung. Aus den Katheten: [[[A=\\frac{3 \\times 4}{2}=6]]] Aus Hypotenuse und Höhe: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Übereinstimmende Flächen bestätigen die Höhe selbst.",
            },
            {
              "kind": "h3",
              "text": "Methode 2: Hypotenusen-Projektionen",
            },
            {
              "kind": "p",
              "text": "Teilen Sie die Hypotenuse in die Kathetenprojektionen [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] und [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. Die Höhe ist ihr geometrisches Mittel: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] 2,4 aus einer anderen Formel zurückzugewinnen ist ein starkes Indiz.",
            },
            {
              "kind": "h3",
              "text": "Methode 3: Pythagoras-Check",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie, dass die Seiten ein rechtwinkliges Dreieck bilden: [[[3^2+4^2=9+16=25=5^2]]] Dies validiert die Seitenlängen, nicht die Höhe. Führen Sie ihn zuerst aus, wenn eine Aufgabe Ihnen die Seiten vorgibt, und verwenden Sie dann den Flächen- oder Projektions-Check, um die Höhe zu validieren.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Höhe aus Seiten vs. Höhe aus Projektionen",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Höhe lässt sich auf zwei Wegen finden. Die Seitenmethode auf dieser Seite ist [[h=\\frac{ab}{c}]], ausgehend von den drei Seitenlängen. Die Projektionsmethode ist [[h=\\sqrt{pq}]], ausgehend von den beiden Abschnitten, in die die Höhe die Hypotenuse teilt. Beide beschreiben dieselbe Strecke und stimmen für dasselbe Dreieck immer überein; die Wahl hängt davon ab, welche Messwerte Sie haben. Für den zweiten Weg siehe die Seite <a href=\"/right-triangle-altitude-from-projections-calculator/\">Höhenrechner aus Projektionen</a>.",
            },
          ],
          "table": {
            "headers": [
              "Methode",
              "Erforderliche Eingaben",
              "Formel",
              "Bester Anwendungsfall",
            ],
            "rows": [
              [
                "Höhe aus Seiten",
                "Katheten a und b, Hypotenuse c",
                "h = ab / c",
                "Seitenlängen sind bekannt; keine Quadratwurzeln nötig",
              ],
              [
                "Höhe aus Projektionen",
                "Hypotenusenabschnitte p und q",
                "h = Quadratwurzel aus (p mal q)",
                "Der Höhenfußpunkt teilt die Hypotenuse in bekannte Teile",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Rechtwinkliges Dreieck mit Höhe h, das die Projektionen p und q und die beiden kleineren ähnlichen Dreiecke zeigt",
            "caption": "Die Höhe teilt die Hypotenuse in p und q; die Seitenformel und die Projektionsformel liefern dasselbe h.",
          },
        },
        "sec-area-rel": {
          "h2": "Zusammenhang zwischen Höhe, Fläche und Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Höhe, Fläche und Hypotenuse verbinden sich über zwei Ausdrücke für eine Fläche. Aus den Katheten: [[[A=\\frac{ab}{2}]]] Aus Hypotenuse und Höhe: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Das Auflösen des zweiten Ausdrucks nach [[h]] liefert eine handliche Umstellung: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Das bietet einen zweiten Weg, wenn die Fläche direkt bekannt ist. Für ein Dreieck mit Fläche [[54\\text{ cm}^2]] und Hypotenuse [[15\\text{ cm}]] gilt [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], dieselbe Antwort, die die Seitenformel für das 9-12-15-Dreieck lieferte. Wenn Sie zuerst die Fläche brauchen, erledigt ein <a href=\"/right-triangle-area-calculator/\">Flächenrechner</a> diesen Schritt, und der <a href=\"/right-triangle-area-from-altitude-calculator/\">Flächen-aus-Höhe-Rechner</a> kehrt die Berechnung um, sobald [[h]] bekannt ist.",
            },
            {
              "kind": "p",
              "text": "Dieser Weg glänzt, wenn eine Aufgabe die Fläche direkt nennt, wie viele Lehrbuchfragen es tun, oder wenn die Fläche in einem früheren Teil berechnet wurde. Statt nach den einzelnen Katheten zu suchen, teilen Sie die doppelte Fläche durch die Hypotenuse und sind in einer Zeile fertig. Es ist dieselbe Höhe, die die Seitenformel liefert, von einem anderen Startpunkt aus erreicht.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Besondere Eigenschaften der Höhe zur Hypotenuse",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Höhe zur Hypotenuse ist immer kürzer als jede der Katheten und kürzer als die Hypotenuse selbst, denn [[h=ab/c]] liegt unter [[a]], wann immer [[b<c]]. Gleiche Katheten ergeben ein symmetrisches 45-45-90-Dreieck, in dem die Höhe die Hypotenuse halbiert. Bei fester Hypotenuse ist die Höhe am größten, wenn die Katheten gleich sind: Bei Hypotenuse 10 liefert das 45-45-90-Dreieck [[h=5]], während das 6-8-10-Dreieck nur 4,8 liefert.",
            },
            {
              "kind": "p",
              "text": "Keine Aufteilung derselben Hypotenuse übertrifft dieses Maximum, nämlich die Ungleichung [[h \\le \\frac{c}{2}]], mit Gleichheit nur im 45-45-90-Fall. Auch die Skalierung verhält sich einfach: Die Verdopplung jeder Seite verdoppelt die Höhe, also wird aus 3-4-5 bei 2,4 ein 6-8-10 bei 4,8. Schließlich teilt die Höhe das Dreieck in zwei kleinere Dreiecke, die dem ursprünglichen ähnlich sind, weshalb die Projektions- und Flächenbeziehungen alle übereinstimmen.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Zwei rechtwinklige Dreiecke mit gemeinsamer Hypotenuse 10: ein 45-45-90-Dreieck mit Höhe 5 und ein 6-8-10-Dreieck mit Höhe 4,8",
            "caption": "Gleiche Hypotenuse 10: Gleiche Katheten liefern die höchste Höhe, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Berechnung der Höhe eines rechtwinkligen Dreiecks",
          "blocks": [
            {
              "kind": "p",
              "text": "Vermeiden Sie diese neun Fehler, und fast jede Höhenberechnung gelingt reibungslos.",
            },
            {
              "kind": "steps",
              "steps": [
                "Die Hypotenuse mit einer Kathete verwechseln. Abhilfe: Wählen Sie zuerst die längste Seite als c; in einem 3-4-5-Dreieck muss 5 c sein.",
                "Alle drei Seiten multiplizieren. abc zu berechnen hat hier keine geometrische Bedeutung. Abhilfe: Multiplizieren Sie nur die Katheten und teilen Sie dann durch die Hypotenuse.",
                "Vergessen, durch c zu teilen. Wer bei ab stehenbleibt, erhält die doppelte Fläche, keine Länge. Abhilfe: Schließen Sie immer mit der Division ab.",
                "Einheiten mischen. a in Zentimetern und c in Metern einzugeben verfälscht die Division lautlos. Abhilfe: Rechnen Sie zuerst alles in eine Einheit um.",
                "Seiten verwenden, die kein rechtwinkliges Dreieck bilden. Die Formel setzt einen rechten Winkel voraus, also liefern 2, 3, 4 Unsinn. Abhilfe: Prüfen Sie zuerst a^2 + b^2 = c^2.",
                "Die Höhe mit einer der Katheten verwechseln. Lehrbücher, die nach der Höhe fragen, meinen meist die zur Hypotenuse. Abhilfe: Klären Sie, welche Höhe die Frage will.",
                "Zwischenwerte zu früh runden. 60/13 mitten in der Rechnung auf 4,6 zu runden trägt Fehler ein. Abhilfe: Runden Sie nur das Endergebnis.",
                "Eine Flächenformel falsch verwenden. Fläche = c mal h ohne die Hälfte zu schreiben verdoppelt das Ergebnis. Abhilfe: Verwenden Sie Fläche = ch/2, wenn Sie nach h auflösen.",
                "Die Höhe zur Hypotenuse mit der Höhe relativ zu einer Kathete verwechseln. Das sind verschiedene Strecken. Abhilfe: Die Höhe zur Hypotenuse ist die kürzere Innenstrecke h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen von Dreieckshöhenberechnungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Schüler begegnen dieser Höhe in Geometrie-Hausaufgaben zu Fläche, Ähnlichkeit und geometrischem Mittel, während Lehrer sie nutzen, um den Satz des Pythagoras mit Flächenformeln in einem Bild zu verbinden, da ein einziges Diagramm sowohl [[ab/2]] als auch [[ch/2]] trägt. Technische Zeichner und Designer verwenden sie, wenn ein dreieckiges Paneel oder eine Halterung von ihrer Höhe aus bemaßt werden muss, und dreieckige Verstrebungsanordnungen brauchen manchmal den kürzesten Querabstand zwischen einem Knoten und einem Stab.",
            },
            {
              "kind": "p",
              "text": "Vermesser, die mit rechtwinkligen Sichtlinien arbeiten, nutzen dieselbe Beziehung, um berechnete Entfernungen gegen gemessene zu prüfen. Betrachten Sie diese als mathematische Modelle mit idealisierten Messwerten: Echte Ingenieur- oder Bauarbeiten brauchen geeignete Messmethoden, genannte Entwurfsannahmen und professionelle Standards, bevor einem Formelergebnis vor Ort vertraut wird.",
            },
            {
              "kind": "p",
              "text": "Im Klassenzimmer dient die Höhe auch als Brückenthema: Sie verbindet Satz des Pythagoras, Flächenformeln und ähnliche Dreiecke in einer Figur. Ein einziges gut gezeichnetes Diagramm kann eine ganze Unterrichtsstunde tragen, weshalb diese Konstruktion so oft in Lehrbüchern erscheint.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Versuchen Sie jede Aufgabe selbst und prüfen Sie dann die ausgearbeiteten Antworten unten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Einfache ganze Zahlen",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat Katheten von 6 cm und 8 cm und eine Hypotenuse von 10 cm. Finden Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Pythagoreisches Tripel",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat Katheten von 12 m und 16 m und eine Hypotenuse von 20 m. Finden Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Dezimalmaße",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat Katheten von 4,5 in und 6 in und eine Hypotenuse von 7,5 in. Finden Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Gleiche Katheten",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat zwei gleiche Katheten von je 14 ft. Finden Sie zuerst die Hypotenuse und dann die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Einheitenumrechnung",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat Seiten von 2,4 m, 70 cm und 2,5 m. Rechnen Sie zuerst die Einheiten um und finden Sie dann die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Antworten zu den Übungsaufgaben",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Das skalierte 3-4-5-Muster liefert eine saubere Dezimalzahl.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] bestätigt das Tripel, dann [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. Dezimalzahlen teilen sich sauber, wenn das Tripel konsistent ist.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], dann [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], genau die Hälfte der Hypotenuse, wie für 45-45-90 erwartet.",
            },
            {
              "kind": "p",
              "text": "5. In Zentimetern: [[a=240]], [[b=70]], [[c=250]], und [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] geht auf. Dann [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Verwandte rechtwinklige Dreiecksrechner",
          "blocks": [
            {
              "kind": "p",
              "text": "Mit der Höhenformel in der Hand wählen Sie das nächste Werkzeug danach, was Sie wissen. Wenn Sie statt der Seiten die Hypotenusenabschnitte kennen, gehen Sie zum Projektionsrechner. Wenn Sie die Höhe kennen und die Fläche wollen, kehrt das Werkzeug <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">Fläche aus Hypotenuse und Höhe</a> die Berechnung aus dem Flächenabschnitt um. Die fünf verwandten Rechner unten decken jede benachbarte Berechnung ab. Beginnen Sie mit dem Werkzeug, das zu Ihren vorhandenen Messwerten passt, und lassen Sie jedes Ergebnis das nächste prüfen.",
            },
          ],
        },
      },
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie lautet die Formel für die Höhe aus drei Seiten?",
          "answer": "Die Formel ist [[h=\\frac{ab}{c}]], wobei [[a]] und [[b]] die beiden senkrechten Katheten sind und [[c]] die Hypotenuse. Multiplizieren Sie die Katheten und teilen Sie dann durch die Hypotenuse. Das Ergebnis ist eine Länge in derselben Einheit wie die eingegebenen Seiten.",
        },
        {
          "question": "Wie findet man die Höhe eines rechtwinkligen Dreiecks?",
          "answer": "Identifizieren Sie den rechten Winkel, bezeichnen Sie die beiden Katheten mit [[a]] und [[b]] und die Hypotenuse mit [[c]], und stellen Sie sicher, dass alle Einheiten übereinstimmen. Berechnen Sie dann [[h=\\frac{ab}{c}]]. Für ein 3-4-5-Dreieck ergibt das [[h=\\frac{12}{5}=2.4]], eine Strecke, die kürzer als jede der Katheten ist.",
        },
        {
          "question": "Warum steht die Hypotenuse im Nenner?",
          "answer": "Das kommt aus dem Flächenbeweis. Die Fläche ist gleich [[ab/2]] über die Katheten und [[ch/2]] über die Hypotenuse als Grundseite. Die Gleichsetzung beider ergibt [[ab=ch]], und das Auflösen nach [[h]] bringt [[c]] in den Nenner. Je länger die Hypotenuse, desto kürzer die Höhe bei gegebener Fläche.",
        },
        {
          "question": "Kann ich die Höhe mit nur zwei Seiten berechnen?",
          "answer": "Ja, mit einem zusätzlichen Schritt. Wenn Sie beide Katheten kennen, finden Sie zuerst die Hypotenuse mit [[c=\\sqrt{a^2+b^2}]]. Wenn Sie eine Kathete und die Hypotenuse kennen, finden Sie die andere Kathete mit [[b=\\sqrt{c^2-a^2}]]. Verwenden Sie dann [[h=\\frac{ab}{c}]] wie gewohnt.",
        },
        {
          "question": "Ist die Höhe dasselbe wie die Höhe über einer Grundseite?",
          "answer": "Das hängt davon ab, welche Höhe gemeint ist. Höhe bedeutet üblicherweise den senkrechten Abstand zu einer gewählten Grundseite, also ist die Höhe zur Hypotenuse die Höhe, wenn die Hypotenuse die Grundseite ist. Wenn eine Kathete als Grundseite gewählt wird, ist die Höhe die andere Kathete, eine völlig andere Strecke.",
        },
        {
          "question": "Ist die Höhe immer kürzer als die Katheten?",
          "answer": "Ja, die Höhe zur Hypotenuse ist immer kürzer als jede der Katheten desselben Dreiecks. Sie ist die kürzeste Strecke vom Scheitel des rechten Winkels zur Hypotenuse, während jede Kathete ein längerer Weg zur selben Seite ist. Sie ist auch kürzer als die Hypotenuse selbst.",
        },
        {
          "question": "Kann ich diese Formel für jedes Dreieck verwenden?",
          "answer": "Nein, nur für rechtwinklige Dreiecke. Die Herleitung hängt davon ab, dass die Katheten senkrecht aufeinander stehen, was die Fläche zu [[ab/2]] macht. Für ein spitz- oder stumpfwinkliges Dreieck finden Sie die Höhe stattdessen mit der allgemeinen Flächenformel oder der Trigonometrie. Bestätigen Sie immer zuerst den rechten Winkel.",
        },
        {
          "question": "Was ist, wenn meine Seitenlängen den Satz des Pythagoras nicht erfüllen?",
          "answer": "Dann bilden sie kein rechtwinkliges Dreieck und die Formel gilt nicht. Messen Sie die Seiten erneut oder prüfen Sie die Bezeichnungen, denn die längste Seite muss die Hypotenuse sein. Kleine Rundungsabweichungen sind in Ordnung, aber eine große Abweichung bedeutet, dass das Dreieck nicht rechtwinklig ist.",
        },
        {
          "question": "Wie finde ich die Höhe eines 3-4-5-Dreiecks?",
          "answer": "Multiplizieren Sie die Katheten und teilen Sie durch die Hypotenuse: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (oder welche Einheit Ihre Seiten verwenden). Das 3-4-5-Dreieck ist das klassische Beispiel, weil alle drei Seiten ganze Zahlen sind.",
        },
        {
          "question": "Wie hoch ist die Höhe eines 5-12-13-Dreiecks?",
          "answer": "Sie beträgt [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], in der Einheit der Seiten. Behalten Sie den exakten Bruch [[60/13]], wenn Sie volle Präzision brauchen, und runden Sie nur für die endgültig angegebene Antwort auf 4,615.",
        },
        {
          "question": "Wie hängt die Höhe mit der Fläche zusammen?",
          "answer": "Die Fläche lässt sich auf zwei Arten schreiben: [[A=\\frac{ab}{2}]] und [[A=\\frac{ch}{2}]]. Das Umstellen der zweiten ergibt [[h=\\frac{2A}{c}]], sodass die Kenntnis von Fläche und Hypotenuse ein weiterer Weg zur selben Höhe ist. Beide Formen beschreiben das identische Dreieck.",
        },
        {
          "question": "Was ist der Unterschied zwischen Höhe aus Seiten und Höhe aus Projektionen?",
          "answer": "Die Höhe aus Seiten verwendet [[h=\\frac{ab}{c}]] mit den drei Seitenlängen. Die Höhe aus Projektionen verwendet [[h=\\sqrt{pq}]] mit den beiden Hypotenusenabschnitten. Beide finden dieselbe Strecke; die Wahl hängt davon ab, welche Messwerte Sie haben.",
        },
      ],
      "relatedHeading": "Verwandte rechtwinklige Dreiecksrechner entdecken",
      "relatedIntro": "Wählen Sie den Rechner, der zu Ihren vorhandenen Messwerten passt.",
      "relatedItems": [
        "Rechtwinkliges Dreieck Höhenrechner",
        "Höhenrechner für rechtwinklige Dreiecke aus Projektionen",
        "Projektionsrechner für rechtwinklige Dreiecke",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Flächen-aus-Höhe-Rechner für rechtwinklige Dreiecke",
      ],
    },
};
