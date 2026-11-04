// semiperimeterGuideTranslations.b2it.ts: Right Triangle Semiperimeter Guide (Page 26 of 45) translation for Italian (it).
export const B2_IT = {
  "it": {
    "tocHeading": "Navigazione delle sezioni",
    "tocItems": {
      "sec-intro": "Come calcolare il semiperimetro di un triangolo rettangolo",
      "sec-geometry": "Che cos'è un triangolo rettangolo?",
      "sec-meaning": "Che cos'è il semiperimetro di un triangolo rettangolo?",
      "sec-formula": "Formula del semiperimetro del triangolo rettangolo",
      "sec-calculator": "Come usare la calcolatrice del semiperimetro del triangolo rettangolo",
      "sec-examples": "Esempi passo passo del semiperimetro del triangolo rettangolo",
      "sec-practical": "Applicazioni pratiche del semiperimetro del triangolo rettangolo",
      "sec-inradius": "Qual è il legame tra semiperimetro e raggio del cerchio inscritto del triangolo rettangolo?",
      "sec-heron": "Come si usa il semiperimetro nella formula di Erone?",
      "sec-vs-perimeter": "Qual è la differenza tra perimetro e semiperimetro?",
      "sec-missing-side": "Come calcolare il semiperimetro quando manca un lato",
      "sec-properties": "Proprietà importanti del semiperimetro del triangolo rettangolo",
      "sec-units": "Unità di misura nei calcoli del semiperimetro",
      "sec-mistakes": "Errori comuni nel calcolo del semiperimetro del triangolo rettangolo",
      "sec-verify": "Come verificare se il risultato del semiperimetro è corretto",
      "sec-related": "Scopri le calcolatrici correlate per i triangoli rettangoli",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Metà contorno, piena comprensione"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare il semiperimetro di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Somma i tre lati di un triangolo rettangolo, poi dividi il totale per due." },
          { "kind": "p", "text": "Questo è l'intero calcolo, e questa calcolatrice lo esegue per qualsiasi triangolo rettangolo una volta inseriti i due cateti e l'ipotenusa. Servono tre misure dei lati perché il triangolo ha tre spigoli, e l'ipotenusa deve essere inclusa: è uno di quei tre spigoli anche se non tocca mai l'angolo retto. Il totale si divide per due perché il semiperimetro è definito come esattamente la metà dell'intero perimetro, una quantità che ricorre di continuo nella geometria dei triangoli." },
          { "kind": "p", "text": "Un esempio rapido chiarisce l'idea. Dati [[a=3]], [[b=4]] e [[c=5]]:" },
          { "kind": "p", "text": "[[[s=\\frac{3+4+5}{2}]]]" },
          { "kind": "p", "text": "[[[s=\\frac{12}{2}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=6\\text{ units}}]]]" },
          { "kind": "p", "text": "L'intero perimetro è 12 unità, quindi il suo semiperimetro è 6 unità. Nota che il semiperimetro è una misura lineare, non una misura di area: è una lunghezza, espressa in metri, piedi o semplici unità, mai in unità quadrate. Diventa utile ogni volta che una formula richiede metà del perimetro, come nella formula di Erone per l'area, nella relazione del raggio del cerchio inscritto e in diverse dimostrazioni geometriche dove l'intero perimetro sarebbe solo d'intralcio." }
        ]
      },
      "sec-geometry": {
        "h2": "Che cos'è un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Prima di qualsiasi divisione per due, i tre lati vanno etichettati correttamente. I simboli qui sotto restano invariati in tutta la guida, e la calcolatrice usa gli stessi nomi." },
          { "kind": "h3", "text": "Definizione di triangolo rettangolo" },
          { "kind": "p", "text": "Un triangolo rettangolo è un triangolo che contiene un angolo interno di esattamente 90 gradi. Ha tre vertici, tre lati, due angoli acuti e un angolo retto, di solito segnato con un piccolo quadrato. I due lati che formano l'angolo retto sono i cateti; il lato opposto all'angolo retto è l'ipotenusa. Poiché gli angoli di qualsiasi triangolo sommano a 180 gradi, [[A+B+C=180^\\circ]], e con [[C=90^\\circ]] segue che [[[\\boxed{A+B=90^\\circ}]]]: i due angoli acuti sono complementari, quindi conoscendone uno si determina l'altro. Fissare bene questo quadro è importante perché la formula del semiperimetro tratta ogni lato come uno spigolo del contorno, e un lato etichettato male rovina il totale prima ancora che inizi la divisione." },
          { "kind": "h3", "text": "Quali sono i due cateti?" },
          { "kind": "p", "text": "Il cateto [[a]] e il cateto [[b]] sono i due lati che si incontrano nel vertice dell'angolo retto, perpendicolari tra loro. Ciascuno può essere disegnato orizzontale o verticale a seconda dell'orientamento del triangolo; ciò che li definisce è l'angolo di 90 gradi che formano, non la loro direzione sul foglio. Differiscono dall'ipotenusa per posizione e lunghezza: ogni cateto tocca l'angolo retto, e ogni cateto è più corto dell'ipotenusa. Nel lavoro sul semiperimetro il loro ruolo è semplice: entrambi sono spigoli del contorno, quindi entrambi entrano nella somma che viene dimezzata." },
          { "kind": "h3", "text": "Che cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto, sempre il lato più lungo del triangolo. Non forma mai l'angolo retto; lo attraversa da parte a parte, unendo le estremità lontane dei due cateti. Differisce dai cateti per posizione e lunghezza: i cateti si incontrano a 90 gradi, mentre l'ipotenusa incontra ciascun cateto con un angolo acuto. Completa il contorno triangolare, ed è per questo che va inclusa nel calcolo del semiperimetro. Quando entrambi i cateti sono noti, il teorema di Pitagora la recupera: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]" },
          { "kind": "h3", "text": "Come riconoscere le etichette corrette dei lati" },
          { "kind": "p", "text": "[[a]] e [[b]] sono i due lati che si incontrano a 90 gradi, e [[c]] è opposto all'angolo retto. In un triangolo rettangolo non degenere [[c]] è il lato più lungo. Il simbolo dell'angolo retto indica qual è il lato [[c]]: è quello che non tocca quel vertice. Un rapido controllo dell'ordinamento aiuta: ordina i tre numeri, e il più grande deve svolgere il ruolo di [[c]]. Se il lato più grande non si trova di fronte all'angolo quadrato, le etichette sono sbagliate, e anche il semiperimetro costruito su di esse sarà sbagliato." },
          { "kind": "h3", "text": "Perché il semiperimetro dipende da tutti e tre i lati?" },
          { "kind": "p", "text": "Il semiperimetro deriva dal perimetro completo, e il perimetro completo conta ogni spigolo del contorno. Anche se [[a]] e [[b]] sono perpendicolari, l'ipotenusa resta parte del contorno esterno del triangolo: è lo spigolo che chiude la figura. Escludere [[c]] non dà un semiperimetro più corto; dà una quantità diversa e sbagliata. Per [[a=3]], [[b=4]], [[c=5]], tralasciare l'ipotenusa produce [[(3+4)/2=3.5]], mentre il vero semiperimetro è [[(3+4+5)/2=6]]. Le 2,5 unità mancanti sono la quota dell'ipotenusa, e nessuna formula corretta può saltarla." }
        ],
        "imgAlt": "Triangolo rettangolo ABC con cateti a e b, ipotenusa c, angolo retto in C; mostrati P = a+b+c e s = (a+b+c)/2",
        "figcaption": "Triangolo ABC: i cateti a e b si incontrano nell'angolo retto C, l'ipotenusa c chiude il contorno, e s = (a + b + c) / 2 è la metà del perimetro."
      },
      "sec-meaning": {
        "h2": "Che cos'è il semiperimetro di un triangolo rettangolo?",
        "blocks": [
          { "kind": "h3", "text": "Definizione di semiperimetro" },
          { "kind": "p", "text": "Il semiperimetro è esattamente la metà dell'intero perimetro di un triangolo. Se [[P]] è la distanza completa attorno al triangolo, allora il semiperimetro [[s]] è [[[\\boxed{s=\\frac{P}{2}}]]] Per un triangolo rettangolo l'intero perimetro è [[P=a+b+c]], quindi la definizione diventa [[[\\boxed{s=\\frac{a+b+c}{2}}]]] Tutte e tre le lunghezze dei lati vengono sommate prima della divisione: la somma raccoglie l'intero contorno, e la divisione per due lo dimezza. Nulla viene tralasciato e nulla viene contato due volte." },
          { "kind": "h3", "text": "Perché si chiama semiperimetro?" },
          { "kind": "p", "text": "Il nome si spiega da solo una volta scomposto. <em>Semi</em> significa metà, e <em>perimetro</em> significa la lunghezza completa del contorno. Messi insieme, semiperimetro significa metà del perimetro. La lettera [[s]] è il simbolo matematico standard, e compare in molte formule sui triangoli proprio perché le lunghezze di contorno dimezzate ricorrono così spesso. Quando una formula chiede [[s]], chiede questo unico numero: la metà di [[a+b+c]]." },
          { "kind": "h3", "text": "Il semiperimetro descrive un percorso fisico di mezzo contorno?" },
          { "kind": "p", "text": "È un punto sottile che vale la pena fissare bene. Il semiperimetro è la metà del totale numerico delle tre lunghezze dei lati, ma non descrive necessariamente un percorso fisico continuo che copre metà del contorno del triangolo. Percorrere 6 unità lungo gli spigoli di un triangolo 3-4-5, per esempio, potrebbe significare percorrere i due cateti (3 + 4 = 7 è già troppo) oppure un cateto più parte dell'ipotenusa; non esiste un unico percorso naturale di metà strada. Il semiperimetro è soprattutto una misura geometrica derivata, un comodo valore intermedio che le formule usano, piuttosto che una distanza da misurare a passi sul terreno." },
          { "kind": "h3", "text": "Il semiperimetro è una lunghezza o un'area?" },
          { "kind": "p", "text": "Il semiperimetro è una misura unidimensionale: una lunghezza. Se i lati sono in metri, [[s]] è in metri; in centimetri, è in centimetri; in piedi, in piedi; in pollici, in pollici. Non va mai espresso in unità quadrate. La divisione per due cambia la grandezza del numero, non la sua dimensione: dimezzare una lunghezza lascia comunque una lunghezza. Confondere [[s]] con un'area è uno degli errori più comuni tra i principianti, e tenere dritte le unità è il modo più semplice per evitarlo." },
          { "kind": "h3", "text": "Il semiperimetro è sempre maggiore del lato più lungo?" },
          { "kind": "p", "text": "Sì, per ogni triangolo valido non degenere, e la disuguaglianza triangolare mostra perché. Ogni triangolo soddisfa [[a+b>c]]: i due lati più corti insieme superano il più lungo. Aggiungi [[c]] a entrambi i membri e segue [[a+b+c>2c]]; dividi per due e il risultato è [[[\\boxed{s>c}]]] Per un triangolo rettangolo questo significa che il semiperimetro è sempre maggiore dell'ipotenusa. Per il 3-4-5, [[s=6]] supera [[c=5]]. Questo è un comodo controllo di coerenza: se il semiperimetro calcolato è minore dell'ipotenusa, le etichette dei lati o l'aritmetica sono sbagliate." }
        ]
      },
      "sec-formula": {
        "h2": "Formula del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Si usano due forme della stessa formula, a seconda di ciò che è noto. La forma compatta parte dall'intero perimetro:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "La forma espansa parte dai tre lati:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "h3", "text": "Il significato di ogni variabile" },
          { "kind": "p", "text": "[[s]] è il semiperimetro, il risultato da calcolare. [[P]] è l'intero perimetro, la lunghezza completa del contorno. [[a]] è il primo cateto e [[b]] il secondo cateto, i due lati perpendicolari. [[c]] è l'ipotenusa, il lato più lungo, opposto all'angolo retto. Non scambiare mai [[P]] e [[s]]: uno è l'intero contorno, l'altro è la sua metà." },
          { "kind": "h3", "text": "Perché si divide per due?" },
          { "kind": "p", "text": "La divisione è ciò che rende la quantità un <em>semi</em>perimetro anziché un perimetro. Prendi [[a=3]], [[b=4]], [[c=5]]. Prima calcola il perimetro completo: [[P=3+4+5]], quindi [[P=12]]. Poi dividi per due: [[s=12/2]], ottenendo [[[\\boxed{s=6}]]] Matematicamente, la divisione riscala il totale del contorno al valore dimezzato che formule come quella di Erone si aspettano. Saltarla risponde a una domanda diversa: l'intero perimetro, non il semiperimetro." },
          { "kind": "h3", "text": "Perché non si possono usare solo i due cateti?" },
          { "kind": "p", "text": "Perché i soli cateti non sono l'intero contorno. L'approccio errato [[s=(3+4)/2]] dà 3,5, un numero senza significato geometrico per questo triangolo: ignora l'ipotenusa, che è un vero spigolo della figura. L'approccio corretto somma prima tutti e tre i lati: [[s=(3+4+5)/2]], ottenendo [[[\\boxed{s=6}]]] Una scorciatoia allettante è dimezzare ogni lato e poi sommare, [[1.5+2+2.5=6]]: l'aritmetica qui funziona per caso perché la divisione si distribuisce sull'addizione, ma oscura la struttura della formula e invita agli errori. Somma prima, poi dividi una volta sola." },
          { "kind": "h3", "text": "Come sono legati perimetro e semiperimetro?" },
          { "kind": "p", "text": "Sono la stessa misura a due scale diverse. Raddoppiare il semiperimetro recupera il perimetro, e dimezzare il perimetro recupera il semiperimetro:" },
          { "kind": "p", "text": "[[[\\boxed{P=2s}]]]" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{P}{2}}]]]" },
          { "kind": "p", "text": "Ciascun valore può essere recuperato quando l'altro è noto. Se un problema afferma che il perimetro è 30, il semiperimetro è subito 15; se un calcolo dà [[s=20]], l'intero perimetro è 40. Questa relazione a due vie è anche uno strumento di verifica: dopo aver calcolato [[s]] dai lati, raddoppiandolo si deve ritrovare la somma dei lati." }
        ]
      },
      "sec-calculator": {
        "h2": "Come usare la calcolatrice del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice di questa pagina ha un solo compito: prende le tre lunghezze dei lati di un triangolo rettangolo e restituisce il semiperimetro, mostrando ogni passaggio del lavoro. I passaggi qui sotto corrispondono esattamente all'interfaccia esistente." },
          { "kind": "p", "text": "<strong>Passaggio 1: individua la calcolatrice del semiperimetro.</strong> Si trova vicino alla parte superiore della pagina, sotto l'intestazione H1, con tre campi di input etichettati." },
          { "kind": "p", "text": "<strong>Passaggio 2: individua il cateto a.</strong> Scegli uno dei due lati che formano l'angolo retto. Qualsiasi lato perpendicolare può essere [[a]]." },
          { "kind": "p", "text": "<strong>Passaggio 3: individua il cateto b.</strong> L'altro lato perpendicolare diventa [[b]]." },
          { "kind": "p", "text": "<strong>Passaggio 4: individua l'ipotenusa c.</strong> Il lato più lungo, opposto all'angolo retto, è [[c]]. Ordinare le tre misure e inserire la più grande in questo campo previene l'errore di input più comune." },
          { "kind": "p", "text": "<strong>Passaggio 5: inserisci il primo cateto.</strong> Digita il valore di [[a]] nel campo Cateto a." },
          { "kind": "p", "text": "<strong>Passaggio 6: inserisci il secondo cateto.</strong> Digita il valore di [[b]] nel campo Cateto b." },
          { "kind": "p", "text": "<strong>Passaggio 7: inserisci l'ipotenusa.</strong> Digita il valore di [[c]] nel campo Ipotenusa c." },
          { "kind": "p", "text": "<strong>Passaggio 8: seleziona le unità di misura appropriate.</strong> Ogni input ha il proprio selettore di unità. Tutti e tre i lati devono usare unità compatibili prima di essere sommati; mescolare metri con centimetri rovina la somma." },
          { "kind": "p", "text": "<strong>Passaggio 9: fai clic su Calcola semiperimetro.</strong> Lo strumento somma i tre lati e divide il totale per due." },
          { "kind": "p", "text": "<strong>Passaggio 10: controlla il semiperimetro mostrato.</strong> Il risultato appare con la sua unità, per esempio [[[\\boxed{s=6\\text{ units}}]]] per il triangolo 3-4-5." },
          { "kind": "p", "text": "<strong>Passaggio 11: controlla i passaggi della soluzione.</strong> La calcolatrice mostra la sostituzione e la divisione, così puoi seguire l'aritmetica riga per riga." },
          { "kind": "p", "text": "<strong>Passaggio 12: verifica che l'output sia la metà dell'intero perimetro.</strong> Raddoppia il risultato: per il 3-4-5, [[2\\times6=12]], che corrisponde a [[3+4+5]]." },
          { "kind": "p", "text": "<strong>Passaggio 13: usa Reset quando inizi un nuovo calcolo.</strong> Il pulsante Reset azzera tutti e tre gli input così il triangolo successivo parte da una situazione pulita." },
          { "kind": "h3", "text": "Che cosa rappresenta ogni input?" },
          { "kind": "p", "text": "I tre input corrispondono ai tre spigoli del contorno. Cateto a e Cateto b accettano i due lati perpendicolari; Ipotenusa c accetta il lato più lungo. La calcolatrice somma esattamente ciò che inserisci e dimezza il totale, quindi il ruolo di ciascun campo è fisso: scambiare un valore di cateto nel campo dell'ipotenusa cambia la somma e produce un semiperimetro sbagliato." },
          { "kind": "h3", "text": "Perché le unità di misura sono importanti?" },
          { "kind": "p", "text": "Il semiperimetro si calcola sommando tre lunghezze, e l'addizione richiede unità compatibili. Sommare 3 metri a 40 centimetri senza conversione dà un totale senza senso. Il selettore di unità di ogni input ti permette di dichiarare l'unità che hai digitato; scegli selettori che descrivano le misure reali così l'addizione combina grandezze omogenee." },
          { "kind": "h3", "text": "Come leggere il risultato" },
          { "kind": "p", "text": "Il display del risultato mostra il semiperimetro con la sua unità lineare. Dietro le quinte, la calcolatrice ha eseguito esattamente due operazioni: ha sommato tutti e tre i lati, poi ha diviso il totale per due. Non è coinvolto nessun altro calcolo, e lo strumento non calcola da solo né l'area né il raggio del cerchio inscritto; quelle formule sono spiegazioni di supporto in questa guida, non output aggiuntivi della calcolatrice." },
          { "kind": "h3", "text": "Come leggere i passaggi della soluzione" },
          { "kind": "p", "text": "Il pannello dei passaggi della soluzione ripercorre il calcolo: i valori dei lati inseriti, il loro totale, la divisione per due e il risultato finale. Questo lavoro visibile è il modo più rapido per cogliere un refuso: se un passaggio mostra 4 dove intendevi 40, l'errore è evidente prima che la risposta venga usata altrove." }
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "I quattro esempi qui sotto conservano i casi già risolti ed espandono le loro spiegazioni. Ciascuno sostituisce i tre lati, li somma, divide per due e poi verifica la risposta." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3,\\;b=4,\\;c=5]], la formula è [[s=\\frac{a+b+c}{2}]]. Sostituisci: [[s=\\frac{3+4+5}{2}]]. Somma: [[s=\\frac{12}{2}]]. Il risultato finale è [[[\\boxed{s=6\\text{ units}}]]] Verifica: [[P=2s=12]], che corrisponde alla somma diretta [[3+4+5]]. Il risultato è corretto perché ogni spigolo del contorno è stato contato esattamente una volta prima della divisione." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5,\\;b=12,\\;c=13]]: [[s=\\frac{5+12+13}{2}]], quindi [[s=\\frac{30}{2}]], ottenendo [[[\\boxed{s=15\\text{ units}}]]] L'intero perimetro è 30, e metà di 30 è 15. Come controllo, [[5^2+12^2=13^2]] conferma l'angolo retto, quindi le etichette dei lati sono affidabili." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[a=8,\\;b=15,\\;c=17]]: [[s=\\frac{8+15+17}{2}]], quindi [[s=\\frac{40}{2}]], ottenendo [[[\\boxed{s=20\\text{ units}}]]] Nota lo schema tra gli esempi: man mano che il triangolo cresce, il semiperimetro cresce di pari passo con i lati, sempre esattamente la metà del perimetro." },
          { "kind": "h3", "text": "Esempio 4: misure decimali dei lati" },
          { "kind": "p", "text": "Dati [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], quindi [[s=\\frac{15}{2}]], ottenendo [[[\\boxed{s=7.5\\text{ units}}]]] I valori decimali non cambiano la formula: si applica la stessa sequenza somma-poi-divisione. Il controllo pitagorico [[2.5^2+6^2=6.5^2]] conferma che questi lati formano davvero un triangolo rettangolo." }
        ],
        "imgAlt": "Triangolo 3-4-5 con passaggi di calcolo: somma i lati per ottenere 12, dividi per 2, il semiperimetro s è 6",
        "figcaption": "Somma i tre lati per ottenere P = 12, poi dividi per 2: il semiperimetro s = 6.",
        "table": {
          "headers": ["Triangolo", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro completo P", "Semiperimetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "7.5"]
          ]
        },
        "closingParagraphs": ["La tabella mostra chiaramente lo schema: quando tutte e tre le dimensioni aumentano, il semiperimetro aumenta in proporzione, restando sempre esattamente alla metà dell'intero perimetro. Il confronto tra le righe rivela anche che i triangoli simili scalano insieme; raddoppia ogni lato e anche il semiperimetro raddoppia."]
      },
      "sec-practical": {
        "h2": "Applicazioni pratiche del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Un'avvertenza prima degli esempi: il semiperimetro non è normalmente la quantità usata per acquistare metà del bordo o della recinzione attorno a un oggetto triangolare. Il suo vero ruolo è di misura geometrica intermedia, il trampolino verso il raggio del cerchio inscritto, i controlli dell'area e i calcoli di progetto. Ogni esempio qui sotto è un modello geometrico semplificato a triangolo rettangolo, e ciascuno calcola il semiperimetro accanto all'intero perimetro, all'area e al raggio del cerchio inscritto così le relazioni restano visibili." },
          { "kind": "h3", "text": "Esempio 1: finestra triangolare con inserto decorativo circolare" },
          { "kind": "p", "text": "Un modello di finestra triangolare ha [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Semiperimetro: [[s=\\frac{3+4+5}{2}=6\\text{ m}]]; perimetro completo [[P=12\\text{ m}]]. Area [[K=\\frac{3\\times4}{2}=6\\text{ m}^2]] e raggio del cerchio inscritto [[r=\\frac{K}{s}=\\frac{6}{6}=1\\text{ m}]]. Il semiperimetro è ciò che rende calcolabile il raggio del cerchio inscritto: converte tre lunghezze di lati nell'unico numero che lega l'area al raggio del cerchio tangente a tutti e tre i lati del modello triangolare idealizzato." },
          { "kind": "h3", "text": "Esempio 2: staffa metallica di supporto con luce circolare" },
          { "kind": "p", "text": "Una staffa a triangolo rettangolo ha [[a=5\\text{ cm},\\;b=12\\text{ cm},\\;c=13\\text{ cm}]]. Quindi [[s=\\frac{5+12+13}{2}=15\\text{ cm}]] e [[P=30\\text{ cm}]]. L'area [[K=\\frac{5\\times12}{2}=30\\text{ cm}^2]] dà il raggio del cerchio inscritto [[r=\\frac{30}{15}=2\\text{ cm}]]. Questo valore descrive il raggio del cerchio inscritto nel triangolo idealizzato e può guidare studi geometrici di luce per un'apertura circolare. Da solo, non determina la sicurezza strutturale." },
          { "kind": "h3", "text": "Esempio 3: timpano del tetto con progetto di sfiato circolare" },
          { "kind": "p", "text": "Un modello semplificato di timpano a triangolo rettangolo ha [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Semiperimetro [[s=\\frac{6+8+10}{2}=12\\text{ ft}]]; perimetro [[P=24\\text{ ft}]]. Area [[K=\\frac{6\\times8}{2}=24\\text{ ft}^2]] e raggio del cerchio inscritto [[r=\\frac{24}{12}=2\\text{ ft}]]. Il semiperimetro trasforma le tre lunghezze degli spigoli del timpano nel raggio del cerchio inscritto del modello semplificato. La vera installazione dello sfiato richiede misure edilizie e di luce separate, oltre questa geometria." },
          { "kind": "h3", "text": "Esempio 4: progetto di giardino triangolare" },
          { "kind": "p", "text": "Un modello di giardino a triangolo rettangolo ha [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Quindi [[s=\\frac{7+24+25}{2}=28\\text{ m}]] e [[P=56\\text{ m}]]. L'area [[K=\\frac{7\\times24}{2}=84\\text{ m}^2]] dà il raggio del cerchio inscritto [[r=\\frac{84}{28}=3\\text{ m}]]. Il cerchio inscritto è il cerchio più grande che sta dentro il triangolo idealizzato toccando tutti e tre i lati, utile per collocare un'aiuola o una fontana circolare in fase di progetto." },
          { "kind": "h3", "text": "Esempio 5: pannello triangolare per fabbricazione CNC" },
          { "kind": "p", "text": "Un pannello triangolare ha [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Semiperimetro [[s=\\frac{8+15+17}{2}=20\\text{ cm}]]; perimetro [[P=40\\text{ cm}]]. Area [[K=\\frac{8\\times15}{2}=60\\text{ cm}^2]] e raggio del cerchio inscritto [[r=\\frac{60}{20}=3\\text{ cm}]]. Semiperimetro e raggio del cerchio inscritto servono qui come valori geometrici di riferimento nella modellazione CAD, per esempio per posizionare un elemento circolare rispetto agli spigoli del pannello." },
          { "kind": "h3", "text": "Esempio 6: insegna triangolare con emblema circolare" },
          { "kind": "p", "text": "Un pannello per insegna ha [[a=9\\text{ in},\\;b=12\\text{ in},\\;c=15\\text{ in}]]. Quindi [[s=\\frac{9+12+15}{2}=18\\text{ in}]] e [[P=36\\text{ in}]]. L'area [[K=\\frac{9\\times12}{2}=54\\text{ in}^2]] dà il raggio del cerchio inscritto [[r=\\frac{54}{18}=3\\text{ in}]]. Il raggio del cerchio inscritto fornisce un riferimento matematico per il massimo emblema circolare inscrivibile, fatte salve le reali tolleranze di margine e montaggio dell'insegna." },
          { "kind": "h3", "text": "Esempio 7: piastra triangolare industriale" },
          { "kind": "p", "text": "Una piastra a triangolo rettangolo ha [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Semiperimetro [[s=\\frac{9+40+41}{2}=45\\text{ cm}]]; perimetro [[P=90\\text{ cm}]]. Area [[K=\\frac{9\\times40}{2}=180\\text{ cm}^2]] e raggio del cerchio inscritto [[r=\\frac{180}{45}=4\\text{ cm}]]. Il semiperimetro supporta calcoli geometrici per un pannello industriale idealizzato, come il dimensionamento di una borchia circolare che deve restare lontana da tutti e tre gli spigoli." },
          { "kind": "h3", "text": "Esempio 8: progetto di vetrata artistica triangolare" },
          { "kind": "p", "text": "Una sezione di vetro a triangolo rettangolo ha [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Quindi [[s=\\frac{12+16+20}{2}=24\\text{ in}]] e [[P=48\\text{ in}]]. L'area [[K=\\frac{12\\times16}{2}=96\\text{ in}^2]] dà il raggio del cerchio inscritto [[r=\\frac{96}{24}=4\\text{ in}]]. La relazione è diretta: il semiperimetro dimezza il contorno, e dividere l'area per quel mezzo contorno dà il raggio del cerchio inscritto per il layout del progetto." },
          { "kind": "h3", "text": "Esempio 9: lotto di terreno triangolare rilevato" },
          { "kind": "p", "text": "Un modello semplificato di particella a triangolo rettangolo ha [[a=20\\text{ m},\\;b=21\\text{ m},\\;c=29\\text{ m}]]. Semiperimetro [[s=\\frac{20+21+29}{2}=35\\text{ m}]]; perimetro [[P=70\\text{ m}]]. Area [[K=\\frac{20\\times21}{2}=210\\text{ m}^2]] e raggio del cerchio inscritto [[r=\\frac{210}{35}=6\\text{ m}]]. In un modello semplificato di rilievo topografico, il semiperimetro serve come input compatto per i controlli di area e del raggio del cerchio inscritto, per esempio quando si verifica un'area di particella calcolata con la formula di Erone." },
          { "kind": "h3", "text": "Esempio 10: telaio triangolare architettonico" },
          { "kind": "p", "text": "Un telaio architettonico a triangolo rettangolo ha [[a=12\\text{ m},\\;b=35\\text{ m},\\;c=37\\text{ m}]]. Quindi [[s=\\frac{12+35+37}{2}=42\\text{ m}]] e [[P=84\\text{ m}]]. L'area [[K=\\frac{12\\times35}{2}=210\\text{ m}^2]] dà il raggio del cerchio inscritto [[r=\\frac{210}{42}=5\\text{ m}]]. Questo valore può supportare la modellazione matematica di un elemento circolare dentro il telaio triangolare, come una finestra rotonda centrata sull'incentro." },
          { "kind": "h3", "text": "Esempio 11: grande progetto di pavimento triangolare" },
          { "kind": "p", "text": "Una sezione di pavimento a triangolo rettangolo ha [[a=28\\text{ m},\\;b=45\\text{ m},\\;c=53\\text{ m}]]. Semiperimetro [[s=\\frac{28+45+53}{2}=63\\text{ m}]]; perimetro [[P=126\\text{ m}]]. Area [[K=\\frac{28\\times45}{2}=630\\text{ m}^2]] e raggio del cerchio inscritto [[r=\\frac{630}{63}=10\\text{ m}]]. Qui il semiperimetro collega le misure dei lati con la geometria del cerchio inscritto del modello: un unico numero fa da ponte tra il contorno e il cerchio più grande inscrivibile." },
          { "kind": "h3", "text": "Esempio 12: piastra di supporto triangolare industriale" },
          { "kind": "p", "text": "Una grande piastra a triangolo rettangolo ha [[a=33\\text{ cm},\\;b=56\\text{ cm},\\;c=65\\text{ cm}]]. Quindi [[s=\\frac{33+56+65}{2}=77\\text{ cm}]] e [[P=154\\text{ cm}]]. L'area [[K=\\frac{33\\times56}{2}=924\\text{ cm}^2]] dà il raggio del cerchio inscritto [[r=\\frac{924}{77}=12\\text{ cm}]]. Queste misure alimentano un modello geometrico per un raccordo circolare o un elemento interno di progetto, con il semiperimetro come valore intermedio da cui si ricava il raggio del cerchio inscritto." }
        ],
        "table": {
          "headers": ["Applicazione pratica", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro P", "Semiperimetro s", "Area K", "Raggio del cerchio inscritto r", "Unità"],
          "rows": [
            ["Finestra triangolare", "3", "4", "5", "12", "6", "6", "1", "m"],
            ["Staffa metallica", "5", "12", "13", "30", "15", "30", "2", "cm"],
            ["Sfiato del timpano", "6", "8", "10", "24", "12", "24", "2", "ft"],
            ["Progetto giardino", "7", "24", "25", "56", "28", "84", "3", "m"],
            ["Pannello CNC", "8", "15", "17", "40", "20", "60", "3", "cm"],
            ["Emblema insegna", "9", "12", "15", "36", "18", "54", "3", "in"],
            ["Piastra industriale", "9", "40", "41", "90", "45", "180", "4", "cm"],
            ["Vetrata artistica", "12", "16", "20", "48", "24", "96", "4", "in"],
            ["Particella rilevata", "20", "21", "29", "70", "35", "210", "6", "m"],
            ["Telaio architettonico", "12", "35", "37", "84", "42", "210", "5", "m"],
            ["Progetto pavimento", "28", "45", "53", "126", "63", "630", "10", "m"],
            ["Piastra di supporto", "33", "56", "65", "154", "77", "924", "12", "cm"]
          ]
        },
        "closingParagraphs": ["Alcuni promemoria valgono per ogni riga qui sopra. Ogni applicazione è un modello geometrico semplificato, non una specifica costruttiva: le dimensioni reali richiedono verifica separata, la resistenza strutturale non si legge dal semiperimetro, e le vere aperture circolari possono richiedere ulteriori tolleranze di fabbricazione. Il semiperimetro è un valore matematico intermedio, il raggio del cerchio inscritto è il raggio del cerchio inscritto stesso, e il cerchio inscritto tocca tutti e tre i lati."]
      },
      "sec-inradius": {
        "h2": "Qual è il legame tra semiperimetro e raggio del cerchio inscritto del triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Questa è una delle sezioni più importanti dell'articolo, perché il raggio del cerchio inscritto è la ragione principale per cui il semiperimetro esiste come quantità con un nome. Il cerchio inscritto è il cerchio più grande che sta dentro un triangolo toccando tutti e tre i lati, e il suo raggio si chiama raggio del cerchio inscritto, rappresentato da [[r]]." },
          { "kind": "h3", "text": "Relazione tra area e semiperimetro" },
          { "kind": "p", "text": "Per qualsiasi triangolo, l'area, il raggio del cerchio inscritto e il semiperimetro sono legati da un'unica formula compatta:" },
          { "kind": "p", "text": "[[[\\boxed{K=rs}]]]" },
          { "kind": "p", "text": "dove [[K]] è l'area del triangolo, [[r]] è il raggio del cerchio inscritto e [[s]] è il semiperimetro. Riordinata, risolve per il raggio del cerchio inscritto:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{K}{s}}]]]" },
          { "kind": "p", "text": "Conoscere il semiperimetro e l'area permette quindi di calcolare direttamente il raggio del cerchio inscritto: dividi l'area per il semiperimetro. Questo è il vantaggio pratico del semiperimetro. Comprime tre lunghezze di lati in un unico numero che, insieme all'area, rivela il cerchio inscritto." },
          { "kind": "h3", "text": "Formula speciale del raggio del cerchio inscritto per i triangoli rettangoli" },
          { "kind": "p", "text": "Per un triangolo rettangolo l'area è [[K=\\frac{ab}{2}]] e il semiperimetro è [[s=\\frac{a+b+c}{2}]]. Sostituendo entrambi in [[r=\\frac{K}{s}]] si ottiene:" },
          { "kind": "p", "text": "[[[r=\\frac{ab/2}{(a+b+c)/2}]]]" },
          { "kind": "p", "text": "Semplificando:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{ab}{a+b+c}}]]]" },
          { "kind": "p", "text": "Esiste anche una formula equivalente per il triangolo rettangolo che evita del tutto l'area:" },
          { "kind": "p", "text": "[[[\\boxed{r=\\frac{a+b-c}{2}}]]]" },
          { "kind": "p", "text": "Queste due espressioni sono equivalenti per un triangolo rettangolo grazie alla relazione pitagorica: l'algebra collassa una volta applicata [[a^2+b^2=c^2]]. Entrambe le forme danno lo stesso raggio del cerchio inscritto; la seconda è spesso più rapida a mano." },
          { "kind": "h3", "text": "Esempio 3-4-5 completamente svolto" },
          { "kind": "p", "text": "Dati [[a=3,\\;b=4,\\;c=5]]: semiperimetro [[s=\\frac{3+4+5}{2}=6]], area [[K=\\frac{3\\times4}{2}=6]], raggio del cerchio inscritto [[r=\\frac{6}{6}]], quindi [[[\\boxed{r=1}]]] Verifica con la scorciatoia: [[r=\\frac{3+4-5}{2}]], ottenendo [[[\\boxed{r=1}]]] Entrambi i metodi producono la stessa risposta perché sono la stessa matematica scritta in due modi: uno passa per l'area, l'altro la cancella algebricamente." },
          { "kind": "h3", "text": "Perché il semiperimetro è importante per i calcoli del cerchio inscritto?" },
          { "kind": "p", "text": "Il semiperimetro è il ponte tra il contorno del triangolo e il suo cerchio inscritto. I progettisti lo usano per dimensionare luci circolari dentro parti triangolari, per collocare elementi circolari inscritti nel progetto geometrico, per quotare disegni tecnici e per svolgere dimostrazioni matematiche che legano area e raggio. Il raggio del cerchio inscritto si ricollega anche alla verifica dell'area: se [[K]], [[r]] e [[s]] non soddisfano [[K=rs]], qualcosa nella catena è sbagliato. Questa calcolatrice non calcola automaticamente il raggio del cerchio inscritto; fornisce il semiperimetro, e le formule qui sopra fanno il resto." }
        ],
        "imgAlt": "Triangolo rettangolo 3-4-5 con cerchio inscritto di raggio 1; semiperimetro s = 6, area K = 6, r = K/s",
        "figcaption": "Il cerchio inscritto tocca tutti e tre i lati; con s = 6 e K = 6, il raggio del cerchio inscritto r = K / s = 1."
      },
      "sec-heron": {
        "h2": "Come si usa il semiperimetro nella formula di Erone?",
        "blocks": [
          { "kind": "p", "text": "La formula di Erone calcola l'area di un triangolo dalle sue tre lunghezze dei lati, senza richiedere un'altezza fornita a parte. Il semiperimetro è il suo ingrediente centrale: la formula è scritta in termini di [[s]] e delle differenze tra [[s]] e ciascun lato." },
          { "kind": "p", "text": "[[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]" },
          { "kind": "p", "text": "Qui [[K]] è l'area del triangolo, [[s]] è il semiperimetro, e [[a]], [[b]], [[c]] sono le tre lunghezze dei lati." },
          { "kind": "h3", "text": "Perché la formula di Erone usa il semiperimetro?" },
          { "kind": "p", "text": "Il semiperimetro si calcola per primo perché centra l'espressione: ogni fattore [[s-a]], [[s-b]], [[s-c]] misura di quanto il mezzo perimetro supera un lato. Moltiplicare quei tre eccessi per [[s]] stesso ed estrarre la radice quadrata converte l'informazione sul contorno in area. La formula funziona per qualsiasi triangolo valido, non solo per i triangoli rettangoli, ed è per questo che il semiperimetro si guadagna il suo posto come strumento geometrico generale piuttosto che come curiosità del triangolo rettangolo." },
          { "kind": "h3", "text": "Esempio 3-4-5 completamente svolto" },
          { "kind": "p", "text": "Dati [[a=3,\\;b=4,\\;c=5]], calcola prima il semiperimetro: [[s=\\frac{3+4+5}{2}=6]]. Sostituisci nella formula di Erone: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]]. Semplifica: [[K=\\sqrt{6\\times3\\times2\\times1}]], poi [[K=\\sqrt{36}]], ottenendo [[[\\boxed{K=6\\text{ square units}}]]]" },
          { "kind": "h3", "text": "Verifica il risultato con la formula dell'area del triangolo rettangolo" },
          { "kind": "p", "text": "La formula diretta dell'area del triangolo rettangolo è [[K=\\frac{ab}{2}]]. Sostituendo: [[K=\\frac{3\\times4}{2}]], ottenendo [[[\\boxed{K=6\\text{ square units}}]]] Entrambe le formule producono la stessa area, ed è proprio questo il punto: la formula di Erone, costruita sul semiperimetro, conferma in modo indipendente il calcolo più semplice." },
          { "kind": "h3", "text": "Perché è utile?" },
          { "kind": "p", "text": "I triangoli rettangoli hanno una formula diretta dell'area più semplice, quindi la formula di Erone è raramente la via più veloce verso l'area. Il suo valore sta nel controllare i calcoli dell'area, nel capire come i soli lati determinano l'area, nel risolvere problemi basati sui lati dove non è data alcuna altezza, e nel verificare soluzioni matematiche attraverso un percorso indipendente. Ogni volta che due formule non correlate concordano sull'area, la fiducia nella risposta sale nettamente." }
        ],
        "imgAlt": "Formula di Erone applicata a un triangolo 3-4-5: semiperimetro 6 dà area 6, verificata con K = ab/2",
        "figcaption": "Cinque passaggi: lati, semiperimetro s = 6, sostituzione di Erone, area K = 6, controllo con K = ab / 2."
      },
      "sec-vs-perimeter": {
        "h2": "Qual è la differenza tra perimetro e semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "Le due quantità descrivono lo stesso contorno a scale diverse, e confonderle è uno degli errori più frequenti nel lavoro sui triangoli. Questa sezione traccia la linea con chiarezza." },
          { "kind": "h3", "text": "Il perimetro misura l'intero contorno" },
          { "kind": "p", "text": "Il perimetro è la lunghezza totale attorno al triangolo:" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]]" },
          { "kind": "p", "text": "Rappresenta il percorso completo attorno a tutti e tre gli spigoli. Per il triangolo 3-4-5, [[P=12]] unità." },
          { "kind": "h3", "text": "Il semiperimetro è la metà del totale" },
          { "kind": "p", "text": "Il semiperimetro è la metà del perimetro numerico:" },
          { "kind": "p", "text": "[[[\\boxed{s=\\frac{a+b+c}{2}}]]]" },
          { "kind": "p", "text": "Per lo stesso triangolo 3-4-5, [[s=6]] unità. Stesso triangolo, stesso contorno, ma il numero è dimezzato perché le formule che lo consumano, la formula di Erone e la relazione del raggio del cerchio inscritto, sono scritte per il valore dimezzato." },
          { "kind": "h3", "text": "Confronto numerico" },
          { "kind": "p", "text": "Usa un triangolo rettangolo 6-8-10. Perimetro: [[P=6+8+10]], quindi [[[\\boxed{P=24}]]] Semiperimetro: [[s=\\frac{24}{2}]], quindi [[[\\boxed{s=12}]]] Il perimetro risponde a \"quanto è lungo l'intero contorno?\"; il semiperimetro risponde a \"qual è il valore di mezzo contorno di cui ha bisogno la mia formula?\"." },
          { "kind": "h3", "text": "Quando usare ciascuna misura?" },
          { "kind": "p", "text": "Usa il perimetro quando il lavoro riguarda la lunghezza completa del contorno: incorniciare una forma triangolare, recintare un lotto triangolare, stimare i materiali di bordo o misurare il profilo dei bordi. Usa il semiperimetro quando il lavoro è matematico: la formula di Erone, i calcoli del raggio del cerchio inscritto, le relazioni area-raggio, le dimostrazioni geometriche avanzate o la verifica indipendente di un risultato di area. La regola pratica è semplice: il lavoro fisico sul contorno prende [[P]]; il lavoro con le formule prende [[s]]." },
          { "kind": "h3", "text": "Il semiperimetro è metà dell'area?" },
          { "kind": "p", "text": "No, e questa confusione va corretta con fermezza. Il semiperimetro è una misura lineare: per il 3-4-5 è 6 unità. L'area è una misura bidimensionale: per il 3-4-5 è 6 unità quadrate. I numeri qui coincidono per caso, ma le quantità differiscono per natura. Dimezzare una lunghezza non produce mai un'area, così come dimezzare un perimetro non produce mai una superficie." }
        ],
        "table": {
          "headers": ["Misura", "Simbolo", "Formula", "Significato", "Unità", "Applicazione comune"],
          "rows": [
            ["Perimetro", "[[P]]", "[[P=a+b+c]]", "Lunghezza completa del contorno", "Lineare (m, ft, in)", "Recinzioni, cornici, profili"],
            ["Semiperimetro", "[[s]]", "[[s=(a+b+c)/2]]", "Metà della lunghezza del contorno", "Lineare (m, ft, in)", "Formula di Erone, raggio del cerchio inscritto"],
            ["Area", "[[K]]", "[[K=ab/2]]", "Superficie racchiusa", "Quadrata (m², ft², in²)", "Copertura di superfici, materiali"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Come calcolare il semiperimetro quando manca un lato",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice di questa pagina richiede tutte e tre le lunghezze dei lati: non può dimezzare un totale che non può sommare. Se un lato è sconosciuto, calcolalo prima con il teorema di Pitagora, poi procedi con il semiperimetro come al solito." },
          { "kind": "h3", "text": "Trovare l'ipotenusa" },
          { "kind": "p", "text": "Quando entrambi i cateti sono noti, usa [[[\\boxed{c=\\sqrt{a^2+b^2}}]]] Esempio: [[a=6]], [[b=8]]. Quindi [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{100}]], ottenendo [[[\\boxed{c=10}]]] Ora segue il semiperimetro: [[s=\\frac{6+8+10}{2}]], quindi [[[\\boxed{s=12}]]]" },
          { "kind": "h3", "text": "Trovare un cateto mancante" },
          { "kind": "p", "text": "Quando l'ipotenusa e un cateto sono noti, usa [[[\\boxed{a=\\sqrt{c^2-b^2}}]]] Esempio: [[c=13]], [[b=12]]. Quindi [[a=\\sqrt{169-144}]], ottenendo [[[\\boxed{a=5}]]] Poi [[s=\\frac{5+12+13}{2}]], quindi [[[\\boxed{s=15}]]]" },
          { "kind": "h3", "text": "Perché il lato mancante va trovato per primo?" },
          { "kind": "p", "text": "Il semiperimetro richiede il totale completo di tutti e tre i lati, e un lato sconosciuto non può semplicemente essere ignorato o trattato come zero. La forma dell'ipotenusa di Pitagora somma i quadrati; la forma del cateto li sottrae; applicare quella sbagliata inventa un lato che non esiste. Una volta recuperato il lato mancante, la <a href=\"/right-triangle-side-calculator/\" class=\"text-primary hover:underline\">Calcolatrice dei lati del triangolo rettangolo</a> può ricontrollare il valore, e il calcolo del semiperimetro procede su basi solide. Questi passaggi per i lati mancanti sono metodi didattici di supporto, non input aggiuntivi nella calcolatrice esistente." }
        ]
      },
      "sec-properties": {
        "h2": "Proprietà importanti del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro si comporta in modo prevedibile. Queste proprietà servono anche come rapidi controlli mentali e come strumenti nel ragionamento geometrico." },
          { "kind": "h3", "text": "Il semiperimetro è maggiore dell'ipotenusa" },
          { "kind": "p", "text": "Per ogni triangolo valido, [[a+b>c]]. Aggiungendo [[c]] a entrambi i membri si ottiene [[a+b+c>2c]], e dividendo per due si ha [[[\\boxed{s>c}]]] Il semiperimetro supera sempre il lato più lungo. Se un calcolo restituisce [[s]] minore di [[c]], le etichette o l'aritmetica sono sbagliate." },
          { "kind": "h3", "text": "Il semiperimetro è minore della somma dei cateti" },
          { "kind": "p", "text": "La disuguaglianza triangolare dà anche [[c<a+b]]. Aggiungendo [[a+b]] a entrambi i membri si produce [[a+b+c<2(a+b)]], e dimezzando si ottiene [[[\\boxed{s<a+b}]]] Quindi il semiperimetro sta strettamente tra l'ipotenusa e la somma dei cateti: [[c<s<a+b]]. Per il 3-4-5: [[5<6<7]]. Questo sandwich è un rapido controllo di plausibilità per qualsiasi risposta." },
          { "kind": "h3", "text": "Raddoppiare ogni lato raddoppia il semiperimetro" },
          { "kind": "p", "text": "Scala il triangolo 3-4-5 per due: [[a_2=2a,\\;b_2=2b,\\;c_2=2c]] dà i lati 6, 8, 10. Quindi [[s_2=\\frac{2a+2b+2c}{2}]], cioè [[[\\boxed{s_2=2s}]]] Numericamente, [[s_2=12=2\\times6]]. Il semiperimetro è una misura lineare, quindi una scala uniforme lo scala dello stesso fattore." },
          { "kind": "h3", "text": "Triplicare ogni lato triplica il semiperimetro" },
          { "kind": "p", "text": "La stessa linearità vale per qualsiasi fattore di scala. Triplica ogni lato e la somma triplica; dimezzare la somma triplicata dà tre volte il semiperimetro originale: [[[\\boxed{s_2=3s}]]] In generale, scalare tutti i lati di [[k]] scala [[s]] di [[k]]. È per questo che i triangoli simili hanno semiperimetri proporzionali." },
          { "kind": "h3", "text": "Cosa succede quando cambia un solo lato?" },
          { "kind": "p", "text": "Cambiare un lato tenendo fissi gli altri due cambia il semiperimetro numerico di metà della variazione della lunghezza del lato, perché si muove un solo termine della somma. Ma c'è un'insidia: le misure risultanti devono comunque descrivere un triangolo valido e, per questa pagina, un triangolo rettangolo. Allungare l'ipotenusa di un triangolo 3-4-5 fino a 6, per esempio, rompe [[a^2+b^2=c^2]], quindi i nuovi numeri non descrivono più affatto un triangolo rettangolo. Regola un lato di un triangolo rettangolo e gli altri devono adeguarsi per preservare l'angolo retto." },
          { "kind": "h3", "text": "Semiperimetro di un triangolo 45-45-90" },
          { "kind": "p", "text": "Siano entrambi i cateti uguali a [[k]]. L'ipotenusa è [[c=k\\sqrt{2}]], quindi il semiperimetro è [[s=\\frac{k+k+k\\sqrt{2}}{2}]], che si semplifica in [[[\\boxed{s=\\frac{k(2+\\sqrt{2})}{2}}]]] I cateti uguali contribuiscono in modo simmetrico, e l'ipotenusa irrazionale lascia il segno sul risultato: per [[k=1]], [[s=1+\\frac{\\sqrt{2}}{2}\\approx1.7071]]." },
          { "kind": "h3", "text": "Semiperimetro di un triangolo 30-60-90" },
          { "kind": "p", "text": "Se il cateto più corto è [[k]], i lati sono [[k]], [[k\\sqrt{3}]] e [[2k]]. Quindi [[s=\\frac{k+k\\sqrt{3}+2k}{2}]], ottenendo [[[\\boxed{s=\\frac{k(3+\\sqrt{3})}{2}}]]] Numericamente, con [[k=2]] i lati sono 2, [[2\\sqrt{3}\\approx3.464]] e 4, quindi [[s\\approx4.732]]. La forma esatta con radicali è preferibile qui: mantiene la piena precisione per qualsiasi successivo calcolo di Erone o del raggio del cerchio inscritto." }
        ]
      },
      "sec-units": {
        "h2": "Unità di misura nei calcoli del semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro funziona in qualsiasi unità di lunghezza, metri, centimetri, millimetri, chilometri, piedi, pollici, iarde o miglia, perché è solo una somma di lunghezze, dimezzata. L'unità della risposta corrisponde sempre all'unità degli input. L'unica regola rigida è la coerenza: ogni lato deve essere espresso nella stessa unità prima dell'addizione." },
          { "kind": "h3", "text": "Perché tutte e tre le misure dei lati devono usare unità compatibili?" },
          { "kind": "p", "text": "Il semiperimetro si calcola sommando tre lunghezze, e lunghezze in unità diverse non si sommano direttamente. Sommare 3 metri a 40 centimetri come se fossero entrambi semplici numeri dà 43 di nulla di significativo. La somma è valida solo quando ogni termine condivide un'unica unità, quindi la conversione viene prima dell'addizione, mai dopo." },
          { "kind": "h3", "text": "Esempio svolto di conversione di unità" },
          { "kind": "p", "text": "Dati [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Converti prima i pollici in piedi: [[48\\text{ inches}=4\\text{ ft}]]. Ora tutti e tre i lati sono in piedi: [[s=\\frac{3+4+5}{2}]], ottenendo [[[\\boxed{s=6\\text{ ft}}]]] Le misure vanno convertite prima dell'addizione perché la formula somma numeri grezzi; non può sapere che 48 significava pollici a meno che tu non lo converta." },
          { "kind": "h3", "text": "Come aiutano i selettori di unità della calcolatrice?" },
          { "kind": "p", "text": "Ogni input di questa pagina ha il proprio selettore di unità di misura, che ti permette di dichiarare l'unità del numero digitato. Imposta ciascun selettore in modo che corrisponda all'unità reale del suo input così lo strumento combina i valori su una base coerente. Non dare per scontate funzioni di conversione oltre ciò che mostra l'interfaccia: i selettori descrivono i tuoi input, e il semiperimetro è calcolato dai valori così come inseriti." },
          { "kind": "h3", "text": "Lavorare con misure decimali dei lati" },
          { "kind": "p", "text": "I decimali seguono la stessa formula. Con [[a=2.5,\\;b=6,\\;c=6.5]]: [[s=\\frac{2.5+6+6.5}{2}]], quindi [[s=\\frac{15}{2}]], ottenendo [[[\\boxed{s=7.5\\text{ units}}]]] Mantieni la piena precisione decimale durante l'addizione e la divisione; arrotonda solo la risposta finale mostrata, e solo se il problema lo richiede." },
          { "kind": "h3", "text": "Lavorare con lunghezze irrazionali dei lati" },
          { "kind": "p", "text": "Alcuni triangoli rettangoli hanno lati irrazionali, e la formula li gestisce allo stesso modo. Prendi un triangolo 45-45-90 con [[a=1,\\;b=1,\\;c=\\sqrt{2}]]: [[s=\\frac{1+1+\\sqrt{2}}{2}]], ottenendo la forma esatta [[[\\boxed{s=1+\\frac{\\sqrt{2}}{2}}]]], circa [[s\\approx1.7071]]. La notazione esatta con radicali è preziosa in matematica perché preserva la piena precisione: qualsiasi uso successivo di [[s]] nella formula di Erone o in un calcolo del raggio del cerchio inscritto parte dal valore vero, non da uno arrotondato." },
          { "kind": "h3", "text": "Perché evitare di arrotondare troppo presto?" },
          { "kind": "p", "text": "L'arrotondamento prematuro inietta errore in ogni calcolo successivo, e il semiperimetro è spesso un valore intermedio, non la risposta finale. Arrotondare [[s]] a due decimali prima di inserirlo nella formula di Erone, dove compare quattro volte, aggrava l'errore in modo evidente. Mantieni una precisione sufficiente durante i passaggi intermedi: porta avanti il decimale completo o il radicale esatto, e arrotonda una volta sola, alla fine, alla precisione richiesta dal problema." }
        ]
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Sedici errori spiegano quasi ogni semiperimetro sbagliato. Ciascuno è spiegato con cosa va storto, perché succede e l'approccio corretto." },
          { "kind": "p", "text": "<strong>1. Dimenticare di dividere il totale per due.</strong> Sommare 3 + 4 + 5 = 12 e fermarsi dà il perimetro, non il semiperimetro. Termina sempre con la divisione: [[12/2=6]]." },
          { "kind": "p", "text": "<strong>2. Dividere ogni lato prima di capire la formula.</strong> Dimezzare i lati singolarmente e poi sommare funziona aritmeticamente ma nasconde la struttura della formula. Somma prima, dividi una volta sola: [[s=(3+4+5)/2]]." },
          { "kind": "p", "text": "<strong>3. Dimenticare di includere l'ipotenusa.</strong> L'ipotenusa è uno spigolo del contorno. Ometterla in un triangolo 3-4-5 dà [[(3+4)/2=3.5]] invece di 6." },
          { "kind": "p", "text": "<strong>4. Usare solo i due cateti perpendicolari.</strong> Stesso errore di prima in veste diversa. I soli cateti non sono l'intero contorno; l'ipotenusa chiude la figura e va contata." },
          { "kind": "p", "text": "<strong>5. Confondere il semiperimetro con l'intero perimetro.</strong> Riportare 12 per un triangolo 3-4-5 risponde a \"quanto vale P?\" quando la domanda chiedeva s. Ricorda: [[s=P/2]]." },
          { "kind": "p", "text": "<strong>6. Confondere il semiperimetro con l'area.</strong> Per il 3-4-5 entrambi valgono 6 numericamente, il che invita alla confusione. Differiscono per natura: 6 unità di lunghezza contro 6 unità quadrate di superficie." },
          { "kind": "p", "text": "<strong>7. Riportare il risultato in unità quadrate.</strong> Un semiperimetro di 6 cm quadrati è un errore di categoria. Dimezzare una lunghezza lascia una lunghezza: 6 cm, non 6 cm²." },
          { "kind": "p", "text": "<strong>8. Usare un'ipotenusa errata.</strong> Se il valore dell'ipotenusa è sbagliato, la somma è sbagliata e così il semiperimetro. Verifica [[c=\\sqrt{a^2+b^2}]] quando l'ipotenusa è stata calcolata anziché misurata." },
          { "kind": "p", "text": "<strong>9. Inserire misure che non formano un triangolo rettangolo.</strong> Controlla [[a^2+b^2=c^2]] prima di fidarti dell'etichetta \"triangolo rettangolo\". L'addizione funziona comunque, ma il significato geometrico cambia." },
          { "kind": "p", "text": "<strong>10. Mescolare centimetri e metri.</strong> Sommare 3 m a 40 cm non dà 43 di niente. Converti prima in un'unica unità." },
          { "kind": "p", "text": "<strong>11. Mescolare piedi e pollici.</strong> La classica trappola imperiale. Converti i pollici in piedi (dividi per 12) prima di sommare, oppure imposta i selettori di unità di conseguenza." },
          { "kind": "p", "text": "<strong>12. Arrotondare troppo presto.</strong> Arrotondare [[\\sqrt{2}]] a 1,4 prima di sommare accumula errore. Arrotonda solo la risposta finale." },
          { "kind": "p", "text": "<strong>13. Usare un lato mancante senza calcolarlo.</strong> Due lati noti non sono un semiperimetro. Recupera il terzo con il teorema di Pitagora prima, poi somma e dimezza." },
          { "kind": "p", "text": "<strong>14. Applicare male la formula di Erone.</strong> I fattori sono [[s-a]], [[s-b]] e [[s-c]]: ogni lato va sottratto dal semiperimetro, non da un altro lato. Mescolare le sottrazioni rovina l'area." },
          { "kind": "p", "text": "<strong>15. Confondere il raggio del cerchio inscritto con il raggio del cerchio circoscritto.</strong> Il raggio del cerchio inscritto [[r=K/s]] tocca tutti e tre i lati dall'interno; il raggio del cerchio circoscritto passa per i vertici e vale [[c/2]] per un triangolo rettangolo. Cerchi diversi, formule diverse." },
          { "kind": "p", "text": "<strong>16. Presumere che il semiperimetro descriva un percorso fisico di mezzo contorno.</strong> È la metà del totale numerico, non un percorso segnato di metà strada attorno al triangolo. Trattalo come il valore intermedio derivato che è." },
          { "kind": "p", "text": "<strong>Sbagliato contro corretto, fianco a fianco.</strong> Dati [[a=3,\\;b=4,\\;c=5]]: sbagliato è [[s=3+4+5=12]], che salta la divisione e riporta l'intero perimetro. Sbagliato è anche [[s=(3+4)/2=3.5]], che omette l'ipotenusa. Corretto è [[s=\\frac{3+4+5}{2}]], ottenendo [[[\\boxed{s=6}]]]" }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare se il risultato del semiperimetro è corretto",
        "blocks": [
          { "kind": "p", "text": "Otto controlli indipendenti colgono quasi ogni errore. Il triangolo 3-4-5 li dimostra tutti. I controlli indipendenti contano perché falliscono in modi diversi: quando metodi non correlati concordano, la risposta si è guadagnata la fiducia." },
          { "kind": "p", "text": "<strong>Metodo 1: raddoppia il semiperimetro.</strong> [[[\\boxed{P=2s}]]] deve essere uguale all'intero perimetro: [[2\\times6=12=3+4+5]]. Se il raddoppio non riproduce la somma dei lati, la divisione o l'addizione sono andate storte." },
          { "kind": "p", "text": "<strong>Metodo 2: ricalcola da tutti e tre i lati.</strong> Ricalcola [[s=\\frac{a+b+c}{2}]] da zero: [[(3+4+5)/2=6]]. Un secondo passaggio coglie refusi e scivoloni aritmetici." },
          { "kind": "p", "text": "<strong>Metodo 3: verifica la relazione pitagorica.</strong> Controlla [[a^2+b^2=c^2]]: [[9+16=25]]. Questo conferma che i lati formano un triangolo rettangolo, il che convalida le etichette dei lati da cui dipende il semiperimetro." },
          { "kind": "p", "text": "<strong>Metodo 4: controlla l'ipotenusa.</strong> Conferma [[c>a]] e [[c>b]]: 5 è maggiore di 3 e maggiore di 4. Se la presunta ipotenusa non è il lato più lungo, le etichette sono sbagliate." },
          { "kind": "p", "text": "<strong>Metodo 5: controlla la disuguaglianza triangolare.</strong> Conferma [[a+b>c]]: [[3+4=7>5]]. La somma dei cateti deve superare l'ipotenusa, altrimenti non esiste alcun triangolo." },
          { "kind": "p", "text": "<strong>Metodo 6: verifica il limite del semiperimetro.</strong> [[[\\boxed{s>c}]]] deve valere: [[6>5]]. Questa singola disuguaglianza coglie un numero sorprendente di errori di etichettatura." },
          { "kind": "p", "text": "<strong>Metodo 7: controlla le unità.</strong> Conferma che tutte e tre le lunghezze dei lati usino unità compatibili e che l'output sia una misura lineare. Unità miste invalidano la somma anche quando l'aritmetica è perfetta." },
          { "kind": "p", "text": "<strong>Metodo 8: confronta con i passaggi di soluzione della calcolatrice.</strong> Il risultato mostrato e i passaggi di calcolo aiutano a individuare gli errori: se un passaggio mostra un lato digitato male o una divisione saltata, l'errore è visibile prima che la risposta venga usata." }
        ]
      },
      "sec-conclusion": {
        "h2": "Metà contorno, piena comprensione",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro di un triangolo rettangolo è una piccola idea con una lunga portata. Un'addizione e una divisione producono un numero da cui si ricava il raggio del cerchio inscritto, che alimenta la formula di Erone e affina la verifica dell'area. La formula chiede tre lati perché il contorno ha tre spigoli, e l'ipotenusa si guadagna il suo posto nella somma come lo spigolo che chiude la figura. Tutto il resto in questa guida, gli esempi svolti, le dodici applicazioni, le proprietà, le conversioni di unità, i sedici errori, gli otto controlli di verifica, esiste per proteggere quel totale dimezzato dai piccoli errori di etichettatura e di unità che producono risposte sbagliate dall'aspetto plausibile." },
          { "kind": "p", "text": "Usa la calcolatrice di questa pagina ogni volta che tutti e tre i lati sono misurati, recupera un lato mancante con il teorema di Pitagora quando non lo sono, e controlla il risultato rispetto ai limiti c < s < a + b prima che il numero finisca in un disegno o in un modello. Quando la domanda si sposta sulla superficie dentro il contorno, la formula di Erone e la calcolatrice dell'area sono in attesa; quando si sposta sul cerchio dentro il triangolo, il raggio del cerchio inscritto è a una divisione di distanza." }
        ]
      }
    },
    "relatedHeading": "Scopri le calcolatrici correlate per i triangoli rettangoli",
    "relatedIntro": "Ciascuno di questi strumenti estende il calcolo del semiperimetro in una direzione: l'intero contorno, la superficie, il percorso dall'area al semiperimetro, il cerchio inscritto o i lati mancanti che stanno alla base di tutto.",
    "relatedItems": [
      "Calcolatrice del perimetro del triangolo rettangolo",
      "Calcolatrice dell'area del triangolo rettangolo",
      "Calcolatrice dell'area dal semiperimetro del triangolo rettangolo",
      "Calcolatrice del raggio del cerchio inscritto del triangolo rettangolo",
      "Calcolatrice dei lati del triangolo rettangolo"
    ],
    "faqHeading": "Domande frequenti",
    "faqs": [
      {
        "question": "Qual è la formula del semiperimetro di un triangolo rettangolo?",
        "answer": "La formula è s = (a + b + c) / 2, dove a e b sono i due cateti che formano l'angolo di 90 gradi e c è l'ipotenusa, il lato più lungo. Somma le lunghezze dei tre lati, poi dividi il totale per due. In modo equivalente, s = P / 2, dove P è l'intero perimetro."
      },
      {
        "question": "Che cosa significa semiperimetro?",
        "answer": "Semiperimetro significa metà del perimetro. Semi significa metà e perimetro significa la lunghezza totale del contorno, quindi il semiperimetro è esattamente la metà della distanza totale attorno al triangolo. È una misura geometrica derivata, usata come valore intermedio in molte formule sui triangoli."
      },
      {
        "question": "Perché il semiperimetro è la metà del perimetro?",
        "answer": "È la sua definizione: il semiperimetro si ottiene prendendo l'intero perimetro e dividendolo per due. Il valore dimezzato risulta essere la quantità per cui sono scritte formule come la formula di Erone e la relazione del raggio del cerchio inscritto K = rs, ed è per questo che ha un proprio nome e un proprio simbolo, s."
      },
      {
        "question": "Servono tutti e tre i lati per calcolare il semiperimetro?",
        "answer": "Sì. Il semiperimetro è la metà della somma delle lunghezze di tutti e tre i lati, quindi ogni lato deve essere noto, ipotenusa compresa. Se manca un lato, ricavalo prima con il teorema di Pitagora: c = √(a² + b²) se manca l'ipotenusa, oppure a = √(c² − b²) se manca un cateto."
      },
      {
        "question": "Qual è la differenza tra perimetro e semiperimetro?",
        "answer": "Il perimetro P = a + b + c è la lunghezza totale del contorno, mentre il semiperimetro s = (a + b + c) / 2 ne è la metà. Usa il perimetro per lavori fisici sul contorno, come recinzioni o cornici, e il semiperimetro per il lavoro con le formule, come la formula di Erone, i calcoli del raggio del cerchio inscritto e le dimostrazioni geometriche. Per un triangolo 3-4-5, P = 12 e s = 6."
      },
      {
        "question": "Il semiperimetro si misura in unità quadrate?",
        "answer": "No. Il semiperimetro è una misura di lunghezza unidimensionale, quindi usa unità lineari: metri, centimetri, piedi o pollici, in accordo con i lati. Le unità quadrate spettano all'area. Indicare un semiperimetro di 6 cm² è un errore di categoria; l'unità corretta è 6 cm."
      },
      {
        "question": "Qual è il semiperimetro di un triangolo rettangolo 3-4-5?",
        "answer": "Somma i lati: 3 + 4 + 5 = 12, poi dividi per due: s = 6 unità. L'intero perimetro è 12 unità. I lati soddisfano 3² + 4² = 5², a conferma dell'angolo retto, e il semiperimetro 6 supera l'ipotenusa 5, come deve essere per ogni triangolo valido."
      },
      {
        "question": "Perché il semiperimetro si usa nella formula di Erone?",
        "answer": "La formula di Erone, K = √(s(s − a)(s − b)(s − c)), calcola l'area dai soli lati, ed è scritta in termini del semiperimetro s e delle differenze s − a, s − b, s − c. Calcolare prima s centra l'espressione e la mantiene compatta. Per il 3-4-5, s = 6 dà K = √(6 × 3 × 2 × 1) = 6 unità quadrate."
      },
      {
        "question": "Qual è il legame tra semiperimetro e raggio del cerchio inscritto?",
        "answer": "Area, raggio del cerchio inscritto e semiperimetro soddisfano K = rs, quindi r = K / s. Per un triangolo rettangolo si semplifica in r = (a + b − c) / 2. Per il 3-4-5: s = 6, K = 6, quindi r = 1. Il semiperimetro è il ponte che converte le tre lunghezze dei lati nel raggio del cerchio inscritto."
      },
      {
        "question": "Posso calcolare il semiperimetro se manca un lato?",
        "answer": "Sì, ma trova prima il lato mancante. Con i cateti 6 e 8, l'ipotenusa è √(36 + 64) = 10, quindi s = (6 + 8 + 10) / 2 = 12. Con ipotenusa 13 e cateto 12, il cateto mancante è √(169 − 144) = 5, quindi s = (5 + 12 + 13) / 2 = 15. La calcolatrice di questa pagina richiede l'inserimento di tutti e tre i lati."
      },
      {
        "question": "Come posso verificare il risultato del mio semiperimetro?",
        "answer": "Raddoppialo: 2s deve essere uguale all'intero perimetro a + b + c. Verifica che s superi l'ipotenusa (s > c) e stia al di sotto della somma dei cateti (s < a + b). Conferma la relazione pitagorica a² + b² = c², verifica che i tre lati condividano un'unica unità di misura e confronta con i passaggi di soluzione mostrati dalla calcolatrice."
      },
      {
        "question": "Si può usare il semiperimetro per calcolare l'area del triangolo?",
        "answer": "Sì, tramite la formula di Erone: K = √(s(s − a)(s − b)(s − c)). È un controllo indipendente della formula diretta del triangolo rettangolo K = ab / 2. Per il 3-4-5 entrambe danno 6 unità quadrate. La formula di Erone è preziosa soprattutto quando non si conosce alcuna altezza o quando si vuole un secondo calcolo, indipendente, che confermi l'area."
      }
    ]
  }
};
