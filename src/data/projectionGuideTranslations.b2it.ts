// projectionGuideTranslations.bit.ts: Right Triangle Projection
// Guide (Page 33 of 45) translation.
export const PRJ_B2_IT = {
  "it": {
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "answer": "Una proiezione è un segmento dell'ipotenusa creato quando l'altezza tracciata dall'angolo retto incontra l'ipotenusa. L'altezza divide l'ipotenusa in due parti, p e q. Ogni parte è la proiezione di un cateto sull'ipotenusa.",
          "question": "Che cos'è una proiezione in un triangolo rettangolo?",
        },
        {
          "answer": "La proiezione p si trova accanto al vertice A e appartiene al cateto a, mentre la proiezione q si trova accanto al vertice B e appartiene al cateto b. Sono le due parti della stessa ipotenusa, e [[p + q = c]]. Scambiarle significa scambiare i cateti che descrivono.",
          "question": "Qual è la differenza tra la proiezione p e la proiezione q?",
        },
        {
          "answer": "La formula è [[p = a^2 / c]], dove a è il cateto a e c è l'ipotenusa completa. Eleva al quadrato prima il cateto a, poi dividi per c. Con [[a = 9]] cm e [[c = 15]] cm, [[p = 81 / 15 = 5.4]] cm.",
          "question": "Qual è la formula per la proiezione p?",
        },
        {
          "answer": "La formula è [[q = b^2 / c]], dove b è il cateto b e c è l'ipotenusa completa. Eleva al quadrato prima il cateto b, poi dividi per c. Con [[b = 12]] cm e [[c = 15]] cm, [[q = 144 / 15 = 9.6]] cm.",
          "question": "Qual è la formula per la proiezione q?",
        },
        {
          "answer": "Usa [[a = \\sqrt{c \\times p}]]. Moltiplica l'ipotenusa c per la proiezione p, poi calcola la radice quadrata. Con [[c = 25]] cm e [[p = 9]] cm, [[a = \\sqrt{225} = 15]] cm. La radice quadrata è necessaria perché cp è uguale ad a al quadrato, non ad a.",
          "question": "Come si calcola il cateto a dalla proiezione p?",
        },
        {
          "answer": "Usa [[b = \\sqrt{c \\times q}]]. Moltiplica l'ipotenusa c per la proiezione q, poi calcola la radice quadrata. Con [[c = 25]] cm e [[q = 16]] cm, [[b = \\sqrt{400} = 20]] cm. La radice quadrata trasforma la lunghezza al quadrato di nuovo in una lunghezza di lato.",
          "question": "Come si calcola il cateto b dalla proiezione q?",
        },
        {
          "answer": "Somma le due proiezioni: [[c = p + q]]. L'altezza divide l'ipotenusa esattamente in quei due segmenti, quindi la loro somma ricostruisce l'intero lato. Con [[p = 9]] cm e [[q = 16]] cm, [[c = 25]] cm.",
          "question": "Come si trova l'ipotenusa da due proiezioni?",
        },
        {
          "answer": "Perché il teorema fornisce il quadrato di un cateto, non il cateto stesso. L'enunciato [[a^2 = c \\times p]] descrive una lunghezza al quadrato. Calcolare la radice quadrata annulla l'elevamento al quadrato e restituisce una lunghezza ordinaria. Saltarla significa presentare un valore al quadrato come se fosse un lato.",
          "question": "Perché si usa una radice quadrata nel teorema delle proiezioni?",
        },
        {
          "answer": "Sì. L'altezza è la media geometrica delle due proiezioni: [[h = \\sqrt{p \\times q}]]. Con [[p = 9]] cm e [[q = 16]] cm, [[h = \\sqrt{144} = 12]] cm. Questa pagina non ha una modalità per l'altezza, quindi usa la calcolatrice dedicata dell'altezza dalle proiezioni per quel passaggio.",
          "question": "Le proiezioni possono determinare l'altezza?",
        },
        {
          "answer": "Sommando le due formule delle proiezioni si ottiene [[a^2 + b^2 = c \\times p + c \\times q = c(p + q)]]. Poiché [[p + q = c]], questo diventa [[a^2 + b^2 = c^2]]. Il teorema delle proiezioni divide la relazione pitagorica in un pezzo per ciascun cateto.",
          "question": "Come sono collegate le proiezioni al teorema di Pitagora?",
        },
        {
          "answer": "Abbina la modalità ai valori che conosci. Usa il segmento p quando conosci a e c, il segmento q quando conosci b e c, il cateto a quando conosci c e p, il cateto b quando conosci c e q, e la somma delle proiezioni per c quando conosci p e q.",
          "question": "Quale modalità della calcolatrice dovrei scegliere?",
        },
        {
          "answer": "No. I cateti sono i due lati che formano l'angolo retto, mentre le proiezioni sono segmenti lungo l'ipotenusa. Una proiezione è più corta del suo cateto nella maggior parte dei casi, e giace distesa sull'ipotenusa, non lungo il lato del triangolo.",
          "question": "Le proiezioni sono la stessa cosa dei cateti di un triangolo rettangolo?",
        },
      ],
      "relatedHeading": "Esplora le Calcolatrici Correlate per Triangoli Rettangoli",
      "relatedIntro": "Scegli il prossimo strumento in base alla misura che ti serve, poiché ogni calcolatrice qui sotto gestisce un compito specifico sulle proiezioni.",
      "relatedItems": [
        "Calcolatrice della Proiezione P del Triangolo Rettangolo",
        "Calcolatrice della Proiezione Q del Triangolo Rettangolo",
        "Calcolatrice del Cateto A dalla Proiezione del Triangolo Rettangolo",
        "Calcolatrice del Cateto B dalla Proiezione del Triangolo Rettangolo",
        "Calcolatrice dell'Ipotenusa dalle Proiezioni del Triangolo Rettangolo",
        "Calcolatrice dell'Altezza dalle Proiezioni del Triangolo Rettangolo",
        "Calcolatrice dell'Altezza del Triangolo Rettangolo",
      ],
      "sections": {
        "sec-all-measurements": {
          "blocks": [
            {
              "kind": "p",
              "text": "Conoscere le due proiezioni basta per ricostruire l'intero triangolo. Usa [[p = 9]] cm e [[q = 16]] cm. Prima, l'ipotenusa è [[c = 9 + 16 = 25]] cm. Poi il cateto a è [[a = \\sqrt{25 \\times 9} = 15]] cm, e il cateto b è [[b = \\sqrt{25 \\times 16} = 20]] cm. L'altezza è [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Una coppia di numeri fornisce quattro lunghezze: c, a, b e h. Questa è la potenza delle relazioni delle proiezioni: due segmenti sull'ipotenusa racchiudono l'intera forma del triangolo. Un controllo finale chiude il cerchio: [[15^2 + 20^2 = 225 + 400 = 625 = 25^2]], quindi il teorema di Pitagora conferma l'intero triangolo in una volta sola.",
            },
            {
              "kind": "p",
              "text": "Tieni presente che queste sono relazioni matematiche, non modalità separate della calcolatrice. Questa pagina calcola un valore per modalità. Ricostruire l'intero triangolo significa eseguire una modalità, poi usare il suo risultato nella successiva, oppure svolgere i passaggi a mano come mostrato sopra.",
            },
          ],
          "h2": "Come Calcolare Tutte le Misure Principali di un Triangolo Rettangolo",
          "image": {
            "alt": "Triangolo rettangolo con proiezioni p uguale a 9 e q uguale a 16, ipotenusa 25, cateti 15 e 20, e altezza 12, che mostra tutte e sei le misure in un unico diagramma",
            "caption": "Una coppia di proiezioni ricostruisce il triangolo: c = 25, a = 15, b = 20, h = 12.",
            "src": "projection-numerical-example.svg",
          },
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'altezza è la media geometrica delle due proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 9]] cm e [[q = 16]] cm. Il prodotto è [[9 \\times 16 = 144]], e la radice quadrata di 144 è 12, quindi [[h = 12]] cm. L'altezza è il segmento perpendicolare dall'angolo retto all'ipotenusa, e la sua lunghezza è fissata una volta note p e q. Questa è la stessa idea della media geometrica che collega i cateti alle proiezioni, applicata invece all'altezza.",
            },
            {
              "kind": "p",
              "text": "Nota che questa pagina non ha una modalità dedicata all'altezza. La calcolatrice restituisce proiezioni, cateti e ipotenusa, ma non h. Per una pagina che risolve direttamente l'altezza, usa la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatrice dell'altezza dalle proiezioni</a>, che prende p e q e restituisce h. La <a href=\"/right-triangle-altitude-calculator/\">calcolatrice dell'altezza</a> copre altri modi per trovare h, dai cateti o dall'area.",
            },
          ],
          "h2": "Relazione tra le Proiezioni e l'Altezza",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[a^2 = c \\times p]] invece di ricorrere per abitudine al teorema di Pitagora. Gli esercizi sui triangoli simili usano la stessa configurazione, poiché la dimostrazione stessa è un esercizio di abbinamento dei lati corrispondenti.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa il teorema quando un triangolo rettangolo deve essere ricostruito da misure parziali: se un disegno fornisce l'ipotenusa e il piede dell'altezza, il cateto mancante si ottiene senza rimisurare la figura.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: la geometria del triangolo rettangolo richiesta deve esistere davvero. Il teorema descrive relazioni geometriche esatte, non misure approssimative sul campo, quindi non sostituisce mai un rilievo accurato o una misurazione ingegneristica professionale. Nel suo contesto appropriato, però, trasforma due lunghezze note in una terza con una singola moltiplicazione e una radice quadrata.",
            },
          ],
          "h2": "Applicazioni Pratiche delle Relazioni delle Proiezioni del Triangolo Rettangolo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "La calcolatrice in questa pagina offre cinque modalità, una per ciascuna relazione delle proiezioni. Ogni modalità richiede due misure note e restituisce un valore mancante. Non devi mai risolvere prima l'intero triangolo: scegli la modalità che corrisponde ai tuoi numeri, inseriscili e leggi il risultato.",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto è il modo più rapido per scegliere. Trova la riga le cui misure note corrispondono alle tue, e quella riga indica la modalità da usare. Le sezioni che seguono spiegano ogni modalità in dettaglio, con un esempio svolto per ciascuna.",
            },
          ],
          "h2": "Calcolare le Proiezioni e i Segmenti dell'Ipotenusa di un Triangolo Rettangolo",
          "table": {
            "headers": [
              "Modalità della Calcolatrice",
              "Misure Note",
              "Risultato",
            ],
            "rows": [
              [
                "Segmento dell'Ipotenusa p",
                "Cateto a e ipotenusa c",
                "Proiezione p",
              ],
              [
                "Segmento dell'Ipotenusa q",
                "Cateto b e ipotenusa c",
                "Proiezione q",
              ],
              [
                "Cateto a dalla Proiezione al Quadrato",
                "Ipotenusa c e proiezione p",
                "Cateto a",
              ],
              [
                "Cateto b dalla Proiezione al Quadrato",
                "Ipotenusa c e proiezione q",
                "Cateto b",
              ],
              [
                "Somma delle Proiezioni per c",
                "Proiezione p e proiezione q",
                "Ipotenusa c",
              ],
            ],
          },
        },
        "sec-choose-mode": {
          "blocks": [
            {
              "kind": "p",
              "text": "Scegliere la modalità è un esercizio di abbinamento: trova la modalità che richiede le due misure che conosci, e la calcolatrice restituisce quella mancante.",
            },
            {
              "kind": "h3",
              "text": "Modalità 1: Segmento dell'Ipotenusa p",
            },
            {
              "kind": "p",
              "text": "Scegli questa modalità quando conosci il cateto a e l'ipotenusa c. La formula è [[p = a^2 / c]]. Eleva al quadrato il cateto a, poi dividi per c. Usala quando un problema ti dà un cateto e l'intera ipotenusa e chiede quanta parte dell'ipotenusa appartiene a quel cateto.",
            },
            {
              "kind": "h3",
              "text": "Modalità 2: Segmento dell'Ipotenusa q",
            },
            {
              "kind": "p",
              "text": "Scegli questa modalità quando conosci il cateto b e l'ipotenusa c. La formula è [[q = b^2 / c]]. È l'immagine speculare della modalità 1, con il cateto b al posto del cateto a. Usala quando il cateto noto è quello che tocca il vertice B.",
            },
            {
              "kind": "h3",
              "text": "Modalità 3: Cateto a dalla Proiezione al Quadrato",
            },
            {
              "kind": "p",
              "text": "Scegli questa modalità quando conosci l'ipotenusa c e la proiezione p. La formula è [[a = \\sqrt{c \\times p}]]. Moltiplica prima, poi calcola la radice quadrata. Usala quando un problema fornisce l'ipotenusa e il segmento accanto ad A e chiede il cateto.",
            },
            {
              "kind": "h3",
              "text": "Modalità 4: Cateto b dalla Proiezione al Quadrato",
            },
            {
              "kind": "p",
              "text": "Scegli questa modalità quando conosci l'ipotenusa c e la proiezione q. La formula è [[b = \\sqrt{c \\times q}]]. È l'immagine speculare della modalità 3, con q al posto di p. Usala quando il segmento noto è quello accanto a B.",
            },
            {
              "kind": "h3",
              "text": "Modalità 5: Somma delle Proiezioni per c",
            },
            {
              "kind": "p",
              "text": "Scegli questa modalità quando conosci entrambe le proiezioni, p e q. La formula è [[c = p + q]], una semplice addizione senza elevamento al quadrato e senza radice quadrata.",
            },
            {
              "kind": "p",
              "text": "Guida rapida alla scelta: un cateto con c dà una proiezione, c con una proiezione dà un cateto, ed entrambe le proiezioni insieme danno c. Se i tuoi valori noti non corrispondono a nessuna di queste coppie, ti serve prima un'altra misura.",
            },
          ],
          "h2": "Come Scegliere la Modalità Corretta della Calcolatrice",
          "image": {
            "alt": "Cinque modalità della calcolatrice con i loro valori noti e risultati: segmento p da a e c, segmento q da b e c, cateto a da c e p, cateto b da c e q, e ipotenusa c da p e q",
            "caption": "Cinque modalità, una per ciascuna coppia nota: un cateto con c dà una proiezione, c con una proiezione dà un cateto, e p con q dà c.",
            "src": "projection-five-modes.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b, e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolarmente ad AB e la tocca in D. Due piccoli quadrati segnano gli angoli retti: uno in C, tra i cateti, e uno in D, tra l'altezza e l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa nel segmento AD, che è la proiezione p, e nel segmento DB, che è la proiezione q. L'altezza CD è indicata con h. Percorri il diagramma in questo ordine per fissare le etichette: parti da A, segui il cateto a fino a C, poi il cateto b fino a B, poi torna lungo l'ipotenusa da B ad A, fermandoti in D per vedere la divisione in q e p.",
            },
            {
              "kind": "p",
              "text": "L'altezza crea due triangoli rettangoli più piccoli, ACD e CBD, all'interno dell'originale. Nel triangolo ACD, l'ipotenusa è il cateto a e un cateto è la proiezione p. Nel triangolo CBD, l'ipotenusa è il cateto b e un cateto è la proiezione q.",
            },
          ],
          "h2": "Comprendere il Diagramma delle Proiezioni del Triangolo Rettangolo",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD all'ipotenusa AB, cateti a e b, ipotenusa c, proiezioni p e q, e altezza h etichettate",
            "caption": "Triangolo principale ABC: l'altezza CD divide l'ipotenusa AB nella proiezione p (AD) e nella proiezione q (DB).",
            "src": "projection-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio indica i valori dati, la modalità, la sostituzione e la risposta finale. Due esempi coprono ciascuna delle cinque modalità, così puoi vedere ogni modalità due volte con numeri diversi.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Trova la Proiezione P",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 9]] cm e [[c = 15]] cm, usa la modalità 1, Segmento dell'Ipotenusa p. La formula dà [[p = 9^2 / 15 = 81 / 15 = 5.4]] cm. ",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Trova la Proiezione P",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 12]] m e [[c = 20]] m, usa la modalità 1. La formula dà [[p = 12^2 / 20 = 144 / 20 = 7.2]] m. L'altra proiezione è 12.8 m, e [[7.2 + 12.8 = 20]] m conferma il risultato.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Trova la Proiezione Q",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 12]] cm e [[c = 15]] cm, usa la modalità 2, Segmento dell'Ipotenusa q. La formula dà [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Questo è lo stesso triangolo dell'Esempio 1, visto dall'altro cateto.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Trova la Proiezione Q",
            },
            {
              "kind": "p",
              "text": "Dati [[b = 8]] m e [[c = 10]] m, usa la modalità 2. La formula dà [[q = 8^2 / 10 = 64 / 10 = 6.4]] m. L'altra proiezione è 3.6 m, e questo è il noto triangolo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Trova il Cateto A",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[p = 9]] cm, usa la modalità 3, Cateto a dalla Proiezione al Quadrato. La formula dà [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Il prodotto è un quadrato perfetto, quindi la risposta è esatta, senza bisogno di arrotondamenti.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Trova il Cateto A",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm e [[p = 4]] cm, usa la modalità 3. La formula dà [[a = \\sqrt{10 \\times 4} = \\sqrt{40} \\approx 6.325]] cm. Il prodotto 40 non è un quadrato perfetto, quindi la risposta è un'approssimazione arrotondata a tre cifre decimali.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Trova il Cateto B",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[q = 16]] cm, usa la modalità 4, Cateto b dalla Proiezione al Quadrato. La formula dà [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Questo è lo stesso triangolo dell'Esempio 5, visto dall'altra proiezione, e i due cateti 15 e 20 completano il triangolo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Trova il Cateto B",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm e [[q = 6]] cm, usa la modalità 4. La formula dà [[b = \\sqrt{10 \\times 6} = \\sqrt{60} \\approx 7.746]] cm. Il cateto a corrispondente è circa 6.325 cm, dall'Esempio 6.",
            },
            {
              "kind": "h3",
              "text": "Esempio 9: Trova l'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 9]] cm e [[q = 16]] cm, usa la modalità 5, Somma delle Proiezioni per c. La formula dà [[c = 9 + 16 = 25]] cm. Non servono elevamenti al quadrato né radici quadrate, poiché i due segmenti si uniscono semplicemente nell'intero lato.",
            },
            {
              "kind": "h3",
              "text": "Esempio 10: Trova l'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 3.5]] m e [[q = 6.5]] m, usa la modalità 5. La formula dà [[c = 3.5 + 6.5 = 10]] m. Le proiezioni decimali si sommano come i numeri interi, quindi allinea i punti decimali e somma.",
            },
          ],
          "h2": "Esempi Svolti con Tutte e Cinque le Modalità della Calcolatrice",
        },
        "sec-formulas": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cinque formule coprono ogni modalità di questa pagina. Le prime due trovano le proiezioni dai cateti. Le due successive ricavano i cateti dalle proiezioni. L'ultima ricostruisce l'ipotenusa dalle sue due parti.",
            },
            {
              "kind": "p",
              "text": "Proiezione p, dal cateto a e dall'ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Proiezione q, dal cateto b e dall'ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto a, dall'ipotenusa e dalla proiezione p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Cateto b, dall'ipotenusa e dalla proiezione q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Ipotenusa, da entrambe le proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Trovare una proiezione significa elevare al quadrato un cateto e dividere per l'ipotenusa. Trovare un cateto significa moltiplicare l'ipotenusa per una proiezione e calcolare una radice quadrata. Trovare l'ipotenusa significa sommare due segmenti. La radice quadrata compare solo quando si ricava un cateto, perché solo le formule dei cateti partono da una lunghezza al quadrato. Tutte le misure devono usare la stessa unità, quindi converti prima di calcolare.",
            },
          ],
          "h2": "Formule delle Proiezioni del Triangolo Rettangolo Spiegate",
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci brevi passaggi ti portano da un diagramma etichettato a una risposta controllata. I passaggi sono gli stessi per ogni modalità; cambiano solo la modalità scelta e i numeri inseriti.",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua quali misure sono note.",
                "Apri il selettore di modalità della calcolatrice.",
                "Scegli la modalità di calcolo corrispondente.",
                "Inserisci la prima misura richiesta.",
                "Inserisci la seconda misura richiesta.",
                "Seleziona unità di misura compatibili.",
                "Fai clic sul pulsante Calcola pertinente.",
                "Leggi il risultato visualizzato.",
                "Controlla la risposta usando un'altra relazione geometrica quando opportuno.",
                "Usa Reimposta prima di iniziare un altro calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Il passaggio 1 fa la maggior parte del lavoro. Etichetta il triangolo, segna p e q sull'ipotenusa e annota a quale cateto appartiene ciascuna proiezione. Con le etichette definite, la scelta della modalità segue dalla tabella vicino all'inizio di questa guida, e la calcolatrice gestisce l'aritmetica. Non descrivere né aspettarti funzioni che la pagina non ha: non calcola automaticamente l'altezza, gli angoli o l'area.",
            },
          ],
          "h2": "Come Usare la Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le due proiezioni sono le due parti di un unico lato rettilineo, quindi l'ipotenusa è la loro somma:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[p = 9]] cm e [[q = 16]] cm. Sommando si ottiene [[c = 9 + 16 = 25]] cm. Questo è il principio dell'addizione dei segmenti: quando un punto divide un segmento in due parti, l'intero segmento è uguale alla somma delle sue parti. Il piede dell'altezza D divide l'ipotenusa AB in AD e DB, quindi AB è uguale ad AD più DB.",
            },
            {
              "kind": "p",
              "text": "Questa modalità è anche il controllo più rapido sulle altre quattro modalità. Ogni volta che calcoli p e q separatamente, sommali e confronta con c. Nel triangolo 9-12-15, [[p = 5.4]] cm e [[q = 9.6]] cm sommano a 15 cm, confermando entrambe le proiezioni in una volta sola. La <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calcolatrice dell'ipotenusa dalle proiezioni</a> tratta questo calcolo per intero quando ti serve da solo.",
            },
          ],
          "h2": "Come Calcolare l'Ipotenusa Completa dalle Proiezioni",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una proiezione in un triangolo rettangolo è l'ombra che un cateto proietta sull'ipotenusa. Traccia l'altezza dal vertice dell'angolo retto fino all'ipotenusa, e questa la divide in due segmenti, chiamati p e q. Il segmento p appartiene al cateto a, e il segmento q appartiene al cateto b.",
            },
            {
              "kind": "p",
              "text": "Questa Calcolatrice delle Proiezioni del Triangolo Rettangolo lavora con tutte e cinque le relazioni delle proiezioni. Trova la proiezione p dal cateto a, la proiezione q dal cateto b, il cateto a dalla proiezione p, il cateto b dalla proiezione q, e l'intera ipotenusa da p e q. Ogni compito è una modalità separata, quindi scegli quella che corrisponde alle misure che già conosci.",
            },
            {
              "kind": "p",
              "text": "Le stesse due proiezioni possono anche ricostruire l'intero triangolo. Per esempio, se [[p = 9]] cm e [[q = 16]] cm, allora [[c = 9 + 16 = 25]] cm, e l'altezza è [[h = \\sqrt{9 \\times 16} = 12]] cm. Questa guida spiega ogni modalità, mostra le formule, sviluppa esempi e ti insegna a controllare ogni risposta.",
            },
          ],
          "h2": "Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Per ricavare il cateto a, moltiplica l'ipotenusa per la proiezione p e calcola la radice quadrata:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 25]] cm e [[p = 9]] cm. Il prodotto è [[25 \\times 9 = 225]], e la radice quadrata di 225 è 15, quindi [[a = 15]] cm. Il prodotto 225 è una lunghezza al quadrato, non un lato, ed è per questo che la radice quadrata non può essere saltata. Indicare 225 come cateto significherebbe affermare un lato nove volte più lungo dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il passaggio della radice quadrata è il punto centrale di questa modalità. Il teorema delle proiezioni afferma che [[a^2 = c \\times p]], quindi il prodotto fornisce il quadrato del cateto. Annullare un quadrato richiede una radice quadrata, proprio come annullare un raddoppio richiede un dimezzamento. La <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calcolatrice del cateto a dalla proiezione</a> tratta questo calcolo per intero quando ti serve da solo.",
            },
          ],
          "h2": "Come Trovare il Cateto A dalla Proiezione P",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Per ricavare il cateto b, moltiplica l'ipotenusa per la proiezione q e calcola la radice quadrata:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[c = 25]] cm e [[q = 16]] cm. Il prodotto è [[25 \\times 16 = 400]], e la radice quadrata di 400 è 20, quindi [[b = 20]] cm. Il metodo è l'immagine speculare del calcolo del cateto a, con q al posto di p. L'abbinamento è fissato dalle etichette del triangolo, quindi inserire p qui restituirebbe il cateto a.",
            },
            {
              "kind": "p",
              "text": "Controlla la risposta rispetto alle dimensioni del triangolo. Il cateto b deve essere più corto dell'ipotenusa, e 20 cm è più corto di 25 cm, quindi il risultato supera il primo controllo di plausibilità. Elevandolo al quadrato si ottiene [[20^2 = 400]], che corrisponde a [[c \\times q = 25 \\times 16 = 400]], quindi il teorema vale esattamente. La <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calcolatrice del cateto b dalla proiezione</a> tratta questo calcolo per intero quando ti serve da solo.",
            },
          ],
          "h2": "Come Trovare il Cateto B dalla Proiezione Q",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "La maggior parte degli errori qui sotto deriva dall'etichettatura, non dall'aritmetica, quindi rietichetta il diagramma prima di ricalcolare quando una risposta sembra sbagliata.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondere la proiezione p con la proiezione q: p si trova accanto ad A e appartiene al cateto a, mentre q si trova accanto a B e appartiene al cateto b.",
                "Abbinare il cateto a a q invece che a p: il cateto a usa p, quindi [[a = \\sqrt{c \\times p}]]. Usare q restituisce il cateto b, non il cateto a.",
                "Abbinare il cateto b a p invece che a q: il cateto b usa q, quindi [[b = \\sqrt{c \\times q}]]. Usare p restituisce il cateto a, non il cateto b.",
                "Dimenticare la radice quadrata quando si calcola un cateto: il prodotto cp è a al quadrato, non a. Con c = 25 e p = 9, il cateto è 15 cm, non 225.",
                "Mescolare unità di misura diverse: converti prima. Moltiplicare metri per centimetri dà un prodotto senza senso, quindi metti entrambi gli input in un'unica unità.",
                "Usare la modalità sbagliata della calcolatrice: abbina la modalità ai tuoi valori noti con la tabella vicino all'inizio di questa guida.",
                "Trattare p o q come un cateto perpendicolare: le proiezioni giacciono distese lungo l'ipotenusa. Sono segmenti dell'ipotenusa, non lati del triangolo.",
                "Dimenticare che c = p + q: le due proiezioni devono sommare all'ipotenusa.",
                "Usare lunghezze non valide o negative: le lunghezze sono positive, quindi un valore negativo segnala un errore nei dati, e proiezioni nulle non descrivono alcun triangolo reale.",
                "Arrotondare troppo presto: mantieni la precisione completa fino al passaggio finale, poi arrotonda una sola volta.",
                "Applicare le formule a un triangolo qualsiasi: il teorema richiede un angolo retto e la sua altezza, quindi senza di essi non esistono proiezioni p e q in questo senso.",
                "Confondere le lunghezze dei lati al quadrato con le lunghezze effettive dei lati: 225 è a al quadrato, mentre 15 è a. Specifica quale intendi prima di scrivere un numero.",
              ],
            },
          ],
          "h2": "Errori Comuni nell'Uso di una Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessuno dei valori ripete gli esempi svolti, e l'ultimo problema combina diverse idee di questa guida.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Trova la Proiezione P",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha il cateto [[a = 6]] cm e l'ipotenusa [[c = 10]] cm. Trova la proiezione p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Trova la Proiezione Q",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha il cateto [[b = 15]] cm e l'ipotenusa [[c = 25]] cm. Trova la proiezione q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Trova il Cateto A",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha l'ipotenusa [[c = 17]] cm e la proiezione [[p = 8]] cm. Trova il cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Trova il Cateto B",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha l'ipotenusa [[c = 13]] cm e la proiezione [[q = 9]] cm. Trova il cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova l'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha le proiezioni [[p = 5]] cm e [[q = 20]] cm. Trova l'ipotenusa c.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Teorema delle Proiezioni in Più Passaggi",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha le proiezioni [[p = 4]] cm e [[q = 9]] cm. Trova l'ipotenusa, entrambi i cateti e l'altezza, poi controlla il risultato con il teorema di Pitagora.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai Problemi di Esercitazione",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[p = 6^2 / 10 = 36 / 10 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[q = 15^2 / 25 = 225 / 25 = 9]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[a = \\sqrt{17 \\times 8} = \\sqrt{136} \\approx 11.662]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[c = 5 + 20 = 25]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[c = 4 + 9 = 13]] cm, [[a = \\sqrt{13 \\times 4} = \\sqrt{52} \\approx 7.211]] cm, [[b = \\sqrt{13 \\times 9} = \\sqrt{117} \\approx 10.817]] cm, [[h = \\sqrt{4 \\times 9} = 6]] cm. Controllo: [[52 + 117 = 169 = 13^2]].",
            },
          ],
          "h2": "Problemi di Esercitazione con Risposte",
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proiezione p è la parte dell'ipotenusa che appartiene al cateto a. La formula divide il quadrato del cateto a per l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 9]] cm e [[c = 15]] cm. Il passaggio 1 scrive la formula, [[p = a^2 / c]]. Il passaggio 2 sostituisce i valori, [[p = 9^2 / 15 = 81 / 15]]. Il passaggio 3 divide, ottenendo [[p = 5.4]] cm. La risposta è una lunghezza lungo l'ipotenusa, misurata nella stessa unità di a e c.",
            },
            {
              "kind": "p",
              "text": "Un breve controllo conferma il risultato. L'altro cateto di questo triangolo è di 12 cm, quindi la sua proiezione è [[q = 12^2 / 15 = 144 / 15 = 9.6]] cm. Sommando le due proiezioni si ottiene [[5.4 + 9.6 = 15]] cm, che è esattamente c. Se le tue due proiezioni non sommano a c, uno degli input era sbagliato. La <a href=\"/right-triangle-projection-p-calculator/\">calcolatrice della proiezione p</a> gestisce questo calcolo da sola quando ti serve spesso.",
            },
          ],
          "h2": "Come Calcolare la Proiezione P dal Cateto A e dall'Ipotenusa",
          "image": {
            "alt": "Triangolo rettangolo che mostra il cateto a al quadrato diviso per l'ipotenusa c che dà la proiezione p, con a uguale a 9 cm e c uguale a 15 cm che danno p uguale a 5.4 cm",
            "caption": "Proiezione p dal cateto a: p è uguale ad a al quadrato diviso per c, quindi 81 diviso per 15 dà 5.4 cm.",
            "src": "projection-p-leg-a.svg",
          },
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "La proiezione q è la parte dell'ipotenusa che appartiene al cateto b. La formula divide il quadrato del cateto b per l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[b = 12]] cm e [[c = 15]] cm. Il passaggio 1 scrive la formula, [[q = b^2 / c]]. Il passaggio 2 sostituisce i valori, [[q = 12^2 / 15 = 144 / 15]]. Il passaggio 3 divide, ottenendo [[q = 9.6]] cm. La risposta è il segmento accanto al vertice B, sul lato opposto del piede dell'altezza rispetto a p.",
            },
            {
              "kind": "p",
              "text": "Confronta le due proiezioni prima di andare avanti. Qui p è 5.4 cm e q è 9.6 cm, quindi q è più grande, il che corrisponde al cateto b più lungo del cateto a. Il cateto più lungo proietta sempre la proiezione più lunga. Se il tuo cateto più lungo ha prodotto la proiezione più corta, hai scambiato p e q. La <a href=\"/right-triangle-projection-q-calculator/\">calcolatrice della proiezione q</a> gestisce questo calcolo da sola quando ti serve spesso.",
            },
          ],
          "h2": "Come Calcolare la Proiezione Q dal Cateto B e dall'Ipotenusa",
          "image": {
            "alt": "Triangolo rettangolo che mostra il cateto b al quadrato diviso per l'ipotenusa c che dà la proiezione q, con b uguale a 12 cm e c uguale a 15 cm che danno q uguale a 9.6 cm",
            "caption": "Proiezione q dal cateto b: q è uguale a b al quadrato diviso per c, quindi 144 diviso per 15 dà 9.6 cm.",
            "src": "projection-q-leg-b.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione si basa sui triangoli simili. Tracciare l'altezza CD divide il triangolo ABC in due triangoli rettangoli più piccoli, ACD e CBD, ed entrambi sono simili al triangolo originale. La similitudine significa che i loro lati corrispondenti restano nello stesso rapporto, e uno di quei rapporti fornisce direttamente il teorema delle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Inizia con il cateto a. Il triangolo ACD condivide l'angolo in A con il triangolo ABC, ed entrambi contengono un angolo retto, quindi anche i loro terzi angoli devono coincidere. Abbinare i lati che occupano le stesse posizioni fornisce la proporzione:",
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
              "text": "Moltiplicando in croce si eliminano le frazioni: [[p \\times c = a \\times a]], che è [[a^2 = c \\times p]]. Lo stesso ragionamento applicato all'altro triangolo piccolo, CBD, fornisce [[b^2 = c \\times q]], poiché il triangolo CBD condivide l'angolo in B con l'intero triangolo. La similitudine fa tutto il lavoro: i lati corrispondenti di triangoli simili restano proporzionali, e il teorema delle proiezioni è ciò che quella proporzione diventa dopo la moltiplicazione in croce.",
            },
          ],
          "h2": "Perché Funzionano i Teoremi delle Proiezioni?",
          "image": {
            "alt": "Triangolo rettangolo originale ABC accanto ai triangoli simili più piccoli ACD e CBD, che mostrano le proporzioni p diviso a uguale ad a diviso c e q diviso b uguale a b diviso c",
            "caption": "Dimostrazione con triangoli simili: p diviso a è uguale ad a diviso c, e q diviso b è uguale a b diviso c.",
            "src": "projection-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Sei proprietà derivano direttamente dalle formule delle proiezioni. Ognuna funge anche da controllo di plausibilità su una nuova risposta.",
            },
            {
              "items": [
                "Proiezioni uguali producono cateti uguali. Con [[p = q = 5]] e [[c = 10]], entrambi i cateti sono uguali a [[\\sqrt{50} \\approx 7.071]], e il triangolo è un triangolo rettangolo isoscele.",
                "Proiezioni disuguali producono cateti disuguali: la proiezione più lunga appartiene al cateto più lungo.",
                "Scambiare p e q scambia le lunghezze dei cateti corrispondenti ma non cambia l'ipotenusa totale, poiché [[p + q = c]] in entrambi i casi.",
                "Moltiplicare tutte le misure per lo stesso fattore positivo moltiplica ogni risultato per quel fattore. Raddoppiare p e q raddoppia c, a, b e h.",
                "Le proiezioni sono sempre positive e sempre più piccole di c in un triangolo rettangolo valido e non degenere. Una proiezione uguale a c lascerebbe l'altra proiezione a zero.",
                "Il cateto più lungo proietta sempre la proiezione più lunga. Confrontare le lunghezze dei cateti con quelle delle proiezioni è un modo rapido per individuare un'etichetta scambiata.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Il diagramma qui sotto mostra entrambi i casi con l'ipotenusa mantenuta a 10. Proiezioni uguali la dividono in parti uguali e danno cateti uguali, mentre proiezioni disuguali danno cateti di lunghezze diverse.",
            },
          ],
          "h2": "Casi Speciali e Proprietà Importanti delle Proiezioni",
          "image": {
            "alt": "Due triangoli rettangoli con ipotenusa 10: uno con proiezioni p e q uguali di 5 che danno cateti uguali, e uno con p uguale a 2 e q uguale a 8 che danno cateti disuguali",
            "caption": "Proiezioni uguali danno cateti uguali; proiezioni disuguali danno cateti disuguali, con la stessa ipotenusa di 10.",
            "src": "projection-equal-vs-unequal.svg",
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
              "text": "Somma la formula corrispondente per il cateto b, [[b^2 = c \\times q]], per ottenere:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo c a fattore comune sul lato destro si ottiene [[a^2 + b^2 = c(p + q)]]. Poiché [[p + q = c]], la sostituzione fornisce il noto risultato:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un controllo numerico con il triangolo 9-16-25 lo conferma: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. I due teoremi non sono rivali. Il teorema delle proiezioni divide la relazione pitagorica in un pezzo per ciascun cateto, e sommando i pezzi la si ricostruisce. Per questo ogni risultato di questa pagina può essere controllato con il teorema di Pitagora.",
            },
          ],
          "h2": "Relazione tra le Proiezioni e il Teorema di Pitagora",
        },
        "sec-sides-segments": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo porta sei parti con nome, e ciascuna ha una posizione fissa. La tabella qui sotto elenca ogni parte con il suo simbolo, il suo significato e la sua posizione. Impara questa tabella una volta sola, e ogni formula di questa guida risulterà chiara.",
            },
            {
              "kind": "p",
              "text": "Individuare il segmento corretto è importante perché ogni modalità della calcolatrice richiede input specifici. Inserire una proiezione dove appartiene un cateto, o inserire p dove appartiene q, produce comunque un numero, ma risponde a una domanda diversa da quella che hai posto. Etichetta prima il diagramma, poi abbina le etichette alla modalità.",
            },
          ],
          "h2": "Comprendere i Lati e i Segmenti di un Triangolo Rettangolo",
          "table": {
            "headers": [
              "Simbolo",
              "Nome",
              "Posizione",
            ],
            "rows": [
              [
                "a",
                "Cateto a (lato AC)",
                "Lato perpendicolare che tocca il vertice A",
              ],
              [
                "b",
                "Cateto b (lato BC)",
                "Lato perpendicolare che tocca il vertice B",
              ],
              [
                "c",
                "Ipotenusa (lato AB)",
                "Lato più lungo, opposto all'angolo retto",
              ],
              [
                "p",
                "Proiezione p (segmento AD)",
                "Parte dell'ipotenusa accanto al vertice A",
              ],
              [
                "q",
                "Proiezione q (segmento DB)",
                "Parte dell'ipotenusa accanto al vertice B",
              ],
              [
                "h",
                "Altezza (segmento CD)",
                "Perpendicolare da C all'ipotenusa",
              ],
            ],
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli indipendenti individuano quasi ogni errore. Esegui almeno uno di essi su ogni risposta, e tutti e quattro quando il problema è importante. Ogni controllo usa una relazione diversa, quindi un errore che sfugge a uno viene di solito individuato da un altro.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Somma delle Proiezioni",
            },
            {
              "kind": "p",
              "text": "Verifica che [[p + q = c]]. Con [[p = 9]] cm, [[q = 16]] cm e [[c = 25]] cm, [[9 + 16 = 25]], quindi i segmenti combaciano. Se la somma differisce da c, una delle proiezioni è sbagliata.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Teorema delle Proiezioni per il Cateto A",
            },
            {
              "kind": "p",
              "text": "Eleva al quadrato il cateto a e confrontalo con [[c \\times p]]. Con [[a = 15]] cm, [[c = 25]] cm e [[p = 9]] cm, [[a^2 = 225]] e [[c \\times p = 225]], quindi la risposta è corretta. Se i due numeri differiscono, il cateto o la proiezione è sbagliato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Teorema delle Proiezioni per il Cateto B",
            },
            {
              "kind": "p",
              "text": "Eleva al quadrato il cateto b e confrontalo con [[c \\times q]]. Con [[b = 20]] cm, [[c = 25]] cm e [[q = 16]] cm, [[b^2 = 400]] e [[c \\times q = 400]], quindi la risposta è corretta. Usa questo controllo ogni volta che la tua risposta è un cateto.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Verifica che [[a^2 + b^2 = c^2]]. Con [[a = 15]] cm, [[b = 20]] cm e [[c = 25]] cm, [[225 + 400 = 625 = 25^2]]. Questo controllo verifica l'intero triangolo in una volta sola, non solo una formula, quindi è il più forte dei quattro.",
            },
          ],
          "h2": "Come Verificare i Calcoli delle Proiezioni",
        },
        "sec-what-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prendi il triangolo rettangolo ABC, con l'angolo retto in C. I due lati che formano l'angolo retto sono i cateti, AC e BC. Il lato opposto all'angolo retto è l'ipotenusa, AB. Ora traccia l'altezza da C direttamente fino all'ipotenusa, incontrandola in un punto chiamato D. Quell'altezza è perpendicolare all'ipotenusa, quindi incontra AB ad angolo retto.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide l'ipotenusa in due segmenti adiacenti. Il segmento accanto al vertice A, chiamato AD, è la proiezione p. Il segmento accanto al vertice B, chiamato DB, è la proiezione q. Insieme formano l'intera ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Ogni proiezione appartiene al cateto che tocca il suo vertice. Il cateto a tocca il vertice A, quindi la sua proiezione è p. Il cateto b tocca il vertice B, quindi la sua proiezione è q. Questo abbinamento non cambia mai: a va con p, e b va con q.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni giacciono distese lungo l'ipotenusa. Non sono lati del triangolo e non sono perpendicolari a nulla. Immagina ciascuna come l'ombra che il suo cateto proietta sull'ipotenusa quando l'altezza scende dritta fino a essa.",
            },
          ],
          "h2": "Che Cosa Sono le Proiezioni in un Triangolo Rettangolo?",
        },
      },
      "tocHeading": "Contenuti della Guida",
      "tocItems": {
        "sec-all-measurements": "Come Calcolare Tutte le Misure Principali di un Triangolo Rettangolo",
        "sec-altitude": "Relazione tra le Proiezioni e l'Altezza",
        "sec-applications": "Applicazioni Pratiche delle Relazioni delle Proiezioni del Triangolo Rettangolo",
        "sec-calculate": "Calcolare le Proiezioni e i Segmenti dell'Ipotenusa di un Triangolo Rettangolo",
        "sec-choose-mode": "Come Scegliere la Modalità Corretta della Calcolatrice",
        "sec-diagram": "Comprendere il Diagramma delle Proiezioni del Triangolo Rettangolo",
        "sec-examples": "Esempi Svolti con Tutte e Cinque le Modalità della Calcolatrice",
        "sec-faq": "Domande Frequenti",
        "sec-formulas": "Formule delle Proiezioni del Triangolo Rettangolo Spiegate",
        "sec-how-to-use": "Come Usare la Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        "sec-hypotenuse": "Come Calcolare l'Ipotenusa Completa dalle Proiezioni",
        "sec-intro": "Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        "sec-leg-a": "Come Trovare il Cateto A dalla Proiezione P",
        "sec-leg-b": "Come Trovare il Cateto B dalla Proiezione Q",
        "sec-mistakes": "Errori Comuni nell'Uso di una Calcolatrice delle Proiezioni del Triangolo Rettangolo",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-projection-p": "Come Calcolare la Proiezione P dal Cateto A e dall'Ipotenusa",
        "sec-projection-q": "Come Calcolare la Proiezione Q dal Cateto B e dall'Ipotenusa",
        "sec-proof": "Perché Funzionano i Teoremi delle Proiezioni?",
        "sec-properties": "Casi Speciali e Proprietà Importanti delle Proiezioni",
        "sec-pythagoras": "Relazione tra le Proiezioni e il Teorema di Pitagora",
        "sec-related": "Esplora le Calcolatrici Correlate per Triangoli Rettangoli",
        "sec-sides-segments": "Comprendere i Lati e i Segmenti di un Triangolo Rettangolo",
        "sec-verify": "Come Verificare i Calcoli delle Proiezioni",
        "sec-what-projections": "Che Cosa Sono le Proiezioni in un Triangolo Rettangolo?",
      },
    },
};
