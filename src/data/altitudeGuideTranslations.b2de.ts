// altitudeGuideTranslations.bde.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B2_DE = {
  "de": {
      "tocHeading": "Abschnittsnavigation",
      "tocItems": {
        "sec-intro": "Höhenrechner für rechtwinklige Dreiecke",
        "sec-calculate": "Die Höhe eines rechtwinkligen Dreiecks berechnen",
        "sec-what": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
        "sec-diagram": "Diagramm zur Höhe eines rechtwinkligen Dreiecks erklärt",
        "sec-formulas": "Formeln für die Höhe rechtwinkliger Dreiecke erklärt",
        "sec-how": "So verwenden Sie den Höhenrechner für rechtwinklige Dreiecke",
        "sec-method1": "Methode 1: Höhe eines rechtwinkligen Dreiecks aus den Seitenlängen",
        "sec-method2": "Methode 2: Höhe aus den Hypotenusenprojektionen",
        "sec-two-sides": "Die Höhe bestimmen, wenn nur zwei Seiten bekannt sind",
        "sec-why": "Warum funktioniert die Höhenformel für rechtwinklige Dreiecke?",
        "sec-proof": "Beweis des Höhensatzes mit ähnlichen Dreiecken",
        "sec-examples": "Durchgerechnete Beispiele zur Höhe rechtwinkliger Dreiecke",
        "sec-area": "Zusammenhang zwischen Höhe und Dreiecksfläche",
        "sec-geomean": "Geometrisches Mittel und Hypotenusenprojektionen",
        "sec-properties": "Wichtige Eigenschaften der Höhe rechtwinkliger Dreiecke",
        "sec-verify": "So prüfen Sie, ob Ihre Höhenberechnung stimmt",
        "sec-mistakes": "Häufige Fehler bei der Höhenberechnung",
        "sec-applications": "Praktische Anwendungen der Höhe rechtwinkliger Dreiecke",
        "sec-practice": "Übungsaufgaben mit Lösungen",
        "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
        "sec-faq": "Häufig gestellte Fragen",
        "sec-conclusion": "Verwandte Rechner für rechtwinklige Dreiecke",
      },
      "sections": {
        "sec-intro": {
          "h2": "Höhenrechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Diese Anleitung zeigt zwei Wege, die Höhe eines rechtwinkligen Dreiecks zu bestimmen, mit durchgerechneten Beispielen für jeden.",
            },
            {
              "kind": "p",
              "text": "Die Höhe ist die senkrechte Strecke, die vom Scheitel des rechten Winkels auf die Hypotenuse gefällt wird. Der Höhenrechner für rechtwinklige Dreiecke bestimmt diese Länge entweder aus den drei Seitenlängen oder aus den zwei Hypotenusenprojektionen. Wählen Sie den Modus, der zu Ihren bekannten Werten passt, geben Sie Ihre Messwerte ein, und der Rechner liefert die Höhe in derselben Einheit.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Die erste Formel verwendet die beiden Katheten [[a]] und [[b]] zusammen mit der Hypotenuse [[c]]. Die zweite verwendet die Projektionen [[p]] und [[q]], die beiden Abschnitte, in die die Höhe die Hypotenuse teilt. Beide Formeln finden dieselbe senkrechte Höhe; sie gehen nur von unterschiedlichen bekannten Messwerten aus.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Die Höhe eines rechtwinkligen Dreiecks berechnen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Rechner neben dieser Anleitung bietet zwei Modi, und den richtigen zu wählen ist die einzige Vorbereitung, die Sie brauchen. Jeder Modus fragt andere Messwerte ab und wendet eine andere Formel an; lesen Sie daher zuerst die Tabelle und ordnen Sie den Modus Ihren bekannten Werten zu.",
            },
            {
              "kind": "p",
              "text": "Modus 1, Höhe zur Hypotenuse, nimmt Kathete a, Kathete b und Hypotenuse c entgegen. Er berechnet die Höhe mit [[h=\\frac{ab}{c}]], also dem Produkt der beiden Katheten geteilt durch die Hypotenuse. Modus 2, Höhe quadriert, nimmt Projektion p und Projektion q entgegen, die beiden Teile der Hypotenuse, und wendet [[h=\\sqrt{pq}]] an, das geometrische Mittel der Projektionen.",
            },
            {
              "kind": "p",
              "text": "Alle Messwerte müssen zueinander passende Einheiten haben: Zentimeter zu Zentimetern, Meter zu Metern. Das Ergebnis erscheint in der gemeinsamen Längeneinheit Ihrer Eingaben. Nutzen Sie die Schaltfläche Zurücksetzen, um die Felder zu leeren, bevor Sie ein neues Problem beginnen.",
            },
          ],
          "table": {
            "headers": [
              "Bekannte Messwerte",
              "Rechnermodus",
              "Formel",
            ],
            "rows": [
              [
                "Katheten a, b und Hypotenuse c",
                "Höhe zur Hypotenuse",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Hypotenusenprojektionen p und q",
                "Höhe quadriert",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
          "blocks": [
            {
              "kind": "p",
              "text": "Eine Höhe ist eine senkrechte Strecke, die von einem Eckpunkt eines Dreiecks zur Geraden durch die gegenüberliegende Seite gezogen wird. In einem rechtwinkligen Dreieck beginnt die nützlichste Höhe am Scheitel des rechten Winkels und trifft die Hypotenuse im rechten Winkel. Der Punkt, an dem sie auftrifft, heißt Fußpunkt der Höhe, und die Hypotenuse ist die natürliche Basis für dieses Basis-Höhen-Paar.",
            },
            {
              "kind": "p",
              "text": "Jedes Dreieck hat drei Höhen, und ein rechtwinkliges Dreieck ist keine Ausnahme. Zwei davon fallen mit den Katheten zusammen: Nimmt man eine Kathete als Basis, steht die andere Kathete bereits senkrecht auf ihr und dient als Höhe. Die dritte Höhe verläuft vom Scheitel des rechten Winkels zur Hypotenuse und liegt im Inneren des Dreiecks. Diese Seite berechnet genau diese dritte Höhe, die einzige, die wirklich gerechnet werden muss.",
            },
            {
              "kind": "p",
              "text": "Weil sie die Hypotenuse im rechten Winkel trifft, teilt diese Höhe das ursprüngliche Dreieck in zwei kleinere rechtwinklige Dreiecke. Diese beiden Dreiecke sind zueinander und zum ursprünglichen Dreieck ähnlich, weshalb die Höhe die eleganten Beziehungen des geometrischen Mittels erzeugt, die später in dieser Anleitung untersucht werden.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagramm zur Höhe eines rechtwinkligen Dreiecks erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Das Diagramm unten zeigt das Dreieck ABC mit dem rechten Winkel bei C. Die Seiten AC und BC treffen im rechten Winkel aufeinander, also liegt AB dem rechten Winkel gegenüber und muss die Hypotenuse sein. Die Höhe CD verläuft von C zur Seite AB und trifft sie bei D mit einer Rechtwinkelmarkierung, die die senkrechte Lage zeigt.",
            },
            {
              "kind": "p",
              "text": "Jede Seite trägt eine Standardbezeichnung: AC = a, BC = b, AB = c und die Höhe CD = h. Die Höhe teilt die Hypotenuse in zwei Projektionen, AD = p und DB = q, also c = p + q. Beachten Sie, dass p neben der Kathete a und q neben der Kathete b liegt, ein Muster, das für den Ähnlichkeitsbeweis später wichtig ist.",
            },
            {
              "kind": "p",
              "text": "Liest man das Diagramm von links nach rechts, erzählt es die ganze Geschichte: ein rechtwinkliges Dreieck, eine Höhe, die auf die Hypotenuse fällt, zwei Projektionsabschnitte und das ursprüngliche Dreieck, geteilt in zwei kleinere rechtwinklige Dreiecke, ACD und CBD, die die Höhe als gemeinsame Seite haben.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Dreieck ABC mit rechtem Winkel bei C; Höhe CD auf die Hypotenuse AB gefällt, mit AC gleich a, BC gleich b, AB gleich c, CD gleich h, AD gleich p, DB gleich q",
            "caption": "Die Höhe CD fällt vom rechten Winkel C senkrecht auf die Hypotenuse AB und teilt sie in die Projektionen p und q.",
          },
        },
        "sec-formulas": {
          "h2": "Formeln für die Höhe rechtwinkliger Dreiecke erklärt",
          "blocks": [
            {
              "kind": "p",
              "text": "Vier Formeln finden dieselbe Höhe, und jede geht von anderen bekannten Messwerten aus. Der Live-Rechner setzt die ersten beiden direkt um; die anderen beiden sind manuelle Verfahren, die Sie nutzen können, wenn Ihre Messwerte unvollständig sind oder wenn Sie ein Ergebnis auf anderem Wege prüfen wollen.",
            },
            {
              "kind": "p",
              "text": "Die Seitenformel [[h=\\frac{ab}{c}]] braucht beide Katheten und die Hypotenuse. Die Projektionsformel [[h=\\sqrt{pq}]] braucht nur die beiden Hypotenusenabschnitte und ist gleichwertig mit dem Höhensatz [[h^2=pq]]. Wenn Sie die Katheten, aber nicht die Hypotenuse kennen, setzen Sie [[c=\\sqrt{a^2+b^2}]] ein und erhalten [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Wenn Sie die Fläche A und die Hypotenuse c kennen, verwenden Sie [[h=\\frac{2A}{c}]], das direkt aus der Flächenformel mit der Hypotenuse als Basis folgt.",
            },
            {
              "kind": "p",
              "text": "Behandeln Sie diese niemals als vier Rechnermodi. Der Rechner behält genau zwei Modi: Höhe zur Hypotenuse und Höhe quadriert. Die übrigen Formeln sind Hilfsmittel für das manuelle Rechnen, zum Herleiten eines fehlenden Messwerts vor der Eingabe in den Rechner oder zum Gegenprüfen eines vom Rechner gelieferten Ergebnisses.",
            },
          ],
          "table": {
            "headers": [
              "Formel",
              "Erforderliche Eingaben",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Katheten a, b und Hypotenuse c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Projektionen p und q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Beide Katheten a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Fläche A und Hypotenuse c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "So verwenden Sie den Höhenrechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Folgen Sie diesen Schritten der Reihe nach, und der Rechner erledigt den Rest. Der gesamte Vorgang dauert unter einer Minute, sobald Sie wissen, welche Messwerte Sie haben.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bestimmen Sie Ihre bekannten Messwerte: Sind es drei Seitenlängen oder die zwei Hypotenusenprojektionen?",
                "Wählen Sie den passenden Rechnermodus: Höhe zur Hypotenuse für drei Seiten, Höhe quadriert für zwei Projektionen.",
                "Geben Sie positive Messwerte in passenden Einheiten ein und rechnen Sie zuerst um, wenn sie in gemischten Einheiten vorliegen.",
                "Prüfen Sie, dass die Messwerte ein gültiges rechtwinkliges Dreieck beschreiben, bei dem die Katheten den Satz des Pythagoras erfüllen.",
                "Klicken Sie auf die Schaltfläche Berechnen, um den gewählten Modus auszuführen.",
                "Lesen Sie das Höhenergebnis in der gemeinsamen Einheit Ihrer Eingaben ab.",
                "Verifizieren Sie die Antwort mit einer der Prüfmethode aus dieser Anleitung, falls das Problem wichtig ist.",
                "Klicken Sie auf Zurücksetzen, bevor Sie ein neues Problem eingeben, damit alte Werte sich nie mit neuen mischen.",
              ],
            },
            {
              "kind": "p",
              "text": "Die Moduswahl ist der Schritt, der am meisten zählt. Wenn Sie die Katheten a und b plus die Hypotenuse c kennen, passt der Modus Höhe zur Hypotenuse. Wenn Sie nur wissen, wie sich die Hypotenuse in p und q teilt, wählen Sie Höhe quadriert. Der falsche Modus weist gültige Eingaben zurück, also erspart die passende Moduswahl Ärger.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Methode 1: Höhe eines rechtwinkligen Dreiecks aus den Seitenlängen",
          "blocks": [
            {
              "kind": "p",
              "text": "Wenn alle drei Seitenlängen bekannt sind, ergibt sich die Höhe aus einer einzigen Division. Die Formel [[h=\\frac{ab}{c}]] multipliziert die beiden Katheten und teilt durch die Hypotenuse, und jedes Symbol hat eine feste Bedeutung: a und b sind die senkrechten Katheten, c ist die Hypotenuse und h ist die Höhe zur Hypotenuse.",
            },
            {
              "kind": "p",
              "text": "Das klassische 3-4-5-Dreieck zeigt jeden Schritt. Gegeben a = 3 cm, b = 4 cm und c = 5 cm, setzen Sie in die Formel ein:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplizieren Sie zuerst die Katheten: 3 × 4 = 12. Teilen Sie dann durch die Hypotenuse:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist h = 2.4 cm. Beachten Sie, dass 2.4 kürzer ist als beide Katheten, was bei der Höhe zur Hypotenuse immer der Fall ist, und der Beweisabschnitt erklärt später, warum die Division durch c geometrisch natürlich ist.",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie diese Methode immer, wenn die drei Seiten bekannt sind oder direkt gemessen werden können. Für ein spezielles Tool, das nur Seiteneingaben verarbeitet, probieren Sie den <a href=\"/right-triangle-altitude-from-sides-calculator/\">Rechner für die Höhe aus den Seitenlängen</a>, der dieselbe Formel ausführlicher durchgeht.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Rechtwinkliges Dreieck mit den Katheten 3 und 4, der Hypotenuse 5 und der Höhe 2.4, die senkrecht auf der Hypotenuse steht",
            "caption": "Ein 3-4-5-Dreieck: Die Höhe h beträgt (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-method2": {
          "h2": "Methode 2: Höhe aus den Hypotenusenprojektionen",
          "blocks": [
            {
              "kind": "p",
              "text": "Wenn die Hypotenuse bereits in ihre zwei Projektionen geteilt ist, liefert der Höhensatz eine Abkürzung. Der Satz besagt [[h^2=pq]], also ist die Höhe die Quadratwurzel aus dem Produkt der beiden Projektionen:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Nehmen Sie p = 9 cm und q = 16 cm. Bilden Sie zuerst die quadrierte Gleichung:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Multiplizieren Sie: 9 × 16 = 144, also [[h^2=144]]. Ziehen Sie nun die Quadratwurzel:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Das Ergebnis ist h = 12 cm. Das bedeutet, die Höhe ist das geometrische Mittel der beiden Projektionen: Sie liegt größenmäßig zwischen ihnen, näher an ihrem Mittelwert als an einem der Extreme, eine Bedeutung, die im Abschnitt zum geometrischen Mittel ausführlicher erklärt wird.",
            },
            {
              "kind": "p",
              "text": "Denken Sie daran, dass p und q Abschnitte der Hypotenuse sind, nicht die Katheten des Dreiecks. Ein häufiger Fehler ist, Kathetenlängen als Projektionen einzugeben, was ein falsches Ergebnis liefert. Für ein Tool, das allein auf dieser Methode aufbaut, siehe den <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus den Projektionen</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Rechtwinkliges Dreieck mit der Höhe h, die die Hypotenuse in die Projektionen p = 9 und q = 16 teilt, Höhe h = 12",
            "caption": "Die Höhe ist das geometrische Mittel der Projektionen: √(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Die Höhe bestimmen, wenn nur zwei Seiten bekannt sind",
          "blocks": [
            {
              "kind": "p",
              "text": "Manchmal fehlt die dritte Seite, doch der Satz des Pythagoras stellt sie in einem Schritt wieder her. Die Wiederherstellungsmethode hängt davon ab, welche zwei Seiten Sie kennen, behandeln Sie also jeden Fall getrennt.",
            },
            {
              "kind": "h3",
              "text": "Fall 1: Beide Katheten sind bekannt",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 6 cm und b = 8 cm, bestimmen Sie zuerst die Hypotenuse mit [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Nun sind alle drei Seiten bekannt, wenden Sie also die Seitenformel an: h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. Die fehlende Hypotenuse war das einzige Hindernis, und die Höhe folgt direkt.",
            },
            {
              "kind": "h3",
              "text": "Fall 2: Eine Kathete und die Hypotenuse sind bekannt",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 5 cm und c = 13 cm, lösen Sie nach der fehlenden Kathete auf mit [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Mit der wiederhergestellten Kathete b = 12 cm beträgt die Höhe h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. Dies sind manuelle Herleitungen, um zuerst die erforderlichen Messwerte zu finden; der Rechner selbst verlangt vollständige Eingaben, erledigen Sie diese Vorarbeit also auf Papier, bevor Sie Werte eingeben.",
            },
            {
              "kind": "p",
              "text": "Wenn Sie häufig die fehlende Seite selbst brauchen, findet der <a href=\"/right-triangle-side-calculator/\">Seitenrechner</a> sie direkt, bevor Sie mit der Höhe fortfahren.",
            },
          ],
        },
        "sec-why": {
          "h2": "Warum funktioniert die Höhenformel für rechtwinklige Dreiecke?",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Formel funktioniert, weil ein Dreieck mit zwei verschiedenen Basis-Höhen-Paaren gemessen werden kann und die Fläche in beiden Fällen gleich bleibt. Dieses Flächenargument ist der kürzeste ehrliche Beweis für [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie zuerst die Katheten als Basis-Höhen-Paar. Da die Katheten senkrecht aufeinander stehen, ist die Fläche einfach die Hälfte ihres Produkts:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Verwenden Sie nun die Hypotenuse als Basis und die Höhe als zugehörige Höhe. Dasselbe Dreieck hat dieselbe Fläche:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Zwei Ausdrücke für eine Fläche, setzen Sie sie also gleich:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplizieren Sie beide Seiten mit 2, um die Brüche zu beseitigen, und erhalten Sie ab = ch. Teilen Sie beide Seiten durch c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Jeder Schritt ist umkehrbare Arithmetik, also ist die Division durch die Hypotenuse kein Trick; sie ist der algebraische Preis für den Wechsel vom Katheten-Basis-Höhen-Paar zum Hypotenusen-Basis-Höhen-Paar, während die Fläche fest bleibt.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Dasselbe rechtwinklige Dreieck zweimal gezeichnet: einmal mit Basis a und Höhe b, dann mit Basis c und Höhe h",
            "caption": "Dasselbe Dreieck, zwei Basis-Höhen-Paare: Die Fläche beträgt ab/2 und ch/2, also ist h gleich ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Beweis des Höhensatzes mit ähnlichen Dreiecken",
          "blocks": [
            {
              "kind": "p",
              "text": "Die Projektionsformel [[h=\\sqrt{pq}]] folgt aus der Ähnlichkeit. Behalten Sie die einheitliche Bezeichnung bei: Das Dreieck ABC ist bei C rechtwinklig, D liegt auf AB, CD steht senkrecht auf AB, AD = p, DB = q und CD = h.",
            },
            {
              "kind": "p",
              "text": "Die Höhe teilt ABC in zwei kleinere rechtwinklige Dreiecke, ACD und CBD. Der Winkel bei A wird von ABC und ACD gemeinsam genutzt, also sind diese beiden ähnlich; ebenso wird der Winkel bei B von ABC und CBD gemeinsam genutzt. Da beide kleineren Dreiecke dem ursprünglichen ähnlich sind, sind sie auch zueinander ähnlich: Das Dreieck ACD ist dem Dreieck CBD ähnlich.",
            },
            {
              "kind": "p",
              "text": "Schreiben Sie die Ähnlichkeit als Verhältnis entsprechender Seiten. Die kurze Kathete von ACD ist p und die lange Kathete ist h; in CBD ist die kurze Kathete h und die lange Kathete q. Die Zuordnung ergibt:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Kreuzweise multiplizieren: h × h = p × q, also h² = pq. Ziehen Sie die Quadratwurzel:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Es wird nur die positive Wurzel verwendet, weil Seitenlängen positiv sind. Eine negative Wurzel hat hier keine geometrische Bedeutung. Die entscheidende Einsicht ist, dass die Höhe die mittlere Proportionale zwischen den beiden Hypotenusenabschnitten ist, was genau das ist, was ein geometrisches Mittel ausmacht.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Ursprüngliches rechtwinkliges Dreieck ABC mit Höhe CD, daneben die zwei kleineren ähnlichen Dreiecke ACD und CBD mit beschrifteten entsprechenden Seiten",
            "caption": "Die Dreiecke ACD und CBD sind ähnlich: p/h = h/q, also ist h zum Quadrat gleich p mal q.",
          },
        },
        "sec-examples": {
          "h2": "Durchgerechnete Beispiele zur Höhe rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Sieben Beispiele decken beide Rechnermodi, die Einheitenumrechnung und Dezimalmesswerte ab. Jedes zeigt die gegebenen Werte, die gewählte Formel, das Einsetzen und das Endergebnis.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 1: Klassisches 3-4-5-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 3 cm, b = 4 cm, c = 5 cm. Verwenden Sie [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. Die Höhe ist wie immer kürzer als jede Kathete.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 2: 5-12-13-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 5 m, b = 12 m, c = 13 m. Verwenden Sie [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Behalten Sie den Bruch bis zum letzten Schritt, um eine saubere Dezimalzahl zu erhalten.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 3: 8-15-17-Dreieck",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 8 cm, b = 15 cm, c = 17 cm. Verwenden Sie [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Größere Katheten ergeben dennoch eine Höhe, die kleiner als beide ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 4: Gleiche Hypotenusenprojektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben p = 5 cm und q = 5 cm. Verwenden Sie [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Gleiche Projektionen bedeuten, dass die Höhe für diese Hypotenuse so groß wie möglich ist, und das Dreieck ist ein gleichschenkliges rechtwinkliges Dreieck: Jede Kathete beträgt 5√2 cm, etwa 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 5: Ungleiche Hypotenusenprojektionen",
            },
            {
              "kind": "p",
              "text": "Gegeben p = 4 cm und q = 25 cm. Verwenden Sie [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Beachten Sie, wie die Höhe von 10 zwischen den beiden Projektionen 4 und 25 liegt, was das Kennzeichen des geometrischen Mittels ist.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 6: Dezimale Messwerte",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 1.5 m, b = 2 m, c = 2.5 m. Verwenden Sie [[h=\\frac{ab}{c}]]: h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. Dezimalzahlen funktionieren genau wie ganze Zahlen, solange jeder Wert dieselbe Einheit verwendet.",
            },
            {
              "kind": "h3",
              "text": "Beispiel 7: Unterschiedliche Maßeinheiten",
            },
            {
              "kind": "p",
              "text": "Gegeben a = 30 cm, b = 0.4 m, c = 0.5 m. Rechnen Sie zuerst alles in Zentimeter um: b = 40 cm, c = 50 cm. Dann h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Das Umrechnen vor dem Einsetzen vermeidet den häufigsten Einheitenfehler.",
            },
          ],
        },
        "sec-area": {
          "h2": "Zusammenhang zwischen Höhe und Dreiecksfläche",
          "blocks": [
            {
              "kind": "p",
              "text": "Fläche und Höhe bestimmen einander, sobald die Hypotenuse bekannt ist. Mit der Hypotenuse als Basis gilt Fläche A = ch/2, also ergibt das Auflösen nach der Höhe [[h=\\frac{2A}{c}]]. Dies ist ein wirklich anderer Weg: Er überspringt die Katheten vollständig.",
            },
            {
              "kind": "p",
              "text": "Angenommen, eine Aufgabe nennt die Fläche A = 54 cm² und die Hypotenuse c = 15 cm. Setzen Sie ein:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplizieren Sie den Zähler: 2 × 54 = 108. Teilen Sie dann: h = 108 / 15 = 7.2 cm. Die Höhe folgt ohne Kenntnis der einzelnen Katheten.",
            },
            {
              "kind": "p",
              "text": "Dieser Weg ist nützlich, wenn die Fläche direkt gegeben ist, zum Beispiel in Textaufgaben über Grundstücke oder Material. Er dient auch als Prüfinstrument: Berechnen Sie die Höhe aus den Seiten und bestätigen Sie dann, dass 2A/c denselben Wert liefert. Der <a href=\"/right-triangle-area-calculator/\">Flächenrechner</a> findet die Fläche aus beliebigen Messwerten, die eine Aufgabe liefert.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Geometrisches Mittel und Hypotenusenprojektionen",
          "blocks": [
            {
              "kind": "p",
              "text": "Der Höhensatz besagt, dass die Höhe das geometrische Mittel der beiden Projektionen ist, und das geometrische Mittel ist eine bestimmte Art von Mittelwert. Nehmen Sie p = 4 und q = 9. Ihr geometrisches Mittel ist √(4 × 9) = √36 = 6, also hat ein Dreieck mit diesen Projektionen die Höhe 6.",
            },
            {
              "kind": "p",
              "text": "Vergleichen Sie das mit dem gewöhnlichen arithmetischen Mittel: (4 + 9) / 2 = 6.5. Die beiden Mittelwerte unterscheiden sich, und nur 6 ist die richtige Höhe. Das arithmetische Mittel mittelt durch Addieren, während das geometrische Mittel durch Multiplizieren mittelt, was zu Längen passt, die sich gemeinsam skalieren statt zu addieren.",
            },
            {
              "kind": "p",
              "text": "Geometrisch bedeutet die Mittelproportional-Beziehung h² = pq, dass sich die Höhe zu jeder Projektion verhält wie die Projektionen zueinander. Diese Symmetrie macht die beiden kleineren Dreiecke ähnlich, und sie ist der Grund, warum die Höhe größenmäßig immer zwischen den beiden Projektionen liegt und nur dann dem arithmetischen Mittel gleicht, wenn p gleich q ist.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Wichtige Eigenschaften der Höhe rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Sieben Eigenschaften beschreiben die Höhe zur Hypotenuse. Zusammen geben sie eine verlässliche Intuition dafür, welche Höhenwerte möglich sind und wie sie sich verhalten.",
            },
            {
              "kind": "list",
              "items": [
                "Die Höhe zur Hypotenuse steht senkrecht auf ihr, ist also die kürzeste Entfernung vom Scheitel des rechten Winkels zur Hypotenuse.",
                "Die Höhe teilt das Dreieck in zwei kleinere Dreiecke, die jeweils dem ursprünglichen und einander ähnlich sind.",
                "Die Höhe ist kürzer als beide Katheten; keine Kathete kann der kürzeste Weg zur Hypotenuse sein.",
                "Die Höhe ist kürzer als die Hypotenuse selbst, da eine senkrechte Strecke der kürzeste Weg ist.",
                "Die Höhe ist das geometrische Mittel der beiden Hypotenusenprojektionen, [[h=\\sqrt{pq}]].",
                "Bei fester Hypotenuse ist die Höhe am größten, wenn die beiden Projektionen gleich sind, was eintritt, wenn die beiden Katheten gleich sind.",
                "Skaliert man jede Seitenlänge mit demselben Faktor, skaliert die Höhe mit diesem Faktor; verdoppelt man das Dreieck, verdoppelt sich die Höhe.",
              ],
            },
            {
              "kind": "p",
              "text": "Die sechste Eigenschaft hat eine präzise Schranke: Die Höhe kann die halbe Hypotenuse nie überschreiten, [[h \\leq \\frac{c}{2}]], mit Gleichheit nur dann, wenn die Katheten gleich sind. Ein 45-45-90-Dreieck mit Hypotenuse 10 hat genau die Höhe 5, das Maximum; ein 6-8-10-Dreieck mit derselben Hypotenuse erreicht nur 4.8, wie das Diagramm zeigt.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Zwei rechtwinklige Dreiecke mit gemeinsamer Hypotenuse 10: ein 45-45-90-Dreieck mit Höhe 5 und ein Dreieck im 6-8-10-Stil mit Höhe 4",
            "caption": "Gleiche Hypotenuse 10: Gleiche Projektionen ergeben die höchste Höhe, 5.",
          },
        },
        "sec-verify": {
          "h2": "So prüfen Sie, ob Ihre Höhenberechnung stimmt",
          "blocks": [
            {
              "kind": "p",
              "text": "Drei unabhängige Prüfungen fangen Rechenfehler ab. Verwenden Sie mindestens eine davon, wann immer eine Höhenangabe wichtig ist.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 1: Dreiecksfläche",
            },
            {
              "kind": "p",
              "text": "Vergleichen Sie ab/2 mit ch/2 unter Verwendung Ihrer Höhe. Für das 3-4-5-Dreieck mit h = 2.4: ab/2 = (3 × 4)/2 = 6 und ch/2 = (5 × 2.4)/2 = 6. Übereinstimmende Flächen bestätigen, dass die Höhe zu den Seiten passt.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 2: Geometrisches Mittel",
            },
            {
              "kind": "p",
              "text": "Verifizieren Sie [[h^2=pq]], wenn die Projektionen bekannt sind. Mit p = 9 und q = 16: h² = 12² = 144 und pq = 9 × 16 = 144. Die Gleichheit bedeutet, dass die Höhe dazu passt, wie sich die Hypotenuse teilt.",
            },
            {
              "kind": "h3",
              "text": "Prüfung 3: Satz des Pythagoras",
            },
            {
              "kind": "p",
              "text": "Bestätigen Sie [[a^2+b^2=c^2]] für die gegebenen Seiten: 9 + 16 = 25 im 3-4-5-Fall. Diese Prüfung validiert die Seitenlängen, nicht direkt die Höhe, aber eine falsche Seiteneingabe ist der häufigste Grund, warum eine Höhenangabe die anderen beiden Prüfungen nicht besteht.",
            },
            {
              "kind": "p",
              "text": "Führen Sie jede Prüfung in einheitlichen Einheiten durch. Das Mischen von Zentimetern mit Metern bricht die Flächenprüfung unbemerkt, rechnen Sie also zuerst um und prüfen Sie dann.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Häufige Fehler bei der Höhenberechnung",
          "blocks": [
            {
              "kind": "p",
              "text": "Zehn Fehler tauchen immer wieder auf. Jeder ist leicht zu erkennen, sobald man sein Kennzeichen kennt.",
            },
            {
              "kind": "steps",
              "steps": [
                "Die Höhe mit einer Kathete verwechseln. Die Höhe trifft die Hypotenuse im rechten Winkel; eine Kathete trifft die andere Kathete im rechten Winkel. In einem 3-4-5-Dreieck ist h = 2.4, nicht 3 oder 4.",
                "Den falschen Rechnermodus wählen. Werden Katheten und eine Hypotenuse in den Modus Höhe quadriert eingegeben, der Projektionen erwartet, entsteht Unsinn. Ordnen Sie den Modus den Messwerten zu.",
                "Projektionen mit Katheten verwechseln. Wer a = 3 und b = 4 als p und q eingibt, berechnet √(12) ≈ 3.46, was nicht die Höhe ist. Projektionen sind Hypotenusenabschnitte.",
                "Die falsche Hypotenuse verwenden. Das Teilen von ab durch eine Kathete statt durch die Hypotenuse, z. B. 12/4 = 3, übertreibt die Höhe. Der Divisor muss die längste Seite c sein.",
                "Die Quadratwurzel in der Projektionsformel vergessen. Wer bei h² = 144 stehen bleibt, erhält 144 als Höhe; die richtige Antwort ist h = 12.",
                "Zentimeter und Meter mischen. Bei a = 30 cm und c = 0.5 m liefert das direkte Einsetzen von 0.5 eine falsche Höhe. Rechnen Sie zuerst um: 50 cm.",
                "Ungültige Seitenlängen eingeben. Seiten wie 2, 3, 10 erfüllen den Satz des Pythagoras nicht, also existiert kein rechtwinkliges Dreieck und keine Höhe ist definiert.",
                "Zu früh runden. Wer 60/13 vor einem weiteren Schritt auf 4.6 rundet, trägt den Fehler weiter. Behalten Sie den Bruch und runden Sie nur das Endergebnis.",
                "h² als endgültige Höhe behandeln. Wenn eine Rechnung mit h² = 36 endet, ist die Höhe 6, nicht 36.",
                "Formeln für rechtwinklige Dreiecke auf ein beliebiges Dreieck anwenden. Die Formeln hier brauchen einen rechten Winkel; für andere Dreiecke gelten andere Höhenbeziehungen.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktische Anwendungen der Höhe rechtwinkliger Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Höhenberechnungen stützen jede Arbeit, die auf der Geometrie rechtwinkliger Dreiecke aufbaut. Im Geometrieunterricht gibt der Höhensatz den Lernenden einen ersten Eindruck von Ähnlichkeitsbeweisen und geometrischen Mitteln. Technisches Zeichnen und geometrische Gestaltung nutzen die Höhe, um Senkrechte zu positionieren, wenn dreieckige Platten oder Halterungsformen angelegt werden.",
            },
            {
              "kind": "p",
              "text": "Die Vermessungsgeometrie nutzt rechtwinklige Dreiecksbeziehungen beim Kartieren von Grundstücken mit senkrechten Versätzen, und Planungsmodelle im Bauwesen nutzen sie, wenn ein rechtwinkliger Rahmen im rechten Winkel an eine Wand stoßen muss. Flächenberechnungen laufen umgekehrt: Aus bekannter Fläche und Hypotenuse gewinnt [[h=\\frac{2A}{c}]] die Höhe zurück, ohne die Katheten zu messen.",
            },
            {
              "kind": "p",
              "text": "Dies sind hypothetische geometrische Skizzen, keine Ingenieurverfahren. Echte Vermessungs- und Bauarbeiten erfordern geeignete Messungen, Planungsannahmen und professionelle Standards; der Höhensatz beschreibt die Geometrie, er ersetzt niemals professionelle Methoden.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Übungsaufgaben mit Lösungen",
          "blocks": [
            {
              "kind": "p",
              "text": "Fünf Aufgaben verwenden Werte, die in den Hauptbeispielen nicht vorkamen. Lösen Sie jede und prüfen Sie unten die Antworten.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 1: Seitenbasiert für Einsteiger",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Katheten a = 9 cm und b = 40 cm mit der Hypotenuse c = 41 cm. Bestimmen Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 2: Projektionsbasiert für Einsteiger",
            },
            {
              "kind": "p",
              "text": "Die Höhe eines rechtwinkligen Dreiecks teilt die Hypotenuse in p = 16 m und q = 36 m. Bestimmen Sie die Höhe.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 3: Dezimale Messwerte",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat a = 0.6 m, b = 0.8 m, c = 1.0 m. Bestimmen Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 4: Fehlende Seite",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Dreieck hat die Kathete a = 7 in und die Hypotenuse c = 25 in. Bestimmen Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Aufgabe 5: Fläche eines Gartenbeets",
            },
            {
              "kind": "p",
              "text": "Ein rechtwinkliges Gartenbeet hat die Fläche A = 96 m² und die Hypotenuse 20 m. Bestimmen Sie die Höhe zur Hypotenuse.",
            },
            {
              "kind": "h3",
              "text": "Übungsaufgaben: Antworten",
            },
            {
              "kind": "p",
              "text": "Aufgabe 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Bestätigen Sie zuerst die Seiten: 9² + 40² = 81 + 1600 = 1681 = 41², das Dreieck ist also gültig.",
            },
            {
              "kind": "p",
              "text": "Aufgabe 2: h = √(16 × 36) = √576 = 24 m. Die Höhe liegt zwischen den beiden Projektionen, wie es das geometrische Mittel verlangt.",
            },
            {
              "kind": "p",
              "text": "Aufgabe 3: h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. Dezimalzahlen brauchen dieselbe Behandlung wie ganze Zahlen.",
            },
            {
              "kind": "p",
              "text": "Aufgabe 4: Stellen Sie die fehlende Kathete wieder her: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Dann h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Aufgabe 5: Verwenden Sie den Flächenweg: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. Es waren keine Kathetenmessungen nötig.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Verwandte Rechner für rechtwinklige Dreiecke",
          "blocks": [
            {
              "kind": "p",
              "text": "Diese Anleitung hat beide Höhenmodi behandelt: Seitenlängen und Hypotenusenprojektionen. Wenn Sie bereits wissen, welche Messwerte Sie haben, gehen die Spezialtools tiefer: der <a href=\"/right-triangle-altitude-from-sides-calculator/\">Rechner für die Höhe aus den Seitenlängen</a> und der <a href=\"/right-triangle-altitude-from-projections-calculator/\">Rechner für die Höhe aus den Projektionen</a>. Der <a href=\"/right-triangle-projection-calculator/\">Projektionsrechner</a> findet p und q selbst, wenn nur die Seiten bekannt sind.",
            },
          ],
        },
      },
      "faqHeading": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Was ist die Höhe eines rechtwinkligen Dreiecks?",
          "answer": "Die Höhe zur Hypotenuse ist die senkrechte Strecke vom Scheitel des rechten Winkels zur Hypotenuse. Sie ist die dritte Höhe des rechtwinkligen Dreiecks, verschieden von den beiden Katheten, und teilt die Hypotenuse in die Projektionen p und q.",
        },
        {
          "question": "Wie berechne ich die Höhe eines rechtwinkligen Dreiecks?",
          "answer": "Verwenden Sie die Seitenformel [[h=\\frac{ab}{c}]], wenn die Katheten und die Hypotenuse bekannt sind, oder die Projektionsformel [[h=\\sqrt{pq}]], wenn die Hypotenusenabschnitte bekannt sind. Der Rechner wendet jeweils den Modus an, der zu Ihren Messwerten passt.",
        },
        {
          "question": "Wie lautet die Höhenformel mit drei Seiten?",
          "answer": "Mit den Katheten a und b und der Hypotenuse c beträgt die Höhe [[h=\\frac{ab}{c}]]. Multiplizieren Sie die beiden Katheten und teilen Sie durch die Hypotenuse. Für ein 3-4-5-Dreieck: h = (3 × 4) / 5 = 2.4.",
        },
        {
          "question": "Wie berechne ich die Höhe aus den Projektionen?",
          "answer": "Der Höhensatz besagt [[h^2=pq]], ziehen Sie also die Quadratwurzel: [[h=\\sqrt{pq}]]. Für p = 9 und q = 16 gilt h = √(9 × 16) = √144 = 12. Die Projektionen sind Hypotenusenabschnitte, nicht die Katheten.",
        },
        {
          "question": "Kann ich die Höhe mit nur zwei Seiten berechnen?",
          "answer": "Ja, indem Sie zuerst die dritte Seite wiederherstellen. Mit beiden Katheten bestimmen Sie [[c=\\sqrt{a^2+b^2}]]; mit einer Kathete und der Hypotenuse bestimmen Sie [[b=\\sqrt{c^2-a^2}]]. Wenden Sie dann wie gewohnt [[h=\\frac{ab}{c}]] an.",
        },
        {
          "question": "Bedeuten Höhe (altitude) und Höhe (height) dasselbe?",
          "answer": "In rechtwinkligen Dreiecken überschneiden sich die Begriffe oft, doch Höhe hat die präzise Bedeutung einer senkrechten Strecke von einem Eckpunkt zur gegenüberliegenden Seite. Auf dieser Seite bedeutet Höhe immer die Senkrechte vom Scheitel des rechten Winkels zur Hypotenuse.",
        },
        {
          "question": "Ist die Höhe immer kürzer als die Hypotenuse?",
          "answer": "Ja. Die Höhe ist die kürzeste Entfernung vom Scheitel des rechten Winkels zur Hypotenuse, und die Hypotenuse ist länger als jede solche Strecke. Sie ist auch kürzer als beide Katheten.",
        },
        {
          "question": "Kann die Höhe gleich einer Hypotenusenprojektion sein?",
          "answer": "Ja, wenn die Projektionen gleich sind. Wenn p = q gilt, dann [[h=\\sqrt{p \\times p}=p]], also ist die Höhe gleich jeder Projektion. Das tritt in gleichschenkligen rechtwinkligen Dreiecken auf, wo die Höhe auch die halbe Hypotenuse ist.",
        },
        {
          "question": "Was hat der Satz vom geometrischen Mittel mit der Höhe zu tun?",
          "answer": "Der Satz vom geometrischen Mittel ist ein anderer Name für den Höhensatz: [[h=\\sqrt{pq}]] besagt, dass die Höhe das geometrische Mittel der Hypotenusenprojektionen ist. Die Ähnlichkeit der beiden kleineren Dreiecke beweist es.",
        },
        {
          "question": "Wie prüfe ich meine Höhenberechnung?",
          "answer": "Vergleichen Sie die beiden Flächenformeln ab/2 und ch/2; sie müssen übereinstimmen. Wenn die Projektionen bekannt sind, bestätigen Sie [[h^2=pq]]. Verifizieren Sie außerdem [[a^2+b^2=c^2]], um zu bestätigen, dass die Seiten ein gültiges rechtwinkliges Dreieck beschreiben.",
        },
        {
          "question": "Kann ich diesen Rechner für ein nicht rechtwinkliges Dreieck verwenden?",
          "answer": "Nein. Beide Formeln erfordern einen rechten Winkel: Das Flächenargument braucht senkrechte Katheten, und der Höhensatz braucht die Rechtwinkel-Ähnlichkeit. Für andere Dreiecke gelten andere Höhenbeziehungen.",
        },
        {
          "question": "Welchen Rechnermodus sollte ich wählen?",
          "answer": "Wählen Sie Höhe zur Hypotenuse, wenn Sie die beiden Katheten und die Hypotenuse kennen. Wählen Sie Höhe quadriert, wenn Sie die beiden Hypotenusenprojektionen p und q kennen. Den Modus Ihren bekannten Messwerten zuzuordnen, ist die einzige Vorbereitung, die zählt.",
        },
      ],
      "relatedHeading": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "relatedIntro": "Wählen Sie das Tool, das zu Ihren bereits bekannten Messwerten passt.",
      "relatedItems": [
        "Rechner für die Höhe rechtwinkliger Dreiecke aus den Seitenlängen",
        "Rechner für die Höhe rechtwinkliger Dreiecke aus den Projektionen",
        "Flächenrechner für rechtwinklige Dreiecke",
        "Seitenrechner für rechtwinklige Dreiecke",
        "Projektionsrechner für rechtwinklige Dreiecke",
      ],
    },
};
