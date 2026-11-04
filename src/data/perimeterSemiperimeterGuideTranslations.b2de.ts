export const B2_DE = {
  "de": {
    "tocHeading": "In diesem Leitfaden",
    "tocItems": {
      "sec-intro": "Umfang und Halbumfang eines rechtwinkligen Dreiecks berechnen",
      "sec-right-triangle": "Was ist ein rechtwinkliges Dreieck?",
      "sec-perimeter": "Was ist der Umfang eines rechtwinkligen Dreiecks?",
      "sec-semiperimeter": "Was ist der Halbumfang eines rechtwinkligen Dreiecks?",
      "sec-difference": "Umfang und Halbumfang: Was ist der Unterschied?",
      "sec-modes": "Die zwei Rechnermodi verstehen",
      "sec-howto": "Umfangs- und Halbumfangsrechner für rechtwinklige Dreiecke verwenden",
      "sec-examples": "Schritt-für-Schritt-Beispiele: Umfang und Halbumfang eines rechtwinkligen Dreiecks",
      "sec-practical": "Anwendungen aus dem Alltag: Umfang und Halbumfang eines rechtwinkligen Dreiecks",
      "sec-missing-side": "Umfang berechnen, wenn eine Seite fehlt",
      "sec-pythagoras": "Wie hängen der Satz des Pythagoras und der Umfang eines rechtwinkligen Dreiecks zusammen?",
      "sec-advanced": "Wie wird der Halbumfang in anderen Dreiecksformeln verwendet?",
      "sec-perimeter-area": "Was ist der Unterschied zwischen Umfang und Flächeninhalt?",
      "sec-units": "Maßeinheiten bei Umfang- und Halbumfangsberechnungen verstehen",
      "sec-scaling": "Wie wirken sich Änderungen der Seitenlängen auf Umfang und Halbumfang aus?",
      "sec-applications": "Praktische Anwendungen des Umfangs eines rechtwinkligen Dreiecks",
      "sec-mistakes": "Häufige Fehler bei der Berechnung von Umfang und Halbumfang eines rechtwinkligen Dreiecks",
      "sec-verify": "Überprüfen, ob der Umfang eines rechtwinkligen Dreiecks korrekt ist",
      "sec-related": "Weitere Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Eine Grenze, zwei nützliche Maße"
    },
    "sections": {
      "sec-intro": {
        "h2": "Umfang und Halbumfang eines rechtwinkligen Dreiecks berechnen",
        "blocks": [
          { "kind": "p", "text": "Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Der Umfang ist [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Der Halbumfang ist [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Genau das gibt der Umfangs- und Halbumfangsrechner für rechtwinklige Dreiecke bei diesen drei Eingaben zurück." },
          { "kind": "p", "text": "Der Umfang beschreibt die gesamte Begrenzung des Dreiecks: die Gesamtlänge, die man zurücklegen würde, wenn man alle drei Seiten abliefe und zum Ausgangspunkt zurückkehrte. Der Halbumfang ist die Hälfte dieses numerischen Gesamtwerts. Beides sind Längen, gemessen in Einheiten wie Meter, Zentimeter, Fuß oder Zoll. Keines von beiden ist eine Fläche, und keines wird in Flächeneinheiten angegeben." },
          { "kind": "p", "text": "Drei Seitenlängen sind erforderlich, weil die Begrenzung drei Kanten hat, und die Hypotenuse muss dabei sein: Sie ist eine der drei Kanten, auch wenn sie den rechten Winkel nie berührt. Der Halbumfang ist die Hälfte des Umfangs, weil mehrere fortgeschrittene Formeln, darunter die Formel von Heron und die Inkreisradius-Beziehung, auf der halben Begrenzung statt auf der ganzen aufbauen. Diese beiden Berechnungen sind überall dort nützlich, wo ein dreieckiger Umriss gemessen werden muss: beim Einfassen eines Gartens, beim Zuschneiden eines Rahmens oder beim Weiterreichen einer Länge an die nächste Formel in einer längeren Aufgabe." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Was ist ein rechtwinkliges Dreieck?",
        "blocks": [
          { "kind": "p", "text": "Bevor eine Addition beginnt, müssen die drei Seiten fehlerfrei bezeichnet werden. Die unten stehenden Symbole bleiben im gesamten Leitfaden gleich, und der Rechner verwendet dieselben Bezeichnungen." },
          { "kind": "h3", "text": "Definition eines rechtwinkligen Dreiecks" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein dreiseitiges Polygon mit genau einem Innenwinkel von 90 Grad. Es hat drei Ecken, drei Seiten, zwei spitze Winkel und einen rechten Winkel, der üblicherweise mit einem kleinen Quadrat markiert wird. Die beiden Seiten, die den rechten Winkel bilden, sind die Katheten; die gegenüberliegende Seite ist die Hypotenuse. Da die Winkel jedes Dreiecks zusammen 180 Grad ergeben, [[A+B+C=180^\\circ]], und mit [[C=90^\\circ]] folgt [[[\\boxed{A+B=90^\\circ}]]]: Die beiden spitzen Winkel sind komplementär, sodass die Kenntnis des einen den anderen bestimmt." },
          { "kind": "h3", "text": "Was sind die beiden Katheten?" },
          { "kind": "p", "text": "Die Kathete [[a]] liegt dem Winkel [[A]] gegenüber; die Kathete [[b]] liegt dem Winkel [[B]] gegenüber. Die beiden Katheten treffen sich in der Ecke des rechten Winkels und stehen senkrecht aufeinander: Jede bildet mit der anderen einen 90-Grad-Winkel. Sie bilden die rechtwinklige Ecke des Dreiecks, die Art von Kante, die man entlang einer Zimmerecke oder einer Tischkante messen würde. Bei Umfangsberechnungen ist ihre Rolle einfach: Beide sind Begrenzungskanten, also gehen beide in die Summe ein." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die dem rechten Winkel gegenüberliegende Seite, stets die längste Seite des Dreiecks. Sie bildet nie den rechten Winkel; sie spannt sich über ihn hinweg und verbindet die fernen Enden der beiden Katheten. Sie unterscheidet sich von den Katheten in Lage und Länge: Die Katheten treffen sich im 90-Grad-Winkel, während die Hypotenuse jede Kathete in einem spitzen Winkel trifft. Bei der Berechnung des vollständigen Umfangs muss sie dabei sein, denn die Begrenzung ist erst vollständig, wenn alle drei Kanten gezählt sind. Sind beide Katheten bekannt, stellt der Satz des Pythagoras sie über [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] wieder her." },
          { "kind": "h3", "text": "Warum ist der rechte Winkel wichtig?" },
          { "kind": "p", "text": "Der rechte Winkel ist es, was das Dreieck zum rechtwinkligen Dreieck macht, und alles andere folgt daraus. Er identifiziert die Form in einer Zeichnung oder auf der Baustelle: Findet man die rechtwinklige Ecke, ergibt sich die Seitenbezeichnung von selbst. Er ist die Bedingung, die der Satz des Pythagoras braucht, bevor er angewendet werden kann. Bei Bauvermessungen und technischen Zeichnungen ist der rechte Winkel die Referenz, an der alles ausgerichtet wird: Wände, Rahmen und Winkel werden damit geprüft. Zur Überprüfung ist der rechte Winkel das Versprechen, das die drei Seitenlängen über [[a^2+b^2=c^2]] einlösen müssen." },
          { "kind": "h3", "text": "Wie erkennt man die richtigen Seitenbezeichnungen?" },
          { "kind": "p", "text": "[[a]] und [[b]] sind die Katheten, [[c]] ist die Hypotenuse, und in einem nicht entarteten rechtwinkligen Dreieck ist [[c]] die längste Seite. Der rechte Winkel liegt [[c]] gegenüber, daher verrät die Ecke mit der Quadratmarkierung, welche Seite [[c]] ist: Es ist diejenige, die diese Ecke nicht berührt. Eine schnelle Sortierprüfung hilft: Sortieren Sie die drei Zahlen, und die größte muss die Rolle von [[c]] übernehmen. Liegt die größte Seite nicht gegenüber der rechtwinkligen Ecke, sind die Bezeichnungen falsch, und jede darauf aufbauende Berechnung ist ebenfalls falsch." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck ABC mit den Katheten a und b, der Hypotenuse c, rechter-Winkel-Markierung und den Formeln P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Dreieck ABC mit den Katheten a und b, der Hypotenuse c und den zwei Begrenzungsformeln."
      },
      "sec-perimeter": {
        "h2": "Was ist der Umfang eines rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "p", "text": "Der Umfang ist die Gesamtlänge um die äußere Begrenzung einer zweidimensionalen Form. Bei einem Dreieck ist er die Summe seiner drei Seitenlängen, [[[\\boxed{P=a+b+c}]]], und jede Seite muss dabei sein, weil jede Seite Teil der Begrenzung ist. Lässt man eine weg, ist das Ergebnis kein Umfang; es ist ein Teilweg." },
          { "kind": "h3", "text": "Warum zählt die Hypotenuse zum Umfang?" },
          { "kind": "p", "text": "Der Umfang misst die vollständige äußere Begrenzung, nicht nur die beiden senkrechten Seiten. Auch wenn die Hypotenuse dem rechten Winkel gegenüberliegt, bleibt sie eine der drei Begrenzungskanten: Wer das Dreieck abläuft, läuft auch die Hypotenuse ab. Lässt man sie weg, misst man zwei Seiten eines gebrochenen Wegs, nicht den Umriss eines geschlossenen Dreiecks. Die Formel hat drei Terme, weil die Form drei Kanten hat; keine Kante ist optional, egal wie das Dreieck auf dem Papier oder auf dem Boden liegt." },
          { "kind": "h3", "text": "Umfang Schritt für Schritt berechnen" },
          { "kind": "p", "text": "Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Setzen Sie in die Formel ein: [[P=3+4+5]]. Addieren Sie die ersten beiden Längen: [[P=7+5]]. Endergebnis: [[[\\boxed{P=12\\text{ units}}]]] Physikalisch sind 12 Einheiten die Länge eines Maßbands, das entlang aller drei Kanten von Ende zu Ende gelegt wird: der vollständige Umriss des Dreiecks, ausgedrückt als eine durchgehende Länge." },
          { "kind": "h3", "text": "Was sagt der Umfang in der Praxis aus?" },
          { "kind": "p", "text": "Er beantwortet eine Frage in vielen Gewerken: Wie viel Material verbraucht der Umriss? Dazu gehören Randmaterialien, Fensterleisten, Zauneinfassungen, Schutzstreifen, dekorative Rahmen, Kabelwege, Stoffkanten und Metallkantprofile. In jedem Fall ist der Umfang die Zahl, die man zum Lieferanten mitnimmt. Er beschreibt die Länge des vollständigen Umrisses des Dreiecks, nicht die Größe der Fläche darin: 12 Meter Leiste sagen nichts über die Fläche aus, die das Fenster bedeckt, und das war auch nie die Absicht." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Was ist der Halbumfang eines rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang ist genau die Hälfte des vollständigen Umfangs des Dreiecks: [[[\\boxed{s=\\frac{P}{2}}]]] Da [[P=a+b+c]], folgt daraus [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Die Addition kommt vor der Division, weil der Halbumfang die ganze Begrenzung halbiert, nicht jede Seite einzeln. Jede Seite zuerst zu dividieren und dann zu addieren ergäbe hier dieselbe Zahl, aber die Formel gibt die richtige Reihenfolge der Gedanken wieder: Zuerst die Begrenzung summieren, dann halbieren." },
          { "kind": "h3", "text": "Halbumfang Schritt für Schritt berechnen" },
          { "kind": "p", "text": "Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Addieren Sie die drei Seiten: [[s=\\frac{3+4+5}{2}]]. Vereinfachen Sie die Summe: [[s=\\frac{12}{2}]]. Endergebnis: [[[\\boxed{s=6\\text{ units}}]]] Der Halbumfang ist ein abgeleitetes geometrisches Maß, das in mehreren wichtigen Dreiecksformeln verwendet wird; er beschreibt selten etwas, das man direkt mit einem Maßband messen würde, weshalb der Rechner ihn für Sie berechnet." },
          { "kind": "h3", "text": "Warum wird der Halbumfang in der Geometrie verwendet?" },
          { "kind": "p", "text": "Er ist die natürliche Variable der Formel von Heron, der Inkreisradius-Beziehung [[K=rs]] und der Inkreisgeometrie im Allgemeinen. Dreiecksflächenformeln erzeugen ständig Hälften, und der Halbumfang nimmt sie alle auf einmal auf, weshalb Beweise und fortgeschrittene Formeln ihn dem vollen Umfang vorziehen. Wenn eine Formel [[s]] verlangt, verdoppelt die Eingabe von [[P]] stattdessen das Ergebnis oder verzerrt es anderweitig; daher lohnt es sich, die Unterscheidung von Anfang an sauber zu halten." },
          { "kind": "h3", "text": "Ist der Halbumfang physikalisch die halbe Begrenzung?" },
          { "kind": "p", "text": "Nicht unbedingt. Der Halbumfang ist die Hälfte des numerischen Umfangs: 6 Einheiten, wenn der Umfang 12 beträgt. Er beschreibt nicht unbedingt einen durchgehenden physikalischen Weg, der die Hälfte der Dreiecksbegrenzung abdeckt. Es gibt keinen einzigen Weg entlang der Kanten, der \"der Halbumfang\" wäre, so wie der Umfang der vollständige Weg ist: Die Hälfte ist eine Zahl, keine Route. [[s]] als physikalische Halbschleife zu behandeln, führt zu Verwirrung; behandeln Sie ihn als Hälfte der Summe, den Wert, den die Formeln brauchen." },
          { "kind": "h3", "text": "Kann der Halbumfang kleiner als die längste Seite sein?" },
          { "kind": "p", "text": "Nein. Die Dreiecksungleichung verlangt [[a+b>c]]: Die beiden kürzeren Seiten zusammen müssen die längste Seite übertreffen, sonst kann sich das Dreieck nicht schließen. Addiert man [[c]] auf beiden Seiten, erhält man [[a+b+c>2c]], und Halbieren ergibt [[[\\boxed{s>c}]]] Bei einem gültigen, nicht entarteten Dreieck ist der Halbumfang größer als die längste Seite. Das ist eine nützliche mathematische Prüfung: Wenn ein angegebener Halbumfang kleiner als die Hypotenuse ist, können die Messungen kein echtes Dreieck bilden." }
        ]
      },
      "sec-difference": {
        "h2": "Umfang und Halbumfang: Was ist der Unterschied?",
        "blocks": [
          { "kind": "p", "text": "Umfang: die Gesamtlänge um das Dreieck, [[P=a+b+c]]. Halbumfang: die Hälfte des Gesamtumfangs, [[s=\\frac{a+b+c}{2}]]. Dieselben drei Seiten, verschiedene geometrische Größen: Die eine ist das Ganze, die andere die Hälfte. Sie stehen in der Beziehung [[s=\\frac{P}{2}]] und [[P=2s]], und der Rechner verwendet die beiden Symbole niemals austauschbar." },
          { "kind": "h3", "text": "Numerischer Vergleich" },
          { "kind": "p", "text": "Nehmen Sie ein rechtwinkliges 6-8-10-Dreieck. Umfang: [[P=6+8+10]], [[[\\boxed{P=24}]]] Halbumfang: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]] Die beiden Zahlen unterscheiden sich immer um den Faktor zwei: [[s=\\frac{P}{2}]] und [[P=2s]]. Der Unterschied ist keine andere Form und kein anderes Dreieck; es ist dieselbe Begrenzung, einmal gezählt gegen einmal als Hälfte gezählt." },
          { "kind": "h3", "text": "Welche Messgröße sollte man verwenden?" },
          { "kind": "p", "text": "Verwenden Sie den Umfang zum Einfassen, Einrahmen, Kanten, Einzäunen und für Materialschätzungen um ein Objekt: jede Aufgabe, bei der es darum geht, wie viel Material der Umriss verbraucht. Verwenden Sie den Halbumfang für die Formel von Heron, Inkreisradius-Beziehungen, Inkreisberechnungen und Geometrieaufgaben mit Dreiecksseitenlängen: jede Aufgabe, bei der eine Formel die halbe Begrenzung als Eingabe verlangt. Die Wahl wird von der Aufgabe bestimmt, nicht von der Vorliebe: Eine Leistenschätzung braucht [[P]], ein Flächenbeweis braucht [[s]]." },
          { "kind": "h3", "text": "Misst der Halbumfang die halbe Fläche des Dreiecks?" },
          { "kind": "p", "text": "Nein. Umfang und Halbumfang sind lineare Messungen: Längen, angegeben in Metern oder Fuß, niemals in Quadratmetern. Die Fläche misst die zweidimensionale Oberfläche, die das Dreieck einschließt, und verwendet Flächeneinheiten. Eine halbierte Länge bleibt eine Länge. Die Warnung verdient Wiederholung, weil die Namen verwandt klingen: Der Halbumfang ist die Hälfte des Umfangs, nicht die Hälfte der Fläche, und keine Teilung einer Begrenzung kann eine Fläche erzeugen." }
        ],
        "imgAlt": "6-8-10-Dreieck: Umfangsbalken von 24 Einheiten, halbiert zu einem Halbumfangsbalken von 12 Einheiten",
        "figcaption": "P = 24 halbiert zu s = 12: die vollständige Begrenzung, dann ihre Hälfte."
      },
      "sec-modes": {
        "h2": "Die zwei Rechnermodi verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Rechner hält die beiden Berechnungen in zwei getrennten Modi, weil sie aus denselben drei Eingaben unterschiedliche Fragen beantworten. Die Wahl des Modus ist die Wahl der Frage, die gestellt wird." },
          { "kind": "h3", "text": "Umfangsrechner-Modus" },
          { "kind": "p", "text": "Dieser Modus berechnet die gesamte Begrenzungslänge. Eingaben: Kathete [[a]], Kathete [[b]], Hypotenuse [[c]]. Formel: [[P=a+b+c]]. Ausgabe: Umfang [[P]]. Das Ergebnis dient zum Abschätzen der Gesamtlänge des Materials, das um einen dreieckigen Umriss benötigt wird: die Zahl, die man zum Lieferanten mitnimmt, wenn es um Einfassungen, Leisten oder Rahmen geht." },
          { "kind": "h3", "text": "Halbumfangsrechner-Modus" },
          { "kind": "p", "text": "Dieser Modus berechnet die Hälfte des Gesamtumfangs. Eingaben: Kathete [[a]], Kathete [[b]], Hypotenuse [[c]]. Formel: [[s=\\frac{a+b+c}{2}]]. Ausgabe: Halbumfang [[s]]. Das Ergebnis dient als Zwischenwert in fortgeschrittenen Dreiecksberechnungen: die Zahl, die man in die Formel von Heron oder die Inkreisradius-Beziehung einspeist, wenn die Aufgabe über die Begrenzung hinausgeht." },
          { "kind": "h3", "text": "Warum gibt es zwei getrennte Modi?" },
          { "kind": "p", "text": "Beide Berechnungen verwenden dieselben drei Seitenlängen, liefern aber verschiedene geometrische Größen, und sie zu verwechseln gehört zu den häufigsten Fehlern in diesem Thema. Zwei beschriftete Modi halten die Absicht explizit: Der Button heißt Calculate Perimeter oder Calculate Semiperimeter, und das Ergebnis ist mit [[P]] oder [[s]] beschriftet. Die beiden Modi ersparen den Nutzern manuelle Berechnungen und halten die beiden Antworten unverwechselbar. Beschreiben Sie den Halbumfangsmodus nicht als Flächenrechner: Seine Ausgabe ist eine Länge und bleibt eine Länge." }
        ]
      },
      "sec-howto": {
        "h2": "Umfangs- und Halbumfangsrechner für rechtwinklige Dreiecke verwenden",
        "blocks": [
          { "kind": "p", "text": "Die folgenden Schritte folgen dem Bildschirmaufbau für jeden Modus, vom Erkennen der Messungen bis zum geprüften Ergebnis. Die beiden Modi teilen sich dieselben drei Eingaben und unterscheiden sich nur in der abschließenden Berechnung." },
          { "kind": "h3", "text": "Umfangsmodus" },
          { "kind": "steps", "steps": [
            "<strong>Wählen Sie den Umfangsmodus aus.</strong> Damit teilen Sie dem Rechner mit, dass das Ziel die gesamte Begrenzungslänge ist.",
            "<strong>Bestimmen Sie die Kathete a.</strong> Dies ist eine der beiden Seiten, die den rechten Winkel bilden.",
            "<strong>Bestimmen Sie die Kathete b.</strong> Dies ist die andere Seite, die den rechten Winkel bildet.",
            "<strong>Bestimmen Sie die Hypotenuse c.</strong> Dies ist die längste Seite, gegenüber dem rechten Winkel.",
            "<strong>Geben Sie die Kathete a ein.</strong> Tippen Sie die gemessene Länge in das erste Feld.",
            "<strong>Geben Sie die Kathete b ein.</strong> Tippen Sie die gemessene Länge in das zweite Feld.",
            "<strong>Geben Sie die Hypotenuse c ein.</strong> Tippen Sie die gemessene Länge in das dritte Feld.",
            "<strong>Wählen Sie die passenden Einheiten aus.</strong> Alle drei Seiten müssen eine Einheit teilen, bevor die Addition etwas bedeutet.",
            "<strong>Klicken Sie auf Calculate Perimeter.</strong> Der Rechner addiert die drei Seiten.",
            "<strong>Prüfen Sie das Ergebnis.</strong> Stellen Sie sicher, dass der Umfang die längste Seite übertrifft.",
            "<strong>Prüfen Sie die angezeigten Lösungsschritte.</strong> Sie zeigen [[P=a+b+c]] mit den eingegebenen Werten.",
            "<strong>Stellen Sie sicher, dass die Ausgabe eine lineare Maßeinheit verwendet.</strong> Meter, Zentimeter, Fuß oder Zoll: niemals eine Flächeneinheit."
          ] },
          { "kind": "h3", "text": "Halbumfangsmodus" },
          { "kind": "steps", "steps": [
            "<strong>Wählen Sie den Halbumfangsmodus aus.</strong> Damit teilen Sie dem Rechner mit, dass das Ziel die halbe Begrenzung ist.",
            "<strong>Geben Sie die Kathete a ein.</strong> Dieselbe Bestimmung wie im Umfangsmodus.",
            "<strong>Geben Sie die Kathete b ein.</strong> Die zweite Seite, die den rechten Winkel bildet.",
            "<strong>Geben Sie die Hypotenuse c ein.</strong> Die längste Seite, gegenüber dem rechten Winkel.",
            "<strong>Wählen Sie kompatible Maßeinheiten aus.</strong> Eine Einheit für alle drei Seiten.",
            "<strong>Klicken Sie auf Calculate Semiperimeter.</strong> Der Rechner addiert die drei Seiten und halbiert die Summe.",
            "<strong>Prüfen Sie das Ergebnis.</strong> Es sollte deutlich kleiner als der Umfang sein.",
            "<strong>Stellen Sie sicher, dass das Ergebnis genau die Hälfte des Umfangs ist.</strong> Prüfen Sie [[s=\\frac{P}{2}]] gegen die Ausgabe des Umfangsmodus.",
            "<strong>Prüfen Sie die Lösungsschritte und die Live-Visualisierung.</strong> Die Schritte zeigen die Addition und die Halbierung; die Zeichnung zeigt das Dreieck, aus dem diese Zahlen stammen.",
            "<strong>Verwenden Sie Reset, wenn Sie eine neue Berechnung starten.</strong> Damit werden alle drei Felder für einen sauberen Neustart gelöscht."
          ] },
          { "kind": "p", "text": "Die Live-Visualisierung zeichnet das Dreieck aus den eingegebenen Seiten, was hilft, eine falsch bezeichnete Hypotenuse zu erkennen, bevor man den Zahlen vertraut. Das Formeldiagramm zeigt, wo jede Seite in [[P=a+b+c]] oder [[s=\\frac{a+b+c}{2}]] steht. Kein Modus akzeptiert zwei Seiten: Der Rechner braucht alle drei Begrenzungslängen, daher muss eine fehlende Seite zuerst gefunden werden, wie der Abschnitt zur fehlenden Seite erklärt." }
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele: Umfang und Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Vier bekannte pythagoreische Tripel zeigen die vollständige Berechnung beider Messgrößen. Jedes addiert die drei Seiten für den Umfang und halbiert dann die Summe für den Halbumfang. Die Arithmetik wird bewusst vollständig gezeigt, damit das Muster unverwechselbar ist." },
          { "kind": "h3", "text": "Beispiel 1: 3-4-5-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=3]], [[b=4]], [[c=5]]. Berechnen Sie den Umfang: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]] Berechnen Sie den Halbumfang: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]] Beide Ergebnisse sind korrekt, weil der Umfang jede Begrenzungskante einmal zählt und der Halbumfang genau die Hälfte dieser Zahl ist." },
          { "kind": "h3", "text": "Beispiel 2: 6-8-10-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=6]], [[b=8]], [[c=10]]. Umfang: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]] Halbumfang: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]] Verdoppelt man alle drei Seiten, verdoppeln sich beide Messgrößen: 24 ist das Doppelte von 12, und 12 ist das Doppelte von 6. Skaliert man das Dreieck, skalieren sich seine Begrenzungsmaße um denselben Faktor." },
          { "kind": "h3", "text": "Beispiel 3: 5-12-13-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=5]], [[b=12]], [[c=13]]. Umfang: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]] Halbumfang: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]] Beachten Sie, dass 15 die Hypotenuse 13 übertrifft, wie die Prüfung der Dreiecksungleichung verlangt." },
          { "kind": "h3", "text": "Beispiel 4: 8-15-17-rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben: [[a=8]], [[b=15]], [[c=17]]. Umfang: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]] Halbumfang: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]] Auch hier übertrifft der Halbumfang die längste Seite: 20 gegen 17." },
          { "kind": "h3", "text": "Vergleich der Grundbeispiele" },
          { "kind": "p", "text": "Mit zunehmenden Dreiecksabmessungen wachsen [[P]] und [[s]] im Einklang mit den Seiten. Die Tabelle zeigt zwei Muster auf einmal: Der Umfang jeder Zeile ist die schlichte Summe ihrer drei Seiten, und der Umfang jeder Zeile ist genau das Doppelte ihres Halbumfangs. Die Zeilen 3-4-5 und 6-8-10 zeigen die Skalierung auch direkt: jede Seite verdoppelt, beide Begrenzungsmaße verdoppelt." }
        ],
        "table": {
          "headers": ["Dreieck", "Kathete a", "Kathete b", "Hypotenuse c", "Umfang P", "Halbumfang s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Anwendungen aus dem Alltag: Umfang und Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Zwölf durchgearbeitete Situationen tragen die beiden Formeln dieser Seite in die Werkstatt und auf die Baustelle. Jede nennt ein vereinfachtes rechtwinklig-dreieckiges Objekt oder Modell, rechnet Umfang und Halbumfang über die Formeln durch und nennt die praktische Deutung des Ergebnisses. Dies sind vereinfachte Modelle: Nicht jedes reale Fenster, Dach, Beet, Markise, Paneel oder jede Tragstruktur bildet ein exaktes rechtwinkliges Dreieck, und ein unregelmäßiges Objekt muss vor Anwendung der Formeln in einfachere Formen zerlegt werden. Materialzugaben können nötig sein, Verschnitt ist nicht enthalten, gekrümmte Begrenzungen erfordern andere Berechnungen, die Tragfähigkeit lässt sich nicht allein aus dem Umfang bestimmen, und tatsächliche Baumaße sollten vor dem Materialkauf geprüft werden." },
          { "kind": "h3", "text": "Beispiel 1: Dreieckiger Glasfensterrahmen" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Fenster hat [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Umfang: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]] Halbumfang: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]] Zwölf Meter ist die Gesamtlänge um den dreieckigen Umriss des Fensters: das Rahmenmaterial, das vor Gehrungs- und Verschnittzugaben bestellt wird." },
          { "kind": "h3", "text": "Beispiel 2: Dachkantenverkleidung" },
          { "kind": "p", "text": "Ein dreieckiger Dachgiebelabschnitt hat [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Umfang: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]] Halbumfang: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]] Der Umfang schätzt die Länge der Verkleidung um den dreieckigen Umriss des Dachendes." },
          { "kind": "h3", "text": "Beispiel 3: Gartenbeet-Einfassung" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Gartenabschnitt hat [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Umfang: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]] Halbumfang: [[s=15\\text{ m}]]. Der Umfang schätzt die gesamte Länge der Beeteinfassung um den Abschnitt." },
          { "kind": "h3", "text": "Beispiel 4: Stahlstützwinkel" },
          { "kind": "p", "text": "Ein dreieckiger Metallwinkel hat [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Umfang: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]] Halbumfang: [[[\\boxed{s=20\\text{ cm}}]]] Der Umfang beschreibt die Außenkante des Winkels, nützlich bei der Angabe der Kantenbearbeitung." },
          { "kind": "h3", "text": "Beispiel 5: Dreieckiges Stoffpaneel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Stoffpaneel hat [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Umfang: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]] Halbumfang: [[[\\boxed{s=18\\text{ ft}}]]] Der Umfang schätzt die Kantenlänge, bevor Nahtzugaben hinzukommen." },
          { "kind": "h3", "text": "Beispiel 6: Dreieckiger Schildrahmen" },
          { "kind": "p", "text": "Ein Schild hat eine rechtwinklig-dreieckige Form mit [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Umfang: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]] Halbumfang: [[[\\boxed{s=24\\text{ cm}}]]] Der Gesamtumfang schätzt das Rahmenmaterial für das Schild." },
          { "kind": "h3", "text": "Beispiel 7: Landschaftsbegrenzung" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Landschaftsabschnitt hat [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Umfang: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]] Halbumfang: [[[\\boxed{s=28\\text{ m}}]]] Der Umfang schätzt das Einfassungsmaterial um den Abschnitt." },
          { "kind": "h3", "text": "Beispiel 8: Dreieckige Solarpanel-Stütze" },
          { "kind": "p", "text": "Ein vereinfachter dreieckiger Stützrahmen hat [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Umfang: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]] Halbumfang: [[[\\boxed{s=45\\text{ m}}]]] Dies sind die Längen der drei Seiten des modellierten dreieckigen Rahmens, der Ausgangspunkt für die Bauteildimensionierung." },
          { "kind": "h3", "text": "Beispiel 9: Dreieckige Markisenkante" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Markisenabschnitt hat [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Umfang: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]] Halbumfang: [[[\\boxed{s=30\\text{ ft}}]]] Der Umfang schätzt das Einfassungsmaterial für die Markisenkante." },
          { "kind": "h3", "text": "Beispiel 10: Lagerhallen-Dachgiebelrahmen" },
          { "kind": "p", "text": "Ein vereinfachter rechtwinklig-dreieckiger Dachgiebelrahmen hat [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Umfang: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]] Halbumfang: [[[\\boxed{s=66\\text{ m}}]]] Das Ergebnis stellt den vollständigen Umriss des dreieckigen Abschnitts dar." },
          { "kind": "h3", "text": "Beispiel 11: Dreieckiges Fertigungspaneel" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Industriepaneel hat [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Umfang: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]] Halbumfang: [[[\\boxed{s=91\\text{ cm}}]]] Der Umfang schätzt die schützenden Kantenprofile für das Paneel." },
          { "kind": "h3", "text": "Beispiel 12: Große dreieckige Tragstruktur" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Tragstruktur hat [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Umfang: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]] Halbumfang: [[[\\boxed{s=63\\text{ m}}]]] Diese Maße dienen als geometrische Eingaben für weitere ingenieurtechnische Berechnungen." },
          { "kind": "h3", "text": "Vergleich der praktischen Beispiele" }
        ],
        "table": {
          "headers": ["Praktische Anwendung", "Kathete a", "Kathete b", "Hypotenuse c", "Umfang P", "Halbumfang s", "Maßeinheit"],
          "rows": [
            ["Glasfensterrahmen", "3", "4", "5", "12", "6", "m"],
            ["Dachkantenverkleidung", "6", "8", "10", "24", "12", "ft"],
            ["Gartenbeet-Einfassung", "5", "12", "13", "30", "15", "m"],
            ["Stahlstützwinkel", "8", "15", "17", "40", "20", "cm"],
            ["Stoffpaneel", "9", "12", "15", "36", "18", "ft"],
            ["Schildrahmen", "12", "16", "20", "48", "24", "cm"],
            ["Landschaftsbegrenzung", "7", "24", "25", "56", "28", "m"],
            ["Solarpanel-Stütze", "9", "40", "41", "90", "45", "m"],
            ["Markisenkante", "15", "20", "25", "60", "30", "ft"],
            ["Lagerhallen-Dachgiebel", "11", "60", "61", "132", "66", "m"],
            ["Fertigungspaneel", "13", "84", "85", "182", "91", "cm"],
            ["Tragstruktur", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Umfang berechnen, wenn eine Seite fehlt",
        "blocks": [
          { "kind": "p", "text": "Der Rechner auf dieser Seite erfordert alle drei Seitenlängen. Ist eine Seite unbekannt, berechnen Sie sie zuerst mit dem Satz des Pythagoras. Der Umfang lässt sich nicht aus zwei Seiten vervollständigen: Zwei Längen beschreiben eine offene Ecke, keine geschlossene Begrenzung." },
          { "kind": "h3", "text": "Die Hypotenuse finden, wenn beide Katheten bekannt sind" },
          { "kind": "p", "text": "Verwenden Sie den Satz des Pythagoras in seiner Hypotenusenform: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Beispiel: [[a=6]], [[b=8]]. Dann [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]] Nun kann der Umfang berechnet werden: [[P=6+8+10]], [[[\\boxed{P=24}]]], mit [[s=12]] aus der Halbierung." },
          { "kind": "h3", "text": "Eine fehlende Kathete finden, wenn die Hypotenuse bekannt ist" },
          { "kind": "p", "text": "Stellen Sie [[a^2+b^2=c^2]] nach der unbekannten Kathete um: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Beispiel: [[c=13]], [[b=12]]. Dann [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]] Der Umfang folgt: [[P=5+12+13=30]], [[s=15]]. Die Subtraktion unter der Wurzel ist das Kennzeichen einer fehlenden Kathete; eine fehlende Hypotenuse addiert stets." },
          { "kind": "h3", "text": "Warum muss die fehlende Seite zuerst berechnet werden?" },
          { "kind": "p", "text": "Der Umfang erfordert alle drei Begrenzungslängen. Eine fehlende Seite kann nicht einfach ignoriert oder ohne Begründung geschätzt werden: Zwei Seiten begrenzen kein Dreieck, und eine geratene dritte Seite macht die Summe zur Fiktion. Sind nur zwei Seiten bekannt, findet der <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">Seitenrechner für rechtwinklige Dreiecke</a> die dritte, bevor der Rechner dieser Seite übernimmt. Beachten Sie, dass dies eine didaktische Methode ist, kein zusätzlicher Eingabemodus im bestehenden Rechner: Die Umfangs- und Halbumfangsmodi nehmen weiterhin jeweils drei Seiten." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck mit den Katheten 6 und 8, unbekannte Hypotenuse als 10 gelöst, was Umfang 24 ergibt",
        "figcaption": "Katheten 6 und 8 ergeben c = 10, also P = 24 und s = 12."
      },
      "sec-pythagoras": {
        "h2": "Wie hängen der Satz des Pythagoras und der Umfang eines rechtwinkligen Dreiecks zusammen?",
        "blocks": [
          { "kind": "p", "text": "Der Satz besagt [[[\\boxed{a^2+b^2=c^2}]]] Er stellt die Beziehung zwischen den beiden Katheten und der Hypotenuse her: Die rechtwinklige Ecke zwingt die drei Längen in genau dieses Gleichgewicht. Bei Umfangsberechnungen ist der Satz die Brücke zwischen einem unvollständigen Satz von Messungen und der vollständigen Begrenzung." },
          { "kind": "h3", "text": "Warum ist er für den Umfang wichtig?" },
          { "kind": "p", "text": "Sind die beiden Katheten bekannt, kann die Hypotenuse berechnet werden, bevor der vollständige Umfang ermittelt wird. Ohne den Satz würde eine fehlende Seite die Berechnung vollständig blockieren; mit ihm genügen zwei bekannte Seiten, um die dritte wiederherzustellen und die Summe zu vollenden. Der Satz funktioniert auch in die andere Richtung: Eine bekannte Hypotenuse und eine bekannte Kathete stellen die andere Kathete wieder her. In jedem Fall verwandelt er ein Zwei-Seiten-Problem in einen Drei-Seiten-Umfang." },
          { "kind": "h3", "text": "Durchgerechnetes Beispiel" },
          { "kind": "p", "text": "Gegeben: [[a=5]], [[b=12]]. Finden Sie [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]] Berechnen Sie den Umfang: [[P=5+12+13]], [[[\\boxed{P=30}]]] Berechnen Sie den Halbumfang: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]] Ein Satz, eine Addition, eine Halbierung: die vollständige Kette von zwei Katheten zu beiden Begrenzungsmaßen." },
          { "kind": "h3", "text": "Wie prüft man ein rechtwinkliges Dreieck?" },
          { "kind": "p", "text": "Die drei Messungen müssen [[a^2+b^2=c^2]] erfüllen, mit der Hypotenuse als längster Seite. Prüfen Sie außerdem die Dreiecksungleichung: Für jedes gültige Dreieck gilt [[a+b>c]], [[a+c>b]] und [[b+c>a]]. Diese Bedingungen sind bei der Prüfung von Messungen wichtig: Eine fehlgeschlagene Pythagoras-Prüfung bedeutet, dass das Dreieck nicht rechtwinklig ist oder eine Seite falsch bezeichnet wurde; eine fehlgeschlagene Dreiecksungleichung bedeutet, dass die drei Längen überhaupt kein Dreieck bilden können. Führen Sie beide Prüfungen durch, bevor Sie einem Umfang aus Feldmessungen vertrauen." }
        ]
      },
      "sec-advanced": {
        "h2": "Wie wird der Halbumfang in anderen Dreiecksformeln verwendet?",
        "blocks": [
          { "kind": "p", "text": "Dieser Abschnitt gibt dem Halbumfang seine mathematische Tiefe, ohne die Seite zum Tutorial eines anderen Rechners zu machen. Der Halbumfang ist mehr als ein halber Umfang: Er ist die Größe, die Seitenlängen mit Fläche und Kreisgeometrie verbindet, und die folgenden Formeln sind der Ort, an dem er sich bewährt." },
          { "kind": "h3", "text": "Beziehung zwischen Halbumfang und Inkreisradius" },
          { "kind": "p", "text": "Die Fläche jedes nicht entarteten Dreiecks entspricht seinem Inkreisradius mal seinem Halbumfang: [[[\\boxed{K=rs}]]], wobei [[K]] die Fläche, [[r]] der Inkreisradius und [[s]] der Halbumfang ist. Diese Beziehung gilt für alle nicht entarteten Dreiecke, nicht nur für rechtwinklige. Bei einem rechtwinkligen Dreieck kann der Inkreisradius auch aus den Seiten berechnet werden: [[[\\boxed{r=\\frac{a+b-c}{2}}]]] Nehmen Sie das 3-4-5-Dreieck: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], dann [[K=1\\times6]], [[[\\boxed{K=6}]]] Der Halbumfang ist ein wichtiges Zwischenmaß in dieser Berechnung: Er trägt die Begrenzungsinformation, während der Inkreisradius die Kreisinformation trägt." },
          { "kind": "h3", "text": "Beziehung zur Formel von Heron" },
          { "kind": "p", "text": "Die Formel von Heron berechnet die Fläche aus den drei Seiten und dem Halbumfang: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]] Sie verwendet alle drei Seitenlängen, sie verwendet den Halbumfang, sie berechnet die Dreiecksfläche und sie funktioniert für jedes gültige Dreieck. Nehmen Sie das 3-4-5-Dreieck mit [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]] Der Halbumfang erscheint viermal unter der Wurzel, was zeigt, wie zentral er ist: Die Formel von Heron lässt sich ohne ihn gar nicht schreiben." },
          { "kind": "h3", "text": "Warum ist der Halbumfang ein grundlegendes Maß?" },
          { "kind": "p", "text": "Er ist mehr als ein halber Umfang. Er ist eine nützliche mathematische Größe, die Seitenlängen mit Fläche und Kreisgeometrie verbindet: Die Inkreisradius-Beziehung behandelt ihn als natürlichen Partner von [[r]], und die Formel von Heron baut die gesamte Fläche darauf auf. Wann immer eine Formel die Begrenzung auf eine einzige handliche Zahl destilliert braucht, ist [[s]] diese Zahl. Diese Seite wird kein vollständiges Tutorial zur Formel von Heron oder zum Inkreisradius; sie vermerkt die Verbindung, damit die Ausgabe des Halbumfangsmodus einen Anschluss hat." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Was ist der Unterschied zwischen Umfang und Flächeninhalt?",
        "blocks": [
          { "kind": "p", "text": "Eine der hartnäckigsten Verwirrungen in der Geometrie ist die Verwechslung von Umriss und Oberfläche. Umfang und Flächeninhalt teilen sich dasselbe Dreieck, messen aber verschiedene Dinge in verschiedenen Einheiten und beantworten verschiedene Fragen." },
          { "kind": "h3", "text": "Der Umfang misst die Begrenzung" },
          { "kind": "p", "text": "[[P=a+b+c]]. Er misst die Gesamtlänge um das Dreieck: die Einfassung, die Leiste, die Zaunlinie. Einheiten sind linear: Meter, Zentimeter, Fuß, Zoll. Er ist eindimensional, eine Länge und nichts weiter." },
          { "kind": "h3", "text": "Der Flächeninhalt misst die eingeschlossene Fläche" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]] Er misst den flachen zweidimensionalen Bereich innerhalb des rechtwinkligen Dreiecks: das Glas im Fenster, den Rasen im Gartenabschnitt. Einheiten sind quadratisch: Quadratmeter, Quadratzentimeter, Quadratfuß, Quadratzoll. Er ist zweidimensional, eine Flächenzählung und nichts weiter." },
          { "kind": "h3", "text": "Können zwei Dreiecke denselben Umfang, aber unterschiedliche Flächen haben?" },
          { "kind": "p", "text": "Ja. Dreieck 1: [[a=5]], [[b=12]], [[c=13]]. Dann [[P=5+12+13=30]] und [[K=\\frac{5\\times12}{2}=30]]. Dreieck 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Prüfen Sie den rechten Winkel: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], also ist es ein echtes rechtwinkliges Dreieck. Sein Umfang ist [[P=7.5+10+12.5=30]], dieselben 30, aber seine Fläche ist [[K=\\frac{7.5\\times10}{2}=37.5]], deutlich anders. Gleicher Umfang bedeutet nicht automatisch gleiche Fläche: Die Umrisslänge fixiert die gesamte Einfassung, aber die Form des Dreiecks entscheidet, wie viel Fläche diese Einfassung umschließt." },
          { "kind": "h3", "text": "Warum sollte man den Umfang niemals in Flächeneinheiten angeben?" },
          { "kind": "p", "text": "Ein Umfang ist eine eindimensionale Länge; Flächeneinheiten beschreiben eine zweidimensionale Oberfläche. 12 m² für einen Umfang anzugeben, behauptet eine Fläche, wo nur ein Umriss gemessen wurde, und wer die Zahl liest, stellt sich das Falsche vor. Halten Sie die Einheiten ehrlich: Längen in m, cm, ft, in; Flächen in m², cm², ft², in². Die Einheit ist Teil der Antwort, und die falsche Einheit macht eine richtige Antwort falsch." }
        ]
      },
      "sec-units": {
        "h2": "Maßeinheiten bei Umfang- und Halbumfangsberechnungen verstehen",
        "blocks": [
          { "kind": "p", "text": "Meter, Zentimeter, Millimeter, Kilometer, Fuß, Zoll, Yard, Meilen: Längeneinheiten gibt es in vielen Größen, und die Umfangsformel akzeptiert jede davon. Die eine Regel ist die Übereinstimmung: Alle drei Seiten müssen dieselbe Einheit sprechen, bevor sie addiert werden." },
          { "kind": "h3", "text": "Warum müssen alle drei Seitenlängen kompatible Einheiten verwenden?" },
          { "kind": "p", "text": "Der Umfang ist eine Summe von Längen. 3 Fuß zu 48 Zoll ohne Umrechnung zu addieren, mischt zwei Maßstäbe, und die Summe hat keine saubere Bedeutung: 56 wovon? Wandeln Sie Messungen vor der Addition in eine gemeinsame Einheit um. Die Einheitenwähler des Rechners gibt es genau für diesen Schritt, und das folgende durchgerechnete Beispiel zeigt die Umrechnung bei ihrer leisen, wesentlichen Arbeit." },
          { "kind": "h3", "text": "Durchgerechnetes Umrechnungsbeispiel" },
          { "kind": "p", "text": "Gegeben: [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Rechnen Sie die mittlere Seite um: [[48\\text{ inches}=4\\text{ ft}]]. Dann [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]] Halbumfang: [[[\\boxed{s=6\\text{ ft}}]]] Beachten Sie, dass das umgerechnete Tripel das bekannte 3-4-5 ist, was die Umrechnung unabhängig bestätigt: Hätte man die Zoll roh addiert, wäre der \"Umfang\" 56 von nichts Zusammenhängendem gewesen." },
          { "kind": "h3", "text": "Mit dezimalen Seitenlängen rechnen" },
          { "kind": "p", "text": "Nehmen Sie [[a=2.5]], [[b=6]], [[c=6.5]]. Bestätigen Sie zuerst den rechten Winkel: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Berechnen Sie den Umfang: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]] Dann den Halbumfang: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]] Dezimalzahlen fließen durch dieselbe Addition und Halbierung wie ganze Zahlen; die Formeln verlangen niemals ganze Zahlen, und Werkstattmaße sind es selten." },
          { "kind": "h3", "text": "Warum sollte man zu frühes Runden vermeiden?" },
          { "kind": "p", "text": "Messberechnungen können Dezimalwerte enthalten, und jede zwischenzeitliche Rundung bringt einen Fehler ein, den die späteren Schritte nicht mehr entfernen können. Halten Sie in den Zwischenschritten genügend Genauigkeit und runden Sie nur die endgültige Antwort entsprechend der erforderlichen Messgenauigkeit. 2,5 mitten in der Berechnung auf 3 zu runden, würde sowohl [[P]] als auch [[s]] verfälschen; der Rechner hält die volle Genauigkeit bis zum Ende, und Handrechnungen sollten das Gleiche tun." }
        ]
      },
      "sec-scaling": {
        "h2": "Wie wirken sich Änderungen der Seitenlängen auf Umfang und Halbumfang aus?",
        "blocks": [
          { "kind": "p", "text": "Der Umfang ist eine lineare Messung, daher skaliert er linear mit dem Dreieck: Dehnt man jede Seite um einen Faktor, dehnt sich die Begrenzung um genau diesen Faktor. Der Halbumfang folgt mit, da er stets die Hälfte des Umfangs ist." },
          { "kind": "h3", "text": "Was passiert, wenn sich jede Seite verdoppelt?" },
          { "kind": "p", "text": "Beginnen Sie mit [[P=a+b+c]]. Wenn sich jede Seite verdoppelt, ist der neue Umfang [[P_2=2a+2b+2c]], was zu [[P_2=2(a+b+c)]] faktorisiert wird. Daher [[[\\boxed{P_2=2P}]]] Der Halbumfang verdoppelt sich ebenfalls, denn das Halbieren eines verdoppelten Gesamtwerts verdoppelt weiterhin die Hälfte. Das Paar 3-4-5 zu 6-8-10 zeigt es in Zahlen: 12 wird zu 24, und 6 wird zu 12." },
          { "kind": "h3", "text": "Was passiert, wenn jede Seite verdreifacht wird?" },
          { "kind": "p", "text": "Dieselbe Algebra mit dem Faktor drei ergibt [[[\\boxed{P_2=3P}]]] und [[[\\boxed{s_2=3s}]]] Die lineare Skalierungsbeziehung gilt für jeden Skalierungsfaktor [[k]]: Multiplizieren Sie jede Seite mit [[k]], und beide Begrenzungsmaße multiplizieren sich mit [[k]]. Deshalb sind Maßstabszeichnungen so gutmütig: Messen Sie die Zeichnung, multiplizieren Sie mit dem Maßstabsfaktor, und der reale Umfang ist fertig." },
          { "kind": "h3", "text": "Was passiert, wenn sich nur eine Seite ändert?" },
          { "kind": "p", "text": "Verlängert man eine Seite, während die anderen beiden fest bleiben, ändert sich der Umfang um denselben Betrag: Addiert man 2 Einheiten zu einer Seite, wächst [[P]] um genau 2, weil der Umfang eine schlichte Summe ist. In einem rechtwinkligen Dreieck sind die Seitenlängen jedoch durch den Satz des Pythagoras miteinander verknüpft, sodass beliebige Seitenänderungen die Rechtwinkligkeit nicht unbedingt erhalten. Verlängert man eine Kathete ohne Anpassung der Hypotenuse, bricht [[a^2+b^2=c^2]], und die Form ist nicht mehr rechtwinklig: Die Umfangsformel addiert weiterhin drei Zahlen, aber sie beschreiben kein rechtwinkliges Dreieck mehr." },
          { "kind": "h3", "text": "Zwei rechtwinklige Dreiecke vergleichen" },
          { "kind": "p", "text": "Stellen Sie 3-4-5 neben 6-8-10. Seitenlängen: jede Seite verdoppelt, Skalierungsfaktor 2. Umfang: 12 gegen 24. Halbumfang: 6 gegen 12. Das Verdoppeln aller Seitenlängen verdoppelt beide Begrenzungsmaße, genau wie die Algebra vorhersagt. Der Vergleich läuft auch in die andere Richtung: Stehen die Umfänge zweier Dreiecke im Verhältnis 2:1 und sind beide rechtwinklig, stehen auch ihre Seiten in diesem Verhältnis." }
        ]
      },
      "sec-applications": {
        "h2": "Praktische Anwendungen des Umfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Dasselbe Zwei-Schritte-Muster, addieren dann halbieren, taucht überall auf, wo ein dreieckiger Umriss gemessen werden muss und eine Formel seine Hälfte braucht. Ein Glaser summiert einen Fensterrahmen aus seinen Kantenlängen; ein Dachdecker summiert Leisten um ein Giebelende; ein Landschaftsgärtner summiert die Einfassung um ein Beet; ein Fertiger summiert das Kantenprofil um ein Paneel. Aus den drei Seiten kommen der Umfang für die Materialbestellung und der Halbumfang für jede nachfolgende Geometrie. Die vier Tafeln unten zeigen das Muster in verschiedenen Maßstäben: einen Fensterrahmen (12 m), eine Dachkantenverkleidung (24 ft), eine Gartenbeet-Einfassung (56 m) und einen Stahlstützrahmen (40 cm), jeweils beschriftet mit Umfang und Halbumfang." }
        ],
        "imgAlt": "Vier Tafeln: Fensterrahmen 12 m, Dachverkleidung 24 ft, Gartenbeet-Einfassung 56 m, Stahlrahmen 40 cm Umfänge",
        "figcaption": "Vier echte Anwendungen: ein Fensterrahmen, eine Dachkantenverkleidung, eine Gartenbeet-Einfassung und ein Stahlrahmen."
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Berechnung von Umfang und Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Fast jede falsche Antwort in diesem Thema geht auf eine übersprungene Seite oder eine verwechselte Bezeichnung zurück, nicht auf schlechte Arithmetik. Die sechzehn Fehler unten sind diejenigen, die immer wieder auftauchen, jeder mit seiner Ursache und seiner Korrektur." },
          { "kind": "h3", "text": "1. Die Hypotenuse vergessen" },
          { "kind": "p", "text": "[[P=a+b]] beim 3-4-5-Dreieck ergibt 7, nicht 12. Der Fehler entsteht, weil die Hypotenuse den rechten Winkel nie berührt und sich daher vom eigentlichen Dreieck getrennt anfühlt. Korrektur: Die Begrenzung hat drei Kanten; zählen Sie alle drei, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Umfang und Halbumfang verwechseln" },
          { "kind": "p", "text": "6 einzutragen, wo 12 hingehört, oder umgekehrt, halbiert oder verdoppelt die Materialschätzung. Der Fehler kommt daher, dass die beiden Werte dieselben drei Seiten teilen. Korrektur: Beschriften Sie jedes Ergebnis mit [[P]] oder [[s]] und prüfen Sie [[s=\\frac{P}{2}]], bevor Sie fortfahren." },
          { "kind": "h3", "text": "3. Den Umfang bei der Umfangsberechnung durch zwei teilen" },
          { "kind": "p", "text": "[[\\frac{3+4+5}{2}=6]] zu berechnen und es Umfang zu nennen, unterbewertet die Begrenzung um die Hälfte. Der Fehler ist, die Halbumfangsformel aus Gewohnheit auszuführen. Korrektur: [[P=a+b+c]] enthält keine Division; die Halbierung gehört nur zu [[s]]." },
          { "kind": "h3", "text": "4. Vergessen, bei der Halbumfangsberechnung durch zwei zu teilen" },
          { "kind": "p", "text": "[[s=12]] für das 3-4-5-Dreieck zu melden, füttert die Formel von Heron mit einem verdoppelten [[s]] und verfälscht die Fläche. Korrektur: [[s=\\frac{a+b+c}{2}]] endet immer mit der Halbierung; ohne sie ist die Zahl der Umfang." },
          { "kind": "h3", "text": "5. Die falsche Seite als Hypotenuse verwenden" },
          { "kind": "p", "text": "Eine Kathete als [[c]] zu behandeln, zum Beispiel a=5, b=4, c=3 einzugeben, bringt jede nachfolgende Formel durcheinander. Der Fehler kommt meist daher, die Seiten in der falschen Reihenfolge zu lesen. Korrektur: [[c]] ist die längste Seite, gegenüber dem rechten Winkel; sortieren Sie die drei Zahlen und weisen Sie [[c]] der größten zu." },
          { "kind": "h3", "text": "6. Messungen eingeben, die kein rechtwinkliges Dreieck bilden" },
          { "kind": "p", "text": "Die Seiten 2, 3, 4 ergeben arithmetisch [[P=9]], aber [[2^2+3^2=13\\neq16]], also existiert kein rechter Winkel und die Formeln der Seite ruhen auf einer falschen Annahme. Korrektur: Prüfen Sie [[a^2+b^2=c^2]] vor der Berechnung." },
          { "kind": "h3", "text": "7. Zentimeter und Meter mischen" },
          { "kind": "p", "text": "3 m, 40 cm und 5 m als [[3+40+5=48]] zu addieren, ergibt 48 von nichts. Korrektur: Rechnen Sie zuerst in eine Einheit um: [[40\\text{ cm}=0.4\\text{ m}]], dann [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Fuß und Zoll mischen" },
          { "kind": "p", "text": "3 ft, 48 in und 5 ft als 56 zu addieren, wiederholt denselben Maßstabsfehler in imperialen Einheiten. Korrektur: [[48\\text{ in}=4\\text{ ft}]], dann [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Den Umfang in Flächeneinheiten angeben" },
          { "kind": "p", "text": "[[P=12\\text{ m}^2]] zu schreiben. Der Fehler kommt meist daher, aus Gewohnheit nach Flächenaufgaben eine Flächeneinheit zu übernehmen. Korrektur: Umfänge sind Längen, also [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Den Halbumfang als Fläche angeben" },
          { "kind": "p", "text": "[[s=6]] als 6 Flächeneinheiten zu behandeln. Der Halbumfang ist eine Länge, eine halbe Begrenzung, keine Fläche. Korrektur: [[s=6]] Längeneinheiten, Punkt." },
          { "kind": "h3", "text": "11. Zu früh runden" },
          { "kind": "p", "text": "2,5 vor der Addition auf 3 zu runden, ergibt [[3+6+6.5=15.5]] statt der wahren 15. Der Fehler fühlt sich harmlos an, weil die Rundung klein aussieht. Korrektur: Halten Sie die volle Genauigkeit durch die Berechnung und runden Sie nur die endgültige Antwort." },
          { "kind": "h3", "text": "12. Nur zwei Seiten im bestehenden Rechner verwenden" },
          { "kind": "p", "text": "[[a=3]], [[b=4]] und kein [[c]] einzugeben, lässt die Begrenzung offen. Der Rechner braucht alle drei Längen, weil ein Umfang eine geschlossene Summe ist. Korrektur: Finden Sie zuerst die fehlende Seite mit dem Satz des Pythagoras, dann berechnen Sie." },
          { "kind": "h3", "text": "13. Die Dreiecksungleichung ignorieren" },
          { "kind": "p", "text": "Die Seiten 2, 3, 10 ergeben arithmetisch [[P=15]], aber [[2+3<10]], also existiert überhaupt kein Dreieck. Korrektur: Prüfen Sie [[a+b>c]], bevor Sie einem Ergebnis vertrauen, das auf den drei Zahlen aufbaut." },
          { "kind": "h3", "text": "14. Annehmen, dass der Halbumfang ein physikalischer Halbweg ist" },
          { "kind": "p", "text": "Nach dem \"6-Einheiten-Weg\" entlang der 3-4-5-Kanten suchen. Kein einzelner durchgehender Halbweg entspricht [[s]] im Allgemeinen; [[s]] ist die Hälfte der numerischen Summe. Korrektur: Behandeln Sie [[s]] als Zahl für Formeln, nicht als Weg zum Ablaufen." },
          { "kind": "h3", "text": "15. Den Umfang mit der Summe nur der senkrechten Katheten verwechseln" },
          { "kind": "p", "text": "[[a+b=7]] zu berechnen und aufzuhören, als wäre die Hypotenuse Innendekoration. Korrektur: Die Hypotenuse ist eine Begrenzungskante; [[P=a+b+c]], alle drei Terme, jedes Mal." },
          { "kind": "h3", "text": "16. Annehmen, dass der Umfang allein die Fläche des Dreiecks bestimmt" },
          { "kind": "p", "text": "Zu glauben, [[P=30]] lege [[K]] fest. Das 5-12-13-Dreieck ([[K=30]]) und das 7,5-10-12,5-Dreieck ([[K=37.5]]) teilen [[P=30]] bei verschiedenen Flächen. Korrektur: Die Fläche braucht mehr als die Begrenzungssumme; verwenden Sie die Katheten oder die Formel von Heron." },
          { "kind": "h3", "text": "Falsch gegen richtig: ein konkretes Beispiel" },
          { "kind": "p", "text": "Gegeben: [[a=3]], [[b=4]], [[c=5]]. Richtiger Umfang: [[P=3+4+5=12]]. Falschlicherweise die Hypotenuse weggelassen: [[3+4=7]]. Sieben ist nicht der vollständige Umfang, weil die dritte Kante der Begrenzung nie gezählt wurde. Richtiger Halbumfang: [[s=\\frac{12}{2}=6]]. Sechs ist nicht die volle Begrenzungslänge: Es ist ihre Hälfte, der Wert, den Formeln wie die von Heron brauchen. Die Arithmetik sieht in allen drei Fällen selbstbewusst aus; nur die Geometrie unterscheidet sie." }
        ]
      },
      "sec-verify": {
        "h2": "Überprüfen, ob der Umfang eines rechtwinkligen Dreiecks korrekt ist",
        "blocks": [
          { "kind": "p", "text": "Sieben unabhängige Prüfungen, alle am 3-4-5-Dreieck demonstriert ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). Die Übereinstimmung verschiedener Wege ist der stärkste Beweis, dass eine Antwort richtig ist, bei Hausaufgaben wie bei praktischen Messungen." },
          { "kind": "h3", "text": "Methode 1: Alle drei Seiten erneut addieren" },
          { "kind": "p", "text": "Führen Sie [[P=a+b+c]] frisch aus: [[P=3+4+5=12]]. Ein zweiter Durchgang mit neu eingegebenen Zahlen fängt Tippfehler und falsch eingegebene Ziffern ab, die ein einziger Durchgang verbirgt." },
          { "kind": "h3", "text": "Methode 2: Den Umfang durch zwei teilen" },
          { "kind": "p", "text": "Berechnen Sie [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Wenn die Halbierung nicht zur Ausgabe des Halbumfangsmodus passt, ist eine der beiden Berechnungen falsch gelaufen und beide verdienen einen zweiten Blick." },
          { "kind": "h3", "text": "Methode 3: Den Halbumfang verdoppeln" },
          { "kind": "p", "text": "Prüfen Sie [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Dies ist die Umkehrung von Methode 2 und fängt dieselbe Fehlerklasse aus der anderen Richtung: Ein falsches [[s]] scheitert hier, auch wenn die ursprüngliche Addition gut aussah." },
          { "kind": "h3", "text": "Methode 4: Die Pythagoras-Beziehung prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Dies prüft die Seitenidentifikation hinter jeder anderen Berechnung; eine falsche Hypotenuse bedeutet, dass eine Seite falsch bezeichnet wurde, und [[P]] und [[s]] müssen beide neu aufgebaut werden." },
          { "kind": "h3", "text": "Methode 5: Die Dreiecksungleichung prüfen" },
          { "kind": "p", "text": "Bestätigen Sie [[a+b>c]]: [[3+4=7>5]]. Die drei Längen müssen überhaupt ein Dreieck bilden können, bevor die Rechtwinkligkeitsprüfung etwas bedeutet. Ein Fehlschlag hier schickt Sie zurück zu den Messungen, nicht zur Arithmetik." },
          { "kind": "h3", "text": "Methode 6: Die Maßeinheiten prüfen" },
          { "kind": "p", "text": "Stellen Sie sicher, dass alle drei Seiten kompatible Einheiten verwenden. Gemischte Einheiten sind der leiseste Fehler in diesem Thema: Die Arithmetik sieht sauber aus, während der Maßstab falsch ist. Lesen Sie den Einheitenwähler jeder Eingabe erneut, bevor Sie der Summe vertrauen." },
          { "kind": "h3", "text": "Methode 7: Mit der Live-Visualisierung vergleichen" },
          { "kind": "p", "text": "Der Rechner zeichnet das Dreieck aus den eingegebenen Seiten. Wenn die Zeichnung dem gemessenen Objekt überhaupt nicht ähnelt, wurde eine Seite falsch zugeordnet: Die längste eingegebene Seite sollte gegenüber der rechtwinkligen Ecke liegen. Das Bild ist ein unabhängiger Zeuge und verdient einen Blick, bevor die Zahlen in eine Bestellung oder einen Bericht eingehen." }
        ]
      },
      "sec-related": {
        "h2": "Weitere Rechner für rechtwinklige Dreiecke entdecken",
        "blocks": [
          { "kind": "p", "text": "Verschiedene Messungen erfordern verschiedene Rechner." }
        ]
      },
      "sec-faq": {
        "h2": "Häufige Fragen",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Eine Grenze, zwei nützliche Maße",
        "blocks": [
          { "kind": "p", "text": "Der Umfang summiert die Begrenzung; der Halbumfang halbiert diese Summe für die Formeln, die ihn brauchen. Das 3-4-5-Dreieck trägt die ganze Geschichte in Miniatur: [[P=12]] Einheiten Umriss für die Materialbestellung, [[s=6]] Einheiten bereit für die Formel von Heron oder die Inkreisradius-Beziehung. Eine Addition und eine Halbierung decken beide Aufgaben ab." },
          { "kind": "p", "text": "Die Arbeitsgewohnheit ist einfach: Bezeichnen Sie die Hypotenuse richtig, schließen Sie alle drei Seiten ein, gleichen Sie die Einheiten an, halten Sie Dezimalzahlen bis zum Ende ungerundet und verifizieren Sie über eine zweite Methode. Mit diesen Gewohnheiten sind [[P=a+b+c]] und [[s=\\frac{a+b+c}{2}]] zwei der verlässlichsten Maße in der Geometrie." }
        ]
      }
    },
    "relatedHeading": "Weitere Rechner für rechtwinklige Dreiecke entdecken",
    "relatedIntro": "Verschiedene Messungen erfordern verschiedene Rechner.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Umfangsrechner für rechtwinklige Dreiecke" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Halbumfangsrechner für rechtwinklige Dreiecke" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Flächenrechner für rechtwinklige Dreiecke aus dem Halbumfang" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Flächenrechner für rechtwinklige Dreiecke aus den Katheten" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Rechner zum Satz des Pythagoras" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Rechner für fehlende Katheten rechtwinkliger Dreiecke" }
    ],
    "faqHeading": "Häufige Fragen",
    "faqs": [
      {
        "question": "Wie lautet die Formel für den Umfang eines rechtwinkligen Dreiecks?",
        "answer": "P = a + b + c, wobei a und b die beiden Katheten und c die Hypotenuse sind. Addieren Sie alle drei Seitenlängen; die Summe ist die vollständige Begrenzungslänge in linearen Einheiten. Bei einem 3-4-5-Dreieck ist P = 3 + 4 + 5 = 12 Einheiten. Jede Seite muss dabei sein, einschließlich der Hypotenuse, weil sie eine der drei Begrenzungskanten ist."
      },
      {
        "question": "Wie lautet die Formel für den Halbumfang eines rechtwinkligen Dreiecks?",
        "answer": "s = (a + b + c) / 2, genau die Hälfte des Umfangs, äquivalent s = P / 2. Addieren Sie zuerst die drei Seiten, dann teilen Sie einmal. Bei einem 3-4-5-Dreieck ist s = (3 + 4 + 5) / 2 = 6 Einheiten. Es ist eine Länge, keine Fläche, und es ist die Eingabe, die Formeln wie die von Heron erwarten."
      },
      {
        "question": "Was ist der Unterschied zwischen Umfang und Halbumfang?",
        "answer": "Der Umfang ist die ganze Begrenzung, P = a + b + c; der Halbumfang ist ihre Hälfte, s = P / 2. Bei einem 6-8-10-Dreieck ist P = 24 und s = 12. Verwenden Sie P für Materialschätzungen um einen Umriss und s als Eingabe für fortgeschrittene Geometrieformeln. Die beiden unterscheiden sich immer um genau den Faktor zwei."
      },
      {
        "question": "Warum ist die Hypotenuse im Umfang enthalten?",
        "answer": "Weil der Umfang die vollständige äußere Begrenzung misst und die Hypotenuse eine ihrer drei Kanten ist. Das Ablaufen des Dreiecks bedeutet, auch die Hypotenuse abzulaufen. Sie wegzulassen, misst einen offenen Weg, keinen geschlossenen Umriss. Bei 3-4-5 ergibt das Weglassen der 5 sieben, was nicht der Umfang eines Dreiecks mit diesen Seiten ist."
      },
      {
        "question": "Kann ich den Umfang berechnen, wenn eine Seite fehlt?",
        "answer": "Nicht direkt: Die Formel braucht alle drei Begrenzungslängen. Finden Sie zuerst die fehlende Seite mit dem Satz des Pythagoras: c = sqrt(a^2 + b^2) für eine fehlende Hypotenuse oder a = sqrt(c^2 - b^2) für eine fehlende Kathete. Mit a = 6 und b = 8 ist c = 10, dann P = 6 + 8 + 10 = 24. Der Rechner auf dieser Seite erfordert alle drei Seiten."
      },
      {
        "question": "Wie finde ich die Hypotenuse, bevor ich den Umfang berechne?",
        "answer": "Verwenden Sie c = sqrt(a^2 + b^2) mit den beiden bekannten Katheten. Für a = 5 und b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Addieren Sie dann alle drei Seiten: P = 5 + 12 + 13 = 30. Bestätigen Sie, dass das Ergebnis die längste Seite ist; wenn nicht, wurden die Katheten falsch bezeichnet."
      },
      {
        "question": "Warum ist der Halbumfang in der Geometrie nützlich?",
        "answer": "Er ist die natürliche Variable der Formel von Heron, K = sqrt(s(s - a)(s - b)(s - c)), und der Inkreisradius-Beziehung K = r x s. Flächenformeln erzeugen ständig Hälften, und der Halbumfang nimmt sie in einer handlichen Zahl auf. Bei 3-4-5 speist s = 6 beide Formeln, und beide geben K = 6 zurück. Er verbindet Seitenlängen mit Fläche und Kreisgeometrie."
      },
      {
        "question": "Ist der Halbumfang die halbe Fläche des Dreiecks?",
        "answer": "Nein. Der Halbumfang ist die Hälfte des Umfangs, eine Länge, gemessen in Einheiten wie Metern oder Fuß. Die Fläche ist eine zweidimensionale Oberfläche, gemessen in Flächeneinheiten. Beim 3-4-5-Dreieck ist s = 6 Einheiten, während die Fläche 6 Flächeneinheiten beträgt; die übereinstimmenden Zahlen sind ein Zufall dieses besonderen Dreiecks, keine Regel."
      },
      {
        "question": "Welche Einheiten sollte ich für den Umfang verwenden?",
        "answer": "Jede lineare Einheit, solange alle drei Seiten sie teilen: Meter, Zentimeter, Millimeter, Kilometer, Fuß, Zoll, Yard oder Meilen. Rechnen Sie vor der Addition um: 3 ft, 48 in, 5 ft werden zu 3 ft, 4 ft, 5 ft, was P = 12 ft ergibt. Geben Sie einen Umfang niemals in Flächeneinheiten an; er ist eine Länge, keine Fläche."
      },
      {
        "question": "Kann ich den Umfang mit dezimalen Messungen berechnen?",
        "answer": "Ja. Die Formeln behandeln Dezimalzahlen genau wie ganze Zahlen. Mit a = 2,5, b = 6, c = 6,5: P = 2,5 + 6 + 6,5 = 15 Einheiten und s = 15 / 2 = 7,5 Einheiten. Halten Sie die volle Genauigkeit durch die Addition und runden Sie nur die endgültige Antwort auf die Genauigkeit, die die Messungen rechtfertigen."
      },
      {
        "question": "Wie prüfe ich, ob drei Seiten ein gültiges rechtwinkliges Dreieck bilden?",
        "answer": "Bestätigen Sie die Pythagoras-Beziehung a^2 + b^2 = c^2 mit c als längster Seite und bestätigen Sie die Dreiecksungleichung a + b > c. Bei 3, 4, 5: 9 + 16 = 25 und 3 + 4 > 5, also ist das Dreieck gültig und rechtwinklig. Das Scheitern eines der beiden Tests bedeutet, dass die Messungen erneut geprüft werden müssen, bevor man einem Umfang vertraut."
      },
      {
        "question": "Wie hängen Halbumfang, Inkreisradius und die Formel von Heron zusammen?",
        "answer": "Der Halbumfang speist beide: K = r x s verbindet ihn mit dem Inkreisradius, und K = sqrt(s(s - a)(s - b)(s - c)) ist die auf ihm aufgebaute Formel von Heron. Bei einem rechtwinkligen Dreieck folgt der Inkreisradius auch aus den Seiten als r = (a + b - c) / 2. Bei 3-4-5 ist s = 6 und r = 1, also K = 1 x 6 = 6, was dem Ergebnis von Heron entspricht."
      }
    ]
  }
};
