/**
 * areaGuideTranslations.batch1c.ts
 * Page 16 (Area Guide), partial locales: de, it.
 * Consumed by areaGuideTranslations.batch1.ts via
 * export const AREA_TRANSLATIONS_BATCH1C.
 *
 * G schema: tocHeading, tocItems (16 ids), sections (14 ids), faqs (12),
 * faqHeading, relatedHeading, relatedItems (7, fixed URL order).
 * KaTeX markers [[...]] / [[[...]]] kept byte-identical to English source;
 * every backslash doubled in TS source. No em dashes, no decorative unicode.
 */
export const AREA_TRANSLATIONS_BATCH1C = {
  de: {
    tocHeading: "In dieser Anleitung",
    tocItems: {
      "sec-intro": "Was ist ein Flächenrechner für rechtwinklige Dreiecke?",
      "sec-triangle": "Was ist die Fläche eines rechtwinkligen Dreiecks?",
      "sec-legs": "Fläche eines rechtwinkligen Dreiecks aus seinen zwei Katheten",
      "sec-angle-a": "Fläche des rechtwinkligen Dreiecks aus Seite b, Hypotenuse c und Winkel A",
      "sec-angle-b": "Fläche des rechtwinkligen Dreiecks aus Seite a, Hypotenuse c und Winkel B",
      "sec-inradius": "Fläche des rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
      "sec-altitude": "Fläche des rechtwinkligen Dreiecks aus Hypotenuse und Höhe",
      "sec-choose": "Welche Flächenformel für das rechtwinklige Dreieck sollten Sie verwenden?",
      "sec-howto": "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke",
      "sec-applications": "Anwendungen der Flächenberechnung rechtwinkliger Dreiecke im Alltag",
      "sec-verify": "So prüfen Sie die Fläche eines rechtwinkligen Dreiecks",
      "sec-mistakes": "Häufige Fehler bei der Flächenberechnung rechtwinkliger Dreiecke",
      "sec-validate": "So prüfen Sie, ob Ihr Flächenergebnis gültig ist",
      "sec-related": "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    sections: {
      "sec-intro": {
        h2: "Was ist ein Flächenrechner für rechtwinklige Dreiecke?",
        blocks: [
          { kind: "p", text: "Ein Flächenrechner für rechtwinklige Dreiecke berechnet die zweidimensionale Fläche, die von den drei Seiten eines rechtwinkligen Dreiecks eingeschlossen wird. Zum Beispiel hat ein rechtwinkliges Dreieck mit den Katheten [[a=3\\text{ m}]] und [[b=4\\text{ m}]] die Fläche [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: Das Dreieck nimmt sechs Quadratmeter Fläche ein. Die Fläche wird in Quadratmaßen gemessen, weil sie ebene Fläche zählt, nicht Länge." },
          { kind: "p", text: "Die senkrechten Katheten vereinfachen die Berechnung enorm. Da die beiden Katheten im 90-Grad-Winkel aufeinandertreffen, kann eine Kathete als Basis und die andere als Höhe dienen, sodass die Fläche einfach die Hälfte ihres Produkts ist. Diese Einfachheit ist ein Grund dafür, dass die Kathetenformel die erste Methode ist, die die meisten Schüler lernen." },
          { kind: "p", text: "Es gibt mehrere Methoden für dieselbe Fläche, weil reale Probleme unterschiedliche Messwerte liefern. Ein Zimmermann misst die zwei Katheten eines Paneels; ein Vermesser misst eine Hypotenuse und einen Winkel; ein Geometer, der mit einem einbeschriebenen Kreis arbeitet, kennt Inkreisradius und Halbumfang. Jede Methode verwandelt ihren eigenen Satz bekannter Werte in dieselbe Fläche. Der Rechner auf dieser Seite bietet fünf Modi für diese Situationen: Fläche aus Katheten, Flächenvariation (Winkel A), Flächenvariation (Winkel B), Fläche aus Halbumfang und Flächenvariation (Höhe). Die beste Methode ist meist diejenige, die die bereits vorhandenen Messungen verwendet, ohne vorher zusätzliche Umrechnungen zu erzwingen." }
        ]
      },
      "sec-triangle": {
        h2: "Was ist die Fläche eines rechtwinkligen Dreiecks?",
        blocks: [
          { kind: "p", text: "Diese Anleitung verwendet durchgehend eine einheitliche Notation: [[A]] und [[B]] sind die beiden spitzen Winkel, [[C=90^\\circ]] ist der rechte Winkel, Seite [[a]] liegt dem Winkel [[A]] gegenüber, Seite [[b]] liegt dem Winkel [[B]] gegenüber, Seite [[c]] ist die Hypotenuse gegenüber dem Winkel [[C]], [[h]] ist die senkrechte Höhe vom Scheitel [[C]] zur Hypotenuse, [[r]] ist der Inkreisradius, [[s]] ist der Halbumfang und [[K]] ist die Fläche." },
          { kind: "h3", text: "Was ist ein rechtwinkliges Dreieck?" },
          { kind: "p", text: "Ein rechtwinkliges Dreieck hat einen Winkel von genau 90 Grad. Seine zwei Katheten treffen sich im rechten Winkel, und die Hypotenuse liegt diesem Winkel gegenüber. Die Hypotenuse ist immer die längste Seite, und die beiden anderen Winkel sind spitz: Da die Summe der drei Winkel 180 Grad beträgt, gilt [[A+B=90^\\circ]]. Die beiden Katheten stehen senkrecht aufeinander, und diese Eigenschaft macht die Flächenformel so direkt." },
          { kind: "h3", text: "Was bedeutet Fläche?" },
          { kind: "p", text: "Die Fläche misst den zweidimensionalen Raum, der von den drei Seiten des Dreiecks eingeschlossen wird. Sie unterscheidet sich vom Umfang, der die Gesamtlänge der Begrenzung misst, von der Seitenlänge, die eine Dimension misst, und vom Volumen, das den dreidimensionalen Raum misst. Ein dreieckiges Stück Papier hat eine Fläche, die der Menge des bedeckten Papiers entspricht; ein dreieckiger Gartenabschnitt hat eine Fläche, die dem eingenommenen Boden entspricht. Beide werden in Quadratmaßen wie Quadratmetern angegeben, weil die Fläche die Einheitsquadrate zählt, die in die Form passen." },
          { kind: "h3", text: "Warum wird die Fläche durch zwei geteilt?" },
          { kind: "p", text: "Zwei identische rechtwinklige Dreiecke lassen sich entlang ihrer Hypotenusen zu einem Rechteck zusammensetzen. Wenn jedes Dreieck die senkrechten Katheten [[a]] und [[b]] hat, besitzt das Rechteck die Fläche [[ab]]. Ein Dreieck nimmt genau die Hälfte dieses Rechtecks ein, also [[[\\boxed{K=\\frac{ab}{2}}]]]. Die Division durch zwei ist kein Trick: Sie ist die geometrische Folge davon, dass ein Dreieck die Hälfte eines Rechtecks ist, und sie erscheint in der einen oder anderen Form in jeder Flächenmethode auf dieser Seite." },
          { kind: "h3", text: "Warum kann dasselbe Dreieck fünf Flächenformeln haben?" },
          { kind: "p", text: "Die Fläche des Dreiecks ändert sich nicht, wenn eine andere Messmethode verwendet wird. Die Methoden starten nur mit unterschiedlichen bekannten Werten. Zwei Katheten ergeben die einfachste Formel. Eine Kathete, die Hypotenuse und der eingeschlossene spitze Winkel ermöglichen eine sinusbasierte Formel. Inkreisradius und Halbumfang liefern eine alternative geometrische Beziehung. Hypotenuse und senkrechte Höhe nutzen die allgemeine Basis-Höhen-Regel. Alle fünf Methoden müssen dieselbe Fläche liefern, wenn die Eingaben dasselbe gültige Dreieck beschreiben, und diese Übereinstimmung ist die stärkste verfügbare Prüfung: zwei Methoden, ein Dreieck, eine Antwort." }
        ],
        imgAlt: "Rechtwinkliges Dreieck: Katheten a und b, Hypotenuse c, rechter Winkel C, Höhe h zur Hypotenuse, K = ab/2",
        figcaption: "Anatomie eines rechtwinkligen Dreiecks: C ist der rechte Winkel, a und b sind die Katheten, c ist die Hypotenuse und h ist die Höhe zur Hypotenuse."
      },
      "sec-legs": {
        h2: "Fläche eines rechtwinkligen Dreiecks aus seinen zwei Katheten",
        blocks: [
          { kind: "p", text: "Die Kathetenformel ist der Ausgangspunkt für die Fläche rechtwinkliger Dreiecke: [[[\\boxed{K=\\frac{ab}{2}}]]]. Sie benötigt nur die zwei senkrechten Seiten, und alles andere auf dieser Seite lässt sich als Variation auffassen, die dieselbe Größe aus anderen Eingaben zurückgewinnt." },
          { kind: "h3", text: "Wann sollten Sie die Kathetenformel verwenden?" },
          { kind: "p", text: "Verwenden Sie diese Methode, wann immer beide senkrechten Seiten bekannt sind. Keine Winkel-, Hypotenusen-, Inkreisradius- oder Höhenberechnung ist vorher erforderlich. Die direkte Messung der beiden Katheten ist in der Zimmerei, beim Fliesenlegen und in Klassenraumaufgaben üblich, weshalb der Modus Fläche aus Katheten für die meisten Alltagsberechnungen die Standardwahl ist." },
          { kind: "h3", text: "Wie die Formel funktioniert" },
          { kind: "p", text: "Die beiden Katheten bilden die Basis und die senkrechte Höhe des Dreiecks. Die allgemeine Dreiecksflächenformel lautet [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; da die Katheten senkrecht aufeinander stehen, können Basis und Höhe direkt als [[a]] und [[b]] genommen werden, was [[K=ab/2]] ergibt. Es ist keine Trigonometrie beteiligt, und keine zusätzliche Seite muss zuerst gefunden werden." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Ein 3-4-5-Dreieck" },
          { kind: "p", text: "Gegeben [[a=3\\text{ m}]] und [[b=4\\text{ m}]]. Schritt 1: Schreiben Sie die Formel [[K=ab/2]]. Schritt 2: Setzen Sie die Werte ein, [[K=(3\\times4)/2]]. Schritt 3: Multiplizieren Sie, [[K=12/2]]. Schritt 4: Teilen Sie durch zwei, [[[\\boxed{K=6\\text{ m}^2}]]]. Die Antwort lautet sechs Quadratmeter, nicht sechs Meter: Die Einheit trägt die Bedeutung der Größe." },
          { kind: "h3", text: "Können die zwei Katheten vertauscht werden?" },
          { kind: "p", text: "Ja. Die Multiplikation ist kommutativ, also [[ab=ba]] und damit [[ab/2=ba/2]]. Die Fläche bleibt unverändert, wenn die zwei Katheten in umgekehrter Reihenfolge eingegeben werden, vorausgesetzt die Rechnerfelder entsprechen den richtigen Kathetenlängen. Diese Symmetrie gilt nur für die Katheten: Das Vertauschen einer Kathete mit der Hypotenuse würde die Formel zerstören." },
          { kind: "h3", text: "Was ist, wenn die Katheten Dezimalwerte haben?" },
          { kind: "p", text: "Dezimale Messwerte funktionieren in derselben Formel. Mit [[a=3.5\\text{ cm}]] und [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. Die Rechnung ist identisch; nur die Genauigkeit der Eingaben ändert sich, also behalten Sie genügend Stellen bei und runden Sie am Ende." },
          { kind: "h3", text: "Was ist, wenn eine Kathete unbekannt ist?" },
          { kind: "p", text: "Eine fehlende Kathete kann manchmal zuerst mit dem Satz des Pythagoras oder einem bekannten Winkel gefunden werden, und die Kathetenformel wird anschließend angewendet. Beachten Sie, dass der Kathetenmodus selbst beide Katheten benötigt: Er stellt keine fehlende Seite automatisch wieder her. Wenn nur eine Kathete und die Hypotenuse bekannt sind, ist die Berechnung der fehlenden Kathete ein separater Schritt, bevor dieser Modus verwendet werden kann." }
        ]
      },
      "sec-angle-a": {
        h2: "Fläche des rechtwinkligen Dreiecks aus Seite b, Hypotenuse c und Winkel A",
        blocks: [
          { kind: "p", text: "Diese Methode ist nützlich, wenn Seite [[b]], Hypotenuse [[c]] und der spitze Winkel [[A]] bekannt sind: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. Es ist der Flächenvariation-(Winkel-A)-Modus des Rechners." },
          { kind: "h3", text: "Warum verwendet diese Formel den Sinus?" },
          { kind: "p", text: "Die allgemeine Flächenformel für zwei Seiten und ihren eingeschlossenen Winkel lautet [[K=\\frac12 xy\\sin(\\theta)]]. Winkel [[A]] liegt zwischen den Seiten [[b]] und [[c]], sodass das Einsetzen von [[x=b]], [[y=c]], [[\\theta=A]] zu [[K=\\frac12 bc\\sin(A)]] führt. Der Sinus berücksichtigt die senkrechte Komponente einer Seite: Nur der Teil von Seite [[c]], der senkrecht auf [[b]] steht, trägt zur Höhe bei, und dieser senkrechte Teil ist [[c\\sin(A)]]." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Ein 3-4-5-Dreieck" },
          { kind: "p", text: "Gegeben [[b=4\\text{ m}]], [[c=5\\text{ m}]] und [[A\\approx36.87^\\circ]]. Da [[\\sin(36.87^\\circ)\\approx0.6]] gilt, setzen Sie ein: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Dies stimmt mit der Kathetenformel überein, weil 0,6 genau das Verhältnis [[a/c=3/5]] ist: Die Sinusform ist die Kathetenform in Verkleidung, wobei [[c\\sin(A)]] die Rolle der anderen Kathete spielt." },
          { kind: "h3", text: "Was passiert, wenn sich der Winkel ändert?" },
          { kind: "p", text: "Der Sinusfaktor ändert die Fläche, wenn die beiden Seitenlängen und der eingeschlossene Winkel innerhalb eines gültigen Dreiecks variiert werden. Stellen Sie sich nicht vor, dass sich ein Winkel ändert, während jede Seitenlänge fest bleibt: In einem echten Dreieck sind Seiten und Winkel verknüpft, sodass eine Winkeländerung das Dreieck umformt und die Fläche mit sich bewegt. Der eingeschlossene Winkel ist für diese Formel gerade deshalb wesentlich, weil er kodiert, wie offen oder geschlossen das Dreieck ist." },
          { kind: "h3", text: "Häufige Fehler im Winkel-A-Modus" },
          { kind: "p", text: "Fünf Fehler wiederholen sich in diesem Modus. Die Paarung von Winkel [[A]] mit der falschen Seite ist am häufigsten: Diese Formel braucht Seite [[b]], nicht Seite [[a]], weil [[b]] und [[c]] die Seiten sind, die Winkel [[A]] einschließen. Die Eingabe des Winkels in der falschen Einheit zerstört den Sinuswert: Dieser Rechner erwartet Grad, sodass 36,87 Grad nicht als 0,6435 Radiant eingegeben werden dürfen. Das Vergessen der Division durch zwei verdoppelt die Antwort. Und die Eingabe eines rechten Winkels oder eines sonst nicht spitzen Winkels in das Feld für spitze Winkel beschreibt keine gültige Eingabe für diesen Modus; der Winkel muss strikt zwischen 0 und 90 Grad liegen." }
        ]
      },
      "sec-angle-b": {
        h2: "Fläche des rechtwinkligen Dreiecks aus Seite a, Hypotenuse c und Winkel B",
        blocks: [
          { kind: "p", text: "Dieser Modus verwendet den anderen spitzen Winkel und seine zwei anliegenden Seiten: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. Es ist der Flächenvariation-(Winkel-B)-Modus des Rechners." },
          { kind: "h3", text: "Warum funktioniert diese Formel?" },
          { kind: "p", text: "Die Seiten [[a]] und [[c]] schließen Winkel [[B]] ein. Ausgehend von der allgemeinen Formel [[K=\\frac12 xy\\sin(\\theta)]] und dem Einsetzen von [[x=a]], [[y=c]], [[\\theta=B]] ergibt sich [[K=\\frac12 ac\\sin(B)]]. Die Struktur ist identisch mit der Winkel-A-Formel; nur die Bezeichnungen wandern, weil sich die Geometrie der beiden spitzen Winkel spiegelt." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Dasselbe 3-4-5-Dreieck" },
          { kind: "p", text: "Gegeben [[a=3\\text{ m}]], [[c=5\\text{ m}]] und [[B\\approx53.13^\\circ]]. Da [[\\sin(53.13^\\circ)\\approx0.8]] gilt, berechnen Sie: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Das Ergebnis stimmt mit der Kathetenmethode und der Winkel-A-Methode überein, wie es muss: Alle drei beschreiben dasselbe Dreieck." },
          { kind: "h3", text: "Wie hängen die Winkel A und B zusammen?" },
          { kind: "p", text: "Die beiden spitzen Winkel sind komplementär: [[[\\boxed{A+B=90^\\circ}]]]. Daraus ergeben sich die Identitäten [[\\sin(A)=\\cos(B)]] und [[\\sin(B)=\\cos(A)]]. Im 3-4-5-Dreieck gilt [[\\sin(A)=0.6=\\cos(B)]] und [[\\sin(B)=0.8=\\cos(A)]]. Diese Beziehungen erklären, warum beide winkelbasierten Modi dieselbe Fläche berechnen, wenn ihre Eingaben konsistent sind: Der Sinus des einen Modus ist der Kosinus des anderen Modus, und die Geometrie des Dreiecks ist unverändert, von welchem spitzen Winkel man auch ausgeht." },
          { kind: "h3", text: "Häufige Fehler im Winkel-B-Modus" },
          { kind: "p", text: "Hier erscheinen die spiegelbildlichen Fehler: die Verwendung von Seite [[b]] statt Seite [[a]], die Paarung von Winkel [[B]] mit der falschen Seite und die Verwechslung der beiden spitzen Winkel miteinander. Das Vergessen der Sinusfunktion oder das Vergessen der Division durch zwei sind dieselben Rechenfehler wie im Winkel-A-Modus. Schließlich erzeugt ein Winkel, der nicht zum gemessenen Dreieck passt, zum Beispiel die Eingabe von 36,87 Grad, wo 53,13 Grad hingehören, stillschweigend eine falsche, aber plausibel aussehende Fläche, also prüfen Sie immer, dass der Winkel zum Seitenpaar passt." }
        ]
      },
      "sec-inradius": {
        h2: "Fläche des rechtwinkligen Dreiecks aus Inkreisradius und Halbumfang",
        blocks: [
          { kind: "p", text: "Diese Methode benötigt nur zwei Zahlen, den Inkreisradius [[r]] und den Halbumfang [[s]]: [[[\\boxed{K=rs}]]]. Der Inkreisradius ist der Radius des Kreises, der in das Dreieck einbeschrieben ist, des Kreises, der alle drei Seiten berührt. Der Halbumfang ist die Hälfte des Dreiecksumfangs: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Es ist der Flächen-aus-Halbumfang-Modus des Rechners." },
          { kind: "h3", text: "Warum ist die Fläche gleich Inkreisradius mal Halbumfang?" },
          { kind: "p", text: "Verbinden Sie den Inkreismittelpunkt, den Mittelpunkt des einbeschriebenen Kreises, mit allen drei Ecken. Dies teilt das Dreieck in drei kleinere Dreiecke. Jedes kleinere Dreieck hat dieselbe senkrechte Höhe [[r]], weil der Inkreisradius der senkrechte Abstand vom Inkreismittelpunkt zu jeder Seite ist. Das Addieren ihrer Flächen ergibt [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Klammern Sie [[r/2]] aus: [[K=\\frac12 r(a+b+c)]]. Da [[s=(a+b+c)/2]] gilt, folgt [[[\\boxed{K=rs}]]]. Diese Beziehung gilt für jedes gültige Dreieck, nicht nur für ein rechtwinkliges, sofern der richtige Inkreisradius und Halbumfang bekannt sind." },
          { kind: "h3", text: "Den Inkreisradius eines rechtwinkligen Dreiecks finden" },
          { kind: "p", text: "Für ein rechtwinkliges Dreieck gibt es eine praktische Abkürzung: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Betrachten Sie sie als Abkürzung für rechtwinklige Dreiecke, nicht als allgemeine Inkreisradiusformel: Für ein allgemeines Dreieck kommt der Inkreisradius aus [[r=K/s]], was zirkulär ist, wenn Sie die Fläche finden wollen. Die Abkürzung funktioniert, weil die zwei Tangentenabschnitte vom Scheitel des rechten Winkels gleich lang sind und die Algebra für den 90-Grad-Fall sauber zusammenfällt." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Ein 3-4-5-Dreieck" },
          { kind: "p", text: "Gegeben [[a=3]], [[b=4]], [[c=5]]. Zuerst der Halbumfang: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]. Dann der Inkreisradius: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]. Die Fläche ist [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Die Antwort stimmt mit der Kathetenformel überein und bestätigt, dass die Inkreisbetrachtung und die Kathetenbetrachtung dasselbe Dreieck beschreiben." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Ein 5-12-13-Dreieck" },
          { kind: "p", text: "Gegeben [[a=5]], [[b=12]], [[c=13]]. Halbumfang: [[s=(5+12+13)/2=15]]. Inkreisradius: [[r=(5+12-13)/2=2]]. Fläche: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Prüfen Sie mit der Kathetenformel: [[K=(5\\times12)/2=30]]. Beide Methoden stimmen überein, was das erwartete Ergebnis ist, wann immer die Seitenmessungen konsistent sind." },
          { kind: "h3", text: "Häufige Fehler" },
          { kind: "p", text: "Die Verwechslung von Inkreisradius und Umkreisradius ist der typische Fehler: Der Inkreisradius berührt die Seiten von innen, während der Umkreisradius die Ecken von außen erreicht, und es sind verschiedene Zahlen. Die Verwendung des vollen Umfangs statt des Halbumfangs verdoppelt die Antwort. Die Anwendung der Abkürzung für den rechtwinkligen Inkreisradius [[r=(a+b-c)/2]] auf ein nicht rechtwinkliges Dreieck erzeugt einen bedeutungslosen Wert. Das Vergessen, dass das Produkt [[rs]] Quadratmaße hat, und die Einspeisung inkonsistenter Seitenmessungen in die [[r]]- und [[s]]-Berechnungen vervollständigen die üblichen Fehlschläge." }
        ]
      },
      "sec-altitude": {
        h2: "Fläche des rechtwinkligen Dreiecks aus Hypotenuse und Höhe",
        blocks: [
          { kind: "p", text: "Diese Methode verwendet die Hypotenuse [[c]] als Basis und die senkrechte Höhe [[h]] als Höhe: [[[\\boxed{K=\\frac{ch}{2}}]]]. Es ist der Flächenvariation-(Höhen)-Modus des Rechners." },
          { kind: "h3", text: "Was ist die Höhe?" },
          { kind: "p", text: "Eine Höhe ist eine senkrechte Linie, die von einem Scheitel zur gegenüberliegenden Seite gezogen wird. In diesem Modus beginnt die Höhe am Scheitel des rechten Winkels [[C]] und trifft die Hypotenuse unter 90 Grad. Sie ist nicht dasselbe wie eine der Katheten [[a]] oder [[b]]: Die Katheten verlaufen entlang der Dreieckskanten, während die Höhe ins Innere fällt und auf der Hypotenuse landet. Die Markierung des rechten Winkels dort, wo [[h]] auf [[c]] trifft, ist die visuelle Garantie dafür, dass die Senkrechtheitsbedingung erfüllt ist." },
          { kind: "h3", text: "Warum funktioniert die Formel?" },
          { kind: "p", text: "Es ist die allgemeine Basis-Höhen-Formel mit einer bestimmten Basiswahl. Gehen Sie von [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]] aus. Wählen Sie die Hypotenuse als Basis, [[\\text{base}=c]], und die senkrechte Höhe als Höhe, [[\\text{height}=h]]. Daher [[K=ch/2]]. Nichts an dieser Herleitung ist spezifisch für rechtwinklige Dreiecke: Die Fläche jedes Dreiecks lässt sich so schreiben, aber die Kathetenformel des rechtwinkligen Dreiecks ist einfach schneller, wenn die Katheten bekannt sind." },
          { kind: "h3", text: "Vollständig durchgerechnetes Beispiel: Ein 6-8-10-Dreieck" },
          { kind: "p", text: "Gegeben [[c=10\\text{ m}]] und [[h=4.8\\text{ m}]]. Berechnen Sie: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Dies ist dieselbe Fläche wie bei einem rechtwinkligen Dreieck, dessen Katheten 6 m und 8 m messen, da [[(6\\times8)/2=24]] gilt. Zwei verschiedene Beschreibungen, eine Fläche." },
          { kind: "h3", text: "Wie kann die Höhe berechnet werden?" },
          { kind: "p", text: "Wenn beide Katheten und die Hypotenuse bekannt sind, folgt die Höhe aus dem Gleichsetzen der beiden Flächenformeln: [[ab/2=ch/2]], also [[[\\boxed{h=\\frac{ab}{c}}]]]. Für das 6-8-10-Dreieck: [[h=(6\\times8)/10=4.8\\text{ m}]]. Die Höhe ist kürzer als die Hypotenuse, wie sie muss: Die Senkrechte ist der kürzeste Weg vom Scheitel zur Linie. Beachten Sie, dass der Höhenmodus keine fehlende Höhe selbst berechnet; die Höhe muss bekannt sein oder zuerst hergeleitet werden." }
        ]
      },
      "sec-choose": {
        h2: "Welche Flächenformel für das rechtwinklige Dreieck sollten Sie verwenden?",
        blocks: [
          { kind: "p", text: "Fünf Methoden, eine Fläche. Der Vergleich unten ordnet jeden Satz bekannter Messungen seiner Formel und seinem Rechnermodus zu. Wählen Sie die Zeile, die zu den Zahlen passt, die Sie bereits in der Hand haben." },
          { kind: "h3", text: "Warum die Kathetenformel oft die einfachste ist" },
          { kind: "p", text: "Die Kathetenformel benötigt nur zwei Messungen und keine Trigonometrie. Multiplizieren, halbieren, fertig. Wann immer die zwei senkrechten Seiten verfügbar sind, ist jede andere Methode ein längerer Weg zur selben Zahl." },
          { kind: "h3", text: "Wann die Sinusformel nützlich ist" },
          { kind: "p", text: "Eine winkelbasierte Methode verdient ihren Platz, wenn die verfügbaren Messungen einen spitzen Winkel, eine Kathete und die Hypotenuse umfassen, wie bei Vermessungssichtlinien oder Navigationsdreiecken. Wäre der Winkel nicht bekannt, müsste man zuerst die fehlende Kathete zurückgewinnen, bevor die Kathetenformel verwendet werden könnte; die Sinusform überspringt diesen Umweg." },
          { kind: "h3", text: "Wann die Halbumfangmethode nützlich ist" },
          { kind: "p", text: "Die Inkreisradius-Halbumfang-Formel passt zu Geometrieaufgaben, die bereits einen Inkreis einbeziehen, oder zu Situationen, in denen [[r]] und [[s]] aus früheren Schritten bekannt sind. Sie ist auch eine ausgezeichnete unabhängige Gegenprüfung: Da sie keine Rechnung mit der Kathetenformel teilt, deutet die Übereinstimmung beider stark darauf hin, dass beide stimmen." },
          { kind: "h3", text: "Wann die Höhenformel nützlich ist" },
          { kind: "p", text: "Die Höhenmethode ist die natürliche Wahl, wenn die Hypotenuse und ihre senkrechte Höhe die bekannten Größen sind, was bei Zerlegungsaufgaben vorkommt, in denen ein Dreieck entlang seiner Höhe geteilt wird. Wie die Kathetenformel ist sie eine schlichte Basis-Höhen-Berechnung ohne Trigonometrie." }
        ],
        table: {
          headers: ["Bekannte Maße", "Empfohlene Methode", "Formel"],
          rows: [
            ["Beide senkrechten Katheten [[a]], [[b]]", "Fläche aus Katheten", "[[K=ab/2]]"],
            ["Kathete [[b]], Hypotenuse [[c]], Winkel [[A]]", "Flächenvariation (Winkel A)", "[[K=bc\\sin(A)/2]]"],
            ["Kathete [[a]], Hypotenuse [[c]], Winkel [[B]]", "Flächenvariation (Winkel B)", "[[K=ac\\sin(B)/2]]"],
            ["Inkreisradius [[r]], Halbumfang [[s]]", "Fläche aus Halbumfang", "[[K=rs]]"],
            ["Hypotenuse [[c]], senkrechte Höhe [[h]]", "Flächenvariation (Höhe)", "[[K=ch/2]]"]
          ]
        },
        imgAlt: "Fünf Bereiche mit den Flächenformeln K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs und K=ch/2",
        figcaption: "Die fünf Flächenformeln und die Maße, die jede einzelne benötigt."
      },
      "sec-howto": {
        h2: "So verwenden Sie den Flächenrechner für rechtwinklige Dreiecke",
        blocks: [
          { kind: "p", text: "Befolgen Sie diese Schritte für jeden der fünf Modi. Die Wahl des richtigen Modus ist wichtiger als alles andere: Der Modus entscheidet, welche Formel läuft, sodass eine richtige Formel mit dem falschen Modus trotzdem die falsche Frage beantwortet." },
          { kind: "h3", text: "Vollständige Schritt-für-Schritt-Anleitung: Alle fünf Modi an einem 3-4-5-Dreieck" },
          { kind: "p", text: "Gegeben [[a=3]], [[b=4]], [[c=5]], mit [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] und [[h=2.4]] folgt, was jeder Modus braucht und zurückgibt. Jeder Modus gibt [[[\\boxed{K=6\\text{ square units}}]]] zurück." }
        ],
        steps: [
          "<strong>Bestimmen Sie die bereits bekannten Maße.</strong> Listen Sie auf, welche der Katheten, Hypotenuse, Winkel, Inkreisradius, Halbumfang oder Höhe Sie tatsächlich haben.",
          "<strong>Wählen Sie den Rechnermodus, der zu diesen Maßen passt.</strong> Fläche aus Katheten, Flächenvariation (Winkel A), Flächenvariation (Winkel B), Fläche aus Halbumfang oder Flächenvariation (Höhe).",
          "<strong>Lesen Sie die Beschriftungen der erforderlichen Eingabefelder.</strong> Jeder Modus zeigt nur die Felder, die seine Formel benötigt.",
          "<strong>Bestimmen Sie die Katheten, Hypotenuse, Winkel, Inkreisradius, Halbumfang oder Höhe entsprechend.</strong> Ordnen Sie jede bekannte Messung ihrer Beschriftung zu, unter Verwendung der Notation dieser Anleitung.",
          "<strong>Geben Sie die erste erforderliche Messung ein.</strong> Zum Beispiel \"Leg a\" im Kathetenmodus.",
          "<strong>Geben Sie die übrigen Messungen ein.</strong> Halten Sie die Werte in den Feldern, die ihre Beschriftungen beschreiben.",
          "<strong>Wählen Sie mit den verfügbaren Einheitenauswahlen kompatible Einheiten.</strong> Alle Längeneingaben müssen ein Einheitensystem teilen, bevor sie multipliziert werden.",
          "<strong>Geben Sie für winkelbasierte Modi den richtigen spitzen Winkel ein.</strong> Dieser Rechner erwartet Winkel in Grad. Geben Sie Winkel [[A]] im Winkel-A-Modus und Winkel [[B]] im Winkel-B-Modus ein, niemals den rechten Winkel.",
          "<strong>Prüfen Sie, dass alle Eingaben positiv sind und ein gültiges Dreieck beschreiben.</strong> Längen müssen positiv sein, und die Hypotenuse muss länger als jede Kathete sein.",
          "<strong>Klicken Sie auf Berechnen Area.</strong> Die Schaltfläche führt die Formel des gewählten Modus aus.",
          "<strong>Prüfen Sie das Flächenergebnis und die Lösungsschritte.</strong> Der Rechner zeigt die Formel, das Einsetzen und die endgültige Fläche in Quadratmaßen.",
          "<strong>Nutzen Sie die Live-Dreiecksvisualisierung, um die Beschriftungen zu prüfen.</strong> Bestätigen Sie, dass die Seiten- und Winkelbeschriftungen des Diagramms Ihren beabsichtigten Messungen entsprechen.",
          "<strong>Verwenden Sie Zurücksetzen, wenn Sie eine neue Berechnung beginnen.</strong> Die Schaltfläche Zurücksetzen löscht alle Felder, sodass die nächste Berechnung sauber beginnt."
        ],
        closingParagraphs: [
          "<strong>Fläche aus Katheten.</strong> Geben Sie \"Leg a\" = 3 und \"Leg b\" = 4 ein. Formel: [[K=ab/2]]. Einsetzen: [[K=(3\\times4)/2]]. Ergebnis: 6 Quadrateinheiten.",
          "<strong>Flächenvariation (Winkel A).</strong> Geben Sie \"Leg b\" = 4, \"Hypotenuse c\" = 5 und \"Angle A\" = 36.87 ein. Formel: [[K=bc\\sin(A)/2]]. Einsetzen: [[K=(4\\times5\\times0.6)/2]]. Ergebnis: 6 Quadrateinheiten.",
          "<strong>Flächenvariation (Winkel B).</strong> Geben Sie \"Leg a\" = 3, \"Hypotenuse c\" = 5 und \"Angle B\" = 53.13 ein. Formel: [[K=ac\\sin(B)/2]]. Einsetzen: [[K=(3\\times5\\times0.8)/2]]. Ergebnis: 6 Quadrateinheiten.",
          "<strong>Fläche aus Halbumfang.</strong> Geben Sie \"Inradius r\" = 1 und \"Semiperimeter s\" = 6 ein. Formel: [[K=rs]]. Einsetzen: [[K=1\\times6]]. Ergebnis: 6 Quadrateinheiten.",
          "<strong>Flächenvariation (Höhe).</strong> Geben Sie \"Hypotenuse c\" = 5 und \"Altitude h\" = 2.4 ein. Formel: [[K=ch/2]]. Einsetzen: [[K=(5\\times2.4)/2]]. Ergebnis: 6 Quadrateinheiten.",
          "Jeder Modus verwendet einen anderen Satz bekannter Werte, und keiner von ihnen erfordert dieselben Eingabefelder. Die gemeinsame Antwort ist der Punkt: fünf Beschreibungen, ein Dreieck, eine Fläche."
        ]
      },
      "sec-applications": {
        h2: "Anwendungen der Flächenberechnung rechtwinkliger Dreiecke im Alltag",
        blocks: [
          { kind: "p", text: "Jedes Beispiel nennt die Situation, die bekannten Messungen, den passenden Rechnermodus, warum dieser Modus passt, die Formel, das schrittweise Einsetzen, die endgültige Antwort in Quadratmaßen, eine Interpretation in einfachem Deutsch, eine Prüfidee, wo nützlich, und die Annahmen hinter dem Dreiecksmodell." },
          { kind: "h3", text: "Beispiel 1: Die Fläche eines dreieckigen Gartens berechnen" },
          { kind: "p", text: "Ein Garten enthält einen rechtwinkligen Pflanzabschnitt mit senkrechten Katheten von 6 m und 8 m. Wählen Sie Fläche aus Katheten, die natürliche Wahl, wenn beide Katheten direkt gemessen werden: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Der Abschnitt bedeckt 24 Quadratmeter Pflanzfläche. Dies setzt voraus, dass der Gartenabschnitt durch ein rechtwinkliges Dreieck mit geraden Kanten genau dargestellt wird." },
          { kind: "h3", text: "Beispiel 2: Eine dreieckige Sperrholzplatte vermessen" },
          { kind: "p", text: "Ein Zimmermann schneidet eine rechtwinklige Platte mit Katheten von 1,2 m und 0,8 m. Wählen Sie Fläche aus Katheten: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]. Die Platte bedeckt knapp einen halben Quadratmeter, was bei der Schätzung der Materialabdeckung hilft. Zuschnittzugaben und Materialverschnitt sind in dieser geometrischen Fläche nicht enthalten." },
          { kind: "h3", text: "Beispiel 3: Die Fläche eines dreieckigen Segels finden" },
          { kind: "p", text: "Ein dreieckiger Segelabschnitt hat senkrechte Katheten von 5 m und 12 m. Wählen Sie Fläche aus Katheten: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Die Formel gibt die ebene Fläche des dreieckigen Abschnitts an, nützlich für Stoffschätzungen, bevor Nähte und Krümmung berücksichtigt werden." },
          { kind: "h3", text: "Beispiel 4: Einen rechtwinkligen Grundstücksabschnitt schätzen" },
          { kind: "p", text: "Eine Grundstücksvermessung identifiziert einen rechtwinkligen Abschnitt mit senkrechten Seiten von 30 m und 40 m. Wählen Sie Fläche aus Katheten: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Dies ist die Fläche des angegebenen dreieckigen Abschnitts, nicht unbedingt die Gesamtfläche des umliegenden Grundstücks. Echte Grundstücksgrenzen erfordern möglicherweise eine detailliertere Vermessung als ein einzelnes Dreiecksmodell." },
          { kind: "h3", text: "Beispiel 5: Die Fläche eines Dachgiebels mit Winkel A berechnen" },
          { kind: "p", text: "Ein vereinfachter dreieckiger Dachabschnitt hat [[b=6\\text{ m}]], [[c=10\\text{ m}]] und [[A\\approx53.13^\\circ]]. Wählen Sie Flächenvariation (Winkel A), da eine Kathete, die Hypotenuse und der eingeschlossene Winkel die gemessenen Daten sind. Mit [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Das Ergebnis ist die Fläche des dreieckigen Querschnitts. Die gesamte Dachfläche eines echten Dachs hängt von seiner dreidimensionalen Geometrie und anderen Dachabschnitten ab." },
          { kind: "h3", text: "Beispiel 6: Die Fläche einer dreieckigen Markise finden" },
          { kind: "p", text: "Ein rechtwinkliger Markisenabschnitt hat [[b=4\\text{ m}]], [[c=5\\text{ m}]] und [[A\\approx36.87^\\circ]]. Wählen Sie Flächenvariation (Winkel A): [[K=bc\\sin(A)/2]], und mit [[\\sin(36.87^\\circ)\\approx0.6]] gilt [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Dies setzt voraus, dass die Messungen ein ebenes rechtwinkliges Dreieck beschreiben, was für eine gespannte rechteckige Markise gilt, die diagonal geschnitten wurde." },
          { kind: "h3", text: "Beispiel 7: Eine dreieckige Stützplatte mit Winkel B berechnen" },
          { kind: "p", text: "Eine Stützplatte hat [[a=3\\text{ m}]], [[c=5\\text{ m}]] und [[B\\approx53.13^\\circ]]. Wählen Sie Flächenvariation (Winkel B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Die winkelbasierte Formel findet die Fläche, ohne beide Katheten direkt einzugeben, was hilft, wenn die zweite Kathete nie gemessen wurde." },
          { kind: "h3", text: "Beispiel 8: Die Fläche eines Fachwerkabschnitts finden" },
          { kind: "p", text: "Ein rechtwinkliger Fachwerkabschnitt hat [[a=5\\text{ m}]], [[c=13\\text{ m}]] und [[B\\approx67.38^\\circ]]. Wählen Sie Flächenvariation (Winkel B). Da [[\\sin(67.38^\\circ)\\approx12/13]] gilt: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Dies ist die geometrische Fläche des dreieckigen Abschnitts, keine Berechnung der Tragfähigkeit." },
          { kind: "h3", text: "Beispiel 9: Die Fläche aus Inkreisradius und Halbumfang berechnen" },
          { kind: "p", text: "Betrachten Sie ein 3-4-5-rechtwinkliges Dreieck mit [[r=1]] und [[s=6]]. Wählen Sie Fläche aus Halbumfang: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. Inkreisradius und Halbumfang liefern einen alternativen Weg, der niemals die zwei Katheten multipliziert, und landen doch auf derselben Antwort." },
          { kind: "h3", text: "Beispiel 10: Die Fläche eines 5-12-13-dreieckigen Grundstücks finden" },
          { kind: "p", text: "Ein rechtwinkliges Grundstück hat die Seiten [[a=5]], [[b=12]], [[c=13]]. Wählen Sie Fläche aus Halbumfang. Halbumfang: [[s=(5+12+13)/2=15]]. Inkreisradius: [[r=(5+12-13)/2=2]]. Fläche: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Prüfen Sie mit der Kathetenformel: [[K=(5\\times12)/2=30]]. Beide Methoden stimmen überein, weil beide dasselbe Grundstück beschreiben." },
          { kind: "h3", text: "Beispiel 11: Die Fläche einer dreieckigen Platte aus der Höhe schätzen" },
          { kind: "p", text: "Eine dreieckige Platte wird durch ein rechtwinkliges Dreieck dargestellt, dessen Hypotenuse 10 m misst und dessen senkrechte Höhe zur Hypotenuse 4,8 m beträgt. Wählen Sie Flächenvariation (Höhe): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Die Höhe muss senkrecht zur Hypotenuse stehen: Jede andere Linie vom Scheitel zur Hypotenuse ist länger und würde die Fläche zu groß darstellen." },
          { kind: "h3", text: "Beispiel 12: Einen dreieckigen Abschnitt aus Hypotenuse und Höhe berechnen" },
          { kind: "p", text: "Ein rechtwinkliger Abschnitt hat eine Hypotenuse von 20 m und eine senkrechte Höhe von 9 m. Wählen Sie Flächenvariation (Höhe): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]. Dies ist die Fläche des Dreiecks, wenn die Messungen dasselbe gültige rechtwinklige Dreieck beschreiben, was hier der Fall ist: 9 m liegt deutlich unter der Hypotenusenlänge, wie es für eine Senkrechte sein muss." },
          { kind: "h3", text: "Praktischer Beispielvergleich" }
        ],
        table: {
          headers: ["Situation", "Bekannte Werte", "Rechnermodus", "Formel", "Endfläche", "Interpretation"],
          rows: [
            ["Gartenbeet", "Katheten 6 m, 8 m", "Fläche aus Katheten", "[[K=ab/2]]", "24 m²", "Pflanzfläche"],
            ["Sperrholzplatte", "Katheten 1,2 m, 0,8 m", "Fläche aus Katheten", "[[K=ab/2]]", "0,48 m²", "Materialabdeckung"],
            ["Segel", "Katheten 5 m, 12 m", "Fläche aus Katheten", "[[K=ab/2]]", "30 m²", "Ebene Stofffläche"],
            ["Grundstücksabschnitt", "Katheten 30 m, 40 m", "Fläche aus Katheten", "[[K=ab/2]]", "600 m²", "Abschnitt, nicht das ganze Grundstück"],
            ["Dachgiebel", "b 6 m, c 10 m, A 53,13°", "Flächenvariation (Winkel A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Nur Querschnitt"],
            ["Markise", "b 4 m, c 5 m, A 36,87°", "Flächenvariation (Winkel A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Ebene Stofffläche"],
            ["Stützplatte", "a 3 m, c 5 m, B 53,13°", "Flächenvariation (Winkel B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Keine zweite Kathete nötig"],
            ["Fachwerkabschnitt", "a 5 m, c 13 m, B 67,38°", "Flächenvariation (Winkel B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometrie, keine Tragfähigkeit"],
            ["3-4-5-Dreieck", "r 1, s 6", "Fläche aus Halbumfang", "[[K=rs]]", "6 Quadrateinheiten", "Inkreisbetrachtung der Fläche"],
            ["5-12-13-Grundstück", "r 2, s 15", "Fläche aus Halbumfang", "[[K=rs]]", "30 Quadrateinheiten", "Stimmt mit Kathetenprüfung überein"],
            ["Dreieckige Platte", "c 10 m, h 4,8 m", "Flächenvariation (Höhe)", "[[K=ch/2]]", "24 m²", "Höhe muss senkrecht stehen"],
            ["Dreieckiger Abschnitt", "c 20 m, h 9 m", "Flächenvariation (Höhe)", "[[K=ch/2]]", "90 m²", "Gültiges rechtwinkliges Dreieck"]
          ]
        },
        imgAlt: "Vier Bereiche: Garten 24 m², Dachgiebel 24 m², Fachwerk 30 m² und Paneel 24 m², jeweils mit Dreieck",
        figcaption: "Vier Praxisrechnungen: Garten, Dachgiebel, Fachwerk und Paneel, jeweils mit Dreieck und Endergebnis."
      },
      "sec-verify": {
        h2: "So prüfen Sie die Fläche eines rechtwinkligen Dreiecks",
        blocks: [
          { kind: "p", text: "Ein 3-4-5-Dreieck, fünf Methoden, eine Antwort. Gegeben [[a=3]], [[b=4]], [[c=5]], mit [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] und [[h=ab/c=12/5=2.4]]:" },
          { kind: "p", text: "<strong>Methode 1, Katheten:</strong> [[K=(3\\times4)/2=6]]. <strong>Methode 2, Winkel A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Methode 3, Winkel B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Methode 4, Inkreisradius und Halbumfang:</strong> [[K=1\\times6=6]]. <strong>Methode 5, Hypotenuse und Höhe:</strong> [[K=(5\\times2.4)/2=6]]." },
          { kind: "p", text: "Dies sind fünf mathematische Wege zu derselben geometrischen Größe. Die Fläche des Dreiecks hängt nicht davon ab, welche richtige Formel verwendet wird; sie hängt von der tatsächlichen Geometrie des Dreiecks ab. Wann immer zwei unabhängige Methoden bei Ihrem Dreieck übereinstimmen, können Sie der Zahl vertrauen." }
        ],
        imgAlt: "3-4-5-Dreieck mit fünf Bereichen: Katheten, Winkel A, Winkel B, Inkreisradius-Halbumfang, Höhe, alle mit Fläche 6",
        figcaption: "Verschiedene Eingaben, verschiedene Formeln, dieselbe Dreiecksfläche."
      },
      "sec-mistakes": {
        h2: "Häufige Fehler bei der Flächenberechnung rechtwinkliger Dreiecke",
        blocks: [
          { kind: "p", text: "Flächenfehler sind selten Rechenfehler. Es sind Beschriftungsfehler, Formelverwechslungen und Einheitenfehler. Die achtzehn unten decken fast jede falsche Antwort ab, die der Rechner auf dieser Seite erzeugen kann." },
          { kind: "h3", text: "1. Das Teilen durch zwei vergessen" },
          { kind: "p", text: "Das Multiplizieren der Katheten ohne Halbieren ergibt die Fläche des Rechtecks, nicht die des Dreiecks. Mit den Katheten 3 und 4 ist [[3\\times4=12]] falsch; [[(3\\times4)/2=6]] ist richtig. Lösung: Beenden Sie jede Katheten- oder Basis-Höhen-Berechnung mit der Division durch zwei." },
          { kind: "h3", text: "2. Die Hypotenuse als eine der senkrechten Katheten verwenden" },
          { kind: "p", text: "Die Hypotenuse ist niemals eine Kathete. Die Eingabe von c = 5 als Kathete mit der anderen Kathete 3 ergibt [[(5\\times3)/2=7.5]] statt 6. Lösung: Bestimmen Sie zuerst die längste Seite und reservieren Sie sie für das Hypotenusenfeld." },
          { kind: "h3", text: "3. Winkel A mit der falschen Seite paaren" },
          { kind: "p", text: "Die Winkel-A-Formel braucht Seite [[b]], die Seite, die Winkel [[A]] mit der Hypotenuse einschließt. Die Eingabe von Seite [[a]] berechnet stattdessen das falsche Produkt. Lösung: Prüfen Sie, dass Winkel [[A]] zwischen den Seiten [[b]] und [[c]] liegt, bevor Sie Werte eingeben." },
          { kind: "h3", text: "4. Winkel B mit der falschen Seite paaren" },
          { kind: "p", text: "Das Spiegelbild: Die Winkel-B-Formel braucht Seite [[a]], nicht Seite [[b]]. Lösung: Bestätigen Sie, dass Winkel [[B]] zwischen den Seiten [[a]] und [[c]] liegt." },
          { kind: "h3", text: "5. Den falschen eingeschlossenen Winkel in einer Sinusformel verwenden" },
          { kind: "p", text: "Die Eingabe von 36,87 Grad, wo 53,13 Grad hingehören, oder umgekehrt, erzeugt eine plausible, aber falsche Fläche. Lösung: Ordnen Sie den Winkel dem Seitenpaar zu: Winkel A gehört zu [[b]] und [[c]], Winkel B zu [[a]] und [[c]]." },
          { kind: "h3", text: "6. Höhe mit einer Kathete verwechseln" },
          { kind: "p", text: "Die Höhe [[h]] fällt vom Scheitel des rechten Winkels auf die Hypotenuse; eine Kathete verläuft entlang der Dreieckskante. Die Eingabe einer Kathete als Höhe übertreibt die Höhe. Lösung: Die Höhe muss mit einer Markierung des rechten Winkels auf der Hypotenuse landen." },
          { kind: "h3", text: "7. Eine nicht senkrechte Linie als Höhe verwenden" },
          { kind: "p", text: "Jede nicht senkrechte Linie vom Scheitel zur Hypotenuse ist länger als die wahre Höhe, sodass die Fläche zu groß ausfällt. Lösung: Prüfen Sie die Senkrechtheit, durch Konstruktion oder durch die [[h=ab/c]]-Prüfung, bevor Sie den Höhenmodus verwenden." },
          { kind: "h3", text: "8. Inkreisradius mit Umkreisradius verwechseln" },
          { kind: "p", text: "Der Inkreisradius berührt die Seiten von innen; der Umkreisradius erreicht die Ecken von außen. In einem rechtwinkligen Dreieck beträgt der Umkreisradius [[c/2]], immer größer als der Inkreisradius. Die Eingabe des Umkreisradius in die [[K=rs]]-Formel bläht die Fläche auf. Lösung: Verwenden Sie [[r=(a+b-c)/2]] für den Inkreisradius des rechtwinkligen Dreiecks." },
          { kind: "h3", text: "9. Den vollen Umfang statt des Halbumfangs verwenden" },
          { kind: "p", text: "Die Formel lautet [[K=rs]] mit [[s]] als Halbumfang. Die Eingabe des vollen Umfangs 12 statt 6 im 3-4-5-Dreieck ergibt 12 statt 6. Lösung: Halbieren Sie den Umfang, bevor Sie mit [[r]] multiplizieren." },
          { kind: "h3", text: "10. Inkompatible Maßeinheiten mischen" },
          { kind: "p", text: "Katheten von 3 Metern und 40 Zentimetern sind nicht 3 und 40 in einer Formel. Lösung: Rechnen Sie jede Eingabe vor der Berechnung in eine Einheit um, zum Beispiel 3 m und 0,4 m." },
          { kind: "h3", text: "11. Quadratmeter als Meter angeben" },
          { kind: "p", text: "Eine Fläche von 6 m² ist nicht 6 m. Die Quadratmaßeinheit ist Teil der Bedeutung der Antwort: Sie sagt, wie viel Fläche, nicht wie viel Länge. Lösung: Schreiben Sie die Quadratmaßeinheit immer mit der Zahl." },
          { kind: "h3", text: "12. Den Sinuswert zu früh runden" },
          { kind: "p", text: "Die Verwendung von 0,6 für den Sinus, wenn der wahre Wert 0,6000 beträgt, ist unschädlich, aber das Runden von 0,9231 auf 0,9 mitten in der Rechnung verschiebt das Ergebnis. Lösung: Behalten Sie durch jeden Schritt die volle Genauigkeit bei und runden Sie nur die endgültige Antwort." },
          { kind: "h3", text: "13. Einen rechten Winkel oder ungültigen Winkel in ein Feld für spitze Winkel eingeben" },
          { kind: "p", text: "Die Winkelmodi erwarten einen spitzen Winkel zwischen 0 und 90 Grad. Die Eingabe von 90 Grad oder eines negativen Werts beschreibt keine gültige Eingabe für diese Modi. Lösung: Geben Sie den spitzen Winkel ein, den das Dreieck tatsächlich hat, in Grad." },
          { kind: "h3", text: "14. Annehmen, dass alle fünf Modi dieselben Messungen erfordern" },
          { kind: "p", text: "Jeder Modus fragt nach einem anderen Satz von Eingaben: Der Kathetenmodus braucht zwei Katheten, der Winkel-A-Modus braucht eine Kathete, die Hypotenuse und einen Winkel, und der Halbumfangmodus braucht einen Inkreisradius und einen Halbumfang. Lösung: Lesen Sie die Feldbezeichnungen des gewählten Modus." },
          { kind: "h3", text: "15. Annehmen, dass ein größerer Umfang immer eine proportional größere Fläche bedeutet" },
          { kind: "p", text: "Umfang und Fläche skalieren unterschiedlich: Das Verdoppeln aller Seiten vervierfacht die Fläche. Ein Dreieck mit größerem Umfang kann sogar eine kleinere Fläche haben, wenn es lang und dünn ist. Lösung: Vergleichen Sie Flächen mit Flächenformeln, niemals mit Umfängen." },
          { kind: "h3", text: "16. Vergessen, dass dieselbe Fläche auf mehrere Arten berechnet werden kann" },
          { kind: "p", text: "Jede Methode als separate Tatsache zu behandeln, verpasst die eingebaute Prüfung: Wenn zwei Methoden nicht übereinstimmen, stimmt etwas mit den Eingaben oder der Moduswahl nicht. Lösung: Führen Sie eine zweite Methode aus und untersuchen Sie jede Abweichung." },
          { kind: "h3", text: "17. Seitenlängen eingeben, die das beabsichtigte Dreieck nicht beschreiben können" },
          { kind: "p", text: "Seiten, die die Pythagoras-Prüfung nicht bestehen, wie 2, 3 und 10, beschreiben überhaupt kein rechtwinkliges Dreieck. Lösung: Prüfen Sie [[a^2+b^2=c^2]], bevor Sie einer aus diesen Seiten gebauten Fläche vertrauen." },
          { kind: "h3", text: "18. Die Abkürzung für den rechtwinkligen Inkreisradius für ein nicht rechtwinkliges Dreieck verwenden" },
          { kind: "p", text: "Die Formel [[r=(a+b-c)/2]] ist aus der 90-Grad-Geometrie hergeleitet. Ihre Anwendung auf ein spitzwinkliges oder stumpfwinkliges Dreieck erzeugt einen bedeutungslosen Inkreisradius. Lösung: Verwenden Sie diese Abkürzung nur, wenn das Dreieck als rechtwinklig bestätigt ist." },
          { kind: "h3", text: "Falsch gegen richtig: Ein konkretes Beispiel" },
          { kind: "p", text: "Gegeben [[a=3]] und [[b=4]] überspringt eine falsche Berechnung das Halbieren: [[K=3\\times4=12]]. Das ist die Fläche des entsprechenden 3-mal-4-Rechtecks, nicht des rechtwinkligen Dreiecks. Die richtige Berechnung ist [[K=(3\\times4)/2=6]]. Das Dreieck nimmt die Hälfte des Rechtecks ein, sodass die Division durch zwei aus einer Rechtecksantwort eine Dreiecksantwort macht." }
        ]
      },
      "sec-validate": {
        h2: "So prüfen Sie, ob Ihr Flächenergebnis gültig ist",
        blocks: [
          { kind: "p", text: "Sechs Prüfungen fangen die überwiegende Mehrheit ungültiger Ergebnisse ab, bevor sie die Seite verlassen." },
          { kind: "h3", text: "Prüfung 1: Positive Maße" },
          { kind: "p", text: "Alle erforderlichen Längen müssen positiv sein: [[a>0]], [[b>0]], [[c>0]]. Für den Inkreisradiusmodus [[r>0]] und [[s>0]], und die Höhe muss ebenfalls positiv sein. Null- oder negative Eingaben beschreiben kein Dreieck." },
          { kind: "h3", text: "Prüfung 2: Gültige Dreiecksseitenlängen" },
          { kind: "p", text: "Für ein rechtwinkliges Dreieck muss [[a^2+b^2=c^2]] gelten, und die Hypotenuse muss länger als jede Kathete sein. Wenn die Seiten diese Prüfung nicht bestehen, sind die Eingaben inkonsistent und die Fläche bedeutungslos." },
          { kind: "h3", text: "Prüfung 3: Richtige Winkel-Seiten-Paarung" },
          { kind: "p", text: "Winkel [[A]] paart sich mit den Seiten [[b]] und [[c]] in der Formel mit eingeschlossenem Winkel; Winkel [[B]] paart sich mit den Seiten [[a]] und [[c]]. Bestätigen Sie die Paarung, bevor Sie ein winkelbasiertes Ergebnis akzeptieren." },
          { kind: "h3", text: "Prüfung 4: Richtige Höhe" },
          { kind: "p", text: "Die Höhe [[h]] muss senkrecht zur Hypotenuse [[c]] stehen. Ein schneller Plausibilitätstest: Die Höhe ist immer kürzer als die Hypotenuse und kürzer als jede Kathete." },
          { kind: "h3", text: "Prüfung 5: Richtige Flächeneinheiten" },
          { kind: "p", text: "Wenn die Eingabelängen in Metern sind, muss die Fläche in Quadratmetern sein; Zentimeter ergeben Quadratzentimeter. Die Einheit der Antwort ist das Quadrat der Eingabeeinheit, niemals die Eingabeeinheit selbst." },
          { kind: "h3", text: "Prüfung 6: Gegenprüfung mit einer anderen Methode" },
          { kind: "p", text: "Verwenden Sie das 3-4-5-Dreieck, um die Kathetenformel mit der Halbumfangformel zu vergleichen: [[(3\\times4)/2=6]] und [[1\\times6=6]]. Beide müssen 6 Quadrateinheiten ergeben. Kleine Abweichungen in winkelbasierten Berechnungen können von gerundeten Winkelmessungen oder gerundeten trigonometrischen Werten stammen; größere deuten auf einen echten Fehler hin. Diese Anleitung nennt keine Genauigkeitstoleranz und keine Genauigkeitsgarantie für den Rechner: Bei der Prüfung geht es um Konsistenz, nicht um versprochene Präzision." }
        ]
      },
      "sec-conclusion": {
        h2: "Ein Dreieck, fünf Methoden, eine Fläche",
        blocks: [
          { kind: "p", text: "Jede Methode auf dieser Seite beantwortet dieselbe Frage von einem anderen Ausgangspunkt. Katheten, wenn Sie beide senkrechten Seiten haben, Sinus, wenn Sie einen eingeschlossenen Winkel haben, Inkreisradius und Halbumfang, wenn der Inkreis im Blick ist, Höhe, wenn die Hypotenuse und ihre Höhe bekannt sind. Passen Sie den Modus an Ihre Messungen an, geben Sie sie in die richtigen Felder mit kompatiblen Einheiten ein und überlassen Sie die Rechnung dem Rechner. Prüfen Sie dann mit einer zweiten Methode: Zwei Wege zur selben Zahl sind das sicherste Zeichen dafür, dass die Geometrie stimmt." }
        ]
      }
    },
    faqs: [
      { question: "Wie lautet die Formel für die Fläche eines rechtwinkligen Dreiecks?", answer: "Die Standardformel lautet K = ab/2, wobei a und b die zwei senkrechten Katheten sind. Vier gleichwertige Methoden decken andere bekannte Messungen ab: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (Inkreisradius mal Halbumfang) und K = ch/2 (Hypotenuse mal Höhe, geteilt durch zwei)." },
      { question: "Warum teilt man bei der Dreiecksflächenberechnung durch zwei?", answer: "Zwei identische rechtwinklige Dreiecke fügen sich entlang ihrer Hypotenusen zu einem Rechteck der Fläche ab zusammen. Ein Dreieck ist genau die Hälfte dieses Rechtecks, sodass die Fläche ab/2 beträgt. Die Division durch zwei ist geometrisch, nicht willkürlich, und sie erscheint in jeder Flächenmethode auf dieser Seite." },
      { question: "Kann ich die Fläche berechnen, ohne die Hypotenuse zu kennen?", answer: "Ja. Die Kathetenformel K = ab/2 braucht keine Hypotenuse, und die Inkreisradius-Halbumfang-Formel K = rs braucht ebenfalls keine. Die Hypotenuse ist nur für die winkelbasierten Modi und den Höhenmodus erforderlich." },
      { question: "Wie finde ich die Fläche mit einer Seite und einem Winkel?", answer: "Verwenden Sie die Form mit eingeschlossenem Winkel. Mit Kathete b, Hypotenuse c und Winkel A beträgt die Fläche K = bc sin(A)/2. Mit Kathete a, Hypotenuse c und Winkel B ist sie K = ac sin(B)/2. Geben Sie den Winkel in Grad ein und stellen Sie sicher, dass es der spitze Winkel zwischen den zwei bekannten Seiten ist." },
      { question: "Warum verwendet die winkelbasierte Formel den Sinus?", answer: "Die allgemeine Formel für zwei Seiten und ihren eingeschlossenen Winkel lautet K = 1/2 xy sin(theta). Der Sinus extrahiert die senkrechte Komponente einer Seite relativ zur anderen, was die wirksame Höhe ist. Für Winkel A, eingeschlossen von den Seiten b und c, ergibt das K = bc sin(A)/2." },
      { question: "Was ist der Inkreisradius eines rechtwinkligen Dreiecks?", answer: "Der Inkreisradius ist der Radius des Kreises, der in das Dreieck einbeschrieben ist und alle drei Seiten berührt. Für ein rechtwinkliges Dreieck kann er als r = (a + b - c)/2 berechnet werden. Er ist nicht der Umkreisradius, der die Ecken erreicht und in einem rechtwinkligen Dreieck c/2 beträgt." },
      { question: "Was ist der Unterschied zwischen Umfang und Halbumfang?", answer: "Der Umfang ist die Gesamtlänge der Begrenzung, a + b + c. Der Halbumfang ist die Hälfte davon, s = (a + b + c)/2. Die Flächenformel K = rs verwendet den Halbumfang; die Verwendung des vollen Umfangs würde die Antwort verdoppeln." },
      { question: "Wie berechne ich die Fläche mit Hypotenuse und Höhe?", answer: "Verwenden Sie K = ch/2, wobei c die Hypotenuse und h die senkrechte Höhe vom Scheitel des rechten Winkels zur Hypotenuse ist. Die Höhe muss die Hypotenuse unter 90 Grad treffen; sie ist keine der Katheten. Wenn nur die Katheten bekannt sind, finden Sie die Höhe zuerst mit h = ab/c." },
      { question: "Warum liefern alle fünf Flächenmethoden dasselbe Ergebnis?", answer: "Weil sie verschiedene algebraische Beschreibungen derselben geometrischen Größe sind. Die Kathetenformel, die Sinusformen, das Inkreisradius-Halbumfang-Produkt und die Hypotenuse-Höhen-Form sind für ein konsistentes rechtwinkliges Dreieck nachweislich gleich. Die Übereinstimmung zweier Methoden ist die beste Prüfung dafür, dass Eingaben und Modus korrekt sind." },
      { question: "Welche Einheiten sollte ich für die Fläche verwenden?", answer: "Quadratmaße, die zu den Eingabelängen passen: Meter ergeben Quadratmeter, Zentimeter ergeben Quadratzentimeter. Rechnen Sie alle Eingaben vor der Berechnung in eine Einheit um und geben Sie das Ergebnis mit der Quadratmaßeinheit an, niemals mit einer linearen Einheit." },
      { question: "Kann ich die Fläche berechnen, wenn ich nur die Hypotenuse kenne?", answer: "Nein. Die Hypotenuse allein bestimmt kein eindeutiges rechtwinkliges Dreieck, sodass die Fläche nicht festgelegt ist. Sie brauchen mindestens eine weitere unabhängige Messung: eine Kathete, einen spitzen Winkel, die Höhe oder den Inkreisradius mit dem Halbumfang." },
      { question: "Wie kann ich prüfen, ob meine Flächenberechnung korrekt ist?", answer: "Führen Sie eine zweite Methode am selben Dreieck aus und vergleichen Sie. Für ein 3-4-5-Dreieck ergibt die Kathetenformel (3 x 4)/2 = 6 und die Halbumfangmethode 1 x 6 = 6. Prüfen Sie außerdem, ob die Seiten den Satz des Pythagoras erfüllen, bestätigen Sie die Winkel-Seiten-Paarung und prüfen Sie, dass die Höhe senkrecht zur Hypotenuse steht." }
    ],
    faqHeading: "Häufige Fragen",
    relatedHeading: "Verwandte Rechner für rechtwinklige Dreiecke entdecken",
    relatedItems: [
      "Flächenrechner für rechtwinklige Dreiecke aus den Katheten",
      "Flächenrechner für rechtwinklige Dreiecke aus einem Winkel",
      "Flächenrechner für rechtwinklige Dreiecke aus dem Halbumfang",
      "Flächenrechner für rechtwinklige Dreiecke aus der Höhe",
      "Umfangs- und Halbumfangsrechner für rechtwinklige Dreiecke",
      "Inkreisradius- und Umkreisradiusrechner für rechtwinklige Dreiecke",
      "Seitenrechner für rechtwinklige Dreiecke"
    ]
  },
  it: {
    tocHeading: "In questa guida",
    tocItems: {
      "sec-intro": "Cos'è il calcolatore dell'area del triangolo rettangolo?",
      "sec-triangle": "Qual è l'area di un triangolo rettangolo?",
      "sec-legs": "Area del triangolo rettangolo usando i suoi due cateti",
      "sec-angle-a": "Trovare l'area del triangolo rettangolo usando il lato b, l'ipotenusa c e l'angolo A",
      "sec-angle-b": "Trovare l'area del triangolo rettangolo usando il lato a, l'ipotenusa c e l'angolo B",
      "sec-inradius": "Trovare l'area del triangolo rettangolo usando inraggio e semiperimetro",
      "sec-altitude": "Trovare l'area del triangolo rettangolo usando ipotenusa e altezza",
      "sec-choose": "Quale formula dell'area del triangolo rettangolo dovresti usare?",
      "sec-howto": "Come usare il calcolatore dell'area del triangolo rettangolo",
      "sec-applications": "Applicazioni reali del calcolo dell'area del triangolo rettangolo",
      "sec-verify": "Come verificare l'area di un triangolo rettangolo",
      "sec-mistakes": "Errori comuni nel calcolo dell'area del triangolo rettangolo",
      "sec-validate": "Come controllare se il risultato dell'area è valido",
      "sec-related": "Esplora i calcolatori correlati del triangolo rettangolo",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    sections: {
      "sec-intro": {
        h2: "Cos'è il calcolatore dell'area del triangolo rettangolo?",
        blocks: [
          { kind: "p", text: "Un calcolatore dell'area del triangolo rettangolo trova l'area bidimensionale racchiusa dai tre lati di un triangolo rettangolo. Ad esempio, un triangolo rettangolo con cateti [[a=3\\text{ m}]] e [[b=4\\text{ m}]] ha area [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]]: il triangolo occupa sei metri quadrati di superficie. L'area si misura in unità quadrate perché conta lo spazio piano, non la lunghezza." },
          { kind: "p", text: "I cateti perpendicolari semplificano enormemente il calcolo. Poiché i due cateti si incontrano a 90 gradi, un cateto può fungere da base e l'altro da altezza, quindi l'area è semplicemente la metà del loro prodotto. Questa semplicità è uno dei motivi per cui la formula dei cateti è il primo metodo che la maggior parte degli studenti impara." },
          { kind: "p", text: "Esistono diversi metodi per la stessa area perché i problemi reali forniscono misure diverse. Un falegname misura i due cateti di un pannello; un geometra misura un'ipotenusa e un angolo; un geometra che lavora con un cerchio inscritto conosce l'inraggio e il semiperimetro. Ogni metodo trasforma il proprio insieme di valori noti nella stessa area. Il calcolatore in questa pagina offre cinque modalità corrispondenti a queste situazioni: Area dai cateti, Variazione area (angolo A), Variazione area (angolo B), Area dal semiperimetro e Variazione area (altezza). Il metodo migliore è di solito quello che usa le misure già disponibili, senza imporre prima ulteriori conversioni." }
        ]
      },
      "sec-triangle": {
        h2: "Qual è l'area di un triangolo rettangolo?",
        blocks: [
          { kind: "p", text: "Questa guida usa una notazione coerente in tutto il testo: [[A]] e [[B]] sono i due angoli acuti, [[C=90^\\circ]] è l'angolo retto, il lato [[a]] è opposto all'angolo [[A]], il lato [[b]] è opposto all'angolo [[B]], il lato [[c]] è l'ipotenusa opposta all'angolo [[C]], [[h]] è l'altezza perpendicolare dal vertice [[C]] all'ipotenusa, [[r]] è l'inraggio, [[s]] è il semiperimetro e [[K]] è l'area." },
          { kind: "h3", text: "Cos'è un triangolo rettangolo?" },
          { kind: "p", text: "Un triangolo rettangolo ha un angolo di esattamente 90 gradi. I suoi due cateti si incontrano nell'angolo retto e l'ipotenusa si trova di fronte a quell'angolo. L'ipotenusa è sempre il lato più lungo e gli altri due angoli sono acuti: poiché la somma dei tre angoli è 180 gradi, [[A+B=90^\\circ]]. I due cateti sono perpendicolari, ed è questa la proprietà che rende la formula dell'area così diretta." },
          { kind: "h3", text: "Cosa significa area?" },
          { kind: "p", text: "L'area misura lo spazio bidimensionale racchiuso dai tre lati del triangolo. Differisce dal perimetro, che misura la lunghezza totale del contorno, dalla lunghezza di un lato, che misura una dimensione, e dal volume, che misura lo spazio tridimensionale. Un foglio di carta triangolare ha un'area pari alla quantità di carta che copre; una sezione triangolare di giardino ha un'area pari al terreno che occupa. Entrambe si esprimono in unità quadrate come i metri quadrati, perché l'area conta i quadrati unitari che stanno dentro la figura." },
          { kind: "h3", text: "Perché l'area si divide per due?" },
          { kind: "p", text: "Due triangoli rettangoli identici possono essere uniti lungo le ipotenuse per formare un rettangolo. Se ciascun triangolo ha cateti perpendicolari [[a]] e [[b]], il rettangolo ha area [[ab]]. Un triangolo occupa esattamente la metà di quel rettangolo, quindi [[[\\boxed{K=\\frac{ab}{2}}]]]. La divisione per due non è un trucco: è la conseguenza geometrica del fatto che un triangolo è metà di un rettangolo, e compare in una forma o nell'altra in ogni metodo di questa pagina." },
          { kind: "h3", text: "Perché lo stesso triangolo può avere cinque formule dell'area?" },
          { kind: "p", text: "L'area del triangolo non cambia quando si usa un metodo di misura diverso. I metodi partono semplicemente da valori noti diversi. Due cateti danno la formula più semplice. Un cateto, l'ipotenusa e l'angolo acuto compreso permettono una formula basata sul seno. Inraggio e semiperimetro forniscono una relazione geometrica alternativa. Ipotenusa e altezza perpendicolare usano la regola generale base-altezza. Tutti e cinque i metodi devono produrre la stessa area quando gli input descrivono lo stesso triangolo valido, e questa concordanza è la verifica più forte disponibile: due metodi, un triangolo, una risposta." }
        ],
        imgAlt: "Triangolo rettangolo: cateti a e b, ipotenusa c, angolo retto C, altezza h all'ipotenusa, K = ab/2",
        figcaption: "Anatomia di un triangolo rettangolo: C è l'angolo retto, a e b sono i cateti, c è l'ipotenusa e h è l'altezza all'ipotenusa."
      },
      "sec-legs": {
        h2: "Area del triangolo rettangolo usando i suoi due cateti",
        blocks: [
          { kind: "p", text: "La formula dei cateti è il punto di partenza per l'area del triangolo rettangolo: [[[\\boxed{K=\\frac{ab}{2}}]]]. Richiede solo i due lati perpendicolari, e tutto il resto in questa pagina può essere visto come una variazione che recupera la stessa quantità da input diversi." },
          { kind: "h3", text: "Quando usare la formula dei cateti?" },
          { kind: "p", text: "Usa questo metodo ogni volta che entrambi i lati perpendicolari sono noti. Non è richiesto prima alcun calcolo di angoli, ipotenusa, inraggio o altezza. La misura diretta dei due cateti è comune in falegnameria, nella posa di piastrelle e nei problemi scolastici, ed è per questo che la modalità Area dai cateti è la scelta predefinita per la maggior parte dei calcoli quotidiani." },
          { kind: "h3", text: "Come funziona la formula" },
          { kind: "p", text: "I due cateti formano la base e l'altezza perpendicolare del triangolo. La formula generale dell'area del triangolo è [[K=\\frac{\\text{base}\\times\\text{height}}{2}]]; poiché i cateti sono perpendicolari, base e altezza possono essere presi direttamente come [[a]] e [[b]], ottenendo [[K=ab/2]]. Non è coinvolta alcuna trigonometria e non serve trovare prima un altro lato." },
          { kind: "h3", text: "Esempio svolto completo: un triangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3\\text{ m}]] e [[b=4\\text{ m}]]. Passo 1: scrivi la formula [[K=ab/2]]. Passo 2: sostituisci i valori, [[K=(3\\times4)/2]]. Passo 3: moltiplica, [[K=12/2]]. Passo 4: dividi per due, [[[\\boxed{K=6\\text{ m}^2}]]]. La risposta è sei metri quadrati, non sei metri: l'unità porta con sé il significato della grandezza." },
          { kind: "h3", text: "Si possono scambiare i due cateti?" },
          { kind: "p", text: "Sì. La moltiplicazione è commutativa, quindi [[ab=ba]] e di conseguenza [[ab/2=ba/2]]. L'area resta invariata se i due cateti vengono inseriti nell'ordine opposto, purché i campi del calcolatore corrispondano alle lunghezze corrette dei cateti. Questa simmetria vale solo per i cateti: scambiare un cateto con l'ipotenusa romperebbe la formula." },
          { kind: "h3", text: "E se i cateti hanno valori decimali?" },
          { kind: "p", text: "Le misure decimali funzionano nella stessa formula. Con [[a=3.5\\text{ cm}]] e [[b=9.2\\text{ cm}]]: [[K=(3.5\\times9.2)/2]], [[K=32.2/2]], [[[\\boxed{K=16.1\\text{ cm}^2}]]]. L'aritmetica è identica; cambia solo la precisione degli input, quindi conserva abbastanza cifre e arrotonda alla fine." },
          { kind: "h3", text: "E se un cateto è sconosciuto?" },
          { kind: "p", text: "Un cateto mancante a volte può essere trovato prima usando il teorema di Pitagora o un angolo noto, e la formula dei cateti applicata dopo. Nota che la modalità cateti richiede entrambi i cateti: non recupera automaticamente un lato mancante. Se sono noti solo un cateto e l'ipotenusa, il calcolo del cateto mancante è un passo separato prima che questa modalità possa essere usata." }
        ]
      },
      "sec-angle-a": {
        h2: "Trovare l'area del triangolo rettangolo usando il lato b, l'ipotenusa c e l'angolo A",
        blocks: [
          { kind: "p", text: "Questo metodo è utile quando sono noti il lato [[b]], l'ipotenusa [[c]] e l'angolo acuto [[A]]: [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]. È la modalità Variazione area (angolo A) del calcolatore." },
          { kind: "h3", text: "Perché questa formula usa il seno?" },
          { kind: "p", text: "La formula generale dell'area per due lati e l'angolo compreso è [[K=\\frac12 xy\\sin(\\theta)]]. L'angolo [[A]] si trova tra i lati [[b]] e [[c]], quindi sostituendo [[x=b]], [[y=c]], [[\\theta=A]] si ottiene [[K=\\frac12 bc\\sin(A)]]. Il seno tiene conto della componente perpendicolare di un lato: solo la parte del lato [[c]] perpendicolare a [[b]] contribuisce all'altezza, e quella parte perpendicolare è [[c\\sin(A)]]." },
          { kind: "h3", text: "Esempio svolto completo: un triangolo 3-4-5" },
          { kind: "p", text: "Dati [[b=4\\text{ m}]], [[c=5\\text{ m}]] e [[A\\approx36.87^\\circ]]. Poiché [[\\sin(36.87^\\circ)\\approx0.6]], sostituisci: [[K=(4\\times5\\times0.6)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Questo concorda con la formula dei cateti perché 0,6 è esattamente il rapporto [[a/c=3/5]]: la forma con il seno è la forma dei cateti sotto mentite spoglie, con [[c\\sin(A)]] nel ruolo dell'altro cateto." },
          { kind: "h3", text: "Cosa succede se l'angolo cambia?" },
          { kind: "p", text: "Il fattore seno cambia l'area quando le due lunghezze dei lati e l'angolo compreso vengono variati all'interno di un triangolo valido. Non immaginare un angolo che cambia mentre ogni lunghezza dei lati resta fissa: in un triangolo reale lati e angoli sono collegati, quindi cambiare l'angolo rimodella il triangolo e sposta l'area con sé. L'angolo compreso è essenziale per questa formula proprio perché codifica quanto il triangolo è aperto o chiuso." },
          { kind: "h3", text: "Errori comuni nella modalità angolo A" },
          { kind: "p", text: "Cinque errori ricorrono in questa modalità. Abbinare l'angolo [[A]] al lato sbagliato è il più frequente: questa formula richiede il lato [[b]], non il lato [[a]], perché [[b]] e [[c]] sono i lati che racchiudono l'angolo [[A]]. Inserire l'angolo nell'unità sbagliata distrugge il valore del seno: questo calcolatore si aspetta gradi, quindi 36,87 gradi non devono essere inseriti come 0,6435 radianti. Dimenticare di dividere per due raddoppia la risposta. E inserire un angolo retto o un angolo altrimenti non acuto nel campo dell'angolo acuto non descrive alcun input valido per questa modalità; l'angolo deve essere strettamente compreso tra 0 e 90 gradi." }
        ]
      },
      "sec-angle-b": {
        h2: "Trovare l'area del triangolo rettangolo usando il lato a, l'ipotenusa c e l'angolo B",
        blocks: [
          { kind: "p", text: "Questa modalità usa l'altro angolo acuto e i suoi due lati adiacenti: [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]. È la modalità Variazione area (angolo B) del calcolatore." },
          { kind: "h3", text: "Perché questa formula funziona?" },
          { kind: "p", text: "I lati [[a]] e [[c]] racchiudono l'angolo [[B]]. Partendo dalla formula generale [[K=\\frac12 xy\\sin(\\theta)]] e sostituendo [[x=a]], [[y=c]], [[\\theta=B]] si ottiene [[K=\\frac12 ac\\sin(B)]]. La struttura è identica alla formula dell'angolo A; si spostano solo le etichette, perché la geometria dei due angoli acuti si rispecchia." },
          { kind: "h3", text: "Esempio svolto completo: lo stesso triangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3\\text{ m}]], [[c=5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Poiché [[\\sin(53.13^\\circ)\\approx0.8]], calcola: [[K=(3\\times5\\times0.8)/2]], [[K=12/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Il risultato coincide con il metodo dei cateti e con il metodo dell'angolo A, come deve: tutti e tre descrivono lo stesso triangolo." },
          { kind: "h3", text: "Come sono correlati gli angoli A e B?" },
          { kind: "p", text: "I due angoli acuti sono complementari: [[[\\boxed{A+B=90^\\circ}]]]. Da qui le identità [[\\sin(A)=\\cos(B)]] e [[\\sin(B)=\\cos(A)]]. Nel triangolo 3-4-5, [[\\sin(A)=0.6=\\cos(B)]] e [[\\sin(B)=0.8=\\cos(A)]]. Queste relazioni spiegano perché entrambe le modalità basate sugli angoli calcolano la stessa area quando i loro input sono coerenti: il seno di una modalità è il coseno dell'altra, e la geometria del triangolo resta invariata da qualsiasi angolo acuto si parta." },
          { kind: "h3", text: "Errori comuni nella modalità angolo B" },
          { kind: "p", text: "Qui compaiono gli errori speculari: usare il lato [[b]] invece del lato [[a]], abbinare l'angolo [[B]] al lato sbagliato e confondere i due angoli acuti tra loro. Dimenticare la funzione seno o dimenticare di dividere per due sono gli stessi scivoloni aritmetici della modalità angolo A. Infine, un angolo che non corrisponde al triangolo misurato, ad esempio inserire 36,87 gradi dove andrebbero 53,13 gradi, produce silenziosamente un'area sbagliata ma dall'aspetto plausibile, quindi controlla sempre che l'angolo corrisponda alla coppia di lati." }
        ]
      },
      "sec-inradius": {
        h2: "Trovare l'area del triangolo rettangolo usando inraggio e semiperimetro",
        blocks: [
          { kind: "p", text: "Questo metodo richiede solo due numeri, l'inraggio [[r]] e il semiperimetro [[s]]: [[[\\boxed{K=rs}]]]. L'inraggio è il raggio del cerchio inscritto nel triangolo, il cerchio che tocca tutti e tre i lati. Il semiperimetro è metà del perimetro del triangolo: [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. È la modalità Area dal semiperimetro del calcolatore." },
          { kind: "h3", text: "Perché l'area è uguale a inraggio per semiperimetro?" },
          { kind: "p", text: "Collega l'incentro, il centro del cerchio inscritto, a tutti e tre i vertici. Questo divide il triangolo in tre triangoli più piccoli. Ogni triangolo più piccolo ha la stessa altezza perpendicolare [[r]], perché l'inraggio è la distanza perpendicolare dall'incentro a ciascun lato. Sommando le loro aree si ottiene [[K=\\frac12 ar+\\frac12 br+\\frac12 cr]]. Raccogliendo [[r/2]]: [[K=\\frac12 r(a+b+c)]]. Poiché [[s=(a+b+c)/2]], segue che [[[\\boxed{K=rs}]]]. Questa relazione vale per qualsiasi triangolo valido, non solo per un triangolo rettangolo, purché siano noti l'inraggio e il semiperimetro corretti." },
          { kind: "h3", text: "Trovare l'inraggio di un triangolo rettangolo" },
          { kind: "p", text: "Per un triangolo rettangolo esiste una scorciatoia pratica: [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Trattala come una scorciatoia per i triangoli rettangoli, non come la formula generale dell'inraggio: per un triangolo generico l'inraggio deriva da [[r=K/s]], che è circolare se stai cercando di trovare l'area. La scorciatoia funziona perché i due segmenti di tangente dal vertice dell'angolo retto sono uguali e l'algebra si semplifica elegantemente nel caso di 90 gradi." },
          { kind: "h3", text: "Esempio svolto completo: un triangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3]], [[b=4]], [[c=5]]. Prima il semiperimetro: [[s=(3+4+5)/2]], [[[\\boxed{s=6}]]]. Poi l'inraggio: [[r=(3+4-5)/2]], [[[\\boxed{r=1}]]]. L'area è [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. La risposta coincide con la formula dei cateti, confermando che la visione del cerchio inscritto e la visione dei cateti descrivono lo stesso triangolo." },
          { kind: "h3", text: "Esempio svolto completo: un triangolo 5-12-13" },
          { kind: "p", text: "Dati [[a=5]], [[b=12]], [[c=13]]. Semiperimetro: [[s=(5+12+13)/2=15]]. Inraggio: [[r=(5+12-13)/2=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifica con la formula dei cateti: [[K=(5\\times12)/2=30]]. Entrambi i metodi concordano, che è il risultato atteso ogni volta che le misure dei lati sono coerenti." },
          { kind: "h3", text: "Errori comuni" },
          { kind: "p", text: "Confondere l'inraggio con il circumraggio è l'errore tipico: l'inraggio tocca i lati dall'interno, mentre il circumraggio raggiunge i vertici dall'esterno, e sono numeri diversi. Usare il perimetro intero invece del semiperimetro raddoppia la risposta. Applicare la scorciatoia dell'inraggio per triangoli rettangoli [[r=(a+b-c)/2]] a un triangolo non rettangolo produce un valore senza senso. Dimenticare che il prodotto [[rs]] ha unità quadrate, e inserire misure dei lati incoerenti nei calcoli di [[r]] e [[s]], completano gli errori comuni." }
        ]
      },
      "sec-altitude": {
        h2: "Trovare l'area del triangolo rettangolo usando ipotenusa e altezza",
        blocks: [
          { kind: "p", text: "Questo metodo usa l'ipotenusa [[c]] come base e l'altezza perpendicolare [[h]] come altezza: [[[\\boxed{K=\\frac{ch}{2}}]]]. È la modalità Variazione area (altezza) del calcolatore." },
          { kind: "h3", text: "Cos'è l'altezza?" },
          { kind: "p", text: "Un'altezza è una linea perpendicolare tracciata da un vertice al lato opposto. In questa modalità l'altezza parte dal vertice dell'angolo retto [[C]] e incontra l'ipotenusa a 90 gradi. Non è la stessa cosa di nessuno dei due cateti [[a]] o [[b]]: i cateti giacciono lungo i bordi del triangolo, mentre l'altezza scende all'interno e atterra sull'ipotenusa. Il contrassegno dell'angolo retto dove [[h]] incontra [[c]] è la garanzia visiva che la condizione di perpendicolarità sia soddisfatta." },
          { kind: "h3", text: "Perché la formula funziona?" },
          { kind: "p", text: "È la formula generale base-altezza con una particolare scelta di base. Parti da [[K=\\frac12\\times\\text{base}\\times\\text{perpendicular height}]]. Scegli l'ipotenusa come base, [[\\text{base}=c]], e l'altezza perpendicolare come altezza, [[\\text{height}=h]]. Quindi [[K=ch/2]]. Nulla di questa derivazione è specifico dei triangoli rettangoli: l'area di qualsiasi triangolo può essere scritta così, ma la formula dei cateti del triangolo rettangolo è semplicemente più veloce quando i cateti sono noti." },
          { kind: "h3", text: "Esempio svolto completo: un triangolo 6-8-10" },
          { kind: "p", text: "Dati [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]. Calcola: [[K=(10\\times4.8)/2]], [[K=48/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Questa è la stessa area di un triangolo rettangolo i cui cateti misurano 6 m e 8 m, poiché [[(6\\times8)/2=24]]. Due descrizioni diverse, un'area." },
          { kind: "h3", text: "Come si può calcolare l'altezza?" },
          { kind: "p", text: "Quando sono noti entrambi i cateti e l'ipotenusa, l'altezza segue dall'uguagliare le due formule dell'area: [[ab/2=ch/2]], quindi [[[\\boxed{h=\\frac{ab}{c}}]]]. Per il triangolo 6-8-10: [[h=(6\\times8)/10=4.8\\text{ m}]]. L'altezza è più corta dell'ipotenusa, come deve essere: la perpendicolare è il percorso più breve dal vertice alla retta. Nota che la modalità altezza non calcola da sola un'altezza mancante; l'altezza deve essere nota o derivata prima." }
        ]
      },
      "sec-choose": {
        h2: "Quale formula dell'area del triangolo rettangolo dovresti usare?",
        blocks: [
          { kind: "p", text: "Cinque metodi, un'area. Il confronto qui sotto associa ciascun insieme di misure note alla sua formula e alla modalità del calcolatore. Scegli la riga che corrisponde ai numeri che hai già in mano." },
          { kind: "h3", text: "Perché la formula dei cateti è spesso la più semplice" },
          { kind: "p", text: "La formula dei cateti richiede solo due misure e nessuna trigonometria. Moltiplica, dimezza, fatto. Ogni volta che i due lati perpendicolari sono disponibili, ogni altro metodo è una strada più lunga verso lo stesso numero." },
          { kind: "h3", text: "Quando la formula del seno è utile" },
          { kind: "p", text: "Un metodo basato sugli angoli guadagna il suo posto quando le misure disponibili includono un angolo acuto, un cateto e l'ipotenusa, come nelle linee di mira topografiche o nei triangoli di navigazione. Se l'angolo non fosse noto, dovresti prima recuperare il cateto mancante prima che la formula dei cateti possa essere usata; la forma con il seno salta quella deviazione." },
          { kind: "h3", text: "Quando il metodo del semiperimetro è utile" },
          { kind: "p", text: "La formula inraggio-semiperimetro si adatta ai problemi di geometria che coinvolgono già un cerchio inscritto, o alle situazioni in cui [[r]] e [[s]] sono noti da passi precedenti. È anche un ottimo controllo incrociato indipendente: poiché non condivide alcun calcolo con la formula dei cateti, la concordanza tra le due suggerisce fortemente che entrambe siano corrette." },
          { kind: "h3", text: "Quando la formula dell'altezza è utile" },
          { kind: "p", text: "Il metodo dell'altezza è la scelta naturale quando l'ipotenusa e la sua altezza perpendicolare sono le quantità note, come accade nei problemi di scomposizione in cui un triangolo viene diviso lungo la sua altezza. Come la formula dei cateti, è un semplice calcolo base-altezza senza trigonometria." }
        ],
        table: {
          headers: ["Misure note", "Metodo consigliato", "Formula"],
          rows: [
            ["Entrambi i cateti perpendicolari [[a]], [[b]]", "Area dai cateti", "[[K=ab/2]]"],
            ["Cateto [[b]], ipotenusa [[c]], angolo [[A]]", "Variazione area (angolo A)", "[[K=bc\\sin(A)/2]]"],
            ["Cateto [[a]], ipotenusa [[c]], angolo [[B]]", "Variazione area (angolo B)", "[[K=ac\\sin(B)/2]]"],
            ["Inraggio [[r]], semiperimetro [[s]]", "Area dal semiperimetro", "[[K=rs]]"],
            ["Ipotenusa [[c]], altezza perpendicolare [[h]]", "Variazione area (altezza)", "[[K=ch/2]]"]
          ]
        },
        imgAlt: "Cinque pannelli con le formule dell'area K=ab/2, K=bc sin(A)/2, K=ac sin(B)/2, K=rs e K=ch/2",
        figcaption: "Le cinque formule dell'area e le misure richieste da ciascuna."
      },
      "sec-howto": {
        h2: "Come usare il calcolatore dell'area del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Segui questi passaggi per ciascuna delle cinque modalità. Scegliere la modalità corretta conta più di ogni altra cosa: la modalità decide quale formula viene eseguita, quindi una formula corretta con la modalità sbagliata risponde comunque alla domanda sbagliata." },
          { kind: "h3", text: "Procedura completa: tutte e cinque le modalità su un triangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3]], [[b=4]], [[c=5]], con [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] e [[h=2.4]], ecco cosa ciascuna modalità richiede e restituisce. Ogni modalità restituisce [[[\\boxed{K=6\\text{ square units}}]]]." }
        ],
        steps: [
          "<strong>Identifica le misure già note.</strong> Elenca quali tra cateti, ipotenusa, angoli, inraggio, semiperimetro o altezza hai effettivamente.",
          "<strong>Seleziona la modalità del calcolatore corrispondente a quelle misure.</strong> Area dai cateti, Variazione area (angolo A), Variazione area (angolo B), Area dal semiperimetro o Variazione area (altezza).",
          "<strong>Leggi le etichette dei campi di input richiesti.</strong> Ogni modalità mostra solo i campi di cui la sua formula ha bisogno.",
          "<strong>Identifica i cateti, l'ipotenusa, l'angolo, l'inraggio, il semiperimetro o l'altezza a seconda dei casi.</strong> Abbina ciascuna misura nota alla sua etichetta, usando la notazione di questa guida.",
          "<strong>Inserisci la prima misura richiesta.</strong> Ad esempio, \"Leg a\" nella modalità cateti.",
          "<strong>Inserisci le misure rimanenti.</strong> Mantieni i valori nei campi descritti dalle loro etichette.",
          "<strong>Seleziona unità compatibili usando i selettori di unità disponibili.</strong> Tutti gli input di lunghezza devono condividere un sistema di unità prima di essere moltiplicati.",
          "<strong>Per le modalità basate sugli angoli, inserisci l'angolo acuto corretto.</strong> Questo calcolatore si aspetta angoli in gradi. Inserisci l'angolo [[A]] nella modalità angolo A e l'angolo [[B]] nella modalità angolo B, mai l'angolo retto.",
          "<strong>Controlla che tutti gli input siano positivi e descrivano un triangolo valido.</strong> Le lunghezze devono essere positive e l'ipotenusa deve superare entrambi i cateti.",
          "<strong>Fai clic su Calcola Area.</strong> Il pulsante esegue la formula della modalità selezionata.",
          "<strong>Rivedi il risultato dell'area e i passaggi della soluzione.</strong> Il calcolatore mostra la formula, la sostituzione e l'area finale in unità quadrate.",
          "<strong>Usa la visualizzazione live del triangolo per verificare le etichette.</strong> Conferma che le etichette di lati e angoli del diagramma corrispondano alle misure previste.",
          "<strong>Usa Reimposta quando inizi un nuovo calcolo.</strong> Il pulsante Reimposta cancella tutti i campi così il calcolo successivo parte da zero."
        ],
        closingParagraphs: [
          "<strong>Area dai cateti.</strong> Inserisci \"Leg a\" = 3 e \"Leg b\" = 4. Formula: [[K=ab/2]]. Sostituzione: [[K=(3\\times4)/2]]. Risultato: 6 unità quadrate.",
          "<strong>Variazione area (angolo A).</strong> Inserisci \"Leg b\" = 4, \"Hypotenuse c\" = 5, \"Angle A\" = 36.87. Formula: [[K=bc\\sin(A)/2]]. Sostituzione: [[K=(4\\times5\\times0.6)/2]]. Risultato: 6 unità quadrate.",
          "<strong>Variazione area (angolo B).</strong> Inserisci \"Leg a\" = 3, \"Hypotenuse c\" = 5, \"Angle B\" = 53.13. Formula: [[K=ac\\sin(B)/2]]. Sostituzione: [[K=(3\\times5\\times0.8)/2]]. Risultato: 6 unità quadrate.",
          "<strong>Area dal semiperimetro.</strong> Inserisci \"Inradius r\" = 1 e \"Semiperimeter s\" = 6. Formula: [[K=rs]]. Sostituzione: [[K=1\\times6]]. Risultato: 6 unità quadrate.",
          "<strong>Variazione area (altezza).</strong> Inserisci \"Hypotenuse c\" = 5 e \"Altitude h\" = 2.4. Formula: [[K=ch/2]]. Sostituzione: [[K=(5\\times2.4)/2]]. Risultato: 6 unità quadrate.",
          "Ogni modalità usa un diverso insieme di valori noti, e nessuna di esse richiede gli stessi campi di input. La risposta condivisa è il punto: cinque descrizioni, un triangolo, un'area."
        ]
      },
      "sec-applications": {
        h2: "Applicazioni reali del calcolo dell'area del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Ogni esempio indica la situazione, le misure note, la modalità del calcolatore adatta, perché quella modalità si adatta, la formula, la sostituzione passo passo, la risposta finale in unità quadrate, una spiegazione in parole semplici, un'idea di verifica dove utile e le ipotesi dietro il modello del triangolo." },
          { kind: "h3", text: "Esempio 1: Calcolare l'area di un giardino triangolare" },
          { kind: "p", text: "Un giardino contiene una sezione di piantagione a forma di triangolo rettangolo con cateti perpendicolari di 6 m e 8 m. Scegli Area dai cateti, la scelta naturale quando entrambi i cateti sono misurati direttamente: [[K=(6\\times8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. La sezione copre 24 metri quadrati di superficie di piantagione. Questo presuppone che la sezione del giardino sia rappresentata accuratamente da un triangolo rettangolo con bordi dritti." },
          { kind: "h3", text: "Esempio 2: Misurare un pannello di compensato triangolare" },
          { kind: "p", text: "Un falegname taglia un pannello triangolare rettangolo con cateti di 1,2 m e 0,8 m. Scegli Area dai cateti: [[K=(1.2\\times0.8)/2]], [[K=0.96/2]], [[[\\boxed{K=0.48\\text{ m}^2}]]]. Il pannello copre poco meno di mezzo metro quadrato, utile per stimare la copertura del materiale. Le tolleranze di taglio e gli scarti di materiale non sono inclusi in questa area geometrica." },
          { kind: "h3", text: "Esempio 3: Trovare l'area di una vela triangolare" },
          { kind: "p", text: "Una sezione di vela triangolare ha cateti perpendicolari di 5 m e 12 m. Scegli Area dai cateti: [[K=(5\\times12)/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. La formula fornisce l'area piana della sezione triangolare, utile per le stime del tessuto prima che vengano considerate cuciture e curvature." },
          { kind: "h3", text: "Esempio 4: Stimare una sezione di terreno triangolare rettangola" },
          { kind: "p", text: "Un rilievo catastale individua una sezione triangolare rettangola con lati perpendicolari di 30 m e 40 m. Scegli Area dai cateti: [[K=(30\\times40)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Questa è l'area della sezione triangolare specificata, non necessariamente l'area totale della proprietà circostante. I confini reali dei terreni possono richiedere rilievi più dettagliati di un singolo modello triangolare." },
          { kind: "h3", text: "Esempio 5: Calcolare l'area di un timpano con l'angolo A" },
          { kind: "p", text: "Una sezione triangolare semplificata del tetto ha [[b=6\\text{ m}]], [[c=10\\text{ m}]] e [[A\\approx53.13^\\circ]]. Scegli Variazione area (angolo A), poiché un cateto, l'ipotenusa e l'angolo compreso sono i dati misurati. Con [[\\sin(53.13^\\circ)\\approx0.8]]: [[K=(6\\times10\\times0.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. Il risultato è l'area della sezione triangolare. La superficie totale di un tetto reale dipende dalla sua geometria tridimensionale e dalle altre sezioni del tetto." },
          { kind: "h3", text: "Esempio 6: Trovare l'area di una tenda da sole triangolare" },
          { kind: "p", text: "Una sezione di tenda da sole triangolare rettangola ha [[b=4\\text{ m}]], [[c=5\\text{ m}]] e [[A\\approx36.87^\\circ]]. Scegli Variazione area (angolo A): [[K=bc\\sin(A)/2]], e con [[\\sin(36.87^\\circ)\\approx0.6]], [[K=(4\\times5\\times0.6)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Questo presuppone che le misure descrivano un triangolo rettangolo piano, che vale per una tenda da sole rettangolare tesa tagliata in diagonale." },
          { kind: "h3", text: "Esempio 7: Calcolare un pannello di supporto triangolare usando l'angolo B" },
          { kind: "p", text: "Un pannello di supporto ha [[a=3\\text{ m}]], [[c=5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Scegli Variazione area (angolo B): [[K=(3\\times5\\times0.8)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. La formula basata sull'angolo trova l'area senza inserire direttamente entrambi i cateti, utile quando il secondo cateto non è mai stato misurato." },
          { kind: "h3", text: "Esempio 8: Trovare l'area di una sezione di capriata" },
          { kind: "p", text: "Una sezione di capriata triangolare rettangola ha [[a=5\\text{ m}]], [[c=13\\text{ m}]] e [[B\\approx67.38^\\circ]]. Scegli Variazione area (angolo B). Poiché [[\\sin(67.38^\\circ)\\approx12/13]]: [[K=(5\\times13\\times(12/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. Questa è l'area geometrica della sezione triangolare, non un calcolo di capacità portante strutturale." },
          { kind: "h3", text: "Esempio 9: Calcolare l'area da inraggio e semiperimetro" },
          { kind: "p", text: "Considera un triangolo rettangolo 3-4-5 con [[r=1]] e [[s=6]]. Scegli Area dal semiperimetro: [[K=rs]], [[K=1\\times6]], [[[\\boxed{K=6\\text{ square units}}]]]. L'inraggio e il semiperimetro offrono una strada alternativa che non moltiplica mai i due cateti, eppure arriva alla stessa risposta." },
          { kind: "h3", text: "Esempio 10: Trovare l'area di un lotto triangolare 5-12-13" },
          { kind: "p", text: "Un lotto triangolare rettangolo ha lati [[a=5]], [[b=12]], [[c=13]]. Scegli Area dal semiperimetro. Semiperimetro: [[s=(5+12+13)/2=15]]. Inraggio: [[r=(5+12-13)/2=2]]. Area: [[K=2\\times15]], [[[\\boxed{K=30\\text{ square units}}]]]. Verifica con la formula dei cateti: [[K=(5\\times12)/2=30]]. Entrambi i metodi concordano perché descrivono entrambi lo stesso lotto." },
          { kind: "h3", text: "Esempio 11: Stimare l'area di un pannello triangolare dall'altezza" },
          { kind: "p", text: "Un pannello triangolare è rappresentato da un triangolo rettangolo la cui ipotenusa misura 10 m e la cui altezza perpendicolare all'ipotenusa è 4,8 m. Scegli Variazione area (altezza): [[K=ch/2]], [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. L'altezza deve essere perpendicolare all'ipotenusa: qualsiasi altra linea dal vertice all'ipotenusa è più lunga e sovrastimerebbe l'area." },
          { kind: "h3", text: "Esempio 12: Calcolare una sezione triangolare da ipotenusa e altezza" },
          { kind: "p", text: "Una sezione triangolare rettangola ha un'ipotenusa di 20 m e un'altezza perpendicolare di 9 m. Scegli Variazione area (altezza): [[K=(20\\times9)/2]], [[[\\boxed{K=90\\text{ m}^2}]]]. Questa è l'area del triangolo quando le misure descrivono lo stesso triangolo rettangolo valido, come accade qui: 9 m è ben al di sotto della lunghezza dell'ipotenusa, come deve essere per una perpendicolare." },
          { kind: "h3", text: "Confronto pratico degli esempi" }
        ],
        table: {
          headers: ["Situazione", "Valori noti", "Modalità del calcolatore", "Formula", "Area finale", "Interpretazione"],
          rows: [
            ["Aiuola", "Cateti 6 m, 8 m", "Area dai cateti", "[[K=ab/2]]", "24 m²", "Superficie di piantagione"],
            ["Pannello di compensato", "Cateti 1,2 m, 0,8 m", "Area dai cateti", "[[K=ab/2]]", "0,48 m²", "Copertura del materiale"],
            ["Vela", "Cateti 5 m, 12 m", "Area dai cateti", "[[K=ab/2]]", "30 m²", "Area piana del tessuto"],
            ["Sezione di terreno", "Cateti 30 m, 40 m", "Area dai cateti", "[[K=ab/2]]", "600 m²", "Sezione, non l'intera proprietà"],
            ["Timpano", "b 6 m, c 10 m, A 53,13°", "Variazione area (angolo A)", "[[K=bc\\sin(A)/2]]", "24 m²", "Solo sezione trasversale"],
            ["Tenda da sole", "b 4 m, c 5 m, A 36,87°", "Variazione area (angolo A)", "[[K=bc\\sin(A)/2]]", "6 m²", "Area piana del tessuto"],
            ["Pannello di supporto", "a 3 m, c 5 m, B 53,13°", "Variazione area (angolo B)", "[[K=ac\\sin(B)/2]]", "6 m²", "Secondo cateto non necessario"],
            ["Sezione di capriata", "a 5 m, c 13 m, B 67,38°", "Variazione area (angolo B)", "[[K=ac\\sin(B)/2]]", "30 m²", "Geometria, non portata"],
            ["Triangolo 3-4-5", "r 1, s 6", "Area dal semiperimetro", "[[K=rs]]", "6 unità quadrate", "Visione del cerchio inscritto"],
            ["Lotto 5-12-13", "r 2, s 15", "Area dal semiperimetro", "[[K=rs]]", "30 unità quadrate", "Concorde con il controllo dei cateti"],
            ["Pannello triangolare", "c 10 m, h 4,8 m", "Variazione area (altezza)", "[[K=ch/2]]", "24 m²", "L'altezza deve essere perpendicolare"],
            ["Sezione triangolare", "c 20 m, h 9 m", "Variazione area (altezza)", "[[K=ch/2]]", "90 m²", "Triangolo rettangolo valido"]
          ]
        },
        imgAlt: "Quattro pannelli: giardino 24 m², timpano 24 m², capriata 30 m² e pannello 24 m², ciascuno con il suo triangolo",
        figcaption: "Quattro calcoli reali: giardino, timpano, capriata e pannello, ciascuno con il suo triangolo e l'area finale."
      },
      "sec-verify": {
        h2: "Come verificare l'area di un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Un triangolo 3-4-5, cinque metodi, una risposta. Dati [[a=3]], [[b=4]], [[c=5]], con [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]], [[r=1]], [[s=6]] e [[h=ab/c=12/5=2.4]]:" },
          { kind: "p", text: "<strong>Metodo 1, cateti:</strong> [[K=(3\\times4)/2=6]]. <strong>Metodo 2, angolo A:</strong> [[K=(4\\times5\\times0.6)/2=6]]. <strong>Metodo 3, angolo B:</strong> [[K=(3\\times5\\times0.8)/2=6]]. <strong>Metodo 4, inraggio e semiperimetro:</strong> [[K=1\\times6=6]]. <strong>Metodo 5, ipotenusa e altezza:</strong> [[K=(5\\times2.4)/2=6]]." },
          { kind: "p", text: "Queste sono cinque strade matematiche verso la stessa quantità geometrica. L'area del triangolo non dipende da quale formula corretta viene usata; dipende dalla geometria reale del triangolo. Ogni volta che due metodi indipendenti concordano sul tuo triangolo, puoi fidarti del numero." }
        ],
        imgAlt: "Triangolo 3-4-5 con cinque pannelli: cateti, angolo A, angolo B, inraggio-semiperimetro, altezza, tutti con area 6",
        figcaption: "Input diversi, formule diverse, la stessa area del triangolo."
      },
      "sec-mistakes": {
        h2: "Errori comuni nel calcolo dell'area del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Gli errori di area sono raramente fallimenti aritmetici. Sono errori di etichettatura, confusioni tra formule e scivoloni sulle unità. I diciotto qui sotto coprono quasi ogni risposta sbagliata che il calcolatore di questa pagina può produrre." },
          { kind: "h3", text: "1. Dimenticare di dividere per due" },
          { kind: "p", text: "Moltiplicare i cateti senza dimezzare dà l'area del rettangolo, non quella del triangolo. Con cateti 3 e 4, [[3\\times4=12]] è sbagliato; [[(3\\times4)/2=6]] è giusto. Soluzione: termina ogni calcolo con cateti o base-altezza con la divisione per due." },
          { kind: "h3", text: "2. Usare l'ipotenusa come uno dei cateti perpendicolari" },
          { kind: "p", text: "L'ipotenusa non è mai un cateto. Inserire c = 5 come cateto con l'altro cateto 3 dà [[(5\\times3)/2=7.5]] invece di 6. Soluzione: individua prima il lato più lungo e riservalo al campo dell'ipotenusa." },
          { kind: "h3", text: "3. Abbinare l'angolo A al lato sbagliato" },
          { kind: "p", text: "La formula dell'angolo A richiede il lato [[b]], il lato che racchiude l'angolo [[A]] con l'ipotenusa. Inserire invece il lato [[a]] calcola il prodotto sbagliato. Soluzione: controlla che l'angolo [[A]] si trovi tra i lati [[b]] e [[c]] prima di inserire i valori." },
          { kind: "h3", text: "4. Abbinare l'angolo B al lato sbagliato" },
          { kind: "p", text: "L'immagine speculare: la formula dell'angolo B richiede il lato [[a]], non il lato [[b]]. Soluzione: conferma che l'angolo [[B]] si trovi tra i lati [[a]] e [[c]]." },
          { kind: "h3", text: "5. Usare l'angolo compreso sbagliato in una formula con il seno" },
          { kind: "p", text: "Inserire 36,87 gradi dove andrebbero 53,13 gradi, o viceversa, produce un'area plausibile ma sbagliata. Soluzione: abbina l'angolo alla coppia di lati: l'angolo A va con [[b]] e [[c]], l'angolo B con [[a]] e [[c]]." },
          { kind: "h3", text: "6. Confondere l'altezza con un cateto" },
          { kind: "p", text: "L'altezza [[h]] scende dal vertice dell'angolo retto all'ipotenusa; un cateto corre lungo il bordo del triangolo. Inserire un cateto come altezza sovrastima l'altezza. Soluzione: l'altezza deve atterrare sull'ipotenusa con il contrassegno dell'angolo retto." },
          { kind: "h3", text: "7. Usare come altezza una linea non perpendicolare" },
          { kind: "p", text: "Qualsiasi linea non perpendicolare dal vertice all'ipotenusa è più lunga della vera altezza, quindi l'area risulta troppo grande. Soluzione: verifica la perpendicolarità, per costruzione o con il controllo [[h=ab/c]], prima di usare la modalità altezza." },
          { kind: "h3", text: "8. Confondere l'inraggio con il circumraggio" },
          { kind: "p", text: "L'inraggio tocca i lati dall'interno; il circumraggio raggiunge i vertici dall'esterno. In un triangolo rettangolo il circumraggio è [[c/2]], sempre maggiore dell'inraggio. Inserire il circumraggio nella formula [[K=rs]] gonfia l'area. Soluzione: usa [[r=(a+b-c)/2]] per l'inraggio del triangolo rettangolo." },
          { kind: "h3", text: "9. Usare il perimetro intero invece del semiperimetro" },
          { kind: "p", text: "La formula è [[K=rs]] con [[s]] come semiperimetro. Inserire il perimetro intero 12 invece di 6 nel triangolo 3-4-5 dà 12 invece di 6. Soluzione: dimezza il perimetro prima di moltiplicare per [[r]]." },
          { kind: "h3", text: "10. Mescolare unità di misura incompatibili" },
          { kind: "p", text: "Cateti di 3 metri e 40 centimetri non sono 3 e 40 in un'unica formula. Soluzione: converti ogni input in un'unica unità, ad esempio 3 m e 0,4 m, prima di calcolare." },
          { kind: "h3", text: "11. Riportare metri quadrati come metri" },
          { kind: "p", text: "Un'area di 6 m² non è 6 m. L'unità quadrata è parte del significato della risposta: dice quanta superficie, non quanta lunghezza. Soluzione: scrivi sempre l'unità quadrata insieme al numero." },
          { kind: "h3", text: "12. Arrotondare il valore del seno troppo presto" },
          { kind: "p", text: "Usare 0,6 per il seno quando il valore vero è 0,6000 è innocuo, ma arrotondare 0,9231 a 0,9 a metà calcolo sposta il risultato. Soluzione: mantieni la piena precisione in ogni passo e arrotonda solo la risposta finale." },
          { kind: "h3", text: "13. Inserire un angolo retto o non valido in un campo per angoli acuti" },
          { kind: "p", text: "Le modalità con angoli si aspettano un angolo acuto tra 0 e 90 gradi. Inserire 90 gradi o un valore negativo non descrive alcun input valido per queste modalità. Soluzione: inserisci l'angolo acuto che il triangolo ha davvero, in gradi." },
          { kind: "h3", text: "14. Presumere che tutte e cinque le modalità richiedano le stesse misure" },
          { kind: "p", text: "Ogni modalità chiede un diverso insieme di input: la modalità cateti richiede due cateti, la modalità angolo A richiede un cateto, l'ipotenusa e un angolo, e la modalità semiperimetro richiede un inraggio e un semiperimetro. Soluzione: leggi le etichette dei campi della modalità selezionata." },
          { kind: "h3", text: "15. Presumere che un perimetro maggiore significhi sempre un'area proporzionalmente maggiore" },
          { kind: "p", text: "Perimetro e area scalano diversamente: raddoppiare tutti i lati quadruplica l'area. Un triangolo con un perimetro maggiore può persino avere un'area minore se è lungo e sottile. Soluzione: confronta le aree con le formule dell'area, mai con i perimetri." },
          { kind: "h3", text: "16. Dimenticare che la stessa area può essere calcolata in più modi" },
          { kind: "p", text: "Trattare ogni metodo come un fatto separato fa perdere la verifica incorporata: se due metodi non concordano, qualcosa non va negli input o nella scelta della modalità. Soluzione: esegui un secondo metodo e indaga qualsiasi discrepanza." },
          { kind: "h3", text: "17. Inserire lunghezze dei lati che non possono descrivere il triangolo previsto" },
          { kind: "p", text: "Lati che non superano il controllo pitagorico, come 2, 3 e 10, non descrivono affatto un triangolo rettangolo. Soluzione: verifica [[a^2+b^2=c^2]] prima di fidarti di qualsiasi area costruita su quei lati." },
          { kind: "h3", text: "18. Usare la scorciatoia dell'inraggio del triangolo rettangolo per un triangolo non rettangolo" },
          { kind: "p", text: "La formula [[r=(a+b-c)/2]] deriva dalla geometria a 90 gradi. Applicarla a un triangolo acutangolo o ottusangolo produce un inraggio senza senso. Soluzione: usa questa scorciatoia solo quando il triangolo è confermato rettangolo." },
          { kind: "h3", text: "Sbagliato contro corretto: un esempio concreto" },
          { kind: "p", text: "Dati [[a=3]] e [[b=4]], un calcolo errato salta il dimezzamento: [[K=3\\times4=12]]. Quella è l'area del corrispondente rettangolo 3 per 4, non del triangolo rettangolo. Il calcolo corretto è [[K=(3\\times4)/2=6]]. Il triangolo occupa metà del rettangolo, quindi la divisione per due è ciò che trasforma una risposta da rettangolo in una risposta da triangolo." }
        ]
      },
      "sec-validate": {
        h2: "Come controllare se il risultato dell'area è valido",
        blocks: [
          { kind: "p", text: "Sei controlli intercettano la stragrande maggioranza dei risultati non validi prima che lascino la pagina." },
          { kind: "h3", text: "Controllo 1: misure positive" },
          { kind: "p", text: "Tutte le lunghezze richieste devono essere positive: [[a>0]], [[b>0]], [[c>0]]. Per la modalità inraggio, [[r>0]] e [[s>0]], e anche l'altezza deve essere positiva. Input nulli o negativi non descrivono alcun triangolo." },
          { kind: "h3", text: "Controllo 2: lunghezze dei lati valide del triangolo" },
          { kind: "p", text: "Per un triangolo rettangolo deve valere [[a^2+b^2=c^2]] e l'ipotenusa deve essere più lunga di ciascun cateto. Se i lati non superano questo controllo, gli input sono incoerenti e l'area non ha senso." },
          { kind: "h3", text: "Controllo 3: corretto abbinamento angolo-lato" },
          { kind: "p", text: "L'angolo [[A]] si abbina ai lati [[b]] e [[c]] nella formula con l'angolo compreso; l'angolo [[B]] si abbina ai lati [[a]] e [[c]]. Conferma l'abbinamento prima di accettare un risultato basato sugli angoli." },
          { kind: "h3", text: "Controllo 4: altezza corretta" },
          { kind: "p", text: "L'altezza [[h]] deve essere perpendicolare all'ipotenusa [[c]]. Un rapido test di plausibilità: l'altezza è sempre più corta dell'ipotenusa e più corta di ciascun cateto." },
          { kind: "h3", text: "Controllo 5: unità di area corrette" },
          { kind: "p", text: "Se le lunghezze di input sono in metri, l'area deve essere in metri quadrati; i centimetri danno centimetri quadrati. L'unità della risposta è il quadrato dell'unità di input, mai l'unità di input stessa." },
          { kind: "h3", text: "Controllo 6: controllo incrociato con un altro metodo" },
          { kind: "p", text: "Usa il triangolo 3-4-5 per confrontare la formula dei cateti con la formula del semiperimetro: [[(3\\times4)/2=6]] e [[1\\times6=6]]. Entrambe devono dare 6 unità quadrate. Piccole discrepanze nei calcoli basati sugli angoli possono derivare da misure degli angoli arrotondate o da valori trigonometrici arrotondati; quelle più grandi segnalano un errore reale. Questa guida non dichiara alcuna tolleranza di precisione né alcuna garanzia di accuratezza per il calcolatore: il controllo riguarda la coerenza, non la precisione promessa." }
        ]
      },
      "sec-conclusion": {
        h2: "Un triangolo, cinque metodi, un'area",
        blocks: [
          { kind: "p", text: "Ogni metodo in questa pagina risponde alla stessa domanda partendo da un punto diverso. Cateti quando hai entrambi i lati perpendicolari, seno quando hai un angolo compreso, inraggio e semiperimetro quando il cerchio inscritto è in vista, altezza quando l'ipotenusa e la sua altezza sono note. Abbina la modalità alle tue misure, inseriscile nei campi giusti con unità compatibili e lascia l'aritmetica al calcolatore. Poi verifica con un secondo metodo: due strade verso lo stesso numero sono il segno più sicuro che la geometria è corretta." }
        ]
      }
    },
    faqs: [
      { question: "Qual è la formula per l'area di un triangolo rettangolo?", answer: "La formula standard è K = ab/2, dove a e b sono i due cateti perpendicolari. Quattro metodi equivalenti coprono altre misure note: K = bc sin(A)/2, K = ac sin(B)/2, K = rs (inraggio per semiperimetro) e K = ch/2 (ipotenusa per altezza, diviso per due)." },
      { question: "Perché si divide per due quando si calcola l'area del triangolo?", answer: "Due triangoli rettangoli identici si uniscono lungo le ipotenuse per formare un rettangolo di area ab. Un triangolo è esattamente metà di quel rettangolo, quindi l'area è ab/2. La divisione per due è geometrica, non arbitraria, e compare in ogni metodo dell'area in questa pagina." },
      { question: "Posso calcolare l'area senza conoscere l'ipotenusa?", answer: "Sì. La formula dei cateti K = ab/2 non richiede l'ipotenusa, e neanche la formula inraggio-semiperimetro K = rs. L'ipotenusa è richiesta solo per le modalità basate sugli angoli e per la modalità altezza." },
      { question: "Come trovo l'area usando un lato e un angolo?", answer: "Usa la forma con l'angolo compreso. Con il cateto b, l'ipotenusa c e l'angolo A, l'area è K = bc sin(A)/2. Con il cateto a, l'ipotenusa c e l'angolo B, è K = ac sin(B)/2. Inserisci l'angolo in gradi e assicurati che sia l'angolo acuto compreso tra i due lati noti." },
      { question: "Perché la formula basata sull'angolo usa il seno?", answer: "La formula generale per due lati e l'angolo compreso è K = 1/2 xy sin(theta). Il seno estrae la componente perpendicolare di un lato rispetto all'altro, che è l'altezza effettiva. Per l'angolo A compreso tra i lati b e c, questo dà K = bc sin(A)/2." },
      { question: "Cos'è l'inraggio di un triangolo rettangolo?", answer: "L'inraggio è il raggio del cerchio inscritto nel triangolo, che tocca tutti e tre i lati. Per un triangolo rettangolo può essere calcolato come r = (a + b - c)/2. Non è il circumraggio, che raggiunge i vertici e vale c/2 in un triangolo rettangolo." },
      { question: "Qual è la differenza tra perimetro e semiperimetro?", answer: "Il perimetro è la lunghezza totale del contorno, a + b + c. Il semiperimetro è la sua metà, s = (a + b + c)/2. La formula dell'area K = rs usa il semiperimetro; usare il perimetro intero raddoppierebbe la risposta." },
      { question: "Come calcolo l'area usando ipotenusa e altezza?", answer: "Usa K = ch/2, dove c è l'ipotenusa e h è l'altezza perpendicolare dal vertice dell'angolo retto all'ipotenusa. L'altezza deve incontrare l'ipotenusa a 90 gradi; non è uno dei cateti. Se sono noti solo i cateti, trova prima l'altezza con h = ab/c." },
      { question: "Perché tutti e cinque i metodi dell'area danno lo stesso risultato?", answer: "Perché sono diverse descrizioni algebriche della stessa quantità geometrica. La formula dei cateti, le forme con il seno, il prodotto inraggio-semiperimetro e la forma ipotenusa-altezza sono tutte dimostrabilmente uguali per un triangolo rettangolo coerente. La concordanza tra due metodi è la migliore verifica che gli input e la modalità siano corretti." },
      { question: "Quali unità dovrei usare per l'area?", answer: "Unità quadrate corrispondenti alle lunghezze di input: i metri danno metri quadrati, i centimetri danno centimetri quadrati. Converti tutti gli input in un'unica unità prima di calcolare e riporta il risultato con l'unità quadrata, mai con un'unità lineare." },
      { question: "Posso calcolare l'area se conosco solo l'ipotenusa?", answer: "No. La sola ipotenusa non determina un unico triangolo rettangolo, quindi l'area non è fissata. Serve almeno un'altra misura indipendente: un cateto, un angolo acuto, l'altezza, oppure l'inraggio con il semiperimetro." },
      { question: "Come posso controllare se il mio calcolo dell'area è corretto?", answer: "Esegui un secondo metodo sullo stesso triangolo e confronta. Per un triangolo 3-4-5, la formula dei cateti dà (3 x 4)/2 = 6 e il metodo del semiperimetro dà 1 x 6 = 6. Verifica anche che i lati soddisfino il teorema di Pitagora, conferma l'abbinamento angolo-lato e controlla che l'altezza sia perpendicolare all'ipotenusa." }
    ],
    faqHeading: "Domande frequenti",
    relatedHeading: "Esplora i calcolatori correlati del triangolo rettangolo",
    relatedItems: [
      "Calcolatore dell'area del triangolo rettangolo dai cateti",
      "Calcolatore dell'area del triangolo rettangolo dall'angolo",
      "Calcolatore dell'area del triangolo rettangolo dal semiperimetro",
      "Calcolatore dell'area del triangolo rettangolo dall'altezza",
      "Calcolatore di perimetro e semiperimetro del triangolo rettangolo",
      "Calcolatore di inraggio e circumraggio del triangolo rettangolo",
      "Calcolatore dei lati del triangolo rettangolo"
    ]
  }
};
