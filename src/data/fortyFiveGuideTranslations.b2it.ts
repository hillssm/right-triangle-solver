// fortyFiveGuideTranslations.bit.ts: 45-45-90 Triangle
// Guide (Page 40 of 45) translation.
export const FORTYFIVE_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatrice Triangolo 45-45-90 - Ipotenusa, Cateto, Area, Perimetro",
        "description": "Trova l'ipotenusa, il cateto mancante, l'area e il perimetro di un triangolo 45-45-90 a partire da un cateto noto, usando il rapporto fisso 1:1:√2 e risposte esatte in forma radicale.",
        "primaryKeyword": "45-45-90 Triangle Calculator",
        "slug": "45-45-90-triangle-calculator",
      },
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcolatrice Triangolo 45-45-90",
        "sec-calculate": "Calcola l'Ipotenusa, il Cateto, l'Area o il Perimetro",
        "sec-what": "Che Cos'è un Triangolo 45-45-90?",
        "sec-isosceles": "Perché Si Chiama Triangolo Rettangolo Isoscele?",
        "sec-legs": "I Due Cateti Uguali e l'Ipotenusa",
        "sec-ratio": "Il Rapporto tra i Lati del Triangolo 45-45-90",
        "sec-why-sqrt2": "Perché Compare la Radice Quadrata di 2?",
        "sec-hypotenuse": "Formula per Trovare l'Ipotenusa da un Cateto",
        "sec-leg-hyp": "Formula per Trovare un Cateto dall'Ipotenusa",
        "sec-area": "Come Calcolare l'Area di un Triangolo 45-45-90",
        "sec-perimeter": "Come Calcolare il Perimetro di un Triangolo 45-45-90",
        "sec-square": "Come la Diagonale di un Quadrato Crea un Triangolo 45-45-90",
        "sec-step-example": "Esempio Passo Passo di Risoluzione di un Triangolo 45-45-90",
        "sec-examples": "Esempi Svolti di Calcoli sul Triangolo 45-45-90",
        "sec-exact": "Risposte Esatte e Approssimazioni Decimali",
        "sec-verify": "Come Verificare i Calcoli sul Triangolo 45-45-90",
        "sec-properties": "Proprietà Importanti dei Triangoli 45-45-90",
        "sec-vs-3060": "Differenza tra Triangoli 45-45-90 e 30-60-90",
        "sec-mistakes": "Errori Comuni nella Risoluzione dei Triangoli 45-45-90",
        "sec-applications": "Applicazioni Pratiche dei Triangoli 45-45-90",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-related": "Calcolatrici Correlate per Triangoli Rettangoli",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatrice Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Trova l'ipotenusa, il cateto mancante, l'area e il perimetro di un triangolo 45-45-90 a partire da un solo lato noto.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 è un triangolo rettangolo i cui tre angoli misurano 45°, 45° e 90°. Si chiama triangolo rettangolo isoscele perché i suoi due cateti hanno la stessa lunghezza, e si chiama triangolo rettangolo speciale perché i suoi lati seguono sempre lo stesso rapporto fisso, non importa quanto grande o piccolo sia il triangolo. La calcolatrice per triangoli 45-45-90 in questa pagina usa quel rapporto per trovare l'ipotenusa, il cateto mancante, l'area e il perimetro a partire da una sola lunghezza che inserisci.",
            },
            {
              "kind": "p",
              "text": "Nel triangolo ABC, l'angolo A è di 45°, l'angolo B è di 45° e l'angolo C è di 90°. Il lato BC è il primo cateto [[a]], il lato AC è il secondo cateto [[b]] e il lato AB è l'ipotenusa [[c]]. Poiché i due angoli acuti sono uguali, i due cateti sono uguali, [[a = b]], e i tre lati soddisfano sempre il rapporto [[a : b : c = 1 : 1 : \\sqrt{2}]], il che significa [[c = a\\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Se [[a = 5]] cm, allora il secondo cateto è [[b = 5]] cm, l'ipotenusa è [[c = 5\\sqrt{2} \\approx 7.071]] cm e l'area è [[A = \\frac{25}{2} = 12.5]] cm². La calcolatrice può anche ricavare il perimetro dallo stesso cateto, quindi una sola misura basta a descrivere l'intero triangolo. Le sezioni seguenti spiegano il rapporto, le quattro modalità della calcolatrice e le formule, con esempi svolti a ogni passaggio.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcola l'Ipotenusa, il Cateto, l'Area o il Perimetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro modalità coprono ogni modo di partire da un solo lato noto.",
            },
            {
              "kind": "p",
              "text": "La calcolatrice in questa pagina ha quattro modalità, una per ogni misura che può trovare. Scegli la modalità che corrisponde al lato che conosci e alla misura che ti serve. Ogni modalità chiede un solo dato in ingresso, perché il rapporto fisso completa tutto il resto. La tabella seguente elenca tutte e quattro le modalità con il dato richiesto da ciascuna e il risultato che restituisce.",
            },
            {
              "kind": "p",
              "text": "Per usare una modalità, stabilisci prima quale lato conosci. Il lato opposto a un angolo di 45° è un cateto, e ciascun cateto può fungere da [[a]], perché i cateti sono uguali. Il lato opposto all'angolo di 90° è l'ipotenusa [[c]]. Inserisci quella misura come numero positivo, scegli un'unità e fai clic sul pulsante Calcola. Il risultato compare con il procedimento passo passo, così puoi vedere la formula e la sostituzione, non solo la risposta. Usa Reimposta per azzerare i campi prima di iniziare un nuovo problema.",
            },
            {
              "kind": "p",
              "text": "Modalità diverse richiedono formule diverse perché ciascuna parte da un lato noto diverso. Trovare l'ipotenusa da un cateto significa moltiplicare per √2, mentre trovare un cateto dall'ipotenusa significa dividere per √2. La modalità area eleva il cateto al quadrato e dimezza il risultato, e la modalità perimetro somma tutti e tre i lati. Non devi mai calcolare da solo i lati mancanti prima di usare le modalità area o perimetro, perché la calcolatrice li trova prima internamente.",
            },
            {
              "kind": "p",
              "text": "Le quattro formule sono [[c = a\\sqrt{2}]] per l'ipotenusa, [[a = \\frac{c}{\\sqrt{2}}]] per un cateto, [[A = \\frac{a^2}{2}]] per l'area e [[P = a(2 + \\sqrt{2})]] per il perimetro. Mantieni le stesse unità per tutto il calcolo: un cateto inserito in centimetri dà un'ipotenusa in centimetri e un'area in centimetri quadrati. La calcolatrice non trova il circumraggio, l'inraggio o misure per triangoli che non sono triangoli 45-45-90, quindi conferma gli angoli prima di usarla.",
            },
          ],
          "table": {
            "headers": [
              "Modalità della calcolatrice",
              "Dato richiesto",
              "Risultato",
            ],
            "rows": [
              [
                "Trova l'ipotenusa dal cateto",
                "Cateto a",
                "Ipotenusa c",
              ],
              [
                "Trova il cateto dall'ipotenusa",
                "Ipotenusa c",
                "Cateto a",
              ],
              [
                "Trova l'area dal cateto",
                "Cateto a",
                "Area A",
              ],
              [
                "Trova il perimetro dal cateto",
                "Cateto a",
                "Perimetro P",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Che Cos'è un Triangolo 45-45-90?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 prende il nome dai suoi tre angoli.",
            },
            {
              "kind": "p",
              "text": "È un triangolo rettangolo, il che significa che uno dei suoi angoli è esattamente di 90°. Gli altri due angoli sono entrambi di 45°, e il nome elenca tutti e tre gli angoli in ordine. Poiché l'angolo retto è fisso e anche gli altri due angoli sono fissi, la forma del triangolo è completamente determinata: ogni triangolo 45-45-90 ha la stessa forma, e due triangoli del genere differiscono solo per la dimensione.",
            },
            {
              "kind": "p",
              "text": "Si chiama triangolo rettangolo speciale perché le lunghezze dei suoi lati seguono un rapporto fisso. Nella maggior parte dei triangoli rettangoli, conoscere un lato non dice nulla degli altri. In un triangolo 45-45-90, conoscere un lato dice tutto, perché il rapporto [[1 : 1 : \\sqrt{2}]] lega insieme i tre lati. Ecco perché la calcolatrice può trovare l'ipotenusa, l'area e il perimetro da un solo dato in ingresso.",
            },
            {
              "kind": "p",
              "text": "I tre angoli sommano a 180°, come devono fare in ogni triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]]",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è il lato più lungo, perché si trova di fronte all'angolo più grande, l'angolo di 90°. I due cateti sono uguali, perché si trovano di fronte ad angoli uguali. Il triangolo può essere piccolo quanto pochi millimetri o grande quanto un lotto edificabile, e gli angoli restano gli stessi mentre i lati crescono insieme. Anche il rapporto resta lo stesso, quindi un triangolo con cateto di 5 cm e un triangolo con cateto di 5 m hanno la stessa forma a dimensioni diverse.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-main.svg",
            "alt": "Triangolo 45-45-90 ABC etichettato con angoli di 45, 45 e 90 gradi, cateti uguali a e b e ipotenusa c",
            "caption": "Triangolo ABC: angoli di 45°, 45° e 90°, con cateti uguali a e b e ipotenusa c.",
          },
        },
        "sec-isosceles": {
          "h2": "Perché Si Chiama Triangolo Rettangolo Isoscele?",
          "blocks": [
            {
              "kind": "p",
              "text": "Il nome ha due parti, e ciascuna descrive un fatto.",
            },
            {
              "kind": "p",
              "text": "Isoscele significa un triangolo con due lati uguali. In un triangolo 45-45-90, i due lati uguali sono i cateti [[a]] e [[b]]. Triangolo rettangolo significa un triangolo con un angolo di 90°. Mettendo insieme le due parole, il nome dice esattamente cos'è il triangolo: un triangolo rettangolo con due lati uguali.",
            },
            {
              "kind": "p",
              "text": "I cateti uguali derivano dagli angoli uguali. In qualsiasi triangolo, angoli uguali si trovano di fronte a lati uguali. Qui i due angoli acuti sono entrambi di 45°, quindi i lati opposti devono essere uguali. Il lato opposto all'angolo A è [[a]], e il lato opposto all'angolo B è [[b]], quindi [[a = b]]. Non è una coincidenza di un singolo disegno: vale per ogni triangolo 45-45-90, perché gli angoli sono sempre gli stessi.",
            },
            {
              "kind": "p",
              "text": "Il triangolo è simmetrico rispetto all'altezza tracciata dal vertice dell'angolo retto all'ipotenusa. Quell'altezza incontra l'ipotenusa nel suo punto medio e ad angolo retto, e divide il triangolo grande in due triangoli più piccoli congruenti tra loro. Ciascun triangolo piccolo ha angoli di 45°, 45° e 90°, quindi ciascuno è a sua volta un triangolo 45-45-90, a metà scala. Quella simmetria è un altro modo di vedere perché i due cateti devono coincidere: una piegatura lungo l'altezza sovrappone un cateto all'altro.",
            },
            {
              "kind": "p",
              "text": "L'altezza dal vertice dell'angolo retto all'ipotenusa ha anche una lunghezza utile: è uguale a metà dell'ipotenusa. Per un triangolo con ipotenusa [[c]], l'altezza è [[\\frac{c}{2}]]. Questo fatto è utile quando un problema chiede l'altezza del triangolo misurata dall'ipotenusa, ed è un'altra conseguenza della simmetria della figura.",
            },
          ],
        },
        "sec-legs": {
          "h2": "I Due Cateti Uguali e l'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Due cateti si incontrano all'angolo retto, e l'ipotenusa si trova di fronte a esso.",
            },
            {
              "kind": "p",
              "text": "Il cateto [[a]] è un lato perpendicolare, il lato BC nel triangolo ABC. Il cateto [[b]] è l'altro lato perpendicolare, il lato AC. I due cateti si incontrano nel vertice C, dove formano l'angolo di 90°, quindi sono perpendicolari tra loro. Ciascun cateto può fungere da base del triangolo, con l'altro cateto che funge da altezza, ed è per questo che la formula dell'area può usare direttamente i due cateti.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa [[c]] è il lato AB, opposto all'angolo di 90°. È il lato più lungo del triangolo, perché l'angolo più grande si trova sempre di fronte al lato più lungo. È anche l'unico lato che non è un cateto, quindi non va mai confusa con i cateti. I due cateti sono uguali, ma l'ipotenusa non è uguale a loro: è √2 volte ciascun cateto, circa 1.414 volte più lunga.",
            },
            {
              "kind": "p",
              "text": "Poiché i cateti sono uguali, ciascuno può essere usato come cateto noto nella calcolatrice. Se un problema fornisce il cateto [[b]] invece del cateto [[a]], inserisci quel valore come cateto: il risultato è lo stesso, dato che [[a = b]]. La stessa libertà non vale per l'ipotenusa, che richiede una modalità dedicata. Individuare l'ipotenusa è semplice in qualsiasi disegno: cerca il quadratino che segna l'angolo retto, e il lato di fronte a esso è l'ipotenusa.",
            },
          ],
          "table": {
            "headers": [
              "Lato",
              "Angolo opposto",
              "Lunghezza",
            ],
            "rows": [
              [
                "Cateto a (BC)",
                "45°",
                "a",
              ],
              [
                "Cateto b (AC)",
                "45°",
                "a, uguale al cateto a",
              ],
              [
                "Ipotenusa c (AB)",
                "90°",
                "a√2, lato più lungo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Il Rapporto tra i Lati del Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 1:1:√2 fissa ogni triangolo 45-45-90.",
            },
            {
              "kind": "p",
              "text": "Il rapporto tra i lati di un triangolo 45-45-90 è:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : 1 : \\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ogni parte del rapporto descrive un lato. Il primo cateto rappresenta un'unità, il secondo cateto rappresenta anch'esso un'unità e l'ipotenusa rappresenta √2 unità. Scritti con il cateto indicato come [[a]], i tre lati sono [[a = a]], [[b = a]] e [[c = a\\sqrt{2}]]. Se il cateto è di 1 cm, l'altro cateto è di 1 cm e l'ipotenusa è di √2 cm. Se il cateto è di 10 cm, l'altro cateto è di 10 cm e l'ipotenusa è di [[10\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Il rapporto resta lo stesso qualunque sia la dimensione del triangolo, perché tutti i triangoli 45-45-90 sono simili. Ingrandire o rimpicciolire un triangolo moltiplica ogni lato per lo stesso fattore, quindi le proporzioni tra i lati non cambiano. Prendi [[a = 4]] cm come esempio: il secondo cateto è [[b = 4]] cm e l'ipotenusa è [[c = 4\\sqrt{2} \\approx 5.657]] cm, e il rapporto [[4 : 4 : 5.657]] è lo stesso di [[1 : 1 : \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "Il valore di √2 è circa 1.41421356. È un numero irrazionale, quindi la sua espansione decimale non finisce mai e non si ripete mai, e nessun decimale lo eguaglia esattamente. Mantieni la forma radicale esatta quando puoi: scrivere [[4\\sqrt{2}]] cm è esatto, mentre 5.657 cm è un'approssimazione arrotondata. Usa la forma esatta nel procedimento e nelle risposte finali quando la domanda chiede un valore esatto, e dai il decimale solo quando serve una risposta approssimata.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-ratio.svg",
            "alt": "Tre barre che confrontano i due cateti uguali e l'ipotenusa nel rapporto 1 a 1 a radice quadrata di 2",
            "caption": "Il rapporto fisso 1:1:√2 confronta i due cateti uguali con l'ipotenusa.",
          },
        },
        "sec-why-sqrt2": {
          "h2": "Perché Compare la Radice Quadrata di 2?",
          "blocks": [
            {
              "kind": "p",
              "text": "La radice quadrata di 2 deriva direttamente dal teorema di Pitagora.",
            },
            {
              "kind": "p",
              "text": "Parti dai cateti uguali, [[a = b]], e applica il teorema di Pitagora, che vale per ogni triangolo rettangolo:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci i cateti uguali, rimpiazzando [[b]] con [[a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina i due termini identici:",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Prendi la radice quadrata positiva di entrambi i membri. Le lunghezze dei lati sono positive, quindi la radice negativa viene scartata:",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ecco tutta la ragione per cui compare √2: due quadrati uguali sommano al doppio di un quadrato, e la radice quadrata di 2 è il numero che annulla quel raddoppio. Questa è una relazione speciale, non una scorciatoia approssimata. Deriva dai cateti uguali più Pitagora, e vale per ogni triangolo 45-45-90 senza eccezioni.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm come controllo numerico:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{5^2 + 5^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{50}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Il passaggio da √50 a [[5\\sqrt{2}]] funziona perché [[50 = 25 \\times 2]], e la radice quadrata di 25 è 5. Semplificare il radicale in questo modo mantiene la risposta esatta e rende visibile lo schema: l'ipotenusa è sempre il cateto per √2, qualunque sia la lunghezza del cateto.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-pythagoras.svg",
            "alt": "Derivazione pitagorica che mostra a al quadrato più a al quadrato uguale c al quadrato, da cui c uguale a per radice quadrata di 2",
            "caption": "Da a² + a² = c², l'ipotenusa deve essere a√2.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formula per Trovare l'Ipotenusa da un Cateto",
          "blocks": [
            {
              "kind": "p",
              "text": "Moltiplica ciascun cateto per √2 per ottenere l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[c]] è l'ipotenusa e [[a]] è ciascun cateto. La formula è una lettura diretta del rapporto tra i lati: l'ipotenusa rappresenta √2 unità per ogni 1 unità di cateto, quindi l'ipotenusa è √2 volte il cateto. Serve una moltiplicazione perché il rapporto è una relazione di scala, e √2 compare perché Pitagora impone che l'ipotenusa sia tanto più lunga di un cateto.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è più lungo di ciascun cateto, come deve essere: √2 è circa 1.414, quindi moltiplicare per esso aumenta la lunghezza. La risposta esatta è [[5\\sqrt{2}]] cm, e 7.071 cm è l'approssimazione decimale. Mantieni la forma esatta quando la domanda la richiede, e arrotonda il decimale solo alla fine del procedimento, mai nel mezzo.",
            },
            {
              "kind": "p",
              "text": "Usa questa modalità ogni volta che un cateto è il lato noto e l'ipotenusa è quella incognita. Poiché i cateti sono uguali, non importa quale cateto fornisca il problema: inseriscilo come [[a]] e la formula dà la stessa ipotenusa. Un rapido controllo di plausibilità aiuta: l'ipotenusa dovrebbe risultare circa 1.414 volte il cateto. Se la tua risposta è il doppio del cateto, o solo di poco più lunga del cateto, hai usato il moltiplicatore sbagliato.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-hypotenuse.svg",
            "alt": "Triangolo 45-45-90 con cateto di 5 cm e ipotenusa indicata come 5 per radice quadrata di 2, circa 7.071 cm",
            "caption": "Ipotenusa da un cateto: a = 5 cm dà c = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-leg-hyp": {
          "h2": "Formula per Trovare un Cateto dall'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividi l'ipotenusa per √2 per ottenere un cateto.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[a]] è ciascun cateto e [[c]] è l'ipotenusa. Questa formula deriva dal riordinamento di [[c = a\\sqrt{2}]]: dividendo entrambi i membri per √2 si isola [[a]]. Dividere per √2 inverte la moltiplicazione originale, quindi annulla esattamente ciò che faceva la formula diretta. L'altro cateto ha la stessa lunghezza, quindi un solo calcolo dà entrambi i cateti in una volta.",
            },
            {
              "kind": "p",
              "text": "La forma razionalizzata di solito è più facile da usare:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Deriva dal moltiplicare numeratore e denominatore di [[\\frac{c}{\\sqrt{2}}]] per √2. Il denominatore diventa [[\\sqrt{2} \\times \\sqrt{2} = 2]], e il numeratore diventa [[c\\sqrt{2}]]. Le due forme danno lo stesso valore, ma la forma razionalizzata non ha radice quadrata al denominatore, ed è la forma che le risposte d'esame si aspettano.",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{10}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a \\approx 7.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Entrambi i cateti sono [[5\\sqrt{2}]] cm, circa 7.071 cm ciascuno. Il cateto è più corto dell'ipotenusa, come deve essere, dato che dividere per un numero maggiore di 1 riduce il valore. Se la tua risposta risulta più lunga dell'ipotenusa, hai moltiplicato invece di dividere, o hai diviso per il numero sbagliato.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-leg.svg",
            "alt": "Triangolo 45-45-90 con ipotenusa di 10 cm e ciascun cateto indicato come 5 per radice quadrata di 2, circa 7.071 cm",
            "caption": "Cateto dall'ipotenusa: c = 10 cm dà a = b = 5√2 ≈ 7.071 cm.",
          },
        },
        "sec-area": {
          "h2": "Come Calcolare l'Area di un Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Per l'area basta un solo cateto, perché i cateti sono uguali.",
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
              "text": "Poiché [[a = b]], sostituisci per ottenere l'area da un solo cateto:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "La divisione per due è necessaria perché un triangolo copre la metà del rettangolo formato dai suoi due cateti. L'area finale è espressa in unità quadrate, come i centimetri quadrati, perché l'area misura una superficie, non una lunghezza. Un quadrato di lato [[a]] ha area [[a^2]], e il triangolo è esattamente la metà di quel quadrato, che è un altro modo di vedere perché la formula è [[\\frac{a^2}{2}]].",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{36}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "La modalità area della calcolatrice accetta il cateto e calcola l'area direttamente, quindi inserisci solo [[a]]. Se conosci l'ipotenusa invece del cateto, trova prima il cateto con [[a = \\frac{c}{\\sqrt{2}}]], poi usa [[A = \\frac{a^2}{2}]]. Esiste anche una scorciatoia dalla sola ipotenusa: [[A = \\frac{c^2}{4}]], che dà lo stesso risultato. Per [[c = 10]] cm, [[A = \\frac{100}{4} = 25]] cm².",
            },
            {
              "kind": "p",
              "text": "L'area cresce con il quadrato del cateto, quindi raddoppiare il cateto quadruplica l'area. Un triangolo con [[a = 12]] cm ha un'area quattro volte quella del triangolo con [[a = 6]] cm, 72 cm² invece di 18 cm², non il doppio. Quella relazione quadratica è facile da dimenticare, quindi controllala ogni volta che un problema ingrandisce o rimpicciolisce un triangolo.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-area-perimeter.svg",
            "alt": "Triangolo 45-45-90 con cateto di 6 cm, ipotenusa di 6 per radice quadrata di 2 cm, area di 18 centimetri quadrati e perimetro di circa 20.485 cm",
            "caption": "Area e perimetro dal cateto: a = 6 cm dà A = 18 cm² e P ≈ 20.485 cm.",
          },
        },
        "sec-perimeter": {
          "h2": "Come Calcolare il Perimetro di un Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Somma tutti e tre i lati, poi raccogli il cateto a fattor comune.",
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
              "text": "Poiché [[a = b]] e [[c = a\\sqrt{2}]], sostituisci quelle relazioni:",
            },
            {
              "kind": "p",
              "text": "[[[P = 2a + a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Raccogli [[a]] a fattor comune per ottenere la forma semplificata:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Sono incluse tutte e tre le lunghezze dei lati, perché il perimetro percorre l'intero contorno del triangolo: giù per un cateto, attraverso l'altro cateto e indietro lungo l'ipotenusa. Tralasciare un lato qualsiasi dà una distanza più corta che non è il perimetro. Il perimetro è una misura lineare, non una misura di area, quindi la risposta è in unità semplici come i centimetri, mai in centimetri quadrati.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "La forma esatta è [[10 + 5\\sqrt{2}]] cm, e 17.071 cm è la forma decimale. La modalità perimetro della calcolatrice accetta il cateto e somma internamente i tre lati. Esiste anche una scorciatoia dalla sola ipotenusa: [[P = c(1 + \\sqrt{2})]]. Per [[c = 10]] cm, dà [[P = 10(1 + \\sqrt{2}) \\approx 24.142]] cm. Il perimetro cresce in proporzione diretta al cateto, quindi raddoppiare il cateto raddoppia il perimetro.",
            },
          ],
        },
        "sec-square": {
          "h2": "Come la Diagonale di un Quadrato Crea un Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Una diagonale taglia un quadrato in due triangoli 45-45-90 identici.",
            },
            {
              "kind": "p",
              "text": "Un quadrato ha quattro lati uguali e quattro angoli di 90°. Traccia una diagonale attraverso di esso, da un angolo all'angolo opposto, e il quadrato si divide in due triangoli. Ciascun triangolo ha due lati che sono lati del quadrato, quindi quei due lati sono uguali, e l'angolo tra loro è un angolo del quadrato, di 90°. La diagonale è il terzo lato, opposto a quell'angolo retto, quindi è l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "La diagonale divide anche a metà i due angoli che attraversa. Ogni angolo del quadrato è di 90°, e la diagonale lo divide in due angoli di 45°. Ciò dà a ciascun triangolo angoli di 45°, 45° e 90°, che è esattamente un triangolo 45-45-90. I due triangoli sono congruenti: hanno le stesse lunghezze dei lati e gli stessi angoli, perché condividono la diagonale e ciascuno prende due lati dello stesso quadrato.",
            },
            {
              "kind": "p",
              "text": "Usa un quadrato di lato [[a]]. La diagonale [[d]] è l'ipotenusa del triangolo, quindi Pitagora dà:",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = a^2 + a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d^2 = 2a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[d = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un quadrato di lato 8 cm:",
            },
            {
              "kind": "p",
              "text": "[[[d = 8\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[d \\approx 11.314 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Ecco perché i calcoli della diagonale di un quadrato usano sempre la stessa relazione con √2. Ogni volta che ti serve la diagonale di un quadrato, moltiplica il lato per √2; ogni volta che conosci la diagonale e ti serve il lato, dividila per √2. La stessa regola vale per piastrelle quadrate, cornici quadrate, lotti di terreno quadrati e qualsiasi altra forma quadrata, perché ogni quadrato si divide allo stesso modo.",
            },
          ],
          "image": {
            "src": "forty-five-ninety-square-diagonal.svg",
            "alt": "Quadrato di lato 8 cm diviso da una diagonale in due triangoli 45-45-90 congruenti, diagonale di circa 11.314 cm",
            "caption": "La diagonale di un quadrato di lato 8 cm è d = 8√2 ≈ 11.314 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Esempio Passo Passo di Risoluzione di un Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un solo triangolo, a = 5 cm, svolto dall'inizio alla fine.",
            },
            {
              "kind": "p",
              "text": "Parti dal cateto [[a = 5]] cm e trova ogni altra misura del triangolo, una formula alla volta. Ogni passaggio usa una formula delle sezioni precedenti, e la tabella riassuntiva alla fine raccoglie i risultati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trova il secondo cateto: i cateti sono uguali, quindi [[b = 5]] cm.",
                "Trova l'ipotenusa: [[c = a\\sqrt{2} = 5\\sqrt{2} \\approx 7.071]] cm.",
                "Trova l'area: [[A = \\frac{a^2}{2} = \\frac{25}{2} = 12.5]] centimetri quadrati.",
                "Trova il perimetro: [[P = a + b + c = 5 + 5 + 5\\sqrt{2} = 10 + 5\\sqrt{2} \\approx 17.071]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Tutte e quattro le misure descrivono lo stesso triangolo. I lati [[5]], [[5]] e [[7.071]] soddisfano il rapporto [[1 : 1 : \\sqrt{2}]] e il teorema di Pitagora, [[5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2]]. L'area e il perimetro sono due tipi diversi di misura di quello stesso triangolo: l'area copre la sua superficie, mentre il perimetro ne percorre il contorno. Se cambi il cateto, ogni altro valore cambia con esso, ma il rapporto tra i lati non cambia mai.",
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
                "Cateto a",
                "5 cm",
                "5 cm",
              ],
              [
                "Cateto b",
                "5 cm",
                "5 cm",
              ],
              [
                "Ipotenusa c",
                "5√2 cm",
                "7.071 cm",
              ],
              [
                "Area A",
                "25/2 cm²",
                "12.5 cm²",
              ],
              [
                "Perimetro P",
                "10 + 5√2 cm",
                "17.071 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Esempi Svolti di Calcoli sul Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto esempi svolti, che coprono ogni modalità della calcolatrice e una diagonale di quadrato.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Trova l'Ipotenusa da un Cateto",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 4]] cm. Formula: [[c = a\\sqrt{2}]]. Sostituzione: [[c = 4\\sqrt{2}]]. Risposta esatta: [[4\\sqrt{2}]] cm. Approssimazione decimale: [[c \\approx 5.657]] cm. L'ipotenusa è circa 1.414 volte il cateto, quindi 4 cm diventano circa 5.657 cm. Mantieni la forma esatta [[4\\sqrt{2}]] cm quando la domanda chiede un valore esatto.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Trova l'Ipotenusa da un Cateto più Grande",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 8]] cm. Formula: [[c = a\\sqrt{2}]]. Sostituzione: [[c = 8\\sqrt{2}]]. Risposta esatta: [[8\\sqrt{2}]] cm. Approssimazione decimale: [[c \\approx 11.314]] cm. Questo è lo stesso calcolo dell'Esempio 1 al doppio della scala, e la risposta è esattamente il doppio, il che conferma la scala lineare delle lunghezze dei lati. Lo stesso valore è la diagonale di un quadrato di lato 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Trova un Cateto dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 12]] cm. Formula: [[a = \\frac{c}{\\sqrt{2}}]]. Sostituzione: [[a = \\frac{12}{\\sqrt{2}}]]. La razionalizzazione dà [[a = 6\\sqrt{2}]] cm. Approssimazione decimale: [[a \\approx 8.485]] cm. Entrambi i cateti sono [[6\\sqrt{2}]] cm, perché i cateti sono uguali. Il cateto è più corto dell'ipotenusa, come deve essere.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Trova un Cateto da un'Ipotenusa più Grande",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 20]] cm. Formula: [[a = \\frac{c\\sqrt{2}}{2}]]. Sostituzione: [[a = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}]] cm. Approssimazione decimale: [[a \\approx 14.142]] cm. Entrambi i cateti sono [[10\\sqrt{2}]] cm. Un rapido controllo: [[a\\sqrt{2} = 10\\sqrt{2} \\times \\sqrt{2} = 20]] cm, che restituisce l'ipotenusa data.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Calcola l'Area",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 7]] cm. Formula: [[A = \\frac{a^2}{2}]]. Sostituzione: [[A = \\frac{49}{2}]]. Risultato: [[A = 24.5]] cm². L'area è esatta, senza radice quadrata e senza arrotondamenti, perché [[7^2 = 49]] si dimezza in modo netto. L'area è in unità quadrate, a differenza delle lunghezze dei lati, quindi l'unità è cm², non cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Calcola il Perimetro",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 6]] cm. Formula: [[P = a(2 + \\sqrt{2})]]. Sostituzione: [[P = 6(2 + \\sqrt{2})]]. Risposta esatta: [[P = 12 + 6\\sqrt{2}]] cm. Approssimazione decimale: [[P \\approx 20.485]] cm. Sommare i lati uno a uno dà lo stesso risultato: [[6 + 6 + 6\\sqrt{2} = 12 + 6\\sqrt{2}]] cm. Il perimetro è in unità semplici, non in unità quadrate.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Trova la Diagonale di un Quadrato",
            },
            {
              "kind": "p",
              "text": "Dato un quadrato di lato 10 m. Formula: [[d = a\\sqrt{2}]]. Sostituzione: [[d = 10\\sqrt{2}]] m. Risposta esatta: [[10\\sqrt{2}]] m. Approssimazione decimale: [[d \\approx 14.142]] m. La diagonale divide il quadrato in due triangoli 45-45-90, ciascuno con cateti di 10 m e ipotenusa [[10\\sqrt{2}]] m. Questa è la stessa formula usata per trovare un'ipotenusa da un cateto, perché la diagonale è l'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Trova l'Ipotenusa da un Cateto Decimale",
            },
            {
              "kind": "p",
              "text": "Dato [[a = 2.5]] cm. Formula: [[c = a\\sqrt{2}]]. Sostituzione: [[c = 2.5\\sqrt{2}]]. Risposta esatta: [[2.5\\sqrt{2}]] cm. Approssimazione decimale: [[c \\approx 3.536]] cm. I dati decimali funzionano esattamente come quelli interi: moltiplica per √2, mantieni prima la forma esatta e arrotonda il decimale solo al passaggio finale. Anche il secondo cateto è di 2.5 cm.",
            },
            {
              "kind": "p",
              "text": "Le risposte esatte e le approssimazioni decimali servono a scopi diversi. La forma esatta, come [[4\\sqrt{2}]] cm, è precisa ed è ciò che le risposte d'esame richiedono di solito. La forma decimale, come 5.657 cm, è più facile da immaginare e da misurare con un righello. Dai prima la forma esatta, poi il decimale, e arrotonda il decimale solo al passaggio finale.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Risposte Esatte e Approssimazioni Decimali",
          "blocks": [
            {
              "kind": "p",
              "text": "Una risposta esatta mantiene √2; una risposta decimale lo arrotonda.",
            },
            {
              "kind": "p",
              "text": "Confronta la risposta esatta [[5\\sqrt{2}]] cm con l'approssimazione decimale 7.071 cm. La prima è esatta: indica la lunghezza con precisione, usando il simbolo √2 per rappresentare il numero irrazionale il cui quadrato è 2. La seconda è arrotondata: indica la lunghezza a tre cifre decimali, che è vicina al valore vero ma non uguale a esso. La differenza è piccola, circa 0.00007 cm, ma è reale, e conta nelle dimostrazioni e nei calcoli successivi.",
            },
            {
              "kind": "p",
              "text": "Il numero √2 è irrazionale, il che significa che non può essere scritto come frazione di due numeri interi, e la sua espansione decimale non finisce mai e non si ripete mai. Inizia con 1.41421356 e continua senza fine. Qualsiasi decimale tu scriva per esso, per quanto lungo, è un'approssimazione. Ecco perché la notazione radicale esatta è preferibile nelle dimostrazioni matematiche e nelle risposte d'esame che chiedono un valore esatto: il radicale mantiene tutta la precisione che un decimale perde.",
            },
            {
              "kind": "p",
              "text": "Un'approssimazione decimale è più pratica quando devi misurare, tagliare o costruire qualcosa. Un righello non può misurare direttamente [[5\\sqrt{2}]] cm, ma può misurare 7.071 cm. Un falegname che taglia un puntello diagonale ha bisogno del decimale, mentre uno studente che dimostra un teorema ha bisogno della forma esatta. Usa ciascuna forma dove si adatta, ed etichetta i decimali come approssimati in modo che nessuno li scambi per valori esatti.",
            },
            {
              "kind": "p",
              "text": "L'arrotondamento va eseguito alla fine di un calcolo, non nel mezzo. Se sostituisci √2 con 1.41 all'inizio e poi moltiplichi, ogni passaggio successivo porta con sé quell'errore. Per [[a = 5]] cm, usare 1.41 dà [[c = 7.05]] cm, mentre l'approssimazione corretta è 7.071 cm. Mantieni √2 esatto per tutto il procedimento, nella forma [[5\\sqrt{2}]], e arrotonda solo la risposta finale. Non presentare mai un decimale arrotondato come se fosse esatto.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Come Verificare i Calcoli sul Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli rapidi individuano quasi ogni errore.",
            },
            {
              "kind": "p",
              "text": "Esegui almeno un controllo su ogni risposta, e tutti e quattro quando il problema conta. L'esempio seguente usa per tutto il triangolo con [[a = 5]] cm, [[b = 5]] cm e [[c = 5\\sqrt{2} \\approx 7.071]] cm.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Cateti Uguali",
            },
            {
              "kind": "p",
              "text": "Conferma [[a = b]]. Qui entrambi i cateti sono di 5 cm, quindi il controllo è superato. Se i tuoi due cateti differiscono, uno dei due è sbagliato, oppure il triangolo non è affatto un triangolo 45-45-90. Questo è il controllo più rapido di tutti, perché non richiede calcoli: i due cateti devono coincidere esattamente.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Rapporto tra i Lati",
            },
            {
              "kind": "p",
              "text": "Dividi l'ipotenusa per un cateto: [[\\frac{c}{a} = \\sqrt{2} \\approx 1.414]]. Qui [[\\frac{7.071}{5} \\approx 1.414]], quindi il rapporto è confermato. Se la divisione dà 2, hai usato per errore il raddoppio del triangolo 30-60-90. Se dà circa 1.732, hai usato per errore √3. Il rapporto [[\\frac{c}{a}]] deve essere √2, e nient'altro.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Conferma [[a^2 + b^2 = c^2]]. Qui [[5^2 + 5^2 = 25 + 25 = 50]], e [[(5\\sqrt{2})^2 = 25 \\times 2 = 50]], quindi il teorema è confermato. Questo controllo individua cateti scambiati e moltiplicatori sbagliati, perché usare il valore sbagliato per un lato qualsiasi rompe l'uguaglianza. La <a href=\"/pythagorean-theorem-calculator/\">calcolatrice del teorema di Pitagora</a> esegue questo controllo per qualsiasi terna di lunghezze dei lati.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Somma degli Angoli",
            },
            {
              "kind": "p",
              "text": "Conferma [[45^\\circ + 45^\\circ + 90^\\circ = 180^\\circ]]. Questo controllo riguarda l'impostazione del problema più che l'aritmetica: se gli angoli del tuo triangolo non sommano a 180°, o se non sono 45°, 45° e 90°, le formule del triangolo 45-45-90 non si applicano affatto, e nessuna lunghezza dei lati da esse ricavata può essere considerata attendibile. Conferma prima gli angoli, poi fidati dei lati.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà Importanti dei Triangoli 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci proprietà derivano dal rapporto fisso.",
            },
            {
              "kind": "list",
              "items": [
                "Il triangolo ha sempre angoli di 45°, 45° e 90°, e quegli angoli sommano sempre a 180°.",
                "Entrambi i cateti sono uguali, [[a = b]], perché si trovano di fronte ad angoli uguali di 45°.",
                "L'ipotenusa è il lato più lungo, perché si trova di fronte all'angolo di 90°.",
                "L'ipotenusa è √2 volte ciascun cateto, [[c = a\\sqrt{2}]], dove [[\\sqrt{2} \\approx 1.41421356]].",
                "Tutti i triangoli 45-45-90 sono simili, perché hanno gli stessi tre angoli e le stesse proporzioni tra i lati.",
                "Il rapporto tra i lati [[1 : 1 : \\sqrt{2}]] è indipendente dalla dimensione del triangolo, quindi ingrandire il triangolo lascia invariato il rapporto.",
                "L'altezza all'ipotenusa divide il triangolo in due triangoli 45-45-90 più piccoli e congruenti.",
                "L'altezza all'ipotenusa è uguale a metà dell'ipotenusa, [[\\frac{c}{2}]].",
                "L'area è la metà del quadrato di un cateto, [[A = \\frac{a^2}{2}]], quindi raddoppiare il cateto quadruplica l'area.",
                "Il perimetro è [[P = a(2 + \\sqrt{2})]], quindi raddoppiare il cateto raddoppia il perimetro.",
              ],
            },
            {
              "kind": "p",
              "text": "Ogni proprietà deriva dagli angoli e dal rapporto, non da un singolo esempio. Gli angoli uguali impongono cateti uguali, i cateti uguali più Pitagora impongono l'ipotenusa √2, e l'ipotenusa √2 impone le formule di area e perimetro. Una volta accettati i tre angoli, tutto il resto è fissato, ed è per questo che un solo lato noto basta a descrivere l'intero triangolo.",
            },
          ],
        },
        "sec-vs-3060": {
          "h2": "Differenza tra Triangoli 45-45-90 e 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "I due triangoli speciali sembrano simili, ma i loro rapporti non si mescolano mai.",
            },
            {
              "kind": "p",
              "text": "Entrambi sono triangoli rettangoli speciali, ed entrambi permettono di trovare ogni lato da un solo lato noto. La differenza sta negli angoli: un triangolo 45-45-90 ha due angoli acuti uguali, mentre un triangolo 30-60-90 ha due angoli acuti diversi. Quella sola differenza cambia completamente il rapporto tra i lati, quindi le formule di un triangolo danno risposte sbagliate per l'altro.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 è isoscele, con due cateti uguali, mentre un triangolo 30-60-90 è scaleno, senza lati uguali. In un triangolo 45-45-90 l'ipotenusa è √2 volte un cateto, mentre in un triangolo 30-60-90 l'ipotenusa è il doppio del cateto corto. Il cateto lungo di un triangolo 30-60-90 è √3 volte il cateto corto, e non c'è un lato corrispondente in un triangolo 45-45-90, perché i suoi due cateti hanno la stessa lunghezza. Per una trattazione completa dell'altro triangolo, vedi la <a href=\"/30-60-90-triangle-calculator/\">calcolatrice per triangoli 30-60-90</a>, che usa il rapporto 1:√3:2.",
            },
            {
              "kind": "p",
              "text": "Le formule non possono essere scambiate. Usare [[c = 2a]] su un triangolo 45-45-90 con [[a = 5]] cm dà 10 cm, mentre l'ipotenusa corretta è circa 7.071 cm. Usare [[c = a\\sqrt{2}]] su un triangolo 30-60-90 con cateto corto di 5 cm dà circa 7.071 cm, mentre l'ipotenusa corretta è 10 cm. Conferma sempre gli angoli prima di scegliere una formula: angoli acuti uguali significano 45-45-90, e angoli di 30° e 60° significano 30-60-90.",
            },
          ],
          "table": {
            "headers": [
              "Caratteristica",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Angoli",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Rapporto tra i lati",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Lati uguali",
                "Due cateti uguali",
                "Nessun lato uguale",
              ],
              [
                "Ipotenusa",
                "Cateto × √2",
                "Cateto corto × 2",
              ],
              [
                "Cateto lungo",
                "Uguale al cateto corto",
                "Cateto corto × √3",
              ],
              [
                "Tipo di triangolo",
                "Rettangolo isoscele",
                "Rettangolo scaleno",
              ],
            ],
          },
          "image": {
            "src": "forty-five-ninety-vs-3060.svg",
            "alt": "Due triangoli rettangoli speciali affiancati, un triangolo 45-45-90 con rapporto 1 a 1 a radice quadrata di 2 e un triangolo 30-60-90 con rapporto 1 a radice quadrata di 3 a 2",
            "caption": "Il triangolo 45-45-90 usa 1:1:√2; il triangolo 30-60-90 usa 1:√3:2. I rapporti non vanno mai scambiati.",
          },
        },
        "sec-mistakes": {
          "h2": "Errori Comuni nella Risoluzione dei Triangoli 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici errori compaiono più e più volte nei problemi sui triangoli 45-45-90.",
            },
            {
              "kind": "steps",
              "steps": [
                "Supporre che l'ipotenusa sia il doppio del cateto: il raddoppio appartiene al triangolo 30-60-90. Per [[a = 5]] cm, il raddoppio dà 10 cm, mentre l'ipotenusa corretta è [[5\\sqrt{2} \\approx 7.071]] cm. Corretto: [[c = a\\sqrt{2}]].",
                "Usare √3 invece di √2: √3 appartiene al triangolo 30-60-90, il cui rapporto è [[1 : \\sqrt{3} : 2]]. Un triangolo 45-45-90 usa sempre √2. Corretto: [[c = a\\sqrt{2}]].",
                "Dimenticare che entrambi i cateti sono uguali: i due cateti hanno sempre la stessa lunghezza, quindi se un problema fornisce un cateto, l'altro cateto è già noto. Per [[a = 5]] cm, [[b = 5]] cm, non una nuova incognita. Corretto: [[a = b]].",
                "Trattare l'ipotenusa come uno dei cateti: l'ipotenusa è il lato opposto all'angolo di 90°, ed è più lunga di ciascun cateto. Usarla come cateto nella formula dell'area dà un'area sbagliata. Corretto: individua prima l'ipotenusa con il segno dell'angolo retto.",
                "Usare [[c = a\\sqrt{3}]]: questo mescola i due triangoli speciali. Per [[a = 5]] cm, [[a\\sqrt{3} \\approx 8.660]] cm non è né l'ipotenusa né un cateto di questo triangolo. Corretto: [[c = a\\sqrt{2} \\approx 7.071]] cm.",
                "Dividere l'ipotenusa per 2 invece che per √2: dimezzare dà il cateto corto del triangolo 30-60-90, non il cateto del triangolo 45-45-90. Per [[c = 10]] cm, dimezzare dà 5 cm, mentre il cateto corretto è [[5\\sqrt{2} \\approx 7.071]] cm. Corretto: [[a = \\frac{c}{\\sqrt{2}}]].",
                "Dimenticare di elevare il cateto al quadrato nel calcolo dell'area: l'area richiede [[a^2]], non [[a]]. Usare [[A = \\frac{a}{2}]] per [[a = 6]] cm dà 3 cm², mentre l'area corretta è [[\\frac{36}{2} = 18]] cm². Corretto: [[A = \\frac{a^2}{2}]].",
                "Sommare solo i due cateti nel calcolo del perimetro: il perimetro richiede tutti e tre i lati. Sommare solo i due cateti per [[a = 5]] cm dà 10 cm, mentre il perimetro vero è circa 17.071 cm. Corretto: [[P = a + b + c]].",
                "Confondere le risposte esatte con le approssimazioni decimali: [[5\\sqrt{2}]] cm è esatto, mentre 7.071 cm è arrotondato. Scrivere 7.071 cm come se fosse esatto perde la precisione che il radicale mantiene. Corretto: dai prima la forma esatta, poi il decimale.",
                "Arrotondare √2 troppo presto: usare 1.41 per √2 nel mezzo di un calcolo sposta ogni passaggio successivo. Per [[a = 5]] cm, [[5 \\times 1.41 = 7.05]] cm invece di 7.071 cm. Corretto: mantieni √2 esatto per tutto il procedimento e arrotonda solo la risposta finale.",
                "Mescolare le unità di misura: un cateto in centimetri e un'ipotenusa in metri non possono essere combinati direttamente. Converti ogni misura in un'unica unità prima di calcolare. Corretto: 0.5 m equivale a 50 cm, poi calcola in centimetri.",
                "Confondere i rapporti dei triangoli 45-45-90 e 30-60-90: i rapporti [[1 : 1 : \\sqrt{2}]] e [[1 : \\sqrt{3} : 2]] appartengono a triangoli diversi. Scambiarli dà un'ipotenusa sbagliata di molto. Corretto: conferma gli angoli, poi scegli il rapporto che corrisponde a essi.",
                "Dimenticare che l'area richiede unità quadrate: un'area di 18 cm è sbagliata per unità, anche se il numero è giusto. L'area misura una superficie, quindi è 18 centimetri quadrati. Corretto: [[A = 18]] cm².",
                "Usare le formule per un triangolo rettangolo qualsiasi: le formule [[c = a\\sqrt{2}]] e [[A = \\frac{a^2}{2}]] valgono solo quando gli angoli sono 45°, 45° e 90°. Un triangolo rettangolo con angoli di 40° e 50° ha un rapporto diverso. Corretto: conferma prima gli angoli, poi usa le formule.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni Pratiche dei Triangoli 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto compare ovunque un quadrato venga tagliato a metà.",
            },
            {
              "kind": "p",
              "text": "L'uso più comune è trovare la diagonale di un quadrato. Una piastrella quadrata di lato 30 cm ha una diagonale di [[30\\sqrt{2} \\approx 42.426]] cm, che è la lunghezza da tagliare quando una piastrella deve essere divisa da un angolo all'altro. Una cornice quadrata, un piano di tavolo quadrato e un lotto di terreno quadrato usano tutti lo stesso calcolo, perché ogni quadrato si divide in due triangoli 45-45-90.",
            },
            {
              "kind": "p",
              "text": "I compiti di geometria e gli esercizi di trigonometria usano problemi sui triangoli 45-45-90 per verificare se gli studenti sanno individuare i cateti uguali, applicare il rapporto e mantenere risposte esatte in forma radicale. Uno studente che conosce un lato di un triangolo del genere può trovare gli altri senza misurare, ed è questo lo scopo del rapporto. Le dimostrazioni in classe usano il triangolo per mostrare come un rapporto fisso trasformi una misura in una descrizione completa di una figura, e come tagliare un quadrato a metà produca il triangolo.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico, la progettazione architettonica e la geometria delle costruzioni usano le relazioni 45-45-90 quando un progetto richiede un angolo di 45°, come un puntello diagonale, uno schema a base quadrata o un angolo tagliato a 45°. Un costruttore che conosce un lato di un triangolo del genere può trovare la distanza diagonale senza misurarla direttamente. Il lavoro sul piano cartesiano usa la stessa idea: uno spostamento di 5 unità a destra e 5 unità in alto copre una distanza diagonale di [[5\\sqrt{2} \\approx 7.071]] unità. Questi sono usi realistici della geometria stessa, non affermazioni sulle tolleranze ingegneristiche: il lavoro di progettazione reale aggiunge limiti dei materiali e margini di sicurezza oltre ai valori geometrici esatti di questa pagina.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di Esercitazione con Risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Svolgi tutti e sei i problemi su carta prima di leggere le risposte.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Trova l'Ipotenusa da un Cateto",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 ha un cateto di [[a = 9]] cm. Trova l'ipotenusa [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Trova un Cateto dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 ha un'ipotenusa di [[c = 14]] cm. Trova il cateto [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcola l'Area",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 ha un cateto di [[a = 10]] cm. Trova l'area [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Calcola il Perimetro",
            },
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 ha un cateto di [[a = 3]] cm. Trova il perimetro [[P]].",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova la Diagonale di un Quadrato",
            },
            {
              "kind": "p",
              "text": "Un quadrato ha un lato di 12 cm. Trova la lunghezza della sua diagonale.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Verifica un Triangolo 45-45-90 Proposto",
            },
            {
              "kind": "p",
              "text": "Un triangolo ha cateti di 6 cm e 6 cm e un'ipotenusa di [[6\\sqrt{2}]] cm. Usa il teorema di Pitagora per verificare che queste lunghezze dei lati formino un triangolo 45-45-90.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai Problemi di Esercitazione",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[c = a\\sqrt{2} = 9\\sqrt{2} \\approx 12.728]] cm. La risposta esatta è [[9\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[a = \\frac{c\\sqrt{2}}{2} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.899]] cm. Entrambi i cateti sono [[7\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[A = \\frac{a^2}{2} = \\frac{100}{2} = 50]] cm². L'area è esatta, senza arrotondamenti.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[P = a(2 + \\sqrt{2}) = 3(2 + \\sqrt{2}) = 6 + 3\\sqrt{2} \\approx 10.243]] cm. Sommare i lati uno a uno dà lo stesso risultato: [[3 + 3 + 3\\sqrt{2} = 6 + 3\\sqrt{2}]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[d = a\\sqrt{2} = 12\\sqrt{2} \\approx 16.971]] cm. La diagonale è l'ipotenusa del triangolo 45-45-90 formato tagliando il quadrato a metà.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[a^2 + b^2 = 36 + 36 = 72]], e [[c^2 = (6\\sqrt{2})^2 = 36 \\times 2 = 72]]. I due membri coincidono, e i cateti sono uguali, quindi il triangolo è un triangolo 45-45-90 con ipotenusa di circa 8.485 cm.",
            },
          ],
        },
      },
      "relatedHeading": "Calcolatrici Correlate per Triangoli Rettangoli",
      "relatedIntro": "Ogni calcolatrice qui sotto gestisce un diverso compito sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alla misura che ti serve.",
      "relatedItems": [
        "Calcolatrice per Triangoli Rettangoli Speciali",
        "Calcolatrice per Triangoli 30-60-90",
        "Calcolatrice dei Lati di un Triangolo Rettangolo",
        "Calcolatrice dell'Area di un Triangolo Rettangolo",
        "Calcolatrice del Perimetro di un Triangolo Rettangolo",
        "Calcolatrice del Teorema di Pitagora",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "question": "Che cos'è un triangolo 45-45-90?",
          "answer": "Un triangolo 45-45-90 è un triangolo rettangolo con angoli di 45°, 45° e 90°. Si chiama triangolo rettangolo isoscele perché i suoi due cateti sono uguali. I suoi lati seguono sempre il rapporto fisso [[1 : 1 : \\sqrt{2}]], quindi conoscere un lato basta a trovare tutti gli altri.",
        },
        {
          "question": "Qual è il rapporto tra i lati di un triangolo 45-45-90?",
          "answer": "Il rapporto tra i lati è [[a : b : c = 1 : 1 : \\sqrt{2}]], dove [[a]] e [[b]] sono i cateti uguali e [[c]] è l'ipotenusa. Ciò significa [[b = a]] e [[c = a\\sqrt{2}]]. Il rapporto è lo stesso per ogni triangolo 45-45-90, qualunque sia la sua dimensione.",
        },
        {
          "question": "Perché entrambi i cateti sono uguali?",
          "answer": "I due angoli acuti sono entrambi di 45°, e in qualsiasi triangolo angoli uguali si trovano di fronte a lati uguali. Il lato opposto all'angolo A è il cateto [[a]], e il lato opposto all'angolo B è il cateto [[b]], quindi [[a = b]]. Il triangolo è anche simmetrico rispetto all'altezza dall'angolo retto all'ipotenusa.",
        },
        {
          "question": "Perché l'ipotenusa è moltiplicata per √2?",
          "answer": "Il teorema di Pitagora dà [[a^2 + a^2 = c^2]], che si semplifica in [[2a^2 = c^2]]. Prendendo la radice quadrata si ottiene [[c = a\\sqrt{2}]]. La √2 compare perché due quadrati uguali sommano al doppio di un quadrato, quindi l'ipotenusa deve essere √2 volte un cateto.",
        },
        {
          "question": "Come trovo l'ipotenusa da un cateto?",
          "answer": "Moltiplica il cateto per √2 usando [[c = a\\sqrt{2}]]. Per [[a = 5]] cm, [[c = 5\\sqrt{2} \\approx 7.071]] cm. Va bene ciascun cateto, perché i cateti sono uguali. Mantieni la forma esatta [[5\\sqrt{2}]] cm quando la domanda chiede un valore esatto.",
        },
        {
          "question": "Come trovo un cateto dall'ipotenusa?",
          "answer": "Dividi l'ipotenusa per √2 usando [[a = \\frac{c}{\\sqrt{2}}]], oppure usa la forma razionalizzata [[a = \\frac{c\\sqrt{2}}{2}]]. Per [[c = 10]] cm, [[a = 5\\sqrt{2} \\approx 7.071]] cm. Entrambi i cateti hanno questa stessa lunghezza, perché i cateti sono uguali.",
        },
        {
          "question": "Come calcolo l'area di un triangolo 45-45-90?",
          "answer": "Usa [[A = \\frac{a^2}{2}]], dove [[a]] è un cateto. I due cateti fungono da base e altezza, e il triangolo copre metà del quadrato formato da essi. Per [[a = 6]] cm, [[A = \\frac{36}{2} = 18]] cm². L'area è sempre in unità quadrate.",
        },
        {
          "question": "Come calcolo il suo perimetro?",
          "answer": "Somma tutti e tre i lati con [[P = a + b + c]], che si semplifica in [[P = a(2 + \\sqrt{2})]]. Per [[a = 5]] cm, [[P = 10 + 5\\sqrt{2} \\approx 17.071]] cm. Il perimetro è una misura lineare, quindi la risposta è in unità semplici, non in unità quadrate.",
        },
        {
          "question": "Perché la diagonale di un quadrato crea un triangolo 45-45-90?",
          "answer": "Una diagonale divide un quadrato in due triangoli, ciascuno con due lati del quadrato e un angolo di 90°. La diagonale divide anche a metà due angoli in 45° ciascuno. Ciascun triangolo ha quindi angoli di 45°, 45° e 90°, e la sua ipotenusa è la diagonale, [[d = a\\sqrt{2}]].",
        },
        {
          "question": "La √2 è un numero esatto o un'approssimazione?",
          "answer": "Il simbolo √2 rappresenta un numero irrazionale esatto il cui quadrato è 2, ma la sua espansione decimale non finisce mai, e inizia con 1.41421356. Qualsiasi decimale tu scriva per esso è un'approssimazione. Mantieni la forma radicale nelle risposte esatte, e usa un decimale solo quando serve un valore misurato o arrotondato.",
        },
        {
          "question": "Tutti i triangoli 45-45-90 sono simili?",
          "answer": "Sì. Ogni triangolo 45-45-90 ha gli stessi tre angoli, 45°, 45° e 90°, e lo stesso rapporto tra i lati [[1 : 1 : \\sqrt{2}]]. Due triangoli del genere differiscono solo per la dimensione, mai per la forma. Ingrandirne uno o rimpicciolirlo moltiplica ogni lato per lo stesso fattore, quindi le proporzioni restano fisse.",
        },
        {
          "question": "Qual è la differenza tra i triangoli 45-45-90 e 30-60-90?",
          "answer": "Un triangolo 45-45-90 ha angoli di 45°, 45° e 90°, cateti uguali e rapporto [[1 : 1 : \\sqrt{2}]]. Un triangolo 30-60-90 ha angoli di 30°, 60° e 90°, nessun lato uguale e rapporto [[1 : \\sqrt{3} : 2]]. Le loro formule non possono essere scambiate, quindi conferma sempre prima gli angoli.",
        },
      ],
    },
};
