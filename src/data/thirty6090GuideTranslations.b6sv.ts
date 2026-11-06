// thirty6090GuideTranslations.bsv.ts: 30-60-90 Triangle
// Guide (Page 39 of 45) translation.
export const THIRTY6090_B6_SV = {
  "sv": {
      "meta": {
        "title": "Kalkylator för 30-60-90-triangel: sidor, area och omkrets",
        "description": "Använd kalkylatorn för 30-60-90-trianglar för att hitta den korta kateten, den långa kateten, hypotenusan, arean och omkretsen från en känd sida med förhållandet 1:√3:2.",
        "primaryKeyword": "30-60-90 Triangle Calculator",
        "slug": "30-60-90-triangle-calculator",
      },
      "tocHeading": "Guideinnehåll",
      "tocItems": {
        "sec-intro": "Kalkylator för 30-60-90-triangel",
        "sec-calculate": "Beräkna saknade sidor, area och omkrets",
        "sec-what": "Vad är en 30-60-90-triangel?",
        "sec-sides": "Förstå den korta kateten, den långa kateten och hypotenusan",
        "sec-ratio": "Sidförhållandet i en 30-60-90-triangel",
        "sec-why-sqrt3": "Varför dyker kvadratroten ur 3 upp?",
        "sec-long-leg": "Formel för att hitta den långa kateten utifrån den korta kateten",
        "sec-hypotenuse": "Formel för att hitta hypotenusan utifrån den korta kateten",
        "sec-short-leg-hyp": "Formel för att hitta den korta kateten utifrån hypotenusan",
        "sec-short-leg-long": "Formel för att hitta den korta kateten utifrån den långa kateten",
        "sec-long-leg-hyp": "Formel för att hitta den långa kateten utifrån hypotenusan",
        "sec-area": "Hur man beräknar arean av en 30-60-90-triangel",
        "sec-perimeter": "Hur man beräknar omkretsen av en 30-60-90-triangel",
        "sec-step-example": "Steg för steg-exempel på att lösa en 30-60-90-triangel",
        "sec-examples": "Genomräknade exempel på beräkningar för 30-60-90-trianglar",
        "sec-derive-pythagoras": "Hur man härleder förhållandet i en 30-60-90-triangel med Pythagoras sats",
        "sec-equilateral": "Sambandet mellan 30-60-90-trianglar och liksidiga trianglar",
        "sec-trig": "Trigonometriska samband i en 30-60-90-triangel",
        "sec-verify": "Hur man kontrollerar sina beräkningar för 30-60-90-trianglar",
        "sec-properties": "Viktiga egenskaper hos 30-60-90-trianglar",
        "sec-mistakes": "Vanliga misstag när man löser 30-60-90-trianglar",
        "sec-applications": "Praktiska tillämpningar av 30-60-90-trianglar",
        "sec-practice": "Övningsproblem med svar",
        "sec-related": "Utforska relaterade kalkylatorer för rätvinkliga trianglar",
        "sec-faq": "Vanliga frågor",
      },
      "sections": {
        "sec-intro": {
          "h2": "Kalkylator för 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Hitta varje saknad sida, arean och omkretsen av en 30-60-90-triangel utifrån en enda känd sida.",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel är en rätvinklig triangel vars tre vinklar mäter 30°, 60° och 90°. Den kallas en speciell rätvinklig triangel eftersom sidlängderna alltid följer samma fasta förhållande, oavsett hur stor eller liten triangeln är. Kalkylatorn för 30-60-90-trianglar på den här sidan använder det förhållandet för att hitta den korta kateten, den långa kateten, hypotenusan, arean och omkretsen från en sidlängd som du anger.",
            },
            {
              "kind": "p",
              "text": "I triangeln ABC är vinkel A 30°, vinkel B 60° och vinkel C 90°. Sidan BC är den korta kateten [[a]], motstående 30°-vinkeln. Sidan AC är den långa kateten [[b]], motstående 60°-vinkeln. Sidan AB är hypotenusan [[c]], motstående 90°-vinkeln. De tre sidorna uppfyller alltid [[a : b : c = 1 : \\sqrt{3} : 2]], vilket betyder att [[b = a\\sqrt{3}]] och [[c = 2a]].",
            },
            {
              "kind": "p",
              "text": "Om [[a = 5]] cm är [[b = 5\\sqrt{3} \\approx 8.660]] cm och [[c = 2 \\times 5 = 10]] cm. Kalkylatorn kan också räkna ut arean och omkretsen från samma korta katet, så en mätning räcker för att beskriva hela triangeln. Avsnitten nedan förklarar förhållandet, de sju kalkylatorlägena och formlerna, med genomräknade exempel i varje steg.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Beräkna saknade sidor, area och omkrets",
          "blocks": [
            {
              "kind": "p",
              "text": "Sju lägen täcker alla sätt att börja från en känd sida.",
            },
            {
              "kind": "p",
              "text": "Kalkylatorn på den här sidan har sju lägen, ett för varje mått den kan hitta. Välj det läge som passar den sida du känner till och det mått du behöver. Varje läge ber om en enda indata, eftersom det fasta förhållandet fyller i allt annat. Tabellen nedan listar alla sju lägen med den indata var och en behöver och det resultat den ger.",
            },
            {
              "kind": "p",
              "text": "För att använda ett läge tar du först reda på vilken sida du känner till. Sidan motstående 30°-vinkeln är den korta kateten [[a]], sidan motstående 60°-vinkeln är den långa kateten [[b]] och sidan motstående 90°-vinkeln är hypotenusan [[c]]. Ange det måttet som ett positivt tal, välj en enhet och klicka på knappen Beräkna. Resultatet visas med stegvis uträkning, så att du kan se formeln och insättningen, inte bara svaret. Använd Återställ för att rensa fälten innan du börjar ett nytt problem.",
            },
            {
              "kind": "p",
              "text": "Olika lägen behöver olika formler eftersom vart och ett börjar från en annan känd sida. Att hitta den långa kateten utifrån den korta kateten innebär att multiplicera med √3, medan att hitta den korta kateten utifrån hypotenusan innebär att dividera med 2. Area- och omkretslägena börjar från den korta kateten och beräknar de andra sidorna internt först, och tillämpar sedan area- eller omkretsformeln. Du behöver aldrig räkna ut de saknade sidorna själv innan du använder de två lägena.",
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
                "Lång katet utifrån kort katet",
                "Kort katet a",
                "Lång katet b",
              ],
              [
                "Hypotenusa utifrån kort katet",
                "Kort katet a",
                "Hypotenusa c",
              ],
              [
                "Kort katet utifrån hypotenusa",
                "Hypotenusa c",
                "Kort katet a",
              ],
              [
                "Kort katet utifrån lång katet",
                "Lång katet b",
                "Kort katet a",
              ],
              [
                "Lång katet utifrån hypotenusa",
                "Hypotenusa c",
                "Lång katet b",
              ],
              [
                "Area utifrån kort katet",
                "Kort katet a",
                "Area A",
              ],
              [
                "Omkrets utifrån kort katet",
                "Kort katet a",
                "Omkrets P",
              ],
            ],
          },
          "image": {
            "src": "thirty-60-90-modes.svg",
            "alt": "Översikt över de sju kalkylatorlägena för 30-60-90-trianglar som visar den kända indatan och det beräknade resultatet för varje läge",
            "caption": "Sju lägen: vart och ett börjar från en enda känd sida och hittar ett saknat mått.",
          },
        },
        "sec-what": {
          "h2": "Vad är en 30-60-90-triangel?",
          "blocks": [
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har fått sitt namn efter sina tre vinklar.",
            },
            {
              "kind": "p",
              "text": "Det är en rätvinklig triangel, vilket betyder att en av dess vinklar är exakt 90°. De andra två vinklarna är 30° och 60°, och namnet listar alla tre i ordning. Eftersom den räta vinkeln är fast och de andra två vinklarna också är fasta, är triangelns form helt bestämd: varje 30-60-90-triangel har samma form, och två sådana trianglar skiljer sig bara i storlek.",
            },
            {
              "kind": "p",
              "text": "Den kallas en speciell rätvinklig triangel eftersom sidlängderna följer ett fast förhållande. I de flesta rätvinkliga trianglar säger en känd sida ingenting om de andra. I en 30-60-90-triangel säger en känd sida allt om dem, eftersom förhållandet [[1 : \\sqrt{3} : 2]] låser de tre sidorna till varandra. Det är därför kalkylatorn kan hitta fem mått från en enda indata.",
            },
            {
              "kind": "p",
              "text": "De tre vinklarna blir tillsammans 180°, som de måste i varje triangel: [[30° + 60° + 90° = 180°]]. Triangeln kan vara så liten som några millimeter eller så stor som en byggtomt, och vinklarna förblir desamma medan sidorna skalas upp tillsammans. Förhållandet förblir också detsamma, så en triangel med kort katet 5 cm och en triangel med kort katet 5 m har samma form i olika storlekar.",
            },
          ],
          "image": {
            "src": "thirty-60-90-main.svg",
            "alt": "Märkt 30-60-90-triangel ABC med vinklarna 30, 60 och 90 grader, kort katet a, lång katet a gånger kvadratroten ur 3 och hypotenusa 2a",
            "caption": "Triangel ABC: vinklarna 30°, 60° och 90°, med sidorna a, a√3 och 2a.",
          },
        },
        "sec-sides": {
          "h2": "Förstå den korta kateten, den långa kateten och hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "De tre sidorna får sina namn efter vinklarna motstående dem.",
            },
            {
              "kind": "p",
              "text": "Den korta kateten [[a]] är sidan motstående 30°-vinkeln. Det är triangelns kortaste sida, eftersom den minsta vinkeln alltid ligger motstående den kortaste sidan. I triangeln ABC är det sidan BC. Den korta kateten är den naturliga utgångspunkten för de flesta beräkningar, eftersom de andra två sidorna är enkla multiplar av den: den långa kateten är [[a\\sqrt{3}]] och hypotenusan är [[2a]].",
            },
            {
              "kind": "p",
              "text": "Den långa kateten [[b]] är sidan motstående 60°-vinkeln. Den är längre än den korta kateten och kortare än hypotenusan. I triangeln ABC är det sidan AC. Dess längd är [[\\sqrt{3} \\approx 1.732]] gånger den korta kateten, så den är lite under dubbelt så lång. Hypotenusan [[c]] är sidan motstående 90°-vinkeln, sidan AB, och den är triangelns längsta sida, exakt dubbelt så lång som den korta kateten.",
            },
            {
              "kind": "p",
              "text": "Att identifiera sidor efter deras motstående vinklar är mer tillförlitligt än att bedöma efter hur diagrammet är ritat. En triangel kan roteras eller vändas, så den korta kateten kan visas till vänster, till höger eller längst ner. Regeln om motstående vinkel ändras aldrig: hitta 30°-vinkeln, och sidan mitt emot den är den korta kateten. Hitta 90°-vinkeln, markerad med en liten kvadrat, och sidan mitt emot den är hypotenusan.",
            },
          ],
          "table": {
            "headers": [
              "Sida",
              "Motstående vinkel",
              "Storlek",
            ],
            "rows": [
              [
                "Kort katet a",
                "30°",
                "Minst",
              ],
              [
                "Lång katet b",
                "60°",
                "Mellan",
              ],
              [
                "Hypotenusa c",
                "90°",
                "Längst",
              ],
            ],
          },
        },
        "sec-ratio": {
          "h2": "Sidförhållandet i en 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet 1:√3:2 bestämmer varje 30-60-90-triangel.",
            },
            {
              "kind": "p",
              "text": "Sidförhållandet i en 30-60-90-triangel är:",
            },
            {
              "kind": "p",
              "text": "[[[a : b : c = 1 : \\sqrt{3} : 2]]]",
            },
            {
              "kind": "p",
              "text": "Varje del av förhållandet beskriver en sida. Den korta kateten motsvarar en enhet, den långa kateten motsvarar √3 enheter och hypotenusan motsvarar två enheter. Skrivet med den korta kateten som [[a]] är de tre sidorna [[a = a]], [[b = a\\sqrt{3}]] och [[c = 2a]]. Om den korta kateten är 1 cm är den långa kateten √3 cm och hypotenusan 2 cm. Om den korta kateten är 10 cm är den långa kateten [[10\\sqrt{3}]] cm och hypotenusan 20 cm.",
            },
            {
              "kind": "p",
              "text": "Förhållandet förblir detsamma oavsett triangelns storlek, eftersom alla 30-60-90-trianglar är likformiga. Att skala upp eller ner en triangel multiplicerar varje sida med samma faktor, så proportionerna mellan sidorna ändras inte. Använd [[a = 4]] cm som exempel: den långa kateten är [[b = 4\\sqrt{3} \\approx 6.928]] cm och hypotenusan är [[c = 8]] cm, och förhållandet [[4 : 6.928 : 8]] är detsamma som [[1 : \\sqrt{3} : 2]].",
            },
            {
              "kind": "p",
              "text": "Behåll den exakta rotformen när du kan. √3 är ungefär 1.732, men det är ett irrationellt tal, så inget decimaltal är exakt lika med det. Att skriva [[4\\sqrt{3}]] cm är exakt, medan 6.928 cm är en avrundad approximation. Använd den exakta formen i din uträkning och i slutsvar när frågan ber om ett exakt värde, och ange decimaltalet bara när ett ungefärligt svar behövs.",
            },
          ],
          "image": {
            "src": "thirty-60-90-ratio.svg",
            "alt": "Tre staplar som jämför den korta kateten, den långa kateten och hypotenusan i förhållandet 1 till kvadratroten ur 3 till 2",
            "caption": "Det fasta förhållandet 1:√3:2 jämför den korta kateten, den långa kateten och hypotenusan.",
          },
        },
        "sec-why-sqrt3": {
          "h2": "Varför dyker kvadratroten ur 3 upp?",
          "blocks": [
            {
              "kind": "p",
              "text": "Kvadratroten ur 3 kommer från att dela en liksidig triangel på mitten.",
            },
            {
              "kind": "p",
              "text": "Börja med en liksidig triangel vars sidlängd är [[2a]]. Alla tre sidor är lika och alla tre vinklar är 60°. Rita nu en höjd från ett hörn till den motstående sidan. Höjden är linjen från hörnet som möter den motstående sidan i rät vinkel.",
            },
            {
              "kind": "p",
              "text": "Höjden delar basen på mitten och delar den i två lika långa segment med längden [[a]]. Den delar också den liksidiga triangeln i två kongruenta rätvinkliga trianglar. Varje mindre triangel har vinklarna 30°, 60° och 90°: 60°-vinkeln vid basen finns kvar, höjden skapar en 90°-vinkel där den möter basen, och 60°-vinkeln i toppen delas i två 30°-vinklar. Hypotenusan i varje liten triangel är sidan i den liksidiga triangeln, [[2a]], och den korta kateten är halva basen, [[a]].",
            },
            {
              "kind": "p",
              "text": "Det återstående benet i den lilla triangeln är själva höjden. Kalla den [[b]] och tillämpa Pythagoras sats:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = (2a)^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 4a^2 - a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Talet 3 innanför kvadratroten kommer från [[4a^2 - a^2 = 3a^2]], skillnaden mellan kvadraten på hypotenusan och kvadraten på den korta kateten. Det är hela anledningen till att √3 dyker upp i varje 30-60-90-formel: den långa kateten är höjden i en liksidig triangel, och Pythagoras sats tvingar den att vara [[a\\sqrt{3}]]. Härledningen bevisar också sidförhållandet, eftersom de tre sidorna i den lilla triangeln nu är [[a]], [[a\\sqrt{3}]] och [[2a]].",
            },
          ],
          "image": {
            "src": "thirty-60-90-equilateral.svg",
            "alt": "Liksidig triangel med sidan 2a delad av en höjd i två kongruenta 30-60-90-trianglar med höjden a gånger kvadratroten ur 3",
            "caption": "En höjd delar en liksidig triangel med sidan 2a i två 30-60-90-trianglar.",
          },
        },
        "sec-long-leg": {
          "h2": "Formel för att hitta den långa kateten utifrån den korta kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplicera den korta kateten med √3 för att få den långa kateten.",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[b]] den långa kateten och [[a]] den korta kateten. Formeln är en direkt avläsning av sidförhållandet: den långa kateten motsvarar √3 enheter för varje 1 enhet kort katet, så den långa kateten är √3 gånger den korta kateten. Multiplikation krävs eftersom förhållandet är ett skalförhållande, och √3 dyker upp eftersom den långa kateten är höjden i den liksidiga triangeln som skapar den här triangeln.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 5]] cm som exempel:",
            },
            {
              "kind": "p",
              "text": "[[[b = 5\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b \\approx 8.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet är längre än den korta kateten, som det måste vara: √3 är ungefär 1.732, så multiplicering med det ökar längden. Det exakta svaret är [[5\\sqrt{3}]] cm, och 8.660 cm är decimalapproximationen. Behåll den exakta formen när frågan ber om den, och avrunda decimaltalet först i slutet av din uträkning, aldrig mitt i.",
            },
            {
              "kind": "p",
              "text": "Använd det här läget när den korta kateten är den kända sidan och den långa kateten är den okända. I ett läroboksproblem är den korta kateten vanligtvis sidan motstående 30°-vinkeln, så kontrollera vinkeln innan du multiplicerar. En snabb rimlighetskontroll hjälper: den långa kateten bör bli lite under dubbelt så lång som den korta kateten, eftersom √3 är lite under 2. Om ditt svar är mer än dubbelt så långt som den korta kateten har du multiplicerat med fel tal.",
            },
          ],
          "image": {
            "src": "thirty-60-90-long-leg.svg",
            "alt": "30-60-90-triangel med kort katet 5 cm och lång katet märkt 5 gånger kvadratroten ur 3, cirka 8.660 cm",
            "caption": "Lång katet utifrån kort katet: a = 5 cm ger b = 5√3 ≈ 8.660 cm.",
          },
        },
        "sec-hypotenuse": {
          "h2": "Formel för att hitta hypotenusan utifrån den korta kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Dubblera den korta kateten för att få hypotenusan.",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[c]] hypotenusan och [[a]] den korta kateten. Hypotenusan är alltid exakt dubbelt så lång som den korta kateten, utan någon kvadratrot inblandad. Detta är den enklaste av 30-60-90-formlerna, och den är också den mest användbara för snabba mentala kontroller.",
            },
            {
              "kind": "p",
              "text": "Anledningen går tillbaka till den liksidiga triangeln. Hypotenusan i 30-60-90-triangeln är en hel sida i den liksidiga triangeln, medan den korta kateten är halva sidan, eftersom höjden delar basen på mitten. En hel sida är dubbelt så lång som en halv sida, så hypotenusan är dubbelt så lång som den korta kateten. Använd [[a = 7]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2 \\times 7]]]",
            },
            {
              "kind": "p",
              "text": "[[[c = 14 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Svaret är exakt, utan avrundning, eftersom dubblering av ett heltal ger ett heltal. Om den korta kateten är ett decimaltal är hypotenusan fortfarande exakt dubbelt så lång, så [[a = 2.5]] cm ger [[c = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "Det här läget är det man ska välja när ett problem ger den korta kateten och frågar efter den längsta sidan. Eftersom svaret är en enkel dubblering är det också det snabbaste sättet att upptäcka en felaktig kort katet: om hypotenusan i problemet inte är dubbelt så lång som din korta katet är antingen den korta kateten fel eller så är triangeln inte en 30-60-90-triangel. Kontrollera vinklarna innan du litar på dubbleringen.",
            },
          ],
          "image": {
            "src": "thirty-60-90-hypotenuse.svg",
            "alt": "30-60-90-triangel med kort katet 5 cm och hypotenusa märkt 2a lika med 10 cm",
            "caption": "Hypotenusa utifrån kort katet: c = 2a, så a = 5 cm ger c = 10 cm.",
          },
        },
        "sec-short-leg-hyp": {
          "h2": "Formel för att hitta den korta kateten utifrån hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Halvera hypotenusan för att få den korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[a]] den korta kateten och [[c]] hypotenusan. Den här formeln är det omvända till [[c = 2a]]: eftersom hypotenusan är dubbelt så lång som den korta kateten är den korta kateten halva hypotenusan. Att flytta om [[c = 2a]] genom att dividera båda sidor med 2 ger [[a = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Använd [[c = 18]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{18}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[a = 9 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Svaret är exakt, utan kvadratrot och utan avrundning. Det här sambandet gäller specifikt för 30-60-90-trianglar. I en allmän rätvinklig triangel är hypotenusan inte dubbelt så lång som den korta kateten, så använd inte den här formeln om du inte vet att vinklarna är 30°, 60° och 90°. Om hypotenusan är ett udda tal blir den korta kateten ett halvtal, till exempel ger [[c = 15]] cm [[a = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Det här läget är utgångspunkten för de flesta problem som ger hypotenusan. När den korta kateten är känd följer den långa kateten från [[b = a\\sqrt{3}]] och arean och omkretsen följer från sina egna formler. Ett halvtal som svar är normalt här och är inte ett tecken på fel, så avrunda inte 7.5 cm till 8 cm: den exakta halvan är det rätta svaret.",
            },
          ],
        },
        "sec-short-leg-long": {
          "h2": "Formel för att hitta den korta kateten utifrån den långa kateten",
          "blocks": [
            {
              "kind": "p",
              "text": "Dividera den långa kateten med √3 för att få den korta kateten.",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{b}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[a]] den korta kateten och [[b]] den långa kateten. Den här formeln kommer från att flytta om [[b = a\\sqrt{3}]]: att dividera båda sidor med √3 isolerar [[a]]. Att dividera med √3 vänder den ursprungliga multiplikationen, så det upphäver exakt det som den framåtriktade formeln gjorde.",
            },
            {
              "kind": "p",
              "text": "Använd [[b = 12]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\frac{12}{\\sqrt{3}}]]]",
            },
            {
              "kind": "p",
              "text": "Rationalisera nämnaren genom att multiplicera täljare och nämnare med √3: [[a = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}]] cm, vilket är ungefär 6.928 cm. Det exakta svaret är [[4\\sqrt{3}]] cm, och 6.928 cm är decimalformen. Den korta kateten är mindre än den långa kateten, som den måste vara, eftersom division med ett tal större än 1 minskar värdet.",
            },
            {
              "kind": "p",
              "text": "Rationalisering är värt att göra eftersom det lämnar svaret i den vanliga exakta formen, ett heltal gånger √3. En decimalapproximation döljer den strukturen, och ett orationaliserat bråk med √3 i nämnaren är inte den form som provsvar förväntar sig. När den långa kateten redan är en multipel av √3 blir divisionen ren: [[b = 9\\sqrt{3}]] cm ger [[a = 9]] cm direkt.",
            },
          ],
        },
        "sec-long-leg-hyp": {
          "h2": "Formel för att hitta den långa kateten utifrån hypotenusan",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplicera halva hypotenusan med √3 för att få den långa kateten.",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{c\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Här är [[b]] den långa kateten och [[c]] hypotenusan. Den här formeln bygger på två steg. Hitta först den korta kateten med [[a = \\frac{c}{2}]], och hitta sedan den långa kateten med [[b = a\\sqrt{3}]]. Att sätta in den första formeln i den andra ger [[b = \\frac{c}{2}\\sqrt{3}]], vilket är detsamma som [[b = \\frac{c\\sqrt{3}}{2}]].",
            },
            {
              "kind": "p",
              "text": "Använd [[c = 16]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\frac{16\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[b = 8\\sqrt{3} \\approx 13.856 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Resultatet ligger mellan den korta kateten och hypotenusan, som det ska. Den korta kateten här är [[a = 8]] cm, den långa kateten är cirka 13.856 cm och hypotenusan är 16 cm, så [[8 < 13.856 < 16]]. Den ordningen är en snabb kontroll av varje svar från den här formeln.",
            },
            {
              "kind": "p",
              "text": "Att göra beräkningen i två steg är en god vana även om den enkla formeln gör båda på en gång. Hitta den korta kateten först, [[a = \\frac{c}{2} = 8]] cm, och multiplicera sedan med √3. Om tvåstegsvägen och den enkla formeln inte stämmer överens ligger felet i aritmetiken, inte i formeln, och tvåstegsvägen visar exakt var det hände.",
            },
          ],
        },
        "sec-area": {
          "h2": "Hur man beräknar arean av en 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Arean behöver bara den korta kateten, eftersom den långa kateten följer av den.",
            },
            {
              "kind": "p",
              "text": "Arean av varje rätvinklig triangel är hälften av produkten av dess två kateter, eftersom kateterna fungerar som bas och vinkelrät höjd:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Eftersom [[b = a\\sqrt{3}]] får man arean från enbart den korta kateten genom att sätta in:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{a^2\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Division med två är nödvändig eftersom en triangel täcker hälften av rektangeln som bildas av dess två kateter. Den slutliga arean uttrycks i kvadratenheter, till exempel kvadratcentimeter, eftersom area mäter yta, inte längd. Använd [[a = 6]] cm. Hitta först den långa kateten, [[b = 6\\sqrt{3}]] cm, och beräkna sedan:",
            },
            {
              "kind": "p",
              "text": "[[[A = \\frac{6 \\times 6\\sqrt{3}}{2}]]]",
            },
            {
              "kind": "p",
              "text": "[[[A = 18\\sqrt{3} \\approx 31.177 \\text{ cm}^2]]]",
            },
            {
              "kind": "p",
              "text": "Kalkylatorns arealäge tar emot den korta kateten och beräknar den långa kateten internt, så du anger bara [[a]] och kalkylatorn gör resten. Om du känner till den långa kateten istället för den korta kateten kan du använda <a href=\"/right-triangle-area-calculator/\">kalkylatorn för area av rätvinklig triangel</a>, som tar emot båda kateterna direkt.",
            },
            {
              "kind": "p",
              "text": "Arean växer med kvadraten på den korta kateten, så dubblering av den korta kateten fyrdubblar arean. En triangel med [[a = 12]] cm har fyra gånger arean av triangeln med [[a = 6]] cm, cirka 124.708 cm², inte dubbelt så stor. Det kvadratiska sambandet är lätt att glömma, så kontrollera det när ett problem skalar upp eller ner en triangel.",
            },
          ],
          "image": {
            "src": "thirty-60-90-area.svg",
            "alt": "30-60-90-triangel med kort katet 6 cm och lång katet 6 gånger kvadratroten ur 3 cm som bas och höjd, area 18 gånger kvadratroten ur 3 kvadratcentimeter",
            "caption": "Area utifrån den korta kateten: a = 6 cm ger A = 18√3 ≈ 31.177 cm².",
          },
        },
        "sec-perimeter": {
          "h2": "Hur man beräknar omkretsen av en 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Lägg ihop alla tre sidorna och bryt sedan ut den korta kateten.",
            },
            {
              "kind": "p",
              "text": "Omkretsen är den totala längden runt triangeln:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + b + c]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in de speciella triangelns samband, [[b = a\\sqrt{3}]] och [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[P = a + a\\sqrt{3} + 2a]]]",
            },
            {
              "kind": "p",
              "text": "Kombinera de likartade termerna för att få den förenklade formen:",
            },
            {
              "kind": "p",
              "text": "[[[P = a(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "Alla tre sidlängder ingår, eftersom omkretsen följer hela triangelns gräns: ner längs den korta kateten, tvärs över den långa kateten och tillbaka längs hypotenusan. Att utelämna en sida ger en kortare sträcka som inte är omkretsen. Omkrets är ett linjärt mått, inte ett areamått, så svaret anges i vanliga enheter som centimeter, aldrig kvadratcentimeter.",
            },
            {
              "kind": "p",
              "text": "Använd [[a = 5]] cm:",
            },
            {
              "kind": "p",
              "text": "[[[P = 5(3 + \\sqrt{3})]]]",
            },
            {
              "kind": "p",
              "text": "[[[P \\approx 23.660 \\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Den exakta formen är [[5(3 + \\sqrt{3})]] cm, och 23.660 cm är decimalformen. Kalkylatorns omkretsläge tar emot den korta kateten och lägger ihop de tre sidorna internt. Om du redan känner till alla tre sidor lägger <a href=\"/right-triangle-perimeter-calculator/\">kalkylatorn för omkrets av rätvinklig triangel</a> ihop dem direkt.",
            },
            {
              "kind": "p",
              "text": "Omkretsen växer i direkt proportion till den korta kateten, så dubblering av den korta kateten dubblerar omkretsen. En triangel med [[a = 10]] cm har en omkrets på cirka 47.321 cm, exakt dubbelt så mycket som 23.660 cm för triangeln med [[a = 5]] cm. Den linjära skalningen är en användbar kontroll: om dubblering av den korta kateten inte dubblerar din omkrets har aritmetiken gått fel någonstans.",
            },
          ],
          "image": {
            "src": "thirty-60-90-perimeter.svg",
            "alt": "30-60-90-triangel med alla tre sidor märkta 5 cm, 5 gånger kvadratroten ur 3 cm och 10 cm, omkrets cirka 23.660 cm",
            "caption": "Omkrets utifrån den korta kateten: a = 5 cm ger P = 5(3 + √3) ≈ 23.660 cm.",
          },
        },
        "sec-step-example": {
          "h2": "Steg för steg-exempel på att lösa en 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "En triangel, a = 5 cm, genomarbetad från början till slut.",
            },
            {
              "kind": "p",
              "text": "Börja med den korta kateten [[a = 5]] cm och hitta alla andra mått i triangeln, en formel i taget. Varje steg använder en formel från avsnitten ovan, och sammanfattningstabellen i slutet samlar resultaten.",
            },
            {
              "kind": "steps",
              "steps": [
                "Hitta den långa kateten: [[b = a\\sqrt{3} = 5\\sqrt{3} \\approx 8.660]] cm.",
                "Hitta hypotenusan: [[c = 2a = 2 \\times 5 = 10]] cm.",
                "Hitta arean: [[A = \\frac{ab}{2} = \\frac{5 \\times 5\\sqrt{3}}{2} = \\frac{25\\sqrt{3}}{2} \\approx 21.651]] kvadratcentimeter.",
                "Hitta omkretsen: [[P = a + b + c = 5 + 5\\sqrt{3} + 10 = 15 + 5\\sqrt{3} \\approx 23.660]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "Alla fyra mått beskriver samma triangel. Sidorna [[5]], [[8.660]] och [[10]] uppfyller förhållandet [[1 : \\sqrt{3} : 2]] och Pythagoras sats, [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]]. Arean och omkretsen är två olika slags mått på samma triangel: arean täcker dess yta, medan omkretsen följer dess gräns.",
            },
          ],
          "table": {
            "headers": [
              "Mått",
              "Exakt värde",
              "Ungefärligt värde",
            ],
            "rows": [
              [
                "Kort katet a",
                "5 cm",
                "5 cm",
              ],
              [
                "Lång katet b",
                "5√3 cm",
                "8.660 cm",
              ],
              [
                "Hypotenusa c",
                "10 cm",
                "10 cm",
              ],
              [
                "Area A",
                "25√3/2 cm²",
                "21.651 cm²",
              ],
              [
                "Omkrets P",
                "15 + 5√3 cm",
                "23.660 cm",
              ],
            ],
          },
        },
        "sec-examples": {
          "h2": "Genomräknade exempel på beräkningar för 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Åtta genomräknade exempel, ett för varje kalkylatorläge plus ett större fall.",
            },
            {
              "kind": "h3",
              "text": "Exempel 1: Hitta den långa kateten",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 4]] cm. Formel: [[b = a\\sqrt{3}]]. Insättning: [[b = 4\\sqrt{3}]]. Resultat: [[b \\approx 6.928]] cm. Den långa kateten är ungefär 1.732 gånger den korta kateten, så 4 cm blir cirka 6.928 cm. Det exakta svaret är [[4\\sqrt{3}]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exempel 2: Hitta hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 9]] cm. Formel: [[c = 2a]]. Insättning: [[c = 2 \\times 9]]. Resultat: [[c = 18]] cm. Hypotenusan är exakt dubbelt så lång som den korta kateten, så svaret behöver ingen avrundning. Detta är den snabbaste kontrollen i hela ämnet: en hypotenusa som inte är dubbelt så lång som den korta kateten signalerar ett fel.",
            },
            {
              "kind": "h3",
              "text": "Exempel 3: Hitta den korta kateten utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 20]] cm. Formel: [[a = \\frac{c}{2}]]. Insättning: [[a = \\frac{20}{2}]]. Resultat: [[a = 10]] cm. Att halvera hypotenusan vänder dubbleringen i exempel 2. Den korta kateten är exakt halva hypotenusan, så svaret är exakt.",
            },
            {
              "kind": "h3",
              "text": "Exempel 4: Hitta den korta kateten utifrån den långa kateten",
            },
            {
              "kind": "p",
              "text": "Givet [[b = 15]] cm. Formel: [[a = \\frac{b}{\\sqrt{3}}]]. Insättning: [[a = \\frac{15}{\\sqrt{3}}]]. Rationalisering ger [[a = 5\\sqrt{3}]] cm, så resultatet är [[a \\approx 8.660]] cm. Att dividera med √3 krymper den långa kateten tillbaka till den korta kateten, vilket är det omvända till att multiplicera med √3.",
            },
            {
              "kind": "h3",
              "text": "Exempel 5: Hitta den långa kateten utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "Givet [[c = 12]] cm. Formel: [[b = \\frac{c\\sqrt{3}}{2}]]. Insättning: [[b = \\frac{12\\sqrt{3}}{2}]]. Resultat: [[b = 6\\sqrt{3} \\approx 10.392]] cm. Den långa kateten ligger mellan den korta kateten, [[a = 6]] cm, och hypotenusan, 12 cm, vilket bekräftar ordningen [[a < b < c]].",
            },
            {
              "kind": "h3",
              "text": "Exempel 6: Beräkna arean",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 8]] cm. Formel: [[A = \\frac{a^2\\sqrt{3}}{2}]]. Insättning: [[A = \\frac{64\\sqrt{3}}{2}]]. Resultat: [[A = 32\\sqrt{3} \\approx 55.426]] kvadratcentimeter. Det exakta svaret är [[32\\sqrt{3}]] cm², och decimaltalet är avrundat till tre decimaler. Area anges i kvadratenheter, till skillnad från sidlängderna.",
            },
            {
              "kind": "h3",
              "text": "Exempel 7: Beräkna omkretsen",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 3]] cm. Formel: [[P = a(3 + \\sqrt{3})]]. Insättning: [[P = 3(3 + \\sqrt{3})]]. Resultat: [[P = 9 + 3\\sqrt{3} \\approx 14.196]] cm. Att lägga ihop sidorna en i taget ger samma resultat: [[3 + 3\\sqrt{3} + 6 = 9 + 3\\sqrt{3}]] cm. Omkrets anges i vanliga enheter, inte kvadratenheter.",
            },
            {
              "kind": "h3",
              "text": "Exempel 8: Större mått",
            },
            {
              "kind": "p",
              "text": "Givet [[a = 10]] m. Formel: [[b = a\\sqrt{3}]] och [[c = 2a]]. Insättning: [[b = 10\\sqrt{3}]] m och [[c = 2 \\times 10]] m. Resultat: [[b \\approx 17.321]] m och [[c = 20]] m. Förhållandet fungerar i alla skalor: den här triangeln är triangeln med [[a = 5]] cm dubblerad, så varje sida är dubbelt så lång och förhållandet [[1 : \\sqrt{3} : 2]] är oförändrat.",
            },
            {
              "kind": "p",
              "text": "Exakta svar och decimalapproximationer tjänar olika syften. Den exakta formen, till exempel [[4\\sqrt{3}]] cm, är precis och är det som provsvar vanligtvis kräver. Decimalformen, till exempel 6.928 cm, är lättare att föreställa sig och att mäta med en linjal. Ange den exakta formen först, sedan decimaltalet, och avrunda decimaltalet först i det sista steget.",
            },
          ],
        },
        "sec-derive-pythagoras": {
          "h2": "Hur man härleder förhållandet i en 30-60-90-triangel med Pythagoras sats",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet följer från Pythagoras sats plus ett faktum: hypotenusan är dubbelt så lång som den korta kateten.",
            },
            {
              "kind": "p",
              "text": "Låt [[a]] vara den korta kateten, [[b]] den långa kateten och [[c]] hypotenusan. Från konstruktionen med den liksidiga triangeln är hypotenusan dubbelt så lång som den korta kateten:",
            },
            {
              "kind": "p",
              "text": "[[[c = 2a]]]",
            },
            {
              "kind": "p",
              "text": "Tillämpa nu Pythagoras sats, som gäller för varje rätvinklig triangel:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Sätt in [[c = 2a]]:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = 4a^2]]]",
            },
            {
              "kind": "p",
              "text": "Flytta om genom att subtrahera [[a^2]] från båda sidor:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = 3a^2]]]",
            },
            {
              "kind": "p",
              "text": "Dra kvadratroten ur båda sidor. Längder är positiva, så den negativa roten förkastas:",
            },
            {
              "kind": "p",
              "text": "[[[b = a\\sqrt{3}]]]",
            },
            {
              "kind": "p",
              "text": "De tre sidorna är nu [[a]], [[a\\sqrt{3}]] och [[2a]], vilket ger förhållandet [[a : b : c = 1 : \\sqrt{3} : 2]]. Varje formel för sidlängd på den här sidan kommer från detta fasta samband: formeln för den långa kateten läser det direkt, hypotenusformeln är utgångsfaktumet, och area- och omkretsformlerna sätter in de två sidouttrycken. <a href=\"/pythagorean-theorem-calculator/\">Kalkylatorn för Pythagoras sats</a> kontrollerar samma samband för varje rätvinklig triangel.",
            },
            {
              "kind": "p",
              "text": "Beviset behöver bara två ingredienser, och båda är lätta att ange. Den första är faktumet [[c = 2a]], som kommer från den liksidiga triangeln. Den andra är Pythagoras sats, som gäller för varje rätvinklig triangel. Inget annat antas, så beviset visar att förhållandet tvingas fram av enbart de två fakta, inte av ett specialfall eller en tillfällighet.",
            },
          ],
        },
        "sec-equilateral": {
          "h2": "Sambandet mellan 30-60-90-trianglar och liksidiga trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Varje 30-60-90-triangel är hälften av en liksidig triangel.",
            },
            {
              "kind": "p",
              "text": "En liksidig triangel har tre lika sidor och tre lika vinklar på 60°. Rita en höjd från ett hörn till den motstående sidan, och höjden delar basen i två lika halvor. Den delar också 60°-vinkeln vid topphörnet i två 30°-vinklar. Resultatet blir två kongruenta rätvinkliga trianglar, var och en med vinklarna 30°, 60° och 90°.",
            },
            {
              "kind": "p",
              "text": "Varje halva behåller en hel sida av den liksidiga triangeln som sin hypotenusa, tar en halv sida som sin korta katet och använder höjden som sin långa katet. Det är därför hypotenusan är dubbelt så lång som den korta kateten och varför den långa kateten är [[a\\sqrt{3}]]. √3-sambandet dyker upp eftersom höjden i en liksidig triangel alltid är [[\\frac{\\sqrt{3}}{2}]] gånger sidlängden, vilket är samma faktum skrivet med andra bokstäver.",
            },
            {
              "kind": "p",
              "text": "Den här konstruktionen är användbar inom geometri och trigonometri eftersom den gör den liksidiga triangeln till en källa till exakta värden. Höjden i en liksidig triangel med sidan 10 cm är [[5\\sqrt{3} \\approx 8.660]] cm, funnen genom att behandla halva den som en 30-60-90-triangel med kort katet 5 cm. Samma konstruktion ger de exakta sinus-, cosinus- och tangensvärdena för 30° och 60°, vilket är varför de värdena finns i varje trigonometritabell.",
            },
          ],
        },
        "sec-trig": {
          "h2": "Trigonometriska samband i en 30-60-90-triangel",
          "blocks": [
            {
              "kind": "p",
              "text": "Det fasta förhållandet ger exakta sinus-, cosinus- och tangensvärden för 30° och 60°.",
            },
            {
              "kind": "p",
              "text": "Trigonometriska förhållanden jämför sidor i en rätvinklig triangel. Sinus är motstående sida genom hypotenusa, cosinus är närliggande sida genom hypotenusa och tangens är motstående sida genom närliggande sida. Eftersom sidorna i en 30-60-90-triangel alltid står i förhållandet [[1 : \\sqrt{3} : 2]] ger de jämförelserna alltid samma värden, oavsett triangelns storlek.",
            },
            {
              "kind": "p",
              "text": "För 30°-vinkeln är den motstående sidan den korta kateten [[a]] och den närliggande sidan den långa kateten [[b]], så [[\\sin 30° = \\frac{a}{2a} = \\frac{1}{2}]], [[\\cos 30° = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}]] och [[\\tan 30° = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}]]. För 60°-vinkeln byter den motstående och den närliggande sidan plats, så [[\\sin 60° = \\frac{\\sqrt{3}}{2}]], [[\\cos 60° = \\frac{1}{2}]] och [[\\tan 60° = \\sqrt{3}]].",
            },
            {
              "kind": "p",
              "text": "Lägg märke till symmetrin: [[\\sin 30° = \\cos 60°]] och [[\\cos 30° = \\sin 60°]], eftersom de två spetsiga vinklarna är komplement som tillsammans blir 90°. De här värdena stämmer exakt med det fasta sidförhållandet, vilket är en bra korskontroll: om ett sinusvärde inte stämmer med förhållandet är ett av de två fel. Se det här avsnittet som bakgrund: kalkylatorn på den här sidan hittar sidor, area och omkrets, och beräknar inte trigonometriska funktioner som ett läge.",
            },
          ],
          "table": {
            "headers": [
              "Vinkel",
              "sin",
              "cos",
              "tan",
            ],
            "rows": [
              [
                "30°",
                "1/2",
                "√3/2",
                "1/√3",
              ],
              [
                "60°",
                "√3/2",
                "1/2",
                "√3",
              ],
            ],
          },
        },
        "sec-verify": {
          "h2": "Hur man kontrollerar sina beräkningar för 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fyra snabba kontroller fångar nästan varje fel.",
            },
            {
              "kind": "p",
              "text": "Kör minst en kontroll på varje svar, och alla fyra när problemet är viktigt. Exemplet nedan använder triangeln med [[a = 5]] cm, [[b = 5\\sqrt{3} \\approx 8.660]] cm och [[c = 10]] cm genomgående.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 1: Sidförhållande",
            },
            {
              "kind": "p",
              "text": "Dividera den långa kateten med den korta kateten och hypotenusan med den korta kateten: [[\\frac{b}{a} = \\sqrt{3} \\approx 1.732]] och [[\\frac{c}{a} = 2]]. Här är [[\\frac{8.660}{5} \\approx 1.732]] och [[\\frac{10}{5} = 2]], så förhållandet håller. Om någon av divisionerna ger ett annat värde är en av sidorna fel.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 2: Pythagoras sats",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a^2 + b^2 = c^2]]. Här är [[5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2]], så satsen håller. Den här kontrollen fångar förväxlade kateter, eftersom användning av fel värde för [[b]] bryter likheten. <a href=\"/pythagorean-theorem-calculator/\">Kalkylatorn för Pythagoras sats</a> kör den här kontrollen för vilka tre sidlängder som helst.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 3: Vinkelsumma",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[30° + 60° + 90° = 180°]]. Den här kontrollen handlar om problemets förutsättningar snarare än aritmetiken: om vinklarna i din triangel inte blir 180° tillsammans, eller om de inte är 30°, 60° och 90°, gäller 30-60-90-formlerna inte alls, och ingen sidlängd från dem kan litas på.",
            },
            {
              "kind": "h3",
              "text": "Kontroll 4: Sidordning",
            },
            {
              "kind": "p",
              "text": "Bekräfta [[a < b < c]]. Här är [[5 < 8.660 < 10]], så ordningen håller. Den korta kateten måste vara den minsta sidan, den långa kateten måste ligga i mitten och hypotenusan måste vara den längsta. Varje svar som bryter den ordningen, till exempel en lång katet som är längre än hypotenusan, är uppenbart fel.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Viktiga egenskaper hos 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Tio egenskaper följer av det fasta förhållandet.",
            },
            {
              "kind": "list",
              "items": [
                "Triangeln har alltid vinklarna 30°, 60° och 90°, och de vinklarna blir alltid 180° tillsammans.",
                "Den korta kateten ligger motstående 30°-vinkeln, och den är triangelns minsta sida.",
                "Den långa kateten ligger motstående 60°-vinkeln, och den ligger mellan den korta kateten och hypotenusan i längd.",
                "Hypotenusan ligger motstående 90°-vinkeln, och den är triangelns längsta sida.",
                "Hypotenusan är dubbelt så lång som den korta kateten, [[c = 2a]], utan någon kvadratrot inblandad.",
                "Den långa kateten är √3 gånger den korta kateten, [[b = a\\sqrt{3}]], där [[\\sqrt{3} \\approx 1.732]].",
                "Sidförhållandet [[1 : \\sqrt{3} : 2]] är oberoende av triangelns storlek, så skalning av triangeln lämnar förhållandet oförändrat.",
                "Alla 30-60-90-trianglar är likformiga, eftersom de har samma tre vinklar och samma sidproportioner.",
                "Arean beror på kvadraten av den korta kateten, [[A = \\frac{a^2\\sqrt{3}}{2}]], så dubblering av den korta kateten fyrdubblar arean.",
                "Omkretsen skalar direkt med den korta kateten, [[P = a(3 + \\sqrt{3})]], så dubblering av den korta kateten dubblerar omkretsen.",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Vanliga misstag när man löser 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Fjorton fel dyker upp om och om igen i 30-60-90-problem.",
            },
            {
              "kind": "steps",
              "steps": [
                "Att blanda ihop den korta och den långa kateten: den korta kateten ligger motstående 30° och den långa kateten motstående 60°. Identifiera varje sida efter dess motstående vinkel, inte efter hur diagrammet är roterat. Rätt: [[a]] motstående 30°, [[b]] motstående 60°.",
                "Att använda √2 istället för √3: √2 hör till 45-45-90-triangeln, vars förhållande är [[1 : 1 : \\sqrt{2}]]. En 30-60-90-triangel använder alltid √3. Rätt: [[b = a\\sqrt{3}]].",
                "Att multiplicera den korta kateten med 2 för att hitta den långa kateten: dubblering ger hypotenusan, inte den långa kateten. För [[a = 5]] cm ger dubblering 10 cm, vilket är [[c]], medan den långa kateten är [[5\\sqrt{3} \\approx 8.660]] cm. Rätt: [[b = a\\sqrt{3}]].",
                "Att använda [[a\\sqrt{3}]] som hypotenusa: hypotenusan är [[2a]], inte [[a\\sqrt{3}]]. För [[a = 5]] cm är [[a\\sqrt{3} \\approx 8.660]] cm den långa kateten, och hypotenusan är 10 cm. Rätt: [[c = 2a]].",
                "Att glömma att hypotenusan är [[2a]]: elever tillämpar ibland Pythagoras sats för att hitta hypotenusan när dubblering skulle räcka. Dubblering är snabbare och exakt. Rätt: [[c = 2a]].",
                "Att dividera med 2 istället för √3 när man hittar den korta kateten utifrån den långa kateten: att dividera [[b]] med 2 ger [[\\frac{b}{2}]], vilket inte är den korta kateten. För [[b = 12]] cm ger division med 2 6 cm, medan den rätta korta kateten är [[4\\sqrt{3} \\approx 6.928]] cm. Rätt: [[a = \\frac{b}{\\sqrt{3}}]].",
                "Att glömma att dividera med två när man beräknar area: arean är hälften av produkten av kateterna. Att använda [[A = ab]] dubblerar den sanna arean. För [[a = 6]] cm är [[ab = 36\\sqrt{3}]] cm² dubbelt så mycket som den rätta [[18\\sqrt{3}]] cm². Rätt: [[A = \\frac{ab}{2}]].",
                "Att bara lägga ihop två sidor när man beräknar omkrets: omkretsen behöver alla tre sidor. Att bara lägga ihop de två kateterna för [[a = 5]] cm ger [[5 + 5\\sqrt{3} \\approx 13.660]] cm, medan den sanna omkretsen är cirka 23.660 cm. Rätt: [[P = a + b + c]].",
                "Att blanda ihop exakta svar med decimalapproximationer: [[5\\sqrt{3}]] cm är exakt, medan 8.660 cm är avrundat. Att skriva 8.660 cm som om det vore exakt förlorar den precision som roten behåller. Rätt: ange den exakta formen först, sedan decimaltalet.",
                "Att avrunda √3 för tidigt: att använda 1.73 för √3 mitt i en beräkning förskjuter varje senare steg. För [[a = 5]] cm ger [[5 \\times 1.73 = 8.65]] cm istället för 8.660 cm. Rätt: behåll √3 exakt genom uträkningen och avrunda bara slutsvaren.",
                "Att blanda måttenheter: en kort katet i centimeter och en hypotenusa i meter kan inte kombineras direkt. Omvandla varje mått till en enhet innan du beräknar. Rätt: 0.5 m är lika med 50 cm, beräkna sedan i centimeter.",
                "Att tillämpa formlerna på en triangel med andra vinklar: formlerna [[b = a\\sqrt{3}]] och [[c = 2a]] gäller bara när vinklarna är 30°, 60° och 90°. En rätvinklig triangel med vinklarna 40° och 50° har ett annat förhållande. Rätt: bekräfta vinklarna först och använd sedan formlerna.",
                "Att blanda ihop de motstående sidorna för 30 grader och 60 grader: sidan motstående 30° är den korta kateten och sidan motstående 60° är den långa kateten, aldrig tvärtom. Att byta plats på dem gör den långa kateten kortare än den korta kateten, vilket är omöjligt. Rätt: [[a]] motstående 30°, [[b]] motstående 60°.",
                "Att glömma att area kräver kvadratenheter: en area på 31.177 cm är fel i enhet, även om talet är rätt. Area mäter yta, så det är 31.177 kvadratcentimeter. Rätt: [[A = 18\\sqrt{3} \\approx 31.177]] cm².",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Praktiska tillämpningar av 30-60-90-trianglar",
          "blocks": [
            {
              "kind": "p",
              "text": "Förhållandet dyker upp överallt där en 30°- eller 60°-vinkel möter en rät vinkel.",
            },
            {
              "kind": "p",
              "text": "Den vanligaste användningen är geometriläxor och trigonometriövningar, där 30-60-90-problem testar om elever kan identifiera den korta kateten, tillämpa förhållandet och behålla exakta rotsvar. Beräkningar av höjden i liksidiga trianglar använder samma idé omvänt: höjden i en liksidig triangel är den långa kateten i 30-60-90-triangeln som bildas genom att dela den på mitten, så en sida på 10 cm ger en höjd på [[5\\sqrt{3} \\approx 8.660]] cm.",
            },
            {
              "kind": "p",
              "text": "Teknisk ritning, arkitektur och konstruktionsgeometri använder 30-60-90-samband när en design kräver en 30°- eller 60°-vinkel, till exempel en taklutning, en ramp eller ett diagonalt stag. En byggare som känner till en sida i en sådan triangel kan hitta de andra utan att mäta dem direkt. Klassrumsdemonstrationer använder triangeln för att visa hur ett fast förhållande förvandlar en mätning till en fullständig beskrivning av en form.",
            },
            {
              "kind": "p",
              "text": "Matematisk modellering använder förhållandet överallt där diagonala samband och höjdsamband i geometriska former behöver exakta värden, till exempel i hexagonala mönster, där 60°-vinklarna i en regelbunden hexagon skapar 30-60-90-trianglar inuti formen. Detta är realistiska användningar av själva geometrin, inte påståenden om tekniska toleranser: verkligt designarbete lägger till materialgränser och säkerhetsmarginaler utöver de exakta geometriska värdena på den här sidan.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Övningsproblem med svar",
          "blocks": [
            {
              "kind": "p",
              "text": "Arbeta igenom alla sex problemen på papper innan du läser svaren.",
            },
            {
              "kind": "h3",
              "text": "Problem 1: Hitta den långa kateten utifrån den korta kateten",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en kort katet på [[a = 6]] cm. Hitta den långa kateten [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problem 2: Hitta hypotenusan utifrån den korta kateten",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en kort katet på [[a = 11]] cm. Hitta hypotenusan [[c]].",
            },
            {
              "kind": "h3",
              "text": "Problem 3: Hitta den korta kateten utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en hypotenusa på [[c = 24]] cm. Hitta den korta kateten [[a]].",
            },
            {
              "kind": "h3",
              "text": "Problem 4: Hitta den långa kateten utifrån hypotenusan",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en hypotenusa på [[c = 14]] cm. Hitta den långa kateten [[b]].",
            },
            {
              "kind": "h3",
              "text": "Problem 5: Beräkna arean utifrån den korta kateten",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en kort katet på [[a = 9]] cm. Hitta arean [[A]].",
            },
            {
              "kind": "h3",
              "text": "Problem 6: Beräkna omkretsen utifrån den korta kateten",
            },
            {
              "kind": "p",
              "text": "En 30-60-90-triangel har en kort katet på [[a = 7]] cm. Hitta omkretsen [[P]].",
            },
            {
              "kind": "h3",
              "text": "Svar på övningsproblemen",
            },
            {
              "kind": "p",
              "text": "Svar 1: [[b = a\\sqrt{3} = 6\\sqrt{3} \\approx 10.392]] cm. Det exakta svaret är [[6\\sqrt{3}]] cm.",
            },
            {
              "kind": "p",
              "text": "Svar 2: [[c = 2a = 2 \\times 11 = 22]] cm. Hypotenusan är exakt dubbelt så lång som den korta kateten.",
            },
            {
              "kind": "p",
              "text": "Svar 3: [[a = \\frac{c}{2} = \\frac{24}{2} = 12]] cm. Den korta kateten är exakt halva hypotenusan.",
            },
            {
              "kind": "p",
              "text": "Svar 4: [[b = \\frac{c\\sqrt{3}}{2} = \\frac{14\\sqrt{3}}{2} = 7\\sqrt{3} \\approx 12.124]] cm. Kontrollera ordningen: den korta kateten är 7 cm, den långa kateten är cirka 12.124 cm och hypotenusan är 14 cm.",
            },
            {
              "kind": "p",
              "text": "Svar 5: [[A = \\frac{a^2\\sqrt{3}}{2} = \\frac{81\\sqrt{3}}{2} \\approx 70.148]] kvadratcentimeter. Det exakta svaret är [[\\frac{81\\sqrt{3}}{2}]] cm².",
            },
            {
              "kind": "p",
              "text": "Svar 6: [[P = a(3 + \\sqrt{3}) = 7(3 + \\sqrt{3}) \\approx 33.124]] cm. Att lägga ihop sidorna en i taget ger samma resultat: [[7 + 7\\sqrt{3} + 14 = 21 + 7\\sqrt{3} \\approx 33.124]] cm.",
            },
          ],
        },
      },
      "relatedHeading": "Relaterade kalkylatorer för rätvinkliga trianglar",
      "relatedIntro": "Varje kalkylator nedan hanterar en annan uppgift för rätvinkliga trianglar, så välj det verktyg som passar det mått du behöver.",
      "relatedItems": [
        "Kalkylator för speciella rätvinkliga trianglar",
        "Kalkylator för 45-45-90-triangel",
        "Kalkylator för sidor i rätvinklig triangel",
        "Kalkylator för area av rätvinklig triangel",
        "Kalkylator för omkrets av rätvinklig triangel",
        "Kalkylator för Pythagoras sats",
      ],
      "faqHeading": "Vanliga frågor",
      "faqs": [
        {
          "question": "Vad är en 30-60-90-triangel?",
          "answer": "En 30-60-90-triangel är en rätvinklig triangel med vinklarna 30°, 60° och 90°. Den kallas en speciell rätvinklig triangel eftersom sidlängderna alltid följer det fasta förhållandet [[1 : \\sqrt{3} : 2]]. Att känna till en sida räcker för att hitta alla andra, vilket är varför kalkylatorn bara behöver en enda indata.",
        },
        {
          "question": "Vad är sidförhållandet i en 30-60-90-triangel?",
          "answer": "Sidförhållandet är [[a : b : c = 1 : \\sqrt{3} : 2]], där [[a]] är den korta kateten, [[b]] är den långa kateten och [[c]] är hypotenusan. Det betyder att [[b = a\\sqrt{3}]] och [[c = 2a]]. Förhållandet är detsamma för varje 30-60-90-triangel, oavsett storlek.",
        },
        {
          "question": "Varför multipliceras den långa kateten med √3?",
          "answer": "Den långa kateten är höjden i den liksidiga triangeln som skapar en 30-60-90-triangel. Att dela en liksidig triangel med sidan [[2a]] på mitten ger [[b^2 = (2a)^2 - a^2 = 3a^2]], så [[b = a\\sqrt{3}]]. √3 kommer från Pythagoras sats tillämpad på den konstruktionen.",
        },
        {
          "question": "Hur hittar jag hypotenusan utifrån den korta kateten?",
          "answer": "Dubblera den korta kateten: [[c = 2a]]. Om [[a = 7]] cm är [[c = 2 \\times 7 = 14]] cm. Hypotenusan är alltid exakt dubbelt så lång som den korta kateten i en 30-60-90-triangel, eftersom den är en hel sida i den liksidiga triangeln medan den korta kateten är en halv sida.",
        },
        {
          "question": "Hur hittar jag den korta kateten utifrån hypotenusan?",
          "answer": "Halvera hypotenusan: [[a = \\frac{c}{2}]]. Om [[c = 18]] cm är [[a = \\frac{18}{2} = 9]] cm. Detta är det omvända till att dubblera den korta kateten för att hitta hypotenusan, och det fungerar bara för 30-60-90-trianglar, där hypotenusan alltid är dubbelt så lång som den korta kateten.",
        },
        {
          "question": "Hur beräknar jag den långa kateten utifrån hypotenusan?",
          "answer": "Använd [[b = \\frac{c\\sqrt{3}}{2}]]. Halvera först hypotenusan för att få den korta kateten och multiplicera sedan med √3. Om [[c = 16]] cm är [[b = 8\\sqrt{3} \\approx 13.856]] cm. Den långa kateten ligger mellan den korta kateten och hypotenusan i längd.",
        },
        {
          "question": "Hur hittar jag den korta kateten utifrån den långa kateten?",
          "answer": "Dividera den långa kateten med √3: [[a = \\frac{b}{\\sqrt{3}}]]. Om [[b = 12]] cm är [[a = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\approx 6.928]] cm. Att dividera med √3 vänder multiplikationen som används för att hitta den långa kateten utifrån den korta kateten.",
        },
        {
          "question": "Hur beräknar jag arean av en 30-60-90-triangel?",
          "answer": "Använd [[A = \\frac{a^2\\sqrt{3}}{2}]], där [[a]] är den korta kateten. Om [[a = 6]] cm är [[A = 18\\sqrt{3} \\approx 31.177]] kvadratcentimeter. Formeln är hälften av produkten av de två kateterna, med den långa kateten ersatt av [[a\\sqrt{3}]]. Area anges alltid i kvadratenheter.",
        },
        {
          "question": "Hur beräknar jag omkretsen av en 30-60-90-triangel?",
          "answer": "Använd [[P = a(3 + \\sqrt{3})]], där [[a]] är den korta kateten. Om [[a = 5]] cm är [[P = 5(3 + \\sqrt{3}) \\approx 23.660]] cm. Formeln lägger ihop alla tre sidor, [[a + a\\sqrt{3} + 2a]], och bryter ut [[a]]. Omkrets anges i vanliga enheter, inte kvadratenheter.",
        },
        {
          "question": "Kan en 30-60-90-triangel ha decimala sidlängder?",
          "answer": "Ja. Förhållandet fungerar för varje positiv längd, hel eller decimal. Om [[a = 2.5]] cm är [[b = 2.5\\sqrt{3} \\approx 4.330]] cm och [[c = 5]] cm. Decimaltal ändrar ingenting i metoden: multiplicera med √3 för den långa kateten och dubblera för hypotenusan, och avrunda bara slutsvaren.",
        },
        {
          "question": "Är varje 30-60-90-triangel likformig?",
          "answer": "Ja. Alla 30-60-90-trianglar har samma tre vinklar, 30°, 60° och 90°, och samma sidförhållande, [[1 : \\sqrt{3} : 2]]. Samma vinklar plus samma proportioner betyder att trianglarna är likformiga, så de skiljer sig bara i storlek. Att skala upp eller ner en triangel ger en annan 30-60-90-triangel.",
        },
        {
          "question": "Hur kan jag kontrollera om mina triangelmått är korrekta?",
          "answer": "Kontrollera förhållandet, [[\\frac{b}{a} = \\sqrt{3}]] och [[\\frac{c}{a} = 2]], bekräfta sedan [[a^2 + b^2 = c^2]] med Pythagoras sats, och bekräfta [[a < b < c]]. För [[a = 5]] cm, [[b \\approx 8.660]] cm och [[c = 10]] cm klarar alla fyra kontrollerna. Om någon kontroll misslyckas, gör om beräkningen.",
        },
      ],
    },
};
