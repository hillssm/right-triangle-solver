// hypotenuseFromProjectionsGuideTranslations.bit.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B2_IT = {
  "it": {
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-altitude": "Come le proiezioni dell'ipotenusa si collegano all'altezza",
        "sec-applications": "Applicazioni pratiche dei calcoli delle proiezioni dell'ipotenusa",
        "sec-calculate": "Calcolare l'ipotenusa da due proiezioni",
        "sec-compare": "Ipotenusa dalle proiezioni vs. ipotenusa dai cateti",
        "sec-diagram": "Diagramma delle proiezioni dell'ipotenusa del triangolo rettangolo spiegato",
        "sec-examples": "Esempi svolti di ipotenusa dalle proiezioni",
        "sec-faq": "Domande frequenti",
        "sec-formula": "Formula dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        "sec-how": "Come usare il calcolatore dell'ipotenusa dalle proiezioni",
        "sec-intro": "Calcolatore dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        "sec-legs": "Relazione tra proiezioni dell'ipotenusa e cateti del triangolo",
        "sec-manual": "Come calcolare manualmente l'ipotenusa dalle proiezioni",
        "sec-mistakes": "Errori comuni nel calcolo dell'ipotenusa dalle proiezioni",
        "sec-practice": "Esercizi con soluzioni",
        "sec-pythagoras": "Proiezioni dell'ipotenusa e il teorema di Pitagora",
        "sec-related": "Esplora i calcolatori correlati per triangoli rettangoli",
        "sec-special": "Casi speciali e proprietà importanti",
        "sec-understanding": "Comprendere l'ipotenusa e i suoi due segmenti",
        "sec-verify": "Come verificare il calcolo dell'ipotenusa",
        "sec-what": "Cosa sono le proiezioni dell'ipotenusa in un triangolo rettangolo?",
        "sec-why": "Perché l'ipotenusa è uguale alla somma delle sue proiezioni?",
      },
      "sections": {
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le stesse proiezioni danno l'altezza tramite il teorema della media geometrica: [[h^2 = pq]], quindi [[h = \\sqrt{pq}]]. Con [[p = 9]] cm e [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Confronta le due formule: [[c = p + q]] somma le proiezioni, mentre [[h = \\sqrt{pq}]] ne prende la media geometrica. Rispondono a domande diverse. L'ipotenusa è la lunghezza dell'intero lato; l'altezza è la distanza perpendicolare dall'angolo retto fino a quel lato.",
            },
            {
              "kind": "p",
              "text": "Per i problemi sull'altezza, usa il <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatore dell'altezza dalle proiezioni</a>, costruito attorno a [[h = \\sqrt{pq}]]. Mantieni distinti i due risultati: in questo triangolo l'ipotenusa è 25 cm mentre l'altezza è solo 12 cm.",
            },
            {
              "kind": "p",
              "text": "Qui vale un controllo di coerenza integrato: l'altezza è sempre più corta dell'ipotenusa. Nell'esempio svolto, 12 cm è ben sotto i 25 cm. Se la tua altezza supera mai l'ipotenusa, ricontrolla quale formula hai usato.",
            },
          ],
          "h2": "Come le proiezioni dell'ipotenusa si collegano all'altezza",
          "image": {
            "alt": "Triangolo rettangolo con proiezioni 9 e 16 sull'ipotenusa, ipotenusa 25 e altezza 12 tracciata perpendicolare all'ipotenusa",
            "caption": "Stesse proiezioni, due formule: c = 9 + 16 = 25, h = radice quadrata di (9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "In classe e nei compiti, i problemi sulle proiezioni verificano se gli studenti sanno etichettare un diagramma e applicare [[c = p + q]] invece di ricorrere al teorema di Pitagora. Gli esercizi di disegno tecnico usano la stessa abilità quando un'altezza divide un'ipotenusa misurata su un progetto.",
            },
            {
              "kind": "p",
              "text": "I modelli topografici e la geometria architettonica a volte riducono una disposizione a triangolo rettangolo a un'ipotenusa tagliata da una perpendicolare, dove sommare i due segmenti segnati dà la campata completa. Le costruzioni geometriche su carta usano la somma per impostare le aperture del compasso.",
            },
            {
              "kind": "p",
              "text": "La condizione è sempre la stessa: p e q devono essere parti adiacenti di un'unica ipotenusa in un vero triangolo rettangolo. Distanze arbitrarie non valgono mai, per quanto allettante possa sembrare l'addizione.",
            },
            {
              "kind": "p",
              "text": "Gli insegnanti possono usare la configurazione delle proiezioni come lezione ponte: ripassa l'addizione dei segmenti degli anni precedenti anticipando i teoremi di similitudine che arriveranno più avanti nel corso di geometria.",
            },
          ],
          "h2": "Applicazioni pratiche dei calcoli delle proiezioni dell'ipotenusa",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "I due campi di input accettano le lunghezze delle proiezioni p e q, entrambe misurate lungo l'ipotenusa. I selettori di unità permettono di inserire centimetri, metri, millimetri, piedi o pollici, purché p e q usino unità compatibili prima di essere sommate.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Premi Calcola ipotenusa c per vedere il risultato e usa Azzera per svuotare i campi e iniziare un nuovo problema. Sono accettate solo lunghezze positive, perché una proiezione è un segmento reale dell'ipotenusa, e un valore nullo o negativo non può descriverla.",
            },
            {
              "kind": "p",
              "text": "Il risultato è la lunghezza completa dell'ipotenusa c nell'unità scelta. L'aritmetica è una semplice addizione, ma le sezioni seguenti spiegano cosa significano i segmenti e come controllare la risposta a mano.",
            },
          ],
          "h2": "Calcolare l'ipotenusa da due proiezioni",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Due strade portano all'ipotenusa. Quando sono noti i segmenti dell'altezza, usa l'addizione dei segmenti: [[c = p + q]]. Quando invece sono noti i due lati attorno all'angolo retto, usa il teorema di Pitagora: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Scegli la formula delle proiezioni quando il problema dà il piede dell'altezza e i suoi due segmenti; scegli la formula dei cateti quando dà i due lati perpendicolari. In un unico triangolo coerente, entrambe le strade producono la stessa c.",
            },
            {
              "kind": "p",
              "text": "Un rapido controllo incrociato lega le due formule. Dalle proiezioni [[p = 9]] e [[q = 16]], [[c = 25]]. I cateti sono [[a = 15]] e [[b = 20]], e [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Entrambe le strade arrivano alla stessa ipotenusa.",
            },
          ],
          "h2": "Ipotenusa dalle proiezioni vs. ipotenusa dai cateti",
          "table": {
            "headers": [
              "Valori noti",
              "Formula",
              "Metodo",
            ],
            "rows": [
              [
                "Proiezioni p e q",
                "c = p + q",
                "Addizione dei segmenti",
              ],
              [
                "Cateti a e b",
                "c = √(a² + b²)",
                "Teorema di Pitagora",
              ],
            ],
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma principale mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b e il lato AB è l'ipotenusa c. L'altezza CD scende da C perpendicolare ad AB e la tocca in D.",
            },
            {
              "kind": "p",
              "text": "Un buon ordine di lettura parte dal vertice C: segui il cateto a fino ad A, il cateto b fino a B, poi percorri l'ipotenusa c da A a B. Fermati in D, il piede dell'altezza, per vedere la divisione in p e q. Leggere il diagramma in questo modo collega le etichette alla formula.",
            },
            {
              "kind": "p",
              "text": "Il punto D divide AB in due parti: il segmento AD è la proiezione p e il segmento DB è la proiezione q. Le etichette si trovano direttamente sul diagramma, così puoi vedere dove inizia p, dove finisce q e come i due insieme coprono l'intero lato da A a B.",
            },
            {
              "kind": "p",
              "text": "I marcatori di angolo retto in C e in D confermano la geometria. Il marcatore in C rende AB l'ipotenusa, e il marcatore in D conferma che CD è l'altezza. Il triangolo originale è ora diviso in due triangoli rettangoli più piccoli, ACD e CBD, che torneranno più avanti in questa guida.",
            },
          ],
          "h2": "Diagramma delle proiezioni dell'ipotenusa del triangolo rettangolo spiegato",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C; altezza CD tracciata perpendicolare all'ipotenusa AB, che la divide nella proiezione p (segmento AD) e nella proiezione q (segmento DB), con i cateti a e b etichettati",
            "caption": "L'altezza CD divide l'ipotenusa AB nelle proiezioni p e q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ciascun esempio riporta i valori dati, la sostituzione e la risposta finale. Il commento resta breve così l'aritmetica resta visibile.",
            },
            {
              "kind": "p",
              "text": "Tutti gli esempi mantengono le unità coerenti dai valori dati alla risposta. Quando le unità differiscono, l'esempio converte prima e lo dice esplicitamente, così puoi copiare l'abitudine nel tuo lavoro.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Numeri interi",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 4]] cm e [[q = 9]] cm, la formula [[c = p + q]] dà [[c = 4 + 9]], quindi [[c = 13]] cm. Due proiezioni intere producono qui un'ipotenusa intera, anche se in generale non è garantito.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Proiezioni uguali",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 5]] cm e [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Proiezioni uguali significano che l'altezza colpisce il punto medio dell'ipotenusa, cosa che accade esattamente quando i due cateti sono uguali: un triangolo rettangolo isoscele. Poiché i cateti sono uguali, l'altezza è anche la mediana, ed è per questo che biseca l'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Proiezioni decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 3.6]] m e [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Allinea i punti decimali e somma come al solito; l'unità resta il metro per tutto il calcolo.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Proiezioni disuguali",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 2]] cm e [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. Le proiezioni non devono essere simili in grandezza; la somma ricostruisce comunque l'ipotenusa completa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure maggiori",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 125]] mm e [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Valori grandi non cambiano nulla del metodo.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Unità miste",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 40]] mm e [[q = 9]] cm, converti prima: 40 mm equivalgono a 4 cm. Poi [[c = 4 + 9 = 13]] cm. Sommare prima di convertire darebbe un 49 senza significato.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Misure frazionarie",
            },
            {
              "kind": "p",
              "text": "Dati [[p = \\frac{1}{2}]] ft e [[q = \\frac{3}{4}]] ft, scrivi entrambi con denominatore 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, cioè 1.25 ft.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Trovare una proiezione mancante",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 25]] cm e [[p = 9]] cm, risolvi [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Questo passaggio inverso mostra che la relazione funziona in entrambi i sensi, anche se il calcolatore di questa pagina somma p e q per trovare c invece di risolvere per una proiezione mancante.",
            },
          ],
          "h2": "Esempi svolti di ipotenusa dalle proiezioni",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formula è [[c = p + q]], dove c è l'ipotenusa completa, p è il primo segmento di proiezione e q è il secondo. Usa l'addizione invece della moltiplicazione o delle radici quadrate perché le due proiezioni sono parti adiacenti di un unico lato rettilineo, e la somma dei segmenti ricostruisce quel lato a partire dalle sue parti. Immagina di misurare due pezzi di una stessa tavola e di sommare le misure per ottenere la lunghezza totale della tavola.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Una domanda frequente è perché la formula non faccia la media dei due segmenti. La media darebbe metà dell'ipotenusa, che risponde a una domanda diversa. L'addizione ricostruisce l'intero lato; la media e la media geometrica appartengono ad altre formule trattate più avanti in questa guida.",
            },
            {
              "kind": "p",
              "text": "Prendi [[p = 7]] cm e [[q = 11]] cm. La sostituzione dà [[c = 7 + 11]], quindi [[c = 18]] cm. La formula in sé è semplice; l'importante è capire quali due segmenti contano come proiezioni.",
            },
            {
              "kind": "p",
              "text": "Entrambi i segmenti devono usare unità compatibili prima di essere sommati. Se p è in millimetri e q in centimetri, converti prima uno dei due, esattamente come ti chiede di fare il calcolatore di questa pagina.",
            },
          ],
          "h2": "Formula dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove brevi passaggi ti portano da un diagramma etichettato a un'ipotenusa verificata.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica il triangolo rettangolo del tuo problema e verifica che abbia un angolo retto.",
                "Individua l'ipotenusa: il lato opposto all'angolo retto.",
                "Trova il punto in cui l'altezza condotta dall'angolo retto incontra l'ipotenusa.",
                "Identifica le due proiezioni p e q come i segmenti ai lati di quel punto, usando la guida del <a href=\"/right-triangle-projection-p-calculator/\">calcolatore della proiezione p</a> per il primo segmento. Il <a href=\"/right-triangle-projection-q-calculator/\">calcolatore della proiezione q</a> tratta il secondo segmento allo stesso modo.",
                "Converti entrambe le misure in unità compatibili se necessario.",
                "Inserisci p nel campo Proiezione p e q nel campo Proiezione q.",
                "Fai clic sul pulsante Calcola ipotenusa c.",
                "Leggi il risultato dell'ipotenusa nell'unità scelta.",
                "Usa Azzera prima di iniziare un nuovo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "L'identificazione corretta è la cosa più importante. I campi si aspettano i due segmenti dell'ipotenusa stessa, non i cateti e non l'altezza. Inserire la coppia sbagliata produce comunque una somma, ma non sarà l'ipotenusa.",
            },
          ],
          "h2": "Come usare il calcolatore dell'ipotenusa dalle proiezioni",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questo calcolatore trova l'ipotenusa di un triangolo rettangolo sommando i suoi due segmenti di proiezione.",
            },
            {
              "kind": "p",
              "text": "Le proiezioni p e q sono i due pezzi dell'ipotenusa creati quando l'altezza condotta dall'angolo retto la incontra. Inserisci entrambe le lunghezze e il calcolatore le somma con la formula [[c = p + q]] per restituire l'ipotenusa completa. Per esempio, se [[p = 4]] cm e [[q = 9]] cm, allora [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è il lato più lungo del triangolo rettangolo e si trova di fronte all'angolo retto. Il calcolatore compare per primo in questa pagina, seguito dalla formula, dalla geometria che la spiega, da esempi svolti e da modi per verificare la risposta.",
            },
            {
              "kind": "p",
              "text": "La guida è adatta agli studenti delle medie che incontrano le proiezioni per la prima volta, alle classi di geometria delle superiori e a chiunque controlli i compiti. Ogni formula è svolta con numeri reali, così puoi seguire ogni passaggio senza fermarti a decifrare i simboli.",
            },
          ],
          "h2": "Calcolatore dell'ipotenusa dalle proiezioni del triangolo rettangolo",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le proiezioni determinano anche i cateti tramite il teorema delle proiezioni: [[a^2 = cp]] e [[b^2 = cq]]. Ciascun cateto è la media geometrica tra l'ipotenusa e la sua proiezione adiacente, un fatto che segue dalla similitudine dei triangoli più piccoli con l'originale.",
            },
            {
              "kind": "p",
              "text": "Estraendo le radici quadrate si ottiene [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]]. Con [[p = 9]] cm e [[q = 16]] cm, prima trova [[c = 9 + 16 = 25]] cm. Poi [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm e [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è quindi la chiave che sblocca i lati rimanenti: una volta noto c, ciascun cateto segue dalla sua proiezione. Il <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati</a> risolve direttamente problemi simili di lati mancanti.",
            },
            {
              "kind": "p",
              "text": "L'abbinamento non è arbitrario: il cateto a si appoggia alla proiezione p nel triangolo piccolo ACD, simile al triangolo intero, così a si lega a c e p mentre b si lega a c e q. Ricordare quale cateto si abbina a quale proiezione mantiene le radici quadrate sui segmenti corretti.",
            },
          ],
          "h2": "Relazione tra proiezioni dell'ipotenusa e cateti del triangolo",
          "image": {
            "alt": "Triangolo rettangolo con proiezioni 9 e 16 e ipotenusa 25, che mostra il cateto a uguale a 15 da a al quadrato uguale a 25 per 9, e il cateto b uguale a 20 da b al quadrato uguale a 25 per 16",
            "caption": "Cateto a = radice quadrata di (25 x 9) = 15; cateto b = radice quadrata di (25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolo manuale è una singola sostituzione in [[c = p + q]]. Prendi [[p = 3.6]] cm e [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci i valori: [[c = 3.6 + 6.4]]. Somma: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Allinea i punti decimali quando sommi a mano: 3.6 più 6.4 dà 10.0, e lo zero finale può essere omesso per un [[c = 10]] cm pulito. Mantieni l'unità attaccata alla risposta; un numero nudo non è una lunghezza completa.",
            },
            {
              "kind": "p",
              "text": "Non serve alcun calcolo pitagorico, perché entrambe le lunghezze delle proiezioni sono già note. Per controllare, verifica che la somma abbia senso: 3.6 più 6.4 fa chiaramente 10, e l'ipotenusa deve essere più lunga di ciascuna singola proiezione.",
            },
          ],
          "h2": "Come calcolare manualmente l'ipotenusa dalle proiezioni",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione.",
            },
            {
              "kind": "steps",
              "steps": [
                "Moltiplicare p e q invece di sommarli. Con [[p = 4]] e [[q = 9]], il prodotto 36 qui non ha senso; l'ipotenusa è [[4 + 9 = 13]].",
                "Confondere le proiezioni con i cateti. I cateti si incontrano nell'angolo retto; le proiezioni giacciono lungo l'ipotenusa. Etichetta ogni lunghezza prima di calcolare.",
                "Usare l'altezza come proiezione. L'altezza h è perpendicolare all'ipotenusa, non un suo pezzo, quindi non appartiene mai a [[c = p + q]].",
                "Mescolare le unità di misura. [[p = 40]] mm e [[q = 9]] cm devono diventare 4 cm e 9 cm prima di sommare; la somma grezza 49 non ha un'unità valida.",
                "Inserire lunghezze negative. Le proiezioni sono positive per definizione, quindi un valore negativo segnala un errore nei dati.",
                "Confondere l'ipotenusa con un cateto. L'ipotenusa sta di fronte all'angolo retto ed è il lato più lungo; un cateto non può mai svolgere il suo ruolo.",
                "Dimenticare un segmento. Sommare solo p dà una lunghezza parziale; l'ipotenusa ha bisogno di entrambe le parti.",
                "Usare misure non correlate. I due numeri devono essere le parti adiacenti della stessa ipotenusa, non lunghezze arbitrarie del problema.",
                "Applicare il teorema di Pitagora a p e q. Il valore [[\\sqrt{p^2 + q^2}]] non è l'ipotenusa, perché p e q sono collineari, non perpendicolari.",
                "Confondere [[c = p + q]] con [[h = \\sqrt{pq}]]. L'addizione trova l'ipotenusa; la media geometrica trova l'altezza. Scambiare le formule scambia le risposte.",
              ],
            },
            {
              "kind": "p",
              "text": "Se ti accorgi di un errore a metà, fermati ed etichetta di nuovo il diagramma prima di ricalcolare. La maggior parte degli errori qui sopra svanisce una volta che p e q sono chiaramente segnati sull'ipotenusa e tutto il resto è cancellato.",
            },
          ],
          "h2": "Errori comuni nel calcolo dell'ipotenusa dalle proiezioni",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova questi sei problemi, poi controlla le soluzioni svolte qui sotto. Nessun valore ripete gli esempi svolti.",
            },
            {
              "kind": "p",
              "text": "Svolgi ogni problema su carta prima di leggerne la soluzione. Copri le soluzioni con la mano se serve; il problema a più passaggi è il miglior test per capire se i teoremi delle proiezioni sono stati assimilati.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Numeri interi",
            },
            {
              "kind": "p",
              "text": "L'altezza di un triangolo rettangolo divide l'ipotenusa in [[p = 12]] cm e [[q = 4]] cm. Trova c.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 2.5]] m e [[q = 7.5]] m, trova l'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Proiezioni uguali",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 7]] in e [[q = 7]] in, trova c. Che tipo di triangolo è?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 200]] mm e [[q = 35]] cm, trova l'ipotenusa in centimetri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Proiezione mancante",
            },
            {
              "kind": "p",
              "text": "Un'ipotenusa misura [[c = 50]] cm e una proiezione è [[q = 32]] cm. Trova p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: A più passaggi con i cateti",
            },
            {
              "kind": "p",
              "text": "Dati [[p = 16]] cm e [[q = 9]] cm, trova c, poi trova i cateti a e b.",
            },
            {
              "kind": "h3",
              "text": "Soluzioni degli esercizi",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[c = 7 + 7 = 14]] in. Proiezioni uguali danno un triangolo rettangolo isoscele.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: Converti 200 mm in 20 cm, poi [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[c = 16 + 9 = 25]] cm. Poi [[a = \\sqrt{25 \\times 16} = 20]] cm e [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Esercizi con soluzioni",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le relazioni tra le proiezioni concordano esattamente con il teorema di Pitagora. Parti dal teorema delle proiezioni: [[a^2 = cp]] e [[b^2 = cq]]. Sommando le due equazioni si ottiene [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliere c a fattor comune è valido perché moltiplica entrambi i termini. Poiché [[p + q = c]], la sostituzione dà:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un controllo numerico con il triangolo 9-16-25 conferma l'algebra: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. Entrambi i lati concordano, che è esattamente ciò che prevede la dimostrazione fattorizzata.",
            },
            {
              "kind": "p",
              "text": "La dimostrazione si chiude in modo netto: la semplice somma dei segmenti sta al cuore della relazione pitagorica. Il diagramma qui sotto mostra da dove vengono [[a^2 = cp]] e [[b^2 = cq]]: ciascun triangolo piccolo condivide gli angoli con l'originale, quindi i lati corrispondenti restano proporzionali.",
            },
          ],
          "h2": "Proiezioni dell'ipotenusa e il teorema di Pitagora",
          "image": {
            "alt": "Triangolo rettangolo originale ABC accanto ai due triangoli simili più piccoli ACD e CBD con angoli corrispondenti e lati corrispondenti etichettati",
            "caption": "I triangoli ACD e CBD sono simili ad ABC, dando a al quadrato uguale a cp e b al quadrato uguale a cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni proprietà qui sotto segue direttamente dall'addizione, il che le rende facili da accettare.",
            },
            {
              "items": [
                "Proiezioni uguali: se [[p = q]], allora [[c = 2p]]. L'altezza cade nel punto medio, e i due cateti sono uguali, dando un triangolo rettangolo isoscele.",
                "Proiezioni disuguali: va bene qualsiasi coppia positiva. L'altezza pende verso la proiezione più lunga, e il cateto più vicino è quello più corto.",
                "Proiezioni molto piccole: la formula vale comunque, per esempio [[p = 0.5]] mm e [[q = 1.5]] mm danno [[c = 2]] mm.",
                "Proiezioni molto grandi: non c'è limite superiore, per esempio [[p = 1200]] m e [[q = 800]] m danno [[c = 2000]] m.",
                "Scala: raddoppiare entrambe le proiezioni raddoppia l'ipotenusa, poiché [[2p + 2q = 2(p + q)]].",
                "Scambiare p e q: [[p + q = q + p]], quindi l'ipotenusa resta invariata e solo le etichette AD e DB si scambiano di posto.",
                "Proiezioni di lunghezza zero: [[p = 0]] significa che l'altezza coincide con un cateto, quindi il triangolo è degenere e il calcolatore non l'accetta.",
                "Proiezioni negative: le lunghezze non possono essere negative, quindi un valore negativo è sempre un errore nei dati.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Il diagramma confronta due triangoli con la stessa ipotenusa ma diverse divisioni delle proiezioni, mostrando come la forma cambia mentre la somma resta fissa.",
            },
          ],
          "h2": "Casi speciali e proprietà importanti",
          "image": {
            "alt": "Due triangoli rettangoli con la stessa ipotenusa di lunghezza 10: uno con proiezioni uguali 5 e 5, l'altro con proiezioni 2 e 8",
            "caption": "Stessa ipotenusa, forme diverse: p = q = 5 contro p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'ipotenusa è il lato opposto all'angolo retto e, in qualsiasi triangolo rettangolo non degenere, è il lato più lungo. Quando l'altezza condotta dal vertice dell'angolo retto scende perpendicolare ad essa, l'ipotenusa viene divisa in due segmenti più corti che giacciono uno accanto all'altro sulla stessa retta.",
            },
            {
              "kind": "p",
              "text": "Poiché entrambi i segmenti giacciono su quel singolo lato, si comportano come due pezzi adiacenti di un righello: accostarli ricostruisce esattamente l'intero lato, senza sovrapposizioni né spazi vuoti. Ecco perché le proiezioni sommate danno sempre l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Queste etichette corrispondono al diagramma principale qui sotto. I vertici A e B sono gli angoli acuti, C è il vertice dell'angolo retto e D è il piede dell'altezza CD sull'ipotenusa AB, con [[AD = p]] e [[DB = q]].",
            },
          ],
          "h2": "Comprendere l'ipotenusa e i suoi due segmenti",
          "table": {
            "headers": [
              "Simbolo",
              "Significato",
            ],
            "rows": [
              [
                "a",
                "Primo cateto perpendicolare",
              ],
              [
                "b",
                "Secondo cateto perpendicolare",
              ],
              [
                "c",
                "Ipotenusa completa",
              ],
              [
                "p",
                "Prima proiezione dell'ipotenusa",
              ],
              [
                "q",
                "Seconda proiezione dell'ipotenusa",
              ],
              [
                "h",
                "Altezza relativa all'ipotenusa",
              ],
            ],
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre controlli rapidi intercettano quasi ogni errore di calcolo. Il primo è il calcolo diretto; gli altri due lo confermano da angolazioni diverse.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Ricalcola l'addizione dei segmenti",
            },
            {
              "kind": "p",
              "text": "Somma di nuovo p e q, lentamente. Con [[p = 4]] e [[q = 9]], conferma [[4 + 9 = 13]]. Un errore di distrazione qui è la fonte più comune di una risposta sbagliata.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Verifica che i cateti rispettino Pitagora",
            },
            {
              "kind": "p",
              "text": "Calcola i cateti dalle proiezioni, [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]], poi verifica [[a^2 + b^2 = c^2]]. Per [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]] e [[225 + 400 = 625]]. Questo controllo geometrico va oltre la semplice addizione del calcolatore.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Controllo di coerenza del diagramma",
            },
            {
              "kind": "p",
              "text": "Verifica che entrambe le proiezioni siano positive, che giacciano entrambe sulla stessa ipotenusa e che c sia più lunga di ciascun singolo segmento. Se il risultato è minore di p o q, un valore è stato inserito nel campo sbagliato.",
            },
          ],
          "h2": "Come verificare il calcolo dell'ipotenusa",
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Parti da un triangolo rettangolo e traccia l'altezza dal vertice dell'angolo retto perpendicolare all'ipotenusa. L'altezza tocca l'ipotenusa in un punto, chiamato piede, e quel punto divide l'ipotenusa in due segmenti adiacenti. Questi due segmenti sono le proiezioni dell'ipotenusa: [[p = AD]] e [[q = DB]] quando il triangolo è ABC con l'angolo retto in C e l'altezza CD. Il <a href=\"/right-triangle-projection-calculator/\">calcolatore delle proiezioni</a> tratta ciascun segmento separatamente.",
            },
            {
              "kind": "p",
              "text": "Una proiezione non è un cateto. I cateti a e b sono i due lati che formano l'angolo retto, mentre le proiezioni p e q giacciono distese lungo l'ipotenusa stessa. Confonderli è l'errore di etichettatura più comune, quindi chiediti sempre: questa lunghezza sta sull'ipotenusa o è uno dei lati attorno all'angolo retto?",
            },
            {
              "kind": "p",
              "text": "Ecco un esempio semplice per principianti. Se l'altezza divide un'ipotenusa in un segmento di 4 cm e uno di 9 cm, allora [[p = 4]] cm e [[q = 9]] cm, e l'ipotenusa completa è [[c = 4 + 9 = 13]] cm. La formula [[c = p + q]] ricostruisce semplicemente l'intero lato dalle sue due parti.",
            },
            {
              "kind": "p",
              "text": "Un'abitudine di etichettatura rapida previene la maggior parte degli errori: parti dal vertice dell'angolo retto C, traccia l'altezza fino all'ipotenusa e segna il piede D. Il segmento che tocca A è p e quello che tocca B è q. Una volta fissate queste due etichette, il resto della guida si applica direttamente.",
            },
          ],
          "h2": "Cosa sono le proiezioni dell'ipotenusa in un triangolo rettangolo?",
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il motivo è il postulato dell'addizione dei segmenti: se il punto D giace sul segmento AB tra A e B, allora la lunghezza AB è uguale ad AD più DB. Qui D è il piede dell'altezza e A e B sono gli estremi dell'ipotenusa, quindi [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Sostituendo i simboli standard si ottiene direttamente la formula. In un triangolo rettangolo non degenere il piede dell'altezza cade sempre tra gli estremi, quindi il postulato si applica sempre. Per questo passaggio non serve trigonometria.",
            },
            {
              "kind": "p",
              "text": "La similitudine dei triangoli è lo strumento dietro le relazioni più profonde tra le proiezioni, come [[a^2 = cp]], ma la semplice addizione dei segmenti basta a stabilire [[c = p + q]]. Il diagramma qui sotto mostra la stessa idea su una singola retta.",
            },
            {
              "kind": "p",
              "text": "Un dettaglio merita enfasi: D cade sempre strettamente tra A e B in un vero triangolo rettangolo, mai in un estremo e mai fuori dal segmento. Questa collocazione rende applicabile il postulato dell'addizione dei segmenti, ed è per questo che proiezioni nulle o negative vengono rifiutate.",
            },
          ],
          "h2": "Perché l'ipotenusa è uguale alla somma delle sue proiezioni?",
          "image": {
            "alt": "Segmento rettilineo AB diviso nel punto D nel segmento AD etichettato p e nel segmento DB etichettato q, che mostra come l'intero segmento sia uguale a p più q",
            "caption": "Un punto tra A e B divide il segmento: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
      },
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "answer": "La formula è [[c = p + q]], dove p e q sono i due segmenti di proiezione dell'ipotenusa. Somma le due lunghezze per ottenere l'ipotenusa completa. Per esempio, [[p = 4]] cm e [[q = 9]] cm danno [[c = 13]] cm.",
          "question": "Qual è la formula dell'ipotenusa dalle proiezioni?",
        },
        {
          "answer": "Sono i due segmenti creati quando l'altezza condotta dall'angolo retto incontra l'ipotenusa. Etichettati [[p = AD]] e [[q = DB]] nel triangolo ABC con altezza CD, giacciono uno accanto all'altro lungo l'ipotenusa e insieme la coprono completamente.",
          "question": "Cosa sono le proiezioni dell'ipotenusa?",
        },
        {
          "answer": "Per l'addizione dei segmenti: il piede dell'altezza giace tra gli estremi dell'ipotenusa, quindi l'intero lato è uguale alla somma delle sue parti. Sostituendo i simboli standard, [[AB = AD + DB]] diventa [[c = p + q]]. Non serve trigonometria.",
          "question": "Perché sommiamo p e q?",
        },
        {
          "answer": "No. I cateti a e b formano l'angolo retto, mentre le proiezioni p e q giacciono lungo l'ipotenusa. Confonderle è l'errore di etichettatura più comune, quindi controlla la posizione di ciascuna lunghezza sul diagramma prima di calcolare.",
          "question": "Le proiezioni sono la stessa cosa dei cateti del triangolo?",
        },
        {
          "answer": "Sì. L'altezza raramente colpisce il punto medio esatto, quindi p e q sono di solito disuguali. Qualsiasi coppia positiva è valida, e la somma dà comunque l'ipotenusa. Il triangolo pende semplicemente verso la proiezione più lunga.",
          "question": "Le proiezioni possono avere lunghezze diverse?",
        },
        {
          "answer": "La formula diventa [[c = 2p]]. L'altezza biseca l'ipotenusa, i due cateti sono uguali e il triangolo è un triangolo rettangolo isoscele. Geometricamente, l'altezza cade esattamente nel punto medio.",
          "question": "Cosa succede quando p e q sono uguali?",
        },
        {
          "answer": "Sì, con una formula diversa: [[h = \\sqrt{pq}]], la media geometrica delle proiezioni. Il <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatore dell'altezza dalle proiezioni</a> è fatto per quel calcolo. Tienila separata da [[c = p + q]], che trova l'ipotenusa.",
          "question": "Posso calcolare l'altezza usando p e q?",
        },
        {
          "answer": "Sì. Prima trova [[c = p + q]], poi usa [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]]. Per [[p = 9]], [[q = 16]] e [[c = 25]], i cateti sono 15 e 20. Queste sono estensioni didattiche, non la funzione principale di questo calcolatore.",
          "question": "Posso trovare i cateti del triangolo dalle proiezioni?",
        },
        {
          "answer": "No. Trovare l'ipotenusa dalle proiezioni richiede solo l'addizione, senza radici quadrate. Il teorema di Pitagora diventa utile quando sono noti i cateti, oppure quando si verifica un risultato tramite i cateti.",
          "question": "Il teorema di Pitagora è necessario per questo calcolo?",
        },
        {
          "answer": "Converti una misura così che entrambe usino la stessa unità prima di sommare. Per esempio, [[p = 40]] mm diventa 4 cm quando [[q = 9]] cm, dando [[c = 13]] cm. I selettori di unità del calcolatore servono allo stesso scopo.",
          "question": "E se p e q hanno unità diverse?",
        },
        {
          "answer": "No. Una proiezione è solo una parte dell'ipotenusa, quindi deve essere più corta del tutto. Se il tuo risultato mostra il contrario, un valore è stato inserito nel campo sbagliato.",
          "question": "Una proiezione può essere più lunga dell'ipotenusa?",
        },
        {
          "answer": "Ricalcola [[c = p + q]] lentamente, poi conferma che i cateti soddisfano [[a^2 + b^2 = c^2]]. Controlla anche che entrambe le proiezioni siano positive e che c superi ciascuna di esse. Tutti e tre i controlli richiedono meno di un minuto.",
          "question": "Come posso verificare il risultato dell'ipotenusa?",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per triangoli rettangoli",
      "relatedIntro": "Scegli lo strumento successivo in base alle misure che conosci. Ciascun calcolatore qui sotto gestisce un compito specifico del triangolo rettangolo, dai singoli segmenti di proiezione all'altezza e ai lati del triangolo.",
      "relatedItems": [
        "Calcolatore delle proiezioni del triangolo rettangolo",
        "Calcolatore della proiezione p del triangolo rettangolo",
        "Calcolatore della proiezione q del triangolo rettangolo",
        "Calcolatore dell'altezza dalle proiezioni del triangolo rettangolo",
        "Calcolatore dei lati del triangolo rettangolo",
      ],
    },
};
