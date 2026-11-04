export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH1C = {
  de: {
    tocHeading: "In dieser Anleitung",
    tocItems: {
      "sec-intro": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
      "sec-understand": "Hypotenuse und Höhe verstehen",
      "sec-formula": "Die Formel für die Fläche aus der Höhe",
      "sec-steps": "Schritt-für-Schritt-Rechenbeispiel",
      "sec-howto": "So verwenden Sie den Rechner für Fläche aus Höhe",
      "sec-examples": "Durchgerechnete Beispiele: Hypotenuse und Höhe",
      "sec-applications": "Anwendungen aus dem Alltag",
      "sec-equal": "Warum beide Flächenformeln übereinstimmen",
      "sec-geomean": "Wie die Höhe ein rechtwinkliges Dreieck teilt",
      "sec-max": "Größtmögliche Höhe",
      "sec-find-altitude": "Die Höhe bestimmen, wenn sie unbekannt ist",
      "sec-units": "Quadratmaße und Umrechnungen",
      "sec-mistakes": "Häufige Fehler",
      "sec-verify": "So prüfen Sie Ihr Ergebnis",
      "sec-compare": "Fläche aus Höhe vs. Fläche aus zwei Katheten",
      "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    sections: {
      "sec-intro": {
        h2: "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
        blocks: [
          { kind: "p", text: "Angenommen, ein rechtwinkliges Dreieck hat eine Hypotenuse von 10 m, und der senkrechte Abstand von der Ecke des rechten Winkels zu dieser Hypotenuse misst 4,8 m. Seine Fläche folgt direkt: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Das Dreieck schließt 24 Quadratmeter ebener Fläche ein." },
          { kind: "p", text: "Der Rechner auf dieser Seite existiert genau für diese Situation. Wenn Sie die längste Seite eines rechtwinkligen Dreiecks kennen, die Hypotenuse [[c]], und die senkrechte Höhe vom Scheitel des rechten Winkels zu dieser Seite, [[h]], dann werden die zwei Katheten nicht benötigt. Die Hypotenuse dient als Basis, die Höhe ist ihre zugehörige senkrechte Höhe, und die Fläche jedes Dreiecks beträgt die Hälfte des Produkts einer Basis mit ihrer zugehörigen Höhe: [[K=ch/2]]." },
          { kind: "p", text: "Die Höhe muss die Hypotenuse im rechten Winkel treffen; ein schräges Segment, das nicht senkrecht steht, ergibt eine falsche Höhe und eine falsche Fläche. Geben Sie beide Maße in übereinstimmenden Längeneinheiten ein, und der Rechner liefert die Fläche in den entsprechenden Quadratmaßen, wobei jeder Einsetzungsschritt angezeigt wird." }
        ]
      },
      "sec-understand": {
        h2: "Hypotenuse und Höhe eines rechtwinkligen Dreiecks verstehen",
        blocks: [
          { kind: "p", text: "Diese Anleitung verwendet durchgehend eine einheitliche Notation: [[A]] und [[B]] sind die zwei spitzen Winkel, [[C=90^\\circ]] ist der rechte Winkel, Seite [[a]] liegt dem Winkel [[A]] gegenüber, Seite [[b]] liegt dem Winkel [[B]] gegenüber, Seite [[c]] ist die Hypotenuse gegenüber dem Winkel [[C]], [[h]] ist die senkrechte Höhe vom Scheitel [[C]] zur Hypotenuse, die sie im Punkt [[D]] trifft, [[p]] und [[q]] sind die Hypotenusenabschnitte [[AD]] und [[DB]], und [[K]] ist die Fläche." },
          { kind: "h3", text: "Was ist ein rechtwinkliges Dreieck?" },
          { kind: "p", text: "Ein rechtwinkliges Dreieck enthält genau einen 90-Grad-Winkel. Seine zwei Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt ihm gegenüber. Die Hypotenuse ist immer die längste Seite. Die anderen zwei Winkel sind spitz, und weil die drei Winkel sich zu 180 Grad summieren, gilt [[A+B=90^\\circ]]. Diese Tatsachen sind wichtig, weil die Höhenmethode auf ihnen aufbaut: Die Basis muss die Hypotenuse sein, und die Höhe muss vom Scheitel des rechten Winkels ausgehen." },
          { kind: "h3", text: "Was ist die Hypotenuse?" },
          { kind: "p", text: "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, die im Rechner mit [[c]] bezeichnet wird. Um sie in beliebiger Lage zu identifizieren, finden Sie die Seite, die die quadratische Eckenmarkierung nicht berührt: Diese Seite ist die Hypotenuse. In der Höhenformel spielt sie die Rolle der Basis, daher ist ihr korrektes Erkennen die erste Fertigkeit, die diese Seite lehrt." },
          { kind: "h3", text: "Was ist die Höhe?" },
          { kind: "p", text: "Eine Höhe ist ein senkrechtes Segment vom Scheitel eines Dreiecks zur Linie, die die gegenüberliegende Seite enthält. Hier verläuft die Höhe [[h]] vom Scheitel des rechten Winkels [[C]] zur Hypotenuse [[AB]] und trifft sie im Punkt [[D]], also [[CD\\perp AB]]. Sie ist ein senkrechter Abstand, nicht einfach irgendeine Linie im Dreieck: Nur das Segment, das die Hypotenuse unter 90 Grad trifft, zählt." },
          { kind: "h3", text: "Ist die Höhe dasselbe wie eine Kathete?" },
          { kind: "p", text: "Nein. Die Katheten [[a]] und [[b]] treffen sich im ursprünglichen rechten Winkel, während die Höhe ein separates Segment von demselben Scheitel zur gegenüberliegenden Seite ist. Nehmen Sie ein 6-8-10-Dreieck: [[a=6]], [[b=8]], [[c=10]]. Seine Höhe ist [[h=(6\\times8)/10=4.8]]. Keine Kathete misst 4,8, doch die Höhe zur Hypotenuse beträgt genau 4,8. Die Verwechslung einer Kathete mit der Höhe gehört zu den häufigsten Fehlern auf dieser Seite." },
          { kind: "h3", text: "Warum die Höhe ins Dreieck fällt" },
          { kind: "p", text: "Bei einem nicht entarteten rechtwinkligen Dreieck landet das Lot vom Scheitel des rechten Winkels auf der Hypotenuse zwischen deren Endpunkten, niemals außerhalb. Es teilt das ursprüngliche Dreieck in zwei kleinere rechtwinklige Dreiecke. Diese zwei Dreiecke teilen die spitzen Winkelmaße des ursprünglichen Dreiecks, wodurch alle drei Dreiecke einander ähnlich sind. Diese Ähnlichkeit ist der Grund dafür, dass die Höhe so saubere Beziehungen erfüllt, die im Abschnitt über das geometrische Mittel unten untersucht werden." }
        ],
        imgAlt: "Dreieck ABC: Katheten a und b, Hypotenuse c als Basis, Höhe h von C nach D, Formel K = ch/2",
        figcaption: "Anatomie der Höhenmethode: Die Hypotenuse c ist die Basis, die Höhe h trifft sie im Punkt D unter 90 Grad, und die Fläche ist K = ch/2."
      },
      "sec-formula": {
        h2: "Die Formel für die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
        blocks: [
          { kind: "p", text: "Die Höhenflächenformel lautet [[[\\boxed{K=\\frac{ch}{2}}]]] Dabei ist [[K]] die Fläche, [[c]] die Hypotenuse, die als Basis dient, und [[h]] die senkrechte Höhe zur Hypotenuse. Drei Symbole, eine Multiplikation, eine Halbierung." },
          { kind: "h3", text: "Warum multiplizieren wir Hypotenuse und Höhe?" },
          { kind: "p", text: "Die allgemeine Dreiecksflächenformel lautet [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], und Basis und Höhe müssen senkrecht aufeinander stehen. Die Wahl der Hypotenuse als Basis zwingt die Höhe, der senkrechte Abstand zu ihr zu sein, was genau die Höhe ist: [[\\text{base}=c]] und [[\\text{height}=h]], also [[K=ch/2]]. Dies gilt, egal wie das Dreieck gedreht oder gezeichnet ist: Senkrechtstehen ist eine geometrische Beziehung, keine Bildschirmrichtung, also funktioniert eine schräge Hypotenuse als Basis genauso gut wie eine waagerechte." },
          { kind: "h3", text: "Warum wird das Ergebnis durch zwei geteilt?" },
          { kind: "p", text: "Ein Dreieck nimmt die Hälfte des Parallelogramms ein, das auf derselben Basis mit derselben senkrechten Höhe errichtet wird. Mit [[c=10]] und [[h=4.8]] ist das Produkt [[c\\times h=48]] die Fläche dieses Parallelogramms. Das Dreieck ist seine Hälfte, also [[K=48/2=24]]. Die Angabe 48 würde eine andere Frage beantworten: die Fläche des vollen Parallelogramms, nicht des Dreiecks darin." },
          { kind: "h3", text: "Funktioniert diese Formel für jedes Dreieck?" },
          { kind: "p", text: "Die Basis-Höhen-Regel funktioniert für jedes Dreieck, sofern die Höhe senkrecht zur gewählten Basis steht. Das Besondere hier ist die Wahl der Basis: die Hypotenuse eines rechtwinkligen Dreiecks, mit der Höhe, die vom Scheitel des rechten Winkels ausgeht. Diese Wahl bringt zusätzliche geometrische Einschränkungen mit sich, etwa dass die Höhe niemals die Hälfte der Hypotenuse übersteigt, die für allgemeine Dreiecke nicht gelten." },
          { kind: "h3", text: "Warum die Formel die zwei Katheten nicht braucht" },
          { kind: "p", text: "Die Fläche braucht eine Seite und ihre zugehörige senkrechte Höhe, nicht mehr. Wenn [[c]] und [[h]] bereits bekannt sind, fügen die Katheten keine neue Information über die Fläche hinzu. Die Kathetenformel [[K=ab/2]] ist einfach ein anderer Eingabeweg zur selben Größe, nützlich, wenn die gemessenen Daten die zwei senkrechten Seiten sind." }
        ],
        imgAlt: "c = 10, h = 4,8: 10 mal 4,8 = 48, halbiert 24. Darum ist die Dreiecksfläche halb Basis mal Höhe",
        figcaption: "Das Produkt c mal h ist das volle Rechteck; das Dreieck füllt genau seine Hälfte, weshalb die Formel durch zwei teilt."
      },
      "sec-steps": {
        h2: "Schritt-für-Schritt-Beispiel zur Flächenberechnung aus der Höhe",
        blocks: [
          { kind: "p", text: "Eine vollständige Rechnung, von den Messungen bis zur geprüften Antwort, mit [[c=10\\text{ m}]] und [[h=4.8\\text{ m}]]." }
        ],
        steps: [
          "<strong>Die gegebenen Maße bestimmen.</strong> Die Hypotenuse ist [[c=10\\text{ m}]] und die senkrechte Höhe zu ihr ist [[h=4.8\\text{ m}]]. Bestätigen Sie, dass die Höhe die Hypotenuse im rechten Winkel trifft.",
          "<strong>Die Formel aufschreiben.</strong> [[K=ch/2]].",
          "<strong>Die Maße einsetzen.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Multiplizieren.</strong> [[10\\times4.8=48]], also [[K=48/2]].",
          "<strong>Durch zwei teilen.</strong> [[[\\boxed{K=24\\text{ m}^2}]]]",
          "<strong>Die Antwort deuten.</strong> Das Dreieck schließt 24 Quadratmeter ebener Fläche ein.",
          "<strong>Die Machbarkeit prüfen.</strong> Ein gültiges rechtwinkliges Dreieck braucht [[h\\leq c/2]]; hier gilt [[4.8\\leq5]], also können die Maße ein echtes rechtwinkliges Dreieck beschreiben.",
          "<strong>Mit den Katheten verifizieren.</strong> Ein 6-8-10-Dreieck hat dieselbe Hypotenuse und Höhe, und [[K=(6\\times8)/2=24]]. Beide Wege stimmen überein."
        ]
      },
      "sec-howto": {
        h2: "So verwenden Sie den Rechner für die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
        blocks: [
          { kind: "p", text: "Der Rechner auf dieser Seite braucht genau zwei Eingaben. Die Anleitung unten folgt der Bildschirmreihenfolge, sodass ein Erstbenutzer von einem gezeichneten oder gemessenen Dreieck zu einer geprüften Fläche gelangt." }
        ],
        closingParagraphs: [
          "Der Rechner fragt nicht nach den zwei Katheten oder einem Winkel, weil die Höhenmethode sie tatsächlich nicht braucht."
        ],
        steps: [
          "<strong>Das rechtwinklige Dreieck identifizieren.</strong> Bestätigen Sie, dass ein Winkel 90 Grad beträgt; die Methode gilt nur für rechtwinklige Dreiecke.",
          "<strong>Seine Hypotenuse [[c]] finden.</strong> Sie ist die Seite gegenüber dem rechten Winkel und die längste Seite.",
          "<strong>Die senkrechte Höhe [[h]] identifizieren.</strong> Sie verläuft vom Scheitel des rechten Winkels zur Hypotenuse und trifft sie unter 90 Grad.",
          "<strong>Beide Werte messen oder beschaffen.</strong> Direkt messen, oder die Höhe zuerst mit [[h=ab/c]] berechnen, wenn die Katheten bekannt sind.",
          "<strong>Die Hypotenuse in das Feld Hypotenuse c eingeben.</strong>",
          "<strong>Die Höhe in das Feld Höhe h eingeben.</strong>",
          "<strong>Kompatible Längeneinheiten wählen.</strong> Beide Eingaben müssen dieselbe Einheit verwenden, bevor die Formel angewendet wird.",
          "<strong>Bestätigen, dass beide Werte positiv sind.</strong> Null oder negative Längen beschreiben kein Dreieck.",
          "<strong>Prüfen, dass [[h]] nicht größer als die halbe Hypotenuse ist.</strong> Bei [[c=10]] kann keine Höhe über 5 zu einem rechtwinkligen Dreieck mit dieser Hypotenuse gehören.",
          "<strong>Auf Fläche berechnen klicken.</strong>",
          "<strong>Das Flächenergebnis prüfen.</strong> Es erscheint in Quadratmaßen passend zur Eingabeeinheit.",
          "<strong>Die angezeigten Lösungsschritte lesen.</strong> Sie zeigen die Formel, die Einsetzung und die Rechnung.",
          "<strong>Die Live-Visualisierung inspizieren.</strong> Bestätigen Sie, dass Hypotenuse und Höhe des Diagramms den beabsichtigten Maßen entsprechen.",
          "<strong>Zurücksetzen für eine neue Berechnung verwenden.</strong> Es leert beide Felder, sodass die nächste Berechnung sauber beginnt."
        ]
      },
      "sec-examples": {
        h2: "Durchgerechnete Beispiele zur Fläche eines rechtwinkligen Dreiecks aus Hypotenuse und Höhe",
        blocks: [
          { kind: "p", text: "Vier durchgerechnete Beispiele bauen die Methode von vertrauten Dreiecken aufwärts auf. Jedes berechnet bei Bedarf die Höhe aus den Katheten, wendet [[K=ch/2]] an und prüft gegen die Kathetenformel." },
          { kind: "h3", text: "Beispiel 1: Ein 3-4-5-rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[a=3]], [[b=4]], [[c=5]]. Die Höhe ist [[h=ab/c]], also [[h=(3\\times4)/5=2.4]]. Die Fläche ist [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]] Prüfen mit den Katheten: [[K=(3\\times4)/2=6]]. Beide Formeln beschreiben dasselbe Dreieck, also müssen sie übereinstimmen, und das tun sie." },
          { kind: "h3", text: "Beispiel 2: Ein 5-12-13-rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[a=5]], [[b=12]], [[c=13]]. Die Höhe ist [[h=(5\\times12)/13=60/13\\approx4.61538]]. Bei Beibehaltung des exakten Bruchs: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]] Das Beibehalten von [[60/13]] statt einer gerundeten Dezimalzahl vermeidet einen frühen Rundungsfehler: Die 13 kürzt sich exakt heraus und lässt eine saubere 30 übrig." },
          { kind: "h3", text: "Beispiel 3: Ein 6-8-10-rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[c=10]] und [[h=4.8]] direkt. Dann [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Mit den Katheten 6 und 8 gilt [[K=(6\\times8)/2=24]], was den Höhenweg bestätigt." },
          { kind: "h3", text: "Beispiel 4: Ein gleichschenkliges rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[c=10]] und [[h=5]]. Dann [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]] Dies ist die größte Fläche, die ein rechtwinkliges Dreieck mit Hypotenuse 10 haben kann. Die Höhe gleicht der halben Hypotenuse nur, wenn die Katheten gleich sind, was jeden spitzen Winkel [[45^\\circ]] macht, und kein gültiges rechtwinkliges Dreieck mit dieser Hypotenuse kann 25 Quadrateinheiten übersteigen." }
        ]
      },
      "sec-applications": {
        h2: "Anwendungen der Fläche eines rechtwinkligen Dreiecks aus der Höhe im Alltag",
        blocks: [
          { kind: "p", text: "Zwölf durchgerechnete Situationen zeigen die Formel in verschiedenen Maßstäben und Einheiten. Jede nennt das Dreieck in der Szene, die zwei Maße, die Einsetzung, die Fläche und die Annahme hinter dem Modell." },
          { kind: "h3", text: "Beispiel 1: Dreieckiger Gartenabschnitt" },
          { kind: "p", text: "Ein rechtwinkliger Gartenabschnitt hat eine längste Begrenzung von 10 m, und der senkrechte Abstand von der Ecke des rechten Winkels zu dieser Begrenzung beträgt 4,8 m. Also [[c=10\\text{ m}]] und [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Der Abschnitt nimmt 24 Quadratmeter ein. Dies setzt voraus, dass die Begrenzung gerade ist und die Ecke ein echter rechter Winkel ist." },
          { kind: "h3", text: "Beispiel 2: Dreieckige Sperrholzplatte" },
          { kind: "p", text: "Eine rechtwinklige Sperrholzplatte hat eine Hypotenuse von 1 m und eine senkrechte Höhe von 0,48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]] Das ist die ebene Oberfläche einer Seite, nützlich für Deckungsschätzungen. Schnittverschnitt und Materialzugaben sind separate Überlegungen." },
          { kind: "h3", text: "Beispiel 3: Rechtwinkliges Glasfenster" },
          { kind: "p", text: "Eine rechtwinklige Glasscheibe hat eine Hypotenuse von 1,3 m und eine Höhe von 0,6 m senkrecht zu dieser Seite: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]] Dies ist die geometrische Glasfläche vor Rahmenabdeckung oder Montagezugaben." },
          { kind: "h3", text: "Beispiel 4: Vermessung eines dreieckigen Abschnitts" },
          { kind: "p", text: "Eine Vermessungszeichnung enthält ein rechtwinkliges Dreieck mit Hypotenuse 13 m und Höhe [[60/13]] m. Bei Beibehaltung des Bruchs: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Die Zeichnung stellt einen 30-Quadratmeter-Abschnitt dar. Die eigentliche Feldarbeit kann über den Plan hinaus noch Instrumentenkorrekturen erfordern." },
          { kind: "h3", text: "Beispiel 5: Vermessen einer dreieckigen Fliese" },
          { kind: "p", text: "Eine rechtwinklige Fliese hat eine Hypotenuse von 25 cm und eine senkrechte Höhe von 6,72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]] Eine Fliese deckt 84 Quadratzentimeter ab, was hilft abzuschätzen, wie viele Fliesen eine Fläche braucht. Fugen und Schnittverluste werden separat gezählt." },
          { kind: "h3", text: "Beispiel 6: Stahlstützplatte" },
          { kind: "p", text: "Eine flache rechtwinklige Stützplatte hat eine Hypotenuse von 1,7 m mit Katheten von 0,8 m und 1,5 m. Ihre Höhe ist [[h=(0.8\\times1.5)/1.7=12/17]] m. Dann [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]] Das ist die geometrische Plattenfläche, nicht ihre Tragfähigkeit." },
          { kind: "h3", text: "Beispiel 7: Dreieckiges Rampenseitenteil" },
          { kind: "p", text: "Ein vereinfachtes Rampenseitenteil bildet ein rechtwinkliges Dreieck mit einer Hypotenuse von 5 m und einer senkrechten Höhe von 2,4 m zu dieser Hypotenuse: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] Dies ist die ebene Fläche des dreieckigen Seitenteils, nicht die schräge Rampenfläche, und die Berechnung stellt keine Barrierefreiheit fest." },
          { kind: "h3", text: "Beispiel 8: Dachgiebelabschnitt" },
          { kind: "p", text: "Ein rechtwinkliger Dachgiebelabschnitt hat eine Hypotenuse von 6,5 m und eine senkrechte Höhe von [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]] Das Ergebnis beschreibt die dreieckige Ebene, die durch die Maße gegeben ist. Die Gesamtoberfläche eines echten Dachs ist ein separates dreidimensionales Messproblem." },
          { kind: "h3", text: "Beispiel 9: Rechtwinkliges Grundstück" },
          { kind: "p", text: "Ein rechtwinkliger Grundstücksabschnitt hat eine Hypotenuse von 50 m und eine senkrechte Höhe von 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]] Die gemessenen Grenzen schließen 600 Quadratmeter ein. Eine amtliche Flächenangabe kann dennoch eine Vermessungsprüfung erfordern." },
          { kind: "h3", text: "Beispiel 10: Großer vermessener Grundstücksabschnitt" },
          { kind: "p", text: "Ein vermessener rechtwinkliger Abschnitt hat eine Hypotenuse von 100 m und eine senkrechte Höhe von 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]] Das ist die ebene Fläche des dreieckigen Abschnitts. Sie stellt das ganze Grundstück nur dar, wenn das Grundstück ausschließlich aus diesem Dreieck besteht." },
          { kind: "h3", text: "Beispiel 11: Dreieckiger Segelabschnitt" },
          { kind: "p", text: "Ein flacher rechtwinkliger Segelentwurf hat eine Hypotenuse von 15 ft und eine senkrechte Höhe von 7,2 ft: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]] Dies ist die ebene Fläche des idealisierten Segels. Gebogenes Tuch, Nähte und Kantenzugaben erfordern separate Betrachtung." },
          { kind: "h3", text: "Beispiel 12: Kleiner mechanischer Halter" },
          { kind: "p", text: "Ein flacher rechtwinkliger Halter hat eine Hypotenuse von 250 mm und eine senkrechte Höhe von 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]] Die Antwort ist in Quadratmillimetern, weil die Eingaben in Millimetern sind. Da [[1\\text{ cm}^2=100\\text{ mm}^2]] gilt, entspricht dies [[[\\boxed{150\\text{ cm}^2}]]] Die Umrechnung der linearen Einheit und die Umrechnung der Quadrateinheit sind verschiedene Operationen, wie der Einheitenabschnitt erklärt." },
          { kind: "h3", text: "Praktischer Beispielvergleich" }
        ],
        table: {
          headers: ["Situation", "Hypotenuse c", "Höhe h", "Formel", "Berechnete Fläche", "Praktische Deutung"],
          rows: [
            ["Gartenabschnitt", "10 m", "4,8 m", "[[K=ch/2]]", "24 m²", "Pflanzfläche"],
            ["Sperrholzplatte", "1 m", "0,48 m", "[[K=ch/2]]", "0,24 m²", "Materialdeckung, ohne Verschnitt"],
            ["Glasfenster", "1,3 m", "0,6 m", "[[K=ch/2]]", "0,39 m²", "Glasfläche vor Rahmen"],
            ["Vermessungszeichnung", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Planfläche des Abschnitts"],
            ["Fliese", "25 cm", "6,72 cm", "[[K=ch/2]]", "84 cm²", "Oberfläche einer Fliese"],
            ["Stahlplatte", "1,7 m", "12/17 m", "[[K=ch/2]]", "0,6 m²", "Geometrie, nicht Tragfähigkeit"],
            ["Rampenseitenteil", "5 m", "2,4 m", "[[K=ch/2]]", "6 m²", "Seitenteil, nicht Rampenfläche"],
            ["Dachgiebel", "6,5 m", "30/13 m", "[[K=ch/2]]", "7,5 m²", "Dreieckiger Querschnitt"],
            ["Grundstück", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Eingeschlossene Fläche, durch Vermessung prüfen"],
            ["Vermessungsgrundstück", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Abschnitt, nicht das ganze Grundstück"],
            ["Segelabschnitt", "15 ft", "7,2 ft", "[[K=ch/2]]", "54 ft²", "Idealisiertes flaches Segel"],
            ["Halter", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Entspricht 150 cm²"]
          ]
        },
        imgAlt: "Vier Beispiele: Garten, Glasscheibe, Grundstück und Halter, jeweils mit Hypotenuse c, Höhe h und Fläche",
        figcaption: "Dieselbe Formel in vier Maßstäben: Garten, Glasscheibe, Grundstück und Maschinenhalter."
      },
      "sec-equal": {
        h2: "Warum beide Flächenformeln für rechtwinklige Dreiecke dasselbe Ergebnis liefern",
        blocks: [
          { kind: "p", text: "Ein rechtwinkliges Dreieck lässt sich über seine zwei senkrechten Katheten oder über seine Hypotenuse und Höhe messen. Die Kathetenformel ist [[K=ab/2]] und die Höhenformel ist [[K=ch/2]]. Da beide die Fläche desselben Dreiecks beschreiben, gilt [[\\frac{ab}{2}=\\frac{ch}{2}]]. Multiplizieren Sie beide Seiten mit zwei: [[ab=ch]]. Lösen Sie nach [[h]] auf: [[[\\boxed{h=\\frac{ab}{c}}]]] Die Höhe ist das Produkt der Katheten geteilt durch die Hypotenuse, weshalb die zwei Formeln bei einem konsistenten Dreieck niemals voneinander abweichen können." },
          { kind: "p", text: "Numerische Prüfung: Für [[a=6]], [[b=8]], [[c=10]] ist die Höhe [[h=(6\\times8)/10=4.8]]. Nach Katheten: [[K=(6\\times8)/2=24]]. Nach Höhe: [[K=(10\\times4.8)/2=24]]. Dasselbe Dreieck, dieselbe Fläche, zwei Wege." },
          { kind: "p", text: "Wenn nur Hypotenuse und Höhe bekannt sind, ist die Fläche bereits festgelegt: Es ist nicht nötig, zuerst die Katheten zu rekonstruieren. Die Kathetenlängen lassen sich aus gültigen [[c]] und [[h]] über die Abschnittsbeziehungen unten immer noch zurückgewinnen, aber das ist eine separate Berechnung von der Flächenbestimmung. Wenn stattdessen die Katheten die bekannten Daten sind, nimmt der <a href=\"/right-triangle-area-from-legs-calculator/\">Rechner für die Fläche eines rechtwinkligen Dreiecks aus den Katheten</a> sie direkt." }
        ]
      },
      "sec-geomean": {
        h2: "Wie die Höhe ein rechtwinkliges Dreieck teilt",
        blocks: [
          { kind: "p", text: "Die Höhe trifft die Hypotenuse in [[D]] und teilt sie in die Abschnitte [[AD=p]] und [[DB=q]], also [[p+q=c]]. Diese Teilung erzeugt zwei kleinere rechtwinklige Dreiecke, die im ursprünglichen verschachtelt sind, und ihre Proportionen sind bemerkenswert sauber." },
          { kind: "h3", text: "Zwei kleinere ähnliche rechtwinklige Dreiecke" },
          { kind: "p", text: "Die Höhe teilt das ursprüngliche Dreieck in zwei kleinere rechtwinklige Dreiecke, von denen jedes einen spitzen Winkel mit dem ursprünglichen teilt und jedes einen rechten Winkel enthält. Die Übereinstimmung in zwei Winkelmaßen macht alle drei Dreiecke einander ähnlich. Die Ähnlichkeit ist es, die die sauberen proportionalen Beziehungen zwischen der Höhe, den Abschnitten und den Katheten erzwingt." },
          { kind: "h3", text: "Der Höhensatz des geometrischen Mittels" },
          { kind: "p", text: "Die Ähnlichkeit liefert [[[\\boxed{h^2=pq}]]], oder äquivalent [[[\\boxed{h=\\sqrt{pq}}]]] Die Höhe ist das geometrische Mittel der zwei Hypotenusenabschnitte: Ihr Quadrat gleicht ihrem Produkt. Durchgerechnetes Beispiel: Mit [[p=6.4]] und [[q=3.6]] gilt [[c=p+q=10]], und [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]] Die Fläche folgt: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Der Abschnittssatz verifiziert eine Höhe, die auf andere Weise gemessen oder berechnet wurde." },
          { kind: "h3", text: "Beziehung zwischen den Abschnitten und den Katheten" },
          { kind: "p", text: "Dieselbe Ähnlichkeit liefert [[b^2=cp]] und [[a^2=cq]]. Mit [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] und [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Das ursprüngliche 6-8-10-Dreieck wird exakt zurückgewonnen, was zeigt, wie eng Abschnitte, Höhe und Katheten miteinander verbunden sind." }
        ]
      },
      "sec-max": {
        h2: "Wie groß kann die Höhe eines rechtwinkligen Dreiecks sein?",
        blocks: [
          { kind: "p", text: "Nicht jedes Paar positiver Zahlen kann Hypotenuse und Höhe sein. Für ein gültiges, nicht entartetes rechtwinkliges Dreieck gilt [[[\\boxed{0<h\\leq\\frac{c}{2}}]]] Die Höhe muss positiv sein und kann niemals die Hälfte der Hypotenuse übersteigen." },
          { kind: "h3", text: "Warum die Höhe die Hälfte der Hypotenuse nicht übersteigen kann" },
          { kind: "p", text: "Aus [[h^2=pq]] mit [[p+q=c]] ist das Produkt [[pq]] am größten, wenn die zwei Abschnitte gleich sind, [[p=q=c/2]]. Daher [[h^2\\leq c^2/4]], und für positive Längen [[h\\leq c/2]]. Klar ausgedrückt: Die Höhe ist am höchsten, wenn sie die Hypotenuse in zwei gleiche Hälften teilt, und selbst dann erreicht sie nur die Hälfte der Hypotenuse." },
          { kind: "h3", text: "Maximale Fläche bei fester Hypotenuse" },
          { kind: "p", text: "Da [[K=ch/2]] und [[h\\leq c/2]] gilt, ist die größtmögliche Fläche [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Dieses Maximum gehört zum gleichschenkligen rechtwinkligen Dreieck, bei dem die zwei Katheten gleich sind. Mit [[c=10]] ist die höchste gültige Höhe [[h_{\\max}=5]], was [[K_{\\max}=(10\\times5)/2=25]] ergibt. Eine Höhe von 6 bei einer Hypotenuse von 10 ist für ein rechtwinkliges Dreieck unmöglich." },
          { kind: "h3", text: "Was passiert, wenn die Höhe zu groß ist?" },
          { kind: "p", text: "Nehmen Sie [[c=10]] und [[h=6]]: [[6>5]], also hat kein rechtwinkliges Dreieck diese Maße. Die Rechnung [[(10\\times6)/2=30]] ist eine gültige Fläche für irgendein Dreieck in einem allgemeineren Rahmen, aber sie macht [[c=10]], [[h=6]] nicht zu einer gültigen rechtwinkligen Dreieckseingabe. Diese Seite behauptet nicht, dass der Rechner solche Eingaben automatisch ablehnt; die Prüfung liegt bei Ihnen." },
          { kind: "h3", text: "Kann die Höhe gleich der halben Hypotenuse sein?" },
          { kind: "p", text: "Ja. Die Gleichheit ergibt das gleichschenklige rechtwinklige Dreieck mit zwei gleichen Katheten, ein gültiges nicht entartetes Dreieck. Es ist der Grenzfall, kein defekter." }
        ],
        imgAlt: "6-8-10-Dreieck: Höhe teilt die Hypotenuse in p = 6,4 und q = 3,6, plus gleichschenkliges Dreieck bei Höhe c/2",
        figcaption: "Links: Die Höhe ist das geometrische Mittel der Hypotenusenabschnitte. Rechts: Die höchstmögliche Höhe ist die halbe Hypotenuse und ergibt die maximale Fläche."
      },
      "sec-find-altitude": {
        h2: "So berechnen Sie die Höhe, wenn sie unbekannt ist",
        blocks: [
          { kind: "p", text: "Dieser Rechner nimmt [[h]] als Eingabe, also muss eine unbekannte Höhe zuerst gefunden oder gemessen werden. Drei Standardwege decken die üblichen Fälle ab. Wenn die Seiten bekannt sind und die Höhe das fehlende Stück ist, berechnet der <a href=\"/right-triangle-altitude-from-sides-calculator/\">Rechner für die Höhe eines rechtwinkligen Dreiecks aus den Seiten</a> sie direkt." },
          { kind: "h3", text: "Methode 1: Mit beiden Katheten und der Hypotenuse" },
          { kind: "p", text: "[[[\\boxed{h=\\frac{ab}{c}}]]] Mit [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { kind: "h3", text: "Methode 2: Mit Hypotenusenabschnitten" },
          { kind: "p", text: "[[[\\boxed{h=\\sqrt{pq}}]]] Mit [[p=6.4]] und [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { kind: "h3", text: "Methode 3: Mit bekannter Fläche und Hypotenuse" },
          { kind: "p", text: "Umstellen von [[K=ch/2]] ergibt [[[\\boxed{h=\\frac{2K}{c}}]]] Mit [[K=24]] und [[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { kind: "p", text: "Dies sind mathematische Umstellungen, keine zusätzlichen Rechnermodi: Der Flächen-aus-Höhe-Rechner selbst erwartet die Höhe weiterhin als Eingabe." }
        ]
      },
      "sec-units": {
        h2: "Quadratmaße in Flächenberechnungen rechtwinkliger Dreiecke verstehen",
        blocks: [
          { kind: "p", text: "Die Fläche ist zweidimensional. Das Multiplizieren zweier Längen multipliziert auch ihre Einheiten: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. Die Flächeneinheit ist immer das Quadrat der Längeneinheit." },
          { kind: "h3", text: "Quadratmeter" },
          { kind: "p", text: "Mit [[c=10\\text{ m}]] und [[h=4.8\\text{ m}]] gilt [[K=24\\text{ m}^2]]. Lesen Sie es als 24 Quadratmeter Fläche." },
          { kind: "h3", text: "Quadratzentimeter" },
          { kind: "p", text: "Mit [[c=25\\text{ cm}]] und [[h=6.72\\text{ cm}]] gilt [[K=84\\text{ cm}^2]]]" },
          { kind: "h3", text: "Quadratmillimeter" },
          { kind: "p", text: "Mit [[c=250\\text{ mm}]] und [[h=120\\text{ mm}]] gilt [[K=15000\\text{ mm}^2]]]" },
          { kind: "h3", text: "Flächeneinheiten umrechnen" },
          { kind: "p", text: "[[1\\text{ m}^2=10000\\text{ cm}^2]] und [[1\\text{ cm}^2=100\\text{ mm}^2]]. Eine lineare Umrechnung multipliziert mit 10, 100 oder 1000, aber eine Flächenumrechnung quadriert diesen Faktor: 100 cm in einem Meter werden zu [[100^2=10000]] Quadratzentimetern in einem Quadratmeter. Die Umrechnung der Länge und die Umrechnung der Fläche sind verschiedene Operationen." },
          { kind: "h3", text: "Was, wenn die Eingaben verschiedene Einheiten verwenden?" },
          { kind: "p", text: "Zuerst umrechnen, dann berechnen. Eine Hypotenuse in Metern und eine Höhe in Zentimetern müssen auf eine Einheit gebracht werden, zum Beispiel werden 2 m und 150 cm zu 2 m und 1,5 m, bevor die Formel angewendet wird. Gemischte Einheiten in der Formel erzeugen eine bedeutungslose Zahl ohne saubere Einheit." }
        ]
      },
      "sec-mistakes": {
        h2: "Häufige Fehler bei der Verwendung der Höhenflächenformel",
        blocks: [
          { kind: "p", text: "Die meisten falschen Antworten auf dieser Seite stammen von falsch bezeichneten Eingaben, nicht von schlechter Arithmetik. Die achtzehn Fehler unten decken fast jeden ab." },
          { kind: "h3", text: "1. Eine Kathete statt der Höhe verwenden" },
          { kind: "p", text: "Die Höhe [[h]] fällt vom Scheitel des rechten Winkels auf die Hypotenuse; eine Kathete verläuft entlang der Dreieckskante. In einem 6-8-10-Dreieck ergibt die Eingabe der Kathete 6 als Höhe [[(10\\times6)/2=30]] statt 24. Abhilfe: Die Höhe muss mit einer Rechtwinkelmarkierung auf der Hypotenuse landen." },
          { kind: "h3", text: "2. Die Höhe mit der Hypotenuse verwechseln" },
          { kind: "p", text: "Das Vertauschen von [[c]] und [[h]] ändert die Bedeutung des Produkts. Mit [[c=10]] und [[h=4.8]] kommutieren die Zahlen in der Multiplikation, aber die Machbarkeitsprüfung [[h\\leq c/2]] bricht: Der vertauschte Eintrag behauptet eine Höhe von 10 bei einer Hypotenuse von 4,8, was unmöglich ist. Abhilfe: Die Hypotenuse ist immer die längste Seite." },
          { kind: "h3", text: "3. Die Höhe vom falschen Scheitel aus zeichnen" },
          { kind: "p", text: "Nur die Höhe vom Scheitel des rechten Winkels [[C]] passt mit der Hypotenuse als Basis zusammen. Ein Lot von einem spitzen Scheitel landet auf einer Kathete, nicht auf der Hypotenuse, und gehört nicht in diese Formel. Abhilfe: Beginnen Sie an der quadratischen Ecke." },
          { kind: "h3", text: "4. Die Höhe in einem nicht senkrechten Winkel messen" },
          { kind: "p", text: "Jedes nicht senkrechte Segment von [[C]] zur Hypotenuse ist länger als die wahre Höhe, also fällt die Fläche zu groß aus. Abhilfe: Prüfen Sie das 90-Grad-Treffen, durch Konstruktion oder mit [[h=ab/c]]." },
          { kind: "h3", text: "5. Eine Höhe verwenden, die zu einer anderen Basis gehört" },
          { kind: "p", text: "Die Höhe zur Hypotenuse passt nur zur Hypotenuse. Sie mit einer Kathete zu paaren, wie in [[(8\\times4.8)/2=19.2]], mischt zwei verschiedene Basis-Höhen-Paare. Abhilfe: Jede Höhe gehört zu genau einer Basis." },
          { kind: "h3", text: "6. Das Teilen durch zwei vergessen" },
          { kind: "p", text: "[[10\\times4.8=48]] ist die Fläche des Parallelogramms, nicht die des Dreiecks. Abhilfe: Beenden Sie jede Basis-Höhen-Berechnung mit der Halbierung." },
          { kind: "h3", text: "7. Längen mit inkompatiblen Einheiten multiplizieren" },
          { kind: "p", text: "Eine Hypotenuse von 2 m mit einer Höhe von 150 cm ist nicht [[(2\\times150)/2=150]] von irgendetwas Sinnvollem. Abhilfe: Rechnen Sie zuerst auf eine Einheit um, hier 2 m und 1,5 m, was 1,5 m² ergibt." },
          { kind: "h3", text: "8. Die Antwort in linearen Einheiten angeben" },
          { kind: "p", text: "Eine Fläche von 24 m² ist nicht 24 m. Abhilfe: Schreiben Sie immer die Quadrateinheit zur Zahl." },
          { kind: "h3", text: "9. Null oder negative Längen eingeben" },
          { kind: "p", text: "[[c>0]] und [[h>0]] sind erforderlich; Null- oder negative Eingaben beschreiben kein Dreieck. Abhilfe: Messen Sie erneut." },
          { kind: "h3", text: "10. Eine Höhe eingeben, die größer als die halbe Hypotenuse ist" },
          { kind: "p", text: "[[c=10]], [[h=6]] verletzt [[h\\leq c/2]]. Abhilfe: Prüfen Sie erneut, welches Segment gemessen wurde; es war nicht die senkrechte Höhe." },
          { kind: "h3", text: "11. Annehmen, dass jedes positive Paar ein rechtwinkliges Dreieck bildet" },
          { kind: "p", text: "Positivität reicht nicht; die Höhengrenze muss ebenfalls gelten. Abhilfe: Führen Sie die Prüfung [[h\\leq c/2]] bei jedem neuen Paar durch." },
          { kind: "h3", text: "12. Die Höhe mit der senkrechten Kathete verwechseln" },
          { kind: "p", text: "In einem Diagramm kann die Höhe senkrecht aussehen, während eine Kathete schräg wirkt, oder umgekehrt nach Drehung. Senkrecht auf dem Bildschirm bedeutet nichts. Abhilfe: Identifizieren Sie Seiten nach ihrer geometrischen Rolle, nicht nach ihrer Bildschirmrichtung." },
          { kind: "h3", text: "13. Die Höhe zu früh runden" },
          { kind: "p", text: "Die Verwendung von 4,6 für [[60/13\\approx4.61538]] und anschließendes Rechnen ergibt eine leicht falsche Fläche, während der exakte Bruch sich sauber zu 30 kürzt. Abhilfe: Behalten Sie die volle Genauigkeit bis zur endgültigen Antwort bei." },
          { kind: "h3", text: "14. Annehmen, die Hypotenuse müsse waagerecht sein" },
          { kind: "p", text: "Die Hypotenuse kann in jedem Winkel liegen; die Formel verwendet Längen, keine Orientierungen. Abhilfe: Vertrauen Sie den Maßen, nicht der Drehung der Zeichnung." },
          { kind: "h3", text: "15. Den Höhensatz mit dem Satz des Pythagoras verwechseln" },
          { kind: "p", text: "[[h^2=pq]] verbindet die Höhe mit den Hypotenusenabschnitten; [[a^2+b^2=c^2]] verbindet die drei Seiten. Sie beantworten verschiedene Fragen. Abhilfe: Passen Sie den Satz an die Größen an, die Sie haben." },
          { kind: "h3", text: "16. Eine Höhe aus einem anderen Dreieck verwenden" },
          { kind: "p", text: "Eine Höhe gehört zu einem bestimmten Dreieck. Das Ausleihen von 4,8 aus einem 6-8-10-Dreieck für eine andere Hypotenuse ergibt eine falsche Fläche. Abhilfe: Jede Berechnung verwendet die Maße ihres eigenen Dreiecks." },
          { kind: "h3", text: "17. Annehmen, die Fläche bestimme jede Seitenlänge" },
          { kind: "p", text: "Viele verschiedene rechtwinklige Dreiecke teilen eine Fläche. Die Kenntnis von [[K=24]] legt [[c]] oder [[h]] nicht einzeln fest. Abhilfe: Behandeln Sie die Fläche als eine Gleichung, nicht als vollständige Beschreibung." },
          { kind: "h3", text: "18. Geometrische Fläche als exaktes Kaufmaterial behandeln" },
          { kind: "p", text: "Die Formel liefert die ideale geometrische Fläche. Reale Projekte brauchen Verschnitt, Überlappungen und Schnittzugaben obendrauf. Abhilfe: Fügen Sie nach der Geometrie einen Projektzuschlag hinzu." },
          { kind: "h3", text: "Falsch gegen richtig: Ein konkretes Beispiel" },
          { kind: "p", text: "Gegeben [[c=10]] und [[h=4.8]]: Die falsche Rechnung lässt die Halbierung aus: [[K=10\\times4.8=48]]. Das ist die Fläche des entsprechenden Parallelogramms. Die richtige Rechnung ist [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]] Eine zweite Veranschaulichung: Das Einsetzen der Kathete 8 für die Höhe ergibt [[(10\\times8)/2=40]], falsch, weil 8 nicht senkrecht zur Hypotenuse steht. Die Höhe, und nur die Höhe, passt zu [[c]]." }
        ]
      },
      "sec-verify": {
        h2: "So prüfen Sie, ob Ihre Flächenberechnung korrekt ist",
        blocks: [
          { kind: "p", text: "Sieben Prüfungen fangen die allermeisten schlechten Ergebnisse ab, bevor sie die Seite verlassen." },
          { kind: "h3", text: "Prüfung 1: Positive Eingaben" },
          { kind: "p", text: "Für ein gültiges rechtwinkliges Dreieck gilt [[c>0]] und [[h>0]]. Null oder negative Längen beschreiben kein Dreieck." },
          { kind: "h3", text: "Prüfung 2: Die Höhengrenze" },
          { kind: "p", text: "Bestätigen Sie [[h\\leq c/2]]. Diese einzelne Ungleichung schließt die häufigste unmögliche Eingabe aus, etwa [[c=10]] mit [[h=6]]." },
          { kind: "h3", text: "Prüfung 3: Den rechten Winkel bestätigen" },
          { kind: "p", text: "Die Höhe muss senkrecht zur Hypotenuse stehen. Wenn die Zeichnung oder Messung das 90-Grad-Treffen nicht bestätigen kann, ist die Eingabe keine Höhe." },
          { kind: "h3", text: "Prüfung 4: Quadratmaße" },
          { kind: "p", text: "Metereingaben ergeben Quadratmeter, Zentimetereingaben ergeben Quadratzentimeter. Die Einheit der Antwort ist das Quadrat der Eingabeeinheit, niemals die Eingabeeinheit selbst." },
          { kind: "h3", text: "Prüfung 5: Gegenprüfung mit der Kathetenformel" },
          { kind: "p", text: "Für das 6-8-10-Dreieck: [[(6\\times8)/2=24]] und [[(10\\times4.8)/2=24]]. Zwei Methoden, ein Dreieck, eine Antwort: Übereinstimmung ist die stärkste verfügbare Prüfung." },
          { kind: "h3", text: "Prüfung 6: Die geometrische Mittelbeziehung" },
          { kind: "p", text: "Wenn die Hypotenusenabschnitte bekannt sind, prüfen Sie [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Eine Abweichung bedeutet, dass die Höhe, die Abschnitte oder die Dreiecksidentifikation falsch ist." },
          { kind: "h3", text: "Prüfung 7: Vergleich mit der größtmöglichen Fläche" },
          { kind: "p", text: "Bei fester Hypotenuse gilt [[K\\leq c^2/4]]. Mit [[c=10]] ist jede behauptete rechtwinklige Dreiecksfläche über 25 Quadrateinheiten unmöglich. Diese Seite macht keine Aussage über das eigene Prüfverhalten des Rechners; die Prüfung liegt bei Ihnen." }
        ]
      },
      "sec-compare": {
        h2: "Fläche aus Höhe vs. Fläche aus zwei Katheten",
        blocks: [
          { kind: "p", text: "Zwei Formeln, eine Fläche. [[K=ab/2]] braucht die zwei senkrechten Katheten; [[K=ch/2]] braucht die Hypotenuse und ihre Höhe. Keine ist korrekter; sie sind dieselbe Größe, erreicht aus verschiedenen Messungen." },
          { kind: "p", text: "Die Fläche desselben rechtwinkligen Dreiecks ändert sich nicht, wenn eine andere gültige Methode verwendet wird. Wählen Sie die Zeile, die zu den bereits vorhandenen Zahlen passt; wenn zwei Zeilen verfügbar sind, ist ihre Übereinstimmung eine kostenlose Richtigkeitsprüfung." }
        ],
        table: {
          headers: ["Methode", "Erforderliche Maße", "Hauptvorteil"],
          rows: [
            ["Fläche aus Katheten", "[[a]], [[b]]", "Am einfachsten, wenn die zwei Katheten bekannt sind"],
            ["Fläche aus Höhe", "[[c]], [[h]]", "Direkt, wenn Hypotenuse und senkrechte Höhe bekannt sind"],
            ["Fläche aus Winkel", "Passende Seiten und eingeschlossener Winkel", "Nützlich, wenn ein spitzer Winkel bekannt ist"],
            ["Fläche aus Inkreisradius", "[[r]], [[s]]", "Nützlich bei Inkreis- und Halbumfangproblemen"]
          ]
        }
      },
      "sec-conclusion": {
        h2: "Hypotenuse und ihre Höhe sind alles, was Sie brauchen",
        blocks: [
          { kind: "p", text: "Die Höhenmethode ist die Basis-Höhen-Regel, gerichtet auf die längste Seite. Sobald die Hypotenuse identifiziert und die senkrechte Höhe zur Hand ist, ist die Fläche eine Multiplikation und eine Halbierung entfernt, ohne die Katheten zuerst wiederherstellen zu müssen." },
          { kind: "p", text: "Ihre wahre Stärke ist Disziplin: Senkrechtstehen, die Höhengrenze und die geometrischen Mittelbeziehungen verwandeln vage Dreiecksskizzen in prüfbare Zahlen. Führen Sie die Prüfungen durch, vergleichen Sie mit der Kathetenformel, wenn die Katheten verfügbar sind, und die Antwort verdient ihr Vertrauen." },
          { kind: "p", text: "Behalten Sie den Rechner dieser Seite für die Fälle, in denen Hypotenuse und Höhe die gemessenen Daten sind, und greifen Sie zu den Katheten-, Winkel- oder Halbumfangrechnern, wenn die Messungen anderswohin zeigen." }
        ]
      }
    },
    faqs: [
      {
        question: "Wie lautet die Formel für die Fläche eines rechtwinkligen Dreiecks aus der Höhe?",
        answer: "Die Formel lautet K = ch/2, wobei c die Hypotenuse und h die senkrechte Höhe vom Scheitel des rechten Winkels zur Hypotenuse ist. Multiplizieren Sie die zwei Längen und teilen Sie durch zwei. Das Ergebnis steht in Quadratmaßen passend zu den Eingaben, also ergeben Metereingaben Quadratmeter. Die Höhe muss die Hypotenuse unter 90 Grad treffen, damit die Formel gilt."
      },
      {
        question: "Was bedeutet die Höhe h in einem rechtwinkligen Dreieck?",
        answer: "Die Höhe h ist das senkrechte Segment vom Scheitel des rechten Winkels C zur Hypotenuse, die sie im Punkt D trifft. Sie ist der kürzeste Abstand von diesem Scheitel zur Hypotenuse und die Höhe, die mit der Hypotenuse als Basis zusammengehört. Sie ist keine Kathete und nicht einfach irgendeine Linie im Dreieck."
      },
      {
        question: "Ist die Höhe dasselbe wie eine der Katheten?",
        answer: "Nein. Die Katheten a und b bilden den rechten Winkel, während die Höhe ein separates Segment von diesem Scheitel zur gegenüberliegenden Seite ist. In einem 6-8-10-Dreieck beträgt die Höhe 4,8, was keiner Kathete gleicht. Eine Kathete einzugeben, wo die Höhe hingehört, ist einer der häufigsten Fehler bei dieser Formel."
      },
      {
        question: "Warum kann die Hypotenuse als Basis verwendet werden?",
        answer: "Jede Seite eines Dreiecks kann als Basis dienen, sobald ihre zugehörige senkrechte Höhe bekannt ist. Bei der Hypotenuse ist diese Höhe die Höhe vom Scheitel des rechten Winkels. Weil die zwei senkrecht aufeinander stehen, gilt die allgemeine Regel halbe Basis mal Höhe direkt, was K = ch/2 ergibt."
      },
      {
        question: "Warum teilen wir das Hypotenuse-Höhe-Produkt durch zwei?",
        answer: "Das Produkt c mal h ist die Fläche des Parallelogramms, das auf derselben Basis mit derselben Höhe errichtet wird. Ein Dreieck füllt genau die Hälfte dieses Parallelogramms, also muss das Produkt halbiert werden. Das Auslassen der Division beantwortet eine andere Frage: Bei c = 10 und h = 4,8 ist 48 das Parallelogramm, während 24 das Dreieck ist."
      },
      {
        question: "Wie findet man die Höhe, wenn beide Katheten bekannt sind?",
        answer: "Verwenden Sie h = ab/c. Multiplizieren Sie die zwei Katheten und teilen Sie durch die Hypotenuse, die Sie bei Bedarf aus dem Satz des Pythagoras erhalten. Für die Katheten 6 und 8 mit Hypotenuse 10 gilt h = 48/10 = 4,8. Der Höhen-aus-Seiten-Rechner auf dieser Seite führt genau diese Berechnung durch, wenn die Seiten bekannt sind."
      },
      {
        question: "Was ist der Höhensatz des geometrischen Mittels für das rechtwinklige Dreieck?",
        answer: "Er besagt, dass h zum Quadrat gleich p mal q ist, wobei p und q die zwei Abschnitte sind, in die die Höhe die Hypotenuse schneidet. Die Höhe ist daher das geometrische Mittel dieser Abschnitte. Für p = 6,4 und q = 3,6 gilt h = Wurzel aus 23,04 = 4,8, was auch eine anders gefundene Höhe verifiziert."
      },
      {
        question: "Kann die Höhe länger als die halbe Hypotenuse sein?",
        answer: "Nein. Für ein gültiges rechtwinkliges Dreieck muss h die Bedingung 0 < h <= c/2 erfüllen. Die Höhe ist am höchsten, wenn sie die Hypotenuse in gleiche Hälften teilt, und erreicht genau c/2 im gleichschenkligen Fall. Ein größerer Wert, etwa h = 6 bei c = 10, kann nicht zu einem rechtwinkligen Dreieck mit dieser Hypotenuse gehören."
      },
      {
        question: "Wie berechnet man die Fläche, wenn nur Hypotenuse und Höhe bekannt sind?",
        answer: "Wenden Sie K = ch/2 direkt an. Keine Kathetenrekonstruktion ist nötig, weil die Fläche durch eine Seite und ihre zugehörige Höhe bereits bestimmt ist. Zum Beispiel ergeben c = 10 und h = 4,8 die Fläche K = 24 Quadrateinheiten. Bestätigen Sie nur zuerst, dass die Höhe senkrecht steht und nicht größer als die halbe Hypotenuse ist."
      },
      {
        question: "Warum liefert die höhenbasierte Formel dasselbe Ergebnis wie die Kathetenformel?",
        answer: "Beide berechnen die Fläche desselben Dreiecks. Setzt man ab/2 gleich ch/2 und multipliziert mit zwei, erhält man ab = ch, also h = ab/c. Die zwei Formeln sind für jedes konsistente rechtwinklige Dreieck algebraisch äquivalent, weshalb die Berechnung beider eine so starke Prüfung ist: Übereinstimmung bestätigt die Eingaben."
      },
      {
        question: "Welche Einheiten sollte das Flächenergebnis verwenden?",
        answer: "Quadratmaße passend zu den Eingabelängen: Meter ergeben Quadratmeter, Zentimeter ergeben Quadratzentimeter, Millimeter ergeben Quadratmillimeter. Rechnen Sie alle Eingaben vor der Berechnung auf eine Einheit um. Denken Sie daran, dass Flächenumrechnungen den linearen Faktor quadrieren, sodass ein Quadratmeter 10.000 Quadratzentimetern entspricht."
      },
      {
        question: "Kann die höhenbasierte Formel für andere Dreiecke verwendet werden?",
        answer: "Die Basis-Höhen-Regel halbe Basis mal Höhe funktioniert für jedes Dreieck mit einem passenden senkrechten Paar. Das Besondere hier sind die Einschränkungen des rechtwinkligen Dreiecks: Die Höhe muss vom Scheitel des rechten Winkels ausgehen, und h kann c/2 niemals übersteigen. Diese Grenzen gelten nicht für spitze oder stumpfe Dreiecke."
      }
    ],
    faqHeading: "Häufige Fragen",
    relatedHeading: "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
    relatedItems: [
      "Rechner für die Fläche eines rechtwinkligen Dreiecks",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus den Katheten",
      "Rechner für die Höhe eines rechtwinkligen Dreiecks aus den Seiten",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Winkel",
      "Rechner für den Umfang eines rechtwinkligen Dreiecks",
      "Rechner für die Seiten eines rechtwinkligen Dreiecks"
    ]
  },
  it: {
    tocHeading: "In questa guida",
    tocItems: {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo dall'altezza",
      "sec-understand": "Comprendere ipotenusa e altezza",
      "sec-formula": "La formula dell'area dall'altezza",
      "sec-steps": "Esempio di calcolo passo passo",
      "sec-howto": "Come usare il calcolatore dell'area dall'altezza",
      "sec-examples": "Esempi svolti: ipotenusa e altezza",
      "sec-applications": "Applicazioni nella vita reale",
      "sec-equal": "Perché entrambe le formule dell'area concordano",
      "sec-geomean": "Come l'altezza divide un triangolo rettangolo",
      "sec-max": "Altezza massima possibile",
      "sec-find-altitude": "Trovare l'altezza quando è sconosciuta",
      "sec-units": "Unità quadrate e conversioni",
      "sec-mistakes": "Errori comuni",
      "sec-verify": "Come verificare il risultato",
      "sec-compare": "Area dall'altezza vs. area dai due cateti",
      "sec-related": "Scopri i calcolatori correlati per triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    sections: {
      "sec-intro": {
        h2: "Come calcolare l'area di un triangolo rettangolo dall'altezza",
        blocks: [
          { kind: "p", text: "Supponiamo che un triangolo rettangolo abbia un'ipotenusa di 10 m e che la distanza perpendicolare dal vertice dell'angolo retto a quell'ipotenusa misuri 4,8 m. La sua area segue direttamente: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] Il triangolo racchiude 24 metri quadrati di superficie piana." },
          { kind: "p", text: "Il calcolatore di questa pagina esiste proprio per questa situazione. Quando conosci il lato più lungo di un triangolo rettangolo, l'ipotenusa [[c]], e l'altezza perpendicolare dal vertice dell'angolo retto a quel lato, [[h]], i due cateti non servono. L'ipotenusa funge da base, l'altezza è la sua altezza perpendicolare corrispondente, e l'area di ogni triangolo è metà del prodotto di una base per la sua altezza corrispondente: [[K=ch/2]]." },
          { kind: "p", text: "L'altezza deve incontrare l'ipotenusa ad angolo retto; un segmento obliquo che non è perpendicolare dà un'altezza sbagliata e un'area sbagliata. Inserisci entrambe le misure in unità di lunghezza compatibili, e il calcolatore restituisce l'area nelle corrispondenti unità quadrate, mostrando ogni passaggio di sostituzione." }
        ]
      },
      "sec-understand": {
        h2: "Comprendere l'ipotenusa e l'altezza di un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Questa guida usa una notazione coerente in tutto il testo: [[A]] e [[B]] sono i due angoli acuti, [[C=90^\\circ]] è l'angolo retto, il lato [[a]] è opposto all'angolo [[A]], il lato [[b]] è opposto all'angolo [[B]], il lato [[c]] è l'ipotenusa opposta all'angolo [[C]], [[h]] è l'altezza perpendicolare dal vertice [[C]] all'ipotenusa, che la incontra nel punto [[D]], [[p]] e [[q]] sono i segmenti di ipotenusa [[AD]] e [[DB]], e [[K]] è l'area." },
          { kind: "h3", text: "Cos'è un triangolo rettangolo?" },
          { kind: "p", text: "Un triangolo rettangolo contiene esattamente un angolo di 90 gradi. I suoi due cateti si incontrano nell'angolo retto, e l'ipotenusa si trova di fronte a quell'angolo. L'ipotenusa è sempre il lato più lungo. Gli altri due angoli sono acuti, e poiché i tre angoli sommano a 180 gradi, [[A+B=90^\\circ]]. Questi fatti contano perché il metodo dell'altezza si basa su di essi: la base deve essere l'ipotenusa, e l'altezza deve scendere dal vertice dell'angolo retto." },
          { kind: "h3", text: "Cos'è l'ipotenusa?" },
          { kind: "p", text: "L'ipotenusa è il lato opposto all'angolo retto, indicata con [[c]] nel calcolatore. Per individuarla in qualsiasi orientamento, trova il lato che non tocca il quadratino del vertice: quel lato è l'ipotenusa. Nella formula dell'altezza svolge il ruolo di base, quindi riconoscerla correttamente è la prima abilità che questa pagina insegna." },
          { kind: "h3", text: "Cos'è l'altezza?" },
          { kind: "p", text: "Un'altezza è un segmento perpendicolare dal vertice di un triangolo alla retta che contiene il lato opposto. Qui l'altezza [[h]] va dal vertice dell'angolo retto [[C]] all'ipotenusa [[AB]] e la incontra nel punto [[D]], quindi [[CD\\perp AB]]. È una distanza perpendicolare, non semplicemente una qualsiasi linea tracciata dentro il triangolo: solo il segmento che incontra l'ipotenusa a 90 gradi vale." },
          { kind: "h3", text: "L'altezza è la stessa cosa di un cateto?" },
          { kind: "p", text: "No. I cateti [[a]] e [[b]] si incontrano nell'angolo retto originale, mentre l'altezza è un segmento separato da quello stesso vertice al lato opposto. Prendi un triangolo 6-8-10: [[a=6]], [[b=8]], [[c=10]]. La sua altezza è [[h=(6\\times8)/10=4.8]]. Nessun cateto misura 4,8, eppure l'altezza all'ipotenusa è esattamente 4,8. Confondere un cateto con l'altezza è uno degli errori più comuni in questa pagina." },
          { kind: "h3", text: "Perché l'altezza cade dentro il triangolo" },
          { kind: "p", text: "Per un triangolo rettangolo non degenere, la perpendicolare dal vertice dell'angolo retto cade sull'ipotenusa tra i suoi estremi, mai fuori. La divide in due triangoli rettangoli più piccoli. Quei due triangoli condividono le misure degli angoli acuti dell'originale, il che rende tutti e tre i triangoli simili tra loro. Quella similitudine è il motivo per cui l'altezza soddisfa relazioni così ordinate, esplorate nella sezione sul medio geometrico qui sotto." }
        ],
        imgAlt: "Triangolo ABC: cateti a e b, ipotenusa c come base, altezza h da C a D, formula K = ch/2",
        figcaption: "Anatomia del metodo dell'altezza: l'ipotenusa c è la base, l'altezza h la incontra a 90 gradi nel punto D, e l'area è K = ch/2."
      },
      "sec-formula": {
        h2: "La formula dell'area del triangolo rettangolo dall'altezza",
        blocks: [
          { kind: "p", text: "La formula dell'area dall'altezza è [[[\\boxed{K=\\frac{ch}{2}}]]] Qui [[K]] è l'area, [[c]] è l'ipotenusa che funge da base, e [[h]] è l'altezza perpendicolare all'ipotenusa. Tre simboli, una moltiplicazione, un dimezzamento." },
          { kind: "h3", text: "Perché moltiplichiamo ipotenusa e altezza?" },
          { kind: "p", text: "La formula generale dell'area di un triangolo è [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], e base e altezza devono essere perpendicolari tra loro. Scegliere l'ipotenusa come base costringe l'altezza a essere la distanza perpendicolare a essa, che è esattamente l'altezza: [[\\text{base}=c]] e [[\\text{height}=h]], quindi [[K=ch/2]]. Questo vale comunque il triangolo sia ruotato o disegnato: la perpendicolarità è una relazione geometrica, non una direzione sullo schermo, quindi un'ipotenusa obliqua funziona come base tanto bene quanto una orizzontale." },
          { kind: "h3", text: "Perché il risultato si divide per due?" },
          { kind: "p", text: "Un triangolo occupa metà del parallelogramma costruito sulla stessa base con la stessa altezza perpendicolare. Con [[c=10]] e [[h=4.8]], il prodotto [[c\\times h=48]] è l'area di quel parallelogramma. Il triangolo ne è la metà, quindi [[K=48/2=24]]. Riportare 48 risponderebbe a una domanda diversa: l'area del parallelogramma intero, non del triangolo al suo interno." },
          { kind: "h3", text: "Questa formula funziona per ogni triangolo?" },
          { kind: "p", text: "La regola base-altezza funziona per ogni triangolo, purché l'altezza sia perpendicolare alla base scelta. Ciò che è speciale qui è la scelta della base: l'ipotenusa di un triangolo rettangolo, con l'altezza calata dal vertice dell'angolo retto. Quella scelta porta vincoli geometrici aggiuntivi, come il fatto che l'altezza non superi mai metà dell'ipotenusa, che non si applicano ai triangoli generici." },
          { kind: "h3", text: "Perché la formula non ha bisogno dei due cateti" },
          { kind: "p", text: "L'area ha bisogno di un lato e della sua altezza perpendicolare corrispondente, niente di più. Quando [[c]] e [[h]] sono già noti, i cateti non aggiungono alcuna informazione nuova sull'area. La formula dei cateti [[K=ab/2]] è semplicemente un'altra via di input verso la stessa quantità, utile quando i dati misurati sono i due lati perpendicolari." }
        ],
        imgAlt: "c = 10, h = 4,8: 10 per 4,8 = 48, dimezzato 24. Per questo l'area del triangolo è metà base per altezza",
        figcaption: "Il prodotto c per h è il rettangolo intero; il triangolo ne riempie esattamente la metà, ed è per questo che la formula divide per due."
      },
      "sec-steps": {
        h2: "Esempio passo passo di calcolo dell'area dall'altezza",
        blocks: [
          { kind: "p", text: "Un calcolo completo, dalle misure alla risposta verificata, usando [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]." }
        ],
        steps: [
          "<strong>Individua le misure date.</strong> L'ipotenusa è [[c=10\\text{ m}]] e l'altezza perpendicolare a essa è [[h=4.8\\text{ m}]]. Conferma che l'altezza incontri l'ipotenusa ad angolo retto.",
          "<strong>Scrivi la formula.</strong> [[K=ch/2]].",
          "<strong>Sostituisci le misure.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Moltiplica.</strong> [[10\\times4.8=48]], quindi [[K=48/2]].",
          "<strong>Dividi per due.</strong> [[[\\boxed{K=24\\text{ m}^2}]]]",
          "<strong>Interpreta la risposta.</strong> Il triangolo racchiude 24 metri quadrati di area piana.",
          "<strong>Verifica la fattibilità.</strong> Un triangolo rettangolo valido richiede [[h\\leq c/2]]; qui [[4.8\\leq5]], quindi le misure possono descrivere un vero triangolo rettangolo.",
          "<strong>Verifica usando i cateti.</strong> Un triangolo 6-8-10 ha la stessa ipotenusa e altezza, e [[K=(6\\times8)/2=24]]. Entrambe le vie concordano."
        ]
      },
      "sec-howto": {
        h2: "Come usare il calcolatore dell'area del triangolo rettangolo dall'altezza",
        blocks: [
          { kind: "p", text: "Il calcolatore di questa pagina ha bisogno di esattamente due input. La guida qui sotto segue l'ordine sullo schermo, così un utente alle prime armi può passare da un triangolo disegnato o misurato a un'area verificata." }
        ],
        steps: [
          "<strong>Individua il triangolo rettangolo.</strong> Conferma che un angolo sia di 90 gradi; il metodo si applica solo ai triangoli rettangoli.",
          "<strong>Trova la sua ipotenusa [[c]].</strong> È il lato opposto all'angolo retto e il lato più lungo.",
          "<strong>Individua l'altezza perpendicolare [[h]].</strong> Va dal vertice dell'angolo retto all'ipotenusa e la incontra a 90 gradi.",
          "<strong>Misura o ricava entrambi i valori.</strong> Misura direttamente, oppure calcola prima l'altezza con [[h=ab/c]] quando i cateti sono noti.",
          "<strong>Inserisci l'ipotenusa nel campo Ipotenusa c.</strong>",
          "<strong>Inserisci l'altezza nel campo Altezza h.</strong>",
          "<strong>Seleziona unità di lunghezza compatibili.</strong> Entrambi gli input devono usare la stessa unità prima che la formula venga applicata.",
          "<strong>Conferma che entrambi i valori siano positivi.</strong> Lunghezze zero o negative non descrivono alcun triangolo.",
          "<strong>Controlla che [[h]] non superi metà dell'ipotenusa.</strong> Per [[c=10]], qualsiasi altezza sopra 5 non può appartenere a un triangolo rettangolo con quell'ipotenusa.",
          "<strong>Clicca su Calcola area.</strong>",
          "<strong>Esamina il risultato dell'area.</strong> Appare in unità quadrate corrispondenti all'unità di input.",
          "<strong>Leggi i passaggi di soluzione mostrati.</strong> Mostrano la formula, la sostituzione e i calcoli.",
          "<strong>Ispeziona la visualizzazione dal vivo.</strong> Conferma che l'ipotenusa e l'altezza del diagramma corrispondano alle misure previste.",
          "<strong>Usa Azzera per un nuovo calcolo.</strong> Svuota entrambi i campi così il calcolo successivo parte pulito."
        ],
        closingParagraphs: [
          "Il calcolatore non chiede i due cateti o un angolo, perché il metodo dell'altezza non ne ha davvero bisogno."
        ]
      },
      "sec-examples": {
        h2: "Esempi svolti di area del triangolo rettangolo da ipotenusa e altezza",
        blocks: [
          { kind: "p", text: "Quattro esempi svolti costruiscono il metodo a partire da triangoli familiari. Ciascuno calcola l'altezza dai cateti dove serve, applica [[K=ch/2]] e controlla con la formula dei cateti." },
          { kind: "h3", text: "Esempio 1: un triangolo rettangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3]], [[b=4]], [[c=5]]. L'altezza è [[h=ab/c]], quindi [[h=(3\\times4)/5=2.4]]. L'area è [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]] Verificando con i cateti, [[K=(3\\times4)/2=6]]. Entrambe le formule descrivono lo stesso triangolo, quindi devono concordare, e concordano." },
          { kind: "h3", text: "Esempio 2: un triangolo rettangolo 5-12-13" },
          { kind: "p", text: "Dati [[a=5]], [[b=12]], [[c=13]]. L'altezza è [[h=(5\\times12)/13=60/13\\approx4.61538]]. Mantenendo la frazione esatta, [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]] Mantenere [[60/13]] invece di un decimale arrotondato evita un errore di arrotondamento precoce: il 13 si semplifica esattamente, lasciando un pulito 30." },
          { kind: "h3", text: "Esempio 3: un triangolo rettangolo 6-8-10" },
          { kind: "p", text: "Dati [[c=10]] e [[h=4.8]] direttamente. Allora [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Con cateti 6 e 8, [[K=(6\\times8)/2=24]], che conferma la via dell'altezza." },
          { kind: "h3", text: "Esempio 4: un triangolo rettangolo isoscele" },
          { kind: "p", text: "Dati [[c=10]] e [[h=5]]. Allora [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]] Questa è l'area più grande che un triangolo rettangolo con ipotenusa 10 possa avere. L'altezza è uguale a metà dell'ipotenusa solo quando i cateti sono uguali, rendendo ciascun angolo acuto di [[45^\\circ]], e nessun triangolo rettangolo valido con questa ipotenusa può superare 25 unità quadrate." }
        ]
      },
      "sec-applications": {
        h2: "Applicazioni nella vita reale dell'area del triangolo rettangolo dall'altezza",
        blocks: [
          { kind: "p", text: "Dodici situazioni svolte mostrano la formula a scale diverse e in unità diverse. Ciascuna nomina il triangolo nella scena, le due misure, la sostituzione, l'area e l'assunzione dietro il modello." },
          { kind: "h3", text: "Esempio 1: sezione triangolare di giardino" },
          { kind: "p", text: "Una sezione di giardino a triangolo rettangolo ha un confine più lungo di 10 m, e la distanza perpendicolare dal vertice dell'angolo retto a quel confine è di 4,8 m. Quindi [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]] La sezione occupa 24 metri quadrati. Questo assume che il confine sia rettilineo e che l'angolo sia un vero angolo retto." },
          { kind: "h3", text: "Esempio 2: pannello triangolare di compensato" },
          { kind: "p", text: "Un pannello di compensato a triangolo rettangolo ha un'ipotenusa di 1 m e un'altezza perpendicolare di 0,48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]] È la superficie piana di una faccia, utile per stime di copertura. Scarti di taglio e margini di materiale sono considerazioni separate." },
          { kind: "h3", text: "Esempio 3: finestra di vetro a triangolo rettangolo" },
          { kind: "p", text: "Un pannello di vetro a triangolo rettangolo ha un'ipotenusa di 1,3 m e un'altezza di 0,6 m perpendicolare a quel lato: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]] È l'area geometrica del vetro prima che si considerino copertura del telaio o margini di installazione." },
          { kind: "h3", text: "Esempio 4: rilievo di una sezione triangolare" },
          { kind: "p", text: "Un disegno di rilievo contiene un triangolo rettangolo con ipotenusa 13 m e altezza [[60/13]] m. Mantenendo la frazione: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]] Il disegno rappresenta una sezione di 30 metri quadrati. Il lavoro sul campo vero e proprio può comunque richiedere correzioni strumentali oltre il progetto." },
          { kind: "h3", text: "Esempio 5: misura di una piastrella triangolare" },
          { kind: "p", text: "Una piastrella a triangolo rettangolo ha un'ipotenusa di 25 cm e un'altezza perpendicolare di 6,72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]] Una piastrella copre 84 centimetri quadrati, il che aiuta a stimare quante piastrelle servono per una superficie. Fughe e perdite di taglio si contano separatamente." },
          { kind: "h3", text: "Esempio 6: pannello di supporto in acciaio" },
          { kind: "p", text: "Un pannello di supporto piatto a triangolo rettangolo ha un'ipotenusa di 1,7 m con cateti di 0,8 m e 1,5 m. La sua altezza è [[h=(0.8\\times1.5)/1.7=12/17]] m. Allora [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]] È l'area geometrica del pannello, non la sua capacità portante." },
          { kind: "h3", text: "Esempio 7: pannello laterale triangolare di rampa" },
          { kind: "p", text: "Un pannello laterale di rampa semplificato forma un triangolo rettangolo con un'ipotenusa di 5 m e un'altezza perpendicolare di 2,4 m a quell'ipotenusa: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]] È l'area piana della sezione laterale triangolare, non la superficie inclinata della rampa, e il calcolo non stabilisce la conformità di accessibilità." },
          { kind: "h3", text: "Esempio 8: sezione di timpano del tetto" },
          { kind: "p", text: "Una sezione di timpano del tetto a triangolo rettangolo ha un'ipotenusa di 6,5 m e un'altezza perpendicolare di [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]] Il risultato descrive il piano triangolare dato dalle misure. La superficie totale di un tetto reale è un problema di misura tridimensionale separato." },
          { kind: "h3", text: "Esempio 9: appezzamento di terreno a triangolo rettangolo" },
          { kind: "p", text: "Una sezione di terreno a triangolo rettangolo ha un'ipotenusa di 50 m e un'altezza perpendicolare di 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]] I confini misurati racchiudono 600 metri quadrati. Un dato di area ufficiale può comunque richiedere una verifica di rilievo." },
          { kind: "h3", text: "Esempio 10: grande appezzamento di rilievo triangolare" },
          { kind: "p", text: "Una sezione rilevata a triangolo rettangolo ha un'ipotenusa di 100 m e un'altezza perpendicolare di 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]] È l'area piana della sezione triangolare. Rappresenta l'intera proprietà solo quando la proprietà consiste unicamente di quel triangolo." },
          { kind: "h3", text: "Esempio 11: sezione triangolare di vela" },
          { kind: "p", text: "Un progetto di vela piatto a triangolo rettangolo ha un'ipotenusa di 15 ft e un'altezza perpendicolare di 7,2 ft: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]] È l'area piana della vela idealizzata. Tessuto curvo, cuciture e margini di bordo richiedono una considerazione separata." },
          { kind: "h3", text: "Esempio 12: piccola staffa meccanica" },
          { kind: "p", text: "Una staffa piatta a triangolo rettangolo ha un'ipotenusa di 250 mm e un'altezza perpendicolare di 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]] La risposta è in millimetri quadrati perché gli input sono in millimetri. Poiché [[1\\text{ cm}^2=100\\text{ mm}^2]], questo equivale a [[[\\boxed{150\\text{ cm}^2}]]] Convertire l'unità lineare e convertire l'unità quadrata sono operazioni diverse, come spiega la sezione sulle unità." },
          { kind: "h3", text: "Confronto degli esempi pratici" }
        ],
        table: {
          headers: ["Situazione", "Ipotenusa c", "Altezza h", "Formula", "Area calcolata", "Interpretazione pratica"],
          rows: [
            ["Sezione di giardino", "10 m", "4,8 m", "[[K=ch/2]]", "24 m²", "Superficie di piantumazione"],
            ["Pannello di compensato", "1 m", "0,48 m", "[[K=ch/2]]", "0,24 m²", "Copertura materiale, senza scarti"],
            ["Finestra di vetro", "1,3 m", "0,6 m", "[[K=ch/2]]", "0,39 m²", "Area del vetro prima del telaio"],
            ["Disegno di rilievo", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Area in pianta della sezione"],
            ["Piastrella", "25 cm", "6,72 cm", "[[K=ch/2]]", "84 cm²", "Superficie di una piastrella"],
            ["Pannello d'acciaio", "1,7 m", "12/17 m", "[[K=ch/2]]", "0,6 m²", "Geometria, non capacità portante"],
            ["Pannello laterale di rampa", "5 m", "2,4 m", "[[K=ch/2]]", "6 m²", "Sezione laterale, non superficie di rampa"],
            ["Timpano del tetto", "6,5 m", "30/13 m", "[[K=ch/2]]", "7,5 m²", "Sezione triangolare"],
            ["Appezzamento di terreno", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Area racchiusa, da verificare con rilievo"],
            ["Appezzamento di rilievo", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Sezione, non intera proprietà"],
            ["Sezione di vela", "15 ft", "7,2 ft", "[[K=ch/2]]", "54 ft²", "Vela piatta idealizzata"],
            ["Staffa", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Equivale a 150 cm²"]
          ]
        },
        imgAlt: "Quattro esempi: giardino, pannello di vetro, terreno e staffa, ciascuno con ipotenusa c, altezza h e area",
        figcaption: "La stessa formula a quattro scale: giardino, pannello di vetro, appezzamento di terreno e staffa meccanica."
      },
      "sec-equal": {
        h2: "Perché entrambe le formule dell'area del triangolo rettangolo danno la stessa risposta",
        blocks: [
          { kind: "p", text: "Un triangolo rettangolo può essere misurato attraverso i suoi due cateti perpendicolari o attraverso la sua ipotenusa e altezza. La formula dei cateti è [[K=ab/2]] e la formula dell'altezza è [[K=ch/2]]. Poiché entrambe descrivono l'area dello stesso triangolo, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Moltiplica entrambi i lati per due: [[ab=ch]]. Risolvi per [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]] L'altezza è il prodotto dei cateti diviso per l'ipotenusa, ed è per questo che le due formule non possono mai discordare su un triangolo coerente." },
          { kind: "p", text: "Verifica numerica: per [[a=6]], [[b=8]], [[c=10]], l'altezza è [[h=(6\\times8)/10=4.8]]. Dai cateti: [[K=(6\\times8)/2=24]]. Dall'altezza: [[K=(10\\times4.8)/2=24]]. Lo stesso triangolo, la stessa area, due vie." },
          { kind: "p", text: "Quando sono noti solo ipotenusa e altezza, l'area è già fissata: non serve ricostruire prima i cateti. Le lunghezze dei cateti possono comunque essere recuperate da [[c]] e [[h]] validi attraverso le relazioni dei segmenti qui sotto, ma è un calcolo separato dal trovare l'area. Quando invece i dati noti sono i cateti, il <a href=\"/right-triangle-area-from-legs-calculator/\">calcolatore dell'area del triangolo rettangolo dai cateti</a> li prende direttamente." }
        ]
      },
      "sec-geomean": {
        h2: "Come l'altezza divide un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "L'altezza incontra l'ipotenusa in [[D]], dividendola nei segmenti [[AD=p]] e [[DB=q]], quindi [[p+q=c]]. Quella divisione crea due triangoli rettangoli più piccoli annidati dentro l'originale, e le loro proporzioni sono notevolmente ordinate." },
          { kind: "h3", text: "Due triangoli rettangoli più piccoli simili" },
          { kind: "p", text: "L'altezza divide il triangolo originale in due triangoli rettangoli più piccoli, ciascuno dei quali condivide un angolo acuto con l'originale e ciascuno contenente un angolo retto. Condividere due misure angolari rende tutti e tre i triangoli simili. La similitudine è ciò che forza le pulite relazioni proporzionali tra altezza, segmenti e cateti." },
          { kind: "h3", text: "Il teorema del medio geometrico dell'altezza" },
          { kind: "p", text: "La similitudine dà [[[\\boxed{h^2=pq}]]], o equivalentemente [[[\\boxed{h=\\sqrt{pq}}]]] L'altezza è il medio geometrico dei due segmenti di ipotenusa: il suo quadrato è uguale al loro prodotto. Esempio svolto: con [[p=6.4]] e [[q=3.6]], [[c=p+q=10]], e [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]] L'area segue: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]] Il teorema dei segmenti verifica un'altezza misurata o calcolata in altro modo." },
          { kind: "h3", text: "Relazione tra i segmenti e i cateti" },
          { kind: "p", text: "La stessa similitudine dà [[b^2=cp]] e [[a^2=cq]]. Con [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] e [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. Il triangolo 6-8-10 originale viene recuperato esattamente, il che mostra quanto strettamente segmenti, altezza e cateti siano legati insieme." }
        ]
      },
      "sec-max": {
        h2: "Quanto può essere grande l'altezza di un triangolo rettangolo?",
        blocks: [
          { kind: "p", text: "Non ogni coppia di numeri positivi può essere ipotenusa e altezza. Per un triangolo rettangolo valido e non degenere, [[[\\boxed{0<h\\leq\\frac{c}{2}}]]] L'altezza deve essere positiva e non può mai superare metà dell'ipotenusa." },
          { kind: "h3", text: "Perché l'altezza non può superare metà dell'ipotenusa" },
          { kind: "p", text: "Da [[h^2=pq]] con [[p+q=c]], il prodotto [[pq]] è massimo quando i due segmenti sono uguali, [[p=q=c/2]]. Quindi [[h^2\\leq c^2/4]], e per lunghezze positive [[h\\leq c/2]]. In parole povere: l'altezza è più alta quando divide l'ipotenusa in due metà uguali, e anche allora raggiunge solo metà dell'ipotenusa." },
          { kind: "h3", text: "Area massima per un'ipotenusa fissa" },
          { kind: "p", text: "Poiché [[K=ch/2]] e [[h\\leq c/2]], l'area più grande possibile è [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Questo massimo appartiene al triangolo rettangolo isoscele, dove i due cateti sono uguali. Con [[c=10]], l'altezza valida più alta è [[h_{\\max}=5]], dando [[K_{\\max}=(10\\times5)/2=25]]. Un'altezza di 6 con un'ipotenusa di 10 è impossibile per un triangolo rettangolo." },
          { kind: "h3", text: "Cosa succede se l'altezza è troppo grande?" },
          { kind: "p", text: "Prendi [[c=10]] e [[h=6]]: [[6>5]], quindi nessun triangolo rettangolo ha queste misure. Il calcolo [[(10\\times6)/2=30]] è un'area valida per qualche triangolo in un contesto più generale, ma non rende [[c=10]], [[h=6]] un input valido di triangolo rettangolo. Questa pagina non afferma che il calcolatore rifiuti automaticamente tali input; la verifica spetta a te." },
          { kind: "h3", text: "L'altezza può essere uguale a metà dell'ipotenusa?" },
          { kind: "p", text: "Sì. L'uguaglianza dà il triangolo rettangolo isoscele con due cateti uguali, un triangolo valido non degenere. È il caso limite, non un caso difettoso." }
        ],
        imgAlt: "Triangolo 6-8-10 con altezza che divide l'ipotenusa in p = 6,4 e q = 3,6, più isoscele all'altezza c/2",
        figcaption: "A sinistra: l'altezza è il medio geometrico dei segmenti di ipotenusa. A destra: l'altezza più alta possibile è metà dell'ipotenusa, dando l'area massima."
      },
      "sec-find-altitude": {
        h2: "Come calcolare l'altezza quando è sconosciuta",
        blocks: [
          { kind: "p", text: "Questo calcolatore prende [[h]] come input, quindi un'altezza sconosciuta va prima trovata o misurata. Tre vie standard coprono i casi comuni. Quando i lati sono noti e l'altezza è il pezzo mancante, il <a href=\"/right-triangle-altitude-from-sides-calculator/\">calcolatore dell'altezza del triangolo rettangolo dai lati</a> la calcola direttamente." },
          { kind: "h3", text: "Metodo 1: usando entrambi i cateti e l'ipotenusa" },
          { kind: "p", text: "[[[\\boxed{h=\\frac{ab}{c}}]]] Con [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { kind: "h3", text: "Metodo 2: usando i segmenti di ipotenusa" },
          { kind: "p", text: "[[[\\boxed{h=\\sqrt{pq}}]]] Con [[p=6.4]] e [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { kind: "h3", text: "Metodo 3: usando area nota e ipotenusa" },
          { kind: "p", text: "Riordinando [[K=ch/2]] si ottiene [[[\\boxed{h=\\frac{2K}{c}}]]] Con [[K=24]] e [[c=10]]: [[h=(2\\times24)/10=4.8]]." },
          { kind: "p", text: "Questi sono riordinamenti matematici, non modalità extra del calcolatore: il calcolatore dell'area dall'altezza in sé si aspetta comunque l'altezza come input." }
        ]
      },
      "sec-units": {
        h2: "Comprendere le unità quadrate nei calcoli dell'area del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "L'area è bidimensionale. Moltiplicare due lunghezze moltiplica anche le loro unità: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. L'unità di area è sempre il quadrato dell'unità di lunghezza." },
          { kind: "h3", text: "Metri quadrati" },
          { kind: "p", text: "Con [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]], [[K=24\\text{ m}^2]]. Leggilo come 24 metri quadrati di superficie." },
          { kind: "h3", text: "Centimetri quadrati" },
          { kind: "p", text: "Con [[c=25\\text{ cm}]] e [[h=6.72\\text{ cm}]], [[K=84\\text{ cm}^2]]]" },
          { kind: "h3", text: "Millimetri quadrati" },
          { kind: "p", text: "Con [[c=250\\text{ mm}]] e [[h=120\\text{ mm}]], [[K=15000\\text{ mm}^2]]]" },
          { kind: "h3", text: "Conversione delle unità di area" },
          { kind: "p", text: "[[1\\text{ m}^2=10000\\text{ cm}^2]] e [[1\\text{ cm}^2=100\\text{ mm}^2]]. Una conversione lineare moltiplica per 10, 100 o 1000, ma una conversione di area eleva quel fattore al quadrato: 100 cm in un metro diventano [[100^2=10000]] centimetri quadrati in un metro quadrato. Convertire la lunghezza e convertire l'area sono operazioni diverse." },
          { kind: "h3", text: "E se gli input usano unità diverse?" },
          { kind: "p", text: "Prima converti, poi calcola. Un'ipotenusa in metri e un'altezza in centimetri vanno portate a un'unità, per esempio 2 m e 150 cm diventano 2 m e 1,5 m, prima che la formula venga applicata. Unità miste nella formula producono un numero senza senso con nessuna unità pulita." }
        ]
      },
      "sec-mistakes": {
        h2: "Errori comuni nell'uso della formula dell'area dall'altezza",
        blocks: [
          { kind: "p", text: "La maggior parte delle risposte sbagliate in questa pagina viene da input etichettati male, non da cattiva aritmetica. I diciotto errori qui sotto coprono quasi tutti." },
          { kind: "h3", text: "1. Usare un cateto al posto dell'altezza" },
          { kind: "p", text: "L'altezza [[h]] scende dal vertice dell'angolo retto all'ipotenusa; un cateto corre lungo il bordo del triangolo. In un triangolo 6-8-10, inserire il cateto 6 come altezza dà [[(10\\times6)/2=30]] invece di 24. Rimedi: l'altezza deve atterrare sull'ipotenusa con un marcatore di angolo retto." },
          { kind: "h3", text: "2. Confondere l'altezza con l'ipotenusa" },
          { kind: "p", text: "Scambiare [[c]] e [[h]] cambia il significato del prodotto. Con [[c=10]] e [[h=4.8]], i numeri commutano nella moltiplicazione, ma il controllo di fattibilità [[h\\leq c/2]] si rompe: la voce scambiata dichiara un'altezza di 10 su un'ipotenusa di 4,8, il che è impossibile. Rimedi: l'ipotenusa è sempre il lato più lungo." },
          { kind: "h3", text: "3. Tracciare l'altezza dal vertice sbagliato" },
          { kind: "p", text: "Solo l'altezza dal vertice dell'angolo retto [[C]] si abbina all'ipotenusa come sua base. Una perpendicolare da un vertice acuto atterra su un cateto, non sull'ipotenusa, e non appartiene a questa formula. Rimedi: parti dal vertice quadrato." },
          { kind: "h3", text: "4. Misurare l'altezza con un angolo non perpendicolare" },
          { kind: "p", text: "Qualsiasi segmento non perpendicolare da [[C]] all'ipotenusa è più lungo della vera altezza, quindi l'area risulta troppo grande. Rimedi: verifica l'incontro a 90 gradi, per costruzione o con [[h=ab/c]]." },
          { kind: "h3", text: "5. Usare un'altezza che appartiene a un'altra base" },
          { kind: "p", text: "L'altezza all'ipotenusa si abbina solo all'ipotenusa. Abbinarla a un cateto, come in [[(8\\times4.8)/2=19.2]], mescola due diverse coppie base-altezza. Rimedi: ogni altezza appartiene a esattamente una base." },
          { kind: "h3", text: "6. Dimenticare di dividere per due" },
          { kind: "p", text: "[[10\\times4.8=48]] è l'area del parallelogramma, non del triangolo. Rimedi: termina ogni calcolo base-altezza con il dimezzamento." },
          { kind: "h3", text: "7. Moltiplicare lunghezze con unità incompatibili" },
          { kind: "p", text: "Un'ipotenusa di 2 m con un'altezza di 150 cm non è [[(2\\times150)/2=150]] di niente di significativo. Rimedi: converti prima a un'unità, qui 2 m e 1,5 m, ottenendo 1,5 m²." },
          { kind: "h3", text: "8. Riportare la risposta in unità lineari" },
          { kind: "p", text: "Un'area di 24 m² non è 24 m. Rimedi: scrivi sempre l'unità quadrata con il numero." },
          { kind: "h3", text: "9. Inserire lunghezze zero o negative" },
          { kind: "p", text: "[[c>0]] e [[h>0]] sono richiesti; input zero o negativi non descrivono alcun triangolo. Rimedi: misura di nuovo." },
          { kind: "h3", text: "10. Inserire un'altezza maggiore di metà dell'ipotenusa" },
          { kind: "p", text: "[[c=10]], [[h=6]] viola [[h\\leq c/2]]. Rimedi: ricontrolla quale segmento è stato misurato; non era l'altezza perpendicolare." },
          { kind: "h3", text: "11. Assumere che ogni coppia positiva formi un triangolo rettangolo" },
          { kind: "p", text: "La positività non basta; deve valere anche il limite dell'altezza. Rimedi: esegui il controllo [[h\\leq c/2]] su ogni nuova coppia." },
          { kind: "h3", text: "12. Confondere l'altezza con il cateto verticale" },
          { kind: "p", text: "In un diagramma l'altezza può sembrare verticale mentre un cateto sembra obliquo, o il contrario dopo una rotazione. Verticale sullo schermo non significa niente. Rimedi: identifica i lati per il loro ruolo geometrico, non per la loro direzione sullo schermo." },
          { kind: "h3", text: "13. Arrotondare l'altezza troppo presto" },
          { kind: "p", text: "Usare 4,6 per [[60/13\\approx4.61538]] e poi calcolare dà un'area leggermente sbagliata, mentre la frazione esatta si semplifica pulitamente a 30. Rimedi: mantieni la piena precisione fino alla risposta finale." },
          { kind: "h3", text: "14. Assumere che l'ipotenusa debba essere orizzontale" },
          { kind: "p", text: "L'ipotenusa può stare a qualsiasi angolo; la formula usa lunghezze, non orientamenti. Rimedi: fidati delle misure, non della rotazione del disegno." },
          { kind: "h3", text: "15. Confondere il teorema dell'altezza con il teorema di Pitagora" },
          { kind: "p", text: "[[h^2=pq]] lega l'altezza ai segmenti di ipotenusa; [[a^2+b^2=c^2]] lega i tre lati. Rispondono a domande diverse. Rimedi: abbina il teorema alle quantità che hai." },
          { kind: "h3", text: "16. Usare un'altezza misurata da un altro triangolo" },
          { kind: "p", text: "Un'altezza appartiene a un triangolo specifico. Prendere in prestito 4,8 da un triangolo 6-8-10 per un'ipotenusa diversa dà un'area sbagliata. Rimedi: ogni calcolo usa le misure del proprio triangolo." },
          { kind: "h3", text: "17. Assumere che l'area determini ogni lunghezza di lato" },
          { kind: "p", text: "Molti triangoli rettangoli diversi condividono un'area. Conoscere [[K=24]] non fissa [[c]] o [[h]] individualmente. Rimedi: tratta l'area come un'equazione, non come una descrizione completa." },
          { kind: "h3", text: "18. Trattare l'area geometrica come materiale esatto da acquistare" },
          { kind: "p", text: "La formula dà l'area geometrica ideale. I progetti reali hanno bisogno di scarti, sovrapposizioni e margini di taglio in più. Rimedi: aggiungi un margine di progetto dopo che la geometria è fatta." },
          { kind: "h3", text: "Sbagliato contro giusto: un esempio concreto" },
          { kind: "p", text: "Dati [[c=10]] e [[h=4.8]], il calcolo errato salta il dimezzamento: [[K=10\\times4.8=48]]. È l'area del parallelogramma corrispondente. Il calcolo corretto è [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]] Una seconda illustrazione: sostituire il cateto 8 all'altezza dà [[(10\\times8)/2=40]], sbagliato perché 8 non è perpendicolare all'ipotenusa. L'altezza, e solo l'altezza, si abbina a [[c]]." }
        ]
      },
      "sec-verify": {
        h2: "Come controllare se il calcolo dell'area è corretto",
        blocks: [
          { kind: "p", text: "Sette controlli intercettano la stragrande maggioranza dei risultati errati prima che lascino la pagina." },
          { kind: "h3", text: "Controllo 1: input positivi" },
          { kind: "p", text: "Per un triangolo rettangolo valido, [[c>0]] e [[h>0]]. Lunghezze zero o negative non descrivono alcun triangolo." },
          { kind: "h3", text: "Controllo 2: il limite dell'altezza" },
          { kind: "p", text: "Conferma [[h\\leq c/2]]. Questa singola disuguaglianza esclude l'input impossibile più comune, come [[c=10]] con [[h=6]]." },
          { kind: "h3", text: "Controllo 3: conferma l'angolo retto" },
          { kind: "p", text: "L'altezza deve essere perpendicolare all'ipotenusa. Se il disegno o la misura non possono confermare l'incontro a 90 gradi, l'input non è un'altezza." },
          { kind: "h3", text: "Controllo 4: unità quadrate" },
          { kind: "p", text: "Input in metri danno metri quadrati, input in centimetri danno centimetri quadrati. L'unità della risposta è il quadrato dell'unità di input, mai l'unità di input stessa." },
          { kind: "h3", text: "Controllo 5: controverifica con la formula dei cateti" },
          { kind: "p", text: "Per il triangolo 6-8-10, [[(6\\times8)/2=24]] e [[(10\\times4.8)/2=24]]. Due metodi, un triangolo, una risposta: la concordanza è la verifica più forte disponibile." },
          { kind: "h3", text: "Controllo 6: la relazione del medio geometrico" },
          { kind: "p", text: "Quando i segmenti di ipotenusa sono noti, verifica [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Una discrepanza significa che l'altezza, i segmenti o l'identificazione del triangolo sono sbagliati." },
          { kind: "h3", text: "Controllo 7: confronto con l'area massima possibile" },
          { kind: "p", text: "Per un'ipotenusa fissa, [[K\\leq c^2/4]]. Con [[c=10]], qualsiasi area di triangolo rettangolo dichiarata sopra 25 unità quadrate è impossibile. Questa pagina non fa affermazioni sul comportamento di convalida proprio del calcolatore; la verifica spetta a te." }
        ]
      },
      "sec-compare": {
        h2: "Area dall'altezza vs. area dai due cateti",
        blocks: [
          { kind: "p", text: "Due formule, un'area. [[K=ab/2]] ha bisogno dei due cateti perpendicolari; [[K=ch/2]] ha bisogno dell'ipotenusa e della sua altezza. Nessuna è più corretta; sono la stessa quantità raggiunta da misure diverse." },
          { kind: "p", text: "L'area dello stesso triangolo rettangolo non cambia quando si usa un altro metodo valido. Scegli la riga che corrisponde ai numeri già in mano; quando due righe sono disponibili, la loro concordanza è un controllo di correttezza gratuito." }
        ],
        table: {
          headers: ["Metodo", "Misure richieste", "Vantaggio principale"],
          rows: [
            ["Area dai cateti", "[[a]], [[b]]", "Il più semplice quando i due cateti sono noti"],
            ["Area dall'altezza", "[[c]], [[h]]", "Diretto quando ipotenusa e altezza perpendicolare sono noti"],
            ["Area dall'angolo", "Lati appropriati e angolo compreso", "Utile quando è noto un angolo acuto"],
            ["Area dall'inraggio", "[[r]], [[s]]", "Utile nei problemi di incerchio e semiperimetro"]
          ]
        }
      },
      "sec-conclusion": {
        h2: "L'ipotenusa e la sua altezza sono tutto ciò che serve",
        blocks: [
          { kind: "p", text: "Il metodo dell'altezza è la regola base-altezza puntata sul lato più lungo. Una volta individuata l'ipotenusa e con l'altezza perpendicolare in mano, l'area è a una moltiplicazione e un dimezzamento di distanza, senza bisogno di recuperare prima i cateti." },
          { kind: "p", text: "La sua vera forza è la disciplina: perpendicolarità, limite dell'altezza e relazioni del medio geometrico trasformano schizzi vaghi di triangoli in numeri verificabili. Esegui i controlli, confronta con la formula dei cateti quando i cateti sono disponibili, e la risposta si guadagna la sua fiducia." },
          { kind: "p", text: "Tieni il calcolatore di questa pagina per i casi in cui ipotenusa e altezza sono i dati misurati, e ricorri ai calcolatori di cateti, angolo o semiperimetro quando le misure puntano altrove." }
        ]
      }
    },
    faqs: [
      {
        question: "Qual è la formula dell'area di un triangolo rettangolo usando l'altezza?",
        answer: "La formula è K = ch/2, dove c è l'ipotenusa e h è l'altezza perpendicolare dal vertice dell'angolo retto all'ipotenusa. Moltiplica le due lunghezze e dividi per due. Il risultato è in unità quadrate corrispondenti agli input, quindi input in metri danno metri quadrati. L'altezza deve incontrare l'ipotenusa a 90 gradi perché la formula si applichi."
      },
      {
        question: "Cosa significa l'altezza h in un triangolo rettangolo?",
        answer: "L'altezza h è il segmento perpendicolare dal vertice dell'angolo retto C all'ipotenusa, che la incontra nel punto D. È la distanza più breve da quel vertice all'ipotenusa e l'altezza che si abbina all'ipotenusa come base. Non è un cateto, e non è una qualsiasi linea tracciata dentro il triangolo."
      },
      {
        question: "L'altezza è la stessa cosa di uno dei cateti?",
        answer: "No. I cateti a e b formano l'angolo retto, mentre l'altezza è un segmento separato da quel vertice al lato opposto. In un triangolo 6-8-10 l'altezza è 4,8, che non è uguale a nessun cateto. Inserire un cateto dove va l'altezza è uno degli errori più comuni con questa formula."
      },
      {
        question: "Perché l'ipotenusa può essere usata come base?",
        answer: "Qualsiasi lato di un triangolo può fungere da base una volta nota la sua altezza perpendicolare corrispondente. Per l'ipotenusa, quell'altezza è l'altezza dal vertice dell'angolo retto. Poiché le due sono perpendicolari, la regola generale di metà base per altezza si applica direttamente, dando K = ch/2."
      },
      {
        question: "Perché dividiamo il prodotto ipotenusa-altezza per due?",
        answer: "Il prodotto c per h è l'area del parallelogramma costruito sulla stessa base con la stessa altezza. Un triangolo riempie esattamente metà di quel parallelogramma, quindi il prodotto va dimezzato. Saltare la divisione risponde a una domanda diversa: con c = 10 e h = 4,8, 48 è il parallelogramma mentre 24 è il triangolo."
      },
      {
        question: "Come si trova l'altezza se entrambi i cateti sono noti?",
        answer: "Usa h = ab/c. Moltiplica i due cateti e dividi per l'ipotenusa, che puoi ricavare dal teorema di Pitagora quando serve. Per cateti 6 e 8 con ipotenusa 10, h = 48/10 = 4,8. Il calcolatore dell'altezza dai lati di questo sito esegue esattamente questo calcolo quando i lati sono noti."
      },
      {
        question: "Qual è il teorema del medio geometrico per l'altezza del triangolo rettangolo?",
        answer: "Afferma che h al quadrato è uguale a p per q, dove p e q sono i due segmenti in cui l'altezza taglia l'ipotenusa. L'altezza è quindi il medio geometrico di quei segmenti. Per p = 6,4 e q = 3,6, h = radice quadrata di 23,04 = 4,8, il che verifica anche un'altezza trovata in altro modo."
      },
      {
        question: "L'altezza può essere più lunga di metà dell'ipotenusa?",
        answer: "No. Per un triangolo rettangolo valido, h deve soddisfare 0 < h <= c/2. L'altezza è più alta quando divide l'ipotenusa in metà uguali, raggiungendo esattamente c/2 nel caso isoscele. Un valore maggiore, come h = 6 con c = 10, non può appartenere a un triangolo rettangolo con quell'ipotenusa."
      },
      {
        question: "Come si calcola l'area quando sono noti solo ipotenusa e altezza?",
        answer: "Applica K = ch/2 direttamente. Non serve alcuna ricostruzione dei cateti perché l'area è già determinata da un lato e dalla sua altezza corrispondente. Per esempio, c = 10 e h = 4,8 danno K = 24 unità quadrate. Conferma solo prima che l'altezza sia perpendicolare e non più grande di metà dell'ipotenusa."
      },
      {
        question: "Perché la formula basata sull'altezza dà lo stesso risultato della formula dei cateti?",
        answer: "Entrambe calcolano l'area dello stesso triangolo. Ponendo ab/2 uguale a ch/2 e moltiplicando per due si ottiene ab = ch, quindi h = ab/c. Le due formule sono algebricamente equivalenti per qualsiasi triangolo rettangolo coerente, ed è per questo che calcolarle entrambe è un controllo così forte: la concordanza conferma gli input."
      },
      {
        question: "Quali unità dovrebbe usare il risultato dell'area?",
        answer: "Unità quadrate corrispondenti alle lunghezze di input: metri danno metri quadrati, centimetri danno centimetri quadrati, millimetri danno millimetri quadrati. Converti tutti gli input a un'unità prima di calcolare. Ricorda che le conversioni di area elevano al quadrato il fattore lineare, quindi un metro quadrato equivale a 10.000 centimetri quadrati."
      },
      {
        question: "La formula basata sull'altezza può essere usata per altri triangoli?",
        answer: "La regola base-altezza di metà base per altezza funziona per ogni triangolo con una coppia perpendicolare corrispondente. Ciò che è speciale qui sono i vincoli del triangolo rettangolo: l'altezza deve scendere dal vertice dell'angolo retto, e h non può mai superare c/2. Quei limiti non si applicano ai triangoli acuti o ottusi."
      }
    ],
    faqHeading: "Domande frequenti",
    relatedHeading: "Scopri i calcolatori correlati per triangoli rettangoli",
    relatedItems: [
      "Calcolatore dell'area del triangolo rettangolo",
      "Calcolatore dell'area del triangolo rettangolo dai cateti",
      "Calcolatore dell'altezza del triangolo rettangolo dai lati",
      "Calcolatore dell'area del triangolo rettangolo dal semiperimetro",
      "Calcolatore dell'area del triangolo rettangolo dall'angolo",
      "Calcolatore del perimetro del triangolo rettangolo",
      "Calcolatore dei lati del triangolo rettangolo"
    ]
  }
};
