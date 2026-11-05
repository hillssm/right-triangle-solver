// legBFromProjectionGuideTranslations.bit.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B2_IT = {
  "it": {
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Qual è la formula per trovare il cateto b dalla proiezione q?",
          "answer": "La formula è [[b = \\sqrt{c \\times q}]], dove c è l'ipotenusa completa e q è la proiezione che appartiene al cateto b. Per esempio, [[c = 10]] cm e [[q = 6.4]] cm danno [[b = 8]] cm.",
        },
        {
          "question": "Perché moltiplichiamo c per q?",
          "answer": "La moltiplicazione deriva dai triangoli simili. Il triangolo CBD è simile al triangolo ABC, da cui [[q / b = b / c]], e moltiplicando in croce si ottiene [[b^2 = c \\times q]]. Il prodotto è il quadrato del cateto, non il cateto stesso.",
        },
        {
          "question": "Perché è necessaria una radice quadrata?",
          "answer": "Perché il prodotto cq è uguale a b al quadrato, non a b. La radice quadrata annulla il quadrato e restituisce una lunghezza ordinaria. Senza di essa, nell'esempio con c = 10 e q = 6.4 riporteresti 64 invece di 8.",
        },
        {
          "question": "Che cosa rappresenta la proiezione q?",
          "answer": "La proiezione q è il segmento dell'ipotenusa vicino al vertice B, creato quando l'altezza tracciata dall'angolo retto incontra l'ipotenusa. Nel triangolo ABC con altezza CD, [[q = DB]], e si trova lungo l'ipotenusa.",
        },
        {
          "question": "La proiezione q è la stessa cosa del cateto b?",
          "answer": "No. Il cateto b è il lato BC, uno dei lati che formano l'angolo retto, mentre la proiezione q è il segmento DB lungo l'ipotenusa. Sono lunghezze diverse in posizioni diverse, collegate solo da [[b^2 = c \\times q]].",
        },
        {
          "question": "Perché si usa q invece di p?",
          "answer": "Perché ogni cateto si abbina alla proiezione vicina al proprio vertice. Il cateto b tocca il vertice B, e q è il segmento vicino a B. Usare p restituirebbe invece il cateto a, poiché p si abbina al cateto che tocca il vertice A.",
        },
        {
          "question": "Posso trovare il cateto b se è nota solo la proiezione p?",
          "answer": "Sì. Sottrai prima p dall'ipotenusa: [[q = c - p]]. Con [[c = 25]] cm e [[p = 9]] cm, [[q = 16]] cm, e quindi [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "La proiezione q può essere più grande dell'ipotenusa?",
          "answer": "No. La proiezione q è solo una parte dell'ipotenusa, quindi deve essere più piccola di c. Se q fosse uguale a c, p sarebbe zero e il triangolo sarebbe degenere anziché un vero triangolo rettangolo.",
        },
        {
          "question": "Come verifico il cateto calcolato?",
          "answer": "Eleva la risposta al quadrato e controlla che sia uguale a [[c \\times q]]. Puoi anche trovare il cateto a da p e controllare [[a^2 + b^2 = c^2]], e confermare che q è più piccola di c e che il cateto b è più corto dell'ipotenusa.",
        },
        {
          "question": "Che cosa succede quando p e q sono uguali?",
          "answer": "L'altezza cade nel punto medio dell'ipotenusa, e i due cateti sono uguali, quindi il triangolo è un triangolo rettangolo isoscele. Con [[c = 20]] cm e [[p = q = 10]] cm, entrambi i cateti sono uguali a [[10\\sqrt{2}]] cm, circa 14.142 cm.",
        },
        {
          "question": "Posso trovare il cateto a usando lo stesso teorema?",
          "answer": "Sì, con la formula speculare [[a = \\sqrt{c \\times p}]]. Il cateto a si abbina alla proiezione p, proprio come il cateto b si abbina a q. Il <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calcolatore del cateto a dalla proiezione</a> è fatto per quel calcolo.",
        },
        {
          "question": "Il teorema delle proiezioni è collegato al teorema di Pitagora?",
          "answer": "Sì. Sommando le due formule delle proiezioni si ottiene [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], poiché [[p + q = c]]. Il teorema delle proiezioni divide la relazione pitagorica in un pezzo per cateto.",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per triangoli rettangoli",
      "relatedIntro": "Scegli lo strumento successivo in base alle misure che conosci già, poiché ogni calcolatore qui sotto gestisce un compito specifico sui triangoli rettangoli.",
      "relatedItems": [
        "Calcolatore delle proiezioni di un triangolo rettangolo",
        "Calcolatore della proiezione p di un triangolo rettangolo",
        "Calcolatore della proiezione q di un triangolo rettangolo",
        "Calcolatore del cateto a dalla proiezione di un triangolo rettangolo",
        "Calcolatore dell'ipotenusa dalle proiezioni di un triangolo rettangolo",
        "Calcolatore dell'altezza dalle proiezioni di un triangolo rettangolo",
        "Calcolatore dei lati di un triangolo rettangolo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questo calcolatore trova il cateto b di un triangolo rettangolo quando conosci l'ipotenusa completa c e la proiezione q che appartiene al cateto b. Inserisci queste due lunghezze e otterrai la lunghezza effettiva del lato del cateto b, non un valore al quadrato e non un segmento di proiezione. La formula è [[b = \\sqrt{c \\times q}]], dove c è l'ipotenusa completa e q è il segmento dell'ipotenusa vicino al cateto b.",
            },
            {
              "kind": "p",
              "text": "Per esempio, se [[c = 10]] cm e [[q = 6.4]] cm, allora [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. Il prodotto 64 è solo un passaggio intermedio. Estrarre la radice quadrata lo trasforma di nuovo in una lunghezza, e quella lunghezza è il lato che stai cercando.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore si trova in cima a questa pagina, seguito dalla formula, da un diagramma etichettato, da una dimostrazione del teorema delle proiezioni, da esempi svolti e da controlli che puoi eseguire su qualsiasi risposta. La guida è adatta a studenti di scuola media e superiore, insegnanti, tutor e genitori che aiutano con i compiti di geometria.",
            },
          ],
          "h2": "Calcolatore del cateto b di un triangolo rettangolo dalla proiezione",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore ha due campi di input. Il primo accetta l'ipotenusa c, il lato completo opposto all'angolo retto. Il secondo accetta la proiezione q, il segmento dell'ipotenusa che appartiene al cateto b. Entrambe le lunghezze devono usare la stessa unità, quindi converti prima se una misura è in centimetri e l'altra in metri.",
            },
            {
              "kind": "p",
              "text": "La proiezione q deve essere più piccola di c. Questa regola è insita nella geometria: q è solo una parte dell'ipotenusa, quindi non può mai eguagliare o superare l'intero lato. Se il tuo valore di q è più grande di c, probabilmente hai inserito un cateto, l'altezza o la proiezione sbagliata.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola cateto b per vedere il risultato e usa Reimposta per svuotare entrambi i campi prima di un nuovo problema. Il risultato è una lunghezza nell'unità inserita, quindi un'ipotenusa di 10 cm e una proiezione di 6.4 cm restituiscono 8 cm, senza bisogno di ulteriori conversioni.",
            },
          ],
          "h2": "Calcolare il cateto b di un triangolo rettangolo dalla proiezione",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due lati perpendicolari, chiamati cateti, e un lato più lungo, chiamato ipotenusa. I due cateti si incontrano nell'angolo retto, e l'ipotenusa si trova di fronte a quell'angolo. In questa guida il triangolo è ABC con l'angolo retto in C, il cateto a è il lato AC, il cateto b è il lato BC e l'ipotenusa c è il lato AB.",
            },
            {
              "kind": "p",
              "text": "Il cateto b è uno dei due lati che formano l'angolo retto, quindi è un vero lato del triangolo. Non è un segmento tracciato dentro il triangolo, e non è la proiezione q. La proiezione q giace piatta lungo l'ipotenusa, mentre il cateto b va dal vertice B al vertice dell'angolo retto C. Tenere separati questi due ruoli è il primo passo per usare la formula correttamente.",
            },
            {
              "kind": "p",
              "text": "Il cateto b differisce dal cateto a solo per la posizione: il cateto b tocca il vertice B, e il cateto a tocca il vertice A. Ogni cateto ha la propria proiezione, ed è per questo che la formula per b usa q mentre la formula per a usa p, un abbinamento fissato dall'etichettatura.",
            },
            {
              "kind": "p",
              "text": "In qualsiasi triangolo rettangolo non degenere, il cateto b è più corto dell'ipotenusa. Questo offre un rapido controllo di buon senso su ogni risposta: se il cateto b calcolato risulta più lungo di c, qualcosa è andato storto negli input o nei calcoli, e le etichette del diagramma sono il primo posto dove guardare.",
            },
          ],
          "h2": "Che cos'è il cateto b in un triangolo rettangolo?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traccia l'altezza dal vertice dell'angolo retto C perpendicolare all'ipotenusa AB. Essa incontra l'ipotenusa in un punto chiamato piede, etichettato D. Quel punto divide l'ipotenusa in due segmenti adiacenti, e quei segmenti sono le proiezioni. Il segmento AD è la proiezione p, e il segmento DB è la proiezione q.",
            },
            {
              "kind": "p",
              "text": "La proiezione q appartiene al cateto b perché si trova vicino al vertice B, lo stesso vertice dove inizia il cateto b. Nel piccolo triangolo CBD, il cateto b è l'ipotenusa e q è uno dei suoi cateti, ed è questo il legame geometrico che fa funzionare il teorema delle proiezioni. La proiezione p, con lo stesso ragionamento, appartiene al cateto a, che tocca il vertice A.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni sono lunghezze lungo l'ipotenusa, misurate nella stessa unità degli altri lati. Non sono perpendicolari a nulla, e non sono lati del triangolo originale. Una proiezione si può immaginare come l'ombra che un cateto proietta sull'ipotenusa quando l'altezza scende dritta fino a essa.",
            },
            {
              "kind": "p",
              "text": "Poiché p e q sono le due parti di un unico lato rettilineo, la loro somma è l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Questa addizione è utile di per sé. Se conosci c e una proiezione, puoi trovare l'altra per sottrazione, un passaggio che la sezione successiva sull'altra proiezione illustra per intero.",
            },
          ],
          "h2": "Che cos'è la proiezione q in un triangolo rettangolo?",
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
              "text": "Estraendo la radice quadrata positiva di entrambi i membri si ottiene la formula operativa di questa pagina:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Il calcolo procede in due fasi distinte. La fase 1 moltiplica l'ipotenusa per la proiezione, e il risultato è una lunghezza al quadrato, non un lato. La fase 2 estrae la radice quadrata positiva, che riconverte quella lunghezza al quadrato in una lunghezza ordinaria. Saltare la fase 2 è l'errore più comune con questa formula, e la sezione successiva spiega perché la radice quadrata non può essere omessa.",
            },
            {
              "kind": "p",
              "text": "Le unità richiedono attenzione in entrambe le fasi. Se c e q sono entrambi in centimetri, il loro prodotto è in centimetri quadrati, e la radice quadrata restituisce centimetri. Mescolare le unità, per esempio metri per c e centimetri per q, dà un prodotto senza senso, quindi converti in un'unica unità prima di moltiplicare. Si usa la radice positiva perché la lunghezza di un lato è sempre positiva.",
            },
            {
              "kind": "p",
              "text": "Un piccolo esempio numerico mostra entrambe le fasi al lavoro. Con [[c = 10]] cm e [[q = 6.4]] cm, la fase 1 dà [[10 \\times 6.4 = 64]], e la fase 2 dà [[b = \\sqrt{64} = 8]] cm. Il numero 64 da solo non risponde a nessuna domanda. Solo dopo la radice quadrata diventa la lunghezza del cateto.",
            },
          ],
          "h2": "Formula del cateto b di un triangolo rettangolo dalla proiezione",
          "image": {
            "alt": "Triangolo rettangolo ABC con altezza CD, che mostra il quadrato del cateto b uguale all'ipotenusa c moltiplicata per la proiezione q",
            "caption": "Il teorema delle proiezioni: b al quadrato è uguale a c per q, quindi b è uguale alla radice quadrata di c per q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La radice quadrata c'è perché la moltiplicazione produce una quantità al quadrato. Il teorema non dice che il cateto b è uguale al prodotto di c e q. Dice che il quadrato del cateto b è uguale a quel prodotto. Annullare un quadrato richiede una radice quadrata, proprio come annullare un raddoppio richiede dimezzare.",
            },
            {
              "kind": "p",
              "text": "Prendi [[c = 10]] e [[q = 6.4]]. Il loro prodotto è 64, che è [[b^2]], il quadrato del cateto. Il cateto stesso è il numero che moltiplicato per se stesso dà 64, cioè 8. Scrivere [[b = 64]] significherebbe affermare un lato di 64 unità in un triangolo la cui ipotenusa è solo 10, il che è chiaramente impossibile.",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto tiene separate le tre quantità, poiché confonderle causa la maggior parte degli errori con questa formula.",
            },
          ],
          "h2": "Perché c'è una radice quadrata nella formula?",
          "table": {
            "headers": [
              "Quantità",
              "Significato",
              "Esempio con c = 10, q = 6.4",
            ],
            "rows": [
              [
                "[[b]]",
                "La lunghezza del cateto stesso",
                "8",
              ],
              [
                "[[b^2]]",
                "La lunghezza del cateto moltiplicata per se stessa",
                "64",
              ],
              [
                "[[c \\times q]]",
                "Il prodotto che il teorema eguaglia a [[b^2]]",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "Il passaggio che ricava b da [[b^2]]",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci brevi passaggi ti portano da un diagramma etichettato a una risposta controllata.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica il triangolo rettangolo nel tuo problema e conferma che ha un angolo retto.",
                "Trova l'altezza tracciata dall'angolo retto e segna dove incontra l'ipotenusa.",
                "Identifica l'ipotenusa completa c, il lato opposto all'angolo retto.",
                "Identifica la proiezione q, il segmento dell'ipotenusa vicino al vertice B, dove inizia il cateto b.",
                "Controlla che q sia più piccola di c. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Converti c e q nella stessa unità se sono state date in unità diverse.",
                "Inserisci c nel campo Ipotenusa c.",
                "Inserisci q nel campo Proiezione q. Non inserire p qui, perché restituirebbe invece il cateto a.",
                "Fai clic su Calcola cateto b e leggi il risultato.",
                "Usa Reimposta prima di iniziare un nuovo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "Il calcolatore non accetta p, quindi un problema che fornisce solo p richiede un passaggio di sottrazione in più, trattato più avanti. Inserire p nel campo q produce comunque un numero, ma sarà il cateto sbagliato, quindi il controllo delle etichette del passaggio 4 è il più importante.",
            },
          ],
          "h2": "Come usare il calcolatore del cateto b di un triangolo rettangolo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm e [[q = 6.4]] cm. I quattro passaggi qui sotto mostrano l'intero svolgimento, senza saltare nulla.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: b = sqrt(cq).",
                "Sostituisci i valori: b = sqrt(10 x 6.4).",
                "Moltiplica dentro la radice: b = sqrt(64).",
                "Estrai la radice quadrata: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta 8 cm è il vero lato perpendicolare BC, non una proiezione e non un'area. Una breve verifica chiude il cerchio: [[b^2 = 8^2 = 64]] e [[c \\times q = 10 \\times 6.4 = 64]], quindi entrambi i membri del teorema concordano.",
            },
            {
              "kind": "p",
              "text": "Per riferimento, l'altra proiezione è [[p = 10 - 6.4 = 3.6]] cm, il cateto a è [[a = \\sqrt{10 \\times 3.6} = 6]] cm, e l'altezza è [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, a conferma del familiare triangolo rettangolo 6-8-10.",
            },
          ],
          "h2": "Esempio passo passo per trovare il cateto b",
          "image": {
            "alt": "Triangolo rettangolo con ipotenusa 10 cm e proiezione 6.4 cm, svolto per dare il cateto b uguale a 8 cm",
            "caption": "Esempio svolto: c = 10 cm e q = 6.4 cm danno b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b, e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolare ad AB e la tocca in D, e il segno di angolo retto in D conferma che CD è davvero perpendicolare.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa in due parti: il segmento AD è la proiezione p e il segmento DB è la proiezione q. Il cateto b e la proiezione q sono evidenziati perché sono la coppia di cui tratta questa pagina. Segui il diagramma in questo ordine per fissare le etichette: parti da B, percorri il cateto b fino a C, poi il cateto a fino ad A, quindi torna lungo l'ipotenusa da A a B, fermandoti in D per vedere la divisione in p e q.",
            },
            {
              "kind": "p",
              "text": "L'abbinamento di b con q diventa visibile nel piccolo triangolo CBD, dove il cateto b è l'ipotenusa e q è il lato che giace lungo la grande ipotenusa. Poiché il triangolo CBD è simile al triangolo ABC, il rapporto tra q e b nel triangolo piccolo è uguale al rapporto tra b e c in quello grande, cosa che la sezione della dimostrazione trasforma in [[b^2 = cq]].",
            },
          ],
          "h2": "Diagramma del cateto b di un triangolo rettangolo dalla proiezione spiegato",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD sull'ipotenusa AB, cateto b e proiezione q evidenziati, con cateti a e b, ipotenusa c, proiezioni p e q e altezza h etichettati",
            "caption": "Triangolo principale ABC: l'altezza CD divide l'ipotenusa AB nella proiezione p (AD) e nella proiezione q (DB), con il cateto b (BC) evidenziato.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione si basa sui triangoli simili. Tracciare l'altezza CD divide il triangolo ABC in due triangoli rettangoli più piccoli, ACD e CBD, ed entrambi sono simili al triangolo originale. La similitudine significa che i loro lati corrispondenti restano nello stesso rapporto, e uno di quei rapporti dà direttamente il teorema delle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Concentrati sul triangolo CBD e sull'intero triangolo ABC. Entrambi contengono l'angolo in B, ed entrambi contengono un angolo retto, quindi anche i loro terzi angoli devono coincidere. Abbinare i lati che si trovano nelle stesse posizioni dà la proporzione:",
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
              "text": "Estrarre la radice quadrata positiva di entrambi i membri completa la dimostrazione, dando [[b = \\sqrt{c \\times q}]]. Lo stesso ragionamento applicato all'altro triangolo piccolo, ACD, dà [[a^2 = c \\times p]]. La similitudine fa tutto il lavoro: i lati corrispondenti di triangoli simili restano proporzionali.",
            },
          ],
          "h2": "Perché funziona il teorema delle proiezioni?",
          "image": {
            "alt": "Triangolo rettangolo originale ABC accanto ai triangoli simili più piccoli ACD e CBD, che mostrano la proporzione q su b uguale a b su c",
            "caption": "Dimostrazione con triangoli simili: q su b è uguale a b su c, quindi moltiplicando in croce si ottiene b al quadrato uguale a c per q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio indica i valori dati, la sostituzione e la risposta finale. Il commento resta breve così che i calcoli restino visibili, e ogni esempio mantiene le unità coerenti dall'inizio alla fine.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm e [[q = 6.4]] cm, la formula dà [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], quindi [[b = 8]] cm. Il prodotto 64 è un quadrato perfetto, quindi la risposta è esatta, senza bisogno di arrotondamenti. Questo è lo stesso triangolo dell'esempio passo passo, e il suo altro cateto è 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Risultato quadrato perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Quando il prodotto è un quadrato perfetto, la risposta è esatta. L'altra proiezione qui è 16 cm, che si abbina a un cateto di 20 cm, formando il classico triangolo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Quadrato non perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 12]] cm e [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], quindi [[b \\approx 7.746]] cm. Il prodotto 60 non è un quadrato perfetto, quindi la risposta resta un'approssimazione arrotondata a tre cifre decimali. Nota che 7.746 cm è più corto dell'ipotenusa di 12 cm, come deve essere.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 12.5]] cm e [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], quindi [[b \\approx 6.325]] cm. Questo corrisponde al valore della guida sul cateto a, dove lo stesso prodotto 40 appariva con i ruoli di p e q scambiati, un utile promemoria che input diversi possono condividere un prodotto. Mantieni l'intero prodotto dentro la radice fino al passaggio di arrotondamento finale.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Triangolo più grande",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 50]] cm e [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Numeri più grandi non cambiano nulla del metodo: moltiplica, poi estrai la radice. L'altra proiezione qui è 18 cm, che si abbina a un cateto di 30 cm, formando il classico triangolo 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Proiezioni uguali",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 20]] cm e [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, quindi [[b \\approx 14.142]] cm. Proiezioni uguali significano che l'altezza colpisce il punto medio dell'ipotenusa, il che accade esattamente quando i due cateti sono uguali. Il triangolo è quindi un triangolo rettangolo isoscele, e il cateto a è uguale al cateto b.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 0.5]] m e [[q = 20]] cm, converti prima: 0.5 m è uguale a 50 cm. Quindi [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], perciò [[b \\approx 31.623]] cm. Moltiplicare 0.5 per 20 senza convertire avrebbe dato una radice di 10, una risposta sbagliata senza un'unità valida alle spalle.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 16]] ft e [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. Il prodotto 144 è un quadrato perfetto, quindi la risposta è esatta. Un rapido controllo di buon senso è superato: 12 ft sono tre quarti dell'ipotenusa, e l'altro cateto risulta circa 10.583 ft, più corto di b ma comunque un vero lato dello stesso triangolo.",
            },
          ],
          "h2": "Esempi svolti per trovare il cateto b dalla proiezione",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alcuni problemi danno p invece di q. Il calcolatore di questa pagina non accetta p, ma è solo una deviazione di un passaggio, non un vicolo cieco. Poiché le due proiezioni sommate danno l'ipotenusa, sottrai per ricavare prima q:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Prendi [[c = 25]] cm e [[p = 9]] cm. Sottraendo si ottiene [[q = 25 - 9 = 16]] cm. Ora si applica la formula ordinaria: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Se avessi inserito direttamente 9 come q, il calcolatore avrebbe restituito 15 cm, che è il cateto a, non il cateto b.",
            },
            {
              "kind": "p",
              "text": "Il <a href=\"/right-triangle-projection-p-calculator/\">calcolatore della proiezione p</a> può aiutare quando è p stessa a dover essere trovata, e il <a href=\"/right-triangle-projection-q-calculator/\">calcolatore della proiezione q</a> copre il passaggio inverso. In ogni caso, la regola resta la stessa: trova prima q, poi usa [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Come trovare il cateto b quando è nota l'altra proiezione",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un unico teorema collega tre quantità, quindi riordinarlo permette di trovare quella mancante. Le tre forme sono:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto mostra ogni riordinamento, che cosa trova e che cosa deve essere noto prima.",
            },
          ],
          "h2": "Relazione tra cateto b, ipotenusa e proiezione q",
          "table": {
            "headers": [
              "Quantità mancante",
              "Formula",
              "Valori noti necessari",
            ],
            "rows": [
              [
                "Cateto b",
                "[[b = \\sqrt{c \\times q}]]",
                "Ipotenusa c e proiezione q",
              ],
              [
                "Ipotenusa c",
                "[[c = \frac{b^2}{q}]]",
                "Cateto b e proiezione q",
              ],
              [
                "Proiezione q",
                "[[q = \frac{b^2}{c}]]",
                "Cateto b e ipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto a segue l'immagine speculare della formula del cateto b. Dove il cateto b si abbina alla proiezione q, il cateto a si abbina alla proiezione p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un unico triangolo coerente per vedere insieme entrambi i cateti: [[c = 25]], [[p = 9]] e [[q = 16]]. Allora [[a = \\sqrt{25 \\times 9} = 15]] e [[b = \\sqrt{25 \\times 16} = 20]]. I due cateti condividono la stessa ipotenusa ma attingono a proiezioni diverse, ed è per questo che identificare correttamente p e q decide quale cateto ottieni.",
            },
            {
              "kind": "p",
              "text": "I cateti si vincolano anche a vicenda tramite il teorema di Pitagora, trattato due sezioni più avanti: conoscere un cateto e l'ipotenusa determina l'altro. Per i problemi che partono da p anziché da q, il <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calcolatore del cateto a dalla proiezione</a> esegue lo stesso metodo con l'altro abbinamento.",
            },
          ],
          "h2": "Relazione tra cateto b e cateto a",
          "image": {
            "alt": "Triangolo rettangolo che confronta la proiezione p abbinata al cateto a con la proiezione q abbinata al cateto b, con c uguale a 25, p uguale a 9 e q uguale a 16",
            "caption": "Abbinati correttamente: a usa p (sqrt(25 x 9) = 15) e b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema delle proiezioni e il teorema di Pitagora concordano esattamente, e l'algebra mostra perché. Parti dalle due formule delle proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Somma la formula corrispondente per il cateto a, [[a^2 = c \\times p]], per ottenere:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo c a fattore comune nel membro di destra si ottiene [[a^2 + b^2 = c(p + q)]]. Poiché [[p + q = c]], la sostituzione dà il risultato familiare:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un controllo numerico con il triangolo 9-16-25 lo conferma: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. I due teoremi non sono rivali. Il teorema delle proiezioni divide la relazione pitagorica in un pezzo per cateto, e sommando i pezzi la si ricostruisce.",
            },
          ],
          "h2": "Relazione tra la proiezione q e il teorema di Pitagora",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre controlli indipendenti intercettano quasi ogni errore. Esegui almeno uno di essi su ogni risposta, e tutti e tre quando il problema è importante.",
            },
            {
              "kind": "h3",
              "text": "Metodo 1: Controllo con il teorema delle proiezioni",
            },
            {
              "kind": "p",
              "text": "Eleva la risposta al quadrato e confrontala con il prodotto di c e q. Per [[c = 25]], [[q = 16]] e [[b = 20]]: [[b^2 = 400]] e [[c \\times q = 400]], quindi la risposta è superata. Se i due numeri differiscono, o gli input o il passaggio della radice quadrata sono andati storti.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: Controllo con il teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Trova il cateto a da p, poi controlla [[a^2 + b^2 = c^2]]. Con [[p = 9]], [[q = 16]] e [[c = 25]]: [[a = 15]], [[b = 20]] e [[225 + 400 = 625 = 25^2]]. Questo controllo va oltre il calcolatore, poiché verifica l'intero triangolo, non solo una formula.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: Controlli di dimensione e di somma",
            },
            {
              "kind": "p",
              "text": "Conferma che q è più piccola di c, che [[p + q = c]] quando p è nota, e che il cateto b è più corto dell'ipotenusa. Nell'esempio, 16 è più piccolo di 25, [[9 + 16 = 25]], e 20 è più corto di 25. Qualsiasi fallimento qui indica un errore di etichettatura, non un errore di calcolo.",
            },
          ],
          "h2": "Come verificare il cateto b calcolato",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Otto proprietà seguono direttamente da [[b = \\sqrt{c \\times q}]] e dalla geometria che ne sta alla base. Ognuna funge anche da controllo di buon senso su una nuova risposta.",
            },
            {
              "items": [
                "Il cateto b è sempre più corto dell'ipotenusa in un triangolo rettangolo non degenere, poiché q è solo una parte di c.",
                "La proiezione q è sempre più piccola di c, ed è sempre positiva. Proiezioni nulle o negative non descrivono alcun triangolo reale.",
                "Aumentare q mantenendo c fisso aumenta b, perché il prodotto dentro la radice cresce.",
                "Aumentare c mantenendo q fisso aumenta b matematicamente, a condizione che i nuovi valori descrivano ancora un triangolo reale con q più piccola di c.",
                "Scambiare p e q cambia quale cateto viene calcolato: q dà il cateto b e p dà il cateto a.",
                "Proiezioni uguali producono cateti uguali. Con c = 20 e p = q = 10, entrambi i cateti sono uguali a 10 volte la radice quadrata di 2, circa 14.142.",
                "Il risultato è una lunghezza, non un'area. Il prodotto al quadrato è solo un passaggio intermedio, e la radice quadrata ripristina le unità di lunghezza ordinarie.",
                "Scalare tutte le misure dello stesso fattore scala il cateto b di quel fattore. Raddoppiare c e q raddoppia b, poiché il prodotto quadruplica e la sua radice raddoppia.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando l'altezza cade esattamente nel punto medio dell'ipotenusa, il triangolo è isoscele, e i due cateti devono coincidere, come mostra il diagramma qui sotto.",
            },
          ],
          "h2": "Proprietà importanti del cateto b dalla proiezione",
          "image": {
            "alt": "Triangolo rettangolo isoscele con ipotenusa 20, proiezioni p e q uguali di 10, e cateti a e b ciascuno uguale a 10 radice 2",
            "caption": "Proiezioni uguali: c = 20 con p = q = 10 dà a = b = 10 radice 2, circa 14.142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione. La maggior parte di essi risale all'etichettatura, non ai calcoli.",
            },
            {
              "kind": "steps",
              "steps": [
                "Dimenticare la radice quadrata: riportare cq come risposta. Con c = 10 e q = 6.4, la risposta è 8 cm, non 64.",
                "Confondere b con b al quadrato: 64 è b al quadrato in quell'esempio, mentre 8 è il cateto. Dì quale dei due intendi prima di scrivere un numero.",
                "Usare la proiezione p invece di q: inserire p restituisce il cateto a. Con c = 25 e p = 9, il risultato 15 è il cateto a, non il cateto b.",
                "Inserire un cateto nel campo dell'ipotenusa: l'ipotenusa è il lato opposto all'angolo retto e il lato più lungo. Un cateto inserito come c distorce ogni passaggio successivo.",
                "Confondere l'ipotenusa con una proiezione: c è l'intero lato, mentre q è solo una parte di esso. Controlla che q sia più piccola di c prima di calcolare.",
                "Usare q maggiore o uguale a c: un triangolo del genere non esiste, poiché q è parte di c. Ricontrolla le etichette del diagramma se succede.",
                "Mescolare centimetri e metri: converti prima, come nell'Esempio 7, dove 0.5 m è diventato 50 cm prima di moltiplicare per 20 cm.",
                "Usare misure negative: le lunghezze sono positive, quindi un valore negativo segnala un errore nei dati, non un cateto negativo.",
                "Applicare la formula a un triangolo non rettangolo: il teorema delle proiezioni richiede l'altezza tracciata da un angolo retto. Senza un angolo retto, non esiste una proiezione q in questo senso.",
                "Arrotondare troppo presto: arrotondare il prodotto prima di estrarre la radice sposta la risposta. Mantieni la piena precisione fino al passaggio finale.",
                "Usare la corrispondenza sbagliata tra i lati nel diagramma: abbinare q con a, o p con b, scambia i cateti. Abbina q al cateto che tocca il vertice B.",
                "Trattare l'altezza come una proiezione: l'altezza h è perpendicolare all'ipotenusa, non un suo pezzo, quindi non va mai nel campo q.",
              ],
            },
            {
              "kind": "p",
              "text": "Se una risposta sembra sbagliata, fermati e rietichetta il diagramma prima di ricalcolare. La maggior parte degli errori qui sopra svanisce una volta che p e q sono chiaramente segnati sull'ipotenusa e tutto il resto è messo da parte.",
            },
          ],
          "h2": "Errori comuni nel trovare il cateto b dalla proiezione",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[b^2 = c \\times q]] invece di ricorrere al teorema di Pitagora per abitudine. Gli esercizi sui triangoli simili usano la stessa impostazione, poiché la dimostrazione stessa è un esercizio di abbinamento dei lati corrispondenti.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa il teorema quando un triangolo rettangolo deve essere ricostruito da misure parziali: se un disegno fornisce l'ipotenusa e il piede dell'altezza, il cateto mancante segue senza rimisurare la figura. Gli insegnanti usano inoltre l'impostazione come lezione di collegamento tra l'addizione di segmenti e la similitudine.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: la geometria del triangolo rettangolo richiesta deve esistere davvero. Il teorema descrive relazioni geometriche esatte, non misure approssimative sul campo, quindi non sostituisce mai un rilievo accurato o una misurazione ingegneristica professionale. Nel suo contesto appropriato, però, trasforma due lunghezze note in una terza con una singola moltiplicazione e una radice quadrata.",
            },
          ],
          "h2": "Applicazioni pratiche del teorema delle proiezioni",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessuno dei valori ripete gli esempi svolti, e l'ultimo problema combina diverse idee di questa guida.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 36]] cm e proiezione [[q = 9]] cm. Trova il cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Proiezione decimale",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 26]] cm e [[q = 6.5]] cm, trova il cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Ipotenusa grande",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 100]] cm e [[q = 36]] cm, trova il cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un'ipotenusa misura [[c = 1.5]] m e la sua proiezione q misura 24 cm. Trova il cateto b in centimetri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova prima q da p e c",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 65]] cm e proiezione [[p = 49]] cm. Trova il cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Più passaggi con cateto a e Pitagora",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 50]] cm e [[q = 32]] cm, trova il cateto b, poi trova il cateto a e controlla il risultato con il teorema di Pitagora.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: Converti 1.5 m in 150 cm, poi [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: Prima [[q = 65 - 49 = 16]] cm, poi [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. L'altra proiezione è [[p = 50 - 32 = 18]] cm, quindi [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Controllo: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemi di pratica con soluzioni",
        },
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-intro": "Calcolatore del cateto b di un triangolo rettangolo dalla proiezione",
        "sec-calculate": "Calcolare il cateto b di un triangolo rettangolo dalla proiezione",
        "sec-what-leg-b": "Che cos'è il cateto b in un triangolo rettangolo?",
        "sec-what-projection-q": "Che cos'è la proiezione q in un triangolo rettangolo?",
        "sec-formula": "Formula del cateto b di un triangolo rettangolo dalla proiezione",
        "sec-why-sqrt": "Perché c'è una radice quadrata nella formula?",
        "sec-how": "Come usare il calcolatore del cateto b di un triangolo rettangolo",
        "sec-step-example": "Esempio passo passo per trovare il cateto b",
        "sec-diagram": "Diagramma del cateto b di un triangolo rettangolo dalla proiezione spiegato",
        "sec-proof": "Perché funziona il teorema delle proiezioni?",
        "sec-examples": "Esempi svolti per trovare il cateto b dalla proiezione",
        "sec-other-projection": "Come trovare il cateto b quando è nota l'altra proiezione",
        "sec-relationship": "Relazione tra cateto b, ipotenusa e proiezione q",
        "sec-leg-a": "Relazione tra cateto b e cateto a",
        "sec-pythagoras": "Relazione tra la proiezione q e il teorema di Pitagora",
        "sec-verify": "Come verificare il cateto b calcolato",
        "sec-properties": "Proprietà importanti del cateto b dalla proiezione",
        "sec-mistakes": "Errori comuni nel trovare il cateto b dalla proiezione",
        "sec-applications": "Applicazioni pratiche del teorema delle proiezioni",
        "sec-practice": "Problemi di pratica con soluzioni",
        "sec-related": "Esplora i calcolatori correlati per triangoli rettangoli",
        "sec-faq": "Domande frequenti",
      },
    },
};
