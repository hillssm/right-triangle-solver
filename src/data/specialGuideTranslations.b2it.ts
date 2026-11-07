// specialGuideTranslations.bit.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatore di Triangoli Retti Speciali - Rapporti 45-45-90 e 30-60-90",
        "description": "Risolvi triangoli 45-45-90 e 30-60-90 con il Calcolatore di Triangoli Retti Speciali. Usa i rapporti fissi 1:1:√2 e 1:√3:2 per trovare rapidamente i lati mancanti.",
        "primaryKeyword": "Special Right Triangle Calculator",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcolatore di Triangoli Retti Speciali",
        "sec-calculate": "Calcolare i Lati Mancanti dei Triangoli Retti Speciali",
        "sec-what": "Cosa Sono i Triangoli Retti Speciali?",
        "sec-types": "I Due Tipi Principali di Triangoli Retti Speciali",
        "sec-454590": "Comprendere il Triangolo 45-45-90",
        "sec-derive-454590": "Ricavare il Rapporto dei Lati 45-45-90",
        "sec-306090": "Comprendere il Triangolo 30-60-90",
        "sec-derive-306090": "Ricavare il Rapporto dei Lati 30-60-90",
        "sec-compare": "Confrontare i Rapporti dei Lati dei Due Triangoli Speciali",
        "sec-how-hyp-45": "Come Usare il Calcolatore dell'Ipotenusa 45-45-90",
        "sec-how-leg-45": "Come Trovare un Cateto dall'Ipotenusa 45-45-90",
        "sec-how-long-30": "Come Usare il Calcolatore del Cateto Lungo 30-60-90",
        "sec-how-hyp-30": "Come Usare il Calcolatore dell'Ipotenusa 30-60-90",
        "sec-examples": "Esempi Passo Passo per Entrambi i Tipi di Triangolo Speciale",
        "sec-area-perimeter": "Relazioni di Area e Perimetro nei Triangoli Retti Speciali",
        "sec-exact": "Risposte Esatte con Radicali e Approssimazioni Decimali",
        "sec-verify": "Come Verificare i Calcoli dei Triangoli Retti Speciali",
        "sec-mistakes": "Errori Comuni nella Risoluzione dei Triangoli Retti Speciali",
        "sec-applications": "Applicazioni Pratiche dei Triangoli Retti Speciali",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-related": "Calcolatori Correlati di Triangoli Retti",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore di Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Risolvi triangoli 45-45-90 e 30-60-90 a partire da un solo lato noto, usando i loro rapporti fissi tra i lati.",
            },
            {
              "kind": "p",
              "text": "Un triangolo retto speciale è un triangolo retto i cui angoli producono un rapporto fisso tra i lati che non cambia mai, non importa quanto grande o piccolo sia il triangolo. Solo due schemi di angoli lo fanno nella geometria scolastica: il triangolo 45-45-90 e il triangolo 30-60-90. Il Calcolatore di Triangoli Retti Speciali in questa pagina copre entrambi i tipi, quindi un solo lato noto è sufficiente per trovare tutti gli altri lati.",
            },
            {
              "kind": "p",
              "text": "Il triangolo 45-45-90 ha due cateti uguali e i suoi lati seguono il rapporto [[a : b : c = 1 : 1 : \\sqrt{2}]]. Il triangolo 30-60-90 ha tre lati di lunghezza diversa e i suoi lati seguono il rapporto [[a : b : c = 1 : \\sqrt{3} : 2]]. Qui [[a]] e [[b]] sono i cateti e [[c]] è l'ipotenusa, e il significato di [[a]] e [[b]] cambia con il tipo di triangolo, quindi le sezioni seguenti indicano sempre quale tipo usano.",
            },
            {
              "kind": "p",
              "text": "Se un triangolo 45-45-90 ha un cateto di 5 cm, l'altro cateto è anch'esso di 5 cm e l'ipotenusa è [[c = 5\\sqrt{2} \\approx 7.071]] cm. Se un triangolo 30-60-90 ha un cateto corto di 5 cm, il cateto lungo è [[b = 5\\sqrt{3} \\approx 8.660]] cm e l'ipotenusa è [[c = 10]] cm. Le quattro modalità del calcolatore in questa pagina eseguono esattamente questi passaggi, e la guida seguente spiega da dove deriva ciascun rapporto, come scegliere la modalità giusta e come controllare ogni risposta.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcolare i Lati Mancanti dei Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina ha quattro modalità, una per ogni lato mancante che un problema sui triangoli retti speciali di solito richiede. Scegli prima il tipo di triangolo, poi scegli il lato che conosci e il lato che ti serve. La tabella seguente elenca ogni modalità con il suo input, la sua formula e il suo risultato.",
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
                "45-45-90: Ipotenusa",
                "Cateto a",
                "Ipotenusa c",
              ],
              [
                "45-45-90: Cateto",
                "Ipotenusa c",
                "Cateto a",
              ],
              [
                "30-60-90: Cateto lungo",
                "Cateto corto a",
                "Cateto lungo b",
              ],
              [
                "30-60-90: Ipotenusa",
                "Cateto corto a",
                "Ipotenusa c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "La Modalità 1 trova l'ipotenusa di un triangolo 45-45-90 a partire da uno dei due cateti uguali.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "La Modalità 2 trova un cateto di un triangolo 45-45-90 a partire dall'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "La Modalità 3 trova il cateto lungo di un triangolo 30-60-90 a partire dal cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "La Modalità 4 trova l'ipotenusa di un triangolo 30-60-90 a partire dal cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Per usare una qualsiasi modalità, conferma il tipo di triangolo dai suoi angoli, individua il lato noto, inserisci una misura positiva, scegli un'unità di misura coerente con il resto del problema e fai clic su Calcola. Usa Reimposta prima di un nuovo calcolo, così un vecchio valore non può finire nella risposta successiva. Ogni modalità richiede una formula diversa perché ogni modalità parte da un lato noto diverso, e i due tipi di triangolo hanno rapporti diversi, quindi una formula 45-45-90 non appartiene mai a un problema 30-60-90.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Diagramma di flusso delle quattro modalità del Calcolatore di Triangoli Retti Speciali: da cateto a ipotenusa 45-45-90, da ipotenusa a cateto 45-45-90, da cateto corto a cateto lungo 30-60-90 e da cateto corto a ipotenusa 30-60-90",
            "caption": "Le quattro modalità del calcolatore: ognuna parte da un lato noto e applica un rapporto fisso.",
          },
        },
        "sec-what": {
          "h2": "Cosa Sono i Triangoli Retti Speciali?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo retto speciale è un triangolo retto i cui tre angoli sono fissati a valori che costringono i suoi lati in un unico rapporto immutabile. La maggior parte dei triangoli retti non ha una simile scorciatoia: conoscere un lato non dice nulla sugli altri finché non si conosce anche un angolo o un secondo lato. In un triangolo retto speciale, gli angoli da soli fissano la forma, quindi una sola lunghezza di lato fissa l'intero triangolo.",
            },
            {
              "kind": "p",
              "text": "Il teorema di Pitagora vale comunque, ed è lo strumento che produce entrambi i rapporti. In un triangolo 45-45-90, i due cateti uguali fanno collassare il teorema in [[2a^2 = c^2]], che dà [[c = a\\sqrt{2}]]. In un triangolo 30-60-90, l'ipotenusa è il doppio del cateto corto, quindi il teorema dà [[b^2 = (2a)^2 - a^2 = 3a^2]], che dà [[b = a\\sqrt{3}]]. Le derivazioni complete compaiono nelle loro sezioni dedicate più avanti.",
            },
            {
              "kind": "p",
              "text": "I rapporti restano gli stessi a ogni dimensione perché i triangoli sono simili all'interno del proprio tipo. Un triangolo 45-45-90 con un cateto di 1 cm e uno con un cateto di 100 cm hanno la stessa forma, gli stessi angoli e lo stesso rapporto 1:1:√2. Questa indipendenza dalla scala è ciò che rende questi triangoli così utili in geometria e in trigonometria: una volta riconosciuto lo schema degli angoli, si possono scrivere tutti i lati senza misurare né usare seno e coseno.",
            },
            {
              "kind": "p",
              "text": "I triangoli 45-45-90 e 30-60-90 sono due famiglie diverse, non due nomi per la stessa forma. Uno ha due cateti uguali e l'altro ha tre lati di lunghezza diversa. Confonderli è l'errore più comune in questo argomento, quindi la prossima sezione presenta ciascuna famiglia separatamente prima che la guida le confronti fianco a fianco.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Due triangoli retti speciali affiancati: un triangolo 45-45-90 con rapporto 1:1:√2 e un triangolo 30-60-90 con rapporto 1:√3:2",
            "caption": "I due triangoli retti speciali: 45-45-90 con cateti uguali, e 30-60-90 con tre lati diversi.",
          },
        },
        "sec-types": {
          "h2": "I Due Tipi Principali di Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Entrambi i triangoli speciali sono triangoli retti, quindi ciascuno ha un angolo di 90° e un'ipotenusa opposta a esso. Ciò che differisce è la coppia di angoli acuti, e gli angoli acuti decidono il rapporto tra i lati. Impara prima ciascun tipo separatamente, e il confronto più avanti in questa guida sarà facile da seguire.",
            },
            {
              "kind": "h3",
              "text": "Triangolo 45-45-90",
            },
            {
              "kind": "list",
              "items": [
                "Angoli: 45°, 45°, 90°.",
                "Due cateti uguali, quindi ciascun cateto può servire come input noto.",
                "L'ipotenusa è uguale al cateto per √2, [[c = a\\sqrt{2}]].",
                "Rapporto tra i lati: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Chiamato anche triangolo rettangolo isoscele.",
              ],
            },
            {
              "kind": "h3",
              "text": "Triangolo 30-60-90",
            },
            {
              "kind": "list",
              "items": [
                "Angoli: 30°, 60°, 90°.",
                "Cateto corto [[a]] opposto all'angolo di 30°, cateto lungo [[b]] opposto all'angolo di 60°.",
                "L'ipotenusa è uguale al doppio del cateto corto, [[c = 2a]].",
                "Il cateto lungo è uguale al cateto corto per √3, [[b = a\\sqrt{3}]].",
                "Rapporto tra i lati: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "Un triangolo rettangolo scaleno, poiché tutti e tre i lati differiscono.",
              ],
            },
            {
              "kind": "p",
              "text": "La differenza visiva è chiara una volta che sai cosa cercare. In un triangolo 45-45-90 i due cateti sembrano della stessa lunghezza e l'ipotenusa forma un angolo di 45° con ciascun cateto. In un triangolo 30-60-90 il cateto opposto all'angolo di 30° è visibilmente il lato più corto, il cateto opposto all'angolo di 60° è più lungo e l'ipotenusa è esattamente il doppio del cateto corto. La tabella seguente riassume il contrasto.",
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
                "Cateti uguali",
                "Sì",
                "No",
              ],
              [
                "Lato più corto",
                "Entrambi i cateti",
                "Cateto corto (opposto a 30°)",
              ],
              [
                "Lato più lungo",
                "Ipotenusa",
                "Ipotenusa",
              ],
              [
                "Formula dell'ipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Formula del cateto lungo",
                "Non applicabile",
                "a√3",
              ],
              [
                "Tipo di triangolo",
                "Rettangolo isoscele",
                "Rettangolo scaleno",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Comprendere il Triangolo 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo 45-45-90 è un triangolo rettangolo isoscele. I suoi due angoli acuti sono entrambi di 45°, quindi gli angoli sommano a [[45° + 45° + 90° = 180°]], come deve fare ogni triangolo. Poiché i due angoli acuti sono uguali, anche i lati opposti a essi sono uguali, ed è per questo che i due cateti hanno la stessa lunghezza.",
            },
            {
              "kind": "p",
              "text": "Chiama i cateti [[a]] e [[b]] e l'ipotenusa [[c]]. Cateti uguali significa [[a = b]], e il rapporto tra i lati è [[a : b : c = 1 : 1 : \\sqrt{2}]]. L'ipotenusa è il lato più lungo, come in ogni triangolo retto, ed è più lunga di ciascun cateto di un fattore √2, circa 1.414.",
            },
            {
              "kind": "p",
              "text": "Le due formule di lavoro sono l'ipotenusa da un cateto e il cateto dall'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Prendi un cateto di 5 cm. L'altro cateto è di 5 cm e l'ipotenusa è [[c = 5\\sqrt{2} \\approx 7.071]] cm. Gli stessi passaggi funzionano a qualsiasi dimensione: un cateto di 12 cm dà un'ipotenusa di [[12\\sqrt{2} \\approx 16.971]] cm, e un cateto di 1 unità dà un'ipotenusa di √2 unità. Il <a href=\"/45-45-90-triangle-calculator/\">calcolatore del triangolo 45-45-90</a> tratta questo tipo di triangolo in tutti i dettagli, inclusi area e perimetro.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "Un triangolo 45-45-90 con due cateti uguali segnati come congruenti, angoli 45°, 45°, 90° e ipotenusa indicata come a√2",
            "caption": "Un triangolo 45-45-90: cateti uguali, angoli acuti uguali e ipotenusa di a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Ricavare il Rapporto dei Lati 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 1:1:√2 non è una regola da memorizzare alla cieca. Deriva in pochi passaggi dal teorema di Pitagora, e vedere i passaggi una volta rende il rapporto difficile da dimenticare. Parti dal fatto che i cateti sono uguali.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Applica il teorema di Pitagora ai cateti e all'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci [[b]] con [[a]], poiché i cateti sono uguali.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina i due termini identici.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Prendi la radice quadrata positiva di entrambi i membri. Le lunghezze sono positive, quindi la radice negativa viene scartata.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Poni [[a = 1]] e il rapporto appare direttamente: cateti 1 e 1, ipotenusa √2, quindi il rapporto è [[1 : 1 : \\sqrt{2}]]. Lo stesso rapporto spiega la diagonale di un quadrato. Un quadrato con lato [[a]] ha una diagonale che lo divide in due triangoli 45-45-90 congruenti, e la diagonale è l'ipotenusa di ciascuno dei due, quindi la diagonale è uguale a [[a\\sqrt{2}]]. Un quadrato con un lato di 8 cm ha una diagonale di [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "Un triangolo 45-45-90 etichettato che mostra la derivazione pitagorica a al quadrato più a al quadrato uguale c al quadrato, da cui c uguale a per radice di 2",
              "caption": "La derivazione pitagorica: cateti uguali trasformano a² + b² = c² in 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "Un quadrato con lato di 8 cm e diagonale di 8 radice di 2 cm, diviso in due triangoli 45-45-90 congruenti",
              "caption": "La diagonale di un quadrato divide il quadrato in due triangoli 45-45-90 congruenti.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Comprendere il Triangolo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo 30-60-90 ha tre angoli diversi, quindi ha tre lati di lunghezza diversa. Il lato opposto all'angolo più piccolo è il lato più corto, il lato opposto all'angolo intermedio è il lato intermedio e il lato opposto all'angolo di 90° è l'ipotenusa. Quella regola del lato opposto è tutta la chiave per etichettare correttamente questo triangolo.",
            },
            {
              "kind": "p",
              "text": "Usa [[a]] per il cateto corto opposto a 30°, [[b]] per il cateto lungo opposto a 60° e [[c]] per l'ipotenusa opposta a 90°. Le due formule di lavoro sono il cateto lungo dal cateto corto e l'ipotenusa dal cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Il rapporto tra i lati è [[a : b : c = 1 : \\sqrt{3} : 2]], con √3 pari a circa 1.732. Prendi un cateto corto di 5 cm. Il cateto lungo è [[b = 5\\sqrt{3} \\approx 8.660]] cm e l'ipotenusa è [[c = 10]] cm. Controlla con il teorema di Pitagora: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], che conferma che i tre lati si combinano correttamente.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è sempre esattamente il doppio del cateto corto, ed è il controllo più veloce in questo argomento. Se un problema dice che l'ipotenusa è di 14 cm, il cateto corto è subito di 7 cm, e il cateto lungo segue come [[7\\sqrt{3} \\approx 12.124]] cm. Il <a href=\"/30-60-90-triangle-calculator/\">calcolatore del triangolo 30-60-90</a> tratta questo tipo di triangolo in tutti i dettagli, inclusa la sua derivazione dal triangolo equilatero.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "Un triangolo 30-60-90 con cateto corto a opposto a 30 gradi, cateto lungo a radice di 3 opposto a 60 gradi e ipotenusa 2a opposta a 90 gradi",
            "caption": "Un triangolo 30-60-90: il cateto corto si trova opposto a 30°, il cateto lungo opposto a 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Ricavare il Rapporto dei Lati 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 1:√3:2 deriva da un triangolo equilatero, e la costruzione merita di essere seguita passo passo. Parti da un triangolo equilatero la cui lunghezza del lato è [[2a]]. Tutti e tre i suoi angoli sono di 60° e tutti e tre i lati sono uguali.",
            },
            {
              "kind": "p",
              "text": "Traccia un'altezza da un vertice al lato opposto. L'altezza fa tre cose contemporaneamente: divide il triangolo equilatero in due triangoli retti congruenti, taglia la base in due segmenti di lunghezza [[a]] e divide un angolo di 60° in due angoli di 30°. Ciascuna metà è ora un triangolo con angoli di 30°, 60° e 90°.",
            },
            {
              "kind": "p",
              "text": "In ciascuna metà, l'ipotenusa è il lato equilatero originale, [[2a]], e il cateto corto è la mezza base, [[a]]. Chiama l'altezza, che è il cateto lungo, [[b]]. Applica il teorema di Pitagora al mezzo triangolo.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Sviluppa il quadrato.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Semplifica.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Prendi la radice quadrata positiva.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Poni [[a = 1]] e il rapporto appare: cateto corto 1, cateto lungo √3, ipotenusa 2, quindi il rapporto è [[1 : \\sqrt{3} : 2]]. L'altezza di un triangolo equilatero con lato di 10 cm è quindi [[5\\sqrt{3} \\approx 8.660]] cm, poiché l'altezza è il cateto lungo di un triangolo 30-60-90 con cateto corto di 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "Un triangolo equilatero con lato 2a diviso da un'altezza in due triangoli 30-60-90 congruenti, ciascuno con cateto corto a, cateto lungo a radice di 3 e ipotenusa 2a",
            "caption": "Un'altezza divide un triangolo equilatero in due triangoli 30-60-90 congruenti.",
          },
        },
        "sec-compare": {
          "h2": "Confrontare i Rapporti dei Lati dei Due Triangoli Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "I due rapporti sembrano simili a prima vista, ed è esattamente per questo che vengono confusi. Entrambi contengono una radice quadrata e un piccolo numero intero, ed entrambi descrivono un triangolo retto. Ma i numeri si trovano in posti diversi: in 1:1:√2 la radice appartiene all'ipotenusa, mentre in 1:√3:2 la radice appartiene al cateto lungo e l'ipotenusa è il numero intero 2.",
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
                "Cateti uguali",
                "Sì",
                "No",
              ],
              [
                "Lato più corto",
                "Entrambi i cateti",
                "Cateto corto",
              ],
              [
                "Lato più lungo",
                "Ipotenusa",
                "Ipotenusa",
              ],
              [
                "Formula dell'ipotenusa",
                "a√2",
                "2a",
              ],
              [
                "Formula del cateto lungo",
                "Non applicabile",
                "a√3",
              ],
              [
                "Tipo di triangolo",
                "Rettangolo isoscele",
                "Rettangolo scaleno",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Le formule non possono essere scambiate. Moltiplicare un cateto corto 30-60-90 per √2 dà un'ipotenusa sbagliata, e raddoppiare un cateto 45-45-90 dà un'ipotenusa sbagliata. I due triangoli derivano da costruzioni diverse, la diagonale di un quadrato per il 45-45-90 e l'altezza di un triangolo equilatero per il 30-60-90, quindi i loro rapporti rispondono a domande geometriche diverse.",
            },
            {
              "kind": "p",
              "text": "Un esempio numerico per ciascun tipo mostra la differenza. Un triangolo 45-45-90 con cateto di 5 cm ha ipotenusa [[5\\sqrt{2} \\approx 7.071]] cm. Un triangolo 30-60-90 con cateto corto di 5 cm ha ipotenusa di 10 cm e cateto lungo [[5\\sqrt{3} \\approx 8.660]] cm. Stesso numero di partenza, risposte molto diverse, e l'unico modo per distinguerli è lo schema degli angoli.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Confronto affiancato del rapporto 45-45-90 1:1:√2 e del rapporto 30-60-90 1:√3:2 alla stessa scala",
            "caption": "Entrambi i rapporti alla stessa scala: la radice si trova sull'ipotenusa per il 45-45-90, sul cateto lungo per il 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Come Usare il Calcolatore dell'Ipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La Modalità 1 è la modalità più usata in questa pagina, e richiede solo pochi secondi una volta confermato il tipo di triangolo. Segui i passaggi in ordine.",
            },
            {
              "kind": "steps",
              "steps": [
                "Conferma che il triangolo è 45-45-90: entrambi gli angoli acuti misurano 45°.",
                "Scegli uno dei due cateti uguali come lato noto, poiché entrambi i cateti hanno la stessa lunghezza.",
                "Seleziona la modalità ipotenusa 45-45-90 nel calcolatore.",
                "Inserisci la lunghezza del cateto come numero positivo.",
                "Scegli l'unità di misura coerente con il resto del problema.",
                "Fai clic su Calcola Ipotenusa c.",
                "Leggi il risultato, che è l'ipotenusa nella stessa unità di misura.",
                "Usa Reimposta prima di iniziare un nuovo calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "La modalità applica la formula seguente.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto di 7 cm, l'ipotenusa è [[c = 7\\sqrt{2} \\approx 9.899]] cm. La formula è valida solo quando entrambi gli angoli acuti sono di 45°, quindi controlla gli angoli prima di fidarti della risposta. Se gli angoli sono invece di 30° e 60°, passa a una modalità 30-60-90.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Come Trovare un Cateto dall'Ipotenusa 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La Modalità 2 funziona al contrario, dall'ipotenusa a un cateto. Divide per √2, che è il passaggio dimenticato più spesso. La formula è mostrata di seguito.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Lo stesso risultato può essere scritto in forma razionalizzata, che evita una radice al denominatore.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Per usare la modalità, conferma lo schema degli angoli 45-45-90, seleziona la modalità cateto 45-45-90, inserisci l'ipotenusa, scegli l'unità di misura e fai clic su Calcola. Con un'ipotenusa di 10 cm, il cateto è [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Entrambi i cateti hanno questa lunghezza, poiché i cateti sono uguali, quindi la singola risposta descrive l'intero triangolo. Un controllo rapido: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], che corrisponde al quadrato dell'ipotenusa.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Come Usare il Calcolatore del Cateto Lungo 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La Modalità 3 trova il cateto lungo dal cateto corto, e l'unica parte difficile è individuare correttamente il cateto corto. Il cateto corto è il lato opposto all'angolo di 30°, ed è sempre il lato più corto del triangolo.",
            },
            {
              "kind": "steps",
              "steps": [
                "Conferma che il triangolo è 30-60-90 dai suoi angoli.",
                "Trova il lato opposto all'angolo di 30°: quello è il cateto corto.",
                "Seleziona la modalità cateto lungo 30-60-90 nel calcolatore.",
                "Inserisci il cateto corto come numero positivo.",
                "Scegli l'unità di misura coerente con il resto del problema.",
                "Fai clic su Calcola Cateto Lungo.",
                "Leggi il risultato, che è il cateto lungo nella stessa unità di misura.",
              ],
            },
            {
              "kind": "p",
              "text": "La modalità applica la formula seguente.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto corto di 6 cm, il cateto lungo è [[b = 6\\sqrt{3} \\approx 10.392]] cm. Inserire per errore l'ipotenusa o il cateto lungo dà una risposta sbagliata, quindi etichetta prima i lati e inserisci solo il cateto corto.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Come Usare il Calcolatore dell'Ipotenusa 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "La Modalità 4 è la modalità più semplice della pagina, perché l'ipotenusa di un triangolo 30-60-90 è esattamente il doppio del cateto corto. Non è coinvolta alcuna radice quadrata, il che rende la risposta facile da controllare a mano.",
            },
            {
              "kind": "steps",
              "steps": [
                "Conferma che il triangolo è 30-60-90 dai suoi angoli.",
                "Individua il cateto corto, il lato opposto all'angolo di 30°.",
                "Seleziona la modalità ipotenusa 30-60-90 nel calcolatore.",
                "Inserisci il cateto corto come numero positivo.",
                "Scegli l'unità di misura coerente con il resto del problema.",
                "Fai clic su Calcola Ipotenusa c.",
                "Leggi il risultato, che è l'ipotenusa nella stessa unità di misura.",
              ],
            },
            {
              "kind": "p",
              "text": "La modalità applica la formula seguente.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Con un cateto corto di 8 cm, l'ipotenusa è [[c = 16]] cm. Il cateto lungo dello stesso triangolo è [[8\\sqrt{3} \\approx 13.856]] cm, che si trova tra il cateto corto e l'ipotenusa, come dovrebbe. Se un risultato risulta mai più piccolo del cateto corto, è stata selezionata la modalità sbagliata.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Esempi Passo Passo per Entrambi i Tipi di Triangolo Speciale",
          "blocks": [
            {
              "kind": "p",
              "text": "Questi due esempi svolti risolvono ogni lato di ciascun tipo di triangolo a partire da un solo lato noto. Area e perimetro compaiono qui come calcoli manuali aggiuntivi, non come modalità del calcolatore: il calcolatore in questa pagina trova solo le lunghezze dei lati.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dato un triangolo 45-45-90 con cateto [[a = 5]] cm, trova l'altro cateto, l'ipotenusa, l'area e il perimetro.",
            },
            {
              "kind": "p",
              "text": "I cateti sono uguali, quindi l'altro cateto è [[b = 5]] cm. L'ipotenusa segue dal rapporto.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "L'area è la metà del prodotto dei cateti.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Il perimetro è la somma di tutti e tre i lati.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Triangolo 30-60-90",
            },
            {
              "kind": "p",
              "text": "Dato un triangolo 30-60-90 con cateto corto [[a = 5]] cm, trova il cateto lungo, l'ipotenusa, l'area e il perimetro.",
            },
            {
              "kind": "p",
              "text": "Il cateto lungo è il cateto corto per √3, e l'ipotenusa è il doppio del cateto corto.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "L'area è la metà del prodotto dei cateti.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Il perimetro è la somma di tutti e tre i lati.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Entrambi gli esempi tornano con il teorema di Pitagora. Per il primo, [[5^2 + 5^2 = 50]] e [[7.071^2 \\approx 50]]. Per il secondo, [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Relazioni di Area e Perimetro nei Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Area e perimetro sono utili calcoli successivi una volta noti i lati, ma sono relazioni manuali, non funzioni del calcolatore in questa pagina. Le formule seguenti usano le stesse etichette dei lati del resto della guida, con [[a]] come cateto noto per il 45-45-90 e come cateto corto per il 30-60-90.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo 45-45-90, l'area è la metà del quadrato di un cateto, e il perimetro è il cateto per [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "Per un triangolo 30-60-90, l'area è la metà del prodotto dei cateti, e il perimetro è il cateto corto per [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Prendi un triangolo 45-45-90 con cateto di 6 cm. La sua area è [[A = \\frac{36}{2} = 18]] cm², e il suo perimetro è [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Prendi un triangolo 30-60-90 con cateto corto di 6 cm. La sua area è [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², e il suo perimetro è [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Tieni dritte le unità di misura: l'area è sempre in unità quadrate e il perimetro in unità lineari, quindi una risposta di 18 cm per un'area è un errore di unità, non un errore di arrotondamento.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Risposte Esatte con Radicali e Approssimazioni Decimali",
          "blocks": [
            {
              "kind": "p",
              "text": "Le radici quadrate in questa guida sono numeri irrazionali, il che significa che le loro espansioni decimali non finiscono mai e non si ripetono mai. I due valori da conoscere sono mostrati di seguito.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Una risposta esatta mantiene la radice al suo posto, come [[5\\sqrt{2}]], mentre una risposta decimale la sostituisce con un'approssimazione, come [[5\\sqrt{2} \\approx 7.071]]. Le risposte esatte sono preferite nella matematica scolastica perché non portano errori di arrotondamento e mostrano la struttura del problema. Un insegnante vede subito che [[5\\sqrt{2}]] deriva da un triangolo 45-45-90, mentre 7.071 potrebbe derivare da qualsiasi cosa.",
            },
            {
              "kind": "p",
              "text": "I decimali sono migliori per le misure pratiche, dove un righello o uno strumento di taglio richiede un numero, non un simbolo. Quando serve un decimale, arrotonda solo alla fine del calcolo, mai nel mezzo. Arrotondare √2 a 1.41 prima di moltiplicare per 5 dà 7.05, che è sbagliato di 0.021 rispetto al vero 7.071, e l'errore cresce con numeri più grandi. Etichetta ogni decimale con il segno di circa uguale, così un lettore non scambia mai [[5\\sqrt{3} \\approx 8.660]] per un'uguaglianza esatta.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Come Verificare i Calcoli dei Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni risposta sui triangoli speciali può essere controllata in meno di un minuto con tre test: il rapporto tra i lati, il teorema di Pitagora e la somma degli angoli. Esegui almeno due di essi prima di fidarti di un risultato.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo 45-45-90, controlla che i cateti siano uguali, [[a = b]], e che i lati soddisfino il teorema di Pitagora, [[a^2 + b^2 = c^2]]. Con [[a = 5]] cm e [[c = 7.071]] cm, il controllo è [[25 + 25 = 50]] contro [[7.071^2 \\approx 50]], che concorda.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo 30-60-90, controlla che il cateto lungo sia il cateto corto per √3, [[b = a\\sqrt{3}]], che l'ipotenusa sia il doppio del cateto corto, [[c = 2a]], e che [[a^2 + b^2 = c^2]]. Con [[a = 5]] cm, [[b = 8.660]] cm e [[c = 10]] cm, il controllo è [[25 + 75 = 100 = 10^2]], che concorda.",
            },
            {
              "kind": "p",
              "text": "Verifica anche la somma degli angoli: i tre angoli devono sommare a 180°. Un triangolo 45-45-90 dà [[45° + 45° + 90° = 180°]], e un triangolo 30-60-90 dà [[30° + 60° + 90° = 180°]]. Se il rapporto, il teorema e gli angoli concordano tutti, la risposta è solida. Se uno qualsiasi di essi fallisce, il tipo di triangolo è stato identificato male oppure è stata usata la formula sbagliata.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori Comuni nella Risoluzione dei Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici errori causano quasi ogni risposta sbagliata in questo argomento. Ciascuno è elencato di seguito con l'approccio corretto, così puoi individuare rapidamente il tuo errore.",
            },
            {
              "kind": "list",
              "items": [
                "Confondere il 45-45-90 con il 30-60-90. Controlla prima gli angoli: due angoli di 45° significano 45-45-90, mentre 30° e 60° significano 30-60-90.",
                "Usare √3 invece di √2. L'ipotenusa 45-45-90 è [[c = a\\sqrt{2}]], mai [[a\\sqrt{3}]].",
                "Usare √2 invece di √3. Il cateto lungo 30-60-90 è [[b = a\\sqrt{3}]], mai [[a\\sqrt{2}]].",
                "Supporre che entrambi i cateti siano uguali in un triangolo 30-60-90. Solo il triangolo 45-45-90 ha cateti uguali; nel 30-60-90 il cateto lungo è √3 volte il cateto corto.",
                "Supporre che il cateto corto e il cateto lungo siano uguali. Il cateto corto si trova opposto a 30° e il cateto lungo opposto a 60°, quindi differiscono di un fattore √3.",
                "Dimenticare che l'ipotenusa 30-60-90 è uguale al doppio del cateto corto. È [[c = 2a]], un raddoppio con numero intero senza radice quadrata.",
                "Usare il lato di input sbagliato. La Modalità 3 e la Modalità 4 richiedono entrambe il cateto corto, quindi inserire il cateto lungo o l'ipotenusa dà una risposta sbagliata.",
                "Confondere il cateto corto con l'ipotenusa. L'ipotenusa è il lato più lungo e si trova opposta all'angolo di 90°; il cateto corto è il lato più corto.",
                "Dimenticare di dividere per √2 quando si trova un cateto 45-45-90. Il cateto è [[a = \\frac{c}{\\sqrt{2}}]], non [[a = c\\sqrt{2}]], che renderebbe il cateto più lungo dell'ipotenusa.",
                "Dimenticare di moltiplicare per √3 quando si trova un cateto lungo 30-60-90. Il cateto lungo è [[b = a\\sqrt{3}]], e usare solo [[a]] restituisce il cateto corto.",
                "Arrotondare i radicali troppo presto. Mantieni [[\\sqrt{2}]] e [[\\sqrt{3}]] esatti in ogni passaggio e arrotonda solo la risposta finale.",
                "Mescolare le unità di misura. Un cateto in cm e un'ipotenusa in mm non possono condividere una formula; converti prima, poi calcola.",
                "Confondere area e perimetro. L'area usa unità quadrate e la formula [[A = \\frac{a^2}{2}]] per il 45-45-90, mentre il perimetro usa unità lineari e [[P = a(2 + \\sqrt{2})]].",
                "Applicare le formule dei triangoli speciali a triangoli retti qualsiasi. I rapporti 1:1:√2 e 1:√3:2 funzionano solo per i loro schemi di angoli; un triangolo 20-70-90 richiede invece la trigonometria.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni Pratiche dei Triangoli Retti Speciali",
          "blocks": [
            {
              "kind": "p",
              "text": "I triangoli retti speciali compaiono ovunque si trovino quadrati, triangoli equilateri e angoli standard. La diagonale di un quadrato è un problema 45-45-90: un piano di tavolo quadrato con un lato di 60 cm ha una diagonale di [[60\\sqrt{2} \\approx 84.853]] cm. L'altezza di un triangolo equilatero è un problema 30-60-90: un cartello triangolare con un lato di 40 cm ha un'altezza di [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "A scuola, questi triangoli rendono più veloci i compiti di geometria e gli esercizi di trigonometria, perché angoli standard come 30°, 45° e 60° hanno valori esatti di seno e coseno che derivano direttamente da questi rapporti. Nel disegno tecnico e nel disegno con angoli standard, le squadre 45° e 30-60 sono costruite esattamente su questi triangoli, quindi un disegnatore può tracciare una linea a 45° o a 30° conoscendo in anticipo le proporzioni dei lati.",
            },
            {
              "kind": "p",
              "text": "I concetti di architettura e design usano gli stessi schemi per controventi diagonali, pendenze dei tetti e schemi di piastrelle, e la geometria in cantiere li usa per rapidi controlli sul posto, come confermare che un angolo è quadrato misurando una diagonale in stile 3-4-5 o una diagonale 45-45-90. Anche la modellazione matematica e le dimostrazioni in classe li usano, poiché le risposte esatte con radicali mantengono visibile il ragionamento invece di nasconderlo dentro un calcolatore. Considerale scorciatoie geometriche per pianificare e controllare, non un sostituto per una corretta misurazione ingegneristica dove è richiesta precisione.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di Esercitazione con Risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Risolvi ogni problema da solo, poi controlla la soluzione. Le domande su area e perimetro sono esercizi manuali, non modalità del calcolatore. Usa numeri diversi dagli esempi principali, così gli schemi devono essere applicati da zero.",
            },
            {
              "kind": "h3",
              "text": "Problemi 45-45-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triangolo 45-45-90 ha un cateto di 7 cm. Trova l'ipotenusa. Soluzione: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "Un triangolo 45-45-90 ha un'ipotenusa di 12 cm. Trova un cateto. Soluzione: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "Un triangolo 45-45-90 ha un cateto di 9 cm. Trova l'area. Soluzione: [[A = \\frac{81}{2} = 40.5]] cm².",
                "Un triangolo 45-45-90 ha un cateto di 4 cm. Trova il perimetro. Soluzione: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "Problemi 30-60-90",
            },
            {
              "kind": "steps",
              "steps": [
                "Un triangolo 30-60-90 ha un cateto corto di 7 cm. Trova il cateto lungo. Soluzione: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "Un triangolo 30-60-90 ha un cateto corto di 9 cm. Trova l'ipotenusa. Soluzione: [[c = 2 \\times 9 = 18]] cm.",
                "Un triangolo 30-60-90 ha un cateto corto di 6 cm. Trova l'area. Soluzione: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "Un triangolo 30-60-90 ha un cateto corto di 10 cm. Trova il perimetro. Soluzione: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calcolatori Correlati di Triangoli Retti",
      "relatedIntro": "Ogni strumento seguente risolve un diverso tipo di problema sui triangoli retti. Scegli quello che corrisponde alle informazioni che hai già.",
      "relatedItems": [
        "Calcolatore del Triangolo 45-45-90",
        "Calcolatore del Triangolo 30-60-90",
        "Calcolatore dei Lati del Triangolo Retto",
        "Calcolatore dei Rapporti Trigonometrici",
        "Calcolatore degli Angoli del Triangolo Retto",
        "Calcolatore del Teorema di Pitagora",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "question": "Cos'è un triangolo retto speciale?",
          "answer": "Un triangolo retto speciale è un triangolo retto i cui angoli fissano il rapporto tra i lati, quindi un solo lato noto determina tutti gli altri lati. I due tipi sono il triangolo 45-45-90, con rapporto [[1 : 1 : \\sqrt{2}]], e il triangolo 30-60-90, con rapporto [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Quali triangoli retti speciali copre questo calcolatore?",
          "answer": "Questo calcolatore copre il triangolo 45-45-90 e il triangolo 30-60-90, i due triangoli retti speciali usati nella geometria scolastica. Ha quattro modalità: ipotenusa 45-45-90 da un cateto, cateto 45-45-90 da un'ipotenusa, cateto lungo 30-60-90 da un cateto corto e ipotenusa 30-60-90 da un cateto corto.",
        },
        {
          "question": "Qual è il rapporto tra i lati di un triangolo 45-45-90?",
          "answer": "Il rapporto tra i lati di un triangolo 45-45-90 è [[1 : 1 : \\sqrt{2}]]. I due cateti sono uguali, e l'ipotenusa è il cateto per √2, circa 1.414. Con un cateto di 5 cm, l'ipotenusa è [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Qual è il rapporto tra i lati di un triangolo 30-60-90?",
          "answer": "Il rapporto tra i lati di un triangolo 30-60-90 è [[1 : \\sqrt{3} : 2]]. Il cateto corto si trova opposto a 30°, il cateto lungo opposto a 60° e l'ipotenusa opposta a 90°. Con un cateto corto di 5 cm, il cateto lungo è [[5\\sqrt{3} \\approx 8.660]] cm e l'ipotenusa è di 10 cm.",
        },
        {
          "question": "Perché √2 compare in un triangolo 45-45-90?",
          "answer": "La √2 deriva dal teorema di Pitagora applicato a due cateti uguali. Con [[a = b]], il teorema dà [[a^2 + a^2 = c^2]], quindi [[2a^2 = c^2]] e [[c = a\\sqrt{2}]]. La radice è il prezzo da pagare per trasformare due quadrati uguali in un unico quadrato dell'ipotenusa.",
        },
        {
          "question": "Perché √3 compare in un triangolo 30-60-90?",
          "answer": "La √3 deriva dalla divisione a metà di un triangolo equilatero. Un'altezza divide un triangolo equilatero di lato [[2a]] in due triangoli 30-60-90, e il teorema di Pitagora su una metà dà [[b^2 = 3a^2]], quindi il cateto lungo è [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Come trovo l'ipotenusa di un triangolo 45-45-90?",
          "answer": "Moltiplica uno dei due cateti uguali per √2. La formula è [[c = a\\sqrt{2}]]. Per esempio, un cateto di 7 cm dà un'ipotenusa di [[7\\sqrt{2} \\approx 9.899]] cm. Seleziona la modalità ipotenusa 45-45-90, inserisci il cateto e fai clic su Calcola.",
        },
        {
          "question": "Come trovo il cateto lungo di un triangolo 30-60-90?",
          "answer": "Moltiplica il cateto corto per √3. La formula è [[b = a\\sqrt{3}]]. Per esempio, un cateto corto di 6 cm dà un cateto lungo di [[6\\sqrt{3} \\approx 10.392]] cm. Assicurati di inserire il cateto corto, il lato opposto all'angolo di 30°, non l'ipotenusa.",
        },
        {
          "question": "Posso calcolare il cateto mancante dall'ipotenusa?",
          "answer": "Sì, per un triangolo 45-45-90. Dividi l'ipotenusa per √2, usando [[a = \\frac{c}{\\sqrt{2}}]] oppure la forma razionalizzata [[a = \\frac{c\\sqrt{2}}{2}]]. Un'ipotenusa di 10 cm dà un cateto di [[5\\sqrt{2} \\approx 7.071]] cm, ed entrambi i cateti condividono quella lunghezza.",
        },
        {
          "question": "Tutti i triangoli retti speciali sono simili all'interno del proprio tipo?",
          "answer": "Sì. Ogni triangolo 45-45-90 ha gli stessi angoli e lo stesso rapporto 1:1:√2, quindi due qualsiasi sono simili. Ogni triangolo 30-60-90 condivide allo stesso modo il rapporto 1:√3:2. Un triangolo 45-45-90 non è mai simile a un triangolo 30-60-90, perché i loro angoli differiscono.",
        },
        {
          "question": "Qual è la differenza tra i due tipi di triangolo speciale?",
          "answer": "Un triangolo 45-45-90 ha due cateti uguali e il rapporto 1:1:√2, mentre un triangolo 30-60-90 ha tre lati diversi e il rapporto 1:√3:2. Il primo deriva dalla diagonale di un quadrato, il secondo dall'altezza di un triangolo equilatero, e le loro formule non possono essere scambiate.",
        },
        {
          "question": "Come posso verificare le lunghezze dei lati calcolate?",
          "answer": "Controlla il rapporto tra i lati, il teorema di Pitagora e la somma degli angoli. Per il 45-45-90, conferma [[a = b]] e [[a^2 + b^2 = c^2]]. Per il 30-60-90, conferma [[b = a\\sqrt{3}]], [[c = 2a]] e [[a^2 + b^2 = c^2]]. Se tutti e tre i controlli concordano, la risposta è solida.",
        },
      ],
    },
};
