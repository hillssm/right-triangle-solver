// altitudeFromSidesGuideTranslations.bit.ts: Right Triangle Altitude From Projections
// Guide (Page 28 of 45) translation.
export const B2_IT = {
  "it": {
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcolatore dell'altezza del triangolo rettangolo dai lati",
        "sec-calculate": "Calcola l'altezza del triangolo rettangolo dalle lunghezze dei lati",
        "sec-altitude": "Cos'è l'altezza di un triangolo rettangolo?",
        "sec-sides": "Capire i lati di un triangolo rettangolo",
        "sec-formula": "Formula dell'altezza del triangolo rettangolo dai lati",
        "sec-use": "Come usare il calcolatore dell'altezza del triangolo rettangolo dai lati",
        "sec-manual": "Calcolo dell'altezza passo dopo passo senza calcolatrice",
        "sec-diagram": "Diagramma dell'altezza del triangolo rettangolo spiegato",
        "sec-proof": "Perché la formula dell'altezza funziona?",
        "sec-examples": "Esempi svolti di altezza del triangolo rettangolo dai lati",
        "sec-two-sides": "Come trovare l'altezza quando si conoscono solo due lati",
        "sec-verify": "Come verificare il calcolo dell'altezza",
        "sec-vs-projections": "Altezza dai lati contro altezza dalle proiezioni",
        "sec-area-rel": "Relazione tra altezza, area e ipotenusa",
        "sec-properties": "Proprietà speciali dell'altezza all'ipotenusa",
        "sec-mistakes": "Errori comuni nel calcolo dell'altezza del triangolo rettangolo",
        "sec-applications": "Usi pratici dei calcoli dell'altezza del triangolo rettangolo",
        "sec-practice": "Problemi di esercizio con soluzioni",
        "sec-related": "Esplora i calcolatori correlati per il triangolo rettangolo",
        "sec-faq": "Domande frequenti",
        "sec-conclusion": "Calcolatori correlati per il triangolo rettangolo",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore dell'altezza del triangolo rettangolo dai lati",
          "blocks": [
            {
              "kind": "p",
              "text": "Inserisci i due cateti e l'ipotenusa per trovare l'altezza in pochi secondi.",
            },
            {
              "kind": "p",
              "text": "Questa calcolatrice trova l'altezza di un triangolo rettangolo: la distanza perpendicolare dal vertice dell'angolo retto all'ipotenusa. Inserisci i due cateti, [[a]] e [[b]], e l'ipotenusa [[c]], e restituisce [[h]] usando [[h=\\frac{ab}{c}]]. Il risultato esce nella stessa unità dei tuoi dati di ingresso.",
            },
            {
              "kind": "p",
              "text": "Per esempio, un triangolo con cateti di 3 cm e 4 cm e ipotenusa di 5 cm dà [[h=\\frac{3 \\times 4}{5}=2.4\\text{ cm}]]. Nota che 2,4 cm è più corto di entrambi i cateti, come accade sempre per l'altezza all'ipotenusa.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcola l'altezza del triangolo rettangolo dalle lunghezze dei lati",
          "blocks": [
            {
              "kind": "p",
              "text": "La calcolatrice accetta tre misure. Il cateto a è il primo lato perpendicolare, il cateto b è il secondo lato perpendicolare, e l'ipotenusa c è il lato più lungo, opposto all'angolo retto. Tutti e tre devono usare la stessa unità, quindi converti i metri in centimetri o i piedi in pollici prima di digitare.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola altezza h per vedere il risultato con la sostituzione, e usa Reimposta per cancellare i campi per il problema successivo. La calcolatrice risponde con la formula compatta:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Se conosci solo due lati, ricava prima il terzo con il teorema di Pitagora, oppure prova il <a href=\"/right-triangle-altitude-calculator/\">calcolatore dell'altezza</a> generico per un punto di partenza diverso.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "Cos'è l'altezza di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un'altezza è la distanza perpendicolare da un vertice al lato opposto. In questa pagina parte sempre dal vertice dell'angolo retto e scende dritta all'ipotenusa, incontrandola ad angolo retto. L'ipotenusa è la base perché è l'unico lato opposto all'angolo retto, e il segmento cade all'interno del triangolo.",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha tre altezze, ma due sono banali: il cateto [[a]] è l'altezza relativa alla base [[b]], e il cateto [[b]] è l'altezza relativa alla base [[a]], dato che i cateti sono già perpendicolari. Quella interessante è la terza altezza, quella all'ipotenusa, perché è un segmento interno davvero nuovo ed è più corta di entrambi i cateti.",
            },
            {
              "kind": "p",
              "text": "È questa terza altezza che la calcolatrice trova, ed è ciò che i libri di testo di solito intendono quando chiedono l'altezza di un triangolo rettangolo.",
            },
          ],
        },
        "sec-sides": {
          "h2": "Capire i lati di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Le etichette corrette fanno funzionare la formula. I cateti [[a]] e [[b]] sono i due lati perpendicolari che si incontrano nell'angolo retto. L'ipotenusa [[c]] è il lato più lungo, opposto all'angolo retto. L'altezza [[h]] non è affatto un lato, ma la discesa perpendicolare dal vertice dell'angolo retto all'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Identifica sempre prima l'ipotenusa: è la più lunga delle tre lunghezze. In un triangolo 3-4-5, il 5 deve essere [[c]], e una rapida verifica [[3^2+4^2=5^2]] conferma l'etichettatura. Etichettare il 5 come cateto significherebbe dividere per il lato sbagliato e rovinerebbe il risultato.",
            },
          ],
          "table": {
            "headers": [
              "Variabile",
              "Definizione",
              "Ruolo nel calcolo",
            ],
            "rows": [
              [
                "a",
                "Primo cateto perpendicolare",
                "Moltiplicato per b al numeratore",
              ],
              [
                "b",
                "Secondo cateto perpendicolare",
                "Moltiplicato per a al numeratore",
              ],
              [
                "c",
                "Ipotenusa, lato più lungo",
                "Divide ab al denominatore",
              ],
              [
                "h",
                "Altezza all'ipotenusa",
                "Il risultato della formula",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Formula dell'altezza del triangolo rettangolo dai lati",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula è breve e facile da ricordare:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "I cateti vengono moltiplicati perché il loro prodotto è legato all'area: l'area equivale alla metà di [[ab]], quindi [[ab]] è il doppio dell'area. Dividendo per l'ipotenusa si isola [[h]], dato che la stessa area equivale anche alla metà di [[ch]]. Il risultato è una lunghezza ordinaria, ed è per questo che tutti e tre i dati di ingresso devono condividere un'unità.",
            },
            {
              "kind": "p",
              "text": "Prova un triangolo 6-8-10: [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Geometricamente, 4,8 cm è il percorso più breve dal vertice dell'angolo retto all'ipotenusa. (La dimostrazione completa è nella sezione della dimostrazione qui sotto.)",
            },
            {
              "kind": "p",
              "text": "Un'abitudine utile è controllare le unità prima di sostituire. Se [[a]] è 60 mm, [[b]] è 8 cm e [[c]] è 100 mm, converti prima tutto in un'unità: [[a=6\\text{ cm}]], [[b=8\\text{ cm}]], [[c=10\\text{ cm}]], che è lo stesso triangolo 6-8-10 e dà lo stesso [[4.8\\text{ cm}]]. La formula non ripara mai le unità miste al tuo posto, quindi questo unico controllo evita gli errori più imbarazzanti.",
            },
          ],
        },
        "sec-use": {
          "h2": "Come usare il calcolatore dell'altezza del triangolo rettangolo dai lati",
          "blocks": [
            {
              "kind": "p",
              "text": "Segui questi otto passaggi per un risultato pulito ogni volta.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trova l'angolo retto, l'angolo in cui due lati si incontrano in squadra, spesso segnato con un quadratino. Senza un angolo retto confermato, questa formula non si applica.",
                "Individua i due cateti perpendicolari che formano quell'angolo; chiamali a e b in qualsiasi ordine, dato che la formula li tratta simmetricamente.",
                "Identifica l'ipotenusa: il lato opposto all'angolo retto e il più lungo dei tre. Conferma che sia più lunga di entrambi i cateti.",
                "Converti tutte e tre le misure nella stessa unità prima di digitare qualsiasi cosa. Le unità miste sono l'errore di immissione più comune.",
                "Inserisci a, b e c nei rispettivi campi.",
                "Fai clic sul pulsante Calcola altezza h per moltiplicare i cateti, dividere per l'ipotenusa e mostrare l'altezza.",
                "Leggi il risultato e verifica che i numeri sostituiti corrispondano a quelli che intendevi inserire.",
                "Usa Reimposta per cancellare i dati prima del problema successivo, così i vecchi valori non possono rovinare la nuova risposta.",
              ],
            },
            {
              "kind": "p",
              "text": "Prima di fidarti di una risposta, fai una verifica pitagorica: [[a^2+b^2]] dovrebbe essere uguale a [[c^2]]. Piccoli arrotondamenti di misura sono accettabili, ma una grande discrepanza significa che i lati non formano un triangolo rettangolo.",
            },
          ],
        },
        "sec-manual": {
          "h2": "Calcolo dell'altezza passo dopo passo senza calcolatrice",
          "blocks": [
            {
              "kind": "p",
              "text": "Puoi trovare l'altezza a mano in cinque brevi passaggi. Prendi [[a=9\\text{ cm}]], [[b=12\\text{ cm}]], [[c=15\\text{ cm}]] e conferma prima che il triangolo sia valido: [[9^2+12^2=81+144=225=15^2]].",
            },
            {
              "kind": "p",
              "text": "Passaggio 1, scrivi la formula: [[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Passaggio 2, sostituisci: [[[h=\\frac{9 \\times 12}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Passaggio 3, moltiplica i cateti: [[9 \\times 12=108]], quindi [[[h=\\frac{108}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Passaggio 4, dividi: [[108 \\div 15=7.2]], quindi [[h=7.2\\text{ cm}]]. Passaggio 5, verifica con l'area. Dai cateti, [[A=\\frac{9 \\times 12}{2}=54\\text{ cm}^2]]; dall'ipotenusa e dall'altezza, [[A=\\frac{15 \\times 7.2}{2}=54\\text{ cm}^2]].",
            },
            {
              "kind": "p",
              "text": "Entrambe le aree concordano perché descrivono lo stesso triangolo. I cateti danno una coppia base-altezza e l'ipotenusa ne dà un'altra, ma la regione racchiusa è identica. Le aree coincidenti confermano l'altezza.",
            },
            {
              "kind": "p",
              "text": "Perché il controllo dell'area funziona così bene? Perché la formula dell'altezza nasce proprio dall'uguagliare le due espressioni dell'area: verificando tramite l'area si chiude il cerchio, e qualsiasi errore di calcolo nella moltiplicazione o nella divisione farebbe divergere le due aree. Quando coincidono, sia l'uso della formula sia l'aritmetica sono confermati in un colpo solo.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagramma dell'altezza del triangolo rettangolo spiegato",
          "blocks": [
            {
              "kind": "p",
              "text": "Etichetta il triangolo ABC con l'angolo retto in C. Allora AC è il cateto [[a]], BC è il cateto [[b]] e AB è l'ipotenusa [[c]]. Il punto D si trova su AB, e il segmento CD incontra AB ad angolo retto; CD è l'altezza [[h]]. Piccoli quadratini in C e in D mostrano entrambi gli angoli retti.",
            },
            {
              "kind": "p",
              "text": "L'altezza CD divide il triangolo grande in due triangoli rettangoli più piccoli, ACD e BCD, ciascuno con l'angolo retto in D. Entrambi sono simili al triangolo originale ABC e simili tra loro, un fatto su cui si basano la dimostrazione e le sezioni sulle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Quando disegni la tua versione, inizia dall'angolo retto in C, disegna i cateti, poi collega le loro estremità libere per l'ipotenusa. Cala l'altezza per ultima, verificando che incontri l'ipotenusa in squadra. Etichettare nell'ordine a, b, c, h mantiene organizzato ogni calcolo successivo.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangolo ABC con angolo retto in C, altezza CD tracciata all'ipotenusa AB; AC uguale a a, BC uguale a b, AB uguale a c, CD uguale a h",
            "caption": "L'altezza CD scende dall'angolo retto C all'ipotenusa AB; h è uguale a (a per b) diviso c.",
          },
        },
        "sec-proof": {
          "h2": "Perché la formula dell'altezza funziona?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula deriva dall'area di un triangolo. L'area equivale alla metà della base per l'altezza, e un triangolo rettangolo offre due comode coppie base-altezza. Con i cateti come base e altezza:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{a \\times b}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Con l'ipotenusa come base e h come altezza:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{c \\times h}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Entrambe le espressioni descrivono lo stesso triangolo, quindi uguagliamole:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica per 2, poi dividi per [[c]]:",
            },
            {
              "kind": "p",
              "text": "[[[ab=ch]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Un triangolo può essere misurato con diverse coppie base-altezza mentre la sua area resta fissa, quindi uguagliare le due espressioni è legittimo e l'algebra isola [[h]]. Il diagramma mostra lo stesso triangolo due volte, una con base [[a]] e altezza [[b]], una con base [[c]] e altezza [[h]].",
            },
            {
              "kind": "p",
              "text": "La dimostrazione spiega anche perché l'altezza è sempre più corta dei cateti. Poiché [[c]] è il lato più lungo, dividere [[ab]] per la maggiore delle tre lunghezze deve produrre un valore minore di ciascun cateto da solo. Ogni formula successiva in questa pagina, dalle proiezioni ai triangoli simili, è una variazione su questa unica idea dell'area.",
            },
          ],
          "image": {
            "src": "altitude-two-base-height.svg",
            "alt": "Lo stesso triangolo rettangolo disegnato due volte: prima con base a e altezza b, poi con base c e altezza h",
            "caption": "Stesso triangolo, due coppie base-altezza: l'area è uguale ad ab/2 e a ch/2, quindi h è uguale ad ab/c.",
          },
        },
        "sec-examples": {
          "h2": "Esempi svolti di altezza del triangolo rettangolo dai lati",
          "blocks": [
            {
              "kind": "p",
              "text": "I sette esempi qui sotto passano dalle classiche terne pitagoriche di numeri interi ai decimali, ai cateti uguali e alle unità miste. Ognuno segue lo stesso ritmo: enuncia i dati, sostituisci nella formula, semplifica e chiudi con l'unità. Leggerli in ordine costruisce l'abitudine di controllare unità e plausibilità prima di fidarsi di qualsiasi risposta.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo classico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dati [[a=3\\text{ cm}]], [[b=4\\text{ cm}]], [[c=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è [[2.4\\text{ cm}]]. Questo esempio di riferimento vale la pena di memorizzarlo, dato che 3-4-5 è la terna pitagorica più comune e 2,4 è un decimale ordinato.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Triangolo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dati [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza esatta è [[60/13]] metri, circa 4,615 m. Tieni la frazione quando la precisione conta, dato che arrotondare presto porta l'errore nel lavoro successivo.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Triangolo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dati [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{8 \\times 15}{17}=\\frac{120}{17}\\approx 7.059\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è circa [[7.059\\text{ cm}]]. Scambiare i cateti a 15 e 8 dà il prodotto identico, confermando che la formula tratta i cateti simmetricamente.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Cateti uguali e triangolo 45-45-90",
            },
            {
              "kind": "p",
              "text": "Dati [[a=10\\text{ cm}]], [[b=10\\text{ cm}]], [[c=10\\sqrt{2}\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{10 \\times 10}{10\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7.071\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Cateti uguali formano un triangolo 45-45-90, e l'altezza lo divide in due metà congruenti. La forma esatta [[5\\sqrt{2}]] cm batte il decimale nel lavoro teorico.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[a=1.5\\text{ m}]], [[b=2\\text{ m}]], [[c=2.5\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{1.5 \\times 2}{2.5}=\\frac{3}{2.5}=1.2\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è [[1.2\\text{ m}]]. I decimali non richiedono un trattamento speciale: moltiplica e dividi come al solito, mantenendo la stessa unità sulla risposta.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Unità miste da uniformare prima",
            },
            {
              "kind": "p",
              "text": "Dati [[a=30\\text{ cm}]], [[b=0.4\\text{ m}]], [[c=0.5\\text{ m}]], converti prima in centimetri: [[a=30\\text{ cm}]], [[b=40\\text{ cm}]], [[c=50\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{30 \\times 40}{50}=\\frac{1200}{50}=24\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertendo prima si ottiene un pulito [[24\\text{ cm}]]. I metri non convertiti avrebbero gonfiato la risposta di un fattore 100.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Triangolo più grande 20-21-29",
            },
            {
              "kind": "p",
              "text": "Dati [[a=20\\text{ ft}]], [[b=21\\text{ ft}]], [[c=29\\text{ ft}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{20 \\times 21}{29}=\\frac{420}{29}\\approx 14.483\\text{ ft}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è circa [[14.483\\text{ ft}]], comodamente sotto il cateto più corto di 20 ft, come è sempre l'altezza all'ipotenusa.",
            },
          ],
          "image": {
            "src": "altitude-345.svg",
            "alt": "Triangolo rettangolo con cateti 3 e 4, ipotenusa 5 e altezza 2,4 tracciata all'ipotenusa",
            "caption": "Un triangolo 3-4-5 disegnato in scala: l'altezza h è uguale a (3 per 4) diviso 5 = 2,4.",
          },
        },
        "sec-two-sides": {
          "h2": "Come trovare l'altezza quando si conoscono solo due lati",
          "blocks": [
            {
              "kind": "p",
              "text": "La calcolatrice attiva chiede tutti e tre i lati, ma due lati bastano per ricavare il terzo con il teorema di Pitagora. Ci sono due casi, a seconda di quali lati conosci, ed entrambi terminano con la familiare formula dell'altezza.",
            },
            {
              "kind": "p",
              "text": "La logica è la stessa in entrambi i casi: il teorema di Pitagora ripristina il lato mancante, e la formula dell'altezza fa il resto. Il caso 1 somma i cateti sotto una radice quadrata per trovare l'ipotenusa, mentre il caso 2 sottrae per ricavare un cateto. Nota che il caso 2 funziona solo quando il lato noto è davvero l'ipotenusa; se [[a>c]], la radice quadrata diventa negativa e nessun triangolo del genere esiste.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: entrambi i cateti noti",
            },
            {
              "kind": "p",
              "text": "Prendi [[a=7]] e [[b=24]]. Trova prima l'ipotenusa: [[[c=\\sqrt{7^2+24^2}=\\sqrt{49+576}=\\sqrt{625}=25]]] Poi segue l'altezza: [[[h=\\frac{7 \\times 24}{25}=\\frac{168}{25}=6.72]]]",
            },
            {
              "kind": "h3",
              "text": "Caso 2: un cateto e l'ipotenusa noti",
            },
            {
              "kind": "p",
              "text": "Prendi [[a=8]] e [[c=10]]. Ricava il cateto mancante con il teorema di Pitagora riarrangiato: [[[b=\\sqrt{c^2-a^2}=\\sqrt{100-64}=\\sqrt{36}=6]]] Poi l'altezza è: [[[h=\\frac{8 \\times 6}{10}=\\frac{48}{10}=4.8]]]",
            },
            {
              "kind": "p",
              "text": "Considerali come alternative didattiche, dato che la calcolatrice si aspetta tre misure. Un <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati</a> dedicato può ricavare la lunghezza mancante prima di continuare qui.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Come verificare il calcolo dell'altezza",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre controlli indipendenti confermano una risposta sull'altezza. Tutti e tre qui sotto usano il triangolo 3-4-5, in cui l'altezza è 2,4. Usane almeno uno ogni volta che una risposta alimenterà un lavoro successivo, dato che un'altezza sbagliata corrompe silenziosamente tutto ciò che vi è costruito sopra.",
            },
            {
              "kind": "h3",
              "text": "Metodo 1: confronto delle aree",
            },
            {
              "kind": "p",
              "text": "Calcola l'area in entrambi i modi e richiedi la concordanza. Dai cateti: [[[A=\\frac{3 \\times 4}{2}=6]]] Dall'ipotenusa e dall'altezza: [[[A=\\frac{5 \\times 2.4}{2}=6]]] Le aree coincidenti confermano l'altezza stessa.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: proiezioni sull'ipotenusa",
            },
            {
              "kind": "p",
              "text": "Dividi l'ipotenusa nelle proiezioni dei cateti [[p=\\frac{a^2}{c}=\\frac{9}{5}=1.8]] e [[q=\\frac{b^2}{c}=\\frac{16}{5}=3.2]]. L'altezza è la loro media geometrica: [[[h=\\sqrt{1.8 \\times 3.2}=\\sqrt{5.76}=2.4]]] Ritrovare 2,4 da una formula diversa è una forte evidenza.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: verifica pitagorica",
            },
            {
              "kind": "p",
              "text": "Conferma che i lati formano un triangolo rettangolo: [[[3^2+4^2=9+16=25=5^2]]] Questo convalida le lunghezze dei lati, non l'altezza. Eseguilo per primo quando un problema ti fornisce i lati, poi usa il controllo dell'area o delle proiezioni per convalidare l'altezza.",
            },
          ],
        },
        "sec-vs-projections": {
          "h2": "Altezza dai lati contro altezza dalle proiezioni",
          "blocks": [
            {
              "kind": "p",
              "text": "L'altezza può essere trovata in due modi. Il metodo dei lati in questa pagina è [[h=\\frac{ab}{c}]], partendo dalle tre lunghezze dei lati. Il metodo delle proiezioni è [[h=\\sqrt{pq}]], partendo dai due segmenti in cui l'altezza divide l'ipotenusa. Entrambi descrivono lo stesso segmento e concordano sempre per lo stesso triangolo; la scelta dipende da quali misure hai. Per la seconda strada, vedi la pagina del <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatore dell'altezza dalle proiezioni</a>.",
            },
          ],
          "table": {
            "headers": [
              "Metodo",
              "Dati richiesti",
              "Formula",
              "Caso d'uso migliore",
            ],
            "rows": [
              [
                "Altezza dai lati",
                "Cateti a e b, ipotenusa c",
                "h = ab / c",
                "Le lunghezze dei lati sono note; nessuna radice quadrata necessaria",
              ],
              [
                "Altezza dalle proiezioni",
                "Segmenti dell'ipotenusa p e q",
                "h = radice quadrata di (p per q)",
                "Il piede dell'altezza divide l'ipotenusa in parti note",
              ],
            ],
          },
          "image": {
            "src": "altitude-projections-similar.svg",
            "alt": "Triangolo rettangolo con altezza h che mostra le proiezioni p e q e i due triangoli simili più piccoli",
            "caption": "L'altezza divide l'ipotenusa in p e q; la formula dei lati e la formula delle proiezioni danno la stessa h.",
          },
        },
        "sec-area-rel": {
          "h2": "Relazione tra altezza, area e ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Altezza, area e ipotenusa si collegano attraverso due espressioni per un'unica area. Dai cateti: [[[A=\\frac{ab}{2}]]] Dall'ipotenusa e dall'altezza: [[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Risolvendo la seconda espressione per [[h]] si ottiene un comodo riarrangiamento: [[[h=\\frac{2A}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Questo offre una seconda strada quando l'area è nota direttamente. Per un triangolo con area [[54\\text{ cm}^2]] e ipotenusa [[15\\text{ cm}]], [[[h=\\frac{2 \\times 54}{15}=\\frac{108}{15}=7.2\\text{ cm}]]], la stessa risposta che la formula dei lati ha dato per il triangolo 9-12-15. Se ti serve prima l'area, un <a href=\"/right-triangle-area-calculator/\">calcolatore dell'area</a> gestisce quel passaggio, e il <a href=\"/right-triangle-area-from-altitude-calculator/\">calcolatore dell'area dall'altezza</a> inverte il calcolo una volta nota [[h]].",
            },
            {
              "kind": "p",
              "text": "Questa strada brilla quando un problema indica direttamente l'area, come fanno molte domande dei libri di testo, o quando l'area è stata calcolata in una parte precedente. Invece di cercare i singoli cateti, dividi il doppio dell'area per l'ipotenusa e finisci in una riga. È la stessa altezza che dà la formula dei lati, raggiunta da un punto di partenza diverso.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà speciali dell'altezza all'ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "L'altezza all'ipotenusa è sempre più corta di ciascun cateto e più corta dell'ipotenusa stessa, dato che [[h=ab/c]] scende sotto [[a]] ogni volta che [[b<c]]. Cateti uguali danno un triangolo 45-45-90 simmetrico in cui l'altezza biseca l'ipotenusa. Per un'ipotenusa fissa, l'altezza è massima quando i cateti sono uguali: con ipotenusa 10, il triangolo 45-45-90 dà [[h=5]] mentre il triangolo 6-8-10 dà solo 4,8.",
            },
            {
              "kind": "p",
              "text": "Nessuna divisione della stessa ipotenusa batte quel massimo, che è la disuguaglianza [[h \\le \\frac{c}{2}]], con uguaglianza solo nel caso 45-45-90. Anche la scala si comporta semplicemente: raddoppiare ogni lato raddoppia l'altezza, quindi 3-4-5 a 2,4 diventa 6-8-10 a 4,8. Infine, l'altezza divide il triangolo in due triangoli più piccoli simili all'originale, ed è per questo che le relazioni di proiezioni e aree concordano tutte.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Due triangoli rettangoli che condividono un'ipotenusa di 10: un triangolo 45-45-90 con altezza 5 e un triangolo 6-8-10 con altezza 4,8",
            "caption": "Stessa ipotenusa 10: cateti uguali danno l'altezza più alta, 5.",
          },
        },
        "sec-mistakes": {
          "h2": "Errori comuni nel calcolo dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Evita questi nove errori e quasi ogni calcolo dell'altezza andrà liscio.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondere l'ipotenusa con un cateto. Soluzione: scegli prima il lato più lungo come c; in un triangolo 3-4-5, il 5 deve essere c.",
                "Moltiplicare tutti e tre i lati. Calcolare abc non ha qui alcun significato geometrico. Soluzione: moltiplica solo i cateti, poi dividi per l'ipotenusa.",
                "Dimenticare di dividere per c. Fermarsi ad ab lascia il doppio dell'area, non una lunghezza. Soluzione: finisci sempre con la divisione.",
                "Mescolare le unità. Inserire a in centimetri e c in metri corrompe la divisione in silenzio. Soluzione: converti prima tutto in un'unità.",
                "Usare lati che non formano un triangolo rettangolo. La formula presuppone un angolo retto, quindi 2, 3, 4 dà sciocchezze. Soluzione: verifica prima che a^2 + b^2 = c^2.",
                "Confondere l'altezza con uno dei cateti. I libri di testo che chiedono l'altezza di solito intendono quella all'ipotenusa. Soluzione: conferma quale altezza vuole la domanda.",
                "Arrotondare troppo presto i valori intermedi. Arrotondare 60/13 a 4,6 a metà calcolo introduce errore. Soluzione: arrotonda solo la risposta finale.",
                "Usare male una formula dell'area. Scrivere Area = c per h senza la metà raddoppia la risposta. Soluzione: usa Area = ch/2 quando risolvi per h.",
                "Confondere l'altezza all'ipotenusa con l'altezza relativa a un cateto. Sono segmenti diversi. Soluzione: l'altezza all'ipotenusa è il segmento interno più corto h = ab/c.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Usi pratici dei calcoli dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Gli studenti incontrano questa altezza nei compiti di geometria su area, similitudine e media geometrica, mentre gli insegnanti la usano per collegare il teorema di Pitagora con le formule dell'area in un'unica figura, dato che un singolo diagramma contiene sia [[ab/2]] sia [[ch/2]]. Disegnatori e progettisti la usano quando un pannello o una staffa triangolare deve essere quotato a partire dalla sua altezza, e a volte i layout di controventi triangolari richiedono la distanza incrociata più corta tra un nodo e un elemento.",
            },
            {
              "kind": "p",
              "text": "I geometri che lavorano con linee di mira a triangolo rettangolo usano la stessa relazione per confrontare le distanze calcolate con quelle misurate. Considerali come modelli matematici con misure idealizzate: il lavoro reale di ingegneria o costruzione richiede metodi di misura adeguati, ipotesi di progetto dichiarate e standard professionali prima che il risultato di qualsiasi formula sia affidabile in cantiere.",
            },
            {
              "kind": "p",
              "text": "In classe l'altezza serve anche come argomento ponte: lega il teorema di Pitagora, le formule dell'area e i triangoli simili in un'unica figura. Un singolo diagramma ben disegnato può sostenere un'intera lezione, ed è per questo che questa costruzione appare così spesso nei libri di testo.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di esercizio con soluzioni",
          "blocks": [
            {
              "kind": "p",
              "text": "Prova ogni problema da solo, poi controlla le risposte svolte qui sotto.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: numeri interi di base",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti di 6 cm e 8 cm e ipotenusa di 10 cm. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: terna pitagorica",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti di 12 m e 16 m e ipotenusa di 20 m. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: misure decimali",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti di 4,5 in e 6 in e ipotenusa di 7,5 in. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: cateti uguali",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due cateti uguali di 14 ft ciascuno. Trova l'ipotenusa e poi l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha lati di 2,4 m, 70 cm e 2,5 m. Converti prima le unità, poi trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di esercizio",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\frac{6 \\times 8}{10}=\\frac{48}{10}=4.8\\text{ cm}]]. Il modello 3-4-5 in scala dà un decimale pulito.",
            },
            {
              "kind": "p",
              "text": "2. [[12^2+16^2=144+256=400=20^2]] conferma la terna, poi [[h=\\frac{12 \\times 16}{20}=\\frac{192}{20}=9.6\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\frac{4.5 \\times 6}{7.5}=\\frac{27}{7.5}=3.6\\text{ in}]]. I decimali si dividono in modo ordinato quando la terna è coerente.",
            },
            {
              "kind": "p",
              "text": "4. [[c=\\sqrt{14^2+14^2}=14\\sqrt{2}\\text{ ft}]], poi [[h=\\frac{14 \\times 14}{14\\sqrt{2}}=7\\sqrt{2}\\approx 9.899\\text{ ft}]], esattamente metà dell'ipotenusa come previsto per 45-45-90.",
            },
            {
              "kind": "p",
              "text": "5. In centimetri: [[a=240]], [[b=70]], [[c=250]], e [[2.4^2+0.7^2=5.76+0.49=6.25=2.5^2]] torna. Poi [[h=\\frac{240 \\times 70}{250}=\\frac{16800}{250}=67.2\\text{ cm}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calcolatori correlati per il triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Con la formula dell'altezza in mano, scegli lo strumento successivo in base a ciò che conosci. Se conosci i segmenti dell'ipotenusa invece dei lati, vai al calcolatore delle proiezioni. Se conosci l'altezza e vuoi l'area, lo strumento <a href=\"/right-triangle-area-from-hypotenuse-and-altitude-calculator/\">area da ipotenusa e altezza</a> inverte il calcolo della sezione sull'area. I cinque calcolatori correlati qui sotto coprono ogni calcolo vicino. Inizia dallo strumento che corrisponde alle misure che hai già, e lascia che ogni risultato verifichi il successivo.",
            },
          ],
        },
      },
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Qual è la formula dell'altezza dai tre lati?",
          "answer": "La formula è [[h=\\frac{ab}{c}]], dove [[a]] e [[b]] sono i due cateti perpendicolari e [[c]] è l'ipotenusa. Moltiplica i cateti, poi dividi per l'ipotenusa. Il risultato è una lunghezza nella stessa unità dei lati inseriti.",
        },
        {
          "question": "Come si trova l'altezza di un triangolo rettangolo?",
          "answer": "Identifica l'angolo retto, etichetta i due cateti [[a]] e [[b]] e l'ipotenusa [[c]], assicurandoti che tutte le unità coincidano. Poi calcola [[h=\\frac{ab}{c}]]. Per un triangolo 3-4-5 questo dà [[h=\\frac{12}{5}=2.4]], un segmento più corto di ciascun cateto.",
        },
        {
          "question": "Perché l'ipotenusa è al denominatore?",
          "answer": "Deriva dalla dimostrazione dell'area. L'area è [[ab/2]] usando i cateti e [[ch/2]] usando l'ipotenusa come base. Uguagliando le due si ottiene [[ab=ch]], e risolvendo per [[h]] si mette [[c]] al denominatore. Più lunga è l'ipotenusa, più corta è l'altezza a parità di area.",
        },
        {
          "question": "Posso calcolare l'altezza usando solo due lati?",
          "answer": "Sì, con un passaggio in più. Se conosci entrambi i cateti, trova prima l'ipotenusa con [[c=\\sqrt{a^2+b^2}]]. Se conosci un cateto e l'ipotenusa, trova l'altro cateto con [[b=\\sqrt{c^2-a^2}]]. Poi usa [[h=\\frac{ab}{c}]] come al solito.",
        },
        {
          "question": "L'altezza è la stessa cosa dell'altezza?",
          "answer": "Dipende da quale altezza si intende. Altezza di solito indica la distanza perpendicolare a una base scelta, quindi l'altezza all'ipotenusa è l'altezza quando la base è l'ipotenusa. Se come base si sceglie un cateto, l'altezza è l'altro cateto, un segmento del tutto diverso.",
        },
        {
          "question": "L'altezza è sempre più corta dei cateti?",
          "answer": "Sì, l'altezza all'ipotenusa è sempre più corta di ciascun cateto dello stesso triangolo. È il segmento più corto dal vertice dell'angolo retto all'ipotenusa, mentre ciascun cateto è un percorso più lungo verso lo stesso lato. È anche più corta dell'ipotenusa stessa.",
        },
        {
          "question": "Posso usare questa formula per qualsiasi triangolo?",
          "answer": "No, solo per i triangoli rettangoli. La derivazione dipende dalla perpendicolarità dei cateti, che dà l'area come [[ab/2]]. Per un triangolo acutangolo o ottusangolo, trova l'altezza con la formula generale dell'area o con la trigonometria. Conferma sempre prima l'angolo retto.",
        },
        {
          "question": "Cosa fare se le lunghezze dei lati non soddisfano il teorema di Pitagora?",
          "answer": "Allora non formano un triangolo rettangolo e la formula non si applica. Misura di nuovo i lati o ricontrolla le etichette, dato che il lato più lungo deve essere l'ipotenusa. Piccole differenze di arrotondamento sono accettabili, ma una grande discrepanza significa che il triangolo non è rettangolo.",
        },
        {
          "question": "Come si trova l'altezza di un triangolo 3-4-5?",
          "answer": "Moltiplica i cateti e dividi per l'ipotenusa: [[h=\\frac{3 \\times 4}{5}=\\frac{12}{5}=2.4\\text{ cm}]] (o qualunque unità usino i tuoi lati). Il triangolo 3-4-5 è l'esempio svolto classico perché tutti e tre i lati sono numeri interi.",
        },
        {
          "question": "Qual è l'altezza di un triangolo 5-12-13?",
          "answer": "È [[h=\\frac{5 \\times 12}{13}=\\frac{60}{13}\\approx 4.615]], nell'unità dei lati. Tieni la frazione esatta [[60/13]] quando ti serve la massima precisione, e arrotonda a 4,615 solo per la risposta finale riportata.",
        },
        {
          "question": "Come è legata l'altezza all'area?",
          "answer": "L'area può essere scritta in due modi: [[A=\\frac{ab}{2}]] e [[A=\\frac{ch}{2}]]. Riarrangiando la seconda si ottiene [[h=\\frac{2A}{c}]], quindi conoscere l'area e l'ipotenusa è un'altra strada verso la stessa altezza. Entrambe le forme descrivono il triangolo identico.",
        },
        {
          "question": "Qual è la differenza tra altezza dai lati e altezza dalle proiezioni?",
          "answer": "L'altezza dai lati usa [[h=\\frac{ab}{c}]] con le tre lunghezze dei lati. L'altezza dalle proiezioni usa [[h=\\sqrt{pq}]] con i due segmenti dell'ipotenusa. Entrambe trovano lo stesso segmento; la scelta dipende da quali misure hai.",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per il triangolo rettangolo",
      "relatedIntro": "Scegli il calcolatore che corrisponde alle misure che hai già.",
      "relatedItems": [
        "Calcolatore dell'altezza del triangolo rettangolo",
        "Calcolatore dell'altezza del triangolo rettangolo dalle proiezioni",
        "Calcolatore delle proiezioni del triangolo rettangolo",
        "Calcolatore dell'area del triangolo rettangolo",
        "Calcolatore dell'area del triangolo rettangolo dall'altezza",
      ],
    },
};
