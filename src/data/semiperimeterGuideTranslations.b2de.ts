// semiperimeterGuideTranslations.b2de.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for German (de).
export const B2_DE = {
  "de": {
    "tocHeading": "Abschnittsnavigation",
    "tocItems": {
      "sec-intro": "So berechnen Sie den Halbumfang eines rechtwinkligen Dreiecks",
      "sec-geometry": "Was ist ein rechtwinkliges Dreieck?",
      "sec-meaning": "Was ist der Halbumfang eines rechtwinkligen Dreiecks?",
      "sec-formula": "Formel für den Halbumfang eines rechtwinkligen Dreiecks",
      "sec-calculator": "So verwenden Sie den Rechner für den Halbumfang eines rechtwinkligen Dreiecks",
      "sec-examples": "Schritt-für-Schritt-Beispiele zum Halbumfang eines rechtwinkligen Dreiecks",
      "sec-practical": "Praktische Anwendungen des Halbumfangs eines rechtwinkligen Dreiecks",
      "sec-inradius": "Wie hängt der Halbumfang mit dem Inkreisradius eines rechtwinkligen Dreiecks zusammen?",
      "sec-heron": "Wie wird der Halbumfang in der Formel von Heron verwendet?",
      "sec-vs-perimeter": "Was ist der Unterschied zwischen Umfang und Halbumfang?",
      "sec-missing-side": "So berechnen Sie den Halbumfang, wenn eine Seite fehlt",
      "sec-properties": "Wichtige Eigenschaften des Halbumfangs eines rechtwinkligen Dreiecks",
      "sec-units": "Maßeinheiten in Halbumfang-Berechnungen verstehen",
      "sec-mistakes": "Häufige Fehler bei der Berechnung des Halbumfangs eines rechtwinkligen Dreiecks",
      "sec-verify": "So prüfen Sie, ob Ihre Halbumfang-Antwort richtig ist",
      "sec-related": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
      "sec-faq": "Häufig gestellte Fragen",
      "sec-conclusion": "Halbe Grenze, volles Verständnis"
    },
    "sections": {
      "sec-intro": {
        "h2": "So berechnen Sie den Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Addieren Sie die drei Seiten eines rechtwinkligen Dreiecks und teilen Sie die Summe dann durch zwei." },
          { "kind": "p", "text": "Das ist die gesamte Berechnung, und dieser Rechner führt sie für jedes rechtwinklige Dreieck aus, sobald Sie die beiden Katheten und die Hypotenuse eingeben. Drei Seitenmaße sind erforderlich, weil das Dreieck drei Kanten besitzt, und die Hypotenuse muss einbezogen werden: Sie ist eine dieser drei Kanten, auch wenn sie den rechten Winkel nie berührt. Die Summe wird durch zwei geteilt, weil der Halbumfang als genau die Hälfte des vollen Umfangs definiert ist, eine Größe, die in der Dreiecksgeometrie immer wieder vorkommt." },
          { "kind": "p", "text": "Ein kurzes Beispiel zeigt die Idee. Gegeben seien [[a=3]], [[b=4]] und [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "Der volle Umfang beträgt 12 Einheiten, also ist sein Halbumfang 6 Einheiten. Beachten Sie, dass der Halbumfang ein Längenmaß ist, kein Flächenmaß: Er ist eine Länge, angegeben in Metern, Fuß oder schlichten Einheiten, niemals in Quadrateinheiten. Er wird nützlich, wann immer eine Formel die Hälfte des Umfangs verlangt, was in Herons Formel für die Fläche, in der Inkreisradius-Beziehung und in mehreren geometrischen Beweisen vorkommt, in denen der volle Umfang nur stören würde." }
        ]
      },
      "sec-geometry": {
        "h2": "Was ist ein rechtwinkliges Dreieck?",
        "blocks": [
          { "kind": "p", "text": "Bevor überhaupt durch zwei geteilt wird, müssen die drei Seiten korrekt bezeichnet werden. Die untenstehenden Symbole bleiben im gesamten Leitfaden unverändert, und der Rechner verwendet dieselben Namen." },
          { "kind": "h3", "text": "Definition eines rechtwinkligen Dreiecks" },
          { "kind": "p", "text": "Ein rechtwinkliges Dreieck ist ein Dreieck mit einem Innenwinkel von genau 90 Grad. Es hat drei Ecken, drei Seiten, zwei spitze Winkel und einen rechten Winkel, der gewöhnlich mit einem kleinen Quadrat markiert ist. Die beiden Seiten, die den rechten Winkel bilden, sind die Katheten; die Seite gegenüber dem rechten Winkel ist die Hypotenuse. Da die Winkel jedes Dreiecks zusammen 180 Grad ergeben, [[A+B+C=180^\\circ]], und mit [[C=90^\\circ]] folgt [[[\\boxed{A+B=90^\\circ}]]]: Die beiden spitzen Winkel sind komplementär, sodass die Kenntnis des einen den anderen festlegt. Dieses Bild muss stimmen, weil die Halbumfang-Formel jede Seite als Grenzkante behandelt, und eine falsch bezeichnete Seite die Summe verfälscht, bevor die Division überhaupt beginnt." },
          { "kind": "h3", "text": "Was sind die beiden Katheten?" },
          { "kind": "p", "text": "Kathete [[a]] und Kathete [[b]] sind die beiden Seiten, die sich in der Ecke des rechten Winkels treffen und senkrecht aufeinander stehen. Jede von beiden kann je nach Ausrichtung des Dreiecks waagerecht oder senkrecht gezeichnet sein; was sie definiert, ist die 90-Grad-Ecke, die sie bilden, nicht ihre Richtung auf der Seite. Sie unterscheiden sich von der Hypotenuse in Lage und Länge: Jede Kathete berührt den rechten Winkel, und jede Kathete ist kürzer als die Hypotenuse. In der Halbumfang-Rechnung ist ihre Rolle einfach: Beide sind Grenzkanten, also gehen beide in die Summe ein, die halbiert wird." },
          { "kind": "h3", "text": "Was ist die Hypotenuse?" },
          { "kind": "p", "text": "Die Hypotenuse ist die Seite gegenüber dem rechten Winkel, immer die längste Seite des Dreiecks. Sie bildet nie den rechten Winkel; sie spannt sich über ihn hinweg und verbindet die fernen Enden der beiden Katheten. Sie unterscheidet sich von den Katheten in Lage und Länge: Die Katheten treffen sich unter 90 Grad, während die Hypotenuse jede Kathete unter einem spitzen Winkel trifft. Sie vervollständigt die Dreiecksgrenze, weshalb sie in die Halbumfang-Berechnung einbezogen werden muss. Wenn beide Katheten bekannt sind, liefert der Satz des Pythagoras sie zurück: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "So erkennen Sie die richtigen Seitenbezeichnungen" },
          { "kind": "p", "text": "[[a]] und [[b]] sind die beiden Seiten, die sich unter 90 Grad treffen, und [[c]] liegt gegenüber dem rechten Winkel. In einem nicht entarteten rechtwinkligen Dreieck ist [[c]] die längste Seite. Die Markierung des rechten Winkels verrät, welche Seite [[c]] ist: Es ist diejenige, die diese Ecke nicht berührt. Eine schnelle Ordnungsprüfung hilft: Sortieren Sie die drei Zahlen, und die größte muss die Rolle von [[c]] spielen. Wenn die größte Seite nicht gegenüber der quadratischen Ecke sitzt, sind die Bezeichnungen falsch, und der darauf aufgebaute Halbumfang wird ebenfalls falsch sein." },
          { "kind": "h3", "text": "Warum hängt der Halbumfang von allen drei Seiten ab?" },
          { "kind": "p", "text": "Der Halbumfang wird aus dem vollständigen Umfang abgeleitet, und der vollständige Umfang zählt jede Kante der Grenze. Auch wenn [[a]] und [[b]] senkrecht aufeinander stehen, bleibt die Hypotenuse Teil der Außengrenze des Dreiecks: Sie ist die Kante, die die Form schließt. [[c]] wegzulassen ergibt keinen kürzeren Halbumfang; es ergibt eine andere, falsche Größe. Für [[a=3]], [[b=4]], [[c=5]] liefert das Weglassen der Hypotenuse [[(3+4)/2=3.5]], während der wahre Halbumfang [[(3+4+5)/2=6]] beträgt. Die fehlenden 2,5 Einheiten sind der Anteil der Hypotenuse, und keine korrekte Formel kann ihn überspringen." }
        ],
        "imgAlt": "Rechtwinkliges Dreieck ABC: Katheten a und b, Hypotenuse c, rechter Winkel bei C, P = a+b+c und s = (a+b+c)/2",
        "figcaption": "Dreieck ABC: Die Katheten a und b treffen sich im rechten Winkel C, die Hypotenuse c schließt die Grenze, und s = (a + b + c) / 2 ist die Hälfte des Umfangs."
      },
      "sec-meaning": {
        "h2": "Was ist der Halbumfang eines rechtwinkligen Dreiecks?",
        "blocks": [
          { "kind": "h3", "text": "Definition des Halbumfangs" },
          { "kind": "p", "text": "Der Halbumfang ist genau die Hälfte des vollen Umfangs eines Dreiecks. Wenn [[P]] die vollständige Strecke um das Dreieck ist, dann ist der Halbumfang [[s]] [[[\\boxed{s=\\frac{P}{2}}]]] Für ein rechtwinkliges Dreieck ist der volle Umfang [[P=a+b+c]], sodass die Definition zu [[[\\boxed{s=\\frac{a+b+c}{2}}]]] wird. Alle drei Seitenlängen werden vor der Division addiert: Die Summe erfasst die ganze Grenze, und die Division durch zwei halbiert sie. Nichts wird weggelassen und nichts doppelt gezählt." },
          { "kind": "h3", "text": "Warum heißt er Halbumfang?" },
          { "kind": "p", "text": "Der Name erklärt sich von selbst, sobald man ihn zerlegt. <em>Halb</em> bedeutet die Hälfte, und <em>Umfang</em> bedeutet die vollständige Grenzlänge. Zusammengesetzt bedeutet Halbumfang die Hälfte des Umfangs. Der Buchstabe [[s]] ist das übliche mathematische Symbol, und er taucht in vielen Dreiecksformeln auf, gerade weil halbierte Grenzlängen so oft vorkommen. Wenn eine Formel [[s]] verlangt, fragt sie nach genau dieser einen Zahl: der Hälfte von [[a+b+c]]." },
          { "kind": "h3", "text": "Stellt der Halbumfang einen physischen Halbgrenzweg dar?" },
          { "kind": "p", "text": "Das ist ein feiner Punkt, den man richtig verstehen sollte. Der Halbumfang ist die Hälfte der numerischen Summe der drei Seitenlängen, beschreibt aber nicht unbedingt eine durchgehende physische Strecke über die halbe Dreiecksgrenze. 6 Einheiten entlang der Kanten eines 3-4-5-Dreiecks zu gehen könnte zum Beispiel bedeuten, die beiden Katheten zu gehen (3 + 4 = 7 ist schon zu weit) oder eine Kathete plus einen Teil der Hypotenuse; es gibt keinen einzigen natürlichen Halbweg. Der Halbumfang ist in erster Linie ein abgeleitetes geometrisches Maß, ein bequemer Zwischenwert, den Formeln verwenden, und keine Strecke, die man auf dem Boden abschreiten würde." },
          { "kind": "h3", "text": "Ist der Halbumfang eine Länge oder eine Fläche?" },
          { "kind": "p", "text": "Der Halbumfang ist ein eindimensionales Maß: eine Länge. Wenn die Seitenlängen in Metern sind, ist [[s]] in Metern; in Zentimetern, in Zentimetern; in Fuß, in Fuß; in Zoll, in Zoll. Er darf niemals in Quadrateinheiten ausgedrückt werden. Die Division durch zwei ändert die Größe der Zahl, nicht ihre Dimension: Eine halbierte Länge bleibt eine Länge. [[s]] mit einer Fläche zu verwechseln gehört zu den häufigsten Anfängerfehlern, und die Einheiten sauber zu halten ist der einfachste Weg, ihn zu vermeiden." },
          { "kind": "h3", "text": "Ist der Halbumfang immer größer als die längste Seite?" },
          { "kind": "p", "text": "Ja, für jedes gültige nicht entartete Dreieck, und die Dreiecksungleichung zeigt, warum. Jedes Dreieck erfüllt [[a+b>c]]: Die beiden kürzeren Seiten zusammen übertreffen die längste. Addiert man [[c]] auf beiden Seiten, folgt [[a+b+c>2c]]; teilt man durch zwei, ergibt sich [[[\\boxed{s>c}]]] Für ein rechtwinkliges Dreieck bedeutet das, dass der Halbumfang immer größer als die Hypotenuse ist. Für 3-4-5 übertrifft [[s=6]] [[c=5]]. Das ergibt eine praktische Plausibilitätskontrolle: Wenn Ihr berechneter Halbumfang kleiner als die Hypotenuse ist, sind die Seitenbezeichnungen oder die Arithmetik falsch." }
        ]
      },
      "sec-formula": {
        "h2": "Formel für den Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Je nachdem, was bekannt ist, werden zwei Formen derselben Formel verwendet. Die kompakte Form geht vom vollen Umfang aus:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Die erweiterte Form geht von den drei Seiten aus:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Die einzelnen Variablen verstehen" },
          { "kind": "p", "text": "[[s]] ist der Halbumfang, die gesuchte Antwort. [[P]] ist der volle Umfang, die vollständige Grenzlänge. [[a]] ist die erste Kathete und [[b]] die zweite Kathete, die beiden senkrechten Seiten. [[c]] ist die Hypotenuse, die längste Seite, gegenüber dem rechten Winkel. Verwechseln Sie niemals [[P]] und [[s]]: Das eine ist die ganze Grenze, das andere ihre Hälfte." },
          { "kind": "h3", "text": "Warum teilen wir durch zwei?" },
          { "kind": "p", "text": "Die Division macht die Größe erst zum <em>Halb</em>umfang statt zum Umfang. Nehmen Sie [[a=3]], [[b=4]], [[c=5]]. Berechnen Sie zuerst den vollständigen Umfang: [[P=3+4+5]], also [[P=12]]. Teilen Sie dann durch zwei: [[s=12/2]], was [[[\\boxed{s=6}]]] ergibt. Mathematisch skaliert die Division die Grenzsumme auf den Halbwert, den Formeln wie die von Heron erwarten. Sie wegzulassen beantwortet eine andere Frage: den vollen Umfang, nicht den Halbumfang." },
          { "kind": "h3", "text": "Warum können wir nicht nur die beiden Katheten verwenden?" },
          { "kind": "p", "text": "Weil die Katheten allein nicht die ganze Grenze sind. Der falsche Ansatz [[s=(3+4)/2]] ergibt 3,5, eine Zahl ohne geometrische Bedeutung für dieses Dreieck: Er ignoriert die Hypotenuse, die eine echte Kante der Form ist. Der korrekte Ansatz addiert zuerst alle drei Seiten: [[s=(3+4+5)/2]], was [[[\\boxed{s=6}]]] ergibt. Eine verlockende Abkürzung ist, jede Seite zu halbieren und dann zu addieren, [[1.5+2+2.5=6]]: Die Arithmetik geht hier zufällig auf, weil sich die Division über die Addition verteilt, aber sie verschleiert die Struktur der Formel und lädt zu Fehlern ein. Addieren Sie zuerst, teilen Sie dann einmal." },
          { "kind": "h3", "text": "Wie hängen Umfang und Halbumfang zusammen?" },
          { "kind": "p", "text": "Sie sind dasselbe Maß in zwei Maßstäben. Die Verdopplung des Halbumfangs stellt den Umfang wieder her, und die Halbierung des Umfangs stellt den Halbumfang wieder her:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Jeder Wert lässt sich aus dem anderen zurückgewinnen. Wenn eine Aufgabe angibt, dass der Umfang 30 beträgt, ist der Halbumfang sofort 15; wenn eine Berechnung [[s=20]] liefert, ist der volle Umfang 40. Diese Zwei-Wege-Beziehung ist auch ein Prüfwerkzeug: Nach der Berechnung von [[s]] aus den Seiten muss die Verdopplung die Seitensumme reproduzieren." }
        ]
      },
      "sec-calculator": {
        "h2": "So verwenden Sie den Rechner für den Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Der Rechner auf dieser Seite hat eine Aufgabe: Er nimmt die drei Seitenlängen eines rechtwinkligen Dreiecks und gibt den Halbumfang zurück, wobei er jeden Schritt der Arbeit zeigt. Die folgenden Schritte entsprechen genau der vorhandenen Benutzeroberfläche." },
          { "kind": "p", "text": "<strong>Schritt 1: Finden Sie den Halbumfang-Rechner.</strong> Er sitzt nahe dem oberen Seitenrand, unterhalb der H1-Überschrift, mit drei beschrifteten Eingaben." },
          { "kind": "p", "text": "<strong>Schritt 2: Identifizieren Sie Kathete a.</strong> Wählen Sie eine der beiden Seiten, die den rechten Winkel bilden. Jede senkrechte Seite kann [[a]] sein." },
          { "kind": "p", "text": "<strong>Schritt 3: Identifizieren Sie Kathete b.</strong> Die andere senkrechte Seite wird [[b]]." },
          { "kind": "p", "text": "<strong>Schritt 4: Identifizieren Sie Hypotenuse c.</strong> Die längste Seite, gegenüber dem rechten Winkel, ist [[c]]. Die drei Maße zu sortieren und das größte in dieses Feld zu setzen, verhindert den häufigsten Eingabefehler." },
          { "kind": "p", "text": "<strong>Schritt 5: Geben Sie die erste Kathete ein.</strong> Tippen Sie den Wert von [[a]] in das Feld Kathete a." },
          { "kind": "p", "text": "<strong>Schritt 6: Geben Sie die zweite Kathete ein.</strong> Tippen Sie den Wert von [[b]] in das Feld Kathete b." },
          { "kind": "p", "text": "<strong>Schritt 7: Geben Sie die Hypotenuse ein.</strong> Tippen Sie den Wert von [[c]] in das Feld Hypotenuse c." },
          { "kind": "p", "text": "<strong>Schritt 8: Wählen Sie passende Maßeinheiten.</strong> Jede Eingabe hat ihren eigenen Einheitenwähler. Alle drei Seiten müssen kompatible Einheiten verwenden, bevor sie addiert werden; Meter mit Zentimetern zu mischen verfälscht die Summe." },
          { "kind": "p", "text": "<strong>Schritt 9: Klicken Sie auf Halbumfang berechnen.</strong> Das Werkzeug addiert die drei Seiten und teilt die Summe durch zwei." },
          { "kind": "p", "text": "<strong>Schritt 10: Prüfen Sie den angezeigten Halbumfang.</strong> Das Ergebnis erscheint mit seiner Einheit, zum Beispiel [[[\\boxed{s=6\\text{ units}}]]] für das 3-4-5-Dreieck." },
          { "kind": "p", "text": "<strong>Schritt 11: Prüfen Sie die Lösungsschritte.</strong> Der Rechner zeigt die Einsetzung und die Division, sodass Sie die Arithmetik Zeile für Zeile nachvollziehen können." },
          { "kind": "p", "text": "<strong>Schritt 12: Vergewissern Sie sich, dass die Ausgabe die Hälfte des vollen Umfangs ist.</strong> Verdoppeln Sie das Ergebnis: Für 3-4-5 ergibt [[2\\times6=12]], was [[3+4+5]] entspricht." },
          { "kind": "p", "text": "<strong>Schritt 13: Verwenden Sie Zurücksetzen, wenn Sie eine neue Berechnung beginnen.</strong> Die Schaltfläche Zurücksetzen löscht alle drei Eingaben, sodass das nächste Dreieck bei null beginnt." },
          { "kind": "h3", "text": "Was stellt jede Eingabe dar?" },
          { "kind": "p", "text": "Die drei Eingaben entsprechen den drei Grenzkanten. Kathete a und Kathete b nehmen die beiden senkrechten Seiten auf; Hypotenuse c nimmt die längste Seite auf. Der Rechner addiert genau das, was Sie eingeben, und halbiert die Summe, sodass die Rolle jedes Feldes feststeht: Einen Kathetenwert in das Hypotenusenfeld zu vertauschen, ändert die Summe und erzeugt einen falschen Halbumfang." },
          { "kind": "h3", "text": "Warum sind Maßeinheiten wichtig?" },
          { "kind": "p", "text": "Der Halbumfang wird durch Addieren dreier Längen berechnet, und Addition erfordert kompatible Einheiten. 3 Meter zu 40 Zentimetern ohne Umrechnung zu addieren ergibt eine bedeutungslose Summe. Der Einheitenwähler jeder Eingabe lässt Sie die Einheit deklarieren, die Sie eingetippt haben; wählen Sie Wähler, die die echten Maße beschreiben, damit die Addition Gleiches mit Gleichem verbindet." },
          { "kind": "h3", "text": "Die Ergebnisanzeige verstehen" },
          { "kind": "p", "text": "Die Ergebnisanzeige zeigt den Halbumfang mit seiner linearen Einheit. Dahinter hat der Rechner genau zwei Operationen ausgeführt: Er hat alle drei Seiten addiert und dann die Summe durch zwei geteilt. Keine weitere Berechnung ist beteiligt, und das Werkzeug berechnet weder die Fläche noch den Inkreisradius von sich aus; diese Formeln sind unterstützende Erklärungen in diesem Leitfaden, keine zusätzlichen Ausgaben des Rechners." },
          { "kind": "h3", "text": "Die Lösungsschritte verstehen" },
          { "kind": "p", "text": "Das Feld der Lösungsschritte spielt die Berechnung noch einmal ab: die eingegebenen Seitenwerte, ihre Summe, die Division durch zwei und das Endergebnis. Diese sichtbare Rechnung ist der schnellste Weg, einen Tippfehler zu entdecken: Wenn ein Schritt 4 zeigt, wo Sie 40 meinten, ist der Fehler offensichtlich, bevor die Antwort anderswo verwendet wird." }
        ]
      },
      "sec-examples": {
        "h2": "Schritt-für-Schritt-Beispiele zum Halbumfang eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Die vier Beispiele unten behalten die vorhandenen gerechneten Fälle bei und erweitern ihre Erklärungen. Jedes setzt die drei Seiten ein, addiert sie, teilt durch zwei und verifiziert dann die Antwort." },
          { "kind": "h3", "text": "Beispiel 1: 3-4-5 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=3,\\;b=4,\\;c=5]], lautet die Formel [[s=\\frac{a+b+c}{2}]]. Einsetzen: [[s=\\frac{3+4+5}{2}]]. Addieren: [[s=\\frac{12}{2}]]. Das Endergebnis ist [[[\\boxed{s=6\\text{ units}}]]] Verifikation: [[P=2s=12]], was mit der direkten Summe [[3+4+5]] übereinstimmt. Das Ergebnis ist korrekt, weil jede Grenzkante vor der Division genau einmal gezählt wurde." },
          { "kind": "h3", "text": "Beispiel 2: 5-12-13 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], also [[s=\\frac{30}{2}]], was [[[\\boxed{s=15\\text{ units}}]]] ergibt. Der volle Umfang ist 30, und die Hälfte von 30 ist 15. Zur Kontrolle bestätigt [[5^2+12^2=13^2]] den rechten Winkel, sodass die Seitenbezeichnungen vertrauenswürdig sind." },
          { "kind": "h3", "text": "Beispiel 3: 8-15-17 rechtwinkliges Dreieck" },
          { "kind": "p", "text": "Gegeben [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], also [[s=\\frac{40}{2}]], was [[[\\boxed{s=20\\text{ units}}]]] ergibt. Beachten Sie das Muster über die Beispiele hinweg: Wenn das Dreieck wächst, wächst der Halbumfang im Gleichschritt mit den Seiten, immer genau die Hälfte des Umfangs." },
          { "kind": "h3", "text": "Beispiel 4: Dezimale Seitenmaße" },
          { "kind": "p", "text": "Gegeben [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], also [[s=\\frac{15}{2}]], was [[[\\boxed{s=7.5\\text{ units}}]]] ergibt. Dezimalwerte ändern die Formel nicht: Dieselbe Addieren-dann-Teilen-Reihenfolge gilt. Die Pythagoras-Kontrolle [[2.5^2+6^2=6.5^2]] bestätigt, dass diese Seiten wirklich ein rechtwinkliges Dreieck bilden." }
        ],
        "imgAlt": "3-4-5-Dreieck mit Rechenschritten: Seiten addieren ergibt 12, durch 2 teilen, Halbumfang s gleich 6",
        "figcaption": "Addieren Sie die drei Seiten, um P = 12 zu erhalten, teilen Sie dann durch 2: Der Halbumfang s = 6.",
        "table": {
          "headers": ["Dreieck", "Kathete a", "Kathete b", "Hypotenuse c", "Voller Umfang P", "Halbumfang s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["Die Tabelle zeigt das Muster deutlich: Wenn alle drei Maße zunehmen, nimmt der Halbumfang proportional zu und liegt immer genau bei der Hälfte des vollen Umfangs. Der Zeilenvergleich zeigt auch, dass ähnliche Dreiecke gemeinsam skalieren; verdoppelt man jede Seite, verdoppelt sich auch der Halbumfang."]
      },
      "sec-practical": {
        "h2": "Praktische Anwendungen des Halbumfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Ein Hinweis vor den Beispielen: Der Halbumfang ist normalerweise nicht die Größe, mit der man die halbe Einfassung oder den halben Zaun um ein dreieckiges Objekt kauft. Seine echte Rolle ist die eines geometrischen Zwischenmaßes, des Zwischenschritts zu Inkreisradius, Flächenkontrollen und Entwurfsberechnungen. Jedes Beispiel unten ist ein vereinfachtes rechtwinklig-dreieckiges geometrisches Modell, und jedes berechnet den Halbumfang neben dem vollen Umfang, der Fläche und dem Inkreisradius, damit die Beziehungen sichtbar bleiben." },
          { "kind": "h3", "text": "Beispiel 1: Dreiecksfenster mit kreisförmigem Ziereinsatz" },
          { "kind": "p", "text": "Ein Dreiecksfenster-Modell hat [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Halbumfang: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; voller Umfang [[P=12\\text{ m}]]. Fläche [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] und Inkreisradius [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Der Halbumfang macht den Inkreisradius erst berechenbar: Er verwandelt drei Seitenlängen in die eine Zahl, die die Fläche mit dem Radius des Kreises verknüpft, der alle drei Seiten des idealisierten Dreiecksmodells berührt." },
          { "kind": "h3", "text": "Beispiel 2: Metallwinkel mit kreisförmigem Freiraum" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Winkel hat [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Dann [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] und [[P=30\\text{ cm}]]. Fläche [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] ergibt Inkreisradius [[r=\\frac{30}{15}=2\\text{ cm}]]. Dieser Wert beschreibt den Inkreisradius im idealisierten Dreieck und kann geometrische Freiraumstudien für einen kreisförmigen Ausschnitt leiten. Er allein bestimmt nicht die statische Sicherheit." },
          { "kind": "h3", "text": "Beispiel 3: Dachgiebel mit kreisförmiger Lüftung" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinklig-dreieckiges Dachgiebel-Modell hat [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Halbumfang [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; Umfang [[P=24\\text{ ft}]]. Fläche [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] und Inkreisradius [[r=\\frac{24}{12}=2\\text{ ft}]]. Der Halbumfang verwandelt die drei Kantenlängen des Giebels in den Inkreisradius des vereinfachten Modells. Eine echte Lüfterinstallation braucht zusätzlich separate Bau- und Freiraummaße jenseits dieser Geometrie." },
          { "kind": "h3", "text": "Beispiel 4: Dreieckige Gartengestaltung" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiges Gartenmodell hat [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Dann [[s=\\frac{7+24+25}{2}=28\\text{ m}]] und [[P=56\\text{ m}]]. Fläche [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] liefert Inkreisradius [[r=\\frac{84}{28}=3\\text{ m}]]. Der Inkreis ist der größte Kreis, der in das idealisierte Dreieck passt und dabei alle drei Seiten berührt, nützlich, um in der Entwurfsphase ein kreisförmiges Beet oder einen Brunnen zu platzieren." },
          { "kind": "h3", "text": "Beispiel 5: Dreieckige CNC-Fertigungsplatte" },
          { "kind": "p", "text": "Eine Dreiecksplatte hat [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Halbumfang [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; Umfang [[P=40\\text{ cm}]]. Fläche [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] und Inkreisradius [[r=\\frac{60}{20}=3\\text{ cm}]]. Halbumfang und Inkreisradius dienen hier als geometrische Referenzwerte in der CAD-Modellierung, etwa beim Positionieren eines kreisförmigen Elements relativ zu den Plattenkanten." },
          { "kind": "h3", "text": "Beispiel 6: Dreiecksschild mit kreisförmigem Emblem" },
          { "kind": "p", "text": "Eine Schildplatte hat [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Dann [[s=\\frac{9+12+15}{2}=18\\text{ in}]] und [[P=36\\text{ in}]]. Fläche [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] ergibt Inkreisradius [[r=\\frac{54}{18}=3\\text{ in}]]. Der Inkreisradius liefert eine mathematische Referenz für das maximal einbeschriebene kreisförmige Emblem, vorbehaltlich der tatsächlichen Ränder und Befestigungsbedingungen des echten Schildes." },
          { "kind": "h3", "text": "Beispiel 7: Dreieckige Industrieplatte" },
          { "kind": "p", "text": "Eine rechtwinklig-dreieckige Platte hat [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Halbumfang [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; Umfang [[P=90\\text{ cm}]]. Fläche [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] und Inkreisradius [[r=\\frac{180}{45}=4\\text{ cm}]]. Der Halbumfang stützt geometrische Berechnungen für eine idealisierte Industrieplatte, etwa beim Bemessen eines kreisförmigen Ansatzes, der von allen drei Kanten frei bleiben muss." },
          { "kind": "h3", "text": "Beispiel 8: Dreieckiges Buntglas-Design" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Glasabschnitt hat [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Dann [[s=\\frac{12+16+20}{2}=24\\text{ in}]] und [[P=48\\text{ in}]]. Fläche [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] liefert Inkreisradius [[r=\\frac{96}{24}=4\\text{ in}]]. Die Beziehung ist direkt: Der Halbumfang halbiert die Grenze, und die Fläche durch diese Halbgrenze zu teilen ergibt den Radius des einbeschriebenen Kreises für den Entwurf." },
          { "kind": "h3", "text": "Beispiel 9: Vermessener dreieckiger Grundstücksabschnitt" },
          { "kind": "p", "text": "Ein vereinfachtes rechtwinklig-dreieckiges Grundstücksmodell hat [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Halbumfang [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; Umfang [[P=70\\text{ m}]]. Fläche [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] und Inkreisradius [[r=\\frac{210}{35}=6\\text{ m}]]. In einem vereinfachten Vermessungsmodell dient der Halbumfang als kompakte Eingabe für Flächen- und Inkreisradius-Kontrollen, etwa beim Abgleichen einer berechneten Grundstücksfläche mit der Formel von Heron." },
          { "kind": "h3", "text": "Beispiel 10: Dreieckiger architektonischer Rahmen" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger architektonischer Rahmen hat [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Dann [[s=\\frac{12+35+37}{2}=42\\text{ m}]] und [[P=84\\text{ m}]]. Fläche [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] ergibt Inkreisradius [[r=\\frac{210}{42}=5\\text{ m}]]. Dieser Wert kann die mathematische Modellierung eines kreisförmigen Elements innerhalb des dreieckigen Rahmens stützen, etwa eines runden Fensters mit Mittelpunkt im Inkreismittelpunkt." },
          { "kind": "h3", "text": "Beispiel 11: Großes dreieckiges Bodendesign" },
          { "kind": "p", "text": "Ein rechtwinklig-dreieckiger Bodenabschnitt hat [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Halbumfang [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; Umfang [[P=126\\text{ m}]]. Fläche [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] und Inkreisradius [[r=\\frac{630}{63}=10\\text{ m}]]. Hier verbindet der Halbumfang die Seitenmaße mit der Inkreisgeometrie des Modells: Eine Zahl schlägt die Brücke zwischen der Grenze und dem größten einpassbaren Kreis." },
          { "kind": "h3", "text": "Beispiel 12: Dreieckige industrielle Stützplatte" },
          { "kind": "p", "text": "Eine große rechtwinklig-dreieckige Platte hat [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Dann [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] und [[P=154\\text{ cm}]]. Fläche [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] liefert Inkreisradius [[r=\\frac{924}{77}=12\\text{ cm}]]. Diese Maße speisen ein geometrisches Modell für eine kreisförmige Passung oder ein inneres Designelement, wobei der Halbumfang der Zwischenwert ist, der den Inkreisradius erschließt." }
        ],
        "table": {
          "headers": ["Praktische Anwendung", "Kathete a", "Kathete b", "Hypotenuse c", "Umfang P", "Halbumfang s", "Fläche K", "Inkreisradius r", "Einheit"],
          "rows": [
            ["Dreiecksfenster", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Metallwinkel", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Dachgiebel-Lüftung", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Gartengestaltung", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["CNC-Platte", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Schildemblem", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Industrieplatte", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Buntglas", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Vermessenes Grundstück", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Architektonischer Rahmen", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Bodengestaltung", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Stützplatte", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Einige Hinweise gelten für jede Zeile oben. Jede Anwendung ist ein vereinfachtes geometrisches Modell, keine Bauspezifikation: Echte Maße brauchen eine separate Prüfung, die statische Festigkeit lässt sich nicht aus dem Halbumfang ablesen, und echte kreisförmige Öffnungen benötigen möglicherweise zusätzliche Fertigungsfreiräume. Der Halbumfang ist ein mathematischer Zwischenwert, der Inkreisradius ist der Radius des Inkreises, und der Inkreis berührt alle drei Seiten."]
      },
      "sec-inradius": {
        "h2": "Wie hängt der Halbumfang mit dem Inkreisradius eines rechtwinkligen Dreiecks zusammen?",
        "blocks": [
          { "kind": "p", "text": "Dies ist einer der wichtigsten Abschnitte des Artikels, weil der Inkreisradius der Hauptgrund ist, warum der Halbumfang als benannte Größe existiert. Der Inkreis ist der größte Kreis, der in ein Dreieck passt und dabei alle drei Seiten berührt, und sein Radius heißt Inkreisradius, dargestellt durch [[r]]." },
          { "kind": "h3", "text": "Beziehung zwischen Fläche und Halbumfang" },
          { "kind": "p", "text": "Für jedes Dreieck sind Fläche, Inkreisradius und Halbumfang durch eine einzige kompakte Formel verknüpft:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "wobei [[K]] die Dreiecksfläche ist, [[r]] der Inkreisradius und [[s]] der Halbumfang. Umgestellt löst sie nach dem Inkreisradius auf:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Kennt man also Halbumfang und Fläche, lässt sich der Inkreisradius direkt berechnen: Teilen Sie die Fläche durch den Halbumfang. Das ist der praktische Ertrag des Halbumfangs. Er verdichtet drei Seitenlängen zu einer Zahl, die zusammen mit der Fläche den einbeschriebenen Kreis offenbart." },
          { "kind": "h3", "text": "Spezielle Inkreisradius-Formel für rechtwinklige Dreiecke" },
          { "kind": "p", "text": "Für ein rechtwinkliges Dreieck ist die Fläche [[K=\\frac{ab}{2}]] und der Halbumfang [[s=\\frac{a+b+c}{2}]]. Setzt man beides in [[r=\\frac{K}{s}]] ein, erhält man:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Vereinfacht:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Es gibt auch eine äquivalente rechtwinklige Formel, die ganz ohne die Fläche auskommt:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Diese beiden Ausdrücke sind für ein rechtwinkliges Dreieck äquivalent wegen der Pythagoras-Beziehung: Die Algebra kollabiert, sobald [[a^2+b^2=c^2]] angewendet wird. Jede Form liefert denselben Inkreisradius; die zweite ist von Hand oft schneller." },
          { "kind": "h3", "text": "Vollständig gerechnetes 3-4-5-Beispiel" },
          { "kind": "p", "text": "Gegeben [[a=3,\\;b=4,\\;c=5]]: Halbumfang [[s=\\frac{3+4+5}{2}=6]], Fläche [[K=\\frac{3\\times4}{2}=6]], Inkreisradius [[r=\\frac{6}{6}]], also [[[\\boxed{r=1}]]] Kontrolle mit der Abkürzung: [[r=\\frac{3+4-5}{2}]], was [[[\\boxed{r=1}]]] ergibt. Beide Methoden liefern dieselbe Antwort, weil sie dieselbe Mathematik auf zwei Arten geschrieben sind: Die eine geht über die Fläche, die andere kürzt sie algebraisch heraus." },
          { "kind": "h3", "text": "Warum ist der Halbumfang für Inkreisberechnungen wichtig?" },
          { "kind": "p", "text": "Der Halbumfang ist die Brücke zwischen der Dreiecksgrenze und seinem einbeschriebenen Kreis. Konstrukteure verwenden ihn beim Bemessen kreisförmiger Freiräume in dreieckigen Teilen, beim Platzieren einbeschriebener kreisförmiger Elemente im geometrischen Entwurf, beim Bemaßen technischer Zeichnungen und beim Durcharbeiten mathematischer Beweise, die Fläche und Radius verknüpfen. Der Inkreisradius verbindet sich auch zurück zur Flächenverifikation: Wenn [[K]], [[r]] und [[s]] nicht [[K=rs]] erfüllen, stimmt etwas in der Kette nicht. Dieser Rechner berechnet den Inkreisradius nicht automatisch; er liefert den Halbumfang, und die obigen Formeln übernehmen von dort." }
        ],
        "imgAlt": "3-4-5 rechtwinkliges Dreieck mit Inkreis vom Radius 1; Halbumfang s = 6, Fläche K = 6, r = K/s",
        "figcaption": "Der Inkreis berührt alle drei Seiten; bei s = 6 und K = 6 ist der Inkreisradius r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Wie wird der Halbumfang in der Formel von Heron verwendet?",
        "blocks": [
          { "kind": "p", "text": "Die Formel von Heron berechnet die Fläche eines Dreiecks aus seinen drei Seitenlängen, ohne dass eine separat angegebene Höhe nötig wäre. Der Halbumfang ist ihre zentrale Zutat: Die Formel ist in [[s]] und den Differenzen zwischen [[s]] und jeder Seite geschrieben." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Hier ist [[K]] die Dreiecksfläche, [[s]] der Halbumfang, und [[a]], [[b]], [[c]] sind die drei Seitenlängen." },
          { "kind": "h3", "text": "Warum verwendet die Formel von Heron den Halbumfang?" },
          { "kind": "p", "text": "Der Halbumfang wird zuerst berechnet, weil er den Ausdruck zentriert: Jeder Faktor [[s-a]], [[s-b]], [[s-c]] misst, um wie viel der Halbumfang eine Seite übertrifft. Diese drei Überschüsse mit [[s]] selbst zu multiplizieren und die Wurzel zu ziehen, verwandelt Grenzinformation in Fläche. Die Formel gilt für jedes gültige Dreieck, nicht nur für rechtwinklige, weshalb sich der Halbumfang seinen Platz als allgemeines geometrisches Werkzeug verdient und nicht nur als rechtwinklige Kuriosität." },
          { "kind": "h3", "text": "Vollständig gerechnetes 3-4-5-Beispiel" },
          { "kind": "p", "text": "Gegeben [[a=3,\\;b=4,\\;c=5]], berechnen Sie zuerst den Halbumfang: [[s=\\frac{3+4+5}{2}=6]]. Einsetzen in die Formel von Heron: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Vereinfachen: [[K=\\sqrt{6\\times3\\times2\\times1}]], dann [[K=\\sqrt{36}]], was [[[\\boxed{K=6\\text{ square units}}]]] ergibt." },
          { "kind": "h3", "text": "Ergebnis mit der Flächenformel des rechtwinkligen Dreiecks prüfen" },
          { "kind": "p", "text": "Die direkte Flächenformel des rechtwinkligen Dreiecks lautet [[K=\\frac{ab}{2}]]. Einsetzen: [[K=\\frac{3\\times4}{2}]], was [[[\\boxed{K=6\\text{ square units}}]]] ergibt. Beide Formeln liefern dieselbe Fläche, und genau darum geht es: Die Formel von Heron, aufgebaut auf dem Halbumfang, bestätigt unabhängig die einfachere Berechnung." },
          { "kind": "h3", "text": "Wozu ist das nützlich?" },
          { "kind": "p", "text": "Rechtwinklige Dreiecke haben eine einfachere direkte Flächenformel, sodass die Formel von Heron selten der schnellste Weg zur Fläche ist. Ihr Wert liegt im Prüfen von Flächenberechnungen, im Verstehen, wie Seitenlängen allein die Fläche bestimmen, im Lösen seitenlängenbasierter Aufgaben ohne gegebene Höhe und im Verifizieren mathematischer Lösungen über einen unabhängigen Weg. Wann immer zwei unzusammenhängende Formeln bei der Fläche übereinstimmen, steigt das Vertrauen in die Antwort sprunghaft." }
        ],
        "imgAlt": "Herons Formel angewandt auf ein 3-4-5-Dreieck: Halbumfang 6 ergibt Fläche 6, verifiziert durch K = ab/2",
        "figcaption": "Fünf Schritte: Seiten, Halbumfang s = 6, Heron-Einsetzung, Fläche K = 6, Kontrolle mit K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Was ist der Unterschied zwischen Umfang und Halbumfang?",
        "blocks": [
          { "kind": "p", "text": "Die beiden Größen beschreiben dieselbe Grenze in unterschiedlichen Maßstäben, und sie zu verwechseln gehört zu den häufigsten Fehlern in der Dreiecksarbeit. Dieser Abschnitt zieht die Grenze klar." },
          { "kind": "h3", "text": "Der Umfang misst die volle Grenze" },
          { "kind": "p", "text": "Der Umfang ist die Gesamtlänge um das Dreieck:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Er steht für den vollständigen Weg um alle drei Kanten. Für das 3-4-5-Dreieck [[P=12]] Einheiten." },
          { "kind": "h3", "text": "Der Halbumfang ist die Hälfte der Summe" },
          { "kind": "p", "text": "Der Halbumfang ist die Hälfte des numerischen Umfangs:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Für dasselbe 3-4-5-Dreieck [[s=6]] Einheiten. Dasselbe Dreieck, dieselbe Grenze, aber die Zahl ist halbiert, weil die Formeln, die sie verbrauchen, die Formel von Heron und die Inkreisradius-Beziehung, für den Halbwert geschrieben sind." },
          { "kind": "h3", "text": "Numerischer Vergleich" },
          { "kind": "p", "text": "Nehmen Sie ein 6-8-10 rechtwinkliges Dreieck. Umfang: [[P=6+8+10]], also [[[\\boxed{P=24}]]] Halbumfang: [[s=\\frac{24}{2}]], also [[[\\boxed{s=12}]]] Der Umfang beantwortet „Wie lang ist die ganze Grenze?\"; der Halbumfang beantwortet „Wie lautet der Halbgrenzwert, den meine Formel braucht?\"" },
          { "kind": "h3", "text": "Wann sollten Sie welches Maß verwenden?" },
          { "kind": "p", "text": "Verwenden Sie den Umfang, wenn es um die volle Grenzlänge geht: Einrahmen einer Dreiecksform, Einzäunen eines dreieckigen Grundstücks, Schätzen von Randmaterialien oder Messen von Kantenbesatz. Verwenden Sie den Halbumfang, wenn die Aufgabe mathematisch ist: Formel von Heron, Inkreisradius-Berechnungen, Fläche-Radius-Beziehungen, fortgeschrittene Geometriebeweise oder unabhängige Verifikation eines Flächenergebnisses. Die Faustregel ist einfach: Physische Grenzarbeit nimmt [[P]]; Formelarbeit nimmt [[s]]." },
          { "kind": "h3", "text": "Ist der Halbumfang die halbe Fläche?" },
          { "kind": "p", "text": "Nein, und diese Verwechslung braucht eine deutliche Korrektur. Der Halbumfang ist ein lineares Maß: Für 3-4-5 sind es 6 Einheiten. Die Fläche ist ein zweidimensionales Maß: Für 3-4-5 sind es 6 Quadrateinheiten. Die Zahlen fallen hier zufällig zusammen, aber die Größen unterscheiden sich in ihrer Art. Eine Länge zu halbieren erzeugt niemals eine Fläche, ebenso wie das Halbieren eines Umfangs niemals eine Oberfläche erzeugt." }
        ],
        "table": {
          "headers": ["Maß", "Symbol", "Formel", "Bedeutung", "Einheit", "Häufige Anwendung"],
          "rows": [
            ["Umfang", "[[P]]", "[[P=a+b+c]]", "Volle Grenzlänge", "Linear (m, ft, in)", "Zäune, Rahmen, Zierleisten"],
            ["Halbumfang", "[[s]]", "[[s=(a+b+c)/2]]", "Halbe Grenzlänge", "Linear (m, ft, in)", "Formel von Heron, Inkreisradius"],
            ["Fläche", "[[K]]", "[[K=ab/2]]", "Eingeschlossene Oberfläche", "Quadrat (m², ft², in²)", "Oberflächenbedeckung, Material"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "So berechnen Sie den Halbumfang, wenn eine Seite fehlt",
        "blocks": [
          { "kind": "p", "text": "Der Rechner auf dieser Seite braucht alle drei Seitenlängen: Er kann keine Summe halbieren, die er nicht addieren kann. Wenn eine Seite unbekannt ist, berechnen Sie sie zuerst mit dem Satz des Pythagoras und fahren dann wie gewohnt mit dem Halbumfang fort." },
          { "kind": "h3", "text": "Die Hypotenuse finden" },
          { "kind": "p", "text": "Wenn beide Katheten bekannt sind, verwenden Sie [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Beispiel: [[a=6]], [[b=8]]. Dann [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], was [[[\\boxed{c=10}]]] ergibt. Nun folgt der Halbumfang: [[s=\\frac{6+8+10}{2}]], also [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Eine fehlende Kathete finden" },
          { "kind": "p", "text": "Wenn die Hypotenuse und eine Kathete bekannt sind, verwenden Sie [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Beispiel: [[c=13]], [[b=12]]. Dann [[a=\\sqrt{169-144}]], was [[[\\boxed{a=5}]]] ergibt. Dann [[s=\\frac{5+12+13}{2}]], also [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Warum muss die fehlende Seite zuerst gefunden werden?" },
          { "kind": "p", "text": "Der Halbumfang braucht die vollständige Summe aller drei Seiten, und eine unbekannte Seite lässt sich nicht einfach ignorieren oder als null behandeln. Die Hypotenusenform des Pythagoras addiert Quadrate; die Kathetenform subtrahiert sie; die falsche anzuwenden erfindet eine Seite, die es nicht gibt. Sobald die fehlende Seite wiederhergestellt ist, kann der <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Rechner für die Seiten eines rechtwinkligen Dreiecks</a> den Wert doppelt prüfen, und die Halbumfang-Berechnung läuft auf solidem Grund. Diese Fehlseiten-Schritte sind lehrreiche Hilfsmethoden, keine zusätzlichen Eingaben im vorhandenen Rechner." }
        ]
      },
      "sec-properties": {
        "h2": "Wichtige Eigenschaften des Halbumfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang verhält sich vorhersehbar. Diese Eigenschaften dienen doppelt als schnelle Kopfrechnungen und als Werkzeuge im geometrischen Schließen." },
          { "kind": "h3", "text": "Der Halbumfang ist größer als die Hypotenuse" },
          { "kind": "p", "text": "Für jedes gültige Dreieck gilt [[a+b>c]]. Addiert man [[c]] auf beiden Seiten, erhält man [[a+b+c>2c]], und die Division durch zwei liefert [[[\\boxed{s>c}]]] Der Halbumfang übertrifft immer die längste Seite. Wenn eine Berechnung ein [[s]] kleiner als [[c]] zurückgibt, sind die Bezeichnungen oder die Arithmetik falsch." },
          { "kind": "h3", "text": "Der Halbumfang ist kleiner als die Summe der Katheten" },
          { "kind": "p", "text": "Die Dreiecksungleichung liefert auch [[c<a+b]]. Addiert man [[a+b]] auf beiden Seiten, entsteht [[a+b+c<2(a+b)]], und Halbieren ergibt [[[\\boxed{s<a+b}]]] Der Halbumfang sitzt also strikt zwischen der Hypotenuse und der Summe der Katheten: [[c<s<a+b]]. Für 3-4-5: [[5<6<7]]. Dieses Sandwich ist eine schnelle Plausibilitätskontrolle für jede Antwort." },
          { "kind": "h3", "text": "Verdoppelt man jede Seite, verdoppelt sich der Halbumfang" },
          { "kind": "p", "text": "Skalieren Sie das 3-4-5-Dreieck um zwei: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] ergibt die Seiten 6, 8, 10. Dann [[s_2=\\frac{2a+2b+2c}{2}]], also [[[\\boxed{s_2=2s}]]] Numerisch: [[s_2=12=2\\times6]]. Der Halbumfang ist ein lineares Maß, sodass gleichmäßiges Skalieren ihn um denselben Faktor skaliert." },
          { "kind": "h3", "text": "Verdreifacht man jede Seite, verdreifacht sich der Halbumfang" },
          { "kind": "p", "text": "Dieselbe Linearität gilt für jeden Skalierungsfaktor. Verdreifacht man jede Seite, verdreifacht sich die Summe; die verdreifachte Summe zu halbieren ergibt das Dreifache des ursprünglichen Halbumfangs: [[[\\boxed{s_2=3s}]]] Allgemein skaliert das Skalieren aller Seiten um [[k]] das [[s]] um [[k]]. Deshalb haben ähnliche Dreiecke proportionale Halbumfänge." },
          { "kind": "h3", "text": "Was passiert, wenn sich nur eine Seite ändert?" },
          { "kind": "p", "text": "Ändert man eine Seite bei festen anderen beiden, ändert sich der numerische Halbumfang um die Hälfte der Seitenlängenänderung, weil sich nur ein Term der Summe bewegt. Aber es gibt einen Haken: Die resultierenden Maße müssen weiterhin ein gültiges Dreieck beschreiben, und für diese Seite ein rechtwinkliges. Die Hypotenuse eines 3-4-5-Dreiecks etwa auf 6 zu verlängern bricht [[a^2+b^2=c^2]], sodass die neuen Zahlen überhaupt kein rechtwinkliges Dreieck mehr beschreiben. Passt man eine Seite eines rechtwinkligen Dreiecks an, müssen sich die anderen anpassen, um den rechten Winkel zu erhalten." },
          { "kind": "h3", "text": "Halbumfang eines 45-45-90-Dreiecks" },
          { "kind": "p", "text": "Seien beide Katheten gleich [[k]]. Die Hypotenuse ist [[c=k\\sqrt{2}]], also ist der Halbumfang [[s=\\frac{k+k+k\\sqrt{2}}{2}]], was sich zu [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] vereinfacht. Die gleichen Katheten tragen symmetrisch bei, und die irrationale Hypotenuse hinterlässt ihre Spur im Ergebnis: Für [[k=1]] ist [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Halbumfang eines 30-60-90-Dreiecks" },
          { "kind": "p", "text": "Wenn die kürzere Kathete [[k]] ist, lauten die Seiten [[k]], [[k\\sqrt{3}]] und [[2k]]. Daher [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], was [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] ergibt. Numerisch sind bei [[k=2]] die Seiten 2, [[2\\sqrt{3}\\approx3.464]] und 4, also [[s\\approx4.732]]. Die exakte Wurzelform ist hier vorzuziehen: Sie bewahrt die volle Genauigkeit für jede spätere Heron- oder Inkreisradius-Berechnung." }
        ]
      },
      "sec-units": {
        "h2": "Maßeinheiten in Halbumfang-Berechnungen verstehen",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang funktioniert in jeder Längeneinheit, Meter, Zentimeter, Millimeter, Kilometer, Fuß, Zoll, Yard oder Meile, weil er nur eine Summe von Längen ist, halbiert. Die Einheit der Antwort entspricht immer der Einheit der Eingaben. Die einzige strikte Regel ist Konsistenz: Jede Seite muss vor der Addition in derselben Einheit ausgedrückt sein." },
          { "kind": "h3", "text": "Warum müssen alle drei Seitenmaße kompatible Einheiten verwenden?" },
          { "kind": "p", "text": "Der Halbumfang wird durch Addieren dreier Längen berechnet, und Längen in verschiedenen Einheiten lassen sich nicht direkt addieren. 3 Meter zu 40 Zentimetern zu addieren, als wären beide schlichte Zahlen, ergibt 43 von nichts Bedeutungsvollem. Die Summe ist nur gültig, wenn jeder Term eine Einheit teilt, also kommt die Umrechnung vor der Addition, niemals danach." },
          { "kind": "h3", "text": "Gerechnetes Beispiel zur Einheitenumrechnung" },
          { "kind": "p", "text": "Gegeben [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Rechnen Sie zuerst Zoll in Fuß um: [[48\\text{ inches}=4\\text{ ft}]]. Nun sind alle drei Seiten in Fuß: [[s=\\frac{3+4+5}{2}]], was [[[\\boxed{s=6\\text{ ft}}]]] ergibt. Die Maße müssen vor der Addition umgerechnet werden, weil die Formel rohe Zahlen addiert; sie kann nicht wissen, dass 48 Zoll bedeutete, es sei denn, Sie rechnen es um." },
          { "kind": "h3", "text": "Wie helfen die Einheiten-Auswahlfelder des Rechners?" },
          { "kind": "p", "text": "Jede Eingabe auf dieser Seite hat ihr eigenes Maßeinheiten-Auswahlfeld, mit dem Sie die Einheit der eingetippten Zahl deklarieren können. Stellen Sie jedes Auswahlfeld so ein, dass es zur echten Einheit seiner Eingabe passt, damit das Werkzeug die Werte auf konsistenter Basis verbindet. Gehen Sie nicht von Umrechnungsfunktionen jenseits dessen aus, was die Oberfläche zeigt: Die Auswahlfelder beschreiben Ihre Eingaben, und der Halbumfang wird aus den Werten berechnet, wie sie eingegeben wurden." },
          { "kind": "h3", "text": "Arbeiten mit dezimalen Seitenmaßen" },
          { "kind": "p", "text": "Dezimalzahlen folgen derselben Formel. Mit [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], also [[s=\\frac{15}{2}]], was [[[\\boxed{s=7.5\\text{ units}}]]] ergibt. Halten Sie die volle Dezimalgenauigkeit durch Addition und Division; runden Sie nur die endgültig angezeigte Antwort, und nur, wenn die Aufgabe es verlangt." },
          { "kind": "h3", "text": "Arbeiten mit irrationalen Seitenlängen" },
          { "kind": "p", "text": "Manche rechtwinklige Dreiecke haben irrationale Seiten, und die Formel behandelt sie genauso. Nehmen Sie ein 45-45-90-Dreieck mit [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], was die exakte Form [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]] ergibt, ungefähr [[s\\approx1.7071]]. Die exakte Wurzelschreibweise ist in der Mathematik wertvoll, weil sie die volle Genauigkeit bewahrt: Jede spätere Verwendung von [[s]] in der Formel von Heron oder einer Inkreisradius-Berechnung startet vom wahren Wert, nicht von einem gerundeten." },
          { "kind": "h3", "text": "Warum sollte man zu frühes Runden vermeiden?" },
          { "kind": "p", "text": "Vorzeitiges Runden injiziert Fehler in jede spätere Berechnung, und der Halbumfang ist oft ein Zwischenwert, nicht die endgültige Antwort. [[s]] vor der Eingabe in die Formel von Heron, wo es viermal vorkommt, auf zwei Dezimalstellen zu runden, verstärkt den Fehler merklich. Halten Sie während der Zwischenschritte ausreichende Genauigkeit: Führen Sie die volle Dezimalzahl oder die exakte Wurzel mit, und runden Sie einmal, am Ende, auf die Genauigkeit, die die Aufgabe verlangt." }
        ]
      },
      "sec-mistakes": {
        "h2": "Häufige Fehler bei der Berechnung des Halbumfangs eines rechtwinkligen Dreiecks",
        "blocks": [
          { "kind": "p", "text": "Sechzehn Fehler erklären fast jeden falschen Halbumfang. Jeder wird erklärt mit dem, was schiefgeht, warum es passiert und dem korrekten Vorgehen." },
          { "kind": "p", "text": "<strong>1. Die Summe nicht durch zwei teilen.</strong> 3 + 4 + 5 = 12 zu addieren und aufzuhören ergibt den Umfang, nicht den Halbumfang. Schließen Sie immer mit der Division ab: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Jede Seite teilen, bevor man die Formel versteht.</strong> Seiten einzeln zu halbieren und dann zu addieren geht arithmetisch auf, verschleiert aber die Struktur der Formel. Addieren Sie zuerst, teilen Sie einmal: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Die Hypotenuse nicht einbeziehen.</strong> Die Hypotenuse ist eine Grenzkante. Sie bei einem 3-4-5-Dreieck wegzulassen ergibt [[(3+4)/2=3.5]] statt 6." },
          { "kind": "p", "text": "<strong>4. Nur die beiden senkrechten Katheten verwenden.</strong> Derselbe Fehler wie oben in anderer Verkleidung. Die Katheten allein sind nicht die ganze Grenze; die Hypotenuse schließt die Form und muss gezählt werden." },
          { "kind": "p", "text": "<strong>5. Halbumfang mit vollem Umfang verwechseln.</strong> 12 für ein 3-4-5-Dreieck zu melden beantwortet „Was ist P?\", wenn nach s gefragt war. Merken Sie sich: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Halbumfang mit Fläche verwechseln.</strong> Für 3-4-5 sind beide numerisch 6, was zur Verwechslung einlädt. Sie unterscheiden sich in der Art: 6 Längeneinheiten gegenüber 6 Quadrateinheiten Oberfläche." },
          { "kind": "p", "text": "<strong>7. Das Ergebnis in Quadrateinheiten angeben.</strong> Ein Halbumfang von 6 cm Quadrat ist ein Kategorienfehler. Eine halbierte Länge bleibt eine Länge: 6 cm, nicht 6 cm²." },
          { "kind": "p", "text": "<strong>8. Eine falsche Hypotenuse verwenden.</strong> Wenn der Hypotenusenwert falsch ist, ist die Summe falsch und damit auch der Halbumfang. Verifizieren Sie [[c=\\sqrt{a^2+b^2}]], wenn die Hypotenuse berechnet statt gemessen wurde." },
          { "kind": "p", "text": "<strong>9. Maße eingeben, die kein rechtwinkliges Dreieck bilden.</strong> Prüfen Sie [[a^2+b^2=c^2]], bevor Sie der Bezeichnung „rechtwinkliges Dreieck\" vertrauen. Die Addition funktioniert trotzdem, aber die geometrische Bedeutung ändert sich." },
          { "kind": "p", "text": "<strong>10. Zentimeter und Meter mischen.</strong> 3 m zu 40 cm zu addieren ergibt weder 43 noch irgendetwas. Rechnen Sie zuerst in eine Einheit um." },
          { "kind": "p", "text": "<strong>11. Fuß und Zoll mischen.</strong> Die klassische imperiale Falle. Rechnen Sie Zoll vor dem Addieren in Fuß um (durch 12 teilen) oder stellen Sie die Einheitenwähler passend ein." },
          { "kind": "p", "text": "<strong>12. Zu früh runden.</strong> [[\\sqrt{2}]] vor dem Addieren auf 1,4 zu runden häuft Fehler an. Runden Sie nur die endgültige Antwort." },
          { "kind": "p", "text": "<strong>13. Eine fehlende Seite verwenden, ohne sie zu berechnen.</strong> Zwei bekannte Seiten sind kein Halbumfang. Stellen Sie die dritte zuerst mit dem Satz des Pythagoras wieder her, addieren Sie dann und halbieren Sie." },
          { "kind": "p", "text": "<strong>14. Die Formel von Heron falsch anwenden.</strong> Die Faktoren sind [[s-a]], [[s-b]] und [[s-c]]: Jede Seite wird vom Halbumfang subtrahiert, nicht von einer anderen Seite. Die Subtraktionen zu vertauschen bricht die Fläche." },
          { "kind": "p", "text": "<strong>15. Inkreisradius mit Umkreisradius verwechseln.</strong> Der Inkreisradius [[r=K/s]] berührt alle drei Seiten von innen; der Umkreisradius geht durch die Ecken und entspricht [[c/2]] für ein rechtwinkliges Dreieck. Verschiedene Kreise, verschiedene Formeln." },
          { "kind": "p", "text": "<strong>16. Annehmen, der Halbumfang beschreibe einen physischen Halbgrenzweg.</strong> Er ist die Hälfte der numerischen Summe, keine markierte Halbwegstrecke um das Dreieck. Behandeln Sie ihn als den abgeleiteten Zwischenwert, der er ist." },
          { "kind": "p", "text": "<strong>Falsch gegen richtig, Seite an Seite.</strong> Gegeben [[a=3,\\;b=4,\\;c=5]]: Falsch ist [[s=3+4+5=12]], was die Division überspringt und den vollen Umfang meldet. Ebenfalls falsch ist [[s=(3+4)/2=3.5]], was die Hypotenuse weglässt. Richtig ist [[s=\\frac{3+4+5}{2}]], was [[[\\boxed{s=6}]]] ergibt." }
        ]
      },
      "sec-verify": {
        "h2": "So prüfen Sie, ob Ihre Halbumfang-Antwort richtig ist",
        "blocks": [
          { "kind": "p", "text": "Acht unabhängige Kontrollen fangen fast jeden Fehler. Das 3-4-5-Dreieck demonstriert jede. Unabhängige Kontrollen zählen, weil sie auf verschiedene Weisen versagen: Wenn unzusammenhängende Methoden übereinstimmen, hat die Antwort ihr Vertrauen verdient." },
          { "kind": "p", "text": "<strong>Methode 1: Den Halbumfang verdoppeln.</strong> [[[\\boxed{P=2s}]]] muss dem vollen Umfang entsprechen: [[2\\times6=12=3+4+5]]. Wenn die Verdopplung die Seitensumme nicht reproduziert, gingen Division oder Addition schief." },
          { "kind": "p", "text": "<strong>Methode 2: Aus allen drei Seiten neu berechnen.</strong> Berechnen Sie [[s=\\frac{a+b+c}{2}]] von Grund auf neu: [[(3+4+5)/2=6]]. Ein zweiter Durchgang fängt Tipp- und Rechenfehler." },
          { "kind": "p", "text": "<strong>Methode 3: Die Pythagoras-Beziehung verifizieren.</strong> Prüfen Sie [[a^2+b^2=c^2]]: [[9+16=25]]. Das bestätigt, dass die Seiten ein rechtwinkliges Dreieck bilden, was die Seitenbezeichnungen validiert, von denen der Halbumfang abhängt." },
          { "kind": "p", "text": "<strong>Methode 4: Die Hypotenuse prüfen.</strong> Bestätigen Sie [[c>a]] und [[c>b]]: 5 ist größer als 3 und größer als 4. Wenn die vermeintliche Hypotenuse nicht die längste Seite ist, sind die Bezeichnungen falsch." },
          { "kind": "p", "text": "<strong>Methode 5: Die Dreiecksungleichung prüfen.</strong> Bestätigen Sie [[a+b>c]]: [[3+4=7>5]]. Die Summe der Katheten muss die Hypotenuse übertreffen, sonst existiert kein Dreieck." },
          { "kind": "p", "text": "<strong>Methode 6: Die Halbumfang-Schranke verifizieren.</strong> [[[\\boxed{s>c}]]] muss gelten: [[6>5]]. Diese einzelne Ungleichung fängt überraschend viele Bezeichnungsfehler." },
          { "kind": "p", "text": "<strong>Methode 7: Die Einheiten prüfen.</strong> Bestätigen Sie, dass alle drei Seitenlängen kompatible Einheiten verwenden und dass die Ausgabe ein lineares Maß ist. Gemischte Einheiten entwerten die Summe, selbst wenn die Arithmetik perfekt ist." },
          { "kind": "p", "text": "<strong>Methode 8: Mit den Lösungsschritten des Rechners vergleichen.</strong> Das angezeigte Ergebnis und die Rechenschritte helfen, Fehler zu erkennen: Wenn ein Schritt eine falsch getippte Seite oder eine übersprungene Division zeigt, ist der Fehler sichtbar, bevor die Antwort verwendet wird." }
        ]
      },
      "sec-conclusion": {
        "h2": "Halbe Grenze, volles Verständnis",
        "blocks": [
          { "kind": "p", "text": "Der Halbumfang eines rechtwinkligen Dreiecks ist eine kleine Idee mit großer Reichweite. Eine Addition und eine Division erzeugen eine Zahl, die den Inkreisradius erschließt, die Formel von Heron antreibt und die Flächenverifikation schärft. Die Formel verlangt drei Seiten, weil die Grenze drei Kanten hat, und die Hypotenuse verdient ihren Platz in der Summe als die Kante, die die Form schließt. Alles andere in diesem Leitfaden, die gerechneten Beispiele, die zwölf Anwendungen, die Eigenschaften, die Einheitenumrechnungen, die sechzehn Fehler, die acht Verifikationskontrollen, existiert, um diese eine halbierte Summe vor den kleinen Bezeichnungs- und Einheitenfehlern zu schützen, die plausibel aussehende falsche Antworten erzeugen." },
          { "kind": "p", "text": "Verwenden Sie den Rechner dieser Seite, wann immer alle drei Seiten gemessen sind, stellen Sie eine fehlende Seite über den Satz des Pythagoras wieder her, wenn sie es nicht sind, und prüfen Sie das Ergebnis an den Schranken c < s < a + b, bevor die Zahl in eine Zeichnung oder ein Modell geht. Wenn sich die Frage der Oberfläche innerhalb der Grenze zuwendet, warten die Formel von Heron und der Flächenrechner; wenn sie sich dem Kreis innerhalb des Dreiecks zuwendet, ist der Inkreisradius eine Division entfernt." }
        ]
      }
    },
    "relatedHeading": "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
    "relatedIntro": "Jedes dieser Werkzeuge erweitert die Halbumfang-Berechnung in eine Richtung: die volle Grenze, die Oberfläche, der Weg von der Fläche über den Halbumfang, der einbeschriebene Kreis oder die fehlenden Seiten hinter all dem.",
    "relatedItems": [
      "Rechner für den Umfang eines rechtwinkligen Dreiecks",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks",
      "Rechner für die Fläche eines rechtwinkligen Dreiecks aus dem Halbumfang",
      "Rechner für den Inkreisradius eines rechtwinkligen Dreiecks",
      "Rechner für die Seiten eines rechtwinkligen Dreiecks"
    ],
    "faqHeading": "Häufig gestellte Fragen",
    "faqs": [
      {
        "question": "Wie lautet die Formel für den Halbumfang eines rechtwinkligen Dreiecks?",
        "answer": "Die Formel lautet s = (a + b + c) / 2, wobei a und b die beiden Katheten sind, die den 90-Grad-Winkel bilden, und c die Hypotenuse, die längste Seite. Addieren Sie alle drei Seitenlängen und teilen Sie die Summe dann durch zwei. Gleichwertig: s = P / 2, wobei P der volle Umfang ist."
      },
      {
        "question": "Was bedeutet Halbumfang?",
        "answer": "Halbumfang bedeutet die Hälfte des Umfangs. Halb heißt die Hälfte und Umfang die vollständige Grenzlänge, sodass der Halbumfang genau die Hälfte der Gesamtstrecke um das Dreieck ist. Er ist ein abgeleitetes geometrisches Maß, das als Zwischenwert in vielen Dreiecksformeln verwendet wird."
      },
      {
        "question": "Warum ist der Halbumfang die Hälfte des Umfangs?",
        "answer": "Das ist seine Definition: Der Halbumfang wird konstruiert, indem man den vollen Umfang nimmt und durch zwei teilt. Der Halbwert erweist sich als die Größe, für die Formeln wie die Formel von Heron und die Inkreisradius-Beziehung K = rs geschrieben sind, weshalb er seinen eigenen Namen und sein eigenes Symbol s erhalten hat."
      },
      {
        "question": "Brauche ich alle drei Seiten, um den Halbumfang zu berechnen?",
        "answer": "Ja. Der Halbumfang ist die Hälfte der Summe aller drei Seitenlängen, sodass jede Seite bekannt sein muss, einschließlich der Hypotenuse. Wenn eine Seite fehlt, stellen Sie sie zuerst mit dem Satz des Pythagoras wieder her: c = √(a² + b²) für eine fehlende Hypotenuse oder a = √(c² − b²) für eine fehlende Kathete."
      },
      {
        "question": "Was ist der Unterschied zwischen Umfang und Halbumfang?",
        "answer": "Der Umfang P = a + b + c ist die volle Grenzlänge, während der Halbumfang s = (a + b + c) / 2 ihre Hälfte ist. Verwenden Sie den Umfang für physische Grenzarbeit wie Zäune oder Rahmen und den Halbumfang für Formelarbeit wie die Formel von Heron, Inkreisradius-Berechnungen und geometrische Beweise. Für ein 3-4-5-Dreieck ist P = 12 und s = 6."
      },
      {
        "question": "Wird der Halbumfang in Quadrateinheiten gemessen?",
        "answer": "Nein. Der Halbumfang ist ein eindimensionales Längenmaß, also nimmt er lineare Einheiten: Meter, Zentimeter, Fuß oder Zoll, passend zu den Seitenlängen. Quadrateinheiten gehören zur Fläche. Einen Halbumfang von 6 cm² zu melden ist ein Kategorienfehler; die korrekte Einheit ist 6 cm."
      },
      {
        "question": "Wie groß ist der Halbumfang eines 3-4-5 rechtwinkligen Dreiecks?",
        "answer": "Addieren Sie die Seiten: 3 + 4 + 5 = 12, teilen Sie dann durch zwei: s = 6 Einheiten. Der volle Umfang ist 12 Einheiten. Die Seiten erfüllen 3² + 4² = 5², was den rechten Winkel bestätigt, und der Halbumfang 6 übertrifft die Hypotenuse 5, wie es für jedes gültige Dreieck sein muss."
      },
      {
        "question": "Warum wird der Halbumfang in der Formel von Heron verwendet?",
        "answer": "Die Formel von Heron, K = √(s(s − a)(s − b)(s − c)), berechnet die Fläche allein aus den Seitenlängen, und sie ist in Bezug auf den Halbumfang s und die Differenzen s − a, s − b, s − c geschrieben. s zuerst zu berechnen zentriert den Ausdruck und hält ihn kompakt. Für 3-4-5 ergibt s = 6 K = √(6 × 3 × 2 × 1) = 6 Quadrateinheiten."
      },
      {
        "question": "Wie hängt der Halbumfang mit dem Inkreisradius zusammen?",
        "answer": "Fläche, Inkreisradius und Halbumfang erfüllen K = rs, also r = K / s. Für ein rechtwinkliges Dreieck vereinfacht sich das zu r = (a + b − c) / 2. Für 3-4-5: s = 6, K = 6, also r = 1. Der Halbumfang ist die Brücke, die drei Seitenlängen in den Radius des einbeschriebenen Kreises verwandelt."
      },
      {
        "question": "Kann ich den Halbumfang berechnen, wenn eine Seite fehlt?",
        "answer": "Ja, aber finden Sie zuerst die fehlende Seite. Bei den Katheten 6 und 8 ist die Hypotenuse √(36 + 64) = 10, also s = (6 + 8 + 10) / 2 = 12. Bei der Hypotenuse 13 und der Kathete 12 ist die fehlende Kathete √(169 − 144) = 5, also s = (5 + 12 + 13) / 2 = 15. Der Rechner auf dieser Seite braucht alle drei eingegebenen Seiten."
      },
      {
        "question": "Wie kann ich meine Halbumfang-Antwort verifizieren?",
        "answer": "Verdoppeln Sie sie: 2s muss dem vollen Umfang a + b + c entsprechen. Prüfen Sie, dass s die Hypotenuse übertrifft (s > c) und unter der Summe der Katheten liegt (s < a + b). Bestätigen Sie die Pythagoras-Beziehung a² + b² = c², vergewissern Sie sich, dass alle drei Seiten eine Einheit teilen, und vergleichen Sie mit den Lösungsschritten des Rechners."
      },
      {
        "question": "Kann der Halbumfang zur Berechnung der Dreiecksfläche verwendet werden?",
        "answer": "Ja, über die Formel von Heron: K = √(s(s − a)(s − b)(s − c)). Sie ist eine unabhängige Kontrolle der direkten rechtwinkligen Formel K = ab / 2. Für 3-4-5 liefern beide 6 Quadrateinheiten. Die Formel von Heron ist am wertvollsten, wenn keine Höhe bekannt ist oder wenn Sie eine zweite, unzusammenhängende Berechnung zur Bestätigung der Fläche wünschen."
      }
    ]
  }
};
