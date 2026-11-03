export const B2_IT = {
  "it": {
    "tocHeading": "In questa guida",
    "tocItems": {
      "sec-intro": "Come calcolare il perimetro e il semiperimetro di un triangolo rettangolo",
      "sec-right-triangle": "Cos'è un triangolo rettangolo?",
      "sec-perimeter": "Cos'è il perimetro di un triangolo rettangolo?",
      "sec-semiperimeter": "Cos'è il semiperimetro di un triangolo rettangolo?",
      "sec-difference": "Perimetro vs semiperimetro: qual è la differenza?",
      "sec-modes": "Le due modalità della calcolatrice",
      "sec-howto": "Come usare la calcolatrice di perimetro e semiperimetro del triangolo rettangolo",
      "sec-examples": "Esempi passo passo di perimetro e semiperimetro del triangolo rettangolo",
      "sec-practical": "Applicazioni reali del perimetro e del semiperimetro del triangolo rettangolo",
      "sec-missing-side": "Come calcolare il perimetro quando manca un lato",
      "sec-pythagoras": "Qual è il legame tra il teorema di Pitagora e il perimetro di un triangolo rettangolo?",
      "sec-advanced": "Come si usa il semiperimetro in altre formule sui triangoli?",
      "sec-perimeter-area": "Qual è la differenza tra perimetro e area?",
      "sec-units": "Le unità di misura nei calcoli di perimetro e semiperimetro",
      "sec-scaling": "Come i cambiamenti nelle lunghezze dei lati influenzano perimetro e semiperimetro?",
      "sec-applications": "Applicazioni pratiche del perimetro del triangolo rettangolo",
      "sec-mistakes": "Errori comuni nel calcolo di perimetro e semiperimetro del triangolo rettangolo",
      "sec-verify": "Come verificare che il perimetro del triangolo rettangolo sia corretto",
      "sec-related": "Esplora le calcolatrici correlate per il triangolo rettangolo",
      "sec-faq": "Domande frequenti",
      "sec-conclusion": "Un confine, due misure utili"
    },
    "sections": {
      "sec-intro": {
        "h2": "Come calcolare il perimetro e il semiperimetro di un triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Prendi [[a=3]], [[b=4]], [[c=5]]. Il perimetro è [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Il semiperimetro è [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. È esattamente ciò che la calcolatrice di perimetro e semiperimetro del triangolo rettangolo restituisce per questi tre input." },
          { "kind": "p", "text": "Il perimetro descrive il confine completo del triangolo: la lunghezza totale che percorreresti se camminassi lungo i tre lati e tornassi al punto di partenza. Il semiperimetro è metà di quel totale numerico. Entrambi sono lunghezze, misurate in unità come metri, centimetri, piedi o pollici. Nessuno dei due è un'area, e nessuno dei due si esprime in unità quadrate." },
          { "kind": "p", "text": "Servono tre misure di lati perché il confine ha tre spigoli, e l'ipotenusa deve essere inclusa: è uno dei tre spigoli anche se non tocca mai l'angolo retto. Il semiperimetro è metà del perimetro perché diverse formule avanzate, tra cui la formula di Erone e la relazione del raggio inscritto, sono costruite su metà del confine anziché sul tutto. Questi due calcoli tornano utili ogni volta che si deve misurare un contorno triangolare: bordare un giardino, incorniciare un quadro o inserire una lunghezza nella formula successiva di un problema più lungo." }
        ]
      },
      "sec-right-triangle": {
        "h2": "Cos'è un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Prima di iniziare qualsiasi somma, i tre lati devono essere etichettati senza errori. I simboli qui sotto restano fissi per tutta la guida, e la calcolatrice usa gli stessi nomi." },
          { "kind": "h3", "text": "Definizione di triangolo rettangolo" },
          { "kind": "p", "text": "Un triangolo rettangolo è un poligono a tre lati che contiene esattamente un angolo interno di 90 gradi. Ha tre vertici, tre lati, due angoli acuti e un angolo retto, di solito segnato con un piccolo quadrato. I due lati che formano l'angolo retto sono i cateti; il lato opposto è l'ipotenusa. Poiché gli angoli di qualsiasi triangolo sommano a 180 gradi, [[A+B+C=180^\\circ]], e con [[C=90^\\circ]] segue che [[[\\boxed{A+B=90^\\circ}]]]: i due angoli acuti sono complementari, quindi conoscerne uno determina l'altro." },
          { "kind": "h3", "text": "Cosa sono i due cateti?" },
          { "kind": "p", "text": "Il cateto [[a]] si trova di fronte all'angolo [[A]]; il cateto [[b]] si trova di fronte all'angolo [[B]]. I due cateti si incontrano nel vertice dell'angolo retto e sono perpendicolari tra loro: ciascuno forma 90 gradi con l'altro. Formano l'angolo quadrato del triangolo, il tipo di spigolo che misureresti lungo l'angolo di una parete o il bordo di un tavolo. Nel lavoro sui perimetri il loro ruolo è semplice: entrambi sono spigoli del confine, quindi entrambi entrano nella somma." },
          { "kind": "h3", "text": "Cos'è l'ipotenusa?" },
          { "kind": "p", "text": "L'ipotenusa è il lato opposto all'angolo retto, sempre il lato più lungo del triangolo. Non forma mai l'angolo retto; lo attraversa, collegando le estremità lontane dei due cateti. Differisce dai cateti per posizione e per lunghezza: i cateti si incontrano a 90 gradi, mentre l'ipotenusa incontra ciascun cateto formando un angolo acuto. Deve essere inclusa nel calcolo del perimetro completo, perché il confine non è completo finché non vengono contati tutti e tre gli spigoli. Se entrambi i cateti sono noti, il teorema di Pitagora la recupera con [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Perché l'angolo retto è importante?" },
          { "kind": "p", "text": "L'angolo retto è ciò che rende il triangolo un triangolo rettangolo, e tutto il resto ne deriva. Identifica la forma in un disegno o in cantiere: trova l'angolo quadrato e l'etichettatura dei lati cade al suo posto. È la condizione di cui il teorema di Pitagora ha bisogno prima di poter essere applicato. Nelle misurazioni in edilizia e nei disegni tecnici, l'angolo retto è il riferimento su cui tutto viene messo in squadra: pareti, telai e staffe si verificano con esso. Per la verifica, l'angolo retto è la promessa che le tre lunghezze dei lati devono mantenere attraverso [[a^2+b^2=c^2]]." },
          { "kind": "h3", "text": "Come identificare le etichette corrette dei lati?" },
          { "kind": "p", "text": "[[a]] e [[b]] sono i cateti, [[c]] è l'ipotenusa, e in un triangolo rettangolo non degenere [[c]] è il lato più lungo. L'angolo retto si trova di fronte a [[c]], quindi il vertice che porta il marcatore quadrato ti dice qual è il lato [[c]]: è quello che non tocca quel vertice. Un rapido controllo dell'ordinamento aiuta: ordina i tre numeri, e il più grande deve svolgere il ruolo di [[c]]. Se il lato più lungo non è opposto all'angolo quadrato, le etichette sono sbagliate, e ogni calcolo costruito su di esse sarà sbagliato anch'esso." }
        ],
        "imgAlt": "Triangolo rettangolo ABC con cateti a e b, ipotenusa c, marcatore dell'angolo retto e formule P = a+b+c, s = (a+b+c)/2",
        "figcaption": "Triangolo ABC con cateti a e b, ipotenusa c e le due formule del confine."
      },
      "sec-perimeter": {
        "h2": "Cos'è il perimetro di un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Il perimetro è la distanza totale intorno al confine esterno di una forma bidimensionale. Per un triangolo è la somma delle lunghezze dei suoi tre lati, [[[\\boxed{P=a+b+c}]]], e ogni lato deve essere incluso perché ogni lato fa parte del confine. Lasciarne uno fuori e il risultato non è un perimetro; è un percorso parziale." },
          { "kind": "h3", "text": "Perché l'ipotenusa conta nel perimetro?" },
          { "kind": "p", "text": "Il perimetro misura il confine esterno completo, non solo i due lati perpendicolari. Anche se l'ipotenusa si trova di fronte all'angolo retto, resta uno dei tre spigoli del confine: percorri il triangolo e percorrerai anche l'ipotenusa. Lasciarla fuori misura due lati di un percorso spezzato, non il contorno di un triangolo chiuso. La formula ha tre termini perché la forma ha tre spigoli; nessuno spigolo è facoltativo, comunque il triangolo sia orientato sulla pagina o sul terreno." },
          { "kind": "h3", "text": "Come calcolare il perimetro passo passo" },
          { "kind": "p", "text": "Usa [[a=3]], [[b=4]], [[c=5]]. Sostituisci nella formula: [[P=3+4+5]]. Somma le prime due lunghezze: [[P=7+5]]. Risultato finale: [[[\\boxed{P=12\\text{ units}}]]]. Fisicamente, 12 unità è la lunghezza di un nastro steso lungo tutti e tre gli spigoli da un capo all'altro: il contorno completo del triangolo espresso come un'unica lunghezza continua." },
          { "kind": "h3", "text": "Cosa ti dice il perimetro nel lavoro pratico?" },
          { "kind": "p", "text": "Risponde a una domanda in molti mestieri: quanto materiale consuma il contorno? Vale per materiali di bordatura, profili per finestre, bordi di recinzioni, strisce protettive, cornici decorative, percorsi di cavi, bordi di tessuto e profili metallici per spigoli. In ogni caso il perimetro è il numero da portare al fornitore. Descrive la lunghezza del contorno completo del triangolo, non la quantità di superficie al suo interno: 12 metri di profilo non dicono nulla sull'area coperta dalla finestra, e non era mai quello lo scopo." }
        ]
      },
      "sec-semiperimeter": {
        "h2": "Cos'è il semiperimetro di un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Il semiperimetro è esattamente metà del perimetro completo del triangolo: [[[\\boxed{s=\\frac{P}{2}}]]]. Poiché [[P=a+b+c]], segue che [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. L'addizione viene prima della divisione perché il semiperimetro dimezza l'intero confine, non ciascun lato separatamente. Dividere prima ciascun lato e poi sommare darebbe qui lo stesso numero, ma la formula afferma il corretto ordine delle idee: somma il confine, poi dimezzalo." },
          { "kind": "h3", "text": "Come calcolare il semiperimetro passo passo" },
          { "kind": "p", "text": "Usa [[a=3]], [[b=4]], [[c=5]]. Somma i tre lati: [[s=\\frac{3+4+5}{2}]]. Semplifica il totale: [[s=\\frac{12}{2}]]. Risultato finale: [[[\\boxed{s=6\\text{ units}}]]]. Il semiperimetro è una misura geometrica derivata usata in diverse formule importanti sui triangoli; raramente descrive qualcosa che misureresti direttamente con un nastro, ed è per questo che la calcolatrice lo calcola per te." },
          { "kind": "h3", "text": "Perché il semiperimetro si usa in geometria?" },
          { "kind": "p", "text": "È la variabile naturale della formula di Erone, della relazione del raggio inscritto [[K=rs]] e della geometria del cerchio inscritto in generale. Le formule d'area dei triangoli continuano a produrre metà, e il semiperimetro le assorbe tutte in una volta, motivo per cui dimostrazioni e formule avanzate lo preferiscono al perimetro completo. Quando una formula chiede [[s]], inserire [[P]] al suo posto raddoppia o distorce in altro modo il risultato, quindi vale la pena mantenere la distinzione netta fin dall'inizio." },
          { "kind": "h3", "text": "Il semiperimetro è metà del confine in senso fisico?" },
          { "kind": "p", "text": "Non necessariamente. Il semiperimetro è metà del perimetro numerico: 6 unità quando il perimetro è 12. Non descrive necessariamente un percorso fisico continuo che copra metà del confine del triangolo. Non esiste un'unica passeggiata lungo gli spigoli che sia il semiperimetro allo stesso modo in cui il perimetro è la passeggiata completa: la metà è un numero, non un percorso. Trattare [[s]] come un mezzo giro fisico porta a confusione; trattalo come metà del totale, il valore di cui le formule hanno bisogno." },
          { "kind": "h3", "text": "Il semiperimetro può essere più piccolo del lato più lungo?" },
          { "kind": "p", "text": "No. La disuguaglianza triangolare richiede [[a+b>c]]: i due lati più corti insieme devono superare il lato più lungo, altrimenti il triangolo non può chiudersi. Aggiungendo [[c]] a entrambi i membri si ottiene [[a+b+c>2c]], e dimezzando si ottiene [[[\\boxed{s>c}]]]. Per un triangolo valido non degenere, il semiperimetro è maggiore del lato più lungo. È un utile controllo matematico: se un semiperimetro dichiarato è più piccolo dell'ipotenusa, le misure non possono formare un triangolo reale." }
        ]
      },
      "sec-difference": {
        "h2": "Perimetro vs semiperimetro: qual è la differenza?",
        "blocks": [
          { "kind": "p", "text": "Perimetro: la lunghezza totale intorno al triangolo, [[P=a+b+c]]. Semiperimetro: metà del perimetro totale, [[s=\\frac{a+b+c}{2}]]. Stessi tre lati, quantità geometriche diverse: una è il tutto, l'altra è la metà. Sono legati da [[s=\\frac{P}{2}]] e [[P=2s]], e la calcolatrice non usa mai i due simboli in modo intercambiabile." },
          { "kind": "h3", "text": "Confronto numerico" },
          { "kind": "p", "text": "Usa un triangolo rettangolo 6-8-10. Perimetro: [[P=6+8+10]], [[[\\boxed{P=24}]]]. Semiperimetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12}]]]. I due numeri differiscono di un fattore due, sempre: [[s=\\frac{P}{2}]] e [[P=2s]]. La differenza non è una forma diversa o un triangolo diverso; è lo stesso confine contato una volta contro contato come metà." },
          { "kind": "h3", "text": "Quale misura dovresti usare?" },
          { "kind": "p", "text": "Usa il perimetro per bordare, incorniciare, rifinire, recintare e stimare i materiali intorno a un oggetto: qualsiasi lavoro in cui la domanda è quanto materiale consuma il contorno. Usa il semiperimetro per la formula di Erone, le relazioni del raggio inscritto, i calcoli del cerchio inscritto e i problemi di geometria che coinvolgono le lunghezze dei lati di un triangolo: qualsiasi lavoro in cui una formula chiede metà del confine come input. La scelta è guidata dal compito, non dalla preferenza: una stima di profilo vuole [[P]], una dimostrazione d'area vuole [[s]]." },
          { "kind": "h3", "text": "Il semiperimetro misura metà dell'area del triangolo?" },
          { "kind": "p", "text": "No. Sia il perimetro che il semiperimetro sono misure lineari: lunghezze, espresse in metri o piedi, mai in metri quadrati. L'area misura la superficie bidimensionale racchiusa dal triangolo e usa unità quadrate. Dimezzare una lunghezza dà comunque una lunghezza. L'avvertimento merita di essere ripetuto perché i nomi sembrano collegati: il semiperimetro è metà del perimetro, non metà dell'area, e nessuna divisione di un confine può produrre una superficie." }
        ],
        "imgAlt": "Triangolo 6-8-10: barra del perimetro di 24 unità dimezzata in una barra del semiperimetro di 12 unità",
        "figcaption": "P = 24 dimezzato in s = 12: il confine completo, poi metà di esso."
      },
      "sec-modes": {
        "h2": "Le due modalità della calcolatrice",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice mantiene i due calcoli in due modalità separate perché rispondono a domande diverse a partire dagli stessi tre input. Scegliere la modalità significa scegliere quale domanda si sta ponendo." },
          { "kind": "h3", "text": "Modalità calcolatrice del perimetro" },
          { "kind": "p", "text": "Questa modalità calcola la lunghezza totale del confine. Input: cateto [[a]], cateto [[b]], ipotenusa [[c]]. Formula: [[P=a+b+c]]. Output: perimetro [[P]]. Il risultato è utile per stimare la lunghezza totale di materiale necessaria intorno a un contorno triangolare: il numero da portare al fornitore quando il lavoro è bordatura, profilo o cornice." },
          { "kind": "h3", "text": "Modalità calcolatrice del semiperimetro" },
          { "kind": "p", "text": "Questa modalità calcola metà del perimetro totale. Input: cateto [[a]], cateto [[b]], ipotenusa [[c]]. Formula: [[s=\\frac{a+b+c}{2}]]. Output: semiperimetro [[s]]. Il risultato è utile come valore intermedio nei calcoli avanzati sui triangoli: il numero da inserire nella formula di Erone o nella relazione del raggio inscritto quando il problema continua oltre il confine." },
          { "kind": "h3", "text": "Perché esistono due modalità separate?" },
          { "kind": "p", "text": "Entrambi i calcoli usano le stesse tre misure di lati ma restituiscono quantità geometriche diverse, e confonderli è uno degli errori più comuni in questo argomento. Due modalità etichettate mantengono esplicita l'intenzione: il pulsante dice Calculate Perimeter o Calculate Semiperimeter, e il risultato è etichettato [[P]] o [[s]]. Le due modalità risparmiano agli utenti i calcoli manuali mantenendo le due risposte impossibili da confondere. Non descrivere la modalità del semiperimetro come una calcolatrice d'area: il suo output è una lunghezza, e resta una lunghezza." }
        ]
      },
      "sec-howto": {
        "h2": "Come usare la calcolatrice di perimetro e semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "I passaggi qui sotto seguono il layout a schermo per ciascuna modalità, dall'identificazione delle misure fino a un risultato verificato. Le due modalità condividono gli stessi tre input e differiscono solo nel calcolo finale." },
          { "kind": "h3", "text": "Modalità perimetro" },
          { "kind": "steps", "steps": [
            "<strong>Seleziona la modalità Perimeter.</strong> Questo dice alla calcolatrice che l'obiettivo è la lunghezza totale del confine.",
            "<strong>Identifica il cateto a.</strong> È uno dei due lati che formano l'angolo retto.",
            "<strong>Identifica il cateto b.</strong> È l'altro lato che forma l'angolo retto.",
            "<strong>Identifica l'ipotenusa c.</strong> È il lato più lungo, di fronte all'angolo retto.",
            "<strong>Inserisci il cateto a.</strong> Digita la lunghezza misurata nel primo campo.",
            "<strong>Inserisci il cateto b.</strong> Digita la lunghezza misurata nel secondo campo.",
            "<strong>Inserisci l'ipotenusa c.</strong> Digita la lunghezza misurata nel terzo campo.",
            "<strong>Seleziona le unità appropriate.</strong> Tutti e tre i lati devono condividere un'unità prima che la somma abbia senso.",
            "<strong>Fai clic su Calculate Perimeter.</strong> La calcolatrice somma i tre lati.",
            "<strong>Rivedi il risultato.</strong> Conferma che il perimetro superi il lato più lungo.",
            "<strong>Controlla i passaggi della soluzione mostrati.</strong> Mostrano [[P=a+b+c]] con i valori inseriti compilati.",
            "<strong>Verifica che l'output usi un'unità di misura lineare.</strong> Metri, centimetri, piedi o pollici: mai un'unità quadrata."
          ] },
          { "kind": "h3", "text": "Modalità semiperimetro" },
          { "kind": "steps", "steps": [
            "<strong>Seleziona la modalità Semiperimeter.</strong> Questo dice alla calcolatrice che l'obiettivo è metà del confine.",
            "<strong>Inserisci il cateto a.</strong> Stessa identificazione della modalità perimetro.",
            "<strong>Inserisci il cateto b.</strong> Il secondo lato che forma l'angolo retto.",
            "<strong>Inserisci l'ipotenusa c.</strong> Il lato più lungo, di fronte all'angolo retto.",
            "<strong>Seleziona unità di misura compatibili.</strong> Un'unità per tutti e tre i lati.",
            "<strong>Fai clic su Calculate Semiperimeter.</strong> La calcolatrice somma i tre lati e dimezza il totale.",
            "<strong>Rivedi il risultato.</strong> Dovrebbe essere chiaramente più piccolo del perimetro.",
            "<strong>Verifica che il risultato sia esattamente metà del perimetro.</strong> Confronta [[s=\\frac{P}{2}]] con l'output della modalità perimetro.",
            "<strong>Controlla i passaggi della soluzione e la visualizzazione live.</strong> I passaggi mostrano la somma e il dimezzamento; il disegno mostra il triangolo da cui provengono quei numeri.",
            "<strong>Usa Reset quando inizi un nuovo calcolo.</strong> Pulisce tutti e tre i campi per una partenza pulita."
          ] },
          { "kind": "p", "text": "La visualizzazione live disegna il triangolo dai lati inseriti, il che aiuta a intercettare un'ipotenusa mal etichettata prima che i numeri vengano considerati attendibili. Il diagramma della formula mostra dove ciascun lato si colloca in [[P=a+b+c]] o [[s=\\frac{a+b+c}{2}]]. Nessuna delle due modalità accetta due lati: la calcolatrice ha bisogno di tutte e tre le lunghezze del confine, quindi un lato mancante deve essere trovato prima, come spiega la sezione sul lato mancante." }
        ]
      },
      "sec-examples": {
        "h2": "Esempi passo passo di perimetro e semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Quattro note terne pitagoriche mostrano il calcolo completo per entrambe le misure. Ciascuna somma i tre lati per il perimetro, poi dimezza il totale per il semiperimetro. L'aritmetica è mostrata volutamente per intero così che lo schema sia inequivocabile." },
          { "kind": "h3", "text": "Esempio 1: triangolo rettangolo 3-4-5" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]. Calcola il perimetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ units}}]]]. Calcola il semiperimetro: [[s=\\frac{3+4+5}{2}]], [[[\\boxed{s=6\\text{ units}}]]]. Entrambi i risultati sono corretti perché il perimetro conta ogni spigolo del confine una volta, e il semiperimetro è esattamente metà di quel conteggio." },
          { "kind": "h3", "text": "Esempio 2: triangolo rettangolo 6-8-10" },
          { "kind": "p", "text": "Dati [[a=6]], [[b=8]], [[c=10]]. Perimetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ units}}]]]. Semiperimetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ units}}]]]. Raddoppiando tutti e tre i lati si raddoppiano entrambe le misure: 24 è il doppio di 12, e 12 è il doppio di 6. Scalare il triangolo scala le sue misure del confine dello stesso fattore." },
          { "kind": "h3", "text": "Esempio 3: triangolo rettangolo 5-12-13" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]], [[c=13]]. Perimetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ units}}]]]. Semiperimetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15\\text{ units}}]]]. Nota che 15 supera l'ipotenusa 13, come richiede il controllo della disuguaglianza triangolare." },
          { "kind": "h3", "text": "Esempio 4: triangolo rettangolo 8-15-17" },
          { "kind": "p", "text": "Dati [[a=8]], [[b=15]], [[c=17]]. Perimetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ units}}]]]. Semiperimetro: [[s=\\frac{40}{2}]], [[[\\boxed{s=20\\text{ units}}]]]. Anche qui il semiperimetro supera il lato più lungo: 20 contro 17." },
          { "kind": "h3", "text": "Confronto degli esempi fondamentali" },
          { "kind": "p", "text": "Man mano che le dimensioni del triangolo aumentano, sia [[P]] che [[s]] crescono insieme ai lati. La tabella mostra due schemi in una volta: il perimetro di ciascuna riga è la semplice somma dei suoi tre lati, e il perimetro di ciascuna riga è esattamente il doppio del suo semiperimetro. Le righe 3-4-5 e 6-8-10 mostrano anche direttamente la scala: ogni lato raddoppiato, entrambe le misure del confine raddoppiate." }
        ],
        "table": {
          "headers": ["Triangolo", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro P", "Semiperimetro s"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "6"],
            ["6-8-10", "6", "8", "10", "24", "12"],
            ["5-12-13", "5", "12", "13", "30", "15"],
            ["8-15-17", "8", "15", "17", "40", "20"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Applicazioni reali del perimetro e del semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Dodici situazioni risolte portano le due formule della pagina in officina e in cantiere. Ciascuna nomina un oggetto o modello triangolare rettangolo semplificato, risolve il perimetro e il semiperimetro con le formule e dichiara la lettura pratica del risultato. Sono modelli semplificati: non ogni vera finestra, tetto, giardino, tenda da sole, pannello o struttura di supporto forma un triangolo rettangolo esatto, e un oggetto irregolare deve essere suddiviso in forme più semplici prima che le formule si applichino. Potrebbero servire margini di materiale, lo scarto di taglio non è incluso, i confini curvi richiedono calcoli diversi, la resistenza strutturale non può essere determinata dal solo perimetro, e le misure reali di costruzione dovrebbero essere verificate prima di acquistare i materiali." },
          { "kind": "h3", "text": "Esempio 1: telaio di finestra in vetro triangolare" },
          { "kind": "p", "text": "Una finestra triangolare rettangola ha [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Perimetro: [[P=3+4+5]], [[[\\boxed{P=12\\text{ m}}]]]. Semiperimetro: [[s=\\frac{12}{2}]], [[[\\boxed{s=6\\text{ m}}]]]. Dodici metri è la lunghezza totale intorno al contorno triangolare della finestra: il materiale per il telaio da ordinare prima dei margini di taglio e di scarto." },
          { "kind": "h3", "text": "Esempio 2: rifinitura del bordo del tetto" },
          { "kind": "p", "text": "Una sezione triangolare di estremità del tetto ha [[a=6\\text{ ft}]], [[b=8\\text{ ft}]], [[c=10\\text{ ft}]]. Perimetro: [[P=6+8+10]], [[[\\boxed{P=24\\text{ ft}}]]]. Semiperimetro: [[s=\\frac{24}{2}]], [[[\\boxed{s=12\\text{ ft}}]]]. Il perimetro stima la lunghezza della rifinitura intorno al contorno triangolare dell'estremità del tetto." },
          { "kind": "h3", "text": "Esempio 3: bordatura del giardino" },
          { "kind": "p", "text": "Una sezione triangolare rettangola di giardino ha [[a=5\\text{ m}]], [[b=12\\text{ m}]], [[c=13\\text{ m}]]. Perimetro: [[P=5+12+13]], [[[\\boxed{P=30\\text{ m}}]]]. Semiperimetro: [[s=15\\text{ m}]]. Il perimetro stima la lunghezza totale della bordatura intorno alla sezione." },
          { "kind": "h3", "text": "Esempio 4: staffa di supporto in acciaio" },
          { "kind": "p", "text": "Una staffa metallica triangolare ha [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Perimetro: [[P=8+15+17]], [[[\\boxed{P=40\\text{ cm}}]]]. Semiperimetro: [[[\\boxed{s=20\\text{ cm}}]]]. Il perimetro descrive lo spigolo esterno della staffa, utile quando si specifica la finitura dello spigolo." },
          { "kind": "h3", "text": "Esempio 5: pannello di tessuto triangolare" },
          { "kind": "p", "text": "Un pannello di tessuto triangolare rettangolo ha [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Perimetro: [[P=9+12+15]], [[[\\boxed{P=36\\text{ ft}}]]]. Semiperimetro: [[[\\boxed{s=18\\text{ ft}}]]]. Il perimetro stima la lunghezza dello spigolo prima che vengano aggiunti i margini di cucitura." },
          { "kind": "h3", "text": "Esempio 6: telaio di cartello triangolare" },
          { "kind": "p", "text": "Un cartello ha forma triangolare rettangola con [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Perimetro: [[P=12+16+20]], [[[\\boxed{P=48\\text{ cm}}]]]. Semiperimetro: [[[\\boxed{s=24\\text{ cm}}]]]. Il perimetro totale stima il materiale per il telaio del cartello." },
          { "kind": "h3", "text": "Esempio 7: confine paesaggistico" },
          { "kind": "p", "text": "Una sezione triangolare rettangola di paesaggio ha [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Perimetro: [[P=7+24+25]], [[[\\boxed{P=56\\text{ m}}]]]. Semiperimetro: [[[\\boxed{s=28\\text{ m}}]]]. Il perimetro stima il materiale di bordo intorno alla sezione." },
          { "kind": "h3", "text": "Esempio 8: supporto triangolare per pannello solare" },
          { "kind": "p", "text": "Un telaio triangolare semplificato di supporto ha [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Perimetro: [[P=9+40+41]], [[[\\boxed{P=90\\text{ m}}]]]. Semiperimetro: [[[\\boxed{s=45\\text{ m}}]]]. Queste sono le lunghezze dei tre lati del telaio triangolare modellato, il punto di partenza per il dimensionamento degli elementi." },
          { "kind": "h3", "text": "Esempio 9: bordo di tenda da sole triangolare" },
          { "kind": "p", "text": "Una sezione triangolare rettangola di tenda da sole ha [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Perimetro: [[P=15+20+25]], [[[\\boxed{P=60\\text{ ft}}]]]. Semiperimetro: [[[\\boxed{s=30\\text{ ft}}]]]. Il perimetro stima il materiale di bordo per lo spigolo della tenda da sole." },
          { "kind": "h3", "text": "Esempio 10: telaio di estremità del tetto di un capannone" },
          { "kind": "p", "text": "Un telaio semplificato triangolare rettangolo di estremità del tetto ha [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Perimetro: [[P=11+60+61]], [[[\\boxed{P=132\\text{ m}}]]]. Semiperimetro: [[[\\boxed{s=66\\text{ m}}]]]. Il risultato rappresenta il contorno completo della sezione triangolare." },
          { "kind": "h3", "text": "Esempio 11: pannello triangolare di fabbricazione" },
          { "kind": "p", "text": "Un pannello industriale triangolare rettangolo ha [[a=13\\text{ cm}]], [[b=84\\text{ cm}]], [[c=85\\text{ cm}]]. Perimetro: [[P=13+84+85]], [[[\\boxed{P=182\\text{ cm}}]]]. Semiperimetro: [[[\\boxed{s=91\\text{ cm}}]]]. Il perimetro stima i profili protettivi per gli spigoli del pannello." },
          { "kind": "h3", "text": "Esempio 12: grande struttura triangolare di supporto" },
          { "kind": "p", "text": "Una struttura triangolare rettangola di supporto ha [[a=28\\text{ m}]], [[b=45\\text{ m}]], [[c=53\\text{ m}]]. Perimetro: [[P=28+45+53]], [[[\\boxed{P=126\\text{ m}}]]]. Semiperimetro: [[[\\boxed{s=63\\text{ m}}]]]. Queste misure servono come input geometrici per ulteriori calcoli ingegneristici." },
          { "kind": "h3", "text": "Confronto degli esempi pratici" }
        ],
        "table": {
          "headers": ["Applicazione pratica", "Cateto a", "Cateto b", "Ipotenusa c", "Perimetro P", "Semiperimetro s", "Unità di misura"],
          "rows": [
            ["Telaio di finestra in vetro", "3", "4", "5", "12", "6", "m"],
            ["Rifinitura del bordo del tetto", "6", "8", "10", "24", "12", "ft"],
            ["Bordatura del giardino", "5", "12", "13", "30", "15", "m"],
            ["Staffa in acciaio", "8", "15", "17", "40", "20", "cm"],
            ["Pannello di tessuto", "9", "12", "15", "36", "18", "ft"],
            ["Telaio di cartello", "12", "16", "20", "48", "24", "cm"],
            ["Confine paesaggistico", "7", "24", "25", "56", "28", "m"],
            ["Supporto per pannello solare", "9", "40", "41", "90", "45", "m"],
            ["Bordo di tenda da sole", "15", "20", "25", "60", "30", "ft"],
            ["Estremità del tetto del capannone", "11", "60", "61", "132", "66", "m"],
            ["Pannello di fabbricazione", "13", "84", "85", "182", "91", "cm"],
            ["Struttura di supporto", "28", "45", "53", "126", "63", "m"]
          ]
        }
      },
      "sec-missing-side": {
        "h2": "Come calcolare il perimetro quando manca un lato",
        "blocks": [
          { "kind": "p", "text": "La calcolatrice in questa pagina richiede tutte e tre le lunghezze dei lati. Se un lato è sconosciuto, calcolalo prima con il teorema di Pitagora. Il perimetro non può essere completato a partire da due lati: due lunghezze descrivono un angolo aperto, non un confine chiuso." },
          { "kind": "h3", "text": "Trovare l'ipotenusa quando entrambi i cateti sono noti" },
          { "kind": "p", "text": "Usa il teorema di Pitagora nella sua forma per l'ipotenusa: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]. Esempio: [[a=6]], [[b=8]]. Quindi [[c=\\sqrt{6^2+8^2}]], [[c=\\sqrt{36+64}]], [[c=\\sqrt{100}]], [[[\\boxed{c=10}]]]. Ora si può calcolare il perimetro: [[P=6+8+10]], [[[\\boxed{P=24}]]], con [[s=12]] che deriva dal dimezzamento." },
          { "kind": "h3", "text": "Trovare un cateto mancante quando l'ipotenusa è nota" },
          { "kind": "p", "text": "Riorganizza [[a^2+b^2=c^2]] per isolare il cateto sconosciuto: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]. Esempio: [[c=13]], [[b=12]]. Quindi [[a=\\sqrt{13^2-12^2}]], [[a=\\sqrt{169-144}]], [[a=\\sqrt{25}]], [[[\\boxed{a=5}]]]. Il perimetro segue: [[P=5+12+13=30]], [[s=15]]. La sottrazione dentro la radice è la firma di un cateto mancante; un'ipotenusa mancante somma sempre." },
          { "kind": "h3", "text": "Perché il lato mancante deve essere calcolato prima?" },
          { "kind": "p", "text": "Il perimetro richiede tutte e tre le lunghezze del confine. Un lato mancante non può semplicemente essere ignorato o stimato senza giustificazione: due lati non delimitano un triangolo, e un terzo lato indovinato rende il totale un'invenzione. Se si conoscono solo due lati, la <a href=\"/missing-leg-from-c-and-a-calculator/\" class=\"text-primary underline\">calcolatrice dei lati del triangolo rettangolo</a> trova il terzo prima che la calcolatrice di questa pagina prenda il sopravvento. Nota che questo è un metodo didattico, non una modalità di input aggiuntiva nella calcolatrice esistente: le modalità perimetro e semiperimetro continuano a prendere tre lati ciascuna." }
        ],
        "imgAlt": "Triangolo rettangolo con cateti 6 e 8, ipotenusa sconosciuta risolta come 10, con perimetro 24",
        "figcaption": "I cateti 6 e 8 danno c = 10, quindi P = 24 e s = 12."
      },
      "sec-pythagoras": {
        "h2": "Qual è il legame tra il teorema di Pitagora e il perimetro di un triangolo rettangolo?",
        "blocks": [
          { "kind": "p", "text": "Il teorema afferma [[[\\boxed{a^2+b^2=c^2}]]]. Stabilisce la relazione tra i due cateti e l'ipotenusa: l'angolo quadrato costringe le tre lunghezze in questo equilibrio esatto. Nel lavoro sul perimetro, il teorema è il ponte tra un insieme incompleto di misure e il confine completo." },
          { "kind": "h3", "text": "Perché è importante per il perimetro?" },
          { "kind": "p", "text": "Se i due cateti sono noti, l'ipotenusa può essere calcolata prima di trovare il perimetro completo. Senza il teorema, un lato mancante bloccherebbe interamente il calcolo; con esso, due lati noti bastano a recuperare il terzo e a concludere la somma. Il teorema funziona anche nell'altra direzione: un'ipotenusa nota e un cateto noto recuperano l'altro cateto. In entrambi i casi trasforma un problema a due lati in un perimetro a tre lati." },
          { "kind": "h3", "text": "Esempio risolto" },
          { "kind": "p", "text": "Dati [[a=5]], [[b=12]]. Trova [[c]]: [[c=\\sqrt{5^2+12^2}]], [[c=\\sqrt{25+144}]], [[c=\\sqrt{169}]], [[[\\boxed{c=13}]]]. Calcola il perimetro: [[P=5+12+13]], [[[\\boxed{P=30}]]]. Calcola il semiperimetro: [[s=\\frac{30}{2}]], [[[\\boxed{s=15}]]]. Un teorema, un'addizione, un dimezzamento: la catena completa da due cateti a entrambe le misure del confine." },
          { "kind": "h3", "text": "Come verificare un triangolo rettangolo?" },
          { "kind": "p", "text": "Le tre misure devono soddisfare [[a^2+b^2=c^2]], con l'ipotenusa come lato più lungo. Controlla anche la disuguaglianza triangolare: per qualsiasi triangolo valido, [[a+b>c]], [[a+c>b]] e [[b+c>a]]. Queste condizioni contano quando si verificano le misure: un controllo pitagorico fallito significa che il triangolo non è rettangolo, o un lato è mal etichettato; una disuguaglianza triangolare fallita significa che le tre lunghezze non possono formare alcun triangolo. Esegui entrambi i controlli prima di fidarti di un perimetro costruito da misure sul campo." }
        ]
      },
      "sec-advanced": {
        "h2": "Come si usa il semiperimetro in altre formule sui triangoli?",
        "blocks": [
          { "kind": "p", "text": "Questa sezione dà al semiperimetro la sua profondità matematica senza trasformare la pagina nel tutorial di un'altra calcolatrice. Il semiperimetro è più che metà di un perimetro: è la quantità che collega le lunghezze dei lati all'area e alla geometria del cerchio, e le formule qui sotto sono dove si guadagna da vivere." },
          { "kind": "h3", "text": "Relazione tra semiperimetro e raggio inscritto" },
          { "kind": "p", "text": "L'area di qualsiasi triangolo non degenere è uguale al suo raggio inscritto per il suo semiperimetro: [[[\\boxed{K=rs}]]], dove [[K]] è l'area, [[r]] il raggio inscritto e [[s]] il semiperimetro. Questa relazione vale per tutti i triangoli non degeneri, non solo quelli rettangoli. Per un triangolo rettangolo, il raggio inscritto può anche essere calcolato dai lati usando [[[\\boxed{r=\\frac{a+b-c}{2}}]]]. Prendi il triangolo 3-4-5: [[s=6]], [[r=\\frac{3+4-5}{2}=1]], quindi [[K=1\\times6]], [[[\\boxed{K=6}]]]. Il semiperimetro è un'importante misura intermedia in questo calcolo: porta l'informazione del confine mentre il raggio inscritto porta l'informazione del cerchio." },
          { "kind": "h3", "text": "Relazione con la formula di Erone" },
          { "kind": "p", "text": "La formula di Erone calcola l'area dai tre lati e dal semiperimetro: [[[\\boxed{K=\\sqrt{s(s-a)(s-b)(s-c)}}]]]. Usa tutte e tre le lunghezze dei lati, usa il semiperimetro, calcola l'area del triangolo e funziona per qualsiasi triangolo valido. Usa il triangolo 3-4-5 con [[s=6]]: [[K=\\sqrt{6(6-3)(6-4)(6-5)}]], [[K=\\sqrt{6\\times3\\times2\\times1}]], [[K=\\sqrt{36}]], [[[\\boxed{K=6}]]]. Il semiperimetro compare quattro volte dentro la radice, il che mostra quanto sia centrale: la formula di Erone non può nemmeno essere scritta senza di esso." },
          { "kind": "h3", "text": "Perché il semiperimetro è una misura fondamentale?" },
          { "kind": "p", "text": "È più che metà di un perimetro. È una quantità matematica utile che collega le lunghezze dei lati all'area e alla geometria del cerchio: la relazione del raggio inscritto lo tratta come il partner naturale di [[r]], e la formula di Erone costruisce l'intera area su di esso. Ogni volta che una formula ha bisogno del confine distillato in un unico numero conveniente, [[s]] è quel numero. Questa pagina non diventa un tutorial completo sulla formula di Erone o sul raggio inscritto; registra il collegamento così che l'output della modalità semiperimetro abbia dove andare dopo." }
        ]
      },
      "sec-perimeter-area": {
        "h2": "Qual è la differenza tra perimetro e area?",
        "blocks": [
          { "kind": "p", "text": "Una delle confusioni più persistenti in geometria è mescolare il contorno con la superficie. Perimetro e area condividono lo stesso triangolo ma misurano cose diverse, in unità diverse, rispondendo a domande diverse." },
          { "kind": "h3", "text": "Il perimetro misura il confine" },
          { "kind": "p", "text": "[[P=a+b+c]]. Misura la lunghezza totale intorno al triangolo: la bordatura, il profilo, la linea della recinzione. Le unità sono lineari: metri, centimetri, piedi, pollici. È unidimensionale, una lunghezza e nient'altro." },
          { "kind": "h3", "text": "L'area misura la superficie racchiusa" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ab}{2}}]]]. Misura la regione piana bidimensionale dentro il triangolo rettangolo: il vetro nella finestra, l'erba nella sezione del giardino. Le unità sono quadrate: metri quadrati, centimetri quadrati, piedi quadrati, pollici quadrati. È bidimensionale, un conteggio di superficie e nient'altro." },
          { "kind": "h3", "text": "Due triangoli possono avere lo stesso perimetro ma aree diverse?" },
          { "kind": "p", "text": "Sì. Triangolo 1: [[a=5]], [[b=12]], [[c=13]]. Quindi [[P=5+12+13=30]] e [[K=\\frac{5\\times12}{2}=30]]. Triangolo 2: [[a=7.5]], [[b=10]], [[c=12.5]]. Verifica l'angolo retto: [[7.5^2+10^2=56.25+100=156.25=12.5^2]], quindi è un triangolo rettangolo genuino. Il suo perimetro è [[P=7.5+10+12.5=30]], gli stessi 30, ma la sua area è [[K=\\frac{7.5\\times10}{2}=37.5]], chiaramente diversa. Perimetro uguale non significa automaticamente area uguale: la lunghezza del contorno fissa la bordatura totale, ma la forma del triangolo decide quanta superficie quella bordatura racchiude." },
          { "kind": "h3", "text": "Perché non dovresti mai esprimere il perimetro in unità quadrate?" },
          { "kind": "p", "text": "Un perimetro è una lunghezza unidimensionale; le unità quadrate descrivono una superficie bidimensionale. Indicare 12 m² per un perimetro afferma una superficie dove è stato misurato solo un contorno, e chiunque legga il numero immaginerà la cosa sbagliata. Mantieni le unità oneste: lunghezze in m, cm, ft, in; aree in m², cm², ft², in². L'unità fa parte della risposta, e l'unità sbagliata trasforma una risposta giusta in una sbagliata." }
        ]
      },
      "sec-units": {
        "h2": "Le unità di misura nei calcoli di perimetro e semiperimetro",
        "blocks": [
          { "kind": "p", "text": "Metri, centimetri, millimetri, chilometri, piedi, pollici, iarde, miglia: le unità di lunghezza vengono in molte taglie, e la formula del perimetro accetta ciascuna di esse. L'unica regola è la concordanza: tutti e tre i lati devono parlare la stessa unità prima di essere sommati." },
          { "kind": "h3", "text": "Perché tutte e tre le lunghezze dei lati devono usare unità compatibili?" },
          { "kind": "p", "text": "Il perimetro è una somma di lunghezze. Sommare 3 piedi a 48 pollici senza convertire mescola due scale, e il totale non ha un significato pulito: 56 di cosa? Prima di sommare le misure, convertile in un'unità comune. I selettori di unità della calcolatrice esistono proprio per questo passaggio, e l'esempio risolto qui sotto mostra la conversione che fa il suo lavoro silenzioso ed essenziale." },
          { "kind": "h3", "text": "Esempio risolto di conversione delle unità" },
          { "kind": "p", "text": "Dati [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Converti il lato di mezzo: [[48\\text{ inches}=4\\text{ ft}]]. Quindi [[P=3+4+5]], [[[\\boxed{P=12\\text{ ft}}]]]. Semiperimetro: [[[\\boxed{s=6\\text{ ft}}]]]. Nota che la terna convertita è la familiare 3-4-5, il che conferma la conversione in modo indipendente: se i pollici fossero stati sommati grezzi, il perimetro sarebbe stato 56 di nulla di coerente." },
          { "kind": "h3", "text": "Calcolare con misure decimali dei lati" },
          { "kind": "p", "text": "Usa [[a=2.5]], [[b=6]], [[c=6.5]]. Prima conferma l'angolo retto: [[2.5^2+6^2=6.25+36=42.25=6.5^2]]. Calcola il perimetro: [[P=2.5+6+6.5]], [[[\\boxed{P=15\\text{ units}}]]]. Poi il semiperimetro: [[s=\\frac{15}{2}]], [[[\\boxed{s=7.5\\text{ units}}]]]. I decimali scorrono attraverso la stessa addizione e lo stesso dimezzamento dei numeri interi; le formule non richiedono mai interi, e le misure in officina raramente lo sono." },
          { "kind": "h3", "text": "Perché dovresti evitare di arrotondare troppo presto?" },
          { "kind": "p", "text": "I calcoli di misura possono contenere valori decimali, e ogni arrotondamento intermedio inietta un errore che i passaggi successivi non possono rimuovere. Mantieni una precisione sufficiente nei passaggi intermedi e arrotonda solo la risposta finale secondo l'accuratezza di misura richiesta. Arrotondare 2.5 a 3 a metà calcolo corromperebbe sia [[P]] che [[s]]; la calcolatrice mantiene piena precisione fino alla fine, e i calcoli a mano dovrebbero fare lo stesso." }
        ]
      },
      "sec-scaling": {
        "h2": "Come i cambiamenti nelle lunghezze dei lati influenzano perimetro e semiperimetro?",
        "blocks": [
          { "kind": "p", "text": "Il perimetro è una misura lineare, quindi scala linearmente con il triangolo: allunga ogni lato di un certo fattore e il confine si allunga esattamente di quel fattore. Il semiperimetro segue, poiché è sempre metà del perimetro." },
          { "kind": "h3", "text": "Cosa succede quando ogni lato raddoppia?" },
          { "kind": "p", "text": "Parti da [[P=a+b+c]]. Se ogni lato raddoppia, il nuovo perimetro è [[P_2=2a+2b+2c]], che si fattorizza in [[P_2=2(a+b+c)]]. Quindi [[[\\boxed{P_2=2P}]]]. Anche il semiperimetro raddoppia, poiché dimezzare un totale raddoppiato raddoppia comunque la metà. La coppia 3-4-5 a 6-8-10 lo mostra in numeri: 12 diventa 24, e 6 diventa 12." },
          { "kind": "h3", "text": "Cosa succede quando ogni lato è triplicato?" },
          { "kind": "p", "text": "La stessa algebra con fattore tre dà [[[\\boxed{P_2=3P}]]] e [[[\\boxed{s_2=3s}]]]. La relazione di scala lineare vale per qualsiasi fattore di scala [[k]]: moltiplica ogni lato per [[k]] ed entrambe le misure del confine si moltiplicano per [[k]]. È per questo che i disegni in scala si comportano così bene: misura il disegno, moltiplica per il fattore di scala, e il perimetro reale è pronto." },
          { "kind": "h3", "text": "Cosa succede quando cambia solo un lato?" },
          { "kind": "p", "text": "Aumentare un lato mantenendo gli altri due fissi cambia il perimetro della stessa quantità: aggiungi 2 unità a un lato e [[P]] cresce esattamente di 2, perché il perimetro è una semplice somma. Ma in un triangolo rettangolo le lunghezze dei lati sono legate dal teorema di Pitagora, quindi cambiamenti arbitrari dei lati potrebbero non preservare la condizione dell'angolo retto. Allungare un cateto senza adeguare l'ipotenusa rompe [[a^2+b^2=c^2]], e la forma non è più rettangola: la formula del perimetro somma comunque tre numeri, ma essi non descrivono più un triangolo rettangolo." },
          { "kind": "h3", "text": "Confronto tra due triangoli rettangoli" },
          { "kind": "p", "text": "Metti 3-4-5 accanto a 6-8-10. Lunghezze dei lati: ogni lato raddoppiato, fattore di scala 2. Perimetro: 12 contro 24. Semiperimetro: 6 contro 12. Raddoppiare tutte le lunghezze dei lati raddoppia entrambe le misure del confine, esattamente come prevede l'algebra. Il confronto funziona anche nell'altra direzione: se i perimetri di due triangoli stanno in rapporto 2:1 ed entrambi sono rettangoli, anche i loro lati stanno in quel rapporto." }
        ]
      },
      "sec-applications": {
        "h2": "Applicazioni pratiche del perimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Lo stesso schema in due passaggi, somma e poi dimezza, compare ovunque un contorno triangolare debba essere misurato e una formula abbia bisogno della sua metà. Un vetraio totalizza un telaio di finestra dalle sue lunghezze degli spigoli; un lattoniere totalizza la rifinitura intorno a un timpano; un paesaggista totalizza la bordatura intorno a un'aiuola; un fabbricante totalizza il profilo dello spigolo intorno a un pannello. Dai tre lati vengono il perimetro per l'ordine del materiale e il semiperimetro per qualsiasi geometria successiva. I quattro pannelli qui sotto mostrano lo schema su scale diverse: un telaio di finestra (12 m), rifinitura del bordo del tetto (24 ft), una bordatura del giardino (56 m) e una struttura in acciaio di supporto (40 cm), ciascuno etichettato con il suo perimetro e il suo semiperimetro." }
        ],
        "imgAlt": "Quattro pannelli: telaio di finestra 12 m, rifinitura del tetto 24 ft, bordatura del giardino 56 m, telaio in acciaio 40 cm di perimetri",
        "figcaption": "Quattro usi reali: un telaio di finestra, la rifinitura del bordo del tetto, una bordatura del giardino e una struttura in acciaio."
      },
      "sec-mistakes": {
        "h2": "Errori comuni nel calcolo di perimetro e semiperimetro del triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Quasi ogni risposta sbagliata in questo argomento deriva da un lato saltato o da un'etichetta confusa piuttosto che da un'aritmetica cattiva. I sedici errori qui sotto sono quelli che compaiono ancora e ancora, ciascuno con la sua causa e la sua correzione." },
          { "kind": "h3", "text": "1. Dimenticare di includere l'ipotenusa" },
          { "kind": "p", "text": "Usare [[P=a+b]] sul triangolo 3-4-5 dà 7, non 12. L'errore accade perché l'ipotenusa non tocca mai l'angolo retto, quindi sembra separata dal triangolo vero e proprio. Correzione: il confine ha tre spigoli; contali tutti e tre, [[P=a+b+c]]." },
          { "kind": "h3", "text": "2. Confondere il perimetro con il semiperimetro" },
          { "kind": "p", "text": "Inserire 6 dove appartiene 12, o il contrario, dimezza o raddoppia la stima del materiale. L'errore deriva dal fatto che i due valori condividono gli stessi tre lati. Correzione: etichetta ogni risultato [[P]] o [[s]], e controlla [[s=\\frac{P}{2}]] prima di andare avanti." },
          { "kind": "h3", "text": "3. Dividere il perimetro per due quando si calcola il perimetro" },
          { "kind": "p", "text": "Calcolare [[\\frac{3+4+5}{2}=6]] e chiamarlo perimetro sottostima il confine di metà. L'errore è eseguire la formula del semiperimetro per abitudine. Correzione: [[P=a+b+c]] non ha divisione; il dimezzamento appartiene solo a [[s]]." },
          { "kind": "h3", "text": "4. Dimenticare di dividere per due quando si calcola il semiperimetro" },
          { "kind": "p", "text": "Indicare [[s=12]] per il triangolo 3-4-5 alimenta la formula di Erone con un [[s]] raddoppiato e corrompe l'area. Correzione: [[s=\\frac{a+b+c}{2}]] termina sempre con il dimezzamento; senza di esso, il numero è il perimetro." },
          { "kind": "h3", "text": "5. Usare il lato sbagliato come ipotenusa" },
          { "kind": "p", "text": "Trattare un cateto come [[c]], per esempio inserendo a=5, b=4, c=3, sconvolge ogni formula successiva. L'errore di solito deriva dal leggere i lati nell'ordine sbagliato. Correzione: [[c]] è il lato più lungo, di fronte all'angolo retto; ordina i tre numeri e assegna [[c]] al più grande." },
          { "kind": "h3", "text": "6. Inserire misure che non formano un triangolo rettangolo" },
          { "kind": "p", "text": "I lati 2, 3, 4 danno [[P=9]] aritmeticamente, ma [[2^2+3^2=13\\neq16]], quindi non esiste alcun angolo retto e le formule della pagina poggiano su una premessa falsa. Correzione: verifica [[a^2+b^2=c^2]] prima di calcolare." },
          { "kind": "h3", "text": "7. Mescolare centimetri e metri" },
          { "kind": "p", "text": "Sommare 3 m, 40 cm e 5 m come [[3+40+5=48]] produce 48 di nulla. Correzione: converti prima in un'unità: [[40\\text{ cm}=0.4\\text{ m}]], poi [[P=8.4\\text{ m}]]." },
          { "kind": "h3", "text": "8. Mescolare piedi e pollici" },
          { "kind": "p", "text": "Sommare 3 ft, 48 in e 5 ft come 56 ripete lo stesso errore di scala nelle unità imperiali. Correzione: [[48\\text{ in}=4\\text{ ft}]], poi [[P=12\\text{ ft}]]." },
          { "kind": "h3", "text": "9. Indicare il perimetro in unità quadrate" },
          { "kind": "p", "text": "Scrivere [[P=12\\text{ m}^2]]. L'errore di solito deriva dal copiare un'unità d'area per abitudine dopo aver risolto problemi d'area. Correzione: i perimetri sono lunghezze, quindi [[P=12\\text{ m}]]." },
          { "kind": "h3", "text": "10. Indicare il semiperimetro come un'area" },
          { "kind": "p", "text": "Trattare [[s=6]] come 6 unità quadrate. Il semiperimetro è una lunghezza, metà di un confine, non una superficie. Correzione: [[s=6]] unità di lunghezza, punto e basta." },
          { "kind": "h3", "text": "11. Arrotondare troppo presto" },
          { "kind": "p", "text": "Arrotondare 2.5 a 3 prima di sommare dà [[3+6+6.5=15.5]] invece del vero 15. L'errore sembra innocuo perché l'arrotondamento sembra piccolo. Correzione: mantieni piena precisione durante il calcolo e arrotonda solo la risposta finale." },
          { "kind": "h3", "text": "12. Usare solo due lati nella calcolatrice esistente" },
          { "kind": "p", "text": "Inserire [[a=3]], [[b=4]] e nessun [[c]] lascia il confine aperto. La calcolatrice ha bisogno di tutte e tre le lunghezze perché un perimetro è un totale chiuso. Correzione: trova prima il lato mancante con il teorema di Pitagora, poi calcola." },
          { "kind": "h3", "text": "13. Ignorare la disuguaglianza triangolare" },
          { "kind": "p", "text": "I lati 2, 3, 10 danno [[P=15]] aritmeticamente, ma [[2+3<10]], quindi non esiste alcun triangolo. Correzione: controlla [[a+b>c]] prima di fidarti di qualsiasi risultato costruito dai tre numeri." },
          { "kind": "h3", "text": "14. Presumere che il semiperimetro sia un percorso fisico di mezzo confine" },
          { "kind": "p", "text": "Cercare la passeggiata di 6 unità lungo gli spigoli 3-4-5. Nessun singolo mezzo percorso continuo equivale a [[s]] in generale; [[s]] è metà del totale numerico. Correzione: tratta [[s]] come un numero per le formule, non come un percorso da percorrere." },
          { "kind": "h3", "text": "15. Confondere il perimetro con la somma dei soli cateti perpendicolari" },
          { "kind": "p", "text": "Calcolare [[a+b=7]] e fermarsi, come se l'ipotenusa fosse decorazione interna. Correzione: l'ipotenusa è uno spigolo del confine; [[P=a+b+c]], tutti e tre i termini, ogni volta." },
          { "kind": "h3", "text": "16. Presumere che il solo perimetro determini l'area del triangolo" },
          { "kind": "p", "text": "Credere che [[P=30]] fissi [[K]]. Il triangolo 5-12-13 ([[K=30]]) e il triangolo 7.5-10-12.5 ([[K=37.5]]) condividono [[P=30]] con aree diverse. Correzione: l'area ha bisogno di più del totale del confine; usa i cateti o la formula di Erone." },
          { "kind": "h3", "text": "Sbagliato vs corretto: un esempio concreto" },
          { "kind": "p", "text": "Dati [[a=3]], [[b=4]], [[c=5]]. Perimetro corretto: [[P=3+4+5=12]]. Omettendo erroneamente l'ipotenusa: [[3+4=7]]. Sette non è il perimetro completo perché il terzo spigolo del confine non è mai stato contato. Semiperimetro corretto: [[s=\\frac{12}{2}=6]]. Sei non è la lunghezza completa del confine: è metà di essa, il valore di cui hanno bisogno formule come quella di Erone. L'aritmetica sembra sicura in tutti e tre i casi; solo la geometria li distingue." }
        ]
      },
      "sec-verify": {
        "h2": "Come verificare che il perimetro del triangolo rettangolo sia corretto",
        "blocks": [
          { "kind": "p", "text": "Sette controlli indipendenti, tutti dimostrati sul triangolo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[P=12]], [[s=6]]). La concordanza tra percorsi diversi è la prova più forte che una risposta sia giusta, nei compiti a casa come nella misurazione pratica." },
          { "kind": "h3", "text": "Metodo 1: somma di nuovo tutti e tre i lati" },
          { "kind": "p", "text": "Esegui [[P=a+b+c]] da capo: [[P=3+4+5=12]]. Una seconda passata con i numeri reinseriti intercetta refusi e cifre digitate male che una singola passata nasconde." },
          { "kind": "h3", "text": "Metodo 2: dividi il perimetro per due" },
          { "kind": "p", "text": "Calcola [[s=\\frac{P}{2}]]: [[s=\\frac{12}{2}=6]]. Se il dimezzamento non corrisponde all'output della modalità semiperimetro, uno dei due calcoli è andato storto ed entrambi meritano un secondo sguardo." },
          { "kind": "h3", "text": "Metodo 3: raddoppia il semiperimetro" },
          { "kind": "p", "text": "Controlla [[[\\boxed{P=2s}]]]: [[P=2\\times6=12]]. Questo è l'inverso del Metodo 2 e intercetta la stessa classe di errore dall'altra direzione: un [[s]] sbagliato fallisce qui anche quando l'addizione originale sembrava buona." },
          { "kind": "h3", "text": "Metodo 4: verifica la relazione pitagorica" },
          { "kind": "p", "text": "Conferma [[a^2+b^2=c^2]]: [[3^2+4^2=9+16=25=5^2]]. Questo controlla l'identificazione dei lati dietro ogni altro calcolo; un'ipotenusa sbagliata significa che un lato è stato mal etichettato, e [[P]] e [[s]] vanno entrambi ricostruiti." },
          { "kind": "h3", "text": "Metodo 5: controlla la disuguaglianza triangolare" },
          { "kind": "p", "text": "Conferma [[a+b>c]]: [[3+4=7>5]]. Le tre lunghezze devono poter formare un triangolo prima che il controllo dell'angolo retto significhi qualcosa. Un fallimento qui ti rimanda alle misure, non all'aritmetica." },
          { "kind": "h3", "text": "Metodo 6: controlla le unità di misura" },
          { "kind": "p", "text": "Conferma che tutti e tre i lati usino unità compatibili. Le unità miste sono l'errore più silenzioso di questo argomento: l'aritmetica sembra pulita mentre la scala è sbagliata. Rileggi il selettore di unità di ciascun input prima di fidarti del totale." },
          { "kind": "h3", "text": "Metodo 7: confronta con la visualizzazione live" },
          { "kind": "p", "text": "La calcolatrice disegna il triangolo dai lati inseriti. Se il disegno non assomiglia per niente all'oggetto misurato, un lato è stato assegnato male: il lato inserito più lungo dovrebbe stare di fronte all'angolo quadrato. L'immagine è un testimone indipendente, e merita uno sguardo prima che i numeri finiscano in un ordine o in un report." }
        ]
      },
      "sec-related": {
        "h2": "Esplora le calcolatrici correlate per il triangolo rettangolo",
        "blocks": [
          { "kind": "p", "text": "Misure diverse richiedono calcolatrici diverse." }
        ]
      },
      "sec-faq": {
        "h2": "Domande frequenti",
        "blocks": []
      },
      "sec-conclusion": {
        "h2": "Un confine, due misure utili",
        "blocks": [
          { "kind": "p", "text": "Il perimetro totalizza il confine; il semiperimetro dimezza quel totale per le formule che ne hanno bisogno. Il triangolo 3-4-5 porta l'intera storia in miniatura: [[P=12]] unità di contorno per l'ordine del materiale, [[s=6]] unità pronte per la formula di Erone o la relazione del raggio inscritto. Un'addizione e un dimezzamento coprono entrambi i lavori." },
          { "kind": "p", "text": "L'abitudine di lavoro è semplice: etichetta correttamente l'ipotenusa, includi tutti e tre i lati, fai concordare le unità, mantieni i decimali non arrotondati fino alla fine, e verifica con un secondo metodo. Con queste abitudini, [[P=a+b+c]] e [[s=\\frac{a+b+c}{2}]] sono due delle misure più affidabili in geometria." }
        ]
      }
    },
    "relatedHeading": "Esplora le calcolatrici correlate per il triangolo rettangolo",
    "relatedIntro": "Misure diverse richiedono calcolatrici diverse.",
    "relatedItems": [
      { "href": "/right-triangle-perimeter-calculator/", "label": "Calcolatrice del perimetro del triangolo rettangolo" },
      { "href": "/right-triangle-semiperimeter-calculator/", "label": "Calcolatrice del semiperimetro del triangolo rettangolo" },
      { "href": "/right-triangle-area-from-semiperimeter-calculator/", "label": "Calcolatrice dell'area del triangolo rettangolo dal semiperimetro" },
      { "href": "/right-triangle-area-from-legs-calculator/", "label": "Calcolatrice dell'area del triangolo rettangolo dai cateti" },
      { "href": "/pythagorean-theorem-calculator/", "label": "Calcolatrice del teorema di Pitagora" },
      { "href": "/missing-leg-from-c-and-a-calculator/", "label": "Calcolatrice del cateto mancante del triangolo rettangolo" }
    ],
    "faqHeading": "Domande frequenti",
    "faqs": [
      {
        "question": "Qual è la formula del perimetro di un triangolo rettangolo?",
        "answer": "P = a + b + c, dove a e b sono i due cateti e c è l'ipotenusa. Somma tutte e tre le lunghezze dei lati; il totale è la lunghezza completa del confine in unità lineari. Per un triangolo 3-4-5, P = 3 + 4 + 5 = 12 unità. Ogni lato deve essere incluso, compresa l'ipotenusa, perché è uno dei tre spigoli del confine."
      },
      {
        "question": "Qual è la formula del semiperimetro di un triangolo rettangolo?",
        "answer": "s = (a + b + c) / 2, esattamente metà del perimetro, equivalentemente s = P / 2. Somma prima i tre lati, poi dividi una volta. Per un triangolo 3-4-5, s = (3 + 4 + 5) / 2 = 6 unità. È una lunghezza, non un'area, ed è l'input che formule come quella di Erone si aspettano."
      },
      {
        "question": "Qual è la differenza tra perimetro e semiperimetro?",
        "answer": "Il perimetro è l'intero confine, P = a + b + c; il semiperimetro è metà di esso, s = P / 2. Per un triangolo 6-8-10, P = 24 e s = 12. Usa P per le stime di materiale intorno a un contorno e s come input per formule geometriche avanzate. I due differiscono esattamente di un fattore due, sempre."
      },
      {
        "question": "Perché l'ipotenusa è inclusa nel perimetro?",
        "answer": "Perché il perimetro misura il confine esterno completo, e l'ipotenusa è uno dei suoi tre spigoli. Percorrere il triangolo significa percorrere anche l'ipotenusa. Ometterla misura un percorso aperto, non un contorno chiuso. Per 3-4-5, lasciare fuori il 5 dà 7, che non è il perimetro di alcun triangolo con quei lati."
      },
      {
        "question": "Posso calcolare il perimetro se manca un lato?",
        "answer": "Non direttamente: la formula ha bisogno di tutte e tre le lunghezze del confine. Trova prima il lato mancante con il teorema di Pitagora: c = sqrt(a^2 + b^2) per un'ipotenusa mancante, oppure a = sqrt(c^2 - b^2) per un cateto mancante. Con a = 6 e b = 8, c = 10, quindi P = 6 + 8 + 10 = 24. La calcolatrice in questa pagina richiede tutti e tre i lati."
      },
      {
        "question": "Come trovo l'ipotenusa prima di calcolare il perimetro?",
        "answer": "Usa c = sqrt(a^2 + b^2) con i due cateti noti. Per a = 5 e b = 12: c = sqrt(25 + 144) = sqrt(169) = 13. Poi somma tutti e tre i lati: P = 5 + 12 + 13 = 30. Conferma che il risultato sia il lato più lungo; se non lo è, i cateti sono stati mal etichettati."
      },
      {
        "question": "Perché il semiperimetro è utile in geometria?",
        "answer": "È la variabile naturale della formula di Erone, K = sqrt(s(s - a)(s - b)(s - c)), e della relazione del raggio inscritto K = r x s. Le formule d'area continuano a produrre metà, e il semiperimetro le assorbe in un unico numero conveniente. Per 3-4-5, s = 6 alimenta entrambe le formule ed entrambe restituiscono K = 6. Collega le lunghezze dei lati all'area e alla geometria del cerchio."
      },
      {
        "question": "Il semiperimetro è metà dell'area del triangolo?",
        "answer": "No. Il semiperimetro è metà del perimetro, una lunghezza misurata in unità come metri o piedi. L'area è una superficie bidimensionale misurata in unità quadrate. Per il triangolo 3-4-5, s = 6 unità mentre l'area è 6 unità quadrate; i numeri coincidenti sono una coincidenza di questo particolare triangolo, non una regola."
      },
      {
        "question": "Quali unità dovrei usare per il perimetro?",
        "answer": "Qualsiasi unità lineare, purché tutti e tre i lati la condividano: metri, centimetri, millimetri, chilometri, piedi, pollici, iarde o miglia. Converti prima di sommare: 3 ft, 48 in, 5 ft diventano 3 ft, 4 ft, 5 ft, dando P = 12 ft. Non indicare mai un perimetro in unità quadrate; è una lunghezza, non una superficie."
      },
      {
        "question": "Posso calcolare il perimetro usando misure decimali?",
        "answer": "Sì. Le formule trattano i decimali esattamente come i numeri interi. Con a = 2.5, b = 6, c = 6.5: P = 2.5 + 6 + 6.5 = 15 unità e s = 15 / 2 = 7.5 unità. Mantieni piena precisione durante la somma e arrotonda solo la risposta finale all'accuratezza che le misure giustificano."
      },
      {
        "question": "Come verifico se tre lati formano un triangolo rettangolo valido?",
        "answer": "Conferma la relazione pitagorica a^2 + b^2 = c^2 con c come lato più lungo, e conferma la disuguaglianza triangolare a + b > c. Per 3, 4, 5: 9 + 16 = 25 e 3 + 4 > 5, quindi il triangolo è valido e rettangolo. Fallire uno dei due test significa che le misure vanno ricontrollate prima che qualsiasi perimetro sia considerato attendibile."
      },
      {
        "question": "Qual è la relazione tra semiperimetro, raggio inscritto e formula di Erone?",
        "answer": "Il semiperimetro alimenta entrambe: K = r x s lo collega al raggio inscritto, e K = sqrt(s(s - a)(s - b)(s - c)) è la formula di Erone costruita su di esso. Per un triangolo rettangolo il raggio inscritto deriva anche dai lati come r = (a + b - c) / 2. Con 3-4-5, s = 6 e r = 1, quindi K = 1 x 6 = 6, in accordo con il risultato di Erone."
      }
    ]
  }
};
