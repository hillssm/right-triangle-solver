// inradiusGuideTranslations.bit.ts: Right Triangle Inradius
// Guide (Page 38 of 45) translation.
export const INRADIUS_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatore dell'inraggio di un triangolo rettangolo - Trova r dai lati",
        "description": "Usa il calcolatore dell'inraggio di un triangolo rettangolo per trovare r dai cateti a e b e dall'ipotenusa c, con la formula, un esempio svolto 6-8-10 e controlli passo passo.",
        "primaryKeyword": "Calcolatore dell'inraggio di un triangolo rettangolo",
        "slug": "right-triangle-inradius-calculator",
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-intro": "Calcolatore dell'inraggio di un triangolo rettangolo",
        "sec-calculate": "Calcolare l'inraggio di un triangolo rettangolo",
        "sec-what-inradius": "Che cos'è l'inraggio di un triangolo rettangolo?",
        "sec-incircle": "Che cos'è una circonferenza inscritta nella geometria del triangolo rettangolo?",
        "sec-incenter": "Capire l'incentro di un triangolo rettangolo",
        "sec-formula": "Formula dell'inraggio di un triangolo rettangolo",
        "sec-why-formula-works": "Perché funziona la formula dell'inraggio di un triangolo rettangolo?",
        "sec-how-to-use": "Come usare il calcolatore dell'inraggio di un triangolo rettangolo",
        "sec-step-example": "Esempio passo passo per trovare l'inraggio",
        "sec-diagram": "Diagramma della circonferenza inscritta di un triangolo rettangolo spiegato",
        "sec-area-semiperimeter": "Come calcolare l'inraggio usando area e semiperimetro",
        "sec-semiperimeter-relation": "Relazione tra inraggio e semiperimetro",
        "sec-examples": "Esempi svolti di calcolo dell'inraggio di un triangolo rettangolo",
        "sec-legs-known": "Come calcolare l'inraggio quando sono noti solo i due cateti",
        "sec-vs-circumradius": "Relazione tra inraggio e circumraggio",
        "sec-verify": "Come verificare il calcolo dell'inraggio",
        "sec-properties": "Proprietà importanti dell'inraggio in un triangolo rettangolo",
        "sec-mistakes": "Errori comuni nel calcolo dell'inraggio",
        "sec-applications": "Applicazioni pratiche dell'inraggio di un triangolo rettangolo",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-related": "Scopri i calcolatori correlati per il triangolo rettangolo",
        "sec-faq": "Domande frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore dell'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Trova l'inraggio di un triangolo rettangolo dai suoi due cateti e dalla sua ipotenusa.",
            },
            {
              "kind": "p",
              "text": "L'inraggio è il raggio della circonferenza inscritta, il cerchio che sta dentro il triangolo e tocca tutti e tre i lati. Il calcolatore ha bisogno di tre numeri: il cateto [[a]], il cateto [[b]] e l'ipotenusa [[c]], dove [[a]] e [[b]] sono i lati che formano l'angolo retto e [[c]] è il lato opposto a esso. La formula è [[r = \\frac{a+b-c}{2}]], dove [[r]] è l'inraggio. Somma i due cateti, sottrae l'ipotenusa e divide il risultato per due.",
            },
            {
              "kind": "p",
              "text": "Per esempio, un triangolo 6-8-10 dà [[r = \\frac{6+8-10}{2} = 2]]. Quel 2 è il raggio del cerchio dentro il triangolo, misurato nella stessa unità dei lati. Il cerchio tocca ciascun lato in esattamente un punto, e il suo centro, l'incentro, si trova alla stessa distanza da tutti e tre i lati.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcolare l'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina ha tre campi di input, uno per ciascun lato del triangolo, e un risultato. Inserisci le tre lunghezze dei lati, tutte nella stessa unità, poi fai clic su Calcola l'inraggio r. Il risultato è una lunghezza, il raggio della circonferenza inscritta, espressa in quella stessa unità.",
            },
            {
              "kind": "p",
              "text": "Il cateto a è il primo lato che forma l'angolo retto, e il cateto b è il secondo. Non importa quale cateto chiami [[a]] e quale [[b]], perché la formula li somma insieme. L'ipotenusa [[c]] è il lato opposto all'angolo retto, e deve essere il lato più lungo del triangolo. Se il numero inserito per [[c]] è più corto di un cateto, le tre lunghezze non possono formare un triangolo rettangolo, e il risultato non sarà significativo.",
            },
            {
              "kind": "p",
              "text": "Mantieni le unità uguali in tutti e tre i campi. Se [[a]] e [[b]] sono in centimetri, anche [[c]] deve essere in centimetri, e la risposta esce in centimetri. Leggi la risposta come un raggio, non come un diametro: un raggio va dal centro del cerchio al suo bordo, mentre un diametro attraversa tutto il cerchio. Usa Reimposta per svuotare i campi prima di iniziare un nuovo problema.",
            },
          ],
        },
        "sec-what-inradius": {
          "h2": "Che cos'è l'inraggio di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "L'inraggio di un triangolo rettangolo è il raggio della sua circonferenza inscritta, il cerchio più grande che sta dentro il triangolo. Immagina il triangolo ABC con l'angolo retto in C, il cateto AC chiamato [[a]], il cateto BC chiamato [[b]] e l'ipotenusa AB chiamata [[c]]. Ora disegna il cerchio più grande che puoi dentro quel triangolo senza attraversare nessun lato. Quel cerchio tocca tutti e tre i lati, e il suo raggio è l'inraggio, indicato con [[r]].",
            },
            {
              "kind": "p",
              "text": "Il centro della circonferenza inscritta si chiama incentro, indicato con [[I]]. L'incentro si trova alla stessa distanza perpendicolare da tutti e tre i lati, e quella distanza è [[r]]. Ogni raggio tracciato da [[I]] a un lato incontra quel lato ad angolo retto, ed è per questo che il cerchio tocca appena il lato invece di attraversarlo. La circonferenza inscritta resta dentro il triangolo perché ogni punto del cerchio è a distanza [[r]] o meno da [[I]], e [[I]] stesso è dentro il triangolo.",
            },
            {
              "kind": "p",
              "text": "Un piccolo esempio rende l'idea concreta. In un triangolo 3-4-5, l'inraggio è [[r = \\frac{3+4-5}{2} = 1]]. La circonferenza inscritta ha un raggio di 1 unità, quindi il suo centro si trova a 1 unità da ciascun lato. Il <a href=\"/right-triangle-radius-calculator/\">calcolatore del raggio di un triangolo rettangolo</a> copre entrambi i raggi di un triangolo rettangolo in un'unica pagina, se vuoi confrontare la circonferenza inscritta con il cerchio che passa per i vertici.",
            },
          ],
          "image": {
            "src": "inradius-main-incircle.svg",
            "alt": "Triangolo rettangolo ABC con la circonferenza inscritta dentro di esso, centro I e raggio r che tocca tutti e tre i lati",
            "caption": "Il triangolo ABC con la sua circonferenza inscritta: il centro I si trova a distanza r da ciascun lato.",
          },
        },
        "sec-incircle": {
          "h2": "Che cos'è una circonferenza inscritta nella geometria del triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una circonferenza inscritta è un cerchio tracciato interamente dentro un triangolo in modo che tocchi, cioè sia tangente a, tutti e tre i lati. Ogni lato del triangolo è una retta tangente al cerchio: incontra il cerchio in esattamente un punto e non lo taglia. Quei tre punti di incontro si chiamano punti di tangenza, uno su ciascun lato.",
            },
            {
              "kind": "p",
              "text": "Il raggio tracciato dall'incentro a un punto di tangenza è sempre perpendicolare a quel lato. Questo è un fatto generale sui cerchi: un raggio che arriva a un punto di tangenza incontra la retta tangente ad angolo retto. Poiché l'incentro è alla stessa distanza da tutti e tre i lati, i tre raggi verso i tre punti di tangenza hanno tutti la stessa lunghezza [[r]], quindi un unico cerchio si adatta a tutti e tre i lati insieme.",
            },
            {
              "kind": "p",
              "text": "Ogni triangolo ha esattamente una circonferenza inscritta. Le tre bisettrici degli angoli di un triangolo si incontrano in un punto, l'incentro, e la distanza da quel punto ai lati fissa il raggio. Un secondo cerchio diverso non potrebbe toccare tutti e tre i lati dall'interno, perché anche il suo centro dovrebbe essere equidistante da tutti e tre i lati, e solo l'incentro ha questa proprietà. Nota che la circonferenza inscritta non è il cerchio che passa per i vertici: tocca i lati dall'interno e non raggiunge mai un vertice.",
            },
          ],
          "image": {
            "src": "inradius-tangency-points.svg",
            "alt": "Circonferenza inscritta che tocca tutti e tre i lati di un triangolo rettangolo in tre punti di tangenza con raggi perpendicolari",
            "caption": "Tre punti di tangenza: ogni raggio incontra il suo lato a 90 gradi.",
          },
        },
        "sec-incenter": {
          "h2": "Capire l'incentro di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "L'incentro di un triangolo è il punto in cui si incontrano le tre bisettrici interne degli angoli. Una bisettrice di un angolo è una retta che divide un angolo in due metà uguali. Traccia la bisettrice dell'angolo A, la bisettrice dell'angolo B e la bisettrice dell'angolo C, e tutte e tre si incrociano in un unico punto. Quel punto è l'incentro [[I]], ed è il centro della circonferenza inscritta.",
            },
            {
              "kind": "p",
              "text": "L'incentro è equidistante da tutti e tre i lati grazie a come si comportano le bisettrici degli angoli. Ogni punto sulla bisettrice di un angolo è alla stessa distanza dai due lati che formano quell'angolo. Un punto su due bisettrici insieme è quindi alla stessa distanza da tutti e tre i lati, e l'incentro si trova su tutte e tre le bisettrici. Quella distanza comune è l'inraggio [[r]], quindi il cerchio con centro in [[I]] e raggio [[r]] tocca ciascun lato.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo con l'angolo retto in C, l'incentro si trova lungo la bisettrice dell'angolo di 90 gradi, che attraversa in diagonale l'angolo in C a 45 gradi da ciascun cateto. L'incentro si trova sempre dentro il triangolo, mai su un lato o fuori di esso, perché le tre bisettrici si incontrano all'interno. Ecco perché la circonferenza inscritta sta dentro il triangolo invece di uscirne.",
            },
          ],
          "image": {
            "src": "inradius-angle-bisectors.svg",
            "alt": "Triangolo rettangolo con tutte e tre le bisettrici interne degli angoli che si incontrano nell'incentro I",
            "caption": "Le tre bisettrici degli angoli si incontrano in I, l'incentro, a distanza r da ciascun lato.",
          },
        },
        "sec-formula": {
          "h2": "Formula dell'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula dell'inraggio di un triangolo rettangolo è abbastanza breve da ricordarla a colpo d'occhio:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[r]] è l'inraggio, [[a]] è il primo cateto, [[b]] è il secondo cateto e [[c]] è l'ipotenusa. La formula funziona in tre fasi, e ogni fase ha un significato chiaro.",
            },
            {
              "kind": "p",
              "text": "Fase 1: somma i due cateti, [[a+b]]. Questa lunghezza combinata è sempre maggiore dell'ipotenusa, perché i due cateti insieme si estendono più della retta che li attraversa. Fase 2: sottrai l'ipotenusa, [[a+b-c]]. Resta la quantità di cui i cateti superano l'ipotenusa. Fase 3: dividi per due, [[r = \\frac{a+b-c}{2}]]. La divisione trasforma quella lunghezza rimasta nel raggio della circonferenza inscritta, e la sezione sulla dimostrazione qui sotto mostra perché dimezzare è esattamente giusto.",
            },
            {
              "kind": "p",
              "text": "Prendi il triangolo 6-8-10: [[a+b = 14]], poi [[14-10 = 4]], poi [[\\frac{4}{2} = 2]], quindi [[r = 2]]. La formula è specifica per i triangoli rettangoli. Per un triangolo che non è rettangolo, l'inraggio è comunque uguale all'area divisa per il semiperimetro, [[r = \\frac{A}{s}]], ma la scorciatoia [[r = \\frac{a+b-c}{2}]] non vale, perché la sua dimostrazione dipende dall'angolo retto.",
            },
          ],
          "image": {
            "src": "inradius-formula.svg",
            "alt": "Triangolo rettangolo etichettato con i cateti a e b, l'ipotenusa c, l'incentro I e l'inraggio r accanto alla formula r uguale a più b meno c diviso 2",
            "caption": "La formula usa tutti e tre i lati: somma i cateti, sottrai l'ipotenusa, dividi per due.",
          },
        },
        "sec-why-formula-works": {
          "h2": "Perché funziona la formula dell'inraggio di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula deriva da un semplice fatto sulle tangenti: i due segmenti di tangente tracciati dallo stesso punto esterno a un cerchio fino a quel cerchio hanno lunghezze uguali. Ogni vertice del triangolo si trova fuori dalla circonferenza inscritta, e i due lati che si incontrano in quel vertice sono entrambi tangenti al cerchio. Quindi i due segmenti di tangente da ciascun vertice sono uguali.",
            },
            {
              "kind": "p",
              "text": "Parti dal vertice dell'angolo retto C. I due lati che si incontrano in C sono i cateti, e la circonferenza inscritta tocca ciascun cateto in un punto che si trova a distanza [[r]] da C lungo il lato. Questo perché i due raggi dall'incentro ai cateti, insieme ai due brevi segmenti lungo i cateti, formano un quadrato di lato [[r]] nell'angolo C. Quindi il segmento di tangente da C lungo ciascun cateto ha lunghezza [[r]].",
            },
            {
              "kind": "p",
              "text": "Ora guarda gli altri due vertici. Sia [[x]] la lunghezza di tangente dal vertice A lungo i lati, e sia [[y]] la lunghezza di tangente dal vertice B. Al vertice A, una tangente corre lungo il cateto [[a]] verso C e l'altra corre lungo l'ipotenusa verso B, quindi entrambe hanno lunghezza [[x]]. Al vertice B, entrambe le tangenti hanno lunghezza [[y]]. Le lunghezze dei lati sono quindi costruite da questi pezzi:",
            },
            {
              "kind": "p",
              "text": "[[[a = r + x]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = r + y]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = x + y]]]",
            },
            {
              "kind": "p",
              "text": "Somma le prime due equazioni: [[a+b = 2r+x+y]]. Poiché [[x+y = c]], questo diventa [[a+b = 2r+c]]. Riordinando si ottiene [[2r = a+b-c]], e dividendo per due si ottiene la formula, [[r = \\frac{a+b-c}{2}]]. Ogni passaggio segue dall'uguaglianza delle lunghezze delle tangenti, quindi la formula non è un trucco da memorizzare, è un risultato diretto di come la circonferenza inscritta tocca i lati.",
            },
          ],
        },
        "sec-how-to-use": {
          "h2": "Come usare il calcolatore dell'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici brevi passaggi ti portano da un triangolo etichettato a una risposta verificata. I passaggi in ordine sono:",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua il triangolo rettangolo nel tuo problema e conferma che ha un angolo retto.",
                "Trova il vertice dell'angolo retto, di solito segnato con un piccolo quadrato, e chiamalo C.",
                "Individua il primo cateto perpendicolare a, uno dei due lati che formano l'angolo retto.",
                "Individua il secondo cateto perpendicolare b, l'altro lato che forma l'angolo retto.",
                "Individua l'ipotenusa completa c, il lato opposto all'angolo retto.",
                "Conferma che c è il lato più lungo. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Verifica che i tre lati soddisfino il teorema di Pitagora, [[a^2+b^2 = c^2]].",
                "Seleziona unità di misura compatibili e converti qualsiasi misura che usa un'unità diversa.",
                "Inserisci il cateto a nel campo Cateto a.",
                "Inserisci il cateto b nel campo Cateto b.",
                "Inserisci l'ipotenusa c nel campo Ipotenusa c.",
                "Fai clic su Calcola l'inraggio r e leggi il risultato.",
                "Verifica il risultato: deve essere positivo, nella stessa unità dei lati e più piccolo di ciascun cateto.",
                "Usa Reimposta quando inizi un altro calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Inserire il lato sbagliato come [[c]] è l'errore che crea più problemi. Se un cateto viene inserito nel campo dell'ipotenusa, la formula sottrae un cateto invece dell'ipotenusa, e la risposta è troppo grande. Verifica sempre che il valore nel campo dell'ipotenusa sia il più lungo dei tre prima di fare clic su Calcola.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Esempio passo passo per trovare l'inraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "Usa l'esempio dall'inizio della pagina, [[a = 6]], [[b = 8]] e [[c = 10]]. I cinque passaggi qui sotto mostrano tutto il procedimento, senza saltare nulla.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[r = \\frac{a+b-c}{2}]].",
                "Sostituisci i valori: [[r = \\frac{6+8-10}{2}]].",
                "Somma i cateti: [[r = \\frac{14-10}{2}]].",
                "Sottrai l'ipotenusa: [[r = \\frac{4}{2}]].",
                "Dividi: [[r = 2]].",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta 2 significa che la circonferenza inscritta ha un raggio di 2 unità, nella stessa unità dei lati. Il suo centro si trova a 2 unità da ciascun lato, e il cerchio tocca ciascun lato in esattamente un punto.",
            },
            {
              "kind": "p",
              "text": "Verifica che le misure formino un triangolo rettangolo prima di fidarti della risposta: [[6^2+8^2 = 36+64 = 100 = 10^2]], quindi il teorema di Pitagora vale e il triangolo è davvero rettangolo. Un secondo controllo usa area e semiperimetro, [[A = \\frac{6 \\times 8}{2} = 24]] e [[s = \\frac{6+8+10}{2} = 12]], dando [[r = \\frac{24}{12} = 2]], la stessa risposta per un'altra strada.",
            },
          ],
          "image": {
            "src": "inradius-example-6-8-10.svg",
            "alt": "Esempio svolto con a uguale a 6, b uguale a 8, c uguale a 10 e inraggio r uguale a 2, circonferenza inscritta che tocca tutti e tre i lati",
            "caption": "Esempio svolto: a = 6, b = 8, c = 10 dà r = 2, verificato con area e semiperimetro.",
          },
        },
        "sec-diagram": {
          "h2": "Diagramma della circonferenza inscritta di un triangolo rettangolo spiegato",
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto [[a]], il lato BC è il cateto [[b]] e il lato AB è l'ipotenusa [[c]]. Il punto [[I]] segna l'incentro dentro il triangolo, e un cerchio con centro in [[I]] tocca tutti e tre i lati.",
            },
            {
              "kind": "p",
              "text": "Leggi il diagramma in questo ordine. Parti da A, percorri il cateto [[a]] fino a C, poi il cateto [[b]] fino a B, poi torna lungo l'ipotenusa da B ad A. La circonferenza inscritta si trova dentro questo confine, toccando il cateto [[a]] in un punto, il cateto [[b]] in un secondo punto e l'ipotenusa in un terzo punto. Da [[I]], tre brevi segmenti corrono verso quei tre punti, e ciascuno è un raggio di lunghezza [[r]].",
            },
            {
              "kind": "p",
              "text": "Ogni raggio incontra il suo lato ad angolo retto, che è il segno di una tangente: il lato sfiora appena il cerchio in quel punto invece di tagliarlo. Tutti e tre i raggi hanno la stessa lunghezza, ed è per questo che un unico cerchio può toccare tutti e tre i lati insieme. Il cerchio non passa per nessun vertice: i vertici si trovano fuori dal cerchio, e i segmenti di tangente da ciascun vertice al cerchio sono le lunghezze [[r]], [[x]] e [[y]] usate nella dimostrazione qui sopra.",
            },
          ],
        },
        "sec-area-semiperimeter": {
          "h2": "Come calcolare l'inraggio usando area e semiperimetro",
          "blocks": [
            {
              "kind": "p",
              "text": "C'è un secondo modo per trovare l'inraggio, usando l'area e il semiperimetro del triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{A}{s}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[A]] è l'area del triangolo e [[s]] è il semiperimetro, metà del perimetro. Per un triangolo rettangolo, l'area è metà del prodotto dei cateti, [[A = \\frac{ab}{2}]], perché i due cateti fungono da base e altezza. Il semiperimetro è [[s = \\frac{a+b+c}{2}]]. Il <a href=\"/right-triangle-area-calculator/\">calcolatore dell'area di un triangolo rettangolo</a> trova [[A]] dai due cateti, e il <a href=\"/right-triangle-semiperimeter-calculator/\">calcolatore del semiperimetro di un triangolo rettangolo</a> trova [[s]] da tutti e tre i lati.",
            },
            {
              "kind": "p",
              "text": "Sostituendo le espressioni del triangolo rettangolo si ottiene [[r = \\frac{ab/2}{(a+b+c)/2}]], e le metà si cancellano lasciando [[r = \\frac{ab}{a+b+c}]]. Questa è la formula equivalente in termini di lati dall'inizio della guida, e dà la stessa risposta di [[r = \\frac{a+b-c}{2}]] per ogni triangolo rettangolo valido, perché le due espressioni sono uguali ogni volta che [[a^2+b^2 = c^2]].",
            },
            {
              "kind": "p",
              "text": "Usa il triangolo 6-8-10 per vedere che entrambe le strade concordano. L'area è [[A = \\frac{6 \\times 8}{2} = 24]], e il semiperimetro è [[s = \\frac{6+8+10}{2} = 12]], quindi [[r = \\frac{24}{12} = 2]]. La formula standard dà lo stesso risultato, [[r = \\frac{6+8-10}{2} = 2]]. Il calcolatore in questa pagina usa la formula a tre lati, e la strada dell'area è un utile controllo indipendente.",
            },
          ],
          "image": {
            "src": "inradius-area-semiperimeter.svg",
            "alt": "Triangolo rettangolo diviso in tre triangoli più piccoli che condividono l'incentro, mostrando che l'area è uguale a r per s",
            "caption": "Tre triangoli che condividono I: le loro aree sommate danno A = r per s.",
          },
        },
        "sec-semiperimeter-relation": {
          "h2": "Relazione tra inraggio e semiperimetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Il semiperimetro [[s]] è metà del perimetro del triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[s = \\frac{a+b+c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Si chiama semiperimetro perché semi significa metà: il perimetro completo è [[P = a+b+c]], e il semiperimetro è la sua metà. Non confondere i due. Il perimetro è la lunghezza totale intorno al triangolo, mentre il semiperimetro è un valore ausiliario più corto che compare nelle formule dell'area e nella formula dell'inraggio [[r = \\frac{A}{s}]].",
            },
            {
              "kind": "p",
              "text": "Il solo semiperimetro non può determinare l'inraggio, perché la formula [[r = \\frac{A}{s}]] ha bisogno anche dell'area [[A]]. Due triangoli possono avere lo stesso semiperimetro e aree diverse, e allora anche i loro inraggi sono diversi. L'area porta l'informazione sulla forma che il semiperimetro tralascia. Per il triangolo 6-8-10, [[s = 12]] e [[A = 24]], quindi [[r = \\frac{24}{12} = 2]]. Un triangolo diverso con [[s = 12]] ma un'area minore avrebbe un inraggio minore.",
            },
            {
              "kind": "p",
              "text": "C'è un modo elegante per vedere perché [[A = rs]] vale. Unisci l'incentro [[I]] ai tre vertici, dividendo il triangolo in tre triangoli più piccoli. Ogni triangolo piccolo ha altezza [[r]] e una base uguale a un lato del triangolo grande, quindi le loro aree sono [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] e [[\\frac{rc}{2}]]. Sommandole si ottiene [[A = \\frac{r(a+b+c)}{2} = r \\times s]], poiché [[s = \\frac{a+b+c}{2}]]. Dividendo per [[s]] si ottiene [[r = \\frac{A}{s}]].",
            },
          ],
        },
        "sec-examples": {
          "h2": "Esempi svolti di calcolo dell'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo 3-4-5 di base",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 3]], [[b = 4]] e [[c = 5]], la formula dà [[r = \\frac{3+4-5}{2} = \\frac{2}{2} = 1]]. La circonferenza inscritta ha un raggio di 1 unità. Verifica prima il triangolo: [[3^2+4^2 = 9+16 = 25 = 5^2]], quindi è un triangolo rettangolo valido.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Triangolo 6-8-10 già visto",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 6]], [[b = 8]] e [[c = 10]], [[r = \\frac{6+8-10}{2} = \\frac{4}{2} = 2]]. La circonferenza inscritta ha un raggio di 2 unità, il doppio del raggio del triangolo 3-4-5, perché questo triangolo è il triangolo 3-4-5 ingrandito di un fattore 2. Verifica: [[6^2+8^2 = 36+64 = 100 = 10^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Triangolo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 5]], [[b = 12]] e [[c = 13]], [[r = \\frac{5+12-13}{2} = \\frac{4}{2} = 2]]. L'inraggio è 2 unità, lo stesso del triangolo 6-8-10, anche se il triangolo è più grande e di forma diversa. Verifica: [[5^2+12^2 = 25+144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Triangolo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 8]], [[b = 15]] e [[c = 17]], [[r = \\frac{8+15-17}{2} = \\frac{6}{2} = 3]]. La circonferenza inscritta ha un raggio di 3 unità. Verifica: [[8^2+15^2 = 64+225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 9]], [[b = 12]] e [[c = 15]], [[r = \\frac{9+12-15}{2} = \\frac{6}{2} = 3]]. Questo è il triangolo 3-4-5 ingrandito di 3, quindi l'inraggio è 3 volte l'inraggio di 1 del triangolo 3-4-5. Verifica: [[9^2+12^2 = 81+144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 4.5]], [[b = 6]] e [[c = 7.5]], [[r = \\frac{4.5+6-7.5}{2} = \\frac{3}{2} = 1.5]]. L'inraggio è 1.5 unità. I decimali non cambiano nulla nel metodo: somma, sottrai, dividi per due. Verifica: [[4.5^2+6^2 = 20.25+36 = 56.25 = 7.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 30]] cm, [[b = 40]] cm e [[c = 0.5]] m, converti prima l'ipotenusa: 0.5 m equivalgono a 50 cm, perché 1 m è 100 cm. Ora tutti e tre i lati usano i centimetri, quindi [[r = \\frac{30+40-50}{2} = \\frac{20}{2} = 10]] cm. Verifica: [[30^2+40^2 = 900+1600 = 2500 = 50^2]]. Mescolare metri e centimetri senza convertire darebbe una risposta sbagliata, quindi converti sempre prima.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Valori decimali più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 7.2]], [[b = 9.6]] e [[c = 12]], [[r = \\frac{7.2+9.6-12}{2} = \\frac{4.8}{2} = 2.4]]. L'inraggio è 2.4 unità. Questo è il triangolo 3-4-5 ingrandito di 2.4, quindi l'inraggio è 2.4 volte l'inraggio di 1 del triangolo 3-4-5. Verifica: [[7.2^2+9.6^2 = 51.84+92.16 = 144 = 12^2]].",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Come calcolare l'inraggio quando sono noti solo i due cateti",
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina richiede tutte e tre le lunghezze dei lati, quindi non può funzionare con i soli due cateti. Se sono noti solo [[a]] e [[b]], trova prima l'ipotenusa con il teorema di Pitagora, poi usa la formula dell'inraggio. I due passaggi sono:",
            },
            {
              "kind": "p",
              "text": "[[[c = \\sqrt{a^2+b^2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a+b-c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] e [[b = 8]]. Prima calcola l'ipotenusa: [[c = \\sqrt{36+64} = \\sqrt{100} = 10]]. Poi calcola l'inraggio: [[r = \\frac{6+8-10}{2} = 2]]. Il <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati di un triangolo rettangolo</a> trova l'ipotenusa mancante da due cateti, che è lo stesso primo passaggio usato qui, e il <a href=\"/pythagorean-theorem-calculator/\">calcolatore del teorema di Pitagora</a> fa lo stesso calcolo direttamente. Non saltare il primo passaggio: inserire un cateto nel campo dell'ipotenusa dà un inraggio sbagliato, come mostra la sezione sugli errori qui sotto.",
            },
          ],
        },
        "sec-vs-circumradius": {
          "h2": "Relazione tra inraggio e circumraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "L'inraggio [[r]] e il circumraggio [[R]] sono i due raggi di un triangolo rettangolo, e descrivono due cerchi diversi. L'inraggio è il raggio della circonferenza inscritta, il cerchio dentro il triangolo che tocca tutti e tre i lati. Il circumraggio è il raggio della circonferenza circoscritta, il cerchio fuori dal triangolo che passa per tutti e tre i vertici. Un cerchio sta dentro il triangolo, l'altro lo circonda.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo, il circumraggio è [[R = \\frac{c}{2}]], perché l'ipotenusa è il diametro della circonferenza circoscritta. L'inraggio è [[r = \\frac{a+b-c}{2}]], che ha bisogno di tutti e tre i lati, perché quanto la circonferenza inscritta si adatta dipende dalla forma del triangolo, non solo dal suo lato più lungo. Usa il triangolo 6-8-10 per vedere la differenza nei numeri: [[r = 2]] e [[R = 5]].",
            },
            {
              "kind": "p",
              "text": "Anche i centri sono diversi. L'incentro si trova dentro il triangolo, dove si incontrano le bisettrici degli angoli, a distanza [[r]] da ciascun lato. Il circocentro si trova nel punto medio dell'ipotenusa, sul bordo del triangolo, a distanza [[R]] da ciascun vertice. Per i problemi sulla circonferenza circoscritta, usa il <a href=\"/right-triangle-circumradius-calculator/\">calcolatore del circumraggio di un triangolo rettangolo</a>, che applica direttamente [[R = \\frac{c}{2}]].",
            },
          ],
          "table": {
            "headers": [
              "Caratteristica",
              "Inraggio r",
              "Circumraggio R",
            ],
            "rows": [
              [
                "Cerchio",
                "Circonferenza inscritta",
                "Circonferenza circoscritta",
              ],
              [
                "Posizione",
                "Dentro il triangolo",
                "Intorno al triangolo",
              ],
              [
                "Contatto",
                "Tangente ai lati",
                "Passa per i vertici",
              ],
              [
                "Formula per il triangolo rettangolo",
                "(a+b-c)/2",
                "c/2",
              ],
              [
                "Centro",
                "Incentro",
                "Circocentro",
              ],
              [
                "Valore 6-8-10",
                "2",
                "5",
              ],
            ],
          },
          "image": {
            "src": "inradius-vs-circumcircle.svg",
            "alt": "Triangolo rettangolo con la piccola circonferenza inscritta dentro di esso e la grande circonferenza circoscritta che passa per i suoi vertici, triangolo 6-8-10",
            "caption": "Circonferenza inscritta (r = 2) dentro il triangolo, circonferenza circoscritta (R = 5) intorno a esso, triangolo 6-8-10.",
          },
        },
        "sec-verify": {
          "h2": "Come verificare il calcolo dell'inraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli indipendenti scoprono quasi ogni errore. Eseguine almeno uno per ogni risposta, e tutti e quattro quando il problema è importante. L'esempio qui sotto usa per tutto il triangolo 6-8-10, con [[r = 2]].",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Formula originale",
            },
            {
              "kind": "p",
              "text": "Ricalcola con [[r = \\frac{a+b-c}{2}]] da capo, senza guardare il tuo primo procedimento. Qui [[r = \\frac{6+8-10}{2} = 2]]. Un calcolo nuovo scopre gli errori del primo, soprattutto una sottrazione fatta nell'ordine sbagliato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Area e semiperimetro",
            },
            {
              "kind": "p",
              "text": "Verifica con [[r = \\frac{A}{s}]]. Qui [[A = \\frac{6 \\times 8}{2} = 24]] e [[s = \\frac{6+8+10}{2} = 12]], quindi [[r = \\frac{24}{12} = 2]]. Questa strada usa moltiplicazione e divisione invece di addizione e sottrazione, quindi scopre un tipo diverso di errore.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Verifica [[a^2+b^2 = c^2]]. Qui [[6^2+8^2 = 36+64 = 100 = 10^2]], quindi i tre lati formano un vero triangolo rettangolo. Se questo controllo fallisce, la formula dell'inraggio non vale affatto, e nessun valore di [[r]] da essa può essere attendibile.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Ragionevolezza geometrica",
            },
            {
              "kind": "p",
              "text": "Conferma che [[r]] è positivo, più piccolo di ciascun cateto e nell'unità corretta. Qui 2 è positivo e più piccolo sia di 6 sia di 8, e l'unità corrisponde ai lati. Il cerchio deve stare dentro il triangolo, quindi un inraggio più grande del cateto più corto è impossibile e segnala un errore, di solito un cateto inserito come ipotenusa.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà importanti dell'inraggio in un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove proprietà seguono direttamente dalla formula e dalla geometria della circonferenza inscritta. Ognuna serve anche come controllo di buon senso su una nuova risposta.",
            },
            {
              "kind": "list",
              "items": [
                "L'inraggio è sempre positivo per un triangolo valido e non degenere, perché [[a+b]] è sempre maggiore di [[c]].",
                "L'incentro si trova dentro il triangolo, dove si incontrano le tre bisettrici degli angoli.",
                "L'inraggio è la distanza perpendicolare più breve dall'incentro a ciascun lato, e tutte e tre le distanze sono uguali a [[r]].",
                "La circonferenza inscritta tocca tutti e tre i lati, un punto di tangenza su ciascun lato.",
                "I segmenti di tangente dallo stesso punto esterno hanno lunghezze uguali, che è il fatto da cui deriva la formula.",
                "Aumentare la scala complessiva del triangolo aumenta l'inraggio dello stesso fattore di scala: raddoppiare ogni lato raddoppia [[r]], e triplicare ogni lato triplica [[r]].",
                "L'inraggio non è uguale al circumraggio. In un triangolo 6-8-10, [[r = 2]] mentre [[R = 5]].",
                "L'inraggio dipende dalla forma del triangolo oltre che dalle sue dimensioni: un triangolo 5-12-13 e un triangolo 6-8-10 hanno entrambi [[r = 2]], anche se i loro lati sono diversi.",
                "L'inraggio può essere calcolato dalle lunghezze dei lati con [[r = \\frac{a+b-c}{2}]] o da area e semiperimetro con [[r = \\frac{A}{s}]], ed entrambe le strade danno la stessa risposta.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori comuni nel calcolo dell'inraggio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Usare la formula del circumraggio invece di quella dell'inraggio: [[R = \\frac{c}{2}]] dà 5 per un triangolo 6-8-10, mentre l'inraggio è 2. Le due formule rispondono a domande diverse.",
                "Inserire c come cateto invece che come ipotenusa: se 8 viene inserito come c e 10 come b, la formula dà [[\\frac{6+10-8}{2} = 4]], non 2. Metti sempre il lato più lungo nel campo dell'ipotenusa.",
                "Dimenticare di sottrarre c: sommare i cateti e dividere per due, [[\\frac{6+8}{2} = 7]], dà un numero molto più grande del vero inraggio di 2.",
                "Dimenticare di dividere per due: [[6+8-10 = 4]] è il doppio dell'inraggio. La divisione per due fa parte della formula, non è un passaggio finale facoltativo.",
                "Inserire misure di lati non valide: i lati 3, 4 e 6 non soddisfano [[3^2+4^2 = 6^2]], poiché 25 non è uguale a 36, quindi la formula dell'inraggio non vale per essi.",
                "Ignorare la relazione pitagorica: qualsiasi terna di lunghezze può essere inserita nella formula, ma solo un vero triangolo rettangolo dà un inraggio significativo. Verifica prima [[a^2+b^2 = c^2]].",
                "Mescolare le unità di misura: cateti in centimetri e un'ipotenusa in metri producono una risposta sbagliata. Converti ogni misura in un'unica unità prima di calcolare.",
                "Confondere l'inraggio con il diametro: l'inraggio è la distanza dal centro al bordo. Il diametro della circonferenza inscritta è il doppio dell'inraggio, quindi per un triangolo 6-8-10 è 4, non 2.",
                "Confondere l'incentro con il circocentro: l'incentro è dentro il triangolo dove si incontrano le bisettrici degli angoli, mentre il circocentro è il punto medio dell'ipotenusa. Sono punti diversi.",
                "Supporre che la circonferenza inscritta passi per i vertici del triangolo: la circonferenza inscritta tocca i lati e non raggiunge mai un vertice. Il cerchio che passa per i vertici è la circonferenza circoscritta.",
                "Supporre che il raggio sia misurato lungo un lato invece che perpendicolare a esso: l'inraggio è la distanza perpendicolare dall'incentro a un lato, che è la distanza più breve fino a quel lato.",
                "Arrotondare i calcoli intermedi troppo presto: mantieni la piena precisione durante l'addizione e la sottrazione, e arrotonda solo la risposta finale. Arrotondare presto sposta il risultato.",
                "Usare solo due lunghezze dei lati senza calcolare prima l'ipotenusa: la formula ha bisogno di tutti e tre i lati. Trova [[c]] con il teorema di Pitagora prima di usarla.",
                "Confondere il perimetro con il semiperimetro: il semiperimetro è metà del perimetro, [[s = \\frac{a+b+c}{2}]]. Usare il perimetro completo in [[r = \\frac{A}{s}]] dimezza la risposta corretta.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni pratiche dell'inraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sull'inraggio verificano se gli studenti sanno individuare l'ipotenusa, applicare [[r = \\frac{a+b-c}{2}]] e controllare il risultato con area e semiperimetro. Anche gli esercizi di costruzione di cerchi usano la stessa idea: dato un triangolo rettangolo, disegna la sua circonferenza inscritta trovando l'incentro dove si incontrano le bisettrici degli angoli e impostando il compasso sull'inraggio.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa la circonferenza inscritta quando un cerchio deve stare esattamente dentro una cornice triangolare o quando un angolo arrotondato deve toccare due bordi di una forma. La modellazione geometrica e la geometria analitica usano l'incentro come il punto dentro un triangolo che è equidistante da tutti e tre i lati, che è il centro naturale per una forma inscritta.",
            },
            {
              "kind": "p",
              "text": "Gli insegnanti usano l'argomento come lezione ponte tra triangoli e cerchi, perché la circonferenza inscritta è uno dei primi punti in cui le due materie si incontrano. Lunghezze delle tangenti, bisettrici degli angoli, area e semiperimetro compaiono tutti in un'unica immagine, quindi l'inraggio è un modo compatto per ripassarli insieme. Anche i progetti di design reali che hanno bisogno di un cerchio inscritto richiedono tolleranze e limiti dei materiali oltre questa pagina, quindi tratta il risultato come il valore geometrico esatto e aggiungi i margini pratici separatamente.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di pratica con risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessun valore ripete gli esempi svolti, e ogni soluzione è svolta per intero qui sotto.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Numero intero semplice",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti [[a = 20]] cm e [[b = 21]] cm e ipotenusa [[c = 29]] cm. Trova l'inraggio [[r]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Misura decimale",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 10.5]] m, [[b = 14]] m e [[c = 17.5]] m, trova l'inraggio [[r]] in metri.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti [[a = 1.5]] m e [[b = 2]] m e ipotenusa [[c = 250]] cm. Trova l'inraggio in metri.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Trova l'ipotenusa dai due cateti",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti [[a = 12]] cm e [[b = 16]] cm. Trova prima l'ipotenusa, poi l'inraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Area e semiperimetro",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti [[a = 15]] cm e [[b = 20]] cm e ipotenusa [[c = 25]] cm. Trova l'area e il semiperimetro, poi trova l'inraggio con [[r = \\frac{A}{s}]] e confermalo con la formula a tre lati.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Individua un triangolo rettangolo non valido",
            },
            {
              "kind": "p",
              "text": "A uno studente vengono dati [[a = 7]] cm, [[b = 10]] cm e [[c = 12]] cm e gli viene chiesto l'inraggio. Mostra perché questi lati non formano un triangolo rettangolo, e spiega che cosa dovrebbe fare lo studente invece di applicare la formula.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[r = \\frac{20+21-29}{2} = \\frac{12}{2} = 6]] cm. Verifica: [[20^2+21^2 = 400+441 = 841 = 29^2]].",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[r = \\frac{10.5+14-17.5}{2} = \\frac{7}{2} = 3.5]] m. Verifica: [[10.5^2+14^2 = 110.25+196 = 306.25 = 17.5^2]].",
            },
            {
              "kind": "p",
              "text": "Risposta 3: Converti l'ipotenusa: 250 cm equivalgono a 2.5 m. Poi [[r = \\frac{1.5+2-2.5}{2} = \\frac{1}{2} = 0.5]] m, cioè 50 cm. Verifica: [[1.5^2+2^2 = 2.25+4 = 6.25 = 2.5^2]].",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[c = \\sqrt{12^2+16^2} = \\sqrt{144+256} = \\sqrt{400} = 20]] cm, poi [[r = \\frac{12+16-20}{2} = \\frac{8}{2} = 4]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[A = \\frac{15 \\times 20}{2} = 150]] centimetri quadrati e [[s = \\frac{15+20+25}{2} = 30]] cm, quindi [[r = \\frac{150}{30} = 5]] cm. La formula a tre lati concorda: [[r = \\frac{15+20-25}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[7^2+10^2 = 49+100 = 149]], mentre [[12^2 = 144]], quindi [[a^2+b^2]] non è uguale a [[c^2]] e il triangolo non è rettangolo. Lo studente non dovrebbe applicare la formula dell'inraggio: prima ricontrolli le misure, e se sono corrette, usi la formula generale [[r = \\frac{A}{s}]] per un triangolo non rettangolo.",
            },
          ],
        },
      },
      "relatedHeading": "Scopri i calcolatori correlati per il triangolo rettangolo",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un compito specifico del triangolo rettangolo, quindi scegli lo strumento che corrisponde alla misura che devi trovare.",
      "relatedItems": [
        "Calcolatore del raggio di un triangolo rettangolo",
        "Calcolatore del circumraggio di un triangolo rettangolo",
        "Calcolatore dell'area di un triangolo rettangolo",
        "Calcolatore del semiperimetro di un triangolo rettangolo",
        "Calcolatore dei lati di un triangolo rettangolo",
      ],
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Qual è la formula dell'inraggio di un triangolo rettangolo?",
          "answer": "La formula è [[r = \\frac{a+b-c}{2}]], dove [[a]] e [[b]] sono i cateti, [[c]] è l'ipotenusa e [[r]] è l'inraggio. Somma i due cateti, sottrai l'ipotenusa e dividi per due. Per esempio, un triangolo 6-8-10 dà un inraggio di 2.",
        },
        {
          "question": "Che cosa rappresenta l'inraggio?",
          "answer": "L'inraggio è il raggio della circonferenza inscritta, il cerchio che sta dentro il triangolo e tocca tutti e tre i lati. È la distanza perpendicolare dall'incentro a un qualsiasi lato. In un triangolo 6-8-10, l'inraggio è 2, quindi la circonferenza inscritta ha un raggio di 2 unità.",
        },
        {
          "question": "Che cos'è una circonferenza inscritta?",
          "answer": "Una circonferenza inscritta è un cerchio tracciato interamente dentro un triangolo in modo che tocchi tutti e tre i lati, un punto di tangenza su ciascun lato. Ogni triangolo ha esattamente una circonferenza inscritta. È diversa dalla circonferenza circoscritta, che passa per i tre vertici invece.",
        },
        {
          "question": "Dove si trova l'incentro?",
          "answer": "L'incentro è il punto in cui si incontrano le tre bisettrici interne degli angoli del triangolo. Si trova sempre dentro il triangolo. In un triangolo rettangolo con l'angolo retto in C, si trova lungo la bisettrice dell'angolo di 90 gradi, a distanza [[r]] da ciascun lato.",
        },
        {
          "question": "Perché la formula dell'inraggio sottrae l'ipotenusa?",
          "answer": "I segmenti di tangente dal vertice dell'angolo retto hanno lunghezza [[r]], quindi i cateti sono [[a = r+x]] e [[b = r+y]] mentre l'ipotenusa è [[c = x+y]]. Sommando i cateti si ottiene [[a+b = 2r+c]], quindi sottraendo [[c]] resta [[2r]]. La sottrazione rimuove le lunghezze di tangente condivise e isola l'inraggio.",
        },
        {
          "question": "Perché dividiamo per due?",
          "answer": "Sommare i due cateti conta l'inraggio due volte, una volta in ciascun cateto, perché ogni cateto contiene un segmento di tangente di lunghezza [[r]] dal vertice dell'angolo retto. La somma [[a+b-c]] è quindi uguale a [[2r]], non a [[r]], quindi dividendo per due si ottiene il singolo inraggio.",
        },
        {
          "question": "Posso calcolare l'inraggio usando solo i due cateti?",
          "answer": "Non direttamente, perché la formula ha bisogno anche dell'ipotenusa. Trova prima l'ipotenusa con [[c = \\sqrt{a^2+b^2}]], poi usa [[r = \\frac{a+b-c}{2}]]. Per i cateti 6 e 8, l'ipotenusa è 10 e l'inraggio è 2. Usa il calcolatore dei lati per trovare un'ipotenusa mancante.",
        },
        {
          "question": "Posso calcolare l'inraggio usando area e semiperimetro?",
          "answer": "Sì. La formula è [[r = \\frac{A}{s}]], dove [[A]] è l'area e [[s]] è il semiperimetro. Per un triangolo rettangolo, [[A = \\frac{ab}{2}]] e [[s = \\frac{a+b+c}{2}]]. Per un triangolo 6-8-10, [[A = 24]] e [[s = 12]], quindi [[r = 2]]. Il calcolatore in questa pagina usa la formula a tre lati, quindi tratta la strada dell'area come un controllo indipendente.",
        },
        {
          "question": "L'inraggio è uguale al circumraggio?",
          "answer": "No. L'inraggio è il raggio del cerchio dentro il triangolo che tocca i suoi lati, [[r = \\frac{a+b-c}{2}]], mentre il circumraggio è il raggio del cerchio che passa per i vertici, [[R = \\frac{c}{2}]]. In un triangolo 6-8-10 sono 2 e 5.",
        },
        {
          "question": "L'inraggio può essere più grande del cateto più corto di un triangolo?",
          "answer": "No. L'inraggio è sempre più piccolo di ciascun cateto, perché la circonferenza inscritta deve stare dentro il triangolo. In un triangolo 3-4-5, l'inraggio è 1, più piccolo del cateto più corto di 3. Una risposta più grande del cateto più corto segnala un errore, di solito un cateto inserito come ipotenusa.",
        },
        {
          "question": "Perché l'ipotenusa deve essere il lato più lungo?",
          "answer": "L'ipotenusa è opposta all'angolo retto, l'angolo più grande del triangolo, e il lato più lungo si trova sempre di fronte all'angolo più grande. Anche il teorema di Pitagora lo impone: [[c^2 = a^2+b^2]] è maggiore sia di [[a^2]] sia di [[b^2]] da solo, quindi [[c]] è più lungo di [[a]] e più lungo di [[b]].",
        },
        {
          "question": "Come posso verificare se il mio calcolo dell'inraggio è corretto?",
          "answer": "Ricalcola con la formula originale, poi verifica con area e semiperimetro, [[r = \\frac{A}{s}]], e conferma [[a^2+b^2 = c^2]] per i lati. Conferma anche che la risposta è positiva, più piccola di ciascun cateto e nella stessa unità dei lati. Se tutti e quattro i controlli concordano, la risposta è corretta.",
        },
      ],
    },
};
