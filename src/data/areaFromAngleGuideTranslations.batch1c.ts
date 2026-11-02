// areaFromAngleGuideTranslations.batch1c.ts: Right Triangle Area From Angle Guide (Page 18 of 45)
// translations for German (de) and Italian (it).
export const AREA_FROM_ANGLE_TRANSLATIONS_BATCH1C = {
  "de": {
    tocHeading: "In dieser Anleitung",
    tocItems: {
      "sec-intro": "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
      "sec-geometry": "Die Seiten und Winkel eines rechtwinkligen Dreiecks verstehen",
      "sec-sine": "Warum verwendet die Flächenformel den Sinus?",
      "sec-mode1": "So finden Sie die Fläche mit Seite b, Hypotenuse c und Winkel A",
      "sec-mode2": "So finden Sie die Fläche mit Seite a, Hypotenuse c und Winkel B",
      "sec-same": "Zwei winkelbasierte Formeln, ein rechtwinkliges Dreieck",
      "sec-howto": "So verwenden Sie den Rechner für die Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
      "sec-foundations": "Schritt-für-Schritt-Beispiele zur Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
      "sec-applications": "Praktische Anwendungen der Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
      "sec-consistency": "So prüfen Sie, ob Seitenlängen und Winkel ein rechtwinkliges Dreieck bilden",
      "sec-alternatives": "Alternative Wege zur Fläche eines rechtwinkligen Dreiecks mit Winkeln",
      "sec-angle-effect": "Wie beeinflusst der spitze Winkel die Fläche eines rechtwinkligen Dreiecks?",
      "sec-units": "Flächeneinheiten, Grad und Rundung",
      "sec-mistakes": "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus einem Winkel",
      "sec-verify": "So prüfen Sie, ob Ihre berechnete Fläche korrekt ist",
      "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    sections: {
      "sec-intro": {
        h2: "So berechnen Sie die Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
        blocks: [
          { kind: "p", text: "Angenommen, ein rechtwinkliges Dreieck hat eine Kathete von [[b=4\\text{ m}]], eine Hypotenuse von [[c=5\\text{ m}]] und der spitze Winkel zwischen diesen zwei Seiten misst etwa [[A\\approx36.87^\\circ]]. Seine Fläche folgt direkt: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Da [[\\sin(36.87^\\circ)\\approx0.6]], beträgt die Fläche ungefähr [[[\\boxed{K=6\\text{ m}^2}]]]. Das Dreieck schließt 6 Quadratmeter ebener Fläche ein." },
          { kind: "p", text: "Dieser Rechner behandelt genau diese Situation: Mit einer Kathete, der Hypotenuse und dem spitzen Winkel dazwischen verwandelt der Sinus die Hypotenuse in die fehlende senkrechte Höhe, und die Hälfte von Basis mal Höhe ergibt die Fläche in Quadrateinheiten. Der eingeschlossene Winkel muss zwischen den zwei eingegebenen Seiten liegen, und jeder Modus paart einen bestimmten Winkel mit seinen zwei Seiten." },
          { kind: "p", text: "Der Winkel [[36.87^\\circ]] ist von etwa [[36.8699^\\circ]] gerundet; volle Genauigkeit auf dem Rechner liefert das genaueste Ergebnis." }
        ]
      },
      "sec-geometry": {
        h2: "Die Seiten und Winkel eines rechtwinkligen Dreiecks verstehen",
        blocks: [
          { kind: "p", text: "Diese Anleitung verwendet durchgehend eine einheitliche Notation: [[A]] und [[B]] sind die zwei spitzen Winkel, [[C=90^\\circ]] ist der rechte Winkel, Seite [[a]] liegt gegenüber von Winkel [[A]], Seite [[b]] liegt gegenüber von Winkel [[B]], Seite [[c]] ist die Hypotenuse und [[K]] ist die Fläche." },
          { kind: "h3", text: "Was ist ein rechtwinkliges Dreieck?" },
          { kind: "p", text: "Ein rechtwinkliges Dreieck hat einen Innenwinkel von genau [[90^\\circ]]. Seine zwei Katheten treffen sich an diesem rechten Winkel, und die Hypotenuse liegt ihm gegenüber. Die Hypotenuse ist immer die längste Seite. Die übrigen zwei Winkel sind spitz, und weil die drei Innenwinkel zusammen 180 Grad ergeben, gilt [[A+B+C=180^\\circ]]. Da [[C=90^\\circ]], erfüllen die spitzen Winkel [[A+B=90^\\circ]]: Wer einen kennt, kennt den anderen." },
          { kind: "h3", text: "Was ist die Hypotenuse?" },
          { kind: "p", text: "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, in beiden Rechnermodi mit [[c]] bezeichnet. Um sie in einem beliebig gedrehten Dreieck zu finden, suchen Sie die Seite, die die quadratische Eckenmarkierung nicht berührt: Diese Seite ist die Hypotenuse. Sie ist länger als jede Kathete, weil sie den ganzen rechten Winkel überspannt, während jede Kathete nur einen spitzen Winkel überspannt. Jede Flächenformel auf dieser Seite verwendet [[c]] als eine ihrer zwei Seiten, daher ist das korrekte Erkennen die erste zu übende Fähigkeit." },
          { kind: "h3", text: "Was ist die anliegende Seite?" },
          { kind: "p", text: "Die anliegende Kathete ist die Kathete, die den gewählten Bezugswinkel berührt, ohne die Hypotenuse zu sein. Für Winkel [[A]] ist die anliegende Kathete [[b]]; für Winkel [[B]] ist die anliegende Kathete [[a]]. Benennen Sie zuerst den Bezugswinkel und lesen Sie dann seine anliegende Kathete ab. Ein Wechsel des Bezugswinkels tauscht stillschweigend, welche Kathete als anliegend zählt, und dieser Tausch steckt hinter vielen der weiter unten auf dieser Seite aufgeführten häufigen Fehler." },
          { kind: "h3", text: "Was ist die gegenüberliegende Seite?" },
          { kind: "p", text: "Die gegenüberliegende Seite liegt dem gewählten Winkel direkt gegenüber und berührt ihn nicht. Für Winkel [[A]] ist Seite [[a]] gegenüberliegend; für Winkel [[B]] ist Seite [[b]] gegenüberliegend. Die Bezeichnungen wechseln mit dem Bezugswinkel, aber die Hypotenuse bleibt in beiden Fällen [[c]]. Den Bezugswinkel beim Beschriften des Dreiecks festzuhalten, hält jeden späteren Schritt konsistent." },
          { kind: "h3", text: "Was ist ein eingeschlossener Winkel?" },
          { kind: "p", text: "Ein eingeschlossener Winkel ist der Winkel, der zwischen zwei angegebenen Seiten liegt. Winkel [[A]] ist zwischen den Seiten [[b]] und [[c]] eingeschlossen; Winkel [[B]] ist zwischen den Seiten [[a]] und [[c]] eingeschlossen. Die allgemeine Sinus-Flächenformel funktioniert nur, wenn der Winkel der zwischen den zwei verwendeten Seiten eingeschlossene ist, weil die Formel die senkrechte Höhe an diesem Winkel abliest. Eine Seite mit einem Winkel zu paaren, den sie nicht berührt, zerstört die Geometrie, von der die Formel abhängt." }
        ],
        imgAlt: "Rechtwinkliges Dreieck ABC: Winkel A zwischen b und c, Winkel B zwischen a und c",
        figcaption: "Beide Rechnermodi verwenden dasselbe Dreieck. Modus 1 paart Seite b, Hypotenuse c und den eingeschlossenen Winkel A; Modus 2 paart Seite a, Hypotenuse c und den eingeschlossenen Winkel B."
      },
      "sec-sine": {
        h2: "Warum verwendet die Flächenformel den Sinus?",
        blocks: [
          { kind: "p", text: "Beide Rechnermodi ruhen auf einer allgemeinen Formel für die Fläche eines beliebigen Dreiecks bei zwei Seiten und ihrem eingeschlossenen Winkel:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { kind: "p", text: "Hier sind [[x]] und [[y]] zwei Seitenlängen, [[\\theta]] ist der zwischen ihnen eingeschlossene Winkel und [[K]] ist die Fläche. Der Sinusterm ist es, der die senkrechte Höhe aus der zweiten Seite aufbaut." },
          { kind: "h3", text: "Wie die allgemeine Formel funktioniert" },
          { kind: "p", text: "Die vertraute Dreiecksflächenregel lautet [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Wenn die senkrechte Höhe nicht direkt gemessen wird, kann der Sinus sie aus einer anderen Seite zurückgewinnen. Nehmen Sie eine Basis der Länge [[x]] und eine zweite Seite der Länge [[y]], die sie unter einem Winkel [[\\theta]] trifft. Die senkrechte Komponente dieser zweiten Seite, die für die Fläche zählende Höhe, ist [[h=y\\sin(\\theta)]]. Einsetzen in die Basis-Höhen-Regel ergibt [[K=\\frac12 x(y\\sin(\\theta))]], die obige allgemeine Formel. Der eingeschlossene Winkel muss zu den zwei gewählten Seiten gehören; ein Winkel von anderswo im Dreieck misst eine andere Senkrechte." },
          { kind: "h3", text: "Warum wird die Fläche durch zwei geteilt?" },
          { kind: "p", text: "Das Dreieck nimmt die Hälfte der Fläche des Parallelogramms ein, das auf derselben Basis mit derselben senkrechten Höhe errichtet wird. Mit Basis [[x]] und Höhe [[h]] ist das Produkt [[x\\times h]] das volle Parallelogramm, und das Dreieck ist genau dessen Hälfte. Die zwei Seiten und den Sinuswert ohne die Halbierung zu multiplizieren, erzeugt daher die doppelte gewünschte Fläche." },
          { kind: "h3", text: "Warum die Hypotenuse verwendet werden kann" },
          { kind: "p", text: "Eine der zwei Seiten in der Formel mit eingeschlossenem Winkel kann die Hypotenuse sein. Gepaart mit der richtigen Kathete und dem spitzen Winkel dazwischen trägt die Hypotenuse genug Information, um die Fläche aufzubauen: Ihre Sinuskomponente ist genau die senkrechte Höhe relativ zu dieser Kathete als Basis. Darum fragt der Rechner nie nach der zweiten Kathete. Die Hypotenuse ist keine besondere Ausnahme von der Formel; sie ist eine gewöhnliche Seitenwahl an einem gewöhnlichen eingeschlossenen Winkel." },
          { kind: "h3", text: "Warum der Winkel korrekt sein muss" },
          { kind: "p", text: "Winkel [[A]] durch Winkel [[B]] zu ersetzen und dabei dieselbe Seitenpaarung zu behalten, ergibt meist das falsche Ergebnis. Nehmen Sie das 3-4-5-Dreieck mit [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Die korrekte Modus-1-Rechnung ist [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Stattdessen den anderen Winkel einzusetzen, ergibt [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], weil [[\\sin(53.13^\\circ)\\approx0.8]]. Die Antwort 8 ist kein Rundungsartefakt; sie ist die Fläche einer anderen Konfiguration, bei der die Seitenpaarung nicht mehr zum eingeschlossenen Winkel passt. Die Winkel-Seiten-Paarung richtig hinzubekommen, ist eine der wichtigsten Lektionen dieser Seite." }
        ],
        imgAlt: "3-4-5 rechtwinkliges Dreieck: a gleich c mal Sinus A gleich 3 als senkrechte Höhe für die Fläche",
        figcaption: "Der Sinus von Winkel A verwandelt die Hypotenuse in die senkrechte Höhe a = 3, sodass das vertraute K = ba/2 und die direkte Formel K = bc sin(A)/2 übereinstimmen."
      },
      "sec-mode1": {
        h2: "So finden Sie die Fläche mit Seite b, Hypotenuse c und Winkel A",
        blocks: [
          { kind: "p", text: "Modus 1 des Rechners verwendet:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { kind: "p", text: "Die Variablen sind: [[b]] die an Winkel [[A]] anliegende Kathete, [[c]] die Hypotenuse, [[A]] der spitze eingeschlossene Winkel zwischen [[b]] und [[c]] und [[K]] die Fläche." },
          { kind: "h3", text: "Schrittweise Herleitung der Formel" },
          { kind: "p", text: "Beginnen Sie mit der Katheten-Flächenformel [[K=ab/2]]. Aus dem Sinusverhältnis am Winkel [[A]] gilt [[\\sin(A)=a/c]], also [[a=c\\sin(A)]]. Die gegenüberliegende Kathete [[a]] wird als Sinuskomponente der Hypotenuse umgeschrieben. Einsetzen ergibt [[K=\\frac{b(c\\sin(A))}{2}]], und Umstellen liefert [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Die unbekannte gegenüberliegende Kathete muss nie eingegeben werden, weil die Formel sie hinter den Kulissen aus Hypotenuse und Winkel konstruiert." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel" },
          { kind: "p", text: "Gegeben [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        steps: [
          "<strong>Schreiben Sie die Formel auf.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Setzen Sie ein.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Berechnen Sie den Sinus.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Multiplizieren Sie.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Dividieren Sie.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        closingParagraphs: [
          "Die Antwort besagt, dass das Dreieck etwa 6 Quadratmeter bedeckt. Weil der Eingabewinkel gerundet ist, gehört das Wort ungefähr in den Bericht, obwohl dieselben Eingaben mit voller Genauigkeit genau 6 ergeben.",
          "<strong>Prüfung mit der fehlenden Kathete.</strong> Die fehlende Kathete folgt aus dem Satz des Pythagoras: [[a=\\sqrt{c^2-b^2}]], also [[a=\\sqrt{25-16}=3]]. Dann [[K=(3\\times4)/2=6]]. Beide Wege stimmen überein, weil sie dasselbe Dreieck beschreiben: Der Sinusweg baut die fehlende Kathete aus dem Winkel auf, während der Kathetenweg die Kathete direkt verwendet.",
          "<strong>Wann sollten Sie Modus 1 verwenden?</strong> Verwenden Sie Modus 1, wenn die bekannten Messungen die am bekannten spitzen Winkel anliegende Kathete, die Hypotenuse und dieser Winkel selbst sind. Sind beide Katheten bereits bekannt, ist die direkte Kathetenformel einfacher und überspringt den Winkel ganz. Modus 1 ist für die häufige Feldsituation gedacht, in der ein Winkel und zwei Längen aus demselben Messaufbau stammen und die zweite Kathete nie aufgezeichnet wurde."
        ]
      },
      "sec-mode2": {
        h2: "So finden Sie die Fläche mit Seite a, Hypotenuse c und Winkel B",
        blocks: [
          { kind: "p", text: "Modus 2 des Rechners verwendet:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { kind: "p", text: "Die Variablen sind: [[a]] die an Winkel [[B]] anliegende Kathete, die gegenüber von Winkel [[A]] liegt; [[c]] die Hypotenuse; [[B]] der eingeschlossene spitze Winkel zwischen [[a]] und [[c]]; und [[K]] die Fläche." },
          { kind: "h3", text: "Schrittweise Herleitung der Formel" },
          { kind: "p", text: "Beginnen Sie wieder mit [[K=ab/2]]. Das am Winkel [[B]] gemessene Sinusverhältnis lautet [[\\sin(B)=b/c]], weil aus der Sicht von [[B]] die gegenüberliegende Seite [[b]] ist. Daher [[b=c\\sin(B)]]. Einsetzen ergibt [[K=\\frac{a(c\\sin(B))}{2}]], also [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Die Formel verwendet Seite [[a]], obwohl [[a]] in der Hauptnotation der Seite als gegenüberliegende Seite bezeichnet wird; die Bezeichnung gegenüberliegend gehört zu Winkel [[A]], während dieselbe Seite relativ zu Winkel [[B]] anliegend ist. Seitenbezeichnungen sind immer relativ zum gewählten Bezugswinkel." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel" },
          { kind: "p", text: "Gegeben [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        steps: [
          "<strong>Schreiben Sie die Formel auf.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Setzen Sie ein.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Berechnen Sie den Sinus.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Multiplizieren und dividieren Sie.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        closingParagraphs: [
          "Das Ergebnis sind dieselben 6 Quadratmeter wie im Modus-1-Beispiel, weil beide Beispiele dasselbe 3-4-5-Dreieck beschreiben, betrachtet aus seinen zwei spitzen Winkeln.",
          "<strong>Prüfung mit der fehlenden Kathete.</strong> Berechnen Sie [[b=\\sqrt{c^2-a^2}]], also [[b=\\sqrt{25-9}=4]]. Dann [[K=(3\\times4)/2=6]]. Die Übereinstimmung ist zu erwarten: Die Sinusformel hat die fehlende Kathete [[b]] stillschweigend aus Hypotenuse und Winkel rekonstruiert.",
          "<strong>Wann sollten Sie Modus 2 verwenden?</strong> Verwenden Sie Modus 2, wenn die bekannte Seite [[a]] ist, die Hypotenuse [[c]] bekannt ist und der gemessene Winkel derjenige ist, der Seite [[a]] berührt, nämlich Winkel [[B]]. Die zwei Modi sind nicht ohne gleichzeitigen Wechsel der Seiten- und Winkelbezeichnungen austauschbar; Modus 2 mit den Eingaben von Modus 1 zu füttern, berechnet die Fläche eines anderen Dreiecks."
        ]
      },
      "sec-same": {
        h2: "Zwei winkelbasierte Formeln, ein rechtwinkliges Dreieck",
        blocks: [
          { kind: "p", text: "Beide Modi berechnen die Fläche desselben geometrischen Objekts, also müssen sie übereinstimmen. Für Modus 1 gilt [[K=bc\\sin(A)/2]], und da [[\\sin(A)=a/c]] für ein gültiges rechtwinkliges Dreieck, ist [[bc\\sin(A)=ab]]. Für Modus 2 gilt [[K=ac\\sin(B)/2]], und da [[\\sin(B)=b/c]], ist [[ac\\sin(B)=ab]]. Beide Formeln vereinfachen sich zu [[[\\boxed{K=\\frac{ab}{2}}]]], der vertrauten Kathetenformel. Die zwei Modi sind zwei verschiedene Eingangswege zu einer Größe." }
        ],
        closingParagraphs: [
          "Gerundete Winkelmessungen können kleine numerische Unterschiede zwischen den zwei Modi einführen, weil [[36.87^\\circ]] nur eine Näherung der wahren [[36.8699^\\circ]] ist. Eine Abweichung von wenigen Hundertsteln ist ein Rundungseffekt, keine Uneinigkeit zwischen den Formeln."
        ],
        table: {
          headers: ["Methode", "Eingaben", "Ergebnis"],
          rows: [
            ["Kathetenformel", "[[a=3,\\;b=4]]", "6 Quadrateinheiten"],
            ["Modus 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Etwa 6"],
            ["Modus 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Etwa 6"]
          ]
        },
        imgAlt: "Dasselbe 3-4-5-Dreieck mit Modus 1 und Modus 2 gelöst, beide ergeben Fläche 6, verifiziert mit der Kathetenformel",
        figcaption: "Zwei eingeschlossene Winkel, zwei äquivalente Formeln, eine Dreiecksfläche."
      },
      "sec-howto": {
        h2: "So verwenden Sie den Rechner für die Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
        blocks: [
          { kind: "p", text: "Diese Anleitung folgt der tatsächlichen Rechneroberfläche auf dieser Seite, Schritt für Schritt." }
        ],
        steps: [
          "<strong>Bestimmen Sie die bereits bekannten Messungen.</strong> Vergewissern Sie sich, dass Sie eine Kathete, die Hypotenuse und einen spitzen Winkel desselben Dreiecks haben.",
          "<strong>Wählen Sie den richtigen Modus.</strong> Wählen Sie Modus 1 für Seite [[b]], Hypotenuse [[c]] und Winkel [[A]]; wählen Sie Modus 2 für Seite [[a]], Hypotenuse [[c]] und Winkel [[B]].",
          "<strong>Bestätigen Sie, welcher spitze Winkel gemessen wird.</strong> Der Winkel muss einer der zwei spitzen Winkel sein, nicht der rechte Winkel.",
          "<strong>Bestimmen Sie die zugehörige Kathete.</strong> Die Kathete muss den gemessenen Winkel berühren; prüfen Sie im Zweifel die obigen Definitionen von anliegend und gegenüberliegend.",
          "<strong>Geben Sie die Kathetenlänge ein.</strong> Tippen Sie die gemessene Kathete in das Kathetenfeld des gewählten Modus.",
          "<strong>Geben Sie die Hypotenusenlänge ein.</strong> Tippen Sie sie in das Hypotenusenfeld; sie muss die längste der zwei Längen sein.",
          "<strong>Wählen Sie kompatible Maßeinheiten.</strong> Beide Längen müssen vor der Berechnung dieselbe Einheit verwenden.",
          "<strong>Geben Sie den spitzen Winkel in Grad ein.</strong> Der Rechner erwartet Grad, nicht Radiant.",
          "<strong>Bestätigen Sie, dass der Winkel strikt zwischen [[0^\\circ]] und [[90^\\circ]] liegt.</strong> Randwerte beschreiben entartete Formen, keine Dreiecke.",
          "<strong>Bestätigen Sie, dass die Hypotenuse länger als die Kathete ist.</strong> Eine Kathete, die gleich lang oder länger als die Hypotenuse ist, kann nicht zu einem rechtwinkligen Dreieck gehören.",
          "<strong>Prüfen Sie, dass Kathete, Hypotenuse und Winkel dasselbe rechtwinklige Dreieck beschreiben.</strong> Die Konsistenztests im Validierungsabschnitt zeigen wie.",
          "<strong>Klicken Sie auf Fläche berechnen.</strong> Das Ergebnis erscheint mit den gezeigten Lösungsschritten.",
          "<strong>Prüfen Sie Ergebnis und Lösungsschritte.</strong> Verfolgen Sie jede Einsetzung, um sicherzustellen, dass die beabsichtigten Eingaben verwendet wurden.",
          "<strong>Interpretieren Sie das Ergebnis in Quadrateinheiten.</strong> Die Flächeneinheit ist das Quadrat der gewählten Längeneinheit.",
          "<strong>Verwenden Sie Zurücksetzen, um die vorherige Berechnung zu löschen.</strong> Dies leert alle Felder, bevor das nächste Dreieck eingegeben wird."
        ],
        closingParagraphs: [
          "Beachten Sie, dass jeder Modus nach einer anderen Kathete und einem anderen Winkel fragt. Die Modi sind verschieden, weil die Paarung mit eingeschlossenem Winkel verschieden ist, nicht weil ein Modus eine Abkürzung des anderen wäre."
        ]
      },
      "sec-foundations": {
        h2: "Schritt-für-Schritt-Beispiele zur Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
        blocks: [
          { kind: "p", text: "Vier Beispiele bauen die Methode auf vertrauten Dreiecken auf, vom 3-4-5-Tripel bis zu Spezialwinkelfällen." },
          { kind: "h3", text: "Beispiel 1: 3-4-5-Dreieck mit Winkel A" },
          { kind: "p", text: "Gegeben [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], verwenden Sie [[K=bc\\sin(A)/2]]. Dann [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], also [[[\\boxed{K\\approx6}]]]. Die Fläche beträgt 6 Quadrateinheiten, weil das Dreieck sechs Einheitsquadrate ebener Fläche einschließt; mit Winkel in voller Genauigkeit ist der Wert genau 6." },
          { kind: "h3", text: "Beispiel 2: Dasselbe Dreieck mit Winkel B" },
          { kind: "p", text: "Gegeben [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], verwenden Sie [[K=ac\\sin(B)/2]]. Dann [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], also [[[\\boxed{K\\approx6}]]]. Das Ergebnis stimmt mit Beispiel 1 überein, weil beide Beispiele dasselbe Dreieck beschreiben; die zwei Winkel sind komplementäre Ansichten einer Form." },
          { kind: "h3", text: "Beispiel 3: Ein 30-60-90-Dreieck" },
          { kind: "p", text: "Nehmen Sie [[c=10]] und [[A=30^\\circ]]. Die Kathete folgt aus [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Dann [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], und da [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Spezialwinkelwerte wie [[\\sin(30^\\circ)]] und [[\\cos(30^\\circ)]] liefern exakte Formen vor jeder Dezimalrundung, weshalb sich diese Dreiecke zur Kontrolle des Rechners von Hand eignen." },
          { kind: "h3", text: "Beispiel 4: Ein 45-45-90-Dreieck" },
          { kind: "p", text: "Gegeben [[c=10]] und [[A=45^\\circ]], sind die Katheten gleich: [[a=b=5\\sqrt{2}]]. Dann [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], und da [[\\sin(45^\\circ)=\\sqrt{2}/2]], vereinfacht sich das Produkt zu [[[\\boxed{K=25}]]]. Dies ist ein gleichschenkliges rechtwinkliges Dreieck, und wie später gezeigt, hat es auch die maximal mögliche Fläche für ein rechtwinkliges Dreieck mit einer Hypotenuse von 10 Einheiten." }
        ]
      },
      "sec-applications": {
        h2: "Praktische Anwendungen der Fläche eines rechtwinkligen Dreiecks aus einem Winkel",
        blocks: [
          { kind: "p", text: "Zwölf vollständig durchgerechnete Situationen, sechs für jeden Rechnermodus. Jedes Beispiel nennt die Messungen, wählt den Modus, wendet die Formel an und interpretiert die Antwort. Winkelwerte werden auf zwei Dezimalstellen gezeigt, während die Arithmetik darunter volle Genauigkeit behält." },
          { kind: "h3", text: "Praxisbeispiel 1: Dreieckiger Dachgiebel" },
          { kind: "p", text: "Ein vereinfachter rechtwinklig-dreieckiger Dachgiebelabschnitt hat die anliegende Seite [[b=4\\text{ m}]], die Hypotenuse [[c=5\\text{ m}]] und den eingeschlossenen Winkel [[A\\approx36.87^\\circ]]. Verwenden Sie Modus 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], also [[[\\boxed{K\\approx6\\text{ m}^2}]]]. die ebene Abschnittsfläche, nicht die gesamte Dachoberfläche. Kontrolle: [[K=(3\\times4)/2=6]]." },
          { kind: "h3", text: "Praxisbeispiel 2: Dreieckige Rampenseitenwand" },
          { kind: "p", text: "Eine rechtwinklig-dreieckige Rampenseitenwand hat [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]] und [[A\\approx16.26^\\circ]]. Die zugrunde liegende gegenüberliegende Seite beträgt 0,7 m, also [[\\sin(A)=0.7/2.5=0.28]]. Verwenden Sie Modus 1: [[K=(2.4\\times2.5\\times0.28)/2]], also [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. die Seitenwandfläche, nicht die geneigte Rampenoberfläche. Kontrolle: [[K=(0.7\\times2.4)/2=0.84]]." },
          { kind: "h3", text: "Praxisbeispiel 3: Dreieckiges Segel" },
          { kind: "p", text: "Ein flacher rechtwinklig-dreieckiger Segelabschnitt hat [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] und [[A\\approx22.62^\\circ]]. Die gegenüberliegende Seite beträgt 5 ft, also [[\\sin(A)=5/13]]. Verwenden Sie Modus 1: [[K=(12\\times13\\times(5/13))/2]], also [[[\\boxed{K=30\\text{ ft}^2}]]]. ebene geometrische Fläche, vor Nähten oder Verschnitt. Kontrolle: [[K=(5\\times12)/2=30]]." },
          { kind: "h3", text: "Praxisbeispiel 4: Rechtwinklig-dreieckiger Grundstücksabschnitt" },
          { kind: "p", text: "Eine Vermessungsskizze beschreibt ein rechtwinklig-dreieckiges Grundstück mit [[b=40\\text{ m}]], [[c=50\\text{ m}]] und [[A\\approx36.87^\\circ]]. Da [[\\sin(A)=30/50=0.6]], liefert Modus 1 [[K=(40\\times50\\times0.6)/2]], also [[[\\boxed{K=600\\text{ m}^2}]]]. die ebene Grundstücksfläche unter einem flachen Modell. Kontrolle: [[K=(30\\times40)/2=600]]." },
          { kind: "h3", text: "Praxisbeispiel 5: Stahlstützplatte" },
          { kind: "p", text: "Eine flache dreieckige Stahlplatte hat [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]] und [[A\\approx28.07^\\circ]]. Die gegenüberliegende Seite beträgt 0,8 m, also [[\\sin(A)=0.8/1.7]]. Verwenden Sie Modus 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], also [[[\\boxed{K=0.6\\text{ m}^2}]]]. nur ebene Fläche, keine Tragfähigkeit. Kontrolle: [[K=(0.8\\times1.5)/2=0.6]]." },
          { kind: "h3", text: "Praxisbeispiel 6: Treppenseitenprofil" },
          { kind: "p", text: "Eine vereinfachte Treppenseitenwand hat die horizontale Kathete [[b=3.2\\text{ m}]], die Hypotenuse [[c=4\\text{ m}]] und [[A\\approx36.87^\\circ]]. Mit [[\\sin(A)=0.6]] liefert Modus 1 [[K=(3.2\\times4\\times0.6)/2]], also [[[\\boxed{K=3.84\\text{ m}^2}]]]. das Seitenprofil, nicht die Stufenfläche. Kontrolle: mit der anderen Kathete 2,4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { kind: "h3", text: "Praxisbeispiel 7: Dreieckiges Glasfenster" },
          { kind: "p", text: "Ein rechtwinklig-dreieckiges Fenster hat Seite [[a=0.6\\text{ m}]], Hypotenuse [[c=1\\text{ m}]] und eingeschlossenen Winkel [[B\\approx53.13^\\circ]]. Mit [[\\sin(B)=0.8]] liefert Modus 2 [[K=(0.6\\times1\\times0.8)/2]], also [[[\\boxed{K=0.24\\text{ m}^2}]]]. Glasfläche vor Rahmenzugaben. Kontrolle: [[K=(0.6\\times0.8)/2=0.24]]." },
          { kind: "h3", text: "Praxisbeispiel 8: Dreieckige Markise" },
          { kind: "p", text: "Ein flacher rechtwinklig-dreieckiger Markisenabschnitt hat [[a=1.2\\text{ m}]], [[c=2\\text{ m}]] und [[B\\approx53.13^\\circ]]. Verwenden Sie Modus 2: [[K=(1.2\\times2\\times0.8)/2]], also [[[\\boxed{K=0.96\\text{ m}^2}]]]. Kontrolle: [[K=(1.2\\times1.6)/2=0.96]]." },
          { kind: "h3", text: "Praxisbeispiel 9: Sperrholz-Zuschnittmuster" },
          { kind: "p", text: "Ein rechtwinklig-dreieckiges Sperrholzstück hat [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]] und [[B\\approx53.13^\\circ]]. Verwenden Sie Modus 2: [[K=(0.9\\times1.5\\times0.8)/2]], also [[[\\boxed{K=0.54\\text{ m}^2}]]]. nutzbare Materialfläche, ohne Verschnittabfall. Kontrolle: [[K=(0.9\\times1.2)/2=0.54]]." },
          { kind: "h3", text: "Praxisbeispiel 10: Vermessung eines dreieckigen Feldes" },
          { kind: "p", text: "Eine vereinfachte dreieckige Feldmessung ergibt [[a=7\\text{ m}]], [[c=25\\text{ m}]] und [[B\\approx73.74^\\circ]]. Die andere Kathete beträgt 24 m, also [[\\sin(B)=24/25=0.96]]. Verwenden Sie Modus 2: [[K=(7\\times25\\times0.96)/2]], also [[[\\boxed{K=84\\text{ m}^2}]]]. die ebene Abschnittsfläche. Kontrolle: [[K=(7\\times24)/2=84]]." },
          { kind: "h3", text: "Praxisbeispiel 11: Dreieckiges Drachensegel" },
          { kind: "p", text: "Ein rechtwinklig-dreieckiges Drachen- oder Stoffsegel hat [[a=20\\text{ cm}]], [[c=25\\text{ cm}]] und [[B\\approx36.87^\\circ]]. Da [[\\sin(B)=15/25=0.6]], liefert Modus 2 [[K=(20\\times25\\times0.6)/2]], also [[[\\boxed{K=150\\text{ cm}^2}]]]. Quadratzentimeter, passend zu den Eingaben. Kontrolle: [[K=(20\\times15)/2=150]]." },
          { kind: "h3", text: "Praxisbeispiel 12: Solarmontage-Seitenplatte" },
          { kind: "p", text: "Eine flache rechtwinklig-dreieckige Stützseitenplatte hat [[a=1.8\\text{ m}]], [[c=3\\text{ m}]] und den eingeschlossenen Winkel [[B\\approx53.13^\\circ]]. Mit [[\\sin(B)=0.8]] liefert Modus 2 [[K=(1.8\\times3\\times0.8)/2]], also [[[\\boxed{K=2.16\\text{ m}^2}]]]. Plattenfläche, nicht elektrische Leistung oder Kapazität. Kontrolle: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        table: {
          headers: ["Situation", "Modus", "Kathete / Hyp.", "Winkel", "Fläche", "Deutung"],
          rows: [
            ["Dachgiebel", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Ebene Abschnittsfläche"],
            ["Rampenseitenwand", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Seitenwand, keine Neigung"],
            ["Segel", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Ebene Fläche vor Nähten"],
            ["Grundstücksabschnitt", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Ebene Grundstücksfläche"],
            ["Stahlplatte", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Nur ebene Fläche"],
            ["Treppenprofil", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Seitenprofil, keine Stufen"],
            ["Glasfenster", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Vor Rahmenzugaben"],
            ["Markise", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Dreieckige Abschnittsfläche"],
            ["Sperrholzstück", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Nutzbare Fläche, kein Abfall"],
            ["Feldvermessung", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Ebene Feldfläche"],
            ["Drachensegel", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Stofffläche"],
            ["Solarseitenplatte", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Stützplatte, keine Leistung"]
          ]
        },
        imgAlt: "Vier durchgerechnete rechtwinklige Dreiecksflächen: Dachgiebel, Glasfenster, Feldvermessung und Segel",
        figcaption: "Vier der oben durchgerechneten Situationen, jeweils mit Dreieck, eingeschlossenem Winkel, Formel und verifizierter Fläche."
      },
      "sec-consistency": {
        h2: "So prüfen Sie, ob Seitenlängen und Winkel ein rechtwinkliges Dreieck bilden",
        blocks: [
          { kind: "p", text: "Eine Kathete, eine Hypotenuse und ein spitzer Winkel tragen mehr Information, als ein rechtwinkliges Dreieck braucht: Zwei der drei bestimmen das dritte, also müssen alle drei übereinstimmen. Die folgenden Prüfungen bestätigen, dass die berechnete Zahl ein rechtwinkliges Dreieck beschreibt." },
          { kind: "h3", text: "Modus 1 validieren" },
          { kind: "p", text: "Für Modus 1 lautet die Konsistenzbeziehung [[\\cos(A)=b/c]], äquivalent [[[\\boxed{b=c\\cos(A)}]]]. Mit [[b=4]] und [[c=5]] ergibt [[\\cos(A)=0.8]] den Winkel [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Ein beliebiger Winkel wie [[60^\\circ]] würde mit diesen Seitenlängen nicht dasselbe rechtwinklige Dreieck beschreiben: [[5\\cos(60^\\circ)=2.5\\neq4]], also wären die drei Eingaben untereinander inkonsistent." },
          { kind: "h3", text: "Modus 2 validieren" },
          { kind: "p", text: "Für Modus 2 lautet die Beziehung [[\\cos(B)=a/c]], äquivalent [[[\\boxed{a=c\\cos(B)}]]]. Mit [[a=3]] und [[c=5]] gilt [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. Der gewählte Winkel muss den tatsächlichen Messungen entsprechen; eine Kathete von 3 mit einer Hypotenuse von 5 trifft sich einfach nicht unter einem eingeschlossenen Winkel von etwa [[70^\\circ]]." },
          { kind: "h3", text: "Warum die allgemeine Flächenformel trotzdem eine Zahl liefern kann" },
          { kind: "p", text: "Die Formel [[K=\\frac12xy\\sin(\\theta)]] berechnet die Fläche eines allgemeinen Dreiecks, das durch zwei Seiten und ihren eingeschlossenen Winkel definiert ist. Eine inkompatible Winkel-Seiten-Kombination liefert trotzdem eine Zahl, aber das entstehende Dreieck ist nicht rechtwinklig: Es ist ein anderes Dreieck, das zufällig dieselben drei Eingaben teilt. Das arithmetische Ergebnis beweist allein nicht, dass die Eingaben ein gültiges rechtwinkliges Dreieck beschreiben; der obige Kosinuscheck leistet diese Arbeit." },
          { kind: "h3", text: "Wie man mit gerundeten Winkelmessungen umgeht" },
          { kind: "p", text: "Ein Winkel wie [[36.87^\\circ]] kann eine gerundete Anzeige von ungefähr [[36.8699^\\circ]] sein. Kleine Abweichungen durch Anzeige- oder Messrundung sollten von echt inkonsistenter Geometrie unterschieden werden: Wenige Hundertstel Grad Spielraum sind Rundung, während mehrere Grad Abweichung bedeuten, dass die Eingaben nicht zusammenpassen. Für den Rechner selbst wird keine numerische Validierungstoleranz behauptet; die Unterscheidung ist eine Beurteilung anhand der vorliegenden Messungen." }
        ]
      },
      "sec-alternatives": {
        h2: "Alternative Wege zur Fläche eines rechtwinkligen Dreiecks mit Winkeln",
        blocks: [
          { kind: "p", text: "Dies sind mathematische Alternativen, keine zusätzlichen Rechnermodi; sie zeigen dieselbe Geometrie unter anderen Eingabekombinationen." },
          { kind: "h3", text: "Mit der Hypotenuse und einem spitzen Winkel" },
          { kind: "p", text: "Für ein gültiges rechtwinkliges Dreieck gilt [[a=c\\sin(A)]] und [[b=c\\cos(A)]]. Einsetzen in [[K=ab/2]] ergibt [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Mit der Doppelwinkelidentität [[\\sin(2A)=2\\sin(A)\\cos(A)]] wird daraus [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. Die Hypotenuse und ein spitzer Winkel bestimmen das Dreieck vollständig, sodass überhaupt keine Kathetenmessung nötig ist." },
          { kind: "h3", text: "Mit einer Kathete und ihrem anliegenden Winkel" },
          { kind: "p", text: "Wenn Seite [[b]] und Winkel [[A]] bekannt sind, dann [[a=b\\tan(A)]] und [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. Die Paarung zählt: [[b]] muss die an Winkel [[A]] anliegende Kathete sein, damit der Tangens die gegenüberliegende Kathete liefert." },
          { kind: "h3", text: "Mit Seite a und Winkel B" },
          { kind: "p", text: "Spiegelung des vorherigen Falls für Winkel [[B]]: [[b=a\\tan(B)]], also [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Seite [[a]] liegt an Winkel [[B]] an, genau weshalb der Tangens wieder die gegenüberliegende Kathete zurückgewinnt." },
          { kind: "h3", text: "Welche Methode ist am einfachsten?" },
          { kind: "p", text: "Die beste Formel ist die, die zu den verfügbaren Messungen passt. Sind beide Katheten bekannt, verwenden Sie [[K=ab/2]] und überspringen die Trigonometrie. Sind eine Kathete, die Hypotenuse und der eingeschlossene Winkel bekannt, sind die zwei Modi des Rechners der direkte Weg. Die Tangens- und Doppelwinkelformen sind nützlich für Handrechnungen mit Spezialwinkeln, aber Schritte hinzuzufügen, die die Eingaben nicht erfordern, schafft nur mehr Stellen, an denen sich Fehler verstecken können." }
        ]
      },
      "sec-angle-effect": {
        h2: "Wie beeinflusst der spitze Winkel die Fläche eines rechtwinkligen Dreiecks?",
        blocks: [
          { kind: "p", text: "Der Sinus wächst mit zunehmendem spitzem Winkel, sodass ein größerer Winkel eine größere Fläche zu versprechen scheint. Das gilt nur, wenn die anderen Größen fest bleiben, und in einem rechtwinkligen Dreieck können sich Seiten und Winkel nicht unabhängig ändern." },
          { kind: "h3", text: "Feste Hypotenuse, sich ändernder Winkel" },
          { kind: "p", text: "Bei fester Hypotenuse lässt sich die Fläche schreiben als [[K=\\frac{c^2\\sin(2A)}{4}]]. Der Faktor [[\\sin(2A)]] steigt, wenn [[A]] sich von nahe [[0^\\circ]] zu [[45^\\circ]] bewegt, und fällt dann, wenn [[A]] sich [[90^\\circ]] nähert. Die Fläche nimmt daher über die erste Hälfte des spitzen Bereichs zu und über die zweite Hälfte ab. Die zwei Hälften sind Spiegelbilder durch die Komplementärwinkelbeziehung [[A+B=90^\\circ]]: Das Vertauschen der Winkel tauscht die Katheten und lässt die Fläche unverändert." },
          { kind: "h3", text: "Maximale Fläche bei fester Hypotenuse" },
          { kind: "p", text: "Da [[\\sin(2A)\\leq1]], ist die größtmögliche Fläche [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], erreicht wenn [[A=B=45^\\circ]]. Für [[c=10]] beträgt die maximale Fläche [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. Dies ist das gleichschenklige rechtwinklige Dreieck aus Beispiel 4: Gleiche Katheten machen das Produkt der Katheten und damit die Fläche so groß, wie die feste Hypotenuse erlaubt." },
          { kind: "h3", text: "Warum die Fläche nicht in jedem Fall einfach mit dem Winkel wächst" },
          { kind: "p", text: "Eine Behauptung über wachsende Winkel ist bedeutungslos, ohne zu benennen, was konstant gehalten wird. Bei fester Hypotenuse steigt und fällt die Beziehung; bei fester Kathete ist die Beziehung wieder anders. Die Fläche als einfache wachsende Funktion des Winkels zu behandeln, ist eine häufige Übervereinfachung, und dieser Abschnitt existiert, um sie aus Ihrer Arbeit herauszuhalten." }
        ]
      },
      "sec-units": {
        h2: "Flächeneinheiten, Grad und Rundung",
        blocks: [
          { kind: "h3", text: "Quadratmeter" },
          { kind: "p", text: "Wenn die Eingaben in Metern sind, kommt die Fläche in Quadratmetern heraus: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. Die Multiplikation zweier Längen erzeugt immer eine Quadrateinheit, egal welches Einheitensystem." },
          { kind: "h3", text: "Quadratzentimeter" },
          { kind: "p", text: "Zentimetereingaben erzeugen Quadratzentimeterflächen, wie im Drachenbeispiel mit seinem Ergebnis [[150\\text{ cm}^2]]. Die Umrechnung zwischen Quadrateinheiten quadriert den linearen Umrechnungsfaktor: 1 m² = 10.000 cm², nicht 100." },
          { kind: "h3", text: "Quadratfuß" },
          { kind: "p", text: "Fußeingaben erzeugen Quadratfußflächen, wie im Segelbeispiel mit seinem Ergebnis [[30\\text{ ft}^2]]. Rechnen Sie alle Eingaben vor der Berechnung auf eine Längeneinheit um; der Rechner kann Meter und Fuß nicht mischen." },
          { kind: "h3", text: "Grad gegen Radiant" },
          { kind: "p", text: "Der Rechner erwartet Winkel in Grad. Zum Umrechnen verwenden Sie [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Zum Beispiel [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Einen Radiantwert einzugeben, wo Grad erwartet werden, ist einer der schädlichsten Fehler, weil der Sinus einer kleinen Radiantzahl plausibel aussieht und dabei völlig falsch ist." },
          { kind: "h3", text: "Warum der Sinus keine Einheiten hat" },
          { kind: "p", text: "Der Sinus ist ein Verhältnis zweier Längen, daher kürzen sich die Einheiten und der Wert ist dimensionslos. Zwei Längen mit einer dimensionslosen Zahl zu multiplizieren, lässt genau die Quadrateinheiten übrig, die die Fläche braucht. Darum ist der Sinuswert derselbe, ob die Seiten in Metern oder Fuß gemessen wurden, solange die Dreiecksform dieselbe ist." },
          { kind: "h3", text: "Warum Zwischenrundung zählt" },
          { kind: "p", text: "Einen Winkel oder einen Sinuswert zu früh zu runden, kann die endgültige Fläche verschieben. Behalten Sie volle Genauigkeit durch die Berechnung bei und runden Sie nur das berichtete Ergebnis, auf eine Genauigkeit, die die Eingabemessungen tragen. Eine Messung mit zwei signifikanten Stellen verdient keine sechsstellige Antwort." }
        ]
      },
      "sec-mistakes": {
        h2: "Häufige Fehler bei der Flächenberechnung eines rechtwinkligen Dreiecks aus einem Winkel",
        blocks: [],
        steps: [
          "<strong>Winkel B mit Modus 1 verwenden, ohne die Seiten zu wechseln.</strong> Modus 1 paart [[b]] und [[c]] mit Winkel [[A]]; ihm [[B]] zu geben, berechnet die Fläche eines anderen Dreiecks.",
          "<strong>Winkel A mit Modus 2 verwenden.</strong> Modus 2 paart [[a]] und [[c]] mit Winkel [[B]]. Prüfen Sie den Moduswähler, bevor Sie Zahlen eingeben.",
          "<strong>Anliegend und gegenüberliegend verwechseln.</strong> Diese Bezeichnungen hängen vom Bezugswinkel ab: Legen Sie zuerst den Winkel fest, dann beschriften Sie die Katheten relativ dazu.",
          "<strong>Die Hypotenuse in das Kathetenfeld eingeben.</strong> Die Kathete muss kürzer als [[c]] sein; ein Tausch bricht jede Konsistenzprüfung.",
          "<strong>Den falschen eingeschlossenen Winkel verwenden.</strong> Der Winkel muss zwischen den zwei eingegebenen Seiten liegen, sonst ist die Sinusprojektion falsch.",
          "<strong>Die Sinusfunktion vergessen.</strong> [[bc/2]] allein multipliziert zwei nicht senkrechte Längen; das Ergebnis ist nicht die Fläche des Dreiecks.",
          "<strong>Vergessen, durch zwei zu teilen.</strong> Das unhalbierte Produkt ist die Fläche des Parallelogramms, nicht die des Dreiecks.",
          "<strong>Radiant eingeben, wo Grad erwartet werden.</strong> [[\\sin(0.64)]] und [[\\sin(36.87^\\circ)]] sind völlig verschiedene Zahlen.",
          "<strong>0 oder 90 Grad eingeben.</strong> Keiner beschreibt ein nicht entartetes rechtwinkliges Dreieck mit diesen Eingaben.",
          "<strong>Negative Längen oder Null eingeben.</strong> Längen sind positiv; alles andere hat keine geometrische Bedeutung.",
          "<strong>Eine Kathete eingeben, die länger als die Hypotenuse ist.</strong> Die Hypotenuse ist immer die längste Seite, also widerspricht diese Eingabe dem Aufbau.",
          "<strong>Inkonsistente Eingaben verwenden.</strong> Prüfen Sie [[b=c\\cos(A)]] oder [[a=c\\cos(B)]]; eine Zahl aus unpassenden Eingaben gehört zu keinem rechtwinkligen Dreieck.",
          "<strong>Einheiten mischen.</strong> Rechnen Sie alle Längen zuerst auf eine Einheit um; Meter mit Zentimetern skalieren die Antwort um 100.",
          "<strong>Lineare Einheiten angeben.</strong> Die Flächeneinheit ist das Quadrat der Längeneinheit: m², nicht m.",
          "<strong>Den Winkel zu früh runden.</strong> Runden Sie nur die endgültige Antwort; frühes Runden verschiebt den Sinus.",
          "<strong>Die Modi als austauschbar behandeln.</strong> Jeder Modus ist eine eigene Formel mit eigenem Eingabevertrag."
        ],
        closingParagraphs: [
          "<strong>Falsch gegen richtig: ein Beispiel.</strong> Nehmen Sie das 3-4-5-Dreieck mit [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Richtig: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Wird der falsche Winkel eingesetzt, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], nicht 6. Der Fehler verwendet den falschen eingeschlossenen Winkel für die Seiten [[b]] und [[c]], und 8 ist einfach die Fläche des falschen Dreiecks."
        ]
      },
      "sec-verify": {
        h2: "So prüfen Sie, ob Ihre berechnete Fläche korrekt ist",
        blocks: [
          { kind: "h3", text: "Methode 1: Den Satz des Pythagoras prüfen" },
          { kind: "p", text: "Für ein gültiges rechtwinkliges Dreieck gilt [[a^2+b^2=c^2]]. Für das 3-4-5-Dreieck: [[9+16=25]]. Ein Scheitern hier bedeutet, dass die Seiteneingaben überhaupt kein rechtwinkliges Dreieck beschreiben." },
          { kind: "h3", text: "Methode 2: Die Kathetenformel prüfen" },
          { kind: "p", text: "Berechnen Sie [[K=ab/2]] unabhängig. Für [[a=3]] und [[b=4]] gilt [[K=6]]. Die Übereinstimmung mit dem winkelbasierten Ergebnis bestätigt die gesamte Rechnung." },
          { kind: "h3", text: "Methode 3: Den Komplementärwinkel prüfen" },
          { kind: "p", text: "Verifizieren Sie [[A+B=90^\\circ]]. Für [[A\\approx36.87^\\circ]] gilt [[B\\approx53.13^\\circ]]. Die Summe muss gelten, damit der eingegebene Winkel ein echter spitzer Winkel des Dreiecks ist." },
          { kind: "h3", text: "Methode 4: Die Sinusbeziehung prüfen" },
          { kind: "p", text: "Für Modus 1 gilt [[\\sin(A)=a/c]]; für Modus 2 gilt [[\\sin(B)=b/c]]. Im 3-4-5-Dreieck: [[\\sin(36.87^\\circ)\\approx3/5]] und [[\\sin(53.13^\\circ)\\approx4/5]]. Dies ist dieselbe Beziehung, die die Formel verwendet, in umgekehrter Richtung geprüft." },
          { kind: "h3", text: "Methode 5: Die Eingabekonsistenz verifizieren" },
          { kind: "p", text: "Für Modus 1 gilt [[b\\approx c\\cos(A)]]; für Modus 2 gilt [[a\\approx c\\cos(B)]]. Das Ungefährzeichen ist angebracht, wenn die Winkelmessung gerundet wurde." },
          { kind: "h3", text: "Methode 6: Die Maximalfläche prüfen" },
          { kind: "p", text: "Bei fester Hypotenuse gilt [[K\\leq c^2/4]]. Mit [[c=5]] übersteigt keine gültige Fläche 6,25 Quadrateinheiten. Eine berechnete Fläche oberhalb dieser Grenze signalisiert sofort einen Eingabefehler." },
          { kind: "h3", text: "Methode 7: Quadrateinheiten prüfen" },
          { kind: "p", text: "Stellen Sie sicher, dass das Ergebnis im Quadrat der Eingabelängeneinheit ausgedrückt ist. Dies fängt die überraschend häufige Gewohnheit ab, die Flächenzahl mit unveränderter Längeneinheit anzugeben." }
        ]
      },
      "sec-conclusion": {
        h2: "Ein Winkel, eine Kathete und die Hypotenuse genügen",
        blocks: [
          { kind: "p", text: "Die winkelbasierte Flächenmethode ist die Basis-Höhen-Regel mit der aus der Hypotenuse wiederaufgebauten Höhe. Sobald der eingeschlossene Winkel mit den richtigen Seiten gepaart ist, liefert der Sinus die senkrechte Kathete, und die Fläche ist eine Einsetzung entfernt. Die zwei Modi sind zwei Türen in denselben Raum: Modus 1 tritt durch Winkel A ein, Modus 2 durch Winkel B, und beide gelangen zur selben Fläche." },
          { kind: "p", text: "Die Disziplin, die die Methode vertrauenswürdig macht, ist Konsistenz: Prüfen Sie, dass Kathete, Hypotenuse und Winkel über die Kosinusbeziehung übereinstimmen, verifizieren Sie die Fläche gegen die Kathetenformel, wenn die zweite Kathete zurückgewonnen werden kann, und halten Sie die Winkel-Seiten-Paarung exakt. Mit diesen Prüfungen verdient sich die Antwort ihr Vertrauen." },
          { kind: "p", text: "Verwenden Sie den Rechner dieser Seite, wann immer eine Kathete, die Hypotenuse und der eingeschlossene Winkel die gemessenen Daten sind, und greifen Sie zu den Katheten-, Höhen- oder Halbumfangrechnern, wenn die Messungen anderswohin zeigen." }
        ]
      }
    },
    faqs: [
      {
        question: "Wie findet man die Fläche eines rechtwinkligen Dreiecks mit einem Winkel?",
        answer: "Verwenden Sie K = bc sin(A)/2, wenn Sie Seite b, die Hypotenuse c und den eingeschlossenen Winkel A kennen; verwenden Sie K = ac sin(B)/2, wenn Sie Seite a, die Hypotenuse c und den eingeschlossenen Winkel B kennen. Der Sinus verwandelt die Hypotenuse in die senkrechte Höhe relativ zur gewählten Kathete, und das Teilen durch zwei ergibt die Fläche in Quadrateinheiten."
      },
      {
        question: "Wie lautet die Formel für die Fläche mit Seite b, Hypotenuse c und Winkel A?",
        answer: "Die Formel lautet K = bc sin(A)/2. Seite b ist die an Winkel A anliegende Kathete, c ist die Hypotenuse und A ist der spitze Winkel dazwischen. Für b = 4, c = 5 und A etwa 36,87 Grad beträgt sin(A) etwa 0,6, also ist die Fläche etwa 6 Quadrateinheiten."
      },
      {
        question: "Wie lautet die Formel für die Fläche mit Seite a, Hypotenuse c und Winkel B?",
        answer: "Die Formel lautet K = ac sin(B)/2. Seite a ist die an Winkel B anliegende Kathete, c ist die Hypotenuse und B ist der spitze Winkel dazwischen. Für a = 3, c = 5 und B etwa 53,13 Grad beträgt sin(B) etwa 0,8, also ist die Fläche etwa 6 Quadrateinheiten, dasselbe Dreieck wie im Modus-1-Beispiel."
      },
      {
        question: "Warum verwendet die Flächenformel den Sinus?",
        answer: "Der Sinus baut die senkrechte Höhe aus der Hypotenuse auf. Mit Basis b und einer Seite c, die sie unter Winkel A trifft, ist die Höhe c sin(A), also K = bc sin(A)/2. Ohne den Sinusterm würde die Formel zwei nicht senkrechte Längen multiplizieren und eine andere geometrische Frage beantworten."
      },
      {
        question: "Was ist ein eingeschlossener Winkel?",
        answer: "Ein eingeschlossener Winkel liegt zwischen zwei angegebenen Seiten. Winkel A ist zwischen den Seiten b und c eingeschlossen; Winkel B ist zwischen den Seiten a und c eingeschlossen. Die Sinus-Flächenformel funktioniert nur mit dem eingeschlossenen Winkel der zwei verwendeten Seiten, weil die Formel die senkrechte Höhe an diesem Winkel abliest."
      },
      {
        question: "Kann ich die Fläche berechnen, ohne beide Katheten zu kennen?",
        answer: "Ja. Hypotenuse und eingeschlossener Winkel rekonstruieren gemeinsam die fehlende Kathete über den Sinus, sodass die zweite Kathete nie gemessen werden muss. Sind stattdessen beide Katheten bekannt, ist die einfachere Formel K = ab/2 der direkte Weg und braucht keine Trigonometrie."
      },
      {
        question: "Warum liefern beide Rechnermodi dieselbe Fläche?",
        answer: "Beide Modi beschreiben ein Dreieck. Da sin(A) = a/c, ist bc sin(A) = ab; da sin(B) = b/c, ist ac sin(B) = ab. Beide Formeln vereinfachen sich zu K = ab/2. Kleine Unterschiede durch gerundete Winkeleingaben sind Rundungseffekte, keine Uneinigkeiten zwischen den Formeln."
      },
      {
        question: "Kann ich einen beliebigen spitzen Winkel mit gegebener Kathete und Hypotenuse verwenden?",
        answer: "Nein. Die drei Eingaben müssen übereinstimmen: Modus 1 erfordert b = c cos(A) und Modus 2 erfordert a = c cos(B). Ein beliebiger spitzer Winkel bei denselben Seitenlängen beschreibt ein anderes, nicht rechtwinkliges Dreieck, und die Fläche, die die Formel liefert, gehört zu diesem Dreieck."
      },
      {
        question: "Wie kann ich die Fläche mit der Kathetenformel verifizieren?",
        answer: "Gewinnen Sie die fehlende Kathete mit dem Satz des Pythagoras zurück und berechnen Sie dann K = ab/2. Für b = 4 und c = 5 ist a = Wurzel aus (25 - 16) = 3, und K = 12/2 = 6, passend zum winkelbasierten Ergebnis. Die Übereinstimmung der zwei unabhängigen Wege bestätigt Eingaben und Arithmetik."
      },
      {
        question: "Muss der Winkel in Grad oder Radiant sein?",
        answer: "Der Rechner erwartet Grad. Rechnen Sie Radiant mit Grad = Radiant mal 180/pi um; pi/6 Radiant sind 30 Grad. Ein Radiantwert, wo Grad erwartet werden, ergibt einen plausibel aussehenden, aber falschen Sinuswert, also prüfen Sie die Einheit vor der Berechnung."
      },
      {
        question: "Was ist die maximale Fläche bei gegebener Hypotenuse?",
        answer: "Das Maximum ist c zum Quadrat geteilt durch 4, erreicht wenn beide spitzen Winkel 45 Grad betragen, das gleichschenklige rechtwinklige Dreieck. Für eine Hypotenuse von 10 Einheiten beträgt die maximale Fläche 25 Quadrateinheiten. Jede berechnete Fläche über c zum Quadrat durch 4 signalisiert einen Eingabefehler."
      },
      {
        question: "Wann sollte ich stattdessen den Hauptflächenrechner für rechtwinklige Dreiecke verwenden?",
        answer: "Verwenden Sie den Hauptflächenrechner, wenn Ihre Messungen direkter zu einer seiner Eingabekombinationen passen, zum Beispiel beide Katheten bekannt. Behalten Sie diesen winkelbasierten Rechner für den Fall, für den er gebaut wurde: eine Kathete, die Hypotenuse und der eingeschlossene spitze Winkel, gemeinsam gemessen."
      }
    ],
    faqHeading: "Häufige Fragen",
    relatedHeading: "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
    relatedItems: [
      "Rechner für die Fläche eines rechtwinkligen Dreiecks",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus den Katheten",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus der Höhe",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus Kathete und Winkel",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang",
      "Rechner für die Seite eines rechtwinkligen Dreiecks aus dem Sinus",
      "Rechner für den Winkel eines rechtwinkligen Dreiecks aus dem Sinus"
    ]
  },
  "it": {
    tocHeading: "In questa guida",
    tocItems: {
      "sec-intro": "Come calcolare l'area di un triangolo rettangolo da un angolo",
      "sec-geometry": "Capire i lati e gli angoli di un triangolo rettangolo",
      "sec-sine": "Perché la formula dell'area usa il seno?",
      "sec-mode1": "Come trovare l'area usando il lato b, l'ipotenusa c e l'angolo A",
      "sec-mode2": "Come trovare l'area usando il lato a, l'ipotenusa c e l'angolo B",
      "sec-same": "Due formule basate sugli angoli, un triangolo rettangolo",
      "sec-howto": "Come usare il calcolatore dell'area del triangolo rettangolo dall'angolo",
      "sec-foundations": "Esempi passo passo dell'area del triangolo rettangolo da un angolo",
      "sec-applications": "Applicazioni reali dell'area del triangolo rettangolo dall'angolo",
      "sec-consistency": "Come verificare se le lunghezze dei lati e l'angolo formano un triangolo rettangolo",
      "sec-alternatives": "Modi alternativi per trovare l'area del triangolo rettangolo usando gli angoli",
      "sec-angle-effect": "In che modo l'angolo acuto influisce sull'area del triangolo rettangolo?",
      "sec-units": "Unità di area, gradi e arrotondamento",
      "sec-mistakes": "Errori comuni nel calcolo dell'area del triangolo rettangolo da un angolo",
      "sec-verify": "Come verificare se l'area calcolata è corretta",
      "sec-related": "Scopri i calcolatori correlati per triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    sections: {
      "sec-intro": {
        h2: "Come calcolare l'area di un triangolo rettangolo da un angolo",
        blocks: [
          { kind: "p", text: "Supponiamo che un triangolo rettangolo abbia un cateto di [[b=4\\text{ m}]], un'ipotenusa di [[c=5\\text{ m}]] e che l'angolo acuto tra questi due lati misuri circa [[A\\approx36.87^\\circ]]. La sua area segue direttamente: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Poiché [[\\sin(36.87^\\circ)\\approx0.6]], l'area è circa [[[\\boxed{K=6\\text{ m}^2}]]]. Il triangolo racchiude 6 metri quadrati di superficie piana." },
          { kind: "p", text: "Questo calcolatore gestisce proprio questa situazione: con un cateto, l'ipotenusa e l'angolo acuto tra loro, il seno trasforma l'ipotenusa nell'altezza perpendicolare mancante, e metà base per altezza dà l'area in unità quadrate. L'angolo compreso deve trovarsi tra i due lati inseriti, e ciascuna modalità abbina un angolo specifico ai suoi due lati." },
          { kind: "p", text: "L'angolo [[36.87^\\circ]] è arrotondato da circa [[36.8699^\\circ]]; mantenere la piena precisione sul calcolatore dà il risultato più accurato." }
        ]
      },
      "sec-geometry": {
        h2: "Capire i lati e gli angoli di un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Questa guida usa una notazione coerente in tutto il testo: [[A]] e [[B]] sono i due angoli acuti, [[C=90^\\circ]] è l'angolo retto, il lato [[a]] è opposto all'angolo [[A]], il lato [[b]] è opposto all'angolo [[B]], il lato [[c]] è l'ipotenusa e [[K]] è l'area." },
          { kind: "h3", text: "Cos'è un triangolo rettangolo?" },
          { kind: "p", text: "Un triangolo rettangolo ha un angolo interno di esattamente [[90^\\circ]]. I suoi due cateti si incontrano in quell'angolo retto, e l'ipotenusa è opposta a esso. L'ipotenusa è sempre il lato più lungo. I restanti due angoli sono acuti, e poiché i tre angoli interni sommano a 180 gradi, [[A+B+C=180^\\circ]]. Poiché [[C=90^\\circ]], gli angoli acuti soddisfano [[A+B=90^\\circ]]: conoscendone uno si conosce l'altro." },
          { kind: "h3", text: "Cos'è l'ipotenusa?" },
          { kind: "p", text: "L'ipotenusa è il lato opposto all'angolo retto, indicato con [[c]] in entrambe le modalità del calcolatore. Per trovarla in un triangolo disegnato in qualsiasi orientamento, cerca il lato che non tocca il contrassegno dell'angolo quadrato: quel lato è l'ipotenusa. È più lunga di ciascun cateto, perché abbraccia l'intero angolo retto mentre ogni cateto abbraccia solo un angolo acuto. Ogni formula di area in questa pagina usa [[c]] come uno dei suoi due lati, quindi identificarla correttamente è la prima abilità da esercitare." },
          { kind: "h3", text: "Cos'è il lato adiacente?" },
          { kind: "p", text: "Il cateto adiacente è il cateto che tocca l'angolo di riferimento scelto senza essere l'ipotenusa. Per l'angolo [[A]] il cateto adiacente è [[b]]; per l'angolo [[B]] il cateto adiacente è [[a]]. Nomina prima l'angolo di riferimento, poi leggi il suo cateto adiacente. Cambiare l'angolo di riferimento scambia silenziosamente quale cateto conta come adiacente, e questo scambio è alla base di molti degli errori comuni elencati più avanti in questa pagina." },
          { kind: "h3", text: "Cos'è il lato opposto?" },
          { kind: "p", text: "Il lato opposto si trova direttamente di fronte all'angolo scelto, senza toccarlo. Per l'angolo [[A]] il lato [[a]] è opposto; per l'angolo [[B]] il lato [[b]] è opposto. Le etichette cambiano con l'angolo di riferimento, ma l'ipotenusa resta [[c]] in entrambi i casi. Tenere fisso l'angolo di riferimento mentre si etichetta il triangolo mantiene coerente ogni passo successivo." },
          { kind: "h3", text: "Cos'è un angolo compreso?" },
          { kind: "p", text: "Un angolo compreso è l'angolo che si trova tra due lati specificati. L'angolo [[A]] è compreso tra i lati [[b]] e [[c]]; l'angolo [[B]] è compreso tra i lati [[a]] e [[c]]. La formula generale dell'area con il seno funziona solo quando l'angolo è quello compreso tra i due lati usati, perché la formula legge l'altezza perpendicolare proprio da quell'angolo. Abbinare un lato a un angolo che non tocca distrugge la geometria da cui dipende la formula." }
        ],
        imgAlt: "Triangolo rettangolo ABC con entrambe le modalità di area: angolo A tra i lati b e c, angolo B tra i lati a e c",
        figcaption: "Entrambe le modalità del calcolatore usano lo stesso triangolo. La modalità 1 abbina il lato b, l'ipotenusa c e l'angolo compreso A; la modalità 2 abbina il lato a, l'ipotenusa c e l'angolo compreso B."
      },
      "sec-sine": {
        h2: "Perché la formula dell'area usa il seno?",
        blocks: [
          { kind: "p", text: "Entrambe le modalità del calcolatore si basano su un'unica formula generale per l'area di qualsiasi triangolo dati due lati e il loro angolo compreso:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { kind: "p", text: "Qui [[x]] e [[y]] sono due lunghezze di lati, [[\\theta]] è l'angolo compreso tra loro e [[K]] è l'area. Il termine seno è ciò che costruisce l'altezza perpendicolare a partire dal secondo lato." },
          { kind: "h3", text: "Come funziona la formula generale" },
          { kind: "p", text: "La nota regola dell'area del triangolo è [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Quando l'altezza perpendicolare non è misurata direttamente, il seno può ricavarla da un altro lato. Prendi una base di lunghezza [[x]] e un secondo lato di lunghezza [[y]] che la incontra con un angolo [[\\theta]]. La componente perpendicolare di quel secondo lato, l'altezza che conta per l'area, è [[h=y\\sin(\\theta)]]. Sostituendo nella regola base-altezza si ottiene [[K=\\frac12 x(y\\sin(\\theta))]], la formula generale sopra. L'angolo compreso deve corrispondere ai due lati scelti; un angolo da un'altra parte del triangolo misura una perpendicolare diversa." },
          { kind: "h3", text: "Perché l'area è divisa per due?" },
          { kind: "p", text: "Il triangolo occupa metà dell'area del parallelogramma costruito sulla stessa base con la stessa altezza perpendicolare. Con base [[x]] e altezza [[h]], il prodotto [[x\\times h]] è il parallelogramma intero, e il triangolo ne è esattamente la metà. Moltiplicare i due lati e il valore del seno senza il dimezzamento produce quindi il doppio dell'area desiderata." },
          { kind: "h3", text: "Perché si può usare l'ipotenusa" },
          { kind: "p", text: "Uno dei due lati nella formula dell'angolo compreso può essere l'ipotenusa. Abbinata al cateto corretto e all'angolo acuto tra loro, l'ipotenusa porta abbastanza informazione per costruire l'area: la sua componente seno è precisamente l'altezza perpendicolare relativa a quel cateto come base. Ecco perché il calcolatore non chiede mai il secondo cateto. L'ipotenusa non è un'eccezione speciale alla formula; è una normale scelta di lato, a un normale angolo compreso." },
          { kind: "h3", text: "Perché l'angolo deve essere corretto" },
          { kind: "p", text: "Sostituire l'angolo [[A]] con l'angolo [[B]] mantenendo lo stesso abbinamento di lati di solito dà il risultato sbagliato. Prendi il triangolo 3-4-5 con [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Il calcolo corretto in modalità 1 è [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Sostituire invece l'altro angolo dà [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], perché [[\\sin(53.13^\\circ)\\approx0.8]]. La risposta 8 non è un artefatto di arrotondamento; è l'area di una configurazione diversa, in cui l'abbinamento dei lati non corrisponde più all'angolo compreso. Azzeccare l'abbinamento angolo-lati è una delle lezioni più importanti di questa pagina." }
        ],
        imgAlt: "Triangolo rettangolo 3-4-5: a uguale c per seno di A uguale 3 come altezza perpendicolare per l'area",
        figcaption: "Il seno dell'angolo A trasforma l'ipotenusa nell'altezza perpendicolare a = 3, così la nota K = ba/2 e la formula diretta K = bc sin(A)/2 concordano."
      },
      "sec-mode1": {
        h2: "Come trovare l'area usando il lato b, l'ipotenusa c e l'angolo A",
        blocks: [
          { kind: "p", text: "La modalità 1 del calcolatore usa:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { kind: "p", text: "Le variabili sono: [[b]] il cateto adiacente all'angolo [[A]], [[c]] l'ipotenusa, [[A]] l'angolo acuto compreso tra [[b]] e [[c]] e [[K]] l'area." },
          { kind: "h3", text: "Derivazione della formula passo passo" },
          { kind: "p", text: "Parti dalla formula dell'area con i cateti [[K=ab/2]]. Dal rapporto seno all'angolo [[A]], [[\\sin(A)=a/c]], quindi [[a=c\\sin(A)]]. Il cateto opposto [[a]] viene riscritto come componente seno dell'ipotenusa. Sostituendo si ottiene [[K=\\frac{b(c\\sin(A))}{2}]], e riordinando si ha [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Il cateto opposto incognito non deve mai essere inserito perché la formula lo costruisce dietro le quinte dall'ipotenusa e dall'angolo." },
          { kind: "h3", text: "Esempio svolto completo" },
          { kind: "p", text: "Dati [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        steps: [
          "<strong>Scrivi la formula.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Sostituisci.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Calcola il seno.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Moltiplica.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Dividi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        closingParagraphs: [
          "La risposta dice che il triangolo copre circa 6 metri quadrati. Poiché l'angolo in ingresso è arrotondato, la parola circa appartiene al resoconto, anche se con piena precisione gli stessi input danno esattamente 6.",
          "<strong>Verifica con il cateto mancante.</strong> Il cateto mancante segue dal teorema di Pitagora: [[a=\\sqrt{c^2-b^2}]], quindi [[a=\\sqrt{25-16}=3]]. Poi [[K=(3\\times4)/2=6]]. Entrambe le vie concordano perché descrivono lo stesso triangolo: la via del seno costruisce il cateto mancante dall'angolo, mentre la via dei cateti usa il cateto direttamente.",
          "<strong>Quando usare la modalità 1?</strong> Usa la modalità 1 quando le misure note sono il cateto adiacente all'angolo acuto noto, l'ipotenusa e l'angolo stesso. Se entrambi i cateti sono già noti, la formula diretta dei cateti è più semplice e salta del tutto l'angolo. La modalità 1 è per la comune situazione sul campo in cui un angolo e due lunghezze provengono dalla stessa configurazione di misura, e il secondo cateto non è mai stato registrato."
        ]
      },
      "sec-mode2": {
        h2: "Come trovare l'area usando il lato a, l'ipotenusa c e l'angolo B",
        blocks: [
          { kind: "p", text: "La modalità 2 del calcolatore usa:" },
          { kind: "p", text: "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { kind: "p", text: "Le variabili sono: [[a]] il cateto adiacente all'angolo [[B]], che è opposto all'angolo [[A]]; [[c]] l'ipotenusa; [[B]] l'angolo acuto compreso tra [[a]] e [[c]]; e [[K]] l'area." },
          { kind: "h3", text: "Derivazione della formula passo passo" },
          { kind: "p", text: "Riparti da [[K=ab/2]]. Il rapporto seno misurato all'angolo [[B]] si legge [[\\sin(B)=b/c]], perché dal punto di vista di [[B]] il lato opposto è [[b]]. Quindi [[b=c\\sin(B)]]. Sostituendo si ottiene [[K=\\frac{a(c\\sin(B))}{2}]], cioè [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. La formula usa il lato [[a]] anche se [[a]] è chiamato lato opposto nella notazione principale della pagina; l'etichetta opposto appartiene all'angolo [[A]], mentre rispetto all'angolo [[B]] lo stesso lato è adiacente. Le etichette dei lati sono sempre relative all'angolo di riferimento scelto." },
          { kind: "h3", text: "Esempio svolto completo" },
          { kind: "p", text: "Dati [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        steps: [
          "<strong>Scrivi la formula.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Sostituisci.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Calcola il seno.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Moltiplica e dividi.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]."
        ],
        closingParagraphs: [
          "Il risultato sono gli stessi 6 metri quadrati dell'esempio in modalità 1, perché entrambi gli esempi descrivono lo stesso triangolo 3-4-5 visto dai suoi due angoli acuti.",
          "<strong>Verifica con il cateto mancante.</strong> Calcola [[b=\\sqrt{c^2-a^2}]], quindi [[b=\\sqrt{25-9}=4]]. Poi [[K=(3\\times4)/2=6]]. La concordanza è attesa: la formula del seno ha ricostruito in silenzio il cateto mancante [[b]] dall'ipotenusa e dall'angolo.",
          "<strong>Quando usare la modalità 2?</strong> Usa la modalità 2 quando il lato noto è [[a]], l'ipotenusa [[c]] è nota e l'angolo misurato è quello che tocca il lato [[a]], cioè l'angolo [[B]]. Le due modalità non sono intercambiabili senza cambiare anche le etichette di lati e angoli; dare alla modalità 2 gli input della modalità 1 calcola l'area di un triangolo diverso."
        ]
      },
      "sec-same": {
        h2: "Due formule basate sugli angoli, un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Entrambe le modalità calcolano l'area dello stesso oggetto geometrico, quindi devono concordare. Per la modalità 1, [[K=bc\\sin(A)/2]], e poiché [[\\sin(A)=a/c]] per un triangolo rettangolo valido, [[bc\\sin(A)=ab]]. Per la modalità 2, [[K=ac\\sin(B)/2]], e poiché [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. Entrambe le formule si semplificano a [[[\\boxed{K=\\frac{ab}{2}}]]], la nota formula dei cateti. Le due modalità sono due diverse vie di ingresso verso un'unica quantità." }
        ],
        closingParagraphs: [
          "Misure di angoli arrotondate possono introdurre piccole differenze numeriche tra le due modalità, perché [[36.87^\\circ]] è solo un'approssimazione del vero [[36.8699^\\circ]]. Una discrepanza di pochi centesimi è un effetto di arrotondamento, non un disaccordo tra le formule."
        ],
        table: {
          headers: ["Metodo", "Input", "Risultato"],
          rows: [
            ["Formula dei cateti", "[[a=3,\\;b=4]]", "6 unità quadrate"],
            ["Modalità 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Circa 6"],
            ["Modalità 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Circa 6"]
          ]
        },
        imgAlt: "Stesso triangolo 3-4-5 con modalità 1 e 2: entrambe danno area 6, verificata con la formula dei cateti",
        figcaption: "Due angoli compresi, due formule equivalenti, un'unica area del triangolo."
      },
      "sec-howto": {
        h2: "Come usare il calcolatore dell'area del triangolo rettangolo dall'angolo",
        blocks: [
          { kind: "p", text: "Questa guida segue passo passo l'interfaccia reale del calcolatore in questa pagina." }
        ],
        steps: [
          "<strong>Identifica le misure già note.</strong> Verifica di avere un cateto, l'ipotenusa e un angolo acuto dello stesso triangolo.",
          "<strong>Scegli la modalità corretta.</strong> Seleziona la modalità 1 per il lato [[b]], l'ipotenusa [[c]] e l'angolo [[A]]; seleziona la modalità 2 per il lato [[a]], l'ipotenusa [[c]] e l'angolo [[B]].",
          "<strong>Verifica quale angolo acuto viene misurato.</strong> L'angolo deve essere uno dei due angoli acuti, non l'angolo retto.",
          "<strong>Identifica il cateto corrispondente.</strong> Il cateto deve toccare l'angolo misurato; in caso di dubbio controlla sopra le definizioni di adiacente e opposto.",
          "<strong>Inserisci la lunghezza del cateto.</strong> Digita il cateto misurato nel campo del cateto della modalità scelta.",
          "<strong>Inserisci la lunghezza dell'ipotenusa.</strong> Digitala nel campo dell'ipotenusa; deve essere la più lunga delle due lunghezze.",
          "<strong>Seleziona unità di misura compatibili.</strong> Entrambe le lunghezze devono usare la stessa unità prima di calcolare.",
          "<strong>Inserisci l'angolo acuto in gradi.</strong> Il calcolatore si aspetta gradi, non radianti.",
          "<strong>Verifica che l'angolo sia strettamente tra [[0^\\circ]] e [[90^\\circ]].</strong> I valori al contorno descrivono forme degeneri, non triangoli.",
          "<strong>Verifica che l'ipotenusa sia più lunga del cateto.</strong> Un cateto uguale o più lungo dell'ipotenusa non può appartenere a un triangolo rettangolo.",
          "<strong>Controlla che cateto, ipotenusa e angolo descrivano lo stesso triangolo rettangolo.</strong> I test di coerenza nella sezione di validazione mostrano come.",
          "<strong>Fai clic su Calcola area.</strong> Il risultato appare con i passi della soluzione mostrati.",
          "<strong>Rivedi il risultato e i passi della soluzione.</strong> Traccia ogni sostituzione per assicurarti che siano stati usati gli input voluti.",
          "<strong>Interpreta il risultato in unità quadrate.</strong> L'unità di area è il quadrato dell'unità di lunghezza scelta.",
          "<strong>Usa Azzera per cancellare il calcolo precedente.</strong> Svuota tutti i campi prima di inserire il triangolo successivo."
        ],
        closingParagraphs: [
          "Nota che ciascuna modalità chiede un cateto diverso e un angolo diverso. Le modalità sono distinte perché diverso è l'abbinamento dell'angolo compreso, non perché una modalità sia una scorciatoia dell'altra."
        ]
      },
      "sec-foundations": {
        h2: "Esempi passo passo dell'area del triangolo rettangolo da un angolo",
        blocks: [
          { kind: "p", text: "Quattro esempi costruiscono il metodo su triangoli familiari, dalla terna 3-4-5 ai casi di angoli speciali." },
          { kind: "h3", text: "Esempio 1: triangolo 3-4-5 con l'angolo A" },
          { kind: "p", text: "Dati [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], usa [[K=bc\\sin(A)/2]]. Poi [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], quindi [[[\\boxed{K\\approx6}]]]. L'area è 6 unità quadrate perché il triangolo racchiude sei quadrati unitari di superficie piana; con l'angolo a piena precisione il valore è esattamente 6." },
          { kind: "h3", text: "Esempio 2: stesso triangolo con l'angolo B" },
          { kind: "p", text: "Dati [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], usa [[K=ac\\sin(B)/2]]. Poi [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], quindi [[[\\boxed{K\\approx6}]]]. Il risultato coincide con l'esempio 1 perché entrambi gli esempi descrivono lo stesso triangolo; i due angoli sono viste complementari di un'unica forma." },
          { kind: "h3", text: "Esempio 3: un triangolo 30-60-90" },
          { kind: "p", text: "Prendi [[c=10]] e [[A=30^\\circ]]. Il cateto segue da [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Poi [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], e poiché [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]. Valori di angoli speciali come [[\\sin(30^\\circ)]] e [[\\cos(30^\\circ)]] danno forme esatte prima di qualsiasi arrotondamento decimale, ed è per questo che questi triangoli sono utili per controllare il calcolatore a mano." },
          { kind: "h3", text: "Esempio 4: un triangolo 45-45-90" },
          { kind: "p", text: "Dati [[c=10]] e [[A=45^\\circ]], i cateti sono uguali: [[a=b=5\\sqrt{2}]]. Poi [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], e poiché [[\\sin(45^\\circ)=\\sqrt{2}/2]], il prodotto si semplifica a [[[\\boxed{K=25}]]]. Questo è un triangolo rettangolo isoscele e, come mostrato più avanti, ha anche l'area massima possibile per un triangolo rettangolo con ipotenusa di 10 unità." }
        ]
      },
      "sec-applications": {
        h2: "Applicazioni reali dell'area del triangolo rettangolo dall'angolo",
        blocks: [
          { kind: "p", text: "Dodici situazioni completamente svolte, sei per ciascuna modalità del calcolatore. Ogni esempio indica le misure, sceglie la modalità, applica la formula e interpreta la risposta. I valori degli angoli sono mostrati con due decimali mentre l'aritmetica mantiene sotto la piena precisione." },
          { kind: "h3", text: "Esempio pratico 1: timpano triangolare del tetto" },
          { kind: "p", text: "Una sezione semplificata di timpano triangolare rettangolo ha il lato adiacente [[b=4\\text{ m}]], l'ipotenusa [[c=5\\text{ m}]] e l'angolo compreso [[A\\approx36.87^\\circ]]. Usa la modalità 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], quindi [[[\\boxed{K\\approx6\\text{ m}^2}]]]. l'area piana della sezione, non la superficie totale del tetto. Verifica: [[K=(3\\times4)/2=6]]." },
          { kind: "h3", text: "Esempio pratico 2: pannello laterale di rampa triangolare" },
          { kind: "p", text: "Un pannello laterale di rampa triangolare rettangolo ha [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]] e [[A\\approx16.26^\\circ]]. Il lato opposto sottostante è 0,7 m, quindi [[\\sin(A)=0.7/2.5=0.28]]. Usa la modalità 1: [[K=(2.4\\times2.5\\times0.28)/2]], quindi [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]. l'area del pannello laterale, non la superficie inclinata della rampa. Verifica: [[K=(0.7\\times2.4)/2=0.84]]." },
          { kind: "h3", text: "Esempio pratico 3: vela triangolare" },
          { kind: "p", text: "Una sezione piatta di vela triangolare rettangola ha [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] e [[A\\approx22.62^\\circ]]. Il lato opposto è 5 ft, quindi [[\\sin(A)=5/13]]. Usa la modalità 1: [[K=(12\\times13\\times(5/13))/2]], quindi [[[\\boxed{K=30\\text{ ft}^2}]]]. area geometrica piana, prima di cuciture o scarti. Verifica: [[K=(5\\times12)/2=30]]." },
          { kind: "h3", text: "Esempio pratico 4: sezione di terreno triangolare rettangola" },
          { kind: "p", text: "Uno schizzo topografico descrive un lotto triangolare rettangolo con [[b=40\\text{ m}]], [[c=50\\text{ m}]] e [[A\\approx36.87^\\circ]]. Poiché [[\\sin(A)=30/50=0.6]], la modalità 1 dà [[K=(40\\times50\\times0.6)/2]], quindi [[[\\boxed{K=600\\text{ m}^2}]]]. l'area piana del lotto in un modello piano. Verifica: [[K=(30\\times40)/2=600]]." },
          { kind: "h3", text: "Esempio pratico 5: pannello di supporto in acciaio" },
          { kind: "p", text: "Un pannello piatto triangolare in acciaio ha [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]] e [[A\\approx28.07^\\circ]]. Il lato opposto è 0,8 m, quindi [[\\sin(A)=0.8/1.7]]. Usa la modalità 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], quindi [[[\\boxed{K=0.6\\text{ m}^2}]]]. solo area piana, non capacità di carico. Verifica: [[K=(0.8\\times1.5)/2=0.6]]." },
          { kind: "h3", text: "Esempio pratico 6: profilo laterale di scala" },
          { kind: "p", text: "Un pannello laterale di scala semplificato ha il cateto orizzontale [[b=3.2\\text{ m}]], l'ipotenusa [[c=4\\text{ m}]] e [[A\\approx36.87^\\circ]]. Con [[\\sin(A)=0.6]], la modalità 1 dà [[K=(3.2\\times4\\times0.6)/2]], quindi [[[\\boxed{K=3.84\\text{ m}^2}]]]. il profilo laterale, non l'area dei gradini. Verifica: con l'altro cateto di 2,4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { kind: "h3", text: "Esempio pratico 7: finestra triangolare in vetro" },
          { kind: "p", text: "Una finestra triangolare rettangola ha il lato [[a=0.6\\text{ m}]], l'ipotenusa [[c=1\\text{ m}]] e l'angolo compreso [[B\\approx53.13^\\circ]]. Con [[\\sin(B)=0.8]], la modalità 2 dà [[K=(0.6\\times1\\times0.8)/2]], quindi [[[\\boxed{K=0.24\\text{ m}^2}]]]. area del vetro prima delle tolleranze del telaio. Verifica: [[K=(0.6\\times0.8)/2=0.24]]." },
          { kind: "h3", text: "Esempio pratico 8: tenda triangolare" },
          { kind: "p", text: "Una sezione piatta di tenda triangolare rettangola ha [[a=1.2\\text{ m}]], [[c=2\\text{ m}]] e [[B\\approx53.13^\\circ]]. Usa la modalità 2: [[K=(1.2\\times2\\times0.8)/2]], quindi [[[\\boxed{K=0.96\\text{ m}^2}]]]. Verifica: [[K=(1.2\\times1.6)/2=0.96]]." },
          { kind: "h3", text: "Esempio pratico 9: sagoma di taglio in compensato" },
          { kind: "p", text: "Un pezzo triangolare rettangolo di compensato ha [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Usa la modalità 2: [[K=(0.9\\times1.5\\times0.8)/2]], quindi [[[\\boxed{K=0.54\\text{ m}^2}]]]. area utile di materiale, esclusi gli scarti di taglio. Verifica: [[K=(0.9\\times1.2)/2=0.54]]." },
          { kind: "h3", text: "Esempio pratico 10: rilievo di un campo triangolare" },
          { kind: "p", text: "Una misura semplificata di campo triangolare dà [[a=7\\text{ m}]], [[c=25\\text{ m}]] e [[B\\approx73.74^\\circ]]. L'altro cateto è 24 m, quindi [[\\sin(B)=24/25=0.96]]. Usa la modalità 2: [[K=(7\\times25\\times0.96)/2]], quindi [[[\\boxed{K=84\\text{ m}^2}]]]. l'area piana della sezione. Verifica: [[K=(7\\times24)/2=84]]." },
          { kind: "h3", text: "Esempio pratico 11: pannello triangolare di aquilone" },
          { kind: "p", text: "Un pannello triangolare rettangolo per aquilone o tessuto ha [[a=20\\text{ cm}]], [[c=25\\text{ cm}]] e [[B\\approx36.87^\\circ]]. Poiché [[\\sin(B)=15/25=0.6]], la modalità 2 dà [[K=(20\\times25\\times0.6)/2]], quindi [[[\\boxed{K=150\\text{ cm}^2}]]]. centimetri quadrati, in linea con gli input. Verifica: [[K=(20\\times15)/2=150]]." },
          { kind: "h3", text: "Esempio pratico 12: pannello laterale di supporto solare" },
          { kind: "p", text: "Un pannello laterale di supporto piatto triangolare rettangolo ha [[a=1.8\\text{ m}]], [[c=3\\text{ m}]] e l'angolo compreso [[B\\approx53.13^\\circ]]. Con [[\\sin(B)=0.8]], la modalità 2 dà [[K=(1.8\\times3\\times0.8)/2]], quindi [[[\\boxed{K=2.16\\text{ m}^2}]]]. area del pannello, non potenza o capacità elettrica. Verifica: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        table: {
          headers: ["Situazione", "Modalità", "Cateto / Ipot.", "Angolo", "Area", "Interpretazione"],
          rows: [
            ["Timpano del tetto", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Area piana della sezione"],
            ["Pannello laterale di rampa", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Pannello laterale, non pendenza"],
            ["Vela", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Area piana prima delle cuciture"],
            ["Sezione di terreno", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Area piana del lotto"],
            ["Pannello in acciaio", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Solo area piana"],
            ["Profilo di scala", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Profilo laterale, non gradini"],
            ["Finestra in vetro", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Prima delle tolleranze del telaio"],
            ["Tenda", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Area della sezione triangolare"],
            ["Pezzo in compensato", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Area utile, senza scarti"],
            ["Rilievo del campo", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Area piana del campo"],
            ["Pannello di aquilone", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Area del tessuto"],
            ["Pannello laterale solare", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Pannello di supporto, non potenza"]
          ]
        },
        imgAlt: "Quattro calcoli di area di triangoli rettangoli svolti: timpano del tetto, finestra in vetro, rilievo del campo e vela",
        figcaption: "Quattro delle situazioni svolte sopra, ciascuna con il suo triangolo, l'angolo compreso, la formula e l'area verificata."
      },
      "sec-consistency": {
        h2: "Come verificare se le lunghezze dei lati e l'angolo formano un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Un cateto, un'ipotenusa e un angolo acuto portano più informazione di quanta un triangolo rettangolo ne richieda: due dei tre determinano il terzo, quindi tutti e tre devono concordare. I controlli seguenti confermano che il numero calcolato descrive un triangolo rettangolo." },
          { kind: "h3", text: "Validazione della modalità 1" },
          { kind: "p", text: "Per la modalità 1 la relazione di coerenza è [[\\cos(A)=b/c]], equivalentemente [[[\\boxed{b=c\\cos(A)}]]]. Con [[b=4]] e [[c=5]], [[\\cos(A)=0.8]] dà [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Un angolo arbitrario come [[60^\\circ]] non descriverebbe lo stesso triangolo rettangolo con queste lunghezze di lati: [[5\\cos(60^\\circ)=2.5\\neq4]], quindi i tre input sarebbero mutuamente incoerenti." },
          { kind: "h3", text: "Validazione della modalità 2" },
          { kind: "p", text: "Per la modalità 2 la relazione è [[\\cos(B)=a/c]], equivalentemente [[[\\boxed{a=c\\cos(B)}]]]. Con [[a=3]] e [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. L'angolo scelto deve corrispondere alle misure reali; un cateto di 3 con un'ipotenusa di 5 semplicemente non si incontra con un angolo compreso di, diciamo, [[70^\\circ]]." },
          { kind: "h3", text: "Perché la formula generale dell'area può comunque restituire un numero" },
          { kind: "p", text: "La formula [[K=\\frac12xy\\sin(\\theta)]] calcola l'area di un triangolo generico definito da due lati e dal loro angolo compreso. Una combinazione angolo-lati incompatibile restituisce comunque un numero, ma il triangolo risultante non è rettangolo: è un altro triangolo che capita di condividere quei tre input. Il risultato aritmetico da solo non prova che gli input descrivano un triangolo rettangolo valido; il controllo del coseno sopra fa questo lavoro." },
          { kind: "h3", text: "Come gestire misure di angoli arrotondate" },
          { kind: "p", text: "Un angolo come [[36.87^\\circ]] può essere la visualizzazione arrotondata di circa [[36.8699^\\circ]]. Piccole discrepanze da arrotondamento di visualizzazione o misura vanno distinte da geometria genuinamente incoerente: pochi centesimi di grado di margine sono arrotondamento, mentre diversi gradi di discrepanza significano che gli input non concordano. Nessuna tolleranza di validazione numerica è dichiarata per il calcolatore stesso; la distinzione è un giudizio basato sulle misure a disposizione." }
        ]
      },
      "sec-alternatives": {
        h2: "Modi alternativi per trovare l'area del triangolo rettangolo usando gli angoli",
        blocks: [
          { kind: "p", text: "Queste sono alternative matematiche, non modalità extra del calcolatore; mostrano la stessa geometria con altre combinazioni di input." },
          { kind: "h3", text: "Usando l'ipotenusa e un angolo acuto" },
          { kind: "p", text: "Per un triangolo rettangolo valido, [[a=c\\sin(A)]] e [[b=c\\cos(A)]]. Sostituendo in [[K=ab/2]] si ottiene [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]]. Con l'identità dell'angolo doppio [[\\sin(2A)=2\\sin(A)\\cos(A)]], questo diventa [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]. L'ipotenusa e un angolo acuto determinano completamente il triangolo, quindi non serve affatto alcuna misura di cateto." },
          { kind: "h3", text: "Usando un cateto e il suo angolo adiacente" },
          { kind: "p", text: "Se il lato [[b]] e l'angolo [[A]] sono noti, allora [[a=b\\tan(A)]], e [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]. L'abbinamento conta: [[b]] deve essere il cateto adiacente all'angolo [[A]] affinché la tangente produca il cateto opposto." },
          { kind: "h3", text: "Usando il lato a e l'angolo B" },
          { kind: "p", text: "Speculare al caso precedente per l'angolo [[B]]: [[b=a\\tan(B)]], quindi [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]. Il lato [[a]] è adiacente all'angolo [[B]], ed è esattamente per questo che la tangente recupera di nuovo il cateto opposto." },
          { kind: "h3", text: "Quale metodo è il più semplice?" },
          { kind: "p", text: "La formula migliore è quella che corrisponde alle misure disponibili. Se entrambi i cateti sono noti, usa [[K=ab/2]] e salta la trigonometria. Se sono noti un cateto, l'ipotenusa e l'angolo compreso, le due modalità del calcolatore sono la via diretta. Le forme con tangente e angolo doppio sono utili per calcoli a mano con angoli speciali, ma aggiungere passi che gli input non richiedono crea solo più posti dove gli errori possono nascondersi." }
        ]
      },
      "sec-angle-effect": {
        h2: "In che modo l'angolo acuto influisce sull'area del triangolo rettangolo?",
        blocks: [
          { kind: "p", text: "Il seno cresce al crescere dell'angolo acuto, così un angolo maggiore sembra promettere un'area maggiore. Questo vale solo quando le altre quantità restano fisse, e in un triangolo rettangolo i lati e l'angolo non possono cambiare indipendentemente." },
          { kind: "h3", text: "Ipotenusa fissa, angolo variabile" },
          { kind: "p", text: "Per un'ipotenusa fissa, l'area può essere scritta come [[K=\\frac{c^2\\sin(2A)}{4}]]. Il fattore [[\\sin(2A)]] sale mentre [[A]] si muove da vicino a [[0^\\circ]] verso [[45^\\circ]], poi scende mentre [[A]] si avvicina a [[90^\\circ]]. L'area quindi aumenta sulla prima metà dell'intervallo acuto e diminuisce sulla seconda metà. Le due metà sono immagini speculari attraverso la relazione degli angoli complementari [[A+B=90^\\circ]]: scambiare gli angoli scambia i cateti e lascia invariata l'area." },
          { kind: "h3", text: "Area massima per ipotenusa fissa" },
          { kind: "p", text: "Poiché [[\\sin(2A)\\leq1]], l'area massima possibile è [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], raggiunta quando [[A=B=45^\\circ]]. Per [[c=10]] l'area massima è [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]. Questo è il triangolo rettangolo isoscele dell'esempio 4: cateti uguali rendono il prodotto dei cateti, e quindi l'area, il più grande possibile con l'ipotenusa fissa." },
          { kind: "h3", text: "Perché l'area non cresce semplicemente con l'angolo in ogni caso" },
          { kind: "p", text: "Un'affermazione su angoli crescenti non ha senso senza dire cosa è tenuto costante. Con ipotenusa fissa la relazione sale poi scende; con cateto fisso la relazione è di nuovo diversa. Trattare l'area come una semplice funzione crescente dell'angolo è una semplificazione eccessiva comune, e questa sezione esiste per tenerla fuori dal tuo lavoro." }
        ]
      },
      "sec-units": {
        h2: "Unità di area, gradi e arrotondamento",
        blocks: [
          { kind: "h3", text: "Metri quadrati" },
          { kind: "p", text: "Se gli input sono in metri, l'area esce in metri quadrati: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. La moltiplicazione di due lunghezze produce sempre un'unità quadrata, qualunque sia il sistema di unità." },
          { kind: "h3", text: "Centimetri quadrati" },
          { kind: "p", text: "Input in centimetri producono aree in centimetri quadrati, come nell'esempio dell'aquilone con il suo risultato [[150\\text{ cm}^2]]. La conversione tra unità quadrate eleva al quadrato il fattore di conversione lineare: 1 m² = 10.000 cm², non 100." },
          { kind: "h3", text: "Piedi quadrati" },
          { kind: "p", text: "Input in piedi producono aree in piedi quadrati, come nell'esempio della vela con il suo risultato [[30\\text{ ft}^2]]. Converti tutti gli input a un'unità di lunghezza prima di calcolare; il calcolatore non può mescolare metri e piedi." },
          { kind: "h3", text: "Gradi contro radianti" },
          { kind: "p", text: "Il calcolatore si aspetta angoli in gradi. Per convertire, usa [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Per esempio, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Inserire un valore in radianti dove sono attesi gradi è uno degli errori più dannosi, perché il seno di un piccolo numero in radianti sembra plausibile pur essendo del tutto sbagliato." },
          { kind: "h3", text: "Perché il seno non ha unità" },
          { kind: "p", text: "Il seno è un rapporto tra due lunghezze, quindi le unità si cancellano e il valore è adimensionale. Moltiplicare due lunghezze per un numero adimensionale lascia esattamente le unità quadrate di cui l'area ha bisogno. È anche per questo che il valore del seno è lo stesso sia che i lati siano stati misurati in metri o in piedi, purché la forma del triangolo sia la stessa." },
          { kind: "h3", text: "Perché l'arrotondamento intermedio conta" },
          { kind: "p", text: "Arrotondare un angolo o un valore del seno troppo presto può spostare l'area finale. Mantieni la piena precisione durante il calcolo e arrotonda solo il risultato riportato, a una precisione che le misure in ingresso supportano. Una misura data con due cifre significative non merita una risposta con sei decimali." }
        ]
      },
      "sec-mistakes": {
        h2: "Errori comuni nel calcolo dell'area del triangolo rettangolo da un angolo",
        blocks: [],
        steps: [
          "<strong>Usare l'angolo B con la modalità 1 senza cambiare i lati.</strong> La modalità 1 abbina [[b]] e [[c]] all'angolo [[A]]; darle [[B]] calcola l'area di un triangolo diverso.",
          "<strong>Usare l'angolo A con la modalità 2.</strong> La modalità 2 abbina [[a]] e [[c]] all'angolo [[B]]. Controlla il selettore di modalità prima di inserire i numeri.",
          "<strong>Confondere adiacente e opposto.</strong> Queste etichette dipendono dall'angolo di riferimento: fissa prima l'angolo, poi etichetta i cateti rispetto a esso.",
          "<strong>Inserire l'ipotenusa nel campo del cateto.</strong> Il cateto deve essere più corto di [[c]]; scambiarli rompe ogni controllo di coerenza.",
          "<strong>Usare l'angolo compreso sbagliato.</strong> L'angolo deve trovarsi tra i due lati inseriti, altrimenti la proiezione del seno è sbagliata.",
          "<strong>Dimenticare la funzione seno.</strong> [[bc/2]] da solo moltiplica due lunghezze non perpendicolari; il risultato non è l'area del triangolo.",
          "<strong>Dimenticare di dividere per due.</strong> Il prodotto non dimezzato è l'area del parallelogramma, non quella del triangolo.",
          "<strong>Inserire radianti dove sono attesi gradi.</strong> [[\\sin(0.64)]] e [[\\sin(36.87^\\circ)]] sono numeri del tutto diversi.",
          "<strong>Inserire 0 o 90 gradi.</strong> Nessuno dei due descrive un triangolo rettangolo non degenere con questi input.",
          "<strong>Inserire lunghezze negative o nulle.</strong> Le lunghezze sono positive; qualsiasi altra cosa non ha significato geometrico.",
          "<strong>Inserire un cateto più lungo dell'ipotenusa.</strong> L'ipotenusa è sempre il lato più lungo, quindi questo inserimento contraddice l'impostazione.",
          "<strong>Usare input incoerenti.</strong> Controlla [[b=c\\cos(A)]] o [[a=c\\cos(B)]]; un numero da input non corrispondenti non appartiene a nessun triangolo rettangolo.",
          "<strong>Mescolare le unità.</strong> Converti prima tutte le lunghezze a un'unità; metri con centimetri scalano la risposta di 100.",
          "<strong>Riportare unità lineari.</strong> L'unità di area è il quadrato dell'unità di lunghezza: m², non m.",
          "<strong>Arrotondare l'angolo troppo presto.</strong> Arrotonda solo la risposta finale; l'arrotondamento precoce sposta il seno.",
          "<strong>Trattare le modalità come intercambiabili.</strong> Ogni modalità è una formula a sé con un proprio contratto di input."
        ],
        closingParagraphs: [
          "<strong>Sbagliato contro corretto: un esempio.</strong> Prendi il triangolo 3-4-5 con [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Corretto: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Se si sostituisce l'angolo sbagliato, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], non 6. L'errore usa l'angolo compreso errato per i lati [[b]] e [[c]], e 8 è semplicemente l'area del triangolo sbagliato."
        ]
      },
      "sec-verify": {
        h2: "Come verificare se l'area calcolata è corretta",
        blocks: [
          { kind: "h3", text: "Metodo 1: controlla il teorema di Pitagora" },
          { kind: "p", text: "Per un triangolo rettangolo valido, [[a^2+b^2=c^2]]. Per il triangolo 3-4-5, [[9+16=25]]. Un fallimento qui significa che gli input dei lati non descrivono affatto un triangolo rettangolo." },
          { kind: "h3", text: "Metodo 2: controlla la formula dei cateti" },
          { kind: "p", text: "Calcola [[K=ab/2]] in modo indipendente. Per [[a=3]] e [[b=4]], [[K=6]]. La concordanza con il risultato basato sull'angolo conferma l'intero calcolo." },
          { kind: "h3", text: "Metodo 3: controlla l'angolo complementare" },
          { kind: "p", text: "Verifica [[A+B=90^\\circ]]. Per [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]]. La somma deve valere affinché l'angolo inserito sia un genuino angolo acuto del triangolo." },
          { kind: "h3", text: "Metodo 4: controlla la relazione del seno" },
          { kind: "p", text: "Per la modalità 1, [[\\sin(A)=a/c]]; per la modalità 2, [[\\sin(B)=b/c]]. Nel triangolo 3-4-5, [[\\sin(36.87^\\circ)\\approx3/5]] e [[\\sin(53.13^\\circ)\\approx4/5]]. Questa è la stessa relazione usata dalla formula, controllata nella direzione opposta." },
          { kind: "h3", text: "Metodo 5: verifica la coerenza degli input" },
          { kind: "p", text: "Per la modalità 1, [[b\\approx c\\cos(A)]]; per la modalità 2, [[a\\approx c\\cos(B)]]. Il simbolo di approssimazione è appropriato quando la misura dell'angolo è stata arrotondata." },
          { kind: "h3", text: "Metodo 6: controlla l'area massima" },
          { kind: "p", text: "Per un'ipotenusa fissa, [[K\\leq c^2/4]]. Con [[c=5]], nessuna area valida supera 6,25 unità quadrate. Un'area calcolata sopra quel limite segnala immediatamente un errore di input." },
          { kind: "h3", text: "Metodo 7: controlla le unità quadrate" },
          { kind: "p", text: "Assicurati che il risultato sia espresso nel quadrato dell'unità di lunghezza in ingresso. Questo intercetta l'abitudine sorprendentemente comune di riportare il numero dell'area con l'unità di lunghezza invariata." }
        ]
      },
      "sec-conclusion": {
        h2: "Un angolo, un cateto e l'ipotenusa sono tutto ciò che serve",
        blocks: [
          { kind: "p", text: "Il metodo dell'area basato sull'angolo è la regola base-altezza con l'altezza ricostruita dall'ipotenusa. Una volta abbinato l'angolo compreso ai lati corretti, il seno fornisce il cateto perpendicolare, e l'area è a una sostituzione di distanza. Le due modalità sono due porte nella stessa stanza: la modalità 1 entra dall'angolo A, la modalità 2 dall'angolo B, ed entrambe arrivano alla stessa area." },
          { kind: "p", text: "La disciplina che rende affidabile il metodo è la coerenza: controlla che cateto, ipotenusa e angolo concordino attraverso la relazione del coseno, verifica l'area contro la formula dei cateti quando il secondo cateto può essere recuperato, e mantieni esatto l'abbinamento angolo-lati. Con questi controlli in atto, la risposta si guadagna la sua fiducia." },
          { kind: "p", text: "Usa il calcolatore di questa pagina ogni volta che un cateto, l'ipotenusa e l'angolo compreso sono i dati misurati, e ricorri ai calcolatori di cateti, altezza o semiperimetro quando le misure puntano altrove." }
        ]
      }
    },
    faqs: [
      {
        question: "Come si trova l'area di un triangolo rettangolo usando un angolo?",
        answer: "Usa K = bc sin(A)/2 quando conosci il lato b, l'ipotenusa c e l'angolo compreso A; usa K = ac sin(B)/2 quando conosci il lato a, l'ipotenusa c e l'angolo compreso B. Il seno converte l'ipotenusa nell'altezza perpendicolare relativa al cateto scelto, e dividere per due dà l'area in unità quadrate."
      },
      {
        question: "Qual è la formula dell'area usando il lato b, l'ipotenusa c e l'angolo A?",
        answer: "La formula è K = bc sin(A)/2. Il lato b è il cateto adiacente all'angolo A, c è l'ipotenusa e A è l'angolo acuto tra loro. Per b = 4, c = 5 e A di circa 36,87 gradi, sin(A) è circa 0,6, quindi l'area è circa 6 unità quadrate."
      },
      {
        question: "Qual è la formula dell'area usando il lato a, l'ipotenusa c e l'angolo B?",
        answer: "La formula è K = ac sin(B)/2. Il lato a è il cateto adiacente all'angolo B, c è l'ipotenusa e B è l'angolo acuto tra loro. Per a = 3, c = 5 e B di circa 53,13 gradi, sin(B) è circa 0,8, quindi l'area è circa 6 unità quadrate, lo stesso triangolo dell'esempio in modalità 1."
      },
      {
        question: "Perché la formula dell'area usa il seno?",
        answer: "Il seno costruisce l'altezza perpendicolare a partire dall'ipotenusa. Con base b e un lato c che la incontra con angolo A, l'altezza è c sin(A), quindi K = bc sin(A)/2. Senza il termine seno la formula moltiplicherebbe due lunghezze non perpendicolari e risponderebbe a una domanda geometrica diversa."
      },
      {
        question: "Cos'è un angolo compreso?",
        answer: "Un angolo compreso si trova tra due lati specificati. L'angolo A è compreso tra i lati b e c; l'angolo B è compreso tra i lati a e c. La formula dell'area con il seno funziona solo con l'angolo compreso dei due lati usati, perché la formula legge l'altezza perpendicolare proprio da quell'angolo."
      },
      {
        question: "Posso calcolare l'area senza conoscere entrambi i cateti?",
        answer: "Sì. L'ipotenusa e l'angolo compreso insieme ricostruiscono il cateto mancante tramite il seno, quindi il secondo cateto non deve mai essere misurato. Se invece sono noti entrambi i cateti, la più semplice formula K = ab/2 è la via diretta e non richiede trigonometria."
      },
      {
        question: "Perché entrambe le modalità del calcolatore danno la stessa area?",
        answer: "Entrambe le modalità descrivono un unico triangolo. Poiché sin(A) = a/c, bc sin(A) = ab; poiché sin(B) = b/c, ac sin(B) = ab. Entrambe le formule si semplificano a K = ab/2. Piccole differenze da input di angoli arrotondati sono effetti di arrotondamento, non disaccordi tra le formule."
      },
      {
        question: "Posso usare un qualsiasi angolo acuto con un dato cateto e ipotenusa?",
        answer: "No. I tre input devono concordare: la modalità 1 richiede b = c cos(A) e la modalità 2 richiede a = c cos(B). Un angolo acuto arbitrario con le stesse lunghezze di lati descrive un triangolo diverso, non rettangolo, e l'area restituita dalla formula appartiene a quel triangolo."
      },
      {
        question: "Come posso verificare l'area usando la formula dei cateti?",
        answer: "Recupera il cateto mancante con il teorema di Pitagora, poi calcola K = ab/2. Per b = 4 e c = 5, a è la radice di (25 - 16) = 3, e K = 12/2 = 6, in accordo con il risultato basato sull'angolo. La concordanza tra le due vie indipendenti conferma gli input e l'aritmetica."
      },
      {
        question: "L'angolo deve essere in gradi o in radianti?",
        answer: "Il calcolatore si aspetta gradi. Converti i radianti con Gradi = Radianti per 180/pi; pi/6 radianti sono 30 gradi. Un valore in radianti inserito dove sono attesi gradi dà un valore del seno dall'aspetto plausibile ma sbagliato, quindi controlla l'unità prima di calcolare."
      },
      {
        question: "Qual è l'area massima per una data ipotenusa?",
        answer: "Il massimo è c al quadrato diviso per 4, raggiunto quando entrambi gli angoli acuti sono 45 gradi, il triangolo rettangolo isoscele. Per un'ipotenusa di 10 unità l'area massima è 25 unità quadrate. Qualsiasi area calcolata sopra c al quadrato su 4 segnala un errore di input."
      },
      {
        question: "Quando dovrei usare invece il calcolatore principale dell'area del triangolo rettangolo?",
        answer: "Usa il calcolatore principale dell'area quando le tue misure corrispondono più direttamente a una delle sue combinazioni di input, per esempio entrambi i cateti noti. Tieni questo calcolatore basato sull'angolo per il caso per cui è stato costruito: un cateto, l'ipotenusa e l'angolo acuto compreso misurati insieme."
      }
    ],
    faqHeading: "Domande frequenti",
    relatedHeading: "Scopri i calcolatori correlati per triangoli rettangoli",
    relatedItems: [
      "Calcolatore dell'area del triangolo rettangolo",
      "Calcolatore dell'area del triangolo rettangolo dai cateti",
      "Calcolatore dell'area del triangolo rettangolo dall'altezza",
      "Calcolatore dell'area del triangolo rettangolo da cateto e angolo",
      "Calcolatore dell'area del triangolo rettangolo dal semiperimetro",
      "Calcolatore del lato del triangolo rettangolo dal seno",
      "Calcolatore dell'angolo del triangolo rettangolo dal seno"
    ]
  }
};
