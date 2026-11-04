// altitudeGuideTranslations.bit.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B2_IT = {
  "it": {
      "tocHeading": "Navigazione delle sezioni",
      "tocItems": {
        "sec-intro": "Calcolatrice dell'altezza del triangolo rettangolo",
        "sec-calculate": "Calcolare l'altezza di un triangolo rettangolo",
        "sec-what": "Cos'è l'altezza di un triangolo rettangolo?",
        "sec-diagram": "Diagramma dell'altezza del triangolo rettangolo spiegato",
        "sec-formulas": "Formule dell'altezza del triangolo rettangolo spiegate",
        "sec-how": "Come usare la calcolatrice dell'altezza del triangolo rettangolo",
        "sec-method1": "Metodo 1: trovare l'altezza del triangolo rettangolo dai lati",
        "sec-method2": "Metodo 2: trovare l'altezza dalle proiezioni sull'ipotenusa",
        "sec-two-sides": "Come trovare l'altezza quando si conoscono solo due lati",
        "sec-why": "Perché la formula dell'altezza del triangolo rettangolo funziona?",
        "sec-proof": "Dimostrazione del teorema dell'altezza con i triangoli simili",
        "sec-examples": "Esempi svolti sull'altezza del triangolo rettangolo",
        "sec-area": "Relazione tra altezza e area del triangolo",
        "sec-geomean": "Media geometrica e proiezioni sull'ipotenusa",
        "sec-properties": "Proprietà importanti dell'altezza del triangolo rettangolo",
        "sec-verify": "Come verificare se la tua risposta sull'altezza è corretta",
        "sec-mistakes": "Errori comuni nel calcolo dell'altezza",
        "sec-applications": "Applicazioni reali dell'altezza del triangolo rettangolo",
        "sec-practice": "Problemi pratici con risposte",
        "sec-related": "Esplora le calcolatrici correlate per i triangoli rettangoli",
        "sec-faq": "Domande frequenti",
        "sec-conclusion": "Calcolatrici correlate per i triangoli rettangoli",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcolatrice dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Questa guida mostra due modi per trovare l'altezza di un triangolo rettangolo, con esempi svolti per ciascuno.",
            },
            {
              "kind": "p",
              "text": "L'altezza è il segmento perpendicolare tracciato dal vertice dell'angolo retto all'ipotenusa. La calcolatrice dell'altezza del triangolo rettangolo trova questa lunghezza usando i tre lati oppure le due proiezioni sull'ipotenusa. Scegli la modalità adatta a ciò che conosci, inserisci le misure e la calcolatrice restituisce l'altezza nella stessa unità.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "La prima formula usa i due cateti [[a]] e [[b]] con l'ipotenusa [[c]]. La seconda usa le proiezioni [[p]] e [[q]], i due segmenti in cui l'altezza divide l'ipotenusa. Entrambe le formule trovano la stessa altezza perpendicolare; partono semplicemente da misure note diverse.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcolare l'altezza di un triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "La calcolatrice accanto a questa guida offre due modalità, e scegliere quella giusta è l'unica preparazione necessaria. Ogni modalità richiede misure diverse e applica una formula diversa, quindi leggi prima la tabella e abbina la modalità ai valori che conosci.",
            },
            {
              "kind": "p",
              "text": "La modalità 1, Altezza all'ipotenusa, accetta il cateto a, il cateto b e l'ipotenusa c. Calcola l'altezza con [[h=\\frac{ab}{c}]], che divide il prodotto dei due cateti per l'ipotenusa. La modalità 2, Altezza al quadrato, accetta la proiezione p e la proiezione q, i due pezzi dell'ipotenusa, e applica [[h=\\sqrt{pq}]], la media geometrica delle proiezioni.",
            },
            {
              "kind": "p",
              "text": "Tutte le misure devono usare unità compatibili: centimetri con centimetri, metri con metri. Il risultato arriva nell'unità di lunghezza comune degli input. Usa il pulsante Reset per cancellare i campi prima di iniziare un nuovo problema.",
            },
          ],
          "table": {
            "headers": [
              "Misure note",
              "Modalità della calcolatrice",
              "Formula",
            ],
            "rows": [
              [
                "Cateti a, b e ipotenusa c",
                "Altezza all'ipotenusa",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Proiezioni p e q sull'ipotenusa",
                "Altezza al quadrato",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "Cos'è l'altezza di un triangolo rettangolo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Un'altezza è un segmento perpendicolare tracciato da un vertice di un triangolo alla retta contenente il lato opposto. In un triangolo rettangolo, l'altezza più utile parte dal vertice dell'angolo retto e incontra l'ipotenusa formando un angolo retto. Il punto in cui cade si chiama piede dell'altezza, e l'ipotenusa è la base naturale per questa coppia base-altezza.",
            },
            {
              "kind": "p",
              "text": "Ogni triangolo ha tre altezze, e il triangolo rettangolo non fa eccezione. Due di esse coincidono con i cateti: se prendi un cateto come base, l'altro cateto è già perpendicolare a esso, quindi funge da altezza. La terza altezza va dal vertice dell'angolo retto all'ipotenusa e si trova all'interno del triangolo. Questa pagina calcola proprio quella terza altezza, l'unica che richiede un vero calcolo.",
            },
            {
              "kind": "p",
              "text": "Poiché incontra l'ipotenusa ad angolo retto, questa altezza divide il triangolo originale in due triangoli rettangoli più piccoli. Questi due triangoli sono simili tra loro e all'originale, ed è per questo che l'altezza crea le eleganti relazioni di media geometrica esplorate più avanti in questa guida.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagramma dell'altezza del triangolo rettangolo spiegato",
          "blocks": [
            {
              "kind": "p",
              "text": "Il diagramma qui sotto mostra il triangolo ABC con l'angolo retto in C. I lati AC e BC si incontrano all'angolo retto, quindi AB è opposto all'angolo retto e deve essere l'ipotenusa. L'altezza CD va da C al lato AB, incontrandolo in D con un marcatore di angolo retto che mostra la relazione di perpendicolarità.",
            },
            {
              "kind": "p",
              "text": "Ogni lato ha un'etichetta standard: AC = a, BC = b, AB = c e l'altezza CD = h. L'altezza divide l'ipotenusa in due proiezioni, AD = p e DB = q, quindi c = p + q. Nota che p si trova accanto al cateto a e q accanto al cateto b, uno schema che conta per la dimostrazione per similitudine più avanti.",
            },
            {
              "kind": "p",
              "text": "Leggere il diagramma da sinistra a destra racconta l'intera storia: un triangolo rettangolo, un'altezza che scende all'ipotenusa, due segmenti di proiezione e il triangolo originale diviso in due triangoli rettangoli più piccoli, ACD e CBD, che condividono l'altezza come lato comune.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triangolo ABC con angolo retto in C; altezza CD tracciata all'ipotenusa AB, con AC uguale ad a, BC uguale a b, AB uguale a c, CD uguale a h, AD uguale a p, DB uguale a q",
            "caption": "L'altezza CD scende dall'angolo retto C perpendicolarmente all'ipotenusa AB, dividendola nelle proiezioni p e q.",
          },
        },
        "sec-formulas": {
          "h2": "Formule dell'altezza del triangolo rettangolo spiegate",
          "blocks": [
            {
              "kind": "p",
              "text": "Quattro formule trovano la stessa altezza, e ciascuna parte da misure note diverse. La calcolatrice live implementa direttamente le prime due; le altre due sono metodi manuali che puoi usare quando le tue misure sono incomplete o quando vuoi verificare un risultato in un altro modo.",
            },
            {
              "kind": "p",
              "text": "La formula dei lati [[h=\\frac{ab}{c}]] richiede entrambi i cateti e l'ipotenusa. La formula delle proiezioni [[h=\\sqrt{pq}]] richiede solo i due segmenti dell'ipotenusa, ed è equivalente al teorema dell'altezza [[h^2=pq]]. Quando conosci i cateti ma non l'ipotenusa, sostituisci [[c=\\sqrt{a^2+b^2}]] per ottenere [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Quando conosci l'area A e l'ipotenusa c, usa [[h=\\frac{2A}{c}]], che deriva direttamente dalla formula dell'area con l'ipotenusa come base.",
            },
            {
              "kind": "p",
              "text": "Non trattarle mai come quattro modalità della calcolatrice. La calcolatrice mantiene esattamente due modalità: Altezza all'ipotenusa e Altezza al quadrato. Le formule restanti sono aiuti per il calcolo manuale, per ricavare una misura mancante prima di inserire i dati nella calcolatrice, o per ricontrollare una risposta prodotta dalla calcolatrice.",
            },
          ],
          "table": {
            "headers": [
              "Formula",
              "Input richiesti",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Cateti a, b e ipotenusa c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Proiezioni p e q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Entrambi i cateti a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Area A e ipotenusa c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Come usare la calcolatrice dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Segui questi passaggi in ordine e la calcolatrice fa il resto. L'intero processo richiede meno di un minuto una volta che sai quali misure hai.",
            },
            {
              "kind": "steps",
              "steps": [
                "Individua le misure che conosci: sono tre lunghezze di lati, oppure le due proiezioni sull'ipotenusa?",
                "Seleziona la modalità della calcolatrice corrispondente: Altezza all'ipotenusa per tre lati, Altezza al quadrato per due proiezioni.",
                "Inserisci misure positive in unità compatibili, convertendo prima se arrivano in unità miste.",
                "Verifica che le misure descrivano un triangolo rettangolo valido, con i cateti che soddisfano il teorema di Pitagora.",
                "Fai clic sul pulsante Calcola per eseguire la modalità selezionata.",
                "Leggi il risultato dell'altezza nell'unità comune dei tuoi input.",
                "Verifica la risposta con uno dei metodi di controllo in questa guida se il problema è importante.",
                "Fai clic su Reset prima di inserire un nuovo problema, così i vecchi valori non si mescolano mai con i nuovi.",
              ],
            },
            {
              "kind": "p",
              "text": "La scelta della modalità è il passaggio che conta di più. Se conosci i cateti a e b più l'ipotenusa c, la modalità Altezza all'ipotenusa è adatta. Se conosci solo come l'ipotenusa si divide in p e q, scegli Altezza al quadrato. La modalità sbagliata rifiuta input validi, quindi abbinare la modalità alle misure fa risparmiare frustrazione.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Metodo 1: trovare l'altezza del triangolo rettangolo dai lati",
          "blocks": [
            {
              "kind": "p",
              "text": "Quando sono note tutte e tre le lunghezze dei lati, l'altezza si ottiene con una singola divisione. La formula [[h=\\frac{ab}{c}]] moltiplica i due cateti e divide per l'ipotenusa, e ogni simbolo ha un significato fisso: a e b sono i cateti perpendicolari, c è l'ipotenusa e h è l'altezza all'ipotenusa.",
            },
            {
              "kind": "p",
              "text": "Il classico triangolo 3-4-5 mostra ogni passaggio. Dati a = 3 cm, b = 4 cm e c = 5 cm, sostituisci nella formula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica prima i cateti: 3 × 4 = 12. Poi dividi per l'ipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è h = 2.4 cm. Nota che 2.4 è più corto di entrambi i cateti, come accade sempre per l'altezza all'ipotenusa, e la sezione sulla dimostrazione spiega più avanti perché la divisione per c è geometricamente naturale.",
            },
            {
              "kind": "p",
              "text": "Usa questo metodo ogni volta che i tre lati sono noti o misurabili direttamente. Per uno strumento dedicato che gestisce solo input dai lati, prova la <a href=\"/right-triangle-altitude-from-sides-calculator/\">calcolatrice dell'altezza dai lati</a>, che approfondisce la stessa formula.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Triangolo rettangolo con cateti 3 e 4, ipotenusa 5, altezza 2.4 tracciata perpendicolarmente all'ipotenusa",
            "caption": "Un triangolo 3-4-5: l'altezza h è uguale a (3 x 4) / 5 = 2.4.",
          },
        },
        "sec-method2": {
          "h2": "Metodo 2: trovare l'altezza dalle proiezioni sull'ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Quando l'ipotenusa è già divisa nelle sue due proiezioni, il teorema dell'altezza offre una scorciatoia. Il teorema afferma [[h^2=pq]], quindi l'altezza è la radice quadrata del prodotto delle due proiezioni:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Prendi p = 9 cm e q = 16 cm. Eleva al quadrato prima la relazione:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica: 9 × 16 = 144, quindi [[h^2=144]]. Ora estrai la radice quadrata:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "Il risultato è h = 12 cm. Questo dice che l'altezza è la media geometrica delle due proiezioni: si trova tra loro in grandezza, più vicina alla loro media che a uno degli estremi, un significato spiegato più a fondo nella sezione sulla media geometrica.",
            },
            {
              "kind": "p",
              "text": "Ricorda che p e q sono segmenti dell'ipotenusa, non i cateti del triangolo. Un errore comune è inserire le lunghezze dei cateti come proiezioni, ottenendo una risposta sbagliata. Per uno strumento costruito solo su questo metodo, vedi la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatrice dell'altezza dalle proiezioni</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Triangolo rettangolo con altezza h che divide l'ipotenusa nelle proiezioni p = 9 e q = 16, altezza h = 12",
            "caption": "L'altezza è la media geometrica delle proiezioni: sqrt(9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Come trovare l'altezza quando si conoscono solo due lati",
          "blocks": [
            {
              "kind": "p",
              "text": "A volte il terzo lato manca, ma il teorema di Pitagora lo recupera in un solo passaggio. Il metodo di recupero dipende da quali due lati conosci, quindi tratta ogni caso separatamente.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: entrambi i cateti sono noti",
            },
            {
              "kind": "p",
              "text": "Dati a = 6 cm e b = 8 cm, trova prima l'ipotenusa con [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Ora tutti e tre i lati sono noti, quindi applica la formula dei lati: h = (6 × 8) / 10 = 48 / 10 = 4.8 cm. L'ipotenusa mancante era l'unico ostacolo, e l'altezza segue direttamente.",
            },
            {
              "kind": "h3",
              "text": "Caso 2: un cateto e l'ipotenusa sono noti",
            },
            {
              "kind": "p",
              "text": "Dati a = 5 cm e c = 13 cm, ricava il cateto mancante con [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Con b = 12 cm recuperato, l'altezza è h = (5 × 12) / 13 = 60/13 cm ≈ 4.615 cm. Queste sono derivazioni manuali per trovare prima le misure richieste; la calcolatrice chiede input completi, quindi fai questo lavoro preliminare su carta prima di inserire i valori.",
            },
            {
              "kind": "p",
              "text": "Se devi spesso trovare il lato mancante stesso, la <a href=\"/right-triangle-side-calculator/\">calcolatrice dei lati</a> lo trova direttamente prima di passare all'altezza.",
            },
          ],
        },
        "sec-why": {
          "h2": "Perché la formula dell'altezza del triangolo rettangolo funziona?",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula funziona perché un triangolo può essere misurato con due diverse coppie base-altezza, e l'area resta la stessa in entrambi i casi. Questo argomento basato sull'area è la dimostrazione onesta più breve di [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Prima, usa i cateti come coppia base-altezza. Poiché i cateti sono perpendicolari, l'area è semplicemente metà del loro prodotto:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Ora usa l'ipotenusa come base e l'altezza come altezza. Lo stesso triangolo ha la stessa area:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Due espressioni per un'unica area, quindi uguagliamole:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica entrambi i membri per 2 per eliminare le frazioni, ottenendo ab = ch. Dividi entrambi i membri per c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Ogni passaggio è aritmetica reversibile, quindi la divisione per l'ipotenusa non è un trucco; è il prezzo algebrico del passaggio dalla coppia base-altezza dei cateti alla coppia base-altezza dell'ipotenusa mentre l'area resta fissa.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "Lo stesso triangolo rettangolo disegnato due volte: prima con base a e altezza b, poi con base c e altezza h",
            "caption": "Stesso triangolo, due coppie base-altezza: l'area è uguale a ab/2 e a ch/2, quindi h è uguale ad ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Dimostrazione del teorema dell'altezza con i triangoli simili",
          "blocks": [
            {
              "kind": "p",
              "text": "La formula delle proiezioni [[h=\\sqrt{pq}]] deriva dalla similitudine. Mantieni le etichette coerenti: il triangolo ABC è rettangolo in C, D si trova su AB, CD è perpendicolare ad AB, AD = p, DB = q e CD = h.",
            },
            {
              "kind": "p",
              "text": "L'altezza divide ABC in due triangoli rettangoli più piccoli, ACD e CBD. L'angolo in A è condiviso tra ABC e ACD, quindi i due sono simili; allo stesso modo l'angolo in B è condiviso tra ABC e CBD. Poiché entrambi i triangoli più piccoli sono simili all'originale, sono simili tra loro: il triangolo ACD è simile al triangolo CBD.",
            },
            {
              "kind": "p",
              "text": "Scrivi la similitudine come proporzione tra lati corrispondenti. Il cateto corto di ACD è p e il cateto lungo è h; in CBD il cateto corto è h e il cateto lungo è q. Abbinandoli si ottiene:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica in croce: h × h = p × q, quindi h² = pq. Estrai la radice quadrata:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Si usa solo la radice positiva perché le lunghezze dei lati sono positive. Una radice negativa non ha qui alcun significato geometrico. L'intuizione chiave è che l'altezza è il medio proporzionale tra i due segmenti dell'ipotenusa, che è esattamente ciò che è una media geometrica.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Triangolo rettangolo originale ABC con altezza CD, accanto ai due triangoli simili più piccoli ACD e CBD con i lati corrispondenti etichettati",
            "caption": "I triangoli ACD e CBD sono simili: p/h = h/q, quindi h al quadrato è uguale a p per q.",
          },
        },
        "sec-examples": {
          "h2": "Esempi svolti sull'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Sette esempi coprono entrambe le modalità della calcolatrice, la conversione di unità e le misure decimali. Ognuno mostra i valori dati, la formula scelta, la sostituzione e la risposta finale.",
            },
            {
              "kind": "h3",
              "text": "Esempio 1: il classico triangolo 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dati a = 3 cm, b = 4 cm, c = 5 cm. Usa [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2.4 cm. L'altezza è più corta di entrambi i cateti, come sempre.",
            },
            {
              "kind": "h3",
              "text": "Esempio 2: triangolo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dati a = 5 m, b = 12 m, c = 13 m. Usa [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4.615 m. Conserva la frazione fino all'ultimo passaggio per un decimale pulito.",
            },
            {
              "kind": "h3",
              "text": "Esempio 3: triangolo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dati a = 8 cm, b = 15 cm, c = 17 cm. Usa [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7.059 cm. Cateti più grandi danno comunque un'altezza più piccola di entrambi.",
            },
            {
              "kind": "h3",
              "text": "Esempio 4: proiezioni sull'ipotenusa uguali",
            },
            {
              "kind": "p",
              "text": "Dati p = 5 cm e q = 5 cm. Usa [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Proiezioni uguali significano che l'altezza è la più alta possibile per quell'ipotenusa, e il triangolo è un triangolo rettangolo isoscele: ogni cateto è 5√2 cm, circa 7.07 cm.",
            },
            {
              "kind": "h3",
              "text": "Esempio 5: proiezioni sull'ipotenusa disuguali",
            },
            {
              "kind": "p",
              "text": "Dati p = 4 cm e q = 25 cm. Usa [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Nota come l'altezza di 10 si trovi tra le due proiezioni, 4 e 25, che è il segno distintivo della media geometrica.",
            },
            {
              "kind": "h3",
              "text": "Esempio 6: misure decimali",
            },
            {
              "kind": "p",
              "text": "Dati a = 1.5 m, b = 2 m, c = 2.5 m. Usa [[h=\\frac{ab}{c}]]: h = (1.5 × 2) / 2.5 = 3 / 2.5 = 1.2 m. I decimali funzionano esattamente come i numeri interi purché ogni valore usi la stessa unità.",
            },
            {
              "kind": "h3",
              "text": "Esempio 7: unità di misura diverse",
            },
            {
              "kind": "p",
              "text": "Dati a = 30 cm, b = 0.4 m, c = 0.5 m. Converti prima tutto in centimetri: b = 40 cm, c = 50 cm. Poi h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Convertire prima di sostituire evita l'errore di unità più comune.",
            },
          ],
        },
        "sec-area": {
          "h2": "Relazione tra altezza e area del triangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "L'area e l'altezza si determinano a vicenda una volta nota l'ipotenusa. Con l'ipotenusa come base, l'area A = ch/2, quindi risolvendo per l'altezza si ottiene [[h=\\frac{2A}{c}]]. Questa è una strada davvero diversa: salta del tutto i cateti.",
            },
            {
              "kind": "p",
              "text": "Supponi che un problema dia l'area A = 54 cm² e l'ipotenusa c = 15 cm. Sostituisci:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Moltiplica il numeratore: 2 × 54 = 108. Poi dividi: h = 108 / 15 = 7.2 cm. L'altezza segue senza alcuna conoscenza dei singoli cateti.",
            },
            {
              "kind": "p",
              "text": "Questa strada è utile quando l'area è data direttamente, ad esempio nei problemi con testo su terreni o materiali. Serve anche come strumento di verifica: calcola l'altezza dai lati, poi conferma che 2A/c dia lo stesso valore. La <a href=\"/right-triangle-area-calculator/\">calcolatrice dell'area</a> trova l'area da qualsiasi misura fornisca un problema.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Media geometrica e proiezioni sull'ipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Il teorema dell'altezza dice che l'altezza è la media geometrica delle due proiezioni, e la media geometrica è un tipo specifico di media. Prendi p = 4 e q = 9. La loro media geometrica è √(4 × 9) = √36 = 6, quindi un triangolo con quelle proiezioni ha altezza 6.",
            },
            {
              "kind": "p",
              "text": "Confrontala con la media aritmetica ordinaria: (4 + 9) / 2 = 6.5. Le due medie differiscono, e solo 6 è l'altezza corretta. La media aritmetica fa la media sommando, mentre la media geometrica fa la media moltiplicando, il che si adatta a lunghezze che scalano insieme anziché sommarsi.",
            },
            {
              "kind": "p",
              "text": "Geometricamente, la relazione di medio proporzionale h² = pq significa che l'altezza si rapporta a ciascuna proiezione nello stesso modo in cui le proiezioni si rapportano tra loro. Questa simmetria è ciò che rende simili i due triangoli più piccoli, ed è per questo che l'altezza si trova sempre in grandezza tra le due proiezioni, mai uguale alla media aritmetica a meno che p non sia uguale a q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Proprietà importanti dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "Sette proprietà descrivono l'altezza all'ipotenusa. Insieme danno un'intuizione affidabile su quali valori di altezza sono possibili e come si comportano.",
            },
            {
              "kind": "list",
              "items": [
                "L'altezza all'ipotenusa è perpendicolare a essa, quindi è la distanza più breve dal vertice dell'angolo retto all'ipotenusa.",
                "L'altezza divide il triangolo in due triangoli più piccoli, ciascuno simile all'originale e all'altro.",
                "L'altezza è più corta di entrambi i cateti; nessun cateto può essere il percorso più breve verso l'ipotenusa.",
                "L'altezza è più corta dell'ipotenusa stessa, poiché un segmento perpendicolare è il percorso più breve.",
                "L'altezza è la media geometrica delle due proiezioni sull'ipotenusa, [[h=\\sqrt{pq}]].",
                "A ipotenusa fissata, l'altezza è massima quando le due proiezioni sono uguali, il che accade quando i due cateti sono uguali.",
                "Scalare ogni lunghezza di lato dello stesso fattore scala l'altezza di quel fattore; raddoppia il triangolo, raddoppia l'altezza.",
              ],
            },
            {
              "kind": "p",
              "text": "La sesta proprietà ha un limite preciso: l'altezza non può mai superare metà dell'ipotenusa, [[h \\leq \\frac{c}{2}]], con uguaglianza solo quando i cateti sono uguali. Un triangolo 45-45-90 con ipotenusa 10 ha altezza esattamente 5, il massimo; un triangolo 6-8-10 con la stessa ipotenusa raggiunge solo 4.8, come mostra il diagramma.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Due triangoli rettangoli che condividono un'ipotenusa di 10: un triangolo 45-45-90 con altezza 5 e un triangolo in stile 6-8-10 con altezza 4",
            "caption": "Stessa ipotenusa 10: proiezioni uguali danno l'altezza più alta, 5.",
          },
        },
        "sec-verify": {
          "h2": "Come verificare se la tua risposta sull'altezza è corretta",
          "blocks": [
            {
              "kind": "p",
              "text": "Tre controlli indipendenti individuano gli errori di calcolo. Usane almeno uno ogni volta che una risposta sull'altezza conta.",
            },
            {
              "kind": "h3",
              "text": "Controllo 1: area del triangolo",
            },
            {
              "kind": "p",
              "text": "Confronta ab/2 con ch/2 usando la tua altezza. Per il triangolo 3-4-5 con h = 2.4: ab/2 = (3 × 4)/2 = 6, e ch/2 = (5 × 2.4)/2 = 6. Aree uguali confermano che l'altezza si adatta ai lati.",
            },
            {
              "kind": "h3",
              "text": "Controllo 2: media geometrica",
            },
            {
              "kind": "p",
              "text": "Verifica [[h^2=pq]] quando le proiezioni sono note. Con p = 9 e q = 16: h² = 12² = 144, e pq = 9 × 16 = 144. L'uguaglianza significa che l'altezza è coerente con come si divide l'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Controllo 3: teorema di Pitagora",
            },
            {
              "kind": "p",
              "text": "Conferma [[a^2+b^2=c^2]] per i lati dati: 9 + 16 = 25 nel caso 3-4-5. Questo controllo convalida le lunghezze dei lati, non direttamente l'altezza, ma un inserimento errato di un lato è la ragione più comune per cui una risposta sull'altezza fallisce gli altri due controlli.",
            },
            {
              "kind": "p",
              "text": "Esegui ogni controllo in unità coerenti. Mescolare centimetri e metri rompe silenziosamente il controllo dell'area, quindi converti prima e verifica dopo.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Errori comuni nel calcolo dell'altezza",
          "blocks": [
            {
              "kind": "p",
              "text": "Dieci errori si presentano ancora e ancora. Ognuno è facile da individuare una volta che ne conosci la firma.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confondere l'altezza con un cateto. L'altezza incontra l'ipotenusa ad angolo retto; un cateto incontra l'altro cateto all'angolo retto. In un triangolo 3-4-5, h = 2.4, non 3 o 4.",
                "Scegliere la modalità sbagliata della calcolatrice. Inserire cateti e ipotenusa nella modalità Altezza al quadrato, che si aspetta proiezioni, produce sciocchezze. Abbina la modalità alle misure.",
                "Confondere le proiezioni con i cateti. Inserire a = 3 e b = 4 come p e q calcola √(12) ≈ 3.46, che non è l'altezza. Le proiezioni sono segmenti dell'ipotenusa.",
                "Usare l'ipotenusa sbagliata. Dividere ab per un cateto invece che per l'ipotenusa, ad esempio 12/4 = 3, sovrastima l'altezza. Il divisore deve essere il lato più lungo, c.",
                "Dimenticare la radice quadrata nella formula delle proiezioni. Fermarsi a h² = 144 dà 144 come altezza; la risposta vera è h = 12.",
                "Mescolare centimetri e metri. Con a = 30 cm e c = 0.5 m, sostituire 0.5 direttamente dà un'altezza sbagliata. Converti prima: 50 cm.",
                "Inserire lunghezze di lati non valide. Lati come 2, 3, 10 non soddisfano il teorema di Pitagora, quindi nessun triangolo rettangolo esiste e nessuna altezza è definita.",
                "Arrotondare troppo presto. Arrotondare 60/13 a 4.6 prima di un ulteriore passaggio trascina l'errore avanti. Conserva la frazione e arrotonda solo la risposta finale.",
                "Trattare h² come l'altezza finale. Se un calcolo finisce con h² = 36, l'altezza è 6, non 36.",
                "Applicare le formule del triangolo rettangolo a un triangolo qualsiasi. Le formule qui richiedono un angolo retto; per altri triangoli le relazioni dell'altezza differiscono.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Applicazioni reali dell'altezza del triangolo rettangolo",
          "blocks": [
            {
              "kind": "p",
              "text": "I calcoli dell'altezza supportano qualsiasi lavoro basato sulla geometria del triangolo rettangolo. Nell'insegnamento della geometria, il teorema dell'altezza dà agli studenti un primo assaggio delle dimostrazioni per similitudine e delle medie geometriche. Il disegno tecnico e il design geometrico usano l'altezza per posizionare perpendicolari quando tracciano pannelli triangolari o forme di staffe.",
            },
            {
              "kind": "p",
              "text": "La geometria topografica usa le relazioni del triangolo rettangolo quando mappa appezzamenti con offset perpendicolari, e i modelli di pianificazione edilizia le usano quando un telaio triangolare rettangolo deve incontrare un muro ad angolo retto. I calcoli dell'area vanno nell'altra direzione: da un'altezza e un'ipotenusa note, [[h=\\frac{2A}{c}]] recupera l'altezza senza misurare i cateti.",
            },
            {
              "kind": "p",
              "text": "Questi sono schizzi geometrici ipotetici, non procedure ingegneristiche. I veri lavori topografici e strutturali richiedono misure adeguate, ipotesi di progettazione e standard professionali; il teorema dell'altezza descrive la geometria, non sostituisce mai i metodi professionali.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemi pratici con risposte",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinque problemi usano valori non visti negli esempi principali. Risolvili ciascuno, poi controlla le risposte qui sotto.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: dai lati, livello principiante",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateti a = 9 cm e b = 40 cm con ipotenusa c = 41 cm. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: dalle proiezioni, livello principiante",
            },
            {
              "kind": "p",
              "text": "L'altezza di un triangolo rettangolo divide l'ipotenusa in p = 16 m e q = 36 m. Trova l'altezza.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: misure decimali",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha a = 0.6 m, b = 0.8 m, c = 1.0 m. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: lato mancante",
            },
            {
              "kind": "p",
              "text": "Un triangolo rettangolo ha cateto a = 7 in e ipotenusa c = 25 in. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: area di un'aiuola",
            },
            {
              "kind": "p",
              "text": "Un'aiuola a forma di triangolo rettangolo ha area A = 96 m² e ipotenusa 20 m. Trova l'altezza all'ipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Risposte dei problemi pratici",
            },
            {
              "kind": "p",
              "text": "Problema 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8.780 cm. Prima conferma i lati: 9² + 40² = 81 + 1600 = 1681 = 41², quindi il triangolo è valido.",
            },
            {
              "kind": "p",
              "text": "Problema 2: h = √(16 × 36) = √576 = 24 m. L'altezza si trova tra le due proiezioni, come deve fare la media geometrica.",
            },
            {
              "kind": "p",
              "text": "Problema 3: h = (0.6 × 0.8) / 1.0 = 0.48 / 1.0 = 0.48 m. I decimali richiedono lo stesso trattamento dei numeri interi.",
            },
            {
              "kind": "p",
              "text": "Problema 4: recupera il cateto mancante: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Poi h = (7 × 24) / 25 = 168/25 in ≈ 6.72 in.",
            },
            {
              "kind": "p",
              "text": "Problema 5: usa la strada dell'area: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9.6 m. Non sono servite misure dei cateti.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calcolatrici correlate per i triangoli rettangoli",
          "blocks": [
            {
              "kind": "p",
              "text": "Questa guida ha coperto entrambe le modalità dell'altezza: lunghezze dei lati e proiezioni sull'ipotenusa. Se sai già quali misure hai, gli strumenti specializzati approfondiscono: la <a href=\"/right-triangle-altitude-from-sides-calculator/\">calcolatrice dell'altezza dai lati</a> e la <a href=\"/right-triangle-altitude-from-projections-calculator/\">calcolatrice dell'altezza dalle proiezioni</a>. La <a href=\"/right-triangle-projection-calculator/\">calcolatrice delle proiezioni</a> trova p e q stessi quando sono noti solo i lati.",
            },
          ],
        },
      },
      "faqHeading": "Domande frequenti",
      "faqs": [
        {
          "question": "Cos'è l'altezza di un triangolo rettangolo?",
          "answer": "L'altezza all'ipotenusa è il segmento perpendicolare dal vertice dell'angolo retto all'ipotenusa. È la terza altezza del triangolo rettangolo, distinta dai due cateti, e divide l'ipotenusa nelle proiezioni p e q.",
        },
        {
          "question": "Come calcolo l'altezza di un triangolo rettangolo?",
          "answer": "Usa la formula dei lati [[h=\\frac{ab}{c}]] quando sono noti i cateti e l'ipotenusa, oppure la formula delle proiezioni [[h=\\sqrt{pq}]] quando sono noti i segmenti dell'ipotenusa. La calcolatrice applica la modalità corrispondente alle tue misure.",
        },
        {
          "question": "Qual è la formula dell'altezza usando tre lati?",
          "answer": "Con i cateti a e b e l'ipotenusa c, l'altezza è [[h=\\frac{ab}{c}]]. Moltiplica i due cateti e dividi per l'ipotenusa. Per un triangolo 3-4-5, h = (3 × 4) / 5 = 2.4.",
        },
        {
          "question": "Come calcolo l'altezza dalle proiezioni?",
          "answer": "Il teorema dell'altezza dice [[h^2=pq]], quindi estrai la radice quadrata: [[h=\\sqrt{pq}]]. Per p = 9 e q = 16, h = √(9 × 16) = √144 = 12. Le proiezioni sono segmenti dell'ipotenusa, non i cateti.",
        },
        {
          "question": "Posso calcolare l'altezza usando solo due lati?",
          "answer": "Sì, recuperando prima il terzo lato. Con entrambi i cateti, trova [[c=\\sqrt{a^2+b^2}]]; con un cateto e l'ipotenusa, trova [[b=\\sqrt{c^2-a^2}]]. Poi applica [[h=\\frac{ab}{c}]] come al solito.",
        },
        {
          "question": "«Altitude» è la stessa cosa di «height»?",
          "answer": "Nei triangoli rettangoli i termini spesso si sovrappongono, ma «altitude» ha il significato preciso di segmento perpendicolare da un vertice al lato opposto. In questa pagina, «altitude» significa sempre la perpendicolare dal vertice dell'angolo retto all'ipotenusa.",
        },
        {
          "question": "L'altezza è sempre più corta dell'ipotenusa?",
          "answer": "Sì. L'altezza è la distanza più breve dal vertice dell'angolo retto all'ipotenusa, e l'ipotenusa è più lunga di qualsiasi segmento del genere. È anche più corta di entrambi i cateti.",
        },
        {
          "question": "L'altezza può essere uguale a una proiezione dell'ipotenusa?",
          "answer": "Sì, quando le proiezioni sono uguali. Se p = q, allora [[h=\\sqrt{p \\times p}=p]], quindi l'altezza è uguale a ciascuna proiezione. Questo accade nei triangoli rettangoli isosceli, dove l'altezza è anche metà dell'ipotenusa.",
        },
        {
          "question": "Come si collega il teorema della media geometrica all'altezza?",
          "answer": "Il teorema della media geometrica è un altro nome del teorema dell'altezza: [[h=\\sqrt{pq}]] dice che l'altezza è la media geometrica delle proiezioni sull'ipotenusa. La similitudine dei due triangoli più piccoli lo dimostra.",
        },
        {
          "question": "Come controllo il mio calcolo dell'altezza?",
          "answer": "Confronta le due formule dell'area ab/2 e ch/2; devono coincidere. Se le proiezioni sono note, conferma [[h^2=pq]]. Verifica anche [[a^2+b^2=c^2]] per confermare che i lati descrivono un triangolo rettangolo valido.",
        },
        {
          "question": "Posso usare questa calcolatrice per un triangolo non rettangolo?",
          "answer": "No. Entrambe le formule richiedono un angolo retto: l'argomento dell'area ha bisogno di cateti perpendicolari, e il teorema dell'altezza ha bisogno della similitudine dell'angolo retto. Per altri triangoli, le relazioni dell'altezza sono diverse.",
        },
        {
          "question": "Quale modalità della calcolatrice dovrei scegliere?",
          "answer": "Scegli Altezza all'ipotenusa quando conosci i due cateti e l'ipotenusa. Scegli Altezza al quadrato quando conosci le due proiezioni p e q sull'ipotenusa. Abbinare la modalità alle misure note è l'unica preparazione che conta.",
        },
      ],
      "relatedHeading": "Esplora le calcolatrici correlate per i triangoli rettangoli",
      "relatedIntro": "Scegli lo strumento adatto alle misure che già conosci.",
      "relatedItems": [
        "Calcolatrice dell'altezza del triangolo rettangolo dai lati",
        "Calcolatrice dell'altezza del triangolo rettangolo dalle proiezioni",
        "Calcolatrice dell'area del triangolo rettangolo",
        "Calcolatrice dei lati del triangolo rettangolo",
        "Calcolatrice delle proiezioni del triangolo rettangolo",
      ],
    },
};
