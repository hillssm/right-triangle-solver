// perimeterGuideTranslations.b2de.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for German (de).
export const B2_DE = {
  "de": {
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "Umfang eines rechtwinkligen Dreiecks berechnen",
      "sec-geometry": "Was ist ein rechtwinkliges Dreieck?",
      "sec-definition": "Was ist der Umfang eines rechtwinkligen Dreiecks?",
      "sec-howto": "Umfang eines rechtwinkligen Dreiecks bestimmen",
      "sec-examples": "Schritt-für-Schritt-Beispiele zum Umfang eines rechtwinkligen Dreiecks",
      "sec-missing": "Umfang berechnen, wenn eine Seite fehlt",
      "sec-applications": "Anwendungen aus dem Alltag: Umfang eines rechtwinkligen Dreiecks",
      "sec-properties": "Besondere Eigenschaften des Umfangs eines rechtwinkligen Dreiecks",
      "sec-vs-area": "Was ist der Unterschied zwischen Umfang und Flächeninhalt?",
      "sec-semiperimeter": "Wie hängen Umfang und Halbumfang zusammen?",
      "sec-units": "Maßeinheiten bei Umfangsberechnungen verstehen",
      "sec-mistakes": "Häufige Fehler bei der Umfangsberechnung",
      "sec-verify": "Prüfen, ob der Umfang korrekt ist",
      "sec-related": "Weitere Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    "sections": {
      "sec-intro": {
        "h2": "Umfang eines rechtwinkligen Dreiecks berechnen",
        "blocks": [
          { "kind": "p", "text": "Nehmen Sie ein rechtwinkliges Dreieck mit den Seiten [[a=3]], [[b=4]] und [[c=5]]. Sein Umfang ist [[P=3+4+5]], also [[[\\boxed{P=12\\text{ units}}]]]. Die Zahl 12 gibt die vollständige Strecke um die Dreiecksbegrenzung an: Laufen Sie alle drei Kanten ab, so haben Sie 12 Einheiten zurückgelegt." },
          { "kind": "p", "text": "Dieser Rechner führt genau diese Addition für jedes rechtwinklige Dreieck aus. Sie geben die beiden Katheten und die Hypotenuse ein, und er liefert die gesamte Begrenzungslänge mit schrittweiser Rechnung und einem Live-Diagramm. Drei Seitenlängen sind erforderlich, weil die Begrenzung drei Kanten hat, und die Hypotenuse muss dabei sein: Sie ist eine dieser drei Kanten, auch wenn sie den rechten Winkel nie berührt. Die beiden Katheten bilden die rechtwinklige Ecke, und die Hypotenuse spannt sich darüber hinweg und schließt die Form." },
          { "kind": "p", "text": "Der Umfang ist eine Längenmessung, keine Flächenmessung. Er beantwortet die Frage „Wie viel Kantenmaterial brauche ich?“ und nicht „Wie viel Fläche liegt innen?“. Dadurch ist er die richtige Zahl, wann immer Sie Zaun, Leisten, Rahmen, Draht, Seil oder Stoffborten um eine rechtwinklige Dreiecksform schätzen." }
        ]
      },
      "sec-geometry": {
        "h2": "Was ist ein rechtwinkliges Dreieck?",
        "blocks": [
          { "kind": "p", "text": "Bevor eine Addition beginnt, müssen die drei Seiten fehlerfrei bezeichnet werden. Die unten stehenden Symbole bleiben im gesamten Leitfaden gleich, und der Rechner verwendet dieselben Bezeichnungen." },
          { "kind": "h3", "text": "Definition eines rechtwinkligen Dreiecks" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein Dreieck mit genau einem Innenwinkel von 90 Grad. Es hat drei Ecken, drei Seiten, zwei spitze Winkel und einen rechten Winkel, der üblicherweise mit einem kleinen Quadrat markiert wird. Die beiden Seiten, die den rechten Winkel bilden, sind die Katheten; die dem rechten Winkel gegenüberliegende Seite ist die Hypotenuse. Weil die Winkel jedes Dreiecks zusammen 180 Grad ergeben, [[A+B+C=180^\\circ]], und mit [[C=90^\\circ]] folgt [[[\\boxed{A+B=90^\\circ}]]]: Die beiden spitzen Winkel sind komplementär, sodass die Kenntnis des einen den anderen bestimmt. Die Winkelsumme spielt beim Erkennen eines rechtwinkligen Dreiecks eine Rolle, weil sie die Prüfung ist, die die Seitenlängen bestehen müssen: Nur eine echte 90-Grad-Ecke erzeugt die Seitenbeziehung, von der der Rest dieses Leitfadens abhängt." },
          { "kind": "h3", "text": "Was sind die beiden Katheten?" },
          { "kind": "p", "text": "Die Kathete [[a]] und die Kathete [[b]] sind die beiden Seiten, die sich in der Ecke des rechten Winkels treffen und senkrecht aufeinander stehen. Je nach Lage des Dreiecks kann eine waagerecht und die andere senkrecht gezeichnet sein; was sie ausmacht, ist die 90-Grad-Ecke, die sie bilden, nicht ihre Richtung auf dem Papier. Sie unterscheiden sich von der Hypotenuse in Lage und Länge: Jede Kathete berührt den rechten Winkel, und jede Kathete ist kürzer als die Hypotenuse. Bei Umfangsberechnungen ist ihre Rolle einfach: Beide sind Begrenzungskanten, also gehen beide in die Summe ein." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die dem rechten Winkel gegenüberliegende Seite, stets die längste Seite des Dreiecks. Sie bildet nie den rechten Winkel; sie spannt sich über ihn hinweg und verbindet die fernen Enden der beiden Katheten. Sie unterscheidet sich von den Katheten in Lage und Länge: Die Katheten treffen sich im 90-Grad-Winkel, während die Hypotenuse jede Kathete in einem spitzen Winkel trifft. Sie vervollständigt die Dreiecksbegrenzung, weshalb sie bei Umfangsberechnungen dabei sein muss. Sind beide Katheten bekannt, stellt der Satz des Pythagoras sie über [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] wieder her." },
          { "kind": "h3", "text": "Wie erkennt man die richtigen Seitenbezeichnungen?" },
          { "kind": "p", "text": "[[a]] und [[b]] sind die beiden Seiten, die sich im 90-Grad-Winkel treffen, und [[c]] liegt dem rechten Winkel gegenüber. In einem nicht entarteten rechtwinkligen Dreieck ist [[c]] die längste Seite. Die rechte-Winkel-Markierung verrät, welche Seite [[c]] ist: Es ist diejenige, die diese Ecke nicht berührt. Eine schnelle Sortierprüfung hilft: Sortieren Sie die drei Zahlen, und die größte muss die Rolle von [[c]] übernehmen. Liegt die größte Seite nicht gegenüber der rechtwinkligen Ecke, sind die Bezeichnungen falsch, und jede darauf aufbauende Berechnung ist ebenfalls falsch." },
          { "kind": "h3", "text": "Gilt die Umfangsformel nur für rechtwinklige Dreiecke?" },
          { "kind": "p", "text": "Hier gibt es einen wichtigen mathematischen Unterschied. Die Formel [[P=a+b+c]] funktioniert für jedes Dreieck, rechtwinklig oder nicht: Jede dreiseitige Begrenzung addiert sich auf dieselbe Weise. Was die Rechtwinkligkeitsbedingung hinzufügt, ist die besondere Beziehung [[a^2+b^2=c^2]], die zum Finden fehlender Seiten nützlich ist und zum Prüfen, ob die Messungen überhaupt ein rechtwinkliges Dreieck beschreiben. Die Umfangsformel ist universell; die Pythagoras-Beziehung ist der Bonus des rechtwinkligen Dreiecks." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck ABC mit Katheten a und b, Hypotenuse c, rechtem Winkel bei C und markierter Umfangsbegrenzung",
        "figcaption": "Dreieck ABC: Die Katheten a und b treffen sich im rechten Winkel C, die Hypotenuse c schließt die Begrenzung, und P = a + b + c folgt allen drei Kanten."
      },
      "sec-definition": {
        "h2": "Was ist der Umfang eines rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "h3", "text": "Definition des Umfangs" },
          { "kind": "p", "text": "Der Umfang ist die Gesamtstrecke um die äußere Begrenzung einer zweidimensionalen Form. Bei einem Dreieck ist er die Summe seiner drei Seitenlängen: [[[\\boxed{P=a+b+c}]]]. Alle drei Seiten müssen dabei sein, weil die Begrenzung erst vollständig ist, wenn jede Kante gezählt wurde. Eine wegzulassen ergibt keinen kürzeren Umfang; es ergibt eine andere, falsche Größe." },
          { "kind": "h3", "text": "Warum zählt die Hypotenuse zum Umfang?" },
          { "kind": "p", "text": "Der Umfang misst die vollständige äußere Begrenzung, und die Hypotenuse ist keine optionale oder innere Messung. Sie ist eine der drei äußeren Kanten. Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Die falsche Rechnung [[3+4=7]] zählt nur die beiden Katheten, die Seiten der rechtwinkligen Ecke. Die richtige Rechnung [[3+4+5=12]] läuft das volle Dreieck ab und kehrt zum Start zurück. Der Wert 7 ist die Gesamtlänge der beiden Katheten, nicht der volle Umfang, weil der Weg vom Ende der Kathete [[b]] zurück zum Anfang der Kathete [[a]] entlang der Hypotenuse verläuft." },
          { "kind": "h3", "text": "Wie funktioniert die Umfangsformel?" },
          { "kind": "p", "text": "Die Formel zerfällt in drei Teile. Erste Seite: [[a]]. Zweite Seite: [[b]]. Dritte Seite: [[c]]. Zusammen: [[P=a+b+c]]. Addition genügt, weil der Umfang eine Längensumme ist und sich Längen entlang eines Weges einfach addieren. Keine Division ist nötig, kein Quadrieren, keine Trigonometrie: Die Formel ist die einfachste mögliche Anwendung der Begrenzungsdefinition." },
          { "kind": "h3", "text": "Was bedeutet der Umfang in der Praxis?" },
          { "kind": "p", "text": "Der Umfang ist die gesamte Begrenzungslänge: das Material, das nötig ist, um ein Objekt einmal zu umrunden. Damit steckt er hinter Kantenmessungen, Rahmenmaßen, Bordlängen, Zaunbedarf, Leisten und Zierleisten sowie Seil- und Drahtlängen. Die äußere Begrenzung zu messen ist eine andere Aufgabe als die darin eingeschlossene Fläche zu messen. Einen dreieckigen Garten einzuzäunen braucht den Umfang; denselben Garten mit Rollrasen zu belegen braucht die Fläche. Wer die beiden verwechselt, kauft das falsche Material." }
        ]
      },
      "sec-howto": {
        "h2": "Umfang eines rechtwinkligen Dreiecks bestimmen",
        "blocks": [
          { "kind": "p", "text": "Die Berechnung folgt einer klaren Reihenfolge. Jeder Schritt hat einen Zweck: erkennen, prüfen, einsetzen, addieren und verifizieren. Das 3-4-5-Dreieck zeigt jeden Schritt." },
          { "kind": "p", "text": "<strong>Schritt 1: Die drei Seiten bestimmen.</strong> Sammeln Sie die Messungen [[a=3]], [[b=4]], [[c=5]]. Dieser Schritt erfasst die Rohdaten vor jeder Rechnung." },
          { "kind": "p", "text": "<strong>Schritt 2: Die beiden senkrechten Katheten bestimmen.</strong> Bestätigen Sie, dass 3 und 4 die Katheten sind, die Seiten der 90-Grad-Ecke. Damit erhalten [[a]] und [[b]] ihre richtigen Rollen." },
          { "kind": "p", "text": "<strong>Schritt 3: Die Hypotenuse gegenüber dem rechten Winkel bestimmen.</strong> Bestätigen Sie, dass 5 die Hypotenuse ist: Sie ist die längste Seite und liegt gegenüber der rechtwinkligen Ecke. Das verhindert den häufigsten Bezeichnungsfehler." },
          { "kind": "p", "text": "<strong>Schritt 4: Bestätigen, dass alle drei Messungen kompatible Einheiten verwenden.</strong> Alle drei sind hier reine Einheiten, also ist keine Umrechnung nötig. Dieser Schritt schützt davor, Meter mit Fuß zu addieren." },
          { "kind": "p", "text": "<strong>Schritt 5: Die Formel aufschreiben.</strong> [[P=a+b+c]]. Sie aufzuschreiben hält die Struktur beim Einsetzen sichtbar." },
          { "kind": "p", "text": "<strong>Schritt 6: Die bekannten Messungen einsetzen.</strong> [[P=3+4+5]]. Jedes Symbol wird durch seine Zahl ersetzt." },
          { "kind": "p", "text": "<strong>Schritt 7: Die drei Werte addieren.</strong> [[P=12]]. Eine Addition ist die ganze Arithmetik." },
          { "kind": "p", "text": "<strong>Schritt 8: Die richtige lineare Maßeinheit anhängen.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Der Umfang ist eine Länge, also trägt er lineare Einheiten, niemals Flächeneinheiten." },
          { "kind": "p", "text": "<strong>Schritt 9: Das Ergebnis verifizieren.</strong> Prüfen Sie [[3^2+4^2=5^2]]: [[9+16=25]]. Die Seiten erfüllen den Satz des Pythagoras, also ist das Dreieck echt rechtwinklig und dem Umfang ist zu trauen." },
          { "kind": "h3", "text": "Warum ist es wichtig, die Seiten richtig zu bezeichnen?" },
          { "kind": "p", "text": "Falsche Bezeichnungen wirken sich auf alles Weitere aus. Die mathematische Verifizierung scheitert, wenn die Hypotenuse falsch bezeichnet ist, weil die Pythagoras-Prüfung erwartet, dass [[c]] die längste Seite ist. Berechnungen fehlender Seiten verwenden unterschiedliche Formeln für eine fehlende Kathete und eine fehlende Hypotenuse, sodass eine vertauschte Bezeichnung die falsche Formel anwendet. Die Rechnereingaben sind auf [[a]], [[b]] und [[c]] abgestimmt, also liefern vertauschte Werte eine plausibel aussehende, aber falsche Antwort. Auch die Live-Dreiecksdarstellung wirkt verzerrt, wenn ein Kathetenwert im Hypotenusenfeld sitzt. Einmal richtig bezeichnet schützt jeden späteren Schritt." },
          { "kind": "h3", "text": "Kann ich den Umfang berechnen, ohne die Hypotenuse zu kennen?" },
          { "kind": "p", "text": "Ja, mit einem Zwischenschritt zuerst. Sind beide Katheten bekannt, lässt sich die Hypotenuse mit dem Satz des Pythagoras finden: [[c=\\sqrt{a^2+b^2}]]. Sobald [[c]] bekannt ist, folgt der Umfang durch gewöhnliche Addition. Das bedeutet nicht, dass der vorhandene Umfangsrechner nur zwei Seiten akzeptiert: Der Rechner braucht alle drei Eingaben, also muss die fehlende Seite von Hand (oder mit dem Seitenrechner) berechnet werden, bevor Werte eingegeben werden." }
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zum Umfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Die vier Beispiele unten behalten die vorhandenen Rechenfälle und erweitern ihre Erklärungen. Jedes setzt ein, addiert und verifiziert dann über den Satz des Pythagoras." },
          { "kind": "h3", "text": "Beispiel 1: 3-4-5-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formel: [[P=a+b+c]]" },
          { "kind": "p", "text": "Einsetzen: [[P=3+4+5]]" },
          { "kind": "p", "text": "Addieren: [[P=12]]" },
          { "kind": "p", "text": "Endergebnis: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Probe: [[3^2+4^2=5^2]], also [[9+16=25]]. Die Messungen erfüllen den Satz des Pythagoras, bilden also ein rechtwinkliges Dreieck: Die beiden kleineren Quadrate über den Katheten füllen genau das Quadrat über der Hypotenuse." },
          { "kind": "h3", "text": "Beispiel 2: 5-12-13-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Einsetzen: [[P=5+12+13]]" },
          { "kind": "p", "text": "Endergebnis: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Probe: [[5^2+12^2=13^2]], also [[25+144=169]]. Die Gleichheit bestätigt ein gültiges rechtwinkliges Dreieck." },
          { "kind": "h3", "text": "Beispiel 3: 8-15-17-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Einsetzen: [[P=8+15+17]]" },
          { "kind": "p", "text": "Endergebnis: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Probe: [[8^2+15^2=17^2]], also [[64+225=289]]. Wieder gleichen sich die Quadrate aus und bestätigen den rechten Winkel." },
          { "kind": "h3", "text": "Beispiel 4: Dezimale Seitenlängen" },
          { "kind": "p", "text": "Gegeben: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Einsetzen: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Endergebnis: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Probe: [[2.5^2+6^2=6.5^2]], also [[6.25+36=42.25]]. Dezimalwerte ändern nichts an der Formel: Die Addition funktioniert für ganze Zahlen und Dezimalzahlen gleich, und die Probenrechnung ist identisch." }
        ],
        "table": {
          "headers": ["Dreieck", "Kathete a", "Kathete b", "Hypotenuse c", "Umfang P", "Probe"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["Die Tabelle zeigt, wie unterschiedliche Seitenlängen unterschiedliche Begrenzungsmaße ergeben, während der gleiche Zwei-Schritt-Rhythmus, erst addieren, dann verifizieren, unverändert bleibt."]
      },
      "sec-missing": {
        "h2": "Umfang eines rechtwinkligen Dreiecks mit einer fehlenden Seite berechnen",
        "blocks": [
          { "kind": "p", "text": "Der vorhandene Umfangsrechner benötigt alle drei Seitenlängen. Ist eine Seite unbekannt, berechnen Sie sie zuerst mit dem Satz des Pythagoras und addieren dann. Die drei Fälle unten decken jede Möglichkeit ab." },
          { "kind": "h3", "text": "Fall 1: Die fehlende Hypotenuse finden" },
          { "kind": "p", "text": "Wenn beide Katheten bekannt sind: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Beispiel: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Jetzt berechnen: [[P=6+8+10]], also [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Fall 2: Eine fehlende Kathete finden" },
          { "kind": "p", "text": "Wenn die Hypotenuse [[c]] und die Kathete [[a]] bekannt sind: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Beispiel: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Jetzt berechnen: [[P=5+12+13]], also [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Fall 3: Die andere fehlende Kathete finden" },
          { "kind": "p", "text": "Wenn die Hypotenuse [[c]] und die Kathete [[b]] bekannt sind: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Beispiel: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Jetzt berechnen: [[P=8+15+17]], also [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Warum muss man zuerst die fehlende Seite finden?" },
          { "kind": "p", "text": "Der Umfang steht für die vollständige Begrenzung. Eine unbekannte Seite zu ignorieren ergibt ein unvollständiges Ergebnis: Zwei bekannte Seiten ergeben einen Teilweg, nicht den Umfang. Diese Berechnungen fehlender Seiten sind unterstützende mathematische Verfahren, keine zusätzlichen Modi im vorhandenen Umfangsrechner. Kennen Sie nur zwei Seiten, stellt der Seitenrechner für rechtwinklige Dreiecke die dritte wieder her, und dann erledigt der Umfangsrechner den Rest." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck mit Katheten 6 und 8, Hypotenuse 10 per Pythagoras, dann Umfang 24",
        "figcaption": "Aus den Katheten 6 und 8 ergibt der Satz des Pythagoras c = 10, dann ist P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Anwendungen des Umfangs eines rechtwinkligen Dreiecks aus dem Alltag",
        "blocks": [
          { "kind": "p", "text": "Zwölf realistische, vollständig durchgerechnete Beispiele folgen. Jedes nennt eine Situation, gibt drei Seitenmessungen an, zeigt die Addition und erklärt, was das Ergebnis schätzen hilft. Behandeln Sie jedes als vereinfachtes rechtwinklig-dreieckiges geometrisches Modell: Echte Objekte sind selten perfekte Dreiecke, also liegen Materialzugaben, Verschnitt und Bauvermessung außerhalb der Umfangsangabe selbst." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiger Glasfensterrahmen" },
          { "kind": "p", "text": "Ein dreieckiger Fensterrahmen hat [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Dann [[P=3+4+5]], also [[[\\boxed{P=12\\text{ m}}]]]. Die 12 Meter stehen für die Gesamtlänge um den dreieckigen Fensterumriss, die Länge des zuzuschneidenden Rahmenmaterials. Rahmenverbindungen und Zuschnittzugaben können zusätzliches Material über die 12 Meter hinaus erfordern." },
          { "kind": "h3", "text": "Beispiel 2: Dachkantenverkleidung" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Dachabschnitt hat [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Dann [[P=6+8+10]], also [[[\\boxed{P=24\\text{ ft}}]]]. Der Umfang schätzt die Verkleidung um den dreieckigen Dachgiebelumriss. Ecken und Überlappungen an der Traufe kommen zur Kauflänge hinzu." },
          { "kind": "h3", "text": "Beispiel 3: Dreieckiger Gartenzaun" },
          { "kind": "p", "text": "Ein dreieckiger Gartenabschnitt hat [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Dann [[P=5+12+13]], also [[[\\boxed{P=30\\text{ m}}]]]. Die gesamte Begrenzungslänge schätzt den Zaunbedarf um den Garten. Tore, Pfosten, Überlappungen und Montagezugaben werden getrennt von den 30 Metern Zaunlinie gezählt." },
          { "kind": "h3", "text": "Beispiel 4: Stahlstützwinkel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Metallwinkel hat [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Dann [[P=8+15+17]], also [[[\\boxed{P=40\\text{ cm}}]]]. Der Umfang beschreibt die Außenkante des Winkels und hilft, schützendes Kantenmaterial zu schätzen. Er bestimmt nicht die Tragfähigkeit, die von Dicke, Legierung und Lastpfaden abhängt statt von der Kantenlänge." },
          { "kind": "h3", "text": "Beispiel 5: Dreieckiges Stoffbanner" },
          { "kind": "p", "text": "Ein Stoffbanner hat [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Dann [[P=9+12+15]], also [[[\\boxed{P=36\\text{ ft}}]]]. Der Umfang schätzt die gesamte Kantenlänge, die gesäumt oder eingefasst werden muss. Zusätzlicher Stoff für Nähte und Falten ist in den 36 Fuß nicht enthalten." },
          { "kind": "h3", "text": "Beispiel 6: Dreieckiger Schildrahmen" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Schildpaneel hat [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Dann [[P=12+16+20]], also [[[\\boxed{P=48\\text{ in}}]]]. Der Umfang schätzt den Rahmen oder die dekorative Borte um das Paneel." },
          { "kind": "h3", "text": "Beispiel 7: Landschaftsbegrenzung" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Landschaftsabschnitt hat [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Dann [[P=7+24+25]], also [[[\\boxed{P=56\\text{ m}}]]]. Dieses Ergebnis schätzt die volle Länge der Landschaftseinfassung für den Abschnitt, vor Verschnitt und Fugenüberlappung." },
          { "kind": "h3", "text": "Beispiel 8: Solarpanel-Stützrahmen" },
          { "kind": "p", "text": "Ein kleiner rechtwinklig-dreieckiger Stützrahmen hat [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Dann [[P=9+40+41]], also [[[\\boxed{P=90\\text{ cm}}]]]. Der Umfang beschreibt den vollständigen Dreiecksumriss des Rahmens." },
          { "kind": "h3", "text": "Beispiel 9: Dreieckige Markisenkante" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Markisenabschnitt hat [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Dann [[P=15+20+25]], also [[[\\boxed{P=60\\text{ ft}}]]]. Der Umfang schätzt das Bordmaterial um den Stoff, ohne Befestigungsteile." },
          { "kind": "h3", "text": "Beispiel 10: Lagerhallen-Giebelverkleidung" },
          { "kind": "p", "text": "Ein vereinfachter Lagerhallen-Giebelabschnitt hat [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Dann [[P=11+60+61]], also [[[\\boxed{P=132\\text{ ft}}]]]. Der Gesamtumfang steht für die drei Außenkanten des modellierten Dreiecksabschnitts." },
          { "kind": "h3", "text": "Beispiel 11: Industrielles Fertigungspaneel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Fertigungspaneel hat [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Dann [[P=13+84+85]], also [[[\\boxed{P=182\\text{ cm}}]]]. Das Ergebnis hilft, schützende Kantprofile oder Bordmaterial für das Paneel zu schätzen." },
          { "kind": "h3", "text": "Beispiel 12: Sperrholz-Stützwinkel" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Sperrholz-Stützplatte hat [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Dann [[P=28+45+53]], also [[[\\boxed{P=126\\text{ cm}}]]]. Der Umfang steht für die vollständige Außenkante der Sperrholzplatte." }
        ],
        "table": {
          "headers": ["Praktische Anwendung", "Kathete a", "Kathete b", "Hypotenuse c", "Umfang P", "Maßeinheit"],
          "rows": [
            ["Dreieckiger Glasfensterrahmen", "3", "4", "5", "12", "m"],
            ["Dachkantenverkleidung", "6", "8", "10", "24", "ft"],
            ["Dreieckiger Gartenzaun", "5", "12", "13", "30", "m"],
            ["Stahlstützwinkel", "8", "15", "17", "40", "cm"],
            ["Dreieckiges Stoffbanner", "9", "12", "15", "36", "ft"],
            ["Dreieckiger Schildrahmen", "12", "16", "20", "48", "in"],
            ["Landschaftsbegrenzung", "7", "24", "25", "56", "m"],
            ["Solarpanel-Stützrahmen", "9", "40", "41", "90", "cm"],
            ["Dreieckige Markisenkante", "15", "20", "25", "60", "ft"],
            ["Lagerhallen-Giebelverkleidung", "11", "60", "61", "132", "ft"],
            ["Industrielles Fertigungspaneel", "13", "84", "85", "182", "cm"],
            ["Sperrholz-Stützwinkel", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Beachten Sie die praktischen Grenzen: Materialzugaben können nötig sein, Verschnitt ist nicht enthalten, Rahmenverbindungen können den Materialbedarf erhöhen, Tore und Öffnungen beeinflussen Zaunmengen, tatsächliche Baumaße sollten verifiziert werden, und der Umfang allein bestimmt weder Tragfähigkeit noch Belastbarkeit."],
        "imgAlt": "Vier Alltagsbeispiele zum Dreiecksumfang: Fensterrahmen, Dachkante, Gartenrand, Stahlwinkel",
        "figcaption": "Fenster, Dach, Garten und Winkel: Jedes Bild zeigt die dreieckige Begrenzung und ihren Umfang."
      },
      "sec-properties": {
        "h2": "Besondere Eigenschaften des Umfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Über die einfache Addition hinaus gehorcht der Umfang eines rechtwinkligen Dreiecks mehreren scharfen Ungleichungen. Sie dienen zugleich als schnelle Plausibilitätsprüfungen für jedes berechnete Ergebnis." },
          { "kind": "h3", "text": "Der Umfang ist größer als das Doppelte der Hypotenuse" },
          { "kind": "p", "text": "Für jedes gültige Dreieck liefert die Dreiecksungleichung [[a+b>c]]. Addieren Sie [[c]] auf beiden Seiten: [[a+b+c>2c]]. Daher [[[\\boxed{P>2c}]]]. In einfachen Worten: Die beiden Katheten zusammen sind immer länger als die Hypotenuse, also bleibt die Ungleichung beim beidseitigen Addieren der Hypotenuse in dieselbe Richtung zeigen. Beim 3-4-5-Dreieck ist [[P=12]] und [[2c=10]], und 12 ist tatsächlich größer als 10." },
          { "kind": "h3", "text": "Der Umfang ist kleiner als das Dreifache der Hypotenuse" },
          { "kind": "p", "text": "Da die Hypotenuse länger als jede Kathete ist, gilt [[a<c]] und [[b<c]]. Daher [[a+b<2c]]. Das Addieren von [[c]] ergibt [[[\\boxed{P<3c}]]]. Das ist eine nützliche Schnellprüfung: Ein angegebener Umfang ab dem Dreifachen der Hypotenuse kann zu keinem gültigen rechtwinkligen Dreieck gehören. Beim 3-4-5-Dreieck ist [[3c=15]], und 12 liegt bequem darunter." },
          { "kind": "h3", "text": "Umfang eines 45-45-90-Dreiecks" },
          { "kind": "p", "text": "In einem 45-45-90-Dreieck haben beide Katheten dieselbe Länge. Jede Kathete sei [[k]]. Die Hypotenuse ist [[c=k\\sqrt{2}]]. Daher [[P=k+k+k\\sqrt{2}]], oder [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Mit [[k=5]] ist der Umfang [[5(2+\\sqrt{2})\\approx17.07]]: zwei Katheten von 5 plus eine Hypotenuse von etwa 7,07." },
          { "kind": "h3", "text": "Umfang eines 30-60-90-Dreiecks" },
          { "kind": "p", "text": "Ist die kürzeste Kathete [[k]], so ist die längere Kathete [[k\\sqrt{3}]] und die Hypotenuse [[2k]]. Daher [[P=k+k\\sqrt{3}+2k]], oder [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Mit [[k=4]] sind die Seiten 4, etwa 6,93 und 8, was einen Umfang von etwa 18,93 ergibt." },
          { "kind": "h3", "text": "Welches rechtwinklige Dreieck hat bei fester Hypotenuse den größten Umfang?" },
          { "kind": "p", "text": "Intuitiv wächst der Umfang bei fester Hypotenuse, wenn die beiden Katheten gemeinsam wachsen, und er ist am größten, wenn keine Kathete zu kurz kommt: wenn beide Katheten gleich sind. Das ist das 45-45-90-Dreieck. Die präzise Aussage verwendet die Ungleichung [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Da [[a^2+b^2=c^2]], folgt [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], mit Gleichheit genau dann, wenn [[a=b]]. Unter allen rechtwinkligen Dreiecken mit einer Hypotenuse gewinnt also das gleichschenklig-rechtwinklige Dreieck den Umfangswettbewerb." }
        ]
      },
      "sec-vs-area": {
        "h2": "Was ist der Unterschied zwischen Umfang und Flächeninhalt?",
        "blocks": [
          { "kind": "p", "text": "Umfang und Fläche beschreiben beide ein Dreieck, beantworten aber verschiedene Fragen. Dieser Abschnitt zieht die Grenze sorgfältig." },
          { "kind": "h3", "text": "Der Umfang misst die äußere Begrenzung" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] misst die Gesamtstrecke um das Dreieck. Seine Einheiten sind linear: Meter, Zentimeter, Millimeter, Fuß, Zoll. Er sagt, wie viel Material die Kante nachzeichnet." },
          { "kind": "h3", "text": "Die Fläche misst die eingeschlossene Oberfläche" },
          { "kind": "p", "text": "Für ein rechtwinkliges Dreieck gilt [[[\\boxed{K=\\frac{ab}{2}}]]]. Die beiden senkrechten Katheten dienen als Grundseite und Höhe, also taucht keine Hypotenuse in der Formel auf. Die Fläche verwendet Flächeneinheiten: Quadratmeter, Quadratzentimeter, Quadratfuß, Quadratzoll. Sie sagt, wie viel Oberfläche innerhalb der Begrenzung liegt." },
          { "kind": "h3", "text": "Vergleichsrechnung am 3-4-5-Dreieck" },
          { "kind": "p", "text": "Umfang: [[P=3+4+5]], also [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Fläche: [[K=\\frac{3\\times4}{2}]], also [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Die Zahlen 12 und 6 beschreiben völlig verschiedene Eigenschaften desselben Dreiecks: die eine ist der Weg darum herum, die andere der Boden, den es bedeckt." },
          { "kind": "h3", "text": "Können zwei rechtwinklige Dreiecke denselben Umfang, aber verschiedene Flächen haben?" },
          { "kind": "p", "text": "Ja. Der Umfang allein bestimmt die Fläche nicht eindeutig; Form und Proportionen des Dreiecks beeinflussen seine eingeschlossene Fläche. Ein 3-4-5-Dreieck hat Umfang 12 und Fläche 6. Ein 45-45-90-Dreieck kann ebenfalls Umfang 12 haben: Aus [[P=k(2+\\sqrt{2})=12]] folgt die Kathete [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], und seine Fläche ist [[K=\\frac{k^2}{2}\\approx6.18]] Flächeneinheiten, etwas größer als 6. Gleiche Begrenzungslänge, verschiedenes Inneres: Die gleichschenklige Form schließt einen Hauch mehr ein." }
        ],
        "imgAlt": "3-4-5-Dreieck mit markierter Begrenzung P gleich 12 und schattierter Innenfläche K gleich 6",
        "figcaption": "Die markierte Kante ist der Umfang; das schattierte Innere ist die Fläche. Zwei verschiedene Messgrößen."
      },
      "sec-semiperimeter": {
        "h2": "Wie hängen Umfang und Halbumfang zusammen?",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang ist die Hälfte des vollen Umfangs: [[[\\boxed{s=\\frac{P}{2}}]]]. Für ein rechtwinkliges Dreieck ist das [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Er bleibt auf dieser Seite eine unterstützende Messgröße, kein zweites Hauptthema." },
          { "kind": "h3", "text": "Zahlenbeispiel" },
          { "kind": "p", "text": "Nehmen Sie [[a=3,\\;b=4,\\;c=5]]. Der Umfang ist [[P=12]], also ist der Halbumfang [[s=\\frac{12}{2}=6]]. Beide sind lineare Messungen in denselben Einheiten; die eine ist einfach die Hälfte der anderen." },
          { "kind": "h3", "text": "Warum ist der Halbumfang nützlich?" },
          { "kind": "p", "text": "Der Halbumfang ist eine wichtige Zwischenmessung in der Dreiecksgeometrie. Er taucht in der Formel von Heron für die Fläche auf, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], und in der Inkreisradius-Beziehung [[K=rs]], und er vereinfacht mehrere fortgeschrittene Geometriebeweise. Wann immer eine Formel [[s]] verlangt, berechnen Sie zuerst den Umfang und halbieren ihn. Für ein eigenes Werkzeug verwenden Sie den Halbumfangsrechner für rechtwinklige Dreiecke." }
        ]
      },
      "sec-units": {
        "h2": "Maßeinheiten bei Umfangsberechnungen für rechtwinklige Dreiecke verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Umfang funktioniert in jeder Längeneinheit: Meter, Zentimeter, Millimeter, Kilometer, Fuß, Zoll, Yard oder Meilen. Die Zahl ändert sich mit der Einheit, das Dreieck nicht." },
          { "kind": "h3", "text": "Warum müssen alle drei Seitenmessungen kompatible Einheiten verwenden?" },
          { "kind": "p", "text": "Der Umfang wird durch Addition berechnet, und Addition ergibt nur zwischen gleichartigen Größen Sinn. 3 Fuß zu 48 Zoll ohne Umrechnung zu addieren mischt zwei Maßstäbe und erzeugt eine bedeutungslose Summe. Rechnen Sie zuerst jede Seite in eine gemeinsame Einheit um, dann addieren Sie." },
          { "kind": "h3", "text": "Durchgerechnetes Umrechnungsbeispiel" },
          { "kind": "p", "text": "Gegeben [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Rechnen Sie Zoll in Fuß um: [[48\\text{ inches}=4\\text{ ft}]]. Nun sind alle drei Seiten in Fuß, also [[P=3+4+5]] und [[[\\boxed{P=12\\text{ ft}}]]]. Die Umrechnung muss vor der Addition geschehen, nicht danach." },
          { "kind": "h3", "text": "Wie die Einheitenauswahl des Rechners hilft" },
          { "kind": "p", "text": "Jede der drei Eingaben auf dieser Seite trägt eine eigene Einheitenauswahl. Wählen Sie für verschiedene Seiten verschiedene Einheiten, rechnet der Rechner jede Eingabe automatisch in die gemeinsame Einheit um, bevor er addiert: Er liest die für die erste Seite gewählte Einheit und skaliert die anderen beiden passend um, mit exakten Längenverhältnissen (1 Zoll = 0,0254 m, 1 Fuß = 0,3048 m und so weiter). Das Ergebnis wird in dieser gemeinsamen Einheit angegeben. Sie können weiterhin von Hand umrechnen wie oben gezeigt, aber die Auswahlen nehmen Ihnen die Arithmetik ab." },
          { "kind": "h3", "text": "Mit dezimalen Messungen arbeiten" },
          { "kind": "p", "text": "Nehmen Sie [[a=2.5,\\;b=6,\\;c=6.5]]. Dann [[P=2.5+6+6.5]], also [[[\\boxed{P=15\\text{ units}}]]]. Dezimalwerte werden genau wie ganze Zahlen addiert; die Dezimalpunkte stehen in der Summe einfach untereinander." },
          { "kind": "h3", "text": "Mit irrationalen Seitenlängen arbeiten" },
          { "kind": "p", "text": "Nehmen Sie ein Dreieck mit [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Dann [[P=1+1+\\sqrt{2}]], also [[[\\boxed{P=2+\\sqrt{2}}]]], ungefähr [[P\\approx3.4142]]. Die exakte Wurzelform zu behalten ist in mathematischen Aufgaben nützlich, weil sie die volle Genauigkeit bewahrt; die Dezimalnäherung dient der Endangabe." },
          { "kind": "h3", "text": "Warum sollte man zu frühes Runden vermeiden?" },
          { "kind": "p", "text": "Vorzeitiges Runden trägt kleine Fehler ein, die die abschließende Addition dann behält. Ist eine Seite irrational, wie [[\\sqrt{2}]], schneidet das Runden auf 1,41 vor dem Addieren einen Teil der wahren Länge ab, und bei mehreren solchen Seiten summiert sich der Fehler. Halten Sie die volle Genauigkeit durch die Zwischenrechnungen und runden Sie nur das Endergebnis auf die Genauigkeit, die die Aufgabe verlangt." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Berechnung des Umfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Sechzehn Fehler erklären fast jeden falschen Umfang. Jeder wird mit seiner Ursache und dem richtigen Vorgehen erklärt." },
          { "kind": "p", "text": "<strong>1. Die Hypotenuse vergessen.</strong> Der häufigste Fehler: die beiden Katheten addieren und aufhören. Bei 3-4-5 ergibt das 7 statt 12. Addieren Sie immer alle drei Seiten." },
          { "kind": "p", "text": "<strong>2. Nur die beiden Katheten verwenden.</strong> Dieselbe Ursache wie oben, oft durch falsches Lesen der Aufgabe. Die Begrenzung hat drei Kanten; zählen Sie drei." },
          { "kind": "p", "text": "<strong>3. Umfang mit Fläche verwechseln.</strong> Der Umfang ist [[a+b+c]] in linearen Einheiten; die Fläche ist [[ab/2]] in Flächeneinheiten. Lesen Sie die Frage: „herum“ bedeutet Umfang, „innen“ bedeutet Fläche." },
          { "kind": "p", "text": "<strong>4. Die Hypotenuse als Kathete eingeben.</strong> Den längsten Wert in ein Kathetenfeld zu setzen bricht die Geometrie. Das Hypotenusenfeld muss die längste Seite enthalten." },
          { "kind": "p", "text": "<strong>5. Die falsche Seite als Hypotenuse wählen.</strong> Wird 4 als [[c]] eingegeben, während 5 in einem Kathetenfeld sitzt, scheitert jede Prüfung. Sortieren Sie zuerst die Werte: Die größte ist [[c]]." },
          { "kind": "p", "text": "<strong>6. Messungen verwenden, die kein rechtwinkliges Dreieck bilden.</strong> Testen Sie [[a^2+b^2=c^2]], bevor Sie der Bezeichnung „rechtwinkliges Dreieck“ trauen. Scheitert sie, addiert die Umfangsformel zwar weiter, aber das Dreieck ist nicht rechtwinklig." },
          { "kind": "p", "text": "<strong>7. Zentimeter und Meter mischen.</strong> 3 m zu 40 cm zu addieren ergibt weder 43 von dem einen noch von dem anderen. Rechnen Sie zuerst in eine Einheit um." },
          { "kind": "p", "text": "<strong>8. Fuß und Zoll mischen.</strong> Die klassische imperiale Falle. Rechnen Sie Zoll vor dem Addieren in Fuß um (durch 12 teilen) oder überlassen Sie es den Einheitenauswahlen." },
          { "kind": "p", "text": "<strong>9. Den Umfang in Flächeneinheiten angeben.</strong> Ein Umfang von 12 cm zum Quadrat ist ein Kategorienfehler: Der Weg um ein Dreieck ist eine Länge, gemessen in cm, m, ft oder in." },
          { "kind": "p", "text": "<strong>10. Messungen zu früh runden.</strong> [[\\sqrt{2}]] vor dem Addieren auf 1,4 zu runden häuft Fehler an. Runden Sie nur die endgültige Antwort." },
          { "kind": "p", "text": "<strong>11. Vergessen, eine fehlende Seite zu berechnen.</strong> Zwei bekannte Seiten sind kein Umfang. Stellen Sie die dritte zuerst mit dem Satz des Pythagoras wieder her, dann addieren Sie." },
          { "kind": "p", "text": "<strong>12. Den Satz des Pythagoras falsch anwenden.</strong> Die Hypotenusenform addiert Quadrate ([[c=\\sqrt{a^2+b^2}]]); die Kathetenform subtrahiert ([[b=\\sqrt{c^2-a^2}]]). Sie zu vertauschen erfindet eine Seite, die es nicht gibt." },
          { "kind": "p", "text": "<strong>13. Negative oder null Seitenlängen eingeben.</strong> Längen sind positiv. Eine null oder negative Eingabe beschreibt kein Dreieck, und der Rechner weist sie zu Recht zurück." },
          { "kind": "p", "text": "<strong>14. Die Dreiecksungleichung ignorieren.</strong> Wenn [[a+b\\leq c]], können die drei Längen überhaupt kein Dreieck bilden. Prüfen Sie vor dem Rechnen." },
          { "kind": "p", "text": "<strong>15. Annehmen, der Halbumfang sei der volle Umfang.</strong> Die Summe durch 2 zu teilen ergibt [[s]], nicht [[P]]. Bei 3-4-5 ist [[(3+4+5)/2=6]] der Halbumfang; der Umfang ist 12." },
          { "kind": "p", "text": "<strong>16. Annehmen, der Umfang allein bestimme die Fläche des Dreiecks.</strong> Wie der Vergleich von 3-4-5 mit 45-45-90 zeigte, können gleiche Umfänge verschiedene Flächen verbergen. Der Umfang fixiert die Begrenzung, nicht das Innere." },
          { "kind": "p", "text": "<strong>Falsch gegen richtig, Seite an Seite.</strong> Gegeben [[a=3,\\;b=4,\\;c=5]]: Falsch ist [[P=3+4=7]], was die Hypotenuse weglässt und nur die beiden Katheten misst. Richtig ist [[P=3+4+5=12]]. Und [[(3+4+5)/2=6]] ist der Halbumfang, eine andere Größe mit eigenen Verwendungen, nicht der volle Umfang." }
        ]
      },
      "sec-verify": {
        "h2": "Prüfen, ob der Umfang eines rechtwinkligen Dreiecks korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Sieben unabhängige Prüfungen fangen fast jeden Fehler. Das 3-4-5-Dreieck zeigt jede. Unabhängige Prüfungen zählen, weil sie auf verschiedene Weise scheitern: Wenn zwei voneinander unabhängige Verfahren übereinstimmen, hat sich die Antwort ihr Vertrauen verdient, ob sie in Hausaufgaben, technische Zeichnungen oder Materialplanung einfließt." },
          { "kind": "p", "text": "<strong>Methode 1: Alle drei Seiten noch einmal addieren.</strong> Rechnen Sie [[P=a+b+c]] von vorn: [[3+4+5=12]]. Ein zweiter Durchgang fängt Tipp- und Rechenfehler." },
          { "kind": "p", "text": "<strong>Methode 2: Die Pythagoras-Beziehung verifizieren.</strong> Prüfen Sie [[a^2+b^2=c^2]]: [[9+16=25]]. Das bestätigt, dass die Seiten ein rechtwinkliges Dreieck bilden, was die Seitenbezeichnungen gültig macht, von denen der Umfang abhängt." },
          { "kind": "p", "text": "<strong>Methode 3: Die Hypotenuse prüfen.</strong> Bestätigen Sie [[c>a]] und [[c>b]]: 5 ist größer als 3 und größer als 4. Ist die vermeintliche Hypotenuse nicht die längste Seite, sind die Bezeichnungen falsch." },
          { "kind": "p", "text": "<strong>Methode 4: Die Dreiecksungleichung prüfen.</strong> Bestätigen Sie [[a+b>c]]: [[3+4=7>5]]. Die Summe zweier beliebiger Seiten muss die dritte übertreffen, sonst existiert kein Dreieck." },
          { "kind": "p", "text": "<strong>Methode 5: Die Umfangsschranken prüfen.</strong> Bestätigen Sie [[2c<P<3c]]: [[10<12<15]]. Diese Schranken sind schnelle Kopfrechnungen für jedes gültige rechtwinklige Dreieck." },
          { "kind": "p", "text": "<strong>Methode 6: Die Maßeinheiten prüfen.</strong> Bestätigen Sie, dass alle drei Eingaben eine Einheit teilen. Gemischte Einheiten machen die Summe ungültig, auch wenn die Arithmetik perfekt ist." },
          { "kind": "p", "text": "<strong>Methode 7: Das Ergebnis mit der Live-Darstellung vergleichen.</strong> Das vorhandene Diagramm auf dieser Seite zeichnet das Dreieck aus Ihren Eingaben neu. War eine Seite falsch bezeichnet oder ein Wert vertippt, sieht das Bild falsch aus: eine Hypotenuse kürzer als eine Kathete oder eine Form, die sich nicht schließt. Trauen Sie dem Bild, wenn es der Zahl widerspricht, und finden Sie dann den Eingabefehler." }
        ]
      },
      "sec-conclusion": {
        "h2": "Drei Seiten, eine Begrenzung, keine Abkürzungen",
        "blocks": [
          { "kind": "p", "text": "Der Umfang eines rechtwinkligen Dreiecks ist die einfachste Idee auf dieser Seite und die leichteste, die man durch Weglassen falsch macht. Die Formel verlangt drei Zahlen, weil die Begrenzung drei Kanten hat, und die Hypotenuse verdient ihren Platz in der Summe als die Kante, die die Form schließt. Alles andere, die Schritt-für-Schritt-Methode, das Wiederherstellen fehlender Seiten, die Ungleichungen, die Verifizierungsprüfungen, existiert, um diese eine Addition vor den kleinen Bezeichnungs- und Einheitenfehlern zu schützen, die plausibel aussehende falsche Antworten erzeugen." },
          { "kind": "p", "text": "Verwenden Sie den Rechner dieser Seite, wann immer alle drei Seiten gemessen sind, stellen Sie eine fehlende Seite über den Satz des Pythagoras wieder her, wenn das nicht der Fall ist, und prüfen Sie das Ergebnis an den Schranken 2c < P < 3c, bevor die Zahl in eine Materialbestellung einfließt. Wendet sich die Frage der Fläche innerhalb der Begrenzung zu, wartet der Flächenrechner; wendet sie sich der halben Begrenzung für eine tiefere Formel zu, übernimmt der Halbumfangsrechner." }
        ]
      }
    },
    "relatedHeading": "Weitere Rechner für rechtwinklige Dreiecke entdecken",
    "relatedIntro": "Jedes dieser Werkzeuge erweitert die Umfangsberechnung in eine Richtung: fehlende Seiten, Halbumfänge, Flächen, kombinierte Messwerte oder der Satz dahinter.",
    "relatedItems": [
      "Messwertrechner für rechtwinklige Dreiecke",
      "Halbumfangsrechner für rechtwinklige Dreiecke",
      "Seitenrechner für rechtwinklige Dreiecke",
      "Flächenrechner für rechtwinklige Dreiecke",
      "Rechner zum Satz des Pythagoras"
    ],
    "faqHeading": "Häufige Fragen",
    "faqs": [
      {
        "question": "Wie lautet die Formel für den Umfang eines rechtwinkligen Dreiecks?",
        "answer": "Die Formel lautet P = a + b + c, wobei a und b die beiden Katheten sind, die den 90-Grad-Winkel bilden, und c die Hypotenuse, die längste Seite. Addieren Sie alle drei Seitenlängen; das Ergebnis ist die gesamte Begrenzungslänge in linearen Einheiten."
      },
      {
        "question": "Wie berechne ich den Umfang eines rechtwinkligen Dreiecks?",
        "answer": "Bestimmen Sie die beiden Katheten und die Hypotenuse, bestätigen Sie, dass alle drei dieselbe Einheit verwenden, setzen Sie in P = a + b + c ein und addieren Sie. Für ein 3-4-5-Dreieck: P = 3 + 4 + 5 = 12 Einheiten. Der Rechner auf dieser Seite führt dieselben Schritte aus und zeigt seine Rechnung."
      },
      {
        "question": "Warum muss ich die Hypotenuse einbeziehen?",
        "answer": "Die Hypotenuse ist eine der drei Außenkanten des Dreiecks, also ist die Begrenzung ohne sie unvollständig. Nur die beiden Katheten eines 3-4-5-Dreiecks zu addieren ergibt 7, was die Gesamtkathetenlänge ist, nicht der Umfang. Der volle Weg um das Dreieck ist 3 + 4 + 5 = 12."
      },
      {
        "question": "Kann ich den Umfang berechnen, wenn eine Seite fehlt?",
        "answer": "Ja, aber stellen Sie die fehlende Seite zuerst mit dem Satz des Pythagoras wieder her. Bei den Katheten 6 und 8 ist die Hypotenuse sqrt(36 + 64) = 10, also ist der Umfang 6 + 8 + 10 = 24. Bei der Hypotenuse 13 und der Kathete 5 ist die fehlende Kathete sqrt(169 - 25) = 12, also ist der Umfang 30."
      },
      {
        "question": "Wie finde ich die Hypotenuse, bevor ich den Umfang berechne?",
        "answer": "Verwenden Sie c = sqrt(a^2 + b^2), wenn beide Katheten bekannt sind. Für die Katheten 6 und 8: c = sqrt(36 + 64) = sqrt(100) = 10. Sobald die Hypotenuse bekannt ist, addieren Sie alle drei Seiten zum Umfang."
      },
      {
        "question": "Ist die Umfangsformel für ein rechtwinkliges Dreieck anders?",
        "answer": "Nein. P = a + b + c funktioniert für jedes Dreieck. Das Besondere am rechtwinkligen Dreieck ist die Pythagoras-Beziehung a^2 + b^2 = c^2, mit der man eine fehlende Seite finden oder verifizieren kann, dass die Messungen wirklich ein rechtwinkliges Dreieck bilden."
      },
      {
        "question": "Wie groß ist der Umfang eines 3-4-5-rechtwinkligen Dreiecks?",
        "answer": "Der Umfang ist 3 + 4 + 5 = 12 Einheiten. Die Seiten erfüllen 9 + 16 = 25, was den rechten Winkel bestätigt. Skalierte Versionen wie 6-8-10 oder 9-12-15 behalten dieselbe Form bei proportional größeren Umfängen."
      },
      {
        "question": "Wie verifiziere ich, dass drei Seiten ein rechtwinkliges Dreieck bilden?",
        "answer": "Prüfen Sie, dass a^2 + b^2 = c^2 gilt, mit c als längster Seite. Für 3, 4, 5: 9 + 16 = 25, also ist das Dreieck rechtwinklig. Scheitert die Gleichheit, addiert die Umfangsformel zwar weiter, aber das Dreieck ist kein rechtwinkliges Dreieck."
      },
      {
        "question": "Was ist der Unterschied zwischen Umfang und Fläche?",
        "answer": "Der Umfang (P = a + b + c) misst die Gesamtstrecke um das Dreieck in linearen Einheiten wie Metern oder Fuß. Die Fläche (K = ab/2) misst die Oberfläche innerhalb des Dreiecks in Flächeneinheiten wie Quadratmetern. Bei einem 3-4-5-Dreieck ist der Umfang 12 Einheiten und die Fläche 6 Flächeneinheiten."
      },
      {
        "question": "Unterstützt der Umfangsrechner Dezimalwerte?",
        "answer": "Ja. Dezimale Seitenlängen funktionieren genau wie ganze Zahlen: Für a = 2,5, b = 6, c = 6,5 ist der Umfang 2,5 + 6 + 6,5 = 15 Einheiten. Halten Sie die volle Genauigkeit durch die Rechnung und runden Sie nur die endgültige Antwort."
      },
      {
        "question": "Welche Einheiten sollte ich für den Umfang verwenden?",
        "answer": "Jede Längeneinheit funktioniert: Meter, Zentimeter, Millimeter, Fuß, Zoll, Yard oder Meilen. Alle drei Seiten müssen vor dem Addieren dieselbe Einheit teilen. Der Rechner rechnet jede Eingabe automatisch über seine Einheitenauswahlen pro Eingabe in eine gemeinsame Einheit um."
      },
      {
        "question": "Wie hängen Umfang und Halbumfang zusammen?",
        "answer": "Der Halbumfang ist genau die Hälfte des Umfangs: s = P/2. Bei einem 3-4-5-Dreieck ist P = 12 und s = 6. Der Halbumfang taucht in fortgeschrittenen Formeln auf, etwa der Heronschen Formel für die Fläche und der Inkreisradius-Beziehung K = rs."
      }
    ]
  }
};
