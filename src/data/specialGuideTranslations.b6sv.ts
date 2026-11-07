// specialGuideTranslations.bsv.ts: Special Right Triangle
// Guide (Page 41 of 45) translation.
export const SPECIAL_B6_SV = {
  "sv": {
      "meta": {
        "title": "Kalkylator för speciella rätvinkliga trianglar: förhållandena 45-45-90 och 30-60-90",
        "description": "Lös 45-45-90- och 30-60-90-trianglar med kalkylatorn för speciella rätvinkliga trianglar. Använd de fasta förhållandena 1:1:√2 och 1:√3:2 för att snabbt hitta saknade sidor.",
        "primaryKeyword": "Kalkylator för speciella rätvinkliga trianglar",
        "slug": "special-right-triangle-calculator",
      },
      "tocHeading": "Avsnittsnavigering",
      "tocItems": {
        "sec-intro": "Kalkylator för speciella rätvinkliga trianglar",
        "sec-calculate": "Beräkna saknade sidor i speciella rätvinkliga trianglar",
        "sec-what": "Vad är speciella rätvinkliga trianglar?",
        "sec-types": "De två huvudtyperna av speciella rätvinkliga trianglar",
        "sec-454590": "Förstå 45-45-90-triangeln",
        "sec-derive-454590": "Härleda sidförhållandet 45-45-90",
        "sec-306090": "Förstå 30-60-90-triangeln",
        "sec-derive-306090": "Härleda sidförhållandet 30-60-90",
        "sec-compare": "Jämföra de två speciella trianglarnas sidförhållanden",
        "sec-how-hyp-45": "Så använder du 45-45-90-kalkylatorn för hypotenusan",
        "sec-how-leg-45": "Så hittar du en katet från 45-45-90-hypotenusan",
        "sec-how-long-30": "Så använder du 30-60-90-kalkylatorn för långa kateten",
        "sec-how-hyp-30": "Så använder du 30-60-90-kalkylatorn för hypotenusan",
        "sec-examples": "Steg-för-steg-exempel för båda speciella triangeltyperna",
        "sec-area-perimeter": "Area- och omkretssamband i speciella rätvinkliga trianglar",
        "sec-exact": "Exakta radikalsvar kontra decimala approximationer",
        "sec-verify": "Så kontrollerar du beräkningar för speciella rätvinkliga trianglar",
        "sec-mistakes": "Vanliga misstag vid lösning av speciella rätvinkliga trianglar",
        "sec-applications": "Praktiska tillämpningar av speciella rätvinkliga trianglar",
        "sec-practice": "Övningsuppgifter med svar",
        "sec-related": "Relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkylator för speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Lös 45-45-90- och 30-60-90-trianglar utifrån en känd sida med hjälp av deras fasta sidförhållanden.",
            },
            {
              "kind": "p",
              "text": "En speciell rätvinklig triangel är en rätvinklig triangel vars vinklar ger ett fast sidförhållande som aldrig ändras, oavsett hur stor eller liten triangeln är. Endast två vinkelmönster gör detta i skolgeometrin: 45-45-90-triangeln och 30-60-90-triangeln. Kalkylatorn för speciella rätvinkliga trianglar på den här sidan täcker båda typerna, så en känd sida räcker för att hitta alla andra sidor.",
            },
            {
              "kind": "p",
              "text": "45-45-90-triangeln har två lika kateter, och dess sidor följer förhållandet [[a : b : c = 1 : 1 : \\sqrt{2}]]. 30-60-90-triangeln har tre olika sidlängder, och dess sidor följer förhållandet [[a : b : c = 1 : \\sqrt{3} : 2]]. Här är [[a]] och [[b]] kateterna och [[c]] hypotenusan, och betydelsen av [[a]] och [[b]] ändras med triangeltypen, så avsnitten nedan anger alltid vilken typ de använder.",
            },
            {
              "kind": "p",
              "text": "Om en 45-45-90-triangel har en katet på 5 cm är den andra kateten också 5 cm och hypotenusan [[c = 5\\sqrt{2} \\approx 7.071]] cm. Om en 30-60-90-triangel har en kort katet på 5 cm är den långa kateten [[b = 5\\sqrt{3} \\approx 8.660]] cm och hypotenusan [[c = 10]] cm. De fyra kalkylatorlägena på den här sidan utför exakt dessa steg, och guiden nedan förklarar var varje förhållande kommer ifrån, hur du väljer rätt läge och hur du kontrollerar varje svar.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna saknade sidor i speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan har fyra lägen, ett för varje saknad sida som ett problem med speciella rätvinkliga trianglar vanligtvis frågar efter. Välj triangeltyp först och välj sedan den sida du känner till och den sida du behöver. Tabellen nedan listar varje läge med dess indata, dess formel och dess resultat.",
            },
          ],
          "table": {
            "headers": [
              "Kalkylatorläge",
              "Indata som krävs",
              "Resultat",
            ],
            "rows": [
              [
                "45-45-90: Hypotenusa",
                "Katet a",
                "Hypotenusa c",
              ],
              [
                "45-45-90: Katet",
                "Hypotenusa c",
                "Katet a",
              ],
              [
                "30-60-90: Lång katet",
                "Kort katet a",
                "Lång katet b",
              ],
              [
                "30-60-90: Hypotenusa",
                "Kort katet a",
                "Hypotenusa c",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Läge 1 hittar hypotenusan i en 45-45-90-triangel utifrån endera lika katet.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Läge 2 hittar en katet i en 45-45-90-triangel utifrån hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Läge 3 hittar den långa kateten i en 30-60-90-triangel utifrån den korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Läge 4 hittar hypotenusan i en 30-60-90-triangel utifrån den korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "För att använda ett läge bekräftar du triangeltypen utifrån dess vinklar, identifierar den kända sidan, anger ett positivt mått, väljer en enhet som stämmer med resten av uppgiften och klickar på Beräkna. Använd Återställ före en ny beräkning så att ett gammalt värde inte kan läcka in i nästa svar. Varje läge behöver en annan formel eftersom varje läge utgår från en annan känd sida, och de två triangeltyperna har olika förhållanden, så en 45-45-90-formel hör aldrig hemma i ett 30-60-90-problem.",
            },
          ],
          "image": {
            "src": "special-four-modes.svg",
            "alt": "Flödesdiagram över de fyra lägena i kalkylatorn för speciella rätvinkliga trianglar: 45-45-90 katet till hypotenusa, 45-45-90 hypotenusa till katet, 30-60-90 kort katet till lång katet och 30-60-90 kort katet till hypotenusa",
            "caption": "De fyra kalkylatorlägena: varje läge utgår från en känd sida och tillämpar ett fast förhållande.",
          },
        },
        "sec-what": {
          "h2": "Vad är speciella rätvinkliga trianglar?",
          "blocks": [
            {
              "kind": "p",
              "text": "En speciell rätvinklig triangel är en rätvinklig triangel vars tre vinklar är fasta vid värden som tvingar dess sidor till ett enda oföränderligt förhållande. De flesta rätvinkliga trianglar har ingen sådan genväg: att känna till en sida säger ingenting om de andra förrän du också känner till en vinkel eller en andra sida. I en speciell rätvinklig triangel bestämmer vinklarna ensamma formen, så en sidlängd bestämmer hela triangeln.",
            },
            {
              "kind": "p",
              "text": "Pythagoras sats gäller fortfarande, och det är verktyget som ger båda förhållandena. I en 45-45-90-triangel gör de två lika kateterna att satsen krymper till [[2a^2 = c^2]], vilket ger [[c = a\\sqrt{2}]]. I en 30-60-90-triangel är hypotenusan dubbelt så lång som den korta kateten, så satsen ger [[b^2 = (2a)^2 - a^2 = 3a^2]], vilket ger [[b = a\\sqrt{3}]]. De fullständiga härledningarna finns i egna avsnitt nedan.",
            },
            {
              "kind": "p",
              "text": "Förhållandena förblir desamma vid varje storlek eftersom trianglarna är likformiga inom sin egen typ. En 45-45-90-triangel med en katet på 1 cm och en med en katet på 100 cm har samma form, samma vinklar och samma förhållande 1:1:√2. Det skaloberoendet är det som gör dessa trianglar så användbara i geometri och trigonometri: när du väl känner igen vinkelmönstret kan du skriva ned varje sida utan att mäta eller använda sinus och cosinus.",
            },
            {
              "kind": "p",
              "text": "45-45-90- och 30-60-90-trianglarna är två olika familjer, inte två namn på samma form. Den ena har två lika kateter och den andra har tre olika sidlängder. Att blanda ihop dem är det vanligaste felet inom detta ämne, så nästa avsnitt presenterar varje familj för sig innan guiden jämför dem sida vid sida.",
            },
          ],
          "image": {
            "src": "special-both-types.svg",
            "alt": "Två speciella rätvinkliga trianglar sida vid sida: en 45-45-90-triangel med förhållandet 1:1:√2 och en 30-60-90-triangel med förhållandet 1:√3:2",
            "caption": "De två speciella rätvinkliga trianglarna: 45-45-90 med lika kateter och 30-60-90 med tre olika sidor.",
          },
        },
        "sec-types": {
          "h2": "De två huvudtyperna av speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Båda speciella trianglarna är rätvinkliga trianglar, så var och en har en vinkel på 90° och en hypotenusa mittemot den. Det som skiljer sig är paret av spetsiga vinklar, och de spetsiga vinklarna avgör sidförhållandet. Lär dig varje typ separat först, så blir jämförelsen senare i guiden lätt att följa.",
            },
            {
              "kind": "h3",
              "text": "45-45-90-triangeln",
            },
            {
              "kind": "list",
              "items": [
                "Vinklar: 45°, 45°, 90°.",
                "Två lika kateter, så endera kateten kan fungera som känd indata.",
                "Hypotenusan är lika med kateten gånger √2, [[c = a\\sqrt{2}]].",
                "Sidförhållande: [[a : b : c = 1 : 1 : \\sqrt{2}]].",
                "Kallas även likbent rätvinklig triangel.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90-triangeln",
            },
            {
              "kind": "list",
              "items": [
                "Vinklar: 30°, 60°, 90°.",
                "Kort katet [[a]] motstående vinkeln 30°, lång katet [[b]] motstående vinkeln 60°.",
                "Hypotenusan är lika med dubbla korta kateten, [[c = 2a]].",
                "Långa kateten är lika med korta kateten gånger √3, [[b = a\\sqrt{3}]].",
                "Sidförhållande: [[a : b : c = 1 : \\sqrt{3} : 2]].",
                "En oliksidig rätvinklig triangel, eftersom alla tre sidor skiljer sig åt.",
              ],
            },
            {
              "kind": "p",
              "text": "Den visuella skillnaden är tydlig när du väl letar efter den. I en 45-45-90-triangel ser de två kateterna lika långa ut, och hypotenusan går i 45° mot varje katet. I en 30-60-90-triangel är kateten motstående vinkeln 30° synbart den kortaste sidan, kateten motstående vinkeln 60° är längre, och hypotenusan är exakt dubbelt så lång som den korta kateten. Tabellen nedan sammanfattar kontrasten.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Vinklar",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Sidförhållande",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Lika kateter",
                "Ja",
                "Nej",
              ],
              [
                "Kortaste sidan",
                "Båda kateterna",
                "Kort katet (motstående 30°)",
              ],
              [
                "Längsta sidan",
                "Hypotenusa",
                "Hypotenusa",
              ],
              [
                "Formel för hypotenusan",
                "a√2",
                "2a",
              ],
              [
                "Formel för långa kateten",
                "Ej tillämplig",
                "a√3",
              ],
              [
                "Triangeltyp",
                "Likbent rätvinklig",
                "Oliksidig rätvinklig",
              ],
            ],
          },
        },
        "sec-454590": {
          "h2": "Förstå 45-45-90-triangeln",
          "blocks": [
            {
              "kind": "p",
              "text": "En 45-45-90-triangel är en likbent rätvinklig triangel. Dess två spetsiga vinklar är båda 45°, så vinklarna summerar till [[45° + 45° + 90° = 180°]], som varje triangel måste. Eftersom de två spetsiga vinklarna är lika är sidorna mittemot dem också lika, och därför har de två kateterna samma längd.",
            },
            {
              "kind": "p",
              "text": "Kalla kateterna [[a]] och [[b]] och hypotenusan [[c]]. Lika kateter betyder [[a = b]], och sidförhållandet är [[a : b : c = 1 : 1 : \\sqrt{2}]]. Hypotenusan är den längsta sidan, som i varje rätvinklig triangel, och den är längre än endera kateten med en faktor √2, cirka 1.414.",
            },
            {
              "kind": "p",
              "text": "De två fungerande formlerna är hypotenusan från en katet och kateten från hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Ta en katet på 5 cm. Den andra kateten är 5 cm, och hypotenusan är [[c = 5\\sqrt{2} \\approx 7.071]] cm. Samma steg fungerar vid varje storlek: en katet på 12 cm ger en hypotenusa på [[12\\sqrt{2} \\approx 16.971]] cm, och en katet på 1 enhet ger en hypotenusa på √2 enheter. <a href=\"/45-45-90-triangle-calculator/\">45-45-90-triangelkalkylatorn</a> täcker denna triangeltyp i full detalj, inklusive area och omkrets.",
            },
          ],
          "image": {
            "src": "special-454590-geometry.svg",
            "alt": "En 45-45-90-triangel med två lika kateter markerade som kongruenta, vinklarna 45°, 45°, 90° och hypotenusan märkt a√2",
            "caption": "En 45-45-90-triangel: lika kateter, lika spetsiga vinklar och en hypotenusa på a√2.",
          },
        },
        "sec-derive-454590": {
          "h2": "Härleda sidförhållandet 45-45-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 1:1:√2 är inte en regel att memorera blint. Det följer i några steg från Pythagoras sats, och att se stegen en gång gör förhållandet svårt att glömma. Börja med att kateterna är lika.",
            },
            {
              "kind": "p",
              "text": "[[[a = b]]]",
            },
            {
              "kind": "p",
              "text": "Tillämpa Pythagoras sats på kateterna och hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ersätt [[b]] med [[a]], eftersom kateterna är lika.",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Kombinera de två identiska termerna.",
            },
            {
              "kind": "p",
              "text": "[[[2a^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Ta den positiva kvadratroten ur båda sidor. Längder är positiva, så den negativa roten förkastas.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Sätt [[a = 1]] så framträder förhållandet direkt: kateterna 1 och 1, hypotenusan √2, så förhållandet är [[1 : 1 : \\sqrt{2}]]. Samma förhållande förklarar diagonalen i en kvadrat. En kvadrat med sidan [[a]] har en diagonal som delar den i två kongruenta 45-45-90-trianglar, och diagonalen är hypotenusan i endera av dem, så diagonalen är lika med [[a\\sqrt{2}]]. En kvadrat med en sida på 8 cm har en diagonal på [[8\\sqrt{2} \\approx 11.314]] cm.",
            },
          ],
          "images": [
            {
              "src": "special-454590-derivation.svg",
              "alt": "En märkt 45-45-90-triangel som visar den pythagoreiska härledningen a i kvadrat plus a i kvadrat är lika med c i kvadrat, vilket ger c lika med a gånger roten ur 2",
              "caption": "Den pythagoreiska härledningen: lika kateter gör a² + b² = c² till 2a² = c².",
            },
            {
              "src": "special-square-diagonal.svg",
              "alt": "En kvadrat med sidan 8 cm och en diagonal på 8 roten ur 2 cm, delad i två kongruenta 45-45-90-trianglar",
              "caption": "En kvadratdiagonal delar kvadraten i två kongruenta 45-45-90-trianglar.",
            },
          ],
        },
        "sec-306090": {
          "h2": "Förstå 30-60-90-triangeln",
          "blocks": [
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har tre olika vinklar, så den har tre olika sidlängder. Sidan mittemot den minsta vinkeln är den kortaste sidan, sidan mittemot den mellersta vinkeln är den mellersta sidan, och sidan mittemot vinkeln 90° är hypotenusan. Den regeln om motstående sida är hela nyckeln till att märka denna triangel rätt.",
            },
            {
              "kind": "p",
              "text": "Använd [[a]] för den korta kateten motstående 30°, [[b]] för den långa kateten motstående 60° och [[c]] för hypotenusan motstående 90°. De två fungerande formlerna är den långa kateten från den korta kateten och hypotenusan från den korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Sidförhållandet är [[a : b : c = 1 : \\sqrt{3} : 2]], med √3 cirka 1.732. Ta en kort katet på 5 cm. Den långa kateten är [[b = 5\\sqrt{3} \\approx 8.660]] cm och hypotenusan är [[c = 10]] cm. Kontrollera med Pythagoras sats: [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], vilket bekräftar att de tre sidorna passar ihop.",
            },
            {
              "kind": "p",
              "text": "Hypotenusan är alltid exakt dubbelt så lång som den korta kateten, vilket är den snabbaste kontrollen inom detta ämne. Om en uppgift säger att hypotenusan är 14 cm är den korta kateten 7 cm på en gång, och den långa kateten följer som [[7\\sqrt{3} \\approx 12.124]] cm. <a href=\"/30-60-90-triangle-calculator/\">30-60-90-triangelkalkylatorn</a> täcker denna triangeltyp i full detalj, inklusive dess härledning från den liksidiga triangeln.",
            },
          ],
          "image": {
            "src": "special-306090-geometry.svg",
            "alt": "En 30-60-90-triangel med kort katet a motstående 30 grader, lång katet a roten ur 3 motstående 60 grader och hypotenusa 2a motstående 90 grader",
            "caption": "En 30-60-90-triangel: den korta kateten ligger mittemot 30° och den långa kateten mittemot 60°.",
          },
        },
        "sec-derive-306090": {
          "h2": "Härleda sidförhållandet 30-60-90",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 1:√3:2 kommer från en liksidig triangel, och konstruktionen är värd att följa steg för steg. Börja med en liksidig triangel vars sidlängd är [[2a]]. Alla tre av dess vinklar är 60° och alla tre sidor är lika.",
            },
            {
              "kind": "p",
              "text": "Dra en höjd från ett hörn till den motstående sidan. Höjden gör tre saker på en gång: den delar den liksidiga triangeln i två kongruenta rätvinkliga trianglar, den skär basen i två segment med längden [[a]], och den delar en vinkel på 60° i två vinklar på 30°. Varje halva är nu en triangel med vinklarna 30°, 60° och 90°.",
            },
            {
              "kind": "p",
              "text": "I endera halvan är hypotenusan den ursprungliga liksidiga sidan, [[2a]], och den korta kateten är halvbasen, [[a]]. Kalla höjden, som är den långa kateten, [[b]]. Tillämpa Pythagoras sats på halvtriangeln.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Utveckla kvadraten.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "Förenkla.",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Ta den positiva kvadratroten.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Sätt [[a = 1]] så framträder förhållandet: kort katet 1, lång katet √3, hypotenusa 2, så förhållandet är [[1 : \\sqrt{3} : 2]]. Höjden i en liksidig triangel med sidan 10 cm är därför [[5\\sqrt{3} \\approx 8.660]] cm, eftersom höjden är den långa kateten i en 30-60-90-triangel med kort katet 5 cm.",
            },
          ],
          "image": {
            "src": "special-equilateral-derivation.svg",
            "alt": "En liksidig triangel med sidan 2a delad av en höjd i två kongruenta 30-60-90-trianglar, var och en med kort katet a, lång katet a roten ur 3 och hypotenusa 2a",
            "caption": "En höjd delar en liksidig triangel i två kongruenta 30-60-90-trianglar.",
          },
        },
        "sec-compare": {
          "h2": "Jämföra de två speciella trianglarnas sidförhållanden",
          "blocks": [
            {
              "kind": "p",
              "text": "De två förhållandena ser lika ut vid en snabb blick, vilket är precis varför de blandas ihop. Båda innehåller en kvadratrot och ett litet heltal, och båda beskriver en rätvinklig triangel. Men talen sitter på olika platser: i 1:1:√2 tillhör roten hypotenusan, medan i 1:√3:2 tillhör roten den långa kateten och hypotenusan är heltalet 2.",
            },
          ],
          "table": {
            "headers": [
              "Egenskap",
              "45-45-90",
              "30-60-90",
            ],
            "rows": [
              [
                "Vinklar",
                "45°, 45°, 90°",
                "30°, 60°, 90°",
              ],
              [
                "Sidförhållande",
                "1:1:√2",
                "1:√3:2",
              ],
              [
                "Lika kateter",
                "Ja",
                "Nej",
              ],
              [
                "Kortaste sidan",
                "Båda kateterna",
                "Kort katet",
              ],
              [
                "Längsta sidan",
                "Hypotenusa",
                "Hypotenusa",
              ],
              [
                "Formel för hypotenusan",
                "a√2",
                "2a",
              ],
              [
                "Formel för långa kateten",
                "Ej tillämplig",
                "a√3",
              ],
              [
                "Triangeltyp",
                "Likbent rätvinklig",
                "Oliksidig rätvinklig",
              ],
            ],
          },
          "blocks2": [
            {
              "kind": "p",
              "text": "Formlerna kan inte bytas ut mot varandra. Att multiplicera en kort katet i en 30-60-90-triangel med √2 ger en felaktig hypotenusa, och att fördubbla en katet i en 45-45-90-triangel ger en felaktig hypotenusa. De två trianglarna kommer från olika konstruktioner, en kvadratdiagonal för 45-45-90 och en höjd i en liksidig triangel för 30-60-90, så deras förhållanden svarar på olika geometrifrågor.",
            },
            {
              "kind": "p",
              "text": "Ett numeriskt exempel för varje typ visar skillnaden. En 45-45-90-triangel med kateten 5 cm har hypotenusan [[5\\sqrt{2} \\approx 7.071]] cm. En 30-60-90-triangel med kort katet 5 cm har hypotenusan 10 cm och den långa kateten [[5\\sqrt{3} \\approx 8.660]] cm. Samma starttal, väldigt olika svar, och det enda sättet att skilja dem åt är vinkelmönstret.",
            },
          ],
          "image": {
            "src": "special-ratio-comparison.svg",
            "alt": "Jämförelse sida vid sida av förhållandet 45-45-90 1:1:√2 och förhållandet 30-60-90 1:√3:2 i matchande skala",
            "caption": "Båda förhållandena i matchande skala: roten sitter på hypotenusan för 45-45-90 och på den långa kateten för 30-60-90.",
          },
        },
        "sec-how-hyp-45": {
          "h2": "Så använder du 45-45-90-kalkylatorn för hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Läge 1 är det mest använda läget på den här sidan, och det tar bara några sekunder när triangeltypen är bekräftad. Följ stegen i ordning.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bekräfta att triangeln är 45-45-90: båda spetsiga vinklarna mäter 45°.",
                "Välj endera lika kateten som den kända sidan, eftersom båda kateterna har samma längd.",
                "Välj läget för 45-45-90-hypotenusan i kalkylatorn.",
                "Ange katetens längd som ett positivt tal.",
                "Välj den enhet som stämmer med resten av uppgiften.",
                "Klicka på Beräkna hypotenusan c.",
                "Läs av resultatet, som är hypotenusan i samma enhet.",
                "Använd Återställ innan du påbörjar en ny beräkning.",
              ],
            },
            {
              "kind": "p",
              "text": "Läget tillämpar formeln nedan.",
            },
            {
              "kind": "p",
              "text": "[[[c = a\\sqrt{2}]]]",
            },
            {
              "kind": "p",
              "text": "Med en katet på 7 cm är hypotenusan [[c = 7\\sqrt{2} \\approx 9.899]] cm. Formeln gäller endast när båda spetsiga vinklarna är 45°, så kontrollera vinklarna innan du litar på svaret. Om vinklarna i stället är 30° och 60° byter du till ett 30-60-90-läge.",
            },
          ],
        },
        "sec-how-leg-45": {
          "h2": "Så hittar du en katet från 45-45-90-hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Läge 2 arbetar baklänges från hypotenusan till en katet. Det dividerar med √2, vilket är det steg som oftast glöms bort. Formeln visas nedan.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{\\sqrt{2}}]]]",
            },
            {
              "kind": "p",
              "text": "Samma resultat kan skrivas i rationaliserad form, vilket undviker en rot i nämnaren.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c\\sqrt{2}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "För att använda läget bekräftar du vinkelmönstret 45-45-90, väljer läget för 45-45-90-kateten, anger hypotenusan, väljer enheten och klickar på Beräkna. Med en hypotenusa på 10 cm är kateten [[a = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.071]] cm. Båda kateterna har denna längd, eftersom kateterna är lika, så det ena svaret beskriver hela triangeln. En snabb kontroll: [[7.071^2 + 7.071^2 \\approx 50 + 50 = 100 = 10^2]], vilket stämmer med hypotenusan i kvadrat.",
            },
          ],
        },
        "sec-how-long-30": {
          "h2": "Så använder du 30-60-90-kalkylatorn för långa kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Läge 3 hittar den långa kateten från den korta kateten, och den enda svåra delen är att identifiera den korta kateten rätt. Den korta kateten är sidan mittemot vinkeln 30°, och den är alltid triangelns kortaste sida.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bekräfta att triangeln är 30-60-90 utifrån dess vinklar.",
                "Hitta sidan mittemot vinkeln 30°: det är den korta kateten.",
                "Välj läget för 30-60-90 långa kateten i kalkylatorn.",
                "Ange den korta kateten som ett positivt tal.",
                "Välj den enhet som stämmer med resten av uppgiften.",
                "Klicka på Beräkna lång katet.",
                "Läs av resultatet, som är den långa kateten i samma enhet.",
              ],
            },
            {
              "kind": "p",
              "text": "Läget tillämpar formeln nedan.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Med en kort katet på 6 cm är den långa kateten [[b = 6\\sqrt{3} \\approx 10.392]] cm. Att mata in hypotenusan eller den långa kateten av misstag ger ett felaktigt svar, så märk sidorna först och mata endast in den korta kateten.",
            },
          ],
        },
        "sec-how-hyp-30": {
          "h2": "Så använder du 30-60-90-kalkylatorn för hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Läge 4 är det enklaste läget på sidan, eftersom hypotenusan i en 30-60-90-triangel är exakt dubbelt så lång som den korta kateten. Ingen kvadratrot är inblandad, vilket gör svaret lätt att kontrollera för hand.",
            },
            {
              "kind": "steps",
              "steps": [
                "Bekräfta att triangeln är 30-60-90 utifrån dess vinklar.",
                "Identifiera den korta kateten, sidan mittemot vinkeln 30°.",
                "Välj läget för 30-60-90-hypotenusan i kalkylatorn.",
                "Ange den korta kateten som ett positivt tal.",
                "Välj den enhet som stämmer med resten av uppgiften.",
                "Klicka på Beräkna hypotenusan c.",
                "Läs av resultatet, som är hypotenusan i samma enhet.",
              ],
            },
            {
              "kind": "p",
              "text": "Läget tillämpar formeln nedan.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Med en kort katet på 8 cm är hypotenusan [[c = 16]] cm. Den långa kateten för samma triangel är [[8\\sqrt{3} \\approx 13.856]] cm, vilket ligger mellan den korta kateten och hypotenusan, som den ska. Om ett resultat någonsin blir mindre än den korta kateten har fel läge valts.",
            },
          ],
        },
        "sec-examples": {
          "h2": "Steg-för-steg-exempel för båda speciella triangeltyperna",
          "blocks": [
            {
              "kind": "p",
              "text": "Dessa två genomarbetade exempel löser varje sida i varje triangeltyp utifrån en känd sida. Area och omkrets förekommer här som extra manuella beräkningar, inte som kalkylatorlägen: kalkylatorn på den här sidan hittar endast sidlängder.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: 45-45-90-triangeln",
            },
            {
              "kind": "p",
              "text": "Givet en 45-45-90-triangel med kateten [[a = 5]] cm, hitta den andra kateten, hypotenusan, arean och omkretsen.",
            },
            {
              "kind": "p",
              "text": "Kateterna är lika, så den andra kateten är [[b = 5]] cm. Hypotenusan följer från förhållandet.",
            },
            {
              "kind": "p",
              "text": "[[[c = 5\\sqrt{2} \\approx 7.071]]]",
            },
            {
              "kind": "p",
              "text": "Arean är hälften av kateternas produkt.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25}{2} = 12.5 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Omkretsen är summan av alla tre sidor.",
            },
            {
              "kind": "p",
              "text": "[[[P = 10 + 5\\sqrt{2} \\approx 17.071 \\text{ cm}]]]",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: 30-60-90-triangeln",
            },
            {
              "kind": "p",
              "text": "Givet en 30-60-90-triangel med kort katet [[a = 5]] cm, hitta den långa kateten, hypotenusan, arean och omkretsen.",
            },
            {
              "kind": "p",
              "text": "Den långa kateten är den korta kateten gånger √3, och hypotenusan är dubbla korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3} \\approx 8.660]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 10]]]",
            },
            {
              "kind": "p",
              "text": "Arean är hälften av kateternas produkt.",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{25\\sqrt{3}}{2} \\approx 21.651 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Omkretsen är summan av alla tre sidor.",
            },
            {
              "kind": "p",
              "text": "[[[P = 15 + 5\\sqrt{3} \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Båda exemplen stämmer med Pythagoras sats. För det första är [[5^2 + 5^2 = 50]] och [[7.071^2 \\approx 50]]. För det andra är [[5^2 + 8.660^2 \\approx 25 + 75 = 100 = 10^2]].",
            },
          ],
        },
        "sec-area-perimeter": {
          "h2": "Area- och omkretssamband i speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Area och omkrets är användbara uppföljningsberäkningar när sidorna väl är kända, men de är manuella samband, inte funktioner i kalkylatorn på den här sidan. Formlerna nedan använder samma sidbeteckningar som resten av guiden, med [[a]] som den kända kateten för 45-45-90 och den korta kateten för 30-60-90.",
            },
            {
              "kind": "p",
              "text": "För en 45-45-90-triangel är arean hälften av kvadraten på en katet, och omkretsen är kateten gånger [[2 + \\sqrt{2}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(2 + \\sqrt{2})]]]",
            },
            {
              "kind": "p",
              "text": "För en 30-60-90-triangel är arean hälften av kateternas produkt, och omkretsen är den korta kateten gånger [[3 + \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Ta en 45-45-90-triangel med kateten 6 cm. Dess area är [[A = \\frac{36}{2} = 18]] cm², och dess omkrets är [[P = 6(2 + \\sqrt{2}) \\approx 20.485]] cm. Ta en 30-60-90-triangel med kort katet 6 cm. Dess area är [[A = \\frac{36\\sqrt{3}}{2} = 18\\sqrt{3} \\approx 31.177]] cm², och dess omkrets är [[P = 6(3 + \\sqrt{3}) \\approx 28.392]] cm. Håll enheterna isär: area mäts alltid i kvadratenheter och omkrets i linjära enheter, så ett svar på 18 cm för en area är ett enhetsfel, inte ett avrundningsfel.",
            },
          ],
        },
        "sec-exact": {
          "h2": "Exakta radikalsvar kontra decimala approximationer",
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadratrötterna i den här guiden är irrationella tal, vilket betyder att deras decimalutvecklingar aldrig tar slut och aldrig upprepas. De två värdena att känna till visas nedan.",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{2} \\approx 1.41421356]]]",
            },
            {
              "kind": "p",
              "text": "[[[\\sqrt{3} \\approx 1.73205081]]]",
            },
            {
              "kind": "p",
              "text": "Ett exakt svar behåller roten på plats, till exempel [[5\\sqrt{2}]], medan ett decimalsvar ersätter den med en approximation, till exempel [[5\\sqrt{2} \\approx 7.071]]. Exakta svar föredras i skolmatematik eftersom de inte innehåller något avrundningsfel och de visar problemets struktur. En lärare kan genast se att [[5\\sqrt{2}]] kom från en 45-45-90-triangel, medan 7.071 kunde ha kommit varifrån som helst.",
            },
            {
              "kind": "p",
              "text": "Decimaltal är bättre för praktiska mätningar, där en linjal eller ett skärverktyg behöver ett tal, inte en symbol. När ett decimaltal behövs avrundar du endast i slutet av beräkningen, aldrig i mitten. Att avrunda √2 till 1.41 innan du multiplicerar med 5 ger 7.05, vilket avviker med 0.021 från det sanna 7.071, och felet växer med större tal. Markera varje decimaltal med ungefär-lika-med-tecknet, så att en läsare aldrig misstar [[5\\sqrt{3} \\approx 8.660]] för en exakt likhet.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Så kontrollerar du beräkningar för speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Varje svar för en speciell triangel kan kontrolleras på under en minut med tre tester: sidförhållandet, Pythagoras sats och vinkelsumman. Kör minst två av dem innan du litar på ett resultat.",
            },
            {
              "kind": "p",
              "text": "För en 45-45-90-triangel kontrollerar du att kateterna är lika, [[a = b]], och att sidorna uppfyller Pythagoras sats, [[a^2 + b^2 = c^2]]. Med [[a = 5]] cm och [[c = 7.071]] cm blir kontrollen [[25 + 25 = 50]] mot [[7.071^2 \\approx 50]], vilket stämmer.",
            },
            {
              "kind": "p",
              "text": "För en 30-60-90-triangel kontrollerar du att den långa kateten är den korta kateten gånger √3, [[b = a\\sqrt{3}]], att hypotenusan är dubbla korta kateten, [[c = 2a]], och att [[a^2 + b^2 = c^2]]. Med [[a = 5]] cm, [[b = 8.660]] cm och [[c = 10]] cm blir kontrollen [[25 + 75 = 100 = 10^2]], vilket stämmer.",
            },
            {
              "kind": "p",
              "text": "Kontrollera också vinkelsumman: de tre vinklarna måste summera till 180°. En 45-45-90-triangel ger [[45° + 45° + 90° = 180°]], och en 30-60-90-triangel ger [[30° + 60° + 90° = 180°]]. Om förhållandet, satsen och vinklarna alla stämmer är svaret gediget. Om någon av dem inte stämmer har triangeltypen identifierats fel eller fel formel använts.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag vid lösning av speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton misstag orsakar nästan varje felaktigt svar inom detta ämne. Var och en listas nedan med rätt tillvägagångssätt, så att du snabbt kan hitta ditt eget fel.",
            },
            {
              "kind": "list",
              "items": [
                "Att blanda ihop 45-45-90 med 30-60-90-trianglar. Kontrollera vinklarna först: två vinklar på 45° betyder 45-45-90, medan 30° och 60° betyder 30-60-90.",
                "Att använda √3 i stället för √2. Hypotenusan i en 45-45-90-triangel är [[c = a\\sqrt{2}]], aldrig [[a\\sqrt{3}]].",
                "Att använda √2 i stället för √3. Den långa kateten i en 30-60-90-triangel är [[b = a\\sqrt{3}]], aldrig [[a\\sqrt{2}]].",
                "Att anta att båda kateterna är lika i en 30-60-90-triangel. Endast 45-45-90-triangeln har lika kateter; i 30-60-90 är den långa kateten √3 gånger den korta kateten.",
                "Att anta att den korta och den långa kateten är lika. Den korta kateten ligger mittemot 30° och den långa kateten mittemot 60°, så de skiljer sig med en faktor √3.",
                "Att glömma att hypotenusan i en 30-60-90-triangel är lika med dubbla korta kateten. Den är [[c = 2a]], en fördubbling med heltal utan kvadratrot.",
                "Att använda fel indata. Läge 3 och läge 4 behöver båda den korta kateten, så att mata in den långa kateten eller hypotenusan ger ett felaktigt svar.",
                "Att blanda ihop den korta kateten med hypotenusan. Hypotenusan är den längsta sidan och ligger mittemot vinkeln 90°; den korta kateten är den kortaste sidan.",
                "Att glömma att dividera med √2 när man hittar en katet i en 45-45-90-triangel. Kateten är [[a = \\frac{c}{\\sqrt{2}}]], inte [[a = c\\sqrt{2}]], vilket skulle göra kateten längre än hypotenusan.",
                "Att glömma att multiplicera med √3 när man hittar den långa kateten i en 30-60-90-triangel. Den långa kateten är [[b = a\\sqrt{3}]], och att använda [[a]] ensamt ger den korta kateten tillbaka.",
                "Att avrunda radikaler för tidigt. Behåll [[\\sqrt{2}]] och [[\\sqrt{3}]] exakta genom varje steg och avrunda endast det slutliga svaret.",
                "Att blanda enheter. En katet i cm och en hypotenusa i mm kan inte dela en formel; omvandla först och beräkna sedan.",
                "Att blanda ihop area och omkrets. Arean använder kvadratenheter och formeln [[A = \\frac{a^2}{2}]] för 45-45-90, medan omkretsen använder linjära enheter och [[P = a(2 + \\sqrt{2})]].",
                "Att tillämpa formler för speciella trianglar på godtyckliga rätvinkliga trianglar. Förhållandena 1:1:√2 och 1:√3:2 fungerar endast för sina egna vinkelmönster; en 20-70-90-triangel behöver trigonometri i stället.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktiska tillämpningar av speciella rätvinkliga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Speciella rätvinkliga trianglar dyker upp överallt där kvadrater, liksidiga trianglar och standardvinklar förekommer. En kvadratdiagonal är ett 45-45-90-problem: en kvadratisk bordsskiva med en sida på 60 cm har en diagonal på [[60\\sqrt{2} \\approx 84.853]] cm. En höjd i en liksidig triangel är ett 30-60-90-problem: en trekantig skylt med en sida på 40 cm har en höjd på [[20\\sqrt{3} \\approx 34.641]] cm.",
            },
            {
              "kind": "p",
              "text": "I skolan gör dessa trianglar geometriläxor och trigonometriövningar snabbare, eftersom standardvinklar som 30°, 45° och 60° har exakta sinus- och cosinusvärden som kommer direkt från dessa förhållanden. Vid teknisk ritning och ritning med standardvinklar bygger 45°- och 30-60-gradskivorna på exakt dessa trianglar, så en ritare kan lägga ut en linje på 45° eller 30° och känna till sidproportionerna i förväg.",
            },
            {
              "kind": "p",
              "text": "Arkitektur- och designkoncept använder samma mönster för diagonalstagning, taklutningar och kakelmönster, och bygggeometri använder dem för snabba kontroller på plats, till exempel att bekräfta att ett hörn är rätvinkligt genom att mäta en diagonal av 3-4-5-typ eller en 45-45-90-diagonal. Matematisk modellering och demonstrationer i klassrummet använder dem också, eftersom de exakta radikalsvaren håller resonemanget synligt i stället för att dölja det i en kalkylator. Betrakta dessa som geometrigenvägar för planering och kontroll, inte som en ersättning för korrekt teknisk mätning där precision krävs.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsuppgifter med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Arbeta igenom varje uppgift på egen hand och kontrollera sedan lösningen. Frågor om area och omkrets är manuella övningar, inte kalkylatorlägen. Använd andra tal än i huvudexemplen så att mönstren måste tillämpas på nytt.",
            },
            {
              "kind": "h3",
              "text": "45-45-90-uppgifter",
            },
            {
              "kind": "steps",
              "steps": [
                "En 45-45-90-triangel har en katet på 7 cm. Hitta hypotenusan. Lösning: [[c = 7\\sqrt{2} \\approx 9.899]] cm.",
                "En 45-45-90-triangel har en hypotenusa på 12 cm. Hitta en katet. Lösning: [[a = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2} \\approx 8.485]] cm.",
                "En 45-45-90-triangel har en katet på 9 cm. Hitta arean. Lösning: [[A = \\frac{81}{2} = 40.5]] cm².",
                "En 45-45-90-triangel har en katet på 4 cm. Hitta omkretsen. Lösning: [[P = 8 + 4\\sqrt{2} \\approx 13.657]] cm.",
              ],
            },
            {
              "kind": "h3",
              "text": "30-60-90-uppgifter",
            },
            {
              "kind": "steps",
              "steps": [
                "En 30-60-90-triangel har en kort katet på 7 cm. Hitta den långa kateten. Lösning: [[b = 7\\sqrt{3} \\approx 12.124]] cm.",
                "En 30-60-90-triangel har en kort katet på 9 cm. Hitta hypotenusan. Lösning: [[c = 2 \\times 9 = 18]] cm.",
                "En 30-60-90-triangel har en kort katet på 6 cm. Hitta arean. Lösning: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
                "En 30-60-90-triangel har en kort katet på 10 cm. Hitta omkretsen. Lösning: [[P = 30 + 10\\sqrt{3} \\approx 47.321]] cm.",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje verktyg nedan löser en annan typ av problem med rätvinkliga trianglar. Välj det som stämmer med den information du redan har.",
      "relatedItems": [
        "45-45-90-triangelkalkylator",
        "30-60-90-triangelkalkylator",
        "Kalkylator för sidor i rätvinkliga trianglar",
        "Kalkylator för trigonometriska förhållanden",
        "Kalkylator för vinklar i rätvinkliga trianglar",
        "Kalkylator för Pythagoras sats",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en speciell rätvinklig triangel?",
          "answer": "En speciell rätvinklig triangel är en rätvinklig triangel vars vinklar bestämmer dess sidförhållande, så en känd sida avgör varje annan sida. De två typerna är 45-45-90-triangeln, med förhållandet [[1 : 1 : \\sqrt{2}]], och 30-60-90-triangeln, med förhållandet [[1 : \\sqrt{3} : 2]].",
        },
        {
          "question": "Vilka speciella rätvinkliga trianglar täcker den här kalkylatorn?",
          "answer": "Den här kalkylatorn täcker 45-45-90-triangeln och 30-60-90-triangeln, de två speciella rätvinkliga trianglarna som används i skolgeometrin. Den har fyra lägen: 45-45-90-hypotenusa från en katet, 45-45-90-katet från en hypotenusa, 30-60-90 lång katet från en kort katet och 30-60-90-hypotenusa från en kort katet.",
        },
        {
          "question": "Vad är sidförhållandet i en 45-45-90-triangel?",
          "answer": "Sidförhållandet i en 45-45-90-triangel är [[1 : 1 : \\sqrt{2}]]. De två kateterna är lika, och hypotenusan är kateten gånger √2, cirka 1.414. Med en katet på 5 cm är hypotenusan [[5\\sqrt{2} \\approx 7.071]] cm.",
        },
        {
          "question": "Vad är sidförhållandet i en 30-60-90-triangel?",
          "answer": "Sidförhållandet i en 30-60-90-triangel är [[1 : \\sqrt{3} : 2]]. Den korta kateten ligger mittemot 30°, den långa kateten mittemot 60° och hypotenusan mittemot 90°. Med en kort katet på 5 cm är den långa kateten [[5\\sqrt{3} \\approx 8.660]] cm och hypotenusan 10 cm.",
        },
        {
          "question": "Varför förekommer √2 i en 45-45-90-triangel?",
          "answer": "√2 kommer från Pythagoras sats tillämpad på två lika kateter. Med [[a = b]] ger satsen [[a^2 + a^2 = c^2]], så [[2a^2 = c^2]] och [[c = a\\sqrt{2}]]. Roten är priset för att göra två lika kvadrater till en hypotenusakvadrat.",
        },
        {
          "question": "Varför förekommer √3 i en 30-60-90-triangel?",
          "answer": "√3 kommer från att dela en liksidig triangel på mitten. En höjd delar en liksidig triangel med sidan [[2a]] i två 30-60-90-trianglar, och Pythagoras sats på ena halvan ger [[b^2 = 3a^2]], så den långa kateten är [[b = a\\sqrt{3}]].",
        },
        {
          "question": "Hur hittar jag hypotenusan i en 45-45-90-triangel?",
          "answer": "Multiplicera endera lika kateten med √2. Formeln är [[c = a\\sqrt{2}]]. Till exempel ger en katet på 7 cm en hypotenusa på [[7\\sqrt{2} \\approx 9.899]] cm. Välj läget för 45-45-90-hypotenusan, ange kateten och klicka på Beräkna.",
        },
        {
          "question": "Hur hittar jag den långa kateten i en 30-60-90-triangel?",
          "answer": "Multiplicera den korta kateten med √3. Formeln är [[b = a\\sqrt{3}]]. Till exempel ger en kort katet på 6 cm en lång katet på [[6\\sqrt{3} \\approx 10.392]] cm. Se till att du anger den korta kateten, sidan mittemot vinkeln 30°, inte hypotenusan.",
        },
        {
          "question": "Kan jag beräkna den saknade kateten från hypotenusan?",
          "answer": "Ja, för en 45-45-90-triangel. Dividera hypotenusan med √2 med hjälp av [[a = \\frac{c}{\\sqrt{2}}]] eller den rationaliserade formen [[a = \\frac{c\\sqrt{2}}{2}]]. En hypotenusa på 10 cm ger en katet på [[5\\sqrt{2} \\approx 7.071]] cm, och båda kateterna delar den längden.",
        },
        {
          "question": "Är alla speciella rätvinkliga trianglar likformiga inom sin egen typ?",
          "answer": "Ja. Varje 45-45-90-triangel har samma vinklar och samma förhållande 1:1:√2, så vilka två som helst är likformiga. Varje 30-60-90-triangel delar likaså förhållandet 1:√3:2. En 45-45-90-triangel är aldrig likformig med en 30-60-90-triangel, eftersom deras vinklar skiljer sig åt.",
        },
        {
          "question": "Vad är skillnaden mellan de två speciella triangeltyperna?",
          "answer": "En 45-45-90-triangel har två lika kateter och förhållandet 1:1:√2, medan en 30-60-90-triangel har tre olika sidor och förhållandet 1:√3:2. Den första kommer från en kvadratdiagonal, den andra från en höjd i en liksidig triangel, och deras formler kan inte bytas ut mot varandra.",
        },
        {
          "question": "Hur kan jag kontrollera mina beräknade sidlängder?",
          "answer": "Kontrollera sidförhållandet, Pythagoras sats och vinkelsumman. För 45-45-90 bekräftar du [[a = b]] och [[a^2 + b^2 = c^2]]. För 30-60-90 bekräftar du [[b = a\\sqrt{3}]], [[c = 2a]] och [[a^2 + b^2 = c^2]]. Om alla tre kontroller stämmer är svaret gediget.",
        },
      ],
    },
};
