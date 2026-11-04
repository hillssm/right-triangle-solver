// perimeterGuideTranslations.b2it.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Italian (it).
export const B2_IT = {
  "it": {
    "tocHeading": "Navigazione delle sezioni",
    "tocItems": {
      "sec-intro": "Come calcolare il perimetro di un triangolo rettangolo",
      "sec-geometry": "Che cos'è un triangolo rettangolo?",
      "sec-definition": "Che cos'è il perimetro di un triangolo rettangolo?",
      "sec-howto": "Come trovare il perimetro di un triangolo rettangolo",
      "sec-examples": "Esempi passo passo del perimetro del triangolo rettangolo",
      "sec-missing": "Come calcolare il perimetro di un triangolo rettangolo con un lato mancante",
      "sec-applications": "Applicazioni nella vita reale del perimetro del triangolo rettangolo",
      "sec-properties": "Proprietà speciali del perimetro di un triangolo rettangolo",
      "sec-vs-area": "Qual è la differenza tra perimetro e area?",
      "sec-semiperimeter": "Qual è la relazione tra perimetro e semiperimetro?",
      "sec-units": "Le unità di misura nei calcoli del perimetro del triangolo rettangolo",
      "sec-mistakes": "Errori comuni nel calcolo del perimetro del triangolo rettangolo",
      "sec-verify": "Come verificare che il perimetro del triangolo rettangolo sia corretto",
      "sec-related": "Esplora le calcolatrici correlate per il triangolo rettangolo",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Conclusione"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare il perimetro di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Prendi un triangolo rettangolo con lati [[a=3]], [[b=4]] e [[c=5]]. Il suo perimetro è [[P=3+4+5]], cioè [[[\\boxed{P=12\\text{ units}}]]]. Il numero 12 indica la distanza completa lungo il confine del triangolo: percorri tutti e tre i lati e hai viaggiato per 12 unità." },
          { "kind": "p", "text": "Questa calcolatrice esegue esattamente questa addizione per qualsiasi triangolo rettangolo. Inserisci i due cateti e l'ipotenusa, e restituisce la lunghezza totale del confine con i passaggi dettagliati e un diagramma interattivo. Servono tre lunghezze dei lati perché il confine ha tre spigoli, e l'ipotenusa deve essere inclusa: è uno di quei tre spigoli anche se non tocca mai l'angolo retto. I due cateti formano l'angolo quadrato, e l'ipotenusa si estende di fronte a esso per chiudere la figura." },
          { "kind": "p", "text": "Il perimetro è una misura lineare, non una misura di area. Risponde a \"quanto bordo mi serve?\" invece di \"quanta superficie c'è dentro?\" Questa distinzione lo rende il numero giusto ogni volta che stimi recinzioni, rifiniture, telai, fili, corde o bordi in tessuto attorno a una forma triangolare rettangola." }
        ]
      },
      "sec-geometry": {
        "h2": "Che cos'è un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Prima di iniziare qualsiasi addizione, i tre lati devono essere etichettati correttamente. I simboli seguenti restano fissi per tutta la guida, e la calcolatrice usa gli stessi nomi." },
          { "kind": "h3", "text": "Definizione di triangolo rettangolo" },
          { "kind": "p", "text": "Un triangolo rettangolo è un triangolo che contiene un angolo interno che misura esattamente 90 gradi. Ha tre vertici, tre lati, due angoli acuti e un angolo retto, di solito contrassegnato da un piccolo quadrato. I due lati che formano l'angolo retto sono i cateti; il lato opposto all'angolo retto è l'ipotenusa. Poiché gli angoli di qualsiasi triangolo sommano a 180 gradi, [[A+B+C=180^\\circ]], e con [[C=90^\\circ]] segue che [[[\\boxed{A+B=90^\\circ}]]]: i due angoli acuti sono complementari, quindi conoscerne uno determina l'altro. La somma degli angoli è importante quando si identifica un triangolo rettangolo perché è il test che le lunghezze dei lati devono superare: solo un vero angolo di 90 gradi produce la relazione tra i lati da cui dipende il resto di questa guida." },
          { "kind": "h3", "text": "Cosa sono i due cateti?" },
          { "kind": "p", "text": "Il cateto [[a]] e il cateto [[b]] sono i due lati che si incontrano nel vertice dell'angolo retto, perpendicolari tra loro. Ciascuno può essere disegnato orizzontale o verticale a seconda dell'orientamento del triangolo; ciò che li definisce è l'angolo di 90 gradi che formano, non la loro direzione sul foglio. Differiscono dall'ipotenusa per posizione e lunghezza: ogni cateto tocca l'angolo retto, e ogni cateto è più corto dell'ipotenusa. Nel lavoro sul perimetro il loro ruolo è semplice: entrambi sono spigoli del confine, quindi entrambi entrano nella somma." },
          { "kind": "h3", "text": "Che cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto, sempre il lato più lungo del triangolo. Non forma mai l'angolo retto; si estende di fronte a esso, unendo le estremità lontane dei due cateti. Differisce dai cateti sia per posizione che per lunghezza: i cateti si incontrano a 90 gradi, mentre l'ipotenusa incontra ciascun cateto con un angolo acuto. Completa il confine triangolare, ed è per questo che deve essere inclusa nei calcoli del perimetro. Quando entrambi i cateti sono noti, il teorema di Pitagora la ricava: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Come identificare le etichette corrette dei lati" },
          { "kind": "p", "text": "[[a]] e [[b]] sono i due lati che si incontrano a 90 gradi, e [[c]] è opposto all'angolo retto. In un triangolo rettangolo non degenere [[c]] è il lato più lungo. Il marcatore dell'angolo retto indica quale lato è [[c]]: è quello che non tocca quel vertice. Un rapido controllo di ordinamento aiuta: ordina i tre numeri, e il più grande deve svolgere il ruolo di [[c]]. Se il lato più grande non si trova di fronte all'angolo quadrato, le etichette sono sbagliate, e ogni calcolo basato su di esse sarà sbagliato." },
          { "kind": "h3", "text": "La formula del perimetro vale solo per i triangoli rettangoli?" },
          { "kind": "p", "text": "Qui c'è un'importante distinzione matematica. La formula [[P=a+b+c]] vale per ogni triangolo, rettangolo o no: qualsiasi confine a tre lati si somma allo stesso modo. Ciò che la condizione dell'angolo retto aggiunge è la relazione speciale [[a^2+b^2=c^2]], utile per trovare i lati mancanti e per verificare se le misure descrivono davvero un triangolo rettangolo. La formula del perimetro è universale; la relazione pitagorica è il bonus del triangolo rettangolo." }
        ],
        "imgAlt": "Triangolo rettangolo ABC con cateti a e b, ipotenusa c, angolo retto in C e confine del perimetro evidenziato",
        "figcaption": "Triangolo ABC: i cateti a e b si incontrano nell'angolo retto C, l'ipotenusa c chiude il confine, e P = a + b + c percorre tutti e tre gli spigoli."
      },
      "sec-definition": {
        "h2": "Che cos'è il perimetro di un triangolo rettangolo?",
        "blocks": [
          { "kind": "h3", "text": "Definizione di perimetro" },
          { "kind": "p", "text": "Il perimetro è la distanza totale attorno al confine esterno di una figura bidimensionale. Per un triangolo è la somma delle lunghezze dei suoi tre lati: [[[\\boxed{P=a+b+c}]]]. Tutti e tre i lati devono essere inclusi perché il confine non è completo finché ogni spigolo non è stato contato. Lasciarne fuori uno non dà un perimetro più corto; dà una quantità diversa e sbagliata." },
          { "kind": "h3", "text": "Perché l'ipotenusa conta nel perimetro?" },
          { "kind": "p", "text": "Il perimetro misura il confine esterno completo, e l'ipotenusa non è una misura facoltativa o interna. È uno dei tre spigoli esterni. Prendi [[a=3]], [[b=4]], [[c=5]]. Il calcolo errato [[3+4=7]] conta solo i due cateti, i lati dell'angolo quadrato. Il calcolo corretto [[3+4+5=12]] percorre l'intero triangolo e ritorna al punto di partenza. Il valore 7 è la lunghezza combinata dei due cateti, non il perimetro completo, perché il percorso dalla fine del cateto [[b]] all'inizio del cateto [[a]] corre lungo l'ipotenusa." },
          { "kind": "h3", "text": "Come funziona la formula del perimetro?" },
          { "kind": "p", "text": "La formula si scompone in tre parti. Primo lato: [[a]]. Secondo lato: [[b]]. Terzo lato: [[c]]. Combinati: [[P=a+b+c]]. L'addizione è sufficiente perché il perimetro è un totale di lunghezze, e le lunghezze lungo un unico percorso si sommano semplicemente. Non serve alcuna divisione, nessun quadrato, nessuna trigonometria: la formula è l'uso più semplice possibile della definizione di confine." },
          { "kind": "h3", "text": "Cosa rappresenta il perimetro nella vita reale?" },
          { "kind": "p", "text": "Il perimetro è la lunghezza totale del confine: il materiale necessario per girare una volta attorno a un oggetto. Questo lo rende il numero dietro le misure dei bordi, le dimensioni dei telai, le lunghezze dei bordi, i requisiti delle recinzioni, le rifiniture e le modanature, e le lunghezze di corde e fili. Misurare il confine esterno è un lavoro diverso dal misurare la superficie racchiusa dentro il triangolo. Recintare un giardino triangolare richiede il perimetro; coprire lo stesso giardino con il prato richiede l'area. Confondere i due fa comprare il materiale sbagliato." }
        ]
      },
      "sec-howto": {
        "h2": "Come trovare il perimetro di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Il calcolo segue una sequenza chiara. Ogni passaggio ha uno scopo: identificare, controllare, sostituire, sommare e verificare. Il triangolo 3-4-5 dimostra ogni passaggio." },
          { "kind": "p", "text": "<strong>Passaggio 1: individua i tre lati.</strong> Raccogli le misure [[a=3]], [[b=4]], [[c=5]]. Questo passaggio raccoglie i dati grezzi prima di qualsiasi calcolo." },
          { "kind": "p", "text": "<strong>Passaggio 2: individua i due cateti perpendicolari.</strong> Conferma che 3 e 4 sono i cateti, i lati che formano l'angolo di 90 gradi. Questo assegna a [[a]] e [[b]] i loro ruoli corretti." },
          { "kind": "p", "text": "<strong>Passaggio 3: individua l'ipotenusa opposta all'angolo retto.</strong> Conferma che 5 è l'ipotenusa: è il lato più lungo e si trova di fronte all'angolo quadrato. Questo previene l'errore di etichettatura più comune." },
          { "kind": "p", "text": "<strong>Passaggio 4: conferma che tutte e tre le misure usino unità compatibili.</strong> Qui tutte e tre sono semplici unità, quindi non serve alcuna conversione. Questo passaggio protegge dal sommare metri a piedi." },
          { "kind": "p", "text": "<strong>Passaggio 5: scrivi la formula.</strong> [[P=a+b+c]]. Scriverla mantiene visibile la struttura durante la sostituzione." },
          { "kind": "p", "text": "<strong>Passaggio 6: sostituisci le misure note.</strong> [[P=3+4+5]]. Ogni simbolo viene sostituito dal suo numero." },
          { "kind": "p", "text": "<strong>Passaggio 7: somma i tre valori.</strong> [[P=12]]. Una sola addizione è tutta l'aritmetica." },
          { "kind": "p", "text": "<strong>Passaggio 8: allega l'unità di misura lineare corretta.</strong> [[[\\boxed{P=12\\text{ units}}]]]. Il perimetro è una lunghezza, quindi prende unità lineari, mai unità quadrate." },
          { "kind": "p", "text": "<strong>Passaggio 9: verifica il risultato.</strong> Controlla [[3^2+4^2=5^2]]: [[9+16=25]]. I lati soddisfano il teorema di Pitagora, quindi il triangolo è davvero rettangolo e il perimetro è affidabile." },
          { "kind": "h3", "text": "Perché è importante identificare correttamente i lati?" },
          { "kind": "p", "text": "Un'etichettatura errata compromette tutto ciò che segue. La verifica matematica fallisce quando l'ipotenusa è etichettata male, perché il controllo pitagorico si aspetta che [[c]] sia il lato più lungo. I calcoli dei lati mancanti usano formule diverse per un cateto mancante rispetto a un'ipotenusa mancante, quindi un'etichetta scambiata applica quella sbagliata. Gli input della calcolatrice sono legati a [[a]], [[b]] e [[c]], quindi valori scambiati producono una risposta plausibile ma errata. Anche la visualizzazione interattiva del triangolo apparirà distorta quando un valore di cateto finisce nello slot dell'ipotenusa. Azzeccare le etichette una volta protegge ogni passaggio successivo." },
          { "kind": "h3", "text": "Posso calcolare il perimetro senza conoscere l'ipotenusa?" },
          { "kind": "p", "text": "Sì, con un passaggio extra preliminare. Se entrambi i cateti sono noti, l'ipotenusa può essere trovata con il teorema di Pitagora: [[c=\\sqrt{a^2+b^2}]]. Una volta nota [[c]], il perimetro segue con un'addizione ordinaria. Questo non implica che la calcolatrice del perimetro accetti solo due lati: la calcolatrice ha bisogno di tutti e tre gli input, quindi il lato mancante deve essere calcolato a mano (o con la calcolatrice dei lati) prima di inserire i valori." }
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo del perimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "I quattro esempi seguenti mantengono i casi già svolti e ne ampliano le spiegazioni. Ciascuno sostituisce, somma e poi verifica tramite il teorema di Pitagora." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dato: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Formula: [[P=a+b+c]]" },
          { "kind": "p", "text": "Sostituisci: [[P=3+4+5]]" },
          { "kind": "p", "text": "Somma: [[P=12]]" },
          { "kind": "p", "text": "Risposta finale: [[[\\boxed{P=12\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[3^2+4^2=5^2]], cioè [[9+16=25]]. Le misure soddisfano il teorema di Pitagora, quindi formano un triangolo rettangolo: i due quadrati più piccoli costruiti sui cateti riempiono esattamente il quadrato costruito sull'ipotenusa." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dato: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Sostituisci: [[P=5+12+13]]" },
          { "kind": "p", "text": "Risposta finale: [[[\\boxed{P=30\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[5^2+12^2=13^2]], cioè [[25+144=169]]. L'uguaglianza conferma un triangolo rettangolo valido." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dato: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Sostituisci: [[P=8+15+17]]" },
          { "kind": "p", "text": "Risposta finale: [[[\\boxed{P=40\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[8^2+15^2=17^2]], cioè [[64+225=289]]. Anche qui i quadrati si bilanciano, confermando l'angolo retto." },
          { "kind": "h3", "text": "Esempio 4: lunghezze dei lati decimali" },
          { "kind": "p", "text": "Dato: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Sostituisci: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Risposta finale: [[[\\boxed{P=15\\text{ units}}]]]" },
          { "kind": "p", "text": "Verifica: [[2.5^2+6^2=6.5^2]], cioè [[6.25+36=42.25]]. I valori decimali non cambiano la formula: l'addizione funziona allo stesso modo per numeri interi e decimali, e l'aritmetica di verifica è identica." }
        ],
        "table": {
          "headers": ["Triangolo", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro P", "Verifica"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["La tabella mostra come diverse lunghezze dei lati producano diverse misure del confine mentre lo stesso ritmo in due passaggi, somma e poi verifica, resta invariato."]
      },
      "sec-missing": {
        "h2": "Come calcolare il perimetro di un triangolo rettangolo con un lato mancante",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice del perimetro esistente richiede tutte e tre le lunghezze dei lati. Se un lato è sconosciuto, calcolalo prima con il teorema di Pitagora, poi somma. I tre casi seguenti coprono ogni possibilità." },
          { "kind": "h3", "text": "Caso 1: trovare l'ipotenusa mancante" },
          { "kind": "p", "text": "Quando entrambi i cateti sono noti: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "p", "text": "Esempio: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Ora calcola: [[P=6+8+10]], quindi [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 2: trovare un cateto mancante" },
          { "kind": "p", "text": "Quando l'ipotenusa [[c]] e il cateto [[a]] sono noti: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]" },
          { "kind": "p", "text": "Esempio: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Ora calcola: [[P=5+12+13]], quindi [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 3: trovare l'altro cateto mancante" },
          { "kind": "p", "text": "Quando l'ipotenusa [[c]] e il cateto [[b]] sono noti: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]" },
          { "kind": "p", "text": "Esempio: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Ora calcola: [[P=8+15+17]], quindi [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Perché devi prima trovare il lato mancante?" },
          { "kind": "p", "text": "Il perimetro rappresenta il confine completo. Ignorare un lato sconosciuto produce un risultato incompleto: due lati noti danno un percorso parziale, non il perimetro. Questi calcoli dei lati mancanti sono metodi matematici di supporto, non modalità aggiuntive nella calcolatrice del perimetro esistente. Quando conosci solo due lati, la calcolatrice dei lati del triangolo rettangolo recupera il terzo, e poi la calcolatrice del perimetro completa il lavoro." }
        ],
        "imgAlt": "Triangolo rettangolo con cateti 6 e 8, ipotenusa trovata come 10 con Pitagora, poi perimetro 24",
        "figcaption": "I cateti 6 e 8 danno c = 10 con il teorema di Pitagora, poi P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Applicazioni nella vita reale del perimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Seguono dodici esempi realistici, completamente svolti. Ciascuno nomina una situazione, dà tre misure dei lati, mostra l'addizione e spiega cosa aiuta a stimare il risultato. Considera ciascuno come un modello geometrico triangolare rettangolo semplificato: gli oggetti reali sono raramente triangoli perfetti, quindi le tolleranze di materiale, gli scarti di taglio e la verifica costruttiva restano fuori dal numero del perimetro stesso." },
          { "kind": "h3", "text": "Esempio 1: telaio di finestra in vetro triangolare" },
          { "kind": "p", "text": "Un telaio di finestra triangolare ha [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Allora [[P=3+4+5]], quindi [[[\\boxed{P=12\\text{ m}}]]]. I 12 metri rappresentano la lunghezza totale attorno al contorno triangolare della finestra, la lunghezza del profilo del telaio da tagliare. Le giunzioni del telaio e le tolleranze di taglio possono richiedere materiale aggiuntivo oltre i 12 metri." },
          { "kind": "h3", "text": "Esempio 2: rifinitura del bordo del tetto" },
          { "kind": "p", "text": "Una sezione di tetto triangolare rettangola ha [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Allora [[P=6+8+10]], quindi [[[\\boxed{P=24\\text{ ft}}]]]. Il perimetro stima la rifinitura attorno al contorno triangolare dell'estremità del tetto. Gli angoli e le sovrapposizioni alla gronda si aggiungono alla lunghezza da acquistare." },
          { "kind": "h3", "text": "Esempio 3: recinzione di un giardino triangolare" },
          { "kind": "p", "text": "Una sezione di giardino triangolare ha [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Allora [[P=5+12+13]], quindi [[[\\boxed{P=30\\text{ m}}]]]. La lunghezza totale del confine stima la recinzione necessaria attorno al giardino. Cancelli, pali, sovrapposizioni e tolleranze di installazione si contano separatamente dai 30 metri di linea di recinzione." },
          { "kind": "h3", "text": "Esempio 4: staffa di supporto in acciaio" },
          { "kind": "p", "text": "Una staffa metallica triangolare rettangola ha [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Allora [[P=8+15+17]], quindi [[[\\boxed{P=40\\text{ cm}}]]]. Il perimetro descrive il bordo esterno della staffa e aiuta a stimare il materiale protettivo per i bordi. Non determina la resistenza strutturale, che dipende da spessore, lega e percorsi di carico piuttosto che dalla lunghezza del bordo." },
          { "kind": "h3", "text": "Esempio 5: striscione in tessuto triangolare" },
          { "kind": "p", "text": "Uno striscione in tessuto ha [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Allora [[P=9+12+15]], quindi [[[\\boxed{P=36\\text{ ft}}]]]. Il perimetro stima la lunghezza totale del bordo che richiede orlatura o bordatura. Il tessuto aggiuntivo per cuciture e pieghe è escluso dai 36 piedi." },
          { "kind": "h3", "text": "Esempio 6: telaio di cartello triangolare" },
          { "kind": "p", "text": "Un pannello segnaletico triangolare rettangolo ha [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Allora [[P=12+16+20]], quindi [[[\\boxed{P=48\\text{ in}}]]]. Il perimetro stima il telaio o il bordo decorativo attorno al pannello." },
          { "kind": "h3", "text": "Esempio 7: bordatura per aiuole" },
          { "kind": "p", "text": "Una sezione di aiuola triangolare rettangola ha [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Allora [[P=7+24+25]], quindi [[[\\boxed{P=56\\text{ m}}]]]. Questo risultato stima la lunghezza completa della bordatura per la sezione, prima di scarti e sovrapposizioni delle giunzioni." },
          { "kind": "h3", "text": "Esempio 8: telaio di supporto per pannello solare" },
          { "kind": "p", "text": "Un piccolo telaio di supporto triangolare rettangolo ha [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Allora [[P=9+40+41]], quindi [[[\\boxed{P=90\\text{ cm}}]]]. Il perimetro descrive il contorno triangolare completo del telaio." },
          { "kind": "h3", "text": "Esempio 9: bordo di tenda da sole triangolare" },
          { "kind": "p", "text": "Una sezione di tenda da sole triangolare rettangola ha [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Allora [[P=15+20+25]], quindi [[[\\boxed{P=60\\text{ ft}}]]]. Il perimetro stima il materiale di bordo necessario attorno al tessuto, esclusi i supporti di fissaggio." },
          { "kind": "h3", "text": "Esempio 10: rifinitura dell'estremità del tetto di un magazzino" },
          { "kind": "p", "text": "Una sezione semplificata dell'estremità del tetto di un magazzino ha [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Allora [[P=11+60+61]], quindi [[[\\boxed{P=132\\text{ ft}}]]]. Il perimetro totale rappresenta i tre spigoli esterni della sezione triangolare modellata." },
          { "kind": "h3", "text": "Esempio 11: pannello di fabbricazione industriale" },
          { "kind": "p", "text": "Un pannello di fabbricazione triangolare rettangolo ha [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Allora [[P=13+84+85]], quindi [[[\\boxed{P=182\\text{ cm}}]]]. Il risultato aiuta a stimare i profili protettivi per i bordi o il materiale di bordo per il pannello." },
          { "kind": "h3", "text": "Esempio 12: fazzoletto di supporto in compensato" },
          { "kind": "p", "text": "Una piastra di supporto in compensato triangolare rettangola ha [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Allora [[P=28+45+53]], quindi [[[\\boxed{P=126\\text{ cm}}]]]. Il perimetro rappresenta il bordo esterno completo della piastra in compensato." }
        ],
        "table": {
          "headers": ["Applicazione pratica", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro P", "Unità"],
          "rows": [
            ["Telaio di finestra in vetro triangolare", "3", "4", "5", "12", "m"],
            ["Rifinitura del bordo del tetto", "6", "8", "10", "24", "ft"],
            ["Recinzione di un giardino triangolare", "5", "12", "13", "30", "m"],
            ["Staffa di supporto in acciaio", "8", "15", "17", "40", "cm"],
            ["Striscione in tessuto triangolare", "9", "12", "15", "36", "ft"],
            ["Telaio di cartello triangolare", "12", "16", "20", "48", "in"],
            ["Bordatura per aiuole", "7", "24", "25", "56", "m"],
            ["Telaio di supporto per pannello solare", "9", "40", "41", "90", "cm"],
            ["Bordo di tenda da sole triangolare", "15", "20", "25", "60", "ft"],
            ["Rifinitura dell'estremità del tetto di un magazzino", "11", "60", "61", "132", "ft"],
            ["Pannello di fabbricazione industriale", "13", "84", "85", "182", "cm"],
            ["Fazzoletto di supporto in compensato", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Ricorda i limiti pratici: possono servire tolleranze di materiale, gli scarti di taglio non sono inclusi, le giunzioni dei telai possono aggiungere requisiti di materiale, cancelli e aperture influiscono sulle quantità di recinzione, le misure costruttive reali vanno verificate, e il solo perimetro non determina la resistenza strutturale o la capacità di carico."],
        "imgAlt": "Quattro esempi reali: telaio di finestra, rifinitura del tetto, bordatura del giardino, staffa in acciaio",
        "figcaption": "Finestra, tetto, giardino e staffa: ogni pannello traccia il confine triangolare e il suo perimetro."
      },
      "sec-properties": {
        "h2": "Proprietà speciali del perimetro di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Oltre la semplice addizione, il perimetro di un triangolo rettangolo obbedisce a diverse disuguaglianze precise. Servono anche come rapidi controlli di plausibilità su qualsiasi risultato calcolato." },
          { "kind": "h3", "text": "Il perimetro è maggiore del doppio dell'ipotenusa" },
          { "kind": "p", "text": "Per ogni triangolo valido, la disuguaglianza triangolare dà [[a+b>c]]. Aggiungi [[c]] a entrambi i membri: [[a+b+c>2c]]. Quindi [[[\\boxed{P>2c}]]]. In parole semplici: i due cateti insieme sono sempre più lunghi dell'ipotenusa, quindi aggiungere l'ipotenusa a entrambi i membri mantiene la disuguaglianza nello stesso verso. Per il triangolo 3-4-5, [[P=12]] e [[2c=10]], e 12 è davvero maggiore di 10." },
          { "kind": "h3", "text": "Il perimetro è minore del triplo dell'ipotenusa" },
          { "kind": "p", "text": "Poiché l'ipotenusa è più lunga di ciascun cateto, [[a<c]] e [[b<c]]. Quindi [[a+b<2c]]. Aggiungendo [[c]] si ottiene [[[\\boxed{P<3c}]]]. Questo è un controllo rapido utile: qualsiasi perimetro dichiarato pari o superiore al triplo dell'ipotenusa non può appartenere a un triangolo rettangolo valido. Per il triangolo 3-4-5, [[3c=15]], e 12 è comodamente al di sotto." },
          { "kind": "h3", "text": "Perimetro di un triangolo 45-45-90" },
          { "kind": "p", "text": "In un triangolo 45-45-90 entrambi i cateti hanno la stessa lunghezza. Sia ciascun cateto uguale a [[k]]. L'ipotenusa è [[c=k\\sqrt{2}]]. Quindi [[P=k+k+k\\sqrt{2}]], cioè [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Con [[k=5]], il perimetro è [[5(2+\\sqrt{2})\\approx17.07]]: due cateti di 5 più un'ipotenusa di circa 7,07." },
          { "kind": "h3", "text": "Perimetro di un triangolo 30-60-90" },
          { "kind": "p", "text": "Se il cateto più corto è [[k]], allora il cateto più lungo è [[k\\sqrt{3}]] e l'ipotenusa è [[2k]]. Quindi [[P=k+k\\sqrt{3}+2k]], cioè [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Con [[k=4]], i lati sono 4, circa 6,93 e 8, per un perimetro di circa 18,93." },
          { "kind": "h3", "text": "Quale triangolo rettangolo ha il perimetro maggiore a ipotenusa fissa?" },
          { "kind": "p", "text": "Intuitivamente, quando l'ipotenusa resta fissa, il perimetro cresce man mano che i due cateti crescono insieme, ed è massimo quando nessun cateto è sacrificato: quando entrambi i cateti sono uguali. Questo è il triangolo 45-45-90. L'enunciato preciso usa la disuguaglianza [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Poiché [[a^2+b^2=c^2]], segue che [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], con uguaglianza esattamente quando [[a=b]]. Quindi tra tutti i triangoli rettangoli che condividono un'ipotenusa, il triangolo rettangolo isoscele vince la gara del perimetro." }
        ]
      },
      "sec-vs-area": {
        "h2": "Qual è la differenza tra perimetro e area?",
        "blocks": [
          { "kind": "p", "text": "Perimetro e area descrivono entrambi un triangolo, ma rispondono a domande diverse. Questa sezione traccia il confine con cura." },
          { "kind": "h3", "text": "Il perimetro misura il confine esterno" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] misura la distanza totale attorno al triangolo. Le sue unità sono lineari: metri, centimetri, millimetri, piedi, pollici. Indica quanto materiale traccia il bordo." },
          { "kind": "h3", "text": "L'area misura la superficie racchiusa" },
          { "kind": "p", "text": "Per un triangolo rettangolo, [[[\\boxed{K=\\frac{ab}{2}}]]]. I due cateti perpendicolari fungono da base e altezza, quindi l'ipotenusa non compare nella formula. L'area usa unità quadrate: metri quadrati, centimetri quadrati, piedi quadrati, pollici quadrati. Indica quanta superficie si trova dentro il confine." },
          { "kind": "h3", "text": "Confronto svolto con un triangolo 3-4-5" },
          { "kind": "p", "text": "Perimetro: [[P=3+4+5]], quindi [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Area: [[K=\\frac{3\\times4}{2}]], quindi [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "I numeri 12 e 6 descrivono proprietà completamente diverse dello stesso triangolo: uno è la passeggiata attorno a esso, l'altro è il terreno che copre." },
          { "kind": "h3", "text": "Due triangoli rettangoli possono avere lo stesso perimetro ma aree diverse?" },
          { "kind": "p", "text": "Sì. Il solo perimetro non determina univocamente l'area; la forma e le proporzioni del triangolo influiscono sull'area racchiusa. Un triangolo 3-4-5 ha perimetro 12 e area 6. Anche un triangolo 45-45-90 può avere perimetro 12: da [[P=k(2+\\sqrt{2})=12]], il cateto è [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], e la sua area è [[K=\\frac{k^2}{2}\\approx6.18]] unità quadrate, leggermente maggiore di 6. Stessa lunghezza del confine, interno diverso: la forma isoscele racchiude un po' di più." }
        ],
        "imgAlt": "Triangolo 3-4-5 con confine evidenziato P uguale a 12 e interno ombreggiato area K uguale a 6",
        "figcaption": "Il bordo evidenziato è il perimetro; l'interno ombreggiato è l'area. Due misure diverse."
      },
      "sec-semiperimeter": {
        "h2": "Qual è la relazione tra perimetro e semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro è metà del perimetro completo: [[[\\boxed{s=\\frac{P}{2}}]]]. Per un triangolo rettangolo questo è [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Resta una misura di supporto in questa pagina, non un secondo argomento principale." },
          { "kind": "h3", "text": "Esempio numerico" },
          { "kind": "p", "text": "Usa [[a=3,\\;b=4,\\;c=5]]. Il perimetro è [[P=12]], quindi il semiperimetro è [[s=\\frac{12}{2}=6]]. Entrambi sono misure lineari nelle stesse unità; uno è semplicemente metà dell'altro." },
          { "kind": "h3", "text": "Perché il semiperimetro è utile?" },
          { "kind": "p", "text": "Il semiperimetro è un'importante misura intermedia nella geometria del triangolo. Compare nella formula di Erone per l'area, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], e nella relazione dell'inraggio [[K=rs]], e semplifica diverse dimostrazioni geometriche avanzate. Ogni volta che una formula richiede [[s]], calcola prima il perimetro e dimezzalo. Per uno strumento dedicato, usa la calcolatrice del semiperimetro del triangolo rettangolo." }
        ]
      },
      "sec-units": {
        "h2": "Le unità di misura nei calcoli del perimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Il perimetro funziona in qualsiasi unità di lunghezza: metri, centimetri, millimetri, chilometri, piedi, pollici, iarde o miglia. Il numero cambia con l'unità, ma il triangolo no." },
          { "kind": "h3", "text": "Perché tutte e tre le misure dei lati devono usare unità compatibili?" },
          { "kind": "p", "text": "Il perimetro si calcola tramite addizione, e l'addizione ha senso solo tra quantità omogenee. Sommare 3 piedi a 48 pollici senza conversione mescola due scale e produce un totale senza significato. Converti prima ogni lato in un'unica unità comune, poi somma." },
          { "kind": "h3", "text": "Esempio svolto di conversione di unità" },
          { "kind": "p", "text": "Dati [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Converti i pollici in piedi: [[48\\text{ inches}=4\\text{ ft}]]. Ora tutti e tre i lati sono in piedi, quindi [[P=3+4+5]] e [[[\\boxed{P=12\\text{ ft}}]]]. La conversione deve avvenire prima dell'addizione, non dopo." },
          { "kind": "h3", "text": "Come aiutano i selettori di unità della calcolatrice" },
          { "kind": "p", "text": "Ciascuno dei tre input in questa pagina ha il proprio selettore di unità. Quando scegli unità diverse per lati diversi, la calcolatrice converte ogni input nell'unità comune automaticamente prima di sommare: legge l'unità scelta per il primo lato e scala gli altri due di conseguenza, usando rapporti di lunghezza esatti (1 pollice = 0,0254 m, 1 piede = 0,3048 m, e così via). Il risultato viene riportato in quell'unità comune. Puoi comunque convertire a mano come mostrato sopra, ma i selettori eliminano l'aritmetica." },
          { "kind": "h3", "text": "Lavorare con misure decimali" },
          { "kind": "p", "text": "Usa [[a=2.5,\\;b=6,\\;c=6.5]]. Allora [[P=2.5+6+6.5]], quindi [[[\\boxed{P=15\\text{ units}}]]]. I valori decimali si sommano esattamente come i numeri interi; i punti decimali si allineano semplicemente nella somma." },
          { "kind": "h3", "text": "Lavorare con lunghezze dei lati irrazionali" },
          { "kind": "p", "text": "Prendi un triangolo con [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Allora [[P=1+1+\\sqrt{2}]], quindi [[[\\boxed{P=2+\\sqrt{2}}]]], circa [[P\\approx3.4142]]. Mantenere la forma radicale esatta è utile nei problemi matematici perché preserva la piena precisione; l'approssimazione decimale serve per il resoconto finale." },
          { "kind": "h3", "text": "Perché evitare di arrotondare troppo presto?" },
          { "kind": "p", "text": "L'arrotondamento prematuro introduce piccoli errori che l'addizione finale poi conserva. Se un lato è irrazionale, come [[\\sqrt{2}]], arrotondarlo a 1,41 prima di sommare riduce parte della vera lunghezza, e con diversi lati del genere l'errore si accumula. Mantieni la piena precisione durante i calcoli intermedi e arrotonda solo il risultato finale all'accuratezza richiesta dal problema." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo del perimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Sedici errori spiegano quasi ogni perimetro sbagliato. Ciascuno è spiegato con la sua causa e l'approccio corretto." },
          { "kind": "p", "text": "<strong>1. Dimenticare di includere l'ipotenusa.</strong> L'errore più comune: sommare i due cateti e fermarsi. Con 3-4-5 questo dà 7 invece di 12. Somma sempre tutti e tre i lati." },
          { "kind": "p", "text": "<strong>2. Usare solo i due cateti.</strong> Stessa causa radice del punto precedente, spesso per una lettura errata del problema. Il confine ha tre spigoli; contane tre." },
          { "kind": "p", "text": "<strong>3. Confondere il perimetro con l'area.</strong> Il perimetro è [[a+b+c]] in unità lineari; l'area è [[ab/2]] in unità quadrate. Leggi la domanda: \"attorno\" significa perimetro, \"dentro\" significa area." },
          { "kind": "p", "text": "<strong>4. Inserire l'ipotenusa come cateto.</strong> Mettere il valore più lungo in un campo dei cateti rompe la geometria. Lo slot dell'ipotenusa deve contenere il lato più lungo." },
          { "kind": "p", "text": "<strong>5. Scegliere il lato sbagliato come ipotenusa.</strong> Se 4 viene inserito come [[c]] mentre 5 sta in un campo dei cateti, ogni controllo fallisce. Ordina prima i valori: il più grande è [[c]]." },
          { "kind": "p", "text": "<strong>6. Usare misure che non formano un triangolo rettangolo.</strong> Verifica [[a^2+b^2=c^2]] prima di fidarti dell'etichetta \"triangolo rettangolo\". Se fallisce, la formula del perimetro somma comunque, ma il triangolo non è rettangolo." },
          { "kind": "p", "text": "<strong>7. Mescolare centimetri e metri.</strong> Sommare 3 m a 40 cm non dà 43 di nulla. Converti prima in un'unica unità." },
          { "kind": "p", "text": "<strong>8. Mescolare piedi e pollici.</strong> La classica trappola imperiale. Converti i pollici in piedi (dividi per 12) prima di sommare, oppure lascia fare ai selettori di unità." },
          { "kind": "p", "text": "<strong>9. Riportare il perimetro in unità quadrate.</strong> Un perimetro di 12 cm quadrati è un errore di categoria: la passeggiata attorno a un triangolo è una lunghezza, misurata in cm, m, ft o in." },
          { "kind": "p", "text": "<strong>10. Arrotondare le misure troppo presto.</strong> Arrotondare [[\\sqrt{2}]] a 1,4 prima di sommare accumula errore. Arrotonda solo la risposta finale." },
          { "kind": "p", "text": "<strong>11. Dimenticare di calcolare un lato mancante.</strong> Due lati noti non sono un perimetro. Recupera il terzo con il teorema di Pitagora prima, poi somma." },
          { "kind": "p", "text": "<strong>12. Usare il teorema di Pitagora in modo errato.</strong> La forma dell'ipotenusa somma i quadrati ([[c=\\sqrt{a^2+b^2}]]); la forma del cateto sottrae ([[b=\\sqrt{c^2-a^2}]]). Scambiarle inventa un lato che non esiste." },
          { "kind": "p", "text": "<strong>13. Inserire lunghezze dei lati negative o nulle.</strong> Le lunghezze sono positive. Un input nullo o negativo non descrive alcun triangolo, e la calcolatrice giustamente lo rifiuta." },
          { "kind": "p", "text": "<strong>14. Ignorare la disuguaglianza triangolare.</strong> Se [[a+b\\leq c]], le tre lunghezze non possono formare alcun triangolo. Controlla prima di calcolare." },
          { "kind": "p", "text": "<strong>15. Presumere che il semiperimetro sia il perimetro completo.</strong> Dividere la somma per 2 dà [[s]], non [[P]]. Per 3-4-5, [[(3+4+5)/2=6]] è il semiperimetro; il perimetro è 12." },
          { "kind": "p", "text": "<strong>16. Presumere che il solo perimetro determini l'area del triangolo.</strong> Come ha mostrato il confronto 3-4-5 contro 45-45-90, perimetri uguali possono nascondere aree diverse. Il perimetro fissa il confine, non l'interno." },
          { "kind": "p", "text": "<strong>Errato contro corretto, fianco a fianco.</strong> Dati [[a=3,\\;b=4,\\;c=5]]: errato è [[P=3+4=7]], che omette l'ipotenusa e misura solo i due cateti. Corretto è [[P=3+4+5=12]]. E [[(3+4+5)/2=6]] è il semiperimetro, una quantità diversa con i suoi usi, non il perimetro completo." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare che il perimetro del triangolo rettangolo sia corretto",
        "blocks": [
          { "kind": "p", "text": "Sette controlli indipendenti intercettano quasi ogni errore. Il triangolo 3-4-5 dimostra ciascuno. I controlli indipendenti contano perché falliscono in modi diversi: quando due metodi non correlati concordano, la risposta si è guadagnata la fiducia, che finisca nei compiti, nei disegni tecnici o nella pianificazione dei materiali." },
          { "kind": "p", "text": "<strong>Metodo 1: somma di nuovo tutti e tre i lati.</strong> Ricalcola [[P=a+b+c]] da zero: [[3+4+5=12]]. Un secondo passaggio intercetta errori di battitura e scivoloni aritmetici." },
          { "kind": "p", "text": "<strong>Metodo 2: verifica la relazione pitagorica.</strong> Controlla [[a^2+b^2=c^2]]: [[9+16=25]]. Questo conferma che i lati formano un triangolo rettangolo, il che convalida le etichette dei lati da cui dipende il perimetro." },
          { "kind": "p", "text": "<strong>Metodo 3: controlla l'ipotenusa.</strong> Conferma [[c>a]] e [[c>b]]: 5 è maggiore di 3 e maggiore di 4. Se la presunta ipotenusa non è il lato più lungo, le etichette sono sbagliate." },
          { "kind": "p", "text": "<strong>Metodo 4: controlla la disuguaglianza triangolare.</strong> Conferma [[a+b>c]]: [[3+4=7>5]]. La somma di due lati qualsiasi deve superare il terzo, altrimenti non esiste alcun triangolo." },
          { "kind": "p", "text": "<strong>Metodo 5: controlla i limiti del perimetro.</strong> Conferma [[2c<P<3c]]: [[10<12<15]]. Questi limiti sono rapidi controlli mentali per qualsiasi triangolo rettangolo valido." },
          { "kind": "p", "text": "<strong>Metodo 6: controlla le unità di misura.</strong> Conferma che tutti e tre gli input condividano un'unica unità. Unità miste invalidano la somma anche quando l'aritmetica è perfetta." },
          { "kind": "p", "text": "<strong>Metodo 7: confronta il risultato con la visualizzazione interattiva.</strong> Il diagramma esistente in questa pagina ridisegna il triangolo dai tuoi input. Se un lato è stato etichettato male o un valore digitato male, l'immagine appare sbagliata: un'ipotenusa più corta di un cateto, o una forma che non si chiude. Fidati dell'immagine quando non concorda con il numero, poi trova l'errore di input." }
        ]
      },
      "sec-conclusion": {
        "h2": "Tre lati, un confine, nessuna scorciatoia",
        "blocks": [
          { "kind": "p", "text": "Il perimetro di un triangolo rettangolo è l'idea più semplice di questa pagina e la più facile da sbagliare per omissione. La formula chiede tre numeri perché il confine ha tre spigoli, e l'ipotenusa si guadagna il posto nella somma come lo spigolo che chiude la figura. Tutto il resto, il metodo passo passo, il recupero del lato mancante, le disuguaglianze, i controlli di verifica, esiste per proteggere quell'unica addizione dai piccoli errori di etichettatura e di unità che producono risposte sbagliate dall'aspetto plausibile." },
          { "kind": "p", "text": "Usa la calcolatrice di questa pagina ogni volta che tutti e tre i lati sono misurati, recupera un lato mancante tramite il teorema di Pitagora quando non lo sono, e controlla il risultato rispetto ai limiti 2c < P < 3c prima che il numero finisca in un ordine di materiale. Quando la domanda riguarda la superficie dentro il confine, la calcolatrice dell'area è in attesa; quando riguarda metà del confine per una formula più profonda, la calcolatrice del semiperimetro subentra." }
        ]
      }
    },
    "relatedHeading": "Esplora le calcolatrici correlate per il triangolo rettangolo",
    "relatedIntro": "Ciascuno di questi strumenti estende il calcolo del perimetro in una direzione: lati mancanti, semiperimetri, superfici, misure combinate o il teorema dietro tutto.",
    "relatedItems": [
      "Calcolatrice delle misure del triangolo rettangolo",
      "Calcolatrice del semiperimetro del triangolo rettangolo",
      "Calcolatrice dei lati del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo",
      "Calcolatrice del teorema di Pitagora"
    ],
    "faqHeading": "Domande frequenti",
    "faqs": [
      { "question": "Qual è la formula del perimetro di un triangolo rettangolo?", "answer": "La formula è P = a + b + c, dove a e b sono i due cateti che formano l'angolo di 90 gradi e c è l'ipotenusa, il lato più lungo. Somma tutte e tre le lunghezze dei lati; il risultato è la lunghezza totale del confine in unità lineari." },
      { "question": "Come calcolo il perimetro di un triangolo rettangolo?", "answer": "Individua i due cateti e l'ipotenusa, conferma che tutti e tre usino la stessa unità, sostituisci in P = a + b + c e somma. Per un triangolo 3-4-5: P = 3 + 4 + 5 = 12 unità. La calcolatrice in questa pagina esegue gli stessi passaggi e mostra il suo lavoro." },
      { "question": "Perché devo includere l'ipotenusa?", "answer": "L'ipotenusa è uno dei tre spigoli esterni del triangolo, quindi il confine è incompleto senza di essa. Sommare solo i due cateti di un triangolo 3-4-5 dà 7, che è la lunghezza combinata dei cateti, non il perimetro. Il percorso completo attorno al triangolo è 3 + 4 + 5 = 12." },
      { "question": "Posso calcolare il perimetro se manca un lato?", "answer": "Sì, ma prima recupera il lato mancante con il teorema di Pitagora. Con cateti 6 e 8, l'ipotenusa è la radice quadrata di (36 + 64) = 10, quindi il perimetro è 6 + 8 + 10 = 24. Con ipotenusa 13 e cateto 5, il cateto mancante è la radice quadrata di (169 - 25) = 12, quindi il perimetro è 30." },
      { "question": "Come trovo l'ipotenusa prima di calcolare il perimetro?", "answer": "Usa c uguale alla radice quadrata di (a al quadrato + b al quadrato) quando entrambi i cateti sono noti. Per cateti 6 e 8: c = radice quadrata di (36 + 64) = radice quadrata di 100 = 10. Una volta nota l'ipotenusa, somma tutti e tre i lati per ottenere il perimetro." },
      { "question": "La formula del perimetro è diversa per un triangolo rettangolo?", "answer": "No. P = a + b + c vale per ogni triangolo. Ciò che è speciale nel triangolo rettangolo è la relazione pitagorica a^2 + b^2 = c^2, che permette di trovare un lato mancante o di verificare che le misure formino davvero un triangolo rettangolo." },
      { "question": "Qual è il perimetro di un triangolo rettangolo 3-4-5?", "answer": "Il perimetro è 3 + 4 + 5 = 12 unità. I lati soddisfano 9 + 16 = 25, confermando l'angolo retto. Versioni in scala come 6-8-10 o 9-12-15 mantengono la stessa forma con perimetri proporzionalmente maggiori." },
      { "question": "Come verifico che tre lati formino un triangolo rettangolo?", "answer": "Controlla che a^2 + b^2 = c^2 con c come lato più lungo. Per 3, 4, 5: 9 + 16 = 25, quindi il triangolo è rettangolo. Se l'uguaglianza fallisce, la formula del perimetro somma comunque, ma il triangolo non è un triangolo rettangolo." },
      { "question": "Qual è la differenza tra perimetro e area?", "answer": "Il perimetro (P = a + b + c) misura la distanza totale attorno al triangolo in unità lineari come metri o piedi. L'area (K = ab/2) misura la superficie dentro il triangolo in unità quadrate come metri quadrati. Per un triangolo 3-4-5 il perimetro è 12 unità e l'area è 6 unità quadrate." },
      { "question": "La calcolatrice del perimetro supporta valori decimali?", "answer": "Sì. Le lunghezze dei lati decimali funzionano esattamente come i numeri interi: per a = 2,5, b = 6, c = 6,5, il perimetro è 2,5 + 6 + 6,5 = 15 unità. Mantieni la piena precisione durante il calcolo e arrotonda solo la risposta finale." },
      { "question": "Quali unità dovrei usare per il perimetro?", "answer": "Qualsiasi unità di lunghezza va bene: metri, centimetri, millimetri, piedi, pollici, iarde o miglia. Tutti e tre i lati devono condividere la stessa unità prima di sommare. La calcolatrice converte ogni input in un'unità comune automaticamente tramite i selettori di unità di ciascun input." },
      { "question": "Qual è la relazione tra perimetro e semiperimetro?", "answer": "Il semiperimetro è esattamente metà del perimetro: s = P/2. Per un triangolo 3-4-5, P = 12 e s = 6. Il semiperimetro compare in formule avanzate come la formula di Erone per l'area e la relazione dell'inraggio K = rs." }
    ]
  }
};
