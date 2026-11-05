// legAFromProjectionGuideTranslations.bit.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B2_IT = {
  "it": {
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Qual è la formula per trovare il cateto a dalla proiezione p?",
          "answer": "La formula è [[a = \\sqrt{c \\times p}]], dove c è l'ipotenusa completa e p è la proiezione che appartiene al cateto a. Per esempio, [[c = 10]] cm e [[p = 3.6]] cm danno [[a = 6]] cm.",
        },
        {
          "question": "Perché si moltiplicano c e p?",
          "answer": "La moltiplicazione deriva dai triangoli simili. Il triangolo ACD è simile al triangolo ABC, quindi [[p / a = a / c]], e moltiplicando in croce si ottiene [[a^2 = c \\times p]]. Il prodotto è il quadrato del cateto, non il cateto stesso.",
        },
        {
          "question": "Perché è necessaria una radice quadrata?",
          "answer": "Perché il prodotto cp è uguale ad a al quadrato, non ad a. La radice quadrata annulla l'elevamento al quadrato e restituisce una lunghezza ordinaria. Senza di essa, nell'esempio con c = 10 e p = 3.6 si riporterebbe 36 invece di 6.",
        },
        {
          "question": "Che cosa rappresenta la proiezione p?",
          "answer": "La proiezione p è il segmento dell'ipotenusa accanto al vertice A, creato quando l'altezza tracciata dall'angolo retto incontra l'ipotenusa. Nel triangolo ABC con altezza CD, [[p = AD]], e si trova lungo l'ipotenusa.",
        },
        {
          "question": "La proiezione p è uguale al cateto a?",
          "answer": "No. Il cateto a è il lato AC, uno dei lati che formano l'angolo retto, mentre la proiezione p è il segmento AD lungo l'ipotenusa. Sono lunghezze diverse in posizioni diverse, legate soltanto da [[a^2 = c \\times p]].",
        },
        {
          "question": "Posso usare la proiezione q per trovare il cateto a?",
          "answer": "Non direttamente. La proiezione q si abbina al cateto b, quindi inserendo q si ottiene il cateto b. Per trovare il cateto a da q, prima ricava p con [[p = c - q]], poi usa [[a = \\sqrt{c \\times p}]].",
        },
        {
          "question": "Che cosa faccio se conosco soltanto la proiezione q?",
          "answer": "Sottraila dall'ipotenusa: [[p = c - q]]. Con [[c = 25]] cm e [[q = 16]] cm, [[p = 9]] cm, e poi [[a = \\sqrt{25 \\times 9} = 15]] cm.",
        },
        {
          "question": "La proiezione p può essere uguale all'ipotenusa?",
          "answer": "No. La proiezione p è soltanto una parte dell'ipotenusa, quindi deve essere più piccola di c. Se p fosse uguale a c, q sarebbe zero e il triangolo sarebbe degenere invece di un vero triangolo rettangolo.",
        },
        {
          "question": "Come verifico il cateto calcolato?",
          "answer": "Eleva la risposta al quadrato e controlla che sia uguale a [[c \\times p]]. Puoi anche trovare il cateto b da q e verificare [[a^2 + b^2 = c^2]], e confermare che p è più piccola di c e che il cateto a è più corto dell'ipotenusa.",
        },
        {
          "question": "Che cosa succede quando p e q sono uguali?",
          "answer": "L'altezza cade nel punto medio dell'ipotenusa, e i due cateti sono uguali, quindi il triangolo è un triangolo rettangolo isoscele. Con [[c = 20]] cm e [[p = q = 10]] cm, entrambi i cateti sono uguali a [[10\\sqrt{2}]] cm, circa 14.142 cm.",
        },
        {
          "question": "Posso trovare il cateto b con lo stesso teorema?",
          "answer": "Sì, con la formula speculare [[b = \\sqrt{c \\times q}]]. Il cateto b si abbina alla proiezione q, proprio come il cateto a si abbina a p. Il <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calcolatore del cateto b dalla proiezione</a> è pensato per quel calcolo.",
        },
        {
          "question": "Il teorema delle proiezioni è legato al teorema di Pitagora?",
          "answer": "Sì. Sommando le due formule delle proiezioni si ottiene [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], poiché [[p + q = c]]. Il teorema delle proiezioni divide la relazione pitagorica in una parte per ciascun cateto.",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per il triangolo rettangolo",
      "relatedIntro": "Scegli lo strumento successivo in base alle misure che già conosci, perché ogni calcolatore qui sotto gestisce un compito specifico sul triangolo rettangolo.",
      "relatedItems": [
        "Calcolatore della proiezione del triangolo rettangolo",
        "Calcolatore della proiezione P del triangolo rettangolo",
        "Calcolatore della proiezione Q del triangolo rettangolo",
        "Calcolatore del cateto B dalla proiezione del triangolo rettangolo",
        "Calcolatore dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        "Calcolatore dell'altezza dalle proiezioni del triangolo rettangolo",
        "Calcolatore dei lati del triangolo rettangolo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questo calcolatore trova il cateto a di un triangolo rettangolo quando conosci l'ipotenusa completa c e la proiezione p che appartiene al cateto a. Inserisci queste due lunghezze, e restituisce la lunghezza effettiva del lato del cateto a, non un valore al quadrato e non un segmento di proiezione. La formula è [[a = \\sqrt{c \\times p}]], dove c è l'ipotenusa completa e p è il segmento dell'ipotenusa accanto al cateto a.",
            },
            {
              "kind": "p",
              "text": "Per esempio, se [[c = 10]] cm e [[p = 3.6]] cm, allora [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Il prodotto 36 è soltanto un passaggio intermedio. Estrarre la radice quadrata lo riporta a una lunghezza, e quella lunghezza è il lato che stai cercando.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore si trova in cima a questa pagina, seguito dalla formula, da un diagramma con etichette, da una dimostrazione del teorema delle proiezioni, da esempi svolti e da controlli che puoi eseguire su qualsiasi risposta. La guida è adatta agli studenti della scuola media e superiore, agli insegnanti, ai tutor e ai genitori che aiutano con i compiti di geometria.",
            },
          ],
          "h2": "Calcolatore del cateto A del triangolo rettangolo dalla proiezione",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore ha due campi di inserimento. Il primo accetta l'ipotenusa c, il lato completo opposto all'angolo retto. Il secondo accetta la proiezione p, il segmento dell'ipotenusa che appartiene al cateto a. Entrambe le lunghezze devono usare la stessa unità di misura, quindi converti prima se una misura è in centimetri e l'altra in metri.",
            },
            {
              "kind": "p",
              "text": "La proiezione p deve essere più piccola di c. Questa regola è insita nella geometria: p è soltanto una parte dell'ipotenusa, quindi non può mai essere uguale all'intero lato né superarlo. Se il tuo valore di p è maggiore di c, probabilmente hai inserito un cateto, l'altezza o la proiezione sbagliata.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola il cateto a per vedere il risultato, e usa Reimposta per cancellare entrambi i campi prima di un nuovo problema. Il risultato è una lunghezza nell'unità inserita, quindi un'ipotenusa di 10 cm e una proiezione di 3.6 cm restituiscono 6 cm, senza bisogno di ulteriori conversioni.",
            },
          ],
          "h2": "Calcola il cateto A del triangolo rettangolo dalla proiezione",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due lati perpendicolari, chiamati cateti, e un lato più lungo, chiamato ipotenusa. I due cateti si incontrano nell'angolo retto, e l'ipotenusa si trova di fronte a quell'angolo. In questa guida il triangolo è ABC con l'angolo retto in C, il cateto a è il lato AC, il cateto b è il lato BC, e l'ipotenusa c è il lato AB.",
            },
            {
              "kind": "p",
              "text": "Il cateto a è uno dei due lati che formano l'angolo retto, quindi è un vero lato del triangolo. Non è un segmento tracciato all'interno del triangolo, e non è la proiezione p. La proiezione p giace piatta lungo l'ipotenusa, mentre il cateto a va dal vertice A al vertice dell'angolo retto C. Tenere distinti questi due ruoli è il primo passo per usare la formula correttamente.",
            },
            {
              "kind": "p",
              "text": "Il cateto a differisce dal cateto b soltanto per la posizione: il cateto a tocca il vertice A, e il cateto b tocca il vertice B. Ogni cateto ha la propria proiezione, ed è per questo che la formula per a usa p mentre la formula per b usa q, un abbinamento fissato dalla denominazione.",
            },
            {
              "kind": "p",
              "text": "In qualsiasi triangolo rettangolo non degenere, il cateto a è più corto dell'ipotenusa. Questo offre un rapido controllo di plausibilità su ogni risposta: se il cateto a calcolato risulta più lungo di c, qualcosa è andato storto negli input o nei calcoli, e le etichette del diagramma sono il primo punto da controllare.",
            },
          ],
          "h2": "Che cos'è il cateto A in un triangolo rettangolo?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Traccia l'altezza dal vertice dell'angolo retto C perpendicolarmente all'ipotenusa AB. Essa incontra l'ipotenusa in un punto chiamato piede, indicato con D. Quel punto divide l'ipotenusa in due segmenti adiacenti, e quei segmenti sono le proiezioni. Il segmento AD è la proiezione p, e il segmento DB è la proiezione q.",
            },
            {
              "kind": "p",
              "text": "La proiezione p appartiene al cateto a perché si trova accanto al vertice A, lo stesso vertice in cui inizia il cateto a. Nel piccolo triangolo ACD, il cateto a è l'ipotenusa e p è uno dei suoi cateti, ed è questo il legame geometrico che fa funzionare il teorema delle proiezioni. La proiezione q, con lo stesso ragionamento, appartiene al cateto b, che tocca il vertice B.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni sono lunghezze lungo l'ipotenusa, misurate nella stessa unità degli altri lati. Non sono perpendicolari a nulla, e non sono lati del triangolo originale. Una proiezione si può immaginare al meglio come l'ombra che un cateto proietta sull'ipotenusa quando l'altezza scende perpendicolarmente su di essa.",
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
              "text": "Questa addizione è utile di per sé. Se conosci c e una proiezione, puoi trovare l'altra per sottrazione, un passaggio che la sezione successiva sull'altra proiezione sviluppa per intero.",
            },
          ],
          "h2": "Che cos'è la proiezione P in un triangolo rettangolo?",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema delle proiezioni afferma che il quadrato del cateto a è uguale all'ipotenusa moltiplicata per la sua proiezione:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Estraendo la radice quadrata positiva di entrambi i membri si ottiene la formula operativa di questa pagina:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Il calcolo procede in due fasi distinte. La fase 1 moltiplica l'ipotenusa per la proiezione, e il risultato è una lunghezza al quadrato, non un lato. La fase 2 estrae la radice quadrata positiva, che riconverte quella lunghezza al quadrato in una lunghezza ordinaria. Saltare la fase 2 è l'errore più comune con questa formula, e la sezione successiva spiega perché la radice quadrata non può essere omessa.",
            },
            {
              "kind": "p",
              "text": "Le unità richiedono attenzione in entrambe le fasi. Se c e p sono entrambi in centimetri, il loro prodotto è in centimetri quadrati, e la radice quadrata restituisce centimetri. Mescolare le unità, per esempio metri per c e centimetri per p, dà un prodotto senza senso, quindi converti a un'unica unità prima di moltiplicare. Si usa la radice positiva perché la lunghezza di un lato è sempre positiva.",
            },
            {
              "kind": "p",
              "text": "Un piccolo esempio numerico mostra entrambe le fasi in azione. Con [[c = 10]] cm e [[p = 3.6]] cm, la fase 1 dà [[10 \\times 3.6 = 36]], e la fase 2 dà [[a = \\sqrt{36} = 6]] cm. Il numero 36 da solo non risponde a nessuna domanda. Solo dopo la radice quadrata diventa la lunghezza del cateto.",
            },
          ],
          "h2": "Formula del cateto A del triangolo rettangolo dalla proiezione",
          "image": {
            "alt": "Triangolo rettangolo ABC con altezza CD, che mostra il cateto a al quadrato uguale all'ipotenusa c moltiplicata per la proiezione p",
            "caption": "Il teorema delle proiezioni: a al quadrato è uguale a c per p, quindi a è uguale alla radice quadrata di c per p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "La radice quadrata è presente perché la moltiplicazione produce una quantità al quadrato. Il teorema non dice che il cateto a è uguale al prodotto di c e p. Dice che il quadrato del cateto a è uguale a quel prodotto. Annullare un quadrato richiede una radice quadrata, proprio come annullare un raddoppio richiede il dimezzamento.",
            },
            {
              "kind": "p",
              "text": "Prendi [[c = 10]] e [[p = 3.6]]. Il loro prodotto è 36, che è [[a^2]], il quadrato del cateto. Il cateto stesso è il numero che moltiplicato per se stesso dà 36, cioè 6. Scrivere [[a = 36]] significherebbe affermare un lato di 36 unità in un triangolo la cui ipotenusa è soltanto 10, il che è chiaramente impossibile.",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto tiene distinte le tre quantità, poiché confonderle causa la maggior parte degli errori con questa formula.",
            },
          ],
          "h2": "Perché c'è una radice quadrata nella formula?",
          "table": {
            "headers": [
              "Grandezza",
              "Significato",
              "Esempio con c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "La lunghezza del cateto stessa",
                "6",
              ],
              [
                "a al quadrato",
                "La lunghezza del cateto moltiplicata per se stessa",
                "36",
              ],
              [
                "c per p",
                "Il prodotto che il teorema eguaglia ad a al quadrato",
                "36",
              ],
              [
                "Radice quadrata di cp",
                "Il passaggio che ricava a da a al quadrato",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci brevi passaggi ti portano da un diagramma con etichette a una risposta verificata.",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua il triangolo rettangolo nel tuo problema e conferma che ha un angolo retto.",
                "Trova l'altezza tracciata dall'angolo retto e segna dove incontra l'ipotenusa.",
                "Individua l'ipotenusa completa c, il lato opposto all'angolo retto.",
                "Individua la proiezione p, il segmento dell'ipotenusa accanto al vertice A, dove inizia il cateto a.",
                "Verifica che p sia più piccola di c. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Converti c e p alla stessa unità se sono state date in unità diverse.",
                "Inserisci c nel campo Ipotenusa c.",
                "Inserisci p nel campo Proiezione p. Non inserire qui q, perché restituirebbe il cateto b.",
                "Fai clic su Calcola il cateto a e leggi il risultato.",
                "Usa Reimposta prima di iniziare un nuovo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "Il calcolatore non accetta q, quindi un problema che fornisce soltanto q richiede un passaggio di sottrazione in più, trattato qui sotto. Inserire q nel campo p produce comunque un numero, ma sarà il cateto sbagliato, quindi il controllo delle etichette al passaggio 4 è il più importante.",
            },
          ],
          "h2": "Come usare il calcolatore del cateto A del triangolo rettangolo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm e [[p = 3.6]] cm. I quattro passaggi qui sotto mostrano lo svolgimento completo, senza salti.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: a = sqrt(cp).",
                "Sostituisci i valori: a = sqrt(10 x 3.6).",
                "Moltiplica dentro la radice: a = sqrt(36).",
                "Estrai la radice quadrata: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta 6 cm è l'effettivo lato perpendicolare AC, non una proiezione e non un'area. Una breve verifica chiude il cerchio: [[a^2 = 6^2 = 36]] e [[c \\times p = 10 \\times 3.6 = 36]], quindi entrambi i membri del teorema concordano.",
            },
            {
              "kind": "p",
              "text": "Per riferimento, l'altra proiezione è [[q = 10 - 3.6 = 6.4]] cm, il cateto b è [[b = \\sqrt{10 \\times 6.4} = 8]] cm, e l'altezza è [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, a conferma del noto triangolo rettangolo 6-8-10.",
            },
          ],
          "h2": "Esempio passo passo per trovare il cateto A",
          "image": {
            "alt": "Triangolo rettangolo con ipotenusa di 10 cm e proiezione di 3.6 cm, svolto per dare il cateto a uguale a 6 cm",
            "caption": "Esempio svolto: c = 10 cm e p = 3.6 cm danno a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b, e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolarmente ad AB e la tocca in D, e il segno di angolo retto in D conferma che CD è davvero perpendicolare.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa in due parti: il segmento AD è la proiezione p e il segmento DB è la proiezione q. Il cateto a e la proiezione p sono evidenziati perché sono la coppia di cui tratta questa pagina. Segui il diagramma in questo ordine per fissare le etichette: parti da A, percorri il cateto a fino a C, poi il cateto b fino a B, poi torna lungo l'ipotenusa da B ad A, fermandoti in D per vedere la divisione in q e p.",
            },
            {
              "kind": "p",
              "text": "L'abbinamento di a con p diventa visibile nel piccolo triangolo ACD, dove il cateto a è l'ipotenusa e p è il lato che giace lungo la grande ipotenusa. Poiché il triangolo ACD è simile al triangolo ABC, il rapporto tra p e a nel piccolo triangolo è uguale al rapporto tra a e c in quello grande, e la sezione sulla dimostrazione trasforma questo in [[a^2 = cp]].",
            },
          ],
          "h2": "Diagramma del cateto A del triangolo rettangolo dalla proiezione spiegato",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD verso l'ipotenusa AB, cateto a e proiezione p evidenziati, con cateti a e b, ipotenusa c, proiezioni p e q e altezza h con etichette",
            "caption": "Triangolo principale ABC: l'altezza CD divide l'ipotenusa AB nella proiezione p (AD) e nella proiezione q (DB), con il cateto a (AC) evidenziato.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione si basa sui triangoli simili. Tracciando l'altezza CD si divide il triangolo ABC in due triangoli rettangoli più piccoli, ACD e CBD, ed entrambi sono simili al triangolo originale. La similitudine significa che i loro lati corrispondenti restano nello stesso rapporto, e uno di quei rapporti dà direttamente il teorema delle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Concentrati sul triangolo ACD e sull'intero triangolo ABC. Entrambi contengono l'angolo in A, ed entrambi contengono un angolo retto, quindi anche i loro terzi angoli devono coincidere. Abbinando i lati che si trovano nelle stesse posizioni si ottiene la proporzione:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Ora sostituisci i simboli standard: [[AD = p]], [[AC = a]], e [[AB = c]]. La proporzione diventa:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplicando in croce si eliminano le frazioni. Il numeratore di sinistra per il denominatore di destra è uguale al numeratore di destra per il denominatore di sinistra, quindi [[p \\times c = a \\times a]], che è:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Estraendo la radice quadrata positiva di entrambi i membri si conclude la dimostrazione, ottenendo [[a = \\sqrt{c \\times p}]]. Lo stesso ragionamento applicato all'altro piccolo triangolo, CBD, dà [[b^2 = c \\times q]]. La similitudine fa tutto il lavoro: i lati corrispondenti di triangoli simili restano proporzionali.",
            },
          ],
          "h2": "Perché funziona il teorema delle proiezioni?",
          "image": {
            "alt": "Triangolo rettangolo originale ABC accanto ai triangoli simili più piccoli ACD e CBD, che mostrano la proporzione p su a uguale ad a su c",
            "caption": "Dimostrazione con triangoli simili: p su a è uguale ad a su c, quindi moltiplicando in croce si ottiene a al quadrato uguale a c per p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio indica i valori dati, la sostituzione e la risposta finale. Il commento resta breve così l'aritmetica resta visibile, e ogni esempio mantiene le unità coerenti dall'inizio alla fine.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm e [[p = 4]] cm, la formula dà [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], quindi [[a \\approx 6.325]] cm. Il prodotto 40 non è un quadrato perfetto, quindi la risposta resta un'approssimazione arrotondata a tre cifre decimali. Nota che 6.325 cm è più corto dell'ipotenusa di 10 cm, come deve essere.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Risultato con quadrato perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm e [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Quando il prodotto è un quadrato perfetto, la risposta è esatta, senza bisogno di arrotondamenti. Questo è lo stesso triangolo dell'esempio passo passo, e il suo altro cateto è 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Triangolo più grande",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] m e [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Numeri più grandi non cambiano nulla del metodo: moltiplica, poi estrai la radice. L'altra proiezione qui è 16 m, che si abbina a un cateto di 20 m, formando il classico triangolo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 12.5]] cm e [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], quindi [[a \\approx 6.325]] cm. Questo coincide in valore con l'Esempio 1 perché entrambi i prodotti sono uguali a 40, un utile promemoria che input diversi possono condividere un prodotto. Mantieni il prodotto completo dentro la radice fino al passaggio finale di arrotondamento.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Proiezioni uguali sull'ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 20]] cm e [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, quindi [[a \\approx 14.142]] cm. Proiezioni uguali significano che l'altezza colpisce il punto medio dell'ipotenusa, il che accade esattamente quando i due cateti sono uguali. Il triangolo è quindi un triangolo rettangolo isoscele, e il cateto b è uguale al cateto a.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Misure piccole",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 8]] mm e [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Le unità piccole funzionano esattamente come quelle grandi, e la risposta resta in millimetri perché entrambi gli input erano in millimetri. Ridurre un problema in scala non cambia mai i passaggi.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 0.5]] m e [[p = 20]] cm, converti prima: 0.5 m è uguale a 50 cm. Poi [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], quindi [[a \\approx 31.623]] cm. Moltiplicare 0.5 per 20 senza convertire avrebbe dato una radice di 10, una risposta sbagliata senza un'unità valida dietro di essa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 16]] ft e [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. Il prodotto 64 è un quadrato perfetto, quindi la risposta è esatta. Un rapido controllo di plausibilità è superato: 8 ft è la metà dell'ipotenusa, e l'altro cateto risulta circa 13.856 ft, più lungo di a ma ancora più corto di 16 ft.",
            },
          ],
          "h2": "Esempi svolti per trovare il cateto A dalla proiezione",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alcuni problemi danno q invece di p. Il calcolatore di questa pagina non accetta q, ma si tratta soltanto di una deviazione di un passaggio, non di un vicolo cieco. Poiché le due proiezioni sommate danno l'ipotenusa, sottrai per ricavare prima p:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Prendi [[c = 25]] cm e [[q = 16]] cm. Sottraendo si ottiene [[p = 25 - 16 = 9]] cm. Ora si applica la formula ordinaria: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Se avessi inserito 16 direttamente come p, il calcolatore avrebbe restituito 20 cm, che è il cateto b, non il cateto a.",
            },
            {
              "kind": "p",
              "text": "Il <a href=\"/right-triangle-projection-q-calculator/\">calcolatore della proiezione q</a> può aiutare quando è q stessa a dover essere trovata, e il <a href=\"/right-triangle-projection-p-calculator/\">calcolatore della proiezione p</a> copre il passaggio inverso. In ogni caso, la regola resta la stessa: trova prima p, poi usa [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Come trovare il cateto A quando è nota l'altra proiezione",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un teorema lega tre grandezze, quindi riordinandolo si trova quella mancante. Le tre forme sono:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto mostra ogni riordinamento, che cosa trova e che cosa deve essere noto prima.",
            },
          ],
          "h2": "Relazione tra cateto A, ipotenusa e proiezione P",
          "table": {
            "headers": [
              "Grandezza mancante",
              "Formula",
              "Valori noti necessari",
            ],
            "rows": [
              [
                "Cateto a",
                "a = sqrt(cp)",
                "Ipotenusa c e proiezione p",
              ],
              [
                "Ipotenusa c",
                "c = a al quadrato / p",
                "Cateto a e proiezione p",
              ],
              [
                "Proiezione p",
                "p = a al quadrato / c",
                "Cateto a e ipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto b segue la formula speculare di quella del cateto a. Dove il cateto a si abbina alla proiezione p, il cateto b si abbina alla proiezione q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa un unico triangolo coerente per vedere entrambi i cateti insieme: [[c = 25]], [[p = 9]], e [[q = 16]]. Allora [[a = \\sqrt{25 \\times 9} = 15]] e [[b = \\sqrt{25 \\times 16} = 20]]. I due cateti condividono la stessa ipotenusa ma attingono a proiezioni diverse, ed è per questo che identificare correttamente p e q decide quale cateto ottieni.",
            },
            {
              "kind": "p",
              "text": "I cateti si vincolano anche a vicenda tramite il teorema di Pitagora, trattato due sezioni più sotto: conoscere un cateto e l'ipotenusa determina l'altro. Per i problemi che partono da q invece che da p, il <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calcolatore del cateto b dalla proiezione</a> esegue lo stesso metodo con l'altro abbinamento.",
            },
          ],
          "h2": "Relazione tra cateto A e cateto B",
          "image": {
            "alt": "Triangolo rettangolo che confronta la proiezione p abbinata al cateto a con la proiezione q abbinata al cateto b, con c uguale a 25, p uguale a 9 e q uguale a 16",
            "caption": "Abbinati correttamente: a usa p (sqrt(25 x 9) = 15) e b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
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
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Aggiungi la formula corrispondente per il cateto b, [[b^2 = c \\times q]], per ottenere:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo c a fattor comune nel secondo membro si ottiene [[a^2 + b^2 = c(p + q)]]. Poiché [[p + q = c]], la sostituzione dà il noto risultato:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un controllo numerico con il triangolo 9-16-25 lo conferma: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. I due teoremi non sono rivali. Il teorema delle proiezioni divide la relazione pitagorica in una parte per ciascun cateto, e sommando le parti la si ricostruisce.",
            },
          ],
          "h2": "Relazione tra proiezione P e teorema di Pitagora",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre controlli indipendenti individuano quasi ogni errore. Esegui almeno uno di essi su ogni risposta, ed eseguili tutti e tre quando il problema conta.",
            },
            {
              "kind": "h3",
              "text": "Metodo 1: Controllo con il teorema delle proiezioni",
            },
            {
              "kind": "p",
              "text": "Eleva la risposta al quadrato e confrontala con il prodotto di c e p. Per [[c = 25]], [[p = 9]], e [[a = 15]]: [[a^2 = 225]] e [[c \\times p = 225]], quindi la risposta supera il controllo. Se i due numeri differiscono, o gli input o il passaggio della radice quadrata sono andati storti.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: Controllo con il teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Trova il cateto b da q, poi verifica [[a^2 + b^2 = c^2]]. Con [[p = 9]], [[q = 16]], e [[c = 25]]: [[a = 15]], [[b = 20]], e [[225 + 400 = 625 = 25^2]]. Questo controllo va oltre il calcolatore, poiché verifica l'intero triangolo, non soltanto la singola formula.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: Controlli di dimensione e di somma",
            },
            {
              "kind": "p",
              "text": "Conferma che p è più piccola di c, che [[p + q = c]] quando q è nota, e che il cateto a è più corto dell'ipotenusa. Nell'esempio, 9 è più piccolo di 25, [[9 + 16 = 25]], e 15 è più corto di 25. Qualsiasi fallimento qui indica un errore di etichettatura, non un errore di calcolo.",
            },
          ],
          "h2": "Come verificare il cateto A calcolato",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Otto proprietà derivano direttamente da [[a = \\sqrt{c \\times p}]] e dalla geometria che ne sta alla base. Ognuna di esse vale anche come controllo di plausibilità su una nuova risposta.",
            },
            {
              "items": [
                "Il cateto a è sempre più corto dell'ipotenusa in un triangolo rettangolo non degenere, poiché p è soltanto una parte di c.",
                "La proiezione p è sempre più piccola di c, ed è sempre positiva. Proiezioni nulle o negative non descrivono alcun triangolo reale.",
                "Aumentare p mantenendo c fisso aumenta a, perché il prodotto dentro la radice cresce.",
                "Aumentare c mantenendo p fisso aumenta a dal punto di vista matematico, purché i nuovi valori descrivano ancora un triangolo reale con p più piccola di c.",
                "Scambiare p e q cambia quale cateto viene calcolato: p dà il cateto a e q dà il cateto b.",
                "Proiezioni uguali producono cateti uguali. Con c = 20 e p = q = 10, entrambi i cateti sono uguali a 10 volte la radice quadrata di 2, circa 14.142.",
                "Il risultato è una lunghezza, non un'area. Il prodotto al quadrato è soltanto un passaggio intermedio, e la radice quadrata ripristina le unità di lunghezza ordinarie.",
                "Scalare tutte le misure dello stesso fattore scala il cateto a di quel fattore. Raddoppiare c e p raddoppia a, poiché il prodotto quadruplica e la sua radice raddoppia.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando l'altezza cade esattamente nel punto medio dell'ipotenusa, il triangolo è isoscele, e i due cateti devono coincidere, come mostra il diagramma qui sotto.",
            },
          ],
          "h2": "Proprietà importanti del cateto A dalla proiezione",
          "image": {
            "alt": "Triangolo rettangolo isoscele con ipotenusa 20, proiezioni uguali p e q di 10, e cateti a e b ciascuno uguale a 10 radice di 2",
            "caption": "Proiezioni uguali: c = 20 con p = q = 10 dà a = b = 10 radice di 2, circa 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione. La maggior parte di essi risale all'etichettatura, non all'aritmetica.",
            },
            {
              "kind": "steps",
              "steps": [
                "Dimenticare la radice quadrata: riportare cp come risposta. Con c = 10 e p = 3.6, la risposta è 6 cm, non 36.",
                "Confondere a con a al quadrato: 36 è a al quadrato in quell'esempio, mentre 6 è il cateto. Di' quale intendi prima di scrivere un numero.",
                "Usare la proiezione q invece di p: inserendo q si ottiene il cateto b. Con c = 25 e q = 16, il risultato 20 è il cateto b, non il cateto a.",
                "Inserire un cateto nel campo dell'ipotenusa: l'ipotenusa è il lato opposto all'angolo retto e il lato più lungo. Un cateto inserito come c distorce ogni passaggio successivo.",
                "Confondere l'ipotenusa con una proiezione: c è l'intero lato, mentre p è soltanto una parte di esso. Verifica che p sia più piccola di c prima di calcolare.",
                "Usare p maggiore o uguale a c: un simile triangolo non esiste, poiché p è parte di c. Ricontrolla le etichette del diagramma se questo accade.",
                "Mescolare centimetri e metri: converti prima, come nell'Esempio 7, dove 0.5 m è diventato 50 cm prima di moltiplicare per 20 cm.",
                "Usare misure negative: le lunghezze sono positive, quindi un valore negativo segnala un errore nei dati, non un cateto negativo.",
                "Applicare la formula a un triangolo non rettangolo: il teorema delle proiezioni richiede l'altezza tracciata da un angolo retto. Senza un angolo retto, non esiste una proiezione p in questo senso.",
                "Arrotondare troppo presto: arrotondare il prodotto prima di estrarre la radice sposta la risposta. Mantieni la piena precisione fino al passaggio finale.",
                "Usare la corrispondenza sbagliata tra i lati nel diagramma: abbinare p a b, o q ad a, scambia i cateti. Abbina p al cateto che tocca il vertice A.",
                "Trattare l'altezza come una proiezione: l'altezza h è perpendicolare all'ipotenusa, non una sua parte, quindi non appartiene mai al campo p.",
              ],
            },
            {
              "kind": "p",
              "text": "Se una risposta sembra sbagliata, fermati e rietichetta il diagramma prima di ricalcolare. La maggior parte degli errori qui sopra svanisce una volta che p e q sono chiaramente segnati sull'ipotenusa e tutto il resto è messo da parte.",
            },
          ],
          "h2": "Errori comuni nel trovare il cateto A dalla proiezione",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[a^2 = c \\times p]] invece di ricorrere per abitudine al teorema di Pitagora. Gli esercizi sui triangoli simili usano la stessa impostazione, poiché la dimostrazione stessa è un esercizio sull'abbinamento dei lati corrispondenti.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa il teorema quando un triangolo rettangolo deve essere ricostruito da misure parziali: se un disegno fornisce l'ipotenusa e il piede dell'altezza, il cateto mancante segue senza rimisurare la figura. Gli insegnanti usano inoltre l'impostazione come lezione ponte tra l'addizione di segmenti e la similitudine.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: la geometria del triangolo rettangolo richiesta deve esistere davvero. Il teorema descrive relazioni geometriche esatte, non misure approssimative sul campo, quindi non sostituisce mai un rilievo accurato o una misurazione ingegneristica professionale. Nel suo ambito proprio, però, trasforma due lunghezze note in una terza con una sola moltiplicazione e una radice quadrata.",
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
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 36]] cm e proiezione [[p = 4]] cm. Trova il cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Proiezione decimale",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 26]] cm e [[p = 6.5]] cm, trova il cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Ipotenusa grande",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 100]] cm e [[p = 64]] cm, trova il cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un'ipotenusa misura [[c = 1.2]] m e la sua proiezione p misura 30 cm. Trova il cateto a in centimetri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova prima p da q e c",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 65]] cm e proiezione [[q = 49]] cm. Trova il cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Più passaggi con il cateto b e Pitagora",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 50]] cm e [[p = 18]] cm, trova il cateto a, poi trova il cateto b e verifica il risultato con il teorema di Pitagora.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: Converti 1.2 m in 120 cm, poi [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: Prima [[p = 65 - 49 = 16]] cm, poi [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. L'altra proiezione è [[q = 50 - 18 = 32]] cm, quindi [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Verifica: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemi di pratica con risposte",
        },
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-intro": "Calcolatore del cateto A del triangolo rettangolo dalla proiezione",
        "sec-calculate": "Calcola il cateto A del triangolo rettangolo dalla proiezione",
        "sec-what-leg-a": "Che cos'è il cateto A in un triangolo rettangolo?",
        "sec-what-projection-p": "Che cos'è la proiezione P in un triangolo rettangolo?",
        "sec-formula": "Formula del cateto A del triangolo rettangolo dalla proiezione",
        "sec-why-sqrt": "Perché c'è una radice quadrata nella formula?",
        "sec-how": "Come usare il calcolatore del cateto A del triangolo rettangolo",
        "sec-step-example": "Esempio passo passo per trovare il cateto A",
        "sec-diagram": "Diagramma del cateto A del triangolo rettangolo dalla proiezione spiegato",
        "sec-proof": "Perché funziona il teorema delle proiezioni?",
        "sec-examples": "Esempi svolti per trovare il cateto A dalla proiezione",
        "sec-other-projection": "Come trovare il cateto A quando è nota l'altra proiezione",
        "sec-relationship": "Relazione tra cateto A, ipotenusa e proiezione P",
        "sec-leg-b": "Relazione tra cateto A e cateto B",
        "sec-pythagoras": "Relazione tra proiezione P e teorema di Pitagora",
        "sec-verify": "Come verificare il cateto A calcolato",
        "sec-properties": "Proprietà importanti del cateto A dalla proiezione",
        "sec-mistakes": "Errori comuni nel trovare il cateto A dalla proiezione",
        "sec-applications": "Applicazioni pratiche del teorema delle proiezioni",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-related": "Esplora i calcolatori correlati per il triangolo rettangolo",
        "sec-faq": "Domande frequenti",
      },
    },
};
