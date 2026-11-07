// threeFourFiveGuideTranslations.bit.ts: 3-4-5 Triangle
// Guide (Page 42 of 45) translation.
export const THREEFOURFIVE_B2_IT = {
  "it": {
      "meta": {
        "description": "Scala un triangolo 3-4-5 con questa calcolatrice: inserisci un fattore di scala positivo k per trovare i lati 3k, 4k e 5k, più l'area 6k al quadrato e il perimetro 12k.",
        "primaryKeyword": "3-4-5 Triangle Calculator",
        "slug": "3-4-5-triangle-calculator",
        "title": "Calcolatrice Triangolo 3-4-5 - Scala i Lati, Area, Perimetro",
      },
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcolatrice Triangolo 3-4-5",
        "sec-calculate": "Scala un Triangolo 3-4-5 e Calcola le sue Misure",
        "sec-what": "Che Cos'è un Triangolo 3-4-5?",
        "sec-pythagorean": "Perché 3-4-5 è una Terna Pitagorica?",
        "sec-sides": "I Tre Lati di un Triangolo 3-4-5",
        "sec-ratio": "Il Rapporto tra i Lati 3-4-5",
        "sec-scale-factor": "Che Cos'è il Fattore di Scala in un Triangolo 3-4-5?",
        "sec-leg-a": "Formula per Calcolare il Primo Cateto",
        "sec-leg-b": "Formula per Calcolare il Secondo Cateto",
        "sec-hypotenuse": "Formula per Calcolare l'Ipotenusa",
        "sec-area": "Come Calcolare l'Area di un Triangolo 3-4-5 Scalato",
        "sec-perimeter": "Come Calcolare il Perimetro di un Triangolo 3-4-5 Scalato",
        "sec-find-k": "Come Trovare il Fattore di Scala da un Lato Noto",
        "sec-step-example": "Esempio Passo Passo di Scalatura di un Triangolo 3-4-5",
        "sec-examples": "Esempi Svolti con Diversi Fattori di Scala",
        "sec-right-angle": "Perché il Triangolo 3-4-5 Mantiene Sempre un Angolo di 90 Gradi?",
        "sec-construction": "Come Usare la Regola 3-4-5 per Controllare un Angolo Retto",
        "sec-applications": "Applicazioni del Triangolo 3-4-5 in Edilizia",
        "sec-similar": "Relazione tra Triangoli Simili e il Rapporto 3-4-5",
        "sec-vs-special": "Differenza tra Triangoli 3-4-5, 45-45-90 e 30-60-90",
        "sec-mistakes": "Errori Comuni nell'Uso della Calcolatrice Triangolo 3-4-5",
        "sec-verify": "Come Verificare un Triangolo 3-4-5 Scalato",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-related": "Calcolatrici Correlate per Triangoli Rettangoli",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Scala un triangolo 3-4-5 e trova i suoi lati, l'area e il perimetro.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 è un triangolo rettangolo i cui lati seguono il rapporto [[3 : 4 : 5]]. È la terna pitagorica più famosa, perché i suoi lati interi soddisfano il teorema di Pitagora: [[3^2 + 4^2 = 5^2]], poiché [[9 + 16 = 25]]. Il lato di lunghezza 5 è l'ipotenusa, e i lati di lunghezza 3 e 4 sono i cateti.",
            },
            {
              "kind": "p",
              "text": "La calcolatrice scala quel triangolo di un fattore di scala positivo [[k]], così i lati scalati sono [[a = 3k]], [[b = 4k]] e [[c = 5k]]. Calcola anche l'area, [[A = 6k^2]], e il perimetro, [[P = 12k]], così un solo dato in ingresso dà tutti e cinque i risultati. Usa la <a href=\"/right-triangle-calculator/\">calcolatrice per triangoli rettangoli</a> per un triangolo rettangolo generico.",
            },
            {
              "kind": "p",
              "text": "Per esempio, con [[k = 2]] i lati diventano [[a = 6]], [[b = 8]] e [[c = 10]], l'area è [[A = 24]] unità quadrate e il perimetro è [[P = 24]] unità.",
            },
          ],
          "h2": "Calcolatrice Triangolo 3-4-5",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Una modalità, un dato in ingresso e cinque risultati.",
            },
            {
              "kind": "p",
              "text": "La calcolatrice ha una sola modalità: scalare un triangolo 3-4-5. Inserisci un fattore di scala positivo [[k]] e fai clic su Calcola, e ti restituirà le tre lunghezze dei lati scalati, l'area e il perimetro. La tabella seguente elenca ogni misura con la sua formula.",
            },
            {
              "kind": "p",
              "text": "Il fattore di scala [[k]] moltiplica ogni lato originale. Con [[k = 1]] ottieni il triangolo 3-4-5 originale. Un valore superiore a 1 lo ingrandisce, e un valore tra 0 e 1 lo rimpicciolisce. La calcolatrice chiede [[k]] perché il rapporto fissa la forma: una volta noto [[k]], ogni misura ne consegue.",
            },
            {
              "kind": "p",
              "text": "Inserisci solo un numero positivo. Se [[k = 0]], tutti e tre i lati diventano zero, il che è una figura degenere e non un triangolo, e un [[k]] negativo non può dare lunghezze dei lati valide. Dopo il calcolo, usa Reimposta per azzerare il campo prima di iniziare un nuovo problema.",
            },
          ],
          "h2": "Scala un Triangolo 3-4-5 e Calcola le sue Misure",
          "table": {
            "headers": [
              "Misura",
              "Formula",
              "Risultato",
            ],
            "rows": [
              [
                "Primo cateto",
                "3k",
                "Lato scalato a",
              ],
              [
                "Secondo cateto",
                "4k",
                "Lato scalato b",
              ],
              [
                "Ipotenusa",
                "5k",
                "Lato scalato c",
              ],
              [
                "Area",
                "6k²",
                "Area del triangolo",
              ],
              [
                "Perimetro",
                "12k",
                "Perimetro del triangolo",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 prende il nome dalle lunghezze dei suoi tre lati.",
            },
            {
              "kind": "p",
              "text": "È un triangolo rettangolo i cui lati seguono il rapporto [[3 : 4 : 5]]. Il lato più lungo, 5, è l'ipotenusa, e si trova di fronte all'angolo di 90 gradi. Gli altri due lati, 3 e 4, sono i cateti, e si incontrano all'angolo retto. Nel triangolo ABC, l'angolo C è di 90°, il lato [[a]] è il cateto più corto, di lunghezza 3, il lato [[b]] è il cateto più lungo, di lunghezza 4, e il lato [[c]] è l'ipotenusa, di lunghezza 5.",
            },
            {
              "kind": "p",
              "text": "Si chiama terna pitagorica perché 3, 4 e 5 sono numeri interi che soddisfano [[a^2 + b^2 = c^2]]. Quella proprietà dei numeri interi rende il triangolo utile: costruttori, insegnanti e studenti possono controllare un angolo retto con misure intere ordinarie, senza radici quadrate o decimali. È la terna pitagorica più piccola, e ogni copia scalata, come 6-8-10, lo è anch'essa.",
            },
          ],
          "h2": "Che Cos'è un Triangolo 3-4-5?",
          "image": {
            "alt": "Triangolo rettangolo 3-4-5 ABC etichettato con cateto più corto a uguale a 3, cateto più lungo b uguale a 4, ipotenusa c uguale a 5 e un segno di angolo retto",
            "caption": "Triangolo ABC: i cateti a = 3 e b = 4 si incontrano all'angolo retto, e l'ipotenusa è c = 5.",
            "src": "three-four-five-main.svg",
          },
        },
        "sec-pythagorean": {
          "blocks": [
            {
              "kind": "p",
              "text": "I numeri 3, 4 e 5 soddisfano il teorema di Pitagora esattamente.",
            },
            {
              "kind": "p",
              "text": "Il teorema di Pitagora afferma che in un triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci le lunghezze dei lati 3-4-5:",
            },
            {
              "kind": "p",
              "text": "[[[3^2 + 4^2 = 5^2]]]",
            },
            {
              "kind": "p",
              "text": "Calcola ogni quadrato:",
            },
            {
              "kind": "p",
              "text": "[[[9 + 16 = 25]]]",
            },
            {
              "kind": "p",
              "text": "Entrambi i membri sono uguali a 25, quindi l'uguaglianza è verificata. Una terna pitagorica è un insieme di tre numeri interi che soddisfa questa equazione, e 3-4-5 è la più piccola. L'uguaglianza funziona anche al contrario: se un triangolo ha lati di lunghezza 3, 4 e 5, l'angolo opposto al lato di lunghezza 5 deve essere di 90°.",
            },
            {
              "kind": "p",
              "text": "Il lato di lunghezza 5 deve essere l'ipotenusa perché è il lato più lungo. I lati di lunghezza 3 e 4 devono essere i cateti, perché si incontrano all'angolo retto. La <a href=\"/pythagorean-triples-calculator/\">calcolatrice delle terne pitagoriche</a> elenca altre terne intere, tra cui 5-12-13, una terna diversa.",
            },
          ],
          "h2": "Perché 3-4-5 è una Terna Pitagorica?",
          "image": {
            "alt": "Diagramma pitagorico del triangolo 3-4-5 che mostra 3 al quadrato più 4 al quadrato uguale a 5 al quadrato, con 9 più 16 uguale a 25",
            "caption": "3² + 4² = 5², poiché 9 + 16 = 25, quindi 3-4-5 è una terna pitagorica.",
            "src": "three-four-five-pythagoras.svg",
          },
        },
        "sec-sides": {
          "blocks": [
            {
              "kind": "p",
              "text": "Due cateti si incontrano all'angolo retto, e l'ipotenusa si trova di fronte a esso.",
            },
            {
              "kind": "p",
              "text": "Il cateto più corto [[a]] ha lunghezza 3 nel triangolo di base. È il lato BC nel triangolo ABC, e si trova di fronte all'angolo A, di circa 36.87°. Il cateto più lungo [[b]] ha lunghezza 4, è il lato AC, e si trova di fronte all'angolo B, di circa 53.13°. I due cateti si incontrano nel vertice C, dove formano l'angolo di 90°.",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa [[c]] ha lunghezza 5, è il lato AB, e si trova di fronte all'angolo di 90°. È il lato più lungo, perché l'angolo più grande si trova sempre di fronte al lato più lungo. Quando il triangolo viene scalato, i ruoli non cambiano mai: [[a]] resta il cateto più corto, [[b]] resta il cateto più lungo e [[c]] resta l'ipotenusa.",
            },
          ],
          "h2": "I Tre Lati di un Triangolo 3-4-5",
          "table": {
            "headers": [
              "Lato",
              "Angolo opposto",
              "Lunghezza",
            ],
            "rows": [
              [
                "Cateto più corto a (BC)",
                "36.87°",
                "3",
              ],
              [
                "Cateto più lungo b (AC)",
                "53.13°",
                "4",
              ],
              [
                "Ipotenusa c (AB)",
                "90°",
                "5, lato più lungo",
              ],
            ],
          },
        },
        "sec-ratio": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il rapporto 3:4:5 fissa la forma di ogni triangolo 3-4-5.",
            },
            {
              "kind": "p",
              "text": "Il rapporto tra i lati di un triangolo 3-4-5 è:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 3 : 4 : 5]]]",
            },
            {
              "kind": "p",
              "text": "Ogni parte del rapporto descrive un lato. Il cateto più corto rappresenta 3 unità proporzionali, il cateto più lungo rappresenta 4 unità proporzionali e l'ipotenusa rappresenta 5 unità proporzionali. Scritti con il fattore di scala [[k]], i tre lati sono [[a = 3k]], [[b = 4k]] e [[c = 5k]], quindi il rapporto in forma scalata è [[3k : 4k : 5k]].",
            },
            {
              "kind": "p",
              "text": "Il rapporto non cambia quando il triangolo viene ingrandito o ridotto, perché moltiplicare tutti e tre i lati per lo stesso numero lascia invariate le loro proporzioni. Gli insiemi 3, 4, 5 e 6, 8, 10 e 9, 12, 15 e 15, 20, 25 rappresentano tutti la stessa forma di triangolo a dimensioni diverse.",
            },
          ],
          "h2": "Il Rapporto tra i Lati 3-4-5",
          "image": {
            "alt": "Tre triangoli 3-4-5 simili di dimensioni diverse, etichettati 3-4-5, 6-8-10 e 9-12-15, con le stesse proporzioni",
            "caption": "3-4-5, 6-8-10 e 9-12-15 hanno la stessa forma e lo stesso rapporto 3:4:5.",
            "src": "three-four-five-scaled.svg",
          },
        },
        "sec-scale-factor": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il fattore di scala moltiplica ogni lato per lo stesso numero.",
            },
            {
              "kind": "p",
              "text": "Un fattore di scala [[k]] moltiplica tutte e tre le lunghezze originali dei lati per lo stesso numero positivo. I lati scalati sono:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k, \\quad b = 4k, \\quad c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Con [[k = 1]] ottieni il triangolo originale, 3, 4, 5. Un valore di [[k]] maggiore di 1 lo ingrandisce, e un valore tra 0 e 1 lo riduce, per esempio [[k = 0.5]] dà 1.5, 2, 2.5. Il fattore di scala deve essere positivo: zero non dà alcun triangolo, e un valore negativo non può dare lunghezze dei lati valide.",
            },
            {
              "kind": "p",
              "text": "Il fattore di scala cambia la dimensione, non la forma. Tutte le lunghezze corrispondenti dei lati restano proporzionali, gli angoli restano gli stessi e il rapporto resta 3:4:5. La tabella seguente mostra come i lati, l'area e il perimetro cambiano con [[k]]: il perimetro cresce con [[k]] mentre l'area cresce con [[k]] al quadrato.",
            },
          ],
          "h2": "Che Cos'è il Fattore di Scala in un Triangolo 3-4-5?",
          "image": {
            "alt": "Triangolo 3-4-5 scalato con fattore di scala k uguale a 2, con lati etichettati a uguale a 6, b uguale a 8 e c uguale a 10",
            "caption": "Con k = 2, i lati sono a = 6, b = 8 e c = 10.",
            "src": "three-four-five-scale-factor.svg",
          },
          "table": {
            "headers": [
              "Fattore di scala k",
              "Lati",
              "Area",
              "Perimetro",
            ],
            "rows": [
              [
                "0.5",
                "1.5, 2, 2.5",
                "1.5",
                "6",
              ],
              [
                "1",
                "3, 4, 5",
                "6",
                "12",
              ],
              [
                "2",
                "6, 8, 10",
                "24",
                "24",
              ],
              [
                "3",
                "9, 12, 15",
                "54",
                "36",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto più corto è tre volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[a = 3k]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[a]] è il cateto più corto e [[k]] è il fattore di scala. La formula è una lettura diretta del rapporto: il cateto più corto rappresenta 3 unità per ogni unità di [[k]], quindi moltiplicare 3 per [[k]] dà la lunghezza scalata. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[a = 3 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 12]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è una lunghezza di lato scalata, non un angolo e non un fattore di scala. È sempre più corto degli altri due lati, perché 3 è la parte più piccola del rapporto 3:4:5, e resta il cateto più corto a ogni fattore di scala positivo.",
            },
          ],
          "h2": "Formula per Calcolare il Primo Cateto",
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Il cateto più lungo è quattro volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[b = 4k]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[b]] è il cateto più lungo e [[k]] è il fattore di scala. Il cateto più lungo rappresenta 4 unità per ogni unità di [[k]], quindi moltiplicare 4 per [[k]] dà la lunghezza scalata. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[b = 4 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 16]]]",
            },
            {
              "kind": "p",
              "text": "Questo lato resta più lungo del primo cateto a ogni fattore di scala positivo, perché 4 è maggiore di 3 ed entrambi i lati sono moltiplicati per lo stesso [[k]]. Resta anche più corto dell'ipotenusa, perché 4 è minore di 5. Tieni i due cateti nell'ordine giusto: [[a]] è il lato 3 e [[b]] è il lato 4.",
            },
          ],
          "h2": "Formula per Calcolare il Secondo Cateto",
        },
        "sec-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'ipotenusa è cinque volte il fattore di scala.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5k]]]",
            },
            {
              "kind": "p",
              "text": "Qui [[c]] è l'ipotenusa e [[k]] è il fattore di scala. L'ipotenusa rappresenta 5 unità per ogni unità di [[k]], quindi moltiplicare 5 per [[k]] dà la lunghezza scalata. Usa [[k = 4]]:",
            },
            {
              "kind": "p",
              "text": "[[[c = 5 \\times 4]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 20]]]",
            },
            {
              "kind": "p",
              "text": "L'ipotenusa resta il lato più lungo a ogni fattore di scala positivo, perché 5 è la parte più grande del rapporto. Controllala rispetto ai cateti: con [[k = 4]] i lati sono 12, 16 e 20, e [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], quindi il teorema di Pitagora conferma il risultato.",
            },
          ],
          "h2": "Formula per Calcolare l'Ipotenusa",
        },
        "sec-area": {
          "blocks": [
            {
              "kind": "p",
              "text": "L'area usa i due cateti, e il fattore di scala è elevato al quadrato.",
            },
            {
              "kind": "p",
              "text": "L'area di qualsiasi triangolo rettangolo è la metà del prodotto dei suoi due cateti, perché i cateti fungono da base e da altezza perpendicolare:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci i cateti scalati, [[a = 3k]] e [[b = 4k]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{(3k)(4k)}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Semplifica:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6k^2]]]",
            },
            {
              "kind": "p",
              "text": "La divisione per due è necessaria perché un triangolo copre la metà del rettangolo formato dai suoi due cateti. Il fattore [[k]] è elevato al quadrato perché entrambi i cateti portano un fattore [[k]]. L'area si misura in unità quadrate. Raddoppiare il fattore di scala quadruplica l'area: con [[k = 2]] l'area è di 24 unità quadrate, quattro volte le 6 unità quadrate a [[k = 1]]. Per un triangolo rettangolo generico, usa invece la <a href=\"/right-triangle-area-calculator/\">calcolatrice dell'area del triangolo rettangolo</a>.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[A = 6(3^2)]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 54 \\text{ square units}]]]",
            },
          ],
          "h2": "Come Calcolare l'Area di un Triangolo 3-4-5 Scalato",
          "image": {
            "alt": "Diagramma dell'area del triangolo 3-4-5 con base 3k, altezza 4k e area 6k al quadrato, che mostra che k uguale a 2 dà 24 unità quadrate",
            "caption": "Area da base 3k e altezza 4k: A = 6k², e k = 2 dà 24 unità quadrate.",
            "src": "three-four-five-area.svg",
          },
        },
        "sec-perimeter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Somma tutti e tre i lati, e il perimetro scala con k.",
            },
            {
              "kind": "p",
              "text": "Il perimetro è la lunghezza totale intorno al triangolo:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sostituisci i lati scalati:",
            },
            {
              "kind": "p",
              "text": "[[[P = 3k + 4k + 5k]]]",
            },
            {
              "kind": "p",
              "text": "Semplifica:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12k]]]",
            },
            {
              "kind": "p",
              "text": "Tutti e tre i lati devono essere sommati, perché il perimetro percorre l'intero contorno. Tralasciare un lato qualsiasi dà una distanza più corta che non è il perimetro. Il perimetro scala direttamente con [[k]], quindi raddoppiare [[k]] raddoppia il perimetro, a differenza dell'area, che quadruplica. Il perimetro è in unità lineari, mai in unità quadrate. Per un triangolo rettangolo generico, usa la <a href=\"/right-triangle-perimeter-calculator/\">calcolatrice del perimetro del triangolo rettangolo</a>.",
            },
            {
              "kind": "p",
              "text": "Usa [[k = 3]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = 12 \\times 3]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = 36 \\text{ units}]]]",
            },
          ],
          "h2": "Come Calcolare il Perimetro di un Triangolo 3-4-5 Scalato",
          "image": {
            "alt": "Diagramma del perimetro del triangolo 3-4-5 che mostra P uguale a 3k più 4k più 5k uguale a 12k, con k uguale a 2 che dà 24 unità",
            "caption": "Perimetro: P = 3k + 4k + 5k = 12k, e k = 2 dà 24 unità.",
            "src": "three-four-five-perimeter.svg",
          },
        },
        "sec-find-k": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dividi un lato noto per la sua parte del rapporto.",
            },
            {
              "kind": "p",
              "text": "La calcolatrice accetta [[k]] direttamente, quindi queste equazioni sono calcoli manuali che ti aiutano a trovare [[k]] quando conosci già un lato. Dividi il lato noto per il numero che quel lato rappresenta nel rapporto 3:4:5. Se il cateto più corto è noto:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{a}{3}]]]",
            },
            {
              "kind": "p",
              "text": "Se il cateto più lungo è noto:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{b}{4}]]]",
            },
            {
              "kind": "p",
              "text": "Se l'ipotenusa è nota:",
            },
            {
              "kind": "p",
              "text": "[[[k = \\frac{c}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Tre brevi esempi: il cateto più corto [[a = 12]] dà [[k = 12 / 3 = 4]]; il cateto più lungo [[b = 20]] dà [[k = 20 / 4 = 5]]; l'ipotenusa [[c = 30]] dà [[k = 30 / 5 = 6]]. Una volta ottenuto [[k]], inseriscilo nella calcolatrice. La calcolatrice stessa non accetta una lunghezza di lato per trovare [[k]] al tuo posto.",
            },
          ],
          "h2": "Come Trovare il Fattore di Scala da un Lato Noto",
        },
        "sec-step-example": {
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
                "Trova il primo cateto: [[a = 3k = 3 \\times 2 = 6]].",
                "Trova il secondo cateto: [[b = 4k = 4 \\times 2 = 8]].",
                "Trova l'ipotenusa: [[c = 5k = 5 \\times 2 = 10]].",
                "Trova l'area: [[A = 6k^2 = 6 \\times 4 = 24]] unità quadrate.",
                "Trova il perimetro: [[P = 12k = 12 \\times 2 = 24]] unità.",
              ],
            },
            {
              "kind": "p",
              "text": "Il nuovo triangolo mantiene le proporzioni originali 3:4:5: 6, 8 e 10 sono tutti il doppio di 3, 4 e 5. Controlla l'angolo retto con Pitagora: [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]]. L'area e il perimetro condividono qui il numero 24, ma misurano cose diverse.",
            },
          ],
          "h2": "Esempio Passo Passo di Scalatura di un Triangolo 3-4-5",
          "table": {
            "headers": [
              "Misura",
              "Valore",
            ],
            "rows": [
              [
                "Primo cateto a",
                "6",
              ],
              [
                "Secondo cateto b",
                "8",
              ],
              [
                "Ipotenusa c",
                "10",
              ],
              [
                "Area A",
                "24 unità quadrate",
              ],
              [
                "Perimetro P",
                "24 unità",
              ],
            ],
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Otto esempi svolti, dal triangolo originale fino a k = 10.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Triangolo Originale, k = 1",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 1]]. Lati: [[a = 3]], [[b = 4]], [[c = 5]]. Area: [[A = 6(1^2) = 6]] unità quadrate. Perimetro: [[P = 12(1) = 12]] unità.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Fattore di Scala di 2",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 2]]. Lati: [[a = 6]], [[b = 8]], [[c = 10]]. Area: [[A = 6(2^2) = 24]] unità quadrate. Perimetro: [[P = 12(2) = 24]] unità. Raddoppiare [[k]] raddoppia i lati e il perimetro, e quadruplica l'area.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Fattore di Scala di 3",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 3]]. Lati: [[a = 9]], [[b = 12]], [[c = 15]]. Area: [[A = 6(3^2) = 54]] unità quadrate. Perimetro: [[P = 12(3) = 36]] unità.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Fattore di Scala di 5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 5]]. Lati: [[a = 15]], [[b = 20]], [[c = 25]]. Area: [[A = 6(5^2) = 150]] unità quadrate. Perimetro: [[P = 12(5) = 60]] unità. Questo triangolo 15-20-25 è una misura comune nel tracciamento in cantiere.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Fattore di Scala di 0.5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 0.5]]. Lati: [[a = 1.5]], [[b = 2]], [[c = 2.5]]. Area: [[A = 6(0.5^2) = 1.5]] unità quadrate. Perimetro: [[P = 12(0.5) = 6]] unità. Un fattore di scala inferiore a 1 rimpicciolisce il triangolo.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Fattore di Scala di 1.5",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 1.5]]. Lati: [[a = 4.5]], [[b = 6]], [[c = 7.5]]. Area: [[A = 6(1.5^2) = 13.5]] unità quadrate. Perimetro: [[P = 12(1.5) = 18]] unità. I fattori di scala decimali funzionano esattamente come quelli interi.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Fattore di Scala di 4",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 4]]. Lati: [[a = 12]], [[b = 16]], [[c = 20]]. Area: [[A = 6(4^2) = 96]] unità quadrate. Perimetro: [[P = 12(4) = 48]] unità.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Fattore di Scala di 10",
            },
            {
              "kind": "p",
              "text": "Dato [[k = 10]]. Lati: [[a = 30]], [[b = 40]], [[c = 50]]. Area: [[A = 6(10^2) = 600]] unità quadrate. Perimetro: [[P = 12(10) = 120]] unità. L'area è cresciuta di un fattore 100, mentre i lati sono cresciuti di un fattore 10.",
            },
            {
              "kind": "p",
              "text": "In tutti e otto gli esempi, lo schema non cambia mai: i lati crescono con [[k]], il perimetro cresce con [[k]] e l'area cresce con [[k]] al quadrato.",
            },
          ],
          "h2": "Esempi Svolti con Diversi Fattori di Scala",
        },
        "sec-right-angle": {
          "blocks": [
            {
              "kind": "p",
              "text": "La scalatura non rompe mai la relazione pitagorica.",
            },
            {
              "kind": "p",
              "text": "I lati scalati sono [[3k]], [[4k]] e [[5k]]. Applica loro il teorema di Pitagora:",
            },
            {
              "kind": "p",
              "text": "[[[(3k)^2 + (4k)^2 = (5k)^2]]]",
            },
            {
              "kind": "p",
              "text": "Espandi ogni quadrato:",
            },
            {
              "kind": "p",
              "text": "[[[9k^2 + 16k^2 = 25k^2]]]",
            },
            {
              "kind": "p",
              "text": "Entrambi i membri sono uguali a [[25k^2]], quindi la relazione vale per ogni [[k]] positivo. Il fattore [[k^2]] compare in entrambi i membri, ed è per questo che la scalatura non può cambiare l'angolo. I due angoli acuti restano a circa 36.87° e 53.13°, e la loro somma resta a 90°, quindi il terzo angolo resta a esattamente 90°.",
            },
            {
              "kind": "p",
              "text": "Questa è la stessa idea della similitudine: ogni triangolo 3-4-5 scalato è simile all'originale, con angoli corrispondenti uguali e lati proporzionali. Un triangolo con lati 6, 8, 10 ha gli stessi angoli di uno con lati 3, 4, 5.",
            },
          ],
          "h2": "Perché il Triangolo 3-4-5 Mantiene Sempre un Angolo di 90 Gradi?",
        },
        "sec-construction": {
          "blocks": [
            {
              "kind": "p",
              "text": "Segna 3, misura 4 e controlla che la diagonale sia 5.",
            },
            {
              "kind": "p",
              "text": "I costruttori usano il metodo 3-4-5 per controllare un angolo di 90 gradi senza una squadra. Parti dall'angolo e segna 3 unità lungo un lato, poi segna 4 unità lungo il lato adiacente. Misura la distanza tra i due estremi segnati: se è di 5 unità, l'angolo è di 90 gradi, con l'accuratezza della misurazione.",
            },
            {
              "kind": "p",
              "text": "Un esempio pratico usa i piedi: 3 piedi in una direzione, 4 piedi nella direzione adiacente e una diagonale di 5 piedi. Il controllo è [[3^2 + 4^2 = 5^2]], poiché [[9 + 16 = 25]]. Se la diagonale è più di 5 piedi, l'angolo è più ampio di 90 gradi; se è meno, è più stretto.",
            },
            {
              "kind": "p",
              "text": "I multipli più grandi funzionano meglio su tracciati più grandi, perché una base più lunga rende un piccolo errore di segnatura una parte più piccola della misurazione. Usa 6-8-10, 9-12-15, 12-16-20 o 15-20-25 piedi, mantenendo la stessa unità in tutte e tre le misurazioni.",
            },
            {
              "kind": "p",
              "text": "Il metodo controlla la relazione dell'angolo retto quando le misurazioni sono accurate. Errori, superfici irregolari, cedimento del nastro e imprecisioni di segnatura possono influire sul risultato, quindi non affermare che garantisca una perfetta accuratezza costruttiva. Tieni il nastro livellato e teso, e ripeti il controllo dall'altro angolo dove il tracciato lo consente.",
            },
          ],
          "h2": "Come Usare la Regola 3-4-5 per Controllare un Angolo Retto",
          "image": {
            "alt": "Tracciato in cantiere che mostra un angolo con 3 piedi segnati in una direzione, 4 piedi nella direzione adiacente e una diagonale di 5 piedi con un segno di angolo retto",
            "caption": "Segna 3 piedi in un senso e 4 piedi nell'altro: una diagonale di 5 piedi significa un angolo retto.",
            "src": "three-four-five-construction.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "La regola 3-4-5 si presenta ovunque conti un angolo retto.",
            },
            {
              "kind": "p",
              "text": "Controllare gli angoli retti è l'uso principale: un costruttore segna 3 e 4 unità da un angolo e controlla la diagonale di 5 unità prima di fissare un telaio in posizione. Il tracciamento delle fondazioni usa lo stesso controllo a ogni angolo, così le pareti partono in squadra.",
            },
            {
              "kind": "p",
              "text": "Il tracciamento delle planimetrie, il controllo di stanze in squadra, la costruzione di terrazze, l'installazione di patii e la posa delle piastrelle dipendono tutti da angoli retti, e il metodo funziona per ciascuno di essi alla scala adatta al lavoro. Il tracciamento di recinzioni, la falegnameria, il giardinaggio e il rilevamento topografico usano lo stesso controllo per gli angoli retti.",
            },
            {
              "kind": "p",
              "text": "Usa misure realistiche per il lavoro, come 3-4-5 piedi per un piccolo telaio o 9-12-15 piedi per un angolo di fondazione. Il metodo è un controllo pratico, non un sostituto dei rilievi professionali o dei requisiti costruttivi.",
            },
          ],
          "h2": "Applicazioni del Triangolo 3-4-5 in Edilizia",
        },
        "sec-similar": {
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni triangolo 3-4-5 scalato è simile all'originale.",
            },
            {
              "kind": "p",
              "text": "I triangoli simili hanno la stessa forma ma dimensioni diverse: i loro angoli corrispondenti sono uguali e i loro lati corrispondenti sono proporzionali. I triangoli 3-4-5 e 6-8-10 hanno angoli identici, circa 36.87°, 53.13° e 90°, e ogni lato del secondo è esattamente il doppio del lato corrispondente del primo.",
            },
            {
              "kind": "p",
              "text": "Il fattore di scala cambia la dimensione mentre la forma resta invariata. Tutti i rapporti tra i lati restano 3:4:5, quindi [[a : b : c = 3 : 4 : 5]] vale per l'originale e per ogni copia scalata. Ecco perché la calcolatrice può descrivere qualsiasi triangolo 3-4-5 scalato con un solo numero, [[k]].",
            },
          ],
          "h2": "Relazione tra Triangoli Simili e il Rapporto 3-4-5",
        },
        "sec-vs-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tre triangoli rettangoli, tre rapporti tra i lati diversi.",
            },
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 non è automaticamente un triangolo 45-45-90 o 30-60-90. Tutti e tre sono triangoli rettangoli, ma i loro angoli e rapporti tra i lati differiscono, quindi le loro formule non possono essere scambiate. Il triangolo 3-4-5 ha cateti disuguali e lati interi, il triangolo 45-45-90 è isoscele con un'ipotenusa di [[a\\sqrt{2}]], e il triangolo 30-60-90 ha un'ipotenusa doppia del suo cateto corto. La <a href=\"/special-right-triangle-calculator/\">calcolatrice per triangoli rettangoli speciali</a> copre i casi 45-45-90 e 30-60-90, mentre la <a href=\"/5-12-13-triangle-calculator/\">calcolatrice per triangoli 5-12-13</a> copre una terna pitagorica diversa.",
            },
            {
              "kind": "p",
              "text": "La tabella seguente confronta i tre triangoli fianco a fianco. Conferma prima gli angoli, poi scegli il rapporto che corrisponde a essi: il rapporto sbagliato dà un'ipotenusa sbagliata e un'area sbagliata.",
            },
          ],
          "h2": "Differenza tra Triangoli 3-4-5, 45-45-90 e 30-60-90",
          "image": {
            "alt": "Confronto delle terne pitagoriche 3-4-5, 6-8-10 e 5-12-13, che mostra che 6-8-10 è un 3-4-5 scalato mentre 5-12-13 è una terna diversa",
            "caption": "6-8-10 è un 3-4-5 scalato, mentre 5-12-13 è una terna pitagorica diversa.",
            "src": "three-four-five-triples.svg",
          },
          "table": {
            "headers": [
              "Caratteristica",
              "3-4-5",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Rapporto tra i lati",
                "3:4:5",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Angoli",
                "36.87°, 53.13°, 90°",
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
                "Ipotenusa",
                "5k",
                "a√2",
                "2a",
              ],
              [
                "Proprietà principale",
                "Terna pitagorica",
                "Triangolo rettangolo isoscele",
                "Rapporto speciale degli angoli",
              ],
              [
                "Focus della calcolatrice",
                "Scalatura",
                "Calcoli sui triangoli speciali",
                "Calcoli sui triangoli speciali",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quattordici errori si presentano più e più volte nei problemi 3-4-5.",
            },
            {
              "kind": "steps",
              "steps": [
                "Moltiplicare solo un lato per il fattore di scala: con [[k = 2]] i lati sono 6, 8 e 10, non 6, 4 e 5. Scala tutti e tre i lati per lo stesso [[k]].",
                "Dimenticare di scalare tutti e tre i lati allo stesso modo: scalare solo i cateti rompe il rapporto e l'angolo retto. Applica lo stesso [[k]] a ogni lato.",
                "Trattare 5 come un cateto invece che come l'ipotenusa: 5 è il lato più lungo e si trova di fronte all'angolo di 90°. [[c = 5k]] è sempre l'ipotenusa.",
                "Confondere il fattore di scala con una lunghezza di lato: [[k]] è il moltiplicatore, non un lato. Con [[k = 2]] i lati sono 6, 8 e 10.",
                "Usare zero come fattore di scala valido: [[k = 0]] rende tutti e tre i lati zero, una figura degenere, non un triangolo. [[k]] deve essere maggiore di zero.",
                "Inserire un fattore di scala negativo: un [[k]] negativo dà lunghezze dei lati negative, che non possono descrivere un triangolo. Inserisci solo un [[k]] positivo.",
                "Dimenticare di elevare k al quadrato nella formula dell'area: l'area cresce con [[k]] al quadrato. Con [[k = 3]], [[A = 6 \\times 9 = 54]], non 18.",
                "Confondere l'area con il perimetro: l'area è in unità quadrate e il perimetro è in unità lineari. Con [[k = 2]] entrambi sono uguali a 24, ma misurano cose diverse.",
                "Sommare solo due lati nel calcolo del perimetro: con [[k = 2]], [[6 + 8 = 14]] tralascia l'ipotenusa. Somma tutti e tre i lati.",
                "Mescolare le unità di misura: un cateto in piedi e una diagonale in pollici non possono essere combinati direttamente. Converti prima ogni misura in un'unica unità.",
                "Supporre che solo 3, 4 e 5 funzionino: qualsiasi copia scalata, come 6-8-10 o 9-12-15, è un triangolo 3-4-5 valido.",
                "Supporre che ogni triangolo rettangolo segua il rapporto 3:4:5: la maggior parte dei triangoli rettangoli ha altri rapporti. Conferma il rapporto prima di usare le formule.",
                "Confondere un triangolo 3-4-5 con un triangolo 45-45-90: un triangolo 3-4-5 ha angoli di circa 36.87° e 53.13°, non due angoli di 45°.",
                "Arrotondare le misure inutilmente: arrotondare presto porta gli errori nei passaggi successivi. Arrotonda solo la risposta finale.",
              ],
            },
          ],
          "h2": "Errori Comuni nell'Uso della Calcolatrice Triangolo 3-4-5",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro controlli rapidi individuano quasi ogni errore.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: Rapporto tra i Lati",
            },
            {
              "kind": "p",
              "text": "Conferma [[a : b : c = 3 : 4 : 5]]. Qui [[6 : 8 : 10]] si divide per 2 e dà [[3 : 4 : 5]], quindi il controllo è superato. Se i lati non si riducono a 3:4:5, non sono un triangolo 3-4-5 scalato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: Teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Conferma [[a^2 + b^2 = c^2]]. Qui [[6^2 + 8^2 = 36 + 64 = 100]], e [[10^2 = 100]], quindi il teorema è verificato. Un valore sbagliato per un lato qualsiasi rompe questa uguaglianza.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: Coerenza del Fattore di Scala",
            },
            {
              "kind": "p",
              "text": "Conferma [[\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = k]]. Qui ogni divisione dà 2, quindi [[k = 2]] da tutti e tre i lati. Se le tre divisioni differiscono, almeno un lato è sbagliato.",
            },
            {
              "kind": "h3",
              "text": "Controllo 4: Ordinamento dei Lati",
            },
            {
              "kind": "p",
              "text": "Conferma [[a < b < c]]. Qui [[6 < 8 < 10]], quindi l'ordinamento è verificato. Se la presunta ipotenusa non è il lato più lungo, le etichette sono scambiate.",
            },
          ],
          "h2": "Come Verificare un Triangolo 3-4-5 Scalato",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Svolgi tutti e otto i problemi su carta prima di leggere le risposte.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Scala con k = 2",
            },
            {
              "kind": "p",
              "text": "Scala un triangolo 3-4-5 usando [[k = 2]]. Trova le tre lunghezze dei lati, l'area e il perimetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Scala con k = 4",
            },
            {
              "kind": "p",
              "text": "Scala un triangolo 3-4-5 usando [[k = 4]]. Trova le tre lunghezze dei lati, l'area e il perimetro.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Area con k = 3",
            },
            {
              "kind": "p",
              "text": "Trova l'area di un triangolo 3-4-5 scalato con [[k = 3]], in unità quadrate.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Perimetro con k = 5",
            },
            {
              "kind": "p",
              "text": "Trova il perimetro di un triangolo 3-4-5 scalato con [[k = 5]], in unità.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Trova k da a = 15",
            },
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 scalato ha un cateto più corto di 15. Trova [[k]] e gli altri due lati.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Trova k da b = 24",
            },
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 scalato ha un cateto più lungo di 24. Trova [[k]] e gli altri due lati.",
            },
            {
              "kind": "h3",
              "text": "Problema 7: Trova k da c = 35",
            },
            {
              "kind": "p",
              "text": "Un triangolo 3-4-5 scalato ha un'ipotenusa di 35. Trova [[k]] e i due cateti.",
            },
            {
              "kind": "h3",
              "text": "Problema 8: Verifica 12, 16 e 20",
            },
            {
              "kind": "p",
              "text": "Controlla se 12, 16 e 20 formano un triangolo 3-4-5 scalato, usando il teorema di Pitagora e il rapporto tra i lati. Se sì, indica il fattore di scala.",
            },
            {
              "kind": "h3",
              "text": "Risposte ai Problemi di Esercitazione",
            },
            {
              "kind": "p",
              "text": "Risposta 1: [[a = 6]], [[b = 8]], [[c = 10]], [[A = 24]] unità quadrate, [[P = 24]] unità.",
            },
            {
              "kind": "p",
              "text": "Risposta 2: [[a = 12]], [[b = 16]], [[c = 20]], [[A = 96]] unità quadrate, [[P = 48]] unità.",
            },
            {
              "kind": "p",
              "text": "Risposta 3: [[A = 6(3^2) = 54]] unità quadrate.",
            },
            {
              "kind": "p",
              "text": "Risposta 4: [[P = 12(5) = 60]] unità.",
            },
            {
              "kind": "p",
              "text": "Risposta 5: [[k = 15 / 3 = 5]], quindi [[b = 20]] e [[c = 25]].",
            },
            {
              "kind": "p",
              "text": "Risposta 6: [[k = 24 / 4 = 6]], quindi [[a = 18]] e [[c = 30]].",
            },
            {
              "kind": "p",
              "text": "Risposta 7: [[k = 35 / 5 = 7]], quindi [[a = 21]] e [[b = 28]].",
            },
            {
              "kind": "p",
              "text": "Risposta 8: [[12^2 + 16^2 = 144 + 256 = 400 = 20^2]], e [[12 : 16 : 20]] si divide per 4 e dà [[3 : 4 : 5]], quindi sì, con [[k = 4]].",
            },
          ],
          "h2": "Problemi di Esercitazione con Risposte",
        },
      },
      "relatedHeading": "Calcolatrici Correlate per Triangoli Rettangoli",
      "relatedIntro": "Ogni calcolatrice seguente gestisce un compito diverso sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alla misura che ti serve.",
      "relatedItems": [
        "Calcolatrice per Triangoli Rettangoli",
        "Calcolatrice delle Terne Pitagoriche",
        "Calcolatrice Triangolo 5-12-13",
        "Calcolatrice per Triangoli Rettangoli Speciali",
        "Calcolatrice dell'Area del Triangolo Rettangolo",
        "Calcolatrice del Perimetro del Triangolo Rettangolo",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "answer": "Un triangolo 3-4-5 è un triangolo rettangolo i cui lati seguono il rapporto [[3 : 4 : 5]]. I lati di lunghezza 3 e 4 sono i cateti, che si incontrano all'angolo di 90 gradi, e il lato di lunghezza 5 è l'ipotenusa. È la terna pitagorica più piccola.",
          "question": "Che cos'è un triangolo 3-4-5?",
        },
        {
          "answer": "I suoi lati soddisfano il teorema di Pitagora: [[3^2 + 4^2 = 5^2]], poiché [[9 + 16 = 25]]. Quell'uguaglianza vale solo per i triangoli rettangoli, quindi l'angolo opposto al lato di lunghezza 5 deve essere di 90 gradi. La scalatura mantiene l'uguaglianza, quindi ogni copia scalata mantiene l'angolo retto.",
          "question": "Perché un triangolo 3-4-5 forma un angolo retto?",
        },
        {
          "answer": "La regola è che le lunghezze dei lati nel rapporto [[3 : 4 : 5]] formano sempre un triangolo rettangolo. I costruttori la usano per controllare gli angoli retti: segna 3 unità in un senso, 4 unità nell'altro senso, e se la diagonale è di 5 unità, l'angolo è retto, con l'accuratezza della misurazione.",
          "question": "Qual è la regola del triangolo 3-4-5?",
        },
        {
          "answer": "Inserisci un fattore di scala positivo [[k]] e fai clic su Calcola. La calcolatrice moltiplica i lati originali per [[k]] e dà [[a = 3k]], [[b = 4k]] e [[c = 5k]], poi calcola l'area [[A = 6k^2]] e il perimetro [[P = 12k]]. Usa Reimposta per azzerare il campo.",
          "question": "Come funziona la calcolatrice per triangoli 3-4-5?",
        },
        {
          "answer": "Il fattore di scala [[k]] è il numero che moltiplica tutte e tre le lunghezze originali dei lati per la stessa quantità. Con [[k = 1]] ottieni il triangolo originale, un [[k]] maggiore lo ingrandisce e un [[k]] tra 0 e 1 lo rimpicciolisce. La forma e gli angoli restano gli stessi.",
          "question": "Che cos'è il fattore di scala in un triangolo 3-4-5?",
        },
        {
          "answer": "Moltiplica ogni parte del rapporto per [[k]]: [[a = 3k]], [[b = 4k]] e [[c = 5k]]. Con [[k = 2]] i lati sono 6, 8 e 10. Ogni lato deve usare lo stesso [[k]], altrimenti il rapporto si rompe e il triangolo perde l'angolo retto.",
          "question": "Come calcolo i lati di un triangolo 3-4-5 scalato?",
        },
        {
          "answer": "Usa i cateti in [[A = \\frac{ab}{2}]], che si semplifica in [[A = 6k^2]] per un triangolo 3-4-5 scalato. Con [[k = 3]], [[A = 6 \\times 9 = 54]] unità quadrate. L'area è sempre in unità quadrate, e cresce con il quadrato di [[k]].",
          "question": "Come calcolo la sua area?",
        },
        {
          "answer": "Somma tutti e tre i lati con [[P = a + b + c]], che si semplifica in [[P = 12k]]. Con [[k = 3]], [[P = 36]] unità. Il perimetro cresce direttamente con [[k]], quindi raddoppiare [[k]] raddoppia il perimetro. La risposta è in unità lineari, non in unità quadrate.",
          "question": "Come calcolo il suo perimetro?",
        },
        {
          "answer": "Sì. I lati 6, 8 e 10 sono il triangolo 3-4-5 scalato di [[k = 2]], quindi formano la stessa forma con gli stessi angoli e lo stesso angolo retto. Qualsiasi copia scalata, come 9-12-15 o 15-20-25, funziona allo stesso modo.",
          "question": "Posso usare 6-8-10 invece di 3-4-5?",
        },
        {
          "answer": "Un costruttore segna 3 piedi lungo un lato da un angolo e 4 piedi lungo il lato adiacente, poi misura la diagonale tra i segni. Se misura 5 piedi, l'angolo è retto. I multipli più grandi come 6-8-10 o 9-12-15 piedi sono adatti a tracciati più grandi.",
          "question": "Come usano i costruttori la regola 3-4-5?",
        },
        {
          "answer": "Sì, qualsiasi valore reale positivo di [[k]] dà un triangolo 3-4-5 scalato valido. Con [[k = 0.5]] i lati sono 1.5, 2 e 2.5, e con [[k = 1.5]] sono 4.5, 6 e 7.5. I valori zero e negativi non danno triangoli validi.",
          "question": "Il fattore di scala può essere un decimale?",
        },
        {
          "answer": "Sì, ogni triangolo 3-4-5 scalato con un fattore di scala intero è una terna pitagorica, perché i suoi lati sono numeri interi che soddisfano [[a^2 + b^2 = c^2]]. Con un fattore di scala decimale, i lati soddisfano comunque il teorema. La terna 5-12-13 è una terna pitagorica diversa.",
          "question": "Ogni triangolo 3-4-5 è una terna pitagorica?",
        },
      ],
    },
};
