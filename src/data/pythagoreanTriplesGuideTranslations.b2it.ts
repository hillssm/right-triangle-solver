// pythagoreanTriplesGuideTranslations.bit.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B2_IT = {
  "it": {
      "meta": {
        "title": "Calcolatrice delle Terne Pitagoriche: Verifica e Genera Terne",
        "description": "Verifica se tre numeri interi formano una terna pitagorica e genera terne con la formula di Euclide. Impara le terne primitive, la scalatura e gli esempi svolti.",
        "primaryKeyword": "Calcolatrice delle Terne Pitagoriche",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navigazione delle Sezioni",
      "tocItems": {
        "sec-intro": "Calcolatrice delle Terne Pitagoriche",
        "sec-calculate": "Verifica o Genera Terne Pitagoriche con la Calcolatrice",
        "sec-what": "Che Cos'è una Terna Pitagorica?",
        "sec-pythagorean": "Comprendere il Teorema di Pitagora",
        "sec-check": "Come Verificare se Tre Numeri Formano una Terna Pitagorica",
        "sec-euclid": "Come Generare Terne Pitagoriche con la Formula di Euclide",
        "sec-proof": "Dimostrazione Matematica della Formula di Euclide",
        "sec-primitive": "Che Cos'è una Terna Pitagorica Primitiva?",
        "sec-nonprimitive": "Che Cos'è una Terna Pitagorica Non Primitiva?",
        "sec-conditions": "Condizioni per Generare Terne Pitagoriche Primitive",
        "sec-difference": "Differenza tra Terne Primitive e Non Primitive",
        "sec-scaling": "Come Generare Altre Terne Moltiplicando per un Fattore Quelle Esistenti",
        "sec-examples": "Esempi Comuni di Terne Pitagoriche",
        "sec-worked": "Esempi Svolti Passo Passo con la Calcolatrice",
        "sec-infinite": "Perché Esistono Infinite Terne Pitagoriche?",
        "sec-recognize": "Come Riconoscere una Terna Pitagorica Senza Indovinare",
        "sec-ordinary": "Terne Pitagoriche e Triangoli Rettangoli Ordinari",
        "sec-mistakes": "Errori Comuni nell'Uso della Calcolatrice delle Terne Pitagoriche",
        "sec-practice": "Problemi di Esercitazione con Risposte",
        "sec-related": "Calcolatrici Correlate per Triangoli Rettangoli",
        "sec-faq": "Domande Frequenti",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatrice delle Terne Pitagoriche",
          "blocks": [
            {
              "kind": "p",
              "text": "Verifica terne di numeri interi e generane di nuove con la formula di Euclide.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagorica è un insieme di tre numeri interi positivi che possono essere i lati di un triangolo rettangolo. I due numeri più piccoli sono i cateti, il numero più grande è l'ipotenusa e i tre valori soddisfano il teorema di Pitagora.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "La Calcolatrice delle Terne Pitagoriche svolge due compiti. In modalità di verifica, inserisci tre numeri interi e la calcolatrice controlla se formano una terna valida. In modalità di generazione, inserisci due numeri interi, [[m]] e [[n]], e la calcolatrice costruisce una nuova terna con la formula di Euclide. Verificare e generare sono compiti diversi, e questa pagina spiega entrambi, passo dopo passo.",
            },
            {
              "kind": "p",
              "text": "L'esempio più noto è [[3]], [[4]] e [[5]]. Elevando al quadrato e sommando i cateti si ottiene [[3^2+4^2=9+16=25]], che è uguale a [[5^2]]. Poiché i due membri coincidono esattamente, [[(3, 4, 5)]] è una terna valida. Una terna primitiva è una terna i cui tre numeri non hanno alcun fattore comune maggiore di [[1]]; [[3]], [[4]] e [[5]] non hanno nulla in comune, quindi [[(3, 4, 5)]] è primitiva. Le sezioni seguenti mostrano come verificare tre numeri qualsiasi, come generare terne di qualsiasi grandezza e come distinguere le terne primitive dalle copie scalate.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Verifica o Genera Terne Pitagoriche con la Calcolatrice",
          "blocks": [
            {
              "kind": "p",
              "text": "Due modalità, una sola pagina: verifica un insieme di numeri oppure costruisci una nuova terna.",
            },
            {
              "kind": "h3",
              "text": "Modalità 1: Verifica di una Terna Pitagorica",
            },
            {
              "kind": "p",
              "text": "Inserisci le tre lunghezze dei lati come [[a]], [[b]] e [[c]], con [[c]] come valore più grande. La calcolatrice eleva al quadrato [[a]] e [[b]], somma i risultati, eleva al quadrato [[c]] e confronta i due membri dell'equazione.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Quando i due membri sono uguali, i tre numeri formano una terna pitagorica valida e il risultato lo conferma. Quando sono diversi, i numeri non formano una terna e il risultato mostra i due totali disuguali, così puoi vedere di quanto si discostano. Tutti e tre gli input devono essere numeri interi positivi e devono usare la stessa unità di misura.",
            },
            {
              "kind": "h3",
              "text": "Modalità 2: Generazione di Terne Pitagoriche",
            },
            {
              "kind": "p",
              "text": "Inserisci due numeri interi positivi, [[m]] e [[n]], con [[m]] maggiore di [[n]]. La calcolatrice applica la formula di Euclide per produrre tre lunghezze di lati intere.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è sempre una terna valida, perché la formula di Euclide è costruita per soddisfare il teorema di Pitagora. I due cateti possono apparire in qualsiasi ordine, ma [[c]] è sempre l'ipotenusa. Per usare la calcolatrice, scegli una modalità, inserisci numeri validi, fai clic su Calcola e leggi il risultato con il suo svolgimento passo passo. Fai clic su Azzera per cancellare i campi e ricominciare.",
            },
          ],
        },
        "sec-what": {
          "h2": "Che Cos'è una Terna Pitagorica?",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre numeri interi positivi che soddisfano esattamente il teorema di Pitagora.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagorica è un insieme di tre numeri interi positivi, scritto [[(a, b, c)]], che soddisfa l'equazione [[a^2+b^2=c^2]]. Qui [[a]] e [[b]] sono i cateti, i due lati che si incontrano all'angolo retto, e [[c]] è l'ipotenusa, il lato opposto all'angolo retto e sempre il più lungo dei tre.",
            },
            {
              "kind": "p",
              "text": "L'equazione deve valere esattamente. Un quasi risultato non è una terna: se la somma dei quadrati dei cateti differisce dal quadrato dell'ipotenusa anche di una sola unità, i tre numeri non superano il test. Quella uguaglianza rigorosa è ciò che rende una terna utile in edilizia e falegnameria, dove un controllo [[3]]-[[4]]-[[5]] segna un angolo retto senza errori di misura.",
            },
            {
              "kind": "p",
              "text": "Tutti e tre i numeri devono essere interi e positivi. Un triangolo rettangolo con lunghezze dei lati decimali, come i cateti [[1.5]] e [[2]] con ipotenusa [[2.5]], soddisfa il teorema di Pitagora ma non è una terna pitagorica, perché la definizione richiede numeri interi. Allo stesso modo, un triangolo con un lato irrazionale, come i cateti [[1]] e [[1]] con ipotenusa [[\\sqrt{2}]], è un triangolo rettangolo ma non una terna. La parola terna è riservata solo alle soluzioni intere positive.",
            },
            {
              "kind": "p",
              "text": "La terna [[(3, 4, 5)]] è il primo esempio naturale. I suoi cateti sono [[3]] e [[4]], la sua ipotenusa è [[5]] e [[9+16=25]] conferma l'equazione. L'ordine dei cateti non ha importanza: [[(4, 3, 5)]] descrive lo stesso triangolo. Ciò che conta è che i due numeri più piccoli siano i cateti e il più grande sia l'ipotenusa.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Quadrati disegnati sui lati 3, 4 e 5 con aree 9, 16 e 25, che mostrano che 9 più 16 è uguale a 25",
            "caption": "I quadrati sui lati 3, 4 e 5 hanno aree 9, 16 e 25. Poiché 9 + 16 = 25, i numeri 3, 4 e 5 formano una terna pitagorica.",
          },
        },
        "sec-pythagorean": {
          "h2": "Comprendere il Teorema di Pitagora",
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema alla base di ogni terna: i quadrati dei cateti si sommano al quadrato dell'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il teorema di Pitagora afferma che in qualsiasi triangolo rettangolo il quadrato dell'ipotenusa è uguale alla somma dei quadrati degli altri due lati. Con i cateti [[a]] e [[b]] e l'ipotenusa [[c]], il teorema si scrive come segue.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Un modo chiaro per vederlo è attraverso le aree. Disegna un quadrato su ciascun lato del triangolo. Il quadrato sul cateto [[a]] ha area [[a^2]], il quadrato sul cateto [[b]] ha area [[b^2]] e il quadrato sull'ipotenusa ha area [[c^2]]. Il teorema dice che le prime due aree si sommano alla terza. Per il triangolo [[3]]-[[4]]-[[5]], i quadrati hanno aree [[9]], [[16]] e [[25]], e [[9+16=25]] mostra l'equilibrio direttamente.",
            },
            {
              "kind": "p",
              "text": "Quell'immagine delle aree spiega anche perché [[3]]-[[4]]-[[5]] è un triangolo rettangolo valido. Le sue lunghezze dei lati soddisfano esattamente l'equilibrio delle aree, quindi l'angolo tra i cateti deve essere un angolo retto. Ogni terna pitagorica soddisfa il teorema, perché una terna è definita da quell'equazione. Il contrario non è vero: molti triangoli rettangoli hanno lunghezze dei lati che non sono numeri interi, quindi soddisfano il teorema senza essere terne. Usa la <a href=\"/pythagorean-theorem-calculator/\">Calcolatrice del teorema di Pitagora</a> quando un triangolo ha lati decimali o incogniti invece di terne intere.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Triangolo rettangolo ABC con cateti a uguale a 3 e b uguale a 4, ipotenusa c uguale a 5, un indicatore di angolo retto e la formula a al quadrato più b al quadrato uguale a c al quadrato",
            "caption": "Triangolo rettangolo ABC con cateti a = 3 e b = 4 e ipotenusa c = 5. L'indicatore di angolo retto si trova in C, e 3 al quadrato più 4 al quadrato è uguale a 5 al quadrato.",
          },
        },
        "sec-check": {
          "h2": "Come Verificare se Tre Numeri Formano una Terna Pitagorica",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto brevi passi trasformano tre numeri interi qualsiasi in un chiaro sì o no.",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua il valore più grande dei tre.",
                "Assegna il valore più grande a [[c]], l'ipotenusa.",
                "Assegna gli altri due valori ad [[a]] e [[b]], i cateti.",
                "Eleva al quadrato [[a]].",
                "Eleva al quadrato [[b]].",
                "Somma i due quadrati.",
                "Eleva al quadrato [[c]].",
                "Confronta i due risultati: se sono uguali si tratta di una terna valida, se sono diversi non è una terna.",
              ],
            },
            {
              "kind": "p",
              "text": "Ecco un esempio valido. Verifica [[7]], [[24]] e [[25]]: il valore più grande è [[25]], quindi è l'ipotenusa. Eleva al quadrato i cateti e somma.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[625=625]], i due membri coincidono, quindi [[(7, 24, 25)]] è una terna pitagorica valida. È anche primitiva, perché [[7]], [[24]] e [[25]] non hanno alcun fattore comune maggiore di [[1]].",
            },
            {
              "kind": "p",
              "text": "Ora un esempio non valido. Verifica [[4]], [[5]] e [[6]]: il valore più grande è [[6]], quindi è l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[41]] non è uguale a [[36]], i valori non formano una terna pitagorica. Gli stessi otto passi funzionano per qualsiasi input intero positivo, grande o piccolo, quindi la verifica esatta non dipende mai dalla memoria o dalle congetture.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Flusso passo passo per verificare 7, 24, 25: eleva al quadrato i cateti ottenendo 49 e 576, somma ottenendo 625, eleva al quadrato l'ipotenusa ottenendo 625 e conferma l'uguaglianza",
            "caption": "Verifica di 7, 24, 25 passo passo: 49 + 576 = 625 e 25 al quadrato = 625, quindi i due membri coincidono e la terna è valida.",
          },
        },
        "sec-euclid": {
          "h2": "Come Generare Terne Pitagoriche con la Formula di Euclide",
          "blocks": [
            {
              "kind": "p",
              "text": "Due piccoli numeri interi in ingresso, una terna completa in uscita: questa è la formula di Euclide.",
            },
            {
              "kind": "p",
              "text": "La formula di Euclide costruisce una terna pitagorica a partire da due numeri interi positivi, [[m]] e [[n]], con [[m]] maggiore di [[n]]. Il parametro [[m]] è il numero intero più grande e [[n]] è il più piccolo, ed entrambi devono essere numeri interi. Le tre formule producono i due cateti e l'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "La condizione [[m>n>0]] è importante. Se [[m]] è uguale a [[n]], il primo cateto diventa zero, che non è il lato di un triangolo. Se [[m]] è minore di [[n]], il primo cateto diventa negativo, il che è altrettanto impossibile. Anche i valori decimali di [[m]] e [[n]] non sono validi qui, perché la formula è pensata per parametri interi che producono lati interi.",
            },
            {
              "kind": "p",
              "text": "Prova con [[m=2]] e [[n=1]]. Il primo cateto è [[a=2^2-1^2=4-1=3]], il secondo cateto è [[b=2(2)(1)=4]] e l'ipotenusa è [[c=2^2+1^2=4+1=5]]. Il risultato è la terna [[(3, 4, 5)]]. Nota che i cateti generati possono apparire in qualsiasi ordine: la formula può restituire prima il cateto più grande o il più piccolo, ma [[c]] è sempre l'ipotenusa. La sezione successiva dimostra perché queste formule soddisfano sempre il teorema di Pitagora.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Diagramma di flusso della formula di Euclide con m uguale a 3 e n uguale a 2 che produce 5, 12 e 13",
            "caption": "Formula di Euclide con m = 3 e n = 2: m al quadrato meno n al quadrato è 5, 2mn è 12 e m al quadrato più n al quadrato è 13, dando la terna 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Dimostrazione Matematica della Formula di Euclide",
          "blocks": [
            {
              "kind": "p",
              "text": "Una breve dimostrazione algebrica mostra perché la formula di Euclide non può mai fallire.",
            },
            {
              "kind": "p",
              "text": "Parti dalle due formule dei cateti, [[a=m^2-n^2]] e [[b=2mn]], e verifica se [[a^2+b^2]] è uguale a [[c^2]] quando [[c=m^2+n^2]]. Sostituisci le formule nel membro sinistro dell'equazione di Pitagora.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Sviluppa entrambi i quadrati. Il primo quadrato si sviluppa in [[m^4-2m^2n^2+n^4]] e il secondo in [[4m^2n^2]], quindi la somma diventa la seguente espressione.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Combina i termini centrali: [[-2m^2n^2+4m^2n^2]] è [[+2m^2n^2]]. L'espressione ora è un quadrato perfetto sotto mentite spoglie.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Fattorizzala. Il risultato è il quadrato di [[m^2+n^2]], che è esattamente [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Poiché [[c=m^2+n^2]], il membro destro è [[c^2]] e la dimostrazione è completa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Il passo chiave è la cancellazione parziale dei termini centrali: il [[-2m^2n^2]] del primo quadrato e il [[+4m^2n^2]] del secondo lasciano esattamente il [[+2m^2n^2]] necessario per completare il quadrato. Poiché questo funziona per qualsiasi coppia di numeri interi [[m]] e [[n]] con [[m>n>0]], ogni coppia genera una vera terna pitagorica. La dimostrazione non dice nulla sulla primitività, però: se il risultato sia primitivo dipende dalle condizioni aggiuntive nelle sezioni seguenti.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "Che Cos'è una Terna Pitagorica Primitiva?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una terna primitiva è una terna nella sua forma più semplice, senza fattori condivisi.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagorica primitiva è una terna le cui tre lunghezze dei lati non hanno alcun fattore intero positivo comune maggiore di [[1]]. In simboli, il massimo comune divisore dei tre lati è [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "La terna [[(3, 4, 5)]] è primitiva perché [[\\gcd(3,4,5)=1]]: nessun numero intero maggiore di [[1]] divide tutti e tre i numeri. Lo stesso vale per [[(5, 12, 13)]], [[(8, 15, 17)]] e [[(7, 24, 25)]]. Ciascuna di queste è una terna di base che non può essere ridotta a una terna intera più piccola mediante divisione.",
            },
            {
              "kind": "p",
              "text": "Primitiva non significa che la terna sia la più piccola possibile in ogni senso. Significa solo che i tre valori non hanno alcun fattore comune diverso da [[1]]. Una grande terna primitiva come [[(20, 21, 29)]] è comunque primitiva, perché [[20]], [[21]] e [[29]] non hanno divisori comuni. La tabella seguente confronta i divisori di una terna primitiva e di una copia scalata.",
            },
          ],
          "table": {
            "headers": [
              "Terna",
              "Divisori comuni",
              "Primitiva?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Sì",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Sì",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Sì",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "No",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "No",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Due triangoli rettangoli, 3-4-5 e 6-8-10, che mostrano che il secondo è il doppio del primo e solo il primo è primitivo",
            "caption": "Il triangolo 3-4-5 è primitivo, mentre il 6-8-10 è il doppio in ogni lato: mcd(3, 4, 5) = 1, ma mcd(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "Che Cos'è una Terna Pitagorica Non Primitiva?",
          "blocks": [
            {
              "kind": "p",
              "text": "Una terna non primitiva è una copia scalata di una terna primitiva.",
            },
            {
              "kind": "p",
              "text": "Una terna pitagorica non primitiva è una terna i cui tre valori hanno un fattore intero comune maggiore di [[1]]. È comunque una terna valida, perché soddisfa esattamente [[a^2+b^2=c^2]]. Semplicemente non è nella forma più semplice.",
            },
            {
              "kind": "p",
              "text": "Parti dalla terna primitiva [[(3, 4, 5)]] e moltiplica ogni lato per [[2]]. Il risultato è [[(6, 8, 10)]] e la verifica funziona ancora: [[36+64=100]]. Moltiplica invece per [[3]] e il risultato è [[(9, 12, 15)]], con [[81+144=225]]. Entrambe le terne scalate sono valide e nessuna delle due è primitiva, perché la prima condivide il fattore [[2]] e la seconda condivide il fattore [[3]].",
            },
            {
              "kind": "p",
              "text": "Trovare il fattore comune è semplice: prendi il massimo comune divisore dei tre lati. Per [[(6, 8, 10)]] è [[2]]; per [[(9, 12, 15)]] è [[3]]. Dividendo ogni lato per quel fattore si recupera la terna primitiva sottostante. Quindi [[(6, 8, 10)]] diviso per [[2]] restituisce [[(3, 4, 5)]] e [[(9, 12, 15)]] diviso per [[3]] restituisce anch'esso [[(3, 4, 5)]]. Ogni terna non primitiva si riduce in questo modo a esattamente una terna primitiva.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Condizioni per Generare Terne Pitagoriche Primitive",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula di Euclide produce una terna primitiva solo quando valgono entrambe le condizioni sui parametri.",
            },
            {
              "kind": "p",
              "text": "Due condizioni su [[m]] e [[n]] decidono se la formula di Euclide produce una terna primitiva. Entrambe devono valere contemporaneamente e nessuna da sola è sufficiente.",
            },
            {
              "kind": "h3",
              "text": "Condizione 1: Parametri coprimi",
            },
            {
              "kind": "p",
              "text": "I parametri devono essere coprimi, cioè non devono avere alcun fattore comune maggiore di [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Quando [[m]] e [[n]] condividono un fattore, quel fattore si trasmette a tutti e tre i lati generati. Per esempio, [[m=4]] e [[n=2]] condividono il fattore [[2]] e la formula produce [[(12, 16, 20)]], i cui lati condividono tutti il fattore [[4]]. Il risultato è non primitivo.",
            },
            {
              "kind": "h3",
              "text": "Condizione 2: Parità opposta",
            },
            {
              "kind": "p",
              "text": "Un parametro deve essere pari e l'altro dispari. Quando entrambi i parametri sono dispari, i cateti e l'ipotenusa generati risultano tutti pari, quindi la terna condivide il fattore [[2]] e non può essere primitiva. Per esempio, [[m=3]] e [[n=1]] sono coprimi ma entrambi dispari, e la formula produce [[(8, 6, 10)]], che è la terna non primitiva [[(6, 8, 10)]] con i cateti in un ordine diverso.",
            },
            {
              "kind": "p",
              "text": "Tre coppie di parametri mostrano come le condizioni funzionano insieme. La coppia [[(2, 1)]] è coprima con parità opposta e dà la terna primitiva [[(3, 4, 5)]]. La coppia [[(3, 2)]] è coprima con parità opposta e dà la terna primitiva [[(5, 12, 13)]]. La coppia [[(3, 1)]] è coprima ma entrambi dispari, quindi dà la terna non primitiva [[(6, 8, 10)]]. La coprimalità senza parità opposta non basta, e la parità opposta senza coprimalità non basta.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Due esempi di parametri: m uguale a 3 e n uguale a 2 danno la terna primitiva 5-12-13, mentre m uguale a 3 e n uguale a 1 danno la terna non primitiva 6-8-10",
            "caption": "I parametri m = 3, n = 2 sono coprimi con parità opposta e danno la terna primitiva 5-12-13. I parametri m = 3, n = 1 sono entrambi dispari e danno la terna non primitiva 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Differenza tra Terne Primitive e Non Primitive",
          "blocks": [
            {
              "kind": "p",
              "text": "Stesso teorema, forma diversa: una tabella riassume l'intera distinzione.",
            },
            {
              "kind": "p",
              "text": "Entrambi i tipi di terna soddisfano esattamente il teorema di Pitagora, quindi entrambi descrivono veri triangoli rettangoli. La differenza riguarda solo i fattori condivisi e il modo in cui la terna è stata prodotta. Una terna primitiva è uno schema di base; una terna non primitiva è di solito un multiplo di una di esse.",
            },
          ],
          "table": {
            "headers": [
              "Caratteristica",
              "Primitiva",
              "Non primitiva",
            ],
            "rows": [
              [
                "Divisore comune",
                "Solo [[1]]",
                "Maggiore di [[1]]",
              ],
              [
                "Lunghezze dei lati",
                "Non può essere ridotta a una terna intera più piccola",
                "Può essere divisa per un fattore comune",
              ],
              [
                "Esempio",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Generazione",
                "[[m]], [[n]] coprimi con parità opposta",
                "Altre combinazioni di parametri o multipli interi",
              ],
              [
                "Relazione",
                "Terna intera di base",
                "Spesso un multiplo di una terna primitiva",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Come Generare Altre Terne Moltiplicando per un Fattore Quelle Esistenti",
          "blocks": [
            {
              "kind": "p",
              "text": "Moltiplica ogni lato per lo stesso numero intero e la terna resta valida.",
            },
            {
              "kind": "p",
              "text": "Per qualsiasi numero intero positivo [[k]], moltiplicare ogni lato di una terna pitagorica [[(a, b, c)]] per [[k]] dà un'altra terna pitagorica, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "Il motivo è una semplice algebra. Elevando al quadrato i cateti scalati si ottiene [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]] e raccogliendo [[k^2]] si ottiene [[k^2(a^2+b^2)]]. Poiché la terna originale soddisfa [[a^2+b^2=c^2]], la somma scalata è uguale a [[k^2c^2]], che è [[(kc)^2]]. La terna scalata soddisfa quindi esattamente il teorema.",
            },
            {
              "kind": "p",
              "text": "Moltiplicare [[(3, 4, 5)]] per [[2]] dà [[(6, 8, 10)]] e moltiplicare per [[3]] dà [[(9, 12, 15)]]. Moltiplicare [[(5, 12, 13)]] per [[2]] dà [[(10, 24, 26)]] e moltiplicare [[(8, 15, 17)]] per [[3]] dà [[(24, 45, 51)]]. Ogni risultato è una terna valida e ogni risultato è non primitivo, perché il moltiplicatore diventa un fattore comune di tutti e tre i lati.",
            },
            {
              "kind": "p",
              "text": "Un moltiplicatore intero conserva le lunghezze dei lati intere, ed è per questo che la scalatura è un modo affidabile per costruire nuove terne. Un moltiplicatore reale arbitrario, come [[1.5]], mantiene il triangolo rettangolo con la stessa forma, ma i lati possono smettere di essere numeri interi: [[(3, 4, 5)]] scalato per [[1.5]] dà [[(4.5, 6, 7.5)]], che è un triangolo rettangolo ma non una terna pitagorica. Nota che la calcolatrice stessa non ha un campo separato per il moltiplicatore; la scalatura è un calcolo manuale che fai con le terne che essa verifica o genera.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "La terna 3-4-5 moltiplicata per 2, 3 e 4 per dare 6-8-10, 9-12-15 e 12-16-20",
            "caption": "Moltiplicare 3-4-5 per 2, 3 e 4 dà 6-8-10, 9-12-15 e 12-16-20. Ogni insieme scalato è ancora una terna pitagorica valida.",
          },
        },
        "sec-examples": {
          "h2": "Esempi Comuni di Terne Pitagoriche",
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci terne da conoscere a memoria, ciascuna verificata.",
            },
            {
              "kind": "p",
              "text": "La tabella seguente elenca dieci terne pitagoriche ben note. Ogni riga è stata verificata con il teorema di Pitagora e ogni riga è primitiva, salvo dove è indicato un multiplo scalato. I cateti di ogni riga possono essere elencati in qualsiasi ordine: [[(4, 3, 5)]] è lo stesso triangolo di [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Primo cateto",
              "Secondo cateto",
              "Ipotenusa",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Tre triangoli rettangoli disegnati in scala: 3-4-5, 5-12-13 e 8-15-17, che mostrano forme diverse",
            "caption": "Tre terne primitive disegnate in scala: 3-4-5, 5-12-13 e 8-15-17. Ognuna ha una forma diversa e angoli acuti diversi.",
          },
        },
        "sec-worked": {
          "h2": "Esempi Svolti Passo Passo con la Calcolatrice",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto esempi che coprono entrambe le modalità: quattro verifiche e quattro generazioni.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: Verifica 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Inserisci [[a=3]], [[b=4]] e [[c=5]] in modalità di verifica. Eleva al quadrato i cateti e somma: [[3^2+4^2=9+16=25]]. Eleva al quadrato l'ipotenusa: [[5^2=25]]. Poiché [[25=25]], il risultato è una terna valida. È primitiva, perché [[3]], [[4]] e [[5]] non hanno alcun fattore comune.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: Verifica 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Inserisci [[a=5]], [[b=12]] e [[c=13]]. I cateti danno [[5^2+12^2=25+144=169]] e l'ipotenusa dà [[13^2=169]]. Poiché [[169=169]], il risultato è una terna valida. È primitiva, perché [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: Verifica 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Inserisci [[a=6]], [[b=8]] e [[c=10]]. I cateti danno [[6^2+8^2=36+64=100]] e l'ipotenusa dà [[10^2=100]]. Poiché [[100=100]], il risultato è una terna valida. È non primitiva, perché tutti e tre i lati condividono il fattore [[2]]; dividendo per [[2]] si ottiene la terna primitiva [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: Verifica 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Inserisci [[a=7]], [[b=24]] e [[c=25]]. I cateti danno [[7^2+24^2=49+576=625]] e l'ipotenusa dà [[25^2=625]]. Poiché [[625=625]], il risultato è una terna valida. È primitiva, perché [[7]], [[24]] e [[25]] non hanno alcun fattore comune.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: Genera con m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Inserisci [[m=2]] e [[n=1]] in modalità di generazione. Il primo cateto è [[a=2^2-1^2=3]], il secondo cateto è [[b=2(2)(1)=4]] e l'ipotenusa è [[c=2^2+1^2=5]]. Il risultato è [[(3, 4, 5)]], una terna primitiva.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: Genera con m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Inserisci [[m=3]] e [[n=2]]. Il primo cateto è [[a=3^2-2^2=9-4=5]], il secondo cateto è [[b=2(3)(2)=12]] e l'ipotenusa è [[c=3^2+2^2=13]]. Il risultato è [[(5, 12, 13)]], una terna primitiva, perché [[3]] e [[2]] sono coprimi con parità opposta.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: Genera con m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Inserisci [[m=4]] e [[n=1]]. Le formule danno [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] e [[c=4^2+1^2=17]]. Elencata con i cateti in ordine crescente, il risultato è [[(8, 15, 17)]]. È primitiva, perché [[4]] e [[1]] sono coprimi con parità opposta.",
            },
            {
              "kind": "h3",
              "text": "Esempio 8: Genera con m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Inserisci [[m=3]] e [[n=1]]. Le formule danno [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] e [[c=3^2+1^2=10]]. Elencata con i cateti in ordine crescente, il risultato è [[(6, 8, 10)]]. Questa terna è non primitiva: [[3]] e [[1]] sono coprimi, ma entrambi sono dispari, quindi la condizione di parità opposta non è soddisfatta e ogni lato risulta pari. Dividendo per [[2]] si ottiene la terna primitiva [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Perché Esistono Infinite Terne Pitagoriche?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula di Euclide non esaurisce mai gli input, quindi non esaurisce mai le terne.",
            },
            {
              "kind": "p",
              "text": "La formula di Euclide accetta qualsiasi coppia di numeri interi positivi [[m]] e [[n]] con [[m]] maggiore di [[n]], e ci sono infinite coppie di questo tipo. Ogni nuova coppia produce una terna e coppie diverse producono in genere terne diverse. Le coppie [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] e [[(5, 2)]] danno rispettivamente [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] e [[(20, 21, 29)]] e l'elenco continua: [[(5, 4)]] dà [[(9, 40, 41)]] e [[(6, 1)]] dà [[(12, 35, 37)]]. Valori maggiori di [[m]] continuano a produrre terne sempre più grandi senza fine.",
            },
            {
              "kind": "p",
              "text": "I multipli interi ne aggiungono ancora di più. Ogni terna primitiva genera un'intera famiglia di copie scalate: [[(3, 4, 5)]] da sola dà [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] e così via all'infinito. Tra le infinite coppie di parametri e gli infiniti multipli, la riserva di terne pitagoriche è infinita. Nota la formulazione attenta: non ogni coppia di parametri produce una terna primitiva, ma ogni coppia produce una terna valida e anche le terne primitive sono infinite.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Come Riconoscere una Terna Pitagorica Senza Indovinare",
          "blocks": [
            {
              "kind": "p",
              "text": "Alcune abitudini fanno saltare all'occhio le terne familiari prima ancora di calcolare.",
            },
            {
              "kind": "p",
              "text": "Inizia trattando il valore più grande come l'ipotenusa e confrontando i valori al quadrato, esattamente come descrivono i passi di verifica. Con la pratica, le terne comuni diventano familiari: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] e [[7]]-[[24]]-[[25]] compaiono così spesso nei libri di testo e negli esami che riconoscerle fa risparmiare tempo prezioso.",
            },
            {
              "kind": "p",
              "text": "Cerca poi i fattori comuni. Se tutti e tre i numeri sono pari, dividi per [[2]] e guarda cosa resta. L'insieme [[6]]-[[8]]-[[10]] è subito riconoscibile come il doppio di [[3]]-[[4]]-[[5]] una volta individuato il fattore [[2]]. Ridurre una terna non primitiva alla sua forma primitiva rivela spesso uno schema familiare nascosto dietro numeri più grandi.",
            },
            {
              "kind": "p",
              "text": "Quando ti serve una nuova terna invece di una verifica, la formula di Euclide è la strada affidabile: scegli piccoli valori di [[m]] e [[n]] e genera. Il riconoscimento è una scorciatoia utile, ma la verifica esatta è sempre l'ultima parola. Una terna che sembra familiare merita comunque il test del quadrato e del confronto prima di farci affidamento.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Terne Pitagoriche e Triangoli Rettangoli Ordinari",
          "blocks": [
            {
              "kind": "p",
              "text": "Ogni terna è un triangolo rettangolo, ma la maggior parte dei triangoli rettangoli non sono terne.",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo può avere lunghezze dei lati intere, decimali o irrazionali. Solo la prima categoria può formare una terna pitagorica. La terna [[(3, 4, 5)]] è un triangolo rettangolo intero e si qualifica. Un triangolo con cateti [[1]] e [[1]] e ipotenusa [[\\sqrt{2}]] è un vero triangolo rettangolo, poiché [[1+1=2]], ma la sua ipotenusa è irrazionale, quindi non è una terna. Un triangolo con lati [[3]], [[4]] e [[5.1]] non soddisfa l'equazione, poiché [[9+16=25]] e [[5.1^2=26.01]], quindi non è nemmeno un triangolo rettangolo.",
            },
            {
              "kind": "p",
              "text": "La distinzione conta nella pratica. I costruttori usano [[3]]-[[4]]-[[5]] perché i numeri interi sono facili da misurare con un metro a nastro. Un triangolo con lati [[3]], [[4]] e [[5.1]] sembra quasi retto ma è fuori di un angolo visibile, e nessun controllo con numeri interi lo supererebbe. Il teorema di Pitagora si applica a tutti i triangoli rettangoli, qualunque siano le loro lunghezze dei lati. Il termine terna pitagorica si riferisce solo alle soluzioni intere positive, ed è quel significato ristretto che rende speciali le terne.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori Comuni nell'Uso della Calcolatrice delle Terne Pitagoriche",
          "blocks": [
            {
              "kind": "p",
              "text": "Quindici errori, ciascuno con la correzione accanto.",
            },
            {
              "kind": "list",
              "items": [
                "Inserire [[c]] come un lato più piccolo: l'ipotenusa deve essere il valore più grande, quindi assegna sempre il numero più grande a [[c]] prima della verifica.",
                "Dimenticare di elevare al quadrato i valori: il teorema confronta i quadrati, non le lunghezze dei lati stesse, quindi eleva al quadrato [[a]], [[b]] e [[c]] prima.",
                "Sommare i lati invece dei loro quadrati: [[a+b]] è la somma sbagliata; la verifica richiede [[a^2+b^2]] contro [[c^2]].",
                "Usare [[a+b=c]] invece di [[a^2+b^2=c^2]]: la somma semplice di due lati non è mai uguale all'ipotenusa in un triangolo rettangolo.",
                "Confondere l'ipotenusa con un cateto: l'ipotenusa si trova di fronte all'angolo retto ed è sempre il lato più lungo.",
                "Usare valori decimali e aspettarsi una terna intera: i decimali possono formare un triangolo rettangolo, ma solo i numeri interi positivi formano una terna pitagorica.",
                "Inserire lunghezze dei lati nulle o negative: le lunghezze dei lati devono essere positive e gli input nulli o negativi vengono rifiutati.",
                "Usare [[m]] uguale a [[n]]: il primo cateto diventa [[m^2-n^2=0]], che non è il lato di un triangolo.",
                "Usare [[m]] minore di [[n]]: il primo cateto diventa negativo, il che è impossibile per una lunghezza di lato.",
                "Inserire valori decimali di [[m]] e [[n]]: la formula di Euclide richiede parametri interi positivi per produrre lati interi.",
                "Supporre che ogni terna generata sia primitiva: la generazione garantisce solo una terna valida e la primitività richiede parametri coprimi con parità opposta.",
                "Supporre che tutte le terne primitive siano multipli di [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] e [[8]]-[[15]]-[[17]] sono terne primitive indipendenti, non multipli di [[3]]-[[4]]-[[5]].",
                "Dimenticare la condizione di parità opposta: due parametri dispari producono una terna pari e non primitiva, come mostra [[m=3]], [[n=1]].",
                "Dimenticare di controllare i fattori comuni: una terna come [[(12, 16, 20)]] sembra nuova finché il fattore condiviso [[4]] non rivela che è una [[(3, 4, 5)]] scalata.",
                "Confondere un triangolo rettangolo valido con una terna pitagorica intera: un triangolo con lati irrazionali o decimali può soddisfare il teorema senza essere una terna.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi di Esercitazione con Risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Otto problemi, quattro verifiche e quattro generazioni, con soluzioni complete.",
            },
            {
              "kind": "list",
              "items": [
                "Verifica se [[8]], [[15]] e [[17]] formano una terna. Risposta: sì, primitiva. [[8^2+15^2=64+225=289=17^2]] e i tre numeri non hanno alcun fattore comune.",
                "Verifica se [[6]], [[8]] e [[11]] formano una terna. Risposta: no. [[6^2+8^2=36+64=100]], ma [[11^2=121]], quindi i due membri sono diversi.",
                "Stabilisci se [[9]], [[12]] e [[15]] sono primitivi. Risposta: non primitiva. I numeri condividono il fattore [[3]] e dividendo per [[3]] si ottiene la terna primitiva [[(3, 4, 5)]].",
                "Genera una terna usando [[m=2]] e [[n=1]]. Risposta: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Genera una terna usando [[m=3]] e [[n=2]]. Risposta: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Genera una terna usando [[m=4]] e [[n=1]]. Risposta: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], con i cateti ordinati in ordine crescente.",
                "Stabilisci se [[m=3]] e [[n=1]] producono una terna primitiva. Risposta: no. I parametri sono coprimi ma entrambi dispari, quindi il risultato è la terna non primitiva [[(6, 8, 10)]].",
                "Trova il moltiplicatore comune tra [[3]]-[[4]]-[[5]] e [[15]]-[[20]]-[[25]]. Risposta: [[5]]. Ogni lato di [[(3, 4, 5)]] moltiplicato per [[5]] dà [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calcolatrici Correlate per Triangoli Rettangoli",
      "relatedIntro": "Ciascuna calcolatrice qui sotto gestisce un diverso compito sui triangoli rettangoli, quindi scegli lo strumento che corrisponde alla misura di cui hai bisogno.",
      "relatedItems": [
        "Calcolatrice del Triangolo Rettangolo",
        "Calcolatrice del Teorema di Pitagora",
        "Calcolatrice del Triangolo 3-4-5",
        "Calcolatrice del Triangolo 5-12-13",
        "Calcolatrice dei Lati del Triangolo Rettangolo",
        "Calcolatrice dei Triangoli Rettangoli Speciali",
      ],
      "faqHeading": "Domande Frequenti",
      "faqs": [
        {
          "question": "Che cos'è una terna pitagorica?",
          "answer": "Una terna pitagorica è un insieme di tre numeri interi positivi, scritto [[(a, b, c)]], che soddisfa l'equazione [[a^2+b^2=c^2]]. I due numeri più piccoli sono i cateti di un triangolo rettangolo e il più grande è l'ipotenusa. L'esempio più noto è [[(3, 4, 5)]], poiché [[9+16=25]].",
        },
        {
          "question": "Come funziona la Calcolatrice delle Terne Pitagoriche?",
          "answer": "Ha due modalità. La modalità di verifica prende tre numeri interi e controlla se [[a^2+b^2=c^2]] vale. La modalità di generazione prende due numeri interi, [[m]] e [[n]], e applica la formula di Euclide per costruire una nuova terna. Entrambe le modalità mostrano lo svolgimento passo passo insieme al risultato.",
        },
        {
          "question": "Come posso verificare se tre numeri formano una terna pitagorica?",
          "answer": "Prendi il valore più grande come ipotenusa [[c]] e gli altri due come cateti [[a]] e [[b]]. Eleva al quadrato tutti e tre, somma [[a^2+b^2]] e confronta con [[c^2]]. Totali uguali significano una terna valida; totali diversi significano che i numeri non ne formano una.",
        },
        {
          "question": "Che cos'è la formula di Euclide?",
          "answer": "La formula di Euclide genera una terna pitagorica a partire da due numeri interi positivi, [[m]] e [[n]], con [[m]] maggiore di [[n]]. Le formule sono [[a=m^2-n^2]], [[b=2mn]] e [[c=m^2+n^2]]. Ogni coppia produce una terna valida, come mostra la dimostrazione algebrica in questa pagina.",
        },
        {
          "question": "Che cosa sono m e n nella formula delle terne pitagoriche?",
          "answer": "I valori [[m]] e [[n]] sono parametri interi positivi nella formula di Euclide. Il valore [[m]] è il numero intero più grande e [[n]] è il più piccolo, con [[m>n>0]]. Valori maggiori di [[m]] producono terne più grandi e coppie diverse producono terne diverse.",
        },
        {
          "question": "Che cos'è una terna pitagorica primitiva?",
          "answer": "Una terna primitiva è una terna le cui tre lunghezze dei lati non hanno alcun fattore comune maggiore di [[1]], quindi [[\\gcd(a,b,c)=1]]. Esempi: [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] e [[(7, 24, 25)]]. Le terne primitive non possono essere ridotte a una terna intera più piccola.",
        },
        {
          "question": "Che cos'è una terna pitagorica non primitiva?",
          "answer": "Una terna non primitiva è una terna valida i cui tre lati condividono un fattore comune maggiore di [[1]]. Per esempio, [[(6, 8, 10)]] è il doppio di [[(3, 4, 5)]] e [[(9, 12, 15)]] è il triplo di [[(3, 4, 5)]]. Dividendo per il fattore comune si ottiene la terna primitiva sottostante.",
        },
        {
          "question": "Come faccio a sapere se una terna generata è primitiva?",
          "answer": "Controlla le due condizioni sui parametri: [[m]] e [[n]] devono essere coprimi, quindi [[\\gcd(m,n)=1]], e devono avere parità opposta, quindi uno è pari e l'altro è dispari. Se valgono entrambe le condizioni, la terna generata è primitiva. Se una delle due non vale, è non primitiva.",
        },
        {
          "question": "I numeri decimali possono formare una terna pitagorica?",
          "answer": "No. Una terna pitagorica è definita come tre numeri interi positivi, quindi le lunghezze dei lati decimali non si qualificano mai. I decimali possono comunque formare un triangolo rettangolo che soddisfa [[a^2+b^2=c^2]], come i cateti [[1.5]] e [[2]] con ipotenusa [[2.5]], ma quel triangolo non è una terna pitagorica.",
        },
        {
          "question": "Esistono infinite terne pitagoriche?",
          "answer": "Sì. La formula di Euclide accetta infinite coppie intere [[(m, n)]] e ogni coppia produce una terna. I multipli interi ne aggiungono altre: ogni terna primitiva genera un'infinita famiglia di copie scalate. La riserva di terne non si esaurisce mai.",
        },
        {
          "question": "Ogni terna pitagorica può essere generata con la formula di Euclide?",
          "answer": "Sì, ogni terna primitiva deriva dalla formula di Euclide con opportuni parametri coprimi di parità opposta e ogni terna non primitiva è un multiplo di una primitiva. Quindi ogni terna pitagorica può essere raggiunta attraverso la formula di Euclide più la moltiplicazione per un numero intero positivo.",
        },
        {
          "question": "Qual è la terna pitagorica più comune?",
          "answer": "La terna [[(3, 4, 5)]] è la più comune e la più nota. È la terna primitiva più piccola, è facile da ricordare e i costruttori e i falegnami la usano da secoli per verificare gli angoli retti. Le successive più familiari sono [[(5, 12, 13)]] e [[(8, 15, 17)]].",
        },
      ],
    },
};
