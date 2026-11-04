// altitudeFromProjectionsGuideTranslations.bit.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B2_IT = {
  "it": {
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcola l'altezza di un triangolo rettangolo dalle proiezioni",
        "sec-altitude": "Che cos'è l'altezza di un triangolo rettangolo?",
        "sec-projections": "Cosa sono le proiezioni in un triangolo rettangolo?",
        "sec-formula": "Formula dell'altezza del triangolo rettangolo dalle proiezioni",
        "sec-steps": "Come calcolare l'altezza dalle proiezioni passo dopo passo",
        "sec-diagram": "Diagramma dell'altezza del triangolo rettangolo spiegato",
        "sec-proof": "Perché funziona la formula dell'altezza? Dimostrazione con triangoli simili",
        "sec-examples": "Esempi svolti di altezza dalle proiezioni",
        "sec-verify": "Come verificare il calcolo dell'altezza",
        "sec-relationships": "Relazione tra altezza, ipotenusa e cateti del triangolo",
        "sec-geomean": "Teorema della media geometrica e altezza del triangolo rettangolo",
        "sec-special": "Casi speciali e proprietà importanti",
        "sec-mistakes": "Errori comuni nel trovare l'altezza dalle proiezioni",
        "sec-applications": "Applicazioni pratiche del teorema dell'altezza",
        "sec-practice": "Problemi di pratica con risposte",
        "sec-related": "Esplora i calcolatori correlati per il triangolo rettangolo",
        "sec-faq": "Domande frequenti",
        "sec-conclusion": "Una radice quadrata, piena comprensione",
      },
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Moltiplica le due proiezioni sull'ipotenusa, poi prendi la radice quadrata.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore dell'altezza del triangolo rettangolo dalle proiezioni trova l'altezza di un triangolo rettangolo a partire dalle due proiezioni, [[p]] e [[q]], che l'altezza taglia sull'ipotenusa. Non servono cateti né angoli. Inserisci la proiezione [[p]] e la proiezione [[q]] nella stessa unità di misura e il calcolatore restituisce l'altezza [[h]] con il teorema dell'altezza:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "La formula funziona perché tracciare l'altezza dal vertice dell'angolo retto crea due triangoli più piccoli che sono simili tra loro. La similitudine costringe l'altezza a essere la media geometrica delle due proiezioni. Come esempio rapido, se [[p=9\\text{ cm}]] e [[q=16\\text{ cm}]], moltiplica [[9]] per [[16]] per ottenere [[144]], poi prendi la radice quadrata per ottenere un'altezza di [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Digita il primo segmento di ipotenusa nel campo Proiezione [[p]] e il secondo nel campo Proiezione [[q]], mantenendo entrambi nella stessa unità. Premi Calcola per vedere l'altezza e Azzera cancella i campi per un nuovo problema. Il risultato riporta la stessa unità degli input. Se invece conosci i cateti del triangolo, prova il <a href=\"/right-triangle-altitude-calculator/\">calcolatore dell'altezza</a> pensato per quel caso.",
            },
          ],
          "h2": "Calcola l'altezza di un triangolo rettangolo dalle proiezioni",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'altezza di un triangolo rettangolo è il segmento perpendicolare tracciato dal vertice dell'angolo retto all'ipotenusa. La sua lunghezza misura la distanza più breve da quel vertice all'ipotenusa, perché una perpendicolare è sempre il percorso più breve da un punto a una retta.",
            },
            {
              "kind": "p",
              "text": "Disegna l'altezza e cadrà sull'ipotenusa in un punto chiamato piede dell'altezza, di solito indicato con D. Da D, l'altezza sale a esattamente 90 gradi fino a incontrare il vertice dell'angolo retto C. Questo incontro ad angolo retto è ciò che fa di CD l'altezza e non un semplice segmento.",
            },
            {
              "kind": "p",
              "text": "I principianti a volte confondono l'altezza con uno dei cateti. I cateti, AC e BC, si incontrano nell'angolo retto e formano i lati esterni del triangolo. L'altezza CD corre all'interno del triangolo dal vertice C al lato AB. È un terzo segmento distinto con una sua lunghezza [[h]], ed esiste solo una volta tracciata l'altezza.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa può fare da base perché qualsiasi lato può essere una base una volta tracciata l'altezza corrispondente, permettendo di scrivere l'area come metà del prodotto dell'ipotenusa per questa altezza. Tracciare l'altezza divide anche il triangolo in due triangoli rettangoli più piccoli, ACD e CBD, che portano le relazioni di similitudine alla base di ogni formula di questa pagina.",
            },
          ],
          "h2": "Che cos'è l'altezza di un triangolo rettangolo?",
        },
        "sec-projections": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quando l'altezza CD incontra l'ipotenusa AB, il piede D divide AB in due segmenti più piccoli: AD, chiamato [[p]], e DB, chiamato [[q]]. Questi due segmenti sono le proiezioni dei cateti sull'ipotenusa. Ognuno è l'ombra che un cateto proietta sull'ipotenusa quando la luce cade perpendicolarmente lungo l'altezza.",
            },
            {
              "kind": "p",
              "text": "La proiezione [[p]] si trova accanto al cateto AC e la proiezione [[q]] accanto al cateto BC. Poiché sono i due pezzi dell'ipotenusa, sommati danno esattamente:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[c]] è l'ipotenusa intera. Questa relazione di somma aiuta a controllare le risposte e a recuperare una proiezione mancante quando si conoscono l'ipotenusa e una proiezione. Se serve il calcolo inverso, trovare le proiezioni dalle lunghezze dei lati, il <a href=\"/right-triangle-projection-calculator/\">calcolatore delle proiezioni</a> gestisce quella direzione.",
            },
            {
              "kind": "p",
              "text": "Entrambe le proiezioni devono essere lunghezze positive. Un valore nullo o negativo non descrive alcun triangolo reale, solo una figura degenere. E le proiezioni non sono i cateti stessi: i cateti AC e BC si inclinano lateralmente, mentre [[p]] e [[q]] giacciono distesi lungo l'ipotenusa. Confondere le due cose è uno degli errori più comuni degli studenti.",
            },
          ],
          "h2": "Cosa sono le proiezioni in un triangolo rettangolo?",
          "table": {
            "headers": [
              "Misura",
              "Significato",
            ],
            "rows": [
              [
                "[[p]]",
                "Primo segmento di ipotenusa",
              ],
              [
                "[[q]]",
                "Secondo segmento di ipotenusa",
              ],
              [
                "[[h]]",
                "Altezza perpendicolare",
              ],
              [
                "[[c]]",
                "Ipotenusa completa",
              ],
              [
                "[[a]]",
                "Primo cateto del triangolo",
              ],
              [
                "[[b]]",
                "Secondo cateto del triangolo",
              ],
            ],
          },
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema dell'altezza afferma:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendendo la radice quadrata positiva di entrambi i membri si ottiene la formula operativa:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Ogni simbolo ha un significato fisso. La lettera [[h]] indica l'altezza relativa all'ipotenusa, la quantità cercata. Le lettere [[p]] e [[q]] indicano le due proiezioni sull'ipotenusa, le quantità da inserire. La moltiplicazione unisce le proiezioni e la radice quadrata annulla quel prodotto per restituire una lunghezza.",
            },
            {
              "kind": "p",
              "text": "La moltiplicazione compare perché la similitudine tra i due triangolini produce la proporzione [[\\frac{h}{p}=\\frac{q}{h}]]. Moltiplicando in croce quella proporzione si ottiene [[h^2=p\\times q]]. La radice quadrata compare perché [[h]] è una lunghezza e solo la radice positiva di [[h^2]] indica una distanza reale.",
            },
            {
              "kind": "p",
              "text": "Le unità meritano attenzione. Se [[p]] e [[q]] sono entrambe misurate in centimetri, il loro prodotto vive in centimetri quadrati, corretto per un passaggio intermedio di tipo area. Prendere la radice quadrata riporta i centimetri quadrati a semplici centimetri per l'altezza finale. Per questo i due input devono condividere la stessa unità: mescolare le unità corromperebbe il prodotto e la risposta. Un modo compatto per ricordare la formula è che l'altezza è la media geometrica delle due proiezioni, poiché la media geometrica di due numeri è la radice quadrata del loro prodotto.",
            },
          ],
          "h2": "Formula dell'altezza del triangolo rettangolo dalle proiezioni",
        },
        "sec-steps": {
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Individua le due proiezioni sull'ipotenusa. Cerca i segmenti in cui il piede dell'altezza divide l'ipotenusa e indica con [[p]] quello accanto al cateto AC e con [[q]] quello accanto al cateto BC.",
                "Verifica che entrambe le misure usino la stessa unità. Se una è in millimetri e l'altra in centimetri, convertine una prima di toccare la formula.",
                "Moltiplica [[p]] e [[q]]. Il prodotto [[h^2]] è un valore intermedio di tipo area, quindi la sua unità è il quadrato dell'unità di input.",
                "Prendi la radice quadrata positiva del prodotto. La radice negativa si scarta perché una lunghezza non può essere negativa.",
                "Scrivi la risposta finale con la sua unità. Un numero nudo invita a errori in seguito, soprattutto quando alimenta un calcolo più lungo.",
                "Controlla che la risposta sia ragionevole. L'altezza si trova sempre tra le due proiezioni e non può mai superare metà dell'ipotenusa.",
              ],
            },
            {
              "kind": "p",
              "text": "Ecco il metodo applicato a un esempio completo. Supponi [[p=4\\text{ cm}]] e [[q=9\\text{ cm}]]. Prima moltiplica: [[4\\times 9=36]], quindi [[h^2=36\\text{ cm}^2]]. Poi prendi la radice quadrata positiva:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è [[6\\text{ cm}]]. Come controllo di buon senso, [[6]] si trova tra le proiezioni [[4]] e [[9]], in linea con il comportamento della media geometrica descritto più avanti in questa guida.",
            },
          ],
          "h2": "Come calcolare l'altezza dalle proiezioni passo dopo passo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il triangolo ABC ha l'angolo retto in C. Da C, l'altezza CD scende perpendicolare all'ipotenusa AB, incontrandola nel piede D. Il segmento AD è indicato con [[p]], DB con [[q]] e CD con [[h]], mentre l'ipotenusa AB è [[c]] e i cateti AC e BC sono [[a]] e [[b]].",
            },
            {
              "kind": "p",
              "text": "Due quadratini segnano i due angoli retti: uno in C all'interno del triangolo originale e uno in D dove l'altezza incontra l'ipotenusa. L'altezza CD appare come un segmento interno netto, visivamente distinto dai due cateti che formano la cornice esterna del triangolo.",
            },
            {
              "kind": "p",
              "text": "L'altezza divide ABC in due triangoli rettangoli più piccoli, ACD e CBD, che sono simili tra loro e al triangolo originale. Nei problemi dei libri di testo, le proiezioni sono spesso descritte come i due segmenti dell'ipotenusa, o semplicemente come i numeri che si trovano ai lati del piede dell'altezza. Indicali come [[p]] e [[q]] prima di calcolare qualsiasi cosa.",
            },
          ],
          "h2": "Diagramma dell'altezza del triangolo rettangolo spiegato",
          "image": {
            "alt": "Triangolo rettangolo ABC con angolo retto in C, altezza CD all'ipotenusa AB, proiezioni AD = p e DB = q, altezza CD = h",
            "caption": "L'altezza CD divide l'ipotenusa AB nelle proiezioni [[p]] e [[q]]; [[h]] è la media geometrica di [[p]] e [[q]].",
            "src": "altitude-main.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema dell'altezza non è una regola da imparare a memoria ciecamente. Discende dalla similitudine dei due triangoli creati dall'altezza.",
            },
            {
              "kind": "p",
              "text": "Nel triangolo ACD, gli angoli acuti in A e in C sommano a 90 gradi e nel triangolo grande ABC gli angoli A e B sommano anch'essi a 90 gradi. Quindi l'angolo in C dentro ACD è uguale all'angolo B e l'angolo in A è uguale all'angolo in C dentro CBD. I due triangolini condividono tutti e tre gli angoli, il che li rende simili.",
            },
            {
              "kind": "p",
              "text": "La similitudine significa che i lati corrispondenti mantengono lo stesso rapporto. Nel triangolo ACD, il lato opposto all'angolo A è l'altezza [[h]]. Nel triangolo CBD, il lato opposto all'angolo uguale in C è la proiezione [[q]]. L'altra coppia corrispondente è la proiezione [[p]] (opposta al secondo angolo acuto in ACD) fratto l'altezza [[h]] (opposta all'angolo corrispondente in CBD). Uguagliando questi rapporti si ottiene la proporzione:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplicando in croce la proporzione diventa:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Prendendo la radice quadrata di entrambi i membri si ottiene [[h=\\sqrt{p\\times q}]]. L'equazione [[h^2=p\\times q]] ha due radici algebriche, positiva e negativa, ma una lunghezza è una quantità positiva, quindi solo la radice positiva descrive l'altezza.",
            },
          ],
          "h2": "Perché funziona la formula dell'altezza? Dimostrazione con triangoli simili",
          "image": {
            "alt": "I due triangoli rettangoli più piccoli ACD e CBD con i lati corrispondenti etichettati per mostrare h/p=q/h",
            "caption": "I triangoli ACD e CBD sono simili, quindi [[\\frac{h}{p}=\\frac{q}{h}]] e [[h]] al quadrato è uguale a [[p]] per [[q]].",
            "src": "altitude-proof.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Esempio 1: Numeri interi semplici",
            },
            {
              "kind": "p",
              "text": "Dati [[p=4\\text{ cm}]] e [[q=9\\text{ cm}]], sostituisci nella formula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è [[6\\text{ cm}]], un numero intero perché [[36]] è un quadrato perfetto.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Proiezioni uguali",
            },
            {
              "kind": "p",
              "text": "Dati [[p=5\\text{ cm}]] e [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Quando le proiezioni sono uguali, l'altezza è uguale a ciascuna proiezione: il caso del triangolo rettangolo isoscele, in cui l'altezza è esattamente metà dell'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Proiezioni decimali",
            },
            {
              "kind": "p",
              "text": "Dati [[p=3.6\\text{ m}]] e [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "I decimali non cambiano nulla: [[23.04]] è un quadrato perfetto, quindi l'altezza è esattamente [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Proiezioni diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[p=2\\text{ cm}]] e [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "L'altezza è [[6\\text{ cm}]], non [[10\\text{ cm}]]. Fare la media dà la media aritmetica, [[10]], ma l'altezza è la media geometrica, che risulta più bassa per input diversi.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Quadrato non perfetto",
            },
            {
              "kind": "p",
              "text": "Dati [[p=5\\text{ cm}]] e [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[35]] non è un quadrato perfetto, quindi la risposta esatta è [[\\sqrt{35}\\text{ cm}]]. Usa l'approssimazione [[5.916\\text{ cm}]] per il lavoro pratico, ma mantieni la forma esatta quando la risposta alimenta ulteriori calcoli.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Unità di input diverse",
            },
            {
              "kind": "p",
              "text": "Dati [[p=40\\text{ mm}]] e [[q=9\\text{ cm}]]. Le unità differiscono, quindi converti prima: [[40\\text{ mm}=4\\text{ cm}]]. Poi:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Convertire prima è l'unica mossa sicura: inserire [[40]] e [[9]] direttamente dà [[\\sqrt{40\\times 9}=\\sqrt{360}]], un numero sbagliato e senza unità.",
            },
          ],
          "h2": "Esempi svolti di altezza dalle proiezioni",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Metodo 1: Verifica della media geometrica",
            },
            {
              "kind": "p",
              "text": "Eleva l'altezza al quadrato e confrontala con il prodotto delle proiezioni. I due valori devono coincidere. Per [[p=4]] e [[q=9]] con [[h=6]]: [[6^2=36]] e [[4\\times 9=36]]. La concordanza conferma i calcoli.",
            },
            {
              "kind": "h3",
              "text": "Metodo 2: Relazioni tra ipotenusa e cateti",
            },
            {
              "kind": "p",
              "text": "Ricostruisci l'intero triangolo e fai un controllo incrociato con una seconda formula. Prima somma le proiezioni: [[c=4+9=13]]. Poi recupera i cateti con le relazioni proiezione-cateto: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] e [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Ora verifica con [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], che corrisponde. Un <a href=\"/right-triangle-side-calculator/\">calcolatore dei lati</a> tiene in ordine l'aritmetica dei cateti mentre verifichi.",
            },
            {
              "kind": "h3",
              "text": "Metodo 3: Relazione con l'area del triangolo",
            },
            {
              "kind": "p",
              "text": "Lo stesso triangolo ha due espressioni per la sua area. Usando i cateti: Area = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Usando l'ipotenusa e l'altezza: Area = [[(c\\times h)/2=(13\\times 6)/2=39]]. Entrambe le espressioni concordano, il che conferma indipendentemente [[h=6]]. Lo strumento <a href=\"/right-triangle-area-from-altitude-calculator/\">area dall'altezza</a> si basa su questa stessa relazione.",
            },
          ],
          "h2": "Come verificare il calcolo dell'altezza",
        },
        "sec-relationships": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cinque formule legano tra loro le sei parti etichettate. La tabella seguente riassume cosa trova ciascuna e di cosa ha bisogno.",
            },
            {
              "kind": "p",
              "text": "Le prime quattro formule hanno bisogno di almeno una proiezione. Derivano dai triangoli simili creati dall'altezza, quindi valgono solo quando l'altezza è tracciata dal vertice dell'angolo retto. La quinta formula, [[h=ab/c]], non ha bisogno di proiezioni: deriva dall'uguaglianza delle due espressioni dell'area e funziona ogni volta che si conoscono cateti e ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Questa è la differenza pratica tra i due calcolatori dell'altezza di questo sito. Quando conosci le proiezioni, il teorema dell'altezza dà [[h]] direttamente in un passaggio. Quando conosci invece i lati, <a href=\"/right-triangle-altitude-from-sides-calculator/\">calcolare l'altezza dai lati</a> usa la via dell'area. Scegli lo strumento che corrisponde ai tuoi dati.",
            },
            {
              "kind": "p",
              "text": "Un'altra lettura utile di [[a^2=p\\times c]]: ogni cateto è la media geometrica dell'ipotenusa e della sua proiezione adiacente, a specchio di come l'altezza è la media geometrica delle due proiezioni.",
            },
          ],
          "h2": "Relazione tra altezza, ipotenusa e cateti del triangolo",
          "table": {
            "headers": [
              "Formula",
              "Trova",
              "Richiede",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "L'ipotenusa",
                "Entrambe le proiezioni",
              ],
              [
                "[[h^2=p\\times q]]",
                "L'altezza",
                "Entrambe le proiezioni",
              ],
              [
                "[[a^2=p\\times c]]",
                "Il cateto accanto alla proiezione [[p]]",
                "La proiezione [[p]] e l'ipotenusa",
              ],
              [
                "[[b^2=q\\times c]]",
                "Il cateto accanto alla proiezione [[q]]",
                "La proiezione [[q]] e l'ipotenusa",
              ],
              [
                "[[h=ab/c]]",
                "L'altezza",
                "Entrambi i cateti e l'ipotenusa",
              ],
            ],
          },
        },
        "sec-geomean": {
          "blocks": [
            {
              "kind": "p",
              "text": "La media geometrica di due numeri positivi è la radice quadrata del loro prodotto. Per [[p]] e [[q]] è [[\\sqrt{p\\times q}]], che è esattamente la formula dell'altezza. Quindi dire che l'altezza è la media geometrica delle proiezioni è solo riformulare il teorema con parole diverse.",
            },
            {
              "kind": "p",
              "text": "La media aritmetica è la media familiare: [[(p+q)/2]]. Per [[p=4]] e [[q=9]], la media geometrica è [[\\sqrt{36}=6]] mentre la media aritmetica è [[13/2=6.5]]. L'altezza è uguale a [[6]], non a [[6.5]], perché la proporzione dei triangoli simili impone una relazione moltiplicativa, non additiva.",
            },
            {
              "kind": "p",
              "text": "La media geometrica non supera mai la media aritmetica per input positivi, con uguaglianza solo quando [[p=q]]. Per questo l'altezza è massima, rispetto all'ipotenusa, quando le proiezioni sono uguali. Un rettangolo [[4]] per [[9]] e un quadrato [[6]] per [[6]] hanno la stessa area, [[36]], che è la stessa idea disegnata come figure: l'altezza è il lato del quadrato la cui area è uguale a quella del rettangolo.",
            },
          ],
          "h2": "Teorema della media geometrica e altezza del triangolo rettangolo",
          "image": {
            "alt": "Rettangolo 4 per 9 e quadrato 6 per 6 con area uguale, più una retta dei numeri che confronta la media geometrica 6 e la media aritmetica 6.5",
            "caption": "Per [[p=4]] e [[q=9]], la media geometrica [[6]] (l'altezza) si trova sotto la media aritmetica [[6.5]].",
            "src": "altitude-geometric-mean.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Proiezioni uguali",
            },
            {
              "kind": "p",
              "text": "Quando [[p=q]], l'altezza è uguale a quel valore comune: [[h=\\sqrt{p\\times p}=p]]. Il piede dell'altezza cade nel punto medio dell'ipotenusa, i cateti sono uguali e il triangolo è un triangolo rettangolo isoscele con angoli acuti di 45 gradi, che dà l'altezza massima per un'ipotenusa fissa.",
            },
            {
              "kind": "h3",
              "text": "Proiezioni molto diverse",
            },
            {
              "kind": "p",
              "text": "Quando [[p]] è minuscola e [[q]] è enorme, l'altezza resta modesta: [[p=1]] e [[q=100]] danno [[h=10]], molto al di sotto del punto medio delle proiezioni. La media geometrica pesa l'input piccolo più di quanto farebbe una media aritmetica.",
            },
            {
              "kind": "h3",
              "text": "Ipotenusa fissa",
            },
            {
              "kind": "p",
              "text": "Mantieni l'ipotenusa [[c=p+q]] costante e varia la divisione. Il prodotto [[p\\times q]], e quindi l'altezza, raggiunge il massimo quando la divisione è pari. Algebricamente, [[h\\le\\frac{p+q}{2}]], con uguaglianza esattamente quando [[p=q]]. In parole semplici, nessuna altezza può superare metà della sua ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Proiezioni nulle",
            },
            {
              "kind": "p",
              "text": "Ponendo [[p=0]] si ottiene [[h=0]]: il piede dell'altezza coincide con il vertice A, il triangolo collassa in un segmento e non rimane alcun triangolo genuino. Tratta le proiezioni nulle come degeneri, non come input validi per il calcolatore.",
            },
            {
              "kind": "h3",
              "text": "Proiezioni negative",
            },
            {
              "kind": "p",
              "text": "Una proiezione è una lunghezza e le lunghezze non possono essere negative. Un input negativo non ha significato geometrico e non produce alcuna altezza valida; l'errore è a monte, nel modo in cui il segmento è stato misurato.",
            },
          ],
          "h2": "Casi speciali e proprietà importanti",
          "image": {
            "alt": "Due triangoli rettangoli con la stessa ipotenusa ma diverse divisioni delle proiezioni che mostrano altezze diverse",
            "caption": "Stessa ipotenusa, divisioni diverse: proiezioni uguali danno l'altezza più alta.",
            "src": "altitude-equal-vs-unequal.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Sommare le proiezioni invece di moltiplicarle. La proporzione dei triangoli simili richiede un prodotto: con [[p=4]] e [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] è sbagliato, mentre [[\\sqrt{4\\times 9}=6]] è corretto.",
                "Dimenticare la radice quadrata. Fermarsi a [[h^2=36]] lascia un numero di tipo area dove dovrebbe stare una lunghezza. Prendi sempre la radice quadrata positiva per finire.",
                "Confondere le proiezioni con i cateti del triangolo. I cateti si inclinano fuori dall'ipotenusa mentre [[p]] e [[q]] giacciono distesi lungo di essa; solo i segmenti di ipotenusa appartengono al teorema dell'altezza.",
                "Mescolare le unità senza convertire. Con [[p=40\\text{ mm}]] e [[q=9\\text{ cm}]], converti prima ([[40\\text{ mm}=4\\text{ cm}]]), poi calcola [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Inserire misure negative. Una proiezione negativa è priva di significato e può produrre risultati immaginari. Verifica che [[p]] e [[q]] siano entrambe positive prima di calcolare.",
                "Trascinare [[h^2]] come [[h]] nelle soluzioni più lunghe. Tieni dritte le etichette: [[h^2=36]] è il passaggio al quadrato, [[h=6]] è l'altezza.",
                "Arrotondare troppo presto. Mantieni le forme esatte come [[\\sqrt{35}]] il più a lungo possibile e arrotonda solo la risposta finale.",
                "Applicare la formula a un triangolo non rettangolo. La proporzione [[\\frac{h}{p}=\\frac{q}{h}]] ha bisogno dell'angolo retto in C; senza di esso, l'argomento di similitudine crolla e la formula non vale.",
              ],
            },
          ],
          "h2": "Errori comuni nel trovare l'altezza dalle proiezioni",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Le lezioni di geometria usano questo teorema costantemente. I problemi sull'altezza verificano se gli studenti sanno individuare le proiezioni, scegliere la formula giusta e verificare con il teorema di Pitagora, e gli esercizi dei libri di testo spesso consegnano le proiezioni come semplici numeri su un diagramma etichettato.",
            },
            {
              "kind": "p",
              "text": "Nei problemi di geometria in stile costruttivo, il teorema completa un triangolo rettangolo quando si conoscono solo misure parziali. Disegnare una capriata triangolare può fissare prima i segmenti di ipotenusa, con l'altezza che determina l'altezza di colmo, e le dimostrazioni di similitudine usano direttamente la stessa proporzione [[\\frac{h}{p}=\\frac{q}{h}]].",
            },
            {
              "kind": "p",
              "text": "Gli schizzi di rilevamento e ingegneria a volte modellano una linea di mira come l'altezza di un triangolo rettangolo, con le proiezioni lette su una base. Due distanze arbitrarie al suolo non determinano da sole un'altezza; la geometria del triangolo rettangolo deve valere davvero prima che il teorema si applichi.",
            },
            {
              "kind": "p",
              "text": "I disegni architettonici di timpani o tetti a piastra piegata usano le stesse relazioni per recuperare una dimensione mancante, purché l'angolo retto sia davvero presente.",
            },
          ],
          "h2": "Applicazioni pratiche del teorema dell'altezza",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "h3",
              "text": "Problema 1: Principiante",
            },
            {
              "kind": "p",
              "text": "Le proiezioni di un triangolo rettangolo sono [[p=25\\text{ cm}]] e [[q=16\\text{ cm}]]. Trova l'altezza.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Principiante-Intermedio",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha proiezioni [[p=12\\text{ m}]] e [[q=27\\text{ m}]]. Trova l'altezza relativa all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Intermedio",
            },
            {
              "kind": "p",
              "text": "Il piede dell'altezza divide l'ipotenusa in segmenti di [[7\\text{ in}]] e [[28\\text{ in}]]. Qual è l'altezza?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Decimali",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha proiezioni [[p=2.5\\text{ ft}]] e [[q=14.4\\text{ ft}]]. Calcola l'altezza.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Applicazione",
            },
            {
              "kind": "p",
              "text": "Una capriata triangolare rettangolare ha una catena come ipotenusa. Il piede dell'altezza divide la catena in segmenti di [[3.2\\text{ m}]] e [[12.8\\text{ m}]]. Trova l'altezza della capriata in corrispondenza dell'altezza.",
            },
            {
              "kind": "h3",
              "text": "Risposte dei problemi di pratica",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
          "h2": "Problemi di pratica con risposte",
        },
        "sec-conclusion": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una radice quadrata racchiude l'intera idea: l'altezza di un triangolo rettangolo è la media geometrica delle due proiezioni sulla sua ipotenusa. Moltiplica [[p]] e [[q]], prendi la radice quadrata positiva e mantieni coerenti le unità, e la risposta è in mano.",
            },
            {
              "kind": "p",
              "text": "Dietro quel breve calcolo si trova un pulito pezzo di geometria. L'altezza crea due triangoli simili, la similitudine dà la proporzione e la proporzione dà la formula. Quando riesci a vedere quella catena, controllare le risposte, evitare errori e riconoscere le proiezioni in nuovi problemi diventano routine.",
            },
          ],
          "h2": "Una radice quadrata, piena comprensione",
        },
      },
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "answer": "La formula è [[h=\\sqrt{p\\times q}]], dove [[h]] è l'altezza relativa all'ipotenusa e [[p]] e [[q]] sono le due proiezioni. Entrambe le proiezioni devono essere lunghezze positive misurate nella stessa unità. Moltiplicale, poi prendi la radice quadrata positiva. Il risultato è l'altezza nella stessa unità degli input.",
          "question": "Qual è la formula dell'altezza dalle proiezioni?",
        },
        {
          "answer": "Le proiezioni sono i due segmenti in cui il piede dell'altezza divide l'ipotenusa. Nel triangolo ABC con l'angolo retto in C e l'altezza CD, il segmento AD è la proiezione [[p]] e DB è la proiezione [[q]]. Insieme formano l'ipotenusa intera, quindi [[p+q=c]]. Sono segmenti piatti lungo l'ipotenusa, non i cateti del triangolo.",
          "question": "Cosa sono le proiezioni sull'ipotenusa?",
        },
        {
          "answer": "Perché l'altezza crea due triangoli simili. Nei triangoli ACD e CBD, i lati corrispondenti danno la proporzione [[\\frac{h}{p}=\\frac{q}{h}]]. Moltiplicando in croce si ottiene [[h^2=p\\times q]], quindi [[h=\\sqrt{p\\times q}]]. Poiché la media geometrica di due numeri è la radice quadrata del loro prodotto, l'altezza è esattamente la media geometrica di [[p]] e [[q]].",
          "question": "Perché l'altezza è la media geometrica delle due proiezioni?",
        },
        {
          "answer": "Sì. Il teorema dell'altezza ha bisogno solo delle due proiezioni, quindi i cateti non sono un input necessario. Inserisci [[p]] e [[q]] nel calcolatore e restituisce direttamente [[h]]. È la via più rapida quando un diagramma o il testo del problema fornisce i segmenti di ipotenusa. Se invece conosci i cateti, si applica una formula diversa, [[h=ab/c]].",
          "question": "Posso trovare l'altezza senza conoscere i cateti del triangolo?",
        },
        {
          "answer": "Sì, e di solito le hanno. Le proiezioni sono due lunghezze positive qualsiasi, uguali o diverse, e la formula gestisce entrambi i casi. Con [[p=2]] e [[q=18]] l'altezza è [[6]], compresa tra i due valori. Proiezioni uguali sono semplicemente il caso speciale che produce un triangolo rettangolo isoscele.",
          "question": "Le due proiezioni possono avere lunghezze diverse?",
        },
        {
          "answer": "Quando [[p=q]], l'altezza è uguale a quel valore comune, poiché [[\\sqrt{p\\times p}=p]]. Il piede dell'altezza cade nel punto medio dell'ipotenusa e il triangolo diventa un triangolo rettangolo isoscele con due cateti uguali e angoli acuti di [[45^\\circ]]. Per un'ipotenusa fissa, questa divisione dà anche l'altezza più alta possibile.",
          "question": "Cosa succede quando entrambe le proiezioni sono uguali?",
        },
        {
          "answer": "Può superare la proiezione più piccola. Con [[p=2]] e [[q=18]], l'altezza è [[6]], che è più lunga di [[p=2]]. La media geometrica si trova sempre tra i due input, quindi l'altezza cade tra [[p]] e [[q]]. Non può mai superare la proiezione più grande né superare metà dell'ipotenusa.",
          "question": "L'altezza può essere più lunga di una delle proiezioni?",
        },
        {
          "answer": "Convertine una in modo che entrambe condividano un'unità prima di calcolare. Per esempio, cambia [[40\\text{ mm}]] in [[4\\text{ cm}]] quando l'altra proiezione è [[9\\text{ cm}]], poi calcola [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Mescolare le unità senza convertire corrompe il prodotto. Il calcolatore presuppone unità uguali, quindi standardizza sempre prima.",
          "question": "Cosa succede se le proiezioni usano unità diverse?",
        },
        {
          "answer": "No. Per qualsiasi [[p]] e [[q]] positivi, la media geometrica non supera mai la media aritmetica, quindi [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. L'altezza è uguale a esattamente metà dell'ipotenusa solo quando [[p=q]]. Qualsiasi risultato del calcolatore maggiore di metà dell'ipotenusa segnala un errore di input o di calcolo.",
          "question": "L'altezza può essere maggiore di metà dell'ipotenusa?",
        },
        {
          "answer": "Eleva l'altezza al quadrato e verifica che sia uguale a [[p\\times q]]. Per un controllo più approfondito, ricostruisci il triangolo: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], poi verifica [[h=ab/c]]. Puoi anche confrontare le due espressioni dell'area, [[(a\\times b)/2]] e [[(c\\times h)/2]], che devono concordare. Se tutti e tre i controlli passano, la risposta è solida.",
          "question": "Come controllo il calcolo dell'altezza?",
        },
        {
          "answer": "Descrivono lo stesso triangolo rettangolo da angolazioni diverse. Il teorema dell'altezza deriva dalla similitudine, mentre il teorema di Pitagora lega i tre lati: [[a^2+b^2=c^2]]. Si rafforzano a vicenda: con [[p=4]] e [[q=9]], i cateti [[\\sqrt{52}]] e [[\\sqrt{117}]] soddisfano [[52+117=169=13^2]], confermando il triangolo descritto dal teorema dell'altezza.",
          "question": "Il teorema dell'altezza è legato al teorema di Pitagora?",
        },
        {
          "answer": "No. La proporzione [[\\frac{h}{p}=\\frac{q}{h}]] dipende dai triangoli simili creati da un'altezza tracciata dal vertice di un angolo retto. Senza quell'angolo retto, l'argomento di similitudine fallisce e [[h^2=p\\times q]] non vale. Per i triangoli generici, usa invece formule di altezza basate sull'area o trigonometriche adatte ai dati forniti.",
          "question": "Posso usare questa formula per un triangolo non rettangolo?",
        },
      ],
      "relatedHeading": "Esplora i calcolatori correlati per il triangolo rettangolo",
      "relatedIntro": "Questi strumenti gestiscono i calcoli vicini: trovare le proiezioni, trovare l'altezza dalle lunghezze dei lati e trasformare un'altezza in un'area. Ognuno si abbina naturalmente al teorema dell'altezza di questa pagina.",
      "relatedItems": [
        "Calcolatore dell'altezza del triangolo rettangolo",
        "Calcolatore dell'altezza del triangolo rettangolo dai lati",
        "Calcolatore delle proiezioni del triangolo rettangolo",
        "Calcolatore dell'area del triangolo rettangolo dall'altezza",
        "Calcolatore dei lati del triangolo rettangolo",
      ],
    },
};
