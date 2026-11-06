// projectionQGuideTranslations.bit.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B2_IT = {
  "it": {
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "answer": "La formula è [[q = \\frac{b^2}{c}]], dove b è il cateto associato a q e c è l'ipotenusa completa. Eleva al quadrato prima il cateto b, poi dividi per c. Per esempio, [[b = 8]] cm e [[c = 10]] cm danno [[q = 6.4]] cm.",
          "question": "Qual è la formula della proiezione q?",
        },
        {
          "answer": "La proiezione q è il segmento dell'ipotenusa accanto al vertice B, creato quando l'altezza tracciata dall'angolo retto incontra l'ipotenusa nel punto D. Nel triangolo ABC, [[q = DB]], la parte dell'ipotenusa associata al cateto b.",
          "question": "Che cosa rappresenta la proiezione q?",
        },
        {
          "answer": "Il quadrato deriva dai triangoli simili: il triangolo CBD è simile al triangolo ABC, quindi [[\\frac{q}{b} = \\frac{b}{c}]] e il cateto b compare in entrambi i rapporti. Moltiplicando in croce si ottiene [[b^2 = c \\times q]], perciò il quadrato è insito nella geometria.",
          "question": "Perché il cateto b è elevato al quadrato?",
        },
        {
          "answer": "La divisione isola q. Il teorema delle proiezioni afferma che [[b^2 = c \\times q]], dove q è moltiplicata per c, quindi dividendo entrambi i membri per c si lascia q da sola. La divisione trasforma inoltre la lunghezza al quadrato in una lunghezza ordinaria.",
          "question": "Perché si divide per l'ipotenusa?",
        },
        {
          "answer": "No. Il cateto b è il lato BC, uno dei lati che formano l'angolo retto, mentre la proiezione q è il segmento DB lungo l'ipotenusa. Nel triangolo 6-8-10, il cateto b misura 8 cm e la proiezione q solo 6.4 cm.",
          "question": "La proiezione q è uguale al cateto b?",
        },
        {
          "answer": "La proiezione q si trova accanto al vertice B e si abbina al cateto b, mentre la proiezione p si trova accanto al vertice A e si abbina al cateto a. Sono i due segmenti che l'altezza crea sull'ipotenusa: [[p + q = c]].",
          "question": "Perché q è associata al cateto b e non al cateto a?",
        },
        {
          "answer": "La proiezione p si trova accanto al vertice A e si abbina al cateto a, mentre la proiezione q si trova accanto al vertice B e si abbina al cateto b. Sono i due segmenti che l'altezza crea sull'ipotenusa: [[p + q = c]]. Nel triangolo 6-8-10, p è 3.6 cm e q è 6.4 cm, quindi q è il segmento più lungo.",
          "question": "Qual è la differenza tra la proiezione p e la proiezione q?",
        },
        {
          "answer": "Sì. Sottrai q dall'ipotenusa: [[p = c - q]]. Con [[c = 10]] cm e [[q = 6.4]] cm, [[p = 3.6]] cm. Puoi anche trovare p direttamente dal cateto a con [[p = \\frac{a^2}{c}]].",
          "question": "Posso calcolare la proiezione p se conosco già q?",
        },
        {
          "answer": "No. La proiezione q è solo una parte dell'ipotenusa, quindi deve essere minore di c. Se q fosse uguale a c, p sarebbe zero e il triangolo sarebbe degenere. Un risultato maggiore di c segnala sempre un errore nei dati o nelle etichette.",
          "question": "La proiezione q può essere maggiore dell'ipotenusa?",
        },
        {
          "answer": "Ti servono anche p oppure c. Trova p con [[p = c - q]], poi usa [[h = \\sqrt{p \\times q}]]. Con [[q = 6.4]] cm e [[c = 10]] cm, [[p = 3.6]] cm e [[h = 4.8]] cm. La sola proiezione q non può determinare l'altezza.",
          "question": "Come trovo l'altezza quando q è nota?",
        },
        {
          "answer": "Ricalcola [[q = \\frac{b^2}{c}]], poi controlla [[p + q = c]] dopo aver trovato p per sottrazione, e conferma che q sia positiva e minore di c. Puoi anche trovare il cateto a da p e controllare [[a^2 + b^2 = c^2]].",
          "question": "Come posso verificare un calcolo della proiezione q?",
        },
        {
          "answer": "L'altezza cade nel punto medio dell'ipotenusa e i due cateti sono uguali, quindi il triangolo è isoscele. Con [[c = 10]] cm e [[p = q = 5]] cm, entrambi i cateti valgono [[\\sqrt{50}]] cm, circa 7.071 cm.",
          "question": "Che cosa succede quando p e q sono uguali?",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per triangoli rettangoli",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un compito specifico sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alle misure che conosci già.",
      "relatedItems": [
        "Calcolatore della proiezione del triangolo rettangolo",
        "Calcolatore della proiezione P del triangolo rettangolo",
        "Calcolatore del cateto B dalla proiezione del triangolo rettangolo",
        "Calcolatore dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        "Calcolatore dell'altezza dalle proiezioni del triangolo rettangolo",
        "Calcolatore dei lati del triangolo rettangolo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[q = \\frac{b^2}{c}]] invece di ricorrere per abitudine al teorema di Pitagora. Gli esercizi sui triangoli simili usano la stessa configurazione, poiché la dimostrazione stessa è un esercizio sull'abbinamento dei lati corrispondenti.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa il teorema quando un triangolo rettangolo deve essere ricostruito da misure parziali: se un disegno fornisce l'ipotenusa e il piede dell'altezza, la proiezione mancante si ricava senza rimisurare la figura. Gli insegnanti usano inoltre questa configurazione come lezione di collegamento tra l'addizione di segmenti e la similitudine.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: la geometria del triangolo rettangolo richiesta deve esistere davvero. Il teorema descrive relazioni geometriche esatte, non misure approssimative sul campo, quindi non sostituisce mai un rilievo accurato o una misurazione ingegneristica professionale.",
            },
          ],
          "h2": "Applicazioni pratiche dei calcoli della proiezione del triangolo rettangolo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore ha due campi di input. Il primo accetta il cateto b, il lato perpendicolare associato alla proiezione q. Il secondo accetta l'ipotenusa c, il lato completo opposto all'angolo retto. Entrambe le lunghezze devono usare la stessa unità, quindi converti prima se una misura è in centimetri e l'altra in metri.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa deve essere più lunga del cateto b, poiché un cateto è un lato dell'angolo retto mentre l'ipotenusa attraversa l'intero triangolo. Se il valore di b è maggiore di c, probabilmente hai inserito una proiezione, l'altezza o il lato sbagliato.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola proiezione q per vedere il risultato e usa Reimposta per cancellare entrambi i campi prima di un nuovo problema. Il risultato è una lunghezza nell'unità inserita, quindi un cateto di 8 cm e un'ipotenusa di 10 cm danno 6.4 cm. Il risultato è una lunghezza di segmento lungo l'ipotenusa.",
            },
          ],
          "h2": "Calcolare la proiezione Q del triangolo rettangolo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolare ad AB e la tocca in D.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa in due parti: il segmento AD è la proiezione p e il segmento DB è la proiezione q. Il cateto b e la proiezione q sono evidenziati perché sono la coppia di cui tratta questa pagina. Segui le etichette in quest'ordine: parti da B, percorri il cateto b fino a C, poi il cateto a fino ad A, poi torna lungo l'ipotenusa da A a B, fermandoti in D per vedere la divisione in p e q.",
            },
            {
              "kind": "p",
              "text": "L'abbinamento di b con q diventa visibile nel piccolo triangolo CBD, dove il cateto b è l'ipotenusa e q è il lato che giace lungo la grande ipotenusa. Poiché il triangolo CBD è simile al triangolo ABC, il rapporto tra q e b nel triangolo piccolo è uguale al rapporto tra b e c in quello grande.",
            },
          ],
          "h2": "Diagramma della proiezione Q del triangolo rettangolo spiegato",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD sull'ipotenusa AB, cateto b e proiezione q evidenziati, con i cateti a e b, l'ipotenusa c, le proiezioni p e q e l'altezza h etichettati",
            "caption": "L'altezza CD divide l'ipotenusa AB nella proiezione p (AD) e nella proiezione q (DB), con il cateto b (BC) evidenziato.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio indica i valori dati, la sostituzione e la risposta finale, e ogni esempio mantiene le unità coerenti dall'inizio alla fine.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Numeri interi semplici",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 8]] cm e [[c = 10]] cm, la formula dà [[q = \\frac{8^2}{10} = \\frac{64}{10}]], quindi [[q = 6.4]] cm. Il cateto al quadrato, 64, è un valore intermedio, e dividendo per l'ipotenusa torna a essere una lunghezza. L'altro cateto di questo triangolo misura 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Divisione con quadrato perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 12]] cm e [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. Il cateto al quadrato si divide esattamente, quindi la risposta è esatta. L'altra proiezione qui è 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Risultato decimale",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 7]] cm e [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un risultato decimale è normale: la proiezione non deve essere un numero intero anche quando entrambi i dati lo sono. L'altra proiezione è 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Misure più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 15]] m e [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Numeri più grandi non cambiano nulla nel metodo: eleva al quadrato, poi dividi. L'altra proiezione è 16 m, che si abbina a un cateto di 20 m.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure piccole",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 30]] mm e [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Le misure piccole funzionano allo stesso modo, e mantenere l'unità in millimetri per tutto il calcolo evita qualsiasi conversione. L'altra proiezione è 32 mm, che si abbina a un cateto di 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[b = \\frac{3}{4}]] ft e [[c = \\frac{3}{2}]] ft, eleva al quadrato prima il cateto: [[b^2 = \\frac{9}{16}]] piedi quadrati. Poi [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividere per una frazione significa moltiplicare per il suo reciproco, ed è il passaggio che la maggior parte degli studenti sbaglia con le misure frazionarie.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 80]] cm e [[c = 1]] m, converti prima: 1 m equivale a 100 cm. Poi [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Usare 1 invece di 100 avrebbe dato 6400 cm, una proiezione molto più lunga dell'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Valori decimali più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 4.5]] m e [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. I dati decimali richiedono la stessa cura dei numeri interi: eleva al quadrato l'intero decimale, poi dividi. L'altra proiezione è 4.8 m, che si abbina a un cateto di 6 m.",
            },
          ],
          "h2": "Esempi svolti di calcolo della proiezione Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema delle proiezioni afferma che il quadrato del cateto b è uguale all'ipotenusa moltiplicata per la sua proiezione:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividendo entrambi i membri per c si isola q e si ottiene la formula operativa di questa pagina:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Il calcolo procede in due fasi. La fase 1 eleva al quadrato il cateto b, moltiplicandolo per se stesso. La fase 2 divide quella lunghezza al quadrato per l'ipotenusa completa c, e il risultato è una lunghezza ordinaria, non una lunghezza al quadrato.",
            },
            {
              "kind": "p",
              "text": "Le unità richiedono attenzione in entrambe le fasi. Se b e c sono entrambi in centimetri, allora [[b^2]] è in centimetri quadrati, e dividendo per centimetri si ottengono centimetri. Mescolare le unità, per esempio metri per b e centimetri per c, dà un quoziente senza senso, quindi converti in un'unica unità prima di calcolare.",
            },
            {
              "kind": "p",
              "text": "Con [[b = 8]] cm e [[c = 10]] cm, la fase 1 dà [[8^2 = 64]] e la fase 2 dà [[q = \\frac{64}{10} = 6.4]] cm. Il numero 64 da solo non risponde a nessuna domanda: solo dopo la divisione diventa la lunghezza della proiezione.",
            },
          ],
          "h2": "Formula della proiezione Q del triangolo rettangolo",
          "image": {
            "alt": "Triangolo rettangolo ABC con altezza CD, che mostra che la proiezione q è uguale al cateto b al quadrato diviso per l'ipotenusa c",
            "caption": "La formula della proiezione: q è uguale a b al quadrato diviso per c, con il piede D dell'altezza che divide l'ipotenusa.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Undici brevi passaggi ti portano da un diagramma etichettato a una risposta verificata.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica il triangolo rettangolo del tuo problema e conferma che ha un angolo retto.",
                "Individua il vertice dell'angolo retto e l'altezza tracciata da esso all'ipotenusa.",
                "Identifica il cateto perpendicolare associato alla proiezione q, il cateto che tocca il vertice B.",
                "Identifica l'ipotenusa completa c, il lato opposto all'angolo retto.",
                "Conferma che c è maggiore di b. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Scegli unità compatibili e converti se le misure usano unità diverse.",
                "Inserisci il cateto b nel campo Cateto b.",
                "Inserisci l'ipotenusa c nel campo Ipotenusa c.",
                "Fai clic su Calcola proiezione q e leggi il risultato.",
                "Controlla il risultato: q deve essere positiva e minore di c.",
                "Usa Reimposta quando inizi un nuovo calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Inserire il cateto a invece del cateto b produce una proiezione diversa. Il cateto a si abbina a p, quindi il calcolatore restituirebbe il segmento accanto al vertice A, non quello accanto a B. Il controllo delle etichette del passaggio 3 è il più importante.",
            },
          ],
          "h2": "Come usare il calcolatore della proiezione Q del triangolo rettangolo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questo calcolatore trova la proiezione q di un triangolo rettangolo quando conosci il cateto b e l'ipotenusa completa c. La proiezione q è il segmento dell'ipotenusa che si trova accanto al cateto b, creato quando l'altezza tracciata dall'angolo retto incontra l'ipotenusa. La formula è [[q = \\frac{b^2}{c}]], dove b è il cateto perpendicolare e c è l'ipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Per esempio, con [[b = 8]] cm e [[c = 10]] cm, il calcolo è [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Il valore 6.4 cm è la parte dell'ipotenusa associata al cateto b, non il cateto stesso e non l'intera ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore si trova in cima a questa pagina, seguito dalla formula, da un diagramma etichettato, da una dimostrazione, da esempi svolti e da controlli che puoi eseguire su qualsiasi risposta.",
            },
          ],
          "h2": "Calcolatore della proiezione Q del triangolo rettangolo",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due lati perpendicolari, detti cateti, e un lato più lungo, detto ipotenusa. I due cateti si incontrano nell'angolo retto e l'ipotenusa si trova di fronte a quell'angolo. Qui il triangolo è ABC con l'angolo retto in C: il cateto a è AC, il cateto b è BC e l'ipotenusa c è AB.",
            },
            {
              "kind": "p",
              "text": "Il cateto b è uno dei due lati che formano l'angolo retto, quindi è un vero lato del triangolo, non un segmento tracciato al suo interno. La proiezione q giace distesa lungo l'ipotenusa, mentre il cateto b va dal vertice B al vertice dell'angolo retto C.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è sempre il lato più lungo in un triangolo rettangolo non degenere, poiché si trova di fronte all'angolo maggiore, l'angolo retto. Per questo la formula richiede [[0 < b < c]] e il calcolatore si aspetta un'ipotenusa più lunga del cateto.",
            },
            {
              "kind": "p",
              "text": "La posizione del cateto b decide quale segmento si chiama q: il cateto b tocca il vertice B, quindi il segmento accanto a B è q. Controlla sempre le etichette del tuo diagramma prima di scegliere quale cateto inserire.",
            },
          ],
          "h2": "Capire il cateto B e l'ipotenusa",
          "table": {
            "headers": [
              "Simbolo",
              "Significato",
            ],
            "rows": [
              [
                "a",
                "L'altro cateto perpendicolare",
              ],
              [
                "b",
                "Cateto associato a q",
              ],
              [
                "c",
                "Ipotenusa completa",
              ],
              [
                "p",
                "Proiezione associata ad a",
              ],
              [
                "q",
                "Proiezione associata a b",
              ],
              [
                "h",
                "Altezza sull'ipotenusa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione. La maggior parte dipende dalle etichette, non dall'aritmetica.",
            },
            {
              "kind": "steps",
              "steps": [
                "Usare il cateto a invece del cateto b: inserendo a si ottiene p. Con a = 6 e c = 10, il risultato 3.6 cm è p, non q.",
                "Dimenticare di elevare al quadrato il cateto b: dividere b per c invece di b al quadrato per c dà 0.8 cm invece di 6.4 cm.",
                "Dividere c per b al quadrato invece di b al quadrato per c: il quoziente deve essere [[b^2/c]], non [[c/b^2]]. Con b = 8 e c = 10, l'ordine sbagliato dà circa 0.156, che non ha un'unità valida.",
                "Confondere la proiezione p con la proiezione q: q si trova accanto al vertice B e p accanto al vertice A. Etichetta entrambi i segmenti prima di calcolare.",
                "Trattare q come il vero cateto perpendicolare: q è un segmento dell'ipotenusa, non il lato BC. Nel triangolo 6-8-10, il cateto b misura 8 cm mentre q è solo 6.4 cm.",
                "Inserire un valore del cateto maggiore o uguale a c: un triangolo del genere non esiste, poiché l'ipotenusa è il lato più lungo.",
                "Mescolare centimetri e metri: converti prima, come nell'Esempio 7, dove 1 m è diventato 100 cm.",
                "Dimenticare che c rappresenta l'ipotenusa completa: usare una proiezione o un cateto come denominatore distorce il risultato.",
                "Arrotondare troppo presto i calcoli intermedi: arrotondare il cateto al quadrato prima di dividere sposta la risposta.",
                "Confondere b con b al quadrato: 64 nell'esempio 6-8-10 è una lunghezza al quadrato, mentre 6.4 cm è la proiezione.",
                "Applicare la formula a un triangolo che non è rettangolo: il teorema delle proiezioni richiede l'altezza tracciata da un angolo retto.",
                "Trattare q come l'intera ipotenusa: q più p è uguale a c, quindi un risultato pari o superiore a c segnala un errore.",
              ],
            },
            {
              "kind": "p",
              "text": "Se una risposta sembra sbagliata, fermati e rietichetta il diagramma prima di ricalcolare. La maggior parte degli errori qui sopra sparisce una volta che p e q sono chiaramente segnati sull'ipotenusa.",
            },
          ],
          "h2": "Errori comuni nel calcolo della proiezione Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessun valore ripete gli esempi svolti.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Numeri interi semplici",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha il cateto [[b = 9]] cm e l'ipotenusa [[c = 15]] cm. Trova la proiezione q.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valori decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 1.5]] m e [[c = 2.5]] m, trova la proiezione q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[b = \\frac{5}{6}]] ft e [[c = \\frac{5}{3}]] ft, trova q come frazione.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un cateto misura [[b = 80]] cm e l'ipotenusa misura [[c = 2]] m. Trova q in centimetri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova p dopo aver calcolato q",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha l'ipotenusa [[c = 25]] cm e il cateto [[b = 15]] cm. Trova q, poi p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Più passaggi con la proiezione q e l'altezza h",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[b = 15]] cm, trova q, poi p, poi l'altezza h.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[b^2 = \\frac{25}{36}]], quindi [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: Converti 2 m in 200 cm, poi [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, poi [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[q = 9]] cm e [[p = 16]] cm, quindi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemi di pratica con risposte",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione si basa sui triangoli simili. Tracciando l'altezza CD si divide il triangolo ABC in due triangoli rettangoli più piccoli, ACD e CBD, ed entrambi sono simili al triangolo originale. Uno dei loro rapporti tra lati dà direttamente il teorema delle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Concentrati sul triangolo CBD e sull'intero triangolo ABC. Entrambi contengono l'angolo in B ed entrambi contengono un angolo retto, quindi anche i loro terzi angoli devono coincidere. Abbinando i lati che occupano le stesse posizioni si ottiene la proporzione:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ora sostituisci i simboli standard: [[DB = q]], [[BC = b]] e [[AB = c]]. La proporzione diventa:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplicando in croce si eliminano le frazioni. Il numeratore di sinistra per il denominatore di destra è uguale al numeratore di destra per il denominatore di sinistra, quindi [[q \\times c = b \\times b]], cioè:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividendo entrambi i membri per c si completa la dimostrazione, ottenendo [[q = \\frac{b^2}{c}]]. Lo stesso ragionamento applicato all'altro triangolo piccolo, ACD, dà [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Perché funziona la formula della proiezione Q?",
          "image": {
            "alt": "Il triangolo rettangolo originale ABC accanto ai triangoli simili più piccoli ACD e CBD, che mostrano la proporzione q su b uguale a b su c",
            "caption": "Dimostrazione con i triangoli simili: q su b è uguale a b su c, quindi moltiplicando in croce si ottiene b al quadrato uguale a c per q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove proprietà derivano direttamente da [[q = \\frac{b^2}{c}]]. Ognuna serve anche come controllo di plausibilità per una nuova risposta.",
            },
            {
              "items": [
                "La proiezione q è sempre più corta dell'ipotenusa completa in un triangolo non degenere, poiché q è solo una parte di c.",
                "Aumentare il cateto b mantenendo c fisso aumenta q, perché il cateto al quadrato al numeratore cresce.",
                "Aumentare c mantenendo b fisso diminuisce q, perché il denominatore cresce.",
                "Se b e c sono entrambi moltiplicati per lo stesso fattore positivo, q scala di quel fattore.",
                "Se p è uguale a q, entrambi i cateti perpendicolari sono uguali e il triangolo è un triangolo rettangolo isoscele.",
                "La proiezione q è sempre positiva in un triangolo valido non degenere. Valori zero o negativi non descrivono nessun triangolo reale.",
                "La proiezione q è una lunghezza, non un'area. Il cateto al quadrato è solo un passaggio intermedio, e dividendo per c si ripristinano le unità di lunghezza ordinarie.",
                "La proiezione q è associata specificamente al cateto b. Usarla con il cateto a risponde a una domanda completamente diversa.",
                "Scambiare p e q cambia quale cateto è associato a ciascuna proiezione, quindi le etichette devono restare abbinate ai loro vertici.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando l'altezza cade nel punto medio dell'ipotenusa, i due cateti devono coincidere, come mostra il diagramma qui sotto.",
            },
          ],
          "h2": "Proprietà importanti della proiezione Q",
          "image": {
            "alt": "Due triangoli rettangoli affiancati, uno con proiezioni uguali p e q pari a 5 e uno con proiezioni diverse p uguale a 3.6 e q uguale a 6.4",
            "caption": "Proiezioni uguali (p = q = 5) danno cateti uguali, mentre proiezioni diverse (p = 3.6, q = 6.4) danno cateti diversi.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alcuni problemi chiedono invece l'altra proiezione. La formula corrispondente è l'immagine speculare della formula per q, con il cateto a al posto del cateto b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm e [[c = 10]] cm. Allora [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Corrisponde all'altra proiezione del triangolo 6-8-10 degli esempi precedenti, dove q era 6.4 cm e le due proiezioni sommate danno 10 cm.",
            },
            {
              "kind": "p",
              "text": "La formula usa a invece di b perché ogni cateto si abbina alla proiezione accanto al proprio vertice. Il cateto a tocca il vertice A e p è il segmento accanto ad A. Inserire b in questa formula restituirebbe q, non p. Il calcolatore di questa pagina accetta solo b e c, quindi usa il <a href=\"/right-triangle-projection-p-calculator/\">calcolatore della proiezione p</a> quando devi trovare p da a e c.",
            },
          ],
          "h2": "Come calcolare la proiezione P dall'altro cateto",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema delle proiezioni e il teorema di Pitagora concordano esattamente, e l'algebra mostra perché. Parti dalle due formule delle proiezioni, [[a^2 = c \\times p]] e [[b^2 = c \\times q]], e sommale:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo c a fattore comune nel secondo membro si ottiene [[a^2 + b^2 = c(p + q)]]. Poiché [[p + q = c]], la sostituzione dà il risultato familiare:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Una verifica numerica con il triangolo 6-8-10 lo conferma: [[a^2 + b^2 = 36 + 64 = 100]] e [[c^2 = 10^2 = 100]]. Il teorema delle proiezioni divide la relazione pitagorica in un pezzo per cateto, e sommando i pezzi la si ricostruisce.",
            },
            {
              "kind": "p",
              "text": "Questa divisione è ciò che rende utili le formule delle proiezioni: il solo teorema di Pitagora non può trovare una proiezione da un cateto e un'ipotenusa, perché parla dei cateti insieme.",
            },
          ],
          "h2": "Relazione tra la proiezione Q e il teorema di Pitagora",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proiezione q si collega all'altezza anche attraverso una seconda relazione di media geometrica. L'altezza h è la media geometrica delle due proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[p = c - q]], l'altezza può anche essere scritta usando solo q e c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[q = 6.4]] cm e [[c = 10]] cm. Trova prima p: [[p = 10 - 6.4 = 3.6]] cm. Poi [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. L'altezza è più corta di entrambi i cateti, come deve essere.",
            },
            {
              "kind": "p",
              "text": "La sola proiezione q non determina l'altezza: due triangoli diversi possono condividere la stessa q con ipotenuse diverse. Servono sempre anche l'ipotenusa completa, o l'altra proiezione. Il <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatore dell'altezza dalle proiezioni</a> gestisce quel calcolo quando entrambe le proiezioni sono note.",
            },
          ],
          "h2": "Relazione tra la proiezione Q e l'altezza",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formula della proiezione può essere riordinata per trovare il cateto b invece di q. Partendo da [[b^2 = c \\times q]], prendi la radice quadrata positiva di entrambi i membri:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Verificala con i numeri familiari: [[b = 8]] cm, [[c = 10]] cm e [[q = 6.4]] cm. Il prodotto sotto radice è [[c \\times q = 10 \\times 6.4 = 64]] e [[\\sqrt{64} = 8]] cm, che è il cateto da cui siamo partiti.",
            },
            {
              "kind": "p",
              "text": "Il collegamento è la relazione di media geometrica: il cateto b è la media geometrica dell'ipotenusa e della sua proiezione. Per questo il cateto compare al quadrato nel teorema e la radice quadrata compare quando si risolve per il cateto. Per i problemi che partono da q e c, il <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calcolatore del cateto b dalla proiezione</a> esegue direttamente questa formula riordinata.",
            },
          ],
          "h2": "Relazione tra la proiezione Q e il cateto B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le due proiezioni sono le due parti di un unico lato rettilineo, quindi sommate danno l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Riordinando si ottiene [[p = c - q]]. Con [[c = 10]] cm e [[q = 6.4]] cm, la sottrazione è [[p = 10 - 6.4 = 3.6]] cm. La stessa sottrazione funziona al contrario: [[q = c - p]]. Il <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calcolatore dell'ipotenusa dalle proiezioni</a> ricostruisce c da p e q quando l'ipotenusa stessa è sconosciuta.",
            },
            {
              "kind": "p",
              "text": "Confrontare p e q dice qualcosa sulla forma del triangolo. Quando q è uguale a p, l'altezza cade nel punto medio dell'ipotenusa e i due cateti sono uguali, quindi il triangolo è isoscele. Quando q è maggiore di p, il cateto b è più lungo del cateto a, e quando p è maggiore, il cateto a è più lungo. La proiezione più lunga appartiene sempre al cateto più lungo.",
            },
            {
              "kind": "p",
              "text": "Nel triangolo 6-8-10, q è 6.4 cm e p è 3.6 cm, quindi q è maggiore e il cateto b, con 8 cm, è davvero più lungo del cateto a, con 6 cm.",
            },
          ],
          "h2": "Relazione tra la proiezione P e la proiezione Q",
          "image": {
            "alt": "Triangolo rettangolo che confronta la proiezione q abbinata al cateto b con la proiezione p abbinata al cateto a, con c uguale a 10, q uguale a 6.4 e p uguale a 3.6",
            "caption": "q usa b (64 diviso per 10 = 6.4) e p usa a (36 diviso per 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[b = 8]] cm e [[c = 10]] cm. I quattro passaggi qui sotto mostrano l'intero svolgimento, senza saltare nulla.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[q = \\frac{b^2}{c}]].",
                "Sostituisci i valori: [[q = \\frac{8^2}{10}]].",
                "Eleva al quadrato il cateto: [[q = \\frac{64}{10}]].",
                "Dividi: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta 6.4 cm è il segmento dell'ipotenusa accanto al cateto b, non un lato perpendicolare e non un'area. Una breve verifica chiude il cerchio: [[b^2 = 8^2 = 64]] e [[c \\times q = 10 \\times 6.4 = 64]], quindi entrambi i membri del teorema concordano.",
            },
            {
              "kind": "p",
              "text": "Per riferimento, l'altra proiezione è [[p = 10 - 6.4 = 3.6]] cm, il cateto a è [[a = \\sqrt{10 \\times 3.6} = 6]] cm e l'altezza è [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, a conferma del familiare triangolo rettangolo 6-8-10.",
            },
          ],
          "h2": "Esempio passo passo per trovare la proiezione Q",
          "image": {
            "alt": "Triangolo rettangolo con cateto b di 8 cm e ipotenusa di 10 cm, svolto per dare la proiezione q uguale a 6.4 cm",
            "caption": "Esempio svolto: b = 8 cm e c = 10 cm danno q = 64 diviso per 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli indipendenti intercettano quasi ogni errore. Esegui almeno uno per ogni risposta, e tutti e quattro quando il problema conta. L'esempio qui sotto usa [[b = 8]] cm, [[c = 10]] cm e [[q = 6.4]] cm per tutto il testo.",
            },
            {
              "kind": "h3",
              "text": "Metodo 1: Verifica con il teorema delle proiezioni",
            },
            {
              "kind": "p",
              "text": "Verifica [[q = \\frac{b^2}{c}]] direttamente. Qui [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, che corrisponde alla risposta. Se il ricalcolo differisce, è andato storto il quadrato o la divisione.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: Addizione di segmenti",
            },
            {
              "kind": "p",
              "text": "Trova p per sottrazione: [[p = 10 - 6.4 = 3.6]] cm. Poi controlla [[p + q = 3.6 + 6.4 = 10]] cm, che è uguale a c. Una somma che non dà c indica un errore di sottrazione.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: Verifica con il teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Calcola il cateto a da p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Poi controlla [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Questo controllo verifica l'intero triangolo, quindi intercetta errori di etichettatura che il primo controllo può perdere. Il <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calcolatore del cateto a dalla proiezione</a> esegue direttamente il passaggio per a.",
            },
            {
              "kind": "h3",
              "text": "Metodo 4: Plausibilità geometrica",
            },
            {
              "kind": "p",
              "text": "Conferma che q sia positiva, minore di c, nell'unità corretta e un segmento dell'ipotenusa piuttosto che un lato perpendicolare. Qui 6.4 cm è positiva, minore di 10 cm, in centimetri e più corta del cateto b di 8 cm.",
            },
          ],
          "h2": "Come verificare il calcolo della proiezione Q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traccia l'altezza dal vertice dell'angolo retto C perpendicolare all'ipotenusa AB. Essa incontra l'ipotenusa in un punto detto piede, etichettato D, e la divide in due segmenti adiacenti: AD è la proiezione p e DB è la proiezione q.",
            },
            {
              "kind": "p",
              "text": "La proiezione q appartiene al cateto b perché si trova accanto al vertice B, lo stesso vertice da cui parte il cateto b. Nel piccolo triangolo CBD, il cateto b è l'ipotenusa e q è uno dei suoi cateti, ed è il collegamento geometrico che fa funzionare il teorema delle proiezioni. La proiezione p, con lo stesso ragionamento, appartiene al cateto a, che tocca il vertice A.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni sono lunghezze lungo l'ipotenusa, misurate nella stessa unità degli altri lati. Non sono perpendicolari a nulla e non sono lati del triangolo originale. Il <a href=\"/right-triangle-projection-calculator/\">calcolatore delle proiezioni del triangolo rettangolo</a> trova entrambe le proiezioni quando sono noti i cateti e l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Poiché p e q sono le due parti di un unico lato rettilineo, sommate danno l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Con [[c = 10]] cm e [[q = 6.4]] cm, l'altra proiezione è [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "La proiezione q non è la stessa cosa del cateto b. Il cateto b è il lato BC, uno dei lati che formano l'angolo retto, mentre q è il segmento DB lungo l'ipotenusa. Nel triangolo 6-8-10, il cateto b misura 8 cm e la proiezione q solo 6.4 cm.",
            },
          ],
          "h2": "Che cos'è la proiezione Q in un triangolo rettangolo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il quadrato c'è perché il teorema delle proiezioni è un'affermazione su un cateto al quadrato: dice che il quadrato del cateto b è uguale al prodotto di c per q, [[b^2 = c \\times q]], e la formula per q è ciò che si ottiene dividendo entrambi i membri per c.",
            },
            {
              "kind": "p",
              "text": "Il motivo risale ai triangoli simili. Nel triangolo CBD, il cateto b svolge il ruolo dell'ipotenusa, mentre q è uno dei suoi cateti. Confrontando il triangolo piccolo con il triangolo intero si ottiene la proporzione [[\\frac{q}{b} = \\frac{b}{c}]] e il cateto b compare due volte, una in ciascun rapporto. Moltiplicando in croce si mette b su entrambi i membri, ed è esattamente per questo che compare il quadrato.",
            },
            {
              "kind": "p",
              "text": "La relazione di media geometrica dice la stessa cosa con altre parole: il cateto b è la media geometrica dell'ipotenusa c e della sua proiezione q, cioè [[b = \\sqrt{c \\times q}]]. Elevando al quadrato entrambi i membri si ottiene [[b^2 = c \\times q]] e dividendo per c si isola q.",
            },
            {
              "kind": "p",
              "text": "La divisione è il passaggio che isola q. La moltiplicazione nel teorema lega q a c e dividere per c scioglie quel legame. Senza il quadrato, la formula mescolerebbe una lunghezza con un'area e le unità non tornerebbero.",
            },
          ],
          "h2": "Perché il cateto B è elevato al quadrato nella formula della proiezione?",
        },
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-applications": "Applicazioni pratiche dei calcoli della proiezione del triangolo rettangolo",
        "sec-calculate": "Calcolare la proiezione Q del triangolo rettangolo",
        "sec-diagram": "Diagramma della proiezione Q del triangolo rettangolo spiegato",
        "sec-examples": "Esempi svolti di calcolo della proiezione Q",
        "sec-faq": "Domande frequenti",
        "sec-formula": "Formula della proiezione Q del triangolo rettangolo",
        "sec-how-to-use": "Come usare il calcolatore della proiezione Q del triangolo rettangolo",
        "sec-intro": "Calcolatore della proiezione Q del triangolo rettangolo",
        "sec-leg-b-hypotenuse": "Capire il cateto B e l'ipotenusa",
        "sec-mistakes": "Errori comuni nel calcolo della proiezione Q",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-projection-p": "Come calcolare la proiezione P dall'altro cateto",
        "sec-proof": "Perché funziona la formula della proiezione Q?",
        "sec-properties": "Proprietà importanti della proiezione Q",
        "sec-pythagoras": "Relazione tra la proiezione Q e il teorema di Pitagora",
        "sec-related": "Esplora i calcolatori correlati per triangoli rettangoli",
        "sec-relationship-altitude": "Relazione tra la proiezione Q e l'altezza",
        "sec-relationship-leg-b": "Relazione tra la proiezione Q e il cateto B",
        "sec-relationship-pq": "Relazione tra la proiezione P e la proiezione Q",
        "sec-step-example": "Esempio passo passo per trovare la proiezione Q",
        "sec-verify": "Come verificare il calcolo della proiezione Q",
        "sec-what-projection-q": "Che cos'è la proiezione Q in un triangolo rettangolo?",
        "sec-why-squared": "Perché il cateto B è elevato al quadrato nella formula della proiezione?",
      },
    },
};
