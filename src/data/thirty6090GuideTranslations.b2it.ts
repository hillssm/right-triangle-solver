// thirty6090GuideTranslations.bit.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatore del Triangolo 30-60-90 - Lati, Area, Perimetro",
        "description": "Usa il calcolatore del triangolo 30-60-90 per trovare il cateto corto, il cateto lungo, l'ipotenusa, l'area e il perimetro da un solo lato noto, con il rapporto 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-intro": "Calcolatore del Triangolo 30-60-90",
        "sec-calculate": "Calcola i Lati Mancanti, l'Area e il Perimetro",
        "sec-what": "Che Cos'è un Triangolo 30-60-90?",
        "sec-sides": "Il Cateto Corto, il Cateto Lungo e l'Ipotenusa",
        "sec-ratio": "Il Rapporto tra i Lati del Triangolo 30-60-90",
        "sec-why-sqrt3": "Perché Compare la Radice Quadrata di 3?",
        "sec-long-leg": "Formula per Trovare il Cateto Lungo dal Cateto Corto",
        "sec-hypotenuse": "Formula per Trovare l'Ipotenusa dal Cateto Corto",
        "sec-short-leg-hyp": "Formula per Trovare il Cateto Corto dall'Ipotenusa",
        "sec-short-leg-long": "Formula per Trovare il Cateto Corto dal Cateto Lungo",
        "sec-long-leg-hyp": "Formula per Trovare il Cateto Lungo dall'Ipotenusa",
        "sec-area": "Come Calcolare l'Area di un Triangolo 30-60-90",
        "sec-perimeter": "Come Calcolare il Perimetro di un Triangolo 30-60-90",
        "sec-step-example": "Esempio Passo dopo Passo per Risolvere un Triangolo 30-60-90",
        "sec-examples": "Esempi Svolti di Calcoli con Triangoli 30-60-90",
        "sec-derive-pythagoras": "Come Ricavare il Rapporto del Triangolo 30-60-90 con Pitagora",
        "sec-equilateral": "Relazione tra i Triangoli 30-60-90 e i Triangoli Equilateri",
        "sec-trig": "Relazioni Trigonometriche in un Triangolo 30-60-90",
        "sec-verify": "Come Verificare i Calcoli del Triangolo 30-60-90",
        "sec-properties": "Proprietà Importanti dei Triangoli 30-60-90",
        "sec-mistakes": "Errori Comuni nel Risolvere i Triangoli 30-60-90",
        "sec-applications": "Applicazioni Pratiche dei Triangoli 30-60-90",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-related": "Esplora i Calcolatori Correlati per Triangoli Rettangoli",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore del Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trova ogni lato mancante, l'area e il perimetro di un triangolo 30-60-90 a partire da un solo lato noto.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 è un triangolo rettangolo i cui tre angoli misurano 30°, 60° e 90°. È chiamato triangolo rettangolo speciale perché le lunghezze dei suoi lati seguono sempre lo stesso rapporto fisso, non importa quanto grande o piccolo sia il triangolo. Il calcolatore del triangolo 30-60-90 in questa pagina usa quel rapporto per trovare il cateto corto, il cateto lungo, l'ipotenusa, l'area e il perimetro a partire da una sola lunghezza inserita.",
            },
            {
              "kind": "p",
              "text": "Nel triangolo ABC, l'angolo A è di 30°, l'angolo B è di 60° e l'angolo C è di 90°. Il lato BC è il cateto corto [[a]], opposto all'angolo di 30°. Il lato AC è il cateto lungo [[b]], opposto all'angolo di 60°. Il lato AB è l'ipotenusa [[c]], opposta all'angolo di 90°. I tre lati soddisfano sempre [[a : b : c = 1 : \\sqrt{3} : 2]], il che significa [[b = a\\sqrt{3}]] e [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Se [[a = 5]] cm, allora [[b = 5\\sqrt{3} \\approx 8.660]] cm e [[c = 2 \\times 5 = 10]] cm. Il calcolatore può anche ricavare l'area e il perimetro dallo stesso cateto corto, quindi una sola misura basta per descrivere l'intero triangolo. Le sezioni qui sotto spiegano il rapporto, le sette modalità del calcolatore e le formule, con esempi svolti a ogni passo.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcola i Lati Mancanti, l'Area e il Perimetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Sette modalità coprono ogni modo di partire da un solo lato noto.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina ha sette modalità, una per ogni misura che può trovare. Scegli la modalità che corrisponde al lato che conosci e alla misura che ti serve. Ogni modalità chiede un solo input, perché il rapporto fisso ricava tutto il resto. La tabella qui sotto elenca tutte e sette le modalità con l'input richiesto e il risultato restituito.",
            },
            {
              "kind": "p",
              "text": "Per usare una modalità, stabilisci prima quale lato conosci. Il lato opposto all'angolo di 30° è il cateto corto [[a]], il lato opposto all'angolo di 60° è il cateto lungo [[b]] e il lato opposto all'angolo di 90° è l'ipotenusa [[c]]. Inserisci quella misura come numero positivo, scegli un'unità e fai clic sul pulsante Calcola. Il risultato appare con il procedimento passo dopo passo, così puoi vedere la formula e la sostituzione, non solo la risposta. Usa Reimposta per azzerare i campi prima di iniziare un nuovo problema.",
            },
            {
              "kind": "p",
              "text": "Modalità diverse richiedono formule diverse perché ognuna parte da un lato noto diverso. Trovare il cateto lungo dal cateto corto richiede di moltiplicare per √3, mentre trovare il cateto corto dall'ipotenusa richiede di dividere per 2. Le modalità di area e perimetro partono dal cateto corto e calcolano prima gli altri lati internamente, poi applicano la formula dell'area o del perimetro. Non devi mai ricavare da solo i lati mancanti prima di usare queste due modalità.",
            },
          ],
          "table": {
            "headers": [
              "Modalità del calcolatore",
              "Input richiesto",
              "Risultato",
            ],
            "rows": [
              [
                "Cateto lungo dal cateto corto",
                "Cateto corto a",
                "Cateto lungo b",
              ],
              [
                "Ipotenusa dal cateto corto",
                "Cateto corto a",
                "Ipotenusa c",
              ],
              [
                "Cateto corto dall'ipotenusa",
                "Ipotenusa c",
                "Cateto corto a",
              ],
              [
                "Cateto corto dal cateto lungo",
                "Cateto lungo b",
                "Cateto corto a",
              ],
              [
                "Cateto lungo dall'ipotenusa",
                "Ipotenusa c",
                "Cateto lungo b",
              ],
              [
                "Area dal cateto corto",
                "Cateto corto a",
                "Area A",
              ],
              [
                "Perimetro dal cateto corto",
                "Cateto corto a",
                "Perimetro P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Panoramica delle sette modalità del calcolatore 30-60-90 che mostra l'input noto e l'output calcolato per ogni modalità",
            "caption": "Sette modalità: ognuna parte da un solo lato noto e trova una misura mancante.",
          },
        },
        "sec-what": {
          "h2": "Che Cos'è un Triangolo 30-60-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 prende il nome dai suoi tre angoli.",
            },
            {
              "kind": "p",
              "text": "È un triangolo rettangolo, il che significa che uno dei suoi angoli è esattamente di 90°. Gli altri due angoli sono di 30° e 60°, e il nome li elenca tutti e tre in ordine. Poiché l'angolo retto è fisso e anche gli altri due angoli sono fissi, la forma del triangolo è completamente determinata: ogni triangolo 30-60-90 ha la stessa forma, e due triangoli di questo tipo differiscono solo per dimensione.",
            },
            {
              "kind": "p",
              "text": "È chiamato triangolo rettangolo speciale perché le lunghezze dei suoi lati seguono un rapporto fisso. Nella maggior parte dei triangoli rettangoli, conoscere un lato non dice nulla sugli altri. In un triangolo 30-60-90, conoscere un lato dice tutto su di essi, perché il rapporto [[1 : \\sqrt{3} : 2]] lega insieme i tre lati. Ecco perché il calcolatore può trovare cinque misure da un solo input.",
            },
            {
              "kind": "p",
              "text": "I tre angoli sommano a 180°, come devono fare in ogni triangolo: [[30° + 60° + 90° = 180°]]. Il triangolo può essere piccolo quanto pochi millimetri o grande quanto un lotto edificabile, e gli angoli restano gli stessi mentre i lati crescono insieme. Anche il rapporto resta lo stesso, quindi un triangolo con cateto corto di 5 cm e un triangolo con cateto corto di 5 m hanno la stessa forma a dimensioni diverse.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Triangolo 30-60-90 ABC etichettato con angoli di 30, 60 e 90 gradi, cateto corto a, cateto lungo a per la radice quadrata di 3 e ipotenusa 2a",
            "caption": "Triangolo ABC: angoli di 30°, 60° e 90°, con lati a, a√3 e 2a.",
          },
        },
        "sec-sides": {
          "h2": "Il Cateto Corto, il Cateto Lungo e l'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "I tre lati prendono il nome dagli angoli opposti a essi.",
            },
            {
              "kind": "p",
              "text": "Il cateto corto [[a]] è il lato opposto all'angolo di 30°. È il lato più corto del triangolo, perché l'angolo più piccolo si trova sempre di fronte al lato più corto. Nel triangolo ABC è il lato BC. Il cateto corto è il punto di partenza naturale per la maggior parte dei calcoli, perché gli altri due lati sono suoi multipli semplici: il cateto lungo è [[a\\sqrt{3}]] e l'ipotenusa è [[2a]].",
            },
            {
              "kind": "p",
              "text": "Il cateto lungo [[b]] è il lato opposto all'angolo di 60°. È più lungo del cateto corto e più corto dell'ipotenusa. Nel triangolo ABC è il lato AC. La sua lunghezza è [[\\sqrt{3} \\approx 1.732]] volte il cateto corto, quindi è poco meno del doppio. L'ipotenusa [[c]] è il lato opposto all'angolo di 90°, il lato AB, ed è il lato più lungo del triangolo, esattamente il doppio del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Identificare i lati in base agli angoli opposti è più affidabile che giudicare da come è disegnato il diagramma. Un triangolo può essere ruotato o capovolto, quindi il cateto corto potrebbe apparire a sinistra, a destra o in basso. La regola dell'angolo opposto non cambia mai: trova l'angolo di 30°, e il lato di fronte a esso è il cateto corto. Trova l'angolo di 90°, segnato con un piccolo quadrato, e il lato di fronte a esso è l'ipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lato",
              "Angolo opposto",
              "Dimensione",
            ],
            "rows": [
              [
                "Cateto corto a",
                "30°",
                "Il più piccolo",
              ],
              [
                "Cateto lungo b",
                "60°",
                "Intermedio",
              ],
              [
                "Ipotenusa c",
                "90°",
                "Il più lungo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Il Rapporto tra i Lati del Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 1:√3:2 fissa ogni triangolo 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Il rapporto tra i lati di un triangolo 30-60-90 è:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Ogni parte del rapporto descrive un lato. Il cateto corto rappresenta un'unità, il cateto lungo rappresenta √3 unità e l'ipotenusa rappresenta due unità. Scritti con il cateto corto come [[a]], i tre lati sono [[a = a]], [[b = a\\sqrt{3}]] e [[c = 2a]]. Se il cateto corto è di 1 cm, il cateto lungo è di √3 cm e l'ipotenusa è di 2 cm. Se il cateto corto è di 10 cm, il cateto lungo è di [[10\\sqrt{3}]] cm e l'ipotenusa è di 20 cm.",
            },
            {
              "kind": "p",
              "text": "Il rapporto resta lo stesso qualunque sia la dimensione del triangolo, perché tutti i triangoli 30-60-90 sono simili. Ingrandire o rimpicciolire un triangolo moltiplica ogni lato per lo stesso fattore, quindi le proporzioni tra i lati non cambiano. Prendi [[a = 4]] cm come esempio: il cateto lungo è [[b = 4\\sqrt{3} \\approx 6.928]] cm e l'ipotenusa è [[c = 8]] cm, e il rapporto [[4 : 6.928 : 8]] è lo stesso di [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Mantieni la forma radicale esatta ogni volta che puoi. √3 è circa 1.732, ma è un numero irrazionale, quindi nessun decimale lo eguaglia esattamente. Scrivere [[4\\sqrt{3}]] cm è esatto, mentre 6.928 cm è un'approssimazione arrotondata. Usa la forma esatta nei passaggi e nelle risposte finali quando la domanda chiede un valore esatto, e dai il decimale solo quando serve una risposta approssimata.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Tre barre che confrontano il cateto corto, il cateto lungo e l'ipotenusa nel rapporto 1 a radice quadrata di 3 a 2",
            "caption": "Il rapporto fisso 1:√3:2 confronta il cateto corto, il cateto lungo e l'ipotenusa.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Perché Compare la Radice Quadrata di 3?",
          "blocks": [
            {
              "kind": "p",
              "text": "La radice quadrata di 3 nasce dal tagliare a metà un triangolo equilatero.",
            },
            {
              "kind": "p",
              "text": "Parti da un triangolo equilatero il cui lato misura [[2a]]. Tutti e tre i lati sono uguali e tutti e tre gli angoli sono di 60°. Ora traccia un'altezza da un vertice al lato opposto. L'altezza è la retta dal vertice che incontra il lato opposto ad angolo retto.",
            },
            {
              "kind": "p",
              "text": "L'altezza divide la base a metà, dividendola in due segmenti uguali di lunghezza [[a]]. Divide anche il triangolo equilatero in due triangoli rettangoli congruenti. Ogni triangolo più piccolo ha angoli di 30°, 60° e 90°: l'angolo di 60° sopravvive alla base, l'altezza crea un angolo di 90° dove incontra la base e l'angolo di 60° al vertice superiore viene diviso in due angoli di 30°. L'ipotenusa di ogni triangolo piccolo è il lato del triangolo equilatero, [[2a]], e il cateto corto è metà della base, [[a]].",
            },
            {
              "kind": "p",
              "text": "Il cateto rimanente del triangolo piccolo è l'altezza stessa. Chiamalo [[b]] e applica il teorema di Pitagora:",
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
              "text": "Il 3 dentro la radice quadrata viene da [[4a^2 - a^2 = 3a^2]], la differenza tra il quadrato dell'ipotenusa e il quadrato del cateto corto. Questa è l'intera ragione per cui √3 compare in ogni formula del triangolo 30-60-90: il cateto lungo è l'altezza di un triangolo equilatero, e Pitagora lo costringe a essere [[a\\sqrt{3}]]. La derivazione dimostra anche il rapporto tra i lati, perché i tre lati del triangolo piccolo sono ora [[a]], [[a\\sqrt{3}]] e [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Triangolo equilatero di lato 2a diviso da un'altezza in due triangoli 30-60-90 congruenti con altezza a per la radice quadrata di 3",
            "caption": "Un'altezza divide un triangolo equilatero di lato 2a in due triangoli 30-60-90.",
          },
        },
        "sec-long-leg": {
          "h2": "Formula per Trovare il Cateto Lungo dal Cateto Corto",
          "blocks": [
            {
              "kind": "p",
              "text": "Moltiplica il cateto corto per √3 per ottenere il cateto lungo.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[b]] è il cateto lungo e [[a]] è il cateto corto. La formula è una lettura diretta del rapporto tra i lati: il cateto lungo rappresenta √3 unità per ogni 1 unità di cateto corto, quindi il cateto lungo è √3 volte il cateto corto. La moltiplicazione è necessaria perché il rapporto è una relazione di scala, e √3 compare perché il cateto lungo è l'altezza del triangolo equilatero che genera questo triangolo.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm come esempio:",
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
              "text": "Il risultato è più lungo del cateto corto, come deve essere: √3 è circa 1.732, quindi moltiplicare per esso aumenta la lunghezza. La risposta esatta è [[5\\sqrt{3}]] cm, e 8.660 cm è l'approssimazione decimale. Mantieni la forma esatta quando la domanda la richiede, e arrotonda il decimale solo alla fine dei passaggi, mai nel mezzo.",
            },
            {
              "kind": "p",
              "text": "Usa questa modalità ogni volta che il cateto corto è il lato noto e il cateto lungo è quello incognito. In un problema di libro di testo, il cateto corto è di solito il lato opposto all'angolo di 30°, quindi controlla l'angolo prima di moltiplicare. Un rapido controllo di plausibilità aiuta: il cateto lungo dovrebbe risultare poco meno del doppio del cateto corto, poiché √3 è poco meno di 2. Se la tua risposta è più del doppio del cateto corto, hai moltiplicato per il numero sbagliato.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "Triangolo 30-60-90 con cateto corto di 5 cm e cateto lungo indicato come 5 per la radice quadrata di 3, circa 8.660 cm",
            "caption": "Cateto lungo dal cateto corto: a = 5 cm dà b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formula per Trovare l'Ipotenusa dal Cateto Corto",
          "blocks": [
            {
              "kind": "p",
              "text": "Raddoppia il cateto corto per ottenere l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[c]] è l'ipotenusa e [[a]] è il cateto corto. L'ipotenusa è sempre esattamente il doppio del cateto corto, senza alcuna radice quadrata. Questa è la più semplice delle formule del triangolo 30-60-90, ed è anche la più utile per rapidi controlli mentali.",
            },
            {
              "kind": "p",
              "text": "La ragione risale al triangolo equilatero. L'ipotenusa del triangolo 30-60-90 è un intero lato del triangolo equilatero, mentre il cateto corto è metà di un lato, perché l'altezza divide la base a metà. Un lato intero è il doppio di mezzo lato, quindi l'ipotenusa è il doppio del cateto corto. Usa [[a = 7]] cm:",
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
              "text": "La risposta è esatta, senza arrotondamenti, perché raddoppiare un numero intero dà un numero intero. Se il cateto corto è un decimale, l'ipotenusa è comunque esattamente il suo doppio, quindi [[a = 2.5]] cm dà [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Questa è la modalità da scegliere quando un problema dà il cateto corto e chiede il lato più lungo. Poiché la risposta è un semplice raddoppio, è anche il modo più veloce per individuare un cateto corto sbagliato: se l'ipotenusa nel problema non è il doppio del tuo cateto corto, o il cateto corto è sbagliato o il triangolo non è un triangolo 30-60-90. Controlla gli angoli prima di fidarti del raddoppio.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "Triangolo 30-60-90 con cateto corto di 5 cm e ipotenusa indicata come 2a uguale a 10 cm",
            "caption": "Ipotenusa dal cateto corto: c = 2a, quindi a = 5 cm dà c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Formula per Trovare il Cateto Corto dall'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dimezza l'ipotenusa per ottenere il cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[a]] è il cateto corto e [[c]] è l'ipotenusa. Questa formula è l'inverso di [[c = 2a]]: poiché l'ipotenusa è il doppio del cateto corto, il cateto corto è la metà dell'ipotenusa. Riordinando [[c = 2a]] e dividendo entrambi i membri per 2 si ottiene [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 18]] cm:",
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
              "text": "La risposta è esatta, senza radice quadrata e senza arrotondamenti. Questa relazione vale in particolare per i triangoli 30-60-90. In un triangolo rettangolo generico, l'ipotenusa non è il doppio del cateto corto, quindi non usare questa formula se non sai che gli angoli sono di 30°, 60° e 90°. Se l'ipotenusa è un numero dispari, il cateto corto è un valore con metà, per esempio [[c = 15]] cm dà [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Questa modalità è il punto di partenza per la maggior parte dei problemi che danno l'ipotenusa. Una volta noto il cateto corto, il cateto lungo segue da [[b = a\\sqrt{3}]] e l'area e il perimetro seguono dalle loro formule. Una risposta con metà è normale qui e non è segno di errore, quindi non arrotondare 7.5 cm a 8 cm: la metà esatta è la risposta corretta.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Formula per Trovare il Cateto Corto dal Cateto Lungo",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividi il cateto lungo per √3 per ottenere il cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[a]] è il cateto corto e [[b]] è il cateto lungo. Questa formula deriva dal riordino di [[b = a\\sqrt{3}]]: dividendo entrambi i membri per √3 si isola [[a]]. Dividere per √3 inverte la moltiplicazione originale, quindi annulla esattamente ciò che la formula diretta aveva fatto.",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Razionalizza il denominatore moltiplicando numeratore e denominatore per √3: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, che è circa 6.928 cm. La risposta esatta è [[4\\sqrt{3}]] cm, e 6.928 cm è la forma decimale. Il cateto corto è più piccolo del cateto lungo, come deve essere, poiché dividere per un numero maggiore di 1 riduce il valore.",
            },
            {
              "kind": "p",
              "text": "Razionalizzare vale la pena perché lascia la risposta nella forma esatta standard, un numero intero per √3. Un'approssimazione decimale nasconde quella struttura, e una frazione non razionalizzata con √3 al denominatore non è la forma che le risposte d'esame si aspettano. Quando il cateto lungo è già un multiplo di √3, la divisione è pulita: [[b = 9\\sqrt{3}]] cm dà [[a = 9]] cm direttamente.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Formula per Trovare il Cateto Lungo dall'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Moltiplica metà dell'ipotenusa per √3 per ottenere il cateto lungo.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[b]] è il cateto lungo e [[c]] è l'ipotenusa. Questa formula è costruita da due passi. Prima trova il cateto corto con [[a = \\frac{c}{2}]], poi trova il cateto lungo con [[b = a\\sqrt{3}]]. Sostituendo la prima formula nella seconda si ottiene [[b = \\frac{c}{2}\\sqrt{3}]], che è lo stesso di [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 16]] cm:",
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
              "text": "Il risultato si trova tra il cateto corto e l'ipotenusa, come dovrebbe. Il cateto corto qui è [[a = 8]] cm, il cateto lungo è circa 13.856 cm e l'ipotenusa è di 16 cm, quindi [[8 < 13.856 < 16]]. Questo ordinamento è un rapido controllo per qualsiasi risposta ottenuta con questa formula.",
            },
            {
              "kind": "p",
              "text": "Calcolare in due passi è una buona abitudine anche se la formula unica fa entrambe le cose in una volta. Trova prima il cateto corto, [[a = \\frac{c}{2} = 8]] cm, poi moltiplica per √3. Se il percorso in due passi e la formula unica non concordano, l'errore è nell'aritmetica, non nella formula, e il percorso in due passi mostra esattamente dove è avvenuto.",
            },
          ],
        },
        "sec-area": {
          "h2": "Come Calcolare l'Area di un Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "L'area richiede solo il cateto corto, perché il cateto lungo segue da esso.",
            },
            {
              "kind": "p",
              "text": "L'area di qualsiasi triangolo rettangolo è la metà del prodotto dei suoi due cateti, perché i cateti fungono da base e da altezza perpendicolare:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[b = a\\sqrt{3}]], sostituisci per ottenere l'area dal solo cateto corto:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La divisione per due è necessaria perché un triangolo copre metà del rettangolo formato dai suoi due cateti. L'area finale è espressa in unità quadrate, come i centimetri quadrati, perché l'area misura una superficie, non una lunghezza. Usa [[a = 6]] cm. Trova prima il cateto lungo, [[b = 6\\sqrt{3}]] cm, poi calcola:",
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
              "text": "La modalità area del calcolatore accetta il cateto corto e calcola il cateto lungo internamente, quindi inserisci solo [[a]] e il calcolatore fa il resto. Se conosci il cateto lungo invece del cateto corto, usa il <a href=\"/right-triangle-area-calculator/\">calcolatore dell'area del triangolo rettangolo</a>, che accetta direttamente entrambi i cateti.",
            },
            {
              "kind": "p",
              "text": "L'area cresce con il quadrato del cateto corto, quindi raddoppiare il cateto corto quadruplica l'area. Un triangolo con [[a = 12]] cm ha quattro volte l'area del triangolo con [[a = 6]] cm, circa 124.708 cm², non il doppio. Quella relazione quadratica è facile da dimenticare, quindi verificala ogni volta che un problema ingrandisce o rimpicciolisce un triangolo.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "Triangolo 30-60-90 con cateto corto di 6 cm e cateto lungo di 6 per la radice quadrata di 3 cm come base e altezza, area 18 per la radice quadrata di 3 cm quadrati",
            "caption": "Area dal cateto corto: a = 6 cm dà A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Come Calcolare il Perimetro di un Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Somma tutti e tre i lati, poi raccogli il cateto corto.",
            },
            {
              "kind": "p",
              "text": "Il perimetro è la lunghezza totale intorno al triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci le relazioni speciali del triangolo, [[b = a\\sqrt{3}]] e [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Combina i termini simili per ottenere la forma semplificata:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Sono incluse tutte e tre le lunghezze dei lati, perché il perimetro percorre l'intero contorno del triangolo: giù lungo il cateto corto, attraverso il cateto lungo e indietro lungo l'ipotenusa. Tralasciare un lato qualsiasi dà una distanza più corta che non è il perimetro. Il perimetro è una misura lineare, non una misura di area, quindi la risposta è in unità semplici come i centimetri, mai in centimetri quadrati.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
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
              "text": "La forma esatta è [[5(3 + \\sqrt{3})]] cm, e 23.660 cm è la forma decimale. La modalità perimetro del calcolatore accetta il cateto corto e somma i tre lati internamente. Se conosci già tutti e tre i lati, il <a href=\"/right-triangle-perimeter-calculator/\">calcolatore del perimetro del triangolo rettangolo</a> li somma direttamente.",
            },
            {
              "kind": "p",
              "text": "Il perimetro cresce in proporzione diretta al cateto corto, quindi raddoppiare il cateto corto raddoppia il perimetro. Un triangolo con [[a = 10]] cm ha un perimetro di circa 47.321 cm, esattamente il doppio dei 23.660 cm del triangolo con [[a = 5]] cm. Quella scala lineare è un controllo utile: se raddoppiare il cateto corto non raddoppia il tuo perimetro, l'aritmetica è andata storta da qualche parte.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "Triangolo 30-60-90 con tutti e tre i lati indicati come 5 cm, 5 per la radice quadrata di 3 cm e 10 cm, perimetro circa 23.660 cm",
            "caption": "Perimetro dal cateto corto: a = 5 cm dà P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Esempio Passo dopo Passo per Risolvere un Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo, a = 5 cm, svolto dall'inizio alla fine.",
            },
            {
              "kind": "p",
              "text": "Parti dal cateto corto [[a = 5]] cm e trova ogni altra misura del triangolo, una formula alla volta. Ogni passo usa una formula delle sezioni precedenti, e la tabella riassuntiva alla fine raccoglie i risultati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trova il cateto lungo: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Trova l'ipotenusa: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Trova l'area: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] centimetri quadrati.",
                "Trova il perimetro: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Tutte e quattro le misure descrivono lo stesso triangolo. I lati [[5]], [[8.660]] e [[10]] soddisfano il rapporto [[1 : \\sqrt{3} : 2]] e il teorema di Pitagora, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. L'area e il perimetro sono due tipi diversi di misura di quello stesso triangolo: l'area copre la sua superficie, mentre il perimetro ne percorre il contorno.",
            },
          ],
          "table": {
            "headers": [
              "Misura",
              "Valore esatto",
              "Valore approssimato",
            ],
            "rows": [
              [
                "Cateto corto a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto lungo b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Ipotenusa c",
                "10 cm",
                "10 cm",
              ],
              [
                "Area A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Perimetro P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Esempi Svolti di Calcoli con Triangoli 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto esempi svolti, uno per ogni modalità del calcolatore più un caso con misure maggiori.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Trova il Cateto Lungo",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 4]] cm. Formula: [[b = a\\sqrt{3}]]. Sostituzione: [[b = 4\\sqrt{3}]]. Risultato: [[b \\approx 6.928]] cm. Il cateto lungo è circa 1.732 volte il cateto corto, quindi 4 cm diventano circa 6.928 cm. La risposta esatta è [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Trova l'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 9]] cm. Formula: [[c = 2a]]. Sostituzione: [[c = 2 \\times 9]]. Risultato: [[c = 18]] cm. L'ipotenusa è esattamente il doppio del cateto corto, quindi la risposta non richiede arrotondamenti. Questo è il controllo più veloce di tutto l'argomento: qualsiasi ipotenusa che non sia il doppio del cateto corto segnala un errore.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Trova il Cateto Corto dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 20]] cm. Formula: [[a = \\frac{c}{2}]]. Sostituzione: [[a = \\frac{20}{2}]]. Risultato: [[a = 10]] cm. Dimezzare l'ipotenusa inverte il raddoppio dell'Esempio 2. Il cateto corto è esattamente la metà dell'ipotenusa, quindi la risposta è esatta.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Trova il Cateto Corto dal Cateto Lungo",
            },
            {
              "kind": "p",
              "text": "Dato [[b = 15]] cm. Formula: [[a = \\frac{b}{\\sqrt{3}}]]. Sostituzione: [[a = \\frac{15}{\\sqrt{3}}]]. Razionalizzando si ottiene [[a = 5\\sqrt{3}]] cm, quindi il risultato è [[a \\approx 8.660]] cm. Dividere per √3 riduce il cateto lungo fino al cateto corto, che è l'inverso di moltiplicare per √3.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Trova il Cateto Lungo dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 12]] cm. Formula: [[b = \\frac{c\\sqrt{3}}{2}]]. Sostituzione: [[b = \\frac{12\\sqrt{3}}{2}]]. Risultato: [[b = 6\\sqrt{3} \\approx 10.392]] cm. Il cateto lungo si trova tra il cateto corto, [[a = 6]] cm, e l'ipotenusa, 12 cm, il che conferma l'ordinamento [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Calcola l'Area",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 8]] cm. Formula: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Sostituzione: [[A = \\frac{64\\sqrt{3}}{2}]]. Risultato: [[A = 32\\sqrt{3} \\approx 55.426]] centimetri quadrati. La risposta esatta è [[32\\sqrt{3}]] cm², e il decimale è arrotondato a tre cifre. L'area è in unità quadrate, a differenza delle lunghezze dei lati.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Calcola il Perimetro",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 3]] cm. Formula: [[P = a(3 + \\sqrt{3})]]. Sostituzione: [[P = 3(3 + \\sqrt{3})]]. Risultato: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Sommare i lati uno a uno dà lo stesso risultato: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Il perimetro è in unità semplici, non in unità quadrate.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Misure Più Grandi",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 10]] m. Formula: [[b = a\\sqrt{3}]] e [[c = 2a]]. Sostituzione: [[b = 10\\sqrt{3}]] m e [[c = 2 \\times 10]] m. Risultato: [[b \\approx 17.321]] m e [[c = 20]] m. Il rapporto funziona a qualsiasi scala: questo triangolo è il triangolo con [[a = 5]] cm raddoppiato, quindi ogni lato è lungo il doppio e il rapporto [[1 : \\sqrt{3} : 2]] resta invariato.",
            },
            {
              "kind": "p",
              "text": "Le risposte esatte e le approssimazioni decimali servono a scopi diversi. La forma esatta, come [[4\\sqrt{3}]] cm, è precisa ed è ciò che le risposte d'esame di solito richiedono. La forma decimale, come 6.928 cm, è più facile da immaginare e da misurare con un righello. Dai prima la forma esatta, poi il decimale, e arrotonda il decimale solo al passaggio finale.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Come Ricavare il Rapporto del Triangolo 30-60-90 con Pitagora",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto segue da Pitagora più un fatto: l'ipotenusa è il doppio del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Sia [[a]] il cateto corto, [[b]] il cateto lungo e [[c]] l'ipotenusa. Dalla costruzione del triangolo equilatero, l'ipotenusa è il doppio del cateto corto:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Ora applica il teorema di Pitagora, che vale per ogni triangolo rettangolo:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Riordina sottraendo [[a^2]] da entrambi i membri:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Prendi la radice quadrata di entrambi i membri. Le lunghezze sono positive, quindi la radice negativa viene scartata:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "I tre lati sono ora [[a]], [[a\\sqrt{3}]] e [[2a]], il che dà il rapporto [[a : b : c = 1 : \\sqrt{3} : 2]]. Ogni formula sulle lunghezze dei lati in questa pagina deriva da questa relazione fissa: la formula del cateto lungo la legge direttamente, la formula dell'ipotenusa è il fatto di partenza, e le formule di area e perimetro sostituiscono le due espressioni dei lati. Il <a href=\"/pythagorean-theorem-calculator/\">calcolatore del teorema di Pitagora</a> verifica la stessa relazione per qualsiasi triangolo rettangolo.",
            },
            {
              "kind": "p",
              "text": "La dimostrazione richiede solo due ingredienti, ed entrambi sono facili da enunciare. Il primo è il fatto [[c = 2a]], che deriva dal triangolo equilatero. Il secondo è il teorema di Pitagora, che vale per ogni triangolo rettangolo. Non si assume nient'altro, quindi la dimostrazione mostra che il rapporto è imposto da questi due soli fatti, non da un caso particolare o da una coincidenza.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Relazione tra i Triangoli 30-60-90 e i Triangoli Equilateri",
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni triangolo 30-60-90 è metà di un triangolo equilatero.",
            },
            {
              "kind": "p",
              "text": "Un triangolo equilatero ha tre lati uguali e tre angoli uguali di 60°. Traccia un'altezza da un vertice al lato opposto, e l'altezza divide la base in due metà uguali. Divide anche l'angolo di 60° al vertice superiore in due angoli di 30°. Il risultato sono due triangoli rettangoli congruenti, ciascuno con angoli di 30°, 60° e 90°.",
            },
            {
              "kind": "p",
              "text": "Ogni metà conserva un intero lato del triangolo equilatero come ipotenusa, prende metà lato come cateto corto e usa l'altezza come cateto lungo. Ecco perché l'ipotenusa è il doppio del cateto corto e perché il cateto lungo è [[a\\sqrt{3}]]. La relazione con √3 compare perché l'altezza di un triangolo equilatero è sempre [[\\frac{\\sqrt{3}}{2}]] volte la lunghezza del lato, che è lo stesso fatto scritto con lettere diverse.",
            },
            {
              "kind": "p",
              "text": "Questa costruzione è utile in geometria e in trigonometria perché trasforma il triangolo equilatero in una fonte di valori esatti. L'altezza di un triangolo equilatero di lato 10 cm è [[5\\sqrt{3} \\approx 8.660]] cm, trovata trattando metà di esso come un triangolo 30-60-90 con cateto corto di 5 cm. La stessa costruzione dà i valori esatti di seno, coseno e tangente per 30° e 60°, ed è per questo che quei valori compaiono in ogni tavola trigonometrica.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Relazioni Trigonometriche in un Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto fisso dà valori esatti di seno, coseno e tangente per 30° e 60°.",
            },
            {
              "kind": "p",
              "text": "I rapporti trigonometrici confrontano i lati di un triangolo rettangolo. Il seno è il cateto opposto fratto l'ipotenusa, il coseno è il cateto adiacente fratto l'ipotenusa e la tangente è il cateto opposto fratto il cateto adiacente. Poiché i lati di un triangolo 30-60-90 sono sempre nel rapporto [[1 : \\sqrt{3} : 2]], quei confronti danno sempre gli stessi valori, qualunque sia la dimensione del triangolo.",
            },
            {
              "kind": "p",
              "text": "Per l'angolo di 30°, il lato opposto è il cateto corto [[a]] e il lato adiacente è il cateto lungo [[b]], quindi [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] e [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. Per l'angolo di 60°, i lati opposto e adiacente si scambiano, quindi [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] e [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Nota la simmetria: [[\\sin 30° = \\cos 60°]] e [[\\cos 30° = \\sin 60°]], perché i due angoli acuti sono complementari e sommano a 90°. Questi valori concordano esattamente con il rapporto fisso tra i lati, il che è un buon controllo incrociato: se un valore del seno non corrisponde al rapporto, uno dei due è sbagliato. Considera questa sezione come un approfondimento: il calcolatore in questa pagina trova lati, area e perimetro, e non calcola funzioni trigonometriche come modalità.",
            },
          ],
          "table": {
            "headers": [
              "Angolo",
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
          "h2": "Come Verificare i Calcoli del Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli rapidi individuano quasi ogni errore.",
            },
            {
              "kind": "p",
              "text": "Esegui almeno un controllo su ogni risposta, e tutti e quattro quando il problema è importante. L'esempio qui sotto usa per tutto il triangolo con [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm e [[c = 10]] cm.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Rapporto tra i Lati",
            },
            {
              "kind": "p",
              "text": "Dividi il cateto lungo per il cateto corto e l'ipotenusa per il cateto corto: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] e [[\\frac{c}{a} = 2]]. Qui [[\\frac{8.660}{5} \\approx 1.732]] e [[\\frac{10}{5} = 2]], quindi il rapporto è rispettato. Se una delle due divisioni dà un valore diverso, uno dei lati è sbagliato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Verifica che [[a^2 + b^2 = c^2]]. Qui [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], quindi il teorema è rispettato. Questo controllo individua i cateti scambiati, perché usare il valore sbagliato per [[b]] rompe l'uguaglianza. Il <a href=\"/pythagorean-theorem-calculator/\">calcolatore del teorema di Pitagora</a> esegue questo controllo per qualsiasi terna di lunghezze dei lati.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Somma degli Angoli",
            },
            {
              "kind": "p",
              "text": "Verifica che [[30° + 60° + 90° = 180°]]. Questo controllo riguarda l'impostazione del problema più che l'aritmetica: se gli angoli del tuo triangolo non sommano a 180°, o se non sono di 30°, 60° e 90°, le formule del triangolo 30-60-90 non si applicano affatto, e nessuna lunghezza dei lati ricavata da esse può essere attendibile.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Ordinamento dei Lati",
            },
            {
              "kind": "p",
              "text": "Verifica che [[a < b < c]]. Qui [[5 < 8.660 < 10]], quindi l'ordinamento è rispettato. Il cateto corto deve essere il lato più piccolo, il cateto lungo deve stare nel mezzo e l'ipotenusa deve essere il lato più lungo. Qualsiasi risposta che rompe questo ordine, come un cateto lungo più lungo dell'ipotenusa, è sbagliata a prima vista.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà Importanti dei Triangoli 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci proprietà seguono dal rapporto fisso.",
            },
            {
              "kind": "list",
              "items": [
                "Il triangolo ha sempre angoli di 30°, 60° e 90°, e quegli angoli sommano sempre a 180°.",
                "Il cateto corto è opposto all'angolo di 30°, ed è il lato più piccolo del triangolo.",
                "Il cateto lungo è opposto all'angolo di 60°, e si trova tra il cateto corto e l'ipotenusa per lunghezza.",
                "L'ipotenusa è opposta all'angolo di 90°, ed è il lato più lungo del triangolo.",
                "L'ipotenusa è il doppio del cateto corto, [[c = 2a]], senza alcuna radice quadrata.",
                "Il cateto lungo è √3 volte il cateto corto, [[b = a\\sqrt{3}]], dove [[\\sqrt{3} \\approx 1.732]].",
                "Il rapporto tra i lati [[1 : \\sqrt{3} : 2]] è indipendente dalla dimensione del triangolo, quindi ingrandire il triangolo lascia invariato il rapporto.",
                "Tutti i triangoli 30-60-90 sono simili, perché hanno gli stessi tre angoli e le stesse proporzioni tra i lati.",
                "L'area dipende dal quadrato del cateto corto, [[A = \\frac{a^2\\sqrt{3}}{2}]], quindi raddoppiare il cateto corto quadruplica l'area.",
                "Il perimetro scala direttamente con il cateto corto, [[P = a(3 + \\sqrt{3})]], quindi raddoppiare il cateto corto raddoppia il perimetro.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori Comuni nel Risolvere i Triangoli 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici errori compaiono di continuo nei problemi sui triangoli 30-60-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondere il cateto corto con il cateto lungo: il cateto corto è opposto a 30° e il cateto lungo è opposto a 60°. Identifica ogni lato in base al suo angolo opposto, non in base a come è ruotato il diagramma. Corretto: [[a]] opposto a 30°, [[b]] opposto a 60°.",
                "Usare √2 invece di √3: √2 appartiene al triangolo 45-45-90, il cui rapporto è [[1 : 1 : \\sqrt{2}]]. Un triangolo 30-60-90 usa sempre √3. Corretto: [[b = a\\sqrt{3}]].",
                "Moltiplicare il cateto corto per 2 per trovare il cateto lungo: raddoppiare dà l'ipotenusa, non il cateto lungo. Per [[a = 5]] cm, raddoppiare dà 10 cm, che è [[c]], mentre il cateto lungo è [[5\\sqrt{3} \\approx 8.660]] cm. Corretto: [[b = a\\sqrt{3}]].",
                "Usare [[a\\sqrt{3}]] come ipotenusa: l'ipotenusa è [[2a]], non [[a\\sqrt{3}]]. Per [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm è il cateto lungo, e l'ipotenusa è di 10 cm. Corretto: [[c = 2a]].",
                "Dimenticare che l'ipotenusa è uguale a [[2a]]: a volte gli studenti applicano Pitagora per trovare l'ipotenusa quando basterebbe raddoppiare. Raddoppiare è più veloce ed esatto. Corretto: [[c = 2a]].",
                "Dividere per 2 invece che per √3 quando si trova il cateto corto dal cateto lungo: dividere [[b]] per 2 dà [[\\frac{b}{2}]], che non è il cateto corto. Per [[b = 12]] cm, dividere per 2 dà 6 cm, mentre il cateto corto corretto è [[4\\sqrt{3} \\approx 6.928]] cm. Corretto: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Dimenticare di dividere per due quando si calcola l'area: l'area è la metà del prodotto dei cateti. Usare [[A = ab]] raddoppia l'area vera. Per [[a = 6]] cm, [[ab = 36\\sqrt{3}]] cm² è il doppio dei corretti [[18\\sqrt{3}]] cm². Corretto: [[A = \\frac{ab}{2}]].",
                "Sommare solo due lati quando si calcola il perimetro: il perimetro richiede tutti e tre i lati. Sommare solo i due cateti per [[a = 5]] cm dà [[5 + 5\\sqrt{3} \\approx 13.660]] cm, mentre il perimetro vero è di circa 23.660 cm. Corretto: [[P = a + b + c]].",
                "Confondere le risposte esatte con le approssimazioni decimali: [[5\\sqrt{3}]] cm è esatto, mentre 8.660 cm è arrotondato. Scrivere 8.660 cm come se fosse esatto perde la precisione che il radicale conserva. Corretto: dai prima la forma esatta, poi il decimale.",
                "Arrotondare √3 troppo presto: usare 1.73 per √3 nel mezzo di un calcolo sposta ogni passo successivo. Per [[a = 5]] cm, [[5 \\times 1.73 = 8.65]] cm invece di 8.660 cm. Corretto: mantieni √3 esatto per tutto il procedimento e arrotonda solo la risposta finale.",
                "Mescolare le unità di misura: un cateto corto in centimetri e un'ipotenusa in metri non possono essere combinati direttamente. Converti ogni misura in una sola unità prima di calcolare. Corretto: 0.5 m è uguale a 50 cm, poi calcola in centimetri.",
                "Applicare le formule a un triangolo con angoli diversi: le formule [[b = a\\sqrt{3}]] e [[c = 2a]] valgono solo quando gli angoli sono di 30°, 60° e 90°. Un triangolo rettangolo con angoli di 40° e 50° ha un rapporto diverso. Corretto: conferma prima gli angoli, poi usa le formule.",
                "Confondere i lati opposti agli angoli di 30 gradi e 60 gradi: il lato opposto a 30° è il cateto corto e il lato opposto a 60° è il cateto lungo, mai il contrario. Scambiarli rende il cateto lungo più corto del cateto corto, il che è impossibile. Corretto: [[a]] opposto a 30°, [[b]] opposto a 60°.",
                "Dimenticare che l'area richiede unità quadrate: un'area di 31.177 cm è sbagliata per unità, anche se il numero è giusto. L'area misura una superficie, quindi è di 31.177 centimetri quadrati. Corretto: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni Pratiche dei Triangoli 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto compare ovunque un angolo di 30° o 60° incontra un angolo retto.",
            },
            {
              "kind": "p",
              "text": "L'uso più comune è nei compiti di geometria e negli esercizi di trigonometria, dove i problemi sui triangoli 30-60-90 verificano se gli studenti sanno identificare il cateto corto, applicare il rapporto e mantenere risposte radicali esatte. I calcoli dell'altezza di un triangolo equilatero usano la stessa idea al contrario: l'altezza di un triangolo equilatero è il cateto lungo del triangolo 30-60-90 formato tagliandolo a metà, quindi un lato di 10 cm dà un'altezza di [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico, l'architettura e la geometria delle costruzioni usano le relazioni del triangolo 30-60-90 quando un progetto richiede un angolo di 30° o 60°, come la pendenza di un tetto, una rampa o un tirante diagonale. Un costruttore che conosce un lato di un tale triangolo può trovare gli altri senza misurarli direttamente. Le dimostrazioni in classe usano il triangolo per mostrare come un rapporto fisso trasformi una sola misura in una descrizione completa di una forma.",
            },
            {
              "kind": "p",
              "text": "La modellizzazione matematica usa il rapporto ovunque le relazioni tra diagonali e altezze nelle forme geometriche richiedano valori esatti, per esempio nei motivi esagonali, dove gli angoli di 60° di un esagono regolare creano triangoli 30-60-90 all'interno della forma. Questi sono usi realistici della geometria stessa, non affermazioni sulle tolleranze ingegneristiche: il lavoro di progettazione reale aggiunge limiti dei materiali e margini di sicurezza oltre ai valori geometrici esatti di questa pagina.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di Esercitazione con Risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Risolvi tutti e sei i problemi su carta prima di leggere le risposte.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Trova il Cateto Lungo dal Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un cateto corto di [[a = 6]] cm. Trova il cateto lungo [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Trova l'Ipotenusa dal Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un cateto corto di [[a = 11]] cm. Trova l'ipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Trova il Cateto Corto dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un'ipotenusa di [[c = 24]] cm. Trova il cateto corto [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Trova il Cateto Lungo dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un'ipotenusa di [[c = 14]] cm. Trova il cateto lungo [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Calcola l'Area dal Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un cateto corto di [[a = 9]] cm. Trova l'area [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Calcola il Perimetro dal Cateto Corto",
            },
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha un cateto corto di [[a = 7]] cm. Trova il perimetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Risposte ai Problemi di Esercitazione",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. La risposta esatta è [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[c = 2a = 2 \\times 11 = 22]] cm. L'ipotenusa è esattamente il doppio del cateto corto.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Il cateto corto è esattamente la metà dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Controlla l'ordinamento: il cateto corto è di 7 cm, il cateto lungo è di circa 12.124 cm e l'ipotenusa è di 14 cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] centimetri quadrati. La risposta esatta è [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Sommare i lati uno a uno dà lo stesso risultato: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calcolatori Correlati per Triangoli Rettangoli",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un diverso compito sui triangoli rettangoli: scegli lo strumento adatto alla misura che ti serve.",
      "relatedItems": [
        "Calcolatore del Triangolo Rettangolo Speciale",
        "Calcolatore del Triangolo 45-45-90",
        "Calcolatore dei Lati del Triangolo Rettangolo",
        "Calcolatore dell'Area del Triangolo Rettangolo",
        "Calcolatore del Perimetro del Triangolo Rettangolo",
        "Calcolatore del Teorema di Pitagora",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "question": "Che cos'è un triangolo 30-60-90?",
          "answer": "Un triangolo 30-60-90 è un triangolo rettangolo con angoli di 30°, 60° e 90°. È chiamato triangolo rettangolo speciale perché le lunghezze dei suoi lati seguono sempre il rapporto fisso [[1 : \\sqrt{3} : 2]]. Conoscere un lato basta per trovare tutti gli altri, ed è per questo che il calcolatore richiede un solo input.",
        },
        {
          "question": "Qual è il rapporto tra i lati di un triangolo 30-60-90?",
          "answer": "Il rapporto tra i lati è [[a : b : c = 1 : \\sqrt{3} : 2]], dove [[a]] è il cateto corto, [[b]] è il cateto lungo e [[c]] è l'ipotenusa. Ciò significa [[b = a\\sqrt{3}]] e [[c = 2a]]. Il rapporto è lo stesso per ogni triangolo 30-60-90, qualunque sia la sua dimensione.",
        },
        {
          "question": "Perché il cateto lungo viene moltiplicato per √3?",
          "answer": "Il cateto lungo è l'altezza del triangolo equilatero che genera un triangolo 30-60-90. Tagliare a metà un triangolo equilatero di lato [[2a]] dà [[b^2 = (2a)^2 - a^2 = 3a^2]], quindi [[b = a\\sqrt{3}]]. La √3 deriva dal teorema di Pitagora applicato a quella costruzione.",
        },
        {
          "question": "Come trovo l'ipotenusa dal cateto corto?",
          "answer": "Raddoppia il cateto corto: [[c = 2a]]. Se [[a = 7]] cm, allora [[c = 2 \\times 7 = 14]] cm. L'ipotenusa è sempre esattamente il doppio del cateto corto in un triangolo 30-60-90, perché è un intero lato del triangolo equilatero mentre il cateto corto è metà lato.",
        },
        {
          "question": "Come trovo il cateto corto dall'ipotenusa?",
          "answer": "Dimezza l'ipotenusa: [[a = \\frac{c}{2}]]. Se [[c = 18]] cm, allora [[a = \\frac{18}{2} = 9]] cm. Questo è l'inverso del raddoppio del cateto corto per trovare l'ipotenusa, e funziona solo per i triangoli 30-60-90, dove l'ipotenusa è sempre il doppio del cateto corto.",
        },
        {
          "question": "Come calcolo il cateto lungo dall'ipotenusa?",
          "answer": "Usa [[b = \\frac{c\\sqrt{3}}{2}]]. Prima dimezza l'ipotenusa per ottenere il cateto corto, poi moltiplica per √3. Se [[c = 16]] cm, allora [[b = 8\\sqrt{3} \\approx 13.856]] cm. Il cateto lungo si trova tra il cateto corto e l'ipotenusa per lunghezza.",
        },
        {
          "question": "Come trovo il cateto corto dal cateto lungo?",
          "answer": "Dividi il cateto lungo per √3: [[a = \\frac{b}{\\sqrt{3}}]]. Se [[b = 12]] cm, allora [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Dividere per √3 inverte la moltiplicazione usata per trovare il cateto lungo dal cateto corto.",
        },
        {
          "question": "Come calcolo l'area di un triangolo 30-60-90?",
          "answer": "Usa [[A = \\frac{a^2\\sqrt{3}}{2}]], dove [[a]] è il cateto corto. Se [[a = 6]] cm, allora [[A = 18\\sqrt{3} \\approx 31.177]] centimetri quadrati. La formula è la metà del prodotto dei due cateti, con il cateto lungo sostituito da [[a\\sqrt{3}]]. L'area è sempre in unità quadrate.",
        },
        {
          "question": "Come calcolo il perimetro di un triangolo 30-60-90?",
          "answer": "Usa [[P = a(3 + \\sqrt{3})]], dove [[a]] è il cateto corto. Se [[a = 5]] cm, allora [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. La formula somma tutti e tre i lati, [[a + a\\sqrt{3} + 2a]], e raccoglie [[a]]. Il perimetro è in unità semplici, non in unità quadrate.",
        },
        {
          "question": "Un triangolo 30-60-90 può avere lati decimali?",
          "answer": "Sì. Il rapporto funziona per qualsiasi lunghezza positiva, intera o decimale. Se [[a = 2.5]] cm, allora [[b = 2.5\\sqrt{3} \\approx 4.330]] cm e [[c = 5]] cm. I decimali non cambiano nulla del metodo: moltiplica per √3 per il cateto lungo e raddoppia per l'ipotenusa, poi arrotonda solo la risposta finale.",
        },
        {
          "question": "Tutti i triangoli 30-60-90 sono simili?",
          "answer": "Sì. Tutti i triangoli 30-60-90 hanno gli stessi tre angoli, 30°, 60° e 90°, e lo stesso rapporto tra i lati, [[1 : \\sqrt{3} : 2]]. Stessi angoli più stesse proporzioni significa che i triangoli sono simili, quindi differiscono solo per dimensione. Ingrandirne o rimpicciolirne uno dà un altro triangolo 30-60-90.",
        },
        {
          "question": "Come posso verificare se le misure del mio triangolo sono corrette?",
          "answer": "Controlla il rapporto, [[\\frac{b}{a} = \\sqrt{3}]] e [[\\frac{c}{a} = 2]], poi verifica [[a^2 + b^2 = c^2]] con il teorema di Pitagora, e verifica [[a < b < c]]. Per [[a = 5]] cm, [[b \\approx 8.660]] cm e [[c = 10]] cm, tutti e quattro i controlli sono superati. Se un controllo fallisce, rifai il calcolo.",
        },
      ],
    },
};
