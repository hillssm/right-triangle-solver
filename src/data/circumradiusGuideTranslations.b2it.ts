// circumradiusGuideTranslations.bit.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B2_IT = {
  "it": {
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-intro": "Calcolatore del circumraggio di un triangolo rettangolo",
        "sec-calculate": "Calcolare il circumraggio di un triangolo rettangolo",
        "sec-what-circumradius": "Che cos'è il circumraggio di un triangolo rettangolo?",
        "sec-circumcircle": "Che cos'è una circonferenza circoscritta nella geometria del triangolo rettangolo?",
        "sec-formula": "Formula del circumraggio di un triangolo rettangolo",
        "sec-why-diameter": "Perché l'ipotenusa è il diametro della circonferenza circoscritta?",
        "sec-circumcenter": "Che cos'è il circocentro di un triangolo rettangolo?",
        "sec-how-to-use": "Come usare il calcolatore del circumraggio di un triangolo rettangolo",
        "sec-step-example": "Esempio passo passo per trovare il circumraggio",
        "sec-diagram": "Diagramma della circonferenza circoscritta di un triangolo rettangolo spiegato",
        "sec-proof": "Perché la formula del circumraggio funziona?",
        "sec-thales": "Capire il teorema di Talete e la circonferenza circoscritta",
        "sec-examples": "Esempi svolti di calcolo del circumraggio di un triangolo rettangolo",
        "sec-legs-known": "Come trovare il circumraggio quando sono noti i due cateti",
        "sec-diameter": "Relazione tra circumraggio e diametro",
        "sec-vs-inradius": "Circumraggio e inraggio di un triangolo rettangolo a confronto",
        "sec-pythagoras": "Relazione tra circumraggio e teorema di Pitagora",
        "sec-verify": "Come verificare il calcolo del circumraggio",
        "sec-properties": "Proprietà importanti del circumraggio nei triangoli rettangoli",
        "sec-mistakes": "Errori comuni nel calcolo del circumraggio",
        "sec-applications": "Applicazioni pratiche del circumraggio",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-related": "Scopri i calcolatori correlati per il triangolo rettangolo",
        "sec-faq": "Domande frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore del circumraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Trova il circumraggio di un triangolo rettangolo con una sola divisione: dimezza l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il circumraggio è il raggio del cerchio che passa per tutti e tre i vertici del triangolo, chiamato circonferenza circoscritta. L'ipotenusa c è il lato opposto all'angolo retto, ed è l'unica misura di cui questo calcolatore ha bisogno, perché l'ipotenusa è anche il diametro della circonferenza circoscritta. La formula è [[R = \\frac{c}{2}]], dove [[R]] è il circumraggio e [[c]] è l'ipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Per esempio, se [[c = 10]] cm, allora [[R = \\frac{10}{2} = 5]] cm. Quei 5 cm sono la distanza dal centro della circonferenza circoscritta a ciascun vertice del triangolo. La stessa distanza raggiunge il vertice A, il vertice B e il vertice C, ed è proprio questo che fa passare il cerchio per tutti e tre.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcolare il circumraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina ha un solo campo di input, per l'ipotenusa c. L'ipotenusa è il lato opposto all'angolo retto, ed è anche il lato più lungo del triangolo. Misurala da un estremo all'altro, nell'unità che stai usando, e inserisci quel singolo numero.",
            },
            {
              "kind": "p",
              "text": "La sola ipotenusa basta perché il circumraggio non dipende da nient'altro. Per questo il calcolatore non ha bisogno di un secondo o terzo input.",
            },
            {
              "kind": "p",
              "text": "Inserisci una lunghezza positiva. Un'ipotenusa pari a zero o negativa non descrive nessun triangolo reale, e il calcolatore non avrebbe nulla di sensato da dimezzare. Mantieni l'unità coerente con il tuo problema: se c è in centimetri, la risposta è in centimetri, e se c è in metri, la risposta è in metri.",
            },
            {
              "kind": "p",
              "text": "Fai clic su Calcola il circumraggio R per vedere il risultato, e usa Reimposta per svuotare il campo prima di un nuovo problema. Leggi la risposta come un raggio, non come un diametro. Se il calcolatore mostra 5 cm per un'ipotenusa di 10 cm, il cerchio completo è largo 10 cm, e 5 cm è la distanza dal suo centro al suo bordo.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "Che cos'è il circumraggio di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Il circumraggio di un triangolo rettangolo è il raggio della sua circonferenza circoscritta, il cerchio tracciato per tutti e tre i vertici. Prendi il triangolo ABC con l'angolo retto in C. Disegna un cerchio che passa esattamente per A, B e C. La distanza dal centro di quel cerchio a uno qualsiasi dei tre vertici è il circumraggio, indicato con [[R]].",
            },
            {
              "kind": "p",
              "text": "Il centro del cerchio si chiama circocentro, indicato con [[O]]. In un triangolo rettangolo, [[O]] si trova nel punto medio dell'ipotenusa AB. Poiché [[O]] è il centro, le distanze da [[O]] ai tre vertici sono tutte uguali, quindi [[AO = BO = CO = R]]. Un solo numero, [[R]], descrive tutte e tre le distanze insieme.",
            },
            {
              "kind": "p",
              "text": "Un esempio semplice rende l'idea concreta. In un triangolo 6-8-10, l'ipotenusa è 10 cm, quindi il circumraggio è 5 cm. Il centro si trova a 5 cm da A, a 5 cm da B e a 5 cm da C. I cateti, 6 cm e 8 cm, sono lati del triangolo, non raggi, e nessuno dei due è uguale al circumraggio in questo caso.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Triangolo rettangolo ABC dentro la sua circonferenza circoscritta con centro O nel punto medio dell'ipotenusa AB",
            "caption": "Il triangolo ABC dentro la sua circonferenza circoscritta: O è il centro, e AO, BO e CO sono uguali a R.",
          },
        },
        "sec-circumcircle": {
          "h2": "Che cos'è una circonferenza circoscritta nella geometria del triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una circonferenza circoscritta è un cerchio che passa per ogni vertice di un poligono. Per un triangolo, questo significa che il cerchio passa per tutti e tre gli angoli e non gli si richiede nient'altro. Ogni triangolo ha esattamente una circonferenza circoscritta, perché tre punti non allineati determinano un unico cerchio.",
            },
            {
              "kind": "p",
              "text": "In un triangolo rettangolo, la circonferenza circoscritta ha una forma speciale. Il triangolo sta dentro il cerchio con la sua ipotenusa tesa dritta attraverso il centro, da un lato all'altro del cerchio. Il terzo vertice, il vertice dell'angolo retto C, si trova sul cerchio tra di essi. Nessuna parte del triangolo sporge oltre il cerchio, e il cerchio è il più piccolo che possa passare per tutti e tre i vertici.",
            },
            {
              "kind": "p",
              "text": "La circonferenza circoscritta è diversa dalla circonferenza inscritta. La circonferenza inscritta si trova dentro il triangolo e tocca tutti e tre i lati dall'interno. La circonferenza circoscritta circonda il triangolo e lo tocca solo nei tre vertici. Confondere i due cerchi è la fonte di confusione più comune in questa pagina, e la sezione di confronto qui sotto li mette fianco a fianco.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Formula del circumraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula del circumraggio di un triangolo rettangolo è così breve da ricordarla a colpo d'occhio:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[R]] è il circumraggio, il raggio della circonferenza circoscritta, e [[c]] è l'ipotenusa completa, il lato opposto all'angolo retto. La formula dice: prendi l'ipotenusa e dividila per due.",
            },
            {
              "kind": "p",
              "text": "Il calcolo ha due passaggi. Primo, individua correttamente l'ipotenusa. È il lato di fronte all'angolo retto, ed è sempre il lato più lungo. Secondo, dividi la sua lunghezza per due. Non ci sono quadrati, né radici quadrate, né una seconda misura da trovare prima, purché l'ipotenusa sia già nota.",
            },
            {
              "kind": "p",
              "text": "Il motivo per cui la divisione funziona è che l'ipotenusa è il diametro della circonferenza circoscritta. Un raggio è sempre la metà di un diametro, quindi [[R = \\frac{D}{2}]], dove [[D]] è il diametro. In un triangolo rettangolo [[D = c]], quindi sostituendo si ottiene [[R = \\frac{c}{2}]]. La formula è in realtà la familiare relazione tra raggio e diametro, applicata a un diametro che è anche un lato del triangolo.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo generico, cioè non necessariamente rettangolo, il circumraggio segue la formula [[R = \\frac{abc}{4A}]], dove [[a]], [[b]] e [[c]] sono i tre lati e [[A]] è l'area del triangolo. Per un triangolo rettangolo si semplifica in [[R = \\frac{c}{2}]], perché l'area è [[A = \\frac{ab}{2}]]. Usa la formula generale solo per i triangoli che non sono rettangoli.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Perché l'ipotenusa è il diametro della circonferenza circoscritta?",
          "blocks": [
            {
              "kind": "p",
              "text": "Questa è l'idea su cui ruota tutta la pagina, quindi merita un'occhiata attenta. Prendi il triangolo rettangolo ABC con l'angolo retto in C, e sia [[O]] il punto medio dell'ipotenusa AB. L'affermazione è che [[O]] è equidistante da tutti e tre i vertici, il che lo rende il centro della circonferenza circoscritta, e che AB, passando per [[O]] con entrambe le estremità sul cerchio, è un diametro.",
            },
            {
              "kind": "p",
              "text": "Il fatto chiave è la proprietà del punto medio di un triangolo rettangolo: il punto medio dell'ipotenusa è equidistante da tutti e tre i vertici. In simboli, [[OA = OB = OC]]. Poiché [[O]] è il punto medio di AB, [[OA]] e [[OB]] sono ciascuna metà dell'ipotenusa, quindi [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Perché [[OC]] è uguale alla metà dell'ipotenusa? Un modo per vederlo è completare il rettangolo. Disegna una copia del triangolo ABC ruotata di mezzo giro intorno a [[O]], così che i due triangoli insieme formino un rettangolo con AB come una diagonale. Le diagonali di un rettangolo sono uguali e si tagliano a metà, quindi anche [[OC = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Una volta stabilito che [[OA = OB = OC]], il resto segue. Un cerchio con centro in [[O]] e raggio [[\\frac{c}{2}]] passa per A, B e C, quindi è la circonferenza circoscritta, [[O]] è il circocentro e [[\\frac{c}{2}]] è il circumraggio. Poiché A e B sono estremità opposte di una retta che passa per il centro, AB è un diametro, quindi [[AB = 2R]], cioè [[c = 2R]] e dunque [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Ipotenusa AB mostrata come diametro della circonferenza circoscritta con AO e OB uguali a R",
            "caption": "L'ipotenusa AB è il diametro: AO e OB sono uguali a R, e AB è uguale a 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "Che cos'è il circocentro di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Il circocentro di un triangolo è il punto equidistante da tutti e tre i vertici, ed è il centro della circonferenza circoscritta. Si trova dove si incontrano gli assi dei lati.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo, gli assi si incontrano in un punto che puoi trovare senza disegnarli: il punto medio dell'ipotenusa. Dimezza AB e hai il circocentro [[O]]. Dimezzare uno dei cateti dà una retta che passa per lo stesso punto, un controllo utile quando costruisci il centro con riga e compasso.",
            },
            {
              "kind": "p",
              "text": "Il circocentro si trova sull'ipotenusa stessa, esattamente a metà di essa. Questa è la caratteristica speciale dei triangoli rettangoli. In un triangolo acutangolo, tutti e tre gli angoli sono inferiori a 90 gradi e il circocentro cade dentro il triangolo. Il triangolo rettangolo è il caso limite, con il centro che si trova sul bordo del triangolo, sul suo lato più lungo.",
            },
            {
              "kind": "p",
              "text": "Il circocentro non è il vertice dell'angolo retto. Il vertice C è un punto sul cerchio, a distanza [[R]] da [[O]], mentre [[O]] è il centro. Confondere i due è un errore comune, perché C è l'angolo più evidente del triangolo. Ricorda che il centro deve essere equidistante da A, B e C, e C non è equidistante da A e B a meno che il triangolo non sia isoscele in un modo particolare, quindi C non può essere il centro in generale.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Circocentro O nel punto medio dell'ipotenusa, equidistante da tutti e tre i vertici",
            "caption": "O è il punto medio di AB, con OA, OB e OC tutti uguali a R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Come usare il calcolatore del circumraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove brevi passaggi ti portano da un triangolo etichettato a una risposta verificata. I cateti non servono in nessun punto, perché la sola ipotenusa determina il circumraggio.",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua il triangolo rettangolo nel tuo problema e conferma che ha un angolo retto.",
                "Trova l'angolo retto, di solito segnato con un piccolo quadrato nel vertice C.",
                "Individua il lato opposto all'angolo retto; quel lato è l'ipotenusa c.",
                "Conferma che questo lato è il lato più lungo del triangolo. Se non lo è, rietichetta il diagramma prima di continuare.",
                "Seleziona l'unità appropriata e converti le misure in modo che usino tutte la stessa unità.",
                "Inserisci la lunghezza dell'ipotenusa nel campo Ipotenusa c.",
                "Fai clic su Calcola il circumraggio R e leggi il risultato.",
                "Verifica il risultato: deve essere positivo, nella stessa unità di c, ed esattamente la metà di c.",
                "Usa Reimposta quando inizi un altro calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Se il tuo problema fornisce i due cateti invece dell'ipotenusa, trova prima c con il teorema di Pitagora, [[c = \\sqrt{a^2 + b^2}]], e poi inserisci quel valore. Il <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati di un triangolo rettangolo</a> può trovare l'ipotenusa mancante per te, e la sezione sui cateti qui sotto mostra un esempio completo.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Esempio passo passo per trovare il circumraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "Usa [[c = 10]] cm. I tre passaggi qui sotto mostrano tutto il procedimento, senza saltare nulla.",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[R = \\frac{c}{2}]].",
                "Sostituisci il valore noto: [[R = \\frac{10}{2}]].",
                "Dividi: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La risposta, 5 cm, significa che la circonferenza circoscritta ha un raggio di 5 cm. Il suo centro, il punto medio dell'ipotenusa, si trova a 5 cm da ciascun vertice del triangolo, e il cerchio passa per tutti e tre i vertici. Il diametro del cerchio è 10 cm, lo stesso dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Verifica la risposta con la relazione del diametro, [[2R = c]]. Raddoppiare il raggio dà [[2 \\times 5 = 10]] cm, che corrisponde esattamente all'ipotenusa. Se raddoppiare la tua risposta non restituisce l'ipotenusa di partenza, la divisione è andata storta da qualche parte, e il controllo lo scopre subito.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Esempio svolto con ipotenusa di 10 cm e circumraggio di 5 cm dentro la circonferenza circoscritta",
            "caption": "Esempio svolto: c = 10 cm dà R = 5 cm, e 2 per 5 cm è uguale a 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Diagramma della circonferenza circoscritta di un triangolo rettangolo spiegato",
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma mostra il triangolo ABC con l'angolo retto in C. Il lato AC è il cateto a, il lato BC è il cateto b, e il lato AB è l'ipotenusa c. Il punto [[O]] segna il punto medio di AB, e un cerchio con centro in [[O]] passa per A, B e C.",
            },
            {
              "kind": "p",
              "text": "Leggi il diagramma in questo ordine. Parti da A, percorri il cateto a fino a C, poi il cateto b fino a B, poi torna lungo l'ipotenusa da B ad A, passando per [[O]] lungo il percorso. I segmenti da [[O]] ad A, B e C sono tutti raggi, ciascuno etichettato [[R]].",
            },
            {
              "kind": "p",
              "text": "Il segmento AB passa per il centro [[O]] e ha entrambe le estremità sul cerchio, che è la definizione di diametro. Per questo AB è disegnato come una retta dritta attraverso il centro del cerchio, e non come una corda spostata da un lato. L'angolo retto in C si trova sul cerchio stesso, ed è l'immagine descritta dal teorema di Talete.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Perché la formula del circumraggio funziona?",
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione usa il punto medio dell'ipotenusa e il fatto che è equidistante da tutti e tre i vertici. Sia [[M]] il punto medio di AB nel triangolo rettangolo ABC, con l'angolo retto in C. Allora [[AM = BM = \\frac{c}{2}]] per definizione di punto medio. Il passaggio da dimostrare è [[MA = MB = MC]], cioè che la terza distanza corrisponde alle prime due.",
            },
            {
              "kind": "p",
              "text": "Un modo pulito per mostrarlo è prolungare la mediana CM fino a un punto D tale che [[MD = MC]], e unire D ad A e B. Il quadrilatero ACBD ha le diagonali AB e CD che si tagliano a metà in [[M]], quindi è un parallelogramma. Il suo angolo in C è retto, e un parallelogramma con un angolo retto è un rettangolo, quindi ACBD è un rettangolo.",
            },
            {
              "kind": "p",
              "text": "Le diagonali di un rettangolo sono uguali, quindi [[CD = AB = c]]. Poiché [[M]] dimezza CD, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Questo corrisponde a [[MA]] e a [[MB]], quindi [[MA = MB = MC = \\frac{c}{2}]]. Il punto [[M]] è equidistante da A, B e C, il che lo rende il circocentro, e la distanza comune [[\\frac{c}{2}]] è il circumraggio. Dunque [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Capire il teorema di Talete e la circonferenza circoscritta",
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema di Talete afferma che un angolo sotteso da un diametro in un punto del cerchio è un angolo retto. Nell'immagine, AB è un diametro di un cerchio e C è un qualsiasi punto del cerchio diverso da A o B. Allora l'angolo ACB è di 90 gradi. Il teorema prende il nome da Talete di Mileto, a cui si attribuisce la prima dimostrazione nota.",
            },
            {
              "kind": "p",
              "text": "Il viceversa è ciò che usa questa pagina: se un triangolo ha un angolo retto, la sua ipotenusa può essere trattata come il diametro di un cerchio che passa per tutti e tre i vertici. Prendi il triangolo ABC con l'angolo C uguale a 90 gradi. Il viceversa dice che C si trova sul cerchio con diametro AB, quindi quel cerchio è la circonferenza circoscritta del triangolo, e il suo raggio è la metà di AB.",
            },
            {
              "kind": "p",
              "text": "Le due direzioni insieme danno un test completo. Un punto C sul cerchio con diametro AB dà sempre un angolo retto in C, e un angolo retto in C mette sempre C su quel cerchio.",
            },
            {
              "kind": "p",
              "text": "Il teorema spiega anche la posizione del circocentro. Il centro del cerchio è il punto medio del suo diametro, e il diametro è l'ipotenusa, quindi il centro è il punto medio dell'ipotenusa. Non serve conoscere nient'altro del triangolo. Per questo il calcolatore chiede un solo numero.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagramma del teorema di Talete con diametro AB e punto C sul cerchio che forma un angolo retto",
            "caption": "Teorema di Talete: AB è il diametro, C è sul cerchio, e l'angolo C è di 90 gradi.",
          },
        },
        "sec-examples": {
          "h2": "Esempi svolti di calcolo del circumraggio di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Esempio 1: Numero intero semplice",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 10]] cm, la formula dà [[R = \\frac{10}{2} = 5]] cm. La circonferenza circoscritta ha un diametro di 10 cm e un raggio di 5 cm, e il suo centro è il punto medio dell'ipotenusa, a 5 cm da ciascun vertice.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Misura più grande",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. I numeri più grandi non cambiano nulla nel metodo: dimezza l'ipotenusa e mantieni l'unità. Un cerchio largo 24 m ha un raggio di 12 m.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Misura decimale",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Un'ipotenusa decimale dà un circumraggio decimale, ed è normale. Verificalo raddoppiando: [[2 \\times 3.75 = 7.5]] cm, che restituisce l'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Ipotenusa dispari",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Un numero intero dispari dimezzato dà un numero che finisce con .5. Questo è il triangolo 5-12-13, i cui cateti sono 5 cm e 12 cm, poiché [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misura in millimetri",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Le unità piccole funzionano allo stesso modo, e mantenere l'unità in millimetri per tutto il calcolo evita qualsiasi conversione. In centimetri, la stessa risposta è 9 cm, poiché 90 mm equivalgono a 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Misura frazionaria",
            },
            {
              "kind": "p",
              "text": "Dato [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, cioè 3.75 ft. Dividere per 2 significa moltiplicare il denominatore per 2, quindi il denominatore cresce da 2 a 4. La forma decimale, 3.75 ft, è la stessa risposta scritta in modo diverso.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Convertendo in centimetri, 0.6 m equivalgono a 60 cm, perché 1 m è 100 cm. Entrambe le unità sono corrette, ma la risposta deve indicare quale usa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Misura decimale grande",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Raddoppiare 62.8 restituisce 125.6, il che conferma la divisione.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Come trovare il circumraggio quando sono noti i due cateti",
          "blocks": [
            {
              "kind": "p",
              "text": "Il calcolatore in questa pagina chiede l'ipotenusa, ma molti problemi danno invece i due cateti. In quel caso, trova prima l'ipotenusa con il teorema di Pitagora, poi dimezzala. I due passaggi si combinano in un'unica formula, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], dove [[a]] e [[b]] sono i cateti.",
            },
            {
              "kind": "p",
              "text": "Usa [[a = 6]] cm e [[b = 8]] cm. Prima eleva al quadrato entrambi i cateti e sommali: [[a^2 + b^2 = 36 + 64 = 100]]. Poi prendi la radice quadrata per ottenere l'ipotenusa: [[c = \\sqrt{100} = 10]] cm. Poi dimezzala: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Il <a href=\"/pythagorean-theorem-calculator/\">calcolatore del teorema di Pitagora</a> trova un'ipotenusa mancante da due cateti, che è lo stesso primo passaggio usato qui. Il <a href=\"/right-triangle-area-calculator/\">calcolatore dell'area di un triangolo rettangolo</a> usa gli stessi due cateti in modo diverso, calcolando [[A = \\frac{ab}{2}]], che è 24 centimetri quadrati per il triangolo 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Relazione tra circumraggio e diametro",
          "blocks": [
            {
              "kind": "p",
              "text": "Raggio e diametro descrivono lo stesso cerchio in due modi. Il diametro [[D]] è la distanza dritta attraverso il cerchio passando per il suo centro, e il raggio [[R]] è la distanza dal centro al bordo, quindi [[D = 2R]] e [[R = \\frac{D}{2}]]. Raddoppiare un raggio dà il diametro, e dimezzare un diametro dà il raggio.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo, il diametro ha una seconda identità: è uguale all'ipotenusa. L'ipotenusa si estende attraverso la circonferenza circoscritta da un lato all'altro, passando per il centro, quindi [[D = c]]. Combinando le due relazioni si ottiene [[c = 2R]] e [[R = \\frac{c}{2}]], che è la formula su cui si basa questa pagina.",
            },
            {
              "kind": "p",
              "text": "Un esempio numerico tiene distinte le tre lunghezze. In un triangolo con [[c = 18]] cm, il diametro è [[D = 18]] cm e il circumraggio è [[R = 9]] cm. L'ipotenusa, 18 cm, e il diametro, 18 cm, sono la stessa retta misurata in due ruoli, mentre il raggio, 9 cm, è la metà di quella retta.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Circumraggio e inraggio di un triangolo rettangolo a confronto",
          "blocks": [
            {
              "kind": "p",
              "text": "Il circumraggio e l'inraggio sono i due raggi di un triangolo rettangolo, e descrivono due cerchi diversi. Il circumraggio [[R]] è il raggio della circonferenza circoscritta, che passa per tutti e tre i vertici. L'inraggio [[r]] è il raggio della circonferenza inscritta, che si trova dentro il triangolo e tocca tutti e tre i lati. Un cerchio circonda il triangolo, l'altro sta dentro di esso.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo, il circumraggio è [[R = \\frac{c}{2}]], mentre l'inraggio è [[r = \\frac{a + b - c}{2}]], dove [[a]] e [[b]] sono i cateti e [[c]] è l'ipotenusa. Il circumraggio ha bisogno solo dell'ipotenusa; l'inraggio ha bisogno di tutti e tre i lati, perché quanto la circonferenza inscritta si adatta dipende dalla forma del triangolo, non solo dal suo lato più lungo.",
            },
            {
              "kind": "p",
              "text": "Anche i centri sono diversi. Il circocentro è il punto medio dell'ipotenusa, sul bordo del triangolo. L'incentro è dentro il triangolo, dove si incontrano le bisettrici degli angoli, a distanza [[r]] da ciascun lato.",
            },
            {
              "kind": "p",
              "text": "Usa il triangolo 6-8-10 per vedere la differenza nei numeri. Il circumraggio è [[R = \\frac{10}{2} = 5]] cm, e l'inraggio è [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Per i problemi sulla circonferenza inscritta, usa il <a href=\"/right-triangle-inradius-calculator/\">calcolatore dell'inraggio di un triangolo rettangolo</a>, che applica direttamente [[r = \\frac{a + b - c}{2}]]. Il <a href=\"/right-triangle-radius-calculator/\">calcolatore del raggio di un triangolo rettangolo</a> copre entrambi i raggi in un'unica pagina quando devi confrontarli.",
            },
          ],
          "table": {
            "headers": [
              "Caratteristica",
              "Circumraggio R",
              "Inraggio r",
            ],
            "rows": [
              [
                "Cerchio",
                "Circonferenza circoscritta",
                "Circonferenza inscritta",
              ],
              [
                "Posizione",
                "Intorno al triangolo",
                "Dentro il triangolo",
              ],
              [
                "Contatto",
                "Passa per i vertici",
                "Tangente ai lati",
              ],
              [
                "Formula per il triangolo rettangolo",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Centro",
                "Circocentro",
                "Incentro",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Circonferenza circoscritta che passa per i vertici accanto alla circonferenza inscritta che tocca i lati, triangolo 6-8-10",
            "caption": "Circonferenza circoscritta (R = 5 cm) intorno al triangolo, circonferenza inscritta (r = 2 cm) dentro di esso, triangolo 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Relazione tra circumraggio e teorema di Pitagora",
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema di Pitagora afferma che in un triangolo rettangolo, [[a^2 + b^2 = c^2]], dove [[a]] e [[b]] sono i cateti e [[c]] è l'ipotenusa. È il collegamento tra i cateti e l'ipotenusa, e attraverso l'ipotenusa è anche un collegamento con il circumraggio.",
            },
            {
              "kind": "p",
              "text": "Poiché [[R = \\frac{c}{2}]], e il teorema dà [[c = \\sqrt{a^2 + b^2}]], la sostituzione dà [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Quella formula combinata trova il circumraggio dai due cateti in un solo passaggio, senza scrivere l'ipotenusa separatamente. È lo stesso calcolo in due passaggi della sezione sui cateti, scritto come un'unica espressione.",
            },
            {
              "kind": "p",
              "text": "Verificalo con il triangolo 6-8-10. I cateti danno [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm per l'ipotenusa, e dimezzando si ottiene [[R = 5]] cm. Il teorema di Pitagora fornisce l'ipotenusa, e la formula del circumraggio la dimezza.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Come verificare il calcolo del circumraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli indipendenti scoprono quasi ogni errore. Eseguine almeno uno per ogni risposta, e tutti e quattro quando il problema è importante. L'esempio qui sotto usa per tutto il triangolo 6-8-10, con [[c = 10]] cm e [[R = 5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Relazione del diametro",
            },
            {
              "kind": "p",
              "text": "Raddoppia il circumraggio e confrontalo con l'ipotenusa: [[2R = c]]. Qui [[2 \\times 5 = 10]] cm, che corrisponde esattamente a c. Se raddoppiare la tua risposta non restituisce l'ipotenusa, la divisione per due è andata storta.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Relazione del punto medio",
            },
            {
              "kind": "p",
              "text": "Il circocentro deve trovarsi a metà dell'ipotenusa. Misura da ciascuna estremità dell'ipotenusa fino al centro: ciascuna metà deve essere uguale a [[R]]. Qui ciascuna metà è 5 cm, uguale al circumraggio. Un centro che non è nel punto medio non è il circocentro.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Distanze uguali",
            },
            {
              "kind": "p",
              "text": "Verifica che [[OA = OB = OC = R]]. Il centro deve essere alla stessa distanza da tutti e tre i vertici. Nel triangolo 6-8-10, ciascuna distanza è 5 cm. Se la distanza dal vertice dell'angolo retto è diversa dalla distanza dalle estremità dell'ipotenusa, il centro o il raggio è sbagliato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Quando i cateti sono noti, verifica che [[a^2 + b^2 = c^2]] e confronta l'ipotenusa risultante con [[2R]]. Qui [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], quindi [[c = 10]] cm, e [[2R = 10]] cm concorda. Questo controllo verifica l'intero triangolo, quindi scopre errori di etichettatura che il primo controllo può non cogliere.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà importanti del circumraggio nei triangoli rettangoli",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove proprietà seguono direttamente da [[R = \\frac{c}{2}]]. Ognuna serve anche come controllo di buon senso su una nuova risposta.",
            },
            {
              "kind": "list",
              "items": [
                "Il circumraggio è esattamente la metà dell'ipotenusa, [[R = \\frac{c}{2}]], senza alcuna approssimazione.",
                "L'ipotenusa è il diametro della circonferenza circoscritta, quindi [[D = c]] e [[c = 2R]].",
                "Il circocentro si trova nel punto medio dell'ipotenusa, sul lato più lungo del triangolo.",
                "Il circumraggio è sempre positivo per un triangolo non degenere, poiché l'ipotenusa è una lunghezza positiva.",
                "Il circumraggio è uguale alla metà dell'ipotenusa, e poiché l'ipotenusa è il lato più lungo, il circumraggio è minore dell'ipotenusa. Che sia maggiore o minore di un dato cateto dipende dal triangolo: in un triangolo 6-8-10, [[R = 5]] cm è minore del cateto di 8 cm, mentre in un triangolo 5-12-13, [[R = 6.5]] cm è maggiore del cateto di 5 cm.",
                "Aumentare l'ipotenusa aumenta il circumraggio in proporzione, perché [[R]] è la metà di [[c]].",
                "Raddoppiare l'ipotenusa raddoppia il circumraggio: se [[c]] diventa [[2c]], allora [[R]] diventa [[c]].",
                "I cateti non servono quando l'ipotenusa è già nota; la formula usa solo [[c]].",
                "Tutti e tre i vertici sono equidistanti dal circocentro, con [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori comuni nel calcolo del circumraggio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Inserire un cateto invece dell'ipotenusa: dimezzare un cateto dà metà di un cateto, non il circumraggio. In un triangolo 6-8-10, dimezzare 6 cm dà 3 cm, mentre il vero circumraggio è 5 cm.",
                "Dimenticare di dividere per due: riportare l'ipotenusa come risposta dà il diametro, non il raggio. Con [[c = 10]] cm, la risposta è 5 cm, non 10 cm.",
                "Trattare l'ipotenusa come il raggio: questo è lo stesso errore visto dall'altra parte. L'ipotenusa copre l'intera larghezza del cerchio, quindi è il diametro, e il raggio è la sua metà.",
                "Confondere il circumraggio con l'inraggio: l'inraggio di un triangolo 6-8-10 è 2 cm, mentre il circumraggio è 5 cm. I due cerchi sono diversi, e anche le loro formule sono diverse.",
                "Confondere il circocentro con il vertice dell'angolo retto: il circocentro è il punto medio dell'ipotenusa, non il vertice C. Il vertice C è un punto sul cerchio, a distanza [[R]] dal centro.",
                "Pensare che il centro sia sempre dentro un triangolo: in un triangolo rettangolo il circocentro si trova sull'ipotenusa, e in un triangolo ottusangolo si trova fuori. ",
                "Usare la formula su un triangolo qualsiasi: [[R = \\frac{c}{2}]] vale solo per i triangoli rettangoli. Per un triangolo generico, usa [[R = \\frac{abc}{4A}]], dove [[A]] è l'area.",
                "Mescolare le unità di misura: un'ipotenusa in metri e una risposta riportata in centimetri differiscono di un fattore 100. Converti prima, poi dimezza.",
                "Usare valori di ipotenusa pari a zero o negativi: una lunghezza non può essere zero o negativa in un triangolo reale. Un input pari a zero o negativo significa che la misura è sbagliata.",
                "Confondere diametro e raggio: il diametro è il doppio del raggio. Se la tua risposta è il doppio del valore atteso, probabilmente hai riportato [[D]] invece di [[R]].",
                "Pensare che la circonferenza circoscritta tocchi tutti e tre i lati: la circonferenza circoscritta passa per i vertici e tocca il triangolo solo in quei tre punti. Il cerchio che tocca i lati è la circonferenza inscritta.",
                "Dimenticare che il cerchio passa per tutti e tre i vertici: tutti e tre devono trovarsi su di esso, ed è esattamente ciò che garantisce [[OA = OB = OC]].",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni pratiche del circumraggio",
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sul circumraggio verificano se gli studenti sanno individuare l'ipotenusa e applicare [[R = \\frac{c}{2}]] invece di ricorrere a una formula più complicata. Anche gli esercizi di costruzione di cerchi usano la stessa idea: dato un triangolo rettangolo, disegna la sua circonferenza circoscritta dimezzando l'ipotenusa e impostando il compasso su quel raggio.",
            },
            {
              "kind": "p",
              "text": "Il disegno tecnico usa la relazione quando un triangolo rettangolo deve essere inserito in una cornice circolare o quando un arco circolare deve passare per tre punti dati. La modellazione geometrica e la geometria analitica usano lo stesso fatto per collocare il circocentro di un triangolo nel punto medio della sua ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Gli insegnanti usano l'argomento come lezione ponte tra triangoli e cerchi, perché è uno dei primi punti in cui le due materie si incontrano. Il teorema di Talete, la proprietà del punto medio e la relazione tra raggio e diametro compaiono tutti in un'unica immagine, quindi il circumraggio è un modo compatto per ripassarli insieme.",
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
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 26]] cm. Trova il circumraggio [[R]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Ipotenusa decimale",
            },
            {
              "kind": "p",
              "text": "Dato [[c = 9.4]] m, trova il circumraggio [[R]] in metri.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Misura frazionaria",
            },
            {
              "kind": "p",
              "text": "Dato [[c = \\frac{9}{4}]] ft, trova [[R]] come frazione, poi come decimale.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversione di unità",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha ipotenusa [[c = 240]] cm. Trova il circumraggio in metri.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova l'ipotenusa dai due cateti",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti [[a = 9]] cm e [[b = 12]] cm. Trova l'ipotenusa, poi il circumraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Circumraggio o inraggio?",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti di 5 cm e 12 cm e ipotenusa di 13 cm. Trova sia il circumraggio [[R]] sia l'inraggio [[r]], e indica a quale cerchio appartiene ciascuno.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[R = \\frac{26}{2} = 13]] cm. Verifica: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[R = \\frac{9.4}{2} = 4.7]] m. Verifica: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, cioè 1.125 ft. Dividere per 2 raddoppia il denominatore da 4 a 8.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[R = \\frac{240}{2} = 120]] cm, e 120 cm equivalgono a 1.2 m, poiché 100 cm sono 1 m.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, poi [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: Il circumraggio appartiene alla circonferenza circoscritta, [[R = \\frac{13}{2} = 6.5]] cm, e l'inraggio appartiene alla circonferenza inscritta, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. La circonferenza circoscritta passa per i vertici; la circonferenza inscritta tocca i lati.",
            },
          ],
        },
      },
      "relatedHeading": "Scopri i calcolatori correlati per il triangolo rettangolo",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un compito specifico del triangolo rettangolo, quindi scegli lo strumento che corrisponde alla misura che devi trovare.",
      "relatedItems": [
        "Calcolatore del raggio di un triangolo rettangolo",
        "Calcolatore dell'inraggio di un triangolo rettangolo",
        "Calcolatore dei lati di un triangolo rettangolo",
        "Calcolatore dell'area di un triangolo rettangolo",
        "Calcolatore del teorema di Pitagora",
      ],
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Qual è la formula del circumraggio di un triangolo rettangolo?",
          "answer": "La formula è [[R = \\frac{c}{2}]], dove [[R]] è il circumraggio e [[c]] è l'ipotenusa. Individua il lato opposto all'angolo retto, poi dividi la sua lunghezza per due. Per esempio, un'ipotenusa di 10 cm dà un circumraggio di 5 cm.",
        },
        {
          "question": "Perché l'ipotenusa è il diametro della circonferenza circoscritta?",
          "answer": "Il punto medio dell'ipotenusa è equidistante da tutti e tre i vertici, quindi è il circocentro. L'ipotenusa passa per quel centro con entrambe le estremità sul cerchio, che è la definizione di diametro. Dimezzarla dà quindi il raggio.",
        },
        {
          "question": "Dove si trova il circocentro di un triangolo rettangolo?",
          "answer": "Il circocentro si trova nel punto medio dell'ipotenusa, sul lato più lungo del triangolo. È equidistante da tutti e tre i vertici, con [[AO = BO = CO = R]]. Non è il vertice dell'angolo retto, che è un punto sul cerchio.",
        },
        {
          "question": "Che cosa significa circumraggio?",
          "answer": "Circumraggio significa il raggio della circonferenza circoscritta, il cerchio che passa per tutti e tre i vertici del triangolo. È la distanza dal circocentro a un qualsiasi vertice. In un triangolo rettangolo è uguale alla metà dell'ipotenusa.",
        },
        {
          "question": "Mi servono entrambi i cateti per calcolare il circumraggio?",
          "answer": "No. La sola ipotenusa basta, perché [[R = \\frac{c}{2}]]. I cateti servono solo quando l'ipotenusa è sconosciuta, nel qual caso trovala prima con [[c = \\sqrt{a^2 + b^2}]] e poi dimezzala. Per questo il calcolatore chiede un solo valore, e questo mantiene ogni calcolo breve e semplice.",
        },
        {
          "question": "Il circumraggio è la metà dell'ipotenusa?",
          "answer": "Sì, sempre, per un triangolo rettangolo. L'ipotenusa è il diametro della circonferenza circoscritta, e un raggio è la metà di un diametro, quindi [[R = \\frac{c}{2}]]. Raddoppiare il circumraggio restituisce sempre l'ipotenusa. Per esempio, un'ipotenusa di 14 cm dà un circumraggio di 7 cm, e raddoppiare 7 cm restituisce 14 cm.",
        },
        {
          "question": "Il circumraggio è uguale all'inraggio?",
          "answer": "No. Il circumraggio è il raggio del cerchio che passa per i vertici, [[R = \\frac{c}{2}]], mentre l'inraggio è il raggio del cerchio dentro il triangolo che tocca i suoi lati, [[r = \\frac{a + b - c}{2}]]. In un triangolo 6-8-10 sono 5 cm e 2 cm.",
        },
        {
          "question": "Il circocentro può trovarsi fuori da un triangolo?",
          "answer": "Sì, per un triangolo ottusangolo il circocentro si trova fuori. Per un triangolo acutangolo si trova dentro. Un triangolo rettangolo è il caso limite: il suo circocentro si trova sull'ipotenusa, esattamente nel suo punto medio. Quindi il centro non è mai dentro la regione triangolare di un triangolo rettangolo, ma non è mai nemmeno fuori dal triangolo.",
        },
        {
          "question": "In che modo il teorema di Talete è legato al circumraggio?",
          "answer": "Il teorema di Talete dice che un angolo sotteso da un diametro è un angolo retto, e il suo viceversa dice che l'ipotenusa di un triangolo rettangolo è un diametro. Questo rende il punto medio dell'ipotenusa il centro e la metà dell'ipotenusa il raggio.",
        },
        {
          "question": "Posso trovare il circumraggio usando i due cateti?",
          "answer": "Sì. Trova prima l'ipotenusa con [[c = \\sqrt{a^2 + b^2}]], poi dimezzala: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Per i cateti di 6 cm e 8 cm, l'ipotenusa è 10 cm e il circumraggio è 5 cm. Usa gli stessi due passaggi per qualsiasi coppia di cateti, e verifica il risultato con il test del diametro.",
        },
        {
          "question": "Che cosa succede se l'ipotenusa raddoppia?",
          "answer": "Anche il circumraggio raddoppia, perché [[R]] è la metà di [[c]]. Se un'ipotenusa di 10 cm dà [[R = 5]] cm, un'ipotenusa di 20 cm dà [[R = 10]] cm. La relazione è direttamente proporzionale, quindi triplicare l'ipotenusa triplica anche il circumraggio.",
        },
        {
          "question": "La circonferenza circoscritta passa per tutti e tre i vertici?",
          "answer": "Sì. Questa è la definizione di circonferenza circoscritta: un cerchio che passa per ogni vertice del triangolo. In un triangolo rettangolo, il centro è il punto medio dell'ipotenusa e ciascun vertice si trova esattamente a distanza [[R]] da esso.",
        },
      ],
    },
};
