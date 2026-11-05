// projectionPGuideTranslations.bit.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B2_IT = {
  "it": {
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "answer": "La formula è [[p = \\frac{a^2}{c}]], dove a è il cateto associato a p e c è l'ipotenusa completa. Eleva al quadrato prima il cateto a, poi dividi per c. Per esempio, [[a = 6]] cm e [[c = 10]] cm danno [[p = 3.6]] cm.",
          "question": "Qual è la formula della proiezione p?",
        },
        {
          "answer": "La proiezione p è il segmento dell'ipotenusa accanto al vertice A, creato quando l'altezza dall'angolo retto incontra l'ipotenusa nel punto D. Nel triangolo ABC, [[p = AD]], la porzione dell'ipotenusa associata al cateto a.",
          "question": "Che cosa rappresenta la proiezione p?",
        },
        {
          "answer": "Il quadrato deriva dai triangoli simili: il triangolo ACD è simile al triangolo ABC, da cui [[\\frac{p}{a} = \\frac{a}{c}]], e il cateto a compare in entrambi i rapporti. Moltiplicando in croce si ottiene [[a^2 = c \\times p]], quindi il quadrato è insito nella geometria.",
          "question": "Perché il cateto a è al quadrato?",
        },
        {
          "answer": "La divisione isola p. Il teorema della proiezione afferma che [[a^2 = c \\times p]], dove p è moltiplicato per c, quindi dividendo entrambi i membri per c si lascia p da sola. La divisione trasforma inoltre la lunghezza al quadrato in una lunghezza ordinaria.",
          "question": "Perché dividiamo per l'ipotenusa?",
        },
        {
          "answer": "No. Il cateto a è il lato AC, uno dei lati che formano l'angolo retto, mentre la proiezione p è il segmento AD lungo l'ipotenusa. Nel triangolo 6-8-10, il cateto a è 6 cm e la proiezione p è solo 3.6 cm.",
          "question": "La proiezione p è uguale al cateto a?",
        },
        {
          "answer": "No. La proiezione p è solo una parte dell'ipotenusa, quindi deve essere più piccola di c. Se p fosse uguale a c, q sarebbe zero e il triangolo sarebbe degenere. Un risultato maggiore di c segnala sempre un errore di inserimento o di etichettatura.",
          "question": "La proiezione p può essere maggiore dell'ipotenusa?",
        },
        {
          "answer": "La proiezione p si trova accanto al vertice A e si abbina al cateto a, mentre la proiezione q si trova accanto al vertice B e si abbina al cateto b. Sono i due segmenti che l'altezza crea sull'ipotenusa: [[p + q = c]].",
          "question": "Qual è la differenza tra la proiezione p e la proiezione q?",
        },
        {
          "answer": "No. Il cateto a si abbina solo alla proiezione p. Per trovare q serve il cateto b, usando [[q = \\frac{b^2}{c}]], oppure si sottrae: [[q = c - p]] una volta nota p. La <a href=\"/right-triangle-projection-q-calculator/\">calcolatrice della proiezione q</a> trova q a partire da b e c.",
          "question": "Posso calcolare la proiezione q usando il cateto a?",
        },
        {
          "answer": "Serve anche q oppure c. Trova q con [[q = c - p]], poi usa [[h = \\sqrt{p \\times q}]]. Con [[p = 3.6]] cm e [[c = 10]] cm, [[q = 6.4]] cm e [[h = 4.8]] cm. La sola proiezione p non può determinare l'altezza.",
          "question": "Come trovo l'altezza quando è nota la proiezione p?",
        },
        {
          "answer": "Ricalcola [[p = \\frac{a^2}{c}]], poi controlla [[p + q = c]] dopo aver trovato q per sottrazione, e conferma che p sia positiva e minore di c. Puoi anche trovare il cateto b da q e controllare [[a^2 + b^2 = c^2]].",
          "question": "Come posso verificare la proiezione p?",
        },
        {
          "answer": "L'altezza cade nel punto medio dell'ipotenusa e i due cateti sono uguali, quindi il triangolo è isoscele. Con [[c = 10]] cm e [[p = q = 5]] cm, entrambi i cateti sono uguali a [[\\sqrt{50}]] cm, circa 7.071 cm.",
          "question": "Che cosa succede quando p e q sono uguali?",
        },
        {
          "answer": "L'ipotenusa si trova di fronte all'angolo retto, l'angolo più grande del triangolo, e il lato opposto all'angolo più grande è sempre il lato più lungo. Se a fosse uguale o maggiore di c, un tale triangolo rettangolo non potrebbe esistere.",
          "question": "Perché l'ipotenusa deve essere più lunga del cateto a?",
        },
      ],
      "relatedHeading": "Esplora le calcolatrici correlate per i triangoli rettangoli",
      "relatedIntro": "Ogni calcolatrice qui sotto gestisce un compito specifico sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alle misure che già conosci.",
      "relatedItems": [
        "Calcolatrice della proiezione del triangolo rettangolo",
        "Calcolatrice della proiezione Q del triangolo rettangolo",
        "Calcolatrice del cateto A dalla proiezione del triangolo rettangolo",
        "Calcolatrice del cateto B dalla proiezione del triangolo rettangolo",
        "Calcolatrice dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        "Calcolatrice dell'altezza dalle proiezioni del triangolo rettangolo",
        "Calcolatrice dei lati del triangolo rettangolo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[p = \\frac{a^2}{c}]] invece di ricorrere al teorema di Pitagora per abitudine. Gli esercizi sui triangoli simili usano la stessa configurazione, poiché la dimostrazione stessa è un esercizio di corrispondenza tra lati corrispondenti.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa il teorema quando un triangolo rettangolo deve essere ricostruito da misure parziali: se un disegno fornisce l'ipotenusa e il piede dell'altezza, la proiezione mancante segue senza rimisurare la figura. Gli insegnanti usano inoltre questa configurazione come lezione ponte tra l'addizione di segmenti e la similitudine.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: la geometria del triangolo rettangolo richiesta deve esistere davvero. Il teorema descrive relazioni geometriche esatte, non misure approssimate sul campo, quindi non sostituisce mai un rilievo accurato o una misurazione ingegneristica professionale.",
            },
          ],
          "h2": "Applicazioni pratiche dei calcoli della proiezione del triangolo rettangolo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calcolatrice ha due campi di inserimento. Il primo accetta il cateto a, il lato perpendicolare associato alla proiezione p. Il secondo accetta l'ipotenusa c, il lato completo opposto all'angolo retto. Entrambe le lunghezze devono usare la stessa unità, quindi converti prima se una misura è in centimetri e l'altra in metri.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa deve essere più lunga del cateto a, poiché un cateto è un lato dell'angolo retto mentre l'ipotenusa attraversa l'intero triangolo. Se il valore di a è maggiore di c, probabilmente hai inserito una proiezione, l'altezza o il lato sbagliato.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola proiezione p per vedere il risultato e usa Reimposta per svuotare entrambi i campi prima di un nuovo problema. Il risultato è una lunghezza nell'unità inserita, quindi un cateto di 6 cm e un'ipotenusa di 10 cm restituiscono 3.6 cm. Il risultato è una lunghezza di segmento lungo l'ipotenusa.",
            },
          ],
          "h2": "Calcola la proiezione P del triangolo rettangolo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolarmente ad AB e la tocca in D.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa in due parti: il segmento AD è la proiezione p e il segmento DB è la proiezione q. Il cateto a e la proiezione p sono evidenziati perché sono la coppia di cui tratta questa pagina. Segui le etichette in questo ordine: parti da A, percorri il cateto a fino a C, poi il cateto b fino a B, poi torna lungo l'ipotenusa da B ad A, fermandoti in D per vedere la divisione in p e q.",
            },
            {
              "kind": "p",
              "text": "L'abbinamento di a con p diventa visibile nel piccolo triangolo ACD, dove il cateto a è l'ipotenusa e p è il lato che giace lungo la grande ipotenusa. Poiché il triangolo ACD è simile al triangolo ABC, il rapporto tra p e a nel triangolo piccolo è uguale al rapporto tra a e c nel triangolo grande.",
            },
          ],
          "h2": "Spiegazione del diagramma della proiezione P del triangolo rettangolo",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD all'ipotenusa AB, cateto a e proiezione p evidenziati, con i cateti a e b, l'ipotenusa c, le proiezioni p e q e l'altezza h etichettate",
            "caption": "L'altezza CD divide l'ipotenusa AB nella proiezione p (AD) e nella proiezione q (DB), con il cateto a (AC) evidenziato.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Esempio 1: Numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 6]] cm e [[c = 10]] cm, la formula dà [[p = \\frac{6^2}{10} = \\frac{36}{10}]], quindi [[p = 3.6]] cm. Il cateto al quadrato 36 è un valore intermedio, e dividendo per l'ipotenusa si torna a una lunghezza. L'altro cateto di questo triangolo è 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Divisione con quadrato perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 8]] cm e [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. Il cateto al quadrato si divide in modo esatto, quindi la risposta è esatta. L'altra proiezione qui è 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Risultato decimale",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 7]] cm e [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Un risultato decimale è normale: la proiezione non deve essere un numero intero anche quando entrambi gli input lo sono. L'altra proiezione è 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Misure più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 12]] m e [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. I numeri più grandi non cambiano nulla nel metodo: eleva al quadrato, poi dividi. L'altra proiezione è 12.8 m, che si abbina a un cateto di 16 m.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure piccole",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 30]] mm e [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Le misure piccole funzionano allo stesso modo, e mantenere l'unità in millimetri per tutto il calcolo evita ogni conversione. L'altra proiezione è 32 mm, che si abbina a un cateto di 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[a = \\frac{3}{4}]] ft e [[c = \\frac{3}{2}]] ft, eleva prima al quadrato il cateto: [[a^2 = \\frac{9}{16}]] piedi quadrati. Poi [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividere per una frazione significa moltiplicare per il suo reciproco, ed è il passaggio che la maggior parte degli studenti sbaglia con le misure frazionarie.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 60]] cm e [[c = 1]] m, converti prima: 1 m equivale a 100 cm. Poi [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Usare 1 invece di 100 avrebbe dato 3600 cm, una proiezione molto più lunga dell'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Valori decimali più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 4.5]] m e [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Gli input decimali richiedono la stessa attenzione dei numeri interi: eleva al quadrato l'intero decimale, poi dividi. L'altra proiezione è 4.8 m, che si abbina a un cateto di 6 m.",
            },
          ],
          "h2": "Esempi svolti di calcolo della proiezione P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema della proiezione afferma che il quadrato del cateto a è uguale all'ipotenusa moltiplicata per la sua proiezione:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividendo entrambi i membri per c si isola p e si ottiene la formula operativa di questa pagina:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Il calcolo procede in due fasi. La fase 1 eleva al quadrato il cateto a, moltiplicandolo per se stesso. La fase 2 divide quella lunghezza al quadrato per l'ipotenusa completa c, e il risultato è una lunghezza ordinaria, non una lunghezza al quadrato.",
            },
            {
              "kind": "p",
              "text": "Le unità richiedono attenzione in entrambe le fasi. Se a e c sono entrambi in centimetri, allora [[a^2]] è in centimetri quadrati, e dividendo per centimetri si ottengono centimetri. Mescolare le unità, per esempio metri per a e centimetri per c, dà un quoziente privo di senso, quindi converti in un'unica unità prima di calcolare.",
            },
            {
              "kind": "p",
              "text": "Con [[a = 6]] cm e [[c = 10]] cm, la fase 1 dà [[6^2 = 36]], e la fase 2 dà [[p = \\frac{36}{10} = 3.6]] cm. Il numero 36 da solo non risponde a nessuna domanda: solo dopo la divisione diventa la lunghezza della proiezione.",
            },
          ],
          "h2": "Formula della proiezione P del triangolo rettangolo",
          "image": {
            "alt": "Triangolo rettangolo ABC con altezza CD, che mostra come la proiezione p sia uguale al cateto a al quadrato diviso per l'ipotenusa c",
            "caption": "La formula della proiezione: p è uguale ad a al quadrato diviso per c, con il piede dell'altezza D che divide l'ipotenusa.",
            "src": "projection-p-formula.svg",
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
                "Identifica il triangolo rettangolo nel tuo problema e conferma che abbia un angolo retto.",
                "Individua il vertice dell'angolo retto e l'altezza da esso all'ipotenusa.",
                "Identifica il cateto perpendicolare associato alla proiezione p, il cateto che tocca il vertice A.",
                "Identifica l'ipotenusa completa c, il lato opposto all'angolo retto.",
                "Conferma che c sia maggiore di a. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Scegli unità compatibili e converti se le misure usano unità diverse.",
                "Inserisci il cateto a nel campo Cateto a.",
                "Inserisci l'ipotenusa c nel campo Ipotenusa c.",
                "Fai clic su Calcola proiezione p e leggi il risultato.",
                "Controlla il risultato: p deve essere positiva e minore di c.",
                "Usa Reimposta quando inizi un nuovo calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Inserire il cateto b invece del cateto a produce una proiezione diversa. Il cateto b si abbina a q, quindi la calcolatrice restituirebbe il segmento accanto al vertice B, non quello accanto ad A. Il controllo delle etichette nel passaggio 3 è il più importante.",
            },
          ],
          "h2": "Come usare la calcolatrice della proiezione P del triangolo rettangolo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questa calcolatrice trova la proiezione p di un triangolo rettangolo quando conosci il cateto a e l'ipotenusa completa c. La proiezione p è il segmento dell'ipotenusa che si trova accanto al cateto a, creato quando l'altezza dall'angolo retto incontra l'ipotenusa. La formula è [[p = \\frac{a^2}{c}]], dove a è il cateto perpendicolare e c è l'ipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Per esempio, con [[a = 6]] cm e [[c = 10]] cm, il calcolo è [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Il valore 3.6 cm è la porzione dell'ipotenusa associata al cateto a, non il cateto stesso e non l'intera ipotenusa.",
            },
            {
              "kind": "p",
              "text": "La calcolatrice si trova in cima a questa pagina, seguita dalla formula, da un diagramma etichettato, da una dimostrazione, da esempi svolti e da controlli che puoi eseguire su qualsiasi risposta.",
            },
          ],
          "h2": "Calcolatrice della proiezione P del triangolo rettangolo",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due lati perpendicolari, detti cateti, e un lato più lungo, detto ipotenusa. I due cateti si incontrano nell'angolo retto, e l'ipotenusa si trova di fronte a quell'angolo. Qui il triangolo è ABC con l'angolo retto in C: il cateto a è AC, il cateto b è BC e l'ipotenusa c è AB.",
            },
            {
              "kind": "p",
              "text": "Il cateto a è uno dei due lati che formano l'angolo retto, quindi è un vero lato del triangolo, non un segmento disegnato al suo interno. La proiezione p giace piatta lungo l'ipotenusa, mentre il cateto a va dal vertice A al vertice dell'angolo retto C.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è sempre il lato più lungo in un triangolo rettangolo non degenere, poiché si trova di fronte all'angolo più grande, l'angolo retto. Per questo la formula richiede [[0 < a < c]] e la calcolatrice si aspetta un'ipotenusa più lunga del cateto.",
            },
            {
              "kind": "p",
              "text": "La posizione del cateto a decide quale segmento si chiama p: il cateto a tocca il vertice A, quindi il segmento accanto ad A è p. Controlla sempre le etichette del tuo diagramma prima di scegliere quale cateto inserire.",
            },
          ],
          "h2": "Capire il cateto A e l'ipotenusa",
          "table": {
            "headers": [
              "Simbolo",
              "Significato",
            ],
            "rows": [
              [
                "a",
                "Cateto perpendicolare associato a p",
              ],
              [
                "b",
                "Altro cateto perpendicolare",
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
                "Altezza all'ipotenusa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione. La maggior parte risale all'etichettatura, non all'aritmetica.",
            },
            {
              "kind": "steps",
              "steps": [
                "Dimenticare di elevare al quadrato il cateto a: dividere a per c invece di a al quadrato per c dà 0.6 cm invece di 3.6 cm.",
                "Dividere c per a al quadrato invece di a al quadrato per c: il quoziente deve essere [[a^2/c]], non [[c/a^2]]. Con a = 6 e c = 10, l'ordine sbagliato dà circa 0.278, che non ha un'unità valida.",
                "Usare il cateto b invece del cateto a: inserendo b si ottiene q. Con b = 8 e c = 10, il risultato 6.4 cm è q, non p.",
                "Confondere la proiezione p con la proiezione q: p si trova accanto al vertice A e q accanto al vertice B. Etichetta entrambi i segmenti prima di calcolare.",
                "Trattare p come il vero cateto perpendicolare: p è un segmento dell'ipotenusa, non il lato AC. Nel triangolo 6-8-10, il cateto a è 6 cm mentre p è solo 3.6 cm.",
                "Inserire un valore di a maggiore o uguale a c: un tale triangolo non esiste, poiché l'ipotenusa è il lato più lungo.",
                "Mescolare le unità di misura: converti prima, come nell'Esempio 7, dove 1 m è diventato 100 cm.",
                "Dimenticare che l'ipotenusa completa è c: usare una proiezione o un cateto come denominatore distorce il risultato.",
                "Arrotondare i calcoli intermedi troppo presto: arrotondare il cateto al quadrato prima di dividere sposta la risposta.",
                "Confondere le lunghezze al quadrato con le lunghezze ordinarie: 36 nell'esempio 6-8-10 è una lunghezza al quadrato, mentre 3.6 cm è la proiezione.",
                "Applicare la formula a un triangolo che non è rettangolo: il teorema della proiezione richiede l'altezza da un angolo retto.",
                "Dimenticare che p è solo un segmento dell'ipotenusa: p più q è uguale a c, quindi un risultato pari o superiore a c segnala un errore.",
              ],
            },
            {
              "kind": "p",
              "text": "Se una risposta sembra sbagliata, fermati e rietichetta il diagramma prima di ricalcolare. La maggior parte degli errori qui sopra svanisce una volta che p e q sono chiaramente segnati sull'ipotenusa.",
            },
          ],
          "h2": "Errori comuni nel calcolo della proiezione P",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessuno dei valori ripete gli esempi svolti.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha il cateto [[a = 9]] cm e l'ipotenusa [[c = 15]] cm. Trova la proiezione p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valori decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 1.5]] m e [[c = 2.5]] m, trova la proiezione p.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[a = \\frac{5}{6}]] ft e [[c = \\frac{5}{3}]] ft, trova p come frazione.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un cateto misura [[a = 80]] cm e l'ipotenusa misura [[c = 2]] m. Trova p in centimetri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova q dopo aver calcolato p",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha l'ipotenusa [[c = 25]] cm e il cateto [[a = 15]] cm. Trova p, poi q.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Più passaggi con la proiezione p e l'altezza h",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[a = 15]] cm, trova p, poi q, poi l'altezza h.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di esercitazione",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[a^2 = \\frac{25}{36}]], quindi [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: Converti 2 m in 200 cm, poi [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm, poi [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[p = 9]] cm e [[q = 16]] cm, quindi [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemi di esercitazione con risposte",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alcuni problemi chiedono invece l'altra proiezione. La formula corrispondente è l'immagine speculare della formula per p, con il cateto b al posto del cateto a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 8]] cm e [[c = 10]] cm. Poi [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Corrisponde all'altra proiezione del triangolo 6-8-10 degli esempi precedenti, dove p era 3.6 cm e le due proiezioni sommate danno 10 cm.",
            },
            {
              "kind": "p",
              "text": "La formula usa b invece di a perché ogni cateto si abbina alla proiezione accanto al proprio vertice. Il cateto b tocca il vertice B, e q è il segmento accanto a B. Inserire a in questa formula restituirebbe p, non q. La calcolatrice di questa pagina accetta solo a e c, quindi usa la <a href=\"/right-triangle-projection-q-calculator/\">calcolatrice della proiezione q</a> quando devi trovare q a partire da b e c.",
            },
          ],
          "h2": "Come calcolare la proiezione Q dall'altro cateto",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione si basa sui triangoli simili. Tracciando l'altezza CD si divide il triangolo ABC in due triangoli rettangoli più piccoli, ACD e CBD, ed entrambi sono simili al triangolo originale. Uno dei loro rapporti tra lati fornisce direttamente il teorema della proiezione.",
            },
            {
              "kind": "p",
              "text": "Concentrati sul triangolo ACD e sull'intero triangolo ABC. Entrambi contengono l'angolo in A, ed entrambi contengono un angolo retto, quindi anche i loro terzi angoli devono coincidere. Abbinando i lati che occupano le stesse posizioni si ottiene la proporzione:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ora sostituisci i simboli standard: [[AD = p]], [[AC = a]] e [[AB = c]]. La proporzione diventa:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplicando in croce si eliminano le frazioni. Il numeratore sinistro per il denominatore destro è uguale al numeratore destro per il denominatore sinistro, quindi [[p \\times c = a \\times a]], cioè:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividendo entrambi i membri per c si conclude la dimostrazione, ottenendo [[p = \\frac{a^2}{c}]]. Lo stesso ragionamento applicato all'altro triangolo piccolo, CBD, dà [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Perché funziona la formula della proiezione P?",
          "image": {
            "alt": "Triangolo rettangolo originale ABC accanto ai triangoli simili più piccoli ACD e CBD, che mostrano la proporzione p su a uguale ad a su c",
            "caption": "Dimostrazione con triangoli simili: p su a è uguale ad a su c, quindi moltiplicando in croce si ottiene a al quadrato uguale a c per p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Otto proprietà derivano direttamente da [[p = \\frac{a^2}{c}]]. Ognuna è anche un controllo di buon senso per una nuova risposta.",
            },
            {
              "items": [
                "La proiezione p è sempre più corta dell'ipotenusa completa in un triangolo non degenere, poiché p è solo una parte di c.",
                "Aumentare il cateto a tenendo fisso c aumenta p, perché il cateto al quadrato al numeratore cresce.",
                "Aumentare c tenendo fisso a diminuisce p, perché il denominatore cresce.",
                "Se a e c sono entrambi moltiplicati per lo stesso fattore positivo, p scala di quel fattore.",
                "Se p è uguale a q, entrambi i cateti sono uguali e il triangolo è un triangolo rettangolo isoscele.",
                "La proiezione p è sempre positiva in un triangolo valido non degenere. Valori zero o negativi non descrivono alcun triangolo reale.",
                "La proiezione p è una lunghezza, non un'area. Il cateto al quadrato è solo un passaggio intermedio, e dividendo per c si ripristinano le unità di lunghezza ordinarie.",
                "La proiezione p è associata specificamente al cateto a. Usarla con il cateto b risponde a una domanda completamente diversa.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando l'altezza cade nel punto medio dell'ipotenusa, i due cateti devono coincidere, come mostra il diagramma qui sotto.",
            },
          ],
          "h2": "Proprietà importanti della proiezione P",
          "image": {
            "alt": "Due triangoli rettangoli affiancati, uno con proiezioni uguali p e q di 5 e uno con proiezioni disuguali p uguale a 3.6 e q uguale a 6.4",
            "caption": "Proiezioni uguali (p = q = 5) danno cateti uguali, mentre proiezioni disuguali (p = 3.6, q = 6.4) danno cateti disuguali.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema della proiezione e il teorema di Pitagora concordano esattamente, e l'algebra mostra perché. Parti dalle due formule della proiezione, [[a^2 = c \\times p]] e [[b^2 = c \\times q]], e sommale:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo c a fattor comune sul lato destro si ottiene [[a^2 + b^2 = c(p + q)]]. Poiché [[p + q = c]], la sostituzione dà il risultato familiare:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un controllo numerico con il triangolo 6-8-10 lo conferma: [[a^2 + b^2 = 36 + 64 = 100]] e [[c^2 = 10^2 = 100]]. Il teorema della proiezione divide la relazione pitagorica in un pezzo per cateto, e sommando i pezzi la si ricostruisce.",
            },
            {
              "kind": "p",
              "text": "Questa divisione è ciò che rende utili le formule della proiezione: il solo teorema di Pitagora non può trovare una proiezione da un cateto e un'ipotenusa, perché parla dei cateti insieme.",
            },
          ],
          "h2": "Relazione tra la proiezione P e il teorema di Pitagora",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proiezione p si collega anche all'altezza attraverso una seconda relazione di media geometrica. L'altezza h è la media geometrica delle due proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[q = c - p]], l'altezza può essere scritta anche usando solo p e c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 3.6]] cm e [[c = 10]] cm. Trova prima q: [[q = 10 - 3.6 = 6.4]] cm. Poi [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. L'altezza è più corta di entrambi i cateti, come deve essere.",
            },
            {
              "kind": "p",
              "text": "La sola proiezione p non determina l'altezza: due triangoli diversi possono condividere la stessa p con ipotenuse diverse. Servono sempre anche l'ipotenusa completa, oppure l'altra proiezione. La <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatrice dell'altezza dalle proiezioni</a> gestisce quel calcolo quando entrambe le proiezioni sono note.",
            },
          ],
          "h2": "Relazione tra la proiezione P e l'altezza",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formula della proiezione può essere riordinata per trovare il cateto a invece di p. Partendo da [[a^2 = c \\times p]], prendi la radice quadrata positiva di entrambi i membri:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Verificala con i numeri familiari: [[a = 6]] cm, [[c = 10]] cm e [[p = 3.6]] cm. Il prodotto sotto radice è [[c \\times p = 10 \\times 3.6 = 36]], e [[\\sqrt{36} = 6]] cm, che è il cateto da cui siamo partiti.",
            },
            {
              "kind": "p",
              "text": "Il collegamento è la relazione di media geometrica: il cateto a è la media geometrica dell'ipotenusa e della sua proiezione. Per questo il cateto compare al quadrato nel teorema e per questo compare la radice quadrata quando si risolve per il cateto. Per i problemi che partono da p e c, la <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calcolatrice del cateto a dalla proiezione</a> esegue direttamente questa formula riordinata.",
            },
          ],
          "h2": "Relazione tra la proiezione P e il cateto A",
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
              "text": "Riordinando si ottiene [[q = c - p]]. Con [[c = 10]] cm e [[p = 3.6]] cm, la sottrazione è [[q = 10 - 3.6 = 6.4]] cm. La stessa sottrazione funziona al contrario: [[p = c - q]]. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calcolatrice dell'ipotenusa dalle proiezioni</a> ricostruisce c da p e q quando l'ipotenusa stessa è sconosciuta.",
            },
            {
              "kind": "p",
              "text": "Confrontare p e q dice qualcosa sulla forma del triangolo. Quando p è uguale a q, l'altezza cade nel punto medio dell'ipotenusa e i due cateti sono uguali, quindi il triangolo è isoscele. Quando p è maggiore di q, il cateto a è più lungo del cateto b, e quando q è maggiore, il cateto b è più lungo. La proiezione più lunga appartiene sempre al cateto più lungo.",
            },
            {
              "kind": "p",
              "text": "Nel triangolo 6-8-10, q è 6.4 cm e p è 3.6 cm, quindi q è maggiore, e il cateto b di 8 cm è infatti più lungo del cateto a di 6 cm.",
            },
          ],
          "h2": "Relazione tra la proiezione P e la proiezione Q",
          "image": {
            "alt": "Triangolo rettangolo che confronta la proiezione p abbinata al cateto a con la proiezione q abbinata al cateto b, con c uguale a 10, p uguale a 3.6 e q uguale a 6.4",
            "caption": "p usa a (36 diviso per 10 = 3.6) e q usa b (64 diviso per 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm e [[c = 10]] cm. I quattro passaggi qui sotto mostrano l'intero svolgimento, senza saltare nulla.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[p = \\frac{a^2}{c}]].",
                "Sostituisci i valori: [[p = \\frac{6^2}{10}]].",
                "Eleva al quadrato il cateto: [[p = \\frac{36}{10}]].",
                "Dividi: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta 3.6 cm è il segmento dell'ipotenusa accanto al cateto a, non un lato perpendicolare e non un'area. Una breve verifica chiude il cerchio: [[a^2 = 6^2 = 36]] e [[c \\times p = 10 \\times 3.6 = 36]], quindi entrambi i membri del teorema concordano.",
            },
            {
              "kind": "p",
              "text": "Per riferimento, l'altra proiezione è [[q = 10 - 3.6 = 6.4]] cm, il cateto b è [[b = \\sqrt{10 \\times 6.4} = 8]] cm e l'altezza è [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, a conferma del familiare triangolo rettangolo 6-8-10.",
            },
          ],
          "h2": "Esempio passo passo per trovare la proiezione P",
          "image": {
            "alt": "Triangolo rettangolo con cateto a di 6 cm e ipotenusa di 10 cm, risolto per dare la proiezione p uguale a 3.6 cm",
            "caption": "Esempio svolto: a = 6 cm e c = 10 cm danno p = 36 diviso per 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli indipendenti intercettano quasi ogni errore. Esegui almeno uno per ogni risposta, e tutti e quattro quando il problema conta. L'esempio qui sotto usa [[a = 6]] cm, [[c = 10]] cm e [[p = 3.6]] cm per tutto il tempo.",
            },
            {
              "kind": "h3",
              "text": "Metodo 1: Controllo con il teorema della proiezione",
            },
            {
              "kind": "p",
              "text": "Verifica [[p = \\frac{a^2}{c}]] direttamente. Qui [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, che corrisponde alla risposta. Se il ricalcolo differisce, è andato storto l'elevamento al quadrato o la divisione.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: Addizione dei segmenti",
            },
            {
              "kind": "p",
              "text": "Trova q per sottrazione: [[q = 10 - 3.6 = 6.4]] cm. Poi controlla [[p + q = 3.6 + 6.4 = 10]] cm, che è uguale a c. Una somma che non dà c indica un errore di sottrazione.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: Controllo con il teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Calcola il cateto b da q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Poi controlla [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Questo controllo verifica l'intero triangolo, quindi intercetta errori di etichettatura che il primo controllo può non vedere. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calcolatrice del cateto b dalla proiezione</a> esegue direttamente il passaggio per b.",
            },
            {
              "kind": "h3",
              "text": "Metodo 4: Ragionevolezza geometrica",
            },
            {
              "kind": "p",
              "text": "Conferma che p sia positiva, minore di c, nell'unità corretta, e un segmento dell'ipotenusa piuttosto che un lato perpendicolare. Qui 3.6 cm è positiva, minore di 10 cm, in centimetri, e molto più corta del cateto a di 6 cm.",
            },
          ],
          "h2": "Come verificare il calcolo della proiezione P",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traccia l'altezza dal vertice dell'angolo retto C perpendicolarmente all'ipotenusa AB. Essa incontra l'ipotenusa in un punto chiamato piede, etichettato D, e la divide in due segmenti adiacenti: AD è la proiezione p, e DB è la proiezione q.",
            },
            {
              "kind": "p",
              "text": "La proiezione p appartiene al cateto a perché si trova accanto al vertice A, lo stesso vertice dove inizia il cateto a. Nel piccolo triangolo ACD, il cateto a è l'ipotenusa e p è uno dei suoi cateti, ed è il collegamento geometrico che fa funzionare il teorema della proiezione. La proiezione q, con lo stesso ragionamento, appartiene al cateto b, che tocca il vertice B.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni sono lunghezze lungo l'ipotenusa, misurate nella stessa unità degli altri lati. Non sono perpendicolari a nulla e non sono lati del triangolo originale. La <a href=\"/right-triangle-projection-calculator/\">calcolatrice delle proiezioni del triangolo rettangolo</a> trova entrambe le proiezioni quando sono noti i cateti e l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Poiché p e q sono le due parti di un unico lato rettilineo, sommate danno l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Con [[c = 10]] cm e [[p = 3.6]] cm, l'altra proiezione è [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "La proiezione p non è la stessa cosa del cateto a. Il cateto a è il lato AC, uno dei lati che formano l'angolo retto, mentre p è il segmento AD lungo l'ipotenusa. Nel triangolo 6-8-10, il cateto a è 6 cm e la proiezione p è solo 3.6 cm.",
            },
          ],
          "h2": "Che cos'è la proiezione P in un triangolo rettangolo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il quadrato c'è perché il teorema della proiezione è un'affermazione su un cateto al quadrato: dice che il quadrato del cateto a è uguale al prodotto di c per p, [[a^2 = c \\times p]], e la formula per p è ciò che si ottiene dividendo entrambi i membri per c.",
            },
            {
              "kind": "p",
              "text": "La ragione risale ai triangoli simili. Nel triangolo ACD, il cateto a svolge il ruolo dell'ipotenusa, mentre p è uno dei suoi cateti. Confrontando il triangolo piccolo con il triangolo intero si ottiene la proporzione [[\\frac{p}{a} = \\frac{a}{c}]], e il cateto a compare due volte, una volta in ciascun rapporto. Moltiplicando in croce si mette a su entrambi i lati, ed è esattamente per questo che compare il quadrato.",
            },
            {
              "kind": "p",
              "text": "La relazione di media geometrica dice la stessa cosa con parole diverse: il cateto a è la media geometrica dell'ipotenusa c e della sua proiezione p, cioè [[a = \\sqrt{c \\times p}]]. Elevando al quadrato entrambi i membri si ottiene [[a^2 = c \\times p]], e dividendo per c si isola p.",
            },
            {
              "kind": "p",
              "text": "La divisione è il passaggio che isola p. La moltiplicazione nel teorema lega p a c, e dividere per c scioglie quel legame. Senza il quadrato, la formula mescolerebbe una lunghezza con un'area, e le unità non tornerebbero.",
            },
          ],
          "h2": "Perché il cateto A è al quadrato nella formula della proiezione?",
        },
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-applications": "Applicazioni pratiche dei calcoli della proiezione del triangolo rettangolo",
        "sec-calculate": "Calcola la proiezione P del triangolo rettangolo",
        "sec-diagram": "Spiegazione del diagramma della proiezione P del triangolo rettangolo",
        "sec-examples": "Esempi svolti di calcolo della proiezione P",
        "sec-faq": "Domande Frequenti",
        "sec-formula": "Formula della proiezione P del triangolo rettangolo",
        "sec-how-to-use": "Come usare la calcolatrice della proiezione P del triangolo rettangolo",
        "sec-intro": "Calcolatrice della proiezione P del triangolo rettangolo",
        "sec-leg-a-hypotenuse": "Capire il cateto A e l'ipotenusa",
        "sec-mistakes": "Errori comuni nel calcolo della proiezione P",
        "sec-practice": "Problemi di esercitazione con risposte",
        "sec-projection-q": "Come calcolare la proiezione Q dall'altro cateto",
        "sec-proof": "Perché funziona la formula della proiezione P?",
        "sec-properties": "Proprietà importanti della proiezione P",
        "sec-pythagoras": "Relazione tra la proiezione P e il teorema di Pitagora",
        "sec-related": "Esplora le calcolatrici correlate per i triangoli rettangoli",
        "sec-relationship-altitude": "Relazione tra la proiezione P e l'altezza",
        "sec-relationship-leg-a": "Relazione tra la proiezione P e il cateto A",
        "sec-relationship-pq": "Relazione tra la proiezione P e la proiezione Q",
        "sec-step-example": "Esempio passo passo per trovare la proiezione P",
        "sec-verify": "Come verificare il calcolo della proiezione P",
        "sec-what-projection-p": "Che cos'è la proiezione P in un triangolo rettangolo?",
        "sec-why-squared": "Perché il cateto A è al quadrato nella formula della proiezione?",
      },
    },
};
