// fiveTwelveThirteenGuideTranslations.bit.ts: 5-12-13 Triangle
// Guide (Page 43 of 45) translation.
export const FIVETWELVETHIRTEEN_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatore del Triangolo 5-12-13 - Scala i Lati, Area, Perimetro",
        "description": "Scala un triangolo 5-12-13: inserisci un fattore di scala positivo k per trovare i lati 5k, 12k e 13k, oltre all'area 30k al quadrato e al perimetro 30k.",
        "primaryKeyword": "Calcolatore del Triangolo 5-12-13",
        "slug": "5-12-13-triangle-calculator",
      },
      "tocHeading": "Navigazione delle Sezioni",
      "tocItems": {
        "sec-intro": "Calcolatore del Triangolo 5-12-13",
        "sec-calculate": "Scala un Triangolo 5-12-13 e Calcola le Sue Misure",
        "sec-what": "Che Cos'è un Triangolo 5-12-13?",
        "sec-pythagorean": "Perché 5-12-13 è una Terna Pitagorica?",
        "sec-sides": "I Tre Lati di un Triangolo 5-12-13",
        "sec-ratio": "Il Rapporto dei Lati 5-12-13",
        "sec-scale-factor": "Che Cos'è il Fattore di Scala in un Triangolo 5-12-13?",
        "sec-leg-a": "Formula per Calcolare il Cateto Minore",
        "sec-leg-b": "Formula per Calcolare il Cateto Maggiore",
        "sec-hypotenuse": "Formula per Calcolare l'Ipotenusa",
        "sec-area": "Come Calcolare l'Area di un Triangolo 5-12-13 Scalato",
        "sec-perimeter": "Come Calcolare il Perimetro di un Triangolo 5-12-13 Scalato",
        "sec-find-k": "Come Trovare il Fattore di Scala da un Lato Noto",
        "sec-step-example": "Esempio Passo-Passo di Scala di un Triangolo 5-12-13",
        "sec-examples": "Esempi Svolti con Diversi Fattori di Scala",
        "sec-right-angle": "Perché il Triangolo 5-12-13 Mantiene Sempre un Angolo di 90 Gradi?",
        "sec-euclid": "Come si Genera la Terna 5-12-13 con la Formula di Euclide?",
        "sec-applications": "Applicazioni del Triangolo 5-12-13 in Geometria e Misurazione",
        "sec-vs-triples": "Differenza tra 5-12-13 e Altre Terne Pitagoriche",
        "sec-vs-special": "Differenza tra i Triangoli 5-12-13, 45-45-90 e 30-60-90",
        "sec-mistakes": "Errori Comuni nell'Uso del Calcolatore del Triangolo 5-12-13",
        "sec-verify": "Come Verificare un Triangolo 5-12-13 Scalato",
        "sec-practice": "Esercizi con Soluzioni",
        "sec-related": "Calcolatori Correlati sui Triangoli Rettangoli",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatore del Triangolo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Scala un triangolo 5-12-13 e trova i suoi lati, l'area e il perimetro.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 5-12-13 è un triangolo rettangolo i cui lati seguono il rapporto [[5 : 12 : 13]]. È una terna pitagorica, perché i suoi lati interi soddisfano il teorema di Pitagora: [[5^2 + 12^2 = 13^2]], dato che [[25 + 144 = 169]]. Il lato di lunghezza 13 è l'ipotenusa, e i lati di lunghezza 5 e 12 sono i cateti che si incontrano all'angolo retto.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore scala quel triangolo di un fattore di scala positivo [[k]], così i lati scalati sono [[a = 5k]], [[b = 12k]] e [[c = 13k]]. Calcola anche l'area, [[A = 30k^2]], e il perimetro, [[P = 30k]], così un solo input fornisce tutti e cinque i risultati. Usa il <a href=\"/right-triangle-calculator/\">calcolatore del triangolo rettangolo</a> per un triangolo rettangolo generico.",
            },
            {
              "kind": "p",
              "text": "Per esempio, con [[k = 2]] i lati diventano [[a = 10]], [[b = 24]] e [[c = 26]], l'area è [[A = 120]] unità quadrate e il perimetro è [[P = 60]] unità.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Scala un Triangolo 5-12-13 e Calcola le Sue Misure",
          "blocks": [
            {
              "kind": "p",
              "text": "Un input, cinque risultati: inserisci k e leggi le misure del triangolo scalato.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore ha una sola modalità, Scala il Triangolo 5-12-13. Inserisci un fattore di scala positivo [[k]] nella casella di input e premi Calcola. Lo strumento moltiplica 5, 12 e 13 per [[k]], poi calcola l'area e il perimetro dai lati scalati. Premi Reimposta per cancellare l'input e ricominciare.",
            },
            {
              "kind": "p",
              "text": "Il fattore di scala è il numero che ingrandisce o rimpicciolisce il triangolo originale. Con [[k = 1]] ottieni il triangolo originale 5, 12, 13. Con [[k]] maggiore di 1 il triangolo cresce, e con [[k]] tra 0 e 1 si rimpicciolisce, ma la forma non cambia mai.",
            },
            {
              "kind": "p",
              "text": "Ogni risultato deriva dallo stesso [[k]], quindi i cinque output sono sempre coerenti tra loro. Se [[k]] è zero o negativo, il calcolatore non lo accetta, perché zero dà una figura degenere e i valori negativi non possono descrivere lunghezze di lati.",
            },
          ],
          "table": {
            "headers": [
              "Misura",
              "Formula",
              "Risultato",
            ],
            "rows": [
              [
                "Cateto minore",
                "5k",
                "Lato scalato a",
              ],
              [
                "Cateto maggiore",
                "12k",
                "Lato scalato b",
              ],
              [
                "Ipotenusa",
                "13k",
                "Lato scalato c",
              ],
              [
                "Area",
                "30k²",
                "Area del triangolo",
              ],
              [
                "Perimetro",
                "30k",
                "Perimetro del triangolo",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Che Cos'è un Triangolo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo rettangolo con lati interi nel rapporto 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 5-12-13 è un triangolo rettangolo i cui tre lati misurano 5, 12 e 13 unità, o qualsiasi insieme di lunghezze nella stessa proporzione. Il lato più lungo, 13, è l'ipotenusa e si trova di fronte all'angolo di 90 gradi. I lati di lunghezza 5 e 12 sono i cateti e si incontrano all'angolo retto.",
            },
            {
              "kind": "p",
              "text": "Si chiama terna pitagorica perché i tre numeri interi soddisfano [[5^2 + 12^2 = 13^2]]. Questa singola verifica è ciò che rende il triangolo un triangolo rettangolo, non un disegno o una misurazione. Scala i lati di qualsiasi fattore positivo e il rapporto resta 5:12:13, così il triangolo ingrandito o ridotto è ancora un triangolo rettangolo con la stessa forma.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-main.svg",
            "alt": "Triangolo rettangolo 5-12-13 ABC etichettato con cateto minore a uguale a 5, cateto maggiore b uguale a 12, ipotenusa c uguale a 13 e un indicatore di angolo retto",
            "caption": "Triangolo ABC: i cateti a = 5 e b = 12 si incontrano all'angolo retto, e l'ipotenusa è c = 13.",
          },
        },
        "sec-pythagorean": {
          "h2": "Perché 5-12-13 è una Terna Pitagorica?",
          "blocks": [
            {
              "kind": "p",
              "text": "I quadrati dei cateti sommati danno il quadrato dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[5^2 + 12^2 = 13^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[25 + 144 = 169]]]",
            },
            {
              "kind": "p",
              "text": "[[[169 = 169]]]",
            },
            {
              "kind": "p",
              "text": "I due lati coincidono, quindi l'equazione vale esattamente. Questo è il teorema di Pitagora in azione: quando i quadrati dei due lati più corti sommati danno il quadrato del lato più lungo, l'angolo opposto al lato più lungo deve essere un angolo retto.",
            },
            {
              "kind": "p",
              "text": "Il numero 13 deve essere l'ipotenusa perché è il lato più lungo, e l'ipotenusa si trova sempre di fronte all'angolo di 90 gradi. I numeri 5 e 12 sono i cateti. Poiché 5, 12 e 13 sono numeri interi, la terna è utile per i compiti, le verifiche e i lavori di misurazione in cui servono risposte esatte.",
            },
            {
              "kind": "p",
              "text": "Questa verifica è il teorema inverso di Pitagora: il teorema dice che un triangolo rettangolo soddisfa [[a^2 + b^2 = c^2]], e il teorema inverso dice che qualsiasi triangolo i cui lati soddisfano l'equazione deve contenere un angolo retto. La maggior parte dei triangoli rettangoli non ha tutti i lati interi, ed è questo che rende speciale una terna.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-pythagoras.svg",
            "alt": "Diagramma del teorema di Pitagora per un triangolo 5-12-13 che mostra 25 più 144 uguale a 169",
            "caption": "25 + 144 = 169, quindi l'angolo opposto a 13 è di 90 gradi.",
          },
        },
        "sec-sides": {
          "h2": "I Tre Lati di un Triangolo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre lati, tre ruoli: due cateti e un'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il cateto minore [[a]] misura 5 nel triangolo di base. Si trova di fronte all'angolo acuto più piccolo, circa 22.62 gradi, ed è il lato che la maggior parte degli studenti individua per primo perché è il più corto dei tre.",
            },
            {
              "kind": "p",
              "text": "Il cateto maggiore [[b]] misura 12 nel triangolo di base. Si trova di fronte all'angolo acuto più grande, circa 67.38 gradi. L'ipotenusa [[c]] misura 13, il lato più lungo, e si trova di fronte all'angolo di 90 gradi. Quando il triangolo viene scalato di [[k]], le etichette restano nello stesso ordine: [[a = 5k]], [[b = 12k]] e [[c = 13k]].",
            },
          ],
          "table": {
            "headers": [
              "Lato",
              "Lunghezza nel triangolo di base",
              "Posizione",
            ],
            "rows": [
              [
                "Cateto minore a",
                "5",
                "Di fronte all'angolo di 22.62°",
              ],
              [
                "Cateto maggiore b",
                "12",
                "Di fronte all'angolo di 67.38°",
              ],
              [
                "Ipotenusa c",
                "13",
                "Di fronte all'angolo di 90°",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Il Rapporto dei Lati 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 5:12:13 non cambia mai, per quanto grande diventi il triangolo.",
            },
            {
              "kind": "p",
              "text": "[[[5 : 12 : 13]]]",
            },
            {
              "kind": "p",
              "text": "Il cateto minore rappresenta 5 unità proporzionali, il cateto maggiore 12 e l'ipotenusa 13.",
            },
            {
              "kind": "p",
              "text": "La scala moltiplica ogni parte per lo stesso [[k]], così il rapporto diventa [[[5k : 12k : 13k]]] con la stessa forma sottostante. Gli insiemi 5, 12, 13; 10, 24, 26; 15, 36, 39; 20, 48, 52 e 25, 60, 65 descrivono tutti lo stesso triangolo a dimensioni diverse, perché ogni insieme è il rapporto di base moltiplicato per 1, 2, 3, 4 e 5.",
            },
            {
              "kind": "p",
              "text": "Per questo il rapporto è la vera identità del triangolo. Due triangoli con lo stesso rapporto sono simili: stessi angoli, stessa forma, dimensioni diverse.",
            },
            {
              "kind": "p",
              "text": "Per verificare un insieme di misure, dividi tutti e tre i numeri per il loro massimo comune divisore e controlla se resta 5, 12, 13. Per 10, 24, 26 il divisore è 2, e dividendo si ottiene 5, 12, 13. Per 15, 36, 39 il divisore è 3, e dividendo si ottiene la stessa terna. Se la divisione lascia altri tre numeri, l'insieme non è un triangolo 5-12-13.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-scaled.svg",
            "alt": "Tre triangoli simili etichettati 5-12-13, 10-24-26 e 15-36-39 a dimensioni crescenti",
            "caption": "Stesse proporzioni, stessi angoli: k = 1, k = 2 e k = 3.",
          },
        },
        "sec-scale-factor": {
          "h2": "Che Cos'è il Fattore di Scala in un Triangolo 5-12-13?",
          "blocks": [
            {
              "kind": "p",
              "text": "k è il moltiplicatore che stabilisce la dimensione del triangolo.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k,\\quad b = 12k,\\quad c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Un fattore di scala moltiplica tutte e tre le lunghezze originali dei lati per lo stesso numero positivo.",
            },
            {
              "kind": "p",
              "text": "Con [[k = 1]] ottieni il triangolo originale. Con [[k]] maggiore di 1 il triangolo cresce, e con [[k]] tra 0 e 1 si rimpicciolisce. Il fattore di scala cambia la dimensione, non la forma: ogni angolo resta lo stesso e ogni lato resta in proporzione.",
            },
            {
              "kind": "p",
              "text": "Lo stesso fattore deve essere applicato a tutti e tre i lati. Scalare solo uno o due lati rompe il rapporto, rompe la verifica di Pitagora, e il risultato non è più un triangolo 5-12-13.",
            },
            {
              "kind": "p",
              "text": "Un fattore di scala può anche essere letto come un rapporto tra lati corrispondenti: dividi un lato del nuovo triangolo per il lato corrispondente dell'originale, e la risposta è [[k]]. Per esempio, un cateto maggiore di 36 rispetto all'originale 12 dà [[k = 36 / 12 = 3]]. Questo è lo stesso [[k]] che chiede il calcolatore, ricavato da una misurazione invece di essere scelto in anticipo.",
            },
          ],
          "table": {
            "headers": [
              "Fattore di scala",
              "Effetto",
              "Lati di esempio",
            ],
            "rows": [
              [
                "k = 1",
                "Triangolo originale",
                "5, 12, 13",
              ],
              [
                "k = 2",
                "Raddoppiato",
                "10, 24, 26",
              ],
              [
                "k = 0.5",
                "Dimezzato",
                "2.5, 6, 6.5",
              ],
              [
                "k = 10",
                "Dieci volte più grande",
                "50, 120, 130",
              ],
            ],
          },
          "image": {
            "src": "five-twelve-thirteen-scale-factor.svg",
            "alt": "Triangolo 5-12-13 scalato con k uguale a 2, che mostra i lati a uguale a 10, b uguale a 24 e c uguale a 26",
            "caption": "Con k = 2, i lati diventano 10, 24 e 26.",
          },
        },
        "sec-leg-a": {
          "h2": "Formula per Calcolare il Cateto Minore",
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto minore è cinque volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[a = 5 \\times 4 = 20]]]",
            },
            {
              "kind": "p",
              "text": "Il cateto minore è lungo 20 unità. È il lato più piccolo a ogni fattore di scala, perché 5 è il numero più piccolo del rapporto.",
            },
          ],
        },
        "sec-leg-b": {
          "h2": "Formula per Calcolare il Cateto Maggiore",
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto maggiore è dodici volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[b = 12 \\times 4 = 48]]]",
            },
            {
              "kind": "p",
              "text": "Il cateto maggiore è lungo 48 unità. È più lungo del cateto minore perché 12 è maggiore di 5, ma resta comunque più corto dell'ipotenusa a ogni fattore di scala positivo.",
            },
          ],
        },
        "sec-hypotenuse": {
          "h2": "Formula per Calcolare l'Ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "L'ipotenusa è tredici volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 13k]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 4]]: [[[c = 13 \\times 4 = 52]]]",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa è lunga 52 unità. Resta il lato più lungo a ogni fattore di scala positivo, perché 13 è il numero più grande del rapporto e l'ipotenusa si trova sempre di fronte all'angolo retto.",
            },
          ],
        },
        "sec-area": {
          "h2": "Come Calcolare l'Area di un Triangolo 5-12-13 Scalato",
          "blocks": [
            {
              "kind": "p",
              "text": "La metà del prodotto dei due cateti dà l'area.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci i lati scalati: [[[A = \\frac{(5k)(12k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Semplifica: [[[A = \\frac{60k^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{A = 30k^2}]]]",
            },
            {
              "kind": "p",
              "text": "I due cateti sono la base e l'altezza, perché si incontrano all'angolo retto. Dimezzare il loro prodotto dà l'area del triangolo. Il fattore di scala è al quadrato, quindi raddoppiare [[k]] rende l'area quattro volte più grande. L'area si misura in unità quadrate.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]: [[[A = 30(3^2) = 270]]] unità quadrate.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa non entra mai nella formula dell'area, perché l'area di un triangolo rettangolo deriva dai suoi due cateti. Come verifica con [[k = 2]], i cateti sono 10 e 24, quindi [[A = (10 \\times 24) / 2 = 120]] unità quadrate, che corrisponde a [[A = 30(2^2) = 120]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-area.svg",
            "alt": "Diagramma dell'area di un triangolo 5-12-13 scalato con base 5k, altezza 12k e area 30k al quadrato",
            "caption": "Con k = 2, l'area è 120 unità quadrate.",
          },
        },
        "sec-perimeter": {
          "h2": "Come Calcolare il Perimetro di un Triangolo 5-12-13 Scalato",
          "blocks": [
            {
              "kind": "p",
              "text": "Somma tutti e tre i lati scalati per ottenere il perimetro.",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci: [[[P = 5k + 12k + 13k]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{P = 30k}]]]",
            },
            {
              "kind": "p",
              "text": "Ogni lato conta, quindi sommali tutti e tre. Il perimetro cresce in proporzione diretta a [[k]]: raddoppiare il fattore di scala raddoppia il perimetro. Il perimetro si misura in unità lineari, non in unità quadrate.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]: [[[P = 30 \\times 3 = 90]]] unità.",
            },
            {
              "kind": "p",
              "text": "Come verifica con [[k = 2]], somma direttamente i lati scalati: [[P = 10 + 24 + 26 = 60]] unità, che corrisponde a [[P = 30 \\times 2 = 60]]. Il perimetro risponde a una domanda diversa dall'area: misura la distanza intorno al triangolo, non lo spazio al suo interno.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-perimeter.svg",
            "alt": "Diagramma del perimetro di un triangolo 5-12-13 scalato con i lati 5k, 12k e 13k che sommati danno 30k",
            "caption": "Con k = 2, il perimetro è 60 unità.",
          },
        },
        "sec-find-k": {
          "h2": "Come Trovare il Fattore di Scala da un Lato Noto",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividi un lato noto per il suo numero del rapporto per trovare k a mano.",
            },
            {
              "kind": "p",
              "text": "Il calcolatore prende [[k]] direttamente, ma puoi ricavare [[k]] da solo quando conosci già un lato. Dividi il lato noto per il numero corrispondente del rapporto 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Se è noto il cateto minore: [[[k = \\frac{a}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Se è noto il cateto maggiore: [[[k = \\frac{b}{12}]]]",
            },
            {
              "kind": "p",
              "text": "Se è nota l'ipotenusa: [[[k = \\frac{c}{13}]]]",
            },
            {
              "kind": "p",
              "text": "Esempio 1: con [[a = 20]], [[k = 20 / 5 = 4]]. Esempio 2: con [[b = 36]], [[k = 36 / 12 = 3]]. Esempio 3: con [[c = 65]], [[k = 65 / 13 = 5]]. Inserisci il k trovato nel calcolatore per ottenere gli altri lati, l'area e il perimetro.",
            },
            {
              "kind": "p",
              "text": "A volte [[k]] non è un numero intero. Con [[b = 30]], per esempio, [[k = 30 / 12 = 2.5]], e gli altri lati sono [[a = 5 \\times 2.5 = 12.5]] e [[c = 13 \\times 2.5 = 32.5]]. Quando ricavi [[k]] da due diversi lati noti, entrambe le risposte devono coincidere; se non coincidono, le misure non formano un triangolo 5-12-13.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Esempio Passo-Passo di Scala di un Triangolo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Fattore di scala k = 2, svolto dall'inizio alla fine.",
            },
            {
              "kind": "p",
              "text": "Parti da [[k = 2]] e trova ogni misura del triangolo scalato, una formula alla volta. Ogni passaggio usa una formula delle sezioni precedenti, e la tabella riassuntiva alla fine raccoglie i risultati.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trova il cateto minore: [[a = 5k = 5 \\times 2 = 10]].",
                "Trova il cateto maggiore: [[b = 12k = 12 \\times 2 = 24]].",
                "Trova l'ipotenusa: [[c = 13k = 13 \\times 2 = 26]].",
                "Trova l'area: [[A = 30k^2 = 30 \\times 4 = 120]] unità quadrate.",
                "Trova il perimetro: [[P = 30k = 30 \\times 2 = 60]] unità.",
              ],
            },
            {
              "kind": "p",
              "text": "Il nuovo triangolo mantiene le proporzioni originali 5:12:13: 10, 24 e 26 sono tutti il doppio di 5, 12 e 13. Verifica l'angolo retto con Pitagora: [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]].",
            },
          ],
          "table": {
            "headers": [
              "Misura",
              "Valore",
            ],
            "rows": [
              [
                "Cateto minore a",
                "10",
              ],
              [
                "Cateto maggiore b",
                "24",
              ],
              [
                "Ipotenusa c",
                "26",
              ],
              [
                "Area A",
                "120 unità quadrate",
              ],
              [
                "Perimetro P",
                "60 unità",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Esempi Svolti con Diversi Fattori di Scala",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto esempi svolti, dal triangolo originale a k = 10.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo Originale, k = 1",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 1]]. Lati: [[a = 5]], [[b = 12]], [[c = 13]]. Area: [[A = 30(1^2) = 30]] unità quadrate. Perimetro: [[P = 30(1) = 30]] unità. Questo è il triangolo originale, la versione intera più piccola della terna.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Fattore di Scala di 2",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 2]]. Lati: [[a = 10]], [[b = 24]], [[c = 26]]. Area: [[A = 30(2^2) = 120]] unità quadrate. Perimetro: [[P = 30(2) = 60]] unità. Raddoppiare il fattore di scala raddoppia ogni lato e il perimetro, ma l'area cresce di quattro volte.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Fattore di Scala di 3",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 3]]. Lati: [[a = 15]], [[b = 36]], [[c = 39]]. Area: [[A = 30(3^2) = 270]] unità quadrate. Perimetro: [[P = 30(3) = 90]] unità. Triplicare i lati triplica il perimetro, mentre l'area diventa nove volte l'originale.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Fattore di Scala di 4",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 4]]. Lati: [[a = 20]], [[b = 48]], [[c = 52]]. Area: [[A = 30(4^2) = 480]] unità quadrate. Perimetro: [[P = 30(4) = 120]] unità. Ogni lato è quattro volte l'originale, e l'area è sedici volte l'originale.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Fattore di Scala di 0.5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 0.5]]. Lati: [[a = 2.5]], [[b = 6]], [[c = 6.5]]. Area: [[A = 30(0.5^2) = 7.5]] unità quadrate. Perimetro: [[P = 30(0.5) = 15]] unità. Dimezzare il triangolo dimezza i lati e il perimetro, mentre l'area scende a un quarto.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Fattore di Scala di 1.5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 1.5]]. Lati: [[a = 7.5]], [[b = 18]], [[c = 19.5]]. Area: [[A = 30(1.5^2) = 67.5]] unità quadrate. Perimetro: [[P = 30(1.5) = 45]] unità. Un fattore di scala decimale funziona allo stesso modo: moltiplica ogni lato per 1.5.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Fattore di Scala di 5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 5]]. Lati: [[a = 25]], [[b = 60]], [[c = 65]]. Area: [[A = 30(5^2) = 750]] unità quadrate. Perimetro: [[P = 30(5) = 150]] unità. Un fattore di scala di 5 dà un triangolo molto più grande, utile per lavori di layout in cui il 5, 12, 13 di base è troppo piccolo.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Fattore di Scala di 10",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 10]]. Lati: [[a = 50]], [[b = 120]], [[c = 130]]. Area: [[A = 30(10^2) = 3000]] unità quadrate. Perimetro: [[P = 30(10) = 300]] unità. A questa dimensione i numeri restano esatti, che è uno dei vantaggi di lavorare con una terna intera.",
            },
            {
              "kind": "p",
              "text": "In tutti e otto gli esempi il modello vale: lati e perimetro crescono con [[k]], l'area cresce con [[k]] al quadrato, e il rapporto 5:12:13 non cambia mai.",
            },
          ],
        },
        "sec-right-angle": {
          "h2": "Perché il Triangolo 5-12-13 Mantiene Sempre un Angolo di 90 Gradi?",
          "blocks": [
            {
              "kind": "p",
              "text": "La scala non può rompere la verifica di Pitagora.",
            },
            {
              "kind": "p",
              "text": "I lati scalati sono [[[5k,\\quad 12k,\\quad 13k]]]",
            },
            {
              "kind": "p",
              "text": "Applica Pitagora: [[[(5k)^2 + (12k)^2 = (13k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Sviluppa: [[[25k^2 + 144k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[169k^2 = 169k^2]]]",
            },
            {
              "kind": "p",
              "text": "Entrambi i lati coincidono per ogni [[k]] positivo, perché il fattore [[k^2]] è comune a tutti e tre i termini. La scala allunga il triangolo senza cambiarne gli angoli, quindi l'angolo di 90 gradi sopravvive a qualsiasi dimensione. È la stessa idea dei triangoli simili: stessa forma, dimensioni diverse.",
            },
            {
              "kind": "p",
              "text": "Gli angoli non cambiano mai con la scala. A ogni [[k]] positivo gli angoli acuti restano circa 22.62 e 67.38 gradi, perché il seno dell'angolo minore è sempre [[5 / 13]] e il seno dell'angolo maggiore è sempre [[12 / 13]]. Solo le lunghezze dei lati si muovono, e si muovono tutte insieme.",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-angles.svg",
            "alt": "Diagramma degli angoli di un triangolo 5-12-13 che mostra l'angolo di 90 gradi e gli angoli acuti di circa 22.62 e 67.38 gradi",
            "caption": "Gli angoli acuti sono circa 22.62 e 67.38 gradi, e sommati danno 90 gradi.",
          },
        },
        "sec-euclid": {
          "h2": "Come si Genera la Terna 5-12-13 con la Formula di Euclide?",
          "blocks": [
            {
              "kind": "p",
              "text": "Due piccoli numeri, m = 3 e n = 2, generano l'intera terna.",
            },
            {
              "kind": "p",
              "text": "La formula di Euclide costruisce terne pitagoriche primitive da due interi positivi [[m]] e [[n]]: [[[a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2]]]",
            },
            {
              "kind": "p",
              "text": "Usa [[m = 3]] e [[n = 2]]: [[[a = 3^2 - 2^2 = 9 - 4 = 5]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 2(3)(2) = 12]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 3^2 + 2^2 = 9 + 4 = 13]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è il rapporto in riquadro [[[\\boxed{5:12:13}]]]",
            },
            {
              "kind": "p",
              "text": "La formula funziona quando [[m]] è maggiore di [[n]], i due numeri non hanno fattori comuni, e uno è pari mentre l'altro è dispari. Queste condizioni danno una terna primitiva, una che non può essere ridotta a una terna intera più piccola. La formula di Euclide è un extra avanzato: il calcolatore stesso ha bisogno solo di [[k]], ma la formula mostra da dove vengono 5, 12 e 13.",
            },
            {
              "kind": "p",
              "text": "Altre scelte di [[m]] e [[n]] generano altre terne. Con [[m = 2]] e [[n = 1]] la formula dà 3, 4 e 5. Con [[m = 4]] e [[n = 1]] dà 15, 8 e 17, che è la terna 8-15-17 in un ordine diverso. La terna 5-12-13 è il membro di questa famiglia che deriva da [[m = 3]] e [[n = 2]].",
            },
          ],
          "image": {
            "src": "five-twelve-thirteen-euclid.svg",
            "alt": "Diagramma di flusso della formula di Euclide con m uguale a 3 e n uguale a 2 che produce 5, 12 e 13",
            "caption": "m = 3 e n = 2 danno a = 5, b = 12 e c = 13.",
          },
        },
        "sec-applications": {
          "h2": "Applicazioni del Triangolo 5-12-13 in Geometria e Misurazione",
          "blocks": [
            {
              "kind": "p",
              "text": "Un angolo retto con numeri interi è utile ovunque servano angoli esatti.",
            },
            {
              "kind": "p",
              "text": "Nei compiti di geometria e nella pratica d'esame, la terna offre rapide verifiche dell'angolo retto senza goniometro: se tre lunghezze si adattano a 5:12:13, l'angolo tra i due lati più corti è di 90 gradi. Gli insegnanti la usano per esercizi sul teorema di Pitagora, problemi di similitudine tra triangoli e lavori di disegno in scala.",
            },
            {
              "kind": "p",
              "text": "Costruttori e falegnami usano versioni scalate per tracciare angoli retti: segna 5 unità lungo un bordo e 12 lungo l'altro, e la diagonale deve misurare 13. Topografi e disegnatori tecnici si basano sulla stessa idea a scale maggiori, con 10, 24, 26 o 25, 60, 65 quando il triangolo di base è troppo piccolo.",
            },
            {
              "kind": "p",
              "text": "Il rapporto aiuta anche nella modellizzazione matematica e nelle dimostrazioni in classe, dove i numeri interi esatti mantengono l'aritmetica pulita. Per la costruzione reale, l'accuratezza delle misurazioni e le condizioni del cantiere contano comunque, e questo rapporto non sostituisce il rilievo professionale o le norme edilizie.",
            },
          ],
        },
        "sec-vs-triples": {
          "h2": "Differenza tra 5-12-13 e Altre Terne Pitagoriche",
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni terna primitiva è un triangolo rettangolo, ma ognuna ha la sua forma.",
            },
            {
              "kind": "p",
              "text": "La tabella seguente confronta cinque terne primitive ben note. Tutte soddisfano il teorema di Pitagora, ma le loro proporzioni dei lati e gli angoli acuti differiscono, quindi ognuna crea una forma di triangolo diversa. Scalare una terna crea triangoli simili, mai una terna diversa: 10, 24, 26 è un 5-12-13 scalato, mentre 3, 4, 5 è una forma del tutto diversa.",
            },
            {
              "kind": "p",
              "text": "Il triangolo 5-12-13 è più lungo e più stretto del triangolo 3-4-5: il suo cateto maggiore è più del doppio del cateto minore, mentre 3-4-5 è più vicino al quadrato. Questa differenza si vede negli angoli, con 22.62 e 67.38 gradi qui contro 36.87 e 53.13 gradi per 3-4-5. Scopri di più nella pagina del <a href=\"/pythagorean-triples-calculator/\">calcolatore delle terne pitagoriche</a>.",
            },
            {
              "kind": "p",
              "text": "Solo le terne della tabella sono primitive, cioè i loro tre numeri non hanno divisori comuni maggiori di 1. Una terna scalata come 6, 8, 10 o 10, 24, 26 non è primitiva, perché tutti e tre i numeri si dividono per 2. Le terne primitive sono i membri di base di ogni famiglia, e ogni altro membro è una copia scalata di una di esse.",
            },
          ],
          "table": {
            "headers": [
              "Terna pitagorica",
              "Rapporto dei lati",
              "Ipotenusa",
            ],
            "rows": [
              [
                "3-4-5",
                "3:4:5",
                "5",
              ],
              [
                "5-12-13",
                "5:12:13",
                "13",
              ],
              [
                "8-15-17",
                "8:15:17",
                "17",
              ],
              [
                "7-24-25",
                "7:24:25",
                "25",
              ],
              [
                "9-40-41",
                "9:40:41",
                "41",
              ],
            ],
          },
        },
        "sec-vs-special": {
          "h2": "Differenza tra i Triangoli 5-12-13, 45-45-90 e 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "5-12-13 ha i suoi angoli, non gli angoli standard dei triangoli speciali.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 5-12-13 non è un triangolo 45-45-90 e non è un triangolo 30-60-90. I suoi angoli acuti sono circa 22.62 e 67.38 gradi, e i suoi cateti sono disuguali, quindi appartiene alla famiglia delle terne pitagoriche piuttosto che a una delle due famiglie ad angoli speciali.",
            },
            {
              "kind": "p",
              "text": "Usa il <a href=\"/45-45-90-triangle-calculator/\">calcolatore del triangolo 45-45-90</a> per i triangoli rettangoli isosceli e il <a href=\"/30-60-90-triangle-calculator/\">calcolatore del triangolo 30-60-90</a> per la famiglia 30-60-90. La pagina 5-12-13 è lo strumento giusto quando i lati seguono il rapporto 5:12:13.",
            },
            {
              "kind": "p",
              "text": "Per capire a quale famiglia appartiene un triangolo rettangolo, controlla i suoi angoli o il suo rapporto dei lati. Cateti uguali e angoli di 45 gradi significano 45-45-90. Angoli di 30 e 60 gradi significano 30-60-90. Lati nel rapporto 5:12:13, con angoli vicini a 22.62 e 67.38 gradi, significano un triangolo 5-12-13. Le tre famiglie non si sovrappongono mai.",
            },
          ],
          "table": {
            "headers": [
              "Caratteristica",
              "5-12-13",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Rapporto dei lati",
                "5:12:13",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Angoli",
                "22.62°, 67.38°, 90° circa",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Cateti uguali",
                "No",
                "Sì",
                "No",
              ],
              [
                "Proprietà principale",
                "Terna pitagorica",
                "Triangolo rettangolo isoscele",
                "Rapporto degli angoli speciali",
              ],
              [
                "Ipotenusa",
                "13k",
                "a√2",
                "2a",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "h2": "Errori Comuni nell'Uso del Calcolatore del Triangolo 5-12-13",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici errori compaiono continuamente nei problemi 5-12-13.",
            },
            {
              "kind": "steps",
              "steps": [
                "Trattare 13 come un cateto invece che come l'ipotenusa: 13 è il lato più lungo e si trova di fronte all'angolo di 90 gradi. [[c = 13k]] è sempre l'ipotenusa.",
                "Confondere il cateto minore con il cateto maggiore: [[a = 5k]] è il cateto minore e [[b = 12k]] è il cateto maggiore. Mantieni le etichette in ordine.",
                "Scalare solo uno o due lati: scalare solo i cateti rompe il rapporto e l'angolo retto. Applica lo stesso [[k]] a ogni lato.",
                "Confondere il fattore di scala con una lunghezza di lato: [[k]] è il moltiplicatore, non un lato. Con [[k = 2]] i lati sono 10, 24 e 26.",
                "Usare zero come fattore di scala valido: [[k = 0]] rende tutti e tre i lati zero, una figura degenere, non un triangolo. [[k]] deve essere maggiore di zero.",
                "Inserire un fattore di scala negativo: un [[k]] negativo dà lunghezze di lati negative, che non possono descrivere un triangolo. Inserisci solo un [[k]] positivo.",
                "Dimenticare di elevare k al quadrato nella formula dell'area: l'area cresce con [[k]] al quadrato. Con [[k = 3]] l'area è [[A = 30 \\times 9 = 270]], non 90.",
                "Confondere area e perimetro: l'area si misura in unità quadrate e usa [[A = 30k^2]], mentre il perimetro si misura in unità lineari e usa [[P = 30k]].",
                "Sommare solo due lati nel calcolo del perimetro: il perimetro include tutti e tre i lati, quindi [[P = 5k + 12k + 13k = 30k]].",
                "Mescolare le unità di misura: usa un'unica unità per tutti e tre i lati. Se i cateti sono in centimetri, l'area risulta in centimetri quadrati e il perimetro in centimetri.",
                "Pensare che funzionino solo 5, 12 e 13: qualsiasi insieme scalato come 10, 24, 26 o 15, 36, 39 è comunque un triangolo 5-12-13, perché il rapporto è lo stesso.",
                "Pensare che ogni triangolo rettangolo segua il rapporto 5:12:13: la maggior parte dei triangoli rettangoli ha altre lunghezze di lati. Il rapporto vale solo quando i lati si adattano a 5:12:13.",
                "Confondere le terne 5-12-13 e 3-4-5: 3, 4, 5 e 5, 12, 13 sono terne diverse con angoli diversi. Controlla il rapporto prima di scegliere una formula.",
                "Arrotondare le misure senza necessità: la terna dà numeri interi esatti, quindi tienili esatti. Arrotonda solo quando un fattore di scala come 1.5 impone un decimale, e dillo.",
              ],
            },
          ],
        },
        "sec-verify": {
          "h2": "Come Verificare un Triangolo 5-12-13 Scalato",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro verifiche rapide confermano un triangolo 5-12-13 scalato.",
            },
            {
              "kind": "h3",
              "text": "Verifica 1: Rapporto dei Lati",
            },
            {
              "kind": "p",
              "text": "I lati devono rispettare [[[a : b : c = 5 : 12 : 13]]]",
            },
            {
              "kind": "h3",
              "text": "Verifica 2: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "I cateti devono soddisfare [[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "h3",
              "text": "Verifica 3: Coerenza del Fattore di Scala",
            },
            {
              "kind": "p",
              "text": "Ogni lato diviso per il suo numero del rapporto deve dare lo stesso [[k]]: [[[\\frac{a}{5} = \\frac{b}{12} = \\frac{c}{13} = k]]]",
            },
            {
              "kind": "h3",
              "text": "Verifica 4: Ordine dei Lati",
            },
            {
              "kind": "p",
              "text": "I lati devono andare dal più corto al più lungo: [[[a < b < c]]]",
            },
            {
              "kind": "p",
              "text": "Usa 10, 24, 26 come esempio. Il rapporto è 10:24:26, che si riduce a 5:12:13, e la verifica di Pitagora dà [[10^2 + 24^2 = 100 + 576 = 676 = 26^2]]. La verifica del fattore di scala dà [[10 / 5 = 24 / 12 = 26 / 13 = 2]]. Tutte e quattro le verifiche passano, quindi le misure formano un triangolo 5-12-13 scalato.",
            },
            {
              "kind": "p",
              "text": "Se una verifica fallisce, rimisura o ricontrolla i calcoli prima di fidarti dei numeri. Una verifica del rapporto fallita di solito significa che un lato è stato scalato con un fattore diverso, e una verifica di Pitagora fallita di solito significa che il lato più lungo è stato scambiato per un cateto. Correggi il lato che rompe lo schema, poi ripeti tutte e quattro le verifiche.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Esercizi con Soluzioni",
          "blocks": [
            {
              "kind": "p",
              "text": "Risolvi tutti e otto i problemi su carta prima di leggere le soluzioni.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Scala con k = 2",
            },
            {
              "kind": "p",
              "text": "Scala un triangolo 5-12-13 usando [[k = 2]]. Trova le tre lunghezze dei lati, l'area e il perimetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Scala con k = 4",
            },
            {
              "kind": "p",
              "text": "Scala un triangolo 5-12-13 usando [[k = 4]]. Trova le tre lunghezze dei lati, l'area e il perimetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Area con k = 3",
            },
            {
              "kind": "p",
              "text": "Trova l'area di un triangolo 5-12-13 scalato con [[k = 3]], in unità quadrate.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Perimetro con k = 5",
            },
            {
              "kind": "p",
              "text": "Trova il perimetro di un triangolo 5-12-13 scalato con [[k = 5]], in unità.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova k dal Cateto Minore",
            },
            {
              "kind": "p",
              "text": "Il cateto minore di un triangolo 5-12-13 scalato è 25. Trova il fattore di scala [[k]], poi trova gli altri due lati.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Trova k dal Cateto Maggiore",
            },
            {
              "kind": "p",
              "text": "Il cateto maggiore di un triangolo 5-12-13 scalato è 48. Trova il fattore di scala [[k]], poi trova gli altri due lati.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: Trova k dall'Ipotenusa",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa di un triangolo 5-12-13 scalato è 78. Trova il fattore di scala [[k]], poi trova i due cateti.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: Verifica 15, 36 e 39",
            },
            {
              "kind": "p",
              "text": "Le lunghezze dei lati 15, 36 e 39 formano un triangolo 5-12-13 scalato? Verifica il rapporto e il teorema di Pitagora.",
            },
            {
              "kind": "h3",
              "text": "Soluzioni",
            },
            {
              "kind": "p",
              "text": "1. Lati 10, 24, 26; area 120 unità quadrate; perimetro 60 unità.",
            },
            {
              "kind": "p",
              "text": "2. Lati 20, 48, 52; area 480 unità quadrate; perimetro 120 unità.",
            },
            {
              "kind": "p",
              "text": "3. Area [[A = 30 \\times 9 = 270]] unità quadrate.",
            },
            {
              "kind": "p",
              "text": "4. Perimetro [[P = 30 \\times 5 = 150]] unità.",
            },
            {
              "kind": "p",
              "text": "5. [[k = 25 / 5 = 5]]; il cateto maggiore è 60 e l'ipotenusa è 65.",
            },
            {
              "kind": "p",
              "text": "6. [[k = 48 / 12 = 4]]; il cateto minore è 20 e l'ipotenusa è 52.",
            },
            {
              "kind": "p",
              "text": "7. [[k = 78 / 13 = 6]]; il cateto minore è 30 e il cateto maggiore è 72.",
            },
            {
              "kind": "p",
              "text": "8. Sì: [[15^2 + 36^2 = 225 + 1296 = 1521 = 39^2]], e 15:36:39 si riduce a 5:12:13, quindi [[k = 3]].",
            },
          ],
        },
      },
      "relatedHeading": "Calcolatori Correlati sui Triangoli Rettangoli",
      "relatedIntro": "Ogni calcolatore qui sotto gestisce un compito diverso sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alla misura di cui hai bisogno.",
      "relatedItems": [
        "Calcolatore delle Terne Pitagoriche",
        "Calcolatore del Triangolo 3-4-5",
        "Calcolatore dei Lati del Triangolo Rettangolo",
        "Calcolatore del Teorema di Pitagora",
        "Calcolatore dell'Area del Triangolo Rettangolo",
        "Calcolatore del Perimetro del Triangolo Rettangolo",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "question": "Che cos'è un triangolo 5-12-13?",
          "answer": "Un triangolo 5-12-13 è un triangolo rettangolo con lati di lunghezza 5, 12 e 13, o qualsiasi insieme scalato nello stesso rapporto. Il lato di lunghezza 13 è l'ipotenusa, e i lati di lunghezza 5 e 12 sono i cateti che si incontrano all'angolo retto.",
        },
        {
          "question": "Perché 5-12-13 è un triangolo rettangolo?",
          "answer": "Perché i suoi lati soddisfano il teorema di Pitagora: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]]. Quando i quadrati dei due lati più corti sommati danno il quadrato del lato più lungo, l'angolo opposto a quel lato è di 90 gradi.",
        },
        {
          "question": "Qual è il rapporto dei lati del triangolo 5-12-13?",
          "answer": "Il rapporto è 5:12:13: il cateto minore è 5 parti, il cateto maggiore è 12 parti e l'ipotenusa è 13 parti. La scala moltiplica ogni parte per lo stesso fattore [[k]], quindi il rapporto non cambia mai.",
        },
        {
          "question": "Come funziona il calcolatore del triangolo 5-12-13?",
          "answer": "Inserisci un fattore di scala positivo [[k]] e premi Calcola. Il calcolatore restituisce i lati scalati [[a = 5k]], [[b = 12k]] e [[c = 13k]], oltre all'area [[A = 30k^2]] e al perimetro [[P = 30k]].",
        },
        {
          "question": "Che cos'è il fattore di scala in un triangolo 5-12-13?",
          "answer": "Il fattore di scala [[k]] è il numero che moltiplica tutti e tre i lati del triangolo di base. Con [[k = 1]] ottieni il triangolo originale; valori maggiori lo ingrandiscono e valori tra 0 e 1 lo rimpiccioliscono.",
        },
        {
          "question": "Come calcolo i lati di un triangolo 5-12-13 scalato?",
          "answer": "Moltiplica ogni lato di base per [[k]]: il cateto minore è [[a = 5k]], il cateto maggiore è [[b = 12k]] e l'ipotenusa è [[c = 13k]]. Per [[k = 4]] i lati sono 20, 48 e 52.",
        },
        {
          "question": "Come calcolo la sua area?",
          "answer": "Usa [[A = 30k^2]]. L'area deriva dalla metà del prodotto dei cateti, [[A = (5k)(12k) / 2]]. Con [[k = 3]] l'area è 270 unità quadrate.",
        },
        {
          "question": "Come calcolo il suo perimetro?",
          "answer": "Usa [[P = 30k]]. Somma i tre lati scalati: [[P = 5k + 12k + 13k]]. Con [[k = 3]] il perimetro è 90 unità.",
        },
        {
          "question": "Posso usare 10-24-26 invece di 5-12-13?",
          "answer": "Sì. L'insieme 10, 24, 26 è il triangolo 5-12-13 scalato di [[k = 2]], quindi ha la stessa forma e gli stessi angoli. Qualsiasi multiplo di 5, 12 e 13 funziona allo stesso modo.",
        },
        {
          "question": "Come si genera la terna 5-12-13?",
          "answer": "La formula di Euclide con [[m = 3]] e [[n = 2]] dà [[a = 3^2 - 2^2 = 5]], [[b = 2(3)(2) = 12]] e [[c = 3^2 + 2^2 = 13]]. I valori 3 e 2 sono coprimi e hanno parità opposta, quindi la terna è primitiva.",
        },
        {
          "question": "Qual è la differenza tra 3-4-5 e 5-12-13?",
          "answer": "Entrambe sono terne pitagoriche primitive, ma le loro proporzioni differiscono: 3-4-5 ha angoli di circa 36.87 e 53.13 gradi, mentre 5-12-13 ha angoli di circa 22.62 e 67.38 gradi. Ogni terna crea una forma di triangolo diversa.",
        },
        {
          "question": "Ogni triangolo 5-12-13 scalato è un triangolo rettangolo?",
          "answer": "Sì. Per ogni [[k]] positivo i lati scalati soddisfano [[(5k)^2 + (12k)^2 = (13k)^2]], quindi il teorema di Pitagora vale e l'angolo opposto al lato più lungo resta di 90 gradi.",
        },
      ],
    },
};
