/**
 * trigRatiosGuideTranslations.batch1c.ts
 * Page 15 (Trig Ratios Guide), partial locales: de, it.
 * Consumed by trigRatiosGuideTranslations.batch1.ts via
 * export const TRIG_RATIOS_TRANSLATIONS_BATCH1C.
 *
 * G schema: tocHeading, tocItems (17 ids), sections (15 ids), faqs (12),
 * faqHeading, relatedHeading, relatedItems (9, fixed URL order).
 * KaTeX markers [[...]] / [[[...]]] kept byte-identical to English source;
 * every backslash doubled in TS source. No em dashes, no decorative unicode.
 */
export const TRIG_RATIOS_TRANSLATIONS_BATCH1C = {
  de: {
    tocHeading: "In dieser Anleitung",
    tocItems: {
      "sec-intro": "Was ist ein Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck?",
      "sec-triangle": "Die Seiten eines rechtwinkligen Dreiecks verstehen",
      "sec-ratios": "Trigonometrische Verhältnisse verstehen",
      "sec-six": "Die sechs trigonometrischen Verhältnisse im rechtwinkligen Dreieck",
      "sec-choose": "Das richtige trigonometrische Verhältnis wählen",
      "sec-howto": "So verwenden Sie den Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck",
      "sec-foundations": "Schritt-für-Schritt-Beispiele zu trigonometrischen Verhältnissen",
      "sec-applications": "Praktische Anwendungen trigonometrischer Verhältnisse",
      "sec-relate": "Wie die sechs trigonometrischen Verhältnisse zusammenhängen",
      "sec-angles": "Trigonometrische Verhältnisse bei verschiedenen Winkeln verstehen",
      "sec-missing-side": "So berechnen Sie eine fehlende Seite eines rechtwinkligen Dreiecks",
      "sec-inverse": "So finden Sie einen Winkel aus einem trigonometrischen Verhältnis",
      "sec-mistakes": "Häufige Fehler bei trigonometrischen Verhältnissen",
      "sec-verify": "So prüfen Sie, ob Ihre trigonometrischen Ergebnisse stimmen",
      "sec-related": "Verwandte Rechner",
      "sec-faq": "Häufige Fragen",
      "sec-conclusion": "Fazit"
    },
    sections: {
      "sec-intro": {
        h2: "Was ist ein Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck?",
        blocks: [
          { kind: "p", text: "Ein Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck berechnet die sechs trigonometrischen Verhältnisse, Sinus, Kosinus, Tangens, Kotangens, Sekans und Kosekans, aus den Seitenlängen eines rechtwinkligen Dreiecks. Jedes Verhältnis vergleicht ein bestimmtes Seitenpaar in Bezug auf einen gewählten spitzen Bezugswinkel. Der Rechner auf dieser Seite bietet sechs Modi, einen pro Verhältnis, sodass Sie die zwei Seiten eingeben, die jedes Verhältnis benötigt, und den Wert sofort erhalten." },
          { kind: "p", text: "Diese Verhältnisse hängen von einem Bezugswinkel ab, nicht nur vom Dreieck. Beim gleichen Dreieck vertauscht ein Wechsel des spitzen Winkels, an dem gemessen wird, die Rollen der beiden Katheten, sodass sich auch die Verhältniswerte ändern. Deshalb sind die Modi des Rechners nach bekannten Seitenpaaren geordnet: Gegenkathete und Hypotenuse ergeben den Sinus, Ankathete und Hypotenuse ergeben den Kosinus, und die beiden Katheten ergeben den Tangens. Die Kehrwert-Modi liefern Kosekans, Sekans und Kotangens aus denselben Paaren." },
          { kind: "p", text: "Betrachten Sie ein 3-4-5-Dreieck mit Gegenkathete 3, Ankathete 4 und Hypotenuse 5. Ein Dreieck liefert sechs verschiedene Werte: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] und [[\\tan(A)=3/4=0.75]], mit den Kehrwertverhältnissen [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] und [[\\cot(A)\\approx1.3333]]. Jedes Verhältnis stellt eine andere Frage an dieselbe Form. Wer die Formeln versteht, kann jedes Ergebnis von Hand prüfen, und das ist der sicherste Weg, falsch beschriftete Seiten zu erkennen." }
        ]
      },
      "sec-triangle": {
        h2: "Die Seiten eines rechtwinkligen Dreiecks verstehen",
        blocks: [
          { kind: "p", text: "Jedes trigonometrische Verhältnis ist ein Vergleich zweier Seiten, daher ist die korrekte Benennung der Seiten die Grundlage für alles Folgende. Diese Anleitung verwendet durchgehend eine einheitliche Konvention: [[A]] ist der spitze Bezugswinkel unten links, [[B]] ist der rechte Winkel unten rechts, [[C]] ist der andere spitze Winkel oben, Seite [[a]] ist die senkrechte Kathete, Seite [[b]] ist die waagerechte Basis und Seite [[c]] ist die geneigte Hypotenuse." },
          { kind: "h3", text: "Was ist ein rechtwinkliges Dreieck?" },
          { kind: "p", text: "Ein rechtwinkliges Dreieck hat einen Winkel von genau 90 Grad, die anderen beiden Winkel sind spitz. Die beiden Katheten treffen sich am rechten Winkel, und die Hypotenuse liegt dem rechten Winkel gegenüber. Da die drei Innenwinkel zusammen 180 Grad ergeben, sind die beiden spitzen Winkel komplementär: [[A+C=90^\\circ]]. Rechtwinklige Dreiecke eignen sich für trigonometrische Berechnungen, weil das Festlegen eines spitzen Winkels die Form des Dreiecks vollständig bestimmt: Alle rechtwinkligen Dreiecke mit demselben spitzen Winkel sind ähnlich, ihre Seitenverhältnisse stimmen also überein." },
          { kind: "h3", text: "Was ist die Gegenkathete?" },
          { kind: "p", text: "Die Gegenkathete liegt dem gewählten Bezugswinkel direkt gegenüber. In unserer Konvention ist Seite [[a]] die Gegenkathete zu Winkel [[A]]. In praktischen Aufgaben steht die Gegenkathete oft für eine senkrechte Höhe, einen Höhenunterschied oder die senkrechte Komponente einer Neigung. Ihre Rolle ist keiner bestimmten Seite fest zugeordnet: Ändert sich der Bezugswinkel, wird eine andere Seite zur Gegenkathete." },
          { kind: "h3", text: "Was ist die Ankathete?" },
          { kind: "p", text: "Die Ankathete berührt den Bezugswinkel, ist aber nicht die Hypotenuse. In unserer Konvention ist Seite [[b]] die Ankathete zu Winkel [[A]]. Sie steht oft für eine waagerechte Strecke, eine Bodendistanz oder eine waagerechte Projektion. Von den drei Seiten wird die Ankathete am häufigsten mit der Gegenkathete verwechselt, und genau dieser eine Tausch ist die häufigste Ursache falscher Verhältniswerte." },
          { kind: "h3", text: "Was ist die Hypotenuse?" },
          { kind: "p", text: "Die Hypotenuse liegt dem rechten Winkel gegenüber und ist immer die längste Seite des Dreiecks. In unserer Konvention ist sie die geneigte Seite [[c]]. In realen Situationen kann sie eine Leiter, ein Seil, eine geneigte Dachstrebe oder eine geradlinige Sichtdistanz darstellen. Sie kommt in den Formeln für Sinus, Kosinus, Sekans und Kosekans vor, aber nicht direkt in den Formeln für Tangens und Kotangens, die die beiden Katheten vergleichen." },
          { kind: "h3", text: "Warum der Bezugswinkel wichtig ist" },
          { kind: "p", text: "Gegenkathete und Ankathete sind relative Bezeichnungen, keine festen Namen. Für Winkel [[A]] ist die Gegenkathete [[a]] und die Ankathete [[b]]. Für Winkel [[C]] tauschen die Bezeichnungen: Die Gegenkathete ist [[b]] und die Ankathete [[a]]. Die Hypotenuse bleibt [[c]], unabhängig davon, welcher spitze Winkel der Bezugswinkel ist. Legen Sie immer fest, an welchem Winkel Sie messen, bevor Sie eine Seite beschriften." }
        ],
        imgAlt: "Rechtwinkliges Dreieck mit Winkel A unten links, Gegenkathete a in Gold, Ankathete b in Blau, Hypotenuse c in Grau",
        figcaption: "Anatomie eines rechtwinkligen Dreiecks: A ist der Bezugswinkel, B der 90-Grad-Winkel; Gegenkathete und Ankathete sind relativ zu A definiert."
      },
      "sec-ratios": {
        h2: "Trigonometrische Verhältnisse verstehen",
        blocks: [
          { kind: "p", text: "Ein trigonometrisches Verhältnis vergleicht zwei Seitenlängen eines rechtwinkligen Dreiecks in Bezug auf einen gewählten spitzen Winkel. Es beschreibt die Form des Dreiecks, nicht seine Größe: Verdoppeln Sie jede Seite, und alle sechs Verhältnisse bleiben exakt gleich, weil Zähler und Nenner mit demselben Faktor multipliziert werden. Ein 3-4-5-Dreieck und ein skaliertes 6-8-10-Dreieck haben identische Sinus-, Kosinus-, Tangens- und Kehrwerte. Diese Größenunabhängigkeit macht die Verhältnisse nützlich: Sie erfassen Winkel als reine Zahlen." },
          { kind: "h3", text: "SOH-CAH-TOA verstehen" },
          { kind: "p", text: "SOH-CAH-TOA ist die Standard-Gedächtnisstütze für die drei Hauptverhältnisse. SOH: Sinus = Gegenkathete / Hypotenuse. CAH: Kosinus = Ankathete / Hypotenuse. TOA: Tangens = Gegenkathete / Ankathete. Lesen Sie jede als Satz: Der Sinus eines Winkels ist die Länge der dem Winkel gegenüberliegenden Seite geteilt durch die Hypotenuse. Die Stütze deckt Sinus, Kosinus und Tangens ab; die Kehrwertverhältnisse kommen aus einer zweiten Regel: Kehren Sie den Bruch um. Kosekans kehrt den Sinus um, Sekans den Kosinus und Kotangens den Tangens." },
          { kind: "h3", text: "Warum trigonometrische Verhältnisse dimensionslos sind" },
          { kind: "p", text: "Ein Verhältnis dividiert eine Länge durch eine andere Länge, sodass sich die Einheiten aufheben: [[3\\text{ m}/5\\text{ m}=0.6]]. In Zentimetern ergibt dasselbe Dreieck [[300\\text{ cm}/500\\text{ cm}=0.6]], dieselbe Zahl. Der Wechsel kompatibler Maßeinheiten ändert ein trigonometrisches Verhältnis nie. Die praktische Folge: Ihre Eingaben müssen vor dem Dividieren eine Einheit teilen, aber das Ergebnis selbst trägt keine Einheit, weshalb der Rechner alle Eingaben als reine Längen behandelt." },
          { kind: "h3", text: "Warum ein Dreieck sechs Verhältnisse liefert" },
          { kind: "p", text: "Jedes Verhältnis vergleicht ein anderes Seitenpaar. Sinus vergleicht die Gegenkathete mit der Hypotenuse, Kosinus die Ankathete mit der Hypotenuse und Tangens die Gegenkathete mit der Ankathete. Kosekans, Sekans und Kotangens kehren Zähler und Nenner um. Sechs Verhältnisse, drei Seitenpaare, zwei Richtungen pro Paar. Sie widersprechen einander nicht; sie beantworten verschiedene geometrische Fragen zum selben Dreieck, weshalb ein Rechner alle sechs Modi anbietet." }
        ]
      },
      "sec-six": {
        h2: "Die sechs trigonometrischen Verhältnisse im rechtwinkligen Dreieck",
        blocks: [
          { kind: "p", text: "Dieser Abschnitt erklärt jedes Verhältnis im gleichen Format: was es bedeutet, seine Formel, welche Seiten es verwendet, warum der Bruch so geordnet ist, ein durchgerechnetes Beispiel am 3-4-5-Dreieck, was die Zahl bedeutet, wann das Verhältnis nützlich ist, wie es mit einem anderen Verhältnis zusammenhängt, und ein Fehler, den es zu vermeiden gilt." },
          { kind: "h3", text: "1. Sinus: Gegenkathete geteilt durch Hypotenuse" },
          { kind: "p", text: "Sinus vergleicht die Gegenkathete mit der Hypotenuse: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] Die Hypotenuse ist der Nenner, weil sie die längste Seite ist, und genau das hält den Sinus für spitze Winkel zwischen 0 und 1. Mit [[a=3]] und [[c=5]]: [[\\sin(A)=3/5]], also [[[\\boxed{\\sin(A)=0.6}]]] Das Ergebnis bedeutet, dass die Gegenkathete 60 Prozent der Hypotenuse beträgt. Sinus ist nützlich, wenn Gegenkathete und Hypotenuse das bekannte Paar sind, etwa beim Winkel einer Leiter aus ihrer Höhe und Länge. Er hängt mit dem Kosinus als komplementärem Partner zusammen: Der Sinus eines spitzen Winkels entspricht dem Kosinus des anderen. Zu vermeidender Fehler: 0.6 ist ein Verhältnis, kein Winkel von 0.6 Grad." },
          { kind: "h3", text: "2. Kosinus: Ankathete geteilt durch Hypotenuse" },
          { kind: "p", text: "Kosinus vergleicht die Ankathete mit der Hypotenuse: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]] Sowohl Sinus als auch Kosinus teilen durch die Hypotenuse, bleiben also beide zwischen 0 und 1; sie unterscheiden sich nur im Zähler, weshalb Sinus und Kosinus verschiedene Aspekte desselben Winkels beschreiben. Mit [[b=4]] und [[c=5]]: [[\\cos(A)=4/5]], also [[[\\boxed{\\cos(A)=0.8}]]] Die Ankathete beträgt 80 Prozent der Hypotenuse. Kosinus ist nützlich, wenn Ankathete und Hypotenuse bekannt sind, etwa bei waagerechter Dachlänge und Sparrenlänge eines Dachs. Er hängt über die Identität [[\\sin^2(A)+\\cos^2(A)=1]] mit dem Sinus zusammen. Zu vermeidender Fehler: Die Zähler vertauschen und 3/5 für den Kosinus statt 4/5 verwenden." },
          { kind: "h3", text: "3. Tangens: Gegenkathete geteilt durch Ankathete" },
          { kind: "p", text: "Tangens vergleicht die Gegenkathete mit der Ankathete: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]] Er lässt die Hypotenuse ganz aus, was ihn zum natürlichen Verhältnis für Neigungsaufgaben macht, bei denen die beiden Katheten die gemessenen Größen sind. Mit [[a=3]] und [[b=4]]: [[\\tan(A)=3/4]], also [[[\\boxed{\\tan(A)=0.75}]]] Die Gegenkathete ist 75 Prozent so lang wie die Ankathete. Tangens ist die mathematische Form von Anstieg durch waagerechte Strecke und kommt daher bei Dachneigung, Rampen und Gefällen vor. Anders als Sinus und Kosinus kann Tangens 1 überschreiten, wenn die Gegenkathete länger als die Ankathete ist. Zu vermeidender Fehler: Einen Tangens von 0.75 mit 75 Prozent eines rechten Winkels verwechseln." },
          { kind: "h3", text: "4. Kotangens: Ankathete geteilt durch Gegenkathete" },
          { kind: "p", text: "Kotangens ist der Kehrwert des Tangens: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]] Er kehrt den Seitenvergleich des Tangens um: Wo Tangens fragt, wie steil eine Neigung ist, fragt Kotangens, wie flach sie ist. Mit [[b=4]] und [[a=3]]: [[\\cot(A)=4/3]], also [[[\\boxed{\\cot(A)\\approx1.3333}]]] Gleichwertig: [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. Kotangens ist nützlich, wenn eine Aufgabe natürlicherweise Ankathete durch Gegenkathete liefert oder eine Formel in Kehrwertform geschrieben ist. Zu vermeidender Fehler: Kotangens als a/b schreiben, denn das ist der Tangens." },
          { kind: "h3", text: "5. Sekans: Hypotenuse geteilt durch Ankathete" },
          { kind: "p", text: "Sekans ist der Kehrwert des Kosinus: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]] Das Umdrehen des Kosinusbruchs bringt die Hypotenuse, die längste Seite, nach oben, weshalb Sekans für einen spitzen Winkel in einem gültigen rechtwinkligen Dreieck immer größer als 1 ist. Mit [[c=5]] und [[b=4]]: [[\\sec(A)=5/4]], also [[[\\boxed{\\sec(A)=1.25}]]] Gleichwertig: [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. Sekans ist nützlich in Physik- und Ingenieurformeln, die mit der Hypotenuse im Zähler formuliert sind. Zu vermeidender Fehler: Sekans mit Kosinus oder mit der Umkehrfunktion des Kosinus verwechseln." },
          { kind: "h3", text: "6. Kosekans: Hypotenuse geteilt durch Gegenkathete" },
          { kind: "p", text: "Kosekans ist der Kehrwert des Sinus: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]] Wie Sekans bringt er die Hypotenuse nach oben und ist daher für spitze Winkel immer größer als 1. Mit [[c=5]] und [[a=3]]: [[\\csc(A)=5/3]], also [[[\\boxed{\\csc(A)\\approx1.6667}]]] Gleichwertig: [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. Kosekans kommt in der Wellen- und Schwingungsmathematik vor, wo der Kehrwert des Sinus die bequeme Form ist. Zu vermeidender Fehler: Kosekans mit dem Umkehrsinus verwechseln; [[1/\\sin(A)]] ist Kosekans, während [[\\sin^{-1}(r)]] einen Winkel zurückgewinnt." },
          { kind: "h3", text: "Alle sechs Verhältnisse in einer Tabelle" },
          { kind: "p", text: "Alle sechs Berechnungen beziehen sich auf denselben Bezugswinkel [[A]]." }
        ],
        table: {
          headers: ["Verhältnis", "Formel", "Seitenbeziehung", "3-4-5-Beispiel"],
          rows: [
            ["Sinus", "[[a/c]]", "Gegenkathete / Hypotenuse", "[[3/5=0.6]]"],
            ["Kosinus", "[[b/c]]", "Ankathete / Hypotenuse", "[[4/5=0.8]]"],
            ["Tangens", "[[a/b]]", "Gegenkathete / Ankathete", "[[3/4=0.75]]"],
            ["Kotangens", "[[b/a]]", "Ankathete / Gegenkathete", "[[4/3\\approx1.3333]]"],
            ["Sekans", "[[c/b]]", "Hypotenuse / Ankathete", "[[5/4=1.25]]"],
            ["Kosekans", "[[c/a]]", "Hypotenuse / Gegenkathete", "[[5/3\\approx1.6667]]"]
          ]
        },
        imgAlt: "3-4-5-Dreieck mit sechs Feldern: sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        figcaption: "Ein 3-4-5-Dreieck liefert alle sechs Verhältnisse: drei Hauptverhältnisse und ihre drei Kehrwerte."
      },
      "sec-choose": {
        h2: "Das richtige trigonometrische Verhältnis wählen",
        blocks: [
          { kind: "p", text: "Das beste Verhältnis hängt von den zwei Seitenlängen ab, die in einer Aufgabe verfügbar sind. Jedes Seitenpaar erlaubt zwei Kehrwertberechnungen, und die sechs Modi des Rechners entsprechen genau diesen Paarungen:" },
          { kind: "p", text: "Wenn die Gegenkathete und die Hypotenuse bekannt sind, können Sie [[\\sin(A)=a/c]] und auch [[\\csc(A)=c/a]] berechnen. Wenn die Ankathete und die Hypotenuse bekannt sind, können Sie [[\\cos(A)=b/c]] und [[\\sec(A)=c/b]] berechnen. Wenn die beiden Katheten bekannt sind, können Sie [[\\tan(A)=a/b]] und [[\\cot(A)=b/a]] berechnen." },
          { kind: "h3", text: "So verwenden Sie den Sinus-Modus" },
          { kind: "p", text: "Wählen Sie den Sinus-Modus, wenn Gegenkathete und Hypotenuse bekannt sind. Geben Sie die Gegenkathete in das Feld \"Opposite a\" und die Hypotenuse in das Feld \"Hypotenuse c\" ein und klicken Sie dann auf \"Berechnen sin(A)\". Kein Modus erfordert alle drei Seitenlängen; jeder Modus fragt genau das Paar ab, das sein Verhältnis verwendet." },
          { kind: "h3", text: "So verwenden Sie den Kosinus-Modus" },
          { kind: "p", text: "Wählen Sie den Kosinus-Modus, wenn Ankathete und Hypotenuse bekannt sind. Geben Sie die Ankathete in das Feld \"Adjacent b\" und die Hypotenuse in das Feld \"Hypotenuse c\" ein und klicken Sie dann auf \"Berechnen cos(A)\"." },
          { kind: "h3", text: "So verwenden Sie den Tangens-Modus" },
          { kind: "p", text: "Wählen Sie den Tangens-Modus, wenn die beiden Katheten bekannt sind. Geben Sie die Gegenkathete in das Feld \"Opposite a\" und die Ankathete in das Feld \"Adjacent b\" ein und klicken Sie dann auf \"Berechnen tan(A)\"." },
          { kind: "h3", text: "So verwenden Sie den Kotangens-Modus" },
          { kind: "p", text: "Wählen Sie den Kotangens-Modus, wenn die Katheten bekannt sind und die Aufgabe als Ankathete durch Gegenkathete formuliert ist. Geben Sie zuerst die Ankathete in das Feld \"Adjacent b\" und die Gegenkathete in das Feld \"Opposite a\" ein und klicken Sie dann auf \"Berechnen cot(A)\"." },
          { kind: "h3", text: "So verwenden Sie den Sekans-Modus" },
          { kind: "p", text: "Wählen Sie den Sekans-Modus, wenn Hypotenuse und Ankathete bekannt sind. Geben Sie die Hypotenuse in das Feld \"Hypotenuse c\" und die Ankathete in das Feld \"Adjacent b\" ein und klicken Sie dann auf \"Berechnen sec(A)\"." },
          { kind: "h3", text: "So verwenden Sie den Kosekans-Modus" },
          { kind: "p", text: "Wählen Sie den Kosekans-Modus, wenn Hypotenuse und Gegenkathete bekannt sind. Geben Sie die Hypotenuse in das Feld \"Hypotenuse c\" und die Gegenkathete in das Feld \"Opposite a\" ein und klicken Sie dann auf \"Berechnen csc(A)\"." }
        ],
        table: {
          headers: ["Bekannte Seiten", "Direktes Verhältnis", "Kehrwertverhältnis"],
          rows: [
            ["Gegenkathete und Hypotenuse", "Sinus", "Kosekans"],
            ["Ankathete und Hypotenuse", "Kosinus", "Sekans"],
            ["Gegenkathete und Ankathete", "Tangens", "Kotangens"]
          ]
        }
      },
      "sec-howto": {
        h2: "So verwenden Sie den Rechner für trigonometrische Verhältnisse im rechtwinkligen Dreieck",
        blocks: [
          { kind: "p", text: "Befolgen Sie diese Schritte für jeden der sechs Modi:" },
          { kind: "p", text: "Die korrekte Seitenbestimmung ist wichtiger als das Auswendiglernen von Formeln. Die meisten falschen Antworten auf dieser Seite kommen von einer vertauschten Gegenkathete und Ankathete, nicht vom Rechnen." }
        ],
        steps: [
          "Bestimmen Sie den Bezugswinkel. Legen Sie fest, um welchen spitzen Winkel es in der Aufgabe geht. Alle Seitenbezeichnungen folgen aus dieser Wahl.",
          "Beschriften Sie Gegenkathete, Ankathete und Hypotenuse. Die Seite gegenüber dem Bezugswinkel ist die Gegenkathete, die ihn berührende Kathete die Ankathete, und die Seite gegenüber dem rechten Winkel die Hypotenuse.",
          "Stellen Sie fest, welche zwei Seitenlängen bekannt sind. Jeder Modus braucht genau ein Paar.",
          "Wählen Sie den Modus, der zu diesen zwei Seiten passt. Nutzen Sie die Tabelle im vorherigen Abschnitt, um Sinus, Kosinus, Tangens, Kotangens, Sekans oder Kosekans zu wählen.",
          "Geben Sie die erste erforderliche Seitenlänge ein. Die Felder sind beschriftet, zum Beispiel \"Opposite a\" und \"Hypotenuse c\".",
          "Geben Sie die zweite erforderliche Seitenlänge ein. Behalten Sie die Reihenfolge der Beschriftungen bei: Manche Modi nennen die Hypotenuse zuerst.",
          "Wählen Sie kompatible Einheiten. Nutzen Sie die Einheitenwähler neben jeder Eingabe, damit beide Messungen ein Einheitensystem teilen.",
          "Prüfen Sie, ob die Eingaben positiv und gültig sind. Beide Katheten müssen positiv sein, und die Hypotenuse muss länger als jede Kathete sein.",
          "Klicken Sie auf die Schaltfläche Berechnen. Zum Beispiel \"Berechnen sin(A)\" im Sinus-Modus.",
          "Prüfen Sie das Ergebnis und die Lösungsschritte. Der Rechner zeigt die Formel, das Einsetzen und den Endwert.",
          "Prüfen Sie die Live-Visualisierung. Stellen Sie sicher, dass die Beschriftungen des Dreiecksdiagramms zu Ihrem beabsichtigten Bezugswinkel passen.",
          "Verwenden Sie Zurücksetzen für eine neue Berechnung. Die Schaltfläche Zurücksetzen löscht alle Felder, sodass die nächste Berechnung sauber beginnt."
        ],
        closingParagraphs: [
          "Vollständige Rechner-Anleitung: Bei Gegenkathete 3, Ankathete 4 und Hypotenuse 5, alle in derselben Einheit, braucht und liefert jeder Modus Folgendes:",
          "1. Sinus-Modus: Geben Sie \"Opposite a\" = 3 und \"Hypotenuse c\" = 5 ein und klicken Sie auf \"Berechnen sin(A)\". Ergebnis: 0.6.",
          "2. Kosinus-Modus: Geben Sie \"Adjacent b\" = 4 und \"Hypotenuse c\" = 5 ein und klicken Sie auf \"Berechnen cos(A)\". Ergebnis: 0.8.",
          "3. Tangens-Modus: Geben Sie \"Opposite a\" = 3 und \"Adjacent b\" = 4 ein und klicken Sie auf \"Berechnen tan(A)\". Ergebnis: 0.75.",
          "4. Kotangens-Modus: Geben Sie \"Adjacent b\" = 4 und \"Opposite a\" = 3 ein und klicken Sie auf \"Berechnen cot(A)\". Ergebnis: etwa 1.3333.",
          "5. Sekans-Modus: Geben Sie \"Hypotenuse c\" = 5 und \"Adjacent b\" = 4 ein und klicken Sie auf \"Berechnen sec(A)\". Ergebnis: 1.25.",
          "6. Kosekans-Modus: Geben Sie \"Hypotenuse c\" = 5 und \"Opposite a\" = 3 ein und klicken Sie auf \"Berechnen csc(A)\". Ergebnis: etwa 1.6667.",
          "Die Verhältnisse sind einheitenlos, daher müssen die Eingabemessungen nur kompatible Einheiten haben, nicht eine bestimmte. Der Rechner stellt aus diesen Modi keine fehlenden Seiten oder Winkel wieder her; er berechnet das gewünschte Verhältnis aus den zwei Seiten, die Sie angeben."
        ]
      },
      "sec-foundations": {
        h2: "Schritt-für-Schritt-Beispiele zu trigonometrischen Verhältnissen",
        blocks: [
          { kind: "p", text: "Diese vier Beispiele bauen das Verständnis schrittweise auf, von einem einfachen ganzzahligen Dreieck bis zu den exakten Verhältnissen spezieller Dreiecke." },
          { kind: "h3", text: "Beispiel 1: Ein 3-4-5-rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]; berechnen Sie alle sechs Verhältnisse. Sinus: [[3/5=0.6]]. Kosinus: [[4/5=0.8]]. Tangens: [[3/4=0.75]]. Kotangens: [[4/3\\approx1.3333]]. Sekans: [[5/4=1.25]]. Kosekans: [[5/3\\approx1.6667]]. Die Verhältnisse unterscheiden sich, weil jedes ein anderes Seitenpaar vergleicht; sie beschreiben alle denselben Winkel [[A]]." },
          { kind: "h3", text: "Beispiel 2: Ein 5-12-13-rechtwinkliges Dreieck" },
          { kind: "p", text: "Gegeben [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Sinus: [[5/13\\approx0.3846]]. Kosinus: [[12/13\\approx0.9231]]. Tangens: [[5/12\\approx0.4167]]. Die Kehrwerte: Kosekans [[13/5=2.6]], Sekans [[13/12\\approx1.0833]], Kotangens [[12/5=2.4]]. Im Vergleich zum 3-4-5-Dreieck macht die längere Ankathete den Kosinus größer und den Tangens kleiner, und genau so sieht ein flacherer Winkel in Verhältnisform aus." },
          { kind: "h3", text: "Beispiel 3: Ein 45-45-90-Dreieck" },
          { kind: "p", text: "Gegeben [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Sinus und Kosinus sind gleich: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangens und Kotangens sind beide 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Sekans und Kosekans sind gleich: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Gleiche Katheten machen Sinus gleich Kosinus und Tangens gleich 1; die Symmetrie zwischen den beiden spitzen Winkeln erklärt alle drei Gleichheiten." },
          { kind: "h3", text: "Beispiel 4: Ein 30-60-90-Dreieck" },
          { kind: "p", text: "Für Winkel [[A=30^\\circ]] verwenden Sie [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Sinus: [[1/2=0.5]]. Kosinus: [[\\sqrt{3}/2\\approx0.8660]]. Tangens: [[1/\\sqrt{3}\\approx0.5774]]. Kotangens: [[\\sqrt{3}\\approx1.7321]]. Sekans: [[2/\\sqrt{3}\\approx1.1547]]. Kosekans: [[2]]. Die Verhältnisse für 30 und 60 Grad hängen zusammen: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] und [[\\tan(30^\\circ)=\\cot(60^\\circ)]], weil die komplementären Winkel Gegenkathete und Ankathete tauschen." }
        ]
      },
      "sec-applications": {
        h2: "Praktische Anwendungen trigonometrischer Verhältnisse",
        blocks: [
          { kind: "p", text: "Jedes Beispiel verwendet das Verhältnis, das zur Situation passt, nicht alle sechs. Jedes Beispiel benennt das Dreiecksmodell, die bekannten Seiten, den Bezugswinkel und die Bedeutung des Ergebnisses, mit Annahmen, wo sie wichtig sind." },
          { kind: "h3", text: "Beispiel 5: Dachneigung berechnen" },
          { kind: "p", text: "Ein Dach steigt 3 m bei einer waagerechten Strecke von 4 m. Das vereinfachte Dreieck nutzt die Höhe als Gegenkathete (a = 3 m) und die Strecke als Ankathete (b = 4 m), mit der Dachfläche als Hypotenuse. Tangens passt, weil beide Katheten bekannt sind: [[\\tan(A)=3/4=0.75]]. Das prozentuale Gefälle beträgt [[0.75\\times100\\%=75\\%]], und der Winkel ist [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Das Neigungsverhältnis, das prozentuale Gefälle und der Winkel sind drei Arten, dasselbe zu sagen: Das Dach steigt 0.75 m pro 1 m Strecke. Dies ist ein Geometriebeispiel, keine vollständige Dachplanung." },
          { kind: "h3", text: "Beispiel 6: Eine Leiter an einer Wand verstehen" },
          { kind: "p", text: "Eine Leiter reicht 4 m an einer Wand hoch, ihr Fuß steht 3 m von der Wand entfernt. Die Wandhöhe ist die Gegenkathete (a = 4 m), die Bodendistanz die Ankathete (b = 3 m) und die Leiter die Hypotenuse: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Für den Winkel zwischen Leiter und Boden: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. Der Winkel beträgt [[A\\approx53.13^\\circ]]. Ein Dreieck, ein Winkel, drei verschiedene Verhältnisse, jedes betont ein anderes Seitenpaar. Die Berechnung belegt keine Leitersicherheit." },
          { kind: "h3", text: "Beispiel 7: Das Gefälle einer Rampe bewerten" },
          { kind: "p", text: "Eine Rampe steigt 0.6 m bei einer waagerechten Strecke von 8 m. Tangens passt zu den beiden Katheten: [[\\tan(A)=0.6/8=0.075]]. Das prozentuale Gefälle beträgt [[0.075\\times100\\%=7.5\\%]], und der Winkel ist [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Ein Gefälle von 7.5 % ist kein Winkel von 7.5 Grad: Prozent ist das Verhältnis mal 100, während Grad den Winkel selbst messen, und beide laufen ab kleinen Werten schnell auseinander. Barrierefreiheit und Bauvorschriften erfordern zusätzliche Prüfungen über diese Geometrie hinaus." },
          { kind: "h3", text: "Beispiel 8: Die Höhe eines Gebäudes messen" },
          { kind: "p", text: "Ein Beobachter steht 24 m waagerecht von einem Gebäude entfernt, und die Spitze liegt 18 m über Augenhöhe. Die Ankathete beträgt 24 m und die Gegenkathete 18 m, also [[\\tan(A)=18/24=0.75]] und [[A\\approx36.87^\\circ]], der Höhenwinkel. Die geradlinige Sichtdistanz beträgt [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], was [[\\sin(A)=18/30=0.6]] und [[\\cos(A)=24/30=0.8]] für dieselbe Geometrie ergibt. Das Ergebnis bezieht sich auf Augenhöhe, nicht unbedingt auf die Gesamthöhe des Gebäudes." },
          { kind: "h3", text: "Beispiel 9: Einen Höhenunterschied vermessen" },
          { kind: "p", text: "Ein Vermesser modelliert einen senkrechten Höhenunterschied von 15 m über eine waagerechte Distanz von 20 m. Tangens: [[\\tan(A)=15/20=0.75]]. Die geradlinige Distanz beträgt [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], also beschreiben [[\\sin(A)=15/25=0.6]] und [[\\cos(A)=20/25=0.8]] dasselbe vermessene Dreieck über verschiedene Seitenpaare. Reale Vermessung kann Anpassungen der Instrumentenhöhe und Korrekturen über dieses ebene Modell hinaus erfordern." },
          { kind: "h3", text: "Beispiel 10: Die Höhe eines Baums aus seinem Schatten schätzen" },
          { kind: "p", text: "Ein senkrechter Baum wirft einen 9 m langen Schatten, und die Höhe über dem Boden beträgt 12 m. Bei Gegenkathete 12 m und Ankathete 9 m: [[\\tan(A)=12/9\\approx1.3333]]. Die Sichtlinien-Hypotenuse des vereinfachten Dreiecks beträgt [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], was [[\\sin(A)=12/15=0.8]] und [[\\cos(A)=9/15=0.6]] ergibt. Dies setzt ebenen Boden, einen senkrechten Baum und einen Schatten voraus, der bis zum Punkt direkt unter der Krone gemessen wird." },
          { kind: "h3", text: "Beispiel 11: Ein Abspannseil verstehen" },
          { kind: "p", text: "Ein Abspannseil ist 12 m über dem Boden an einem Mast befestigt, der Anker liegt 5 m waagerecht vom Mast entfernt. Die Seillänge beträgt [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Sinus: [[12/13\\approx0.9231]]. Kosinus: [[5/13\\approx0.3846]]. Tangens: [[12/5=2.4]]. Tangens überschreitet hier 1, weil die senkrechte Komponente länger als die waagerechte Strecke ist; das ist normal, kein Fehler. Diese Verhältnisse sagen nichts über Ankerfestigkeit oder Seilspannung aus." },
          { kind: "h3", text: "Beispiel 12: Treppengeometrie verstehen" },
          { kind: "p", text: "Eine vereinfachte Treppe hat eine Gesamthöhe von 2.4 m und eine waagerechte Strecke von 3.2 m, mit Diagonallänge [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Sinus: [[2.4/4=0.6]]. Kosinus: [[3.2/4=0.8]]. Tangens: [[2.4/3.2=0.75]]. Die Verhältnisse beschreiben die Gesamtgeometrie der Treppe, belegen aber keine Einhaltung von Treppenvorschriften, die auch einzelne Stufenmaße begrenzen." },
          { kind: "h3", text: "Beispiel 13: Die Richtung eines Kranauslegers verstehen" },
          { kind: "p", text: "Ein vereinfachter Kranausleger hat eine senkrechte Komponente von 8 m und eine waagerechte Projektion von 6 m, mit [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Sinus [[8/10=0.8]] beschreibt den senkrechten Anteil des Auslegers, Kosinus [[6/10=0.6]] seinen waagerechten Anteil und Tangens [[8/6\\approx1.3333]] seine Steilheit. Trigonometrische Verhältnisse allein bestimmen weder Krankapazität noch sicheren Betrieb." },
          { kind: "h3", text: "Beispiel 14: Das Gefälle eines Wanderwegs schätzen" },
          { kind: "p", text: "Ein gerader Wegabschnitt gewinnt 120 m Höhe über 800 m waagerecht. Tangens: [[\\tan(A)=120/800=0.15]]. Das Gefälle beträgt [[15\\%]] und der Winkel ist [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Dieses Modell mit konstantem Gefälle beschreibt keinen gewundenen Weg, liefert aber eine nützliche mittlere Steilheit für die Anstrengungsplanung." },
          { kind: "h3", text: "Beispiel 15: Eine mechanische Strebe prüfen" },
          { kind: "p", text: "Eine diagonale Strebe hat eine senkrechte Komponente von 1.5 m und eine waagerechte Komponente von 2 m, mit [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Sinus: [[1.5/2.5=0.6]]. Kosinus: [[2/2.5=0.8]]. Tangens: [[1.5/2=0.75]]. Das sind die 3-4-5-Verhältnisse in halbem Maßstab und zeigen, dass proportionale Skalierung jedes Verhältnis unverändert lässt. Dies sagt nichts über Festigkeit oder Tragfähigkeit der Strebe aus." },
          { kind: "h3", text: "Beispiel 16: Einen geraden Flugzeugsteigflug verstehen" },
          { kind: "p", text: "Ein vereinfachtes gerades Flugsegment gewinnt 1.5 km Höhe über 5 km waagerecht. Tangens: [[\\tan(A)=1.5/5=0.3]], also [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. Die geradlinige Distanz beträgt [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], was [[\\sin(A)\\approx1.5/5.22\\approx0.287]] ergibt. Tangens nutzt die Bodendistanz, Sinus die Flugwegdistanz; derselbe Steigflug, verschiedene Referenzlängen. Dies ist ein Geometriebeispiel, keine Flugnavigationsberechnung." },
          { kind: "h3", text: "Praktischer Beispielvergleich" }
        ],
        table: {
          headers: ["Situation", "Bekannte Maße", "Hauptverhältnis", "Wert", "Deutung"],
          rows: [
            ["Dachneigung", "Höhe 3 m, Strecke 4 m", "Tangens", "0.75", "75 % Gefälle, 36.87°"],
            ["Leiter", "Höhe 4 m, Fuß 3 m", "Sinus", "0.8", "Winkel zum Boden 53.13°"],
            ["Rampe", "Höhe 0.6 m, Strecke 8 m", "Tangens", "0.075", "7.5 % Gefälle, 4.29°"],
            ["Gebäudehöhe", "Höhe 18 m, Distanz 24 m", "Tangens", "0.75", "Höhenwinkel 36.87°"],
            ["Vermessung", "Höhe 15 m, Strecke 20 m", "Tangens", "0.75", "Gleiche Form wie Dachneigung"],
            ["Baumschatten", "Höhe 12 m, Schatten 9 m", "Tangens", "1.3333", "Steiler als 45°"],
            ["Abspannseil", "Höhe 12 m, Anker 5 m", "Tangens", "2.4", "Seil deutlich steiler als die Strecke"],
            ["Treppe", "Höhe 2.4 m, Strecke 3.2 m", "Tangens", "0.75", "Gleiche Verhältnisse wie 3-4-5"],
            ["Kranausleger", "Senkrecht 8 m, waagerecht 6 m", "Sinus", "0.8", "Größtenteils senkrechte Reichweite"],
            ["Wanderweg", "Gewinn 120 m, Strecke 800 m", "Tangens", "0.15", "15 % mittleres Gefälle"],
            ["Strebe", "Senkrecht 1.5 m, waagerecht 2 m", "Sinus", "0.6", "Skalierte 3-4-5-Geometrie"],
            ["Flugzeugsteigflug", "Gewinn 1.5 km, Distanz 5 km", "Tangens", "0.3", "16.70° Steigwinkel"]
          ]
        },
        imgAlt: "Vier Felder: Dachneigung 0.75, Leiter sin 0.8, Vermessung sin 0.6, Rampe tan 0.075 mit beschrifteten Dreiecken",
        figcaption: "Vier reale Aufgaben: Dachneigung, Leiter, Vermessung und Rampe, jeweils mit Dreieck und Schlüsselverhältnis."
      },
      "sec-relate": {
        h2: "Wie die sechs trigonometrischen Verhältnisse zusammenhängen",
        blocks: [
          { kind: "p", text: "Die sechs Verhältnisse sind keine sechs unabhängigen Fakten. Sie bilden drei Kehrwertpaare, zwei Quotientenbeziehungen und drei pythagoreische Identitäten. Wer diese Zusammenhänge kennt, macht aus sechs Formeln ein System und erhält Prüfmethoden für jede Berechnung." },
          { kind: "h3", text: "Kehrwertpaare" },
          { kind: "p", text: "Jedes Kehrwertpaar multipliziert sich zu 1, weil sich die Brüche aufheben: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. Am 3-4-5-Dreieck: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Kleine Abweichungen kommen von gerundeten Dezimalzahlen, nicht von der Mathematik." },
          { kind: "h3", text: "Tangens als Sinus geteilt durch Kosinus" },
          { kind: "p", text: "Die Quotientenbeziehung [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] folgt aus dem Kürzen der gemeinsamen Hypotenuse: [[(a/c)/(b/c)=a/b]]. Prüfen Sie sie mit den 3-4-5-Werten: [[0.6/0.8=0.75]], was [[\\tan(A)]] entspricht. Dies ist eine nützliche Prüfung: Wenn Ihr Tangens nicht Sinus geteilt durch Kosinus entspricht, ist eine Seite falsch beschriftet." },
          { kind: "h3", text: "Kotangens als Kosinus geteilt durch Sinus" },
          { kind: "p", text: "Ebenso [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]] Mit den 3-4-5-Werten: [[0.8/0.6\\approx1.3333]], was [[\\cot(A)]] entspricht. Kotangens erbt alles, was Tangens weiß, umgekehrt." },
          { kind: "h3", text: "Die pythagoreische trigonometrische Identität" },
          { kind: "p", text: "Die Identität [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] folgt direkt aus dem Satz des Pythagoras: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Für das 3-4-5-Dreieck: [[0.6^2+0.8^2=0.36+0.64=1]]. Zwei weitere Identitäten erweitern das Muster: [[1+\\tan^2(A)=\\sec^2(A)]] und [[1+\\cot^2(A)=\\csc^2(A)]], erhalten durch Dividieren der ersten Identität durch Kosinus-Quadrat und Sinus-Quadrat. Sie sind praktisch, wenn eine Aufgabe ein Verhältnis gibt und ein anderes ohne Seitenlängen braucht." },
          { kind: "h3", text: "Wie komplementäre Winkel die Verhältnisse beeinflussen" },
          { kind: "p", text: "Da [[A+C=90^\\circ]], vertauscht der Wechsel des Bezugswinkels von [[A]] zu [[C]] Gegenkathete und Ankathete: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] und [[\\csc(A)=\\sec(C)]]. Im 3-4-5-Dreieck ist [[\\sin(A)=3/5=0.6]], während [[\\cos(C)=3/5=0.6]], weil die Seite gegenüber [[A]] an [[C]] anliegt. Jedes Verhältnis an einem spitzen Winkel erscheint als seine Kofunktion am anderen." }
        ]
      },
      "sec-angles": {
        h2: "Trigonometrische Verhältnisse bei verschiedenen Winkeln verstehen",
        blocks: [
          { kind: "p", text: "Wenn ein spitzer Bezugswinkel wächst, ändern sich die Verhältnisse auf vorhersehbare Weise. Sinus steigt von nahe 0 gegen 1, während Kosinus von nahe 1 gegen 0 fällt. Tangens steigt von nahe 0 ohne obere Grenze, während Kotangens von großen Werten gegen 0 fällt. Sekans steigt von nahe 1 ohne Grenze, während Kosekans von großen Werten gegen 1 fällt. Dies sind Grenzverhaltensweisen nahe 0 und 90 Grad, keine Werte, die ein spitzer Winkel in einem gültigen nicht-entarteten rechtwinkligen Dreieck an den Endpunkten tatsächlich erreicht." },
          { kind: "p", text: "Das Muster ist symmetrisch: Sinus bei 30 Grad entspricht Kosinus bei 60 Grad, was die komplementäre Beziehung widerspiegelt. Kotangens, Sekans und Kosekans kommen aus den Kehrwertbeziehungen: zum Beispiel bei 30 Grad [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] und [[\\csc(30^\\circ)=1/0.5=2]]." }
        ],
        table: {
          headers: ["Winkel", "Sinus", "Kosinus", "Tangens"],
          rows: [
            ["[[30^\\circ]]", "0.5", "Etwa 0.8660", "Etwa 0.5774"],
            ["[[45^\\circ]]", "Etwa 0.7071", "Etwa 0.7071", "1"],
            ["[[60^\\circ]]", "Etwa 0.8660", "0.5", "Etwa 1.7321"]
          ]
        },
        imgAlt: "Flussdiagramm: Wähle Sinus/Kosekans, Kosinus/Sekans oder Tangens/Kotangens nach bekanntem Seitenpaar",
        figcaption: "Wählen Sie Ihren Rechnermodus aus dem Seitenpaar, das Sie kennen: Jedes Paar liefert ein direktes Verhältnis und seinen Kehrwert."
      },
      "sec-missing-side": {
        h2: "So berechnen Sie eine fehlende Seite eines rechtwinkligen Dreiecks",
        blocks: [
          { kind: "p", text: "Der Sechs-Verhältnisse-Rechner findet Verhältnisse aus bekannten Seiten. Eine unbekannte Seite aus einem bekannten Winkel und einer Seite zu finden, ist eine verwandte, aber andere Aufgabe, die durch Umstellen der Verhältnisformeln gelöst wird. Dies sind Begleitberechnungen, keine Funktionen des Verhältnisrechners selbst." },
          { kind: "h3", text: "Die Gegenkathete mit Sinus finden" },
          { kind: "p", text: "Beginnen Sie mit [[\\sin(A)=a/c]] und stellen Sie um: [[[\\boxed{a=c\\sin(A)}]]] Bei Hypotenuse 10 m und Winkel [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { kind: "h3", text: "Die Ankathete mit Kosinus finden" },
          { kind: "p", text: "Beginnen Sie mit [[\\cos(A)=b/c]] und stellen Sie um: [[[\\boxed{b=c\\cos(A)}]]] Bei Hypotenuse 10 m und Winkel [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { kind: "h3", text: "Die Gegenkathete mit Tangens finden" },
          { kind: "p", text: "Beginnen Sie mit [[\\tan(A)=a/b]] und stellen Sie um: [[[\\boxed{a=b\\tan(A)}]]] Bei Ankathete 8 m und Winkel [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. Tangens ist hier besonders nützlich, weil er die beiden Katheten direkt verbindet, ganz ohne Hypotenuse." }
        ]
      },
      "sec-inverse": {
        h2: "So finden Sie einen Winkel aus einem trigonometrischen Verhältnis",
        blocks: [
          { kind: "p", text: "Ein trigonometrisches Verhältnis ist kein Winkel. Wenn das Verhältnis bekannt und der Winkel unbekannt ist, gewinnen Umkehrfunktionen den spitzen Bezugswinkel zurück: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] und [[A=\\tan^{-1}(r)]]. Sie heißen Umkehrsinus, Umkehrkosinus und Umkehrtangens, auch bekannt als Arkussinus, Arkuskosinus und Arkustangens." },
          { kind: "h3", text: "Durchgerechnetes Beispiel mit Sinus" },
          { kind: "p", text: "Gegeben [[\\sin(A)=0.6]], ist der Winkel [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { kind: "h3", text: "Durchgerechnetes Beispiel mit Kosinus" },
          { kind: "p", text: "Gegeben [[\\cos(A)=0.8]], ist der Winkel [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { kind: "h3", text: "Durchgerechnetes Beispiel mit Tangens" },
          { kind: "p", text: "Gegeben [[\\tan(A)=0.75]], ist der Winkel [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { kind: "p", text: "Alle drei gewinnen denselben Winkel zurück, weil alle drei Verhältnisse dasselbe 3-4-5-Dreieck beschreiben. Der Unterschied zwischen Umkehrfunktion und Kehrwert zählt hier: [[1/\\sin(A)=\\csc(A)]] ist ein Kehrwert, ein anderes Verhältnis, während [[\\sin^{-1}(r)]] eine Umkehrfunktion ist, die einen Winkel zurückgibt. Wenn Sie Winkel von Hand berechnen, prüfen Sie, ob Ihr Werkzeug im Grad- oder Bogenmaßmodus ist; der Rechner dieser Seite arbeitet nur mit Verhältnissen, daher ist die Winkelbestimmung ein separater Schritt." }
        ]
      },
      "sec-mistakes": {
        h2: "Häufige Fehler bei trigonometrischen Verhältnissen",
        blocks: [
          { kind: "h3", text: "Gegenkathete mit Ankathete verwechseln" },
          { kind: "p", text: "Die Bezeichnungen hängen vom Bezugswinkel ab. In einem 3-4-5-Dreieck liefert die Berechnung von [[4/5=0.8]] für den Sinus tatsächlich den Kosinus. Lösung: Markieren Sie zuerst den Bezugswinkel und beschriften Sie dann die ihm gegenüberliegende Seite als Gegenkathete." },
          { kind: "h3", text: "Seiten zum falschen Bezugswinkel bestimmen" },
          { kind: "p", text: "Für Winkel C zu beschriften, während die Aufgabe nach Winkel A fragt, vertauscht jedes Verhältnis. Lösung: Schreiben Sie auf, welcher Winkel der Bezugswinkel ist, bevor Sie den Rechner anfassen." },
          { kind: "h3", text: "Sinus statt Kosinus verwenden" },
          { kind: "p", text: "Sinus braucht die Gegenkathete; Kosinus braucht die Ankathete. Wenn Sie die Ankathete und die Hypotenuse kennen, aber trotzdem [[a/c]] berechnen, haben Sie die Katheten vertauscht. Lösung: Ordnen Sie das Verhältnis mit der Tabelle im Auswahlabschnitt dem bekannten Paar zu." },
          { kind: "h3", text: "Tangens verwenden, obwohl Gegenkathete und Hypotenuse bekannt sind" },
          { kind: "p", text: "Tangens braucht die beiden Katheten. Bei bekannter Gegenkathete und Hypotenuse ist das richtige direkte Verhältnis der Sinus. Lösung: Prüfen Sie, welches Paar Sie tatsächlich haben, bevor Sie den Modus wählen." },
          { kind: "h3", text: "Zähler und Nenner vertauschen" },
          { kind: "p", text: "[[c/a]] zu berechnen, wenn Sie Sinus meinten, ergibt Kosekans, einen Wert über 1 statt unter 1. Lösung: Der Nenner ist die Hypotenuse für Sinus und Kosinus, die Ankathete für Tangens." },
          { kind: "h3", text: "Tangens mit Kotangens verwechseln" },
          { kind: "p", text: "Tangens ist [[a/b]]; Kotangens ist [[b/a]]. Sie sind Kehrwerte, daher kehrt ein Fehler die Antwort um. Lösung: Lesen Sie die Modusbeschriftung, bevor Sie Werte eingeben." },
          { kind: "h3", text: "Kosinus mit Sekans verwechseln" },
          { kind: "p", text: "Kosinus ist [[b/c]], immer unter 1; Sekans ist [[c/b]], immer über 1. Wenn Ihr Sekans unter 1 herauskommt, haben Sie Kosinus berechnet. Lösung: Kehrwertverhältnisse bringen die Hypotenuse nach oben." },
          { kind: "h3", text: "Sinus mit Kosekans verwechseln" },
          { kind: "p", text: "Dieselbe Umkehrung: Sinus ist [[a/c]], Kosekans ist [[c/a]]. Lösung: Prüfen Sie, ob Ihr Ergebnis im erwarteten Bereich für den gewählten Modus liegt." },
          { kind: "h3", text: "Annehmen, dass jedes Verhältnis kleiner als 1 sein muss" },
          { kind: "p", text: "Sinus und Kosinus liegen unter 1, aber Tangens, Kotangens, Sekans und Kosekans können alle 1 überschreiten. Ein Tangens von 2.4 ist für eine steile Neigung völlig gültig. Lösung: Lernen Sie den gültigen Bereich jedes Verhältnisses." },
          { kind: "h3", text: "Annehmen, dass ein Verhältnis wie 0.6 einen Winkel von 0.6 Grad darstellt" },
          { kind: "p", text: "Ein Verhältnis ist eine reine Zahl, kein Gradmaß. Der Winkel hinter [[\\sin(A)=0.6]] beträgt etwa 36.87 Grad, gefunden mit dem Umkehrsinus. Lösung: Verhältnisse beantworten \"wie vergleichen sich die Seiten\"; Umkehrfunktionen beantworten \"wie groß ist der Winkel\"." },
          { kind: "h3", text: "Vergessen, dass Verhältnisse dimensionslos sind" },
          { kind: "p", text: "Gegenkathete in Zoll und Hypotenuse in Fuß einzugeben verfälscht das Verhältnis, weil sich die Einheiten nicht mehr aufheben. Lösung: Rechnen Sie beide Eingaben zuerst in eine Einheit um." },
          { kind: "h3", text: "Inkompatible Maßeinheiten mischen" },
          { kind: "p", text: "Gleiche Ursache, wiederholenswert: Ein Verhältnis von 3 Zoll zu 5 Zentimetern ist nicht 0.6. Lösung: Verwenden Sie vor dem Berechnen die Einheitenwähler an beiden Eingaben." },
          { kind: "h3", text: "Null oder negative Seitenlängen eingeben" },
          { kind: "p", text: "Eine Dreiecksseite muss positiv sein. Null- oder negative Eingaben beschreiben kein Dreieck, und der Rechner kann kein sinnvolles Verhältnis liefern. Lösung: Messen Sie neu oder lesen Sie die Aufgabe erneut." },
          { kind: "h3", text: "Seitenlängen verwenden, die kein gültiges rechtwinkliges Dreieck bilden" },
          { kind: "p", text: "Wenn die Seiten die Pythagoras-Prüfung nicht bestehen, zum Beispiel 2, 3 und 10, existiert kein rechtwinkliges Dreieck mit diesen Längen. Lösung: Prüfen Sie [[a^2+b^2=c^2]], bevor Sie Verhältnisse berechnen." },
          { kind: "h3", text: "Zu früh runden" },
          { kind: "p", text: "Ein Zwischenverhältnis auf eine Dezimalstelle zu runden und dann zu multiplizieren vergrößert den Fehler. Lösung: Behalten Sie volle Genauigkeit durch jeden Schritt und runden Sie nur die Endantwort." },
          { kind: "h3", text: "Kehrwertverhältnisse mit Umkehrfunktionen verwechseln" },
          { kind: "p", text: "[[\\csc(A)=1/\\sin(A)]] ist ein Verhältnis; [[\\sin^{-1}(0.6)]] ist ein Winkel. Die ähnliche Schreibweise sorgt für echte Verwirrung. Lösung: Kehrwerte kehren Brüche um, Umkehrfunktionen gewinnen Winkel zurück." },
          { kind: "h3", text: "Die Hypotenuse als eine der Katheten behandeln" },
          { kind: "p", text: "Die Hypotenuse ist immer die längste Seite und liegt immer dem rechten Winkel gegenüber. Sie als Kathete zuzuordnen bricht jedes Verhältnis. Lösung: Finden Sie zuerst die längste Seite und beschriften Sie sie mit c." },
          { kind: "h3", text: "Annehmen, dass die sechs Verhältnisse denselben Wert haben" },
          { kind: "p", text: "In einem 3-4-5-Dreieck laufen die sechs Werte von 0.6 bis 1.6667. Nur spezielle Dreiecke wie 45-45-90 machen manche Verhältnisse gleich. Lösung: Erwarten Sie sechs verschiedene Zahlen aus einem Dreieck." },
          { kind: "h3", text: "Annehmen, dass dieselbe Seite immer die Gegenkathete ist" },
          { kind: "p", text: "Die Seite gegenüber Winkel A liegt an Winkel C an. Jede durchgerechnete Antwort muss ihren Bezugswinkel nennen. Lösung: Beschriften Sie die Seiten neu, sobald sich der Bezugswinkel ändert." },
          { kind: "h3", text: "Ein vereinfachtes Ergebnis als Ingenieursnachweis behandeln" },
          { kind: "p", text: "Eine Verhältnisprüfung an einer Strebe oder einem Abspannseil beschreibt Geometrie, nicht Festigkeit, Spannung oder Normkonformität. Lösung: Verwenden Sie Verhältnisse für den Geometrieschritt und qualifizierte Ingenieuranalyse für Sicherheitsentscheidungen." },
          { kind: "h3", text: "Falsch gegen richtig: Ein konkretes Beispiel" },
          { kind: "p", text: "Gegeben [[a=3]], [[b=4]], [[c=5]] verwendet eine falsche Sinusberechnung das falsche Seitenpaar: [[3/4=0.75]]. Das ist das Tangensverhältnis, nicht Sinus. Die richtige Berechnung ist [[\\sin(A)=3/5=0.6]]. Prüfen Sie mit der Quotientenbeziehung: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Die korrekte Seitenbestimmung ist entscheidend, denn das Rechnen ist trivial, sobald die Seiten stimmen." }
        ]
      },
      "sec-verify": {
        h2: "So prüfen Sie, ob Ihre trigonometrischen Ergebnisse stimmen",
        blocks: [
          { kind: "p", text: "Ein gültiges, nicht-entartetes rechtwinkliges Dreieck erfordert positive Katheten, eine Hypotenuse, die länger als jede Kathete ist, Seiten, die den Satz des Pythagoras erfüllen, kompatible Einheiten, das richtige Seitenpaar für das gewählte Verhältnis und übereinstimmende Kehrwertpaare. Vier schnelle Methoden decken all das ab." },
          { kind: "h3", text: "Prüfmethode 1: Die Seitenlängen prüfen" },
          { kind: "p", text: "Für das 3-4-5-Dreieck: [[3^2+4^2=5^2]] oder [[9+16=25]]. Das Bestehen der Pythagoras-Prüfung bestätigt, dass die Seiten ein echtes rechtwinkliges Dreieck beschreiben, bevor Sie einem daraus abgeleiteten Verhältnis vertrauen." },
          { kind: "h3", text: "Prüfmethode 2: Kehrwertpaare prüfen" },
          { kind: "p", text: "Jedes Direkt-Kehrwert-Paar muss sich zu 1 multiplizieren: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Kleine Unterschiede kommen von gerundeten Dezimalzahlen." },
          { kind: "h3", text: "Prüfmethode 3: Tangens mit Sinus und Kosinus prüfen" },
          { kind: "p", text: "Die Quotientenbeziehung liefert eine unabhängige Prüfung: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Wenn der Tangens-Modus des Rechners und diese Berechnung nicht übereinstimmen, wurde eine Seite falsch beschriftet." },
          { kind: "h3", text: "Prüfmethode 4: Den Umkehrwinkel prüfen" },
          { kind: "p", text: "Gewinnen Sie den Winkel zurück und prüfen Sie, ob er sinnvoll ist: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Ein spitzes Ergebnis zwischen 0 und 90 Grad, das zur Dreiecksform passt, bestätigt die Verhältnisse." }
        ]
      },
      "sec-conclusion": {
        h2: "Alle sechs Verhältnisse mit einem Dreieck beherrschen",
        blocks: [
          { kind: "p", text: "Jedes Verhältnis auf dieser Seite kommt aus denselben drei Seiten und einem Bezugswinkel. Beschriften Sie das Dreieck, ordnen Sie das Seitenpaar dem Modus zu und lassen Sie den Rechner rechnen. Sinus, Kosinus und Tangens beantworten die direkten Vergleiche; Kosekans, Sekans und Kotangens kehren sie um. SOH-CAH-TOA ruft die ersten drei ab, die Kehrwertregel den Rest, und die Identität Sinus-Quadrat plus Kosinus-Quadrat gleich 1 verbindet Sinus und Kosinus. Prüfen Sie mit der Pythagoras-Prüfung und den Kehrwertprodukten und kehren Sie dann zum Rechner oben auf dieser Seite zurück, um Ihre Zahlen durchzurechnen." }
        ]
      }
    },
    faqHeading: "Häufige Fragen",
    faqs: [
      { question: "Was sind die sechs trigonometrischen Verhältnisse eines rechtwinkligen Dreiecks?", answer: "Die sechs Verhältnisse sind Sinus (Gegenkathete durch Hypotenuse), Kosinus (Ankathete durch Hypotenuse), Tangens (Gegenkathete durch Ankathete), Kotangens (Ankathete durch Gegenkathete), Sekans (Hypotenuse durch Ankathete) und Kosekans (Hypotenuse durch Gegenkathete). Die ersten drei sind die Hauptverhältnisse; die letzten drei sind ihre Kehrwerte." },
      { question: "Wie berechnet man Sinus, Kosinus und Tangens?", answer: "Bestimmen Sie den Bezugswinkel und dividieren Sie dann das richtige Seitenpaar. Sinus ist Gegenkathete geteilt durch Hypotenuse, Kosinus ist Ankathete geteilt durch Hypotenuse und Tangens ist Gegenkathete geteilt durch Ankathete. Für ein 3-4-5-Dreieck ergibt das 3/5 = 0.6, 4/5 = 0.8 und 3/4 = 0.75." },
      { question: "Was ist der Unterschied zwischen direkten und Kehrwertverhältnissen?", answer: "Direkte Verhältnisse (Sinus, Kosinus, Tangens) stellen den kleineren Seitenvergleich zuerst, während Kehrwertverhältnisse (Kosekans, Sekans, Kotangens) den Bruch umkehren. Kosekans ist 1/Sinus, Sekans ist 1/Kosinus und Kotangens ist 1/Tangens. Jedes Paar multipliziert sich zu 1." },
      { question: "Warum sind trigonometrische Verhältnisse dimensionslos?", answer: "Ein Verhältnis dividiert eine Länge durch eine andere, sodass sich die Einheiten aufheben. 3 Meter geteilt durch 5 Meter sind 0.6, und 300 Zentimeter geteilt durch 500 Zentimeter sind ebenfalls 0.6. Das Ergebnis trägt keine Einheit, weshalb beide Eingaben nur ein Einheitensystem teilen müssen." },
      { question: "Wie wähle ich den richtigen Rechnermodus?", answer: "Ordnen Sie den Modus Ihrem bekannten Seitenpaar zu. Gegenkathete und Hypotenuse: Sinus- oder Kosekans-Modus. Ankathete und Hypotenuse: Kosinus- oder Sekans-Modus. Die beiden Katheten: Tangens- oder Kotangens-Modus. Das direkte Verhältnis und sein Kehrwert verwenden dieselben zwei Eingaben in umgekehrter Reihenfolge." },
      { question: "Kann ein Tangens- oder Kotangensverhältnis größer als 1 sein?", answer: "Ja. Tangens vergleicht die beiden Katheten und überschreitet daher 1, wenn die Gegenkathete länger als die Ankathete ist, wie bei einer steilen Neigung. Kotangens überschreitet 1, wenn die Ankathete länger ist. Nur Sinus und Kosinus sind auf 1 begrenzt, weil ihr Nenner die längste Seite ist." },
      { question: "Warum sind Sekans und Kosekans für spitze Winkel größer als 1?", answer: "Beide bringen die Hypotenuse, die längste Seite des Dreiecks, in den Zähler. Die längste Seite durch eine kürzere Seite zu teilen ergibt immer einen Wert über 1. Für ein 3-4-5-Dreieck ist Sekans 5/4 = 1.25 und Kosekans 5/3, also etwa 1.6667." },
      { question: "Wie finde ich einen Winkel aus einem trigonometrischen Verhältnis?", answer: "Verwenden Sie eine Umkehrfunktion: Arkussinus für ein Sinusverhältnis, Arkuskosinus für Kosinus, Arkustangens für Tangens. Wenn zum Beispiel der Sinus 0.6 beträgt, ist der Winkel Arkussinus(0.6), also etwa 36.87 Grad. Beachten Sie, dass dies etwas anderes ist als der Kehrwert: 1/Sinus ist Kosekans, nicht Arkussinus." },
      { question: "Wie berechne ich eine fehlende Seite mit Trigonometrie?", answer: "Stellen Sie die Verhältnisformel um. Bei bekanntem Winkel und Hypotenuse ist die Gegenkathete die Hypotenuse mal Sinus des Winkels, und die Ankathete ist die Hypotenuse mal Kosinus. Bei bekannter Ankathete ist die Gegenkathete die Ankathete mal Tangens des Winkels." },
      { question: "Was ist der Unterschied zwischen Umkehrsinus und Kosekans?", answer: "Der Umkehrsinus (Arkussinus) nimmt ein Verhältnis und gibt einen Winkel zurück: Arkussinus(0.6) sind etwa 36.87 Grad. Kosekans nimmt dasselbe Verhältnis und gibt seinen Kehrwert zurück: 1/0.6 sind etwa 1.6667, immer noch ein Verhältnis. Eines macht die Sinusfunktion rückgängig; das andere kehrt den Bruch um." },
      { question: "Wie kann ich meine trigonometrischen Berechnungen prüfen?", answer: "Vier Prüfungen: Bestätigen Sie, dass die Seiten den Satz des Pythagoras erfüllen, bestätigen Sie, dass sich jedes Kehrwertpaar zu 1 multipliziert, bestätigen Sie, dass Tangens gleich Sinus geteilt durch Kosinus ist, und gewinnen Sie den Winkel mit einer Umkehrfunktion zurück, um zu sehen, ob er spitz und sinnvoll ist. Stimmen alle Prüfungen überein, sind die Seitenbeschriftungen korrekt." },
      { question: "Wie werden trigonometrische Verhältnisse im Alltag verwendet?", answer: "Sie wandeln gemessene Seiten in Winkel und Neigungen um: Dachneigung aus Höhe und Strecke, Leiterwinkel aus Höhe und Fußdistanz, Rampengefälle, Gebäudehöhenwinkel, Vermessungssichtlinien, Kranauslegerrichtung und Weggefälle. Das Verhältnis liefert die Geometrie; separate Ingenieurprüfungen behandeln die Sicherheit." }
    ],
    relatedHeading: "Entdecken Sie verwandte Rechner für rechtwinklige Dreiecke",
    relatedItems: [
      "Sinus-Verhältnis-Rechner",
      "Kosinus-Verhältnis-Rechner",
      "Tangens-Verhältnis-Rechner",
      "Kotangens-Verhältnis-Rechner",
      "Sekans-Verhältnis-Rechner",
      "Kosekans-Verhältnis-Rechner",
      "Winkelrechner für rechtwinklige Dreiecke",
      "Seitenrechner für rechtwinklige Dreiecke mit Winkel",
      "Rechner für spezielle rechtwinklige Dreiecke"
    ]
  },
  it: {
    tocHeading: "In questa guida",
    tocItems: {
      "sec-intro": "Che cos'è una calcolatrice dei rapporti trigonometrici del triangolo rettangolo?",
      "sec-triangle": "Capire i lati di un triangolo rettangolo",
      "sec-ratios": "Capire i rapporti trigonometrici",
      "sec-six": "I sei rapporti trigonometrici del triangolo rettangolo",
      "sec-choose": "Come scegliere il rapporto trigonometrico giusto",
      "sec-howto": "Come usare la calcolatrice dei rapporti trigonometrici del triangolo rettangolo",
      "sec-foundations": "Esempi passo passo dei rapporti trigonometrici",
      "sec-applications": "Applicazioni reali dei rapporti trigonometrici",
      "sec-relate": "Come sono collegati i sei rapporti trigonometrici",
      "sec-angles": "Capire i rapporti trigonometrici a diversi angoli",
      "sec-missing-side": "Come calcolare un lato mancante di un triangolo rettangolo",
      "sec-inverse": "Come trovare un angolo da un rapporto trigonometrico",
      "sec-mistakes": "Errori comuni nell'uso dei rapporti trigonometrici",
      "sec-verify": "Come verificare se i risultati trigonometrici sono validi",
      "sec-related": "Calcolatrici correlate",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    sections: {
      "sec-intro": {
        h2: "Che cos'è una calcolatrice dei rapporti trigonometrici del triangolo rettangolo?",
        blocks: [
          { kind: "p", text: "Una calcolatrice dei rapporti trigonometrici del triangolo rettangolo calcola i sei rapporti trigonometrici, seno, coseno, tangente, cotangente, secante e cosecante, dalle lunghezze dei lati di un triangolo rettangolo. Ogni rapporto confronta una coppia specifica di lati rispetto a un angolo acuto di riferimento scelto. La calcolatrice in questa pagina offre sei modalità, una per rapporto, così inserisci i due lati richiesti da ciascun rapporto e ottieni subito il valore." },
          { kind: "p", text: "Questi rapporti dipendono da un angolo di riferimento, non solo dal triangolo. Per lo stesso triangolo, cambiare l'angolo acuto rispetto al quale si misura scambia i ruoli dei due cateti, quindi cambiano anche i valori dei rapporti. Per questo le modalità della calcolatrice sono organizzate per coppie di lati noti: cateto opposto e ipotenusa danno il seno, cateto adiacente e ipotenusa danno il coseno, e i due cateti danno la tangente. Le modalità reciproche danno cosecante, secante e cotangente dalle stesse coppie." },
          { kind: "p", text: "Considera un triangolo 3-4-5 con cateto opposto 3, cateto adiacente 4 e ipotenusa 5. Un triangolo produce sei valori diversi: [[\\sin(A)=3/5=0.6]], [[\\cos(A)=4/5=0.8]] e [[\\tan(A)=3/4=0.75]], con i rapporti reciproci [[\\csc(A)\\approx1.6667]], [[\\sec(A)=1.25]] e [[\\cot(A)\\approx1.3333]]. Ogni rapporto pone una domanda diversa sulla stessa forma. Capire le formule permette di verificare a mano qualsiasi risultato, ed è il modo più sicuro per individuare lati etichettati male." }
        ]
      },
      "sec-triangle": {
        h2: "Capire i lati di un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Ogni rapporto trigonometrico è un confronto tra due lati, quindi nominare correttamente i lati è il fondamento di tutto ciò che segue. Questa guida usa una convenzione unica e coerente: [[A]] è l'angolo acuto di riferimento in basso a sinistra, [[B]] è l'angolo retto in basso a destra, [[C]] è l'altro angolo acuto in alto, il lato [[a]] è il cateto verticale, il lato [[b]] è la base orizzontale e il lato [[c]] è l'ipotenusa inclinata." },
          { kind: "h3", text: "Che cos'è un triangolo rettangolo?" },
          { kind: "p", text: "Un triangolo rettangolo ha un angolo di esattamente 90 gradi, con gli altri due angoli acuti. I due cateti si incontrano all'angolo retto, e l'ipotenusa si trova di fronte all'angolo retto. Poiché i tre angoli interni sommano a 180 gradi, i due angoli acuti sono complementari: [[A+C=90^\\circ]]. I triangoli rettangoli si prestano ai calcoli trigonometrici perché fissare un angolo acuto fissa completamente la forma del triangolo: tutti i triangoli rettangoli con lo stesso angolo acuto sono simili, quindi i loro rapporti tra i lati coincidono." },
          { kind: "h3", text: "Che cos'è il cateto opposto?" },
          { kind: "p", text: "Il cateto opposto si trova direttamente di fronte all'angolo di riferimento scelto. Nella nostra convenzione, il lato [[a]] è opposto all'angolo [[A]]. Nei problemi pratici il cateto opposto rappresenta spesso un'altezza verticale, un dislivello o la componente verticale di una pendenza. Il suo ruolo non è legato a un lato particolare: se cambia l'angolo di riferimento, un lato diverso diventa opposto." },
          { kind: "h3", text: "Che cos'è il cateto adiacente?" },
          { kind: "p", text: "Il cateto adiacente tocca l'angolo di riferimento ma non è l'ipotenusa. Nella nostra convenzione, il lato [[b]] è adiacente all'angolo [[A]]. Rappresenta spesso una distanza orizzontale, una distanza al suolo o una proiezione orizzontale. Tra i tre lati, il cateto adiacente è quello più spesso confuso con il cateto opposto, e questo singolo scambio è la fonte più comune di valori errati." },
          { kind: "h3", text: "Che cos'è l'ipotenusa?" },
          { kind: "p", text: "L'ipotenusa è opposta all'angolo retto ed è sempre il lato più lungo del triangolo. Nella nostra convenzione è il lato inclinato [[c]]. Nelle situazioni reali può rappresentare una scala, un cavo, un puntone inclinato di un tetto o una distanza visiva in linea retta. Compare nelle formule di seno, coseno, secante e cosecante, ma non direttamente in quelle di tangente e cotangente, che confrontano i due cateti." },
          { kind: "h3", text: "Perché l'angolo di riferimento è importante" },
          { kind: "p", text: "Opposto e adiacente sono etichette relative, non nomi permanenti. Per l'angolo [[A]], il cateto opposto è [[a]] e il cateto adiacente è [[b]]. Per l'angolo [[C]], le etichette si scambiano: il cateto opposto è [[b]] e il cateto adiacente è [[a]]. L'ipotenusa resta [[c]] qualunque sia l'angolo acuto di riferimento. Decidi sempre rispetto a quale angolo stai misurando prima di etichettare un lato." }
        ],
        imgAlt: "Triangolo rettangolo: angolo A evidenziato, cateto opposto a in oro, adiacente b in blu, ipotenusa c in grigio",
        figcaption: "Anatomia di un triangolo rettangolo: A è l'angolo di riferimento, B è l'angolo di 90 gradi, e opposto e adiacente sono definiti rispetto ad A."
      },
      "sec-ratios": {
        h2: "Capire i rapporti trigonometrici",
        blocks: [
          { kind: "p", text: "Un rapporto trigonometrico confronta due lunghezze dei lati di un triangolo rettangolo rispetto a un angolo acuto scelto. Descrive la forma del triangolo, non la sua dimensione: raddoppia ogni lato e tutti i sei rapporti restano esattamente uguali, perché numeratore e denominatore sono moltiplicati per lo stesso fattore. Un triangolo 3-4-5 e un triangolo 6-8-10 in scala hanno seno, coseno, tangente e valori reciproci identici. Questa indipendenza dalla dimensione rende utili i rapporti: catturano gli angoli come numeri puri." },
          { kind: "h3", text: "Capire SOH-CAH-TOA" },
          { kind: "p", text: "SOH-CAH-TOA è la regola mnemonica standard per i tre rapporti principali. SOH: Seno = Opposto / Ipotenusa. CAH: Coseno = Adiacente / Ipotenusa. TOA: Tangente = Opposto / Adiacente. Leggi ciascuna come una frase: il seno di un angolo è la lunghezza del lato opposto a quell'angolo divisa per l'ipotenusa. La regola copre seno, coseno e tangente; i rapporti reciproci vengono da una seconda regola: capovolgi la frazione. La cosecante capovolge il seno, la secante il coseno e la cotangente la tangente." },
          { kind: "h3", text: "Perché i rapporti trigonometrici sono adimensionali" },
          { kind: "p", text: "Un rapporto divide una lunghezza per un'altra lunghezza, quindi le unità si cancellano: [[3\\text{ m}/5\\text{ m}=0.6]]. In centimetri lo stesso triangolo dà [[300\\text{ cm}/500\\text{ cm}=0.6]], lo stesso numero. Cambiare unità di misura compatibili non cambia mai un rapporto trigonometrico. La conseguenza pratica è che gli input devono condividere un'unità prima di dividere, ma il risultato stesso non ha unità, ed è per questo che la calcolatrice tratta tutti gli input come semplici lunghezze." },
          { kind: "h3", text: "Perché un triangolo produce sei rapporti" },
          { kind: "p", text: "Ogni rapporto confronta una coppia diversa di lati. Il seno confronta il cateto opposto con l'ipotenusa, il coseno il cateto adiacente con l'ipotenusa e la tangente il cateto opposto con il cateto adiacente. Cosecante, secante e cotangente invertono numeratore e denominatore corrispondenti. Sei rapporti, tre coppie di lati, due direzioni per coppia. Non si contraddicono; rispondono a domande geometriche diverse sullo stesso triangolo, ed è per questo che una calcolatrice offre tutte e sei le modalità." }
        ]
      },
      "sec-six": {
        h2: "I sei rapporti trigonometrici del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Questa sezione spiega ogni rapporto nello stesso formato: cosa significa, la sua formula, quali lati usa, perché la frazione è ordinata così, un esempio svolto sul triangolo 3-4-5, cosa significa il numero, quando il rapporto è utile, come è collegato a un altro rapporto e un errore da evitare." },
          { kind: "h3", text: "1. Seno: cateto opposto diviso per l'ipotenusa" },
          { kind: "p", text: "Il seno confronta il cateto opposto con l'ipotenusa: [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] L'ipotenusa è il denominatore perché è il lato più lungo, ed è questo a mantenere il seno tra 0 e 1 per gli angoli acuti. Con [[a=3]] e [[c=5]]: [[\\sin(A)=3/5]], quindi [[[\\boxed{\\sin(A)=0.6}]]] Il risultato significa che il cateto opposto è il 60 per cento dell'ipotenusa. Il seno è utile quando il cateto opposto e l'ipotenusa sono la coppia nota, come nel trovare l'angolo di una scala dalla sua altezza e lunghezza. È collegato al coseno come partner complementare: il seno di un angolo acuto è uguale al coseno dell'altro. Errore da evitare: 0.6 è un rapporto, non un angolo di 0.6 gradi." },
          { kind: "h3", text: "2. Coseno: cateto adiacente diviso per l'ipotenusa" },
          { kind: "p", text: "Il coseno confronta il cateto adiacente con l'ipotenusa: [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]] Sia il seno sia il coseno dividono per l'ipotenusa, quindi restano entrambi tra 0 e 1; differiscono solo nel numeratore, ed è per questo che seno e coseno descrivono aspetti diversi dello stesso angolo. Con [[b=4]] e [[c=5]]: [[\\cos(A)=4/5]], quindi [[[\\boxed{\\cos(A)=0.8}]]] Il cateto adiacente è l'80 per cento dell'ipotenusa. Il coseno è utile quando sono noti il cateto adiacente e l'ipotenusa, come nella proiezione orizzontale di un tetto e la lunghezza del travetto. È collegato al seno tramite l'identità [[\\sin^2(A)+\\cos^2(A)=1]]. Errore da evitare: scambiare i numeratori, usando 3/5 per il coseno invece di 4/5." },
          { kind: "h3", text: "3. Tangente: cateto opposto diviso per il cateto adiacente" },
          { kind: "p", text: "La tangente confronta il cateto opposto con il cateto adiacente: [[[\\boxed{\\tan(A)=\\frac{a}{b}}]]] Salta del tutto l'ipotenusa, il che la rende il rapporto naturale per i problemi di pendenza in cui i due cateti sono le quantità misurate. Con [[a=3]] e [[b=4]]: [[\\tan(A)=3/4]], quindi [[[\\boxed{\\tan(A)=0.75}]]] Il cateto opposto è lungo il 75 per cento del cateto adiacente. La tangente è la forma matematica di dislivello su distanza orizzontale, quindi compare in pendenze dei tetti, rampe e pendenze stradali. A differenza di seno e coseno, la tangente può superare 1 quando il cateto opposto è più lungo di quello adiacente. Errore da evitare: confondere una tangente di 0.75 con il 75 per cento di un angolo retto." },
          { kind: "h3", text: "4. Cotangente: cateto adiacente diviso per il cateto opposto" },
          { kind: "p", text: "La cotangente è il reciproco della tangente: [[[\\boxed{\\cot(A)=\\frac{b}{a}}]]] Inverte il confronto tra i lati della tangente, quindi dove la tangente chiede quanto è ripida una pendenza, la cotangente chiede quanto è dolce. Con [[b=4]] e [[a=3]]: [[\\cot(A)=4/3]], quindi [[[\\boxed{\\cot(A)\\approx1.3333}]]] Equivalentemente, [[\\cot(A)=1/\\tan(A)=1/0.75\\approx1.3333]]. La cotangente è utile quando un problema dà naturalmente adiacente su opposto, o quando una formula è scritta in forma reciproca. Errore da evitare: scrivere la cotangente come a/b, che è la tangente." },
          { kind: "h3", text: "5. Secante: ipotenusa divisa per il cateto adiacente" },
          { kind: "p", text: "La secante è il reciproco del coseno: [[[\\boxed{\\sec(A)=\\frac{c}{b}}]]] Capovolgere la frazione del coseno porta l'ipotenusa, il lato più lungo, al numeratore, ed è per questo che la secante è sempre maggiore di 1 per un angolo acuto in un triangolo rettangolo valido. Con [[c=5]] e [[b=4]]: [[\\sec(A)=5/4]], quindi [[[\\boxed{\\sec(A)=1.25}]]] Equivalentemente, [[\\sec(A)=1/\\cos(A)=1/0.8=1.25]]. La secante è utile nelle formule di fisica e ingegneria espresse con l'ipotenusa al numeratore. Errore da evitare: confondere la secante con il coseno o con la funzione coseno inversa." },
          { kind: "h3", text: "6. Cosecante: ipotenusa divisa per il cateto opposto" },
          { kind: "p", text: "La cosecante è il reciproco del seno: [[[\\boxed{\\csc(A)=\\frac{c}{a}}]]] Come la secante, porta l'ipotenusa al numeratore, quindi è sempre maggiore di 1 per gli angoli acuti. Con [[c=5]] e [[a=3]]: [[\\csc(A)=5/3]], quindi [[[\\boxed{\\csc(A)\\approx1.6667}]]] Equivalentemente, [[\\csc(A)=1/\\sin(A)=1/0.6\\approx1.6667]]. La cosecante compare nella matematica delle onde e delle oscillazioni, dove il reciproco del seno è la forma comoda. Errore da evitare: confondere la cosecante con il seno inverso; [[1/\\sin(A)]] è la cosecante, mentre [[\\sin^{-1}(r)]] recupera un angolo." },
          { kind: "h3", text: "Tutti e sei i rapporti in una tabella" },
          { kind: "p", text: "Tutti e sei i calcoli si riferiscono allo stesso angolo di riferimento [[A]]." }
        ],
        table: {
          headers: ["Rapporto", "Formula", "Relazione tra i lati", "Esempio 3-4-5"],
          rows: [
            ["Seno", "[[a/c]]", "Opposto / Ipotenusa", "[[3/5=0.6]]"],
            ["Coseno", "[[b/c]]", "Adiacente / Ipotenusa", "[[4/5=0.8]]"],
            ["Tangente", "[[a/b]]", "Opposto / Adiacente", "[[3/4=0.75]]"],
            ["Cotangente", "[[b/a]]", "Adiacente / Opposto", "[[4/3\\approx1.3333]]"],
            ["Secante", "[[c/b]]", "Ipotenusa / Adiacente", "[[5/4=1.25]]"],
            ["Cosecante", "[[c/a]]", "Ipotenusa / Opposto", "[[5/3\\approx1.6667]]"]
          ]
        },
        imgAlt: "Triangolo 3-4-5 con sei pannelli: sin 0.6, cos 0.8, tan 0.75, cot 1.3333, sec 1.25, csc 1.6667",
        figcaption: "Un triangolo 3-4-5 produce tutti e sei i rapporti: tre rapporti principali e i loro tre reciproci."
      },
      "sec-choose": {
        h2: "Come scegliere il rapporto trigonometrico giusto",
        blocks: [
          { kind: "p", text: "Il rapporto migliore dipende dalle due lunghezze dei lati disponibili nel problema. Ogni coppia di lati permette due calcoli reciproci, e le sei modalità della calcolatrice corrispondono esattamente a questi abbinamenti:" },
          { kind: "p", text: "Se sono noti il cateto opposto e l'ipotenusa, puoi calcolare [[\\sin(A)=a/c]] e anche [[\\csc(A)=c/a]]. Se sono noti il cateto adiacente e l'ipotenusa, puoi calcolare [[\\cos(A)=b/c]] e [[\\sec(A)=c/b]]. Se sono noti i due cateti, puoi calcolare [[\\tan(A)=a/b]] e [[\\cot(A)=b/a]]." },
          { kind: "h3", text: "Come usare la modalità seno" },
          { kind: "p", text: "Seleziona la modalità seno quando sono noti il cateto opposto e l'ipotenusa. Inserisci il cateto opposto nel campo \"Opposite a\" e l'ipotenusa nel campo \"Hypotenuse c\", quindi fai clic su \"Calcola sin(A)\". Nessuna modalità richiede tutte e tre le lunghezze dei lati; ogni modalità chiede esattamente la coppia usata dal suo rapporto." },
          { kind: "h3", text: "Come usare la modalità coseno" },
          { kind: "p", text: "Seleziona la modalità coseno quando sono noti il cateto adiacente e l'ipotenusa. Inserisci il cateto adiacente nel campo \"Adjacent b\" e l'ipotenusa nel campo \"Hypotenuse c\", quindi fai clic su \"Calcola cos(A)\"." },
          { kind: "h3", text: "Come usare la modalità tangente" },
          { kind: "p", text: "Seleziona la modalità tangente quando sono noti i due cateti. Inserisci il cateto opposto nel campo \"Opposite a\" e il cateto adiacente nel campo \"Adjacent b\", quindi fai clic su \"Calcola tan(A)\"." },
          { kind: "h3", text: "Come usare la modalità cotangente" },
          { kind: "p", text: "Seleziona la modalità cotangente quando i cateti sono noti e il problema è espresso come adiacente su opposto. Inserisci prima il cateto adiacente nel campo \"Adjacent b\" e il cateto opposto nel campo \"Opposite a\", quindi fai clic su \"Calcola cot(A)\"." },
          { kind: "h3", text: "Come usare la modalità secante" },
          { kind: "p", text: "Seleziona la modalità secante quando sono noti l'ipotenusa e il cateto adiacente. Inserisci l'ipotenusa nel campo \"Hypotenuse c\" e il cateto adiacente nel campo \"Adjacent b\", quindi fai clic su \"Calcola sec(A)\"." },
          { kind: "h3", text: "Come usare la modalità cosecante" },
          { kind: "p", text: "Seleziona la modalità cosecante quando sono noti l'ipotenusa e il cateto opposto. Inserisci l'ipotenusa nel campo \"Hypotenuse c\" e il cateto opposto nel campo \"Opposite a\", quindi fai clic su \"Calcola csc(A)\"." }
        ],
        table: {
          headers: ["Lati noti", "Rapporto diretto", "Rapporto reciproco"],
          rows: [
            ["Cateto opposto e ipotenusa", "Seno", "Cosecante"],
            ["Cateto adiacente e ipotenusa", "Coseno", "Secante"],
            ["Cateto opposto e cateto adiacente", "Tangente", "Cotangente"]
          ]
        }
      },
      "sec-howto": {
        h2: "Come usare la calcolatrice dei rapporti trigonometrici del triangolo rettangolo",
        blocks: [
          { kind: "p", text: "Segui questi passaggi per ciascuna delle sei modalità:" },
          { kind: "p", text: "L'identificazione corretta dei lati conta più che memorizzare le formule. La maggior parte delle risposte errate in questa pagina deriva da uno scambio tra cateto opposto e adiacente, non dall'aritmetica." }
        ],
        steps: [
          "Identifica l'angolo di riferimento. Decidi di quale angolo acuto tratta il problema. Tutte le etichette dei lati seguono da questa scelta.",
          "Etichetta opposto, adiacente e ipotenusa. Il lato di fronte all'angolo di riferimento è l'opposto, il cateto che lo tocca è l'adiacente, e il lato di fronte all'angolo retto è l'ipotenusa.",
          "Determina quali due lunghezze dei lati sono note. Ogni modalità ha bisogno di esattamente una coppia.",
          "Scegli la modalità corrispondente a quei due lati. Usa la tabella nella sezione precedente per scegliere seno, coseno, tangente, cotangente, secante o cosecante.",
          "Inserisci la prima lunghezza richiesta. I campi sono etichettati, ad esempio \"Opposite a\" e \"Hypotenuse c\".",
          "Inserisci la seconda lunghezza richiesta. Mantieni l'ordine mostrato dalle etichette: alcune modalità elencano prima l'ipotenusa.",
          "Seleziona unità compatibili. Usa i selettori di unità accanto a ciascun input in modo che entrambe le misure condividano un sistema di unità.",
          "Verifica che gli input siano positivi e validi. Entrambi i cateti devono essere positivi e l'ipotenusa deve essere più lunga di ciascun cateto.",
          "Fai clic sul pulsante Calcola. Ad esempio, \"Calcola sin(A)\" nella modalità seno.",
          "Controlla il risultato e i passaggi della soluzione. La calcolatrice mostra la formula, la sostituzione e il valore finale.",
          "Controlla la visualizzazione dal vivo. Conferma che le etichette del diagramma del triangolo corrispondano all'angolo di riferimento previsto.",
          "Usa Reimposta per un nuovo calcolo. Il pulsante Reimposta cancella tutti i campi così il calcolo successivo parte pulito."
        ],
        closingParagraphs: [
          "Guida completa alla calcolatrice: dati cateto opposto 3, cateto adiacente 4 e ipotenusa 5, tutti nella stessa unità, ecco cosa richiede e restituisce ciascuna modalità:",
          "1. Modalità seno: inserisci \"Opposite a\" = 3 e \"Hypotenuse c\" = 5, fai clic su \"Calcola sin(A)\". Risultato: 0.6.",
          "2. Modalità coseno: inserisci \"Adjacent b\" = 4 e \"Hypotenuse c\" = 5, fai clic su \"Calcola cos(A)\". Risultato: 0.8.",
          "3. Modalità tangente: inserisci \"Opposite a\" = 3 e \"Adjacent b\" = 4, fai clic su \"Calcola tan(A)\". Risultato: 0.75.",
          "4. Modalità cotangente: inserisci \"Adjacent b\" = 4 e \"Opposite a\" = 3, fai clic su \"Calcola cot(A)\". Risultato: circa 1.3333.",
          "5. Modalità secante: inserisci \"Hypotenuse c\" = 5 e \"Adjacent b\" = 4, fai clic su \"Calcola sec(A)\". Risultato: 1.25.",
          "6. Modalità cosecante: inserisci \"Hypotenuse c\" = 5 e \"Opposite a\" = 3, fai clic su \"Calcola csc(A)\". Risultato: circa 1.6667.",
          "I rapporti sono adimensionali, quindi le misure in input devono solo avere unità compatibili, non una in particolare. La calcolatrice non recupera lati o angoli mancanti da queste modalità; calcola il rapporto richiesto dai due lati forniti."
        ]
      },
      "sec-foundations": {
        h2: "Esempi passo passo dei rapporti trigonometrici",
        blocks: [
          { kind: "p", text: "Questi quattro esempi costruiscono la comprensione gradualmente, da un triangolo semplice con numeri interi ai rapporti esatti dei triangoli speciali." },
          { kind: "h3", text: "Esempio 1: un triangolo rettangolo 3-4-5" },
          { kind: "p", text: "Dati [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]], calcola tutti e sei i rapporti. Seno: [[3/5=0.6]]. Coseno: [[4/5=0.8]]. Tangente: [[3/4=0.75]]. Cotangente: [[4/3\\approx1.3333]]. Secante: [[5/4=1.25]]. Cosecante: [[5/3\\approx1.6667]]. I rapporti differiscono perché ciascuno confronta una coppia diversa di lati; descrivono tutti lo stesso angolo [[A]]." },
          { kind: "h3", text: "Esempio 2: un triangolo rettangolo 5-12-13" },
          { kind: "p", text: "Dati [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Seno: [[5/13\\approx0.3846]]. Coseno: [[12/13\\approx0.9231]]. Tangente: [[5/12\\approx0.4167]]. I reciproci: cosecante [[13/5=2.6]], secante [[13/12\\approx1.0833]], cotangente [[12/5=2.4]]. Rispetto al triangolo 3-4-5, il cateto adiacente più lungo rende il coseno maggiore e la tangente minore, ed è così che appare un angolo più piatto in forma di rapporto." },
          { kind: "h3", text: "Esempio 3: un triangolo 45-45-90" },
          { kind: "p", text: "Dati [[a=1]], [[b=1]], [[c=\\sqrt{2}]]. Seno e coseno sono uguali: [[\\sin(45^\\circ)=\\cos(45^\\circ)=\\sqrt{2}/2\\approx0.7071]]. Tangente e cotangente valgono entrambe 1: [[\\tan(45^\\circ)=\\cot(45^\\circ)=1]]. Secante e cosecante sono uguali: [[\\sec(45^\\circ)=\\csc(45^\\circ)=\\sqrt{2}\\approx1.4142]]. Cateti uguali rendono il seno uguale al coseno e la tangente uguale a 1; la simmetria tra i due angoli acuti spiega tutte e tre le uguaglianze." },
          { kind: "h3", text: "Esempio 4: un triangolo 30-60-90" },
          { kind: "p", text: "Per l'angolo [[A=30^\\circ]], usa [[a=1]], [[b=\\sqrt{3}]], [[c=2]]. Seno: [[1/2=0.5]]. Coseno: [[\\sqrt{3}/2\\approx0.8660]]. Tangente: [[1/\\sqrt{3}\\approx0.5774]]. Cotangente: [[\\sqrt{3}\\approx1.7321]]. Secante: [[2/\\sqrt{3}\\approx1.1547]]. Cosecante: [[2]]. I rapporti per 30 e 60 gradi sono collegati: [[\\sin(30^\\circ)=\\cos(60^\\circ)]], [[\\cos(30^\\circ)=\\sin(60^\\circ)]] e [[\\tan(30^\\circ)=\\cot(60^\\circ)]], perché gli angoli complementari scambiano opposto e adiacente." }
        ]
      },
      "sec-applications": {
        h2: "Applicazioni reali dei rapporti trigonometrici",
        blocks: [
          { kind: "p", text: "Ogni esempio usa il rapporto adatto alla situazione, non tutti e sei. Ogni esempio identifica il modello del triangolo, i lati noti, l'angolo di riferimento e il significato del risultato, con le ipotesi dichiarate dove contano." },
          { kind: "h3", text: "Esempio 5: calcolare la pendenza di un tetto" },
          { kind: "p", text: "Un tetto sale di 3 m su una distanza orizzontale di 4 m. Il triangolo semplificato usa il dislivello come cateto opposto (a = 3 m) e la distanza come cateto adiacente (b = 4 m), con la superficie del tetto come ipotenusa. La tangente è adatta perché entrambi i cateti sono noti: [[\\tan(A)=3/4=0.75]]. La pendenza percentuale è [[0.75\\times100\\%=75\\%]], e l'angolo è [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Il rapporto di pendenza, la pendenza percentuale e l'angolo sono tre modi di dire la stessa cosa: il tetto sale di 0.75 m per ogni 1 m di distanza. Questo è un esempio di geometria, non una valutazione completa di progettazione di un tetto." },
          { kind: "h3", text: "Esempio 6: capire una scala appoggiata a un muro" },
          { kind: "p", text: "Una scala raggiunge 4 m su un muro con la base a 3 m dal muro. L'altezza del muro è il cateto opposto (a = 4 m), la distanza al suolo è il cateto adiacente (b = 3 m) e la scala è l'ipotenusa: [[c=\\sqrt{4^2+3^2}=5\\text{ m}]]. Per l'angolo tra la scala e il suolo: [[\\sin(A)=4/5=0.8]], [[\\cos(A)=3/5=0.6]], [[\\tan(A)=4/3\\approx1.3333]]. L'angolo è [[A\\approx53.13^\\circ]]. Un triangolo, un angolo, tre rapporti diversi, ciascuno enfatizza una coppia diversa di lati. Il calcolo non stabilisce la sicurezza della scala." },
          { kind: "h3", text: "Esempio 7: valutare la pendenza di una rampa" },
          { kind: "p", text: "Una rampa sale di 0.6 m su una distanza orizzontale di 8 m. La tangente si adatta ai due cateti: [[\\tan(A)=0.6/8=0.075]]. La pendenza percentuale è [[0.075\\times100\\%=7.5\\%]], e l'angolo è [[A=\\tan^{-1}(0.075)\\approx4.29^\\circ]]. Una pendenza del 7.5% non è un angolo di 7.5 gradi: la percentuale è il rapporto per 100, mentre i gradi misurano l'angolo stesso, e divergono rapidamente oltre i valori piccoli. Accessibilità e conformità alle norme edilizie richiedono controlli aggiuntivi oltre questa geometria." },
          { kind: "h3", text: "Esempio 8: misurare l'altezza di un edificio" },
          { kind: "p", text: "Un osservatore si trova a 24 m in orizzontale da un edificio, e la cima è a 18 m sopra il livello degli occhi. Il cateto adiacente è 24 m e il cateto opposto è 18 m, quindi [[\\tan(A)=18/24=0.75]] e [[A\\approx36.87^\\circ]], l'angolo di elevazione. La distanza visiva in linea retta è [[c=\\sqrt{18^2+24^2}=30\\text{ m}]], dando [[\\sin(A)=18/30=0.6]] e [[\\cos(A)=24/30=0.8]] per la stessa geometria. Il risultato è relativo al livello degli occhi, non necessariamente all'altezza totale dell'edificio." },
          { kind: "h3", text: "Esempio 9: rilevare un dislivello" },
          { kind: "p", text: "Un topografo modella un dislivello verticale di 15 m su una distanza orizzontale di 20 m. Tangente: [[\\tan(A)=15/20=0.75]]. La distanza in linea retta è [[c=\\sqrt{15^2+20^2}=25\\text{ m}]], quindi [[\\sin(A)=15/25=0.6]] e [[\\cos(A)=20/25=0.8]] descrivono lo stesso triangolo rilevato attraverso coppie diverse di lati. Il rilievo reale può richiedere aggiustamenti dell'altezza dello strumento e correzioni oltre questo modello piano." },
          { kind: "h3", text: "Esempio 10: stimare l'altezza di un albero dalla sua ombra" },
          { kind: "p", text: "Un albero verticale proietta un'ombra di 9 m, e l'altezza dal suolo è 12 m. Con opposto 12 m e adiacente 9 m: [[\\tan(A)=12/9\\approx1.3333]]. L'ipotenusa visiva del triangolo semplificato è [[c=\\sqrt{12^2+9^2}=15\\text{ m}]], dando [[\\sin(A)=12/15=0.8]] e [[\\cos(A)=9/15=0.6]]. Questo presuppone terreno piano, albero verticale e ombra misurata fino al punto direttamente sotto la chioma." },
          { kind: "h3", text: "Esempio 11: capire un tirante" },
          { kind: "p", text: "Un tirante si collega a un palo a 12 m dal suolo, con l'ancoraggio a 5 m in orizzontale dal palo. La lunghezza del cavo è [[c=\\sqrt{12^2+5^2}=13\\text{ m}]]. Seno: [[12/13\\approx0.9231]]. Coseno: [[5/13\\approx0.3846]]. Tangente: [[12/5=2.4]]. La tangente supera 1 qui perché la componente verticale è più lunga della distanza orizzontale; è normale, non un errore. Questi rapporti non dicono nulla sulla resistenza dell'ancoraggio o sulla tensione del cavo." },
          { kind: "h3", text: "Esempio 12: capire la geometria di una scala" },
          { kind: "p", text: "Una scala semplificata ha un dislivello totale di 2.4 m e una distanza orizzontale di 3.2 m, con lunghezza diagonale [[c=\\sqrt{2.4^2+3.2^2}=4\\text{ m}]]. Seno: [[2.4/4=0.6]]. Coseno: [[3.2/4=0.8]]. Tangente: [[2.4/3.2=0.75]]. I rapporti descrivono la geometria complessiva della scala, ma non stabiliscono la conformità alle norme sulle scale, che vincolano anche le dimensioni dei singoli gradini." },
          { kind: "h3", text: "Esempio 13: capire la direzione del braccio di una gru" },
          { kind: "p", text: "Un braccio di gru semplificato ha una componente verticale di 8 m e una proiezione orizzontale di 6 m, con [[c=\\sqrt{8^2+6^2}=10\\text{ m}]]. Il seno [[8/10=0.8]] descrive la quota verticale del braccio, il coseno [[6/10=0.6]] la sua quota orizzontale, e la tangente [[8/6\\approx1.3333]] la sua ripidità. I soli rapporti trigonometrici non determinano la capacità della gru né il funzionamento sicuro." },
          { kind: "h3", text: "Esempio 14: stimare la pendenza di un sentiero escursionistico" },
          { kind: "p", text: "Un tratto rettilineo di sentiero guadagna 120 m di quota su 800 m in orizzontale. Tangente: [[\\tan(A)=120/800=0.15]]. La pendenza è [[15\\%]] e l'angolo è [[A=\\tan^{-1}(0.15)\\approx8.53^\\circ]]. Questo modello a pendenza costante non descrive un sentiero tortuoso, ma dà una ripidità media utile per pianificare lo sforzo." },
          { kind: "h3", text: "Esempio 15: controllare un puntone meccanico" },
          { kind: "p", text: "Un puntone diagonale ha una componente verticale di 1.5 m e una componente orizzontale di 2 m, con [[c=\\sqrt{1.5^2+2^2}=2.5\\text{ m}]]. Seno: [[1.5/2.5=0.6]]. Coseno: [[2/2.5=0.8]]. Tangente: [[1.5/2=0.75]]. Sono i rapporti 3-4-5 a metà scala, e mostrano che la scala proporzionale lascia invariato ogni rapporto. Questo non dice nulla sulla resistenza o sulla capacità di carico del puntone." },
          { kind: "h3", text: "Esempio 16: capire una salita rettilinea di un aereo" },
          { kind: "p", text: "Un segmento di volo rettilineo semplificato guadagna 1.5 km in verticale su 5 km in orizzontale. Tangente: [[\\tan(A)=1.5/5=0.3]], quindi [[A=\\tan^{-1}(0.3)\\approx16.70^\\circ]]. La distanza in linea retta è [[c=\\sqrt{1.5^2+5^2}\\approx5.22\\text{ km}]], dando [[\\sin(A)\\approx1.5/5.22\\approx0.287]]. La tangente usa la distanza al suolo, il seno usa la distanza di volo; stessa salita, diverse lunghezze di riferimento. Questo è un esempio di geometria, non un calcolo di navigazione aerea." },
          { kind: "h3", text: "Confronto tra esempi pratici" }
        ],
        table: {
          headers: ["Situazione", "Misure note", "Rapporto principale", "Valore", "Interpretazione"],
          rows: [
            ["Pendenza del tetto", "Dislivello 3 m, distanza 4 m", "Tangente", "0.75", "Pendenza 75%, 36.87°"],
            ["Scala", "Altezza 4 m, base 3 m", "Seno", "0.8", "Angolo col suolo 53.13°"],
            ["Rampa", "Dislivello 0.6 m, distanza 8 m", "Tangente", "0.075", "Pendenza 7.5%, 4.29°"],
            ["Altezza edificio", "Altezza 18 m, distanza 24 m", "Tangente", "0.75", "Angolo di elevazione 36.87°"],
            ["Rilievo", "Dislivello 15 m, distanza 20 m", "Tangente", "0.75", "Stessa forma della pendenza del tetto"],
            ["Ombra albero", "Altezza 12 m, ombra 9 m", "Tangente", "1.3333", "Più ripido di 45°"],
            ["Tirante", "Altezza 12 m, ancoraggio 5 m", "Tangente", "2.4", "Cavo molto più ripido della distanza"],
            ["Scala (gradini)", "Dislivello 2.4 m, distanza 3.2 m", "Tangente", "0.75", "Stessi rapporti del 3-4-5"],
            ["Braccio gru", "Verticale 8 m, orizzontale 6 m", "Seno", "0.8", "Portata prevalentemente verticale"],
            ["Sentiero", "Guadagno 120 m, distanza 800 m", "Tangente", "0.15", "Pendenza media 15%"],
            ["Puntone", "Verticale 1.5 m, orizzontale 2 m", "Seno", "0.6", "Geometria 3-4-5 in scala"],
            ["Salita aereo", "Guadagno 1.5 km, distanza 5 km", "Tangente", "0.3", "Angolo di salita 16.70°"]
          ]
        },
        imgAlt: "Quattro pannelli: pendenza tetto 0.75, scala sin 0.8, rilievo sin 0.6, rampa tan 0.075 con triangoli etichettati",
        figcaption: "Quattro problemi reali: pendenza del tetto, scala, rilievo e rampa, ciascuno con il suo triangolo e il rapporto chiave."
      },
      "sec-relate": {
        h2: "Come sono collegati i sei rapporti trigonometrici",
        blocks: [
          { kind: "p", text: "I sei rapporti non sono sei fatti indipendenti. Formano tre coppie reciproche, due relazioni quoziente e tre identità pitagoriche. Conoscere queste connessioni trasforma sei formule in un unico sistema, e ti dà metodi di verifica per ogni calcolo." },
          { kind: "h3", text: "Coppie reciproche" },
          { kind: "p", text: "Ogni coppia reciproca si moltiplica a 1 perché le frazioni si cancellano: [[\\sin(A)\\csc(A)=1]], [[\\cos(A)\\sec(A)=1]], [[\\tan(A)\\cot(A)=1]]. Sul triangolo 3-4-5: [[0.6\\times1.6667\\approx1]], [[0.8\\times1.25=1]], [[0.75\\times1.3333\\approx1]]. Piccole discrepanze derivano da decimali arrotondati, non dalla matematica." },
          { kind: "h3", text: "La tangente come seno diviso per il coseno" },
          { kind: "p", text: "La relazione quoziente [[[\\boxed{\\tan(A)=\\frac{\\sin(A)}{\\cos(A)}}]]] segue dalla cancellazione dell'ipotenusa comune: [[(a/c)/(b/c)=a/b]]. Verificala con i valori 3-4-5: [[0.6/0.8=0.75]], che corrisponde a [[\\tan(A)]]. È una verifica utile: se la tua tangente non è uguale al seno diviso per il coseno, un lato è etichettato male." },
          { kind: "h3", text: "La cotangente come coseno diviso per il seno" },
          { kind: "p", text: "Allo stesso modo, [[[\\boxed{\\cot(A)=\\frac{\\cos(A)}{\\sin(A)}}]]] Con i valori 3-4-5: [[0.8/0.6\\approx1.3333]], che corrisponde a [[\\cot(A)]]. La cotangente eredita tutto ciò che sa la tangente, capovolto." },
          { kind: "h3", text: "L'identità trigonometrica pitagorica" },
          { kind: "p", text: "L'identità [[[\\boxed{\\sin^2(A)+\\cos^2(A)=1}]]] segue direttamente dal teorema di Pitagora: [[(a/c)^2+(b/c)^2=(a^2+b^2)/c^2=c^2/c^2=1]]. Per il triangolo 3-4-5: [[0.6^2+0.8^2=0.36+0.64=1]]. Altre due identità estendono lo schema: [[1+\\tan^2(A)=\\sec^2(A)]] e [[1+\\cot^2(A)=\\csc^2(A)]], ottenute dividendo la prima identità per il coseno al quadrato e il seno al quadrato. Sono utili quando un problema dà un rapporto e ne richiede un altro senza lunghezze dei lati." },
          { kind: "h3", text: "Come gli angoli complementari influenzano i rapporti" },
          { kind: "p", text: "Poiché [[A+C=90^\\circ]], passare l'angolo di riferimento da [[A]] a [[C]] scambia opposto e adiacente: [[\\sin(A)=\\cos(C)]], [[\\cos(A)=\\sin(C)]], [[\\tan(A)=\\cot(C)]], [[\\cot(A)=\\tan(C)]], [[\\sec(A)=\\csc(C)]] e [[\\csc(A)=\\sec(C)]]. Nel triangolo 3-4-5, [[\\sin(A)=3/5=0.6]] mentre [[\\cos(C)=3/5=0.6]], perché il lato opposto ad [[A]] è adiacente a [[C]]. Ogni rapporto a un angolo acuto riappare come sua cofunzione all'altro." }
        ]
      },
      "sec-angles": {
        h2: "Capire i rapporti trigonometrici a diversi angoli",
        blocks: [
          { kind: "p", text: "Man mano che un angolo acuto di riferimento cresce, i rapporti cambiano in modi prevedibili. Il seno aumenta da vicino a 0 verso 1, mentre il coseno diminuisce da vicino a 1 verso 0. La tangente aumenta da vicino a 0 senza limite superiore, mentre la cotangente diminuisce da valori grandi verso 0. La secante aumenta da vicino a 1 senza limite, mentre la cosecante diminuisce da valori grandi verso 1. Sono comportamenti limite vicino a 0 e 90 gradi, non valori che un angolo acuto in un triangolo rettangolo valido non degenere raggiunge effettivamente agli estremi." },
          { kind: "p", text: "Lo schema è simmetrico: il seno a 30 gradi è uguale al coseno a 60 gradi, riflettendo la relazione complementare. Cotangente, secante e cosecante derivano dalle relazioni reciproche: ad esempio, a 30 gradi, [[\\cot(30^\\circ)=1/0.5774\\approx1.7321]] e [[\\csc(30^\\circ)=1/0.5=2]]." }
        ],
        table: {
          headers: ["Angolo", "Seno", "Coseno", "Tangente"],
          rows: [
            ["[[30^\\circ]]", "0.5", "Circa 0.8660", "Circa 0.5774"],
            ["[[45^\\circ]]", "Circa 0.7071", "Circa 0.7071", "1"],
            ["[[60^\\circ]]", "Circa 0.8660", "0.5", "Circa 1.7321"]
          ]
        },
        imgAlt: "Diagramma di flusso: scegli seno/cosecante, coseno/secante o tangente/cotangente in base ai lati noti",
        figcaption: "Scegli la modalità della calcolatrice dalla coppia di lati che conosci: ogni coppia dà un rapporto diretto e il suo reciproco."
      },
      "sec-missing-side": {
        h2: "Come calcolare un lato mancante di un triangolo rettangolo",
        blocks: [
          { kind: "p", text: "La calcolatrice a sei rapporti trova i rapporti dai lati noti. Trovare un lato incognito da un angolo noto e un lato è un compito correlato ma diverso, risolto riarrangiando le formule dei rapporti. Sono calcoli complementari, non funzioni della calcolatrice dei rapporti stessa." },
          { kind: "h3", text: "Trovare il cateto opposto con il seno" },
          { kind: "p", text: "Parti da [[\\sin(A)=a/c]] e riarrangia: [[[\\boxed{a=c\\sin(A)}]]] Con ipotenusa 10 m e angolo [[A=30^\\circ]]: [[a=10\\sin(30^\\circ)=5\\text{ m}]]." },
          { kind: "h3", text: "Trovare il cateto adiacente con il coseno" },
          { kind: "p", text: "Parti da [[\\cos(A)=b/c]] e riarrangia: [[[\\boxed{b=c\\cos(A)}]]] Con ipotenusa 10 m e angolo [[A=60^\\circ]]: [[b=10\\cos(60^\\circ)=5\\text{ m}]]." },
          { kind: "h3", text: "Trovare il cateto opposto con la tangente" },
          { kind: "p", text: "Parti da [[\\tan(A)=a/b]] e riarrangia: [[[\\boxed{a=b\\tan(A)}]]] Con cateto adiacente 8 m e angolo [[A=30^\\circ]]: [[a=8\\tan(30^\\circ)\\approx4.62\\text{ m}]]. La tangente è particolarmente utile qui perché collega direttamente i due cateti, senza ipotenusa." }
        ]
      },
      "sec-inverse": {
        h2: "Come trovare un angolo da un rapporto trigonometrico",
        blocks: [
          { kind: "p", text: "Un rapporto trigonometrico non è un angolo. Quando il rapporto è noto e l'angolo è incognito, le funzioni trigonometriche inverse recuperano l'angolo acuto di riferimento: [[A=\\sin^{-1}(r)]], [[A=\\cos^{-1}(r)]] e [[A=\\tan^{-1}(r)]]. Si chiamano seno inverso, coseno inverso e tangente inversa, noti anche come arcoseno, arcocoseno e arcotangente." },
          { kind: "h3", text: "Esempio svolto usando il seno" },
          { kind: "p", text: "Dato [[\\sin(A)=0.6]], l'angolo è [[A=\\sin^{-1}(0.6)\\approx36.87^\\circ]]." },
          { kind: "h3", text: "Esempio svolto usando il coseno" },
          { kind: "p", text: "Dato [[\\cos(A)=0.8]], l'angolo è [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]." },
          { kind: "h3", text: "Esempio svolto usando la tangente" },
          { kind: "p", text: "Dato [[\\tan(A)=0.75]], l'angolo è [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]." },
          { kind: "p", text: "Tutti e tre recuperano lo stesso angolo perché tutti e tre i rapporti descrivono lo stesso triangolo 3-4-5. La differenza tra funzione inversa e reciproco conta qui: [[1/\\sin(A)=\\csc(A)]] è un reciproco, un rapporto diverso, mentre [[\\sin^{-1}(r)]] è una funzione inversa, che restituisce un angolo. Quando calcoli gli angoli a mano, controlla se lo strumento è in modalità gradi o radianti; la calcolatrice di questa pagina lavora solo con i rapporti, quindi il recupero dell'angolo è un passaggio separato." }
        ]
      },
      "sec-mistakes": {
        h2: "Errori comuni nell'uso dei rapporti trigonometrici",
        blocks: [
          { kind: "h3", text: "Confondere il cateto opposto con il cateto adiacente" },
          { kind: "p", text: "Le etichette dipendono dall'angolo di riferimento. In un triangolo 3-4-5, calcolare [[4/5=0.8]] per il seno dà in realtà il coseno. Soluzione: segna prima l'angolo di riferimento, poi etichetta come opposto il lato di fronte a esso." },
          { kind: "h3", text: "Identificare i lati rispetto all'angolo di riferimento sbagliato" },
          { kind: "p", text: "Etichettare per l'angolo C mentre il problema chiede l'angolo A scambia ogni rapporto. Soluzione: annota qual è l'angolo di riferimento prima di toccare la calcolatrice." },
          { kind: "h3", text: "Usare il seno invece del coseno" },
          { kind: "p", text: "Il seno richiede il cateto opposto; il coseno quello adiacente. Se conosci il cateto adiacente e l'ipotenusa ma calcoli comunque [[a/c]], hai scambiato i cateti. Soluzione: abbina il rapporto alla coppia nota usando la tabella nella sezione sulla scelta." },
          { kind: "h3", text: "Usare la tangente quando i lati noti sono opposto e ipotenusa" },
          { kind: "p", text: "La tangente richiede i due cateti. Con opposto e ipotenusa noti, il rapporto diretto corretto è il seno. Soluzione: controlla quale coppia hai davvero prima di scegliere la modalità." },
          { kind: "h3", text: "Invertire numeratore e denominatore" },
          { kind: "p", text: "Calcolare [[c/a]] quando intendevi il seno dà la cosecante, un valore sopra 1 invece che sotto 1. Soluzione: il denominatore è l'ipotenusa per seno e coseno, il cateto adiacente per la tangente." },
          { kind: "h3", text: "Confondere la tangente con la cotangente" },
          { kind: "p", text: "La tangente è [[a/b]]; la cotangente è [[b/a]]. Sono reciproche, quindi un errore inverte la risposta. Soluzione: leggi l'etichetta della modalità prima di inserire i valori." },
          { kind: "h3", text: "Confondere il coseno con la secante" },
          { kind: "p", text: "Il coseno è [[b/c]], sempre sotto 1; la secante è [[c/b]], sempre sopra 1. Se la tua secante esce sotto 1, hai calcolato il coseno. Soluzione: i rapporti reciproci portano l'ipotenusa al numeratore." },
          { kind: "h3", text: "Confondere il seno con la cosecante" },
          { kind: "p", text: "La stessa inversione: il seno è [[a/c]], la cosecante è [[c/a]]. Soluzione: controlla se il risultato rientra nell'intervallo atteso per la modalità scelta." },
          { kind: "h3", text: "Supporre che ogni rapporto debba essere minore di 1" },
          { kind: "p", text: "Seno e coseno sono sotto 1, ma tangente, cotangente, secante e cosecante possono superare 1. Una tangente di 2.4 è perfettamente valida per una pendenza ripida. Soluzione: impara l'intervallo valido di ciascun rapporto." },
          { kind: "h3", text: "Supporre che un rapporto come 0.6 rappresenti un angolo di 0.6 gradi" },
          { kind: "p", text: "Un rapporto è un numero puro, non una misura in gradi. L'angolo dietro [[\\sin(A)=0.6]] è circa 36.87 gradi, trovato con il seno inverso. Soluzione: i rapporti rispondono a \"come si confrontano i lati\"; le funzioni inverse rispondono a \"qual è l'angolo\"." },
          { kind: "h3", text: "Dimenticare che i rapporti sono adimensionali" },
          { kind: "p", text: "Inserire l'opposto in pollici e l'ipotenusa in piedi corrompe il rapporto, perché le unità non si cancellano più. Soluzione: converti entrambi gli input in un'unità prima." },
          { kind: "h3", text: "Mescolare unità di misura incompatibili" },
          { kind: "p", text: "Stessa causa radice, vale la pena ripeterlo: un rapporto di 3 pollici su 5 centimetri non è 0.6. Soluzione: usa i selettori di unità su entrambi gli input prima di calcolare." },
          { kind: "h3", text: "Inserire lunghezze dei lati nulle o negative" },
          { kind: "p", text: "Il lato di un triangolo deve essere positivo. Input nulli o negativi non descrivono alcun triangolo, e la calcolatrice non può produrre un rapporto significativo. Soluzione: rimisura o rileggi il problema." },
          { kind: "h3", text: "Usare lunghezze che non formano un triangolo rettangolo valido" },
          { kind: "p", text: "Se i lati non superano il controllo pitagorico, ad esempio 2, 3 e 10, non esiste alcun triangolo rettangolo con quelle lunghezze. Soluzione: verifica [[a^2+b^2=c^2]] prima di calcolare i rapporti." },
          { kind: "h3", text: "Arrotondare troppo presto" },
          { kind: "p", text: "Arrotondare un rapporto intermedio a una cifra decimale e poi moltiplicare amplifica l'errore. Soluzione: mantieni la massima precisione in ogni passaggio e arrotonda solo la risposta finale." },
          { kind: "h3", text: "Confondere i rapporti reciproci con le funzioni trigonometriche inverse" },
          { kind: "p", text: "[[\\csc(A)=1/\\sin(A)]] è un rapporto; [[\\sin^{-1}(0.6)]] è un angolo. La notazione simile crea vera confusione. Soluzione: i reciproci capovolgono le frazioni, le funzioni inverse recuperano gli angoli." },
          { kind: "h3", text: "Trattare l'ipotenusa come uno dei cateti" },
          { kind: "p", text: "L'ipotenusa è sempre il lato più lungo ed è sempre opposta all'angolo retto. Assegnarla come cateto rompe ogni rapporto. Soluzione: trova prima il lato più lungo ed etichettalo c." },
          { kind: "h3", text: "Supporre che i sei rapporti abbiano lo stesso valore" },
          { kind: "p", text: "In un triangolo 3-4-5 i sei valori vanno da 0.6 a 1.6667. Solo triangoli speciali come il 45-45-90 rendono alcuni rapporti uguali. Soluzione: aspettati sei numeri diversi da un triangolo." },
          { kind: "h3", text: "Supporre che lo stesso lato sia sempre l'opposto" },
          { kind: "p", text: "Il lato opposto all'angolo A è adiacente all'angolo C. Ogni risposta svolta deve dichiarare il suo angolo di riferimento. Soluzione: rietichetta i lati ogni volta che cambia l'angolo di riferimento." },
          { kind: "h3", text: "Trattare un risultato semplificato come prova ingegneristica" },
          { kind: "p", text: "Un controllo di rapporto su un puntone o un tirante descrive la geometria, non resistenza, tensione o conformità alle norme. Soluzione: usa i rapporti per il passaggio geometrico e un'analisi ingegneristica qualificata per le decisioni di sicurezza." },
          { kind: "h3", text: "Sbagliato contro giusto: un esempio concreto" },
          { kind: "p", text: "Dati [[a=3]], [[b=4]], [[c=5]], un calcolo errato del seno usa la coppia di lati sbagliata: [[3/4=0.75]]. È il rapporto tangente, non il seno. Il calcolo corretto è [[\\sin(A)=3/5=0.6]]. Verifica con la relazione quoziente: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Identificare i lati corretti è essenziale, perché l'aritmetica è banale una volta che i lati sono giusti." }
        ]
      },
      "sec-verify": {
        h2: "Come verificare se i risultati trigonometrici sono validi",
        blocks: [
          { kind: "p", text: "Un triangolo rettangolo valido e non degenere richiede cateti positivi, un'ipotenusa più lunga di ciascun cateto, lati che soddisfano il teorema di Pitagora, unità compatibili, la coppia di lati corretta per il rapporto scelto e coppie reciproche concordi. Quattro metodi rapidi coprono tutto questo." },
          { kind: "h3", text: "Metodo di verifica 1: controlla le lunghezze dei lati" },
          { kind: "p", text: "Per il triangolo 3-4-5: [[3^2+4^2=5^2]], ovvero [[9+16=25]]. Superare il controllo pitagorico conferma che i lati descrivono un vero triangolo rettangolo prima di fidarti di qualsiasi rapporto derivato da essi." },
          { kind: "h3", text: "Metodo di verifica 2: controlla le coppie reciproche" },
          { kind: "p", text: "Ogni coppia diretto-reciproco deve moltiplicarsi a 1: [[\\sin(A)\\csc(A)=0.6\\times1.6667\\approx1]], [[\\cos(A)\\sec(A)=0.8\\times1.25=1]], [[\\tan(A)\\cot(A)=0.75\\times1.3333\\approx1]]. Piccole differenze derivano da decimali arrotondati." },
          { kind: "h3", text: "Metodo di verifica 3: controlla la tangente usando seno e coseno" },
          { kind: "p", text: "La relazione quoziente dà un controllo indipendente: [[\\tan(A)=\\sin(A)/\\cos(A)=0.6/0.8=0.75]]. Se la modalità tangente della calcolatrice e questo calcolo non concordano, un lato è stato etichettato male." },
          { kind: "h3", text: "Metodo di verifica 4: controlla l'angolo inverso" },
          { kind: "p", text: "Recupera l'angolo e vedi se è sensato: [[A=\\tan^{-1}(0.75)\\approx36.87^\\circ]]. Un risultato acuto tra 0 e 90 gradi che corrisponde alla forma del triangolo conferma i rapporti." }
        ]
      },
      "sec-conclusion": {
        h2: "Padroneggia tutti e sei i rapporti con un triangolo",
        blocks: [
          { kind: "p", text: "Ogni rapporto in questa pagina deriva dagli stessi tre lati e da un angolo di riferimento. Etichetta il triangolo, abbina la coppia di lati alla modalità e lascia che la calcolatrice faccia l'aritmetica. Seno, coseno e tangente rispondono ai confronti diretti; cosecante, secante e cotangente li capovolgono. SOH-CAH-TOA richiama i primi tre, la regola dei reciproci il resto, e l'identità seno al quadrato più coseno al quadrato uguale 1 lega seno e coseno. Verifica con il controllo pitagorico e i prodotti reciproci, poi torna alla calcolatrice in cima a questa pagina per calcolare i tuoi numeri." }
        ]
      }
    },
    faqHeading: "Domande frequenti",
    faqs: [
      { question: "Quali sono i sei rapporti trigonometrici di un triangolo rettangolo?", answer: "I sei rapporti sono seno (opposto su ipotenusa), coseno (adiacente su ipotenusa), tangente (opposto su adiacente), cotangente (adiacente su opposto), secante (ipotenusa su adiacente) e cosecante (ipotenusa su opposto). I primi tre sono i rapporti principali; gli ultimi tre sono i loro reciproci." },
      { question: "Come si calcolano seno, coseno e tangente?", answer: "Identifica l'angolo di riferimento, poi dividi la coppia corretta di lati. Il seno è il cateto opposto diviso per l'ipotenusa, il coseno è il cateto adiacente diviso per l'ipotenusa e la tangente è il cateto opposto diviso per il cateto adiacente. Per un triangolo 3-4-5, questo dà 3/5 = 0.6, 4/5 = 0.8 e 3/4 = 0.75." },
      { question: "Qual è la differenza tra rapporti trigonometrici diretti e reciproci?", answer: "I rapporti diretti (seno, coseno, tangente) mettono per primo il confronto tra i lati più piccolo, mentre i rapporti reciproci (cosecante, secante, cotangente) capovolgono la frazione. La cosecante è 1/seno, la secante è 1/coseno e la cotangente è 1/tangente. Ogni coppia si moltiplica a 1." },
      { question: "Perché i rapporti trigonometrici sono adimensionali?", answer: "Un rapporto divide una lunghezza per un'altra, quindi le unità si cancellano. 3 metri diviso 5 metri è 0.6, e 300 centimetri diviso 500 centimetri è anch'esso 0.6. Il risultato non ha unità, ed è per questo che entrambi gli input devono solo condividere un sistema di unità." },
      { question: "Come scelgo la modalità corretta della calcolatrice?", answer: "Abbina la modalità alla tua coppia nota di lati. Cateto opposto e ipotenusa: modalità seno o cosecante. Cateto adiacente e ipotenusa: modalità coseno o secante. I due cateti: modalità tangente o cotangente. Il rapporto diretto e il suo reciproco usano gli stessi due input in ordine opposto." },
      { question: "Un rapporto di tangente o cotangente può essere maggiore di 1?", answer: "Sì. La tangente confronta i due cateti, quindi supera 1 quando il cateto opposto è più lungo di quello adiacente, come in una pendenza ripida. La cotangente supera 1 quando il cateto adiacente è più lungo. Solo seno e coseno sono limitati a 1, perché il loro denominatore è il lato più lungo." },
      { question: "Perché secante e cosecante sono maggiori di 1 per gli angoli acuti?", answer: "Entrambe portano l'ipotenusa, il lato più lungo del triangolo, al numeratore. Dividere il lato più lungo per un lato più corto dà sempre un valore sopra 1. Per un triangolo 3-4-5, la secante è 5/4 = 1.25 e la cosecante è 5/3, circa 1.6667." },
      { question: "Come trovo un angolo da un rapporto trigonometrico?", answer: "Usa una funzione trigonometrica inversa: arcoseno per un rapporto di seno, arcocoseno per il coseno, arcotangente per la tangente. Ad esempio, se il seno è 0.6, l'angolo è arcoseno(0.6), circa 36.87 gradi. Nota che è diverso dal reciproco: 1/seno è la cosecante, non l'arcoseno." },
      { question: "Come calcolo un lato mancante usando la trigonometria?", answer: "Riarrangia la formula del rapporto. Con angolo noto e ipotenusa, il cateto opposto è l'ipotenusa per il seno dell'angolo, e il cateto adiacente è l'ipotenusa per il coseno. Con il cateto adiacente noto, il cateto opposto è il cateto adiacente per la tangente dell'angolo." },
      { question: "Qual è la differenza tra seno inverso e cosecante?", answer: "Il seno inverso (arcoseno) prende un rapporto e restituisce un angolo: arcoseno(0.6) è circa 36.87 gradi. La cosecante prende lo stesso rapporto e restituisce il suo reciproco: 1/0.6 è circa 1.6667, ancora un rapporto. Uno annulla la funzione seno; l'altro capovolge la frazione." },
      { question: "Come posso verificare i miei calcoli trigonometrici?", answer: "Quattro controlli: conferma che i lati soddisfino il teorema di Pitagora, conferma che ogni coppia reciproca si moltiplichi a 1, conferma che la tangente sia uguale al seno diviso per il coseno, e recupera l'angolo con una funzione inversa per vedere che sia acuto e sensato. La concordanza tra i controlli significa che le etichette dei lati sono corrette." },
      { question: "Come sono usati i rapporti trigonometrici nella vita reale?", answer: "Convertono i lati misurati in angoli e pendenze: pendenza del tetto da dislivello e distanza, angoli delle scale da altezza e distanza della base, pendenze delle rampe, angoli di elevazione degli edifici, linee di vista topografiche, direzione del braccio della gru e pendenze dei sentieri. Il rapporto dà la geometria; controlli ingegneristici separati gestiscono la sicurezza." }
    ],
    relatedHeading: "Esplora le calcolatrici correlate dei triangoli rettangoli",
    relatedItems: [
      "Calcolatrice del rapporto del seno",
      "Calcolatrice del rapporto del coseno",
      "Calcolatrice del rapporto della tangente",
      "Calcolatrice del rapporto della cotangente",
      "Calcolatrice del rapporto della secante",
      "Calcolatrice del rapporto della cosecante",
      "Calcolatrice degli angoli del triangolo rettangolo",
      "Calcolatrice dei lati del triangolo rettangolo con angolo",
      "Calcolatrice dei triangoli rettangoli speciali"
    ]
  }
};
