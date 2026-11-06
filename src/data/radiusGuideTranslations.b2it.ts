// radiusGuideTranslations.bit.ts: Right Triangle Radius
// Guide (Page 37 of 45) translation.
export const RADIUS_B2_IT = {
  "it": {
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "answer": "La formula è [[r = \\frac{a + b - c}{2}]], dove a e b sono i due cateti e c è l'ipotenusa. Somma i cateti, sottrai l'ipotenusa e dividi per 2. Per un triangolo 6-8-10, [[r = \\frac{6 + 8 - 10}{2} = 2]] cm.",
          "question": "Qual è la formula dell'inraggio di un triangolo rettangolo?",
        },
        {
          "answer": "La formula è [[R = \\frac{c}{2}]], dove c è l'ipotenusa completa. L'ipotenusa è il diametro della circonferenza circoscritta, quindi metà di essa è il raggio. Per un'ipotenusa di 10 cm, [[R = \\frac{10}{2} = 5]] cm.",
          "question": "Qual è la formula del circumraggio di un triangolo rettangolo?",
        },
        {
          "answer": "L'inraggio è il raggio della circonferenza inscritta, il cerchio dentro il triangolo che tocca tutti e tre i lati. Il circumraggio è il raggio della circonferenza circoscritta, il cerchio intorno al triangolo che passa per tutti e tre i vertici. In un triangolo 6-8-10, [[r = 2]] cm e [[R = 5]] cm.",
          "question": "Qual è la differenza tra inraggio e circumraggio?",
        },
        {
          "answer": "Servono tutti e tre i lati: il cateto a, il cateto b e l'ipotenusa c. La formula [[r = \\frac{a + b - c}{2}]] usa ciascun lato una volta, quindi nessun lato può essere tralasciato. Le tre lunghezze devono anche formare un triangolo rettangolo valido.",
          "question": "Quali misure servono per calcolare l'inraggio?",
        },
        {
          "answer": "In un triangolo rettangolo, l'ipotenusa è il diametro della circonferenza circoscritta, quindi il circumraggio è semplicemente metà dell'ipotenusa, [[R = \\frac{c}{2}]]. I cateti non entrano affatto nel calcolo, ed è per questo che basta una sola misura.",
          "question": "Perché il circumraggio richiede solo l'ipotenusa?",
        },
        {
          "answer": "L'incentro si trova dentro il triangolo, nel punto in cui si incontrano le tre bisettrici degli angoli. È il centro della circonferenza inscritta e si trova alla stessa distanza, l'inraggio r, da ciascuno dei tre lati.",
          "question": "Dove si trova l'incentro?",
        },
        {
          "answer": "In un triangolo rettangolo, il circocentro si trova nel punto medio dell'ipotenusa. Quel punto è alla stessa distanza, il circumraggio R, da tutti e tre i vertici, ed è per questo che la circonferenza circoscritta passa per ciascuno di essi.",
          "question": "Dove si trova il circocentro?",
        },
        {
          "answer": "No. Per un triangolo rettangolo valido e non degenere, il circumraggio è sempre maggiore dell'inraggio. Nel triangolo 6-8-10, [[R = 5]] cm è più del doppio di [[r = 2]] cm. Se i tuoi numeri dicono il contrario, controlla gli input e le etichette.",
          "question": "L'inraggio può essere maggiore del circumraggio?",
        },
        {
          "answer": "Sì, ma solo per i triangoli rettangoli. L'angolo in una semicirconferenza è un angolo retto, quindi il vertice dell'angolo retto si trova sul cerchio con l'ipotenusa come diametro. Questo è il teorema di Talete, e non vale per i triangoli che non sono rettangoli.",
          "question": "L'ipotenusa è il diametro della circonferenza circoscritta?",
        },
        {
          "answer": "Ricalcola [[r = \\frac{a + b - c}{2}]] dai lati originali, poi controlla la stessa risposta con [[r = \\frac{Area}{s}]], usando [[Area = \\frac{ab}{2}]] e [[s = \\frac{a + b + c}{2}]]. Entrambi i percorsi devono dare lo stesso valore.",
          "question": "Come posso verificare il risultato dell'inraggio?",
        },
        {
          "answer": "Sì. Trova prima l'area con [[Area = \\frac{ab}{2}]] e il semiperimetro con [[s = \\frac{a + b + c}{2}]], poi dividi: [[r = \\frac{Area}{s}]]. Per il triangolo 6-8-10, [[r = \\frac{24}{12} = 2]] cm.",
          "question": "Posso calcolare l'inraggio usando area e semiperimetro?",
        },
        {
          "answer": "Misurano cerchi diversi. L'inraggio deriva da un cerchio stretto dentro il triangolo, quindi dipende dal modo in cui i tre lati si chiudono intorno a esso. Il circumraggio deriva da un cerchio passante per i tre vertici, e per un triangolo rettangolo la sola ipotenusa fissa quel cerchio come suo diametro.",
          "question": "Perché la formula dell'inraggio è diversa da quella del circumraggio?",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per triangoli rettangoli",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un compito specifico sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alle misure che conosci già.",
      "relatedItems": [
        "Calcolatore dell'inraggio del triangolo rettangolo",
        "Calcolatore del circumraggio del triangolo rettangolo",
        "Calcolatore dell'area del triangolo rettangolo",
        "Calcolatore dei lati del triangolo rettangolo",
        "Calcolatore del perimetro e del semiperimetro del triangolo rettangolo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha due cerchi importanti associati a esso: la circonferenza inscritta, che si trova all'interno del triangolo e tocca tutti e tre i lati, e la circonferenza circoscritta, che si trova intorno al triangolo e passa per tutti e tre i vertici. Questo calcolatore trova il raggio di ciascun cerchio, usando una modalità separata per ciascuno.",
            },
            {
              "kind": "p",
              "text": "L'inraggio è [[r = \\frac{a + b - c}{2}]], dove a e b sono i cateti e c è l'ipotenusa. Il circumraggio è [[R = \\frac{c}{2}]], che richiede solo l'ipotenusa. Le formule sono diverse perché descrivono cerchi diversi.",
            },
            {
              "kind": "p",
              "text": "Prendi un triangolo rettangolo 6-8-10 con [[a = 6]] cm, [[b = 8]] cm e [[c = 10]] cm. L'inraggio è [[r = \\frac{6 + 8 - 10}{2} = 2]] cm e il circumraggio è [[R = \\frac{10}{2} = 5]] cm. La circonferenza inscritta è un piccolo cerchio di raggio 2 cm racchiuso nel triangolo, mentre la circonferenza circoscritta è un cerchio molto più grande di raggio 5 cm che passa per i vertici.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore tiene separate le due modalità perché richiedono misure diverse: la modalità dell'inraggio ha bisogno di tutti e tre i lati, mentre la modalità del circumraggio ha bisogno solo dell'ipotenusa. Scegli la modalità che corrisponde alle misure che hai.",
            },
          ],
          "h2": "Calcolatore del raggio del triangolo rettangolo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Questa pagina offre due modalità di calcolo. La modalità 1 trova l'inraggio, il raggio del cerchio dentro il triangolo. La modalità 2 trova il circumraggio, il raggio del cerchio intorno al triangolo.",
            },
            {
              "kind": "h3",
              "text": "Modalità 1: Calcolatore dell'inraggio",
            },
            {
              "kind": "p",
              "text": "La modalità dell'inraggio richiede tre input: il cateto a, il cateto b e l'ipotenusa c. Usa [[r = \\frac{a + b - c}{2}]]. Sceglila quando conosci tutti e tre i lati e vuoi il raggio della circonferenza inscritta.",
            },
            {
              "kind": "h3",
              "text": "Modalità 2: Calcolatore del circumraggio",
            },
            {
              "kind": "p",
              "text": "La modalità del circumraggio richiede un solo input: l'ipotenusa c. Usa [[R = \\frac{c}{2}]]. Sceglila quando conosci l'ipotenusa e vuoi il raggio della circonferenza circoscritta.",
            },
            {
              "kind": "p",
              "text": "Prima di calcolare, controlla che tutte le misure usino la stessa unità, quindi converti prima se non è così. Poi seleziona la modalità, inserisci le misure, fai clic sul pulsante Calcola per quella modalità e leggi il risultato nell'unità inserita. Usa Reimposta per cancellare i campi prima di un nuovo problema.",
            },
            {
              "kind": "p",
              "text": "La pagina non calcola direttamente angoli, lati mancanti, area o perimetro; i calcolatori correlati in fondo alla pagina gestiscono questi casi. Se conosci solo l'ipotenusa, puoi trovare il circumraggio, ma non l'inraggio.",
            },
          ],
          "h2": "Calcolare l'inraggio o il circumraggio di un triangolo rettangolo",
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'inraggio è il raggio della circonferenza inscritta, il cerchio più grande che sta dentro un triangolo. Tocca ciascuno dei tre lati in esattamente un punto, ed è la distanza dal centro del cerchio a ciascun lato, misurata ad angolo retto rispetto al lato.",
            },
            {
              "kind": "p",
              "text": "Il centro della circonferenza inscritta si chiama incentro, indicato con I, il punto in cui si incontrano le tre bisettrici degli angoli. Poiché si trova su ogni bisettrice, è alla stessa distanza da tutti e tre i lati, e quella distanza comune è l'inraggio r, misurato perpendicolarmente a ciascun lato.",
            },
            {
              "kind": "p",
              "text": "In un triangolo rettangolo, l'incentro si trova sempre dentro il triangolo, vicino all'angolo retto. Per il triangolo 6-8-10, l'inraggio è [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, quindi la circonferenza inscritta è un cerchio di raggio 2 cm con centro in I.",
            },
            {
              "kind": "p",
              "text": "Un errore comune è misurare l'inraggio dall'incentro a un vertice. Quella distanza è più lunga di r e non è un raggio della circonferenza inscritta: l'inraggio finisce sempre su un lato, mai su un vertice.",
            },
          ],
          "h2": "Che cos'è l'inraggio di un triangolo rettangolo?",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, circonferenza inscritta all'interno che tocca tutti e tre i lati, incentro I e inraggio r mostrato perpendicolare a un lato",
            "caption": "La circonferenza inscritta tocca tutti e tre i lati dall'interno, con centro I e raggio r = 2 cm nel triangolo 6-8-10.",
            "src": "radius-incircle.svg",
          },
        },
        "sec-what-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il circumraggio è il raggio della circonferenza circoscritta, il cerchio che passa per tutti e tre i vertici di un triangolo. Ogni vertice giace esattamente sul cerchio, quindi la distanza dal centro a qualsiasi vertice è la stessa, e quella distanza è il circumraggio R.",
            },
            {
              "kind": "p",
              "text": "Il centro della circonferenza circoscritta si chiama circocentro, indicato con O, il punto in cui si incontrano gli assi dei tre lati. Stando su ciascun asse, O è alla stessa distanza da tutti e tre i vertici.",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha un circocentro speciale: si trova nel punto medio dell'ipotenusa. L'ipotenusa è il diametro della circonferenza circoscritta, quindi metà di essa è il circumraggio: [[R = \\frac{c}{2}]]. Per il triangolo 6-8-10, [[R = \\frac{10}{2} = 5]] cm, e il circocentro O si trova nel punto medio dell'ipotenusa di 10 cm.",
            },
            {
              "kind": "p",
              "text": "Il circumraggio si misura dal circocentro a qualsiasi vertice, mai a un lato. In un triangolo rettangolo, anche il vertice dell'angolo retto giace sulla circonferenza circoscritta: il cerchio intorno al triangolo passa anche per il vertice con l'angolo retto.",
            },
          ],
          "h2": "Che cos'è il circumraggio di un triangolo rettangolo?",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, circonferenza circoscritta che passa per tutti e tre i vertici, circocentro O nel punto medio dell'ipotenusa AB e circumraggio R",
            "caption": "La circonferenza circoscritta passa per tutti e tre i vertici, con centro O nel punto medio dell'ipotenusa e R = 5 cm.",
            "src": "radius-circumcircle.svg",
          },
        },
        "sec-difference": {
          "blocks": [
            {
              "kind": "p",
              "text": "I due raggi descrivono due cerchi diversi. La circonferenza inscritta è stretta dentro il triangolo e tocca i lati, mentre la circonferenza circoscritta avvolge il triangolo e passa per i vertici. Un cerchio è piccolo e dentro, l'altro è grande e fuori, e i loro centri si trovano in punti diversi.",
            },
            {
              "kind": "p",
              "text": "Anche i centri sono diversi. L'incentro è il punto d'incontro delle bisettrici degli angoli e si trova dentro il triangolo, vicino all'angolo retto. Il circocentro è il punto d'incontro degli assi dei lati e si trova nel punto medio dell'ipotenusa, sul bordo del triangolo.",
            },
            {
              "kind": "p",
              "text": "Anche gli input sono diversi: l'inraggio richiede tutti e tre i lati, perché la circonferenza inscritta è determinata dal modo in cui i tre lati si chiudono intorno a essa, mentre il circumraggio richiede solo l'ipotenusa, perché l'ipotenusa da sola fissa la circonferenza circoscritta come suo diametro. Nel triangolo 6-8-10, [[r = 2]] cm e [[R = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "La tabella qui sotto mette il confronto in un unico posto. Leggi ogni riga per vedere come la stessa caratteristica si presenta per ciascun cerchio, e usala come controllo rapido ogni volta che un problema menziona un raggio senza dire quale sia.",
            },
          ],
          "h2": "Differenza tra inraggio e circumraggio",
          "image": {
            "alt": "Triangolo rettangolo 6-8-10 che mostra la piccola circonferenza inscritta all'interno con raggio 2 cm e la più grande circonferenza circoscritta intorno con raggio 5 cm, con incentro I e circocentro O etichettati",
            "caption": "Stesso triangolo, due cerchi: la circonferenza inscritta (r = 2 cm) dentro e la circonferenza circoscritta (R = 5 cm) intorno.",
            "src": "radius-vs.svg",
          },
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
                "Tangente a tutti e tre i lati",
                "Passa per tutti e tre i vertici",
              ],
              [
                "Centro",
                "Incentro",
                "Circocentro",
              ],
              [
                "Formula",
                "(a + b - c) / 2",
                "c / 2",
              ],
              [
                "Input richiesti",
                "a, b, c",
                "c",
              ],
              [
                "Misura",
                "Dal centro a un lato",
                "Dal centro a un vertice",
              ],
            ],
          },
        },
        "sec-inradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formula dell'inraggio per un triangolo rettangolo è:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a + b - c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui a è il primo cateto, b è il secondo cateto e c è l'ipotenusa, il lato opposto all'angolo retto. La formula richiede tutti e tre i lati, perché la circonferenza inscritta tocca tutti e tre i lati e la sua dimensione dipende da tutti e tre. Tralasciare un lato rende la risposta priva di senso.",
            },
            {
              "kind": "p",
              "text": "Procedi passo passo con il triangolo 6-8-10. Somma i cateti: [[6 + 8 = 14]]. Sottrai l'ipotenusa: [[14 - 10 = 4]]. Dividi per 2: [[r = \\frac{4}{2} = 2]] cm. Il risultato porta la stessa unità dei lati, qui centimetri.",
            },
            {
              "kind": "p",
              "text": "Lo stesso valore si ottiene da un percorso con l'area: [[r = \\frac{Area}{s}]], dove [[s = \\frac{a + b + c}{2}]]. Per il triangolo 6-8-10, l'area è 24 cm² e il semiperimetro è 12 cm, quindi [[r = \\frac{24}{12} = 2]] cm. Il <a href=\"/right-triangle-area-calculator/\">calcolatore dell'area del triangolo rettangolo</a> trova l'area quando ti serve per questo controllo.",
            },
            {
              "kind": "p",
              "text": "Una terza forma, [[r = \\frac{ab}{a + b + c}]], è la stessa formula in un'altra veste. È la forma con l'area, con [[Area = \\frac{ab}{2}]] e [[s = \\frac{a + b + c}{2}]] sostituiti, e la sezione della dimostrazione qui sotto mostra come si semplifica di nuovo in [[r = \\frac{a + b - c}{2}]].",
            },
          ],
          "h2": "Formula dell'inraggio del triangolo rettangolo",
          "image": {
            "alt": "Triangolo rettangolo con cateti a e b e ipotenusa c etichettati, che mostra la formula dell'inraggio r uguale a a più b meno c diviso per 2",
            "caption": "Formula dell'inraggio: r = (a + b - c) / 2, usando tutti e tre i lati del triangolo.",
            "src": "radius-inradius-formula.svg",
          },
        },
        "sec-why-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "La dimostrazione parte dall'incentro I. Poiché I è alla stessa distanza r da tutti e tre i lati, il triangolo può essere diviso in tre triangoli più piccoli, ciascuno con I come vertice e un lato del triangolo grande come base.",
            },
            {
              "kind": "p",
              "text": "Ogni triangolo piccolo ha altezza r, quindi la sua area è metà della base per r. Le tre aree sono [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] e [[\\frac{rc}{2}]]. Sommandole si ottiene l'area dell'intero triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[Area = \\frac{ra}{2} + \\frac{rb}{2} + \\frac{rc}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Raccogliendo r a fattore comune si ottiene [[Area = \\frac{r(a + b + c)}{2}]]. Poiché il semiperimetro è [[s = \\frac{a + b + c}{2}]], questa diventa la relazione semplice:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Riordinando si ottiene [[r = \\frac{Area}{s}]]. Per un triangolo rettangolo, [[Area = \\frac{ab}{2}]], quindi [[r = \\frac{ab}{a + b + c}]]. Il teorema di Pitagora completa il lavoro: poiché [[a^2 + b^2 = c^2]], [[(a + b)^2 - c^2 = 2ab]], quindi [[\\frac{ab}{a + b + c} = \\frac{a + b - c}{2}]]. Entrambe le forme sono lo stesso fatto, visto da due lati.",
            },
          ],
          "h2": "Perché funziona la formula dell'inraggio?",
        },
        "sec-circumradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "La formula del circumraggio per un triangolo rettangolo è:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Qui R è il circumraggio e c è l'ipotenusa completa. La formula ha un solo input perché l'ipotenusa da sola determina la circonferenza circoscritta: è il diametro di quel cerchio, e un raggio è metà di un diametro.",
            },
            {
              "kind": "p",
              "text": "Il calcolo è il più breve di questa guida. Con [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. Il circocentro O si trova nel punto medio dell'ipotenusa, a 5 cm da ciascun vertice.",
            },
            {
              "kind": "p",
              "text": "La forma con il diametro dice la stessa cosa al contrario: [[c = 2R]]. Se conosci il circumraggio e ti serve l'ipotenusa, raddoppialo. Un circumraggio di 5 cm significa un'ipotenusa di 10 cm, e un circumraggio di 6.5 cm significa un'ipotenusa di 13 cm.",
            },
            {
              "kind": "p",
              "text": "Questa scorciatoia appartiene solo ai triangoli rettangoli. In un triangolo senza angolo retto, il circumraggio dipende da tutti e tre i lati, quindi non portare mai [[R = \\frac{c}{2}]] in uno di essi. Il <a href=\"/right-triangle-circumradius-calculator/\">calcolatore del circumraggio del triangolo rettangolo</a> tratta questo calcolo in tutti i dettagli.",
            },
          ],
          "h2": "Formula del circumraggio del triangolo rettangolo",
          "image": {
            "alt": "Triangolo rettangolo con l'ipotenusa c mostrata come diametro della circonferenza circoscritta, il suo punto medio O segnato e la formula R uguale a c diviso per 2",
            "caption": "Formula del circumraggio: R = c / 2, con l'ipotenusa come diametro della circonferenza circoscritta.",
            "src": "radius-circumradius-formula.svg",
          },
        },
        "sec-why-diameter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prendi il triangolo ABC con l'angolo retto in C, e sia O il punto medio dell'ipotenusa AB. L'affermazione è che O è il circocentro, alla stessa distanza da A, B e C. Per costruzione, [[AO = BO]], poiché O è il punto medio, quindi l'unica distanza da controllare è CO.",
            },
            {
              "kind": "p",
              "text": "Traccia la mediana da C al punto medio O. In un triangolo rettangolo questa mediana è esattamente metà dell'ipotenusa, quindi [[CO = \\frac{AB}{2}]], il che rende [[AO = BO = CO]]. Quindi O è equidistante da tutti e tre i vertici ed è il circocentro.",
            },
            {
              "kind": "p",
              "text": "Poiché AB passa per O ed entrambi i suoi estremi giacciono sulla circonferenza circoscritta, AB è un diametro di quel cerchio. Un diametro è il doppio di un raggio, quindi [[AB = 2R]], che è la stessa cosa di [[R = \\frac{c}{2}]]. L'ipotenusa guadagna il suo ruolo di diametro grazie all'angolo retto, non solo grazie alla sua lunghezza.",
            },
            {
              "kind": "p",
              "text": "Il teorema di Talete afferma la stessa idea dall'altra direzione: qualsiasi angolo inscritto in una semicirconferenza è un angolo retto, quindi l'ipotenusa di un triangolo rettangolo deve essere il diametro del cerchio passante per i suoi vertici. Il diagramma qui sotto mostra entrambi i centri insieme: l'incentro I dentro il triangolo e il circocentro O nel punto medio dell'ipotenusa.",
            },
          ],
          "h2": "Perché l'ipotenusa è il diametro della circonferenza circoscritta?",
          "image": {
            "alt": "Triangolo rettangolo che mostra l'incentro I dentro il triangolo dove si incontrano le bisettrici degli angoli e il circocentro O nel punto medio dell'ipotenusa dove si incontrano gli assi dei lati",
            "caption": "Due centri diversi: I è il punto d'incontro delle bisettrici degli angoli, O è il punto d'incontro degli assi dei lati.",
            "src": "radius-centers.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segui l'elenco per la modalità che ti serve. Entrambe iniziano con l'etichettatura corretta del triangolo, perché un cateto e un'ipotenusa scambiati sono la fonte più comune di una risposta sbagliata.",
            },
            {
              "kind": "h3",
              "text": "Uso della modalità Inraggio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica il cateto a, il primo lato che forma l'angolo retto.",
                "Identifica il cateto b, il secondo lato che forma l'angolo retto.",
                "Identifica l'ipotenusa c, il lato opposto all'angolo retto e il lato più lungo.",
                "Seleziona la modalità Calcolatore dell'inraggio.",
                "Inserisci tutti e tre i lati nella stessa unità.",
                "Seleziona l'unità che corrisponde alle tue misure.",
                "Fai clic su Calcola inraggio r.",
                "Controlla il risultato e verifica che sia positivo e minore di entrambi i cateti.",
                "Usa Reimposta quando inizi un altro calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "Prima di fare clic su Calcola, conferma che le tre lunghezze possano formare un triangolo rettangolo: l'ipotenusa deve essere più lunga di ciascun cateto, e [[a^2 + b^2]] deve essere uguale a [[c^2]].",
            },
            {
              "kind": "h3",
              "text": "Uso della modalità Circumraggio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifica l'ipotenusa c, il lato opposto all'angolo retto.",
                "Seleziona la modalità Calcolatore del circumraggio.",
                "Inserisci c nell'unità che preferisci.",
                "Seleziona l'unità che corrisponde alla tua misura.",
                "Fai clic su Calcola circumraggio R.",
                "Controlla il risultato, che dovrebbe essere esattamente metà dell'ipotenusa.",
                "Usa Reimposta per un nuovo calcolo.",
              ],
            },
            {
              "kind": "p",
              "text": "La modalità del circumraggio richiede una sola misura perché l'ipotenusa è il diametro della circonferenza circoscritta. Non inserire qui un cateto: è più corto dell'ipotenusa, quindi il risultato sarebbe metà della lunghezza sbagliata.",
            },
          ],
          "h2": "Come usare il calcolatore del raggio del triangolo rettangolo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Usa il triangolo rettangolo 6-8-10 con [[a = 6]] cm, [[b = 8]] cm e [[c = 10]] cm. Le due parti qui sotto trovano ciascun raggio a turno, poi confrontano i risultati.",
            },
            {
              "kind": "h3",
              "text": "Parte 1: Calcolare l'inraggio",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[r = \\frac{a + b - c}{2}]].",
                "Sostituisci i valori: [[r = \\frac{6 + 8 - 10}{2}]].",
                "Somma e sottrai: [[r = \\frac{4}{2}]].",
                "Dividi: [[r = 2]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La circonferenza inscritta ha un raggio di 2 cm. Il suo centro I si trova a 2 cm da ciascun lato, e il cerchio tocca i due cateti e l'ipotenusa dall'interno del triangolo.",
            },
            {
              "kind": "h3",
              "text": "Parte 2: Calcolare il circumraggio",
            },
            {
              "kind": "steps",
              "steps": [
                "Scrivi la formula: [[R = \\frac{c}{2}]].",
                "Sostituisci il valore: [[R = \\frac{10}{2}]].",
                "Dividi: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "La circonferenza circoscritta ha un raggio di 5 cm. Il suo centro O è il punto medio dell'ipotenusa, e il cerchio passa per tutti e tre i vertici. Confrontando i due risultati, il circumraggio è due volte e mezzo l'inraggio, il che è normale: il cerchio intorno al triangolo è molto più grande del cerchio dentro di esso.",
            },
            {
              "kind": "p",
              "text": "Un rapido controllo incrociato: l'area è 24 cm² e il semiperimetro è 12 cm, quindi [[r = \\frac{24}{12} = 2]] cm, in accordo con la Parte 1, e [[2R = 2 \\times 5 = 10]] cm, in accordo con c.",
            },
          ],
          "h2": "Esempio passo passo: calcolare entrambi i raggi",
          "image": {
            "alt": "Triangolo rettangolo 6-8-10 con lati 6, 8 e 10 cm, inraggio 2 cm, circumraggio 5 cm, area 24 centimetri quadrati e semiperimetro 12 cm",
            "caption": "Esempio completo 6-8-10: a = 6, b = 8, c = 10, r = 2, R = 5, area 24 cm², s = 12 cm.",
            "src": "radius-complete-example.svg",
          },
        },
        "sec-examples-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio indica i valori dati, la sostituzione e la risposta finale, e ogni esempio mantiene le unità coerenti dall'inizio alla fine. Tutti e sei i triangoli sono triangoli rettangoli validi, verificati con il teorema di Pitagora.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo base 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 3]] cm, [[b = 4]] cm e [[c = 5]] cm, [[r = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1]] cm. Controllo: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Triangolo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 5]] cm, [[b = 12]] cm e [[c = 13]] cm, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Controllo: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Triangolo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 8]] cm, [[b = 15]] cm e [[c = 17]] cm, [[r = \\frac{8 + 15 - 17}{2} = \\frac{6}{2} = 3]] cm. Controllo: [[8^2 + 15^2 = 64 + 225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 7.5]] cm, [[b = 10]] cm e [[c = 12.5]] cm, [[r = \\frac{7.5 + 10 - 12.5}{2} = \\frac{5}{2} = 2.5]] cm. Questo è il triangolo 6-8-10 scalato di 1.25, quindi anche il suo inraggio scala allo stesso modo. Controllo: [[7.5^2 + 10^2 = 56.25 + 100 = 156.25 = 12.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Misure più grandi",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 9]] m, [[b = 12]] m e [[c = 15]] m, [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] m. Questo è il triangolo 3-4-5 scalato di 3. Controllo: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Unità diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[a = 0.09]] m, [[b = 0.12]] m e [[c = 0.15]] m, converti prima in centimetri: 9 cm, 12 cm e 15 cm. Poi [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] cm. Controllo: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
          ],
          "h2": "Esempi svolti di calcolo dell'inraggio",
        },
        "sec-examples-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni esempio di circumraggio richiede solo l'ipotenusa, quindi ciascuno è una singola divisione per 2. La varietà viene dalle unità e dalla grandezza dei numeri, non dal metodo, che non cambia mai.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Ipotenusa 10 cm",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. Questo è il circumraggio del triangolo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Ipotenusa 13 cm",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Questo è il circumraggio del triangolo 5-12-13.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Ipotenusa 24 m",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Ipotenusa 7.5 cm",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Il controllo con il diametro funziona al contrario: [[2 \\times 3.75 = 7.5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Ipotenusa 180 mm",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm, cioè 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Ipotenusa 1.2 m",
            },
            {
              "kind": "p",
              "text": "Dati [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m, cioè 60 cm.",
            },
          ],
          "h2": "Esempi svolti di calcolo del circumraggio",
        },
        "sec-validity": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una risposta sul raggio vale quanto il triangolo che sta dietro di essa, quindi controlla le misure prima di calcolare. Per un triangolo rettangolo, i lati devono soddisfare il teorema di Pitagora:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa deve anche essere il lato più lungo, quindi [[c > a]] e [[c > b]]. Un cateto più lungo dell'ipotenusa non può appartenere a nessun triangolo rettangolo, e un'ipotenusa più corta di un cateto significa che i lati sono stati etichettati male.",
            },
            {
              "kind": "p",
              "text": "Controlla il triangolo 3-4-5: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]], quindi i lati concordano, e l'inraggio risulta positivo: [[r = \\frac{3 + 4 - 5}{2} = 1]] cm. Un triangolo rettangolo valido e non degenere dà sempre un inraggio positivo, perché i cateti insieme sono più lunghi dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Le misure non valide si tradiscono nella formula dell'inraggio. Se i cateti sommati sono meno dell'ipotenusa, r risulta negativo, il che non descrive nessun cerchio reale, e se sommati sono esattamente uguali all'ipotenusa, r è zero e il triangolo è piatto. In entrambi i casi gli input sono sbagliati. Il <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati del triangolo rettangolo</a> può ricostruire un lato mancante da misure valide.",
            },
          ],
          "h2": "Come controllare se le misure del triangolo rettangolo sono valide",
        },
        "sec-area-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'inraggio, l'area e il semiperimetro di un triangolo sono legati da un'unica relazione, che vale per qualsiasi triangolo, non solo per i triangoli rettangoli:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "L'area misura quanta superficie copre il triangolo, il semiperimetro misura metà del suo contorno, e il loro rapporto è il raggio del cerchio che sta dentro.",
            },
            {
              "kind": "p",
              "text": "Per un triangolo rettangolo, [[Area = \\frac{ab}{2}]], poiché i due cateti sono la base e l'altezza, e il circumraggio si collega tramite [[c = 2R]]. Nel triangolo 6-8-10, l'area è 24 cm², il semiperimetro è 12 cm, [[r = \\frac{24}{12} = 2]] cm e [[R = \\frac{10}{2} = 5]] cm. Anche l'altezza sull'ipotenusa segue lo stesso schema: [[h = \\frac{ab}{c}]], che qui dà [[h = \\frac{48}{10} = 4.8]] cm.",
            },
            {
              "kind": "p",
              "text": "I due raggi descrivono aspetti diversi dello stesso triangolo: l'inraggio dipende dall'area e dal perimetro insieme, mentre il circumraggio dipende dalla sola ipotenusa. Nessuno dei due può essere trovato dalla sola area.",
            },
          ],
          "h2": "Relazione tra inraggio, circumraggio e area del triangolo",
        },
        "sec-perimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il perimetro di un triangolo rettangolo è [[P = a + b + c]], e il semiperimetro è la sua metà, [[s = \\frac{a + b + c}{2}]]. L'inraggio può essere scritto come [[r = \\frac{Area}{s}]], quindi a parità di area, un semiperimetro più grande significa un inraggio più piccolo.",
            },
            {
              "kind": "p",
              "text": "Usa il triangolo 6-8-10: il perimetro è 24 cm, il semiperimetro è 12 cm, e con un'area di 24 cm², [[r = \\frac{24}{12} = 2]] cm. Confronta il triangolo 3-4-5: il suo perimetro è 12 cm, il suo semiperimetro è 6 cm, la sua area è 6 cm² e [[r = \\frac{6}{6} = 1]] cm.",
            },
            {
              "kind": "p",
              "text": "Il solo perimetro non può determinare l'inraggio: due triangoli possono condividere un perimetro di 24 cm e avere aree e inraggi diversi. Non confondere il semiperimetro con il perimetro: usare P dove serve s dimezzerebbe la risposta. Il <a href=\"/right-triangle-perimeter-semiperimeter-calculator/\">calcolatore del perimetro e del semiperimetro del triangolo rettangolo</a> trova entrambi i valori quando ti servono.",
            },
          ],
          "h2": "Relazione tra inraggio e perimetro",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove proprietà derivano direttamente dalle due formule. Ognuna serve anche come controllo di plausibilità per una nuova risposta.",
            },
            {
              "items": [
                "L'inraggio è sempre positivo in un triangolo valido e non degenere, perché i due cateti insieme sono più lunghi dell'ipotenusa, quindi [[a + b - c > 0]].",
                "L'incentro si trova dentro il triangolo, nel punto d'incontro delle tre bisettrici degli angoli.",
                "L'inraggio è perpendicolare a ciascun lato nel punto di tangenza, poiché un raggio verso una tangente la incontra ad angolo retto.",
                "Il circocentro si trova nel punto medio dell'ipotenusa in un triangolo rettangolo, e in nessun altro punto.",
                "Il circumraggio è esattamente metà dell'ipotenusa, [[R = \\frac{c}{2}]], in ogni triangolo rettangolo.",
                "La circonferenza circoscritta passa per tutti e tre i vertici, compreso il vertice dell'angolo retto.",
                "La circonferenza inscritta è tangente a tutti e tre i lati e tocca ciascun lato in esattamente un punto.",
                "Il circumraggio è maggiore dell'inraggio per un triangolo rettangolo non degenere, quindi [[R > r]] vale sempre qui.",
                "I due calcoli del raggio richiedono misure di input diverse: l'inraggio richiede tutti e tre i lati, mentre il circumraggio richiede solo l'ipotenusa.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "L'ultima proprietà è quella che gli studenti dimenticano più spesso: quando un problema fornisce solo l'ipotenusa, il circumraggio è a portata di mano e l'inraggio no.",
            },
          ],
          "h2": "Proprietà importanti dei raggi del triangolo rettangolo",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni errore qui sotto è seguito dalla sua correzione. La maggior parte dipende dallo scambio dei due cerchi, non dall'aritmetica.",
            },
            {
              "items": [
                "Confondere l'inraggio con il circumraggio: r appartiene al cerchio dentro il triangolo, R al cerchio intorno a esso. Nel triangolo 6-8-10, r è 2 cm e R è 5 cm.",
                "Usare [[R = \\frac{c}{2}]] per calcolare l'inraggio: dimezzare l'ipotenusa dà il circumraggio, non r.",
                "Usare [[r = \\frac{a + b - c}{2}]] per calcolare il circumraggio: dà un numero più piccolo che non ha nulla a che fare con il cerchio passante per i vertici.",
                "Inserire un cateto invece dell'ipotenusa nella modalità del circumraggio: un cateto è più corto dell'ipotenusa, quindi dimezzarlo dà metà della lunghezza sbagliata.",
                "Dimenticare di dividere per due nella formula dell'inraggio: [[a + b - c]] da solo è il doppio dell'inraggio. Nel triangolo 6-8-10, la somma è 4, ma r è 2.",
                "Dimenticare di dividere per due nella formula del circumraggio: l'intera ipotenusa è il diametro, non il raggio. Con c = 10 cm, R è 5 cm, non 10 cm.",
                "Inserire un triangolo non valido: se [[a^2 + b^2]] non è uguale a [[c^2]], i lati non formano nessun triangolo rettangolo.",
                "Mescolare le unità: centimetri per un lato e metri per un altro danno una sottrazione senza senso. Converti tutto in un'unica unità prima.",
                "Confondere l'incentro con il circocentro: l'incentro è dentro il triangolo, il circocentro è nel punto medio dell'ipotenusa.",
                "Supporre che la circonferenza inscritta passi per i vertici: la circonferenza inscritta tocca i lati, e i suoi punti non raggiungono mai un vertice.",
                "Supporre che la circonferenza circoscritta tocchi tutti e tre i lati: la circonferenza circoscritta passa per i vertici, e non tocca nessun lato lungo la sua lunghezza.",
                "Arrotondare troppo presto: mantieni la precisione completa fino all'ultimo passaggio, poiché arrotondare un valore intermedio sposta la risposta.",
                "Confondere il raggio con il diametro: il diametro è il doppio del raggio, quindi un circumraggio di 5 cm significa un diametro di 10 cm, che è l'ipotenusa.",
                "Usare la modalità sbagliata del calcolatore: la modalità dell'inraggio richiede tre input e la modalità del circumraggio ne richiede uno. Scegli la modalità che corrisponde alle misure che hai.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Se una risposta sembra sbagliata, controlla prima la modalità, poi le etichette, poi le unità. La maggior parte degli errori qui sopra sparisce una volta selezionata la modalità giusta e identificata correttamente l'ipotenusa.",
            },
          ],
          "h2": "Errori comuni nel calcolo di inraggio e circumraggio",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'uso più diretto è nei compiti di geometria e nel lavoro in classe, dove i problemi sui raggi verificano se gli studenti sanno distinguere la circonferenza inscritta dalla circonferenza circoscritta e scegliere la formula giusta per ciascuna. Gli insegnanti usano il triangolo 6-8-10 perché entrambi i raggi risultano numeri interi.",
            },
            {
              "kind": "p",
              "text": "La costruzione di cerchi è un secondo uso: disegnare una circonferenza inscritta richiede l'incentro e l'inraggio, mentre disegnare una circonferenza circoscritta richiede il circocentro e il circumraggio. Il disegno tecnico usa le stesse idee ogni volta che una forma triangolare deve essere dotata di un foro circolare o inserita in una cornice circolare.",
            },
            {
              "kind": "p",
              "text": "Le dimostrazioni matematiche usano entrambi i raggi come passaggi intermedi: [[Area = rs]] collega area, perimetro e inraggio in un'unica riga, e il teorema di Talete collega l'angolo retto con il diametro della circonferenza circoscritta. La modellazione geometrica usa le stesse relazioni per calcolare le distanze libere, per esempio quanto deve essere grande una parte circolare per racchiudere un pezzo triangolare.",
            },
            {
              "kind": "p",
              "text": "Una condizione limita ogni applicazione: queste formule descrivono triangoli e cerchi ideali, non misure approssimative sul campo, quindi il lavoro pratico di progettazione può richiedere ulteriori tolleranze oltre al solo raggio.",
            },
          ],
          "h2": "Applicazioni pratiche dei raggi del triangolo",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Prova tutti e sei i problemi su carta prima di leggere le risposte. Nessun valore ripete gli esempi svolti, e ogni triangolo è valido.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Trova l'inraggio",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha i cateti [[a = 5]] cm e [[b = 12]] cm e l'ipotenusa [[c = 13]] cm. Trova l'inraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Trova il circumraggio",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha l'ipotenusa [[c = 26]] cm. Trova il circumraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcola entrambi i raggi",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha [[a = 9]] cm, [[b = 40]] cm e [[c = 41]] cm. Trova sia l'inraggio sia il circumraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Verifica la validità del triangolo",
            },
            {
              "kind": "p",
              "text": "Si dice che un triangolo abbia i lati 7 cm, 24 cm e 25 cm. Controlla con il teorema di Pitagora che sia un triangolo rettangolo, poi trova il suo inraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Inraggio da area e semiperimetro",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha i cateti 8 cm e 15 cm. Trova la sua area e il suo semiperimetro, poi usa [[r = \\frac{Area}{s}]] per trovare l'inraggio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Identifica la modalità corretta",
            },
            {
              "kind": "p",
              "text": "Sai solo che l'ipotenusa di un triangolo rettangolo è 18 cm. Quale modalità del calcolatore puoi usare, quale raggio puoi trovare e qual è il suo valore? Spiega perché l'altro raggio non può essere trovato da questa sola informazione.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai problemi di pratica",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[R = \\frac{26}{2} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4]] cm e [[R = \\frac{41}{2} = 20.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[7^2 + 24^2 = 49 + 576 = 625 = 25^2]], quindi è un triangolo rettangolo, e [[r = \\frac{7 + 24 - 25}{2} = \\frac{6}{2} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[Area = \\frac{8 \\times 15}{2} = 60]] cm², [[c = 17]] cm, [[s = \\frac{8 + 15 + 17}{2} = 20]] cm, quindi [[r = \\frac{60}{20} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Risposta 6: Usa la modalità del circumraggio: [[R = \\frac{18}{2} = 9]] cm. L'inraggio non può essere trovato, perché [[r = \\frac{a + b - c}{2}]] richiede entrambi i cateti, e molti triangoli rettangoli condividono un'ipotenusa di 18 cm.",
            },
          ],
          "h2": "Problemi di pratica con risposte",
        },
      },
      "tocHeading": "Contenuti della guida",
      "tocItems": {
        "sec-applications": "Applicazioni pratiche dei raggi del triangolo",
        "sec-area-relation": "Relazione tra inraggio, circumraggio e area del triangolo",
        "sec-calculate": "Calcolare l'inraggio o il circumraggio di un triangolo rettangolo",
        "sec-circumradius-formula": "Formula del circumraggio del triangolo rettangolo",
        "sec-difference": "Differenza tra inraggio e circumraggio",
        "sec-examples-circumradius": "Esempi svolti di calcolo del circumraggio",
        "sec-examples-inradius": "Esempi svolti di calcolo dell'inraggio",
        "sec-faq": "Domande frequenti",
        "sec-how-to-use": "Come usare il calcolatore del raggio del triangolo rettangolo",
        "sec-intro": "Calcolatore del raggio del triangolo rettangolo",
        "sec-mistakes": "Errori comuni nel calcolo di inraggio e circumraggio",
        "sec-perimeter-relation": "Relazione tra inraggio e perimetro",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-properties": "Proprietà importanti dei raggi del triangolo rettangolo",
        "sec-related": "Esplora i calcolatori correlati per triangoli rettangoli",
        "sec-step-example": "Esempio passo passo: calcolare entrambi i raggi",
        "sec-validity": "Come controllare se le misure del triangolo rettangolo sono valide",
        "sec-what-circumradius": "Che cos'è il circumraggio di un triangolo rettangolo?",
        "sec-what-inradius": "Che cos'è l'inraggio di un triangolo rettangolo?",
        "sec-why-diameter": "Perché l'ipotenusa è il diametro della circonferenza circoscritta?",
        "sec-why-inradius": "Perché funziona la formula dell'inraggio?",
        "sec-inradius-formula": "Formula dell'inraggio del triangolo rettangolo",
      },
    },
};
